const actions = [];
let totalRounds = 0;
let researchDelayMs = 0;
let powerRewardFunction = (power) => power;

function round()
{
	actions.push({ type: "round", round: ++totalRounds });
}

function setResearchDelay(seconds)
{
	researchDelayMs = seconds * 1000;
}

function setPowerRewardFunction(f)
{
	powerRewardFunction = (power) => Math.ceil(f(power));
}

function wait(seconds)
{
	actions.push({ type: "wait", seconds });
}

/**
 * @param {number} count
 * @param {string[]} templatePool - e.g. [ "Machinegun Viper Wheels", "Flamer Viper Wheels" ]
 */
function spawn(count, templatePool)
{
	// Validate the function parameters
	if (typeof count !== "number" || count < 0 || !Array.isArray(templatePool))
	{
		return;
	}

	// Convert each string in the templatePool to an actual Template
	templatePool = templatePool.map(t => Template.fromString(t)).filter(t => !!t);
	if (templatePool.length == 0)
	{
		return;
	}

	// Randomly select templates from the templatePool
	const selectedTemplates = [];
	for (let i = 0; i < count; i++)
	{
		const selectedTemplate = templatePool[syncRandom(templatePool.length)];
		selectedTemplates.push(selectedTemplate);
	}

	actions.push({ type: "spawn", templates: selectedTemplates });
}
