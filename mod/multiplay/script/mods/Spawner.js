namespace("tdspawner_")

function tdspawner_eventStartLevel()
{
	flush();
	updateSpawnLocations();
	setTimer("updateSpawnLocations", 30 * 1000);
}

function updateSpawnLocations()
{
	Spawner.updateLocations();
}

function flush()
{
	if (Spawner.locations.length > 0 && Spawner.queue.length > 0)
	{
		Spawner.spawn();
		queue("flush");
	}
	else
	{
		// No units to spawn right now. Check again later.
		queue("flush", 2 * 1000);
	}
}

class Spawner
{
	static {
		SaveLoad.persist(this);
	}
	static locations = [];
	static queue = [];
	static player = null;
	static rank = 0;

	static spawn()
	{
		if (Spawner.locations.length === 0 || Spawner.queue.length === 0 || Spawner.player === null)
		{
			return;
		}
		const [x, y] = Spawner.locations[syncRandom(Spawner.locations.length)];
		const template = Spawner.queue.shift();
		const droid = Template.spawn(template, Spawner.player, x, y);
		setDroidExperience(droid, Stats.Brain["Z NULL BRAIN"].RankThresholds[Spawner.rank]);
	}

	static updateLocations()
	{
		let targets = [];
		for (let player = 0; player < maxPlayers; player++)
		{
			targets = targets.concat(enumStruct(player, HQ));
		}

		const canSpawnAt = (x, y) =>
		{
			return terrainType(x, y) !== TER_CLIFFFACE
				&& terrainType(x, y) !== TER_WATER
				&& targets.some(t => propulsionCanReach("wheeled01", x, y, t.x, t.y));
		};

		const { x: x1, y: y1, x2, y2 } = getScrollLimits();
		Spawner.locations = [];

		// North
		for (let x = x1 + 1; x < x2 - 1; x++)
		{
			const y = y1 + 1;
			if (canSpawnAt(x, y))
			{
				Spawner.locations.push([x, y]);
			}
		}
		// South
		for (let x = x1 + 1; x < x2 - 1; x++)
		{
			const y = y2 - 2;
			if (canSpawnAt(x, y))
			{
				Spawner.locations.push([x, y]);
			}
		}
		// West
		for (let y = y1 + 2; y < y2 - 1; y++)
		{
			const x = x1 + 1;
			if (canSpawnAt(x, y))
			{
				Spawner.locations.push([x, y]);
			}
		}
		// East
		for (let y = y1 + 2; y < y2 - 1; y++)
		{
			const x = x2 - 2;
			if (canSpawnAt(x, y))
			{
				Spawner.locations.push([x, y]);
			}
		}
	}
}
