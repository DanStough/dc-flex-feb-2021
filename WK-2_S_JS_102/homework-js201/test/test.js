/* global describe it */

// -----------------------------------------------------------------------------
// Requires
// -----------------------------------------------------------------------------

const fs = require('fs-plus')
const glob = require('glob')
const assert = require('assert')
const esprima = require('esprima')

// -----------------------------------------------------------------------------
// Constants
// -----------------------------------------------------------------------------

const exerciseFiles = glob.sync('exercises/*.js')
const modulesDir = 'exercises-modules/'
const utf8 = 'utf8'
const squigglyLine = '// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n'
const exportsComment = '\n\n\n\n\n' +
  squigglyLine +
  '// Module Exports (automatically generated)\n' +
  squigglyLine

// -----------------------------------------------------------------------------
// Stateful
// -----------------------------------------------------------------------------

let allSyntaxValid = true

// -----------------------------------------------------------------------------
// Module Magic
// -----------------------------------------------------------------------------

// returns an array of the top-level function names from a script
function getTopLevelFunctions (syntaxTree) {
  const fnNames = []
  for (let i = 0; i < syntaxTree.body.length; i++) {
    const itm = syntaxTree.body[i]
    if (itm.type === 'FunctionDeclaration') {
      fnNames.push(itm.id.name)
    }
  }
  return fnNames
}

// example filename --> module filename
function moduleName (f) {
  return f.replace('exercises/', modulesDir)
    .replace('.js', '.module.js')
}

function moduleExportStatement (fnName) {
  return 'module.exports.' + fnName + ' = ' + fnName
}

function createModuleFile (f) {
  const fileContents = fs.readFileSync(f, utf8)
  const syntaxTree = esprima.parseScript(fileContents)
  const topLevelFns = getTopLevelFunctions(syntaxTree)
  const moduleFileContents = fileContents +
                             exportsComment +
                             topLevelFns.map(moduleExportStatement).join('\n') +
                             '\n\n\n'
  const moduleFileName = moduleName(f)
  fs.writeFileSync(moduleFileName, moduleFileContents)
}

function createModuleFiles () {
  if (!fs.existsSync(modulesDir)) {
    fs.mkdirSync(modulesDir)
  }
  exerciseFiles.forEach(createModuleFile)
}

function destroyModuleFiles () {
  fs.removeSync(modulesDir)
}

// -----------------------------------------------------------------------------
// Check JS Syntax
// -----------------------------------------------------------------------------

// returns the "body" part of fnName
// NOTE: assumes that fnName is a top-level function
function getFnBody (body, fnName) {
  for (let i = 0; i < body.length; i++) {
    if (body[i].type === 'FunctionDeclaration' &&
        body[i].id.name === fnName) {
      return body[i].body
    }
  }

  return false
}

// does "fnName" contain "expressionType"?
function functionContainStatement (syntaxTree, fnName, expressionType) {
  const fnBodyStatements = getFnBody(syntaxTree, fnName)
  if (!fnBodyStatements) return false

  // NOTE: this is a total hack, but works fine for this use case
  const json = JSON.stringify(fnBodyStatements)
  return json.includes('"type":"' + expressionType + '"')
}

function checkFileSyntax (f) {
  const fileContents = fs.readFileSync(f, utf8)

  // check for empty files
  if (fileContents === '') {
    it(f + ' is an empty file', function () {
      assert.fail(f + ' should not be empty')
    })
    allSyntaxValid = false
    return
  }

  // try parsing the JS
  let parsed = null
  try {
    parsed = esprima.parseScript(fileContents)
  } catch (e) { }
  if (!parsed) {
    allSyntaxValid = false

    it(f + ' should be valid JavaScript syntax', function () {
      assert.ok(parsed, f + ' has invalid syntax')
    })
  }
}

function checkJSSyntax () {
  exerciseFiles.forEach(checkFileSyntax)
}

// -----------------------------------------------------------------------------
// Util
// -----------------------------------------------------------------------------

function isFn (f) {
  return typeof f === 'function'
}

function getModule (f) {
  let module
  try {
    module = require(f)
  } catch (e) {
    return null
  }

  if (!module) {
    it('Unable to read ' + f, function () {
      assert.fail('Unable to read ' + f)
    })
  }

  return module
}

// -----------------------------------------------------------------------------
// Assertion Utils
// -----------------------------------------------------------------------------

function checkForFunction (filename, theirModule, fnName) {
  it(filename + ' should contain a function "' + fnName + '"', function () {
    assert(isFn(theirModule[fnName]), 'function "' + fnName + '" not found in exercises/' + filename)
  })
}

// -----------------------------------------------------------------------------
// 201 - Hello World
// -----------------------------------------------------------------------------

function checkHelloWorlds () {
  const filename = '201-hello-world.js'
  const moduleFileName = '../' + moduleName('exercises/201-hello-world.js')
  const module = getModule(moduleFileName)

  checkForFunction(filename, module, 'hello')
  it('"hello" function implementation', function () {
    assert.deepStrictEqual(module.hello('Mustache'), 'Hello, Mustache!', "hello('Mustache') should return 'Hello, Mustache!'")
    assert.deepStrictEqual(module.hello(''), 'Hello, !', "hello('') should return 'Hello, !'")
  })

  checkForFunction(filename, module, 'helloDefault')
  it('"helloDefault" function implementation', function () {
    assert.deepStrictEqual(module.helloDefault('Mustache'), 'Hello, Mustache!', "helloDefault('Mustache') should return 'Hello, Mustache!'")
    assert.deepStrictEqual(module.helloDefault(''), 'Hello, world!', "helloDefault('') should return 'Hello, world!'")
  })
}

// -----------------------------------------------------------------------------
// 202 - Madlib
// -----------------------------------------------------------------------------

function checkMadlib () {
  const filename = '202-madlib.js'
  const moduleFileName = '../' + moduleName('exercises/202-madlib.js')
  const module = getModule(moduleFileName)

  checkForFunction(filename, module, 'madlib')
  it('"madlib" function implementation', function () {
    assert.deepStrictEqual(
      module.madlib('James', 'programming'),
      "James's favorite subject in school is programming.",
      "madlib('James', 'programming') should return 'James's favorite subject in school is programming.'")
    assert.deepStrictEqual(
      module.madlib('', ''),
      "'s favorite subject in school is .",
      "madlib('', '') should return \"'s favorite subject in school is .\"")
  })
}

// -----------------------------------------------------------------------------
// 205 - Tip Calculator
// -----------------------------------------------------------------------------

function checkTipCalculator () {
  const filename = '205-tip-calculator.js'
  const moduleFileName = '../' + moduleName('exercises/205-tip-calculator.js')
  const module = getModule(moduleFileName)

  checkForFunction(filename, module, 'tipAmount')
  it('"tipAmount" function implementation', function () {
    assert.deepStrictEqual(module.tipAmount(100, 'good'), 20, "tipAmount(100, 'good') should return 20")
    assert.deepStrictEqual(module.tipAmount(40, 'fair'), 6, "tipAmount(40, 'fair') should return 6")
    assert.deepStrictEqual(module.tipAmount(30, 'poor'), 3, "tipAmount(30, 'poor') should return 3")
  })

  checkForFunction(filename, module, 'totalAmount')
  it('"totalAmount" function implementation', function () {
    assert.deepStrictEqual(module.totalAmount(100, 'good'), 120, "totalAmount(100, 'good') should return 120")
    assert.deepStrictEqual(module.totalAmount(40, 'fair'), 46, "totalAmount(40, 'fair') should return 46")
    assert.deepStrictEqual(module.totalAmount(30, 'poor'), 33, "totalAmount(30, 'poor') should return 33")
  })

  checkForFunction(filename, module, 'splitAmount')
  it('"splitAmount" function implementation', function () {
    assert.deepStrictEqual(module.splitAmount(100, 'good', 5), 24, "splitAmount(100, 'good', 5) should return 24")
    assert.deepStrictEqual(module.splitAmount(40, 'fair', 2), 23, "splitAmount(40, 'fair', 2) should return 23")
    assert.deepStrictEqual(module.splitAmount(30, 'poor', 3), 11, "splitAmount(30, 'poor', 3) should return 11")
  })
}

// -----------------------------------------------------------------------------
// 208 - Predicate Functions
// -----------------------------------------------------------------------------

function checkPredicateFunctions () {
  const filename = '208-predicate-functions.js'
  const moduleFileName = '../' + moduleName('exercises/208-predicate-functions.js')
  const module = getModule(moduleFileName)

  checkForFunction(filename, module, 'isVowel')
  it('"isVowel" function implementation', function () {
    assert.deepStrictEqual(module.isVowel('c'), false, "isVowel('c') should return false")
    assert.deepStrictEqual(module.isVowel('a'), true, "isVowel('a') should return true")
    assert.deepStrictEqual(module.isVowel('A'), true, "isVowel('A') should return true")
    assert.deepStrictEqual(module.isVowel(99), false, 'isVowel(99) should return false')
    assert.deepStrictEqual(module.isVowel({}), false, 'isVowel({}) should return false')
    assert.deepStrictEqual(module.isVowel('Ez'), false, "isVowel('Ez') should return false")
    assert.deepStrictEqual(module.isVowel('aa'), false, "isVowel('aa') should return false ('aa' is not a character)")
  })

  checkForFunction(filename, module, 'isEven')
  it('"isEven" function implementation', function () {
    assert.deepStrictEqual(module.isEven(2), true, 'isEven(2) should return true')
    assert.deepStrictEqual(module.isEven(-2), true, 'isEven(-2) should return true')
    assert.deepStrictEqual(module.isEven(1000), true, 'isEven(1000) should return true')
    assert.deepStrictEqual(module.isEven(99), false, 'isEven(99) should return false')
    assert.deepStrictEqual(module.isEven('banana'), false, "isEven('banana') should return false")
    assert.deepStrictEqual(module.isEven('8'), false, 'isEven("8") should return false ("8" is a string)')
    assert.deepStrictEqual(module.isEven([]), false, 'isEven([]) should return false')
  })

  checkForFunction(filename, module, 'isOdd')
  it('"isOdd" function implementation', function () {
    assert.deepStrictEqual(module.isOdd(3), true, 'isOdd(3) should return true')
    assert.deepStrictEqual(module.isOdd(59), true, 'isOdd(59) should return true')
    assert.deepStrictEqual(module.isOdd(1277), true, 'isOdd(1277) should return true')
    assert.deepStrictEqual(module.isOdd(-3), true, 'isOdd(-3) should return true')
    assert.deepStrictEqual(module.isOdd(-9), true, 'isOdd(-9) should return true')
    assert.deepStrictEqual(module.isOdd(100), false, 'isOdd(100) should return false')
    assert.deepStrictEqual(module.isOdd(3.14), false, 'isOdd(3.14) should return false')
    assert.deepStrictEqual(module.isOdd('13'), false, 'isOdd("13") should return false ("13" is a string)')
    assert.deepStrictEqual(module.isOdd({}), false, 'isOdd({}) should return false')
    assert.deepStrictEqual(module.isOdd([]), false, 'isOdd([]) should return false')
  })

  checkForFunction(filename, module, 'isCapitalCity')
  it('"isCapitalCity" function implementation', function () {
    assert.deepStrictEqual(module.isCapitalCity('Alabama', 'Montgomery'), true, "isCapitalCity('Alabama', 'Montgomery') should return true")
    assert.deepStrictEqual(module.isCapitalCity('Alaska', 'Juneau'), true, "isCapitalCity('Alaska', 'Juneau') should return false")
    assert.deepStrictEqual(module.isCapitalCity('Illinois', 'Springfield'), true, "isCapitalCity('Illinois', 'Springfield') should return true")
    assert.deepStrictEqual(module.isCapitalCity('Texas', 'Austin'), true, "isCapitalCity('Texas', 'Austin') should return true")
    assert.deepStrictEqual(module.isCapitalCity('Washington', 'Olympia'), true, "isCapitalCity('Washington', 'Olympia') should return true")
    assert.deepStrictEqual(module.isCapitalCity('Illinois', 'Chicago'), false, "isCapitalCity('Illinois', 'Chicago') should return false")
    assert.deepStrictEqual(module.isCapitalCity('Texas', 'Houston'), false, "isCapitalCity('Texas', 'Houston') should return false")
    assert.deepStrictEqual(module.isCapitalCity('Strawberry', 'Mango'), false, "isCapitalCity('Strawberry', 'Mango') should return false")
  })
}

// -----------------------------------------------------------------------------
// 210 - Fizzbuzz
// -----------------------------------------------------------------------------

function checkFizzbuzz () {
  const filename = '210-fizzbuzz.js'
  const moduleFileName = '../' + moduleName('exercises/210-fizzbuzz.js')
  const module = getModule(moduleFileName)

  checkForFunction(filename, module, 'fizzbuzz')
  it('"fizzbuzz" function implementation', function () {
    assert.deepStrictEqual(module.fizzbuzz(3), '..fizz', "fizzbuzz(3) should return '..fizz'")
    assert.deepStrictEqual(module.fizzbuzz(15), '..fizz.buzzfizz..fizzbuzz.fizz..fizzbuzz', "fizzbuzz(15) should return '..fizz.buzzfizz..fizzbuzz.fizz..fizzbuzz'")
  })
}

// -----------------------------------------------------------------------------
// 212 - Number Joiners
// -----------------------------------------------------------------------------

function checkNumberJoiners () {
  const filename = '212-number-joiners.js'
  const moduleFileName = '../' + moduleName('exercises/212-number-joiners.js')
  const module = getModule(moduleFileName)

  const fileContents = fs.readFileSync('exercises/212-number-joiners.js', utf8)
  const syntaxTree = esprima.parseScript(fileContents)

  checkForFunction(filename, module, 'numberJoinerWhile')
  it('"numberJoinerWhile" function implementation', function () {
    assert.ok(functionContainStatement(syntaxTree.body, 'numberJoinerWhile', 'WhileStatement'),
      '"numberJoinerWhile" should contain a "while" statement')
    assert.deepStrictEqual(module.numberJoinerWhile(1, 1), '1',
      "numberJoinerWhile(1, 1) should return '1'")
    assert.deepStrictEqual(module.numberJoinerWhile(1, 10), '1_2_3_4_5_6_7_8_9_10',
      "numberJoinerWhile(1, 10) should return '1_2_3_4_5_6_7_8_9_10'")
    assert.deepStrictEqual(module.numberJoinerWhile(12, 14), '12_13_14',
      "numberJoinerWhile(12, 14) should return '12_13_14'")
    assert.deepStrictEqual(module.numberJoinerWhile(-2, 3), '-2_-1_0_1_2_3',
      "numberJoinerWhile(-2, 3) should return '-2_-1_0_1_2_3'")
  })

  checkForFunction(filename, module, 'numberJoinerFor')
  it('"numberJoinerFor" function implementation', function () {
    assert.ok(functionContainStatement(syntaxTree.body, 'numberJoinerFor', 'ForStatement'),
      '"numberJoinerFor" should contain a "for" statement')
    assert.deepStrictEqual(module.numberJoinerFor(1, 1), '1',
      "numberJoinerFor(1, 1) should return '1'")
    assert.deepStrictEqual(module.numberJoinerFor(1, 10), '1_2_3_4_5_6_7_8_9_10',
      "numberJoinerFor(1, 10) should return '1_2_3_4_5_6_7_8_9_10'")
    assert.deepStrictEqual(module.numberJoinerFor(12, 14), '12_13_14',
      "numberJoinerFor(12, 14) should return '12_13_14'")
    assert.deepStrictEqual(module.numberJoinerFor(-2, 3), '-2_-1_0_1_2_3',
      "numberJoinerFor(-2, 3) should return '-2_-1_0_1_2_3'")
  })

  checkForFunction(filename, module, 'numberJoinerFancy')
  it('"numberJoinerFancy" function implementation', function () {
    assert.deepStrictEqual(
      module.numberJoinerFancy(1, 10),
      '1_2_3_4_5_6_7_8_9_10',
      "numberJoinerFancy(1, 10) should return '1_2_3_4_5_6_7_8_9_10'"
    )
    assert.deepStrictEqual(
      module.numberJoinerFancy(1, 5, '~'),
      '1~2~3~4~5',
      "numberJoinerFancy(1, 5, '~') should return '1~2~3~4~5'"
    )
    assert.deepStrictEqual(
      module.numberJoinerFancy(3, 6, '***BANANAS***'),
      '3***BANANAS***4***BANANAS***5***BANANAS***6',
      "numberJoinerFancy(3, 6, '***BANANAS***') should return '3***BANANAS***4***BANANAS***5***BANANAS***6'"
    )
    assert.deepStrictEqual(module.numberJoinerFancy(1, 1), '1',
      "numberJoinerFancy(1, 1) should return '1'")
    assert.deepStrictEqual(module.numberJoinerFancy(-2, 3, 'xx'), '-2xx-1xx0xx1xx2xx3',
      "numberJoinerFancy(-2, 3, 'xx') should return '-2xx-1xx0xx1xx2xx3'")
  })

  // TODO: add a function to that module that allows number to be in any order
  // ie: joiner(8, 6) --> 6_7_8
}

// -----------------------------------------------------------------------------
// 213 - Moar Loops
// -----------------------------------------------------------------------------

function checkMoarLoops () {
  const filename = '213-moar-loops.js'
  const moduleFileName = '../' + moduleName('exercises/213-moar-loops.js')
  const module = getModule(moduleFileName)

  checkForFunction(filename, module, 'removeZAnimals')
  it('"removeZAnimals" function implementation', function () {
    assert.deepStrictEqual(module.removeZAnimals(), ['alligator', 'crocodile', 'giraffe'])
  })

  checkForFunction(filename, module, 'removeAnyWordWithZ')
  it('"removeAnyWordWithZ" function implementation', function () {
    assert.deepStrictEqual(module.removeAnyWordWithZ(['a', 'b', 'c']), ['a', 'b', 'c'])
    assert.deepStrictEqual(module.removeAnyWordWithZ(['a', 'b', 'z', 'c']), ['a', 'b', 'c'])
    assert.deepStrictEqual(module.removeAnyWordWithZ(['aaa', 'bbb', 'ccc']), ['aaa', 'bbb', 'ccc'])
    assert.deepStrictEqual(module.removeAnyWordWithZ(['aaa', 'bzb', 'ccc']), ['aaa', 'ccc'])
    assert.deepStrictEqual(module.removeAnyWordWithZ(['aaZ', 'bbb', 'ccc']), ['bbb', 'ccc'])
    assert.deepStrictEqual(module.removeAnyWordWithZ(['aaZ', 'z', 'zebra']), [])
  })

  checkForFunction(filename, module, 'removeWordsWithChar')
  it('"removeWordsWithChar" function implementation', function () {
    assert.deepStrictEqual(module.removeWordsWithChar(['aaa', 'bbb', 'ccc'], 'b'), ['aaa', 'ccc'])
    assert.deepStrictEqual(module.removeWordsWithChar(['pizza', 'beer', 'cheese'], 'E'), ['pizza'])
    assert.deepStrictEqual(module.removeWordsWithChar(['a', 'b', 'z', 'c', 'c'], 'c'), ['a', 'b', 'z'])
    assert.deepStrictEqual(module.removeWordsWithChar(['Alabama', 'Alaska', 'Texas'], 'x'), ['Alabama', 'Alaska'])
    assert.deepStrictEqual(module.removeWordsWithChar([], 'q'), [])
    assert.deepStrictEqual(module.removeWordsWithChar(['aaa', 'bbb', 'ccc'], 'q'), ['aaa', 'bbb', 'ccc'])
  })
}

// -----------------------------------------------------------------------------
// 214 - Loopy Strings
// -----------------------------------------------------------------------------

function checkLoopyStrings () {
  const filename = '214-loopy-strings.js'
  const moduleFileName = '../' + moduleName('exercises/214-loopy-strings.js')
  const module = getModule(moduleFileName)

  checkForFunction(filename, module, 'reverse')
  it('"reverse" function implementation', function () {
    assert.deepStrictEqual(module.reverse('skoob'), 'books', "reverse('skoob') should return 'books'")
    assert.deepStrictEqual(module.reverse('1234'), '4321', "reverse('1234') should return '4321'")
    assert.deepStrictEqual(module.reverse('blah blah'), 'halb halb', "reverse('blah blah') should return 'halb halb'")
  })

  checkForFunction(filename, module, 'findLongestWord')
  it('"findLongestWord" function implementation', function () {
    assert.deepStrictEqual(module.findLongestWord('a book full of dogs'), 'book', "findLongestWord('a book full of dogs') should return 'book")
    assert.deepStrictEqual(module.findLongestWord('abrakadabra is the longest word here'),
      'abrakadabra', "findLongestWord('abrakadabra is the longest word here') should return 'abrakadabra'")
    assert.deepStrictEqual(module.findLongestWord('word'), 'word', "findLongestWord('word') should return 'word'")
  })

  checkForFunction(filename, module, 'nicer')
  it('"nicer" function implementation', function () {
    assert.deepStrictEqual(module.nicer('mom get the heck in here and bring me a darn sandwich.'),
      'mom get the in here and bring me a sandwich.', "nicer('mom get the heck in here and bring me a darn sandwich.') should return 'mom get the in here and bring me a sandwich.'")
    assert.deepStrictEqual(module.nicer('only nice things'), 'only nice things', "module.nicer('only nice things') should return 'only nice things")
    assert.deepStrictEqual(module.nicer('a crappy thing'), 'a thing', "nicer('a crappy thing') should return 'a thing")
  })

  checkForFunction(filename, module, 'capitalizeAll')
  it('"capitalizeAll" function implementation', function () {
    assert.deepStrictEqual(module.capitalizeAll('hello world'), 'Hello World', "capitalizeAll('hello world') should return 'Hello World'")
    assert.deepStrictEqual(module.capitalizeAll('a'), 'A', "capitalizeAll('a') should return 'A'")
  })

  checkForFunction(filename, module, 'split')
  it('"split" function implementation', function () {
    assert.deepStrictEqual(module.split('a-b-c', '-'), ['a', 'b', 'c'], "split('a-b-c', '-') should return['a', 'b', 'c'] ")
    assert.deepStrictEqual(module.split('APPLExxBANANAxxCHERRY', 'xx'), ['APPLE', 'BANANA', 'CHERRY'], "split('APPLExxBANANAxxCHERRY', 'xx') should return ['APPLE', 'BANANA', 'CHERRY']")
    assert.deepStrictEqual(module.split('xyz', 'r'), ['xyz'], "split('xyz', 'r') should return ['xyz']")
  })
}

// -----------------------------------------------------------------------------
// 218 - Factors
// -----------------------------------------------------------------------------

function checkFactors () {
  const filename = '218-factors.js'
  const moduleFileName = '../' + moduleName('exercises/218-factors.js')
  const module = getModule(moduleFileName)

  checkForFunction(filename, module, 'gcd')
  it('"gcd" function implementation', function () {
    assert.deepStrictEqual(module.gcd(5, 1), 1, 'gcd(5, 1) should return 1')
    assert.deepStrictEqual(module.gcd(3, 15), 3, 'gcd(3, 15) should return 3')
    assert.deepStrictEqual(module.gcd(50, 20), 10, 'gcd(50, 20) should return 10')
  })

  checkForFunction(filename, module, 'factors')
  it('"factors" function implementation', function () {
    assert.deepStrictEqual(module.factors(1), [1], 'factors(1) should return [1]')
    assert.deepStrictEqual(module.factors(12), [1, 2, 3, 4, 6, 12], 'factors(12) should return [1, 2, 3, 4, 6, 12]')
    assert.deepStrictEqual(module.factors(37), [1, 37], 'factors(37) should return [1, 37]')
    assert.deepStrictEqual(module.factors(48), [1, 2, 3, 4, 6, 8, 12, 16, 24, 48], 'factors(48) should return [1, 2, 3, 4, 6, 8, 12, 16, 24, 48]')
    assert.deepStrictEqual(module.factors(96), [1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 96], 'factors(96) should return [1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 96]')
  })
}

// -----------------------------------------------------------------------------
// 220 - Cities
// -----------------------------------------------------------------------------

function checkCities () {
  const filename = '220-cities.js'
  const moduleFileName = '../' + moduleName('exercises/220-cities.js')
  const module = getModule(moduleFileName)

  checkForFunction(filename, module, 'coolCities')
  it('"coolCities" function implementation', function () {
    assert.deepStrictEqual(module.coolCities([
      { name: 'Los Angeles', temperature: 60.0 },
      { name: 'Atlanta', temperature: 52.0 },
      { name: 'Detroit', temperature: 48.0 },
      { name: 'New York', temperature: 80.0 }
    ]), [
      { name: 'Los Angeles', temperature: 60.0 },
      { name: 'Atlanta', temperature: 52.0 },
      { name: 'Detroit', temperature: 48.0 }
    ], 'coolCities([\n' +
      "      { name: 'Los Angeles', temperature: 60.0},\n" +
      "      { name: 'Atlanta', temperature: 52.0 },\n" +
      "      { name: 'Detroit', temperature: 48.0 },\n" +
      "      { name: 'New York', temperature: 80.0 }\n" +
      '    ] should return [\n' +
      "      { name: 'Los Angeles', temperature: 60.0},\n" +
      "      { name: 'Atlanta', temperature: 52.0 },\n" +
      "      { name: 'Detroit', temperature: 48.0 }\n" +
      '    ]')
    assert.deepStrictEqual(module.coolCities([
      { name: 'Boca Raton', temperature: 85.0 },
      { name: 'Houston', temperature: 82.0 },
      { name: 'Kansas City', temperature: 67.0 },
      { name: 'Oklahoma City', temperature: 68.0 },
      { name: 'Portland', temperature: 61.0 },
      { name: 'Wichita', temperature: 84.0 }
    ]), [
      { name: 'Kansas City', temperature: 67.0 },
      { name: 'Oklahoma City', temperature: 68.0 },
      { name: 'Portland', temperature: 61.0 }
    ], 'coolCities([\n' +
        "      { name: 'Boca Raton', temperature: 85.0 },\n" +
        "      { name: 'Houston', temperature: 82.0 },\n" +
        "      { name: 'Kansas City', temperature: 67.0 },\n" +
        "      { name: 'Oklahoma City', temperature: 68.0 },\n" +
        "      { name: 'Portland', temperature: 61.0 },\n" +
        "      { name: 'Wichita', temperature: 84.0 }\n" +
        '    ] should return [\n' +
        "      { name: 'Kansas City', temperature: 67.0},\n" +
        "      { name: 'Oklahoma City', temperature: 68.0 },\n" +
        "      { name: 'Portland', temperature: 61.0 }\n" +
        '    ]')
  })

  checkForFunction(filename, module, 'cityNames')
  it('"cityNames" function implementation', function () {
    assert.deepStrictEqual(module.cityNames([
      { name: 'Los Angeles', temperature: 60.0 },
      { name: 'Atlanta', temperature: 52.0 },
      { name: 'Detroit', temperature: 48.0 },
      { name: 'New York', temperature: 80.0 }
    ]), [
      'Los Angeles',
      'Atlanta',
      'Detroit',
      'New York'
    ], 'coolCities([\n' +
      "      { name: 'Los Angeles', temperature: 60.0},\n" +
      "      { name: 'Atlanta', temperature: 52.0 },\n" +
      "      { name: 'Detroit', temperature: 48.0 },\n" +
      "      { name: 'New York', temperature: 80.0 }\n" +
      '    ]) should return [\n' +
      "      'Los Angeles',\n" +
      "      'Atlanta',\n" +
      "      'Detroit'\n" +
      "      'New York'\n" +
      '    ]')
  })
}

// -----------------------------------------------------------------------------
// 230 - Long-long Vowels
// -----------------------------------------------------------------------------

function checkLongLongVowels () {
  const filename = '230-long-long-vowels.js'
  const moduleFileName = '../' + moduleName('exercises/230-long-long-vowels.js')
  const module = getModule(moduleFileName)

  checkForFunction(filename, module, 'longLongVowels')
  it('"longLongVowels" function implementation', function () {
    assert.deepStrictEqual(module.longLongVowels('Good'), 'Goooood')
    assert.deepStrictEqual(module.longLongVowels('Cheese'), 'Cheeeeese')
    assert.deepStrictEqual(module.longLongVowels('beef'), 'beeeeef')
    assert.deepStrictEqual(module.longLongVowels(''), '')
    assert.deepStrictEqual(module.longLongVowels('Man'), 'Man')
    assert.deepStrictEqual(module.longLongVowels('CHOCOLATE'), 'CHOCOLATE')
  })
}

// -----------------------------------------------------------------------------
// 216 - Number Arrays
// -----------------------------------------------------------------------------

function checkNumberArrays () {
  const filename = '216-number-arrays.js'
  const moduleFileName = '../' + moduleName('exercises/216-number-arrays.js')
  const module = getModule(moduleFileName)

  checkForFunction(filename, module, 'max')
  it('"max" function implementation', function () {
    assert.deepStrictEqual(module.max([1, 2, 3, 4, 5]), 5, 'max([1,2,3,4,5]) should return 5')
    assert.deepStrictEqual(module.max([-1000, 20, 32, 0]), 32, 'max([-1000,20,32,0]) should return 32')
    assert.deepStrictEqual(module.max([]), 0, 'max([]) should return 0')
  })

  checkForFunction(filename, module, 'sumNumbers')
  it('"sumNumbers" function implementation', function () {
    assert.deepStrictEqual(module.sumNumbers([]), 0, 'sumNumbers([]) should return 0')
    assert.deepStrictEqual(module.sumNumbers([88]), 88, 'sumNumbers([88]) should return 88')
    assert.deepStrictEqual(module.sumNumbers([1, 4, 8]), 13, 'sumNumbers([1, 4, 8]) return 13')
    assert.deepStrictEqual(module.sumNumbers([1, 4, 8, 1, 4, 8, 1, 4, 8]), 39, 'sumNumbers([1, 4, 8, 1, 4, 8, 1, 4, 8]) should return 39')
    // TODO: we need a test case for negative numbers here
    // TODO: we should test when a non-number is inside of the array; it should be ignored
  })

  checkForFunction(filename, module, 'positives')
  it('"positives" function implementation', function () {
    assert.deepStrictEqual(module.positives([-1, -2, -3, 4, 5]), [4, 5], 'positives([-1, -2, -3, 4, 5]) should return [4,5]')
    assert.deepStrictEqual(module.positives([-1, -2, -3, -4, -5]), [], 'positives([-1, -2, -3, -4, -5]) should return []')
    assert.deepStrictEqual(module.positives([-1, -2, -3, 0, 1000]), [1000], 'positives([-1, -2, -3, 1000]) should return [1000]')
    assert.deepStrictEqual(module.positives([]), [], 'positives([]) should return []')
    assert.deepStrictEqual(module.positives([1, -3, 5, -3, 0]), [1, 5], 'positives([1, -3, 5, -3, 0]) should return [1, 5]')
    assert.deepStrictEqual(module.positives([1, 2, 3]), [1, 2, 3], 'positives([1, 2, 3]) should return [1, 2, 3]')
    assert.deepStrictEqual(module.positives([-1, -4, -8]), [], 'positives([-1, -4, -8]) should return []')
    assert.deepStrictEqual(module.positives([-1, -4, -8, 8]), [8], 'positives([-1, -4, -8, 8]) should return [8]')
  })

  checkForFunction(filename, module, 'evens')
  it('"evens" function implementation', function () {
    assert.deepStrictEqual(module.evens([1, 2, 3, 4, 5]), [2, 4], 'evens([1,2,3,4,5]) should return [2,4]')
    assert.deepStrictEqual(module.evens([2, 4, 6, 7, 8]), [2, 4, 6, 8], 'evens([2,4,6,7,8]) should return [2,4,6,8]')
    assert.deepStrictEqual(module.evens([-2, -4, -6, -7, -8]), [-2, -4, -6, -8], 'evens([-2,-4,-6,-7,-8]) should return [-2,-4,-6,-8]')
  })

  checkForFunction(filename, module, 'odds')
  it('"odds" function implementation', function () {
    assert.deepStrictEqual(module.odds([1, 2, 3, 4, 5]), [1, 3, 5], 'odds([1,2,3,4,5]) should return [1,3,5]')
    assert.deepStrictEqual(module.odds([2, 4, 6, 7, 8]), [7], 'odds([2,4,6,7,8]) should return [7]')
    assert.deepStrictEqual(module.odds([-2, -4, -6, -7, -8]), [-7], 'odds([-2,-4,-6,-7,-8]) should return [-7]')
  })

  checkForFunction(filename, module, 'integers')
  it('"integers" function implementation', function () {
    assert.deepStrictEqual(module.integers([3.14, 2.4, 7, 8.1, 2]), [7, 2], 'integers([3.14, 2.4, 7, 8.1, 2]) should return [7, 2]')
    assert.deepStrictEqual(module.integers([3.14, 2.4, -7, 8.1, -2]), [-7, -2], 'integers([3.14, 2.4, -7, 8.1, -2]) should return [-7, -2]')
    assert.deepStrictEqual(module.integers([3.14, 2.4, 8.1, 0]), [0], 'integers([3.14, 2.4, 8.1, 0]) should return [0]')
  })

  checkForFunction(filename, module, 'squareDance')
  it('"squareDance" function implementation', function () {
    assert.deepStrictEqual(module.squareDance([]), [], 'squareDance([]) should return []')
    assert.deepStrictEqual(module.squareDance([1]), [1], 'squareDance([1]) should return [1]')
    assert.deepStrictEqual(module.squareDance([1, 2, 3]), [1, 4, 9], 'squareDance([1,2,3]) should return [1,4,9]')
  })
}

// -----------------------------------------------------------------------------
// 211 - Rock Paper Scissors
// -----------------------------------------------------------------------------

function checkRockPaperScissors () {
  const filename = '211-rock-paper-scissors.js'
  const moduleFileName = '../' + moduleName('exercises/211-rock-paper-scissors.js')
  const module = getModule(moduleFileName)

  checkForFunction(filename, module, 'rockPaperScissors')
  it('"rockPaperScissors" function implementation', function () {
    assert.deepStrictEqual(module.rockPaperScissors('rock', 'scissors'), 'player 1')
    assert.deepStrictEqual(module.rockPaperScissors('paper', 'rock'), 'player 1')
    assert.deepStrictEqual(module.rockPaperScissors('scissors', 'paper'), 'player 1')

    assert.deepStrictEqual(module.rockPaperScissors('scissors', 'rock'), 'player 2')
    assert.deepStrictEqual(module.rockPaperScissors('rock', 'paper'), 'player 2')
    assert.deepStrictEqual(module.rockPaperScissors('paper', 'scissors'), 'player 2')

    assert.deepStrictEqual(module.rockPaperScissors('rock', 'rock'), 'draw')
    assert.deepStrictEqual(module.rockPaperScissors('paper', 'paper'), 'draw')
    assert.deepStrictEqual(module.rockPaperScissors('scissors', 'scissors'), 'draw')
  })
}

// -----------------------------------------------------------------------------
// 235 - Leetspeak
// -----------------------------------------------------------------------------

function checkLeetspeak () {
  const filename = '235-leetspeak.js'
  const moduleFileName = '../' + moduleName('exercises/235-leetspeak.js')
  const module = getModule(moduleFileName)

  checkForFunction(filename, module, 'leetspeak')
  it('"leetspeak" function implementation', function () {
    assert.deepStrictEqual(module.leetspeak('banana'), 'b4n4n4', "leetspeak('banana') should return 'b4n4n4'")
    assert.deepStrictEqual(module.leetspeak('kewl'), 'k3wl', "leetspeak('kewl') should return 'k3wl'")
    assert.deepStrictEqual(module.leetspeak('orange'), '0r4n63', "leetspeak('orange') should return '0r4n63'")
    assert.deepStrictEqual(module.leetspeak('ORANGE'), '0r4n63', "leetspeak('ORANGE') should return '0r4n63'")
    assert.deepStrictEqual(module.leetspeak('Leet'), 'l337', "leetspeak('Leet') should return 'l337'")
    assert.deepStrictEqual(module.leetspeak('page'), 'p463', "leetspeak('page') should return 'p463'")
    assert.deepStrictEqual(module.leetspeak('silly'), '51lly', "leetspeak('silly') should return '51lly'")
    assert.deepStrictEqual(module.leetspeak(''), '', "leetspeak('') should return '' (an empty string)")
  })
}

// -----------------------------------------------------------------------------
// 237 - Caesar Ciphers
// -----------------------------------------------------------------------------

function checkCaesarCipher () {
  const filename = '237-caesar-cipher.js'
  const moduleFileName = '../' + moduleName('exercises/237-caesar-cipher.js')
  const module = getModule(moduleFileName)

  checkForFunction(filename, module, 'cipher')
  it('"cipher" function implementation', function () {
    assert.deepStrictEqual(module.cipher('genius without education is like silver in the mine', 5),
      'ljsnzx bnymtzy jizhfynts nx qnpj xnqajw ns ymj rnsj')
    assert.deepStrictEqual(module.cipher('we hold these truths to be self-evident', 8),
      'em pwtl bpmam bzcbpa bw jm amtn-mdqlmvb')
    assert.deepStrictEqual(module.cipher('cryptanalysis is the art of breaking codes and ciphers.', 25),
      'bqxoszmzkxrhr hr sgd zqs ne aqdzjhmf bncdr zmc bhogdqr.')
  })

  checkForFunction(filename, module, 'decipher')
  it('"decipher" function implementation', function () {
    assert.deepStrictEqual(module.decipher('cvvcem cv fcyp!', 2), 'attack at dawn!')
    assert.deepStrictEqual(module.decipher('ehz czlod otgpcrpo ty l hzzo', 11), 'two roads diverged in a wood')
    assert.deepStrictEqual(module.decipher('bqxoszmzkxrhr hr sgd zqs ne aqdzjhmf bncdr zmc bhogdqr.', 25),
      'cryptanalysis is the art of breaking codes and ciphers.')
  })
}

// -----------------------------------------------------------------------------
// 250 - Make Boxes
// -----------------------------------------------------------------------------

function checkMakeBoxes () {
  const filename = '250-make-boxes.js'
  const moduleFileName = '../' + moduleName('exercises/250-make-boxes.js')
  const module = getModule(moduleFileName)

  checkForFunction(filename, module, 'makeSquare')
  it('"makeSquare" function implementation', function () {
    assert.deepStrictEqual(module.makeSquare(0), '', "makeSquare(0) should return '' (an empty string)")
    assert.deepStrictEqual(module.makeSquare(1), '*', "makeSquare(1) should return '*'")
    assert.deepStrictEqual(module.makeSquare(2), '**\n**', "makeSquare(2) should return '**\n**' -- 2 lines of **")
    assert.deepStrictEqual(module.makeSquare(3), '***\n***\n***', "makeSquare(3) should return '***\n***\n***' -- 3 lines of ***")
    assert.deepStrictEqual(module.makeSquare(5), '*****\n*****\n*****\n*****\n*****', "makeSquare(5) should return '*****\n*****\n*****\n*****\n*****' -- 5 lines of *****")
  })

  checkForFunction(filename, module, 'makeBox')
  it('"makeBox" function implementation', function () {
    assert.deepStrictEqual(module.makeBox(0, 0), '', "makeBox(0, 0) should return '' (an empty string)")
    assert.deepStrictEqual(module.makeBox(1, 1), '*', "makeBox(1, 1) should return '*'")
    assert.deepStrictEqual(module.makeBox(2, 1), '**', "makeBox(2, 1) should return '**'")
    assert.deepStrictEqual(module.makeBox(3, 2), '***\n***', "makeBox(3, 2) should return '***\n***'")
    assert.deepStrictEqual(module.makeBox(3, 3), '***\n* *\n***', "makeBox(3, 3) should return '***\n* *\n***'")
    assert.deepStrictEqual(module.makeBox(6, 4), '******\n*    *\n*    *\n******', "makeBox(6, 4) should return '******\n*    *\n*    *\n******'")
    assert.deepStrictEqual(module.makeBox(3, 5), '***\n* *\n* *\n* *\n***', "makeBox(3, 5) should return '***\n* *\n* *\n* *\n***'")
  })

  checkForFunction(filename, module, 'makeBanner')
  it('"makeBanner" function implementation', function () {
    assert.deepStrictEqual(module.makeBanner(''), '****\n*  *\n****', "makeBanner('') should return '****\n*  *\n****'")
    assert.deepStrictEqual(module.makeBanner('x'), '*****\n* x *\n*****', "makeBanner('x') should return '*****\n* x *\n*****'")
    assert.deepStrictEqual(module.makeBanner('Welcome to DigitalCrafts'),
      '****************************\n' +
      '* Welcome to DigitalCrafts *\n' +
      '****************************',
      "\nmakeBanner('Welcome to DigitalCrafts') should return \n\n" +
      '****************************\n' +
      '* Welcome to DigitalCrafts *\n' +
      '****************************'
    )
    // TODO: should we add a test case here for a newline in the text?
  })
}

// -----------------------------------------------------------------------------
// 255 - Matrix Math
// -----------------------------------------------------------------------------

function checkMatrixMath () {
  const filename = '255-matrix-math.js'
  const moduleFileName = '../' + moduleName('exercises/255-matrix-math.js')
  const module = getModule(moduleFileName)

  checkForFunction(filename, module, 'matrixAdd')
  it('"matrixAdd" function implementation', function () {
    assert.deepStrictEqual(module.matrixAdd([[1, 3], [2, 4]], [[5, 2], [1, 0]]),
      [[6, 5], [3, 4]], `

      matrixAdd([
        [1, 3],
        [2, 4]
      ],[
        [5, 2],
        [1, 0]
      ]) should return

      [
        [6, 5],
        [3, 4]
      ]`
    )
    assert.deepStrictEqual(module.matrixAdd([[5, 24], [16, 91]], [[8, 46], [7, 1]]),
      [[13, 70], [23, 92]], `

      matrixAdd([
        [5, 24],
        [16, 91]
      ], [
        [8, 46],
        [7, 1]
      ]) should return

      [
        [13, 70],
        [23, 92]
      ]`
    )
    assert.deepStrictEqual(module.matrixAdd([[0, 0], [0, 0]], [[0, 0], [0, 0]]),
      [[0, 0], [0, 0]], `

      matrixAdd([
        [0, 0],
        [0, 0]
      ], [
        [0, 0],
        [0, 0]
      ]) should return

      [
        [0, 0],
        [0, 0]
      ]`
    )
    assert.deepStrictEqual(module.matrixAdd([[-84, 2], [-6, 4]], [[8, -42], [7, 1]]),
      [[-76, -40], [1, 5]], `

      matrixAdd([
        [-84, 2],
        [-6, 4]
      ], [
        [8, -42],
        [7, 1]
      ]) should return

      [
        [-76, -40],
        [1, 5]
      ]`
    )
  })

  checkForFunction(filename, module, 'matrixMultiply')
  it('"matrixMultiply" function implementation', function () {
    assert.deepStrictEqual(module.matrixMultiply([[1, 1], [1, 1]], [[1, 1], [1, 1]]),
      [[2, 2], [2, 2]], `

      matrixMultiply([
        [1, 1],
        [1, 1]
      ], [
        [1, 1],
        [1, 1]
      ]) should return

      [
        [2, 2],
        [2, 2]
      ]`
    )
    assert.deepStrictEqual(module.matrixMultiply([[1, -1], [1, -1]], [[1, -1], [1, -1]]),
      [[0, 0], [0, 0]], `

      matrixMultiply([
        [1, -1],
        [1, -1]
      ], [
        [1, -1],
        [1, -1]
      ]) should return

      [
        [0, 0],
        [0, 0]
      ]`
    )
    assert.deepStrictEqual(module.matrixMultiply([[2, 4], [3, 4]], [[5, 2], [3, 1]]),
      [[22, 8], [27, 10]], `

      matrixMultiply([
        [2, 4],
        [3, 4]
      ], [
        [5, 2],
        [3, 1]
      ]) should return

      [
        [22, 8],
        [27, 10]
      ]`
    )
    assert.deepStrictEqual(module.matrixMultiply([[23, 4], [0, -8]], [[22, 8], [7, -75]]),
      [[534, -116], [-56, 600]], `

      matrixMultiply([
        [23, 4],
        [0, -8]
      ], [
        [22, 8],
        [7, -75]
      ]) should return

      [
        [534, -116],
        [-56, 600]
      ]`
    )
  })
}

// -----------------------------------------------------------------------------
// 257 - Tic Tac Toe
// -----------------------------------------------------------------------------

const oWinHorizontal = [
  ['O', 'O', 'O'],
  ['X', null, 'X'],
  [null, 'X', null]
]

const oWinVertical = [
  ['X', null, 'O'],
  ['X', null, 'O'],
  [null, 'X', 'O']
]

const oWinDiagonal = [
  ['X', null, 'O'],
  ['X', 'O', null],
  ['O', 'X', null]
]

const xWinHorizontal = [
  ['X', 'X', 'X'],
  ['O', null, 'O'],
  [null, 'O', null]
]

const xWinVertical = [
  ['O', 'X', 'O'],
  ['O', 'X', null],
  [null, 'X', null]
]

const xWinDiagonal = [
  ['O', null, 'X'],
  ['O', 'X', null],
  ['X', 'O', 'X']
]

const tttBoardDraw = [
  ['O', 'X', 'O'],
  ['O', 'O', null],
  [null, 'X', 'X']
]

function checkTicTacToe () {
  const filename = '257-tic-tac-toe.js'
  const moduleFileName = '../' + moduleName('exercises/257-tic-tac-toe.js')
  const module = getModule(moduleFileName)

  checkForFunction(filename, module, 'ticTacToe')
  it('"ticTacToe" function implementation', function () {
    assert.deepStrictEqual(module.ticTacToe(oWinHorizontal), 'O')
    assert.deepStrictEqual(module.ticTacToe(oWinVertical), 'O')
    assert.deepStrictEqual(module.ticTacToe(oWinDiagonal), 'O')

    assert.deepStrictEqual(module.ticTacToe(xWinHorizontal), 'X')
    assert.deepStrictEqual(module.ticTacToe(xWinVertical), 'X')
    assert.deepStrictEqual(module.ticTacToe(xWinDiagonal), 'X')

    assert.deepStrictEqual(module.ticTacToe(tttBoardDraw), null)
  })
}

// -----------------------------------------------------------------------------
// 260 - Recognize Employees
// -----------------------------------------------------------------------------

function checkRecognizeEmployees () {
  const filename = '260-recognize-employees.js'
  const moduleFileName = '../' + moduleName('exercises/260-recognize-employees.js')
  const module = getModule(moduleFileName)

  checkForFunction(filename, module, 'recognizeEmployees')
  it('"recognizeEmployees" function implementation', function () {
    assert.deepStrictEqual(module.recognizeEmployees(['Susan', 'Anthony', 'Bill'], ['Bill']),
      ['Great job, Susan!', 'Great job, Anthony!', 'Outstanding job, Bill!'],
      "recognizeEmployees(['Susan', 'Anthony', 'Bill'], ['Bill'])" +
      " should return ['Great job, Susan!', 'Great job, Anthony!', 'Outstanding job, Bill!']")

    assert.deepStrictEqual(module.recognizeEmployees(['Susan', 'Anthony', 'Bill'], ['Bill', 'Susan']),
      ['Outstanding job, Susan!', 'Great job, Anthony!', 'Outstanding job, Bill!'],
      "recognizeEmployees(['Susan', 'Anthony', 'Bill'], ['Bill', 'Susan'])" +
      " should return ['Outstanding job, Susan!', 'Great job, Anthony!', 'Outstanding job, Bill!']")

    assert.deepStrictEqual(module.recognizeEmployees(['Susan', 'Anthony', 'Bill'], ['Jennifer', 'Dylan']),
      ['Great job, Susan!', 'Great job, Anthony!', 'Great job, Bill!'],
      "recognizeEmployees(['Susan', 'Anthony', 'Bill'], ['Jennifer', 'Dylan'])" +
      " should return ['Great job, Susan!', 'Great job, Anthony!', 'Great job, Bill!']")
  })
}

// -----------------------------------------------------------------------------
// 290 - Sort arrays
// -----------------------------------------------------------------------------

function checkSortArrays () {
  const filename = '290-sort-arrays.js'
  const moduleFileName = '../' + moduleName('exercises/290-sort-arrays.js')
  const module = getModule(moduleFileName)

  checkForFunction(filename, module, 'alphaSort')
  it('"alphaSort" function implementation', function () {
    assert.deepStrictEqual(module.alphaSort(['b', 'a', 'c']),
      ['a', 'b', 'c'],
      "sortingOne(['b', 'a', 'c']) should equal ['a', 'b', 'c']")

    assert.deepStrictEqual(module.alphaSort(['wxy', 'wxyz', 'bac', 'cab', 'abc']),
      ['abc', 'bac', 'cab', 'wxy', 'wxyz'],
      "sortingOne(['wxy', 'wxyz', 'bac', 'cab', 'abc']) should equal \"abc\", \"bac\", \"cab\", \"wxy\", \"wxyz\"")
  })

  checkForFunction(filename, module, 'strLengthSort')
  it('"strLengthSort" function implementation', function () {
    assert.deepStrictEqual(module.strLengthSort(['one', 'two', 'three', 'four', 'no', 'more']),
      ['no', 'one', 'two', 'four', 'more', 'three'],
      "sortingOne(['one', 'two', 'three', 'four', 'no', 'more']) should equal ['no', 'one', 'two', 'four', 'more', 'three']")
  })

  checkForFunction(filename, module, 'sumSort')
  it('"sumSort" function implementation', function () {
    var arr = [
      [1, 3, 4],
      [2, 4, 6, 8],
      [3, 6]
    ]

    assert.deepStrictEqual(module.sumSort(arr), [
      [1, 3, 4],
      [3, 6],
      [2, 4, 6, 8]
    ], 'sortingTwo([\n' +
      '      [1, 3, 4],\n' +
      '      [2, 4, 6, 8],\n' +
      '      [3, 6]\n' +
      '    ]), should equal [\n' +
      '                       [1, 3, 4],\n' +
      '                       [3, 6],\n' +
      '                       [2, 4, 6, 8]\n' +
      '                     ]')
  })
}

// -----------------------------------------------------------------------------
// 295 - call N times
// -----------------------------------------------------------------------------

function checkCallNTimes () {
  const filename = '295-call-n-times.js'
  const moduleFileName = '../' + moduleName('exercises/295-call-n-times.js')
  const module = getModule(moduleFileName)

  checkForFunction(filename, module, 'callNTimes')

  let count1 = 0
  function counter1 () {
    count1 = count1 + 1
  }

  let count2 = 0
  function counter2 () {
    count2 = count2 + 1
  }

  it('"callNTimes" function implementation', function () {
    if (isFn(module.callNTimes)) {
      module.callNTimes(21, counter1)
      module.callNTimes(112, counter2)
    }

    assert.deepStrictEqual(count1, 21, '"callNTimes(21, fn)" should execute "fn" 21 times')
    assert.deepStrictEqual(count2, 112, '"callNTimes(112, fn)" should execute "fn" 112 times')
  })
}

// -----------------------------------------------------------------------------
// Run the tests
// -----------------------------------------------------------------------------

describe('JavaScript Syntax', checkJSSyntax)

// only run the test suite if there were no syntax errors
if (allSyntaxValid) {
  createModuleFiles()
  describe('Hello Worlds', checkHelloWorlds)
  describe('Madlib', checkMadlib)
  describe('Tip Calculator', checkTipCalculator)
  describe('Predicate Functions', checkPredicateFunctions)
  describe('Fizzbuzz', checkFizzbuzz)
  describe('Rock Paper Scissors', checkRockPaperScissors)
  describe('Number Joiners', checkNumberJoiners)
  describe('Moar Loops', checkMoarLoops)
  describe('Loopy Strings', checkLoopyStrings)
  describe('Number Arrays', checkNumberArrays)
  describe('Factors', checkFactors)
  describe('Cities', checkCities)
  describe('Long-long Vowels', checkLongLongVowels)
  describe('Leetspeak', checkLeetspeak)
  describe('Caesar Cipher', checkCaesarCipher)
  describe('Make Boxes', checkMakeBoxes)
  describe('Matrix Math', checkMatrixMath)
  describe('Tic Tac Toe', checkTicTacToe)
  describe('Recognize Employees', checkRecognizeEmployees)
  describe('Sort Arrays', checkSortArrays)
  describe('Call N Times', checkCallNTimes)
  destroyModuleFiles()
}
