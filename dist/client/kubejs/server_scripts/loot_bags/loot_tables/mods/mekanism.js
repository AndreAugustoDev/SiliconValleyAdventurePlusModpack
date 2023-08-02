ServerEvents.genericLootTables(event => {
  event.addGeneric("lootbags:loot_bags/mekanism/common", table => {
    table.addPool(pool => {
      pool.rolls = 1.0;
      pool.addItem("mekanism:alloy_infused", 4, [2, 4]);
      pool.addItem("mekanism:basic_control_circuit", 4, [2, 4]);
      pool.addItem("mekanism:alloy_reinforced", 2, [1, 2]);
      pool.addItem("mekanism:advanced_control_circuit", 2, [1, 2]);
      pool.addItem(AlmostUnified.getPreferredItemForTag("forge:ingots/osmium"), 4, [4, 6]);
    });
  });
});
