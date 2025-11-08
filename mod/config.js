people = [
    "*BaBa MG* *BaBa Body* BaBaLegs",
]
scavs = [
    "*BusCannon* *School Bus Body* BaBaProp",
    "*Flamer* *School Bus Body* BaBaProp",
    "*BusCannon* *Fire Engine Body* BaBaProp",
    "*Flamer* *Fire Engine Body* BaBaProp",
    // "*Jeep MG* *Baba Jeep Body* BaBaProp", // TODO same name conflict B2JeepBody
    "*BabaRocket* *Baba Jeep Body* BaBaProp", // TODO same name conflict B2RKJeepBody
    "*Buggy MG* *Buggy Body* BaBaProp",
    "*BabaRocket* *Rocket Buggy Body* BaBaProp",
    "*Trike MG* *Trike Body* BaBaProp",
]
wheels = [
    "Machinegun Viper Wheels",
    "Flamer Viper Wheels",
    "Light Cannon Viper Wheels",
]
vipers = [
    "Flamer Viper Half-tracks",
    "Twin Machinegun Viper Half-tracks",
    "Light Cannon Viper Half-tracks",
    "Mini-Rocket Pod Viper Half-tracks",
]
cobras = [
    "Heavy Machinegun Cobra Half-tracks",
    "Light Cannon Cobra Half-tracks",
    "Mini-Rocket Pod Cobra Half-tracks",
    "Medium Cannon Cobra Wheels",
]
mra = [
    "Mini-Rocket Array Scorpion Wheels",
    "Mini-Rocket Array Cobra Wheels",
]
bugs = [
    "Flamer Bug Hover",
    "Light Cannon Bug Hover",
]
scorps = [
    "Inferno Scorpion Hover",
    "Medium Cannon Scorpion Hover",
]
mantis = [
    "Plasmite Flamer Mantis Hover",
    "Heavy Cannon Mantis Hover",
]
pythons = [
    "Mini-Rocket Pod Python Half-tracks",
    "Medium Cannon Python Half-tracks",
    "Lancer Python Half-tracks",
    "Assault Gun Python Half-tracks",
    "Inferno Python Half-tracks",
]
panthers = [
    "Lancer Panther Half-tracks",
    "Assault Gun Panther Half-tracks",
    "Inferno Panther Half-tracks",
    "Assault Cannon Panther Half-tracks",
    "Tank Killer Panther Half-tracks",
]
hra = [
    "Heavy Rocket Array Panther Wheels",
]
tigers = [
    "Needle Gun Tiger Half-tracks",
    "Flashlight Tiger Half-tracks",
    "Scourge Missile Tiger Half-tracks",
]
nexus = [
    "Pulse Laser Retribution Half-tracks",
    "Rail Gun Retribution Half-tracks",
    "Scourge Missile Retribution Half-tracks",
]
seraph = [
    "Seraph Missile Array Retaliation Wheels",
    "Seraph Missile Array Retribution Wheels",
]
cybsT0 = [
    "Machinegunner Cyborg Light Body Cyborg Propulsion",
    "Cyborg Flamer Cyborg Light Body Cyborg Propulsion",
    "Heavy Gunner Cyborg Light Body Cyborg Propulsion",
]
cybsT1 = [
    "Cyborg Lancer Cyborg Light Body Cyborg Propulsion",
    "*Cyborg Thermite Weapon* Cyborg Light Body Cyborg Propulsion",
    "*CyborgRotMG* Cyborg Light Body Cyborg Propulsion",
]
cybsT2 = [
    "Super Heavy-Gunner Cyborg Heavy Body Cyborg Propulsion",
    "Super HVC Cyborg Cyborg Heavy Body Cyborg Propulsion",
    "Super Auto-Cannon Cyborg Cyborg Heavy Body Cyborg Propulsion",
    "Super Tank-Killer Cyborg Cyborg Heavy Body Cyborg Propulsion",
]
cybsT3 = [
    "*Cyb-Wpn-Rail1* Cyborg Light Body Cyborg Propulsion",
    "*Cyb-Wpn-Laser* Cyborg Light Body Cyborg Propulsion",
    "*Cyb-Wpn-Atmiss* Cyborg Light Body Cyborg Propulsion",
]
cybsT4 = [
    "Super Scourge Cyborg Cyborg Heavy Body Cyborg Propulsion",
    "Super Pulse Laser Cyborg Cyborg Heavy Body Cyborg Propulsion",
    "Super Rail-Gunner Cyborg Heavy Body Cyborg Propulsion",
]
vengeanceH = [
    "Hyper Velocity Cannon Vengeance Hover",
]
vengeanceT = [
    "Hyper Velocity Cannon Vengeance Tracks",
]
wyvernH = [
    "Twin Assault Cannon Wyvern Hover",
]
wyvernT = [
    "Twin Assault Cannon Wyvern Tracks",
]
dragonH = [
    "Seraph Missile Array Seraph Missile Array Dragon Hover",
    "Gauss Cannon Gauss Cannon Dragon Hover",
]
dragonT = [
    "Seraph Missile Array Seraph Missile Array Dragon Tracks",
    "Gauss Cannon Gauss Cannon Dragon Tracks",
]

setResearchDelay(360)
setPowerRewardFunction(power => (4*power)**0.75)

wait(180), round(1), spawn(15,people), spawn(5,scavs), spawn(15,people)
wait(100), round(2), spawn(30,people), spawn(15,scavs), spawn(30,people)
wait(100), round(3), spawn(30,scavs), spawn(40,people), spawn(5,wheels)
wait(100), round(4), spawn(2,vipers), spawn(10,people), spawn(10,wheels), spawn(5,scavs), spawn(10,people)
wait(110), round(5), spawn(15,scavs), spawn(4,vipers), spawn(10,wheels)
wait(120), round(6), spawn(10,bugs), spawn(2,cobras), spawn(8,vipers), spawn(50,people)
wait(125), round(7), spawn(4,cybsT0), spawn(10,vipers), spawn(10,wheels), spawn(4,cobras)
wait(130), round(8), spawn(15,bugs), spawn(8,cobras), spawn(2,mra), spawn(25,wheels), spawn(10,vipers)
wait(135), round(9), spawn(20,bugs), spawn(30,scavs), spawn(4,mra), spawn(15,cobras)
wait(180), round(10), spawn(12,cybsT0), spawn(6,mra), spawn(20,cobras), spawn(10,wheels), spawn(3,vengeanceH), spawn(3,vengeanceT)

wait(160), round(11), spawn(35,bugs), spawn(5,scorps), spawn(5,pythons), spawn(10,mra)
wait(140), round(12), spawn(10,cybsT1), spawn(15,pythons), spawn(12,mra), spawn(15,scorps)
wait(140), round(13), spawn(30,scorps), spawn(2,vengeanceT), spawn(25,pythons), spawn(15,bugs), spawn(6,mra), spawn(6,hra)
wait(140), round(14), spawn(30,pythons), spawn(10,panthers), spawn(30,cybsT1), spawn(8,hra)
wait(140), round(15), spawn(100,bugs), spawn(35,scorps), spawn(10,mantis), spawn(5,vengeanceH)
wait(140), round(16), spawn(3,vengeanceT), spawn(5,scorps), spawn(15,mantis), spawn(6,vengeanceH), spawn(12,hra), spawn(10,pythons), spawn(30,panthers)
wait(140), round(17), spawn(3,vengeanceT), spawn(15,cybsT2), spawn(20,mantis), spawn(40,panthers), spawn(10,hra)
wait(140), round(18), spawn(10,vengeanceH), spawn(25,mantis), spawn(60,panthers), spawn(16,hra)
wait(140), round(19), spawn(35,mantis), spawn(20,panthers), spawn(18,hra), spawn(45,cybsT2)
wait(200), round(20), spawn(25,mantis), spawn(30,wyvernH), spawn(15,wyvernT), spawn(4,vengeanceT), spawn(20,hra), spawn(20,panthers)

wait(170), round(21), spawn(6,vengeanceT), spawn(15,tigers), spawn(6,seraph), spawn(30,mantis)
wait(140), round(22), spawn(8,vengeanceH), spawn(45,mantis), spawn(25,tigers), spawn(8,seraph)
wait(140), round(23), spawn(20,cybsT3), spawn(15,mantis), spawn(5,wyvernH), spawn(5,wyvernT), spawn(10,vengeanceT), spawn(30,tigers)
wait(140), round(24), spawn(10,seraph), spawn(10,wyvernH), spawn(60,tigers), spawn(10,nexus)
wait(140), round(25), spawn(10,wyvernT), spawn(15,vengeanceT), spawn(25,nexus), spawn(20,tigers), spawn(60,cybsT3)
wait(140), round(26), spawn(12,seraph), spawn(20,wyvernH), spawn(45,nexus), spawn(25,tigers)
wait(140), round(27), spawn(15,vengeanceH), spawn(60,wyvernH), spawn(20,nexus), spawn(14,seraph)
wait(140), round(28), spawn(10,wyvernT), spawn(30,cybsT4), spawn(60,nexus), spawn(16,seraph)
wait(140), round(29), spawn(20,wyvernT), spawn(18,seraph), spawn(40,nexus)
wait(270), round(30), spawn(60,dragonH), spawn(40,dragonT), spawn(20,dragonH), spawn(90,cybsT4)
