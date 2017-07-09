(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.examples = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var bnf = '\n\n  expression    ::= "(" expression ")" expression~\n\n                  | term expression~ ;\n\n  operator      ::= "+"\n\n                  | "-"\n\n                  | "/"\n\n                  | "*" ;\n\n  term          ::= naturalNumber ;\n\n  naturalNumber ::= /\\d+/ ;\n\n  expression~   ::= operator expression expression~\n\n                  | \u03B5 ;\n\n';

module.exports = bnf;

},{}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var bnf = require('./bnf'),
    parserUtil = require('../util/parser'),
    BNFParser = require('../bnf/parser'),
    CommonParser = require('../common/parser');

var BNFLexer = lexers.BNFLexer;


var bnfLexer = BNFLexer.fromNothing(),
    bnfParser = BNFParser.fromNothing();

var BasicParser = function (_CommonParser) {
  _inherits(BasicParser, _CommonParser);

  function BasicParser() {
    _classCallCheck(this, BasicParser);

    return _possibleConstructorReturn(this, (BasicParser.__proto__ || Object.getPrototypeOf(BasicParser)).apply(this, arguments));
  }

  _createClass(BasicParser, null, [{
    key: 'fromBNF',
    value: function fromBNF(bnf) {
      var basicParser = null;

      try {
        var lines = bnfLexer.linesFromBNF(bnf),
            node = bnfParser.nodeFromLines(lines),
            rules = BNFParser.generateRules(node);

        basicParser = new BasicParser(rules);
      } catch (error) {}

      return basicParser;
    }
  }, {
    key: 'fromNothing',
    value: function fromNothing() {
      var basicParser = BasicParser.fromBNF(bnf);

      return basicParser;
    }
  }, {
    key: 'findRule',
    value: function findRule(ruleName, rules) {
      return parserUtil.findRule(ruleName, rules);
    }
  }]);

  return BasicParser;
}(CommonParser);

module.exports = BasicParser;

BasicParser.bnf = bnf;

},{"../bnf/parser":30,"../common/parser":78,"../util/parser":90,"./bnf":1,"occam-lexers":123}],3:[function(require,module,exports){
'use strict';

var bnf = '\n\n    rules                ::= rule+ ;\n    \n    rule                 ::= ruleName "::=" definitions ";" ;\n    \n    definitions          ::= definition ( "|" definition )* ;\n    \n    definition           ::= part+ ;\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n\n    \n    part                 ::= "<NO_WHITESPACE>" part part~\n    \n\n    \n\n    \n\n\n                           | "(" part+ ")" part~\n\n                           | "(" part ( "|" part )+ ")" part~\n\n                           | ruleName part~\n    \n                           | regularExpression part~\n    \n                           | significantTokenType part~\n    \n                           | terminalSymbol part~\n    \n                           | endOfLine part~\n    \n                           | epsilon part~\n    \n                           | wildcard part~ \n                           \n                           ;\n    \n    ruleName             ::= [name] ;\n    \n    regularExpression    ::= [regularExpression] ;\n    \n    significantTokenType ::= [type] ;\n    \n    terminalSymbol       ::= [string] ;\n    \n    endOfLine            ::= "<END_OF_LINE>" ;\n    \n    epsilon              ::= "\u03B5" ;\n    \n    wildcard             ::= "." ;\n    \n    part~                ::= <NO_WHITESPACE>"?" part~\n    \n                           | <NO_WHITESPACE>"*" part~\n    \n                           | <NO_WHITESPACE>"+" part~\n    \n                           | \u03B5 \n                           \n                           ;\n                                                 \n';

module.exports = bnf;

},{}],4:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtil = require('../util/array'),
    RuleNamePart = require('./part/ruleName');

var Definition = function () {
  function Definition(parts) {
    _classCallCheck(this, Definition);

    this.parts = parts;
  }

  _createClass(Definition, [{
    key: 'getParts',
    value: function getParts() {
      return this.parts;
    }
  }, {
    key: 'getFirstPart',
    value: function getFirstPart() {
      var firstPart = arrayUtil.first(this.parts);

      return firstPart;
    }
  }, {
    key: 'getPartsLength',
    value: function getPartsLength() {
      var partsLength = this.parts.length;

      return partsLength;
    }
  }, {
    key: 'getAllButFirstParts',
    value: function getAllButFirstParts() {
      var allButFirstParts = this.parts.slice(1);

      return allButFirstParts;
    }
  }, {
    key: 'isFirstPartRuleNamePart',
    value: function isFirstPartRuleNamePart() {
      var firstPart = this.getFirstPart(),
          firstPartRuleNamePart = firstPart instanceof RuleNamePart;

      return firstPartRuleNamePart;
    }
  }, {
    key: 'parse',
    value: function parse(context, noWhitespace) {
      var nodes = [];

      var savedIndex = context.savedIndex(),
          everyPartParsed = this.parts.every(function (part) {
        var partNodeOrNodes = part.parse(context, noWhitespace),
            partParsed = partNodeOrNodes !== null;

        if (partParsed) {
          nodes = nodes.concat(partNodeOrNodes);

          noWhitespace = false;
        }

        return partParsed;
      });

      if (!everyPartParsed) {
        context.backtrack(savedIndex);

        nodes = null;
      }

      return nodes;
    }
  }, {
    key: 'toString',
    value: function toString() {
      var partsString = this.parts.reduce(function (partsString, part) {
        var partString = part.toString();

        if (partsString === null) {
          partsString = partString;
        } else {
          partsString = partsString + ' ' + partString;
        }

        return partsString;
      }, null),
          string = partsString; ///

      return string;
    }
  }]);

  return Definition;
}();

module.exports = Definition;

},{"../util/array":88,"./part/ruleName":38}],5:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var Definition = require('../definition'),
    RuleNamePart = require('../part/ruleName'),
    GroupOfPartsPart = require('../part/groupOfParts'),
    OneOrMorePartsPart = require('../part/oneOrMoreParts'),
    TerminalSymbolPart = require('../part/terminalSymbol');

var BNFLexer = lexers.BNFLexer,
    specialSymbols = BNFLexer.specialSymbols,
    verticalBar = specialSymbols.verticalBar,
    openBracket = specialSymbols.openBracket,
    closeBracket = specialSymbols.closeBracket;

var ChoiceOfPartsDefinition = function (_Definition) {
  _inherits(ChoiceOfPartsDefinition, _Definition);

  function ChoiceOfPartsDefinition() {
    _classCallCheck(this, ChoiceOfPartsDefinition);

    var partRuleName = 'part',
        rightRecursivePartRuleName = 'rightRecursivePart',
        verticalBarTerminalSymbolContent = verticalBar,
        openBracketTerminalSymbolContent = openBracket,
        closeBracketTerminalSymbolContent = closeBracket,
        partRuleNamePart = new RuleNamePart(partRuleName),
        rightRecursivePartRuleNamePart = new RuleNamePart(rightRecursivePartRuleName),
        verticalBarTerminalSymbolPart = new TerminalSymbolPart(verticalBarTerminalSymbolContent),
        openBracketTerminalSymbolPart = new TerminalSymbolPart(openBracketTerminalSymbolContent),
        closeBracketTerminalSymbolPart = new TerminalSymbolPart(closeBracketTerminalSymbolContent),
        verticalBarTerminalSymbolThenPartRuleNameParts = [verticalBarTerminalSymbolPart, partRuleNamePart],
        groupOfPartsPart = new GroupOfPartsPart(verticalBarTerminalSymbolThenPartRuleNameParts),
        oneOrMoreGroupOfPartsPart = new OneOrMorePartsPart(groupOfPartsPart),
        parts = [openBracketTerminalSymbolPart, partRuleNamePart, oneOrMoreGroupOfPartsPart, closeBracketTerminalSymbolPart, rightRecursivePartRuleNamePart];

    return _possibleConstructorReturn(this, (ChoiceOfPartsDefinition.__proto__ || Object.getPrototypeOf(ChoiceOfPartsDefinition)).call(this, parts));
  }

  return ChoiceOfPartsDefinition;
}(Definition);

module.exports = ChoiceOfPartsDefinition;

},{"../definition":4,"../part/groupOfParts":34,"../part/oneOrMoreParts":35,"../part/ruleName":38,"../part/terminalSymbol":41,"occam-lexers":123}],6:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../definition'),
    RuleNamePart = require('../part/ruleName'),
    OneOrMorePartsPart = require('../part/oneOrMoreParts');

var DefinitionDefinition = function (_Definition) {
  _inherits(DefinitionDefinition, _Definition);

  function DefinitionDefinition() {
    _classCallCheck(this, DefinitionDefinition);

    var partRuleName = 'part',
        partRuleNamePart = new RuleNamePart(partRuleName),
        oneOrMoreRuleNamePartsPart = new OneOrMorePartsPart(partRuleNamePart),
        parts = [oneOrMoreRuleNamePartsPart];

    return _possibleConstructorReturn(this, (DefinitionDefinition.__proto__ || Object.getPrototypeOf(DefinitionDefinition)).call(this, parts));
  }

  return DefinitionDefinition;
}(Definition);

module.exports = DefinitionDefinition;

},{"../definition":4,"../part/oneOrMoreParts":35,"../part/ruleName":38}],7:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var Definition = require('../definition'),
    RuleNamePart = require('../part/ruleName'),
    GroupOfPartsPart = require('../part/groupOfParts'),
    TerminalSymbolPart = require('../part/terminalSymbol'),
    ZeroOrMorePartsPart = require('../part/zeroOrMoreParts');

var BNFLexer = lexers.BNFLexer,
    specialSymbols = BNFLexer.specialSymbols,
    verticalBar = specialSymbols.verticalBar;

var DefinitionsDefinition = function (_Definition) {
  _inherits(DefinitionsDefinition, _Definition);

  function DefinitionsDefinition() {
    _classCallCheck(this, DefinitionsDefinition);

    var definitionRuleName = 'definition',
        verticalBarTerminalSymbolContent = verticalBar,
        definitionRuleNamePart = new RuleNamePart(definitionRuleName),
        verticalBarTerminalSymbolPart = new TerminalSymbolPart(verticalBarTerminalSymbolContent),
        verticalBarTerminalSymbolThenDefinitionRuleNameParts = [verticalBarTerminalSymbolPart, definitionRuleNamePart],
        groupOfPartsPart = new GroupOfPartsPart(verticalBarTerminalSymbolThenDefinitionRuleNameParts),
        zeroOrMoreGroupOfPartsPart = new ZeroOrMorePartsPart(groupOfPartsPart),
        parts = [definitionRuleNamePart, zeroOrMoreGroupOfPartsPart];

    return _possibleConstructorReturn(this, (DefinitionsDefinition.__proto__ || Object.getPrototypeOf(DefinitionsDefinition)).call(this, parts));
  }

  return DefinitionsDefinition;
}(Definition);

module.exports = DefinitionsDefinition;

},{"../definition":4,"../part/groupOfParts":34,"../part/ruleName":38,"../part/terminalSymbol":41,"../part/zeroOrMoreParts":43,"occam-lexers":123}],8:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../definition'),
    EpsilonPart = require('../part/epsilon');

var EpsilonDefinition = function (_Definition) {
  _inherits(EpsilonDefinition, _Definition);

  function EpsilonDefinition() {
    _classCallCheck(this, EpsilonDefinition);

    var epsilonPart = new EpsilonPart(),
        parts = [epsilonPart];

    return _possibleConstructorReturn(this, (EpsilonDefinition.__proto__ || Object.getPrototypeOf(EpsilonDefinition)).call(this, parts));
  }

  return EpsilonDefinition;
}(Definition);

module.exports = EpsilonDefinition;

},{"../definition":4,"../part/epsilon":33}],9:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var Definition = require('../definition'),
    RuleNamePart = require('../part/ruleName'),
    OneOrMorePartsPart = require('../part/oneOrMoreParts'),
    TerminalSymbolPart = require('../part/terminalSymbol');

var BNFLexer = lexers.BNFLexer,
    specialSymbols = BNFLexer.specialSymbols,
    openBracket = specialSymbols.openBracket,
    closeBracket = specialSymbols.closeBracket;

var GroupOfPartsDefinition = function (_Definition) {
      _inherits(GroupOfPartsDefinition, _Definition);

      function GroupOfPartsDefinition() {
            _classCallCheck(this, GroupOfPartsDefinition);

            var partRuleName = 'part',
                rightRecursivePartRuleName = 'rightRecursivePart',
                openBracketTerminalSymbolContent = openBracket,
                closeBracketTerminalSymbolContent = closeBracket,
                partRuleNamePart = new RuleNamePart(partRuleName),
                rightRecursivePartRuleNamePart = new RuleNamePart(rightRecursivePartRuleName),
                openBracketTerminalSymbolPart = new TerminalSymbolPart(openBracketTerminalSymbolContent),
                closeBracketTerminalSymbolPart = new TerminalSymbolPart(closeBracketTerminalSymbolContent),
                oneOrMorePartRuleNamePartsPart = new OneOrMorePartsPart(partRuleNamePart),
                parts = [openBracketTerminalSymbolPart, oneOrMorePartRuleNamePartsPart, closeBracketTerminalSymbolPart, rightRecursivePartRuleNamePart];

            return _possibleConstructorReturn(this, (GroupOfPartsDefinition.__proto__ || Object.getPrototypeOf(GroupOfPartsDefinition)).call(this, parts));
      }

      return GroupOfPartsDefinition;
}(Definition);

module.exports = GroupOfPartsDefinition;

},{"../definition":4,"../part/oneOrMoreParts":35,"../part/ruleName":38,"../part/terminalSymbol":41,"occam-lexers":123}],10:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var Definition = require('../definition'),
    RuleNamePart = require('../part/ruleName'),
    TerminalSymbolPart = require('../part/terminalSymbol');

var BNFLexer = lexers.BNFLexer,
    specialSymbols = BNFLexer.specialSymbols,
    NO_WHITESPACE = specialSymbols.NO_WHITESPACE;

var NoWhitespaceDefinition = function (_Definition) {
      _inherits(NoWhitespaceDefinition, _Definition);

      function NoWhitespaceDefinition() {
            _classCallCheck(this, NoWhitespaceDefinition);

            var partRuleName = 'part',
                rightRecursivePartRuleName = 'rightRecursivePart',
                noWhitespaceTerminalSymbolContent = NO_WHITESPACE,
                partRuleNamePart = new RuleNamePart(partRuleName),
                rightRecursivePartRuleNamePart = new RuleNamePart(rightRecursivePartRuleName),
                noWhitespaceTerminalSymbolPart = new TerminalSymbolPart(noWhitespaceTerminalSymbolContent),
                parts = [noWhitespaceTerminalSymbolPart, partRuleNamePart, rightRecursivePartRuleNamePart];

            return _possibleConstructorReturn(this, (NoWhitespaceDefinition.__proto__ || Object.getPrototypeOf(NoWhitespaceDefinition)).call(this, parts));
      }

      return NoWhitespaceDefinition;
}(Definition);

module.exports = NoWhitespaceDefinition;

},{"../definition":4,"../part/ruleName":38,"../part/terminalSymbol":41,"occam-lexers":123}],11:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../definition'),
    RuleNamePart = require('../part/ruleName');

var PartRuleDefinition = function (_Definition) {
  _inherits(PartRuleDefinition, _Definition);

  function PartRuleDefinition(ruleName) {
    _classCallCheck(this, PartRuleDefinition);

    var rightRecursivePartRuleName = 'rightRecursivePart',
        ruleNameRuleNamePart = new RuleNamePart(ruleName),
        rightRecursivePartRuleNamePart = new RuleNamePart(rightRecursivePartRuleName),
        parts = [ruleNameRuleNamePart, rightRecursivePartRuleNamePart];

    return _possibleConstructorReturn(this, (PartRuleDefinition.__proto__ || Object.getPrototypeOf(PartRuleDefinition)).call(this, parts));
  }

  return PartRuleDefinition;
}(Definition);

module.exports = PartRuleDefinition;

},{"../definition":4,"../part/ruleName":38}],12:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../definition'),
    RuleNamePart = require('../part/ruleName'),
    TerminalSymbolPart = require('../part/terminalSymbol');

var RightRecursivePartRuleDefinition = function (_Definition) {
  _inherits(RightRecursivePartRuleDefinition, _Definition);

  function RightRecursivePartRuleDefinition(terminalSymbolContent) {
    _classCallCheck(this, RightRecursivePartRuleDefinition);

    var terminalSymbolPartNoWhitespace = true,
        rightRecursivePartRuleName = 'rightRecursivePart',
        terminalSymbolPart = new TerminalSymbolPart(terminalSymbolContent, terminalSymbolPartNoWhitespace),
        rightRecursivePartRuleNamePart = new RuleNamePart(rightRecursivePartRuleName),
        parts = [terminalSymbolPart, rightRecursivePartRuleNamePart];

    return _possibleConstructorReturn(this, (RightRecursivePartRuleDefinition.__proto__ || Object.getPrototypeOf(RightRecursivePartRuleDefinition)).call(this, parts));
  }

  return RightRecursivePartRuleDefinition;
}(Definition);

module.exports = RightRecursivePartRuleDefinition;

},{"../definition":4,"../part/ruleName":38,"../part/terminalSymbol":41}],13:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var Definition = require('../definition'),
    RuleNamePart = require('../part/ruleName'),
    TerminalSymbolPart = require('../part/terminalSymbol');

var BNFLexer = lexers.BNFLexer,
    specialSymbols = BNFLexer.specialSymbols,
    separator = specialSymbols.separator,
    terminator = specialSymbols.terminator;

var RuleDefinition = function (_Definition) {
      _inherits(RuleDefinition, _Definition);

      function RuleDefinition() {
            _classCallCheck(this, RuleDefinition);

            var separatorTerminalSymbolContent = separator,
                terminatorTerminalSymbolContent = terminator,
                ruleNameRuleName = 'ruleName',
                definitionsRuleName = 'definitions',
                separatorTerminalSymbolPart = new TerminalSymbolPart(separatorTerminalSymbolContent),
                terminatorTerminalSymbolPart = new TerminalSymbolPart(terminatorTerminalSymbolContent),
                definitionsRuleNamePart = new RuleNamePart(definitionsRuleName),
                ruleNameRuleNamePart = new RuleNamePart(ruleNameRuleName),
                parts = [ruleNameRuleNamePart, separatorTerminalSymbolPart, definitionsRuleNamePart, terminatorTerminalSymbolPart];

            return _possibleConstructorReturn(this, (RuleDefinition.__proto__ || Object.getPrototypeOf(RuleDefinition)).call(this, parts));
      }

      return RuleDefinition;
}(Definition);

module.exports = RuleDefinition;

},{"../definition":4,"../part/ruleName":38,"../part/terminalSymbol":41,"occam-lexers":123}],14:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../definition'),
    RuleNamePart = require('../part/ruleName'),
    OneOrMorePartsPart = require('../part/oneOrMoreParts');

var RulesDefinition = function (_Definition) {
  _inherits(RulesDefinition, _Definition);

  function RulesDefinition() {
    _classCallCheck(this, RulesDefinition);

    var ruleRuleName = 'rule',
        ruleRuleNamePart = new RuleNamePart(ruleRuleName),
        oneOrMoreRuleRuleNamePartsPart = new OneOrMorePartsPart(ruleRuleNamePart),
        parts = [oneOrMoreRuleRuleNamePartsPart];

    return _possibleConstructorReturn(this, (RulesDefinition.__proto__ || Object.getPrototypeOf(RulesDefinition)).call(this, parts));
  }

  return RulesDefinition;
}(Definition);

module.exports = RulesDefinition;

},{"../definition":4,"../part/oneOrMoreParts":35,"../part/ruleName":38}],15:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../definition'),
    SignificantTokenTypePart = require('../part/significantTokenType');

var SignificantTokenTypeDefinition = function (_Definition) {
  _inherits(SignificantTokenTypeDefinition, _Definition);

  function SignificantTokenTypeDefinition(significantTokenType) {
    _classCallCheck(this, SignificantTokenTypeDefinition);

    var significantTokenTypePart = new SignificantTokenTypePart(significantTokenType),
        parts = [significantTokenTypePart];

    return _possibleConstructorReturn(this, (SignificantTokenTypeDefinition.__proto__ || Object.getPrototypeOf(SignificantTokenTypeDefinition)).call(this, parts));
  }

  return SignificantTokenTypeDefinition;
}(Definition);

module.exports = SignificantTokenTypeDefinition;

},{"../definition":4,"../part/significantTokenType":40}],16:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Definition = require('../definition'),
    TerminalSymbolPart = require('../part/terminalSymbol');

var TerminalSymbolDefinition = function (_Definition) {
  _inherits(TerminalSymbolDefinition, _Definition);

  function TerminalSymbolDefinition(content) {
    _classCallCheck(this, TerminalSymbolDefinition);

    var terminalSymbolPart = new TerminalSymbolPart(content),
        parts = [terminalSymbolPart];

    return _possibleConstructorReturn(this, (TerminalSymbolDefinition.__proto__ || Object.getPrototypeOf(TerminalSymbolDefinition)).call(this, parts));
  }

  return TerminalSymbolDefinition;
}(Definition);

module.exports = TerminalSymbolDefinition;

},{"../definition":4,"../part/terminalSymbol":41}],17:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NonTerminalNode = require('../../common/node/nonTerminal');

var DefinitionNode = function (_NonTerminalNode) {
  _inherits(DefinitionNode, _NonTerminalNode);

  function DefinitionNode() {
    _classCallCheck(this, DefinitionNode);

    return _possibleConstructorReturn(this, (DefinitionNode.__proto__ || Object.getPrototypeOf(DefinitionNode)).apply(this, arguments));
  }

  _createClass(DefinitionNode, [{
    key: 'generateDefinition',
    value: function generateDefinition(Definition) {
      var childNodes = this.getChildNodes(),
          partNodes = childNodes,
          ///
      parts = partNodes.map(function (partNode) {
        var noWhitespace = false,
            ///
        part = partNode.generatePart(noWhitespace);

        return part;
      }),
          definition = new Definition(parts);

      return definition;
    }
  }], [{
    key: 'fromNodesAndRuleName',
    value: function fromNodesAndRuleName(nodes, ruleName) {
      var childNodes = nodes,
          ///
      rulesNode = NonTerminalNode.fromRuleNameAndChildNodes(ruleName, childNodes, DefinitionNode);

      return rulesNode;
    }
  }]);

  return DefinitionNode;
}(NonTerminalNode);

module.exports = DefinitionNode;

},{"../../common/node/nonTerminal":59}],18:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../util/array'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var DefinitionsNode = function (_NonTerminalNode) {
  _inherits(DefinitionsNode, _NonTerminalNode);

  function DefinitionsNode() {
    _classCallCheck(this, DefinitionsNode);

    return _possibleConstructorReturn(this, (DefinitionsNode.__proto__ || Object.getPrototypeOf(DefinitionsNode)).apply(this, arguments));
  }

  _createClass(DefinitionsNode, [{
    key: 'generateDefinitions',
    value: function generateDefinitions(Definition) {
      var childNodes = this.getChildNodes(),
          definitionNodes = childNodes,
          ///
      definitions = definitionNodes.map(function (definitionNode) {
        var definition = definitionNode.generateDefinition(Definition);

        return definition;
      });

      return definitions;
    }
  }], [{
    key: 'fromNodesAndRuleName',
    value: function fromNodesAndRuleName(nodes, ruleName) {
      var childNodes = arrayUtil.discardOdd(nodes),
          rulesNode = NonTerminalNode.fromRuleNameAndChildNodes(ruleName, childNodes, DefinitionsNode);

      return rulesNode;
    }
  }]);

  return DefinitionsNode;
}(NonTerminalNode);

module.exports = DefinitionsNode;

},{"../../common/node/nonTerminal":59,"../../util/array":88}],19:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EndOfLinePart = require('../part/endOfLine'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var EndOfLineNode = function (_NonTerminalNode) {
  _inherits(EndOfLineNode, _NonTerminalNode);

  function EndOfLineNode() {
    _classCallCheck(this, EndOfLineNode);

    return _possibleConstructorReturn(this, (EndOfLineNode.__proto__ || Object.getPrototypeOf(EndOfLineNode)).apply(this, arguments));
  }

  _createClass(EndOfLineNode, [{
    key: 'generatePart',
    value: function generatePart(noWhitespace) {
      var endOfLinePart = new EndOfLinePart(noWhitespace);

      return endOfLinePart;
    }
  }], [{
    key: 'fromNodesAndRuleName',
    value: function fromNodesAndRuleName(nodes, ruleName) {
      return NonTerminalNode.fromNodesAndRuleName(nodes, ruleName, EndOfLineNode);
    }
  }]);

  return EndOfLineNode;
}(NonTerminalNode);

module.exports = EndOfLineNode;

},{"../../common/node/nonTerminal":59,"../part/endOfLine":32}],20:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EpsilonPart = require('../part/epsilon'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var EpsilonNode = function (_NonTerminalNode) {
  _inherits(EpsilonNode, _NonTerminalNode);

  function EpsilonNode() {
    _classCallCheck(this, EpsilonNode);

    return _possibleConstructorReturn(this, (EpsilonNode.__proto__ || Object.getPrototypeOf(EpsilonNode)).apply(this, arguments));
  }

  _createClass(EpsilonNode, [{
    key: 'generatePart',
    value: function generatePart(noWhitespace) {
      var epsilonPart = new EpsilonPart(noWhitespace);

      return epsilonPart;
    }
  }], [{
    key: 'fromNodesAndRuleName',
    value: function fromNodesAndRuleName(nodes, ruleName) {
      return NonTerminalNode.fromNodesAndRuleName(nodes, ruleName, EpsilonNode);
    }
  }]);

  return EpsilonNode;
}(NonTerminalNode);

module.exports = EpsilonNode;

},{"../../common/node/nonTerminal":59,"../part/epsilon":33}],21:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var bnfUtil = require('../../util/bnf'),
    arrayUtil = require('../../util/array'),
    GroupOfPartsPart = require('../part/groupOfParts'),
    ChoiceOfPartsPart = require('../part/choiceOfParts'),
    OptionalPartPart = require('../part/optionalPart'),
    ZeroOrMorePartsPart = require('../part/zeroOrMoreParts'),
    OneOrMorePartsPart = require('../part/oneOrMoreParts'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var PartNode = function (_NonTerminalNode) {
  _inherits(PartNode, _NonTerminalNode);

  function PartNode() {
    _classCallCheck(this, PartNode);

    return _possibleConstructorReturn(this, (PartNode.__proto__ || Object.getPrototypeOf(PartNode)).apply(this, arguments));
  }

  _createClass(PartNode, [{
    key: 'generatePart',
    value: function generatePart(noWhitespace) {
      var part = null;

      var childNodes = this.getChildNodes(),
          nodes = childNodes,
          ///
      quantifiers = quantifiersFromNodes(nodes);

      noWhitespace = noWhitespaceFromNodes(nodes, noWhitespace);

      var nodesLength = nodes.length;

      if (nodesLength === 1) {
        var firstNode = arrayUtil.first(nodes),
            node = firstNode; ///

        part = partFromNode(node, noWhitespace);
      } else {
        part = partFromNodes(nodes);
      }

      part = partFromPartAndQuantifiers(part, quantifiers);

      return part;
    }
  }], [{
    key: 'fromNodesAndRuleName',
    value: function fromNodesAndRuleName(nodes, ruleName) {
      return NonTerminalNode.fromNodesAndRuleName(nodes, ruleName, PartNode);
    }
  }]);

  return PartNode;
}(NonTerminalNode);

module.exports = PartNode;

function noWhitespaceFromNodes(nodes, noWhitespace) {
  var firstNode = arrayUtil.first(nodes),
      firstNodeNoWhitespaceNode = bnfUtil.isNodeNoWhitespaceNode(firstNode);

  if (firstNodeNoWhitespaceNode) {
    noWhitespace = true;

    var begin = 0,
        deleteCount = 1;

    nodes.splice(begin, deleteCount);
  }

  return noWhitespace;
}

function quantifiersFromNodes(nodes) {
  var quantifiers = [];

  var lastNode = arrayUtil.last(nodes),
      lastNodeQuantifiersNode = bnfUtil.isNodeQuantifiersNode(lastNode);

  if (lastNodeQuantifiersNode) {
    var quantifiersNode = lastNode; ///

    quantifiers = bnfUtil.quantifiersFromQuantifiersNode(quantifiersNode);

    var begin = -1,
        deleteCount = 1;

    nodes.splice(begin, deleteCount);
  }

  return quantifiers;
}

function partFromNode(node, noWhitespace) {
  var part = node.generatePart(noWhitespace);

  return part;
}

function partFromNodes(nodes) {
  var part = ChoiceOfPartsPart.fromNodes(nodes) || GroupOfPartsPart.fromNodes(nodes); /// 

  return part;
}

function partFromPartAndQuantifiers(part, quantifiers) {
  var quantifiersLength = quantifiers.length;

  if (quantifiersLength > 0) {
    var quantifier = quantifiers.shift(),
        sequenceOfPartsPart = sequenceOfPartsPartFromPartAndQuantifier(part, quantifier);

    part = sequenceOfPartsPart; ///

    part = partFromPartAndQuantifiers(part, quantifiers);
  }

  return part;
}

function sequenceOfPartsPartFromPartAndQuantifier(part, quantifier) {
  var sequenceOfPartsPart = void 0;

  switch (quantifier) {
    case '?':
      var optionalPartPart = new OptionalPartPart(part);

      sequenceOfPartsPart = optionalPartPart; ///
      break;

    case '*':
      var zeroOrMorePartsPart = new ZeroOrMorePartsPart(part);

      sequenceOfPartsPart = zeroOrMorePartsPart; ///
      break;

    case '+':
      var oneOrMorePartsPart = new OneOrMorePartsPart(part);

      sequenceOfPartsPart = oneOrMorePartsPart; ///
      break;
  }

  return sequenceOfPartsPart;
}

},{"../../common/node/nonTerminal":59,"../../util/array":88,"../../util/bnf":89,"../part/choiceOfParts":31,"../part/groupOfParts":34,"../part/oneOrMoreParts":35,"../part/optionalPart":36,"../part/zeroOrMoreParts":43}],22:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../util/array'),
    RegularExpressionPart = require('../part/regularExpression'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var RegularExpressionNode = function (_NonTerminalNode) {
      _inherits(RegularExpressionNode, _NonTerminalNode);

      function RegularExpressionNode() {
            _classCallCheck(this, RegularExpressionNode);

            return _possibleConstructorReturn(this, (RegularExpressionNode.__proto__ || Object.getPrototypeOf(RegularExpressionNode)).apply(this, arguments));
      }

      _createClass(RegularExpressionNode, [{
            key: 'generatePart',
            value: function generatePart(noWhitespace) {
                  var regExp = this.getRegExp(),
                      regularExpressionPart = new RegularExpressionPart(regExp, noWhitespace);

                  return regularExpressionPart;
            }
      }, {
            key: 'getRegExp',
            value: function getRegExp() {
                  var regExp = /^\/([^\/]+)\/$/; ///

                  var childNodes = this.getChildNodes(),
                      firstChildNode = arrayUtil.first(childNodes),
                      terminalNode = firstChildNode,
                      ///
                  terminalNodeContent = terminalNode.getContent(),
                      matches = terminalNodeContent.match(regExp),
                      secondMatch = arrayUtil.second(matches),
                      pattern = secondMatch; ///

                  regExp = new RegExp(pattern);

                  return regExp;
            }
      }], [{
            key: 'fromNodesAndRuleName',
            value: function fromNodesAndRuleName(nodes, ruleName) {
                  return NonTerminalNode.fromNodesAndRuleName(nodes, ruleName, RegularExpressionNode);
            }
      }]);

      return RegularExpressionNode;
}(NonTerminalNode);

module.exports = RegularExpressionNode;

},{"../../common/node/nonTerminal":59,"../../util/array":88,"../part/regularExpression":37}],23:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NonTerminalNode = require('../../common/node/nonTerminal');

var RightRecursivePartNode = function (_NonTerminalNode) {
  _inherits(RightRecursivePartNode, _NonTerminalNode);

  function RightRecursivePartNode() {
    _classCallCheck(this, RightRecursivePartNode);

    return _possibleConstructorReturn(this, (RightRecursivePartNode.__proto__ || Object.getPrototypeOf(RightRecursivePartNode)).apply(this, arguments));
  }

  _createClass(RightRecursivePartNode, null, [{
    key: 'fromNodesAndRuleName',
    value: function fromNodesAndRuleName(nodes, ruleName) {
      return NonTerminalNode.fromNodesAndRuleName(nodes, ruleName, RightRecursivePartNode);
    }
  }]);

  return RightRecursivePartNode;
}(NonTerminalNode);

module.exports = RightRecursivePartNode;

},{"../../common/node/nonTerminal":59}],24:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../util/array'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var RuleNode = function (_NonTerminalNode) {
  _inherits(RuleNode, _NonTerminalNode);

  function RuleNode() {
    _classCallCheck(this, RuleNode);

    return _possibleConstructorReturn(this, (RuleNode.__proto__ || Object.getPrototypeOf(RuleNode)).apply(this, arguments));
  }

  _createClass(RuleNode, [{
    key: 'generateRule',
    value: function generateRule(Rule, Definition, mappings) {
      var name = this.getName(),
          definitions = this.generateDefinitions(Definition),
          mappingsNodeExists = mappings.hasOwnProperty(name),
          Node = mappingsNodeExists ? mappings[name] : NonTerminalNode,
          rule = new Rule(name, definitions, Node);

      return rule;
    }
  }, {
    key: 'getName',
    value: function getName() {
      var childNodes = this.getChildNodes(),
          firstChildNode = arrayUtil.first(childNodes),
          ruleNameNode = firstChildNode,
          ///
      ruleNameNodeRuleName = ruleNameNode.getRuleName(),
          name = ruleNameNodeRuleName;

      return name;
    }
  }, {
    key: 'generateDefinitions',
    value: function generateDefinitions(Definition) {
      var childNodes = this.getChildNodes(),
          lastButOneChildNode = arrayUtil.lastButOne(childNodes),
          definitionsNode = lastButOneChildNode,
          ///
      definitions = definitionsNode.generateDefinitions(Definition);

      return definitions;
    }
  }], [{
    key: 'fromNodesAndRuleName',
    value: function fromNodesAndRuleName(nodes, ruleName) {
      var childNodes = arrayUtil.discardSecond(nodes),
          ruleNode = NonTerminalNode.fromRuleNameAndChildNodes(ruleName, childNodes, RuleNode);

      return ruleNode;
    }
  }]);

  return RuleNode;
}(NonTerminalNode);

module.exports = RuleNode;

},{"../../common/node/nonTerminal":59,"../../util/array":88}],25:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../util/array'),
    RuleNamePart = require('../part/ruleName'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var RuleNameNode = function (_NonTerminalNode) {
      _inherits(RuleNameNode, _NonTerminalNode);

      function RuleNameNode() {
            _classCallCheck(this, RuleNameNode);

            return _possibleConstructorReturn(this, (RuleNameNode.__proto__ || Object.getPrototypeOf(RuleNameNode)).apply(this, arguments));
      }

      _createClass(RuleNameNode, [{
            key: 'generatePart',
            value: function generatePart(noWhitespace) {
                  var ruleName = this.getRuleName(),
                      ruleNamePart = new RuleNamePart(ruleName, noWhitespace);

                  return ruleNamePart;
            }
      }, {
            key: 'getRuleName',
            value: function getRuleName() {
                  var childNodes = this.getChildNodes(),
                      firstChildNode = arrayUtil.first(childNodes),
                      terminalNode = firstChildNode,
                      ///
                  terminalNodeContent = terminalNode.getContent(),
                      ruleName = terminalNodeContent; ///

                  return ruleName;
            }
      }], [{
            key: 'fromNodesAndRuleName',
            value: function fromNodesAndRuleName(nodes, ruleName) {
                  return NonTerminalNode.fromNodesAndRuleName(nodes, ruleName, RuleNameNode);
            }
      }]);

      return RuleNameNode;
}(NonTerminalNode);

module.exports = RuleNameNode;

},{"../../common/node/nonTerminal":59,"../../util/array":88,"../part/ruleName":38}],26:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NonTerminalNode = require('../../common/node/nonTerminal');

var RulesNode = function (_NonTerminalNode) {
  _inherits(RulesNode, _NonTerminalNode);

  function RulesNode() {
    _classCallCheck(this, RulesNode);

    return _possibleConstructorReturn(this, (RulesNode.__proto__ || Object.getPrototypeOf(RulesNode)).apply(this, arguments));
  }

  _createClass(RulesNode, [{
    key: 'generateRules',
    value: function generateRules(Rule, Definition, mappings) {
      var childNodes = this.getChildNodes(),
          ruleNodes = childNodes,
          ///
      rules = ruleNodes.map(function (ruleNode) {
        var rule = ruleNode.generateRule(Rule, Definition, mappings);

        return rule;
      });

      return rules;
    }
  }], [{
    key: 'fromNodesAndRuleName',
    value: function fromNodesAndRuleName(nodes, ruleName) {
      var childNodes = nodes,
          ///
      rulesNode = NonTerminalNode.fromRuleNameAndChildNodes(ruleName, childNodes, RulesNode);

      return rulesNode;
    }
  }]);

  return RulesNode;
}(NonTerminalNode);

module.exports = RulesNode;

},{"../../common/node/nonTerminal":59}],27:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../util/array'),
    SignificantTokenTypePart = require('../part/significantTokenType'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var SignificantTokenTypeNode = function (_NonTerminalNode) {
      _inherits(SignificantTokenTypeNode, _NonTerminalNode);

      function SignificantTokenTypeNode() {
            _classCallCheck(this, SignificantTokenTypeNode);

            return _possibleConstructorReturn(this, (SignificantTokenTypeNode.__proto__ || Object.getPrototypeOf(SignificantTokenTypeNode)).apply(this, arguments));
      }

      _createClass(SignificantTokenTypeNode, [{
            key: 'generatePart',
            value: function generatePart(noWhitespace) {
                  var significantTokenType = this.getSignificantTokenType(),
                      significantTokenTypePart = new SignificantTokenTypePart(significantTokenType, noWhitespace);

                  return significantTokenTypePart;
            }
      }, {
            key: 'getSignificantTokenType',
            value: function getSignificantTokenType() {
                  var regExp = /^\[([^\]]+)\]$/,
                      childNodes = this.getChildNodes(),
                      firstChildNode = arrayUtil.first(childNodes),
                      terminalNode = firstChildNode,
                      ///
                  terminalNodeContent = terminalNode.getContent(),
                      matches = terminalNodeContent.match(regExp),
                      secondMatch = arrayUtil.second(matches),
                      significantTokenType = secondMatch; ///

                  return significantTokenType;
            }
      }], [{
            key: 'fromNodesAndRuleName',
            value: function fromNodesAndRuleName(nodes, ruleName) {
                  return NonTerminalNode.fromNodesAndRuleName(nodes, ruleName, SignificantTokenTypeNode);
            }
      }]);

      return SignificantTokenTypeNode;
}(NonTerminalNode);

module.exports = SignificantTokenTypeNode;

},{"../../common/node/nonTerminal":59,"../../util/array":88,"../part/significantTokenType":40}],28:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../util/array'),
    TerminalSymbolPart = require('../part/terminalSymbol'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var TerminalSymbolNode = function (_NonTerminalNode) {
      _inherits(TerminalSymbolNode, _NonTerminalNode);

      function TerminalSymbolNode() {
            _classCallCheck(this, TerminalSymbolNode);

            return _possibleConstructorReturn(this, (TerminalSymbolNode.__proto__ || Object.getPrototypeOf(TerminalSymbolNode)).apply(this, arguments));
      }

      _createClass(TerminalSymbolNode, [{
            key: 'generatePart',
            value: function generatePart(noWhitespace) {
                  var content = this.getContent(),
                      terminalSymbolPart = new TerminalSymbolPart(content, noWhitespace);

                  return terminalSymbolPart;
            }
      }, {
            key: 'getContent',
            value: function getContent() {
                  var regExp = /^"([^"]*)"$/,
                      childNodes = this.getChildNodes(),
                      firstChildNode = arrayUtil.first(childNodes),
                      terminalNode = firstChildNode,
                      ///
                  terminalNodeContent = terminalNode.getContent(),
                      matches = terminalNodeContent.match(regExp),
                      secondMatch = arrayUtil.second(matches),
                      content = secondMatch; ///

                  return content;
            }
      }], [{
            key: 'fromNodesAndRuleName',
            value: function fromNodesAndRuleName(nodes, ruleName) {
                  return NonTerminalNode.fromNodesAndRuleName(nodes, ruleName, TerminalSymbolNode);
            }
      }]);

      return TerminalSymbolNode;
}(NonTerminalNode);

module.exports = TerminalSymbolNode;

},{"../../common/node/nonTerminal":59,"../../util/array":88,"../part/terminalSymbol":41}],29:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WildcardPart = require('../part/wildcard'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var WildcardNode = function (_NonTerminalNode) {
  _inherits(WildcardNode, _NonTerminalNode);

  function WildcardNode() {
    _classCallCheck(this, WildcardNode);

    return _possibleConstructorReturn(this, (WildcardNode.__proto__ || Object.getPrototypeOf(WildcardNode)).apply(this, arguments));
  }

  _createClass(WildcardNode, [{
    key: 'generatePart',
    value: function generatePart(noWhitespace) {
      var wildcardPart = new WildcardPart(noWhitespace);

      return wildcardPart;
    }
  }], [{
    key: 'fromNodesAndRuleName',
    value: function fromNodesAndRuleName(nodes, ruleName) {
      return NonTerminalNode.fromNodesAndRuleName(nodes, ruleName, WildcardNode);
    }
  }]);

  return WildcardNode;
}(NonTerminalNode);

module.exports = WildcardNode;

},{"../../common/node/nonTerminal":59,"../part/wildcard":42}],30:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var bnf = require('./bnf'),
    Rule = require('./rule'),
    Definition = require('./definition'),
    CommonParser = require('../common/parser'),
    PartRule = require('./rule/part'),
    RuleRule = require('./rule/rule'),
    RulesRule = require('./rule/rules'),
    EpsilonRule = require('./rule/epsilon'),
    WildcardRule = require('./rule/wildcard'),
    RuleNameRule = require('./rule/ruleName'),
    EndOfLineRule = require('./rule/endOfLine'),
    DefinitionRule = require('./rule/definition'),
    DefinitionsRule = require('./rule/definitions'),
    TerminalSymbolRule = require('./rule/terminalSymbol'),
    RegularExpressionRule = require('./rule/regularExpression'),
    RightRecursivePartRule = require('./rule/rightRecursivePart'),
    SignificantTokenTypeRule = require('./rule/significantTokenType');

var BNFParser = function (_CommonParser) {
  _inherits(BNFParser, _CommonParser);

  function BNFParser() {
    _classCallCheck(this, BNFParser);

    return _possibleConstructorReturn(this, (BNFParser.__proto__ || Object.getPrototypeOf(BNFParser)).apply(this, arguments));
  }

  _createClass(BNFParser, null, [{
    key: 'generateRules',
    value: function generateRules(node) {
      var mappings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var rules = node !== null ? node.generateRules(Rule, Definition, mappings) : [];

      return rules;
    }
  }, {
    key: 'fromNothing',
    value: function fromNothing() {
      var partRule = new PartRule(),
          ruleRule = new RuleRule(),
          rulesRule = new RulesRule(),
          epsilonRule = new EpsilonRule(),
          wildcardRule = new WildcardRule(),
          ruleNameRule = new RuleNameRule(),
          endOfLineRule = new EndOfLineRule(),
          definitionRule = new DefinitionRule(),
          definitionsRule = new DefinitionsRule(),
          terminalSymbolRule = new TerminalSymbolRule(),
          regularExpressionRule = new RegularExpressionRule(),
          rightRecursivePartRule = new RightRecursivePartRule(),
          significantTokenTypeRule = new SignificantTokenTypeRule();

      var rules = [rulesRule, ruleRule, definitionsRule, definitionRule, partRule, ruleNameRule, regularExpressionRule, significantTokenTypeRule, terminalSymbolRule, endOfLineRule, epsilonRule, wildcardRule, rightRecursivePartRule];

      var bnfParser = new BNFParser(rules);

      return bnfParser;
    }
  }]);

  return BNFParser;
}(CommonParser);

module.exports = BNFParser;

BNFParser.bnf = bnf;

},{"../common/parser":78,"./bnf":3,"./definition":4,"./rule":44,"./rule/definition":45,"./rule/definitions":46,"./rule/endOfLine":47,"./rule/epsilon":48,"./rule/part":49,"./rule/regularExpression":50,"./rule/rightRecursivePart":51,"./rule/rule":52,"./rule/ruleName":53,"./rule/rules":54,"./rule/significantTokenType":55,"./rule/terminalSymbol":56,"./rule/wildcard":57}],31:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var bnfUtil = require('../../util/bnf'),
    arrayUtil = require('../../util/array');

var ChoiceOfPartsPart = function () {
  function ChoiceOfPartsPart(parts) {
    _classCallCheck(this, ChoiceOfPartsPart);

    this.parts = parts;
  }

  _createClass(ChoiceOfPartsPart, [{
    key: 'parse',
    value: function parse(context, noWhitespace) {
      noWhitespace = false; ///

      var nodes = null;

      this.parts.some(function (part) {
        var partNodeOrNodes = part.parse(context, noWhitespace),
            partParsed = partNodeOrNodes !== null;

        if (partParsed) {
          nodes = partNodeOrNodes;
        }

        return partParsed;
      });

      return nodes;
    }
  }, {
    key: 'toString',
    value: function toString() {
      var partsString = this.parts.reduce(function (partsString, part) {
        var partString = part.toString();

        if (partsString === null) {
          partsString = partString;
        } else {
          partsString = partsString + ' | ' + partString;
        }

        return partsString;
      }, null),
          string = '( ' + partsString + ' )';

      return string;
    }
  }], [{
    key: 'fromNodes',
    value: function fromNodes(nodes) {
      var choiceOfPartsPart = null;

      nodes = arrayUtil.discardLastThenFirst(nodes);

      var secondNode = arrayUtil.second(nodes),
          secondNodeChoiceNode = bnfUtil.isNodeChoiceNode(secondNode);

      if (secondNodeChoiceNode) {
        nodes = arrayUtil.discardOdd(nodes);

        var noWhitespace = false,
            parts = nodes.map(function (node) {
          var part = node.generatePart(noWhitespace);

          return part;
        });

        choiceOfPartsPart = new ChoiceOfPartsPart(parts);
      }

      return choiceOfPartsPart;
    }
  }]);

  return ChoiceOfPartsPart;
}();

module.exports = ChoiceOfPartsPart;

},{"../../util/array":88,"../../util/bnf":89}],32:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers');

var TerminalNode = require('../../common/node/terminal');

var BNFLexer = lexers.BNFLexer,
    EndOfLineToken = lexers.EndOfLineToken,
    specialSymbols = BNFLexer.specialSymbols,
    END_OF_LINE = specialSymbols.END_OF_LINE;

var EndOfLinePart = function () {
  function EndOfLinePart(noWhitespace) {
    _classCallCheck(this, EndOfLinePart);

    this.noWhitespace = noWhitespace;
  }

  _createClass(EndOfLinePart, [{
    key: 'parse',
    value: function parse(context, noWhitespace) {
      noWhitespace = noWhitespace || this.noWhitespace; ///

      var terminalNode = null;

      var savedIndex = context.savedIndex(),
          nextNonWhitespaceSignificantToken = context.getNextNonWhitespaceSignificantToken(noWhitespace),
          significantToken = nextNonWhitespaceSignificantToken; ///

      if (significantToken !== null) {
        var type = significantToken.getType(),
            found = type === EndOfLineToken.type;

        if (found) {
          terminalNode = TerminalNode.fromSignificantToken(significantToken);
        }
      }

      if (terminalNode === null) {
        context.backtrack(savedIndex);
      }

      return terminalNode;
    }
  }, {
    key: 'toString',
    value: function toString() {
      var string = END_OF_LINE;

      return string;
    }
  }]);

  return EndOfLinePart;
}();

module.exports = EndOfLinePart;

},{"../../common/node/terminal":66,"occam-lexers":123}],33:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers');

var EpsilonTerminalNode = require('../../common/node/terminal/epsilon');

var BNFLexer = lexers.BNFLexer,
    specialSymbols = BNFLexer.specialSymbols,
    epsilon = specialSymbols.epsilon;

var EpsilonPart = function () {
  function EpsilonPart() {
    _classCallCheck(this, EpsilonPart);
  }

  _createClass(EpsilonPart, [{
    key: 'parse',
    value: function parse(context, noWhitespace) {
      var epsilonTerminalNode = new EpsilonTerminalNode();

      return epsilonTerminalNode;
    }
  }, {
    key: 'toString',
    value: function toString() {
      var string = epsilon;

      return string;
    }
  }]);

  return EpsilonPart;
}();

module.exports = EpsilonPart;

},{"../../common/node/terminal/epsilon":67,"occam-lexers":123}],34:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtil = require('../../util/array');

var GroupOfPartsPart = function () {
  function GroupOfPartsPart(parts) {
    _classCallCheck(this, GroupOfPartsPart);

    this.parts = parts;
  }

  _createClass(GroupOfPartsPart, [{
    key: 'parse',
    value: function parse(context, noWhitespace) {
      noWhitespace = false; ///

      var nodes = [];

      var savedIndex = context.savedIndex(),
          everyPartParsed = this.parts.every(function (part) {
        var partNodeOrNodes = part.parse(context, noWhitespace),
            partParsed = partNodeOrNodes !== null;

        if (partParsed) {
          nodes = nodes.concat(partNodeOrNodes);
        }

        return partParsed;
      });

      if (!everyPartParsed) {
        context.backtrack(savedIndex);

        nodes = null;
      }

      return nodes;
    }
  }, {
    key: 'toString',
    value: function toString() {
      var partsString = this.parts.reduce(function (partsString, part) {
        var partString = part.toString();

        if (partsString === null) {
          partsString = partString;
        } else {
          partsString = partsString + ' ' + partString;
        }

        return partsString;
      }, null),
          string = '( ' + partsString + ' )';

      return string;
    }
  }], [{
    key: 'fromNodes',
    value: function fromNodes(nodes) {
      nodes = arrayUtil.discardLastThenFirst(nodes);

      var noWhitespace = false,
          parts = nodes.map(function (node) {
        var part = node.generatePart(noWhitespace);

        return part;
      }),
          groupOfPartsPart = new GroupOfPartsPart(parts);

      return groupOfPartsPart;
    }
  }]);

  return GroupOfPartsPart;
}();

module.exports = GroupOfPartsPart;

},{"../../util/array":88}],35:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var SequenceOfPartsPart = require('./sequenceOfParts'),
    ZeroOrMorePartsPart = require('./zeroOrMoreParts');

var BNFLexer = lexers.BNFLexer,
    specialSymbols = BNFLexer.specialSymbols,
    plus = specialSymbols.plus;

var OneOrMorePartsPart = function (_SequenceOfPartsPart) {
      _inherits(OneOrMorePartsPart, _SequenceOfPartsPart);

      function OneOrMorePartsPart() {
            _classCallCheck(this, OneOrMorePartsPart);

            return _possibleConstructorReturn(this, (OneOrMorePartsPart.__proto__ || Object.getPrototypeOf(OneOrMorePartsPart)).apply(this, arguments));
      }

      _createClass(OneOrMorePartsPart, [{
            key: 'parse',
            value: function parse(context, noWhitespace) {
                  noWhitespace = false; ///

                  var nodes = null;

                  var part = this.getPart(),
                      partNodeOrNodes = part.parse(context, noWhitespace),
                      partParsed = partNodeOrNodes !== null;

                  if (partParsed) {
                        nodes = partNodeOrNodes instanceof Array ? partNodeOrNodes : [partNodeOrNodes];

                        var zeroOrMorePartsPart = ZeroOrMorePartsPart.fromOneOrMorePartsPart(this),
                            ///
                        zeroOrMorePartsPartNodeOrNodes = zeroOrMorePartsPart.parse(context, noWhitespace);

                        nodes = nodes.concat(zeroOrMorePartsPartNodeOrNodes);
                  }

                  return nodes;
            }
      }, {
            key: 'toString',
            value: function toString() {
                  var operatorString = plus,
                      ///
                  string = _get(OneOrMorePartsPart.prototype.__proto__ || Object.getPrototypeOf(OneOrMorePartsPart.prototype), 'toString', this).call(this, operatorString);

                  return string;
            }
      }]);

      return OneOrMorePartsPart;
}(SequenceOfPartsPart);

module.exports = OneOrMorePartsPart;

},{"./sequenceOfParts":39,"./zeroOrMoreParts":43,"occam-lexers":123}],36:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var SequenceOfPartsPart = require('./sequenceOfParts');

var BNFLexer = lexers.BNFLexer,
    specialSymbols = BNFLexer.specialSymbols,
    questionMark = specialSymbols.questionMark;

var OptionalPartPart = function (_SequenceOfPartsPart) {
  _inherits(OptionalPartPart, _SequenceOfPartsPart);

  function OptionalPartPart() {
    _classCallCheck(this, OptionalPartPart);

    return _possibleConstructorReturn(this, (OptionalPartPart.__proto__ || Object.getPrototypeOf(OptionalPartPart)).apply(this, arguments));
  }

  _createClass(OptionalPartPart, [{
    key: 'parse',
    value: function parse(context, noWhitespace) {
      noWhitespace = false; ///

      var nodes = [];

      var part = this.getPart(),
          partNodeOrNodes = part.parse(context, noWhitespace),
          partParsed = partNodeOrNodes !== null;

      if (partParsed) {
        nodes = partNodeOrNodes;
      }

      return nodes;
    }
  }, {
    key: 'toString',
    value: function toString() {
      var operatorString = questionMark,
          ///
      string = _get(OptionalPartPart.prototype.__proto__ || Object.getPrototypeOf(OptionalPartPart.prototype), 'toString', this).call(this, operatorString);

      return string;
    }
  }]);

  return OptionalPartPart;
}(SequenceOfPartsPart);

module.exports = OptionalPartPart;

},{"./sequenceOfParts":39,"occam-lexers":123}],37:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers');

var arrayUtil = require('../../util/array'),
    TerminalNode = require('../../common/node/terminal');

var BNFLexer = lexers.BNFLexer,
    specialSymbols = BNFLexer.specialSymbols,
    NO_WHITESPACE = specialSymbols.NO_WHITESPACE;

var RegularExpressionPart = function () {
  function RegularExpressionPart(regExp) {
    var noWhitespace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    _classCallCheck(this, RegularExpressionPart);

    this.regExp = regExp;
    this.noWhitespace = noWhitespace;
  }

  _createClass(RegularExpressionPart, [{
    key: 'parse',
    value: function parse(context, noWhitespace) {
      noWhitespace = noWhitespace || this.noWhitespace; ///

      var terminalNode = null;

      var savedIndex = context.savedIndex(),
          nextNonWhitespaceSignificantToken = context.getNextNonWhitespaceSignificantToken(noWhitespace),
          significantToken = nextNonWhitespaceSignificantToken; ///

      if (significantToken !== null) {
        var content = significantToken.getContent(),
            matches = content.match(this.regExp);

        if (matches !== null) {
          var firstMatch = arrayUtil.first(matches),
              parsed = firstMatch === content;

          if (parsed) {
            terminalNode = TerminalNode.fromSignificantToken(significantToken);
          }
        }
      }

      if (terminalNode === null) {
        context.backtrack(savedIndex);
      }

      return terminalNode;
    }
  }, {
    key: 'toString',
    value: function toString() {
      var regExpString = this.regExp.toString(),
          noWhitespaceString = this.noWhitespace ? NO_WHITESPACE : '',
          string = '' + noWhitespaceString + regExpString;

      return string;
    }
  }]);

  return RegularExpressionPart;
}();

module.exports = RegularExpressionPart;

},{"../../common/node/terminal":66,"../../util/array":88,"occam-lexers":123}],38:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers');

var parserUtil = require('../../util/parser');

var BNFLexer = lexers.BNFLexer,
    specialSymbols = BNFLexer.specialSymbols,
    NO_WHITESPACE = specialSymbols.NO_WHITESPACE;

var RuleNamePart = function () {
  function RuleNamePart(ruleName) {
    var noWhitespace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    _classCallCheck(this, RuleNamePart);

    this.ruleName = ruleName;
    this.noWhitespace = noWhitespace;
  }

  _createClass(RuleNamePart, [{
    key: 'getRuleName',
    value: function getRuleName() {
      return this.ruleName;
    }
  }, {
    key: 'isLeftRecursive',
    value: function isLeftRecursive(ruleName) {
      var leftRecursive = this.ruleName === ruleName;

      return leftRecursive;
    }
  }, {
    key: 'parse',
    value: function parse(context, noWhitespace) {
      noWhitespace = noWhitespace || this.noWhitespace; ///

      var nodeOrNodes = null;

      var rules = context.getRules(),
          rule = parserUtil.findRule(this.ruleName, rules);

      if (rule !== null) {
        nodeOrNodes = rule.parse(context, noWhitespace);
      }

      return nodeOrNodes;
    }
  }, {
    key: 'toString',
    value: function toString() {
      var noWhitespaceString = this.noWhitespace ? NO_WHITESPACE : '',
          string = '' + noWhitespaceString + this.ruleName;

      return string;
    }
  }]);

  return RuleNamePart;
}();

module.exports = RuleNamePart;

},{"../../util/parser":90,"occam-lexers":123}],39:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SequenceOfPartsPart = function () {
  function SequenceOfPartsPart(part) {
    _classCallCheck(this, SequenceOfPartsPart);

    this.part = part;
  }

  _createClass(SequenceOfPartsPart, [{
    key: 'getPart',
    value: function getPart() {
      return this.part;
    }
  }, {
    key: 'toString',
    value: function toString(operatorString) {
      var partString = this.part.toString(),
          string = '' + partString + operatorString;

      return string;
    }
  }]);

  return SequenceOfPartsPart;
}();

module.exports = SequenceOfPartsPart;

},{}],40:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers');

var TerminalNode = require('../../common/node/terminal');

var BNFLexer = lexers.BNFLexer,
    specialSymbols = BNFLexer.specialSymbols,
    NO_WHITESPACE = specialSymbols.NO_WHITESPACE;

var SignificantTokenTypePart = function () {
  function SignificantTokenTypePart(significantTokenType) {
    var noWhitespace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    _classCallCheck(this, SignificantTokenTypePart);

    this.significantTokenType = significantTokenType;
    this.noWhitespace = noWhitespace;
  }

  _createClass(SignificantTokenTypePart, [{
    key: 'parse',
    value: function parse(context, noWhitespace) {
      noWhitespace = noWhitespace || this.noWhitespace; ///

      var terminalNode = null;

      var savedIndex = context.savedIndex(),
          nextNonWhitespaceSignificantToken = context.getNextNonWhitespaceSignificantToken(noWhitespace),
          significantToken = nextNonWhitespaceSignificantToken; ///

      if (significantToken !== null) {
        var significantTokenType = significantToken.getType(),
            parsed = significantTokenType === this.significantTokenType; ///

        if (parsed) {
          terminalNode = TerminalNode.fromSignificantToken(significantToken);
        }
      }

      if (terminalNode === null) {
        context.backtrack(savedIndex);
      }

      return terminalNode;
    }
  }, {
    key: 'toString',
    value: function toString() {
      var noWhitespaceString = this.noWhitespace ? NO_WHITESPACE : '',
          string = noWhitespaceString + '[' + this.significantTokenType + ']';

      return string;
    }
  }]);

  return SignificantTokenTypePart;
}();

module.exports = SignificantTokenTypePart;

},{"../../common/node/terminal":66,"occam-lexers":123}],41:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers');

var TerminalNode = require('../../common/node/terminal');

var BNFLexer = lexers.BNFLexer,
    specialSymbols = BNFLexer.specialSymbols,
    NO_WHITESPACE = specialSymbols.NO_WHITESPACE;

var TerminalSymbolPart = function () {
  function TerminalSymbolPart(content) {
    var noWhitespace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    _classCallCheck(this, TerminalSymbolPart);

    this.content = content;
    this.noWhitespace = noWhitespace;
  }

  _createClass(TerminalSymbolPart, [{
    key: 'parse',
    value: function parse(context, noWhitespace) {
      noWhitespace = noWhitespace || this.noWhitespace; ///

      var terminalNode = null;

      var savedIndex = context.savedIndex(),
          nextNonWhitespaceSignificantToken = context.getNextNonWhitespaceSignificantToken(noWhitespace),
          significantToken = nextNonWhitespaceSignificantToken; ///

      if (significantToken !== null) {
        var content = significantToken.getContent(),
            parsed = content === this.content;

        if (parsed) {
          terminalNode = TerminalNode.fromSignificantToken(significantToken);
        }
      }

      if (terminalNode === null) {
        context.backtrack(savedIndex);
      }

      return terminalNode;
    }
  }, {
    key: 'toString',
    value: function toString() {
      var noWhitespaceString = this.noWhitespace ? NO_WHITESPACE : '',
          string = noWhitespaceString + '"' + this.content + '"';

      return string;
    }
  }]);

  return TerminalSymbolPart;
}();

module.exports = TerminalSymbolPart;

},{"../../common/node/terminal":66,"occam-lexers":123}],42:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers');

var TerminalNode = require('../../common/node/terminal');

var BNFLexer = lexers.BNFLexer,
    specialSymbols = BNFLexer.specialSymbols,
    wildcard = specialSymbols.wildcard;

var WildcardPart = function () {
  function WildcardPart(noWhitespace) {
    _classCallCheck(this, WildcardPart);

    this.noWhitespace = noWhitespace;
  }

  _createClass(WildcardPart, [{
    key: 'parse',
    value: function parse(context, noWhitespace) {
      noWhitespace = noWhitespace || this.noWhitespace; ///

      var terminalNode = null;

      var savedIndex = context.savedIndex(),
          nextNonWhitespaceSignificantToken = context.getNextNonWhitespaceSignificantToken(noWhitespace),
          significantToken = nextNonWhitespaceSignificantToken; ///

      if (significantToken !== null) {
        terminalNode = TerminalNode.fromSignificantToken(significantToken);
      }

      if (terminalNode === null) {
        context.backtrack(savedIndex);
      }

      return terminalNode;
    }
  }, {
    key: 'toString',
    value: function toString() {
      var string = wildcard;

      return string;
    }
  }]);

  return WildcardPart;
}();

module.exports = WildcardPart;

},{"../../common/node/terminal":66,"occam-lexers":123}],43:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var SequenceOfPartsPart = require('./sequenceOfParts');

var BNFLexer = lexers.BNFLexer,
    specialSymbols = BNFLexer.specialSymbols,
    asterisk = specialSymbols.asterisk;

var ZeroOrMorePartsPart = function (_SequenceOfPartsPart) {
  _inherits(ZeroOrMorePartsPart, _SequenceOfPartsPart);

  function ZeroOrMorePartsPart() {
    _classCallCheck(this, ZeroOrMorePartsPart);

    return _possibleConstructorReturn(this, (ZeroOrMorePartsPart.__proto__ || Object.getPrototypeOf(ZeroOrMorePartsPart)).apply(this, arguments));
  }

  _createClass(ZeroOrMorePartsPart, [{
    key: 'parse',
    value: function parse(context, noWhitespace) {
      noWhitespace = false; ///

      var nodes = [];

      var part = this.getPart();

      for (;;) {
        var partNodeOrNodes = part.parse(context, noWhitespace),
            partParsed = partNodeOrNodes !== null;

        if (partParsed) {
          nodes = nodes.concat(partNodeOrNodes);
        } else {
          break;
        }
      }

      return nodes;
    }
  }, {
    key: 'toString',
    value: function toString() {
      var operatorString = asterisk,
          ///
      string = _get(ZeroOrMorePartsPart.prototype.__proto__ || Object.getPrototypeOf(ZeroOrMorePartsPart.prototype), 'toString', this).call(this, operatorString);

      return string;
    }
  }], [{
    key: 'fromOneOrMorePartsPart',
    value: function fromOneOrMorePartsPart(oneOrMorePartsPart) {
      var part = oneOrMorePartsPart.getPart(),
          zeroOrMorePartsPart = new ZeroOrMorePartsPart(part);

      return zeroOrMorePartsPart;
    }
  }]);

  return ZeroOrMorePartsPart;
}(SequenceOfPartsPart);

module.exports = ZeroOrMorePartsPart;

},{"./sequenceOfParts":39,"occam-lexers":123}],44:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtil = require('../util/array'),
    NonTerminalNode = require('../common/node/nonTerminal'),
    EpsilonTerminalNode = require('../common/node/terminal/epsilon');

var Rule = function () {
  function Rule(name, definitions, Node) {
    _classCallCheck(this, Rule);

    this.name = name;
    this.definitions = definitions;
    this.Node = Node;
  }

  _createClass(Rule, [{
    key: 'getName',
    value: function getName() {
      return this.name;
    }
  }, {
    key: 'getDefinitions',
    value: function getDefinitions() {
      return this.definitions;
    }
  }, {
    key: 'getNode',
    value: function getNode() {
      return this.Node;
    }
  }, {
    key: 'doDefinitionsExist',
    value: function doDefinitionsExist() {
      var definitionsLength = this.definitions.length,
          definitionsExist = definitionsLength > 0;

      return definitionsExist;
    }
  }, {
    key: 'isFoundByRuleName',
    value: function isFoundByRuleName(ruleName) {
      var found = this.name === ruleName;

      return found;
    }
  }, {
    key: 'setName',
    value: function setName(name) {
      this.name = name;
    }
  }, {
    key: 'setDefinitions',
    value: function setDefinitions(definitions) {
      this.definitions = definitions;
    }
  }, {
    key: 'setNode',
    value: function setNode(node) {
      this.node = node;
    }
  }, {
    key: 'addDefinitions',
    value: function addDefinitions(definitions) {
      this.definitions = this.definitions.concat(definitions);
    }
  }, {
    key: 'parse',
    value: function parse(context, noWhitespace) {
      var nodeOrNodes = null;

      context.increaseDepth();

      var tooDeep = context.isTooDeep();

      if (tooDeep) {
        throw new Error('The parse tree is too deep at rule \'' + this.name + '\'');
      }

      var definitionNodes = null;

      var someDefinitionParsed = this.definitions.some(function (definition) {
        definitionNodes = definition.parse(context, noWhitespace);

        var definitionParsed = definitionNodes !== null;

        return definitionParsed;
      });

      if (someDefinitionParsed) {
        var definitionNodesLength = definitionNodes.length;

        if (definitionNodesLength > 0) {
          var ruleName = this.name,
              nodes = definitionNodes,
              ///
          lastNode = arrayUtil.last(nodes),
              lastNodeNullified = isNodeNullified(lastNode);

          if (lastNodeNullified) {
            var start = -1,
                deleteCount = 1;

            nodes.splice(start, deleteCount);
          }

          nodeOrNodes = this.Node.fromNodesAndRuleName(nodes, ruleName);
        }
      }

      context.decreaseDepth();

      return nodeOrNodes;
    }
  }, {
    key: 'toString',
    value: function toString(maximumRuleNameLength) {
      var maximumPadding = paddingFromPaddingLength(maximumRuleNameLength),
          definitionsString = this.definitions.reduce(function (definitionsString, definition) {
        var definitionString = definition.toString();

        if (definitionsString === null) {
          definitionsString = definitionString;
        } else {
          definitionsString = definitionsString + '\n\n' + maximumPadding + '     | ' + definitionString;
        }

        return definitionsString;
      }, null),
          ruleName = this.name,
          ///
      ruleNameLength = ruleName.length,
          paddingLength = maximumRuleNameLength - ruleNameLength,
          padding = paddingFromPaddingLength(paddingLength),
          string = '\n\n  ' + this.name + padding + ' ::= ' + definitionsString + ' ;';

      return string;
    }
  }], [{
    key: 'fromRule',
    value: function fromRule(rule) {
      var Class = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Rule;

      var name = rule.getName(),
          definitions = rule.getDefinitions(),
          Node = rule.getNode();

      rule = new Class(name, definitions, Node);

      return rule;
    }
  }]);

  return Rule;
}();

module.exports = Rule;

function paddingFromPaddingLength(paddingLength) {
  var padding = '';

  for (var position = 0; position < paddingLength; position++) {
    padding += ' ';
  }

  return padding;
}

function isNodeNullified(node) {
  var nullified = false;

  if (node instanceof NonTerminalNode) {
    var nonTerminalNode = node,
        ///
    childNodes = nonTerminalNode.getChildNodes(),
        childNodesLength = childNodes.length;

    if (childNodesLength === 1) {
      var childNode = arrayUtil.first(childNodes);

      nullified = childNode instanceof EpsilonTerminalNode; ///
    }
  }

  return nullified;
}

},{"../common/node/nonTerminal":59,"../common/node/terminal/epsilon":67,"../util/array":88}],45:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    DefinitionNode = require('../node/definition'),
    DefinitionDefinition = require('../definition/definition');

var DefinitionRule = function (_Rule) {
  _inherits(DefinitionRule, _Rule);

  function DefinitionRule() {
    _classCallCheck(this, DefinitionRule);

    var name = 'definition',
        definitionDefinition = new DefinitionDefinition(),
        definitions = [definitionDefinition],
        Node = DefinitionNode;

    return _possibleConstructorReturn(this, (DefinitionRule.__proto__ || Object.getPrototypeOf(DefinitionRule)).call(this, name, definitions, Node));
  }

  return DefinitionRule;
}(Rule);

module.exports = DefinitionRule;

},{"../definition/definition":6,"../node/definition":17,"../rule":44}],46:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    DefinitionsNode = require('../node/definitions'),
    DefinitionsDefinition = require('../definition/definitions');

var DefinitionsRule = function (_Rule) {
  _inherits(DefinitionsRule, _Rule);

  function DefinitionsRule() {
    _classCallCheck(this, DefinitionsRule);

    var definitionsDefinition = new DefinitionsDefinition(),
        name = 'definitions',
        definitions = [definitionsDefinition],
        Node = DefinitionsNode;

    return _possibleConstructorReturn(this, (DefinitionsRule.__proto__ || Object.getPrototypeOf(DefinitionsRule)).call(this, name, definitions, Node));
  }

  return DefinitionsRule;
}(Rule);

module.exports = DefinitionsRule;

},{"../definition/definitions":7,"../node/definitions":18,"../rule":44}],47:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var Rule = require('../rule'),
    EndOfLineNode = require('../node/endOfLine'),
    TerminalSymbolDefinition = require('../definition/terminalSymbol');

var BNFLexer = lexers.BNFLexer,
    specialSymbols = BNFLexer.specialSymbols,
    END_OF_LINE = specialSymbols.END_OF_LINE;

var EndOfLineRule = function (_Rule) {
      _inherits(EndOfLineRule, _Rule);

      function EndOfLineRule() {
            _classCallCheck(this, EndOfLineRule);

            var endOfLineTerminalSymbolContent = END_OF_LINE,
                endOfLineTerminalSymbolDefinition = new TerminalSymbolDefinition(endOfLineTerminalSymbolContent),
                name = 'endOfLine',
                definitions = [endOfLineTerminalSymbolDefinition],
                Node = EndOfLineNode;

            return _possibleConstructorReturn(this, (EndOfLineRule.__proto__ || Object.getPrototypeOf(EndOfLineRule)).call(this, name, definitions, Node));
      }

      return EndOfLineRule;
}(Rule);

module.exports = EndOfLineRule;

},{"../definition/terminalSymbol":16,"../node/endOfLine":19,"../rule":44,"occam-lexers":123}],48:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var Rule = require('../rule'),
    EndOfLineNode = require('../node/epsilon'),
    TerminalSymbolDefinition = require('../definition/terminalSymbol');

var BNFLexer = lexers.BNFLexer,
    specialSymbols = BNFLexer.specialSymbols,
    epsilon = specialSymbols.epsilon;

var EpsilonRule = function (_Rule) {
      _inherits(EpsilonRule, _Rule);

      function EpsilonRule() {
            _classCallCheck(this, EpsilonRule);

            var epsilonTerminalSymbolContent = epsilon,
                epsilonTerminalSymbolDefinition = new TerminalSymbolDefinition(epsilonTerminalSymbolContent),
                name = 'epsilon',
                definitions = [epsilonTerminalSymbolDefinition],
                Node = EndOfLineNode;

            return _possibleConstructorReturn(this, (EpsilonRule.__proto__ || Object.getPrototypeOf(EpsilonRule)).call(this, name, definitions, Node));
      }

      return EpsilonRule;
}(Rule);

module.exports = EpsilonRule;

},{"../definition/terminalSymbol":16,"../node/epsilon":20,"../rule":44,"occam-lexers":123}],49:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    PartNode = require('../node/part'),
    PartRuleDefinition = require('../definition/partRule'),
    NoWhitespaceDefinition = require('../definition/noWhitespace'),
    GroupOfPartsDefinition = require('../definition/groupOfParts'),
    ChoiceOfPartsDefinition = require('../definition/choiceOfParts');

var PartRule = function (_Rule) {
  _inherits(PartRule, _Rule);

  function PartRule() {
    _classCallCheck(this, PartRule);

    var ruleNameRuleName = 'ruleName',
        regularExpressionRuleName = 'regularExpression',
        significantTokenTypeRuleName = 'significantTokenType',
        terminalSymbolRuleName = 'terminalSymbol',
        endOfLineRuleName = 'endOfLine',
        epsilonRuleName = 'epsilon',
        wildcardRuleName = 'wildcard',
        noWhitespaceDefinition = new NoWhitespaceDefinition(),
        groupOfPartsDefinition = new GroupOfPartsDefinition(),
        choiceOfPartsDefinition = new ChoiceOfPartsDefinition(),
        ruleNameRuleNamePartRuleDefinition = new PartRuleDefinition(ruleNameRuleName),
        regularExpressionRuleNamePartRuleDefinition = new PartRuleDefinition(regularExpressionRuleName),
        significantTokenTypeRuleNamePartRuleDefinition = new PartRuleDefinition(significantTokenTypeRuleName),
        terminalSymbolRuleNamePartRuleDefinition = new PartRuleDefinition(terminalSymbolRuleName),
        endOfLineRuleNamePartRuleDefinition = new PartRuleDefinition(endOfLineRuleName),
        epsilonRuleNamePartRuleDefinition = new PartRuleDefinition(epsilonRuleName),
        wildcardRuleNamePartRuleDefinition = new PartRuleDefinition(wildcardRuleName),
        name = 'part',
        definitions = [noWhitespaceDefinition, groupOfPartsDefinition, choiceOfPartsDefinition, ruleNameRuleNamePartRuleDefinition, regularExpressionRuleNamePartRuleDefinition, significantTokenTypeRuleNamePartRuleDefinition, terminalSymbolRuleNamePartRuleDefinition, endOfLineRuleNamePartRuleDefinition, epsilonRuleNamePartRuleDefinition, wildcardRuleNamePartRuleDefinition],
        Node = PartNode;

    return _possibleConstructorReturn(this, (PartRule.__proto__ || Object.getPrototypeOf(PartRule)).call(this, name, definitions, Node));
  }

  return PartRule;
}(Rule);

module.exports = PartRule;

},{"../definition/choiceOfParts":5,"../definition/groupOfParts":9,"../definition/noWhitespace":10,"../definition/partRule":11,"../node/part":21,"../rule":44}],50:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    RegularExpressionNode = require('../node/regularExpression'),
    SignificantTokenTypeDefinition = require('../definition/significantTokenType');

var RegularExpressionRule = function (_Rule) {
  _inherits(RegularExpressionRule, _Rule);

  function RegularExpressionRule() {
    _classCallCheck(this, RegularExpressionRule);

    var regularExpressionSignificantTokenType = 'regularExpression',
        regularExpressionSignificantTokenTypeDefinition = new SignificantTokenTypeDefinition(regularExpressionSignificantTokenType),
        name = 'regularExpression',
        definitions = [regularExpressionSignificantTokenTypeDefinition],
        Node = RegularExpressionNode;

    return _possibleConstructorReturn(this, (RegularExpressionRule.__proto__ || Object.getPrototypeOf(RegularExpressionRule)).call(this, name, definitions, Node));
  }

  return RegularExpressionRule;
}(Rule);

module.exports = RegularExpressionRule;

},{"../definition/significantTokenType":15,"../node/regularExpression":22,"../rule":44}],51:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var Rule = require('../rule'),
    EpsilonDefinition = require('../definition/epsilon'),
    RightRecursivePartNode = require('../node/rightRecursivePart'),
    RightRecursivePartRuleDefinition = require('../definition/rightRecursivePartRule');

var BNFLexer = lexers.BNFLexer,
    specialSymbols = BNFLexer.specialSymbols,
    plus = specialSymbols.plus,
    asterisk = specialSymbols.asterisk,
    questionMark = specialSymbols.questionMark;

var RightRecursivePartRule = function (_Rule) {
      _inherits(RightRecursivePartRule, _Rule);

      function RightRecursivePartRule() {
            _classCallCheck(this, RightRecursivePartRule);

            var plusTerminalSymbolContent = plus,
                asteriskTerminalSymbolContent = asterisk,
                questionMarkTerminalSymbolContent = questionMark,
                optionalRightRecursivePartRuleDefinition = new RightRecursivePartRuleDefinition(questionMarkTerminalSymbolContent),
                ///
            zeroOrMoreRightRecursivePartRuleDefinition = new RightRecursivePartRuleDefinition(asteriskTerminalSymbolContent),
                ///
            oneOrMoreRightRecursivePartRuleDefinition = new RightRecursivePartRuleDefinition(plusTerminalSymbolContent),
                ///
            epsilonDefinition = new EpsilonDefinition(),
                name = 'rightRecursivePart',
                definitions = [optionalRightRecursivePartRuleDefinition, zeroOrMoreRightRecursivePartRuleDefinition, oneOrMoreRightRecursivePartRuleDefinition, epsilonDefinition],
                Node = RightRecursivePartNode;

            return _possibleConstructorReturn(this, (RightRecursivePartRule.__proto__ || Object.getPrototypeOf(RightRecursivePartRule)).call(this, name, definitions, Node));
      }

      return RightRecursivePartRule;
}(Rule);

module.exports = RightRecursivePartRule;

},{"../definition/epsilon":8,"../definition/rightRecursivePartRule":12,"../node/rightRecursivePart":23,"../rule":44,"occam-lexers":123}],52:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    RuleNode = require('../node/rule'),
    RuleDefinition = require('../definition/rule');

var RuleRule = function (_Rule) {
  _inherits(RuleRule, _Rule);

  function RuleRule() {
    _classCallCheck(this, RuleRule);

    var ruleDefinition = new RuleDefinition(),
        name = 'rule',
        definitions = [ruleDefinition],
        Node = RuleNode;

    return _possibleConstructorReturn(this, (RuleRule.__proto__ || Object.getPrototypeOf(RuleRule)).call(this, name, definitions, Node));
  }

  return RuleRule;
}(Rule);

module.exports = RuleRule;

},{"../definition/rule":13,"../node/rule":24,"../rule":44}],53:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    RuleNameNode = require('../node/ruleName'),
    SignificantTokenTypeDefinition = require('../definition/significantTokenType');

var RuleNameRule = function (_Rule) {
  _inherits(RuleNameRule, _Rule);

  function RuleNameRule() {
    _classCallCheck(this, RuleNameRule);

    var nameSignificantTokenType = 'name',
        nameSignificantTokenTypeDefinition = new SignificantTokenTypeDefinition(nameSignificantTokenType),
        name = 'ruleName',
        definitions = [nameSignificantTokenTypeDefinition],
        Node = RuleNameNode;

    return _possibleConstructorReturn(this, (RuleNameRule.__proto__ || Object.getPrototypeOf(RuleNameRule)).call(this, name, definitions, Node));
  }

  return RuleNameRule;
}(Rule);

module.exports = RuleNameRule;

},{"../definition/significantTokenType":15,"../node/ruleName":25,"../rule":44}],54:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    RulesNode = require('../node/rules'),
    RulesDefinition = require('../definition/rules');

var RulesRule = function (_Rule) {
  _inherits(RulesRule, _Rule);

  function RulesRule() {
    _classCallCheck(this, RulesRule);

    var rulesDefinition = new RulesDefinition(),
        name = 'rules',
        definitions = [rulesDefinition],
        Node = RulesNode;

    return _possibleConstructorReturn(this, (RulesRule.__proto__ || Object.getPrototypeOf(RulesRule)).call(this, name, definitions, Node));
  }

  return RulesRule;
}(Rule);

module.exports = RulesRule;

},{"../definition/rules":14,"../node/rules":26,"../rule":44}],55:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    SignificantTokenTypeNode = require('../node/significantTokenType'),
    SignificantTokenTypeDefinition = require('../definition/significantTokenType');

var SignificantTokenTypeRule = function (_Rule) {
  _inherits(SignificantTokenTypeRule, _Rule);

  function SignificantTokenTypeRule() {
    _classCallCheck(this, SignificantTokenTypeRule);

    var typeSignificantTokenType = 'type',
        typeSignificantTokenTypeDefinition = new SignificantTokenTypeDefinition(typeSignificantTokenType),
        name = 'significantTokenType',
        definitions = [typeSignificantTokenTypeDefinition],
        Node = SignificantTokenTypeNode;

    return _possibleConstructorReturn(this, (SignificantTokenTypeRule.__proto__ || Object.getPrototypeOf(SignificantTokenTypeRule)).call(this, name, definitions, Node));
  }

  return SignificantTokenTypeRule;
}(Rule);

module.exports = SignificantTokenTypeRule;

},{"../definition/significantTokenType":15,"../node/significantTokenType":27,"../rule":44}],56:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    TerminalSymbolNode = require('../node/terminalSymbol'),
    SignificantTokenTypeDefinition = require('../definition/significantTokenType');

var TerminalSymbolRule = function (_Rule) {
  _inherits(TerminalSymbolRule, _Rule);

  function TerminalSymbolRule() {
    _classCallCheck(this, TerminalSymbolRule);

    var stringSignificantTokenType = 'string',
        stringSignificantTokenTypeDefinition = new SignificantTokenTypeDefinition(stringSignificantTokenType),
        name = 'terminalSymbol',
        definitions = [stringSignificantTokenTypeDefinition],
        Node = TerminalSymbolNode;

    return _possibleConstructorReturn(this, (TerminalSymbolRule.__proto__ || Object.getPrototypeOf(TerminalSymbolRule)).call(this, name, definitions, Node));
  }

  return TerminalSymbolRule;
}(Rule);

module.exports = TerminalSymbolRule;

},{"../definition/significantTokenType":15,"../node/terminalSymbol":28,"../rule":44}],57:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var Rule = require('../rule'),
    WildcardNode = require('../node/wildcard'),
    TerminalSymbolDefinition = require('../definition/terminalSymbol');

var BNFLexer = lexers.BNFLexer,
    specialSymbols = BNFLexer.specialSymbols,
    wildcard = specialSymbols.wildcard;

var WildcardRule = function (_Rule) {
      _inherits(WildcardRule, _Rule);

      function WildcardRule() {
            _classCallCheck(this, WildcardRule);

            var wildcardTerminalSymbolContent = wildcard,
                wildcardTerminalSymbolDefinition = new TerminalSymbolDefinition(wildcardTerminalSymbolContent),
                name = 'wildcard',
                definitions = [wildcardTerminalSymbolDefinition],
                Node = WildcardNode;

            return _possibleConstructorReturn(this, (WildcardRule.__proto__ || Object.getPrototypeOf(WildcardRule)).call(this, name, definitions, Node));
      }

      return WildcardRule;
}(Rule);

module.exports = WildcardRule;

},{"../definition/terminalSymbol":16,"../node/wildcard":29,"../rule":44,"occam-lexers":123}],58:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers');

var WhitespaceToken = lexers.WhitespaceToken;


var DEFAULT_MAXIMUM_DEPTH = 99;

var Context = function () {
  function Context(tokens, rules) {
    var maximumDepth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_MAXIMUM_DEPTH;

    _classCallCheck(this, Context);

    this.tokens = tokens;

    this.rules = rules;

    this.maximumDepth = maximumDepth;

    this.depth = 0;

    this.index = 0;
  }

  _createClass(Context, [{
    key: 'getRules',
    value: function getRules() {
      return this.rules;
    }
  }, {
    key: 'getMaximumDepth',
    value: function getMaximumDepth() {
      return this.maximumDepth;
    }
  }, {
    key: 'getDepth',
    value: function getDepth() {
      return this.depth;
    }
  }, {
    key: 'getIndex',
    value: function getIndex() {
      return this.index;
    }
  }, {
    key: 'isTooDeep',
    value: function isTooDeep() {
      var tooDeep = this.depth > this.maximumDepth;

      return tooDeep;
    }
  }, {
    key: 'increaseDepth',
    value: function increaseDepth() {
      this.depth++;
    }
  }, {
    key: 'decreaseDepth',
    value: function decreaseDepth() {
      this.depth--;
    }
  }, {
    key: 'setIndex',
    value: function setIndex(index) {
      this.index = index;
    }
  }, {
    key: 'getNextSignificantToken',
    value: function getNextSignificantToken() {
      var nextSignificantToken = null;

      for (;;) {
        var nextToken = this.tokens[this.index++];

        if (nextToken === undefined) {
          break;
        }

        var nextTokenSignificant = nextToken.isSignificant();

        if (nextTokenSignificant) {
          nextSignificantToken = nextToken;

          break;
        }
      }

      return nextSignificantToken;
    }
  }, {
    key: 'getNextNonWhitespaceSignificantToken',
    value: function getNextNonWhitespaceSignificantToken(noWhitespace) {
      var nextNonWhitespaceSignificantToken = null,
          nextSignificantToken = this.getNextSignificantToken();

      if (nextSignificantToken !== null) {
        var nextSignificantTokenIsWhitespaceToken = void 0;

        if (noWhitespace) {
          nextSignificantTokenIsWhitespaceToken = significantTokenIsWhitespaceToken(nextSignificantToken);

          if (nextSignificantTokenIsWhitespaceToken) {
            nextNonWhitespaceSignificantToken = null;
          } else {
            nextNonWhitespaceSignificantToken = nextSignificantToken;
          }
        } else {
          for (;;) {
            nextSignificantTokenIsWhitespaceToken = significantTokenIsWhitespaceToken(nextSignificantToken);

            if (nextSignificantTokenIsWhitespaceToken) {
              nextSignificantToken = this.getNextSignificantToken();
            } else {
              nextNonWhitespaceSignificantToken = nextSignificantToken;

              break;
            }

            if (nextSignificantToken === null) {
              nextNonWhitespaceSignificantToken = null;

              break;
            }
          }
        }
      }

      return nextNonWhitespaceSignificantToken;
    }
  }, {
    key: 'savedIndex',
    value: function savedIndex() {
      var index = this.getIndex(),
          savedIndex = index; ///

      return savedIndex;
    }
  }, {
    key: 'backtrack',
    value: function backtrack(savedIndex) {
      this.index = savedIndex; ///
    }
  }]);

  return Context;
}();

module.exports = Context;

function significantTokenIsWhitespaceToken(significantToken) {
  var type = significantToken.getType(),
      whitespaceToken = type === WhitespaceToken.type;

  return whitespaceToken;
}

},{"occam-lexers":123}],59:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtil = require('../../util/array'),
    NonTerminalNodeParseTree = require('../parseTree/nonTerminalNode');

var NonTerminalNode = function () {
  function NonTerminalNode(ruleName, childNodes, firstLine, lastLine, firstSignificantToken, lastSignificantToken) {
    _classCallCheck(this, NonTerminalNode);

    this.ruleName = ruleName;
    this.childNodes = childNodes;
    this.firstLine = firstLine;
    this.lastLine = lastLine;
    this.firstSignificantToken = firstSignificantToken;
    this.lastSignificantToken = lastSignificantToken;
  }

  _createClass(NonTerminalNode, [{
    key: 'isTerminal',
    value: function isTerminal() {
      var terminal = false;

      return terminal;
    }
  }, {
    key: 'getRuleName',
    value: function getRuleName() {
      return this.ruleName;
    }
  }, {
    key: 'getChildNodes',
    value: function getChildNodes() {
      return this.childNodes;
    }
  }, {
    key: 'getFirstLine',
    value: function getFirstLine() {
      return this.firstLine;
    }
  }, {
    key: 'getLastLine',
    value: function getLastLine() {
      return this.lastLine;
    }
  }, {
    key: 'getFirstSignificantToken',
    value: function getFirstSignificantToken() {
      return this.firstSignificantToken;
    }
  }, {
    key: 'getLastSignificantToken',
    value: function getLastSignificantToken() {
      return this.lastSignificantToken;
    }
  }, {
    key: 'generateParseTree',
    value: function generateParseTree(lines) {
      var nonTerminalNode = this,
          ///
      nonTerminalNodeParseTree = NonTerminalNodeParseTree.fromNonTerminalNode(nonTerminalNode, lines),
          parseTree = nonTerminalNodeParseTree; ///

      return parseTree;
    }
  }, {
    key: 'setChildNodes',
    value: function setChildNodes(childNodes) {
      this.childNodes = childNodes;
    }
  }], [{
    key: 'fromNodesAndRuleName',
    value: function fromNodesAndRuleName(nodes, ruleName) {
      var Class = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : NonTerminalNode;

      var childNodes = nodes,
          ///
      nonTerminalNode = Class.fromRuleNameAndChildNodes(ruleName, childNodes, Class);

      return nonTerminalNode;
    }
  }, {
    key: 'fromRuleNameAndChildNodes',
    value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
      var Class = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : NonTerminalNode;

      var firstChildNode = arrayUtil.first(childNodes),
          lastChildNode = arrayUtil.last(childNodes),
          firstChildNodeFirstLine = firstChildNode.getFirstLine(),
          lastChildNodeFirstLine = lastChildNode.getLastLine(),
          firstChildNodeFirstSignificantToken = firstChildNode.getFirstSignificantToken(),
          lastChildNodeLastSignificantToken = lastChildNode.getLastSignificantToken(),
          firstLine = firstChildNodeFirstLine,
          ///
      lastLine = lastChildNodeFirstLine,
          ///
      firstSignificantToken = firstChildNodeFirstSignificantToken,
          ///
      lastSignificantToken = lastChildNodeLastSignificantToken,
          ///
      nonTerminalNode = new Class(ruleName, childNodes, firstLine, lastLine, firstSignificantToken, lastSignificantToken);

      return nonTerminalNode;
    }
  }]);

  return NonTerminalNode;
}();

module.exports = NonTerminalNode;

},{"../../util/array":88,"../parseTree/nonTerminalNode":73}],60:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../../util/array'),
    NonTerminalNode = require('../nonTerminal');

var DiscardFifthThenSecondChildNode = function (_NonTerminalNode) {
  _inherits(DiscardFifthThenSecondChildNode, _NonTerminalNode);

  function DiscardFifthThenSecondChildNode() {
    _classCallCheck(this, DiscardFifthThenSecondChildNode);

    return _possibleConstructorReturn(this, (DiscardFifthThenSecondChildNode.__proto__ || Object.getPrototypeOf(DiscardFifthThenSecondChildNode)).apply(this, arguments));
  }

  _createClass(DiscardFifthThenSecondChildNode, null, [{
    key: 'fromNodesAndRuleName',
    value: function fromNodesAndRuleName(nodes, ruleName) {
      var childNodes = arrayUtil.discardFifthThenSecond(nodes),
          discardFifthThenSecondChildNode = NonTerminalNode.fromRuleNameAndChildNodes(ruleName, childNodes, DiscardFifthThenSecondChildNode);

      return discardFifthThenSecondChildNode;
    }
  }]);

  return DiscardFifthThenSecondChildNode;
}(NonTerminalNode);

module.exports = DiscardFifthThenSecondChildNode;

},{"../../../util/array":88,"../nonTerminal":59}],61:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../../util/array'),
    NonTerminalNode = require('../nonTerminal');

var DiscardFourthThenSecondChildNode = function (_NonTerminalNode) {
  _inherits(DiscardFourthThenSecondChildNode, _NonTerminalNode);

  function DiscardFourthThenSecondChildNode() {
    _classCallCheck(this, DiscardFourthThenSecondChildNode);

    return _possibleConstructorReturn(this, (DiscardFourthThenSecondChildNode.__proto__ || Object.getPrototypeOf(DiscardFourthThenSecondChildNode)).apply(this, arguments));
  }

  _createClass(DiscardFourthThenSecondChildNode, null, [{
    key: 'fromNodesAndRuleName',
    value: function fromNodesAndRuleName(nodes, ruleName) {
      var childNodes = arrayUtil.discardFourthThenSecond(nodes),
          discardFourthThenSecondChildNode = NonTerminalNode.fromRuleNameAndChildNodes(ruleName, childNodes, DiscardFourthThenSecondChildNode);

      return discardFourthThenSecondChildNode;
    }
  }]);

  return DiscardFourthThenSecondChildNode;
}(NonTerminalNode);

module.exports = DiscardFourthThenSecondChildNode;

},{"../../../util/array":88,"../nonTerminal":59}],62:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../../util/array'),
    NonTerminalNode = require('../nonTerminal');

var DiscardOddChildNodes = function (_NonTerminalNode) {
  _inherits(DiscardOddChildNodes, _NonTerminalNode);

  function DiscardOddChildNodes() {
    _classCallCheck(this, DiscardOddChildNodes);

    return _possibleConstructorReturn(this, (DiscardOddChildNodes.__proto__ || Object.getPrototypeOf(DiscardOddChildNodes)).apply(this, arguments));
  }

  _createClass(DiscardOddChildNodes, null, [{
    key: 'fromNodesAndRuleName',
    value: function fromNodesAndRuleName(nodes, ruleName) {
      var childNodes = arrayUtil.discardOdd(nodes),
          ///
      discardOddChildNodes = NonTerminalNode.fromRuleNameAndChildNodes(ruleName, childNodes, DiscardOddChildNodes);

      return discardOddChildNodes;
    }
  }]);

  return DiscardOddChildNodes;
}(NonTerminalNode);

module.exports = DiscardOddChildNodes;

},{"../../../util/array":88,"../nonTerminal":59}],63:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../../util/array'),
    NonTerminalNode = require('../nonTerminal');

var DiscardSecondChildNode = function (_NonTerminalNode) {
  _inherits(DiscardSecondChildNode, _NonTerminalNode);

  function DiscardSecondChildNode() {
    _classCallCheck(this, DiscardSecondChildNode);

    return _possibleConstructorReturn(this, (DiscardSecondChildNode.__proto__ || Object.getPrototypeOf(DiscardSecondChildNode)).apply(this, arguments));
  }

  _createClass(DiscardSecondChildNode, null, [{
    key: 'fromNodesAndRuleName',
    value: function fromNodesAndRuleName(nodes, ruleName) {
      var childNodes = arrayUtil.discardSecond(nodes),
          discardSecondChildNode = NonTerminalNode.fromRuleNameAndChildNodes(ruleName, childNodes, DiscardSecondChildNode);

      return discardSecondChildNode;
    }
  }]);

  return DiscardSecondChildNode;
}(NonTerminalNode);

module.exports = DiscardSecondChildNode;

},{"../../../util/array":88,"../nonTerminal":59}],64:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TransparentNode = function () {
  function TransparentNode() {
    _classCallCheck(this, TransparentNode);
  }

  _createClass(TransparentNode, null, [{
    key: 'fromNodesAndRuleName',
    value: function fromNodesAndRuleName(nodes, ruleName) {
      return nodes;
    }
  }]);

  return TransparentNode;
}();

module.exports = TransparentNode;

},{}],65:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtil = require('../../../util/array');

var TransparentThenKeepSecondNode = function () {
  function TransparentThenKeepSecondNode() {
    _classCallCheck(this, TransparentThenKeepSecondNode);
  }

  _createClass(TransparentThenKeepSecondNode, null, [{
    key: 'fromNodesAndRuleName',
    value: function fromNodesAndRuleName(nodes, ruleName) {
      nodes = arrayUtil.keepSecond(nodes);

      return nodes;
    }
  }]);

  return TransparentThenKeepSecondNode;
}();

module.exports = TransparentThenKeepSecondNode;

},{"../../../util/array":88}],66:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalNodeParseTree = require('../parseTree/terminalNode');

var TerminalNode = function () {
  function TerminalNode(significantToken, line) {
    _classCallCheck(this, TerminalNode);

    this.significantToken = significantToken;
    this.line = line;
  }

  _createClass(TerminalNode, [{
    key: 'isTerminal',
    value: function isTerminal() {
      var terminal = true;

      return terminal;
    }
  }, {
    key: 'getSignificantToken',
    value: function getSignificantToken() {
      return this.significantToken;
    }
  }, {
    key: 'getLine',
    value: function getLine() {
      return this.line;
    }
  }, {
    key: 'getFirstSignificantToken',
    value: function getFirstSignificantToken() {
      var firstSignificantToken = this.significantToken; ///

      return firstSignificantToken;
    }
  }, {
    key: 'getLastSignificantToken',
    value: function getLastSignificantToken() {
      var lastSignificantToken = this.significantToken; ///

      return lastSignificantToken;
    }
  }, {
    key: 'getFirstLine',
    value: function getFirstLine() {
      var firstLine = this.line; ///

      return firstLine;
    }
  }, {
    key: 'getLastLine',
    value: function getLastLine() {
      var lastLine = this.line; ///

      return lastLine;
    }
  }, {
    key: 'getContent',
    value: function getContent() {
      return this.significantToken.getContent();
    }
  }, {
    key: 'generateParseTree',
    value: function generateParseTree(lines) {
      var terminalNode = this,
          ///
      terminalNodeParseTree = TerminalNodeParseTree.fromTerminalNode(terminalNode, lines),
          parseTree = terminalNodeParseTree; ///

      return parseTree;
    }
  }], [{
    key: 'fromSignificantToken',
    value: function fromSignificantToken(significantToken) {
      var Class = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TerminalNode;

      var line = significantToken.getLine(),
          terminalNode = new Class(significantToken, line),
          error = false;

      significantToken.setError(error);

      return terminalNode;
    }
  }]);

  return TerminalNode;
}();

module.exports = TerminalNode;

},{"../parseTree/terminalNode":75}],67:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var TerminalNode = require('../terminal'),
    EpsilonTerminalNodeParseTree = require('../../parseTree/terminalNode/epsilon');

var BNFLexer = lexers.BNFLexer,
    specialSymbols = BNFLexer.specialSymbols,
    epsilon = specialSymbols.epsilon;

var EpsilonTerminalNode = function (_TerminalNode) {
      _inherits(EpsilonTerminalNode, _TerminalNode);

      function EpsilonTerminalNode() {
            _classCallCheck(this, EpsilonTerminalNode);

            var significantToken = null,
                line = null;

            return _possibleConstructorReturn(this, (EpsilonTerminalNode.__proto__ || Object.getPrototypeOf(EpsilonTerminalNode)).call(this, significantToken, line));
      }

      _createClass(EpsilonTerminalNode, [{
            key: 'getContent',
            value: function getContent() {
                  var content = epsilon; ///

                  return content;
            }
      }, {
            key: 'generateParseTree',
            value: function generateParseTree(lines) {
                  var epsilonTerminalNode = this,
                      ///
                  epsilonTerminalNodeParseTree = EpsilonTerminalNodeParseTree.fromEpsilonTerminalNode(epsilonTerminalNode, lines),
                      parseTree = epsilonTerminalNodeParseTree; ///

                  return parseTree;
            }
      }]);

      return EpsilonTerminalNode;
}(TerminalNode);

module.exports = EpsilonTerminalNode;

},{"../../parseTree/terminalNode/epsilon":76,"../terminal":66,"occam-lexers":123}],68:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../../util/array'),
    TerminalNode = require('../terminal');

var ErrorNode = function (_TerminalNode) {
      _inherits(ErrorNode, _TerminalNode);

      function ErrorNode() {
            _classCallCheck(this, ErrorNode);

            return _possibleConstructorReturn(this, (ErrorNode.__proto__ || Object.getPrototypeOf(ErrorNode)).apply(this, arguments));
      }

      _createClass(ErrorNode, null, [{
            key: 'fromNodesAndRuleName',
            value: function fromNodesAndRuleName(nodes, ruleName) {
                  var firstNode = arrayUtil.first(nodes),
                      terminalNode = firstNode,
                      ///
                  significantToken = terminalNode.getSignificantToken(),
                      errorNode = TerminalNode.fromSignificantToken(significantToken, ErrorNode),
                      error = true;

                  significantToken.setError(error);

                  return errorNode;
            }
      }]);

      return ErrorNode;
}(TerminalNode);

module.exports = ErrorNode;

},{"../../../util/array":88,"../terminal":66}],69:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtil = require('../util/array');

var ParseTree = function () {
  function ParseTree(lines) {
    _classCallCheck(this, ParseTree);

    this.lines = lines;
  }

  _createClass(ParseTree, [{
    key: 'clone',
    value: function clone() {
      var lines = this.lines.slice(0),
          ///
      parseTree = new ParseTree(lines);

      return parseTree;
    }
  }, {
    key: 'getWidth',
    value: function getWidth() {
      var linesLength = this.lines.length,
          width = undefined;

      if (linesLength === 0) {
        width = 0;
      } else {
        var lastLine = arrayUtil.last(this.lines),
            lastLineLength = lastLine.length;

        width = lastLineLength; ///
      }

      return width;
    }
  }, {
    key: 'getDepth',
    value: function getDepth() {
      var linesLength = this.lines.length,
          depth = linesLength; ///

      return depth;
    }
  }, {
    key: 'forEachLine',
    value: function forEachLine(callback) {
      this.lines.forEach(callback);
    }
  }, {
    key: 'appendToTop',
    value: function appendToTop(parseTree) {
      parseTree.forEachLine(function (line) {
        this.lines.unshift(line);
      }.bind(this));
    }
  }, {
    key: 'appendToLeft',
    value: function appendToLeft(parseTree) {
      parseTree.forEachLine(function (line, index) {
        this.lines[index] = line + this.lines[index];
      }.bind(this));
    }
  }, {
    key: 'appendToRight',
    value: function appendToRight(parseTree) {
      parseTree.forEachLine(function (line, index) {
        this.lines[index] = this.lines[index] + line;
      }.bind(this));
    }
  }, {
    key: 'appendToBottom',
    value: function appendToBottom(parseTree) {
      parseTree.forEachLine(function (line) {
        this.lines.push(line);
      }.bind(this));
    }
  }, {
    key: 'addTopMargin',
    value: function addTopMargin(topMarginDepth) {
      var width = this.getWidth(),
          topMarginWidth = width,
          ///
      topMarginString = marginStringFromMarginWidth(topMarginWidth);

      for (var index = 0; index < topMarginDepth; index++) {
        this.lines.unshift(topMarginString);
      }
    }
  }, {
    key: 'addLeftMargin',
    value: function addLeftMargin(leftMarginWidth) {
      var leftMarginString = marginStringFromMarginWidth(leftMarginWidth),
          linesLength = this.lines.length;

      for (var index = 0; index < linesLength; index++) {
        this.lines[index] = leftMarginString + this.lines[index];
      }
    }
  }, {
    key: 'addRightMargin',
    value: function addRightMargin(rightMarginWidth) {
      var rightMarginString = marginStringFromMarginWidth(rightMarginWidth),
          linesLength = this.lines.length;

      for (var index = 0; index < linesLength; index++) {
        this.lines[index] = this.lines[index] + rightMarginString;
      }
    }
  }, {
    key: 'addBottomMargin',
    value: function addBottomMargin(bottomMarginDepth) {
      var width = this.getWidth(),
          bottomMarginWidth = width,
          ///
      bottomMarginString = marginStringFromMarginWidth(bottomMarginWidth);

      for (var index = 0; index < bottomMarginDepth; index++) {
        this.lines.push(bottomMarginString);
      }
    }
  }, {
    key: 'popLine',
    value: function popLine() {
      return this.lines.pop();
    }
  }, {
    key: 'shiftLine',
    value: function shiftLine() {
      return this.lines.shift();
    }
  }, {
    key: 'pushLine',
    value: function pushLine(line) {
      this.lines.push(line);
    }
  }, {
    key: 'unshiftLine',
    value: function unshiftLine(line) {
      this.lines.unshift(line);
    }
  }, {
    key: 'toString',
    value: function toString() {
      var string = this.lines.reduce(function (string, line) {
        string += line + '\n';

        return string;
      }, '');

      return string;
    }
  }]);

  return ParseTree;
}();

module.exports = ParseTree;

function marginStringFromMarginWidth(marginWidth, spaceCharacter) {
  spaceCharacter = spaceCharacter || ' ';

  var marginString = '';

  for (var index = 0; index < marginWidth; index++) {
    marginString += spaceCharacter;
  }

  return marginString;
}

},{"../util/array":88}],70:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EmptyParseTree = require('./empty'),
    VerticalBranchParseTree = require('./verticalBranch'),
    HorizontalBranchParseTree = require('./horizontalBranch');

var ChildNodesParseTree = function (_VerticalBranchParseT) {
  _inherits(ChildNodesParseTree, _VerticalBranchParseT);

  function ChildNodesParseTree() {
    _classCallCheck(this, ChildNodesParseTree);

    return _possibleConstructorReturn(this, (ChildNodesParseTree.__proto__ || Object.getPrototypeOf(ChildNodesParseTree)).apply(this, arguments));
  }

  _createClass(ChildNodesParseTree, null, [{
    key: 'fromChildNodes',
    value: function fromChildNodes(childNodes, lines) {
      var childNodeParseTrees = childNodes.map(function (childNode) {
        var childNodeParseTree = childNode.generateParseTree(lines);

        return childNodeParseTree;
      }),
          childNodeParseTreesLength = childNodeParseTrees.length;

      var firstVerticalBranchPosition = undefined,
          lastVerticalBranchPosition = 0,
          childNodeParseTreesWidth = 0,
          childNodeParseTreesDepth = 0;

      childNodeParseTrees.forEach(function (childNodeParseTree, index) {
        var childNodeParseTreeWidth = childNodeParseTree.getWidth(),
            childNodeParseTreeDepth = childNodeParseTree.getDepth();

        if (index === 0) {
          var firstChildNodeParseTree = childNodeParseTree,
              firstChildNodeParseTreeVerticalBranchPosition = firstChildNodeParseTree.getVerticalBranchPosition();

          firstVerticalBranchPosition = firstChildNodeParseTreeVerticalBranchPosition;
        }

        if (index === childNodeParseTreesLength - 1) {
          var lastChildNodeParseTree = childNodeParseTree,
              lastChildNodeParseTreeVerticalBranchPosition = lastChildNodeParseTree.getVerticalBranchPosition();

          lastVerticalBranchPosition += lastChildNodeParseTreeVerticalBranchPosition;
        }

        if (index < childNodeParseTreesLength - 1) {
          lastVerticalBranchPosition += childNodeParseTreeWidth;
          lastVerticalBranchPosition += 1;

          childNodeParseTreesWidth += 1;
        }

        childNodeParseTreesWidth += childNodeParseTreeWidth;
        childNodeParseTreesDepth = Math.max(childNodeParseTreesDepth, childNodeParseTreeDepth);
      });

      var width = lastVerticalBranchPosition - firstVerticalBranchPosition + 1,
          verticalBranchParseTree = VerticalBranchParseTree.fromWidth(width),
          horizontalBranchParseTree = HorizontalBranchParseTree.fromWidth(width),
          leftMarginWidth = firstVerticalBranchPosition,
          rightMarginWidth = childNodeParseTreesWidth - width - leftMarginWidth;

      verticalBranchParseTree.addLeftMargin(leftMarginWidth);
      verticalBranchParseTree.addRightMargin(rightMarginWidth);
      horizontalBranchParseTree.addLeftMargin(leftMarginWidth);
      horizontalBranchParseTree.addRightMargin(rightMarginWidth);

      var verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(),
          childNodesParseTree = EmptyParseTree.fromDepth(childNodeParseTreesDepth, ChildNodesParseTree, verticalBranchPosition);

      childNodeParseTrees.forEach(function (childNodeParseTree, index) {
        var childNodeParseTreeDepth = childNodeParseTree.getDepth(),
            clonedChildNodeParseTree = childNodeParseTree.clone();

        if (index < childNodeParseTreesLength - 1) {
          var _rightMarginWidth = 1;

          clonedChildNodeParseTree.addRightMargin(_rightMarginWidth);
        }

        if (childNodeParseTreeDepth < childNodeParseTreesDepth) {
          var bottomMarginDepth = childNodeParseTreesDepth - childNodeParseTreeDepth;

          clonedChildNodeParseTree.addBottomMargin(bottomMarginDepth);
        }

        childNodesParseTree.appendToRight(clonedChildNodeParseTree);
      });

      childNodesParseTree.appendToTop(horizontalBranchParseTree);
      childNodesParseTree.appendToTop(verticalBranchParseTree);

      return childNodesParseTree;
    }
  }]);

  return ChildNodesParseTree;
}(VerticalBranchParseTree);

module.exports = ChildNodesParseTree;

},{"./empty":71,"./horizontalBranch":72,"./verticalBranch":77}],71:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ParseTree = require('../parseTree');

var EmptyParseTree = function (_ParseTree) {
  _inherits(EmptyParseTree, _ParseTree);

  function EmptyParseTree() {
    _classCallCheck(this, EmptyParseTree);

    return _possibleConstructorReturn(this, (EmptyParseTree.__proto__ || Object.getPrototypeOf(EmptyParseTree)).apply(this, arguments));
  }

  _createClass(EmptyParseTree, null, [{
    key: 'fromDepth',
    value: function fromDepth(depth, Class) {
      Class = Class || EmptyParseTree;

      var lines = [];

      var index = 0;

      while (index < depth) {
        lines[index++] = '';
      }

      for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }

      args.unshift(lines);
      args.unshift(null);

      var emptyParseTree = new (Function.prototype.bind.apply(Class, args))(); ///

      return emptyParseTree;
    }
  }]);

  return EmptyParseTree;
}(ParseTree);

module.exports = EmptyParseTree;

},{"../parseTree":69}],72:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ParseTree = require('../parseTree');

var HorizontalBranchParseTree = function (_ParseTree) {
  _inherits(HorizontalBranchParseTree, _ParseTree);

  function HorizontalBranchParseTree() {
    _classCallCheck(this, HorizontalBranchParseTree);

    return _possibleConstructorReturn(this, (HorizontalBranchParseTree.__proto__ || Object.getPrototypeOf(HorizontalBranchParseTree)).apply(this, arguments));
  }

  _createClass(HorizontalBranchParseTree, null, [{
    key: 'fromWidth',
    value: function fromWidth(width) {
      var string = stringFromCharactersWidth(width, '-'),
          line = string,
          ///
      lines = [line],
          horizontalBranchParseTree = new HorizontalBranchParseTree(lines);

      return horizontalBranchParseTree;
    }
  }]);

  return HorizontalBranchParseTree;
}(ParseTree);

module.exports = HorizontalBranchParseTree;

function stringFromCharactersWidth(charactersWidth, character) {
  var string = '';

  for (var index = 0; index < charactersWidth; index++) {
    string += character;
  }

  return string;
}

},{"../parseTree":69}],73:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../util/array'),
    EmptyParseTree = require('./empty'),
    RuleNameParseTree = require('./ruleName'),
    ChildNodesParseTree = require('./childNodes'),
    VerticalBranchParseTree = require('./verticalBranch');

var NonTerminalNodeParseTree = function (_VerticalBranchParseT) {
  _inherits(NonTerminalNodeParseTree, _VerticalBranchParseT);

  function NonTerminalNodeParseTree() {
    _classCallCheck(this, NonTerminalNodeParseTree);

    return _possibleConstructorReturn(this, (NonTerminalNodeParseTree.__proto__ || Object.getPrototypeOf(NonTerminalNodeParseTree)).apply(this, arguments));
  }

  _createClass(NonTerminalNodeParseTree, null, [{
    key: 'fromNonTerminalNode',
    value: function fromNonTerminalNode(nonTerminalNode, lines) {
      var childNodes = nonTerminalNode.getChildNodes(),
          firstChildNode = arrayUtil.first(childNodes),
          childNode = firstChildNode,
          childNodesLength = childNodes.length,
          childNodeOrNodesParseTree = childNodesLength === 1 ? childNode.generateParseTree(lines) : ChildNodesParseTree.fromChildNodes(childNodes, lines),
          ruleNameParseTree = RuleNameParseTree.fromNonTerminalNode(nonTerminalNode, lines);

      var ruleNameParseTreeVerticalBranchPosition = ruleNameParseTree.getVerticalBranchPosition();

      var childNodeOrNodesParseTreeVerticalBranchPosition = childNodeOrNodesParseTree.getVerticalBranchPosition(),
          verticalBranchPositionsDifference = ruleNameParseTreeVerticalBranchPosition - childNodeOrNodesParseTreeVerticalBranchPosition;

      var leftMarginWidth = undefined;

      if (false) {} else if (verticalBranchPositionsDifference < 0) {
        leftMarginWidth = -verticalBranchPositionsDifference;

        ruleNameParseTree.addLeftMargin(leftMarginWidth);
      } else if (verticalBranchPositionsDifference > 0) {
        leftMarginWidth = +verticalBranchPositionsDifference;

        childNodeOrNodesParseTree.addLeftMargin(leftMarginWidth);
      }

      var ruleNameParseTreeWidth = ruleNameParseTree.getWidth(),
          childNodeOrNodesParseTreeWidth = childNodeOrNodesParseTree.getWidth(),
          widthsDifference = ruleNameParseTreeWidth - childNodeOrNodesParseTreeWidth;

      var rightMarginWidth = undefined;

      if (false) {} else if (widthsDifference < 0) {
        rightMarginWidth = -widthsDifference;

        ruleNameParseTree.addRightMargin(rightMarginWidth);
      } else if (widthsDifference > 0) {
        rightMarginWidth = +widthsDifference;

        childNodeOrNodesParseTree.addRightMargin(rightMarginWidth);
      }

      ruleNameParseTreeVerticalBranchPosition = ruleNameParseTree.getVerticalBranchPosition();

      var ruleNameParseTreeDepth = ruleNameParseTree.getDepth(),
          nonTerminalNodeParseTreeDepth = ruleNameParseTreeDepth,
          ///
      verticalBranchPosition = ruleNameParseTreeVerticalBranchPosition,
          ///
      nonTerminalNodeParseTree = EmptyParseTree.fromDepth(nonTerminalNodeParseTreeDepth, NonTerminalNodeParseTree, verticalBranchPosition);

      nonTerminalNodeParseTree.appendToRight(ruleNameParseTree);
      nonTerminalNodeParseTree.appendToBottom(childNodeOrNodesParseTree);

      return nonTerminalNodeParseTree;
    }
  }]);

  return NonTerminalNodeParseTree;
}(VerticalBranchParseTree);

module.exports = NonTerminalNodeParseTree;

},{"../../util/array":88,"./childNodes":70,"./empty":71,"./ruleName":74,"./verticalBranch":77}],74:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VerticalBranchParseTree = require('./verticalBranch');

var RuleNameParseTree = function (_VerticalBranchParseT) {
  _inherits(RuleNameParseTree, _VerticalBranchParseT);

  function RuleNameParseTree() {
    _classCallCheck(this, RuleNameParseTree);

    return _possibleConstructorReturn(this, (RuleNameParseTree.__proto__ || Object.getPrototypeOf(RuleNameParseTree)).apply(this, arguments));
  }

  _createClass(RuleNameParseTree, null, [{
    key: 'fromNonTerminalNode',
    value: function fromNonTerminalNode(nonTerminalNode, lines) {
      var ruleName = nonTerminalNode.getRuleName(),
          firstLine = nonTerminalNode.getFirstLine(),
          lastLine = nonTerminalNode.getLastLine(),
          firstLineIndex = lines.indexOf(firstLine),
          lastLineIndex = lines.indexOf(lastLine),
          firstLineNumber = firstLineIndex + 1,
          lastLineNumber = lastLineIndex + 1,
          string = ruleName + '(' + firstLineNumber + '-' + lastLineNumber + ')',
          stringLength = string.length,
          verticalBranchParseTreeWidth = stringLength,
          ///
      verticalBranchParseTree = VerticalBranchParseTree.fromWidth(verticalBranchParseTreeWidth),
          verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(),
          ruleNameParseTree = VerticalBranchParseTree.fromString(string, RuleNameParseTree, verticalBranchPosition);

      ruleNameParseTree.appendToTop(verticalBranchParseTree);

      return ruleNameParseTree;
    }
  }]);

  return RuleNameParseTree;
}(VerticalBranchParseTree);

module.exports = RuleNameParseTree;

},{"./verticalBranch":77}],75:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VerticalBranchParseTree = require('./verticalBranch');

var TerminalNodeParseTree = function (_VerticalBranchParseT) {
  _inherits(TerminalNodeParseTree, _VerticalBranchParseT);

  function TerminalNodeParseTree() {
    _classCallCheck(this, TerminalNodeParseTree);

    return _possibleConstructorReturn(this, (TerminalNodeParseTree.__proto__ || Object.getPrototypeOf(TerminalNodeParseTree)).apply(this, arguments));
  }

  _createClass(TerminalNodeParseTree, null, [{
    key: 'fromTerminalNode',
    value: function fromTerminalNode(terminalNode, lines) {
      var line = terminalNode.getLine(),
          lineIndex = lines.indexOf(line),
          lineNumber = lineIndex + 1,
          significantToken = terminalNode.getSignificantToken(),
          significantTokenType = significantToken.getType(),
          significantTokenError = significantToken.getError(),
          significantTokenContent = significantToken.getContent(),
          content = significantTokenContent,
          description = significantTokenError === true ? 'error' : significantTokenType,
          string = content + '[' + description + '](' + lineNumber + ')',
          stringLength = string.length,
          verticalBranchParseTreeWidth = stringLength,
          ///
      verticalBranchParseTree = VerticalBranchParseTree.fromWidth(verticalBranchParseTreeWidth),
          verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(),
          terminalNodeParseTree = VerticalBranchParseTree.fromString(string, TerminalNodeParseTree, verticalBranchPosition);

      terminalNodeParseTree.appendToTop(verticalBranchParseTree);

      return terminalNodeParseTree;
    }
  }]);

  return TerminalNodeParseTree;
}(VerticalBranchParseTree);

module.exports = TerminalNodeParseTree;

},{"./verticalBranch":77}],76:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VerticalBranchParseTree = require('../verticalBranch');

var EpsilonTerminalNodeParseTree = function (_VerticalBranchParseT) {
  _inherits(EpsilonTerminalNodeParseTree, _VerticalBranchParseT);

  function EpsilonTerminalNodeParseTree() {
    _classCallCheck(this, EpsilonTerminalNodeParseTree);

    return _possibleConstructorReturn(this, (EpsilonTerminalNodeParseTree.__proto__ || Object.getPrototypeOf(EpsilonTerminalNodeParseTree)).apply(this, arguments));
  }

  _createClass(EpsilonTerminalNodeParseTree, null, [{
    key: 'fromEpsilonTerminalNode',
    value: function fromEpsilonTerminalNode(epsilonTerminalNode, lines) {
      var content = epsilonTerminalNode.getContent(),
          string = '' + content,
          stringLength = string.length,
          verticalBranchParseTreeWidth = stringLength,
          ///
      verticalBranchParseTree = VerticalBranchParseTree.fromWidth(verticalBranchParseTreeWidth),
          verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(),
          terminalNodeParseTree = VerticalBranchParseTree.fromString(string, EpsilonTerminalNodeParseTree, verticalBranchPosition);

      terminalNodeParseTree.appendToTop(verticalBranchParseTree);

      return terminalNodeParseTree;
    }
  }]);

  return EpsilonTerminalNodeParseTree;
}(VerticalBranchParseTree);

module.exports = EpsilonTerminalNodeParseTree;

},{"../verticalBranch":77}],77:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ParseTree = require('../parseTree');

var VerticalBranchParseTree = function (_ParseTree) {
  _inherits(VerticalBranchParseTree, _ParseTree);

  function VerticalBranchParseTree(lines, verticalBranchPosition) {
    _classCallCheck(this, VerticalBranchParseTree);

    var _this = _possibleConstructorReturn(this, (VerticalBranchParseTree.__proto__ || Object.getPrototypeOf(VerticalBranchParseTree)).call(this, lines));

    _this.verticalBranchPosition = verticalBranchPosition;
    return _this;
  }

  _createClass(VerticalBranchParseTree, [{
    key: 'getVerticalBranchPosition',
    value: function getVerticalBranchPosition() {
      return this.verticalBranchPosition;
    }
  }, {
    key: 'addLeftMargin',
    value: function addLeftMargin(leftMarginWidth) {
      _get(VerticalBranchParseTree.prototype.__proto__ || Object.getPrototypeOf(VerticalBranchParseTree.prototype), 'addLeftMargin', this).call(this, leftMarginWidth);

      this.verticalBranchPosition += leftMarginWidth; ///
    }
  }], [{
    key: 'fromWidth',
    value: function fromWidth(width) {
      var string = '|',
          verticalBranchPosition = 0,
          verticalBranchParseTree = VerticalBranchParseTree.fromString(string, VerticalBranchParseTree, verticalBranchPosition),
          leftMarginWidth = Math.floor(width / 2),
          rightMarginWidth = width - leftMarginWidth - 1;

      verticalBranchParseTree.addLeftMargin(leftMarginWidth);
      verticalBranchParseTree.addRightMargin(rightMarginWidth);

      return verticalBranchParseTree;
    }
  }, {
    key: 'fromString',
    value: function fromString(string, Class, verticalBranchPosition) {
      Class = Class || ParseTree;

      var line = string,
          ///
      lines = [line],
          args = [null, lines, verticalBranchPosition],
          verticalBranchParseTree = new (Function.prototype.bind.apply(Class, args))(); ///

      return verticalBranchParseTree;
    }
  }]);

  return VerticalBranchParseTree;
}(ParseTree);

module.exports = VerticalBranchParseTree;

},{"../parseTree":69}],78:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Context = require('./context'),
    arrayUtil = require('../util/array'),
    parserUtil = require('../util/parser');

var CommonParser = function () {
  function CommonParser(rules) {
    _classCallCheck(this, CommonParser);

    this.rules = rules;
  }

  _createClass(CommonParser, [{
    key: 'getRules',
    value: function getRules() {
      return this.rules;
    }
  }, {
    key: 'nodeFromLines',
    value: function nodeFromLines(lines, rule) {
      var tokens = parserUtil.tokensFromLines(lines),
          node = this.parse(tokens, rule);

      return node;
    }
  }, {
    key: 'parse',
    value: function parse(tokens) {
      var rule = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var node = null;

      if (rule === null) {
        var rulesLength = this.rules.length;

        if (rulesLength > 0) {
          var firstRule = arrayUtil.first(this.rules);

          rule = firstRule; ///
        }
      }

      if (rule !== null) {
        var context = new Context(tokens, this.rules),
            noWhitespace = false,
            ///
        nodeOrNodes = rule.parse(context, noWhitespace);

        if (nodeOrNodes !== null) {
          node = nodeOrNodes instanceof Array ? arrayUtil.first(nodeOrNodes) : nodeOrNodes;
        }
      }

      return node;
    }
  }, {
    key: 'toString',
    value: function toString() {
      var maximumRuleNameLength = this.rules.reduce(function (maximumRuleNameLength, rule) {
        var ruleName = rule.getName(),
            ruleNameLength = ruleName.length;

        maximumRuleNameLength = Math.max(maximumRuleNameLength, ruleNameLength);

        return maximumRuleNameLength;
      }, 0),
          string = this.rules.reduce(function (string, rule) {
        var ruleString = rule.toString(maximumRuleNameLength);

        string += ruleString;

        return string;
      }, '');

      return string;
    }
  }, {
    key: 'findRule',
    value: function findRule(ruleName) {
      var rules = this.getRules();

      return parserUtil.findRule(ruleName, rules);
    }
  }]);

  return CommonParser;
}();

module.exports = CommonParser;

},{"../util/array":88,"../util/parser":90,"./context":58}],79:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easy = require('easy'),
    easyLayout = require('easy-layout');

var Textarea = easy.Textarea,
    SizeableElement = easyLayout.SizeableElement,
    VerticalSplitter = easyLayout.VerticalSplitter;


var contentTextareaSelector = 'textarea#content',
    parseTreeTextareaSelector = 'textarea#parseTree',
    lexicalEntriesTextareaSelector = 'textarea#lexicalEntries',
    bnfTextareaSelector = 'textarea#bnf',
    sizeableElementSelector = '#sizeableElement',
    verticalSplitterSelector = '#verticalSplitter',
    contentTextarea = new Textarea(contentTextareaSelector),
    parseTreeTextarea = new Textarea(parseTreeTextareaSelector),
    lexicalEntriesTextarea = new Textarea(lexicalEntriesTextareaSelector),
    bnfTextarea = new Textarea(bnfTextareaSelector),
    sizeableElement = new SizeableElement(sizeableElementSelector),
    beforeSizeableElement = false,
    afterSizeableElement = true;

var lexer = null,
    parser = null;

new VerticalSplitter(verticalSplitterSelector, beforeSizeableElement, afterSizeableElement);

var Example = function () {
  function Example() {
    _classCallCheck(this, Example);
  }

  _createClass(Example, null, [{
    key: 'run',
    value: function run(content, lexicalEntries, bnf, updateHandler) {
      var contentTextareaValue = content,
          ///
      bnfTextareaValue = bnf,
          ///
      lexicalEntriesTextareaValue = JSON.stringify(lexicalEntries, null, '  ');

      contentTextarea.setValue(contentTextareaValue);

      lexicalEntriesTextarea.setValue(lexicalEntriesTextareaValue);

      bnfTextarea.setValue(bnfTextareaValue);

      contentTextarea.onKeyUp(updateHandler);

      lexicalEntriesTextarea.onKeyUp(updateHandler);

      bnfTextarea.onKeyUp(updateHandler);
    }
  }, {
    key: 'updateLexer',
    value: function updateLexer(Lexer) {
      var lexicalEntriesTextareaValue = lexicalEntriesTextarea.getValue();

      var lexicalEntries = null;

      try {
        lexicalEntries = JSON.parse(lexicalEntriesTextareaValue);
      } catch (error) {}

      var lexicalEntriesValid = lexicalEntries !== null;

      if (lexicalEntriesValid) {
        lexer = Lexer.fromEntries(lexicalEntries);

        lexicalEntriesTextarea.removeClass('error');
      } else {
        lexer = null;

        lexicalEntriesTextarea.addClass('error');
      }
    }
  }, {
    key: 'updateParser',
    value: function updateParser(callback) {
      var bnfTextareaValue = bnfTextarea.getValue(),
          bnf = bnfTextareaValue; ///

      parser = callback(bnf);
    }
  }, {
    key: 'updateParseTree',
    value: function updateParseTree(ruleName) {
      var node = null,
          parseTreeTextareaHTML = '';

      if (lexer !== null && parser !== null) {
        try {
          var contentTextareaValue = contentTextarea.getValue(),
              content = contentTextareaValue,
              ///
          rule = parser.findRule(ruleName),
              lines = lexer.linesFromContent(content);

          node = parser.nodeFromLines(lines, rule);

          if (node === null) {
            throw new Error('The document cannot be parsed for some reason.'); ///
          }

          var parseTree = node.generateParseTree(lines);

          parseTree.shiftLine(); //

          var parseTreeString = parseTree.toString();

          parseTreeTextareaHTML = parseTreeString; ///

          contentTextarea.removeClass('error');
        } catch (error) {
          contentTextarea.addClass('error');
        }
      }

      parseTreeTextarea.html(parseTreeTextareaHTML);

      return node;
    }
  }]);

  return Example;
}();

module.exports = Example;

},{"easy":98,"easy-layout":91}],80:[function(require,module,exports){
'use strict';

module.exports = {
  BNFExample: require('./examples/bnf'),
  BasicExample: require('./examples/basic'),
  FlorenceExample: require('./examples/florence')
};

},{"./examples/basic":81,"./examples/bnf":82,"./examples/florence":83}],81:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers');

var bnf = require('../basic/bnf'),
    Example = require('../example'),
    BasicParser = require('../basic/parser');

var BasicLexer = lexers.BasicLexer;

var BasicExample = function () {
  function BasicExample() {
    _classCallCheck(this, BasicExample);
  }

  _createClass(BasicExample, null, [{
    key: 'run',
    value: function run() {
      var content = '1+2/3',
          lexicalEntries = BasicLexer.entries; /// 

      Example.run(content, lexicalEntries, bnf, updateHandler);

      updateHandler();
    }
  }]);

  return BasicExample;
}();

function updateHandler() {
  var ruleName = null;

  Example.updateLexer(BasicLexer);

  Example.updateParser(function (bnf) {
    var basicParser = BasicParser.fromBNF(bnf),
        parser = basicParser; //'

    return parser;
  });

  Example.updateParseTree(ruleName);
}

module.exports = BasicExample;

},{"../basic/bnf":1,"../basic/parser":2,"../example":79,"occam-lexers":123}],82:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers');

var bnf = require('../bnf/bnf'),
    Example = require('../example'),
    BNFParser = require('../bnf/parser');

var BNFLexer = lexers.BNFLexer;

var BNFExample = function () {
  function BNFExample() {
    _classCallCheck(this, BNFExample);
  }

  _createClass(BNFExample, null, [{
    key: 'run',
    value: function run() {
      var content = bnf,
          lexicalEntries = BNFLexer.entries; ///

      Example.run(content, lexicalEntries, bnf, updateHandler);

      updateHandler();
    }
  }]);

  return BNFExample;
}();

function updateHandler() {
  var ruleName = null;

  Example.updateLexer(BNFLexer);

  Example.updateParser(function (bnf) {
    var bnfParser = BNFParser.fromNothing(),
        parser = bnfParser; ///

    return parser;
  });

  var node = Example.updateParseTree(ruleName);

  BNFParser.generateRules(node);
}

module.exports = BNFExample;

},{"../bnf/bnf":3,"../bnf/parser":30,"../example":79,"occam-lexers":123}],83:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easy = require('easy'),
    lexers = require('occam-lexers');

var Example = require('../example'),
    bnf = require('../florence/bnf'),
    mappings = require('../florence/mappings'),
    FlorenceParser = require('../florence/parser');

var Checkbox = easy.Checkbox,
    Input = easy.Input,
    FlorenceLexer = lexers.FlorenceLexer;


var mappingsCheckboxSelector = '#mappings',
    ruleNameInputSelector = '#ruleName';

var ruleName = void 0,
    mappingsCheckbox = void 0,
    ruleNameInput = void 0;

var defaultMappings = mappings; ///

var FlorenceExample = function () {
      function FlorenceExample() {
            _classCallCheck(this, FlorenceExample);
      }

      _createClass(FlorenceExample, null, [{
            key: 'run',
            value: function run() {
                  mappingsCheckbox = new Checkbox(mappingsCheckboxSelector);

                  ruleNameInput = new Input(ruleNameInputSelector);

                  mappingsCheckbox.onChange(updateHandler);

                  ruleNameInput.onKeyUp(updateHandler);

                  var content = '',
                      lexicalEntries = FlorenceLexer.entries; ///

                  Example.run(content, lexicalEntries, bnf, updateHandler);

                  updateHandler();
            }
      }]);

      return FlorenceExample;
}();

module.exports = FlorenceExample;

function updateHandler() {
      var ruleNameInputValue = ruleNameInput.getValue(),
          ruleName = ruleNameInputValue;

      Example.updateLexer(FlorenceLexer);

      Example.updateParser(function (bnf) {
            var mappingsCheckboxChecked = mappingsCheckbox.isChecked(),
                mappings = mappingsCheckboxChecked ? defaultMappings : {},
                florenceParser = FlorenceParser.fromBNFAndMappings(bnf, mappings),
                parser = florenceParser; ///

            return parser;
      });

      Example.updateParseTree(ruleName);
}

},{"../example":79,"../florence/bnf":84,"../florence/mappings":86,"../florence/parser":87,"easy":98,"occam-lexers":123}],84:[function(require,module,exports){
'use strict';

var bnf = '\n\n\n\n     document                             ::=   header? body? ;\n     \n     \n     \n     header                               ::=   import* verticalSpace? ;\n\n     body                                 ::=   ( rule | axiom | lemma | theorem | declaration | verticalSpace | error )+ ;\n\n\n\n     import                               ::=   [import]<NO_WHITESPACE>"("<NO_WHITESPACE>[string]<NO_WHITESPACE>")" <END_OF_LINE> ;\n          \n     \n\n     rule                                 ::=   "Rule" parenthesisedLabels? <END_OF_LINE> ( premise | premises )? conclusion metaProof? ;\n\n     axiom                                ::=   "Axiom" parenthesisedLabels? <END_OF_LINE> ( unjustifiedStatement | indicativeConditional ) ; \n\n     lemma                                ::=   "Lemma" parenthesisedLabels? <END_OF_LINE> ( unjustifiedStatement | indicativeConditional ) proof? ;\n\n     theorem                              ::=   "Theorem" parenthesisedLabels? <END_OF_LINE> ( unjustifiedStatement | indicativeConditional ) proof? ;\n\n     declaration                          ::=   "Type" typeDeclaration\n\n                                            |   "Types" typesDeclaration\n\n                                            |   "Context" contextDeclaration\n\n                                            |   "Contexts" contextsDeclaration\n\n                                            |   "Variable" variableDeclaration\n\n                                            |   "Variables" variablesDeclaration\n\n                                            |   "Constructor" constructorDeclaration\n\n                                            |   "Constructors" constructorsDeclaration\n\n                                            |   "Abbreviation" abbreviationDeclaration\n\n                                            |   "Abbreviations" abbreviationsDeclaration\n\n                                            |   "DependentType" dependentTypeDeclaration\n\n                                            |   "DependentTypes" dependentTypesDeclaration\n\n                                            |   "Metavariable" metavariableDeclaration\n\n                                            |   "Metavariables" metavariablesDeclaration\n                                            \n                                            ;\n                                            \n\n\n     verticalSpace                        ::=   <END_OF_LINE>+ ;\n\n\n\n     error                                ::=   . ;\n\n     \n\n     typesDeclaration                     ::=   typeDeclaration ( "," typeDeclaration)+ ;\n\n     contextsDeclaration                  ::=   contextDeclaration ( "," contextDeclaration)+ ;\n\n     variablesDeclaration                 ::=   variableDeclaration ( "," variableDeclaration)+ ;\n   \n     constructorsDeclaration              ::=   constructorDeclaration ( "," constructorDeclaration)+ ;\n   \n     abbreviationsDeclaration             ::=   abbreviationDeclaration ( "," abbreviationDeclaration)+ ;\n   \n     dependentTypesDeclaration            ::=   dependentTypeDeclaration ( "," dependentTypeDeclaration)* ;\n   \n     metavariablesDeclaration             ::=   metavariableDeclaration ( "," metavariableDeclaration)* ;\n   \n\n\n     typeDeclaration                      ::=   typeName ;\n   \n     contextDeclaration                   ::=   contextName(<NO_WHITESPACE>":"typeName)? ;\n   \n     variableDeclaration                  ::=   variableName ;\n   \n     constructorDeclaration               ::=   constructorName<NO_WHITESPACE>parenthesisedTypeNames?<NO_WHITESPACE>":"<NO_WHITESPACE>typeName ;\n   \n     abbreviationDeclaration              ::=   typeName "for" typeName | constructorName "for" constructorName ;\n\n     dependentTypeDeclaration             ::=   typeName<NO_WHITESPACE>parenthesisedTypeName ;\n   \n     metavariableDeclaration              ::=   metavariableName<NO_WHITESPACE>parenthesisedTypeName? ;\n\n   \n        \n     premise                              ::=   "Premise" <END_OF_LINE> unjustifiedMetastatement ;\n\n     premises                             ::=   "Premises" <END_OF_LINE> unjustifiedMetastatement unjustifiedMetastatement+ ;\n\n     conclusion                           ::=   "Conclusion" <END_OF_LINE> unjustifiedOrJustifiedMetastatement ;\n\n     \n     \n     metaProof                            ::=   "Proof" <END_OF_LINE> \n     \n                                                metastatementDefinition*\n     \n                                                metaProofDerivation? \n                                                \n                                                unjustifiedOrJustifiedMetastatement ;\n                                                \n     metastatementDefinition              ::=   "let" metastatement <END_OF_LINE> ;                                           \n                                                \n     metaProofDerivation                  ::=   ( subrule | unjustifiedOrJustifiedMetastatement )+  "Therefore" <END_OF_LINE> ;                                           \n     \n     subrule                              ::=   "Suppose" <END_OF_LINE> unjustifiedMetastatement+ \n     \n                                                ( "Then" <END_OF_LINE> ( subrule | unjustifiedOrJustifiedMetastatement )+ )? \n                                                \n                                                "Hence" <END_OF_LINE> unjustifiedOrJustifiedMetastatement ;\n\n\n\n     proof                                ::=   "Proof" <END_OF_LINE> \n     \n                                                statementDefinition*\n     \n                                                proofDerivation? \n                                                \n                                                unjustifiedOrJustifiedStatement ;\n                                                \n     statementDefinition                  ::=   "let" statement <END_OF_LINE> ;                                           \n\n     proofDerivation                      ::=   ( sublemma | unjustifiedOrJustifiedStatement )+ "Therefore" <END_OF_LINE> ;\n\n     sublemma                             ::=   "Suppose" <END_OF_LINE> unjustifiedStatement+ \n     \n                                                ( "Then" <END_OF_LINE> ( sublemma | unjustifiedOrJustifiedStatement )+ )? \n                                                \n                                                "Hence" <END_OF_LINE> unjustifiedOrJustifiedStatement ;\n\n\n\n     indicativeConditional                ::=   "Suppose" <END_OF_LINE> unjustifiedStatement+ \n     \n                                                "Hence" <END_OF_LINE> unjustifiedOrJustifiedStatement ;\n\n\n\n     unjustifiedOrJustifiedMetastatement  ::=   unjustifiedMetastatement | justifiedMetastatement ;\n     \n     unjustifiedMetastatement             ::=   metastatement <END_OF_LINE> ;\n     \n     justifiedMetastatement               ::=   metastatement "by" reference <END_OF_LINE> ;\n\n\n\n     unjustifiedOrJustifiedStatement      ::=   unjustifiedStatement | justifiedStatement ;\n\n     unjustifiedStatement                 ::=   statement <END_OF_LINE> ;\n\n     justifiedStatement                   ::=   statement ( "by" | "from" ) reference <END_OF_LINE> ;\n\n\n\n     metavariable                         ::=   metavariableName<NO_WHITESPACE>parenthesisedTerm? ;\n\n     reference                            ::=   referenceName<NO_WHITESPACE>parenthesisedTerm? ;\n\n     context                              ::=   contextName<NO_WHITESPACE>parenthesisedTerm? ;\n\n     label                                ::=   labelName<NO_WHITESPACE>parenthesisedTerm? ;\n\n\n\n     parenthesisedTypeNames               ::=   "("<NO_WHITESPACE>typeNames<NO_WHITESPACE>")" ;\n\n     parenthesisedLabels                  ::=   "("<NO_WHITESPACE>labels<NO_WHITESPACE>")" ;                    \n\n     parenthesisedTerms                   ::=   "("<NO_WHITESPACE>terms<NO_WHITESPACE>")" ;   \n\n\n\n     parenthesisedTypeName                ::=   "("<NO_WHITESPACE>typeName<NO_WHITESPACE>")" ;\n\n     parenthesisedTerm                    ::=   "("<NO_WHITESPACE>term<NO_WHITESPACE>")" ;   \n\n         \n     \n     compoundTerm                         ::=   constructorName<NO_WHITESPACE>parenthesisedTerms? ;\n\n\n\n     variable                             ::=   variableName ;\n\n\n\n     typeNames                            ::=   typeName ( "," typeName )* ;\n\n     labels                               ::=   label ( "," label )* ;\n\n     terms                                ::=   term ( "," term )* ;\n     \n\n\n     typeName                             ::=   name ;\n\n     contextName                          ::=   name ;\n\n     variableName                         ::=   name ;\n\n     constructorName                      ::=   name ;\n\n     metavariableName                     ::=   name ;\n\n     referenceName                        ::=   name ;\n\n     contextName                          ::=   name ;\n\n     labelName                            ::=   name ;\n\n     \n   \n     name                                 ::=   [unassigned] ;\n       \n\n       \n';

module.exports = bnf;

},{}],85:[function(require,module,exports){
'use strict';

var metastatement = '\n\n     proofAssertion                       ::=   context "\u22A2" judgement ;\n     \n     contextDefinition                    ::=   context "=" ( judgement | context ) ( "," ( judgement | context ) )* ;\n\n     judgement                            ::=   label "::" metastatement ;\n\n     subproof                             ::=   supposition "..." metastatement ;\n\n     supposition                          ::=   "[" metastatement "]" ;\n\n\n\n     metastatement                        ::=   proofAssertion\n           \n                                            |   contextDefinition\n           \n                                            |   subproof\n                                            \n                                            |   metavariable\n\n                                            ;\n      \n';

var statement = '\n\n     typeAssertion                        ::=   expression ":" typeName ;\n\n     equality                             ::=   expression "=" expression ;\n\n     expression                           ::=   term ;\n\n\n\n     statement                            ::=   typeAssertion \n                                                  \n                                            |   equality \n                                                  \n                                            |   metastatement\n     \n                                            ;\n\n';

var term = '\n\n     term                                 ::=   compoundTerm \n     \n                                            |   variable\n                                            \n                                            ;\n\n';

var defaultCustomGrammarBNFMap = {
      metastatement: metastatement,
      statement: statement,
      term: term
};

module.exports = defaultCustomGrammarBNFMap;

},{}],86:[function(require,module,exports){
'use strict';

var ErrorNode = require('../common/node/terminal/error'),
    TransparentNode = require('../common/node/nonTerminal/transparentNode'),
    DiscardOddChildNodes = require('../common/node/nonTerminal/discardOddChildNodes'),
    DiscardSecondChildNode = require('../common/node/nonTerminal/discardSecondChildNode'),
    DiscardFourthThenSecondChildNode = require('../common/node/nonTerminal/discardFourthThenSecondChildNode'),
    DiscardFifthThenSecondChildNode = require('../common/node/nonTerminal/discardFifthThenSecondChildNode'),
    TransparentThenKeepSecondNode = require('../common/node/nonTerminal/transparentThenKeepSecondNode');

var mappings = {

  'unjustifiedOrJustifiedMetastatement': TransparentNode,
  'unjustifiedOrJustifiedStatement': TransparentNode,

  'name': TransparentNode,

  'proof': DiscardSecondChildNode,
  'premise': DiscardSecondChildNode,
  'premises': DiscardSecondChildNode,
  'sublemma': DiscardSecondChildNode,
  'therefore': DiscardSecondChildNode,
  'conclusion': DiscardSecondChildNode,
  'metaProof': DiscardSecondChildNode,
  'justifiedStatement': DiscardSecondChildNode,
  'justifiedMetastatement': DiscardSecondChildNode,

  'import': DiscardFourthThenSecondChildNode,

  'indicativeConditional': DiscardFifthThenSecondChildNode,

  'typesDeclaration': DiscardOddChildNodes,
  'contextsDeclaration': DiscardOddChildNodes,
  'variablesDeclaration': DiscardOddChildNodes,
  'constructorsDeclaration': DiscardOddChildNodes,
  'abbreviationsDeclaration': DiscardOddChildNodes,
  'dependentTypesDeclaration': DiscardOddChildNodes,
  'metavariablesDeclaration': DiscardOddChildNodes,

  'typeNames': DiscardOddChildNodes,
  'labels': DiscardOddChildNodes,
  'terms': DiscardOddChildNodes,

  'parenthesisedTypeNames': TransparentThenKeepSecondNode,
  'parenthesisedLabels': TransparentThenKeepSecondNode,
  'parenthesisedTerms': TransparentThenKeepSecondNode,

  'parenthesisedTypeName': TransparentThenKeepSecondNode,
  'parenthesisedTerm': TransparentThenKeepSecondNode,

  'error': ErrorNode

};

module.exports = mappings;

},{"../common/node/nonTerminal/discardFifthThenSecondChildNode":60,"../common/node/nonTerminal/discardFourthThenSecondChildNode":61,"../common/node/nonTerminal/discardOddChildNodes":62,"../common/node/nonTerminal/discardSecondChildNode":63,"../common/node/nonTerminal/transparentNode":64,"../common/node/nonTerminal/transparentThenKeepSecondNode":65,"../common/node/terminal/error":68}],87:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var bnf = require('./bnf'),
    mappings = require('./mappings'),
    arrayUtil = require('../util/array'),
    BNFParser = require('../bnf/parser'),
    CommonParser = require('../common/parser'),
    defaultCustomGrammarBNFMap = require('./defaultCustomGrammar/bnfMap');

var BNFLexer = lexers.BNFLexer;


var bnfLexer = BNFLexer.fromNothing(),
    bnfParser = BNFParser.fromNothing(),
    defaultCustomGrammarRules = rulesFromBNFMap(defaultCustomGrammarBNFMap),
    defaultAdditionalMappings = {};

var FlorenceParser = function (_CommonParser) {
  _inherits(FlorenceParser, _CommonParser);

  function FlorenceParser() {
    _classCallCheck(this, FlorenceParser);

    return _possibleConstructorReturn(this, (FlorenceParser.__proto__ || Object.getPrototypeOf(FlorenceParser)).apply(this, arguments));
  }

  _createClass(FlorenceParser, null, [{
    key: 'fromCustomGrammarsRulesAndAdditionalMappings',
    value: function fromCustomGrammarsRulesAndAdditionalMappings(customGrammarsRules, additionalMappings) {
      var florenceParser = FlorenceParser.fromBNFAndMappings(bnf, mappings, customGrammarsRules, additionalMappings);

      return florenceParser;
    }
  }, {
    key: 'fromBNFAndMappings',
    value: function fromBNFAndMappings(bnf, mappings) {
      var customGrammarsRules = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultCustomGrammarRules;
      var additionalMappings = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultAdditionalMappings;

      mappings = Object.assign(mappings, additionalMappings); ///

      var lines = bnfLexer.linesFromBNF(bnf),
          node = bnfParser.nodeFromLines(lines),
          rules = BNFParser.generateRules(node, mappings);

      arrayUtil.push(rules, customGrammarsRules);

      var florenceParser = new FlorenceParser(rules);

      return florenceParser;
    }
  }]);

  return FlorenceParser;
}(CommonParser);

module.exports = FlorenceParser;

FlorenceParser.mappings = mappings;

FlorenceParser.bnf = bnf;

FlorenceParser.defaultCustomGrammarBNFMap = defaultCustomGrammarBNFMap;

function rulesFromBNFMap(bnfMap) {
  var ruleNames = Object.keys(bnfMap),
      bnf = ruleNames.reduce(function (bnf, ruleName) {
    var ruleBNF = bnfMap[ruleName];

    bnf = '' + bnf + ruleBNF;

    return bnf;
  }, ''),
      lines = bnfLexer.linesFromBNF(bnf),
      node = bnfParser.nodeFromLines(lines),
      rules = BNFParser.generateRules(node);

  return rules;
}

},{"../bnf/parser":30,"../common/parser":78,"../util/array":88,"./bnf":84,"./defaultCustomGrammar/bnfMap":85,"./mappings":86,"occam-lexers":123}],88:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtil = function () {
  function arrayUtil() {
    _classCallCheck(this, arrayUtil);
  }

  _createClass(arrayUtil, null, [{
    key: 'first',
    value: function first(array) {
      return array[0];
    }
  }, {
    key: 'second',
    value: function second(array) {
      return array[1];
    }
  }, {
    key: 'last',
    value: function last(array) {
      return array[array.length - 1];
    }
  }, {
    key: 'lastButOne',
    value: function lastButOne(array) {
      return array[array.length - 2];
    }
  }, {
    key: 'keepFirst',
    value: function keepFirst(array) {
      return keepNth(array, 0);
    }
  }, {
    key: 'keepSecond',
    value: function keepSecond(array) {
      return keepNth(array, 1);
    }
  }, {
    key: 'keepLast',
    value: function keepLast(array) {
      return keepNth(array, -1);
    }
  }, {
    key: 'discardFirst',
    value: function discardFirst(array) {
      return discardNth(array, 0);
    }
  }, {
    key: 'discardSecond',
    value: function discardSecond(array) {
      return discardNth(array, 1);
    }
  }, {
    key: 'discardLast',
    value: function discardLast(array) {
      return discardNth(array, -1);
    }
  }, {
    key: 'discardLastThenFirst',
    value: function discardLastThenFirst(array) {
      return discardNth(discardNth(array, -1), 0);
    }
  }, {
    key: 'discardFourthThenSecond',
    value: function discardFourthThenSecond(array) {
      return discardNth(discardNth(array, 3), 1);
    }
  }, {
    key: 'discardFifthThenSecond',
    value: function discardFifthThenSecond(array) {
      return discardNth(discardNth(array, 4), 1);
    }
  }, {
    key: 'discardOdd',
    value: function discardOdd(array) {
      return array.filter(function (entry, index) {
        return isEven(index);
      });
    }
  }, {
    key: 'push',
    value: function push(array1, array2) {
      Array.prototype.push.apply(array1, array2);
    }
  }]);

  return arrayUtil;
}();

module.exports = arrayUtil;

function keepNth(array, n) {
  array = array.slice();

  return array.splice(n, 1);
}

function discardNth(array, n) {
  array = array.slice();

  array.splice(n, 1);

  return array;
}

function isEven(index) {
  var even = Math.floor(index / 2) === index / 2;

  return even;
}

},{}],89:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers');

var arrayUtil = require('../util/array');

var BNFLexer = lexers.BNFLexer,
    specialSymbols = BNFLexer.specialSymbols,
    NO_WHITESPACE = specialSymbols.NO_WHITESPACE;

var bnfUtil = function () {
  function bnfUtil() {
    _classCallCheck(this, bnfUtil);
  }

  _createClass(bnfUtil, null, [{
    key: 'isNodeNoWhitespaceNode',
    value: function isNodeNoWhitespaceNode(node) {
      var nodeNoWhitespaceNode = false;

      var nodeTerminalNode = node.isTerminal();

      if (nodeTerminalNode) {
        var terminalNode = node,
            terminalNodeContent = terminalNode.getContent();

        nodeNoWhitespaceNode = terminalNodeContent === NO_WHITESPACE;
      }

      return nodeNoWhitespaceNode;
    }
  }, {
    key: 'isNodeChoiceNode',
    value: function isNodeChoiceNode(node) {
      var nodeNoChoiceNode = false;

      var nodeTerminalNode = node.isTerminal();

      if (nodeTerminalNode) {
        var terminalNode = node,
            terminalNodeContent = terminalNode.getContent();

        nodeNoChoiceNode = terminalNodeContent === '|';
      }

      return nodeNoChoiceNode;
    }
  }, {
    key: 'isNodeQuantifiersNode',
    value: function isNodeQuantifiersNode(node) {
      var nodeQuantifiersNode = false;

      var nodeTerminalNode = node.isTerminal(),
          nodeNonTerminalNode = !nodeTerminalNode;

      if (nodeNonTerminalNode) {
        var nonTerminalNode = node,
            ///
        childNodes = nonTerminalNode.getChildNodes(),
            firstChildNode = arrayUtil.first(childNodes),
            firstChildNodeTerminalNode = firstChildNode.isTerminal();

        if (firstChildNodeTerminalNode) {
          var terminalNode = firstChildNode,
              ///
          terminalNodeContent = terminalNode.getContent();

          nodeQuantifiersNode = terminalNodeContent === '?' || terminalNodeContent === '*' || terminalNodeContent === '+';
        }
      }

      return nodeQuantifiersNode;
    }
  }, {
    key: 'quantifiersFromQuantifiersNode',
    value: function quantifiersFromQuantifiersNode(quantifiersNode) {
      var quantifiers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      var quantifier = quantifierFromQuantifiersNode(quantifiersNode);

      quantifiers.push(quantifier);

      var quantifiersNodeChildNodes = quantifiersNode.getChildNodes(),
          quantifiersNodeChildNodesLength = quantifiersNodeChildNodes.length;

      if (quantifiersNodeChildNodesLength === 2) {
        var secondQuantifiersNodeChildNode = arrayUtil.second(quantifiersNodeChildNodes);

        quantifiersNode = secondQuantifiersNodeChildNode; ///

        quantifiers = bnfUtil.quantifiersFromQuantifiersNode(quantifiersNode, quantifiers);
      }

      return quantifiers;
    }
  }]);

  return bnfUtil;
}();

module.exports = bnfUtil;

function quantifierFromQuantifiersNode(quantifiersNode) {
  var quantifiersNodeChildNodes = quantifiersNode.getChildNodes(),
      firstQuantifiersNodeChildNode = arrayUtil.first(quantifiersNodeChildNodes),
      firstQuantifiersNodeChildNodeContent = firstQuantifiersNodeChildNode.getContent(),
      quantifier = firstQuantifiersNodeChildNodeContent;

  return quantifier;
}

},{"../util/array":88,"occam-lexers":123}],90:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var parserUtil = function () {
  function parserUtil() {
    _classCallCheck(this, parserUtil);
  }

  _createClass(parserUtil, null, [{
    key: 'tokensFromLines',
    value: function tokensFromLines(lines) {
      var tokens = lines.reduce(function (tokens, line) {
        var lineTokens = line.getTokens();

        tokens = tokens.concat(lineTokens);

        return tokens;
      }, []);

      return tokens;
    }
  }, {
    key: 'findRule',
    value: function findRule(ruleName, rules) {
      var foundRule = null;

      rules.some(function (rule) {
        var ruleFound = rule.isFoundByRuleName(ruleName);

        if (ruleFound) {
          foundRule = rule;

          return true;
        }
      });

      var rule = foundRule; ///

      return rule;
    }
  }]);

  return parserUtil;
}();

module.exports = parserUtil;

},{}],91:[function(require,module,exports){
'use strict';

module.exports = {
  options: require('./lib/options'),
  SizeableElement: require('./lib/sizeableElement'),
  VerticalSplitter: require('./lib/splitter/vertical'),
  HorizontalSplitter: require('./lib/splitter/horizontal')
};

},{"./lib/options":93,"./lib/sizeableElement":94,"./lib/splitter/horizontal":96,"./lib/splitter/vertical":97}],92:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easy = require('easy');

var Body = easy.Body;


var body = new Body();

var previousCursor = void 0; ///

var cursor = function () {
  function cursor() {
    _classCallCheck(this, cursor);
  }

  _createClass(cursor, null, [{
    key: 'columnResize',
    value: function columnResize() {
      var currentCursor = this.getCurrentCursor();

      if (currentCursor !== 'col-resize') {
        previousCursor = currentCursor;

        this.setCursor('col-resize');
      }
    }
  }, {
    key: 'rowResize',
    value: function rowResize() {
      var currentCursor = this.getCurrentCursor();

      if (currentCursor !== 'row-resize') {
        previousCursor = currentCursor;

        this.setCursor('row-resize');
      }
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.setCursor(previousCursor); ///
    }
  }, {
    key: 'getCurrentCursor',
    value: function getCurrentCursor() {
      var currentCursor = body.css('cursor'); ///

      return currentCursor || 'auto'; ///
    }
  }, {
    key: 'setCursor',
    value: function setCursor(cursor) {
      var css = {
        cursor: cursor
      };

      body.css(css);
    }
  }]);

  return cursor;
}();

module.exports = cursor;

},{"easy":98}],93:[function(require,module,exports){
'use strict';

var options = {
        ESCAPE_KEY_STOPS_DRAGGING: 'ESCAPE_KEY_STOPS_DRAGGING'
};

module.exports = options;

},{}],94:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var Element = easy.Element;

var SizeableElement = function (_Element) {
  _inherits(SizeableElement, _Element);

  function SizeableElement() {
    _classCallCheck(this, SizeableElement);

    return _possibleConstructorReturn(this, (SizeableElement.__proto__ || Object.getPrototypeOf(SizeableElement)).apply(this, arguments));
  }

  _createClass(SizeableElement, [{
    key: 'setWidth',
    value: function setWidth(width) {
      var widthNumber = typeof width === 'number';

      if (widthNumber) {
        var minimumWidth = this.getMinimumWidth(),
            maximumWidth = this.getMaximumWidth();

        if (minimumWidth !== null) {
          width = Math.max(width, minimumWidth);
        }
        if (maximumWidth !== null) {
          width = Math.min(width, maximumWidth);
        }

        width = width + 'px'; ///
      }

      _get(SizeableElement.prototype.__proto__ || Object.getPrototypeOf(SizeableElement.prototype), 'setWidth', this).call(this, width);
    }
  }, {
    key: 'setHeight',
    value: function setHeight(height) {
      var heightNumber = typeof height === 'number';

      if (heightNumber) {
        var minimumHeight = this.getMinimumHeight(),
            maximumHeight = this.getMaximumHeight();

        if (minimumHeight !== null) {
          height = Math.max(height, minimumHeight);
        }
        if (maximumHeight !== null) {
          height = Math.min(height, maximumHeight);
        }

        height = height + 'px'; ///
      }

      _get(SizeableElement.prototype.__proto__ || Object.getPrototypeOf(SizeableElement.prototype), 'setHeight', this).call(this, height);
    }
  }, {
    key: 'getMinimumWidth',
    value: function getMinimumWidth() {
      var minWidth = this.css('min-width'),
          minimumWidth = inPixels(minWidth);

      return minimumWidth;
    }
  }, {
    key: 'getMinimumHeight',
    value: function getMinimumHeight() {
      var minHeight = this.css('min-height'),
          minimumHeight = inPixels(minHeight);

      return minimumHeight;
    }
  }, {
    key: 'getMaximumWidth',
    value: function getMaximumWidth() {
      var maxWidth = this.css('max-width'),
          maximumWidth = inPixels(maxWidth);

      return maximumWidth;
    }
  }, {
    key: 'getMaximumHeight',
    value: function getMaximumHeight() {
      var maxHeight = this.css('max-height'),
          maximumHeight = inPixels(maxHeight);

      return maximumHeight;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return Element.fromProperties(SizeableElement, properties);
    }
  }]);

  return SizeableElement;
}(Element);

Object.assign(SizeableElement, {
  tagName: 'div',
  defaultProperties: {
    className: 'sizeable'
  }
});

module.exports = SizeableElement;

function inPixels(quantity) {
  var pixels = null;

  var matches = quantity.match(/([0-9]*)px$/);

  if (matches !== null) {
    var secondMatch = second(matches);

    pixels = secondMatch; ///
  }

  return pixels;
}

function second(array) {
  return array[1];
}

},{"easy":98}],95:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var options = require('./options');

var ESCAPE_KEYCODE = 27;

var ESCAPE_KEY_STOPS_DRAGGING = options.ESCAPE_KEY_STOPS_DRAGGING,
    window = easy.window,
    Element = easy.Element;

var Splitter = function (_Element) {
  _inherits(Splitter, _Element);

  function Splitter(selector, beforeSizeableElement, afterSizeableElement, dragHandler, options) {
    _classCallCheck(this, Splitter);

    var _this = _possibleConstructorReturn(this, (Splitter.__proto__ || Object.getPrototypeOf(Splitter)).call(this, selector));

    _this.beforeSizeableElement = beforeSizeableElement;
    _this.afterSizeableElement = afterSizeableElement;

    if (dragHandler !== undefined) {
      _this.onDrag(dragHandler);
    }

    if (options !== undefined) {
      _this.setOptions(options);
    }

    _this.disabled = false;

    _this.dragging = false;

    window.on('mouseup blur', _this.mouseUp.bind(_this)); ///

    window.onMouseMove(_this.mouseMove.bind(_this));

    _this.onMouseDown(_this.mouseDown.bind(_this));
    _this.onMouseOver(_this.mouseOver.bind(_this));
    _this.onMouseOut(_this.mouseOut.bind(_this));

    _this.options = {};
    return _this;
  }

  _createClass(Splitter, [{
    key: 'isBeforeSizeableElement',
    value: function isBeforeSizeableElement() {
      return this.beforeSizeableElement;
    }
  }, {
    key: 'isAfterSizeableElement',
    value: function isAfterSizeableElement() {
      return this.afterSizeableElement;
    }
  }, {
    key: 'getDirection',
    value: function getDirection() {
      var direction = undefined; ///

      if (this.beforeSizeableElement) {
        direction = +1;
      }

      if (this.afterSizeableElement) {
        direction = -1;
      }

      return direction;
    }
  }, {
    key: 'getSizeableElement',
    value: function getSizeableElement() {
      var sizeableElement = undefined; ///

      var direction = this.getDirection();

      switch (direction) {
        case -1:
          sizeableElement = this.getPreviousSiblingElement(); ///
          break;

        case +1:
          sizeableElement = this.getNextSiblingElement(); ///
          break;
      }

      return sizeableElement;
    }
  }, {
    key: 'setOptions',
    value: function setOptions(options) {
      this.options = options;
    }
  }, {
    key: 'setOption',
    value: function setOption(option) {
      this.options[option] = true;
    }
  }, {
    key: 'unsetOption',
    value: function unsetOption(option) {
      delete this.options[option];
    }
  }, {
    key: 'hasOption',
    value: function hasOption(option) {
      option = this.options[option] === true; ///

      return option;
    }
  }, {
    key: 'enable',
    value: function enable() {
      this.disabled = false;
    }
  }, {
    key: 'disable',
    value: function disable() {
      this.disabled = true;
    }
  }, {
    key: 'isDisabled',
    value: function isDisabled() {
      return this.disabled;
    }
  }, {
    key: 'onDrag',
    value: function onDrag(dragHandler) {
      this.dragHandler = dragHandler;
    }
  }, {
    key: 'startDragging',
    value: function startDragging() {
      var escapeKeyStopsDragging = this.hasOption(ESCAPE_KEY_STOPS_DRAGGING);

      if (escapeKeyStopsDragging) {
        window.onKeyDown(this.keyDownHandler.bind(this));
      }

      this.dragging = true;
    }
  }, {
    key: 'stopDragging',
    value: function stopDragging() {
      var escapeKeyStopsDragging = this.hasOption(ESCAPE_KEY_STOPS_DRAGGING);

      if (escapeKeyStopsDragging) {
        window.offKeyDown(this.keyDownHandler.bind(this));
      }

      this.dragging = false;
    }
  }, {
    key: 'isDragging',
    value: function isDragging() {
      return this.dragging;
    }
  }, {
    key: 'keyDownHandler',
    value: function keyDownHandler(keyCode) {
      if (keyCode === ESCAPE_KEYCODE) {
        var dragging = this.isDragging();

        if (dragging) {
          this.stopDragging();
        }
      }
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      var beforeSizeableElement = properties.beforeSizeableElement,
          afterSizeableElement = properties.afterSizeableElement,
          onDrag = properties.onDrag,
          options = properties.options,
          dragHandler = onDrag; ///

      return Element.fromProperties(Class, properties, beforeSizeableElement, afterSizeableElement, dragHandler, options);
    }
  }]);

  return Splitter;
}(Element);

Object.assign(Splitter, {
  tagName: 'div',
  ignoredProperties: ['beforeSizeableElement', 'afterSizeableElement', 'onDrag', 'options']
});

module.exports = Splitter;

},{"./options":93,"easy":98}],96:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cursor = require('../cursor'),
    Splitter = require('../splitter');

var HorizontalSplitter = function (_Splitter) {
  _inherits(HorizontalSplitter, _Splitter);

  function HorizontalSplitter(selector, beforeSizeableElement, afterSizeableElement, dragHandler, options) {
    _classCallCheck(this, HorizontalSplitter);

    var _this = _possibleConstructorReturn(this, (HorizontalSplitter.__proto__ || Object.getPrototypeOf(HorizontalSplitter)).call(this, selector, beforeSizeableElement, afterSizeableElement, dragHandler, options));

    _this.sizeableElementHeight = null;

    _this.mouseTop = null;
    return _this;
  }

  _createClass(HorizontalSplitter, [{
    key: 'mouseUp',
    value: function mouseUp() {
      var disabled = this.isDisabled();

      if (!disabled) {
        cursor.reset();

        if (this.dragging) {
          this.stopDragging();
        }
      }
    }
  }, {
    key: 'mouseMove',
    value: function mouseMove(mouseTop, mouseLeft) {
      var disabled = this.isDisabled();

      if (!disabled) {
        var dragging = this.isDragging();

        if (dragging) {
          var direction = this.getDirection(),
              sizeableElement = this.getSizeableElement(),
              relativeMouseTop = mouseTop - this.mouseTop,
              height = this.sizeableElementHeight - direction * relativeMouseTop;

          sizeableElement.setHeight(height);

          var sizeableElementHeight = sizeableElement.getHeight();

          if (this.dragHandler) {
            this.dragHandler(sizeableElementHeight);
          }
        }
      }
    }
  }, {
    key: 'mouseDown',
    value: function mouseDown(mouseTop, mouseLeft) {
      var disabled = this.isDisabled();

      if (!disabled) {
        var sizeableElement = this.getSizeableElement();

        cursor.rowResize();

        this.mouseTop = mouseTop;

        this.sizeableElementHeight = sizeableElement.getHeight();

        var dragging = this.isDragging();

        if (!dragging) {
          this.startDragging();
        }
      }
    }
  }, {
    key: 'mouseOver',
    value: function mouseOver() {
      var disabled = this.isDisabled();

      if (!disabled) {
        cursor.rowResize();
      }
    }
  }, {
    key: 'mouseOut',
    value: function mouseOut() {
      var disabled = this.isDisabled();

      if (!disabled) {
        cursor.reset();
      }
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return Splitter.fromProperties(HorizontalSplitter, properties);
    }
  }]);

  return HorizontalSplitter;
}(Splitter);

Object.assign(HorizontalSplitter, {
  defaultProperties: {
    className: 'horizontal splitter'
  }
});

module.exports = HorizontalSplitter;

},{"../cursor":92,"../splitter":95}],97:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cursor = require('../cursor'),
    Splitter = require('../splitter');

var VerticalSplitter = function (_Splitter) {
  _inherits(VerticalSplitter, _Splitter);

  function VerticalSplitter(selector, beforeSizeableElement, afterSizeableElement, dragHandler, options) {
    _classCallCheck(this, VerticalSplitter);

    var _this = _possibleConstructorReturn(this, (VerticalSplitter.__proto__ || Object.getPrototypeOf(VerticalSplitter)).call(this, selector, beforeSizeableElement, afterSizeableElement, dragHandler, options));

    _this.sizeableElementWidth = null;

    _this.mouseLeft = null;
    return _this;
  }

  _createClass(VerticalSplitter, [{
    key: 'mouseUp',
    value: function mouseUp() {
      var disabled = this.isDisabled();

      if (!disabled) {
        cursor.reset();

        if (this.dragging) {
          this.stopDragging();
        }
      }
    }
  }, {
    key: 'mouseMove',
    value: function mouseMove(mouseTop, mouseLeft) {
      var disabled = this.isDisabled();

      if (!disabled) {
        var dragging = this.isDragging();

        if (dragging) {
          var direction = this.getDirection(),
              sizeableElement = this.getSizeableElement(),
              relativeMouseLeft = mouseLeft - this.mouseLeft,
              width = this.sizeableElementWidth - direction * relativeMouseLeft;

          sizeableElement.setWidth(width);

          var sizeableElementWidth = sizeableElement.getWidth();

          if (this.dragHandler) {
            this.dragHandler(sizeableElementWidth);
          }
        }
      }
    }
  }, {
    key: 'mouseDown',
    value: function mouseDown(mouseTop, mouseLeft) {
      var disabled = this.isDisabled();

      if (!disabled) {
        var sizeableElement = this.getSizeableElement();

        cursor.columnResize();

        this.mouseLeft = mouseLeft;

        this.sizeableElementWidth = sizeableElement.getWidth();

        var dragging = this.isDragging();

        if (!dragging) {
          this.startDragging();
        }
      }
    }
  }, {
    key: 'mouseOver',
    value: function mouseOver() {
      var disabled = this.isDisabled();

      if (!disabled) {
        cursor.columnResize();
      }
    }
  }, {
    key: 'mouseOut',
    value: function mouseOut() {
      var disabled = this.isDisabled();

      if (!disabled) {
        cursor.reset();
      }
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return Splitter.fromProperties(VerticalSplitter, properties);
    }
  }]);

  return VerticalSplitter;
}(Splitter);

Object.assign(VerticalSplitter, {
  defaultProperties: {
    className: 'vertical splitter'
  }
});

module.exports = VerticalSplitter;

},{"../cursor":92,"../splitter":95}],98:[function(require,module,exports){
'use strict';

module.exports = {
  window: require('./lib/window'),
  document: require('./lib/document'),
  Div: require('./lib/element/div'),
  Span: require('./lib/element/span'),
  Body: require('./lib/element/body'),
  Link: require('./lib/element/link'),
  Select: require('./lib/element/select'),
  Button: require('./lib/element/button'),
  Checkbox: require('./lib/element/checkbox'),
  Element: require('./lib/element'),
  TextElement: require('./lib/textElement'),
  Input: require('./lib/inputElement/input'),
  Textarea: require('./lib/inputElement/textarea'),
  InputElement: require('./lib/inputElement'),
  Bounds: require('./lib/misc/bounds'),
  Offset: require('./lib/misc/offset'),
  React: require('./lib/react')
};

},{"./lib/document":99,"./lib/element":100,"./lib/element/body":101,"./lib/element/button":102,"./lib/element/checkbox":103,"./lib/element/div":104,"./lib/element/link":105,"./lib/element/select":106,"./lib/element/span":107,"./lib/inputElement":108,"./lib/inputElement/input":109,"./lib/inputElement/textarea":110,"./lib/misc/bounds":111,"./lib/misc/offset":112,"./lib/react":120,"./lib/textElement":121,"./lib/window":122}],99:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var eventMixin = require('./mixin/event'),
    clickMixin = require('./mixin/click'),
    mouseMixin = require('./mixin/mouse'),
    keyMixin = require('./mixin/key');

var Document = function Document() {
  _classCallCheck(this, Document);

  this.domElement = document;
};

Object.assign(Document.prototype, eventMixin);
Object.assign(Document.prototype, clickMixin);
Object.assign(Document.prototype, mouseMixin);
Object.assign(Document.prototype, keyMixin);

module.exports = new Document(); ///

},{"./mixin/click":113,"./mixin/event":114,"./mixin/key":116,"./mixin/mouse":117}],100:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Offset = require('./misc/offset'),
    Bounds = require('./misc/bounds'),
    jsxMixin = require('./mixin/jsx'),
    eventMixin = require('./mixin/event'),
    clickMixin = require('./mixin/click'),
    scrollMixin = require('./mixin/scroll'),
    resizeMixin = require('./mixin/resize'),
    mouseMixin = require('./mixin/mouse'),
    keyMixin = require('./mixin/key');

var Element = function () {
  function Element(selector) {
    _classCallCheck(this, Element);

    this.domElement = domElementFromSelector(selector);

    this.domElement.__element__ = this; ///
  }

  _createClass(Element, [{
    key: 'clone',
    value: function clone() {
      return Element.clone(this);
    }
  }, {
    key: 'getOffset',
    value: function getOffset() {
      var top = this.domElement.offsetTop,
          ///
      left = this.domElement.offsetLeft,
          ///
      offset = new Offset(top, left);

      return offset;
    }
  }, {
    key: 'getBounds',
    value: function getBounds() {
      var boundingClientRect = this.domElement.getBoundingClientRect(),
          bounds = Bounds.fromBoundingClientRect(boundingClientRect);

      return bounds;
    }
  }, {
    key: 'getWidth',
    value: function getWidth() {
      var includeBorder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      var width = includeBorder ? this.domElement.offsetWidth : this.domElement.clientWidth;

      return width;
    }
  }, {
    key: 'setWidth',
    value: function setWidth(width) {
      this.domElement.style.width = width;
    }
  }, {
    key: 'getHeight',
    value: function getHeight() {
      var includeBorder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      var height = includeBorder ? this.domElement.offsetHeight : this.domElement.clientHeight;

      return height;
    }
  }, {
    key: 'setHeight',
    value: function setHeight(height) {
      this.domElement.style.height = height;
    }
  }, {
    key: 'hasAttribute',
    value: function hasAttribute(name) {
      return this.domElement.hasAttribute(name);
    }
  }, {
    key: 'getAttribute',
    value: function getAttribute(name) {
      return this.domElement.getAttribute(name);
    }
  }, {
    key: 'setAttribute',
    value: function setAttribute(name, value) {
      this.domElement.setAttribute(name, value);
    }
  }, {
    key: 'clearAttribute',
    value: function clearAttribute(name) {
      this.domElement.removeAttribute(name);
    }
  }, {
    key: 'addAttribute',
    value: function addAttribute(name, value) {
      this.setAttribute(name, value);
    }
  }, {
    key: 'removeAttribute',
    value: function removeAttribute(name) {
      this.clearAttribute(name);
    }
  }, {
    key: 'setClass',
    value: function setClass(className) {
      this.domElement.className = className;
    }
  }, {
    key: 'addClass',
    value: function addClass(className) {
      this.domElement.classList.add(className);
    }
  }, {
    key: 'removeClass',
    value: function removeClass(className) {
      this.domElement.classList.remove(className);
    }
  }, {
    key: 'toggleClass',
    value: function toggleClass(className) {
      this.domElement.classList.toggle(className);
    }
  }, {
    key: 'hasClass',
    value: function hasClass(className) {
      return this.domElement.classList.contains(className);
    }
  }, {
    key: 'clearClasses',
    value: function clearClasses() {
      this.domElement.className = '';
    }
  }, {
    key: 'prependTo',
    value: function prependTo(parentElement) {
      parentElement.prepend(this);
    }
  }, {
    key: 'appendTo',
    value: function appendTo(parentElement) {
      parentElement.append(this);
    }
  }, {
    key: 'addTo',
    value: function addTo(parentElement) {
      parentElement.add(this);
    }
  }, {
    key: 'removeFrom',
    value: function removeFrom(parentElement) {
      parentElement.remove(this);
    }
  }, {
    key: 'insertBefore',
    value: function insertBefore(siblingElement) {
      var parentDOMNode = siblingElement.domElement.parentNode,
          siblingDOMElement = siblingElement.domElement;

      parentDOMNode.insertBefore(this.domElement, siblingDOMElement);
    }
  }, {
    key: 'insertAfter',
    value: function insertAfter(siblingElement) {
      var parentDOMNode = siblingElement.domElement.parentNode,
          siblingDOMElement = siblingElement.domElement;

      parentDOMNode.insertBefore(this.domElement, siblingDOMElement.nextSibling); ///
    }
  }, {
    key: 'prepend',
    value: function prepend(element) {
      var domElement = element.domElement,
          firstChildDOMElement = this.domElement.firstChild;

      this.domElement.insertBefore(domElement, firstChildDOMElement);
    }
  }, {
    key: 'append',
    value: function append(element) {
      var domElement = element.domElement;

      this.domElement.insertBefore(domElement, null); ///
    }
  }, {
    key: 'add',
    value: function add(element) {
      this.append(element);
    }
  }, {
    key: 'remove',
    value: function remove(element) {
      if (element) {
        var domElement = element.domElement;

        this.domElement.removeChild(domElement);
      } else {
        this.domElement.remove();
      }
    }
  }, {
    key: 'show',
    value: function show() {
      var displayStyle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'block';
      this.domElement.style.display = displayStyle;
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.domElement.style.display = 'none';
    }
  }, {
    key: 'enable',
    value: function enable() {
      this.clearAttribute('disabled');
    }
  }, {
    key: 'disable',
    value: function disable() {
      this.setAttribute('disabled', 'disabled');
    }
  }, {
    key: 'isEnabled',
    value: function isEnabled() {
      var disabled = this.isDisabled(),
          enabled = !disabled;

      return enabled;
    }
  }, {
    key: 'isDisabled',
    value: function isDisabled() {
      var disabled = this.hasAttribute('disabled');

      return disabled;
    }
  }, {
    key: 'html',
    value: function html(_html) {
      if (_html === undefined) {
        var innerHTML = this.domElement.innerHTML;

        _html = innerHTML; ///

        return _html;
      } else {
        var _innerHTML = _html; ///

        this.domElement.innerHTML = _innerHTML;
      }
    }
  }, {
    key: 'css',
    value: function css(_css) {
      if (_css === undefined) {
        var computedStyle = getComputedStyle(this.domElement),
            css = {};

        for (var index = 0; index < computedStyle.length; index++) {
          var name = computedStyle[0],
              ///
          value = computedStyle.getPropertyValue(name); ///

          css[name] = value;
        }

        return css;
      } else if (typeof _css === 'string') {
        var _name = _css; ///

        var _computedStyle = getComputedStyle(this.domElement),
            _value = _computedStyle.getPropertyValue(_name); ///

        _css = _value; ///

        return _css;
      } else {
        var names = Object.keys(_css); ///

        names.forEach(function (name) {
          var value = _css[name];

          this.domElement.style[name] = value;
        }.bind(this));
      }
    }
  }, {
    key: 'blur',
    value: function blur() {
      this.domElement.blur();
    }
  }, {
    key: 'focus',
    value: function focus() {
      this.domElement.focus();
    }
  }, {
    key: 'hasFocus',
    value: function hasFocus() {
      var focus = document.activeElement === this.domElement; ///

      return focus;
    }
  }, {
    key: 'getDescendantElements',
    value: function getDescendantElements() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';

      var domNode = this.domElement,
          ///
      descendantDOMNodes = descendantDOMNodesFromDOMNode(domNode),
          descendantElements = filterDOMNodes(descendantDOMNodes, selector);

      return descendantElements;
    }
  }, {
    key: 'getChildElements',
    value: function getChildElements() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';

      var childDOMNodes = this.domElement.childNodes,
          childDOMElements = filterDOMNodes(childDOMNodes, selector),
          childElements = elementsFromDOMElements(childDOMElements);

      return childElements;
    }
  }, {
    key: 'getParentElement',
    value: function getParentElement() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';

      var parentElement = null;

      var parentDOMElement = this.domElement.parentElement;

      if (parentDOMElement !== null) {
        if (parentDOMElement.matches(selector)) {
          var parentDOMElements = [parentDOMElement],
              parentElements = elementsFromDOMElements(parentDOMElements),
              firstParentElement = first(parentElements);

          parentElement = firstParentElement || null;
        }
      }

      return parentElement;
    }
  }, {
    key: 'getAscendantElements',
    value: function getAscendantElements() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';

      var ascendantDOMElements = [],
          parentDOMElement = this.domElement.parentElement;

      var ascendantDOMElement = parentDOMElement; ///
      while (ascendantDOMElement !== null) {
        if (ascendantDOMElement.matches(selector)) {
          ascendantDOMElements.push(ascendantDOMElement);
        }

        ascendantDOMElement = ascendantDOMElement.parentElement;
      }

      var ascendantElements = elementsFromDOMElements(ascendantDOMElements);

      return ascendantElements;
    }
  }, {
    key: 'getPreviousSiblingElement',
    value: function getPreviousSiblingElement() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';

      var previousSiblingElement = null;

      var previousSiblingDOMNode = this.domElement.previousSibling; ///

      if (previousSiblingDOMNode !== null && domNodeMatchesSelector(previousSiblingDOMNode, selector)) {
        previousSiblingElement = previousSiblingDOMNode.__element__ || null;
      }

      return previousSiblingElement;
    }
  }, {
    key: 'getNextSiblingElement',
    value: function getNextSiblingElement() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';

      var nextSiblingElement = null;

      var nextSiblingDOMNode = this.domElement.nextSibling;

      if (nextSiblingDOMNode !== null && domNodeMatchesSelector(nextSiblingDOMNode, selector)) {
        nextSiblingElement = nextSiblingDOMNode.__element__ || null;
      }

      return nextSiblingElement;
    }
  }], [{
    key: 'clone',
    value: function clone(Class, element) {
      var deep = true,
          domElement = element.domElement.cloneNode(deep);

      for (var _len = arguments.length, remainingArguments = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      remainingArguments.unshift(domElement);
      remainingArguments.unshift(null);

      return new (Function.prototype.bind.apply(Class, remainingArguments))();
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(Class, html) {
      var outerDOMElement = document.createElement('div');

      outerDOMElement.innerHTML = html; ///

      var domElement = outerDOMElement.firstChild;

      for (var _len2 = arguments.length, remainingArguments = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        remainingArguments[_key2 - 2] = arguments[_key2];
      }

      remainingArguments.unshift(domElement);
      remainingArguments.unshift(null);

      return new (Function.prototype.bind.apply(Class, remainingArguments))();
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(Class, domElement) {
      for (var _len3 = arguments.length, remainingArguments = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        remainingArguments[_key3 - 2] = arguments[_key3];
      }

      remainingArguments.unshift(domElement);
      remainingArguments.unshift(null);

      return new (Function.prototype.bind.apply(Class, remainingArguments))();
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      for (var _len4 = arguments.length, remainingArguments = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
        remainingArguments[_key4 - 2] = arguments[_key4];
      }

      var tagName = Class.tagName,
          html = '<' + tagName + ' />',
          element = Element.fromHTML.apply(Element, [Class, html].concat(remainingArguments));

      var defaultProperties = Class.defaultProperties,
          ignoredProperties = Class.ignoredProperties;

      element.applyProperties(properties, defaultProperties, ignoredProperties);

      return element;
    }
  }]);

  return Element;
}();

Object.assign(Element.prototype, jsxMixin);
Object.assign(Element.prototype, eventMixin);
Object.assign(Element.prototype, clickMixin);
Object.assign(Element.prototype, scrollMixin);
Object.assign(Element.prototype, resizeMixin);
Object.assign(Element.prototype, mouseMixin);
Object.assign(Element.prototype, keyMixin);

Object.assign(Element, {
  LEFT_MOUSE_BUTTON: 0,
  MIDDLE_MOUSE_BUTTON: 1,
  RIGHT_MOUSE_BUTTON: 2
});

module.exports = Element;

function domElementFromSelector(selector) {
  var domElement = typeof selector === 'string' ? document.querySelectorAll(selector)[0] : ///
  selector; ///

  return domElement;
}

function elementsFromDOMElements(domElements) {
  var domElementsWithElements = filter(domElements, function (domElement) {
    return domElement.__element__ !== undefined;
  }),
      elements = domElementsWithElements.map(function (domElement) {
    return domElement.__element__;
  });

  return elements;
}

function descendantDOMNodesFromDOMNode(domNode) {
  var descendantDOMNodes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var childDOMNodes = domNode.childNodes; ///

  descendantDOMNodes.concat(childDOMNodes);

  childDOMNodes.forEach(function (childDOMNode) {
    descendantDOMNodesFromDOMNode(childDOMNode, descendantDOMNodes);
  });

  return descendantDOMNodes;
}

function filterDOMNodes(domNodes, selector) {
  var filteredDOMNodes = filter(domNodes, function (domNode) {
    return domNodeMatchesSelector(domNode, selector);
  });

  return filteredDOMNodes;
}

function domNodeMatchesSelector(domNode, selector) {
  var domNodeType = domNode.nodeType;

  switch (domNodeType) {
    case Node.ELEMENT_NODE:
      {
        var domElement = domNode; ///

        return domElement.matches(selector);
      }

    case Node.TEXT_NODE:
      {
        if (selector === '*') {
          return true;
        }
      }
  }

  return false;
}

function filter(array, test) {
  var filteredArray = [];

  for (var index = 0; index < array.length; index++) {
    var element = array[index],
        result = test(element);

    if (result) {
      filteredArray.push(element);
    }
  }

  return filteredArray;
}

function first(array) {
  return array[0];
}

},{"./misc/bounds":111,"./misc/offset":112,"./mixin/click":113,"./mixin/event":114,"./mixin/jsx":115,"./mixin/key":116,"./mixin/mouse":117,"./mixin/resize":118,"./mixin/scroll":119}],101:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element');

var Body = function (_Element) {
  _inherits(Body, _Element);

  function Body() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'body';

    _classCallCheck(this, Body);

    return _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).call(this, selector));
  }

  _createClass(Body, [{
    key: 'clone',
    value: function clone() {
      return Body.clone(this);
    }
  }], [{
    key: 'clone',
    value: function clone(element) {
      return Element.clone(Body, element);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html) {
      return Element.fromHTML(Body, html);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement) {
      return Element.fromDOMElement(Body, domElement);
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return Element.fromProperties(Body, properties);
    }
  }]);

  return Body;
}(Element);

Object.assign(Body, {
  tagName: 'body'
});

module.exports = Body;

},{"../element":100}],102:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element');

var Button = function (_Element) {
  _inherits(Button, _Element);

  function Button(selector, clickHandler) {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, selector));

    if (clickHandler !== undefined) {
      _this.onClick(clickHandler);
    }
    return _this;
  }

  _createClass(Button, [{
    key: 'clone',
    value: function clone(clickHandler) {
      return Button.clone(this, clickHandler);
    }
  }, {
    key: 'onClick',
    value: function onClick(clickHandler) {
      var intermediateClickHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultIntermediateClickHandler;

      _get(Button.prototype.__proto__ || Object.getPrototypeOf(Button.prototype), 'onClick', this).call(this, clickHandler, intermediateClickHandler);
    }
  }, {
    key: 'offClick',
    value: function offClick(clickHandler) {
      _get(Button.prototype.__proto__ || Object.getPrototypeOf(Button.prototype), 'offClick', this).call(this, clickHandler);
    }
  }], [{
    key: 'clone',
    value: function clone(element, clickHandler) {
      return Element.clone(Button, element, clickHandler);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html, clickHandler) {
      return Element.fromHTML(Button, html, clickHandler);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement, clickHandler) {
      return Element.fromDOMElement(Button, domElement, clickHandler);
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var onClick = properties.onClick,
          clickHandler = onClick; ///

      return Element.fromProperties(Button, properties, clickHandler);
    }
  }]);

  return Button;
}(Element);

Object.assign(Button, {
  tagName: 'button',
  ignoredProperties: ['onClick']
});

module.exports = Button;

function defaultIntermediateClickHandler(clickHandler, event, targetElement) {
  var mouseButton = event.button,
      preventDefault = clickHandler(mouseButton, targetElement);

  return preventDefault;
}

},{"../element":100}],103:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element');

var Checkbox = function (_Element) {
  _inherits(Checkbox, _Element);

  function Checkbox(selector, changeHandler, checked) {
    _classCallCheck(this, Checkbox);

    var _this = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, selector));

    if (changeHandler !== undefined) {
      _this.onChange(changeHandler);
    }

    if (checked !== undefined) {
      _this.check(checked);
    }
    return _this;
  }

  _createClass(Checkbox, [{
    key: 'clone',
    value: function clone(changeHandler) {
      return Checkbox.clone(this, changeHandler);
    }
  }, {
    key: 'onChange',
    value: function onChange(changeHandler) {
      var intermediateChangeHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultIntermediateChangeHandler;

      this.on('click', changeHandler, intermediateChangeHandler); ///
    }
  }, {
    key: 'offChange',
    value: function offChange(changeHandler) {
      this.off('click', changeHandler); ///
    }
  }, {
    key: 'check',
    value: function check() {
      var checked = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      checked ? this.setAttribute('checked', 'checked') : this.clearAttribute('checked');
    }
  }, {
    key: 'isChecked',
    value: function isChecked() {
      return this.domElement.checked;
    }
  }, {
    key: 'onResize',
    value: function onResize() {}
  }, {
    key: 'offResize',
    value: function offResize() {}
  }], [{
    key: 'clone',
    value: function clone(element, changeHandler) {
      return Element.clone(Checkbox, element, changeHandler);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html, changeHandler) {
      return Element.fromHTML(Checkbox, html, changeHandler);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement, changeHandler) {
      return Element.fromDOMElement(Checkbox, domElement, changeHandler);
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var onChange = properties.onChange,
          checked = properties.checked,
          changeHandler = onChange; ///    

      return Element.fromProperties(Checkbox, properties, changeHandler, checked);
    }
  }]);

  return Checkbox;
}(Element);

Object.assign(Checkbox, {
  tagName: 'input',
  ignoredProperties: ['onChange', 'checked'],
  defaultProperties: {
    type: 'checkbox'
  }
});

module.exports = Checkbox;

function defaultIntermediateChangeHandler(changeHandler, event, targetElement) {
  var checkbox = targetElement,
      ///
  checked = checkbox.isChecked(),
      preventDefault = changeHandler(checked, targetElement);

  return preventDefault;
}

},{"../element":100}],104:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element');

var Div = function (_Element) {
  _inherits(Div, _Element);

  function Div(selector) {
    _classCallCheck(this, Div);

    return _possibleConstructorReturn(this, (Div.__proto__ || Object.getPrototypeOf(Div)).call(this, selector));
  }

  _createClass(Div, [{
    key: 'clone',
    value: function clone() {
      return Div.clone(this);
    }
  }], [{
    key: 'clone',
    value: function clone(element) {
      return Element.clone(Div, element);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html) {
      return Element.fromHTML(Div, html);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement) {
      return Element.fromDOMElement(Div, domElement);
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return Element.fromProperties(Div, properties);
    }
  }]);

  return Div;
}(Element);

Object.assign(Div, {
  tagName: 'div'
});

module.exports = Div;

},{"../element":100}],105:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element');

var Link = function (_Element) {
  _inherits(Link, _Element);

  function Link(selector, clickHandler) {
    _classCallCheck(this, Link);

    var _this = _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).call(this, selector));

    if (clickHandler !== undefined) {
      _this.onClick(clickHandler);
    }
    return _this;
  }

  _createClass(Link, [{
    key: 'clone',
    value: function clone(clickHandler) {
      return Link.clone(this, clickHandler);
    }
  }, {
    key: 'onClick',
    value: function onClick(clickHandler) {
      var intermediateClickHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultIntermediateClickHandler;

      this.on('click', clickHandler, intermediateClickHandler);
    }
  }, {
    key: 'offClick',
    value: function offClick(clickHandler) {
      this.off('click', clickHandler);
    }
  }], [{
    key: 'clone',
    value: function clone(element, clickHandler) {
      return Element.clone(Link, element, clickHandler);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html, clickHandler) {
      return Element.fromHTML(Link, html, clickHandler);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement, clickHandler) {
      return Element.fromDOMElement(Link, domElement, clickHandler);
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var onClick = properties.onClick,
          clickHandler = onClick; ///    

      return Element.fromProperties(Link, properties, clickHandler);
    }
  }]);

  return Link;
}(Element);

Object.assign(Link, {
  tagName: 'a',
  ignoredProperties: ['onClick']
});

module.exports = Link;

function defaultIntermediateClickHandler(clickHandler, event, targetElement) {
  var link = targetElement,
      ///
  href = link.getAttribute('href'),
      preventDefault = clickHandler(href, targetElement);

  return preventDefault;
}

},{"../element":100}],106:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element');

var Select = function (_Element) {
  _inherits(Select, _Element);

  function Select(selector, changeHandler) {
    _classCallCheck(this, Select);

    var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, selector));

    if (changeHandler !== undefined) {
      _this.onChange(changeHandler);
    }
    return _this;
  }

  _createClass(Select, [{
    key: 'clone',
    value: function clone(changeHandler) {
      return Select.clone(this, changeHandler);
    }
  }, {
    key: 'onChange',
    value: function onChange(changeHandler) {
      var intermediateChangeHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultIntermediateChangeHandler;

      this.on('change', changeHandler, intermediateChangeHandler);
    }
  }, {
    key: 'offChange',
    value: function offChange(changeHandler) {
      this.off('change', changeHandler);
    }
  }, {
    key: 'getSelectedOptionValue',
    value: function getSelectedOptionValue() {
      var selectedOptionValue = this.domElement.value; ///

      return selectedOptionValue;
    }
  }, {
    key: 'setSelectedOptionByValue',
    value: function setSelectedOptionByValue(selectedOptionValue) {
      var value = selectedOptionValue; ///

      this.domElement.value = value;
    }
  }], [{
    key: 'clone',
    value: function clone(element, changeHandler) {
      return Element.clone(Select, element, changeHandler);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html, changeHandler) {
      return Element.fromHTML(Select, html, changeHandler);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement, changeHandler) {
      return Element.fromDOMElement(Select, domElement, changeHandler);
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var onChange = properties.onChange,
          changeHandler = onChange; ///    

      return Element.fromProperties(Select, properties, changeHandler);
    }
  }]);

  return Select;
}(Element);

Object.assign(Select, {
  tagName: 'select',
  ignoredProperties: ['onChange']
});

module.exports = Select;

function defaultIntermediateChangeHandler(changeHandler, event, targetElement) {
  var select = targetElement,
      ///
  selectedOptionValue = select.getSelectedOptionValue(),
      preventDefault = changeHandler(selectedOptionValue, targetElement);

  return preventDefault;
}

},{"../element":100}],107:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element');

var Span = function (_Element) {
  _inherits(Span, _Element);

  function Span() {
    _classCallCheck(this, Span);

    return _possibleConstructorReturn(this, (Span.__proto__ || Object.getPrototypeOf(Span)).apply(this, arguments));
  }

  _createClass(Span, [{
    key: 'clone',
    value: function clone() {
      return Span.clone(this);
    }
  }, {
    key: 'onResize',
    value: function onResize() {}
  }, {
    key: 'offResize',
    value: function offResize() {}
  }], [{
    key: 'clone',
    value: function clone(element) {
      return Element.clone(Span, element);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html) {
      return Element.fromHTML(Span, html);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement) {
      return Element.fromDOMElement(Span, domElement);
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return Element.fromProperties(properties);
    }
  }]);

  return Span;
}(Element);

Object.assign(Span, {
  tagName: 'span'
});

module.exports = Span;

},{"../element":100}],108:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('./element');

var InputElement = function (_Element) {
  _inherits(InputElement, _Element);

  function InputElement(selector, changeHandler) {
    _classCallCheck(this, InputElement);

    var _this = _possibleConstructorReturn(this, (InputElement.__proto__ || Object.getPrototypeOf(InputElement)).call(this, selector));

    if (changeHandler !== undefined) {
      _this.onChange(changeHandler);
    }
    return _this;
  }

  _createClass(InputElement, [{
    key: 'onResize',
    value: function onResize() {}
  }, {
    key: 'offResize',
    value: function offResize() {}
  }, {
    key: 'onChange',
    value: function onChange(changeHandler) {
      var intermediateChangeHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultIntermediateChangeHandler;

      this.on('change', changeHandler, intermediateChangeHandler);
    }
  }, {
    key: 'offChange',
    value: function offChange(changeHandler) {
      this.off('change', changeHandler);
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.domElement.value;
    }
  }, {
    key: 'getSelectionStart',
    value: function getSelectionStart() {
      return this.domElement.selectionStart;
    }
  }, {
    key: 'getSelectionEnd',
    value: function getSelectionEnd() {
      return this.domElement.selectionEnd;
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.domElement.value = value;
    }
  }, {
    key: 'setSelectionStart',
    value: function setSelectionStart(selectionStart) {
      this.domElement.selectionStart = selectionStart;
    }
  }, {
    key: 'setSelectionEnd',
    value: function setSelectionEnd(selectionEnd) {
      this.domElement.selectionEnd = selectionEnd;
    }
  }, {
    key: 'select',
    value: function select() {
      this.domElement.select();
    }
  }], [{
    key: 'clone',
    value: function clone(Class, element) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      return Element.clone.apply(Element, [Class, element].concat(remainingArguments));
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(Class, html) {
      for (var _len2 = arguments.length, remainingArguments = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        remainingArguments[_key2 - 2] = arguments[_key2];
      }

      return Element.fromHTML.apply(Element, [Class, html].concat(remainingArguments));
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(Class, domElement) {
      for (var _len3 = arguments.length, remainingArguments = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        remainingArguments[_key3 - 2] = arguments[_key3];
      }

      return Element.fromDOMElement.apply(Element, [Class, domElement].concat(remainingArguments));
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      var onChange = properties.onChange,
          changeHandler = onChange; ///

      for (var _len4 = arguments.length, remainingArguments = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
        remainingArguments[_key4 - 2] = arguments[_key4];
      }

      return Element.fromProperties.apply(Element, [Class, properties, changeHandler].concat(remainingArguments));
    }
  }]);

  return InputElement;
}(Element);

Object.assign(InputElement, {
  ignoredProperties: ['onChange']
});

module.exports = InputElement;

function defaultIntermediateChangeHandler(changeHandler, event, targetElement) {
  var inputElement = targetElement,
      ///
  value = inputElement.getValue(),
      preventDefault = changeHandler(value, targetElement);

  return preventDefault;
}

},{"./element":100}],109:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputElement = require('../inputElement');

var Input = function (_InputElement) {
  _inherits(Input, _InputElement);

  function Input() {
    _classCallCheck(this, Input);

    return _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));
  }

  _createClass(Input, [{
    key: 'clone',
    value: function clone(changeHandler) {
      return Input.clone(this, changeHandler);
    }
  }], [{
    key: 'clone',
    value: function clone(element, changeHandler) {
      return InputElement.clone(Input, element, changeHandler);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html, changeHandler) {
      return InputElement.fromHTML(Input, html, changeHandler);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement, changeHandler) {
      return InputElement.fromDOMElement(Input, domElement, changeHandler);
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return InputElement.fromProperties(Input, properties);
    }
  }]);

  return Input;
}(InputElement);

Object.assign(Input, {
  tagName: 'input'
});

module.exports = Input;

},{"../inputElement":108}],110:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputElement = require('../inputElement');

var Textarea = function (_InputElement) {
  _inherits(Textarea, _InputElement);

  function Textarea() {
    _classCallCheck(this, Textarea);

    return _possibleConstructorReturn(this, (Textarea.__proto__ || Object.getPrototypeOf(Textarea)).apply(this, arguments));
  }

  _createClass(Textarea, [{
    key: 'clone',
    value: function clone(changeHandler) {
      return Textarea.clone(this, changeHandler);
    }
  }], [{
    key: 'clone',
    value: function clone(element, changeHandler) {
      return InputElement.clone(Textarea, element, changeHandler);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html, changeHandler) {
      return InputElement.fromHTML(Textarea, html, changeHandler);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement, changeHandler) {
      return InputElement.fromDOMElement(Textarea, domElement, changeHandler);
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return InputElement.fromProperties(Textarea, properties);
    }
  }]);

  return Textarea;
}(InputElement);

Object.assign(Textarea, {
  tagName: 'textarea'
});

module.exports = Textarea;

},{"../inputElement":108}],111:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bounds = function () {
  function Bounds(top, left, bottom, right) {
    _classCallCheck(this, Bounds);

    this.top = top;
    this.left = left;
    this.bottom = bottom;
    this.right = right;
  }

  _createClass(Bounds, [{
    key: 'getTop',
    value: function getTop() {
      return this.top;
    }
  }, {
    key: 'getLeft',
    value: function getLeft() {
      return this.left;
    }
  }, {
    key: 'getBottom',
    value: function getBottom() {
      return this.bottom;
    }
  }, {
    key: 'getRight',
    value: function getRight() {
      return this.right;
    }
  }, {
    key: 'isOverlappingMouse',
    value: function isOverlappingMouse(mouseTop, mouseLeft) {
      return this.top < mouseTop && this.left < mouseLeft && this.bottom > mouseTop && this.right > mouseLeft;
    }
  }, {
    key: 'areOverlapping',
    value: function areOverlapping(bounds) {
      return this.top < bounds.bottom && this.left < bounds.right && this.bottom > bounds.top && this.right > bounds.left;
    }
  }], [{
    key: 'fromBoundingClientRect',
    value: function fromBoundingClientRect(boundingClientRect) {
      var windowScrollTop = window.pageYOffset,
          ///
      windowScrollLeft = window.pageXOffset,
          ///
      top = boundingClientRect.top + windowScrollTop,
          left = boundingClientRect.left + windowScrollLeft,
          bottom = boundingClientRect.bottom + windowScrollTop,
          right = boundingClientRect.right + windowScrollLeft,
          bounds = new Bounds(top, left, bottom, right);

      return bounds;
    }
  }]);

  return Bounds;
}();

module.exports = Bounds;

},{}],112:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Offset = function () {
  function Offset(top, left) {
    _classCallCheck(this, Offset);

    this.top = top;
    this.left = left;
  }

  _createClass(Offset, [{
    key: 'getTop',
    value: function getTop() {
      return this.top;
    }
  }, {
    key: 'getLeft',
    value: function getLeft() {
      return this.left;
    }
  }]);

  return Offset;
}();

module.exports = Offset;

},{}],113:[function(require,module,exports){
'use strict';

function onClick(handler) {
  var intermediateHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultIntermediateHandler;

  this.on('click', handler, intermediateHandler);
}

function offClick(handler) {
  this.off('click', handler);
}

var clickMixin = {
  onClick: onClick,
  offClick: offClick
};

module.exports = clickMixin;

function defaultIntermediateHandler(handler, event, targetElement) {
  var mouseTop = event.pageY,
      ///
  mouseLeft = event.pageX,
      ///
  mouseButton = event.button,
      ///
  preventDefault = handler(mouseTop, mouseLeft, mouseButton, targetElement);

  return preventDefault;
}

},{}],114:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function on(eventTypes, handler, intermediateHandler) {
  eventTypes = eventTypes.split(' '); ///

  eventTypes.forEach(function (eventType) {
    onEvent(this, eventType, handler, intermediateHandler);
  }.bind(this));
}

function off(eventTypes, handler) {
  eventTypes = eventTypes.split(' '); ///

  eventTypes.forEach(function (eventType) {
    offEvent(this, eventType, handler);
  }.bind(this));
}

var eventMixin = {
  on: on,
  off: off
};

module.exports = eventMixin;

function onEvent(element, eventType, handler, intermediateHandler) {
  if (!element.hasOwnProperty('eventObjectMap')) {
    var eventObjectMap = {};

    Object.assign(element, {
      eventObjectMap: eventObjectMap
    });
  }

  var eventObject = element.eventObjectMap[eventType];

  if (!eventObject) {
    eventObject = createEventObject();

    element.eventObjectMap[eventType] = eventObject;
  }

  eventObject.addHandler(element, eventType, handler, intermediateHandler);
}

function offEvent(element, eventType, handler) {
  var eventObject = element.eventObjectMap[eventType],
      noneRemaining = eventObject.removeHandler(element, eventType, handler);

  if (noneRemaining) {
    delete element.eventObjectMap[eventType];
  }

  var eventTypes = Object.keys(element.eventObjectMap);

  if (eventTypes.length === 0) {
    delete element.eventObjectMap;
  }
}

function createEventObject() {
  var eventListeners = [];

  function addHandler(element, eventType, handler, intermediateHandler) {
    var targetElement = element,
        ///
    eventListener = createEventListener(handler, intermediateHandler, targetElement);

    element.domElement.addEventListener(eventType, eventListener);

    eventListeners.push(eventListener);
  }

  function removeHandler(element, eventType) {
    var handler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    if (handler === null) {
      eventListeners.forEach(function (eventListener) {
        element.domElement.removeEventListener(eventType, eventListener);
      });

      var start = 0;

      eventListeners.splice(start);
    } else {
      var index = indexOfEventListener(eventListeners, handler),
          eventListener = eventListeners[index];

      element.domElement.removeEventListener(eventType, eventListener);

      var _start = index,
          ///
      deleteCount = 1;

      eventListeners.splice(_start, deleteCount);
    }

    var noneRemaining = eventListeners.length === 0; ///

    return noneRemaining;
  }

  return {
    addHandler: addHandler,
    removeHandler: removeHandler
  };
}

function createEventListener(handler, intermediateHandler, targetElement) {
  if ((typeof intermediateHandler === 'undefined' ? 'undefined' : _typeof(intermediateHandler)) === 'object') {
    var object = intermediateHandler; ///

    intermediateHandler = createBindingIntermediateHandler(object); ///
  }

  var eventListener = function eventListener(event) {
    var preventDefault = intermediateHandler !== undefined ? intermediateHandler(handler, event, targetElement) : handler(event, targetElement);

    if (preventDefault === true) {
      event.preventDefault();
    }

    event.stopPropagation();
  };

  Object.assign(eventListener, {
    handler: handler
  });

  return eventListener;
}

function createBindingIntermediateHandler(object) {
  var bindingIntermediateHandler = function bindingIntermediateHandler(handler, event, targetElement) {
    var preventDefault = handler.call(object, event, targetElement);

    return preventDefault;
  };

  return bindingIntermediateHandler;
}

function indexOfEventListener(eventListeners, handler) {
  var foundIndex = undefined; ///

  eventListeners.forEach(function (eventListener, index) {
    if (eventListener.handler === handler) {
      ///
      foundIndex = index;
    }
  });

  var index = foundIndex; ///

  return index;
}

},{}],115:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var TextElement = require('../textElement');

function addTo(parentElement) {
  updateParentContext(this, parentElement);

  parentElement.add(this);
}

function appendTo(parentElement) {
  updateParentContext(this, parentElement);

  parentElement.append(this);
}

function prependTo(parentElement) {
  updateParentContext(this, parentElement);

  parentElement.prepend(this);
}

function removeFrom(parentElement) {
  parentElement.remove(this);
}

function assignContext() {
  var names = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object.keys(this.context);
  var thenDelete = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  names.forEach(function (name) {
    var value = this.context[name],
        descriptor = {
      value: value
    };

    Object.defineProperty(this, name, descriptor);

    if (thenDelete) {
      delete this.context[name];
    }
  }.bind(this));

  if (thenDelete) {
    var _names = Object.keys(this.context),
        namesLength = _names.length; ///

    if (namesLength === 0) {
      delete this.context;
    }
  }
}

function applyProperties() {
  var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaultProperties = arguments[1];
  var ignoredProperties = arguments[2];

  assign(properties, defaultProperties);

  var childElements = childElementsFromElementAndProperties(this, properties);

  unassign(properties, ignoredProperties);

  var names = Object.keys(properties);

  names.forEach(function (name) {
    var value = properties[name];

    if (false) {} else if (isHandlerName(name)) {
      addHandler(this, name, value);
    } else if (isAttributeName(name)) {
      addAttribute(this, name, value);
    } else {
      if (!this.hasOwnProperty('properties')) {
        var _properties = {};

        Object.assign(this, {
          properties: _properties
        });
      }

      this.properties[name] = value;
    }
  }.bind(this));

  var parentElement = this; ///

  childElements.forEach(function (childElement) {
    childElement.addTo(parentElement);
  }.bind(this));
}

function getProperties() {
  return this.properties;
}

function getContext() {
  return this.context;
}

function getState() {
  return this.state;
}

function setState(state) {
  this.state = state;
}

function fromState(name) {
  var value = this.state[name];

  return value;
}

function updateState(update) {
  Object.assign(this.state, update);
}

var jsxMixin = {
  addTo: addTo,
  appendTo: appendTo,
  prependTo: prependTo,
  removeFrom: removeFrom,
  assignContext: assignContext,
  applyProperties: applyProperties,
  getProperties: getProperties,
  getContext: getContext,
  getState: getState,
  setState: setState,
  fromState: fromState,
  updateState: updateState
};

module.exports = jsxMixin;

function childElementsFromElementAndProperties(element, properties) {
  var childElements = element.childElements ? element.childElements(properties) : properties.childElements;

  childElements = childElements !== undefined ? childElements instanceof Array ? childElements : [childElements] : [];

  childElements = childElements.map(function (childElement) {
    if (typeof childElement === 'string') {
      var text = childElement,
          ///
      textElement = new TextElement(text);

      childElement = textElement; ///
    }

    return childElement;
  });

  return childElements;
}

function unassign(properties) {
  var ignoredProperties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var ignoredPropertyNames = ignoredProperties; ///

  ignoredPropertyNames.forEach(function (ignoredPropertyName) {
    if (properties.hasOwnProperty(ignoredPropertyName)) {
      delete properties[ignoredPropertyName];
    }
  });
}

function assign(properties) {
  var defaultProperties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var defaultPropertyNames = Object.keys(defaultProperties);

  defaultPropertyNames.forEach(function (defaultPropertyName) {
    if (!properties.hasOwnProperty(defaultPropertyName)) {
      var defaultPropertyValue = defaultProperties[defaultPropertyName];

      properties[defaultPropertyName] = defaultPropertyValue;
    }
  });
}

function addHandler(element, name, value) {
  var eventType = name.substr(2).toLowerCase(),
      ///
  handler = value; ///

  element.on(eventType, handler);
}

function addAttribute(element, name, value) {
  if (name === 'className') {
    name = 'class';
  }

  if (name === 'htmlFor') {
    name = 'for';
  }

  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
    var keys = Object.keys(value);

    keys.forEach(function (key) {
      element.domElement[name][key] = value[key];
    }.bind(this));
  } else if (typeof value === 'boolean') {
    if (value) {
      value = name; ///

      element.addAttribute(name, value);
    }
  } else {
    element.addAttribute(name, value);
  }
}

function updateParentContext(element, parentElement) {
  var parentContext = element.parentContext ? element.parentContext() : element.context;

  if (parentContext !== undefined) {
    if (!parentElement.hasOwnProperty('context')) {
      var context = {};

      Object.assign(parentElement, {
        context: context
      });
    }

    parentElement.context = Object.assign(parentElement.context, parentContext);
  }

  var prototype = Object.getPrototypeOf(element),
      prototypeConstructor = prototype.constructor,
      ///
  prototypeConstructorName = prototypeConstructor.name; ///

  if (prototypeConstructorName === 'Element') {
    delete element.context;
  }
}

function isHandlerName(name) {
  return name.match(/^on/);
}

function isAttributeName(name) {
  return attributeNames.includes(name);
}

var attributeNames = ['accept', 'acceptCharset', 'accessKey', 'action', 'allowFullScreen', 'allowTransparency', 'alt', 'async', 'autoComplete', 'autoFocus', 'autoPlay', 'capture', 'cellPadding', 'cellSpacing', 'challenge', 'charSet', 'checked', 'cite', 'classID', 'className', 'colSpan', 'cols', 'content', 'contentEditable', 'contextMenu', 'controls', 'coords', 'crossOrigin', 'data', 'dateTime', 'default', 'defer', 'dir', 'disabled', 'download', 'draggable', 'encType', 'form', 'formAction', 'formEncType', 'formMethod', 'formNoValidate', 'formTarget', 'frameBorder', 'headers', 'height', 'hidden', 'high', 'href', 'hrefLang', 'htmlFor', 'httpEquiv', 'icon', 'id', 'inputMode', 'integrity', 'is', 'keyParams', 'keyType', 'kind', 'label', 'lang', 'list', 'loop', 'low', 'manifest', 'marginHeight', 'marginWidth', 'max', 'maxLength', 'media', 'mediaGroup', 'method', 'min', 'minLength', 'multiple', 'muted', 'name', 'noValidate', 'nonce', 'open', 'optimum', 'pattern', 'placeholder', 'poster', 'preload', 'profile', 'radioGroup', 'readOnly', 'rel', 'required', 'reversed', 'role', 'rowSpan', 'rows', 'sandbox', 'scope', 'scoped', 'scrolling', 'seamless', 'selected', 'shape', 'size', 'sizes', 'span', 'spellCheck', 'src', 'srcDoc', 'srcLang', 'srcSet', 'start', 'step', 'style', 'summary', 'tabIndex', 'target', 'title', 'type', 'useMap', 'value', 'width', 'wmode', 'wrap'];

},{"../textElement":121}],116:[function(require,module,exports){
'use strict';

function onKeyUp(handler) {
  var intermediateHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultIntermediateHandler;

  this.on('keyup', handler, intermediateHandler);
}

function onKeyDown(handler) {
  var intermediateHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultIntermediateHandler;

  this.on('keydown', handler, intermediateHandler);
}

function offKeyUp(handler) {
  this.off('keyup', handler);
}

function offKeyDown(handler) {
  this.off('keydown', handler);
}

var keyMixin = {
  onKeyUp: onKeyUp,
  onKeyDown: onKeyDown,
  offKeyUp: offKeyUp,
  offKeyDown: offKeyDown
};

module.exports = keyMixin;

function defaultIntermediateHandler(handler, event, targetElement) {
  var keyCode = event.keyCode,
      preventDefault = handler(keyCode, targetElement);

  return preventDefault;
}

},{}],117:[function(require,module,exports){
'use strict';

function onMouseUp(handler) {
  var intermediateHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultIntermediateHandler;

  this.on('mouseup', handler, intermediateHandler);
}

function onMouseDown(handler) {
  var intermediateHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultIntermediateHandler;

  this.on('mousedown', handler, intermediateHandler);
}

function onMouseOver(handler) {
  var intermediateHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultIntermediateHandler;

  this.on('mouseover', handler, intermediateHandler);
}

function onMouseOut(handler) {
  var intermediateHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultIntermediateHandler;

  this.on('mouseout', handler, intermediateHandler);
}

function onMouseMove(handler) {
  var intermediateHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultIntermediateHandler;

  this.on('mousemove', handler, intermediateHandler);
}

function offMouseUp(handler) {
  this.off('mouseup', handler);
}

function offMouseDown(handler) {
  this.off('mousedown', handler);
}

function offMouseOver(handler) {
  this.off('mouseover', handler);
}

function offMouseOut(handler) {
  this.off('mouseout', handler);
}

function offMouseMove(handler) {
  this.off('mousemove', handler);
}

var mouseMixin = {
  onMouseUp: onMouseUp,
  onMouseDown: onMouseDown,
  onMouseOver: onMouseOver,
  onMouseOut: onMouseOut,
  onMouseMove: onMouseMove,
  offMouseUp: offMouseUp,
  offMouseDown: offMouseDown,
  offMouseOver: offMouseOver,
  offMouseOut: offMouseOut,
  offMouseMove: offMouseMove
};

module.exports = mouseMixin;

function defaultIntermediateHandler(handler, event, targetElement) {
  var mouseTop = event.pageY,
      ///
  mouseLeft = event.pageX,
      ///
  mouseButton = event.button,
      ///
  preventDefault = handler(mouseTop, mouseLeft, mouseButton, targetElement);

  return preventDefault;
}

},{}],118:[function(require,module,exports){
'use strict';

function onResize(handler) {
  var eventType = 'resize',
      addEventListener = this.on(eventType, handler);

  if (addEventListener) {
    appendResizeObject(this);
  }
}

function offResize(handler) {
  var eventType = 'resize',
      removeEventListener = this.off(eventType, handler);

  if (removeEventListener) {
    removeResizeObject(this);
  }
}

var resizeMixin = {
  onResize: onResize,
  offResize: offResize
};

module.exports = resizeMixin;

function appendResizeObject(element) {
  var resizeObject = document.createElement('object'),
      domElement = element.domElement,
      style = 'display: block; \n                 position: absolute; \n                 top: 0; \n                 left: 0; \n                 height: 100%; \n                 width: 100%; \n                 overflow: hidden; \n                 pointer-events: none; \n                 z-index: -1;';

  resizeObject.setAttribute('style', style);
  resizeObject.data = 'about:blank';
  resizeObject.type = 'text/html';

  element.__resizeObject__ = resizeObject;

  resizeObject.onload = function () {
    resizeObjectLoadHandler(element);
  };

  domElement.appendChild(resizeObject);
}

function removeResizeObject(element) {
  var domElement = element.domElement,
      resizeObject = element.__resizeObject__,
      objectWindow = resizeObject.contentDocument.defaultView; ///

  objectWindow.removeEventListener('resize', resizeListener);

  domElement.removeChild(resizeObject);
}

function resizeObjectLoadHandler(element) {
  var resizeObject = element.__resizeObject__,
      resizeObjectWindow = resizeObject.contentDocument.defaultView; ///

  resizeObjectWindow.addEventListener('resize', function () {
    eventListener(element);
  });
}

function eventListener(element) {
  var width = element.getWidth(),
      height = element.getHeight(),
      targetElement = element,
      ///
  handlers = element.handlersMap['resize'];

  handlers.forEach(function (handler) {
    handler(width, height, targetElement);
  });
}

},{}],119:[function(require,module,exports){
'use strict';

function onScroll(handler) {
  var intermediateHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultIntermediateHandler;

  this.on('scroll', handler, intermediateHandler);
}

function offScroll(handler) {
  this.off('scroll', handler);
}

function getScrollTop() {
  return this.domElement.scrollTop;
}

function getScrollLeft() {
  return this.domElement.scrollLeft;
}

function setScrollTop(scrollTop) {
  this.domElement.scrollTop = scrollTop;
}

function setScrollLeft(scrollLeft) {
  this.domElement.scrollLeft = scrollLeft;
}

var scrollMixin = {
  onScroll: onScroll,
  offScroll: offScroll,
  getScrollTop: getScrollTop,
  getScrollLeft: getScrollLeft,
  setScrollTop: setScrollTop,
  setScrollLeft: setScrollLeft
};

module.exports = scrollMixin;

function defaultIntermediateHandler(handler, event, targetElement) {
  var scrollTop = targetElement.getScrollTop(),
      scrollLeft = targetElement.getScrollLeft(),
      preventDefault = handler(scrollTop, scrollLeft, targetElement);

  return preventDefault;
}

},{}],120:[function(require,module,exports){
'use strict';

var Element = require('./element'),
    TextElement = require('./textElement');

function createElement(firstArgument, properties) {
  var element = null;

  if (firstArgument !== undefined) {
    for (var _len = arguments.length, childArguments = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      childArguments[_key - 2] = arguments[_key];
    }

    var childElements = childElementsFromChildArguments(childArguments);

    properties = Object.assign({
      childElements: childElements
    }, properties);

    if (false) {} else if (isSubclassOf(firstArgument, Element)) {
      var Class = firstArgument; ///

      element = Class.fromProperties(properties);
    } else if (typeof firstArgument === 'function') {
      var elementFunction = firstArgument; ///

      element = elementFunction(properties);
    } else if (typeof firstArgument === 'string') {
      var tagName = firstArgument,
          ///
      html = '<' + tagName + ' />';

      element = Element.fromHTML(Element, html);

      element.applyProperties(properties);
    }
  }

  return element;
}

var React = {
  createElement: createElement
};

module.exports = React;

function childElementsFromChildArguments(childArguments) {
  childArguments = childArguments.reduce(function (childArguments, childArgument) {
    childArguments = childArguments.concat(childArgument);

    return childArguments;
  }, []);

  var childElements = childArguments.map(function (childArgument) {
    var childElement = void 0;

    if (typeof childArgument === 'string') {
      var text = childArgument,
          ///
      textElement = new TextElement(text);

      childElement = textElement;
    } else {
      childElement = childArgument; ///
    }

    return childElement;
  });

  return childElements;
}

function isSubclassOf(argument, Class) {
  var typeOf = false;

  if (argument.name === Class.name) {
    ///
    typeOf = true;
  } else {
    argument = Object.getPrototypeOf(argument); ///

    if (argument) {
      typeOf = isSubclassOf(argument, Class);
    }
  }

  return typeOf;
}

},{"./element":100,"./textElement":121}],121:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Offset = require('./misc/offset'),
    Bounds = require('./misc/bounds');

var TextElement = function () {
  function TextElement(text) {
    _classCallCheck(this, TextElement);

    this.domElement = document.createTextNode(text); ///

    this.domElement.__element__ = this;
  }

  _createClass(TextElement, [{
    key: 'clone',
    value: function clone() {
      return TextElement.clone(this);
    }
  }, {
    key: 'getText',
    value: function getText() {
      var nodeValue = this.domElement.nodeValue,
          text = nodeValue; ///

      return text;
    }
  }, {
    key: 'setText',
    value: function setText(text) {
      var nodeValue = text; ///

      this.domElement.nodeValue = nodeValue;
    }
  }, {
    key: 'getOffset',
    value: function getOffset() {
      var top = this.domElement.offsetTop,
          ///
      left = this.domElement.offsetLeft,
          ///
      offset = new Offset(top, left);

      return offset;
    }
  }, {
    key: 'getBounds',
    value: function getBounds() {
      var boundingClientRect = this.domElement.getBoundingClientRect(),
          bounds = Bounds.fromBoundingClientRect(boundingClientRect);

      return bounds;
    }
  }, {
    key: 'getWidth',
    value: function getWidth() {
      var width = this.domElement.clientWidth;

      return width;
    }
  }, {
    key: 'getHeight',
    value: function getHeight() {
      var height = this.domElement.clientHeight;

      return height;
    }
  }, {
    key: 'prependTo',
    value: function prependTo(parentElement) {
      parentElement.prepend(this);
    }
  }, {
    key: 'appendTo',
    value: function appendTo(parentElement) {
      parentElement.append(this);
    }
  }, {
    key: 'addTo',
    value: function addTo(parentElement) {
      parentElement.add(this);
    }
  }, {
    key: 'removeFrom',
    value: function removeFrom(parentElement) {
      parentElement.remove(this);
    }
  }, {
    key: 'insertBefore',
    value: function insertBefore(siblingElement) {
      var parentDOMNode = siblingElement.domElement.parentNode,
          siblingDOMElement = siblingElement.domElement;

      parentDOMNode.insertBefore(this.domElement, siblingDOMElement);
    }
  }, {
    key: 'insertAfter',
    value: function insertAfter(siblingElement) {
      var parentDOMNode = siblingElement.domElement.parentNode,
          siblingDOMElement = siblingElement.domElement;

      parentDOMNode.insertBefore(this.domElement, siblingDOMElement.nextSibling); ///
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.domElement.remove();
    }
  }]);

  return TextElement;
}();

module.exports = TextElement;

},{"./misc/bounds":111,"./misc/offset":112}],122:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var eventMixin = require('./mixin/event'),
    clickMixin = require('./mixin/click'),
    mouseMixin = require('./mixin/mouse'),
    keyMixin = require('./mixin/key');

var Window = function () {
  function Window() {
    _classCallCheck(this, Window);

    this.domElement = window;
  }

  _createClass(Window, [{
    key: 'assign',
    value: function assign() {
      var target = this.domElement; ///

      for (var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++) {
        sources[_key] = arguments[_key];
      }

      Object.assign.apply(Object, [target].concat(sources));
    }
  }, {
    key: 'getWidth',
    value: function getWidth() {
      return this.domElement.innerWidth;
    } ///

  }, {
    key: 'getHeight',
    value: function getHeight() {
      return this.domElement.innerHeight;
    } ///

  }, {
    key: 'getScrollTop',
    value: function getScrollTop() {
      return this.domElement.pageYOffset;
    } ///

  }, {
    key: 'getScrollLeft',
    value: function getScrollLeft() {
      return this.domElement.pageXOffset;
    } ///

  }, {
    key: 'onResize',
    value: function onResize(handler) {
      if (handler.intermediateHandler === undefined) {
        handler.intermediateHandler = defaultIntermediateResizeHandler;
      }

      var eventType = 'resize';

      this.on(eventType, handler);
    }
  }, {
    key: 'offResize',
    value: function offResize(handler) {
      var eventType = 'resize';

      this.off(eventType, handler);
    }
  }]);

  return Window;
}();

Object.assign(Window.prototype, eventMixin);
Object.assign(Window.prototype, clickMixin);
Object.assign(Window.prototype, mouseMixin);
Object.assign(Window.prototype, keyMixin);

module.exports = new Window(); ///

function defaultIntermediateResizeHandler(handler, event, targetElement) {
  var window = targetElement,
      ///
  width = window.getWidth(),
      height = targetElement.getHeight(),
      preventDefault = handler(width, height, targetElement);

  return preventDefault;
}

},{"./mixin/click":113,"./mixin/event":114,"./mixin/key":116,"./mixin/mouse":117}],123:[function(require,module,exports){
'use strict';

var lexers = {
  'Line': require('./lib/common/line'),
  'PlainLexer': require('./lib/plain/lexer'),
  'BNFLexer': require('./lib/bnf/lexer'),
  'BasicLexer': require('./lib/basic/lexer'),
  'FlorenceLexer': require('./lib/florence/lexer'),
  'SignificantToken': require('./lib/common/token/significant'),
  'NonSignificantToken': require('./lib/common/token/nonSignificant'),
  'StringToken': require('./lib/common/token/significant/string'),
  'EndOfLineToken': require('./lib/common/token/significant/endOfLine'),
  'WhitespaceToken': require('./lib/common/token/significant/whitespace')
};

module.exports = lexers;

},{"./lib/basic/lexer":125,"./lib/bnf/lexer":130,"./lib/common/line":136,"./lib/common/token/nonSignificant":139,"./lib/common/token/significant":144,"./lib/common/token/significant/endOfLine":145,"./lib/common/token/significant/string":146,"./lib/common/token/significant/whitespace":147,"./lib/florence/lexer":154,"./lib/plain/lexer":157}],124:[function(require,module,exports){
'use strict';

var entries = [{ "terminal": "\\+|\\-|\\*|\\/|\\(|\\)|\\d+" }, { "error": "^.*$" }];

module.exports = entries;

},{}],125:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BasicLine = require('./line'),
    entries = require('./entries'),
    Rules = require('../common/rules'),
    CommonLexer = require('../common/lexer');

var BasicLexer = function (_CommonLexer) {
  _inherits(BasicLexer, _CommonLexer);

  function BasicLexer() {
    _classCallCheck(this, BasicLexer);

    return _possibleConstructorReturn(this, (BasicLexer.__proto__ || Object.getPrototypeOf(BasicLexer)).apply(this, arguments));
  }

  _createClass(BasicLexer, null, [{
    key: 'fromEntries',
    value: function fromEntries(entries) {
      var rules = Rules.fromEntries(entries),
          basicLexer = new BasicLexer(rules, BasicLine);

      return basicLexer;
    }
  }, {
    key: 'fromNothing',
    value: function fromNothing() {
      var basicLexer = BasicLexer.fromEntries(entries);

      return basicLexer;
    }
  }]);

  return BasicLexer;
}(CommonLexer);

module.exports = BasicLexer;

BasicLexer.entries = entries;

},{"../common/lexer":135,"../common/rules":138,"./entries":124,"./line":126}],126:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommonLine = require('../common/line'),
    StringTokens = require('./tokens/string'),
    CommentTokens = require('./tokens/comment'),
    WhitespaceTokens = require('../common/tokens/whitespace');

var BasicLine = function (_CommonLine) {
      _inherits(BasicLine, _CommonLine);

      function BasicLine() {
            _classCallCheck(this, BasicLine);

            return _possibleConstructorReturn(this, (BasicLine.__proto__ || Object.getPrototypeOf(BasicLine)).apply(this, arguments));
      }

      _createClass(BasicLine, null, [{
            key: 'fromContent',
            value: function fromContent(content, context, rules) {
                  return _get(BasicLine.__proto__ || Object.getPrototypeOf(BasicLine), 'fromContent', this).call(this, BasicLine, content, context, rules, CommentTokens, StringTokens, WhitespaceTokens);
            }
      }]);

      return BasicLine;
}(CommonLine);

module.exports = BasicLine;

},{"../common/line":136,"../common/tokens/whitespace":152,"./tokens/comment":127,"./tokens/string":128}],127:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CommentTokens = function () {
  function CommentTokens() {
    _classCallCheck(this, CommentTokens);
  }

  _createClass(CommentTokens, null, [{
    key: 'pass',
    value: function pass(tokensOrRemainingContent, line, context) {
      var inComment = false; ///

      return inComment;
    }
  }]);

  return CommentTokens;
}();

module.exports = CommentTokens;

},{}],128:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StringTokens = function () {
  function StringTokens() {
    _classCallCheck(this, StringTokens);
  }

  _createClass(StringTokens, null, [{
    key: 'pass',
    value: function pass(tokensOrContents, line) {}
  }]);

  return StringTokens;
}();

module.exports = StringTokens;

},{}],129:[function(require,module,exports){
'use strict';

var entries = [{ "regularExpression": "\\/[^/]+\\/" }, { "special": "::=|\\||\\(|\\)|\\?|\\*|\\+|\\.|ε|;|<NO_WHITESPACE>|<END_OF_LINE>" }, { "type": "\\[[^/]+\\]" }, { "name": "[\\w|~]+" }, { "error": "^.*$" }];

module.exports = entries;

},{}],130:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BNFLine = require('./line'),
    entries = require('./entries'),
    specialSymbols = require('./specialSymbols'),
    Rules = require('../common/rules'),
    CommonLexer = require('../common/lexer');

var BNFLexer = function (_CommonLexer) {
  _inherits(BNFLexer, _CommonLexer);

  function BNFLexer() {
    _classCallCheck(this, BNFLexer);

    return _possibleConstructorReturn(this, (BNFLexer.__proto__ || Object.getPrototypeOf(BNFLexer)).apply(this, arguments));
  }

  _createClass(BNFLexer, [{
    key: 'linesFromBNF',
    value: function linesFromBNF(bnf) {
      var content = bnf,
          ///
      lines = _get(BNFLexer.prototype.__proto__ || Object.getPrototypeOf(BNFLexer.prototype), 'linesFromContent', this).call(this, content);

      return lines;
    }
  }], [{
    key: 'fromEntries',
    value: function fromEntries(entries) {
      var rules = Rules.fromEntries(entries),
          bnfLexer = new BNFLexer(rules, BNFLine);

      return bnfLexer;
    }
  }, {
    key: 'fromNothing',
    value: function fromNothing() {
      var bnfLexer = BNFLexer.fromEntries(entries);

      return bnfLexer;
    }
  }]);

  return BNFLexer;
}(CommonLexer);

module.exports = BNFLexer;

BNFLexer.entries = entries;

BNFLexer.specialSymbols = specialSymbols;

},{"../common/lexer":135,"../common/rules":138,"./entries":129,"./line":131,"./specialSymbols":132}],131:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommonLine = require('../common/line'),
    StringTokens = require('../common/tokens/string'),
    CommentTokens = require('./tokens/comment'),
    WhitespaceTokens = require('../common/tokens/whitespace');

var BNFLine = function (_CommonLine) {
  _inherits(BNFLine, _CommonLine);

  function BNFLine() {
    _classCallCheck(this, BNFLine);

    return _possibleConstructorReturn(this, (BNFLine.__proto__ || Object.getPrototypeOf(BNFLine)).apply(this, arguments));
  }

  _createClass(BNFLine, null, [{
    key: 'fromContent',
    value: function fromContent(content, context, rules) {
      var line = _get(BNFLine.__proto__ || Object.getPrototypeOf(BNFLine), 'fromContent', this).call(this, BNFLine, content, context, rules, CommentTokens, StringTokens, WhitespaceTokens);

      return line;
    }
  }]);

  return BNFLine;
}(CommonLine);

module.exports = BNFLine;

},{"../common/line":136,"../common/tokens/string":151,"../common/tokens/whitespace":152,"./tokens/comment":133}],132:[function(require,module,exports){
'use strict';

var specialSymbols = {
  plus: '+',
  epsilon: 'ε',
  wildcard: '.',
  asterisk: '*',
  separator: '::=',
  terminator: ';',
  verticalBar: '|',
  openBracket: '(',
  closeBracket: ')',
  questionMark: '?',
  END_OF_LINE: '<END_OF_LINE>',
  NO_WHITESPACE: '<NO_WHITESPACE>'
};

module.exports = specialSymbols;

},{}],133:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CommentTokens = function () {
  function CommentTokens() {
    _classCallCheck(this, CommentTokens);
  }

  _createClass(CommentTokens, null, [{
    key: 'pass',
    value: function pass(tokensOrRemainingContent, line, context) {
      var inComment = false; ///

      return inComment;
    }
  }]);

  return CommentTokens;
}();

module.exports = CommentTokens;

},{}],134:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Context = function () {
  function Context() {
    var minimumLinesLength = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Infinity;
    var previousLineInComment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var followingLineInComment = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    _classCallCheck(this, Context);

    this.minimumLinesLength = minimumLinesLength;
    this.previousLineInComment = previousLineInComment;
    this.followingLineInComment = followingLineInComment;
  }

  _createClass(Context, [{
    key: 'getMinimumLinesLength',
    value: function getMinimumLinesLength() {
      return this.minimumLinesLength;
    }
  }, {
    key: 'isPreviousLineInComment',
    value: function isPreviousLineInComment() {
      return this.previousLineInComment;
    }
  }, {
    key: 'isFollowingLineInComment',
    value: function isFollowingLineInComment() {
      return this.followingLineInComment;
    }
  }, {
    key: 'setPreviousLineInComment',
    value: function setPreviousLineInComment(previousLineInComment) {
      this.previousLineInComment = previousLineInComment;
    }
  }, {
    key: 'shouldTerminate',
    value: function shouldTerminate(length) {
      var terminate = false;

      if (length >= this.minimumLinesLength) {
        if (this.followingLineInComment === null) {
          terminate = true;
        }

        if (this.previousLineInComment === this.followingLineInComment) {
          terminate = true;
        }
      }

      return terminate;
    }
  }]);

  return Context;
}();

module.exports = Context;

},{}],135:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Line = require('./line'),
    Rule = require('./rule'),
    Rules = require('./rules'),
    Context = require('./context');

var CommonLexer = function () {
  function CommonLexer(rules, Line) {
    _classCallCheck(this, CommonLexer);

    this.rules = rules;
    this.Line = Line;
  }

  _createClass(CommonLexer, [{
    key: 'addedLinesFromContent',
    value: function addedLinesFromContent(content, firstLineIndex, minimumLinesLength, previousLineInComment, followingLineInComment) {
      var context = new Context(minimumLinesLength, previousLineInComment, followingLineInComment),
          lines = this.linesFromContent(content, firstLineIndex, context),
          addedLines = lines; ///

      return addedLines;
    }
  }, {
    key: 'linesFromContent',
    value: function linesFromContent(content) {
      var firstLineIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Context();

      var contents = content.split(/\n/),
          lines = this.linesFromContents(contents, firstLineIndex, context);

      return lines;
    }
  }, {
    key: 'linesFromContents',
    value: function linesFromContents(contents, firstLineIndex, context) {
      var lines = [];

      var index = firstLineIndex,
          content = contents[index];

      while (content !== undefined) {
        var length = index - firstLineIndex,
            terminate = context.shouldTerminate(length);

        if (terminate) {
          break;
        }

        var line = this.Line.fromContent(content, context, this.rules);

        lines.push(line);

        content = contents[++index];
      }

      return lines;
    }
  }], [{
    key: 'ruleFromEntry',
    value: function ruleFromEntry(entry) {
      return Rule.fromEntry(entry);
    }
  }, {
    key: 'rulesFromEntries',
    value: function rulesFromEntries(entries) {
      return Rules.fromEntries(entries);
    }
  }]);

  return CommonLexer;
}();

module.exports = CommonLexer;

},{"./context":134,"./line":136,"./rule":137,"./rules":138}],136:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SignificantTokens = require('./tokens/significant');

var Line = function () {
  function Line(content) {
    _classCallCheck(this, Line);

    this.content = content;

    this.tokens = undefined;

    this.inComment = undefined;
  }

  _createClass(Line, [{
    key: 'getContent',
    value: function getContent() {
      return this.content;
    }
  }, {
    key: 'getTokens',
    value: function getTokens() {
      return this.tokens;
    }
  }, {
    key: 'isInComment',
    value: function isInComment() {
      return this.inComment;
    }
  }, {
    key: 'getHTML',
    value: function getHTML() {
      var html = this.tokens.reduce(function (html, token) {
        var tokenHTML = token.getHTML();

        html += tokenHTML;

        return html;
      }, '');

      html += '\n'; ///

      return html;
    }
  }, {
    key: 'setTokens',
    value: function setTokens(tokens) {
      this.tokens = tokens;
    }
  }, {
    key: 'setInComment',
    value: function setInComment(inComment) {
      this.inComment = inComment;
    }
  }, {
    key: 'pushToken',
    value: function pushToken(token) {
      this.tokens.push(token);
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(Line, content, context, rules, CommentTokens, StringTokens, WhitespaceTokens) {
      var line = new Line(content),
          tokensOrContents = [content],
          inComment = CommentTokens.pass(tokensOrContents, line, context);

      StringTokens.pass(tokensOrContents, line);

      WhitespaceTokens.pass(tokensOrContents, line);

      var tokens = SignificantTokens.pass(tokensOrContents, line, rules);

      line.setTokens(tokens);

      line.setInComment(inComment);

      return line;
    }
  }]);

  return Line;
}();

module.exports = Line;

},{"./tokens/significant":150}],137:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtil = require('../util/array'),
    SignificantToken = require('../common/token/significant');

var Rule = function () {
  function Rule(significantTokenType, regularExpression) {
    _classCallCheck(this, Rule);

    this.significantTokenType = significantTokenType;
    this.regularExpression = regularExpression;
  }

  _createClass(Rule, [{
    key: 'getSignificantTokenType',
    value: function getSignificantTokenType() {
      return this.significantTokenType;
    }
  }, {
    key: 'getRegularExpression',
    value: function getRegularExpression() {
      return this.regularExpression;
    }
  }, {
    key: 'significantTokenPositionWithinContent',
    value: function significantTokenPositionWithinContent(content) {
      var significantTokenPosition = -1;

      var matches = content.match(this.regularExpression);

      if (matches !== null) {
        var firstMatch = arrayUtil.first(matches);

        if (firstMatch !== '') {
          significantTokenPosition = matches.index; ///
        }
      }

      return significantTokenPosition;
    }
  }, {
    key: 'significantTokenFromWithinContentAndLine',
    value: function significantTokenFromWithinContentAndLine(content, line) {
      var matches = content.match(this.regularExpression),
          firstMatch = arrayUtil.first(matches);

      content = firstMatch; ///

      var type = this.significantTokenType,
          ///
      significantToken = SignificantToken.fromContentLineAndType(content, line, type);

      return significantToken;
    }
  }], [{
    key: 'fromEntry',
    value: function fromEntry(entry) {
      var entryKeys = Object.keys(entry),
          firstEntryKey = arrayUtil.first(entryKeys),
          significantTokenType = firstEntryKey,
          ///
      regularExpressionPattern = entry[significantTokenType],
          rule = Rule.fromSignificantTokenTypeAndRegularExpressionPattern(significantTokenType, regularExpressionPattern);

      return rule;
    }
  }, {
    key: 'fromSignificantTokenTypeAndRegularExpressionPattern',
    value: function fromSignificantTokenTypeAndRegularExpressionPattern(significantTokenType, regularExpressionPattern) {
      var unicode = isUnicode(regularExpressionPattern),
          flags = unicode ? 'u' : '',
          regExp = new RegExp(regularExpressionPattern, flags),
          regularExpression = regExp,
          ///
      rule = new Rule(significantTokenType, regularExpression);

      return rule;
    }
  }]);

  return Rule;
}();

module.exports = Rule;

function isUnicode(regularExpressionPattern) {
  var matches = regularExpressionPattern.match(/u\{/),
      unicode = matches !== null;

  return unicode;
}

},{"../common/token/significant":144,"../util/array":162}],138:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rule = require('./rule'),
    arrayUtil = require('../util/array');

var Rules = function () {
  function Rules(array) {
    _classCallCheck(this, Rules);

    this.array = array;
  }

  _createClass(Rules, [{
    key: 'reduce',
    value: function reduce(callback, initialValue) {
      return this.array.reduce(callback, initialValue);
    }
  }, {
    key: 'getRule',
    value: function getRule(depth) {
      var rule = this.array[depth] || null; ///

      return rule;
    }
  }, {
    key: 'addRule',
    value: function addRule(rule) {
      this.array.unshift(rule); ///
    }
  }], [{
    key: 'fromEntries',
    value: function fromEntries(entries) {
      var significantTokenTypes = significantTokenTypesFromEntries(entries),
          array = significantTokenTypes.map(function (significantTokenType) {
        var regularExpressionPattern = findRegularExpressionPattern(significantTokenType, entries),
            rule = Rule.fromSignificantTokenTypeAndRegularExpressionPattern(significantTokenType, regularExpressionPattern);

        return rule;
      }),
          rules = new Rules(array);

      return rules;
    }
  }]);

  return Rules;
}();

module.exports = Rules;

function findRegularExpressionPattern(significantTokenType, entries) {
  var regularExpressionPattern = entries.reduce(function (regularExpressionPattern, entry) {
    if (regularExpressionPattern === null) {
      var entryKeys = Object.keys(entry),
          firstEntryKey = arrayUtil.first(entryKeys),
          entrySignificantTokenType = firstEntryKey; ///

      if (entrySignificantTokenType === significantTokenType) {
        regularExpressionPattern = entry[significantTokenType];
      }
    }

    return regularExpressionPattern;
  }, null);

  return regularExpressionPattern;
}

function significantTokenTypesFromEntries(entries) {
  var significantTokenTypes = entries.map(function (entry) {
    var entryKeys = Object.keys(entry),
        firstEntryKey = arrayUtil.first(entryKeys),
        significantTokenType = firstEntryKey; ///

    return significantTokenType;
  });

  return significantTokenTypes;
}

},{"../util/array":162,"./rule":137}],139:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var tokenUtil = require('../../util/token');

var NonSignificantToken = function () {
  function NonSignificantToken(content, line, html) {
    _classCallCheck(this, NonSignificantToken);

    this.content = content;
    this.line = line;
    this.html = html;
  }

  _createClass(NonSignificantToken, [{
    key: 'isSignificant',
    value: function isSignificant() {
      var significant = false;

      return significant;
    }
  }, {
    key: 'getContent',
    value: function getContent() {
      return this.content;
    }
  }, {
    key: 'getLine',
    value: function getLine() {
      return this.line;
    }
  }, {
    key: 'getHTML',
    value: function getHTML() {
      return this.html;
    }
  }, {
    key: 'getLength',
    value: function getLength() {
      return this.content.length; ///
    }
  }, {
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return NonSignificantToken.clone(this, startPosition, endPosition, NonSignificantToken);
    }
  }], [{
    key: 'clone',
    value: function clone(token) {
      var startPosition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var endPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : token.getLength();
      var Class = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : NonSignificantToken;

      var clonedNonSignificantToken = null;

      if (startPosition !== endPosition) {
        var line = token.getLine();

        var content = token.getContent();

        content = content.substring(startPosition, endPosition);

        clonedNonSignificantToken = Class.fromContentAndLine(content, line, Class);
      }

      return clonedNonSignificantToken;
    }
  }, {
    key: 'fromContentAndLine',
    value: function fromContentAndLine(content, line) {
      var Class = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : NonSignificantToken;

      var html = Class.htmlFromContent(content),
          token = new Class(content, line, html);

      return token;
    }
  }, {
    key: 'htmlFromContent',
    value: function htmlFromContent(content) {
      var sanitisedContent = tokenUtil.sanitiseContent(content),
          html = sanitisedContent;

      return html;
    }
  }]);

  return NonSignificantToken;
}();

module.exports = NonSignificantToken;

},{"../../util/token":163}],140:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var tokenUtil = require('../../../util/token'),
    NonSignificantToken = require('../nonSignificant');

var CommentToken = function (_NonSignificantToken) {
  _inherits(CommentToken, _NonSignificantToken);

  function CommentToken() {
    _classCallCheck(this, CommentToken);

    return _possibleConstructorReturn(this, (CommentToken.__proto__ || Object.getPrototypeOf(CommentToken)).apply(this, arguments));
  }

  _createClass(CommentToken, [{
    key: 'merge',
    value: function merge(commentToken) {
      var content = this.getContent();

      var line = this.getLine(),
          commentTokenContent = commentToken.getContent();

      content += commentTokenContent;

      commentToken = CommentToken.fromContentAndLine(content, line); ///

      return commentToken;
    }
  }, {
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return CommentToken.clone(this, startPosition, endPosition, CommentToken);
    }
  }], [{
    key: 'clone',
    value: function clone(token, startPosition, endPosition) {
      var Class = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : CommentToken;
      return NonSignificantToken.clone(token, startPosition, endPosition, Class);
    }
  }, {
    key: 'fromContentAndLine',
    value: function fromContentAndLine(content, line) {
      var Class = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : CommentToken;
      return NonSignificantToken.fromContentAndLine(content, line, Class);
    }
  }, {
    key: 'htmlFromContent',
    value: function htmlFromContent(content) {
      var sanitisedContent = tokenUtil.sanitiseContent(content),
          innerHTML = sanitisedContent,
          ///
      html = '<span class="comment">' + innerHTML + '</span>';

      return html;
    }
  }]);

  return CommentToken;
}(NonSignificantToken);

module.exports = CommentToken;

},{"../../../util/token":163,"../nonSignificant":139}],141:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../../../util/array'),
    CommentToken = require('../comment');

var EndOfCommentToken = function (_CommentToken) {
  _inherits(EndOfCommentToken, _CommentToken);

  function EndOfCommentToken() {
    _classCallCheck(this, EndOfCommentToken);

    return _possibleConstructorReturn(this, (EndOfCommentToken.__proto__ || Object.getPrototypeOf(EndOfCommentToken)).apply(this, arguments));
  }

  _createClass(EndOfCommentToken, [{
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return CommentToken.clone(this, startPosition, endPosition, EndOfCommentToken);
    }
  }], [{
    key: 'fromContentAndLine',
    value: function fromContentAndLine(content, line) {
      return CommentToken.fromContentAndLine(content, line, EndOfCommentToken);
    }
  }, {
    key: 'fromWithinContentAndLine',
    value: function fromWithinContentAndLine(content, line) {
      var endOfCommentToken = null;

      var matches = content.match(/^\*\//);

      if (matches) {
        var firstMatch = arrayUtil.first(matches);

        content = firstMatch; ///

        endOfCommentToken = EndOfCommentToken.fromContentAndLine(content, line);
      }

      return endOfCommentToken;
    }
  }, {
    key: 'positionWithinContent',
    value: function positionWithinContent(content) {
      var position = content.search(/\*\//);

      return position;
    }
  }]);

  return EndOfCommentToken;
}(CommentToken);

module.exports = EndOfCommentToken;

},{"../../../../util/array":162,"../comment":140}],142:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommentToken = require('../comment');

var MiddleOfCommentToken = function (_CommentToken) {
  _inherits(MiddleOfCommentToken, _CommentToken);

  function MiddleOfCommentToken() {
    _classCallCheck(this, MiddleOfCommentToken);

    return _possibleConstructorReturn(this, (MiddleOfCommentToken.__proto__ || Object.getPrototypeOf(MiddleOfCommentToken)).apply(this, arguments));
  }

  _createClass(MiddleOfCommentToken, [{
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return CommentToken.clone(this, startPosition, endPosition, MiddleOfCommentToken);
    }
  }], [{
    key: 'fromContentAndLine',
    value: function fromContentAndLine(content, line, length) {
      content = content.substr(0, length); ///

      var middleOfCommentToken = CommentToken.fromContentAndLine(content, line, MiddleOfCommentToken);

      return middleOfCommentToken;
    }
  }]);

  return MiddleOfCommentToken;
}(CommentToken);

module.exports = MiddleOfCommentToken;

},{"../comment":140}],143:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../../../util/array'),
    CommentToken = require('../comment');

var StartOfCommentToken = function (_CommentToken) {
  _inherits(StartOfCommentToken, _CommentToken);

  function StartOfCommentToken() {
    _classCallCheck(this, StartOfCommentToken);

    return _possibleConstructorReturn(this, (StartOfCommentToken.__proto__ || Object.getPrototypeOf(StartOfCommentToken)).apply(this, arguments));
  }

  _createClass(StartOfCommentToken, [{
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return CommentToken.clone(this, startPosition, endPosition, StartOfCommentToken);
    }
  }], [{
    key: 'fromContentAndLine',
    value: function fromContentAndLine(content, line) {
      return CommentToken.fromContentAndLine(content, line, StartOfCommentToken);
    }
  }, {
    key: 'fromWithinContentAndLine',
    value: function fromWithinContentAndLine(content, line) {
      var startOfCommentToken = null;

      var matches = content.match(/^\/\*/);

      if (matches) {
        var firstMatch = arrayUtil.first(matches);

        content = firstMatch; ///

        startOfCommentToken = StartOfCommentToken.fromContentAndLine(content, line);
      }

      return startOfCommentToken;
    }
  }, {
    key: 'positionWithinContent',
    value: function positionWithinContent(content) {
      var position = content.search(/\/\*/);

      return position;
    }
  }]);

  return StartOfCommentToken;
}(CommentToken);

module.exports = StartOfCommentToken;

},{"../../../../util/array":162,"../comment":140}],144:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var tokenUtil = require('../../util/token');

var SignificantToken = function () {
  function SignificantToken(content, line, type, innerHTML) {
    _classCallCheck(this, SignificantToken);

    this.content = content;
    this.line = line;
    this.type = type;
    this.innerHTML = innerHTML;

    this.error = undefined; ///
  }

  _createClass(SignificantToken, [{
    key: 'isSignificant',
    value: function isSignificant() {
      var significant = true;

      return significant;
    }
  }, {
    key: 'getContent',
    value: function getContent() {
      return this.content;
    }
  }, {
    key: 'getLine',
    value: function getLine() {
      return this.line;
    }
  }, {
    key: 'getType',
    value: function getType() {
      return this.type;
    }
  }, {
    key: 'getInnerHTML',
    value: function getInnerHTML() {
      return this.innerHTML;
    }
  }, {
    key: 'getError',
    value: function getError() {
      return this.error;
    }
  }, {
    key: 'getHTML',
    value: function getHTML() {
      var className = this.error === true ? 'error' : this.type,
          html = '<span class="' + className + '">' + this.innerHTML + '</span>';

      return html;
    }
  }, {
    key: 'getLength',
    value: function getLength() {
      return this.content.length; ///
    }
  }, {
    key: 'setError',
    value: function setError(error) {
      this.error = error;
    }
  }, {
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return SignificantToken.clone(this, startPosition, endPosition, SignificantToken);
    }
  }], [{
    key: 'clone',
    value: function clone(token, startPosition, endPosition) {
      var Class = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : SignificantToken;

      var clonedSignificantToken = null;

      if (startPosition !== endPosition) {
        var content = token.getContent();

        var line = token.getLine(),
            type = token.getType(),
            error = token.getError();

        content = content.substring(startPosition, endPosition);

        clonedSignificantToken = Class.fromContentLineAndType(content, line, type);

        clonedSignificantToken.setError(error);
      }

      return clonedSignificantToken;
    }
  }, {
    key: 'fromContentLineAndType',
    value: function fromContentLineAndType(content, line, type) {
      var Class = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : SignificantToken;

      var innerHTML = Class.innerHTMLFromContent(content),
          significantToken = new Class(content, line, type, innerHTML);

      return significantToken;
    }
  }, {
    key: 'innerHTMLFromContent',
    value: function innerHTMLFromContent(content) {
      var sanitisedContent = tokenUtil.sanitiseContent(content),
          innerHTML = sanitisedContent; ///

      return innerHTML;
    }
  }]);

  return SignificantToken;
}();

module.exports = SignificantToken;

},{"../../util/token":163}],145:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignificantToken = require('../significant');

var EndOfLineToken = function (_SignificantToken) {
  _inherits(EndOfLineToken, _SignificantToken);

  function EndOfLineToken() {
    _classCallCheck(this, EndOfLineToken);

    return _possibleConstructorReturn(this, (EndOfLineToken.__proto__ || Object.getPrototypeOf(EndOfLineToken)).apply(this, arguments));
  }

  _createClass(EndOfLineToken, [{
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return SignificantToken.clone(this, startPosition, endPosition, EndOfLineToken);
    }
  }, {
    key: 'getHTML',
    value: function getHTML() {
      var html = ''; ///

      return html;
    }
  }], [{
    key: 'fromContentLineAndType',
    value: function fromContentLineAndType(content, line, type) {
      return SignificantToken.fromContentLineAndType(content, line, type, EndOfLineToken);
    }
  }, {
    key: 'fromLine',
    value: function fromLine(line) {
      var content = '',
          type = EndOfLineToken.type,
          endOfLineToken = EndOfLineToken.fromContentLineAndType(content, line, type);

      return endOfLineToken;
    }
  }]);

  return EndOfLineToken;
}(SignificantToken);

EndOfLineToken.type = 'endOfLine';

module.exports = EndOfLineToken;

},{"../significant":144}],146:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../../util/array'),
    SignificantToken = require('../significant');

var StringToken = function (_SignificantToken) {
  _inherits(StringToken, _SignificantToken);

  function StringToken() {
    _classCallCheck(this, StringToken);

    return _possibleConstructorReturn(this, (StringToken.__proto__ || Object.getPrototypeOf(StringToken)).apply(this, arguments));
  }

  _createClass(StringToken, [{
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return SignificantToken.clone(this, startPosition, endPosition, StringToken);
    }
  }], [{
    key: 'fromContentLineAndType',
    value: function fromContentLineAndType(content, line, type) {
      return SignificantToken.fromContentLineAndType(content, line, type, StringToken);
    }
  }, {
    key: 'fromWithinContentAndLine',
    value: function fromWithinContentAndLine(content, line) {
      var stringToken = null;

      var matches = content.match(/("[^"]*")/);

      if (matches) {
        var firstMatch = arrayUtil.first(matches);

        content = firstMatch; ///

        var type = StringToken.type;

        stringToken = StringToken.fromContentLineAndType(content, line, type);
      }

      return stringToken;
    }
  }, {
    key: 'positionWithinContent',
    value: function positionWithinContent(content) {
      var position = content.search(/"[^"]*"/);

      return position;
    }
  }]);

  return StringToken;
}(SignificantToken);

module.exports = StringToken;

StringToken.type = 'string';

},{"../../../util/array":162,"../significant":144}],147:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../../util/array'),
    SignificantToken = require('../significant');

var WhitespaceToken = function (_SignificantToken) {
  _inherits(WhitespaceToken, _SignificantToken);

  function WhitespaceToken() {
    _classCallCheck(this, WhitespaceToken);

    return _possibleConstructorReturn(this, (WhitespaceToken.__proto__ || Object.getPrototypeOf(WhitespaceToken)).apply(this, arguments));
  }

  _createClass(WhitespaceToken, [{
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return SignificantToken.clone(this, startPosition, endPosition, WhitespaceToken);
    }
  }, {
    key: 'getHTML',
    value: function getHTML() {
      var html = this.innerHTML; ///

      return html;
    }
  }], [{
    key: 'fromContentLineAndType',
    value: function fromContentLineAndType(content, line, type) {
      return SignificantToken.fromContentLineAndType(content, line, type, WhitespaceToken);
    }
  }, {
    key: 'fromWithinContentAndLine',
    value: function fromWithinContentAndLine(content, line) {
      var whitespaceToken = null;

      var matches = content.match(/([\t ]+)/);

      if (matches) {
        var firstMatch = arrayUtil.first(matches);

        content = firstMatch; ///

        var type = WhitespaceToken.type;

        whitespaceToken = WhitespaceToken.fromContentLineAndType(content, line, type);
      }

      return whitespaceToken;
    }
  }, {
    key: 'positionWithinContent',
    value: function positionWithinContent(content) {
      var position = content.search(/[\t ]+/);

      return position;
    }
  }]);

  return WhitespaceToken;
}(SignificantToken);

module.exports = WhitespaceToken;

WhitespaceToken.type = 'whitespace';

},{"../../../util/array":162,"../significant":144}],148:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtil = require('../util/array');

var Tokens = function () {
  function Tokens() {
    _classCallCheck(this, Tokens);
  }

  _createClass(Tokens, null, [{
    key: 'pass',
    value: function pass(tokensOrContents, line, Token) {
      var offset = 0;

      var tokensOrContentsLength = tokensOrContents.length;

      for (var index = 0; index < tokensOrContentsLength; index++) {
        var offsetIndex = index + offset,
            tokenOrContent = tokensOrContents[offsetIndex];

        if (typeof tokenOrContent === 'string') {
          var content = tokenOrContent,
              ///
          tokensOrRemainingContent = tokensOrRemainingContentFromWithinContentAndLine(content, line, Token),
              tokensOrRemainingContentLength = tokensOrRemainingContent.length,
              start = offsetIndex;

          arrayUtil.splice(tokensOrContents, start, 1, tokensOrRemainingContent);

          offset += tokensOrRemainingContentLength - 1;
        }
      }
    }
  }]);

  return Tokens;
}();

module.exports = Tokens;

function tokensOrRemainingContentFromWithinContentAndLine(content, line, Token) {
  var remainingContent = void 0,
      tokensOrRemainingContent = [],
      tokenPositionWithinContent = Token.positionWithinContent(content);

  while (tokenPositionWithinContent !== -1) {
    if (tokenPositionWithinContent > 0) {
      remainingContent = content.substring(0, tokenPositionWithinContent);

      tokensOrRemainingContent.push(remainingContent);
    }

    var token = Token.fromWithinContentAndLine(content, line),
        tokenLength = token.getLength(),
        tokenOffset = tokenPositionWithinContent + tokenLength;

    tokensOrRemainingContent.push(token);

    content = content.substring(tokenOffset);

    tokenPositionWithinContent = Token.positionWithinContent(content);
  }

  if (content !== '') {
    remainingContent = content;

    tokensOrRemainingContent.push(remainingContent);
  }

  return tokensOrRemainingContent;
}

},{"../util/array":162}],149:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EndOfCommentToken = require('../token/nonSignificant/comment/endOf'),
    StartOfCommentToken = require('../token/nonSignificant/comment/startOf'),
    MiddleOfCommentToken = require('../token/nonSignificant/comment/middleOf');

var CommentTokens = function () {
  function CommentTokens() {
    _classCallCheck(this, CommentTokens);
  }

  _createClass(CommentTokens, null, [{
    key: 'pass',
    value: function pass(tokensOrContents, line, context) {
      var content = tokensOrContents.pop(),
          commentToken = void 0,
          commentTokenLength = void 0,
          previousLineInComment = context.isPreviousLineInComment(),
          inComment = previousLineInComment === true;

      while (content !== '') {
        var contentLength = content.length;

        if (inComment) {
          var endOfCommentTokenPositionWithinContent = EndOfCommentToken.positionWithinContent(content);

          if (endOfCommentTokenPositionWithinContent === 0) {
            inComment = false;

            commentToken = EndOfCommentToken.fromWithinContentAndLine(content, line);

            commentTokenLength = commentToken.getLength();
          } else {
            var middleOfCommentTokenLength = minimumBarMinusOne(endOfCommentTokenPositionWithinContent, contentLength);

            commentToken = MiddleOfCommentToken.fromContentAndLine(content, line, middleOfCommentTokenLength);

            commentTokenLength = middleOfCommentTokenLength;
          }

          var previousCommentToken = tokensOrContents.pop();

          commentToken = previousCommentToken === undefined ? commentToken : previousCommentToken.merge(commentToken);

          tokensOrContents.push(commentToken);

          content = content.substring(commentTokenLength);
        } else {
          var startOfCommentTokenPositionWithinContent = StartOfCommentToken.positionWithinContent(content);

          if (startOfCommentTokenPositionWithinContent === 0) {
            inComment = true;

            commentToken = StartOfCommentToken.fromWithinContentAndLine(content, line);

            commentTokenLength = commentToken.getLength();

            tokensOrContents.push(commentToken);

            content = content.substring(commentTokenLength);
          } else {
            contentLength = minimumBarMinusOne(startOfCommentTokenPositionWithinContent, contentLength);

            var remainingContent = content.substring(contentLength);

            content = content.substring(0, contentLength);

            tokensOrContents.push(content);

            content = remainingContent;
          }
        }
      }

      previousLineInComment = inComment; ///

      context.setPreviousLineInComment(previousLineInComment);

      return inComment;
    }
  }]);

  return CommentTokens;
}();

module.exports = CommentTokens;

function minimumBarMinusOne() {
  var values = Array.prototype.slice.call(arguments),
      minimumBarMinusOne = values.reduce(function (minimumBarMinusOne, value) {
    if (value > -1) {
      minimumBarMinusOne = minimumBarMinusOne !== null ? Math.min(minimumBarMinusOne, value) : value;
    }

    return minimumBarMinusOne;
  }, null);

  return minimumBarMinusOne;
}

},{"../token/nonSignificant/comment/endOf":141,"../token/nonSignificant/comment/middleOf":142,"../token/nonSignificant/comment/startOf":143}],150:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SignificantTokens = function () {
  function SignificantTokens() {
    _classCallCheck(this, SignificantTokens);
  }

  _createClass(SignificantTokens, null, [{
    key: 'pass',
    value: function pass(tokensOrContents, line, rules) {
      var tokens = tokensOrContents.reduce(function (tokens, tokenOrRemainingContent) {
        if (typeof tokenOrRemainingContent === 'string') {
          var content = tokenOrRemainingContent,
              ///
          depth = 0,
              significantTokens = significantTokensFromWithinContentAndLine(content, line, rules, depth);

          tokens = tokens.concat(significantTokens);
        } else {
          var nonSignificantToken = tokenOrRemainingContent; ///

          tokens.push(nonSignificantToken);
        }

        return tokens;
      }, []);

      return tokens;
    }
  }]);

  return SignificantTokens;
}();

module.exports = SignificantTokens;

function significantTokensFromWithinContentAndLine(content, line, rules, depth) {
  var significantTokens = [];

  if (content !== '') {
    var rule = rules.getRule(depth);

    if (rule !== null) {
      var nextDepth = depth + 1,
          significantTokenPositionWithinContent = rule.significantTokenPositionWithinContent(content);

      if (significantTokenPositionWithinContent === -1) {
        significantTokens = significantTokensFromWithinContentAndLine(content, line, rules, nextDepth);
      } else {
        var significantToken = rule.significantTokenFromWithinContentAndLine(content, line),
            significantTokenLength = significantToken.getLength(),
            left = significantTokenPositionWithinContent,
            ///
        right = significantTokenPositionWithinContent + significantTokenLength,
            ///
        leftContent = content.substring(0, left),
            rightContent = content.substring(right),
            leftSignificantTokens = significantTokensFromWithinContentAndLine(leftContent, line, rules, nextDepth),
            rightSignificantTokens = significantTokensFromWithinContentAndLine(rightContent, line, rules, depth);

        significantTokens = [].concat(leftSignificantTokens).concat(significantToken).concat(rightSignificantTokens);
      }
    } else {
      throw new Error('There is no rule to parse the content \'' + content + '\'.');
    }
  }

  return significantTokens;
}

},{}],151:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tokens = require('../tokens'),
    StringToken = require('../token/significant/string');

var StringTokens = function () {
  function StringTokens() {
    _classCallCheck(this, StringTokens);
  }

  _createClass(StringTokens, null, [{
    key: 'pass',
    value: function pass(tokensOrContents, line) {
      Tokens.pass(tokensOrContents, line, StringToken);
    }
  }]);

  return StringTokens;
}();

module.exports = StringTokens;

},{"../token/significant/string":146,"../tokens":148}],152:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tokens = require('../tokens'),
    WhitespaceToken = require('../token/significant/whitespace');

var WhitespaceTokens = function () {
  function WhitespaceTokens() {
    _classCallCheck(this, WhitespaceTokens);
  }

  _createClass(WhitespaceTokens, null, [{
    key: 'pass',
    value: function pass(tokensOrContents, line) {
      Tokens.pass(tokensOrContents, line, WhitespaceToken);
    }
  }]);

  return WhitespaceTokens;
}();

module.exports = WhitespaceTokens;

},{"../token/significant/whitespace":147,"../tokens":148}],153:[function(require,module,exports){
'use strict';

var entries = [{ "special": ",|;|⊢|=|::|:|\\[|\\]|\\{|\\}|\\(|\\)|\\.\\.\\.|\\.\\." }, { "import": "^import$" }, { "keyword": "^(?:Rule|Axiom|Theorem|Lemma|Premises|Premise|Conclusion|Proof|Therefore|Suppose|Then|Hence|Types|Type|Variables|Variable|Constructors|Constructor|DependentTypes|DependentType|QualifiedMetavariables|QualifiedMetavariable|Metavariables|Metavariable|Abbreviations|Abbreviation|Object|Definition|from|by|let|for|is|not|in|defined|undefined)$" }, { "unassigned": "^[\\u{21}-\\u{7E}\\u{A1}-\\u{FF}\\u{370}-\\u{3FF}\\u{2200}-\\u{22FF}\\u{2A00}-\\u{2AFF}\\u{2300}-\\u{23ff}\\u{1D400}-\\u{1D7FF}]+$" }, { "error": "^.*$" }];

module.exports = entries;

},{}],154:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var entries = require('./entries'),
    FlorenceLine = require('./line'),
    CommonLexer = require('../common/lexer');

var FlorenceLexer = function (_CommonLexer) {
  _inherits(FlorenceLexer, _CommonLexer);

  function FlorenceLexer() {
    _classCallCheck(this, FlorenceLexer);

    return _possibleConstructorReturn(this, (FlorenceLexer.__proto__ || Object.getPrototypeOf(FlorenceLexer)).apply(this, arguments));
  }

  _createClass(FlorenceLexer, null, [{
    key: 'fromCustomGrammarsLexicalPattern',
    value: function fromCustomGrammarsLexicalPattern(customGrammarsLexicalPattern) {
      var custom = customGrammarsLexicalPattern,
          ///
      customGrammarEntry = {
        custom: custom
      },
          customGrammarRule = CommonLexer.ruleFromEntry(customGrammarEntry),
          rules = CommonLexer.rulesFromEntries(entries);

      rules.addRule(customGrammarRule);

      var florenceLexer = new FlorenceLexer(rules, FlorenceLine);

      return florenceLexer;
    }
  }, {
    key: 'fromEntries',
    value: function fromEntries(entries) {
      var rules = CommonLexer.rulesFromEntries(entries),
          florenceLexer = new FlorenceLexer(rules, FlorenceLine);

      return florenceLexer;
    }
  }, {
    key: 'fromNothing',
    value: function fromNothing() {
      var florenceLexer = FlorenceLexer.fromEntries(entries);

      return florenceLexer;
    }
  }]);

  return FlorenceLexer;
}(CommonLexer);

module.exports = FlorenceLexer;

FlorenceLexer.entries = entries;

},{"../common/lexer":135,"./entries":153,"./line":155}],155:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommonLine = require('../common/line'),
    StringTokens = require('../common/tokens/string'),
    CommentTokens = require('../common/tokens/comment'),
    WhitespaceTokens = require('../common/tokens/whitespace'),
    EndOfLineToken = require('../common/token/significant/endOfLine');

var FlorenceLine = function (_CommonLine) {
  _inherits(FlorenceLine, _CommonLine);

  function FlorenceLine() {
    _classCallCheck(this, FlorenceLine);

    return _possibleConstructorReturn(this, (FlorenceLine.__proto__ || Object.getPrototypeOf(FlorenceLine)).apply(this, arguments));
  }

  _createClass(FlorenceLine, null, [{
    key: 'fromContent',
    value: function fromContent(content, context, rules) {
      var line = _get(FlorenceLine.__proto__ || Object.getPrototypeOf(FlorenceLine), 'fromContent', this).call(this, FlorenceLine, content, context, rules, CommentTokens, StringTokens, WhitespaceTokens),
          lineInComment = line.isInComment();

      if (!lineInComment) {
        var endOfLineToken = EndOfLineToken.fromLine(line);

        line.pushToken(endOfLineToken);
      }

      return line;
    }
  }]);

  return FlorenceLine;
}(CommonLine);

module.exports = FlorenceLine;

},{"../common/line":136,"../common/token/significant/endOfLine":145,"../common/tokens/comment":149,"../common/tokens/string":151,"../common/tokens/whitespace":152}],156:[function(require,module,exports){
'use strict';

var entries = [{ "plain": "^.*$" }];

module.exports = entries;

},{}],157:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlainLine = require('./line'),
    entries = require('./entries'),
    CommonLexer = require('../common/lexer');

var PlainLexer = function (_CommonLexer) {
  _inherits(PlainLexer, _CommonLexer);

  function PlainLexer() {
    _classCallCheck(this, PlainLexer);

    return _possibleConstructorReturn(this, (PlainLexer.__proto__ || Object.getPrototypeOf(PlainLexer)).apply(this, arguments));
  }

  _createClass(PlainLexer, null, [{
    key: 'fromEntries',
    value: function fromEntries(entries) {
      var rules = CommonLexer.rulesFromEntries(entries),
          plainLexer = new PlainLexer(rules, PlainLine);

      return plainLexer;
    }
  }, {
    key: 'fromNothing',
    value: function fromNothing() {
      var plainLexer = PlainLexer.fromEntries(entries);

      return plainLexer;
    }
  }]);

  return PlainLexer;
}(CommonLexer);

module.exports = PlainLexer;

PlainLexer.entries = entries;

},{"../common/lexer":135,"./entries":156,"./line":158}],158:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommonLine = require('../common/line'),
    StringTokens = require('./tokens/string'),
    CommentTokens = require('./tokens/comment'),
    WhitespaceTokens = require('./tokens/whitespace');

var PlainLine = function (_CommonLine) {
      _inherits(PlainLine, _CommonLine);

      function PlainLine() {
            _classCallCheck(this, PlainLine);

            return _possibleConstructorReturn(this, (PlainLine.__proto__ || Object.getPrototypeOf(PlainLine)).apply(this, arguments));
      }

      _createClass(PlainLine, null, [{
            key: 'fromContent',
            value: function fromContent(content, context, rules) {
                  return _get(PlainLine.__proto__ || Object.getPrototypeOf(PlainLine), 'fromContent', this).call(this, PlainLine, content, context, rules, CommentTokens, StringTokens, WhitespaceTokens);
            }
      }]);

      return PlainLine;
}(CommonLine);

module.exports = PlainLine;

},{"../common/line":136,"./tokens/comment":159,"./tokens/string":160,"./tokens/whitespace":161}],159:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CommentTokens = function () {
  function CommentTokens() {
    _classCallCheck(this, CommentTokens);
  }

  _createClass(CommentTokens, null, [{
    key: 'pass',
    value: function pass(tokensOrRemainingContent, line, context) {
      var inComment = false; ///

      return inComment;
    }
  }]);

  return CommentTokens;
}();

module.exports = CommentTokens;

},{}],160:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StringTokens = function () {
  function StringTokens() {
    _classCallCheck(this, StringTokens);
  }

  _createClass(StringTokens, null, [{
    key: 'pass',
    value: function pass(tokensOrContents, line) {}
  }]);

  return StringTokens;
}();

module.exports = StringTokens;

},{}],161:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WhitespaceTokens = function () {
  function WhitespaceTokens() {
    _classCallCheck(this, WhitespaceTokens);
  }

  _createClass(WhitespaceTokens, null, [{
    key: 'pass',
    value: function pass(tokensOrContents, line) {}
  }]);

  return WhitespaceTokens;
}();

module.exports = WhitespaceTokens;

},{}],162:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtil = function () {
  function arrayUtil() {
    _classCallCheck(this, arrayUtil);
  }

  _createClass(arrayUtil, null, [{
    key: 'first',
    value: function first(array) {
      return array[0];
    }
  }, {
    key: 'splice',
    value: function splice(array, start, deleteCount, itemsArray) {
      var args = [start, deleteCount].concat(itemsArray);

      Array.prototype.splice.apply(array, args);
    }
  }]);

  return arrayUtil;
}();

module.exports = arrayUtil;

},{}],163:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var tokenUtil = function () {
  function tokenUtil() {
    _classCallCheck(this, tokenUtil);
  }

  _createClass(tokenUtil, null, [{
    key: 'sanitiseContent',
    value: function sanitiseContent(content) {
      var sanitisedContent = content.replace(/&/, '&amp;').replace(/</, '&lt;').replace(/>/, '&gt;');

      return sanitisedContent;
    }
  }]);

  return tokenUtil;
}();

module.exports = tokenUtil;

},{}]},{},[80])(80)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczYvYmFzaWMvYm5mLmpzIiwiZXM2L2Jhc2ljL3BhcnNlci5qcyIsImVzNi9ibmYvYm5mLmpzIiwiZXM2L2JuZi9kZWZpbml0aW9uLmpzIiwiZXM2L2JuZi9kZWZpbml0aW9uL2Nob2ljZU9mUGFydHMuanMiLCJlczYvYm5mL2RlZmluaXRpb24vZGVmaW5pdGlvbi5qcyIsImVzNi9ibmYvZGVmaW5pdGlvbi9kZWZpbml0aW9ucy5qcyIsImVzNi9ibmYvZGVmaW5pdGlvbi9lcHNpbG9uLmpzIiwiZXM2L2JuZi9kZWZpbml0aW9uL2dyb3VwT2ZQYXJ0cy5qcyIsImVzNi9ibmYvZGVmaW5pdGlvbi9ub1doaXRlc3BhY2UuanMiLCJlczYvYm5mL2RlZmluaXRpb24vcGFydFJ1bGUuanMiLCJlczYvYm5mL2RlZmluaXRpb24vcmlnaHRSZWN1cnNpdmVQYXJ0UnVsZS5qcyIsImVzNi9ibmYvZGVmaW5pdGlvbi9ydWxlLmpzIiwiZXM2L2JuZi9kZWZpbml0aW9uL3J1bGVzLmpzIiwiZXM2L2JuZi9kZWZpbml0aW9uL3NpZ25pZmljYW50VG9rZW5UeXBlLmpzIiwiZXM2L2JuZi9kZWZpbml0aW9uL3Rlcm1pbmFsU3ltYm9sLmpzIiwiZXM2L2JuZi9ub2RlL2RlZmluaXRpb24uanMiLCJlczYvYm5mL25vZGUvZGVmaW5pdGlvbnMuanMiLCJlczYvYm5mL25vZGUvZW5kT2ZMaW5lLmpzIiwiZXM2L2JuZi9ub2RlL2Vwc2lsb24uanMiLCJlczYvYm5mL25vZGUvcGFydC5qcyIsImVzNi9ibmYvbm9kZS9yZWd1bGFyRXhwcmVzc2lvbi5qcyIsImVzNi9ibmYvbm9kZS9yaWdodFJlY3Vyc2l2ZVBhcnQuanMiLCJlczYvYm5mL25vZGUvcnVsZS5qcyIsImVzNi9ibmYvbm9kZS9ydWxlTmFtZS5qcyIsImVzNi9ibmYvbm9kZS9ydWxlcy5qcyIsImVzNi9ibmYvbm9kZS9zaWduaWZpY2FudFRva2VuVHlwZS5qcyIsImVzNi9ibmYvbm9kZS90ZXJtaW5hbFN5bWJvbC5qcyIsImVzNi9ibmYvbm9kZS93aWxkY2FyZC5qcyIsImVzNi9ibmYvcGFyc2VyLmpzIiwiZXM2L2JuZi9wYXJ0L2Nob2ljZU9mUGFydHMuanMiLCJlczYvYm5mL3BhcnQvZW5kT2ZMaW5lLmpzIiwiZXM2L2JuZi9wYXJ0L2Vwc2lsb24uanMiLCJlczYvYm5mL3BhcnQvZ3JvdXBPZlBhcnRzLmpzIiwiZXM2L2JuZi9wYXJ0L29uZU9yTW9yZVBhcnRzLmpzIiwiZXM2L2JuZi9wYXJ0L29wdGlvbmFsUGFydC5qcyIsImVzNi9ibmYvcGFydC9yZWd1bGFyRXhwcmVzc2lvbi5qcyIsImVzNi9ibmYvcGFydC9ydWxlTmFtZS5qcyIsImVzNi9ibmYvcGFydC9zZXF1ZW5jZU9mUGFydHMuanMiLCJlczYvYm5mL3BhcnQvc2lnbmlmaWNhbnRUb2tlblR5cGUuanMiLCJlczYvYm5mL3BhcnQvdGVybWluYWxTeW1ib2wuanMiLCJlczYvYm5mL3BhcnQvd2lsZGNhcmQuanMiLCJlczYvYm5mL3BhcnQvemVyb09yTW9yZVBhcnRzLmpzIiwiZXM2L2JuZi9ydWxlLmpzIiwiZXM2L2JuZi9ydWxlL2RlZmluaXRpb24uanMiLCJlczYvYm5mL3J1bGUvZGVmaW5pdGlvbnMuanMiLCJlczYvYm5mL3J1bGUvZW5kT2ZMaW5lLmpzIiwiZXM2L2JuZi9ydWxlL2Vwc2lsb24uanMiLCJlczYvYm5mL3J1bGUvcGFydC5qcyIsImVzNi9ibmYvcnVsZS9yZWd1bGFyRXhwcmVzc2lvbi5qcyIsImVzNi9ibmYvcnVsZS9yaWdodFJlY3Vyc2l2ZVBhcnQuanMiLCJlczYvYm5mL3J1bGUvcnVsZS5qcyIsImVzNi9ibmYvcnVsZS9ydWxlTmFtZS5qcyIsImVzNi9ibmYvcnVsZS9ydWxlcy5qcyIsImVzNi9ibmYvcnVsZS9zaWduaWZpY2FudFRva2VuVHlwZS5qcyIsImVzNi9ibmYvcnVsZS90ZXJtaW5hbFN5bWJvbC5qcyIsImVzNi9ibmYvcnVsZS93aWxkY2FyZC5qcyIsImVzNi9jb21tb24vY29udGV4dC5qcyIsImVzNi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC5qcyIsImVzNi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC9kaXNjYXJkRmlmdGhUaGVuU2Vjb25kQ2hpbGROb2RlLmpzIiwiZXM2L2NvbW1vbi9ub2RlL25vblRlcm1pbmFsL2Rpc2NhcmRGb3VydGhUaGVuU2Vjb25kQ2hpbGROb2RlLmpzIiwiZXM2L2NvbW1vbi9ub2RlL25vblRlcm1pbmFsL2Rpc2NhcmRPZGRDaGlsZE5vZGVzLmpzIiwiZXM2L2NvbW1vbi9ub2RlL25vblRlcm1pbmFsL2Rpc2NhcmRTZWNvbmRDaGlsZE5vZGUuanMiLCJlczYvY29tbW9uL25vZGUvbm9uVGVybWluYWwvdHJhbnNwYXJlbnROb2RlLmpzIiwiZXM2L2NvbW1vbi9ub2RlL25vblRlcm1pbmFsL3RyYW5zcGFyZW50VGhlbktlZXBTZWNvbmROb2RlLmpzIiwiZXM2L2NvbW1vbi9ub2RlL3Rlcm1pbmFsLmpzIiwiZXM2L2NvbW1vbi9ub2RlL3Rlcm1pbmFsL2Vwc2lsb24uanMiLCJlczYvY29tbW9uL25vZGUvdGVybWluYWwvZXJyb3IuanMiLCJlczYvY29tbW9uL3BhcnNlVHJlZS5qcyIsImVzNi9jb21tb24vcGFyc2VUcmVlL2NoaWxkTm9kZXMuanMiLCJlczYvY29tbW9uL3BhcnNlVHJlZS9lbXB0eS5qcyIsImVzNi9jb21tb24vcGFyc2VUcmVlL2hvcml6b250YWxCcmFuY2guanMiLCJlczYvY29tbW9uL3BhcnNlVHJlZS9ub25UZXJtaW5hbE5vZGUuanMiLCJlczYvY29tbW9uL3BhcnNlVHJlZS9ydWxlTmFtZS5qcyIsImVzNi9jb21tb24vcGFyc2VUcmVlL3Rlcm1pbmFsTm9kZS5qcyIsImVzNi9jb21tb24vcGFyc2VUcmVlL3Rlcm1pbmFsTm9kZS9lcHNpbG9uLmpzIiwiZXM2L2NvbW1vbi9wYXJzZVRyZWUvdmVydGljYWxCcmFuY2guanMiLCJlczYvY29tbW9uL3BhcnNlci5qcyIsImVzNi9leGFtcGxlLmpzIiwiZXM2L2V4YW1wbGVzLmpzIiwiZXM2L2V4YW1wbGVzL2Jhc2ljLmpzIiwiZXM2L2V4YW1wbGVzL2JuZi5qcyIsImVzNi9leGFtcGxlcy9mbG9yZW5jZS5qcyIsImVzNi9mbG9yZW5jZS9ibmYuanMiLCJlczYvZmxvcmVuY2UvZGVmYXVsdEN1c3RvbUdyYW1tYXIvYm5mTWFwLmpzIiwiZXM2L2Zsb3JlbmNlL21hcHBpbmdzLmpzIiwiZXM2L2Zsb3JlbmNlL3BhcnNlci5qcyIsImVzNi91dGlsL2FycmF5LmpzIiwiZXM2L3V0aWwvYm5mLmpzIiwiZXM2L3V0aWwvcGFyc2VyLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3ktbGF5b3V0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3ktbGF5b3V0L2VzNi9jdXJzb3IuanMiLCJub2RlX21vZHVsZXMvZWFzeS1sYXlvdXQvZXM2L29wdGlvbnMuanMiLCJub2RlX21vZHVsZXMvZWFzeS1sYXlvdXQvZXM2L3NpemVhYmxlRWxlbWVudC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5LWxheW91dC9lczYvc3BsaXR0ZXIuanMiLCJub2RlX21vZHVsZXMvZWFzeS1sYXlvdXQvZXM2L3NwbGl0dGVyL2hvcml6b250YWwuanMiLCJub2RlX21vZHVsZXMvZWFzeS1sYXlvdXQvZXM2L3NwbGl0dGVyL3ZlcnRpY2FsLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvZG9jdW1lbnQuanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvZWxlbWVudC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi9lbGVtZW50L2JvZHkuanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvZWxlbWVudC9idXR0b24uanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvZWxlbWVudC9jaGVja2JveC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi9lbGVtZW50L2Rpdi5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi9lbGVtZW50L2xpbmsuanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvZWxlbWVudC9zZWxlY3QuanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvZWxlbWVudC9zcGFuLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L2lucHV0RWxlbWVudC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi9pbnB1dEVsZW1lbnQvaW5wdXQuanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvaW5wdXRFbGVtZW50L3RleHRhcmVhLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L21pc2MvYm91bmRzLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L21pc2Mvb2Zmc2V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L21peGluL2NsaWNrLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L21peGluL2V2ZW50LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L21peGluL2pzeC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi9taXhpbi9rZXkuanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvbWl4aW4vbW91c2UuanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvbWl4aW4vcmVzaXplLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L21peGluL3Njcm9sbC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi9yZWFjdC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi90ZXh0RWxlbWVudC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi93aW5kb3cuanMiLCJub2RlX21vZHVsZXMvb2NjYW0tbGV4ZXJzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvYmFzaWMvZW50cmllcy5qcyIsIm5vZGVfbW9kdWxlcy9vY2NhbS1sZXhlcnMvZXM2L2Jhc2ljL2xleGVyLmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvYmFzaWMvbGluZS5qcyIsIm5vZGVfbW9kdWxlcy9vY2NhbS1sZXhlcnMvZXM2L2Jhc2ljL3Rva2Vucy9jb21tZW50LmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvYmFzaWMvdG9rZW5zL3N0cmluZy5qcyIsIm5vZGVfbW9kdWxlcy9vY2NhbS1sZXhlcnMvZXM2L2JuZi9lbnRyaWVzLmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvYm5mL2xleGVyLmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvYm5mL2xpbmUuanMiLCJub2RlX21vZHVsZXMvb2NjYW0tbGV4ZXJzL2VzNi9ibmYvc3BlY2lhbFN5bWJvbHMuanMiLCJub2RlX21vZHVsZXMvb2NjYW0tbGV4ZXJzL2VzNi9ibmYvdG9rZW5zL2NvbW1lbnQuanMiLCJub2RlX21vZHVsZXMvb2NjYW0tbGV4ZXJzL2VzNi9jb21tb24vY29udGV4dC5qcyIsIm5vZGVfbW9kdWxlcy9vY2NhbS1sZXhlcnMvZXM2L2NvbW1vbi9sZXhlci5qcyIsIm5vZGVfbW9kdWxlcy9vY2NhbS1sZXhlcnMvZXM2L2NvbW1vbi9saW5lLmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvY29tbW9uL3J1bGUuanMiLCJub2RlX21vZHVsZXMvb2NjYW0tbGV4ZXJzL2VzNi9jb21tb24vcnVsZXMuanMiLCJub2RlX21vZHVsZXMvb2NjYW0tbGV4ZXJzL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQuanMiLCJub2RlX21vZHVsZXMvb2NjYW0tbGV4ZXJzL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC5qcyIsIm5vZGVfbW9kdWxlcy9vY2NhbS1sZXhlcnMvZXM2L2NvbW1vbi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L2VuZE9mLmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvbWlkZGxlT2YuanMiLCJub2RlX21vZHVsZXMvb2NjYW0tbGV4ZXJzL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9zdGFydE9mLmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvY29tbW9uL3Rva2VuL3NpZ25pZmljYW50LmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L2VuZE9mTGluZS5qcyIsIm5vZGVfbW9kdWxlcy9vY2NhbS1sZXhlcnMvZXM2L2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9zdHJpbmcuanMiLCJub2RlX21vZHVsZXMvb2NjYW0tbGV4ZXJzL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvd2hpdGVzcGFjZS5qcyIsIm5vZGVfbW9kdWxlcy9vY2NhbS1sZXhlcnMvZXM2L2NvbW1vbi90b2tlbnMuanMiLCJub2RlX21vZHVsZXMvb2NjYW0tbGV4ZXJzL2VzNi9jb21tb24vdG9rZW5zL2NvbW1lbnQuanMiLCJub2RlX21vZHVsZXMvb2NjYW0tbGV4ZXJzL2VzNi9jb21tb24vdG9rZW5zL3NpZ25pZmljYW50LmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvY29tbW9uL3Rva2Vucy9zdHJpbmcuanMiLCJub2RlX21vZHVsZXMvb2NjYW0tbGV4ZXJzL2VzNi9jb21tb24vdG9rZW5zL3doaXRlc3BhY2UuanMiLCJub2RlX21vZHVsZXMvb2NjYW0tbGV4ZXJzL2VzNi9mbG9yZW5jZS9lbnRyaWVzLmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvZmxvcmVuY2UvbGV4ZXIuanMiLCJub2RlX21vZHVsZXMvb2NjYW0tbGV4ZXJzL2VzNi9mbG9yZW5jZS9saW5lLmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvcGxhaW4vZW50cmllcy5qcyIsIm5vZGVfbW9kdWxlcy9vY2NhbS1sZXhlcnMvZXM2L3BsYWluL2xleGVyLmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvcGxhaW4vbGluZS5qcyIsIm5vZGVfbW9kdWxlcy9vY2NhbS1sZXhlcnMvZXM2L3BsYWluL3Rva2Vucy9jb21tZW50LmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvcGxhaW4vdG9rZW5zL3N0cmluZy5qcyIsIm5vZGVfbW9kdWxlcy9vY2NhbS1sZXhlcnMvZXM2L3BsYWluL3Rva2Vucy93aGl0ZXNwYWNlLmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvdXRpbC9hcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9vY2NhbS1sZXhlcnMvZXM2L3V0aWwvdG9rZW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUFFQSxJQUFNLHdYQUFOOztBQXdCQSxPQUFPLE9BQVAsR0FBaUIsR0FBakI7OztBQzFCQTs7Ozs7Ozs7OztBQUVBLElBQU0sU0FBUyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNLE1BQU0sUUFBUSxPQUFSLENBQVo7QUFBQSxJQUNNLGFBQWEsUUFBUSxnQkFBUixDQURuQjtBQUFBLElBRU0sWUFBWSxRQUFRLGVBQVIsQ0FGbEI7QUFBQSxJQUdNLGVBQWUsUUFBUSxrQkFBUixDQUhyQjs7SUFLUSxRLEdBQWEsTSxDQUFiLFE7OztBQUVSLElBQU0sV0FBVyxTQUFTLFdBQVQsRUFBakI7QUFBQSxJQUNNLFlBQVksVUFBVSxXQUFWLEVBRGxCOztJQUdNLFc7Ozs7Ozs7Ozs7OzRCQUNXLEcsRUFBSztBQUNsQixVQUFJLGNBQWMsSUFBbEI7O0FBRUEsVUFBSTtBQUNGLFlBQU0sUUFBUSxTQUFTLFlBQVQsQ0FBc0IsR0FBdEIsQ0FBZDtBQUFBLFlBQ00sT0FBTyxVQUFVLGFBQVYsQ0FBd0IsS0FBeEIsQ0FEYjtBQUFBLFlBRU0sUUFBUSxVQUFVLGFBQVYsQ0FBd0IsSUFBeEIsQ0FGZDs7QUFJQSxzQkFBYyxJQUFJLFdBQUosQ0FBZ0IsS0FBaEIsQ0FBZDtBQUNELE9BTkQsQ0FNRSxPQUFPLEtBQVAsRUFBYyxDQUVmOztBQUVELGFBQU8sV0FBUDtBQUNEOzs7a0NBRW9CO0FBQ25CLFVBQU0sY0FBYyxZQUFZLE9BQVosQ0FBb0IsR0FBcEIsQ0FBcEI7O0FBRUEsYUFBTyxXQUFQ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QUFxQixNQUFyQixDQUE0QixVQUE1QixDQUFiOztBQUVBLFlBQU0sU0FBTixDQUFnQixNQUFoQixDQUF1QixLQUF2QixDQUE2QixLQUE3QixFQUFvQyxJQUFwQztBQUNEOzs7Ozs7QUFHSCxPQUFPLE9BQVAsR0FBaUIsU0FBakI7OztBQ1pBOzs7Ozs7SUFFTSxTOzs7Ozs7O29DQUNtQixPLEVBQVM7QUFDOUIsVUFBTSxtQkFBbUIsUUFBUSxPQUFSLENBQWdCLEdBQWhCLEVBQW9CLE9BQXBCLEVBQTZCLE9BQTdCLENBQXFDLEdBQXJDLEVBQTBDLE1BQTFDLEVBQWtELE9BQWxELENBQTBELEdBQTFELEVBQStELE1BQS9ELENBQXpCOztBQUVBLGFBQU8sZ0JBQVA7QUFDRDs7Ozs7O0FBR0gsT0FBTyxPQUFQLEdBQWlCLFNBQWpCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYm5mID0gYFxuXG4gIGV4cHJlc3Npb24gICAgOjo9IFwiKFwiIGV4cHJlc3Npb24gXCIpXCIgZXhwcmVzc2lvbn5cblxuICAgICAgICAgICAgICAgICAgfCB0ZXJtIGV4cHJlc3Npb25+IDtcblxuICBvcGVyYXRvciAgICAgIDo6PSBcIitcIlxuXG4gICAgICAgICAgICAgICAgICB8IFwiLVwiXG5cbiAgICAgICAgICAgICAgICAgIHwgXCIvXCJcblxuICAgICAgICAgICAgICAgICAgfCBcIipcIiA7XG5cbiAgdGVybSAgICAgICAgICA6Oj0gbmF0dXJhbE51bWJlciA7XG5cbiAgbmF0dXJhbE51bWJlciA6Oj0gL1xcXFxkKy8gO1xuXG4gIGV4cHJlc3Npb25+ICAgOjo9IG9wZXJhdG9yIGV4cHJlc3Npb24gZXhwcmVzc2lvbn5cblxuICAgICAgICAgICAgICAgICAgfCDOtSA7XG5cbmA7XG5cbm1vZHVsZS5leHBvcnRzID0gYm5mO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgYm5mID0gcmVxdWlyZSgnLi9ibmYnKSxcbiAgICAgIHBhcnNlclV0aWwgPSByZXF1aXJlKCcuLi91dGlsL3BhcnNlcicpLFxuICAgICAgQk5GUGFyc2VyID0gcmVxdWlyZSgnLi4vYm5mL3BhcnNlcicpLFxuICAgICAgQ29tbW9uUGFyc2VyID0gcmVxdWlyZSgnLi4vY29tbW9uL3BhcnNlcicpO1xuXG5jb25zdCB7IEJORkxleGVyIH0gPSBsZXhlcnM7XG5cbmNvbnN0IGJuZkxleGVyID0gQk5GTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGJuZlBhcnNlciA9IEJORlBhcnNlci5mcm9tTm90aGluZygpO1xuXG5jbGFzcyBCYXNpY1BhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBmcm9tQk5GKGJuZikge1xuICAgIGxldCBiYXNpY1BhcnNlciA9IG51bGw7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgbGluZXMgPSBibmZMZXhlci5saW5lc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgICAgIG5vZGUgPSBibmZQYXJzZXIubm9kZUZyb21MaW5lcyhsaW5lcyksXG4gICAgICAgICAgICBydWxlcyA9IEJORlBhcnNlci5nZW5lcmF0ZVJ1bGVzKG5vZGUpO1xuXG4gICAgICBiYXNpY1BhcnNlciA9IG5ldyBCYXNpY1BhcnNlcihydWxlcyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIFxuICAgIH1cblxuICAgIHJldHVybiBiYXNpY1BhcnNlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBiYXNpY1BhcnNlciA9IEJhc2ljUGFyc2VyLmZyb21CTkYoYm5mKTtcblxuICAgIHJldHVybiBiYXNpY1BhcnNlcjtcbiAgfVxuXG4gIHN0YXRpYyBmaW5kUnVsZShydWxlTmFtZSwgcnVsZXMpIHsgcmV0dXJuIHBhcnNlclV0aWwuZmluZFJ1bGUocnVsZU5hbWUsIHJ1bGVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2ljUGFyc2VyO1xuXG5CYXNpY1BhcnNlci5ibmYgPSBibmY7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGJuZiA9IGBcblxuICAgIHJ1bGVzICAgICAgICAgICAgICAgIDo6PSBydWxlKyA7XG4gICAgXG4gICAgcnVsZSAgICAgICAgICAgICAgICAgOjo9IHJ1bGVOYW1lIFwiOjo9XCIgZGVmaW5pdGlvbnMgXCI7XCIgO1xuICAgIFxuICAgIGRlZmluaXRpb25zICAgICAgICAgIDo6PSBkZWZpbml0aW9uICggXCJ8XCIgZGVmaW5pdGlvbiApKiA7XG4gICAgXG4gICAgZGVmaW5pdGlvbiAgICAgICAgICAgOjo9IHBhcnQrIDtcbiAgICBcblxuICAgIFxuXG4gICAgXG5cbiAgICBcblxuICAgIFxuXG4gICAgXG5cbiAgICBcbiAgICBwYXJ0ICAgICAgICAgICAgICAgICA6Oj0gXCI8Tk9fV0hJVEVTUEFDRT5cIiBwYXJ0IHBhcnR+XG4gICAgXG5cbiAgICBcblxuICAgIFxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgXCIoXCIgcGFydCsgXCIpXCIgcGFydH5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBcIihcIiBwYXJ0ICggXCJ8XCIgcGFydCApKyBcIilcIiBwYXJ0flxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB8IHJ1bGVOYW1lIHBhcnR+XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB8IHJlZ3VsYXJFeHByZXNzaW9uIHBhcnR+XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNpZ25pZmljYW50VG9rZW5UeXBlIHBhcnR+XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB8IHRlcm1pbmFsU3ltYm9sIHBhcnR+XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVuZE9mTGluZSBwYXJ0flxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlcHNpbG9uIHBhcnR+XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB8IHdpbGRjYXJkIHBhcnR+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA7XG4gICAgXG4gICAgcnVsZU5hbWUgICAgICAgICAgICAgOjo9IFtuYW1lXSA7XG4gICAgXG4gICAgcmVndWxhckV4cHJlc3Npb24gICAgOjo9IFtyZWd1bGFyRXhwcmVzc2lvbl0gO1xuICAgIFxuICAgIHNpZ25pZmljYW50VG9rZW5UeXBlIDo6PSBbdHlwZV0gO1xuICAgIFxuICAgIHRlcm1pbmFsU3ltYm9sICAgICAgIDo6PSBbc3RyaW5nXSA7XG4gICAgXG4gICAgZW5kT2ZMaW5lICAgICAgICAgICAgOjo9IFwiPEVORF9PRl9MSU5FPlwiIDtcbiAgICBcbiAgICBlcHNpbG9uICAgICAgICAgICAgICA6Oj0gXCLOtVwiIDtcbiAgICBcbiAgICB3aWxkY2FyZCAgICAgICAgICAgICA6Oj0gXCIuXCIgO1xuICAgIFxuICAgIHBhcnR+ICAgICAgICAgICAgICAgIDo6PSA8Tk9fV0hJVEVTUEFDRT5cIj9cIiBwYXJ0flxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfCA8Tk9fV0hJVEVTUEFDRT5cIipcIiBwYXJ0flxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfCA8Tk9fV0hJVEVTUEFDRT5cIitcIiBwYXJ0flxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfCDOtSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuYDtcblxubW9kdWxlLmV4cG9ydHMgPSBibmY7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwvYXJyYXknKSxcbiAgICAgIFJ1bGVOYW1lUGFydCA9IHJlcXVpcmUoJy4vcGFydC9ydWxlTmFtZScpO1xuXG5jbGFzcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IocGFydHMpIHtcbiAgICB0aGlzLnBhcnRzID0gcGFydHM7XG4gIH1cblxuICBnZXRQYXJ0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0cztcbiAgfVxuXG4gIGdldEZpcnN0UGFydCgpIHtcbiAgICBjb25zdCBmaXJzdFBhcnQgPSBhcnJheVV0aWwuZmlyc3QodGhpcy5wYXJ0cyk7XG5cbiAgICByZXR1cm4gZmlyc3RQYXJ0O1xuICB9XG5cbiAgZ2V0UGFydHNMZW5ndGgoKSB7XG4gICAgY29uc3QgcGFydHNMZW5ndGggPSB0aGlzLnBhcnRzLmxlbmd0aDtcblxuICAgIHJldHVybiBwYXJ0c0xlbmd0aDtcbiAgfVxuXG4gIGdldEFsbEJ1dEZpcnN0UGFydHMoKSB7XG4gICAgY29uc3QgYWxsQnV0Rmlyc3RQYXJ0cyA9IHRoaXMucGFydHMuc2xpY2UoMSk7XG5cbiAgICByZXR1cm4gYWxsQnV0Rmlyc3RQYXJ0cztcbiAgfVxuXG4gIGlzRmlyc3RQYXJ0UnVsZU5hbWVQYXJ0KCkge1xuICAgIGNvbnN0IGZpcnN0UGFydCA9IHRoaXMuZ2V0Rmlyc3RQYXJ0KCksXG4gICAgICAgICAgZmlyc3RQYXJ0UnVsZU5hbWVQYXJ0ID0gKGZpcnN0UGFydCBpbnN0YW5jZW9mIFJ1bGVOYW1lUGFydCk7XG5cbiAgICByZXR1cm4gZmlyc3RQYXJ0UnVsZU5hbWVQYXJ0O1xuICB9XG5cbiAgcGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbGV0IG5vZGVzID0gW107XG5cbiAgICBjb25zdCBzYXZlZEluZGV4ID0gY29udGV4dC5zYXZlZEluZGV4KCksXG4gICAgICAgICAgZXZlcnlQYXJ0UGFyc2VkID0gdGhpcy5wYXJ0cy5ldmVyeShmdW5jdGlvbihwYXJ0KSB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0Tm9kZU9yTm9kZXMgPSBwYXJ0LnBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgICAgICAgICBwYXJ0UGFyc2VkID0gKHBhcnROb2RlT3JOb2RlcyAhPT0gbnVsbCk7XG5cbiAgICAgICAgICAgIGlmIChwYXJ0UGFyc2VkKSB7XG4gICAgICAgICAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KHBhcnROb2RlT3JOb2Rlcyk7XG5cbiAgICAgICAgICAgICAgbm9XaGl0ZXNwYWNlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBwYXJ0UGFyc2VkO1xuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKCFldmVyeVBhcnRQYXJzZWQpIHtcbiAgICAgIGNvbnRleHQuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuXG4gICAgICBub2RlcyA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgY29uc3QgcGFydHNTdHJpbmcgPSB0aGlzLnBhcnRzLnJlZHVjZShmdW5jdGlvbihwYXJ0c1N0cmluZywgcGFydCkge1xuICAgICAgICAgIGNvbnN0IHBhcnRTdHJpbmcgPSBwYXJ0LnRvU3RyaW5nKCk7XG5cbiAgICAgICAgICBpZiAocGFydHNTdHJpbmcgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gcGFydFN0cmluZztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBgJHtwYXJ0c1N0cmluZ30gJHtwYXJ0U3RyaW5nfWA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHBhcnRzU3RyaW5nO1xuICAgICAgICB9LCBudWxsKSxcbiAgICAgICAgc3RyaW5nID0gcGFydHNTdHJpbmc7IC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERlZmluaXRpb247XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbicpLFxuICAgICAgUnVsZU5hbWVQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC9ydWxlTmFtZScpLFxuICAgICAgR3JvdXBPZlBhcnRzUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvZ3JvdXBPZlBhcnRzJyksXG4gICAgICBPbmVPck1vcmVQYXJ0c1BhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L29uZU9yTW9yZVBhcnRzJyksXG4gICAgICBUZXJtaW5hbFN5bWJvbFBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L3Rlcm1pbmFsU3ltYm9sJyk7XG5cbmNvbnN0IHsgQk5GTGV4ZXIgfSA9IGxleGVycyxcbiAgICAgIHsgc3BlY2lhbFN5bWJvbHMgfSA9IEJORkxleGVyLFxuICAgICAgeyB2ZXJ0aWNhbEJhciwgb3BlbkJyYWNrZXQsIGNsb3NlQnJhY2tldCB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmNsYXNzIENob2ljZU9mUGFydHNEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHBhcnRSdWxlTmFtZSA9ICdwYXJ0JyxcbiAgICAgICAgICByaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZSA9ICdyaWdodFJlY3Vyc2l2ZVBhcnQnLFxuICAgICAgICAgIHZlcnRpY2FsQmFyVGVybWluYWxTeW1ib2xDb250ZW50ID0gdmVydGljYWxCYXIsXG4gICAgICAgICAgb3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBvcGVuQnJhY2tldCxcbiAgICAgICAgICBjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBjbG9zZUJyYWNrZXQsXG4gICAgICAgICAgcGFydFJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQocGFydFJ1bGVOYW1lKSxcbiAgICAgICAgICByaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KHJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lKSxcbiAgICAgICAgICB2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQodmVydGljYWxCYXJUZXJtaW5hbFN5bWJvbENvbnRlbnQpLFxuICAgICAgICAgIG9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydChvcGVuQnJhY2tldFRlcm1pbmFsU3ltYm9sQ29udGVudCksXG4gICAgICAgICAgY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydChjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQpLFxuICAgICAgICAgIHZlcnRpY2FsQmFyVGVybWluYWxTeW1ib2xUaGVuUGFydFJ1bGVOYW1lUGFydHMgPSBbXG4gICAgICAgICAgICB2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sUGFydCxcbiAgICAgICAgICAgIHBhcnRSdWxlTmFtZVBhcnRcbiAgICAgICAgICBdLFxuICAgICAgICAgIGdyb3VwT2ZQYXJ0c1BhcnQgPSBuZXcgR3JvdXBPZlBhcnRzUGFydCh2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sVGhlblBhcnRSdWxlTmFtZVBhcnRzKSxcbiAgICAgICAgICBvbmVPck1vcmVHcm91cE9mUGFydHNQYXJ0ID0gbmV3IE9uZU9yTW9yZVBhcnRzUGFydChncm91cE9mUGFydHNQYXJ0KSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIG9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0LFxuICAgICAgICAgICAgcGFydFJ1bGVOYW1lUGFydCxcbiAgICAgICAgICAgIG9uZU9yTW9yZUdyb3VwT2ZQYXJ0c1BhcnQsXG4gICAgICAgICAgICBjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQsXG4gICAgICAgICAgICByaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZVBhcnRcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2hvaWNlT2ZQYXJ0c0RlZmluaXRpb247XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uJyksXG4gICAgICBSdWxlTmFtZVBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L3J1bGVOYW1lJyksXG4gICAgICBPbmVPck1vcmVQYXJ0c1BhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L29uZU9yTW9yZVBhcnRzJyk7XG5cbmNsYXNzIERlZmluaXRpb25EZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHBhcnRSdWxlTmFtZSA9ICdwYXJ0JyxcbiAgICAgICAgICBwYXJ0UnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChwYXJ0UnVsZU5hbWUpLFxuICAgICAgICAgIG9uZU9yTW9yZVJ1bGVOYW1lUGFydHNQYXJ0ID0gbmV3IE9uZU9yTW9yZVBhcnRzUGFydChwYXJ0UnVsZU5hbWVQYXJ0KSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIG9uZU9yTW9yZVJ1bGVOYW1lUGFydHNQYXJ0XG4gICAgICAgICAgXTtcblxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGVmaW5pdGlvbkRlZmluaXRpb247XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbicpLFxuICAgICAgUnVsZU5hbWVQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC9ydWxlTmFtZScpLFxuICAgICAgR3JvdXBPZlBhcnRzUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvZ3JvdXBPZlBhcnRzJyksXG4gICAgICBUZXJtaW5hbFN5bWJvbFBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L3Rlcm1pbmFsU3ltYm9sJyksXG4gICAgICBaZXJvT3JNb3JlUGFydHNQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC96ZXJvT3JNb3JlUGFydHMnKTtcblxuY29uc3QgeyBCTkZMZXhlciB9ID0gbGV4ZXJzLFxuICAgICAgeyBzcGVjaWFsU3ltYm9scyB9ID0gQk5GTGV4ZXIsXG4gICAgICB7IHZlcnRpY2FsQmFyIH0gPSBzcGVjaWFsU3ltYm9scztcblxuY2xhc3MgRGVmaW5pdGlvbnNEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IGRlZmluaXRpb25SdWxlTmFtZSA9ICdkZWZpbml0aW9uJyxcbiAgICAgICAgICB2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sQ29udGVudCA9IHZlcnRpY2FsQmFyLFxuICAgICAgICAgIGRlZmluaXRpb25SdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KGRlZmluaXRpb25SdWxlTmFtZSksXG4gICAgICAgICAgdmVydGljYWxCYXJUZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KHZlcnRpY2FsQmFyVGVybWluYWxTeW1ib2xDb250ZW50KSxcbiAgICAgICAgICB2ZXJ0aWNhbEJhclRlcm1pbmFsU3ltYm9sVGhlbkRlZmluaXRpb25SdWxlTmFtZVBhcnRzID0gW1xuICAgICAgICAgICAgdmVydGljYWxCYXJUZXJtaW5hbFN5bWJvbFBhcnQsXG4gICAgICAgICAgICBkZWZpbml0aW9uUnVsZU5hbWVQYXJ0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBncm91cE9mUGFydHNQYXJ0ID0gbmV3IEdyb3VwT2ZQYXJ0c1BhcnQodmVydGljYWxCYXJUZXJtaW5hbFN5bWJvbFRoZW5EZWZpbml0aW9uUnVsZU5hbWVQYXJ0cyksXG4gICAgICAgICAgemVyb09yTW9yZUdyb3VwT2ZQYXJ0c1BhcnQgPSBuZXcgWmVyb09yTW9yZVBhcnRzUGFydChncm91cE9mUGFydHNQYXJ0KSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIGRlZmluaXRpb25SdWxlTmFtZVBhcnQsXG4gICAgICAgICAgICB6ZXJvT3JNb3JlR3JvdXBPZlBhcnRzUGFydFxuICAgICAgICAgIF07XG4gICAgXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEZWZpbml0aW9uc0RlZmluaXRpb247XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uJyksXG4gICAgICBFcHNpbG9uUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvZXBzaWxvbicpO1xuXG5jbGFzcyBFcHNpbG9uRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBlcHNpbG9uUGFydCA9IG5ldyBFcHNpbG9uUGFydCgpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgZXBzaWxvblBhcnRcbiAgICAgICAgICBdO1xuXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFcHNpbG9uRGVmaW5pdGlvbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uJyksXG4gICAgICBSdWxlTmFtZVBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L3J1bGVOYW1lJyksXG4gICAgICBPbmVPck1vcmVQYXJ0c1BhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L29uZU9yTW9yZVBhcnRzJyksXG4gICAgICBUZXJtaW5hbFN5bWJvbFBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L3Rlcm1pbmFsU3ltYm9sJyk7XG5cbmNvbnN0IHsgQk5GTGV4ZXIgfSA9IGxleGVycyxcbiAgICAgIHsgc3BlY2lhbFN5bWJvbHMgfSA9IEJORkxleGVyLFxuICAgICAgeyBvcGVuQnJhY2tldCwgY2xvc2VCcmFja2V0IH0gPSBzcGVjaWFsU3ltYm9scztcblxuY2xhc3MgR3JvdXBPZlBhcnRzRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBwYXJ0UnVsZU5hbWUgPSAncGFydCcsXG4gICAgICAgICAgcmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWUgPSAncmlnaHRSZWN1cnNpdmVQYXJ0JyxcbiAgICAgICAgICBvcGVuQnJhY2tldFRlcm1pbmFsU3ltYm9sQ29udGVudCA9IG9wZW5CcmFja2V0LFxuICAgICAgICAgIGNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sQ29udGVudCA9IGNsb3NlQnJhY2tldCxcbiAgICAgICAgICBwYXJ0UnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChwYXJ0UnVsZU5hbWUpLFxuICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQocmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWUpLFxuICAgICAgICAgIG9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydChvcGVuQnJhY2tldFRlcm1pbmFsU3ltYm9sQ29udGVudCksXG4gICAgICAgICAgY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydChjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQpLFxuICAgICAgICAgIG9uZU9yTW9yZVBhcnRSdWxlTmFtZVBhcnRzUGFydCA9IG5ldyBPbmVPck1vcmVQYXJ0c1BhcnQocGFydFJ1bGVOYW1lUGFydCksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBvcGVuQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydCxcbiAgICAgICAgICAgIG9uZU9yTW9yZVBhcnRSdWxlTmFtZVBhcnRzUGFydCxcbiAgICAgICAgICAgIGNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydCxcbiAgICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lUGFydFxuICAgICAgICAgIF07XG4gICAgXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHcm91cE9mUGFydHNEZWZpbml0aW9uO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24nKSxcbiAgICAgIFJ1bGVOYW1lUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvcnVsZU5hbWUnKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvdGVybWluYWxTeW1ib2wnKTtcblxuY29uc3QgeyBCTkZMZXhlciB9ID0gbGV4ZXJzLFxuICAgICAgeyBzcGVjaWFsU3ltYm9scyB9ID0gQk5GTGV4ZXIsXG4gICAgICB7IE5PX1dISVRFU1BBQ0UgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5jbGFzcyBOb1doaXRlc3BhY2VEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHBhcnRSdWxlTmFtZSA9ICdwYXJ0JyxcbiAgICAgICAgICByaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZSA9ICdyaWdodFJlY3Vyc2l2ZVBhcnQnLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZVRlcm1pbmFsU3ltYm9sQ29udGVudCA9IE5PX1dISVRFU1BBQ0UsXG4gICAgICAgICAgcGFydFJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQocGFydFJ1bGVOYW1lKSxcbiAgICAgICAgICByaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KHJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lKSxcbiAgICAgICAgICBub1doaXRlc3BhY2VUZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KG5vV2hpdGVzcGFjZVRlcm1pbmFsU3ltYm9sQ29udGVudCksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBub1doaXRlc3BhY2VUZXJtaW5hbFN5bWJvbFBhcnQsXG4gICAgICAgICAgICBwYXJ0UnVsZU5hbWVQYXJ0LFxuICAgICAgICAgICAgcmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWVQYXJ0XG4gICAgICAgICAgXTtcbiAgICBcbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vV2hpdGVzcGFjZURlZmluaXRpb247XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uJyksXG4gICAgICBSdWxlTmFtZVBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L3J1bGVOYW1lJyk7XG5cbmNsYXNzIFBhcnRSdWxlRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZSkge1xuICAgIGNvbnN0IHJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lID0gJ3JpZ2h0UmVjdXJzaXZlUGFydCcsXG4gICAgICAgICAgcnVsZU5hbWVSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KHJ1bGVOYW1lKSxcbiAgICAgICAgICByaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KHJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIHJ1bGVOYW1lUnVsZU5hbWVQYXJ0LFxuICAgICAgICAgICAgcmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWVQYXJ0XG4gICAgICAgICAgXTtcbiAgICBcbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcnRSdWxlRGVmaW5pdGlvbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24nKSxcbiAgICAgIFJ1bGVOYW1lUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvcnVsZU5hbWUnKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvdGVybWluYWxTeW1ib2wnKTtcblxuY2xhc3MgUmlnaHRSZWN1cnNpdmVQYXJ0UnVsZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IodGVybWluYWxTeW1ib2xDb250ZW50KSB7XG4gICAgY29uc3QgdGVybWluYWxTeW1ib2xQYXJ0Tm9XaGl0ZXNwYWNlID0gdHJ1ZSxcbiAgICAgICAgICByaWdodFJlY3Vyc2l2ZVBhcnRSdWxlTmFtZSA9ICdyaWdodFJlY3Vyc2l2ZVBhcnQnLFxuICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQodGVybWluYWxTeW1ib2xDb250ZW50LCB0ZXJtaW5hbFN5bWJvbFBhcnROb1doaXRlc3BhY2UpLFxuICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQocmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWUpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgdGVybWluYWxTeW1ib2xQYXJ0LFxuICAgICAgICAgICAgcmlnaHRSZWN1cnNpdmVQYXJ0UnVsZU5hbWVQYXJ0XG4gICAgICAgICAgXTtcbiAgICBcbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVEZWZpbml0aW9uO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24nKSxcbiAgICAgIFJ1bGVOYW1lUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvcnVsZU5hbWUnKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvdGVybWluYWxTeW1ib2wnKTtcblxuY29uc3QgeyBCTkZMZXhlciB9ID0gbGV4ZXJzLFxuICAgICAgeyBzcGVjaWFsU3ltYm9scyB9ID0gQk5GTGV4ZXIsXG4gICAgICB7IHNlcGFyYXRvciwgdGVybWluYXRvciB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmNsYXNzIFJ1bGVEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHNlcGFyYXRvclRlcm1pbmFsU3ltYm9sQ29udGVudCA9IHNlcGFyYXRvcixcbiAgICAgICAgICB0ZXJtaW5hdG9yVGVybWluYWxTeW1ib2xDb250ZW50ID0gdGVybWluYXRvcixcbiAgICAgICAgICBydWxlTmFtZVJ1bGVOYW1lID0gJ3J1bGVOYW1lJyxcbiAgICAgICAgICBkZWZpbml0aW9uc1J1bGVOYW1lID0gJ2RlZmluaXRpb25zJyxcbiAgICAgICAgICBzZXBhcmF0b3JUZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KHNlcGFyYXRvclRlcm1pbmFsU3ltYm9sQ29udGVudCksXG4gICAgICAgICAgdGVybWluYXRvclRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQodGVybWluYXRvclRlcm1pbmFsU3ltYm9sQ29udGVudCksXG4gICAgICAgICAgZGVmaW5pdGlvbnNSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KGRlZmluaXRpb25zUnVsZU5hbWUpLFxuICAgICAgICAgIHJ1bGVOYW1lUnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChydWxlTmFtZVJ1bGVOYW1lKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIHJ1bGVOYW1lUnVsZU5hbWVQYXJ0LFxuICAgICAgICAgICAgc2VwYXJhdG9yVGVybWluYWxTeW1ib2xQYXJ0LFxuICAgICAgICAgICAgZGVmaW5pdGlvbnNSdWxlTmFtZVBhcnQsXG4gICAgICAgICAgICB0ZXJtaW5hdG9yVGVybWluYWxTeW1ib2xQYXJ0XG4gICAgICAgICAgXTtcbiAgICBcbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGVEZWZpbml0aW9uO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbicpLFxuICAgICAgUnVsZU5hbWVQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC9ydWxlTmFtZScpLFxuICAgICAgT25lT3JNb3JlUGFydHNQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC9vbmVPck1vcmVQYXJ0cycpO1xuXG5jbGFzcyBSdWxlc0RlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgcnVsZVJ1bGVOYW1lID0gJ3J1bGUnLFxuICAgICAgICAgIHJ1bGVSdWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KHJ1bGVSdWxlTmFtZSksXG4gICAgICAgICAgb25lT3JNb3JlUnVsZVJ1bGVOYW1lUGFydHNQYXJ0ID0gbmV3IE9uZU9yTW9yZVBhcnRzUGFydChydWxlUnVsZU5hbWVQYXJ0KSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIG9uZU9yTW9yZVJ1bGVSdWxlTmFtZVBhcnRzUGFydFxuICAgICAgICAgIF07XG4gICAgXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlc0RlZmluaXRpb247XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uJyksXG4gICAgICBTaWduaWZpY2FudFRva2VuVHlwZVBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L3NpZ25pZmljYW50VG9rZW5UeXBlJyk7XG5cbmNsYXNzIFNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcihzaWduaWZpY2FudFRva2VuVHlwZSkge1xuICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW5UeXBlUGFydCA9IG5ldyBTaWduaWZpY2FudFRva2VuVHlwZVBhcnQoc2lnbmlmaWNhbnRUb2tlblR5cGUpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0XG4gICAgICAgICAgXTtcbiAgICBcbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24nKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvdGVybWluYWxTeW1ib2wnKTtcblxuY2xhc3MgVGVybWluYWxTeW1ib2xEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQpIHtcbiAgICBjb25zdCB0ZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KGNvbnRlbnQpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgdGVybWluYWxTeW1ib2xQYXJ0XG4gICAgICAgICAgXTtcbiAgICBcbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3MgRGVmaW5pdGlvbk5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZURlZmluaXRpb24oRGVmaW5pdGlvbikge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBwYXJ0Tm9kZXMgPSBjaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICBwYXJ0cyA9IHBhcnROb2Rlcy5tYXAoZnVuY3Rpb24ocGFydE5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vV2hpdGVzcGFjZSA9IGZhbHNlLCAvLy9cbiAgICAgICAgICAgICAgICAgIHBhcnQgPSBwYXJ0Tm9kZS5nZW5lcmF0ZVBhcnQobm9XaGl0ZXNwYWNlKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gcGFydDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBkZWZpbml0aW9uID0gbmV3IERlZmluaXRpb24ocGFydHMpO1xuXG4gICAgcmV0dXJuIGRlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVzQW5kUnVsZU5hbWUobm9kZXMsIHJ1bGVOYW1lKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IG5vZGVzLCAvLy9cbiAgICAgICAgICBydWxlc05vZGUgPSBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcywgRGVmaW5pdGlvbk5vZGUpO1xuXG4gICAgcmV0dXJuIHJ1bGVzTm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERlZmluaXRpb25Ob2RlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWwgPSByZXF1aXJlKCcuLi8uLi91dGlsL2FycmF5JyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBEZWZpbml0aW9uc05vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZURlZmluaXRpb25zKERlZmluaXRpb24pIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgZGVmaW5pdGlvbk5vZGVzID0gY2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9uTm9kZXMubWFwKGZ1bmN0aW9uKGRlZmluaXRpb25Ob2RlKSB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uID0gZGVmaW5pdGlvbk5vZGUuZ2VuZXJhdGVEZWZpbml0aW9uKERlZmluaXRpb24pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gZGVmaW5pdGlvbjtcbiAgICAgICAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gZGVmaW5pdGlvbnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVzQW5kUnVsZU5hbWUobm9kZXMsIHJ1bGVOYW1lKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IGFycmF5VXRpbC5kaXNjYXJkT2RkKG5vZGVzKSxcbiAgICAgICAgICBydWxlc05vZGUgPSBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcywgRGVmaW5pdGlvbnNOb2RlKTtcblxuICAgIHJldHVybiBydWxlc05vZGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEZWZpbml0aW9uc05vZGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVuZE9mTGluZVBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L2VuZE9mTGluZScpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3MgRW5kT2ZMaW5lTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUGFydChub1doaXRlc3BhY2UpIHtcbiAgICBjb25zdCBlbmRPZkxpbmVQYXJ0ID0gbmV3IEVuZE9mTGluZVBhcnQobm9XaGl0ZXNwYWNlKTtcblxuICAgIHJldHVybiBlbmRPZkxpbmVQYXJ0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2Rlc0FuZFJ1bGVOYW1lKG5vZGVzLCBydWxlTmFtZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21Ob2Rlc0FuZFJ1bGVOYW1lKG5vZGVzLCBydWxlTmFtZSwgRW5kT2ZMaW5lTm9kZSk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFbmRPZkxpbmVOb2RlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFcHNpbG9uUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvZXBzaWxvbicpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3MgRXBzaWxvbk5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZVBhcnQobm9XaGl0ZXNwYWNlKSB7XG4gICAgY29uc3QgZXBzaWxvblBhcnQgPSBuZXcgRXBzaWxvblBhcnQobm9XaGl0ZXNwYWNlKTtcblxuICAgIHJldHVybiBlcHNpbG9uUGFydDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRSdWxlTmFtZShub2RlcywgcnVsZU5hbWUpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tTm9kZXNBbmRSdWxlTmFtZShub2RlcywgcnVsZU5hbWUsIEVwc2lsb25Ob2RlKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVwc2lsb25Ob2RlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBibmZVdGlsID0gcmVxdWlyZSgnLi4vLi4vdXRpbC9ibmYnKSxcbiAgICAgIGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWwvYXJyYXknKSxcbiAgICAgIEdyb3VwT2ZQYXJ0c1BhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L2dyb3VwT2ZQYXJ0cycpLFxuICAgICAgQ2hvaWNlT2ZQYXJ0c1BhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L2Nob2ljZU9mUGFydHMnKSxcbiAgICAgIE9wdGlvbmFsUGFydFBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L29wdGlvbmFsUGFydCcpLFxuICAgICAgWmVyb09yTW9yZVBhcnRzUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvemVyb09yTW9yZVBhcnRzJyksXG4gICAgICBPbmVPck1vcmVQYXJ0c1BhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L29uZU9yTW9yZVBhcnRzJyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5cbmNsYXNzIFBhcnROb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVQYXJ0KG5vV2hpdGVzcGFjZSkge1xuICAgIGxldCBwYXJ0ID0gbnVsbDtcblxuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBub2RlcyA9IGNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgIHF1YW50aWZpZXJzID0gcXVhbnRpZmllcnNGcm9tTm9kZXMobm9kZXMpO1xuXG4gICAgbm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlRnJvbU5vZGVzKG5vZGVzLCBub1doaXRlc3BhY2UpO1xuXG4gICAgY29uc3Qgbm9kZXNMZW5ndGggPSBub2Rlcy5sZW5ndGg7XG4gICAgXG4gICAgaWYgKG5vZGVzTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBmaXJzdE5vZGUgPSBhcnJheVV0aWwuZmlyc3Qobm9kZXMpLFxuICAgICAgICAgICAgbm9kZSA9IGZpcnN0Tm9kZTsgIC8vL1xuXG4gICAgICBwYXJ0ID0gcGFydEZyb21Ob2RlKG5vZGUsIG5vV2hpdGVzcGFjZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnQgPSBwYXJ0RnJvbU5vZGVzKG5vZGVzKTtcbiAgICB9XG4gICAgXG4gICAgcGFydCA9IHBhcnRGcm9tUGFydEFuZFF1YW50aWZpZXJzKHBhcnQsIHF1YW50aWZpZXJzKTtcblxuICAgIHJldHVybiBwYXJ0O1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbU5vZGVzQW5kUnVsZU5hbWUobm9kZXMsIHJ1bGVOYW1lKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbU5vZGVzQW5kUnVsZU5hbWUobm9kZXMsIHJ1bGVOYW1lLCBQYXJ0Tm9kZSk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQYXJ0Tm9kZTtcblxuZnVuY3Rpb24gbm9XaGl0ZXNwYWNlRnJvbU5vZGVzKG5vZGVzLCBub1doaXRlc3BhY2UpIHtcbiAgY29uc3QgZmlyc3ROb2RlID0gYXJyYXlVdGlsLmZpcnN0KG5vZGVzKSxcbiAgICAgICAgZmlyc3ROb2RlTm9XaGl0ZXNwYWNlTm9kZSA9IGJuZlV0aWwuaXNOb2RlTm9XaGl0ZXNwYWNlTm9kZShmaXJzdE5vZGUpO1xuXG4gIGlmIChmaXJzdE5vZGVOb1doaXRlc3BhY2VOb2RlKSB7XG4gICAgbm9XaGl0ZXNwYWNlID0gdHJ1ZTtcblxuICAgIGNvbnN0IGJlZ2luID0gMCxcbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICBub2Rlcy5zcGxpY2UoYmVnaW4sIGRlbGV0ZUNvdW50KTtcbiAgfVxuXG4gIHJldHVybiBub1doaXRlc3BhY2U7XG59XG5cbmZ1bmN0aW9uIHF1YW50aWZpZXJzRnJvbU5vZGVzKG5vZGVzKSB7XG4gIGxldCAgcXVhbnRpZmllcnMgPSBbXTtcblxuICBjb25zdCBsYXN0Tm9kZSA9IGFycmF5VXRpbC5sYXN0KG5vZGVzKSxcbiAgICAgICAgbGFzdE5vZGVRdWFudGlmaWVyc05vZGUgPSBibmZVdGlsLmlzTm9kZVF1YW50aWZpZXJzTm9kZShsYXN0Tm9kZSk7XG5cbiAgaWYgKGxhc3ROb2RlUXVhbnRpZmllcnNOb2RlKSB7XG4gICAgY29uc3QgcXVhbnRpZmllcnNOb2RlID0gbGFzdE5vZGU7ICAvLy9cblxuICAgIHF1YW50aWZpZXJzID0gYm5mVXRpbC5xdWFudGlmaWVyc0Zyb21RdWFudGlmaWVyc05vZGUocXVhbnRpZmllcnNOb2RlKTtcblxuICAgIGNvbnN0IGJlZ2luID0gLTEsXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgbm9kZXMuc3BsaWNlKGJlZ2luLCBkZWxldGVDb3VudCk7XG4gIH1cblxuICByZXR1cm4gcXVhbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIHBhcnRGcm9tTm9kZShub2RlLCBub1doaXRlc3BhY2UpIHtcbiAgY29uc3QgcGFydCA9IG5vZGUuZ2VuZXJhdGVQYXJ0KG5vV2hpdGVzcGFjZSk7XG5cbiAgcmV0dXJuIHBhcnQ7XG59XG5cbmZ1bmN0aW9uIHBhcnRGcm9tTm9kZXMobm9kZXMpIHtcbiAgY29uc3QgcGFydCA9IENob2ljZU9mUGFydHNQYXJ0LmZyb21Ob2Rlcyhub2RlcykgfHwgR3JvdXBPZlBhcnRzUGFydC5mcm9tTm9kZXMobm9kZXMpOyAvLy8gXG5cbiAgcmV0dXJuIHBhcnQ7XG59XG5cbmZ1bmN0aW9uIHBhcnRGcm9tUGFydEFuZFF1YW50aWZpZXJzKHBhcnQsIHF1YW50aWZpZXJzKSB7XG4gIGNvbnN0IHF1YW50aWZpZXJzTGVuZ3RoID0gcXVhbnRpZmllcnMubGVuZ3RoO1xuXG4gIGlmIChxdWFudGlmaWVyc0xlbmd0aCA+IDApIHtcbiAgICBjb25zdCBxdWFudGlmaWVyID0gcXVhbnRpZmllcnMuc2hpZnQoKSxcbiAgICAgICAgICBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gc2VxdWVuY2VPZlBhcnRzUGFydEZyb21QYXJ0QW5kUXVhbnRpZmllcihwYXJ0LCBxdWFudGlmaWVyKTtcblxuICAgIHBhcnQgPSBzZXF1ZW5jZU9mUGFydHNQYXJ0OyAvLy9cblxuICAgIHBhcnQgPSBwYXJ0RnJvbVBhcnRBbmRRdWFudGlmaWVycyhwYXJ0LCBxdWFudGlmaWVycyk7XG4gIH1cblxuICByZXR1cm4gcGFydDtcbn1cblxuZnVuY3Rpb24gc2VxdWVuY2VPZlBhcnRzUGFydEZyb21QYXJ0QW5kUXVhbnRpZmllcihwYXJ0LCBxdWFudGlmaWVyKSB7XG4gIGxldCBzZXF1ZW5jZU9mUGFydHNQYXJ0O1xuXG4gIHN3aXRjaCAocXVhbnRpZmllcikge1xuICAgIGNhc2UgJz8nOlxuICAgICAgY29uc3Qgb3B0aW9uYWxQYXJ0UGFydCA9IG5ldyBPcHRpb25hbFBhcnRQYXJ0KHBhcnQpO1xuXG4gICAgICBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gb3B0aW9uYWxQYXJ0UGFydDsgLy8vXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJyonOlxuICAgICAgY29uc3QgemVyb09yTW9yZVBhcnRzUGFydCA9IG5ldyBaZXJvT3JNb3JlUGFydHNQYXJ0KHBhcnQpO1xuXG4gICAgICBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gemVyb09yTW9yZVBhcnRzUGFydDsgIC8vL1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICcrJzpcbiAgICAgIGNvbnN0IG9uZU9yTW9yZVBhcnRzUGFydCA9IG5ldyBPbmVPck1vcmVQYXJ0c1BhcnQocGFydCk7XG5cbiAgICAgIHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBvbmVPck1vcmVQYXJ0c1BhcnQ7IC8vL1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gc2VxdWVuY2VPZlBhcnRzUGFydDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsID0gcmVxdWlyZSgnLi4vLi4vdXRpbC9hcnJheScpLFxuICAgICAgUmVndWxhckV4cHJlc3Npb25QYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC9yZWd1bGFyRXhwcmVzc2lvbicpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3MgUmVndWxhckV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVQYXJ0KG5vV2hpdGVzcGFjZSkge1xuICAgIGNvbnN0IHJlZ0V4cCA9IHRoaXMuZ2V0UmVnRXhwKCksXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb25QYXJ0ID0gbmV3IFJlZ3VsYXJFeHByZXNzaW9uUGFydChyZWdFeHAsIG5vV2hpdGVzcGFjZSk7XG5cbiAgICByZXR1cm4gcmVndWxhckV4cHJlc3Npb25QYXJ0O1xuICB9XG5cbiAgZ2V0UmVnRXhwKCkge1xuICAgIGxldCByZWdFeHAgPSAvXlxcLyhbXlxcL10rKVxcLyQvOyAvLy9cblxuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGFycmF5VXRpbC5maXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICB0ZXJtaW5hbE5vZGUgPSBmaXJzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgIHRlcm1pbmFsTm9kZUNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIG1hdGNoZXMgPSB0ZXJtaW5hbE5vZGVDb250ZW50Lm1hdGNoKHJlZ0V4cCksXG4gICAgICAgICAgc2Vjb25kTWF0Y2ggPSBhcnJheVV0aWwuc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICAgIHBhdHRlcm4gPSBzZWNvbmRNYXRjaDsgLy8vXG5cbiAgICByZWdFeHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pO1xuXG4gICAgcmV0dXJuIHJlZ0V4cDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRSdWxlTmFtZShub2RlcywgcnVsZU5hbWUpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tTm9kZXNBbmRSdWxlTmFtZShub2RlcywgcnVsZU5hbWUsIFJlZ3VsYXJFeHByZXNzaW9uTm9kZSk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWd1bGFyRXhwcmVzc2lvbk5vZGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIFJpZ2h0UmVjdXJzaXZlUGFydE5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBzdGF0aWMgZnJvbU5vZGVzQW5kUnVsZU5hbWUobm9kZXMsIHJ1bGVOYW1lKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbU5vZGVzQW5kUnVsZU5hbWUobm9kZXMsIHJ1bGVOYW1lLCBSaWdodFJlY3Vyc2l2ZVBhcnROb2RlKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJpZ2h0UmVjdXJzaXZlUGFydE5vZGU7IiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWwgPSByZXF1aXJlKCcuLi8uLi91dGlsL2FycmF5JyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBSdWxlTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUnVsZShSdWxlLCBEZWZpbml0aW9uLCBtYXBwaW5ncykge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IHRoaXMuZ2VuZXJhdGVEZWZpbml0aW9ucyhEZWZpbml0aW9uKSxcbiAgICAgICAgICBtYXBwaW5nc05vZGVFeGlzdHMgPSBtYXBwaW5ncy5oYXNPd25Qcm9wZXJ0eShuYW1lKSxcbiAgICAgICAgICBOb2RlID0gbWFwcGluZ3NOb2RlRXhpc3RzID9cbiAgICAgICAgICAgICAgICAgICBtYXBwaW5nc1tuYW1lXSA6XG4gICAgICAgICAgICAgICAgICAgICBOb25UZXJtaW5hbE5vZGUsXG4gICAgICAgICAgcnVsZSA9IG5ldyBSdWxlKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgZmlyc3RDaGlsZE5vZGUgPSBhcnJheVV0aWwuZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgcnVsZU5hbWVOb2RlID0gZmlyc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICBydWxlTmFtZU5vZGVSdWxlTmFtZSA9IHJ1bGVOYW1lTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIG5hbWUgPSBydWxlTmFtZU5vZGVSdWxlTmFtZTtcbiAgICBcbiAgICByZXR1cm4gbmFtZTtcbiAgfVxuICBcbiAgZ2VuZXJhdGVEZWZpbml0aW9ucyhEZWZpbml0aW9uKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGxhc3RCdXRPbmVDaGlsZE5vZGUgPSBhcnJheVV0aWwubGFzdEJ1dE9uZShjaGlsZE5vZGVzKSxcbiAgICAgICAgICBkZWZpbml0aW9uc05vZGUgPSBsYXN0QnV0T25lQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9uc05vZGUuZ2VuZXJhdGVEZWZpbml0aW9ucyhEZWZpbml0aW9uKTtcbiAgICBcbiAgICByZXR1cm4gZGVmaW5pdGlvbnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVzQW5kUnVsZU5hbWUobm9kZXMsIHJ1bGVOYW1lKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IGFycmF5VXRpbC5kaXNjYXJkU2Vjb25kKG5vZGVzKSxcbiAgICAgICAgICBydWxlTm9kZSA9IE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBSdWxlTm9kZSk7XG5cbiAgICByZXR1cm4gcnVsZU5vZGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlTm9kZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsID0gcmVxdWlyZSgnLi4vLi4vdXRpbC9hcnJheScpLFxuICAgICAgUnVsZU5hbWVQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC9ydWxlTmFtZScpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3MgUnVsZU5hbWVOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVQYXJ0KG5vV2hpdGVzcGFjZSkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQocnVsZU5hbWUsIG5vV2hpdGVzcGFjZSk7XG5cbiAgICByZXR1cm4gcnVsZU5hbWVQYXJ0O1xuICB9XG5cbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlID0gYXJyYXlVdGlsLmZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIHRlcm1pbmFsTm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgdGVybWluYWxOb2RlQ29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgcnVsZU5hbWUgPSB0ZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cbiAgICBcbiAgICByZXR1cm4gcnVsZU5hbWU7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRSdWxlTmFtZShub2RlcywgcnVsZU5hbWUpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tTm9kZXNBbmRSdWxlTmFtZShub2RlcywgcnVsZU5hbWUsIFJ1bGVOYW1lTm9kZSk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlTmFtZU5vZGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIFJ1bGVzTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUnVsZXMoUnVsZSwgRGVmaW5pdGlvbiwgbWFwcGluZ3MpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgcnVsZU5vZGVzID0gY2hpbGROb2RlcywgIC8vL1xuICAgICAgICAgIHJ1bGVzID0gcnVsZU5vZGVzLm1hcChmdW5jdGlvbihydWxlTm9kZSkge1xuICAgICAgICAgICAgY29uc3QgcnVsZSA9IHJ1bGVOb2RlLmdlbmVyYXRlUnVsZShSdWxlLCBEZWZpbml0aW9uLCBtYXBwaW5ncyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBydWxlO1xuICAgICAgICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBydWxlcztcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Ob2Rlc0FuZFJ1bGVOYW1lKG5vZGVzLCBydWxlTmFtZSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBub2RlcywgLy8vXG4gICAgICAgICAgcnVsZXNOb2RlID0gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGNoaWxkTm9kZXMsIFJ1bGVzTm9kZSk7XG5cbiAgICByZXR1cm4gcnVsZXNOb2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZXNOb2RlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWwgPSByZXF1aXJlKCcuLi8uLi91dGlsL2FycmF5JyksXG4gICAgICBTaWduaWZpY2FudFRva2VuVHlwZVBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L3NpZ25pZmljYW50VG9rZW5UeXBlJyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBTaWduaWZpY2FudFRva2VuVHlwZU5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZVBhcnQobm9XaGl0ZXNwYWNlKSB7XG4gICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlblR5cGUgPSB0aGlzLmdldFNpZ25pZmljYW50VG9rZW5UeXBlKCksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0ID0gbmV3IFNpZ25pZmljYW50VG9rZW5UeXBlUGFydChzaWduaWZpY2FudFRva2VuVHlwZSwgbm9XaGl0ZXNwYWNlKTtcblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuVHlwZVBhcnQ7XG4gIH1cblxuICBnZXRTaWduaWZpY2FudFRva2VuVHlwZSgpIHtcbiAgICBjb25zdCByZWdFeHAgPSAvXlxcWyhbXlxcXV0rKVxcXSQvLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGFycmF5VXRpbC5maXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICB0ZXJtaW5hbE5vZGUgPSBmaXJzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgIHRlcm1pbmFsTm9kZUNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIG1hdGNoZXMgPSB0ZXJtaW5hbE5vZGVDb250ZW50Lm1hdGNoKHJlZ0V4cCksXG4gICAgICAgICAgc2Vjb25kTWF0Y2ggPSBhcnJheVV0aWwuc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlID0gc2Vjb25kTWF0Y2g7IC8vL1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW5UeXBlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2Rlc0FuZFJ1bGVOYW1lKG5vZGVzLCBydWxlTmFtZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21Ob2Rlc0FuZFJ1bGVOYW1lKG5vZGVzLCBydWxlTmFtZSwgU2lnbmlmaWNhbnRUb2tlblR5cGVOb2RlKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNpZ25pZmljYW50VG9rZW5UeXBlTm9kZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsID0gcmVxdWlyZSgnLi4vLi4vdXRpbC9hcnJheScpLFxuICAgICAgVGVybWluYWxTeW1ib2xQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC90ZXJtaW5hbFN5bWJvbCcpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3MgVGVybWluYWxTeW1ib2xOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVQYXJ0KG5vV2hpdGVzcGFjZSkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KGNvbnRlbnQsIG5vV2hpdGVzcGFjZSk7XG5cbiAgICByZXR1cm4gdGVybWluYWxTeW1ib2xQYXJ0O1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICBjb25zdCByZWdFeHAgPSAvXlwiKFteXCJdKilcIiQvLFxuICAgICAgICAgIGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGFycmF5VXRpbC5maXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICB0ZXJtaW5hbE5vZGUgPSBmaXJzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgIHRlcm1pbmFsTm9kZUNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIG1hdGNoZXMgPSB0ZXJtaW5hbE5vZGVDb250ZW50Lm1hdGNoKHJlZ0V4cCksXG4gICAgICAgICAgc2Vjb25kTWF0Y2ggPSBhcnJheVV0aWwuc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICAgIGNvbnRlbnQgPSBzZWNvbmRNYXRjaDsgLy8vXG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRSdWxlTmFtZShub2RlcywgcnVsZU5hbWUpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tTm9kZXNBbmRSdWxlTmFtZShub2RlcywgcnVsZU5hbWUsIFRlcm1pbmFsU3ltYm9sTm9kZSk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXJtaW5hbFN5bWJvbE5vZGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFdpbGRjYXJkUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvd2lsZGNhcmQnKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIFdpbGRjYXJkTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUGFydChub1doaXRlc3BhY2UpIHtcbiAgICBjb25zdCB3aWxkY2FyZFBhcnQgPSBuZXcgV2lsZGNhcmRQYXJ0KG5vV2hpdGVzcGFjZSk7XG5cbiAgICByZXR1cm4gd2lsZGNhcmRQYXJ0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2Rlc0FuZFJ1bGVOYW1lKG5vZGVzLCBydWxlTmFtZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21Ob2Rlc0FuZFJ1bGVOYW1lKG5vZGVzLCBydWxlTmFtZSwgV2lsZGNhcmROb2RlKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFdpbGRjYXJkTm9kZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYm5mID0gcmVxdWlyZSgnLi9ibmYnKSxcbiAgICAgIFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUnKSxcbiAgICAgIERlZmluaXRpb24gPSByZXF1aXJlKCcuL2RlZmluaXRpb24nKSxcbiAgICAgIENvbW1vblBhcnNlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9wYXJzZXInKSxcbiAgICAgIFBhcnRSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3BhcnQnKSxcbiAgICAgIFJ1bGVSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3J1bGUnKSxcbiAgICAgIFJ1bGVzUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9ydWxlcycpLFxuICAgICAgRXBzaWxvblJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvZXBzaWxvbicpLFxuICAgICAgV2lsZGNhcmRSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3dpbGRjYXJkJyksXG4gICAgICBSdWxlTmFtZVJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvcnVsZU5hbWUnKSxcbiAgICAgIEVuZE9mTGluZVJ1bGUgPSByZXF1aXJlKCcuL3J1bGUvZW5kT2ZMaW5lJyksXG4gICAgICBEZWZpbml0aW9uUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS9kZWZpbml0aW9uJyksXG4gICAgICBEZWZpbml0aW9uc1J1bGUgPSByZXF1aXJlKCcuL3J1bGUvZGVmaW5pdGlvbnMnKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS90ZXJtaW5hbFN5bWJvbCcpLFxuICAgICAgUmVndWxhckV4cHJlc3Npb25SdWxlID0gcmVxdWlyZSgnLi9ydWxlL3JlZ3VsYXJFeHByZXNzaW9uJyksXG4gICAgICBSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3JpZ2h0UmVjdXJzaXZlUGFydCcpLFxuICAgICAgU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlID0gcmVxdWlyZSgnLi9ydWxlL3NpZ25pZmljYW50VG9rZW5UeXBlJyk7XG5cbmNsYXNzIEJORlBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBnZW5lcmF0ZVJ1bGVzKG5vZGUsIG1hcHBpbmdzID0ge30pIHtcbiAgICBjb25zdCBydWxlcyA9IChub2RlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICBub2RlLmdlbmVyYXRlUnVsZXMoUnVsZSwgRGVmaW5pdGlvbiwgbWFwcGluZ3MpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgW107XG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgcGFydFJ1bGUgPSBuZXcgUGFydFJ1bGUoKSxcbiAgICAgICAgICBydWxlUnVsZSA9IG5ldyBSdWxlUnVsZSgpLFxuICAgICAgICAgIHJ1bGVzUnVsZSA9IG5ldyBSdWxlc1J1bGUoKSxcbiAgICAgICAgICBlcHNpbG9uUnVsZSA9IG5ldyBFcHNpbG9uUnVsZSgpLFxuICAgICAgICAgIHdpbGRjYXJkUnVsZSA9IG5ldyBXaWxkY2FyZFJ1bGUoKSxcbiAgICAgICAgICBydWxlTmFtZVJ1bGUgPSBuZXcgUnVsZU5hbWVSdWxlKCksXG4gICAgICAgICAgZW5kT2ZMaW5lUnVsZSA9IG5ldyBFbmRPZkxpbmVSdWxlKCksXG4gICAgICAgICAgZGVmaW5pdGlvblJ1bGUgPSBuZXcgRGVmaW5pdGlvblJ1bGUoKSxcbiAgICAgICAgICBkZWZpbml0aW9uc1J1bGUgPSBuZXcgRGVmaW5pdGlvbnNSdWxlKCksXG4gICAgICAgICAgdGVybWluYWxTeW1ib2xSdWxlID0gbmV3IFRlcm1pbmFsU3ltYm9sUnVsZSgpLFxuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUnVsZSA9IG5ldyBSZWd1bGFyRXhwcmVzc2lvblJ1bGUoKSxcbiAgICAgICAgICByaWdodFJlY3Vyc2l2ZVBhcnRSdWxlID0gbmV3IFJpZ2h0UmVjdXJzaXZlUGFydFJ1bGUoKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZVJ1bGUgPSBuZXcgU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlKCk7XG5cbiAgICBsZXQgcnVsZXMgPSBbXG4gICAgICBydWxlc1J1bGUsXG4gICAgICBydWxlUnVsZSxcbiAgICAgIGRlZmluaXRpb25zUnVsZSxcbiAgICAgIGRlZmluaXRpb25SdWxlLFxuICAgICAgcGFydFJ1bGUsXG4gICAgICBydWxlTmFtZVJ1bGUsXG4gICAgICByZWd1bGFyRXhwcmVzc2lvblJ1bGUsXG4gICAgICBzaWduaWZpY2FudFRva2VuVHlwZVJ1bGUsXG4gICAgICB0ZXJtaW5hbFN5bWJvbFJ1bGUsXG4gICAgICBlbmRPZkxpbmVSdWxlLFxuICAgICAgZXBzaWxvblJ1bGUsXG4gICAgICB3aWxkY2FyZFJ1bGUsXG4gICAgICByaWdodFJlY3Vyc2l2ZVBhcnRSdWxlXG4gICAgXTtcblxuICAgIGNvbnN0IGJuZlBhcnNlciA9IG5ldyBCTkZQYXJzZXIocnVsZXMpO1xuICAgIFxuICAgIHJldHVybiBibmZQYXJzZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCTkZQYXJzZXI7XG5cbkJORlBhcnNlci5ibmYgPSBibmY7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGJuZlV0aWwgPSByZXF1aXJlKCcuLi8uLi91dGlsL2JuZicpLFxuICAgICAgYXJyYXlVdGlsID0gcmVxdWlyZSgnLi4vLi4vdXRpbC9hcnJheScpO1xuXG5jbGFzcyBDaG9pY2VPZlBhcnRzUGFydCB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzKSB7XG4gICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xuICB9XG5cbiAgcGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbm9XaGl0ZXNwYWNlID0gZmFsc2U7IC8vL1xuICAgIFxuICAgIGxldCBub2RlcyA9IG51bGw7XG4gICAgXG4gICAgdGhpcy5wYXJ0cy5zb21lKGZ1bmN0aW9uKHBhcnQpIHtcbiAgICAgIGNvbnN0IHBhcnROb2RlT3JOb2RlcyA9IHBhcnQucGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICAgIHBhcnRQYXJzZWQgPSAocGFydE5vZGVPck5vZGVzICE9PSBudWxsKTtcblxuICAgICAgaWYgKHBhcnRQYXJzZWQpIHtcbiAgICAgICAgbm9kZXMgPSBwYXJ0Tm9kZU9yTm9kZXM7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYXJ0UGFyc2VkO1xuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIGNvbnN0IHBhcnRzU3RyaW5nID0gdGhpcy5wYXJ0cy5yZWR1Y2UoZnVuY3Rpb24ocGFydHNTdHJpbmcsIHBhcnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnRTdHJpbmcgPSBwYXJ0LnRvU3RyaW5nKCk7XG4gICAgXG4gICAgICAgICAgICBpZiAocGFydHNTdHJpbmcgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBwYXJ0U3RyaW5nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBgJHtwYXJ0c1N0cmluZ30gfCAke3BhcnRTdHJpbmd9YDtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIHJldHVybiBwYXJ0c1N0cmluZztcbiAgICAgICAgICB9LCBudWxsKSxcbiAgICAgICAgICBzdHJpbmcgPSBgKCAke3BhcnRzU3RyaW5nfSApYDtcbiAgICBcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2Rlcyhub2Rlcykge1xuICAgIGxldCBjaG9pY2VPZlBhcnRzUGFydCA9IG51bGw7XG4gICAgXG4gICAgbm9kZXMgPSBhcnJheVV0aWwuZGlzY2FyZExhc3RUaGVuRmlyc3Qobm9kZXMpO1xuICAgIFxuICAgIGNvbnN0IHNlY29uZE5vZGUgPSBhcnJheVV0aWwuc2Vjb25kKG5vZGVzKSxcbiAgICAgICAgICBzZWNvbmROb2RlQ2hvaWNlTm9kZSA9IGJuZlV0aWwuaXNOb2RlQ2hvaWNlTm9kZShzZWNvbmROb2RlKTtcbiAgICBcbiAgICBpZiAoc2Vjb25kTm9kZUNob2ljZU5vZGUpIHtcbiAgICAgIG5vZGVzID0gYXJyYXlVdGlsLmRpc2NhcmRPZGQobm9kZXMpO1xuXG4gICAgICBjb25zdCBub1doaXRlc3BhY2UgPSBmYWxzZSxcbiAgICAgICAgICAgIHBhcnRzID0gbm9kZXMubWFwKGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgICAgY29uc3QgcGFydCA9IG5vZGUuZ2VuZXJhdGVQYXJ0KG5vV2hpdGVzcGFjZSk7XG4gIFxuICAgICAgICAgICAgICByZXR1cm4gcGFydDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgXG4gICAgICBjaG9pY2VPZlBhcnRzUGFydCA9IG5ldyBDaG9pY2VPZlBhcnRzUGFydChwYXJ0cyk7XG4gICAgfSAgICBcbiAgICBcbiAgICByZXR1cm4gY2hvaWNlT2ZQYXJ0c1BhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDaG9pY2VPZlBhcnRzUGFydDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IFRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL3Rlcm1pbmFsJyk7XG5cbmNvbnN0IHsgQk5GTGV4ZXIsIEVuZE9mTGluZVRva2VuIH0gPSBsZXhlcnMsXG4gICAgICB7IHNwZWNpYWxTeW1ib2xzIH0gPSBCTkZMZXhlcixcbiAgICAgIHsgRU5EX09GX0xJTkUgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5jbGFzcyBFbmRPZkxpbmVQYXJ0IHtcbiAgY29uc3RydWN0b3Iobm9XaGl0ZXNwYWNlKSB7XG4gICAgdGhpcy5ub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2U7XG4gIH1cbiAgXG4gIHBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSkge1xuICAgIG5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZSB8fCB0aGlzLm5vV2hpdGVzcGFjZTsgLy8vXG5cbiAgICBsZXQgdGVybWluYWxOb2RlID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBzYXZlZEluZGV4ID0gY29udGV4dC5zYXZlZEluZGV4KCksXG4gICAgICAgICAgbmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuID0gY29udGV4dC5nZXROZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4obm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuID0gbmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuOyAvLy9cblxuICAgIGlmIChzaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRUeXBlKCksXG4gICAgICAgICAgICBmb3VuZCA9ICh0eXBlID09PSBFbmRPZkxpbmVUb2tlbi50eXBlKTtcblxuICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgIHRlcm1pbmFsTm9kZSA9IFRlcm1pbmFsTm9kZS5mcm9tU2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaWYgKHRlcm1pbmFsTm9kZSA9PT0gbnVsbCkge1xuICAgICAgY29udGV4dC5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IEVORF9PRl9MSU5FO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVuZE9mTGluZVBhcnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBFcHNpbG9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvdGVybWluYWwvZXBzaWxvbicpO1xuXG5jb25zdCB7IEJORkxleGVyIH0gPSBsZXhlcnMsXG4gICAgICB7IHNwZWNpYWxTeW1ib2xzIH0gPSBCTkZMZXhlcixcbiAgICAgIHsgZXBzaWxvbiB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmNsYXNzIEVwc2lsb25QYXJ0IHtcbiAgcGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgY29uc3QgZXBzaWxvblRlcm1pbmFsTm9kZSA9IG5ldyBFcHNpbG9uVGVybWluYWxOb2RlKCk7XG5cbiAgICByZXR1cm4gZXBzaWxvblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IGVwc2lsb247XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXBzaWxvblBhcnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWwvYXJyYXknKTtcblxuY2xhc3MgR3JvdXBPZlBhcnRzUGFydCB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzKSB7XG4gICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xuICB9XG5cbiAgcGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbm9XaGl0ZXNwYWNlID0gZmFsc2U7IC8vL1xuICAgIFxuICAgIGxldCBub2RlcyA9IFtdO1xuXG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IGNvbnRleHQuc2F2ZWRJbmRleCgpLFxuICAgICAgICAgIGV2ZXJ5UGFydFBhcnNlZCA9IHRoaXMucGFydHMuZXZlcnkoZnVuY3Rpb24ocGFydCkge1xuICAgICAgICAgICAgY29uc3QgcGFydE5vZGVPck5vZGVzID0gcGFydC5wYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgICAgICAgICAgcGFydFBhcnNlZCA9IChwYXJ0Tm9kZU9yTm9kZXMgIT09IG51bGwpO1xuXG4gICAgICAgICAgICBpZiAocGFydFBhcnNlZCkge1xuICAgICAgICAgICAgICBub2RlcyA9IG5vZGVzLmNvbmNhdChwYXJ0Tm9kZU9yTm9kZXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcGFydFBhcnNlZDtcbiAgICAgICAgICB9KTtcblxuICAgIGlmICghZXZlcnlQYXJ0UGFyc2VkKSB7XG4gICAgICBjb250ZXh0LmJhY2t0cmFjayhzYXZlZEluZGV4KTtcblxuICAgICAgbm9kZXMgPSBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIGNvbnN0IHBhcnRzU3RyaW5nID0gdGhpcy5wYXJ0cy5yZWR1Y2UoZnVuY3Rpb24ocGFydHNTdHJpbmcsIHBhcnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnRTdHJpbmcgPSBwYXJ0LnRvU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGlmIChwYXJ0c1N0cmluZyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICBwYXJ0c1N0cmluZyA9IHBhcnRTdHJpbmc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwYXJ0c1N0cmluZyA9IGAke3BhcnRzU3RyaW5nfSAke3BhcnRTdHJpbmd9YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHBhcnRzU3RyaW5nO1xuICAgICAgICAgIH0sIG51bGwpLFxuICAgICAgICAgIHN0cmluZyA9IGAoICR7cGFydHNTdHJpbmd9IClgO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXMobm9kZXMpIHtcbiAgICBub2RlcyA9IGFycmF5VXRpbC5kaXNjYXJkTGFzdFRoZW5GaXJzdChub2Rlcyk7XG5cbiAgICBjb25zdCBub1doaXRlc3BhY2UgPSBmYWxzZSxcbiAgICAgICAgICBwYXJ0cyA9IG5vZGVzLm1hcChmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0ID0gbm9kZS5nZW5lcmF0ZVBhcnQobm9XaGl0ZXNwYWNlKTtcblxuICAgICAgICAgICAgcmV0dXJuIHBhcnQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZ3JvdXBPZlBhcnRzUGFydCA9IG5ldyBHcm91cE9mUGFydHNQYXJ0KHBhcnRzKTtcblxuICAgIHJldHVybiBncm91cE9mUGFydHNQYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR3JvdXBPZlBhcnRzUGFydDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IFNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSByZXF1aXJlKCcuL3NlcXVlbmNlT2ZQYXJ0cycpLFxuICAgICAgWmVyb09yTW9yZVBhcnRzUGFydCA9IHJlcXVpcmUoJy4vemVyb09yTW9yZVBhcnRzJyk7XG5cbmNvbnN0IHsgQk5GTGV4ZXIgfSA9IGxleGVycyxcbiAgICAgIHsgc3BlY2lhbFN5bWJvbHMgfSA9IEJORkxleGVyLFxuICAgICAgeyBwbHVzIH0gPSBzcGVjaWFsU3ltYm9scztcblxuY2xhc3MgT25lT3JNb3JlUGFydHNQYXJ0IGV4dGVuZHMgU2VxdWVuY2VPZlBhcnRzUGFydCB7XG4gIHBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSkge1xuICAgIG5vV2hpdGVzcGFjZSA9IGZhbHNlOyAvLy9cblxuICAgIGxldCBub2RlcyA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgcGFydCA9IHRoaXMuZ2V0UGFydCgpLFxuICAgICAgICAgIHBhcnROb2RlT3JOb2RlcyA9IHBhcnQucGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBwYXJ0UGFyc2VkID0gKHBhcnROb2RlT3JOb2RlcyAhPT0gbnVsbCk7XG5cbiAgICBpZiAocGFydFBhcnNlZCkge1xuICAgICAgbm9kZXMgPSAocGFydE5vZGVPck5vZGVzIGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgICAgICBwYXJ0Tm9kZU9yTm9kZXMgOlxuICAgICAgICAgICAgICAgICAgW3BhcnROb2RlT3JOb2Rlc107XG5cbiAgICAgIGNvbnN0IHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBaZXJvT3JNb3JlUGFydHNQYXJ0LmZyb21PbmVPck1vcmVQYXJ0c1BhcnQodGhpcyksIC8vL1xuICAgICAgICAgICAgemVyb09yTW9yZVBhcnRzUGFydE5vZGVPck5vZGVzID0gemVyb09yTW9yZVBhcnRzUGFydC5wYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpO1xuXG4gICAgICBub2RlcyA9IG5vZGVzLmNvbmNhdCh6ZXJvT3JNb3JlUGFydHNQYXJ0Tm9kZU9yTm9kZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIGNvbnN0IG9wZXJhdG9yU3RyaW5nID0gcGx1cywgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHN1cGVyLnRvU3RyaW5nKG9wZXJhdG9yU3RyaW5nKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPbmVPck1vcmVQYXJ0c1BhcnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBTZXF1ZW5jZU9mUGFydHNQYXJ0ID0gcmVxdWlyZSgnLi9zZXF1ZW5jZU9mUGFydHMnKTtcblxuY29uc3QgeyBCTkZMZXhlciB9ID0gbGV4ZXJzLFxuICAgICAgeyBzcGVjaWFsU3ltYm9scyB9ID0gQk5GTGV4ZXIsXG4gICAgICB7IHF1ZXN0aW9uTWFyayB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmNsYXNzIE9wdGlvbmFsUGFydFBhcnQgZXh0ZW5kcyBTZXF1ZW5jZU9mUGFydHNQYXJ0IHtcbiAgcGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbm9XaGl0ZXNwYWNlID0gZmFsc2U7IC8vL1xuXG4gICAgbGV0IG5vZGVzID0gW107XG4gICAgXG4gICAgY29uc3QgcGFydCA9IHRoaXMuZ2V0UGFydCgpLFxuICAgICAgICAgIHBhcnROb2RlT3JOb2RlcyA9IHBhcnQucGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBwYXJ0UGFyc2VkID0gKHBhcnROb2RlT3JOb2RlcyAhPT0gbnVsbCk7XG5cbiAgICBpZiAocGFydFBhcnNlZCkge1xuICAgICAgbm9kZXMgPSBwYXJ0Tm9kZU9yTm9kZXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgY29uc3Qgb3BlcmF0b3JTdHJpbmcgPSBxdWVzdGlvbk1hcmssICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBzdXBlci50b1N0cmluZyhvcGVyYXRvclN0cmluZyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT3B0aW9uYWxQYXJ0UGFydDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWwvYXJyYXknKSxcbiAgICAgIFRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL3Rlcm1pbmFsJyk7XG5cbmNvbnN0IHsgQk5GTGV4ZXIgfSA9IGxleGVycyxcbiAgICAgIHsgc3BlY2lhbFN5bWJvbHMgfSA9IEJORkxleGVyLFxuICAgICAgeyBOT19XSElURVNQQUNFIH0gPSBzcGVjaWFsU3ltYm9scztcblxuY2xhc3MgUmVndWxhckV4cHJlc3Npb25QYXJ0IHtcbiAgY29uc3RydWN0b3IocmVnRXhwLCBub1doaXRlc3BhY2UgPSBmYWxzZSkge1xuICAgIHRoaXMucmVnRXhwID0gcmVnRXhwO1xuICAgIHRoaXMubm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlO1xuICB9XG5cbiAgcGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlIHx8IHRoaXMubm9XaGl0ZXNwYWNlOyAvLy9cblxuICAgIGxldCB0ZXJtaW5hbE5vZGUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBjb250ZXh0LnNhdmVkSW5kZXgoKSxcbiAgICAgICAgICBuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4gPSBjb250ZXh0LmdldE5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbihub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW47IC8vL1xuXG4gICAgaWYgKHNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBzaWduaWZpY2FudFRva2VuLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgIG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKHRoaXMucmVnRXhwKTtcblxuICAgICAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZmlyc3RNYXRjaCA9IGFycmF5VXRpbC5maXJzdChtYXRjaGVzKSxcbiAgICAgICAgICAgICAgcGFyc2VkID0gKGZpcnN0TWF0Y2ggPT09IGNvbnRlbnQpO1xuXG4gICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICB0ZXJtaW5hbE5vZGUgPSBUZXJtaW5hbE5vZGUuZnJvbVNpZ25pZmljYW50VG9rZW4oc2lnbmlmaWNhbnRUb2tlbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGVybWluYWxOb2RlID09PSBudWxsKSB7XG4gICAgICBjb250ZXh0LmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybWluYWxOb2RlO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgY29uc3QgcmVnRXhwU3RyaW5nID0gdGhpcy5yZWdFeHAudG9TdHJpbmcoKSxcbiAgICAgICAgICBub1doaXRlc3BhY2VTdHJpbmcgPSB0aGlzLm5vV2hpdGVzcGFjZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOT19XSElURVNQQUNFIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJycsXG4gICAgICAgICAgc3RyaW5nID0gYCR7bm9XaGl0ZXNwYWNlU3RyaW5nfSR7cmVnRXhwU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVndWxhckV4cHJlc3Npb25QYXJ0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgcGFyc2VyVXRpbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWwvcGFyc2VyJyk7XG5cbmNvbnN0IHsgQk5GTGV4ZXIgfSA9IGxleGVycyxcbiAgICAgIHsgc3BlY2lhbFN5bWJvbHMgfSA9IEJORkxleGVyLFxuICAgICAgeyBOT19XSElURVNQQUNFIH0gPSBzcGVjaWFsU3ltYm9scztcblxuY2xhc3MgUnVsZU5hbWVQYXJ0IHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWUsIG5vV2hpdGVzcGFjZSA9IGZhbHNlKSB7XG4gICAgdGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xuICAgIHRoaXMubm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlO1xuICB9XG4gIFxuICBnZXRSdWxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlTmFtZTtcbiAgfVxuICBcbiAgaXNMZWZ0UmVjdXJzaXZlKHJ1bGVOYW1lKSB7XG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZSA9ICh0aGlzLnJ1bGVOYW1lID09PSBydWxlTmFtZSk7XG4gICAgXG4gICAgcmV0dXJuIGxlZnRSZWN1cnNpdmU7XG4gIH1cbiAgXG4gIHBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSkge1xuICAgIG5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZSB8fCB0aGlzLm5vV2hpdGVzcGFjZTsgLy8vXG5cbiAgICBsZXQgbm9kZU9yTm9kZXMgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHJ1bGVzID0gY29udGV4dC5nZXRSdWxlcygpLFxuICAgICAgICAgIHJ1bGUgPSBwYXJzZXJVdGlsLmZpbmRSdWxlKHRoaXMucnVsZU5hbWUsIHJ1bGVzKTtcblxuICAgIGlmIChydWxlICE9PSBudWxsKSB7XG4gICAgICBub2RlT3JOb2RlcyA9IHJ1bGUucGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZU9yTm9kZXM7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2VTdHJpbmcgPSB0aGlzLm5vV2hpdGVzcGFjZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOT19XSElURVNQQUNFIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJycsXG4gICAgICAgICAgc3RyaW5nID0gYCR7bm9XaGl0ZXNwYWNlU3RyaW5nfSR7dGhpcy5ydWxlTmFtZX1gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGVOYW1lUGFydDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgU2VxdWVuY2VPZlBhcnRzUGFydCB7XG4gIGNvbnN0cnVjdG9yKHBhcnQpIHtcbiAgICB0aGlzLnBhcnQgPSBwYXJ0O1xuICB9XG5cbiAgZ2V0UGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0O1xuICB9XG4gIFxuICB0b1N0cmluZyhvcGVyYXRvclN0cmluZykge1xuICAgIGNvbnN0IHBhcnRTdHJpbmcgPSB0aGlzLnBhcnQudG9TdHJpbmcoKSxcbiAgICAgICAgICBzdHJpbmcgPSBgJHtwYXJ0U3RyaW5nfSR7b3BlcmF0b3JTdHJpbmd9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTZXF1ZW5jZU9mUGFydHNQYXJ0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvdGVybWluYWwnKTtcblxuY29uc3QgeyBCTkZMZXhlciB9ID0gbGV4ZXJzLFxuICAgICAgeyBzcGVjaWFsU3ltYm9scyB9ID0gQk5GTGV4ZXIsXG4gICAgICB7IE5PX1dISVRFU1BBQ0UgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5jbGFzcyBTaWduaWZpY2FudFRva2VuVHlwZVBhcnQge1xuICBjb25zdHJ1Y3RvcihzaWduaWZpY2FudFRva2VuVHlwZSwgbm9XaGl0ZXNwYWNlID0gZmFsc2UpIHtcbiAgICB0aGlzLnNpZ25pZmljYW50VG9rZW5UeXBlID0gc2lnbmlmaWNhbnRUb2tlblR5cGU7XG4gICAgdGhpcy5ub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2U7XG4gIH1cbiAgXG4gIHBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSkge1xuICAgIG5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZSB8fCB0aGlzLm5vV2hpdGVzcGFjZTsgLy8vXG4gICAgXG4gICAgbGV0IHRlcm1pbmFsTm9kZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IGNvbnRleHQuc2F2ZWRJbmRleCgpLFxuICAgICAgICAgIG5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbiA9IGNvbnRleHQuZ2V0TmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuKG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IG5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbjsgLy8vXG5cbiAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlblR5cGUgPSBzaWduaWZpY2FudFRva2VuLmdldFR5cGUoKSxcbiAgICAgICAgICAgIHBhcnNlZCA9IChzaWduaWZpY2FudFRva2VuVHlwZSA9PT0gdGhpcy5zaWduaWZpY2FudFRva2VuVHlwZSk7ICAvLy9cblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICB0ZXJtaW5hbE5vZGUgPSBUZXJtaW5hbE5vZGUuZnJvbVNpZ25pZmljYW50VG9rZW4oc2lnbmlmaWNhbnRUb2tlbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRlcm1pbmFsTm9kZSA9PT0gbnVsbCkge1xuICAgICAgY29udGV4dC5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIGNvbnN0IG5vV2hpdGVzcGFjZVN0cmluZyA9IHRoaXMubm9XaGl0ZXNwYWNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5PX1dISVRFU1BBQ0UgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJyxcbiAgICAgICAgICBzdHJpbmcgPSBgJHtub1doaXRlc3BhY2VTdHJpbmd9WyR7dGhpcy5zaWduaWZpY2FudFRva2VuVHlwZX1dYDtcbiAgICBcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvdGVybWluYWwnKTtcblxuY29uc3QgeyBCTkZMZXhlciB9ID0gbGV4ZXJzLFxuICAgICAgeyBzcGVjaWFsU3ltYm9scyB9ID0gQk5GTGV4ZXIsXG4gICAgICB7IE5PX1dISVRFU1BBQ0UgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5jbGFzcyBUZXJtaW5hbFN5bWJvbFBhcnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZW50LCBub1doaXRlc3BhY2UgPSBmYWxzZSkge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy5ub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2U7XG4gIH1cblxuICBwYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpIHtcbiAgICBub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2UgfHwgdGhpcy5ub1doaXRlc3BhY2U7IC8vL1xuXG4gICAgbGV0IHRlcm1pbmFsTm9kZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IGNvbnRleHQuc2F2ZWRJbmRleCgpLFxuICAgICAgICAgIG5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbiA9IGNvbnRleHQuZ2V0TmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuKG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IG5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbjsgLy8vXG5cbiAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29udGVudCA9IHNpZ25pZmljYW50VG9rZW4uZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgcGFyc2VkID0gKGNvbnRlbnQgPT09IHRoaXMuY29udGVudCk7XG5cbiAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgdGVybWluYWxOb2RlID0gVGVybWluYWxOb2RlLmZyb21TaWduaWZpY2FudFRva2VuKHNpZ25pZmljYW50VG9rZW4pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0ZXJtaW5hbE5vZGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGU7XG4gIH1cbiAgXG4gIHRvU3RyaW5nKCkge1xuICAgIGNvbnN0IG5vV2hpdGVzcGFjZVN0cmluZyA9IHRoaXMubm9XaGl0ZXNwYWNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5PX1dISVRFU1BBQ0UgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJyxcbiAgICAgICAgICBzdHJpbmcgPSBgJHtub1doaXRlc3BhY2VTdHJpbmd9XCIke3RoaXMuY29udGVudH1cImA7XG4gICAgXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRlcm1pbmFsU3ltYm9sUGFydDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IFRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL3Rlcm1pbmFsJyk7XG5cbmNvbnN0IHsgQk5GTGV4ZXIgfSA9IGxleGVycyxcbiAgICAgIHsgc3BlY2lhbFN5bWJvbHMgfSA9IEJORkxleGVyLFxuICAgICAgeyB3aWxkY2FyZCB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmNsYXNzIFdpbGRjYXJkUGFydCB7XG4gIGNvbnN0cnVjdG9yKG5vV2hpdGVzcGFjZSkge1xuICAgIHRoaXMubm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlO1xuICB9XG4gIFxuICBwYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpIHtcbiAgICBub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2UgfHwgdGhpcy5ub1doaXRlc3BhY2U7IC8vL1xuXG4gICAgbGV0IHRlcm1pbmFsTm9kZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IGNvbnRleHQuc2F2ZWRJbmRleCgpLFxuICAgICAgICAgIG5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbiA9IGNvbnRleHQuZ2V0TmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuKG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IG5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbjsgLy8vXG5cbiAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgdGVybWluYWxOb2RlID0gVGVybWluYWxOb2RlLmZyb21TaWduaWZpY2FudFRva2VuKHNpZ25pZmljYW50VG9rZW4pO1xuICAgIH1cbiAgICBcbiAgICBpZiAodGVybWluYWxOb2RlID09PSBudWxsKSB7XG4gICAgICBjb250ZXh0LmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybWluYWxOb2RlO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gd2lsZGNhcmQ7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gV2lsZGNhcmRQYXJ0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgU2VxdWVuY2VPZlBhcnRzUGFydCA9IHJlcXVpcmUoJy4vc2VxdWVuY2VPZlBhcnRzJyk7XG5cbmNvbnN0IHsgQk5GTGV4ZXIgfSA9IGxleGVycyxcbiAgICAgIHsgc3BlY2lhbFN5bWJvbHMgfSA9IEJORkxleGVyLFxuICAgICAgeyBhc3RlcmlzayB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmNsYXNzIFplcm9Pck1vcmVQYXJ0c1BhcnQgZXh0ZW5kcyBTZXF1ZW5jZU9mUGFydHNQYXJ0IHtcbiAgcGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbm9XaGl0ZXNwYWNlID0gZmFsc2U7IC8vL1xuICAgIFxuICAgIGxldCBub2RlcyA9IFtdO1xuICAgIFxuICAgIGNvbnN0IHBhcnQgPSB0aGlzLmdldFBhcnQoKTtcblxuICAgIGZvcig7Oykge1xuICAgICAgY29uc3QgcGFydE5vZGVPck5vZGVzID0gcGFydC5wYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgICAgcGFydFBhcnNlZCA9IChwYXJ0Tm9kZU9yTm9kZXMgIT09IG51bGwpO1xuXG4gICAgICBpZiAocGFydFBhcnNlZCkge1xuICAgICAgICBub2RlcyA9IG5vZGVzLmNvbmNhdChwYXJ0Tm9kZU9yTm9kZXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgY29uc3Qgb3BlcmF0b3JTdHJpbmcgPSBhc3RlcmlzaywgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHN1cGVyLnRvU3RyaW5nKG9wZXJhdG9yU3RyaW5nKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbU9uZU9yTW9yZVBhcnRzUGFydChvbmVPck1vcmVQYXJ0c1BhcnQpIHtcbiAgICBjb25zdCBwYXJ0ID0gb25lT3JNb3JlUGFydHNQYXJ0LmdldFBhcnQoKSxcbiAgICAgICAgICB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gbmV3IFplcm9Pck1vcmVQYXJ0c1BhcnQocGFydCk7XG5cbiAgICByZXR1cm4gemVyb09yTW9yZVBhcnRzUGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFplcm9Pck1vcmVQYXJ0c1BhcnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwvYXJyYXknKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyksXG4gICAgICBFcHNpbG9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvdGVybWluYWwvZXBzaWxvbicpO1xuXG5jbGFzcyBSdWxlIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucztcbiAgICB0aGlzLk5vZGUgPSBOb2RlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0RGVmaW5pdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbnM7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLk5vZGU7XG4gIH1cbiAgXG4gIGRvRGVmaW5pdGlvbnNFeGlzdCgpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0xlbmd0aCA9IHRoaXMuZGVmaW5pdGlvbnMubGVuZ3RoLFxuICAgICAgICAgIGRlZmluaXRpb25zRXhpc3QgPSAoZGVmaW5pdGlvbnNMZW5ndGggPiAwKTtcbiAgICBcbiAgICByZXR1cm4gZGVmaW5pdGlvbnNFeGlzdDtcbiAgfVxuXG4gIGlzRm91bmRCeVJ1bGVOYW1lKHJ1bGVOYW1lKSB7XG4gICAgY29uc3QgZm91bmQgPSAodGhpcy5uYW1lID09PSBydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gZm91bmQ7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc2V0RGVmaW5pdGlvbnMoZGVmaW5pdGlvbnMpIHtcbiAgICB0aGlzLmRlZmluaXRpb25zID0gZGVmaW5pdGlvbnM7XG4gIH1cblxuICBzZXROb2RlKG5vZGUpIHtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICB9XG5cbiAgYWRkRGVmaW5pdGlvbnMoZGVmaW5pdGlvbnMpIHtcbiAgICB0aGlzLmRlZmluaXRpb25zID0gdGhpcy5kZWZpbml0aW9ucy5jb25jYXQoZGVmaW5pdGlvbnMpO1xuICB9XG5cbiAgcGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbGV0IG5vZGVPck5vZGVzID0gbnVsbDtcblxuICAgIGNvbnRleHQuaW5jcmVhc2VEZXB0aCgpO1xuXG4gICAgY29uc3QgdG9vRGVlcCA9IGNvbnRleHQuaXNUb29EZWVwKCk7XG5cbiAgICBpZiAodG9vRGVlcCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgcGFyc2UgdHJlZSBpcyB0b28gZGVlcCBhdCBydWxlICcke3RoaXMubmFtZX0nYCk7XG4gICAgfVxuXG4gICAgbGV0IGRlZmluaXRpb25Ob2RlcyA9IG51bGw7XG4gICAgXG4gICAgY29uc3Qgc29tZURlZmluaXRpb25QYXJzZWQgPSB0aGlzLmRlZmluaXRpb25zLnNvbWUoZnVuY3Rpb24oZGVmaW5pdGlvbikge1xuICAgICAgZGVmaW5pdGlvbk5vZGVzID0gZGVmaW5pdGlvbi5wYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpO1xuXG4gICAgICBjb25zdCBkZWZpbml0aW9uUGFyc2VkID0gKGRlZmluaXRpb25Ob2RlcyAhPT0gbnVsbCk7XG5cbiAgICAgIHJldHVybiBkZWZpbml0aW9uUGFyc2VkO1xuICAgIH0pO1xuXG4gICAgaWYgKHNvbWVEZWZpbml0aW9uUGFyc2VkKSB7XG4gICAgICBjb25zdCBkZWZpbml0aW9uTm9kZXNMZW5ndGggPSBkZWZpbml0aW9uTm9kZXMubGVuZ3RoO1xuXG4gICAgICBpZiAoZGVmaW5pdGlvbk5vZGVzTGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBydWxlTmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgbm9kZXMgPSBkZWZpbml0aW9uTm9kZXMsICAvLy9cbiAgICAgICAgICAgICAgbGFzdE5vZGUgPSBhcnJheVV0aWwubGFzdChub2RlcyksXG4gICAgICAgICAgICAgIGxhc3ROb2RlTnVsbGlmaWVkID0gaXNOb2RlTnVsbGlmaWVkKGxhc3ROb2RlKTtcblxuICAgICAgICBpZiAobGFzdE5vZGVOdWxsaWZpZWQpIHtcbiAgICAgICAgICBjb25zdCBzdGFydCA9IC0xLFxuICAgICAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgICAgICAgIG5vZGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgbm9kZU9yTm9kZXMgPSB0aGlzLk5vZGUuZnJvbU5vZGVzQW5kUnVsZU5hbWUobm9kZXMsIHJ1bGVOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb250ZXh0LmRlY3JlYXNlRGVwdGgoKTtcblxuICAgIHJldHVybiBub2RlT3JOb2RlcztcbiAgfVxuXG4gIHRvU3RyaW5nKG1heGltdW1SdWxlTmFtZUxlbmd0aCkge1xuICAgIGNvbnN0IG1heGltdW1QYWRkaW5nID0gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKG1heGltdW1SdWxlTmFtZUxlbmd0aCksXG4gICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSB0aGlzLmRlZmluaXRpb25zLnJlZHVjZShmdW5jdGlvbihkZWZpbml0aW9uc1N0cmluZywgZGVmaW5pdGlvbikge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24udG9TdHJpbmcoKTtcbiAgXG4gICAgICAgICAgICBpZiAoZGVmaW5pdGlvbnNTdHJpbmcgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSBkZWZpbml0aW9uU3RyaW5nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbnNTdHJpbmcgPSBgJHtkZWZpbml0aW9uc1N0cmluZ31cXG5cXG4ke21heGltdW1QYWRkaW5nfSAgICAgfCAke2RlZmluaXRpb25TdHJpbmd9YDtcbiAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICByZXR1cm4gZGVmaW5pdGlvbnNTdHJpbmc7XG4gICAgICAgICAgfSwgbnVsbCksXG4gICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lTGVuZ3RoID0gcnVsZU5hbWUubGVuZ3RoLFxuICAgICAgICAgIHBhZGRpbmdMZW5ndGggPSBtYXhpbXVtUnVsZU5hbWVMZW5ndGggLSBydWxlTmFtZUxlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nID0gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKHBhZGRpbmdMZW5ndGgpLFxuICAgICAgICAgIHN0cmluZyA9IGBcXG5cXG4gICR7dGhpcy5uYW1lfSR7cGFkZGluZ30gOjo9ICR7ZGVmaW5pdGlvbnNTdHJpbmd9IDtgO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZShydWxlLCBDbGFzcyA9IFJ1bGUpIHtcbiAgICBjb25zdCBuYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCksXG4gICAgICAgICAgTm9kZSA9IHJ1bGUuZ2V0Tm9kZSgpO1xuXG4gICAgcnVsZSA9IG5ldyBDbGFzcyhuYW1lLCBkZWZpbml0aW9ucywgTm9kZSk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGU7XG5cbmZ1bmN0aW9uIHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChwYWRkaW5nTGVuZ3RoKSB7XG4gIGxldCBwYWRkaW5nID0gJyc7XG5cbiAgZm9yIChsZXQgcG9zaXRpb24gPSAwOyBwb3NpdGlvbiA8IHBhZGRpbmdMZW5ndGg7IHBvc2l0aW9uKyspIHtcbiAgICBwYWRkaW5nICs9ICcgJztcbiAgfVxuXG4gIHJldHVybiBwYWRkaW5nO1xufVxuXG5mdW5jdGlvbiBpc05vZGVOdWxsaWZpZWQobm9kZSkge1xuICBsZXQgbnVsbGlmaWVkID0gZmFsc2U7XG5cbiAgaWYgKG5vZGUgaW5zdGFuY2VvZiBOb25UZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIGNoaWxkTm9kZXNMZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChjaGlsZE5vZGVzTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBjaGlsZE5vZGUgPSBhcnJheVV0aWwuZmlyc3QoY2hpbGROb2Rlcyk7XG5cbiAgICAgIG51bGxpZmllZCA9IChjaGlsZE5vZGUgaW5zdGFuY2VvZiBFcHNpbG9uVGVybWluYWxOb2RlKTsgLy8vXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGxpZmllZDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUnKSxcbiAgICAgIERlZmluaXRpb25Ob2RlID0gcmVxdWlyZSgnLi4vbm9kZS9kZWZpbml0aW9uJyksXG4gICAgICBEZWZpbml0aW9uRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vZGVmaW5pdGlvbicpO1xuXG5jbGFzcyBEZWZpbml0aW9uUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBuYW1lID0gJ2RlZmluaXRpb24nLFxuICAgICAgICAgIGRlZmluaXRpb25EZWZpbml0aW9uID0gbmV3IERlZmluaXRpb25EZWZpbml0aW9uKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBkZWZpbml0aW9uRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IERlZmluaXRpb25Ob2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGVmaW5pdGlvblJ1bGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlJyksXG4gICAgICBEZWZpbml0aW9uc05vZGUgPSByZXF1aXJlKCcuLi9ub2RlL2RlZmluaXRpb25zJyksXG4gICAgICBEZWZpbml0aW9uc0RlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL2RlZmluaXRpb25zJyk7XG5cbmNsYXNzIERlZmluaXRpb25zUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0RlZmluaXRpb24gPSBuZXcgRGVmaW5pdGlvbnNEZWZpbml0aW9uKCksXG4gICAgICAgICAgbmFtZSA9ICdkZWZpbml0aW9ucycsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBkZWZpbml0aW9uc0RlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBEZWZpbml0aW9uc05vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEZWZpbml0aW9uc1J1bGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vcnVsZScpLFxuICAgICAgRW5kT2ZMaW5lTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvZW5kT2ZMaW5lJyksXG4gICAgICBUZXJtaW5hbFN5bWJvbERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL3Rlcm1pbmFsU3ltYm9sJyk7XG5cbmNvbnN0IHsgQk5GTGV4ZXIgfSA9IGxleGVycyxcbiAgICAgIHsgc3BlY2lhbFN5bWJvbHMgfSA9IEJORkxleGVyLFxuICAgICAgeyBFTkRfT0ZfTElORSB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmNsYXNzIEVuZE9mTGluZVJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgZW5kT2ZMaW5lVGVybWluYWxTeW1ib2xDb250ZW50ID0gRU5EX09GX0xJTkUsXG4gICAgICAgICAgZW5kT2ZMaW5lVGVybWluYWxTeW1ib2xEZWZpbml0aW9uID0gbmV3IFRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbihlbmRPZkxpbmVUZXJtaW5hbFN5bWJvbENvbnRlbnQpLFxuICAgICAgICAgIG5hbWUgPSAnZW5kT2ZMaW5lJyxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIGVuZE9mTGluZVRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IEVuZE9mTGluZU5vZGU7XG5cbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVuZE9mTGluZVJ1bGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vcnVsZScpLFxuICAgICAgRW5kT2ZMaW5lTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvZXBzaWxvbicpLFxuICAgICAgVGVybWluYWxTeW1ib2xEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi90ZXJtaW5hbFN5bWJvbCcpO1xuXG5jb25zdCB7IEJORkxleGVyIH0gPSBsZXhlcnMsXG4gICAgICB7IHNwZWNpYWxTeW1ib2xzIH0gPSBCTkZMZXhlcixcbiAgICAgIHsgZXBzaWxvbiB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmNsYXNzIEVwc2lsb25SdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IGVwc2lsb25UZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBlcHNpbG9uLFxuICAgICAgICAgIGVwc2lsb25UZXJtaW5hbFN5bWJvbERlZmluaXRpb24gPSBuZXcgVGVybWluYWxTeW1ib2xEZWZpbml0aW9uKGVwc2lsb25UZXJtaW5hbFN5bWJvbENvbnRlbnQpLFxuICAgICAgICAgIG5hbWUgPSAnZXBzaWxvbicsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBlcHNpbG9uVGVybWluYWxTeW1ib2xEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gRW5kT2ZMaW5lTm9kZTtcblxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXBzaWxvblJ1bGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlJyksXG4gICAgICBQYXJ0Tm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvcGFydCcpLFxuXG4gICAgICBQYXJ0UnVsZURlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL3BhcnRSdWxlJyksXG4gICAgICBOb1doaXRlc3BhY2VEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9ub1doaXRlc3BhY2UnKSxcbiAgICAgIEdyb3VwT2ZQYXJ0c0RlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL2dyb3VwT2ZQYXJ0cycpLFxuICAgICAgQ2hvaWNlT2ZQYXJ0c0RlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL2Nob2ljZU9mUGFydHMnKTtcblxuY2xhc3MgUGFydFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgXG4gICAgICAgIFxuXG5cblxuXG4gICAgICAgICAgcnVsZU5hbWVSdWxlTmFtZSA9ICdydWxlTmFtZScsXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb25SdWxlTmFtZSA9ICdyZWd1bGFyRXhwcmVzc2lvbicsXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlTmFtZSA9ICdzaWduaWZpY2FudFRva2VuVHlwZScsXG4gICAgICAgICAgdGVybWluYWxTeW1ib2xSdWxlTmFtZSA9ICd0ZXJtaW5hbFN5bWJvbCcsXG4gICAgICAgICAgZW5kT2ZMaW5lUnVsZU5hbWUgPSAnZW5kT2ZMaW5lJyxcbiAgICAgICAgICBlcHNpbG9uUnVsZU5hbWUgPSAnZXBzaWxvbicsXG4gICAgICAgICAgd2lsZGNhcmRSdWxlTmFtZSA9ICd3aWxkY2FyZCcsXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlRGVmaW5pdGlvbiA9IG5ldyBOb1doaXRlc3BhY2VEZWZpbml0aW9uKCksXG5cblxuXG4gICAgICAgICAgZ3JvdXBPZlBhcnRzRGVmaW5pdGlvbiA9IG5ldyBHcm91cE9mUGFydHNEZWZpbml0aW9uKCksXG4gICAgICAgICAgY2hvaWNlT2ZQYXJ0c0RlZmluaXRpb24gPSBuZXcgQ2hvaWNlT2ZQYXJ0c0RlZmluaXRpb24oKSxcbiAgICAgICAgICBydWxlTmFtZVJ1bGVOYW1lUGFydFJ1bGVEZWZpbml0aW9uID0gbmV3IFBhcnRSdWxlRGVmaW5pdGlvbihydWxlTmFtZVJ1bGVOYW1lKSxcbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblJ1bGVOYW1lUGFydFJ1bGVEZWZpbml0aW9uID0gbmV3IFBhcnRSdWxlRGVmaW5pdGlvbihyZWd1bGFyRXhwcmVzc2lvblJ1bGVOYW1lKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZVJ1bGVOYW1lUGFydFJ1bGVEZWZpbml0aW9uID0gbmV3IFBhcnRSdWxlRGVmaW5pdGlvbihzaWduaWZpY2FudFRva2VuVHlwZVJ1bGVOYW1lKSxcbiAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFJ1bGVOYW1lUGFydFJ1bGVEZWZpbml0aW9uID0gbmV3IFBhcnRSdWxlRGVmaW5pdGlvbih0ZXJtaW5hbFN5bWJvbFJ1bGVOYW1lKSxcbiAgICAgICAgICBlbmRPZkxpbmVSdWxlTmFtZVBhcnRSdWxlRGVmaW5pdGlvbiA9IG5ldyBQYXJ0UnVsZURlZmluaXRpb24oZW5kT2ZMaW5lUnVsZU5hbWUpLFxuICAgICAgICAgIGVwc2lsb25SdWxlTmFtZVBhcnRSdWxlRGVmaW5pdGlvbiA9IG5ldyBQYXJ0UnVsZURlZmluaXRpb24oZXBzaWxvblJ1bGVOYW1lKSxcbiAgICAgICAgICB3aWxkY2FyZFJ1bGVOYW1lUGFydFJ1bGVEZWZpbml0aW9uID0gbmV3IFBhcnRSdWxlRGVmaW5pdGlvbih3aWxkY2FyZFJ1bGVOYW1lKSxcbiAgICAgICAgICBuYW1lID0gJ3BhcnQnLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgbm9XaGl0ZXNwYWNlRGVmaW5pdGlvbixcblxuXG5cbiAgICAgICAgICAgIGdyb3VwT2ZQYXJ0c0RlZmluaXRpb24sXG4gICAgICAgICAgICBjaG9pY2VPZlBhcnRzRGVmaW5pdGlvbixcbiAgICAgICAgICAgIHJ1bGVOYW1lUnVsZU5hbWVQYXJ0UnVsZURlZmluaXRpb24sXG4gICAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblJ1bGVOYW1lUGFydFJ1bGVEZWZpbml0aW9uLFxuICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlTmFtZVBhcnRSdWxlRGVmaW5pdGlvbixcbiAgICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUnVsZU5hbWVQYXJ0UnVsZURlZmluaXRpb24sXG4gICAgICAgICAgICBlbmRPZkxpbmVSdWxlTmFtZVBhcnRSdWxlRGVmaW5pdGlvbixcbiAgICAgICAgICAgIGVwc2lsb25SdWxlTmFtZVBhcnRSdWxlRGVmaW5pdGlvbixcbiAgICAgICAgICAgIHdpbGRjYXJkUnVsZU5hbWVQYXJ0UnVsZURlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBQYXJ0Tm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcnRSdWxlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vcnVsZScpLFxuICAgICAgUmVndWxhckV4cHJlc3Npb25Ob2RlID0gcmVxdWlyZSgnLi4vbm9kZS9yZWd1bGFyRXhwcmVzc2lvbicpLFxuICAgICAgU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9zaWduaWZpY2FudFRva2VuVHlwZScpO1xuXG5jbGFzcyBSZWd1bGFyRXhwcmVzc2lvblJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgcmVndWxhckV4cHJlc3Npb25TaWduaWZpY2FudFRva2VuVHlwZSA9ICdyZWd1bGFyRXhwcmVzc2lvbicsXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb25TaWduaWZpY2FudFRva2VuVHlwZURlZmluaXRpb24gPSBuZXcgU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uKHJlZ3VsYXJFeHByZXNzaW9uU2lnbmlmaWNhbnRUb2tlblR5cGUpLFxuICAgICAgICAgIG5hbWUgPSAncmVndWxhckV4cHJlc3Npb24nLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgcmVndWxhckV4cHJlc3Npb25TaWduaWZpY2FudFRva2VuVHlwZURlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBSZWd1bGFyRXhwcmVzc2lvbk5vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWd1bGFyRXhwcmVzc2lvblJ1bGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vcnVsZScpLFxuICAgICAgRXBzaWxvbkRlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL2Vwc2lsb24nKSxcbiAgICAgIFJpZ2h0UmVjdXJzaXZlUGFydE5vZGUgPSByZXF1aXJlKCcuLi9ub2RlL3JpZ2h0UmVjdXJzaXZlUGFydCcpLFxuICAgICAgUmlnaHRSZWN1cnNpdmVQYXJ0UnVsZURlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL3JpZ2h0UmVjdXJzaXZlUGFydFJ1bGUnKTtcblxuY29uc3QgeyBCTkZMZXhlciB9ID0gbGV4ZXJzLFxuICAgICAgeyBzcGVjaWFsU3ltYm9scyB9ID0gQk5GTGV4ZXIsXG4gICAgICB7IHBsdXMsIGFzdGVyaXNrLCBxdWVzdGlvbk1hcmsgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5jbGFzcyBSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHBsdXNUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBwbHVzLFxuICAgICAgICAgIGFzdGVyaXNrVGVybWluYWxTeW1ib2xDb250ZW50ID0gYXN0ZXJpc2ssXG4gICAgICAgICAgcXVlc3Rpb25NYXJrVGVybWluYWxTeW1ib2xDb250ZW50ID0gcXVlc3Rpb25NYXJrLFxuICAgICAgICAgIG9wdGlvbmFsUmlnaHRSZWN1cnNpdmVQYXJ0UnVsZURlZmluaXRpb24gPSBuZXcgUmlnaHRSZWN1cnNpdmVQYXJ0UnVsZURlZmluaXRpb24ocXVlc3Rpb25NYXJrVGVybWluYWxTeW1ib2xDb250ZW50KSwgLy8vXG4gICAgICAgICAgemVyb09yTW9yZVJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVEZWZpbml0aW9uID0gbmV3IFJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVEZWZpbml0aW9uKGFzdGVyaXNrVGVybWluYWxTeW1ib2xDb250ZW50KSwgLy8vXG4gICAgICAgICAgb25lT3JNb3JlUmlnaHRSZWN1cnNpdmVQYXJ0UnVsZURlZmluaXRpb24gPSBuZXcgUmlnaHRSZWN1cnNpdmVQYXJ0UnVsZURlZmluaXRpb24ocGx1c1Rlcm1pbmFsU3ltYm9sQ29udGVudCksIC8vL1xuICAgICAgICAgIGVwc2lsb25EZWZpbml0aW9uID0gbmV3IEVwc2lsb25EZWZpbml0aW9uKCksXG4gICAgICAgICAgbmFtZSA9ICdyaWdodFJlY3Vyc2l2ZVBhcnQnLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgb3B0aW9uYWxSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlRGVmaW5pdGlvbixcbiAgICAgICAgICAgIHplcm9Pck1vcmVSaWdodFJlY3Vyc2l2ZVBhcnRSdWxlRGVmaW5pdGlvbixcbiAgICAgICAgICAgIG9uZU9yTW9yZVJpZ2h0UmVjdXJzaXZlUGFydFJ1bGVEZWZpbml0aW9uLFxuICAgICAgICAgICAgZXBzaWxvbkRlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBSaWdodFJlY3Vyc2l2ZVBhcnROb2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmlnaHRSZWN1cnNpdmVQYXJ0UnVsZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUnKSxcbiAgICAgIFJ1bGVOb2RlID0gcmVxdWlyZSgnLi4vbm9kZS9ydWxlJyksXG4gICAgICBSdWxlRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vcnVsZScpO1xuXG5jbGFzcyBSdWxlUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBydWxlRGVmaW5pdGlvbiA9IG5ldyBSdWxlRGVmaW5pdGlvbigpLFxuICAgICAgICAgIG5hbWUgPSAncnVsZScsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBydWxlRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IFJ1bGVOb2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGVSdWxlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vcnVsZScpLFxuICAgICAgUnVsZU5hbWVOb2RlID0gcmVxdWlyZSgnLi4vbm9kZS9ydWxlTmFtZScpLFxuICAgICAgU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9zaWduaWZpY2FudFRva2VuVHlwZScpO1xuXG5jbGFzcyBSdWxlTmFtZVJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgbmFtZVNpZ25pZmljYW50VG9rZW5UeXBlID0gJ25hbWUnLFxuICAgICAgICAgIG5hbWVTaWduaWZpY2FudFRva2VuVHlwZURlZmluaXRpb24gPSBuZXcgU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uKG5hbWVTaWduaWZpY2FudFRva2VuVHlwZSksXG4gICAgICAgICAgbmFtZSA9ICdydWxlTmFtZScsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBuYW1lU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gUnVsZU5hbWVOb2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZU5hbWVSdWxlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vcnVsZScpLFxuICAgICAgUnVsZXNOb2RlID0gcmVxdWlyZSgnLi4vbm9kZS9ydWxlcycpLFxuICAgICAgUnVsZXNEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9ydWxlcycpO1xuXG5jbGFzcyBSdWxlc1J1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgcnVsZXNEZWZpbml0aW9uID0gbmV3IFJ1bGVzRGVmaW5pdGlvbigpLFxuICAgICAgICAgIG5hbWUgPSAncnVsZXMnLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgcnVsZXNEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gUnVsZXNOb2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZXNSdWxlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vcnVsZScpLFxuICAgICAgU2lnbmlmaWNhbnRUb2tlblR5cGVOb2RlID0gcmVxdWlyZSgnLi4vbm9kZS9zaWduaWZpY2FudFRva2VuVHlwZScpLFxuICAgICAgU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9zaWduaWZpY2FudFRva2VuVHlwZScpO1xuXG5jbGFzcyBTaWduaWZpY2FudFRva2VuVHlwZVJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgdHlwZVNpZ25pZmljYW50VG9rZW5UeXBlID0gJ3R5cGUnLFxuICAgICAgICAgIHR5cGVTaWduaWZpY2FudFRva2VuVHlwZURlZmluaXRpb24gPSBuZXcgU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uKHR5cGVTaWduaWZpY2FudFRva2VuVHlwZSksXG4gICAgICAgICAgbmFtZSA9ICdzaWduaWZpY2FudFRva2VuVHlwZScsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICB0eXBlU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gU2lnbmlmaWNhbnRUb2tlblR5cGVOb2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vcnVsZScpLFxuICAgICAgVGVybWluYWxTeW1ib2xOb2RlID0gcmVxdWlyZSgnLi4vbm9kZS90ZXJtaW5hbFN5bWJvbCcpLFxuICAgICAgU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbi9zaWduaWZpY2FudFRva2VuVHlwZScpO1xuXG5jbGFzcyBUZXJtaW5hbFN5bWJvbFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3Qgc3RyaW5nU2lnbmlmaWNhbnRUb2tlblR5cGUgPSAnc3RyaW5nJyxcbiAgICAgICAgICBzdHJpbmdTaWduaWZpY2FudFRva2VuVHlwZURlZmluaXRpb24gPSBuZXcgU2lnbmlmaWNhbnRUb2tlblR5cGVEZWZpbml0aW9uKHN0cmluZ1NpZ25pZmljYW50VG9rZW5UeXBlKSxcbiAgICAgICAgICBuYW1lID0gJ3Rlcm1pbmFsU3ltYm9sJyxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIHN0cmluZ1NpZ25pZmljYW50VG9rZW5UeXBlRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IFRlcm1pbmFsU3ltYm9sTm9kZTtcblxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGVybWluYWxTeW1ib2xSdWxlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUnKSxcbiAgICAgIFdpbGRjYXJkTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvd2lsZGNhcmQnKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vdGVybWluYWxTeW1ib2wnKTtcblxuY29uc3QgeyBCTkZMZXhlciB9ID0gbGV4ZXJzLFxuICAgICAgeyBzcGVjaWFsU3ltYm9scyB9ID0gQk5GTGV4ZXIsXG4gICAgICB7IHdpbGRjYXJkIH0gPSBzcGVjaWFsU3ltYm9scztcblxuY2xhc3MgV2lsZGNhcmRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHdpbGRjYXJkVGVybWluYWxTeW1ib2xDb250ZW50ID0gd2lsZGNhcmQsXG4gICAgICAgICAgd2lsZGNhcmRUZXJtaW5hbFN5bWJvbERlZmluaXRpb24gPSBuZXcgVGVybWluYWxTeW1ib2xEZWZpbml0aW9uKHdpbGRjYXJkVGVybWluYWxTeW1ib2xDb250ZW50KSxcbiAgICAgICAgICBuYW1lID0gJ3dpbGRjYXJkJyxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIHdpbGRjYXJkVGVybWluYWxTeW1ib2xEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gV2lsZGNhcmROb2RlO1xuXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBXaWxkY2FyZFJ1bGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCB7IFdoaXRlc3BhY2VUb2tlbiB9ID0gbGV4ZXJzO1xuXG5jb25zdCBERUZBVUxUX01BWElNVU1fREVQVEggPSA5OTtcblxuY2xhc3MgQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKHRva2VucywgcnVsZXMsIG1heGltdW1EZXB0aCA9IERFRkFVTFRfTUFYSU1VTV9ERVBUSCkge1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuXG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xuXG4gICAgdGhpcy5tYXhpbXVtRGVwdGggPSBtYXhpbXVtRGVwdGg7XG5cbiAgICB0aGlzLmRlcHRoID0gMDtcblxuICAgIHRoaXMuaW5kZXggPSAwO1xuICB9XG5cbiAgZ2V0UnVsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZXM7XG4gIH1cblxuICBnZXRNYXhpbXVtRGVwdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMubWF4aW11bURlcHRoO1xuICB9XG5cbiAgZ2V0RGVwdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVwdGg7XG4gIH1cblxuICBnZXRJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbmRleDtcbiAgfVxuXG4gIGlzVG9vRGVlcCgpIHtcbiAgICBjb25zdCB0b29EZWVwID0gdGhpcy5kZXB0aCA+IHRoaXMubWF4aW11bURlcHRoO1xuICAgIFxuICAgIHJldHVybiB0b29EZWVwO1xuICB9XG5cbiAgaW5jcmVhc2VEZXB0aCgpIHtcbiAgICB0aGlzLmRlcHRoKys7XG4gIH1cblxuICBkZWNyZWFzZURlcHRoKCkge1xuICAgIHRoaXMuZGVwdGgtLTtcbiAgfVxuXG4gIHNldEluZGV4KGluZGV4KSB7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICB9XG5cbiAgZ2V0TmV4dFNpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgbGV0IG5leHRTaWduaWZpY2FudFRva2VuID0gbnVsbDtcblxuICAgIGZvciAoOzspIHtcbiAgICAgIGNvbnN0IG5leHRUb2tlbiA9IHRoaXMudG9rZW5zW3RoaXMuaW5kZXgrK107XG5cbiAgICAgIGlmIChuZXh0VG9rZW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIFxuICAgICAgY29uc3QgbmV4dFRva2VuU2lnbmlmaWNhbnQgPSBuZXh0VG9rZW4uaXNTaWduaWZpY2FudCgpO1xuXG4gICAgICBpZiAobmV4dFRva2VuU2lnbmlmaWNhbnQpIHtcbiAgICAgICAgbmV4dFNpZ25pZmljYW50VG9rZW4gPSBuZXh0VG9rZW47XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHRTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0TmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuKG5vV2hpdGVzcGFjZSkge1xuICAgIGxldCBuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4gPSBudWxsLFxuICAgICAgICBuZXh0U2lnbmlmaWNhbnRUb2tlbiA9IHRoaXMuZ2V0TmV4dFNpZ25pZmljYW50VG9rZW4oKTtcblxuICAgIGlmIChuZXh0U2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgbGV0IG5leHRTaWduaWZpY2FudFRva2VuSXNXaGl0ZXNwYWNlVG9rZW47XG5cbiAgICAgIGlmIChub1doaXRlc3BhY2UpIHtcbiAgICAgICAgbmV4dFNpZ25pZmljYW50VG9rZW5Jc1doaXRlc3BhY2VUb2tlbiA9IHNpZ25pZmljYW50VG9rZW5Jc1doaXRlc3BhY2VUb2tlbihuZXh0U2lnbmlmaWNhbnRUb2tlbik7XG5cbiAgICAgICAgaWYgKG5leHRTaWduaWZpY2FudFRva2VuSXNXaGl0ZXNwYWNlVG9rZW4pIHtcbiAgICAgICAgICBuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4gPSBudWxsXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuID0gbmV4dFNpZ25pZmljYW50VG9rZW47XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAoOzspIHtcbiAgICAgICAgICBuZXh0U2lnbmlmaWNhbnRUb2tlbklzV2hpdGVzcGFjZVRva2VuID0gc2lnbmlmaWNhbnRUb2tlbklzV2hpdGVzcGFjZVRva2VuKG5leHRTaWduaWZpY2FudFRva2VuKTtcblxuICAgICAgICAgIGlmIChuZXh0U2lnbmlmaWNhbnRUb2tlbklzV2hpdGVzcGFjZVRva2VuKSB7XG4gICAgICAgICAgICBuZXh0U2lnbmlmaWNhbnRUb2tlbiA9IHRoaXMuZ2V0TmV4dFNpZ25pZmljYW50VG9rZW4oKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuID0gbmV4dFNpZ25pZmljYW50VG9rZW47XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChuZXh0U2lnbmlmaWNhbnRUb2tlbiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgbmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuID0gbnVsbDtcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIHNhdmVkSW5kZXgoKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmdldEluZGV4KCksXG4gICAgICAgICAgc2F2ZWRJbmRleCA9IGluZGV4OyAvLy9cbiAgICBcbiAgICByZXR1cm4gc2F2ZWRJbmRleDtcbiAgfVxuXG4gIGJhY2t0cmFjayhzYXZlZEluZGV4KSB7XG4gICAgdGhpcy5pbmRleCA9IHNhdmVkSW5kZXg7ICAvLy9cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbnRleHQ7XG5cbmZ1bmN0aW9uIHNpZ25pZmljYW50VG9rZW5Jc1doaXRlc3BhY2VUb2tlbihzaWduaWZpY2FudFRva2VuKSB7XG4gIGNvbnN0IHR5cGUgPSBzaWduaWZpY2FudFRva2VuLmdldFR5cGUoKSxcbiAgICAgICAgd2hpdGVzcGFjZVRva2VuID0gKHR5cGUgPT09IFdoaXRlc3BhY2VUb2tlbi50eXBlKTtcbiAgXG4gIHJldHVybiB3aGl0ZXNwYWNlVG9rZW47XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWwvYXJyYXknKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IHJlcXVpcmUoJy4uL3BhcnNlVHJlZS9ub25UZXJtaW5hbE5vZGUnKTtcblxuY2xhc3MgTm9uVGVybWluYWxOb2RlIHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWUsIGNoaWxkTm9kZXMsIGZpcnN0TGluZSwgbGFzdExpbmUsIGZpcnN0U2lnbmlmaWNhbnRUb2tlbiwgbGFzdFNpZ25pZmljYW50VG9rZW4pIHtcbiAgICB0aGlzLnJ1bGVOYW1lID0gcnVsZU5hbWU7XG4gICAgdGhpcy5jaGlsZE5vZGVzID0gY2hpbGROb2RlcztcbiAgICB0aGlzLmZpcnN0TGluZSA9IGZpcnN0TGluZTtcbiAgICB0aGlzLmxhc3RMaW5lID0gbGFzdExpbmU7XG4gICAgdGhpcy5maXJzdFNpZ25pZmljYW50VG9rZW4gPSBmaXJzdFNpZ25pZmljYW50VG9rZW47XG4gICAgdGhpcy5sYXN0U2lnbmlmaWNhbnRUb2tlbiA9IGxhc3RTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgaXNUZXJtaW5hbCgpIHtcbiAgICBjb25zdCB0ZXJtaW5hbCA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsO1xuICB9XG4gIFxuICBnZXRSdWxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlTmFtZTtcbiAgfVxuXG4gIGdldENoaWxkTm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2RlcztcbiAgfVxuICBcbiAgZ2V0Rmlyc3RMaW5lKCkge1xuICAgIHJldHVybiB0aGlzLmZpcnN0TGluZTtcbiAgfVxuXG4gIGdldExhc3RMaW5lKCkge1xuICAgIHJldHVybiB0aGlzLmxhc3RMaW5lO1xuICB9XG5cbiAgZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuKCkge1xuICAgIHJldHVybiB0aGlzLmZpcnN0U2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGdldExhc3RTaWduaWZpY2FudFRva2VuKCkge1xuICAgIHJldHVybiB0aGlzLmxhc3RTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2VuZXJhdGVQYXJzZVRyZWUobGluZXMpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlUGFyc2VUcmVlID0gTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlLmZyb21Ob25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBsaW5lcyksXG4gICAgICAgICAgcGFyc2VUcmVlID0gbm9uVGVybWluYWxOb2RlUGFyc2VUcmVlOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgc2V0Q2hpbGROb2RlcyhjaGlsZE5vZGVzKSB7XG4gICAgdGhpcy5jaGlsZE5vZGVzID0gY2hpbGROb2RlcztcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Ob2Rlc0FuZFJ1bGVOYW1lKG5vZGVzLCBydWxlTmFtZSwgQ2xhc3MgPSBOb25UZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9kZXMsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IENsYXNzLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGNoaWxkTm9kZXMsIENsYXNzKTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcywgQ2xhc3MgPSBOb25UZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCBmaXJzdENoaWxkTm9kZSA9IGFycmF5VXRpbC5maXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBsYXN0Q2hpbGROb2RlID0gYXJyYXlVdGlsLmxhc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgZmlyc3RDaGlsZE5vZGVGaXJzdExpbmUgPSBmaXJzdENoaWxkTm9kZS5nZXRGaXJzdExpbmUoKSxcbiAgICAgICAgICBsYXN0Q2hpbGROb2RlRmlyc3RMaW5lID0gbGFzdENoaWxkTm9kZS5nZXRMYXN0TGluZSgpLFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlRmlyc3RTaWduaWZpY2FudFRva2VuID0gZmlyc3RDaGlsZE5vZGUuZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgICAgbGFzdENoaWxkTm9kZUxhc3RTaWduaWZpY2FudFRva2VuID0gbGFzdENoaWxkTm9kZS5nZXRMYXN0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICAgIGZpcnN0TGluZSA9IGZpcnN0Q2hpbGROb2RlRmlyc3RMaW5lLCAgLy8vXG4gICAgICAgICAgbGFzdExpbmUgPSBsYXN0Q2hpbGROb2RlRmlyc3RMaW5lLCAgLy8vXG4gICAgICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuID0gZmlyc3RDaGlsZE5vZGVGaXJzdFNpZ25pZmljYW50VG9rZW4sIC8vL1xuICAgICAgICAgIGxhc3RTaWduaWZpY2FudFRva2VuID0gbGFzdENoaWxkTm9kZUxhc3RTaWduaWZpY2FudFRva2VuLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGUgPSBuZXcgQ2xhc3MocnVsZU5hbWUsIGNoaWxkTm9kZXMsIGZpcnN0TGluZSwgbGFzdExpbmUsIGZpcnN0U2lnbmlmaWNhbnRUb2tlbiwgbGFzdFNpZ25pZmljYW50VG9rZW4pO1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vblRlcm1pbmFsTm9kZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbC9hcnJheScpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vbm9uVGVybWluYWwnKTtcblxuY2xhc3MgRGlzY2FyZEZpZnRoVGhlblNlY29uZENoaWxkTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRSdWxlTmFtZShub2RlcywgcnVsZU5hbWUpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gYXJyYXlVdGlsLmRpc2NhcmRGaWZ0aFRoZW5TZWNvbmQobm9kZXMpLFxuICAgICAgICAgIGRpc2NhcmRGaWZ0aFRoZW5TZWNvbmRDaGlsZE5vZGUgPSBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcywgRGlzY2FyZEZpZnRoVGhlblNlY29uZENoaWxkTm9kZSk7XG5cbiAgICByZXR1cm4gZGlzY2FyZEZpZnRoVGhlblNlY29uZENoaWxkTm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERpc2NhcmRGaWZ0aFRoZW5TZWNvbmRDaGlsZE5vZGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWwvYXJyYXknKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIERpc2NhcmRGb3VydGhUaGVuU2Vjb25kQ2hpbGROb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgc3RhdGljIGZyb21Ob2Rlc0FuZFJ1bGVOYW1lKG5vZGVzLCBydWxlTmFtZSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBhcnJheVV0aWwuZGlzY2FyZEZvdXJ0aFRoZW5TZWNvbmQobm9kZXMpLFxuICAgICAgICAgIGRpc2NhcmRGb3VydGhUaGVuU2Vjb25kQ2hpbGROb2RlID0gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGNoaWxkTm9kZXMsIERpc2NhcmRGb3VydGhUaGVuU2Vjb25kQ2hpbGROb2RlKTtcblxuICAgIHJldHVybiBkaXNjYXJkRm91cnRoVGhlblNlY29uZENoaWxkTm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERpc2NhcmRGb3VydGhUaGVuU2Vjb25kQ2hpbGROb2RlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWwgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsL2FycmF5JyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBEaXNjYXJkT2RkQ2hpbGROb2RlcyBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRSdWxlTmFtZShub2RlcywgcnVsZU5hbWUpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gYXJyYXlVdGlsLmRpc2NhcmRPZGQobm9kZXMpLCAvLy9cbiAgICAgICAgICBkaXNjYXJkT2RkQ2hpbGROb2RlcyA9IE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBEaXNjYXJkT2RkQ2hpbGROb2Rlcyk7XG5cbiAgICByZXR1cm4gZGlzY2FyZE9kZENoaWxkTm9kZXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEaXNjYXJkT2RkQ2hpbGROb2RlcztcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbC9hcnJheScpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vbm9uVGVybWluYWwnKTtcblxuY2xhc3MgRGlzY2FyZFNlY29uZENoaWxkTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRSdWxlTmFtZShub2RlcywgcnVsZU5hbWUpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gYXJyYXlVdGlsLmRpc2NhcmRTZWNvbmQobm9kZXMpLFxuICAgICAgICAgIGRpc2NhcmRTZWNvbmRDaGlsZE5vZGUgPSBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcywgRGlzY2FyZFNlY29uZENoaWxkTm9kZSk7XG5cbiAgICByZXR1cm4gZGlzY2FyZFNlY29uZENoaWxkTm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERpc2NhcmRTZWNvbmRDaGlsZE5vZGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFRyYW5zcGFyZW50Tm9kZSB7XG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRSdWxlTmFtZShub2RlcywgcnVsZU5hbWUpIHtcbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUcmFuc3BhcmVudE5vZGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWwvYXJyYXknKTtcblxuY2xhc3MgVHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZE5vZGUge1xuICBzdGF0aWMgZnJvbU5vZGVzQW5kUnVsZU5hbWUobm9kZXMsIHJ1bGVOYW1lKSB7XG4gICAgbm9kZXMgPSBhcnJheVV0aWwua2VlcFNlY29uZChub2Rlcyk7XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUcmFuc3BhcmVudFRoZW5LZWVwU2Vjb25kTm9kZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVGVybWluYWxOb2RlUGFyc2VUcmVlID0gcmVxdWlyZSgnLi4vcGFyc2VUcmVlL3Rlcm1pbmFsTm9kZScpO1xuXG5jbGFzcyBUZXJtaW5hbE5vZGUge1xuICBjb25zdHJ1Y3RvcihzaWduaWZpY2FudFRva2VuLCBsaW5lKSB7XG4gICAgdGhpcy5zaWduaWZpY2FudFRva2VuID0gc2lnbmlmaWNhbnRUb2tlbjtcbiAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICB9XG4gIFxuICBpc1Rlcm1pbmFsKCkge1xuICAgIGNvbnN0IHRlcm1pbmFsID0gdHJ1ZTtcbiAgICBcbiAgICByZXR1cm4gdGVybWluYWw7XG4gIH1cblxuICBnZXRTaWduaWZpY2FudFRva2VuKCkge1xuICAgIHJldHVybiB0aGlzLnNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBnZXRMaW5lKCkge1xuICAgIHJldHVybiB0aGlzLmxpbmU7XG4gIH1cblxuICBnZXRGaXJzdFNpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgY29uc3QgZmlyc3RTaWduaWZpY2FudFRva2VuID0gdGhpcy5zaWduaWZpY2FudFRva2VuOyAgLy8vXG5cbiAgICByZXR1cm4gZmlyc3RTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgY29uc3QgbGFzdFNpZ25pZmljYW50VG9rZW4gPSB0aGlzLnNpZ25pZmljYW50VG9rZW47ICAvLy9cblxuICAgIHJldHVybiBsYXN0U2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGdldEZpcnN0TGluZSgpIHtcbiAgICBjb25zdCBmaXJzdExpbmUgPSB0aGlzLmxpbmU7IC8vL1xuXG4gICAgcmV0dXJuIGZpcnN0TGluZTtcbiAgfVxuXG4gIGdldExhc3RMaW5lKCkge1xuICAgIGNvbnN0IGxhc3RMaW5lID0gdGhpcy5saW5lOyAgLy8vXG5cbiAgICByZXR1cm4gbGFzdExpbmU7XG4gIH1cblxuICBnZXRDb250ZW50KCkgeyByZXR1cm4gdGhpcy5zaWduaWZpY2FudFRva2VuLmdldENvbnRlbnQoKTsgfVxuICBcbiAgZ2VuZXJhdGVQYXJzZVRyZWUobGluZXMpIHtcbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgdGVybWluYWxOb2RlUGFyc2VUcmVlID0gVGVybWluYWxOb2RlUGFyc2VUcmVlLmZyb21UZXJtaW5hbE5vZGUodGVybWluYWxOb2RlLCBsaW5lcyksXG4gICAgICAgICAgcGFyc2VUcmVlID0gdGVybWluYWxOb2RlUGFyc2VUcmVlOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TaWduaWZpY2FudFRva2VuKHNpZ25pZmljYW50VG9rZW4sIENsYXNzID0gVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3QgbGluZSA9IHNpZ25pZmljYW50VG9rZW4uZ2V0TGluZSgpLFxuICAgICAgICAgIHRlcm1pbmFsTm9kZSA9IG5ldyBDbGFzcyhzaWduaWZpY2FudFRva2VuLCBsaW5lKSxcbiAgICAgICAgICBlcnJvciA9IGZhbHNlO1xuICAgIFxuICAgIHNpZ25pZmljYW50VG9rZW4uc2V0RXJyb3IoZXJyb3IpO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRlcm1pbmFsTm9kZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IFRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uL3Rlcm1pbmFsJyksXG4gICAgICBFcHNpbG9uVGVybWluYWxOb2RlUGFyc2VUcmVlID0gcmVxdWlyZSgnLi4vLi4vcGFyc2VUcmVlL3Rlcm1pbmFsTm9kZS9lcHNpbG9uJyk7XG5cbmNvbnN0IHsgQk5GTGV4ZXIgfSA9IGxleGVycyxcbiAgICAgIHsgc3BlY2lhbFN5bWJvbHMgfSA9IEJORkxleGVyLFxuICAgICAgeyBlcHNpbG9uIH0gPSBzcGVjaWFsU3ltYm9scztcblxuY2xhc3MgRXBzaWxvblRlcm1pbmFsTm9kZSBleHRlbmRzIFRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW4gPSBudWxsLFxuICAgICAgICAgIGxpbmUgPSBudWxsO1xuXG4gICAgc3VwZXIoc2lnbmlmaWNhbnRUb2tlbiwgbGluZSk7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBlcHNpbG9uOyAgLy8vXG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGdlbmVyYXRlUGFyc2VUcmVlKGxpbmVzKSB7XG4gICAgY29uc3QgZXBzaWxvblRlcm1pbmFsTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBlcHNpbG9uVGVybWluYWxOb2RlUGFyc2VUcmVlID0gRXBzaWxvblRlcm1pbmFsTm9kZVBhcnNlVHJlZS5mcm9tRXBzaWxvblRlcm1pbmFsTm9kZShlcHNpbG9uVGVybWluYWxOb2RlLCBsaW5lcyksXG4gICAgICAgICAgcGFyc2VUcmVlID0gZXBzaWxvblRlcm1pbmFsTm9kZVBhcnNlVHJlZTsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVwc2lsb25UZXJtaW5hbE5vZGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWwvYXJyYXknKSxcbiAgICAgIFRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uL3Rlcm1pbmFsJyk7XG5cbmNsYXNzIEVycm9yTm9kZSBleHRlbmRzIFRlcm1pbmFsTm9kZSB7XG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRSdWxlTmFtZShub2RlcywgcnVsZU5hbWUpIHtcbiAgICBjb25zdCBmaXJzdE5vZGUgPSBhcnJheVV0aWwuZmlyc3Qobm9kZXMpLFxuICAgICAgICAgIHRlcm1pbmFsTm9kZSA9IGZpcnN0Tm9kZSwgIC8vL1xuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSB0ZXJtaW5hbE5vZGUuZ2V0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICAgIGVycm9yTm9kZSA9IFRlcm1pbmFsTm9kZS5mcm9tU2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuLCBFcnJvck5vZGUpLFxuICAgICAgICAgIGVycm9yID0gdHJ1ZTtcblxuICAgIHNpZ25pZmljYW50VG9rZW4uc2V0RXJyb3IoZXJyb3IpO1xuXG4gICAgcmV0dXJuIGVycm9yTm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVycm9yTm9kZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsID0gcmVxdWlyZSgnLi4vdXRpbC9hcnJheScpO1xuXG5jbGFzcyBQYXJzZVRyZWUge1xuICBjb25zdHJ1Y3RvcihsaW5lcykge1xuICAgIHRoaXMubGluZXMgPSBsaW5lcztcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGNvbnN0IGxpbmVzID0gdGhpcy5saW5lcy5zbGljZSgwKSwgIC8vL1xuICAgICAgICAgIHBhcnNlVHJlZSA9IG5ldyBQYXJzZVRyZWUobGluZXMpO1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIGdldFdpZHRoKCkge1xuICAgIGxldCBsaW5lc0xlbmd0aCA9IHRoaXMubGluZXMubGVuZ3RoLFxuICAgICAgICAgIHdpZHRoID0gdW5kZWZpbmVkO1xuXG4gICAgaWYgKGxpbmVzTGVuZ3RoID09PSAwKSB7XG4gICAgICB3aWR0aCA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGxhc3RMaW5lID0gYXJyYXlVdGlsLmxhc3QodGhpcy5saW5lcyksXG4gICAgICAgICAgICBsYXN0TGluZUxlbmd0aCA9IGxhc3RMaW5lLmxlbmd0aDtcblxuICAgICAgd2lkdGggPSBsYXN0TGluZUxlbmd0aDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgZ2V0RGVwdGgoKSB7XG4gICAgY29uc3QgbGluZXNMZW5ndGggPSB0aGlzLmxpbmVzLmxlbmd0aCxcbiAgICAgICAgICBkZXB0aCA9IGxpbmVzTGVuZ3RoOyAgLy8vXG5cbiAgICByZXR1cm4gZGVwdGg7XG4gIH1cblxuICBmb3JFYWNoTGluZShjYWxsYmFjaykge1xuICAgIHRoaXMubGluZXMuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBhcHBlbmRUb1RvcChwYXJzZVRyZWUpIHtcbiAgICBwYXJzZVRyZWUuZm9yRWFjaExpbmUoZnVuY3Rpb24obGluZSkge1xuICAgICAgdGhpcy5saW5lcy51bnNoaWZ0KGxpbmUpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICBhcHBlbmRUb0xlZnQocGFyc2VUcmVlKSB7XG4gICAgcGFyc2VUcmVlLmZvckVhY2hMaW5lKGZ1bmN0aW9uKGxpbmUsIGluZGV4KSB7XG4gICAgICB0aGlzLmxpbmVzW2luZGV4XSA9IGxpbmUgKyB0aGlzLmxpbmVzW2luZGV4XTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgYXBwZW5kVG9SaWdodChwYXJzZVRyZWUpIHtcbiAgICBwYXJzZVRyZWUuZm9yRWFjaExpbmUoZnVuY3Rpb24obGluZSwgaW5kZXgpIHtcbiAgICAgIHRoaXMubGluZXNbaW5kZXhdID0gdGhpcy5saW5lc1tpbmRleF0gKyBsaW5lO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICBhcHBlbmRUb0JvdHRvbShwYXJzZVRyZWUpIHtcbiAgICBwYXJzZVRyZWUuZm9yRWFjaExpbmUoZnVuY3Rpb24obGluZSkge1xuICAgICAgdGhpcy5saW5lcy5wdXNoKGxpbmUpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICBhZGRUb3BNYXJnaW4odG9wTWFyZ2luRGVwdGgpIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICB0b3BNYXJnaW5XaWR0aCA9IHdpZHRoLCAgLy8vXG4gICAgICAgICAgdG9wTWFyZ2luU3RyaW5nID0gbWFyZ2luU3RyaW5nRnJvbU1hcmdpbldpZHRoKHRvcE1hcmdpbldpZHRoKTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0b3BNYXJnaW5EZXB0aDsgaW5kZXgrKykge1xuICAgICAgdGhpcy5saW5lcy51bnNoaWZ0KHRvcE1hcmdpblN0cmluZyk7XG4gICAgfVxuICB9XG5cbiAgYWRkTGVmdE1hcmdpbihsZWZ0TWFyZ2luV2lkdGgpIHtcbiAgICBjb25zdCBsZWZ0TWFyZ2luU3RyaW5nID0gbWFyZ2luU3RyaW5nRnJvbU1hcmdpbldpZHRoKGxlZnRNYXJnaW5XaWR0aCksXG4gICAgICAgICAgbGluZXNMZW5ndGggPSB0aGlzLmxpbmVzLmxlbmd0aDtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsaW5lc0xlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdGhpcy5saW5lc1tpbmRleF0gPSBsZWZ0TWFyZ2luU3RyaW5nICsgdGhpcy5saW5lc1tpbmRleF07XG4gICAgfVxuICB9XG5cbiAgYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCkge1xuICAgIGNvbnN0IHJpZ2h0TWFyZ2luU3RyaW5nID0gbWFyZ2luU3RyaW5nRnJvbU1hcmdpbldpZHRoKHJpZ2h0TWFyZ2luV2lkdGgpLFxuICAgICAgICAgIGxpbmVzTGVuZ3RoID0gdGhpcy5saW5lcy5sZW5ndGg7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGluZXNMZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHRoaXMubGluZXNbaW5kZXhdID0gdGhpcy5saW5lc1tpbmRleF0gKyByaWdodE1hcmdpblN0cmluZztcbiAgICB9XG4gIH1cblxuICBhZGRCb3R0b21NYXJnaW4oYm90dG9tTWFyZ2luRGVwdGgpIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBib3R0b21NYXJnaW5XaWR0aCA9IHdpZHRoLCAgLy8vXG4gICAgICAgICAgYm90dG9tTWFyZ2luU3RyaW5nID0gbWFyZ2luU3RyaW5nRnJvbU1hcmdpbldpZHRoKGJvdHRvbU1hcmdpbldpZHRoKTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBib3R0b21NYXJnaW5EZXB0aDsgaW5kZXgrKykge1xuICAgICAgdGhpcy5saW5lcy5wdXNoKGJvdHRvbU1hcmdpblN0cmluZyk7XG4gICAgfVxuICB9XG4gIFxuICBwb3BMaW5lKCkgeyByZXR1cm4gdGhpcy5saW5lcy5wb3AoKTsgfVxuICBcbiAgc2hpZnRMaW5lKCkgeyByZXR1cm4gdGhpcy5saW5lcy5zaGlmdCgpOyB9XG4gIFxuICBwdXNoTGluZShsaW5lKSB7IHRoaXMubGluZXMucHVzaChsaW5lKTsgfVxuICBcbiAgdW5zaGlmdExpbmUobGluZSkgeyB0aGlzLmxpbmVzLnVuc2hpZnQobGluZSk7IH1cblxuICB0b1N0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmxpbmVzLnJlZHVjZShmdW5jdGlvbihzdHJpbmcsIGxpbmUpIHtcbiAgICAgIHN0cmluZyArPSBsaW5lICsgJ1xcbic7XG5cbiAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgfSwgJycpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcnNlVHJlZTtcblxuZnVuY3Rpb24gbWFyZ2luU3RyaW5nRnJvbU1hcmdpbldpZHRoKG1hcmdpbldpZHRoLCBzcGFjZUNoYXJhY3Rlcikge1xuICBzcGFjZUNoYXJhY3RlciA9IHNwYWNlQ2hhcmFjdGVyIHx8ICcgJztcblxuICBsZXQgbWFyZ2luU3RyaW5nID0gJyc7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG1hcmdpbldpZHRoOyBpbmRleCsrKSB7XG4gICAgbWFyZ2luU3RyaW5nICs9IHNwYWNlQ2hhcmFjdGVyO1xuICB9XG5cbiAgcmV0dXJuIG1hcmdpblN0cmluZztcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRW1wdHlQYXJzZVRyZWUgPSByZXF1aXJlKCcuL2VtcHR5JyksXG4gICAgICBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IHJlcXVpcmUoJy4vdmVydGljYWxCcmFuY2gnKSxcbiAgICAgIEhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUgPSByZXF1aXJlKCcuL2hvcml6b250YWxCcmFuY2gnKTtcblxuY2xhc3MgQ2hpbGROb2Rlc1BhcnNlVHJlZSBleHRlbmRzIFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIHtcbiAgc3RhdGljIGZyb21DaGlsZE5vZGVzKGNoaWxkTm9kZXMsIGxpbmVzKSB7XG4gICAgY29uc3QgY2hpbGROb2RlUGFyc2VUcmVlcyA9IGNoaWxkTm9kZXMubWFwKGZ1bmN0aW9uKGNoaWxkTm9kZSkge1xuICAgICAgICAgICAgY29uc3QgY2hpbGROb2RlUGFyc2VUcmVlID0gY2hpbGROb2RlLmdlbmVyYXRlUGFyc2VUcmVlKGxpbmVzKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gY2hpbGROb2RlUGFyc2VUcmVlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZXNMZW5ndGggPSBjaGlsZE5vZGVQYXJzZVRyZWVzLmxlbmd0aDtcbiAgICBcbiAgICBsZXQgZmlyc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gdW5kZWZpbmVkLFxuICAgICAgICBsYXN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IDAsXG4gICAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZXNXaWR0aCA9IDAsXG4gICAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZXNEZXB0aCA9IDA7XG5cbiAgICBjaGlsZE5vZGVQYXJzZVRyZWVzLmZvckVhY2goZnVuY3Rpb24oY2hpbGROb2RlUGFyc2VUcmVlLCBpbmRleCkge1xuICAgICAgY29uc3QgY2hpbGROb2RlUGFyc2VUcmVlV2lkdGggPSBjaGlsZE5vZGVQYXJzZVRyZWUuZ2V0V2lkdGgoKSxcbiAgICAgICAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZURlcHRoID0gY2hpbGROb2RlUGFyc2VUcmVlLmdldERlcHRoKCk7XG5cbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICBjb25zdCBmaXJzdENoaWxkTm9kZVBhcnNlVHJlZSA9IGNoaWxkTm9kZVBhcnNlVHJlZSxcbiAgICAgICAgICAgIGZpcnN0Q2hpbGROb2RlUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IGZpcnN0Q2hpbGROb2RlUGFyc2VUcmVlLmdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKTtcblxuICAgICAgICBmaXJzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSBmaXJzdENoaWxkTm9kZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb247XG4gICAgICB9XG5cbiAgICAgIGlmIChpbmRleCA9PT0gY2hpbGROb2RlUGFyc2VUcmVlc0xlbmd0aCAtIDEpIHtcbiAgICAgICAgY29uc3QgbGFzdENoaWxkTm9kZVBhcnNlVHJlZSA9IGNoaWxkTm9kZVBhcnNlVHJlZSxcbiAgICAgICAgICAgIGxhc3RDaGlsZE5vZGVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gbGFzdENoaWxkTm9kZVBhcnNlVHJlZS5nZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCk7XG5cbiAgICAgICAgbGFzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24gKz0gbGFzdENoaWxkTm9kZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb247XG4gICAgICB9XG5cbiAgICAgIGlmIChpbmRleCA8IGNoaWxkTm9kZVBhcnNlVHJlZXNMZW5ndGggLSAxKSB7XG4gICAgICAgIGxhc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uICs9IGNoaWxkTm9kZVBhcnNlVHJlZVdpZHRoO1xuICAgICAgICBsYXN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiArPSAxO1xuXG4gICAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZXNXaWR0aCArPSAxO1xuICAgICAgfVxuXG4gICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzV2lkdGggKz0gY2hpbGROb2RlUGFyc2VUcmVlV2lkdGg7XG4gICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzRGVwdGggPSBNYXRoLm1heChjaGlsZE5vZGVQYXJzZVRyZWVzRGVwdGgsIGNoaWxkTm9kZVBhcnNlVHJlZURlcHRoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHdpZHRoID0gbGFzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24gLSBmaXJzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24gKyAxLFxuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZnJvbVdpZHRoKHdpZHRoKSxcbiAgICAgICAgICBob3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlID0gSG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZS5mcm9tV2lkdGgod2lkdGgpLFxuICAgICAgICAgIGxlZnRNYXJnaW5XaWR0aCA9IGZpcnN0VmVydGljYWxCcmFuY2hQb3NpdGlvbixcbiAgICAgICAgICByaWdodE1hcmdpbldpZHRoID0gY2hpbGROb2RlUGFyc2VUcmVlc1dpZHRoIC0gd2lkdGggLSBsZWZ0TWFyZ2luV2lkdGg7XG5cbiAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5hZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCk7XG4gICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCk7XG4gICAgaG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZS5hZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCk7XG4gICAgaG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZS5hZGRSaWdodE1hcmdpbihyaWdodE1hcmdpbldpZHRoKTtcbiAgICBcbiAgICBjb25zdCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpLFxuICAgICAgICAgIGNoaWxkTm9kZXNQYXJzZVRyZWUgPSBFbXB0eVBhcnNlVHJlZS5mcm9tRGVwdGgoY2hpbGROb2RlUGFyc2VUcmVlc0RlcHRoLCBDaGlsZE5vZGVzUGFyc2VUcmVlLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKTtcblxuICAgIGNoaWxkTm9kZVBhcnNlVHJlZXMuZm9yRWFjaChmdW5jdGlvbihjaGlsZE5vZGVQYXJzZVRyZWUsIGluZGV4KSB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVQYXJzZVRyZWVEZXB0aCA9IGNoaWxkTm9kZVBhcnNlVHJlZS5nZXREZXB0aCgpLFxuICAgICAgICAgICAgY2xvbmVkQ2hpbGROb2RlUGFyc2VUcmVlID0gY2hpbGROb2RlUGFyc2VUcmVlLmNsb25lKCk7XG5cbiAgICAgIGlmIChpbmRleCA8IGNoaWxkTm9kZVBhcnNlVHJlZXNMZW5ndGggLSAxKSB7XG4gICAgICAgIGNvbnN0IHJpZ2h0TWFyZ2luV2lkdGggPSAxO1xuXG4gICAgICAgIGNsb25lZENoaWxkTm9kZVBhcnNlVHJlZS5hZGRSaWdodE1hcmdpbihyaWdodE1hcmdpbldpZHRoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNoaWxkTm9kZVBhcnNlVHJlZURlcHRoIDwgY2hpbGROb2RlUGFyc2VUcmVlc0RlcHRoKSB7XG4gICAgICAgIGNvbnN0IGJvdHRvbU1hcmdpbkRlcHRoID0gY2hpbGROb2RlUGFyc2VUcmVlc0RlcHRoIC0gY2hpbGROb2RlUGFyc2VUcmVlRGVwdGg7XG5cbiAgICAgICAgY2xvbmVkQ2hpbGROb2RlUGFyc2VUcmVlLmFkZEJvdHRvbU1hcmdpbihib3R0b21NYXJnaW5EZXB0aCk7XG4gICAgICB9XG5cbiAgICAgIGNoaWxkTm9kZXNQYXJzZVRyZWUuYXBwZW5kVG9SaWdodChjbG9uZWRDaGlsZE5vZGVQYXJzZVRyZWUpO1xuICAgIH0pO1xuXG4gICAgY2hpbGROb2Rlc1BhcnNlVHJlZS5hcHBlbmRUb1RvcChob3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlKTtcbiAgICBjaGlsZE5vZGVzUGFyc2VUcmVlLmFwcGVuZFRvVG9wKHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlKTtcblxuICAgIHJldHVybiBjaGlsZE5vZGVzUGFyc2VUcmVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2hpbGROb2Rlc1BhcnNlVHJlZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUGFyc2VUcmVlID0gcmVxdWlyZSgnLi4vcGFyc2VUcmVlJyk7XG5cbmNsYXNzIEVtcHR5UGFyc2VUcmVlIGV4dGVuZHMgUGFyc2VUcmVlIHtcbiAgc3RhdGljIGZyb21EZXB0aChkZXB0aCwgQ2xhc3MsIC4uLmFyZ3MpIHtcbiAgICBDbGFzcyA9IENsYXNzIHx8IEVtcHR5UGFyc2VUcmVlO1xuICAgIFxuICAgIGNvbnN0IGxpbmVzID0gW107XG4gICAgXG4gICAgbGV0IGluZGV4ID0gMDtcblxuICAgIHdoaWxlIChpbmRleCA8IGRlcHRoKSB7XG4gICAgICBsaW5lc1tpbmRleCsrXSA9ICcnO1xuICAgIH1cblxuICAgIGFyZ3MudW5zaGlmdChsaW5lcyk7XG4gICAgYXJncy51bnNoaWZ0KG51bGwpO1xuXG4gICAgY29uc3QgZW1wdHlQYXJzZVRyZWUgPSBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KENsYXNzLCBhcmdzKSk7ICAvLy9cblxuICAgIHJldHVybiBlbXB0eVBhcnNlVHJlZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVtcHR5UGFyc2VUcmVlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBQYXJzZVRyZWUgPSByZXF1aXJlKCcuLi9wYXJzZVRyZWUnKTtcblxuY2xhc3MgSG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZSBleHRlbmRzIFBhcnNlVHJlZSB7XG4gIHN0YXRpYyBmcm9tV2lkdGgod2lkdGgpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBzdHJpbmdGcm9tQ2hhcmFjdGVyc1dpZHRoKHdpZHRoLCAnLScpLFxuICAgICAgICAgIGxpbmUgPSBzdHJpbmcsIC8vL1xuICAgICAgICAgIGxpbmVzID0gW2xpbmVdLFxuICAgICAgICAgIGhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUgPSBuZXcgSG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZShsaW5lcyk7XG5cbiAgICByZXR1cm4gaG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEhvcml6b250YWxCcmFuY2hQYXJzZVRyZWU7XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21DaGFyYWN0ZXJzV2lkdGgoY2hhcmFjdGVyc1dpZHRoLCBjaGFyYWN0ZXIpIHtcbiAgbGV0IHN0cmluZyA9ICcnO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjaGFyYWN0ZXJzV2lkdGg7IGluZGV4KyspIHtcbiAgICBzdHJpbmcgKz0gY2hhcmFjdGVyO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsID0gcmVxdWlyZSgnLi4vLi4vdXRpbC9hcnJheScpLFxuICAgICAgRW1wdHlQYXJzZVRyZWUgPSByZXF1aXJlKCcuL2VtcHR5JyksXG4gICAgICBSdWxlTmFtZVBhcnNlVHJlZSA9IHJlcXVpcmUoJy4vcnVsZU5hbWUnKSxcbiAgICAgIENoaWxkTm9kZXNQYXJzZVRyZWUgPSByZXF1aXJlKCcuL2NoaWxkTm9kZXMnKSxcbiAgICAgIFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gcmVxdWlyZSgnLi92ZXJ0aWNhbEJyYW5jaCcpO1xuXG5jbGFzcyBOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUgZXh0ZW5kcyBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSB7XG4gIHN0YXRpYyBmcm9tTm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgbGluZXMpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGFycmF5VXRpbC5maXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBjaGlsZE5vZGUgPSBmaXJzdENoaWxkTm9kZSxcbiAgICAgICAgICBjaGlsZE5vZGVzTGVuZ3RoID0gY2hpbGROb2Rlcy5sZW5ndGgsXG4gICAgICAgICAgY2hpbGROb2RlT3JOb2Rlc1BhcnNlVHJlZSA9IChjaGlsZE5vZGVzTGVuZ3RoID09PSAxKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGROb2RlLmdlbmVyYXRlUGFyc2VUcmVlKGxpbmVzKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaGlsZE5vZGVzUGFyc2VUcmVlLmZyb21DaGlsZE5vZGVzKGNoaWxkTm9kZXMsIGxpbmVzKSxcbiAgICAgICAgICBydWxlTmFtZVBhcnNlVHJlZSA9IFJ1bGVOYW1lUGFyc2VUcmVlLmZyb21Ob25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBsaW5lcyk7XG4gICAgXG4gICAgbGV0IHJ1bGVOYW1lUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IHJ1bGVOYW1lUGFyc2VUcmVlLmdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKTtcbiAgICBcbiAgICBjb25zdCBjaGlsZE5vZGVPck5vZGVzUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IGNoaWxkTm9kZU9yTm9kZXNQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpLFxuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUG9zaXRpb25zRGlmZmVyZW5jZSA9IHJ1bGVOYW1lUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbiAtIGNoaWxkTm9kZU9yTm9kZXNQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uO1xuICAgIFxuICAgIGxldCBsZWZ0TWFyZ2luV2lkdGggPSB1bmRlZmluZWQ7XG5cbiAgICBpZiAoZmFsc2UpIHtcblxuICAgIH0gZWxzZSBpZiAodmVydGljYWxCcmFuY2hQb3NpdGlvbnNEaWZmZXJlbmNlIDwgMCkge1xuICAgICAgbGVmdE1hcmdpbldpZHRoID0gLXZlcnRpY2FsQnJhbmNoUG9zaXRpb25zRGlmZmVyZW5jZTtcblxuICAgICAgcnVsZU5hbWVQYXJzZVRyZWUuYWRkTGVmdE1hcmdpbihsZWZ0TWFyZ2luV2lkdGgpO1xuICAgIH0gZWxzZSBpZiAodmVydGljYWxCcmFuY2hQb3NpdGlvbnNEaWZmZXJlbmNlID4gMCkge1xuICAgICAgbGVmdE1hcmdpbldpZHRoID0gK3ZlcnRpY2FsQnJhbmNoUG9zaXRpb25zRGlmZmVyZW5jZTtcblxuICAgICAgY2hpbGROb2RlT3JOb2Rlc1BhcnNlVHJlZS5hZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCk7XG4gICAgfVxuXG4gICAgY29uc3QgcnVsZU5hbWVQYXJzZVRyZWVXaWR0aCA9IHJ1bGVOYW1lUGFyc2VUcmVlLmdldFdpZHRoKCksXG4gICAgICAgICAgY2hpbGROb2RlT3JOb2Rlc1BhcnNlVHJlZVdpZHRoID0gY2hpbGROb2RlT3JOb2Rlc1BhcnNlVHJlZS5nZXRXaWR0aCgpLFxuICAgICAgICAgIHdpZHRoc0RpZmZlcmVuY2UgPSBydWxlTmFtZVBhcnNlVHJlZVdpZHRoIC0gY2hpbGROb2RlT3JOb2Rlc1BhcnNlVHJlZVdpZHRoO1xuICAgIFxuICAgIGxldCByaWdodE1hcmdpbldpZHRoID0gdW5kZWZpbmVkO1xuXG4gICAgaWYgKGZhbHNlKSB7XG5cbiAgICB9IGVsc2UgaWYgKHdpZHRoc0RpZmZlcmVuY2UgPCAwKSB7XG4gICAgICByaWdodE1hcmdpbldpZHRoID0gLXdpZHRoc0RpZmZlcmVuY2U7XG4gICAgICBcbiAgICAgIHJ1bGVOYW1lUGFyc2VUcmVlLmFkZFJpZ2h0TWFyZ2luKHJpZ2h0TWFyZ2luV2lkdGgpO1xuICAgIH0gZWxzZSBpZiAod2lkdGhzRGlmZmVyZW5jZSA+IDApIHtcbiAgICAgIHJpZ2h0TWFyZ2luV2lkdGggPSArd2lkdGhzRGlmZmVyZW5jZTtcblxuICAgICAgY2hpbGROb2RlT3JOb2Rlc1BhcnNlVHJlZS5hZGRSaWdodE1hcmdpbihyaWdodE1hcmdpbldpZHRoKTtcbiAgICB9XG5cbiAgICBydWxlTmFtZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSBydWxlTmFtZVBhcnNlVHJlZS5nZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCk7XG5cbiAgICBjb25zdCBydWxlTmFtZVBhcnNlVHJlZURlcHRoID0gcnVsZU5hbWVQYXJzZVRyZWUuZ2V0RGVwdGgoKSxcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWVEZXB0aCA9IHJ1bGVOYW1lUGFyc2VUcmVlRGVwdGgsIC8vL1xuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSBydWxlTmFtZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24sIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IEVtcHR5UGFyc2VUcmVlLmZyb21EZXB0aChub25UZXJtaW5hbE5vZGVQYXJzZVRyZWVEZXB0aCwgTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKTtcblxuICAgIG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZS5hcHBlbmRUb1JpZ2h0KHJ1bGVOYW1lUGFyc2VUcmVlKTtcbiAgICBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWUuYXBwZW5kVG9Cb3R0b20oY2hpbGROb2RlT3JOb2Rlc1BhcnNlVHJlZSk7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlUGFyc2VUcmVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IHJlcXVpcmUoJy4vdmVydGljYWxCcmFuY2gnKTtcblxuY2xhc3MgUnVsZU5hbWVQYXJzZVRyZWUgZXh0ZW5kcyBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSB7XG4gIHN0YXRpYyBmcm9tTm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgbGluZXMpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIGZpcnN0TGluZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRGaXJzdExpbmUoKSxcbiAgICAgICAgICBsYXN0TGluZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRMYXN0TGluZSgpLFxuICAgICAgICAgIGZpcnN0TGluZUluZGV4ID0gbGluZXMuaW5kZXhPZihmaXJzdExpbmUpLFxuICAgICAgICAgIGxhc3RMaW5lSW5kZXggPSBsaW5lcy5pbmRleE9mKGxhc3RMaW5lKSxcbiAgICAgICAgICBmaXJzdExpbmVOdW1iZXIgPSBmaXJzdExpbmVJbmRleCArIDEsXG4gICAgICAgICAgbGFzdExpbmVOdW1iZXIgPSBsYXN0TGluZUluZGV4ICsgMSxcbiAgICAgICAgICBzdHJpbmcgPSBgJHtydWxlTmFtZX0oJHtmaXJzdExpbmVOdW1iZXJ9LSR7bGFzdExpbmVOdW1iZXJ9KWAsXG4gICAgICAgICAgc3RyaW5nTGVuZ3RoID0gc3RyaW5nLmxlbmd0aCxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoID0gc3RyaW5nTGVuZ3RoLCAvLy9cbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21XaWR0aCh2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoKSxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpLFxuICAgICAgICAgIHJ1bGVOYW1lUGFyc2VUcmVlID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZnJvbVN0cmluZyhzdHJpbmcsIFJ1bGVOYW1lUGFyc2VUcmVlLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKTtcblxuICAgIHJ1bGVOYW1lUGFyc2VUcmVlLmFwcGVuZFRvVG9wKHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlKTtcblxuICAgIHJldHVybiBydWxlTmFtZVBhcnNlVHJlZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGVOYW1lUGFyc2VUcmVlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IHJlcXVpcmUoJy4vdmVydGljYWxCcmFuY2gnKTtcblxuY2xhc3MgVGVybWluYWxOb2RlUGFyc2VUcmVlIGV4dGVuZHMgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUge1xuICBzdGF0aWMgZnJvbVRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGUsIGxpbmVzKSB7XG4gICAgY29uc3QgbGluZSA9IHRlcm1pbmFsTm9kZS5nZXRMaW5lKCksXG4gICAgICAgICAgbGluZUluZGV4ID0gbGluZXMuaW5kZXhPZihsaW5lKSxcbiAgICAgICAgICBsaW5lTnVtYmVyID0gbGluZUluZGV4ICsgMSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuID0gdGVybWluYWxOb2RlLmdldFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZSA9IHNpZ25pZmljYW50VG9rZW4uZ2V0VHlwZSgpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5FcnJvciA9IHNpZ25pZmljYW50VG9rZW4uZ2V0RXJyb3IoKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuQ29udGVudCA9IHNpZ25pZmljYW50VG9rZW4uZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGNvbnRlbnQgPSBzaWduaWZpY2FudFRva2VuQ29udGVudCxcbiAgICAgICAgICBkZXNjcmlwdGlvbiA9IChzaWduaWZpY2FudFRva2VuRXJyb3IgPT09IHRydWUpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Vycm9yJyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGUsXG4gICAgICAgICAgc3RyaW5nID0gYCR7Y29udGVudH1bJHtkZXNjcmlwdGlvbn1dKCR7bGluZU51bWJlcn0pYCxcbiAgICAgICAgICBzdHJpbmdMZW5ndGggPSBzdHJpbmcubGVuZ3RoLFxuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGggPSBzdHJpbmdMZW5ndGgsIC8vL1xuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZnJvbVdpZHRoKHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGgpLFxuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5nZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCksIFxuICAgICAgICAgIHRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21TdHJpbmcoc3RyaW5nLCBUZXJtaW5hbE5vZGVQYXJzZVRyZWUsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pO1xuICAgIFxuICAgIHRlcm1pbmFsTm9kZVBhcnNlVHJlZS5hcHBlbmRUb1RvcCh2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSk7XG5cbiAgICByZXR1cm4gdGVybWluYWxOb2RlUGFyc2VUcmVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGVybWluYWxOb2RlUGFyc2VUcmVlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IHJlcXVpcmUoJy4uL3ZlcnRpY2FsQnJhbmNoJyk7XG5cbmNsYXNzIEVwc2lsb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUgZXh0ZW5kcyBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSB7XG4gIHN0YXRpYyBmcm9tRXBzaWxvblRlcm1pbmFsTm9kZShlcHNpbG9uVGVybWluYWxOb2RlLCBsaW5lcykge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBlcHNpbG9uVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBzdHJpbmcgPSBgJHtjb250ZW50fWAsXG4gICAgICAgICAgc3RyaW5nTGVuZ3RoID0gc3RyaW5nLmxlbmd0aCxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoID0gc3RyaW5nTGVuZ3RoLCAvLy9cbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21XaWR0aCh2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoKSxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpLCBcbiAgICAgICAgICB0ZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tU3RyaW5nKHN0cmluZywgRXBzaWxvblRlcm1pbmFsTm9kZVBhcnNlVHJlZSwgdmVydGljYWxCcmFuY2hQb3NpdGlvbik7XG4gICAgXG4gICAgdGVybWluYWxOb2RlUGFyc2VUcmVlLmFwcGVuZFRvVG9wKHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlKTtcblxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGVQYXJzZVRyZWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFcHNpbG9uVGVybWluYWxOb2RlUGFyc2VUcmVlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBQYXJzZVRyZWUgPSByZXF1aXJlKCcuLi9wYXJzZVRyZWUnKTtcblxuY2xhc3MgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUgZXh0ZW5kcyBQYXJzZVRyZWUge1xuICBjb25zdHJ1Y3RvcihsaW5lcywgdmVydGljYWxCcmFuY2hQb3NpdGlvbikge1xuICAgIHN1cGVyKGxpbmVzKTtcbiAgICBcbiAgICB0aGlzLnZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uO1xuICB9XG4gIFxuICBnZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRpY2FsQnJhbmNoUG9zaXRpb247XG4gIH1cblxuICBhZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCkge1xuICAgIHN1cGVyLmFkZExlZnRNYXJnaW4obGVmdE1hcmdpbldpZHRoKTtcblxuICAgIHRoaXMudmVydGljYWxCcmFuY2hQb3NpdGlvbiArPSBsZWZ0TWFyZ2luV2lkdGg7IC8vL1xuICB9XG5cbiAgc3RhdGljIGZyb21XaWR0aCh3aWR0aCkge1xuICAgIGNvbnN0IHN0cmluZyA9ICd8JyxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gMCxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21TdHJpbmcoc3RyaW5nLCBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSwgdmVydGljYWxCcmFuY2hQb3NpdGlvbiksXG4gICAgICAgICAgbGVmdE1hcmdpbldpZHRoID0gTWF0aC5mbG9vcih3aWR0aC8yKSxcbiAgICAgICAgICByaWdodE1hcmdpbldpZHRoID0gd2lkdGggLSBsZWZ0TWFyZ2luV2lkdGggLSAxO1xuXG4gICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuYWRkTGVmdE1hcmdpbihsZWZ0TWFyZ2luV2lkdGgpO1xuICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmFkZFJpZ2h0TWFyZ2luKHJpZ2h0TWFyZ2luV2lkdGgpO1xuXG4gICAgcmV0dXJuIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVN0cmluZyhzdHJpbmcsIENsYXNzLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKSB7XG4gICAgQ2xhc3MgPSBDbGFzcyB8fCBQYXJzZVRyZWU7XG5cbiAgICBjb25zdCBsaW5lID0gc3RyaW5nLCAvLy9cbiAgICAgICAgICBsaW5lcyA9IFtsaW5lXSxcbiAgICAgICAgICBhcmdzID0gW251bGwsIGxpbmVzLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uXSxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoQ2xhc3MsIGFyZ3MpKTsgIC8vL1xuXG4gICAgcmV0dXJuIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENvbnRleHQgPSByZXF1aXJlKCcuL2NvbnRleHQnKSxcbiAgICAgIGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwvYXJyYXknKSxcbiAgICAgIHBhcnNlclV0aWwgPSByZXF1aXJlKCcuLi91dGlsL3BhcnNlcicpO1xuXG5jbGFzcyBDb21tb25QYXJzZXIge1xuICBjb25zdHJ1Y3RvcihydWxlcykge1xuICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgfVxuXG4gIGdldFJ1bGVzKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVzO1xuICB9XG4gIFxuICBub2RlRnJvbUxpbmVzKGxpbmVzLCBydWxlKSB7XG4gICAgY29uc3QgdG9rZW5zID0gcGFyc2VyVXRpbC50b2tlbnNGcm9tTGluZXMobGluZXMpLFxuICAgICAgICAgIG5vZGUgPSB0aGlzLnBhcnNlKHRva2VucywgcnVsZSk7XG4gICAgXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBwYXJzZSh0b2tlbnMsIHJ1bGUgPSBudWxsKSB7XG4gICAgbGV0IG5vZGUgPSBudWxsO1xuXG4gICAgaWYgKHJ1bGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJ1bGVzTGVuZ3RoID0gdGhpcy5ydWxlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChydWxlc0xlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgZmlyc3RSdWxlID0gYXJyYXlVdGlsLmZpcnN0KHRoaXMucnVsZXMpO1xuXG4gICAgICAgIHJ1bGUgPSBmaXJzdFJ1bGU7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChydWxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gbmV3IENvbnRleHQodG9rZW5zLCB0aGlzLnJ1bGVzKSxcbiAgICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IGZhbHNlLCAvLy9cbiAgICAgICAgICAgIG5vZGVPck5vZGVzID0gcnVsZS5wYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpO1xuXG4gICAgICBpZiAobm9kZU9yTm9kZXMgIT09IG51bGwpIHtcbiAgICAgICAgbm9kZSA9IChub2RlT3JOb2RlcyBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICAgICAgIGFycmF5VXRpbC5maXJzdChub2RlT3JOb2RlcykgOlxuICAgICAgICAgICAgICAgICAgIG5vZGVPck5vZGVzO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xuICB9XG4gIFxuICB0b1N0cmluZygpIHtcbiAgICBjb25zdCBtYXhpbXVtUnVsZU5hbWVMZW5ndGggPSB0aGlzLnJ1bGVzLnJlZHVjZShmdW5jdGlvbihtYXhpbXVtUnVsZU5hbWVMZW5ndGgsIHJ1bGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgICBydWxlTmFtZUxlbmd0aCA9IHJ1bGVOYW1lLmxlbmd0aDtcbiAgXG4gICAgICAgICAgICBtYXhpbXVtUnVsZU5hbWVMZW5ndGggPSBNYXRoLm1heChtYXhpbXVtUnVsZU5hbWVMZW5ndGgsIHJ1bGVOYW1lTGVuZ3RoKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gbWF4aW11bVJ1bGVOYW1lTGVuZ3RoO1xuICAgICAgICAgIH0sIDApLFxuICAgICAgICAgIHN0cmluZyA9IHRoaXMucnVsZXMucmVkdWNlKGZ1bmN0aW9uKHN0cmluZywgcnVsZSkge1xuICAgICAgICAgICAgY29uc3QgcnVsZVN0cmluZyA9IHJ1bGUudG9TdHJpbmcobWF4aW11bVJ1bGVOYW1lTGVuZ3RoKTtcbiAgXG4gICAgICAgICAgICBzdHJpbmcgKz0gcnVsZVN0cmluZztcbiAgXG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nO1xuICAgICAgICAgIH0sICcnKTtcbiAgICBcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgZmluZFJ1bGUocnVsZU5hbWUpIHtcbiAgICBjb25zdCBydWxlcyA9IHRoaXMuZ2V0UnVsZXMoKTtcblxuICAgIHJldHVybiBwYXJzZXJVdGlsLmZpbmRSdWxlKHJ1bGVOYW1lLCBydWxlcyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21tb25QYXJzZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5JyksXG4gICAgICBlYXN5TGF5b3V0ID0gcmVxdWlyZSgnZWFzeS1sYXlvdXQnKTtcblxuY29uc3QgeyBUZXh0YXJlYSB9ID0gZWFzeSxcbiAgICAgIHsgU2l6ZWFibGVFbGVtZW50LCBWZXJ0aWNhbFNwbGl0dGVyIH0gPSBlYXN5TGF5b3V0O1xuXG5jb25zdCBjb250ZW50VGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0YXJlYSNjb250ZW50JyxcbiAgICAgIHBhcnNlVHJlZVRleHRhcmVhU2VsZWN0b3IgPSAndGV4dGFyZWEjcGFyc2VUcmVlJyxcbiAgICAgIGxleGljYWxFbnRyaWVzVGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0YXJlYSNsZXhpY2FsRW50cmllcycsXG4gICAgICBibmZUZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI2JuZicsXG4gICAgICBzaXplYWJsZUVsZW1lbnRTZWxlY3RvciA9ICcjc2l6ZWFibGVFbGVtZW50JyxcbiAgICAgIHZlcnRpY2FsU3BsaXR0ZXJTZWxlY3RvciA9ICcjdmVydGljYWxTcGxpdHRlcicsXG4gICAgICBjb250ZW50VGV4dGFyZWEgPSBuZXcgVGV4dGFyZWEoY29udGVudFRleHRhcmVhU2VsZWN0b3IpLFxuICAgICAgcGFyc2VUcmVlVGV4dGFyZWEgPSBuZXcgVGV4dGFyZWEocGFyc2VUcmVlVGV4dGFyZWFTZWxlY3RvciksXG4gICAgICBsZXhpY2FsRW50cmllc1RleHRhcmVhID1uZXcgVGV4dGFyZWEobGV4aWNhbEVudHJpZXNUZXh0YXJlYVNlbGVjdG9yKSxcbiAgICAgIGJuZlRleHRhcmVhID0gbmV3IFRleHRhcmVhKGJuZlRleHRhcmVhU2VsZWN0b3IpLFxuICAgICAgc2l6ZWFibGVFbGVtZW50ID0gbmV3IFNpemVhYmxlRWxlbWVudChzaXplYWJsZUVsZW1lbnRTZWxlY3RvciksXG4gICAgICBiZWZvcmVTaXplYWJsZUVsZW1lbnQgPSBmYWxzZSxcbiAgICAgIGFmdGVyU2l6ZWFibGVFbGVtZW50ID0gdHJ1ZTtcblxubGV0IGxleGVyID0gbnVsbCxcbiAgICBwYXJzZXIgPSBudWxsO1xuXG5uZXcgVmVydGljYWxTcGxpdHRlcih2ZXJ0aWNhbFNwbGl0dGVyU2VsZWN0b3IsIGJlZm9yZVNpemVhYmxlRWxlbWVudCwgYWZ0ZXJTaXplYWJsZUVsZW1lbnQpO1xuXG5jbGFzcyBFeGFtcGxlIHtcbiAgc3RhdGljIHJ1bihjb250ZW50LCBsZXhpY2FsRW50cmllcywgYm5mLCB1cGRhdGVIYW5kbGVyKSB7XG4gICAgY29uc3QgY29udGVudFRleHRhcmVhVmFsdWUgPSBjb250ZW50LCAvLy9cbiAgICAgICAgICBibmZUZXh0YXJlYVZhbHVlID0gYm5mLCAgLy8vXG4gICAgICAgICAgbGV4aWNhbEVudHJpZXNUZXh0YXJlYVZhbHVlID0gSlNPTi5zdHJpbmdpZnkobGV4aWNhbEVudHJpZXMsIG51bGwsICcgICcpO1xuXG4gICAgY29udGVudFRleHRhcmVhLnNldFZhbHVlKGNvbnRlbnRUZXh0YXJlYVZhbHVlKTtcblxuICAgIGxleGljYWxFbnRyaWVzVGV4dGFyZWEuc2V0VmFsdWUobGV4aWNhbEVudHJpZXNUZXh0YXJlYVZhbHVlKTtcblxuICAgIGJuZlRleHRhcmVhLnNldFZhbHVlKGJuZlRleHRhcmVhVmFsdWUpO1xuXG4gICAgY29udGVudFRleHRhcmVhLm9uS2V5VXAodXBkYXRlSGFuZGxlcik7XG5cbiAgICBsZXhpY2FsRW50cmllc1RleHRhcmVhLm9uS2V5VXAodXBkYXRlSGFuZGxlcik7XG5cbiAgICBibmZUZXh0YXJlYS5vbktleVVwKHVwZGF0ZUhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIHVwZGF0ZUxleGVyKExleGVyKSB7XG4gICAgY29uc3QgbGV4aWNhbEVudHJpZXNUZXh0YXJlYVZhbHVlID0gbGV4aWNhbEVudHJpZXNUZXh0YXJlYS5nZXRWYWx1ZSgpO1xuXG4gICAgbGV0IGxleGljYWxFbnRyaWVzID0gbnVsbDtcblxuICAgIHRyeSB7XG4gICAgICBsZXhpY2FsRW50cmllcyA9IEpTT04ucGFyc2UobGV4aWNhbEVudHJpZXNUZXh0YXJlYVZhbHVlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge31cblxuICAgIGNvbnN0IGxleGljYWxFbnRyaWVzVmFsaWQgPSAobGV4aWNhbEVudHJpZXMgIT09IG51bGwpO1xuXG4gICAgaWYgKGxleGljYWxFbnRyaWVzVmFsaWQpIHtcbiAgICAgIGxleGVyID0gTGV4ZXIuZnJvbUVudHJpZXMobGV4aWNhbEVudHJpZXMpO1xuXG4gICAgICBsZXhpY2FsRW50cmllc1RleHRhcmVhLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXhlciA9IG51bGw7XG5cbiAgICAgIGxleGljYWxFbnRyaWVzVGV4dGFyZWEuYWRkQ2xhc3MoJ2Vycm9yJyk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHVwZGF0ZVBhcnNlcihjYWxsYmFjaykge1xuICAgIGNvbnN0IGJuZlRleHRhcmVhVmFsdWUgPSBibmZUZXh0YXJlYS5nZXRWYWx1ZSgpLFxuICAgICAgICAgIGJuZiA9IGJuZlRleHRhcmVhVmFsdWU7IC8vL1xuXG4gICAgcGFyc2VyID0gY2FsbGJhY2soYm5mKTtcbiAgfVxuXG4gIHN0YXRpYyB1cGRhdGVQYXJzZVRyZWUocnVsZU5hbWUpIHtcbiAgICBsZXQgbm9kZSA9IG51bGwsXG4gICAgICAgIHBhcnNlVHJlZVRleHRhcmVhSFRNTCA9ICcnO1xuXG4gICAgaWYgKChsZXhlciAhPT0gbnVsbCkgJiYgKHBhcnNlciAhPT0gbnVsbCkpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRUZXh0YXJlYVZhbHVlID0gY29udGVudFRleHRhcmVhLmdldFZhbHVlKCksXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50VGV4dGFyZWFWYWx1ZSwgLy8vXG4gICAgICAgICAgICAgIHJ1bGUgPSBwYXJzZXIuZmluZFJ1bGUocnVsZU5hbWUpLFxuICAgICAgICAgICAgICBsaW5lcyA9IGxleGVyLmxpbmVzRnJvbUNvbnRlbnQoY29udGVudCk7XG5cbiAgICAgICAgbm9kZSA9IHBhcnNlci5ub2RlRnJvbUxpbmVzKGxpbmVzLCBydWxlKTtcblxuICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGRvY3VtZW50IGNhbm5vdCBiZSBwYXJzZWQgZm9yIHNvbWUgcmVhc29uLicpOyAgLy8vXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYXJzZVRyZWUgPSBub2RlLmdlbmVyYXRlUGFyc2VUcmVlKGxpbmVzKTtcblxuICAgICAgICBwYXJzZVRyZWUuc2hpZnRMaW5lKCk7ICAvL1xuXG4gICAgICAgIGNvbnN0IHBhcnNlVHJlZVN0cmluZyA9IHBhcnNlVHJlZS50b1N0cmluZygpO1xuXG4gICAgICAgIHBhcnNlVHJlZVRleHRhcmVhSFRNTCA9IHBhcnNlVHJlZVN0cmluZzsgIC8vL1xuXG4gICAgICAgIGNvbnRlbnRUZXh0YXJlYS5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnRlbnRUZXh0YXJlYS5hZGRDbGFzcygnZXJyb3InKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwYXJzZVRyZWVUZXh0YXJlYS5odG1sKHBhcnNlVHJlZVRleHRhcmVhSFRNTCk7XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEV4YW1wbGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBCTkZFeGFtcGxlOiByZXF1aXJlKCcuL2V4YW1wbGVzL2JuZicpLFxuICBCYXNpY0V4YW1wbGU6IHJlcXVpcmUoJy4vZXhhbXBsZXMvYmFzaWMnKSxcbiAgRmxvcmVuY2VFeGFtcGxlOiByZXF1aXJlKCcuL2V4YW1wbGVzL2Zsb3JlbmNlJylcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBibmYgPSByZXF1aXJlKCcuLi9iYXNpYy9ibmYnKSxcbiAgICAgIEV4YW1wbGUgPSByZXF1aXJlKCcuLi9leGFtcGxlJyksXG4gICAgICBCYXNpY1BhcnNlciA9IHJlcXVpcmUoJy4uL2Jhc2ljL3BhcnNlcicpO1xuXG5jb25zdCB7IEJhc2ljTGV4ZXIgfSA9IGxleGVycztcblxuY2xhc3MgQmFzaWNFeGFtcGxlIHtcbiAgc3RhdGljIHJ1bigpIHtcbiAgICBjb25zdCBjb250ZW50ID0gJzErMi8zJyxcbiAgICAgICAgICBsZXhpY2FsRW50cmllcyA9IEJhc2ljTGV4ZXIuZW50cmllczsgLy8vIFxuICAgIFxuICAgIEV4YW1wbGUucnVuKGNvbnRlbnQsIGxleGljYWxFbnRyaWVzLCBibmYsIHVwZGF0ZUhhbmRsZXIpO1xuXG4gICAgdXBkYXRlSGFuZGxlcigpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUhhbmRsZXIoKSB7XG4gIGNvbnN0IHJ1bGVOYW1lID0gbnVsbDtcbiAgXG4gIEV4YW1wbGUudXBkYXRlTGV4ZXIoQmFzaWNMZXhlcik7XG5cbiAgRXhhbXBsZS51cGRhdGVQYXJzZXIoZnVuY3Rpb24oYm5mKSB7XG4gICAgY29uc3QgYmFzaWNQYXJzZXIgPSBCYXNpY1BhcnNlci5mcm9tQk5GKGJuZiksXG4gICAgICAgICAgcGFyc2VyID0gYmFzaWNQYXJzZXI7IC8vJ1xuICAgIFxuICAgIHJldHVybiBwYXJzZXI7IFxuICB9KTtcbiAgXG4gIEV4YW1wbGUudXBkYXRlUGFyc2VUcmVlKHJ1bGVOYW1lKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCYXNpY0V4YW1wbGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBibmYgPSByZXF1aXJlKCcuLi9ibmYvYm5mJyksXG4gICAgICBFeGFtcGxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZScpLFxuICAgICAgQk5GUGFyc2VyID0gcmVxdWlyZSgnLi4vYm5mL3BhcnNlcicpO1xuXG5jb25zdCB7IEJORkxleGVyIH0gPSBsZXhlcnM7XG5cbmNsYXNzIEJORkV4YW1wbGUge1xuICBzdGF0aWMgcnVuKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBibmYsXG4gICAgICAgICAgbGV4aWNhbEVudHJpZXMgPSBCTkZMZXhlci5lbnRyaWVzOyAgLy8vXG4gIFxuICAgIEV4YW1wbGUucnVuKGNvbnRlbnQsIGxleGljYWxFbnRyaWVzLCBibmYsIHVwZGF0ZUhhbmRsZXIpO1xuXG4gICAgdXBkYXRlSGFuZGxlcigpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUhhbmRsZXIoKSB7XG4gIGNvbnN0IHJ1bGVOYW1lID0gbnVsbDtcblxuICBFeGFtcGxlLnVwZGF0ZUxleGVyKEJORkxleGVyKTtcblxuICBFeGFtcGxlLnVwZGF0ZVBhcnNlcihmdW5jdGlvbihibmYpIHtcbiAgICBjb25zdCBibmZQYXJzZXIgPSBCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBwYXJzZXIgPSBibmZQYXJzZXI7IC8vL1xuICAgIFxuICAgIHJldHVybiBwYXJzZXI7XG4gIH0pO1xuXG4gIGNvbnN0IG5vZGUgPSBFeGFtcGxlLnVwZGF0ZVBhcnNlVHJlZShydWxlTmFtZSk7XG5cbiAgQk5GUGFyc2VyLmdlbmVyYXRlUnVsZXMobm9kZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQk5GRXhhbXBsZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKSxcbiAgICAgIGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBFeGFtcGxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZScpLFxuICAgICAgYm5mID0gcmVxdWlyZSgnLi4vZmxvcmVuY2UvYm5mJyksXG4gICAgICBtYXBwaW5ncyA9IHJlcXVpcmUoJy4uL2Zsb3JlbmNlL21hcHBpbmdzJyksXG4gICAgICBGbG9yZW5jZVBhcnNlciA9IHJlcXVpcmUoJy4uL2Zsb3JlbmNlL3BhcnNlcicpO1xuXG5jb25zdCB7IENoZWNrYm94LCBJbnB1dCB9ID0gZWFzeSxcbiAgICAgIHsgRmxvcmVuY2VMZXhlciB9ID0gbGV4ZXJzO1xuXG5jb25zdCBtYXBwaW5nc0NoZWNrYm94U2VsZWN0b3IgPSAnI21hcHBpbmdzJyxcbiAgICAgIHJ1bGVOYW1lSW5wdXRTZWxlY3RvciA9ICcjcnVsZU5hbWUnO1xuXG5sZXQgcnVsZU5hbWUsXG4gICAgbWFwcGluZ3NDaGVja2JveCxcbiAgICBydWxlTmFtZUlucHV0O1xuXG5jb25zdCBkZWZhdWx0TWFwcGluZ3MgPSBtYXBwaW5nczsgLy8vXG5cbmNsYXNzIEZsb3JlbmNlRXhhbXBsZSB7XG4gIHN0YXRpYyBydW4oKSB7XG4gICAgbWFwcGluZ3NDaGVja2JveCA9IG5ldyBDaGVja2JveChtYXBwaW5nc0NoZWNrYm94U2VsZWN0b3IpO1xuXG4gICAgcnVsZU5hbWVJbnB1dCA9IG5ldyBJbnB1dChydWxlTmFtZUlucHV0U2VsZWN0b3IpO1xuXG4gICAgbWFwcGluZ3NDaGVja2JveC5vbkNoYW5nZSh1cGRhdGVIYW5kbGVyKTtcblxuICAgIHJ1bGVOYW1lSW5wdXQub25LZXlVcCh1cGRhdGVIYW5kbGVyKTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSAnJyxcbiAgICAgICAgICBsZXhpY2FsRW50cmllcyA9IEZsb3JlbmNlTGV4ZXIuZW50cmllczsgLy8vXG5cbiAgICBFeGFtcGxlLnJ1bihjb250ZW50LCBsZXhpY2FsRW50cmllcywgYm5mLCB1cGRhdGVIYW5kbGVyKTtcblxuICAgIHVwZGF0ZUhhbmRsZXIoKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlRXhhbXBsZTtcblxuZnVuY3Rpb24gdXBkYXRlSGFuZGxlcigpIHtcbiAgY29uc3QgcnVsZU5hbWVJbnB1dFZhbHVlID0gcnVsZU5hbWVJbnB1dC5nZXRWYWx1ZSgpLFxuICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lSW5wdXRWYWx1ZTtcblxuICBFeGFtcGxlLnVwZGF0ZUxleGVyKEZsb3JlbmNlTGV4ZXIpO1xuXG4gIEV4YW1wbGUudXBkYXRlUGFyc2VyKGZ1bmN0aW9uKGJuZikge1xuICAgIGNvbnN0IG1hcHBpbmdzQ2hlY2tib3hDaGVja2VkID0gbWFwcGluZ3NDaGVja2JveC5pc0NoZWNrZWQoKSxcbiAgICAgICAgICBtYXBwaW5ncyA9IG1hcHBpbmdzQ2hlY2tib3hDaGVja2VkID9cbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TWFwcGluZ3MgOlxuICAgICAgICAgICAgICAgICAgICAgICAge30sXG4gICAgICAgICAgZmxvcmVuY2VQYXJzZXIgPSBGbG9yZW5jZVBhcnNlci5mcm9tQk5GQW5kTWFwcGluZ3MoYm5mLCBtYXBwaW5ncyksICAgIFxuICAgICAgICAgIHBhcnNlciA9IGZsb3JlbmNlUGFyc2VyOyAgLy8vXG4gICAgXG4gICAgcmV0dXJuIHBhcnNlcjtcbiAgfSk7XG5cbiAgRXhhbXBsZS51cGRhdGVQYXJzZVRyZWUocnVsZU5hbWUpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBibmYgPSBgXG5cblxuXG4gICAgIGRvY3VtZW50ICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBoZWFkZXI/IGJvZHk/IDtcbiAgICAgXG4gICAgIFxuICAgICBcbiAgICAgaGVhZGVyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIGltcG9ydCogdmVydGljYWxTcGFjZT8gO1xuXG4gICAgIGJvZHkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICAoIHJ1bGUgfCBheGlvbSB8IGxlbW1hIHwgdGhlb3JlbSB8IGRlY2xhcmF0aW9uIHwgdmVydGljYWxTcGFjZSB8IGVycm9yICkrIDtcblxuXG5cbiAgICAgaW1wb3J0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIFtpbXBvcnRdPE5PX1dISVRFU1BBQ0U+XCIoXCI8Tk9fV0hJVEVTUEFDRT5bc3RyaW5nXTxOT19XSElURVNQQUNFPlwiKVwiIDxFTkRfT0ZfTElORT4gO1xuICAgICAgICAgIFxuICAgICBcblxuICAgICBydWxlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCJSdWxlXCIgcGFyZW50aGVzaXNlZExhYmVscz8gPEVORF9PRl9MSU5FPiAoIHByZW1pc2UgfCBwcmVtaXNlcyApPyBjb25jbHVzaW9uIG1ldGFQcm9vZj8gO1xuXG4gICAgIGF4aW9tICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIkF4aW9tXCIgcGFyZW50aGVzaXNlZExhYmVscz8gPEVORF9PRl9MSU5FPiAoIHVuanVzdGlmaWVkU3RhdGVtZW50IHwgaW5kaWNhdGl2ZUNvbmRpdGlvbmFsICkgOyBcblxuICAgICBsZW1tYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCJMZW1tYVwiIHBhcmVudGhlc2lzZWRMYWJlbHM/IDxFTkRfT0ZfTElORT4gKCB1bmp1c3RpZmllZFN0YXRlbWVudCB8IGluZGljYXRpdmVDb25kaXRpb25hbCApIHByb29mPyA7XG5cbiAgICAgdGhlb3JlbSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIFwiVGhlb3JlbVwiIHBhcmVudGhlc2lzZWRMYWJlbHM/IDxFTkRfT0ZfTElORT4gKCB1bmp1c3RpZmllZFN0YXRlbWVudCB8IGluZGljYXRpdmVDb25kaXRpb25hbCApIHByb29mPyA7XG5cbiAgICAgZGVjbGFyYXRpb24gICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIFwiVHlwZVwiIHR5cGVEZWNsYXJhdGlvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBcIlR5cGVzXCIgdHlwZXNEZWNsYXJhdGlvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBcIkNvbnRleHRcIiBjb250ZXh0RGVjbGFyYXRpb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgXCJDb250ZXh0c1wiIGNvbnRleHRzRGVjbGFyYXRpb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgXCJWYXJpYWJsZVwiIHZhcmlhYmxlRGVjbGFyYXRpb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgXCJWYXJpYWJsZXNcIiB2YXJpYWJsZXNEZWNsYXJhdGlvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBcIkNvbnN0cnVjdG9yXCIgY29uc3RydWN0b3JEZWNsYXJhdGlvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBcIkNvbnN0cnVjdG9yc1wiIGNvbnN0cnVjdG9yc0RlY2xhcmF0aW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIFwiQWJicmV2aWF0aW9uXCIgYWJicmV2aWF0aW9uRGVjbGFyYXRpb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgXCJBYmJyZXZpYXRpb25zXCIgYWJicmV2aWF0aW9uc0RlY2xhcmF0aW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIFwiRGVwZW5kZW50VHlwZVwiIGRlcGVuZGVudFR5cGVEZWNsYXJhdGlvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBcIkRlcGVuZGVudFR5cGVzXCIgZGVwZW5kZW50VHlwZXNEZWNsYXJhdGlvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBcIk1ldGF2YXJpYWJsZVwiIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIFwiTWV0YXZhcmlhYmxlc1wiIG1ldGF2YXJpYWJsZXNEZWNsYXJhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuXG4gICAgIHZlcnRpY2FsU3BhY2UgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICA8RU5EX09GX0xJTkU+KyA7XG5cblxuXG4gICAgIGVycm9yICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICAuIDtcblxuICAgICBcblxuICAgICB0eXBlc0RlY2xhcmF0aW9uICAgICAgICAgICAgICAgICAgICAgOjo9ICAgdHlwZURlY2xhcmF0aW9uICggXCIsXCIgdHlwZURlY2xhcmF0aW9uKSsgO1xuXG4gICAgIGNvbnRleHRzRGVjbGFyYXRpb24gICAgICAgICAgICAgICAgICA6Oj0gICBjb250ZXh0RGVjbGFyYXRpb24gKCBcIixcIiBjb250ZXh0RGVjbGFyYXRpb24pKyA7XG5cbiAgICAgdmFyaWFibGVzRGVjbGFyYXRpb24gICAgICAgICAgICAgICAgIDo6PSAgIHZhcmlhYmxlRGVjbGFyYXRpb24gKCBcIixcIiB2YXJpYWJsZURlY2xhcmF0aW9uKSsgO1xuICAgXG4gICAgIGNvbnN0cnVjdG9yc0RlY2xhcmF0aW9uICAgICAgICAgICAgICA6Oj0gICBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uICggXCIsXCIgY29uc3RydWN0b3JEZWNsYXJhdGlvbikrIDtcbiAgIFxuICAgICBhYmJyZXZpYXRpb25zRGVjbGFyYXRpb24gICAgICAgICAgICAgOjo9ICAgYWJicmV2aWF0aW9uRGVjbGFyYXRpb24gKCBcIixcIiBhYmJyZXZpYXRpb25EZWNsYXJhdGlvbikrIDtcbiAgIFxuICAgICBkZXBlbmRlbnRUeXBlc0RlY2xhcmF0aW9uICAgICAgICAgICAgOjo9ICAgZGVwZW5kZW50VHlwZURlY2xhcmF0aW9uICggXCIsXCIgZGVwZW5kZW50VHlwZURlY2xhcmF0aW9uKSogO1xuICAgXG4gICAgIG1ldGF2YXJpYWJsZXNEZWNsYXJhdGlvbiAgICAgICAgICAgICA6Oj0gICBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbiAoIFwiLFwiIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uKSogO1xuICAgXG5cblxuICAgICB0eXBlRGVjbGFyYXRpb24gICAgICAgICAgICAgICAgICAgICAgOjo9ICAgdHlwZU5hbWUgO1xuICAgXG4gICAgIGNvbnRleHREZWNsYXJhdGlvbiAgICAgICAgICAgICAgICAgICA6Oj0gICBjb250ZXh0TmFtZSg8Tk9fV0hJVEVTUEFDRT5cIjpcInR5cGVOYW1lKT8gO1xuICAgXG4gICAgIHZhcmlhYmxlRGVjbGFyYXRpb24gICAgICAgICAgICAgICAgICA6Oj0gICB2YXJpYWJsZU5hbWUgO1xuICAgXG4gICAgIGNvbnN0cnVjdG9yRGVjbGFyYXRpb24gICAgICAgICAgICAgICA6Oj0gICBjb25zdHJ1Y3Rvck5hbWU8Tk9fV0hJVEVTUEFDRT5wYXJlbnRoZXNpc2VkVHlwZU5hbWVzPzxOT19XSElURVNQQUNFPlwiOlwiPE5PX1dISVRFU1BBQ0U+dHlwZU5hbWUgO1xuICAgXG4gICAgIGFiYnJldmlhdGlvbkRlY2xhcmF0aW9uICAgICAgICAgICAgICA6Oj0gICB0eXBlTmFtZSBcImZvclwiIHR5cGVOYW1lIHwgY29uc3RydWN0b3JOYW1lIFwiZm9yXCIgY29uc3RydWN0b3JOYW1lIDtcblxuICAgICBkZXBlbmRlbnRUeXBlRGVjbGFyYXRpb24gICAgICAgICAgICAgOjo9ICAgdHlwZU5hbWU8Tk9fV0hJVEVTUEFDRT5wYXJlbnRoZXNpc2VkVHlwZU5hbWUgO1xuICAgXG4gICAgIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uICAgICAgICAgICAgICA6Oj0gICBtZXRhdmFyaWFibGVOYW1lPE5PX1dISVRFU1BBQ0U+cGFyZW50aGVzaXNlZFR5cGVOYW1lPyA7XG5cbiAgIFxuICAgICAgICBcbiAgICAgcHJlbWlzZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIFwiUHJlbWlzZVwiIDxFTkRfT0ZfTElORT4gdW5qdXN0aWZpZWRNZXRhc3RhdGVtZW50IDtcblxuICAgICBwcmVtaXNlcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCJQcmVtaXNlc1wiIDxFTkRfT0ZfTElORT4gdW5qdXN0aWZpZWRNZXRhc3RhdGVtZW50IHVuanVzdGlmaWVkTWV0YXN0YXRlbWVudCsgO1xuXG4gICAgIGNvbmNsdXNpb24gICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIkNvbmNsdXNpb25cIiA8RU5EX09GX0xJTkU+IHVuanVzdGlmaWVkT3JKdXN0aWZpZWRNZXRhc3RhdGVtZW50IDtcblxuICAgICBcbiAgICAgXG4gICAgIG1ldGFQcm9vZiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIlByb29mXCIgPEVORF9PRl9MSU5FPiBcbiAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhc3RhdGVtZW50RGVmaW5pdGlvbipcbiAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhUHJvb2ZEZXJpdmF0aW9uPyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5qdXN0aWZpZWRPckp1c3RpZmllZE1ldGFzdGF0ZW1lbnQgO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgIG1ldGFzdGF0ZW1lbnREZWZpbml0aW9uICAgICAgICAgICAgICA6Oj0gICBcImxldFwiIG1ldGFzdGF0ZW1lbnQgPEVORF9PRl9MSU5FPiA7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgIG1ldGFQcm9vZkRlcml2YXRpb24gICAgICAgICAgICAgICAgICA6Oj0gICAoIHN1YnJ1bGUgfCB1bmp1c3RpZmllZE9ySnVzdGlmaWVkTWV0YXN0YXRlbWVudCApKyAgXCJUaGVyZWZvcmVcIiA8RU5EX09GX0xJTkU+IDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgIFxuICAgICBzdWJydWxlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCJTdXBwb3NlXCIgPEVORF9PRl9MSU5FPiB1bmp1c3RpZmllZE1ldGFzdGF0ZW1lbnQrIFxuICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggXCJUaGVuXCIgPEVORF9PRl9MSU5FPiAoIHN1YnJ1bGUgfCB1bmp1c3RpZmllZE9ySnVzdGlmaWVkTWV0YXN0YXRlbWVudCApKyApPyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJIZW5jZVwiIDxFTkRfT0ZfTElORT4gdW5qdXN0aWZpZWRPckp1c3RpZmllZE1ldGFzdGF0ZW1lbnQgO1xuXG5cblxuICAgICBwcm9vZiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCJQcm9vZlwiIDxFTkRfT0ZfTElORT4gXG4gICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVtZW50RGVmaW5pdGlvbipcbiAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9vZkRlcml2YXRpb24/IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmp1c3RpZmllZE9ySnVzdGlmaWVkU3RhdGVtZW50IDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICBzdGF0ZW1lbnREZWZpbml0aW9uICAgICAgICAgICAgICAgICAgOjo9ICAgXCJsZXRcIiBzdGF0ZW1lbnQgPEVORF9PRl9MSU5FPiA7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgIHByb29mRGVyaXZhdGlvbiAgICAgICAgICAgICAgICAgICAgICA6Oj0gICAoIHN1YmxlbW1hIHwgdW5qdXN0aWZpZWRPckp1c3RpZmllZFN0YXRlbWVudCApKyBcIlRoZXJlZm9yZVwiIDxFTkRfT0ZfTElORT4gO1xuXG4gICAgIHN1YmxlbW1hICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIlN1cHBvc2VcIiA8RU5EX09GX0xJTkU+IHVuanVzdGlmaWVkU3RhdGVtZW50KyBcbiAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIFwiVGhlblwiIDxFTkRfT0ZfTElORT4gKCBzdWJsZW1tYSB8IHVuanVzdGlmaWVkT3JKdXN0aWZpZWRTdGF0ZW1lbnQgKSsgKT8gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiSGVuY2VcIiA8RU5EX09GX0xJTkU+IHVuanVzdGlmaWVkT3JKdXN0aWZpZWRTdGF0ZW1lbnQgO1xuXG5cblxuICAgICBpbmRpY2F0aXZlQ29uZGl0aW9uYWwgICAgICAgICAgICAgICAgOjo9ICAgXCJTdXBwb3NlXCIgPEVORF9PRl9MSU5FPiB1bmp1c3RpZmllZFN0YXRlbWVudCsgXG4gICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJIZW5jZVwiIDxFTkRfT0ZfTElORT4gdW5qdXN0aWZpZWRPckp1c3RpZmllZFN0YXRlbWVudCA7XG5cblxuXG4gICAgIHVuanVzdGlmaWVkT3JKdXN0aWZpZWRNZXRhc3RhdGVtZW50ICA6Oj0gICB1bmp1c3RpZmllZE1ldGFzdGF0ZW1lbnQgfCBqdXN0aWZpZWRNZXRhc3RhdGVtZW50IDtcbiAgICAgXG4gICAgIHVuanVzdGlmaWVkTWV0YXN0YXRlbWVudCAgICAgICAgICAgICA6Oj0gICBtZXRhc3RhdGVtZW50IDxFTkRfT0ZfTElORT4gO1xuICAgICBcbiAgICAganVzdGlmaWVkTWV0YXN0YXRlbWVudCAgICAgICAgICAgICAgIDo6PSAgIG1ldGFzdGF0ZW1lbnQgXCJieVwiIHJlZmVyZW5jZSA8RU5EX09GX0xJTkU+IDtcblxuXG5cbiAgICAgdW5qdXN0aWZpZWRPckp1c3RpZmllZFN0YXRlbWVudCAgICAgIDo6PSAgIHVuanVzdGlmaWVkU3RhdGVtZW50IHwganVzdGlmaWVkU3RhdGVtZW50IDtcblxuICAgICB1bmp1c3RpZmllZFN0YXRlbWVudCAgICAgICAgICAgICAgICAgOjo9ICAgc3RhdGVtZW50IDxFTkRfT0ZfTElORT4gO1xuXG4gICAgIGp1c3RpZmllZFN0YXRlbWVudCAgICAgICAgICAgICAgICAgICA6Oj0gICBzdGF0ZW1lbnQgKCBcImJ5XCIgfCBcImZyb21cIiApIHJlZmVyZW5jZSA8RU5EX09GX0xJTkU+IDtcblxuXG5cbiAgICAgbWV0YXZhcmlhYmxlICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIG1ldGF2YXJpYWJsZU5hbWU8Tk9fV0hJVEVTUEFDRT5wYXJlbnRoZXNpc2VkVGVybT8gO1xuXG4gICAgIHJlZmVyZW5jZSAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICByZWZlcmVuY2VOYW1lPE5PX1dISVRFU1BBQ0U+cGFyZW50aGVzaXNlZFRlcm0/IDtcblxuICAgICBjb250ZXh0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgY29udGV4dE5hbWU8Tk9fV0hJVEVTUEFDRT5wYXJlbnRoZXNpc2VkVGVybT8gO1xuXG4gICAgIGxhYmVsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBsYWJlbE5hbWU8Tk9fV0hJVEVTUEFDRT5wYXJlbnRoZXNpc2VkVGVybT8gO1xuXG5cblxuICAgICBwYXJlbnRoZXNpc2VkVHlwZU5hbWVzICAgICAgICAgICAgICAgOjo9ICAgXCIoXCI8Tk9fV0hJVEVTUEFDRT50eXBlTmFtZXM8Tk9fV0hJVEVTUEFDRT5cIilcIiA7XG5cbiAgICAgcGFyZW50aGVzaXNlZExhYmVscyAgICAgICAgICAgICAgICAgIDo6PSAgIFwiKFwiPE5PX1dISVRFU1BBQ0U+bGFiZWxzPE5PX1dISVRFU1BBQ0U+XCIpXCIgOyAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgcGFyZW50aGVzaXNlZFRlcm1zICAgICAgICAgICAgICAgICAgIDo6PSAgIFwiKFwiPE5PX1dISVRFU1BBQ0U+dGVybXM8Tk9fV0hJVEVTUEFDRT5cIilcIiA7ICAgXG5cblxuXG4gICAgIHBhcmVudGhlc2lzZWRUeXBlTmFtZSAgICAgICAgICAgICAgICA6Oj0gICBcIihcIjxOT19XSElURVNQQUNFPnR5cGVOYW1lPE5PX1dISVRFU1BBQ0U+XCIpXCIgO1xuXG4gICAgIHBhcmVudGhlc2lzZWRUZXJtICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIihcIjxOT19XSElURVNQQUNFPnRlcm08Tk9fV0hJVEVTUEFDRT5cIilcIiA7ICAgXG5cbiAgICAgICAgIFxuICAgICBcbiAgICAgY29tcG91bmRUZXJtICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIGNvbnN0cnVjdG9yTmFtZTxOT19XSElURVNQQUNFPnBhcmVudGhlc2lzZWRUZXJtcz8gO1xuXG5cblxuICAgICB2YXJpYWJsZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgdmFyaWFibGVOYW1lIDtcblxuXG5cbiAgICAgdHlwZU5hbWVzICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHR5cGVOYW1lICggXCIsXCIgdHlwZU5hbWUgKSogO1xuXG4gICAgIGxhYmVscyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBsYWJlbCAoIFwiLFwiIGxhYmVsICkqIDtcblxuICAgICB0ZXJtcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgdGVybSAoIFwiLFwiIHRlcm0gKSogO1xuICAgICBcblxuXG4gICAgIHR5cGVOYW1lICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBuYW1lIDtcblxuICAgICBjb250ZXh0TmFtZSAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgbmFtZSA7XG5cbiAgICAgdmFyaWFibGVOYW1lICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIG5hbWUgO1xuXG4gICAgIGNvbnN0cnVjdG9yTmFtZSAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBuYW1lIDtcblxuICAgICBtZXRhdmFyaWFibGVOYW1lICAgICAgICAgICAgICAgICAgICAgOjo9ICAgbmFtZSA7XG5cbiAgICAgcmVmZXJlbmNlTmFtZSAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIG5hbWUgO1xuXG4gICAgIGNvbnRleHROYW1lICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBuYW1lIDtcblxuICAgICBsYWJlbE5hbWUgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgbmFtZSA7XG5cbiAgICAgXG4gICBcbiAgICAgbmFtZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIFt1bmFzc2lnbmVkXSA7XG4gICAgICAgXG5cbiAgICAgICBcbmA7XG5cbm1vZHVsZS5leHBvcnRzID0gYm5mO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBtZXRhc3RhdGVtZW50ID0gYFxuXG4gICAgIHByb29mQXNzZXJ0aW9uICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBjb250ZXh0IFwi4oqiXCIganVkZ2VtZW50IDtcbiAgICAgXG4gICAgIGNvbnRleHREZWZpbml0aW9uICAgICAgICAgICAgICAgICAgICA6Oj0gICBjb250ZXh0IFwiPVwiICgganVkZ2VtZW50IHwgY29udGV4dCApICggXCIsXCIgKCBqdWRnZW1lbnQgfCBjb250ZXh0ICkgKSogO1xuXG4gICAgIGp1ZGdlbWVudCAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBsYWJlbCBcIjo6XCIgbWV0YXN0YXRlbWVudCA7XG5cbiAgICAgc3VicHJvb2YgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHN1cHBvc2l0aW9uIFwiLi4uXCIgbWV0YXN0YXRlbWVudCA7XG5cbiAgICAgc3VwcG9zaXRpb24gICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIFwiW1wiIG1ldGFzdGF0ZW1lbnQgXCJdXCIgO1xuXG5cblxuICAgICBtZXRhc3RhdGVtZW50ICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgcHJvb2ZBc3NlcnRpb25cbiAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBjb250ZXh0RGVmaW5pdGlvblxuICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIHN1YnByb29mXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgbWV0YXZhcmlhYmxlXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuICAgICAgXG5gO1xuXG5jb25zdCBzdGF0ZW1lbnQgPSBgXG5cbiAgICAgdHlwZUFzc2VydGlvbiAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIGV4cHJlc3Npb24gXCI6XCIgdHlwZU5hbWUgO1xuXG4gICAgIGVxdWFsaXR5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBleHByZXNzaW9uIFwiPVwiIGV4cHJlc3Npb24gO1xuXG4gICAgIGV4cHJlc3Npb24gICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICB0ZXJtIDtcblxuXG5cbiAgICAgc3RhdGVtZW50ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHR5cGVBc3NlcnRpb24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgZXF1YWxpdHkgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgbWV0YXN0YXRlbWVudFxuICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5gO1xuXG5jb25zdCB0ZXJtID0gYFxuXG4gICAgIHRlcm0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBjb21wb3VuZFRlcm0gXG4gICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgdmFyaWFibGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuYDtcblxuY29uc3QgZGVmYXVsdEN1c3RvbUdyYW1tYXJCTkZNYXAgPSB7XG4gIG1ldGFzdGF0ZW1lbnQ6IG1ldGFzdGF0ZW1lbnQsXG4gIHN0YXRlbWVudDogc3RhdGVtZW50LFxuICB0ZXJtOiB0ZXJtXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmF1bHRDdXN0b21HcmFtbWFyQk5GTWFwO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFcnJvck5vZGUgPSByZXF1aXJlKCcuLi9jb21tb24vbm9kZS90ZXJtaW5hbC9lcnJvcicpLFxuICAgICAgVHJhbnNwYXJlbnROb2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwvdHJhbnNwYXJlbnROb2RlJyksXG4gICAgICBEaXNjYXJkT2RkQ2hpbGROb2RlcyA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsL2Rpc2NhcmRPZGRDaGlsZE5vZGVzJyksXG4gICAgICBEaXNjYXJkU2Vjb25kQ2hpbGROb2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwvZGlzY2FyZFNlY29uZENoaWxkTm9kZScpLFxuICAgICAgRGlzY2FyZEZvdXJ0aFRoZW5TZWNvbmRDaGlsZE5vZGUgPSByZXF1aXJlKCcuLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC9kaXNjYXJkRm91cnRoVGhlblNlY29uZENoaWxkTm9kZScpLFxuICAgICAgRGlzY2FyZEZpZnRoVGhlblNlY29uZENoaWxkTm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsL2Rpc2NhcmRGaWZ0aFRoZW5TZWNvbmRDaGlsZE5vZGUnKSwgICAgXG4gICAgICBUcmFuc3BhcmVudFRoZW5LZWVwU2Vjb25kTm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsL3RyYW5zcGFyZW50VGhlbktlZXBTZWNvbmROb2RlJyk7XG5cbmNvbnN0IG1hcHBpbmdzID0ge1xuXG4gICd1bmp1c3RpZmllZE9ySnVzdGlmaWVkTWV0YXN0YXRlbWVudCc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgJ3VuanVzdGlmaWVkT3JKdXN0aWZpZWRTdGF0ZW1lbnQnOiBUcmFuc3BhcmVudE5vZGUsXG5cbiAgJ25hbWUnOiBUcmFuc3BhcmVudE5vZGUsXG5cbiAgJ3Byb29mJzogRGlzY2FyZFNlY29uZENoaWxkTm9kZSxcbiAgJ3ByZW1pc2UnOiBEaXNjYXJkU2Vjb25kQ2hpbGROb2RlLFxuICAncHJlbWlzZXMnOiBEaXNjYXJkU2Vjb25kQ2hpbGROb2RlLFxuICAnc3VibGVtbWEnOiBEaXNjYXJkU2Vjb25kQ2hpbGROb2RlLFxuICAndGhlcmVmb3JlJzogRGlzY2FyZFNlY29uZENoaWxkTm9kZSxcbiAgJ2NvbmNsdXNpb24nOiBEaXNjYXJkU2Vjb25kQ2hpbGROb2RlLFxuICAnbWV0YVByb29mJzogRGlzY2FyZFNlY29uZENoaWxkTm9kZSxcbiAgJ2p1c3RpZmllZFN0YXRlbWVudCc6IERpc2NhcmRTZWNvbmRDaGlsZE5vZGUsXG4gICdqdXN0aWZpZWRNZXRhc3RhdGVtZW50JzogRGlzY2FyZFNlY29uZENoaWxkTm9kZSxcblxuICAnaW1wb3J0JzogRGlzY2FyZEZvdXJ0aFRoZW5TZWNvbmRDaGlsZE5vZGUsXG5cbiAgJ2luZGljYXRpdmVDb25kaXRpb25hbCc6IERpc2NhcmRGaWZ0aFRoZW5TZWNvbmRDaGlsZE5vZGUsXG5cbiAgJ3R5cGVzRGVjbGFyYXRpb24nOiBEaXNjYXJkT2RkQ2hpbGROb2RlcyxcbiAgJ2NvbnRleHRzRGVjbGFyYXRpb24nOiBEaXNjYXJkT2RkQ2hpbGROb2RlcyxcbiAgJ3ZhcmlhYmxlc0RlY2xhcmF0aW9uJzogRGlzY2FyZE9kZENoaWxkTm9kZXMsXG4gICdjb25zdHJ1Y3RvcnNEZWNsYXJhdGlvbic6IERpc2NhcmRPZGRDaGlsZE5vZGVzLFxuICAnYWJicmV2aWF0aW9uc0RlY2xhcmF0aW9uJzogRGlzY2FyZE9kZENoaWxkTm9kZXMsXG4gICdkZXBlbmRlbnRUeXBlc0RlY2xhcmF0aW9uJzogRGlzY2FyZE9kZENoaWxkTm9kZXMsXG4gICdtZXRhdmFyaWFibGVzRGVjbGFyYXRpb24nOiBEaXNjYXJkT2RkQ2hpbGROb2RlcyxcblxuICAndHlwZU5hbWVzJzogRGlzY2FyZE9kZENoaWxkTm9kZXMsXG4gICdsYWJlbHMnOiBEaXNjYXJkT2RkQ2hpbGROb2RlcyxcbiAgJ3Rlcm1zJzogRGlzY2FyZE9kZENoaWxkTm9kZXMsXG4gIFxuICAncGFyZW50aGVzaXNlZFR5cGVOYW1lcyc6IFRyYW5zcGFyZW50VGhlbktlZXBTZWNvbmROb2RlLFxuICAncGFyZW50aGVzaXNlZExhYmVscyc6IFRyYW5zcGFyZW50VGhlbktlZXBTZWNvbmROb2RlLFxuICAncGFyZW50aGVzaXNlZFRlcm1zJzogVHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZE5vZGUsXG4gIFxuICAncGFyZW50aGVzaXNlZFR5cGVOYW1lJzogVHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZE5vZGUsXG4gICdwYXJlbnRoZXNpc2VkVGVybSc6IFRyYW5zcGFyZW50VGhlbktlZXBTZWNvbmROb2RlLFxuXG4gICdlcnJvcic6IEVycm9yTm9kZVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcHBpbmdzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgYm5mID0gcmVxdWlyZSgnLi9ibmYnKSxcbiAgICAgIG1hcHBpbmdzID0gcmVxdWlyZSgnLi9tYXBwaW5ncycpLFxuICAgICAgYXJyYXlVdGlsID0gcmVxdWlyZSgnLi4vdXRpbC9hcnJheScpLFxuICAgICAgQk5GUGFyc2VyID0gcmVxdWlyZSgnLi4vYm5mL3BhcnNlcicpLFxuICAgICAgQ29tbW9uUGFyc2VyID0gcmVxdWlyZSgnLi4vY29tbW9uL3BhcnNlcicpLFxuICAgICAgZGVmYXVsdEN1c3RvbUdyYW1tYXJCTkZNYXAgPSByZXF1aXJlKCcuL2RlZmF1bHRDdXN0b21HcmFtbWFyL2JuZk1hcCcpO1xuXG5jb25zdCB7IEJORkxleGVyIH0gPSBsZXhlcnM7XG5cbmNvbnN0IGJuZkxleGVyID0gQk5GTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgIGJuZlBhcnNlciA9IEJORlBhcnNlci5mcm9tTm90aGluZygpLFxuICAgICAgZGVmYXVsdEN1c3RvbUdyYW1tYXJSdWxlcyA9IHJ1bGVzRnJvbUJORk1hcChkZWZhdWx0Q3VzdG9tR3JhbW1hckJORk1hcCksXG4gICAgICBkZWZhdWx0QWRkaXRpb25hbE1hcHBpbmdzID0ge307XG5cbmNsYXNzIEZsb3JlbmNlUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGZyb21DdXN0b21HcmFtbWFyc1J1bGVzQW5kQWRkaXRpb25hbE1hcHBpbmdzKGN1c3RvbUdyYW1tYXJzUnVsZXMsIGFkZGl0aW9uYWxNYXBwaW5ncykge1xuICAgIGNvbnN0IGZsb3JlbmNlUGFyc2VyID0gRmxvcmVuY2VQYXJzZXIuZnJvbUJORkFuZE1hcHBpbmdzKGJuZiwgbWFwcGluZ3MsIGN1c3RvbUdyYW1tYXJzUnVsZXMsIGFkZGl0aW9uYWxNYXBwaW5ncyk7XG4gIFxuICAgIHJldHVybiBmbG9yZW5jZVBhcnNlcjtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21CTkZBbmRNYXBwaW5ncyhibmYsIG1hcHBpbmdzLCBjdXN0b21HcmFtbWFyc1J1bGVzID0gZGVmYXVsdEN1c3RvbUdyYW1tYXJSdWxlcywgYWRkaXRpb25hbE1hcHBpbmdzID0gZGVmYXVsdEFkZGl0aW9uYWxNYXBwaW5ncykge1xuICAgIG1hcHBpbmdzID0gT2JqZWN0LmFzc2lnbihtYXBwaW5ncywgYWRkaXRpb25hbE1hcHBpbmdzKTsgLy8vXG5cbiAgICBjb25zdCBsaW5lcyA9IGJuZkxleGVyLmxpbmVzRnJvbUJORihibmYpLFxuICAgICAgICAgIG5vZGUgPSBibmZQYXJzZXIubm9kZUZyb21MaW5lcyhsaW5lcyksXG4gICAgICAgICAgcnVsZXMgPSBCTkZQYXJzZXIuZ2VuZXJhdGVSdWxlcyhub2RlLCBtYXBwaW5ncyk7XG5cbiAgICBhcnJheVV0aWwucHVzaChydWxlcywgY3VzdG9tR3JhbW1hcnNSdWxlcyk7XG4gICAgXG4gICAgY29uc3QgZmxvcmVuY2VQYXJzZXIgPSBuZXcgRmxvcmVuY2VQYXJzZXIocnVsZXMpO1xuXG4gICAgcmV0dXJuIGZsb3JlbmNlUGFyc2VyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VQYXJzZXI7XG5cbkZsb3JlbmNlUGFyc2VyLm1hcHBpbmdzID0gbWFwcGluZ3M7XG5cbkZsb3JlbmNlUGFyc2VyLmJuZiA9IGJuZjtcblxuRmxvcmVuY2VQYXJzZXIuZGVmYXVsdEN1c3RvbUdyYW1tYXJCTkZNYXAgPSBkZWZhdWx0Q3VzdG9tR3JhbW1hckJORk1hcDtcblxuZnVuY3Rpb24gcnVsZXNGcm9tQk5GTWFwKGJuZk1hcCkge1xuICBjb25zdCBydWxlTmFtZXMgPSBPYmplY3Qua2V5cyhibmZNYXApLFxuICAgICAgICBibmYgPSBydWxlTmFtZXMucmVkdWNlKGZ1bmN0aW9uKGJuZiwgcnVsZU5hbWUpIHtcbiAgICAgICAgICBjb25zdCBydWxlQk5GID0gYm5mTWFwW3J1bGVOYW1lXTtcbiAgXG4gICAgICAgICAgYm5mID0gYCR7Ym5mfSR7cnVsZUJORn1gO1xuICBcbiAgICAgICAgICByZXR1cm4gYm5mO1xuICAgICAgICB9LCAnJyksXG4gICAgICAgIGxpbmVzID0gYm5mTGV4ZXIubGluZXNGcm9tQk5GKGJuZiksXG4gICAgICAgIG5vZGUgPSBibmZQYXJzZXIubm9kZUZyb21MaW5lcyhsaW5lcyksXG4gICAgICAgIHJ1bGVzID0gQk5GUGFyc2VyLmdlbmVyYXRlUnVsZXMobm9kZSk7XG5cbiAgcmV0dXJuIHJ1bGVzO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBhcnJheVV0aWwge1xuICBzdGF0aWMgZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG5cbiAgc3RhdGljIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cblxuICBzdGF0aWMgbGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07IH1cblxuICBzdGF0aWMgbGFzdEJ1dE9uZShhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMl07IH1cblxuICBzdGF0aWMga2VlcEZpcnN0KGFycmF5KSB7IHJldHVybiBrZWVwTnRoKGFycmF5LCAwKTsgfVxuXG4gIHN0YXRpYyBrZWVwU2Vjb25kKGFycmF5KSB7IHJldHVybiBrZWVwTnRoKGFycmF5LCAxKTsgfVxuXG4gIHN0YXRpYyBrZWVwTGFzdChhcnJheSkgeyByZXR1cm4ga2VlcE50aChhcnJheSwgLTEpOyB9XG5cbiAgc3RhdGljIGRpc2NhcmRGaXJzdChhcnJheSkgeyByZXR1cm4gZGlzY2FyZE50aChhcnJheSwgMCk7IH1cblxuICBzdGF0aWMgZGlzY2FyZFNlY29uZChhcnJheSkgeyByZXR1cm4gZGlzY2FyZE50aChhcnJheSwgMSk7IH1cblxuICBzdGF0aWMgZGlzY2FyZExhc3QoYXJyYXkpIHsgcmV0dXJuIGRpc2NhcmROdGgoYXJyYXksIC0xKTsgfVxuICBcbiAgc3RhdGljIGRpc2NhcmRMYXN0VGhlbkZpcnN0KGFycmF5KSB7IHJldHVybiBkaXNjYXJkTnRoKGRpc2NhcmROdGgoYXJyYXksIC0xKSwgMCk7IH1cblxuICBzdGF0aWMgZGlzY2FyZEZvdXJ0aFRoZW5TZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGRpc2NhcmROdGgoZGlzY2FyZE50aChhcnJheSwgMyksIDEpOyB9XG5cbiAgc3RhdGljIGRpc2NhcmRGaWZ0aFRoZW5TZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGRpc2NhcmROdGgoZGlzY2FyZE50aChhcnJheSwgNCksIDEpOyB9XG5cbiAgc3RhdGljIGRpc2NhcmRPZGQoYXJyYXkpIHsgcmV0dXJuIGFycmF5LmZpbHRlcihmdW5jdGlvbihlbnRyeSwgaW5kZXgpIHsgcmV0dXJuIGlzRXZlbihpbmRleCk7IH0pOyB9XG5cbiAgc3RhdGljIHB1c2goYXJyYXkxLCBhcnJheTIpIHsgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXJyYXkxLCBhcnJheTIpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlVdGlsO1xuXG5mdW5jdGlvbiBrZWVwTnRoKGFycmF5LCBuKSB7XG4gIGFycmF5ID0gYXJyYXkuc2xpY2UoKTtcblxuICByZXR1cm4gYXJyYXkuc3BsaWNlKG4sIDEpO1xufVxuXG5mdW5jdGlvbiBkaXNjYXJkTnRoKGFycmF5LCBuKSB7XG4gIGFycmF5ID0gYXJyYXkuc2xpY2UoKTtcblxuICBhcnJheS5zcGxpY2UobiwgMSk7XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5mdW5jdGlvbiBpc0V2ZW4oaW5kZXgpIHtcbiAgY29uc3QgZXZlbiA9IChNYXRoLmZsb29yKGluZGV4LzIpID09PSBpbmRleC8yKTtcblxuICByZXR1cm4gZXZlbjtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwvYXJyYXknKTtcblxuY29uc3QgeyBCTkZMZXhlciB9ID0gbGV4ZXJzLFxuICAgICAgeyBzcGVjaWFsU3ltYm9scyB9ID0gQk5GTGV4ZXIsXG4gICAgICB7IE5PX1dISVRFU1BBQ0UgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5jbGFzcyBibmZVdGlsIHtcbiAgc3RhdGljIGlzTm9kZU5vV2hpdGVzcGFjZU5vZGUobm9kZSkge1xuICAgIGxldCBub2RlTm9XaGl0ZXNwYWNlTm9kZSA9IGZhbHNlO1xuICBcbiAgICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsKCk7XG4gIFxuICAgIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlLFxuICAgICAgICAgICAgdGVybWluYWxOb2RlQ29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG4gIFxuICAgICAgbm9kZU5vV2hpdGVzcGFjZU5vZGUgPSAodGVybWluYWxOb2RlQ29udGVudCA9PT0gTk9fV0hJVEVTUEFDRSk7XG4gICAgfVxuICBcbiAgICByZXR1cm4gbm9kZU5vV2hpdGVzcGFjZU5vZGU7XG4gIH1cblxuICBzdGF0aWMgaXNOb2RlQ2hvaWNlTm9kZShub2RlKSB7XG4gICAgbGV0IG5vZGVOb0Nob2ljZU5vZGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWwoKTtcblxuICAgIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlLFxuICAgICAgICAgICAgdGVybWluYWxOb2RlQ29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICAgIG5vZGVOb0Nob2ljZU5vZGUgPSAodGVybWluYWxOb2RlQ29udGVudCA9PT0gJ3wnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZU5vQ2hvaWNlTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBpc05vZGVRdWFudGlmaWVyc05vZGUobm9kZSkge1xuICAgIGxldCBub2RlUXVhbnRpZmllcnNOb2RlID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsKCksXG4gICAgICAgICAgbm9kZU5vblRlcm1pbmFsTm9kZSA9ICFub2RlVGVybWluYWxOb2RlO1xuXG4gICAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGFycmF5VXRpbC5maXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICAgIGZpcnN0Q2hpbGROb2RlVGVybWluYWxOb2RlID0gZmlyc3RDaGlsZE5vZGUuaXNUZXJtaW5hbCgpO1xuXG4gICAgICBpZiAoZmlyc3RDaGlsZE5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gZmlyc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgdGVybWluYWxOb2RlQ29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICAgICAgbm9kZVF1YW50aWZpZXJzTm9kZSA9ICh0ZXJtaW5hbE5vZGVDb250ZW50ID09PSAnPycpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGVybWluYWxOb2RlQ29udGVudCA9PT0gJyonKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRlcm1pbmFsTm9kZUNvbnRlbnQgPT09ICcrJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVRdWFudGlmaWVyc05vZGU7XG4gIH1cblxuICBzdGF0aWMgcXVhbnRpZmllcnNGcm9tUXVhbnRpZmllcnNOb2RlKHF1YW50aWZpZXJzTm9kZSwgcXVhbnRpZmllcnMgPSBbXSkge1xuICAgIGNvbnN0IHF1YW50aWZpZXIgPSBxdWFudGlmaWVyRnJvbVF1YW50aWZpZXJzTm9kZShxdWFudGlmaWVyc05vZGUpO1xuXG4gICAgcXVhbnRpZmllcnMucHVzaChxdWFudGlmaWVyKTtcblxuICAgIGNvbnN0IHF1YW50aWZpZXJzTm9kZUNoaWxkTm9kZXMgPSBxdWFudGlmaWVyc05vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIHF1YW50aWZpZXJzTm9kZUNoaWxkTm9kZXNMZW5ndGggPSAgcXVhbnRpZmllcnNOb2RlQ2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAocXVhbnRpZmllcnNOb2RlQ2hpbGROb2Rlc0xlbmd0aCA9PT0gMikge1xuICAgICAgY29uc3Qgc2Vjb25kUXVhbnRpZmllcnNOb2RlQ2hpbGROb2RlID0gYXJyYXlVdGlsLnNlY29uZChxdWFudGlmaWVyc05vZGVDaGlsZE5vZGVzKTtcblxuICAgICAgcXVhbnRpZmllcnNOb2RlID0gc2Vjb25kUXVhbnRpZmllcnNOb2RlQ2hpbGROb2RlOyAvLy9cblxuICAgICAgcXVhbnRpZmllcnMgPSBibmZVdGlsLnF1YW50aWZpZXJzRnJvbVF1YW50aWZpZXJzTm9kZShxdWFudGlmaWVyc05vZGUsIHF1YW50aWZpZXJzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcXVhbnRpZmllcnM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBibmZVdGlsO1xuXG5mdW5jdGlvbiBxdWFudGlmaWVyRnJvbVF1YW50aWZpZXJzTm9kZShxdWFudGlmaWVyc05vZGUpIHtcbiAgY29uc3QgcXVhbnRpZmllcnNOb2RlQ2hpbGROb2RlcyA9IHF1YW50aWZpZXJzTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIGZpcnN0UXVhbnRpZmllcnNOb2RlQ2hpbGROb2RlID0gYXJyYXlVdGlsLmZpcnN0KHF1YW50aWZpZXJzTm9kZUNoaWxkTm9kZXMpLFxuICAgICAgICBmaXJzdFF1YW50aWZpZXJzTm9kZUNoaWxkTm9kZUNvbnRlbnQgPSBmaXJzdFF1YW50aWZpZXJzTm9kZUNoaWxkTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIHF1YW50aWZpZXIgPSBmaXJzdFF1YW50aWZpZXJzTm9kZUNoaWxkTm9kZUNvbnRlbnQ7XG5cbiAgcmV0dXJuIHF1YW50aWZpZXI7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIHBhcnNlclV0aWwge1xuICBzdGF0aWMgdG9rZW5zRnJvbUxpbmVzKGxpbmVzKSB7XG4gICAgY29uc3QgdG9rZW5zID0gbGluZXMucmVkdWNlKGZ1bmN0aW9uKHRva2VucywgbGluZSkge1xuICAgICAgY29uc3QgbGluZVRva2VucyA9IGxpbmUuZ2V0VG9rZW5zKCk7XG5cbiAgICAgIHRva2VucyA9IHRva2Vucy5jb25jYXQobGluZVRva2Vucyk7XG5cbiAgICAgIHJldHVybiB0b2tlbnM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIHN0YXRpYyBmaW5kUnVsZShydWxlTmFtZSwgcnVsZXMpIHtcbiAgICBsZXQgZm91bmRSdWxlID0gbnVsbDtcblxuICAgIHJ1bGVzLnNvbWUoZnVuY3Rpb24ocnVsZSkge1xuICAgICAgY29uc3QgcnVsZUZvdW5kID0gcnVsZS5pc0ZvdW5kQnlSdWxlTmFtZShydWxlTmFtZSk7XG4gICAgICBcbiAgICAgIGlmIChydWxlRm91bmQpIHtcbiAgICAgICAgZm91bmRSdWxlID0gcnVsZTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHJ1bGUgPSBmb3VuZFJ1bGU7IC8vL1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwYXJzZXJVdGlsO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgb3B0aW9uczogcmVxdWlyZSgnLi9saWIvb3B0aW9ucycpLFxuICBTaXplYWJsZUVsZW1lbnQ6IHJlcXVpcmUoJy4vbGliL3NpemVhYmxlRWxlbWVudCcpLFxuICBWZXJ0aWNhbFNwbGl0dGVyOiByZXF1aXJlKCcuL2xpYi9zcGxpdHRlci92ZXJ0aWNhbCcpLFxuICBIb3Jpem9udGFsU3BsaXR0ZXI6IHJlcXVpcmUoJy4vbGliL3NwbGl0dGVyL2hvcml6b250YWwnKVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKTtcblxuY29uc3QgeyBCb2R5IH0gPSBlYXN5O1xuXG5jb25zdCBib2R5ID0gbmV3IEJvZHkoKTtcblxubGV0IHByZXZpb3VzQ3Vyc29yOyAgLy8vXG5cbmNsYXNzIGN1cnNvciB7XG4gIHN0YXRpYyBjb2x1bW5SZXNpemUoKSB7XG4gICAgY29uc3QgY3VycmVudEN1cnNvciA9IHRoaXMuZ2V0Q3VycmVudEN1cnNvcigpO1xuXG4gICAgaWYgKGN1cnJlbnRDdXJzb3IgIT09ICdjb2wtcmVzaXplJykge1xuICAgICAgcHJldmlvdXNDdXJzb3IgPSBjdXJyZW50Q3Vyc29yO1xuXG4gICAgICB0aGlzLnNldEN1cnNvcignY29sLXJlc2l6ZScpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyByb3dSZXNpemUoKSB7XG4gICAgY29uc3QgY3VycmVudEN1cnNvciA9IHRoaXMuZ2V0Q3VycmVudEN1cnNvcigpO1xuXG4gICAgaWYgKGN1cnJlbnRDdXJzb3IgIT09ICdyb3ctcmVzaXplJykge1xuICAgICAgcHJldmlvdXNDdXJzb3IgPSBjdXJyZW50Q3Vyc29yO1xuXG4gICAgICB0aGlzLnNldEN1cnNvcigncm93LXJlc2l6ZScpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyByZXNldCgpIHtcbiAgICB0aGlzLnNldEN1cnNvcihwcmV2aW91c0N1cnNvcik7IC8vL1xuICB9XG5cbiAgc3RhdGljIGdldEN1cnJlbnRDdXJzb3IoKSB7XG4gICAgY29uc3QgY3VycmVudEN1cnNvciA9IGJvZHkuY3NzKCdjdXJzb3InKTsgIC8vL1xuXG4gICAgcmV0dXJuIGN1cnJlbnRDdXJzb3IgfHwgJ2F1dG8nOyAvLy9cbiAgfVxuXG4gIHN0YXRpYyBzZXRDdXJzb3IoY3Vyc29yKSB7XG4gICAgY29uc3QgY3NzID0ge1xuICAgICAgY3Vyc29yOiBjdXJzb3JcbiAgICB9O1xuXG4gICAgYm9keS5jc3MoY3NzKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGN1cnNvcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgRVNDQVBFX0tFWV9TVE9QU19EUkFHR0lORzogJ0VTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkcnXG4gICAgICB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG9wdGlvbnM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5Jyk7XG5cbmNvbnN0IHsgRWxlbWVudCB9ID0gZWFzeTtcblxuY2xhc3MgU2l6ZWFibGVFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIHNldFdpZHRoKHdpZHRoKSB7XG4gICAgY29uc3Qgd2lkdGhOdW1iZXIgPSAodHlwZW9mIHdpZHRoID09PSAnbnVtYmVyJyk7XG5cbiAgICBpZiAod2lkdGhOdW1iZXIpIHtcbiAgICAgIGNvbnN0IG1pbmltdW1XaWR0aCA9IHRoaXMuZ2V0TWluaW11bVdpZHRoKCksXG4gICAgICAgICAgICBtYXhpbXVtV2lkdGggPSB0aGlzLmdldE1heGltdW1XaWR0aCgpO1xuXG4gICAgICBpZiAobWluaW11bVdpZHRoICE9PSBudWxsKSB7XG4gICAgICAgIHdpZHRoID0gTWF0aC5tYXgod2lkdGgsIG1pbmltdW1XaWR0aCk7XG4gICAgICB9XG4gICAgICBpZiAobWF4aW11bVdpZHRoICE9PSBudWxsKSB7XG4gICAgICAgIHdpZHRoID0gTWF0aC5taW4od2lkdGgsIG1heGltdW1XaWR0aCk7XG4gICAgICB9XG5cbiAgICAgIHdpZHRoID0gYCR7d2lkdGh9cHhgOyAvLy9cbiAgICB9XG5cbiAgICBzdXBlci5zZXRXaWR0aCh3aWR0aCk7XG4gIH1cblxuICBzZXRIZWlnaHQoaGVpZ2h0KSB7XG4gICAgY29uc3QgaGVpZ2h0TnVtYmVyID0gKHR5cGVvZiBoZWlnaHQgPT09ICdudW1iZXInKTtcblxuICAgIGlmIChoZWlnaHROdW1iZXIpIHtcbiAgICAgIGNvbnN0IG1pbmltdW1IZWlnaHQgPSB0aGlzLmdldE1pbmltdW1IZWlnaHQoKSxcbiAgICAgICAgICAgIG1heGltdW1IZWlnaHQgPSB0aGlzLmdldE1heGltdW1IZWlnaHQoKTtcblxuICAgICAgaWYgKG1pbmltdW1IZWlnaHQgIT09IG51bGwpIHtcbiAgICAgICAgaGVpZ2h0ID0gTWF0aC5tYXgoaGVpZ2h0LCBtaW5pbXVtSGVpZ2h0KTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXhpbXVtSGVpZ2h0ICE9PSBudWxsKSB7XG4gICAgICAgIGhlaWdodCA9IE1hdGgubWluKGhlaWdodCwgbWF4aW11bUhlaWdodCk7XG4gICAgICB9XG5cbiAgICAgIGhlaWdodCA9IGAke2hlaWdodH1weGA7IC8vL1xuICAgIH1cblxuICAgIHN1cGVyLnNldEhlaWdodChoZWlnaHQpO1xuICB9XG5cbiAgZ2V0TWluaW11bVdpZHRoKCkgeyBcbiAgICBjb25zdCBtaW5XaWR0aCA9IHRoaXMuY3NzKCdtaW4td2lkdGgnKSxcbiAgICAgICAgICBtaW5pbXVtV2lkdGggPSBpblBpeGVscyhtaW5XaWR0aCk7XG5cbiAgICByZXR1cm4gbWluaW11bVdpZHRoO1xuICB9XG5cbiAgZ2V0TWluaW11bUhlaWdodCgpIHtcbiAgICBjb25zdCBtaW5IZWlnaHQgPSB0aGlzLmNzcygnbWluLWhlaWdodCcpLFxuICAgICAgICAgIG1pbmltdW1IZWlnaHQgPSBpblBpeGVscyhtaW5IZWlnaHQpO1xuXG4gICAgcmV0dXJuIG1pbmltdW1IZWlnaHQ7XG4gIH1cblxuICBnZXRNYXhpbXVtV2lkdGgoKSB7XG4gICAgY29uc3QgbWF4V2lkdGggPSB0aGlzLmNzcygnbWF4LXdpZHRoJyksXG4gICAgICAgICAgbWF4aW11bVdpZHRoID0gaW5QaXhlbHMobWF4V2lkdGgpO1xuXG4gICAgcmV0dXJuIG1heGltdW1XaWR0aDtcbiAgfVxuXG4gIGdldE1heGltdW1IZWlnaHQoKSB7XG4gICAgY29uc3QgbWF4SGVpZ2h0ID0gdGhpcy5jc3MoJ21heC1oZWlnaHQnKSxcbiAgICAgICAgICBtYXhpbXVtSGVpZ2h0ID0gaW5QaXhlbHMobWF4SGVpZ2h0KTtcblxuICAgIHJldHVybiBtYXhpbXVtSGVpZ2h0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICByZXR1cm4gRWxlbWVudC5mcm9tUHJvcGVydGllcyhTaXplYWJsZUVsZW1lbnQsIHByb3BlcnRpZXMpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oU2l6ZWFibGVFbGVtZW50LCB7XG4gIHRhZ05hbWU6ICdkaXYnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ3NpemVhYmxlJ1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaXplYWJsZUVsZW1lbnQ7XG5cbmZ1bmN0aW9uIGluUGl4ZWxzKHF1YW50aXR5KSB7XG4gIGxldCBwaXhlbHMgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBxdWFudGl0eS5tYXRjaCgvKFswLTldKilweCQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgcGl4ZWxzID0gc2Vjb25kTWF0Y2g7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBwaXhlbHM7XG59XG5cbmZ1bmN0aW9uIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKTtcblxuY29uc3Qgb3B0aW9ucyA9IHJlcXVpcmUoJy4vb3B0aW9ucycpO1xuXG5jb25zdCBFU0NBUEVfS0VZQ09ERSA9IDI3O1xuXG5jb25zdCB7IEVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkcgfSA9IG9wdGlvbnMsXG4gICAgICB7IHdpbmRvdywgRWxlbWVudCB9ID0gZWFzeTtcblxuY2xhc3MgU3BsaXR0ZXIgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGJlZm9yZVNpemVhYmxlRWxlbWVudCwgYWZ0ZXJTaXplYWJsZUVsZW1lbnQsIGRyYWdIYW5kbGVyLCBvcHRpb25zKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgdGhpcy5iZWZvcmVTaXplYWJsZUVsZW1lbnQgPSBiZWZvcmVTaXplYWJsZUVsZW1lbnQ7XG4gICAgdGhpcy5hZnRlclNpemVhYmxlRWxlbWVudCA9IGFmdGVyU2l6ZWFibGVFbGVtZW50O1xuXG4gICAgaWYgKGRyYWdIYW5kbGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub25EcmFnKGRyYWdIYW5kbGVyKTsgXG4gICAgfVxuICAgIFxuICAgIGlmIChvcHRpb25zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgICB9XG4gIFxuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgXG4gICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuICBcbiAgICB3aW5kb3cub24oJ21vdXNldXAgYmx1cicsIHRoaXMubW91c2VVcC5iaW5kKHRoaXMpKTsgIC8vL1xuICAgXG4gICAgd2luZG93Lm9uTW91c2VNb3ZlKHRoaXMubW91c2VNb3ZlLmJpbmQodGhpcykpO1xuICBcbiAgICB0aGlzLm9uTW91c2VEb3duKHRoaXMubW91c2VEb3duLmJpbmQodGhpcykpO1xuICAgIHRoaXMub25Nb3VzZU92ZXIodGhpcy5tb3VzZU92ZXIuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5vbk1vdXNlT3V0KHRoaXMubW91c2VPdXQuYmluZCh0aGlzKSk7XG4gIFxuICAgIHRoaXMub3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaXNCZWZvcmVTaXplYWJsZUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYmVmb3JlU2l6ZWFibGVFbGVtZW50O1xuICB9XG5cbiAgaXNBZnRlclNpemVhYmxlRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5hZnRlclNpemVhYmxlRWxlbWVudDtcbiAgfVxuXG4gIGdldERpcmVjdGlvbigpIHtcbiAgICBsZXQgZGlyZWN0aW9uID0gdW5kZWZpbmVkOyAgLy8vXG5cbiAgICBpZiAodGhpcy5iZWZvcmVTaXplYWJsZUVsZW1lbnQpIHtcbiAgICAgIGRpcmVjdGlvbiA9ICsxO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmFmdGVyU2l6ZWFibGVFbGVtZW50KSB7XG4gICAgICBkaXJlY3Rpb24gPSAtMTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0aW9uO1xuICB9XG5cbiAgZ2V0U2l6ZWFibGVFbGVtZW50KCkge1xuICAgIGxldCBzaXplYWJsZUVsZW1lbnQgPSB1bmRlZmluZWQ7ICAvLy9cblxuICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuZ2V0RGlyZWN0aW9uKCk7XG5cbiAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgY2FzZSAtMTpcbiAgICAgICAgc2l6ZWFibGVFbGVtZW50ID0gdGhpcy5nZXRQcmV2aW91c1NpYmxpbmdFbGVtZW50KCk7IC8vL1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSArMTpcbiAgICAgICAgc2l6ZWFibGVFbGVtZW50ID0gdGhpcy5nZXROZXh0U2libGluZ0VsZW1lbnQoKTsgLy8vXG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBzaXplYWJsZUVsZW1lbnQ7XG4gIH1cbiAgXG4gIHNldE9wdGlvbnMob3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICBzZXRPcHRpb24ob3B0aW9uKSB7XG4gICAgdGhpcy5vcHRpb25zW29wdGlvbl0gPSB0cnVlO1xuICB9XG5cbiAgdW5zZXRPcHRpb24ob3B0aW9uKSB7XG4gICAgZGVsZXRlKHRoaXMub3B0aW9uc1tvcHRpb25dKTtcbiAgfVxuXG4gIGhhc09wdGlvbihvcHRpb24pIHtcbiAgICBvcHRpb24gPSAodGhpcy5vcHRpb25zW29wdGlvbl0gPT09IHRydWUpOyAvLy9cblxuICAgIHJldHVybiBvcHRpb247XG4gIH1cbiAgXG4gIGVuYWJsZSgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuICB9XG5cbiAgaXNEaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZDtcbiAgfVxuXG4gIG9uRHJhZyhkcmFnSGFuZGxlcikge1xuICAgIHRoaXMuZHJhZ0hhbmRsZXIgPSBkcmFnSGFuZGxlcjtcbiAgfVxuXG4gIHN0YXJ0RHJhZ2dpbmcoKSB7XG4gICAgY29uc3QgZXNjYXBlS2V5U3RvcHNEcmFnZ2luZyA9IHRoaXMuaGFzT3B0aW9uKEVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkcpO1xuXG4gICAgaWYgKGVzY2FwZUtleVN0b3BzRHJhZ2dpbmcpIHtcbiAgICAgIHdpbmRvdy5vbktleURvd24odGhpcy5rZXlEb3duSGFuZGxlci5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICB0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcbiAgfVxuXG4gIHN0b3BEcmFnZ2luZygpIHtcbiAgICBjb25zdCBlc2NhcGVLZXlTdG9wc0RyYWdnaW5nID0gdGhpcy5oYXNPcHRpb24oRVNDQVBFX0tFWV9TVE9QU19EUkFHR0lORyk7XG5cbiAgICBpZiAoZXNjYXBlS2V5U3RvcHNEcmFnZ2luZykge1xuICAgICAgd2luZG93Lm9mZktleURvd24odGhpcy5rZXlEb3duSGFuZGxlci5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG4gIH1cblxuICBpc0RyYWdnaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdnaW5nO1xuICB9XG5cbiAga2V5RG93bkhhbmRsZXIoa2V5Q29kZSkge1xuICAgIGlmIChrZXlDb2RlID09PSBFU0NBUEVfS0VZQ09ERSkge1xuICAgICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICAgIHRoaXMuc3RvcERyYWdnaW5nKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBiZWZvcmVTaXplYWJsZUVsZW1lbnQsIGFmdGVyU2l6ZWFibGVFbGVtZW50LCBvbkRyYWcsIG9wdGlvbnMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgZHJhZ0hhbmRsZXIgPSBvbkRyYWc7IC8vL1xuXG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGJlZm9yZVNpemVhYmxlRWxlbWVudCwgYWZ0ZXJTaXplYWJsZUVsZW1lbnQsIGRyYWdIYW5kbGVyLCBvcHRpb25zKTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFNwbGl0dGVyLCB7XG4gIHRhZ05hbWU6ICdkaXYnLFxuICBpZ25vcmVkUHJvcGVydGllczogW1xuICAgICdiZWZvcmVTaXplYWJsZUVsZW1lbnQnLFxuICAgICdhZnRlclNpemVhYmxlRWxlbWVudCcsXG4gICAgJ29uRHJhZycsXG4gICAgJ29wdGlvbnMnXG4gIF1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNwbGl0dGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjdXJzb3IgPSByZXF1aXJlKCcuLi9jdXJzb3InKSxcbiAgICAgIFNwbGl0dGVyID0gcmVxdWlyZSgnLi4vc3BsaXR0ZXInKTtcblxuY2xhc3MgSG9yaXpvbnRhbFNwbGl0dGVyIGV4dGVuZHMgU3BsaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgYmVmb3JlU2l6ZWFibGVFbGVtZW50LCBhZnRlclNpemVhYmxlRWxlbWVudCwgZHJhZ0hhbmRsZXIsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihzZWxlY3RvciwgYmVmb3JlU2l6ZWFibGVFbGVtZW50LCBhZnRlclNpemVhYmxlRWxlbWVudCwgZHJhZ0hhbmRsZXIsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy5zaXplYWJsZUVsZW1lbnRIZWlnaHQgPSBudWxsO1xuXG4gICAgdGhpcy5tb3VzZVRvcCA9IG51bGw7XG4gIH1cblxuICBtb3VzZVVwKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjdXJzb3IucmVzZXQoKTtcblxuICAgICAgaWYgKHRoaXMuZHJhZ2dpbmcpIHtcbiAgICAgICAgdGhpcy5zdG9wRHJhZ2dpbmcoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtb3VzZU1vdmUobW91c2VUb3AsIG1vdXNlTGVmdCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgICBpZiAoZHJhZ2dpbmcpIHtcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gdGhpcy5nZXREaXJlY3Rpb24oKSxcbiAgICAgICAgICAgICAgc2l6ZWFibGVFbGVtZW50ID0gdGhpcy5nZXRTaXplYWJsZUVsZW1lbnQoKSxcbiAgICAgICAgICAgICAgcmVsYXRpdmVNb3VzZVRvcCA9IG1vdXNlVG9wIC0gdGhpcy5tb3VzZVRvcCxcbiAgICAgICAgICAgICAgaGVpZ2h0ID0gdGhpcy5zaXplYWJsZUVsZW1lbnRIZWlnaHQgLSBkaXJlY3Rpb24gKiByZWxhdGl2ZU1vdXNlVG9wO1xuXG4gICAgICAgIHNpemVhYmxlRWxlbWVudC5zZXRIZWlnaHQoaGVpZ2h0KTtcblxuICAgICAgICBjb25zdCBzaXplYWJsZUVsZW1lbnRIZWlnaHQgPSBzaXplYWJsZUVsZW1lbnQuZ2V0SGVpZ2h0KCk7XG5cbiAgICAgICAgaWYgKHRoaXMuZHJhZ0hhbmRsZXIpIHtcbiAgICAgICAgICB0aGlzLmRyYWdIYW5kbGVyKHNpemVhYmxlRWxlbWVudEhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtb3VzZURvd24obW91c2VUb3AsIG1vdXNlTGVmdCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjb25zdCBzaXplYWJsZUVsZW1lbnQgPSB0aGlzLmdldFNpemVhYmxlRWxlbWVudCgpO1xuICAgICAgICAgIFxuICAgICAgY3Vyc29yLnJvd1Jlc2l6ZSgpO1xuXG4gICAgICB0aGlzLm1vdXNlVG9wID0gbW91c2VUb3A7XG5cbiAgICAgIHRoaXMuc2l6ZWFibGVFbGVtZW50SGVpZ2h0ID0gc2l6ZWFibGVFbGVtZW50LmdldEhlaWdodCgpO1xuXG4gICAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgICBpZiAoIWRyYWdnaW5nKSB7XG4gICAgICAgIHRoaXMuc3RhcnREcmFnZ2luZygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1vdXNlT3ZlcigpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY3Vyc29yLnJvd1Jlc2l6ZSgpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlT3V0KCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjdXJzb3IucmVzZXQoKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIHJldHVybiBTcGxpdHRlci5mcm9tUHJvcGVydGllcyhIb3Jpem9udGFsU3BsaXR0ZXIsIHByb3BlcnRpZXMpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oSG9yaXpvbnRhbFNwbGl0dGVyLCB7XG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAnaG9yaXpvbnRhbCBzcGxpdHRlcidcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gSG9yaXpvbnRhbFNwbGl0dGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjdXJzb3IgPSByZXF1aXJlKCcuLi9jdXJzb3InKSxcbiAgICAgIFNwbGl0dGVyID0gcmVxdWlyZSgnLi4vc3BsaXR0ZXInKTtcblxuY2xhc3MgVmVydGljYWxTcGxpdHRlciBleHRlbmRzIFNwbGl0dGVyIHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGJlZm9yZVNpemVhYmxlRWxlbWVudCwgYWZ0ZXJTaXplYWJsZUVsZW1lbnQsIGRyYWdIYW5kbGVyLCBvcHRpb25zKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IsIGJlZm9yZVNpemVhYmxlRWxlbWVudCwgYWZ0ZXJTaXplYWJsZUVsZW1lbnQsIGRyYWdIYW5kbGVyLCBvcHRpb25zKTtcblxuICAgIHRoaXMuc2l6ZWFibGVFbGVtZW50V2lkdGggPSBudWxsO1xuXG4gICAgdGhpcy5tb3VzZUxlZnQgPSBudWxsO1xuICB9XG5cbiAgbW91c2VVcCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY3Vyc29yLnJlc2V0KCk7XG5cbiAgICAgIGlmICh0aGlzLmRyYWdnaW5nKSB7XG4gICAgICAgIHRoaXMuc3RvcERyYWdnaW5nKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbW91c2VNb3ZlKG1vdXNlVG9wLCBtb3VzZUxlZnQpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuZ2V0RGlyZWN0aW9uKCksXG4gICAgICAgICAgICAgIHNpemVhYmxlRWxlbWVudCA9IHRoaXMuZ2V0U2l6ZWFibGVFbGVtZW50KCksXG4gICAgICAgICAgICAgIHJlbGF0aXZlTW91c2VMZWZ0ID0gbW91c2VMZWZ0IC0gdGhpcy5tb3VzZUxlZnQsXG4gICAgICAgICAgICAgIHdpZHRoID0gdGhpcy5zaXplYWJsZUVsZW1lbnRXaWR0aCAtIGRpcmVjdGlvbiAqIHJlbGF0aXZlTW91c2VMZWZ0O1xuXG4gICAgICAgIHNpemVhYmxlRWxlbWVudC5zZXRXaWR0aCh3aWR0aCk7XG5cbiAgICAgICAgY29uc3Qgc2l6ZWFibGVFbGVtZW50V2lkdGggPSBzaXplYWJsZUVsZW1lbnQuZ2V0V2lkdGgoKTtcblxuICAgICAgICBpZiAodGhpcy5kcmFnSGFuZGxlcikge1xuICAgICAgICAgIHRoaXMuZHJhZ0hhbmRsZXIoc2l6ZWFibGVFbGVtZW50V2lkdGgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbW91c2VEb3duKG1vdXNlVG9wLCBtb3VzZUxlZnQpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY29uc3Qgc2l6ZWFibGVFbGVtZW50ID0gdGhpcy5nZXRTaXplYWJsZUVsZW1lbnQoKTtcblxuICAgICAgY3Vyc29yLmNvbHVtblJlc2l6ZSgpO1xuXG4gICAgICB0aGlzLm1vdXNlTGVmdCA9IG1vdXNlTGVmdDtcblxuICAgICAgdGhpcy5zaXplYWJsZUVsZW1lbnRXaWR0aCA9IHNpemVhYmxlRWxlbWVudC5nZXRXaWR0aCgpO1xuXG4gICAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgICBpZiAoIWRyYWdnaW5nKSB7XG4gICAgICAgIHRoaXMuc3RhcnREcmFnZ2luZygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1vdXNlT3ZlcigpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY3Vyc29yLmNvbHVtblJlc2l6ZSgpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlT3V0KCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjdXJzb3IucmVzZXQoKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIHJldHVybiBTcGxpdHRlci5mcm9tUHJvcGVydGllcyhWZXJ0aWNhbFNwbGl0dGVyLCBwcm9wZXJ0aWVzKTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFZlcnRpY2FsU3BsaXR0ZXIsIHtcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICd2ZXJ0aWNhbCBzcGxpdHRlcidcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVmVydGljYWxTcGxpdHRlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHdpbmRvdzogcmVxdWlyZSgnLi9saWIvd2luZG93JyksXG4gIGRvY3VtZW50OiByZXF1aXJlKCcuL2xpYi9kb2N1bWVudCcpLFxuICBEaXY6IHJlcXVpcmUoJy4vbGliL2VsZW1lbnQvZGl2JyksXG4gIFNwYW46IHJlcXVpcmUoJy4vbGliL2VsZW1lbnQvc3BhbicpLFxuICBCb2R5OiByZXF1aXJlKCcuL2xpYi9lbGVtZW50L2JvZHknKSxcbiAgTGluazogcmVxdWlyZSgnLi9saWIvZWxlbWVudC9saW5rJyksXG4gIFNlbGVjdDogcmVxdWlyZSgnLi9saWIvZWxlbWVudC9zZWxlY3QnKSxcbiAgQnV0dG9uOiByZXF1aXJlKCcuL2xpYi9lbGVtZW50L2J1dHRvbicpLFxuICBDaGVja2JveDogcmVxdWlyZSgnLi9saWIvZWxlbWVudC9jaGVja2JveCcpLFxuICBFbGVtZW50OiByZXF1aXJlKCcuL2xpYi9lbGVtZW50JyksXG4gIFRleHRFbGVtZW50OiByZXF1aXJlKCcuL2xpYi90ZXh0RWxlbWVudCcpLFxuICBJbnB1dDogcmVxdWlyZSgnLi9saWIvaW5wdXRFbGVtZW50L2lucHV0JyksXG4gIFRleHRhcmVhOiByZXF1aXJlKCcuL2xpYi9pbnB1dEVsZW1lbnQvdGV4dGFyZWEnKSxcbiAgSW5wdXRFbGVtZW50OiByZXF1aXJlKCcuL2xpYi9pbnB1dEVsZW1lbnQnKSxcbiAgQm91bmRzOiByZXF1aXJlKCcuL2xpYi9taXNjL2JvdW5kcycpLFxuICBPZmZzZXQ6IHJlcXVpcmUoJy4vbGliL21pc2Mvb2Zmc2V0JyksXG4gIFJlYWN0OiByZXF1aXJlKCcuL2xpYi9yZWFjdCcpXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBldmVudE1peGluID0gcmVxdWlyZSgnLi9taXhpbi9ldmVudCcpLFxuICAgICAgY2xpY2tNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vY2xpY2snKSxcbiAgICAgIG1vdXNlTWl4aW4gPSByZXF1aXJlKCcuL21peGluL21vdXNlJyksXG4gICAgICBrZXlNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4va2V5Jyk7XG5cbmNsYXNzIERvY3VtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9jdW1lbnQ7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihEb2N1bWVudC5wcm90b3R5cGUsIGV2ZW50TWl4aW4pO1xuT2JqZWN0LmFzc2lnbihEb2N1bWVudC5wcm90b3R5cGUsIGNsaWNrTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihEb2N1bWVudC5wcm90b3R5cGUsIG1vdXNlTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihEb2N1bWVudC5wcm90b3R5cGUsIGtleU1peGluKTtcblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgRG9jdW1lbnQoKTsgIC8vL1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBPZmZzZXQgPSByZXF1aXJlKCcuL21pc2Mvb2Zmc2V0JyksXG4gICAgICBCb3VuZHMgPSByZXF1aXJlKCcuL21pc2MvYm91bmRzJyksXG4gICAgICBqc3hNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vanN4JyksXG4gICAgICBldmVudE1peGluID0gcmVxdWlyZSgnLi9taXhpbi9ldmVudCcpLFxuICAgICAgY2xpY2tNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vY2xpY2snKSxcbiAgICAgIHNjcm9sbE1peGluID0gcmVxdWlyZSgnLi9taXhpbi9zY3JvbGwnKSxcbiAgICAgIHJlc2l6ZU1peGluID0gcmVxdWlyZSgnLi9taXhpbi9yZXNpemUnKSxcbiAgICAgIG1vdXNlTWl4aW4gPSByZXF1aXJlKCcuL21peGluL21vdXNlJyksXG4gICAgICBrZXlNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4va2V5Jyk7XG5cbmNsYXNzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnRGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50Ll9fZWxlbWVudF9fID0gdGhpczsgLy8vXG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIEVsZW1lbnQuY2xvbmUodGhpcyk7IH1cblxuICBnZXRPZmZzZXQoKSB7XG4gICAgY29uc3QgdG9wID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldFRvcCwgIC8vL1xuICAgICAgICAgIGxlZnQgPSB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0TGVmdCwgIC8vL1xuICAgICAgICAgIG9mZnNldCA9IG5ldyBPZmZzZXQodG9wLCBsZWZ0KTtcblxuICAgIHJldHVybiBvZmZzZXQ7XG4gIH1cblxuICBnZXRCb3VuZHMoKSB7XG4gICAgY29uc3QgYm91bmRpbmdDbGllbnRSZWN0ID0gdGhpcy5kb21FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgIGJvdW5kcyA9IEJvdW5kcy5mcm9tQm91bmRpbmdDbGllbnRSZWN0KGJvdW5kaW5nQ2xpZW50UmVjdCk7XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG5cbiAgZ2V0V2lkdGgoaW5jbHVkZUJvcmRlciA9IHRydWUpIHtcbiAgICBjb25zdCB3aWR0aCA9IGluY2x1ZGVCb3JkZXIgP1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0V2lkdGggOlxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5jbGllbnRXaWR0aDtcblxuICAgIHJldHVybiB3aWR0aDtcbiAgfVxuXG4gIHNldFdpZHRoKHdpZHRoKSB7IHRoaXMuZG9tRWxlbWVudC5zdHlsZS53aWR0aCA9IHdpZHRoOyB9XG5cbiAgZ2V0SGVpZ2h0KGluY2x1ZGVCb3JkZXIgPSB0cnVlKSB7XG4gICAgY29uc3QgaGVpZ2h0ID0gaW5jbHVkZUJvcmRlciA/XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0SGVpZ2h0IDpcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodDtcblxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cblxuICBzZXRIZWlnaHQoaGVpZ2h0KSB7IHRoaXMuZG9tRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBoZWlnaHQ7IH1cblxuICBoYXNBdHRyaWJ1dGUobmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50Lmhhc0F0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIGdldEF0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuZ2V0QXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7IHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpOyB9XG5cbiAgY2xlYXJBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7IHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTsgfVxuXG4gIHJlbW92ZUF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuY2xlYXJBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBzZXRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTsgfVxuXG4gIGFkZENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyB9XG5cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7IH1cblxuICB0b2dnbGVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTsgfVxuXG4gIGhhc0NsYXNzKGNsYXNzTmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpOyB9XG5cbiAgY2xlYXJDbGFzc2VzKCkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gJyc7IH1cblxuICBwcmVwZW5kVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LnByZXBlbmQodGhpcyk7IH1cblxuICBhcHBlbmRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQuYXBwZW5kKHRoaXMpOyB9XG5cbiAgYWRkVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LmFkZCh0aGlzKTsgfVxuXG4gIHJlbW92ZUZyb20ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LnJlbW92ZSh0aGlzKTsgfVxuXG4gIGluc2VydEJlZm9yZShzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCk7XG4gIH1cblxuICBpbnNlcnRBZnRlcihzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudC5uZXh0U2libGluZyk7ICAvLy9cbiAgfVxuXG4gIHByZXBlbmQoZWxlbWVudCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQsXG4gICAgICAgICAgZmlyc3RDaGlsZERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQuZmlyc3RDaGlsZDtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgZmlyc3RDaGlsZERPTUVsZW1lbnQpO1xuICB9XG5cbiAgYXBwZW5kKGVsZW1lbnQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCBudWxsKTsgLy8vXG4gIH1cblxuICBhZGQoZWxlbWVudCkgeyB0aGlzLmFwcGVuZChlbGVtZW50KTsgfVxuXG4gIHJlbW92ZShlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVDaGlsZChkb21FbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHNob3coZGlzcGxheVN0eWxlID0gJ2Jsb2NrJykgeyB0aGlzLmRvbUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXlTdHlsZTsgfVxuXG4gIGhpZGUoKSB7IHRoaXMuZG9tRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyB9XG5cbiAgZW5hYmxlKCkgeyB0aGlzLmNsZWFyQXR0cmlidXRlKCdkaXNhYmxlZCcpOyB9XG5cbiAgZGlzYWJsZSgpIHsgdGhpcy5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7IH1cblxuICBpc0VuYWJsZWQoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKSxcbiAgICAgICAgICBlbmFibGVkID0gIWRpc2FibGVkO1xuXG4gICAgcmV0dXJuIGVuYWJsZWQ7XG4gIH1cblxuICBpc0Rpc2FibGVkKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG5cbiAgICByZXR1cm4gZGlzYWJsZWQ7XG4gIH1cblxuICBodG1sKGh0bWwpIHtcbiAgICBpZiAoaHRtbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBpbm5lckhUTUwgPSB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MO1xuXG4gICAgICBodG1sID0gaW5uZXJIVE1MOyAvLy9cblxuICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGlubmVySFRNTCA9IGh0bWw7IC8vL1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MID0gaW5uZXJIVE1MXG4gICAgfVxuICB9XG5cbiAgY3NzKGNzcykge1xuICAgIGlmIChjc3MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5kb21FbGVtZW50KSxcbiAgICAgICAgICAgIGNzcyA9IHt9O1xuXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY29tcHV0ZWRTdHlsZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGNvbXB1dGVkU3R5bGVbMF0sICAvLy9cbiAgICAgICAgICAgICAgdmFsdWUgPSBjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUobmFtZSk7IC8vL1xuXG4gICAgICAgIGNzc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY3NzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNzcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGxldCBuYW1lID0gY3NzOyAvLy9cblxuICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5kb21FbGVtZW50KSxcbiAgICAgICAgICAgIHZhbHVlID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpOyAvLy9cblxuICAgICAgY3NzID0gdmFsdWU7ICAvLy9cblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyhjc3MpOyAvLy9cblxuICAgICAgbmFtZXMuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gY3NzW25hbWVdO1xuXG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5zdHlsZVtuYW1lXSA9IHZhbHVlO1xuICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gIH1cblxuICBibHVyKCkgeyB0aGlzLmRvbUVsZW1lbnQuYmx1cigpOyB9XG5cbiAgZm9jdXMoKSB7IHRoaXMuZG9tRWxlbWVudC5mb2N1cygpOyB9XG5cbiAgaGFzRm9jdXMoKSB7XG4gICAgY29uc3QgZm9jdXMgPSAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gdGhpcy5kb21FbGVtZW50KTsgIC8vL1xuXG4gICAgcmV0dXJuIGZvY3VzO1xuICB9XG5cbiAgZ2V0RGVzY2VuZGFudEVsZW1lbnRzKHNlbGVjdG9yID0gJyonKSB7XG4gICAgY29uc3QgZG9tTm9kZSA9IHRoaXMuZG9tRWxlbWVudCwgIC8vL1xuICAgICAgICAgIGRlc2NlbmRhbnRET01Ob2RlcyA9IGRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlKGRvbU5vZGUpLFxuICAgICAgICAgIGRlc2NlbmRhbnRFbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzKGRlc2NlbmRhbnRET01Ob2Rlcywgc2VsZWN0b3IpO1xuXG4gICAgcmV0dXJuIGRlc2NlbmRhbnRFbGVtZW50cztcbiAgfVxuXG4gIGdldENoaWxkRWxlbWVudHMoc2VsZWN0b3IgPSAnKicpIHtcbiAgICBjb25zdCBjaGlsZERPTU5vZGVzID0gdGhpcy5kb21FbGVtZW50LmNoaWxkTm9kZXMsXG4gICAgICAgICAgY2hpbGRET01FbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzKGNoaWxkRE9NTm9kZXMsIHNlbGVjdG9yKSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoY2hpbGRET01FbGVtZW50cyk7XG5cbiAgICByZXR1cm4gY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIGdldFBhcmVudEVsZW1lbnQoc2VsZWN0b3IgPSAnKicpIHtcbiAgICBsZXQgcGFyZW50RWxlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cbiAgICBpZiAocGFyZW50RE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgaWYgKHBhcmVudERPTUVsZW1lbnQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgY29uc3QgcGFyZW50RE9NRWxlbWVudHMgPSBbcGFyZW50RE9NRWxlbWVudF0sXG4gICAgICAgICAgICAgIHBhcmVudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMocGFyZW50RE9NRWxlbWVudHMpLFxuICAgICAgICAgICAgICBmaXJzdFBhcmVudEVsZW1lbnQgPSBmaXJzdChwYXJlbnRFbGVtZW50cyk7XG5cbiAgICAgICAgcGFyZW50RWxlbWVudCA9IGZpcnN0UGFyZW50RWxlbWVudCB8fCBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnRFbGVtZW50O1xuICB9XG5cbiAgZ2V0QXNjZW5kYW50RWxlbWVudHMoc2VsZWN0b3IgPSAnKicpIHtcbiAgICBjb25zdCBhc2NlbmRhbnRET01FbGVtZW50cyA9IFtdLFxuICAgICAgICAgIHBhcmVudERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQucGFyZW50RWxlbWVudDtcblxuICAgIGxldCBhc2NlbmRhbnRET01FbGVtZW50ID0gcGFyZW50RE9NRWxlbWVudDsgIC8vL1xuICAgIHdoaWxlIChhc2NlbmRhbnRET01FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBpZiAoYXNjZW5kYW50RE9NRWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICBhc2NlbmRhbnRET01FbGVtZW50cy5wdXNoKGFzY2VuZGFudERPTUVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICBhc2NlbmRhbnRET01FbGVtZW50ID0gYXNjZW5kYW50RE9NRWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIH1cblxuICAgIGNvbnN0IGFzY2VuZGFudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoYXNjZW5kYW50RE9NRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGFzY2VuZGFudEVsZW1lbnRzO1xuICB9XG5cbiAgZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudChzZWxlY3RvciA9ICcqJykge1xuICAgIGxldCBwcmV2aW91c1NpYmxpbmdFbGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IHByZXZpb3VzU2libGluZ0RPTU5vZGUgPSB0aGlzLmRvbUVsZW1lbnQucHJldmlvdXNTaWJsaW5nOyAgLy8vXG5cbiAgICBpZiAoKHByZXZpb3VzU2libGluZ0RPTU5vZGUgIT09IG51bGwpICYmIGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IocHJldmlvdXNTaWJsaW5nRE9NTm9kZSwgc2VsZWN0b3IpKSB7XG4gICAgICBwcmV2aW91c1NpYmxpbmdFbGVtZW50ID0gcHJldmlvdXNTaWJsaW5nRE9NTm9kZS5fX2VsZW1lbnRfXyB8fCBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBwcmV2aW91c1NpYmxpbmdFbGVtZW50O1xuICB9XG5cbiAgZ2V0TmV4dFNpYmxpbmdFbGVtZW50KHNlbGVjdG9yID0gJyonKSB7XG4gICAgbGV0IG5leHRTaWJsaW5nRWxlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBuZXh0U2libGluZ0RPTU5vZGUgPSB0aGlzLmRvbUVsZW1lbnQubmV4dFNpYmxpbmc7XG5cbiAgICBpZiAoKG5leHRTaWJsaW5nRE9NTm9kZSAhPT0gbnVsbCkgJiYgZG9tTm9kZU1hdGNoZXNTZWxlY3RvcihuZXh0U2libGluZ0RPTU5vZGUsIHNlbGVjdG9yKSkge1xuICAgICAgbmV4dFNpYmxpbmdFbGVtZW50ID0gbmV4dFNpYmxpbmdET01Ob2RlLl9fZWxlbWVudF9fIHx8IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHRTaWJsaW5nRWxlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBjbG9uZShDbGFzcywgZWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgZGVlcCA9IHRydWUsXG4gICAgICAgICAgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudC5jbG9uZU5vZGUoZGVlcCk7XG5cbiAgICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChkb21FbGVtZW50KTtcbiAgICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChudWxsKTtcblxuICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KENsYXNzLCByZW1haW5pbmdBcmd1bWVudHMpKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChDbGFzcywgaHRtbCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3Qgb3V0ZXJET01FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBvdXRlckRPTUVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbDsgIC8vL1xuXG4gICAgY29uc3QgZG9tRWxlbWVudCA9IG91dGVyRE9NRWxlbWVudC5maXJzdENoaWxkO1xuXG4gICAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQoZG9tRWxlbWVudCk7XG4gICAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQobnVsbCk7XG5cbiAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShDbGFzcywgcmVtYWluaW5nQXJndW1lbnRzKSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoQ2xhc3MsIGRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KGRvbUVsZW1lbnQpO1xuICAgIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KG51bGwpO1xuXG4gICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoQ2xhc3MsIHJlbWFpbmluZ0FyZ3VtZW50cykpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB0YWdOYW1lID0gQ2xhc3MudGFnTmFtZSxcbiAgICAgICAgICBodG1sID0gYDwke3RhZ05hbWV9IC8+YCxcbiAgICAgICAgICBlbGVtZW50ID0gRWxlbWVudC5mcm9tSFRNTChDbGFzcywgaHRtbCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIGNvbnN0IGRlZmF1bHRQcm9wZXJ0aWVzID0gQ2xhc3MuZGVmYXVsdFByb3BlcnRpZXMsXG4gICAgICAgICAgaWdub3JlZFByb3BlcnRpZXMgPSBDbGFzcy5pZ25vcmVkUHJvcGVydGllcztcblxuICAgIGVsZW1lbnQuYXBwbHlQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcyk7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBqc3hNaXhpbik7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBldmVudE1peGluKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGNsaWNrTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgc2Nyb2xsTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgcmVzaXplTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgbW91c2VNaXhpbik7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBrZXlNaXhpbik7XG5cbk9iamVjdC5hc3NpZ24oRWxlbWVudCwge1xuICBMRUZUX01PVVNFX0JVVFRPTjogMCxcbiAgTUlERExFX01PVVNFX0JVVFRPTjogMSxcbiAgUklHSFRfTU9VU0VfQlVUVE9OOiAyXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBFbGVtZW50O1xuXG5mdW5jdGlvbiBkb21FbGVtZW50RnJvbVNlbGVjdG9yKHNlbGVjdG9yKSB7XG4gIGNvbnN0IGRvbUVsZW1lbnQgPSAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykgP1xuICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVswXSA6ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjsgIC8vL1xuXG4gIHJldHVybiBkb21FbGVtZW50O1xufVxuXG5mdW5jdGlvbiBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhkb21FbGVtZW50cykge1xuICBjb25zdCBkb21FbGVtZW50c1dpdGhFbGVtZW50cyA9IGZpbHRlcihkb21FbGVtZW50cywgZnVuY3Rpb24oZG9tRWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiAoZG9tRWxlbWVudC5fX2VsZW1lbnRfXyAhPT0gdW5kZWZpbmVkKTtcbiAgICAgICAgfSksXG4gICAgICAgIGVsZW1lbnRzID0gZG9tRWxlbWVudHNXaXRoRWxlbWVudHMubWFwKGZ1bmN0aW9uKGRvbUVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gZG9tRWxlbWVudC5fX2VsZW1lbnRfXztcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBkZXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShkb21Ob2RlLCBkZXNjZW5kYW50RE9NTm9kZXMgPSBbXSkge1xuICBjb25zdCBjaGlsZERPTU5vZGVzID0gZG9tTm9kZS5jaGlsZE5vZGVzOyAgLy8vXG5cbiAgZGVzY2VuZGFudERPTU5vZGVzLmNvbmNhdChjaGlsZERPTU5vZGVzKTtcblxuICBjaGlsZERPTU5vZGVzLmZvckVhY2goZnVuY3Rpb24oY2hpbGRET01Ob2RlKSB7XG4gICAgZGVzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUoY2hpbGRET01Ob2RlLCBkZXNjZW5kYW50RE9NTm9kZXMpO1xuICB9KTtcblxuICByZXR1cm4gZGVzY2VuZGFudERPTU5vZGVzO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJET01Ob2Rlcyhkb21Ob2Rlcywgc2VsZWN0b3IpIHtcbiAgY29uc3QgZmlsdGVyZWRET01Ob2RlcyA9IGZpbHRlcihkb21Ob2RlcywgZnVuY3Rpb24oZG9tTm9kZSkge1xuICAgIHJldHVybiBkb21Ob2RlTWF0Y2hlc1NlbGVjdG9yKGRvbU5vZGUsIHNlbGVjdG9yKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZpbHRlcmVkRE9NTm9kZXM7XG59XG5cbmZ1bmN0aW9uIGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IoZG9tTm9kZSwgc2VsZWN0b3IpIHtcbiAgY29uc3QgZG9tTm9kZVR5cGUgPSBkb21Ob2RlLm5vZGVUeXBlO1xuXG4gIHN3aXRjaCAoZG9tTm9kZVR5cGUpIHtcbiAgICBjYXNlIE5vZGUuRUxFTUVOVF9OT0RFIDoge1xuICAgICAgY29uc3QgZG9tRWxlbWVudCA9IGRvbU5vZGU7IC8vL1xuXG4gICAgICByZXR1cm4gZG9tRWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKTtcbiAgICB9XG5cbiAgICBjYXNlIE5vZGUuVEVYVF9OT0RFIDoge1xuICAgICAgaWYgKHNlbGVjdG9yID09PSAnKicpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXIoYXJyYXksIHRlc3QpIHtcbiAgY29uc3QgZmlsdGVyZWRBcnJheSA9IFtdO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHJlc3VsdCA9IHRlc3QoZWxlbWVudCk7XG5cbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICBmaWx0ZXJlZEFycmF5LnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZpbHRlcmVkQXJyYXk7XG59XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpO1xuXG5jbGFzcyBCb2R5IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yID0gJ2JvZHknKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBCb2R5LmNsb25lKHRoaXMpOyB9XG5cbiAgc3RhdGljIGNsb25lKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gRWxlbWVudC5jbG9uZShCb2R5LCBlbGVtZW50KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbUhUTUwoQm9keSwgaHRtbCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICAgIHJldHVybiBFbGVtZW50LmZyb21ET01FbGVtZW50KEJvZHksIGRvbUVsZW1lbnQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICByZXR1cm4gRWxlbWVudC5mcm9tUHJvcGVydGllcyhCb2R5LCBwcm9wZXJ0aWVzKTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKEJvZHksIHtcbiAgdGFnTmFtZTogJ2JvZHknXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBCb2R5O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpO1xuXG5jbGFzcyBCdXR0b24gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNsaWNrSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjbGlja0hhbmRsZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5vbkNsaWNrKGNsaWNrSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoY2xpY2tIYW5kbGVyKSB7IHJldHVybiBCdXR0b24uY2xvbmUodGhpcywgY2xpY2tIYW5kbGVyKTsgfVxuXG4gIG9uQ2xpY2soY2xpY2tIYW5kbGVyLCBpbnRlcm1lZGlhdGVDbGlja0hhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyKSB7XG4gICAgc3VwZXIub25DbGljayhjbGlja0hhbmRsZXIsIGludGVybWVkaWF0ZUNsaWNrSGFuZGxlcik7XG4gIH1cblxuICBvZmZDbGljayhjbGlja0hhbmRsZXIpIHtcbiAgICBzdXBlci5vZmZDbGljayhjbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGNsb25lKGVsZW1lbnQsIGNsaWNrSGFuZGxlcikge1xuICAgIHJldHVybiBFbGVtZW50LmNsb25lKEJ1dHRvbiwgZWxlbWVudCwgY2xpY2tIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sLCBjbGlja0hhbmRsZXIpIHtcbiAgICByZXR1cm4gRWxlbWVudC5mcm9tSFRNTChCdXR0b24sIGh0bWwsIGNsaWNrSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCwgY2xpY2tIYW5kbGVyKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoQnV0dG9uLCBkb21FbGVtZW50LCBjbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IG9uQ2xpY2sgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY2xpY2tIYW5kbGVyID0gb25DbGljazsgLy8vXG5cbiAgICByZXR1cm4gRWxlbWVudC5mcm9tUHJvcGVydGllcyhCdXR0b24sIHByb3BlcnRpZXMsIGNsaWNrSGFuZGxlcik7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihCdXR0b24sIHtcbiAgdGFnTmFtZTogJ2J1dHRvbicsXG4gIGlnbm9yZWRQcm9wZXJ0aWVzOiBbXG4gICAgJ29uQ2xpY2snXG4gIF1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJ1dHRvbjtcblxuZnVuY3Rpb24gZGVmYXVsdEludGVybWVkaWF0ZUNsaWNrSGFuZGxlcihjbGlja0hhbmRsZXIsIGV2ZW50LCB0YXJnZXRFbGVtZW50KSB7XG4gIGNvbnN0IG1vdXNlQnV0dG9uID0gZXZlbnQuYnV0dG9uLFxuICAgICAgICBwcmV2ZW50RGVmYXVsdCA9IGNsaWNrSGFuZGxlcihtb3VzZUJ1dHRvbiwgdGFyZ2V0RWxlbWVudCk7XG5cbiAgcmV0dXJuIHByZXZlbnREZWZhdWx0O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpO1xuXG5jbGFzcyBDaGVja2JveCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY2hhbmdlSGFuZGxlciwgY2hlY2tlZCkge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjaGFuZ2VIYW5kbGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoY2hhbmdlSGFuZGxlcik7XG4gICAgfVxuICAgIFxuICAgIGlmIChjaGVja2VkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuY2hlY2soY2hlY2tlZCk7XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gQ2hlY2tib3guY2xvbmUodGhpcywgY2hhbmdlSGFuZGxlcik7IH1cblxuICBvbkNoYW5nZShjaGFuZ2VIYW5kbGVyLCBpbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIpIHtcbiAgICB0aGlzLm9uKCdjbGljaycsIGNoYW5nZUhhbmRsZXIsIGludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIpOyAgLy8vXG4gIH1cbiAgXG4gIG9mZkNoYW5nZShjaGFuZ2VIYW5kbGVyKSB7XG4gICAgdGhpcy5vZmYoJ2NsaWNrJywgY2hhbmdlSGFuZGxlcik7ICAvLy9cbiAgfVxuXG4gIGNoZWNrKGNoZWNrZWQgPSB0cnVlKSB7XG4gICAgY2hlY2tlZCA/XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICdjaGVja2VkJykgOlxuICAgICAgICB0aGlzLmNsZWFyQXR0cmlidXRlKCdjaGVja2VkJyk7XG4gIH1cblxuICBpc0NoZWNrZWQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2hlY2tlZDsgfVxuXG4gIG9uUmVzaXplKCkge31cblxuICBvZmZSZXNpemUoKSB7fVxuXG4gIHN0YXRpYyBjbG9uZShlbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuY2xvbmUoQ2hlY2tib3gsIGVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICByZXR1cm4gRWxlbWVudC5mcm9tSFRNTChDaGVja2JveCwgaHRtbCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBFbGVtZW50LmZyb21ET01FbGVtZW50KENoZWNrYm94LCBkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSwgY2hlY2tlZCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gb25DaGFuZ2U7IC8vLyAgICBcblxuICAgIHJldHVybiBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENoZWNrYm94LCBwcm9wZXJ0aWVzLCBjaGFuZ2VIYW5kbGVyLCBjaGVja2VkKTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKENoZWNrYm94LCB7XG4gIHRhZ05hbWU6ICdpbnB1dCcsXG4gIGlnbm9yZWRQcm9wZXJ0aWVzOiBbXG4gICAgJ29uQ2hhbmdlJyxcbiAgICAnY2hlY2tlZCdcbiAgXSxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICB0eXBlOiAnY2hlY2tib3gnXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENoZWNrYm94O1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcihjaGFuZ2VIYW5kbGVyLCBldmVudCwgdGFyZ2V0RWxlbWVudCkge1xuICBjb25zdCBjaGVja2JveCA9IHRhcmdldEVsZW1lbnQsIC8vL1xuICAgICAgICBjaGVja2VkID0gY2hlY2tib3guaXNDaGVja2VkKCksXG4gICAgICAgIHByZXZlbnREZWZhdWx0ID0gY2hhbmdlSGFuZGxlcihjaGVja2VkLCB0YXJnZXRFbGVtZW50KTtcblxuICByZXR1cm4gcHJldmVudERlZmF1bHQ7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50Jyk7XG5cbmNsYXNzIERpdiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gRGl2LmNsb25lKHRoaXMpOyB9XG5cbiAgc3RhdGljIGNsb25lKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gRWxlbWVudC5jbG9uZShEaXYsIGVsZW1lbnQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwpIHtcbiAgICByZXR1cm4gRWxlbWVudC5mcm9tSFRNTChEaXYsIGh0bWwpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpIHtcbiAgICByZXR1cm4gRWxlbWVudC5mcm9tRE9NRWxlbWVudChEaXYsIGRvbUVsZW1lbnQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICByZXR1cm4gRWxlbWVudC5mcm9tUHJvcGVydGllcyhEaXYsIHByb3BlcnRpZXMpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oRGl2LCB7XG4gIHRhZ05hbWU6ICdkaXYnXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBEaXY7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50Jyk7XG5cbmNsYXNzIExpbmsgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNsaWNrSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjbGlja0hhbmRsZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5vbkNsaWNrKGNsaWNrSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoY2xpY2tIYW5kbGVyKSB7IHJldHVybiBMaW5rLmNsb25lKHRoaXMsIGNsaWNrSGFuZGxlcik7IH1cblxuICBvbkNsaWNrKGNsaWNrSGFuZGxlciwgaW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUNsaWNrSGFuZGxlcikge1xuICAgIHRoaXMub24oJ2NsaWNrJywgY2xpY2tIYW5kbGVyLCBpbnRlcm1lZGlhdGVDbGlja0hhbmRsZXIpO1xuICB9XG4gIFxuICBvZmZDbGljayhjbGlja0hhbmRsZXIpIHtcbiAgICB0aGlzLm9mZignY2xpY2snLCBjbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGNsb25lKGVsZW1lbnQsIGNsaWNrSGFuZGxlcikge1xuICAgIHJldHVybiBFbGVtZW50LmNsb25lKExpbmssIGVsZW1lbnQsIGNsaWNrSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCwgY2xpY2tIYW5kbGVyKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbUhUTUwoTGluaywgaHRtbCwgY2xpY2tIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50LCBjbGlja0hhbmRsZXIpIHtcbiAgICByZXR1cm4gRWxlbWVudC5mcm9tRE9NRWxlbWVudChMaW5rLCBkb21FbGVtZW50LCBjbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IG9uQ2xpY2sgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY2xpY2tIYW5kbGVyID0gb25DbGljazsgLy8vICAgIFxuXG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoTGluaywgcHJvcGVydGllcywgY2xpY2tIYW5kbGVyKTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKExpbmssIHtcbiAgdGFnTmFtZTogJ2EnLFxuICBpZ25vcmVkUHJvcGVydGllczogW1xuICAgICdvbkNsaWNrJ1xuICBdXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBMaW5rO1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyKGNsaWNrSGFuZGxlciwgZXZlbnQsIHRhcmdldEVsZW1lbnQpIHtcbiAgY29uc3QgbGluayA9IHRhcmdldEVsZW1lbnQsIC8vL1xuICAgICAgICBocmVmID0gbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSxcbiAgICAgICAgcHJldmVudERlZmF1bHQgPSBjbGlja0hhbmRsZXIoaHJlZiwgdGFyZ2V0RWxlbWVudCk7XG5cbiAgcmV0dXJuIHByZXZlbnREZWZhdWx0O1xufSIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKTtcblxuY2xhc3MgU2VsZWN0IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgaWYgKGNoYW5nZUhhbmRsZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5vbkNoYW5nZShjaGFuZ2VIYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBjbG9uZShjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBTZWxlY3QuY2xvbmUodGhpcywgY2hhbmdlSGFuZGxlcik7IH1cblxuICBvbkNoYW5nZShjaGFuZ2VIYW5kbGVyLCBpbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIpIHtcbiAgICB0aGlzLm9uKCdjaGFuZ2UnLCBjaGFuZ2VIYW5kbGVyLCBpbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIG9mZkNoYW5nZShjaGFuZ2VIYW5kbGVyKSB7XG4gICAgdGhpcy5vZmYoJ2NoYW5nZScsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgZ2V0U2VsZWN0ZWRPcHRpb25WYWx1ZSgpIHtcbiAgICBjb25zdCBzZWxlY3RlZE9wdGlvblZhbHVlID0gdGhpcy5kb21FbGVtZW50LnZhbHVlOyAgLy8vXG4gICAgXG4gICAgcmV0dXJuIHNlbGVjdGVkT3B0aW9uVmFsdWU7XG4gIH1cblxuICBzZXRTZWxlY3RlZE9wdGlvbkJ5VmFsdWUoc2VsZWN0ZWRPcHRpb25WYWx1ZSkge1xuICAgIGNvbnN0IHZhbHVlID0gc2VsZWN0ZWRPcHRpb25WYWx1ZTsgIC8vL1xuICAgIFxuICAgIHRoaXMuZG9tRWxlbWVudC52YWx1ZSA9IHZhbHVlOyBcbiAgfVxuXG4gIHN0YXRpYyBjbG9uZShlbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuY2xvbmUoU2VsZWN0LCBlbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sLCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbUhUTUwoU2VsZWN0LCBodG1sLCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoU2VsZWN0LCBkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gb25DaGFuZ2U7IC8vLyAgICBcblxuICAgIHJldHVybiBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFNlbGVjdCwgcHJvcGVydGllcywgY2hhbmdlSGFuZGxlcik7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihTZWxlY3QsIHtcbiAgdGFnTmFtZTogJ3NlbGVjdCcsXG4gIGlnbm9yZWRQcm9wZXJ0aWVzOiBbXG4gICAgJ29uQ2hhbmdlJ1xuICBdXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBTZWxlY3Q7XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyKGNoYW5nZUhhbmRsZXIsIGV2ZW50LCB0YXJnZXRFbGVtZW50KSB7XG4gIGNvbnN0IHNlbGVjdCA9IHRhcmdldEVsZW1lbnQsIC8vL1xuICAgICAgICBzZWxlY3RlZE9wdGlvblZhbHVlID0gc2VsZWN0LmdldFNlbGVjdGVkT3B0aW9uVmFsdWUoKSxcbiAgICAgICAgcHJldmVudERlZmF1bHQgPSBjaGFuZ2VIYW5kbGVyKHNlbGVjdGVkT3B0aW9uVmFsdWUsIHRhcmdldEVsZW1lbnQpO1xuXG4gIHJldHVybiBwcmV2ZW50RGVmYXVsdDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKTtcblxuY2xhc3MgU3BhbiBleHRlbmRzIEVsZW1lbnQge1xuICBjbG9uZSgpIHsgcmV0dXJuIFNwYW4uY2xvbmUodGhpcyk7IH1cblxuICBvblJlc2l6ZSgpIHt9XG5cbiAgb2ZmUmVzaXplKCkge31cblxuICBzdGF0aWMgY2xvbmUoZWxlbWVudCkge1xuICAgIHJldHVybiBFbGVtZW50LmNsb25lKFNwYW4sIGVsZW1lbnQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwpIHtcbiAgICByZXR1cm4gRWxlbWVudC5mcm9tSFRNTChTcGFuLCBodG1sKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50KSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoU3BhbiwgZG9tRWxlbWVudCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIHJldHVybiBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oU3Bhbiwge1xuICB0YWdOYW1lOiAnc3Bhbidcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNwYW47XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKTtcblxuY2xhc3MgSW5wdXRFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgaWYgKGNoYW5nZUhhbmRsZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5vbkNoYW5nZShjaGFuZ2VIYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBvblJlc2l6ZSgpIHt9XG5cbiAgb2ZmUmVzaXplKCkge31cblxuICBvbkNoYW5nZShjaGFuZ2VIYW5kbGVyLCBpbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIpIHtcbiAgICB0aGlzLm9uKCdjaGFuZ2UnLCBjaGFuZ2VIYW5kbGVyLCBpbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIG9mZkNoYW5nZShjaGFuZ2VIYW5kbGVyKSB7XG4gICAgdGhpcy5vZmYoJ2NoYW5nZScsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgZ2V0VmFsdWUoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQudmFsdWU7IH1cblxuICBnZXRTZWxlY3Rpb25TdGFydCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zZWxlY3Rpb25TdGFydDsgfVxuXG4gIGdldFNlbGVjdGlvbkVuZCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zZWxlY3Rpb25FbmQ7IH1cblxuICBzZXRWYWx1ZSh2YWx1ZSkgeyB0aGlzLmRvbUVsZW1lbnQudmFsdWUgPSB2YWx1ZTsgfVxuXG4gIHNldFNlbGVjdGlvblN0YXJ0KHNlbGVjdGlvblN0YXJ0KSB7IHRoaXMuZG9tRWxlbWVudC5zZWxlY3Rpb25TdGFydCA9IHNlbGVjdGlvblN0YXJ0OyB9XG5cbiAgc2V0U2VsZWN0aW9uRW5kKHNlbGVjdGlvbkVuZCkgeyB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uRW5kID0gc2VsZWN0aW9uRW5kOyB9XG5cbiAgc2VsZWN0KCkgeyB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0KCk7IH1cblxuICBzdGF0aWMgY2xvbmUoQ2xhc3MsIGVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIHJldHVybiBFbGVtZW50LmNsb25lKENsYXNzLCBlbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUhUTUwoQ2xhc3MsIGh0bWwsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIHJldHVybiBFbGVtZW50LmZyb21IVE1MKENsYXNzLCBodG1sLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KENsYXNzLCBkb21FbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICByZXR1cm4gRWxlbWVudC5mcm9tRE9NRWxlbWVudChDbGFzcywgZG9tRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gb25DaGFuZ2U7IC8vL1xuXG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGNoYW5nZUhhbmRsZXIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihJbnB1dEVsZW1lbnQsIHtcbiAgaWdub3JlZFByb3BlcnRpZXM6IFtcbiAgICAnb25DaGFuZ2UnXG4gIF1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IElucHV0RWxlbWVudDtcblxuZnVuY3Rpb24gZGVmYXVsdEludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIoY2hhbmdlSGFuZGxlciwgZXZlbnQsIHRhcmdldEVsZW1lbnQpIHtcbiAgY29uc3QgaW5wdXRFbGVtZW50ID0gdGFyZ2V0RWxlbWVudCwgLy8vXG4gICAgICAgIHZhbHVlID0gaW5wdXRFbGVtZW50LmdldFZhbHVlKCksXG4gICAgICAgIHByZXZlbnREZWZhdWx0ID0gY2hhbmdlSGFuZGxlcih2YWx1ZSwgdGFyZ2V0RWxlbWVudCk7XG5cbiAgcmV0dXJuIHByZXZlbnREZWZhdWx0O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBJbnB1dEVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnB1dEVsZW1lbnQnKTtcblxuY2xhc3MgSW5wdXQgZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBjbG9uZShjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBJbnB1dC5jbG9uZSh0aGlzLCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyBjbG9uZShlbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5jbG9uZShJbnB1dCwgZWxlbWVudCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbUhUTUwoSW5wdXQsIGh0bWwsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21ET01FbGVtZW50KElucHV0LCBkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tUHJvcGVydGllcyhJbnB1dCwgcHJvcGVydGllcyk7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihJbnB1dCwge1xuICB0YWdOYW1lOiAnaW5wdXQnXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnB1dDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgSW5wdXRFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW5wdXRFbGVtZW50Jyk7XG5cbmNsYXNzIFRleHRhcmVhIGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgY2xvbmUoY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gVGV4dGFyZWEuY2xvbmUodGhpcywgY2hhbmdlSGFuZGxlcik7IH1cblxuICBzdGF0aWMgY2xvbmUoZWxlbWVudCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuY2xvbmUoVGV4dGFyZWEsIGVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21IVE1MKFRleHRhcmVhLCBodG1sLCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tRE9NRWxlbWVudChUZXh0YXJlYSwgZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoVGV4dGFyZWEsIHByb3BlcnRpZXMpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oVGV4dGFyZWEsIHtcbiAgdGFnTmFtZTogJ3RleHRhcmVhJ1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dGFyZWE7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIEJvdW5kcyB7XG4gIGNvbnN0cnVjdG9yKHRvcCwgbGVmdCwgYm90dG9tLCByaWdodCkge1xuICAgIHRoaXMudG9wID0gdG9wO1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgdGhpcy5ib3R0b20gPSBib3R0b207XG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICB9XG5cbiAgZ2V0VG9wKCkge1xuICAgIHJldHVybiB0aGlzLnRvcDtcbiAgfVxuXG4gIGdldExlZnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdDtcbiAgfVxuXG4gIGdldEJvdHRvbSgpIHtcbiAgICByZXR1cm4gdGhpcy5ib3R0b207XG4gIH1cblxuICBnZXRSaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5yaWdodDtcbiAgfVxuXG4gIGlzT3ZlcmxhcHBpbmdNb3VzZShtb3VzZVRvcCwgbW91c2VMZWZ0KSB7XG4gICAgcmV0dXJuICggICh0aGlzLnRvcCA8IG1vdXNlVG9wKSAmJlxuICAgICAgICAgICAgICAodGhpcy5sZWZ0IDwgbW91c2VMZWZ0KSAmJlxuICAgICAgICAgICAgICAodGhpcy5ib3R0b20gPiBtb3VzZVRvcCkgJiZcbiAgICAgICAgICAgICAgKHRoaXMucmlnaHQgPiBtb3VzZUxlZnQpICApO1xuICB9XG5cbiAgYXJlT3ZlcmxhcHBpbmcoYm91bmRzKSB7XG4gICAgcmV0dXJuICggICh0aGlzLnRvcCA8IGJvdW5kcy5ib3R0b20pICYmXG4gICAgICAgICAgICAgICh0aGlzLmxlZnQgPCBib3VuZHMucmlnaHQpICYmXG4gICAgICAgICAgICAgICh0aGlzLmJvdHRvbSA+IGJvdW5kcy50b3ApICYmXG4gICAgICAgICAgICAgICh0aGlzLnJpZ2h0ID4gYm91bmRzLmxlZnQpICApO1xuICB9XG5cbiAgc3RhdGljIGZyb21Cb3VuZGluZ0NsaWVudFJlY3QoYm91bmRpbmdDbGllbnRSZWN0KSB7XG4gICAgY29uc3Qgd2luZG93U2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0LCAvLy9cbiAgICAgICAgICB3aW5kb3dTY3JvbGxMZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0LCAgLy8vXG4gICAgICAgICAgdG9wID0gYm91bmRpbmdDbGllbnRSZWN0LnRvcCArIHdpbmRvd1Njcm9sbFRvcCxcbiAgICAgICAgICBsZWZ0ID0gYm91bmRpbmdDbGllbnRSZWN0LmxlZnQgKyB3aW5kb3dTY3JvbGxMZWZ0LFxuICAgICAgICAgIGJvdHRvbSA9IGJvdW5kaW5nQ2xpZW50UmVjdC5ib3R0b20gKyB3aW5kb3dTY3JvbGxUb3AsXG4gICAgICAgICAgcmlnaHQgPSBib3VuZGluZ0NsaWVudFJlY3QucmlnaHQgKyB3aW5kb3dTY3JvbGxMZWZ0LFxuICAgICAgICAgIGJvdW5kcyA9IG5ldyBCb3VuZHModG9wLCBsZWZ0LCBib3R0b20sIHJpZ2h0KTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCb3VuZHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIE9mZnNldCB7XG4gIGNvbnN0cnVjdG9yKHRvcCwgbGVmdCkge1xuICAgIHRoaXMudG9wID0gdG9wO1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gIH1cblxuICBnZXRUb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9wO1xuICB9XG5cbiAgZ2V0TGVmdCgpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT2Zmc2V0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBvbkNsaWNrKGhhbmRsZXIsIGludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlSGFuZGxlcikge1xuICB0aGlzLm9uKCdjbGljaycsIGhhbmRsZXIsIGludGVybWVkaWF0ZUhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvZmZDbGljayhoYW5kbGVyKSB7IHRoaXMub2ZmKCdjbGljaycsIGhhbmRsZXIpOyB9XG5cbmNvbnN0IGNsaWNrTWl4aW4gPSB7XG4gIG9uQ2xpY2s6IG9uQ2xpY2ssXG4gIG9mZkNsaWNrOiBvZmZDbGlja1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjbGlja01peGluO1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlSGFuZGxlcihoYW5kbGVyLCBldmVudCwgdGFyZ2V0RWxlbWVudCkge1xuICBjb25zdCBtb3VzZVRvcCA9IGV2ZW50LnBhZ2VZLCAgLy8vXG4gICAgICAgIG1vdXNlTGVmdCA9IGV2ZW50LnBhZ2VYLCAvLy9cbiAgICAgICAgbW91c2VCdXR0b24gPSBldmVudC5idXR0b24sIC8vL1xuICAgICAgICBwcmV2ZW50RGVmYXVsdCA9IGhhbmRsZXIobW91c2VUb3AsIG1vdXNlTGVmdCwgbW91c2VCdXR0b24sIHRhcmdldEVsZW1lbnQpO1xuXG4gIHJldHVybiBwcmV2ZW50RGVmYXVsdDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gb24oZXZlbnRUeXBlcywgaGFuZGxlciwgaW50ZXJtZWRpYXRlSGFuZGxlcikge1xuICBldmVudFR5cGVzID0gZXZlbnRUeXBlcy5zcGxpdCgnICcpOyAvLy9cblxuICBldmVudFR5cGVzLmZvckVhY2goZnVuY3Rpb24oZXZlbnRUeXBlKSB7XG4gICAgb25FdmVudCh0aGlzLCBldmVudFR5cGUsIGhhbmRsZXIsIGludGVybWVkaWF0ZUhhbmRsZXIpO1xuICB9LmJpbmQodGhpcykpO1xufVxuXG5mdW5jdGlvbiBvZmYoZXZlbnRUeXBlcywgaGFuZGxlcikge1xuICBldmVudFR5cGVzID0gZXZlbnRUeXBlcy5zcGxpdCgnICcpOyAvLy9cblxuICBldmVudFR5cGVzLmZvckVhY2goZnVuY3Rpb24oZXZlbnRUeXBlKSB7XG4gICAgb2ZmRXZlbnQodGhpcywgZXZlbnRUeXBlLCBoYW5kbGVyKTtcbiAgfS5iaW5kKHRoaXMpKTtcbn1cblxuY29uc3QgZXZlbnRNaXhpbiA9IHtcbiAgb246IG9uLFxuICBvZmY6IG9mZlxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBldmVudE1peGluO1xuXG5mdW5jdGlvbiBvbkV2ZW50KGVsZW1lbnQsIGV2ZW50VHlwZSwgaGFuZGxlciwgaW50ZXJtZWRpYXRlSGFuZGxlcikge1xuICBpZiAoIWVsZW1lbnQuaGFzT3duUHJvcGVydHkoJ2V2ZW50T2JqZWN0TWFwJykpIHtcbiAgICBjb25zdCBldmVudE9iamVjdE1hcCA9IHt9O1xuXG4gICAgT2JqZWN0LmFzc2lnbihlbGVtZW50LCB7XG4gICAgICBldmVudE9iamVjdE1hcDogZXZlbnRPYmplY3RNYXBcbiAgICB9KTtcbiAgfVxuXG4gIGxldCBldmVudE9iamVjdCA9IGVsZW1lbnQuZXZlbnRPYmplY3RNYXBbZXZlbnRUeXBlXTtcblxuICBpZiAoIWV2ZW50T2JqZWN0KSB7XG4gICAgZXZlbnRPYmplY3QgPSBjcmVhdGVFdmVudE9iamVjdCgpO1xuXG4gICAgZWxlbWVudC5ldmVudE9iamVjdE1hcFtldmVudFR5cGVdID0gZXZlbnRPYmplY3Q7XG4gIH1cblxuICBldmVudE9iamVjdC5hZGRIYW5kbGVyKGVsZW1lbnQsIGV2ZW50VHlwZSwgaGFuZGxlciwgaW50ZXJtZWRpYXRlSGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIG9mZkV2ZW50KGVsZW1lbnQsIGV2ZW50VHlwZSwgaGFuZGxlcikge1xuICBjb25zdCBldmVudE9iamVjdCA9IGVsZW1lbnQuZXZlbnRPYmplY3RNYXBbZXZlbnRUeXBlXSxcbiAgICAgICAgbm9uZVJlbWFpbmluZyA9IGV2ZW50T2JqZWN0LnJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRUeXBlLCBoYW5kbGVyKTtcblxuICBpZiAobm9uZVJlbWFpbmluZykge1xuICAgIGRlbGV0ZSBlbGVtZW50LmV2ZW50T2JqZWN0TWFwW2V2ZW50VHlwZV07XG4gIH1cblxuICBjb25zdCBldmVudFR5cGVzID0gT2JqZWN0LmtleXMoZWxlbWVudC5ldmVudE9iamVjdE1hcCk7XG5cbiAgaWYgKGV2ZW50VHlwZXMubGVuZ3RoID09PSAwKSB7XG4gICAgZGVsZXRlIGVsZW1lbnQuZXZlbnRPYmplY3RNYXA7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRXZlbnRPYmplY3QoKSB7XG4gIGNvbnN0IGV2ZW50TGlzdGVuZXJzID0gW107XG5cbiAgZnVuY3Rpb24gYWRkSGFuZGxlcihlbGVtZW50LCBldmVudFR5cGUsIGhhbmRsZXIsIGludGVybWVkaWF0ZUhhbmRsZXIpIHtcbiAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZWxlbWVudCwgIC8vL1xuICAgICAgICAgIGV2ZW50TGlzdGVuZXIgPSBjcmVhdGVFdmVudExpc3RlbmVyKGhhbmRsZXIsIGludGVybWVkaWF0ZUhhbmRsZXIsIHRhcmdldEVsZW1lbnQpO1xuXG4gICAgZWxlbWVudC5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBldmVudExpc3RlbmVyKTtcblxuICAgIGV2ZW50TGlzdGVuZXJzLnB1c2goZXZlbnRMaXN0ZW5lcik7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIGV2ZW50VHlwZSwgaGFuZGxlciA9IG51bGwpIHtcbiAgICBpZiAoaGFuZGxlciA9PT0gbnVsbCkge1xuICAgICAgZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbihldmVudExpc3RlbmVyKSB7XG4gICAgICAgIGVsZW1lbnQuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgZXZlbnRMaXN0ZW5lcik7XG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgc3RhcnQgPSAwO1xuXG4gICAgICBldmVudExpc3RlbmVycy5zcGxpY2Uoc3RhcnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbmRleCA9IGluZGV4T2ZFdmVudExpc3RlbmVyKGV2ZW50TGlzdGVuZXJzLCBoYW5kbGVyKSxcbiAgICAgICAgICAgIGV2ZW50TGlzdGVuZXIgPSBldmVudExpc3RlbmVyc1tpbmRleF07XG5cbiAgICAgIGVsZW1lbnQuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgZXZlbnRMaXN0ZW5lcik7XG5cbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgICAgZXZlbnRMaXN0ZW5lcnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gICAgfVxuXG4gICAgY29uc3Qgbm9uZVJlbWFpbmluZyA9IChldmVudExpc3RlbmVycy5sZW5ndGggPT09IDApOyAgLy8vXG5cbiAgICByZXR1cm4gbm9uZVJlbWFpbmluZztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYWRkSGFuZGxlcjogYWRkSGFuZGxlcixcbiAgICByZW1vdmVIYW5kbGVyOiByZW1vdmVIYW5kbGVyXG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUV2ZW50TGlzdGVuZXIoaGFuZGxlciwgaW50ZXJtZWRpYXRlSGFuZGxlciwgdGFyZ2V0RWxlbWVudCkge1xuICBpZiAodHlwZW9mIGludGVybWVkaWF0ZUhhbmRsZXIgPT09ICdvYmplY3QnKSB7XG4gICAgY29uc3Qgb2JqZWN0ID0gaW50ZXJtZWRpYXRlSGFuZGxlcjsgIC8vL1xuXG4gICAgaW50ZXJtZWRpYXRlSGFuZGxlciA9IGNyZWF0ZUJpbmRpbmdJbnRlcm1lZGlhdGVIYW5kbGVyKG9iamVjdCk7IC8vL1xuICB9XG5cbiAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgY29uc3QgcHJldmVudERlZmF1bHQgPSAoaW50ZXJtZWRpYXRlSGFuZGxlciAhPT0gdW5kZWZpbmVkKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcm1lZGlhdGVIYW5kbGVyKGhhbmRsZXIsIGV2ZW50LCB0YXJnZXRFbGVtZW50KSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIoZXZlbnQsIHRhcmdldEVsZW1lbnQpO1xuXG4gICAgaWYgKHByZXZlbnREZWZhdWx0ID09PSB0cnVlKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9O1xuXG4gIE9iamVjdC5hc3NpZ24oZXZlbnRMaXN0ZW5lciwge1xuICAgIGhhbmRsZXI6IGhhbmRsZXJcbiAgfSk7XG5cbiAgcmV0dXJuIGV2ZW50TGlzdGVuZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJpbmRpbmdJbnRlcm1lZGlhdGVIYW5kbGVyKG9iamVjdCkge1xuICBjb25zdCBiaW5kaW5nSW50ZXJtZWRpYXRlSGFuZGxlciA9IGZ1bmN0aW9uKGhhbmRsZXIsIGV2ZW50LCB0YXJnZXRFbGVtZW50KSB7XG4gICAgY29uc3QgcHJldmVudERlZmF1bHQgPSBoYW5kbGVyLmNhbGwob2JqZWN0LCBldmVudCwgdGFyZ2V0RWxlbWVudCk7XG5cbiAgICByZXR1cm4gcHJldmVudERlZmF1bHQ7XG4gIH07XG5cbiAgcmV0dXJuIGJpbmRpbmdJbnRlcm1lZGlhdGVIYW5kbGVyO1xufVxuXG5mdW5jdGlvbiBpbmRleE9mRXZlbnRMaXN0ZW5lcihldmVudExpc3RlbmVycywgaGFuZGxlcikge1xuICBsZXQgZm91bmRJbmRleCA9IHVuZGVmaW5lZDsgLy8vXG5cbiAgZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbihldmVudExpc3RlbmVyLCBpbmRleCkge1xuICAgIGlmIChldmVudExpc3RlbmVyLmhhbmRsZXIgPT09IGhhbmRsZXIpIHsgIC8vL1xuICAgICAgZm91bmRJbmRleCA9IGluZGV4O1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgaW5kZXggPSBmb3VuZEluZGV4OyAvLy9cblxuICByZXR1cm4gaW5kZXg7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFRleHRFbGVtZW50ID0gcmVxdWlyZSgnLi4vdGV4dEVsZW1lbnQnKTtcblxuZnVuY3Rpb24gYWRkVG8ocGFyZW50RWxlbWVudCkge1xuICB1cGRhdGVQYXJlbnRDb250ZXh0KHRoaXMsIHBhcmVudEVsZW1lbnQpO1xuXG4gIHBhcmVudEVsZW1lbnQuYWRkKHRoaXMpO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRUbyhwYXJlbnRFbGVtZW50KSB7XG4gIHVwZGF0ZVBhcmVudENvbnRleHQodGhpcywgcGFyZW50RWxlbWVudCk7XG5cbiAgcGFyZW50RWxlbWVudC5hcHBlbmQodGhpcyk7XG59XG5cbmZ1bmN0aW9uIHByZXBlbmRUbyhwYXJlbnRFbGVtZW50KSB7XG4gIHVwZGF0ZVBhcmVudENvbnRleHQodGhpcywgcGFyZW50RWxlbWVudCk7XG5cbiAgcGFyZW50RWxlbWVudC5wcmVwZW5kKHRoaXMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVGcm9tKHBhcmVudEVsZW1lbnQpIHtcbiAgcGFyZW50RWxlbWVudC5yZW1vdmUodGhpcyk7XG59XG5cbmZ1bmN0aW9uIGFzc2lnbkNvbnRleHQobmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLmNvbnRleHQpLCB0aGVuRGVsZXRlID0gdHJ1ZSkge1xuICBuYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuY29udGV4dFtuYW1lXSxcbiAgICAgICAgICBkZXNjcmlwdG9yID0ge1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgICAgfTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBuYW1lLCBkZXNjcmlwdG9yKTtcblxuICAgIGlmICh0aGVuRGVsZXRlKSB7XG4gICAgICBkZWxldGUgdGhpcy5jb250ZXh0W25hbWVdO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMpKTtcbiAgXG4gIGlmICh0aGVuRGVsZXRlKSB7XG4gICAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLmNvbnRleHQpLFxuICAgICAgICAgIG5hbWVzTGVuZ3RoID0gbmFtZXMubGVuZ3RoOyAvLy9cbiAgICBcbiAgICBpZiAobmFtZXNMZW5ndGggPT09IDApIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmNvbnRleHQ7XG4gICAgfSBcbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVByb3BlcnRpZXMocHJvcGVydGllcyA9IHt9LCBkZWZhdWx0UHJvcGVydGllcywgaWdub3JlZFByb3BlcnRpZXMpIHtcbiAgYXNzaWduKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzKTtcblxuICBjb25zdCBjaGlsZEVsZW1lbnRzID0gY2hpbGRFbGVtZW50c0Zyb21FbGVtZW50QW5kUHJvcGVydGllcyh0aGlzLCBwcm9wZXJ0aWVzKTtcblxuICB1bmFzc2lnbihwcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcyk7XG5cbiAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKTtcblxuICBuYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHByb3BlcnRpZXNbbmFtZV07XG5cbiAgICBpZiAoZmFsc2UpIHtcblxuICAgIH0gZWxzZSBpZiAoaXNIYW5kbGVyTmFtZShuYW1lKSkge1xuICAgICAgYWRkSGFuZGxlcih0aGlzLCBuYW1lLCB2YWx1ZSk7XG4gICAgfSBlbHNlIGlmIChpc0F0dHJpYnV0ZU5hbWUobmFtZSkpIHtcbiAgICAgIGFkZEF0dHJpYnV0ZSh0aGlzLCBuYW1lLCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghdGhpcy5oYXNPd25Qcm9wZXJ0eSgncHJvcGVydGllcycpKSB7XG4gICAgICAgIGNvbnN0IHByb3BlcnRpZXMgPSB7fTtcblxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHtcbiAgICAgICAgICBwcm9wZXJ0aWVzOiBwcm9wZXJ0aWVzXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnByb3BlcnRpZXNbbmFtZV0gPSB2YWx1ZTtcbiAgICB9XG4gIH0uYmluZCh0aGlzKSk7XG5cbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IHRoaXM7IC8vL1xuXG4gIGNoaWxkRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihjaGlsZEVsZW1lbnQpIHtcbiAgICBjaGlsZEVsZW1lbnQuYWRkVG8ocGFyZW50RWxlbWVudCk7XG4gIH0uYmluZCh0aGlzKSk7XG59XG5cbmZ1bmN0aW9uIGdldFByb3BlcnRpZXMoKSB7XG4gIHJldHVybiB0aGlzLnByb3BlcnRpZXM7XG59XG5cbmZ1bmN0aW9uIGdldENvbnRleHQoKSB7XG4gIHJldHVybiB0aGlzLmNvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIGdldFN0YXRlKCkge1xuICByZXR1cm4gdGhpcy5zdGF0ZTtcbn1cblxuZnVuY3Rpb24gc2V0U3RhdGUoc3RhdGUpIHtcbiAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xufVxuXG5mdW5jdGlvbiBmcm9tU3RhdGUobmFtZSkge1xuICBjb25zdCB2YWx1ZSA9IHRoaXMuc3RhdGVbbmFtZV07XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVTdGF0ZSh1cGRhdGUpIHtcbiAgT2JqZWN0LmFzc2lnbih0aGlzLnN0YXRlLCB1cGRhdGUpO1xufVxuXG5jb25zdCBqc3hNaXhpbiA9IHtcbiAgYWRkVG86IGFkZFRvLFxuICBhcHBlbmRUbzogYXBwZW5kVG8sXG4gIHByZXBlbmRUbzogcHJlcGVuZFRvLFxuICByZW1vdmVGcm9tOiByZW1vdmVGcm9tLFxuICBhc3NpZ25Db250ZXh0OiBhc3NpZ25Db250ZXh0LFxuICBhcHBseVByb3BlcnRpZXM6IGFwcGx5UHJvcGVydGllcyxcbiAgZ2V0UHJvcGVydGllczogZ2V0UHJvcGVydGllcyxcbiAgZ2V0Q29udGV4dDogZ2V0Q29udGV4dCxcbiAgZ2V0U3RhdGU6IGdldFN0YXRlLFxuICBzZXRTdGF0ZTogc2V0U3RhdGUsXG4gIGZyb21TdGF0ZTogZnJvbVN0YXRlLFxuICB1cGRhdGVTdGF0ZTogdXBkYXRlU3RhdGVcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ganN4TWl4aW47XG5cbmZ1bmN0aW9uIGNoaWxkRWxlbWVudHNGcm9tRWxlbWVudEFuZFByb3BlcnRpZXMoZWxlbWVudCwgcHJvcGVydGllcykge1xuICBsZXQgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnQuY2hpbGRFbGVtZW50cyA/XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNoaWxkRWxlbWVudHMocHJvcGVydGllcykgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzLmNoaWxkRWxlbWVudHM7XG5cbiAgY2hpbGRFbGVtZW50cyA9IChjaGlsZEVsZW1lbnRzICE9PSB1bmRlZmluZWQpID9cbiAgICAgICAgICAgICAgICAgICAoKGNoaWxkRWxlbWVudHMgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEVsZW1lbnRzIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjaGlsZEVsZW1lbnRzXSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXTtcblxuICBjaGlsZEVsZW1lbnRzID0gY2hpbGRFbGVtZW50cy5tYXAoZnVuY3Rpb24oY2hpbGRFbGVtZW50KSB7XG4gICAgaWYgKHR5cGVvZiBjaGlsZEVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCB0ZXh0ID0gY2hpbGRFbGVtZW50LCAgLy8vXG4gICAgICAgICAgICB0ZXh0RWxlbWVudCA9IG5ldyBUZXh0RWxlbWVudCh0ZXh0KTtcblxuICAgICAgY2hpbGRFbGVtZW50ID0gdGV4dEVsZW1lbnQ7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZEVsZW1lbnQ7XG4gIH0pO1xuXG4gIHJldHVybiBjaGlsZEVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiB1bmFzc2lnbihwcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcyA9IFtdKSB7XG4gIGNvbnN0IGlnbm9yZWRQcm9wZXJ0eU5hbWVzID0gaWdub3JlZFByb3BlcnRpZXM7IC8vL1xuXG4gIGlnbm9yZWRQcm9wZXJ0eU5hbWVzLmZvckVhY2goZnVuY3Rpb24oaWdub3JlZFByb3BlcnR5TmFtZSkge1xuICAgIGlmIChwcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KGlnbm9yZWRQcm9wZXJ0eU5hbWUpKSB7XG4gICAgICBkZWxldGUgcHJvcGVydGllc1tpZ25vcmVkUHJvcGVydHlOYW1lXTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhc3NpZ24ocHJvcGVydGllcywgZGVmYXVsdFByb3BlcnRpZXMgPSB7fSkge1xuICBjb25zdCBkZWZhdWx0UHJvcGVydHlOYW1lcyA9IE9iamVjdC5rZXlzKGRlZmF1bHRQcm9wZXJ0aWVzKTtcblxuICBkZWZhdWx0UHJvcGVydHlOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKGRlZmF1bHRQcm9wZXJ0eU5hbWUpIHtcbiAgICBpZiAoIXByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoZGVmYXVsdFByb3BlcnR5TmFtZSkpIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRQcm9wZXJ0eVZhbHVlID0gZGVmYXVsdFByb3BlcnRpZXNbZGVmYXVsdFByb3BlcnR5TmFtZV07XG5cbiAgICAgIHByb3BlcnRpZXNbZGVmYXVsdFByb3BlcnR5TmFtZV0gPSBkZWZhdWx0UHJvcGVydHlWYWx1ZTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRIYW5kbGVyKGVsZW1lbnQsIG5hbWUsIHZhbHVlKSB7XG4gIGNvbnN0IGV2ZW50VHlwZSA9IG5hbWUuc3Vic3RyKDIpLnRvTG93ZXJDYXNlKCksIC8vL1xuICAgICAgICBoYW5kbGVyID0gdmFsdWU7ICAvLy9cblxuICBlbGVtZW50Lm9uKGV2ZW50VHlwZSwgaGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJpYnV0ZShlbGVtZW50LCBuYW1lLCB2YWx1ZSkge1xuICBpZiAobmFtZSA9PT0gJ2NsYXNzTmFtZScpIHtcbiAgICBuYW1lID0gJ2NsYXNzJztcbiAgfVxuXG4gIGlmIChuYW1lID09PSAnaHRtbEZvcicpIHtcbiAgICBuYW1lID0gJ2Zvcic7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG5cbiAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgZWxlbWVudC5kb21FbGVtZW50W25hbWVdW2tleV0gPSB2YWx1ZVtrZXldO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHZhbHVlID0gbmFtZTsgLy8vXG5cbiAgICAgIGVsZW1lbnQuYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5hZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVBhcmVudENvbnRleHQoZWxlbWVudCwgcGFyZW50RWxlbWVudCkge1xuICBjb25zdCBwYXJlbnRDb250ZXh0ID0gZWxlbWVudC5wYXJlbnRDb250ZXh0ID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5wYXJlbnRDb250ZXh0KCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY29udGV4dDtcblxuICBpZiAocGFyZW50Q29udGV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKCFwYXJlbnRFbGVtZW50Lmhhc093blByb3BlcnR5KCdjb250ZXh0JykpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB7fTtcblxuICAgICAgT2JqZWN0LmFzc2lnbihwYXJlbnRFbGVtZW50LCB7XG4gICAgICAgIGNvbnRleHQ6IGNvbnRleHRcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHBhcmVudEVsZW1lbnQuY29udGV4dCA9IE9iamVjdC5hc3NpZ24ocGFyZW50RWxlbWVudC5jb250ZXh0LCBwYXJlbnRDb250ZXh0KTtcbiAgfVxuXG4gIGNvbnN0IHByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihlbGVtZW50KSxcbiAgICAgICAgcHJvdG90eXBlQ29uc3RydWN0b3IgPSBwcm90b3R5cGUuY29uc3RydWN0b3IsIC8vL1xuICAgICAgICBwcm90b3R5cGVDb25zdHJ1Y3Rvck5hbWUgPSBwcm90b3R5cGVDb25zdHJ1Y3Rvci5uYW1lOyAvLy9cblxuICBpZiAocHJvdG90eXBlQ29uc3RydWN0b3JOYW1lID09PSAnRWxlbWVudCcpIHtcbiAgICBkZWxldGUgZWxlbWVudC5jb250ZXh0O1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzSGFuZGxlck5hbWUobmFtZSkge1xuICByZXR1cm4gbmFtZS5tYXRjaCgvXm9uLyk7XG59XG5cbmZ1bmN0aW9uIGlzQXR0cmlidXRlTmFtZShuYW1lKSB7XG4gIHJldHVybiBhdHRyaWJ1dGVOYW1lcy5pbmNsdWRlcyhuYW1lKTtcbn1cblxuY29uc3QgYXR0cmlidXRlTmFtZXMgPSBbXG4gICdhY2NlcHQnLCAnYWNjZXB0Q2hhcnNldCcsICdhY2Nlc3NLZXknLCAnYWN0aW9uJywgJ2FsbG93RnVsbFNjcmVlbicsICdhbGxvd1RyYW5zcGFyZW5jeScsICdhbHQnLCAnYXN5bmMnLCAnYXV0b0NvbXBsZXRlJywgJ2F1dG9Gb2N1cycsICdhdXRvUGxheScsXG4gICdjYXB0dXJlJywgJ2NlbGxQYWRkaW5nJywgJ2NlbGxTcGFjaW5nJywgJ2NoYWxsZW5nZScsICdjaGFyU2V0JywgJ2NoZWNrZWQnLCAnY2l0ZScsICdjbGFzc0lEJywgJ2NsYXNzTmFtZScsICdjb2xTcGFuJywgJ2NvbHMnLCAnY29udGVudCcsICdjb250ZW50RWRpdGFibGUnLCAnY29udGV4dE1lbnUnLCAnY29udHJvbHMnLCAnY29vcmRzJywgJ2Nyb3NzT3JpZ2luJyxcbiAgJ2RhdGEnLCAnZGF0ZVRpbWUnLCAnZGVmYXVsdCcsICdkZWZlcicsICdkaXInLCAnZGlzYWJsZWQnLCAnZG93bmxvYWQnLCAnZHJhZ2dhYmxlJyxcbiAgJ2VuY1R5cGUnLFxuICAnZm9ybScsICdmb3JtQWN0aW9uJywgJ2Zvcm1FbmNUeXBlJywgJ2Zvcm1NZXRob2QnLCAnZm9ybU5vVmFsaWRhdGUnLCAnZm9ybVRhcmdldCcsICdmcmFtZUJvcmRlcicsXG4gICdoZWFkZXJzJywgJ2hlaWdodCcsICdoaWRkZW4nLCAnaGlnaCcsICdocmVmJywgJ2hyZWZMYW5nJywgJ2h0bWxGb3InLCAnaHR0cEVxdWl2JyxcbiAgJ2ljb24nLCAnaWQnLCAnaW5wdXRNb2RlJywgJ2ludGVncml0eScsICdpcycsXG4gICdrZXlQYXJhbXMnLCAna2V5VHlwZScsICdraW5kJyxcbiAgJ2xhYmVsJywgJ2xhbmcnLCAnbGlzdCcsICdsb29wJywgJ2xvdycsXG4gICdtYW5pZmVzdCcsICdtYXJnaW5IZWlnaHQnLCAnbWFyZ2luV2lkdGgnLCAnbWF4JywgJ21heExlbmd0aCcsICdtZWRpYScsICdtZWRpYUdyb3VwJywgJ21ldGhvZCcsICdtaW4nLCAnbWluTGVuZ3RoJywgJ211bHRpcGxlJywgJ211dGVkJyxcbiAgJ25hbWUnLCAnbm9WYWxpZGF0ZScsICdub25jZScsXG4gICdvcGVuJywgJ29wdGltdW0nLFxuICAncGF0dGVybicsICdwbGFjZWhvbGRlcicsICdwb3N0ZXInLCAncHJlbG9hZCcsICdwcm9maWxlJyxcbiAgJ3JhZGlvR3JvdXAnLCAncmVhZE9ubHknLCAncmVsJywgJ3JlcXVpcmVkJywgJ3JldmVyc2VkJywgJ3JvbGUnLCAncm93U3BhbicsICdyb3dzJyxcbiAgJ3NhbmRib3gnLCAnc2NvcGUnLCAnc2NvcGVkJywgJ3Njcm9sbGluZycsICdzZWFtbGVzcycsICdzZWxlY3RlZCcsICdzaGFwZScsICdzaXplJywgJ3NpemVzJywgJ3NwYW4nLCAnc3BlbGxDaGVjaycsICdzcmMnLCAnc3JjRG9jJywgJ3NyY0xhbmcnLCAnc3JjU2V0JywgJ3N0YXJ0JywgJ3N0ZXAnLCAnc3R5bGUnLCAnc3VtbWFyeScsXG4gICd0YWJJbmRleCcsICd0YXJnZXQnLCAndGl0bGUnLCAndHlwZScsXG4gICd1c2VNYXAnLFxuICAndmFsdWUnLFxuICAnd2lkdGgnLFxuICAnd21vZGUnLFxuICAnd3JhcCdcbl07XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIG9uS2V5VXAoaGFuZGxlciwgaW50ZXJtZWRpYXRlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVIYW5kbGVyKSB7XG4gIHRoaXMub24oJ2tleXVwJywgaGFuZGxlciwgaW50ZXJtZWRpYXRlSGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIG9uS2V5RG93bihoYW5kbGVyLCBpbnRlcm1lZGlhdGVIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUhhbmRsZXIpIHtcbiAgdGhpcy5vbigna2V5ZG93bicsIGhhbmRsZXIsIGludGVybWVkaWF0ZUhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvZmZLZXlVcChoYW5kbGVyKSB7IHRoaXMub2ZmKCdrZXl1cCcsIGhhbmRsZXIpOyB9XG5cbmZ1bmN0aW9uIG9mZktleURvd24oaGFuZGxlcikgeyB0aGlzLm9mZigna2V5ZG93bicsIGhhbmRsZXIpOyB9XG5cbmNvbnN0IGtleU1peGluID0ge1xuICBvbktleVVwOiBvbktleVVwLFxuICBvbktleURvd246IG9uS2V5RG93bixcbiAgb2ZmS2V5VXA6IG9mZktleVVwLFxuICBvZmZLZXlEb3duOiBvZmZLZXlEb3duXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGtleU1peGluO1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlSGFuZGxlcihoYW5kbGVyLCBldmVudCwgdGFyZ2V0RWxlbWVudCkge1xuICBjb25zdCBrZXlDb2RlID0gZXZlbnQua2V5Q29kZSxcbiAgICAgICAgcHJldmVudERlZmF1bHQgPSBoYW5kbGVyKGtleUNvZGUsIHRhcmdldEVsZW1lbnQpO1xuXG4gIHJldHVybiBwcmV2ZW50RGVmYXVsdDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gb25Nb3VzZVVwKGhhbmRsZXIsIGludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlSGFuZGxlcikge1xuICB0aGlzLm9uKCdtb3VzZXVwJywgaGFuZGxlciwgaW50ZXJtZWRpYXRlSGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIG9uTW91c2VEb3duKGhhbmRsZXIsIGludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlSGFuZGxlcikge1xuICB0aGlzLm9uKCdtb3VzZWRvd24nLCBoYW5kbGVyLCBpbnRlcm1lZGlhdGVIYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gb25Nb3VzZU92ZXIoaGFuZGxlciwgaW50ZXJtZWRpYXRlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVIYW5kbGVyKSB7XG4gIHRoaXMub24oJ21vdXNlb3ZlcicsIGhhbmRsZXIsIGludGVybWVkaWF0ZUhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvbk1vdXNlT3V0KGhhbmRsZXIsIGludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlSGFuZGxlcikge1xuICB0aGlzLm9uKCdtb3VzZW91dCcsIGhhbmRsZXIsIGludGVybWVkaWF0ZUhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvbk1vdXNlTW92ZShoYW5kbGVyLCBpbnRlcm1lZGlhdGVIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUhhbmRsZXIpIHtcbiAgdGhpcy5vbignbW91c2Vtb3ZlJywgaGFuZGxlciwgaW50ZXJtZWRpYXRlSGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIG9mZk1vdXNlVXAoaGFuZGxlcikgeyB0aGlzLm9mZignbW91c2V1cCcsIGhhbmRsZXIpOyB9XG5cbmZ1bmN0aW9uIG9mZk1vdXNlRG93bihoYW5kbGVyKSB7IHRoaXMub2ZmKCdtb3VzZWRvd24nLCBoYW5kbGVyKTsgfVxuXG5mdW5jdGlvbiBvZmZNb3VzZU92ZXIoaGFuZGxlcikgeyB0aGlzLm9mZignbW91c2VvdmVyJywgaGFuZGxlcik7IH1cblxuZnVuY3Rpb24gb2ZmTW91c2VPdXQoaGFuZGxlcikgeyB0aGlzLm9mZignbW91c2VvdXQnLCBoYW5kbGVyKTsgfVxuXG5mdW5jdGlvbiBvZmZNb3VzZU1vdmUoaGFuZGxlcikgeyB0aGlzLm9mZignbW91c2Vtb3ZlJywgaGFuZGxlcik7IH1cblxuY29uc3QgbW91c2VNaXhpbiA9IHtcbiAgb25Nb3VzZVVwOiBvbk1vdXNlVXAsXG4gIG9uTW91c2VEb3duOiBvbk1vdXNlRG93bixcbiAgb25Nb3VzZU92ZXI6IG9uTW91c2VPdmVyLFxuICBvbk1vdXNlT3V0OiBvbk1vdXNlT3V0LFxuICBvbk1vdXNlTW92ZTogb25Nb3VzZU1vdmUsXG4gIG9mZk1vdXNlVXA6IG9mZk1vdXNlVXAsXG4gIG9mZk1vdXNlRG93bjogb2ZmTW91c2VEb3duLFxuICBvZmZNb3VzZU92ZXI6IG9mZk1vdXNlT3ZlcixcbiAgb2ZmTW91c2VPdXQ6IG9mZk1vdXNlT3V0LFxuICBvZmZNb3VzZU1vdmU6IG9mZk1vdXNlTW92ZVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBtb3VzZU1peGluO1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlSGFuZGxlcihoYW5kbGVyLCBldmVudCwgdGFyZ2V0RWxlbWVudCkge1xuICBjb25zdCBtb3VzZVRvcCA9IGV2ZW50LnBhZ2VZLCAgLy8vXG4gICAgICAgIG1vdXNlTGVmdCA9IGV2ZW50LnBhZ2VYLCAvLy9cbiAgICAgICAgbW91c2VCdXR0b24gPSBldmVudC5idXR0b24sIC8vL1xuICAgICAgICBwcmV2ZW50RGVmYXVsdCA9IGhhbmRsZXIobW91c2VUb3AsIG1vdXNlTGVmdCwgbW91c2VCdXR0b24sIHRhcmdldEVsZW1lbnQpO1xuXG4gIHJldHVybiBwcmV2ZW50RGVmYXVsdDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gb25SZXNpemUoaGFuZGxlcikge1xuICBjb25zdCBldmVudFR5cGUgPSAncmVzaXplJyxcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lciA9IHRoaXMub24oZXZlbnRUeXBlLCBoYW5kbGVyKTtcblxuICBpZiAoYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgIGFwcGVuZFJlc2l6ZU9iamVjdCh0aGlzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvZmZSZXNpemUoaGFuZGxlcikge1xuICBjb25zdCBldmVudFR5cGUgPSAncmVzaXplJyxcbiAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lciA9IHRoaXMub2ZmKGV2ZW50VHlwZSwgaGFuZGxlcik7XG5cbiAgaWYgKHJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICByZW1vdmVSZXNpemVPYmplY3QodGhpcyk7XG4gIH1cbn1cblxuY29uc3QgcmVzaXplTWl4aW4gPSB7XG4gIG9uUmVzaXplOiBvblJlc2l6ZSxcbiAgb2ZmUmVzaXplOiBvZmZSZXNpemVcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcmVzaXplTWl4aW47XG5cbmZ1bmN0aW9uIGFwcGVuZFJlc2l6ZU9iamVjdChlbGVtZW50KSB7XG4gIGNvbnN0IHJlc2l6ZU9iamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29iamVjdCcpLFxuICAgICAgICBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50LFxuICAgICAgICBzdHlsZSA9IGBkaXNwbGF5OiBibG9jazsgXG4gICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgICAgICAgICAgICAgIHRvcDogMDsgXG4gICAgICAgICAgICAgICAgIGxlZnQ6IDA7IFxuICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7IFxuICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsgXG4gICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47IFxuICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgXG4gICAgICAgICAgICAgICAgIHotaW5kZXg6IC0xO2A7XG5cbiAgcmVzaXplT2JqZWN0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBzdHlsZSk7XG4gIHJlc2l6ZU9iamVjdC5kYXRhID0gJ2Fib3V0OmJsYW5rJztcbiAgcmVzaXplT2JqZWN0LnR5cGUgPSAndGV4dC9odG1sJztcblxuICBlbGVtZW50Ll9fcmVzaXplT2JqZWN0X18gPSByZXNpemVPYmplY3Q7XG5cbiAgcmVzaXplT2JqZWN0Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgIHJlc2l6ZU9iamVjdExvYWRIYW5kbGVyKGVsZW1lbnQpXG4gIH07XG5cbiAgZG9tRWxlbWVudC5hcHBlbmRDaGlsZChyZXNpemVPYmplY3QpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVSZXNpemVPYmplY3QoZWxlbWVudCkge1xuICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50LFxuICAgICAgICByZXNpemVPYmplY3QgPSBlbGVtZW50Ll9fcmVzaXplT2JqZWN0X18sXG4gICAgICAgIG9iamVjdFdpbmRvdyA9IHJlc2l6ZU9iamVjdC5jb250ZW50RG9jdW1lbnQuZGVmYXVsdFZpZXc7ICAvLy9cblxuICBvYmplY3RXaW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplTGlzdGVuZXIpO1xuXG4gIGRvbUVsZW1lbnQucmVtb3ZlQ2hpbGQocmVzaXplT2JqZWN0KTtcbn1cblxuZnVuY3Rpb24gcmVzaXplT2JqZWN0TG9hZEhhbmRsZXIoZWxlbWVudCkge1xuICBjb25zdCByZXNpemVPYmplY3QgPSBlbGVtZW50Ll9fcmVzaXplT2JqZWN0X18sXG4gICAgICAgIHJlc2l6ZU9iamVjdFdpbmRvdyA9IHJlc2l6ZU9iamVjdC5jb250ZW50RG9jdW1lbnQuZGVmYXVsdFZpZXc7ICAvLy9cblxuICByZXNpemVPYmplY3RXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24oKSB7XG4gICAgZXZlbnRMaXN0ZW5lcihlbGVtZW50KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGV2ZW50TGlzdGVuZXIoZWxlbWVudCkge1xuICBjb25zdCB3aWR0aCA9IGVsZW1lbnQuZ2V0V2lkdGgoKSxcbiAgICAgICAgaGVpZ2h0ID0gZWxlbWVudC5nZXRIZWlnaHQoKSxcbiAgICAgICAgdGFyZ2V0RWxlbWVudCA9IGVsZW1lbnQsIC8vL1xuICAgICAgICBoYW5kbGVycyA9IGVsZW1lbnQuaGFuZGxlcnNNYXBbJ3Jlc2l6ZSddO1xuXG4gIGhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24oaGFuZGxlcil7XG4gICAgaGFuZGxlcih3aWR0aCwgaGVpZ2h0LCB0YXJnZXRFbGVtZW50KTtcbiAgfSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIG9uU2Nyb2xsKGhhbmRsZXIsIGludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlSGFuZGxlcikge1xuICB0aGlzLm9uKCdzY3JvbGwnLCBoYW5kbGVyLCBpbnRlcm1lZGlhdGVIYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gb2ZmU2Nyb2xsKGhhbmRsZXIpIHsgdGhpcy5vZmYoJ3Njcm9sbCcsIGhhbmRsZXIpOyB9XG5cbmZ1bmN0aW9uIGdldFNjcm9sbFRvcCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zY3JvbGxUb3A7IH1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsTGVmdCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zY3JvbGxMZWZ0OyB9XG5cbmZ1bmN0aW9uIHNldFNjcm9sbFRvcChzY3JvbGxUb3ApIHsgdGhpcy5kb21FbGVtZW50LnNjcm9sbFRvcCA9IHNjcm9sbFRvcDsgfVxuXG5mdW5jdGlvbiBzZXRTY3JvbGxMZWZ0KHNjcm9sbExlZnQpIHsgdGhpcy5kb21FbGVtZW50LnNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0OyB9XG5cbmNvbnN0IHNjcm9sbE1peGluID0ge1xuICBvblNjcm9sbDogb25TY3JvbGwsXG4gIG9mZlNjcm9sbDogb2ZmU2Nyb2xsLFxuICBnZXRTY3JvbGxUb3A6IGdldFNjcm9sbFRvcCxcbiAgZ2V0U2Nyb2xsTGVmdDogZ2V0U2Nyb2xsTGVmdCxcbiAgc2V0U2Nyb2xsVG9wOiBzZXRTY3JvbGxUb3AsXG4gIHNldFNjcm9sbExlZnQ6IHNldFNjcm9sbExlZnRcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc2Nyb2xsTWl4aW47XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbnRlcm1lZGlhdGVIYW5kbGVyKGhhbmRsZXIsIGV2ZW50LCB0YXJnZXRFbGVtZW50KSB7XG4gIGNvbnN0IHNjcm9sbFRvcCA9IHRhcmdldEVsZW1lbnQuZ2V0U2Nyb2xsVG9wKCksXG4gICAgICAgIHNjcm9sbExlZnQgPSB0YXJnZXRFbGVtZW50LmdldFNjcm9sbExlZnQoKSxcbiAgICAgICAgcHJldmVudERlZmF1bHQgPSBoYW5kbGVyKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCwgdGFyZ2V0RWxlbWVudCk7XG5cbiAgcmV0dXJuIHByZXZlbnREZWZhdWx0O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50JyksXG4gICAgICBUZXh0RWxlbWVudCA9IHJlcXVpcmUoJy4vdGV4dEVsZW1lbnQnKTtcblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChmaXJzdEFyZ3VtZW50LCBwcm9wZXJ0aWVzLCAuLi5jaGlsZEFyZ3VtZW50cykge1xuICBsZXQgZWxlbWVudCA9IG51bGw7XG5cbiAgaWYgKGZpcnN0QXJndW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBjaGlsZEVsZW1lbnRzRnJvbUNoaWxkQXJndW1lbnRzKGNoaWxkQXJndW1lbnRzKTtcblxuICAgIHByb3BlcnRpZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNoaWxkRWxlbWVudHM6IGNoaWxkRWxlbWVudHNcbiAgICB9LCBwcm9wZXJ0aWVzKTtcblxuICAgIGlmIChmYWxzZSkge1xuXG4gICAgfSBlbHNlIGlmIChpc1N1YmNsYXNzT2YoZmlyc3RBcmd1bWVudCwgRWxlbWVudCkpIHtcbiAgICAgIGNvbnN0IENsYXNzID0gZmlyc3RBcmd1bWVudDsgIC8vL1xuXG4gICAgICBlbGVtZW50ID0gQ2xhc3MuZnJvbVByb3BlcnRpZXMocHJvcGVydGllcyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc3QgZWxlbWVudEZ1bmN0aW9uID0gZmlyc3RBcmd1bWVudDsgIC8vL1xuXG4gICAgICBlbGVtZW50ID0gZWxlbWVudEZ1bmN0aW9uKHByb3BlcnRpZXMpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCB0YWdOYW1lID0gZmlyc3RBcmd1bWVudCwgIC8vL1xuICAgICAgICAgICAgaHRtbCA9IGA8JHt0YWdOYW1lfSAvPmA7XG5cbiAgICAgIGVsZW1lbnQgPSBFbGVtZW50LmZyb21IVE1MKEVsZW1lbnQsIGh0bWwpO1xuXG4gICAgICBlbGVtZW50LmFwcGx5UHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuY29uc3QgUmVhY3QgPSB7XG4gIGNyZWF0ZUVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnRcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cbmZ1bmN0aW9uIGNoaWxkRWxlbWVudHNGcm9tQ2hpbGRBcmd1bWVudHMoY2hpbGRBcmd1bWVudHMpIHtcbiAgY2hpbGRBcmd1bWVudHMgPSBjaGlsZEFyZ3VtZW50cy5yZWR1Y2UoZnVuY3Rpb24oY2hpbGRBcmd1bWVudHMsIGNoaWxkQXJndW1lbnQpIHtcbiAgICBjaGlsZEFyZ3VtZW50cyA9IGNoaWxkQXJndW1lbnRzLmNvbmNhdChjaGlsZEFyZ3VtZW50KTtcblxuICAgIHJldHVybiBjaGlsZEFyZ3VtZW50cztcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBjaGlsZEFyZ3VtZW50cy5tYXAoZnVuY3Rpb24oY2hpbGRBcmd1bWVudCkge1xuICAgIGxldCBjaGlsZEVsZW1lbnQ7XG4gICAgXG4gICAgaWYgKHR5cGVvZiBjaGlsZEFyZ3VtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc3QgdGV4dCA9IGNoaWxkQXJndW1lbnQsIC8vL1xuICAgICAgICAgICAgdGV4dEVsZW1lbnQgPSBuZXcgVGV4dEVsZW1lbnQodGV4dCk7XG5cbiAgICAgIGNoaWxkRWxlbWVudCA9IHRleHRFbGVtZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGlsZEVsZW1lbnQgPSBjaGlsZEFyZ3VtZW50OyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudDtcbiAgfSk7XG5cbiAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIGlzU3ViY2xhc3NPZihhcmd1bWVudCwgQ2xhc3MpIHtcbiAgbGV0IHR5cGVPZiA9IGZhbHNlO1xuXG4gIGlmIChhcmd1bWVudC5uYW1lID09PSBDbGFzcy5uYW1lKSB7IC8vL1xuICAgIHR5cGVPZiA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgYXJndW1lbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYXJndW1lbnQpOyAvLy9cblxuICAgIGlmIChhcmd1bWVudCkge1xuICAgICAgdHlwZU9mID0gaXNTdWJjbGFzc09mKGFyZ3VtZW50LCBDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHR5cGVPZjtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgT2Zmc2V0ID0gcmVxdWlyZSgnLi9taXNjL29mZnNldCcpLFxuICAgICAgQm91bmRzID0gcmVxdWlyZSgnLi9taXNjL2JvdW5kcycpO1xuXG5jbGFzcyBUZXh0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRleHQpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KTsgLy8vXG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuX19lbGVtZW50X18gPSB0aGlzO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBUZXh0RWxlbWVudC5jbG9uZSh0aGlzKTsgfVxuXG4gIGdldFRleHQoKSB7XG4gICAgY29uc3Qgbm9kZVZhbHVlID0gdGhpcy5kb21FbGVtZW50Lm5vZGVWYWx1ZSxcbiAgICAgICAgICB0ZXh0ID0gbm9kZVZhbHVlOyAvLy9cblxuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgc2V0VGV4dCh0ZXh0KSB7XG4gICAgY29uc3Qgbm9kZVZhbHVlID0gdGV4dDsgLy8vXG5cbiAgICB0aGlzLmRvbUVsZW1lbnQubm9kZVZhbHVlID0gbm9kZVZhbHVlO1xuICB9XG5cbiAgZ2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IHRvcCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRUb3AsICAvLy9cbiAgICAgICAgICBsZWZ0ID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldExlZnQsICAvLy9cbiAgICAgICAgICBvZmZzZXQgPSBuZXcgT2Zmc2V0KHRvcCwgbGVmdCk7XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIGNvbnN0IGJvdW5kaW5nQ2xpZW50UmVjdCA9IHRoaXMuZG9tRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICBib3VuZHMgPSBCb3VuZHMuZnJvbUJvdW5kaW5nQ2xpZW50UmVjdChib3VuZGluZ0NsaWVudFJlY3QpO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxuXG4gIGdldFdpZHRoKCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5kb21FbGVtZW50LmNsaWVudFdpZHRoO1xuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KCkge1xuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZG9tRWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cbiAgICByZXR1cm4gaGVpZ2h0O1xuICB9XG5cbiAgcHJlcGVuZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5wcmVwZW5kKHRoaXMpOyB9XG5cbiAgYXBwZW5kVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LmFwcGVuZCh0aGlzKTsgfVxuXG4gIGFkZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5hZGQodGhpcyk7IH1cblxuICByZW1vdmVGcm9tKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5yZW1vdmUodGhpcyk7IH1cblxuICBpbnNlcnRCZWZvcmUoc2libGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTU5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpO1xuICB9XG5cbiAgaW5zZXJ0QWZ0ZXIoc2libGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTU5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQubmV4dFNpYmxpbmcpOyAgLy8vXG4gIH1cblxuICByZW1vdmUoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZSgpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dEVsZW1lbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGV2ZW50TWl4aW4gPSByZXF1aXJlKCcuL21peGluL2V2ZW50JyksXG4gICAgICBjbGlja01peGluID0gcmVxdWlyZSgnLi9taXhpbi9jbGljaycpLFxuICAgICAgbW91c2VNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vbW91c2UnKSxcbiAgICAgIGtleU1peGluID0gcmVxdWlyZSgnLi9taXhpbi9rZXknKTtcblxuY2xhc3MgV2luZG93IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gd2luZG93O1xuICB9XG5cbiAgYXNzaWduKC4uLnNvdXJjZXMpIHtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmRvbUVsZW1lbnQ7IC8vL1xuXG4gICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIC4uLnNvdXJjZXMpO1xuICB9XG4gIFxuICBnZXRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5pbm5lcldpZHRoOyB9IC8vL1xuICBcbiAgZ2V0SGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmlubmVySGVpZ2h0OyB9IC8vL1xuXG4gIGdldFNjcm9sbFRvcCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5wYWdlWU9mZnNldDsgfSAgLy8vXG5cbiAgZ2V0U2Nyb2xsTGVmdCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5wYWdlWE9mZnNldDsgfSAvLy9cblxuICBvblJlc2l6ZShoYW5kbGVyKSB7XG4gICAgaWYgKGhhbmRsZXIuaW50ZXJtZWRpYXRlSGFuZGxlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYW5kbGVyLmludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlUmVzaXplSGFuZGxlcjtcbiAgICB9XG5cbiAgICBjb25zdCBldmVudFR5cGUgPSAncmVzaXplJztcbiAgICBcbiAgICB0aGlzLm9uKGV2ZW50VHlwZSwgaGFuZGxlcik7XG4gIH1cblxuICBvZmZSZXNpemUoaGFuZGxlcikge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9ICdyZXNpemUnO1xuXG4gICAgdGhpcy5vZmYoZXZlbnRUeXBlLCBoYW5kbGVyKTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIGV2ZW50TWl4aW4pO1xuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCBjbGlja01peGluKTtcbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwgbW91c2VNaXhpbik7XG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIGtleU1peGluKTtcblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgV2luZG93KCk7ICAvLy9cblxuZnVuY3Rpb24gZGVmYXVsdEludGVybWVkaWF0ZVJlc2l6ZUhhbmRsZXIoaGFuZGxlciwgZXZlbnQsIHRhcmdldEVsZW1lbnQpIHtcbiAgY29uc3Qgd2luZG93ID0gdGFyZ2V0RWxlbWVudCwgLy8vXG4gICAgICAgIHdpZHRoID0gd2luZG93LmdldFdpZHRoKCksXG4gICAgICAgIGhlaWdodCA9IHRhcmdldEVsZW1lbnQuZ2V0SGVpZ2h0KCksXG4gICAgICAgIHByZXZlbnREZWZhdWx0ID0gaGFuZGxlcih3aWR0aCwgaGVpZ2h0LCB0YXJnZXRFbGVtZW50KTtcblxuICByZXR1cm4gcHJldmVudERlZmF1bHQ7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBsZXhlcnMgPSB7XG4gICdMaW5lJzogcmVxdWlyZSgnLi9saWIvY29tbW9uL2xpbmUnKSxcbiAgJ1BsYWluTGV4ZXInOiByZXF1aXJlKCcuL2xpYi9wbGFpbi9sZXhlcicpLFxuICAnQk5GTGV4ZXInOiByZXF1aXJlKCcuL2xpYi9ibmYvbGV4ZXInKSxcbiAgJ0Jhc2ljTGV4ZXInOiByZXF1aXJlKCcuL2xpYi9iYXNpYy9sZXhlcicpLFxuICAnRmxvcmVuY2VMZXhlcic6IHJlcXVpcmUoJy4vbGliL2Zsb3JlbmNlL2xleGVyJyksXG4gICdTaWduaWZpY2FudFRva2VuJzogcmVxdWlyZSgnLi9saWIvY29tbW9uL3Rva2VuL3NpZ25pZmljYW50JyksXG4gICdOb25TaWduaWZpY2FudFRva2VuJzogcmVxdWlyZSgnLi9saWIvY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50JyksXG4gICdTdHJpbmdUb2tlbic6IHJlcXVpcmUoJy4vbGliL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9zdHJpbmcnKSxcbiAgJ0VuZE9mTGluZVRva2VuJzogcmVxdWlyZSgnLi9saWIvY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L2VuZE9mTGluZScpLFxuICAnV2hpdGVzcGFjZVRva2VuJzogcmVxdWlyZSgnLi9saWIvY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L3doaXRlc3BhY2UnKVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBsZXhlcnM7XG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBlbnRyaWVzID0gW1xyXG5cclxuICB7IFwidGVybWluYWxcIiA6IFwiXFxcXCt8XFxcXC18XFxcXCp8XFxcXC98XFxcXCh8XFxcXCl8XFxcXGQrXCIgfSxcclxuXHJcbiAgeyBcImVycm9yXCIgOiBcIl4uKiRcIiB9XHJcblxyXG5dO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBlbnRyaWVzO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBCYXNpY0xpbmUgPSByZXF1aXJlKCcuL2xpbmUnKSxcclxuICAgICAgZW50cmllcyA9IHJlcXVpcmUoJy4vZW50cmllcycpLFxyXG4gICAgICBSdWxlcyA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ydWxlcycpLFxyXG4gICAgICBDb21tb25MZXhlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9sZXhlcicpO1xyXG5cclxuY2xhc3MgQmFzaWNMZXhlciBleHRlbmRzIENvbW1vbkxleGVyIHtcclxuICBzdGF0aWMgZnJvbUVudHJpZXMoZW50cmllcykge1xyXG4gICAgY29uc3QgcnVsZXMgPSBSdWxlcy5mcm9tRW50cmllcyhlbnRyaWVzKSxcclxuICAgICAgICAgIGJhc2ljTGV4ZXIgPSBuZXcgQmFzaWNMZXhlcihydWxlcywgQmFzaWNMaW5lKTtcclxuXHJcbiAgICByZXR1cm4gYmFzaWNMZXhlcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcclxuICAgIGNvbnN0IGJhc2ljTGV4ZXIgPSBCYXNpY0xleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpO1xyXG5cclxuICAgIHJldHVybiBiYXNpY0xleGVyO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBCYXNpY0xleGVyO1xyXG5cclxuQmFzaWNMZXhlci5lbnRyaWVzID0gZW50cmllcztcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgQ29tbW9uTGluZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9saW5lJyksXHJcbiAgICAgIFN0cmluZ1Rva2VucyA9IHJlcXVpcmUoJy4vdG9rZW5zL3N0cmluZycpLFxyXG4gICAgICBDb21tZW50VG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMvY29tbWVudCcpLFxyXG4gICAgICBXaGl0ZXNwYWNlVG9rZW5zID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2Vucy93aGl0ZXNwYWNlJyk7XHJcblxyXG5jbGFzcyBCYXNpY0xpbmUgZXh0ZW5kcyBDb21tb25MaW5lIHtcclxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCwgY29udGV4dCwgcnVsZXMpIHsgcmV0dXJuIHN1cGVyLmZyb21Db250ZW50KEJhc2ljTGluZSwgY29udGVudCwgY29udGV4dCwgcnVsZXMsIENvbW1lbnRUb2tlbnMsIFN0cmluZ1Rva2VucywgV2hpdGVzcGFjZVRva2Vucyk7IH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBCYXNpY0xpbmU7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIENvbW1lbnRUb2tlbnMge1xyXG4gIHN0YXRpYyBwYXNzKHRva2Vuc09yUmVtYWluaW5nQ29udGVudCwgbGluZSwgY29udGV4dCkge1xyXG4gICAgY29uc3QgaW5Db21tZW50ID0gZmFsc2U7ICAvLy9cclxuXHJcbiAgICByZXR1cm4gaW5Db21tZW50O1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb21tZW50VG9rZW5zO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBTdHJpbmdUb2tlbnMge1xyXG4gIHN0YXRpYyBwYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUpIHsgXHJcblxyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBTdHJpbmdUb2tlbnM7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IGVudHJpZXMgPSBbXHJcblxyXG4gIHsgXCJyZWd1bGFyRXhwcmVzc2lvblwiOiBcIlxcXFwvW14vXStcXFxcL1wiIH0sXHJcblxyXG4gIHsgXCJzcGVjaWFsXCI6IFwiOjo9fFxcXFx8fFxcXFwofFxcXFwpfFxcXFw/fFxcXFwqfFxcXFwrfFxcXFwufM61fDt8PE5PX1dISVRFU1BBQ0U+fDxFTkRfT0ZfTElORT5cIiB9LFxyXG5cclxuICB7IFwidHlwZVwiOiBcIlxcXFxbW14vXStcXFxcXVwiIH0sXHJcblxyXG4gIHsgXCJuYW1lXCI6IFwiW1xcXFx3fH5dK1wiIH0sXHJcblxyXG4gIHsgXCJlcnJvclwiIDogXCJeLiokXCIgfVxyXG4gICAgXHJcbl07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGVudHJpZXM7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgQk5GTGluZSA9IHJlcXVpcmUoJy4vbGluZScpLFxyXG4gICAgICBlbnRyaWVzID0gcmVxdWlyZSgnLi9lbnRyaWVzJyksXHJcbiAgICAgIHNwZWNpYWxTeW1ib2xzID0gcmVxdWlyZSgnLi9zcGVjaWFsU3ltYm9scycpLFxyXG4gICAgICBSdWxlcyA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ydWxlcycpLFxyXG4gICAgICBDb21tb25MZXhlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9sZXhlcicpO1xyXG5cclxuY2xhc3MgQk5GTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgbGluZXNGcm9tQk5GKGJuZikge1xyXG4gICAgY29uc3QgY29udGVudCA9IGJuZiwgIC8vL1xyXG4gICAgICAgICAgbGluZXMgPSBzdXBlci5saW5lc0Zyb21Db250ZW50KGNvbnRlbnQpO1xyXG5cclxuICAgIHJldHVybiBsaW5lcztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tRW50cmllcyhlbnRyaWVzKSB7XHJcbiAgICBjb25zdCBydWxlcyA9IFJ1bGVzLmZyb21FbnRyaWVzKGVudHJpZXMpLFxyXG4gICAgICAgICAgYm5mTGV4ZXIgPSBuZXcgQk5GTGV4ZXIocnVsZXMsIEJORkxpbmUpO1xyXG5cclxuICAgIHJldHVybiBibmZMZXhlcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcclxuICAgIGNvbnN0IGJuZkxleGVyID0gQk5GTGV4ZXIuZnJvbUVudHJpZXMoZW50cmllcyk7XHJcblxyXG4gICAgcmV0dXJuIGJuZkxleGVyO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBCTkZMZXhlcjtcclxuXHJcbkJORkxleGVyLmVudHJpZXMgPSBlbnRyaWVzO1xyXG5cclxuQk5GTGV4ZXIuc3BlY2lhbFN5bWJvbHMgPSBzcGVjaWFsU3ltYm9scztcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgQ29tbW9uTGluZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9saW5lJyksXHJcbiAgICAgIFN0cmluZ1Rva2VucyA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbnMvc3RyaW5nJyksXHJcbiAgICAgIENvbW1lbnRUb2tlbnMgPSByZXF1aXJlKCcuL3Rva2Vucy9jb21tZW50JyksXHJcbiAgICAgIFdoaXRlc3BhY2VUb2tlbnMgPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW5zL3doaXRlc3BhY2UnKTtcclxuXHJcbmNsYXNzIEJORkxpbmUgZXh0ZW5kcyBDb21tb25MaW5lIHtcclxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCwgY29udGV4dCwgcnVsZXMpIHsgXHJcbiAgICBjb25zdCBsaW5lID0gc3VwZXIuZnJvbUNvbnRlbnQoQk5GTGluZSwgY29udGVudCwgY29udGV4dCwgcnVsZXMsIENvbW1lbnRUb2tlbnMsIFN0cmluZ1Rva2VucywgV2hpdGVzcGFjZVRva2Vucyk7XHJcblxyXG4gICAgcmV0dXJuIGxpbmU7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEJORkxpbmU7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IHNwZWNpYWxTeW1ib2xzID0ge1xyXG4gIHBsdXMgOiAnKycsXHJcbiAgZXBzaWxvbiA6ICfOtScsXHJcbiAgd2lsZGNhcmQgOiAnLicsXHJcbiAgYXN0ZXJpc2sgOiAnKicsXHJcbiAgc2VwYXJhdG9yIDogJzo6PScsXHJcbiAgdGVybWluYXRvciA6ICc7JyxcclxuICB2ZXJ0aWNhbEJhciA6ICd8JyxcclxuICBvcGVuQnJhY2tldCA6ICcoJyxcclxuICBjbG9zZUJyYWNrZXQgOiAnKScsXHJcbiAgcXVlc3Rpb25NYXJrIDogJz8nLFxyXG4gIEVORF9PRl9MSU5FIDogJzxFTkRfT0ZfTElORT4nLFxyXG4gIE5PX1dISVRFU1BBQ0UgOiAnPE5PX1dISVRFU1BBQ0U+J1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBzcGVjaWFsU3ltYm9scztcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgQ29tbWVudFRva2VucyB7XHJcbiAgc3RhdGljIHBhc3ModG9rZW5zT3JSZW1haW5pbmdDb250ZW50LCBsaW5lLCBjb250ZXh0KSB7XHJcbiAgICBjb25zdCBpbkNvbW1lbnQgPSBmYWxzZTsgIC8vL1xyXG5cclxuICAgIHJldHVybiBpbkNvbW1lbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1lbnRUb2tlbnM7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIENvbnRleHQge1xyXG4gIGNvbnN0cnVjdG9yKG1pbmltdW1MaW5lc0xlbmd0aCA9IEluZmluaXR5LCBwcmV2aW91c0xpbmVJbkNvbW1lbnQgPSBudWxsLCBmb2xsb3dpbmdMaW5lSW5Db21tZW50ID0gbnVsbCkge1xyXG4gICAgdGhpcy5taW5pbXVtTGluZXNMZW5ndGggPSBtaW5pbXVtTGluZXNMZW5ndGg7XHJcbiAgICB0aGlzLnByZXZpb3VzTGluZUluQ29tbWVudCA9IHByZXZpb3VzTGluZUluQ29tbWVudDtcclxuICAgIHRoaXMuZm9sbG93aW5nTGluZUluQ29tbWVudCA9IGZvbGxvd2luZ0xpbmVJbkNvbW1lbnQ7XHJcbiAgfVxyXG5cclxuICBnZXRNaW5pbXVtTGluZXNMZW5ndGgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5taW5pbXVtTGluZXNMZW5ndGg7XHJcbiAgfVxyXG5cclxuICBpc1ByZXZpb3VzTGluZUluQ29tbWVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLnByZXZpb3VzTGluZUluQ29tbWVudDtcclxuICB9XHJcblxyXG4gIGlzRm9sbG93aW5nTGluZUluQ29tbWVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLmZvbGxvd2luZ0xpbmVJbkNvbW1lbnQ7XHJcbiAgfVxyXG5cclxuICBzZXRQcmV2aW91c0xpbmVJbkNvbW1lbnQocHJldmlvdXNMaW5lSW5Db21tZW50KSB7XHJcbiAgICB0aGlzLnByZXZpb3VzTGluZUluQ29tbWVudCA9IHByZXZpb3VzTGluZUluQ29tbWVudDtcclxuICB9XHJcblxyXG4gIHNob3VsZFRlcm1pbmF0ZShsZW5ndGgpIHtcclxuICAgIGxldCB0ZXJtaW5hdGUgPSBmYWxzZTtcclxuXHJcbiAgICBpZiAobGVuZ3RoID49IHRoaXMubWluaW11bUxpbmVzTGVuZ3RoKSB7XHJcbiAgICAgIGlmICh0aGlzLmZvbGxvd2luZ0xpbmVJbkNvbW1lbnQgPT09IG51bGwpIHtcclxuICAgICAgICB0ZXJtaW5hdGUgPSB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5wcmV2aW91c0xpbmVJbkNvbW1lbnQgPT09IHRoaXMuZm9sbG93aW5nTGluZUluQ29tbWVudCkge1xyXG4gICAgICAgIHRlcm1pbmF0ZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGVybWluYXRlO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb250ZXh0O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBMaW5lID0gcmVxdWlyZSgnLi9saW5lJyksXHJcbiAgICAgIFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUnKSxcclxuICAgICAgUnVsZXMgPSByZXF1aXJlKCcuL3J1bGVzJyksXHJcbiAgICAgIENvbnRleHQgPSByZXF1aXJlKCcuL2NvbnRleHQnKTtcclxuXHJcbmNsYXNzIENvbW1vbkxleGVyIHtcclxuICBjb25zdHJ1Y3RvcihydWxlcywgTGluZSkge1xyXG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xyXG4gICAgdGhpcy5MaW5lID0gTGluZTtcclxuICB9XHJcblxyXG4gIGFkZGVkTGluZXNGcm9tQ29udGVudChjb250ZW50LCBmaXJzdExpbmVJbmRleCwgbWluaW11bUxpbmVzTGVuZ3RoLCBwcmV2aW91c0xpbmVJbkNvbW1lbnQsIGZvbGxvd2luZ0xpbmVJbkNvbW1lbnQpIHtcclxuICAgIGNvbnN0IGNvbnRleHQgPSBuZXcgQ29udGV4dChtaW5pbXVtTGluZXNMZW5ndGgsIHByZXZpb3VzTGluZUluQ29tbWVudCwgZm9sbG93aW5nTGluZUluQ29tbWVudCksXHJcbiAgICAgICAgICBsaW5lcyA9IHRoaXMubGluZXNGcm9tQ29udGVudChjb250ZW50LCBmaXJzdExpbmVJbmRleCwgY29udGV4dCksXHJcbiAgICAgICAgICBhZGRlZExpbmVzID0gbGluZXM7IC8vL1xyXG5cclxuICAgIHJldHVybiBhZGRlZExpbmVzO1xyXG4gIH1cclxuXHJcbiAgbGluZXNGcm9tQ29udGVudChjb250ZW50LCBmaXJzdExpbmVJbmRleCA9IDAsIGNvbnRleHQgPSBuZXcgQ29udGV4dCgpKSB7XHJcbiAgICBjb25zdCBjb250ZW50cyA9IGNvbnRlbnQuc3BsaXQoL1xcbi8pLFxyXG4gICAgICAgICAgbGluZXMgPSB0aGlzLmxpbmVzRnJvbUNvbnRlbnRzKGNvbnRlbnRzLCBmaXJzdExpbmVJbmRleCwgY29udGV4dCk7XHJcblxyXG4gICAgcmV0dXJuIGxpbmVzO1xyXG4gIH1cclxuXHJcbiAgbGluZXNGcm9tQ29udGVudHMoY29udGVudHMsIGZpcnN0TGluZUluZGV4LCBjb250ZXh0KSB7XHJcbiAgICBjb25zdCBsaW5lcyA9IFtdO1xyXG4gICAgXHJcbiAgICBsZXQgaW5kZXggPSBmaXJzdExpbmVJbmRleCwgICAgXHJcbiAgICAgICAgY29udGVudCA9IGNvbnRlbnRzW2luZGV4XTtcclxuXHJcbiAgICB3aGlsZSAoY29udGVudCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNvbnN0IGxlbmd0aCA9IGluZGV4IC0gZmlyc3RMaW5lSW5kZXgsXHJcbiAgICAgICAgICAgIHRlcm1pbmF0ZSA9IGNvbnRleHQuc2hvdWxkVGVybWluYXRlKGxlbmd0aCk7XHJcblxyXG4gICAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGxpbmUgPSB0aGlzLkxpbmUuZnJvbUNvbnRlbnQoY29udGVudCwgY29udGV4dCwgdGhpcy5ydWxlcyk7XHJcblxyXG4gICAgICBsaW5lcy5wdXNoKGxpbmUpO1xyXG5cclxuICAgICAgY29udGVudCA9IGNvbnRlbnRzWysraW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBsaW5lcztcclxuICB9XHJcbiAgXHJcbiAgc3RhdGljIHJ1bGVGcm9tRW50cnkoZW50cnkpIHsgcmV0dXJuIFJ1bGUuZnJvbUVudHJ5KGVudHJ5KTsgfVxyXG4gIFxyXG4gIHN0YXRpYyBydWxlc0Zyb21FbnRyaWVzKGVudHJpZXMpIHsgcmV0dXJuIFJ1bGVzLmZyb21FbnRyaWVzKGVudHJpZXMpOyB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ29tbW9uTGV4ZXI7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IFNpZ25pZmljYW50VG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMvc2lnbmlmaWNhbnQnKTtcclxuXHJcbmNsYXNzIExpbmUge1xyXG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQpIHtcclxuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XHJcblxyXG4gICAgdGhpcy50b2tlbnMgPSB1bmRlZmluZWQ7XHJcbiAgICBcclxuICAgIHRoaXMuaW5Db21tZW50ID0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29udGVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBnZXRUb2tlbnMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XHJcbiAgfVxyXG5cclxuICBpc0luQ29tbWVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLmluQ29tbWVudDtcclxuICB9XHJcblxyXG4gIGdldEhUTUwoKSB7XHJcbiAgICBsZXQgaHRtbCA9IHRoaXMudG9rZW5zLnJlZHVjZShmdW5jdGlvbihodG1sLCB0b2tlbikge1xyXG4gICAgICAgICAgY29uc3QgdG9rZW5IVE1MID0gdG9rZW4uZ2V0SFRNTCgpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBodG1sICs9IHRva2VuSFRNTDtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgcmV0dXJuIGh0bWw7XHJcbiAgICAgICAgfSwgJycpO1xyXG4gICAgXHJcbiAgICBodG1sICs9ICdcXG4nOyAvLy9cclxuICAgIFxyXG4gICAgcmV0dXJuIGh0bWw7XHJcbiAgfVxyXG5cclxuICBzZXRUb2tlbnModG9rZW5zKSB7XHJcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcclxuICB9XHJcblxyXG4gIHNldEluQ29tbWVudChpbkNvbW1lbnQpIHtcclxuICAgIHRoaXMuaW5Db21tZW50ID0gaW5Db21tZW50O1xyXG4gIH1cclxuXHJcbiAgcHVzaFRva2VuKHRva2VuKSB7XHJcbiAgICB0aGlzLnRva2Vucy5wdXNoKHRva2VuKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tQ29udGVudChMaW5lLCBjb250ZW50LCBjb250ZXh0LCBydWxlcywgQ29tbWVudFRva2VucywgU3RyaW5nVG9rZW5zLCBXaGl0ZXNwYWNlVG9rZW5zKSB7XHJcbiAgICBjb25zdCBsaW5lID0gbmV3IExpbmUoY29udGVudCksXHJcbiAgICAgICAgICB0b2tlbnNPckNvbnRlbnRzID0gW2NvbnRlbnRdLFxyXG4gICAgICAgICAgaW5Db21tZW50ID0gQ29tbWVudFRva2Vucy5wYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUsIGNvbnRleHQpO1xyXG5cclxuICAgIFN0cmluZ1Rva2Vucy5wYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUpO1xyXG4gICAgXHJcbiAgICBXaGl0ZXNwYWNlVG9rZW5zLnBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSk7XHJcblxyXG4gICAgY29uc3QgdG9rZW5zID0gU2lnbmlmaWNhbnRUb2tlbnMucGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lLCBydWxlcyk7XHJcblxyXG4gICAgbGluZS5zZXRUb2tlbnModG9rZW5zKTtcclxuXHJcbiAgICBsaW5lLnNldEluQ29tbWVudChpbkNvbW1lbnQpO1xyXG5cclxuICAgIHJldHVybiBsaW5lO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBMaW5lO1xyXG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwvYXJyYXknKSxcbiAgICAgIFNpZ25pZmljYW50VG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQnKTtcblxuY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKHNpZ25pZmljYW50VG9rZW5UeXBlLCByZWd1bGFyRXhwcmVzc2lvbikge1xuICAgIHRoaXMuc2lnbmlmaWNhbnRUb2tlblR5cGUgPSBzaWduaWZpY2FudFRva2VuVHlwZTtcbiAgICB0aGlzLnJlZ3VsYXJFeHByZXNzaW9uID0gcmVndWxhckV4cHJlc3Npb247XG4gIH1cbiAgXG4gIGdldFNpZ25pZmljYW50VG9rZW5UeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnNpZ25pZmljYW50VG9rZW5UeXBlO1xuICB9XG4gIFxuICBnZXRSZWd1bGFyRXhwcmVzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yZWd1bGFyRXhwcmVzc2lvbjtcbiAgfVxuICBcbiAgc2lnbmlmaWNhbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudChjb250ZW50KSB7XG4gICAgbGV0IHNpZ25pZmljYW50VG9rZW5Qb3NpdGlvbiA9IC0xO1xuICAgIFxuICAgIGNvbnN0IG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKHRoaXMucmVndWxhckV4cHJlc3Npb24pO1xuICAgIFxuICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBmaXJzdE1hdGNoID0gYXJyYXlVdGlsLmZpcnN0KG1hdGNoZXMpO1xuICAgICAgXG4gICAgICBpZiAoZmlyc3RNYXRjaCAhPT0gJycpIHtcbiAgICAgICAgc2lnbmlmaWNhbnRUb2tlblBvc2l0aW9uID0gbWF0Y2hlcy5pbmRleDsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW5Qb3NpdGlvbjtcbiAgfVxuXG4gIHNpZ25pZmljYW50VG9rZW5Gcm9tV2l0aGluQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSkge1xuICAgIGNvbnN0IG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKHRoaXMucmVndWxhckV4cHJlc3Npb24pLFxuICAgICAgICAgIGZpcnN0TWF0Y2ggPSBhcnJheVV0aWwuZmlyc3QobWF0Y2hlcyk7XG5cbiAgICBjb250ZW50ID0gZmlyc3RNYXRjaDsgLy8vXG5cbiAgICBjb25zdCB0eXBlID0gdGhpcy5zaWduaWZpY2FudFRva2VuVHlwZSwgLy8vXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IFNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnRMaW5lQW5kVHlwZShjb250ZW50LCBsaW5lLCB0eXBlKTtcblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUVudHJ5KGVudHJ5KSB7XG4gICAgY29uc3QgZW50cnlLZXlzID0gT2JqZWN0LmtleXMoZW50cnkpLFxuICAgICAgICAgIGZpcnN0RW50cnlLZXkgPSBhcnJheVV0aWwuZmlyc3QoZW50cnlLZXlzKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZSA9IGZpcnN0RW50cnlLZXksIC8vL1xuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiA9IGVudHJ5W3NpZ25pZmljYW50VG9rZW5UeXBlXSxcbiAgICAgICAgICBydWxlID0gUnVsZS5mcm9tU2lnbmlmaWNhbnRUb2tlblR5cGVBbmRSZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4oc2lnbmlmaWNhbnRUb2tlblR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybik7XG4gICAgICAgIFxuICAgIHJldHVybiBydWxlOyBcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU2lnbmlmaWNhbnRUb2tlblR5cGVBbmRSZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4oc2lnbmlmaWNhbnRUb2tlblR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybikge1xuICAgIGNvbnN0IHVuaWNvZGUgPSBpc1VuaWNvZGUocmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKSxcbiAgICAgICAgICBmbGFncyA9IHVuaWNvZGUgPyAndScgOiAnJyxcbiAgICAgICAgICByZWdFeHAgPSBuZXcgUmVnRXhwKHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiwgZmxhZ3MpLFxuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uID0gcmVnRXhwLCAvLy9cbiAgICAgICAgICBydWxlID0gbmV3IFJ1bGUoc2lnbmlmaWNhbnRUb2tlblR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZTtcblxuZnVuY3Rpb24gaXNVbmljb2RlKHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybikge1xuICBjb25zdCBtYXRjaGVzID0gcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuLm1hdGNoKC91XFx7LyksXG4gICAgICAgIHVuaWNvZGUgPSAobWF0Y2hlcyAhPT0gbnVsbCk7XG5cbiAgcmV0dXJuIHVuaWNvZGU7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUnKSxcbiAgICAgIGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwvYXJyYXknKTtcblxuY2xhc3MgUnVsZXMge1xuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuICBcbiAgcmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHsgcmV0dXJuIHRoaXMuYXJyYXkucmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpOyB9XG5cbiAgZ2V0UnVsZShkZXB0aCkge1xuICAgIGNvbnN0IHJ1bGUgPSAodGhpcy5hcnJheVtkZXB0aF0gfHwgbnVsbCk7IC8vL1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBhZGRSdWxlKHJ1bGUpIHtcbiAgICB0aGlzLmFycmF5LnVuc2hpZnQocnVsZSk7IC8vL1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUVudHJpZXMoZW50cmllcykge1xuICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW5UeXBlcyA9IHNpZ25pZmljYW50VG9rZW5UeXBlc0Zyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICAgIGFycmF5ID0gc2lnbmlmaWNhbnRUb2tlblR5cGVzLm1hcChmdW5jdGlvbihzaWduaWZpY2FudFRva2VuVHlwZSkge1xuICAgICAgICAgICAgY29uc3QgcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuID0gZmluZFJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybihzaWduaWZpY2FudFRva2VuVHlwZSwgZW50cmllcyksXG4gICAgICAgICAgICAgICAgICBydWxlID0gUnVsZS5mcm9tU2lnbmlmaWNhbnRUb2tlblR5cGVBbmRSZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4oc2lnbmlmaWNhbnRUb2tlblR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybik7XG4gICAgICBcbiAgICAgICAgICAgIHJldHVybiBydWxlOyAgICAgIFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHJ1bGVzID0gbmV3IFJ1bGVzKGFycmF5KTtcbiAgICBcbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlcztcblxuZnVuY3Rpb24gZmluZFJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybihzaWduaWZpY2FudFRva2VuVHlwZSwgZW50cmllcykge1xuICBjb25zdCByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4gPSBlbnRyaWVzLnJlZHVjZShmdW5jdGlvbihyZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4sIGVudHJ5KSB7XG4gICAgaWYgKHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgZW50cnlLZXlzID0gT2JqZWN0LmtleXMoZW50cnkpLFxuICAgICAgICAgICAgZmlyc3RFbnRyeUtleSA9IGFycmF5VXRpbC5maXJzdChlbnRyeUtleXMpLFxuICAgICAgICAgICAgZW50cnlTaWduaWZpY2FudFRva2VuVHlwZSA9IGZpcnN0RW50cnlLZXk7ICAvLy9cblxuICAgICAgaWYgKGVudHJ5U2lnbmlmaWNhbnRUb2tlblR5cGUgPT09IHNpZ25pZmljYW50VG9rZW5UeXBlKSB7XG4gICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiA9IGVudHJ5W3NpZ25pZmljYW50VG9rZW5UeXBlXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuO1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuO1xufVxuXG5mdW5jdGlvbiBzaWduaWZpY2FudFRva2VuVHlwZXNGcm9tRW50cmllcyhlbnRyaWVzKSB7XG4gIGNvbnN0IHNpZ25pZmljYW50VG9rZW5UeXBlcyA9IGVudHJpZXMubWFwKGZ1bmN0aW9uKGVudHJ5KSB7XG4gICAgY29uc3QgZW50cnlLZXlzID0gT2JqZWN0LmtleXMoZW50cnkpLFxuICAgICAgICAgIGZpcnN0RW50cnlLZXkgPSBhcnJheVV0aWwuZmlyc3QoZW50cnlLZXlzKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZSA9IGZpcnN0RW50cnlLZXk7IC8vL1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW5UeXBlO1xuICB9KTtcblxuICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlblR5cGVzO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB0b2tlblV0aWwgPSByZXF1aXJlKCcuLi8uLi91dGlsL3Rva2VuJyk7XG5cbmNsYXNzIE5vblNpZ25pZmljYW50VG9rZW4ge1xuICBjb25zdHJ1Y3Rvcihjb250ZW50LCBsaW5lLCBodG1sKSB7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIHRoaXMuaHRtbCA9IGh0bWw7XG4gIH1cblxuICBpc1NpZ25pZmljYW50KCkge1xuICAgIGNvbnN0IHNpZ25pZmljYW50ID0gZmFsc2U7XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnQ7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gIH1cbiAgXG4gIGdldExpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMubGluZTtcbiAgfVxuXG4gIGdldEhUTUwoKSB7XG4gICAgcmV0dXJuIHRoaXMuaHRtbDtcbiAgfVxuICBcbiAgZ2V0TGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQubGVuZ3RoOyAvLy9cbiAgfVxuICBcbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIE5vblNpZ25pZmljYW50VG9rZW4uY2xvbmUodGhpcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24sIE5vblNpZ25pZmljYW50VG9rZW4pOyB9XG5cbiAgc3RhdGljIGNsb25lKHRva2VuLCBzdGFydFBvc2l0aW9uID0gMCwgZW5kUG9zaXRpb24gPSB0b2tlbi5nZXRMZW5ndGgoKSwgQ2xhc3MgPSBOb25TaWduaWZpY2FudFRva2VuKSB7XG4gICAgbGV0IGNsb25lZE5vblNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gICAgaWYgKHN0YXJ0UG9zaXRpb24gIT09IGVuZFBvc2l0aW9uKSB7XG4gICAgICBjb25zdCBsaW5lID0gdG9rZW4uZ2V0TGluZSgpO1xuXG4gICAgICBsZXQgY29udGVudCA9IHRva2VuLmdldENvbnRlbnQoKTtcbiAgICAgIFxuICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTtcblxuICAgICAgY2xvbmVkTm9uU2lnbmlmaWNhbnRUb2tlbiA9IENsYXNzLmZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBDbGFzcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsb25lZE5vblNpZ25pZmljYW50VG9rZW47XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSwgQ2xhc3MgPSBOb25TaWduaWZpY2FudFRva2VuKSB7XG4gICAgY29uc3QgaHRtbCA9IENsYXNzLmh0bWxGcm9tQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICB0b2tlbiA9IG5ldyBDbGFzcyhjb250ZW50LCBsaW5lLCBodG1sKTtcblxuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBodG1sRnJvbUNvbnRlbnQoY29udGVudCkge1xuICAgIGNvbnN0IHNhbml0aXNlZENvbnRlbnQgPSB0b2tlblV0aWwuc2FuaXRpc2VDb250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIGh0bWwgPSBzYW5pdGlzZWRDb250ZW50O1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb25TaWduaWZpY2FudFRva2VuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB0b2tlblV0aWwgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsL3Rva2VuJyksXG4gICAgICBOb25TaWduaWZpY2FudFRva2VuID0gcmVxdWlyZSgnLi4vbm9uU2lnbmlmaWNhbnQnKTtcblxuY2xhc3MgQ29tbWVudFRva2VuIGV4dGVuZHMgTm9uU2lnbmlmaWNhbnRUb2tlbiB7XG4gIG1lcmdlKGNvbW1lbnRUb2tlbikge1xuICAgIGxldCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCk7XG4gICAgXG4gICAgY29uc3QgbGluZSA9IHRoaXMuZ2V0TGluZSgpLFxuICAgICAgICAgIGNvbW1lbnRUb2tlbkNvbnRlbnQgPSBjb21tZW50VG9rZW4uZ2V0Q29udGVudCgpO1xuXG4gICAgY29udGVudCArPSBjb21tZW50VG9rZW5Db250ZW50O1xuXG4gICAgY29tbWVudFRva2VuID0gQ29tbWVudFRva2VuLmZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lKTsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbW1lbnRUb2tlbjtcbiAgfVxuXG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBDb21tZW50VG9rZW4uY2xvbmUodGhpcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24sIENvbW1lbnRUb2tlbik7IH1cblxuICBzdGF0aWMgY2xvbmUodG9rZW4sIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCBDbGFzcyA9IENvbW1lbnRUb2tlbikgeyByZXR1cm4gTm9uU2lnbmlmaWNhbnRUb2tlbi5jbG9uZSh0b2tlbiwgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24sIENsYXNzKSB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBDbGFzcyA9IENvbW1lbnRUb2tlbikgeyByZXR1cm4gTm9uU2lnbmlmaWNhbnRUb2tlbi5mcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSwgQ2xhc3MpOyB9XG5cbiAgc3RhdGljIGh0bWxGcm9tQ29udGVudChjb250ZW50KSB7XG4gICAgY29uc3Qgc2FuaXRpc2VkQ29udGVudCA9IHRva2VuVXRpbC5zYW5pdGlzZUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgaW5uZXJIVE1MID0gc2FuaXRpc2VkQ29udGVudCwgLy8vXG4gICAgICAgICAgaHRtbCA9IGA8c3BhbiBjbGFzcz1cImNvbW1lbnRcIj4ke2lubmVySFRNTH08L3NwYW4+YDtcblxuICAgIHJldHVybiBodG1sO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tbWVudFRva2VuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWwgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi91dGlsL2FycmF5JyksXG4gICAgICBDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuLi9jb21tZW50Jyk7XG5cbmNsYXNzIEVuZE9mQ29tbWVudFRva2VuIGV4dGVuZHMgQ29tbWVudFRva2VuIHtcbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIENvbW1lbnRUb2tlbi5jbG9uZSh0aGlzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgRW5kT2ZDb21tZW50VG9rZW4pOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lKSB7IHJldHVybiBDb21tZW50VG9rZW4uZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIEVuZE9mQ29tbWVudFRva2VuKTsgfVxuXG4gIHN0YXRpYyBmcm9tV2l0aGluQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSkge1xuICAgIGxldCBlbmRPZkNvbW1lbnRUb2tlbiA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2goL15cXCpcXC8vKTtcblxuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICBjb25zdCBmaXJzdE1hdGNoID0gYXJyYXlVdGlsLmZpcnN0KG1hdGNoZXMpO1xuXG4gICAgICBjb250ZW50ID0gZmlyc3RNYXRjaDsgLy8vXG5cbiAgICAgIGVuZE9mQ29tbWVudFRva2VuID0gRW5kT2ZDb21tZW50VG9rZW4uZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpO1xuICAgIH1cblxuICAgIHJldHVybiBlbmRPZkNvbW1lbnRUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBwb3NpdGlvbldpdGhpbkNvbnRlbnQoY29udGVudCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gY29udGVudC5zZWFyY2goL1xcKlxcLy8pO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRW5kT2ZDb21tZW50VG9rZW47XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1lbnQnKTtcblxuY2xhc3MgTWlkZGxlT2ZDb21tZW50VG9rZW4gZXh0ZW5kcyBDb21tZW50VG9rZW4ge1xuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gQ29tbWVudFRva2VuLmNsb25lKHRoaXMsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCBNaWRkbGVPZkNvbW1lbnRUb2tlbik7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIGxlbmd0aCkge1xuICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cigwLCBsZW5ndGgpOyAgLy8vXG5cbiAgICBjb25zdCBtaWRkbGVPZkNvbW1lbnRUb2tlbiA9IENvbW1lbnRUb2tlbi5mcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSwgTWlkZGxlT2ZDb21tZW50VG9rZW4pO1xuXG4gICAgcmV0dXJuIG1pZGRsZU9mQ29tbWVudFRva2VuO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTWlkZGxlT2ZDb21tZW50VG9rZW47XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL3V0aWwvYXJyYXknKSxcbiAgICAgIENvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1lbnQnKTtcblxuY2xhc3MgU3RhcnRPZkNvbW1lbnRUb2tlbiBleHRlbmRzIENvbW1lbnRUb2tlbiB7XG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBDb21tZW50VG9rZW4uY2xvbmUodGhpcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24sIFN0YXJ0T2ZDb21tZW50VG9rZW4pOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lKSB7IHJldHVybiBDb21tZW50VG9rZW4uZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIFN0YXJ0T2ZDb21tZW50VG9rZW4pOyB9XG5cbiAgc3RhdGljIGZyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lKSB7XG4gICAgbGV0IHN0YXJ0T2ZDb21tZW50VG9rZW4gPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKC9eXFwvXFwqLyk7XG5cbiAgICBpZiAobWF0Y2hlcykge1xuICAgICAgY29uc3QgZmlyc3RNYXRjaCA9IGFycmF5VXRpbC5maXJzdChtYXRjaGVzKTtcblxuICAgICAgY29udGVudCA9IGZpcnN0TWF0Y2g7IC8vL1xuXG4gICAgICBzdGFydE9mQ29tbWVudFRva2VuID0gU3RhcnRPZkNvbW1lbnRUb2tlbi5mcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBzdGFydE9mQ29tbWVudFRva2VuO1xuICB9XG5cbiAgc3RhdGljIHBvc2l0aW9uV2l0aGluQ29udGVudChjb250ZW50KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBjb250ZW50LnNlYXJjaCgvXFwvXFwqLyk7XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTdGFydE9mQ29tbWVudFRva2VuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB0b2tlblV0aWwgPSByZXF1aXJlKCcuLi8uLi91dGlsL3Rva2VuJyk7XG5cbmNsYXNzIFNpZ25pZmljYW50VG9rZW4ge1xuICBjb25zdHJ1Y3Rvcihjb250ZW50LCBsaW5lLCB0eXBlLCBpbm5lckhUTUwpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmlubmVySFRNTCA9IGlubmVySFRNTDtcblxuICAgIHRoaXMuZXJyb3IgPSB1bmRlZmluZWQ7IC8vL1xuICB9XG4gIFxuICBpc1NpZ25pZmljYW50KCkge1xuICAgIGNvbnN0IHNpZ25pZmljYW50ID0gdHJ1ZTtcbiAgICBcbiAgICByZXR1cm4gc2lnbmlmaWNhbnQ7XG4gIH1cbiAgXG4gIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgfVxuICBcbiAgZ2V0TGluZSgpIHtcbiAgICByZXR1cm4gdGhpcy5saW5lO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0SW5uZXJIVE1MKCkge1xuICAgIHJldHVybiB0aGlzLmlubmVySFRNTDtcbiAgfVxuXG4gIGdldEVycm9yKCkge1xuICAgIHJldHVybiB0aGlzLmVycm9yO1xuICB9XG5cbiAgZ2V0SFRNTCgpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSAodGhpcy5lcnJvciA9PT0gdHJ1ZSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2Vycm9yJyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHlwZSxcbiAgICAgICAgICBodG1sID0gYDxzcGFuIGNsYXNzPVwiJHtjbGFzc05hbWV9XCI+JHt0aGlzLmlubmVySFRNTH08L3NwYW4+YDtcblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQubGVuZ3RoOyAvLy9cbiAgfVxuXG4gIHNldEVycm9yKGVycm9yKSB7XG4gICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICB9XG5cbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIFNpZ25pZmljYW50VG9rZW4uY2xvbmUodGhpcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24sIFNpZ25pZmljYW50VG9rZW4pIH1cblxuICBzdGF0aWMgY2xvbmUodG9rZW4sIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCBDbGFzcyA9IFNpZ25pZmljYW50VG9rZW4pIHtcbiAgICBsZXQgY2xvbmVkU2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgICBpZiAoc3RhcnRQb3NpdGlvbiAhPT0gZW5kUG9zaXRpb24pIHtcbiAgICAgIGxldCBjb250ZW50ID0gdG9rZW4uZ2V0Q29udGVudCgpO1xuXG4gICAgICBjb25zdCBsaW5lID0gdG9rZW4uZ2V0TGluZSgpLFxuICAgICAgICAgICAgdHlwZSA9IHRva2VuLmdldFR5cGUoKSxcbiAgICAgICAgICAgIGVycm9yID0gdG9rZW4uZ2V0RXJyb3IoKTtcblxuICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTtcblxuICAgICAgY2xvbmVkU2lnbmlmaWNhbnRUb2tlbiA9IENsYXNzLmZyb21Db250ZW50TGluZUFuZFR5cGUoY29udGVudCwgbGluZSwgdHlwZSk7XG5cbiAgICAgIGNsb25lZFNpZ25pZmljYW50VG9rZW4uc2V0RXJyb3IoZXJyb3IpO1xuICAgIH1cblxuICAgIHJldHVybiBjbG9uZWRTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50TGluZUFuZFR5cGUoY29udGVudCwgbGluZSwgdHlwZSwgQ2xhc3MgPSBTaWduaWZpY2FudFRva2VuKSB7XG4gICAgY29uc3QgaW5uZXJIVE1MID0gQ2xhc3MuaW5uZXJIVE1MRnJvbUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IG5ldyBDbGFzcyhjb250ZW50LCBsaW5lLCB0eXBlLCBpbm5lckhUTUwpO1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBzdGF0aWMgaW5uZXJIVE1MRnJvbUNvbnRlbnQoY29udGVudCkge1xuICAgIGNvbnN0IHNhbml0aXNlZENvbnRlbnQgPSB0b2tlblV0aWwuc2FuaXRpc2VDb250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIGlubmVySFRNTCA9IHNhbml0aXNlZENvbnRlbnQ7IC8vL1xuXG4gICAgcmV0dXJuIGlubmVySFRNTDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNpZ25pZmljYW50VG9rZW47XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFNpZ25pZmljYW50VG9rZW4gPSByZXF1aXJlKCcuLi9zaWduaWZpY2FudCcpO1xuXG5jbGFzcyBFbmRPZkxpbmVUb2tlbiBleHRlbmRzIFNpZ25pZmljYW50VG9rZW4ge1xuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5jbG9uZSh0aGlzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgRW5kT2ZMaW5lVG9rZW4pOyB9XG4gIFxuICBzdGF0aWMgZnJvbUNvbnRlbnRMaW5lQW5kVHlwZShjb250ZW50LCBsaW5lLCB0eXBlKSB7IHJldHVybiBTaWduaWZpY2FudFRva2VuLmZyb21Db250ZW50TGluZUFuZFR5cGUoY29udGVudCwgbGluZSwgdHlwZSwgRW5kT2ZMaW5lVG9rZW4pOyB9XG4gIFxuICBnZXRIVE1MKCkge1xuICAgIGNvbnN0IGh0bWwgPSAnJzsgIC8vL1xuICAgIFxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgc3RhdGljIGZyb21MaW5lKGxpbmUpIHtcbiAgICBjb25zdCBjb250ZW50ID0gJycsXG4gICAgICAgICAgdHlwZSA9IEVuZE9mTGluZVRva2VuLnR5cGUsXG4gICAgICAgICAgZW5kT2ZMaW5lVG9rZW4gPSBFbmRPZkxpbmVUb2tlbi5mcm9tQ29udGVudExpbmVBbmRUeXBlKGNvbnRlbnQsIGxpbmUsIHR5cGUpO1xuICAgIFxuICAgIHJldHVybiBlbmRPZkxpbmVUb2tlbjtcbiAgfVxufVxuXG5FbmRPZkxpbmVUb2tlbi50eXBlID0gJ2VuZE9mTGluZSc7XG5cbm1vZHVsZS5leHBvcnRzID0gRW5kT2ZMaW5lVG9rZW47XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWwvYXJyYXknKSxcbiAgICAgIFNpZ25pZmljYW50VG9rZW4gPSByZXF1aXJlKCcuLi9zaWduaWZpY2FudCcpO1xuXG5jbGFzcyBTdHJpbmdUb2tlbiBleHRlbmRzIFNpZ25pZmljYW50VG9rZW4ge1xuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5jbG9uZSh0aGlzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgU3RyaW5nVG9rZW4pOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50TGluZUFuZFR5cGUoY29udGVudCwgbGluZSwgdHlwZSkgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5mcm9tQ29udGVudExpbmVBbmRUeXBlKGNvbnRlbnQsIGxpbmUsIHR5cGUsIFN0cmluZ1Rva2VuKTsgfVxuXG4gIHN0YXRpYyBmcm9tV2l0aGluQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSkge1xuICAgIGxldCBzdHJpbmdUb2tlbiA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2goLyhcIlteXCJdKlwiKS8pO1xuXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IGZpcnN0TWF0Y2ggPSBhcnJheVV0aWwuZmlyc3QobWF0Y2hlcyk7XG4gICAgICBcbiAgICAgIGNvbnRlbnQgPSBmaXJzdE1hdGNoOyAvLy9cbiAgICAgIFxuICAgICAgY29uc3QgdHlwZSA9IFN0cmluZ1Rva2VuLnR5cGU7XG5cbiAgICAgIHN0cmluZ1Rva2VuID0gU3RyaW5nVG9rZW4uZnJvbUNvbnRlbnRMaW5lQW5kVHlwZShjb250ZW50LCBsaW5lLCB0eXBlKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHN0cmluZ1Rva2VuO1xuICB9XG5cbiAgc3RhdGljIHBvc2l0aW9uV2l0aGluQ29udGVudChjb250ZW50KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBjb250ZW50LnNlYXJjaCgvXCJbXlwiXSpcIi8pO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU3RyaW5nVG9rZW47XG5cblN0cmluZ1Rva2VuLnR5cGUgPSAnc3RyaW5nJztcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbC9hcnJheScpLFxuICAgICAgU2lnbmlmaWNhbnRUb2tlbiA9IHJlcXVpcmUoJy4uL3NpZ25pZmljYW50Jyk7XG5cbmNsYXNzIFdoaXRlc3BhY2VUb2tlbiBleHRlbmRzIFNpZ25pZmljYW50VG9rZW4ge1xuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5jbG9uZSh0aGlzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgV2hpdGVzcGFjZVRva2VuKTsgfVxuXG4gIGdldEhUTUwoKSB7XG4gICAgY29uc3QgaHRtbCA9IHRoaXMuaW5uZXJIVE1MOyAgLy8vXG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudExpbmVBbmRUeXBlKGNvbnRlbnQsIGxpbmUsIHR5cGUpIHsgcmV0dXJuIFNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnRMaW5lQW5kVHlwZShjb250ZW50LCBsaW5lLCB0eXBlLCBXaGl0ZXNwYWNlVG9rZW4pOyB9XG5cbiAgc3RhdGljIGZyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lKSB7XG4gICAgbGV0IHdoaXRlc3BhY2VUb2tlbiA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2goLyhbXFx0IF0rKS8pO1xuXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IGZpcnN0TWF0Y2ggPSBhcnJheVV0aWwuZmlyc3QobWF0Y2hlcyk7XG4gICAgICBcbiAgICAgIGNvbnRlbnQgPSBmaXJzdE1hdGNoOyAvLy9cbiAgICAgIFxuICAgICAgY29uc3QgdHlwZSA9IFdoaXRlc3BhY2VUb2tlbi50eXBlO1xuXG4gICAgICB3aGl0ZXNwYWNlVG9rZW4gPSBXaGl0ZXNwYWNlVG9rZW4uZnJvbUNvbnRlbnRMaW5lQW5kVHlwZShjb250ZW50LCBsaW5lLCB0eXBlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd2hpdGVzcGFjZVRva2VuO1xuICB9XG5cbiAgc3RhdGljIHBvc2l0aW9uV2l0aGluQ29udGVudChjb250ZW50KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBjb250ZW50LnNlYXJjaCgvW1xcdCBdKy8pO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gV2hpdGVzcGFjZVRva2VuO1xuXG5XaGl0ZXNwYWNlVG9rZW4udHlwZSA9ICd3aGl0ZXNwYWNlJzsgXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBhcnJheVV0aWwgPSByZXF1aXJlKCcuLi91dGlsL2FycmF5Jyk7XHJcblxyXG5jbGFzcyBUb2tlbnMge1xyXG4gIHN0YXRpYyBwYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUsIFRva2VuKSB7XHJcbiAgICBsZXQgb2Zmc2V0ID0gMDtcclxuICAgIFxyXG4gICAgY29uc3QgdG9rZW5zT3JDb250ZW50c0xlbmd0aCA9IHRva2Vuc09yQ29udGVudHMubGVuZ3RoO1xyXG5cclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0b2tlbnNPckNvbnRlbnRzTGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgIGNvbnN0IG9mZnNldEluZGV4ID0gaW5kZXggKyBvZmZzZXQsXHJcbiAgICAgICAgICB0b2tlbk9yQ29udGVudCA9IHRva2Vuc09yQ29udGVudHNbb2Zmc2V0SW5kZXhdO1xyXG5cclxuICAgICAgaWYgKHR5cGVvZiB0b2tlbk9yQ29udGVudCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gdG9rZW5PckNvbnRlbnQsICAvLy9cclxuICAgICAgICAgICAgdG9rZW5zT3JSZW1haW5pbmdDb250ZW50ID0gdG9rZW5zT3JSZW1haW5pbmdDb250ZW50RnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIFRva2VuKSxcclxuICAgICAgICAgICAgdG9rZW5zT3JSZW1haW5pbmdDb250ZW50TGVuZ3RoID0gdG9rZW5zT3JSZW1haW5pbmdDb250ZW50Lmxlbmd0aCxcclxuICAgICAgICAgICAgc3RhcnQgPSBvZmZzZXRJbmRleDtcclxuXHJcbiAgICAgICAgYXJyYXlVdGlsLnNwbGljZSh0b2tlbnNPckNvbnRlbnRzLCBzdGFydCwgMSwgdG9rZW5zT3JSZW1haW5pbmdDb250ZW50KTtcclxuXHJcbiAgICAgICAgb2Zmc2V0ICs9IHRva2Vuc09yUmVtYWluaW5nQ29udGVudExlbmd0aCAtIDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVG9rZW5zO1xyXG5cclxuZnVuY3Rpb24gdG9rZW5zT3JSZW1haW5pbmdDb250ZW50RnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIFRva2VuKSB7XHJcbiAgbGV0IHJlbWFpbmluZ0NvbnRlbnQsXHJcbiAgICAgIHRva2Vuc09yUmVtYWluaW5nQ29udGVudCA9IFtdLCAgICAgICBcclxuICAgICAgdG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQgPSBUb2tlbi5wb3NpdGlvbldpdGhpbkNvbnRlbnQoY29udGVudCk7XHJcbiAgXHJcbiAgd2hpbGUgKHRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ICE9PSAtMSkge1xyXG4gICAgaWYgKHRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ID4gMCkge1xyXG4gICAgICByZW1haW5pbmdDb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoMCwgdG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQpO1xyXG5cclxuICAgICAgdG9rZW5zT3JSZW1haW5pbmdDb250ZW50LnB1c2gocmVtYWluaW5nQ29udGVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG9rZW4gPSBUb2tlbi5mcm9tV2l0aGluQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSksXHJcbiAgICAgICAgICB0b2tlbkxlbmd0aCA9IHRva2VuLmdldExlbmd0aCgpLFxyXG4gICAgICAgICAgdG9rZW5PZmZzZXQgPSB0b2tlblBvc2l0aW9uV2l0aGluQ29udGVudCArIHRva2VuTGVuZ3RoO1xyXG4gICAgXHJcbiAgICB0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnQucHVzaCh0b2tlbik7XHJcbiAgICBcclxuICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyh0b2tlbk9mZnNldCk7XHJcblxyXG4gICAgdG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQgPSBUb2tlbi5wb3NpdGlvbldpdGhpbkNvbnRlbnQoY29udGVudCk7XHJcbiAgfVxyXG4gIFxyXG4gIGlmIChjb250ZW50ICE9PSAnJykge1xyXG4gICAgcmVtYWluaW5nQ29udGVudCA9IGNvbnRlbnQ7XHJcblxyXG4gICAgdG9rZW5zT3JSZW1haW5pbmdDb250ZW50LnB1c2gocmVtYWluaW5nQ29udGVudCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdG9rZW5zT3JSZW1haW5pbmdDb250ZW50O1xyXG59XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IEVuZE9mQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi4vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9lbmRPZicpLFxyXG4gICAgICBTdGFydE9mQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi4vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9zdGFydE9mJyksXHJcbiAgICAgIE1pZGRsZU9mQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi4vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9taWRkbGVPZicpO1xyXG5cclxuY2xhc3MgQ29tbWVudFRva2VucyB7XHJcbiAgc3RhdGljIHBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSwgY29udGV4dCkge1xyXG4gICAgbGV0IGNvbnRlbnQgPSB0b2tlbnNPckNvbnRlbnRzLnBvcCgpLFxyXG4gICAgICAgIGNvbW1lbnRUb2tlbixcclxuICAgICAgICBjb21tZW50VG9rZW5MZW5ndGgsXHJcbiAgICAgICAgcHJldmlvdXNMaW5lSW5Db21tZW50ID0gY29udGV4dC5pc1ByZXZpb3VzTGluZUluQ29tbWVudCgpLFxyXG4gICAgICAgIGluQ29tbWVudCA9IChwcmV2aW91c0xpbmVJbkNvbW1lbnQgPT09IHRydWUpO1xyXG5cclxuICAgIHdoaWxlIChjb250ZW50ICE9PSAnJykge1xyXG4gICAgICBsZXQgY29udGVudExlbmd0aCA9IGNvbnRlbnQubGVuZ3RoO1xyXG5cclxuICAgICAgaWYgKGluQ29tbWVudCkge1xyXG4gICAgICAgIGNvbnN0IGVuZE9mQ29tbWVudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ID0gRW5kT2ZDb21tZW50VG9rZW4ucG9zaXRpb25XaXRoaW5Db250ZW50KGNvbnRlbnQpO1xyXG5cclxuICAgICAgICBpZiAoZW5kT2ZDb21tZW50VG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQgPT09IDApIHtcclxuICAgICAgICAgIGluQ29tbWVudCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgIGNvbW1lbnRUb2tlbiA9IEVuZE9mQ29tbWVudFRva2VuLmZyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lKTtcclxuXHJcbiAgICAgICAgICBjb21tZW50VG9rZW5MZW5ndGggPSBjb21tZW50VG9rZW4uZ2V0TGVuZ3RoKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IG1pZGRsZU9mQ29tbWVudFRva2VuTGVuZ3RoID0gbWluaW11bUJhck1pbnVzT25lKGVuZE9mQ29tbWVudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50LCBjb250ZW50TGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICBjb21tZW50VG9rZW4gPSBNaWRkbGVPZkNvbW1lbnRUb2tlbi5mcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSwgbWlkZGxlT2ZDb21tZW50VG9rZW5MZW5ndGgpO1xyXG5cclxuICAgICAgICAgIGNvbW1lbnRUb2tlbkxlbmd0aCA9IG1pZGRsZU9mQ29tbWVudFRva2VuTGVuZ3RoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcHJldmlvdXNDb21tZW50VG9rZW4gPSB0b2tlbnNPckNvbnRlbnRzLnBvcCgpO1xyXG5cclxuICAgICAgICBjb21tZW50VG9rZW4gPSAocHJldmlvdXNDb21tZW50VG9rZW4gPT09IHVuZGVmaW5lZCkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRUb2tlbiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91c0NvbW1lbnRUb2tlbi5tZXJnZShjb21tZW50VG9rZW4pO1xyXG5cclxuICAgICAgICB0b2tlbnNPckNvbnRlbnRzLnB1c2goY29tbWVudFRva2VuKTtcclxuXHJcbiAgICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKGNvbW1lbnRUb2tlbkxlbmd0aCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3Qgc3RhcnRPZkNvbW1lbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudCA9IFN0YXJ0T2ZDb21tZW50VG9rZW4ucG9zaXRpb25XaXRoaW5Db250ZW50KGNvbnRlbnQpO1xyXG5cclxuICAgICAgICBpZiAoc3RhcnRPZkNvbW1lbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudCA9PT0gMCkge1xyXG4gICAgICAgICAgaW5Db21tZW50ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICBjb21tZW50VG9rZW4gPSBTdGFydE9mQ29tbWVudFRva2VuLmZyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lKTtcclxuXHJcbiAgICAgICAgICBjb21tZW50VG9rZW5MZW5ndGggPSBjb21tZW50VG9rZW4uZ2V0TGVuZ3RoKCk7XHJcblxyXG4gICAgICAgICAgdG9rZW5zT3JDb250ZW50cy5wdXNoKGNvbW1lbnRUb2tlbik7XHJcblxyXG4gICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKGNvbW1lbnRUb2tlbkxlbmd0aCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnRlbnRMZW5ndGggPSBtaW5pbXVtQmFyTWludXNPbmUoc3RhcnRPZkNvbW1lbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudCwgY29udGVudExlbmd0aCk7XHJcblxyXG4gICAgICAgICAgY29uc3QgcmVtYWluaW5nQ29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKGNvbnRlbnRMZW5ndGgpO1xyXG5cclxuICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZygwLCBjb250ZW50TGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICB0b2tlbnNPckNvbnRlbnRzLnB1c2goY29udGVudCk7XHJcblxyXG4gICAgICAgICAgY29udGVudCA9IHJlbWFpbmluZ0NvbnRlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJldmlvdXNMaW5lSW5Db21tZW50ID0gaW5Db21tZW50OyAgLy8vXHJcblxyXG4gICAgY29udGV4dC5zZXRQcmV2aW91c0xpbmVJbkNvbW1lbnQocHJldmlvdXNMaW5lSW5Db21tZW50KTtcclxuXHJcbiAgICByZXR1cm4gaW5Db21tZW50O1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb21tZW50VG9rZW5zO1xyXG5cclxuZnVuY3Rpb24gbWluaW11bUJhck1pbnVzT25lKCkge1xyXG4gIGNvbnN0IHZhbHVlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyksXHJcbiAgICAgICAgbWluaW11bUJhck1pbnVzT25lID0gdmFsdWVzLnJlZHVjZShmdW5jdGlvbihtaW5pbXVtQmFyTWludXNPbmUsIHZhbHVlKSB7XHJcbiAgICAgICAgICBpZiAodmFsdWUgPiAtMSkge1xyXG4gICAgICAgICAgICBtaW5pbXVtQmFyTWludXNPbmUgPSAobWluaW11bUJhck1pbnVzT25lICE9PSBudWxsKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5taW4obWluaW11bUJhck1pbnVzT25lLCB2YWx1ZSkgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU7XHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICByZXR1cm4gbWluaW11bUJhck1pbnVzT25lO1xyXG4gICAgICAgIH0sIG51bGwpO1xyXG5cclxuICByZXR1cm4gbWluaW11bUJhck1pbnVzT25lO1xyXG59XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIFNpZ25pZmljYW50VG9rZW5zIHtcclxuICBzdGF0aWMgcGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lLCBydWxlcykge1xyXG4gICAgY29uc3QgdG9rZW5zID0gdG9rZW5zT3JDb250ZW50cy5yZWR1Y2UoZnVuY3Rpb24odG9rZW5zLCB0b2tlbk9yUmVtYWluaW5nQ29udGVudCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuT3JSZW1haW5pbmdDb250ZW50ID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0b2tlbk9yUmVtYWluaW5nQ29udGVudCwgIC8vL1xyXG4gICAgICAgICAgICAgICAgICAgIGRlcHRoID0gMCxcclxuICAgICAgICAgICAgICAgICAgICBzaWduaWZpY2FudFRva2VucyA9IHNpZ25pZmljYW50VG9rZW5zRnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIHJ1bGVzLCBkZXB0aCk7XHJcbiAgICAgIFxyXG4gICAgICAgICAgICAgIHRva2VucyA9IHRva2Vucy5jb25jYXQoc2lnbmlmaWNhbnRUb2tlbnMpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGNvbnN0IG5vblNpZ25pZmljYW50VG9rZW4gPSB0b2tlbk9yUmVtYWluaW5nQ29udGVudDsgIC8vL1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHRva2Vucy5wdXNoKG5vblNpZ25pZmljYW50VG9rZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zO1xyXG4gICAgICAgICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiB0b2tlbnM7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFNpZ25pZmljYW50VG9rZW5zO1xyXG5cclxuZnVuY3Rpb24gc2lnbmlmaWNhbnRUb2tlbnNGcm9tV2l0aGluQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSwgcnVsZXMsIGRlcHRoKSB7XHJcbiAgbGV0IHNpZ25pZmljYW50VG9rZW5zID0gW107XHJcblxyXG4gIGlmIChjb250ZW50ICE9PSAnJykge1xyXG4gICAgY29uc3QgcnVsZSA9IHJ1bGVzLmdldFJ1bGUoZGVwdGgpO1xyXG5cclxuICAgIGlmIChydWxlICE9PSBudWxsKSB7XHJcbiAgICAgIGNvbnN0IG5leHREZXB0aCA9IGRlcHRoICsgMSxcclxuICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudCA9IHJ1bGUuc2lnbmlmaWNhbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudChjb250ZW50KTtcclxuXHJcbiAgICAgIGlmIChzaWduaWZpY2FudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ID09PSAtMSkge1xyXG4gICAgICAgIHNpZ25pZmljYW50VG9rZW5zID0gc2lnbmlmaWNhbnRUb2tlbnNGcm9tV2l0aGluQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSwgcnVsZXMsIG5leHREZXB0aCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IHJ1bGUuc2lnbmlmaWNhbnRUb2tlbkZyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lKSxcclxuICAgICAgICAgICAgICBzaWduaWZpY2FudFRva2VuTGVuZ3RoID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRMZW5ndGgoKSxcclxuICAgICAgICAgICAgICBsZWZ0ID0gc2lnbmlmaWNhbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudCwgIC8vL1xyXG4gICAgICAgICAgICAgIHJpZ2h0ID0gc2lnbmlmaWNhbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudCArIHNpZ25pZmljYW50VG9rZW5MZW5ndGgsICAvLy9cclxuICAgICAgICAgICAgICBsZWZ0Q29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKDAsIGxlZnQpLFxyXG4gICAgICAgICAgICAgIHJpZ2h0Q29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHJpZ2h0KSxcclxuICAgICAgICAgICAgICBsZWZ0U2lnbmlmaWNhbnRUb2tlbnMgPSBzaWduaWZpY2FudFRva2Vuc0Zyb21XaXRoaW5Db250ZW50QW5kTGluZShsZWZ0Q29udGVudCwgbGluZSwgcnVsZXMsIG5leHREZXB0aCksXHJcbiAgICAgICAgICAgICAgcmlnaHRTaWduaWZpY2FudFRva2VucyA9IHNpZ25pZmljYW50VG9rZW5zRnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKHJpZ2h0Q29udGVudCwgbGluZSwgcnVsZXMsIGRlcHRoKTtcclxuXHJcbiAgICAgICAgc2lnbmlmaWNhbnRUb2tlbnMgPSBbXS5jb25jYXQobGVmdFNpZ25pZmljYW50VG9rZW5zKS5jb25jYXQoc2lnbmlmaWNhbnRUb2tlbikuY29uY2F0KHJpZ2h0U2lnbmlmaWNhbnRUb2tlbnMpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZXJlIGlzIG5vIHJ1bGUgdG8gcGFyc2UgdGhlIGNvbnRlbnQgJyR7Y29udGVudH0nLmApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW5zO1xyXG59XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IFRva2VucyA9IHJlcXVpcmUoJy4uL3Rva2VucycpLFxyXG4gICAgICBTdHJpbmdUb2tlbiA9IHJlcXVpcmUoJy4uL3Rva2VuL3NpZ25pZmljYW50L3N0cmluZycpO1xyXG5cclxuY2xhc3MgU3RyaW5nVG9rZW5zIHtcclxuICBzdGF0aWMgcGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lKSB7IFRva2Vucy5wYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUsIFN0cmluZ1Rva2VuKTsgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFN0cmluZ1Rva2VucztcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgVG9rZW5zID0gcmVxdWlyZSgnLi4vdG9rZW5zJyksXHJcbiAgICAgIFdoaXRlc3BhY2VUb2tlbiA9IHJlcXVpcmUoJy4uL3Rva2VuL3NpZ25pZmljYW50L3doaXRlc3BhY2UnKTtcclxuXHJcbmNsYXNzIFdoaXRlc3BhY2VUb2tlbnMge1xyXG4gIHN0YXRpYyBwYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUpIHsgVG9rZW5zLnBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSwgV2hpdGVzcGFjZVRva2VuKTsgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFdoaXRlc3BhY2VUb2tlbnM7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IGVudHJpZXMgPSBbXHJcblxyXG4gIHsgXCJzcGVjaWFsXCIgICAgOiBcIix8O3ziiqJ8PXw6Onw6fFxcXFxbfFxcXFxdfFxcXFx7fFxcXFx9fFxcXFwofFxcXFwpfFxcXFwuXFxcXC5cXFxcLnxcXFxcLlxcXFwuXCIgfSxcclxuXHJcbiAgeyBcImltcG9ydFwiIDogXCJeaW1wb3J0JFwiIH0sXHJcblxyXG4gIHsgXCJrZXl3b3JkXCIgICAgOiBcIl4oPzpSdWxlfEF4aW9tfFRoZW9yZW18TGVtbWF8UHJlbWlzZXN8UHJlbWlzZXxDb25jbHVzaW9ufFByb29mfFRoZXJlZm9yZXxTdXBwb3NlfFRoZW58SGVuY2V8VHlwZXN8VHlwZXxWYXJpYWJsZXN8VmFyaWFibGV8Q29uc3RydWN0b3JzfENvbnN0cnVjdG9yfERlcGVuZGVudFR5cGVzfERlcGVuZGVudFR5cGV8UXVhbGlmaWVkTWV0YXZhcmlhYmxlc3xRdWFsaWZpZWRNZXRhdmFyaWFibGV8TWV0YXZhcmlhYmxlc3xNZXRhdmFyaWFibGV8QWJicmV2aWF0aW9uc3xBYmJyZXZpYXRpb258T2JqZWN0fERlZmluaXRpb258ZnJvbXxieXxsZXR8Zm9yfGlzfG5vdHxpbnxkZWZpbmVkfHVuZGVmaW5lZCkkXCIgfSxcclxuXHJcbiAgeyBcInVuYXNzaWduZWRcIiA6IFwiXltcXFxcdXsyMX0tXFxcXHV7N0V9XFxcXHV7QTF9LVxcXFx1e0ZGfVxcXFx1ezM3MH0tXFxcXHV7M0ZGfVxcXFx1ezIyMDB9LVxcXFx1ezIyRkZ9XFxcXHV7MkEwMH0tXFxcXHV7MkFGRn1cXFxcdXsyMzAwfS1cXFxcdXsyM2ZmfVxcXFx1ezFENDAwfS1cXFxcdXsxRDdGRn1dKyRcIiB9LFxyXG5cclxuICB7IFwiZXJyb3JcIiA6IFwiXi4qJFwiIH1cclxuXHJcbl07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGVudHJpZXM7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IGVudHJpZXMgPSByZXF1aXJlKCcuL2VudHJpZXMnKSxcclxuICAgICAgRmxvcmVuY2VMaW5lID0gcmVxdWlyZSgnLi9saW5lJyksXHJcbiAgICAgIENvbW1vbkxleGVyID0gcmVxdWlyZSgnLi4vY29tbW9uL2xleGVyJyk7XHJcblxyXG5jbGFzcyBGbG9yZW5jZUxleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xyXG4gIHN0YXRpYyBmcm9tQ3VzdG9tR3JhbW1hcnNMZXhpY2FsUGF0dGVybihjdXN0b21HcmFtbWFyc0xleGljYWxQYXR0ZXJuKSB7XHJcbiAgICBjb25zdCBjdXN0b20gPSBjdXN0b21HcmFtbWFyc0xleGljYWxQYXR0ZXJuLCAvLy9cclxuICAgICAgICAgIGN1c3RvbUdyYW1tYXJFbnRyeSA9IHtcclxuICAgICAgICAgICAgY3VzdG9tOiBjdXN0b21cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjdXN0b21HcmFtbWFyUnVsZSA9ICBDb21tb25MZXhlci5ydWxlRnJvbUVudHJ5KGN1c3RvbUdyYW1tYXJFbnRyeSksXHJcbiAgICAgICAgICBydWxlcyA9IENvbW1vbkxleGVyLnJ1bGVzRnJvbUVudHJpZXMoZW50cmllcyk7XHJcblxyXG4gICAgcnVsZXMuYWRkUnVsZShjdXN0b21HcmFtbWFyUnVsZSk7XHJcblxyXG4gICAgY29uc3QgZmxvcmVuY2VMZXhlciA9IG5ldyBGbG9yZW5jZUxleGVyKHJ1bGVzLCBGbG9yZW5jZUxpbmUpO1xyXG5cclxuICAgIHJldHVybiBmbG9yZW5jZUxleGVyO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21FbnRyaWVzKGVudHJpZXMpIHtcclxuICAgIGNvbnN0IHJ1bGVzID0gQ29tbW9uTGV4ZXIucnVsZXNGcm9tRW50cmllcyhlbnRyaWVzKSxcclxuICAgICAgICAgIGZsb3JlbmNlTGV4ZXIgPSBuZXcgRmxvcmVuY2VMZXhlcihydWxlcywgRmxvcmVuY2VMaW5lKTtcclxuXHJcbiAgICByZXR1cm4gZmxvcmVuY2VMZXhlcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcclxuICAgIGNvbnN0IGZsb3JlbmNlTGV4ZXIgPSBGbG9yZW5jZUxleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpO1xyXG5cclxuICAgIHJldHVybiBmbG9yZW5jZUxleGVyO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBGbG9yZW5jZUxleGVyO1xyXG5cclxuRmxvcmVuY2VMZXhlci5lbnRyaWVzID0gZW50cmllcztcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgQ29tbW9uTGluZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9saW5lJyksXHJcbiAgICAgIFN0cmluZ1Rva2VucyA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbnMvc3RyaW5nJyksXHJcbiAgICAgIENvbW1lbnRUb2tlbnMgPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW5zL2NvbW1lbnQnKSxcclxuICAgICAgV2hpdGVzcGFjZVRva2VucyA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbnMvd2hpdGVzcGFjZScpLFxyXG4gICAgICBFbmRPZkxpbmVUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9lbmRPZkxpbmUnKTtcclxuXHJcbmNsYXNzIEZsb3JlbmNlTGluZSBleHRlbmRzIENvbW1vbkxpbmUge1xyXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50LCBjb250ZXh0LCBydWxlcykge1xyXG4gICAgY29uc3QgbGluZSA9IHN1cGVyLmZyb21Db250ZW50KEZsb3JlbmNlTGluZSwgY29udGVudCwgY29udGV4dCwgcnVsZXMsIENvbW1lbnRUb2tlbnMsIFN0cmluZ1Rva2VucywgV2hpdGVzcGFjZVRva2VucyksXHJcbiAgICAgICAgICBsaW5lSW5Db21tZW50ID0gbGluZS5pc0luQ29tbWVudCgpO1xyXG5cclxuICAgIGlmICghbGluZUluQ29tbWVudCkge1xyXG4gICAgICBjb25zdCBlbmRPZkxpbmVUb2tlbiA9IEVuZE9mTGluZVRva2VuLmZyb21MaW5lKGxpbmUpO1xyXG5cclxuICAgICAgbGluZS5wdXNoVG9rZW4oZW5kT2ZMaW5lVG9rZW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBsaW5lO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBGbG9yZW5jZUxpbmU7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IGVudHJpZXMgPSBbXHJcblxyXG4gIHsgXCJwbGFpblwiIDogXCJeLiokXCIgfVxyXG5cclxuXTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZW50cmllcztcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgUGxhaW5MaW5lID0gcmVxdWlyZSgnLi9saW5lJyksXHJcbiAgICAgIGVudHJpZXMgPSByZXF1aXJlKCcuL2VudHJpZXMnKSxcclxuICAgICAgQ29tbW9uTGV4ZXIgPSByZXF1aXJlKCcuLi9jb21tb24vbGV4ZXInKTtcclxuXHJcbmNsYXNzIFBsYWluTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgc3RhdGljIGZyb21FbnRyaWVzKGVudHJpZXMpIHtcclxuICAgIGNvbnN0IHJ1bGVzID0gQ29tbW9uTGV4ZXIucnVsZXNGcm9tRW50cmllcyhlbnRyaWVzKSxcclxuICAgICAgICAgIHBsYWluTGV4ZXIgPSBuZXcgUGxhaW5MZXhlcihydWxlcywgUGxhaW5MaW5lKTtcclxuXHJcbiAgICByZXR1cm4gcGxhaW5MZXhlcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcclxuICAgIGNvbnN0IHBsYWluTGV4ZXIgPSBQbGFpbkxleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpO1xyXG5cclxuICAgIHJldHVybiBwbGFpbkxleGVyO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBQbGFpbkxleGVyO1xyXG5cclxuUGxhaW5MZXhlci5lbnRyaWVzID0gZW50cmllcztcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgQ29tbW9uTGluZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9saW5lJyksXHJcbiAgICAgIFN0cmluZ1Rva2VucyA9IHJlcXVpcmUoJy4vdG9rZW5zL3N0cmluZycpLFxyXG4gICAgICBDb21tZW50VG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMvY29tbWVudCcpLFxyXG4gICAgICBXaGl0ZXNwYWNlVG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMvd2hpdGVzcGFjZScpO1xyXG5cclxuY2xhc3MgUGxhaW5MaW5lIGV4dGVuZHMgQ29tbW9uTGluZSB7XHJcbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQsIGNvbnRleHQsIHJ1bGVzKSB7IHJldHVybiBzdXBlci5mcm9tQ29udGVudChQbGFpbkxpbmUsIGNvbnRlbnQsIGNvbnRleHQsIHJ1bGVzLCBDb21tZW50VG9rZW5zLCBTdHJpbmdUb2tlbnMsIFdoaXRlc3BhY2VUb2tlbnMpOyB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUGxhaW5MaW5lO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBDb21tZW50VG9rZW5zIHtcclxuICBzdGF0aWMgcGFzcyh0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnQsIGxpbmUsIGNvbnRleHQpIHtcclxuICAgIGNvbnN0IGluQ29tbWVudCA9IGZhbHNlOyAgLy8vXHJcblxyXG4gICAgcmV0dXJuIGluQ29tbWVudDtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ29tbWVudFRva2VucztcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgU3RyaW5nVG9rZW5zIHtcclxuICBzdGF0aWMgcGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lKSB7IFxyXG5cclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU3RyaW5nVG9rZW5zO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBXaGl0ZXNwYWNlVG9rZW5zIHtcclxuICBzdGF0aWMgcGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lKSB7XHJcblxyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBXaGl0ZXNwYWNlVG9rZW5zO1xyXG4iLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIGFycmF5VXRpbCB7XG4gIHN0YXRpYyBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiAgXG4gIHN0YXRpYyBzcGxpY2UoYXJyYXksIHN0YXJ0LCBkZWxldGVDb3VudCwgaXRlbXNBcnJheSkge1xuICAgIGNvbnN0IGFyZ3MgPSBbc3RhcnQsIGRlbGV0ZUNvdW50XS5jb25jYXQoaXRlbXNBcnJheSk7XG4gIFxuICAgIEFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkoYXJyYXksIGFyZ3MpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlVdGlsO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyB0b2tlblV0aWwge1xuICBzdGF0aWMgc2FuaXRpc2VDb250ZW50KGNvbnRlbnQpIHtcbiAgICBjb25zdCBzYW5pdGlzZWRDb250ZW50ID0gY29udGVudC5yZXBsYWNlKC8mLywnJmFtcDsnKS5yZXBsYWNlKC88LywgJyZsdDsnKS5yZXBsYWNlKC8+LywgJyZndDsnKTtcblxuICAgIHJldHVybiBzYW5pdGlzZWRDb250ZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9rZW5VdGlsO1xuIl19
