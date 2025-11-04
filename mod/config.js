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
halftracks = [
    "Twin Machinegun Viper Half-tracks",
    "Light Cannon Viper Half-tracks",
    "Mini-Rocket Pod Viper Half-tracks",
]
hmg = [
    "Heavy Machinegun Viper Half-tracks",
    "Heavy Machinegun Cobra Half-tracks",
]
cyborgs = [
    "Heavy Gunner Cyborg Light Body Cyborg Propulsion",
    "Super Scourge Cyborg Cyborg Heavy Body Cyborg Propulsion",
]
boss1 = [
    "Heavy Machinegun Heavy Machinegun Dragon Hover",
]

CONFIG = [
    wait(180),

    round(1),
    spawn(150, people),
    spawn(50, scavs),
    wait(60),

    round(2),
    spawn(50, people),
    spawn(150, scavs),
    spawn(50, wheels),
    wait(60),

    round(3),
    spawn(50, scavs),
    spawn(150, wheels),
    spawn(50, halftracks),
    wait(60),

    round(4),
    spawn(50, wheels),
    spawn(150, halftracks),
    spawn(50, hmg),
    spawn(5, cyborgs),
    wait(90),

    round(5),
    spawn(50, halftracks),
    spawn(150, hmg),
    spawn(10, cyborgs),
    wait(90),

    round(6),
    spawn(200, hmg),
    spawn(20, cyborgs),
    spawn(5, boss1),
    wait(90),

    round(7),
    spawn(100, cyborgs),
    wait(90),

    round(8),
    spawn(100, boss1),
]
