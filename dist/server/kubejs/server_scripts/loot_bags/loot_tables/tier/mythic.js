ServerEvents.genericLootTables(event => {
  event.addGeneric("lootbags:loot_bags/tier/mythic", table => {
    table.addPool(pool => {
      pool.rolls = 1.0;
      pool.addItem("mekanism:pellet_antimatter");
      pool.addItem("allthemodium:unobtainium_allthemodium_alloy_ingot", 3, [1, 3]);
      pool.addItem("allthemodium:unobtainium_vibranium_alloy_ingot", 3, [1, 3]);
      pool.addItem("allthemodium:vibranium_allthemodium_alloy_ingot", 3, [1, 3]);
      pool.addItem("allthemodium:piglich_heart", 3, [1, 4]);
      pool.addItem("botania:life_essence");
      pool.addItem("elementalcraft:purecrystal", 4, [1, 4]);
      pool.addItem("elementalcraft:fireite_ingot");
      pool.addItem("mysticalagriculture:master_infusion_crystal", 2);
      pool.addItem("mysticalagradditions:insanium_essence", 1, [1, 3]);
    });
  });
});
