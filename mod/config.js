scavs = [
    "*BaBa MG* *BaBa Body* BaBaLegs",
]
wheels = [
    "Machinegun Viper Wheels",
    "Flamer Viper Wheels",
]
halftracks = [
    "Twin Machinegun Viper Half-tracks",
]
hmg = [
    "Heavy Machinegun Viper Half-tracks",
    "Heavy Machinegun Cobra Half-tracks",
]
cyborgs = [
    "Super Scourge Cyborg Cyborg Heavy Body Cyborg Propulsion",
]
boss1 = [
    "Heavy Machinegun Heavy Machinegun Dragon Hover",
]

CONFIG = [
    wait(180),

    round(1),
    spawn(200, scavs),
    spawn(50, wheels),
    wait(60),

    round(2),
    spawn(50, scavs),
    spawn(200, halftracks),
    spawn(10, cyborgs),
    wait(60),

    round(3),
    spawn(200, hmg),
    spawn(10, cyborgs),
    spawn(10, boss1),
    wait(60),

    round(4),
    spawn(100, boss1),
    wait(90),

    round(5),
    spawn(100, cyborgs),
]
