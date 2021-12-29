/* ACE Editor configuration file
hjkl remapped for colemak to
hnei i.e. left/down/up/right

ace vim editor Examples:
https://github.com/kalbasit/shabka/commit/bf237a504ff7070b489d86ea352bac412dc84fe1

aceVimMap("K", "i") // insert mode and modifier inside
!!! THIS DOES NOT WORK !!! ACE or Surfingkeys BUG!? */


// renamed to addVimKeyMap ?

// this no longer work!
/*
addVimMapKey(
  { // left
    keys:       "h",
    type:       "motion",
    motion:     "moveByCharacters",
    motionArgs: { forward: false },
  },
  { // down
    keys:       "n",
    type:       "motion",
    motion:     "moveByLines",
    motionArgs: { forward: true, linewise: true },
  },
  { // up
    keys:       "e",
    type:       "motion",
    motion:     "moveByLines",
    motionArgs: { forward: false, linewise: true },
  },
  { // right
    keys:       "i",
    type:       "motion",
    motion:     "moveByCharacters",
    motionArgs: { forward: true },
  },
  { // full page down
    keys:       "N",
    type:       "motion",
    motion:     "moveByPage",
    motionArgs: { forward: true },
  },
  { // full page up
    keys:       "E",
    type:       "motion",
    motion:     "moveByPage",
    motionArgs: { forward: false },
  },
  { // find next
    keys:       "<CR>",
    // keys:    "<A-n>", // should, but does not work!
    type:       "motion",
    motion:     "findNext",
    motionArgs: { forward: true, toJumplist: true },
  },
  { // find previous
    keys:       "<BS>",
    // keys:    "<A-e>", // should, but does not work!
    type:       "motion",
    motion:     "findNext",
    motionArgs: { forward: false, toJumplist: true },
  },
  { // insert
    keys:       "k",
    type:       "action",
    action:     "enterInsertMode",
    isEdit:     true,
    actionArgs: { insertAt: "inplace" },
    context:    "normal",
  },
  { // Text object motion inside (original: i<character> surroundings etc.)
    // !!!! NOT WORK !!!! WHY?
    keys:       "k<character>",
    type:       "motion",
    motion:     "textObjectManipulation",
    motionArgs: { textObjectInner: true },
  },
)
*/
