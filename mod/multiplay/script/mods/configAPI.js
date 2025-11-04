function wait(seconds) {
	return { type: "wait", seconds };
}

/**
 * @param {number} count
 * @param {string[]} templatePool - e.g. [ "Machinegun Viper Wheels", "Flamer Viper Wheels" ]
 * @returns {object|null} null on failure
 */
function spawn(count, templatePool)
{
	// Validate the function parameters
	if (typeof count !== "number" || count < 0 || !Array.isArray(templatePool))
	{
		return null;
	}

	// Convert each string in the templatePool to an actual Template
	templatePool = templatePool.map(t => Template.fromString(t)).filter(t => !!t);
	if (templatePool.length == 0)
	{
		return null;
	}

	// Randomly select templates from the templatePool
	const selectedTemplates = [];
	for (let i = 0; i < count; i++)
	{
		const selectedTemplate = templatePool[syncRandom(templatePool.length)];
		selectedTemplates.push(selectedTemplate);
	}

	return { type: "spawn", templates: selectedTemplates };
}

function round()
{
	totalRounds++;
	return { type: "round", round: totalRounds };
}

let totalRounds = 0;
