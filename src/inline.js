// pons dictionary which translates only individual words
// TODO use DeepL if q selection contains [ ] space character
// to translate as sentence, to limit DeepL usage
// or use DeepL by default, but, if only one word(with/without.!?() etc) use pons.

Front.registerInlineQuery({
  url: (q) => {
    const s = "en"
    const d = "ru"
    return `http://en.pons.com/translate?l=${s}${d}&q=${q}` // pons
  },
  parseResult: (res) => {
    const doc = new DOMParser().parseFromString(res.text, "text/html")
    const raw = doc.querySelector("#en > div.results")
    // remove empty * lines & junk elements
    raw.querySelectorAll("ul").forEach((e) => { e.remove() })
    raw.querySelectorAll("h2").forEach((e) => { e.remove() })
    raw.querySelectorAll("h3").forEach((e) => { e.remove() })
    raw.querySelectorAll("div.link-examples-toolbar > a").forEach((e) => { e.remove() })
    const exp = raw.innerHTML
    return exp
  }
})
