// Insert mode mappings

iunmap(":") // disable Emoji completion

// scroll page Insert mappings
_mapkey(Insert, "<Alt-n>", "Scroll page down", () => { Normal.scroll("down") })
_mapkey(Insert, "<Alt-e>", "Scroll page up", () => { Normal.scroll("up") })

// typingclub.com input mode mappings
_mapkey(Insert, "<Alt-m>", "Menu button click", () => {
  document.querySelector("div.menu-btn").click()
}, { domain: /www\.typingclub\.com/i })
_mapkey(Insert, "<Alt-Backspace>", "Menu button click", () => {
  document.querySelector("div.menu-btn").click()
}, { domain: /www\.typingclub\.com/i })

_mapkey(Insert, "<Alt-p>", "Pause lesson", () => {
  document.querySelector(".edicon-pause").click()
}, { domain: /www\.typingclub\.com/i })

_mapkey(Insert, "<Alt-r>", "Restart / Refresh lesson", () => {
  document.querySelector(".edicon-refresh").click()
}, { domain: /www\.typingclub\.com/i })
_mapkey(Insert, "<Alt-Space>", "Restart / Refresh lesson", () => {
  document.querySelector(".edicon-refresh").click()
}, { domain: /www\.typingclub\.com/i })
