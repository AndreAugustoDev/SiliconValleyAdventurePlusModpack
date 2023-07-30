ServerEvents.recipes(event => {
  let loot_bag = (name, color, rarity, output) => {
    event.custom({
      type: "lootbags:loot",
      name: name,
      color: color,
      rarity: rarity,
      output: { table: output }
    })
  }

  // Mystical Agriculture
  loot_bag("Mystical Agriculture Seedbag Tier 1", "#55ff55", "COMMON", "lootbags:loot_bags/mystical_agriculture/seedbag_tier_1")
  loot_bag("Mystical Agriculture Seedbag Tier 2", "#007F15", "COMMON", "lootbags:loot_bags/mystical_agriculture/seedbag_tier_2")
  loot_bag("Mystical Agriculture Seedbag Tier 3", "#B4450A", "UNCOMMON", "lootbags:loot_bags/mystical_agriculture/seedbag_tier_3")
  loot_bag("Mystical Agriculture Seedbag Tier 4", "#006EBC", "RARE", "lootbags:loot_bags/mystical_agriculture/seedbag_tier_4")
  loot_bag("Mystical Agriculture Seedbag Tier 5", "#BA0000", "EPIC", "lootbags:loot_bags/mystical_agriculture/seedbag_tier_5")
  loot_bag("Mystical Agriculture Seedbag Tier 6", "#6E298E", "LEGENDARY", "lootbags:loot_bags/mystical_agriculture/seedbag_tier_6")
})