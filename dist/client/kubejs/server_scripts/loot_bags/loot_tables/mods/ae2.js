ServerEvents.genericLootTables(event => {
  event.addGeneric("lootbags:loot_bags/ae2/basic", table => {
    table.addPool(pool => {
      pool.rolls = 1.0;
      pool.addItem("ae2:certus_quartz_crystal", 10, [2, 4]);
      pool.addItem("ae2:certus_quartz_dust", 10, [4, 8]);
      pool.addItem("ae2:fluix_crystal", 1, [1, 2]);
      pool.addItem("ae2:fluix_dust", 1, [1, 2]);
      pool.addItem("ae2:charged_certus_quartz_crystal", 5, [2, 4]);
    });
  });

  event.addGeneric("lootbags:loot_bags/ae2/medium", table => {
    table.addPool(pool => {
      pool.rolls = 1.0;
      pool.addItem("ae2:certus_quartz_crystal", 4, [2, 4]);
      pool.addItem("ae2:certus_quartz_dust", 5, [4, 8]);
      pool.addItem("ae2:silicon", 3, [4, 8]);
      pool.addItem("ae2:printed_silicon", 2, [2, 3]);
      pool.addItem("ae2:charged_certus_quartz_crystal", 3, 2);
      pool.addItem("ae2:fluix_crystal", 2, [2, 4]);
      pool.addItem("ae2:fluix_dust", 2, [1, 3]);
      pool.addItem("ae2:logic_processor", 2, [2, 3]);
      pool.addItem("ae2:calculation_processor", 1, [1, 2]);
      pool.addItem("ae2:engineering_processor");
      pool.addItem("ae2:formation_core");
      pool.addItem("ae2:annihilation_core");
    });
  });
});
