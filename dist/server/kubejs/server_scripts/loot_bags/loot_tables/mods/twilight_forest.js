ServerEvents.genericLootTables(event => {
  event.addGeneric("lootbags:loot_bags/twilight_forest/common", table => {
    table.addPool(pool => {
      pool.rolls = 1.0;
      pool.addItem("twilightforest:steeleaf_ingot", 50, [2, 4]);
      pool.addItem("twilightforest:knightmetal_ingot", 25, [2, 4]);
      pool.addItem("twilightforest:raw_ironwood", 100, [2, 4]);
      pool.addItem("twilightforest:fiery_blood", 20, [2, 4]);
      pool.addItem("twilightforest:hydra_chop", 10, [2, 4]);
      pool.addItem("twilightforest:cooked_venison", 100, [4, 8]);
      pool.addItem("twilightforest:charm_of_life_1", 50, [1, 2]);
      pool.addItem("twilightforest:charm_of_keeping_1", 25, [1, 3]);
      pool.addItem("twilightforest:ore_magnet", 2);
      pool.addItem("twilightforest:reappearing_block", 10, [3, 9]);
      pool.addItem("twilightforest:transformation_powder", 25, [1, 2]);
      pool.addItem("twilightforest:cicada", 50);
      pool.addItem(Item.of("twilightforest:ironwood_sword").enchant("minecraft:knockback", 1), 20);
      pool.addItem(Item.of("twilightforest:steeleaf_sword").enchant("minecraft:looting", 2), 5);
      pool.addItem("twilightforest:cooked_meef", 100, [1, 5]);
    });
  });
});
