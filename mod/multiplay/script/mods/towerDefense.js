let rank;

namespace("td_");

function td_eventStartLevel()
{
	removeScavengerAI();
	disableVTOL();
	disableBuildHQ();
	makeEverythingAvailable(scavengerPlayer);
	rank = calculateRanks(totalRounds);
	next();

	setTimer("updateResearch", 10 * 1000);

	if (scavengers === 0) // Scavenger AI disabled
	{
		// Control with fake AI
		setTimer("updateOrders", 1000);
	}
}

function td_eventDestroyed(object)
{
	// Reward players with power upon killing a scavenger
	// The reward amount = the cost of the destroyed object, modified by some power reward function
	if (object.player == scavengerPlayer)
	{
		for (let player = 0; player < maxPlayers; player++)
		{
			hackNetOff();
			setPower(playerPower(player) + powerRewardFunction(object.cost), player);
			hackNetOn();
		}
	}
}

function updateResearch()
{
	const timeMs = currentResearchTime() - researchDelayMs;
	giveResearch(scavengerPlayer, timeMs);
}

function next()
{
	const action = actions.shift();
	if (action)
	{
		if (action.type == "round")
		{
			processRound(action);
		}
		else if (action.type == "wait")
		{
			processWait(action);
		}
		else if (action.type == "spawn")
		{
			processSpawn(action);
		}
	}
}

function processRound(action)
{
	console(" ");
	console(_("Round") + " " + action.round + "/" + totalRounds);
	console(" ");

	Spawner.rank = rank[action.round];

	queue("next");
}

function processWait(action)
{
	if (action.seconds > 20)
	{
		setMissionTime(action.seconds);
	}
	queue("next", action.seconds * 1000);
}

function processSpawn(action)
{
	Spawner.queue.push(...action.templates);
	queue("next");
}
