ServerEvents.genericLootTables(event => {
  event.addGeneric("lootbags:loot_bags/misc/nether", table => {
    table.addPool(pool => {
      pool.rolls = 1.0;
      pool.addItem("minecraft:golden_apple");
      pool.addItem("minecraft:obsidian", 1, 2);
      pool.addItem("minecraft:experience_bottle", 1, 16);
      pool.addItem("minecraft:netherrack", 1, 64);
      pool.addItem("minecraft:nether_bricks", 1, 32);
      pool.addItem("minecraft:quartz", 1, 16);
      pool.addItem("minecraft:soul_sand", 1, 32);
      pool.addItem("bhc:wither_bone", 1, 2);
      pool.addItem("minecraft:nether_wart");
      pool.addItem("quark:blue_nether_bricks", 1, 32);
      pool.addItem("quark:netherrack_bricks", 1, 64);
      pool.addItem("minecraft:soul_soil", 1, 32);
      pool.addItem("quark:soul_sandstone", 1, 32);
      pool.addItem("minecraft:crimson_stem", 1, 32);
      pool.addItem("minecraft:warped_stem", 1, 32);
      pool.addItem("minecraft:red_nether_bricks", 1, 32);
      pool.addItem("minecraft:blackstone", 1, 32);
      pool.addItem("minecraft:glowstone_dust", 1, 16);
      pool.addItem("minecraft:gold_nugget", 1, 16);
      pool.addItem("minecraft:blaze_rod", 1, 2);
      pool.addItem("minecraft:magma_cream", 1, 4);
      pool.addItem("minecraft:ghast_tear", 1, 2);
      pool.addItem("minecraft:magma_block", 1, 32);
      pool.addItem("minecraft:basalt", 1, 32);
    });
  });
});
