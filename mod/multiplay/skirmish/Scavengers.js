function eventStartLevel()
{
	setTimer("updateOrders", 1000);
}

function updateOrders()
{
	const targets = getTargets();
	if (!targets)
	{
		return;
	}

	enumDroid(me).forEach(droid =>
	{
		if (droid.order !== DORDER_ATTACK)
		{
			const target = targets[Math.floor(Math.random() * targets.length)];
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
