const actions = require("./actions")
const { categories } = require("./help")

// Remove undesired default mappings
const unmaps = {
  mappings: [
    "i", "gi",
    ";e", ";s", ";pm",
  ],
  searchAliases: {
    s: ["g", "d", "b",
      "w", "s", "h"],
  },
}

const maps = {}

// alias: new key mapping
//   map: old key mapping
maps.global = [
  {
    alias:       "F",
    map:         "gf",
    category:    categories.mouseClick,
    description: "Open a link in non-active new tab",
  },
  {
    alias:       "zf",
    category:    categories.mouseClick,
    description: "Open link URL in vim editor",
    callback:    actions.previewLink,
  },
  {
    alias:       "<Alt-n>",
    map:         "n",
    category:    categories.visualMode,
    description: "Next found text",
  },
  {
    alias:       "<Alt-e>",
    map:         "N",
    category:    categories.visualMode,
    description: "Previous found text",
  },
  {
    alias:       "e",
    map:         "k",
    category:    categories.scroll,
    description: "Scroll up",
  },
  {
    alias:       "n",
    map:         "j",
    category:    categories.scroll,
    description: "Scroll down",
  },
  {
    alias:       "h",
    map:         "h",
    category:    categories.scroll,
    description: "Scroll left",
  },
  {
    alias:       "i",
    map:         "l",
    category:    categories.scroll,
    description: "Scroll right",
  },

  {
    alias:       "gH",
    map:         "gh",
    category:    categories.chromeURLs,
    description: "Open Chrome History",
  },
  {
    alias:       "gh",
    category:    categories.scroll,
    description: "Scroll to element targeted by URL hash",
    callback:    actions.scrollToHash,
  },
  {
    alias:       "gI",
    category:    categories.pageNav,
    description: "Edit current URL with vim editor",
    callback:    actions.vimEditURL,
  },
  {
    alias:       "gi",
    category:    categories.pageNav,
    description: "View image in new tab",
    callback:    actions.createHints("img", (i) => actions.openLink(i.src)()),
  },
  {
    alias:       "yP",
    map:         "yp",
    category:    categories.clipboard,
    description: "Copy form data for POST on current page",
  },
  {
    alias:       "yp",
    category:    categories.clipboard,
    description: "Copy URL path of current page",
    callback:    actions.copyURLPath(),
  },
  {
    alias:       "yI",
    category:    categories.clipboard,
    description: "Copy Image URL",
    // TODO: use navigator.clipboard
    callback:    actions.createHints("img", (i) => Clipboard.write(i.src)),
  },
  {
    alias:       "yO",
    category:    categories.clipboard,
    description: "Copy page URL/Title as Org-mode link",
    callback:    actions.copyOrgLink,
  },
  {
    alias:       "yM",
    category:    categories.clipboard,
    description: "Copy page URL/Title as Markdown link",
    callback:    actions.copyMarkdownLink,
  },
  {
    alias:       ";se",
    category:    categories.settings,
    description: "Edit Settings",
    callback:    actions.editSettings,
  },
  {
    alias:       "gS",
    category:    categories.chromeURLs,
    description: "Open Chrome Settings",
  },

  {
    alias:       "=w",
    category:    categories.misc,
    description: "Lookup whois information for domain",
    callback:    actions.showWhois(),
  },
  {
    alias:       "=d",
    category:    categories.misc,
    description: "Lookup dns information for domain",
    callback:    actions.showDns(),
  },
  {
    alias:       "=D",
    category:    categories.misc,
    description: "Lookup all information for domain",
    callback:    actions.showDns({ verbose: true }),
  },
  {
    alias:       "=c",
    category:    categories.misc,
    description: "Show Google's cached version of page",
    callback:    actions.showGoogleCache(),
  },
  {
    alias:       "=a",
    category:    categories.misc,
    description: "Show Archive.org Wayback Machine for page",
    callback:    actions.showWayback(),
  },
  {
    alias:       "=o",
    category:    categories.misc,
    description: "Show outline.com version of page",
    callback:    actions.showOutline(),
  },
  {
    alias:       "=r",
    category:    categories.misc,
    description: "Subscribe to RSS feed for page",
    callback:    actions.rssSubscribe(),
  },
  {
    alias:       "=s",
    category:    categories.misc,
    description: "Speed read page",
    callback:    actions.showSpeedReader,
  },
  {
    alias:       ";pd",
    category:    categories.misc,
    description: "Toggle PDF viewer from SurfingKeys",
    callback:    actions.togglePdfViewer,
  },
  {
    alias:       "gxE",
    map:         "gxt",
    category:    categories.tabs,
    description: "Close tab to left",
  },
  {
    alias:       "gxR",
    map:         "gxT",
    category:    categories.tabs,
    description: "Close tab to right",
  },
  {
    alias:       "\\cgh",
    category:    categories.clipboard,
    description: "Open clipboard string as GitHub path (e.g. 'torvalds/linux')",
    callback:    actions.gh.openRepoFromClipboard,
  },
]

const googleSearchResultSelector = [
  "a h3",
  "h3 a",
  "a[href^='/search']:not(.fl):not(#pnnext,#pnprev):not([role]):not(.hide-focus-ring)",
  "g-scrolling-carousel a",
  ".rc > div:nth-child(2) a",
  ".kno-rdesc a",
  ".kno-fv a",
  ".isv-r > a:first-child",
  ".dbsr > a:first-child",
].join(",")

maps["www.google.com"] = [
  {
    alias:       "a",
    description: "Open search result",
    callback:    actions.createHints(googleSearchResultSelector),
  },
  {
    alias:       "A",
    description: "Open search result (new tab)",
    callback:    actions.createHints(googleSearchResultSelector,
      actions.openAnchor({ newTab: true, active: false })),
  },
  {
    alias:       "d",
    description: "Open search in DuckDuckGo",
    callback:    actions.go.ddg,
  },
]

maps["algolia.com"] = [
  {
    alias:       "a",
    description: "Open search result",
    callback:    actions.createHints(".item-main h2>a:first-child"),
  },
]

maps["duckduckgo.com"] = [
  {
    alias:       "a",
    description: "Open search result",
    callback:    actions.createHints(".result__a"),
  },
  {
    alias:       "A",
    description: "Open search result (non-active new tab)",
    callback:    actions.createHints(".result__a",
      actions.openAnchor({ newTab: true, active: false })),
  },
  {
    leader:      "",
    alias:       "]]",
    description: "Show more results",
    callback:    () => document.querySelector(".result--more__btn").click(),
  },
  {
    alias:       "g",
    description: "Open search in Google",
    callback:    actions.dg.goog,
  },
]

maps["wikipedia.org"] = [
  {
    alias:       "s",
    description: "Toggle simple version of current article",
    callback:    actions.wp.toggleSimple,
  },
  {
    alias:       "a",
    description: "View page",
    callback:    actions.createHints("#bodyContent :not(sup):not(.mw-editsection) > a:not([rel=nofollow])"),
  },
  {
    alias:       "e",
    description: "View external link",
    callback:    actions.createHints("a[rel=nofollow]"),
  },
  {
    alias:       "R",
    description: "View WikiRank for current article",
    callback:    actions.wp.viewWikiRank,
  },
]

maps["stackoverflow.com"] = [
  {
    alias:       "a",
    description: "View question",
    callback:    actions.createHints("a.question-hyperlink"),
  },
]

maps["aur.archlinux.org"] = [
  {
    alias:       "a",
    description: "View package",
    callback:    actions.createHints("a[href^='/packages/'][href$='/']"),
  },
]

// Aliases
const aliases = {
  "wikipedia.org": [
    // Wikimedia sites
    "wiktionary.org",
    "wikiquote.org",
    "wikisource.org",
    "wikimedia.org",
    "mediawiki.org",
    "wikivoyage.org",
    "wikibooks.org",
    "wikinews.org",
    "wikiversity.org",
    "wikidata.org",

    // MediaWiki-powered sites
    "wiki.archlinux.org",
  ],

  "stackoverflow.com": [
    "stackexchange.com",
    "serverfault.com",
    "superuser.com",
    "askubuntu.com",
    "stackapps.com",
    "mathoverflow.net",
  ],
}

module.exports = {
  unmaps,
  maps,
  aliases,
}
