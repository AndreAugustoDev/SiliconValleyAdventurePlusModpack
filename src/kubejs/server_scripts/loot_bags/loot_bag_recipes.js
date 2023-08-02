ServerEvents.recipes(event => {
  let loot_bag = (name, color, rarity, output) => {
    event.custom({
      type: "lootbags:loot",
      name: name,
      color: color,
      rarity: rarity,
      output: { table: output }
    });
  };

  // Misc
  loot_bag("Nether Loot Bag", "#602627", "COMMON", "lootbags:loot_bags/misc/nether");

  // Tier
  loot_bag("Mythic Loot Bag", "#AA00AA", "LEGENDARY", "lootbags:loot_bags/tier/mythic");

  // Mystical Agriculture
  loot_bag("Mystical Agriculture Seed Bag Tier 1", "#55ff55", "COMMON", "lootbags:loot_bags/mystical_agriculture/seedbag_tier_1");
  loot_bag("Mystical Agriculture Seed Bag Tier 2", "#007F15", "COMMON", "lootbags:loot_bags/mystical_agriculture/seedbag_tier_2");
  loot_bag("Mystical Agriculture Seed Bag Tier 3", "#B4450A", "UNCOMMON", "lootbags:loot_bags/mystical_agriculture/seedbag_tier_3");
  loot_bag("Mystical Agriculture Seed Bag Tier 4", "#006EBC", "RARE", "lootbags:loot_bags/mystical_agriculture/seedbag_tier_4");
  loot_bag("Mystical Agriculture Seed Bag Tier 5", "#BA0000", "EPIC", "lootbags:loot_bags/mystical_agriculture/seedbag_tier_5");
  loot_bag("Mystical Agriculture Seed Bag Tier 6", "#6E298E", "LEGENDARY", "lootbags:loot_bags/mystical_agriculture/seedbag_tier_6");

  // Mekanism
  loot_bag("Mekanism Basic Loot Bag", "#64D17D", "COMMON", "lootbags:loot_bags/mekanism/common");

  // Applied Energistics 2
  loot_bag("AE2 Basic Loot Bag", "#93C7FF", "COMMON", "lootbags:loot_bags/ae2/basic");
  loot_bag("AE2 Medium Loot Bag", "#3232FF", "UNCOMMON", "lootbags:loot_bags/ae2/medium");

  // Nature's Aura
  loot_bag("Nature's Aura Tokens Loot Bag", "#B29A31", "UNCOMMON", "lootbags:loot_bags/natures_aura/tokens");

  // Botania
  loot_bag("Botania Runes Loot Bag", "#C0C4AC", "RARE", "lootbags:loot_bags/botania/runes");
  loot_bag("Botania Common Mana Materials Loot Bag", "#3A63DA", "COMMON", "lootbags:loot_bags/botania/common_mana_materials");

  // Twilight Forest
  loot_bag("Twilight Forest Loot Bag", "#B5660B", "COMMON", "lootbags:loot_bags/twilight_forest/common");

  // Thermal
  loot_bag("Thermal Loot Bag", "#5555FF", "COMMON", "lootbags:loot_bags/thermal/common");

  // Powah
  // loot_bag("Powah Starter Loot Bag", "#", "", "lootbags:loot_bags/powah/starter");
  loot_bag("Powah Basic Loot Bag", "#B2B8AE", "COMMON", "lootbags:loot_bags/powah/basic");
  loot_bag("Powah Hardened Loot Bag", "#A29880", "UNCOMMON", "lootbags:loot_bags/powah/hardened");
  loot_bag("Powah Blazing Loot Bag", "#D9A20F", "UNCOMMON", "lootbags:loot_bags/powah/blazing");
  loot_bag("Powah Niotic Loot Bag", "#0CC1ED", "RARE", "lootbags:loot_bags/powah/niotic");
  loot_bag("Powah Spirited Loot Bag", "#83BE49", "EPIC", "lootbags:loot_bags/powah/spirited");
  loot_bag("Powah Nitro Loot Bag", "#C22B35", "LEGENDARY", "lootbags:loot_bags/powah/nitro");
});
