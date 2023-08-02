ServerEvents.genericLootTables(event => {
  // starter
  // event.addGeneric("lootbags:loot_bags/powah/", table => {
  //   table.addPool(pool => {
  //     pool.rolls = 1.0;

  //   });
  // });

  // Basic
  event.addGeneric("lootbags:loot_bags/powah/basic", table => {
    table.addPool(pool => {
      pool.rolls = 1.0;
      pool.addItem("powah:capacitor_basic_tiny", 25, [2, 4]);
      pool.addItem("powah:capacitor_basic", 25, [1, 3]);
      pool.addItem("powah:capacitor_basic_large", 25);
      pool.addItem("powah:dielectric_casing", 10, [1, 2]);
      pool.addItem("powah:energy_cable_starter", 10, [4, 8]);
      pool.addItem("powah:energy_cable_basic", 10, [4, 8]);
      pool.addItem("powah:energizing_rod_starter", 5, [1, 2]);
      pool.addItem("powah:energizing_rod_basic", 5, [1, 2]);
      pool.addItem("powah:solar_panel_starter");
      pool.addItem("powah:solar_panel_basic");
    });
  });

  // Hardened
  event.addGeneric("lootbags:loot_bags/powah/hardened", table => {
    table.addPool(pool => {
      pool.rolls = 1.0;
      pool.addItem("powah:capacitor_basic_large", 10, [1, 3]);
      pool.addItem("powah:capacitor_hardened", 10, [1, 2]);
      pool.addItem("powah:dielectric_casing", 10, [1, 2]);
      pool.addItem("powah:steel_energized", 25, [1, 3]);
      pool.addItem("powah:energy_cell_hardened");
      pool.addItem("powah:energy_cable_hardened", 10, [2, 4]);
      pool.addItem("powah:energizing_rod_hardened", 5);
      pool.addItem("powah:solar_panel_hardened");
      pool.addItem("powah:energized_steel_block");
    });
  });

  // Blazing
  event.addGeneric("lootbags:loot_bags/powah/blazing", table => {
    table.addPool(pool => {
      pool.rolls = 1.0;
      pool.addItem("powah:capacitor_hardened", 10, [1, 2]);
      pool.addItem("powah:capacitor_blazing", 10, [1, 2]);
      pool.addItem("powah:steel_energized", 25, [1, 2]);
      pool.addItem("powah:crystal_blazing", 25, [1, 2]);
      pool.addItem("powah:energy_cell_blazing");
      pool.addItem("powah:energy_cable_blazing", 10, [1, 3]);
      pool.addItem("powah:energizing_rod_blazing", 5);
      pool.addItem("powah:solar_panel_blazing");
      pool.addItem("powah:energized_steel_block", 2);
      pool.addItem("powah:blazing_crystal_block");
    });
  });

  // Niotic
  event.addGeneric("lootbags:loot_bags/powah/niotic", table => {
    table.addPool(pool => {
      pool.rolls = 1.0;
      pool.addItem("powah:capacitor_blazing", 10, [1, 2]);
      pool.addItem("powah:capacitor_niotic", 10, [1, 2]);
      pool.addItem("powah:crystal_blazing", 25);
      pool.addItem("powah:crystal_niotic", 25);
      pool.addItem("powah:energy_cell_niotic");
      pool.addItem("powah:energy_cable_niotic", 10, [2, 4]);
      pool.addItem("powah:energizing_rod_niotic", 5);
      pool.addItem("powah:solar_panel_niotic");
      pool.addItem("powah:blazing_crystal_block", 2);
      pool.addItem("powah:niotic_crystal_block");
    });
  });

  // Spirited
  event.addGeneric("lootbags:loot_bags/powah/spirited", table => {
    table.addPool(pool => {
      pool.rolls = 1.0;
      pool.addItem("powah:capacitor_niotic", 10, [1, 2]);
      pool.addItem("powah:capacitor_spirited", 10);
      pool.addItem("powah:crystal_niotic", 25);
      pool.addItem("powah:crystal_spirited", 25);
      pool.addItem("powah:energy_cell_spirited");
      pool.addItem("powah:energy_cable_spirited", 10, [2, 4]);
      pool.addItem("powah:energizing_rod_spirited", 5);
      pool.addItem("powah:solar_panel_spirited");
      pool.addItem("powah:niotic_crystal_block", 2);
      pool.addItem("powah:spirited_crystal_block");
    });
  });

  // Nitro
  event.addGeneric("lootbags:loot_bags/powah/nitro", table => {
    table.addPool(pool => {
      pool.rolls = 1.0;
      pool.addItem("powah:capacitor_nitro", 10, [1, 2]);
      pool.addItem("powah:crystal_nitro", 25, [1, 4]);
      pool.addItem("powah:crystal_spirited", 25, [1, 3]);
      pool.addItem("powah:spirited_crystal_block", 2);
      pool.addItem("powah:energizing_rod_nitro", 5);
      pool.addItem("powah:energizing_rod_spirited", 5);
      pool.addItem("powah:energy_cable_nitro", 10, [2, 4]);
      pool.addItem("powah:nitro_crystal_block");
      pool.addItem("powah:solar_panel_nitro");
    });
  });
});
