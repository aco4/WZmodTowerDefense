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
    spawn(70, people),
    spawn(15, scavs),
    wait(90),

    round(2),
    spawn(80, people),
    spawn(45, scavs),
    wait(90),

    round(3),
    spawn(25, people),
    spawn(75, scavs),
    spawn(10, wheels),
    wait(90),

    round(4),
    spawn(25, scavs),
    spawn(25, wheels),
    spawn(10, halftracks),
    wait(90),

    round(5),
    spawn(50, wheels),
    spawn(25, halftracks),
    wait(90),

    round(6),
    spawn(65, wheels),
    spawn(40, halftracks),
    wait(90),

    round(7),
    spawn(15, wheels),
    spawn(75, halftracks),
    spawn(10, hmg),
    wait(90),

    round(8),
    spawn(25, halftracks),
    spawn(25, hmg),
    wait(90),

    round(9),
    spawn(75, hmg),
    wait(90),

    round(10),
    spawn(75, hmg),
    spawn(1, cyborgs),
    wait(90),

    round(11),
    spawn(100, hmg),
    spawn(5, cyborgs),
    wait(90),

    round(12),
    spawn(50, hmg),
    spawn(25, cyborgs),
    spawn(4, boss1),
    wait(90),

    round(13),
    spawn(50, cyborgs),
    spawn(6, boss1),
    wait(90),

    round(14),
    spawn(75, cyborgs),
    spawn(8, boss1),
    wait(90),

    round(15),
    spawn(100, cyborgs),
    spawn(10, boss1),
    wait(90),

    round(16),
    spawn(100, boss1),
]
