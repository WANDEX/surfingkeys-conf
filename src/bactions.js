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

// --------------------------
// site specific functions
// --------------------------

// github
bactions.github = {}
bactions.github.copyCollectFollowUrls = () => {
  // do not forget to scroll to the end of the list -> to get all urls
  const lNodes = document.querySelectorAll("span.Link--secondary.pl-1")
  const hrefs = []
  for (let i = 0; i < lNodes.length; i++) {
    base_url = "https://github.com/"
    hrefs.push(base_url + lNodes[i].outerText)
  }
  const urls = hrefs.join("\n") // each on it's own line
  Clipboard.write(urls)
},

// goodfon
// --------------------------
bactions.goodfon = {}
bactions.goodfon.openRawImage = async () => {
  const url = document.querySelector(".wallpaper__download__rbut")
  if (!url || url === null) {
    return
  }
  // get html of (url) -> get raw image url -> open as raw image
  const html = (await (await fetch(url.href)).text())
  doc = new DOMParser().parseFromString(html, "text/html")
  const raw = doc.body.querySelector(".js-download_img > img").src
  doc = null; delete doc;
  actions.openLink(raw)()
}

// newgrounds
bactions.newgrounds = {}
bactions.newgrounds.openRawVideo = () => {
  const url = document.querySelector("#ng-global-video-player > div > video > source").src
  if (!url || url === null) {
    return
  }
  const cleanurl = bactions.cutStringAfter(url, "?")
  actions.openLink(cleanurl, { newTab: true, active: true })()
}

// soundcloud
bactions.soundcloud = {}
bactions.soundcloud.copyCollectUrls = () => {
  // do not forget to scroll to the end of the list -> to get all urls
  const linkNodes = document.querySelectorAll("[class='badgeList__item'] [class^='sc-link-primary']")
  const hrefs = []
  for (let i = 0; i < linkNodes.length; i++) {
    hrefs.push(linkNodes[i].href)
  }
  const urls = hrefs.join("\n") // each on it's own line
  Clipboard.write(urls)
},

module.exports = bactions
