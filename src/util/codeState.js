import * as Immutable from 'immutable'

const TabIndexMapping = Immutable.Record({
  0: 'react',
  1: 'scala',
  2: 'haskell',
  3: 'rust'
})

const LanguageRecord = Immutable.Record({
  raw: '',
  real: ''
})

const CodeRecord = Immutable.Record({
  react: new LanguageRecord(),
  scala: new LanguageRecord(),
  haskell: new LanguageRecord(),
  rust: new LanguageRecord()
})

const _indexMapping = new TabIndexMapping()

export default class CodeState {

  static GetLang = index => _indexMapping.get(index)

  constructor(code) {
    Object.keys(code).forEach(key => code[key] = this._formatCodeString(code[key]))
    let reactCode = code['react']
    Object.keys(code).map(key => code[key] = new LanguageRecord({raw: code[key], real: reactCode}))
    this.codeRecord = new CodeRecord(code)
  }

  getRaw = index => {
    let lang = _indexMapping.get(index)
    return this.codeRecord.get(lang).get('raw')
  }

  getReal = index => {
    let lang = _indexMapping.get(index)
    return this.codeRecord.get(lang).get('real')
  }

  set = (index, code) => {
    let lang = _indexMapping.get(index)
    let langRecord = this.codeRecord.get(lang)
    langRecord = langRecord.set('raw', code)

    // no transpilation needed if it is react codeState
    if (lang === 'react')
      langRecord = langRecord.set('real', code)

    this.codeRecord = this.codeRecord.set(lang, langRecord)
  }

  transpile = (index) => {
    let code = this.get(index)
    this.set(index, code)
  }

  canTranspile = index => {
    if (index === 1)
      return true

    return false
  }

  _formatCodeString = code => {
    const re = new RegExp('^( *)')

    let lines = code.split('\n')

    // Remove empty lines at front and end
    let start = 0
    let end = lines.length - 1

    while (start < end && lines[start].trim().length === 0) start++
    while (end >= start && lines[end].trim().length === 0) end--
    lines = lines.slice(start, end + 1)

    // Remove extra spaces at front
    const min = lines.filter(line => line.trim().length > 0)
                     .reduce((len, str) => Math.min(re.exec(str)[0].length, len), 1000, lines)

    return lines.map(line => line.replace(' '.repeat(min), ''), lines).join('\n')
  }
}
