//directory of files to pack with `node scripts/pack.js`
//they are stored in compressed form
var lex = require('./misc')

//add-in the generic, flat word-lists
var data = [
  //nouns
  [require('./nouns/singulars'), 'Singular'],
  [require('./nouns/professions'), 'Actor'],
  [require('./nouns/sportsTeams'), 'SportsTeam'],
  [require('./nouns/uncountables'), 'Uncountable'],
  [require('./nouns/pronouns'), 'Pronoun'],
  // [require('./nouns/relative-prounoun'), 'Noun'],
  [require('./nouns/organizations'), 'Organization'],
  [require('./nouns/demonyms'), 'Demonym'],
  [require('./nouns/possessives'), 'Possessive'], //+pronoun?
  [require('./misc/currencies'), 'Currency'],
  [require('./numbers/units'), 'Unit'],

  [require('./places/countries'), 'Country'],
  [require('./places/regions'), 'Region'],
  [require('./places/places'), 'Place'],
  [require('./places/cities'), 'City'],
  //dates
  [require('./dates/days'), 'WeekDay'],
  [require('./dates/dates'), ['Date', 'Noun']],
  [require('./dates/holidays'), 'Holiday'],
  [require('./dates/months'), 'Month'],
  [require('./dates/durations'), 'Duration'],
  [require('./dates/times'), 'Time'],
  //people
  [require('./people/firstnames'), 'FirstName'],
  [require('./people/lastnames'), 'LastName'],
  [require('./people/maleNames'), 'MaleName'],
  [require('./people/femaleNames'), 'FemaleName'],
  [require('./people/honorifics'), 'Honorific'],
  [require('./people/people'), 'Person'],
  //verbs
  [require('./verbs/infinitives'), 'Infinitive'],
  [require('./verbs/verbs'), 'Verb'],
  [require('./verbs/phrasals'), 'PhrasalVerb'],
  [require('./verbs/modals'), 'Modal'],
  //adjectives
  [require('./adjectives/adjectives'), 'Adjective'],
  [require('./adjectives/comparables'), 'Comparable'],
  //numbers
  [require('./numbers/ordinals'), ['TextNumber', 'Ordinal']],
  [require('./numbers/cardinals'), ['TextNumber', 'Cardinal']],
  //abbreviations
  [require('./abbreviations/nouns'), ['Abbreviation', 'Noun']],
  [require('./abbreviations/honorifics'), ['Abbreviation', 'Honorific']],
  [require('./abbreviations/months'), ['Abbreviation', 'Month']],
  [require('./abbreviations/organizations'), ['Abbreviation', 'Organization']],
  [require('./abbreviations/places'), ['Abbreviation', 'Place']],
  //misc
  [require('./misc/adverbs'), 'Adverb'],
  [require('./misc/expressions'), 'Expression'],
  [require('./misc/prepositions'), 'Preposition'],
  [require('./misc/determiners'), 'Determiner'],
  [require('./misc/conjunctions'), 'Conjunction'],
]
for (var i = 0; i < data.length; i++) {
  var list = data[i][0]
  for (var o = 0; o < list.length; o++) {
    //log duplicates
    // if (lex[list[o]]) {
    //   console.log(list[o] + '  ' + lex[list[o]] + ' ' + data[i][1])
    // }
    lex[list[o]] = data[i][1]
  }
}

module.exports = lex
// console.log(Object.keys(lex).length);
// console.log(lex['budget'])
