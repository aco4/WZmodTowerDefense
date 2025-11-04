function updateOrders()
{
	const targets = getTargets();
	if (!targets)
	{
		return;
	}

	enumDroid(scavengerPlayer).forEach(droid =>
	{
		if (droid.order !== DORDER_ATTACK)
		{
			const target = targets[syncRandom(targets.length)];
			orderDroidObj(droid, DORDER_ATTACK, target);
		}
	});
}

function getTargets()
{
	let targets = [];
	for (let player = 0; player < maxPlayers; player++)
	{
		targets = targets.concat(enumStruct(player, HQ));
	}

	if (targets.length === 0)
	{
		return null;
	}

	return targets;
}
