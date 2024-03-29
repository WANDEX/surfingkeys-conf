require("./api_const") // for surfingkeys 1.0
// require("./acevim")
// require("./inline")
require("./settings")
require("./theme")
// require("./imap")
require("./vmap")
const util = require("./util")
const keys = require("./keys")
const completions = require("./completions")

// Leader for site-specific mappings
const siteleader = "a"

// Leader for OmniBar searchEngines
const searchleader = "s"

// Process mappings and completions
// See ./keys.js and ./completions.js
util.rmMaps(keys.unmaps.mappings)
util.rmSearchAliases(keys.unmaps.searchAliases)
util.processMaps(keys.maps, keys.aliases, siteleader)
util.processCompletions(completions, searchleader)
require("./nmap") // !!! should be only after keys.js [un]mappings

module.exports = { siteleader, searchleader }
