require("./settings")
require("./theme")
const util = require("./util")
const keys = require("./keys")

// Leader for site-specific mappings
const siteleader = "<Space>"

// Leader for OmniBar searchEngines
const searchleader = "A"

// Process mappings and completions
// See ./keys.js and ./completions.js
util.rmMaps(keys.unmaps.mappings)
util.rmSearchAliases(keys.unmaps.searchAliases)
util.processMaps(keys.maps, keys.aliases, siteleader)
// util.processCompletions(completions, searchleader)

module.exports = { siteleader, searchleader }
