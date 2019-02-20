export default class HtmlRepair {

  repair = html => {
    html = this._repairHtmlBrowser(html)
    html = this._fixMissingImgClosingTag(html)

    return html
  }

  _repairHtmlBrowser = html => {
    const doc = document.createElement('div')
    doc.innerHTML = html
    return doc.innerHTML
  }


  _fixMissingImgClosingTag = html => {
    const correctRegex = /<\s*img\s+[^>](.*?)\s*\/\s*>/g
    const missingTagRegex = /<\s*img\s+[^>](.*?)\s*>/g
    const result = html.match(missingTagRegex)

    if (html.match(correctRegex) != null || result == null)
      return html

    let correctHtml = result[0].slice(0, -1) + "/>"
    return html.replace(result, correctHtml)
  }
}