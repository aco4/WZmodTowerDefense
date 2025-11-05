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
    "Medium Cannon Python Half-tracks",
    "Lancer Python Half-tracks",
    "Hyper Velocity Cannon Python Half-tracks",
    "Assault Gun Python Half-tracks",
    "Inferno Python Half-tracks",
]
panthers = [
    "Lancer Panther Half-tracks",
    "Hyper Velocity Cannon Panther Half-tracks",
    "Assault Gun Panther Half-tracks",
    "Inferno Panther Half-tracks",
    "Assault Cannon Panther Half-tracks",
]
hra = [
    "Heavy Rocket Array Panther Wheels",
]
tigers = [
    "Needle Gun Tiger Half-tracks",
    "Pulse Laser Tiger Half-tracks",
    "Scourge Tiger Half-tracks",
]
nexus = [
    "Rail Gun Retaliation Half-tracks",
    "Pulse Laser Retaliation Half-tracks",
    "Scourge Retaliation Half-tracks",
    "Rail Gun Retribution Half-tracks",
    "Heavy Laser Retribution Half-tracks",
    "Scourge Retribution Half-tracks",
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
boss1 = [
    "Assault Gun Vengeance Hover",
    "Hyper Velocity Cannon Vengeance Tracks",
]
boss2 = [
    "Twin Assault Cannon Wyvern Hover",
    "Twin Assault Cannon Wyvern Tracks",
]
boss3 = [
    "Seraph Missile Array Seraph Missile Array Dragon Hover",
    "Gauss Cannon Gauss Cannon Dragon Hover",
    "Seraph Missile Array Seraph Missile Array Dragon Tracks",
    "Gauss Cannon Gauss Cannon Dragon Tracks",
]
hboss2 = [
    "Twin Assault Cannon Wyvern Hover",
]

setResearchDelay(360)

wait(180), round(1), spawn(15,people), spawn(5,scavs), spawn(15,people)
wait(100), round(2), spawn(30,people), spawn(15,scavs), spawn(30,people)
wait(105), round(3), spawn(30,scavs), spawn(40,people), spawn(5,wheels)
wait(110), round(4), spawn(2,vipers), spawn(10,people), spawn(10,wheels), spawn(5,scavs), spawn(10,people)
wait(115), round(5), spawn(15,scavs), spawn(4,vipers), spawn(10,wheels)
wait(120), round(6), spawn(10,bugs), spawn(2,cobras), spawn(8,vipers), spawn(50,people)
wait(125), round(7), spawn(4,cybsT0), spawn(10,vipers), spawn(10,wheels), spawn(4,cobras)
wait(130), round(8), spawn(15,bugs), spawn(8,cobras), spawn(3,mra), spawn(25,wheels), spawn(10,vipers)
wait(135), round(9), spawn(20,bugs), spawn(25,scavs), spawn(5,mra), spawn(15,cobras)
wait(180), round(10), spawn(12,cybsT0), spawn(10,mra), spawn(20,cobras), spawn(10,wheels), spawn(5,boss1)

wait(180), round(11), spawn(35,bugs), spawn(5,scorps), spawn(5,pythons), spawn(15,mra)
wait(135), round(12), spawn(7,cybsT1), spawn(15,pythons), spawn(20,mra), spawn(15,scorps)
wait(135), round(13), spawn(30,scorps), spawn(15,pythons), spawn(15,bugs), spawn(10,pythons), spawn(10,mra), spawn(10,hra)
wait(135), round(14), spawn(30,pythons), spawn(10,panthers), spawn(21,cybsT1), spawn(15,hra)
wait(135), round(15), spawn(100,bugs), spawn(15,scorps), spawn(5,mantis), spawn(30,hra), spawn(20,pythons), spawn(20,panthers)
wait(135), round(16), spawn(5,scorps), spawn(10,mantis), spawn(5,boss1), spawn(40,hra), spawn(10,pythons), spawn(30,panthers)
wait(135), round(17), spawn(15,cybsT2), spawn(20,mantis), spawn(40,panthers), spawn(20,hra)
wait(135), round(18), spawn(40,mantis), spawn(10,boss1), spawn(50,panthers), spawn(50,hra)
wait(135), round(19), spawn(50,mantis), spawn(60,panthers), spawn(25,hra), spawn(45,cybsT2)
wait(210), round(20), spawn(60,mantis), spawn(15,boss2), spawn(60,hra), spawn(70,panthers)

wait(210), round(21), spawn(60,mantis), spawn(20,tigers), spawn(15,seraph)
wait(135), round(22), spawn(40,mantis), spawn(30,tigers), spawn(25,seraph)
wait(135), round(23), spawn(20,cybsT3), spawn(20,mantis), spawn(5,hboss2), spawn(40,tigers)
wait(135), round(24), spawn(10,hboss2), spawn(50,tigers), spawn(35,seraph)
wait(135), round(25), spawn(20,hboss2), spawn(20,nexus), spawn(50,tigers), spawn(60,cybsT3)
wait(135), round(26), spawn(30,hboss2), spawn(30,nexus), spawn(40,tigers), spawn(45,seraph)
wait(135), round(27), spawn(100,hboss2), spawn(40,nexus), spawn(30,tigers), spawn(55,seraph)
wait(135), round(28), spawn(30,cybsT4), spawn(40,hboss2), spawn(50,nexus), spawn(15,tigers), spawn(65,seraph)
wait(135), round(29), spawn(40,hboss2), spawn(60,nexus), spawn(75,seraph)
wait(300), round(30), spawn(80,boss3), spawn(85,seraph), spawn(90,cybsT4)
