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
