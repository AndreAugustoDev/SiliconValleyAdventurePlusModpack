ServerEvents.genericLootTables(event => {
  event.addGeneric("lootbags:loot_bags/natures_aura/tokens", table => {
    table.addPool(pool => {
      pool.rolls = 1.0;
      pool.addItem("naturesaura:token_joy");
      pool.addItem("naturesaura:token_fear");
      pool.addItem("naturesaura:token_anger");
      pool.addItem("naturesaura:token_sorrow");
    });
  });
});
