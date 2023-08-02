ServerEvents.genericLootTables(event => {
  event.addGeneric("lootbags:loot_bags/botania/runes", table => {
    table.addPool(pool => {
      pool.rolls = 1.0;
      pool.addItem("botania:rune_water");
      pool.addItem("botania:rune_fire");
      pool.addItem("botania:rune_earth");
      pool.addItem("botania:rune_air");
      pool.addItem("botania:rune_mana");
    });
  });

  event.addGeneric("lootbags:loot_bags/botania/common_mana_materials", table => {
    table.addPool(pool => {
      pool.rolls = 1.0;
      pool.addItem("botania:manasteel_ingot", 1, [2, 4]);
      pool.addItem("botania:mana_pearl", 0.5, [1, 3]);
      pool.addItem("botania:mana_diamond", 0.5, [1, 2]);
      pool.addItem("botania:mana_string", 1, [2, 4]);
      pool.addItem("botania:mana_powder", 1, [2, 4]);
      pool.addItem("botania:quartz_mana", 1, [2, 4]);
      pool.addItem("botania:mana_glass", 1, [2, 4]);
      pool.addItem("botania:black_lotus", 0.1);
    });
  });
});
