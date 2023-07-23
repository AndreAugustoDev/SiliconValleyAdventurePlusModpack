WorldgenEvents.add(event => {
    event.addOre((ore) => {
        ore.id = "kubejs:mining_poor_uraninite"
        ore.biomes = ['allthemodium:mining']
        ore.addTarget('minecraft:stone', 'powah:uraninite_ore_poor')
        ore.addTarget('minecraft:deepslate', 'powah:deepslate_uraninite_ore_poor')
        ore.size(5)
        ore.count(8)
        ore.squared()
        ore.uniformHeight(64, 254)
    })
    event.addOre((ore) => {
        ore.id = "kubejs:mining_uraninite"
        ore.biomes = ['allthemodium:mining']
        ore.addTarget('minecraft:stone', 'powah:uraninite_ore')
        ore.addTarget('minecraft:deepslate', 'powah:deepslate_uraninite_ore')
        ore.size(4)
        ore.count(6)
        ore.squared()
        ore.uniformHeight(64, 254)
    })
    event.addOre((ore) => {
        ore.id = "kubejs:mining_dense_uraninite"
        ore.biomes = ['allthemodium:mining']
        ore.addTarget('minecraft:stone', 'powah:uraninite_ore_dense')
        ore.addTarget('minecraft:deepslate', 'powah:deepslate_uraninite_ore_dense')
        ore.size(3)
        ore.count(3)
        ore.squared()
        ore.uniformHeight(64, 254)
    })
    event.addOre((ore) => {
        ore.id = "kubejs:mining_thermal_apatite"
        ore.biomes = ['allthemodium:mining']
        ore.addTarget('minecraft:stone', 'thermal:apatite_ore')
        ore.addTarget('minecraft:deepslate', 'thermal:deepslate_apatite_ore')
        ore.size(9)
        ore.count(3)
        ore.squared()
        ore.uniformHeight(64, 254)
    })
    event.addOre((ore) => {
        ore.id = "kubejs:mining_thermal_cinnabar"
        ore.biomes = ['allthemodium:mining']
        ore.addTarget('minecraft:stone', 'thermal:cinnabar_ore')
        ore.addTarget('minecraft:deepslate', 'thermal:deepslate_cinnabar_ore')
        ore.size(5)
        ore.count(1)
        ore.squared()
        ore.uniformHeight(64, 254)
    })
    event.addOre((ore) => {
        ore.id = "kubejs:mining_thermal_niter"
        ore.biomes = ['allthemodium:mining']
        ore.addTarget('minecraft:stone', 'thermal:niter_ore')
        ore.addTarget('minecraft:deepslate', 'thermal:deepslate_niter_ore')
        ore.size(7)
        ore.count(2)
        ore.squared()
        ore.uniformHeight(64, 254)
    })
    event.addOre((ore) => {
        ore.id = "kubejs:mining_thermal_sulfur"
        ore.biomes = ['allthemodium:mining']
        ore.addTarget('minecraft:stone', 'thermal:sulfur_ore')
        ore.addTarget('minecraft:deepslate', 'thermal:deepslate_sulfur_ore')
        ore.size(7)
        ore.count(2)
        ore.squared()
        ore.uniformHeight(64, 254)
    })
    event.addOre((ore) => {
        ore.id = "kubejs:mining_mysticalagriculture_inferium"
        ore.biomes = ['allthemodium:mining']
        ore.addTarget('minecraft:stone', 'mysticalagriculture:inferium_ore')
        ore.addTarget('minecraft:deepslate', 'mysticalagriculture:deepslate_inferium_ore')
        ore.addTarget('minecraft:netherrack', 'mysticalagradditions:nether_inferium_ore')
        ore.addTarget('minecraft:end_stone', 'mysticalagradditions:end_inferium_ore')
        ore.size(7)
        ore.count(4, 8)
        ore.squared()
        ore.uniformHeight(-64, 254)
    })
    event.addOre((ore) => {
        ore.id = "kubejs:mining_mysticalagriculture_prosperity"
        ore.biomes = ['allthemodium:mining']
        ore.addTarget('minecraft:stone', 'mysticalagriculture:prosperity_ore')
        ore.addTarget('minecraft:deepslate', 'mysticalagriculture:deepslate_prosperity_ore')
        ore.addTarget('minecraft:netherrack', 'mysticalagradditions:nether_prosperity_ore')
        ore.addTarget('minecraft:end_stone', 'mysticalagradditions:end_prosperity_ore')
        ore.size(7)
        ore.count(2, 6)
        ore.squared()
        ore.uniformHeight(-64, 254)
    })
    event.addOre((ore) => {
        ore.id = "kubejs:mining_silentgear_crimson_iron"
        ore.biomes = ['allthemodium:mining']
        ore.addTarget('minecraft:netherrack', 'silentgear:crimson_iron_ore')
        ore.size(7)
        ore.count(3)
        ore.squared()
        ore.uniformHeight(0, 65)
    })
    event.addOre((ore) => {
        ore.id = "kubejs:mining_silentgear_azure_silver"
        ore.biomes = ['allthemodium:mining']
        ore.addTarget('minecraft:end_stone', 'silentgear:azure_silver_ore')
        ore.size(7)
        ore.count(3)
        ore.squared()
        ore.uniformHeight(-64, 1)
    })
    event.addOre((ore) => {
        ore.id = "kubejs:mining_evil_dark"
        ore.biomes = ['allthemodium:mining']
        ore.addTarget('minecraft:stone', 'evilcraft:dark_ore')
        ore.addTarget('minecraft:deepslate', 'evilcraft:dark_ore_deepslate')
        ore.size(5)
        ore.count(2, 4)
        ore.squared()
        ore.uniformHeight(64, 254)
    })
    event.addOre((ore) => {
        ore.id = "kubejs:mining_ato_iridium"
        ore.biomes = ['allthemodium:mining']
        ore.addTarget('minecraft:stone', 'alltheores:iridium_ore')
        ore.addTarget('minecraft:deepslate', 'alltheores:deepslate_iridium_ore')
        ore.addTarget('minecraft:netherrack', 'alltheores:nether_iridium_ore')
        ore.addTarget('minecraft:end_stone', 'alltheores:end_iridium_ore')
        ore.size(5)
        ore.count(1)
        ore.squared()
        ore.uniformHeight(-64, 254)
    })
    event.addOre((ore) => {
        ore.id = "kubejs:mining_rftools_dimshard"
        ore.biomes = ['allthemodium:mining']
        ore.addTarget('minecraft:stone', 'rftoolsbase:dimensionalshard_overworld')
        ore.addTarget('minecraft:netherrack', 'rftoolsbase:dimensionalshard_nether')
        ore.addTarget('minecraft:end_stone', 'rftoolsbase:dimensionalshard_end')
        ore.size(5)
        ore.count(2, 4)
        ore.squared()
        ore.uniformHeight(-64, 254)
    })
    event.addOre((ore) => {
        ore.id = "kubejs:mining_mek_fluorite"
        ore.biomes = ['allthemodium:mining']
        ore.addTarget('minecraft:stone', 'mekanism:fluorite_ore')
        ore.addTarget('minecraft:deepslate', 'mekanism:deepslate_fluorite_ore')
        ore.size(7)
        ore.count(4, 8)
        ore.squared()
        ore.uniformHeight(64, 254)
    })
    event.addOre((ore) => {
        ore.id = "kubejs:mining_ec_crystal"
        ore.biomes = ['allthemodium:mining']
        ore.addTarget('minecraft:stone', 'elementalcraft:inert_crystal_ore')
        ore.addTarget('minecraft:deepslate', 'elementalcraft:deepslate_inert_crystal_ore')
        ore.size(5)
        ore.count(1, 3)
        ore.squared()
        ore.uniformHeight(64, 254)
    })
    event.addOre((ore) => {
        ore.id = "kubejs:mining_deepres_resonating"
        ore.biomes = ['allthemodium:mining']
        ore.addTarget('minecraft:stone', 'deepresonance:resonating_ore_stone')
        ore.addTarget('minecraft:deepslate', 'deepresonance:resonating_ore_deepslate')
        ore.addTarget('minecraft:netherrack', 'deepresonance:resonating_ore_nether')
        ore.addTarget('minecraft:end_stone', 'deepresonance:resonating_ore_end')
        ore.size(5)
        ore.count(1, 3)
        ore.squared()
        ore.uniformHeight(-64, 254)
    })
})