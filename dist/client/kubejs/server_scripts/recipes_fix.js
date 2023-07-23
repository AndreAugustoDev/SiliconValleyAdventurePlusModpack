ServerEvents.highPriorityData((event) => {
  // Create compat for BYG Mangrove Logs (removed due to MC adding mangrove)
  [
    "mangrove_log",
    "mangrove_wood",
    "stripped_mangrove_log",
    "stripped_mangrove_wood",
  ].forEach((wood) => {
    event.addJson(`create:recipes/cutting/compat/byg/${wood}`, {
      type: "create:cutting",
      conditions: [
        {
          type: "forge:false",
        },
      ],
    });
  });
  // wrong recipe type
  event.addJson("croptopia:recipes/banana_cream_pie", {
    type: "minecraft:crafting_shapeless",
    ingredients: [
      {
        tag: "forge:bananas",
      },
      {
        tag: "forge:vanilla",
      },
      {
        item: "minecraft:sugar",
      },
      {
        item: "minecraft:egg",
      },
      {
        tag: "forge:milks",
      },
      {
        item: "croptopia:frying_pan",
      },
    ],
    result: {
      item: "croptopia:banana_cream_pie",
      count: 1,
    },
  });

  // productive bees missing reagent for botania bee
  event.addJson("productivebees:recipes/botania/pure_bee", {
    type: "botania:petal_apothecary",
    ingredients: [
      {
        tag: "botania:petals/white",
      },
      {
        tag: "botania:petals/white",
      },
      {
        tag: "botania:petals/white",
      },
      {
        tag: "botania:petals/white",
      },
      {
        item: "minecraft:bee_spawn_egg",
      },
    ],
    output: {
      type: "forge:nbt",
      item: "productivebees:spawn_egg_configurable_bee",
      nbt: '{EntityTag:{type:"productivebees:pure"}}',
    },
    reagent: {
      tag: "botania:seed_apothecary_reagent",
    },
    conditions: [
      {
        type: "forge:mod_loaded",
        modid: "botania",
      },
      {
        type: "productivebees:bee_exists",
        bee: "productivebees:pure",
      },
    ],
  });

  // sophisticated storage / quark chest compat
  [
    "acacia",
    "birch",
    "crimson",
    "dark_oak",
    "jungle",
    "oak",
    "spruce",
    "warped",
  ].forEach((wood) => {
    event.addJson(
      `sophisticatedstorage:recipes/${wood}_chest_from_quark_${wood}_chest`,
      {
        type: "minecraft:crafting_shapeless",
        conditions: [
          {
            type: "forge:mod_loaded",
            modid: "quark",
          },
          {
            type: "sophisticatedcore:item_enabled",
            itemRegistryName: "sophisticatedstorage:chest",
          },
        ],
        ingredients: [
          {
            item: `quark:${wood}_chest`,
          },
          {
            item: "minecraft:redstone_torch",
          },
        ],
        result: {
          item: "sophisticatedstorage:chest",
          nbt: `{woodType:\"${wood}\"}`,
        },
      }
    );
  });
  // Fix farmers delight / botany pot recipes
  // TODO
});
