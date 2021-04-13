const util = require("./util")

// ---- Settings ----//
util.addSettings({
  hintAlign:                "left",
  omnibarMaxResults:        14,
  omnibarPosition:          "bottom",
  omnibarSuggestionTimeout: 500,
  richHintsForKeystroke:    1,
  scrollStepSize:           70,
  smoothScroll:             false,
})

if (typeof Hints !== "undefined") {
  Hints.characters = "qwfpgarstdzxcvb"
}

// visual key remappings
vmap("n", "j") // forward line
vmap("e", "k") // backward line
vmap("i", "l") // forward character

// unmap old visual keys
vunmap("j")
vunmap("k")
vunmap("l")
