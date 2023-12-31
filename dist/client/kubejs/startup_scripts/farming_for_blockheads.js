/*
  farming for blockheads custom market additions
  authored by EnigmaQuip
  for use in ATM8
*/

const FFBAPI = Java.loadClass('net.blay09.mods.farmingforblockheads.api.FarmingForBlockheadsAPI')

// list of items to not add to the Market
let MarketBlackList = []

ForgeEvents.onEvent('net.blay09.mods.farmingforblockheads.api.MarketRegistryReloadEvent$Post', (event) => {
    let market = JsonIO.read('kubejs/server_scripts/mods/farmingforblockheads/marketitems.json')
    let category = {
        saplings: FFBAPI.getMarketCategorySaplings(),
        seeds: FFBAPI.getMarketCategorySeeds(),
        flowers: FFBAPI.getMarketCategoryFlowers(),
    }
    market.forEach((key, type) => {
        type.forEach((mod, list) => {
            list.forEach((item) => {
                if (!FFBAPI.getMarketEntry(item)) {
                    if (!MarketBlackList.includes(item)) {
                        FFBAPI.registerMarketEntry(item, 'minecraft:emerald', category[key])
                    }
                }
            })
        })
    })
})