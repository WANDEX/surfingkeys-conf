const util = require("./util")

// ---- Settings ----//
util.addSettings({
  defaultSearchEngine:      "dd",
  focusFirstCandidate:      true,
  hintAlign:                "left",
  modeAfterYank:            "Normal",
  omnibarMaxResults:        14,
  omnibarPosition:          "bottom",
  omnibarSuggestionTimeout: 1500,
  richHintsForKeystroke:    300,
  prevLinkRegex:            /((?<!.)<(?!.))|(.*prev(ious)?.*)|newer/i,
  nextLinkRegex:            /((?<!.)>(?!.))|(.*next.*)|older/i,
  scrollStepSize:           70,
  smoothScroll:             false,
  tabsMRUOrder:             false,
  historyMUOrder:           false,
  tabsThreshold:            0,
})

if (typeof Hints !== "undefined") {
  Hints.characters = "qwfpgarstdzxcvbneioluyh" // both hands
}

const HREF = window.location.href

if (HREF.match(/typingclub\.com/)) {
  settings.stealFocusOnLoad = false
  settings.editableBodyCare = false
}

