function next()
{
	if (index < actions.length)
	{
		const action = actions[index++];
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
	Spawner.rank = ranks[action.round];
	playSound("pcv373.ogg"); // "Scavengers detected"
	queue("next");
}

function processWait(action)
{
	if (action.seconds > 10) {
		setMissionTime(action.seconds);
	}
	queue("next", action.seconds * 1000);
}

function processSpawn(action)
{
	// Convert each string in the templatePool to a template
	const templates = action.templatePool.map(t => Template.fromString(t)).filter(t => !!t);
	if (templates.length == 0)
	{
		return;
	}

	// Randomly select templates
	for (let i = 0; i < action.count; i++)
	{
		const template = templates[syncRandom(templates.length)];
		Spawner.queue.push(template);
	}

	queue("next");
}
