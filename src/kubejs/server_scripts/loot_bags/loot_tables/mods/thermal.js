ServerEvents.genericLootTables(event => {
  event.addGeneric("lootbags:loot_bags/thermal/common", table => {
    table.addPool(pool => {
      pool.rolls = 1.0;
      pool.addItem("thermal:machine_frame", 100);
      pool.addItem(Item.of("thermal:energy_cell", "{BlockEntityTag:{Energy:0,EnergyMax:100000,EnergyRecv:1000,EnergySend:1000}"), 25);
      pool.addItem("thermal:energy_duct", 250, [4, 8]);
      pool.addItem("thermal:fluid_duct", 150, [4, 8]);
      pool.addItem("thermal:redstone_servo", 100, [2, 4]);
      pool.addItem("thermal:rf_coil", 250, [1, 4]);
      pool.addItem("thermal:upgrade_augment_1", 50);
      pool.addItem("thermal:upgrade_augment_2", 25);
      pool.addItem("thermal:upgrade_augment_3", 5);
      pool.addItem("thermal:rf_coil_augment", 50);
      pool.addItem("thermal:machine_speed_augment", 100);
      pool.addItem("thermal:machine_output_augment", 50);
      pool.addItem("thermal:servo_attachment", 50);
      pool.addItem("thermal:turbo_servo_attachment", 25);
      pool.addItem("thermal:explosive_grenade", 25);
      pool.addItem("thermal:earth_grenade", 10);
      pool.addItem("minecraft:gold_ingot", 100, [1, 8]);
      pool.addItem(AlmostUnified.getPreferredItemForTag("forge:ingots/lead"), 100, [1, 8]);
      pool.addItem(AlmostUnified.getPreferredItemForTag("forge:ingots/tin"), 100, [1, 8]);
      pool.addItem(AlmostUnified.getPreferredItemForTag("forge:ingots/invar"), 50, [1, 4]);
      pool.addItem(AlmostUnified.getPreferredItemForTag("forge:ingots/electrum"), 50, [1, 4]);
      pool.addItem(AlmostUnified.getPreferredItemForTag("forge:ingots/bronze"), 50, [1, 4]);
      pool.addItem(AlmostUnified.getPreferredItemForTag("forge:ingots/enderium"), 5, [1, 4]);
      pool.addItem(AlmostUnified.getPreferredItemForTag("forge:ingots/lumium"), 50, [1, 4]);
      pool.addItem(AlmostUnified.getPreferredItemForTag("forge:ingots/signalum"), 50, [1, 4]);
      pool.addItem(AlmostUnified.getPreferredItemForTag("forge:ingots/constantan"), 50, [1, 4]);
    });
  });
});
