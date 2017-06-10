(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.examples = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var grammar = '\n\n  S ::= X \'b\' | Y \n  \n  Y ::= X | \'a\'\n  \n  X ::= S | \'c\'\n\n';

module.exports = grammar;

/*


 A1 ::= A2 'a' | 'b'

 A2 ::= A1 'c' | 'd'

 expression               ::=  expression '+' term | term

 term                     ::=  naturalNumber

 naturalNumber            ::=  /\\d+/






 expression               ::=  term operatorThenTerm*
  
  operatorThenTerm         ::=  operator term
  
  operator                 ::=  '+' | '-' | '*' | '/'
  
  term                     ::=  naturalNumber | parenthesizedExpression
  
  naturalNumber            ::=  /\\d+/
  
  parenthesizedExpression  ::=  '(' expression ')'

*/

},{}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var grammar = require('./grammar'),
    CommonParser = require('../common/parser'),
    PrimitiveParser = require('../primitive/parser');

var PrimitiveLexer = lexers.PrimitiveLexer,
    BasicLexer = lexers.BasicLexer;

var BasicParser = function (_CommonParser) {
  _inherits(BasicParser, _CommonParser);

  function BasicParser() {
    _classCallCheck(this, BasicParser);

    return _possibleConstructorReturn(this, (BasicParser.__proto__ || Object.getPrototypeOf(BasicParser)).apply(this, arguments));
  }

  _createClass(BasicParser, null, [{
    key: 'fromNothing',
    value: function fromNothing() {
      var basicParser = BasicParser.fromGrammar(grammar);

      return basicParser;
    }
  }, {
    key: 'fromGrammar',
    value: function fromGrammar(grammar) {
      var lines = PrimitiveLexer.linesFromGrammar(grammar),
          significantTokenTypes = BasicLexer.significantTokenTypes(),
          mappings = {},
          productions = PrimitiveParser.parse(lines, significantTokenTypes, mappings),
          basicParser = new BasicParser(productions);

      return basicParser;
    }
  }]);

  return BasicParser;
}(CommonParser);

module.exports = BasicParser;

},{"../common/parser":47,"../primitive/parser":85,"./grammar":1,"occam-lexers":120}],3:[function(require,module,exports){
'use strict';

var grammar = '\n\n  productions           ::=  production+\n  \n  production            ::=  productionName "::=" rules [endOfLine]\n  \n  rules                 ::=  rule\n  \n  rule                  ::=  part+\n  \n  part                  ::=  group  \n                \n                          |  optionalPart  \n                \n                          |  productionName  \n                \n                          |  regularExpression \n                \n                          |  significantTokenType \n\n                          |  terminalSymbol\n                        \n                          |  noWhitespace \n                \n                          |  endOfLine\n                           \n  group                 ::=  "(" rules ")"\n  \n  optionalPart          ::=  part<NO_WHITESPACE>"?"\n\n  productionName        ::=  [name]\n\n  regularExpression     ::=  [regularExpression]\n  \n  significantTokenType  ::=  [type]\n\n  terminalSymbol        ::=  [string]\n  \n  noWhitespace          ::=  "<NO_WHITESPACE>"\n  \n  endOfLine             ::=  "<END_OF_LINE>"\n\n';

module.exports = grammar;

},{}],4:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommonParser = require('../common/parser'),
    PartProduction = require('./production/part'),
    RuleProduction = require('./production/rule'),
    RulesProduction = require('./production/rules'),
    GroupProduction = require('./production/group'),
    EndOfLineProduction = require('./production/endOfLine'),
    ProductionProduction = require('./production/production'),
    ProductionsProduction = require('./production/productions'),
    OptionalPartProduction = require('./production/optionalPart'),
    NoWhitespaceProduction = require('./production/noWhitespace'),
    ProductionNameProduction = require('./production/productionName'),
    TerminalSymbolProduction = require('./production/terminalSymbol'),
    RegularExpressionProduction = require('./production/regularExpression'),
    SignificantTokenTypeProduction = require('./production/significantTokenType');

var BNFParser = function (_CommonParser) {
  _inherits(BNFParser, _CommonParser);

  function BNFParser() {
    _classCallCheck(this, BNFParser);

    return _possibleConstructorReturn(this, (BNFParser.__proto__ || Object.getPrototypeOf(BNFParser)).apply(this, arguments));
  }

  _createClass(BNFParser, null, [{
    key: 'fromNothing',
    value: function fromNothing() {
      var partProduction = new PartProduction(),
          ruleProduction = new RuleProduction(),
          rulesProduction = new RulesProduction(),
          groupProduction = new GroupProduction(),
          endOfLineProduction = new EndOfLineProduction(),
          productionProduction = new ProductionProduction(),
          productionsProduction = new ProductionsProduction(),
          optionalPartProduction = new OptionalPartProduction(),
          noWhitespaceProduction = new NoWhitespaceProduction(),
          productionNameProduction = new ProductionNameProduction(),
          terminalSymbolProduction = new TerminalSymbolProduction(),
          regularExpressionProduction = new RegularExpressionProduction(),
          significantTokenTypeProduction = new SignificantTokenTypeProduction(),
          productions = [productionsProduction, productionProduction, rulesProduction, ruleProduction, partProduction, groupProduction, optionalPartProduction, productionNameProduction, regularExpressionProduction, significantTokenTypeProduction, terminalSymbolProduction, noWhitespaceProduction, endOfLineProduction],
          bnfParser = new BNFParser(productions);

      return bnfParser;
    }
  }]);

  return BNFParser;
}(CommonParser);

module.exports = BNFParser;

},{"../common/parser":47,"./production/endOfLine":6,"./production/group":7,"./production/noWhitespace":8,"./production/optionalPart":9,"./production/part":10,"./production/production":11,"./production/productionName":12,"./production/productions":13,"./production/regularExpression":14,"./production/rule":15,"./production/rules":16,"./production/significantTokenType":17,"./production/terminalSymbol":18}],5:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Production = function () {
  function Production(name, rules, Node) {
    _classCallCheck(this, Production);

    this.name = name;
    this.rules = rules;
    this.Node = Node;
  }

  _createClass(Production, [{
    key: 'getName',
    value: function getName() {
      return this.name;
    }
  }, {
    key: 'parse',
    value: function parse(context, noWhitespace) {
      var nodeOrNodes = null;

      context.increaseDepth();

      var tooDeep = context.isTooDeep();

      if (tooDeep) {
        throw new Error('The parse tree is too deep at production \'' + this.name + '\'');
      }

      var ruleNodes = null;

      var someRuleParsed = this.rules.some(function (rule) {
        ruleNodes = rule.parse(context, noWhitespace);

        var ruleParsed = ruleNodes !== null;

        return ruleParsed;
      });

      if (someRuleParsed) {
        var ruleNodesLength = ruleNodes.length;

        if (ruleNodesLength > 0) {
          var nodes = ruleNodes,
              ///
          productionName = this.name; ///

          nodeOrNodes = this.Node.fromNodesAndProductionName(nodes, productionName); ///
        }
      }

      context.decreaseDepth();

      return nodeOrNodes;
    }
  }]);

  return Production;
}();

module.exports = Production;

},{}],6:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    EndOfLineRule = require('../rule/endOfLine'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var EndOfLineProduction = function (_Production) {
  _inherits(EndOfLineProduction, _Production);

  function EndOfLineProduction() {
    _classCallCheck(this, EndOfLineProduction);

    var endOfLineRule = new EndOfLineRule(),
        name = 'endOfLine',
        rules = [endOfLineRule],
        Node = NonTerminalNode;

    return _possibleConstructorReturn(this, (EndOfLineProduction.__proto__ || Object.getPrototypeOf(EndOfLineProduction)).call(this, name, rules, Node));
  }

  return EndOfLineProduction;
}(Production);

module.exports = EndOfLineProduction;

},{"../../common/node/nonTerminal":31,"../production":5,"../rule/endOfLine":20}],7:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    GroupRule = require('../rule/group'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var GroupProduction = function (_Production) {
  _inherits(GroupProduction, _Production);

  function GroupProduction() {
    _classCallCheck(this, GroupProduction);

    var productionRule = new GroupRule(),
        name = 'group',
        rules = [productionRule],
        Node = NonTerminalNode;

    return _possibleConstructorReturn(this, (GroupProduction.__proto__ || Object.getPrototypeOf(GroupProduction)).call(this, name, rules, Node));
  }

  return GroupProduction;
}(Production);

module.exports = GroupProduction;

},{"../../common/node/nonTerminal":31,"../production":5,"../rule/group":21}],8:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    NoWhitespaceRule = require('../rule/noWhitespace'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var NoWhitespaceProduction = function (_Production) {
  _inherits(NoWhitespaceProduction, _Production);

  function NoWhitespaceProduction() {
    _classCallCheck(this, NoWhitespaceProduction);

    var noWhitespaceRule = new NoWhitespaceRule(),
        name = 'noWhitespace',
        rules = [noWhitespaceRule],
        Node = NonTerminalNode;

    return _possibleConstructorReturn(this, (NoWhitespaceProduction.__proto__ || Object.getPrototypeOf(NoWhitespaceProduction)).call(this, name, rules, Node));
  }

  return NoWhitespaceProduction;
}(Production);

module.exports = NoWhitespaceProduction;

},{"../../common/node/nonTerminal":31,"../production":5,"../rule/noWhitespace":22}],9:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    OptionalPartRule = require('../rule/optionalPart'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var OptionalPartProduction = function (_Production) {
  _inherits(OptionalPartProduction, _Production);

  function OptionalPartProduction() {
    _classCallCheck(this, OptionalPartProduction);

    var optionalPartRule = new OptionalPartRule(),
        name = 'optionalPart',
        rules = [optionalPartRule],
        Node = NonTerminalNode;

    return _possibleConstructorReturn(this, (OptionalPartProduction.__proto__ || Object.getPrototypeOf(OptionalPartProduction)).call(this, name, rules, Node));
  }

  return OptionalPartProduction;
}(Production);

module.exports = OptionalPartProduction;

},{"../../common/node/nonTerminal":31,"../production":5,"../rule/optionalPart":23}],10:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    ProductionNameRule = require('../rule/productionName'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var PartProduction = function (_Production) {
  _inherits(PartProduction, _Production);

  function PartProduction() {
    _classCallCheck(this, PartProduction);

    var groupProductionName = 'group',
        endOfLineProductionName = 'endOfLine',
        optionalPartProductionName = 'optionalPart',
        noWhitespaceProductionName = 'noWhitespace',
        terminalSymbolProductionName = 'terminalSymbol',
        productionNameProductionName = 'productionName',
        regularExpressionProductionName = 'regularExpression',
        significantTokenTypeProductionName = 'significantTokenType',
        groupProductionNameRule = new ProductionNameRule(groupProductionName),
        endOfLineProductionNameRule = new ProductionNameRule(endOfLineProductionName),
        optionalPartProductionNameRule = new ProductionNameRule(optionalPartProductionName),
        noWhitespaceProductionNameRule = new ProductionNameRule(noWhitespaceProductionName),
        terminalSymbolProductionNameRule = new ProductionNameRule(terminalSymbolProductionName),
        productionNameProductionNameRule = new ProductionNameRule(productionNameProductionName),
        regularExpressionProductionNameRule = new ProductionNameRule(regularExpressionProductionName),
        significantTokenTypeProductionNameRule = new ProductionNameRule(significantTokenTypeProductionName),
        name = 'part',
        rules = [groupProductionNameRule, optionalPartProductionNameRule, productionNameProductionNameRule, regularExpressionProductionNameRule, significantTokenTypeProductionNameRule, terminalSymbolProductionNameRule, noWhitespaceProductionNameRule, endOfLineProductionNameRule],
        Node = NonTerminalNode;

    return _possibleConstructorReturn(this, (PartProduction.__proto__ || Object.getPrototypeOf(PartProduction)).call(this, name, rules, Node));
  }

  return PartProduction;
}(Production);

module.exports = PartProduction;

},{"../../common/node/nonTerminal":31,"../production":5,"../rule/productionName":25}],11:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    ProductionRule = require('../rule/production'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var ProductionProduction = function (_Production) {
  _inherits(ProductionProduction, _Production);

  function ProductionProduction() {
    _classCallCheck(this, ProductionProduction);

    var productionRule = new ProductionRule(),
        name = 'production',
        rules = [productionRule],
        Node = NonTerminalNode;

    return _possibleConstructorReturn(this, (ProductionProduction.__proto__ || Object.getPrototypeOf(ProductionProduction)).call(this, name, rules, Node));
  }

  return ProductionProduction;
}(Production);

module.exports = ProductionProduction;

},{"../../common/node/nonTerminal":31,"../production":5,"../rule/production":24}],12:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    NonTerminalNode = require('../../common/node/nonTerminal'),
    SignificantTokenTypeRule = require('../rule/significantTokenType');

var ProductionNameProduction = function (_Production) {
  _inherits(ProductionNameProduction, _Production);

  function ProductionNameProduction() {
    _classCallCheck(this, ProductionNameProduction);

    var nameSignificantTokenType = 'name',
        nameSignificantTokenTypeRule = new SignificantTokenTypeRule(nameSignificantTokenType),
        name = 'productionName',
        rules = [nameSignificantTokenTypeRule],
        Node = NonTerminalNode;

    return _possibleConstructorReturn(this, (ProductionNameProduction.__proto__ || Object.getPrototypeOf(ProductionNameProduction)).call(this, name, rules, Node));
  }

  return ProductionNameProduction;
}(Production);

module.exports = ProductionNameProduction;

},{"../../common/node/nonTerminal":31,"../production":5,"../rule/significantTokenType":29}],13:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    ProductionsRule = require('../rule/productions'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var ProductionsProduction = function (_Production) {
  _inherits(ProductionsProduction, _Production);

  function ProductionsProduction() {
    _classCallCheck(this, ProductionsProduction);

    var productionsRule = new ProductionsRule(),
        name = 'productions',
        rules = [productionsRule],
        Node = NonTerminalNode;

    return _possibleConstructorReturn(this, (ProductionsProduction.__proto__ || Object.getPrototypeOf(ProductionsProduction)).call(this, name, rules, Node));
  }

  return ProductionsProduction;
}(Production);

module.exports = ProductionsProduction;

},{"../../common/node/nonTerminal":31,"../production":5,"../rule/productions":26}],14:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    NonTerminalNode = require('../../common/node/nonTerminal'),
    SignificantTokenTypeRule = require('../rule/significantTokenType');

var RegularExpressionProduction = function (_Production) {
  _inherits(RegularExpressionProduction, _Production);

  function RegularExpressionProduction() {
    _classCallCheck(this, RegularExpressionProduction);

    var regularExpressionSignificantTokenType = 'regularExpression',
        regularExpressionSignificantTokenTypeRule = new SignificantTokenTypeRule(regularExpressionSignificantTokenType),
        name = 'regularExpression',
        rules = [regularExpressionSignificantTokenTypeRule],
        Node = NonTerminalNode;

    return _possibleConstructorReturn(this, (RegularExpressionProduction.__proto__ || Object.getPrototypeOf(RegularExpressionProduction)).call(this, name, rules, Node));
  }

  return RegularExpressionProduction;
}(Production);

module.exports = RegularExpressionProduction;

},{"../../common/node/nonTerminal":31,"../production":5,"../rule/significantTokenType":29}],15:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    RuleRule = require('../rule/rule'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var RuleProduction = function (_Production) {
  _inherits(RuleProduction, _Production);

  function RuleProduction() {
    _classCallCheck(this, RuleProduction);

    var name = 'rule',
        ruleRule = new RuleRule(),
        rules = [ruleRule],
        Node = NonTerminalNode;

    return _possibleConstructorReturn(this, (RuleProduction.__proto__ || Object.getPrototypeOf(RuleProduction)).call(this, name, rules, Node));
  }

  return RuleProduction;
}(Production);

module.exports = RuleProduction;

},{"../../common/node/nonTerminal":31,"../production":5,"../rule/rule":27}],16:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    RulesRule = require('../rule/rules'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var RulesProduction = function (_Production) {
  _inherits(RulesProduction, _Production);

  function RulesProduction() {
    _classCallCheck(this, RulesProduction);

    var rulesRule = new RulesRule(),
        name = 'rules',
        rules = [rulesRule],
        Node = NonTerminalNode;

    return _possibleConstructorReturn(this, (RulesProduction.__proto__ || Object.getPrototypeOf(RulesProduction)).call(this, name, rules, Node));
  }

  return RulesProduction;
}(Production);

module.exports = RulesProduction;

},{"../../common/node/nonTerminal":31,"../production":5,"../rule/rules":28}],17:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    NonTerminalNode = require('../../common/node/nonTerminal'),
    SignificantTokenTypeRule = require('../rule/significantTokenType');

var SignificantTokenTypeProduction = function (_Production) {
  _inherits(SignificantTokenTypeProduction, _Production);

  function SignificantTokenTypeProduction() {
    _classCallCheck(this, SignificantTokenTypeProduction);

    var typeSignificantTokenType = 'type',
        typeSignificantTokenTypeRule = new SignificantTokenTypeRule(typeSignificantTokenType),
        name = 'significantTokenType',
        rules = [typeSignificantTokenTypeRule],
        Node = NonTerminalNode;

    return _possibleConstructorReturn(this, (SignificantTokenTypeProduction.__proto__ || Object.getPrototypeOf(SignificantTokenTypeProduction)).call(this, name, rules, Node));
  }

  return SignificantTokenTypeProduction;
}(Production);

module.exports = SignificantTokenTypeProduction;

},{"../../common/node/nonTerminal":31,"../production":5,"../rule/significantTokenType":29}],18:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    NonTerminalNode = require('../../common/node/nonTerminal'),
    SignificantTokenTypeRule = require('../rule/significantTokenType');

var TerminalSymbolProduction = function (_Production) {
  _inherits(TerminalSymbolProduction, _Production);

  function TerminalSymbolProduction() {
    _classCallCheck(this, TerminalSymbolProduction);

    var stringSignificantTokenType = 'string',
        stringSignificantTokenTypeRule = new SignificantTokenTypeRule(stringSignificantTokenType),
        name = 'terminalSymbol',
        rules = [stringSignificantTokenTypeRule],
        Node = NonTerminalNode;

    return _possibleConstructorReturn(this, (TerminalSymbolProduction.__proto__ || Object.getPrototypeOf(TerminalSymbolProduction)).call(this, name, rules, Node));
  }

  return TerminalSymbolProduction;
}(Production);

module.exports = TerminalSymbolProduction;

},{"../../common/node/nonTerminal":31,"../production":5,"../rule/significantTokenType":29}],19:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rule = function () {
  function Rule(parts) {
    _classCallCheck(this, Rule);

    this.parts = parts;
  }

  _createClass(Rule, [{
    key: 'getParts',
    value: function getParts() {
      return this.parts;
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
  }]);

  return Rule;
}();

module.exports = Rule;

},{}],20:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    TerminalSymbolPart = require('../../common/part/terminalSymbol');

var EndOfLineRule = function (_Rule) {
  _inherits(EndOfLineRule, _Rule);

  function EndOfLineRule() {
    _classCallCheck(this, EndOfLineRule);

    var noWhitespace = false,
        endOfLineTerminalSymbolContent = '<END_OF_LINE>',
        endOfLineTerminalSymbolPart = new TerminalSymbolPart(endOfLineTerminalSymbolContent, noWhitespace),
        parts = [endOfLineTerminalSymbolPart];

    return _possibleConstructorReturn(this, (EndOfLineRule.__proto__ || Object.getPrototypeOf(EndOfLineRule)).call(this, parts));
  }

  return EndOfLineRule;
}(Rule);

module.exports = EndOfLineRule;

},{"../../common/part/terminalSymbol":56,"../rule":19}],21:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    TerminalSymbolPart = require('../../common/part/terminalSymbol'),
    ProductionNamePart = require('../../common/part/productionName');

var GroupRule = function (_Rule) {
  _inherits(GroupRule, _Rule);

  function GroupRule() {
    _classCallCheck(this, GroupRule);

    var noWhitespace = false,
        openBracketTerminalSymbolContent = '(',
        rulesProductionName = 'rules',
        closeBracketTerminalSymbolContent = ')',
        openBracketTerminalSymbolPart = new TerminalSymbolPart(openBracketTerminalSymbolContent, noWhitespace),
        rulesProductionNamePart = new ProductionNamePart(rulesProductionName, noWhitespace),
        closeBracketTerminalSymbolPart = new TerminalSymbolPart(closeBracketTerminalSymbolContent, noWhitespace),
        parts = [openBracketTerminalSymbolPart, rulesProductionNamePart, closeBracketTerminalSymbolPart];

    return _possibleConstructorReturn(this, (GroupRule.__proto__ || Object.getPrototypeOf(GroupRule)).call(this, parts));
  }

  return GroupRule;
}(Rule);

module.exports = GroupRule;

},{"../../common/part/productionName":52,"../../common/part/terminalSymbol":56,"../rule":19}],22:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    TerminalSymbolPart = require('../../common/part/terminalSymbol');

var NoWhitespaceRule = function (_Rule) {
  _inherits(NoWhitespaceRule, _Rule);

  function NoWhitespaceRule() {
    _classCallCheck(this, NoWhitespaceRule);

    var noWhitespace = false,
        noWhitespaceTerminalSymbolContent = '<NO_WHITESPACE>',
        noWhitespaceTerminalSymbolPart = new TerminalSymbolPart(noWhitespaceTerminalSymbolContent, noWhitespace),
        parts = [noWhitespaceTerminalSymbolPart];

    return _possibleConstructorReturn(this, (NoWhitespaceRule.__proto__ || Object.getPrototypeOf(NoWhitespaceRule)).call(this, parts));
  }

  return NoWhitespaceRule;
}(Rule);

module.exports = NoWhitespaceRule;

},{"../../common/part/terminalSymbol":56,"../rule":19}],23:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    TerminalSymbolPart = require('../../common/part/terminalSymbol'),
    ProductionNamePart = require('../../common/part/productionName');

var OptionalPartRule = function (_Rule) {
  _inherits(OptionalPartRule, _Rule);

  function OptionalPartRule() {
    _classCallCheck(this, OptionalPartRule);

    var noWhitespace = true,
        partProductionName = 'part',
        questionMarkTerminalSymbolContent = '?',
        partProductionNamePart = new ProductionNamePart(partProductionName, noWhitespace),
        questionMarkTerminalSymbolPart = new TerminalSymbolPart(questionMarkTerminalSymbolContent, noWhitespace),
        parts = [partProductionNamePart, questionMarkTerminalSymbolPart];

    return _possibleConstructorReturn(this, (OptionalPartRule.__proto__ || Object.getPrototypeOf(OptionalPartRule)).call(this, parts));
  }

  return OptionalPartRule;
}(Rule);

module.exports = OptionalPartRule;

},{"../../common/part/productionName":52,"../../common/part/terminalSymbol":56,"../rule":19}],24:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    TerminalSymbolPart = require('../../common/part/terminalSymbol'),
    ProductionNamePart = require('../../common/part/productionName'),
    SignificantTokenTypePart = require('../../common/part/significantTokenType');

var ProductionRule = function (_Rule) {
  _inherits(ProductionRule, _Rule);

  function ProductionRule() {
    _classCallCheck(this, ProductionRule);

    var noWhitespace = false,
        productionNameProductionName = 'productionName',
        separatorTerminalSymbolContent = '::=',
        rulesProductionName = 'rules',
        endOfLineSignificantTokenType = 'endOfLine',
        productionNameProductionNamePart = new ProductionNamePart(productionNameProductionName, noWhitespace),
        separatorTerminalSymbolPart = new TerminalSymbolPart(separatorTerminalSymbolContent, noWhitespace),
        rulesProductionNamePart = new ProductionNamePart(rulesProductionName, noWhitespace),
        endOfLineSignificantTokenTypePart = new SignificantTokenTypePart(endOfLineSignificantTokenType, noWhitespace),
        parts = [productionNameProductionNamePart, separatorTerminalSymbolPart, rulesProductionNamePart, endOfLineSignificantTokenTypePart];

    return _possibleConstructorReturn(this, (ProductionRule.__proto__ || Object.getPrototypeOf(ProductionRule)).call(this, parts));
  }

  return ProductionRule;
}(Rule);

module.exports = ProductionRule;

},{"../../common/part/productionName":52,"../../common/part/significantTokenType":55,"../../common/part/terminalSymbol":56,"../rule":19}],25:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    ProductionNamePart = require('../../common/part/productionName');

var ProductionNameRule = function (_Rule) {
  _inherits(ProductionNameRule, _Rule);

  function ProductionNameRule(productionName) {
    _classCallCheck(this, ProductionNameRule);

    var noWhitespace = false,
        productionNamePart = new ProductionNamePart(productionName, noWhitespace),
        parts = [productionNamePart];

    return _possibleConstructorReturn(this, (ProductionNameRule.__proto__ || Object.getPrototypeOf(ProductionNameRule)).call(this, parts));
  }

  return ProductionNameRule;
}(Rule);

module.exports = ProductionNameRule;

},{"../../common/part/productionName":52,"../rule":19}],26:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    OneOrMorePartsPart = require('../../common/part/oneOrMoreParts');

var ProductionsRule = function (_Rule) {
  _inherits(ProductionsRule, _Rule);

  function ProductionsRule() {
    _classCallCheck(this, ProductionsRule);

    var terminalPart = null,
        noWhitespace = false,
        productionProductionName = 'production',
        oneOrMoreProductionProductionNamePartsPart = new OneOrMorePartsPart(terminalPart, productionProductionName, noWhitespace),
        parts = [oneOrMoreProductionProductionNamePartsPart];

    return _possibleConstructorReturn(this, (ProductionsRule.__proto__ || Object.getPrototypeOf(ProductionsRule)).call(this, parts));
  }

  return ProductionsRule;
}(Rule);

module.exports = ProductionsRule;

},{"../../common/part/oneOrMoreParts":50,"../rule":19}],27:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    OneOrMorePartsPart = require('../../common/part/oneOrMoreParts');

var RuleRule = function (_Rule) {
  _inherits(RuleRule, _Rule);

  function RuleRule() {
    _classCallCheck(this, RuleRule);

    var terminalPart = null,
        noWhitespace = false,
        partProductionName = 'part',
        oneOrMorePartProductionNamePartsPart = new OneOrMorePartsPart(terminalPart, partProductionName, noWhitespace),
        parts = [oneOrMorePartProductionNamePartsPart];

    return _possibleConstructorReturn(this, (RuleRule.__proto__ || Object.getPrototypeOf(RuleRule)).call(this, parts));
  }

  return RuleRule;
}(Rule);

module.exports = RuleRule;

},{"../../common/part/oneOrMoreParts":50,"../rule":19}],28:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    ProductionNamePart = require('../../common/part/productionName');

var RulesRule = function (_Rule) {
  _inherits(RulesRule, _Rule);

  function RulesRule() {
    _classCallCheck(this, RulesRule);

    var noWhitespace = false,
        ruleProductionName = 'rule',
        ruleProductionNamePart = new ProductionNamePart(ruleProductionName, noWhitespace),
        parts = [ruleProductionNamePart];

    return _possibleConstructorReturn(this, (RulesRule.__proto__ || Object.getPrototypeOf(RulesRule)).call(this, parts));
  }

  return RulesRule;
}(Rule);

module.exports = RulesRule;

},{"../../common/part/productionName":52,"../rule":19}],29:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    SignificantTokenTypePart = require('../../common/part/significantTokenType');

var SignificantTokenTypeRule = function (_Rule) {
  _inherits(SignificantTokenTypeRule, _Rule);

  function SignificantTokenTypeRule(significantTokenType) {
    _classCallCheck(this, SignificantTokenTypeRule);

    var noWhitespace = false,
        significantTokenTypePart = new SignificantTokenTypePart(significantTokenType, noWhitespace),
        parts = [significantTokenTypePart];

    return _possibleConstructorReturn(this, (SignificantTokenTypeRule.__proto__ || Object.getPrototypeOf(SignificantTokenTypeRule)).call(this, parts));
  }

  return SignificantTokenTypeRule;
}(Rule);

module.exports = SignificantTokenTypeRule;

},{"../../common/part/significantTokenType":55,"../rule":19}],30:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers');

var SignificantToken = lexers.SignificantToken,
    WhitespaceToken = lexers.WhitespaceToken;


var DEFAULT_MAXIMUM_DEPTH = 99;

var Context = function () {
  function Context(tokens, productions) {
    var maximumDepth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_MAXIMUM_DEPTH;

    _classCallCheck(this, Context);

    this.tokens = tokens;

    this.productions = productions;

    this.maximumDepth = maximumDepth;

    this.depth = 0;

    this.index = 0;
  }

  _createClass(Context, [{
    key: 'getProductions',
    value: function getProductions() {
      return this.productions;
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

        if (nextToken instanceof SignificantToken) {
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

},{"occam-lexers":120}],31:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NonTerminalNodeParseTree = require('../parseTree/nonTerminalNode');

var NonTerminalNode = function () {
  function NonTerminalNode(productionName, childNodes, firstLine, lastLine, firstSignificantToken, lastSignificantToken) {
    _classCallCheck(this, NonTerminalNode);

    this.productionName = productionName;
    this.childNodes = childNodes;
    this.firstLine = firstLine;
    this.lastLine = lastLine;
    this.firstSignificantToken = firstSignificantToken;
    this.lastSignificantToken = lastSignificantToken;
  }

  _createClass(NonTerminalNode, [{
    key: 'getProductionName',
    value: function getProductionName() {
      return this.productionName;
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
    key: 'parseTree',
    value: function parseTree(lines) {
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
    key: 'fromNodesAndProductionName',
    value: function fromNodesAndProductionName(nodes, productionName) {
      var Class = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : NonTerminalNode;

      var childNodes = nodes,
          ///
      nonTerminalNode = Class.fromProductionNameAndChildNodes(productionName, childNodes, Class);

      return nonTerminalNode;
    }
  }, {
    key: 'fromProductionNameAndChildNodes',
    value: function fromProductionNameAndChildNodes(productionName, childNodes) {
      var Class = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : NonTerminalNode;

      var firstChildNode = first(childNodes),
          lastChildNode = last(childNodes),
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
      nonTerminalNode = new Class(productionName, childNodes, firstLine, lastLine, firstSignificantToken, lastSignificantToken);

      return nonTerminalNode;
    }
  }]);

  return NonTerminalNode;
}();

module.exports = NonTerminalNode;

function first(array) {
  return array[0];
}
function last(array) {
  return array[array.length - 1];
}

},{"../parseTree/nonTerminalNode":42}],32:[function(require,module,exports){
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
    key: 'fromNodesAndProductionName',
    value: function fromNodesAndProductionName(nodes, productionName) {
      var childNodes = arrayUtil.discardSecond(nodes),
          discardSecondChildNode = NonTerminalNode.fromProductionNameAndChildNodes(productionName, childNodes, DiscardSecondChildNode);

      return discardSecondChildNode;
    }
  }]);

  return DiscardSecondChildNode;
}(NonTerminalNode);

module.exports = DiscardSecondChildNode;

},{"../../../util/array":86,"../nonTerminal":31}],33:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TerminalNode = require('../terminal');

var ErrorNode = function (_TerminalNode) {
  _inherits(ErrorNode, _TerminalNode);

  function ErrorNode() {
    _classCallCheck(this, ErrorNode);

    return _possibleConstructorReturn(this, (ErrorNode.__proto__ || Object.getPrototypeOf(ErrorNode)).apply(this, arguments));
  }

  _createClass(ErrorNode, null, [{
    key: 'fromNodesAndProductionName',
    value: function fromNodesAndProductionName(nodes, productionName) {
      var firstNode = first(nodes),
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

function first(array) {
  return array[0];
}

},{"../terminal":36}],34:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TransparentNode = function () {
  function TransparentNode() {
    _classCallCheck(this, TransparentNode);
  }

  _createClass(TransparentNode, null, [{
    key: 'fromNodesAndProductionName',
    value: function fromNodesAndProductionName(nodes, productionName) {
      return nodes;
    }
  }]);

  return TransparentNode;
}();

module.exports = TransparentNode;

},{}],35:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtil = require('../../../util/array');

var TransparentThenKeepSecondNode = function () {
  function TransparentThenKeepSecondNode() {
    _classCallCheck(this, TransparentThenKeepSecondNode);
  }

  _createClass(TransparentThenKeepSecondNode, null, [{
    key: 'fromNodesAndProductionName',
    value: function fromNodesAndProductionName(nodes, productionName) {
      nodes = arrayUtil.keepSecond(nodes);

      return nodes;
    }
  }]);

  return TransparentThenKeepSecondNode;
}();

module.exports = TransparentThenKeepSecondNode;

},{"../../../util/array":86}],36:[function(require,module,exports){
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
    key: 'parseTree',
    value: function parseTree(lines) {
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

},{"../parseTree/terminalNode":44}],37:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TerminalNode = require('../terminal'),
    EpsilonTerminalNodeParseTree = require('../../parseTree/terminalNode/epsilon');

var EpsilonTerminalNode = function (_TerminalNode) {
  _inherits(EpsilonTerminalNode, _TerminalNode);

  function EpsilonTerminalNode() {
    _classCallCheck(this, EpsilonTerminalNode);

    return _possibleConstructorReturn(this, (EpsilonTerminalNode.__proto__ || Object.getPrototypeOf(EpsilonTerminalNode)).apply(this, arguments));
  }

  _createClass(EpsilonTerminalNode, [{
    key: 'getContent',
    value: function getContent() {
      var content = 'ε';

      return content;
    }
  }, {
    key: 'parseTree',
    value: function parseTree(lines) {
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

},{"../../parseTree/terminalNode/epsilon":45,"../terminal":36}],38:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
        var lastLine = last(this.lines),
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

function last(array) {
  return array[array.length - 1];
}

function marginStringFromMarginWidth(marginWidth, spaceCharacter) {
  spaceCharacter = spaceCharacter || ' ';

  var marginString = '';

  for (var index = 0; index < marginWidth; index++) {
    marginString += spaceCharacter;
  }

  return marginString;
}

},{}],39:[function(require,module,exports){
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
        var childNodeParseTree = childNode.parseTree(lines);

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

},{"./empty":40,"./horizontalBranch":41,"./verticalBranch":46}],40:[function(require,module,exports){
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

},{"../parseTree":38}],41:[function(require,module,exports){
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

},{"../parseTree":38}],42:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EmptyParseTree = require('./empty'),
    ChildNodesParseTree = require('./childNodes'),
    VerticalBranchParseTree = require('./verticalBranch'),
    ProductionNameParseTree = require('./productionName');

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
          firstChildNode = first(childNodes),
          childNode = firstChildNode,
          childNodesLength = childNodes.length,
          childNodeOrNodesParseTree = childNodesLength === 1 ? childNode.parseTree(lines) : ChildNodesParseTree.fromChildNodes(childNodes, lines),
          productionNameParseTree = ProductionNameParseTree.fromNonTerminalNode(nonTerminalNode, lines);

      var productionNameParseTreeVerticalBranchPosition = productionNameParseTree.getVerticalBranchPosition();

      var childNodeOrNodesParseTreeVerticalBranchPosition = childNodeOrNodesParseTree.getVerticalBranchPosition(),
          verticalBranchPositionsDifference = productionNameParseTreeVerticalBranchPosition - childNodeOrNodesParseTreeVerticalBranchPosition;

      var leftMarginWidth = undefined;

      if (false) {} else if (verticalBranchPositionsDifference < 0) {
        leftMarginWidth = -verticalBranchPositionsDifference;

        productionNameParseTree.addLeftMargin(leftMarginWidth);
      } else if (verticalBranchPositionsDifference > 0) {
        leftMarginWidth = +verticalBranchPositionsDifference;

        childNodeOrNodesParseTree.addLeftMargin(leftMarginWidth);
      }

      var productionNameParseTreeWidth = productionNameParseTree.getWidth(),
          childNodeOrNodesParseTreeWidth = childNodeOrNodesParseTree.getWidth(),
          widthsDifference = productionNameParseTreeWidth - childNodeOrNodesParseTreeWidth;

      var rightMarginWidth = undefined;

      if (false) {} else if (widthsDifference < 0) {
        rightMarginWidth = -widthsDifference;

        productionNameParseTree.addRightMargin(rightMarginWidth);
      } else if (widthsDifference > 0) {
        rightMarginWidth = +widthsDifference;

        childNodeOrNodesParseTree.addRightMargin(rightMarginWidth);
      }

      productionNameParseTreeVerticalBranchPosition = productionNameParseTree.getVerticalBranchPosition();

      var productionNameParseTreeDepth = productionNameParseTree.getDepth(),
          nonTerminalNodeParseTreeDepth = productionNameParseTreeDepth,
          ///
      verticalBranchPosition = productionNameParseTreeVerticalBranchPosition,
          ///
      nonTerminalNodeParseTree = EmptyParseTree.fromDepth(nonTerminalNodeParseTreeDepth, NonTerminalNodeParseTree, verticalBranchPosition);

      nonTerminalNodeParseTree.appendToRight(productionNameParseTree);
      nonTerminalNodeParseTree.appendToBottom(childNodeOrNodesParseTree);

      return nonTerminalNodeParseTree;
    }
  }]);

  return NonTerminalNodeParseTree;
}(VerticalBranchParseTree);

module.exports = NonTerminalNodeParseTree;

function first(array) {
  return array[0];
}

},{"./childNodes":39,"./empty":40,"./productionName":43,"./verticalBranch":46}],43:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VerticalBranchParseTree = require('./verticalBranch');

var ProductionNameParseTree = function (_VerticalBranchParseT) {
  _inherits(ProductionNameParseTree, _VerticalBranchParseT);

  function ProductionNameParseTree() {
    _classCallCheck(this, ProductionNameParseTree);

    return _possibleConstructorReturn(this, (ProductionNameParseTree.__proto__ || Object.getPrototypeOf(ProductionNameParseTree)).apply(this, arguments));
  }

  _createClass(ProductionNameParseTree, null, [{
    key: 'fromNonTerminalNode',
    value: function fromNonTerminalNode(nonTerminalNode, lines) {
      var productionName = nonTerminalNode.getProductionName(),
          firstLine = nonTerminalNode.getFirstLine(),
          lastLine = nonTerminalNode.getLastLine(),
          firstLineIndex = lines.indexOf(firstLine),
          lastLineIndex = lines.indexOf(lastLine),
          firstLineNumber = firstLineIndex + 1,
          lastLineNumber = lastLineIndex + 1,
          string = productionName + ' (' + firstLineNumber + '-' + lastLineNumber + ')',
          stringLength = string.length,
          verticalBranchParseTreeWidth = stringLength,
          ///
      verticalBranchParseTree = VerticalBranchParseTree.fromWidth(verticalBranchParseTreeWidth),
          verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(),
          productionNameParseTree = VerticalBranchParseTree.fromString(string, ProductionNameParseTree, verticalBranchPosition);

      productionNameParseTree.appendToTop(verticalBranchParseTree);

      return productionNameParseTree;
    }
  }]);

  return ProductionNameParseTree;
}(VerticalBranchParseTree);

module.exports = ProductionNameParseTree;

},{"./verticalBranch":46}],44:[function(require,module,exports){
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
          string = content + '[' + description + '] (' + lineNumber + ')',
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

},{"./verticalBranch":46}],45:[function(require,module,exports){
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

},{"../verticalBranch":46}],46:[function(require,module,exports){
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

},{"../parseTree":38}],47:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Context = require('./context'),
    parserUtil = require('../util/parser');

var CommonParser = function () {
  function CommonParser(productions) {
    _classCallCheck(this, CommonParser);

    this.productions = productions;
  }

  _createClass(CommonParser, [{
    key: 'getProductions',
    value: function getProductions() {
      return this.productions;
    }
  }, {
    key: 'nodeFromLines',
    value: function nodeFromLines(lines) {
      var production = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var tokens = parserUtil.tokensFromLines(lines),
          node = this.parse(tokens, production);

      return node;
    }
  }, {
    key: 'parse',
    value: function parse(tokens, production) {
      var node = null;

      if (production === null) {
        var productionsLength = this.productions.length;

        if (productionsLength > 0) {
          var firstProduction = first(this.productions);

          production = firstProduction; ///
        }
      }

      if (production !== null) {
        var context = new Context(tokens, this.productions),
            noWhitespace = false,
            nodeOrNodes = production.parse(context, noWhitespace);

        if (nodeOrNodes !== null) {
          node = nodeOrNodes instanceof Array ? first(nodeOrNodes) : nodeOrNodes;
        }
      }

      return node;
    }
  }, {
    key: 'findProduction',
    value: function findProduction(productionName) {
      return parserUtil.findProduction(productionName, this.productions);
    }
  }]);

  return CommonParser;
}();

module.exports = CommonParser;

function first(array) {
  return array[0];
}

},{"../util/parser":87,"./context":30}],48:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers');

var specialSymbols = lexers.specialSymbols,
    EndOfLineToken = lexers.EndOfLineToken;


var TerminalNode = require('../node/terminal');

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
      var string = '<END_OF_LINE>';

      return string;
    }
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol, significantTokenTypes, noWhitespace) {
      var endOfLinePart = null;

      var found = symbol === specialSymbols.END_OF_LINE;

      if (found) {
        endOfLinePart = new EndOfLinePart(noWhitespace);
      }

      return endOfLinePart;
    }
  }]);

  return EndOfLinePart;
}();

module.exports = EndOfLinePart;

},{"../node/terminal":36,"occam-lexers":120}],49:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EpsilonTerminalNode = require('../node/terminal/epsilon');

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
      var string = 'ε';

      return string;
    }
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol, significantTokenTypes, noWhitespace) {
      var epsilonPart = null;

      var found = symbol === 'ε';

      if (found) {
        epsilonPart = new EpsilonPart();
      }

      return epsilonPart;
    }
  }]);

  return EpsilonPart;
}();

module.exports = EpsilonPart;

},{"../node/terminal/epsilon":37}],50:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SequenceOfPartsPart = require('./sequenceOfParts'),
    ZeroOrMorePartsPart = require('./zeroOrMoreParts');

var OneOrMorePartsPart = function (_SequenceOfPartsPart) {
  _inherits(OneOrMorePartsPart, _SequenceOfPartsPart);

  function OneOrMorePartsPart() {
    _classCallCheck(this, OneOrMorePartsPart);

    return _possibleConstructorReturn(this, (OneOrMorePartsPart.__proto__ || Object.getPrototypeOf(OneOrMorePartsPart)).apply(this, arguments));
  }

  _createClass(OneOrMorePartsPart, [{
    key: 'parse',
    value: function parse(context, noWhitespace) {
      noWhitespace = this.getNoWhitespace(); ///

      var nodes = null;

      var productions = context.getProductions(),
          terminalPartOrProduction = this.getTerminalPartOrProduction(productions);

      if (terminalPartOrProduction !== null) {
        var terminalPartOrProductionNodeOrNodes = terminalPartOrProduction.parse(context, noWhitespace),
            terminalPartOrProductionParsed = terminalPartOrProductionNodeOrNodes !== null;

        if (terminalPartOrProductionParsed) {
          nodes = terminalPartOrProductionNodeOrNodes instanceof Array ? terminalPartOrProductionNodeOrNodes : [terminalPartOrProductionNodeOrNodes];

          var zeroOrMorePartsPart = ZeroOrMorePartsPart.fromOneOrMorePartsPart(this),
              ///
          zeroOrMorePartsPartNodeOrNodes = zeroOrMorePartsPart.parse(context, noWhitespace);

          nodes = nodes.concat(zeroOrMorePartsPartNodeOrNodes);
        }
      }

      return nodes;
    }
  }, {
    key: 'toString',
    value: function toString() {
      var operatorString = '+',
          string = _get(OneOrMorePartsPart.prototype.__proto__ || Object.getPrototypeOf(OneOrMorePartsPart.prototype), 'toString', this).call(this, operatorString);

      return string;
    }
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol, significantTokenTypes, noWhitespace) {
      var regExp = /([^*]+)\+$/,
          Class = OneOrMorePartsPart,
          oneOrMorePartsPart = _get(OneOrMorePartsPart.__proto__ || Object.getPrototypeOf(OneOrMorePartsPart), 'fromSymbol', this).call(this, symbol, significantTokenTypes, noWhitespace, regExp, Class);

      return oneOrMorePartsPart;
    }
  }]);

  return OneOrMorePartsPart;
}(SequenceOfPartsPart);

module.exports = OneOrMorePartsPart;

},{"./sequenceOfParts":54,"./zeroOrMoreParts":58}],51:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SequenceOfPartsPart = require('./sequenceOfParts');

var OptionalPartPart = function (_SequenceOfPartsPart) {
  _inherits(OptionalPartPart, _SequenceOfPartsPart);

  function OptionalPartPart() {
    _classCallCheck(this, OptionalPartPart);

    return _possibleConstructorReturn(this, (OptionalPartPart.__proto__ || Object.getPrototypeOf(OptionalPartPart)).apply(this, arguments));
  }

  _createClass(OptionalPartPart, [{
    key: 'parse',
    value: function parse(context, noWhitespace) {
      noWhitespace = this.getNoWhitespace(); ///

      var nodes = [];

      var productions = context.getProductions(),
          terminalPartOrProduction = this.getTerminalPartOrProduction(productions);

      if (terminalPartOrProduction !== null) {
        var terminalPartOrProductionNodeOrNodes = terminalPartOrProduction.parse(context, noWhitespace),
            terminalPartOrProductionParsed = terminalPartOrProductionNodeOrNodes !== null;

        if (terminalPartOrProductionParsed) {
          nodes = terminalPartOrProductionNodeOrNodes;
        }
      }

      return nodes;
    }
  }, {
    key: 'toString',
    value: function toString() {
      var operatorString = '?',
          string = _get(OptionalPartPart.prototype.__proto__ || Object.getPrototypeOf(OptionalPartPart.prototype), 'toString', this).call(this, operatorString);

      return string;
    }
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol, significantTokenTypes, noWhitespace) {
      var regExp = /([^*]+)\?$/,
          Class = OptionalPartPart,
          optionalPartPart = _get(OptionalPartPart.__proto__ || Object.getPrototypeOf(OptionalPartPart), 'fromSymbol', this).call(this, symbol, significantTokenTypes, noWhitespace, regExp, Class);

      return optionalPartPart;
    }
  }]);

  return OptionalPartPart;
}(SequenceOfPartsPart);

module.exports = OptionalPartPart;

},{"./sequenceOfParts":54}],52:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var parserUtil = require('../../util/parser');

var ProductionNamePart = function () {
  function ProductionNamePart(productionName, noWhitespace) {
    _classCallCheck(this, ProductionNamePart);

    this.productionName = productionName;
    this.noWhitespace = noWhitespace;
  }

  _createClass(ProductionNamePart, [{
    key: 'getProductionName',
    value: function getProductionName() {
      return this.productionName;
    }
  }, {
    key: 'isLeftRecursive',
    value: function isLeftRecursive(productionName) {
      var leftRecursive = this.productionName === productionName;

      return leftRecursive;
    }
  }, {
    key: 'parse',
    value: function parse(context, noWhitespace) {
      noWhitespace = noWhitespace || this.noWhitespace; ///

      var nodeOrNodes = null;

      var productions = context.getProductions(),
          production = parserUtil.findProduction(this.productionName, productions);

      if (production !== null) {
        nodeOrNodes = production.parse(context, noWhitespace);
      }

      return nodeOrNodes;
    }
  }, {
    key: 'toString',
    value: function toString() {
      var string = this.productionName;

      return string;
    }
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol, significantTokenTypes, noWhitespace) {
      var productionName = symbol,
          ///
      productionNamePart = new ProductionNamePart(productionName, noWhitespace);

      return productionNamePart;
    }
  }]);

  return ProductionNamePart;
}();

module.exports = ProductionNamePart;

},{"../../util/parser":87}],53:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalNode = require('..//node/terminal');

var RegularExpressionPart = function () {
  function RegularExpressionPart(regExp, noWhitespace) {
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
          var firstMatch = first(matches),
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
          string = regExpString; //

      return string;
    }
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol, significantTokenTypes, noWhitespace) {
      var regularExpressionPart = null;

      var regularExpressionPartRegExp = /^\/([^/]+)\/$/,
          matches = symbol.match(regularExpressionPartRegExp);

      if (matches !== null) {
        var secondMatch = second(matches),
            pattern = secondMatch,
            ///
        regExp = new RegExp(pattern);

        regularExpressionPart = new RegularExpressionPart(regExp, noWhitespace);
      }

      return regularExpressionPart;
    }
  }]);

  return RegularExpressionPart;
}();

module.exports = RegularExpressionPart;

function first(array) {
  return array[0];
}
function second(array) {
  return array[1];
}

},{"..//node/terminal":36}],54:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EndOfLinePart = require('./endOfLine'),
    parserUtil = require('../../util/parser'),
    TerminalSymbolPart = require('./terminalSymbol'),
    SignificantTokenTypePart = require('./significantTokenType');

var SequenceOfPartsPart = function () {
  function SequenceOfPartsPart(terminalPart, productionName, noWhitespace) {
    _classCallCheck(this, SequenceOfPartsPart);

    this.terminalPart = terminalPart;
    this.productionName = productionName;
    this.noWhitespace = noWhitespace;
  }

  _createClass(SequenceOfPartsPart, [{
    key: 'getTerminalPart',
    value: function getTerminalPart() {
      return this.terminalPart;
    }
  }, {
    key: 'getProductionName',
    value: function getProductionName() {
      return this.productionName;
    }
  }, {
    key: 'getNoWhitespace',
    value: function getNoWhitespace() {
      return this.noWhitespace;
    }
  }, {
    key: 'getTerminalPartOrProduction',
    value: function getTerminalPartOrProduction(productions) {
      var production = parserUtil.findProduction(this.productionName, productions),
          terminalPartOrProduction = this.terminalPart !== null ? this.terminalPart : production;

      return terminalPartOrProduction;
    }
  }, {
    key: 'toString',
    value: function toString(operatorString) {
      var string = void 0;

      var productionName = this.getProductionName();

      if (productionName !== null) {
        string = '' + productionName + operatorString;
      } else {
        var terminalPart = this.getTerminalPart(),
            terminalPartString = terminalPart.toString();

        string = '' + terminalPartString + operatorString;
      }

      return string;
    }
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol, significantTokenTypes, noWhitespace, regExp, Class) {
      var part = null;

      var matches = symbol.match(regExp);

      if (matches !== null) {
        var secondMatch = second(matches);

        symbol = secondMatch; ///

        var terminalPart = SignificantTokenTypePart.fromSymbol(symbol, significantTokenTypes, noWhitespace) || TerminalSymbolPart.fromSymbol(symbol, significantTokenTypes, noWhitespace) || EndOfLinePart.fromSymbol(symbol, significantTokenTypes, noWhitespace),
            productionName = symbol;

        part = new Class(terminalPart, productionName, noWhitespace);
      }

      return part;
    }
  }]);

  return SequenceOfPartsPart;
}();

module.exports = SequenceOfPartsPart;

function second(array) {
  return array[1];
}

},{"../../util/parser":87,"./endOfLine":48,"./significantTokenType":55,"./terminalSymbol":56}],55:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalNode = require('../node/terminal');

var SignificantTokenTypePart = function () {
  function SignificantTokenTypePart(significantTokenType, noWhitespace) {
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
      var string = '[' + this.significantTokenType + ']';

      return string;
    }
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol, significantTokenTypes, noWhitespace) {
      var significantTokenTypePart = null;

      var significantTokenTypePartRegExp = /^\[([^/]+)\]$/,
          matches = symbol.match(significantTokenTypePartRegExp);

      if (matches !== null) {
        var secondMatch = second(matches),
            type = secondMatch,
            ///
        foundType = significantTokenTypes.find(function (significantTokenType) {
          var found = type === significantTokenType;

          return found;
        }),
            found = foundType !== undefined;

        if (found) {
          significantTokenTypePart = new SignificantTokenTypePart(type, noWhitespace);
        }
      }

      return significantTokenTypePart;
    }
  }]);

  return SignificantTokenTypePart;
}();

module.exports = SignificantTokenTypePart;

},{"../node/terminal":36}],56:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalNode = require('../node/terminal');

var TerminalSymbolPart = function () {
  function TerminalSymbolPart(content, noWhitespace) {
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
      var string = '\'' + this.content + '\'';

      return string;
    }
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol, significantTokenTypes, noWhitespace) {
      var terminalSymbolPart = null;

      var terminalSymbolPartRegExp = /^'([^']+)'$/,
          matches = symbol.match(terminalSymbolPartRegExp);

      if (matches !== null) {
        var secondMatch = second(matches),
            content = secondMatch; ///

        terminalSymbolPart = new TerminalSymbolPart(content, noWhitespace);
      }

      return terminalSymbolPart;
    }
  }]);

  return TerminalSymbolPart;
}();

module.exports = TerminalSymbolPart;

function second(array) {
  return array[1];
}

},{"../node/terminal":36}],57:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalNode = require('../node/terminal');

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
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol, significantTokenTypes, noWhitespace) {
      var wildcardPart = null;

      var wildcardPartRegExp = /^\*$/,
          matches = symbol.match(wildcardPartRegExp);

      if (matches !== null) {
        wildcardPart = new WildcardPart(noWhitespace);
      }

      return wildcardPart;
    }
  }]);

  return WildcardPart;
}();

module.exports = WildcardPart;

},{"../node/terminal":36}],58:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SequenceOfPartsPart = require('./sequenceOfParts');

var ZeroOrMorePartsPart = function (_SequenceOfPartsPart) {
  _inherits(ZeroOrMorePartsPart, _SequenceOfPartsPart);

  function ZeroOrMorePartsPart() {
    _classCallCheck(this, ZeroOrMorePartsPart);

    return _possibleConstructorReturn(this, (ZeroOrMorePartsPart.__proto__ || Object.getPrototypeOf(ZeroOrMorePartsPart)).apply(this, arguments));
  }

  _createClass(ZeroOrMorePartsPart, [{
    key: 'toString',
    value: function toString() {
      var operatorString = '*',
          string = _get(ZeroOrMorePartsPart.prototype.__proto__ || Object.getPrototypeOf(ZeroOrMorePartsPart.prototype), 'toString', this).call(this, operatorString);

      return string;
    }
  }, {
    key: 'parse',
    value: function parse(context, noWhitespace) {
      noWhitespace = this.getNoWhitespace(); ///

      var nodes = [];

      var productions = context.getProductions(),
          terminalPartOrProduction = this.getTerminalPartOrProduction(productions);

      if (terminalPartOrProduction !== null) {
        for (;;) {
          var terminalPartOrProductionNodeOrNodes = terminalPartOrProduction.parse(context, noWhitespace),
              terminalPartOrProductionParsed = terminalPartOrProductionNodeOrNodes !== null;

          if (terminalPartOrProductionParsed) {
            nodes = nodes.concat(terminalPartOrProductionNodeOrNodes);
          } else {
            break;
          }
        }
      }

      return nodes;
    }
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol, significantTokenTypes, noWhitespace) {
      var regExp = /([^*]+)\*$/,
          Class = ZeroOrMorePartsPart,
          zeroOrMorePartsPart = _get(ZeroOrMorePartsPart.__proto__ || Object.getPrototypeOf(ZeroOrMorePartsPart), 'fromSymbol', this).call(this, symbol, significantTokenTypes, noWhitespace, regExp, Class);

      return zeroOrMorePartsPart;
    }
  }, {
    key: 'fromOneOrMorePartsPart',
    value: function fromOneOrMorePartsPart(oneOrMorePartsPart) {
      var terminalPart = oneOrMorePartsPart.getTerminalPart(),
          productionName = oneOrMorePartsPart.getProductionName(),
          noWhitespace = oneOrMorePartsPart.getNoWhitespace(),
          zeroOrMorePartsPart = new ZeroOrMorePartsPart(terminalPart, productionName, noWhitespace);

      return zeroOrMorePartsPart;
    }
  }]);

  return ZeroOrMorePartsPart;
}(SequenceOfPartsPart);

module.exports = ZeroOrMorePartsPart;

},{"./sequenceOfParts":54}],59:[function(require,module,exports){
'use strict';

var EpsilonPart = require('./part/epsilon'),
    WildcardPart = require('./part/wildcard'),
    EndOfLinePart = require('./part/endOfLine'),
    OptionalPartPart = require('./part/optionalPart'),
    ProductionNamePart = require('./part/productionName'),
    TerminalSymbolPart = require('./part/terminalSymbol'),
    OneOrMorePartsPart = require('./part/oneOrMoreParts'),
    ZeroOrMorePartsPart = require('./part/zeroOrMoreParts'),
    RegularExpressionPart = require('./part/regularExpression'),
    SignificantTokenTypePart = require('./part/significantTokenType');

var Parts = [EpsilonPart, WildcardPart, EndOfLinePart, RegularExpressionPart, SignificantTokenTypePart, TerminalSymbolPart, OptionalPartPart, OneOrMorePartsPart, ZeroOrMorePartsPart, ProductionNamePart];

module.exports = Parts;

},{"./part/endOfLine":48,"./part/epsilon":49,"./part/oneOrMoreParts":50,"./part/optionalPart":51,"./part/productionName":52,"./part/regularExpression":53,"./part/significantTokenType":55,"./part/terminalSymbol":56,"./part/wildcard":57,"./part/zeroOrMoreParts":58}],60:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rule = require('./rule'),
    NonTerminalNode = require('./node/nonTerminal');

var Production = function () {
  function Production(name, rules, Node) {
    _classCallCheck(this, Production);

    this.name = name;
    this.rules = rules;
    this.Node = Node;
  }

  _createClass(Production, [{
    key: 'getName',
    value: function getName() {
      return this.name;
    }
  }, {
    key: 'getRules',
    value: function getRules() {
      return this.rules;
    }
  }, {
    key: 'getNode',
    value: function getNode() {
      return this.Node;
    }
  }, {
    key: 'isFoundByProductionName',
    value: function isFoundByProductionName(productionName) {
      var found = this.name === productionName;

      return found;
    }
  }, {
    key: 'isLeftRecursive',
    value: function isLeftRecursive() {
      var leftRecursiveRules = this.getLeftRecursiveRules(),
          leftRecursiveRulesLength = leftRecursiveRules.length,
          leftRecursive = leftRecursiveRulesLength > 0;

      return leftRecursive;
    }
  }, {
    key: 'isImplicitlyLeftRecursive',
    value: function isImplicitlyLeftRecursive(previousProductions) {
      var implicitlyLeftRecursive = this.rules.some(function (rule) {
        var implicitlyLeftRecursive = rule.isImplicitlyLeftRecursive(previousProductions);

        return implicitlyLeftRecursive;
      });

      return implicitlyLeftRecursive;
    }
  }, {
    key: 'getLeftRecursiveRules',
    value: function getLeftRecursiveRules() {
      var productionName = this.name,
          ///
      leftRecursiveRules = this.rules.filter(function (rule) {
        var ruleLeftRecursive = rule.isLeftRecursive(productionName);

        return ruleLeftRecursive;
      });

      return leftRecursiveRules;
    }
  }, {
    key: 'getNonLeftRecursiveRules',
    value: function getNonLeftRecursiveRules() {
      var productionName = this.name,
          ///
      leftNonRecursiveRules = this.rules.filter(function (rule) {
        var ruleLeftRecursive = rule.isLeftRecursive(productionName),
            ruleNonLeftRecursive = !ruleLeftRecursive;

        return ruleNonLeftRecursive;
      });

      return leftNonRecursiveRules;
    }
  }, {
    key: 'concatRules',
    value: function concatRules(rules) {
      this.rules = this.rules.concat(rules);
    }
  }, {
    key: 'toString',
    value: function toString(maximumProductionNameLength) {
      var rulesString = this.rules.reduce(function (rulesString, rule) {
        var ruleString = rule.toString();

        if (rulesString === null) {
          rulesString = ruleString;
        } else {
          rulesString = rulesString + ' | ' + ruleString;
        }

        return rulesString;
      }, null),
          productionNameLength = this.name.length,
          ///
      paddingLength = maximumProductionNameLength - productionNameLength,
          padding = paddingFromPaddingLength(paddingLength),
          string = '\n  ' + this.name + padding + ' ::= ' + rulesString + '\n';

      return string;
    }
  }, {
    key: 'parse',
    value: function parse(context, noWhitespace) {
      var nodeOrNodes = null;

      context.increaseDepth();

      var tooDeep = context.isTooDeep();

      if (tooDeep) {
        throw new Error('The parse tree is too deep at production \'' + this.name + '\'');
      }

      var ruleNodes = null;

      var someRuleParsed = this.rules.some(function (rule) {
        ruleNodes = rule.parse(context, noWhitespace);

        var ruleParsed = ruleNodes !== null;

        return ruleParsed;
      });

      if (someRuleParsed) {
        var ruleNodesLength = ruleNodes.length;

        if (ruleNodesLength > 0) {
          var nodes = ruleNodes,
              ///
          productionName = this.name; ///

          nodeOrNodes = this.Node.fromNodesAndProductionName(nodes, productionName); ///
        }
      }

      context.decreaseDepth();

      return nodeOrNodes;
    }
  }], [{
    key: 'fromLine',
    value: function fromLine(line, significantTokenTypes, mappings) {
      var name = line.getName(),
          rules = line.mapSymbolSequences(function (symbolSequence) {
        var rule = Rule.fromSymbolSequence(symbolSequence, significantTokenTypes);

        return rule;
      }),
          Node = mappings.hasOwnProperty(name) ? mappings[name] : NonTerminalNode,
          ///
      production = new Production(name, rules, Node);

      return production;
    }
  }, {
    key: 'fromProduction',
    value: function fromProduction(production) {
      var name = production.getName(),
          rules = production.getRules(),
          Node = production.getNode();

      production = new Production(name, rules, Node); ///

      return production;
    }
  }]);

  return Production;
}();

module.exports = Production;

function paddingFromPaddingLength(paddingLength) {
  var padding = '';

  for (var position = 0; position < paddingLength; position++) {
    padding += ' ';
  }

  return padding;
}

},{"./node/nonTerminal":31,"./rule":61}],61:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers');

var Parts = require('./parts');

var specialSymbols = lexers.specialSymbols;

var Rule = function () {
  function Rule(parts) {
    _classCallCheck(this, Rule);

    this.parts = parts;
  }

  _createClass(Rule, [{
    key: 'getParts',
    value: function getParts() {
      return this.parts;
    }
  }, {
    key: 'getFirstPart',
    value: function getFirstPart() {
      var firstPart = first(this.parts);

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
    key: 'isLeftRecursive',
    value: function isLeftRecursive(productionName) {
      var leftRecursive = false;

      var firstProductionNamePart = this.getFirstProductionNamePart();

      if (firstProductionNamePart !== null) {
        leftRecursive = firstProductionNamePart.isLeftRecursive(productionName);
      }

      return leftRecursive;
    }
  }, {
    key: 'isImplicitlyLeftRecursive',
    value: function isImplicitlyLeftRecursive(previousProductions) {
      var implicitlyLeftRecursivePreviousProduction = this.implicitlyLeftRecursivePreviousProduction(previousProductions),
          implicitlyLeftRecursive = implicitlyLeftRecursivePreviousProduction !== null;

      return implicitlyLeftRecursive;
    }
  }, {
    key: 'implicitlyLeftRecursivePreviousProduction',
    value: function implicitlyLeftRecursivePreviousProduction(previousProductions) {
      var implicitlyLeftRecursivePreviousProduction = null;

      var firstProductionNamePart = this.getFirstProductionNamePart();

      if (firstProductionNamePart !== null) {
        var firstProductionNamePartProductionName = firstProductionNamePart.getProductionName(),
            firstProductionName = firstProductionNamePartProductionName; ///

        previousProductions.some(function (previousProduction) {
          var previousProductionName = previousProduction.getName(),
              previousProductionImplicitlyLeftRecursive = previousProductionName === firstProductionName;

          if (previousProductionImplicitlyLeftRecursive) {
            implicitlyLeftRecursivePreviousProduction = previousProduction;

            return true;
          }
        });
      }

      return implicitlyLeftRecursivePreviousProduction;
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
  }], [{
    key: 'fromSymbolSequence',
    value: function fromSymbolSequence(symbolSequence, significantTokenTypes) {
      var noWhitespace = false;

      var parts = symbolSequence.reduceSymbols(function (parts, symbol) {
        if (symbol === specialSymbols.NO_WHITESPACE) {
          noWhitespace = true;
        } else {
          var part = partFromSymbol(symbol, significantTokenTypes, noWhitespace);

          parts.push(part);

          noWhitespace = false;
        }

        return parts;
      }, []),
          rule = new Rule(parts);

      return rule;
    }
  }]);

  return Rule;
}();

module.exports = Rule;

function partFromSymbol(symbol, significantTokenTypes, noWhitespace) {
  var part = undefined; ///

  Parts.some(function (Part) {
    part = Part.fromSymbol(symbol, significantTokenTypes, noWhitespace);

    var parsed = part !== null;

    return parsed;
  });

  return part;
}

function first(array) {
  return array[0];
}

},{"./parts":59,"occam-lexers":120}],62:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easy = require('easy'),
    easylayout = require('easy-layout');

var Textarea = easy.Textarea,
    SizeableElement = easylayout.SizeableElement,
    VerticalSplitter = easylayout.VerticalSplitter;


var contentTextareaSelector = 'textarea#content',
    parseTreeTextareaSelector = 'textarea#parseTree',
    bnfGrammarTextareaSelector = 'textarea#bnfGrammar',
    sizeableElementSelector = '#sizeableElement',
    verticalSplitterSelector = '#verticalSplitter',
    contentTextarea = new Textarea(contentTextareaSelector),
    parseTreeTextarea = new Textarea(parseTreeTextareaSelector),
    bnfGrammarTextarea = new Textarea(bnfGrammarTextareaSelector),
    sizeableElement = new SizeableElement(sizeableElementSelector),
    beforeSizeableElement = false,
    afterSizeableElement = true;

new VerticalSplitter(verticalSplitterSelector, beforeSizeableElement, afterSizeableElement);

var Example = function () {
  function Example() {
    _classCallCheck(this, Example);
  }

  _createClass(Example, null, [{
    key: 'getBNFGrammarTextareaValue',
    value: function getBNFGrammarTextareaValue() {
      return bnfGrammarTextarea.getValue();
    }
  }, {
    key: 'setBNFGrammarTextareaValue',
    value: function setBNFGrammarTextareaValue(value) {
      bnfGrammarTextarea.setValue(value);
    }
  }, {
    key: 'setContentTextareaValue',
    value: function setContentTextareaValue(value) {
      contentTextarea.setValue(value);
    }
  }, {
    key: 'onBNFGrammarTextareaKeyUp',
    value: function onBNFGrammarTextareaKeyUp(handler) {
      bnfGrammarTextarea.onKeyUp(handler);
    }
  }, {
    key: 'onContentTextareaKeyUp',
    value: function onContentTextareaKeyUp(handler) {
      contentTextarea.onKeyUp(handler);
    }
  }, {
    key: 'updateParseTreeTextarea',
    value: function updateParseTreeTextarea(lexer, parser, production) {
      try {
        var contentTextareaValue = contentTextarea.getValue(),
            content = contentTextareaValue,
            ///
        lines = lexer.linesFromContent(content),
            node = parser.nodeFromLines(lines, production),
            documentNode = node; ///

        if (documentNode === null) {
          throw new Error('The document cannot be parsed for some reason.');
        }

        var parseTree = documentNode.parseTree(lines);

        parseTree.shiftLine(); //

        var parseTreeString = parseTree.toString(),
            parseTreeTextareaHTML = parseTreeString; ///

        parseTreeTextarea.html(parseTreeTextareaHTML);

        contentTextarea.removeClass('error');
      } catch (error) {
        contentTextarea.addClass('error');

        Example.clearParseTreeTextarea();
      }
    }
  }, {
    key: 'clearParseTreeTextarea',
    value: function clearParseTreeTextarea() {
      var parseTreeTextareaHTML = '';

      parseTreeTextarea.html(parseTreeTextareaHTML);
    }
  }]);

  return Example;
}();

module.exports = Example;

},{"easy":95,"easy-layout":88}],63:[function(require,module,exports){
'use strict';

module.exports = {
  BNFExample: require('./examples/bnf'),
  BasicExample: require('./examples/basic'),
  FlorenceExample: require('./examples/florence')
};

},{"./examples/basic":64,"./examples/bnf":65,"./examples/florence":66}],64:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easy = require('easy'),
    lexers = require('occam-lexers');

var Example = require('../example'),
    grammar = require('../basic/grammar'),
    BasicParser = require('../basic/parser');

var Textarea = easy.Textarea,
    BasicLexer = lexers.BasicLexer;


var lexicalGrammarTextareaSelector = 'textarea#lexicalGrammar',
    adjustedBNFGrammarTextareaSelector = 'textarea#adjustedBNFGrammar',
    lexicalGrammar = BasicLexer.grammar;

var lexicalGrammarTextarea = void 0,
    adjustedBNFGrammarTextarea = void 0,
    basicLexer = null,
    basicParser = null;

var BasicExample = function () {
  function BasicExample() {
    _classCallCheck(this, BasicExample);
  }

  _createClass(BasicExample, null, [{
    key: 'run',
    value: function run() {
      lexicalGrammarTextarea = new Textarea(lexicalGrammarTextareaSelector);
      adjustedBNFGrammarTextarea = new Textarea(adjustedBNFGrammarTextareaSelector);

      var bnfGrammarTextareaValue = grammar,
          ///
      lexicalGrammarTextareaValue = JSON.stringify(lexicalGrammar, null, '  '); ///

      lexicalGrammarTextarea.setValue(lexicalGrammarTextareaValue);

      Example.setBNFGrammarTextareaValue(bnfGrammarTextareaValue);

      Example.onBNFGrammarTextareaKeyUp(update);

      Example.onContentTextareaKeyUp(update);

      lexicalGrammarTextarea.onKeyUp(update);

      update();
    }
  }]);

  return BasicExample;
}();

function update() {
  updateBasicLexer();

  updateBasicParser();

  updateAdjustedBNFGrammar();

  if (basicLexer !== null) {
    var production = null; ///

    Example.updateParseTreeTextarea(basicLexer, basicParser, production);
  } else {
    Example.clearParseTreeTextarea();
  }
}

module.exports = BasicExample;

function updateBasicLexer() {
  var lexicalGrammarTextareaValue = lexicalGrammarTextarea.getValue();

  var lexicalGrammar = null;

  try {
    lexicalGrammar = JSON.parse(lexicalGrammarTextareaValue);
  } catch (error) {}

  var lexicalGrammarValid = lexicalGrammar !== null;

  if (lexicalGrammarValid) {
    basicLexer = BasicLexer.fromGrammar(lexicalGrammar);

    lexicalGrammarTextarea.removeClass('error');
  } else {
    lexicalGrammarTextarea.addClass('error');

    basicLexer = null;
  }
}

function updateBasicParser() {
  var bnfGrammarTextareaValue = Example.getBNFGrammarTextareaValue(),
      grammar = bnfGrammarTextareaValue; ///

  basicParser = BasicParser.fromGrammar(grammar);
}

function updateAdjustedBNFGrammar() {
  var productions = basicParser.getProductions(),
      maximumProductionNameLength = productions.reduce(function (maximumProductionNameLength, production) {
    var productionName = production.getName(),
        productionNameLength = productionName.length;

    maximumProductionNameLength = Math.max(maximumProductionNameLength, productionNameLength);

    return maximumProductionNameLength;
  }, 0),
      adjustedBNFGrammarTextareaValue = productions.reduce(function (adjustedBNFGrammarTextarea, production) {
    var productionString = production.toString(maximumProductionNameLength);

    adjustedBNFGrammarTextarea += productionString;

    return adjustedBNFGrammarTextarea;
  }, []);

  adjustedBNFGrammarTextarea.setValue(adjustedBNFGrammarTextareaValue);
}

},{"../basic/grammar":1,"../basic/parser":2,"../example":62,"easy":95,"occam-lexers":120}],65:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easy = require('easy'),
    lexers = require('occam-lexers');

var Example = require('../example'),
    grammar = require('../bnf/grammar'),
    BNFParser = require('../bnf/parser');

var Textarea = easy.Textarea,
    BNFLexer = lexers.BNFLexer;


var lexicalGrammarTextareaSelector = 'textarea#lexicalGrammar',
    lexicalGrammar = BNFLexer.grammar;

var lexicalGrammarTextarea = void 0,
    bnfLexer = null,
    bnfParser = null;

var BNFExample = function () {
  function BNFExample() {
    _classCallCheck(this, BNFExample);
  }

  _createClass(BNFExample, null, [{
    key: 'run',
    value: function run() {
      lexicalGrammarTextarea = new Textarea(lexicalGrammarTextareaSelector);

      var lexicalGrammarTextareaValue = JSON.stringify(lexicalGrammar, null, '  '),
          ///
      bnfGrammarTextareaValue = grammar,
          ///
      contentTextareaValue = '\n\n    naturalNumber            ::=  /d+/\n                            \n';

      lexicalGrammarTextarea.setValue(lexicalGrammarTextareaValue);

      Example.setBNFGrammarTextareaValue(bnfGrammarTextareaValue);

      Example.setContentTextareaValue(contentTextareaValue);

      Example.onBNFGrammarTextareaKeyUp(update);

      Example.onContentTextareaKeyUp(update);

      lexicalGrammarTextarea.onKeyUp(update);

      update();
    }
  }]);

  return BNFExample;
}();

function update() {
  updateBNFLexer();

  updateBNFParser();

  if (bnfLexer !== null) {
    var production = null; ///

    Example.updateParseTreeTextarea(bnfLexer, bnfParser, production);
  } else {
    Example.clearParseTreeTextarea();
  }
}

module.exports = BNFExample;

function updateBNFLexer() {
  var lexicalGrammarTextareaValue = lexicalGrammarTextarea.getValue();

  var lexicalGrammar = null;

  try {
    lexicalGrammar = JSON.parse(lexicalGrammarTextareaValue);
  } catch (error) {}

  var lexicalGrammarValid = lexicalGrammar !== null;

  if (lexicalGrammarValid) {
    bnfLexer = BNFLexer.fromGrammar(lexicalGrammar);

    lexicalGrammarTextarea.removeClass('error');
  } else {
    lexicalGrammarTextarea.addClass('error');

    bnfLexer = null;
  }
}

function updateBNFParser() {
  bnfParser = BNFParser.fromNothing();
}

},{"../bnf/grammar":3,"../bnf/parser":4,"../example":62,"easy":95,"occam-lexers":120}],66:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easy = require('easy'),
    lexers = require('occam-lexers');

var Example = require('../example'),
    grammar = require('../florence/grammar'),
    mappings = require('../florence/mappings'),
    FlorenceParser = require('../florence/parser');

var Checkbox = easy.Checkbox,
    Textarea = easy.Textarea,
    FlorenceLexer = lexers.FlorenceLexer;


var mappingsCheckboxSelector = '#mappings',
    productionNameTextareaSelector = '#productionName';

var florenceLexer = FlorenceLexer.fromNothing();

var productionName = void 0,
    mappingsCheckbox = void 0,
    productionNameTextarea = void 0;

var FlorenceExample = function () {
      function FlorenceExample() {
            _classCallCheck(this, FlorenceExample);
      }

      _createClass(FlorenceExample, null, [{
            key: 'run',
            value: function run() {
                  mappingsCheckbox = new Checkbox(mappingsCheckboxSelector);
                  productionNameTextarea = new Textarea(productionNameTextareaSelector);

                  var bnfGrammarTextareaValue = grammar; ///

                  Example.setBNFGrammarTextareaValue(bnfGrammarTextareaValue);

                  mappingsCheckbox.onChange(update);

                  productionNameTextarea.onKeyUp(update);

                  Example.onBNFGrammarTextareaKeyUp(update);

                  Example.onContentTextareaKeyUp(update);

                  update();
            }
      }]);

      return FlorenceExample;
}();

function update() {
      var mappingsCheckboxChecked = mappingsCheckbox.isChecked(),
          bnfGrammarTextareaValue = Example.getBNFGrammarTextareaValue(),
          productionNameTextareaValue = productionNameTextarea.getValue(),
          adjustedMappings = mappingsCheckboxChecked ? mappings : {},
          adjustedGrammar = bnfGrammarTextareaValue,
          ///
      productionName = productionNameTextareaValue,
          ///
      florenceParser = FlorenceParser.fromGrammarAndMappings(adjustedGrammar, adjustedMappings),
          production = florenceParser.findProduction(productionName);

      Example.updateParseTreeTextarea(florenceLexer, florenceParser, production);
}

module.exports = FlorenceExample;

},{"../example":62,"../florence/grammar":67,"../florence/mappings":68,"../florence/parser":69,"easy":95,"occam-lexers":120}],67:[function(require,module,exports){
'use strict';

var grammar = '\n\n\n    document                                                      ::=   header? verticalSpace? body?   \n                                              \n                                              \n                                              \n    header                                                        ::=   includeDirective+\n    \n    includeDirective                                              ::=   "include"<NO_WHITESPACE>"("<NO_WHITESPACE>[string]<NO_WHITESPACE>")" <END_OF_LINE>\n                                              \n        \n                                              \n    body                                                          ::=   part+  \n        \n    part                                                          ::=   type(s)Declaration\n    \n                                                                    |   typedConstructor(s)Declaration \n                                                        \n                                                                    |   (typed)Variable(s)Declaration\n                                                        \n                                                                    |   (qualified)Metavariable(s)Declaration\n\n                                                                    |   rule \n                                                        \n                                                                    |   axiom\n                                                         \n                                                                    |   theorem \n                                                        \n                                                                    |   lemma \n                                                        \n                                                                    |   verticalSpace \n                                                        \n                                                                    |   error\n                                                        \n                                                        \n                                                        \n    type(s)Declaration                                            ::=   typesDeclaration | typeDeclaration \n    \n    typedConstructor(s)Declaration                                ::=   typedConstructorsDeclaration | typedConstructorDeclaration \n    \n    (typed)Variable(s)Declaration                                 ::=   (typed)VariableDeclaration | (typed)VariablesDeclaration\n    \n    (qualified)Metavariable(s)Declaration                         ::=   (qualified)MetavariablesDeclaration | (qualified)MetavariableDeclaration\n\n    rule                                                          ::=   "Rule" parenthesisedLabelList? <END_OF_LINE> premise(s)? conclusion proof?\n    \n    axiom                                                         ::=   "Axiom" parenthesisedLabelList? <END_OF_LINE> premise(s)? conclusion\n    \n    theorem                                                       ::=   "Theorem" parenthesisedLabelList? <END_OF_LINE> premise(s)? conclusion proof?\n        \n    lemma                                                         ::=   "Lemma" parenthesisedLabelList? <END_OF_LINE> premise(s)? conclusion proof?\n\n\n\n    typesDeclaration                                              ::=   "Types" typeList\n    \n    typeDeclaration                                               ::=   "Type" type\n    \n    typeList                                                      ::=   type<NO_WHITESPACE>commaThenType*\n    \n    commaThenType                                                 ::=   ","<NO_WHITESPACE>type\n    \n    type                                                          ::=   typeName\n\n    typeName                                                      ::=   name\n\n    \n    \n    typedConstructorsDeclaration                                  ::=   "Constructors" typedConstructorList\n    \n    typedConstructorDeclaration                                   ::=   "Constructor" typedConstructor\n\n    typedConstructorList                                          ::=   typedConstructor<NO_WHITESPACE>commaThenTypedConstructor*\n    \n    commaThenTypedConstructor                                     ::=   ","<NO_WHITESPACE>typedConstructor\n    \n    typedConstructor                                              ::=   constructor<NO_WHITESPACE>":"<NO_WHITESPACE>type\n    \n    constructor                                                   ::=   constructorName<NO_WHITESPACE>parenthesisedTypeList?\n    \n    parenthesisedTypeList                                         ::=   "("<NO_WHITESPACE>typeList<NO_WHITESPACE>")"\n\n    constructorName                                               ::=   name\n\n\n\n    (typed)VariablesDeclaration                                   ::=   "Variables" (typed)VariableList\n    \n    (typed)VariableDeclaration                                    ::=   "Variable" (typed)Variable\n\n    (typed)VariableList                                           ::=   (typed)Variable<NO_WHITESPACE>commaThen(typed)Variable*\n    \n    commaThen(typed)Variable                                      ::=   ","<NO_WHITESPACE>(typed)Variable\n    \n    (typed)Variable                                               ::=   typedVariable | variable\n    \n    typedVariable                                                 ::=   variable<NO_WHITESPACE>":"<NO_WHITESPACE>type\n    \n    variable                                                      ::=   variableName\n    \n    variableName                                                  ::=   name\n    \n    \n    \n    (qualified)MetavariablesDeclaration                           ::=   "Metavariables" (qualified)MetavariableList\n    \n    (qualified)MetavariableDeclaration                            ::=   "Metavariable" (qualified)Metavariable\n    \n    (qualified)MetavariableList                                   ::=   (qualified)Metavariable<NO_WHITESPACE>commaThen(qualified)Metavariable+\n\n    commaThen(qualified)Metavariable                              ::=   ","<NO_WHITESPACE>(qualified)Metavariable\n\n    (qualified)Metavariable                                       ::=   qualifiedMetavariable | metavariable\n    \n    qualifiedMetavariable                                         ::=   metavariable<NO_WHITESPACE>parenthesisedTypeOrTerm\n\n    metavariable                                                  ::=   metavariableName\n\n    parenthesisedTypeOrTerm                                       ::=   "("<NO_WHITESPACE>typeOrTerm<NO_WHITESPACE>")"\n    \n    typeOrTerm                                                    ::=   type | term\n    \n    metavariableName                                              ::=   name\n    \n    \n\n    parenthesisedLabelList                                        ::=   "("<NO_WHITESPACE>labelList<NO_WHITESPACE>")"\n    \n    labelList                                                     ::=   label<NO_WHITESPACE>commaThenLabel*\n    \n    commaThenLabel                                                ::=   ","<NO_WHITESPACE>label\n    \n    label                                                         ::=   labelName<NO_WHITESPACE>parenthesisedTermList?\n    \n    labelName                                                     ::=   name\n\n    \n    \n    premise(s)                                                    ::=   premise | premises\n    \n    premise                                                       ::=   "Premise" <END_OF_LINE> unjustifiedStatementOrUnknown\n    \n    premises                                                      ::=   "Premises" <END_OF_LINE> unjustifiedStatementOrUnknown unjustifiedStatementOrUnknown+\n    \n    conclusion                                                    ::=   "Conclusion" <END_OF_LINE> (un)justifiedStatementOrUnknown\n    \n\n\n    proof                                                         ::=   "Proof" <END_OF_LINE> (abridged)ProofDerivation\n    \n    (abridged)ProofDerivation                                     ::=   proofDerivation | abridgedProofDerivation\n    \n    abridgedProofDerivation                                       ::=   (un)justifiedStatementOrUnknown\n    \n    proofDerivation                                               ::=   derivation therefore\n    \n    derivation                                                    ::=   subDerivation+    \n    \n    therefore                                                     ::=   "Therefore" <END_OF_LINE> (un)justifiedStatementOrUnknown\n    \n    subDerivation                                                 ::=   subLemma | (un)justifiedStatementOrUnknown\n    \n    \n    \n    subLemma                                                      ::=   suppose then? hence unjustifiedStatementOrUnknown? verticalSpace?    \n    \n    suppose                                                       ::=   "Suppose" <END_OF_LINE> unjustifiedStatementOrUnknown+\n    \n    then                                                          ::=   "Then" <END_OF_LINE> derivation\n    \n    hence                                                         ::=   "Hence" <END_OF_LINE> (un)justifiedStatementOrUnknown\n    \n    \n    \n    (un)justifiedStatementOrUnknown                               ::=   justifiedStatement | unjustifiedStatement | unknown\n    \n    unjustifiedStatementOrUnknown                                 ::=   unjustifiedStatement | unknown\n    \n    unjustifiedStatement                                          ::=   statement <END_OF_LINE>\n    \n    justifiedStatement                                            ::=   statement justification <END_OF_LINE>\n      \n    justification                                                 ::=   byOrFrom reference\n     \n    byOrFrom                                                      ::=   "by" | "from"\n     \n    reference                                                     ::=   referenceName<NO_WHITESPACE>parenthesisedTermList?\n\n    referenceName                                                 ::=   name\n\n    \n\n    statement                                                     ::=   proofAssertion | typeAssertion | equality | expression     \n    \n    \n    \n    proofAssertion                                                ::=   (qualified)Metavariable "::" (qualified)Metavariable\n\n    typeAssertion                                                 ::=   expression ":" type\n    \n    equality                                                      ::=   expression "=" expression    \n    \n    expression                                                    ::=   term | (qualified)Metavariable\n    \n    \n\n    term                                                          ::=   compoundTerm | variableName\n    \n    compoundTerm                                                  ::=   constructorName<NO_WHITESPACE>parenthesisedTermList?\n    \n    \n\n    parenthesisedTermList                                         ::=   "("<NO_WHITESPACE>termList<NO_WHITESPACE>")"\n\n    termList                                                      ::=   term<NO_WHITESPACE>commaThenTerm*\n    \n    commaThenTerm                                                 ::=   ","<NO_WHITESPACE>term\n    \n\n\n    name                                                          ::=   /\\w+/\n    \n    \n\n    unknown                                                       ::=   specialUnassignedOrMinorKeywords+ <END_OF_LINE>\n\n    specialUnassignedOrMinorKeywords                              ::=   [special] | [unassigned] | "by" | "from"\n\n\n\n    verticalSpace                                                 ::=   <END_OF_LINE>+\n    \n    \n    \n    error                                                         ::=   *\n    \n';

module.exports = grammar;

},{}],68:[function(require,module,exports){
'use strict';

var TransparentNode = require('../common/node/nonTerminal/transparent'),
    DiscardSecondChildNode = require('../common/node/nonTerminal/discardSecondChild'),
    TransparentThenKeepSecondNode = require('../common/node/nonTerminal/transparentThenKeepSecond');

var mappings = {

  'name': TransparentNode,
  'part': TransparentNode,
  'statement': TransparentNode,
  'subDerivation': TransparentNode,
  'proofDerivation': TransparentNode,
  'parenthesisedType': TransparentNode,
  'abridgedProofDerivation': TransparentNode,

  'typeName': TransparentNode,
  'labelName': TransparentNode,
  'variableName': TransparentNode,
  'referenceName': TransparentNode,
  'constructorName': TransparentNode,
  'metavariableName': TransparentNode,

  'premise(s)': TransparentNode,
  'type(s)Declaration': TransparentNode,
  '(typed)Variable(s)Declaration': TransparentNode,
  'typedConstructor(s)Declaration': TransparentNode,
  '(qualified)Metavariable(s)Declaration': TransparentNode,

  '(typed)Variable': TransparentNode,
  '(qualified)Metavariable': TransparentNode,
  '(abridged)ProofDerivation': TransparentNode,

  'byOrFrom': TransparentNode,
  'typeOrTerm': TransparentNode,
  'unjustifiedStatementOrUnknown': TransparentNode,
  '(un)justifiedStatementOrUnknown': TransparentNode,
  'specialUnassignedOrMinorKeywords': TransparentNode,

  'commaThenTerm': TransparentThenKeepSecondNode,
  'commaThenType': TransparentThenKeepSecondNode,
  'commaThenLabel': TransparentThenKeepSecondNode,
  'commaThenMetavariable': TransparentThenKeepSecondNode,
  'commaThen(typed)Variable': TransparentThenKeepSecondNode,
  'commaThenTypedConstructor': TransparentThenKeepSecondNode,
  'commaThen(qualified)Metavariable': TransparentThenKeepSecondNode,

  'parenthesisedTermList': TransparentThenKeepSecondNode,
  'parenthesisedTypeList': TransparentThenKeepSecondNode,
  'parenthesisedLabelList': TransparentThenKeepSecondNode,

  'conclusion': DiscardSecondChildNode,
  'typedVariable': DiscardSecondChildNode,
  'typedConstructor': DiscardSecondChildNode

};

module.exports = mappings;

},{"../common/node/nonTerminal/discardSecondChild":32,"../common/node/nonTerminal/transparent":34,"../common/node/nonTerminal/transparentThenKeepSecond":35}],69:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var grammar = require('./grammar'),
    mappings = require('./mappings'),
    CommonParser = require('../common/parser'),
    PrimitiveParser = require('../primitive/parser');

var PrimitiveLexer = lexers.PrimitiveLexer,
    FlorenceLexer = lexers.FlorenceLexer;


var significantTokenTypes = FlorenceLexer.significantTokenTypes();

var FlorenceParser = function (_CommonParser) {
  _inherits(FlorenceParser, _CommonParser);

  function FlorenceParser() {
    _classCallCheck(this, FlorenceParser);

    return _possibleConstructorReturn(this, (FlorenceParser.__proto__ || Object.getPrototypeOf(FlorenceParser)).apply(this, arguments));
  }

  _createClass(FlorenceParser, null, [{
    key: 'fromAdditionalMappings',
    value: function fromAdditionalMappings(additionalMappings) {
      var florenceParser = FlorenceParser.fromGrammarAndMappings(grammar, Object.assign(mappings, additionalMappings)); ///

      return florenceParser;
    }
  }, {
    key: 'fromGrammarAndMappings',
    value: function fromGrammarAndMappings(grammar, mappings) {
      var lines = PrimitiveLexer.linesFromGrammar(grammar),
          productions = PrimitiveParser.parse(lines, significantTokenTypes, mappings),
          florenceParser = new FlorenceParser(productions);

      return florenceParser;
    }
  }]);

  return FlorenceParser;
}(CommonParser);

module.exports = FlorenceParser;

},{"../common/parser":47,"../primitive/parser":85,"./grammar":67,"./mappings":68,"occam-lexers":120}],70:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Graph = require('./graph'),
    arrayUtil = require('../util/array'),
    parserUtil = require('../util/parser'),
    Production = require('../common/production'),
    UnitRuleProduction = require('./production/unitRule'),
    UnitRulesProduction = require('./production/unitRules'),
    NonUnitRulesProduction = require('./production/nonUnitRules');

var cycles = function () {
  function cycles() {
    _classCallCheck(this, cycles);
  }

  _createClass(cycles, null, [{
    key: 'eliminate',
    value: function eliminate(productions) {
      var unitRulesProductions = unitRulesProductionsFromProductions(productions),
          graph = Graph.fromUnitRulesProductions(unitRulesProductions),
          components = graph.getComponents(),
          nonCyclicProductions = nonCyclicProductionsFromComponents(components, productions);

      productions = nonCyclicProductions; ///

      return productions;
    }
  }]);

  return cycles;
}();

module.exports = cycles;

function unitRulesProductionsFromProductions(productions) {
  var unitRulesProductions = productions.reduce(function (unitRulesProductions, production) {
    var unitRulesProduction = UnitRulesProduction.fromProduction(production);

    if (unitRulesProduction !== null) {
      unitRulesProductions.push(unitRulesProduction);
    }

    return unitRulesProductions;
  }, []);

  return unitRulesProductions;
}

function nonCyclicProductionsFromComponents(components, productions) {
  var nonCyclicProductions = components.reduce(function (nonCyclicProductions, component) {
    var componentNonCyclic = component.isNonCyclic();

    if (componentNonCyclic) {
      nonCyclicProductionFromComponent(component, productions, nonCyclicProductions);
    } else {
      nonCyclicProductionsFromComponent(component, productions, nonCyclicProductions);
    }

    return nonCyclicProductions;
  }, []);

  return nonCyclicProductions;
}

function nonCyclicProductionFromComponent(component, productions, nonCyclicProductions) {
  var firstVertex = component.getFirstVertex(),
      firstVertexName = firstVertex.getName(),
      nonCyclicProductionName = firstVertexName,
      ///
  nonCyclicProduction = parserUtil.findProduction(nonCyclicProductionName, productions);

  nonCyclicProductions.push(nonCyclicProduction);
}

function nonCyclicProductionsFromComponent(component, productions, nonCyclicProductions) {
  productions = productionsFromComponent(component, productions); ///

  var unitRuleProductions = unitRuleProductionsFromProductions(productions),
      nonUnitRulesProductions = nonUnitRulesProductionsFromProductions(productions),
      removedUnitRuleProductions = [],
      addedNonUnitRulesProductions = [];

  var unitRuleProductionsLength = unitRuleProductions.length;

  while (unitRuleProductionsLength > 0) {
    var removedUnitRuleProduction = unitRuleProductions.shift();

    removedUnitRuleProductions.push(removedUnitRuleProduction);

    var removedUnitRuleProductionName = removedUnitRuleProduction.getName(),
        removedUnitRuleProductionUnitRuleProductionName = removedUnitRuleProduction.getUnitRuleProductionName(),
        nonUnitRulesProductionName = removedUnitRuleProductionUnitRuleProductionName,
        ///
    nonUnitRulesProduction = parserUtil.findProduction(nonUnitRulesProductionName, nonUnitRulesProductions),
        nonUnitRulesProductionRules = nonUnitRulesProduction.getRules(),
        addedNonUnitRulesProductionName = removedUnitRuleProductionName,
        ///
    addedNonUnitRulesProductionRules = nonUnitRulesProductionRules; ///

    var addedNonUnitRulesProduction = parserUtil.findProduction(addedNonUnitRulesProductionName, addedNonUnitRulesProductions);

    if (addedNonUnitRulesProduction === null) {
      var removedUnitRuleProductionNode = removedUnitRuleProduction.getNode(),
          addedNonUnitRulesProductionNode = removedUnitRuleProductionNode;

      addedNonUnitRulesProduction = new Production(addedNonUnitRulesProductionName, addedNonUnitRulesProductionRules, addedNonUnitRulesProductionNode);

      addedNonUnitRulesProductions.push(addedNonUnitRulesProduction);
    } else {
      addedNonUnitRulesProduction.concatRules(nonUnitRulesProductionRules);
    }

    var unitRuleProductionName = removedUnitRuleProductionUnitRuleProductionName,
        ///
    unitRuleProduction = parserUtil.findProduction(unitRuleProductionName, unitRuleProductions);

    if (unitRuleProduction !== null) {
      var unitRuleProductionUnitRuleProductionName = unitRuleProduction.getUnitRuleProductionName();

      unitRuleProductionName = removedUnitRuleProductionName; ///

      if (unitRuleProductionName !== unitRuleProductionUnitRuleProductionName) {
        unitRuleProduction = findUnitRuleProduction(unitRuleProductionName, unitRuleProductionUnitRuleProductionName, removedUnitRuleProductions);

        if (unitRuleProduction === null) {
          unitRuleProduction = UnitRuleProduction.fromNameAndUnitRuleProductionName(unitRuleProductionName, unitRuleProductionUnitRuleProductionName);

          unitRuleProductions.unshift(unitRuleProduction);
        }
      }
    }

    unitRuleProductionsLength = unitRuleProductions.length;
  }

  nonUnitRulesProductions.forEach(function (nonUnitRulesProduction) {
    var nonUnitRulesProductionName = nonUnitRulesProduction.getName(),
        addedNonUnitRulesProductionName = nonUnitRulesProductionName,
        addedNonUnitRulesProduction = parserUtil.findProduction(addedNonUnitRulesProductionName, addedNonUnitRulesProductions);

    if (addedNonUnitRulesProduction !== null) {
      var _addedNonUnitRulesProductionRules = addedNonUnitRulesProduction.getRules();

      nonUnitRulesProduction.concatRules(_addedNonUnitRulesProductionRules);
    }
  });

  var nonCyclicProductionsLength = nonCyclicProductions.length,
      start = nonCyclicProductionsLength,
      ///
  deleteCount = 0;

  arrayUtil.splice(nonCyclicProductions, start, deleteCount, nonUnitRulesProductions);
}

function productionsFromComponent(component, productions) {
  productions = component.mapVertices(function (vertex) {
    var vertexName = vertex.getName(),
        productionName = vertexName,
        ///
    production = parserUtil.findProduction(productionName, productions);

    return production;
  });

  return productions;
}

function unitRuleProductionsFromProductions(productions) {
  var unitRuleProductions = productions.reduce(function (unitRuleProductions, production) {
    var name = production.getName(),
        unitRulesProduction = UnitRulesProduction.fromProduction(production),
        unitRulesProductionUnitRuleProductions = unitRulesProduction.mapUnitRules(function (unitRule) {
      var unitRulesProductionUnitRuleProduction = UnitRuleProduction.fromNameAndUnitRule(name, unitRule);

      return unitRulesProductionUnitRuleProduction;
    });

    unitRuleProductions = unitRuleProductions.concat(unitRulesProductionUnitRuleProductions);

    return unitRuleProductions;
  }, []);

  return unitRuleProductions;
}

function nonUnitRulesProductionsFromProductions(productions) {
  var nonUnitProductions = productions.map(function (production) {
    var nonUnitProduction = NonUnitRulesProduction.fromProduction(production);

    return nonUnitProduction;
  });

  return nonUnitProductions;
}

function findUnitRuleProduction(productionName, unitRuleProductionName, unitRuleProductions) {
  var firstProductionName = productionName,
      ///
  secondProductionName = unitRuleProductionName; ///

  var foundUnitRuleProduction = null;

  unitRuleProductions.some(function (unitRuleProduction) {
    var unitRuleProductionFound = unitRuleProduction.isFoundByProductionNames(firstProductionName, secondProductionName);

    if (unitRuleProductionFound) {
      foundUnitRuleProduction = unitRuleProduction;

      return true;
    }
  });

  var unitRuleProduction = foundUnitRuleProduction; ///

  return unitRuleProduction;
}

},{"../common/production":60,"../util/array":86,"../util/parser":87,"./graph":71,"./production/nonUnitRules":79,"./production/unitRule":81,"./production/unitRules":82}],71:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cycle = require('./graph/cycle'),
    Stack = require('./graph/stack'),
    Vertex = require('./graph/vertex'),
    Component = require('./graph/component');

var Graph = function () {
  function Graph() {
    _classCallCheck(this, Graph);

    this.vertexmap = {};
  }

  _createClass(Graph, [{
    key: 'getCycles',
    value: function getCycles() {
      var components = this.getComponents(),
          cycles = components.reduce(function (cycles, component) {
        var componentCyclic = component.isCyclic();

        if (componentCyclic) {
          var cycle = Cycle.fromComponent(component);

          cycles.push(cycle);
        }

        return cycles;
      }, []);

      return cycles;
    }
  }, {
    key: 'getVertices',
    value: function getVertices() {
      var names = Object.keys(this.vertexmap),
          vertices = names.map(function (name) {
        var vertex = this.vertexmap[name];

        return vertex;
      }.bind(this));

      return vertices;
    }
  }, {
    key: 'getComponents',
    value: function getComponents() {
      var stack = new Stack(),
          vertices = this.getVertices(),
          components = [];

      var index = 0;

      function stronglyConnectVertex(vertex) {
        var lowestIndex = index; ///

        vertex.setIndex(index);

        vertex.setLowestIndex(lowestIndex);

        index++;

        stack.push(vertex);

        var successorVertices = vertex.getSuccessorVertices();

        successorVertices.forEach(function (successorVertex) {
          var successorVertexUnindexed = successorVertex.isUnindexed(),
              successorVertexNotStronglyConnected = successorVertexUnindexed; ///

          if (successorVertexNotStronglyConnected) {
            stronglyConnectVertex(successorVertex);

            var successorVertexLowestIndex = successorVertex.getLowestIndex();

            vertex.updateLowestIndex(successorVertexLowestIndex);
          } else {
            var successorVertexStacked = successorVertex.isStacked();

            if (successorVertexStacked) {
              var successorVertexIndex = successorVertex.getIndex();

              vertex.updateLowestIndex(successorVertexIndex);
            }
          }
        });

        var vertexLowest = vertex.isLowest();

        if (vertexLowest) {
          var component = Component.fromStackAndVertex(stack, vertex);

          components.push(component);
        }
      }

      vertices.forEach(function (vertex) {
        var vertexUnindexed = vertex.isUnindexed();

        if (vertexUnindexed) {
          stronglyConnectVertex(vertex);
        }
      });

      return components;
    }
  }, {
    key: 'addVertex',
    value: function addVertex(name, descendantVertexNames) {
      var successorVertices = descendantVertexNames.map(function (descendantVertexName) {
        var successorVertexName = descendantVertexName; ///

        var successorVertex = this.vertexmap[successorVertexName];

        if (successorVertex === undefined) {
          successorVertex = Vertex.fromName(successorVertexName);

          this.vertexmap[successorVertexName] = successorVertex;
        }

        return successorVertex;
      }.bind(this));

      var vertex = this.vertexmap[name];

      if (vertex === undefined) {
        vertex = Vertex.fromName(name);

        this.vertexmap[name] = vertex;
      }

      successorVertices = successorVertices.concat([]).reverse(); ///

      vertex.setSuccessorVertices(successorVertices);
    }
  }], [{
    key: 'fromUnitRulesProductions',
    value: function fromUnitRulesProductions(unitRulesProductions) {
      var graph = new Graph();

      unitRulesProductions.forEach(function (unitRulesProduction) {
        var productionName = unitRulesProduction.getName(),
            productionNames = unitRulesProduction.getProductionNames(),
            vertexName = productionName,
            ///
        descendantVertexNames = productionNames; ///

        graph.addVertex(vertexName, descendantVertexNames);
      });

      return graph;
    }
  }]);

  return Graph;
}();

module.exports = Graph;

},{"./graph/component":72,"./graph/cycle":73,"./graph/stack":74,"./graph/vertex":75}],72:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Component = function () {
  function Component(vertices) {
    _classCallCheck(this, Component);

    this.vertices = vertices;
  }

  _createClass(Component, [{
    key: 'getVertices',
    value: function getVertices() {
      return this.vertices;
    }
  }, {
    key: 'getFirstVertex',
    value: function getFirstVertex() {
      var firstVertex = first(this.vertices);

      return firstVertex;
    }
  }, {
    key: 'isCyclic',
    value: function isCyclic() {
      var verticesLength = this.vertices.length,
          cyclic = verticesLength > 1; ///

      return cyclic;
    }
  }, {
    key: 'isNonCyclic',
    value: function isNonCyclic() {
      var cyclic = this.isCyclic(),
          nonCyclic = !cyclic;

      return nonCyclic;
    }
  }, {
    key: 'mapVertices',
    value: function mapVertices(callback) {
      return this.vertices.map(callback);
    }
  }], [{
    key: 'fromStackAndVertex',
    value: function fromStackAndVertex(stack, vertex) {
      var stackVertices = [];

      var stackVertex = void 0;

      do {
        stackVertex = stack.pop();

        stackVertices.push(stackVertex);
      } while (stackVertex !== vertex);

      var vertices = stackVertices,
          /// 
      component = new Component(vertices);

      return component;
    }
  }]);

  return Component;
}();

module.exports = Component;

function first(array) {
  return array[0];
}

},{}],73:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cycle = function () {
  function Cycle(vertices) {
    _classCallCheck(this, Cycle);

    this.vertices = vertices;
  }

  _createClass(Cycle, null, [{
    key: 'fromComponent',
    value: function fromComponent(component) {
      var vertices = component.getVertices(),
          cycle = new Cycle(vertices);

      return cycle;
    }
  }]);

  return Cycle;
}();

module.exports = Cycle;

},{}],74:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stack = function () {
  function Stack() {
    _classCallCheck(this, Stack);

    this.vertices = [];
  }

  _createClass(Stack, [{
    key: 'pop',
    value: function pop() {
      var vertex = this.vertices.pop(),
          stacked = false;

      vertex.setStacked(stacked);

      return vertex;
    }
  }, {
    key: 'push',
    value: function push(vertex) {
      var stacked = true;

      vertex.setStacked(stacked);

      this.vertices.push(vertex);
    }
  }]);

  return Stack;
}();

module.exports = Stack;

},{}],75:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vertex = function () {
  function Vertex(name, index, stacked, visited, lowestIndex, successorVertices) {
    _classCallCheck(this, Vertex);

    this.name = name;
    this.index = index;
    this.stacked = stacked;
    this.visited = visited;
    this.lowestIndex = lowestIndex;
    this.successorVertices = successorVertices;
  }

  _createClass(Vertex, [{
    key: 'getName',
    value: function getName() {
      return this.name;
    }
  }, {
    key: 'getIndex',
    value: function getIndex() {
      return this.index;
    }
  }, {
    key: 'isStacked',
    value: function isStacked() {
      return this.stacked;
    }
  }, {
    key: 'isVisited',
    value: function isVisited() {
      return this.visited;
    }
  }, {
    key: 'getLowestIndex',
    value: function getLowestIndex() {
      return this.lowestIndex;
    }
  }, {
    key: 'getSuccessorVertices',
    value: function getSuccessorVertices() {
      return this.successorVertices;
    }
  }, {
    key: 'isUnindexed',
    value: function isUnindexed() {
      var unindexed = this.index < 0; ///

      return unindexed;
    }
  }, {
    key: 'isLowest',
    value: function isLowest() {
      var lowest = this.index === this.lowestIndex; ///

      return lowest;
    }
  }, {
    key: 'setIndex',
    value: function setIndex(index) {
      this.index = index;
    }
  }, {
    key: 'setStacked',
    value: function setStacked(stacked) {
      this.stacked = stacked;
    }
  }, {
    key: 'setVisited',
    value: function setVisited(visited) {
      this.visited = visited;
    }
  }, {
    key: 'setLowestIndex',
    value: function setLowestIndex(lowestIndex) {
      this.lowestIndex = lowestIndex;
    }
  }, {
    key: 'setSuccessorVertices',
    value: function setSuccessorVertices(successorVertices) {
      this.successorVertices = successorVertices;
    }
  }, {
    key: 'updateLowestIndex',
    value: function updateLowestIndex(lowestIndex) {
      if (lowestIndex < this.lowestIndex) {
        this.lowestIndex = lowestIndex;
      }
    }
  }], [{
    key: 'fromName',
    value: function fromName(name) {
      var index = -1,
          stacked = false,
          visited = false,
          lowestIndex = -1,
          successorVertices = [],
          vertex = new Vertex(name, index, stacked, visited, lowestIndex, successorVertices);

      return vertex;
    }
  }]);

  return Vertex;
}();

module.exports = Vertex;

},{}],76:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RightRecursiveProduction = require('./production/rightRecursive'),
    NonLeftRecursiveProduction = require('./production/nonLeftRecursive'),
    NonImplicitlyLeftRecursiveProduction = require('./production/nonImplicitlyLeftRecursive');

var leftRecursion = function () {
  function leftRecursion() {
    _classCallCheck(this, leftRecursion);
  }

  _createClass(leftRecursion, null, [{
    key: 'eliminate',
    value: function eliminate(productions) {
      var nonLeftRecursiveProductions = [],
          rightRecursiveProductions = [];

      productions.forEach(function (production, index) {
        var begin = 0,
            end = index,
            ///
        previousNonLeftRecursiveProductions = nonLeftRecursiveProductions.slice(begin, end),
            previousProductions = previousNonLeftRecursiveProductions,
            ///
        productionImplicitlyLeftRecursive = production.isImplicitlyLeftRecursive(previousProductions);

        if (productionImplicitlyLeftRecursive) {
          var nonImplicitlyLeftRecursiveProduction = NonImplicitlyLeftRecursiveProduction.fromProductionAndPreviousProductions(production, previousProductions);

          production = nonImplicitlyLeftRecursiveProduction; ///
        }

        var productionLeftRecursive = production.isLeftRecursive();

        if (productionLeftRecursive) {
          var nonLeftRecursiveProduction = NonLeftRecursiveProduction.fromProduction(production),
              rightRecursiveProduction = RightRecursiveProduction.fromProduction(production);

          nonLeftRecursiveProductions.push(nonLeftRecursiveProduction);

          rightRecursiveProductions.push(rightRecursiveProduction);
        } else {
          var _nonLeftRecursiveProduction = production; ///

          nonLeftRecursiveProductions.push(_nonLeftRecursiveProduction);
        }
      });

      productions = [].concat(nonLeftRecursiveProductions).concat(rightRecursiveProductions);

      return productions;
    }
  }]);

  return leftRecursion;
}();

module.exports = leftRecursion;

},{"./production/nonImplicitlyLeftRecursive":77,"./production/nonLeftRecursive":78,"./production/rightRecursive":80}],77:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../../common/rule'),
    Production = require('../../common/production');

var NonImplicitlyLeftRecursiveProduction = function (_Production) {
  _inherits(NonImplicitlyLeftRecursiveProduction, _Production);

  function NonImplicitlyLeftRecursiveProduction() {
    _classCallCheck(this, NonImplicitlyLeftRecursiveProduction);

    return _possibleConstructorReturn(this, (NonImplicitlyLeftRecursiveProduction.__proto__ || Object.getPrototypeOf(NonImplicitlyLeftRecursiveProduction)).apply(this, arguments));
  }

  _createClass(NonImplicitlyLeftRecursiveProduction, null, [{
    key: 'fromProductionAndPreviousProductions',
    value: function fromProductionAndPreviousProductions(production, previousProductions) {
      var productionName = production.getName(),
          productionNode = production.getNode(),
          name = productionName,
          ///
      rules = rulesFromProductionAndPreviousProductions(production, previousProductions),
          Node = productionNode,
          ///
      nonImplicitlyLeftRecursiveProduction = new NonImplicitlyLeftRecursiveProduction(name, rules, Node);

      return nonImplicitlyLeftRecursiveProduction;
    }
  }]);

  return NonImplicitlyLeftRecursiveProduction;
}(Production);

module.exports = NonImplicitlyLeftRecursiveProduction;

function rulesFromProductionAndPreviousProductions(production, previousProductions) {
  var productionRules = production.getRules(),
      rules = productionRules.reduce(function (rules, productionRule) {
    var productionRuleImplicitlyLeftRecursivePreviousProduction = productionRule.implicitlyLeftRecursivePreviousProduction(previousProductions);

    if (productionRuleImplicitlyLeftRecursivePreviousProduction !== null) {
      var previousProduction = productionRuleImplicitlyLeftRecursivePreviousProduction,
          ///
      rulesWithPreviousProductionInlineFromProductionInline = rulesWithPreviousProductionInlineFromProductionRuleAndPreviousProduction(productionRule, previousProduction);

      rules = rules.concat(rulesWithPreviousProductionInlineFromProductionInline);
    } else {
      var rule = productionRule;

      rules.push(rule);
    }

    return rules;
  }, []);

  return rules;
}

function rulesWithPreviousProductionInlineFromProductionRuleAndPreviousProduction(productionRule, previousProduction) {
  var previousProductionRules = previousProduction.getRules(),
      rulesWithPreviousProductionInline = previousProductionRules.map(function (previousProductionRule) {
    var previousProductionRuleParts = previousProductionRule.getParts(),
        productionRuleAllButFirstParts = productionRule.getAllButFirstParts(),
        ruleWithPreviousProductionInlineParts = [].concat(previousProductionRuleParts).concat(productionRuleAllButFirstParts),
        ruleWithPreviousProductionInline = new Rule(ruleWithPreviousProductionInlineParts);

    return ruleWithPreviousProductionInline;
  });

  return rulesWithPreviousProductionInline;
}

},{"../../common/production":60,"../../common/rule":61}],78:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../../common/rule'),
    Production = require('../../common/production'),
    RightRecursiveProduction = require('../production/rightRecursive');

var NonLeftRecursiveProduction = function (_Production) {
  _inherits(NonLeftRecursiveProduction, _Production);

  function NonLeftRecursiveProduction() {
    _classCallCheck(this, NonLeftRecursiveProduction);

    return _possibleConstructorReturn(this, (NonLeftRecursiveProduction.__proto__ || Object.getPrototypeOf(NonLeftRecursiveProduction)).apply(this, arguments));
  }

  _createClass(NonLeftRecursiveProduction, null, [{
    key: 'fromProduction',
    value: function fromProduction(production) {
      var productionName = production.getName(),
          productionNode = production.getNode(),
          name = productionName,
          ///
      rules = rulesFromProduction(production),
          Node = productionNode,
          ///
      nonLeftRecursiveProduction = new Production(name, rules, Node);

      return nonLeftRecursiveProduction;
    }
  }]);

  return NonLeftRecursiveProduction;
}(Production);

module.exports = NonLeftRecursiveProduction;

function rulesFromProduction(production) {
  var productionNonLeftRecursiveRules = production.getNonLeftRecursiveRules(),
      rules = productionNonLeftRecursiveRules.map(function (productionNonLeftRecursiveRule) {
    var productionNonLeftRecursiveRuleParts = productionNonLeftRecursiveRule.getParts(),
        productionNamePart = RightRecursiveProduction.productionNamePartFromProduction(production),
        parts = [].concat(productionNonLeftRecursiveRuleParts).concat(productionNamePart),
        rule = new Rule(parts);

    return rule;
  });

  return rules;
}

},{"../../common/production":60,"../../common/rule":61,"../production/rightRecursive":80}],79:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NonUnitRule = require('../rule/nonUnit'),
    Production = require('../../common/production');

var NonUnitRulesProduction = function (_Production) {
  _inherits(NonUnitRulesProduction, _Production);

  function NonUnitRulesProduction() {
    _classCallCheck(this, NonUnitRulesProduction);

    return _possibleConstructorReturn(this, (NonUnitRulesProduction.__proto__ || Object.getPrototypeOf(NonUnitRulesProduction)).apply(this, arguments));
  }

  _createClass(NonUnitRulesProduction, null, [{
    key: 'fromProduction',
    value: function fromProduction(production) {
      var nonUnitRules = nonUnitRulesFromProduction(production),
          name = production.getName(),
          rules = nonUnitRules,
          ///
      Node = production.getNode(),
          nonUnitRulesProduction = new NonUnitRulesProduction(name, rules, Node);

      return nonUnitRulesProduction;
    }
  }]);

  return NonUnitRulesProduction;
}(Production);

module.exports = NonUnitRulesProduction;

function nonUnitRulesFromProduction(production) {
  var rules = production.getRules(),
      nonUnitRules = rules.reduce(function (nonUnitRules, rule) {
    var nonUnitRule = NonUnitRule.fromRule(rule);

    if (nonUnitRule !== null) {
      var _rule = nonUnitRule;

      nonUnitRules.push(nonUnitRule);
    }

    return nonUnitRules;
  }, []);

  return nonUnitRules;
}

},{"../../common/production":60,"../rule/nonUnit":83}],80:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../../common/rule'),
    Production = require('../../common/production'),
    EpsilonPart = require('../../common/part/epsilon'),
    NonTerminalNode = require('../../common/node/nonTerminal'),
    ProductionNamePart = require('../../common/part/productionName');

var RightRecursiveProduction = function (_Production) {
  _inherits(RightRecursiveProduction, _Production);

  function RightRecursiveProduction() {
    _classCallCheck(this, RightRecursiveProduction);

    return _possibleConstructorReturn(this, (RightRecursiveProduction.__proto__ || Object.getPrototypeOf(RightRecursiveProduction)).apply(this, arguments));
  }

  _createClass(RightRecursiveProduction, null, [{
    key: 'productionNamePartFromProduction',
    value: function productionNamePartFromProduction(production) {
      var productionName = production.getName(),
          name = productionName,
          ///
      noWhitespace = false,
          ///
      productionNamePart = new ProductionNamePart(name, noWhitespace);

      return productionNamePart;
    }
  }, {
    key: 'fromProduction',
    value: function fromProduction(production) {
      var productionName = production.getName(),
          name = productionName,
          ///
      rules = rulesFromProduction(production),
          Node = NonTerminalNode,
          ///
      rightRecursiveProduction = new Production(name, rules, Node);

      return rightRecursiveProduction;
    }
  }]);

  return RightRecursiveProduction;
}(Production);

module.exports = RightRecursiveProduction;

function rulesFromProduction(production) {
  var rightRecursiveRules = rightRecursiveRulesFromProduction(production),
      epsilonPart = new EpsilonPart(),
      epsilonParts = [epsilonPart],
      epsilonPartRule = new Rule(epsilonParts),
      rules = [].concat(rightRecursiveRules).concat(epsilonPartRule);

  return rules;
}

function rightRecursiveRulesFromProduction(production) {
  var productionLeftRecursiveRules = production.getLeftRecursiveRules(),
      rightRecursiveRules = productionLeftRecursiveRules.map(function (productionLeftRecursiveRule) {
    var productionLeftRecursiveRuleAllButFirstParts = productionLeftRecursiveRule.getAllButFirstParts(),
        productionNamePart = RightRecursiveProduction.productionNamePartFromProduction(production),
        rightRecursiveRuleParts = [].concat(productionLeftRecursiveRuleAllButFirstParts).concat(productionNamePart),
        rightRecursiveRule = new Rule(rightRecursiveRuleParts);

    return rightRecursiveRule;
  });

  return rightRecursiveRules;
}

},{"../../common/node/nonTerminal":31,"../../common/part/epsilon":49,"../../common/part/productionName":52,"../../common/production":60,"../../common/rule":61}],81:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UnitRule = require('../rule/unit'),
    Production = require('../../common/production');

var UnitRuleProduction = function (_Production) {
  _inherits(UnitRuleProduction, _Production);

  function UnitRuleProduction() {
    _classCallCheck(this, UnitRuleProduction);

    return _possibleConstructorReturn(this, (UnitRuleProduction.__proto__ || Object.getPrototypeOf(UnitRuleProduction)).apply(this, arguments));
  }

  _createClass(UnitRuleProduction, [{
    key: 'getUnitRuleProductionName',
    value: function getUnitRuleProductionName() {
      var rules = this.getRules(),
          firstRule = first(rules),
          unitRule = firstRule,
          ///
      unitRuleProductionName = unitRule.getProductionName();

      return unitRuleProductionName;
    }
  }, {
    key: 'isFoundByProductionNames',
    value: function isFoundByProductionNames(firstProductionName, secondProductionName) {
      var name = this.getName(),
          unitRuleProductionName = this.getUnitRuleProductionName(),
          found = name === firstProductionName && unitRuleProductionName === secondProductionName; ///

      return found;
    }
  }], [{
    key: 'fromNameAndUnitRule',
    value: function fromNameAndUnitRule(name, unitRule) {
      var rules = [unitRule],
          Node = null,
          unitRuleProduction = new UnitRuleProduction(name, rules, Node);

      return unitRuleProduction;
    }
  }, {
    key: 'fromNameAndUnitRuleProductionName',
    value: function fromNameAndUnitRuleProductionName(name, unitRuleProductionName) {
      var productionName = unitRuleProductionName,
          ///
      unitRule = UnitRule.fromProductionName(productionName),
          unitRuleProduction = UnitRuleProduction.fromNameAndUnitRule(name, unitRule);

      return unitRuleProduction;
    }
  }]);

  return UnitRuleProduction;
}(Production);

module.exports = UnitRuleProduction;

function first(array) {
  return array[0];
}

},{"../../common/production":60,"../rule/unit":84}],82:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UnitRule = require('../rule/unit'),
    Production = require('../../common/production');

var UnitRulesProduction = function (_Production) {
  _inherits(UnitRulesProduction, _Production);

  function UnitRulesProduction() {
    _classCallCheck(this, UnitRulesProduction);

    return _possibleConstructorReturn(this, (UnitRulesProduction.__proto__ || Object.getPrototypeOf(UnitRulesProduction)).apply(this, arguments));
  }

  _createClass(UnitRulesProduction, [{
    key: 'getProductionNames',
    value: function getProductionNames() {
      var rules = this.getRules(),
          unitRules = rules,
          ///
      productionNames = unitRules.map(function (unitRule) {
        var productionName = unitRule.getProductionName();

        return productionName;
      });

      return productionNames;
    }
  }, {
    key: 'mapUnitRules',
    value: function mapUnitRules(callback) {
      var rules = this.getRules(),
          unitRules = rules,
          ///
      result = unitRules.map(callback);

      return result;
    }
  }], [{
    key: 'fromProduction',
    value: function fromProduction(production) {
      var unitRulesProduction = null;

      var rules = production.getRules(),
          unitRules = rules.reduce(function (unitRules, rule) {
        var unitRule = UnitRule.fromRule(rule);

        if (unitRule !== null) {
          unitRules = unitRules.concat(unitRule);
        }

        return unitRules;
      }, []),
          unitRulesLength = unitRules.length;

      if (unitRulesLength > 0) {
        var name = production.getName(),
            _rules = unitRules,
            ///
        Node = production.getNode();

        unitRulesProduction = new UnitRulesProduction(name, _rules, Node);
      }

      return unitRulesProduction;
    }
  }]);

  return UnitRulesProduction;
}(Production);

module.exports = UnitRulesProduction;

},{"../../common/production":60,"../rule/unit":84}],83:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../../common/rule'),
    UnitRule = require('../rule/unit');

var NonUnitRule = function (_Rule) {
  _inherits(NonUnitRule, _Rule);

  function NonUnitRule() {
    _classCallCheck(this, NonUnitRule);

    return _possibleConstructorReturn(this, (NonUnitRule.__proto__ || Object.getPrototypeOf(NonUnitRule)).apply(this, arguments));
  }

  _createClass(NonUnitRule, null, [{
    key: 'fromRule',
    value: function fromRule(rule) {
      var nonUnitRule = null;

      var unitRule = UnitRule.fromRule(rule);

      if (unitRule === null) {
        var parts = rule.getParts();

        nonUnitRule = new NonUnitRule(parts);
      }

      return nonUnitRule;
    }
  }]);

  return NonUnitRule;
}(Rule);

module.exports = NonUnitRule;

},{"../../common/rule":61,"../rule/unit":84}],84:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../../common/rule'),
    ProductionNamePart = require('../../common/part/productionName');

var UnitRule = function (_Rule) {
  _inherits(UnitRule, _Rule);

  function UnitRule() {
    _classCallCheck(this, UnitRule);

    return _possibleConstructorReturn(this, (UnitRule.__proto__ || Object.getPrototypeOf(UnitRule)).apply(this, arguments));
  }

  _createClass(UnitRule, [{
    key: 'getProductionName',
    value: function getProductionName() {
      var firstPart = this.getFirstPart(),
          productionNamePart = firstPart,
          ///
      productionName = productionNamePart.getProductionName();

      return productionName;
    }
  }], [{
    key: 'fromProductionName',
    value: function fromProductionName(productionName) {
      var noWhitespace = false,
          ///
      productionNamePart = new ProductionNamePart(productionName, noWhitespace),
          parts = [productionNamePart],
          unitRule = new UnitRule(parts);

      return unitRule;
    }
  }, {
    key: 'fromRule',
    value: function fromRule(rule) {
      var unitRule = null;

      var partsLength = rule.getPartsLength();

      if (partsLength === 1) {
        var firstPart = rule.getFirstPart();

        if (firstPart instanceof ProductionNamePart) {
          var parts = rule.getParts();

          unitRule = new UnitRule(parts);
        }
      }

      return unitRule;
    }
  }]);

  return UnitRule;
}(Rule);

module.exports = UnitRule;

},{"../../common/part/productionName":52,"../../common/rule":61}],85:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var cycles = require('../grammar/cycles'),
    leftRecursion = require('../grammar/leftRecursion'),
    Production = require('../common/production'),
    ErrorNode = require('../common/node/nonTerminal/error');

var PrimitiveParser = function () {
  function PrimitiveParser() {
    _classCallCheck(this, PrimitiveParser);
  }

  _createClass(PrimitiveParser, null, [{
    key: 'parse',
    value: function parse(lines, significantTokenTypes, mappings) {
      var productions = void 0;

      mappings = Object.assign({
        'error': ErrorNode
      }, mappings);

      try {
        productions = lines.map(function (line) {
          var production = Production.fromLine(line, significantTokenTypes, mappings);

          return production;
        });
      } catch (error) {
        productions = [];
      }

      productions = cycles.eliminate(productions); ///

      // productions = leftRecursion.eliminate(productions);

      return productions;
    }
  }]);

  return PrimitiveParser;
}();

module.exports = PrimitiveParser;

},{"../common/node/nonTerminal/error":33,"../common/production":60,"../grammar/cycles":70,"../grammar/leftRecursion":76}],86:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtil = function () {
  function arrayUtil() {
    _classCallCheck(this, arrayUtil);
  }

  _createClass(arrayUtil, null, [{
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
    key: 'splice',
    value: function splice(array, start, deleteCount) {
      var itemsArray = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

      var args = [start, deleteCount].concat(_toConsumableArray(itemsArray)),
          deletedItemsArray = Array.prototype.splice.apply(array, args);

      return deletedItemsArray;
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

},{}],87:[function(require,module,exports){
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
    key: 'findProduction',
    value: function findProduction(productionName, productions) {
      var foundProduction = null;

      productions.some(function (production) {
        var productionFound = production.isFoundByProductionName(productionName);

        if (productionFound) {
          foundProduction = production;

          return true;
        }
      });

      var production = foundProduction; ///

      return production;
    }
  }]);

  return parserUtil;
}();

module.exports = parserUtil;

},{}],88:[function(require,module,exports){
'use strict';

module.exports = {
  options: require('./lib/options'),
  SizeableElement: require('./lib/sizeableElement'),
  VerticalSplitter: require('./lib/splitter/vertical'),
  HorizontalSplitter: require('./lib/splitter/horizontal')
};

},{"./lib/options":90,"./lib/sizeableElement":91,"./lib/splitter/horizontal":93,"./lib/splitter/vertical":94}],89:[function(require,module,exports){
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

},{"easy":95}],90:[function(require,module,exports){
'use strict';

var options = {
        ESCAPE_KEY_STOPS_DRAGGING: 'ESCAPE_KEY_STOPS_DRAGGING'
};

module.exports = options;

},{}],91:[function(require,module,exports){
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

},{"easy":95}],92:[function(require,module,exports){
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

},{"./options":90,"easy":95}],93:[function(require,module,exports){
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

},{"../cursor":89,"../splitter":92}],94:[function(require,module,exports){
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

},{"../cursor":89,"../splitter":92}],95:[function(require,module,exports){
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

},{"./lib/document":96,"./lib/element":97,"./lib/element/body":98,"./lib/element/button":99,"./lib/element/checkbox":100,"./lib/element/div":101,"./lib/element/link":102,"./lib/element/select":103,"./lib/element/span":104,"./lib/inputElement":105,"./lib/inputElement/input":106,"./lib/inputElement/textarea":107,"./lib/misc/bounds":108,"./lib/misc/offset":109,"./lib/react":117,"./lib/textElement":118,"./lib/window":119}],96:[function(require,module,exports){
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

},{"./mixin/click":110,"./mixin/event":111,"./mixin/key":113,"./mixin/mouse":114}],97:[function(require,module,exports){
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

},{"./misc/bounds":108,"./misc/offset":109,"./mixin/click":110,"./mixin/event":111,"./mixin/jsx":112,"./mixin/key":113,"./mixin/mouse":114,"./mixin/resize":115,"./mixin/scroll":116}],98:[function(require,module,exports){
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

},{"../element":97}],99:[function(require,module,exports){
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

},{"../element":97}],100:[function(require,module,exports){
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

},{"../element":97}],101:[function(require,module,exports){
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

},{"../element":97}],102:[function(require,module,exports){
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

},{"../element":97}],103:[function(require,module,exports){
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

},{"../element":97}],104:[function(require,module,exports){
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

},{"../element":97}],105:[function(require,module,exports){
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

},{"./element":97}],106:[function(require,module,exports){
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

},{"../inputElement":105}],107:[function(require,module,exports){
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

},{"../inputElement":105}],108:[function(require,module,exports){
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

},{}],109:[function(require,module,exports){
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

},{}],110:[function(require,module,exports){
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

},{}],111:[function(require,module,exports){
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

},{}],112:[function(require,module,exports){
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

},{"../textElement":118}],113:[function(require,module,exports){
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

},{}],114:[function(require,module,exports){
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

},{}],115:[function(require,module,exports){
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

},{}],116:[function(require,module,exports){
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

},{}],117:[function(require,module,exports){
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

},{"./element":97,"./textElement":118}],118:[function(require,module,exports){
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

},{"./misc/bounds":108,"./misc/offset":109}],119:[function(require,module,exports){
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

},{"./mixin/click":110,"./mixin/event":111,"./mixin/key":113,"./mixin/mouse":114}],120:[function(require,module,exports){
'use strict';

var lexers = {
  'Line': require('./lib/common/line'),
  'BNFLexer': require('./lib/bnf/lexer'),
  'BasicLexer': require('./lib/basic/lexer'),
  'FlorenceLexer': require('./lib/florence/lexer'),
  'PrimitiveLexer': require('./lib/primitive/lexer'),
  'SignificantToken': require('./lib/common/token/significant'),
  'StringToken': require('./lib/common/token/significant/string'),
  'EndOfLineToken': require('./lib/common/token/significant/endOfLine'),
  'WhitespaceToken': require('./lib/common/token/significant/whitespace'),
  'NonSignificantToken': require('./lib/common/token/nonSignificant'),
  'specialSymbols': require('./lib/specialSymbols')
};

module.exports = lexers;

},{"./lib/basic/lexer":121,"./lib/bnf/lexer":125,"./lib/common/line":130,"./lib/common/token/nonSignificant":133,"./lib/common/token/significant":138,"./lib/common/token/significant/endOfLine":139,"./lib/common/token/significant/string":140,"./lib/common/token/significant/whitespace":141,"./lib/florence/lexer":147,"./lib/primitive/lexer":149,"./lib/specialSymbols":152}],121:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Line = require('./line'),
    Rules = require('../common/rules'),
    CommonLexer = require('../common/lexer'),
    WhitespaceToken = require('../common/token/significant/whitespace');

var BasicLexer = function (_CommonLexer) {
  _inherits(BasicLexer, _CommonLexer);

  function BasicLexer() {
    _classCallCheck(this, BasicLexer);

    return _possibleConstructorReturn(this, (BasicLexer.__proto__ || Object.getPrototypeOf(BasicLexer)).apply(this, arguments));
  }

  _createClass(BasicLexer, null, [{
    key: 'significantTokenTypes',
    value: function significantTokenTypes() {
      var grammar = BasicLexer.grammar,
          grammarSignificantTokenTypes = CommonLexer.significantTokenTypesFromGrammar(grammar),
          significantTokenTypes = grammarSignificantTokenTypes.concat([WhitespaceToken.type]);

      return significantTokenTypes;
    }
  }, {
    key: 'fromGrammar',
    value: function fromGrammar(grammar) {
      var rules = Rules.fromGrammar(grammar),
          basicLexer = new BasicLexer(rules, Line);

      return basicLexer;
    }
  }, {
    key: 'fromNothing',
    value: function fromNothing() {
      var grammar = BasicLexer.grammar,
          basicLexer = BasicLexer.fromGrammar(grammar);

      return basicLexer;
    }
  }]);

  return BasicLexer;
}(CommonLexer);

module.exports = BasicLexer;

BasicLexer.grammar = [{ "terminal": "\\+|\\-|\\*|\\/|\\(|\\)|\\d+" }];

},{"../common/lexer":129,"../common/rules":132,"../common/token/significant/whitespace":141,"./line":122}],122:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommonLine = require('../common/line'),
    CommentTokens = require('./tokens/comment'),
    StringTokens = require('./tokens/string'),
    WhitespaceTokens = require('../common/tokens/whitespace');

var Line = function (_CommonLine) {
      _inherits(Line, _CommonLine);

      function Line() {
            _classCallCheck(this, Line);

            return _possibleConstructorReturn(this, (Line.__proto__ || Object.getPrototypeOf(Line)).apply(this, arguments));
      }

      _createClass(Line, null, [{
            key: 'fromContent',
            value: function fromContent(content, context, rules) {
                  return _get(Line.__proto__ || Object.getPrototypeOf(Line), 'fromContent', this).call(this, Line, content, context, rules, CommentTokens, StringTokens, WhitespaceTokens);
            }
      }]);

      return Line;
}(CommonLine);

module.exports = Line;

},{"../common/line":130,"../common/tokens/whitespace":146,"./tokens/comment":123,"./tokens/string":124}],123:[function(require,module,exports){
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

},{}],124:[function(require,module,exports){
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

},{}],125:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Line = require('./line'),
    Rules = require('../common/rules'),
    CommonLexer = require('../common/lexer'),
    StringToken = require('../common/token/significant/string'),
    WhitespaceToken = require('../common/token/significant/whitespace');

var BNFLexer = function (_CommonLexer) {
  _inherits(BNFLexer, _CommonLexer);

  function BNFLexer() {
    _classCallCheck(this, BNFLexer);

    return _possibleConstructorReturn(this, (BNFLexer.__proto__ || Object.getPrototypeOf(BNFLexer)).apply(this, arguments));
  }

  _createClass(BNFLexer, [{
    key: 'linesFromGrammar',
    value: function linesFromGrammar(grammar) {
      var content = grammar,
          ///
      lines = _get(BNFLexer.prototype.__proto__ || Object.getPrototypeOf(BNFLexer.prototype), 'linesFromContent', this).call(this, content);

      return lines;
    }
  }], [{
    key: 'significantTokenTypes',
    value: function significantTokenTypes() {
      var grammar = BNFLexer.grammar,
          grammarSignificantTokenTypes = CommonLexer.significantTokenTypesFromGrammar(grammar),
          significantTokenTypes = grammarSignificantTokenTypes.concat([StringToken.type, WhitespaceToken.type]);

      return significantTokenTypes;
    }
  }, {
    key: 'fromGrammar',
    value: function fromGrammar(grammar) {
      var rules = Rules.fromGrammar(grammar),
          basicLexer = new BNFLexer(rules, Line);

      return basicLexer;
    }
  }, {
    key: 'fromNothing',
    value: function fromNothing() {
      var grammar = BNFLexer.grammar,
          basicLexer = BNFLexer.fromGrammar(grammar);

      return basicLexer;
    }
  }]);

  return BNFLexer;
}(CommonLexer);

module.exports = BNFLexer;

BNFLexer.grammar = [{ "regularExpression": "\\/[^/]+\\/" }, { "special": "::=|<NO_WHITESPACE>|<END_OF_LINE>|!|&|\\||\\(|\\)|\\?|\\*|\\+" }, { "type": "\\[[^/]+\\]" }, { "name": "\\w+" }];

},{"../common/lexer":129,"../common/rules":132,"../common/token/significant/string":140,"../common/token/significant/whitespace":141,"./line":126}],126:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommonLine = require('../common/line'),
    CommentTokens = require('./tokens/comment'),
    StringTokens = require('../common/tokens/string'),
    WhitespaceTokens = require('../common/tokens/whitespace'),
    EndOfLineToken = require('../common/token/significant/endOfLine');

var Line = function (_CommonLine) {
  _inherits(Line, _CommonLine);

  function Line() {
    _classCallCheck(this, Line);

    return _possibleConstructorReturn(this, (Line.__proto__ || Object.getPrototypeOf(Line)).apply(this, arguments));
  }

  _createClass(Line, null, [{
    key: 'fromContent',
    value: function fromContent(content, context, rules) {
      var line = _get(Line.__proto__ || Object.getPrototypeOf(Line), 'fromContent', this).call(this, Line, content, context, rules, CommentTokens, StringTokens, WhitespaceTokens),
          endOfLineToken = EndOfLineToken.fromLine(line);

      line.pushToken(endOfLineToken);

      return line;
    }
  }]);

  return Line;
}(CommonLine);

module.exports = Line;

},{"../common/line":130,"../common/token/significant/endOfLine":139,"../common/tokens/string":145,"../common/tokens/whitespace":146,"./tokens/comment":127}],127:[function(require,module,exports){
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

},{}],129:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Line = require('./line'),
    Rules = require('./rules'),
    Context = require('./context');

var CommonLexer = function () {
  function CommonLexer(rules, Line) {
    _classCallCheck(this, CommonLexer);

    this.rules = rules;
    this.Line = Line;
  }

  _createClass(CommonLexer, [{
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
    key: 'rulesFromGrammar',
    value: function rulesFromGrammar(grammar) {
      return Rules.fromGrammar(grammar);
    }
  }, {
    key: 'significantTokenTypesFromGrammar',
    value: function significantTokenTypesFromGrammar(grammar) {
      return Rules.significantTokenTypesFromGrammar(grammar);
    }
  }]);

  return CommonLexer;
}();

module.exports = CommonLexer;

},{"./context":128,"./line":130,"./rules":132}],130:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('../util'),
    SignificantTokens = require('./tokens/significant');

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

},{"../util":153,"./tokens/significant":144}],131:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SignificantToken = require('../common/token/significant');

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
        var firstMatch = first(matches);

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
          firstMatch = first(matches);

      content = firstMatch; ///

      var type = this.significantTokenType,
          ///
      significantToken = SignificantToken.fromContentLineAndType(content, line, type);

      return significantToken;
    }
  }], [{
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

function first(array) {
  return array[0];
}

},{"../common/token/significant":138}],132:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rule = require('./rule'),
    util = require('../util');

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
  }], [{
    key: 'fromGrammar',
    value: function fromGrammar(grammar) {
      var significantTokenTypes = Rules.significantTokenTypesFromGrammar(grammar),
          array = significantTokenTypes.map(function (significantTokenType) {
        var regularExpressionPattern = Rules.findRegularExpressionPattern(significantTokenType, grammar),
            rule = Rule.fromSignificantTokenTypeAndRegularExpressionPattern(significantTokenType, regularExpressionPattern);

        return rule;
      }),
          rules = new Rules(array);

      return rules;
    }
  }, {
    key: 'findRegularExpressionPattern',
    value: function findRegularExpressionPattern(significantTokenType, grammar) {
      var regularExpressionPattern = grammar.reduce(function (regularExpressionPattern, entry) {
        if (regularExpressionPattern === null) {
          var entryKeys = Object.keys(entry),
              firstEntryKey = first(entryKeys),
              entrySignificantTokenType = firstEntryKey; ///

          if (entrySignificantTokenType === significantTokenType) {
            regularExpressionPattern = entry[significantTokenType];
          }
        }

        return regularExpressionPattern;
      }, null);

      return regularExpressionPattern;
    }
  }, {
    key: 'significantTokenTypesFromGrammar',
    value: function significantTokenTypesFromGrammar(grammar) {
      var significantTokenTypes = grammar.map(function (entry) {
        var entryKeys = Object.keys(entry),
            firstEntryKey = first(entryKeys),
            significantTokenType = firstEntryKey; ///

        return significantTokenType;
      });

      return significantTokenTypes;
    }
  }]);

  return Rules;
}();

module.exports = Rules;

function first(array) {
  return array[0];
}

},{"../util":153,"./rule":131}],133:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('../../util');

var NonSignificantToken = function () {
  function NonSignificantToken(content, line, html) {
    _classCallCheck(this, NonSignificantToken);

    this.content = content;
    this.line = line;
    this.html = html;
  }

  _createClass(NonSignificantToken, [{
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
      var sanitisedContent = util.sanitiseContent(content),
          html = sanitisedContent;

      return html;
    }
  }]);

  return NonSignificantToken;
}();

module.exports = NonSignificantToken;

},{"../../util":153}],134:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var util = require('../../../util'),
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
      var sanitisedContent = util.sanitiseContent(content),
          innerHTML = sanitisedContent,
          ///
      html = '<span class="comment">' + innerHTML + '</span>';

      return html;
    }
  }]);

  return CommentToken;
}(NonSignificantToken);

module.exports = CommentToken;

},{"../../../util":153,"../nonSignificant":133}],135:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommentToken = require('../comment');

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
        var firstMatch = first(matches);

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

function first(array) {
  return array[0];
}

},{"../comment":134}],136:[function(require,module,exports){
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

},{"../comment":134}],137:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommentToken = require('../comment');

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
        var firstMatch = first(matches);

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

function first(array) {
  return array[0];
}

},{"../comment":134}],138:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('../../util');

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
      var sanitisedContent = util.sanitiseContent(content),
          innerHTML = sanitisedContent; ///

      return innerHTML;
    }
  }]);

  return SignificantToken;
}();

module.exports = SignificantToken;

},{"../../util":153}],139:[function(require,module,exports){
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
      var html = '';

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

},{"../significant":138}],140:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignificantToken = require('../significant');

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
        var firstMatch = first(matches);

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

function first(array) {
  return array[0];
}

},{"../significant":138}],141:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignificantToken = require('../significant');

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
        var firstMatch = first(matches);

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

function first(array) {
  return array[0];
}

},{"../significant":138}],142:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('../util');

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

          util.spliceArray(tokensOrContents, start, 1, tokensOrRemainingContent);

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

},{"../util":153}],143:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('../../util'),
    EndOfCommentToken = require('../token/nonSignificant/comment/endOf'),
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
                                                            var middleOfCommentTokenLength = util.minimumBarMinusOne(endOfCommentTokenPositionWithinContent, contentLength);

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
                                                            contentLength = util.minimumBarMinusOne(startOfCommentTokenPositionWithinContent, contentLength);

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

},{"../../util":153,"../token/nonSignificant/comment/endOf":135,"../token/nonSignificant/comment/middleOf":136,"../token/nonSignificant/comment/startOf":137}],144:[function(require,module,exports){
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
      throw new Error('There is no rule to parse the content \'' + content + '\' on line ' + line);
    }
  }

  return significantTokens;
}

},{}],145:[function(require,module,exports){
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

},{"../token/significant/string":140,"../tokens":142}],146:[function(require,module,exports){
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
      return Tokens.pass(tokensOrContents, line, WhitespaceToken);
    }
  }]);

  return WhitespaceTokens;
}();

module.exports = WhitespaceTokens;

},{"../token/significant/whitespace":141,"../tokens":142}],147:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Line = require('./line'),
    Context = require('../common/context'),
    CommonLexer = require('../common/lexer'),
    StringToken = require('../common/token/significant/string'),
    EndOfLineToken = require('../common/token/significant/endOfLine'),
    WhitespaceToken = require('../common/token/significant/whitespace');

var FlorenceLexer = function (_CommonLexer) {
  _inherits(FlorenceLexer, _CommonLexer);

  function FlorenceLexer() {
    _classCallCheck(this, FlorenceLexer);

    return _possibleConstructorReturn(this, (FlorenceLexer.__proto__ || Object.getPrototypeOf(FlorenceLexer)).apply(this, arguments));
  }

  _createClass(FlorenceLexer, [{
    key: 'linesFromContent',
    value: function linesFromContent(content, firstLineIndex, minimumLinesLength, previousLineInComment, followingLineInComment) {
      var context = new Context(minimumLinesLength, previousLineInComment, followingLineInComment),
          lines = _get(FlorenceLexer.prototype.__proto__ || Object.getPrototypeOf(FlorenceLexer.prototype), 'linesFromContent', this).call(this, content, firstLineIndex, context);

      return lines;
    }
  }], [{
    key: 'significantTokenTypes',
    value: function significantTokenTypes() {
      var grammar = FlorenceLexer.grammar,
          grammarSignificantTokenTypes = CommonLexer.significantTokenTypesFromGrammar(grammar),
          significantTokenTypes = grammarSignificantTokenTypes.concat([StringToken.type, WhitespaceToken.type, EndOfLineToken.type]);

      return significantTokenTypes;
    }
  }, {
    key: 'fromGrammar',
    value: function fromGrammar(grammar) {
      var rules = CommonLexer.rulesFromGrammar(grammar),
          florenceLexer = new FlorenceLexer(rules, Line);

      return florenceLexer;
    }
  }, {
    key: 'fromNothing',
    value: function fromNothing() {
      var grammar = FlorenceLexer.grammar,
          florenceLexer = FlorenceLexer.fromGrammar(grammar);

      return florenceLexer;
    }
  }]);

  return FlorenceLexer;
}(CommonLexer);

module.exports = FlorenceLexer;

FlorenceLexer.grammar = [{ "special": ",|;|\\{|\\}|=|::|:|\\(|\\)|\\.\\.\\.|\\.\\." }, { "include": "^include$" }, { "keyword": "^(?:Rule|Axiom|Theorem|Lemma|Premises|Premise|Conclusion|Proof|Therefore|Suppose|Then|Hence|Variables|Variable|Metavariables|Metavariable|Constructors|Constructor|Type|Object|Definition|from|by|let|is|not|in|free|defined|undefined)$" }, { "unassigned": '^[\\u{21}-\\u{7E}\\u{A1}-\\u{FF}\\u{2200}-\\u{22FF}\\u{2A00}-\\u{2AFF}\\u{2300}-\\u{23ff}\\u{1D400}-\\u{1D7FF}]+$' }];

},{"../common/context":128,"../common/lexer":129,"../common/token/significant/endOfLine":139,"../common/token/significant/string":140,"../common/token/significant/whitespace":141,"./line":148}],148:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommonLine = require('../common/line'),
    CommentTokens = require('../common/tokens/comment'),
    StringTokens = require('../common/tokens/string'),
    WhitespaceTokens = require('../common/tokens/whitespace'),
    EndOfLineToken = require('../common/token/significant/endOfLine');

var Line = function (_CommonLine) {
  _inherits(Line, _CommonLine);

  function Line() {
    _classCallCheck(this, Line);

    return _possibleConstructorReturn(this, (Line.__proto__ || Object.getPrototypeOf(Line)).apply(this, arguments));
  }

  _createClass(Line, null, [{
    key: 'fromContent',
    value: function fromContent(content, context, rules) {
      var line = _get(Line.__proto__ || Object.getPrototypeOf(Line), 'fromContent', this).call(this, Line, content, context, rules, CommentTokens, StringTokens, WhitespaceTokens),
          lineInComment = line.isInComment();

      if (!lineInComment) {
        var endOfLineToken = EndOfLineToken.fromLine(line);

        line.pushToken(endOfLineToken);
      }

      return line;
    }
  }]);

  return Line;
}(CommonLine);

module.exports = Line;

},{"../common/line":130,"../common/token/significant/endOfLine":139,"../common/tokens/comment":143,"../common/tokens/string":145,"../common/tokens/whitespace":146}],149:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Line = require('./line');

var PrimitiveLexer = function () {
  function PrimitiveLexer() {
    _classCallCheck(this, PrimitiveLexer);
  }

  _createClass(PrimitiveLexer, null, [{
    key: 'linesFromGrammar',
    value: function linesFromGrammar(grammar) {
      var contents = contentsFromGrammar(grammar),
          lines = contents.map(function (content) {
        var line = Line.fromContent(content);

        return line;
      });

      return lines;
    }
  }]);

  return PrimitiveLexer;
}();

module.exports = PrimitiveLexer;

function contentsFromGrammar(grammar) {
  var contents = grammar.split('\n').reduce(function (contents, content) {
    var matches = void 0;

    matches = content.match(Line.nameExpressionRegExp);

    if (matches !== null) {
      contents.push(content);

      return contents;
    }

    matches = content.match(Line.continuedExpressionRegExp);

    if (matches !== null) {
      var previousContent = contents.pop(),
          firstMatch = first(matches),
          continuedExpression = firstMatch,
          ///
      continuingContent = ' ' + continuedExpression;

      content = previousContent + continuingContent;

      contents.push(content);

      return contents;
    }

    return contents;
  }, []);

  return contents;
}

function first(array) {
  return array[0];
}

},{"./line":150}],150:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SymbolSequence = require('./symbolSequence');

var Line = function () {
  function Line(name, symbolSequences) {
    _classCallCheck(this, Line);

    this.name = name;
    this.symbolSequences = symbolSequences;
  }

  _createClass(Line, [{
    key: 'getName',
    value: function getName() {
      return this.name;
    }
  }, {
    key: 'mapSymbolSequences',
    value: function mapSymbolSequences(callback) {
      return this.symbolSequences.map(callback);
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(content) {
      var matches = content.match(Line.nameExpressionRegExp),
          secondMatch = second(matches),
          thirdMatch = third(matches),
          name = secondMatch,
          ///
      expression = thirdMatch,
          ///
      choices = expression.split(Line.choiceDelimiterRegExp),
          symbolSequences = choices.map(function (choice) {
        var symbolSequence = SymbolSequence.fromChoice(choice);

        return symbolSequence;
      });

      var line = new Line(name, symbolSequences);

      return line;
    }
  }]);

  return Line;
}();

Line.choiceDelimiterRegExp = /\s+\|\s+/;
Line.nameExpressionRegExp = /^\s*(.*?)\s+::=\s+(.*?)\s*$/;
Line.continuedExpressionRegExp = /^\s*(\|\s+.*?)\s*$/;

module.exports = Line;

function second(array) {
  return array[1];
}
function third(array) {
  return array[2];
}

},{"./symbolSequence":151}],151:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var specialSymbols = require('../specialSymbols');

var SymbolSequence = function () {
  function SymbolSequence(symbols) {
    _classCallCheck(this, SymbolSequence);

    this.symbols = symbols;
  }

  _createClass(SymbolSequence, [{
    key: 'mapSymbols',
    value: function mapSymbols(callback) {
      return this.symbols.map(callback);
    }
  }, {
    key: 'reduceSymbols',
    value: function reduceSymbols(callback, initialValue) {
      return this.symbols.reduce(callback, initialValue);
    }
  }], [{
    key: 'fromChoice',
    value: function fromChoice(choice) {
      var symbols = choice.split(symbolDelimiterRegExp).reduce(function (symbols, symbol) {
        if (symbol === '' || symbol === undefined) {} else {
          symbols.push(symbol);
        }

        return symbols;
      }, []),
          expression = new SymbolSequence(symbols);

      return expression;
    }
  }]);

  return SymbolSequence;
}();

var symbolDelimiterRegExp = new RegExp('\\s+|(' + specialSymbols.END_OF_LINE + '(?:\\?|\\+|\\*))|(' + specialSymbols.NO_WHITESPACE + ')');

module.exports = SymbolSequence;

},{"../specialSymbols":152}],152:[function(require,module,exports){
'use strict';

var specialSymbols = {
  END_OF_LINE: '<END_OF_LINE>',
  NO_WHITESPACE: '<NO_WHITESPACE>'
};

module.exports = specialSymbols;

},{}],153:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = function () {
  function util() {
    _classCallCheck(this, util);
  }

  _createClass(util, null, [{
    key: 'minimumBarMinusOne',
    value: function minimumBarMinusOne() {
      var values = Array.prototype.slice.call(arguments),
          minimumBarMinusOne = values.reduce(function (minimumBarMinusOne, value) {
        if (value > -1) {
          minimumBarMinusOne = minimumBarMinusOne !== null ? Math.min(minimumBarMinusOne, value) : value;
        }

        return minimumBarMinusOne;
      }, null);

      return minimumBarMinusOne;
    }
  }, {
    key: 'spliceArray',
    value: function spliceArray(array, start, deleteCount, itemsArray) {
      var args = [start, deleteCount].concat(itemsArray);

      Array.prototype.splice.apply(array, args);
    }
  }, {
    key: 'sanitiseContent',
    value: function sanitiseContent(content) {
      var sanitisedContent = content.replace(/&/, '&amp;').replace(/</, '&lt;').replace(/>/, '&gt;');

      return sanitisedContent;
    }
  }]);

  return util;
}();

module.exports = util;

},{}]},{},[63])(63)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczYvYmFzaWMvZ3JhbW1hci5qcyIsImVzNi9iYXNpYy9wYXJzZXIuanMiLCJlczYvYm5mL2dyYW1tYXIuanMiLCJlczYvYm5mL3BhcnNlci5qcyIsImVzNi9ibmYvcHJvZHVjdGlvbi5qcyIsImVzNi9ibmYvcHJvZHVjdGlvbi9lbmRPZkxpbmUuanMiLCJlczYvYm5mL3Byb2R1Y3Rpb24vZ3JvdXAuanMiLCJlczYvYm5mL3Byb2R1Y3Rpb24vbm9XaGl0ZXNwYWNlLmpzIiwiZXM2L2JuZi9wcm9kdWN0aW9uL29wdGlvbmFsUGFydC5qcyIsImVzNi9ibmYvcHJvZHVjdGlvbi9wYXJ0LmpzIiwiZXM2L2JuZi9wcm9kdWN0aW9uL3Byb2R1Y3Rpb24uanMiLCJlczYvYm5mL3Byb2R1Y3Rpb24vcHJvZHVjdGlvbk5hbWUuanMiLCJlczYvYm5mL3Byb2R1Y3Rpb24vcHJvZHVjdGlvbnMuanMiLCJlczYvYm5mL3Byb2R1Y3Rpb24vcmVndWxhckV4cHJlc3Npb24uanMiLCJlczYvYm5mL3Byb2R1Y3Rpb24vcnVsZS5qcyIsImVzNi9ibmYvcHJvZHVjdGlvbi9ydWxlcy5qcyIsImVzNi9ibmYvcHJvZHVjdGlvbi9zaWduaWZpY2FudFRva2VuVHlwZS5qcyIsImVzNi9ibmYvcHJvZHVjdGlvbi90ZXJtaW5hbFN5bWJvbC5qcyIsImVzNi9ibmYvcnVsZS5qcyIsImVzNi9ibmYvcnVsZS9lbmRPZkxpbmUuanMiLCJlczYvYm5mL3J1bGUvZ3JvdXAuanMiLCJlczYvYm5mL3J1bGUvbm9XaGl0ZXNwYWNlLmpzIiwiZXM2L2JuZi9ydWxlL29wdGlvbmFsUGFydC5qcyIsImVzNi9ibmYvcnVsZS9wcm9kdWN0aW9uLmpzIiwiZXM2L2JuZi9ydWxlL3Byb2R1Y3Rpb25OYW1lLmpzIiwiZXM2L2JuZi9ydWxlL3Byb2R1Y3Rpb25zLmpzIiwiZXM2L2JuZi9ydWxlL3J1bGUuanMiLCJlczYvYm5mL3J1bGUvcnVsZXMuanMiLCJlczYvYm5mL3J1bGUvc2lnbmlmaWNhbnRUb2tlblR5cGUuanMiLCJlczYvY29tbW9uL2NvbnRleHQuanMiLCJlczYvY29tbW9uL25vZGUvbm9uVGVybWluYWwuanMiLCJlczYvY29tbW9uL25vZGUvbm9uVGVybWluYWwvZGlzY2FyZFNlY29uZENoaWxkLmpzIiwiZXM2L2NvbW1vbi9ub2RlL25vblRlcm1pbmFsL2Vycm9yLmpzIiwiZXM2L2NvbW1vbi9ub2RlL25vblRlcm1pbmFsL3RyYW5zcGFyZW50LmpzIiwiZXM2L2NvbW1vbi9ub2RlL25vblRlcm1pbmFsL3RyYW5zcGFyZW50VGhlbktlZXBTZWNvbmQuanMiLCJlczYvY29tbW9uL25vZGUvdGVybWluYWwuanMiLCJlczYvY29tbW9uL25vZGUvdGVybWluYWwvZXBzaWxvbi5qcyIsImVzNi9jb21tb24vcGFyc2VUcmVlLmpzIiwiZXM2L2NvbW1vbi9wYXJzZVRyZWUvY2hpbGROb2Rlcy5qcyIsImVzNi9jb21tb24vcGFyc2VUcmVlL2VtcHR5LmpzIiwiZXM2L2NvbW1vbi9wYXJzZVRyZWUvaG9yaXpvbnRhbEJyYW5jaC5qcyIsImVzNi9jb21tb24vcGFyc2VUcmVlL25vblRlcm1pbmFsTm9kZS5qcyIsImVzNi9jb21tb24vcGFyc2VUcmVlL3Byb2R1Y3Rpb25OYW1lLmpzIiwiZXM2L2NvbW1vbi9wYXJzZVRyZWUvdGVybWluYWxOb2RlLmpzIiwiZXM2L2NvbW1vbi9wYXJzZVRyZWUvdGVybWluYWxOb2RlL2Vwc2lsb24uanMiLCJlczYvY29tbW9uL3BhcnNlVHJlZS92ZXJ0aWNhbEJyYW5jaC5qcyIsImVzNi9jb21tb24vcGFyc2VyLmpzIiwiZXM2L2NvbW1vbi9wYXJ0L2VuZE9mTGluZS5qcyIsImVzNi9jb21tb24vcGFydC9lcHNpbG9uLmpzIiwiZXM2L2NvbW1vbi9wYXJ0L29uZU9yTW9yZVBhcnRzLmpzIiwiZXM2L2NvbW1vbi9wYXJ0L29wdGlvbmFsUGFydC5qcyIsImVzNi9jb21tb24vcGFydC9wcm9kdWN0aW9uTmFtZS5qcyIsImVzNi9jb21tb24vcGFydC9yZWd1bGFyRXhwcmVzc2lvbi5qcyIsImVzNi9jb21tb24vcGFydC9zZXF1ZW5jZU9mUGFydHMuanMiLCJlczYvY29tbW9uL3BhcnQvc2lnbmlmaWNhbnRUb2tlblR5cGUuanMiLCJlczYvY29tbW9uL3BhcnQvdGVybWluYWxTeW1ib2wuanMiLCJlczYvY29tbW9uL3BhcnQvd2lsZGNhcmQuanMiLCJlczYvY29tbW9uL3BhcnQvemVyb09yTW9yZVBhcnRzLmpzIiwiZXM2L2NvbW1vbi9wYXJ0cy5qcyIsImVzNi9jb21tb24vcHJvZHVjdGlvbi5qcyIsImVzNi9jb21tb24vcnVsZS5qcyIsImVzNi9leGFtcGxlLmpzIiwiZXM2L2V4YW1wbGVzLmpzIiwiZXM2L2V4YW1wbGVzL2Jhc2ljLmpzIiwiZXM2L2V4YW1wbGVzL2JuZi5qcyIsImVzNi9leGFtcGxlcy9mbG9yZW5jZS5qcyIsImVzNi9mbG9yZW5jZS9ncmFtbWFyLmpzIiwiZXM2L2Zsb3JlbmNlL21hcHBpbmdzLmpzIiwiZXM2L2Zsb3JlbmNlL3BhcnNlci5qcyIsImVzNi9ncmFtbWFyL2N5Y2xlcy5qcyIsImVzNi9ncmFtbWFyL2dyYXBoLmpzIiwiZXM2L2dyYW1tYXIvZ3JhcGgvY29tcG9uZW50LmpzIiwiZXM2L2dyYW1tYXIvZ3JhcGgvY3ljbGUuanMiLCJlczYvZ3JhbW1hci9ncmFwaC9zdGFjay5qcyIsImVzNi9ncmFtbWFyL2dyYXBoL3ZlcnRleC5qcyIsImVzNi9ncmFtbWFyL2xlZnRSZWN1cnNpb24uanMiLCJlczYvZ3JhbW1hci9wcm9kdWN0aW9uL25vbkltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlLmpzIiwiZXM2L2dyYW1tYXIvcHJvZHVjdGlvbi9ub25MZWZ0UmVjdXJzaXZlLmpzIiwiZXM2L2dyYW1tYXIvcHJvZHVjdGlvbi9ub25Vbml0UnVsZXMuanMiLCJlczYvZ3JhbW1hci9wcm9kdWN0aW9uL3JpZ2h0UmVjdXJzaXZlLmpzIiwiZXM2L2dyYW1tYXIvcHJvZHVjdGlvbi91bml0UnVsZS5qcyIsImVzNi9ncmFtbWFyL3Byb2R1Y3Rpb24vdW5pdFJ1bGVzLmpzIiwiZXM2L2dyYW1tYXIvcnVsZS9ub25Vbml0LmpzIiwiZXM2L2dyYW1tYXIvcnVsZS91bml0LmpzIiwiZXM2L3ByaW1pdGl2ZS9wYXJzZXIuanMiLCJlczYvdXRpbC9hcnJheS5qcyIsImVzNi91dGlsL3BhcnNlci5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5LWxheW91dC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5LWxheW91dC9lczYvY3Vyc29yLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3ktbGF5b3V0L2VzNi9vcHRpb25zLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3ktbGF5b3V0L2VzNi9zaXplYWJsZUVsZW1lbnQuanMiLCJub2RlX21vZHVsZXMvZWFzeS1sYXlvdXQvZXM2L3NwbGl0dGVyLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3ktbGF5b3V0L2VzNi9zcGxpdHRlci9ob3Jpem9udGFsLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3ktbGF5b3V0L2VzNi9zcGxpdHRlci92ZXJ0aWNhbC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L2RvY3VtZW50LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L2VsZW1lbnQuanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvZWxlbWVudC9ib2R5LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L2VsZW1lbnQvYnV0dG9uLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L2VsZW1lbnQvY2hlY2tib3guanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvZWxlbWVudC9kaXYuanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvZWxlbWVudC9saW5rLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L2VsZW1lbnQvc2VsZWN0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L2VsZW1lbnQvc3Bhbi5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi9pbnB1dEVsZW1lbnQuanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvaW5wdXRFbGVtZW50L2lucHV0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L2lucHV0RWxlbWVudC90ZXh0YXJlYS5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi9taXNjL2JvdW5kcy5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi9taXNjL29mZnNldC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi9taXhpbi9jbGljay5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi9taXhpbi9ldmVudC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi9taXhpbi9qc3guanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvbWl4aW4va2V5LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L21peGluL21vdXNlLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L21peGluL3Jlc2l6ZS5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi9taXhpbi9zY3JvbGwuanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvcmVhY3QuanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvdGV4dEVsZW1lbnQuanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvd2luZG93LmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9vY2NhbS1sZXhlcnMvZXM2L2Jhc2ljL2xleGVyLmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvYmFzaWMvbGluZS5qcyIsIm5vZGVfbW9kdWxlcy9vY2NhbS1sZXhlcnMvZXM2L2Jhc2ljL3Rva2Vucy9jb21tZW50LmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvYmFzaWMvdG9rZW5zL3N0cmluZy5qcyIsIm5vZGVfbW9kdWxlcy9vY2NhbS1sZXhlcnMvZXM2L2JuZi9sZXhlci5qcyIsIm5vZGVfbW9kdWxlcy9vY2NhbS1sZXhlcnMvZXM2L2JuZi9saW5lLmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvYm5mL3Rva2Vucy9jb21tZW50LmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvY29tbW9uL2NvbnRleHQuanMiLCJub2RlX21vZHVsZXMvb2NjYW0tbGV4ZXJzL2VzNi9jb21tb24vbGV4ZXIuanMiLCJub2RlX21vZHVsZXMvb2NjYW0tbGV4ZXJzL2VzNi9jb21tb24vbGluZS5qcyIsIm5vZGVfbW9kdWxlcy9vY2NhbS1sZXhlcnMvZXM2L2NvbW1vbi9ydWxlLmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvY29tbW9uL3J1bGVzLmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50LmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQuanMiLCJub2RlX21vZHVsZXMvb2NjYW0tbGV4ZXJzL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9lbmRPZi5qcyIsIm5vZGVfbW9kdWxlcy9vY2NhbS1sZXhlcnMvZXM2L2NvbW1vbi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L21pZGRsZU9mLmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvc3RhcnRPZi5qcyIsIm5vZGVfbW9kdWxlcy9vY2NhbS1sZXhlcnMvZXM2L2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC5qcyIsIm5vZGVfbW9kdWxlcy9vY2NhbS1sZXhlcnMvZXM2L2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9lbmRPZkxpbmUuanMiLCJub2RlX21vZHVsZXMvb2NjYW0tbGV4ZXJzL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvc3RyaW5nLmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L3doaXRlc3BhY2UuanMiLCJub2RlX21vZHVsZXMvb2NjYW0tbGV4ZXJzL2VzNi9jb21tb24vdG9rZW5zLmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvY29tbW9uL3Rva2Vucy9jb21tZW50LmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvY29tbW9uL3Rva2Vucy9zaWduaWZpY2FudC5qcyIsIm5vZGVfbW9kdWxlcy9vY2NhbS1sZXhlcnMvZXM2L2NvbW1vbi90b2tlbnMvc3RyaW5nLmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvY29tbW9uL3Rva2Vucy93aGl0ZXNwYWNlLmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvZmxvcmVuY2UvbGV4ZXIuanMiLCJub2RlX21vZHVsZXMvb2NjYW0tbGV4ZXJzL2VzNi9mbG9yZW5jZS9saW5lLmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvcHJpbWl0aXZlL2xleGVyLmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvcHJpbWl0aXZlL2xpbmUuanMiLCJub2RlX21vZHVsZXMvb2NjYW0tbGV4ZXJzL2VzNi9wcmltaXRpdmUvc3ltYm9sU2VxdWVuY2UuanMiLCJub2RlX21vZHVsZXMvb2NjYW0tbGV4ZXJzL2VzNi9zcGVjaWFsU3ltYm9scy5qcyIsIm5vZGVfbW9kdWxlcy9vY2NhbS1sZXhlcnMvZXM2L3V0aWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUFFQSxJQUFNLHNGQUFOOztBQVVBLE9BQU8sT0FBUCxHQUFpQixPQUFqQjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7Ozs7Ozs7Ozs7QUFFQSxJQUFNLFNBQVMsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTSxVQUFVLFFBQVEsV0FBUixDQUFoQjtBQUFBLElBQ00sZUFBZSxRQUFRLGtCQUFSLENBRHJCO0FBQUEsSUFFTSxrQkFBa0IsUUFBUSxx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QXJDLEVBQTBDLE1BQTFDLEVBQWtELE9BQWxELENBQTBELEdBQTFELEVBQStELE1BQS9ELENBQXpCOztBQUVBLGFBQU8sZ0JBQVA7QUFDRDs7Ozs7O0FBR0gsT0FBTyxPQUFQLEdBQWlCLElBQWpCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZ3JhbW1hciA9IGBcblxuICBTIDo6PSBYICdiJyB8IFkgXG4gIFxuICBZIDo6PSBYIHwgJ2EnXG4gIFxuICBYIDo6PSBTIHwgJ2MnXG5cbmA7XG5cbm1vZHVsZS5leHBvcnRzID0gZ3JhbW1hcjtcblxuLypcblxuXG4gQTEgOjo9IEEyICdhJyB8ICdiJ1xuXG4gQTIgOjo9IEExICdjJyB8ICdkJ1xuXG4gZXhwcmVzc2lvbiAgICAgICAgICAgICAgIDo6PSAgZXhwcmVzc2lvbiAnKycgdGVybSB8IHRlcm1cblxuIHRlcm0gICAgICAgICAgICAgICAgICAgICA6Oj0gIG5hdHVyYWxOdW1iZXJcblxuIG5hdHVyYWxOdW1iZXIgICAgICAgICAgICA6Oj0gIC9cXFxcZCsvXG5cblxuXG5cblxuXG4gZXhwcmVzc2lvbiAgICAgICAgICAgICAgIDo6PSAgdGVybSBvcGVyYXRvclRoZW5UZXJtKlxuICBcbiAgb3BlcmF0b3JUaGVuVGVybSAgICAgICAgIDo6PSAgb3BlcmF0b3IgdGVybVxuICBcbiAgb3BlcmF0b3IgICAgICAgICAgICAgICAgIDo6PSAgJysnIHwgJy0nIHwgJyonIHwgJy8nXG4gIFxuICB0ZXJtICAgICAgICAgICAgICAgICAgICAgOjo9ICBuYXR1cmFsTnVtYmVyIHwgcGFyZW50aGVzaXplZEV4cHJlc3Npb25cbiAgXG4gIG5hdHVyYWxOdW1iZXIgICAgICAgICAgICA6Oj0gIC9cXFxcZCsvXG4gIFxuICBwYXJlbnRoZXNpemVkRXhwcmVzc2lvbiAgOjo9ICAnKCcgZXhwcmVzc2lvbiAnKSdcblxuKi9cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IGdyYW1tYXIgPSByZXF1aXJlKCcuL2dyYW1tYXInKSxcbiAgICAgIENvbW1vblBhcnNlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9wYXJzZXInKSxcbiAgICAgIFByaW1pdGl2ZVBhcnNlciA9IHJlcXVpcmUoJy4uL3ByaW1pdGl2ZS9wYXJzZXInKTtcblxuY29uc3QgeyBQcmltaXRpdmVMZXhlciwgQmFzaWNMZXhlciB9ID0gbGV4ZXJzO1xuXG5jbGFzcyBCYXNpY1BhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBiYXNpY1BhcnNlciA9IEJhc2ljUGFyc2VyLmZyb21HcmFtbWFyKGdyYW1tYXIpO1xuICAgIFxuICAgIHJldHVybiBiYXNpY1BhcnNlcjtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21HcmFtbWFyKGdyYW1tYXIpIHtcbiAgICBjb25zdCBsaW5lcyA9IFByaW1pdGl2ZUxleGVyLmxpbmVzRnJvbUdyYW1tYXIoZ3JhbW1hciksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVzID0gQmFzaWNMZXhlci5zaWduaWZpY2FudFRva2VuVHlwZXMoKSxcbiAgICAgICAgICBtYXBwaW5ncyA9IHt9LFxuICAgICAgICAgIHByb2R1Y3Rpb25zID0gUHJpbWl0aXZlUGFyc2VyLnBhcnNlKGxpbmVzLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG1hcHBpbmdzKSxcbiAgICAgICAgICBiYXNpY1BhcnNlciA9IG5ldyBCYXNpY1BhcnNlcihwcm9kdWN0aW9ucyk7XG5cbiAgICByZXR1cm4gYmFzaWNQYXJzZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCYXNpY1BhcnNlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZ3JhbW1hciA9IGBcblxuICBwcm9kdWN0aW9ucyAgICAgICAgICAgOjo9ICBwcm9kdWN0aW9uK1xuICBcbiAgcHJvZHVjdGlvbiAgICAgICAgICAgIDo6PSAgcHJvZHVjdGlvbk5hbWUgXCI6Oj1cIiBydWxlcyBbZW5kT2ZMaW5lXVxuICBcbiAgcnVsZXMgICAgICAgICAgICAgICAgIDo6PSAgcnVsZVxuICBcbiAgcnVsZSAgICAgICAgICAgICAgICAgIDo6PSAgcGFydCtcbiAgXG4gIHBhcnQgICAgICAgICAgICAgICAgICA6Oj0gIGdyb3VwICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgb3B0aW9uYWxQYXJ0ICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgcHJvZHVjdGlvbk5hbWUgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICB8ICByZWd1bGFyRXhwcmVzc2lvbiBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgc2lnbmlmaWNhbnRUb2tlblR5cGUgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgdGVybWluYWxTeW1ib2xcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBub1doaXRlc3BhY2UgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGVuZE9mTGluZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIGdyb3VwICAgICAgICAgICAgICAgICA6Oj0gIFwiKFwiIHJ1bGVzIFwiKVwiXG4gIFxuICBvcHRpb25hbFBhcnQgICAgICAgICAgOjo9ICBwYXJ0PE5PX1dISVRFU1BBQ0U+XCI/XCJcblxuICBwcm9kdWN0aW9uTmFtZSAgICAgICAgOjo9ICBbbmFtZV1cblxuICByZWd1bGFyRXhwcmVzc2lvbiAgICAgOjo9ICBbcmVndWxhckV4cHJlc3Npb25dXG4gIFxuICBzaWduaWZpY2FudFRva2VuVHlwZSAgOjo9ICBbdHlwZV1cblxuICB0ZXJtaW5hbFN5bWJvbCAgICAgICAgOjo9ICBbc3RyaW5nXVxuICBcbiAgbm9XaGl0ZXNwYWNlICAgICAgICAgIDo6PSAgXCI8Tk9fV0hJVEVTUEFDRT5cIlxuICBcbiAgZW5kT2ZMaW5lICAgICAgICAgICAgIDo6PSAgXCI8RU5EX09GX0xJTkU+XCJcblxuYDtcblxubW9kdWxlLmV4cG9ydHMgPSBncmFtbWFyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDb21tb25QYXJzZXIgPSByZXF1aXJlKCcuLi9jb21tb24vcGFyc2VyJyksXG4gICAgICBQYXJ0UHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9wYXJ0JyksXG4gICAgICBSdWxlUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9ydWxlJyksXG4gICAgICBSdWxlc1Byb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vcnVsZXMnKSxcbiAgICAgIEdyb3VwUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9ncm91cCcpLFxuICAgICAgRW5kT2ZMaW5lUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9lbmRPZkxpbmUnKSxcbiAgICAgIFByb2R1Y3Rpb25Qcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3Byb2R1Y3Rpb24nKSxcbiAgICAgIFByb2R1Y3Rpb25zUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9wcm9kdWN0aW9ucycpLFxuICAgICAgT3B0aW9uYWxQYXJ0UHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9vcHRpb25hbFBhcnQnKSxcbiAgICAgIE5vV2hpdGVzcGFjZVByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vbm9XaGl0ZXNwYWNlJyksXG4gICAgICBQcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vcHJvZHVjdGlvbk5hbWUnKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi90ZXJtaW5hbFN5bWJvbCcpLFxuICAgICAgUmVndWxhckV4cHJlc3Npb25Qcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3JlZ3VsYXJFeHByZXNzaW9uJyksXG4gICAgICBTaWduaWZpY2FudFRva2VuVHlwZVByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vc2lnbmlmaWNhbnRUb2tlblR5cGUnKTtcblxuY2xhc3MgQk5GUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHBhcnRQcm9kdWN0aW9uID0gbmV3IFBhcnRQcm9kdWN0aW9uKCksXG4gICAgICAgICAgcnVsZVByb2R1Y3Rpb24gPSBuZXcgUnVsZVByb2R1Y3Rpb24oKSxcbiAgICAgICAgICBydWxlc1Byb2R1Y3Rpb24gPSBuZXcgUnVsZXNQcm9kdWN0aW9uKCksXG4gICAgICAgICAgZ3JvdXBQcm9kdWN0aW9uID0gbmV3IEdyb3VwUHJvZHVjdGlvbigpLFxuICAgICAgICAgIGVuZE9mTGluZVByb2R1Y3Rpb24gPSBuZXcgRW5kT2ZMaW5lUHJvZHVjdGlvbigpLFxuICAgICAgICAgIHByb2R1Y3Rpb25Qcm9kdWN0aW9uID0gbmV3IFByb2R1Y3Rpb25Qcm9kdWN0aW9uKCksXG4gICAgICAgICAgcHJvZHVjdGlvbnNQcm9kdWN0aW9uID0gbmV3IFByb2R1Y3Rpb25zUHJvZHVjdGlvbigpLFxuICAgICAgICAgIG9wdGlvbmFsUGFydFByb2R1Y3Rpb24gPSBuZXcgT3B0aW9uYWxQYXJ0UHJvZHVjdGlvbigpLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZVByb2R1Y3Rpb24gPSBuZXcgTm9XaGl0ZXNwYWNlUHJvZHVjdGlvbigpLFxuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbiA9IG5ldyBQcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb24oKSxcbiAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFByb2R1Y3Rpb24gPSBuZXcgVGVybWluYWxTeW1ib2xQcm9kdWN0aW9uKCksXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb25Qcm9kdWN0aW9uID0gbmV3IFJlZ3VsYXJFeHByZXNzaW9uUHJvZHVjdGlvbigpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUHJvZHVjdGlvbiA9IG5ldyBTaWduaWZpY2FudFRva2VuVHlwZVByb2R1Y3Rpb24oKSxcbiAgICAgICAgICBwcm9kdWN0aW9ucyA9IFtcbiAgICAgICAgICAgIHByb2R1Y3Rpb25zUHJvZHVjdGlvbixcbiAgICAgICAgICAgIHByb2R1Y3Rpb25Qcm9kdWN0aW9uLFxuICAgICAgICAgICAgcnVsZXNQcm9kdWN0aW9uLFxuICAgICAgICAgICAgcnVsZVByb2R1Y3Rpb24sXG4gICAgICAgICAgICBwYXJ0UHJvZHVjdGlvbixcbiAgICAgICAgICAgIGdyb3VwUHJvZHVjdGlvbixcbiAgICAgICAgICAgIG9wdGlvbmFsUGFydFByb2R1Y3Rpb24sXG4gICAgICAgICAgICBwcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb24sXG4gICAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblByb2R1Y3Rpb24sXG4gICAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZVByb2R1Y3Rpb24sXG4gICAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFByb2R1Y3Rpb24sXG4gICAgICAgICAgICBub1doaXRlc3BhY2VQcm9kdWN0aW9uLFxuICAgICAgICAgICAgZW5kT2ZMaW5lUHJvZHVjdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgYm5mUGFyc2VyID0gbmV3IEJORlBhcnNlcihwcm9kdWN0aW9ucyk7XG4gICAgXG4gICAgcmV0dXJuIGJuZlBhcnNlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJORlBhcnNlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgUHJvZHVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHJ1bGVzLCBOb2RlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gICAgdGhpcy5Ob2RlID0gTm9kZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIHBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSkge1xuICAgIGxldCBub2RlT3JOb2RlcyA9IG51bGw7XG5cbiAgICBjb250ZXh0LmluY3JlYXNlRGVwdGgoKTtcblxuICAgIGNvbnN0IHRvb0RlZXAgPSBjb250ZXh0LmlzVG9vRGVlcCgpO1xuXG4gICAgaWYgKHRvb0RlZXApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHBhcnNlIHRyZWUgaXMgdG9vIGRlZXAgYXQgcHJvZHVjdGlvbiAnJHt0aGlzLm5hbWV9J2ApO1xuICAgIH1cblxuICAgIGxldCBydWxlTm9kZXMgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHNvbWVSdWxlUGFyc2VkID0gdGhpcy5ydWxlcy5zb21lKGZ1bmN0aW9uKHJ1bGUpIHtcbiAgICAgICAgICAgIHJ1bGVOb2RlcyA9IHJ1bGUucGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKTtcbiAgXG4gICAgICAgICAgICBjb25zdCBydWxlUGFyc2VkID0gKHJ1bGVOb2RlcyAhPT0gbnVsbCk7XG4gIFxuICAgICAgICAgICAgcmV0dXJuIHJ1bGVQYXJzZWQ7XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoc29tZVJ1bGVQYXJzZWQpIHtcbiAgICAgIGNvbnN0IHJ1bGVOb2Rlc0xlbmd0aCA9IHJ1bGVOb2Rlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChydWxlTm9kZXNMZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IG5vZGVzID0gcnVsZU5vZGVzLCAgLy8vXG4gICAgICAgICAgICAgIHByb2R1Y3Rpb25OYW1lID0gdGhpcy5uYW1lOyAvLy9cblxuICAgICAgICBub2RlT3JOb2RlcyA9IHRoaXMuTm9kZS5mcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUpOyAgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWNyZWFzZURlcHRoKCk7XG5cbiAgICByZXR1cm4gbm9kZU9yTm9kZXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9kdWN0aW9uO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vcHJvZHVjdGlvbicpLFxuICAgICAgRW5kT2ZMaW5lUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUvZW5kT2ZMaW5lJyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBFbmRPZkxpbmVQcm9kdWN0aW9uIGV4dGVuZHMgUHJvZHVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IGVuZE9mTGluZVJ1bGUgPSBuZXcgRW5kT2ZMaW5lUnVsZSgpLFxuICAgICAgICAgIG5hbWUgPSAnZW5kT2ZMaW5lJyxcbiAgICAgICAgICBydWxlcyA9IFtcbiAgICAgICAgICAgIGVuZE9mTGluZVJ1bGVcbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBOb25UZXJtaW5hbE5vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgcnVsZXMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFbmRPZkxpbmVQcm9kdWN0aW9uO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vcHJvZHVjdGlvbicpLFxuICAgICAgR3JvdXBSdWxlID0gcmVxdWlyZSgnLi4vcnVsZS9ncm91cCcpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3MgR3JvdXBQcm9kdWN0aW9uIGV4dGVuZHMgUHJvZHVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHByb2R1Y3Rpb25SdWxlID0gbmV3IEdyb3VwUnVsZSgpLFxuICAgICAgICAgIG5hbWUgPSAnZ3JvdXAnLFxuICAgICAgICAgIHJ1bGVzID0gW1xuICAgICAgICAgICAgcHJvZHVjdGlvblJ1bGVcbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBOb25UZXJtaW5hbE5vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgcnVsZXMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHcm91cFByb2R1Y3Rpb247XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi9wcm9kdWN0aW9uJyksXG4gICAgICBOb1doaXRlc3BhY2VSdWxlID0gcmVxdWlyZSgnLi4vcnVsZS9ub1doaXRlc3BhY2UnKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIE5vV2hpdGVzcGFjZVByb2R1Y3Rpb24gZXh0ZW5kcyBQcm9kdWN0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlUnVsZSA9IG5ldyBOb1doaXRlc3BhY2VSdWxlKCksXG4gICAgICAgICAgbmFtZSA9ICdub1doaXRlc3BhY2UnLFxuICAgICAgICAgIHJ1bGVzID0gW1xuICAgICAgICAgICAgbm9XaGl0ZXNwYWNlUnVsZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IE5vblRlcm1pbmFsTm9kZTtcblxuICAgIHN1cGVyKG5hbWUsIHJ1bGVzLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9XaGl0ZXNwYWNlUHJvZHVjdGlvbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uL3Byb2R1Y3Rpb24nKSxcbiAgICAgIE9wdGlvbmFsUGFydFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlL29wdGlvbmFsUGFydCcpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3MgT3B0aW9uYWxQYXJ0UHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBvcHRpb25hbFBhcnRSdWxlID0gbmV3IE9wdGlvbmFsUGFydFJ1bGUoKSxcbiAgICAgICAgICBuYW1lID0gJ29wdGlvbmFsUGFydCcsXG4gICAgICAgICAgcnVsZXMgPSBbXG4gICAgICAgICAgICBvcHRpb25hbFBhcnRSdWxlXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIHJ1bGVzLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT3B0aW9uYWxQYXJ0UHJvZHVjdGlvbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uL3Byb2R1Y3Rpb24nKSxcbiAgICAgIFByb2R1Y3Rpb25OYW1lUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUvcHJvZHVjdGlvbk5hbWUnKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIFBhcnRQcm9kdWN0aW9uIGV4dGVuZHMgUHJvZHVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IGdyb3VwUHJvZHVjdGlvbk5hbWUgPSAnZ3JvdXAnLFxuICAgICAgICAgIGVuZE9mTGluZVByb2R1Y3Rpb25OYW1lID0gJ2VuZE9mTGluZScsXG4gICAgICAgICAgb3B0aW9uYWxQYXJ0UHJvZHVjdGlvbk5hbWUgPSAnb3B0aW9uYWxQYXJ0JyxcbiAgICAgICAgICBub1doaXRlc3BhY2VQcm9kdWN0aW9uTmFtZSA9ICdub1doaXRlc3BhY2UnLFxuICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUHJvZHVjdGlvbk5hbWUgPSAndGVybWluYWxTeW1ib2wnLFxuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbk5hbWUgPSAncHJvZHVjdGlvbk5hbWUnLFxuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUHJvZHVjdGlvbk5hbWUgPSAncmVndWxhckV4cHJlc3Npb24nLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUHJvZHVjdGlvbk5hbWUgPSAnc2lnbmlmaWNhbnRUb2tlblR5cGUnLFxuICAgICAgICAgIGdyb3VwUHJvZHVjdGlvbk5hbWVSdWxlID0gbmV3IFByb2R1Y3Rpb25OYW1lUnVsZShncm91cFByb2R1Y3Rpb25OYW1lKSxcbiAgICAgICAgICBlbmRPZkxpbmVQcm9kdWN0aW9uTmFtZVJ1bGUgPSBuZXcgUHJvZHVjdGlvbk5hbWVSdWxlKGVuZE9mTGluZVByb2R1Y3Rpb25OYW1lKSxcbiAgICAgICAgICBvcHRpb25hbFBhcnRQcm9kdWN0aW9uTmFtZVJ1bGUgPSBuZXcgUHJvZHVjdGlvbk5hbWVSdWxlKG9wdGlvbmFsUGFydFByb2R1Y3Rpb25OYW1lKSxcbiAgICAgICAgICBub1doaXRlc3BhY2VQcm9kdWN0aW9uTmFtZVJ1bGUgPSBuZXcgUHJvZHVjdGlvbk5hbWVSdWxlKG5vV2hpdGVzcGFjZVByb2R1Y3Rpb25OYW1lKSxcbiAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFByb2R1Y3Rpb25OYW1lUnVsZSA9IG5ldyBQcm9kdWN0aW9uTmFtZVJ1bGUodGVybWluYWxTeW1ib2xQcm9kdWN0aW9uTmFtZSksXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uTmFtZVJ1bGUgPSBuZXcgUHJvZHVjdGlvbk5hbWVSdWxlKHByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbk5hbWUpLFxuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUHJvZHVjdGlvbk5hbWVSdWxlID0gbmV3IFByb2R1Y3Rpb25OYW1lUnVsZShyZWd1bGFyRXhwcmVzc2lvblByb2R1Y3Rpb25OYW1lKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZVByb2R1Y3Rpb25OYW1lUnVsZSA9IG5ldyBQcm9kdWN0aW9uTmFtZVJ1bGUoc2lnbmlmaWNhbnRUb2tlblR5cGVQcm9kdWN0aW9uTmFtZSksXG4gICAgICAgICAgbmFtZSA9ICdwYXJ0JyxcbiAgICAgICAgICBydWxlcyA9IFtcbiAgICAgICAgICAgIGdyb3VwUHJvZHVjdGlvbk5hbWVSdWxlLFxuICAgICAgICAgICAgb3B0aW9uYWxQYXJ0UHJvZHVjdGlvbk5hbWVSdWxlLFxuICAgICAgICAgICAgcHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uTmFtZVJ1bGUsXG4gICAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblByb2R1Y3Rpb25OYW1lUnVsZSxcbiAgICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUHJvZHVjdGlvbk5hbWVSdWxlLFxuICAgICAgICAgICAgdGVybWluYWxTeW1ib2xQcm9kdWN0aW9uTmFtZVJ1bGUsXG4gICAgICAgICAgICBub1doaXRlc3BhY2VQcm9kdWN0aW9uTmFtZVJ1bGUsXG4gICAgICAgICAgICBlbmRPZkxpbmVQcm9kdWN0aW9uTmFtZVJ1bGVcbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBOb25UZXJtaW5hbE5vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgcnVsZXMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQYXJ0UHJvZHVjdGlvbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uL3Byb2R1Y3Rpb24nKSxcbiAgICAgIFByb2R1Y3Rpb25SdWxlID0gcmVxdWlyZSgnLi4vcnVsZS9wcm9kdWN0aW9uJyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBQcm9kdWN0aW9uUHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBwcm9kdWN0aW9uUnVsZSA9IG5ldyBQcm9kdWN0aW9uUnVsZSgpLFxuICAgICAgICAgIG5hbWUgPSAncHJvZHVjdGlvbicsXG4gICAgICAgICAgcnVsZXMgPSBbXG4gICAgICAgICAgICBwcm9kdWN0aW9uUnVsZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IE5vblRlcm1pbmFsTm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBydWxlcywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2R1Y3Rpb25Qcm9kdWN0aW9uO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vcHJvZHVjdGlvbicpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKSxcbiAgICAgIFNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUvc2lnbmlmaWNhbnRUb2tlblR5cGUnKTtcblxuY2xhc3MgUHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uIGV4dGVuZHMgUHJvZHVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5hbWVTaWduaWZpY2FudFRva2VuVHlwZSA9ICduYW1lJyxcbiAgICAgICAgICBuYW1lU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlID0gbmV3IFNpZ25pZmljYW50VG9rZW5UeXBlUnVsZShuYW1lU2lnbmlmaWNhbnRUb2tlblR5cGUpLFxuICAgICAgICAgIG5hbWUgPSAncHJvZHVjdGlvbk5hbWUnLFxuICAgICAgICAgIHJ1bGVzID0gW1xuICAgICAgICAgICAgbmFtZVNpZ25pZmljYW50VG9rZW5UeXBlUnVsZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IE5vblRlcm1pbmFsTm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBydWxlcywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uL3Byb2R1Y3Rpb24nKSxcbiAgICAgIFByb2R1Y3Rpb25zUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUvcHJvZHVjdGlvbnMnKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIFByb2R1Y3Rpb25zUHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBwcm9kdWN0aW9uc1J1bGUgPSBuZXcgUHJvZHVjdGlvbnNSdWxlKCksXG4gICAgICAgICAgbmFtZSA9ICdwcm9kdWN0aW9ucycsXG4gICAgICAgICAgcnVsZXMgPSBbXG4gICAgICAgICAgICBwcm9kdWN0aW9uc1J1bGVcbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBOb25UZXJtaW5hbE5vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgcnVsZXMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9kdWN0aW9uc1Byb2R1Y3Rpb247XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi9wcm9kdWN0aW9uJyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpLFxuICAgICAgU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlID0gcmVxdWlyZSgnLi4vcnVsZS9zaWduaWZpY2FudFRva2VuVHlwZScpO1xuXG5jbGFzcyBSZWd1bGFyRXhwcmVzc2lvblByb2R1Y3Rpb24gZXh0ZW5kcyBQcm9kdWN0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgcmVndWxhckV4cHJlc3Npb25TaWduaWZpY2FudFRva2VuVHlwZSA9ICdyZWd1bGFyRXhwcmVzc2lvbicsXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb25TaWduaWZpY2FudFRva2VuVHlwZVJ1bGUgPSBuZXcgU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlKHJlZ3VsYXJFeHByZXNzaW9uU2lnbmlmaWNhbnRUb2tlblR5cGUpLFxuICAgICAgICAgIG5hbWUgPSAncmVndWxhckV4cHJlc3Npb24nLFxuICAgICAgICAgIHJ1bGVzID0gW1xuICAgICAgICAgICAgcmVndWxhckV4cHJlc3Npb25TaWduaWZpY2FudFRva2VuVHlwZVJ1bGVcbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBOb25UZXJtaW5hbE5vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgcnVsZXMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWd1bGFyRXhwcmVzc2lvblByb2R1Y3Rpb247XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi9wcm9kdWN0aW9uJyksXG4gICAgICBSdWxlUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUvcnVsZScpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3MgUnVsZVByb2R1Y3Rpb24gZXh0ZW5kcyBQcm9kdWN0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgbmFtZSA9ICdydWxlJyxcbiAgICAgICAgICBydWxlUnVsZSA9IG5ldyBSdWxlUnVsZSgpLFxuICAgICAgICAgIHJ1bGVzID0gW1xuICAgICAgICAgICAgcnVsZVJ1bGVcbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBOb25UZXJtaW5hbE5vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgcnVsZXMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlUHJvZHVjdGlvbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uL3Byb2R1Y3Rpb24nKSxcbiAgICAgIFJ1bGVzUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUvcnVsZXMnKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIFJ1bGVzUHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBydWxlc1J1bGUgPSBuZXcgUnVsZXNSdWxlKCksXG4gICAgICAgICAgbmFtZSA9ICdydWxlcycsXG4gICAgICAgICAgcnVsZXMgPSBbXG4gICAgICAgICAgICBydWxlc1J1bGVcbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBOb25UZXJtaW5hbE5vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgcnVsZXMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlc1Byb2R1Y3Rpb247XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi9wcm9kdWN0aW9uJyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpLFxuICAgICAgU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlID0gcmVxdWlyZSgnLi4vcnVsZS9zaWduaWZpY2FudFRva2VuVHlwZScpO1xuXG5jbGFzcyBTaWduaWZpY2FudFRva2VuVHlwZVByb2R1Y3Rpb24gZXh0ZW5kcyBQcm9kdWN0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgdHlwZVNpZ25pZmljYW50VG9rZW5UeXBlID0gJ3R5cGUnLFxuICAgICAgICAgIHR5cGVTaWduaWZpY2FudFRva2VuVHlwZVJ1bGUgPSBuZXcgU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlKHR5cGVTaWduaWZpY2FudFRva2VuVHlwZSksXG4gICAgICAgICAgbmFtZSA9ICdzaWduaWZpY2FudFRva2VuVHlwZScsXG4gICAgICAgICAgcnVsZXMgPSBbXG4gICAgICAgICAgICB0eXBlU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIHJ1bGVzLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2lnbmlmaWNhbnRUb2tlblR5cGVQcm9kdWN0aW9uO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vcHJvZHVjdGlvbicpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKSxcbiAgICAgIFNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUvc2lnbmlmaWNhbnRUb2tlblR5cGUnKTtcblxuY2xhc3MgVGVybWluYWxTeW1ib2xQcm9kdWN0aW9uIGV4dGVuZHMgUHJvZHVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHN0cmluZ1NpZ25pZmljYW50VG9rZW5UeXBlID0gJ3N0cmluZycsXG4gICAgICAgICAgc3RyaW5nU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlID0gbmV3IFNpZ25pZmljYW50VG9rZW5UeXBlUnVsZShzdHJpbmdTaWduaWZpY2FudFRva2VuVHlwZSksXG4gICAgICAgICAgbmFtZSA9ICd0ZXJtaW5hbFN5bWJvbCcsXG4gICAgICAgICAgcnVsZXMgPSBbXG4gICAgICAgICAgICBzdHJpbmdTaWduaWZpY2FudFRva2VuVHlwZVJ1bGVcbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBOb25UZXJtaW5hbE5vZGU7XG5cbiAgICBzdXBlcihuYW1lLCBydWxlcywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRlcm1pbmFsU3ltYm9sUHJvZHVjdGlvbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzKSB7XG4gICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xuICB9XG5cbiAgZ2V0UGFydHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFydHM7XG4gIH1cblxuICBwYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpIHtcbiAgICBsZXQgbm9kZXMgPSBbXTtcbiAgICBcbiAgICBjb25zdCBzYXZlZEluZGV4ID0gY29udGV4dC5zYXZlZEluZGV4KCksXG4gICAgICAgICAgZXZlcnlQYXJ0UGFyc2VkID0gdGhpcy5wYXJ0cy5ldmVyeShmdW5jdGlvbihwYXJ0KSB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0Tm9kZU9yTm9kZXMgPSBwYXJ0LnBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgICAgICAgICBwYXJ0UGFyc2VkID0gKHBhcnROb2RlT3JOb2RlcyAhPT0gbnVsbCk7XG4gIFxuICAgICAgICAgICAgaWYgKHBhcnRQYXJzZWQpIHtcbiAgICAgICAgICAgICAgbm9kZXMgPSBub2Rlcy5jb25jYXQocGFydE5vZGVPck5vZGVzKTtcbiAgXG4gICAgICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgIHJldHVybiBwYXJ0UGFyc2VkO1xuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKCFldmVyeVBhcnRQYXJzZWQpIHtcbiAgICAgIGNvbnRleHQuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuXG4gICAgICBub2RlcyA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUnKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUGFydCA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9wYXJ0L3Rlcm1pbmFsU3ltYm9sJyk7XG5cbmNsYXNzIEVuZE9mTGluZVJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlID0gZmFsc2UsXG4gICAgICAgICAgZW5kT2ZMaW5lVGVybWluYWxTeW1ib2xDb250ZW50ID0gJzxFTkRfT0ZfTElORT4nLFxuICAgICAgICAgIGVuZE9mTGluZVRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQoZW5kT2ZMaW5lVGVybWluYWxTeW1ib2xDb250ZW50LCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgZW5kT2ZMaW5lVGVybWluYWxTeW1ib2xQYXJ0XG4gICAgICAgICAgXTtcblxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRW5kT2ZMaW5lUnVsZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUnKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUGFydCA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9wYXJ0L3Rlcm1pbmFsU3ltYm9sJyksXG4gICAgICBQcm9kdWN0aW9uTmFtZVBhcnQgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vcGFydC9wcm9kdWN0aW9uTmFtZScpO1xuXG5jbGFzcyBHcm91cFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlID0gZmFsc2UsXG4gICAgICAgICAgb3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSAnKCcsXG4gICAgICAgICAgcnVsZXNQcm9kdWN0aW9uTmFtZSA9ICdydWxlcycsXG4gICAgICAgICAgY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50ID0gJyknLFxuICAgICAgICAgIG9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydChvcGVuQnJhY2tldFRlcm1pbmFsU3ltYm9sQ29udGVudCwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBydWxlc1Byb2R1Y3Rpb25OYW1lUGFydCA9IG5ldyBQcm9kdWN0aW9uTmFtZVBhcnQocnVsZXNQcm9kdWN0aW9uTmFtZSwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KGNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sQ29udGVudCwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIG9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0LFxuICAgICAgICAgICAgcnVsZXNQcm9kdWN0aW9uTmFtZVBhcnQsXG4gICAgICAgICAgICBjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnRcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR3JvdXBSdWxlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vcnVsZScpLFxuICAgICAgVGVybWluYWxTeW1ib2xQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3BhcnQvdGVybWluYWxTeW1ib2wnKTtcblxuY2xhc3MgTm9XaGl0ZXNwYWNlUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2UgPSBmYWxzZSxcbiAgICAgICAgICBub1doaXRlc3BhY2VUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSAnPE5PX1dISVRFU1BBQ0U+JyxcbiAgICAgICAgICBub1doaXRlc3BhY2VUZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KG5vV2hpdGVzcGFjZVRlcm1pbmFsU3ltYm9sQ29udGVudCwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIG5vV2hpdGVzcGFjZVRlcm1pbmFsU3ltYm9sUGFydFxuICAgICAgICAgIF07XG5cbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vV2hpdGVzcGFjZVJ1bGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlJyksXG4gICAgICBUZXJtaW5hbFN5bWJvbFBhcnQgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vcGFydC90ZXJtaW5hbFN5bWJvbCcpLFxuICAgICAgUHJvZHVjdGlvbk5hbWVQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3BhcnQvcHJvZHVjdGlvbk5hbWUnKTtcblxuY2xhc3MgT3B0aW9uYWxQYXJ0UnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2UgPSB0cnVlLFxuICAgICAgICAgIHBhcnRQcm9kdWN0aW9uTmFtZSA9ICdwYXJ0JyxcbiAgICAgICAgICBxdWVzdGlvbk1hcmtUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSAnPycsXG4gICAgICAgICAgcGFydFByb2R1Y3Rpb25OYW1lUGFydCA9IG5ldyBQcm9kdWN0aW9uTmFtZVBhcnQocGFydFByb2R1Y3Rpb25OYW1lLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHF1ZXN0aW9uTWFya1Rlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQocXVlc3Rpb25NYXJrVGVybWluYWxTeW1ib2xDb250ZW50LCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgcGFydFByb2R1Y3Rpb25OYW1lUGFydCxcbiAgICAgICAgICAgIHF1ZXN0aW9uTWFya1Rlcm1pbmFsU3ltYm9sUGFydFxuICAgICAgICAgIF07XG4gICAgXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPcHRpb25hbFBhcnRSdWxlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vcnVsZScpLFxuICAgICAgVGVybWluYWxTeW1ib2xQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3BhcnQvdGVybWluYWxTeW1ib2wnKSxcbiAgICAgIFByb2R1Y3Rpb25OYW1lUGFydCA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9wYXJ0L3Byb2R1Y3Rpb25OYW1lJyksXG4gICAgICBTaWduaWZpY2FudFRva2VuVHlwZVBhcnQgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vcGFydC9zaWduaWZpY2FudFRva2VuVHlwZScpO1xuXG5jbGFzcyBQcm9kdWN0aW9uUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2UgPSBmYWxzZSxcbiAgICAgICAgICBwcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb25OYW1lID0gJ3Byb2R1Y3Rpb25OYW1lJyxcbiAgICAgICAgICBzZXBhcmF0b3JUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSAnOjo9JyxcbiAgICAgICAgICBydWxlc1Byb2R1Y3Rpb25OYW1lID0gJ3J1bGVzJyxcbiAgICAgICAgICBlbmRPZkxpbmVTaWduaWZpY2FudFRva2VuVHlwZSA9ICdlbmRPZkxpbmUnLFxuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbk5hbWVQYXJ0ID0gbmV3IFByb2R1Y3Rpb25OYW1lUGFydChwcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb25OYW1lLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHNlcGFyYXRvclRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQoc2VwYXJhdG9yVGVybWluYWxTeW1ib2xDb250ZW50LCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHJ1bGVzUHJvZHVjdGlvbk5hbWVQYXJ0ID0gbmV3IFByb2R1Y3Rpb25OYW1lUGFydChydWxlc1Byb2R1Y3Rpb25OYW1lLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIGVuZE9mTGluZVNpZ25pZmljYW50VG9rZW5UeXBlUGFydCA9IG5ldyBTaWduaWZpY2FudFRva2VuVHlwZVBhcnQoZW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlblR5cGUsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBwcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb25OYW1lUGFydCxcbiAgICAgICAgICAgIHNlcGFyYXRvclRlcm1pbmFsU3ltYm9sUGFydCxcbiAgICAgICAgICAgIHJ1bGVzUHJvZHVjdGlvbk5hbWVQYXJ0LFxuICAgICAgICAgICAgZW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0XG4gICAgICAgICAgXTtcbiAgICBcbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2R1Y3Rpb25SdWxlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vcnVsZScpLFxuICAgICAgUHJvZHVjdGlvbk5hbWVQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3BhcnQvcHJvZHVjdGlvbk5hbWUnKTtcblxuY2xhc3MgUHJvZHVjdGlvbk5hbWVSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKHByb2R1Y3Rpb25OYW1lKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlID0gZmFsc2UsXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWVQYXJ0ID0gbmV3IFByb2R1Y3Rpb25OYW1lUGFydChwcm9kdWN0aW9uTmFtZSwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUGFydFxuICAgICAgICAgIF07XG4gICAgXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9kdWN0aW9uTmFtZVJ1bGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlJyksXG4gICAgICBPbmVPck1vcmVQYXJ0c1BhcnQgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vcGFydC9vbmVPck1vcmVQYXJ0cycpO1xuXG5jbGFzcyBQcm9kdWN0aW9uc1J1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgdGVybWluYWxQYXJ0ID0gbnVsbCxcbiAgICAgICAgICBub1doaXRlc3BhY2UgPSBmYWxzZSwgXG4gICAgICAgICAgcHJvZHVjdGlvblByb2R1Y3Rpb25OYW1lID0gJ3Byb2R1Y3Rpb24nLFxuICAgICAgICAgIG9uZU9yTW9yZVByb2R1Y3Rpb25Qcm9kdWN0aW9uTmFtZVBhcnRzUGFydCA9IG5ldyBPbmVPck1vcmVQYXJ0c1BhcnQodGVybWluYWxQYXJ0LCBwcm9kdWN0aW9uUHJvZHVjdGlvbk5hbWUsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBvbmVPck1vcmVQcm9kdWN0aW9uUHJvZHVjdGlvbk5hbWVQYXJ0c1BhcnRcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvZHVjdGlvbnNSdWxlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vcnVsZScpLFxuICAgICAgT25lT3JNb3JlUGFydHNQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3BhcnQvb25lT3JNb3JlUGFydHMnKTtcblxuY2xhc3MgUnVsZVJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgdGVybWluYWxQYXJ0ID0gbnVsbCxcbiAgICAgICAgICBub1doaXRlc3BhY2UgPSBmYWxzZSxcbiAgICAgICAgICBwYXJ0UHJvZHVjdGlvbk5hbWUgPSAncGFydCcsXG4gICAgICAgICAgb25lT3JNb3JlUGFydFByb2R1Y3Rpb25OYW1lUGFydHNQYXJ0ID0gbmV3IE9uZU9yTW9yZVBhcnRzUGFydCh0ZXJtaW5hbFBhcnQsIHBhcnRQcm9kdWN0aW9uTmFtZSwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIG9uZU9yTW9yZVBhcnRQcm9kdWN0aW9uTmFtZVBhcnRzUGFydFxuICAgICAgICAgIF07XG5cbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGVSdWxlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vcnVsZScpLFxuICAgICAgUHJvZHVjdGlvbk5hbWVQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3BhcnQvcHJvZHVjdGlvbk5hbWUnKTtcblxuY2xhc3MgUnVsZXNSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5vV2hpdGVzcGFjZSA9IGZhbHNlLFxuICAgICAgICAgIHJ1bGVQcm9kdWN0aW9uTmFtZSA9ICdydWxlJyxcbiAgICAgICAgICBydWxlUHJvZHVjdGlvbk5hbWVQYXJ0ID0gbmV3IFByb2R1Y3Rpb25OYW1lUGFydChydWxlUHJvZHVjdGlvbk5hbWUsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBydWxlUHJvZHVjdGlvbk5hbWVQYXJ0XG4gICAgICAgICAgXTtcbiAgICBcbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGVzUnVsZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUnKSxcbiAgICAgIFNpZ25pZmljYW50VG9rZW5UeXBlUGFydCA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9wYXJ0L3NpZ25pZmljYW50VG9rZW5UeXBlJyk7XG5cbmNsYXNzIFNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcihzaWduaWZpY2FudFRva2VuVHlwZSkge1xuICAgIGNvbnN0IG5vV2hpdGVzcGFjZSA9IGZhbHNlLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUGFydCA9IG5ldyBTaWduaWZpY2FudFRva2VuVHlwZVBhcnQoc2lnbmlmaWNhbnRUb2tlblR5cGUsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZVBhcnRcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgeyBTaWduaWZpY2FudFRva2VuLCBXaGl0ZXNwYWNlVG9rZW4gfSA9IGxleGVycztcblxuY29uc3QgREVGQVVMVF9NQVhJTVVNX0RFUFRIID0gOTk7XG5cbmNsYXNzIENvbnRleHQge1xuICBjb25zdHJ1Y3Rvcih0b2tlbnMsIHByb2R1Y3Rpb25zLCBtYXhpbXVtRGVwdGggPSBERUZBVUxUX01BWElNVU1fREVQVEgpIHtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcblxuICAgIHRoaXMucHJvZHVjdGlvbnMgPSBwcm9kdWN0aW9ucztcblxuICAgIHRoaXMubWF4aW11bURlcHRoID0gbWF4aW11bURlcHRoO1xuXG4gICAgdGhpcy5kZXB0aCA9IDA7XG5cbiAgICB0aGlzLmluZGV4ID0gMDtcbiAgfVxuXG4gIGdldFByb2R1Y3Rpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnByb2R1Y3Rpb25zO1xuICB9XG5cbiAgZ2V0TWF4aW11bURlcHRoKCkge1xuICAgIHJldHVybiB0aGlzLm1heGltdW1EZXB0aDtcbiAgfVxuXG4gIGdldERlcHRoKCkge1xuICAgIHJldHVybiB0aGlzLmRlcHRoO1xuICB9XG5cbiAgZ2V0SW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5kZXg7XG4gIH1cblxuICBpc1Rvb0RlZXAoKSB7XG4gICAgY29uc3QgdG9vRGVlcCA9IHRoaXMuZGVwdGggPiB0aGlzLm1heGltdW1EZXB0aDtcbiAgICBcbiAgICByZXR1cm4gdG9vRGVlcDtcbiAgfVxuXG4gIGluY3JlYXNlRGVwdGgoKSB7XG4gICAgdGhpcy5kZXB0aCsrO1xuICB9XG5cbiAgZGVjcmVhc2VEZXB0aCgpIHtcbiAgICB0aGlzLmRlcHRoLS07XG4gIH1cblxuICBzZXRJbmRleChpbmRleCkge1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgfVxuXG4gIGdldE5leHRTaWduaWZpY2FudFRva2VuKCkge1xuICAgIGxldCBuZXh0U2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgICBmb3IgKDs7KSB7XG4gICAgICBjb25zdCBuZXh0VG9rZW4gPSB0aGlzLnRva2Vuc1t0aGlzLmluZGV4KytdO1xuXG4gICAgICBpZiAobmV4dFRva2VuID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZXh0VG9rZW4gaW5zdGFuY2VvZiBTaWduaWZpY2FudFRva2VuKSB7XG4gICAgICAgIG5leHRTaWduaWZpY2FudFRva2VuID0gbmV4dFRva2VuO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXh0U2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGdldE5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbihub1doaXRlc3BhY2UpIHtcbiAgICBsZXQgbmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuID0gbnVsbCxcbiAgICAgICAgbmV4dFNpZ25pZmljYW50VG9rZW4gPSB0aGlzLmdldE5leHRTaWduaWZpY2FudFRva2VuKCk7XG5cbiAgICBpZiAobmV4dFNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICAgIGxldCBuZXh0U2lnbmlmaWNhbnRUb2tlbklzV2hpdGVzcGFjZVRva2VuO1xuXG4gICAgICBpZiAobm9XaGl0ZXNwYWNlKSB7XG4gICAgICAgIG5leHRTaWduaWZpY2FudFRva2VuSXNXaGl0ZXNwYWNlVG9rZW4gPSBzaWduaWZpY2FudFRva2VuSXNXaGl0ZXNwYWNlVG9rZW4obmV4dFNpZ25pZmljYW50VG9rZW4pO1xuXG4gICAgICAgIGlmIChuZXh0U2lnbmlmaWNhbnRUb2tlbklzV2hpdGVzcGFjZVRva2VuKSB7XG4gICAgICAgICAgbmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuID0gbnVsbFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbiA9IG5leHRTaWduaWZpY2FudFRva2VuO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKDs7KSB7XG4gICAgICAgICAgbmV4dFNpZ25pZmljYW50VG9rZW5Jc1doaXRlc3BhY2VUb2tlbiA9IHNpZ25pZmljYW50VG9rZW5Jc1doaXRlc3BhY2VUb2tlbihuZXh0U2lnbmlmaWNhbnRUb2tlbik7XG5cbiAgICAgICAgICBpZiAobmV4dFNpZ25pZmljYW50VG9rZW5Jc1doaXRlc3BhY2VUb2tlbikge1xuICAgICAgICAgICAgbmV4dFNpZ25pZmljYW50VG9rZW4gPSB0aGlzLmdldE5leHRTaWduaWZpY2FudFRva2VuKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbiA9IG5leHRTaWduaWZpY2FudFRva2VuO1xuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobmV4dFNpZ25pZmljYW50VG9rZW4gPT09IG51bGwpIHtcbiAgICAgICAgICAgIG5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBzYXZlZEluZGV4KCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRJbmRleCgpLFxuICAgICAgICAgIHNhdmVkSW5kZXggPSBpbmRleDsgLy8vXG4gICAgXG4gICAgcmV0dXJuIHNhdmVkSW5kZXg7XG4gIH1cblxuICBiYWNrdHJhY2soc2F2ZWRJbmRleCkge1xuICAgIHRoaXMuaW5kZXggPSBzYXZlZEluZGV4OyAgLy8vXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb250ZXh0O1xuXG5mdW5jdGlvbiBzaWduaWZpY2FudFRva2VuSXNXaGl0ZXNwYWNlVG9rZW4oc2lnbmlmaWNhbnRUb2tlbikge1xuICBjb25zdCB0eXBlID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRUeXBlKCksXG4gICAgICAgIHdoaXRlc3BhY2VUb2tlbiA9ICh0eXBlID09PSBXaGl0ZXNwYWNlVG9rZW4udHlwZSk7XG4gIFxuICByZXR1cm4gd2hpdGVzcGFjZVRva2VuO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSByZXF1aXJlKCcuLi9wYXJzZVRyZWUvbm9uVGVybWluYWxOb2RlJyk7XG5cbmNsYXNzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHByb2R1Y3Rpb25OYW1lLCBjaGlsZE5vZGVzLCBmaXJzdExpbmUsIGxhc3RMaW5lLCBmaXJzdFNpZ25pZmljYW50VG9rZW4sIGxhc3RTaWduaWZpY2FudFRva2VuKSB7XG4gICAgdGhpcy5wcm9kdWN0aW9uTmFtZSA9IHByb2R1Y3Rpb25OYW1lO1xuICAgIHRoaXMuY2hpbGROb2RlcyA9IGNoaWxkTm9kZXM7XG4gICAgdGhpcy5maXJzdExpbmUgPSBmaXJzdExpbmU7XG4gICAgdGhpcy5sYXN0TGluZSA9IGxhc3RMaW5lO1xuICAgIHRoaXMuZmlyc3RTaWduaWZpY2FudFRva2VuID0gZmlyc3RTaWduaWZpY2FudFRva2VuO1xuICAgIHRoaXMubGFzdFNpZ25pZmljYW50VG9rZW4gPSBsYXN0U2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGdldFByb2R1Y3Rpb25OYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnByb2R1Y3Rpb25OYW1lO1xuICB9XG5cbiAgZ2V0Q2hpbGROb2RlcygpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzO1xuICB9XG4gIFxuICBnZXRGaXJzdExpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlyc3RMaW5lO1xuICB9XG5cbiAgZ2V0TGFzdExpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFzdExpbmU7XG4gIH1cblxuICBnZXRGaXJzdFNpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlyc3RTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMubGFzdFNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBwYXJzZVRyZWUobGluZXMpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlUGFyc2VUcmVlID0gTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlLmZyb21Ob25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBsaW5lcyksXG4gICAgICAgICAgcGFyc2VUcmVlID0gbm9uVGVybWluYWxOb2RlUGFyc2VUcmVlOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgc2V0Q2hpbGROb2RlcyhjaGlsZE5vZGVzKSB7XG4gICAgdGhpcy5jaGlsZE5vZGVzID0gY2hpbGROb2RlcztcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSwgQ2xhc3MgPSBOb25UZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9kZXMsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IENsYXNzLmZyb21Qcm9kdWN0aW9uTmFtZUFuZENoaWxkTm9kZXMocHJvZHVjdGlvbk5hbWUsIGNoaWxkTm9kZXMsIENsYXNzKTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb2R1Y3Rpb25OYW1lQW5kQ2hpbGROb2Rlcyhwcm9kdWN0aW9uTmFtZSwgY2hpbGROb2RlcywgQ2xhc3MgPSBOb25UZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIGxhc3RDaGlsZE5vZGUgPSBsYXN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlRmlyc3RMaW5lID0gZmlyc3RDaGlsZE5vZGUuZ2V0Rmlyc3RMaW5lKCksXG4gICAgICAgICAgbGFzdENoaWxkTm9kZUZpcnN0TGluZSA9IGxhc3RDaGlsZE5vZGUuZ2V0TGFzdExpbmUoKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZUZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IGZpcnN0Q2hpbGROb2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICAgIGxhc3RDaGlsZE5vZGVMYXN0U2lnbmlmaWNhbnRUb2tlbiA9IGxhc3RDaGlsZE5vZGUuZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgICBmaXJzdExpbmUgPSBmaXJzdENoaWxkTm9kZUZpcnN0TGluZSwgIC8vL1xuICAgICAgICAgIGxhc3RMaW5lID0gbGFzdENoaWxkTm9kZUZpcnN0TGluZSwgIC8vL1xuICAgICAgICAgIGZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IGZpcnN0Q2hpbGROb2RlRmlyc3RTaWduaWZpY2FudFRva2VuLCAvLy9cbiAgICAgICAgICBsYXN0U2lnbmlmaWNhbnRUb2tlbiA9IGxhc3RDaGlsZE5vZGVMYXN0U2lnbmlmaWNhbnRUb2tlbiwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlID0gbmV3IENsYXNzKHByb2R1Y3Rpb25OYW1lLCBjaGlsZE5vZGVzLCBmaXJzdExpbmUsIGxhc3RMaW5lLCBmaXJzdFNpZ25pZmljYW50VG9rZW4sIGxhc3RTaWduaWZpY2FudFRva2VuKTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb25UZXJtaW5hbE5vZGU7XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuZnVuY3Rpb24gbGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07IH1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbC9hcnJheScpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vbm9uVGVybWluYWwnKTtcblxuY2xhc3MgRGlzY2FyZFNlY29uZENoaWxkTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gYXJyYXlVdGlsLmRpc2NhcmRTZWNvbmQobm9kZXMpLFxuICAgICAgICAgIGRpc2NhcmRTZWNvbmRDaGlsZE5vZGUgPSBOb25UZXJtaW5hbE5vZGUuZnJvbVByb2R1Y3Rpb25OYW1lQW5kQ2hpbGROb2Rlcyhwcm9kdWN0aW9uTmFtZSwgY2hpbGROb2RlcywgRGlzY2FyZFNlY29uZENoaWxkTm9kZSk7XG5cbiAgICByZXR1cm4gZGlzY2FyZFNlY29uZENoaWxkTm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERpc2NhcmRTZWNvbmRDaGlsZE5vZGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uL3Rlcm1pbmFsJyk7XG5cbmNsYXNzIEVycm9yTm9kZSBleHRlbmRzIFRlcm1pbmFsTm9kZSB7XG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUpIHtcbiAgICBjb25zdCBmaXJzdE5vZGUgPSBmaXJzdChub2RlcyksXG4gICAgICAgICAgdGVybWluYWxOb2RlID0gZmlyc3ROb2RlLCAgLy8vXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IHRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgICAgZXJyb3JOb2RlID0gVGVybWluYWxOb2RlLmZyb21TaWduaWZpY2FudFRva2VuKHNpZ25pZmljYW50VG9rZW4sIEVycm9yTm9kZSksXG4gICAgICAgICAgZXJyb3IgPSB0cnVlO1xuXG4gICAgc2lnbmlmaWNhbnRUb2tlbi5zZXRFcnJvcihlcnJvcik7XG5cbiAgICByZXR1cm4gZXJyb3JOb2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXJyb3JOb2RlO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgVHJhbnNwYXJlbnROb2RlIHtcbiAgc3RhdGljIGZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSkge1xuICAgIHJldHVybiBub2RlcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRyYW5zcGFyZW50Tm9kZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbC9hcnJheScpO1xuXG5jbGFzcyBUcmFuc3BhcmVudFRoZW5LZWVwU2Vjb25kTm9kZSB7XG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUpIHtcbiAgICBub2RlcyA9IGFycmF5VXRpbC5rZWVwU2Vjb25kKG5vZGVzKTtcblxuICAgIHJldHVybiBub2RlcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRyYW5zcGFyZW50VGhlbktlZXBTZWNvbmROb2RlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBUZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSByZXF1aXJlKCcuLi9wYXJzZVRyZWUvdGVybWluYWxOb2RlJyk7XG5cbmNsYXNzIFRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHNpZ25pZmljYW50VG9rZW4sIGxpbmUpIHtcbiAgICB0aGlzLnNpZ25pZmljYW50VG9rZW4gPSBzaWduaWZpY2FudFRva2VuO1xuICAgIHRoaXMubGluZSA9IGxpbmU7XG4gIH1cblxuICBnZXRTaWduaWZpY2FudFRva2VuKCkge1xuICAgIHJldHVybiB0aGlzLnNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBnZXRMaW5lKCkge1xuICAgIHJldHVybiB0aGlzLmxpbmU7XG4gIH1cblxuICBnZXRGaXJzdFNpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgY29uc3QgZmlyc3RTaWduaWZpY2FudFRva2VuID0gdGhpcy5zaWduaWZpY2FudFRva2VuOyAgLy8vXG5cbiAgICByZXR1cm4gZmlyc3RTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgY29uc3QgbGFzdFNpZ25pZmljYW50VG9rZW4gPSB0aGlzLnNpZ25pZmljYW50VG9rZW47ICAvLy9cblxuICAgIHJldHVybiBsYXN0U2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGdldEZpcnN0TGluZSgpIHtcbiAgICBjb25zdCBmaXJzdExpbmUgPSB0aGlzLmxpbmU7IC8vL1xuXG4gICAgcmV0dXJuIGZpcnN0TGluZTtcbiAgfVxuXG4gIGdldExhc3RMaW5lKCkge1xuICAgIGNvbnN0IGxhc3RMaW5lID0gdGhpcy5saW5lOyAgLy8vXG5cbiAgICByZXR1cm4gbGFzdExpbmU7XG4gIH1cbiAgXG4gIHBhcnNlVHJlZShsaW5lcykge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICB0ZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSBUZXJtaW5hbE5vZGVQYXJzZVRyZWUuZnJvbVRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGUsIGxpbmVzKSxcbiAgICAgICAgICBwYXJzZVRyZWUgPSB0ZXJtaW5hbE5vZGVQYXJzZVRyZWU7ICAvLy9cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVNpZ25pZmljYW50VG9rZW4oc2lnbmlmaWNhbnRUb2tlbiwgQ2xhc3MgPSBUZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCBsaW5lID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRMaW5lKCksXG4gICAgICAgICAgdGVybWluYWxOb2RlID0gbmV3IENsYXNzKHNpZ25pZmljYW50VG9rZW4sIGxpbmUpLFxuICAgICAgICAgIGVycm9yID0gZmFsc2U7XG4gICAgXG4gICAgc2lnbmlmaWNhbnRUb2tlbi5zZXRFcnJvcihlcnJvcik7XG5cbiAgICByZXR1cm4gdGVybWluYWxOb2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGVybWluYWxOb2RlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBUZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi90ZXJtaW5hbCcpLFxuICAgICAgRXBzaWxvblRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IHJlcXVpcmUoJy4uLy4uL3BhcnNlVHJlZS90ZXJtaW5hbE5vZGUvZXBzaWxvbicpO1xuXG5jbGFzcyBFcHNpbG9uVGVybWluYWxOb2RlIGV4dGVuZHMgVGVybWluYWxOb2RlIHtcbiAgZ2V0Q29udGVudCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gJ861JztcbiAgICBcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIHBhcnNlVHJlZShsaW5lcykge1xuICAgIGNvbnN0IGVwc2lsb25UZXJtaW5hbE5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZXBzaWxvblRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IEVwc2lsb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUuZnJvbUVwc2lsb25UZXJtaW5hbE5vZGUoZXBzaWxvblRlcm1pbmFsTm9kZSwgbGluZXMpLFxuICAgICAgICAgIHBhcnNlVHJlZSA9IGVwc2lsb25UZXJtaW5hbE5vZGVQYXJzZVRyZWU7ICAvLy9cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFcHNpbG9uVGVybWluYWxOb2RlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBQYXJzZVRyZWUge1xuICBjb25zdHJ1Y3RvcihsaW5lcykge1xuICAgIHRoaXMubGluZXMgPSBsaW5lcztcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGNvbnN0IGxpbmVzID0gdGhpcy5saW5lcy5zbGljZSgwKSwgIC8vL1xuICAgICAgICAgIHBhcnNlVHJlZSA9IG5ldyBQYXJzZVRyZWUobGluZXMpO1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIGdldFdpZHRoKCkge1xuICAgIGxldCBsaW5lc0xlbmd0aCA9IHRoaXMubGluZXMubGVuZ3RoLFxuICAgICAgICAgIHdpZHRoID0gdW5kZWZpbmVkO1xuXG4gICAgaWYgKGxpbmVzTGVuZ3RoID09PSAwKSB7XG4gICAgICB3aWR0aCA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGxhc3RMaW5lID0gbGFzdCh0aGlzLmxpbmVzKSxcbiAgICAgICAgICAgIGxhc3RMaW5lTGVuZ3RoID0gbGFzdExpbmUubGVuZ3RoO1xuXG4gICAgICB3aWR0aCA9IGxhc3RMaW5lTGVuZ3RoOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cblxuICBnZXREZXB0aCgpIHtcbiAgICBjb25zdCBsaW5lc0xlbmd0aCA9IHRoaXMubGluZXMubGVuZ3RoLFxuICAgICAgICAgIGRlcHRoID0gbGluZXNMZW5ndGg7ICAvLy9cblxuICAgIHJldHVybiBkZXB0aDtcbiAgfVxuXG4gIGZvckVhY2hMaW5lKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5saW5lcy5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGFwcGVuZFRvVG9wKHBhcnNlVHJlZSkge1xuICAgIHBhcnNlVHJlZS5mb3JFYWNoTGluZShmdW5jdGlvbihsaW5lKSB7XG4gICAgICB0aGlzLmxpbmVzLnVuc2hpZnQobGluZSk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGFwcGVuZFRvTGVmdChwYXJzZVRyZWUpIHtcbiAgICBwYXJzZVRyZWUuZm9yRWFjaExpbmUoZnVuY3Rpb24obGluZSwgaW5kZXgpIHtcbiAgICAgIHRoaXMubGluZXNbaW5kZXhdID0gbGluZSArIHRoaXMubGluZXNbaW5kZXhdO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICBhcHBlbmRUb1JpZ2h0KHBhcnNlVHJlZSkge1xuICAgIHBhcnNlVHJlZS5mb3JFYWNoTGluZShmdW5jdGlvbihsaW5lLCBpbmRleCkge1xuICAgICAgdGhpcy5saW5lc1tpbmRleF0gPSB0aGlzLmxpbmVzW2luZGV4XSArIGxpbmU7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGFwcGVuZFRvQm90dG9tKHBhcnNlVHJlZSkge1xuICAgIHBhcnNlVHJlZS5mb3JFYWNoTGluZShmdW5jdGlvbihsaW5lKSB7XG4gICAgICB0aGlzLmxpbmVzLnB1c2gobGluZSk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGFkZFRvcE1hcmdpbih0b3BNYXJnaW5EZXB0aCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIHRvcE1hcmdpbldpZHRoID0gd2lkdGgsICAvLy9cbiAgICAgICAgICB0b3BNYXJnaW5TdHJpbmcgPSBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgodG9wTWFyZ2luV2lkdGgpO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRvcE1hcmdpbkRlcHRoOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLmxpbmVzLnVuc2hpZnQodG9wTWFyZ2luU3RyaW5nKTtcbiAgICB9XG4gIH1cblxuICBhZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCkge1xuICAgIGNvbnN0IGxlZnRNYXJnaW5TdHJpbmcgPSBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgobGVmdE1hcmdpbldpZHRoKSxcbiAgICAgICAgICBsaW5lc0xlbmd0aCA9IHRoaXMubGluZXMubGVuZ3RoO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxpbmVzTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLmxpbmVzW2luZGV4XSA9IGxlZnRNYXJnaW5TdHJpbmcgKyB0aGlzLmxpbmVzW2luZGV4XTtcbiAgICB9XG4gIH1cblxuICBhZGRSaWdodE1hcmdpbihyaWdodE1hcmdpbldpZHRoKSB7XG4gICAgY29uc3QgcmlnaHRNYXJnaW5TdHJpbmcgPSBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgocmlnaHRNYXJnaW5XaWR0aCksXG4gICAgICAgICAgbGluZXNMZW5ndGggPSB0aGlzLmxpbmVzLmxlbmd0aDtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsaW5lc0xlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdGhpcy5saW5lc1tpbmRleF0gPSB0aGlzLmxpbmVzW2luZGV4XSArIHJpZ2h0TWFyZ2luU3RyaW5nO1xuICAgIH1cbiAgfVxuXG4gIGFkZEJvdHRvbU1hcmdpbihib3R0b21NYXJnaW5EZXB0aCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGJvdHRvbU1hcmdpbldpZHRoID0gd2lkdGgsICAvLy9cbiAgICAgICAgICBib3R0b21NYXJnaW5TdHJpbmcgPSBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgoYm90dG9tTWFyZ2luV2lkdGgpO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGJvdHRvbU1hcmdpbkRlcHRoOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLmxpbmVzLnB1c2goYm90dG9tTWFyZ2luU3RyaW5nKTtcbiAgICB9XG4gIH1cbiAgXG4gIHBvcExpbmUoKSB7IHJldHVybiB0aGlzLmxpbmVzLnBvcCgpOyB9XG4gIFxuICBzaGlmdExpbmUoKSB7IHJldHVybiB0aGlzLmxpbmVzLnNoaWZ0KCk7IH1cbiAgXG4gIHB1c2hMaW5lKGxpbmUpIHsgdGhpcy5saW5lcy5wdXNoKGxpbmUpOyB9XG4gIFxuICB1bnNoaWZ0TGluZShsaW5lKSB7IHRoaXMubGluZXMudW5zaGlmdChsaW5lKTsgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMubGluZXMucmVkdWNlKGZ1bmN0aW9uKHN0cmluZywgbGluZSkge1xuICAgICAgc3RyaW5nICs9IGxpbmUgKyAnXFxuJztcblxuICAgICAgcmV0dXJuIHN0cmluZztcbiAgICB9LCAnJyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGFyc2VUcmVlO1xuXG5mdW5jdGlvbiBsYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTsgfVxuXG5mdW5jdGlvbiBtYXJnaW5TdHJpbmdGcm9tTWFyZ2luV2lkdGgobWFyZ2luV2lkdGgsIHNwYWNlQ2hhcmFjdGVyKSB7XG4gIHNwYWNlQ2hhcmFjdGVyID0gc3BhY2VDaGFyYWN0ZXIgfHwgJyAnO1xuXG4gIGxldCBtYXJnaW5TdHJpbmcgPSAnJztcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbWFyZ2luV2lkdGg7IGluZGV4KyspIHtcbiAgICBtYXJnaW5TdHJpbmcgKz0gc3BhY2VDaGFyYWN0ZXI7XG4gIH1cblxuICByZXR1cm4gbWFyZ2luU3RyaW5nO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbXB0eVBhcnNlVHJlZSA9IHJlcXVpcmUoJy4vZW1wdHknKSxcbiAgICAgIFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gcmVxdWlyZSgnLi92ZXJ0aWNhbEJyYW5jaCcpLFxuICAgICAgSG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZSA9IHJlcXVpcmUoJy4vaG9yaXpvbnRhbEJyYW5jaCcpO1xuXG5jbGFzcyBDaGlsZE5vZGVzUGFyc2VUcmVlIGV4dGVuZHMgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUge1xuICBzdGF0aWMgZnJvbUNoaWxkTm9kZXMoY2hpbGROb2RlcywgbGluZXMpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVQYXJzZVRyZWVzID0gY2hpbGROb2Rlcy5tYXAoZnVuY3Rpb24oY2hpbGROb2RlKSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZE5vZGVQYXJzZVRyZWUgPSBjaGlsZE5vZGUucGFyc2VUcmVlKGxpbmVzKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gY2hpbGROb2RlUGFyc2VUcmVlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZXNMZW5ndGggPSBjaGlsZE5vZGVQYXJzZVRyZWVzLmxlbmd0aDtcbiAgICBcbiAgICBsZXQgZmlyc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gdW5kZWZpbmVkLFxuICAgICAgICBsYXN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IDAsXG4gICAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZXNXaWR0aCA9IDAsXG4gICAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZXNEZXB0aCA9IDA7XG5cbiAgICBjaGlsZE5vZGVQYXJzZVRyZWVzLmZvckVhY2goZnVuY3Rpb24oY2hpbGROb2RlUGFyc2VUcmVlLCBpbmRleCkge1xuICAgICAgY29uc3QgY2hpbGROb2RlUGFyc2VUcmVlV2lkdGggPSBjaGlsZE5vZGVQYXJzZVRyZWUuZ2V0V2lkdGgoKSxcbiAgICAgICAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZURlcHRoID0gY2hpbGROb2RlUGFyc2VUcmVlLmdldERlcHRoKCk7XG5cbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICBjb25zdCBmaXJzdENoaWxkTm9kZVBhcnNlVHJlZSA9IGNoaWxkTm9kZVBhcnNlVHJlZSxcbiAgICAgICAgICAgIGZpcnN0Q2hpbGROb2RlUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IGZpcnN0Q2hpbGROb2RlUGFyc2VUcmVlLmdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKTtcblxuICAgICAgICBmaXJzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSBmaXJzdENoaWxkTm9kZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb247XG4gICAgICB9XG5cbiAgICAgIGlmIChpbmRleCA9PT0gY2hpbGROb2RlUGFyc2VUcmVlc0xlbmd0aCAtIDEpIHtcbiAgICAgICAgY29uc3QgbGFzdENoaWxkTm9kZVBhcnNlVHJlZSA9IGNoaWxkTm9kZVBhcnNlVHJlZSxcbiAgICAgICAgICAgIGxhc3RDaGlsZE5vZGVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gbGFzdENoaWxkTm9kZVBhcnNlVHJlZS5nZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCk7XG5cbiAgICAgICAgbGFzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24gKz0gbGFzdENoaWxkTm9kZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb247XG4gICAgICB9XG5cbiAgICAgIGlmIChpbmRleCA8IGNoaWxkTm9kZVBhcnNlVHJlZXNMZW5ndGggLSAxKSB7XG4gICAgICAgIGxhc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uICs9IGNoaWxkTm9kZVBhcnNlVHJlZVdpZHRoO1xuICAgICAgICBsYXN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiArPSAxO1xuXG4gICAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZXNXaWR0aCArPSAxO1xuICAgICAgfVxuXG4gICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzV2lkdGggKz0gY2hpbGROb2RlUGFyc2VUcmVlV2lkdGg7XG4gICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzRGVwdGggPSBNYXRoLm1heChjaGlsZE5vZGVQYXJzZVRyZWVzRGVwdGgsIGNoaWxkTm9kZVBhcnNlVHJlZURlcHRoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHdpZHRoID0gbGFzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24gLSBmaXJzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24gKyAxLFxuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZnJvbVdpZHRoKHdpZHRoKSxcbiAgICAgICAgICBob3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlID0gSG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZS5mcm9tV2lkdGgod2lkdGgpLFxuICAgICAgICAgIGxlZnRNYXJnaW5XaWR0aCA9IGZpcnN0VmVydGljYWxCcmFuY2hQb3NpdGlvbixcbiAgICAgICAgICByaWdodE1hcmdpbldpZHRoID0gY2hpbGROb2RlUGFyc2VUcmVlc1dpZHRoIC0gd2lkdGggLSBsZWZ0TWFyZ2luV2lkdGg7XG5cbiAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5hZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCk7XG4gICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCk7XG4gICAgaG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZS5hZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCk7XG4gICAgaG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZS5hZGRSaWdodE1hcmdpbihyaWdodE1hcmdpbldpZHRoKTtcbiAgICBcbiAgICBjb25zdCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpLFxuICAgICAgICAgIGNoaWxkTm9kZXNQYXJzZVRyZWUgPSBFbXB0eVBhcnNlVHJlZS5mcm9tRGVwdGgoY2hpbGROb2RlUGFyc2VUcmVlc0RlcHRoLCBDaGlsZE5vZGVzUGFyc2VUcmVlLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKTtcblxuICAgIGNoaWxkTm9kZVBhcnNlVHJlZXMuZm9yRWFjaChmdW5jdGlvbihjaGlsZE5vZGVQYXJzZVRyZWUsIGluZGV4KSB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVQYXJzZVRyZWVEZXB0aCA9IGNoaWxkTm9kZVBhcnNlVHJlZS5nZXREZXB0aCgpLFxuICAgICAgICAgICAgY2xvbmVkQ2hpbGROb2RlUGFyc2VUcmVlID0gY2hpbGROb2RlUGFyc2VUcmVlLmNsb25lKCk7XG5cbiAgICAgIGlmIChpbmRleCA8IGNoaWxkTm9kZVBhcnNlVHJlZXNMZW5ndGggLSAxKSB7XG4gICAgICAgIGNvbnN0IHJpZ2h0TWFyZ2luV2lkdGggPSAxO1xuXG4gICAgICAgIGNsb25lZENoaWxkTm9kZVBhcnNlVHJlZS5hZGRSaWdodE1hcmdpbihyaWdodE1hcmdpbldpZHRoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNoaWxkTm9kZVBhcnNlVHJlZURlcHRoIDwgY2hpbGROb2RlUGFyc2VUcmVlc0RlcHRoKSB7XG4gICAgICAgIGNvbnN0IGJvdHRvbU1hcmdpbkRlcHRoID0gY2hpbGROb2RlUGFyc2VUcmVlc0RlcHRoIC0gY2hpbGROb2RlUGFyc2VUcmVlRGVwdGg7XG5cbiAgICAgICAgY2xvbmVkQ2hpbGROb2RlUGFyc2VUcmVlLmFkZEJvdHRvbU1hcmdpbihib3R0b21NYXJnaW5EZXB0aCk7XG4gICAgICB9XG5cbiAgICAgIGNoaWxkTm9kZXNQYXJzZVRyZWUuYXBwZW5kVG9SaWdodChjbG9uZWRDaGlsZE5vZGVQYXJzZVRyZWUpO1xuICAgIH0pO1xuXG4gICAgY2hpbGROb2Rlc1BhcnNlVHJlZS5hcHBlbmRUb1RvcChob3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlKTtcbiAgICBjaGlsZE5vZGVzUGFyc2VUcmVlLmFwcGVuZFRvVG9wKHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlKTtcblxuICAgIHJldHVybiBjaGlsZE5vZGVzUGFyc2VUcmVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2hpbGROb2Rlc1BhcnNlVHJlZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUGFyc2VUcmVlID0gcmVxdWlyZSgnLi4vcGFyc2VUcmVlJyk7XG5cbmNsYXNzIEVtcHR5UGFyc2VUcmVlIGV4dGVuZHMgUGFyc2VUcmVlIHtcbiAgc3RhdGljIGZyb21EZXB0aChkZXB0aCwgQ2xhc3MsIC4uLmFyZ3MpIHtcbiAgICBDbGFzcyA9IENsYXNzIHx8IEVtcHR5UGFyc2VUcmVlO1xuICAgIFxuICAgIGNvbnN0IGxpbmVzID0gW107XG4gICAgXG4gICAgbGV0IGluZGV4ID0gMDtcblxuICAgIHdoaWxlIChpbmRleCA8IGRlcHRoKSB7XG4gICAgICBsaW5lc1tpbmRleCsrXSA9ICcnO1xuICAgIH1cblxuICAgIGFyZ3MudW5zaGlmdChsaW5lcyk7XG4gICAgYXJncy51bnNoaWZ0KG51bGwpO1xuXG4gICAgY29uc3QgZW1wdHlQYXJzZVRyZWUgPSBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KENsYXNzLCBhcmdzKSk7ICAvLy9cblxuICAgIHJldHVybiBlbXB0eVBhcnNlVHJlZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVtcHR5UGFyc2VUcmVlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBQYXJzZVRyZWUgPSByZXF1aXJlKCcuLi9wYXJzZVRyZWUnKTtcblxuY2xhc3MgSG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZSBleHRlbmRzIFBhcnNlVHJlZSB7XG4gIHN0YXRpYyBmcm9tV2lkdGgod2lkdGgpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBzdHJpbmdGcm9tQ2hhcmFjdGVyc1dpZHRoKHdpZHRoLCAnLScpLFxuICAgICAgICAgIGxpbmUgPSBzdHJpbmcsIC8vL1xuICAgICAgICAgIGxpbmVzID0gW2xpbmVdLFxuICAgICAgICAgIGhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUgPSBuZXcgSG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZShsaW5lcyk7XG5cbiAgICByZXR1cm4gaG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEhvcml6b250YWxCcmFuY2hQYXJzZVRyZWU7XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21DaGFyYWN0ZXJzV2lkdGgoY2hhcmFjdGVyc1dpZHRoLCBjaGFyYWN0ZXIpIHtcbiAgbGV0IHN0cmluZyA9ICcnO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjaGFyYWN0ZXJzV2lkdGg7IGluZGV4KyspIHtcbiAgICBzdHJpbmcgKz0gY2hhcmFjdGVyO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRW1wdHlQYXJzZVRyZWUgPSByZXF1aXJlKCcuL2VtcHR5JyksXG4gICAgICBDaGlsZE5vZGVzUGFyc2VUcmVlID0gcmVxdWlyZSgnLi9jaGlsZE5vZGVzJyksXG4gICAgICBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IHJlcXVpcmUoJy4vdmVydGljYWxCcmFuY2gnKSxcbiAgICAgIFByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uTmFtZScpO1xuXG5jbGFzcyBOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUgZXh0ZW5kcyBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSB7XG4gIHN0YXRpYyBmcm9tTm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgbGluZXMpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIGNoaWxkTm9kZSA9IGZpcnN0Q2hpbGROb2RlLFxuICAgICAgICAgIGNoaWxkTm9kZXNMZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aCxcbiAgICAgICAgICBjaGlsZE5vZGVPck5vZGVzUGFyc2VUcmVlID0gKGNoaWxkTm9kZXNMZW5ndGggPT09IDEpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZE5vZGUucGFyc2VUcmVlKGxpbmVzKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaGlsZE5vZGVzUGFyc2VUcmVlLmZyb21DaGlsZE5vZGVzKGNoaWxkTm9kZXMsIGxpbmVzKSxcbiAgICAgICAgICBwcm9kdWN0aW9uTmFtZVBhcnNlVHJlZSA9IFByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlLmZyb21Ob25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBsaW5lcyk7XG4gICAgXG4gICAgbGV0IHByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IHByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlLmdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKTtcbiAgICBcbiAgICBjb25zdCBjaGlsZE5vZGVPck5vZGVzUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IGNoaWxkTm9kZU9yTm9kZXNQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpLFxuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUG9zaXRpb25zRGlmZmVyZW5jZSA9IHByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbiAtIGNoaWxkTm9kZU9yTm9kZXNQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uO1xuICAgIFxuICAgIGxldCBsZWZ0TWFyZ2luV2lkdGggPSB1bmRlZmluZWQ7XG5cbiAgICBpZiAoZmFsc2UpIHtcblxuICAgIH0gZWxzZSBpZiAodmVydGljYWxCcmFuY2hQb3NpdGlvbnNEaWZmZXJlbmNlIDwgMCkge1xuICAgICAgbGVmdE1hcmdpbldpZHRoID0gLXZlcnRpY2FsQnJhbmNoUG9zaXRpb25zRGlmZmVyZW5jZTtcblxuICAgICAgcHJvZHVjdGlvbk5hbWVQYXJzZVRyZWUuYWRkTGVmdE1hcmdpbihsZWZ0TWFyZ2luV2lkdGgpO1xuICAgIH0gZWxzZSBpZiAodmVydGljYWxCcmFuY2hQb3NpdGlvbnNEaWZmZXJlbmNlID4gMCkge1xuICAgICAgbGVmdE1hcmdpbldpZHRoID0gK3ZlcnRpY2FsQnJhbmNoUG9zaXRpb25zRGlmZmVyZW5jZTtcblxuICAgICAgY2hpbGROb2RlT3JOb2Rlc1BhcnNlVHJlZS5hZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCk7XG4gICAgfVxuXG4gICAgY29uc3QgcHJvZHVjdGlvbk5hbWVQYXJzZVRyZWVXaWR0aCA9IHByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlLmdldFdpZHRoKCksXG4gICAgICAgICAgY2hpbGROb2RlT3JOb2Rlc1BhcnNlVHJlZVdpZHRoID0gY2hpbGROb2RlT3JOb2Rlc1BhcnNlVHJlZS5nZXRXaWR0aCgpLFxuICAgICAgICAgIHdpZHRoc0RpZmZlcmVuY2UgPSBwcm9kdWN0aW9uTmFtZVBhcnNlVHJlZVdpZHRoIC0gY2hpbGROb2RlT3JOb2Rlc1BhcnNlVHJlZVdpZHRoO1xuICAgIFxuICAgIGxldCByaWdodE1hcmdpbldpZHRoID0gdW5kZWZpbmVkO1xuXG4gICAgaWYgKGZhbHNlKSB7XG5cbiAgICB9IGVsc2UgaWYgKHdpZHRoc0RpZmZlcmVuY2UgPCAwKSB7XG4gICAgICByaWdodE1hcmdpbldpZHRoID0gLXdpZHRoc0RpZmZlcmVuY2U7XG4gICAgICBcbiAgICAgIHByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlLmFkZFJpZ2h0TWFyZ2luKHJpZ2h0TWFyZ2luV2lkdGgpO1xuICAgIH0gZWxzZSBpZiAod2lkdGhzRGlmZmVyZW5jZSA+IDApIHtcbiAgICAgIHJpZ2h0TWFyZ2luV2lkdGggPSArd2lkdGhzRGlmZmVyZW5jZTtcblxuICAgICAgY2hpbGROb2RlT3JOb2Rlc1BhcnNlVHJlZS5hZGRSaWdodE1hcmdpbihyaWdodE1hcmdpbldpZHRoKTtcbiAgICB9XG5cbiAgICBwcm9kdWN0aW9uTmFtZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSBwcm9kdWN0aW9uTmFtZVBhcnNlVHJlZS5nZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCk7XG5cbiAgICBjb25zdCBwcm9kdWN0aW9uTmFtZVBhcnNlVHJlZURlcHRoID0gcHJvZHVjdGlvbk5hbWVQYXJzZVRyZWUuZ2V0RGVwdGgoKSxcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWVEZXB0aCA9IHByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlRGVwdGgsIC8vL1xuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSBwcm9kdWN0aW9uTmFtZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24sIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IEVtcHR5UGFyc2VUcmVlLmZyb21EZXB0aChub25UZXJtaW5hbE5vZGVQYXJzZVRyZWVEZXB0aCwgTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKTtcblxuICAgIG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZS5hcHBlbmRUb1JpZ2h0KHByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlKTtcbiAgICBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWUuYXBwZW5kVG9Cb3R0b20oY2hpbGROb2RlT3JOb2Rlc1BhcnNlVHJlZSk7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlUGFyc2VUcmVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSByZXF1aXJlKCcuL3ZlcnRpY2FsQnJhbmNoJyk7XG5cbmNsYXNzIFByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlIGV4dGVuZHMgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUge1xuICBzdGF0aWMgZnJvbU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIGxpbmVzKSB7XG4gICAgY29uc3QgcHJvZHVjdGlvbk5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UHJvZHVjdGlvbk5hbWUoKSxcbiAgICAgICAgICBmaXJzdExpbmUgPSBub25UZXJtaW5hbE5vZGUuZ2V0Rmlyc3RMaW5lKCksXG4gICAgICAgICAgbGFzdExpbmUgPSBub25UZXJtaW5hbE5vZGUuZ2V0TGFzdExpbmUoKSxcbiAgICAgICAgICBmaXJzdExpbmVJbmRleCA9IGxpbmVzLmluZGV4T2YoZmlyc3RMaW5lKSxcbiAgICAgICAgICBsYXN0TGluZUluZGV4ID0gbGluZXMuaW5kZXhPZihsYXN0TGluZSksXG4gICAgICAgICAgZmlyc3RMaW5lTnVtYmVyID0gZmlyc3RMaW5lSW5kZXggKyAxLFxuICAgICAgICAgIGxhc3RMaW5lTnVtYmVyID0gbGFzdExpbmVJbmRleCArIDEsXG4gICAgICAgICAgc3RyaW5nID0gYCR7cHJvZHVjdGlvbk5hbWV9ICgke2ZpcnN0TGluZU51bWJlcn0tJHtsYXN0TGluZU51bWJlcn0pYCxcbiAgICAgICAgICBzdHJpbmdMZW5ndGggPSBzdHJpbmcubGVuZ3RoLFxuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGggPSBzdHJpbmdMZW5ndGgsIC8vL1xuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZnJvbVdpZHRoKHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGgpLFxuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5nZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCksXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWVQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tU3RyaW5nKHN0cmluZywgUHJvZHVjdGlvbk5hbWVQYXJzZVRyZWUsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pO1xuXG4gICAgcHJvZHVjdGlvbk5hbWVQYXJzZVRyZWUuYXBwZW5kVG9Ub3AodmVydGljYWxCcmFuY2hQYXJzZVRyZWUpO1xuXG4gICAgcmV0dXJuIHByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvZHVjdGlvbk5hbWVQYXJzZVRyZWU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gcmVxdWlyZSgnLi92ZXJ0aWNhbEJyYW5jaCcpO1xuXG5jbGFzcyBUZXJtaW5hbE5vZGVQYXJzZVRyZWUgZXh0ZW5kcyBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSB7XG4gIHN0YXRpYyBmcm9tVGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZSwgbGluZXMpIHtcbiAgICBjb25zdCBsaW5lID0gdGVybWluYWxOb2RlLmdldExpbmUoKSxcbiAgICAgICAgICBsaW5lSW5kZXggPSBsaW5lcy5pbmRleE9mKGxpbmUpLFxuICAgICAgICAgIGxpbmVOdW1iZXIgPSBsaW5lSW5kZXggKyAxLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSB0ZXJtaW5hbE5vZGUuZ2V0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRUeXBlKCksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbkVycm9yID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRFcnJvcigpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5Db250ZW50ID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRDb250ZW50KCksXG4gICAgICAgICAgY29udGVudCA9IHNpZ25pZmljYW50VG9rZW5Db250ZW50LFxuICAgICAgICAgIGRlc2NyaXB0aW9uID0gKHNpZ25pZmljYW50VG9rZW5FcnJvciA9PT0gdHJ1ZSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnZXJyb3InIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZSxcbiAgICAgICAgICBzdHJpbmcgPSBgJHtjb250ZW50fVske2Rlc2NyaXB0aW9ufV0gKCR7bGluZU51bWJlcn0pYCxcbiAgICAgICAgICBzdHJpbmdMZW5ndGggPSBzdHJpbmcubGVuZ3RoLFxuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGggPSBzdHJpbmdMZW5ndGgsIC8vL1xuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZnJvbVdpZHRoKHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGgpLFxuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5nZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCksIFxuICAgICAgICAgIHRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21TdHJpbmcoc3RyaW5nLCBUZXJtaW5hbE5vZGVQYXJzZVRyZWUsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pO1xuICAgIFxuICAgIHRlcm1pbmFsTm9kZVBhcnNlVHJlZS5hcHBlbmRUb1RvcCh2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSk7XG5cbiAgICByZXR1cm4gdGVybWluYWxOb2RlUGFyc2VUcmVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGVybWluYWxOb2RlUGFyc2VUcmVlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IHJlcXVpcmUoJy4uL3ZlcnRpY2FsQnJhbmNoJyk7XG5cbmNsYXNzIEVwc2lsb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUgZXh0ZW5kcyBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSB7XG4gIHN0YXRpYyBmcm9tRXBzaWxvblRlcm1pbmFsTm9kZShlcHNpbG9uVGVybWluYWxOb2RlLCBsaW5lcykge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBlcHNpbG9uVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBzdHJpbmcgPSBgJHtjb250ZW50fWAsXG4gICAgICAgICAgc3RyaW5nTGVuZ3RoID0gc3RyaW5nLmxlbmd0aCxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoID0gc3RyaW5nTGVuZ3RoLCAvLy9cbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21XaWR0aCh2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoKSxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpLCBcbiAgICAgICAgICB0ZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tU3RyaW5nKHN0cmluZywgRXBzaWxvblRlcm1pbmFsTm9kZVBhcnNlVHJlZSwgdmVydGljYWxCcmFuY2hQb3NpdGlvbik7XG4gICAgXG4gICAgdGVybWluYWxOb2RlUGFyc2VUcmVlLmFwcGVuZFRvVG9wKHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlKTtcblxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGVQYXJzZVRyZWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFcHNpbG9uVGVybWluYWxOb2RlUGFyc2VUcmVlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBQYXJzZVRyZWUgPSByZXF1aXJlKCcuLi9wYXJzZVRyZWUnKTtcblxuY2xhc3MgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUgZXh0ZW5kcyBQYXJzZVRyZWUge1xuICBjb25zdHJ1Y3RvcihsaW5lcywgdmVydGljYWxCcmFuY2hQb3NpdGlvbikge1xuICAgIHN1cGVyKGxpbmVzKTtcbiAgICBcbiAgICB0aGlzLnZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uO1xuICB9XG4gIFxuICBnZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRpY2FsQnJhbmNoUG9zaXRpb247XG4gIH1cblxuICBhZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCkge1xuICAgIHN1cGVyLmFkZExlZnRNYXJnaW4obGVmdE1hcmdpbldpZHRoKTtcblxuICAgIHRoaXMudmVydGljYWxCcmFuY2hQb3NpdGlvbiArPSBsZWZ0TWFyZ2luV2lkdGg7IC8vL1xuICB9XG5cbiAgc3RhdGljIGZyb21XaWR0aCh3aWR0aCkge1xuICAgIGNvbnN0IHN0cmluZyA9ICd8JyxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gMCxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21TdHJpbmcoc3RyaW5nLCBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSwgdmVydGljYWxCcmFuY2hQb3NpdGlvbiksXG4gICAgICAgICAgbGVmdE1hcmdpbldpZHRoID0gTWF0aC5mbG9vcih3aWR0aC8yKSxcbiAgICAgICAgICByaWdodE1hcmdpbldpZHRoID0gd2lkdGggLSBsZWZ0TWFyZ2luV2lkdGggLSAxO1xuXG4gICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuYWRkTGVmdE1hcmdpbihsZWZ0TWFyZ2luV2lkdGgpO1xuICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmFkZFJpZ2h0TWFyZ2luKHJpZ2h0TWFyZ2luV2lkdGgpO1xuXG4gICAgcmV0dXJuIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVN0cmluZyhzdHJpbmcsIENsYXNzLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKSB7XG4gICAgQ2xhc3MgPSBDbGFzcyB8fCBQYXJzZVRyZWU7XG5cbiAgICBjb25zdCBsaW5lID0gc3RyaW5nLCAvLy9cbiAgICAgICAgICBsaW5lcyA9IFtsaW5lXSxcbiAgICAgICAgICBhcmdzID0gW251bGwsIGxpbmVzLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uXSxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoQ2xhc3MsIGFyZ3MpKTsgIC8vL1xuXG4gICAgcmV0dXJuIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENvbnRleHQgPSByZXF1aXJlKCcuL2NvbnRleHQnKSxcbiAgICAgIHBhcnNlclV0aWwgPSByZXF1aXJlKCcuLi91dGlsL3BhcnNlcicpO1xuXG5jbGFzcyBDb21tb25QYXJzZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9kdWN0aW9ucykge1xuICAgIHRoaXMucHJvZHVjdGlvbnMgPSBwcm9kdWN0aW9ucztcbiAgfVxuXG4gIGdldFByb2R1Y3Rpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnByb2R1Y3Rpb25zO1xuICB9XG4gIFxuICBub2RlRnJvbUxpbmVzKGxpbmVzLCBwcm9kdWN0aW9uID0gbnVsbCkge1xuICAgIGNvbnN0IHRva2VucyA9IHBhcnNlclV0aWwudG9rZW5zRnJvbUxpbmVzKGxpbmVzKSxcbiAgICAgICAgICBub2RlID0gdGhpcy5wYXJzZSh0b2tlbnMsIHByb2R1Y3Rpb24pO1xuICAgIFxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgcGFyc2UodG9rZW5zLCBwcm9kdWN0aW9uKSB7XG4gICAgbGV0IG5vZGUgPSBudWxsO1xuXG4gICAgaWYgKHByb2R1Y3Rpb24gPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHByb2R1Y3Rpb25zTGVuZ3RoID0gdGhpcy5wcm9kdWN0aW9ucy5sZW5ndGg7XG5cbiAgICAgIGlmIChwcm9kdWN0aW9uc0xlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgZmlyc3RQcm9kdWN0aW9uID0gZmlyc3QodGhpcy5wcm9kdWN0aW9ucyk7XG5cbiAgICAgICAgcHJvZHVjdGlvbiA9IGZpcnN0UHJvZHVjdGlvbjsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHByb2R1Y3Rpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBuZXcgQ29udGV4dCh0b2tlbnMsIHRoaXMucHJvZHVjdGlvbnMpLFxuICAgICAgICAgICAgbm9XaGl0ZXNwYWNlID0gZmFsc2UsXG4gICAgICAgICAgICBub2RlT3JOb2RlcyA9IHByb2R1Y3Rpb24ucGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKTtcblxuICAgICAgaWYgKG5vZGVPck5vZGVzICE9PSBudWxsKSB7XG4gICAgICAgIG5vZGUgPSAobm9kZU9yTm9kZXMgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgICAgICBmaXJzdChub2RlT3JOb2RlcykgOlxuICAgICAgICAgICAgICAgICAgIG5vZGVPck5vZGVzO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgZmluZFByb2R1Y3Rpb24ocHJvZHVjdGlvbk5hbWUpIHsgcmV0dXJuIHBhcnNlclV0aWwuZmluZFByb2R1Y3Rpb24ocHJvZHVjdGlvbk5hbWUsIHRoaXMucHJvZHVjdGlvbnMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tbW9uUGFyc2VyO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IHsgc3BlY2lhbFN5bWJvbHMsIEVuZE9mTGluZVRva2VuIH0gPSBsZXhlcnM7XG5cbmNvbnN0IFRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvdGVybWluYWwnKTtcblxuY2xhc3MgRW5kT2ZMaW5lUGFydCB7XG4gIGNvbnN0cnVjdG9yKG5vV2hpdGVzcGFjZSkge1xuICAgIHRoaXMubm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlO1xuICB9XG4gIFxuICBwYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpIHtcbiAgICBub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2UgfHwgdGhpcy5ub1doaXRlc3BhY2U7IC8vL1xuXG4gICAgbGV0IHRlcm1pbmFsTm9kZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IGNvbnRleHQuc2F2ZWRJbmRleCgpLFxuICAgICAgICAgIG5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbiA9IGNvbnRleHQuZ2V0TmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuKG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IG5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbjsgLy8vXG5cbiAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdHlwZSA9IHNpZ25pZmljYW50VG9rZW4uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgZm91bmQgPSAodHlwZSA9PT0gRW5kT2ZMaW5lVG9rZW4udHlwZSk7XG5cbiAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICB0ZXJtaW5hbE5vZGUgPSBUZXJtaW5hbE5vZGUuZnJvbVNpZ25pZmljYW50VG9rZW4oc2lnbmlmaWNhbnRUb2tlbik7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGlmICh0ZXJtaW5hbE5vZGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGU7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSAnPEVORF9PRl9MSU5FPic7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSkge1xuICAgIGxldCBlbmRPZkxpbmVQYXJ0ID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBmb3VuZCA9IChzeW1ib2wgPT09IHNwZWNpYWxTeW1ib2xzLkVORF9PRl9MSU5FKTtcblxuICAgIGlmIChmb3VuZCkge1xuICAgICAgZW5kT2ZMaW5lUGFydCA9IG5ldyBFbmRPZkxpbmVQYXJ0KG5vV2hpdGVzcGFjZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVuZE9mTGluZVBhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFbmRPZkxpbmVQYXJ0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFcHNpbG9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vbm9kZS90ZXJtaW5hbC9lcHNpbG9uJyk7XG5cbmNsYXNzIEVwc2lsb25QYXJ0IHtcbiAgcGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgY29uc3QgZXBzaWxvblRlcm1pbmFsTm9kZSA9IG5ldyBFcHNpbG9uVGVybWluYWxOb2RlKCk7XG5cbiAgICByZXR1cm4gZXBzaWxvblRlcm1pbmFsTm9kZTtcbiAgfVxuICBcbiAgdG9TdHJpbmcoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gJ861JztcbiAgICBcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSkge1xuICAgIGxldCAgZXBzaWxvblBhcnQgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IGZvdW5kID0gKHN5bWJvbCA9PT0gJ861Jyk7XG4gICAgXG4gICAgaWYgKGZvdW5kKSB7XG4gICAgICBlcHNpbG9uUGFydCA9IG5ldyBFcHNpbG9uUGFydCgpO1xuICAgIH1cblxuICAgIHJldHVybiBlcHNpbG9uUGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVwc2lsb25QYXJ0OyIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgU2VxdWVuY2VPZlBhcnRzUGFydCA9IHJlcXVpcmUoJy4vc2VxdWVuY2VPZlBhcnRzJyksXG4gICAgICBaZXJvT3JNb3JlUGFydHNQYXJ0ID0gcmVxdWlyZSgnLi96ZXJvT3JNb3JlUGFydHMnKTtcblxuY2xhc3MgT25lT3JNb3JlUGFydHNQYXJ0IGV4dGVuZHMgU2VxdWVuY2VPZlBhcnRzUGFydCB7XG4gIHBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSkge1xuICAgIG5vV2hpdGVzcGFjZSA9IHRoaXMuZ2V0Tm9XaGl0ZXNwYWNlKCk7ICAvLy9cblxuICAgIGxldCBub2RlcyA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgcHJvZHVjdGlvbnMgPSBjb250ZXh0LmdldFByb2R1Y3Rpb25zKCksXG4gICAgICAgICAgdGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uID0gdGhpcy5nZXRUZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24ocHJvZHVjdGlvbnMpO1xuXG4gICAgaWYgKHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uTm9kZU9yTm9kZXMgPSB0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24ucGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICAgIHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvblBhcnNlZCA9ICh0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb25Ob2RlT3JOb2RlcyAhPT0gbnVsbCk7XG5cbiAgICAgIGlmICh0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb25QYXJzZWQpIHtcbiAgICAgICAgbm9kZXMgPSAodGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uTm9kZU9yTm9kZXMgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgICAgICAgdGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uTm9kZU9yTm9kZXMgOlxuICAgICAgICAgICAgICAgICAgICBbdGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uTm9kZU9yTm9kZXNdO1xuXG4gICAgICAgIGNvbnN0IHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBaZXJvT3JNb3JlUGFydHNQYXJ0LmZyb21PbmVPck1vcmVQYXJ0c1BhcnQodGhpcyksIC8vL1xuICAgICAgICAgICAgICB6ZXJvT3JNb3JlUGFydHNQYXJ0Tm9kZU9yTm9kZXMgPSB6ZXJvT3JNb3JlUGFydHNQYXJ0LnBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSk7XG5cbiAgICAgICAgbm9kZXMgPSBub2Rlcy5jb25jYXQoemVyb09yTW9yZVBhcnRzUGFydE5vZGVPck5vZGVzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICBjb25zdCBvcGVyYXRvclN0cmluZyA9ICcrJyxcbiAgICAgICAgICBzdHJpbmcgPSBzdXBlci50b1N0cmluZyhvcGVyYXRvclN0cmluZyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSkge1xuICAgIGNvbnN0IHJlZ0V4cCA9IC8oW14qXSspXFwrJC8sXG4gICAgICAgICAgQ2xhc3MgPSBPbmVPck1vcmVQYXJ0c1BhcnQsXG4gICAgICAgICAgb25lT3JNb3JlUGFydHNQYXJ0ID0gc3VwZXIuZnJvbVN5bWJvbChzeW1ib2wsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlLCByZWdFeHAsIENsYXNzKTtcblxuICAgIHJldHVybiBvbmVPck1vcmVQYXJ0c1BhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPbmVPck1vcmVQYXJ0c1BhcnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSByZXF1aXJlKCcuL3NlcXVlbmNlT2ZQYXJ0cycpO1xuXG5jbGFzcyBPcHRpb25hbFBhcnRQYXJ0IGV4dGVuZHMgU2VxdWVuY2VPZlBhcnRzUGFydCB7XG4gIHBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSkge1xuICAgIG5vV2hpdGVzcGFjZSA9IHRoaXMuZ2V0Tm9XaGl0ZXNwYWNlKCk7ICAvLy9cblxuICAgIGxldCBub2RlcyA9IFtdO1xuICAgIFxuICAgIGNvbnN0IHByb2R1Y3Rpb25zID0gY29udGV4dC5nZXRQcm9kdWN0aW9ucygpLFxuICAgICAgICAgIHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbiA9IHRoaXMuZ2V0VGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uKHByb2R1Y3Rpb25zKTtcbiAgICBcbiAgICBpZiAodGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb25Ob2RlT3JOb2RlcyA9IHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbi5wYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgICAgdGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uUGFyc2VkID0gKHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbk5vZGVPck5vZGVzICE9PSBudWxsKTtcblxuICAgICAgaWYgKHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvblBhcnNlZCkge1xuICAgICAgICBub2RlcyA9IHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbk5vZGVPck5vZGVzO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIGNvbnN0IG9wZXJhdG9yU3RyaW5nID0gJz8nLFxuICAgICAgICAgIHN0cmluZyA9IHN1cGVyLnRvU3RyaW5nKG9wZXJhdG9yU3RyaW5nKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN5bWJvbChzeW1ib2wsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlKSB7XG4gICAgY29uc3QgcmVnRXhwID0gLyhbXipdKylcXD8kLyxcbiAgICAgICAgICBDbGFzcyA9IE9wdGlvbmFsUGFydFBhcnQsXG4gICAgICAgICAgb3B0aW9uYWxQYXJ0UGFydCA9IHN1cGVyLmZyb21TeW1ib2woc3ltYm9sLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSwgcmVnRXhwLCBDbGFzcyk7XG5cbiAgICByZXR1cm4gb3B0aW9uYWxQYXJ0UGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9wdGlvbmFsUGFydFBhcnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBhcnNlclV0aWwgPSByZXF1aXJlKCcuLi8uLi91dGlsL3BhcnNlcicpO1xuXG5jbGFzcyBQcm9kdWN0aW9uTmFtZVBhcnQge1xuICBjb25zdHJ1Y3Rvcihwcm9kdWN0aW9uTmFtZSwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgdGhpcy5wcm9kdWN0aW9uTmFtZSA9IHByb2R1Y3Rpb25OYW1lO1xuICAgIHRoaXMubm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlO1xuICB9XG4gIFxuICBnZXRQcm9kdWN0aW9uTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9kdWN0aW9uTmFtZTtcbiAgfVxuICBcbiAgaXNMZWZ0UmVjdXJzaXZlKHByb2R1Y3Rpb25OYW1lKSB7XG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZSA9ICh0aGlzLnByb2R1Y3Rpb25OYW1lID09PSBwcm9kdWN0aW9uTmFtZSk7XG4gICAgXG4gICAgcmV0dXJuIGxlZnRSZWN1cnNpdmU7XG4gIH1cbiAgXG4gIHBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSkge1xuICAgIG5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZSB8fCB0aGlzLm5vV2hpdGVzcGFjZTsgLy8vXG5cbiAgICBsZXQgbm9kZU9yTm9kZXMgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHByb2R1Y3Rpb25zID0gY29udGV4dC5nZXRQcm9kdWN0aW9ucygpLFxuICAgICAgICAgIHByb2R1Y3Rpb24gPSBwYXJzZXJVdGlsLmZpbmRQcm9kdWN0aW9uKHRoaXMucHJvZHVjdGlvbk5hbWUsIHByb2R1Y3Rpb25zKTtcblxuICAgIGlmIChwcm9kdWN0aW9uICE9PSBudWxsKSB7XG4gICAgICBub2RlT3JOb2RlcyA9IHByb2R1Y3Rpb24ucGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZU9yTm9kZXM7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLnByb2R1Y3Rpb25OYW1lO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ltYm9sKHN5bWJvbCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpIHtcbiAgICBjb25zdCBwcm9kdWN0aW9uTmFtZSA9IHN5bWJvbCwgIC8vL1xuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUGFydCA9IG5ldyBQcm9kdWN0aW9uTmFtZVBhcnQocHJvZHVjdGlvbk5hbWUsIG5vV2hpdGVzcGFjZSk7XG4gIFxuICAgIHJldHVybiBwcm9kdWN0aW9uTmFtZVBhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9kdWN0aW9uTmFtZVBhcnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy9ub2RlL3Rlcm1pbmFsJyk7XG5cbmNsYXNzIFJlZ3VsYXJFeHByZXNzaW9uUGFydCB7XG4gIGNvbnN0cnVjdG9yKHJlZ0V4cCwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgdGhpcy5yZWdFeHAgPSByZWdFeHA7XG4gICAgdGhpcy5ub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2U7XG4gIH1cbiAgXG4gIHBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSkge1xuICAgIG5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZSB8fCB0aGlzLm5vV2hpdGVzcGFjZTsgLy8vXG5cbiAgICBsZXQgdGVybWluYWxOb2RlID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBzYXZlZEluZGV4ID0gY29udGV4dC5zYXZlZEluZGV4KCksXG4gICAgICAgICAgbmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuID0gY29udGV4dC5nZXROZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4obm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuID0gbmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuOyAvLy9cblxuICAgIGlmIChzaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRDb250ZW50KCksXG4gICAgICAgICAgICBtYXRjaGVzID0gY29udGVudC5tYXRjaCh0aGlzLnJlZ0V4cCk7XG5cbiAgICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKSxcbiAgICAgICAgICAgICAgcGFyc2VkID0gKGZpcnN0TWF0Y2ggPT09IGNvbnRlbnQpO1xuXG4gICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICB0ZXJtaW5hbE5vZGUgPSBUZXJtaW5hbE5vZGUuZnJvbVNpZ25pZmljYW50VG9rZW4oc2lnbmlmaWNhbnRUb2tlbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaWYgKHRlcm1pbmFsTm9kZSA9PT0gbnVsbCkge1xuICAgICAgY29udGV4dC5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIGNvbnN0IHJlZ0V4cFN0cmluZyA9IHRoaXMucmVnRXhwLnRvU3RyaW5nKCksXG4gICAgICAgICAgc3RyaW5nID0gcmVnRXhwU3RyaW5nOyAgLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN5bWJvbChzeW1ib2wsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbGV0IHJlZ3VsYXJFeHByZXNzaW9uUGFydCA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgcmVndWxhckV4cHJlc3Npb25QYXJ0UmVnRXhwID0gL15cXC8oW14vXSspXFwvJC8sXG4gICAgICAgICAgbWF0Y2hlcyA9IHN5bWJvbC5tYXRjaChyZWd1bGFyRXhwcmVzc2lvblBhcnRSZWdFeHApO1xuXG4gICAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICAgICAgcGF0dGVybiA9IHNlY29uZE1hdGNoLCAgLy8vXG4gICAgICAgICAgICByZWdFeHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pO1xuXG4gICAgICByZWd1bGFyRXhwcmVzc2lvblBhcnQgPSBuZXcgUmVndWxhckV4cHJlc3Npb25QYXJ0KHJlZ0V4cCwgbm9XaGl0ZXNwYWNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVndWxhckV4cHJlc3Npb25QYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVndWxhckV4cHJlc3Npb25QYXJ0O1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbmZ1bmN0aW9uIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRW5kT2ZMaW5lUGFydCA9IHJlcXVpcmUoJy4vZW5kT2ZMaW5lJyksXG4gICAgICBwYXJzZXJVdGlsID0gcmVxdWlyZSgnLi4vLi4vdXRpbC9wYXJzZXInKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUGFydCA9IHJlcXVpcmUoJy4vdGVybWluYWxTeW1ib2wnKSxcbiAgICAgIFNpZ25pZmljYW50VG9rZW5UeXBlUGFydCA9IHJlcXVpcmUoJy4vc2lnbmlmaWNhbnRUb2tlblR5cGUnKTtcblxuY2xhc3MgU2VxdWVuY2VPZlBhcnRzUGFydCB7XG4gIGNvbnN0cnVjdG9yKHRlcm1pbmFsUGFydCwgcHJvZHVjdGlvbk5hbWUsIG5vV2hpdGVzcGFjZSkge1xuICAgIHRoaXMudGVybWluYWxQYXJ0ID0gdGVybWluYWxQYXJ0O1xuICAgIHRoaXMucHJvZHVjdGlvbk5hbWUgPSBwcm9kdWN0aW9uTmFtZTtcbiAgICB0aGlzLm5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZTtcbiAgfVxuXG4gIGdldFRlcm1pbmFsUGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtaW5hbFBhcnQ7XG4gIH1cblxuICBnZXRQcm9kdWN0aW9uTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9kdWN0aW9uTmFtZTtcbiAgfVxuICBcbiAgZ2V0Tm9XaGl0ZXNwYWNlKCkge1xuICAgIHJldHVybiB0aGlzLm5vV2hpdGVzcGFjZTtcbiAgfVxuXG4gIGdldFRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbihwcm9kdWN0aW9ucykge1xuICAgIGNvbnN0IHByb2R1Y3Rpb24gPSBwYXJzZXJVdGlsLmZpbmRQcm9kdWN0aW9uKHRoaXMucHJvZHVjdGlvbk5hbWUsIHByb2R1Y3Rpb25zKSxcbiAgICAgICAgICB0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24gPSAodGhpcy50ZXJtaW5hbFBhcnQgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRlcm1pbmFsUGFydCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0aW9uO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbjtcbiAgfVxuXG4gIHRvU3RyaW5nKG9wZXJhdG9yU3RyaW5nKSB7XG4gICAgbGV0IHN0cmluZztcblxuICAgIGNvbnN0IHByb2R1Y3Rpb25OYW1lID0gdGhpcy5nZXRQcm9kdWN0aW9uTmFtZSgpO1xuXG4gICAgaWYgKHByb2R1Y3Rpb25OYW1lICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBgJHtwcm9kdWN0aW9uTmFtZX0ke29wZXJhdG9yU3RyaW5nfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsUGFydCA9IHRoaXMuZ2V0VGVybWluYWxQYXJ0KCksXG4gICAgICAgICAgdGVybWluYWxQYXJ0U3RyaW5nID0gdGVybWluYWxQYXJ0LnRvU3RyaW5nKCk7XG5cbiAgICAgIHN0cmluZyA9IGAke3Rlcm1pbmFsUGFydFN0cmluZ30ke29wZXJhdG9yU3RyaW5nfWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ltYm9sKHN5bWJvbCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UsIHJlZ0V4cCwgQ2xhc3MpIHtcbiAgICBsZXQgcGFydCA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgbWF0Y2hlcyA9IHN5bWJvbC5tYXRjaChyZWdFeHApO1xuXG4gICAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgICBzeW1ib2wgPSBzZWNvbmRNYXRjaDsgLy8vXG5cbiAgICAgIGNvbnN0IHRlcm1pbmFsUGFydCA9IFNpZ25pZmljYW50VG9rZW5UeXBlUGFydC5mcm9tU3ltYm9sKHN5bWJvbCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRlcm1pbmFsU3ltYm9sUGFydC5mcm9tU3ltYm9sKHN5bWJvbCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW5kT2ZMaW5lUGFydC5mcm9tU3ltYm9sKHN5bWJvbCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgICAgcHJvZHVjdGlvbk5hbWUgPSBzeW1ib2w7XG5cbiAgICAgIHBhcnQgPSBuZXcgQ2xhc3ModGVybWluYWxQYXJ0LCBwcm9kdWN0aW9uTmFtZSwgbm9XaGl0ZXNwYWNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNlcXVlbmNlT2ZQYXJ0c1BhcnQ7XG5cbmZ1bmN0aW9uIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vbm9kZS90ZXJtaW5hbCcpO1xuXG5jbGFzcyBTaWduaWZpY2FudFRva2VuVHlwZVBhcnQge1xuICBjb25zdHJ1Y3RvcihzaWduaWZpY2FudFRva2VuVHlwZSwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgdGhpcy5zaWduaWZpY2FudFRva2VuVHlwZSA9IHNpZ25pZmljYW50VG9rZW5UeXBlO1xuICAgIHRoaXMubm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlO1xuICB9XG4gIFxuICBwYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpIHtcbiAgICBub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2UgfHwgdGhpcy5ub1doaXRlc3BhY2U7IC8vL1xuICAgIFxuICAgIGxldCB0ZXJtaW5hbE5vZGUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBjb250ZXh0LnNhdmVkSW5kZXgoKSxcbiAgICAgICAgICBuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4gPSBjb250ZXh0LmdldE5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbihub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW47IC8vL1xuXG4gICAgaWYgKHNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW5UeXBlID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRUeXBlKCksXG4gICAgICAgICAgICBwYXJzZWQgPSAoc2lnbmlmaWNhbnRUb2tlblR5cGUgPT09IHRoaXMuc2lnbmlmaWNhbnRUb2tlblR5cGUpOyAgLy8vXG5cbiAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgdGVybWluYWxOb2RlID0gVGVybWluYWxOb2RlLmZyb21TaWduaWZpY2FudFRva2VuKHNpZ25pZmljYW50VG9rZW4pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0ZXJtaW5hbE5vZGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGU7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBgWyR7dGhpcy5zaWduaWZpY2FudFRva2VuVHlwZX1dYDtcbiAgICBcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSkge1xuICAgIGxldCBzaWduaWZpY2FudFRva2VuVHlwZVBhcnQgPSBudWxsO1xuXG4gICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0UmVnRXhwID0gL15cXFsoW14vXSspXFxdJC8sXG4gICAgICAgIG1hdGNoZXMgPSBzeW1ib2wubWF0Y2goc2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0UmVnRXhwKTtcblxuICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICAgIHR5cGUgPSBzZWNvbmRNYXRjaCwgLy8vXG4gICAgICAgICAgICBmb3VuZFR5cGUgPSBzaWduaWZpY2FudFRva2VuVHlwZXMuZmluZChmdW5jdGlvbihzaWduaWZpY2FudFRva2VuVHlwZSkge1xuICAgICAgICAgICAgICBjb25zdCBmb3VuZCA9ICh0eXBlID09PSBzaWduaWZpY2FudFRva2VuVHlwZSk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGZvdW5kO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBmb3VuZCA9IChmb3VuZFR5cGUgIT09IHVuZGVmaW5lZCk7XG5cbiAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZVBhcnQgPSBuZXcgU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0KHR5cGUsIG5vV2hpdGVzcGFjZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW5UeXBlUGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNpZ25pZmljYW50VG9rZW5UeXBlUGFydDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vbm9kZS90ZXJtaW5hbCcpO1xuXG5jbGFzcyBUZXJtaW5hbFN5bWJvbFBhcnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZW50LCBub1doaXRlc3BhY2UpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgIHRoaXMubm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlO1xuICB9XG5cbiAgcGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlIHx8IHRoaXMubm9XaGl0ZXNwYWNlOyAvLy9cblxuICAgIGxldCB0ZXJtaW5hbE5vZGUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBjb250ZXh0LnNhdmVkSW5kZXgoKSxcbiAgICAgICAgbmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuID0gY29udGV4dC5nZXROZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4obm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IG5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbjsgLy8vXG5cbiAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29udGVudCA9IHNpZ25pZmljYW50VG9rZW4uZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgcGFyc2VkID0gKGNvbnRlbnQgPT09IHRoaXMuY29udGVudCk7XG5cbiAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgdGVybWluYWxOb2RlID0gVGVybWluYWxOb2RlLmZyb21TaWduaWZpY2FudFRva2VuKHNpZ25pZmljYW50VG9rZW4pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0ZXJtaW5hbE5vZGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGU7XG4gIH1cbiAgXG4gIHRvU3RyaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IGAnJHt0aGlzLmNvbnRlbnR9J2A7XG4gICAgXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ltYm9sKHN5bWJvbCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpIHtcbiAgICBsZXQgdGVybWluYWxTeW1ib2xQYXJ0ID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCB0ZXJtaW5hbFN5bWJvbFBhcnRSZWdFeHAgPSAvXicoW14nXSspJyQvLFxuICAgICAgICAgIG1hdGNoZXMgPSBzeW1ib2wubWF0Y2godGVybWluYWxTeW1ib2xQYXJ0UmVnRXhwKTtcblxuICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSwgICAgICBcbiAgICAgICAgICAgIGNvbnRlbnQgPSBzZWNvbmRNYXRjaDsgLy8vXG5cbiAgICAgIHRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQoY29udGVudCwgbm9XaGl0ZXNwYWNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybWluYWxTeW1ib2xQYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGVybWluYWxTeW1ib2xQYXJ0O1xuXG5mdW5jdGlvbiBzZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzFdOyB9XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvdGVybWluYWwnKTtcblxuY2xhc3MgV2lsZGNhcmRQYXJ0IHtcbiAgY29uc3RydWN0b3Iobm9XaGl0ZXNwYWNlKSB7XG4gICAgdGhpcy5ub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2U7XG4gIH1cblxuICBwYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpIHtcbiAgICBub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2UgfHwgdGhpcy5ub1doaXRlc3BhY2U7IC8vL1xuXG4gICAgbGV0IHRlcm1pbmFsTm9kZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IGNvbnRleHQuc2F2ZWRJbmRleCgpLFxuICAgICAgICAgIG5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbiA9IGNvbnRleHQuZ2V0TmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuKG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IG5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbjsgLy8vXG5cbiAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgdGVybWluYWxOb2RlID0gVGVybWluYWxOb2RlLmZyb21TaWduaWZpY2FudFRva2VuKHNpZ25pZmljYW50VG9rZW4pO1xuICAgIH1cblxuICAgIGlmICh0ZXJtaW5hbE5vZGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN5bWJvbChzeW1ib2wsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbGV0IHdpbGRjYXJkUGFydCA9IG51bGw7XG4gICAgXG4gICAgY29uc3Qgd2lsZGNhcmRQYXJ0UmVnRXhwID0gL15cXCokLyxcbiAgICAgICAgICBtYXRjaGVzID0gc3ltYm9sLm1hdGNoKHdpbGRjYXJkUGFydFJlZ0V4cCk7XG5cbiAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgd2lsZGNhcmRQYXJ0ID0gbmV3IFdpbGRjYXJkUGFydChub1doaXRlc3BhY2UpO1xuICAgIH1cblxuICAgIHJldHVybiB3aWxkY2FyZFBhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBXaWxkY2FyZFBhcnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSByZXF1aXJlKCcuL3NlcXVlbmNlT2ZQYXJ0cycpO1xuXG5jbGFzcyBaZXJvT3JNb3JlUGFydHNQYXJ0IGV4dGVuZHMgU2VxdWVuY2VPZlBhcnRzUGFydCB7XG4gIHRvU3RyaW5nKCkge1xuICAgIGNvbnN0IG9wZXJhdG9yU3RyaW5nID0gJyonLFxuICAgICAgICAgIHN0cmluZyA9IHN1cGVyLnRvU3RyaW5nKG9wZXJhdG9yU3RyaW5nKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBwYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpIHtcbiAgICBub1doaXRlc3BhY2UgPSB0aGlzLmdldE5vV2hpdGVzcGFjZSgpOyAgLy8vXG5cbiAgICBsZXQgbm9kZXMgPSBbXTtcbiAgICBcbiAgICBjb25zdCBwcm9kdWN0aW9ucyA9IGNvbnRleHQuZ2V0UHJvZHVjdGlvbnMoKSxcbiAgICAgICAgICB0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24gPSB0aGlzLmdldFRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbihwcm9kdWN0aW9ucyk7XG5cbiAgICBpZiAodGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uICE9PSBudWxsKSB7XG4gICAgICBmb3IoOzspIHtcbiAgICAgICAgY29uc3QgdGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uTm9kZU9yTm9kZXMgPSB0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24ucGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICAgICAgdGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uUGFyc2VkID0gKHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbk5vZGVPck5vZGVzICE9PSBudWxsKTtcblxuICAgICAgICBpZiAodGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uUGFyc2VkKSB7XG4gICAgICAgICAgbm9kZXMgPSBub2Rlcy5jb25jYXQodGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uTm9kZU9yTm9kZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVN5bWJvbChzeW1ib2wsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlKSB7XG4gICAgY29uc3QgcmVnRXhwID0gLyhbXipdKylcXCokLyxcbiAgICAgICAgICBDbGFzcyA9IFplcm9Pck1vcmVQYXJ0c1BhcnQsXG4gICAgICAgICAgemVyb09yTW9yZVBhcnRzUGFydCA9IHN1cGVyLmZyb21TeW1ib2woc3ltYm9sLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSwgcmVnRXhwLCBDbGFzcyk7XG5cbiAgICByZXR1cm4gemVyb09yTW9yZVBhcnRzUGFydDtcbiAgfVxuXG5cbiAgc3RhdGljIGZyb21PbmVPck1vcmVQYXJ0c1BhcnQob25lT3JNb3JlUGFydHNQYXJ0KSB7XG4gICAgY29uc3QgdGVybWluYWxQYXJ0ID0gb25lT3JNb3JlUGFydHNQYXJ0LmdldFRlcm1pbmFsUGFydCgpLFxuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lID0gb25lT3JNb3JlUGFydHNQYXJ0LmdldFByb2R1Y3Rpb25OYW1lKCksXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlID0gb25lT3JNb3JlUGFydHNQYXJ0LmdldE5vV2hpdGVzcGFjZSgpLFxuICAgICAgICAgIHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBuZXcgWmVyb09yTW9yZVBhcnRzUGFydCh0ZXJtaW5hbFBhcnQsIHByb2R1Y3Rpb25OYW1lLCBub1doaXRlc3BhY2UpO1xuXG4gICAgcmV0dXJuIHplcm9Pck1vcmVQYXJ0c1BhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBaZXJvT3JNb3JlUGFydHNQYXJ0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFcHNpbG9uUGFydCA9IHJlcXVpcmUoJy4vcGFydC9lcHNpbG9uJyksXG4gICAgICBXaWxkY2FyZFBhcnQgPSByZXF1aXJlKCcuL3BhcnQvd2lsZGNhcmQnKSxcbiAgICAgIEVuZE9mTGluZVBhcnQgPSByZXF1aXJlKCcuL3BhcnQvZW5kT2ZMaW5lJyksXG4gICAgICBPcHRpb25hbFBhcnRQYXJ0ID0gcmVxdWlyZSgnLi9wYXJ0L29wdGlvbmFsUGFydCcpLFxuICAgICAgUHJvZHVjdGlvbk5hbWVQYXJ0ID0gcmVxdWlyZSgnLi9wYXJ0L3Byb2R1Y3Rpb25OYW1lJyksXG4gICAgICBUZXJtaW5hbFN5bWJvbFBhcnQgPSByZXF1aXJlKCcuL3BhcnQvdGVybWluYWxTeW1ib2wnKSxcbiAgICAgIE9uZU9yTW9yZVBhcnRzUGFydCA9IHJlcXVpcmUoJy4vcGFydC9vbmVPck1vcmVQYXJ0cycpLFxuICAgICAgWmVyb09yTW9yZVBhcnRzUGFydCA9IHJlcXVpcmUoJy4vcGFydC96ZXJvT3JNb3JlUGFydHMnKSxcbiAgICAgIFJlZ3VsYXJFeHByZXNzaW9uUGFydCA9IHJlcXVpcmUoJy4vcGFydC9yZWd1bGFyRXhwcmVzc2lvbicpLFxuICAgICAgU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0ID0gcmVxdWlyZSgnLi9wYXJ0L3NpZ25pZmljYW50VG9rZW5UeXBlJyk7XG5cbmNvbnN0IFBhcnRzID0gW1xuICBFcHNpbG9uUGFydCxcbiAgV2lsZGNhcmRQYXJ0LFxuICBFbmRPZkxpbmVQYXJ0LFxuICBSZWd1bGFyRXhwcmVzc2lvblBhcnQsXG4gIFNpZ25pZmljYW50VG9rZW5UeXBlUGFydCxcbiAgVGVybWluYWxTeW1ib2xQYXJ0LFxuICBPcHRpb25hbFBhcnRQYXJ0LFxuICBPbmVPck1vcmVQYXJ0c1BhcnQsXG4gIFplcm9Pck1vcmVQYXJ0c1BhcnQsXG4gIFByb2R1Y3Rpb25OYW1lUGFydFxuXTtcblxubW9kdWxlLmV4cG9ydHMgPSBQYXJ0cztcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4vcnVsZScpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIFByb2R1Y3Rpb24ge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBydWxlcywgTm9kZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xuICAgIHRoaXMuTm9kZSA9IE5vZGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cbiAgXG4gIGdldFJ1bGVzKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVzO1xuICB9XG4gIFxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLk5vZGU7XG4gIH1cblxuICBpc0ZvdW5kQnlQcm9kdWN0aW9uTmFtZShwcm9kdWN0aW9uTmFtZSkge1xuICAgIGNvbnN0IGZvdW5kID0gKHRoaXMubmFtZSA9PT0gcHJvZHVjdGlvbk5hbWUpO1xuICAgIFxuICAgIHJldHVybiBmb3VuZDtcbiAgfVxuICBcbiAgaXNMZWZ0UmVjdXJzaXZlKCkge1xuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlcyA9IHRoaXMuZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVzKCksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVzTGVuZ3RoID0gbGVmdFJlY3Vyc2l2ZVJ1bGVzLmxlbmd0aCxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlID0gKGxlZnRSZWN1cnNpdmVSdWxlc0xlbmd0aCA+IDApO1xuICAgIFxuICAgIHJldHVybiBsZWZ0UmVjdXJzaXZlO1xuICB9XG4gIFxuICBpc0ltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlKHByZXZpb3VzUHJvZHVjdGlvbnMpIHtcbiAgICBjb25zdCBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZSA9IHRoaXMucnVsZXMuc29tZShmdW5jdGlvbihydWxlKSB7XG4gICAgICBjb25zdCBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZSA9IHJ1bGUuaXNJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZShwcmV2aW91c1Byb2R1Y3Rpb25zKTtcbiAgICAgIFxuICAgICAgcmV0dXJuIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlO1xuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZTtcbiAgfVxuICBcbiAgZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVzKCkge1xuICAgIGNvbnN0IHByb2R1Y3Rpb25OYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZXMgPSB0aGlzLnJ1bGVzLmZpbHRlcihmdW5jdGlvbihydWxlKSB7XG4gICAgICAgICAgICBjb25zdCBydWxlTGVmdFJlY3Vyc2l2ZSA9IHJ1bGUuaXNMZWZ0UmVjdXJzaXZlKHByb2R1Y3Rpb25OYW1lKTtcbiAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHJ1bGVMZWZ0UmVjdXJzaXZlO1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGxlZnRSZWN1cnNpdmVSdWxlcztcbiAgfVxuXG4gIGdldE5vbkxlZnRSZWN1cnNpdmVSdWxlcygpIHtcbiAgICBjb25zdCBwcm9kdWN0aW9uTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgbGVmdE5vblJlY3Vyc2l2ZVJ1bGVzID0gdGhpcy5ydWxlcy5maWx0ZXIoZnVuY3Rpb24ocnVsZSkge1xuICAgICAgICAgICAgY29uc3QgcnVsZUxlZnRSZWN1cnNpdmUgPSBydWxlLmlzTGVmdFJlY3Vyc2l2ZShwcm9kdWN0aW9uTmFtZSksXG4gICAgICAgICAgICAgICAgICBydWxlTm9uTGVmdFJlY3Vyc2l2ZSA9ICFydWxlTGVmdFJlY3Vyc2l2ZTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gcnVsZU5vbkxlZnRSZWN1cnNpdmU7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gbGVmdE5vblJlY3Vyc2l2ZVJ1bGVzO1xuICB9XG4gIFxuICBjb25jYXRSdWxlcyhydWxlcykge1xuICAgIHRoaXMucnVsZXMgPSB0aGlzLnJ1bGVzLmNvbmNhdChydWxlcyk7XG4gIH1cbiAgXG4gIHRvU3RyaW5nKG1heGltdW1Qcm9kdWN0aW9uTmFtZUxlbmd0aCkge1xuICAgIGNvbnN0IHJ1bGVzU3RyaW5nID0gdGhpcy5ydWxlcy5yZWR1Y2UoZnVuY3Rpb24ocnVsZXNTdHJpbmcsIHJ1bGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVTdHJpbmcgPSBydWxlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChydWxlc1N0cmluZyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICBydWxlc1N0cmluZyA9IHJ1bGVTdHJpbmc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBydWxlc1N0cmluZyA9IGAke3J1bGVzU3RyaW5nfSB8ICR7cnVsZVN0cmluZ31gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gcnVsZXNTdHJpbmc7XG4gICAgICAgICAgfSwgbnVsbCksXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWVMZW5ndGggPSB0aGlzLm5hbWUubGVuZ3RoLCAgLy8vXG4gICAgICAgICAgcGFkZGluZ0xlbmd0aCA9IG1heGltdW1Qcm9kdWN0aW9uTmFtZUxlbmd0aCAtIHByb2R1Y3Rpb25OYW1lTGVuZ3RoLFxuICAgICAgICAgIHBhZGRpbmcgPSBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgocGFkZGluZ0xlbmd0aCksXG4gICAgICAgICAgc3RyaW5nID0gYFxcbiAgJHt0aGlzLm5hbWV9JHtwYWRkaW5nfSA6Oj0gJHtydWxlc1N0cmluZ31cXG5gO1xuICAgIFxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbiAgXG4gIHBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSkge1xuICAgIGxldCBub2RlT3JOb2RlcyA9IG51bGw7XG5cbiAgICBjb250ZXh0LmluY3JlYXNlRGVwdGgoKTtcblxuICAgIGNvbnN0IHRvb0RlZXAgPSBjb250ZXh0LmlzVG9vRGVlcCgpO1xuXG4gICAgaWYgKHRvb0RlZXApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHBhcnNlIHRyZWUgaXMgdG9vIGRlZXAgYXQgcHJvZHVjdGlvbiAnJHt0aGlzLm5hbWV9J2ApO1xuICAgIH1cblxuICAgIGxldCBydWxlTm9kZXMgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHNvbWVSdWxlUGFyc2VkID0gdGhpcy5ydWxlcy5zb21lKGZ1bmN0aW9uKHJ1bGUpIHtcbiAgICAgICAgICAgIHJ1bGVOb2RlcyA9IHJ1bGUucGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKTtcbiAgXG4gICAgICAgICAgICBjb25zdCBydWxlUGFyc2VkID0gKHJ1bGVOb2RlcyAhPT0gbnVsbCk7XG4gIFxuICAgICAgICAgICAgcmV0dXJuIHJ1bGVQYXJzZWQ7XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoc29tZVJ1bGVQYXJzZWQpIHtcbiAgICAgIGNvbnN0IHJ1bGVOb2Rlc0xlbmd0aCA9IHJ1bGVOb2Rlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChydWxlTm9kZXNMZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IG5vZGVzID0gcnVsZU5vZGVzLCAgLy8vXG4gICAgICAgICAgICAgIHByb2R1Y3Rpb25OYW1lID0gdGhpcy5uYW1lOyAvLy9cblxuICAgICAgICBub2RlT3JOb2RlcyA9IHRoaXMuTm9kZS5mcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUpOyAgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWNyZWFzZURlcHRoKCk7XG5cbiAgICByZXR1cm4gbm9kZU9yTm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxpbmUobGluZSwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBtYXBwaW5ncykge1xuICAgIGNvbnN0IG5hbWUgPSBsaW5lLmdldE5hbWUoKSxcbiAgICAgICAgICBydWxlcyA9IGxpbmUubWFwU3ltYm9sU2VxdWVuY2VzKGZ1bmN0aW9uKHN5bWJvbFNlcXVlbmNlKSB7XG4gICAgICAgICAgICBjb25zdCBydWxlID0gUnVsZS5mcm9tU3ltYm9sU2VxdWVuY2Uoc3ltYm9sU2VxdWVuY2UsIHNpZ25pZmljYW50VG9rZW5UeXBlcyk7XG4gIFxuICAgICAgICAgICAgcmV0dXJuIHJ1bGU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgTm9kZSA9IG1hcHBpbmdzLmhhc093blByb3BlcnR5KG5hbWUpID9cbiAgICAgICAgICAgICAgICAgICBtYXBwaW5nc1tuYW1lXSA6XG4gICAgICAgICAgICAgICAgICAgICBOb25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgIHByb2R1Y3Rpb24gPSBuZXcgUHJvZHVjdGlvbihuYW1lLCBydWxlcywgTm9kZSk7XG5cbiAgICByZXR1cm4gcHJvZHVjdGlvbjtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Qcm9kdWN0aW9uKHByb2R1Y3Rpb24pIHtcbiAgICBjb25zdCBuYW1lID0gcHJvZHVjdGlvbi5nZXROYW1lKCksXG4gICAgICAgICAgcnVsZXMgPSBwcm9kdWN0aW9uLmdldFJ1bGVzKCksXG4gICAgICAgICAgTm9kZSA9IHByb2R1Y3Rpb24uZ2V0Tm9kZSgpO1xuICAgIFxuICAgIHByb2R1Y3Rpb24gPSBuZXcgUHJvZHVjdGlvbihuYW1lLCBydWxlcywgTm9kZSk7IC8vL1xuICAgIFxuICAgIHJldHVybiBwcm9kdWN0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvZHVjdGlvbjtcblxuZnVuY3Rpb24gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKHBhZGRpbmdMZW5ndGgpIHtcbiAgbGV0IHBhZGRpbmcgPSAnJztcbiAgXG4gIGZvciAobGV0IHBvc2l0aW9uID0gMDsgcG9zaXRpb24gPCBwYWRkaW5nTGVuZ3RoOyBwb3NpdGlvbisrKSB7XG4gICAgcGFkZGluZyArPSAnICc7XG4gIH1cbiAgXG4gIHJldHVybiBwYWRkaW5nO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgUGFydHMgPSByZXF1aXJlKCcuL3BhcnRzJyk7XG5cbmNvbnN0IHsgc3BlY2lhbFN5bWJvbHMgfSA9IGxleGVycztcblxuY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzKSB7XG4gICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xuICB9XG5cbiAgZ2V0UGFydHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFydHM7XG4gIH1cbiAgXG4gIGdldEZpcnN0UGFydCgpIHtcbiAgICBjb25zdCBmaXJzdFBhcnQgPSBmaXJzdCh0aGlzLnBhcnRzKTtcblxuICAgIHJldHVybiBmaXJzdFBhcnQ7XG4gIH1cblxuICBnZXRQYXJ0c0xlbmd0aCgpIHtcbiAgICBjb25zdCBwYXJ0c0xlbmd0aCA9IHRoaXMucGFydHMubGVuZ3RoO1xuXG4gICAgcmV0dXJuIHBhcnRzTGVuZ3RoO1xuICB9XG5cbiAgZ2V0QWxsQnV0Rmlyc3RQYXJ0cygpIHtcbiAgICBjb25zdCBhbGxCdXRGaXJzdFBhcnRzID0gdGhpcy5wYXJ0cy5zbGljZSgxKTtcblxuICAgIHJldHVybiBhbGxCdXRGaXJzdFBhcnRzO1xuICB9XG4gIFxuICBpc0xlZnRSZWN1cnNpdmUocHJvZHVjdGlvbk5hbWUpIHtcbiAgICBsZXQgbGVmdFJlY3Vyc2l2ZSA9IGZhbHNlO1xuICAgIFxuICAgIGNvbnN0IGZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0ID0gdGhpcy5nZXRGaXJzdFByb2R1Y3Rpb25OYW1lUGFydCgpOyAgICBcbiAgICBcbiAgICBpZiAoZmlyc3RQcm9kdWN0aW9uTmFtZVBhcnQgIT09IG51bGwpIHtcbiAgICAgIGxlZnRSZWN1cnNpdmUgPSBmaXJzdFByb2R1Y3Rpb25OYW1lUGFydC5pc0xlZnRSZWN1cnNpdmUocHJvZHVjdGlvbk5hbWUpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gbGVmdFJlY3Vyc2l2ZTtcbiAgfVxuXG4gIGlzSW1wbGljaXRseUxlZnRSZWN1cnNpdmUocHJldmlvdXNQcm9kdWN0aW9ucykge1xuICAgIGNvbnN0IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUHJldmlvdXNQcm9kdWN0aW9uID0gdGhpcy5pbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVByZXZpb3VzUHJvZHVjdGlvbihwcmV2aW91c1Byb2R1Y3Rpb25zKSxcbiAgICAgICAgICBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZSA9IChpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVByZXZpb3VzUHJvZHVjdGlvbiAhPT0gbnVsbCk7XG4gICAgXG4gICAgcmV0dXJuIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlO1xuICB9XG5cbiAgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVQcmV2aW91c1Byb2R1Y3Rpb24ocHJldmlvdXNQcm9kdWN0aW9ucykge1xuICAgIGxldCBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVByZXZpb3VzUHJvZHVjdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBmaXJzdFByb2R1Y3Rpb25OYW1lUGFydCA9IHRoaXMuZ2V0Rmlyc3RQcm9kdWN0aW9uTmFtZVBhcnQoKTtcblxuICAgIGlmIChmaXJzdFByb2R1Y3Rpb25OYW1lUGFydCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZmlyc3RQcm9kdWN0aW9uTmFtZVBhcnRQcm9kdWN0aW9uTmFtZSA9IGZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0LmdldFByb2R1Y3Rpb25OYW1lKCksXG4gICAgICAgICAgICBmaXJzdFByb2R1Y3Rpb25OYW1lID0gZmlyc3RQcm9kdWN0aW9uTmFtZVBhcnRQcm9kdWN0aW9uTmFtZTsgIC8vL1xuXG4gICAgICBwcmV2aW91c1Byb2R1Y3Rpb25zLnNvbWUoZnVuY3Rpb24ocHJldmlvdXNQcm9kdWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzUHJvZHVjdGlvbk5hbWUgPSBwcmV2aW91c1Byb2R1Y3Rpb24uZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICBwcmV2aW91c1Byb2R1Y3Rpb25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZSA9IChwcmV2aW91c1Byb2R1Y3Rpb25OYW1lID09PSBmaXJzdFByb2R1Y3Rpb25OYW1lKTtcblxuICAgICAgICBpZiAocHJldmlvdXNQcm9kdWN0aW9uSW1wbGljaXRseUxlZnRSZWN1cnNpdmUpIHtcbiAgICAgICAgICBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVByZXZpb3VzUHJvZHVjdGlvbiA9IHByZXZpb3VzUHJvZHVjdGlvbjtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW1wbGljaXRseUxlZnRSZWN1cnNpdmVQcmV2aW91c1Byb2R1Y3Rpb247XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICBjb25zdCBwYXJ0c1N0cmluZyA9IHRoaXMucGFydHMucmVkdWNlKGZ1bmN0aW9uKHBhcnRzU3RyaW5nLCBwYXJ0KSB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0U3RyaW5nID0gcGFydC50b1N0cmluZygpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAocGFydHNTdHJpbmcgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBwYXJ0U3RyaW5nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBgJHtwYXJ0c1N0cmluZ30gJHtwYXJ0U3RyaW5nfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBwYXJ0c1N0cmluZztcbiAgICAgICAgICB9LCBudWxsKSxcbiAgICAgICAgICBzdHJpbmcgPSBwYXJ0c1N0cmluZzsgLy8vXG4gICAgXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSkge1xuICAgIGxldCBub2RlcyA9IFtdO1xuICAgIFxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBjb250ZXh0LnNhdmVkSW5kZXgoKSxcbiAgICAgICAgICBldmVyeVBhcnRQYXJzZWQgPSB0aGlzLnBhcnRzLmV2ZXJ5KGZ1bmN0aW9uKHBhcnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnROb2RlT3JOb2RlcyA9IHBhcnQucGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICAgICAgICAgIHBhcnRQYXJzZWQgPSAocGFydE5vZGVPck5vZGVzICE9PSBudWxsKTtcbiAgXG4gICAgICAgICAgICBpZiAocGFydFBhcnNlZCkge1xuICAgICAgICAgICAgICBub2RlcyA9IG5vZGVzLmNvbmNhdChwYXJ0Tm9kZU9yTm9kZXMpO1xuICBcbiAgICAgICAgICAgICAgbm9XaGl0ZXNwYWNlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgcmV0dXJuIHBhcnRQYXJzZWQ7XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoIWV2ZXJ5UGFydFBhcnNlZCkge1xuICAgICAgY29udGV4dC5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG5cbiAgICAgIG5vZGVzID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN5bWJvbFNlcXVlbmNlKHN5bWJvbFNlcXVlbmNlLCBzaWduaWZpY2FudFRva2VuVHlwZXMpIHtcbiAgICBsZXQgbm9XaGl0ZXNwYWNlID0gZmFsc2U7XG4gICAgXG4gICAgY29uc3QgcGFydHMgPSBzeW1ib2xTZXF1ZW5jZS5yZWR1Y2VTeW1ib2xzKGZ1bmN0aW9uKHBhcnRzLCBzeW1ib2wpIHtcbiAgICAgICAgICAgIGlmIChzeW1ib2wgPT09IHNwZWNpYWxTeW1ib2xzLk5PX1dISVRFU1BBQ0UpIHtcbiAgICAgICAgICAgICAgbm9XaGl0ZXNwYWNlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IHBhcnQgPSBwYXJ0RnJvbVN5bWJvbChzeW1ib2wsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlKTtcbiAgXG4gICAgICAgICAgICAgIHBhcnRzLnB1c2gocGFydCk7XG4gIFxuICAgICAgICAgICAgICBub1doaXRlc3BhY2UgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICByZXR1cm4gcGFydHM7XG4gICAgICAgICAgfSwgW10pLFxuICAgICAgICAgIHJ1bGUgPSBuZXcgUnVsZShwYXJ0cyk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGU7XG5cbmZ1bmN0aW9uIHBhcnRGcm9tU3ltYm9sKHN5bWJvbCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpIHtcbiAgbGV0IHBhcnQgPSB1bmRlZmluZWQ7IC8vL1xuXG4gIFBhcnRzLnNvbWUoZnVuY3Rpb24oUGFydCkge1xuICAgIHBhcnQgPSBQYXJ0LmZyb21TeW1ib2woc3ltYm9sLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSk7XG5cbiAgICBjb25zdCBwYXJzZWQgPSAocGFydCAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9KTtcblxuICByZXR1cm4gcGFydDtcbn1cblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5JyksXG4gICAgICBlYXN5bGF5b3V0ID0gcmVxdWlyZSgnZWFzeS1sYXlvdXQnKTtcblxuY29uc3QgeyBUZXh0YXJlYSB9ID0gZWFzeSxcbiAgICAgIHsgU2l6ZWFibGVFbGVtZW50LCBWZXJ0aWNhbFNwbGl0dGVyIH0gPSBlYXN5bGF5b3V0O1xuXG5jb25zdCBjb250ZW50VGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0YXJlYSNjb250ZW50JyxcbiAgICAgIHBhcnNlVHJlZVRleHRhcmVhU2VsZWN0b3IgPSAndGV4dGFyZWEjcGFyc2VUcmVlJyxcbiAgICAgIGJuZkdyYW1tYXJUZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI2JuZkdyYW1tYXInLFxuICAgICAgc2l6ZWFibGVFbGVtZW50U2VsZWN0b3IgPSAnI3NpemVhYmxlRWxlbWVudCcsXG4gICAgICB2ZXJ0aWNhbFNwbGl0dGVyU2VsZWN0b3IgPSAnI3ZlcnRpY2FsU3BsaXR0ZXInLFxuICAgICAgY29udGVudFRleHRhcmVhID0gbmV3IFRleHRhcmVhKGNvbnRlbnRUZXh0YXJlYVNlbGVjdG9yKSxcbiAgICAgIHBhcnNlVHJlZVRleHRhcmVhID0gbmV3IFRleHRhcmVhKHBhcnNlVHJlZVRleHRhcmVhU2VsZWN0b3IpLFxuICAgICAgYm5mR3JhbW1hclRleHRhcmVhID0gbmV3IFRleHRhcmVhKGJuZkdyYW1tYXJUZXh0YXJlYVNlbGVjdG9yKSxcbiAgICAgIHNpemVhYmxlRWxlbWVudCA9IG5ldyBTaXplYWJsZUVsZW1lbnQoc2l6ZWFibGVFbGVtZW50U2VsZWN0b3IpLFxuICAgICAgYmVmb3JlU2l6ZWFibGVFbGVtZW50ID0gZmFsc2UsXG4gICAgICBhZnRlclNpemVhYmxlRWxlbWVudCA9IHRydWU7XG5cbm5ldyBWZXJ0aWNhbFNwbGl0dGVyKHZlcnRpY2FsU3BsaXR0ZXJTZWxlY3RvciwgYmVmb3JlU2l6ZWFibGVFbGVtZW50LCBhZnRlclNpemVhYmxlRWxlbWVudCk7XG5cbmNsYXNzIEV4YW1wbGUge1xuICBzdGF0aWMgZ2V0Qk5GR3JhbW1hclRleHRhcmVhVmFsdWUoKSB7IHJldHVybiBibmZHcmFtbWFyVGV4dGFyZWEuZ2V0VmFsdWUoKTsgfVxuXG4gIHN0YXRpYyBzZXRCTkZHcmFtbWFyVGV4dGFyZWFWYWx1ZSh2YWx1ZSkgeyBibmZHcmFtbWFyVGV4dGFyZWEuc2V0VmFsdWUodmFsdWUpOyB9XG5cbiAgc3RhdGljIHNldENvbnRlbnRUZXh0YXJlYVZhbHVlKHZhbHVlKSB7IGNvbnRlbnRUZXh0YXJlYS5zZXRWYWx1ZSh2YWx1ZSk7IH1cblxuICBzdGF0aWMgb25CTkZHcmFtbWFyVGV4dGFyZWFLZXlVcChoYW5kbGVyKSB7IGJuZkdyYW1tYXJUZXh0YXJlYS5vbktleVVwKGhhbmRsZXIpOyB9XG5cbiAgc3RhdGljIG9uQ29udGVudFRleHRhcmVhS2V5VXAoaGFuZGxlcikgeyBjb250ZW50VGV4dGFyZWEub25LZXlVcChoYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyB1cGRhdGVQYXJzZVRyZWVUZXh0YXJlYShsZXhlciwgcGFyc2VyLCBwcm9kdWN0aW9uKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNvbnRlbnRUZXh0YXJlYVZhbHVlID0gY29udGVudFRleHRhcmVhLmdldFZhbHVlKCksXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudFRleHRhcmVhVmFsdWUsIC8vL1xuICAgICAgICAgICAgbGluZXMgPSBsZXhlci5saW5lc0Zyb21Db250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgICAgbm9kZSA9IHBhcnNlci5ub2RlRnJvbUxpbmVzKGxpbmVzLCBwcm9kdWN0aW9uKSxcbiAgICAgICAgICAgIGRvY3VtZW50Tm9kZSA9IG5vZGU7ICAvLy9cblxuICAgICAgaWYgKGRvY3VtZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBkb2N1bWVudCBjYW5ub3QgYmUgcGFyc2VkIGZvciBzb21lIHJlYXNvbi4nKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFyc2VUcmVlID0gZG9jdW1lbnROb2RlLnBhcnNlVHJlZShsaW5lcyk7XG5cbiAgICAgIHBhcnNlVHJlZS5zaGlmdExpbmUoKTsgIC8vXG5cbiAgICAgIGNvbnN0IHBhcnNlVHJlZVN0cmluZyA9IHBhcnNlVHJlZS50b1N0cmluZygpLFxuICAgICAgICAgICAgcGFyc2VUcmVlVGV4dGFyZWFIVE1MID0gcGFyc2VUcmVlU3RyaW5nOyAgLy8vXG5cbiAgICAgIHBhcnNlVHJlZVRleHRhcmVhLmh0bWwocGFyc2VUcmVlVGV4dGFyZWFIVE1MKTtcblxuICAgICAgY29udGVudFRleHRhcmVhLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb250ZW50VGV4dGFyZWEuYWRkQ2xhc3MoJ2Vycm9yJyk7XG5cbiAgICAgIEV4YW1wbGUuY2xlYXJQYXJzZVRyZWVUZXh0YXJlYSgpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBjbGVhclBhcnNlVHJlZVRleHRhcmVhKCkge1xuICAgIGNvbnN0IHBhcnNlVHJlZVRleHRhcmVhSFRNTCA9ICcnO1xuXG4gICAgcGFyc2VUcmVlVGV4dGFyZWEuaHRtbChwYXJzZVRyZWVUZXh0YXJlYUhUTUwpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXhhbXBsZTtcblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgQk5GRXhhbXBsZTogcmVxdWlyZSgnLi9leGFtcGxlcy9ibmYnKSxcbiAgQmFzaWNFeGFtcGxlOiByZXF1aXJlKCcuL2V4YW1wbGVzL2Jhc2ljJyksXG4gIEZsb3JlbmNlRXhhbXBsZTogcmVxdWlyZSgnLi9leGFtcGxlcy9mbG9yZW5jZScpXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpLFxuICAgICAgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IEV4YW1wbGUgPSByZXF1aXJlKCcuLi9leGFtcGxlJyksXG4gICAgICBncmFtbWFyID0gcmVxdWlyZSgnLi4vYmFzaWMvZ3JhbW1hcicpLFxuICAgICAgQmFzaWNQYXJzZXIgPSByZXF1aXJlKCcuLi9iYXNpYy9wYXJzZXInKTtcblxuY29uc3QgeyBUZXh0YXJlYSB9ID0gZWFzeSxcbiAgICAgIHsgQmFzaWNMZXhlciB9ID0gbGV4ZXJzO1xuXG5jb25zdCBsZXhpY2FsR3JhbW1hclRleHRhcmVhU2VsZWN0b3IgPSAndGV4dGFyZWEjbGV4aWNhbEdyYW1tYXInLFxuICAgICAgYWRqdXN0ZWRCTkZHcmFtbWFyVGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0YXJlYSNhZGp1c3RlZEJORkdyYW1tYXInLFxuICAgICAgbGV4aWNhbEdyYW1tYXIgPSBCYXNpY0xleGVyLmdyYW1tYXI7XG5cbmxldCBsZXhpY2FsR3JhbW1hclRleHRhcmVhLFxuICAgIGFkanVzdGVkQk5GR3JhbW1hclRleHRhcmVhLFxuICAgIGJhc2ljTGV4ZXIgPSBudWxsLFxuICAgIGJhc2ljUGFyc2VyID0gbnVsbDtcblxuY2xhc3MgQmFzaWNFeGFtcGxlIHtcbiAgc3RhdGljIHJ1bigpIHtcbiAgICBsZXhpY2FsR3JhbW1hclRleHRhcmVhID0gbmV3IFRleHRhcmVhKGxleGljYWxHcmFtbWFyVGV4dGFyZWFTZWxlY3Rvcik7XG4gICAgYWRqdXN0ZWRCTkZHcmFtbWFyVGV4dGFyZWEgPSBuZXcgVGV4dGFyZWEoYWRqdXN0ZWRCTkZHcmFtbWFyVGV4dGFyZWFTZWxlY3Rvcik7XG5cbiAgICBjb25zdCBibmZHcmFtbWFyVGV4dGFyZWFWYWx1ZSA9IGdyYW1tYXIsIC8vL1xuICAgICAgICAgIGxleGljYWxHcmFtbWFyVGV4dGFyZWFWYWx1ZSA9IEpTT04uc3RyaW5naWZ5KGxleGljYWxHcmFtbWFyLCBudWxsLCAnICAnKTsgLy8vXG5cbiAgICBsZXhpY2FsR3JhbW1hclRleHRhcmVhLnNldFZhbHVlKGxleGljYWxHcmFtbWFyVGV4dGFyZWFWYWx1ZSk7XG5cbiAgICBFeGFtcGxlLnNldEJORkdyYW1tYXJUZXh0YXJlYVZhbHVlKGJuZkdyYW1tYXJUZXh0YXJlYVZhbHVlKTtcblxuICAgIEV4YW1wbGUub25CTkZHcmFtbWFyVGV4dGFyZWFLZXlVcCh1cGRhdGUpO1xuXG4gICAgRXhhbXBsZS5vbkNvbnRlbnRUZXh0YXJlYUtleVVwKHVwZGF0ZSk7XG5cbiAgICBsZXhpY2FsR3JhbW1hclRleHRhcmVhLm9uS2V5VXAodXBkYXRlKTtcblxuICAgIHVwZGF0ZSgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgdXBkYXRlQmFzaWNMZXhlcigpO1xuXG4gIHVwZGF0ZUJhc2ljUGFyc2VyKCk7XG5cbiAgdXBkYXRlQWRqdXN0ZWRCTkZHcmFtbWFyKCk7XG5cbiAgaWYgKGJhc2ljTGV4ZXIgIT09IG51bGwpIHtcbiAgICBjb25zdCBwcm9kdWN0aW9uID0gbnVsbDsgIC8vL1xuXG4gICAgRXhhbXBsZS51cGRhdGVQYXJzZVRyZWVUZXh0YXJlYShiYXNpY0xleGVyLCBiYXNpY1BhcnNlciwgcHJvZHVjdGlvbik7XG4gIH0gZWxzZSB7XG4gICAgRXhhbXBsZS5jbGVhclBhcnNlVHJlZVRleHRhcmVhKCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCYXNpY0V4YW1wbGU7XG5cbmZ1bmN0aW9uIHVwZGF0ZUJhc2ljTGV4ZXIoKSB7XG4gIGNvbnN0IGxleGljYWxHcmFtbWFyVGV4dGFyZWFWYWx1ZSA9IGxleGljYWxHcmFtbWFyVGV4dGFyZWEuZ2V0VmFsdWUoKTtcblxuICBsZXQgbGV4aWNhbEdyYW1tYXIgPSBudWxsO1xuXG4gIHRyeSB7XG4gICAgbGV4aWNhbEdyYW1tYXIgPSBKU09OLnBhcnNlKGxleGljYWxHcmFtbWFyVGV4dGFyZWFWYWx1ZSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7fVxuXG4gIGNvbnN0IGxleGljYWxHcmFtbWFyVmFsaWQgPSAobGV4aWNhbEdyYW1tYXIgIT09IG51bGwpO1xuXG4gIGlmIChsZXhpY2FsR3JhbW1hclZhbGlkKSB7XG4gICAgYmFzaWNMZXhlciA9IEJhc2ljTGV4ZXIuZnJvbUdyYW1tYXIobGV4aWNhbEdyYW1tYXIpO1xuXG4gICAgbGV4aWNhbEdyYW1tYXJUZXh0YXJlYS5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgfSBlbHNlIHtcbiAgICBsZXhpY2FsR3JhbW1hclRleHRhcmVhLmFkZENsYXNzKCdlcnJvcicpO1xuXG4gICAgYmFzaWNMZXhlciA9IG51bGw7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlQmFzaWNQYXJzZXIoKSB7XG4gIGNvbnN0IGJuZkdyYW1tYXJUZXh0YXJlYVZhbHVlID0gRXhhbXBsZS5nZXRCTkZHcmFtbWFyVGV4dGFyZWFWYWx1ZSgpLFxuICAgICAgICBncmFtbWFyID0gYm5mR3JhbW1hclRleHRhcmVhVmFsdWU7IC8vL1xuXG4gIGJhc2ljUGFyc2VyID0gQmFzaWNQYXJzZXIuZnJvbUdyYW1tYXIoZ3JhbW1hcik7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUFkanVzdGVkQk5GR3JhbW1hcigpIHtcbiAgY29uc3QgcHJvZHVjdGlvbnMgPSBiYXNpY1BhcnNlci5nZXRQcm9kdWN0aW9ucygpLFxuICAgICAgICBtYXhpbXVtUHJvZHVjdGlvbk5hbWVMZW5ndGggPSBwcm9kdWN0aW9ucy5yZWR1Y2UoZnVuY3Rpb24obWF4aW11bVByb2R1Y3Rpb25OYW1lTGVuZ3RoLCBwcm9kdWN0aW9uKSB7XG4gICAgICAgICAgY29uc3QgcHJvZHVjdGlvbk5hbWUgPSBwcm9kdWN0aW9uLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICBwcm9kdWN0aW9uTmFtZUxlbmd0aCA9IHByb2R1Y3Rpb25OYW1lLmxlbmd0aDtcblxuICAgICAgICAgIG1heGltdW1Qcm9kdWN0aW9uTmFtZUxlbmd0aCA9IE1hdGgubWF4KG1heGltdW1Qcm9kdWN0aW9uTmFtZUxlbmd0aCwgcHJvZHVjdGlvbk5hbWVMZW5ndGgpO1xuXG4gICAgICAgICAgcmV0dXJuIG1heGltdW1Qcm9kdWN0aW9uTmFtZUxlbmd0aDtcbiAgICAgICAgfSwgMCksXG4gICAgICAgIGFkanVzdGVkQk5GR3JhbW1hclRleHRhcmVhVmFsdWUgPSBwcm9kdWN0aW9ucy5yZWR1Y2UoZnVuY3Rpb24oYWRqdXN0ZWRCTkZHcmFtbWFyVGV4dGFyZWEsIHByb2R1Y3Rpb24pIHtcbiAgICAgICAgICBjb25zdCBwcm9kdWN0aW9uU3RyaW5nID0gcHJvZHVjdGlvbi50b1N0cmluZyhtYXhpbXVtUHJvZHVjdGlvbk5hbWVMZW5ndGgpO1xuICAgICAgICAgIFxuICAgICAgICAgIGFkanVzdGVkQk5GR3JhbW1hclRleHRhcmVhICs9IHByb2R1Y3Rpb25TdHJpbmc7XG5cbiAgICAgICAgICByZXR1cm4gYWRqdXN0ZWRCTkZHcmFtbWFyVGV4dGFyZWE7XG4gICAgICAgIH0sIFtdKTtcblxuICBhZGp1c3RlZEJORkdyYW1tYXJUZXh0YXJlYS5zZXRWYWx1ZShhZGp1c3RlZEJORkdyYW1tYXJUZXh0YXJlYVZhbHVlKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKSxcbiAgICAgIGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBFeGFtcGxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZScpLFxuICAgICAgZ3JhbW1hciA9IHJlcXVpcmUoJy4uL2JuZi9ncmFtbWFyJyksXG4gICAgICBCTkZQYXJzZXIgPSByZXF1aXJlKCcuLi9ibmYvcGFyc2VyJyk7XG5cbmNvbnN0IHsgVGV4dGFyZWEgfSA9IGVhc3ksXG4gICAgICB7IEJORkxleGVyIH0gPSBsZXhlcnM7XG5cbmNvbnN0IGxleGljYWxHcmFtbWFyVGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0YXJlYSNsZXhpY2FsR3JhbW1hcicsXG4gICAgICBsZXhpY2FsR3JhbW1hciA9IEJORkxleGVyLmdyYW1tYXI7XG5cbmxldCBsZXhpY2FsR3JhbW1hclRleHRhcmVhLFxuICAgIGJuZkxleGVyID0gbnVsbCxcbiAgICBibmZQYXJzZXIgPSBudWxsO1xuXG5jbGFzcyBCTkZFeGFtcGxlIHtcbiAgc3RhdGljIHJ1bigpIHtcbiAgICBsZXhpY2FsR3JhbW1hclRleHRhcmVhID0gbmV3IFRleHRhcmVhKGxleGljYWxHcmFtbWFyVGV4dGFyZWFTZWxlY3Rvcik7XG5cbiAgICBjb25zdCBsZXhpY2FsR3JhbW1hclRleHRhcmVhVmFsdWUgPSBKU09OLnN0cmluZ2lmeShsZXhpY2FsR3JhbW1hciwgbnVsbCwgJyAgJyksIC8vL1xuICAgICAgICAgIGJuZkdyYW1tYXJUZXh0YXJlYVZhbHVlID0gZ3JhbW1hciwgLy8vXG4gICAgICAgICAgY29udGVudFRleHRhcmVhVmFsdWUgPSBgXG5cbiAgICBuYXR1cmFsTnVtYmVyICAgICAgICAgICAgOjo9ICAvXFxkKy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmA7XG5cbiAgICBsZXhpY2FsR3JhbW1hclRleHRhcmVhLnNldFZhbHVlKGxleGljYWxHcmFtbWFyVGV4dGFyZWFWYWx1ZSk7XG5cbiAgICBFeGFtcGxlLnNldEJORkdyYW1tYXJUZXh0YXJlYVZhbHVlKGJuZkdyYW1tYXJUZXh0YXJlYVZhbHVlKTtcblxuICAgIEV4YW1wbGUuc2V0Q29udGVudFRleHRhcmVhVmFsdWUoY29udGVudFRleHRhcmVhVmFsdWUpO1xuXG4gICAgRXhhbXBsZS5vbkJORkdyYW1tYXJUZXh0YXJlYUtleVVwKHVwZGF0ZSk7XG5cbiAgICBFeGFtcGxlLm9uQ29udGVudFRleHRhcmVhS2V5VXAodXBkYXRlKTtcblxuICAgIGxleGljYWxHcmFtbWFyVGV4dGFyZWEub25LZXlVcCh1cGRhdGUpO1xuXG4gICAgdXBkYXRlKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlKCkge1xuICB1cGRhdGVCTkZMZXhlcigpO1xuXG4gIHVwZGF0ZUJORlBhcnNlcigpO1xuXG4gIGlmIChibmZMZXhlciAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHByb2R1Y3Rpb24gPSBudWxsOyAgLy8vXG5cbiAgICBFeGFtcGxlLnVwZGF0ZVBhcnNlVHJlZVRleHRhcmVhKGJuZkxleGVyLCBibmZQYXJzZXIsIHByb2R1Y3Rpb24pO1xuICB9IGVsc2Uge1xuICAgIEV4YW1wbGUuY2xlYXJQYXJzZVRyZWVUZXh0YXJlYSgpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQk5GRXhhbXBsZTtcblxuZnVuY3Rpb24gdXBkYXRlQk5GTGV4ZXIoKSB7XG4gIGNvbnN0IGxleGljYWxHcmFtbWFyVGV4dGFyZWFWYWx1ZSA9IGxleGljYWxHcmFtbWFyVGV4dGFyZWEuZ2V0VmFsdWUoKTtcblxuICBsZXQgbGV4aWNhbEdyYW1tYXIgPSBudWxsO1xuXG4gIHRyeSB7XG4gICAgbGV4aWNhbEdyYW1tYXIgPSBKU09OLnBhcnNlKGxleGljYWxHcmFtbWFyVGV4dGFyZWFWYWx1ZSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7fVxuXG4gIGNvbnN0IGxleGljYWxHcmFtbWFyVmFsaWQgPSAobGV4aWNhbEdyYW1tYXIgIT09IG51bGwpO1xuXG4gIGlmIChsZXhpY2FsR3JhbW1hclZhbGlkKSB7XG4gICAgYm5mTGV4ZXIgPSBCTkZMZXhlci5mcm9tR3JhbW1hcihsZXhpY2FsR3JhbW1hcik7XG5cbiAgICBsZXhpY2FsR3JhbW1hclRleHRhcmVhLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuICB9IGVsc2Uge1xuICAgIGxleGljYWxHcmFtbWFyVGV4dGFyZWEuYWRkQ2xhc3MoJ2Vycm9yJyk7XG5cbiAgICBibmZMZXhlciA9IG51bGw7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlQk5GUGFyc2VyKCkge1xuICBibmZQYXJzZXIgPSBCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKSxcbiAgICAgIGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBFeGFtcGxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZScpLFxuICAgICAgZ3JhbW1hciA9IHJlcXVpcmUoJy4uL2Zsb3JlbmNlL2dyYW1tYXInKSxcbiAgICAgIG1hcHBpbmdzID0gcmVxdWlyZSgnLi4vZmxvcmVuY2UvbWFwcGluZ3MnKSxcbiAgICAgIEZsb3JlbmNlUGFyc2VyID0gcmVxdWlyZSgnLi4vZmxvcmVuY2UvcGFyc2VyJyk7XG5cbmNvbnN0IHsgQ2hlY2tib3gsIFRleHRhcmVhIH0gPSBlYXN5LFxuICAgICAgeyBGbG9yZW5jZUxleGVyIH0gPSBsZXhlcnM7XG5cbmNvbnN0IG1hcHBpbmdzQ2hlY2tib3hTZWxlY3RvciA9ICcjbWFwcGluZ3MnLFxuICAgICAgcHJvZHVjdGlvbk5hbWVUZXh0YXJlYVNlbGVjdG9yID0gJyNwcm9kdWN0aW9uTmFtZSc7XG5cbmNvbnN0IGZsb3JlbmNlTGV4ZXIgPSBGbG9yZW5jZUxleGVyLmZyb21Ob3RoaW5nKCk7XG5cbmxldCBwcm9kdWN0aW9uTmFtZSxcbiAgICBtYXBwaW5nc0NoZWNrYm94LFxuICAgIHByb2R1Y3Rpb25OYW1lVGV4dGFyZWE7XG5cbmNsYXNzIEZsb3JlbmNlRXhhbXBsZSB7XG4gIHN0YXRpYyBydW4oKSB7XG4gICAgbWFwcGluZ3NDaGVja2JveCA9IG5ldyBDaGVja2JveChtYXBwaW5nc0NoZWNrYm94U2VsZWN0b3IpO1xuICAgIHByb2R1Y3Rpb25OYW1lVGV4dGFyZWEgPSBuZXcgVGV4dGFyZWEocHJvZHVjdGlvbk5hbWVUZXh0YXJlYVNlbGVjdG9yKTtcblxuICAgIGNvbnN0IGJuZkdyYW1tYXJUZXh0YXJlYVZhbHVlID0gZ3JhbW1hcjsgLy8vXG5cbiAgICBFeGFtcGxlLnNldEJORkdyYW1tYXJUZXh0YXJlYVZhbHVlKGJuZkdyYW1tYXJUZXh0YXJlYVZhbHVlKTtcblxuICAgIG1hcHBpbmdzQ2hlY2tib3gub25DaGFuZ2UodXBkYXRlKTtcblxuICAgIHByb2R1Y3Rpb25OYW1lVGV4dGFyZWEub25LZXlVcCh1cGRhdGUpO1xuXG4gICAgRXhhbXBsZS5vbkJORkdyYW1tYXJUZXh0YXJlYUtleVVwKHVwZGF0ZSk7XG5cbiAgICBFeGFtcGxlLm9uQ29udGVudFRleHRhcmVhS2V5VXAodXBkYXRlKTtcblxuICAgIHVwZGF0ZSgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgY29uc3QgbWFwcGluZ3NDaGVja2JveENoZWNrZWQgPSBtYXBwaW5nc0NoZWNrYm94LmlzQ2hlY2tlZCgpLFxuICAgICAgICBibmZHcmFtbWFyVGV4dGFyZWFWYWx1ZSA9IEV4YW1wbGUuZ2V0Qk5GR3JhbW1hclRleHRhcmVhVmFsdWUoKSxcbiAgICAgICAgcHJvZHVjdGlvbk5hbWVUZXh0YXJlYVZhbHVlID0gcHJvZHVjdGlvbk5hbWVUZXh0YXJlYS5nZXRWYWx1ZSgpLFxuICAgICAgICBhZGp1c3RlZE1hcHBpbmdzID0gbWFwcGluZ3NDaGVja2JveENoZWNrZWQgPyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwcGluZ3MgOiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgYWRqdXN0ZWRHcmFtbWFyID0gYm5mR3JhbW1hclRleHRhcmVhVmFsdWUsIC8vL1xuICAgICAgICBwcm9kdWN0aW9uTmFtZSA9IHByb2R1Y3Rpb25OYW1lVGV4dGFyZWFWYWx1ZSwgLy8vXG4gICAgICAgIGZsb3JlbmNlUGFyc2VyID0gRmxvcmVuY2VQYXJzZXIuZnJvbUdyYW1tYXJBbmRNYXBwaW5ncyhhZGp1c3RlZEdyYW1tYXIsIGFkanVzdGVkTWFwcGluZ3MpLFxuICAgICAgICBwcm9kdWN0aW9uID0gZmxvcmVuY2VQYXJzZXIuZmluZFByb2R1Y3Rpb24ocHJvZHVjdGlvbk5hbWUpO1xuXG4gIEV4YW1wbGUudXBkYXRlUGFyc2VUcmVlVGV4dGFyZWEoZmxvcmVuY2VMZXhlciwgZmxvcmVuY2VQYXJzZXIsIHByb2R1Y3Rpb24pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlRXhhbXBsZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZ3JhbW1hciA9IGBcblxuXG4gICAgZG9jdW1lbnQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBoZWFkZXI/IHZlcnRpY2FsU3BhY2U/IGJvZHk/ICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgaGVhZGVyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBpbmNsdWRlRGlyZWN0aXZlK1xuICAgIFxuICAgIGluY2x1ZGVEaXJlY3RpdmUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCJpbmNsdWRlXCI8Tk9fV0hJVEVTUEFDRT5cIihcIjxOT19XSElURVNQQUNFPltzdHJpbmddPE5PX1dISVRFU1BBQ0U+XCIpXCIgPEVORF9PRl9MSU5FPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICBib2R5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHBhcnQrICBcbiAgICAgICAgXG4gICAgcGFydCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICB0eXBlKHMpRGVjbGFyYXRpb25cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIHR5cGVkQ29uc3RydWN0b3IocylEZWNsYXJhdGlvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAodHlwZWQpVmFyaWFibGUocylEZWNsYXJhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIChxdWFsaWZpZWQpTWV0YXZhcmlhYmxlKHMpRGVjbGFyYXRpb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgcnVsZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBheGlvbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICB0aGVvcmVtIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIGxlbW1hIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIHZlcnRpY2FsU3BhY2UgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICB0eXBlKHMpRGVjbGFyYXRpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHR5cGVzRGVjbGFyYXRpb24gfCB0eXBlRGVjbGFyYXRpb24gXG4gICAgXG4gICAgdHlwZWRDb25zdHJ1Y3RvcihzKURlY2xhcmF0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICB0eXBlZENvbnN0cnVjdG9yc0RlY2xhcmF0aW9uIHwgdHlwZWRDb25zdHJ1Y3RvckRlY2xhcmF0aW9uIFxuICAgIFxuICAgICh0eXBlZClWYXJpYWJsZShzKURlY2xhcmF0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgKHR5cGVkKVZhcmlhYmxlRGVjbGFyYXRpb24gfCAodHlwZWQpVmFyaWFibGVzRGVjbGFyYXRpb25cbiAgICBcbiAgICAocXVhbGlmaWVkKU1ldGF2YXJpYWJsZShzKURlY2xhcmF0aW9uICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIChxdWFsaWZpZWQpTWV0YXZhcmlhYmxlc0RlY2xhcmF0aW9uIHwgKHF1YWxpZmllZClNZXRhdmFyaWFibGVEZWNsYXJhdGlvblxuXG4gICAgcnVsZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIlJ1bGVcIiBwYXJlbnRoZXNpc2VkTGFiZWxMaXN0PyA8RU5EX09GX0xJTkU+IHByZW1pc2Uocyk/IGNvbmNsdXNpb24gcHJvb2Y/XG4gICAgXG4gICAgYXhpb20gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIkF4aW9tXCIgcGFyZW50aGVzaXNlZExhYmVsTGlzdD8gPEVORF9PRl9MSU5FPiBwcmVtaXNlKHMpPyBjb25jbHVzaW9uXG4gICAgXG4gICAgdGhlb3JlbSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIlRoZW9yZW1cIiBwYXJlbnRoZXNpc2VkTGFiZWxMaXN0PyA8RU5EX09GX0xJTkU+IHByZW1pc2Uocyk/IGNvbmNsdXNpb24gcHJvb2Y/XG4gICAgICAgIFxuICAgIGxlbW1hICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCJMZW1tYVwiIHBhcmVudGhlc2lzZWRMYWJlbExpc3Q/IDxFTkRfT0ZfTElORT4gcHJlbWlzZShzKT8gY29uY2x1c2lvbiBwcm9vZj9cblxuXG5cbiAgICB0eXBlc0RlY2xhcmF0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIFwiVHlwZXNcIiB0eXBlTGlzdFxuICAgIFxuICAgIHR5cGVEZWNsYXJhdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCJUeXBlXCIgdHlwZVxuICAgIFxuICAgIHR5cGVMaXN0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgdHlwZTxOT19XSElURVNQQUNFPmNvbW1hVGhlblR5cGUqXG4gICAgXG4gICAgY29tbWFUaGVuVHlwZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIixcIjxOT19XSElURVNQQUNFPnR5cGVcbiAgICBcbiAgICB0eXBlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHR5cGVOYW1lXG5cbiAgICB0eXBlTmFtZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIG5hbWVcblxuICAgIFxuICAgIFxuICAgIHR5cGVkQ29uc3RydWN0b3JzRGVjbGFyYXRpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCJDb25zdHJ1Y3RvcnNcIiB0eXBlZENvbnN0cnVjdG9yTGlzdFxuICAgIFxuICAgIHR5cGVkQ29uc3RydWN0b3JEZWNsYXJhdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCJDb25zdHJ1Y3RvclwiIHR5cGVkQ29uc3RydWN0b3JcblxuICAgIHR5cGVkQ29uc3RydWN0b3JMaXN0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgdHlwZWRDb25zdHJ1Y3RvcjxOT19XSElURVNQQUNFPmNvbW1hVGhlblR5cGVkQ29uc3RydWN0b3IqXG4gICAgXG4gICAgY29tbWFUaGVuVHlwZWRDb25zdHJ1Y3RvciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIixcIjxOT19XSElURVNQQUNFPnR5cGVkQ29uc3RydWN0b3JcbiAgICBcbiAgICB0eXBlZENvbnN0cnVjdG9yICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIGNvbnN0cnVjdG9yPE5PX1dISVRFU1BBQ0U+XCI6XCI8Tk9fV0hJVEVTUEFDRT50eXBlXG4gICAgXG4gICAgY29uc3RydWN0b3IgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBjb25zdHJ1Y3Rvck5hbWU8Tk9fV0hJVEVTUEFDRT5wYXJlbnRoZXNpc2VkVHlwZUxpc3Q/XG4gICAgXG4gICAgcGFyZW50aGVzaXNlZFR5cGVMaXN0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIihcIjxOT19XSElURVNQQUNFPnR5cGVMaXN0PE5PX1dISVRFU1BBQ0U+XCIpXCJcblxuICAgIGNvbnN0cnVjdG9yTmFtZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgbmFtZVxuXG5cblxuICAgICh0eXBlZClWYXJpYWJsZXNEZWNsYXJhdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCJWYXJpYWJsZXNcIiAodHlwZWQpVmFyaWFibGVMaXN0XG4gICAgXG4gICAgKHR5cGVkKVZhcmlhYmxlRGVjbGFyYXRpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIlZhcmlhYmxlXCIgKHR5cGVkKVZhcmlhYmxlXG5cbiAgICAodHlwZWQpVmFyaWFibGVMaXN0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgICh0eXBlZClWYXJpYWJsZTxOT19XSElURVNQQUNFPmNvbW1hVGhlbih0eXBlZClWYXJpYWJsZSpcbiAgICBcbiAgICBjb21tYVRoZW4odHlwZWQpVmFyaWFibGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIFwiLFwiPE5PX1dISVRFU1BBQ0U+KHR5cGVkKVZhcmlhYmxlXG4gICAgXG4gICAgKHR5cGVkKVZhcmlhYmxlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICB0eXBlZFZhcmlhYmxlIHwgdmFyaWFibGVcbiAgICBcbiAgICB0eXBlZFZhcmlhYmxlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHZhcmlhYmxlPE5PX1dISVRFU1BBQ0U+XCI6XCI8Tk9fV0hJVEVTUEFDRT50eXBlXG4gICAgXG4gICAgdmFyaWFibGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICB2YXJpYWJsZU5hbWVcbiAgICBcbiAgICB2YXJpYWJsZU5hbWUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIG5hbWVcbiAgICBcbiAgICBcbiAgICBcbiAgICAocXVhbGlmaWVkKU1ldGF2YXJpYWJsZXNEZWNsYXJhdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIFwiTWV0YXZhcmlhYmxlc1wiIChxdWFsaWZpZWQpTWV0YXZhcmlhYmxlTGlzdFxuICAgIFxuICAgIChxdWFsaWZpZWQpTWV0YXZhcmlhYmxlRGVjbGFyYXRpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCJNZXRhdmFyaWFibGVcIiAocXVhbGlmaWVkKU1ldGF2YXJpYWJsZVxuICAgIFxuICAgIChxdWFsaWZpZWQpTWV0YXZhcmlhYmxlTGlzdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgKHF1YWxpZmllZClNZXRhdmFyaWFibGU8Tk9fV0hJVEVTUEFDRT5jb21tYVRoZW4ocXVhbGlmaWVkKU1ldGF2YXJpYWJsZStcblxuICAgIGNvbW1hVGhlbihxdWFsaWZpZWQpTWV0YXZhcmlhYmxlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCIsXCI8Tk9fV0hJVEVTUEFDRT4ocXVhbGlmaWVkKU1ldGF2YXJpYWJsZVxuXG4gICAgKHF1YWxpZmllZClNZXRhdmFyaWFibGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBxdWFsaWZpZWRNZXRhdmFyaWFibGUgfCBtZXRhdmFyaWFibGVcbiAgICBcbiAgICBxdWFsaWZpZWRNZXRhdmFyaWFibGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIG1ldGF2YXJpYWJsZTxOT19XSElURVNQQUNFPnBhcmVudGhlc2lzZWRUeXBlT3JUZXJtXG5cbiAgICBtZXRhdmFyaWFibGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIG1ldGF2YXJpYWJsZU5hbWVcblxuICAgIHBhcmVudGhlc2lzZWRUeXBlT3JUZXJtICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCIoXCI8Tk9fV0hJVEVTUEFDRT50eXBlT3JUZXJtPE5PX1dISVRFU1BBQ0U+XCIpXCJcbiAgICBcbiAgICB0eXBlT3JUZXJtICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHR5cGUgfCB0ZXJtXG4gICAgXG4gICAgbWV0YXZhcmlhYmxlTmFtZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBuYW1lXG4gICAgXG4gICAgXG5cbiAgICBwYXJlbnRoZXNpc2VkTGFiZWxMaXN0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIFwiKFwiPE5PX1dISVRFU1BBQ0U+bGFiZWxMaXN0PE5PX1dISVRFU1BBQ0U+XCIpXCJcbiAgICBcbiAgICBsYWJlbExpc3QgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIGxhYmVsPE5PX1dISVRFU1BBQ0U+Y29tbWFUaGVuTGFiZWwqXG4gICAgXG4gICAgY29tbWFUaGVuTGFiZWwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIixcIjxOT19XSElURVNQQUNFPmxhYmVsXG4gICAgXG4gICAgbGFiZWwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBsYWJlbE5hbWU8Tk9fV0hJVEVTUEFDRT5wYXJlbnRoZXNpc2VkVGVybUxpc3Q/XG4gICAgXG4gICAgbGFiZWxOYW1lICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBuYW1lXG5cbiAgICBcbiAgICBcbiAgICBwcmVtaXNlKHMpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHByZW1pc2UgfCBwcmVtaXNlc1xuICAgIFxuICAgIHByZW1pc2UgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCJQcmVtaXNlXCIgPEVORF9PRl9MSU5FPiB1bmp1c3RpZmllZFN0YXRlbWVudE9yVW5rbm93blxuICAgIFxuICAgIHByZW1pc2VzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCJQcmVtaXNlc1wiIDxFTkRfT0ZfTElORT4gdW5qdXN0aWZpZWRTdGF0ZW1lbnRPclVua25vd24gdW5qdXN0aWZpZWRTdGF0ZW1lbnRPclVua25vd24rXG4gICAgXG4gICAgY29uY2x1c2lvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIkNvbmNsdXNpb25cIiA8RU5EX09GX0xJTkU+ICh1bilqdXN0aWZpZWRTdGF0ZW1lbnRPclVua25vd25cbiAgICBcblxuXG4gICAgcHJvb2YgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIlByb29mXCIgPEVORF9PRl9MSU5FPiAoYWJyaWRnZWQpUHJvb2ZEZXJpdmF0aW9uXG4gICAgXG4gICAgKGFicmlkZ2VkKVByb29mRGVyaXZhdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBwcm9vZkRlcml2YXRpb24gfCBhYnJpZGdlZFByb29mRGVyaXZhdGlvblxuICAgIFxuICAgIGFicmlkZ2VkUHJvb2ZEZXJpdmF0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgKHVuKWp1c3RpZmllZFN0YXRlbWVudE9yVW5rbm93blxuICAgIFxuICAgIHByb29mRGVyaXZhdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgZGVyaXZhdGlvbiB0aGVyZWZvcmVcbiAgICBcbiAgICBkZXJpdmF0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHN1YkRlcml2YXRpb24rICAgIFxuICAgIFxuICAgIHRoZXJlZm9yZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCJUaGVyZWZvcmVcIiA8RU5EX09GX0xJTkU+ICh1bilqdXN0aWZpZWRTdGF0ZW1lbnRPclVua25vd25cbiAgICBcbiAgICBzdWJEZXJpdmF0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHN1YkxlbW1hIHwgKHVuKWp1c3RpZmllZFN0YXRlbWVudE9yVW5rbm93blxuICAgIFxuICAgIFxuICAgIFxuICAgIHN1YkxlbW1hICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgc3VwcG9zZSB0aGVuPyBoZW5jZSB1bmp1c3RpZmllZFN0YXRlbWVudE9yVW5rbm93bj8gdmVydGljYWxTcGFjZT8gICAgXG4gICAgXG4gICAgc3VwcG9zZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIlN1cHBvc2VcIiA8RU5EX09GX0xJTkU+IHVuanVzdGlmaWVkU3RhdGVtZW50T3JVbmtub3duK1xuICAgIFxuICAgIHRoZW4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCJUaGVuXCIgPEVORF9PRl9MSU5FPiBkZXJpdmF0aW9uXG4gICAgXG4gICAgaGVuY2UgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIkhlbmNlXCIgPEVORF9PRl9MSU5FPiAodW4panVzdGlmaWVkU3RhdGVtZW50T3JVbmtub3duXG4gICAgXG4gICAgXG4gICAgXG4gICAgKHVuKWp1c3RpZmllZFN0YXRlbWVudE9yVW5rbm93biAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBqdXN0aWZpZWRTdGF0ZW1lbnQgfCB1bmp1c3RpZmllZFN0YXRlbWVudCB8IHVua25vd25cbiAgICBcbiAgICB1bmp1c3RpZmllZFN0YXRlbWVudE9yVW5rbm93biAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHVuanVzdGlmaWVkU3RhdGVtZW50IHwgdW5rbm93blxuICAgIFxuICAgIHVuanVzdGlmaWVkU3RhdGVtZW50ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgc3RhdGVtZW50IDxFTkRfT0ZfTElORT5cbiAgICBcbiAgICBqdXN0aWZpZWRTdGF0ZW1lbnQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHN0YXRlbWVudCBqdXN0aWZpY2F0aW9uIDxFTkRfT0ZfTElORT5cbiAgICAgIFxuICAgIGp1c3RpZmljYXRpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgYnlPckZyb20gcmVmZXJlbmNlXG4gICAgIFxuICAgIGJ5T3JGcm9tICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCJieVwiIHwgXCJmcm9tXCJcbiAgICAgXG4gICAgcmVmZXJlbmNlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICByZWZlcmVuY2VOYW1lPE5PX1dISVRFU1BBQ0U+cGFyZW50aGVzaXNlZFRlcm1MaXN0P1xuXG4gICAgcmVmZXJlbmNlTmFtZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBuYW1lXG5cbiAgICBcblxuICAgIHN0YXRlbWVudCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgcHJvb2ZBc3NlcnRpb24gfCB0eXBlQXNzZXJ0aW9uIHwgZXF1YWxpdHkgfCBleHByZXNzaW9uICAgICBcbiAgICBcbiAgICBcbiAgICBcbiAgICBwcm9vZkFzc2VydGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIChxdWFsaWZpZWQpTWV0YXZhcmlhYmxlIFwiOjpcIiAocXVhbGlmaWVkKU1ldGF2YXJpYWJsZVxuXG4gICAgdHlwZUFzc2VydGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBleHByZXNzaW9uIFwiOlwiIHR5cGVcbiAgICBcbiAgICBlcXVhbGl0eSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIGV4cHJlc3Npb24gXCI9XCIgZXhwcmVzc2lvbiAgICBcbiAgICBcbiAgICBleHByZXNzaW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHRlcm0gfCAocXVhbGlmaWVkKU1ldGF2YXJpYWJsZVxuICAgIFxuICAgIFxuXG4gICAgdGVybSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBjb21wb3VuZFRlcm0gfCB2YXJpYWJsZU5hbWVcbiAgICBcbiAgICBjb21wb3VuZFRlcm0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIGNvbnN0cnVjdG9yTmFtZTxOT19XSElURVNQQUNFPnBhcmVudGhlc2lzZWRUZXJtTGlzdD9cbiAgICBcbiAgICBcblxuICAgIHBhcmVudGhlc2lzZWRUZXJtTGlzdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCIoXCI8Tk9fV0hJVEVTUEFDRT50ZXJtTGlzdDxOT19XSElURVNQQUNFPlwiKVwiXG5cbiAgICB0ZXJtTGlzdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHRlcm08Tk9fV0hJVEVTUEFDRT5jb21tYVRoZW5UZXJtKlxuICAgIFxuICAgIGNvbW1hVGhlblRlcm0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCIsXCI8Tk9fV0hJVEVTUEFDRT50ZXJtXG4gICAgXG5cblxuICAgIG5hbWUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgL1xcXFx3Ky9cbiAgICBcbiAgICBcblxuICAgIHVua25vd24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgc3BlY2lhbFVuYXNzaWduZWRPck1pbm9yS2V5d29yZHMrIDxFTkRfT0ZfTElORT5cblxuICAgIHNwZWNpYWxVbmFzc2lnbmVkT3JNaW5vcktleXdvcmRzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgW3NwZWNpYWxdIHwgW3VuYXNzaWduZWRdIHwgXCJieVwiIHwgXCJmcm9tXCJcblxuXG5cbiAgICB2ZXJ0aWNhbFNwYWNlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIDxFTkRfT0ZfTElORT4rXG4gICAgXG4gICAgXG4gICAgXG4gICAgZXJyb3IgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICAqXG4gICAgXG5gO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdyYW1tYXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFRyYW5zcGFyZW50Tm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsL3RyYW5zcGFyZW50JyksXG4gICAgICBEaXNjYXJkU2Vjb25kQ2hpbGROb2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwvZGlzY2FyZFNlY29uZENoaWxkJyksXG4gICAgICBUcmFuc3BhcmVudFRoZW5LZWVwU2Vjb25kTm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsL3RyYW5zcGFyZW50VGhlbktlZXBTZWNvbmQnKTtcblxuY29uc3QgbWFwcGluZ3MgPSB7XG5cbiAgJ25hbWUnOiBUcmFuc3BhcmVudE5vZGUsXG4gICdwYXJ0JzogVHJhbnNwYXJlbnROb2RlLFxuICAnc3RhdGVtZW50JzogVHJhbnNwYXJlbnROb2RlLFxuICAnc3ViRGVyaXZhdGlvbic6IFRyYW5zcGFyZW50Tm9kZSxcbiAgJ3Byb29mRGVyaXZhdGlvbic6IFRyYW5zcGFyZW50Tm9kZSxcbiAgJ3BhcmVudGhlc2lzZWRUeXBlJzogVHJhbnNwYXJlbnROb2RlLFxuICAnYWJyaWRnZWRQcm9vZkRlcml2YXRpb24nOiBUcmFuc3BhcmVudE5vZGUsXG5cbiAgJ3R5cGVOYW1lJzogVHJhbnNwYXJlbnROb2RlLFxuICAnbGFiZWxOYW1lJzogVHJhbnNwYXJlbnROb2RlLFxuICAndmFyaWFibGVOYW1lJzogVHJhbnNwYXJlbnROb2RlLFxuICAncmVmZXJlbmNlTmFtZSc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgJ2NvbnN0cnVjdG9yTmFtZSc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgJ21ldGF2YXJpYWJsZU5hbWUnOiBUcmFuc3BhcmVudE5vZGUsXG5cbiAgJ3ByZW1pc2UocyknOiBUcmFuc3BhcmVudE5vZGUsXG4gICd0eXBlKHMpRGVjbGFyYXRpb24nOiBUcmFuc3BhcmVudE5vZGUsXG4gICcodHlwZWQpVmFyaWFibGUocylEZWNsYXJhdGlvbic6IFRyYW5zcGFyZW50Tm9kZSxcbiAgJ3R5cGVkQ29uc3RydWN0b3IocylEZWNsYXJhdGlvbic6IFRyYW5zcGFyZW50Tm9kZSxcbiAgJyhxdWFsaWZpZWQpTWV0YXZhcmlhYmxlKHMpRGVjbGFyYXRpb24nOiBUcmFuc3BhcmVudE5vZGUsXG5cbiAgJyh0eXBlZClWYXJpYWJsZSc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgJyhxdWFsaWZpZWQpTWV0YXZhcmlhYmxlJzogVHJhbnNwYXJlbnROb2RlLFxuICAnKGFicmlkZ2VkKVByb29mRGVyaXZhdGlvbic6IFRyYW5zcGFyZW50Tm9kZSxcblxuICAnYnlPckZyb20nOiBUcmFuc3BhcmVudE5vZGUsXG4gICd0eXBlT3JUZXJtJzogVHJhbnNwYXJlbnROb2RlLFxuICAndW5qdXN0aWZpZWRTdGF0ZW1lbnRPclVua25vd24nOiBUcmFuc3BhcmVudE5vZGUsXG4gICcodW4panVzdGlmaWVkU3RhdGVtZW50T3JVbmtub3duJzogVHJhbnNwYXJlbnROb2RlLFxuICAnc3BlY2lhbFVuYXNzaWduZWRPck1pbm9yS2V5d29yZHMnOiBUcmFuc3BhcmVudE5vZGUsXG5cbiAgJ2NvbW1hVGhlblRlcm0nOiBUcmFuc3BhcmVudFRoZW5LZWVwU2Vjb25kTm9kZSxcbiAgJ2NvbW1hVGhlblR5cGUnOiBUcmFuc3BhcmVudFRoZW5LZWVwU2Vjb25kTm9kZSxcbiAgJ2NvbW1hVGhlbkxhYmVsJzogVHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZE5vZGUsXG4gICdjb21tYVRoZW5NZXRhdmFyaWFibGUnOiBUcmFuc3BhcmVudFRoZW5LZWVwU2Vjb25kTm9kZSxcbiAgJ2NvbW1hVGhlbih0eXBlZClWYXJpYWJsZSc6IFRyYW5zcGFyZW50VGhlbktlZXBTZWNvbmROb2RlLFxuICAnY29tbWFUaGVuVHlwZWRDb25zdHJ1Y3Rvcic6IFRyYW5zcGFyZW50VGhlbktlZXBTZWNvbmROb2RlLFxuICAnY29tbWFUaGVuKHF1YWxpZmllZClNZXRhdmFyaWFibGUnOiBUcmFuc3BhcmVudFRoZW5LZWVwU2Vjb25kTm9kZSxcblxuICAncGFyZW50aGVzaXNlZFRlcm1MaXN0JzogVHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZE5vZGUsXG4gICdwYXJlbnRoZXNpc2VkVHlwZUxpc3QnOiBUcmFuc3BhcmVudFRoZW5LZWVwU2Vjb25kTm9kZSxcbiAgJ3BhcmVudGhlc2lzZWRMYWJlbExpc3QnOiBUcmFuc3BhcmVudFRoZW5LZWVwU2Vjb25kTm9kZSxcblxuICAnY29uY2x1c2lvbic6IERpc2NhcmRTZWNvbmRDaGlsZE5vZGUsXG4gICd0eXBlZFZhcmlhYmxlJzogRGlzY2FyZFNlY29uZENoaWxkTm9kZSxcbiAgJ3R5cGVkQ29uc3RydWN0b3InOiBEaXNjYXJkU2Vjb25kQ2hpbGROb2RlXG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwcGluZ3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBncmFtbWFyID0gcmVxdWlyZSgnLi9ncmFtbWFyJyksXG4gICAgICBtYXBwaW5ncyA9IHJlcXVpcmUoJy4vbWFwcGluZ3MnKSxcbiAgICAgIENvbW1vblBhcnNlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9wYXJzZXInKSxcbiAgICAgIFByaW1pdGl2ZVBhcnNlciA9IHJlcXVpcmUoJy4uL3ByaW1pdGl2ZS9wYXJzZXInKTtcblxuY29uc3QgeyBQcmltaXRpdmVMZXhlciwgRmxvcmVuY2VMZXhlciB9ID0gbGV4ZXJzO1xuXG5jb25zdCBzaWduaWZpY2FudFRva2VuVHlwZXMgPSBGbG9yZW5jZUxleGVyLnNpZ25pZmljYW50VG9rZW5UeXBlcygpO1xuXG5jbGFzcyBGbG9yZW5jZVBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBmcm9tQWRkaXRpb25hbE1hcHBpbmdzKGFkZGl0aW9uYWxNYXBwaW5ncykge1xuICAgIGNvbnN0IGZsb3JlbmNlUGFyc2VyID0gRmxvcmVuY2VQYXJzZXIuZnJvbUdyYW1tYXJBbmRNYXBwaW5ncyhncmFtbWFyLCBPYmplY3QuYXNzaWduKG1hcHBpbmdzLCBhZGRpdGlvbmFsTWFwcGluZ3MpKTsgLy8vXG5cbiAgICByZXR1cm4gZmxvcmVuY2VQYXJzZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbUdyYW1tYXJBbmRNYXBwaW5ncyhncmFtbWFyLCBtYXBwaW5ncykge1xuICAgIGNvbnN0IGxpbmVzID0gUHJpbWl0aXZlTGV4ZXIubGluZXNGcm9tR3JhbW1hcihncmFtbWFyKSxcbiAgICAgICAgICBwcm9kdWN0aW9ucyA9IFByaW1pdGl2ZVBhcnNlci5wYXJzZShsaW5lcywgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBtYXBwaW5ncyksXG4gICAgICAgICAgZmxvcmVuY2VQYXJzZXIgPSBuZXcgRmxvcmVuY2VQYXJzZXIocHJvZHVjdGlvbnMpO1xuXG4gICAgcmV0dXJuIGZsb3JlbmNlUGFyc2VyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VQYXJzZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEdyYXBoID0gcmVxdWlyZSgnLi9ncmFwaCcpLFxuICAgICAgYXJyYXlVdGlsID0gcmVxdWlyZSgnLi4vdXRpbC9hcnJheScpLFxuICAgICAgcGFyc2VyVXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwvcGFyc2VyJyksXG4gICAgICBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vY29tbW9uL3Byb2R1Y3Rpb24nKSxcbiAgICAgIFVuaXRSdWxlUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi91bml0UnVsZScpLFxuICAgICAgVW5pdFJ1bGVzUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi91bml0UnVsZXMnKSxcbiAgICAgIE5vblVuaXRSdWxlc1Byb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vbm9uVW5pdFJ1bGVzJyk7XG5cbmNsYXNzIGN5Y2xlcyB7XG4gIHN0YXRpYyBlbGltaW5hdGUocHJvZHVjdGlvbnMpIHtcbiAgICBjb25zdCB1bml0UnVsZXNQcm9kdWN0aW9ucyA9IHVuaXRSdWxlc1Byb2R1Y3Rpb25zRnJvbVByb2R1Y3Rpb25zKHByb2R1Y3Rpb25zKSxcbiAgICAgICAgICBncmFwaCA9IEdyYXBoLmZyb21Vbml0UnVsZXNQcm9kdWN0aW9ucyh1bml0UnVsZXNQcm9kdWN0aW9ucyksXG4gICAgICAgICAgY29tcG9uZW50cyA9IGdyYXBoLmdldENvbXBvbmVudHMoKSxcbiAgICAgICAgICBub25DeWNsaWNQcm9kdWN0aW9ucyA9IG5vbkN5Y2xpY1Byb2R1Y3Rpb25zRnJvbUNvbXBvbmVudHMoY29tcG9uZW50cywgcHJvZHVjdGlvbnMpO1xuXG4gICAgcHJvZHVjdGlvbnMgPSBub25DeWNsaWNQcm9kdWN0aW9uczsgLy8vXG5cbiAgICByZXR1cm4gcHJvZHVjdGlvbnM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjeWNsZXM7XG5cbmZ1bmN0aW9uIHVuaXRSdWxlc1Byb2R1Y3Rpb25zRnJvbVByb2R1Y3Rpb25zKHByb2R1Y3Rpb25zKSB7XG4gIGNvbnN0IHVuaXRSdWxlc1Byb2R1Y3Rpb25zID0gcHJvZHVjdGlvbnMucmVkdWNlKGZ1bmN0aW9uKHVuaXRSdWxlc1Byb2R1Y3Rpb25zLCBwcm9kdWN0aW9uKSB7XG4gICAgY29uc3QgdW5pdFJ1bGVzUHJvZHVjdGlvbiA9IFVuaXRSdWxlc1Byb2R1Y3Rpb24uZnJvbVByb2R1Y3Rpb24ocHJvZHVjdGlvbik7XG5cbiAgICBpZiAodW5pdFJ1bGVzUHJvZHVjdGlvbiAhPT0gbnVsbCkge1xuICAgICAgdW5pdFJ1bGVzUHJvZHVjdGlvbnMucHVzaCh1bml0UnVsZXNQcm9kdWN0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pdFJ1bGVzUHJvZHVjdGlvbnM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gdW5pdFJ1bGVzUHJvZHVjdGlvbnM7XG59XG5cbmZ1bmN0aW9uIG5vbkN5Y2xpY1Byb2R1Y3Rpb25zRnJvbUNvbXBvbmVudHMoY29tcG9uZW50cywgcHJvZHVjdGlvbnMpIHtcbiAgY29uc3Qgbm9uQ3ljbGljUHJvZHVjdGlvbnMgPSBjb21wb25lbnRzLnJlZHVjZShmdW5jdGlvbihub25DeWNsaWNQcm9kdWN0aW9ucywgY29tcG9uZW50KSB7XG4gICAgICAgICAgY29uc3QgY29tcG9uZW50Tm9uQ3ljbGljID0gY29tcG9uZW50LmlzTm9uQ3ljbGljKCk7XG5cbiAgICAgICAgICBpZiAoY29tcG9uZW50Tm9uQ3ljbGljKSB7XG4gICAgICAgICAgICBub25DeWNsaWNQcm9kdWN0aW9uRnJvbUNvbXBvbmVudChjb21wb25lbnQsIHByb2R1Y3Rpb25zLCBub25DeWNsaWNQcm9kdWN0aW9ucyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vbkN5Y2xpY1Byb2R1Y3Rpb25zRnJvbUNvbXBvbmVudChjb21wb25lbnQsIHByb2R1Y3Rpb25zLCBub25DeWNsaWNQcm9kdWN0aW9ucyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIG5vbkN5Y2xpY1Byb2R1Y3Rpb25zO1xuICAgICAgICB9LCBbXSk7XG5cbiAgcmV0dXJuIG5vbkN5Y2xpY1Byb2R1Y3Rpb25zO1xufVxuXG5mdW5jdGlvbiBub25DeWNsaWNQcm9kdWN0aW9uRnJvbUNvbXBvbmVudChjb21wb25lbnQsIHByb2R1Y3Rpb25zLCBub25DeWNsaWNQcm9kdWN0aW9ucykge1xuICBjb25zdCBmaXJzdFZlcnRleCA9IGNvbXBvbmVudC5nZXRGaXJzdFZlcnRleCgpLFxuICAgICAgICBmaXJzdFZlcnRleE5hbWUgPSBmaXJzdFZlcnRleC5nZXROYW1lKCksXG4gICAgICAgIG5vbkN5Y2xpY1Byb2R1Y3Rpb25OYW1lID0gZmlyc3RWZXJ0ZXhOYW1lLCAgLy8vXG4gICAgICAgIG5vbkN5Y2xpY1Byb2R1Y3Rpb24gPSBwYXJzZXJVdGlsLmZpbmRQcm9kdWN0aW9uKG5vbkN5Y2xpY1Byb2R1Y3Rpb25OYW1lLCBwcm9kdWN0aW9ucyk7XG5cbiAgbm9uQ3ljbGljUHJvZHVjdGlvbnMucHVzaChub25DeWNsaWNQcm9kdWN0aW9uKTtcbn1cblxuZnVuY3Rpb24gbm9uQ3ljbGljUHJvZHVjdGlvbnNGcm9tQ29tcG9uZW50KGNvbXBvbmVudCwgcHJvZHVjdGlvbnMsIG5vbkN5Y2xpY1Byb2R1Y3Rpb25zKSB7XG4gIHByb2R1Y3Rpb25zID0gcHJvZHVjdGlvbnNGcm9tQ29tcG9uZW50KGNvbXBvbmVudCwgcHJvZHVjdGlvbnMpOyAvLy9cblxuICBjb25zdCB1bml0UnVsZVByb2R1Y3Rpb25zID0gdW5pdFJ1bGVQcm9kdWN0aW9uc0Zyb21Qcm9kdWN0aW9ucyhwcm9kdWN0aW9ucyksXG4gICAgICAgIG5vblVuaXRSdWxlc1Byb2R1Y3Rpb25zID0gbm9uVW5pdFJ1bGVzUHJvZHVjdGlvbnNGcm9tUHJvZHVjdGlvbnMocHJvZHVjdGlvbnMpLFxuICAgICAgICByZW1vdmVkVW5pdFJ1bGVQcm9kdWN0aW9ucyA9IFtdLFxuICAgICAgICBhZGRlZE5vblVuaXRSdWxlc1Byb2R1Y3Rpb25zID0gW107XG5cbiAgbGV0IHVuaXRSdWxlUHJvZHVjdGlvbnNMZW5ndGggPSB1bml0UnVsZVByb2R1Y3Rpb25zLmxlbmd0aDtcblxuICB3aGlsZSAodW5pdFJ1bGVQcm9kdWN0aW9uc0xlbmd0aCA+IDApIHtcbiAgICBjb25zdCByZW1vdmVkVW5pdFJ1bGVQcm9kdWN0aW9uID0gdW5pdFJ1bGVQcm9kdWN0aW9ucy5zaGlmdCgpO1xuXG4gICAgcmVtb3ZlZFVuaXRSdWxlUHJvZHVjdGlvbnMucHVzaChyZW1vdmVkVW5pdFJ1bGVQcm9kdWN0aW9uKTtcblxuICAgIGNvbnN0IHJlbW92ZWRVbml0UnVsZVByb2R1Y3Rpb25OYW1lID0gcmVtb3ZlZFVuaXRSdWxlUHJvZHVjdGlvbi5nZXROYW1lKCksXG4gICAgICAgICAgcmVtb3ZlZFVuaXRSdWxlUHJvZHVjdGlvblVuaXRSdWxlUHJvZHVjdGlvbk5hbWUgPSByZW1vdmVkVW5pdFJ1bGVQcm9kdWN0aW9uLmdldFVuaXRSdWxlUHJvZHVjdGlvbk5hbWUoKSxcbiAgICAgICAgICBub25Vbml0UnVsZXNQcm9kdWN0aW9uTmFtZSA9IHJlbW92ZWRVbml0UnVsZVByb2R1Y3Rpb25Vbml0UnVsZVByb2R1Y3Rpb25OYW1lLCAgLy8vXG4gICAgICAgICAgbm9uVW5pdFJ1bGVzUHJvZHVjdGlvbiA9IHBhcnNlclV0aWwuZmluZFByb2R1Y3Rpb24obm9uVW5pdFJ1bGVzUHJvZHVjdGlvbk5hbWUsIG5vblVuaXRSdWxlc1Byb2R1Y3Rpb25zKSxcbiAgICAgICAgICBub25Vbml0UnVsZXNQcm9kdWN0aW9uUnVsZXMgPSBub25Vbml0UnVsZXNQcm9kdWN0aW9uLmdldFJ1bGVzKCksXG4gICAgICAgICAgYWRkZWROb25Vbml0UnVsZXNQcm9kdWN0aW9uTmFtZSA9IHJlbW92ZWRVbml0UnVsZVByb2R1Y3Rpb25OYW1lLCAgLy8vXG4gICAgICAgICAgYWRkZWROb25Vbml0UnVsZXNQcm9kdWN0aW9uUnVsZXMgPSBub25Vbml0UnVsZXNQcm9kdWN0aW9uUnVsZXM7IC8vL1xuXG4gICAgbGV0IGFkZGVkTm9uVW5pdFJ1bGVzUHJvZHVjdGlvbiA9IHBhcnNlclV0aWwuZmluZFByb2R1Y3Rpb24oYWRkZWROb25Vbml0UnVsZXNQcm9kdWN0aW9uTmFtZSwgYWRkZWROb25Vbml0UnVsZXNQcm9kdWN0aW9ucyk7XG5cbiAgICBpZiAoYWRkZWROb25Vbml0UnVsZXNQcm9kdWN0aW9uID09PSBudWxsKSB7XG4gICAgICBjb25zdCByZW1vdmVkVW5pdFJ1bGVQcm9kdWN0aW9uTm9kZSA9IHJlbW92ZWRVbml0UnVsZVByb2R1Y3Rpb24uZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgYWRkZWROb25Vbml0UnVsZXNQcm9kdWN0aW9uTm9kZSA9IHJlbW92ZWRVbml0UnVsZVByb2R1Y3Rpb25Ob2RlO1xuXG4gICAgICBhZGRlZE5vblVuaXRSdWxlc1Byb2R1Y3Rpb24gPSBuZXcgUHJvZHVjdGlvbihhZGRlZE5vblVuaXRSdWxlc1Byb2R1Y3Rpb25OYW1lLCBhZGRlZE5vblVuaXRSdWxlc1Byb2R1Y3Rpb25SdWxlcywgYWRkZWROb25Vbml0UnVsZXNQcm9kdWN0aW9uTm9kZSk7XG5cbiAgICAgIGFkZGVkTm9uVW5pdFJ1bGVzUHJvZHVjdGlvbnMucHVzaChhZGRlZE5vblVuaXRSdWxlc1Byb2R1Y3Rpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBhZGRlZE5vblVuaXRSdWxlc1Byb2R1Y3Rpb24uY29uY2F0UnVsZXMobm9uVW5pdFJ1bGVzUHJvZHVjdGlvblJ1bGVzKTtcbiAgICB9XG5cbiAgICBsZXQgdW5pdFJ1bGVQcm9kdWN0aW9uTmFtZSA9IHJlbW92ZWRVbml0UnVsZVByb2R1Y3Rpb25Vbml0UnVsZVByb2R1Y3Rpb25OYW1lLCAvLy9cbiAgICAgICAgdW5pdFJ1bGVQcm9kdWN0aW9uID0gcGFyc2VyVXRpbC5maW5kUHJvZHVjdGlvbih1bml0UnVsZVByb2R1Y3Rpb25OYW1lLCB1bml0UnVsZVByb2R1Y3Rpb25zKTtcblxuICAgIGlmICh1bml0UnVsZVByb2R1Y3Rpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHVuaXRSdWxlUHJvZHVjdGlvblVuaXRSdWxlUHJvZHVjdGlvbk5hbWUgPSB1bml0UnVsZVByb2R1Y3Rpb24uZ2V0VW5pdFJ1bGVQcm9kdWN0aW9uTmFtZSgpO1xuXG4gICAgICB1bml0UnVsZVByb2R1Y3Rpb25OYW1lID0gcmVtb3ZlZFVuaXRSdWxlUHJvZHVjdGlvbk5hbWU7IC8vL1xuXG4gICAgICBpZiAodW5pdFJ1bGVQcm9kdWN0aW9uTmFtZSAhPT0gdW5pdFJ1bGVQcm9kdWN0aW9uVW5pdFJ1bGVQcm9kdWN0aW9uTmFtZSkge1xuICAgICAgICB1bml0UnVsZVByb2R1Y3Rpb24gPSBmaW5kVW5pdFJ1bGVQcm9kdWN0aW9uKHVuaXRSdWxlUHJvZHVjdGlvbk5hbWUsIHVuaXRSdWxlUHJvZHVjdGlvblVuaXRSdWxlUHJvZHVjdGlvbk5hbWUsIHJlbW92ZWRVbml0UnVsZVByb2R1Y3Rpb25zKTtcblxuICAgICAgICBpZiAodW5pdFJ1bGVQcm9kdWN0aW9uID09PSBudWxsKSB7XG4gICAgICAgICAgdW5pdFJ1bGVQcm9kdWN0aW9uID0gVW5pdFJ1bGVQcm9kdWN0aW9uLmZyb21OYW1lQW5kVW5pdFJ1bGVQcm9kdWN0aW9uTmFtZSh1bml0UnVsZVByb2R1Y3Rpb25OYW1lLCB1bml0UnVsZVByb2R1Y3Rpb25Vbml0UnVsZVByb2R1Y3Rpb25OYW1lKTtcblxuICAgICAgICAgIHVuaXRSdWxlUHJvZHVjdGlvbnMudW5zaGlmdCh1bml0UnVsZVByb2R1Y3Rpb24pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdW5pdFJ1bGVQcm9kdWN0aW9uc0xlbmd0aCA9IHVuaXRSdWxlUHJvZHVjdGlvbnMubGVuZ3RoO1xuICB9XG5cbiAgbm9uVW5pdFJ1bGVzUHJvZHVjdGlvbnMuZm9yRWFjaChmdW5jdGlvbihub25Vbml0UnVsZXNQcm9kdWN0aW9uKSB7XG4gICAgY29uc3Qgbm9uVW5pdFJ1bGVzUHJvZHVjdGlvbk5hbWUgPSBub25Vbml0UnVsZXNQcm9kdWN0aW9uLmdldE5hbWUoKSxcbiAgICAgICAgICBhZGRlZE5vblVuaXRSdWxlc1Byb2R1Y3Rpb25OYW1lID0gbm9uVW5pdFJ1bGVzUHJvZHVjdGlvbk5hbWUsXG4gICAgICAgICAgYWRkZWROb25Vbml0UnVsZXNQcm9kdWN0aW9uID0gcGFyc2VyVXRpbC5maW5kUHJvZHVjdGlvbihhZGRlZE5vblVuaXRSdWxlc1Byb2R1Y3Rpb25OYW1lLCBhZGRlZE5vblVuaXRSdWxlc1Byb2R1Y3Rpb25zKTtcblxuICAgIGlmIChhZGRlZE5vblVuaXRSdWxlc1Byb2R1Y3Rpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGFkZGVkTm9uVW5pdFJ1bGVzUHJvZHVjdGlvblJ1bGVzID0gYWRkZWROb25Vbml0UnVsZXNQcm9kdWN0aW9uLmdldFJ1bGVzKCk7XG5cbiAgICAgIG5vblVuaXRSdWxlc1Byb2R1Y3Rpb24uY29uY2F0UnVsZXMoYWRkZWROb25Vbml0UnVsZXNQcm9kdWN0aW9uUnVsZXMpO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3Qgbm9uQ3ljbGljUHJvZHVjdGlvbnNMZW5ndGggPSBub25DeWNsaWNQcm9kdWN0aW9ucy5sZW5ndGgsXG4gICAgICAgIHN0YXJ0ID0gbm9uQ3ljbGljUHJvZHVjdGlvbnNMZW5ndGgsIC8vL1xuICAgICAgICBkZWxldGVDb3VudCA9IDA7XG5cbiAgYXJyYXlVdGlsLnNwbGljZShub25DeWNsaWNQcm9kdWN0aW9ucywgc3RhcnQsIGRlbGV0ZUNvdW50LCBub25Vbml0UnVsZXNQcm9kdWN0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHByb2R1Y3Rpb25zRnJvbUNvbXBvbmVudChjb21wb25lbnQsIHByb2R1Y3Rpb25zKSB7XG4gIHByb2R1Y3Rpb25zID0gY29tcG9uZW50Lm1hcFZlcnRpY2VzKGZ1bmN0aW9uKHZlcnRleCkge1xuICAgIGNvbnN0IHZlcnRleE5hbWUgPSB2ZXJ0ZXguZ2V0TmFtZSgpLFxuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lID0gdmVydGV4TmFtZSwgIC8vL1xuICAgICAgICAgIHByb2R1Y3Rpb24gPSBwYXJzZXJVdGlsLmZpbmRQcm9kdWN0aW9uKHByb2R1Y3Rpb25OYW1lLCBwcm9kdWN0aW9ucyk7XG5cbiAgICByZXR1cm4gcHJvZHVjdGlvbjtcbiAgfSk7XG5cbiAgcmV0dXJuIHByb2R1Y3Rpb25zO1xufVxuXG5mdW5jdGlvbiB1bml0UnVsZVByb2R1Y3Rpb25zRnJvbVByb2R1Y3Rpb25zKHByb2R1Y3Rpb25zKSB7XG4gIGNvbnN0IHVuaXRSdWxlUHJvZHVjdGlvbnMgPSBwcm9kdWN0aW9ucy5yZWR1Y2UoZnVuY3Rpb24odW5pdFJ1bGVQcm9kdWN0aW9ucywgcHJvZHVjdGlvbikge1xuICAgIGNvbnN0IG5hbWUgPSBwcm9kdWN0aW9uLmdldE5hbWUoKSxcbiAgICAgICAgICB1bml0UnVsZXNQcm9kdWN0aW9uID0gVW5pdFJ1bGVzUHJvZHVjdGlvbi5mcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uKSxcbiAgICAgICAgICB1bml0UnVsZXNQcm9kdWN0aW9uVW5pdFJ1bGVQcm9kdWN0aW9ucyA9IHVuaXRSdWxlc1Byb2R1Y3Rpb24ubWFwVW5pdFJ1bGVzKGZ1bmN0aW9uKHVuaXRSdWxlKSB7XG4gICAgICAgICAgICBjb25zdCB1bml0UnVsZXNQcm9kdWN0aW9uVW5pdFJ1bGVQcm9kdWN0aW9uID0gVW5pdFJ1bGVQcm9kdWN0aW9uLmZyb21OYW1lQW5kVW5pdFJ1bGUobmFtZSwgdW5pdFJ1bGUpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gdW5pdFJ1bGVzUHJvZHVjdGlvblVuaXRSdWxlUHJvZHVjdGlvbjtcbiAgICAgICAgICB9KTtcblxuICAgIHVuaXRSdWxlUHJvZHVjdGlvbnMgPSB1bml0UnVsZVByb2R1Y3Rpb25zLmNvbmNhdCh1bml0UnVsZXNQcm9kdWN0aW9uVW5pdFJ1bGVQcm9kdWN0aW9ucyk7XG5cbiAgICByZXR1cm4gdW5pdFJ1bGVQcm9kdWN0aW9ucztcbiAgfSwgW10pO1xuXG4gIHJldHVybiB1bml0UnVsZVByb2R1Y3Rpb25zO1xufVxuXG5mdW5jdGlvbiBub25Vbml0UnVsZXNQcm9kdWN0aW9uc0Zyb21Qcm9kdWN0aW9ucyhwcm9kdWN0aW9ucykge1xuICBjb25zdCBub25Vbml0UHJvZHVjdGlvbnMgPSBwcm9kdWN0aW9ucy5tYXAoZnVuY3Rpb24ocHJvZHVjdGlvbikge1xuICAgIGNvbnN0IG5vblVuaXRQcm9kdWN0aW9uID0gTm9uVW5pdFJ1bGVzUHJvZHVjdGlvbi5mcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uKTtcbiAgICBcbiAgICByZXR1cm4gbm9uVW5pdFByb2R1Y3Rpb247XG4gIH0pO1xuICBcbiAgcmV0dXJuIG5vblVuaXRQcm9kdWN0aW9ucztcbn1cblxuZnVuY3Rpb24gZmluZFVuaXRSdWxlUHJvZHVjdGlvbihwcm9kdWN0aW9uTmFtZSwgdW5pdFJ1bGVQcm9kdWN0aW9uTmFtZSwgdW5pdFJ1bGVQcm9kdWN0aW9ucykge1xuICBjb25zdCBmaXJzdFByb2R1Y3Rpb25OYW1lID0gcHJvZHVjdGlvbk5hbWUsIC8vL1xuICAgICAgICBzZWNvbmRQcm9kdWN0aW9uTmFtZSA9IHVuaXRSdWxlUHJvZHVjdGlvbk5hbWU7ICAvLy9cblxuICBsZXQgZm91bmRVbml0UnVsZVByb2R1Y3Rpb24gPSBudWxsO1xuXG4gIHVuaXRSdWxlUHJvZHVjdGlvbnMuc29tZShmdW5jdGlvbih1bml0UnVsZVByb2R1Y3Rpb24pIHtcbiAgICBjb25zdCB1bml0UnVsZVByb2R1Y3Rpb25Gb3VuZCA9IHVuaXRSdWxlUHJvZHVjdGlvbi5pc0ZvdW5kQnlQcm9kdWN0aW9uTmFtZXMoZmlyc3RQcm9kdWN0aW9uTmFtZSwgc2Vjb25kUHJvZHVjdGlvbk5hbWUpO1xuXG4gICAgaWYgKHVuaXRSdWxlUHJvZHVjdGlvbkZvdW5kKSB7XG4gICAgICBmb3VuZFVuaXRSdWxlUHJvZHVjdGlvbiA9IHVuaXRSdWxlUHJvZHVjdGlvbjtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCB1bml0UnVsZVByb2R1Y3Rpb24gPSBmb3VuZFVuaXRSdWxlUHJvZHVjdGlvbjsgLy8vXG5cbiAgcmV0dXJuIHVuaXRSdWxlUHJvZHVjdGlvbjtcbn0iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEN5Y2xlID0gcmVxdWlyZSgnLi9ncmFwaC9jeWNsZScpLFxuICAgICAgU3RhY2sgPSByZXF1aXJlKCcuL2dyYXBoL3N0YWNrJyksXG4gICAgICBWZXJ0ZXggPSByZXF1aXJlKCcuL2dyYXBoL3ZlcnRleCcpLFxuICAgICAgQ29tcG9uZW50ID0gcmVxdWlyZSgnLi9ncmFwaC9jb21wb25lbnQnKTtcblxuY2xhc3MgR3JhcGgge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy52ZXJ0ZXhtYXAgPSB7fTtcbiAgfVxuICBcbiAgZ2V0Q3ljbGVzKCkge1xuICAgIGNvbnN0IGNvbXBvbmVudHMgPSB0aGlzLmdldENvbXBvbmVudHMoKSxcbiAgICAgICAgICBjeWNsZXMgPSBjb21wb25lbnRzLnJlZHVjZShmdW5jdGlvbihjeWNsZXMsIGNvbXBvbmVudCkge1xuICAgICAgICAgICAgY29uc3QgY29tcG9uZW50Q3ljbGljID0gY29tcG9uZW50LmlzQ3ljbGljKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChjb21wb25lbnRDeWNsaWMpIHtcbiAgICAgICAgICAgICAgY29uc3QgY3ljbGUgPSBDeWNsZS5mcm9tQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBjeWNsZXMucHVzaChjeWNsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBjeWNsZXM7XG4gICAgICAgICAgfSwgW10pO1xuICAgIFxuICAgIHJldHVybiBjeWNsZXM7XG4gIH1cbiAgXG4gIGdldFZlcnRpY2VzKCkge1xuICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXModGhpcy52ZXJ0ZXhtYXApLFxuICAgICAgICAgIHZlcnRpY2VzID0gbmFtZXMubWFwKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHZlcnRleCA9IHRoaXMudmVydGV4bWFwW25hbWVdO1xuICBcbiAgICAgICAgICAgIHJldHVybiB2ZXJ0ZXg7XG4gICAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICBcbiAgICByZXR1cm4gdmVydGljZXM7ICAgICAgICBcbiAgfVxuXG4gIGdldENvbXBvbmVudHMoKSB7XG4gICAgY29uc3Qgc3RhY2sgPSBuZXcgU3RhY2soKSxcbiAgICAgICAgICB2ZXJ0aWNlcyA9IHRoaXMuZ2V0VmVydGljZXMoKSxcbiAgICAgICAgICBjb21wb25lbnRzID0gW107XG5cbiAgICBsZXQgaW5kZXggPSAwO1xuXG4gICAgZnVuY3Rpb24gc3Ryb25nbHlDb25uZWN0VmVydGV4KHZlcnRleCkge1xuICAgICAgY29uc3QgbG93ZXN0SW5kZXggPSBpbmRleDsgIC8vL1xuXG4gICAgICB2ZXJ0ZXguc2V0SW5kZXgoaW5kZXgpO1xuXG4gICAgICB2ZXJ0ZXguc2V0TG93ZXN0SW5kZXgobG93ZXN0SW5kZXgpO1xuXG4gICAgICBpbmRleCsrO1xuXG4gICAgICBzdGFjay5wdXNoKHZlcnRleCk7XG5cbiAgICAgIGNvbnN0IHN1Y2Nlc3NvclZlcnRpY2VzID0gdmVydGV4LmdldFN1Y2Nlc3NvclZlcnRpY2VzKCk7XG5cbiAgICAgIHN1Y2Nlc3NvclZlcnRpY2VzLmZvckVhY2goZnVuY3Rpb24oc3VjY2Vzc29yVmVydGV4KSB7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3NvclZlcnRleFVuaW5kZXhlZCA9IHN1Y2Nlc3NvclZlcnRleC5pc1VuaW5kZXhlZCgpLFxuICAgICAgICAgICAgICBzdWNjZXNzb3JWZXJ0ZXhOb3RTdHJvbmdseUNvbm5lY3RlZCA9IHN1Y2Nlc3NvclZlcnRleFVuaW5kZXhlZDsgIC8vL1xuXG4gICAgICAgIGlmIChzdWNjZXNzb3JWZXJ0ZXhOb3RTdHJvbmdseUNvbm5lY3RlZCkge1xuICAgICAgICAgIHN0cm9uZ2x5Q29ubmVjdFZlcnRleChzdWNjZXNzb3JWZXJ0ZXgpO1xuXG4gICAgICAgICAgY29uc3Qgc3VjY2Vzc29yVmVydGV4TG93ZXN0SW5kZXggPSBzdWNjZXNzb3JWZXJ0ZXguZ2V0TG93ZXN0SW5kZXgoKTtcblxuICAgICAgICAgIHZlcnRleC51cGRhdGVMb3dlc3RJbmRleChzdWNjZXNzb3JWZXJ0ZXhMb3dlc3RJbmRleCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3Qgc3VjY2Vzc29yVmVydGV4U3RhY2tlZCA9IHN1Y2Nlc3NvclZlcnRleC5pc1N0YWNrZWQoKTtcblxuICAgICAgICAgIGlmIChzdWNjZXNzb3JWZXJ0ZXhTdGFja2VkKSB7XG4gICAgICAgICAgICBjb25zdCBzdWNjZXNzb3JWZXJ0ZXhJbmRleCA9IHN1Y2Nlc3NvclZlcnRleC5nZXRJbmRleCgpO1xuXG4gICAgICAgICAgICB2ZXJ0ZXgudXBkYXRlTG93ZXN0SW5kZXgoc3VjY2Vzc29yVmVydGV4SW5kZXgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHZlcnRleExvd2VzdCA9IHZlcnRleC5pc0xvd2VzdCgpO1xuXG4gICAgICBpZiAodmVydGV4TG93ZXN0KSB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IENvbXBvbmVudC5mcm9tU3RhY2tBbmRWZXJ0ZXgoc3RhY2ssIHZlcnRleCk7XG5cbiAgICAgICAgY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmVydGljZXMuZm9yRWFjaChmdW5jdGlvbih2ZXJ0ZXgpIHtcbiAgICAgIGNvbnN0IHZlcnRleFVuaW5kZXhlZCA9IHZlcnRleC5pc1VuaW5kZXhlZCgpO1xuXG4gICAgICBpZiAodmVydGV4VW5pbmRleGVkKSB7XG4gICAgICAgIHN0cm9uZ2x5Q29ubmVjdFZlcnRleCh2ZXJ0ZXgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gIH1cblxuICBhZGRWZXJ0ZXgobmFtZSwgZGVzY2VuZGFudFZlcnRleE5hbWVzKSB7XG4gICAgbGV0IHN1Y2Nlc3NvclZlcnRpY2VzID0gZGVzY2VuZGFudFZlcnRleE5hbWVzLm1hcChmdW5jdGlvbihkZXNjZW5kYW50VmVydGV4TmFtZSkge1xuICAgICAgY29uc3Qgc3VjY2Vzc29yVmVydGV4TmFtZSA9IGRlc2NlbmRhbnRWZXJ0ZXhOYW1lOyAgLy8vXG5cbiAgICAgIGxldCBzdWNjZXNzb3JWZXJ0ZXggPSB0aGlzLnZlcnRleG1hcFtzdWNjZXNzb3JWZXJ0ZXhOYW1lXTtcblxuICAgICAgaWYgKHN1Y2Nlc3NvclZlcnRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHN1Y2Nlc3NvclZlcnRleCA9IFZlcnRleC5mcm9tTmFtZShzdWNjZXNzb3JWZXJ0ZXhOYW1lKTtcblxuICAgICAgICB0aGlzLnZlcnRleG1hcFtzdWNjZXNzb3JWZXJ0ZXhOYW1lXSA9IHN1Y2Nlc3NvclZlcnRleDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN1Y2Nlc3NvclZlcnRleDtcbiAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgbGV0IHZlcnRleCA9IHRoaXMudmVydGV4bWFwW25hbWVdO1xuXG4gICAgaWYgKHZlcnRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB2ZXJ0ZXggPSBWZXJ0ZXguZnJvbU5hbWUobmFtZSk7XG5cbiAgICAgIHRoaXMudmVydGV4bWFwW25hbWVdID0gdmVydGV4O1xuICAgIH1cblxuICAgIHN1Y2Nlc3NvclZlcnRpY2VzID0gc3VjY2Vzc29yVmVydGljZXMuY29uY2F0KFtdKS5yZXZlcnNlKCk7IC8vL1xuXG4gICAgdmVydGV4LnNldFN1Y2Nlc3NvclZlcnRpY2VzKHN1Y2Nlc3NvclZlcnRpY2VzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVW5pdFJ1bGVzUHJvZHVjdGlvbnModW5pdFJ1bGVzUHJvZHVjdGlvbnMpIHtcbiAgICBjb25zdCBncmFwaCA9IG5ldyBHcmFwaCgpO1xuICBcbiAgICB1bml0UnVsZXNQcm9kdWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKHVuaXRSdWxlc1Byb2R1Y3Rpb24pIHtcbiAgICAgIGNvbnN0IHByb2R1Y3Rpb25OYW1lID0gdW5pdFJ1bGVzUHJvZHVjdGlvbi5nZXROYW1lKCksXG4gICAgICAgICAgICBwcm9kdWN0aW9uTmFtZXMgPSB1bml0UnVsZXNQcm9kdWN0aW9uLmdldFByb2R1Y3Rpb25OYW1lcygpLFxuICAgICAgICAgICAgdmVydGV4TmFtZSA9IHByb2R1Y3Rpb25OYW1lLCAgLy8vXG4gICAgICAgICAgICBkZXNjZW5kYW50VmVydGV4TmFtZXMgPSBwcm9kdWN0aW9uTmFtZXM7IC8vL1xuICBcbiAgICAgIGdyYXBoLmFkZFZlcnRleCh2ZXJ0ZXhOYW1lLCBkZXNjZW5kYW50VmVydGV4TmFtZXMpO1xuICAgIH0pO1xuICBcbiAgICByZXR1cm4gZ3JhcGg7XG4gIH0gIFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdyYXBoO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcykge1xuICAgIHRoaXMudmVydGljZXMgPSB2ZXJ0aWNlcztcbiAgfVxuICBcbiAgZ2V0VmVydGljZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGljZXM7XG4gIH1cblxuICBnZXRGaXJzdFZlcnRleCgpIHtcbiAgICBjb25zdCBmaXJzdFZlcnRleCA9IGZpcnN0KHRoaXMudmVydGljZXMpO1xuICAgIFxuICAgIHJldHVybiBmaXJzdFZlcnRleDtcbiAgfVxuICBcbiAgaXNDeWNsaWMoKSB7XG4gICAgY29uc3QgdmVydGljZXNMZW5ndGggPSB0aGlzLnZlcnRpY2VzLmxlbmd0aCxcbiAgICAgICAgICBjeWNsaWMgPSAodmVydGljZXNMZW5ndGggPiAxKTsgIC8vL1xuICAgIFxuICAgIHJldHVybiBjeWNsaWM7XG4gIH1cblxuICBpc05vbkN5Y2xpYygpIHtcbiAgICBjb25zdCBjeWNsaWMgPSB0aGlzLmlzQ3ljbGljKCksXG4gICAgICAgICAgbm9uQ3ljbGljID0gIWN5Y2xpYztcbiAgICBcbiAgICByZXR1cm4gbm9uQ3ljbGljO1xuICB9XG4gIFxuICBtYXBWZXJ0aWNlcyhjYWxsYmFjaykgeyByZXR1cm4gdGhpcy52ZXJ0aWNlcy5tYXAoY2FsbGJhY2spOyB9XG4gIFxuICBzdGF0aWMgZnJvbVN0YWNrQW5kVmVydGV4KHN0YWNrLCB2ZXJ0ZXgpIHtcbiAgICBjb25zdCBzdGFja1ZlcnRpY2VzID0gW107XG4gICAgXG4gICAgbGV0IHN0YWNrVmVydGV4O1xuXG4gICAgZG8ge1xuICAgICAgc3RhY2tWZXJ0ZXggPSBzdGFjay5wb3AoKTtcblxuICAgICAgc3RhY2tWZXJ0aWNlcy5wdXNoKHN0YWNrVmVydGV4KVxuICAgIH0gd2hpbGUgKHN0YWNrVmVydGV4ICE9PSB2ZXJ0ZXgpO1xuICAgIFxuICAgIGNvbnN0IHZlcnRpY2VzID0gc3RhY2tWZXJ0aWNlcywgLy8vIFxuICAgICAgICAgIGNvbXBvbmVudCA9IG5ldyBDb21wb25lbnQodmVydGljZXMpO1xuXG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudDtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIEN5Y2xlIHtcbiAgY29uc3RydWN0b3IodmVydGljZXMpIHtcbiAgICB0aGlzLnZlcnRpY2VzID0gdmVydGljZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICBjb25zdCB2ZXJ0aWNlcyA9IGNvbXBvbmVudC5nZXRWZXJ0aWNlcygpLFxuICAgICAgICAgIGN5Y2xlID0gbmV3IEN5Y2xlKHZlcnRpY2VzKTtcbiAgICBcbiAgICByZXR1cm4gY3ljbGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDeWNsZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgU3RhY2sge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnZlcnRpY2VzID0gW107XG4gIH1cbiAgXG4gIHBvcCgpIHtcbiAgICBjb25zdCB2ZXJ0ZXggPSB0aGlzLnZlcnRpY2VzLnBvcCgpLFxuICAgICAgICAgIHN0YWNrZWQgPSBmYWxzZTtcbiAgICBcbiAgICB2ZXJ0ZXguc2V0U3RhY2tlZChzdGFja2VkKTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG4gIFxuICBwdXNoKHZlcnRleCkge1xuICAgIGNvbnN0IHN0YWNrZWQgPSB0cnVlO1xuICAgIFxuICAgIHZlcnRleC5zZXRTdGFja2VkKHN0YWNrZWQpO1xuICAgIFxuICAgIHRoaXMudmVydGljZXMucHVzaCh2ZXJ0ZXgpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU3RhY2s7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFZlcnRleCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGluZGV4LCBzdGFja2VkLCB2aXNpdGVkLCBsb3dlc3RJbmRleCwgc3VjY2Vzc29yVmVydGljZXMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICB0aGlzLnN0YWNrZWQgPSBzdGFja2VkO1xuICAgIHRoaXMudmlzaXRlZCA9IHZpc2l0ZWQ7XG4gICAgdGhpcy5sb3dlc3RJbmRleCA9IGxvd2VzdEluZGV4O1xuICAgIHRoaXMuc3VjY2Vzc29yVmVydGljZXMgPSBzdWNjZXNzb3JWZXJ0aWNlcztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLmluZGV4O1xuICB9XG5cbiAgaXNTdGFja2VkKCkge1xuICAgIHJldHVybiB0aGlzLnN0YWNrZWQ7XG4gIH1cblxuICBpc1Zpc2l0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMudmlzaXRlZDtcbiAgfVxuXG4gIGdldExvd2VzdEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLmxvd2VzdEluZGV4O1xuICB9XG5cbiAgZ2V0U3VjY2Vzc29yVmVydGljZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VjY2Vzc29yVmVydGljZXM7XG4gIH1cbiAgXG4gIGlzVW5pbmRleGVkKCkge1xuICAgIGNvbnN0IHVuaW5kZXhlZCA9ICh0aGlzLmluZGV4IDwgMCk7IC8vL1xuICAgIFxuICAgIHJldHVybiB1bmluZGV4ZWQ7XG4gIH1cbiAgXG4gIGlzTG93ZXN0KCkge1xuICAgIGNvbnN0IGxvd2VzdCA9ICh0aGlzLmluZGV4ID09PSB0aGlzLmxvd2VzdEluZGV4KTsgLy8vXG4gICAgXG4gICAgcmV0dXJuIGxvd2VzdDtcbiAgfVxuXG4gIHNldEluZGV4KGluZGV4KSB7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICB9XG5cbiAgc2V0U3RhY2tlZChzdGFja2VkKSB7XG4gICAgdGhpcy5zdGFja2VkID0gc3RhY2tlZDtcbiAgfVxuXG4gIHNldFZpc2l0ZWQodmlzaXRlZCkge1xuICAgIHRoaXMudmlzaXRlZCA9IHZpc2l0ZWQ7XG4gIH1cbiAgXG4gIHNldExvd2VzdEluZGV4KGxvd2VzdEluZGV4KSB7XG4gICAgdGhpcy5sb3dlc3RJbmRleCA9IGxvd2VzdEluZGV4O1xuICB9XG5cbiAgc2V0U3VjY2Vzc29yVmVydGljZXMoc3VjY2Vzc29yVmVydGljZXMpIHtcbiAgICB0aGlzLnN1Y2Nlc3NvclZlcnRpY2VzID0gIHN1Y2Nlc3NvclZlcnRpY2VzO1xuICB9XG4gIFxuICB1cGRhdGVMb3dlc3RJbmRleChsb3dlc3RJbmRleCkge1xuICAgIGlmIChsb3dlc3RJbmRleCA8IHRoaXMubG93ZXN0SW5kZXgpIHtcbiAgICAgIHRoaXMubG93ZXN0SW5kZXggPSBsb3dlc3RJbmRleDtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWUobmFtZSkge1xuICAgIGNvbnN0IGluZGV4ID0gLTEsXG4gICAgICAgICAgc3RhY2tlZCA9IGZhbHNlLFxuICAgICAgICAgIHZpc2l0ZWQgPSBmYWxzZSxcbiAgICAgICAgICBsb3dlc3RJbmRleCA9IC0xLFxuICAgICAgICAgIHN1Y2Nlc3NvclZlcnRpY2VzID0gW10sXG4gICAgICAgICAgdmVydGV4ID0gbmV3IFZlcnRleChuYW1lLCBpbmRleCwgc3RhY2tlZCwgdmlzaXRlZCwgbG93ZXN0SW5kZXgsIHN1Y2Nlc3NvclZlcnRpY2VzKTtcblxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWZXJ0ZXg7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJpZ2h0UmVjdXJzaXZlUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9yaWdodFJlY3Vyc2l2ZScpLFxuICAgICAgTm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vbm9uTGVmdFJlY3Vyc2l2ZScpLFxuICAgICAgTm9uSW1wbGljaXRseUxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL25vbkltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlJyk7XG5cbmNsYXNzIGxlZnRSZWN1cnNpb24ge1xuICBzdGF0aWMgZWxpbWluYXRlKHByb2R1Y3Rpb25zKSB7XG4gICAgY29uc3Qgbm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb25zID0gW10sXG4gICAgICAgICAgcmlnaHRSZWN1cnNpdmVQcm9kdWN0aW9ucyA9IFtdO1xuXG4gICAgcHJvZHVjdGlvbnMuZm9yRWFjaChmdW5jdGlvbihwcm9kdWN0aW9uLCBpbmRleCkge1xuICAgICAgY29uc3QgYmVnaW4gPSAwLFxuICAgICAgICAgICAgZW5kID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgIHByZXZpb3VzTm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb25zID0gbm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb25zLnNsaWNlKGJlZ2luLCBlbmQpLFxuICAgICAgICAgICAgcHJldmlvdXNQcm9kdWN0aW9ucyA9IHByZXZpb3VzTm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb25zLCAgLy8vXG4gICAgICAgICAgICBwcm9kdWN0aW9uSW1wbGljaXRseUxlZnRSZWN1cnNpdmUgPSBwcm9kdWN0aW9uLmlzSW1wbGljaXRseUxlZnRSZWN1cnNpdmUocHJldmlvdXNQcm9kdWN0aW9ucyk7XG5cbiAgICAgIGlmIChwcm9kdWN0aW9uSW1wbGljaXRseUxlZnRSZWN1cnNpdmUpIHtcbiAgICAgICAgY29uc3Qgbm9uSW1wbGljaXRseUxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uID0gTm9uSW1wbGljaXRseUxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uLmZyb21Qcm9kdWN0aW9uQW5kUHJldmlvdXNQcm9kdWN0aW9ucyhwcm9kdWN0aW9uLCBwcmV2aW91c1Byb2R1Y3Rpb25zKTtcblxuICAgICAgICBwcm9kdWN0aW9uID0gbm9uSW1wbGljaXRseUxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uOyAgLy8vXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb2R1Y3Rpb25MZWZ0UmVjdXJzaXZlID0gcHJvZHVjdGlvbi5pc0xlZnRSZWN1cnNpdmUoKTtcblxuICAgICAgaWYgKHByb2R1Y3Rpb25MZWZ0UmVjdXJzaXZlKSB7XG4gICAgICAgIGNvbnN0IG5vbkxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uID0gTm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24uZnJvbVByb2R1Y3Rpb24ocHJvZHVjdGlvbiksXG4gICAgICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlUHJvZHVjdGlvbiA9IFJpZ2h0UmVjdXJzaXZlUHJvZHVjdGlvbi5mcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uKTtcblxuICAgICAgICBub25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbnMucHVzaChub25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbik7XG5cbiAgICAgICAgcmlnaHRSZWN1cnNpdmVQcm9kdWN0aW9ucy5wdXNoKHJpZ2h0UmVjdXJzaXZlUHJvZHVjdGlvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBub25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbiA9IHByb2R1Y3Rpb247ICAvLy9cblxuICAgICAgICBub25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbnMucHVzaChub25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwcm9kdWN0aW9ucyA9IFtdLmNvbmNhdChub25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbnMpLmNvbmNhdChyaWdodFJlY3Vyc2l2ZVByb2R1Y3Rpb25zKTtcblxuICAgIHJldHVybiBwcm9kdWN0aW9ucztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxlZnRSZWN1cnNpb247XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vcnVsZScpLFxuICAgICAgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9wcm9kdWN0aW9uJyk7XG5cbmNsYXNzIE5vbkltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBzdGF0aWMgZnJvbVByb2R1Y3Rpb25BbmRQcmV2aW91c1Byb2R1Y3Rpb25zKHByb2R1Y3Rpb24sIHByZXZpb3VzUHJvZHVjdGlvbnMpIHtcbiAgICBjb25zdCBwcm9kdWN0aW9uTmFtZSA9IHByb2R1Y3Rpb24uZ2V0TmFtZSgpLFxuICAgICAgICAgIHByb2R1Y3Rpb25Ob2RlID0gcHJvZHVjdGlvbi5nZXROb2RlKCksXG4gICAgICAgICAgbmFtZSA9IHByb2R1Y3Rpb25OYW1lLCAgLy8vXG4gICAgICAgICAgcnVsZXMgPSBydWxlc0Zyb21Qcm9kdWN0aW9uQW5kUHJldmlvdXNQcm9kdWN0aW9ucyhwcm9kdWN0aW9uLCBwcmV2aW91c1Byb2R1Y3Rpb25zKSxcbiAgICAgICAgICBOb2RlID0gcHJvZHVjdGlvbk5vZGUsICAvLy9cbiAgICAgICAgICBub25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24gPSBuZXcgTm9uSW1wbGljaXRseUxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uKG5hbWUsIHJ1bGVzLCBOb2RlKTtcblxuICAgIHJldHVybiBub25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb247XG5cbmZ1bmN0aW9uIHJ1bGVzRnJvbVByb2R1Y3Rpb25BbmRQcmV2aW91c1Byb2R1Y3Rpb25zKHByb2R1Y3Rpb24sIHByZXZpb3VzUHJvZHVjdGlvbnMpIHtcbiAgY29uc3QgcHJvZHVjdGlvblJ1bGVzID0gcHJvZHVjdGlvbi5nZXRSdWxlcygpLFxuICAgICAgICBydWxlcyA9IHByb2R1Y3Rpb25SdWxlcy5yZWR1Y2UoZnVuY3Rpb24ocnVsZXMsIHByb2R1Y3Rpb25SdWxlKSB7XG4gICAgICAgICAgY29uc3QgcHJvZHVjdGlvblJ1bGVJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVByZXZpb3VzUHJvZHVjdGlvbiA9IHByb2R1Y3Rpb25SdWxlLmltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUHJldmlvdXNQcm9kdWN0aW9uKHByZXZpb3VzUHJvZHVjdGlvbnMpO1xuXG4gICAgICAgICAgaWYgKHByb2R1Y3Rpb25SdWxlSW1wbGljaXRseUxlZnRSZWN1cnNpdmVQcmV2aW91c1Byb2R1Y3Rpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzUHJvZHVjdGlvbiA9IHByb2R1Y3Rpb25SdWxlSW1wbGljaXRseUxlZnRSZWN1cnNpdmVQcmV2aW91c1Byb2R1Y3Rpb24sIC8vL1xuICAgICAgICAgICAgICAgICAgcnVsZXNXaXRoUHJldmlvdXNQcm9kdWN0aW9uSW5saW5lRnJvbVByb2R1Y3Rpb25JbmxpbmUgPSBydWxlc1dpdGhQcmV2aW91c1Byb2R1Y3Rpb25JbmxpbmVGcm9tUHJvZHVjdGlvblJ1bGVBbmRQcmV2aW91c1Byb2R1Y3Rpb24ocHJvZHVjdGlvblJ1bGUsIHByZXZpb3VzUHJvZHVjdGlvbik7XG5cbiAgICAgICAgICAgIHJ1bGVzID0gcnVsZXMuY29uY2F0KHJ1bGVzV2l0aFByZXZpb3VzUHJvZHVjdGlvbklubGluZUZyb21Qcm9kdWN0aW9uSW5saW5lKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcnVsZSA9IHByb2R1Y3Rpb25SdWxlO1xuXG4gICAgICAgICAgICBydWxlcy5wdXNoKHJ1bGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBydWxlcztcbiAgICAgICAgfSwgW10pO1xuXG4gIHJldHVybiBydWxlcztcbn1cblxuZnVuY3Rpb24gcnVsZXNXaXRoUHJldmlvdXNQcm9kdWN0aW9uSW5saW5lRnJvbVByb2R1Y3Rpb25SdWxlQW5kUHJldmlvdXNQcm9kdWN0aW9uKHByb2R1Y3Rpb25SdWxlLCBwcmV2aW91c1Byb2R1Y3Rpb24pIHtcbiAgY29uc3QgcHJldmlvdXNQcm9kdWN0aW9uUnVsZXMgPSBwcmV2aW91c1Byb2R1Y3Rpb24uZ2V0UnVsZXMoKSxcbiAgICAgICAgcnVsZXNXaXRoUHJldmlvdXNQcm9kdWN0aW9uSW5saW5lID0gcHJldmlvdXNQcm9kdWN0aW9uUnVsZXMubWFwKGZ1bmN0aW9uKHByZXZpb3VzUHJvZHVjdGlvblJ1bGUpIHtcbiAgICAgICAgICBjb25zdCBwcmV2aW91c1Byb2R1Y3Rpb25SdWxlUGFydHMgPSBwcmV2aW91c1Byb2R1Y3Rpb25SdWxlLmdldFBhcnRzKCksXG4gICAgICAgICAgICAgICAgcHJvZHVjdGlvblJ1bGVBbGxCdXRGaXJzdFBhcnRzID0gcHJvZHVjdGlvblJ1bGUuZ2V0QWxsQnV0Rmlyc3RQYXJ0cygpLFxuICAgICAgICAgICAgICAgIHJ1bGVXaXRoUHJldmlvdXNQcm9kdWN0aW9uSW5saW5lUGFydHMgPSBbXS5jb25jYXQocHJldmlvdXNQcm9kdWN0aW9uUnVsZVBhcnRzKS5jb25jYXQocHJvZHVjdGlvblJ1bGVBbGxCdXRGaXJzdFBhcnRzKSxcbiAgICAgICAgICAgICAgICBydWxlV2l0aFByZXZpb3VzUHJvZHVjdGlvbklubGluZSA9IG5ldyBSdWxlKHJ1bGVXaXRoUHJldmlvdXNQcm9kdWN0aW9uSW5saW5lUGFydHMpO1xuXG4gICAgICAgICAgcmV0dXJuIHJ1bGVXaXRoUHJldmlvdXNQcm9kdWN0aW9uSW5saW5lO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gcnVsZXNXaXRoUHJldmlvdXNQcm9kdWN0aW9uSW5saW5lO1xufVxuXG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vcnVsZScpLFxuICAgICAgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9wcm9kdWN0aW9uJyksXG4gICAgICBSaWdodFJlY3Vyc2l2ZVByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi9wcm9kdWN0aW9uL3JpZ2h0UmVjdXJzaXZlJyk7XG5cbmNsYXNzIE5vbkxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uIGV4dGVuZHMgUHJvZHVjdGlvbiB7XG4gIHN0YXRpYyBmcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uKSB7XG4gICAgY29uc3QgcHJvZHVjdGlvbk5hbWUgPSBwcm9kdWN0aW9uLmdldE5hbWUoKSxcbiAgICAgICAgICBwcm9kdWN0aW9uTm9kZSA9IHByb2R1Y3Rpb24uZ2V0Tm9kZSgpLFxuICAgICAgICAgIG5hbWUgPSBwcm9kdWN0aW9uTmFtZSwgIC8vL1xuICAgICAgICAgIHJ1bGVzID0gcnVsZXNGcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uKSxcbiAgICAgICAgICBOb2RlID0gcHJvZHVjdGlvbk5vZGUsICAvLy9cbiAgICAgICAgICBub25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbiA9IG5ldyBQcm9kdWN0aW9uKG5hbWUsIHJ1bGVzLCBOb2RlKTtcbiAgICBcbiAgICByZXR1cm4gbm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbjtcblxuZnVuY3Rpb24gcnVsZXNGcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uKSB7XG4gIGNvbnN0IHByb2R1Y3Rpb25Ob25MZWZ0UmVjdXJzaXZlUnVsZXMgPSBwcm9kdWN0aW9uLmdldE5vbkxlZnRSZWN1cnNpdmVSdWxlcygpLFxuICAgICAgICBydWxlcyA9IHByb2R1Y3Rpb25Ob25MZWZ0UmVjdXJzaXZlUnVsZXMubWFwKGZ1bmN0aW9uKHByb2R1Y3Rpb25Ob25MZWZ0UmVjdXJzaXZlUnVsZSkge1xuICAgICAgICAgIGNvbnN0IHByb2R1Y3Rpb25Ob25MZWZ0UmVjdXJzaXZlUnVsZVBhcnRzID0gcHJvZHVjdGlvbk5vbkxlZnRSZWN1cnNpdmVSdWxlLmdldFBhcnRzKCksXG4gICAgICAgICAgICAgICAgcHJvZHVjdGlvbk5hbWVQYXJ0ID0gUmlnaHRSZWN1cnNpdmVQcm9kdWN0aW9uLnByb2R1Y3Rpb25OYW1lUGFydEZyb21Qcm9kdWN0aW9uKHByb2R1Y3Rpb24pLFxuICAgICAgICAgICAgICAgIHBhcnRzID0gW10uY29uY2F0KHByb2R1Y3Rpb25Ob25MZWZ0UmVjdXJzaXZlUnVsZVBhcnRzKS5jb25jYXQocHJvZHVjdGlvbk5hbWVQYXJ0KSxcbiAgICAgICAgICAgICAgICBydWxlID0gbmV3IFJ1bGUocGFydHMpO1xuICBcbiAgICAgICAgICByZXR1cm4gcnVsZTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHJ1bGVzO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBOb25Vbml0UnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUvbm9uVW5pdCcpLFxuICAgICAgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9wcm9kdWN0aW9uJyk7XG5cbmNsYXNzIE5vblVuaXRSdWxlc1Byb2R1Y3Rpb24gZXh0ZW5kcyBQcm9kdWN0aW9uIHtcbiAgc3RhdGljIGZyb21Qcm9kdWN0aW9uKHByb2R1Y3Rpb24pIHtcbiAgICBjb25zdCBub25Vbml0UnVsZXMgPSBub25Vbml0UnVsZXNGcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uKSxcbiAgICAgICAgICBuYW1lID0gcHJvZHVjdGlvbi5nZXROYW1lKCksXG4gICAgICAgICAgcnVsZXMgPSBub25Vbml0UnVsZXMsIC8vL1xuICAgICAgICAgIE5vZGUgPSBwcm9kdWN0aW9uLmdldE5vZGUoKSxcbiAgICAgICAgICBub25Vbml0UnVsZXNQcm9kdWN0aW9uID0gbmV3IE5vblVuaXRSdWxlc1Byb2R1Y3Rpb24obmFtZSwgcnVsZXMsIE5vZGUpO1xuXG4gICAgcmV0dXJuIG5vblVuaXRSdWxlc1Byb2R1Y3Rpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb25Vbml0UnVsZXNQcm9kdWN0aW9uO1xuXG5mdW5jdGlvbiBub25Vbml0UnVsZXNGcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uKSB7XG4gIGNvbnN0IHJ1bGVzID0gcHJvZHVjdGlvbi5nZXRSdWxlcygpLFxuICAgICAgICBub25Vbml0UnVsZXMgPSBydWxlcy5yZWR1Y2UoZnVuY3Rpb24obm9uVW5pdFJ1bGVzLCBydWxlKSB7XG4gICAgICAgICAgY29uc3Qgbm9uVW5pdFJ1bGUgPSBOb25Vbml0UnVsZS5mcm9tUnVsZShydWxlKTtcblxuICAgICAgICAgIGlmIChub25Vbml0UnVsZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgcnVsZSA9IG5vblVuaXRSdWxlO1xuXG4gICAgICAgICAgICBub25Vbml0UnVsZXMucHVzaChub25Vbml0UnVsZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIG5vblVuaXRSdWxlcztcbiAgICAgICAgfSwgW10pO1xuXG4gIHJldHVybiBub25Vbml0UnVsZXM7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vcnVsZScpLFxuICAgICAgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9wcm9kdWN0aW9uJyksXG4gICAgICBFcHNpbG9uUGFydCA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9wYXJ0L2Vwc2lsb24nKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyksXG4gICAgICBQcm9kdWN0aW9uTmFtZVBhcnQgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vcGFydC9wcm9kdWN0aW9uTmFtZScpO1xuXG5jbGFzcyBSaWdodFJlY3Vyc2l2ZVByb2R1Y3Rpb24gZXh0ZW5kcyBQcm9kdWN0aW9uIHtcbiAgc3RhdGljIHByb2R1Y3Rpb25OYW1lUGFydEZyb21Qcm9kdWN0aW9uKHByb2R1Y3Rpb24pIHtcbiAgICBjb25zdCBwcm9kdWN0aW9uTmFtZSA9IHByb2R1Y3Rpb24uZ2V0TmFtZSgpLFxuICAgICAgICAgIG5hbWUgPSBwcm9kdWN0aW9uTmFtZSwgLy8vXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlID0gZmFsc2UsIC8vL1xuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUGFydCA9IG5ldyBQcm9kdWN0aW9uTmFtZVBhcnQobmFtZSwgbm9XaGl0ZXNwYWNlKTtcbiAgICBcbiAgICByZXR1cm4gcHJvZHVjdGlvbk5hbWVQYXJ0O1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVByb2R1Y3Rpb24ocHJvZHVjdGlvbikge1xuICAgIGNvbnN0IHByb2R1Y3Rpb25OYW1lID0gcHJvZHVjdGlvbi5nZXROYW1lKCksXG4gICAgICAgICAgbmFtZSA9IHByb2R1Y3Rpb25OYW1lLCAvLy9cbiAgICAgICAgICBydWxlcyA9IHJ1bGVzRnJvbVByb2R1Y3Rpb24ocHJvZHVjdGlvbiksXG4gICAgICAgICAgTm9kZSA9IE5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgcmlnaHRSZWN1cnNpdmVQcm9kdWN0aW9uID0gbmV3IFByb2R1Y3Rpb24obmFtZSwgcnVsZXMsIE5vZGUpO1xuICAgIFxuICAgIHJldHVybiByaWdodFJlY3Vyc2l2ZVByb2R1Y3Rpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSaWdodFJlY3Vyc2l2ZVByb2R1Y3Rpb247XG5cbmZ1bmN0aW9uIHJ1bGVzRnJvbVByb2R1Y3Rpb24ocHJvZHVjdGlvbikge1xuICBjb25zdCByaWdodFJlY3Vyc2l2ZVJ1bGVzID0gcmlnaHRSZWN1cnNpdmVSdWxlc0Zyb21Qcm9kdWN0aW9uKHByb2R1Y3Rpb24pLFxuICAgICAgICBlcHNpbG9uUGFydCA9IG5ldyBFcHNpbG9uUGFydCgpLFxuICAgICAgICBlcHNpbG9uUGFydHMgPSBbXG4gICAgICAgICAgZXBzaWxvblBhcnRcbiAgICAgICAgXSxcbiAgICAgICAgZXBzaWxvblBhcnRSdWxlID0gbmV3IFJ1bGUoZXBzaWxvblBhcnRzKSxcbiAgICAgICAgcnVsZXMgPSBbXS5jb25jYXQocmlnaHRSZWN1cnNpdmVSdWxlcykuY29uY2F0KGVwc2lsb25QYXJ0UnVsZSk7XG5cbiAgcmV0dXJuIHJ1bGVzO1xufVxuXG5mdW5jdGlvbiByaWdodFJlY3Vyc2l2ZVJ1bGVzRnJvbVByb2R1Y3Rpb24ocHJvZHVjdGlvbikge1xuICBjb25zdCBwcm9kdWN0aW9uTGVmdFJlY3Vyc2l2ZVJ1bGVzID0gcHJvZHVjdGlvbi5nZXRMZWZ0UmVjdXJzaXZlUnVsZXMoKSxcbiAgICAgICAgcmlnaHRSZWN1cnNpdmVSdWxlcyA9IHByb2R1Y3Rpb25MZWZ0UmVjdXJzaXZlUnVsZXMubWFwKGZ1bmN0aW9uKHByb2R1Y3Rpb25MZWZ0UmVjdXJzaXZlUnVsZSkge1xuICAgICAgICAgIGNvbnN0IHByb2R1Y3Rpb25MZWZ0UmVjdXJzaXZlUnVsZUFsbEJ1dEZpcnN0UGFydHMgPSBwcm9kdWN0aW9uTGVmdFJlY3Vyc2l2ZVJ1bGUuZ2V0QWxsQnV0Rmlyc3RQYXJ0cygpLFxuICAgICAgICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUGFydCA9IFJpZ2h0UmVjdXJzaXZlUHJvZHVjdGlvbi5wcm9kdWN0aW9uTmFtZVBhcnRGcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uKSxcbiAgICAgICAgICAgICAgICByaWdodFJlY3Vyc2l2ZVJ1bGVQYXJ0cyA9IFtdLmNvbmNhdChwcm9kdWN0aW9uTGVmdFJlY3Vyc2l2ZVJ1bGVBbGxCdXRGaXJzdFBhcnRzKS5jb25jYXQocHJvZHVjdGlvbk5hbWVQYXJ0KSxcbiAgICAgICAgICAgICAgICByaWdodFJlY3Vyc2l2ZVJ1bGUgPSBuZXcgUnVsZShyaWdodFJlY3Vyc2l2ZVJ1bGVQYXJ0cyk7XG5cbiAgICAgICAgICByZXR1cm4gcmlnaHRSZWN1cnNpdmVSdWxlO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gcmlnaHRSZWN1cnNpdmVSdWxlcztcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVW5pdFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlL3VuaXQnKSxcbiAgICAgIFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi8uLi9jb21tb24vcHJvZHVjdGlvbicpIDtcblxuY2xhc3MgVW5pdFJ1bGVQcm9kdWN0aW9uIGV4dGVuZHMgUHJvZHVjdGlvbiB7XG4gIGdldFVuaXRSdWxlUHJvZHVjdGlvbk5hbWUoKSB7XG4gICAgY29uc3QgcnVsZXMgPSB0aGlzLmdldFJ1bGVzKCksXG4gICAgICAgICAgZmlyc3RSdWxlID0gZmlyc3QocnVsZXMpLFxuICAgICAgICAgIHVuaXRSdWxlID0gZmlyc3RSdWxlLCAvLy9cbiAgICAgICAgICB1bml0UnVsZVByb2R1Y3Rpb25OYW1lID0gdW5pdFJ1bGUuZ2V0UHJvZHVjdGlvbk5hbWUoKTtcbiAgICBcbiAgICByZXR1cm4gdW5pdFJ1bGVQcm9kdWN0aW9uTmFtZTtcbiAgfVxuXG4gIGlzRm91bmRCeVByb2R1Y3Rpb25OYW1lcyhmaXJzdFByb2R1Y3Rpb25OYW1lLCBzZWNvbmRQcm9kdWN0aW9uTmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICB1bml0UnVsZVByb2R1Y3Rpb25OYW1lID0gdGhpcy5nZXRVbml0UnVsZVByb2R1Y3Rpb25OYW1lKCksXG4gICAgICAgICAgZm91bmQgPSAoKG5hbWUgPT09IGZpcnN0UHJvZHVjdGlvbk5hbWUpICYmICh1bml0UnVsZVByb2R1Y3Rpb25OYW1lID09PSBzZWNvbmRQcm9kdWN0aW9uTmFtZSkpOyAgLy8vXG4gICAgXG4gICAgcmV0dXJuIGZvdW5kO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbU5hbWVBbmRVbml0UnVsZShuYW1lLCB1bml0UnVsZSkge1xuICAgIGNvbnN0IHJ1bGVzID0gW1xuICAgICAgICAgICAgdW5pdFJ1bGVcbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBudWxsLFxuICAgICAgICAgIHVuaXRSdWxlUHJvZHVjdGlvbiA9IG5ldyBVbml0UnVsZVByb2R1Y3Rpb24obmFtZSwgcnVsZXMsIE5vZGUpO1xuICAgIFxuICAgIHJldHVybiB1bml0UnVsZVByb2R1Y3Rpb247ICAgICAgICAgIFxuICB9XG4gIFxuICBzdGF0aWMgZnJvbU5hbWVBbmRVbml0UnVsZVByb2R1Y3Rpb25OYW1lKG5hbWUsIHVuaXRSdWxlUHJvZHVjdGlvbk5hbWUpIHtcbiAgICBjb25zdCBwcm9kdWN0aW9uTmFtZSA9IHVuaXRSdWxlUHJvZHVjdGlvbk5hbWUsICAvLy9cbiAgICAgICAgICB1bml0UnVsZSA9IFVuaXRSdWxlLmZyb21Qcm9kdWN0aW9uTmFtZShwcm9kdWN0aW9uTmFtZSksXG4gICAgICAgICAgdW5pdFJ1bGVQcm9kdWN0aW9uID0gVW5pdFJ1bGVQcm9kdWN0aW9uLmZyb21OYW1lQW5kVW5pdFJ1bGUobmFtZSwgdW5pdFJ1bGUpO1xuICAgIFxuICAgIHJldHVybiB1bml0UnVsZVByb2R1Y3Rpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBVbml0UnVsZVByb2R1Y3Rpb247XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBVbml0UnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUvdW5pdCcpLFxuICAgICAgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9wcm9kdWN0aW9uJyk7XG5cbmNsYXNzIFVuaXRSdWxlc1Byb2R1Y3Rpb24gZXh0ZW5kcyBQcm9kdWN0aW9uIHtcbiAgZ2V0UHJvZHVjdGlvbk5hbWVzKCkge1xuICAgIGNvbnN0IHJ1bGVzID0gdGhpcy5nZXRSdWxlcygpLFxuICAgICAgICAgIHVuaXRSdWxlcyA9IHJ1bGVzLCAgLy8vXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWVzID0gdW5pdFJ1bGVzLm1hcChmdW5jdGlvbih1bml0UnVsZSkge1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdGlvbk5hbWUgPSB1bml0UnVsZS5nZXRQcm9kdWN0aW9uTmFtZSgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gcHJvZHVjdGlvbk5hbWU7XG4gICAgICAgICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIHByb2R1Y3Rpb25OYW1lcztcbiAgfVxuICBcbiAgbWFwVW5pdFJ1bGVzKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgcnVsZXMgPSB0aGlzLmdldFJ1bGVzKCksXG4gICAgICAgICAgdW5pdFJ1bGVzID0gcnVsZXMsICAvLy9cbiAgICAgICAgICByZXN1bHQgPSB1bml0UnVsZXMubWFwKGNhbGxiYWNrKTtcbiAgICBcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVByb2R1Y3Rpb24ocHJvZHVjdGlvbikge1xuICAgIGxldCB1bml0UnVsZXNQcm9kdWN0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHJ1bGVzID0gcHJvZHVjdGlvbi5nZXRSdWxlcygpLFxuICAgICAgICAgIHVuaXRSdWxlcyA9IHJ1bGVzLnJlZHVjZShmdW5jdGlvbih1bml0UnVsZXMsIHJ1bGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHVuaXRSdWxlID0gVW5pdFJ1bGUuZnJvbVJ1bGUocnVsZSk7XG5cbiAgICAgICAgICAgIGlmICh1bml0UnVsZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICB1bml0UnVsZXMgPSB1bml0UnVsZXMuY29uY2F0KHVuaXRSdWxlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHVuaXRSdWxlcztcbiAgICAgICAgICB9LCBbXSksXG4gICAgICAgICAgdW5pdFJ1bGVzTGVuZ3RoID0gdW5pdFJ1bGVzLmxlbmd0aDtcblxuICAgIGlmICh1bml0UnVsZXNMZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBuYW1lID0gcHJvZHVjdGlvbi5nZXROYW1lKCksXG4gICAgICAgICAgICBydWxlcyA9IHVuaXRSdWxlcywgIC8vL1xuICAgICAgICAgICAgTm9kZSA9IHByb2R1Y3Rpb24uZ2V0Tm9kZSgpO1xuXG4gICAgICB1bml0UnVsZXNQcm9kdWN0aW9uID0gbmV3IFVuaXRSdWxlc1Byb2R1Y3Rpb24obmFtZSwgcnVsZXMsIE5vZGUpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdW5pdFJ1bGVzUHJvZHVjdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFVuaXRSdWxlc1Byb2R1Y3Rpb247XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vcnVsZScpLFxuICAgICAgVW5pdFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlL3VuaXQnKTtcblxuY2xhc3MgTm9uVW5pdFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21SdWxlKHJ1bGUpIHtcbiAgICBsZXQgbm9uVW5pdFJ1bGUgPSBudWxsO1xuXG4gICAgY29uc3QgdW5pdFJ1bGUgPSBVbml0UnVsZS5mcm9tUnVsZShydWxlKTtcbiAgICBcbiAgICBpZiAodW5pdFJ1bGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHBhcnRzID0gcnVsZS5nZXRQYXJ0cygpO1xuICAgICAgXG4gICAgICBub25Vbml0UnVsZSA9IG5ldyBOb25Vbml0UnVsZShwYXJ0cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vblVuaXRSdWxlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9uVW5pdFJ1bGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vcnVsZScpLFxuICAgICAgUHJvZHVjdGlvbk5hbWVQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3BhcnQvcHJvZHVjdGlvbk5hbWUnKTtcblxuY2xhc3MgVW5pdFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgZ2V0UHJvZHVjdGlvbk5hbWUgKCkge1xuICAgIGNvbnN0IGZpcnN0UGFydCA9IHRoaXMuZ2V0Rmlyc3RQYXJ0KCksXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWVQYXJ0ID0gZmlyc3RQYXJ0LCAvLy9cbiAgICAgICAgICBwcm9kdWN0aW9uTmFtZSA9IHByb2R1Y3Rpb25OYW1lUGFydC5nZXRQcm9kdWN0aW9uTmFtZSgpO1xuICAgIFxuICAgIHJldHVybiBwcm9kdWN0aW9uTmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvZHVjdGlvbk5hbWUocHJvZHVjdGlvbk5hbWUpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2UgPSBmYWxzZSwgLy8vXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWVQYXJ0ID0gbmV3IFByb2R1Y3Rpb25OYW1lUGFydChwcm9kdWN0aW9uTmFtZSwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUGFydFxuICAgICAgICAgIF0sXG4gICAgICAgICAgdW5pdFJ1bGUgPSBuZXcgVW5pdFJ1bGUocGFydHMpO1xuXG4gICAgcmV0dXJuIHVuaXRSdWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlKHJ1bGUpIHtcbiAgICBsZXQgdW5pdFJ1bGUgPSBudWxsO1xuXG4gICAgY29uc3QgcGFydHNMZW5ndGggPSBydWxlLmdldFBhcnRzTGVuZ3RoKCk7XG5cbiAgICBpZiAocGFydHNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0UGFydCA9IHJ1bGUuZ2V0Rmlyc3RQYXJ0KCk7XG4gICAgICBcbiAgICAgIGlmIChmaXJzdFBhcnQgaW5zdGFuY2VvZiBQcm9kdWN0aW9uTmFtZVBhcnQpIHtcbiAgICAgICAgY29uc3QgcGFydHMgPSBydWxlLmdldFBhcnRzKCk7XG5cbiAgICAgICAgdW5pdFJ1bGUgPSBuZXcgVW5pdFJ1bGUocGFydHMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB1bml0UnVsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFVuaXRSdWxlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjeWNsZXMgPSByZXF1aXJlKCcuLi9ncmFtbWFyL2N5Y2xlcycpLFxuICAgICAgbGVmdFJlY3Vyc2lvbiA9IHJlcXVpcmUoJy4uL2dyYW1tYXIvbGVmdFJlY3Vyc2lvbicpLFxuICAgICAgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi9wcm9kdWN0aW9uJyksXG4gICAgICBFcnJvck5vZGUgPSByZXF1aXJlKCcuLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC9lcnJvcicpO1xuXG5jbGFzcyBQcmltaXRpdmVQYXJzZXIge1xuICBzdGF0aWMgcGFyc2UobGluZXMsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbWFwcGluZ3MpIHtcbiAgICBsZXQgcHJvZHVjdGlvbnM7XG5cbiAgICBtYXBwaW5ncyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgJ2Vycm9yJzogRXJyb3JOb2RlXG4gICAgfSwgbWFwcGluZ3MpO1xuXG4gICAgdHJ5IHtcbiAgICAgIHByb2R1Y3Rpb25zID0gbGluZXMubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgY29uc3QgcHJvZHVjdGlvbiA9IFByb2R1Y3Rpb24uZnJvbUxpbmUobGluZSwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBtYXBwaW5ncyk7XG5cbiAgICAgICAgcmV0dXJuIHByb2R1Y3Rpb247XG4gICAgICB9KTtcbiAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICBwcm9kdWN0aW9ucyA9IFtdO1xuICAgIH1cbiAgICBcbiAgICBwcm9kdWN0aW9ucyA9IGN5Y2xlcy5lbGltaW5hdGUocHJvZHVjdGlvbnMpOyAgLy8vXG4gICAgXG4gLy8gcHJvZHVjdGlvbnMgPSBsZWZ0UmVjdXJzaW9uLmVsaW1pbmF0ZShwcm9kdWN0aW9ucyk7XG5cbiAgICByZXR1cm4gcHJvZHVjdGlvbnM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcmltaXRpdmVQYXJzZXI7XG5cbiIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgYXJyYXlVdGlsIHtcbiAgc3RhdGljIGtlZXBGaXJzdChhcnJheSkgeyByZXR1cm4ga2VlcE50aChhcnJheSwgMCk7IH1cblxuICBzdGF0aWMga2VlcFNlY29uZChhcnJheSkgeyByZXR1cm4ga2VlcE50aChhcnJheSwgMSk7IH1cblxuICBzdGF0aWMga2VlcExhc3QoYXJyYXkpIHsgcmV0dXJuIGtlZXBOdGgoYXJyYXksIC0xKTsgfVxuXG4gIHN0YXRpYyBkaXNjYXJkRmlyc3QoYXJyYXkpIHsgcmV0dXJuIGRpc2NhcmROdGgoYXJyYXksIDApOyB9XG5cbiAgc3RhdGljIGRpc2NhcmRTZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGRpc2NhcmROdGgoYXJyYXksIDEpOyB9XG5cbiAgc3RhdGljIGRpc2NhcmRMYXN0KGFycmF5KSB7IHJldHVybiBkaXNjYXJkTnRoKGFycmF5LCAtMSk7IH1cblxuICBzdGF0aWMgc3BsaWNlKGFycmF5LCBzdGFydCwgZGVsZXRlQ291bnQsIGl0ZW1zQXJyYXkgPSBbXSkge1xuICAgIGNvbnN0IGFyZ3MgPSBbc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5pdGVtc0FycmF5XSxcbiAgICAgICAgICBkZWxldGVkSXRlbXNBcnJheSA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkoYXJyYXksIGFyZ3MpO1xuICBcbiAgICByZXR1cm4gZGVsZXRlZEl0ZW1zQXJyYXk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVV0aWw7XG5cbmZ1bmN0aW9uIGtlZXBOdGgoYXJyYXksIG4pIHtcbiAgYXJyYXkgPSBhcnJheS5zbGljZSgpO1xuXG4gIHJldHVybiBhcnJheS5zcGxpY2UobiwgMSk7XG59XG5cbmZ1bmN0aW9uIGRpc2NhcmROdGgoYXJyYXksIG4pIHtcbiAgYXJyYXkgPSBhcnJheS5zbGljZSgpO1xuXG4gIGFycmF5LnNwbGljZShuLCAxKTtcblxuICByZXR1cm4gYXJyYXk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIHBhcnNlclV0aWwge1xuICBzdGF0aWMgdG9rZW5zRnJvbUxpbmVzKGxpbmVzKSB7XG4gICAgY29uc3QgdG9rZW5zID0gbGluZXMucmVkdWNlKGZ1bmN0aW9uKHRva2VucywgbGluZSkge1xuICAgICAgY29uc3QgbGluZVRva2VucyA9IGxpbmUuZ2V0VG9rZW5zKCk7XG5cbiAgICAgIHRva2VucyA9IHRva2Vucy5jb25jYXQobGluZVRva2Vucyk7XG5cbiAgICAgIHJldHVybiB0b2tlbnM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIHN0YXRpYyBmaW5kUHJvZHVjdGlvbihwcm9kdWN0aW9uTmFtZSwgcHJvZHVjdGlvbnMpIHtcbiAgICBsZXQgZm91bmRQcm9kdWN0aW9uID0gbnVsbDtcblxuICAgIHByb2R1Y3Rpb25zLnNvbWUoZnVuY3Rpb24ocHJvZHVjdGlvbikge1xuICAgICAgY29uc3QgcHJvZHVjdGlvbkZvdW5kID0gcHJvZHVjdGlvbi5pc0ZvdW5kQnlQcm9kdWN0aW9uTmFtZShwcm9kdWN0aW9uTmFtZSk7XG4gICAgICBcbiAgICAgIGlmIChwcm9kdWN0aW9uRm91bmQpIHtcbiAgICAgICAgZm91bmRQcm9kdWN0aW9uID0gcHJvZHVjdGlvbjtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHByb2R1Y3Rpb24gPSBmb3VuZFByb2R1Y3Rpb247IC8vL1xuXG4gICAgcmV0dXJuIHByb2R1Y3Rpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwYXJzZXJVdGlsO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgb3B0aW9uczogcmVxdWlyZSgnLi9saWIvb3B0aW9ucycpLFxuICBTaXplYWJsZUVsZW1lbnQ6IHJlcXVpcmUoJy4vbGliL3NpemVhYmxlRWxlbWVudCcpLFxuICBWZXJ0aWNhbFNwbGl0dGVyOiByZXF1aXJlKCcuL2xpYi9zcGxpdHRlci92ZXJ0aWNhbCcpLFxuICBIb3Jpem9udGFsU3BsaXR0ZXI6IHJlcXVpcmUoJy4vbGliL3NwbGl0dGVyL2hvcml6b250YWwnKVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKTtcblxuY29uc3QgeyBCb2R5IH0gPSBlYXN5O1xuXG5jb25zdCBib2R5ID0gbmV3IEJvZHkoKTtcblxubGV0IHByZXZpb3VzQ3Vyc29yOyAgLy8vXG5cbmNsYXNzIGN1cnNvciB7XG4gIHN0YXRpYyBjb2x1bW5SZXNpemUoKSB7XG4gICAgY29uc3QgY3VycmVudEN1cnNvciA9IHRoaXMuZ2V0Q3VycmVudEN1cnNvcigpO1xuXG4gICAgaWYgKGN1cnJlbnRDdXJzb3IgIT09ICdjb2wtcmVzaXplJykge1xuICAgICAgcHJldmlvdXNDdXJzb3IgPSBjdXJyZW50Q3Vyc29yO1xuXG4gICAgICB0aGlzLnNldEN1cnNvcignY29sLXJlc2l6ZScpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyByb3dSZXNpemUoKSB7XG4gICAgY29uc3QgY3VycmVudEN1cnNvciA9IHRoaXMuZ2V0Q3VycmVudEN1cnNvcigpO1xuXG4gICAgaWYgKGN1cnJlbnRDdXJzb3IgIT09ICdyb3ctcmVzaXplJykge1xuICAgICAgcHJldmlvdXNDdXJzb3IgPSBjdXJyZW50Q3Vyc29yO1xuXG4gICAgICB0aGlzLnNldEN1cnNvcigncm93LXJlc2l6ZScpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyByZXNldCgpIHtcbiAgICB0aGlzLnNldEN1cnNvcihwcmV2aW91c0N1cnNvcik7IC8vL1xuICB9XG5cbiAgc3RhdGljIGdldEN1cnJlbnRDdXJzb3IoKSB7XG4gICAgY29uc3QgY3VycmVudEN1cnNvciA9IGJvZHkuY3NzKCdjdXJzb3InKTsgIC8vL1xuXG4gICAgcmV0dXJuIGN1cnJlbnRDdXJzb3IgfHwgJ2F1dG8nOyAvLy9cbiAgfVxuXG4gIHN0YXRpYyBzZXRDdXJzb3IoY3Vyc29yKSB7XG4gICAgY29uc3QgY3NzID0ge1xuICAgICAgY3Vyc29yOiBjdXJzb3JcbiAgICB9O1xuXG4gICAgYm9keS5jc3MoY3NzKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGN1cnNvcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgRVNDQVBFX0tFWV9TVE9QU19EUkFHR0lORzogJ0VTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkcnXG4gICAgICB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG9wdGlvbnM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5Jyk7XG5cbmNvbnN0IHsgRWxlbWVudCB9ID0gZWFzeTtcblxuY2xhc3MgU2l6ZWFibGVFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIHNldFdpZHRoKHdpZHRoKSB7XG4gICAgY29uc3Qgd2lkdGhOdW1iZXIgPSAodHlwZW9mIHdpZHRoID09PSAnbnVtYmVyJyk7XG5cbiAgICBpZiAod2lkdGhOdW1iZXIpIHtcbiAgICAgIGNvbnN0IG1pbmltdW1XaWR0aCA9IHRoaXMuZ2V0TWluaW11bVdpZHRoKCksXG4gICAgICAgICAgICBtYXhpbXVtV2lkdGggPSB0aGlzLmdldE1heGltdW1XaWR0aCgpO1xuXG4gICAgICBpZiAobWluaW11bVdpZHRoICE9PSBudWxsKSB7XG4gICAgICAgIHdpZHRoID0gTWF0aC5tYXgod2lkdGgsIG1pbmltdW1XaWR0aCk7XG4gICAgICB9XG4gICAgICBpZiAobWF4aW11bVdpZHRoICE9PSBudWxsKSB7XG4gICAgICAgIHdpZHRoID0gTWF0aC5taW4od2lkdGgsIG1heGltdW1XaWR0aCk7XG4gICAgICB9XG5cbiAgICAgIHdpZHRoID0gYCR7d2lkdGh9cHhgOyAvLy9cbiAgICB9XG5cbiAgICBzdXBlci5zZXRXaWR0aCh3aWR0aCk7XG4gIH1cblxuICBzZXRIZWlnaHQoaGVpZ2h0KSB7XG4gICAgY29uc3QgaGVpZ2h0TnVtYmVyID0gKHR5cGVvZiBoZWlnaHQgPT09ICdudW1iZXInKTtcblxuICAgIGlmIChoZWlnaHROdW1iZXIpIHtcbiAgICAgIGNvbnN0IG1pbmltdW1IZWlnaHQgPSB0aGlzLmdldE1pbmltdW1IZWlnaHQoKSxcbiAgICAgICAgICAgIG1heGltdW1IZWlnaHQgPSB0aGlzLmdldE1heGltdW1IZWlnaHQoKTtcblxuICAgICAgaWYgKG1pbmltdW1IZWlnaHQgIT09IG51bGwpIHtcbiAgICAgICAgaGVpZ2h0ID0gTWF0aC5tYXgoaGVpZ2h0LCBtaW5pbXVtSGVpZ2h0KTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXhpbXVtSGVpZ2h0ICE9PSBudWxsKSB7XG4gICAgICAgIGhlaWdodCA9IE1hdGgubWluKGhlaWdodCwgbWF4aW11bUhlaWdodCk7XG4gICAgICB9XG5cbiAgICAgIGhlaWdodCA9IGAke2hlaWdodH1weGA7IC8vL1xuICAgIH1cblxuICAgIHN1cGVyLnNldEhlaWdodChoZWlnaHQpO1xuICB9XG5cbiAgZ2V0TWluaW11bVdpZHRoKCkgeyBcbiAgICBjb25zdCBtaW5XaWR0aCA9IHRoaXMuY3NzKCdtaW4td2lkdGgnKSxcbiAgICAgICAgICBtaW5pbXVtV2lkdGggPSBpblBpeGVscyhtaW5XaWR0aCk7XG5cbiAgICByZXR1cm4gbWluaW11bVdpZHRoO1xuICB9XG5cbiAgZ2V0TWluaW11bUhlaWdodCgpIHtcbiAgICBjb25zdCBtaW5IZWlnaHQgPSB0aGlzLmNzcygnbWluLWhlaWdodCcpLFxuICAgICAgICAgIG1pbmltdW1IZWlnaHQgPSBpblBpeGVscyhtaW5IZWlnaHQpO1xuXG4gICAgcmV0dXJuIG1pbmltdW1IZWlnaHQ7XG4gIH1cblxuICBnZXRNYXhpbXVtV2lkdGgoKSB7XG4gICAgY29uc3QgbWF4V2lkdGggPSB0aGlzLmNzcygnbWF4LXdpZHRoJyksXG4gICAgICAgICAgbWF4aW11bVdpZHRoID0gaW5QaXhlbHMobWF4V2lkdGgpO1xuXG4gICAgcmV0dXJuIG1heGltdW1XaWR0aDtcbiAgfVxuXG4gIGdldE1heGltdW1IZWlnaHQoKSB7XG4gICAgY29uc3QgbWF4SGVpZ2h0ID0gdGhpcy5jc3MoJ21heC1oZWlnaHQnKSxcbiAgICAgICAgICBtYXhpbXVtSGVpZ2h0ID0gaW5QaXhlbHMobWF4SGVpZ2h0KTtcblxuICAgIHJldHVybiBtYXhpbXVtSGVpZ2h0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICByZXR1cm4gRWxlbWVudC5mcm9tUHJvcGVydGllcyhTaXplYWJsZUVsZW1lbnQsIHByb3BlcnRpZXMpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oU2l6ZWFibGVFbGVtZW50LCB7XG4gIHRhZ05hbWU6ICdkaXYnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ3NpemVhYmxlJ1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaXplYWJsZUVsZW1lbnQ7XG5cbmZ1bmN0aW9uIGluUGl4ZWxzKHF1YW50aXR5KSB7XG4gIGxldCBwaXhlbHMgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBxdWFudGl0eS5tYXRjaCgvKFswLTldKilweCQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgcGl4ZWxzID0gc2Vjb25kTWF0Y2g7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBwaXhlbHM7XG59XG5cbmZ1bmN0aW9uIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKTtcblxuY29uc3Qgb3B0aW9ucyA9IHJlcXVpcmUoJy4vb3B0aW9ucycpO1xuXG5jb25zdCBFU0NBUEVfS0VZQ09ERSA9IDI3O1xuXG5jb25zdCB7IEVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkcgfSA9IG9wdGlvbnMsXG4gICAgICB7IHdpbmRvdywgRWxlbWVudCB9ID0gZWFzeTtcblxuY2xhc3MgU3BsaXR0ZXIgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGJlZm9yZVNpemVhYmxlRWxlbWVudCwgYWZ0ZXJTaXplYWJsZUVsZW1lbnQsIGRyYWdIYW5kbGVyLCBvcHRpb25zKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgdGhpcy5iZWZvcmVTaXplYWJsZUVsZW1lbnQgPSBiZWZvcmVTaXplYWJsZUVsZW1lbnQ7XG4gICAgdGhpcy5hZnRlclNpemVhYmxlRWxlbWVudCA9IGFmdGVyU2l6ZWFibGVFbGVtZW50O1xuXG4gICAgaWYgKGRyYWdIYW5kbGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub25EcmFnKGRyYWdIYW5kbGVyKTsgXG4gICAgfVxuICAgIFxuICAgIGlmIChvcHRpb25zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgICB9XG4gIFxuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgXG4gICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuICBcbiAgICB3aW5kb3cub24oJ21vdXNldXAgYmx1cicsIHRoaXMubW91c2VVcC5iaW5kKHRoaXMpKTsgIC8vL1xuICAgXG4gICAgd2luZG93Lm9uTW91c2VNb3ZlKHRoaXMubW91c2VNb3ZlLmJpbmQodGhpcykpO1xuICBcbiAgICB0aGlzLm9uTW91c2VEb3duKHRoaXMubW91c2VEb3duLmJpbmQodGhpcykpO1xuICAgIHRoaXMub25Nb3VzZU92ZXIodGhpcy5tb3VzZU92ZXIuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5vbk1vdXNlT3V0KHRoaXMubW91c2VPdXQuYmluZCh0aGlzKSk7XG4gIFxuICAgIHRoaXMub3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaXNCZWZvcmVTaXplYWJsZUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYmVmb3JlU2l6ZWFibGVFbGVtZW50O1xuICB9XG5cbiAgaXNBZnRlclNpemVhYmxlRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5hZnRlclNpemVhYmxlRWxlbWVudDtcbiAgfVxuXG4gIGdldERpcmVjdGlvbigpIHtcbiAgICBsZXQgZGlyZWN0aW9uID0gdW5kZWZpbmVkOyAgLy8vXG5cbiAgICBpZiAodGhpcy5iZWZvcmVTaXplYWJsZUVsZW1lbnQpIHtcbiAgICAgIGRpcmVjdGlvbiA9ICsxO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmFmdGVyU2l6ZWFibGVFbGVtZW50KSB7XG4gICAgICBkaXJlY3Rpb24gPSAtMTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0aW9uO1xuICB9XG5cbiAgZ2V0U2l6ZWFibGVFbGVtZW50KCkge1xuICAgIGxldCBzaXplYWJsZUVsZW1lbnQgPSB1bmRlZmluZWQ7ICAvLy9cblxuICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuZ2V0RGlyZWN0aW9uKCk7XG5cbiAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgY2FzZSAtMTpcbiAgICAgICAgc2l6ZWFibGVFbGVtZW50ID0gdGhpcy5nZXRQcmV2aW91c1NpYmxpbmdFbGVtZW50KCk7IC8vL1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSArMTpcbiAgICAgICAgc2l6ZWFibGVFbGVtZW50ID0gdGhpcy5nZXROZXh0U2libGluZ0VsZW1lbnQoKTsgLy8vXG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBzaXplYWJsZUVsZW1lbnQ7XG4gIH1cbiAgXG4gIHNldE9wdGlvbnMob3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICBzZXRPcHRpb24ob3B0aW9uKSB7XG4gICAgdGhpcy5vcHRpb25zW29wdGlvbl0gPSB0cnVlO1xuICB9XG5cbiAgdW5zZXRPcHRpb24ob3B0aW9uKSB7XG4gICAgZGVsZXRlKHRoaXMub3B0aW9uc1tvcHRpb25dKTtcbiAgfVxuXG4gIGhhc09wdGlvbihvcHRpb24pIHtcbiAgICBvcHRpb24gPSAodGhpcy5vcHRpb25zW29wdGlvbl0gPT09IHRydWUpOyAvLy9cblxuICAgIHJldHVybiBvcHRpb247XG4gIH1cbiAgXG4gIGVuYWJsZSgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuICB9XG5cbiAgaXNEaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZDtcbiAgfVxuXG4gIG9uRHJhZyhkcmFnSGFuZGxlcikge1xuICAgIHRoaXMuZHJhZ0hhbmRsZXIgPSBkcmFnSGFuZGxlcjtcbiAgfVxuXG4gIHN0YXJ0RHJhZ2dpbmcoKSB7XG4gICAgY29uc3QgZXNjYXBlS2V5U3RvcHNEcmFnZ2luZyA9IHRoaXMuaGFzT3B0aW9uKEVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkcpO1xuXG4gICAgaWYgKGVzY2FwZUtleVN0b3BzRHJhZ2dpbmcpIHtcbiAgICAgIHdpbmRvdy5vbktleURvd24odGhpcy5rZXlEb3duSGFuZGxlci5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICB0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcbiAgfVxuXG4gIHN0b3BEcmFnZ2luZygpIHtcbiAgICBjb25zdCBlc2NhcGVLZXlTdG9wc0RyYWdnaW5nID0gdGhpcy5oYXNPcHRpb24oRVNDQVBFX0tFWV9TVE9QU19EUkFHR0lORyk7XG5cbiAgICBpZiAoZXNjYXBlS2V5U3RvcHNEcmFnZ2luZykge1xuICAgICAgd2luZG93Lm9mZktleURvd24odGhpcy5rZXlEb3duSGFuZGxlci5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG4gIH1cblxuICBpc0RyYWdnaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdnaW5nO1xuICB9XG5cbiAga2V5RG93bkhhbmRsZXIoa2V5Q29kZSkge1xuICAgIGlmIChrZXlDb2RlID09PSBFU0NBUEVfS0VZQ09ERSkge1xuICAgICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICAgIHRoaXMuc3RvcERyYWdnaW5nKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBiZWZvcmVTaXplYWJsZUVsZW1lbnQsIGFmdGVyU2l6ZWFibGVFbGVtZW50LCBvbkRyYWcsIG9wdGlvbnMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgZHJhZ0hhbmRsZXIgPSBvbkRyYWc7IC8vL1xuXG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGJlZm9yZVNpemVhYmxlRWxlbWVudCwgYWZ0ZXJTaXplYWJsZUVsZW1lbnQsIGRyYWdIYW5kbGVyLCBvcHRpb25zKTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFNwbGl0dGVyLCB7XG4gIHRhZ05hbWU6ICdkaXYnLFxuICBpZ25vcmVkUHJvcGVydGllczogW1xuICAgICdiZWZvcmVTaXplYWJsZUVsZW1lbnQnLFxuICAgICdhZnRlclNpemVhYmxlRWxlbWVudCcsXG4gICAgJ29uRHJhZycsXG4gICAgJ29wdGlvbnMnXG4gIF1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNwbGl0dGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjdXJzb3IgPSByZXF1aXJlKCcuLi9jdXJzb3InKSxcbiAgICAgIFNwbGl0dGVyID0gcmVxdWlyZSgnLi4vc3BsaXR0ZXInKTtcblxuY2xhc3MgSG9yaXpvbnRhbFNwbGl0dGVyIGV4dGVuZHMgU3BsaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgYmVmb3JlU2l6ZWFibGVFbGVtZW50LCBhZnRlclNpemVhYmxlRWxlbWVudCwgZHJhZ0hhbmRsZXIsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihzZWxlY3RvciwgYmVmb3JlU2l6ZWFibGVFbGVtZW50LCBhZnRlclNpemVhYmxlRWxlbWVudCwgZHJhZ0hhbmRsZXIsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy5zaXplYWJsZUVsZW1lbnRIZWlnaHQgPSBudWxsO1xuXG4gICAgdGhpcy5tb3VzZVRvcCA9IG51bGw7XG4gIH1cblxuICBtb3VzZVVwKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjdXJzb3IucmVzZXQoKTtcblxuICAgICAgaWYgKHRoaXMuZHJhZ2dpbmcpIHtcbiAgICAgICAgdGhpcy5zdG9wRHJhZ2dpbmcoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtb3VzZU1vdmUobW91c2VUb3AsIG1vdXNlTGVmdCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgICBpZiAoZHJhZ2dpbmcpIHtcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gdGhpcy5nZXREaXJlY3Rpb24oKSxcbiAgICAgICAgICAgICAgc2l6ZWFibGVFbGVtZW50ID0gdGhpcy5nZXRTaXplYWJsZUVsZW1lbnQoKSxcbiAgICAgICAgICAgICAgcmVsYXRpdmVNb3VzZVRvcCA9IG1vdXNlVG9wIC0gdGhpcy5tb3VzZVRvcCxcbiAgICAgICAgICAgICAgaGVpZ2h0ID0gdGhpcy5zaXplYWJsZUVsZW1lbnRIZWlnaHQgLSBkaXJlY3Rpb24gKiByZWxhdGl2ZU1vdXNlVG9wO1xuXG4gICAgICAgIHNpemVhYmxlRWxlbWVudC5zZXRIZWlnaHQoaGVpZ2h0KTtcblxuICAgICAgICBjb25zdCBzaXplYWJsZUVsZW1lbnRIZWlnaHQgPSBzaXplYWJsZUVsZW1lbnQuZ2V0SGVpZ2h0KCk7XG5cbiAgICAgICAgaWYgKHRoaXMuZHJhZ0hhbmRsZXIpIHtcbiAgICAgICAgICB0aGlzLmRyYWdIYW5kbGVyKHNpemVhYmxlRWxlbWVudEhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtb3VzZURvd24obW91c2VUb3AsIG1vdXNlTGVmdCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjb25zdCBzaXplYWJsZUVsZW1lbnQgPSB0aGlzLmdldFNpemVhYmxlRWxlbWVudCgpO1xuICAgICAgICAgIFxuICAgICAgY3Vyc29yLnJvd1Jlc2l6ZSgpO1xuXG4gICAgICB0aGlzLm1vdXNlVG9wID0gbW91c2VUb3A7XG5cbiAgICAgIHRoaXMuc2l6ZWFibGVFbGVtZW50SGVpZ2h0ID0gc2l6ZWFibGVFbGVtZW50LmdldEhlaWdodCgpO1xuXG4gICAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgICBpZiAoIWRyYWdnaW5nKSB7XG4gICAgICAgIHRoaXMuc3RhcnREcmFnZ2luZygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1vdXNlT3ZlcigpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY3Vyc29yLnJvd1Jlc2l6ZSgpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlT3V0KCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjdXJzb3IucmVzZXQoKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIHJldHVybiBTcGxpdHRlci5mcm9tUHJvcGVydGllcyhIb3Jpem9udGFsU3BsaXR0ZXIsIHByb3BlcnRpZXMpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oSG9yaXpvbnRhbFNwbGl0dGVyLCB7XG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAnaG9yaXpvbnRhbCBzcGxpdHRlcidcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gSG9yaXpvbnRhbFNwbGl0dGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjdXJzb3IgPSByZXF1aXJlKCcuLi9jdXJzb3InKSxcbiAgICAgIFNwbGl0dGVyID0gcmVxdWlyZSgnLi4vc3BsaXR0ZXInKTtcblxuY2xhc3MgVmVydGljYWxTcGxpdHRlciBleHRlbmRzIFNwbGl0dGVyIHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGJlZm9yZVNpemVhYmxlRWxlbWVudCwgYWZ0ZXJTaXplYWJsZUVsZW1lbnQsIGRyYWdIYW5kbGVyLCBvcHRpb25zKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IsIGJlZm9yZVNpemVhYmxlRWxlbWVudCwgYWZ0ZXJTaXplYWJsZUVsZW1lbnQsIGRyYWdIYW5kbGVyLCBvcHRpb25zKTtcblxuICAgIHRoaXMuc2l6ZWFibGVFbGVtZW50V2lkdGggPSBudWxsO1xuXG4gICAgdGhpcy5tb3VzZUxlZnQgPSBudWxsO1xuICB9XG5cbiAgbW91c2VVcCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY3Vyc29yLnJlc2V0KCk7XG5cbiAgICAgIGlmICh0aGlzLmRyYWdnaW5nKSB7XG4gICAgICAgIHRoaXMuc3RvcERyYWdnaW5nKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbW91c2VNb3ZlKG1vdXNlVG9wLCBtb3VzZUxlZnQpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuZ2V0RGlyZWN0aW9uKCksXG4gICAgICAgICAgICAgIHNpemVhYmxlRWxlbWVudCA9IHRoaXMuZ2V0U2l6ZWFibGVFbGVtZW50KCksXG4gICAgICAgICAgICAgIHJlbGF0aXZlTW91c2VMZWZ0ID0gbW91c2VMZWZ0IC0gdGhpcy5tb3VzZUxlZnQsXG4gICAgICAgICAgICAgIHdpZHRoID0gdGhpcy5zaXplYWJsZUVsZW1lbnRXaWR0aCAtIGRpcmVjdGlvbiAqIHJlbGF0aXZlTW91c2VMZWZ0O1xuXG4gICAgICAgIHNpemVhYmxlRWxlbWVudC5zZXRXaWR0aCh3aWR0aCk7XG5cbiAgICAgICAgY29uc3Qgc2l6ZWFibGVFbGVtZW50V2lkdGggPSBzaXplYWJsZUVsZW1lbnQuZ2V0V2lkdGgoKTtcblxuICAgICAgICBpZiAodGhpcy5kcmFnSGFuZGxlcikge1xuICAgICAgICAgIHRoaXMuZHJhZ0hhbmRsZXIoc2l6ZWFibGVFbGVtZW50V2lkdGgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbW91c2VEb3duKG1vdXNlVG9wLCBtb3VzZUxlZnQpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY29uc3Qgc2l6ZWFibGVFbGVtZW50ID0gdGhpcy5nZXRTaXplYWJsZUVsZW1lbnQoKTtcblxuICAgICAgY3Vyc29yLmNvbHVtblJlc2l6ZSgpO1xuXG4gICAgICB0aGlzLm1vdXNlTGVmdCA9IG1vdXNlTGVmdDtcblxuICAgICAgdGhpcy5zaXplYWJsZUVsZW1lbnRXaWR0aCA9IHNpemVhYmxlRWxlbWVudC5nZXRXaWR0aCgpO1xuXG4gICAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgICBpZiAoIWRyYWdnaW5nKSB7XG4gICAgICAgIHRoaXMuc3RhcnREcmFnZ2luZygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1vdXNlT3ZlcigpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY3Vyc29yLmNvbHVtblJlc2l6ZSgpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlT3V0KCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjdXJzb3IucmVzZXQoKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIHJldHVybiBTcGxpdHRlci5mcm9tUHJvcGVydGllcyhWZXJ0aWNhbFNwbGl0dGVyLCBwcm9wZXJ0aWVzKTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFZlcnRpY2FsU3BsaXR0ZXIsIHtcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICd2ZXJ0aWNhbCBzcGxpdHRlcidcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVmVydGljYWxTcGxpdHRlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHdpbmRvdzogcmVxdWlyZSgnLi9saWIvd2luZG93JyksXG4gIGRvY3VtZW50OiByZXF1aXJlKCcuL2xpYi9kb2N1bWVudCcpLFxuICBEaXY6IHJlcXVpcmUoJy4vbGliL2VsZW1lbnQvZGl2JyksXG4gIFNwYW46IHJlcXVpcmUoJy4vbGliL2VsZW1lbnQvc3BhbicpLFxuICBCb2R5OiByZXF1aXJlKCcuL2xpYi9lbGVtZW50L2JvZHknKSxcbiAgTGluazogcmVxdWlyZSgnLi9saWIvZWxlbWVudC9saW5rJyksXG4gIFNlbGVjdDogcmVxdWlyZSgnLi9saWIvZWxlbWVudC9zZWxlY3QnKSxcbiAgQnV0dG9uOiByZXF1aXJlKCcuL2xpYi9lbGVtZW50L2J1dHRvbicpLFxuICBDaGVja2JveDogcmVxdWlyZSgnLi9saWIvZWxlbWVudC9jaGVja2JveCcpLFxuICBFbGVtZW50OiByZXF1aXJlKCcuL2xpYi9lbGVtZW50JyksXG4gIFRleHRFbGVtZW50OiByZXF1aXJlKCcuL2xpYi90ZXh0RWxlbWVudCcpLFxuICBJbnB1dDogcmVxdWlyZSgnLi9saWIvaW5wdXRFbGVtZW50L2lucHV0JyksXG4gIFRleHRhcmVhOiByZXF1aXJlKCcuL2xpYi9pbnB1dEVsZW1lbnQvdGV4dGFyZWEnKSxcbiAgSW5wdXRFbGVtZW50OiByZXF1aXJlKCcuL2xpYi9pbnB1dEVsZW1lbnQnKSxcbiAgQm91bmRzOiByZXF1aXJlKCcuL2xpYi9taXNjL2JvdW5kcycpLFxuICBPZmZzZXQ6IHJlcXVpcmUoJy4vbGliL21pc2Mvb2Zmc2V0JyksXG4gIFJlYWN0OiByZXF1aXJlKCcuL2xpYi9yZWFjdCcpXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBldmVudE1peGluID0gcmVxdWlyZSgnLi9taXhpbi9ldmVudCcpLFxuICAgICAgY2xpY2tNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vY2xpY2snKSxcbiAgICAgIG1vdXNlTWl4aW4gPSByZXF1aXJlKCcuL21peGluL21vdXNlJyksXG4gICAgICBrZXlNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4va2V5Jyk7XG5cbmNsYXNzIERvY3VtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9jdW1lbnQ7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihEb2N1bWVudC5wcm90b3R5cGUsIGV2ZW50TWl4aW4pO1xuT2JqZWN0LmFzc2lnbihEb2N1bWVudC5wcm90b3R5cGUsIGNsaWNrTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihEb2N1bWVudC5wcm90b3R5cGUsIG1vdXNlTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihEb2N1bWVudC5wcm90b3R5cGUsIGtleU1peGluKTtcblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgRG9jdW1lbnQoKTsgIC8vL1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBPZmZzZXQgPSByZXF1aXJlKCcuL21pc2Mvb2Zmc2V0JyksXG4gICAgICBCb3VuZHMgPSByZXF1aXJlKCcuL21pc2MvYm91bmRzJyksXG4gICAgICBqc3hNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vanN4JyksXG4gICAgICBldmVudE1peGluID0gcmVxdWlyZSgnLi9taXhpbi9ldmVudCcpLFxuICAgICAgY2xpY2tNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vY2xpY2snKSxcbiAgICAgIHNjcm9sbE1peGluID0gcmVxdWlyZSgnLi9taXhpbi9zY3JvbGwnKSxcbiAgICAgIHJlc2l6ZU1peGluID0gcmVxdWlyZSgnLi9taXhpbi9yZXNpemUnKSxcbiAgICAgIG1vdXNlTWl4aW4gPSByZXF1aXJlKCcuL21peGluL21vdXNlJyksXG4gICAgICBrZXlNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4va2V5Jyk7XG5cbmNsYXNzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnRGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50Ll9fZWxlbWVudF9fID0gdGhpczsgLy8vXG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIEVsZW1lbnQuY2xvbmUodGhpcyk7IH1cblxuICBnZXRPZmZzZXQoKSB7XG4gICAgY29uc3QgdG9wID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldFRvcCwgIC8vL1xuICAgICAgICAgIGxlZnQgPSB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0TGVmdCwgIC8vL1xuICAgICAgICAgIG9mZnNldCA9IG5ldyBPZmZzZXQodG9wLCBsZWZ0KTtcblxuICAgIHJldHVybiBvZmZzZXQ7XG4gIH1cblxuICBnZXRCb3VuZHMoKSB7XG4gICAgY29uc3QgYm91bmRpbmdDbGllbnRSZWN0ID0gdGhpcy5kb21FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgIGJvdW5kcyA9IEJvdW5kcy5mcm9tQm91bmRpbmdDbGllbnRSZWN0KGJvdW5kaW5nQ2xpZW50UmVjdCk7XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG5cbiAgZ2V0V2lkdGgoaW5jbHVkZUJvcmRlciA9IHRydWUpIHtcbiAgICBjb25zdCB3aWR0aCA9IGluY2x1ZGVCb3JkZXIgP1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0V2lkdGggOlxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5jbGllbnRXaWR0aDtcblxuICAgIHJldHVybiB3aWR0aDtcbiAgfVxuXG4gIHNldFdpZHRoKHdpZHRoKSB7IHRoaXMuZG9tRWxlbWVudC5zdHlsZS53aWR0aCA9IHdpZHRoOyB9XG5cbiAgZ2V0SGVpZ2h0KGluY2x1ZGVCb3JkZXIgPSB0cnVlKSB7XG4gICAgY29uc3QgaGVpZ2h0ID0gaW5jbHVkZUJvcmRlciA/XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0SGVpZ2h0IDpcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodDtcblxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cblxuICBzZXRIZWlnaHQoaGVpZ2h0KSB7IHRoaXMuZG9tRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBoZWlnaHQ7IH1cblxuICBoYXNBdHRyaWJ1dGUobmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50Lmhhc0F0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIGdldEF0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuZ2V0QXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7IHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpOyB9XG5cbiAgY2xlYXJBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7IHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTsgfVxuXG4gIHJlbW92ZUF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuY2xlYXJBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBzZXRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTsgfVxuXG4gIGFkZENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyB9XG5cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7IH1cblxuICB0b2dnbGVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTsgfVxuXG4gIGhhc0NsYXNzKGNsYXNzTmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpOyB9XG5cbiAgY2xlYXJDbGFzc2VzKCkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gJyc7IH1cblxuICBwcmVwZW5kVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LnByZXBlbmQodGhpcyk7IH1cblxuICBhcHBlbmRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQuYXBwZW5kKHRoaXMpOyB9XG5cbiAgYWRkVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LmFkZCh0aGlzKTsgfVxuXG4gIHJlbW92ZUZyb20ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LnJlbW92ZSh0aGlzKTsgfVxuXG4gIGluc2VydEJlZm9yZShzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCk7XG4gIH1cblxuICBpbnNlcnRBZnRlcihzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudC5uZXh0U2libGluZyk7ICAvLy9cbiAgfVxuXG4gIHByZXBlbmQoZWxlbWVudCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQsXG4gICAgICAgICAgZmlyc3RDaGlsZERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQuZmlyc3RDaGlsZDtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgZmlyc3RDaGlsZERPTUVsZW1lbnQpO1xuICB9XG5cbiAgYXBwZW5kKGVsZW1lbnQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCBudWxsKTsgLy8vXG4gIH1cblxuICBhZGQoZWxlbWVudCkgeyB0aGlzLmFwcGVuZChlbGVtZW50KTsgfVxuXG4gIHJlbW92ZShlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVDaGlsZChkb21FbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHNob3coZGlzcGxheVN0eWxlID0gJ2Jsb2NrJykgeyB0aGlzLmRvbUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXlTdHlsZTsgfVxuXG4gIGhpZGUoKSB7IHRoaXMuZG9tRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyB9XG5cbiAgZW5hYmxlKCkgeyB0aGlzLmNsZWFyQXR0cmlidXRlKCdkaXNhYmxlZCcpOyB9XG5cbiAgZGlzYWJsZSgpIHsgdGhpcy5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7IH1cblxuICBpc0VuYWJsZWQoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKSxcbiAgICAgICAgICBlbmFibGVkID0gIWRpc2FibGVkO1xuXG4gICAgcmV0dXJuIGVuYWJsZWQ7XG4gIH1cblxuICBpc0Rpc2FibGVkKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG5cbiAgICByZXR1cm4gZGlzYWJsZWQ7XG4gIH1cblxuICBodG1sKGh0bWwpIHtcbiAgICBpZiAoaHRtbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBpbm5lckhUTUwgPSB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MO1xuXG4gICAgICBodG1sID0gaW5uZXJIVE1MOyAvLy9cblxuICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGlubmVySFRNTCA9IGh0bWw7IC8vL1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MID0gaW5uZXJIVE1MXG4gICAgfVxuICB9XG5cbiAgY3NzKGNzcykge1xuICAgIGlmIChjc3MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5kb21FbGVtZW50KSxcbiAgICAgICAgICAgIGNzcyA9IHt9O1xuXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY29tcHV0ZWRTdHlsZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGNvbXB1dGVkU3R5bGVbMF0sICAvLy9cbiAgICAgICAgICAgICAgdmFsdWUgPSBjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUobmFtZSk7IC8vL1xuXG4gICAgICAgIGNzc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY3NzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNzcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGxldCBuYW1lID0gY3NzOyAvLy9cblxuICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5kb21FbGVtZW50KSxcbiAgICAgICAgICAgIHZhbHVlID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpOyAvLy9cblxuICAgICAgY3NzID0gdmFsdWU7ICAvLy9cblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyhjc3MpOyAvLy9cblxuICAgICAgbmFtZXMuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gY3NzW25hbWVdO1xuXG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5zdHlsZVtuYW1lXSA9IHZhbHVlO1xuICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gIH1cblxuICBibHVyKCkgeyB0aGlzLmRvbUVsZW1lbnQuYmx1cigpOyB9XG5cbiAgZm9jdXMoKSB7IHRoaXMuZG9tRWxlbWVudC5mb2N1cygpOyB9XG5cbiAgaGFzRm9jdXMoKSB7XG4gICAgY29uc3QgZm9jdXMgPSAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gdGhpcy5kb21FbGVtZW50KTsgIC8vL1xuXG4gICAgcmV0dXJuIGZvY3VzO1xuICB9XG5cbiAgZ2V0RGVzY2VuZGFudEVsZW1lbnRzKHNlbGVjdG9yID0gJyonKSB7XG4gICAgY29uc3QgZG9tTm9kZSA9IHRoaXMuZG9tRWxlbWVudCwgIC8vL1xuICAgICAgICAgIGRlc2NlbmRhbnRET01Ob2RlcyA9IGRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlKGRvbU5vZGUpLFxuICAgICAgICAgIGRlc2NlbmRhbnRFbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzKGRlc2NlbmRhbnRET01Ob2Rlcywgc2VsZWN0b3IpO1xuXG4gICAgcmV0dXJuIGRlc2NlbmRhbnRFbGVtZW50cztcbiAgfVxuXG4gIGdldENoaWxkRWxlbWVudHMoc2VsZWN0b3IgPSAnKicpIHtcbiAgICBjb25zdCBjaGlsZERPTU5vZGVzID0gdGhpcy5kb21FbGVtZW50LmNoaWxkTm9kZXMsXG4gICAgICAgICAgY2hpbGRET01FbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzKGNoaWxkRE9NTm9kZXMsIHNlbGVjdG9yKSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoY2hpbGRET01FbGVtZW50cyk7XG5cbiAgICByZXR1cm4gY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIGdldFBhcmVudEVsZW1lbnQoc2VsZWN0b3IgPSAnKicpIHtcbiAgICBsZXQgcGFyZW50RWxlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cbiAgICBpZiAocGFyZW50RE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgaWYgKHBhcmVudERPTUVsZW1lbnQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgY29uc3QgcGFyZW50RE9NRWxlbWVudHMgPSBbcGFyZW50RE9NRWxlbWVudF0sXG4gICAgICAgICAgICAgIHBhcmVudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMocGFyZW50RE9NRWxlbWVudHMpLFxuICAgICAgICAgICAgICBmaXJzdFBhcmVudEVsZW1lbnQgPSBmaXJzdChwYXJlbnRFbGVtZW50cyk7XG5cbiAgICAgICAgcGFyZW50RWxlbWVudCA9IGZpcnN0UGFyZW50RWxlbWVudCB8fCBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnRFbGVtZW50O1xuICB9XG5cbiAgZ2V0QXNjZW5kYW50RWxlbWVudHMoc2VsZWN0b3IgPSAnKicpIHtcbiAgICBjb25zdCBhc2NlbmRhbnRET01FbGVtZW50cyA9IFtdLFxuICAgICAgICAgIHBhcmVudERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQucGFyZW50RWxlbWVudDtcblxuICAgIGxldCBhc2NlbmRhbnRET01FbGVtZW50ID0gcGFyZW50RE9NRWxlbWVudDsgIC8vL1xuICAgIHdoaWxlIChhc2NlbmRhbnRET01FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBpZiAoYXNjZW5kYW50RE9NRWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICBhc2NlbmRhbnRET01FbGVtZW50cy5wdXNoKGFzY2VuZGFudERPTUVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICBhc2NlbmRhbnRET01FbGVtZW50ID0gYXNjZW5kYW50RE9NRWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIH1cblxuICAgIGNvbnN0IGFzY2VuZGFudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoYXNjZW5kYW50RE9NRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGFzY2VuZGFudEVsZW1lbnRzO1xuICB9XG5cbiAgZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudChzZWxlY3RvciA9ICcqJykge1xuICAgIGxldCBwcmV2aW91c1NpYmxpbmdFbGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IHByZXZpb3VzU2libGluZ0RPTU5vZGUgPSB0aGlzLmRvbUVsZW1lbnQucHJldmlvdXNTaWJsaW5nOyAgLy8vXG5cbiAgICBpZiAoKHByZXZpb3VzU2libGluZ0RPTU5vZGUgIT09IG51bGwpICYmIGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IocHJldmlvdXNTaWJsaW5nRE9NTm9kZSwgc2VsZWN0b3IpKSB7XG4gICAgICBwcmV2aW91c1NpYmxpbmdFbGVtZW50ID0gcHJldmlvdXNTaWJsaW5nRE9NTm9kZS5fX2VsZW1lbnRfXyB8fCBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBwcmV2aW91c1NpYmxpbmdFbGVtZW50O1xuICB9XG5cbiAgZ2V0TmV4dFNpYmxpbmdFbGVtZW50KHNlbGVjdG9yID0gJyonKSB7XG4gICAgbGV0IG5leHRTaWJsaW5nRWxlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBuZXh0U2libGluZ0RPTU5vZGUgPSB0aGlzLmRvbUVsZW1lbnQubmV4dFNpYmxpbmc7XG5cbiAgICBpZiAoKG5leHRTaWJsaW5nRE9NTm9kZSAhPT0gbnVsbCkgJiYgZG9tTm9kZU1hdGNoZXNTZWxlY3RvcihuZXh0U2libGluZ0RPTU5vZGUsIHNlbGVjdG9yKSkge1xuICAgICAgbmV4dFNpYmxpbmdFbGVtZW50ID0gbmV4dFNpYmxpbmdET01Ob2RlLl9fZWxlbWVudF9fIHx8IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHRTaWJsaW5nRWxlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBjbG9uZShDbGFzcywgZWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgZGVlcCA9IHRydWUsXG4gICAgICAgICAgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudC5jbG9uZU5vZGUoZGVlcCk7XG5cbiAgICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChkb21FbGVtZW50KTtcbiAgICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChudWxsKTtcblxuICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KENsYXNzLCByZW1haW5pbmdBcmd1bWVudHMpKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChDbGFzcywgaHRtbCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3Qgb3V0ZXJET01FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBvdXRlckRPTUVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbDsgIC8vL1xuXG4gICAgY29uc3QgZG9tRWxlbWVudCA9IG91dGVyRE9NRWxlbWVudC5maXJzdENoaWxkO1xuXG4gICAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQoZG9tRWxlbWVudCk7XG4gICAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQobnVsbCk7XG5cbiAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShDbGFzcywgcmVtYWluaW5nQXJndW1lbnRzKSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoQ2xhc3MsIGRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KGRvbUVsZW1lbnQpO1xuICAgIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KG51bGwpO1xuXG4gICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoQ2xhc3MsIHJlbWFpbmluZ0FyZ3VtZW50cykpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB0YWdOYW1lID0gQ2xhc3MudGFnTmFtZSxcbiAgICAgICAgICBodG1sID0gYDwke3RhZ05hbWV9IC8+YCxcbiAgICAgICAgICBlbGVtZW50ID0gRWxlbWVudC5mcm9tSFRNTChDbGFzcywgaHRtbCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIGNvbnN0IGRlZmF1bHRQcm9wZXJ0aWVzID0gQ2xhc3MuZGVmYXVsdFByb3BlcnRpZXMsXG4gICAgICAgICAgaWdub3JlZFByb3BlcnRpZXMgPSBDbGFzcy5pZ25vcmVkUHJvcGVydGllcztcblxuICAgIGVsZW1lbnQuYXBwbHlQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcyk7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBqc3hNaXhpbik7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBldmVudE1peGluKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGNsaWNrTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgc2Nyb2xsTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgcmVzaXplTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgbW91c2VNaXhpbik7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBrZXlNaXhpbik7XG5cbk9iamVjdC5hc3NpZ24oRWxlbWVudCwge1xuICBMRUZUX01PVVNFX0JVVFRPTjogMCxcbiAgTUlERExFX01PVVNFX0JVVFRPTjogMSxcbiAgUklHSFRfTU9VU0VfQlVUVE9OOiAyXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBFbGVtZW50O1xuXG5mdW5jdGlvbiBkb21FbGVtZW50RnJvbVNlbGVjdG9yKHNlbGVjdG9yKSB7XG4gIGNvbnN0IGRvbUVsZW1lbnQgPSAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykgP1xuICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVswXSA6ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjsgIC8vL1xuXG4gIHJldHVybiBkb21FbGVtZW50O1xufVxuXG5mdW5jdGlvbiBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhkb21FbGVtZW50cykge1xuICBjb25zdCBkb21FbGVtZW50c1dpdGhFbGVtZW50cyA9IGZpbHRlcihkb21FbGVtZW50cywgZnVuY3Rpb24oZG9tRWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiAoZG9tRWxlbWVudC5fX2VsZW1lbnRfXyAhPT0gdW5kZWZpbmVkKTtcbiAgICAgICAgfSksXG4gICAgICAgIGVsZW1lbnRzID0gZG9tRWxlbWVudHNXaXRoRWxlbWVudHMubWFwKGZ1bmN0aW9uKGRvbUVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gZG9tRWxlbWVudC5fX2VsZW1lbnRfXztcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBkZXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShkb21Ob2RlLCBkZXNjZW5kYW50RE9NTm9kZXMgPSBbXSkge1xuICBjb25zdCBjaGlsZERPTU5vZGVzID0gZG9tTm9kZS5jaGlsZE5vZGVzOyAgLy8vXG5cbiAgZGVzY2VuZGFudERPTU5vZGVzLmNvbmNhdChjaGlsZERPTU5vZGVzKTtcblxuICBjaGlsZERPTU5vZGVzLmZvckVhY2goZnVuY3Rpb24oY2hpbGRET01Ob2RlKSB7XG4gICAgZGVzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUoY2hpbGRET01Ob2RlLCBkZXNjZW5kYW50RE9NTm9kZXMpO1xuICB9KTtcblxuICByZXR1cm4gZGVzY2VuZGFudERPTU5vZGVzO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJET01Ob2Rlcyhkb21Ob2Rlcywgc2VsZWN0b3IpIHtcbiAgY29uc3QgZmlsdGVyZWRET01Ob2RlcyA9IGZpbHRlcihkb21Ob2RlcywgZnVuY3Rpb24oZG9tTm9kZSkge1xuICAgIHJldHVybiBkb21Ob2RlTWF0Y2hlc1NlbGVjdG9yKGRvbU5vZGUsIHNlbGVjdG9yKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZpbHRlcmVkRE9NTm9kZXM7XG59XG5cbmZ1bmN0aW9uIGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IoZG9tTm9kZSwgc2VsZWN0b3IpIHtcbiAgY29uc3QgZG9tTm9kZVR5cGUgPSBkb21Ob2RlLm5vZGVUeXBlO1xuXG4gIHN3aXRjaCAoZG9tTm9kZVR5cGUpIHtcbiAgICBjYXNlIE5vZGUuRUxFTUVOVF9OT0RFIDoge1xuICAgICAgY29uc3QgZG9tRWxlbWVudCA9IGRvbU5vZGU7IC8vL1xuXG4gICAgICByZXR1cm4gZG9tRWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKTtcbiAgICB9XG5cbiAgICBjYXNlIE5vZGUuVEVYVF9OT0RFIDoge1xuICAgICAgaWYgKHNlbGVjdG9yID09PSAnKicpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXIoYXJyYXksIHRlc3QpIHtcbiAgY29uc3QgZmlsdGVyZWRBcnJheSA9IFtdO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHJlc3VsdCA9IHRlc3QoZWxlbWVudCk7XG5cbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICBmaWx0ZXJlZEFycmF5LnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZpbHRlcmVkQXJyYXk7XG59XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpO1xuXG5jbGFzcyBCb2R5IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yID0gJ2JvZHknKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBCb2R5LmNsb25lKHRoaXMpOyB9XG5cbiAgc3RhdGljIGNsb25lKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gRWxlbWVudC5jbG9uZShCb2R5LCBlbGVtZW50KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbUhUTUwoQm9keSwgaHRtbCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICAgIHJldHVybiBFbGVtZW50LmZyb21ET01FbGVtZW50KEJvZHksIGRvbUVsZW1lbnQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICByZXR1cm4gRWxlbWVudC5mcm9tUHJvcGVydGllcyhCb2R5LCBwcm9wZXJ0aWVzKTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKEJvZHksIHtcbiAgdGFnTmFtZTogJ2JvZHknXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBCb2R5O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpO1xuXG5jbGFzcyBCdXR0b24gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNsaWNrSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjbGlja0hhbmRsZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5vbkNsaWNrKGNsaWNrSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoY2xpY2tIYW5kbGVyKSB7IHJldHVybiBCdXR0b24uY2xvbmUodGhpcywgY2xpY2tIYW5kbGVyKTsgfVxuXG4gIG9uQ2xpY2soY2xpY2tIYW5kbGVyLCBpbnRlcm1lZGlhdGVDbGlja0hhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyKSB7XG4gICAgc3VwZXIub25DbGljayhjbGlja0hhbmRsZXIsIGludGVybWVkaWF0ZUNsaWNrSGFuZGxlcik7XG4gIH1cblxuICBvZmZDbGljayhjbGlja0hhbmRsZXIpIHtcbiAgICBzdXBlci5vZmZDbGljayhjbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGNsb25lKGVsZW1lbnQsIGNsaWNrSGFuZGxlcikge1xuICAgIHJldHVybiBFbGVtZW50LmNsb25lKEJ1dHRvbiwgZWxlbWVudCwgY2xpY2tIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sLCBjbGlja0hhbmRsZXIpIHtcbiAgICByZXR1cm4gRWxlbWVudC5mcm9tSFRNTChCdXR0b24sIGh0bWwsIGNsaWNrSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCwgY2xpY2tIYW5kbGVyKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoQnV0dG9uLCBkb21FbGVtZW50LCBjbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IG9uQ2xpY2sgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY2xpY2tIYW5kbGVyID0gb25DbGljazsgLy8vXG5cbiAgICByZXR1cm4gRWxlbWVudC5mcm9tUHJvcGVydGllcyhCdXR0b24sIHByb3BlcnRpZXMsIGNsaWNrSGFuZGxlcik7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihCdXR0b24sIHtcbiAgdGFnTmFtZTogJ2J1dHRvbicsXG4gIGlnbm9yZWRQcm9wZXJ0aWVzOiBbXG4gICAgJ29uQ2xpY2snXG4gIF1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJ1dHRvbjtcblxuZnVuY3Rpb24gZGVmYXVsdEludGVybWVkaWF0ZUNsaWNrSGFuZGxlcihjbGlja0hhbmRsZXIsIGV2ZW50LCB0YXJnZXRFbGVtZW50KSB7XG4gIGNvbnN0IG1vdXNlQnV0dG9uID0gZXZlbnQuYnV0dG9uLFxuICAgICAgICBwcmV2ZW50RGVmYXVsdCA9IGNsaWNrSGFuZGxlcihtb3VzZUJ1dHRvbiwgdGFyZ2V0RWxlbWVudCk7XG5cbiAgcmV0dXJuIHByZXZlbnREZWZhdWx0O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpO1xuXG5jbGFzcyBDaGVja2JveCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY2hhbmdlSGFuZGxlciwgY2hlY2tlZCkge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjaGFuZ2VIYW5kbGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoY2hhbmdlSGFuZGxlcik7XG4gICAgfVxuICAgIFxuICAgIGlmIChjaGVja2VkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuY2hlY2soY2hlY2tlZCk7XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gQ2hlY2tib3guY2xvbmUodGhpcywgY2hhbmdlSGFuZGxlcik7IH1cblxuICBvbkNoYW5nZShjaGFuZ2VIYW5kbGVyLCBpbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIpIHtcbiAgICB0aGlzLm9uKCdjbGljaycsIGNoYW5nZUhhbmRsZXIsIGludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIpOyAgLy8vXG4gIH1cbiAgXG4gIG9mZkNoYW5nZShjaGFuZ2VIYW5kbGVyKSB7XG4gICAgdGhpcy5vZmYoJ2NsaWNrJywgY2hhbmdlSGFuZGxlcik7ICAvLy9cbiAgfVxuXG4gIGNoZWNrKGNoZWNrZWQgPSB0cnVlKSB7XG4gICAgY2hlY2tlZCA/XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICdjaGVja2VkJykgOlxuICAgICAgICB0aGlzLmNsZWFyQXR0cmlidXRlKCdjaGVja2VkJyk7XG4gIH1cblxuICBpc0NoZWNrZWQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2hlY2tlZDsgfVxuXG4gIG9uUmVzaXplKCkge31cblxuICBvZmZSZXNpemUoKSB7fVxuXG4gIHN0YXRpYyBjbG9uZShlbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuY2xvbmUoQ2hlY2tib3gsIGVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICByZXR1cm4gRWxlbWVudC5mcm9tSFRNTChDaGVja2JveCwgaHRtbCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBFbGVtZW50LmZyb21ET01FbGVtZW50KENoZWNrYm94LCBkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSwgY2hlY2tlZCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gb25DaGFuZ2U7IC8vLyAgICBcblxuICAgIHJldHVybiBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENoZWNrYm94LCBwcm9wZXJ0aWVzLCBjaGFuZ2VIYW5kbGVyLCBjaGVja2VkKTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKENoZWNrYm94LCB7XG4gIHRhZ05hbWU6ICdpbnB1dCcsXG4gIGlnbm9yZWRQcm9wZXJ0aWVzOiBbXG4gICAgJ29uQ2hhbmdlJyxcbiAgICAnY2hlY2tlZCdcbiAgXSxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICB0eXBlOiAnY2hlY2tib3gnXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENoZWNrYm94O1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcihjaGFuZ2VIYW5kbGVyLCBldmVudCwgdGFyZ2V0RWxlbWVudCkge1xuICBjb25zdCBjaGVja2JveCA9IHRhcmdldEVsZW1lbnQsIC8vL1xuICAgICAgICBjaGVja2VkID0gY2hlY2tib3guaXNDaGVja2VkKCksXG4gICAgICAgIHByZXZlbnREZWZhdWx0ID0gY2hhbmdlSGFuZGxlcihjaGVja2VkLCB0YXJnZXRFbGVtZW50KTtcblxuICByZXR1cm4gcHJldmVudERlZmF1bHQ7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50Jyk7XG5cbmNsYXNzIERpdiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gRGl2LmNsb25lKHRoaXMpOyB9XG5cbiAgc3RhdGljIGNsb25lKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gRWxlbWVudC5jbG9uZShEaXYsIGVsZW1lbnQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwpIHtcbiAgICByZXR1cm4gRWxlbWVudC5mcm9tSFRNTChEaXYsIGh0bWwpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpIHtcbiAgICByZXR1cm4gRWxlbWVudC5mcm9tRE9NRWxlbWVudChEaXYsIGRvbUVsZW1lbnQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICByZXR1cm4gRWxlbWVudC5mcm9tUHJvcGVydGllcyhEaXYsIHByb3BlcnRpZXMpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oRGl2LCB7XG4gIHRhZ05hbWU6ICdkaXYnXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBEaXY7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50Jyk7XG5cbmNsYXNzIExpbmsgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNsaWNrSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjbGlja0hhbmRsZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5vbkNsaWNrKGNsaWNrSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoY2xpY2tIYW5kbGVyKSB7IHJldHVybiBMaW5rLmNsb25lKHRoaXMsIGNsaWNrSGFuZGxlcik7IH1cblxuICBvbkNsaWNrKGNsaWNrSGFuZGxlciwgaW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUNsaWNrSGFuZGxlcikge1xuICAgIHRoaXMub24oJ2NsaWNrJywgY2xpY2tIYW5kbGVyLCBpbnRlcm1lZGlhdGVDbGlja0hhbmRsZXIpO1xuICB9XG4gIFxuICBvZmZDbGljayhjbGlja0hhbmRsZXIpIHtcbiAgICB0aGlzLm9mZignY2xpY2snLCBjbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGNsb25lKGVsZW1lbnQsIGNsaWNrSGFuZGxlcikge1xuICAgIHJldHVybiBFbGVtZW50LmNsb25lKExpbmssIGVsZW1lbnQsIGNsaWNrSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCwgY2xpY2tIYW5kbGVyKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbUhUTUwoTGluaywgaHRtbCwgY2xpY2tIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50LCBjbGlja0hhbmRsZXIpIHtcbiAgICByZXR1cm4gRWxlbWVudC5mcm9tRE9NRWxlbWVudChMaW5rLCBkb21FbGVtZW50LCBjbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IG9uQ2xpY2sgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY2xpY2tIYW5kbGVyID0gb25DbGljazsgLy8vICAgIFxuXG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoTGluaywgcHJvcGVydGllcywgY2xpY2tIYW5kbGVyKTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKExpbmssIHtcbiAgdGFnTmFtZTogJ2EnLFxuICBpZ25vcmVkUHJvcGVydGllczogW1xuICAgICdvbkNsaWNrJ1xuICBdXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBMaW5rO1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyKGNsaWNrSGFuZGxlciwgZXZlbnQsIHRhcmdldEVsZW1lbnQpIHtcbiAgY29uc3QgbGluayA9IHRhcmdldEVsZW1lbnQsIC8vL1xuICAgICAgICBocmVmID0gbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSxcbiAgICAgICAgcHJldmVudERlZmF1bHQgPSBjbGlja0hhbmRsZXIoaHJlZiwgdGFyZ2V0RWxlbWVudCk7XG5cbiAgcmV0dXJuIHByZXZlbnREZWZhdWx0O1xufSIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKTtcblxuY2xhc3MgU2VsZWN0IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgaWYgKGNoYW5nZUhhbmRsZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5vbkNoYW5nZShjaGFuZ2VIYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBjbG9uZShjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBTZWxlY3QuY2xvbmUodGhpcywgY2hhbmdlSGFuZGxlcik7IH1cblxuICBvbkNoYW5nZShjaGFuZ2VIYW5kbGVyLCBpbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIpIHtcbiAgICB0aGlzLm9uKCdjaGFuZ2UnLCBjaGFuZ2VIYW5kbGVyLCBpbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIG9mZkNoYW5nZShjaGFuZ2VIYW5kbGVyKSB7XG4gICAgdGhpcy5vZmYoJ2NoYW5nZScsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgZ2V0U2VsZWN0ZWRPcHRpb25WYWx1ZSgpIHtcbiAgICBjb25zdCBzZWxlY3RlZE9wdGlvblZhbHVlID0gdGhpcy5kb21FbGVtZW50LnZhbHVlOyAgLy8vXG4gICAgXG4gICAgcmV0dXJuIHNlbGVjdGVkT3B0aW9uVmFsdWU7XG4gIH1cblxuICBzZXRTZWxlY3RlZE9wdGlvbkJ5VmFsdWUoc2VsZWN0ZWRPcHRpb25WYWx1ZSkge1xuICAgIGNvbnN0IHZhbHVlID0gc2VsZWN0ZWRPcHRpb25WYWx1ZTsgIC8vL1xuICAgIFxuICAgIHRoaXMuZG9tRWxlbWVudC52YWx1ZSA9IHZhbHVlOyBcbiAgfVxuXG4gIHN0YXRpYyBjbG9uZShlbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuY2xvbmUoU2VsZWN0LCBlbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sLCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbUhUTUwoU2VsZWN0LCBodG1sLCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoU2VsZWN0LCBkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gb25DaGFuZ2U7IC8vLyAgICBcblxuICAgIHJldHVybiBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFNlbGVjdCwgcHJvcGVydGllcywgY2hhbmdlSGFuZGxlcik7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihTZWxlY3QsIHtcbiAgdGFnTmFtZTogJ3NlbGVjdCcsXG4gIGlnbm9yZWRQcm9wZXJ0aWVzOiBbXG4gICAgJ29uQ2hhbmdlJ1xuICBdXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBTZWxlY3Q7XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyKGNoYW5nZUhhbmRsZXIsIGV2ZW50LCB0YXJnZXRFbGVtZW50KSB7XG4gIGNvbnN0IHNlbGVjdCA9IHRhcmdldEVsZW1lbnQsIC8vL1xuICAgICAgICBzZWxlY3RlZE9wdGlvblZhbHVlID0gc2VsZWN0LmdldFNlbGVjdGVkT3B0aW9uVmFsdWUoKSxcbiAgICAgICAgcHJldmVudERlZmF1bHQgPSBjaGFuZ2VIYW5kbGVyKHNlbGVjdGVkT3B0aW9uVmFsdWUsIHRhcmdldEVsZW1lbnQpO1xuXG4gIHJldHVybiBwcmV2ZW50RGVmYXVsdDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKTtcblxuY2xhc3MgU3BhbiBleHRlbmRzIEVsZW1lbnQge1xuICBjbG9uZSgpIHsgcmV0dXJuIFNwYW4uY2xvbmUodGhpcyk7IH1cblxuICBvblJlc2l6ZSgpIHt9XG5cbiAgb2ZmUmVzaXplKCkge31cblxuICBzdGF0aWMgY2xvbmUoZWxlbWVudCkge1xuICAgIHJldHVybiBFbGVtZW50LmNsb25lKFNwYW4sIGVsZW1lbnQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwpIHtcbiAgICByZXR1cm4gRWxlbWVudC5mcm9tSFRNTChTcGFuLCBodG1sKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50KSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoU3BhbiwgZG9tRWxlbWVudCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIHJldHVybiBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oU3Bhbiwge1xuICB0YWdOYW1lOiAnc3Bhbidcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNwYW47XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKTtcblxuY2xhc3MgSW5wdXRFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgaWYgKGNoYW5nZUhhbmRsZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5vbkNoYW5nZShjaGFuZ2VIYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBvblJlc2l6ZSgpIHt9XG5cbiAgb2ZmUmVzaXplKCkge31cblxuICBvbkNoYW5nZShjaGFuZ2VIYW5kbGVyLCBpbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIpIHtcbiAgICB0aGlzLm9uKCdjaGFuZ2UnLCBjaGFuZ2VIYW5kbGVyLCBpbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIG9mZkNoYW5nZShjaGFuZ2VIYW5kbGVyKSB7XG4gICAgdGhpcy5vZmYoJ2NoYW5nZScsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgZ2V0VmFsdWUoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQudmFsdWU7IH1cblxuICBnZXRTZWxlY3Rpb25TdGFydCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zZWxlY3Rpb25TdGFydDsgfVxuXG4gIGdldFNlbGVjdGlvbkVuZCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zZWxlY3Rpb25FbmQ7IH1cblxuICBzZXRWYWx1ZSh2YWx1ZSkgeyB0aGlzLmRvbUVsZW1lbnQudmFsdWUgPSB2YWx1ZTsgfVxuXG4gIHNldFNlbGVjdGlvblN0YXJ0KHNlbGVjdGlvblN0YXJ0KSB7IHRoaXMuZG9tRWxlbWVudC5zZWxlY3Rpb25TdGFydCA9IHNlbGVjdGlvblN0YXJ0OyB9XG5cbiAgc2V0U2VsZWN0aW9uRW5kKHNlbGVjdGlvbkVuZCkgeyB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uRW5kID0gc2VsZWN0aW9uRW5kOyB9XG5cbiAgc2VsZWN0KCkgeyB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0KCk7IH1cblxuICBzdGF0aWMgY2xvbmUoQ2xhc3MsIGVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIHJldHVybiBFbGVtZW50LmNsb25lKENsYXNzLCBlbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUhUTUwoQ2xhc3MsIGh0bWwsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIHJldHVybiBFbGVtZW50LmZyb21IVE1MKENsYXNzLCBodG1sLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KENsYXNzLCBkb21FbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICByZXR1cm4gRWxlbWVudC5mcm9tRE9NRWxlbWVudChDbGFzcywgZG9tRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gb25DaGFuZ2U7IC8vL1xuXG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGNoYW5nZUhhbmRsZXIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihJbnB1dEVsZW1lbnQsIHtcbiAgaWdub3JlZFByb3BlcnRpZXM6IFtcbiAgICAnb25DaGFuZ2UnXG4gIF1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IElucHV0RWxlbWVudDtcblxuZnVuY3Rpb24gZGVmYXVsdEludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIoY2hhbmdlSGFuZGxlciwgZXZlbnQsIHRhcmdldEVsZW1lbnQpIHtcbiAgY29uc3QgaW5wdXRFbGVtZW50ID0gdGFyZ2V0RWxlbWVudCwgLy8vXG4gICAgICAgIHZhbHVlID0gaW5wdXRFbGVtZW50LmdldFZhbHVlKCksXG4gICAgICAgIHByZXZlbnREZWZhdWx0ID0gY2hhbmdlSGFuZGxlcih2YWx1ZSwgdGFyZ2V0RWxlbWVudCk7XG5cbiAgcmV0dXJuIHByZXZlbnREZWZhdWx0O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBJbnB1dEVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnB1dEVsZW1lbnQnKTtcblxuY2xhc3MgSW5wdXQgZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBjbG9uZShjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBJbnB1dC5jbG9uZSh0aGlzLCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyBjbG9uZShlbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5jbG9uZShJbnB1dCwgZWxlbWVudCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbUhUTUwoSW5wdXQsIGh0bWwsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21ET01FbGVtZW50KElucHV0LCBkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tUHJvcGVydGllcyhJbnB1dCwgcHJvcGVydGllcyk7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihJbnB1dCwge1xuICB0YWdOYW1lOiAnaW5wdXQnXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnB1dDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgSW5wdXRFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW5wdXRFbGVtZW50Jyk7XG5cbmNsYXNzIFRleHRhcmVhIGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgY2xvbmUoY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gVGV4dGFyZWEuY2xvbmUodGhpcywgY2hhbmdlSGFuZGxlcik7IH1cblxuICBzdGF0aWMgY2xvbmUoZWxlbWVudCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuY2xvbmUoVGV4dGFyZWEsIGVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21IVE1MKFRleHRhcmVhLCBodG1sLCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tRE9NRWxlbWVudChUZXh0YXJlYSwgZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoVGV4dGFyZWEsIHByb3BlcnRpZXMpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oVGV4dGFyZWEsIHtcbiAgdGFnTmFtZTogJ3RleHRhcmVhJ1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dGFyZWE7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIEJvdW5kcyB7XG4gIGNvbnN0cnVjdG9yKHRvcCwgbGVmdCwgYm90dG9tLCByaWdodCkge1xuICAgIHRoaXMudG9wID0gdG9wO1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgdGhpcy5ib3R0b20gPSBib3R0b207XG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICB9XG5cbiAgZ2V0VG9wKCkge1xuICAgIHJldHVybiB0aGlzLnRvcDtcbiAgfVxuXG4gIGdldExlZnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdDtcbiAgfVxuXG4gIGdldEJvdHRvbSgpIHtcbiAgICByZXR1cm4gdGhpcy5ib3R0b207XG4gIH1cblxuICBnZXRSaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5yaWdodDtcbiAgfVxuXG4gIGlzT3ZlcmxhcHBpbmdNb3VzZShtb3VzZVRvcCwgbW91c2VMZWZ0KSB7XG4gICAgcmV0dXJuICggICh0aGlzLnRvcCA8IG1vdXNlVG9wKSAmJlxuICAgICAgICAgICAgICAodGhpcy5sZWZ0IDwgbW91c2VMZWZ0KSAmJlxuICAgICAgICAgICAgICAodGhpcy5ib3R0b20gPiBtb3VzZVRvcCkgJiZcbiAgICAgICAgICAgICAgKHRoaXMucmlnaHQgPiBtb3VzZUxlZnQpICApO1xuICB9XG5cbiAgYXJlT3ZlcmxhcHBpbmcoYm91bmRzKSB7XG4gICAgcmV0dXJuICggICh0aGlzLnRvcCA8IGJvdW5kcy5ib3R0b20pICYmXG4gICAgICAgICAgICAgICh0aGlzLmxlZnQgPCBib3VuZHMucmlnaHQpICYmXG4gICAgICAgICAgICAgICh0aGlzLmJvdHRvbSA+IGJvdW5kcy50b3ApICYmXG4gICAgICAgICAgICAgICh0aGlzLnJpZ2h0ID4gYm91bmRzLmxlZnQpICApO1xuICB9XG5cbiAgc3RhdGljIGZyb21Cb3VuZGluZ0NsaWVudFJlY3QoYm91bmRpbmdDbGllbnRSZWN0KSB7XG4gICAgY29uc3Qgd2luZG93U2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0LCAvLy9cbiAgICAgICAgICB3aW5kb3dTY3JvbGxMZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0LCAgLy8vXG4gICAgICAgICAgdG9wID0gYm91bmRpbmdDbGllbnRSZWN0LnRvcCArIHdpbmRvd1Njcm9sbFRvcCxcbiAgICAgICAgICBsZWZ0ID0gYm91bmRpbmdDbGllbnRSZWN0LmxlZnQgKyB3aW5kb3dTY3JvbGxMZWZ0LFxuICAgICAgICAgIGJvdHRvbSA9IGJvdW5kaW5nQ2xpZW50UmVjdC5ib3R0b20gKyB3aW5kb3dTY3JvbGxUb3AsXG4gICAgICAgICAgcmlnaHQgPSBib3VuZGluZ0NsaWVudFJlY3QucmlnaHQgKyB3aW5kb3dTY3JvbGxMZWZ0LFxuICAgICAgICAgIGJvdW5kcyA9IG5ldyBCb3VuZHModG9wLCBsZWZ0LCBib3R0b20sIHJpZ2h0KTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCb3VuZHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIE9mZnNldCB7XG4gIGNvbnN0cnVjdG9yKHRvcCwgbGVmdCkge1xuICAgIHRoaXMudG9wID0gdG9wO1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gIH1cblxuICBnZXRUb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9wO1xuICB9XG5cbiAgZ2V0TGVmdCgpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT2Zmc2V0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBvbkNsaWNrKGhhbmRsZXIsIGludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlSGFuZGxlcikge1xuICB0aGlzLm9uKCdjbGljaycsIGhhbmRsZXIsIGludGVybWVkaWF0ZUhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvZmZDbGljayhoYW5kbGVyKSB7IHRoaXMub2ZmKCdjbGljaycsIGhhbmRsZXIpOyB9XG5cbmNvbnN0IGNsaWNrTWl4aW4gPSB7XG4gIG9uQ2xpY2s6IG9uQ2xpY2ssXG4gIG9mZkNsaWNrOiBvZmZDbGlja1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjbGlja01peGluO1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlSGFuZGxlcihoYW5kbGVyLCBldmVudCwgdGFyZ2V0RWxlbWVudCkge1xuICBjb25zdCBtb3VzZVRvcCA9IGV2ZW50LnBhZ2VZLCAgLy8vXG4gICAgICAgIG1vdXNlTGVmdCA9IGV2ZW50LnBhZ2VYLCAvLy9cbiAgICAgICAgbW91c2VCdXR0b24gPSBldmVudC5idXR0b24sIC8vL1xuICAgICAgICBwcmV2ZW50RGVmYXVsdCA9IGhhbmRsZXIobW91c2VUb3AsIG1vdXNlTGVmdCwgbW91c2VCdXR0b24sIHRhcmdldEVsZW1lbnQpO1xuXG4gIHJldHVybiBwcmV2ZW50RGVmYXVsdDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gb24oZXZlbnRUeXBlcywgaGFuZGxlciwgaW50ZXJtZWRpYXRlSGFuZGxlcikge1xuICBldmVudFR5cGVzID0gZXZlbnRUeXBlcy5zcGxpdCgnICcpOyAvLy9cblxuICBldmVudFR5cGVzLmZvckVhY2goZnVuY3Rpb24oZXZlbnRUeXBlKSB7XG4gICAgb25FdmVudCh0aGlzLCBldmVudFR5cGUsIGhhbmRsZXIsIGludGVybWVkaWF0ZUhhbmRsZXIpO1xuICB9LmJpbmQodGhpcykpO1xufVxuXG5mdW5jdGlvbiBvZmYoZXZlbnRUeXBlcywgaGFuZGxlcikge1xuICBldmVudFR5cGVzID0gZXZlbnRUeXBlcy5zcGxpdCgnICcpOyAvLy9cblxuICBldmVudFR5cGVzLmZvckVhY2goZnVuY3Rpb24oZXZlbnRUeXBlKSB7XG4gICAgb2ZmRXZlbnQodGhpcywgZXZlbnRUeXBlLCBoYW5kbGVyKTtcbiAgfS5iaW5kKHRoaXMpKTtcbn1cblxuY29uc3QgZXZlbnRNaXhpbiA9IHtcbiAgb246IG9uLFxuICBvZmY6IG9mZlxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBldmVudE1peGluO1xuXG5mdW5jdGlvbiBvbkV2ZW50KGVsZW1lbnQsIGV2ZW50VHlwZSwgaGFuZGxlciwgaW50ZXJtZWRpYXRlSGFuZGxlcikge1xuICBpZiAoIWVsZW1lbnQuaGFzT3duUHJvcGVydHkoJ2V2ZW50T2JqZWN0TWFwJykpIHtcbiAgICBjb25zdCBldmVudE9iamVjdE1hcCA9IHt9O1xuXG4gICAgT2JqZWN0LmFzc2lnbihlbGVtZW50LCB7XG4gICAgICBldmVudE9iamVjdE1hcDogZXZlbnRPYmplY3RNYXBcbiAgICB9KTtcbiAgfVxuXG4gIGxldCBldmVudE9iamVjdCA9IGVsZW1lbnQuZXZlbnRPYmplY3RNYXBbZXZlbnRUeXBlXTtcblxuICBpZiAoIWV2ZW50T2JqZWN0KSB7XG4gICAgZXZlbnRPYmplY3QgPSBjcmVhdGVFdmVudE9iamVjdCgpO1xuXG4gICAgZWxlbWVudC5ldmVudE9iamVjdE1hcFtldmVudFR5cGVdID0gZXZlbnRPYmplY3Q7XG4gIH1cblxuICBldmVudE9iamVjdC5hZGRIYW5kbGVyKGVsZW1lbnQsIGV2ZW50VHlwZSwgaGFuZGxlciwgaW50ZXJtZWRpYXRlSGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIG9mZkV2ZW50KGVsZW1lbnQsIGV2ZW50VHlwZSwgaGFuZGxlcikge1xuICBjb25zdCBldmVudE9iamVjdCA9IGVsZW1lbnQuZXZlbnRPYmplY3RNYXBbZXZlbnRUeXBlXSxcbiAgICAgICAgbm9uZVJlbWFpbmluZyA9IGV2ZW50T2JqZWN0LnJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRUeXBlLCBoYW5kbGVyKTtcblxuICBpZiAobm9uZVJlbWFpbmluZykge1xuICAgIGRlbGV0ZSBlbGVtZW50LmV2ZW50T2JqZWN0TWFwW2V2ZW50VHlwZV07XG4gIH1cblxuICBjb25zdCBldmVudFR5cGVzID0gT2JqZWN0LmtleXMoZWxlbWVudC5ldmVudE9iamVjdE1hcCk7XG5cbiAgaWYgKGV2ZW50VHlwZXMubGVuZ3RoID09PSAwKSB7XG4gICAgZGVsZXRlIGVsZW1lbnQuZXZlbnRPYmplY3RNYXA7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRXZlbnRPYmplY3QoKSB7XG4gIGNvbnN0IGV2ZW50TGlzdGVuZXJzID0gW107XG5cbiAgZnVuY3Rpb24gYWRkSGFuZGxlcihlbGVtZW50LCBldmVudFR5cGUsIGhhbmRsZXIsIGludGVybWVkaWF0ZUhhbmRsZXIpIHtcbiAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZWxlbWVudCwgIC8vL1xuICAgICAgICAgIGV2ZW50TGlzdGVuZXIgPSBjcmVhdGVFdmVudExpc3RlbmVyKGhhbmRsZXIsIGludGVybWVkaWF0ZUhhbmRsZXIsIHRhcmdldEVsZW1lbnQpO1xuXG4gICAgZWxlbWVudC5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBldmVudExpc3RlbmVyKTtcblxuICAgIGV2ZW50TGlzdGVuZXJzLnB1c2goZXZlbnRMaXN0ZW5lcik7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIGV2ZW50VHlwZSwgaGFuZGxlciA9IG51bGwpIHtcbiAgICBpZiAoaGFuZGxlciA9PT0gbnVsbCkge1xuICAgICAgZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbihldmVudExpc3RlbmVyKSB7XG4gICAgICAgIGVsZW1lbnQuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgZXZlbnRMaXN0ZW5lcik7XG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgc3RhcnQgPSAwO1xuXG4gICAgICBldmVudExpc3RlbmVycy5zcGxpY2Uoc3RhcnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbmRleCA9IGluZGV4T2ZFdmVudExpc3RlbmVyKGV2ZW50TGlzdGVuZXJzLCBoYW5kbGVyKSxcbiAgICAgICAgICAgIGV2ZW50TGlzdGVuZXIgPSBldmVudExpc3RlbmVyc1tpbmRleF07XG5cbiAgICAgIGVsZW1lbnQuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgZXZlbnRMaXN0ZW5lcik7XG5cbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgICAgZXZlbnRMaXN0ZW5lcnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gICAgfVxuXG4gICAgY29uc3Qgbm9uZVJlbWFpbmluZyA9IChldmVudExpc3RlbmVycy5sZW5ndGggPT09IDApOyAgLy8vXG5cbiAgICByZXR1cm4gbm9uZVJlbWFpbmluZztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYWRkSGFuZGxlcjogYWRkSGFuZGxlcixcbiAgICByZW1vdmVIYW5kbGVyOiByZW1vdmVIYW5kbGVyXG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUV2ZW50TGlzdGVuZXIoaGFuZGxlciwgaW50ZXJtZWRpYXRlSGFuZGxlciwgdGFyZ2V0RWxlbWVudCkge1xuICBpZiAodHlwZW9mIGludGVybWVkaWF0ZUhhbmRsZXIgPT09ICdvYmplY3QnKSB7XG4gICAgY29uc3Qgb2JqZWN0ID0gaW50ZXJtZWRpYXRlSGFuZGxlcjsgIC8vL1xuXG4gICAgaW50ZXJtZWRpYXRlSGFuZGxlciA9IGNyZWF0ZUJpbmRpbmdJbnRlcm1lZGlhdGVIYW5kbGVyKG9iamVjdCk7IC8vL1xuICB9XG5cbiAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgY29uc3QgcHJldmVudERlZmF1bHQgPSAoaW50ZXJtZWRpYXRlSGFuZGxlciAhPT0gdW5kZWZpbmVkKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcm1lZGlhdGVIYW5kbGVyKGhhbmRsZXIsIGV2ZW50LCB0YXJnZXRFbGVtZW50KSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIoZXZlbnQsIHRhcmdldEVsZW1lbnQpO1xuXG4gICAgaWYgKHByZXZlbnREZWZhdWx0ID09PSB0cnVlKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9O1xuXG4gIE9iamVjdC5hc3NpZ24oZXZlbnRMaXN0ZW5lciwge1xuICAgIGhhbmRsZXI6IGhhbmRsZXJcbiAgfSk7XG5cbiAgcmV0dXJuIGV2ZW50TGlzdGVuZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJpbmRpbmdJbnRlcm1lZGlhdGVIYW5kbGVyKG9iamVjdCkge1xuICBjb25zdCBiaW5kaW5nSW50ZXJtZWRpYXRlSGFuZGxlciA9IGZ1bmN0aW9uKGhhbmRsZXIsIGV2ZW50LCB0YXJnZXRFbGVtZW50KSB7XG4gICAgY29uc3QgcHJldmVudERlZmF1bHQgPSBoYW5kbGVyLmNhbGwob2JqZWN0LCBldmVudCwgdGFyZ2V0RWxlbWVudCk7XG5cbiAgICByZXR1cm4gcHJldmVudERlZmF1bHQ7XG4gIH07XG5cbiAgcmV0dXJuIGJpbmRpbmdJbnRlcm1lZGlhdGVIYW5kbGVyO1xufVxuXG5mdW5jdGlvbiBpbmRleE9mRXZlbnRMaXN0ZW5lcihldmVudExpc3RlbmVycywgaGFuZGxlcikge1xuICBsZXQgZm91bmRJbmRleCA9IHVuZGVmaW5lZDsgLy8vXG5cbiAgZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbihldmVudExpc3RlbmVyLCBpbmRleCkge1xuICAgIGlmIChldmVudExpc3RlbmVyLmhhbmRsZXIgPT09IGhhbmRsZXIpIHsgIC8vL1xuICAgICAgZm91bmRJbmRleCA9IGluZGV4O1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgaW5kZXggPSBmb3VuZEluZGV4OyAvLy9cblxuICByZXR1cm4gaW5kZXg7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFRleHRFbGVtZW50ID0gcmVxdWlyZSgnLi4vdGV4dEVsZW1lbnQnKTtcblxuZnVuY3Rpb24gYWRkVG8ocGFyZW50RWxlbWVudCkge1xuICB1cGRhdGVQYXJlbnRDb250ZXh0KHRoaXMsIHBhcmVudEVsZW1lbnQpO1xuXG4gIHBhcmVudEVsZW1lbnQuYWRkKHRoaXMpO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRUbyhwYXJlbnRFbGVtZW50KSB7XG4gIHVwZGF0ZVBhcmVudENvbnRleHQodGhpcywgcGFyZW50RWxlbWVudCk7XG5cbiAgcGFyZW50RWxlbWVudC5hcHBlbmQodGhpcyk7XG59XG5cbmZ1bmN0aW9uIHByZXBlbmRUbyhwYXJlbnRFbGVtZW50KSB7XG4gIHVwZGF0ZVBhcmVudENvbnRleHQodGhpcywgcGFyZW50RWxlbWVudCk7XG5cbiAgcGFyZW50RWxlbWVudC5wcmVwZW5kKHRoaXMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVGcm9tKHBhcmVudEVsZW1lbnQpIHtcbiAgcGFyZW50RWxlbWVudC5yZW1vdmUodGhpcyk7XG59XG5cbmZ1bmN0aW9uIGFzc2lnbkNvbnRleHQobmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLmNvbnRleHQpLCB0aGVuRGVsZXRlID0gdHJ1ZSkge1xuICBuYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuY29udGV4dFtuYW1lXSxcbiAgICAgICAgICBkZXNjcmlwdG9yID0ge1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgICAgfTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBuYW1lLCBkZXNjcmlwdG9yKTtcblxuICAgIGlmICh0aGVuRGVsZXRlKSB7XG4gICAgICBkZWxldGUgdGhpcy5jb250ZXh0W25hbWVdO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMpKTtcbiAgXG4gIGlmICh0aGVuRGVsZXRlKSB7XG4gICAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLmNvbnRleHQpLFxuICAgICAgICAgIG5hbWVzTGVuZ3RoID0gbmFtZXMubGVuZ3RoOyAvLy9cbiAgICBcbiAgICBpZiAobmFtZXNMZW5ndGggPT09IDApIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmNvbnRleHQ7XG4gICAgfSBcbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVByb3BlcnRpZXMocHJvcGVydGllcyA9IHt9LCBkZWZhdWx0UHJvcGVydGllcywgaWdub3JlZFByb3BlcnRpZXMpIHtcbiAgYXNzaWduKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzKTtcblxuICBjb25zdCBjaGlsZEVsZW1lbnRzID0gY2hpbGRFbGVtZW50c0Zyb21FbGVtZW50QW5kUHJvcGVydGllcyh0aGlzLCBwcm9wZXJ0aWVzKTtcblxuICB1bmFzc2lnbihwcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcyk7XG5cbiAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKTtcblxuICBuYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHByb3BlcnRpZXNbbmFtZV07XG5cbiAgICBpZiAoZmFsc2UpIHtcblxuICAgIH0gZWxzZSBpZiAoaXNIYW5kbGVyTmFtZShuYW1lKSkge1xuICAgICAgYWRkSGFuZGxlcih0aGlzLCBuYW1lLCB2YWx1ZSk7XG4gICAgfSBlbHNlIGlmIChpc0F0dHJpYnV0ZU5hbWUobmFtZSkpIHtcbiAgICAgIGFkZEF0dHJpYnV0ZSh0aGlzLCBuYW1lLCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghdGhpcy5oYXNPd25Qcm9wZXJ0eSgncHJvcGVydGllcycpKSB7XG4gICAgICAgIGNvbnN0IHByb3BlcnRpZXMgPSB7fTtcblxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHtcbiAgICAgICAgICBwcm9wZXJ0aWVzOiBwcm9wZXJ0aWVzXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnByb3BlcnRpZXNbbmFtZV0gPSB2YWx1ZTtcbiAgICB9XG4gIH0uYmluZCh0aGlzKSk7XG5cbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IHRoaXM7IC8vL1xuXG4gIGNoaWxkRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihjaGlsZEVsZW1lbnQpIHtcbiAgICBjaGlsZEVsZW1lbnQuYWRkVG8ocGFyZW50RWxlbWVudCk7XG4gIH0uYmluZCh0aGlzKSk7XG59XG5cbmZ1bmN0aW9uIGdldFByb3BlcnRpZXMoKSB7XG4gIHJldHVybiB0aGlzLnByb3BlcnRpZXM7XG59XG5cbmZ1bmN0aW9uIGdldENvbnRleHQoKSB7XG4gIHJldHVybiB0aGlzLmNvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIGdldFN0YXRlKCkge1xuICByZXR1cm4gdGhpcy5zdGF0ZTtcbn1cblxuZnVuY3Rpb24gc2V0U3RhdGUoc3RhdGUpIHtcbiAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xufVxuXG5mdW5jdGlvbiBmcm9tU3RhdGUobmFtZSkge1xuICBjb25zdCB2YWx1ZSA9IHRoaXMuc3RhdGVbbmFtZV07XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVTdGF0ZSh1cGRhdGUpIHtcbiAgT2JqZWN0LmFzc2lnbih0aGlzLnN0YXRlLCB1cGRhdGUpO1xufVxuXG5jb25zdCBqc3hNaXhpbiA9IHtcbiAgYWRkVG86IGFkZFRvLFxuICBhcHBlbmRUbzogYXBwZW5kVG8sXG4gIHByZXBlbmRUbzogcHJlcGVuZFRvLFxuICByZW1vdmVGcm9tOiByZW1vdmVGcm9tLFxuICBhc3NpZ25Db250ZXh0OiBhc3NpZ25Db250ZXh0LFxuICBhcHBseVByb3BlcnRpZXM6IGFwcGx5UHJvcGVydGllcyxcbiAgZ2V0UHJvcGVydGllczogZ2V0UHJvcGVydGllcyxcbiAgZ2V0Q29udGV4dDogZ2V0Q29udGV4dCxcbiAgZ2V0U3RhdGU6IGdldFN0YXRlLFxuICBzZXRTdGF0ZTogc2V0U3RhdGUsXG4gIGZyb21TdGF0ZTogZnJvbVN0YXRlLFxuICB1cGRhdGVTdGF0ZTogdXBkYXRlU3RhdGVcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ganN4TWl4aW47XG5cbmZ1bmN0aW9uIGNoaWxkRWxlbWVudHNGcm9tRWxlbWVudEFuZFByb3BlcnRpZXMoZWxlbWVudCwgcHJvcGVydGllcykge1xuICBsZXQgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnQuY2hpbGRFbGVtZW50cyA/XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNoaWxkRWxlbWVudHMocHJvcGVydGllcykgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzLmNoaWxkRWxlbWVudHM7XG5cbiAgY2hpbGRFbGVtZW50cyA9IChjaGlsZEVsZW1lbnRzICE9PSB1bmRlZmluZWQpID9cbiAgICAgICAgICAgICAgICAgICAoKGNoaWxkRWxlbWVudHMgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEVsZW1lbnRzIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjaGlsZEVsZW1lbnRzXSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXTtcblxuICBjaGlsZEVsZW1lbnRzID0gY2hpbGRFbGVtZW50cy5tYXAoZnVuY3Rpb24oY2hpbGRFbGVtZW50KSB7XG4gICAgaWYgKHR5cGVvZiBjaGlsZEVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCB0ZXh0ID0gY2hpbGRFbGVtZW50LCAgLy8vXG4gICAgICAgICAgICB0ZXh0RWxlbWVudCA9IG5ldyBUZXh0RWxlbWVudCh0ZXh0KTtcblxuICAgICAgY2hpbGRFbGVtZW50ID0gdGV4dEVsZW1lbnQ7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZEVsZW1lbnQ7XG4gIH0pO1xuXG4gIHJldHVybiBjaGlsZEVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiB1bmFzc2lnbihwcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcyA9IFtdKSB7XG4gIGNvbnN0IGlnbm9yZWRQcm9wZXJ0eU5hbWVzID0gaWdub3JlZFByb3BlcnRpZXM7IC8vL1xuXG4gIGlnbm9yZWRQcm9wZXJ0eU5hbWVzLmZvckVhY2goZnVuY3Rpb24oaWdub3JlZFByb3BlcnR5TmFtZSkge1xuICAgIGlmIChwcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KGlnbm9yZWRQcm9wZXJ0eU5hbWUpKSB7XG4gICAgICBkZWxldGUgcHJvcGVydGllc1tpZ25vcmVkUHJvcGVydHlOYW1lXTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhc3NpZ24ocHJvcGVydGllcywgZGVmYXVsdFByb3BlcnRpZXMgPSB7fSkge1xuICBjb25zdCBkZWZhdWx0UHJvcGVydHlOYW1lcyA9IE9iamVjdC5rZXlzKGRlZmF1bHRQcm9wZXJ0aWVzKTtcblxuICBkZWZhdWx0UHJvcGVydHlOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKGRlZmF1bHRQcm9wZXJ0eU5hbWUpIHtcbiAgICBpZiAoIXByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoZGVmYXVsdFByb3BlcnR5TmFtZSkpIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRQcm9wZXJ0eVZhbHVlID0gZGVmYXVsdFByb3BlcnRpZXNbZGVmYXVsdFByb3BlcnR5TmFtZV07XG5cbiAgICAgIHByb3BlcnRpZXNbZGVmYXVsdFByb3BlcnR5TmFtZV0gPSBkZWZhdWx0UHJvcGVydHlWYWx1ZTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRIYW5kbGVyKGVsZW1lbnQsIG5hbWUsIHZhbHVlKSB7XG4gIGNvbnN0IGV2ZW50VHlwZSA9IG5hbWUuc3Vic3RyKDIpLnRvTG93ZXJDYXNlKCksIC8vL1xuICAgICAgICBoYW5kbGVyID0gdmFsdWU7ICAvLy9cblxuICBlbGVtZW50Lm9uKGV2ZW50VHlwZSwgaGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJpYnV0ZShlbGVtZW50LCBuYW1lLCB2YWx1ZSkge1xuICBpZiAobmFtZSA9PT0gJ2NsYXNzTmFtZScpIHtcbiAgICBuYW1lID0gJ2NsYXNzJztcbiAgfVxuXG4gIGlmIChuYW1lID09PSAnaHRtbEZvcicpIHtcbiAgICBuYW1lID0gJ2Zvcic7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG5cbiAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgZWxlbWVudC5kb21FbGVtZW50W25hbWVdW2tleV0gPSB2YWx1ZVtrZXldO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHZhbHVlID0gbmFtZTsgLy8vXG5cbiAgICAgIGVsZW1lbnQuYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5hZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVBhcmVudENvbnRleHQoZWxlbWVudCwgcGFyZW50RWxlbWVudCkge1xuICBjb25zdCBwYXJlbnRDb250ZXh0ID0gZWxlbWVudC5wYXJlbnRDb250ZXh0ID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5wYXJlbnRDb250ZXh0KCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY29udGV4dDtcblxuICBpZiAocGFyZW50Q29udGV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKCFwYXJlbnRFbGVtZW50Lmhhc093blByb3BlcnR5KCdjb250ZXh0JykpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB7fTtcblxuICAgICAgT2JqZWN0LmFzc2lnbihwYXJlbnRFbGVtZW50LCB7XG4gICAgICAgIGNvbnRleHQ6IGNvbnRleHRcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHBhcmVudEVsZW1lbnQuY29udGV4dCA9IE9iamVjdC5hc3NpZ24ocGFyZW50RWxlbWVudC5jb250ZXh0LCBwYXJlbnRDb250ZXh0KTtcbiAgfVxuXG4gIGNvbnN0IHByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihlbGVtZW50KSxcbiAgICAgICAgcHJvdG90eXBlQ29uc3RydWN0b3IgPSBwcm90b3R5cGUuY29uc3RydWN0b3IsIC8vL1xuICAgICAgICBwcm90b3R5cGVDb25zdHJ1Y3Rvck5hbWUgPSBwcm90b3R5cGVDb25zdHJ1Y3Rvci5uYW1lOyAvLy9cblxuICBpZiAocHJvdG90eXBlQ29uc3RydWN0b3JOYW1lID09PSAnRWxlbWVudCcpIHtcbiAgICBkZWxldGUgZWxlbWVudC5jb250ZXh0O1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzSGFuZGxlck5hbWUobmFtZSkge1xuICByZXR1cm4gbmFtZS5tYXRjaCgvXm9uLyk7XG59XG5cbmZ1bmN0aW9uIGlzQXR0cmlidXRlTmFtZShuYW1lKSB7XG4gIHJldHVybiBhdHRyaWJ1dGVOYW1lcy5pbmNsdWRlcyhuYW1lKTtcbn1cblxuY29uc3QgYXR0cmlidXRlTmFtZXMgPSBbXG4gICdhY2NlcHQnLCAnYWNjZXB0Q2hhcnNldCcsICdhY2Nlc3NLZXknLCAnYWN0aW9uJywgJ2FsbG93RnVsbFNjcmVlbicsICdhbGxvd1RyYW5zcGFyZW5jeScsICdhbHQnLCAnYXN5bmMnLCAnYXV0b0NvbXBsZXRlJywgJ2F1dG9Gb2N1cycsICdhdXRvUGxheScsXG4gICdjYXB0dXJlJywgJ2NlbGxQYWRkaW5nJywgJ2NlbGxTcGFjaW5nJywgJ2NoYWxsZW5nZScsICdjaGFyU2V0JywgJ2NoZWNrZWQnLCAnY2l0ZScsICdjbGFzc0lEJywgJ2NsYXNzTmFtZScsICdjb2xTcGFuJywgJ2NvbHMnLCAnY29udGVudCcsICdjb250ZW50RWRpdGFibGUnLCAnY29udGV4dE1lbnUnLCAnY29udHJvbHMnLCAnY29vcmRzJywgJ2Nyb3NzT3JpZ2luJyxcbiAgJ2RhdGEnLCAnZGF0ZVRpbWUnLCAnZGVmYXVsdCcsICdkZWZlcicsICdkaXInLCAnZGlzYWJsZWQnLCAnZG93bmxvYWQnLCAnZHJhZ2dhYmxlJyxcbiAgJ2VuY1R5cGUnLFxuICAnZm9ybScsICdmb3JtQWN0aW9uJywgJ2Zvcm1FbmNUeXBlJywgJ2Zvcm1NZXRob2QnLCAnZm9ybU5vVmFsaWRhdGUnLCAnZm9ybVRhcmdldCcsICdmcmFtZUJvcmRlcicsXG4gICdoZWFkZXJzJywgJ2hlaWdodCcsICdoaWRkZW4nLCAnaGlnaCcsICdocmVmJywgJ2hyZWZMYW5nJywgJ2h0bWxGb3InLCAnaHR0cEVxdWl2JyxcbiAgJ2ljb24nLCAnaWQnLCAnaW5wdXRNb2RlJywgJ2ludGVncml0eScsICdpcycsXG4gICdrZXlQYXJhbXMnLCAna2V5VHlwZScsICdraW5kJyxcbiAgJ2xhYmVsJywgJ2xhbmcnLCAnbGlzdCcsICdsb29wJywgJ2xvdycsXG4gICdtYW5pZmVzdCcsICdtYXJnaW5IZWlnaHQnLCAnbWFyZ2luV2lkdGgnLCAnbWF4JywgJ21heExlbmd0aCcsICdtZWRpYScsICdtZWRpYUdyb3VwJywgJ21ldGhvZCcsICdtaW4nLCAnbWluTGVuZ3RoJywgJ211bHRpcGxlJywgJ211dGVkJyxcbiAgJ25hbWUnLCAnbm9WYWxpZGF0ZScsICdub25jZScsXG4gICdvcGVuJywgJ29wdGltdW0nLFxuICAncGF0dGVybicsICdwbGFjZWhvbGRlcicsICdwb3N0ZXInLCAncHJlbG9hZCcsICdwcm9maWxlJyxcbiAgJ3JhZGlvR3JvdXAnLCAncmVhZE9ubHknLCAncmVsJywgJ3JlcXVpcmVkJywgJ3JldmVyc2VkJywgJ3JvbGUnLCAncm93U3BhbicsICdyb3dzJyxcbiAgJ3NhbmRib3gnLCAnc2NvcGUnLCAnc2NvcGVkJywgJ3Njcm9sbGluZycsICdzZWFtbGVzcycsICdzZWxlY3RlZCcsICdzaGFwZScsICdzaXplJywgJ3NpemVzJywgJ3NwYW4nLCAnc3BlbGxDaGVjaycsICdzcmMnLCAnc3JjRG9jJywgJ3NyY0xhbmcnLCAnc3JjU2V0JywgJ3N0YXJ0JywgJ3N0ZXAnLCAnc3R5bGUnLCAnc3VtbWFyeScsXG4gICd0YWJJbmRleCcsICd0YXJnZXQnLCAndGl0bGUnLCAndHlwZScsXG4gICd1c2VNYXAnLFxuICAndmFsdWUnLFxuICAnd2lkdGgnLFxuICAnd21vZGUnLFxuICAnd3JhcCdcbl07XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIG9uS2V5VXAoaGFuZGxlciwgaW50ZXJtZWRpYXRlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVIYW5kbGVyKSB7XG4gIHRoaXMub24oJ2tleXVwJywgaGFuZGxlciwgaW50ZXJtZWRpYXRlSGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIG9uS2V5RG93bihoYW5kbGVyLCBpbnRlcm1lZGlhdGVIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUhhbmRsZXIpIHtcbiAgdGhpcy5vbigna2V5ZG93bicsIGhhbmRsZXIsIGludGVybWVkaWF0ZUhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvZmZLZXlVcChoYW5kbGVyKSB7IHRoaXMub2ZmKCdrZXl1cCcsIGhhbmRsZXIpOyB9XG5cbmZ1bmN0aW9uIG9mZktleURvd24oaGFuZGxlcikgeyB0aGlzLm9mZigna2V5ZG93bicsIGhhbmRsZXIpOyB9XG5cbmNvbnN0IGtleU1peGluID0ge1xuICBvbktleVVwOiBvbktleVVwLFxuICBvbktleURvd246IG9uS2V5RG93bixcbiAgb2ZmS2V5VXA6IG9mZktleVVwLFxuICBvZmZLZXlEb3duOiBvZmZLZXlEb3duXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGtleU1peGluO1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlSGFuZGxlcihoYW5kbGVyLCBldmVudCwgdGFyZ2V0RWxlbWVudCkge1xuICBjb25zdCBrZXlDb2RlID0gZXZlbnQua2V5Q29kZSxcbiAgICAgICAgcHJldmVudERlZmF1bHQgPSBoYW5kbGVyKGtleUNvZGUsIHRhcmdldEVsZW1lbnQpO1xuXG4gIHJldHVybiBwcmV2ZW50RGVmYXVsdDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gb25Nb3VzZVVwKGhhbmRsZXIsIGludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlSGFuZGxlcikge1xuICB0aGlzLm9uKCdtb3VzZXVwJywgaGFuZGxlciwgaW50ZXJtZWRpYXRlSGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIG9uTW91c2VEb3duKGhhbmRsZXIsIGludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlSGFuZGxlcikge1xuICB0aGlzLm9uKCdtb3VzZWRvd24nLCBoYW5kbGVyLCBpbnRlcm1lZGlhdGVIYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gb25Nb3VzZU92ZXIoaGFuZGxlciwgaW50ZXJtZWRpYXRlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVIYW5kbGVyKSB7XG4gIHRoaXMub24oJ21vdXNlb3ZlcicsIGhhbmRsZXIsIGludGVybWVkaWF0ZUhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvbk1vdXNlT3V0KGhhbmRsZXIsIGludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlSGFuZGxlcikge1xuICB0aGlzLm9uKCdtb3VzZW91dCcsIGhhbmRsZXIsIGludGVybWVkaWF0ZUhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvbk1vdXNlTW92ZShoYW5kbGVyLCBpbnRlcm1lZGlhdGVIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUhhbmRsZXIpIHtcbiAgdGhpcy5vbignbW91c2Vtb3ZlJywgaGFuZGxlciwgaW50ZXJtZWRpYXRlSGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIG9mZk1vdXNlVXAoaGFuZGxlcikgeyB0aGlzLm9mZignbW91c2V1cCcsIGhhbmRsZXIpOyB9XG5cbmZ1bmN0aW9uIG9mZk1vdXNlRG93bihoYW5kbGVyKSB7IHRoaXMub2ZmKCdtb3VzZWRvd24nLCBoYW5kbGVyKTsgfVxuXG5mdW5jdGlvbiBvZmZNb3VzZU92ZXIoaGFuZGxlcikgeyB0aGlzLm9mZignbW91c2VvdmVyJywgaGFuZGxlcik7IH1cblxuZnVuY3Rpb24gb2ZmTW91c2VPdXQoaGFuZGxlcikgeyB0aGlzLm9mZignbW91c2VvdXQnLCBoYW5kbGVyKTsgfVxuXG5mdW5jdGlvbiBvZmZNb3VzZU1vdmUoaGFuZGxlcikgeyB0aGlzLm9mZignbW91c2Vtb3ZlJywgaGFuZGxlcik7IH1cblxuY29uc3QgbW91c2VNaXhpbiA9IHtcbiAgb25Nb3VzZVVwOiBvbk1vdXNlVXAsXG4gIG9uTW91c2VEb3duOiBvbk1vdXNlRG93bixcbiAgb25Nb3VzZU92ZXI6IG9uTW91c2VPdmVyLFxuICBvbk1vdXNlT3V0OiBvbk1vdXNlT3V0LFxuICBvbk1vdXNlTW92ZTogb25Nb3VzZU1vdmUsXG4gIG9mZk1vdXNlVXA6IG9mZk1vdXNlVXAsXG4gIG9mZk1vdXNlRG93bjogb2ZmTW91c2VEb3duLFxuICBvZmZNb3VzZU92ZXI6IG9mZk1vdXNlT3ZlcixcbiAgb2ZmTW91c2VPdXQ6IG9mZk1vdXNlT3V0LFxuICBvZmZNb3VzZU1vdmU6IG9mZk1vdXNlTW92ZVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBtb3VzZU1peGluO1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlSGFuZGxlcihoYW5kbGVyLCBldmVudCwgdGFyZ2V0RWxlbWVudCkge1xuICBjb25zdCBtb3VzZVRvcCA9IGV2ZW50LnBhZ2VZLCAgLy8vXG4gICAgICAgIG1vdXNlTGVmdCA9IGV2ZW50LnBhZ2VYLCAvLy9cbiAgICAgICAgbW91c2VCdXR0b24gPSBldmVudC5idXR0b24sIC8vL1xuICAgICAgICBwcmV2ZW50RGVmYXVsdCA9IGhhbmRsZXIobW91c2VUb3AsIG1vdXNlTGVmdCwgbW91c2VCdXR0b24sIHRhcmdldEVsZW1lbnQpO1xuXG4gIHJldHVybiBwcmV2ZW50RGVmYXVsdDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gb25SZXNpemUoaGFuZGxlcikge1xuICBjb25zdCBldmVudFR5cGUgPSAncmVzaXplJyxcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lciA9IHRoaXMub24oZXZlbnRUeXBlLCBoYW5kbGVyKTtcblxuICBpZiAoYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgIGFwcGVuZFJlc2l6ZU9iamVjdCh0aGlzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvZmZSZXNpemUoaGFuZGxlcikge1xuICBjb25zdCBldmVudFR5cGUgPSAncmVzaXplJyxcbiAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lciA9IHRoaXMub2ZmKGV2ZW50VHlwZSwgaGFuZGxlcik7XG5cbiAgaWYgKHJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICByZW1vdmVSZXNpemVPYmplY3QodGhpcyk7XG4gIH1cbn1cblxuY29uc3QgcmVzaXplTWl4aW4gPSB7XG4gIG9uUmVzaXplOiBvblJlc2l6ZSxcbiAgb2ZmUmVzaXplOiBvZmZSZXNpemVcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcmVzaXplTWl4aW47XG5cbmZ1bmN0aW9uIGFwcGVuZFJlc2l6ZU9iamVjdChlbGVtZW50KSB7XG4gIGNvbnN0IHJlc2l6ZU9iamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29iamVjdCcpLFxuICAgICAgICBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50LFxuICAgICAgICBzdHlsZSA9IGBkaXNwbGF5OiBibG9jazsgXG4gICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgICAgICAgICAgICAgIHRvcDogMDsgXG4gICAgICAgICAgICAgICAgIGxlZnQ6IDA7IFxuICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7IFxuICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsgXG4gICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47IFxuICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgXG4gICAgICAgICAgICAgICAgIHotaW5kZXg6IC0xO2A7XG5cbiAgcmVzaXplT2JqZWN0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBzdHlsZSk7XG4gIHJlc2l6ZU9iamVjdC5kYXRhID0gJ2Fib3V0OmJsYW5rJztcbiAgcmVzaXplT2JqZWN0LnR5cGUgPSAndGV4dC9odG1sJztcblxuICBlbGVtZW50Ll9fcmVzaXplT2JqZWN0X18gPSByZXNpemVPYmplY3Q7XG5cbiAgcmVzaXplT2JqZWN0Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgIHJlc2l6ZU9iamVjdExvYWRIYW5kbGVyKGVsZW1lbnQpXG4gIH07XG5cbiAgZG9tRWxlbWVudC5hcHBlbmRDaGlsZChyZXNpemVPYmplY3QpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVSZXNpemVPYmplY3QoZWxlbWVudCkge1xuICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50LFxuICAgICAgICByZXNpemVPYmplY3QgPSBlbGVtZW50Ll9fcmVzaXplT2JqZWN0X18sXG4gICAgICAgIG9iamVjdFdpbmRvdyA9IHJlc2l6ZU9iamVjdC5jb250ZW50RG9jdW1lbnQuZGVmYXVsdFZpZXc7ICAvLy9cblxuICBvYmplY3RXaW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplTGlzdGVuZXIpO1xuXG4gIGRvbUVsZW1lbnQucmVtb3ZlQ2hpbGQocmVzaXplT2JqZWN0KTtcbn1cblxuZnVuY3Rpb24gcmVzaXplT2JqZWN0TG9hZEhhbmRsZXIoZWxlbWVudCkge1xuICBjb25zdCByZXNpemVPYmplY3QgPSBlbGVtZW50Ll9fcmVzaXplT2JqZWN0X18sXG4gICAgICAgIHJlc2l6ZU9iamVjdFdpbmRvdyA9IHJlc2l6ZU9iamVjdC5jb250ZW50RG9jdW1lbnQuZGVmYXVsdFZpZXc7ICAvLy9cblxuICByZXNpemVPYmplY3RXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24oKSB7XG4gICAgZXZlbnRMaXN0ZW5lcihlbGVtZW50KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGV2ZW50TGlzdGVuZXIoZWxlbWVudCkge1xuICBjb25zdCB3aWR0aCA9IGVsZW1lbnQuZ2V0V2lkdGgoKSxcbiAgICAgICAgaGVpZ2h0ID0gZWxlbWVudC5nZXRIZWlnaHQoKSxcbiAgICAgICAgdGFyZ2V0RWxlbWVudCA9IGVsZW1lbnQsIC8vL1xuICAgICAgICBoYW5kbGVycyA9IGVsZW1lbnQuaGFuZGxlcnNNYXBbJ3Jlc2l6ZSddO1xuXG4gIGhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24oaGFuZGxlcil7XG4gICAgaGFuZGxlcih3aWR0aCwgaGVpZ2h0LCB0YXJnZXRFbGVtZW50KTtcbiAgfSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIG9uU2Nyb2xsKGhhbmRsZXIsIGludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlSGFuZGxlcikge1xuICB0aGlzLm9uKCdzY3JvbGwnLCBoYW5kbGVyLCBpbnRlcm1lZGlhdGVIYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gb2ZmU2Nyb2xsKGhhbmRsZXIpIHsgdGhpcy5vZmYoJ3Njcm9sbCcsIGhhbmRsZXIpOyB9XG5cbmZ1bmN0aW9uIGdldFNjcm9sbFRvcCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zY3JvbGxUb3A7IH1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsTGVmdCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zY3JvbGxMZWZ0OyB9XG5cbmZ1bmN0aW9uIHNldFNjcm9sbFRvcChzY3JvbGxUb3ApIHsgdGhpcy5kb21FbGVtZW50LnNjcm9sbFRvcCA9IHNjcm9sbFRvcDsgfVxuXG5mdW5jdGlvbiBzZXRTY3JvbGxMZWZ0KHNjcm9sbExlZnQpIHsgdGhpcy5kb21FbGVtZW50LnNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0OyB9XG5cbmNvbnN0IHNjcm9sbE1peGluID0ge1xuICBvblNjcm9sbDogb25TY3JvbGwsXG4gIG9mZlNjcm9sbDogb2ZmU2Nyb2xsLFxuICBnZXRTY3JvbGxUb3A6IGdldFNjcm9sbFRvcCxcbiAgZ2V0U2Nyb2xsTGVmdDogZ2V0U2Nyb2xsTGVmdCxcbiAgc2V0U2Nyb2xsVG9wOiBzZXRTY3JvbGxUb3AsXG4gIHNldFNjcm9sbExlZnQ6IHNldFNjcm9sbExlZnRcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc2Nyb2xsTWl4aW47XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbnRlcm1lZGlhdGVIYW5kbGVyKGhhbmRsZXIsIGV2ZW50LCB0YXJnZXRFbGVtZW50KSB7XG4gIGNvbnN0IHNjcm9sbFRvcCA9IHRhcmdldEVsZW1lbnQuZ2V0U2Nyb2xsVG9wKCksXG4gICAgICAgIHNjcm9sbExlZnQgPSB0YXJnZXRFbGVtZW50LmdldFNjcm9sbExlZnQoKSxcbiAgICAgICAgcHJldmVudERlZmF1bHQgPSBoYW5kbGVyKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCwgdGFyZ2V0RWxlbWVudCk7XG5cbiAgcmV0dXJuIHByZXZlbnREZWZhdWx0O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50JyksXG4gICAgICBUZXh0RWxlbWVudCA9IHJlcXVpcmUoJy4vdGV4dEVsZW1lbnQnKTtcblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChmaXJzdEFyZ3VtZW50LCBwcm9wZXJ0aWVzLCAuLi5jaGlsZEFyZ3VtZW50cykge1xuICBsZXQgZWxlbWVudCA9IG51bGw7XG5cbiAgaWYgKGZpcnN0QXJndW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBjaGlsZEVsZW1lbnRzRnJvbUNoaWxkQXJndW1lbnRzKGNoaWxkQXJndW1lbnRzKTtcblxuICAgIHByb3BlcnRpZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNoaWxkRWxlbWVudHM6IGNoaWxkRWxlbWVudHNcbiAgICB9LCBwcm9wZXJ0aWVzKTtcblxuICAgIGlmIChmYWxzZSkge1xuXG4gICAgfSBlbHNlIGlmIChpc1N1YmNsYXNzT2YoZmlyc3RBcmd1bWVudCwgRWxlbWVudCkpIHtcbiAgICAgIGNvbnN0IENsYXNzID0gZmlyc3RBcmd1bWVudDsgIC8vL1xuXG4gICAgICBlbGVtZW50ID0gQ2xhc3MuZnJvbVByb3BlcnRpZXMocHJvcGVydGllcyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc3QgZWxlbWVudEZ1bmN0aW9uID0gZmlyc3RBcmd1bWVudDsgIC8vL1xuXG4gICAgICBlbGVtZW50ID0gZWxlbWVudEZ1bmN0aW9uKHByb3BlcnRpZXMpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCB0YWdOYW1lID0gZmlyc3RBcmd1bWVudCwgIC8vL1xuICAgICAgICAgICAgaHRtbCA9IGA8JHt0YWdOYW1lfSAvPmA7XG5cbiAgICAgIGVsZW1lbnQgPSBFbGVtZW50LmZyb21IVE1MKEVsZW1lbnQsIGh0bWwpO1xuXG4gICAgICBlbGVtZW50LmFwcGx5UHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuY29uc3QgUmVhY3QgPSB7XG4gIGNyZWF0ZUVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnRcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cbmZ1bmN0aW9uIGNoaWxkRWxlbWVudHNGcm9tQ2hpbGRBcmd1bWVudHMoY2hpbGRBcmd1bWVudHMpIHtcbiAgY2hpbGRBcmd1bWVudHMgPSBjaGlsZEFyZ3VtZW50cy5yZWR1Y2UoZnVuY3Rpb24oY2hpbGRBcmd1bWVudHMsIGNoaWxkQXJndW1lbnQpIHtcbiAgICBjaGlsZEFyZ3VtZW50cyA9IGNoaWxkQXJndW1lbnRzLmNvbmNhdChjaGlsZEFyZ3VtZW50KTtcblxuICAgIHJldHVybiBjaGlsZEFyZ3VtZW50cztcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBjaGlsZEFyZ3VtZW50cy5tYXAoZnVuY3Rpb24oY2hpbGRBcmd1bWVudCkge1xuICAgIGxldCBjaGlsZEVsZW1lbnQ7XG4gICAgXG4gICAgaWYgKHR5cGVvZiBjaGlsZEFyZ3VtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc3QgdGV4dCA9IGNoaWxkQXJndW1lbnQsIC8vL1xuICAgICAgICAgICAgdGV4dEVsZW1lbnQgPSBuZXcgVGV4dEVsZW1lbnQodGV4dCk7XG5cbiAgICAgIGNoaWxkRWxlbWVudCA9IHRleHRFbGVtZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGlsZEVsZW1lbnQgPSBjaGlsZEFyZ3VtZW50OyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudDtcbiAgfSk7XG5cbiAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIGlzU3ViY2xhc3NPZihhcmd1bWVudCwgQ2xhc3MpIHtcbiAgbGV0IHR5cGVPZiA9IGZhbHNlO1xuXG4gIGlmIChhcmd1bWVudC5uYW1lID09PSBDbGFzcy5uYW1lKSB7IC8vL1xuICAgIHR5cGVPZiA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgYXJndW1lbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYXJndW1lbnQpOyAvLy9cblxuICAgIGlmIChhcmd1bWVudCkge1xuICAgICAgdHlwZU9mID0gaXNTdWJjbGFzc09mKGFyZ3VtZW50LCBDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHR5cGVPZjtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgT2Zmc2V0ID0gcmVxdWlyZSgnLi9taXNjL29mZnNldCcpLFxuICAgICAgQm91bmRzID0gcmVxdWlyZSgnLi9taXNjL2JvdW5kcycpO1xuXG5jbGFzcyBUZXh0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRleHQpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KTsgLy8vXG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuX19lbGVtZW50X18gPSB0aGlzO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBUZXh0RWxlbWVudC5jbG9uZSh0aGlzKTsgfVxuXG4gIGdldFRleHQoKSB7XG4gICAgY29uc3Qgbm9kZVZhbHVlID0gdGhpcy5kb21FbGVtZW50Lm5vZGVWYWx1ZSxcbiAgICAgICAgICB0ZXh0ID0gbm9kZVZhbHVlOyAvLy9cblxuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgc2V0VGV4dCh0ZXh0KSB7XG4gICAgY29uc3Qgbm9kZVZhbHVlID0gdGV4dDsgLy8vXG5cbiAgICB0aGlzLmRvbUVsZW1lbnQubm9kZVZhbHVlID0gbm9kZVZhbHVlO1xuICB9XG5cbiAgZ2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IHRvcCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRUb3AsICAvLy9cbiAgICAgICAgICBsZWZ0ID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldExlZnQsICAvLy9cbiAgICAgICAgICBvZmZzZXQgPSBuZXcgT2Zmc2V0KHRvcCwgbGVmdCk7XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIGNvbnN0IGJvdW5kaW5nQ2xpZW50UmVjdCA9IHRoaXMuZG9tRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICBib3VuZHMgPSBCb3VuZHMuZnJvbUJvdW5kaW5nQ2xpZW50UmVjdChib3VuZGluZ0NsaWVudFJlY3QpO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxuXG4gIGdldFdpZHRoKCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5kb21FbGVtZW50LmNsaWVudFdpZHRoO1xuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KCkge1xuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZG9tRWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cbiAgICByZXR1cm4gaGVpZ2h0O1xuICB9XG5cbiAgcHJlcGVuZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5wcmVwZW5kKHRoaXMpOyB9XG5cbiAgYXBwZW5kVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LmFwcGVuZCh0aGlzKTsgfVxuXG4gIGFkZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5hZGQodGhpcyk7IH1cblxuICByZW1vdmVGcm9tKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5yZW1vdmUodGhpcyk7IH1cblxuICBpbnNlcnRCZWZvcmUoc2libGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTU5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpO1xuICB9XG5cbiAgaW5zZXJ0QWZ0ZXIoc2libGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTU5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQubmV4dFNpYmxpbmcpOyAgLy8vXG4gIH1cblxuICByZW1vdmUoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZSgpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dEVsZW1lbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGV2ZW50TWl4aW4gPSByZXF1aXJlKCcuL21peGluL2V2ZW50JyksXG4gICAgICBjbGlja01peGluID0gcmVxdWlyZSgnLi9taXhpbi9jbGljaycpLFxuICAgICAgbW91c2VNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vbW91c2UnKSxcbiAgICAgIGtleU1peGluID0gcmVxdWlyZSgnLi9taXhpbi9rZXknKTtcblxuY2xhc3MgV2luZG93IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gd2luZG93O1xuICB9XG5cbiAgYXNzaWduKC4uLnNvdXJjZXMpIHtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmRvbUVsZW1lbnQ7IC8vL1xuXG4gICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIC4uLnNvdXJjZXMpO1xuICB9XG4gIFxuICBnZXRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5pbm5lcldpZHRoOyB9IC8vL1xuICBcbiAgZ2V0SGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmlubmVySGVpZ2h0OyB9IC8vL1xuXG4gIGdldFNjcm9sbFRvcCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5wYWdlWU9mZnNldDsgfSAgLy8vXG5cbiAgZ2V0U2Nyb2xsTGVmdCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5wYWdlWE9mZnNldDsgfSAvLy9cblxuICBvblJlc2l6ZShoYW5kbGVyKSB7XG4gICAgaWYgKGhhbmRsZXIuaW50ZXJtZWRpYXRlSGFuZGxlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYW5kbGVyLmludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlUmVzaXplSGFuZGxlcjtcbiAgICB9XG5cbiAgICBjb25zdCBldmVudFR5cGUgPSAncmVzaXplJztcbiAgICBcbiAgICB0aGlzLm9uKGV2ZW50VHlwZSwgaGFuZGxlcik7XG4gIH1cblxuICBvZmZSZXNpemUoaGFuZGxlcikge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9ICdyZXNpemUnO1xuXG4gICAgdGhpcy5vZmYoZXZlbnRUeXBlLCBoYW5kbGVyKTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIGV2ZW50TWl4aW4pO1xuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCBjbGlja01peGluKTtcbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwgbW91c2VNaXhpbik7XG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIGtleU1peGluKTtcblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgV2luZG93KCk7ICAvLy9cblxuZnVuY3Rpb24gZGVmYXVsdEludGVybWVkaWF0ZVJlc2l6ZUhhbmRsZXIoaGFuZGxlciwgZXZlbnQsIHRhcmdldEVsZW1lbnQpIHtcbiAgY29uc3Qgd2luZG93ID0gdGFyZ2V0RWxlbWVudCwgLy8vXG4gICAgICAgIHdpZHRoID0gd2luZG93LmdldFdpZHRoKCksXG4gICAgICAgIGhlaWdodCA9IHRhcmdldEVsZW1lbnQuZ2V0SGVpZ2h0KCksXG4gICAgICAgIHByZXZlbnREZWZhdWx0ID0gaGFuZGxlcih3aWR0aCwgaGVpZ2h0LCB0YXJnZXRFbGVtZW50KTtcblxuICByZXR1cm4gcHJldmVudERlZmF1bHQ7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBsZXhlcnMgPSB7XG4gICdMaW5lJzogcmVxdWlyZSgnLi9saWIvY29tbW9uL2xpbmUnKSxcbiAgJ0JORkxleGVyJzogcmVxdWlyZSgnLi9saWIvYm5mL2xleGVyJyksXG4gICdCYXNpY0xleGVyJzogcmVxdWlyZSgnLi9saWIvYmFzaWMvbGV4ZXInKSxcbiAgJ0Zsb3JlbmNlTGV4ZXInOiByZXF1aXJlKCcuL2xpYi9mbG9yZW5jZS9sZXhlcicpLFxuICAnUHJpbWl0aXZlTGV4ZXInOiByZXF1aXJlKCcuL2xpYi9wcmltaXRpdmUvbGV4ZXInKSxcbiAgJ1NpZ25pZmljYW50VG9rZW4nOiByZXF1aXJlKCcuL2xpYi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQnKSxcbiAgJ1N0cmluZ1Rva2VuJzogcmVxdWlyZSgnLi9saWIvY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L3N0cmluZycpLFxuICAnRW5kT2ZMaW5lVG9rZW4nOiByZXF1aXJlKCcuL2xpYi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvZW5kT2ZMaW5lJyksXG4gICdXaGl0ZXNwYWNlVG9rZW4nOiByZXF1aXJlKCcuL2xpYi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvd2hpdGVzcGFjZScpLFxuICAnTm9uU2lnbmlmaWNhbnRUb2tlbic6IHJlcXVpcmUoJy4vbGliL2NvbW1vbi90b2tlbi9ub25TaWduaWZpY2FudCcpLFxuICAnc3BlY2lhbFN5bWJvbHMnOiByZXF1aXJlKCcuL2xpYi9zcGVjaWFsU3ltYm9scycpXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxleGVycztcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IExpbmUgPSByZXF1aXJlKCcuL2xpbmUnKSxcclxuICAgICAgUnVsZXMgPSByZXF1aXJlKCcuLi9jb21tb24vcnVsZXMnKSxcclxuICAgICAgQ29tbW9uTGV4ZXIgPSByZXF1aXJlKCcuLi9jb21tb24vbGV4ZXInKSxcclxuICAgICAgV2hpdGVzcGFjZVRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L3doaXRlc3BhY2UnKTtcclxuXHJcbmNsYXNzIEJhc2ljTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgc3RhdGljIHNpZ25pZmljYW50VG9rZW5UeXBlcygpIHtcclxuICAgIGNvbnN0IGdyYW1tYXIgPSBCYXNpY0xleGVyLmdyYW1tYXIsXHJcbiAgICAgICAgICBncmFtbWFyU2lnbmlmaWNhbnRUb2tlblR5cGVzID0gQ29tbW9uTGV4ZXIuc2lnbmlmaWNhbnRUb2tlblR5cGVzRnJvbUdyYW1tYXIoZ3JhbW1hciksXHJcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZXMgPSBncmFtbWFyU2lnbmlmaWNhbnRUb2tlblR5cGVzLmNvbmNhdChbXHJcbiAgICAgICAgICAgIFdoaXRlc3BhY2VUb2tlbi50eXBlXHJcbiAgICAgICAgICBdKTtcclxuXHJcbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlblR5cGVzO1xyXG4gIH1cclxuXHJcblxyXG4gIHN0YXRpYyBmcm9tR3JhbW1hcihncmFtbWFyKSB7XHJcbiAgICBjb25zdCBydWxlcyA9IFJ1bGVzLmZyb21HcmFtbWFyKGdyYW1tYXIpLFxyXG4gICAgICAgICAgYmFzaWNMZXhlciA9IG5ldyBCYXNpY0xleGVyKHJ1bGVzLCBMaW5lKTtcclxuXHJcbiAgICByZXR1cm4gYmFzaWNMZXhlcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcclxuICAgIGNvbnN0IGdyYW1tYXIgPSBCYXNpY0xleGVyLmdyYW1tYXIsXHJcbiAgICAgICAgICBiYXNpY0xleGVyID0gQmFzaWNMZXhlci5mcm9tR3JhbW1hcihncmFtbWFyKTtcclxuXHJcbiAgICByZXR1cm4gYmFzaWNMZXhlcjtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQmFzaWNMZXhlcjtcclxuXHJcbkJhc2ljTGV4ZXIuZ3JhbW1hciA9IFtcclxuXHJcbiAgeyBcInRlcm1pbmFsXCIgICAgOiBcIlxcXFwrfFxcXFwtfFxcXFwqfFxcXFwvfFxcXFwofFxcXFwpfFxcXFxkK1wiIH1cclxuXHJcbl07XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IENvbW1vbkxpbmUgPSByZXF1aXJlKCcuLi9jb21tb24vbGluZScpLFxyXG4gICAgICBDb21tZW50VG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMvY29tbWVudCcpLFxyXG4gICAgICBTdHJpbmdUb2tlbnMgPSByZXF1aXJlKCcuL3Rva2Vucy9zdHJpbmcnKSxcclxuICAgICAgV2hpdGVzcGFjZVRva2VucyA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbnMvd2hpdGVzcGFjZScpO1xyXG5cclxuY2xhc3MgTGluZSBleHRlbmRzIENvbW1vbkxpbmUge1xyXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50LCBjb250ZXh0LCBydWxlcykgeyByZXR1cm4gc3VwZXIuZnJvbUNvbnRlbnQoTGluZSwgY29udGVudCwgY29udGV4dCwgcnVsZXMsIENvbW1lbnRUb2tlbnMsIFN0cmluZ1Rva2VucywgV2hpdGVzcGFjZVRva2Vucyk7IH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBMaW5lO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBDb21tZW50VG9rZW5zIHtcclxuICBzdGF0aWMgcGFzcyh0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnQsIGxpbmUsIGNvbnRleHQpIHtcclxuICAgIGNvbnN0IGluQ29tbWVudCA9IGZhbHNlOyAgLy8vXHJcblxyXG4gICAgcmV0dXJuIGluQ29tbWVudDtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ29tbWVudFRva2VucztcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgU3RyaW5nVG9rZW5zIHtcclxuICBzdGF0aWMgcGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lKSB7IFxyXG5cclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU3RyaW5nVG9rZW5zO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBMaW5lID0gcmVxdWlyZSgnLi9saW5lJyksXHJcbiAgICAgIFJ1bGVzID0gcmVxdWlyZSgnLi4vY29tbW9uL3J1bGVzJyksXHJcbiAgICAgIENvbW1vbkxleGVyID0gcmVxdWlyZSgnLi4vY29tbW9uL2xleGVyJyksXHJcbiAgICAgIFN0cmluZ1Rva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L3N0cmluZycpLFxyXG4gICAgICBXaGl0ZXNwYWNlVG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvd2hpdGVzcGFjZScpO1xyXG5cclxuY2xhc3MgQk5GTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgbGluZXNGcm9tR3JhbW1hcihncmFtbWFyKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZ3JhbW1hciwgIC8vL1xyXG4gICAgICAgICAgbGluZXMgPSBzdXBlci5saW5lc0Zyb21Db250ZW50KGNvbnRlbnQpO1xyXG5cclxuICAgIHJldHVybiBsaW5lcztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzaWduaWZpY2FudFRva2VuVHlwZXMoKSB7XHJcbiAgICBjb25zdCBncmFtbWFyID0gQk5GTGV4ZXIuZ3JhbW1hcixcclxuICAgICAgICAgIGdyYW1tYXJTaWduaWZpY2FudFRva2VuVHlwZXMgPSBDb21tb25MZXhlci5zaWduaWZpY2FudFRva2VuVHlwZXNGcm9tR3JhbW1hcihncmFtbWFyKSxcclxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlcyA9IGdyYW1tYXJTaWduaWZpY2FudFRva2VuVHlwZXMuY29uY2F0KFtcclxuICAgICAgICAgICAgU3RyaW5nVG9rZW4udHlwZSxcclxuICAgICAgICAgICAgV2hpdGVzcGFjZVRva2VuLnR5cGVcclxuICAgICAgICAgIF0pO1xyXG5cclxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuVHlwZXM7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbUdyYW1tYXIoZ3JhbW1hcikge1xyXG4gICAgY29uc3QgcnVsZXMgPSBSdWxlcy5mcm9tR3JhbW1hcihncmFtbWFyKSxcclxuICAgICAgICAgIGJhc2ljTGV4ZXIgPSBuZXcgQk5GTGV4ZXIocnVsZXMsIExpbmUpO1xyXG5cclxuICAgIHJldHVybiBiYXNpY0xleGVyO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xyXG4gICAgY29uc3QgZ3JhbW1hciA9IEJORkxleGVyLmdyYW1tYXIsXHJcbiAgICAgICAgICBiYXNpY0xleGVyID0gQk5GTGV4ZXIuZnJvbUdyYW1tYXIoZ3JhbW1hcik7XHJcblxyXG4gICAgcmV0dXJuIGJhc2ljTGV4ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEJORkxleGVyO1xyXG5cclxuQk5GTGV4ZXIuZ3JhbW1hciA9IFtcclxuXHJcbiAgeyBcInJlZ3VsYXJFeHByZXNzaW9uXCI6IFwiXFxcXC9bXi9dK1xcXFwvXCIgfSxcclxuXHJcbiAgeyBcInNwZWNpYWxcIjogXCI6Oj18PE5PX1dISVRFU1BBQ0U+fDxFTkRfT0ZfTElORT58IXwmfFxcXFx8fFxcXFwofFxcXFwpfFxcXFw/fFxcXFwqfFxcXFwrXCIgfSxcclxuXHJcbiAgeyBcInR5cGVcIjogXCJcXFxcW1teL10rXFxcXF1cIiB9LFxyXG5cclxuICB7IFwibmFtZVwiOiBcIlxcXFx3K1wiIH1cclxuICAgIFxyXG5dXHJcbjtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgQ29tbW9uTGluZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9saW5lJyksXHJcbiAgICAgIENvbW1lbnRUb2tlbnMgPSByZXF1aXJlKCcuL3Rva2Vucy9jb21tZW50JyksXHJcbiAgICAgIFN0cmluZ1Rva2VucyA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbnMvc3RyaW5nJyksXHJcbiAgICAgIFdoaXRlc3BhY2VUb2tlbnMgPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW5zL3doaXRlc3BhY2UnKSxcclxuICAgICAgRW5kT2ZMaW5lVG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvZW5kT2ZMaW5lJyk7XHJcblxyXG5jbGFzcyBMaW5lIGV4dGVuZHMgQ29tbW9uTGluZSB7XHJcbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQsIGNvbnRleHQsIHJ1bGVzKSB7IFxyXG4gICAgY29uc3QgbGluZSA9IHN1cGVyLmZyb21Db250ZW50KExpbmUsIGNvbnRlbnQsIGNvbnRleHQsIHJ1bGVzLCBDb21tZW50VG9rZW5zLCBTdHJpbmdUb2tlbnMsIFdoaXRlc3BhY2VUb2tlbnMpLFxyXG4gICAgICAgICAgZW5kT2ZMaW5lVG9rZW4gPSBFbmRPZkxpbmVUb2tlbi5mcm9tTGluZShsaW5lKTtcclxuXHJcbiAgICBsaW5lLnB1c2hUb2tlbihlbmRPZkxpbmVUb2tlbik7XHJcbiAgICBcclxuICAgIHJldHVybiBsaW5lO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBMaW5lO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBDb21tZW50VG9rZW5zIHtcclxuICBzdGF0aWMgcGFzcyh0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnQsIGxpbmUsIGNvbnRleHQpIHtcclxuICAgIGNvbnN0IGluQ29tbWVudCA9IGZhbHNlOyAgLy8vXHJcblxyXG4gICAgcmV0dXJuIGluQ29tbWVudDtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ29tbWVudFRva2VucztcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgQ29udGV4dCB7XHJcbiAgY29uc3RydWN0b3IobWluaW11bUxpbmVzTGVuZ3RoID0gSW5maW5pdHksIHByZXZpb3VzTGluZUluQ29tbWVudCA9IG51bGwsIGZvbGxvd2luZ0xpbmVJbkNvbW1lbnQgPSBudWxsKSB7XHJcbiAgICB0aGlzLm1pbmltdW1MaW5lc0xlbmd0aCA9IG1pbmltdW1MaW5lc0xlbmd0aDtcclxuICAgIHRoaXMucHJldmlvdXNMaW5lSW5Db21tZW50ID0gcHJldmlvdXNMaW5lSW5Db21tZW50O1xyXG4gICAgdGhpcy5mb2xsb3dpbmdMaW5lSW5Db21tZW50ID0gZm9sbG93aW5nTGluZUluQ29tbWVudDtcclxuICB9XHJcblxyXG4gIGdldE1pbmltdW1MaW5lc0xlbmd0aCgpIHtcclxuICAgIHJldHVybiB0aGlzLm1pbmltdW1MaW5lc0xlbmd0aDtcclxuICB9XHJcblxyXG4gIGlzUHJldmlvdXNMaW5lSW5Db21tZW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJldmlvdXNMaW5lSW5Db21tZW50O1xyXG4gIH1cclxuXHJcbiAgaXNGb2xsb3dpbmdMaW5lSW5Db21tZW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZm9sbG93aW5nTGluZUluQ29tbWVudDtcclxuICB9XHJcblxyXG4gIHNldFByZXZpb3VzTGluZUluQ29tbWVudChwcmV2aW91c0xpbmVJbkNvbW1lbnQpIHtcclxuICAgIHRoaXMucHJldmlvdXNMaW5lSW5Db21tZW50ID0gcHJldmlvdXNMaW5lSW5Db21tZW50O1xyXG4gIH1cclxuXHJcbiAgc2hvdWxkVGVybWluYXRlKGxlbmd0aCkge1xyXG4gICAgbGV0IHRlcm1pbmF0ZSA9IGZhbHNlO1xyXG5cclxuICAgIGlmIChsZW5ndGggPj0gdGhpcy5taW5pbXVtTGluZXNMZW5ndGgpIHtcclxuICAgICAgaWYgKHRoaXMuZm9sbG93aW5nTGluZUluQ29tbWVudCA9PT0gbnVsbCkge1xyXG4gICAgICAgIHRlcm1pbmF0ZSA9IHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLnByZXZpb3VzTGluZUluQ29tbWVudCA9PT0gdGhpcy5mb2xsb3dpbmdMaW5lSW5Db21tZW50KSB7XHJcbiAgICAgICAgdGVybWluYXRlID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0ZXJtaW5hdGU7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbnRleHQ7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IExpbmUgPSByZXF1aXJlKCcuL2xpbmUnKSxcclxuICAgICAgUnVsZXMgPSByZXF1aXJlKCcuL3J1bGVzJyksXHJcbiAgICAgIENvbnRleHQgPSByZXF1aXJlKCcuL2NvbnRleHQnKTtcclxuXHJcbmNsYXNzIENvbW1vbkxleGVyIHtcclxuICBjb25zdHJ1Y3RvcihydWxlcywgTGluZSkge1xyXG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xyXG4gICAgdGhpcy5MaW5lID0gTGluZTtcclxuICB9XHJcblxyXG4gIGxpbmVzRnJvbUNvbnRlbnQoY29udGVudCwgZmlyc3RMaW5lSW5kZXggPSAwLCBjb250ZXh0ID0gbmV3IENvbnRleHQoKSkge1xyXG4gICAgY29uc3QgY29udGVudHMgPSBjb250ZW50LnNwbGl0KC9cXG4vKSxcclxuICAgICAgICAgIGxpbmVzID0gdGhpcy5saW5lc0Zyb21Db250ZW50cyhjb250ZW50cywgZmlyc3RMaW5lSW5kZXgsIGNvbnRleHQpO1xyXG5cclxuICAgIHJldHVybiBsaW5lcztcclxuICB9XHJcblxyXG4gIGxpbmVzRnJvbUNvbnRlbnRzKGNvbnRlbnRzLCBmaXJzdExpbmVJbmRleCwgY29udGV4dCkge1xyXG4gICAgY29uc3QgbGluZXMgPSBbXTtcclxuICAgIFxyXG4gICAgbGV0IGluZGV4ID0gZmlyc3RMaW5lSW5kZXgsICAgIFxyXG4gICAgICAgIGNvbnRlbnQgPSBjb250ZW50c1tpbmRleF07XHJcblxyXG4gICAgd2hpbGUgKGNvbnRlbnQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBjb25zdCBsZW5ndGggPSBpbmRleCAtIGZpcnN0TGluZUluZGV4LFxyXG4gICAgICAgICAgICB0ZXJtaW5hdGUgPSBjb250ZXh0LnNob3VsZFRlcm1pbmF0ZShsZW5ndGgpO1xyXG5cclxuICAgICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBsaW5lID0gdGhpcy5MaW5lLmZyb21Db250ZW50KGNvbnRlbnQsIGNvbnRleHQsIHRoaXMucnVsZXMpO1xyXG5cclxuICAgICAgbGluZXMucHVzaChsaW5lKTtcclxuXHJcbiAgICAgIGNvbnRlbnQgPSBjb250ZW50c1srK2luZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbGluZXM7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcnVsZXNGcm9tR3JhbW1hcihncmFtbWFyKSB7IHJldHVybiBSdWxlcy5mcm9tR3JhbW1hcihncmFtbWFyKTsgfVxyXG5cclxuICBzdGF0aWMgc2lnbmlmaWNhbnRUb2tlblR5cGVzRnJvbUdyYW1tYXIoZ3JhbW1hcikgeyByZXR1cm4gUnVsZXMuc2lnbmlmaWNhbnRUb2tlblR5cGVzRnJvbUdyYW1tYXIoZ3JhbW1hcik7IH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb21tb25MZXhlcjtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgdXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwnKSxcclxuICAgICAgU2lnbmlmaWNhbnRUb2tlbnMgPSByZXF1aXJlKCcuL3Rva2Vucy9zaWduaWZpY2FudCcpO1xyXG5cclxuY2xhc3MgTGluZSB7XHJcbiAgY29uc3RydWN0b3IoY29udGVudCkge1xyXG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcclxuXHJcbiAgICB0aGlzLnRva2VucyA9IHVuZGVmaW5lZDtcclxuICAgIFxyXG4gICAgdGhpcy5pbkNvbW1lbnQgPSB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBnZXRDb250ZW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcclxuICB9XHJcblxyXG4gIGdldFRva2VucygpIHtcclxuICAgIHJldHVybiB0aGlzLnRva2VucztcclxuICB9XHJcblxyXG4gIGlzSW5Db21tZW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5Db21tZW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0SFRNTCgpIHtcclxuICAgIGxldCBodG1sID0gdGhpcy50b2tlbnMucmVkdWNlKGZ1bmN0aW9uKGh0bWwsIHRva2VuKSB7XHJcbiAgICAgICAgICBjb25zdCB0b2tlbkhUTUwgPSB0b2tlbi5nZXRIVE1MKCk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGh0bWwgKz0gdG9rZW5IVE1MO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICByZXR1cm4gaHRtbDtcclxuICAgICAgICB9LCAnJyk7XHJcbiAgICBcclxuICAgIGh0bWwgKz0gJ1xcbic7IC8vL1xyXG4gICAgXHJcbiAgICByZXR1cm4gaHRtbDtcclxuICB9XHJcblxyXG4gIHNldFRva2Vucyh0b2tlbnMpIHtcclxuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xyXG4gIH1cclxuXHJcbiAgc2V0SW5Db21tZW50KGluQ29tbWVudCkge1xyXG4gICAgdGhpcy5pbkNvbW1lbnQgPSBpbkNvbW1lbnQ7XHJcbiAgfVxyXG5cclxuICBwdXNoVG9rZW4odG9rZW4pIHtcclxuICAgIHRoaXMudG9rZW5zLnB1c2godG9rZW4pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21Db250ZW50KExpbmUsIGNvbnRlbnQsIGNvbnRleHQsIHJ1bGVzLCBDb21tZW50VG9rZW5zLCBTdHJpbmdUb2tlbnMsIFdoaXRlc3BhY2VUb2tlbnMpIHtcclxuICAgIGNvbnN0IGxpbmUgPSBuZXcgTGluZShjb250ZW50KSxcclxuICAgICAgICAgIHRva2Vuc09yQ29udGVudHMgPSBbY29udGVudF0sXHJcbiAgICAgICAgICBpbkNvbW1lbnQgPSBDb21tZW50VG9rZW5zLnBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSwgY29udGV4dCk7XHJcblxyXG4gICAgU3RyaW5nVG9rZW5zLnBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSk7XHJcbiAgICBcclxuICAgIFdoaXRlc3BhY2VUb2tlbnMucGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lKTtcclxuXHJcbiAgICBjb25zdCB0b2tlbnMgPSBTaWduaWZpY2FudFRva2Vucy5wYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUsIHJ1bGVzKTtcclxuXHJcbiAgICBsaW5lLnNldFRva2Vucyh0b2tlbnMpO1xyXG5cclxuICAgIGxpbmUuc2V0SW5Db21tZW50KGluQ29tbWVudCk7XHJcblxyXG4gICAgcmV0dXJuIGxpbmU7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IExpbmU7XHJcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgU2lnbmlmaWNhbnRUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudCcpO1xuXG5jbGFzcyBSdWxlIHtcbiAgY29uc3RydWN0b3Ioc2lnbmlmaWNhbnRUb2tlblR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uKSB7XG4gICAgdGhpcy5zaWduaWZpY2FudFRva2VuVHlwZSA9IHNpZ25pZmljYW50VG9rZW5UeXBlO1xuICAgIHRoaXMucmVndWxhckV4cHJlc3Npb24gPSByZWd1bGFyRXhwcmVzc2lvbjtcbiAgfVxuICBcbiAgZ2V0U2lnbmlmaWNhbnRUb2tlblR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmlmaWNhbnRUb2tlblR5cGU7XG4gIH1cbiAgXG4gIGdldFJlZ3VsYXJFeHByZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLnJlZ3VsYXJFeHByZXNzaW9uO1xuICB9XG4gIFxuICBzaWduaWZpY2FudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50KGNvbnRlbnQpIHtcbiAgICBsZXQgc2lnbmlmaWNhbnRUb2tlblBvc2l0aW9uID0gLTE7XG4gICAgXG4gICAgY29uc3QgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2godGhpcy5yZWd1bGFyRXhwcmVzc2lvbik7XG4gICAgXG4gICAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKTtcbiAgICAgIFxuICAgICAgaWYgKGZpcnN0TWF0Y2ggIT09ICcnKSB7XG4gICAgICAgIHNpZ25pZmljYW50VG9rZW5Qb3NpdGlvbiA9IG1hdGNoZXMuaW5kZXg7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuUG9zaXRpb247XG4gIH1cblxuICBzaWduaWZpY2FudFRva2VuRnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gY29udGVudC5tYXRjaCh0aGlzLnJlZ3VsYXJFeHByZXNzaW9uKSxcbiAgICAgICAgICBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyk7XG5cbiAgICBjb250ZW50ID0gZmlyc3RNYXRjaDsgLy8vXG5cbiAgICBjb25zdCB0eXBlID0gdGhpcy5zaWduaWZpY2FudFRva2VuVHlwZSwgLy8vXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IFNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnRMaW5lQW5kVHlwZShjb250ZW50LCBsaW5lLCB0eXBlKTtcblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgc3RhdGljIGZyb21TaWduaWZpY2FudFRva2VuVHlwZUFuZFJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybihzaWduaWZpY2FudFRva2VuVHlwZSwgcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKSB7XG4gICAgY29uc3QgdW5pY29kZSA9IGlzVW5pY29kZShyZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4pLFxuICAgICAgICAgIGZsYWdzID0gdW5pY29kZSA/ICd1JyA6ICcnLFxuICAgICAgICAgIHJlZ0V4cCA9IG5ldyBSZWdFeHAocmVndWxhckV4cHJlc3Npb25QYXR0ZXJuLCBmbGFncyksXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb24gPSByZWdFeHAsIC8vL1xuICAgICAgICAgIHJ1bGUgPSBuZXcgUnVsZShzaWduaWZpY2FudFRva2VuVHlwZSwgcmVndWxhckV4cHJlc3Npb24pO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlO1xuXG5mdW5jdGlvbiBpc1VuaWNvZGUocmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKSB7XG4gIGNvbnN0IG1hdGNoZXMgPSByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4ubWF0Y2goL3VcXHsvKSxcbiAgICAgICAgdW5pY29kZSA9IChtYXRjaGVzICE9PSBudWxsKTtcblxuICByZXR1cm4gdW5pY29kZTtcbn1cblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUnKSxcbiAgICAgIHV0aWwgPSByZXF1aXJlKCcuLi91dGlsJyk7XG5cbmNsYXNzIFJ1bGVzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cbiAgXG4gIHJlZHVjZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7IHJldHVybiB0aGlzLmFycmF5LnJlZHVjZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKTsgfVxuXG4gIGdldFJ1bGUoZGVwdGgpIHtcbiAgICBjb25zdCBydWxlID0gKHRoaXMuYXJyYXlbZGVwdGhdIHx8IG51bGwpOyAvLy9cblxuICAgIHJldHVybiBydWxlO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUdyYW1tYXIoZ3JhbW1hcikge1xuICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW5UeXBlcyA9IFJ1bGVzLnNpZ25pZmljYW50VG9rZW5UeXBlc0Zyb21HcmFtbWFyKGdyYW1tYXIpLFxuICAgICAgICAgIGFycmF5ID0gc2lnbmlmaWNhbnRUb2tlblR5cGVzLm1hcChmdW5jdGlvbihzaWduaWZpY2FudFRva2VuVHlwZSkge1xuICAgICAgICAgICAgY29uc3QgcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuID0gUnVsZXMuZmluZFJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybihzaWduaWZpY2FudFRva2VuVHlwZSwgZ3JhbW1hciksXG4gICAgICAgICAgICAgICAgICBydWxlID0gUnVsZS5mcm9tU2lnbmlmaWNhbnRUb2tlblR5cGVBbmRSZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4oc2lnbmlmaWNhbnRUb2tlblR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybik7XG4gICAgICBcbiAgICAgICAgICAgIHJldHVybiBydWxlOyAgICAgIFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHJ1bGVzID0gbmV3IFJ1bGVzKGFycmF5KTtcbiAgICBcbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICBzdGF0aWMgZmluZFJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybihzaWduaWZpY2FudFRva2VuVHlwZSwgZ3JhbW1hcikge1xuICAgIGNvbnN0IHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiA9IGdyYW1tYXIucmVkdWNlKGZ1bmN0aW9uKHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiwgZW50cnkpIHtcbiAgICAgICAgICAgIGlmIChyZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4gPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgY29uc3QgZW50cnlLZXlzID0gT2JqZWN0LmtleXMoZW50cnkpLFxuICAgICAgICAgICAgICAgICAgICBmaXJzdEVudHJ5S2V5ID0gZmlyc3QoZW50cnlLZXlzKSxcbiAgICAgICAgICAgICAgICAgICAgZW50cnlTaWduaWZpY2FudFRva2VuVHlwZSA9IGZpcnN0RW50cnlLZXk7ICAvLy9cblxuICAgICAgICAgICAgICBpZiAoZW50cnlTaWduaWZpY2FudFRva2VuVHlwZSA9PT0gc2lnbmlmaWNhbnRUb2tlblR5cGUpIHtcbiAgICAgICAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4gPSBlbnRyeVtzaWduaWZpY2FudFRva2VuVHlwZV07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybjtcbiAgICAgICAgICB9LCBudWxsKTtcblxuICAgIHJldHVybiByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm47XG4gIH1cblxuICBzdGF0aWMgc2lnbmlmaWNhbnRUb2tlblR5cGVzRnJvbUdyYW1tYXIoZ3JhbW1hcikge1xuICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW5UeXBlcyA9IGdyYW1tYXIubWFwKGZ1bmN0aW9uKGVudHJ5KSB7XG4gICAgICAgICAgICBjb25zdCBlbnRyeUtleXMgPSBPYmplY3Qua2V5cyhlbnRyeSksXG4gICAgICAgICAgICAgICAgICBmaXJzdEVudHJ5S2V5ID0gZmlyc3QoZW50cnlLZXlzKSxcbiAgICAgICAgICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlID0gZmlyc3RFbnRyeUtleTsgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuVHlwZTtcbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuVHlwZXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlcztcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9IiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB1dGlsID0gcmVxdWlyZSgnLi4vLi4vdXRpbCcpO1xuXG5jbGFzcyBOb25TaWduaWZpY2FudFRva2VuIHtcbiAgY29uc3RydWN0b3IoY29udGVudCwgbGluZSwgaHRtbCkge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB0aGlzLmh0bWwgPSBodG1sO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG4gIFxuICBnZXRMaW5lKCkge1xuICAgIHJldHVybiB0aGlzLmxpbmU7XG4gIH1cblxuICBnZXRIVE1MKCkge1xuICAgIHJldHVybiB0aGlzLmh0bWw7XG4gIH1cbiAgXG4gIGdldExlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50Lmxlbmd0aDsgLy8vXG4gIH1cbiAgXG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBOb25TaWduaWZpY2FudFRva2VuLmNsb25lKHRoaXMsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCBOb25TaWduaWZpY2FudFRva2VuKTsgfVxuXG4gIHN0YXRpYyBjbG9uZSh0b2tlbiwgc3RhcnRQb3NpdGlvbiA9IDAsIGVuZFBvc2l0aW9uID0gdG9rZW4uZ2V0TGVuZ3RoKCksIENsYXNzID0gTm9uU2lnbmlmaWNhbnRUb2tlbikge1xuICAgIGxldCBjbG9uZWROb25TaWduaWZpY2FudFRva2VuID0gbnVsbDtcblxuICAgIGlmIChzdGFydFBvc2l0aW9uICE9PSBlbmRQb3NpdGlvbikge1xuICAgICAgY29uc3QgbGluZSA9IHRva2VuLmdldExpbmUoKTtcblxuICAgICAgbGV0IGNvbnRlbnQgPSB0b2tlbi5nZXRDb250ZW50KCk7XG4gICAgICBcbiAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7XG5cbiAgICAgIGNsb25lZE5vblNpZ25pZmljYW50VG9rZW4gPSBDbGFzcy5mcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSwgQ2xhc3MpO1xuICAgIH1cblxuICAgIHJldHVybiBjbG9uZWROb25TaWduaWZpY2FudFRva2VuO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIENsYXNzID0gTm9uU2lnbmlmaWNhbnRUb2tlbikge1xuICAgIGNvbnN0IGh0bWwgPSBDbGFzcy5odG1sRnJvbUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgdG9rZW4gPSBuZXcgQ2xhc3MoY29udGVudCwgbGluZSwgaHRtbCk7XG5cbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxuICBzdGF0aWMgaHRtbEZyb21Db250ZW50KGNvbnRlbnQpIHtcbiAgICBjb25zdCBzYW5pdGlzZWRDb250ZW50ID0gdXRpbC5zYW5pdGlzZUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgaHRtbCA9IHNhbml0aXNlZENvbnRlbnQ7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vblNpZ25pZmljYW50VG9rZW47XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHV0aWwgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsJyksXG4gICAgICBOb25TaWduaWZpY2FudFRva2VuID0gcmVxdWlyZSgnLi4vbm9uU2lnbmlmaWNhbnQnKTtcblxuY2xhc3MgQ29tbWVudFRva2VuIGV4dGVuZHMgTm9uU2lnbmlmaWNhbnRUb2tlbiB7XG4gIG1lcmdlKGNvbW1lbnRUb2tlbikge1xuICAgIGxldCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCk7XG4gICAgXG4gICAgY29uc3QgbGluZSA9IHRoaXMuZ2V0TGluZSgpLFxuICAgICAgICAgIGNvbW1lbnRUb2tlbkNvbnRlbnQgPSBjb21tZW50VG9rZW4uZ2V0Q29udGVudCgpO1xuXG4gICAgY29udGVudCArPSBjb21tZW50VG9rZW5Db250ZW50O1xuXG4gICAgY29tbWVudFRva2VuID0gQ29tbWVudFRva2VuLmZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lKTsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbW1lbnRUb2tlbjtcbiAgfVxuXG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBDb21tZW50VG9rZW4uY2xvbmUodGhpcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24sIENvbW1lbnRUb2tlbik7IH1cblxuICBzdGF0aWMgY2xvbmUodG9rZW4sIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCBDbGFzcyA9IENvbW1lbnRUb2tlbikgeyByZXR1cm4gTm9uU2lnbmlmaWNhbnRUb2tlbi5jbG9uZSh0b2tlbiwgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24sIENsYXNzKSB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBDbGFzcyA9IENvbW1lbnRUb2tlbikgeyByZXR1cm4gTm9uU2lnbmlmaWNhbnRUb2tlbi5mcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSwgQ2xhc3MpOyB9XG5cbiAgc3RhdGljIGh0bWxGcm9tQ29udGVudChjb250ZW50KSB7XG4gICAgY29uc3Qgc2FuaXRpc2VkQ29udGVudCA9IHV0aWwuc2FuaXRpc2VDb250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIGlubmVySFRNTCA9IHNhbml0aXNlZENvbnRlbnQsIC8vL1xuICAgICAgICAgIGh0bWwgPSBgPHNwYW4gY2xhc3M9XCJjb21tZW50XCI+JHtpbm5lckhUTUx9PC9zcGFuPmA7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1lbnRUb2tlbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi4vY29tbWVudCcpO1xuXG5jbGFzcyBFbmRPZkNvbW1lbnRUb2tlbiBleHRlbmRzIENvbW1lbnRUb2tlbiB7XG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBDb21tZW50VG9rZW4uY2xvbmUodGhpcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24sIEVuZE9mQ29tbWVudFRva2VuKTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSkgeyByZXR1cm4gQ29tbWVudFRva2VuLmZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBFbmRPZkNvbW1lbnRUb2tlbik7IH1cblxuICBzdGF0aWMgZnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpIHtcbiAgICBsZXQgZW5kT2ZDb21tZW50VG9rZW4gPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKC9eXFwqXFwvLyk7XG5cbiAgICBpZiAobWF0Y2hlcykge1xuICAgICAgY29uc3QgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpO1xuXG4gICAgICBjb250ZW50ID0gZmlyc3RNYXRjaDsgLy8vXG5cbiAgICAgIGVuZE9mQ29tbWVudFRva2VuID0gRW5kT2ZDb21tZW50VG9rZW4uZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpO1xuICAgIH1cblxuICAgIHJldHVybiBlbmRPZkNvbW1lbnRUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBwb3NpdGlvbldpdGhpbkNvbnRlbnQoY29udGVudCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gY29udGVudC5zZWFyY2goL1xcKlxcLy8pO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRW5kT2ZDb21tZW50VG9rZW47XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuLi9jb21tZW50Jyk7XG5cbmNsYXNzIE1pZGRsZU9mQ29tbWVudFRva2VuIGV4dGVuZHMgQ29tbWVudFRva2VuIHtcbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIENvbW1lbnRUb2tlbi5jbG9uZSh0aGlzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgTWlkZGxlT2ZDb21tZW50VG9rZW4pOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBsZW5ndGgpIHtcbiAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHIoMCwgbGVuZ3RoKTsgIC8vL1xuXG4gICAgY29uc3QgbWlkZGxlT2ZDb21tZW50VG9rZW4gPSBDb21tZW50VG9rZW4uZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIE1pZGRsZU9mQ29tbWVudFRva2VuKTtcblxuICAgIHJldHVybiBtaWRkbGVPZkNvbW1lbnRUb2tlbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1pZGRsZU9mQ29tbWVudFRva2VuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuLi9jb21tZW50Jyk7XG5cbmNsYXNzIFN0YXJ0T2ZDb21tZW50VG9rZW4gZXh0ZW5kcyBDb21tZW50VG9rZW4ge1xuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gQ29tbWVudFRva2VuLmNsb25lKHRoaXMsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCBTdGFydE9mQ29tbWVudFRva2VuKTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSkgeyByZXR1cm4gQ29tbWVudFRva2VuLmZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBTdGFydE9mQ29tbWVudFRva2VuKTsgfVxuXG4gIHN0YXRpYyBmcm9tV2l0aGluQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSkge1xuICAgIGxldCBzdGFydE9mQ29tbWVudFRva2VuID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBtYXRjaGVzID0gY29udGVudC5tYXRjaCgvXlxcL1xcKi8pO1xuXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKTtcblxuICAgICAgY29udGVudCA9IGZpcnN0TWF0Y2g7IC8vL1xuXG4gICAgICBzdGFydE9mQ29tbWVudFRva2VuID0gU3RhcnRPZkNvbW1lbnRUb2tlbi5mcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBzdGFydE9mQ29tbWVudFRva2VuO1xuICB9XG5cbiAgc3RhdGljIHBvc2l0aW9uV2l0aGluQ29udGVudChjb250ZW50KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBjb250ZW50LnNlYXJjaCgvXFwvXFwqLyk7XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTdGFydE9mQ29tbWVudFRva2VuO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdXRpbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWwnKTtcblxuY2xhc3MgU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQsIGxpbmUsIHR5cGUsIGlubmVySFRNTCkge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuaW5uZXJIVE1MID0gaW5uZXJIVE1MO1xuXG4gICAgdGhpcy5lcnJvciA9IHVuZGVmaW5lZDsgLy8vXG4gIH1cbiAgXG4gIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgfVxuICBcbiAgZ2V0TGluZSgpIHtcbiAgICByZXR1cm4gdGhpcy5saW5lO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0SW5uZXJIVE1MKCkge1xuICAgIHJldHVybiB0aGlzLmlubmVySFRNTDtcbiAgfVxuXG4gIGdldEVycm9yKCkge1xuICAgIHJldHVybiB0aGlzLmVycm9yO1xuICB9XG5cbiAgZ2V0SFRNTCgpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSAodGhpcy5lcnJvciA9PT0gdHJ1ZSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2Vycm9yJyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHlwZSxcbiAgICAgICAgICBodG1sID0gYDxzcGFuIGNsYXNzPVwiJHtjbGFzc05hbWV9XCI+JHt0aGlzLmlubmVySFRNTH08L3NwYW4+YDtcblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQubGVuZ3RoOyAvLy9cbiAgfVxuXG4gIHNldEVycm9yKGVycm9yKSB7XG4gICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICB9XG5cbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIFNpZ25pZmljYW50VG9rZW4uY2xvbmUodGhpcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24sIFNpZ25pZmljYW50VG9rZW4pIH1cblxuICBzdGF0aWMgY2xvbmUodG9rZW4sIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCBDbGFzcyA9IFNpZ25pZmljYW50VG9rZW4pIHtcbiAgICBsZXQgY2xvbmVkU2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgICBpZiAoc3RhcnRQb3NpdGlvbiAhPT0gZW5kUG9zaXRpb24pIHtcbiAgICAgIGxldCBjb250ZW50ID0gdG9rZW4uZ2V0Q29udGVudCgpO1xuXG4gICAgICBjb25zdCBsaW5lID0gdG9rZW4uZ2V0TGluZSgpLFxuICAgICAgICAgICAgdHlwZSA9IHRva2VuLmdldFR5cGUoKSxcbiAgICAgICAgICAgIGVycm9yID0gdG9rZW4uZ2V0RXJyb3IoKTtcblxuICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTtcblxuICAgICAgY2xvbmVkU2lnbmlmaWNhbnRUb2tlbiA9IENsYXNzLmZyb21Db250ZW50TGluZUFuZFR5cGUoY29udGVudCwgbGluZSwgdHlwZSk7XG5cbiAgICAgIGNsb25lZFNpZ25pZmljYW50VG9rZW4uc2V0RXJyb3IoZXJyb3IpO1xuICAgIH1cblxuICAgIHJldHVybiBjbG9uZWRTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50TGluZUFuZFR5cGUoY29udGVudCwgbGluZSwgdHlwZSwgQ2xhc3MgPSBTaWduaWZpY2FudFRva2VuKSB7XG4gICAgY29uc3QgaW5uZXJIVE1MID0gQ2xhc3MuaW5uZXJIVE1MRnJvbUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IG5ldyBDbGFzcyhjb250ZW50LCBsaW5lLCB0eXBlLCBpbm5lckhUTUwpO1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBzdGF0aWMgaW5uZXJIVE1MRnJvbUNvbnRlbnQoY29udGVudCkge1xuICAgIGNvbnN0IHNhbml0aXNlZENvbnRlbnQgPSB1dGlsLnNhbml0aXNlQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICBpbm5lckhUTUwgPSBzYW5pdGlzZWRDb250ZW50OyAvLy9cblxuICAgIHJldHVybiBpbm5lckhUTUw7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTaWduaWZpY2FudFRva2VuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBTaWduaWZpY2FudFRva2VuID0gcmVxdWlyZSgnLi4vc2lnbmlmaWNhbnQnKTtcblxuY2xhc3MgRW5kT2ZMaW5lVG9rZW4gZXh0ZW5kcyBTaWduaWZpY2FudFRva2VuIHtcbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIFNpZ25pZmljYW50VG9rZW4uY2xvbmUodGhpcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24sIEVuZE9mTGluZVRva2VuKTsgfVxuICBcbiAgc3RhdGljIGZyb21Db250ZW50TGluZUFuZFR5cGUoY29udGVudCwgbGluZSwgdHlwZSkgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5mcm9tQ29udGVudExpbmVBbmRUeXBlKGNvbnRlbnQsIGxpbmUsIHR5cGUsIEVuZE9mTGluZVRva2VuKTsgfVxuICBcbiAgZ2V0SFRNTCgpIHtcbiAgICBjb25zdCBodG1sID0gJyc7XG4gICAgXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxpbmUobGluZSkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSAnJyxcbiAgICAgICAgICB0eXBlID0gRW5kT2ZMaW5lVG9rZW4udHlwZSxcbiAgICAgICAgICBlbmRPZkxpbmVUb2tlbiA9IEVuZE9mTGluZVRva2VuLmZyb21Db250ZW50TGluZUFuZFR5cGUoY29udGVudCwgbGluZSwgdHlwZSk7XG4gICAgXG4gICAgcmV0dXJuIGVuZE9mTGluZVRva2VuO1xuICB9XG59XG5cbkVuZE9mTGluZVRva2VuLnR5cGUgPSAnZW5kT2ZMaW5lJztcblxubW9kdWxlLmV4cG9ydHMgPSBFbmRPZkxpbmVUb2tlbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgU2lnbmlmaWNhbnRUb2tlbiA9IHJlcXVpcmUoJy4uL3NpZ25pZmljYW50Jyk7XG5cbmNsYXNzIFN0cmluZ1Rva2VuIGV4dGVuZHMgU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBTaWduaWZpY2FudFRva2VuLmNsb25lKHRoaXMsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCBTdHJpbmdUb2tlbik7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRMaW5lQW5kVHlwZShjb250ZW50LCBsaW5lLCB0eXBlKSB7IHJldHVybiBTaWduaWZpY2FudFRva2VuLmZyb21Db250ZW50TGluZUFuZFR5cGUoY29udGVudCwgbGluZSwgdHlwZSwgU3RyaW5nVG9rZW4pOyB9XG5cbiAgc3RhdGljIGZyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lKSB7XG4gICAgbGV0IHN0cmluZ1Rva2VuID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBtYXRjaGVzID0gY29udGVudC5tYXRjaCgvKFwiW15cIl0qXCIpLyk7XG5cbiAgICBpZiAobWF0Y2hlcykge1xuICAgICAgY29uc3QgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpO1xuICAgICAgXG4gICAgICBjb250ZW50ID0gZmlyc3RNYXRjaDsgLy8vXG4gICAgICBcbiAgICAgIGNvbnN0IHR5cGUgPSBTdHJpbmdUb2tlbi50eXBlO1xuXG4gICAgICBzdHJpbmdUb2tlbiA9IFN0cmluZ1Rva2VuLmZyb21Db250ZW50TGluZUFuZFR5cGUoY29udGVudCwgbGluZSwgdHlwZSk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBzdHJpbmdUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBwb3NpdGlvbldpdGhpbkNvbnRlbnQoY29udGVudCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gY29udGVudC5zZWFyY2goL1wiW15cIl0qXCIvKTtcblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFN0cmluZ1Rva2VuO1xuXG5TdHJpbmdUb2tlbi50eXBlID0gJ3N0cmluZyc7XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBTaWduaWZpY2FudFRva2VuID0gcmVxdWlyZSgnLi4vc2lnbmlmaWNhbnQnKTtcblxuY2xhc3MgV2hpdGVzcGFjZVRva2VuIGV4dGVuZHMgU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBTaWduaWZpY2FudFRva2VuLmNsb25lKHRoaXMsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCBXaGl0ZXNwYWNlVG9rZW4pOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50TGluZUFuZFR5cGUoY29udGVudCwgbGluZSwgdHlwZSkgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5mcm9tQ29udGVudExpbmVBbmRUeXBlKGNvbnRlbnQsIGxpbmUsIHR5cGUsIFdoaXRlc3BhY2VUb2tlbik7IH1cblxuICBzdGF0aWMgZnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpIHtcbiAgICBsZXQgd2hpdGVzcGFjZVRva2VuID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBtYXRjaGVzID0gY29udGVudC5tYXRjaCgvKFtcXHQgXSspLyk7XG5cbiAgICBpZiAobWF0Y2hlcykge1xuICAgICAgY29uc3QgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpO1xuICAgICAgXG4gICAgICBjb250ZW50ID0gZmlyc3RNYXRjaDsgLy8vXG4gICAgICBcbiAgICAgIGNvbnN0IHR5cGUgPSBXaGl0ZXNwYWNlVG9rZW4udHlwZTtcblxuICAgICAgd2hpdGVzcGFjZVRva2VuID0gV2hpdGVzcGFjZVRva2VuLmZyb21Db250ZW50TGluZUFuZFR5cGUoY29udGVudCwgbGluZSwgdHlwZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdoaXRlc3BhY2VUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBwb3NpdGlvbldpdGhpbkNvbnRlbnQoY29udGVudCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gY29udGVudC5zZWFyY2goL1tcXHQgXSsvKTtcblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFdoaXRlc3BhY2VUb2tlbjtcblxuV2hpdGVzcGFjZVRva2VuLnR5cGUgPSAnd2hpdGVzcGFjZSc7IFxuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IHV0aWwgPSByZXF1aXJlKCcuLi91dGlsJyk7XHJcblxyXG5jbGFzcyBUb2tlbnMge1xyXG4gIHN0YXRpYyBwYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUsIFRva2VuKSB7XHJcbiAgICBsZXQgb2Zmc2V0ID0gMDtcclxuICAgIFxyXG4gICAgY29uc3QgdG9rZW5zT3JDb250ZW50c0xlbmd0aCA9IHRva2Vuc09yQ29udGVudHMubGVuZ3RoO1xyXG5cclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0b2tlbnNPckNvbnRlbnRzTGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgIGNvbnN0IG9mZnNldEluZGV4ID0gaW5kZXggKyBvZmZzZXQsXHJcbiAgICAgICAgICB0b2tlbk9yQ29udGVudCA9IHRva2Vuc09yQ29udGVudHNbb2Zmc2V0SW5kZXhdO1xyXG5cclxuICAgICAgaWYgKHR5cGVvZiB0b2tlbk9yQ29udGVudCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gdG9rZW5PckNvbnRlbnQsICAvLy9cclxuICAgICAgICAgICAgdG9rZW5zT3JSZW1haW5pbmdDb250ZW50ID0gdG9rZW5zT3JSZW1haW5pbmdDb250ZW50RnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIFRva2VuKSxcclxuICAgICAgICAgICAgdG9rZW5zT3JSZW1haW5pbmdDb250ZW50TGVuZ3RoID0gdG9rZW5zT3JSZW1haW5pbmdDb250ZW50Lmxlbmd0aCxcclxuICAgICAgICAgICAgc3RhcnQgPSBvZmZzZXRJbmRleDtcclxuXHJcbiAgICAgICAgdXRpbC5zcGxpY2VBcnJheSh0b2tlbnNPckNvbnRlbnRzLCBzdGFydCwgMSwgdG9rZW5zT3JSZW1haW5pbmdDb250ZW50KTtcclxuXHJcbiAgICAgICAgb2Zmc2V0ICs9IHRva2Vuc09yUmVtYWluaW5nQ29udGVudExlbmd0aCAtIDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVG9rZW5zO1xyXG5cclxuZnVuY3Rpb24gdG9rZW5zT3JSZW1haW5pbmdDb250ZW50RnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIFRva2VuKSB7XHJcbiAgbGV0IHJlbWFpbmluZ0NvbnRlbnQsXHJcbiAgICAgIHRva2Vuc09yUmVtYWluaW5nQ29udGVudCA9IFtdLCAgICAgICBcclxuICAgICAgdG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQgPSBUb2tlbi5wb3NpdGlvbldpdGhpbkNvbnRlbnQoY29udGVudCk7XHJcbiAgXHJcbiAgd2hpbGUgKHRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ICE9PSAtMSkge1xyXG4gICAgaWYgKHRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ID4gMCkge1xyXG4gICAgICByZW1haW5pbmdDb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoMCwgdG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQpO1xyXG5cclxuICAgICAgdG9rZW5zT3JSZW1haW5pbmdDb250ZW50LnB1c2gocmVtYWluaW5nQ29udGVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG9rZW4gPSBUb2tlbi5mcm9tV2l0aGluQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSksXHJcbiAgICAgICAgICB0b2tlbkxlbmd0aCA9IHRva2VuLmdldExlbmd0aCgpLFxyXG4gICAgICAgICAgdG9rZW5PZmZzZXQgPSB0b2tlblBvc2l0aW9uV2l0aGluQ29udGVudCArIHRva2VuTGVuZ3RoO1xyXG4gICAgXHJcbiAgICB0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnQucHVzaCh0b2tlbik7XHJcbiAgICBcclxuICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyh0b2tlbk9mZnNldCk7XHJcblxyXG4gICAgdG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQgPSBUb2tlbi5wb3NpdGlvbldpdGhpbkNvbnRlbnQoY29udGVudCk7XHJcbiAgfVxyXG4gIFxyXG4gIGlmIChjb250ZW50ICE9PSAnJykge1xyXG4gICAgcmVtYWluaW5nQ29udGVudCA9IGNvbnRlbnQ7XHJcblxyXG4gICAgdG9rZW5zT3JSZW1haW5pbmdDb250ZW50LnB1c2gocmVtYWluaW5nQ29udGVudCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdG9rZW5zT3JSZW1haW5pbmdDb250ZW50O1xyXG59XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IHV0aWwgPSByZXF1aXJlKCcuLi8uLi91dGlsJyksXHJcbiAgICAgIEVuZE9mQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi4vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9lbmRPZicpLFxyXG4gICAgICBTdGFydE9mQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi4vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9zdGFydE9mJyksXHJcbiAgICAgIE1pZGRsZU9mQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi4vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9taWRkbGVPZicpO1xyXG5cclxuY2xhc3MgQ29tbWVudFRva2VucyB7XHJcbiAgc3RhdGljIHBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSwgY29udGV4dCkge1xyXG4gICAgbGV0IGNvbnRlbnQgPSB0b2tlbnNPckNvbnRlbnRzLnBvcCgpLFxyXG4gICAgICAgIGNvbW1lbnRUb2tlbixcclxuICAgICAgICBjb21tZW50VG9rZW5MZW5ndGgsXHJcbiAgICAgICAgcHJldmlvdXNMaW5lSW5Db21tZW50ID0gY29udGV4dC5pc1ByZXZpb3VzTGluZUluQ29tbWVudCgpLFxyXG4gICAgICAgIGluQ29tbWVudCA9IChwcmV2aW91c0xpbmVJbkNvbW1lbnQgPT09IHRydWUpO1xyXG5cclxuICAgIHdoaWxlIChjb250ZW50ICE9PSAnJykge1xyXG4gICAgICBsZXQgY29udGVudExlbmd0aCA9IGNvbnRlbnQubGVuZ3RoO1xyXG5cclxuICAgICAgaWYgKGluQ29tbWVudCkge1xyXG4gICAgICAgIGNvbnN0IGVuZE9mQ29tbWVudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ID0gRW5kT2ZDb21tZW50VG9rZW4ucG9zaXRpb25XaXRoaW5Db250ZW50KGNvbnRlbnQpO1xyXG5cclxuICAgICAgICBpZiAoZW5kT2ZDb21tZW50VG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQgPT09IDApIHtcclxuICAgICAgICAgIGluQ29tbWVudCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgIGNvbW1lbnRUb2tlbiA9IEVuZE9mQ29tbWVudFRva2VuLmZyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lKTtcclxuXHJcbiAgICAgICAgICBjb21tZW50VG9rZW5MZW5ndGggPSBjb21tZW50VG9rZW4uZ2V0TGVuZ3RoKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IG1pZGRsZU9mQ29tbWVudFRva2VuTGVuZ3RoID0gdXRpbC5taW5pbXVtQmFyTWludXNPbmUoZW5kT2ZDb21tZW50VG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQsIGNvbnRlbnRMZW5ndGgpO1xyXG5cclxuICAgICAgICAgIGNvbW1lbnRUb2tlbiA9IE1pZGRsZU9mQ29tbWVudFRva2VuLmZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBtaWRkbGVPZkNvbW1lbnRUb2tlbkxlbmd0aCk7XHJcblxyXG4gICAgICAgICAgY29tbWVudFRva2VuTGVuZ3RoID0gbWlkZGxlT2ZDb21tZW50VG9rZW5MZW5ndGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwcmV2aW91c0NvbW1lbnRUb2tlbiA9IHRva2Vuc09yQ29udGVudHMucG9wKCk7XHJcblxyXG4gICAgICAgIGNvbW1lbnRUb2tlbiA9IChwcmV2aW91c0NvbW1lbnRUb2tlbiA9PT0gdW5kZWZpbmVkKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudFRva2VuIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzQ29tbWVudFRva2VuLm1lcmdlKGNvbW1lbnRUb2tlbik7XHJcblxyXG4gICAgICAgIHRva2Vuc09yQ29udGVudHMucHVzaChjb21tZW50VG9rZW4pO1xyXG5cclxuICAgICAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoY29tbWVudFRva2VuTGVuZ3RoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBzdGFydE9mQ29tbWVudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ID0gU3RhcnRPZkNvbW1lbnRUb2tlbi5wb3NpdGlvbldpdGhpbkNvbnRlbnQoY29udGVudCk7XHJcblxyXG4gICAgICAgIGlmIChzdGFydE9mQ29tbWVudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ID09PSAwKSB7XHJcbiAgICAgICAgICBpbkNvbW1lbnQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgIGNvbW1lbnRUb2tlbiA9IFN0YXJ0T2ZDb21tZW50VG9rZW4uZnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpO1xyXG5cclxuICAgICAgICAgIGNvbW1lbnRUb2tlbkxlbmd0aCA9IGNvbW1lbnRUb2tlbi5nZXRMZW5ndGgoKTtcclxuXHJcbiAgICAgICAgICB0b2tlbnNPckNvbnRlbnRzLnB1c2goY29tbWVudFRva2VuKTtcclxuXHJcbiAgICAgICAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoY29tbWVudFRva2VuTGVuZ3RoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29udGVudExlbmd0aCA9IHV0aWwubWluaW11bUJhck1pbnVzT25lKHN0YXJ0T2ZDb21tZW50VG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQsIGNvbnRlbnRMZW5ndGgpO1xyXG5cclxuICAgICAgICAgIGNvbnN0IHJlbWFpbmluZ0NvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhjb250ZW50TGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoMCwgY29udGVudExlbmd0aCk7XHJcblxyXG4gICAgICAgICAgdG9rZW5zT3JDb250ZW50cy5wdXNoKGNvbnRlbnQpO1xyXG5cclxuICAgICAgICAgIGNvbnRlbnQgPSByZW1haW5pbmdDb250ZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByZXZpb3VzTGluZUluQ29tbWVudCA9IGluQ29tbWVudDsgIC8vL1xyXG5cclxuICAgIGNvbnRleHQuc2V0UHJldmlvdXNMaW5lSW5Db21tZW50KHByZXZpb3VzTGluZUluQ29tbWVudCk7XHJcblxyXG4gICAgcmV0dXJuIGluQ29tbWVudDtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ29tbWVudFRva2VucztcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgU2lnbmlmaWNhbnRUb2tlbnMge1xyXG4gIHN0YXRpYyBwYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUsIHJ1bGVzKSB7XHJcbiAgICBjb25zdCB0b2tlbnMgPSB0b2tlbnNPckNvbnRlbnRzLnJlZHVjZShmdW5jdGlvbih0b2tlbnMsIHRva2VuT3JSZW1haW5pbmdDb250ZW50KSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW5PclJlbWFpbmluZ0NvbnRlbnQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgY29udGVudCA9IHRva2VuT3JSZW1haW5pbmdDb250ZW50LCAgLy8vXHJcbiAgICAgICAgICAgICAgICAgICAgZGVwdGggPSAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5zID0gc2lnbmlmaWNhbnRUb2tlbnNGcm9tV2l0aGluQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSwgcnVsZXMsIGRlcHRoKTtcclxuICAgICAgXHJcbiAgICAgICAgICAgICAgdG9rZW5zID0gdG9rZW5zLmNvbmNhdChzaWduaWZpY2FudFRva2Vucyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgY29uc3Qgbm9uU2lnbmlmaWNhbnRUb2tlbiA9IHRva2VuT3JSZW1haW5pbmdDb250ZW50OyAgLy8vXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgdG9rZW5zLnB1c2gobm9uU2lnbmlmaWNhbnRUb2tlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnM7XHJcbiAgICAgICAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIHRva2VucztcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU2lnbmlmaWNhbnRUb2tlbnM7XHJcblxyXG5mdW5jdGlvbiBzaWduaWZpY2FudFRva2Vuc0Zyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBydWxlcywgZGVwdGgpIHtcclxuICBsZXQgc2lnbmlmaWNhbnRUb2tlbnMgPSBbXTtcclxuXHJcbiAgaWYgKGNvbnRlbnQgIT09ICcnKSB7XHJcbiAgICBjb25zdCBydWxlID0gcnVsZXMuZ2V0UnVsZShkZXB0aCk7XHJcblxyXG4gICAgaWYgKHJ1bGUgIT09IG51bGwpIHtcclxuICAgICAgY29uc3QgbmV4dERlcHRoID0gZGVwdGggKyAxLFxyXG4gICAgICAgICAgICBzaWduaWZpY2FudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ID0gcnVsZS5zaWduaWZpY2FudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50KGNvbnRlbnQpO1xyXG5cclxuICAgICAgaWYgKHNpZ25pZmljYW50VG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQgPT09IC0xKSB7XHJcbiAgICAgICAgc2lnbmlmaWNhbnRUb2tlbnMgPSBzaWduaWZpY2FudFRva2Vuc0Zyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBydWxlcywgbmV4dERlcHRoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBzaWduaWZpY2FudFRva2VuID0gcnVsZS5zaWduaWZpY2FudFRva2VuRnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpLFxyXG4gICAgICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5MZW5ndGggPSBzaWduaWZpY2FudFRva2VuLmdldExlbmd0aCgpLFxyXG4gICAgICAgICAgICAgIGxlZnQgPSBzaWduaWZpY2FudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50LCAgLy8vXHJcbiAgICAgICAgICAgICAgcmlnaHQgPSBzaWduaWZpY2FudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ICsgc2lnbmlmaWNhbnRUb2tlbkxlbmd0aCwgIC8vL1xyXG4gICAgICAgICAgICAgIGxlZnRDb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoMCwgbGVmdCksXHJcbiAgICAgICAgICAgICAgcmlnaHRDb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcocmlnaHQpLFxyXG4gICAgICAgICAgICAgIGxlZnRTaWduaWZpY2FudFRva2VucyA9IHNpZ25pZmljYW50VG9rZW5zRnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKGxlZnRDb250ZW50LCBsaW5lLCBydWxlcywgbmV4dERlcHRoKSxcclxuICAgICAgICAgICAgICByaWdodFNpZ25pZmljYW50VG9rZW5zID0gc2lnbmlmaWNhbnRUb2tlbnNGcm9tV2l0aGluQ29udGVudEFuZExpbmUocmlnaHRDb250ZW50LCBsaW5lLCBydWxlcywgZGVwdGgpO1xyXG5cclxuICAgICAgICBzaWduaWZpY2FudFRva2VucyA9IFtdLmNvbmNhdChsZWZ0U2lnbmlmaWNhbnRUb2tlbnMpLmNvbmNhdChzaWduaWZpY2FudFRva2VuKS5jb25jYXQocmlnaHRTaWduaWZpY2FudFRva2Vucyk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlcmUgaXMgbm8gcnVsZSB0byBwYXJzZSB0aGUgY29udGVudCAnJHtjb250ZW50fScgb24gbGluZSAke2xpbmV9YCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbnM7XHJcbn1cclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgVG9rZW5zID0gcmVxdWlyZSgnLi4vdG9rZW5zJyksXHJcbiAgICAgIFN0cmluZ1Rva2VuID0gcmVxdWlyZSgnLi4vdG9rZW4vc2lnbmlmaWNhbnQvc3RyaW5nJyk7XHJcblxyXG5jbGFzcyBTdHJpbmdUb2tlbnMge1xyXG4gIHN0YXRpYyBwYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUpIHsgVG9rZW5zLnBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSwgU3RyaW5nVG9rZW4pOyB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU3RyaW5nVG9rZW5zO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBUb2tlbnMgPSByZXF1aXJlKCcuLi90b2tlbnMnKSxcclxuICAgICAgV2hpdGVzcGFjZVRva2VuID0gcmVxdWlyZSgnLi4vdG9rZW4vc2lnbmlmaWNhbnQvd2hpdGVzcGFjZScpO1xyXG5cclxuY2xhc3MgV2hpdGVzcGFjZVRva2VucyB7XHJcbiAgc3RhdGljIHBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSkgeyByZXR1cm4gVG9rZW5zLnBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSwgV2hpdGVzcGFjZVRva2VuKTsgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFdoaXRlc3BhY2VUb2tlbnM7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IExpbmUgPSByZXF1aXJlKCcuL2xpbmUnKSxcclxuICAgICAgQ29udGV4dCA9IHJlcXVpcmUoJy4uL2NvbW1vbi9jb250ZXh0JyksXHJcbiAgICAgIENvbW1vbkxleGVyID0gcmVxdWlyZSgnLi4vY29tbW9uL2xleGVyJyksXHJcbiAgICAgIFN0cmluZ1Rva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L3N0cmluZycpLFxyXG4gICAgICBFbmRPZkxpbmVUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9lbmRPZkxpbmUnKSxcclxuICAgICAgV2hpdGVzcGFjZVRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L3doaXRlc3BhY2UnKTtcclxuXHJcbmNsYXNzIEZsb3JlbmNlTGV4ZXIgZXh0ZW5kcyBDb21tb25MZXhlciB7XHJcbiAgbGluZXNGcm9tQ29udGVudChjb250ZW50LCBmaXJzdExpbmVJbmRleCwgbWluaW11bUxpbmVzTGVuZ3RoLCBwcmV2aW91c0xpbmVJbkNvbW1lbnQsIGZvbGxvd2luZ0xpbmVJbkNvbW1lbnQpIHtcclxuICAgIGNvbnN0IGNvbnRleHQgPSBuZXcgQ29udGV4dChtaW5pbXVtTGluZXNMZW5ndGgsIHByZXZpb3VzTGluZUluQ29tbWVudCwgZm9sbG93aW5nTGluZUluQ29tbWVudCksXHJcbiAgICAgICAgICBsaW5lcyA9IHN1cGVyLmxpbmVzRnJvbUNvbnRlbnQoY29udGVudCwgZmlyc3RMaW5lSW5kZXgsIGNvbnRleHQpO1xyXG5cclxuICAgIHJldHVybiBsaW5lcztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzaWduaWZpY2FudFRva2VuVHlwZXMoKSB7XHJcbiAgICBjb25zdCBncmFtbWFyID0gRmxvcmVuY2VMZXhlci5ncmFtbWFyLFxyXG4gICAgICAgICAgZ3JhbW1hclNpZ25pZmljYW50VG9rZW5UeXBlcyA9IENvbW1vbkxleGVyLnNpZ25pZmljYW50VG9rZW5UeXBlc0Zyb21HcmFtbWFyKGdyYW1tYXIpLFxyXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVzID0gZ3JhbW1hclNpZ25pZmljYW50VG9rZW5UeXBlcy5jb25jYXQoW1xyXG4gICAgICAgICAgICBTdHJpbmdUb2tlbi50eXBlLFxyXG4gICAgICAgICAgICBXaGl0ZXNwYWNlVG9rZW4udHlwZSxcclxuICAgICAgICAgICAgRW5kT2ZMaW5lVG9rZW4udHlwZVxyXG4gICAgICAgICAgXSk7XHJcblxyXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW5UeXBlcztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tR3JhbW1hcihncmFtbWFyKSB7XHJcbiAgICBjb25zdCBydWxlcyA9IENvbW1vbkxleGVyLnJ1bGVzRnJvbUdyYW1tYXIoZ3JhbW1hciksXHJcbiAgICAgICAgICBmbG9yZW5jZUxleGVyID0gbmV3IEZsb3JlbmNlTGV4ZXIocnVsZXMsIExpbmUpO1xyXG5cclxuICAgIHJldHVybiBmbG9yZW5jZUxleGVyO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xyXG4gICAgY29uc3QgZ3JhbW1hciA9IEZsb3JlbmNlTGV4ZXIuZ3JhbW1hcixcclxuICAgICAgICAgIGZsb3JlbmNlTGV4ZXIgPSBGbG9yZW5jZUxleGVyLmZyb21HcmFtbWFyKGdyYW1tYXIpO1xyXG5cclxuICAgIHJldHVybiBmbG9yZW5jZUxleGVyO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBGbG9yZW5jZUxleGVyO1xyXG5cclxuRmxvcmVuY2VMZXhlci5ncmFtbWFyID0gW1xyXG5cclxuICB7IFwic3BlY2lhbFwiICAgIDogXCIsfDt8XFxcXHt8XFxcXH18PXw6Onw6fFxcXFwofFxcXFwpfFxcXFwuXFxcXC5cXFxcLnxcXFxcLlxcXFwuXCIgfSxcclxuXHJcbiAgeyBcImluY2x1ZGVcIiAgICA6IFwiXmluY2x1ZGUkXCIgfSxcclxuXHJcbiAgeyBcImtleXdvcmRcIiAgICA6IFwiXig/OlJ1bGV8QXhpb218VGhlb3JlbXxMZW1tYXxQcmVtaXNlc3xQcmVtaXNlfENvbmNsdXNpb258UHJvb2Z8VGhlcmVmb3JlfFN1cHBvc2V8VGhlbnxIZW5jZXxWYXJpYWJsZXN8VmFyaWFibGV8TWV0YXZhcmlhYmxlc3xNZXRhdmFyaWFibGV8Q29uc3RydWN0b3JzfENvbnN0cnVjdG9yfFR5cGV8T2JqZWN0fERlZmluaXRpb258ZnJvbXxieXxsZXR8aXN8bm90fGlufGZyZWV8ZGVmaW5lZHx1bmRlZmluZWQpJFwiIH0sXHJcblxyXG4gIHsgXCJ1bmFzc2lnbmVkXCIgOiBcIl5bXFxcXHV7MjF9LVxcXFx1ezdFfVxcXFx1e0ExfS1cXFxcdXtGRn1cXFxcdXsyMjAwfS1cXFxcdXsyMkZGfVxcXFx1ezJBMDB9LVxcXFx1ezJBRkZ9XFxcXHV7MjMwMH0tXFxcXHV7MjNmZn1cXFxcdXsxRDQwMH0tXFxcXHV7MUQ3RkZ9XSskXCIgfVxyXG5cclxuXTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgQ29tbW9uTGluZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9saW5lJyksXHJcbiAgICAgIENvbW1lbnRUb2tlbnMgPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW5zL2NvbW1lbnQnKSxcclxuICAgICAgU3RyaW5nVG9rZW5zID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2Vucy9zdHJpbmcnKSxcclxuICAgICAgV2hpdGVzcGFjZVRva2VucyA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbnMvd2hpdGVzcGFjZScpLFxyXG4gICAgICBFbmRPZkxpbmVUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9lbmRPZkxpbmUnKTtcclxuXHJcbmNsYXNzIExpbmUgZXh0ZW5kcyBDb21tb25MaW5lIHtcclxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCwgY29udGV4dCwgcnVsZXMpIHtcclxuICAgIGNvbnN0IGxpbmUgPSBzdXBlci5mcm9tQ29udGVudChMaW5lLCBjb250ZW50LCBjb250ZXh0LCBydWxlcywgQ29tbWVudFRva2VucywgU3RyaW5nVG9rZW5zLCBXaGl0ZXNwYWNlVG9rZW5zKSxcclxuICAgICAgICAgIGxpbmVJbkNvbW1lbnQgPSBsaW5lLmlzSW5Db21tZW50KCk7XHJcblxyXG4gICAgaWYgKCFsaW5lSW5Db21tZW50KSB7XHJcbiAgICAgIGNvbnN0IGVuZE9mTGluZVRva2VuID0gRW5kT2ZMaW5lVG9rZW4uZnJvbUxpbmUobGluZSk7XHJcblxyXG4gICAgICBsaW5lLnB1c2hUb2tlbihlbmRPZkxpbmVUb2tlbik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGxpbmU7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IExpbmU7XHJcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgTGluZSA9IHJlcXVpcmUoJy4vbGluZScpO1xuXG5jbGFzcyBQcmltaXRpdmVMZXhlciB7XG4gIHN0YXRpYyBsaW5lc0Zyb21HcmFtbWFyKGdyYW1tYXIpIHtcbiAgICBjb25zdCBjb250ZW50cyA9IGNvbnRlbnRzRnJvbUdyYW1tYXIoZ3JhbW1hciksXG4gICAgICAgICAgbGluZXMgPSBjb250ZW50cy5tYXAoZnVuY3Rpb24oY29udGVudCkge1xuICAgICAgICAgICAgY29uc3QgbGluZSA9IExpbmUuZnJvbUNvbnRlbnQoY29udGVudCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBsaW5lO1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGxpbmVzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJpbWl0aXZlTGV4ZXI7XG5cbmZ1bmN0aW9uIGNvbnRlbnRzRnJvbUdyYW1tYXIoZ3JhbW1hcikge1xuICBjb25zdCBjb250ZW50cyA9IGdyYW1tYXIuc3BsaXQoJ1xcbicpLnJlZHVjZShmdW5jdGlvbiAoY29udGVudHMsIGNvbnRlbnQpIHtcbiAgICBsZXQgbWF0Y2hlcztcblxuICAgIG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKExpbmUubmFtZUV4cHJlc3Npb25SZWdFeHApO1xuXG4gICAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICAgIGNvbnRlbnRzLnB1c2goY29udGVudCk7XG5cbiAgICAgIHJldHVybiBjb250ZW50cztcbiAgICB9XG5cbiAgICBtYXRjaGVzID0gY29udGVudC5tYXRjaChMaW5lLmNvbnRpbnVlZEV4cHJlc3Npb25SZWdFeHApO1xuXG4gICAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzQ29udGVudCA9IGNvbnRlbnRzLnBvcCgpLFxuICAgICAgICAgICAgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpLFxuICAgICAgICAgICAgY29udGludWVkRXhwcmVzc2lvbiA9IGZpcnN0TWF0Y2gsIC8vL1xuICAgICAgICAgICAgY29udGludWluZ0NvbnRlbnQgPSAnICcgKyBjb250aW51ZWRFeHByZXNzaW9uO1xuXG4gICAgICBjb250ZW50ID0gcHJldmlvdXNDb250ZW50ICsgY29udGludWluZ0NvbnRlbnQ7XG5cbiAgICAgIGNvbnRlbnRzLnB1c2goY29udGVudCk7XG5cbiAgICAgIHJldHVybiBjb250ZW50cztcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGVudHM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gY29udGVudHM7XG59XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBTeW1ib2xTZXF1ZW5jZSA9IHJlcXVpcmUoJy4vc3ltYm9sU2VxdWVuY2UnKTtcblxuY2xhc3MgTGluZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHN5bWJvbFNlcXVlbmNlcykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5zeW1ib2xTZXF1ZW5jZXMgPSBzeW1ib2xTZXF1ZW5jZXM7XG4gIH1cbiAgXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuICBcbiAgbWFwU3ltYm9sU2VxdWVuY2VzKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuc3ltYm9sU2VxdWVuY2VzLm1hcChjYWxsYmFjayk7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50KSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2goTGluZS5uYW1lRXhwcmVzc2lvblJlZ0V4cCksXG4gICAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgICAgdGhpcmRNYXRjaCA9IHRoaXJkKG1hdGNoZXMpLFxuICAgICAgICAgIG5hbWUgPSBzZWNvbmRNYXRjaCwgLy8vXG4gICAgICAgICAgZXhwcmVzc2lvbiA9IHRoaXJkTWF0Y2gsIC8vL1xuICAgICAgICAgIGNob2ljZXMgPSBleHByZXNzaW9uLnNwbGl0KExpbmUuY2hvaWNlRGVsaW1pdGVyUmVnRXhwKSxcbiAgICAgICAgICBzeW1ib2xTZXF1ZW5jZXMgPSBjaG9pY2VzLm1hcChmdW5jdGlvbihjaG9pY2UpIHtcbiAgICAgICAgICAgIGNvbnN0IHN5bWJvbFNlcXVlbmNlID0gU3ltYm9sU2VxdWVuY2UuZnJvbUNob2ljZShjaG9pY2UpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gc3ltYm9sU2VxdWVuY2U7XG4gICAgICAgICAgfSk7XG4gICAgXG4gICAgY29uc3QgbGluZSA9IG5ldyBMaW5lKG5hbWUsIHN5bWJvbFNlcXVlbmNlcyk7XG4gICAgXG4gICAgcmV0dXJuIGxpbmU7XG4gIH1cbn1cblxuTGluZS5jaG9pY2VEZWxpbWl0ZXJSZWdFeHAgPSAvXFxzK1xcfFxccysvO1xuTGluZS5uYW1lRXhwcmVzc2lvblJlZ0V4cCA9IC9eXFxzKiguKj8pXFxzKzo6PVxccysoLio/KVxccyokLztcbkxpbmUuY29udGludWVkRXhwcmVzc2lvblJlZ0V4cCA9IC9eXFxzKihcXHxcXHMrLio/KVxccyokLztcblxubW9kdWxlLmV4cG9ydHMgPSBMaW5lO1xuXG5mdW5jdGlvbiBzZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzFdOyB9XG5mdW5jdGlvbiB0aGlyZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMl07IH1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3Qgc3BlY2lhbFN5bWJvbHMgPSByZXF1aXJlKCcuLi9zcGVjaWFsU3ltYm9scycpO1xuXG5jbGFzcyBTeW1ib2xTZXF1ZW5jZSB7XG4gIGNvbnN0cnVjdG9yKHN5bWJvbHMpIHtcbiAgICB0aGlzLnN5bWJvbHMgPSBzeW1ib2xzO1xuICB9XG5cbiAgbWFwU3ltYm9scyhjYWxsYmFjaykge1xuICAgIHJldHVybiB0aGlzLnN5bWJvbHMubWFwKGNhbGxiYWNrKTtcbiAgfVxuICBcbiAgcmVkdWNlU3ltYm9scyhjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuc3ltYm9scy5yZWR1Y2UoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSk7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tQ2hvaWNlKGNob2ljZSkge1xuICAgIGNvbnN0IHN5bWJvbHMgPSBjaG9pY2Uuc3BsaXQoc3ltYm9sRGVsaW1pdGVyUmVnRXhwKS5yZWR1Y2UoZnVuY3Rpb24oc3ltYm9scywgc3ltYm9sKSB7XG4gICAgICAgICAgICBpZiAoICAoc3ltYm9sID09PSAnJylcbiAgICAgICAgICAgICAgIHx8IChzeW1ib2wgPT09IHVuZGVmaW5lZCkgICkge1xuICBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHN5bWJvbHMucHVzaChzeW1ib2wpO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBzeW1ib2xzO1xuICAgICAgICAgIH0sIFtdKSxcbiAgICAgICAgICBleHByZXNzaW9uID0gbmV3IFN5bWJvbFNlcXVlbmNlKHN5bWJvbHMpO1xuICAgIFxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG59XG5cbmNvbnN0IHN5bWJvbERlbGltaXRlclJlZ0V4cCA9IG5ldyBSZWdFeHAoYFxcXFxzK3woJHtzcGVjaWFsU3ltYm9scy5FTkRfT0ZfTElORX0oPzpcXFxcP3xcXFxcK3xcXFxcKikpfCgke3NwZWNpYWxTeW1ib2xzLk5PX1dISVRFU1BBQ0V9KWApO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN5bWJvbFNlcXVlbmNlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBzcGVjaWFsU3ltYm9scyA9IHtcbiAgRU5EX09GX0xJTkUgOiAnPEVORF9PRl9MSU5FPicsXG4gIE5PX1dISVRFU1BBQ0UgOiAnPE5PX1dISVRFU1BBQ0U+JyAgXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNwZWNpYWxTeW1ib2xzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyB1dGlsIHtcbiAgc3RhdGljIG1pbmltdW1CYXJNaW51c09uZSgpIHtcbiAgICBjb25zdCB2YWx1ZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpLFxuICAgICAgICAgIG1pbmltdW1CYXJNaW51c09uZSA9IHZhbHVlcy5yZWR1Y2UoZnVuY3Rpb24obWluaW11bUJhck1pbnVzT25lLCB2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlID4gLTEpIHtcbiAgICAgICAgICAgICAgbWluaW11bUJhck1pbnVzT25lID0gKG1pbmltdW1CYXJNaW51c09uZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLm1pbihtaW5pbXVtQmFyTWludXNPbmUsIHZhbHVlKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU7XG4gICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgcmV0dXJuIG1pbmltdW1CYXJNaW51c09uZTtcbiAgICAgICAgICB9LCBudWxsKTtcblxuICAgIHJldHVybiBtaW5pbXVtQmFyTWludXNPbmU7XG4gIH1cblxuICBzdGF0aWMgc3BsaWNlQXJyYXkoYXJyYXksIHN0YXJ0LCBkZWxldGVDb3VudCwgaXRlbXNBcnJheSkge1xuICAgIGNvbnN0IGFyZ3MgPSBbc3RhcnQsIGRlbGV0ZUNvdW50XS5jb25jYXQoaXRlbXNBcnJheSk7XG4gIFxuICAgIEFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkoYXJyYXksIGFyZ3MpO1xuICB9XG5cbiAgc3RhdGljIHNhbml0aXNlQ29udGVudChjb250ZW50KSB7XG4gICAgY29uc3Qgc2FuaXRpc2VkQ29udGVudCA9IGNvbnRlbnQucmVwbGFjZSgvJi8sJyZhbXA7JykucmVwbGFjZSgvPC8sICcmbHQ7JykucmVwbGFjZSgvPi8sICcmZ3Q7Jyk7XG5cbiAgICByZXR1cm4gc2FuaXRpc2VkQ29udGVudDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHV0aWw7XG4iXX0=
