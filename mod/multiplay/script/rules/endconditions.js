// registrate events conditions_eventGameInit and conditions_eventGameLoaded
namespace("conditions_");

const STATE_contender = "contender";
const STATE_winner = "winner";
const STATE_loser = "loser";
const STATE_spectator = "spectator";

var teams; // array class instance Team
var playersTeam; // array class instancePlayer

class Player
{
	constructor(playNum)
	{
		this.playNum = playNum;
	}

	hasHQ()
	{
		return enumStruct(this.playNum, HQ).length !== 0;
	}

	finalizeGame(state)
	{
		const transformToSpectator = (state === STATE_loser && !isSpectator(this.playNum) && playerData[this.playNum].isHuman);
		if (state === STATE_loser && this.playNum === selectedPlayer)
		{
			gameOverMessage(false);
		}
		if (state === STATE_winner && this.playNum === selectedPlayer)
		{
			gameOverMessage(true);
		}
		if (transformToSpectator)
		{
			// should come *after* the gameOverMessage call to ensure the proper gameOverMessage is displayed
			transformPlayerToSpectator(this.playNum);
		}
	}
}

class Team
{
	constructor(playerPlayNums)
	{
		this.players = playerPlayNums.map(playNum => new Player(playNum));
		playerPlayNums.forEach(playerNum => playersTeam[playerNum] = this);
	}

	hasHQ()
	{
		return this.players.some(p => p.hasHQ());
	}

	containsPlayer(playNum)
	{
		return this.players.some(p => p.playNum === playNum);
	}

	setState(state)
	{
		this.state = state;
		this.players.forEach(p => setGameStoryLogPlayerDataValue(p.playNum, "usertype", this.state));
		if (state ===  STATE_winner || state === STATE_loser ||  state === STATE_spectator)
		{
			this.players.forEach(p => p.finalizeGame(this.state));
		}
	}

	isContender()
	{
		return this.state === STATE_contender;
	}
}

function checkEndConditions()
{
	const newlyLosingTeams = teams.filter(team => team.isContender() && !team.hasHQ());
	newlyLosingTeams.forEach(team => team.setState(STATE_loser));

	const contenderTeams = teams.filter(team => team.isContender());
	if ((lastRound && Spawner.queue.length == 0 && enumDroid(scavengerPlayer).length == 0) || contenderTeams.length == 0) // game end
	{
		contenderTeams.forEach(team => team.setState(STATE_winner));

		// game over message for selectedPlayer who is spectator
		// (can be spectator-only slots who have not yet received a message,
		// or previous losers who were converted to spectators who should now
		// receive a new message that the game has fully ended)
		if (isSpectator(-1))
		{
			gameOverMessage(false);
		}
	}
}

//	FIXME allianceExistsBetween() dont correct if leave player in ALLIANCES_UNSHARED, ALLIANCES_TEAMS mode
//	and team is garbage in NO_ALLIANCES, ALLIANCES mode
function inOneTeam(playnum, splaynum)
{

	if ((alliancesType === ALLIANCES_UNSHARED || alliancesType === ALLIANCES_TEAMS) &&
		playerData[playnum].team === playerData[splaynum].team)
	{
		return true;
	}
	else if (alliancesType === NO_ALLIANCES && playnum === splaynum)
	{
		return true;
	}
	// Victory in alliance mode is also personal.
	// Alliances do not affect victory.
	// allianceExistsBetween() is not used.
	else if (alliancesType === ALLIANCES && playnum === splaynum)
	{
		return true;
	}
	return false;
}

function createTeams()
{
	teams = [];
	playersTeam = Array(maxPlayers);
	const inTeamPlayNums = Array(maxPlayers).fill(false);
	for (let playNum = 0; playNum < maxPlayers; ++playNum)
	{
		if (isSpectator(playNum))
		{
			continue; // skip slots that start as spectators
		}
		if (!playerData[playNum].isHuman && !playerData[playNum].isAI)
		{
			// not an allocated slot (is closed or no player / AI)
			continue;
		}
		if (inTeamPlayNums[playNum] === true)
		{
			continue;
		}
		inTeamPlayNums[playNum] = true;
		const members =[playNum];
		for (let splayNum = 0; splayNum < maxPlayers; ++splayNum)
		{
			if (isSpectator(splayNum))
			{
				continue; // skip slots that start as spectators
			}
			if (!playerData[splayNum].isHuman && !playerData[splayNum].isAI)
			{
				// not an allocated slot (is closed or no player / AI)
				continue;
			}
			if (inTeamPlayNums[splayNum] === false && inOneTeam(playNum, splayNum) === true)
			{
				members.push(splayNum);
				inTeamPlayNums[splayNum] = true;
			}
		}
		const team = new Team(members);
		if (team.hasHQ())
		{
			teams.push(team);
			team.setState(STATE_contender);
		}
		else
		{
			team.setState(STATE_spectator);
		}
	}
}

/////////////////////////////////////
//First start and loading the save.//
/////////////////////////////////////

function conditions_eventGameInit()
{
	createTeams();
	setTimer("checkEndConditions", 3000);

	if (gameTimeLimit > 0)
	{
		queue("timeOutGameTenMinWarning", gameTimeLimit - (10 * 60 * 1000));
		queue("timeOutGame", gameTimeLimit);
	}
}

function conditions_eventGameLoaded()
{
	createTeams();
}

function timeOutGameTenMinWarning()
{
	console(
		_("Host-configured game time limit is approaching. If there is no winner within 10 minutes, the game will end.")
	);
}

function timeOutGame()
{
	console(
		_("Host-configured game time limit exceeded. Game is over.")
	);
	gameOverMessage(false);
}
