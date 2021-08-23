// Visual mode mappings

// Exit key for all modes
map("<Ctrl-l>", "<Esc>")
cmap("<Ctrl-l>", "<Esc>")
imap("<Ctrl-l>", "<Esc>")
vmap("<Ctrl-l>", "<Esc>")

// omnibar uses cmap & vmapkey!
// here we inverse direction because of omnibarPosition=bottom
// Forward/Backward cycle through the candidates.
cmap("<ArrowDown>", "<Shift-Tab>")
cmap("<ArrowUp>", "<Tab>")
cmap("<Alt-n>", "<Shift-Tab>")
cmap("<Alt-e>", "<Tab>")

// visual key remappings
vmap("n", "j") // forward line
vmap("e", "k") // backward line
vmap("i", "l") // forward character

// unmap old visual keys
vunmap("j")
vunmap("k")
vunmap("l")

// Translate selected text with google
vunmap("t")
vmapkey("gt", "Translate selected text with google", () => {
  searchSelectedWith("https://translate.google.com/?hl=en&sl=auto&tl=ru&op=translate&text=", false, false, "")
})

// scroll page visual mappings
vmapkey("j", "Scroll page down", () => { Normal.scroll("down") })
vmapkey("k", "Scroll page up", () => { Normal.scroll("up") })
