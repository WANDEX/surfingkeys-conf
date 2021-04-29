// Insert mode mappings

iunmap(":") // disable Emoji completion

// scroll page Insert mappings
_mapkey(Insert, "<Alt-n>", "Scroll page down", () => { Normal.scroll("down") })
_mapkey(Insert, "<Alt-e>", "Scroll page up", () => { Normal.scroll("up") })
