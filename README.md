# Tower Defense Mod
- Protect your command center!
- Scavengers spawn on the edges of the map
- Earn power by destroying scavengers
- Works on any map, with any number of players

## Download
1. Start Warzone 2100. Click **Options**
2. Click "Open Configuration Directory"
3. Download [`📦4p-td1_v3.wz`](https://maps.wz2100.net/#/map/4p/td1_v3/). Put in `📁maps/`
4. Download [`📦TowerDefenseMod.zip`](https://github.com/aco4/WZmodTowerDefense/releases/latest). Put in `📁mods/4.6.1/autoload/`
5. Restart Warzone 2100

## Configuration
Edit `📄config.js` to configure:
- time between rounds
- total number of rounds
- scavenger unit amounts
- scavenger unit designs
- how much power is earned by destroying scavengers
- etc.

Tips:
- To double the amount of scavengers, use a text editor to replace "`spawn(`" with "`spawn(2*`"
- To triple the amount of scavengers, use a text editor to replace "`spawn(`" with "`spawn(3*`"
- To halve the amount of scavengers, use a text editor to replace "`spawn(`" with "`spawn(0.5*`"
- To double the amount of scavenger vipers, use a text editor to replace "`,vipers`" with "`*2,vipers`"
