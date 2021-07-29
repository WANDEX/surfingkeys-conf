const util = require("./util")
const actions = require("./actions")

const bactions = {}

// Globally applicable extra actions
// ===========================

bactions.cutStringAfter = (str, c) =>
  str.split(c).slice(0, 1).toString()

bactions.cleanCurrentURL = () => {
  let url = util.getCurrentLocation("href")
  url = bactions.cutStringAfter(url, "?")
  url = bactions.cutStringAfter(url, "&")
  return url
}

bactions.copyCleanCurrentURL = () =>
  Clipboard.write(bactions.cleanCurrentURL())

bactions.cleanStringAll = (string) => {
  let str = bactions.cutStringAfter(string, "?")
  str = bactions.cutStringAfter(str, "&")
  return str
}

bactions.yankAllCleanURL = actions.createHints("a[href]", (a) =>
  Clipboard.write(bactions.cleanStringAll(a.href)))

bactions.yankAmpCleanURL = actions.createHints("a[href]", (a) =>
  Clipboard.write(bactions.cutStringAfter(a.href, "&")))

bactions.yankQueCleanURL = actions.createHints("a[href]", (a) =>
  Clipboard.write(bactions.cutStringAfter(a.href, "?")))

module.exports = bactions
