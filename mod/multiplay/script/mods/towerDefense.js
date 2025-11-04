let currentIndex = 0;
let rank;
let won = false;

namespace("td_");

function td_eventStartLevel()
{
	removeScavengerAI();
	disableVTOL();
	makeEverythingAvailable(scavengerPlayer);
	rank = calculateRanks(totalRounds);
	next();

	if (scavengers === 0) // Scavenger AI disabled
	{
		// Control with fake AI
		setTimer("updateOrders", 1000);
	}
}

function td_eventDestroyed(object)
{
	// Reward players with power upon killing a scavenger
	// The reward amount = the cost of the destroyed object
	if (object.player == scavengerPlayer)
	{
		for (let player = 0; player < maxPlayers; player++)
		{
			hackNetOff();
			setPower(playerPower(player) + object.cost, player);
			hackNetOn();
		}
	}
}

function next()
{
	const obj = CONFIG.at(currentIndex);
	if (obj)
	{
		if (obj.type == "round")
		{
			processRound(obj);
		}
		else if (obj.type == "wait")
		{
			processWait(obj);
		}
		else if (obj.type == "spawn")
		{
			processSpawn(obj);
		}
		currentIndex++;
	}
	else
	{
		won = true;
	}
}

function processRound(obj)
{
	console(" ");
	console(_("Round") + " " + obj.round + "/" + totalRounds);
	console(" ");

	Spawner.rank = rank[obj.round];

	giveResearch(scavengerPlayer, currentResearchTime());

	queue("next");
}

function processWait(obj)
{
	if (obj.seconds > 20)
	{
		setMissionTime(obj.seconds);
	}
	queue("next", obj.seconds * 1000);
}

function processSpawn(obj)
{
	Spawner.queue.push(...obj.templates);
	queue("next");
}
