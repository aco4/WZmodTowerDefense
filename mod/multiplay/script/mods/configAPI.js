/**
 * Delay the scavenger research by some amount of time
 * @param {number} seconds
 */
function setResearchDelay(seconds)
{
	researchDelayMs = seconds * 1000;
}

/**
 * Configure how much power is rewarded by destroying a scavenger
 * @param {function(number): number} f - A function that takes the cost of the scavenger and returns an amount
 */
function setPowerRewardFunction(f)
{
	powerRewardFunction = (power) => Math.ceil(f(power));
}

/**
 * Start a new round
 */
function round()
{
	actions.push({ type: "round", round: ++totalRounds });
}

/**
 * Set the timer and wait for it to finish
 * @param {number} seconds
 */
function wait(seconds)
{
	actions.push({ type: "wait", seconds });
}

/**
 * @param {number} count - How many units to spawn
 * @param {string[]} templatePool - e.g. [ "Machinegun Viper Wheels", "Flamer Viper Wheels" ]
 */
function spawn(count, templatePool)
{
	actions.push({ type: "spawn", count, templatePool });
}
