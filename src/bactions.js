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

// yank clean URL
// ===========================
bactions.yankAllCleanURL = actions.createHints("a[href]", (a) =>
  Clipboard.write(bactions.cleanStringAll(a.href)))

bactions.yankAmpCleanURL = actions.createHints("a[href]", (a) =>
  Clipboard.write(bactions.cutStringAfter(a.href, "&")))

bactions.yankQueCleanURL = actions.createHints("a[href]", (a) =>
  Clipboard.write(bactions.cutStringAfter(a.href, "?")))

// open clean URL
// ===========================
bactions.openAllCleanURL = actions.createHints("a[href]", (a) =>
  actions.openLink(bactions.cleanStringAll(a.href), { newTab: true, active: false })())

bactions.openAmpCleanURL = actions.createHints("a[href]", (a) =>
  actions.openLink(bactions.cutStringAfter(a.href, "&"), { newTab: true, active: false })())

bactions.openQueCleanURL = actions.createHints("a[href]", (a) =>
  actions.openLink(bactions.cutStringAfter(a.href, "?"), { newTab: true, active: false })())

module.exports = bactions
