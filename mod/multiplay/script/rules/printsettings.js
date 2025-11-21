function printGameSettings()
{
	console(
		"\n" +
		_("Tower Defense") + "\n" +
		_("Protect your command center!") + "\n" +
		"\n"
	);

	if (IS_HACK) // HACK WARNING TODO
	{
		console("WARNING: Saving/loading is broken because Scavengers are off");
		console("WARNING: Saving/loading is broken because Scavengers are off");
		console("WARNING: Saving/loading is broken because Scavengers are off");
	}
}
