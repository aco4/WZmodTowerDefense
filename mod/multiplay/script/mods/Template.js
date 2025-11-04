class Template
{
	/**
	 * @param {string} body - name of the body (e.g. "Viper")
	 * @param {string} propulsion - name of the propulsion (e.g. "Wheels")
	 * @param {string[]} turrets - names of the turrets (e.g. ["Truck"])
	 */
	constructor(body, propulsion, turrets)
	{
		this.body = body;
		this.propulsion = propulsion;
		this.turrets = turrets;
	}

	spawn(player, x, y)
	{
		hackNetOff();
		const droid = addDroid(
			player, x, y,
			this.toString(),
			Stats.Body[this.body].Id,
			Stats.Propulsion[this.propulsion].Id,
			"", "",
			...this.turrets.map(turret => Template.getTurret(turret)?.Id)
		);
		hackNetOn();
		return droid;
	}

	toString()
	{
		return this.turrets.join(" ") + " " + this.body + " " + this.propulsion;
	}

	static getTurret(name)
	{
		return Stats.Weapon[name]
			|| Stats.Construct[name]
			|| Stats.Repair[name]
			|| Stats.Sensor[name]
			|| Stats.ECM[name]
			|| null;
	}

	/**
	 * @param {string} str - space-separated string in order: turrets, body, propulsion
	 * @returns {Template|null}
	 */
	static fromString(str)
	{
		const words = str.split(" ");

		// Try all ways to partition the end into body + propulsion
		for (let bodyStart = 1; bodyStart < words.length; bodyStart++) {
			for (let propStart = bodyStart + 1; propStart <= words.length; propStart++) {
				const body = words.slice(bodyStart, propStart).join(" ");
				const propulsion = words.slice(propStart).join(" ");

				if (Stats.Body.hasOwnProperty(body) &&
					Stats.Propulsion.hasOwnProperty(propulsion))
				{
					const weaponSlots = Stats.Body[body].WeaponSlots;
					const turretWords = words.slice(0, bodyStart);

					const turrets = partitionIntoTurrets(turretWords, weaponSlots);

					if (turrets !== null) {
						return new Template(body, propulsion, turrets);
					}
				}
			}
		}

		return null;

		function partitionIntoTurrets(words, numTurrets) {
			if (numTurrets === 0) {
				return words.length === 0 ? [] : null;
			}

			if (numTurrets === 1) {
				const turret = words.join(" ");
				return Stats.Weapon.hasOwnProperty(turret) ? [turret] : null;
			}

			// Try each possible length for the first turret
			for (let i = 1; i <= words.length - numTurrets + 1; i++) {
				const firstTurret = words.slice(0, i).join(" ");

				if (Stats.Weapon.hasOwnProperty(firstTurret)) {
					const rest = partitionIntoTurrets(words.slice(i), numTurrets - 1);
					if (rest !== null) {
						return [firstTurret, ...rest];
					}
				}
			}

			return null;
		}
	}
}
