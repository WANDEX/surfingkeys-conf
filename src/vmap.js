// Visual mode mappings

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
