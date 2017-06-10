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
    key: 'setName',
    value: function setName(name) {
      this.name = name;
    }
  }, {
    key: 'setRules',
    value: function setRules(rules) {
      this.rules = rules;
    }
  }, {
    key: 'setNode',
    value: function setNode(node) {
      this.node = node;
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

  var fixedProductions = fixedProductionsFromProductions(productions),
      unitRuleProductions = unitRuleProductionsFromProductions(productions),
      removedProductions = [],
      addedProductions = [];

  var unitRuleProductionsLength = unitRuleProductions.length;

  while (unitRuleProductionsLength > 0) {
    var unitRuleProduction = unitRuleProductions.shift(),
        unitRuleProductionName = unitRuleProduction.getName();

    var removedProduction = unitRuleProduction;

    removedProductions.push(removedProduction);

    var unitRuleProductionUnitRuleProductionName = unitRuleProduction.getUnitRuleProductionName(),
        fixedProductionName = unitRuleProductionUnitRuleProductionName,
        ///
    addedProductionName = unitRuleProductionName,
        ///
    fixedProduction = parserUtil.findProduction(fixedProductionName, fixedProductions);

    var addedProduction = parserUtil.findProduction(addedProductionName, addedProductions);

    if (addedProduction === null) {
      addedProduction = Production.fromProduction(fixedProduction);

      addedProduction.setName(addedProductionName);

      addedProductions.push(addedProduction);
    } else {
      var fixedProductionRules = fixedProduction.getRules();

      addedProduction.concatRules(fixedProductionRules);
    }

    var intermediateProductionName = unitRuleProductionUnitRuleProductionName,
        ///
    intermediateProduction = parserUtil.findProduction(intermediateProductionName, unitRuleProductions);

    if (intermediateProduction !== null) {
      var intermediateProductionUnitRuleProductionName = intermediateProduction.getUnitRuleProductionName(),
          _unitRuleProductionUnitRuleProductionName = intermediateProductionUnitRuleProductionName; ///

      if (unitRuleProductionName !== _unitRuleProductionUnitRuleProductionName) {
        unitRuleProduction = findUnitRuleProduction(unitRuleProductionName, _unitRuleProductionUnitRuleProductionName, removedProductions);

        if (unitRuleProduction === null) {
          unitRuleProduction = UnitRuleProduction.fromNameAndUnitRuleProductionName(unitRuleProductionName, _unitRuleProductionUnitRuleProductionName);

          unitRuleProductions.unshift(unitRuleProduction);
        }
      }
    }

    unitRuleProductionsLength = unitRuleProductions.length;
  }

  nonCyclicProductionsFromFixedAndAddedProductions(fixedProductions, addedProductions, nonCyclicProductions);
}

function nonCyclicProductionsFromFixedAndAddedProductions(fixedProductions, addedProductions, nonCyclicProductions) {
  fixedProductions.forEach(function (fixedProduction) {
    var nonCyclicProduction = fixedProduction,
        ///
    nonCyclicProductionName = nonCyclicProduction.getName(),
        addedProductionName = nonCyclicProductionName,
        ///
    addedProduction = parserUtil.findProduction(addedProductionName, addedProductions);

    if (addedProduction !== null) {
      var addedProductionRules = addedProduction.getRules();

      nonCyclicProduction.concatRules(addedProductionRules);
    }

    nonCyclicProductions.push(nonCyclicProduction);
  });
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
        unitRulesProduction = UnitRulesProduction.fromProduction(production);

    unitRulesProduction.forEachUnitRule(function (unitRule) {
      var unitRuleProduction = UnitRuleProduction.fromNameAndUnitRule(name, unitRule);

      unitRuleProductions.push(unitRuleProduction);
    });

    return unitRuleProductions;
  }, []);

  return unitRuleProductions;
}

function fixedProductionsFromProductions(productions) {
  var fixedProductions = productions.map(function (production) {
    var nonUnitProduction = NonUnitRulesProduction.fromProduction(production),
        fixedProduction = nonUnitProduction; ///

    return fixedProduction;
  });

  return fixedProductions;
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
    key: 'forEachUnitRule',
    value: function forEachUnitRule(callback) {
      var rules = this.getRules(),
          unitRules = rules; ///

      unitRules.forEach(callback);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczYvYmFzaWMvZ3JhbW1hci5qcyIsImVzNi9iYXNpYy9wYXJzZXIuanMiLCJlczYvYm5mL2dyYW1tYXIuanMiLCJlczYvYm5mL3BhcnNlci5qcyIsImVzNi9ibmYvcHJvZHVjdGlvbi5qcyIsImVzNi9ibmYvcHJvZHVjdGlvbi9lbmRPZkxpbmUuanMiLCJlczYvYm5mL3Byb2R1Y3Rpb24vZ3JvdXAuanMiLCJlczYvYm5mL3Byb2R1Y3Rpb24vbm9XaGl0ZXNwYWNlLmpzIiwiZXM2L2JuZi9wcm9kdWN0aW9uL29wdGlvbmFsUGFydC5qcyIsImVzNi9ibmYvcHJvZHVjdGlvbi9wYXJ0LmpzIiwiZXM2L2JuZi9wcm9kdWN0aW9uL3Byb2R1Y3Rpb24uanMiLCJlczYvYm5mL3Byb2R1Y3Rpb24vcHJvZHVjdGlvbk5hbWUuanMiLCJlczYvYm5mL3Byb2R1Y3Rpb24vcHJvZHVjdGlvbnMuanMiLCJlczYvYm5mL3Byb2R1Y3Rpb24vcmVndWxhckV4cHJlc3Npb24uanMiLCJlczYvYm5mL3Byb2R1Y3Rpb24vcnVsZS5qcyIsImVzNi9ibmYvcHJvZHVjdGlvbi9ydWxlcy5qcyIsImVzNi9ibmYvcHJvZHVjdGlvbi9zaWduaWZpY2FudFRva2VuVHlwZS5qcyIsImVzNi9ibmYvcHJvZHVjdGlvbi90ZXJtaW5hbFN5bWJvbC5qcyIsImVzNi9ibmYvcnVsZS5qcyIsImVzNi9ibmYvcnVsZS9lbmRPZkxpbmUuanMiLCJlczYvYm5mL3J1bGUvZ3JvdXAuanMiLCJlczYvYm5mL3J1bGUvbm9XaGl0ZXNwYWNlLmpzIiwiZXM2L2JuZi9ydWxlL29wdGlvbmFsUGFydC5qcyIsImVzNi9ibmYvcnVsZS9wcm9kdWN0aW9uLmpzIiwiZXM2L2JuZi9ydWxlL3Byb2R1Y3Rpb25OYW1lLmpzIiwiZXM2L2JuZi9ydWxlL3Byb2R1Y3Rpb25zLmpzIiwiZXM2L2JuZi9ydWxlL3J1bGUuanMiLCJlczYvYm5mL3J1bGUvcnVsZXMuanMiLCJlczYvYm5mL3J1bGUvc2lnbmlmaWNhbnRUb2tlblR5cGUuanMiLCJlczYvY29tbW9uL2NvbnRleHQuanMiLCJlczYvY29tbW9uL25vZGUvbm9uVGVybWluYWwuanMiLCJlczYvY29tbW9uL25vZGUvbm9uVGVybWluYWwvZGlzY2FyZFNlY29uZENoaWxkLmpzIiwiZXM2L2NvbW1vbi9ub2RlL25vblRlcm1pbmFsL2Vycm9yLmpzIiwiZXM2L2NvbW1vbi9ub2RlL25vblRlcm1pbmFsL3RyYW5zcGFyZW50LmpzIiwiZXM2L2NvbW1vbi9ub2RlL25vblRlcm1pbmFsL3RyYW5zcGFyZW50VGhlbktlZXBTZWNvbmQuanMiLCJlczYvY29tbW9uL25vZGUvdGVybWluYWwuanMiLCJlczYvY29tbW9uL25vZGUvdGVybWluYWwvZXBzaWxvbi5qcyIsImVzNi9jb21tb24vcGFyc2VUcmVlLmpzIiwiZXM2L2NvbW1vbi9wYXJzZVRyZWUvY2hpbGROb2Rlcy5qcyIsImVzNi9jb21tb24vcGFyc2VUcmVlL2VtcHR5LmpzIiwiZXM2L2NvbW1vbi9wYXJzZVRyZWUvaG9yaXpvbnRhbEJyYW5jaC5qcyIsImVzNi9jb21tb24vcGFyc2VUcmVlL25vblRlcm1pbmFsTm9kZS5qcyIsImVzNi9jb21tb24vcGFyc2VUcmVlL3Byb2R1Y3Rpb25OYW1lLmpzIiwiZXM2L2NvbW1vbi9wYXJzZVRyZWUvdGVybWluYWxOb2RlLmpzIiwiZXM2L2NvbW1vbi9wYXJzZVRyZWUvdGVybWluYWxOb2RlL2Vwc2lsb24uanMiLCJlczYvY29tbW9uL3BhcnNlVHJlZS92ZXJ0aWNhbEJyYW5jaC5qcyIsImVzNi9jb21tb24vcGFyc2VyLmpzIiwiZXM2L2NvbW1vbi9wYXJ0L2VuZE9mTGluZS5qcyIsImVzNi9jb21tb24vcGFydC9lcHNpbG9uLmpzIiwiZXM2L2NvbW1vbi9wYXJ0L29uZU9yTW9yZVBhcnRzLmpzIiwiZXM2L2NvbW1vbi9wYXJ0L29wdGlvbmFsUGFydC5qcyIsImVzNi9jb21tb24vcGFydC9wcm9kdWN0aW9uTmFtZS5qcyIsImVzNi9jb21tb24vcGFydC9yZWd1bGFyRXhwcmVzc2lvbi5qcyIsImVzNi9jb21tb24vcGFydC9zZXF1ZW5jZU9mUGFydHMuanMiLCJlczYvY29tbW9uL3BhcnQvc2lnbmlmaWNhbnRUb2tlblR5cGUuanMiLCJlczYvY29tbW9uL3BhcnQvdGVybWluYWxTeW1ib2wuanMiLCJlczYvY29tbW9uL3BhcnQvd2lsZGNhcmQuanMiLCJlczYvY29tbW9uL3BhcnQvemVyb09yTW9yZVBhcnRzLmpzIiwiZXM2L2NvbW1vbi9wYXJ0cy5qcyIsImVzNi9jb21tb24vcHJvZHVjdGlvbi5qcyIsImVzNi9jb21tb24vcnVsZS5qcyIsImVzNi9leGFtcGxlLmpzIiwiZXM2L2V4YW1wbGVzLmpzIiwiZXM2L2V4YW1wbGVzL2Jhc2ljLmpzIiwiZXM2L2V4YW1wbGVzL2JuZi5qcyIsImVzNi9leGFtcGxlcy9mbG9yZW5jZS5qcyIsImVzNi9mbG9yZW5jZS9ncmFtbWFyLmpzIiwiZXM2L2Zsb3JlbmNlL21hcHBpbmdzLmpzIiwiZXM2L2Zsb3JlbmNlL3BhcnNlci5qcyIsImVzNi9ncmFtbWFyL2N5Y2xlcy5qcyIsImVzNi9ncmFtbWFyL2dyYXBoLmpzIiwiZXM2L2dyYW1tYXIvZ3JhcGgvY29tcG9uZW50LmpzIiwiZXM2L2dyYW1tYXIvZ3JhcGgvY3ljbGUuanMiLCJlczYvZ3JhbW1hci9ncmFwaC9zdGFjay5qcyIsImVzNi9ncmFtbWFyL2dyYXBoL3ZlcnRleC5qcyIsImVzNi9ncmFtbWFyL2xlZnRSZWN1cnNpb24uanMiLCJlczYvZ3JhbW1hci9wcm9kdWN0aW9uL25vbkltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlLmpzIiwiZXM2L2dyYW1tYXIvcHJvZHVjdGlvbi9ub25MZWZ0UmVjdXJzaXZlLmpzIiwiZXM2L2dyYW1tYXIvcHJvZHVjdGlvbi9ub25Vbml0UnVsZXMuanMiLCJlczYvZ3JhbW1hci9wcm9kdWN0aW9uL3JpZ2h0UmVjdXJzaXZlLmpzIiwiZXM2L2dyYW1tYXIvcHJvZHVjdGlvbi91bml0UnVsZS5qcyIsImVzNi9ncmFtbWFyL3Byb2R1Y3Rpb24vdW5pdFJ1bGVzLmpzIiwiZXM2L2dyYW1tYXIvcnVsZS9ub25Vbml0LmpzIiwiZXM2L2dyYW1tYXIvcnVsZS91bml0LmpzIiwiZXM2L3ByaW1pdGl2ZS9wYXJzZXIuanMiLCJlczYvdXRpbC9hcnJheS5qcyIsImVzNi91dGlsL3BhcnNlci5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5LWxheW91dC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5LWxheW91dC9lczYvY3Vyc29yLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3ktbGF5b3V0L2VzNi9vcHRpb25zLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3ktbGF5b3V0L2VzNi9zaXplYWJsZUVsZW1lbnQuanMiLCJub2RlX21vZHVsZXMvZWFzeS1sYXlvdXQvZXM2L3NwbGl0dGVyLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3ktbGF5b3V0L2VzNi9zcGxpdHRlci9ob3Jpem9udGFsLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3ktbGF5b3V0L2VzNi9zcGxpdHRlci92ZXJ0aWNhbC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L2RvY3VtZW50LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L2VsZW1lbnQuanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvZWxlbWVudC9ib2R5LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L2VsZW1lbnQvYnV0dG9uLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L2VsZW1lbnQvY2hlY2tib3guanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvZWxlbWVudC9kaXYuanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvZWxlbWVudC9saW5rLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L2VsZW1lbnQvc2VsZWN0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L2VsZW1lbnQvc3Bhbi5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi9pbnB1dEVsZW1lbnQuanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvaW5wdXRFbGVtZW50L2lucHV0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L2lucHV0RWxlbWVudC90ZXh0YXJlYS5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi9taXNjL2JvdW5kcy5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi9taXNjL29mZnNldC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi9taXhpbi9jbGljay5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi9taXhpbi9ldmVudC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi9taXhpbi9qc3guanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvbWl4aW4va2V5LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L21peGluL21vdXNlLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L21peGluL3Jlc2l6ZS5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi9taXhpbi9zY3JvbGwuanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvcmVhY3QuanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvdGV4dEVsZW1lbnQuanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvd2luZG93LmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9vY2NhbS1sZXhlcnMvZXM2L2Jhc2ljL2xleGVyLmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvYmFzaWMvbGluZS5qcyIsIm5vZGVfbW9kdWxlcy9vY2NhbS1sZXhlcnMvZXM2L2Jhc2ljL3Rva2Vucy9jb21tZW50LmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvYmFzaWMvdG9rZW5zL3N0cmluZy5qcyIsIm5vZGVfbW9kdWxlcy9vY2NhbS1sZXhlcnMvZXM2L2JuZi9sZXhlci5qcyIsIm5vZGVfbW9kdWxlcy9vY2NhbS1sZXhlcnMvZXM2L2JuZi9saW5lLmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvYm5mL3Rva2Vucy9jb21tZW50LmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvY29tbW9uL2NvbnRleHQuanMiLCJub2RlX21vZHVsZXMvb2NjYW0tbGV4ZXJzL2VzNi9jb21tb24vbGV4ZXIuanMiLCJub2RlX21vZHVsZXMvb2NjYW0tbGV4ZXJzL2VzNi9jb21tb24vbGluZS5qcyIsIm5vZGVfbW9kdWxlcy9vY2NhbS1sZXhlcnMvZXM2L2NvbW1vbi9ydWxlLmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvY29tbW9uL3J1bGVzLmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50LmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQuanMiLCJub2RlX21vZHVsZXMvb2NjYW0tbGV4ZXJzL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9lbmRPZi5qcyIsIm5vZGVfbW9kdWxlcy9vY2NhbS1sZXhlcnMvZXM2L2NvbW1vbi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L21pZGRsZU9mLmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvc3RhcnRPZi5qcyIsIm5vZGVfbW9kdWxlcy9vY2NhbS1sZXhlcnMvZXM2L2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC5qcyIsIm5vZGVfbW9kdWxlcy9vY2NhbS1sZXhlcnMvZXM2L2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9lbmRPZkxpbmUuanMiLCJub2RlX21vZHVsZXMvb2NjYW0tbGV4ZXJzL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvc3RyaW5nLmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L3doaXRlc3BhY2UuanMiLCJub2RlX21vZHVsZXMvb2NjYW0tbGV4ZXJzL2VzNi9jb21tb24vdG9rZW5zLmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvY29tbW9uL3Rva2Vucy9jb21tZW50LmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvY29tbW9uL3Rva2Vucy9zaWduaWZpY2FudC5qcyIsIm5vZGVfbW9kdWxlcy9vY2NhbS1sZXhlcnMvZXM2L2NvbW1vbi90b2tlbnMvc3RyaW5nLmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvY29tbW9uL3Rva2Vucy93aGl0ZXNwYWNlLmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvZmxvcmVuY2UvbGV4ZXIuanMiLCJub2RlX21vZHVsZXMvb2NjYW0tbGV4ZXJzL2VzNi9mbG9yZW5jZS9saW5lLmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvcHJpbWl0aXZlL2xleGVyLmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvcHJpbWl0aXZlL2xpbmUuanMiLCJub2RlX21vZHVsZXMvb2NjYW0tbGV4ZXJzL2VzNi9wcmltaXRpdmUvc3ltYm9sU2VxdWVuY2UuanMiLCJub2RlX21vZHVsZXMvb2NjYW0tbGV4ZXJzL2VzNi9zcGVjaWFsU3ltYm9scy5qcyIsIm5vZGVfbW9kdWxlcy9vY2NhbS1sZXhlcnMvZXM2L3V0aWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUFFQSxJQUFNLHNGQUFOOztBQVVBLE9BQU8sT0FBUCxHQUFpQixPQUFqQjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7Ozs7Ozs7Ozs7QUFFQSxJQUFNLFNBQVMsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTSxVQUFVLFFBQVEsV0FBUixDQUFoQjtBQUFBLElBQ00sZUFBZSxRQUFRLGtCQUFSLENBRHJCO0FBQUEsSUFFTSxrQkFBa0IsUUFBUSxx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Y2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGdyYW1tYXIgPSBgXG5cbiAgUyA6Oj0gWCAnYicgfCBZIFxuICBcbiAgWSA6Oj0gWCB8ICdhJ1xuICBcbiAgWCA6Oj0gUyB8ICdjJ1xuXG5gO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdyYW1tYXI7XG5cbi8qXG5cblxuIEExIDo6PSBBMiAnYScgfCAnYidcblxuIEEyIDo6PSBBMSAnYycgfCAnZCdcblxuIGV4cHJlc3Npb24gICAgICAgICAgICAgICA6Oj0gIGV4cHJlc3Npb24gJysnIHRlcm0gfCB0ZXJtXG5cbiB0ZXJtICAgICAgICAgICAgICAgICAgICAgOjo9ICBuYXR1cmFsTnVtYmVyXG5cbiBuYXR1cmFsTnVtYmVyICAgICAgICAgICAgOjo9ICAvXFxcXGQrL1xuXG5cblxuXG5cblxuIGV4cHJlc3Npb24gICAgICAgICAgICAgICA6Oj0gIHRlcm0gb3BlcmF0b3JUaGVuVGVybSpcbiAgXG4gIG9wZXJhdG9yVGhlblRlcm0gICAgICAgICA6Oj0gIG9wZXJhdG9yIHRlcm1cbiAgXG4gIG9wZXJhdG9yICAgICAgICAgICAgICAgICA6Oj0gICcrJyB8ICctJyB8ICcqJyB8ICcvJ1xuICBcbiAgdGVybSAgICAgICAgICAgICAgICAgICAgIDo6PSAgbmF0dXJhbE51bWJlciB8IHBhcmVudGhlc2l6ZWRFeHByZXNzaW9uXG4gIFxuICBuYXR1cmFsTnVtYmVyICAgICAgICAgICAgOjo9ICAvXFxcXGQrL1xuICBcbiAgcGFyZW50aGVzaXplZEV4cHJlc3Npb24gIDo6PSAgJygnIGV4cHJlc3Npb24gJyknXG5cbiovXG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBncmFtbWFyID0gcmVxdWlyZSgnLi9ncmFtbWFyJyksXG4gICAgICBDb21tb25QYXJzZXIgPSByZXF1aXJlKCcuLi9jb21tb24vcGFyc2VyJyksXG4gICAgICBQcmltaXRpdmVQYXJzZXIgPSByZXF1aXJlKCcuLi9wcmltaXRpdmUvcGFyc2VyJyk7XG5cbmNvbnN0IHsgUHJpbWl0aXZlTGV4ZXIsIEJhc2ljTGV4ZXIgfSA9IGxleGVycztcblxuY2xhc3MgQmFzaWNQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgYmFzaWNQYXJzZXIgPSBCYXNpY1BhcnNlci5mcm9tR3JhbW1hcihncmFtbWFyKTtcbiAgICBcbiAgICByZXR1cm4gYmFzaWNQYXJzZXI7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tR3JhbW1hcihncmFtbWFyKSB7XG4gICAgY29uc3QgbGluZXMgPSBQcmltaXRpdmVMZXhlci5saW5lc0Zyb21HcmFtbWFyKGdyYW1tYXIpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlcyA9IEJhc2ljTGV4ZXIuc2lnbmlmaWNhbnRUb2tlblR5cGVzKCksXG4gICAgICAgICAgbWFwcGluZ3MgPSB7fSxcbiAgICAgICAgICBwcm9kdWN0aW9ucyA9IFByaW1pdGl2ZVBhcnNlci5wYXJzZShsaW5lcywgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBtYXBwaW5ncyksXG4gICAgICAgICAgYmFzaWNQYXJzZXIgPSBuZXcgQmFzaWNQYXJzZXIocHJvZHVjdGlvbnMpO1xuXG4gICAgcmV0dXJuIGJhc2ljUGFyc2VyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQmFzaWNQYXJzZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGdyYW1tYXIgPSBgXG5cbiAgcHJvZHVjdGlvbnMgICAgICAgICAgIDo6PSAgcHJvZHVjdGlvbitcbiAgXG4gIHByb2R1Y3Rpb24gICAgICAgICAgICA6Oj0gIHByb2R1Y3Rpb25OYW1lIFwiOjo9XCIgcnVsZXMgW2VuZE9mTGluZV1cbiAgXG4gIHJ1bGVzICAgICAgICAgICAgICAgICA6Oj0gIHJ1bGVcbiAgXG4gIHJ1bGUgICAgICAgICAgICAgICAgICA6Oj0gIHBhcnQrXG4gIFxuICBwYXJ0ICAgICAgICAgICAgICAgICAgOjo9ICBncm91cCAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHwgIG9wdGlvbmFsUGFydCAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHByb2R1Y3Rpb25OYW1lICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgcmVndWxhckV4cHJlc3Npb24gXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHNpZ25pZmljYW50VG9rZW5UeXBlIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHRlcm1pbmFsU3ltYm9sXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgbm9XaGl0ZXNwYWNlIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBlbmRPZkxpbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBncm91cCAgICAgICAgICAgICAgICAgOjo9ICBcIihcIiBydWxlcyBcIilcIlxuICBcbiAgb3B0aW9uYWxQYXJ0ICAgICAgICAgIDo6PSAgcGFydDxOT19XSElURVNQQUNFPlwiP1wiXG5cbiAgcHJvZHVjdGlvbk5hbWUgICAgICAgIDo6PSAgW25hbWVdXG5cbiAgcmVndWxhckV4cHJlc3Npb24gICAgIDo6PSAgW3JlZ3VsYXJFeHByZXNzaW9uXVxuICBcbiAgc2lnbmlmaWNhbnRUb2tlblR5cGUgIDo6PSAgW3R5cGVdXG5cbiAgdGVybWluYWxTeW1ib2wgICAgICAgIDo6PSAgW3N0cmluZ11cbiAgXG4gIG5vV2hpdGVzcGFjZSAgICAgICAgICA6Oj0gIFwiPE5PX1dISVRFU1BBQ0U+XCJcbiAgXG4gIGVuZE9mTGluZSAgICAgICAgICAgICA6Oj0gIFwiPEVORF9PRl9MSU5FPlwiXG5cbmA7XG5cbm1vZHVsZS5leHBvcnRzID0gZ3JhbW1hcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ29tbW9uUGFyc2VyID0gcmVxdWlyZSgnLi4vY29tbW9uL3BhcnNlcicpLFxuICAgICAgUGFydFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vcGFydCcpLFxuICAgICAgUnVsZVByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vcnVsZScpLFxuICAgICAgUnVsZXNQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3J1bGVzJyksXG4gICAgICBHcm91cFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vZ3JvdXAnKSxcbiAgICAgIEVuZE9mTGluZVByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vZW5kT2ZMaW5lJyksXG4gICAgICBQcm9kdWN0aW9uUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9wcm9kdWN0aW9uJyksXG4gICAgICBQcm9kdWN0aW9uc1Byb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vcHJvZHVjdGlvbnMnKSxcbiAgICAgIE9wdGlvbmFsUGFydFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vb3B0aW9uYWxQYXJ0JyksXG4gICAgICBOb1doaXRlc3BhY2VQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL25vV2hpdGVzcGFjZScpLFxuICAgICAgUHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3Byb2R1Y3Rpb25OYW1lJyksXG4gICAgICBUZXJtaW5hbFN5bWJvbFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vdGVybWluYWxTeW1ib2wnKSxcbiAgICAgIFJlZ3VsYXJFeHByZXNzaW9uUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9yZWd1bGFyRXhwcmVzc2lvbicpLFxuICAgICAgU2lnbmlmaWNhbnRUb2tlblR5cGVQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3NpZ25pZmljYW50VG9rZW5UeXBlJyk7XG5cbmNsYXNzIEJORlBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBwYXJ0UHJvZHVjdGlvbiA9IG5ldyBQYXJ0UHJvZHVjdGlvbigpLFxuICAgICAgICAgIHJ1bGVQcm9kdWN0aW9uID0gbmV3IFJ1bGVQcm9kdWN0aW9uKCksXG4gICAgICAgICAgcnVsZXNQcm9kdWN0aW9uID0gbmV3IFJ1bGVzUHJvZHVjdGlvbigpLFxuICAgICAgICAgIGdyb3VwUHJvZHVjdGlvbiA9IG5ldyBHcm91cFByb2R1Y3Rpb24oKSxcbiAgICAgICAgICBlbmRPZkxpbmVQcm9kdWN0aW9uID0gbmV3IEVuZE9mTGluZVByb2R1Y3Rpb24oKSxcbiAgICAgICAgICBwcm9kdWN0aW9uUHJvZHVjdGlvbiA9IG5ldyBQcm9kdWN0aW9uUHJvZHVjdGlvbigpLFxuICAgICAgICAgIHByb2R1Y3Rpb25zUHJvZHVjdGlvbiA9IG5ldyBQcm9kdWN0aW9uc1Byb2R1Y3Rpb24oKSxcbiAgICAgICAgICBvcHRpb25hbFBhcnRQcm9kdWN0aW9uID0gbmV3IE9wdGlvbmFsUGFydFByb2R1Y3Rpb24oKSxcbiAgICAgICAgICBub1doaXRlc3BhY2VQcm9kdWN0aW9uID0gbmV3IE5vV2hpdGVzcGFjZVByb2R1Y3Rpb24oKSxcbiAgICAgICAgICBwcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb24gPSBuZXcgUHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uKCksXG4gICAgICAgICAgdGVybWluYWxTeW1ib2xQcm9kdWN0aW9uID0gbmV3IFRlcm1pbmFsU3ltYm9sUHJvZHVjdGlvbigpLFxuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUHJvZHVjdGlvbiA9IG5ldyBSZWd1bGFyRXhwcmVzc2lvblByb2R1Y3Rpb24oKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZVByb2R1Y3Rpb24gPSBuZXcgU2lnbmlmaWNhbnRUb2tlblR5cGVQcm9kdWN0aW9uKCksXG4gICAgICAgICAgcHJvZHVjdGlvbnMgPSBbXG4gICAgICAgICAgICBwcm9kdWN0aW9uc1Byb2R1Y3Rpb24sXG4gICAgICAgICAgICBwcm9kdWN0aW9uUHJvZHVjdGlvbixcbiAgICAgICAgICAgIHJ1bGVzUHJvZHVjdGlvbixcbiAgICAgICAgICAgIHJ1bGVQcm9kdWN0aW9uLFxuICAgICAgICAgICAgcGFydFByb2R1Y3Rpb24sXG4gICAgICAgICAgICBncm91cFByb2R1Y3Rpb24sXG4gICAgICAgICAgICBvcHRpb25hbFBhcnRQcm9kdWN0aW9uLFxuICAgICAgICAgICAgcHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uLFxuICAgICAgICAgICAgcmVndWxhckV4cHJlc3Npb25Qcm9kdWN0aW9uLFxuICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVQcm9kdWN0aW9uLFxuICAgICAgICAgICAgdGVybWluYWxTeW1ib2xQcm9kdWN0aW9uLFxuICAgICAgICAgICAgbm9XaGl0ZXNwYWNlUHJvZHVjdGlvbixcbiAgICAgICAgICAgIGVuZE9mTGluZVByb2R1Y3Rpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIGJuZlBhcnNlciA9IG5ldyBCTkZQYXJzZXIocHJvZHVjdGlvbnMpO1xuICAgIFxuICAgIHJldHVybiBibmZQYXJzZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCTkZQYXJzZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFByb2R1Y3Rpb24ge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBydWxlcywgTm9kZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xuICAgIHRoaXMuTm9kZSA9IE5vZGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBwYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpIHtcbiAgICBsZXQgbm9kZU9yTm9kZXMgPSBudWxsO1xuXG4gICAgY29udGV4dC5pbmNyZWFzZURlcHRoKCk7XG5cbiAgICBjb25zdCB0b29EZWVwID0gY29udGV4dC5pc1Rvb0RlZXAoKTtcblxuICAgIGlmICh0b29EZWVwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBwYXJzZSB0cmVlIGlzIHRvbyBkZWVwIGF0IHByb2R1Y3Rpb24gJyR7dGhpcy5uYW1lfSdgKTtcbiAgICB9XG5cbiAgICBsZXQgcnVsZU5vZGVzID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBzb21lUnVsZVBhcnNlZCA9IHRoaXMucnVsZXMuc29tZShmdW5jdGlvbihydWxlKSB7XG4gICAgICAgICAgICBydWxlTm9kZXMgPSBydWxlLnBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSk7XG4gIFxuICAgICAgICAgICAgY29uc3QgcnVsZVBhcnNlZCA9IChydWxlTm9kZXMgIT09IG51bGwpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBydWxlUGFyc2VkO1xuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKHNvbWVSdWxlUGFyc2VkKSB7XG4gICAgICBjb25zdCBydWxlTm9kZXNMZW5ndGggPSBydWxlTm9kZXMubGVuZ3RoO1xuXG4gICAgICBpZiAocnVsZU5vZGVzTGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBub2RlcyA9IHJ1bGVOb2RlcywgIC8vL1xuICAgICAgICAgICAgICBwcm9kdWN0aW9uTmFtZSA9IHRoaXMubmFtZTsgLy8vXG5cbiAgICAgICAgbm9kZU9yTm9kZXMgPSB0aGlzLk5vZGUuZnJvbU5vZGVzQW5kUHJvZHVjdGlvbk5hbWUobm9kZXMsIHByb2R1Y3Rpb25OYW1lKTsgIC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnRleHQuZGVjcmVhc2VEZXB0aCgpO1xuXG4gICAgcmV0dXJuIG5vZGVPck5vZGVzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvZHVjdGlvbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uL3Byb2R1Y3Rpb24nKSxcbiAgICAgIEVuZE9mTGluZVJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlL2VuZE9mTGluZScpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3MgRW5kT2ZMaW5lUHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBlbmRPZkxpbmVSdWxlID0gbmV3IEVuZE9mTGluZVJ1bGUoKSxcbiAgICAgICAgICBuYW1lID0gJ2VuZE9mTGluZScsXG4gICAgICAgICAgcnVsZXMgPSBbXG4gICAgICAgICAgICBlbmRPZkxpbmVSdWxlXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIHJ1bGVzLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRW5kT2ZMaW5lUHJvZHVjdGlvbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uL3Byb2R1Y3Rpb24nKSxcbiAgICAgIEdyb3VwUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUvZ3JvdXAnKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIEdyb3VwUHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBwcm9kdWN0aW9uUnVsZSA9IG5ldyBHcm91cFJ1bGUoKSxcbiAgICAgICAgICBuYW1lID0gJ2dyb3VwJyxcbiAgICAgICAgICBydWxlcyA9IFtcbiAgICAgICAgICAgIHByb2R1Y3Rpb25SdWxlXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIHJ1bGVzLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR3JvdXBQcm9kdWN0aW9uO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vcHJvZHVjdGlvbicpLFxuICAgICAgTm9XaGl0ZXNwYWNlUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUvbm9XaGl0ZXNwYWNlJyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBOb1doaXRlc3BhY2VQcm9kdWN0aW9uIGV4dGVuZHMgUHJvZHVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5vV2hpdGVzcGFjZVJ1bGUgPSBuZXcgTm9XaGl0ZXNwYWNlUnVsZSgpLFxuICAgICAgICAgIG5hbWUgPSAnbm9XaGl0ZXNwYWNlJyxcbiAgICAgICAgICBydWxlcyA9IFtcbiAgICAgICAgICAgIG5vV2hpdGVzcGFjZVJ1bGVcbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBOb25UZXJtaW5hbE5vZGU7XG5cbiAgICBzdXBlcihuYW1lLCBydWxlcywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vV2hpdGVzcGFjZVByb2R1Y3Rpb247XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi9wcm9kdWN0aW9uJyksXG4gICAgICBPcHRpb25hbFBhcnRSdWxlID0gcmVxdWlyZSgnLi4vcnVsZS9vcHRpb25hbFBhcnQnKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIE9wdGlvbmFsUGFydFByb2R1Y3Rpb24gZXh0ZW5kcyBQcm9kdWN0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3Qgb3B0aW9uYWxQYXJ0UnVsZSA9IG5ldyBPcHRpb25hbFBhcnRSdWxlKCksXG4gICAgICAgICAgbmFtZSA9ICdvcHRpb25hbFBhcnQnLFxuICAgICAgICAgIHJ1bGVzID0gW1xuICAgICAgICAgICAgb3B0aW9uYWxQYXJ0UnVsZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IE5vblRlcm1pbmFsTm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBydWxlcywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9wdGlvbmFsUGFydFByb2R1Y3Rpb247XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi9wcm9kdWN0aW9uJyksXG4gICAgICBQcm9kdWN0aW9uTmFtZVJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlL3Byb2R1Y3Rpb25OYW1lJyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBQYXJ0UHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBncm91cFByb2R1Y3Rpb25OYW1lID0gJ2dyb3VwJyxcbiAgICAgICAgICBlbmRPZkxpbmVQcm9kdWN0aW9uTmFtZSA9ICdlbmRPZkxpbmUnLFxuICAgICAgICAgIG9wdGlvbmFsUGFydFByb2R1Y3Rpb25OYW1lID0gJ29wdGlvbmFsUGFydCcsXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlUHJvZHVjdGlvbk5hbWUgPSAnbm9XaGl0ZXNwYWNlJyxcbiAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFByb2R1Y3Rpb25OYW1lID0gJ3Rlcm1pbmFsU3ltYm9sJyxcbiAgICAgICAgICBwcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb25OYW1lID0gJ3Byb2R1Y3Rpb25OYW1lJyxcbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblByb2R1Y3Rpb25OYW1lID0gJ3JlZ3VsYXJFeHByZXNzaW9uJyxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZVByb2R1Y3Rpb25OYW1lID0gJ3NpZ25pZmljYW50VG9rZW5UeXBlJyxcbiAgICAgICAgICBncm91cFByb2R1Y3Rpb25OYW1lUnVsZSA9IG5ldyBQcm9kdWN0aW9uTmFtZVJ1bGUoZ3JvdXBQcm9kdWN0aW9uTmFtZSksXG4gICAgICAgICAgZW5kT2ZMaW5lUHJvZHVjdGlvbk5hbWVSdWxlID0gbmV3IFByb2R1Y3Rpb25OYW1lUnVsZShlbmRPZkxpbmVQcm9kdWN0aW9uTmFtZSksXG4gICAgICAgICAgb3B0aW9uYWxQYXJ0UHJvZHVjdGlvbk5hbWVSdWxlID0gbmV3IFByb2R1Y3Rpb25OYW1lUnVsZShvcHRpb25hbFBhcnRQcm9kdWN0aW9uTmFtZSksXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlUHJvZHVjdGlvbk5hbWVSdWxlID0gbmV3IFByb2R1Y3Rpb25OYW1lUnVsZShub1doaXRlc3BhY2VQcm9kdWN0aW9uTmFtZSksXG4gICAgICAgICAgdGVybWluYWxTeW1ib2xQcm9kdWN0aW9uTmFtZVJ1bGUgPSBuZXcgUHJvZHVjdGlvbk5hbWVSdWxlKHRlcm1pbmFsU3ltYm9sUHJvZHVjdGlvbk5hbWUpLFxuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbk5hbWVSdWxlID0gbmV3IFByb2R1Y3Rpb25OYW1lUnVsZShwcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb25OYW1lKSxcbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblByb2R1Y3Rpb25OYW1lUnVsZSA9IG5ldyBQcm9kdWN0aW9uTmFtZVJ1bGUocmVndWxhckV4cHJlc3Npb25Qcm9kdWN0aW9uTmFtZSksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVQcm9kdWN0aW9uTmFtZVJ1bGUgPSBuZXcgUHJvZHVjdGlvbk5hbWVSdWxlKHNpZ25pZmljYW50VG9rZW5UeXBlUHJvZHVjdGlvbk5hbWUpLFxuICAgICAgICAgIG5hbWUgPSAncGFydCcsXG4gICAgICAgICAgcnVsZXMgPSBbXG4gICAgICAgICAgICBncm91cFByb2R1Y3Rpb25OYW1lUnVsZSxcbiAgICAgICAgICAgIG9wdGlvbmFsUGFydFByb2R1Y3Rpb25OYW1lUnVsZSxcbiAgICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbk5hbWVSdWxlLFxuICAgICAgICAgICAgcmVndWxhckV4cHJlc3Npb25Qcm9kdWN0aW9uTmFtZVJ1bGUsXG4gICAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZVByb2R1Y3Rpb25OYW1lUnVsZSxcbiAgICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUHJvZHVjdGlvbk5hbWVSdWxlLFxuICAgICAgICAgICAgbm9XaGl0ZXNwYWNlUHJvZHVjdGlvbk5hbWVSdWxlLFxuICAgICAgICAgICAgZW5kT2ZMaW5lUHJvZHVjdGlvbk5hbWVSdWxlXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIHJ1bGVzLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGFydFByb2R1Y3Rpb247XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi9wcm9kdWN0aW9uJyksXG4gICAgICBQcm9kdWN0aW9uUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUvcHJvZHVjdGlvbicpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3MgUHJvZHVjdGlvblByb2R1Y3Rpb24gZXh0ZW5kcyBQcm9kdWN0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgcHJvZHVjdGlvblJ1bGUgPSBuZXcgUHJvZHVjdGlvblJ1bGUoKSxcbiAgICAgICAgICBuYW1lID0gJ3Byb2R1Y3Rpb24nLFxuICAgICAgICAgIHJ1bGVzID0gW1xuICAgICAgICAgICAgcHJvZHVjdGlvblJ1bGVcbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBOb25UZXJtaW5hbE5vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgcnVsZXMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9kdWN0aW9uUHJvZHVjdGlvbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uL3Byb2R1Y3Rpb24nKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyksXG4gICAgICBTaWduaWZpY2FudFRva2VuVHlwZVJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlL3NpZ25pZmljYW50VG9rZW5UeXBlJyk7XG5cbmNsYXNzIFByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBuYW1lU2lnbmlmaWNhbnRUb2tlblR5cGUgPSAnbmFtZScsXG4gICAgICAgICAgbmFtZVNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSA9IG5ldyBTaWduaWZpY2FudFRva2VuVHlwZVJ1bGUobmFtZVNpZ25pZmljYW50VG9rZW5UeXBlKSxcbiAgICAgICAgICBuYW1lID0gJ3Byb2R1Y3Rpb25OYW1lJyxcbiAgICAgICAgICBydWxlcyA9IFtcbiAgICAgICAgICAgIG5hbWVTaWduaWZpY2FudFRva2VuVHlwZVJ1bGVcbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBOb25UZXJtaW5hbE5vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgcnVsZXMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb247XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi9wcm9kdWN0aW9uJyksXG4gICAgICBQcm9kdWN0aW9uc1J1bGUgPSByZXF1aXJlKCcuLi9ydWxlL3Byb2R1Y3Rpb25zJyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBQcm9kdWN0aW9uc1Byb2R1Y3Rpb24gZXh0ZW5kcyBQcm9kdWN0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgcHJvZHVjdGlvbnNSdWxlID0gbmV3IFByb2R1Y3Rpb25zUnVsZSgpLFxuICAgICAgICAgIG5hbWUgPSAncHJvZHVjdGlvbnMnLFxuICAgICAgICAgIHJ1bGVzID0gW1xuICAgICAgICAgICAgcHJvZHVjdGlvbnNSdWxlXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIHJ1bGVzLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvZHVjdGlvbnNQcm9kdWN0aW9uO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vcHJvZHVjdGlvbicpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKSxcbiAgICAgIFNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUvc2lnbmlmaWNhbnRUb2tlblR5cGUnKTtcblxuY2xhc3MgUmVndWxhckV4cHJlc3Npb25Qcm9kdWN0aW9uIGV4dGVuZHMgUHJvZHVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHJlZ3VsYXJFeHByZXNzaW9uU2lnbmlmaWNhbnRUb2tlblR5cGUgPSAncmVndWxhckV4cHJlc3Npb24nLFxuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlID0gbmV3IFNpZ25pZmljYW50VG9rZW5UeXBlUnVsZShyZWd1bGFyRXhwcmVzc2lvblNpZ25pZmljYW50VG9rZW5UeXBlKSxcbiAgICAgICAgICBuYW1lID0gJ3JlZ3VsYXJFeHByZXNzaW9uJyxcbiAgICAgICAgICBydWxlcyA9IFtcbiAgICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIHJ1bGVzLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVndWxhckV4cHJlc3Npb25Qcm9kdWN0aW9uO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vcHJvZHVjdGlvbicpLFxuICAgICAgUnVsZVJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlL3J1bGUnKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIFJ1bGVQcm9kdWN0aW9uIGV4dGVuZHMgUHJvZHVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5hbWUgPSAncnVsZScsXG4gICAgICAgICAgcnVsZVJ1bGUgPSBuZXcgUnVsZVJ1bGUoKSxcbiAgICAgICAgICBydWxlcyA9IFtcbiAgICAgICAgICAgIHJ1bGVSdWxlXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIHJ1bGVzLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZVByb2R1Y3Rpb247XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi9wcm9kdWN0aW9uJyksXG4gICAgICBSdWxlc1J1bGUgPSByZXF1aXJlKCcuLi9ydWxlL3J1bGVzJyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBSdWxlc1Byb2R1Y3Rpb24gZXh0ZW5kcyBQcm9kdWN0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgcnVsZXNSdWxlID0gbmV3IFJ1bGVzUnVsZSgpLFxuICAgICAgICAgIG5hbWUgPSAncnVsZXMnLFxuICAgICAgICAgIHJ1bGVzID0gW1xuICAgICAgICAgICAgcnVsZXNSdWxlXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIHJ1bGVzLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZXNQcm9kdWN0aW9uO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vcHJvZHVjdGlvbicpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKSxcbiAgICAgIFNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUvc2lnbmlmaWNhbnRUb2tlblR5cGUnKTtcblxuY2xhc3MgU2lnbmlmaWNhbnRUb2tlblR5cGVQcm9kdWN0aW9uIGV4dGVuZHMgUHJvZHVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHR5cGVTaWduaWZpY2FudFRva2VuVHlwZSA9ICd0eXBlJyxcbiAgICAgICAgICB0eXBlU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlID0gbmV3IFNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSh0eXBlU2lnbmlmaWNhbnRUb2tlblR5cGUpLFxuICAgICAgICAgIG5hbWUgPSAnc2lnbmlmaWNhbnRUb2tlblR5cGUnLFxuICAgICAgICAgIHJ1bGVzID0gW1xuICAgICAgICAgICAgdHlwZVNpZ25pZmljYW50VG9rZW5UeXBlUnVsZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IE5vblRlcm1pbmFsTm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBydWxlcywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNpZ25pZmljYW50VG9rZW5UeXBlUHJvZHVjdGlvbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uL3Byb2R1Y3Rpb24nKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyksXG4gICAgICBTaWduaWZpY2FudFRva2VuVHlwZVJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlL3NpZ25pZmljYW50VG9rZW5UeXBlJyk7XG5cbmNsYXNzIFRlcm1pbmFsU3ltYm9sUHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBzdHJpbmdTaWduaWZpY2FudFRva2VuVHlwZSA9ICdzdHJpbmcnLFxuICAgICAgICAgIHN0cmluZ1NpZ25pZmljYW50VG9rZW5UeXBlUnVsZSA9IG5ldyBTaWduaWZpY2FudFRva2VuVHlwZVJ1bGUoc3RyaW5nU2lnbmlmaWNhbnRUb2tlblR5cGUpLFxuICAgICAgICAgIG5hbWUgPSAndGVybWluYWxTeW1ib2wnLFxuICAgICAgICAgIHJ1bGVzID0gW1xuICAgICAgICAgICAgc3RyaW5nU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuXG4gICAgc3VwZXIobmFtZSwgcnVsZXMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXJtaW5hbFN5bWJvbFByb2R1Y3Rpb247XG4iLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcihwYXJ0cykge1xuICAgIHRoaXMucGFydHMgPSBwYXJ0cztcbiAgfVxuXG4gIGdldFBhcnRzKCkge1xuICAgIHJldHVybiB0aGlzLnBhcnRzO1xuICB9XG5cbiAgcGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbGV0IG5vZGVzID0gW107XG4gICAgXG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IGNvbnRleHQuc2F2ZWRJbmRleCgpLFxuICAgICAgICAgIGV2ZXJ5UGFydFBhcnNlZCA9IHRoaXMucGFydHMuZXZlcnkoZnVuY3Rpb24ocGFydCkge1xuICAgICAgICAgICAgY29uc3QgcGFydE5vZGVPck5vZGVzID0gcGFydC5wYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgICAgICAgICAgcGFydFBhcnNlZCA9IChwYXJ0Tm9kZU9yTm9kZXMgIT09IG51bGwpO1xuICBcbiAgICAgICAgICAgIGlmIChwYXJ0UGFyc2VkKSB7XG4gICAgICAgICAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KHBhcnROb2RlT3JOb2Rlcyk7XG4gIFxuICAgICAgICAgICAgICBub1doaXRlc3BhY2UgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICByZXR1cm4gcGFydFBhcnNlZDtcbiAgICAgICAgICB9KTtcblxuICAgIGlmICghZXZlcnlQYXJ0UGFyc2VkKSB7XG4gICAgICBjb250ZXh0LmJhY2t0cmFjayhzYXZlZEluZGV4KTtcblxuICAgICAgbm9kZXMgPSBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlJyksXG4gICAgICBUZXJtaW5hbFN5bWJvbFBhcnQgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vcGFydC90ZXJtaW5hbFN5bWJvbCcpO1xuXG5jbGFzcyBFbmRPZkxpbmVSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5vV2hpdGVzcGFjZSA9IGZhbHNlLFxuICAgICAgICAgIGVuZE9mTGluZVRlcm1pbmFsU3ltYm9sQ29udGVudCA9ICc8RU5EX09GX0xJTkU+JyxcbiAgICAgICAgICBlbmRPZkxpbmVUZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KGVuZE9mTGluZVRlcm1pbmFsU3ltYm9sQ29udGVudCwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIGVuZE9mTGluZVRlcm1pbmFsU3ltYm9sUGFydFxuICAgICAgICAgIF07XG5cbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVuZE9mTGluZVJ1bGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlJyksXG4gICAgICBUZXJtaW5hbFN5bWJvbFBhcnQgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vcGFydC90ZXJtaW5hbFN5bWJvbCcpLFxuICAgICAgUHJvZHVjdGlvbk5hbWVQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3BhcnQvcHJvZHVjdGlvbk5hbWUnKTtcblxuY2xhc3MgR3JvdXBSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5vV2hpdGVzcGFjZSA9IGZhbHNlLFxuICAgICAgICAgIG9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50ID0gJygnLFxuICAgICAgICAgIHJ1bGVzUHJvZHVjdGlvbk5hbWUgPSAncnVsZXMnLFxuICAgICAgICAgIGNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sQ29udGVudCA9ICcpJyxcbiAgICAgICAgICBvcGVuQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQob3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcnVsZXNQcm9kdWN0aW9uTmFtZVBhcnQgPSBuZXcgUHJvZHVjdGlvbk5hbWVQYXJ0KHJ1bGVzUHJvZHVjdGlvbk5hbWUsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydChjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBvcGVuQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydCxcbiAgICAgICAgICAgIHJ1bGVzUHJvZHVjdGlvbk5hbWVQYXJ0LFxuICAgICAgICAgICAgY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xQYXJ0XG4gICAgICAgICAgXTtcbiAgICBcbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdyb3VwUnVsZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUnKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUGFydCA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9wYXJ0L3Rlcm1pbmFsU3ltYm9sJyk7XG5cbmNsYXNzIE5vV2hpdGVzcGFjZVJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlID0gZmFsc2UsXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlVGVybWluYWxTeW1ib2xDb250ZW50ID0gJzxOT19XSElURVNQQUNFPicsXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlVGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydChub1doaXRlc3BhY2VUZXJtaW5hbFN5bWJvbENvbnRlbnQsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBub1doaXRlc3BhY2VUZXJtaW5hbFN5bWJvbFBhcnRcbiAgICAgICAgICBdO1xuXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb1doaXRlc3BhY2VSdWxlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vcnVsZScpLFxuICAgICAgVGVybWluYWxTeW1ib2xQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3BhcnQvdGVybWluYWxTeW1ib2wnKSxcbiAgICAgIFByb2R1Y3Rpb25OYW1lUGFydCA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9wYXJ0L3Byb2R1Y3Rpb25OYW1lJyk7XG5cbmNsYXNzIE9wdGlvbmFsUGFydFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlID0gdHJ1ZSxcbiAgICAgICAgICBwYXJ0UHJvZHVjdGlvbk5hbWUgPSAncGFydCcsXG4gICAgICAgICAgcXVlc3Rpb25NYXJrVGVybWluYWxTeW1ib2xDb250ZW50ID0gJz8nLFxuICAgICAgICAgIHBhcnRQcm9kdWN0aW9uTmFtZVBhcnQgPSBuZXcgUHJvZHVjdGlvbk5hbWVQYXJ0KHBhcnRQcm9kdWN0aW9uTmFtZSwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBxdWVzdGlvbk1hcmtUZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KHF1ZXN0aW9uTWFya1Rlcm1pbmFsU3ltYm9sQ29udGVudCwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIHBhcnRQcm9kdWN0aW9uTmFtZVBhcnQsXG4gICAgICAgICAgICBxdWVzdGlvbk1hcmtUZXJtaW5hbFN5bWJvbFBhcnRcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT3B0aW9uYWxQYXJ0UnVsZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUnKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUGFydCA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9wYXJ0L3Rlcm1pbmFsU3ltYm9sJyksXG4gICAgICBQcm9kdWN0aW9uTmFtZVBhcnQgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vcGFydC9wcm9kdWN0aW9uTmFtZScpLFxuICAgICAgU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3BhcnQvc2lnbmlmaWNhbnRUb2tlblR5cGUnKTtcblxuY2xhc3MgUHJvZHVjdGlvblJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlID0gZmFsc2UsXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uTmFtZSA9ICdwcm9kdWN0aW9uTmFtZScsXG4gICAgICAgICAgc2VwYXJhdG9yVGVybWluYWxTeW1ib2xDb250ZW50ID0gJzo6PScsXG4gICAgICAgICAgcnVsZXNQcm9kdWN0aW9uTmFtZSA9ICdydWxlcycsXG4gICAgICAgICAgZW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlblR5cGUgPSAnZW5kT2ZMaW5lJyxcbiAgICAgICAgICBwcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb25OYW1lUGFydCA9IG5ldyBQcm9kdWN0aW9uTmFtZVBhcnQocHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uTmFtZSwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBzZXBhcmF0b3JUZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KHNlcGFyYXRvclRlcm1pbmFsU3ltYm9sQ29udGVudCwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBydWxlc1Byb2R1Y3Rpb25OYW1lUGFydCA9IG5ldyBQcm9kdWN0aW9uTmFtZVBhcnQocnVsZXNQcm9kdWN0aW9uTmFtZSwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBlbmRPZkxpbmVTaWduaWZpY2FudFRva2VuVHlwZVBhcnQgPSBuZXcgU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0KGVuZE9mTGluZVNpZ25pZmljYW50VG9rZW5UeXBlLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgcHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uTmFtZVBhcnQsXG4gICAgICAgICAgICBzZXBhcmF0b3JUZXJtaW5hbFN5bWJvbFBhcnQsXG4gICAgICAgICAgICBydWxlc1Byb2R1Y3Rpb25OYW1lUGFydCxcbiAgICAgICAgICAgIGVuZE9mTGluZVNpZ25pZmljYW50VG9rZW5UeXBlUGFydFxuICAgICAgICAgIF07XG4gICAgXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9kdWN0aW9uUnVsZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUnKSxcbiAgICAgIFByb2R1Y3Rpb25OYW1lUGFydCA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9wYXJ0L3Byb2R1Y3Rpb25OYW1lJyk7XG5cbmNsYXNzIFByb2R1Y3Rpb25OYW1lUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3Rvcihwcm9kdWN0aW9uTmFtZSkge1xuICAgIGNvbnN0IG5vV2hpdGVzcGFjZSA9IGZhbHNlLFxuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUGFydCA9IG5ldyBQcm9kdWN0aW9uTmFtZVBhcnQocHJvZHVjdGlvbk5hbWUsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBwcm9kdWN0aW9uTmFtZVBhcnRcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvZHVjdGlvbk5hbWVSdWxlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vcnVsZScpLFxuICAgICAgT25lT3JNb3JlUGFydHNQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3BhcnQvb25lT3JNb3JlUGFydHMnKTtcblxuY2xhc3MgUHJvZHVjdGlvbnNSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHRlcm1pbmFsUGFydCA9IG51bGwsXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlID0gZmFsc2UsIFxuICAgICAgICAgIHByb2R1Y3Rpb25Qcm9kdWN0aW9uTmFtZSA9ICdwcm9kdWN0aW9uJyxcbiAgICAgICAgICBvbmVPck1vcmVQcm9kdWN0aW9uUHJvZHVjdGlvbk5hbWVQYXJ0c1BhcnQgPSBuZXcgT25lT3JNb3JlUGFydHNQYXJ0KHRlcm1pbmFsUGFydCwgcHJvZHVjdGlvblByb2R1Y3Rpb25OYW1lLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgb25lT3JNb3JlUHJvZHVjdGlvblByb2R1Y3Rpb25OYW1lUGFydHNQYXJ0XG4gICAgICAgICAgXTtcbiAgICBcbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2R1Y3Rpb25zUnVsZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUnKSxcbiAgICAgIE9uZU9yTW9yZVBhcnRzUGFydCA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9wYXJ0L29uZU9yTW9yZVBhcnRzJyk7XG5cbmNsYXNzIFJ1bGVSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHRlcm1pbmFsUGFydCA9IG51bGwsXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlID0gZmFsc2UsXG4gICAgICAgICAgcGFydFByb2R1Y3Rpb25OYW1lID0gJ3BhcnQnLFxuICAgICAgICAgIG9uZU9yTW9yZVBhcnRQcm9kdWN0aW9uTmFtZVBhcnRzUGFydCA9IG5ldyBPbmVPck1vcmVQYXJ0c1BhcnQodGVybWluYWxQYXJ0LCBwYXJ0UHJvZHVjdGlvbk5hbWUsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBvbmVPck1vcmVQYXJ0UHJvZHVjdGlvbk5hbWVQYXJ0c1BhcnRcbiAgICAgICAgICBdO1xuXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlUnVsZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUnKSxcbiAgICAgIFByb2R1Y3Rpb25OYW1lUGFydCA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9wYXJ0L3Byb2R1Y3Rpb25OYW1lJyk7XG5cbmNsYXNzIFJ1bGVzUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2UgPSBmYWxzZSxcbiAgICAgICAgICBydWxlUHJvZHVjdGlvbk5hbWUgPSAncnVsZScsXG4gICAgICAgICAgcnVsZVByb2R1Y3Rpb25OYW1lUGFydCA9IG5ldyBQcm9kdWN0aW9uTmFtZVBhcnQocnVsZVByb2R1Y3Rpb25OYW1lLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgcnVsZVByb2R1Y3Rpb25OYW1lUGFydFxuICAgICAgICAgIF07XG4gICAgXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlc1J1bGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlJyksXG4gICAgICBTaWduaWZpY2FudFRva2VuVHlwZVBhcnQgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vcGFydC9zaWduaWZpY2FudFRva2VuVHlwZScpO1xuXG5jbGFzcyBTaWduaWZpY2FudFRva2VuVHlwZVJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3Ioc2lnbmlmaWNhbnRUb2tlblR5cGUpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2UgPSBmYWxzZSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZVBhcnQgPSBuZXcgU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0KHNpZ25pZmljYW50VG9rZW5UeXBlLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0XG4gICAgICAgICAgXTtcbiAgICBcbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNpZ25pZmljYW50VG9rZW5UeXBlUnVsZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IHsgU2lnbmlmaWNhbnRUb2tlbiwgV2hpdGVzcGFjZVRva2VuIH0gPSBsZXhlcnM7XG5cbmNvbnN0IERFRkFVTFRfTUFYSU1VTV9ERVBUSCA9IDk5O1xuXG5jbGFzcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IodG9rZW5zLCBwcm9kdWN0aW9ucywgbWF4aW11bURlcHRoID0gREVGQVVMVF9NQVhJTVVNX0RFUFRIKSB7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG5cbiAgICB0aGlzLnByb2R1Y3Rpb25zID0gcHJvZHVjdGlvbnM7XG5cbiAgICB0aGlzLm1heGltdW1EZXB0aCA9IG1heGltdW1EZXB0aDtcblxuICAgIHRoaXMuZGVwdGggPSAwO1xuXG4gICAgdGhpcy5pbmRleCA9IDA7XG4gIH1cblxuICBnZXRQcm9kdWN0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9kdWN0aW9ucztcbiAgfVxuXG4gIGdldE1heGltdW1EZXB0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXhpbXVtRGVwdGg7XG4gIH1cblxuICBnZXREZXB0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5kZXB0aDtcbiAgfVxuXG4gIGdldEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLmluZGV4O1xuICB9XG5cbiAgaXNUb29EZWVwKCkge1xuICAgIGNvbnN0IHRvb0RlZXAgPSB0aGlzLmRlcHRoID4gdGhpcy5tYXhpbXVtRGVwdGg7XG4gICAgXG4gICAgcmV0dXJuIHRvb0RlZXA7XG4gIH1cblxuICBpbmNyZWFzZURlcHRoKCkge1xuICAgIHRoaXMuZGVwdGgrKztcbiAgfVxuXG4gIGRlY3JlYXNlRGVwdGgoKSB7XG4gICAgdGhpcy5kZXB0aC0tO1xuICB9XG5cbiAgc2V0SW5kZXgoaW5kZXgpIHtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gIH1cblxuICBnZXROZXh0U2lnbmlmaWNhbnRUb2tlbigpIHtcbiAgICBsZXQgbmV4dFNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gICAgZm9yICg7Oykge1xuICAgICAgY29uc3QgbmV4dFRva2VuID0gdGhpcy50b2tlbnNbdGhpcy5pbmRleCsrXTtcblxuICAgICAgaWYgKG5leHRUb2tlbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZiAobmV4dFRva2VuIGluc3RhbmNlb2YgU2lnbmlmaWNhbnRUb2tlbikge1xuICAgICAgICBuZXh0U2lnbmlmaWNhbnRUb2tlbiA9IG5leHRUb2tlbjtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dFNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBnZXROZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4obm9XaGl0ZXNwYWNlKSB7XG4gICAgbGV0IG5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbiA9IG51bGwsXG4gICAgICAgIG5leHRTaWduaWZpY2FudFRva2VuID0gdGhpcy5nZXROZXh0U2lnbmlmaWNhbnRUb2tlbigpO1xuXG4gICAgaWYgKG5leHRTaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XG4gICAgICBsZXQgbmV4dFNpZ25pZmljYW50VG9rZW5Jc1doaXRlc3BhY2VUb2tlbjtcblxuICAgICAgaWYgKG5vV2hpdGVzcGFjZSkge1xuICAgICAgICBuZXh0U2lnbmlmaWNhbnRUb2tlbklzV2hpdGVzcGFjZVRva2VuID0gc2lnbmlmaWNhbnRUb2tlbklzV2hpdGVzcGFjZVRva2VuKG5leHRTaWduaWZpY2FudFRva2VuKTtcblxuICAgICAgICBpZiAobmV4dFNpZ25pZmljYW50VG9rZW5Jc1doaXRlc3BhY2VUb2tlbikge1xuICAgICAgICAgIG5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbiA9IG51bGxcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4gPSBuZXh0U2lnbmlmaWNhbnRUb2tlbjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yICg7Oykge1xuICAgICAgICAgIG5leHRTaWduaWZpY2FudFRva2VuSXNXaGl0ZXNwYWNlVG9rZW4gPSBzaWduaWZpY2FudFRva2VuSXNXaGl0ZXNwYWNlVG9rZW4obmV4dFNpZ25pZmljYW50VG9rZW4pO1xuXG4gICAgICAgICAgaWYgKG5leHRTaWduaWZpY2FudFRva2VuSXNXaGl0ZXNwYWNlVG9rZW4pIHtcbiAgICAgICAgICAgIG5leHRTaWduaWZpY2FudFRva2VuID0gdGhpcy5nZXROZXh0U2lnbmlmaWNhbnRUb2tlbigpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4gPSBuZXh0U2lnbmlmaWNhbnRUb2tlbjtcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG5leHRTaWduaWZpY2FudFRva2VuID09PSBudWxsKSB7XG4gICAgICAgICAgICBuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgc2F2ZWRJbmRleCgpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0SW5kZXgoKSxcbiAgICAgICAgICBzYXZlZEluZGV4ID0gaW5kZXg7IC8vL1xuICAgIFxuICAgIHJldHVybiBzYXZlZEluZGV4O1xuICB9XG5cbiAgYmFja3RyYWNrKHNhdmVkSW5kZXgpIHtcbiAgICB0aGlzLmluZGV4ID0gc2F2ZWRJbmRleDsgIC8vL1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29udGV4dDtcblxuZnVuY3Rpb24gc2lnbmlmaWNhbnRUb2tlbklzV2hpdGVzcGFjZVRva2VuKHNpZ25pZmljYW50VG9rZW4pIHtcbiAgY29uc3QgdHlwZSA9IHNpZ25pZmljYW50VG9rZW4uZ2V0VHlwZSgpLFxuICAgICAgICB3aGl0ZXNwYWNlVG9rZW4gPSAodHlwZSA9PT0gV2hpdGVzcGFjZVRva2VuLnR5cGUpO1xuICBcbiAgcmV0dXJuIHdoaXRlc3BhY2VUb2tlbjtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlID0gcmVxdWlyZSgnLi4vcGFyc2VUcmVlL25vblRlcm1pbmFsTm9kZScpO1xuXG5jbGFzcyBOb25UZXJtaW5hbE5vZGUge1xuICBjb25zdHJ1Y3Rvcihwcm9kdWN0aW9uTmFtZSwgY2hpbGROb2RlcywgZmlyc3RMaW5lLCBsYXN0TGluZSwgZmlyc3RTaWduaWZpY2FudFRva2VuLCBsYXN0U2lnbmlmaWNhbnRUb2tlbikge1xuICAgIHRoaXMucHJvZHVjdGlvbk5hbWUgPSBwcm9kdWN0aW9uTmFtZTtcbiAgICB0aGlzLmNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzO1xuICAgIHRoaXMuZmlyc3RMaW5lID0gZmlyc3RMaW5lO1xuICAgIHRoaXMubGFzdExpbmUgPSBsYXN0TGluZTtcbiAgICB0aGlzLmZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IGZpcnN0U2lnbmlmaWNhbnRUb2tlbjtcbiAgICB0aGlzLmxhc3RTaWduaWZpY2FudFRva2VuID0gbGFzdFNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBnZXRQcm9kdWN0aW9uTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9kdWN0aW9uTmFtZTtcbiAgfVxuXG4gIGdldENoaWxkTm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2RlcztcbiAgfVxuICBcbiAgZ2V0Rmlyc3RMaW5lKCkge1xuICAgIHJldHVybiB0aGlzLmZpcnN0TGluZTtcbiAgfVxuXG4gIGdldExhc3RMaW5lKCkge1xuICAgIHJldHVybiB0aGlzLmxhc3RMaW5lO1xuICB9XG5cbiAgZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuKCkge1xuICAgIHJldHVybiB0aGlzLmZpcnN0U2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGdldExhc3RTaWduaWZpY2FudFRva2VuKCkge1xuICAgIHJldHVybiB0aGlzLmxhc3RTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgcGFyc2VUcmVlKGxpbmVzKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IE5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZS5mcm9tTm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgbGluZXMpLFxuICAgICAgICAgIHBhcnNlVHJlZSA9IG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZTsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIHNldENoaWxkTm9kZXMoY2hpbGROb2Rlcykge1xuICAgIHRoaXMuY2hpbGROb2RlcyA9IGNoaWxkTm9kZXM7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUsIENsYXNzID0gTm9uVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IG5vZGVzLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGUgPSBDbGFzcy5mcm9tUHJvZHVjdGlvbk5hbWVBbmRDaGlsZE5vZGVzKHByb2R1Y3Rpb25OYW1lLCBjaGlsZE5vZGVzLCBDbGFzcyk7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9kdWN0aW9uTmFtZUFuZENoaWxkTm9kZXMocHJvZHVjdGlvbk5hbWUsIGNoaWxkTm9kZXMsIENsYXNzID0gTm9uVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3QgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBsYXN0Q2hpbGROb2RlID0gbGFzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZUZpcnN0TGluZSA9IGZpcnN0Q2hpbGROb2RlLmdldEZpcnN0TGluZSgpLFxuICAgICAgICAgIGxhc3RDaGlsZE5vZGVGaXJzdExpbmUgPSBsYXN0Q2hpbGROb2RlLmdldExhc3RMaW5lKCksXG4gICAgICAgICAgZmlyc3RDaGlsZE5vZGVGaXJzdFNpZ25pZmljYW50VG9rZW4gPSBmaXJzdENoaWxkTm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgICBsYXN0Q2hpbGROb2RlTGFzdFNpZ25pZmljYW50VG9rZW4gPSBsYXN0Q2hpbGROb2RlLmdldExhc3RTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgICAgZmlyc3RMaW5lID0gZmlyc3RDaGlsZE5vZGVGaXJzdExpbmUsICAvLy9cbiAgICAgICAgICBsYXN0TGluZSA9IGxhc3RDaGlsZE5vZGVGaXJzdExpbmUsICAvLy9cbiAgICAgICAgICBmaXJzdFNpZ25pZmljYW50VG9rZW4gPSBmaXJzdENoaWxkTm9kZUZpcnN0U2lnbmlmaWNhbnRUb2tlbiwgLy8vXG4gICAgICAgICAgbGFzdFNpZ25pZmljYW50VG9rZW4gPSBsYXN0Q2hpbGROb2RlTGFzdFNpZ25pZmljYW50VG9rZW4sIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IG5ldyBDbGFzcyhwcm9kdWN0aW9uTmFtZSwgY2hpbGROb2RlcywgZmlyc3RMaW5lLCBsYXN0TGluZSwgZmlyc3RTaWduaWZpY2FudFRva2VuLCBsYXN0U2lnbmlmaWNhbnRUb2tlbik7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9uVGVybWluYWxOb2RlO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbmZ1bmN0aW9uIGxhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdOyB9XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWwvYXJyYXknKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIERpc2NhcmRTZWNvbmRDaGlsZE5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBzdGF0aWMgZnJvbU5vZGVzQW5kUHJvZHVjdGlvbk5hbWUobm9kZXMsIHByb2R1Y3Rpb25OYW1lKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IGFycmF5VXRpbC5kaXNjYXJkU2Vjb25kKG5vZGVzKSxcbiAgICAgICAgICBkaXNjYXJkU2Vjb25kQ2hpbGROb2RlID0gTm9uVGVybWluYWxOb2RlLmZyb21Qcm9kdWN0aW9uTmFtZUFuZENoaWxkTm9kZXMocHJvZHVjdGlvbk5hbWUsIGNoaWxkTm9kZXMsIERpc2NhcmRTZWNvbmRDaGlsZE5vZGUpO1xuXG4gICAgcmV0dXJuIGRpc2NhcmRTZWNvbmRDaGlsZE5vZGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEaXNjYXJkU2Vjb25kQ2hpbGROb2RlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBUZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi90ZXJtaW5hbCcpO1xuXG5jbGFzcyBFcnJvck5vZGUgZXh0ZW5kcyBUZXJtaW5hbE5vZGUge1xuICBzdGF0aWMgZnJvbU5vZGVzQW5kUHJvZHVjdGlvbk5hbWUobm9kZXMsIHByb2R1Y3Rpb25OYW1lKSB7XG4gICAgY29uc3QgZmlyc3ROb2RlID0gZmlyc3Qobm9kZXMpLFxuICAgICAgICAgIHRlcm1pbmFsTm9kZSA9IGZpcnN0Tm9kZSwgIC8vL1xuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSB0ZXJtaW5hbE5vZGUuZ2V0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICAgIGVycm9yTm9kZSA9IFRlcm1pbmFsTm9kZS5mcm9tU2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuLCBFcnJvck5vZGUpLFxuICAgICAgICAgIGVycm9yID0gdHJ1ZTtcblxuICAgIHNpZ25pZmljYW50VG9rZW4uc2V0RXJyb3IoZXJyb3IpO1xuXG4gICAgcmV0dXJuIGVycm9yTm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVycm9yTm9kZTtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFRyYW5zcGFyZW50Tm9kZSB7XG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUpIHtcbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUcmFuc3BhcmVudE5vZGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWwvYXJyYXknKTtcblxuY2xhc3MgVHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZE5vZGUge1xuICBzdGF0aWMgZnJvbU5vZGVzQW5kUHJvZHVjdGlvbk5hbWUobm9kZXMsIHByb2R1Y3Rpb25OYW1lKSB7XG4gICAgbm9kZXMgPSBhcnJheVV0aWwua2VlcFNlY29uZChub2Rlcyk7XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUcmFuc3BhcmVudFRoZW5LZWVwU2Vjb25kTm9kZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVGVybWluYWxOb2RlUGFyc2VUcmVlID0gcmVxdWlyZSgnLi4vcGFyc2VUcmVlL3Rlcm1pbmFsTm9kZScpO1xuXG5jbGFzcyBUZXJtaW5hbE5vZGUge1xuICBjb25zdHJ1Y3RvcihzaWduaWZpY2FudFRva2VuLCBsaW5lKSB7XG4gICAgdGhpcy5zaWduaWZpY2FudFRva2VuID0gc2lnbmlmaWNhbnRUb2tlbjtcbiAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICB9XG5cbiAgZ2V0U2lnbmlmaWNhbnRUb2tlbigpIHtcbiAgICByZXR1cm4gdGhpcy5zaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0TGluZSgpIHtcbiAgICByZXR1cm4gdGhpcy5saW5lO1xuICB9XG5cbiAgZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuKCkge1xuICAgIGNvbnN0IGZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IHRoaXMuc2lnbmlmaWNhbnRUb2tlbjsgIC8vL1xuXG4gICAgcmV0dXJuIGZpcnN0U2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGdldExhc3RTaWduaWZpY2FudFRva2VuKCkge1xuICAgIGNvbnN0IGxhc3RTaWduaWZpY2FudFRva2VuID0gdGhpcy5zaWduaWZpY2FudFRva2VuOyAgLy8vXG5cbiAgICByZXR1cm4gbGFzdFNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBnZXRGaXJzdExpbmUoKSB7XG4gICAgY29uc3QgZmlyc3RMaW5lID0gdGhpcy5saW5lOyAvLy9cblxuICAgIHJldHVybiBmaXJzdExpbmU7XG4gIH1cblxuICBnZXRMYXN0TGluZSgpIHtcbiAgICBjb25zdCBsYXN0TGluZSA9IHRoaXMubGluZTsgIC8vL1xuXG4gICAgcmV0dXJuIGxhc3RMaW5lO1xuICB9XG4gIFxuICBwYXJzZVRyZWUobGluZXMpIHtcbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgdGVybWluYWxOb2RlUGFyc2VUcmVlID0gVGVybWluYWxOb2RlUGFyc2VUcmVlLmZyb21UZXJtaW5hbE5vZGUodGVybWluYWxOb2RlLCBsaW5lcyksXG4gICAgICAgICAgcGFyc2VUcmVlID0gdGVybWluYWxOb2RlUGFyc2VUcmVlOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TaWduaWZpY2FudFRva2VuKHNpZ25pZmljYW50VG9rZW4sIENsYXNzID0gVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3QgbGluZSA9IHNpZ25pZmljYW50VG9rZW4uZ2V0TGluZSgpLFxuICAgICAgICAgIHRlcm1pbmFsTm9kZSA9IG5ldyBDbGFzcyhzaWduaWZpY2FudFRva2VuLCBsaW5lKSxcbiAgICAgICAgICBlcnJvciA9IGZhbHNlO1xuICAgIFxuICAgIHNpZ25pZmljYW50VG9rZW4uc2V0RXJyb3IoZXJyb3IpO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRlcm1pbmFsTm9kZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vdGVybWluYWwnKSxcbiAgICAgIEVwc2lsb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSByZXF1aXJlKCcuLi8uLi9wYXJzZVRyZWUvdGVybWluYWxOb2RlL2Vwc2lsb24nKTtcblxuY2xhc3MgRXBzaWxvblRlcm1pbmFsTm9kZSBleHRlbmRzIFRlcm1pbmFsTm9kZSB7XG4gIGdldENvbnRlbnQoKSB7XG4gICAgY29uc3QgY29udGVudCA9ICfOtSc7XG4gICAgXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBwYXJzZVRyZWUobGluZXMpIHtcbiAgICBjb25zdCBlcHNpbG9uVGVybWluYWxOb2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGVwc2lsb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSBFcHNpbG9uVGVybWluYWxOb2RlUGFyc2VUcmVlLmZyb21FcHNpbG9uVGVybWluYWxOb2RlKGVwc2lsb25UZXJtaW5hbE5vZGUsIGxpbmVzKSxcbiAgICAgICAgICBwYXJzZVRyZWUgPSBlcHNpbG9uVGVybWluYWxOb2RlUGFyc2VUcmVlOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXBzaWxvblRlcm1pbmFsTm9kZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgUGFyc2VUcmVlIHtcbiAgY29uc3RydWN0b3IobGluZXMpIHtcbiAgICB0aGlzLmxpbmVzID0gbGluZXM7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBjb25zdCBsaW5lcyA9IHRoaXMubGluZXMuc2xpY2UoMCksICAvLy9cbiAgICAgICAgICBwYXJzZVRyZWUgPSBuZXcgUGFyc2VUcmVlKGxpbmVzKTtcblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBnZXRXaWR0aCgpIHtcbiAgICBsZXQgbGluZXNMZW5ndGggPSB0aGlzLmxpbmVzLmxlbmd0aCxcbiAgICAgICAgICB3aWR0aCA9IHVuZGVmaW5lZDtcblxuICAgIGlmIChsaW5lc0xlbmd0aCA9PT0gMCkge1xuICAgICAgd2lkdGggPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsYXN0TGluZSA9IGxhc3QodGhpcy5saW5lcyksXG4gICAgICAgICAgICBsYXN0TGluZUxlbmd0aCA9IGxhc3RMaW5lLmxlbmd0aDtcblxuICAgICAgd2lkdGggPSBsYXN0TGluZUxlbmd0aDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgZ2V0RGVwdGgoKSB7XG4gICAgY29uc3QgbGluZXNMZW5ndGggPSB0aGlzLmxpbmVzLmxlbmd0aCxcbiAgICAgICAgICBkZXB0aCA9IGxpbmVzTGVuZ3RoOyAgLy8vXG5cbiAgICByZXR1cm4gZGVwdGg7XG4gIH1cblxuICBmb3JFYWNoTGluZShjYWxsYmFjaykge1xuICAgIHRoaXMubGluZXMuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBhcHBlbmRUb1RvcChwYXJzZVRyZWUpIHtcbiAgICBwYXJzZVRyZWUuZm9yRWFjaExpbmUoZnVuY3Rpb24obGluZSkge1xuICAgICAgdGhpcy5saW5lcy51bnNoaWZ0KGxpbmUpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICBhcHBlbmRUb0xlZnQocGFyc2VUcmVlKSB7XG4gICAgcGFyc2VUcmVlLmZvckVhY2hMaW5lKGZ1bmN0aW9uKGxpbmUsIGluZGV4KSB7XG4gICAgICB0aGlzLmxpbmVzW2luZGV4XSA9IGxpbmUgKyB0aGlzLmxpbmVzW2luZGV4XTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgYXBwZW5kVG9SaWdodChwYXJzZVRyZWUpIHtcbiAgICBwYXJzZVRyZWUuZm9yRWFjaExpbmUoZnVuY3Rpb24obGluZSwgaW5kZXgpIHtcbiAgICAgIHRoaXMubGluZXNbaW5kZXhdID0gdGhpcy5saW5lc1tpbmRleF0gKyBsaW5lO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICBhcHBlbmRUb0JvdHRvbShwYXJzZVRyZWUpIHtcbiAgICBwYXJzZVRyZWUuZm9yRWFjaExpbmUoZnVuY3Rpb24obGluZSkge1xuICAgICAgdGhpcy5saW5lcy5wdXNoKGxpbmUpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICBhZGRUb3BNYXJnaW4odG9wTWFyZ2luRGVwdGgpIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICB0b3BNYXJnaW5XaWR0aCA9IHdpZHRoLCAgLy8vXG4gICAgICAgICAgdG9wTWFyZ2luU3RyaW5nID0gbWFyZ2luU3RyaW5nRnJvbU1hcmdpbldpZHRoKHRvcE1hcmdpbldpZHRoKTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0b3BNYXJnaW5EZXB0aDsgaW5kZXgrKykge1xuICAgICAgdGhpcy5saW5lcy51bnNoaWZ0KHRvcE1hcmdpblN0cmluZyk7XG4gICAgfVxuICB9XG5cbiAgYWRkTGVmdE1hcmdpbihsZWZ0TWFyZ2luV2lkdGgpIHtcbiAgICBjb25zdCBsZWZ0TWFyZ2luU3RyaW5nID0gbWFyZ2luU3RyaW5nRnJvbU1hcmdpbldpZHRoKGxlZnRNYXJnaW5XaWR0aCksXG4gICAgICAgICAgbGluZXNMZW5ndGggPSB0aGlzLmxpbmVzLmxlbmd0aDtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsaW5lc0xlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdGhpcy5saW5lc1tpbmRleF0gPSBsZWZ0TWFyZ2luU3RyaW5nICsgdGhpcy5saW5lc1tpbmRleF07XG4gICAgfVxuICB9XG5cbiAgYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCkge1xuICAgIGNvbnN0IHJpZ2h0TWFyZ2luU3RyaW5nID0gbWFyZ2luU3RyaW5nRnJvbU1hcmdpbldpZHRoKHJpZ2h0TWFyZ2luV2lkdGgpLFxuICAgICAgICAgIGxpbmVzTGVuZ3RoID0gdGhpcy5saW5lcy5sZW5ndGg7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGluZXNMZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHRoaXMubGluZXNbaW5kZXhdID0gdGhpcy5saW5lc1tpbmRleF0gKyByaWdodE1hcmdpblN0cmluZztcbiAgICB9XG4gIH1cblxuICBhZGRCb3R0b21NYXJnaW4oYm90dG9tTWFyZ2luRGVwdGgpIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBib3R0b21NYXJnaW5XaWR0aCA9IHdpZHRoLCAgLy8vXG4gICAgICAgICAgYm90dG9tTWFyZ2luU3RyaW5nID0gbWFyZ2luU3RyaW5nRnJvbU1hcmdpbldpZHRoKGJvdHRvbU1hcmdpbldpZHRoKTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBib3R0b21NYXJnaW5EZXB0aDsgaW5kZXgrKykge1xuICAgICAgdGhpcy5saW5lcy5wdXNoKGJvdHRvbU1hcmdpblN0cmluZyk7XG4gICAgfVxuICB9XG4gIFxuICBwb3BMaW5lKCkgeyByZXR1cm4gdGhpcy5saW5lcy5wb3AoKTsgfVxuICBcbiAgc2hpZnRMaW5lKCkgeyByZXR1cm4gdGhpcy5saW5lcy5zaGlmdCgpOyB9XG4gIFxuICBwdXNoTGluZShsaW5lKSB7IHRoaXMubGluZXMucHVzaChsaW5lKTsgfVxuICBcbiAgdW5zaGlmdExpbmUobGluZSkgeyB0aGlzLmxpbmVzLnVuc2hpZnQobGluZSk7IH1cblxuICB0b1N0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmxpbmVzLnJlZHVjZShmdW5jdGlvbihzdHJpbmcsIGxpbmUpIHtcbiAgICAgIHN0cmluZyArPSBsaW5lICsgJ1xcbic7XG5cbiAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgfSwgJycpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcnNlVHJlZTtcblxuZnVuY3Rpb24gbGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07IH1cblxuZnVuY3Rpb24gbWFyZ2luU3RyaW5nRnJvbU1hcmdpbldpZHRoKG1hcmdpbldpZHRoLCBzcGFjZUNoYXJhY3Rlcikge1xuICBzcGFjZUNoYXJhY3RlciA9IHNwYWNlQ2hhcmFjdGVyIHx8ICcgJztcblxuICBsZXQgbWFyZ2luU3RyaW5nID0gJyc7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG1hcmdpbldpZHRoOyBpbmRleCsrKSB7XG4gICAgbWFyZ2luU3RyaW5nICs9IHNwYWNlQ2hhcmFjdGVyO1xuICB9XG5cbiAgcmV0dXJuIG1hcmdpblN0cmluZztcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRW1wdHlQYXJzZVRyZWUgPSByZXF1aXJlKCcuL2VtcHR5JyksXG4gICAgICBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IHJlcXVpcmUoJy4vdmVydGljYWxCcmFuY2gnKSxcbiAgICAgIEhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUgPSByZXF1aXJlKCcuL2hvcml6b250YWxCcmFuY2gnKTtcblxuY2xhc3MgQ2hpbGROb2Rlc1BhcnNlVHJlZSBleHRlbmRzIFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIHtcbiAgc3RhdGljIGZyb21DaGlsZE5vZGVzKGNoaWxkTm9kZXMsIGxpbmVzKSB7XG4gICAgY29uc3QgY2hpbGROb2RlUGFyc2VUcmVlcyA9IGNoaWxkTm9kZXMubWFwKGZ1bmN0aW9uKGNoaWxkTm9kZSkge1xuICAgICAgICAgICAgY29uc3QgY2hpbGROb2RlUGFyc2VUcmVlID0gY2hpbGROb2RlLnBhcnNlVHJlZShsaW5lcyk7XG4gIFxuICAgICAgICAgICAgcmV0dXJuIGNoaWxkTm9kZVBhcnNlVHJlZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzTGVuZ3RoID0gY2hpbGROb2RlUGFyc2VUcmVlcy5sZW5ndGg7XG4gICAgXG4gICAgbGV0IGZpcnN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IHVuZGVmaW5lZCxcbiAgICAgICAgbGFzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSAwLFxuICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzV2lkdGggPSAwLFxuICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzRGVwdGggPSAwO1xuXG4gICAgY2hpbGROb2RlUGFyc2VUcmVlcy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkTm9kZVBhcnNlVHJlZSwgaW5kZXgpIHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZVBhcnNlVHJlZVdpZHRoID0gY2hpbGROb2RlUGFyc2VUcmVlLmdldFdpZHRoKCksXG4gICAgICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVEZXB0aCA9IGNoaWxkTm9kZVBhcnNlVHJlZS5nZXREZXB0aCgpO1xuXG4gICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgY29uc3QgZmlyc3RDaGlsZE5vZGVQYXJzZVRyZWUgPSBjaGlsZE5vZGVQYXJzZVRyZWUsXG4gICAgICAgICAgICBmaXJzdENoaWxkTm9kZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSBmaXJzdENoaWxkTm9kZVBhcnNlVHJlZS5nZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCk7XG5cbiAgICAgICAgZmlyc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gZmlyc3RDaGlsZE5vZGVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uO1xuICAgICAgfVxuXG4gICAgICBpZiAoaW5kZXggPT09IGNoaWxkTm9kZVBhcnNlVHJlZXNMZW5ndGggLSAxKSB7XG4gICAgICAgIGNvbnN0IGxhc3RDaGlsZE5vZGVQYXJzZVRyZWUgPSBjaGlsZE5vZGVQYXJzZVRyZWUsXG4gICAgICAgICAgICBsYXN0Q2hpbGROb2RlUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IGxhc3RDaGlsZE5vZGVQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpO1xuXG4gICAgICAgIGxhc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uICs9IGxhc3RDaGlsZE5vZGVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uO1xuICAgICAgfVxuXG4gICAgICBpZiAoaW5kZXggPCBjaGlsZE5vZGVQYXJzZVRyZWVzTGVuZ3RoIC0gMSkge1xuICAgICAgICBsYXN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiArPSBjaGlsZE5vZGVQYXJzZVRyZWVXaWR0aDtcbiAgICAgICAgbGFzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24gKz0gMTtcblxuICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzV2lkdGggKz0gMTtcbiAgICAgIH1cblxuICAgICAgY2hpbGROb2RlUGFyc2VUcmVlc1dpZHRoICs9IGNoaWxkTm9kZVBhcnNlVHJlZVdpZHRoO1xuICAgICAgY2hpbGROb2RlUGFyc2VUcmVlc0RlcHRoID0gTWF0aC5tYXgoY2hpbGROb2RlUGFyc2VUcmVlc0RlcHRoLCBjaGlsZE5vZGVQYXJzZVRyZWVEZXB0aCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCB3aWR0aCA9IGxhc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIC0gZmlyc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uICsgMSxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21XaWR0aCh3aWR0aCksXG4gICAgICAgICAgaG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZSA9IEhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUuZnJvbVdpZHRoKHdpZHRoKSxcbiAgICAgICAgICBsZWZ0TWFyZ2luV2lkdGggPSBmaXJzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24sXG4gICAgICAgICAgcmlnaHRNYXJnaW5XaWR0aCA9IGNoaWxkTm9kZVBhcnNlVHJlZXNXaWR0aCAtIHdpZHRoIC0gbGVmdE1hcmdpbldpZHRoO1xuXG4gICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuYWRkTGVmdE1hcmdpbihsZWZ0TWFyZ2luV2lkdGgpO1xuICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmFkZFJpZ2h0TWFyZ2luKHJpZ2h0TWFyZ2luV2lkdGgpO1xuICAgIGhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUuYWRkTGVmdE1hcmdpbihsZWZ0TWFyZ2luV2lkdGgpO1xuICAgIGhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUuYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCk7XG4gICAgXG4gICAgY29uc3QgdmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKSxcbiAgICAgICAgICBjaGlsZE5vZGVzUGFyc2VUcmVlID0gRW1wdHlQYXJzZVRyZWUuZnJvbURlcHRoKGNoaWxkTm9kZVBhcnNlVHJlZXNEZXB0aCwgQ2hpbGROb2Rlc1BhcnNlVHJlZSwgdmVydGljYWxCcmFuY2hQb3NpdGlvbik7XG5cbiAgICBjaGlsZE5vZGVQYXJzZVRyZWVzLmZvckVhY2goZnVuY3Rpb24oY2hpbGROb2RlUGFyc2VUcmVlLCBpbmRleCkge1xuICAgICAgY29uc3QgY2hpbGROb2RlUGFyc2VUcmVlRGVwdGggPSBjaGlsZE5vZGVQYXJzZVRyZWUuZ2V0RGVwdGgoKSxcbiAgICAgICAgICAgIGNsb25lZENoaWxkTm9kZVBhcnNlVHJlZSA9IGNoaWxkTm9kZVBhcnNlVHJlZS5jbG9uZSgpO1xuXG4gICAgICBpZiAoaW5kZXggPCBjaGlsZE5vZGVQYXJzZVRyZWVzTGVuZ3RoIC0gMSkge1xuICAgICAgICBjb25zdCByaWdodE1hcmdpbldpZHRoID0gMTtcblxuICAgICAgICBjbG9uZWRDaGlsZE5vZGVQYXJzZVRyZWUuYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGlsZE5vZGVQYXJzZVRyZWVEZXB0aCA8IGNoaWxkTm9kZVBhcnNlVHJlZXNEZXB0aCkge1xuICAgICAgICBjb25zdCBib3R0b21NYXJnaW5EZXB0aCA9IGNoaWxkTm9kZVBhcnNlVHJlZXNEZXB0aCAtIGNoaWxkTm9kZVBhcnNlVHJlZURlcHRoO1xuXG4gICAgICAgIGNsb25lZENoaWxkTm9kZVBhcnNlVHJlZS5hZGRCb3R0b21NYXJnaW4oYm90dG9tTWFyZ2luRGVwdGgpO1xuICAgICAgfVxuXG4gICAgICBjaGlsZE5vZGVzUGFyc2VUcmVlLmFwcGVuZFRvUmlnaHQoY2xvbmVkQ2hpbGROb2RlUGFyc2VUcmVlKTtcbiAgICB9KTtcblxuICAgIGNoaWxkTm9kZXNQYXJzZVRyZWUuYXBwZW5kVG9Ub3AoaG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZSk7XG4gICAgY2hpbGROb2Rlc1BhcnNlVHJlZS5hcHBlbmRUb1RvcCh2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSk7XG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc1BhcnNlVHJlZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENoaWxkTm9kZXNQYXJzZVRyZWU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFBhcnNlVHJlZSA9IHJlcXVpcmUoJy4uL3BhcnNlVHJlZScpO1xuXG5jbGFzcyBFbXB0eVBhcnNlVHJlZSBleHRlbmRzIFBhcnNlVHJlZSB7XG4gIHN0YXRpYyBmcm9tRGVwdGgoZGVwdGgsIENsYXNzLCAuLi5hcmdzKSB7XG4gICAgQ2xhc3MgPSBDbGFzcyB8fCBFbXB0eVBhcnNlVHJlZTtcbiAgICBcbiAgICBjb25zdCBsaW5lcyA9IFtdO1xuICAgIFxuICAgIGxldCBpbmRleCA9IDA7XG5cbiAgICB3aGlsZSAoaW5kZXggPCBkZXB0aCkge1xuICAgICAgbGluZXNbaW5kZXgrK10gPSAnJztcbiAgICB9XG5cbiAgICBhcmdzLnVuc2hpZnQobGluZXMpO1xuICAgIGFyZ3MudW5zaGlmdChudWxsKTtcblxuICAgIGNvbnN0IGVtcHR5UGFyc2VUcmVlID0gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShDbGFzcywgYXJncykpOyAgLy8vXG5cbiAgICByZXR1cm4gZW1wdHlQYXJzZVRyZWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFbXB0eVBhcnNlVHJlZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUGFyc2VUcmVlID0gcmVxdWlyZSgnLi4vcGFyc2VUcmVlJyk7XG5cbmNsYXNzIEhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUgZXh0ZW5kcyBQYXJzZVRyZWUge1xuICBzdGF0aWMgZnJvbVdpZHRoKHdpZHRoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gc3RyaW5nRnJvbUNoYXJhY3RlcnNXaWR0aCh3aWR0aCwgJy0nKSxcbiAgICAgICAgICBsaW5lID0gc3RyaW5nLCAvLy9cbiAgICAgICAgICBsaW5lcyA9IFtsaW5lXSxcbiAgICAgICAgICBob3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlID0gbmV3IEhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUobGluZXMpO1xuXG4gICAgcmV0dXJuIGhvcml6b250YWxCcmFuY2hQYXJzZVRyZWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBIb3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlO1xuXG5mdW5jdGlvbiBzdHJpbmdGcm9tQ2hhcmFjdGVyc1dpZHRoKGNoYXJhY3RlcnNXaWR0aCwgY2hhcmFjdGVyKSB7XG4gIGxldCBzdHJpbmcgPSAnJztcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY2hhcmFjdGVyc1dpZHRoOyBpbmRleCsrKSB7XG4gICAgc3RyaW5nICs9IGNoYXJhY3RlcjtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVtcHR5UGFyc2VUcmVlID0gcmVxdWlyZSgnLi9lbXB0eScpLFxuICAgICAgQ2hpbGROb2Rlc1BhcnNlVHJlZSA9IHJlcXVpcmUoJy4vY2hpbGROb2RlcycpLFxuICAgICAgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSByZXF1aXJlKCcuL3ZlcnRpY2FsQnJhbmNoJyksXG4gICAgICBQcm9kdWN0aW9uTmFtZVBhcnNlVHJlZSA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbk5hbWUnKTtcblxuY2xhc3MgTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlIGV4dGVuZHMgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUge1xuICBzdGF0aWMgZnJvbU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIGxpbmVzKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBjaGlsZE5vZGUgPSBmaXJzdENoaWxkTm9kZSxcbiAgICAgICAgICBjaGlsZE5vZGVzTGVuZ3RoID0gY2hpbGROb2Rlcy5sZW5ndGgsXG4gICAgICAgICAgY2hpbGROb2RlT3JOb2Rlc1BhcnNlVHJlZSA9IChjaGlsZE5vZGVzTGVuZ3RoID09PSAxKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGROb2RlLnBhcnNlVHJlZShsaW5lcykgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hpbGROb2Rlc1BhcnNlVHJlZS5mcm9tQ2hpbGROb2RlcyhjaGlsZE5vZGVzLCBsaW5lcyksXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWVQYXJzZVRyZWUgPSBQcm9kdWN0aW9uTmFtZVBhcnNlVHJlZS5mcm9tTm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgbGluZXMpO1xuICAgIFxuICAgIGxldCBwcm9kdWN0aW9uTmFtZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSBwcm9kdWN0aW9uTmFtZVBhcnNlVHJlZS5nZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCk7XG4gICAgXG4gICAgY29uc3QgY2hpbGROb2RlT3JOb2Rlc1BhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSBjaGlsZE5vZGVPck5vZGVzUGFyc2VUcmVlLmdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKSxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uc0RpZmZlcmVuY2UgPSBwcm9kdWN0aW9uTmFtZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24gLSBjaGlsZE5vZGVPck5vZGVzUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbjtcbiAgICBcbiAgICBsZXQgbGVmdE1hcmdpbldpZHRoID0gdW5kZWZpbmVkO1xuXG4gICAgaWYgKGZhbHNlKSB7XG5cbiAgICB9IGVsc2UgaWYgKHZlcnRpY2FsQnJhbmNoUG9zaXRpb25zRGlmZmVyZW5jZSA8IDApIHtcbiAgICAgIGxlZnRNYXJnaW5XaWR0aCA9IC12ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uc0RpZmZlcmVuY2U7XG5cbiAgICAgIHByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlLmFkZExlZnRNYXJnaW4obGVmdE1hcmdpbldpZHRoKTtcbiAgICB9IGVsc2UgaWYgKHZlcnRpY2FsQnJhbmNoUG9zaXRpb25zRGlmZmVyZW5jZSA+IDApIHtcbiAgICAgIGxlZnRNYXJnaW5XaWR0aCA9ICt2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uc0RpZmZlcmVuY2U7XG5cbiAgICAgIGNoaWxkTm9kZU9yTm9kZXNQYXJzZVRyZWUuYWRkTGVmdE1hcmdpbihsZWZ0TWFyZ2luV2lkdGgpO1xuICAgIH1cblxuICAgIGNvbnN0IHByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlV2lkdGggPSBwcm9kdWN0aW9uTmFtZVBhcnNlVHJlZS5nZXRXaWR0aCgpLFxuICAgICAgICAgIGNoaWxkTm9kZU9yTm9kZXNQYXJzZVRyZWVXaWR0aCA9IGNoaWxkTm9kZU9yTm9kZXNQYXJzZVRyZWUuZ2V0V2lkdGgoKSxcbiAgICAgICAgICB3aWR0aHNEaWZmZXJlbmNlID0gcHJvZHVjdGlvbk5hbWVQYXJzZVRyZWVXaWR0aCAtIGNoaWxkTm9kZU9yTm9kZXNQYXJzZVRyZWVXaWR0aDtcbiAgICBcbiAgICBsZXQgcmlnaHRNYXJnaW5XaWR0aCA9IHVuZGVmaW5lZDtcblxuICAgIGlmIChmYWxzZSkge1xuXG4gICAgfSBlbHNlIGlmICh3aWR0aHNEaWZmZXJlbmNlIDwgMCkge1xuICAgICAgcmlnaHRNYXJnaW5XaWR0aCA9IC13aWR0aHNEaWZmZXJlbmNlO1xuICAgICAgXG4gICAgICBwcm9kdWN0aW9uTmFtZVBhcnNlVHJlZS5hZGRSaWdodE1hcmdpbihyaWdodE1hcmdpbldpZHRoKTtcbiAgICB9IGVsc2UgaWYgKHdpZHRoc0RpZmZlcmVuY2UgPiAwKSB7XG4gICAgICByaWdodE1hcmdpbldpZHRoID0gK3dpZHRoc0RpZmZlcmVuY2U7XG5cbiAgICAgIGNoaWxkTm9kZU9yTm9kZXNQYXJzZVRyZWUuYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCk7XG4gICAgfVxuXG4gICAgcHJvZHVjdGlvbk5hbWVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gcHJvZHVjdGlvbk5hbWVQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpO1xuXG4gICAgY29uc3QgcHJvZHVjdGlvbk5hbWVQYXJzZVRyZWVEZXB0aCA9IHByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlLmdldERlcHRoKCksXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlUGFyc2VUcmVlRGVwdGggPSBwcm9kdWN0aW9uTmFtZVBhcnNlVHJlZURlcHRoLCAvLy9cbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gcHJvZHVjdGlvbk5hbWVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSBFbXB0eVBhcnNlVHJlZS5mcm9tRGVwdGgobm9uVGVybWluYWxOb2RlUGFyc2VUcmVlRGVwdGgsIE5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSwgdmVydGljYWxCcmFuY2hQb3NpdGlvbik7XG5cbiAgICBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWUuYXBwZW5kVG9SaWdodChwcm9kdWN0aW9uTmFtZVBhcnNlVHJlZSk7XG4gICAgbm9uVGVybWluYWxOb2RlUGFyc2VUcmVlLmFwcGVuZFRvQm90dG9tKGNoaWxkTm9kZU9yTm9kZXNQYXJzZVRyZWUpO1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZTtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gcmVxdWlyZSgnLi92ZXJ0aWNhbEJyYW5jaCcpO1xuXG5jbGFzcyBQcm9kdWN0aW9uTmFtZVBhcnNlVHJlZSBleHRlbmRzIFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIHtcbiAgc3RhdGljIGZyb21Ob25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBsaW5lcykge1xuICAgIGNvbnN0IHByb2R1Y3Rpb25OYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFByb2R1Y3Rpb25OYW1lKCksXG4gICAgICAgICAgZmlyc3RMaW5lID0gbm9uVGVybWluYWxOb2RlLmdldEZpcnN0TGluZSgpLFxuICAgICAgICAgIGxhc3RMaW5lID0gbm9uVGVybWluYWxOb2RlLmdldExhc3RMaW5lKCksXG4gICAgICAgICAgZmlyc3RMaW5lSW5kZXggPSBsaW5lcy5pbmRleE9mKGZpcnN0TGluZSksXG4gICAgICAgICAgbGFzdExpbmVJbmRleCA9IGxpbmVzLmluZGV4T2YobGFzdExpbmUpLFxuICAgICAgICAgIGZpcnN0TGluZU51bWJlciA9IGZpcnN0TGluZUluZGV4ICsgMSxcbiAgICAgICAgICBsYXN0TGluZU51bWJlciA9IGxhc3RMaW5lSW5kZXggKyAxLFxuICAgICAgICAgIHN0cmluZyA9IGAke3Byb2R1Y3Rpb25OYW1lfSAoJHtmaXJzdExpbmVOdW1iZXJ9LSR7bGFzdExpbmVOdW1iZXJ9KWAsXG4gICAgICAgICAgc3RyaW5nTGVuZ3RoID0gc3RyaW5nLmxlbmd0aCxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoID0gc3RyaW5nTGVuZ3RoLCAvLy9cbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21XaWR0aCh2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoKSxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpLFxuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZnJvbVN0cmluZyhzdHJpbmcsIFByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKTtcblxuICAgIHByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlLmFwcGVuZFRvVG9wKHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlKTtcblxuICAgIHJldHVybiBwcm9kdWN0aW9uTmFtZVBhcnNlVHJlZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IHJlcXVpcmUoJy4vdmVydGljYWxCcmFuY2gnKTtcblxuY2xhc3MgVGVybWluYWxOb2RlUGFyc2VUcmVlIGV4dGVuZHMgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUge1xuICBzdGF0aWMgZnJvbVRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGUsIGxpbmVzKSB7XG4gICAgY29uc3QgbGluZSA9IHRlcm1pbmFsTm9kZS5nZXRMaW5lKCksXG4gICAgICAgICAgbGluZUluZGV4ID0gbGluZXMuaW5kZXhPZihsaW5lKSxcbiAgICAgICAgICBsaW5lTnVtYmVyID0gbGluZUluZGV4ICsgMSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuID0gdGVybWluYWxOb2RlLmdldFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZSA9IHNpZ25pZmljYW50VG9rZW4uZ2V0VHlwZSgpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5FcnJvciA9IHNpZ25pZmljYW50VG9rZW4uZ2V0RXJyb3IoKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuQ29udGVudCA9IHNpZ25pZmljYW50VG9rZW4uZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGNvbnRlbnQgPSBzaWduaWZpY2FudFRva2VuQ29udGVudCxcbiAgICAgICAgICBkZXNjcmlwdGlvbiA9IChzaWduaWZpY2FudFRva2VuRXJyb3IgPT09IHRydWUpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Vycm9yJyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGUsXG4gICAgICAgICAgc3RyaW5nID0gYCR7Y29udGVudH1bJHtkZXNjcmlwdGlvbn1dICgke2xpbmVOdW1iZXJ9KWAsXG4gICAgICAgICAgc3RyaW5nTGVuZ3RoID0gc3RyaW5nLmxlbmd0aCxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoID0gc3RyaW5nTGVuZ3RoLCAvLy9cbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21XaWR0aCh2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoKSxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpLCBcbiAgICAgICAgICB0ZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tU3RyaW5nKHN0cmluZywgVGVybWluYWxOb2RlUGFyc2VUcmVlLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKTtcbiAgICBcbiAgICB0ZXJtaW5hbE5vZGVQYXJzZVRyZWUuYXBwZW5kVG9Ub3AodmVydGljYWxCcmFuY2hQYXJzZVRyZWUpO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZVBhcnNlVHJlZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRlcm1pbmFsTm9kZVBhcnNlVHJlZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSByZXF1aXJlKCcuLi92ZXJ0aWNhbEJyYW5jaCcpO1xuXG5jbGFzcyBFcHNpbG9uVGVybWluYWxOb2RlUGFyc2VUcmVlIGV4dGVuZHMgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUge1xuICBzdGF0aWMgZnJvbUVwc2lsb25UZXJtaW5hbE5vZGUoZXBzaWxvblRlcm1pbmFsTm9kZSwgbGluZXMpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZXBzaWxvblRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgc3RyaW5nID0gYCR7Y29udGVudH1gLFxuICAgICAgICAgIHN0cmluZ0xlbmd0aCA9IHN0cmluZy5sZW5ndGgsXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWVXaWR0aCA9IHN0cmluZ0xlbmd0aCwgLy8vXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tV2lkdGgodmVydGljYWxCcmFuY2hQYXJzZVRyZWVXaWR0aCksXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKSwgXG4gICAgICAgICAgdGVybWluYWxOb2RlUGFyc2VUcmVlID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZnJvbVN0cmluZyhzdHJpbmcsIEVwc2lsb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pO1xuICAgIFxuICAgIHRlcm1pbmFsTm9kZVBhcnNlVHJlZS5hcHBlbmRUb1RvcCh2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSk7XG5cbiAgICByZXR1cm4gdGVybWluYWxOb2RlUGFyc2VUcmVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXBzaWxvblRlcm1pbmFsTm9kZVBhcnNlVHJlZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUGFyc2VUcmVlID0gcmVxdWlyZSgnLi4vcGFyc2VUcmVlJyk7XG5cbmNsYXNzIFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIGV4dGVuZHMgUGFyc2VUcmVlIHtcbiAgY29uc3RydWN0b3IobGluZXMsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pIHtcbiAgICBzdXBlcihsaW5lcyk7XG4gICAgXG4gICAgdGhpcy52ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gdmVydGljYWxCcmFuY2hQb3NpdGlvbjtcbiAgfVxuICBcbiAgZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uO1xuICB9XG5cbiAgYWRkTGVmdE1hcmdpbihsZWZ0TWFyZ2luV2lkdGgpIHtcbiAgICBzdXBlci5hZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCk7XG5cbiAgICB0aGlzLnZlcnRpY2FsQnJhbmNoUG9zaXRpb24gKz0gbGVmdE1hcmdpbldpZHRoOyAvLy9cbiAgfVxuXG4gIHN0YXRpYyBmcm9tV2lkdGgod2lkdGgpIHtcbiAgICBjb25zdCBzdHJpbmcgPSAnfCcsXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IDAsXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tU3RyaW5nKHN0cmluZywgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pLFxuICAgICAgICAgIGxlZnRNYXJnaW5XaWR0aCA9IE1hdGguZmxvb3Iod2lkdGgvMiksXG4gICAgICAgICAgcmlnaHRNYXJnaW5XaWR0aCA9IHdpZHRoIC0gbGVmdE1hcmdpbldpZHRoIC0gMTtcblxuICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmFkZExlZnRNYXJnaW4obGVmdE1hcmdpbldpZHRoKTtcbiAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5hZGRSaWdodE1hcmdpbihyaWdodE1hcmdpbldpZHRoKTtcblxuICAgIHJldHVybiB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21TdHJpbmcoc3RyaW5nLCBDbGFzcywgdmVydGljYWxCcmFuY2hQb3NpdGlvbikge1xuICAgIENsYXNzID0gQ2xhc3MgfHwgUGFyc2VUcmVlO1xuXG4gICAgY29uc3QgbGluZSA9IHN0cmluZywgLy8vXG4gICAgICAgICAgbGluZXMgPSBbbGluZV0sXG4gICAgICAgICAgYXJncyA9IFtudWxsLCBsaW5lcywgdmVydGljYWxCcmFuY2hQb3NpdGlvbl0sXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KENsYXNzLCBhcmdzKSk7ICAvLy9cblxuICAgIHJldHVybiB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDb250ZXh0ID0gcmVxdWlyZSgnLi9jb250ZXh0JyksXG4gICAgICBwYXJzZXJVdGlsID0gcmVxdWlyZSgnLi4vdXRpbC9wYXJzZXInKTtcblxuY2xhc3MgQ29tbW9uUGFyc2VyIHtcbiAgY29uc3RydWN0b3IocHJvZHVjdGlvbnMpIHtcbiAgICB0aGlzLnByb2R1Y3Rpb25zID0gcHJvZHVjdGlvbnM7XG4gIH1cblxuICBnZXRQcm9kdWN0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9kdWN0aW9ucztcbiAgfVxuICBcbiAgbm9kZUZyb21MaW5lcyhsaW5lcywgcHJvZHVjdGlvbiA9IG51bGwpIHtcbiAgICBjb25zdCB0b2tlbnMgPSBwYXJzZXJVdGlsLnRva2Vuc0Zyb21MaW5lcyhsaW5lcyksXG4gICAgICAgICAgbm9kZSA9IHRoaXMucGFyc2UodG9rZW5zLCBwcm9kdWN0aW9uKTtcbiAgICBcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHBhcnNlKHRva2VucywgcHJvZHVjdGlvbikge1xuICAgIGxldCBub2RlID0gbnVsbDtcblxuICAgIGlmIChwcm9kdWN0aW9uID09PSBudWxsKSB7XG4gICAgICBjb25zdCBwcm9kdWN0aW9uc0xlbmd0aCA9IHRoaXMucHJvZHVjdGlvbnMubGVuZ3RoO1xuXG4gICAgICBpZiAocHJvZHVjdGlvbnNMZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0UHJvZHVjdGlvbiA9IGZpcnN0KHRoaXMucHJvZHVjdGlvbnMpO1xuXG4gICAgICAgIHByb2R1Y3Rpb24gPSBmaXJzdFByb2R1Y3Rpb247IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9kdWN0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gbmV3IENvbnRleHQodG9rZW5zLCB0aGlzLnByb2R1Y3Rpb25zKSxcbiAgICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IGZhbHNlLFxuICAgICAgICAgICAgbm9kZU9yTm9kZXMgPSBwcm9kdWN0aW9uLnBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSk7XG5cbiAgICAgIGlmIChub2RlT3JOb2RlcyAhPT0gbnVsbCkge1xuICAgICAgICBub2RlID0gKG5vZGVPck5vZGVzIGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgICAgICAgZmlyc3Qobm9kZU9yTm9kZXMpIDpcbiAgICAgICAgICAgICAgICAgICBub2RlT3JOb2RlcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIGZpbmRQcm9kdWN0aW9uKHByb2R1Y3Rpb25OYW1lKSB7IHJldHVybiBwYXJzZXJVdGlsLmZpbmRQcm9kdWN0aW9uKHByb2R1Y3Rpb25OYW1lLCB0aGlzLnByb2R1Y3Rpb25zKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1vblBhcnNlcjtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCB7IHNwZWNpYWxTeW1ib2xzLCBFbmRPZkxpbmVUb2tlbiB9ID0gbGV4ZXJzO1xuXG5jb25zdCBUZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi9ub2RlL3Rlcm1pbmFsJyk7XG5cbmNsYXNzIEVuZE9mTGluZVBhcnQge1xuICBjb25zdHJ1Y3Rvcihub1doaXRlc3BhY2UpIHtcbiAgICB0aGlzLm5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZTtcbiAgfVxuICBcbiAgcGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlIHx8IHRoaXMubm9XaGl0ZXNwYWNlOyAvLy9cblxuICAgIGxldCB0ZXJtaW5hbE5vZGUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBjb250ZXh0LnNhdmVkSW5kZXgoKSxcbiAgICAgICAgICBuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4gPSBjb250ZXh0LmdldE5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbihub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW47IC8vL1xuXG4gICAgaWYgKHNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHR5cGUgPSBzaWduaWZpY2FudFRva2VuLmdldFR5cGUoKSxcbiAgICAgICAgICAgIGZvdW5kID0gKHR5cGUgPT09IEVuZE9mTGluZVRva2VuLnR5cGUpO1xuXG4gICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgdGVybWluYWxOb2RlID0gVGVybWluYWxOb2RlLmZyb21TaWduaWZpY2FudFRva2VuKHNpZ25pZmljYW50VG9rZW4pO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBpZiAodGVybWluYWxOb2RlID09PSBudWxsKSB7XG4gICAgICBjb250ZXh0LmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybWluYWxOb2RlO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gJzxFTkRfT0ZfTElORT4nO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ltYm9sKHN5bWJvbCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpIHtcbiAgICBsZXQgZW5kT2ZMaW5lUGFydCA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgZm91bmQgPSAoc3ltYm9sID09PSBzcGVjaWFsU3ltYm9scy5FTkRfT0ZfTElORSk7XG5cbiAgICBpZiAoZm91bmQpIHtcbiAgICAgIGVuZE9mTGluZVBhcnQgPSBuZXcgRW5kT2ZMaW5lUGFydChub1doaXRlc3BhY2UpO1xuICAgIH1cblxuICAgIHJldHVybiBlbmRPZkxpbmVQYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRW5kT2ZMaW5lUGFydDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRXBzaWxvblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvdGVybWluYWwvZXBzaWxvbicpO1xuXG5jbGFzcyBFcHNpbG9uUGFydCB7XG4gIHBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSkge1xuICAgIGNvbnN0IGVwc2lsb25UZXJtaW5hbE5vZGUgPSBuZXcgRXBzaWxvblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgcmV0dXJuIGVwc2lsb25UZXJtaW5hbE5vZGU7XG4gIH1cbiAgXG4gIHRvU3RyaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9ICfOtSc7XG4gICAgXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ltYm9sKHN5bWJvbCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpIHtcbiAgICBsZXQgIGVwc2lsb25QYXJ0ID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBmb3VuZCA9IChzeW1ib2wgPT09ICfOtScpO1xuICAgIFxuICAgIGlmIChmb3VuZCkge1xuICAgICAgZXBzaWxvblBhcnQgPSBuZXcgRXBzaWxvblBhcnQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXBzaWxvblBhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFcHNpbG9uUGFydDsiLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSByZXF1aXJlKCcuL3NlcXVlbmNlT2ZQYXJ0cycpLFxuICAgICAgWmVyb09yTW9yZVBhcnRzUGFydCA9IHJlcXVpcmUoJy4vemVyb09yTW9yZVBhcnRzJyk7XG5cbmNsYXNzIE9uZU9yTW9yZVBhcnRzUGFydCBleHRlbmRzIFNlcXVlbmNlT2ZQYXJ0c1BhcnQge1xuICBwYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpIHtcbiAgICBub1doaXRlc3BhY2UgPSB0aGlzLmdldE5vV2hpdGVzcGFjZSgpOyAgLy8vXG5cbiAgICBsZXQgbm9kZXMgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHByb2R1Y3Rpb25zID0gY29udGV4dC5nZXRQcm9kdWN0aW9ucygpLFxuICAgICAgICAgIHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbiA9IHRoaXMuZ2V0VGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uKHByb2R1Y3Rpb25zKTtcblxuICAgIGlmICh0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbk5vZGVPck5vZGVzID0gdGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uLnBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgICB0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb25QYXJzZWQgPSAodGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uTm9kZU9yTm9kZXMgIT09IG51bGwpO1xuXG4gICAgICBpZiAodGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uUGFyc2VkKSB7XG4gICAgICAgIG5vZGVzID0gKHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbk5vZGVPck5vZGVzIGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgICAgICAgIHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbk5vZGVPck5vZGVzIDpcbiAgICAgICAgICAgICAgICAgICAgW3Rlcm1pbmFsUGFydE9yUHJvZHVjdGlvbk5vZGVPck5vZGVzXTtcblxuICAgICAgICBjb25zdCB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gWmVyb09yTW9yZVBhcnRzUGFydC5mcm9tT25lT3JNb3JlUGFydHNQYXJ0KHRoaXMpLCAvLy9cbiAgICAgICAgICAgICAgemVyb09yTW9yZVBhcnRzUGFydE5vZGVPck5vZGVzID0gemVyb09yTW9yZVBhcnRzUGFydC5wYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpO1xuXG4gICAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KHplcm9Pck1vcmVQYXJ0c1BhcnROb2RlT3JOb2Rlcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgY29uc3Qgb3BlcmF0b3JTdHJpbmcgPSAnKycsXG4gICAgICAgICAgc3RyaW5nID0gc3VwZXIudG9TdHJpbmcob3BlcmF0b3JTdHJpbmcpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ltYm9sKHN5bWJvbCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpIHtcbiAgICBjb25zdCByZWdFeHAgPSAvKFteKl0rKVxcKyQvLFxuICAgICAgICAgIENsYXNzID0gT25lT3JNb3JlUGFydHNQYXJ0LFxuICAgICAgICAgIG9uZU9yTW9yZVBhcnRzUGFydCA9IHN1cGVyLmZyb21TeW1ib2woc3ltYm9sLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSwgcmVnRXhwLCBDbGFzcyk7XG5cbiAgICByZXR1cm4gb25lT3JNb3JlUGFydHNQYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT25lT3JNb3JlUGFydHNQYXJ0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBTZXF1ZW5jZU9mUGFydHNQYXJ0ID0gcmVxdWlyZSgnLi9zZXF1ZW5jZU9mUGFydHMnKTtcblxuY2xhc3MgT3B0aW9uYWxQYXJ0UGFydCBleHRlbmRzIFNlcXVlbmNlT2ZQYXJ0c1BhcnQge1xuICBwYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpIHtcbiAgICBub1doaXRlc3BhY2UgPSB0aGlzLmdldE5vV2hpdGVzcGFjZSgpOyAgLy8vXG5cbiAgICBsZXQgbm9kZXMgPSBbXTtcbiAgICBcbiAgICBjb25zdCBwcm9kdWN0aW9ucyA9IGNvbnRleHQuZ2V0UHJvZHVjdGlvbnMoKSxcbiAgICAgICAgICB0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24gPSB0aGlzLmdldFRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbihwcm9kdWN0aW9ucyk7XG4gICAgXG4gICAgaWYgKHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uTm9kZU9yTm9kZXMgPSB0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24ucGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICAgIHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvblBhcnNlZCA9ICh0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb25Ob2RlT3JOb2RlcyAhPT0gbnVsbCk7XG5cbiAgICAgIGlmICh0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb25QYXJzZWQpIHtcbiAgICAgICAgbm9kZXMgPSB0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb25Ob2RlT3JOb2RlcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICBjb25zdCBvcGVyYXRvclN0cmluZyA9ICc/JyxcbiAgICAgICAgICBzdHJpbmcgPSBzdXBlci50b1N0cmluZyhvcGVyYXRvclN0cmluZyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSkge1xuICAgIGNvbnN0IHJlZ0V4cCA9IC8oW14qXSspXFw/JC8sXG4gICAgICAgICAgQ2xhc3MgPSBPcHRpb25hbFBhcnRQYXJ0LFxuICAgICAgICAgIG9wdGlvbmFsUGFydFBhcnQgPSBzdXBlci5mcm9tU3ltYm9sKHN5bWJvbCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UsIHJlZ0V4cCwgQ2xhc3MpO1xuXG4gICAgcmV0dXJuIG9wdGlvbmFsUGFydFBhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPcHRpb25hbFBhcnRQYXJ0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXJzZXJVdGlsID0gcmVxdWlyZSgnLi4vLi4vdXRpbC9wYXJzZXInKTtcblxuY2xhc3MgUHJvZHVjdGlvbk5hbWVQYXJ0IHtcbiAgY29uc3RydWN0b3IocHJvZHVjdGlvbk5hbWUsIG5vV2hpdGVzcGFjZSkge1xuICAgIHRoaXMucHJvZHVjdGlvbk5hbWUgPSBwcm9kdWN0aW9uTmFtZTtcbiAgICB0aGlzLm5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZTtcbiAgfVxuICBcbiAgZ2V0UHJvZHVjdGlvbk5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvZHVjdGlvbk5hbWU7XG4gIH1cbiAgXG4gIGlzTGVmdFJlY3Vyc2l2ZShwcm9kdWN0aW9uTmFtZSkge1xuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmUgPSAodGhpcy5wcm9kdWN0aW9uTmFtZSA9PT0gcHJvZHVjdGlvbk5hbWUpO1xuICAgIFxuICAgIHJldHVybiBsZWZ0UmVjdXJzaXZlO1xuICB9XG4gIFxuICBwYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpIHtcbiAgICBub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2UgfHwgdGhpcy5ub1doaXRlc3BhY2U7IC8vL1xuXG4gICAgbGV0IG5vZGVPck5vZGVzID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBwcm9kdWN0aW9ucyA9IGNvbnRleHQuZ2V0UHJvZHVjdGlvbnMoKSxcbiAgICAgICAgICBwcm9kdWN0aW9uID0gcGFyc2VyVXRpbC5maW5kUHJvZHVjdGlvbih0aGlzLnByb2R1Y3Rpb25OYW1lLCBwcm9kdWN0aW9ucyk7XG5cbiAgICBpZiAocHJvZHVjdGlvbiAhPT0gbnVsbCkge1xuICAgICAgbm9kZU9yTm9kZXMgPSBwcm9kdWN0aW9uLnBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVPck5vZGVzO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5wcm9kdWN0aW9uTmFtZTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN5bWJvbChzeW1ib2wsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlKSB7XG4gICAgY29uc3QgcHJvZHVjdGlvbk5hbWUgPSBzeW1ib2wsICAvLy9cbiAgICAgICAgICBwcm9kdWN0aW9uTmFtZVBhcnQgPSBuZXcgUHJvZHVjdGlvbk5hbWVQYXJ0KHByb2R1Y3Rpb25OYW1lLCBub1doaXRlc3BhY2UpO1xuICBcbiAgICByZXR1cm4gcHJvZHVjdGlvbk5hbWVQYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvZHVjdGlvbk5hbWVQYXJ0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBUZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8vbm9kZS90ZXJtaW5hbCcpO1xuXG5jbGFzcyBSZWd1bGFyRXhwcmVzc2lvblBhcnQge1xuICBjb25zdHJ1Y3RvcihyZWdFeHAsIG5vV2hpdGVzcGFjZSkge1xuICAgIHRoaXMucmVnRXhwID0gcmVnRXhwO1xuICAgIHRoaXMubm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlO1xuICB9XG4gIFxuICBwYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpIHtcbiAgICBub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2UgfHwgdGhpcy5ub1doaXRlc3BhY2U7IC8vL1xuXG4gICAgbGV0IHRlcm1pbmFsTm9kZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IGNvbnRleHQuc2F2ZWRJbmRleCgpLFxuICAgICAgICAgIG5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbiA9IGNvbnRleHQuZ2V0TmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuKG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IG5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbjsgLy8vXG5cbiAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29udGVudCA9IHNpZ25pZmljYW50VG9rZW4uZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2godGhpcy5yZWdFeHApO1xuXG4gICAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyksXG4gICAgICAgICAgICAgIHBhcnNlZCA9IChmaXJzdE1hdGNoID09PSBjb250ZW50KTtcblxuICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgdGVybWluYWxOb2RlID0gVGVybWluYWxOb2RlLmZyb21TaWduaWZpY2FudFRva2VuKHNpZ25pZmljYW50VG9rZW4pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGlmICh0ZXJtaW5hbE5vZGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGU7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICBjb25zdCByZWdFeHBTdHJpbmcgPSB0aGlzLnJlZ0V4cC50b1N0cmluZygpLFxuICAgICAgICAgIHN0cmluZyA9IHJlZ0V4cFN0cmluZzsgIC8vXG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSkge1xuICAgIGxldCByZWd1bGFyRXhwcmVzc2lvblBhcnQgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHJlZ3VsYXJFeHByZXNzaW9uUGFydFJlZ0V4cCA9IC9eXFwvKFteL10rKVxcLyQvLFxuICAgICAgICAgIG1hdGNoZXMgPSBzeW1ib2wubWF0Y2gocmVndWxhckV4cHJlc3Npb25QYXJ0UmVnRXhwKTtcblxuICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICAgIHBhdHRlcm4gPSBzZWNvbmRNYXRjaCwgIC8vL1xuICAgICAgICAgICAgcmVnRXhwID0gbmV3IFJlZ0V4cChwYXR0ZXJuKTtcblxuICAgICAgcmVndWxhckV4cHJlc3Npb25QYXJ0ID0gbmV3IFJlZ3VsYXJFeHByZXNzaW9uUGFydChyZWdFeHAsIG5vV2hpdGVzcGFjZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZ3VsYXJFeHByZXNzaW9uUGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlZ3VsYXJFeHByZXNzaW9uUGFydDtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG5mdW5jdGlvbiBzZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzFdOyB9XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVuZE9mTGluZVBhcnQgPSByZXF1aXJlKCcuL2VuZE9mTGluZScpLFxuICAgICAgcGFyc2VyVXRpbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWwvcGFyc2VyJyksXG4gICAgICBUZXJtaW5hbFN5bWJvbFBhcnQgPSByZXF1aXJlKCcuL3Rlcm1pbmFsU3ltYm9sJyksXG4gICAgICBTaWduaWZpY2FudFRva2VuVHlwZVBhcnQgPSByZXF1aXJlKCcuL3NpZ25pZmljYW50VG9rZW5UeXBlJyk7XG5cbmNsYXNzIFNlcXVlbmNlT2ZQYXJ0c1BhcnQge1xuICBjb25zdHJ1Y3Rvcih0ZXJtaW5hbFBhcnQsIHByb2R1Y3Rpb25OYW1lLCBub1doaXRlc3BhY2UpIHtcbiAgICB0aGlzLnRlcm1pbmFsUGFydCA9IHRlcm1pbmFsUGFydDtcbiAgICB0aGlzLnByb2R1Y3Rpb25OYW1lID0gcHJvZHVjdGlvbk5hbWU7XG4gICAgdGhpcy5ub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2U7XG4gIH1cblxuICBnZXRUZXJtaW5hbFBhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybWluYWxQYXJ0O1xuICB9XG5cbiAgZ2V0UHJvZHVjdGlvbk5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvZHVjdGlvbk5hbWU7XG4gIH1cbiAgXG4gIGdldE5vV2hpdGVzcGFjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub1doaXRlc3BhY2U7XG4gIH1cblxuICBnZXRUZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24ocHJvZHVjdGlvbnMpIHtcbiAgICBjb25zdCBwcm9kdWN0aW9uID0gcGFyc2VyVXRpbC5maW5kUHJvZHVjdGlvbih0aGlzLnByb2R1Y3Rpb25OYW1lLCBwcm9kdWN0aW9ucyksXG4gICAgICAgICAgdGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uID0gKHRoaXMudGVybWluYWxQYXJ0ICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXJtaW5hbFBhcnQgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdGlvbjtcblxuICAgIHJldHVybiB0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb247XG4gIH1cblxuICB0b1N0cmluZyhvcGVyYXRvclN0cmluZykge1xuICAgIGxldCBzdHJpbmc7XG5cbiAgICBjb25zdCBwcm9kdWN0aW9uTmFtZSA9IHRoaXMuZ2V0UHJvZHVjdGlvbk5hbWUoKTtcblxuICAgIGlmIChwcm9kdWN0aW9uTmFtZSAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gYCR7cHJvZHVjdGlvbk5hbWV9JHtvcGVyYXRvclN0cmluZ31gO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0ZXJtaW5hbFBhcnQgPSB0aGlzLmdldFRlcm1pbmFsUGFydCgpLFxuICAgICAgICAgIHRlcm1pbmFsUGFydFN0cmluZyA9IHRlcm1pbmFsUGFydC50b1N0cmluZygpO1xuXG4gICAgICBzdHJpbmcgPSBgJHt0ZXJtaW5hbFBhcnRTdHJpbmd9JHtvcGVyYXRvclN0cmluZ31gO1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN5bWJvbChzeW1ib2wsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlLCByZWdFeHAsIENsYXNzKSB7XG4gICAgbGV0IHBhcnQgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IG1hdGNoZXMgPSBzeW1ib2wubWF0Y2gocmVnRXhwKTtcblxuICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgICAgc3ltYm9sID0gc2Vjb25kTWF0Y2g7IC8vL1xuXG4gICAgICBjb25zdCB0ZXJtaW5hbFBhcnQgPSBTaWduaWZpY2FudFRva2VuVHlwZVBhcnQuZnJvbVN5bWJvbChzeW1ib2wsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXJtaW5hbFN5bWJvbFBhcnQuZnJvbVN5bWJvbChzeW1ib2wsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVuZE9mTGluZVBhcnQuZnJvbVN5bWJvbChzeW1ib2wsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICAgIHByb2R1Y3Rpb25OYW1lID0gc3ltYm9sO1xuXG4gICAgICBwYXJ0ID0gbmV3IENsYXNzKHRlcm1pbmFsUGFydCwgcHJvZHVjdGlvbk5hbWUsIG5vV2hpdGVzcGFjZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTZXF1ZW5jZU9mUGFydHNQYXJ0O1xuXG5mdW5jdGlvbiBzZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzFdOyB9XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvdGVybWluYWwnKTtcblxuY2xhc3MgU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0IHtcbiAgY29uc3RydWN0b3Ioc2lnbmlmaWNhbnRUb2tlblR5cGUsIG5vV2hpdGVzcGFjZSkge1xuICAgIHRoaXMuc2lnbmlmaWNhbnRUb2tlblR5cGUgPSBzaWduaWZpY2FudFRva2VuVHlwZTtcbiAgICB0aGlzLm5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZTtcbiAgfVxuICBcbiAgcGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlIHx8IHRoaXMubm9XaGl0ZXNwYWNlOyAvLy9cbiAgICBcbiAgICBsZXQgdGVybWluYWxOb2RlID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBzYXZlZEluZGV4ID0gY29udGV4dC5zYXZlZEluZGV4KCksXG4gICAgICAgICAgbmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuID0gY29udGV4dC5nZXROZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4obm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuID0gbmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuOyAvLy9cblxuICAgIGlmIChzaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzaWduaWZpY2FudFRva2VuVHlwZSA9IHNpZ25pZmljYW50VG9rZW4uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgcGFyc2VkID0gKHNpZ25pZmljYW50VG9rZW5UeXBlID09PSB0aGlzLnNpZ25pZmljYW50VG9rZW5UeXBlKTsgIC8vL1xuXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIHRlcm1pbmFsTm9kZSA9IFRlcm1pbmFsTm9kZS5mcm9tU2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGVybWluYWxOb2RlID09PSBudWxsKSB7XG4gICAgICBjb250ZXh0LmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybWluYWxOb2RlO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gYFske3RoaXMuc2lnbmlmaWNhbnRUb2tlblR5cGV9XWA7XG4gICAgXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ltYm9sKHN5bWJvbCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpIHtcbiAgICBsZXQgc2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0ID0gbnVsbDtcblxuICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW5UeXBlUGFydFJlZ0V4cCA9IC9eXFxbKFteL10rKVxcXSQvLFxuICAgICAgICBtYXRjaGVzID0gc3ltYm9sLm1hdGNoKHNpZ25pZmljYW50VG9rZW5UeXBlUGFydFJlZ0V4cCk7XG5cbiAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgICAgICB0eXBlID0gc2Vjb25kTWF0Y2gsIC8vL1xuICAgICAgICAgICAgZm91bmRUeXBlID0gc2lnbmlmaWNhbnRUb2tlblR5cGVzLmZpbmQoZnVuY3Rpb24oc2lnbmlmaWNhbnRUb2tlblR5cGUpIHtcbiAgICAgICAgICAgICAgY29uc3QgZm91bmQgPSAodHlwZSA9PT0gc2lnbmlmaWNhbnRUb2tlblR5cGUpO1xuXG4gICAgICAgICAgICAgIHJldHVybiBmb3VuZDtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgZm91bmQgPSAoZm91bmRUeXBlICE9PSB1bmRlZmluZWQpO1xuXG4gICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0ID0gbmV3IFNpZ25pZmljYW50VG9rZW5UeXBlUGFydCh0eXBlLCBub1doaXRlc3BhY2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuVHlwZVBhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTaWduaWZpY2FudFRva2VuVHlwZVBhcnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvdGVybWluYWwnKTtcblxuY2xhc3MgVGVybWluYWxTeW1ib2xQYXJ0IHtcbiAgY29uc3RydWN0b3IoY29udGVudCwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICB0aGlzLm5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZTtcbiAgfVxuXG4gIHBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSkge1xuICAgIG5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZSB8fCB0aGlzLm5vV2hpdGVzcGFjZTsgLy8vXG5cbiAgICBsZXQgdGVybWluYWxOb2RlID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBzYXZlZEluZGV4ID0gY29udGV4dC5zYXZlZEluZGV4KCksXG4gICAgICAgIG5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbiA9IGNvbnRleHQuZ2V0TmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuKG5vV2hpdGVzcGFjZSksXG4gICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW47IC8vL1xuXG4gICAgaWYgKHNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBzaWduaWZpY2FudFRva2VuLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgIHBhcnNlZCA9IChjb250ZW50ID09PSB0aGlzLmNvbnRlbnQpO1xuXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIHRlcm1pbmFsTm9kZSA9IFRlcm1pbmFsTm9kZS5mcm9tU2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGVybWluYWxOb2RlID09PSBudWxsKSB7XG4gICAgICBjb250ZXh0LmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybWluYWxOb2RlO1xuICB9XG4gIFxuICB0b1N0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBgJyR7dGhpcy5jb250ZW50fSdgO1xuICAgIFxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN5bWJvbChzeW1ib2wsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbGV0IHRlcm1pbmFsU3ltYm9sUGFydCA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgdGVybWluYWxTeW1ib2xQYXJ0UmVnRXhwID0gL14nKFteJ10rKSckLyxcbiAgICAgICAgICBtYXRjaGVzID0gc3ltYm9sLm1hdGNoKHRlcm1pbmFsU3ltYm9sUGFydFJlZ0V4cCk7XG5cbiAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksICAgICAgXG4gICAgICAgICAgICBjb250ZW50ID0gc2Vjb25kTWF0Y2g7IC8vL1xuXG4gICAgICB0ZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KGNvbnRlbnQsIG5vV2hpdGVzcGFjZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1pbmFsU3ltYm9sUGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRlcm1pbmFsU3ltYm9sUGFydDtcblxuZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBUZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi9ub2RlL3Rlcm1pbmFsJyk7XG5cbmNsYXNzIFdpbGRjYXJkUGFydCB7XG4gIGNvbnN0cnVjdG9yKG5vV2hpdGVzcGFjZSkge1xuICAgIHRoaXMubm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlO1xuICB9XG5cbiAgcGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlIHx8IHRoaXMubm9XaGl0ZXNwYWNlOyAvLy9cblxuICAgIGxldCB0ZXJtaW5hbE5vZGUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBjb250ZXh0LnNhdmVkSW5kZXgoKSxcbiAgICAgICAgICBuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4gPSBjb250ZXh0LmdldE5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbihub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW47IC8vL1xuXG4gICAgaWYgKHNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICAgIHRlcm1pbmFsTm9kZSA9IFRlcm1pbmFsTm9kZS5mcm9tU2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKTtcbiAgICB9XG5cbiAgICBpZiAodGVybWluYWxOb2RlID09PSBudWxsKSB7XG4gICAgICBjb250ZXh0LmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybWluYWxOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSkge1xuICAgIGxldCB3aWxkY2FyZFBhcnQgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHdpbGRjYXJkUGFydFJlZ0V4cCA9IC9eXFwqJC8sXG4gICAgICAgICAgbWF0Y2hlcyA9IHN5bWJvbC5tYXRjaCh3aWxkY2FyZFBhcnRSZWdFeHApO1xuXG4gICAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICAgIHdpbGRjYXJkUGFydCA9IG5ldyBXaWxkY2FyZFBhcnQobm9XaGl0ZXNwYWNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd2lsZGNhcmRQYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gV2lsZGNhcmRQYXJ0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBTZXF1ZW5jZU9mUGFydHNQYXJ0ID0gcmVxdWlyZSgnLi9zZXF1ZW5jZU9mUGFydHMnKTtcblxuY2xhc3MgWmVyb09yTW9yZVBhcnRzUGFydCBleHRlbmRzIFNlcXVlbmNlT2ZQYXJ0c1BhcnQge1xuICB0b1N0cmluZygpIHtcbiAgICBjb25zdCBvcGVyYXRvclN0cmluZyA9ICcqJyxcbiAgICAgICAgICBzdHJpbmcgPSBzdXBlci50b1N0cmluZyhvcGVyYXRvclN0cmluZyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgcGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbm9XaGl0ZXNwYWNlID0gdGhpcy5nZXROb1doaXRlc3BhY2UoKTsgIC8vL1xuXG4gICAgbGV0IG5vZGVzID0gW107XG4gICAgXG4gICAgY29uc3QgcHJvZHVjdGlvbnMgPSBjb250ZXh0LmdldFByb2R1Y3Rpb25zKCksXG4gICAgICAgICAgdGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uID0gdGhpcy5nZXRUZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24ocHJvZHVjdGlvbnMpO1xuXG4gICAgaWYgKHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbiAhPT0gbnVsbCkge1xuICAgICAgZm9yKDs7KSB7XG4gICAgICAgIGNvbnN0IHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbk5vZGVPck5vZGVzID0gdGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uLnBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgICAgIHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvblBhcnNlZCA9ICh0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb25Ob2RlT3JOb2RlcyAhPT0gbnVsbCk7XG5cbiAgICAgICAgaWYgKHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvblBhcnNlZCkge1xuICAgICAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbk5vZGVPck5vZGVzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuICBcbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSkge1xuICAgIGNvbnN0IHJlZ0V4cCA9IC8oW14qXSspXFwqJC8sXG4gICAgICAgICAgQ2xhc3MgPSBaZXJvT3JNb3JlUGFydHNQYXJ0LFxuICAgICAgICAgIHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBzdXBlci5mcm9tU3ltYm9sKHN5bWJvbCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UsIHJlZ0V4cCwgQ2xhc3MpO1xuXG4gICAgcmV0dXJuIHplcm9Pck1vcmVQYXJ0c1BhcnQ7XG4gIH1cblxuXG4gIHN0YXRpYyBmcm9tT25lT3JNb3JlUGFydHNQYXJ0KG9uZU9yTW9yZVBhcnRzUGFydCkge1xuICAgIGNvbnN0IHRlcm1pbmFsUGFydCA9IG9uZU9yTW9yZVBhcnRzUGFydC5nZXRUZXJtaW5hbFBhcnQoKSxcbiAgICAgICAgICBwcm9kdWN0aW9uTmFtZSA9IG9uZU9yTW9yZVBhcnRzUGFydC5nZXRQcm9kdWN0aW9uTmFtZSgpLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IG9uZU9yTW9yZVBhcnRzUGFydC5nZXROb1doaXRlc3BhY2UoKSxcbiAgICAgICAgICB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gbmV3IFplcm9Pck1vcmVQYXJ0c1BhcnQodGVybWluYWxQYXJ0LCBwcm9kdWN0aW9uTmFtZSwgbm9XaGl0ZXNwYWNlKTtcblxuICAgIHJldHVybiB6ZXJvT3JNb3JlUGFydHNQYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gWmVyb09yTW9yZVBhcnRzUGFydDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRXBzaWxvblBhcnQgPSByZXF1aXJlKCcuL3BhcnQvZXBzaWxvbicpLFxuICAgICAgV2lsZGNhcmRQYXJ0ID0gcmVxdWlyZSgnLi9wYXJ0L3dpbGRjYXJkJyksXG4gICAgICBFbmRPZkxpbmVQYXJ0ID0gcmVxdWlyZSgnLi9wYXJ0L2VuZE9mTGluZScpLFxuICAgICAgT3B0aW9uYWxQYXJ0UGFydCA9IHJlcXVpcmUoJy4vcGFydC9vcHRpb25hbFBhcnQnKSxcbiAgICAgIFByb2R1Y3Rpb25OYW1lUGFydCA9IHJlcXVpcmUoJy4vcGFydC9wcm9kdWN0aW9uTmFtZScpLFxuICAgICAgVGVybWluYWxTeW1ib2xQYXJ0ID0gcmVxdWlyZSgnLi9wYXJ0L3Rlcm1pbmFsU3ltYm9sJyksXG4gICAgICBPbmVPck1vcmVQYXJ0c1BhcnQgPSByZXF1aXJlKCcuL3BhcnQvb25lT3JNb3JlUGFydHMnKSxcbiAgICAgIFplcm9Pck1vcmVQYXJ0c1BhcnQgPSByZXF1aXJlKCcuL3BhcnQvemVyb09yTW9yZVBhcnRzJyksXG4gICAgICBSZWd1bGFyRXhwcmVzc2lvblBhcnQgPSByZXF1aXJlKCcuL3BhcnQvcmVndWxhckV4cHJlc3Npb24nKSxcbiAgICAgIFNpZ25pZmljYW50VG9rZW5UeXBlUGFydCA9IHJlcXVpcmUoJy4vcGFydC9zaWduaWZpY2FudFRva2VuVHlwZScpO1xuXG5jb25zdCBQYXJ0cyA9IFtcbiAgRXBzaWxvblBhcnQsXG4gIFdpbGRjYXJkUGFydCxcbiAgRW5kT2ZMaW5lUGFydCxcbiAgUmVndWxhckV4cHJlc3Npb25QYXJ0LFxuICBTaWduaWZpY2FudFRva2VuVHlwZVBhcnQsXG4gIFRlcm1pbmFsU3ltYm9sUGFydCxcbiAgT3B0aW9uYWxQYXJ0UGFydCxcbiAgT25lT3JNb3JlUGFydHNQYXJ0LFxuICBaZXJvT3JNb3JlUGFydHNQYXJ0LFxuICBQcm9kdWN0aW9uTmFtZVBhcnRcbl07XG5cbm1vZHVsZS5leHBvcnRzID0gUGFydHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUnKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBQcm9kdWN0aW9uIHtcbiAgY29uc3RydWN0b3IobmFtZSwgcnVsZXMsIE5vZGUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgICB0aGlzLk5vZGUgPSBOb2RlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG4gIFxuICBnZXRSdWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlcztcbiAgfVxuICBcbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5Ob2RlO1xuICB9XG5cbiAgaXNGb3VuZEJ5UHJvZHVjdGlvbk5hbWUocHJvZHVjdGlvbk5hbWUpIHtcbiAgICBjb25zdCBmb3VuZCA9ICh0aGlzLm5hbWUgPT09IHByb2R1Y3Rpb25OYW1lKTtcbiAgICBcbiAgICByZXR1cm4gZm91bmQ7XG4gIH1cbiAgXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cbiAgXG4gIHNldFJ1bGVzKHJ1bGVzKSB7XG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xuICB9XG4gIFxuICBzZXROb2RlKG5vZGUpIHtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICB9XG4gIFxuICBpc0xlZnRSZWN1cnNpdmUoKSB7XG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVzID0gdGhpcy5nZXRMZWZ0UmVjdXJzaXZlUnVsZXMoKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZXNMZW5ndGggPSBsZWZ0UmVjdXJzaXZlUnVsZXMubGVuZ3RoLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmUgPSAobGVmdFJlY3Vyc2l2ZVJ1bGVzTGVuZ3RoID4gMCk7XG4gICAgXG4gICAgcmV0dXJuIGxlZnRSZWN1cnNpdmU7XG4gIH1cbiAgXG4gIGlzSW1wbGljaXRseUxlZnRSZWN1cnNpdmUocHJldmlvdXNQcm9kdWN0aW9ucykge1xuICAgIGNvbnN0IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlID0gdGhpcy5ydWxlcy5zb21lKGZ1bmN0aW9uKHJ1bGUpIHtcbiAgICAgIGNvbnN0IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlID0gcnVsZS5pc0ltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlKHByZXZpb3VzUHJvZHVjdGlvbnMpO1xuICAgICAgXG4gICAgICByZXR1cm4gaW1wbGljaXRseUxlZnRSZWN1cnNpdmU7XG4gICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlO1xuICB9XG4gIFxuICBnZXRMZWZ0UmVjdXJzaXZlUnVsZXMoKSB7XG4gICAgY29uc3QgcHJvZHVjdGlvbk5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlcyA9IHRoaXMucnVsZXMuZmlsdGVyKGZ1bmN0aW9uKHJ1bGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVMZWZ0UmVjdXJzaXZlID0gcnVsZS5pc0xlZnRSZWN1cnNpdmUocHJvZHVjdGlvbk5hbWUpO1xuICAgICAgXG4gICAgICAgICAgICByZXR1cm4gcnVsZUxlZnRSZWN1cnNpdmU7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gbGVmdFJlY3Vyc2l2ZVJ1bGVzO1xuICB9XG5cbiAgZ2V0Tm9uTGVmdFJlY3Vyc2l2ZVJ1bGVzKCkge1xuICAgIGNvbnN0IHByb2R1Y3Rpb25OYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICBsZWZ0Tm9uUmVjdXJzaXZlUnVsZXMgPSB0aGlzLnJ1bGVzLmZpbHRlcihmdW5jdGlvbihydWxlKSB7XG4gICAgICAgICAgICBjb25zdCBydWxlTGVmdFJlY3Vyc2l2ZSA9IHJ1bGUuaXNMZWZ0UmVjdXJzaXZlKHByb2R1Y3Rpb25OYW1lKSxcbiAgICAgICAgICAgICAgICAgIHJ1bGVOb25MZWZ0UmVjdXJzaXZlID0gIXJ1bGVMZWZ0UmVjdXJzaXZlO1xuICBcbiAgICAgICAgICAgIHJldHVybiBydWxlTm9uTGVmdFJlY3Vyc2l2ZTtcbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBsZWZ0Tm9uUmVjdXJzaXZlUnVsZXM7XG4gIH1cbiAgXG4gIGNvbmNhdFJ1bGVzKHJ1bGVzKSB7XG4gICAgdGhpcy5ydWxlcyA9IHRoaXMucnVsZXMuY29uY2F0KHJ1bGVzKTtcbiAgfVxuICBcbiAgdG9TdHJpbmcobWF4aW11bVByb2R1Y3Rpb25OYW1lTGVuZ3RoKSB7XG4gICAgY29uc3QgcnVsZXNTdHJpbmcgPSB0aGlzLnJ1bGVzLnJlZHVjZShmdW5jdGlvbihydWxlc1N0cmluZywgcnVsZSkge1xuICAgICAgICAgICAgY29uc3QgcnVsZVN0cmluZyA9IHJ1bGUudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHJ1bGVzU3RyaW5nID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIHJ1bGVzU3RyaW5nID0gcnVsZVN0cmluZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJ1bGVzU3RyaW5nID0gYCR7cnVsZXNTdHJpbmd9IHwgJHtydWxlU3RyaW5nfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBydWxlc1N0cmluZztcbiAgICAgICAgICB9LCBudWxsKSxcbiAgICAgICAgICBwcm9kdWN0aW9uTmFtZUxlbmd0aCA9IHRoaXMubmFtZS5sZW5ndGgsICAvLy9cbiAgICAgICAgICBwYWRkaW5nTGVuZ3RoID0gbWF4aW11bVByb2R1Y3Rpb25OYW1lTGVuZ3RoIC0gcHJvZHVjdGlvbk5hbWVMZW5ndGgsXG4gICAgICAgICAgcGFkZGluZyA9IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChwYWRkaW5nTGVuZ3RoKSxcbiAgICAgICAgICBzdHJpbmcgPSBgXFxuICAke3RoaXMubmFtZX0ke3BhZGRpbmd9IDo6PSAke3J1bGVzU3RyaW5nfVxcbmA7XG4gICAgXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuICBcbiAgcGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbGV0IG5vZGVPck5vZGVzID0gbnVsbDtcblxuICAgIGNvbnRleHQuaW5jcmVhc2VEZXB0aCgpO1xuXG4gICAgY29uc3QgdG9vRGVlcCA9IGNvbnRleHQuaXNUb29EZWVwKCk7XG5cbiAgICBpZiAodG9vRGVlcCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgcGFyc2UgdHJlZSBpcyB0b28gZGVlcCBhdCBwcm9kdWN0aW9uICcke3RoaXMubmFtZX0nYCk7XG4gICAgfVxuXG4gICAgbGV0IHJ1bGVOb2RlcyA9IG51bGw7XG4gICAgXG4gICAgY29uc3Qgc29tZVJ1bGVQYXJzZWQgPSB0aGlzLnJ1bGVzLnNvbWUoZnVuY3Rpb24ocnVsZSkge1xuICAgICAgICAgICAgcnVsZU5vZGVzID0gcnVsZS5wYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpO1xuICBcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVQYXJzZWQgPSAocnVsZU5vZGVzICE9PSBudWxsKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gcnVsZVBhcnNlZDtcbiAgICAgICAgICB9KTtcblxuICAgIGlmIChzb21lUnVsZVBhcnNlZCkge1xuICAgICAgY29uc3QgcnVsZU5vZGVzTGVuZ3RoID0gcnVsZU5vZGVzLmxlbmd0aDtcblxuICAgICAgaWYgKHJ1bGVOb2Rlc0xlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3Qgbm9kZXMgPSBydWxlTm9kZXMsICAvLy9cbiAgICAgICAgICAgICAgcHJvZHVjdGlvbk5hbWUgPSB0aGlzLm5hbWU7IC8vL1xuXG4gICAgICAgIG5vZGVPck5vZGVzID0gdGhpcy5Ob2RlLmZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSk7ICAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb250ZXh0LmRlY3JlYXNlRGVwdGgoKTtcblxuICAgIHJldHVybiBub2RlT3JOb2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGluZShsaW5lLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG1hcHBpbmdzKSB7XG4gICAgY29uc3QgbmFtZSA9IGxpbmUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHJ1bGVzID0gbGluZS5tYXBTeW1ib2xTZXF1ZW5jZXMoZnVuY3Rpb24oc3ltYm9sU2VxdWVuY2UpIHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGUgPSBSdWxlLmZyb21TeW1ib2xTZXF1ZW5jZShzeW1ib2xTZXF1ZW5jZSwgc2lnbmlmaWNhbnRUb2tlblR5cGVzKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gcnVsZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBOb2RlID0gbWFwcGluZ3MuaGFzT3duUHJvcGVydHkobmFtZSkgP1xuICAgICAgICAgICAgICAgICAgIG1hcHBpbmdzW25hbWVdIDpcbiAgICAgICAgICAgICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgcHJvZHVjdGlvbiA9IG5ldyBQcm9kdWN0aW9uKG5hbWUsIHJ1bGVzLCBOb2RlKTtcblxuICAgIHJldHVybiBwcm9kdWN0aW9uO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVByb2R1Y3Rpb24ocHJvZHVjdGlvbikge1xuICAgIGNvbnN0IG5hbWUgPSBwcm9kdWN0aW9uLmdldE5hbWUoKSxcbiAgICAgICAgICBydWxlcyA9IHByb2R1Y3Rpb24uZ2V0UnVsZXMoKSxcbiAgICAgICAgICBOb2RlID0gcHJvZHVjdGlvbi5nZXROb2RlKCk7XG4gICAgXG4gICAgcHJvZHVjdGlvbiA9IG5ldyBQcm9kdWN0aW9uKG5hbWUsIHJ1bGVzLCBOb2RlKTsgLy8vXG4gICAgXG4gICAgcmV0dXJuIHByb2R1Y3Rpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9kdWN0aW9uO1xuXG5mdW5jdGlvbiBwYWRkaW5nRnJvbVBhZGRpbmdMZW5ndGgocGFkZGluZ0xlbmd0aCkge1xuICBsZXQgcGFkZGluZyA9ICcnO1xuICBcbiAgZm9yIChsZXQgcG9zaXRpb24gPSAwOyBwb3NpdGlvbiA8IHBhZGRpbmdMZW5ndGg7IHBvc2l0aW9uKyspIHtcbiAgICBwYWRkaW5nICs9ICcgJztcbiAgfVxuICBcbiAgcmV0dXJuIHBhZGRpbmc7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBQYXJ0cyA9IHJlcXVpcmUoJy4vcGFydHMnKTtcblxuY29uc3QgeyBzcGVjaWFsU3ltYm9scyB9ID0gbGV4ZXJzO1xuXG5jbGFzcyBSdWxlIHtcbiAgY29uc3RydWN0b3IocGFydHMpIHtcbiAgICB0aGlzLnBhcnRzID0gcGFydHM7XG4gIH1cblxuICBnZXRQYXJ0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0cztcbiAgfVxuICBcbiAgZ2V0Rmlyc3RQYXJ0KCkge1xuICAgIGNvbnN0IGZpcnN0UGFydCA9IGZpcnN0KHRoaXMucGFydHMpO1xuXG4gICAgcmV0dXJuIGZpcnN0UGFydDtcbiAgfVxuXG4gIGdldFBhcnRzTGVuZ3RoKCkge1xuICAgIGNvbnN0IHBhcnRzTGVuZ3RoID0gdGhpcy5wYXJ0cy5sZW5ndGg7XG5cbiAgICByZXR1cm4gcGFydHNMZW5ndGg7XG4gIH1cblxuICBnZXRBbGxCdXRGaXJzdFBhcnRzKCkge1xuICAgIGNvbnN0IGFsbEJ1dEZpcnN0UGFydHMgPSB0aGlzLnBhcnRzLnNsaWNlKDEpO1xuXG4gICAgcmV0dXJuIGFsbEJ1dEZpcnN0UGFydHM7XG4gIH1cbiAgXG4gIGlzTGVmdFJlY3Vyc2l2ZShwcm9kdWN0aW9uTmFtZSkge1xuICAgIGxldCBsZWZ0UmVjdXJzaXZlID0gZmFsc2U7XG4gICAgXG4gICAgY29uc3QgZmlyc3RQcm9kdWN0aW9uTmFtZVBhcnQgPSB0aGlzLmdldEZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0KCk7ICAgIFxuICAgIFxuICAgIGlmIChmaXJzdFByb2R1Y3Rpb25OYW1lUGFydCAhPT0gbnVsbCkge1xuICAgICAgbGVmdFJlY3Vyc2l2ZSA9IGZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0LmlzTGVmdFJlY3Vyc2l2ZShwcm9kdWN0aW9uTmFtZSk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBsZWZ0UmVjdXJzaXZlO1xuICB9XG5cbiAgaXNJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZShwcmV2aW91c1Byb2R1Y3Rpb25zKSB7XG4gICAgY29uc3QgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVQcmV2aW91c1Byb2R1Y3Rpb24gPSB0aGlzLmltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUHJldmlvdXNQcm9kdWN0aW9uKHByZXZpb3VzUHJvZHVjdGlvbnMpLFxuICAgICAgICAgIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlID0gKGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUHJldmlvdXNQcm9kdWN0aW9uICE9PSBudWxsKTtcbiAgICBcbiAgICByZXR1cm4gaW1wbGljaXRseUxlZnRSZWN1cnNpdmU7XG4gIH1cblxuICBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVByZXZpb3VzUHJvZHVjdGlvbihwcmV2aW91c1Byb2R1Y3Rpb25zKSB7XG4gICAgbGV0IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUHJldmlvdXNQcm9kdWN0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0ID0gdGhpcy5nZXRGaXJzdFByb2R1Y3Rpb25OYW1lUGFydCgpO1xuXG4gICAgaWYgKGZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBmaXJzdFByb2R1Y3Rpb25OYW1lUGFydFByb2R1Y3Rpb25OYW1lID0gZmlyc3RQcm9kdWN0aW9uTmFtZVBhcnQuZ2V0UHJvZHVjdGlvbk5hbWUoKSxcbiAgICAgICAgICAgIGZpcnN0UHJvZHVjdGlvbk5hbWUgPSBmaXJzdFByb2R1Y3Rpb25OYW1lUGFydFByb2R1Y3Rpb25OYW1lOyAgLy8vXG5cbiAgICAgIHByZXZpb3VzUHJvZHVjdGlvbnMuc29tZShmdW5jdGlvbihwcmV2aW91c1Byb2R1Y3Rpb24pIHtcbiAgICAgICAgY29uc3QgcHJldmlvdXNQcm9kdWN0aW9uTmFtZSA9IHByZXZpb3VzUHJvZHVjdGlvbi5nZXROYW1lKCksXG4gICAgICAgICAgICAgIHByZXZpb3VzUHJvZHVjdGlvbkltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlID0gKHByZXZpb3VzUHJvZHVjdGlvbk5hbWUgPT09IGZpcnN0UHJvZHVjdGlvbk5hbWUpO1xuXG4gICAgICAgIGlmIChwcmV2aW91c1Byb2R1Y3Rpb25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZSkge1xuICAgICAgICAgIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUHJldmlvdXNQcm9kdWN0aW9uID0gcHJldmlvdXNQcm9kdWN0aW9uO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVByZXZpb3VzUHJvZHVjdGlvbjtcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIGNvbnN0IHBhcnRzU3RyaW5nID0gdGhpcy5wYXJ0cy5yZWR1Y2UoZnVuY3Rpb24ocGFydHNTdHJpbmcsIHBhcnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnRTdHJpbmcgPSBwYXJ0LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChwYXJ0c1N0cmluZyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICBwYXJ0c1N0cmluZyA9IHBhcnRTdHJpbmc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwYXJ0c1N0cmluZyA9IGAke3BhcnRzU3RyaW5nfSAke3BhcnRTdHJpbmd9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHBhcnRzU3RyaW5nO1xuICAgICAgICAgIH0sIG51bGwpLFxuICAgICAgICAgIHN0cmluZyA9IHBhcnRzU3RyaW5nOyAvLy9cbiAgICBcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgcGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbGV0IG5vZGVzID0gW107XG4gICAgXG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IGNvbnRleHQuc2F2ZWRJbmRleCgpLFxuICAgICAgICAgIGV2ZXJ5UGFydFBhcnNlZCA9IHRoaXMucGFydHMuZXZlcnkoZnVuY3Rpb24ocGFydCkge1xuICAgICAgICAgICAgY29uc3QgcGFydE5vZGVPck5vZGVzID0gcGFydC5wYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgICAgICAgICAgcGFydFBhcnNlZCA9IChwYXJ0Tm9kZU9yTm9kZXMgIT09IG51bGwpO1xuICBcbiAgICAgICAgICAgIGlmIChwYXJ0UGFyc2VkKSB7XG4gICAgICAgICAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KHBhcnROb2RlT3JOb2Rlcyk7XG4gIFxuICAgICAgICAgICAgICBub1doaXRlc3BhY2UgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICByZXR1cm4gcGFydFBhcnNlZDtcbiAgICAgICAgICB9KTtcblxuICAgIGlmICghZXZlcnlQYXJ0UGFyc2VkKSB7XG4gICAgICBjb250ZXh0LmJhY2t0cmFjayhzYXZlZEluZGV4KTtcblxuICAgICAgbm9kZXMgPSBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ltYm9sU2VxdWVuY2Uoc3ltYm9sU2VxdWVuY2UsIHNpZ25pZmljYW50VG9rZW5UeXBlcykge1xuICAgIGxldCBub1doaXRlc3BhY2UgPSBmYWxzZTtcbiAgICBcbiAgICBjb25zdCBwYXJ0cyA9IHN5bWJvbFNlcXVlbmNlLnJlZHVjZVN5bWJvbHMoZnVuY3Rpb24ocGFydHMsIHN5bWJvbCkge1xuICAgICAgICAgICAgaWYgKHN5bWJvbCA9PT0gc3BlY2lhbFN5bWJvbHMuTk9fV0hJVEVTUEFDRSkge1xuICAgICAgICAgICAgICBub1doaXRlc3BhY2UgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3QgcGFydCA9IHBhcnRGcm9tU3ltYm9sKHN5bWJvbCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpO1xuICBcbiAgICAgICAgICAgICAgcGFydHMucHVzaChwYXJ0KTtcbiAgXG4gICAgICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgIHJldHVybiBwYXJ0cztcbiAgICAgICAgICB9LCBbXSksXG4gICAgICAgICAgcnVsZSA9IG5ldyBSdWxlKHBhcnRzKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZTtcblxuZnVuY3Rpb24gcGFydEZyb21TeW1ib2woc3ltYm9sLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSkge1xuICBsZXQgcGFydCA9IHVuZGVmaW5lZDsgLy8vXG5cbiAgUGFydHMuc29tZShmdW5jdGlvbihQYXJ0KSB7XG4gICAgcGFydCA9IFBhcnQuZnJvbVN5bWJvbChzeW1ib2wsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlKTtcblxuICAgIGNvbnN0IHBhcnNlZCA9IChwYXJ0ICE9PSBudWxsKTtcblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH0pO1xuXG4gIHJldHVybiBwYXJ0O1xufVxuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKSxcbiAgICAgIGVhc3lsYXlvdXQgPSByZXF1aXJlKCdlYXN5LWxheW91dCcpO1xuXG5jb25zdCB7IFRleHRhcmVhIH0gPSBlYXN5LFxuICAgICAgeyBTaXplYWJsZUVsZW1lbnQsIFZlcnRpY2FsU3BsaXR0ZXIgfSA9IGVhc3lsYXlvdXQ7XG5cbmNvbnN0IGNvbnRlbnRUZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI2NvbnRlbnQnLFxuICAgICAgcGFyc2VUcmVlVGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0YXJlYSNwYXJzZVRyZWUnLFxuICAgICAgYm5mR3JhbW1hclRleHRhcmVhU2VsZWN0b3IgPSAndGV4dGFyZWEjYm5mR3JhbW1hcicsXG4gICAgICBzaXplYWJsZUVsZW1lbnRTZWxlY3RvciA9ICcjc2l6ZWFibGVFbGVtZW50JyxcbiAgICAgIHZlcnRpY2FsU3BsaXR0ZXJTZWxlY3RvciA9ICcjdmVydGljYWxTcGxpdHRlcicsXG4gICAgICBjb250ZW50VGV4dGFyZWEgPSBuZXcgVGV4dGFyZWEoY29udGVudFRleHRhcmVhU2VsZWN0b3IpLFxuICAgICAgcGFyc2VUcmVlVGV4dGFyZWEgPSBuZXcgVGV4dGFyZWEocGFyc2VUcmVlVGV4dGFyZWFTZWxlY3RvciksXG4gICAgICBibmZHcmFtbWFyVGV4dGFyZWEgPSBuZXcgVGV4dGFyZWEoYm5mR3JhbW1hclRleHRhcmVhU2VsZWN0b3IpLFxuICAgICAgc2l6ZWFibGVFbGVtZW50ID0gbmV3IFNpemVhYmxlRWxlbWVudChzaXplYWJsZUVsZW1lbnRTZWxlY3RvciksXG4gICAgICBiZWZvcmVTaXplYWJsZUVsZW1lbnQgPSBmYWxzZSxcbiAgICAgIGFmdGVyU2l6ZWFibGVFbGVtZW50ID0gdHJ1ZTtcblxubmV3IFZlcnRpY2FsU3BsaXR0ZXIodmVydGljYWxTcGxpdHRlclNlbGVjdG9yLCBiZWZvcmVTaXplYWJsZUVsZW1lbnQsIGFmdGVyU2l6ZWFibGVFbGVtZW50KTtcblxuY2xhc3MgRXhhbXBsZSB7XG4gIHN0YXRpYyBnZXRCTkZHcmFtbWFyVGV4dGFyZWFWYWx1ZSgpIHsgcmV0dXJuIGJuZkdyYW1tYXJUZXh0YXJlYS5nZXRWYWx1ZSgpOyB9XG5cbiAgc3RhdGljIHNldEJORkdyYW1tYXJUZXh0YXJlYVZhbHVlKHZhbHVlKSB7IGJuZkdyYW1tYXJUZXh0YXJlYS5zZXRWYWx1ZSh2YWx1ZSk7IH1cblxuICBzdGF0aWMgc2V0Q29udGVudFRleHRhcmVhVmFsdWUodmFsdWUpIHsgY29udGVudFRleHRhcmVhLnNldFZhbHVlKHZhbHVlKTsgfVxuXG4gIHN0YXRpYyBvbkJORkdyYW1tYXJUZXh0YXJlYUtleVVwKGhhbmRsZXIpIHsgYm5mR3JhbW1hclRleHRhcmVhLm9uS2V5VXAoaGFuZGxlcik7IH1cblxuICBzdGF0aWMgb25Db250ZW50VGV4dGFyZWFLZXlVcChoYW5kbGVyKSB7IGNvbnRlbnRUZXh0YXJlYS5vbktleVVwKGhhbmRsZXIpOyB9XG5cbiAgc3RhdGljIHVwZGF0ZVBhcnNlVHJlZVRleHRhcmVhKGxleGVyLCBwYXJzZXIsIHByb2R1Y3Rpb24pIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY29udGVudFRleHRhcmVhVmFsdWUgPSBjb250ZW50VGV4dGFyZWEuZ2V0VmFsdWUoKSxcbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50VGV4dGFyZWFWYWx1ZSwgLy8vXG4gICAgICAgICAgICBsaW5lcyA9IGxleGVyLmxpbmVzRnJvbUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgICBub2RlID0gcGFyc2VyLm5vZGVGcm9tTGluZXMobGluZXMsIHByb2R1Y3Rpb24pLFxuICAgICAgICAgICAgZG9jdW1lbnROb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgICBpZiAoZG9jdW1lbnROb2RlID09PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGRvY3VtZW50IGNhbm5vdCBiZSBwYXJzZWQgZm9yIHNvbWUgcmVhc29uLicpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJzZVRyZWUgPSBkb2N1bWVudE5vZGUucGFyc2VUcmVlKGxpbmVzKTtcblxuICAgICAgcGFyc2VUcmVlLnNoaWZ0TGluZSgpOyAgLy9cblxuICAgICAgY29uc3QgcGFyc2VUcmVlU3RyaW5nID0gcGFyc2VUcmVlLnRvU3RyaW5nKCksXG4gICAgICAgICAgICBwYXJzZVRyZWVUZXh0YXJlYUhUTUwgPSBwYXJzZVRyZWVTdHJpbmc7ICAvLy9cblxuICAgICAgcGFyc2VUcmVlVGV4dGFyZWEuaHRtbChwYXJzZVRyZWVUZXh0YXJlYUhUTUwpO1xuXG4gICAgICBjb250ZW50VGV4dGFyZWEucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnRlbnRUZXh0YXJlYS5hZGRDbGFzcygnZXJyb3InKTtcblxuICAgICAgRXhhbXBsZS5jbGVhclBhcnNlVHJlZVRleHRhcmVhKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGNsZWFyUGFyc2VUcmVlVGV4dGFyZWEoKSB7XG4gICAgY29uc3QgcGFyc2VUcmVlVGV4dGFyZWFIVE1MID0gJyc7XG5cbiAgICBwYXJzZVRyZWVUZXh0YXJlYS5odG1sKHBhcnNlVHJlZVRleHRhcmVhSFRNTCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFeGFtcGxlO1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBCTkZFeGFtcGxlOiByZXF1aXJlKCcuL2V4YW1wbGVzL2JuZicpLFxuICBCYXNpY0V4YW1wbGU6IHJlcXVpcmUoJy4vZXhhbXBsZXMvYmFzaWMnKSxcbiAgRmxvcmVuY2VFeGFtcGxlOiByZXF1aXJlKCcuL2V4YW1wbGVzL2Zsb3JlbmNlJylcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5JyksXG4gICAgICBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgRXhhbXBsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGUnKSxcbiAgICAgIGdyYW1tYXIgPSByZXF1aXJlKCcuLi9iYXNpYy9ncmFtbWFyJyksXG4gICAgICBCYXNpY1BhcnNlciA9IHJlcXVpcmUoJy4uL2Jhc2ljL3BhcnNlcicpO1xuXG5jb25zdCB7IFRleHRhcmVhIH0gPSBlYXN5LFxuICAgICAgeyBCYXNpY0xleGVyIH0gPSBsZXhlcnM7XG5cbmNvbnN0IGxleGljYWxHcmFtbWFyVGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0YXJlYSNsZXhpY2FsR3JhbW1hcicsXG4gICAgICBhZGp1c3RlZEJORkdyYW1tYXJUZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI2FkanVzdGVkQk5GR3JhbW1hcicsXG4gICAgICBsZXhpY2FsR3JhbW1hciA9IEJhc2ljTGV4ZXIuZ3JhbW1hcjtcblxubGV0IGxleGljYWxHcmFtbWFyVGV4dGFyZWEsXG4gICAgYWRqdXN0ZWRCTkZHcmFtbWFyVGV4dGFyZWEsXG4gICAgYmFzaWNMZXhlciA9IG51bGwsXG4gICAgYmFzaWNQYXJzZXIgPSBudWxsO1xuXG5jbGFzcyBCYXNpY0V4YW1wbGUge1xuICBzdGF0aWMgcnVuKCkge1xuICAgIGxleGljYWxHcmFtbWFyVGV4dGFyZWEgPSBuZXcgVGV4dGFyZWEobGV4aWNhbEdyYW1tYXJUZXh0YXJlYVNlbGVjdG9yKTtcbiAgICBhZGp1c3RlZEJORkdyYW1tYXJUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYShhZGp1c3RlZEJORkdyYW1tYXJUZXh0YXJlYVNlbGVjdG9yKTtcblxuICAgIGNvbnN0IGJuZkdyYW1tYXJUZXh0YXJlYVZhbHVlID0gZ3JhbW1hciwgLy8vXG4gICAgICAgICAgbGV4aWNhbEdyYW1tYXJUZXh0YXJlYVZhbHVlID0gSlNPTi5zdHJpbmdpZnkobGV4aWNhbEdyYW1tYXIsIG51bGwsICcgICcpOyAvLy9cblxuICAgIGxleGljYWxHcmFtbWFyVGV4dGFyZWEuc2V0VmFsdWUobGV4aWNhbEdyYW1tYXJUZXh0YXJlYVZhbHVlKTtcblxuICAgIEV4YW1wbGUuc2V0Qk5GR3JhbW1hclRleHRhcmVhVmFsdWUoYm5mR3JhbW1hclRleHRhcmVhVmFsdWUpO1xuXG4gICAgRXhhbXBsZS5vbkJORkdyYW1tYXJUZXh0YXJlYUtleVVwKHVwZGF0ZSk7XG5cbiAgICBFeGFtcGxlLm9uQ29udGVudFRleHRhcmVhS2V5VXAodXBkYXRlKTtcblxuICAgIGxleGljYWxHcmFtbWFyVGV4dGFyZWEub25LZXlVcCh1cGRhdGUpO1xuXG4gICAgdXBkYXRlKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlKCkge1xuICB1cGRhdGVCYXNpY0xleGVyKCk7XG5cbiAgdXBkYXRlQmFzaWNQYXJzZXIoKTtcblxuICB1cGRhdGVBZGp1c3RlZEJORkdyYW1tYXIoKTtcblxuICBpZiAoYmFzaWNMZXhlciAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHByb2R1Y3Rpb24gPSBudWxsOyAgLy8vXG5cbiAgICBFeGFtcGxlLnVwZGF0ZVBhcnNlVHJlZVRleHRhcmVhKGJhc2ljTGV4ZXIsIGJhc2ljUGFyc2VyLCBwcm9kdWN0aW9uKTtcbiAgfSBlbHNlIHtcbiAgICBFeGFtcGxlLmNsZWFyUGFyc2VUcmVlVGV4dGFyZWEoKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2ljRXhhbXBsZTtcblxuZnVuY3Rpb24gdXBkYXRlQmFzaWNMZXhlcigpIHtcbiAgY29uc3QgbGV4aWNhbEdyYW1tYXJUZXh0YXJlYVZhbHVlID0gbGV4aWNhbEdyYW1tYXJUZXh0YXJlYS5nZXRWYWx1ZSgpO1xuXG4gIGxldCBsZXhpY2FsR3JhbW1hciA9IG51bGw7XG5cbiAgdHJ5IHtcbiAgICBsZXhpY2FsR3JhbW1hciA9IEpTT04ucGFyc2UobGV4aWNhbEdyYW1tYXJUZXh0YXJlYVZhbHVlKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHt9XG5cbiAgY29uc3QgbGV4aWNhbEdyYW1tYXJWYWxpZCA9IChsZXhpY2FsR3JhbW1hciAhPT0gbnVsbCk7XG5cbiAgaWYgKGxleGljYWxHcmFtbWFyVmFsaWQpIHtcbiAgICBiYXNpY0xleGVyID0gQmFzaWNMZXhlci5mcm9tR3JhbW1hcihsZXhpY2FsR3JhbW1hcik7XG5cbiAgICBsZXhpY2FsR3JhbW1hclRleHRhcmVhLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuICB9IGVsc2Uge1xuICAgIGxleGljYWxHcmFtbWFyVGV4dGFyZWEuYWRkQ2xhc3MoJ2Vycm9yJyk7XG5cbiAgICBiYXNpY0xleGVyID0gbnVsbDtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVCYXNpY1BhcnNlcigpIHtcbiAgY29uc3QgYm5mR3JhbW1hclRleHRhcmVhVmFsdWUgPSBFeGFtcGxlLmdldEJORkdyYW1tYXJUZXh0YXJlYVZhbHVlKCksXG4gICAgICAgIGdyYW1tYXIgPSBibmZHcmFtbWFyVGV4dGFyZWFWYWx1ZTsgLy8vXG5cbiAgYmFzaWNQYXJzZXIgPSBCYXNpY1BhcnNlci5mcm9tR3JhbW1hcihncmFtbWFyKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQWRqdXN0ZWRCTkZHcmFtbWFyKCkge1xuICBjb25zdCBwcm9kdWN0aW9ucyA9IGJhc2ljUGFyc2VyLmdldFByb2R1Y3Rpb25zKCksXG4gICAgICAgIG1heGltdW1Qcm9kdWN0aW9uTmFtZUxlbmd0aCA9IHByb2R1Y3Rpb25zLnJlZHVjZShmdW5jdGlvbihtYXhpbXVtUHJvZHVjdGlvbk5hbWVMZW5ndGgsIHByb2R1Y3Rpb24pIHtcbiAgICAgICAgICBjb25zdCBwcm9kdWN0aW9uTmFtZSA9IHByb2R1Y3Rpb24uZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgIHByb2R1Y3Rpb25OYW1lTGVuZ3RoID0gcHJvZHVjdGlvbk5hbWUubGVuZ3RoO1xuXG4gICAgICAgICAgbWF4aW11bVByb2R1Y3Rpb25OYW1lTGVuZ3RoID0gTWF0aC5tYXgobWF4aW11bVByb2R1Y3Rpb25OYW1lTGVuZ3RoLCBwcm9kdWN0aW9uTmFtZUxlbmd0aCk7XG5cbiAgICAgICAgICByZXR1cm4gbWF4aW11bVByb2R1Y3Rpb25OYW1lTGVuZ3RoO1xuICAgICAgICB9LCAwKSxcbiAgICAgICAgYWRqdXN0ZWRCTkZHcmFtbWFyVGV4dGFyZWFWYWx1ZSA9IHByb2R1Y3Rpb25zLnJlZHVjZShmdW5jdGlvbihhZGp1c3RlZEJORkdyYW1tYXJUZXh0YXJlYSwgcHJvZHVjdGlvbikge1xuICAgICAgICAgIGNvbnN0IHByb2R1Y3Rpb25TdHJpbmcgPSBwcm9kdWN0aW9uLnRvU3RyaW5nKG1heGltdW1Qcm9kdWN0aW9uTmFtZUxlbmd0aCk7XG4gICAgICAgICAgXG4gICAgICAgICAgYWRqdXN0ZWRCTkZHcmFtbWFyVGV4dGFyZWEgKz0gcHJvZHVjdGlvblN0cmluZztcblxuICAgICAgICAgIHJldHVybiBhZGp1c3RlZEJORkdyYW1tYXJUZXh0YXJlYTtcbiAgICAgICAgfSwgW10pO1xuXG4gIGFkanVzdGVkQk5GR3JhbW1hclRleHRhcmVhLnNldFZhbHVlKGFkanVzdGVkQk5GR3JhbW1hclRleHRhcmVhVmFsdWUpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpLFxuICAgICAgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IEV4YW1wbGUgPSByZXF1aXJlKCcuLi9leGFtcGxlJyksXG4gICAgICBncmFtbWFyID0gcmVxdWlyZSgnLi4vYm5mL2dyYW1tYXInKSxcbiAgICAgIEJORlBhcnNlciA9IHJlcXVpcmUoJy4uL2JuZi9wYXJzZXInKTtcblxuY29uc3QgeyBUZXh0YXJlYSB9ID0gZWFzeSxcbiAgICAgIHsgQk5GTGV4ZXIgfSA9IGxleGVycztcblxuY29uc3QgbGV4aWNhbEdyYW1tYXJUZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI2xleGljYWxHcmFtbWFyJyxcbiAgICAgIGxleGljYWxHcmFtbWFyID0gQk5GTGV4ZXIuZ3JhbW1hcjtcblxubGV0IGxleGljYWxHcmFtbWFyVGV4dGFyZWEsXG4gICAgYm5mTGV4ZXIgPSBudWxsLFxuICAgIGJuZlBhcnNlciA9IG51bGw7XG5cbmNsYXNzIEJORkV4YW1wbGUge1xuICBzdGF0aWMgcnVuKCkge1xuICAgIGxleGljYWxHcmFtbWFyVGV4dGFyZWEgPSBuZXcgVGV4dGFyZWEobGV4aWNhbEdyYW1tYXJUZXh0YXJlYVNlbGVjdG9yKTtcblxuICAgIGNvbnN0IGxleGljYWxHcmFtbWFyVGV4dGFyZWFWYWx1ZSA9IEpTT04uc3RyaW5naWZ5KGxleGljYWxHcmFtbWFyLCBudWxsLCAnICAnKSwgLy8vXG4gICAgICAgICAgYm5mR3JhbW1hclRleHRhcmVhVmFsdWUgPSBncmFtbWFyLCAvLy9cbiAgICAgICAgICBjb250ZW50VGV4dGFyZWFWYWx1ZSA9IGBcblxuICAgIG5hdHVyYWxOdW1iZXIgICAgICAgICAgICA6Oj0gIC9cXGQrL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuYDtcblxuICAgIGxleGljYWxHcmFtbWFyVGV4dGFyZWEuc2V0VmFsdWUobGV4aWNhbEdyYW1tYXJUZXh0YXJlYVZhbHVlKTtcblxuICAgIEV4YW1wbGUuc2V0Qk5GR3JhbW1hclRleHRhcmVhVmFsdWUoYm5mR3JhbW1hclRleHRhcmVhVmFsdWUpO1xuXG4gICAgRXhhbXBsZS5zZXRDb250ZW50VGV4dGFyZWFWYWx1ZShjb250ZW50VGV4dGFyZWFWYWx1ZSk7XG5cbiAgICBFeGFtcGxlLm9uQk5GR3JhbW1hclRleHRhcmVhS2V5VXAodXBkYXRlKTtcblxuICAgIEV4YW1wbGUub25Db250ZW50VGV4dGFyZWFLZXlVcCh1cGRhdGUpO1xuXG4gICAgbGV4aWNhbEdyYW1tYXJUZXh0YXJlYS5vbktleVVwKHVwZGF0ZSk7XG5cbiAgICB1cGRhdGUoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGUoKSB7XG4gIHVwZGF0ZUJORkxleGVyKCk7XG5cbiAgdXBkYXRlQk5GUGFyc2VyKCk7XG5cbiAgaWYgKGJuZkxleGVyICE9PSBudWxsKSB7XG4gICAgY29uc3QgcHJvZHVjdGlvbiA9IG51bGw7ICAvLy9cblxuICAgIEV4YW1wbGUudXBkYXRlUGFyc2VUcmVlVGV4dGFyZWEoYm5mTGV4ZXIsIGJuZlBhcnNlciwgcHJvZHVjdGlvbik7XG4gIH0gZWxzZSB7XG4gICAgRXhhbXBsZS5jbGVhclBhcnNlVHJlZVRleHRhcmVhKCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCTkZFeGFtcGxlO1xuXG5mdW5jdGlvbiB1cGRhdGVCTkZMZXhlcigpIHtcbiAgY29uc3QgbGV4aWNhbEdyYW1tYXJUZXh0YXJlYVZhbHVlID0gbGV4aWNhbEdyYW1tYXJUZXh0YXJlYS5nZXRWYWx1ZSgpO1xuXG4gIGxldCBsZXhpY2FsR3JhbW1hciA9IG51bGw7XG5cbiAgdHJ5IHtcbiAgICBsZXhpY2FsR3JhbW1hciA9IEpTT04ucGFyc2UobGV4aWNhbEdyYW1tYXJUZXh0YXJlYVZhbHVlKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHt9XG5cbiAgY29uc3QgbGV4aWNhbEdyYW1tYXJWYWxpZCA9IChsZXhpY2FsR3JhbW1hciAhPT0gbnVsbCk7XG5cbiAgaWYgKGxleGljYWxHcmFtbWFyVmFsaWQpIHtcbiAgICBibmZMZXhlciA9IEJORkxleGVyLmZyb21HcmFtbWFyKGxleGljYWxHcmFtbWFyKTtcblxuICAgIGxleGljYWxHcmFtbWFyVGV4dGFyZWEucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XG4gIH0gZWxzZSB7XG4gICAgbGV4aWNhbEdyYW1tYXJUZXh0YXJlYS5hZGRDbGFzcygnZXJyb3InKTtcblxuICAgIGJuZkxleGVyID0gbnVsbDtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVCTkZQYXJzZXIoKSB7XG4gIGJuZlBhcnNlciA9IEJORlBhcnNlci5mcm9tTm90aGluZygpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpLFxuICAgICAgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IEV4YW1wbGUgPSByZXF1aXJlKCcuLi9leGFtcGxlJyksXG4gICAgICBncmFtbWFyID0gcmVxdWlyZSgnLi4vZmxvcmVuY2UvZ3JhbW1hcicpLFxuICAgICAgbWFwcGluZ3MgPSByZXF1aXJlKCcuLi9mbG9yZW5jZS9tYXBwaW5ncycpLFxuICAgICAgRmxvcmVuY2VQYXJzZXIgPSByZXF1aXJlKCcuLi9mbG9yZW5jZS9wYXJzZXInKTtcblxuY29uc3QgeyBDaGVja2JveCwgVGV4dGFyZWEgfSA9IGVhc3ksXG4gICAgICB7IEZsb3JlbmNlTGV4ZXIgfSA9IGxleGVycztcblxuY29uc3QgbWFwcGluZ3NDaGVja2JveFNlbGVjdG9yID0gJyNtYXBwaW5ncycsXG4gICAgICBwcm9kdWN0aW9uTmFtZVRleHRhcmVhU2VsZWN0b3IgPSAnI3Byb2R1Y3Rpb25OYW1lJztcblxuY29uc3QgZmxvcmVuY2VMZXhlciA9IEZsb3JlbmNlTGV4ZXIuZnJvbU5vdGhpbmcoKTtcblxubGV0IHByb2R1Y3Rpb25OYW1lLFxuICAgIG1hcHBpbmdzQ2hlY2tib3gsXG4gICAgcHJvZHVjdGlvbk5hbWVUZXh0YXJlYTtcblxuY2xhc3MgRmxvcmVuY2VFeGFtcGxlIHtcbiAgc3RhdGljIHJ1bigpIHtcbiAgICBtYXBwaW5nc0NoZWNrYm94ID0gbmV3IENoZWNrYm94KG1hcHBpbmdzQ2hlY2tib3hTZWxlY3Rvcik7XG4gICAgcHJvZHVjdGlvbk5hbWVUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYShwcm9kdWN0aW9uTmFtZVRleHRhcmVhU2VsZWN0b3IpO1xuXG4gICAgY29uc3QgYm5mR3JhbW1hclRleHRhcmVhVmFsdWUgPSBncmFtbWFyOyAvLy9cblxuICAgIEV4YW1wbGUuc2V0Qk5GR3JhbW1hclRleHRhcmVhVmFsdWUoYm5mR3JhbW1hclRleHRhcmVhVmFsdWUpO1xuXG4gICAgbWFwcGluZ3NDaGVja2JveC5vbkNoYW5nZSh1cGRhdGUpO1xuXG4gICAgcHJvZHVjdGlvbk5hbWVUZXh0YXJlYS5vbktleVVwKHVwZGF0ZSk7XG5cbiAgICBFeGFtcGxlLm9uQk5GR3JhbW1hclRleHRhcmVhS2V5VXAodXBkYXRlKTtcblxuICAgIEV4YW1wbGUub25Db250ZW50VGV4dGFyZWFLZXlVcCh1cGRhdGUpO1xuXG4gICAgdXBkYXRlKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlKCkge1xuICBjb25zdCBtYXBwaW5nc0NoZWNrYm94Q2hlY2tlZCA9IG1hcHBpbmdzQ2hlY2tib3guaXNDaGVja2VkKCksXG4gICAgICAgIGJuZkdyYW1tYXJUZXh0YXJlYVZhbHVlID0gRXhhbXBsZS5nZXRCTkZHcmFtbWFyVGV4dGFyZWFWYWx1ZSgpLFxuICAgICAgICBwcm9kdWN0aW9uTmFtZVRleHRhcmVhVmFsdWUgPSBwcm9kdWN0aW9uTmFtZVRleHRhcmVhLmdldFZhbHVlKCksXG4gICAgICAgIGFkanVzdGVkTWFwcGluZ3MgPSBtYXBwaW5nc0NoZWNrYm94Q2hlY2tlZCA/IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBwaW5ncyA6IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt9LFxuICAgICAgICBhZGp1c3RlZEdyYW1tYXIgPSBibmZHcmFtbWFyVGV4dGFyZWFWYWx1ZSwgLy8vXG4gICAgICAgIHByb2R1Y3Rpb25OYW1lID0gcHJvZHVjdGlvbk5hbWVUZXh0YXJlYVZhbHVlLCAvLy9cbiAgICAgICAgZmxvcmVuY2VQYXJzZXIgPSBGbG9yZW5jZVBhcnNlci5mcm9tR3JhbW1hckFuZE1hcHBpbmdzKGFkanVzdGVkR3JhbW1hciwgYWRqdXN0ZWRNYXBwaW5ncyksXG4gICAgICAgIHByb2R1Y3Rpb24gPSBmbG9yZW5jZVBhcnNlci5maW5kUHJvZHVjdGlvbihwcm9kdWN0aW9uTmFtZSk7XG5cbiAgRXhhbXBsZS51cGRhdGVQYXJzZVRyZWVUZXh0YXJlYShmbG9yZW5jZUxleGVyLCBmbG9yZW5jZVBhcnNlciwgcHJvZHVjdGlvbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VFeGFtcGxlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBncmFtbWFyID0gYFxuXG5cbiAgICBkb2N1bWVudCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIGhlYWRlcj8gdmVydGljYWxTcGFjZT8gYm9keT8gICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICBoZWFkZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIGluY2x1ZGVEaXJlY3RpdmUrXG4gICAgXG4gICAgaW5jbHVkZURpcmVjdGl2ZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcImluY2x1ZGVcIjxOT19XSElURVNQQUNFPlwiKFwiPE5PX1dISVRFU1BBQ0U+W3N0cmluZ108Tk9fV0hJVEVTUEFDRT5cIilcIiA8RU5EX09GX0xJTkU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIGJvZHkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgcGFydCsgIFxuICAgICAgICBcbiAgICBwYXJ0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHR5cGUocylEZWNsYXJhdGlvblxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgdHlwZWRDb25zdHJ1Y3RvcihzKURlY2xhcmF0aW9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICh0eXBlZClWYXJpYWJsZShzKURlY2xhcmF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgKHF1YWxpZmllZClNZXRhdmFyaWFibGUocylEZWNsYXJhdGlvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBydWxlIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIGF4aW9tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIHRoZW9yZW0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgbGVtbWEgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgdmVydGljYWxTcGFjZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBlcnJvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIHR5cGUocylEZWNsYXJhdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgdHlwZXNEZWNsYXJhdGlvbiB8IHR5cGVEZWNsYXJhdGlvbiBcbiAgICBcbiAgICB0eXBlZENvbnN0cnVjdG9yKHMpRGVjbGFyYXRpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHR5cGVkQ29uc3RydWN0b3JzRGVjbGFyYXRpb24gfCB0eXBlZENvbnN0cnVjdG9yRGVjbGFyYXRpb24gXG4gICAgXG4gICAgKHR5cGVkKVZhcmlhYmxlKHMpRGVjbGFyYXRpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICAodHlwZWQpVmFyaWFibGVEZWNsYXJhdGlvbiB8ICh0eXBlZClWYXJpYWJsZXNEZWNsYXJhdGlvblxuICAgIFxuICAgIChxdWFsaWZpZWQpTWV0YXZhcmlhYmxlKHMpRGVjbGFyYXRpb24gICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgKHF1YWxpZmllZClNZXRhdmFyaWFibGVzRGVjbGFyYXRpb24gfCAocXVhbGlmaWVkKU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uXG5cbiAgICBydWxlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIFwiUnVsZVwiIHBhcmVudGhlc2lzZWRMYWJlbExpc3Q/IDxFTkRfT0ZfTElORT4gcHJlbWlzZShzKT8gY29uY2x1c2lvbiBwcm9vZj9cbiAgICBcbiAgICBheGlvbSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIFwiQXhpb21cIiBwYXJlbnRoZXNpc2VkTGFiZWxMaXN0PyA8RU5EX09GX0xJTkU+IHByZW1pc2Uocyk/IGNvbmNsdXNpb25cbiAgICBcbiAgICB0aGVvcmVtICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIFwiVGhlb3JlbVwiIHBhcmVudGhlc2lzZWRMYWJlbExpc3Q/IDxFTkRfT0ZfTElORT4gcHJlbWlzZShzKT8gY29uY2x1c2lvbiBwcm9vZj9cbiAgICAgICAgXG4gICAgbGVtbWEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIkxlbW1hXCIgcGFyZW50aGVzaXNlZExhYmVsTGlzdD8gPEVORF9PRl9MSU5FPiBwcmVtaXNlKHMpPyBjb25jbHVzaW9uIHByb29mP1xuXG5cblxuICAgIHR5cGVzRGVjbGFyYXRpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCJUeXBlc1wiIHR5cGVMaXN0XG4gICAgXG4gICAgdHlwZURlY2xhcmF0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIlR5cGVcIiB0eXBlXG4gICAgXG4gICAgdHlwZUxpc3QgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICB0eXBlPE5PX1dISVRFU1BBQ0U+Y29tbWFUaGVuVHlwZSpcbiAgICBcbiAgICBjb21tYVRoZW5UeXBlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIFwiLFwiPE5PX1dISVRFU1BBQ0U+dHlwZVxuICAgIFxuICAgIHR5cGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgdHlwZU5hbWVcblxuICAgIHR5cGVOYW1lICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgbmFtZVxuXG4gICAgXG4gICAgXG4gICAgdHlwZWRDb25zdHJ1Y3RvcnNEZWNsYXJhdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIkNvbnN0cnVjdG9yc1wiIHR5cGVkQ29uc3RydWN0b3JMaXN0XG4gICAgXG4gICAgdHlwZWRDb25zdHJ1Y3RvckRlY2xhcmF0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIkNvbnN0cnVjdG9yXCIgdHlwZWRDb25zdHJ1Y3RvclxuXG4gICAgdHlwZWRDb25zdHJ1Y3Rvckxpc3QgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICB0eXBlZENvbnN0cnVjdG9yPE5PX1dISVRFU1BBQ0U+Y29tbWFUaGVuVHlwZWRDb25zdHJ1Y3RvcipcbiAgICBcbiAgICBjb21tYVRoZW5UeXBlZENvbnN0cnVjdG9yICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIFwiLFwiPE5PX1dISVRFU1BBQ0U+dHlwZWRDb25zdHJ1Y3RvclxuICAgIFxuICAgIHR5cGVkQ29uc3RydWN0b3IgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgY29uc3RydWN0b3I8Tk9fV0hJVEVTUEFDRT5cIjpcIjxOT19XSElURVNQQUNFPnR5cGVcbiAgICBcbiAgICBjb25zdHJ1Y3RvciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIGNvbnN0cnVjdG9yTmFtZTxOT19XSElURVNQQUNFPnBhcmVudGhlc2lzZWRUeXBlTGlzdD9cbiAgICBcbiAgICBwYXJlbnRoZXNpc2VkVHlwZUxpc3QgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIFwiKFwiPE5PX1dISVRFU1BBQ0U+dHlwZUxpc3Q8Tk9fV0hJVEVTUEFDRT5cIilcIlxuXG4gICAgY29uc3RydWN0b3JOYW1lICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBuYW1lXG5cblxuXG4gICAgKHR5cGVkKVZhcmlhYmxlc0RlY2xhcmF0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIlZhcmlhYmxlc1wiICh0eXBlZClWYXJpYWJsZUxpc3RcbiAgICBcbiAgICAodHlwZWQpVmFyaWFibGVEZWNsYXJhdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIFwiVmFyaWFibGVcIiAodHlwZWQpVmFyaWFibGVcblxuICAgICh0eXBlZClWYXJpYWJsZUxpc3QgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgKHR5cGVkKVZhcmlhYmxlPE5PX1dISVRFU1BBQ0U+Y29tbWFUaGVuKHR5cGVkKVZhcmlhYmxlKlxuICAgIFxuICAgIGNvbW1hVGhlbih0eXBlZClWYXJpYWJsZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCIsXCI8Tk9fV0hJVEVTUEFDRT4odHlwZWQpVmFyaWFibGVcbiAgICBcbiAgICAodHlwZWQpVmFyaWFibGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHR5cGVkVmFyaWFibGUgfCB2YXJpYWJsZVxuICAgIFxuICAgIHR5cGVkVmFyaWFibGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgdmFyaWFibGU8Tk9fV0hJVEVTUEFDRT5cIjpcIjxOT19XSElURVNQQUNFPnR5cGVcbiAgICBcbiAgICB2YXJpYWJsZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHZhcmlhYmxlTmFtZVxuICAgIFxuICAgIHZhcmlhYmxlTmFtZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgbmFtZVxuICAgIFxuICAgIFxuICAgIFxuICAgIChxdWFsaWZpZWQpTWV0YXZhcmlhYmxlc0RlY2xhcmF0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCJNZXRhdmFyaWFibGVzXCIgKHF1YWxpZmllZClNZXRhdmFyaWFibGVMaXN0XG4gICAgXG4gICAgKHF1YWxpZmllZClNZXRhdmFyaWFibGVEZWNsYXJhdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIk1ldGF2YXJpYWJsZVwiIChxdWFsaWZpZWQpTWV0YXZhcmlhYmxlXG4gICAgXG4gICAgKHF1YWxpZmllZClNZXRhdmFyaWFibGVMaXN0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICAocXVhbGlmaWVkKU1ldGF2YXJpYWJsZTxOT19XSElURVNQQUNFPmNvbW1hVGhlbihxdWFsaWZpZWQpTWV0YXZhcmlhYmxlK1xuXG4gICAgY29tbWFUaGVuKHF1YWxpZmllZClNZXRhdmFyaWFibGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIixcIjxOT19XSElURVNQQUNFPihxdWFsaWZpZWQpTWV0YXZhcmlhYmxlXG5cbiAgICAocXVhbGlmaWVkKU1ldGF2YXJpYWJsZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHF1YWxpZmllZE1ldGF2YXJpYWJsZSB8IG1ldGF2YXJpYWJsZVxuICAgIFxuICAgIHF1YWxpZmllZE1ldGF2YXJpYWJsZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgbWV0YXZhcmlhYmxlPE5PX1dISVRFU1BBQ0U+cGFyZW50aGVzaXNlZFR5cGVPclRlcm1cblxuICAgIG1ldGF2YXJpYWJsZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgbWV0YXZhcmlhYmxlTmFtZVxuXG4gICAgcGFyZW50aGVzaXNlZFR5cGVPclRlcm0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIihcIjxOT19XSElURVNQQUNFPnR5cGVPclRlcm08Tk9fV0hJVEVTUEFDRT5cIilcIlxuICAgIFxuICAgIHR5cGVPclRlcm0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgdHlwZSB8IHRlcm1cbiAgICBcbiAgICBtZXRhdmFyaWFibGVOYW1lICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIG5hbWVcbiAgICBcbiAgICBcblxuICAgIHBhcmVudGhlc2lzZWRMYWJlbExpc3QgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCIoXCI8Tk9fV0hJVEVTUEFDRT5sYWJlbExpc3Q8Tk9fV0hJVEVTUEFDRT5cIilcIlxuICAgIFxuICAgIGxhYmVsTGlzdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgbGFiZWw8Tk9fV0hJVEVTUEFDRT5jb21tYVRoZW5MYWJlbCpcbiAgICBcbiAgICBjb21tYVRoZW5MYWJlbCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIFwiLFwiPE5PX1dISVRFU1BBQ0U+bGFiZWxcbiAgICBcbiAgICBsYWJlbCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIGxhYmVsTmFtZTxOT19XSElURVNQQUNFPnBhcmVudGhlc2lzZWRUZXJtTGlzdD9cbiAgICBcbiAgICBsYWJlbE5hbWUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIG5hbWVcblxuICAgIFxuICAgIFxuICAgIHByZW1pc2UocykgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgcHJlbWlzZSB8IHByZW1pc2VzXG4gICAgXG4gICAgcHJlbWlzZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIlByZW1pc2VcIiA8RU5EX09GX0xJTkU+IHVuanVzdGlmaWVkU3RhdGVtZW50T3JVbmtub3duXG4gICAgXG4gICAgcHJlbWlzZXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIlByZW1pc2VzXCIgPEVORF9PRl9MSU5FPiB1bmp1c3RpZmllZFN0YXRlbWVudE9yVW5rbm93biB1bmp1c3RpZmllZFN0YXRlbWVudE9yVW5rbm93bitcbiAgICBcbiAgICBjb25jbHVzaW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIFwiQ29uY2x1c2lvblwiIDxFTkRfT0ZfTElORT4gKHVuKWp1c3RpZmllZFN0YXRlbWVudE9yVW5rbm93blxuICAgIFxuXG5cbiAgICBwcm9vZiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIFwiUHJvb2ZcIiA8RU5EX09GX0xJTkU+IChhYnJpZGdlZClQcm9vZkRlcml2YXRpb25cbiAgICBcbiAgICAoYWJyaWRnZWQpUHJvb2ZEZXJpdmF0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHByb29mRGVyaXZhdGlvbiB8IGFicmlkZ2VkUHJvb2ZEZXJpdmF0aW9uXG4gICAgXG4gICAgYWJyaWRnZWRQcm9vZkRlcml2YXRpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICAodW4panVzdGlmaWVkU3RhdGVtZW50T3JVbmtub3duXG4gICAgXG4gICAgcHJvb2ZEZXJpdmF0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBkZXJpdmF0aW9uIHRoZXJlZm9yZVxuICAgIFxuICAgIGRlcml2YXRpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgc3ViRGVyaXZhdGlvbisgICAgXG4gICAgXG4gICAgdGhlcmVmb3JlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIlRoZXJlZm9yZVwiIDxFTkRfT0ZfTElORT4gKHVuKWp1c3RpZmllZFN0YXRlbWVudE9yVW5rbm93blxuICAgIFxuICAgIHN1YkRlcml2YXRpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgc3ViTGVtbWEgfCAodW4panVzdGlmaWVkU3RhdGVtZW50T3JVbmtub3duXG4gICAgXG4gICAgXG4gICAgXG4gICAgc3ViTGVtbWEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBzdXBwb3NlIHRoZW4/IGhlbmNlIHVuanVzdGlmaWVkU3RhdGVtZW50T3JVbmtub3duPyB2ZXJ0aWNhbFNwYWNlPyAgICBcbiAgICBcbiAgICBzdXBwb3NlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIFwiU3VwcG9zZVwiIDxFTkRfT0ZfTElORT4gdW5qdXN0aWZpZWRTdGF0ZW1lbnRPclVua25vd24rXG4gICAgXG4gICAgdGhlbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIlRoZW5cIiA8RU5EX09GX0xJTkU+IGRlcml2YXRpb25cbiAgICBcbiAgICBoZW5jZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIFwiSGVuY2VcIiA8RU5EX09GX0xJTkU+ICh1bilqdXN0aWZpZWRTdGF0ZW1lbnRPclVua25vd25cbiAgICBcbiAgICBcbiAgICBcbiAgICAodW4panVzdGlmaWVkU3RhdGVtZW50T3JVbmtub3duICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIGp1c3RpZmllZFN0YXRlbWVudCB8IHVuanVzdGlmaWVkU3RhdGVtZW50IHwgdW5rbm93blxuICAgIFxuICAgIHVuanVzdGlmaWVkU3RhdGVtZW50T3JVbmtub3duICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgdW5qdXN0aWZpZWRTdGF0ZW1lbnQgfCB1bmtub3duXG4gICAgXG4gICAgdW5qdXN0aWZpZWRTdGF0ZW1lbnQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBzdGF0ZW1lbnQgPEVORF9PRl9MSU5FPlxuICAgIFxuICAgIGp1c3RpZmllZFN0YXRlbWVudCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgc3RhdGVtZW50IGp1c3RpZmljYXRpb24gPEVORF9PRl9MSU5FPlxuICAgICAgXG4gICAganVzdGlmaWNhdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBieU9yRnJvbSByZWZlcmVuY2VcbiAgICAgXG4gICAgYnlPckZyb20gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcImJ5XCIgfCBcImZyb21cIlxuICAgICBcbiAgICByZWZlcmVuY2UgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHJlZmVyZW5jZU5hbWU8Tk9fV0hJVEVTUEFDRT5wYXJlbnRoZXNpc2VkVGVybUxpc3Q/XG5cbiAgICByZWZlcmVuY2VOYW1lICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIG5hbWVcblxuICAgIFxuXG4gICAgc3RhdGVtZW50ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBwcm9vZkFzc2VydGlvbiB8IHR5cGVBc3NlcnRpb24gfCBlcXVhbGl0eSB8IGV4cHJlc3Npb24gICAgIFxuICAgIFxuICAgIFxuICAgIFxuICAgIHByb29mQXNzZXJ0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgKHF1YWxpZmllZClNZXRhdmFyaWFibGUgXCI6OlwiIChxdWFsaWZpZWQpTWV0YXZhcmlhYmxlXG5cbiAgICB0eXBlQXNzZXJ0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIGV4cHJlc3Npb24gXCI6XCIgdHlwZVxuICAgIFxuICAgIGVxdWFsaXR5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgZXhwcmVzc2lvbiBcIj1cIiBleHByZXNzaW9uICAgIFxuICAgIFxuICAgIGV4cHJlc3Npb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgdGVybSB8IChxdWFsaWZpZWQpTWV0YXZhcmlhYmxlXG4gICAgXG4gICAgXG5cbiAgICB0ZXJtICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIGNvbXBvdW5kVGVybSB8IHZhcmlhYmxlTmFtZVxuICAgIFxuICAgIGNvbXBvdW5kVGVybSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgY29uc3RydWN0b3JOYW1lPE5PX1dISVRFU1BBQ0U+cGFyZW50aGVzaXNlZFRlcm1MaXN0P1xuICAgIFxuICAgIFxuXG4gICAgcGFyZW50aGVzaXNlZFRlcm1MaXN0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIihcIjxOT19XSElURVNQQUNFPnRlcm1MaXN0PE5PX1dISVRFU1BBQ0U+XCIpXCJcblxuICAgIHRlcm1MaXN0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgdGVybTxOT19XSElURVNQQUNFPmNvbW1hVGhlblRlcm0qXG4gICAgXG4gICAgY29tbWFUaGVuVGVybSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIixcIjxOT19XSElURVNQQUNFPnRlcm1cbiAgICBcblxuXG4gICAgbmFtZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICAvXFxcXHcrL1xuICAgIFxuICAgIFxuXG4gICAgdW5rbm93biAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBzcGVjaWFsVW5hc3NpZ25lZE9yTWlub3JLZXl3b3JkcysgPEVORF9PRl9MSU5FPlxuXG4gICAgc3BlY2lhbFVuYXNzaWduZWRPck1pbm9yS2V5d29yZHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBbc3BlY2lhbF0gfCBbdW5hc3NpZ25lZF0gfCBcImJ5XCIgfCBcImZyb21cIlxuXG5cblxuICAgIHZlcnRpY2FsU3BhY2UgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgPEVORF9PRl9MSU5FPitcbiAgICBcbiAgICBcbiAgICBcbiAgICBlcnJvciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgICpcbiAgICBcbmA7XG5cbm1vZHVsZS5leHBvcnRzID0gZ3JhbW1hcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVHJhbnNwYXJlbnROb2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwvdHJhbnNwYXJlbnQnKSxcbiAgICAgIERpc2NhcmRTZWNvbmRDaGlsZE5vZGUgPSByZXF1aXJlKCcuLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC9kaXNjYXJkU2Vjb25kQ2hpbGQnKSxcbiAgICAgIFRyYW5zcGFyZW50VGhlbktlZXBTZWNvbmROb2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwvdHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZCcpO1xuXG5jb25zdCBtYXBwaW5ncyA9IHtcblxuICAnbmFtZSc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgJ3BhcnQnOiBUcmFuc3BhcmVudE5vZGUsXG4gICdzdGF0ZW1lbnQnOiBUcmFuc3BhcmVudE5vZGUsXG4gICdzdWJEZXJpdmF0aW9uJzogVHJhbnNwYXJlbnROb2RlLFxuICAncHJvb2ZEZXJpdmF0aW9uJzogVHJhbnNwYXJlbnROb2RlLFxuICAncGFyZW50aGVzaXNlZFR5cGUnOiBUcmFuc3BhcmVudE5vZGUsXG4gICdhYnJpZGdlZFByb29mRGVyaXZhdGlvbic6IFRyYW5zcGFyZW50Tm9kZSxcblxuICAndHlwZU5hbWUnOiBUcmFuc3BhcmVudE5vZGUsXG4gICdsYWJlbE5hbWUnOiBUcmFuc3BhcmVudE5vZGUsXG4gICd2YXJpYWJsZU5hbWUnOiBUcmFuc3BhcmVudE5vZGUsXG4gICdyZWZlcmVuY2VOYW1lJzogVHJhbnNwYXJlbnROb2RlLFxuICAnY29uc3RydWN0b3JOYW1lJzogVHJhbnNwYXJlbnROb2RlLFxuICAnbWV0YXZhcmlhYmxlTmFtZSc6IFRyYW5zcGFyZW50Tm9kZSxcblxuICAncHJlbWlzZShzKSc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgJ3R5cGUocylEZWNsYXJhdGlvbic6IFRyYW5zcGFyZW50Tm9kZSxcbiAgJyh0eXBlZClWYXJpYWJsZShzKURlY2xhcmF0aW9uJzogVHJhbnNwYXJlbnROb2RlLFxuICAndHlwZWRDb25zdHJ1Y3RvcihzKURlY2xhcmF0aW9uJzogVHJhbnNwYXJlbnROb2RlLFxuICAnKHF1YWxpZmllZClNZXRhdmFyaWFibGUocylEZWNsYXJhdGlvbic6IFRyYW5zcGFyZW50Tm9kZSxcblxuICAnKHR5cGVkKVZhcmlhYmxlJzogVHJhbnNwYXJlbnROb2RlLFxuICAnKHF1YWxpZmllZClNZXRhdmFyaWFibGUnOiBUcmFuc3BhcmVudE5vZGUsXG4gICcoYWJyaWRnZWQpUHJvb2ZEZXJpdmF0aW9uJzogVHJhbnNwYXJlbnROb2RlLFxuXG4gICdieU9yRnJvbSc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgJ3R5cGVPclRlcm0nOiBUcmFuc3BhcmVudE5vZGUsXG4gICd1bmp1c3RpZmllZFN0YXRlbWVudE9yVW5rbm93bic6IFRyYW5zcGFyZW50Tm9kZSxcbiAgJyh1bilqdXN0aWZpZWRTdGF0ZW1lbnRPclVua25vd24nOiBUcmFuc3BhcmVudE5vZGUsXG4gICdzcGVjaWFsVW5hc3NpZ25lZE9yTWlub3JLZXl3b3Jkcyc6IFRyYW5zcGFyZW50Tm9kZSxcblxuICAnY29tbWFUaGVuVGVybSc6IFRyYW5zcGFyZW50VGhlbktlZXBTZWNvbmROb2RlLFxuICAnY29tbWFUaGVuVHlwZSc6IFRyYW5zcGFyZW50VGhlbktlZXBTZWNvbmROb2RlLFxuICAnY29tbWFUaGVuTGFiZWwnOiBUcmFuc3BhcmVudFRoZW5LZWVwU2Vjb25kTm9kZSxcbiAgJ2NvbW1hVGhlbk1ldGF2YXJpYWJsZSc6IFRyYW5zcGFyZW50VGhlbktlZXBTZWNvbmROb2RlLFxuICAnY29tbWFUaGVuKHR5cGVkKVZhcmlhYmxlJzogVHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZE5vZGUsXG4gICdjb21tYVRoZW5UeXBlZENvbnN0cnVjdG9yJzogVHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZE5vZGUsXG4gICdjb21tYVRoZW4ocXVhbGlmaWVkKU1ldGF2YXJpYWJsZSc6IFRyYW5zcGFyZW50VGhlbktlZXBTZWNvbmROb2RlLFxuXG4gICdwYXJlbnRoZXNpc2VkVGVybUxpc3QnOiBUcmFuc3BhcmVudFRoZW5LZWVwU2Vjb25kTm9kZSxcbiAgJ3BhcmVudGhlc2lzZWRUeXBlTGlzdCc6IFRyYW5zcGFyZW50VGhlbktlZXBTZWNvbmROb2RlLFxuICAncGFyZW50aGVzaXNlZExhYmVsTGlzdCc6IFRyYW5zcGFyZW50VGhlbktlZXBTZWNvbmROb2RlLFxuXG4gICdjb25jbHVzaW9uJzogRGlzY2FyZFNlY29uZENoaWxkTm9kZSxcbiAgJ3R5cGVkVmFyaWFibGUnOiBEaXNjYXJkU2Vjb25kQ2hpbGROb2RlLFxuICAndHlwZWRDb25zdHJ1Y3Rvcic6IERpc2NhcmRTZWNvbmRDaGlsZE5vZGVcblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBtYXBwaW5ncztcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IGdyYW1tYXIgPSByZXF1aXJlKCcuL2dyYW1tYXInKSxcbiAgICAgIG1hcHBpbmdzID0gcmVxdWlyZSgnLi9tYXBwaW5ncycpLFxuICAgICAgQ29tbW9uUGFyc2VyID0gcmVxdWlyZSgnLi4vY29tbW9uL3BhcnNlcicpLFxuICAgICAgUHJpbWl0aXZlUGFyc2VyID0gcmVxdWlyZSgnLi4vcHJpbWl0aXZlL3BhcnNlcicpO1xuXG5jb25zdCB7IFByaW1pdGl2ZUxleGVyLCBGbG9yZW5jZUxleGVyIH0gPSBsZXhlcnM7XG5cbmNvbnN0IHNpZ25pZmljYW50VG9rZW5UeXBlcyA9IEZsb3JlbmNlTGV4ZXIuc2lnbmlmaWNhbnRUb2tlblR5cGVzKCk7XG5cbmNsYXNzIEZsb3JlbmNlUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGZyb21BZGRpdGlvbmFsTWFwcGluZ3MoYWRkaXRpb25hbE1hcHBpbmdzKSB7XG4gICAgY29uc3QgZmxvcmVuY2VQYXJzZXIgPSBGbG9yZW5jZVBhcnNlci5mcm9tR3JhbW1hckFuZE1hcHBpbmdzKGdyYW1tYXIsIE9iamVjdC5hc3NpZ24obWFwcGluZ3MsIGFkZGl0aW9uYWxNYXBwaW5ncykpOyAvLy9cblxuICAgIHJldHVybiBmbG9yZW5jZVBhcnNlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tR3JhbW1hckFuZE1hcHBpbmdzKGdyYW1tYXIsIG1hcHBpbmdzKSB7XG4gICAgY29uc3QgbGluZXMgPSBQcmltaXRpdmVMZXhlci5saW5lc0Zyb21HcmFtbWFyKGdyYW1tYXIpLFxuICAgICAgICAgIHByb2R1Y3Rpb25zID0gUHJpbWl0aXZlUGFyc2VyLnBhcnNlKGxpbmVzLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG1hcHBpbmdzKSxcbiAgICAgICAgICBmbG9yZW5jZVBhcnNlciA9IG5ldyBGbG9yZW5jZVBhcnNlcihwcm9kdWN0aW9ucyk7XG5cbiAgICByZXR1cm4gZmxvcmVuY2VQYXJzZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGbG9yZW5jZVBhcnNlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgR3JhcGggPSByZXF1aXJlKCcuL2dyYXBoJyksXG4gICAgICBhcnJheVV0aWwgPSByZXF1aXJlKCcuLi91dGlsL2FycmF5JyksXG4gICAgICBwYXJzZXJVdGlsID0gcmVxdWlyZSgnLi4vdXRpbC9wYXJzZXInKSxcbiAgICAgIFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi9jb21tb24vcHJvZHVjdGlvbicpLFxuICAgICAgVW5pdFJ1bGVQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3VuaXRSdWxlJyksXG4gICAgICBVbml0UnVsZXNQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3VuaXRSdWxlcycpLFxuICAgICAgTm9uVW5pdFJ1bGVzUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9ub25Vbml0UnVsZXMnKTtcblxuY2xhc3MgY3ljbGVzIHtcbiAgc3RhdGljIGVsaW1pbmF0ZShwcm9kdWN0aW9ucykge1xuICAgIGNvbnN0IHVuaXRSdWxlc1Byb2R1Y3Rpb25zID0gdW5pdFJ1bGVzUHJvZHVjdGlvbnNGcm9tUHJvZHVjdGlvbnMocHJvZHVjdGlvbnMpLFxuICAgICAgICAgIGdyYXBoID0gR3JhcGguZnJvbVVuaXRSdWxlc1Byb2R1Y3Rpb25zKHVuaXRSdWxlc1Byb2R1Y3Rpb25zKSxcbiAgICAgICAgICBjb21wb25lbnRzID0gZ3JhcGguZ2V0Q29tcG9uZW50cygpLFxuICAgICAgICAgIG5vbkN5Y2xpY1Byb2R1Y3Rpb25zID0gbm9uQ3ljbGljUHJvZHVjdGlvbnNGcm9tQ29tcG9uZW50cyhjb21wb25lbnRzLCBwcm9kdWN0aW9ucyk7XG5cbiAgICBwcm9kdWN0aW9ucyA9IG5vbkN5Y2xpY1Byb2R1Y3Rpb25zOyAvLy9cblxuICAgIHJldHVybiBwcm9kdWN0aW9ucztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGN5Y2xlcztcblxuZnVuY3Rpb24gdW5pdFJ1bGVzUHJvZHVjdGlvbnNGcm9tUHJvZHVjdGlvbnMocHJvZHVjdGlvbnMpIHtcbiAgY29uc3QgdW5pdFJ1bGVzUHJvZHVjdGlvbnMgPSBwcm9kdWN0aW9ucy5yZWR1Y2UoZnVuY3Rpb24odW5pdFJ1bGVzUHJvZHVjdGlvbnMsIHByb2R1Y3Rpb24pIHtcbiAgICBjb25zdCB1bml0UnVsZXNQcm9kdWN0aW9uID0gVW5pdFJ1bGVzUHJvZHVjdGlvbi5mcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uKTtcblxuICAgIGlmICh1bml0UnVsZXNQcm9kdWN0aW9uICE9PSBudWxsKSB7XG4gICAgICB1bml0UnVsZXNQcm9kdWN0aW9ucy5wdXNoKHVuaXRSdWxlc1Byb2R1Y3Rpb24pO1xuICAgIH1cblxuICAgIHJldHVybiB1bml0UnVsZXNQcm9kdWN0aW9ucztcbiAgfSwgW10pO1xuXG4gIHJldHVybiB1bml0UnVsZXNQcm9kdWN0aW9ucztcbn1cblxuZnVuY3Rpb24gbm9uQ3ljbGljUHJvZHVjdGlvbnNGcm9tQ29tcG9uZW50cyhjb21wb25lbnRzLCBwcm9kdWN0aW9ucykge1xuICBjb25zdCBub25DeWNsaWNQcm9kdWN0aW9ucyA9IGNvbXBvbmVudHMucmVkdWNlKGZ1bmN0aW9uKG5vbkN5Y2xpY1Byb2R1Y3Rpb25zLCBjb21wb25lbnQpIHtcbiAgICAgICAgICBjb25zdCBjb21wb25lbnROb25DeWNsaWMgPSBjb21wb25lbnQuaXNOb25DeWNsaWMoKTtcblxuICAgICAgICAgIGlmIChjb21wb25lbnROb25DeWNsaWMpIHtcbiAgICAgICAgICAgIG5vbkN5Y2xpY1Byb2R1Y3Rpb25Gcm9tQ29tcG9uZW50KGNvbXBvbmVudCwgcHJvZHVjdGlvbnMsIG5vbkN5Y2xpY1Byb2R1Y3Rpb25zKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm9uQ3ljbGljUHJvZHVjdGlvbnNGcm9tQ29tcG9uZW50KGNvbXBvbmVudCwgcHJvZHVjdGlvbnMsIG5vbkN5Y2xpY1Byb2R1Y3Rpb25zKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gbm9uQ3ljbGljUHJvZHVjdGlvbnM7XG4gICAgICAgIH0sIFtdKTtcblxuICByZXR1cm4gbm9uQ3ljbGljUHJvZHVjdGlvbnM7XG59XG5cbmZ1bmN0aW9uIG5vbkN5Y2xpY1Byb2R1Y3Rpb25Gcm9tQ29tcG9uZW50KGNvbXBvbmVudCwgcHJvZHVjdGlvbnMsIG5vbkN5Y2xpY1Byb2R1Y3Rpb25zKSB7XG4gIGNvbnN0IGZpcnN0VmVydGV4ID0gY29tcG9uZW50LmdldEZpcnN0VmVydGV4KCksXG4gICAgICAgIGZpcnN0VmVydGV4TmFtZSA9IGZpcnN0VmVydGV4LmdldE5hbWUoKSxcbiAgICAgICAgbm9uQ3ljbGljUHJvZHVjdGlvbk5hbWUgPSBmaXJzdFZlcnRleE5hbWUsICAvLy9cbiAgICAgICAgbm9uQ3ljbGljUHJvZHVjdGlvbiA9IHBhcnNlclV0aWwuZmluZFByb2R1Y3Rpb24obm9uQ3ljbGljUHJvZHVjdGlvbk5hbWUsIHByb2R1Y3Rpb25zKTtcblxuICBub25DeWNsaWNQcm9kdWN0aW9ucy5wdXNoKG5vbkN5Y2xpY1Byb2R1Y3Rpb24pO1xufVxuXG5mdW5jdGlvbiBub25DeWNsaWNQcm9kdWN0aW9uc0Zyb21Db21wb25lbnQoY29tcG9uZW50LCBwcm9kdWN0aW9ucywgbm9uQ3ljbGljUHJvZHVjdGlvbnMpIHtcbiAgcHJvZHVjdGlvbnMgPSBwcm9kdWN0aW9uc0Zyb21Db21wb25lbnQoY29tcG9uZW50LCBwcm9kdWN0aW9ucyk7IC8vL1xuXG4gIGNvbnN0IGZpeGVkUHJvZHVjdGlvbnMgPSBmaXhlZFByb2R1Y3Rpb25zRnJvbVByb2R1Y3Rpb25zKHByb2R1Y3Rpb25zKSxcbiAgICAgICAgdW5pdFJ1bGVQcm9kdWN0aW9ucyA9IHVuaXRSdWxlUHJvZHVjdGlvbnNGcm9tUHJvZHVjdGlvbnMocHJvZHVjdGlvbnMpLFxuICAgICAgICByZW1vdmVkUHJvZHVjdGlvbnMgPSBbXSxcbiAgICAgICAgYWRkZWRQcm9kdWN0aW9ucyA9IFtdO1xuXG4gIGxldCB1bml0UnVsZVByb2R1Y3Rpb25zTGVuZ3RoID0gdW5pdFJ1bGVQcm9kdWN0aW9ucy5sZW5ndGg7XG5cbiAgd2hpbGUgKHVuaXRSdWxlUHJvZHVjdGlvbnNMZW5ndGggPiAwKSB7XG4gICAgbGV0IHVuaXRSdWxlUHJvZHVjdGlvbiA9IHVuaXRSdWxlUHJvZHVjdGlvbnMuc2hpZnQoKSxcbiAgICAgICAgdW5pdFJ1bGVQcm9kdWN0aW9uTmFtZSA9IHVuaXRSdWxlUHJvZHVjdGlvbi5nZXROYW1lKCk7XG5cbiAgICBjb25zdCByZW1vdmVkUHJvZHVjdGlvbiA9IHVuaXRSdWxlUHJvZHVjdGlvbjtcblxuICAgIHJlbW92ZWRQcm9kdWN0aW9ucy5wdXNoKHJlbW92ZWRQcm9kdWN0aW9uKTtcblxuICAgIGNvbnN0IHVuaXRSdWxlUHJvZHVjdGlvblVuaXRSdWxlUHJvZHVjdGlvbk5hbWUgPSB1bml0UnVsZVByb2R1Y3Rpb24uZ2V0VW5pdFJ1bGVQcm9kdWN0aW9uTmFtZSgpLFxuICAgICAgICAgIGZpeGVkUHJvZHVjdGlvbk5hbWUgPSB1bml0UnVsZVByb2R1Y3Rpb25Vbml0UnVsZVByb2R1Y3Rpb25OYW1lLCAgLy8vXG4gICAgICAgICAgYWRkZWRQcm9kdWN0aW9uTmFtZSA9IHVuaXRSdWxlUHJvZHVjdGlvbk5hbWUsICAvLy9cbiAgICAgICAgICBmaXhlZFByb2R1Y3Rpb24gPSBwYXJzZXJVdGlsLmZpbmRQcm9kdWN0aW9uKGZpeGVkUHJvZHVjdGlvbk5hbWUsIGZpeGVkUHJvZHVjdGlvbnMpO1xuXG4gICAgbGV0IGFkZGVkUHJvZHVjdGlvbiA9IHBhcnNlclV0aWwuZmluZFByb2R1Y3Rpb24oYWRkZWRQcm9kdWN0aW9uTmFtZSwgYWRkZWRQcm9kdWN0aW9ucyk7XG5cbiAgICBpZiAoYWRkZWRQcm9kdWN0aW9uID09PSBudWxsKSB7XG4gICAgICBhZGRlZFByb2R1Y3Rpb24gPSBQcm9kdWN0aW9uLmZyb21Qcm9kdWN0aW9uKGZpeGVkUHJvZHVjdGlvbik7XG5cbiAgICAgIGFkZGVkUHJvZHVjdGlvbi5zZXROYW1lKGFkZGVkUHJvZHVjdGlvbk5hbWUpO1xuXG4gICAgICBhZGRlZFByb2R1Y3Rpb25zLnB1c2goYWRkZWRQcm9kdWN0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZml4ZWRQcm9kdWN0aW9uUnVsZXMgPSBmaXhlZFByb2R1Y3Rpb24uZ2V0UnVsZXMoKTtcblxuICAgICAgYWRkZWRQcm9kdWN0aW9uLmNvbmNhdFJ1bGVzKGZpeGVkUHJvZHVjdGlvblJ1bGVzKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbnRlcm1lZGlhdGVQcm9kdWN0aW9uTmFtZSA9IHVuaXRSdWxlUHJvZHVjdGlvblVuaXRSdWxlUHJvZHVjdGlvbk5hbWUsIC8vL1xuICAgICAgICAgIGludGVybWVkaWF0ZVByb2R1Y3Rpb24gPSBwYXJzZXJVdGlsLmZpbmRQcm9kdWN0aW9uKGludGVybWVkaWF0ZVByb2R1Y3Rpb25OYW1lLCB1bml0UnVsZVByb2R1Y3Rpb25zKTtcblxuICAgIGlmIChpbnRlcm1lZGlhdGVQcm9kdWN0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBpbnRlcm1lZGlhdGVQcm9kdWN0aW9uVW5pdFJ1bGVQcm9kdWN0aW9uTmFtZSA9IGludGVybWVkaWF0ZVByb2R1Y3Rpb24uZ2V0VW5pdFJ1bGVQcm9kdWN0aW9uTmFtZSgpLFxuICAgICAgICAgICAgdW5pdFJ1bGVQcm9kdWN0aW9uVW5pdFJ1bGVQcm9kdWN0aW9uTmFtZSA9IGludGVybWVkaWF0ZVByb2R1Y3Rpb25Vbml0UnVsZVByb2R1Y3Rpb25OYW1lOyAgLy8vXG5cbiAgICAgIGlmICh1bml0UnVsZVByb2R1Y3Rpb25OYW1lICE9PSB1bml0UnVsZVByb2R1Y3Rpb25Vbml0UnVsZVByb2R1Y3Rpb25OYW1lKSB7XG4gICAgICAgIHVuaXRSdWxlUHJvZHVjdGlvbiA9IGZpbmRVbml0UnVsZVByb2R1Y3Rpb24odW5pdFJ1bGVQcm9kdWN0aW9uTmFtZSwgdW5pdFJ1bGVQcm9kdWN0aW9uVW5pdFJ1bGVQcm9kdWN0aW9uTmFtZSwgcmVtb3ZlZFByb2R1Y3Rpb25zKTtcblxuICAgICAgICBpZiAodW5pdFJ1bGVQcm9kdWN0aW9uID09PSBudWxsKSB7XG4gICAgICAgICAgdW5pdFJ1bGVQcm9kdWN0aW9uID0gVW5pdFJ1bGVQcm9kdWN0aW9uLmZyb21OYW1lQW5kVW5pdFJ1bGVQcm9kdWN0aW9uTmFtZSh1bml0UnVsZVByb2R1Y3Rpb25OYW1lLCB1bml0UnVsZVByb2R1Y3Rpb25Vbml0UnVsZVByb2R1Y3Rpb25OYW1lKTtcblxuICAgICAgICAgIHVuaXRSdWxlUHJvZHVjdGlvbnMudW5zaGlmdCh1bml0UnVsZVByb2R1Y3Rpb24pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdW5pdFJ1bGVQcm9kdWN0aW9uc0xlbmd0aCA9IHVuaXRSdWxlUHJvZHVjdGlvbnMubGVuZ3RoO1xuICB9XG5cbiAgbm9uQ3ljbGljUHJvZHVjdGlvbnNGcm9tRml4ZWRBbmRBZGRlZFByb2R1Y3Rpb25zKGZpeGVkUHJvZHVjdGlvbnMsIGFkZGVkUHJvZHVjdGlvbnMsIG5vbkN5Y2xpY1Byb2R1Y3Rpb25zKTtcbn1cblxuZnVuY3Rpb24gbm9uQ3ljbGljUHJvZHVjdGlvbnNGcm9tRml4ZWRBbmRBZGRlZFByb2R1Y3Rpb25zKGZpeGVkUHJvZHVjdGlvbnMsIGFkZGVkUHJvZHVjdGlvbnMsIG5vbkN5Y2xpY1Byb2R1Y3Rpb25zKSB7XG4gIGZpeGVkUHJvZHVjdGlvbnMuZm9yRWFjaChmdW5jdGlvbihmaXhlZFByb2R1Y3Rpb24pIHtcbiAgICBjb25zdCBub25DeWNsaWNQcm9kdWN0aW9uID0gZml4ZWRQcm9kdWN0aW9uLCAvLy9cbiAgICAgICAgICBub25DeWNsaWNQcm9kdWN0aW9uTmFtZSA9IG5vbkN5Y2xpY1Byb2R1Y3Rpb24uZ2V0TmFtZSgpLFxuICAgICAgICAgIGFkZGVkUHJvZHVjdGlvbk5hbWUgPSBub25DeWNsaWNQcm9kdWN0aW9uTmFtZSwgLy8vXG4gICAgICAgICAgYWRkZWRQcm9kdWN0aW9uID0gcGFyc2VyVXRpbC5maW5kUHJvZHVjdGlvbihhZGRlZFByb2R1Y3Rpb25OYW1lLCBhZGRlZFByb2R1Y3Rpb25zKTtcblxuICAgIGlmIChhZGRlZFByb2R1Y3Rpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGFkZGVkUHJvZHVjdGlvblJ1bGVzID0gYWRkZWRQcm9kdWN0aW9uLmdldFJ1bGVzKCk7XG5cbiAgICAgIG5vbkN5Y2xpY1Byb2R1Y3Rpb24uY29uY2F0UnVsZXMoYWRkZWRQcm9kdWN0aW9uUnVsZXMpO1xuICAgIH1cblxuICAgIG5vbkN5Y2xpY1Byb2R1Y3Rpb25zLnB1c2gobm9uQ3ljbGljUHJvZHVjdGlvbik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwcm9kdWN0aW9uc0Zyb21Db21wb25lbnQoY29tcG9uZW50LCBwcm9kdWN0aW9ucykge1xuICBwcm9kdWN0aW9ucyA9IGNvbXBvbmVudC5tYXBWZXJ0aWNlcyhmdW5jdGlvbih2ZXJ0ZXgpIHtcbiAgICBjb25zdCB2ZXJ0ZXhOYW1lID0gdmVydGV4LmdldE5hbWUoKSxcbiAgICAgICAgICBwcm9kdWN0aW9uTmFtZSA9IHZlcnRleE5hbWUsICAvLy9cbiAgICAgICAgICBwcm9kdWN0aW9uID0gcGFyc2VyVXRpbC5maW5kUHJvZHVjdGlvbihwcm9kdWN0aW9uTmFtZSwgcHJvZHVjdGlvbnMpO1xuXG4gICAgcmV0dXJuIHByb2R1Y3Rpb247XG4gIH0pO1xuXG4gIHJldHVybiBwcm9kdWN0aW9ucztcbn1cblxuZnVuY3Rpb24gdW5pdFJ1bGVQcm9kdWN0aW9uc0Zyb21Qcm9kdWN0aW9ucyhwcm9kdWN0aW9ucykge1xuICBjb25zdCB1bml0UnVsZVByb2R1Y3Rpb25zID0gcHJvZHVjdGlvbnMucmVkdWNlKGZ1bmN0aW9uKHVuaXRSdWxlUHJvZHVjdGlvbnMsIHByb2R1Y3Rpb24pIHtcbiAgICBjb25zdCBuYW1lID0gcHJvZHVjdGlvbi5nZXROYW1lKCksXG4gICAgICAgICAgdW5pdFJ1bGVzUHJvZHVjdGlvbiA9IFVuaXRSdWxlc1Byb2R1Y3Rpb24uZnJvbVByb2R1Y3Rpb24ocHJvZHVjdGlvbik7XG5cbiAgICB1bml0UnVsZXNQcm9kdWN0aW9uLmZvckVhY2hVbml0UnVsZShmdW5jdGlvbih1bml0UnVsZSkge1xuICAgICAgY29uc3QgdW5pdFJ1bGVQcm9kdWN0aW9uID0gVW5pdFJ1bGVQcm9kdWN0aW9uLmZyb21OYW1lQW5kVW5pdFJ1bGUobmFtZSwgdW5pdFJ1bGUpO1xuXG4gICAgICB1bml0UnVsZVByb2R1Y3Rpb25zLnB1c2godW5pdFJ1bGVQcm9kdWN0aW9uKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB1bml0UnVsZVByb2R1Y3Rpb25zO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIHVuaXRSdWxlUHJvZHVjdGlvbnM7XG59XG5cbmZ1bmN0aW9uIGZpeGVkUHJvZHVjdGlvbnNGcm9tUHJvZHVjdGlvbnMocHJvZHVjdGlvbnMpIHtcbiAgY29uc3QgZml4ZWRQcm9kdWN0aW9ucyA9IHByb2R1Y3Rpb25zLm1hcChmdW5jdGlvbihwcm9kdWN0aW9uKSB7XG4gICAgY29uc3Qgbm9uVW5pdFByb2R1Y3Rpb24gPSBOb25Vbml0UnVsZXNQcm9kdWN0aW9uLmZyb21Qcm9kdWN0aW9uKHByb2R1Y3Rpb24pLFxuICAgICAgICAgIGZpeGVkUHJvZHVjdGlvbiA9IG5vblVuaXRQcm9kdWN0aW9uOyAvLy9cbiAgICBcbiAgICByZXR1cm4gZml4ZWRQcm9kdWN0aW9uO1xuICB9KTtcbiAgXG4gIHJldHVybiBmaXhlZFByb2R1Y3Rpb25zO1xufVxuXG5mdW5jdGlvbiBmaW5kVW5pdFJ1bGVQcm9kdWN0aW9uKHByb2R1Y3Rpb25OYW1lLCB1bml0UnVsZVByb2R1Y3Rpb25OYW1lLCB1bml0UnVsZVByb2R1Y3Rpb25zKSB7XG4gIGNvbnN0IGZpcnN0UHJvZHVjdGlvbk5hbWUgPSBwcm9kdWN0aW9uTmFtZSwgLy8vXG4gICAgICAgIHNlY29uZFByb2R1Y3Rpb25OYW1lID0gdW5pdFJ1bGVQcm9kdWN0aW9uTmFtZTsgIC8vL1xuXG4gIGxldCBmb3VuZFVuaXRSdWxlUHJvZHVjdGlvbiA9IG51bGw7XG5cbiAgdW5pdFJ1bGVQcm9kdWN0aW9ucy5zb21lKGZ1bmN0aW9uKHVuaXRSdWxlUHJvZHVjdGlvbikge1xuICAgIGNvbnN0IHVuaXRSdWxlUHJvZHVjdGlvbkZvdW5kID0gdW5pdFJ1bGVQcm9kdWN0aW9uLmlzRm91bmRCeVByb2R1Y3Rpb25OYW1lcyhmaXJzdFByb2R1Y3Rpb25OYW1lLCBzZWNvbmRQcm9kdWN0aW9uTmFtZSk7XG5cbiAgICBpZiAodW5pdFJ1bGVQcm9kdWN0aW9uRm91bmQpIHtcbiAgICAgIGZvdW5kVW5pdFJ1bGVQcm9kdWN0aW9uID0gdW5pdFJ1bGVQcm9kdWN0aW9uO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IHVuaXRSdWxlUHJvZHVjdGlvbiA9IGZvdW5kVW5pdFJ1bGVQcm9kdWN0aW9uOyAvLy9cblxuICByZXR1cm4gdW5pdFJ1bGVQcm9kdWN0aW9uO1xufSIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ3ljbGUgPSByZXF1aXJlKCcuL2dyYXBoL2N5Y2xlJyksXG4gICAgICBTdGFjayA9IHJlcXVpcmUoJy4vZ3JhcGgvc3RhY2snKSxcbiAgICAgIFZlcnRleCA9IHJlcXVpcmUoJy4vZ3JhcGgvdmVydGV4JyksXG4gICAgICBDb21wb25lbnQgPSByZXF1aXJlKCcuL2dyYXBoL2NvbXBvbmVudCcpO1xuXG5jbGFzcyBHcmFwaCB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLnZlcnRleG1hcCA9IHt9O1xuICB9XG4gIFxuICBnZXRDeWNsZXMoKSB7XG4gICAgY29uc3QgY29tcG9uZW50cyA9IHRoaXMuZ2V0Q29tcG9uZW50cygpLFxuICAgICAgICAgIGN5Y2xlcyA9IGNvbXBvbmVudHMucmVkdWNlKGZ1bmN0aW9uKGN5Y2xlcywgY29tcG9uZW50KSB7XG4gICAgICAgICAgICBjb25zdCBjb21wb25lbnRDeWNsaWMgPSBjb21wb25lbnQuaXNDeWNsaWMoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudEN5Y2xpYykge1xuICAgICAgICAgICAgICBjb25zdCBjeWNsZSA9IEN5Y2xlLmZyb21Db21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGN5Y2xlcy5wdXNoKGN5Y2xlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGN5Y2xlcztcbiAgICAgICAgICB9LCBbXSk7XG4gICAgXG4gICAgcmV0dXJuIGN5Y2xlcztcbiAgfVxuICBcbiAgZ2V0VmVydGljZXMoKSB7XG4gICAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLnZlcnRleG1hcCksXG4gICAgICAgICAgdmVydGljZXMgPSBuYW1lcy5tYXAoZnVuY3Rpb24obmFtZSkge1xuICAgICAgICAgICAgY29uc3QgdmVydGV4ID0gdGhpcy52ZXJ0ZXhtYXBbbmFtZV07XG4gIFxuICAgICAgICAgICAgcmV0dXJuIHZlcnRleDtcbiAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0aWNlczsgICAgICAgIFxuICB9XG5cbiAgZ2V0Q29tcG9uZW50cygpIHtcbiAgICBjb25zdCBzdGFjayA9IG5ldyBTdGFjaygpLFxuICAgICAgICAgIHZlcnRpY2VzID0gdGhpcy5nZXRWZXJ0aWNlcygpLFxuICAgICAgICAgIGNvbXBvbmVudHMgPSBbXTtcblxuICAgIGxldCBpbmRleCA9IDA7XG5cbiAgICBmdW5jdGlvbiBzdHJvbmdseUNvbm5lY3RWZXJ0ZXgodmVydGV4KSB7XG4gICAgICBjb25zdCBsb3dlc3RJbmRleCA9IGluZGV4OyAgLy8vXG5cbiAgICAgIHZlcnRleC5zZXRJbmRleChpbmRleCk7XG5cbiAgICAgIHZlcnRleC5zZXRMb3dlc3RJbmRleChsb3dlc3RJbmRleCk7XG5cbiAgICAgIGluZGV4Kys7XG5cbiAgICAgIHN0YWNrLnB1c2godmVydGV4KTtcblxuICAgICAgY29uc3Qgc3VjY2Vzc29yVmVydGljZXMgPSB2ZXJ0ZXguZ2V0U3VjY2Vzc29yVmVydGljZXMoKTtcblxuICAgICAgc3VjY2Vzc29yVmVydGljZXMuZm9yRWFjaChmdW5jdGlvbihzdWNjZXNzb3JWZXJ0ZXgpIHtcbiAgICAgICAgY29uc3Qgc3VjY2Vzc29yVmVydGV4VW5pbmRleGVkID0gc3VjY2Vzc29yVmVydGV4LmlzVW5pbmRleGVkKCksXG4gICAgICAgICAgICAgIHN1Y2Nlc3NvclZlcnRleE5vdFN0cm9uZ2x5Q29ubmVjdGVkID0gc3VjY2Vzc29yVmVydGV4VW5pbmRleGVkOyAgLy8vXG5cbiAgICAgICAgaWYgKHN1Y2Nlc3NvclZlcnRleE5vdFN0cm9uZ2x5Q29ubmVjdGVkKSB7XG4gICAgICAgICAgc3Ryb25nbHlDb25uZWN0VmVydGV4KHN1Y2Nlc3NvclZlcnRleCk7XG5cbiAgICAgICAgICBjb25zdCBzdWNjZXNzb3JWZXJ0ZXhMb3dlc3RJbmRleCA9IHN1Y2Nlc3NvclZlcnRleC5nZXRMb3dlc3RJbmRleCgpO1xuXG4gICAgICAgICAgdmVydGV4LnVwZGF0ZUxvd2VzdEluZGV4KHN1Y2Nlc3NvclZlcnRleExvd2VzdEluZGV4KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBzdWNjZXNzb3JWZXJ0ZXhTdGFja2VkID0gc3VjY2Vzc29yVmVydGV4LmlzU3RhY2tlZCgpO1xuXG4gICAgICAgICAgaWYgKHN1Y2Nlc3NvclZlcnRleFN0YWNrZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHN1Y2Nlc3NvclZlcnRleEluZGV4ID0gc3VjY2Vzc29yVmVydGV4LmdldEluZGV4KCk7XG5cbiAgICAgICAgICAgIHZlcnRleC51cGRhdGVMb3dlc3RJbmRleChzdWNjZXNzb3JWZXJ0ZXhJbmRleCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgdmVydGV4TG93ZXN0ID0gdmVydGV4LmlzTG93ZXN0KCk7XG5cbiAgICAgIGlmICh2ZXJ0ZXhMb3dlc3QpIHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gQ29tcG9uZW50LmZyb21TdGFja0FuZFZlcnRleChzdGFjaywgdmVydGV4KTtcblxuICAgICAgICBjb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2ZXJ0aWNlcy5mb3JFYWNoKGZ1bmN0aW9uKHZlcnRleCkge1xuICAgICAgY29uc3QgdmVydGV4VW5pbmRleGVkID0gdmVydGV4LmlzVW5pbmRleGVkKCk7XG5cbiAgICAgIGlmICh2ZXJ0ZXhVbmluZGV4ZWQpIHtcbiAgICAgICAgc3Ryb25nbHlDb25uZWN0VmVydGV4KHZlcnRleCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY29tcG9uZW50cztcbiAgfVxuXG4gIGFkZFZlcnRleChuYW1lLCBkZXNjZW5kYW50VmVydGV4TmFtZXMpIHtcbiAgICBsZXQgc3VjY2Vzc29yVmVydGljZXMgPSBkZXNjZW5kYW50VmVydGV4TmFtZXMubWFwKGZ1bmN0aW9uKGRlc2NlbmRhbnRWZXJ0ZXhOYW1lKSB7XG4gICAgICBjb25zdCBzdWNjZXNzb3JWZXJ0ZXhOYW1lID0gZGVzY2VuZGFudFZlcnRleE5hbWU7ICAvLy9cblxuICAgICAgbGV0IHN1Y2Nlc3NvclZlcnRleCA9IHRoaXMudmVydGV4bWFwW3N1Y2Nlc3NvclZlcnRleE5hbWVdO1xuXG4gICAgICBpZiAoc3VjY2Vzc29yVmVydGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc3VjY2Vzc29yVmVydGV4ID0gVmVydGV4LmZyb21OYW1lKHN1Y2Nlc3NvclZlcnRleE5hbWUpO1xuXG4gICAgICAgIHRoaXMudmVydGV4bWFwW3N1Y2Nlc3NvclZlcnRleE5hbWVdID0gc3VjY2Vzc29yVmVydGV4O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3VjY2Vzc29yVmVydGV4O1xuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICBsZXQgdmVydGV4ID0gdGhpcy52ZXJ0ZXhtYXBbbmFtZV07XG5cbiAgICBpZiAodmVydGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHZlcnRleCA9IFZlcnRleC5mcm9tTmFtZShuYW1lKTtcblxuICAgICAgdGhpcy52ZXJ0ZXhtYXBbbmFtZV0gPSB2ZXJ0ZXg7XG4gICAgfVxuXG4gICAgc3VjY2Vzc29yVmVydGljZXMgPSBzdWNjZXNzb3JWZXJ0aWNlcy5jb25jYXQoW10pLnJldmVyc2UoKTsgLy8vXG5cbiAgICB2ZXJ0ZXguc2V0U3VjY2Vzc29yVmVydGljZXMoc3VjY2Vzc29yVmVydGljZXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Vbml0UnVsZXNQcm9kdWN0aW9ucyh1bml0UnVsZXNQcm9kdWN0aW9ucykge1xuICAgIGNvbnN0IGdyYXBoID0gbmV3IEdyYXBoKCk7XG4gIFxuICAgIHVuaXRSdWxlc1Byb2R1Y3Rpb25zLmZvckVhY2goZnVuY3Rpb24odW5pdFJ1bGVzUHJvZHVjdGlvbikge1xuICAgICAgY29uc3QgcHJvZHVjdGlvbk5hbWUgPSB1bml0UnVsZXNQcm9kdWN0aW9uLmdldE5hbWUoKSxcbiAgICAgICAgICAgIHByb2R1Y3Rpb25OYW1lcyA9IHVuaXRSdWxlc1Byb2R1Y3Rpb24uZ2V0UHJvZHVjdGlvbk5hbWVzKCksXG4gICAgICAgICAgICB2ZXJ0ZXhOYW1lID0gcHJvZHVjdGlvbk5hbWUsICAvLy9cbiAgICAgICAgICAgIGRlc2NlbmRhbnRWZXJ0ZXhOYW1lcyA9IHByb2R1Y3Rpb25OYW1lczsgLy8vXG4gIFxuICAgICAgZ3JhcGguYWRkVmVydGV4KHZlcnRleE5hbWUsIGRlc2NlbmRhbnRWZXJ0ZXhOYW1lcyk7XG4gICAgfSk7XG4gIFxuICAgIHJldHVybiBncmFwaDtcbiAgfSAgXG59XG5cbm1vZHVsZS5leHBvcnRzID0gR3JhcGg7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRpY2VzKSB7XG4gICAgdGhpcy52ZXJ0aWNlcyA9IHZlcnRpY2VzO1xuICB9XG4gIFxuICBnZXRWZXJ0aWNlcygpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0aWNlcztcbiAgfVxuXG4gIGdldEZpcnN0VmVydGV4KCkge1xuICAgIGNvbnN0IGZpcnN0VmVydGV4ID0gZmlyc3QodGhpcy52ZXJ0aWNlcyk7XG4gICAgXG4gICAgcmV0dXJuIGZpcnN0VmVydGV4O1xuICB9XG4gIFxuICBpc0N5Y2xpYygpIHtcbiAgICBjb25zdCB2ZXJ0aWNlc0xlbmd0aCA9IHRoaXMudmVydGljZXMubGVuZ3RoLFxuICAgICAgICAgIGN5Y2xpYyA9ICh2ZXJ0aWNlc0xlbmd0aCA+IDEpOyAgLy8vXG4gICAgXG4gICAgcmV0dXJuIGN5Y2xpYztcbiAgfVxuXG4gIGlzTm9uQ3ljbGljKCkge1xuICAgIGNvbnN0IGN5Y2xpYyA9IHRoaXMuaXNDeWNsaWMoKSxcbiAgICAgICAgICBub25DeWNsaWMgPSAhY3ljbGljO1xuICAgIFxuICAgIHJldHVybiBub25DeWNsaWM7XG4gIH1cbiAgXG4gIG1hcFZlcnRpY2VzKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLnZlcnRpY2VzLm1hcChjYWxsYmFjayk7IH1cbiAgXG4gIHN0YXRpYyBmcm9tU3RhY2tBbmRWZXJ0ZXgoc3RhY2ssIHZlcnRleCkge1xuICAgIGNvbnN0IHN0YWNrVmVydGljZXMgPSBbXTtcbiAgICBcbiAgICBsZXQgc3RhY2tWZXJ0ZXg7XG5cbiAgICBkbyB7XG4gICAgICBzdGFja1ZlcnRleCA9IHN0YWNrLnBvcCgpO1xuXG4gICAgICBzdGFja1ZlcnRpY2VzLnB1c2goc3RhY2tWZXJ0ZXgpXG4gICAgfSB3aGlsZSAoc3RhY2tWZXJ0ZXggIT09IHZlcnRleCk7XG4gICAgXG4gICAgY29uc3QgdmVydGljZXMgPSBzdGFja1ZlcnRpY2VzLCAvLy8gXG4gICAgICAgICAgY29tcG9uZW50ID0gbmV3IENvbXBvbmVudCh2ZXJ0aWNlcyk7XG5cbiAgICByZXR1cm4gY29tcG9uZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50O1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgQ3ljbGUge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcykge1xuICAgIHRoaXMudmVydGljZXMgPSB2ZXJ0aWNlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgIGNvbnN0IHZlcnRpY2VzID0gY29tcG9uZW50LmdldFZlcnRpY2VzKCksXG4gICAgICAgICAgY3ljbGUgPSBuZXcgQ3ljbGUodmVydGljZXMpO1xuICAgIFxuICAgIHJldHVybiBjeWNsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEN5Y2xlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBTdGFjayB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudmVydGljZXMgPSBbXTtcbiAgfVxuICBcbiAgcG9wKCkge1xuICAgIGNvbnN0IHZlcnRleCA9IHRoaXMudmVydGljZXMucG9wKCksXG4gICAgICAgICAgc3RhY2tlZCA9IGZhbHNlO1xuICAgIFxuICAgIHZlcnRleC5zZXRTdGFja2VkKHN0YWNrZWQpO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cbiAgXG4gIHB1c2godmVydGV4KSB7XG4gICAgY29uc3Qgc3RhY2tlZCA9IHRydWU7XG4gICAgXG4gICAgdmVydGV4LnNldFN0YWNrZWQoc3RhY2tlZCk7XG4gICAgXG4gICAgdGhpcy52ZXJ0aWNlcy5wdXNoKHZlcnRleCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTdGFjaztcbiIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgVmVydGV4IHtcbiAgY29uc3RydWN0b3IobmFtZSwgaW5kZXgsIHN0YWNrZWQsIHZpc2l0ZWQsIGxvd2VzdEluZGV4LCBzdWNjZXNzb3JWZXJ0aWNlcykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgIHRoaXMuc3RhY2tlZCA9IHN0YWNrZWQ7XG4gICAgdGhpcy52aXNpdGVkID0gdmlzaXRlZDtcbiAgICB0aGlzLmxvd2VzdEluZGV4ID0gbG93ZXN0SW5kZXg7XG4gICAgdGhpcy5zdWNjZXNzb3JWZXJ0aWNlcyA9IHN1Y2Nlc3NvclZlcnRpY2VzO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0SW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5kZXg7XG4gIH1cblxuICBpc1N0YWNrZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhY2tlZDtcbiAgfVxuXG4gIGlzVmlzaXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy52aXNpdGVkO1xuICB9XG5cbiAgZ2V0TG93ZXN0SW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMubG93ZXN0SW5kZXg7XG4gIH1cblxuICBnZXRTdWNjZXNzb3JWZXJ0aWNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5zdWNjZXNzb3JWZXJ0aWNlcztcbiAgfVxuICBcbiAgaXNVbmluZGV4ZWQoKSB7XG4gICAgY29uc3QgdW5pbmRleGVkID0gKHRoaXMuaW5kZXggPCAwKTsgLy8vXG4gICAgXG4gICAgcmV0dXJuIHVuaW5kZXhlZDtcbiAgfVxuICBcbiAgaXNMb3dlc3QoKSB7XG4gICAgY29uc3QgbG93ZXN0ID0gKHRoaXMuaW5kZXggPT09IHRoaXMubG93ZXN0SW5kZXgpOyAvLy9cbiAgICBcbiAgICByZXR1cm4gbG93ZXN0O1xuICB9XG5cbiAgc2V0SW5kZXgoaW5kZXgpIHtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gIH1cblxuICBzZXRTdGFja2VkKHN0YWNrZWQpIHtcbiAgICB0aGlzLnN0YWNrZWQgPSBzdGFja2VkO1xuICB9XG5cbiAgc2V0VmlzaXRlZCh2aXNpdGVkKSB7XG4gICAgdGhpcy52aXNpdGVkID0gdmlzaXRlZDtcbiAgfVxuICBcbiAgc2V0TG93ZXN0SW5kZXgobG93ZXN0SW5kZXgpIHtcbiAgICB0aGlzLmxvd2VzdEluZGV4ID0gbG93ZXN0SW5kZXg7XG4gIH1cblxuICBzZXRTdWNjZXNzb3JWZXJ0aWNlcyhzdWNjZXNzb3JWZXJ0aWNlcykge1xuICAgIHRoaXMuc3VjY2Vzc29yVmVydGljZXMgPSAgc3VjY2Vzc29yVmVydGljZXM7XG4gIH1cbiAgXG4gIHVwZGF0ZUxvd2VzdEluZGV4KGxvd2VzdEluZGV4KSB7XG4gICAgaWYgKGxvd2VzdEluZGV4IDwgdGhpcy5sb3dlc3RJbmRleCkge1xuICAgICAgdGhpcy5sb3dlc3RJbmRleCA9IGxvd2VzdEluZGV4O1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZShuYW1lKSB7XG4gICAgY29uc3QgaW5kZXggPSAtMSxcbiAgICAgICAgICBzdGFja2VkID0gZmFsc2UsXG4gICAgICAgICAgdmlzaXRlZCA9IGZhbHNlLFxuICAgICAgICAgIGxvd2VzdEluZGV4ID0gLTEsXG4gICAgICAgICAgc3VjY2Vzc29yVmVydGljZXMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXggPSBuZXcgVmVydGV4KG5hbWUsIGluZGV4LCBzdGFja2VkLCB2aXNpdGVkLCBsb3dlc3RJbmRleCwgc3VjY2Vzc29yVmVydGljZXMpO1xuXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZlcnRleDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmlnaHRSZWN1cnNpdmVQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3JpZ2h0UmVjdXJzaXZlJyksXG4gICAgICBOb25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9ub25MZWZ0UmVjdXJzaXZlJyksXG4gICAgICBOb25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vbm9uSW1wbGljaXRseUxlZnRSZWN1cnNpdmUnKTtcblxuY2xhc3MgbGVmdFJlY3Vyc2lvbiB7XG4gIHN0YXRpYyBlbGltaW5hdGUocHJvZHVjdGlvbnMpIHtcbiAgICBjb25zdCBub25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbnMgPSBbXSxcbiAgICAgICAgICByaWdodFJlY3Vyc2l2ZVByb2R1Y3Rpb25zID0gW107XG5cbiAgICBwcm9kdWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKHByb2R1Y3Rpb24sIGluZGV4KSB7XG4gICAgICBjb25zdCBiZWdpbiA9IDAsXG4gICAgICAgICAgICBlbmQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgcHJldmlvdXNOb25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbnMgPSBub25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbnMuc2xpY2UoYmVnaW4sIGVuZCksXG4gICAgICAgICAgICBwcmV2aW91c1Byb2R1Y3Rpb25zID0gcHJldmlvdXNOb25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbnMsICAvLy9cbiAgICAgICAgICAgIHByb2R1Y3Rpb25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZSA9IHByb2R1Y3Rpb24uaXNJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZShwcmV2aW91c1Byb2R1Y3Rpb25zKTtcblxuICAgICAgaWYgKHByb2R1Y3Rpb25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZSkge1xuICAgICAgICBjb25zdCBub25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24gPSBOb25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24uZnJvbVByb2R1Y3Rpb25BbmRQcmV2aW91c1Byb2R1Y3Rpb25zKHByb2R1Y3Rpb24sIHByZXZpb3VzUHJvZHVjdGlvbnMpO1xuXG4gICAgICAgIHByb2R1Y3Rpb24gPSBub25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb247ICAvLy9cbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvZHVjdGlvbkxlZnRSZWN1cnNpdmUgPSBwcm9kdWN0aW9uLmlzTGVmdFJlY3Vyc2l2ZSgpO1xuXG4gICAgICBpZiAocHJvZHVjdGlvbkxlZnRSZWN1cnNpdmUpIHtcbiAgICAgICAgY29uc3Qgbm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24gPSBOb25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbi5mcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uKSxcbiAgICAgICAgICAgICAgcmlnaHRSZWN1cnNpdmVQcm9kdWN0aW9uID0gUmlnaHRSZWN1cnNpdmVQcm9kdWN0aW9uLmZyb21Qcm9kdWN0aW9uKHByb2R1Y3Rpb24pO1xuXG4gICAgICAgIG5vbkxlZnRSZWN1cnNpdmVQcm9kdWN0aW9ucy5wdXNoKG5vbkxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uKTtcblxuICAgICAgICByaWdodFJlY3Vyc2l2ZVByb2R1Y3Rpb25zLnB1c2gocmlnaHRSZWN1cnNpdmVQcm9kdWN0aW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5vbkxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uID0gcHJvZHVjdGlvbjsgIC8vL1xuXG4gICAgICAgIG5vbkxlZnRSZWN1cnNpdmVQcm9kdWN0aW9ucy5wdXNoKG5vbkxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHByb2R1Y3Rpb25zID0gW10uY29uY2F0KG5vbkxlZnRSZWN1cnNpdmVQcm9kdWN0aW9ucykuY29uY2F0KHJpZ2h0UmVjdXJzaXZlUHJvZHVjdGlvbnMpO1xuXG4gICAgcmV0dXJuIHByb2R1Y3Rpb25zO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGVmdFJlY3Vyc2lvbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ydWxlJyksXG4gICAgICBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3Byb2R1Y3Rpb24nKTtcblxuY2xhc3MgTm9uSW1wbGljaXRseUxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uIGV4dGVuZHMgUHJvZHVjdGlvbiB7XG4gIHN0YXRpYyBmcm9tUHJvZHVjdGlvbkFuZFByZXZpb3VzUHJvZHVjdGlvbnMocHJvZHVjdGlvbiwgcHJldmlvdXNQcm9kdWN0aW9ucykge1xuICAgIGNvbnN0IHByb2R1Y3Rpb25OYW1lID0gcHJvZHVjdGlvbi5nZXROYW1lKCksXG4gICAgICAgICAgcHJvZHVjdGlvbk5vZGUgPSBwcm9kdWN0aW9uLmdldE5vZGUoKSxcbiAgICAgICAgICBuYW1lID0gcHJvZHVjdGlvbk5hbWUsICAvLy9cbiAgICAgICAgICBydWxlcyA9IHJ1bGVzRnJvbVByb2R1Y3Rpb25BbmRQcmV2aW91c1Byb2R1Y3Rpb25zKHByb2R1Y3Rpb24sIHByZXZpb3VzUHJvZHVjdGlvbnMpLFxuICAgICAgICAgIE5vZGUgPSBwcm9kdWN0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgIG5vbkltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbiA9IG5ldyBOb25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24obmFtZSwgcnVsZXMsIE5vZGUpO1xuXG4gICAgcmV0dXJuIG5vbkltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vbkltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbjtcblxuZnVuY3Rpb24gcnVsZXNGcm9tUHJvZHVjdGlvbkFuZFByZXZpb3VzUHJvZHVjdGlvbnMocHJvZHVjdGlvbiwgcHJldmlvdXNQcm9kdWN0aW9ucykge1xuICBjb25zdCBwcm9kdWN0aW9uUnVsZXMgPSBwcm9kdWN0aW9uLmdldFJ1bGVzKCksXG4gICAgICAgIHJ1bGVzID0gcHJvZHVjdGlvblJ1bGVzLnJlZHVjZShmdW5jdGlvbihydWxlcywgcHJvZHVjdGlvblJ1bGUpIHtcbiAgICAgICAgICBjb25zdCBwcm9kdWN0aW9uUnVsZUltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUHJldmlvdXNQcm9kdWN0aW9uID0gcHJvZHVjdGlvblJ1bGUuaW1wbGljaXRseUxlZnRSZWN1cnNpdmVQcmV2aW91c1Byb2R1Y3Rpb24ocHJldmlvdXNQcm9kdWN0aW9ucyk7XG5cbiAgICAgICAgICBpZiAocHJvZHVjdGlvblJ1bGVJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVByZXZpb3VzUHJvZHVjdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgcHJldmlvdXNQcm9kdWN0aW9uID0gcHJvZHVjdGlvblJ1bGVJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVByZXZpb3VzUHJvZHVjdGlvbiwgLy8vXG4gICAgICAgICAgICAgICAgICBydWxlc1dpdGhQcmV2aW91c1Byb2R1Y3Rpb25JbmxpbmVGcm9tUHJvZHVjdGlvbklubGluZSA9IHJ1bGVzV2l0aFByZXZpb3VzUHJvZHVjdGlvbklubGluZUZyb21Qcm9kdWN0aW9uUnVsZUFuZFByZXZpb3VzUHJvZHVjdGlvbihwcm9kdWN0aW9uUnVsZSwgcHJldmlvdXNQcm9kdWN0aW9uKTtcblxuICAgICAgICAgICAgcnVsZXMgPSBydWxlcy5jb25jYXQocnVsZXNXaXRoUHJldmlvdXNQcm9kdWN0aW9uSW5saW5lRnJvbVByb2R1Y3Rpb25JbmxpbmUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBydWxlID0gcHJvZHVjdGlvblJ1bGU7XG5cbiAgICAgICAgICAgIHJ1bGVzLnB1c2gocnVsZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHJ1bGVzO1xuICAgICAgICB9LCBbXSk7XG5cbiAgcmV0dXJuIHJ1bGVzO1xufVxuXG5mdW5jdGlvbiBydWxlc1dpdGhQcmV2aW91c1Byb2R1Y3Rpb25JbmxpbmVGcm9tUHJvZHVjdGlvblJ1bGVBbmRQcmV2aW91c1Byb2R1Y3Rpb24ocHJvZHVjdGlvblJ1bGUsIHByZXZpb3VzUHJvZHVjdGlvbikge1xuICBjb25zdCBwcmV2aW91c1Byb2R1Y3Rpb25SdWxlcyA9IHByZXZpb3VzUHJvZHVjdGlvbi5nZXRSdWxlcygpLFxuICAgICAgICBydWxlc1dpdGhQcmV2aW91c1Byb2R1Y3Rpb25JbmxpbmUgPSBwcmV2aW91c1Byb2R1Y3Rpb25SdWxlcy5tYXAoZnVuY3Rpb24ocHJldmlvdXNQcm9kdWN0aW9uUnVsZSkge1xuICAgICAgICAgIGNvbnN0IHByZXZpb3VzUHJvZHVjdGlvblJ1bGVQYXJ0cyA9IHByZXZpb3VzUHJvZHVjdGlvblJ1bGUuZ2V0UGFydHMoKSxcbiAgICAgICAgICAgICAgICBwcm9kdWN0aW9uUnVsZUFsbEJ1dEZpcnN0UGFydHMgPSBwcm9kdWN0aW9uUnVsZS5nZXRBbGxCdXRGaXJzdFBhcnRzKCksXG4gICAgICAgICAgICAgICAgcnVsZVdpdGhQcmV2aW91c1Byb2R1Y3Rpb25JbmxpbmVQYXJ0cyA9IFtdLmNvbmNhdChwcmV2aW91c1Byb2R1Y3Rpb25SdWxlUGFydHMpLmNvbmNhdChwcm9kdWN0aW9uUnVsZUFsbEJ1dEZpcnN0UGFydHMpLFxuICAgICAgICAgICAgICAgIHJ1bGVXaXRoUHJldmlvdXNQcm9kdWN0aW9uSW5saW5lID0gbmV3IFJ1bGUocnVsZVdpdGhQcmV2aW91c1Byb2R1Y3Rpb25JbmxpbmVQYXJ0cyk7XG5cbiAgICAgICAgICByZXR1cm4gcnVsZVdpdGhQcmV2aW91c1Byb2R1Y3Rpb25JbmxpbmU7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBydWxlc1dpdGhQcmV2aW91c1Byb2R1Y3Rpb25JbmxpbmU7XG59XG5cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ydWxlJyksXG4gICAgICBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3Byb2R1Y3Rpb24nKSxcbiAgICAgIFJpZ2h0UmVjdXJzaXZlUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uL3Byb2R1Y3Rpb24vcmlnaHRSZWN1cnNpdmUnKTtcblxuY2xhc3MgTm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24gZXh0ZW5kcyBQcm9kdWN0aW9uIHtcbiAgc3RhdGljIGZyb21Qcm9kdWN0aW9uKHByb2R1Y3Rpb24pIHtcbiAgICBjb25zdCBwcm9kdWN0aW9uTmFtZSA9IHByb2R1Y3Rpb24uZ2V0TmFtZSgpLFxuICAgICAgICAgIHByb2R1Y3Rpb25Ob2RlID0gcHJvZHVjdGlvbi5nZXROb2RlKCksXG4gICAgICAgICAgbmFtZSA9IHByb2R1Y3Rpb25OYW1lLCAgLy8vXG4gICAgICAgICAgcnVsZXMgPSBydWxlc0Zyb21Qcm9kdWN0aW9uKHByb2R1Y3Rpb24pLFxuICAgICAgICAgIE5vZGUgPSBwcm9kdWN0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgIG5vbkxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uID0gbmV3IFByb2R1Y3Rpb24obmFtZSwgcnVsZXMsIE5vZGUpO1xuICAgIFxuICAgIHJldHVybiBub25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vbkxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uO1xuXG5mdW5jdGlvbiBydWxlc0Zyb21Qcm9kdWN0aW9uKHByb2R1Y3Rpb24pIHtcbiAgY29uc3QgcHJvZHVjdGlvbk5vbkxlZnRSZWN1cnNpdmVSdWxlcyA9IHByb2R1Y3Rpb24uZ2V0Tm9uTGVmdFJlY3Vyc2l2ZVJ1bGVzKCksXG4gICAgICAgIHJ1bGVzID0gcHJvZHVjdGlvbk5vbkxlZnRSZWN1cnNpdmVSdWxlcy5tYXAoZnVuY3Rpb24ocHJvZHVjdGlvbk5vbkxlZnRSZWN1cnNpdmVSdWxlKSB7XG4gICAgICAgICAgY29uc3QgcHJvZHVjdGlvbk5vbkxlZnRSZWN1cnNpdmVSdWxlUGFydHMgPSBwcm9kdWN0aW9uTm9uTGVmdFJlY3Vyc2l2ZVJ1bGUuZ2V0UGFydHMoKSxcbiAgICAgICAgICAgICAgICBwcm9kdWN0aW9uTmFtZVBhcnQgPSBSaWdodFJlY3Vyc2l2ZVByb2R1Y3Rpb24ucHJvZHVjdGlvbk5hbWVQYXJ0RnJvbVByb2R1Y3Rpb24ocHJvZHVjdGlvbiksXG4gICAgICAgICAgICAgICAgcGFydHMgPSBbXS5jb25jYXQocHJvZHVjdGlvbk5vbkxlZnRSZWN1cnNpdmVSdWxlUGFydHMpLmNvbmNhdChwcm9kdWN0aW9uTmFtZVBhcnQpLFxuICAgICAgICAgICAgICAgIHJ1bGUgPSBuZXcgUnVsZShwYXJ0cyk7XG4gIFxuICAgICAgICAgIHJldHVybiBydWxlO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gcnVsZXM7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IE5vblVuaXRSdWxlID0gcmVxdWlyZSgnLi4vcnVsZS9ub25Vbml0JyksXG4gICAgICBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3Byb2R1Y3Rpb24nKTtcblxuY2xhc3MgTm9uVW5pdFJ1bGVzUHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBzdGF0aWMgZnJvbVByb2R1Y3Rpb24ocHJvZHVjdGlvbikge1xuICAgIGNvbnN0IG5vblVuaXRSdWxlcyA9IG5vblVuaXRSdWxlc0Zyb21Qcm9kdWN0aW9uKHByb2R1Y3Rpb24pLFxuICAgICAgICAgIG5hbWUgPSBwcm9kdWN0aW9uLmdldE5hbWUoKSxcbiAgICAgICAgICBydWxlcyA9IG5vblVuaXRSdWxlcywgLy8vXG4gICAgICAgICAgTm9kZSA9IHByb2R1Y3Rpb24uZ2V0Tm9kZSgpLFxuICAgICAgICAgIG5vblVuaXRSdWxlc1Byb2R1Y3Rpb24gPSBuZXcgTm9uVW5pdFJ1bGVzUHJvZHVjdGlvbihuYW1lLCBydWxlcywgTm9kZSk7XG5cbiAgICByZXR1cm4gbm9uVW5pdFJ1bGVzUHJvZHVjdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vblVuaXRSdWxlc1Byb2R1Y3Rpb247XG5cbmZ1bmN0aW9uIG5vblVuaXRSdWxlc0Zyb21Qcm9kdWN0aW9uKHByb2R1Y3Rpb24pIHtcbiAgY29uc3QgcnVsZXMgPSBwcm9kdWN0aW9uLmdldFJ1bGVzKCksXG4gICAgICAgIG5vblVuaXRSdWxlcyA9IHJ1bGVzLnJlZHVjZShmdW5jdGlvbihub25Vbml0UnVsZXMsIHJ1bGUpIHtcbiAgICAgICAgICBjb25zdCBub25Vbml0UnVsZSA9IE5vblVuaXRSdWxlLmZyb21SdWxlKHJ1bGUpO1xuXG4gICAgICAgICAgaWYgKG5vblVuaXRSdWxlICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBydWxlID0gbm9uVW5pdFJ1bGU7XG5cbiAgICAgICAgICAgIG5vblVuaXRSdWxlcy5wdXNoKG5vblVuaXRSdWxlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gbm9uVW5pdFJ1bGVzO1xuICAgICAgICB9LCBbXSk7XG5cbiAgcmV0dXJuIG5vblVuaXRSdWxlcztcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ydWxlJyksXG4gICAgICBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3Byb2R1Y3Rpb24nKSxcbiAgICAgIEVwc2lsb25QYXJ0ID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3BhcnQvZXBzaWxvbicpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKSxcbiAgICAgIFByb2R1Y3Rpb25OYW1lUGFydCA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9wYXJ0L3Byb2R1Y3Rpb25OYW1lJyk7XG5cbmNsYXNzIFJpZ2h0UmVjdXJzaXZlUHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBzdGF0aWMgcHJvZHVjdGlvbk5hbWVQYXJ0RnJvbVByb2R1Y3Rpb24ocHJvZHVjdGlvbikge1xuICAgIGNvbnN0IHByb2R1Y3Rpb25OYW1lID0gcHJvZHVjdGlvbi5nZXROYW1lKCksXG4gICAgICAgICAgbmFtZSA9IHByb2R1Y3Rpb25OYW1lLCAvLy9cbiAgICAgICAgICBub1doaXRlc3BhY2UgPSBmYWxzZSwgLy8vXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWVQYXJ0ID0gbmV3IFByb2R1Y3Rpb25OYW1lUGFydChuYW1lLCBub1doaXRlc3BhY2UpO1xuICAgIFxuICAgIHJldHVybiBwcm9kdWN0aW9uTmFtZVBhcnQ7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uKSB7XG4gICAgY29uc3QgcHJvZHVjdGlvbk5hbWUgPSBwcm9kdWN0aW9uLmdldE5hbWUoKSxcbiAgICAgICAgICBuYW1lID0gcHJvZHVjdGlvbk5hbWUsIC8vL1xuICAgICAgICAgIHJ1bGVzID0gcnVsZXNGcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uKSxcbiAgICAgICAgICBOb2RlID0gTm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICByaWdodFJlY3Vyc2l2ZVByb2R1Y3Rpb24gPSBuZXcgUHJvZHVjdGlvbihuYW1lLCBydWxlcywgTm9kZSk7XG4gICAgXG4gICAgcmV0dXJuIHJpZ2h0UmVjdXJzaXZlUHJvZHVjdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJpZ2h0UmVjdXJzaXZlUHJvZHVjdGlvbjtcblxuZnVuY3Rpb24gcnVsZXNGcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uKSB7XG4gIGNvbnN0IHJpZ2h0UmVjdXJzaXZlUnVsZXMgPSByaWdodFJlY3Vyc2l2ZVJ1bGVzRnJvbVByb2R1Y3Rpb24ocHJvZHVjdGlvbiksXG4gICAgICAgIGVwc2lsb25QYXJ0ID0gbmV3IEVwc2lsb25QYXJ0KCksXG4gICAgICAgIGVwc2lsb25QYXJ0cyA9IFtcbiAgICAgICAgICBlcHNpbG9uUGFydFxuICAgICAgICBdLFxuICAgICAgICBlcHNpbG9uUGFydFJ1bGUgPSBuZXcgUnVsZShlcHNpbG9uUGFydHMpLFxuICAgICAgICBydWxlcyA9IFtdLmNvbmNhdChyaWdodFJlY3Vyc2l2ZVJ1bGVzKS5jb25jYXQoZXBzaWxvblBhcnRSdWxlKTtcblxuICByZXR1cm4gcnVsZXM7XG59XG5cbmZ1bmN0aW9uIHJpZ2h0UmVjdXJzaXZlUnVsZXNGcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uKSB7XG4gIGNvbnN0IHByb2R1Y3Rpb25MZWZ0UmVjdXJzaXZlUnVsZXMgPSBwcm9kdWN0aW9uLmdldExlZnRSZWN1cnNpdmVSdWxlcygpLFxuICAgICAgICByaWdodFJlY3Vyc2l2ZVJ1bGVzID0gcHJvZHVjdGlvbkxlZnRSZWN1cnNpdmVSdWxlcy5tYXAoZnVuY3Rpb24ocHJvZHVjdGlvbkxlZnRSZWN1cnNpdmVSdWxlKSB7XG4gICAgICAgICAgY29uc3QgcHJvZHVjdGlvbkxlZnRSZWN1cnNpdmVSdWxlQWxsQnV0Rmlyc3RQYXJ0cyA9IHByb2R1Y3Rpb25MZWZ0UmVjdXJzaXZlUnVsZS5nZXRBbGxCdXRGaXJzdFBhcnRzKCksXG4gICAgICAgICAgICAgICAgcHJvZHVjdGlvbk5hbWVQYXJ0ID0gUmlnaHRSZWN1cnNpdmVQcm9kdWN0aW9uLnByb2R1Y3Rpb25OYW1lUGFydEZyb21Qcm9kdWN0aW9uKHByb2R1Y3Rpb24pLFxuICAgICAgICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlUnVsZVBhcnRzID0gW10uY29uY2F0KHByb2R1Y3Rpb25MZWZ0UmVjdXJzaXZlUnVsZUFsbEJ1dEZpcnN0UGFydHMpLmNvbmNhdChwcm9kdWN0aW9uTmFtZVBhcnQpLFxuICAgICAgICAgICAgICAgIHJpZ2h0UmVjdXJzaXZlUnVsZSA9IG5ldyBSdWxlKHJpZ2h0UmVjdXJzaXZlUnVsZVBhcnRzKTtcblxuICAgICAgICAgIHJldHVybiByaWdodFJlY3Vyc2l2ZVJ1bGU7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiByaWdodFJlY3Vyc2l2ZVJ1bGVzO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBVbml0UnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUvdW5pdCcpLFxuICAgICAgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9wcm9kdWN0aW9uJykgO1xuXG5jbGFzcyBVbml0UnVsZVByb2R1Y3Rpb24gZXh0ZW5kcyBQcm9kdWN0aW9uIHtcbiAgZ2V0VW5pdFJ1bGVQcm9kdWN0aW9uTmFtZSgpIHtcbiAgICBjb25zdCBydWxlcyA9IHRoaXMuZ2V0UnVsZXMoKSxcbiAgICAgICAgICBmaXJzdFJ1bGUgPSBmaXJzdChydWxlcyksXG4gICAgICAgICAgdW5pdFJ1bGUgPSBmaXJzdFJ1bGUsIC8vL1xuICAgICAgICAgIHVuaXRSdWxlUHJvZHVjdGlvbk5hbWUgPSB1bml0UnVsZS5nZXRQcm9kdWN0aW9uTmFtZSgpO1xuICAgIFxuICAgIHJldHVybiB1bml0UnVsZVByb2R1Y3Rpb25OYW1lO1xuICB9XG5cbiAgaXNGb3VuZEJ5UHJvZHVjdGlvbk5hbWVzKGZpcnN0UHJvZHVjdGlvbk5hbWUsIHNlY29uZFByb2R1Y3Rpb25OYW1lKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIHVuaXRSdWxlUHJvZHVjdGlvbk5hbWUgPSB0aGlzLmdldFVuaXRSdWxlUHJvZHVjdGlvbk5hbWUoKSxcbiAgICAgICAgICBmb3VuZCA9ICgobmFtZSA9PT0gZmlyc3RQcm9kdWN0aW9uTmFtZSkgJiYgKHVuaXRSdWxlUHJvZHVjdGlvbk5hbWUgPT09IHNlY29uZFByb2R1Y3Rpb25OYW1lKSk7ICAvLy9cbiAgICBcbiAgICByZXR1cm4gZm91bmQ7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tTmFtZUFuZFVuaXRSdWxlKG5hbWUsIHVuaXRSdWxlKSB7XG4gICAgY29uc3QgcnVsZXMgPSBbXG4gICAgICAgICAgICB1bml0UnVsZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IG51bGwsXG4gICAgICAgICAgdW5pdFJ1bGVQcm9kdWN0aW9uID0gbmV3IFVuaXRSdWxlUHJvZHVjdGlvbihuYW1lLCBydWxlcywgTm9kZSk7XG4gICAgXG4gICAgcmV0dXJuIHVuaXRSdWxlUHJvZHVjdGlvbjsgICAgICAgICAgXG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tTmFtZUFuZFVuaXRSdWxlUHJvZHVjdGlvbk5hbWUobmFtZSwgdW5pdFJ1bGVQcm9kdWN0aW9uTmFtZSkge1xuICAgIGNvbnN0IHByb2R1Y3Rpb25OYW1lID0gdW5pdFJ1bGVQcm9kdWN0aW9uTmFtZSwgIC8vL1xuICAgICAgICAgIHVuaXRSdWxlID0gVW5pdFJ1bGUuZnJvbVByb2R1Y3Rpb25OYW1lKHByb2R1Y3Rpb25OYW1lKSxcbiAgICAgICAgICB1bml0UnVsZVByb2R1Y3Rpb24gPSBVbml0UnVsZVByb2R1Y3Rpb24uZnJvbU5hbWVBbmRVbml0UnVsZShuYW1lLCB1bml0UnVsZSk7XG4gICAgXG4gICAgcmV0dXJuIHVuaXRSdWxlUHJvZHVjdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFVuaXRSdWxlUHJvZHVjdGlvbjtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFVuaXRSdWxlID0gcmVxdWlyZSgnLi4vcnVsZS91bml0JyksXG4gICAgICBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3Byb2R1Y3Rpb24nKTtcblxuY2xhc3MgVW5pdFJ1bGVzUHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBnZXRQcm9kdWN0aW9uTmFtZXMoKSB7XG4gICAgY29uc3QgcnVsZXMgPSB0aGlzLmdldFJ1bGVzKCksXG4gICAgICAgICAgdW5pdFJ1bGVzID0gcnVsZXMsICAvLy9cbiAgICAgICAgICBwcm9kdWN0aW9uTmFtZXMgPSB1bml0UnVsZXMubWFwKGZ1bmN0aW9uKHVuaXRSdWxlKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0aW9uTmFtZSA9IHVuaXRSdWxlLmdldFByb2R1Y3Rpb25OYW1lKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBwcm9kdWN0aW9uTmFtZTtcbiAgICAgICAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gcHJvZHVjdGlvbk5hbWVzO1xuICB9XG4gIFxuICBmb3JFYWNoVW5pdFJ1bGUoY2FsbGJhY2spIHtcbiAgICBjb25zdCBydWxlcyA9IHRoaXMuZ2V0UnVsZXMoKSxcbiAgICAgICAgICB1bml0UnVsZXMgPSBydWxlczsgIC8vL1xuICAgIFxuICAgIHVuaXRSdWxlcy5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Qcm9kdWN0aW9uKHByb2R1Y3Rpb24pIHtcbiAgICBsZXQgdW5pdFJ1bGVzUHJvZHVjdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBydWxlcyA9IHByb2R1Y3Rpb24uZ2V0UnVsZXMoKSxcbiAgICAgICAgICB1bml0UnVsZXMgPSBydWxlcy5yZWR1Y2UoZnVuY3Rpb24odW5pdFJ1bGVzLCBydWxlKSB7XG4gICAgICAgICAgICBjb25zdCB1bml0UnVsZSA9IFVuaXRSdWxlLmZyb21SdWxlKHJ1bGUpO1xuXG4gICAgICAgICAgICBpZiAodW5pdFJ1bGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgdW5pdFJ1bGVzID0gdW5pdFJ1bGVzLmNvbmNhdCh1bml0UnVsZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB1bml0UnVsZXM7XG4gICAgICAgICAgfSwgW10pLFxuICAgICAgICAgIHVuaXRSdWxlc0xlbmd0aCA9IHVuaXRSdWxlcy5sZW5ndGg7XG5cbiAgICBpZiAodW5pdFJ1bGVzTGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgbmFtZSA9IHByb2R1Y3Rpb24uZ2V0TmFtZSgpLFxuICAgICAgICAgICAgcnVsZXMgPSB1bml0UnVsZXMsICAvLy9cbiAgICAgICAgICAgIE5vZGUgPSBwcm9kdWN0aW9uLmdldE5vZGUoKTtcblxuICAgICAgdW5pdFJ1bGVzUHJvZHVjdGlvbiA9IG5ldyBVbml0UnVsZXNQcm9kdWN0aW9uKG5hbWUsIHJ1bGVzLCBOb2RlKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHVuaXRSdWxlc1Byb2R1Y3Rpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBVbml0UnVsZXNQcm9kdWN0aW9uO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3J1bGUnKSxcbiAgICAgIFVuaXRSdWxlID0gcmVxdWlyZSgnLi4vcnVsZS91bml0Jyk7XG5cbmNsYXNzIE5vblVuaXRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tUnVsZShydWxlKSB7XG4gICAgbGV0IG5vblVuaXRSdWxlID0gbnVsbDtcblxuICAgIGNvbnN0IHVuaXRSdWxlID0gVW5pdFJ1bGUuZnJvbVJ1bGUocnVsZSk7XG4gICAgXG4gICAgaWYgKHVuaXRSdWxlID09PSBudWxsKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IHJ1bGUuZ2V0UGFydHMoKTtcbiAgICAgIFxuICAgICAgbm9uVW5pdFJ1bGUgPSBuZXcgTm9uVW5pdFJ1bGUocGFydHMpO1xuICAgIH1cblxuICAgIHJldHVybiBub25Vbml0UnVsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vblVuaXRSdWxlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3J1bGUnKSxcbiAgICAgIFByb2R1Y3Rpb25OYW1lUGFydCA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9wYXJ0L3Byb2R1Y3Rpb25OYW1lJyk7XG5cbmNsYXNzIFVuaXRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGdldFByb2R1Y3Rpb25OYW1lICgpIHtcbiAgICBjb25zdCBmaXJzdFBhcnQgPSB0aGlzLmdldEZpcnN0UGFydCgpLFxuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUGFydCA9IGZpcnN0UGFydCwgLy8vXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWUgPSBwcm9kdWN0aW9uTmFtZVBhcnQuZ2V0UHJvZHVjdGlvbk5hbWUoKTtcbiAgICBcbiAgICByZXR1cm4gcHJvZHVjdGlvbk5hbWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb2R1Y3Rpb25OYW1lKHByb2R1Y3Rpb25OYW1lKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlID0gZmFsc2UsIC8vL1xuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUGFydCA9IG5ldyBQcm9kdWN0aW9uTmFtZVBhcnQocHJvZHVjdGlvbk5hbWUsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBwcm9kdWN0aW9uTmFtZVBhcnRcbiAgICAgICAgICBdLFxuICAgICAgICAgIHVuaXRSdWxlID0gbmV3IFVuaXRSdWxlKHBhcnRzKTtcblxuICAgIHJldHVybiB1bml0UnVsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZShydWxlKSB7XG4gICAgbGV0IHVuaXRSdWxlID0gbnVsbDtcblxuICAgIGNvbnN0IHBhcnRzTGVuZ3RoID0gcnVsZS5nZXRQYXJ0c0xlbmd0aCgpO1xuXG4gICAgaWYgKHBhcnRzTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBmaXJzdFBhcnQgPSBydWxlLmdldEZpcnN0UGFydCgpO1xuICAgICAgXG4gICAgICBpZiAoZmlyc3RQYXJ0IGluc3RhbmNlb2YgUHJvZHVjdGlvbk5hbWVQYXJ0KSB7XG4gICAgICAgIGNvbnN0IHBhcnRzID0gcnVsZS5nZXRQYXJ0cygpO1xuXG4gICAgICAgIHVuaXRSdWxlID0gbmV3IFVuaXRSdWxlKHBhcnRzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdW5pdFJ1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBVbml0UnVsZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY3ljbGVzID0gcmVxdWlyZSgnLi4vZ3JhbW1hci9jeWNsZXMnKSxcbiAgICAgIGxlZnRSZWN1cnNpb24gPSByZXF1aXJlKCcuLi9ncmFtbWFyL2xlZnRSZWN1cnNpb24nKSxcbiAgICAgIFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi9jb21tb24vcHJvZHVjdGlvbicpLFxuICAgICAgRXJyb3JOb2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwvZXJyb3InKTtcblxuY2xhc3MgUHJpbWl0aXZlUGFyc2VyIHtcbiAgc3RhdGljIHBhcnNlKGxpbmVzLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG1hcHBpbmdzKSB7XG4gICAgbGV0IHByb2R1Y3Rpb25zO1xuXG4gICAgbWFwcGluZ3MgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICdlcnJvcic6IEVycm9yTm9kZVxuICAgIH0sIG1hcHBpbmdzKTtcblxuICAgIHRyeSB7XG4gICAgICBwcm9kdWN0aW9ucyA9IGxpbmVzLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgIGNvbnN0IHByb2R1Y3Rpb24gPSBQcm9kdWN0aW9uLmZyb21MaW5lKGxpbmUsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbWFwcGluZ3MpO1xuXG4gICAgICAgIHJldHVybiBwcm9kdWN0aW9uO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgcHJvZHVjdGlvbnMgPSBbXTtcbiAgICB9XG4gICAgXG4gICAgcHJvZHVjdGlvbnMgPSBjeWNsZXMuZWxpbWluYXRlKHByb2R1Y3Rpb25zKTsgIC8vL1xuICAgIFxuIC8vIHByb2R1Y3Rpb25zID0gbGVmdFJlY3Vyc2lvbi5lbGltaW5hdGUocHJvZHVjdGlvbnMpO1xuXG4gICAgcmV0dXJuIHByb2R1Y3Rpb25zO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJpbWl0aXZlUGFyc2VyO1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIGFycmF5VXRpbCB7XG4gIHN0YXRpYyBrZWVwRmlyc3QoYXJyYXkpIHsgcmV0dXJuIGtlZXBOdGgoYXJyYXksIDApOyB9XG5cbiAgc3RhdGljIGtlZXBTZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGtlZXBOdGgoYXJyYXksIDEpOyB9XG5cbiAgc3RhdGljIGtlZXBMYXN0KGFycmF5KSB7IHJldHVybiBrZWVwTnRoKGFycmF5LCAtMSk7IH1cblxuICBzdGF0aWMgZGlzY2FyZEZpcnN0KGFycmF5KSB7IHJldHVybiBkaXNjYXJkTnRoKGFycmF5LCAwKTsgfVxuXG4gIHN0YXRpYyBkaXNjYXJkU2Vjb25kKGFycmF5KSB7IHJldHVybiBkaXNjYXJkTnRoKGFycmF5LCAxKTsgfVxuXG4gIHN0YXRpYyBkaXNjYXJkTGFzdChhcnJheSkgeyByZXR1cm4gZGlzY2FyZE50aChhcnJheSwgLTEpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlVdGlsO1xuXG5mdW5jdGlvbiBrZWVwTnRoKGFycmF5LCBuKSB7XG4gIGFycmF5ID0gYXJyYXkuc2xpY2UoKTtcblxuICByZXR1cm4gYXJyYXkuc3BsaWNlKG4sIDEpO1xufVxuXG5mdW5jdGlvbiBkaXNjYXJkTnRoKGFycmF5LCBuKSB7XG4gIGFycmF5ID0gYXJyYXkuc2xpY2UoKTtcblxuICBhcnJheS5zcGxpY2UobiwgMSk7XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBwYXJzZXJVdGlsIHtcbiAgc3RhdGljIHRva2Vuc0Zyb21MaW5lcyhsaW5lcykge1xuICAgIGNvbnN0IHRva2VucyA9IGxpbmVzLnJlZHVjZShmdW5jdGlvbih0b2tlbnMsIGxpbmUpIHtcbiAgICAgIGNvbnN0IGxpbmVUb2tlbnMgPSBsaW5lLmdldFRva2VucygpO1xuXG4gICAgICB0b2tlbnMgPSB0b2tlbnMuY29uY2F0KGxpbmVUb2tlbnMpO1xuXG4gICAgICByZXR1cm4gdG9rZW5zO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiB0b2tlbnM7XG4gIH1cblxuICBzdGF0aWMgZmluZFByb2R1Y3Rpb24ocHJvZHVjdGlvbk5hbWUsIHByb2R1Y3Rpb25zKSB7XG4gICAgbGV0IGZvdW5kUHJvZHVjdGlvbiA9IG51bGw7XG5cbiAgICBwcm9kdWN0aW9ucy5zb21lKGZ1bmN0aW9uKHByb2R1Y3Rpb24pIHtcbiAgICAgIGNvbnN0IHByb2R1Y3Rpb25Gb3VuZCA9IHByb2R1Y3Rpb24uaXNGb3VuZEJ5UHJvZHVjdGlvbk5hbWUocHJvZHVjdGlvbk5hbWUpO1xuICAgICAgXG4gICAgICBpZiAocHJvZHVjdGlvbkZvdW5kKSB7XG4gICAgICAgIGZvdW5kUHJvZHVjdGlvbiA9IHByb2R1Y3Rpb247XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBwcm9kdWN0aW9uID0gZm91bmRQcm9kdWN0aW9uOyAvLy9cblxuICAgIHJldHVybiBwcm9kdWN0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyc2VyVXRpbDtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG9wdGlvbnM6IHJlcXVpcmUoJy4vbGliL29wdGlvbnMnKSxcbiAgU2l6ZWFibGVFbGVtZW50OiByZXF1aXJlKCcuL2xpYi9zaXplYWJsZUVsZW1lbnQnKSxcbiAgVmVydGljYWxTcGxpdHRlcjogcmVxdWlyZSgnLi9saWIvc3BsaXR0ZXIvdmVydGljYWwnKSxcbiAgSG9yaXpvbnRhbFNwbGl0dGVyOiByZXF1aXJlKCcuL2xpYi9zcGxpdHRlci9ob3Jpem9udGFsJylcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5Jyk7XG5cbmNvbnN0IHsgQm9keSB9ID0gZWFzeTtcblxuY29uc3QgYm9keSA9IG5ldyBCb2R5KCk7XG5cbmxldCBwcmV2aW91c0N1cnNvcjsgIC8vL1xuXG5jbGFzcyBjdXJzb3Ige1xuICBzdGF0aWMgY29sdW1uUmVzaXplKCkge1xuICAgIGNvbnN0IGN1cnJlbnRDdXJzb3IgPSB0aGlzLmdldEN1cnJlbnRDdXJzb3IoKTtcblxuICAgIGlmIChjdXJyZW50Q3Vyc29yICE9PSAnY29sLXJlc2l6ZScpIHtcbiAgICAgIHByZXZpb3VzQ3Vyc29yID0gY3VycmVudEN1cnNvcjtcblxuICAgICAgdGhpcy5zZXRDdXJzb3IoJ2NvbC1yZXNpemUnKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgcm93UmVzaXplKCkge1xuICAgIGNvbnN0IGN1cnJlbnRDdXJzb3IgPSB0aGlzLmdldEN1cnJlbnRDdXJzb3IoKTtcblxuICAgIGlmIChjdXJyZW50Q3Vyc29yICE9PSAncm93LXJlc2l6ZScpIHtcbiAgICAgIHByZXZpb3VzQ3Vyc29yID0gY3VycmVudEN1cnNvcjtcblxuICAgICAgdGhpcy5zZXRDdXJzb3IoJ3Jvdy1yZXNpemUnKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgcmVzZXQoKSB7XG4gICAgdGhpcy5zZXRDdXJzb3IocHJldmlvdXNDdXJzb3IpOyAvLy9cbiAgfVxuXG4gIHN0YXRpYyBnZXRDdXJyZW50Q3Vyc29yKCkge1xuICAgIGNvbnN0IGN1cnJlbnRDdXJzb3IgPSBib2R5LmNzcygnY3Vyc29yJyk7ICAvLy9cblxuICAgIHJldHVybiBjdXJyZW50Q3Vyc29yIHx8ICdhdXRvJzsgLy8vXG4gIH1cblxuICBzdGF0aWMgc2V0Q3Vyc29yKGN1cnNvcikge1xuICAgIGNvbnN0IGNzcyA9IHtcbiAgICAgIGN1cnNvcjogY3Vyc29yXG4gICAgfTtcblxuICAgIGJvZHkuY3NzKGNzcyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjdXJzb3I7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIEVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkc6ICdFU0NBUEVfS0VZX1NUT1BTX0RSQUdHSU5HJ1xuICAgICAgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBvcHRpb25zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpO1xuXG5jb25zdCB7IEVsZW1lbnQgfSA9IGVhc3k7XG5cbmNsYXNzIFNpemVhYmxlRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBzZXRXaWR0aCh3aWR0aCkge1xuICAgIGNvbnN0IHdpZHRoTnVtYmVyID0gKHR5cGVvZiB3aWR0aCA9PT0gJ251bWJlcicpO1xuXG4gICAgaWYgKHdpZHRoTnVtYmVyKSB7XG4gICAgICBjb25zdCBtaW5pbXVtV2lkdGggPSB0aGlzLmdldE1pbmltdW1XaWR0aCgpLFxuICAgICAgICAgICAgbWF4aW11bVdpZHRoID0gdGhpcy5nZXRNYXhpbXVtV2lkdGgoKTtcblxuICAgICAgaWYgKG1pbmltdW1XaWR0aCAhPT0gbnVsbCkge1xuICAgICAgICB3aWR0aCA9IE1hdGgubWF4KHdpZHRoLCBtaW5pbXVtV2lkdGgpO1xuICAgICAgfVxuICAgICAgaWYgKG1heGltdW1XaWR0aCAhPT0gbnVsbCkge1xuICAgICAgICB3aWR0aCA9IE1hdGgubWluKHdpZHRoLCBtYXhpbXVtV2lkdGgpO1xuICAgICAgfVxuXG4gICAgICB3aWR0aCA9IGAke3dpZHRofXB4YDsgLy8vXG4gICAgfVxuXG4gICAgc3VwZXIuc2V0V2lkdGgod2lkdGgpO1xuICB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodCkge1xuICAgIGNvbnN0IGhlaWdodE51bWJlciA9ICh0eXBlb2YgaGVpZ2h0ID09PSAnbnVtYmVyJyk7XG5cbiAgICBpZiAoaGVpZ2h0TnVtYmVyKSB7XG4gICAgICBjb25zdCBtaW5pbXVtSGVpZ2h0ID0gdGhpcy5nZXRNaW5pbXVtSGVpZ2h0KCksXG4gICAgICAgICAgICBtYXhpbXVtSGVpZ2h0ID0gdGhpcy5nZXRNYXhpbXVtSGVpZ2h0KCk7XG5cbiAgICAgIGlmIChtaW5pbXVtSGVpZ2h0ICE9PSBudWxsKSB7XG4gICAgICAgIGhlaWdodCA9IE1hdGgubWF4KGhlaWdodCwgbWluaW11bUhlaWdodCk7XG4gICAgICB9XG4gICAgICBpZiAobWF4aW11bUhlaWdodCAhPT0gbnVsbCkge1xuICAgICAgICBoZWlnaHQgPSBNYXRoLm1pbihoZWlnaHQsIG1heGltdW1IZWlnaHQpO1xuICAgICAgfVxuXG4gICAgICBoZWlnaHQgPSBgJHtoZWlnaHR9cHhgOyAvLy9cbiAgICB9XG5cbiAgICBzdXBlci5zZXRIZWlnaHQoaGVpZ2h0KTtcbiAgfVxuXG4gIGdldE1pbmltdW1XaWR0aCgpIHsgXG4gICAgY29uc3QgbWluV2lkdGggPSB0aGlzLmNzcygnbWluLXdpZHRoJyksXG4gICAgICAgICAgbWluaW11bVdpZHRoID0gaW5QaXhlbHMobWluV2lkdGgpO1xuXG4gICAgcmV0dXJuIG1pbmltdW1XaWR0aDtcbiAgfVxuXG4gIGdldE1pbmltdW1IZWlnaHQoKSB7XG4gICAgY29uc3QgbWluSGVpZ2h0ID0gdGhpcy5jc3MoJ21pbi1oZWlnaHQnKSxcbiAgICAgICAgICBtaW5pbXVtSGVpZ2h0ID0gaW5QaXhlbHMobWluSGVpZ2h0KTtcblxuICAgIHJldHVybiBtaW5pbXVtSGVpZ2h0O1xuICB9XG5cbiAgZ2V0TWF4aW11bVdpZHRoKCkge1xuICAgIGNvbnN0IG1heFdpZHRoID0gdGhpcy5jc3MoJ21heC13aWR0aCcpLFxuICAgICAgICAgIG1heGltdW1XaWR0aCA9IGluUGl4ZWxzKG1heFdpZHRoKTtcblxuICAgIHJldHVybiBtYXhpbXVtV2lkdGg7XG4gIH1cblxuICBnZXRNYXhpbXVtSGVpZ2h0KCkge1xuICAgIGNvbnN0IG1heEhlaWdodCA9IHRoaXMuY3NzKCdtYXgtaGVpZ2h0JyksXG4gICAgICAgICAgbWF4aW11bUhlaWdodCA9IGluUGl4ZWxzKG1heEhlaWdodCk7XG5cbiAgICByZXR1cm4gbWF4aW11bUhlaWdodDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoU2l6ZWFibGVFbGVtZW50LCBwcm9wZXJ0aWVzKTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFNpemVhYmxlRWxlbWVudCwge1xuICB0YWdOYW1lOiAnZGl2JyxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICdzaXplYWJsZSdcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2l6ZWFibGVFbGVtZW50O1xuXG5mdW5jdGlvbiBpblBpeGVscyhxdWFudGl0eSkge1xuICBsZXQgcGl4ZWxzID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcXVhbnRpdHkubWF0Y2goLyhbMC05XSopcHgkLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIHBpeGVscyA9IHNlY29uZE1hdGNoOyAgLy8vXG4gIH1cblxuICByZXR1cm4gcGl4ZWxzO1xufVxuXG5mdW5jdGlvbiBzZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzFdOyB9XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5Jyk7XG5cbmNvbnN0IG9wdGlvbnMgPSByZXF1aXJlKCcuL29wdGlvbnMnKTtcblxuY29uc3QgRVNDQVBFX0tFWUNPREUgPSAyNztcblxuY29uc3QgeyBFU0NBUEVfS0VZX1NUT1BTX0RSQUdHSU5HIH0gPSBvcHRpb25zLFxuICAgICAgeyB3aW5kb3csIEVsZW1lbnQgfSA9IGVhc3k7XG5cbmNsYXNzIFNwbGl0dGVyIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBiZWZvcmVTaXplYWJsZUVsZW1lbnQsIGFmdGVyU2l6ZWFibGVFbGVtZW50LCBkcmFnSGFuZGxlciwgb3B0aW9ucykge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIHRoaXMuYmVmb3JlU2l6ZWFibGVFbGVtZW50ID0gYmVmb3JlU2l6ZWFibGVFbGVtZW50O1xuICAgIHRoaXMuYWZ0ZXJTaXplYWJsZUVsZW1lbnQgPSBhZnRlclNpemVhYmxlRWxlbWVudDtcblxuICAgIGlmIChkcmFnSGFuZGxlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm9uRHJhZyhkcmFnSGFuZGxlcik7IFxuICAgIH1cbiAgICBcbiAgICBpZiAob3B0aW9ucyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnNldE9wdGlvbnMob3B0aW9ucyk7XG4gICAgfVxuICBcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gIFxuICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcbiAgXG4gICAgd2luZG93Lm9uKCdtb3VzZXVwIGJsdXInLCB0aGlzLm1vdXNlVXAuYmluZCh0aGlzKSk7ICAvLy9cbiAgIFxuICAgIHdpbmRvdy5vbk1vdXNlTW92ZSh0aGlzLm1vdXNlTW92ZS5iaW5kKHRoaXMpKTtcbiAgXG4gICAgdGhpcy5vbk1vdXNlRG93bih0aGlzLm1vdXNlRG93bi5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLm9uTW91c2VPdmVyKHRoaXMubW91c2VPdmVyLmJpbmQodGhpcykpO1xuICAgIHRoaXMub25Nb3VzZU91dCh0aGlzLm1vdXNlT3V0LmJpbmQodGhpcykpO1xuICBcbiAgICB0aGlzLm9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlzQmVmb3JlU2l6ZWFibGVFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmJlZm9yZVNpemVhYmxlRWxlbWVudDtcbiAgfVxuXG4gIGlzQWZ0ZXJTaXplYWJsZUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWZ0ZXJTaXplYWJsZUVsZW1lbnQ7XG4gIH1cblxuICBnZXREaXJlY3Rpb24oKSB7XG4gICAgbGV0IGRpcmVjdGlvbiA9IHVuZGVmaW5lZDsgIC8vL1xuXG4gICAgaWYgKHRoaXMuYmVmb3JlU2l6ZWFibGVFbGVtZW50KSB7XG4gICAgICBkaXJlY3Rpb24gPSArMTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hZnRlclNpemVhYmxlRWxlbWVudCkge1xuICAgICAgZGlyZWN0aW9uID0gLTE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGlvbjtcbiAgfVxuXG4gIGdldFNpemVhYmxlRWxlbWVudCgpIHtcbiAgICBsZXQgc2l6ZWFibGVFbGVtZW50ID0gdW5kZWZpbmVkOyAgLy8vXG5cbiAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLmdldERpcmVjdGlvbigpO1xuXG4gICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgIGNhc2UgLTE6XG4gICAgICAgIHNpemVhYmxlRWxlbWVudCA9IHRoaXMuZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudCgpOyAvLy9cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgKzE6XG4gICAgICAgIHNpemVhYmxlRWxlbWVudCA9IHRoaXMuZ2V0TmV4dFNpYmxpbmdFbGVtZW50KCk7IC8vL1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gc2l6ZWFibGVFbGVtZW50O1xuICB9XG4gIFxuICBzZXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG5cbiAgc2V0T3B0aW9uKG9wdGlvbikge1xuICAgIHRoaXMub3B0aW9uc1tvcHRpb25dID0gdHJ1ZTtcbiAgfVxuXG4gIHVuc2V0T3B0aW9uKG9wdGlvbikge1xuICAgIGRlbGV0ZSh0aGlzLm9wdGlvbnNbb3B0aW9uXSk7XG4gIH1cblxuICBoYXNPcHRpb24ob3B0aW9uKSB7XG4gICAgb3B0aW9uID0gKHRoaXMub3B0aW9uc1tvcHRpb25dID09PSB0cnVlKTsgLy8vXG5cbiAgICByZXR1cm4gb3B0aW9uO1xuICB9XG4gIFxuICBlbmFibGUoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICB9XG5cbiAgZGlzYWJsZSgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGlzRGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQ7XG4gIH1cblxuICBvbkRyYWcoZHJhZ0hhbmRsZXIpIHtcbiAgICB0aGlzLmRyYWdIYW5kbGVyID0gZHJhZ0hhbmRsZXI7XG4gIH1cblxuICBzdGFydERyYWdnaW5nKCkge1xuICAgIGNvbnN0IGVzY2FwZUtleVN0b3BzRHJhZ2dpbmcgPSB0aGlzLmhhc09wdGlvbihFU0NBUEVfS0VZX1NUT1BTX0RSQUdHSU5HKTtcblxuICAgIGlmIChlc2NhcGVLZXlTdG9wc0RyYWdnaW5nKSB7XG4gICAgICB3aW5kb3cub25LZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgdGhpcy5kcmFnZ2luZyA9IHRydWU7XG4gIH1cblxuICBzdG9wRHJhZ2dpbmcoKSB7XG4gICAgY29uc3QgZXNjYXBlS2V5U3RvcHNEcmFnZ2luZyA9IHRoaXMuaGFzT3B0aW9uKEVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkcpO1xuXG4gICAgaWYgKGVzY2FwZUtleVN0b3BzRHJhZ2dpbmcpIHtcbiAgICAgIHdpbmRvdy5vZmZLZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuICB9XG5cbiAgaXNEcmFnZ2luZygpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2luZztcbiAgfVxuXG4gIGtleURvd25IYW5kbGVyKGtleUNvZGUpIHtcbiAgICBpZiAoa2V5Q29kZSA9PT0gRVNDQVBFX0tFWUNPREUpIHtcbiAgICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgICB0aGlzLnN0b3BEcmFnZ2luZygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgYmVmb3JlU2l6ZWFibGVFbGVtZW50LCBhZnRlclNpemVhYmxlRWxlbWVudCwgb25EcmFnLCBvcHRpb25zIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGRyYWdIYW5kbGVyID0gb25EcmFnOyAvLy9cblxuICAgIHJldHVybiBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBiZWZvcmVTaXplYWJsZUVsZW1lbnQsIGFmdGVyU2l6ZWFibGVFbGVtZW50LCBkcmFnSGFuZGxlciwgb3B0aW9ucyk7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihTcGxpdHRlciwge1xuICB0YWdOYW1lOiAnZGl2JyxcbiAgaWdub3JlZFByb3BlcnRpZXM6IFtcbiAgICAnYmVmb3JlU2l6ZWFibGVFbGVtZW50JyxcbiAgICAnYWZ0ZXJTaXplYWJsZUVsZW1lbnQnLFxuICAgICdvbkRyYWcnLFxuICAgICdvcHRpb25zJ1xuICBdXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBTcGxpdHRlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY3Vyc29yID0gcmVxdWlyZSgnLi4vY3Vyc29yJyksXG4gICAgICBTcGxpdHRlciA9IHJlcXVpcmUoJy4uL3NwbGl0dGVyJyk7XG5cbmNsYXNzIEhvcml6b250YWxTcGxpdHRlciBleHRlbmRzIFNwbGl0dGVyIHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGJlZm9yZVNpemVhYmxlRWxlbWVudCwgYWZ0ZXJTaXplYWJsZUVsZW1lbnQsIGRyYWdIYW5kbGVyLCBvcHRpb25zKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IsIGJlZm9yZVNpemVhYmxlRWxlbWVudCwgYWZ0ZXJTaXplYWJsZUVsZW1lbnQsIGRyYWdIYW5kbGVyLCBvcHRpb25zKTtcblxuICAgIHRoaXMuc2l6ZWFibGVFbGVtZW50SGVpZ2h0ID0gbnVsbDtcblxuICAgIHRoaXMubW91c2VUb3AgPSBudWxsO1xuICB9XG5cbiAgbW91c2VVcCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY3Vyc29yLnJlc2V0KCk7XG5cbiAgICAgIGlmICh0aGlzLmRyYWdnaW5nKSB7XG4gICAgICAgIHRoaXMuc3RvcERyYWdnaW5nKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbW91c2VNb3ZlKG1vdXNlVG9wLCBtb3VzZUxlZnQpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuZ2V0RGlyZWN0aW9uKCksXG4gICAgICAgICAgICAgIHNpemVhYmxlRWxlbWVudCA9IHRoaXMuZ2V0U2l6ZWFibGVFbGVtZW50KCksXG4gICAgICAgICAgICAgIHJlbGF0aXZlTW91c2VUb3AgPSBtb3VzZVRvcCAtIHRoaXMubW91c2VUb3AsXG4gICAgICAgICAgICAgIGhlaWdodCA9IHRoaXMuc2l6ZWFibGVFbGVtZW50SGVpZ2h0IC0gZGlyZWN0aW9uICogcmVsYXRpdmVNb3VzZVRvcDtcblxuICAgICAgICBzaXplYWJsZUVsZW1lbnQuc2V0SGVpZ2h0KGhlaWdodCk7XG5cbiAgICAgICAgY29uc3Qgc2l6ZWFibGVFbGVtZW50SGVpZ2h0ID0gc2l6ZWFibGVFbGVtZW50LmdldEhlaWdodCgpO1xuXG4gICAgICAgIGlmICh0aGlzLmRyYWdIYW5kbGVyKSB7XG4gICAgICAgICAgdGhpcy5kcmFnSGFuZGxlcihzaXplYWJsZUVsZW1lbnRIZWlnaHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbW91c2VEb3duKG1vdXNlVG9wLCBtb3VzZUxlZnQpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY29uc3Qgc2l6ZWFibGVFbGVtZW50ID0gdGhpcy5nZXRTaXplYWJsZUVsZW1lbnQoKTtcbiAgICAgICAgICBcbiAgICAgIGN1cnNvci5yb3dSZXNpemUoKTtcblxuICAgICAgdGhpcy5tb3VzZVRvcCA9IG1vdXNlVG9wO1xuXG4gICAgICB0aGlzLnNpemVhYmxlRWxlbWVudEhlaWdodCA9IHNpemVhYmxlRWxlbWVudC5nZXRIZWlnaHQoKTtcblxuICAgICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgICAgaWYgKCFkcmFnZ2luZykge1xuICAgICAgICB0aGlzLnN0YXJ0RHJhZ2dpbmcoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtb3VzZU92ZXIoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGN1cnNvci5yb3dSZXNpemUoKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZU91dCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY3Vyc29yLnJlc2V0KCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICByZXR1cm4gU3BsaXR0ZXIuZnJvbVByb3BlcnRpZXMoSG9yaXpvbnRhbFNwbGl0dGVyLCBwcm9wZXJ0aWVzKTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKEhvcml6b250YWxTcGxpdHRlciwge1xuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ2hvcml6b250YWwgc3BsaXR0ZXInXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhvcml6b250YWxTcGxpdHRlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY3Vyc29yID0gcmVxdWlyZSgnLi4vY3Vyc29yJyksXG4gICAgICBTcGxpdHRlciA9IHJlcXVpcmUoJy4uL3NwbGl0dGVyJyk7XG5cbmNsYXNzIFZlcnRpY2FsU3BsaXR0ZXIgZXh0ZW5kcyBTcGxpdHRlciB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBiZWZvcmVTaXplYWJsZUVsZW1lbnQsIGFmdGVyU2l6ZWFibGVFbGVtZW50LCBkcmFnSGFuZGxlciwgb3B0aW9ucykge1xuICAgIHN1cGVyKHNlbGVjdG9yLCBiZWZvcmVTaXplYWJsZUVsZW1lbnQsIGFmdGVyU2l6ZWFibGVFbGVtZW50LCBkcmFnSGFuZGxlciwgb3B0aW9ucyk7XG5cbiAgICB0aGlzLnNpemVhYmxlRWxlbWVudFdpZHRoID0gbnVsbDtcblxuICAgIHRoaXMubW91c2VMZWZ0ID0gbnVsbDtcbiAgfVxuXG4gIG1vdXNlVXAoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGN1cnNvci5yZXNldCgpO1xuXG4gICAgICBpZiAodGhpcy5kcmFnZ2luZykge1xuICAgICAgICB0aGlzLnN0b3BEcmFnZ2luZygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1vdXNlTW92ZShtb3VzZVRvcCwgbW91c2VMZWZ0KSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLmdldERpcmVjdGlvbigpLFxuICAgICAgICAgICAgICBzaXplYWJsZUVsZW1lbnQgPSB0aGlzLmdldFNpemVhYmxlRWxlbWVudCgpLFxuICAgICAgICAgICAgICByZWxhdGl2ZU1vdXNlTGVmdCA9IG1vdXNlTGVmdCAtIHRoaXMubW91c2VMZWZ0LFxuICAgICAgICAgICAgICB3aWR0aCA9IHRoaXMuc2l6ZWFibGVFbGVtZW50V2lkdGggLSBkaXJlY3Rpb24gKiByZWxhdGl2ZU1vdXNlTGVmdDtcblxuICAgICAgICBzaXplYWJsZUVsZW1lbnQuc2V0V2lkdGgod2lkdGgpO1xuXG4gICAgICAgIGNvbnN0IHNpemVhYmxlRWxlbWVudFdpZHRoID0gc2l6ZWFibGVFbGVtZW50LmdldFdpZHRoKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuZHJhZ0hhbmRsZXIpIHtcbiAgICAgICAgICB0aGlzLmRyYWdIYW5kbGVyKHNpemVhYmxlRWxlbWVudFdpZHRoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1vdXNlRG93bihtb3VzZVRvcCwgbW91c2VMZWZ0KSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IHNpemVhYmxlRWxlbWVudCA9IHRoaXMuZ2V0U2l6ZWFibGVFbGVtZW50KCk7XG5cbiAgICAgIGN1cnNvci5jb2x1bW5SZXNpemUoKTtcblxuICAgICAgdGhpcy5tb3VzZUxlZnQgPSBtb3VzZUxlZnQ7XG5cbiAgICAgIHRoaXMuc2l6ZWFibGVFbGVtZW50V2lkdGggPSBzaXplYWJsZUVsZW1lbnQuZ2V0V2lkdGgoKTtcblxuICAgICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgICAgaWYgKCFkcmFnZ2luZykge1xuICAgICAgICB0aGlzLnN0YXJ0RHJhZ2dpbmcoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtb3VzZU92ZXIoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGN1cnNvci5jb2x1bW5SZXNpemUoKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZU91dCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY3Vyc29yLnJlc2V0KCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICByZXR1cm4gU3BsaXR0ZXIuZnJvbVByb3BlcnRpZXMoVmVydGljYWxTcGxpdHRlciwgcHJvcGVydGllcyk7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihWZXJ0aWNhbFNwbGl0dGVyLCB7XG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAndmVydGljYWwgc3BsaXR0ZXInXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZlcnRpY2FsU3BsaXR0ZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICB3aW5kb3c6IHJlcXVpcmUoJy4vbGliL3dpbmRvdycpLFxuICBkb2N1bWVudDogcmVxdWlyZSgnLi9saWIvZG9jdW1lbnQnKSxcbiAgRGl2OiByZXF1aXJlKCcuL2xpYi9lbGVtZW50L2RpdicpLFxuICBTcGFuOiByZXF1aXJlKCcuL2xpYi9lbGVtZW50L3NwYW4nKSxcbiAgQm9keTogcmVxdWlyZSgnLi9saWIvZWxlbWVudC9ib2R5JyksXG4gIExpbms6IHJlcXVpcmUoJy4vbGliL2VsZW1lbnQvbGluaycpLFxuICBTZWxlY3Q6IHJlcXVpcmUoJy4vbGliL2VsZW1lbnQvc2VsZWN0JyksXG4gIEJ1dHRvbjogcmVxdWlyZSgnLi9saWIvZWxlbWVudC9idXR0b24nKSxcbiAgQ2hlY2tib3g6IHJlcXVpcmUoJy4vbGliL2VsZW1lbnQvY2hlY2tib3gnKSxcbiAgRWxlbWVudDogcmVxdWlyZSgnLi9saWIvZWxlbWVudCcpLFxuICBUZXh0RWxlbWVudDogcmVxdWlyZSgnLi9saWIvdGV4dEVsZW1lbnQnKSxcbiAgSW5wdXQ6IHJlcXVpcmUoJy4vbGliL2lucHV0RWxlbWVudC9pbnB1dCcpLFxuICBUZXh0YXJlYTogcmVxdWlyZSgnLi9saWIvaW5wdXRFbGVtZW50L3RleHRhcmVhJyksXG4gIElucHV0RWxlbWVudDogcmVxdWlyZSgnLi9saWIvaW5wdXRFbGVtZW50JyksXG4gIEJvdW5kczogcmVxdWlyZSgnLi9saWIvbWlzYy9ib3VuZHMnKSxcbiAgT2Zmc2V0OiByZXF1aXJlKCcuL2xpYi9taXNjL29mZnNldCcpLFxuICBSZWFjdDogcmVxdWlyZSgnLi9saWIvcmVhY3QnKVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZXZlbnRNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vZXZlbnQnKSxcbiAgICAgIGNsaWNrTWl4aW4gPSByZXF1aXJlKCcuL21peGluL2NsaWNrJyksXG4gICAgICBtb3VzZU1peGluID0gcmVxdWlyZSgnLi9taXhpbi9tb3VzZScpLFxuICAgICAga2V5TWl4aW4gPSByZXF1aXJlKCcuL21peGluL2tleScpO1xuXG5jbGFzcyBEb2N1bWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvY3VtZW50O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBldmVudE1peGluKTtcbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBjbGlja01peGluKTtcbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBtb3VzZU1peGluKTtcbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBrZXlNaXhpbik7XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IERvY3VtZW50KCk7ICAvLy9cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgT2Zmc2V0ID0gcmVxdWlyZSgnLi9taXNjL29mZnNldCcpLFxuICAgICAgQm91bmRzID0gcmVxdWlyZSgnLi9taXNjL2JvdW5kcycpLFxuICAgICAganN4TWl4aW4gPSByZXF1aXJlKCcuL21peGluL2pzeCcpLFxuICAgICAgZXZlbnRNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vZXZlbnQnKSxcbiAgICAgIGNsaWNrTWl4aW4gPSByZXF1aXJlKCcuL21peGluL2NsaWNrJyksXG4gICAgICBzY3JvbGxNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vc2Nyb2xsJyksXG4gICAgICByZXNpemVNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vcmVzaXplJyksXG4gICAgICBtb3VzZU1peGluID0gcmVxdWlyZSgnLi9taXhpbi9tb3VzZScpLFxuICAgICAga2V5TWl4aW4gPSByZXF1aXJlKCcuL21peGluL2tleScpO1xuXG5jbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50RnJvbVNlbGVjdG9yKHNlbGVjdG9yKTtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5fX2VsZW1lbnRfXyA9IHRoaXM7IC8vL1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBFbGVtZW50LmNsb25lKHRoaXMpOyB9XG5cbiAgZ2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IHRvcCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRUb3AsICAvLy9cbiAgICAgICAgICBsZWZ0ID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldExlZnQsICAvLy9cbiAgICAgICAgICBvZmZzZXQgPSBuZXcgT2Zmc2V0KHRvcCwgbGVmdCk7XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIGNvbnN0IGJvdW5kaW5nQ2xpZW50UmVjdCA9IHRoaXMuZG9tRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICBib3VuZHMgPSBCb3VuZHMuZnJvbUJvdW5kaW5nQ2xpZW50UmVjdChib3VuZGluZ0NsaWVudFJlY3QpO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxuXG4gIGdldFdpZHRoKGluY2x1ZGVCb3JkZXIgPSB0cnVlKSB7XG4gICAgY29uc3Qgd2lkdGggPSBpbmNsdWRlQm9yZGVyID9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50Lm9mZnNldFdpZHRoIDpcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQuY2xpZW50V2lkdGg7XG5cbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cblxuICBzZXRXaWR0aCh3aWR0aCkgeyB0aGlzLmRvbUVsZW1lbnQuc3R5bGUud2lkdGggPSB3aWR0aDsgfVxuXG4gIGdldEhlaWdodChpbmNsdWRlQm9yZGVyID0gdHJ1ZSkge1xuICAgIGNvbnN0IGhlaWdodCA9IGluY2x1ZGVCb3JkZXIgP1xuICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50Lm9mZnNldEhlaWdodCA6XG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cbiAgICByZXR1cm4gaGVpZ2h0O1xuICB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodCkgeyB0aGlzLmRvbUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0OyB9XG5cbiAgaGFzQXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5oYXNBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBnZXRBdHRyaWJ1dGUobmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIHNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkgeyB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTsgfVxuXG4gIGNsZWFyQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5kb21FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIGFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkgeyB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7IH1cblxuICByZW1vdmVBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLmNsZWFyQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgc2V0Q2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWU7IH1cblxuICBhZGRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTsgfVxuXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpOyB9XG5cbiAgdG9nZ2xlQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZSk7IH1cblxuICBoYXNDbGFzcyhjbGFzc05hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTsgfVxuXG4gIGNsZWFyQ2xhc3NlcygpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9ICcnOyB9XG5cbiAgcHJlcGVuZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5wcmVwZW5kKHRoaXMpOyB9XG5cbiAgYXBwZW5kVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LmFwcGVuZCh0aGlzKTsgfVxuXG4gIGFkZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5hZGQodGhpcyk7IH1cblxuICByZW1vdmVGcm9tKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5yZW1vdmUodGhpcyk7IH1cblxuICBpbnNlcnRCZWZvcmUoc2libGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTU5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpO1xuICB9XG5cbiAgaW5zZXJ0QWZ0ZXIoc2libGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTU5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQubmV4dFNpYmxpbmcpOyAgLy8vXG4gIH1cblxuICBwcmVwZW5kKGVsZW1lbnQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50LFxuICAgICAgICAgIGZpcnN0Q2hpbGRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LmZpcnN0Q2hpbGQ7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIGZpcnN0Q2hpbGRET01FbGVtZW50KTtcbiAgfVxuXG4gIGFwcGVuZChlbGVtZW50KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgbnVsbCk7IC8vL1xuICB9XG5cbiAgYWRkKGVsZW1lbnQpIHsgdGhpcy5hcHBlbmQoZWxlbWVudCk7IH1cblxuICByZW1vdmUoZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQ2hpbGQoZG9tRWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmUoKTtcbiAgICB9XG4gIH1cblxuICBzaG93KGRpc3BsYXlTdHlsZSA9ICdibG9jaycpIHsgdGhpcy5kb21FbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5U3R5bGU7IH1cblxuICBoaWRlKCkgeyB0aGlzLmRvbUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgfVxuXG4gIGVuYWJsZSgpIHsgdGhpcy5jbGVhckF0dHJpYnV0ZSgnZGlzYWJsZWQnKTsgfVxuXG4gIGRpc2FibGUoKSB7IHRoaXMuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpOyB9XG5cbiAgaXNFbmFibGVkKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCksXG4gICAgICAgICAgZW5hYmxlZCA9ICFkaXNhYmxlZDtcblxuICAgIHJldHVybiBlbmFibGVkO1xuICB9XG5cbiAgaXNEaXNhYmxlZCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuXG4gICAgcmV0dXJuIGRpc2FibGVkO1xuICB9XG5cbiAgaHRtbChodG1sKSB7XG4gICAgaWYgKGh0bWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgaW5uZXJIVE1MID0gdGhpcy5kb21FbGVtZW50LmlubmVySFRNTDtcblxuICAgICAgaHRtbCA9IGlubmVySFRNTDsgLy8vXG5cbiAgICAgIHJldHVybiBodG1sO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbm5lckhUTUwgPSBodG1sOyAvLy9cblxuICAgICAgdGhpcy5kb21FbGVtZW50LmlubmVySFRNTCA9IGlubmVySFRNTFxuICAgIH1cbiAgfVxuXG4gIGNzcyhjc3MpIHtcbiAgICBpZiAoY3NzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZG9tRWxlbWVudCksXG4gICAgICAgICAgICBjc3MgPSB7fTtcblxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvbXB1dGVkU3R5bGUubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBjb21wdXRlZFN0eWxlWzBdLCAgLy8vXG4gICAgICAgICAgICAgIHZhbHVlID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpOyAvLy9cblxuICAgICAgICBjc3NbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjc3MgPT09ICdzdHJpbmcnKSB7XG4gICAgICBsZXQgbmFtZSA9IGNzczsgLy8vXG5cbiAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZG9tRWxlbWVudCksXG4gICAgICAgICAgICB2YWx1ZSA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTsgLy8vXG5cbiAgICAgIGNzcyA9IHZhbHVlOyAgLy8vXG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMoY3NzKTsgLy8vXG5cbiAgICAgIG5hbWVzLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGNzc1tuYW1lXTtcblxuICAgICAgICB0aGlzLmRvbUVsZW1lbnQuc3R5bGVbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfVxuICB9XG5cbiAgYmx1cigpIHsgdGhpcy5kb21FbGVtZW50LmJsdXIoKTsgfVxuXG4gIGZvY3VzKCkgeyB0aGlzLmRvbUVsZW1lbnQuZm9jdXMoKTsgfVxuXG4gIGhhc0ZvY3VzKCkge1xuICAgIGNvbnN0IGZvY3VzID0gKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IHRoaXMuZG9tRWxlbWVudCk7ICAvLy9cblxuICAgIHJldHVybiBmb2N1cztcbiAgfVxuXG4gIGdldERlc2NlbmRhbnRFbGVtZW50cyhzZWxlY3RvciA9ICcqJykge1xuICAgIGNvbnN0IGRvbU5vZGUgPSB0aGlzLmRvbUVsZW1lbnQsICAvLy9cbiAgICAgICAgICBkZXNjZW5kYW50RE9NTm9kZXMgPSBkZXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShkb21Ob2RlKSxcbiAgICAgICAgICBkZXNjZW5kYW50RWxlbWVudHMgPSBmaWx0ZXJET01Ob2RlcyhkZXNjZW5kYW50RE9NTm9kZXMsIHNlbGVjdG9yKTtcblxuICAgIHJldHVybiBkZXNjZW5kYW50RWxlbWVudHM7XG4gIH1cblxuICBnZXRDaGlsZEVsZW1lbnRzKHNlbGVjdG9yID0gJyonKSB7XG4gICAgY29uc3QgY2hpbGRET01Ob2RlcyA9IHRoaXMuZG9tRWxlbWVudC5jaGlsZE5vZGVzLFxuICAgICAgICAgIGNoaWxkRE9NRWxlbWVudHMgPSBmaWx0ZXJET01Ob2RlcyhjaGlsZERPTU5vZGVzLCBzZWxlY3RvciksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGNoaWxkRE9NRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBnZXRQYXJlbnRFbGVtZW50KHNlbGVjdG9yID0gJyonKSB7XG4gICAgbGV0IHBhcmVudEVsZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXG4gICAgaWYgKHBhcmVudERPTUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGlmIChwYXJlbnRET01FbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnRzID0gW3BhcmVudERPTUVsZW1lbnRdLFxuICAgICAgICAgICAgICBwYXJlbnRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKHBhcmVudERPTUVsZW1lbnRzKSxcbiAgICAgICAgICAgICAgZmlyc3RQYXJlbnRFbGVtZW50ID0gZmlyc3QocGFyZW50RWxlbWVudHMpO1xuXG4gICAgICAgIHBhcmVudEVsZW1lbnQgPSBmaXJzdFBhcmVudEVsZW1lbnQgfHwgbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50RWxlbWVudDtcbiAgfVxuXG4gIGdldEFzY2VuZGFudEVsZW1lbnRzKHNlbGVjdG9yID0gJyonKSB7XG4gICAgY29uc3QgYXNjZW5kYW50RE9NRWxlbWVudHMgPSBbXSxcbiAgICAgICAgICBwYXJlbnRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cbiAgICBsZXQgYXNjZW5kYW50RE9NRWxlbWVudCA9IHBhcmVudERPTUVsZW1lbnQ7ICAvLy9cbiAgICB3aGlsZSAoYXNjZW5kYW50RE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgaWYgKGFzY2VuZGFudERPTUVsZW1lbnQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgYXNjZW5kYW50RE9NRWxlbWVudHMucHVzaChhc2NlbmRhbnRET01FbGVtZW50KTtcbiAgICAgIH1cblxuICAgICAgYXNjZW5kYW50RE9NRWxlbWVudCA9IGFzY2VuZGFudERPTUVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICB9XG5cbiAgICBjb25zdCBhc2NlbmRhbnRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGFzY2VuZGFudERPTUVsZW1lbnRzKTtcblxuICAgIHJldHVybiBhc2NlbmRhbnRFbGVtZW50cztcbiAgfVxuXG4gIGdldFByZXZpb3VzU2libGluZ0VsZW1lbnQoc2VsZWN0b3IgPSAnKicpIHtcbiAgICBsZXQgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBwcmV2aW91c1NpYmxpbmdET01Ob2RlID0gdGhpcy5kb21FbGVtZW50LnByZXZpb3VzU2libGluZzsgIC8vL1xuXG4gICAgaWYgKChwcmV2aW91c1NpYmxpbmdET01Ob2RlICE9PSBudWxsKSAmJiBkb21Ob2RlTWF0Y2hlc1NlbGVjdG9yKHByZXZpb3VzU2libGluZ0RPTU5vZGUsIHNlbGVjdG9yKSkge1xuICAgICAgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IHByZXZpb3VzU2libGluZ0RPTU5vZGUuX19lbGVtZW50X18gfHwgbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJldmlvdXNTaWJsaW5nRWxlbWVudDtcbiAgfVxuXG4gIGdldE5leHRTaWJsaW5nRWxlbWVudChzZWxlY3RvciA9ICcqJykge1xuICAgIGxldCBuZXh0U2libGluZ0VsZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QgbmV4dFNpYmxpbmdET01Ob2RlID0gdGhpcy5kb21FbGVtZW50Lm5leHRTaWJsaW5nO1xuXG4gICAgaWYgKChuZXh0U2libGluZ0RPTU5vZGUgIT09IG51bGwpICYmIGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IobmV4dFNpYmxpbmdET01Ob2RlLCBzZWxlY3RvcikpIHtcbiAgICAgIG5leHRTaWJsaW5nRWxlbWVudCA9IG5leHRTaWJsaW5nRE9NTm9kZS5fX2VsZW1lbnRfXyB8fCBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0U2libGluZ0VsZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgY2xvbmUoQ2xhc3MsIGVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IGRlZXAgPSB0cnVlLFxuICAgICAgICAgIGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQuY2xvbmVOb2RlKGRlZXApO1xuXG4gICAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQoZG9tRWxlbWVudCk7XG4gICAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQobnVsbCk7XG5cbiAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShDbGFzcywgcmVtYWluaW5nQXJndW1lbnRzKSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoQ2xhc3MsIGh0bWwsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IG91dGVyRE9NRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgb3V0ZXJET01FbGVtZW50LmlubmVySFRNTCA9IGh0bWw7ICAvLy9cblxuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBvdXRlckRPTUVsZW1lbnQuZmlyc3RDaGlsZDtcblxuICAgIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KGRvbUVsZW1lbnQpO1xuICAgIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KG51bGwpO1xuXG4gICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoQ2xhc3MsIHJlbWFpbmluZ0FyZ3VtZW50cykpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KENsYXNzLCBkb21FbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChkb21FbGVtZW50KTtcbiAgICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChudWxsKTtcblxuICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KENsYXNzLCByZW1haW5pbmdBcmd1bWVudHMpKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgdGFnTmFtZSA9IENsYXNzLnRhZ05hbWUsXG4gICAgICAgICAgaHRtbCA9IGA8JHt0YWdOYW1lfSAvPmAsXG4gICAgICAgICAgZWxlbWVudCA9IEVsZW1lbnQuZnJvbUhUTUwoQ2xhc3MsIGh0bWwsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBjb25zdCBkZWZhdWx0UHJvcGVydGllcyA9IENsYXNzLmRlZmF1bHRQcm9wZXJ0aWVzLFxuICAgICAgICAgIGlnbm9yZWRQcm9wZXJ0aWVzID0gQ2xhc3MuaWdub3JlZFByb3BlcnRpZXM7XG5cbiAgICBlbGVtZW50LmFwcGx5UHJvcGVydGllcyhwcm9wZXJ0aWVzLCBkZWZhdWx0UHJvcGVydGllcywgaWdub3JlZFByb3BlcnRpZXMpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwganN4TWl4aW4pO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgZXZlbnRNaXhpbik7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBjbGlja01peGluKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIHNjcm9sbE1peGluKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIHJlc2l6ZU1peGluKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIG1vdXNlTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwga2V5TWl4aW4pO1xuXG5PYmplY3QuYXNzaWduKEVsZW1lbnQsIHtcbiAgTEVGVF9NT1VTRV9CVVRUT046IDAsXG4gIE1JRERMRV9NT1VTRV9CVVRUT046IDEsXG4gIFJJR0hUX01PVVNFX0JVVFRPTjogMlxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRWxlbWVudDtcblxuZnVuY3Rpb24gZG9tRWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3Rvcikge1xuICBjb25zdCBkb21FbGVtZW50ID0gKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpID9cbiAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilbMF0gOiAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I7ICAvLy9cblxuICByZXR1cm4gZG9tRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoZG9tRWxlbWVudHMpIHtcbiAgY29uc3QgZG9tRWxlbWVudHNXaXRoRWxlbWVudHMgPSBmaWx0ZXIoZG9tRWxlbWVudHMsIGZ1bmN0aW9uKGRvbUVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gKGRvbUVsZW1lbnQuX19lbGVtZW50X18gIT09IHVuZGVmaW5lZCk7XG4gICAgICAgIH0pLFxuICAgICAgICBlbGVtZW50cyA9IGRvbUVsZW1lbnRzV2l0aEVsZW1lbnRzLm1hcChmdW5jdGlvbihkb21FbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIGRvbUVsZW1lbnQuX19lbGVtZW50X187XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZnVuY3Rpb24gZGVzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUoZG9tTm9kZSwgZGVzY2VuZGFudERPTU5vZGVzID0gW10pIHtcbiAgY29uc3QgY2hpbGRET01Ob2RlcyA9IGRvbU5vZGUuY2hpbGROb2RlczsgIC8vL1xuXG4gIGRlc2NlbmRhbnRET01Ob2Rlcy5jb25jYXQoY2hpbGRET01Ob2Rlcyk7XG5cbiAgY2hpbGRET01Ob2Rlcy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkRE9NTm9kZSkge1xuICAgIGRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlKGNoaWxkRE9NTm9kZSwgZGVzY2VuZGFudERPTU5vZGVzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRlc2NlbmRhbnRET01Ob2Rlcztcbn1cblxuZnVuY3Rpb24gZmlsdGVyRE9NTm9kZXMoZG9tTm9kZXMsIHNlbGVjdG9yKSB7XG4gIGNvbnN0IGZpbHRlcmVkRE9NTm9kZXMgPSBmaWx0ZXIoZG9tTm9kZXMsIGZ1bmN0aW9uKGRvbU5vZGUpIHtcbiAgICByZXR1cm4gZG9tTm9kZU1hdGNoZXNTZWxlY3Rvcihkb21Ob2RlLCBzZWxlY3Rvcik7XG4gIH0pO1xuXG4gIHJldHVybiBmaWx0ZXJlZERPTU5vZGVzO1xufVxuXG5mdW5jdGlvbiBkb21Ob2RlTWF0Y2hlc1NlbGVjdG9yKGRvbU5vZGUsIHNlbGVjdG9yKSB7XG4gIGNvbnN0IGRvbU5vZGVUeXBlID0gZG9tTm9kZS5ub2RlVHlwZTtcblxuICBzd2l0Y2ggKGRvbU5vZGVUeXBlKSB7XG4gICAgY2FzZSBOb2RlLkVMRU1FTlRfTk9ERSA6IHtcbiAgICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb21Ob2RlOyAvLy9cblxuICAgICAgcmV0dXJuIGRvbUVsZW1lbnQubWF0Y2hlcyhzZWxlY3Rvcik7XG4gICAgfVxuXG4gICAgY2FzZSBOb2RlLlRFWFRfTk9ERSA6IHtcbiAgICAgIGlmIChzZWxlY3RvciA9PT0gJyonKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZmlsdGVyKGFycmF5LCB0ZXN0KSB7XG4gIGNvbnN0IGZpbHRlcmVkQXJyYXkgPSBbXTtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICByZXN1bHQgPSB0ZXN0KGVsZW1lbnQpO1xuXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgZmlsdGVyZWRBcnJheS5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmaWx0ZXJlZEFycmF5O1xufVxuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKTtcblxuY2xhc3MgQm9keSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciA9ICdib2R5Jykge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gQm9keS5jbG9uZSh0aGlzKTsgfVxuXG4gIHN0YXRpYyBjbG9uZShlbGVtZW50KSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuY2xvbmUoQm9keSwgZWxlbWVudCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCkge1xuICAgIHJldHVybiBFbGVtZW50LmZyb21IVE1MKEJvZHksIGh0bWwpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpIHtcbiAgICByZXR1cm4gRWxlbWVudC5mcm9tRE9NRWxlbWVudChCb2R5LCBkb21FbGVtZW50KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQm9keSwgcHJvcGVydGllcyk7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihCb2R5LCB7XG4gIHRhZ05hbWU6ICdib2R5J1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQm9keTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKTtcblxuY2xhc3MgQnV0dG9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjbGlja0hhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICBpZiAoY2xpY2tIYW5kbGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub25DbGljayhjbGlja0hhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIGNsb25lKGNsaWNrSGFuZGxlcikgeyByZXR1cm4gQnV0dG9uLmNsb25lKHRoaXMsIGNsaWNrSGFuZGxlcik7IH1cblxuICBvbkNsaWNrKGNsaWNrSGFuZGxlciwgaW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUNsaWNrSGFuZGxlcikge1xuICAgIHN1cGVyLm9uQ2xpY2soY2xpY2tIYW5kbGVyLCBpbnRlcm1lZGlhdGVDbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgb2ZmQ2xpY2soY2xpY2tIYW5kbGVyKSB7XG4gICAgc3VwZXIub2ZmQ2xpY2soY2xpY2tIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBjbG9uZShlbGVtZW50LCBjbGlja0hhbmRsZXIpIHtcbiAgICByZXR1cm4gRWxlbWVudC5jbG9uZShCdXR0b24sIGVsZW1lbnQsIGNsaWNrSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCwgY2xpY2tIYW5kbGVyKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbUhUTUwoQnV0dG9uLCBodG1sLCBjbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQsIGNsaWNrSGFuZGxlcikge1xuICAgIHJldHVybiBFbGVtZW50LmZyb21ET01FbGVtZW50KEJ1dHRvbiwgZG9tRWxlbWVudCwgY2xpY2tIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBvbkNsaWNrIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNsaWNrSGFuZGxlciA9IG9uQ2xpY2s7IC8vL1xuXG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQnV0dG9uLCBwcm9wZXJ0aWVzLCBjbGlja0hhbmRsZXIpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oQnV0dG9uLCB7XG4gIHRhZ05hbWU6ICdidXR0b24nLFxuICBpZ25vcmVkUHJvcGVydGllczogW1xuICAgICdvbkNsaWNrJ1xuICBdXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBCdXR0b247XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbnRlcm1lZGlhdGVDbGlja0hhbmRsZXIoY2xpY2tIYW5kbGVyLCBldmVudCwgdGFyZ2V0RWxlbWVudCkge1xuICBjb25zdCBtb3VzZUJ1dHRvbiA9IGV2ZW50LmJ1dHRvbixcbiAgICAgICAgcHJldmVudERlZmF1bHQgPSBjbGlja0hhbmRsZXIobW91c2VCdXR0b24sIHRhcmdldEVsZW1lbnQpO1xuXG4gIHJldHVybiBwcmV2ZW50RGVmYXVsdDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKTtcblxuY2xhc3MgQ2hlY2tib3ggZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNoYW5nZUhhbmRsZXIsIGNoZWNrZWQpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICBpZiAoY2hhbmdlSGFuZGxlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIpO1xuICAgIH1cbiAgICBcbiAgICBpZiAoY2hlY2tlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmNoZWNrKGNoZWNrZWQpO1xuICAgIH1cbiAgfVxuXG4gIGNsb25lKGNoYW5nZUhhbmRsZXIpIHsgcmV0dXJuIENoZWNrYm94LmNsb25lKHRoaXMsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgb25DaGFuZ2UoY2hhbmdlSGFuZGxlciwgaW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyKSB7XG4gICAgdGhpcy5vbignY2xpY2snLCBjaGFuZ2VIYW5kbGVyLCBpbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyKTsgIC8vL1xuICB9XG4gIFxuICBvZmZDaGFuZ2UoY2hhbmdlSGFuZGxlcikge1xuICAgIHRoaXMub2ZmKCdjbGljaycsIGNoYW5nZUhhbmRsZXIpOyAgLy8vXG4gIH1cblxuICBjaGVjayhjaGVja2VkID0gdHJ1ZSkge1xuICAgIGNoZWNrZWQgP1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpIDpcbiAgICAgICAgdGhpcy5jbGVhckF0dHJpYnV0ZSgnY2hlY2tlZCcpO1xuICB9XG5cbiAgaXNDaGVja2VkKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNoZWNrZWQ7IH1cblxuICBvblJlc2l6ZSgpIHt9XG5cbiAgb2ZmUmVzaXplKCkge31cblxuICBzdGF0aWMgY2xvbmUoZWxlbWVudCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBFbGVtZW50LmNsb25lKENoZWNrYm94LCBlbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sLCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbUhUTUwoQ2hlY2tib3gsIGh0bWwsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICByZXR1cm4gRWxlbWVudC5mcm9tRE9NRWxlbWVudChDaGVja2JveCwgZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UsIGNoZWNrZWQgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IG9uQ2hhbmdlOyAvLy8gICAgXG5cbiAgICByZXR1cm4gRWxlbWVudC5mcm9tUHJvcGVydGllcyhDaGVja2JveCwgcHJvcGVydGllcywgY2hhbmdlSGFuZGxlciwgY2hlY2tlZCk7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihDaGVja2JveCwge1xuICB0YWdOYW1lOiAnaW5wdXQnLFxuICBpZ25vcmVkUHJvcGVydGllczogW1xuICAgICdvbkNoYW5nZScsXG4gICAgJ2NoZWNrZWQnXG4gIF0sXG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgdHlwZTogJ2NoZWNrYm94J1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBDaGVja2JveDtcblxuZnVuY3Rpb24gZGVmYXVsdEludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIoY2hhbmdlSGFuZGxlciwgZXZlbnQsIHRhcmdldEVsZW1lbnQpIHtcbiAgY29uc3QgY2hlY2tib3ggPSB0YXJnZXRFbGVtZW50LCAvLy9cbiAgICAgICAgY2hlY2tlZCA9IGNoZWNrYm94LmlzQ2hlY2tlZCgpLFxuICAgICAgICBwcmV2ZW50RGVmYXVsdCA9IGNoYW5nZUhhbmRsZXIoY2hlY2tlZCwgdGFyZ2V0RWxlbWVudCk7XG5cbiAgcmV0dXJuIHByZXZlbnREZWZhdWx0O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpO1xuXG5jbGFzcyBEaXYgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIERpdi5jbG9uZSh0aGlzKTsgfVxuXG4gIHN0YXRpYyBjbG9uZShlbGVtZW50KSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuY2xvbmUoRGl2LCBlbGVtZW50KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbUhUTUwoRGl2LCBodG1sKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50KSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoRGl2LCBkb21FbGVtZW50KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoRGl2LCBwcm9wZXJ0aWVzKTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKERpdiwge1xuICB0YWdOYW1lOiAnZGl2J1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGl2O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpO1xuXG5jbGFzcyBMaW5rIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjbGlja0hhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICBpZiAoY2xpY2tIYW5kbGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub25DbGljayhjbGlja0hhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIGNsb25lKGNsaWNrSGFuZGxlcikgeyByZXR1cm4gTGluay5jbG9uZSh0aGlzLCBjbGlja0hhbmRsZXIpOyB9XG5cbiAgb25DbGljayhjbGlja0hhbmRsZXIsIGludGVybWVkaWF0ZUNsaWNrSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVDbGlja0hhbmRsZXIpIHtcbiAgICB0aGlzLm9uKCdjbGljaycsIGNsaWNrSGFuZGxlciwgaW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyKTtcbiAgfVxuICBcbiAgb2ZmQ2xpY2soY2xpY2tIYW5kbGVyKSB7XG4gICAgdGhpcy5vZmYoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBjbG9uZShlbGVtZW50LCBjbGlja0hhbmRsZXIpIHtcbiAgICByZXR1cm4gRWxlbWVudC5jbG9uZShMaW5rLCBlbGVtZW50LCBjbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwsIGNsaWNrSGFuZGxlcikge1xuICAgIHJldHVybiBFbGVtZW50LmZyb21IVE1MKExpbmssIGh0bWwsIGNsaWNrSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCwgY2xpY2tIYW5kbGVyKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoTGluaywgZG9tRWxlbWVudCwgY2xpY2tIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBvbkNsaWNrIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNsaWNrSGFuZGxlciA9IG9uQ2xpY2s7IC8vLyAgICBcblxuICAgIHJldHVybiBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKExpbmssIHByb3BlcnRpZXMsIGNsaWNrSGFuZGxlcik7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihMaW5rLCB7XG4gIHRhZ05hbWU6ICdhJyxcbiAgaWdub3JlZFByb3BlcnRpZXM6IFtcbiAgICAnb25DbGljaydcbiAgXVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTGluaztcblxuZnVuY3Rpb24gZGVmYXVsdEludGVybWVkaWF0ZUNsaWNrSGFuZGxlcihjbGlja0hhbmRsZXIsIGV2ZW50LCB0YXJnZXRFbGVtZW50KSB7XG4gIGNvbnN0IGxpbmsgPSB0YXJnZXRFbGVtZW50LCAvLy9cbiAgICAgICAgaHJlZiA9IGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJyksXG4gICAgICAgIHByZXZlbnREZWZhdWx0ID0gY2xpY2tIYW5kbGVyKGhyZWYsIHRhcmdldEVsZW1lbnQpO1xuXG4gIHJldHVybiBwcmV2ZW50RGVmYXVsdDtcbn0iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50Jyk7XG5cbmNsYXNzIFNlbGVjdCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY2hhbmdlSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjaGFuZ2VIYW5kbGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoY2hhbmdlSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gU2VsZWN0LmNsb25lKHRoaXMsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgb25DaGFuZ2UoY2hhbmdlSGFuZGxlciwgaW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyKSB7XG4gICAgdGhpcy5vbignY2hhbmdlJywgY2hhbmdlSGFuZGxlciwgaW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBvZmZDaGFuZ2UoY2hhbmdlSGFuZGxlcikge1xuICAgIHRoaXMub2ZmKCdjaGFuZ2UnLCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIGdldFNlbGVjdGVkT3B0aW9uVmFsdWUoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRPcHRpb25WYWx1ZSA9IHRoaXMuZG9tRWxlbWVudC52YWx1ZTsgIC8vL1xuICAgIFxuICAgIHJldHVybiBzZWxlY3RlZE9wdGlvblZhbHVlO1xuICB9XG5cbiAgc2V0U2VsZWN0ZWRPcHRpb25CeVZhbHVlKHNlbGVjdGVkT3B0aW9uVmFsdWUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHNlbGVjdGVkT3B0aW9uVmFsdWU7ICAvLy9cbiAgICBcbiAgICB0aGlzLmRvbUVsZW1lbnQudmFsdWUgPSB2YWx1ZTsgXG4gIH1cblxuICBzdGF0aWMgY2xvbmUoZWxlbWVudCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBFbGVtZW50LmNsb25lKFNlbGVjdCwgZWxlbWVudCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBFbGVtZW50LmZyb21IVE1MKFNlbGVjdCwgaHRtbCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBFbGVtZW50LmZyb21ET01FbGVtZW50KFNlbGVjdCwgZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IG9uQ2hhbmdlOyAvLy8gICAgXG5cbiAgICByZXR1cm4gRWxlbWVudC5mcm9tUHJvcGVydGllcyhTZWxlY3QsIHByb3BlcnRpZXMsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oU2VsZWN0LCB7XG4gIHRhZ05hbWU6ICdzZWxlY3QnLFxuICBpZ25vcmVkUHJvcGVydGllczogW1xuICAgICdvbkNoYW5nZSdcbiAgXVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2VsZWN0O1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcihjaGFuZ2VIYW5kbGVyLCBldmVudCwgdGFyZ2V0RWxlbWVudCkge1xuICBjb25zdCBzZWxlY3QgPSB0YXJnZXRFbGVtZW50LCAvLy9cbiAgICAgICAgc2VsZWN0ZWRPcHRpb25WYWx1ZSA9IHNlbGVjdC5nZXRTZWxlY3RlZE9wdGlvblZhbHVlKCksXG4gICAgICAgIHByZXZlbnREZWZhdWx0ID0gY2hhbmdlSGFuZGxlcihzZWxlY3RlZE9wdGlvblZhbHVlLCB0YXJnZXRFbGVtZW50KTtcblxuICByZXR1cm4gcHJldmVudERlZmF1bHQ7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50Jyk7XG5cbmNsYXNzIFNwYW4gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY2xvbmUoKSB7IHJldHVybiBTcGFuLmNsb25lKHRoaXMpOyB9XG5cbiAgb25SZXNpemUoKSB7fVxuXG4gIG9mZlJlc2l6ZSgpIHt9XG5cbiAgc3RhdGljIGNsb25lKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gRWxlbWVudC5jbG9uZShTcGFuLCBlbGVtZW50KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbUhUTUwoU3BhbiwgaHRtbCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICAgIHJldHVybiBFbGVtZW50LmZyb21ET01FbGVtZW50KFNwYW4sIGRvbUVsZW1lbnQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICByZXR1cm4gRWxlbWVudC5mcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFNwYW4sIHtcbiAgdGFnTmFtZTogJ3NwYW4nXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBTcGFuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50Jyk7XG5cbmNsYXNzIElucHV0RWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY2hhbmdlSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjaGFuZ2VIYW5kbGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoY2hhbmdlSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgb25SZXNpemUoKSB7fVxuXG4gIG9mZlJlc2l6ZSgpIHt9XG5cbiAgb25DaGFuZ2UoY2hhbmdlSGFuZGxlciwgaW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyKSB7XG4gICAgdGhpcy5vbignY2hhbmdlJywgY2hhbmdlSGFuZGxlciwgaW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBvZmZDaGFuZ2UoY2hhbmdlSGFuZGxlcikge1xuICAgIHRoaXMub2ZmKCdjaGFuZ2UnLCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIGdldFZhbHVlKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnZhbHVlOyB9XG5cbiAgZ2V0U2VsZWN0aW9uU3RhcnQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQ7IH1cblxuICBnZXRTZWxlY3Rpb25FbmQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uRW5kOyB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHsgdGhpcy5kb21FbGVtZW50LnZhbHVlID0gdmFsdWU7IH1cblxuICBzZXRTZWxlY3Rpb25TdGFydChzZWxlY3Rpb25TdGFydCkgeyB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgPSBzZWxlY3Rpb25TdGFydDsgfVxuXG4gIHNldFNlbGVjdGlvbkVuZChzZWxlY3Rpb25FbmQpIHsgdGhpcy5kb21FbGVtZW50LnNlbGVjdGlvbkVuZCA9IHNlbGVjdGlvbkVuZDsgfVxuXG4gIHNlbGVjdCgpIHsgdGhpcy5kb21FbGVtZW50LnNlbGVjdCgpOyB9XG5cbiAgc3RhdGljIGNsb25lKENsYXNzLCBlbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICByZXR1cm4gRWxlbWVudC5jbG9uZShDbGFzcywgZWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21IVE1MKENsYXNzLCBodG1sLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICByZXR1cm4gRWxlbWVudC5mcm9tSFRNTChDbGFzcywgaHRtbCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChDbGFzcywgZG9tRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoQ2xhc3MsIGRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IG9uQ2hhbmdlOyAvLy9cblxuICAgIHJldHVybiBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBjaGFuZ2VIYW5kbGVyLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oSW5wdXRFbGVtZW50LCB7XG4gIGlnbm9yZWRQcm9wZXJ0aWVzOiBbXG4gICAgJ29uQ2hhbmdlJ1xuICBdXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnB1dEVsZW1lbnQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyKGNoYW5nZUhhbmRsZXIsIGV2ZW50LCB0YXJnZXRFbGVtZW50KSB7XG4gIGNvbnN0IGlucHV0RWxlbWVudCA9IHRhcmdldEVsZW1lbnQsIC8vL1xuICAgICAgICB2YWx1ZSA9IGlucHV0RWxlbWVudC5nZXRWYWx1ZSgpLFxuICAgICAgICBwcmV2ZW50RGVmYXVsdCA9IGNoYW5nZUhhbmRsZXIodmFsdWUsIHRhcmdldEVsZW1lbnQpO1xuXG4gIHJldHVybiBwcmV2ZW50RGVmYXVsdDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgSW5wdXRFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW5wdXRFbGVtZW50Jyk7XG5cbmNsYXNzIElucHV0IGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgY2xvbmUoY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gSW5wdXQuY2xvbmUodGhpcywgY2hhbmdlSGFuZGxlcik7IH1cblxuICBzdGF0aWMgY2xvbmUoZWxlbWVudCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuY2xvbmUoSW5wdXQsIGVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21IVE1MKElucHV0LCBodG1sLCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tRE9NRWxlbWVudChJbnB1dCwgZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoSW5wdXQsIHByb3BlcnRpZXMpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oSW5wdXQsIHtcbiAgdGFnTmFtZTogJ2lucHV0J1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gSW5wdXQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IElucHV0RWxlbWVudCA9IHJlcXVpcmUoJy4uL2lucHV0RWxlbWVudCcpO1xuXG5jbGFzcyBUZXh0YXJlYSBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIGNsb25lKGNoYW5nZUhhbmRsZXIpIHsgcmV0dXJuIFRleHRhcmVhLmNsb25lKHRoaXMsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgc3RhdGljIGNsb25lKGVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmNsb25lKFRleHRhcmVhLCBlbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sLCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tSFRNTChUZXh0YXJlYSwgaHRtbCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoVGV4dGFyZWEsIGRvbUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFRleHRhcmVhLCBwcm9wZXJ0aWVzKTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFRleHRhcmVhLCB7XG4gIHRhZ05hbWU6ICd0ZXh0YXJlYSdcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHRhcmVhO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBCb3VuZHMge1xuICBjb25zdHJ1Y3Rvcih0b3AsIGxlZnQsIGJvdHRvbSwgcmlnaHQpIHtcbiAgICB0aGlzLnRvcCA9IHRvcDtcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgIHRoaXMuYm90dG9tID0gYm90dG9tO1xuICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgfVxuXG4gIGdldFRvcCgpIHtcbiAgICByZXR1cm4gdGhpcy50b3A7XG4gIH1cblxuICBnZXRMZWZ0KCkge1xuICAgIHJldHVybiB0aGlzLmxlZnQ7XG4gIH1cblxuICBnZXRCb3R0b20oKSB7XG4gICAgcmV0dXJuIHRoaXMuYm90dG9tO1xuICB9XG5cbiAgZ2V0UmlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmlnaHQ7XG4gIH1cblxuICBpc092ZXJsYXBwaW5nTW91c2UobW91c2VUb3AsIG1vdXNlTGVmdCkge1xuICAgIHJldHVybiAoICAodGhpcy50b3AgPCBtb3VzZVRvcCkgJiZcbiAgICAgICAgICAgICAgKHRoaXMubGVmdCA8IG1vdXNlTGVmdCkgJiZcbiAgICAgICAgICAgICAgKHRoaXMuYm90dG9tID4gbW91c2VUb3ApICYmXG4gICAgICAgICAgICAgICh0aGlzLnJpZ2h0ID4gbW91c2VMZWZ0KSAgKTtcbiAgfVxuXG4gIGFyZU92ZXJsYXBwaW5nKGJvdW5kcykge1xuICAgIHJldHVybiAoICAodGhpcy50b3AgPCBib3VuZHMuYm90dG9tKSAmJlxuICAgICAgICAgICAgICAodGhpcy5sZWZ0IDwgYm91bmRzLnJpZ2h0KSAmJlxuICAgICAgICAgICAgICAodGhpcy5ib3R0b20gPiBib3VuZHMudG9wKSAmJlxuICAgICAgICAgICAgICAodGhpcy5yaWdodCA+IGJvdW5kcy5sZWZ0KSAgKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQm91bmRpbmdDbGllbnRSZWN0KGJvdW5kaW5nQ2xpZW50UmVjdCkge1xuICAgIGNvbnN0IHdpbmRvd1Njcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCwgLy8vXG4gICAgICAgICAgd2luZG93U2Nyb2xsTGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldCwgIC8vL1xuICAgICAgICAgIHRvcCA9IGJvdW5kaW5nQ2xpZW50UmVjdC50b3AgKyB3aW5kb3dTY3JvbGxUb3AsXG4gICAgICAgICAgbGVmdCA9IGJvdW5kaW5nQ2xpZW50UmVjdC5sZWZ0ICsgd2luZG93U2Nyb2xsTGVmdCxcbiAgICAgICAgICBib3R0b20gPSBib3VuZGluZ0NsaWVudFJlY3QuYm90dG9tICsgd2luZG93U2Nyb2xsVG9wLFxuICAgICAgICAgIHJpZ2h0ID0gYm91bmRpbmdDbGllbnRSZWN0LnJpZ2h0ICsgd2luZG93U2Nyb2xsTGVmdCxcbiAgICAgICAgICBib3VuZHMgPSBuZXcgQm91bmRzKHRvcCwgbGVmdCwgYm90dG9tLCByaWdodCk7XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQm91bmRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBPZmZzZXQge1xuICBjb25zdHJ1Y3Rvcih0b3AsIGxlZnQpIHtcbiAgICB0aGlzLnRvcCA9IHRvcDtcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICB9XG5cbiAgZ2V0VG9wKCkge1xuICAgIHJldHVybiB0aGlzLnRvcDtcbiAgfVxuXG4gIGdldExlZnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9mZnNldDtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gb25DbGljayhoYW5kbGVyLCBpbnRlcm1lZGlhdGVIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUhhbmRsZXIpIHtcbiAgdGhpcy5vbignY2xpY2snLCBoYW5kbGVyLCBpbnRlcm1lZGlhdGVIYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gb2ZmQ2xpY2soaGFuZGxlcikgeyB0aGlzLm9mZignY2xpY2snLCBoYW5kbGVyKTsgfVxuXG5jb25zdCBjbGlja01peGluID0ge1xuICBvbkNsaWNrOiBvbkNsaWNrLFxuICBvZmZDbGljazogb2ZmQ2xpY2tcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY2xpY2tNaXhpbjtcblxuZnVuY3Rpb24gZGVmYXVsdEludGVybWVkaWF0ZUhhbmRsZXIoaGFuZGxlciwgZXZlbnQsIHRhcmdldEVsZW1lbnQpIHtcbiAgY29uc3QgbW91c2VUb3AgPSBldmVudC5wYWdlWSwgIC8vL1xuICAgICAgICBtb3VzZUxlZnQgPSBldmVudC5wYWdlWCwgLy8vXG4gICAgICAgIG1vdXNlQnV0dG9uID0gZXZlbnQuYnV0dG9uLCAvLy9cbiAgICAgICAgcHJldmVudERlZmF1bHQgPSBoYW5kbGVyKG1vdXNlVG9wLCBtb3VzZUxlZnQsIG1vdXNlQnV0dG9uLCB0YXJnZXRFbGVtZW50KTtcblxuICByZXR1cm4gcHJldmVudERlZmF1bHQ7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIG9uKGV2ZW50VHlwZXMsIGhhbmRsZXIsIGludGVybWVkaWF0ZUhhbmRsZXIpIHtcbiAgZXZlbnRUeXBlcyA9IGV2ZW50VHlwZXMuc3BsaXQoJyAnKTsgLy8vXG5cbiAgZXZlbnRUeXBlcy5mb3JFYWNoKGZ1bmN0aW9uKGV2ZW50VHlwZSkge1xuICAgIG9uRXZlbnQodGhpcywgZXZlbnRUeXBlLCBoYW5kbGVyLCBpbnRlcm1lZGlhdGVIYW5kbGVyKTtcbiAgfS5iaW5kKHRoaXMpKTtcbn1cblxuZnVuY3Rpb24gb2ZmKGV2ZW50VHlwZXMsIGhhbmRsZXIpIHtcbiAgZXZlbnRUeXBlcyA9IGV2ZW50VHlwZXMuc3BsaXQoJyAnKTsgLy8vXG5cbiAgZXZlbnRUeXBlcy5mb3JFYWNoKGZ1bmN0aW9uKGV2ZW50VHlwZSkge1xuICAgIG9mZkV2ZW50KHRoaXMsIGV2ZW50VHlwZSwgaGFuZGxlcik7XG4gIH0uYmluZCh0aGlzKSk7XG59XG5cbmNvbnN0IGV2ZW50TWl4aW4gPSB7XG4gIG9uOiBvbixcbiAgb2ZmOiBvZmZcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXZlbnRNaXhpbjtcblxuZnVuY3Rpb24gb25FdmVudChlbGVtZW50LCBldmVudFR5cGUsIGhhbmRsZXIsIGludGVybWVkaWF0ZUhhbmRsZXIpIHtcbiAgaWYgKCFlbGVtZW50Lmhhc093blByb3BlcnR5KCdldmVudE9iamVjdE1hcCcpKSB7XG4gICAgY29uc3QgZXZlbnRPYmplY3RNYXAgPSB7fTtcblxuICAgIE9iamVjdC5hc3NpZ24oZWxlbWVudCwge1xuICAgICAgZXZlbnRPYmplY3RNYXA6IGV2ZW50T2JqZWN0TWFwXG4gICAgfSk7XG4gIH1cblxuICBsZXQgZXZlbnRPYmplY3QgPSBlbGVtZW50LmV2ZW50T2JqZWN0TWFwW2V2ZW50VHlwZV07XG5cbiAgaWYgKCFldmVudE9iamVjdCkge1xuICAgIGV2ZW50T2JqZWN0ID0gY3JlYXRlRXZlbnRPYmplY3QoKTtcblxuICAgIGVsZW1lbnQuZXZlbnRPYmplY3RNYXBbZXZlbnRUeXBlXSA9IGV2ZW50T2JqZWN0O1xuICB9XG5cbiAgZXZlbnRPYmplY3QuYWRkSGFuZGxlcihlbGVtZW50LCBldmVudFR5cGUsIGhhbmRsZXIsIGludGVybWVkaWF0ZUhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvZmZFdmVudChlbGVtZW50LCBldmVudFR5cGUsIGhhbmRsZXIpIHtcbiAgY29uc3QgZXZlbnRPYmplY3QgPSBlbGVtZW50LmV2ZW50T2JqZWN0TWFwW2V2ZW50VHlwZV0sXG4gICAgICAgIG5vbmVSZW1haW5pbmcgPSBldmVudE9iamVjdC5yZW1vdmVIYW5kbGVyKGVsZW1lbnQsIGV2ZW50VHlwZSwgaGFuZGxlcik7XG5cbiAgaWYgKG5vbmVSZW1haW5pbmcpIHtcbiAgICBkZWxldGUgZWxlbWVudC5ldmVudE9iamVjdE1hcFtldmVudFR5cGVdO1xuICB9XG5cbiAgY29uc3QgZXZlbnRUeXBlcyA9IE9iamVjdC5rZXlzKGVsZW1lbnQuZXZlbnRPYmplY3RNYXApO1xuXG4gIGlmIChldmVudFR5cGVzLmxlbmd0aCA9PT0gMCkge1xuICAgIGRlbGV0ZSBlbGVtZW50LmV2ZW50T2JqZWN0TWFwO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUV2ZW50T2JqZWN0KCkge1xuICBjb25zdCBldmVudExpc3RlbmVycyA9IFtdO1xuXG4gIGZ1bmN0aW9uIGFkZEhhbmRsZXIoZWxlbWVudCwgZXZlbnRUeXBlLCBoYW5kbGVyLCBpbnRlcm1lZGlhdGVIYW5kbGVyKSB7XG4gICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGVsZW1lbnQsICAvLy9cbiAgICAgICAgICBldmVudExpc3RlbmVyID0gY3JlYXRlRXZlbnRMaXN0ZW5lcihoYW5kbGVyLCBpbnRlcm1lZGlhdGVIYW5kbGVyLCB0YXJnZXRFbGVtZW50KTtcblxuICAgIGVsZW1lbnQuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgZXZlbnRMaXN0ZW5lcik7XG5cbiAgICBldmVudExpc3RlbmVycy5wdXNoKGV2ZW50TGlzdGVuZXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlSGFuZGxlcihlbGVtZW50LCBldmVudFR5cGUsIGhhbmRsZXIgPSBudWxsKSB7XG4gICAgaWYgKGhhbmRsZXIgPT09IG51bGwpIHtcbiAgICAgIGV2ZW50TGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24oZXZlbnRMaXN0ZW5lcikge1xuICAgICAgICBlbGVtZW50LmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGV2ZW50TGlzdGVuZXIpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHN0YXJ0ID0gMDtcblxuICAgICAgZXZlbnRMaXN0ZW5lcnMuc3BsaWNlKHN0YXJ0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW5kZXggPSBpbmRleE9mRXZlbnRMaXN0ZW5lcihldmVudExpc3RlbmVycywgaGFuZGxlciksXG4gICAgICAgICAgICBldmVudExpc3RlbmVyID0gZXZlbnRMaXN0ZW5lcnNbaW5kZXhdO1xuXG4gICAgICBlbGVtZW50LmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGV2ZW50TGlzdGVuZXIpO1xuXG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICAgIGV2ZW50TGlzdGVuZXJzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuICAgIH1cblxuICAgIGNvbnN0IG5vbmVSZW1haW5pbmcgPSAoZXZlbnRMaXN0ZW5lcnMubGVuZ3RoID09PSAwKTsgIC8vL1xuXG4gICAgcmV0dXJuIG5vbmVSZW1haW5pbmc7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGFkZEhhbmRsZXI6IGFkZEhhbmRsZXIsXG4gICAgcmVtb3ZlSGFuZGxlcjogcmVtb3ZlSGFuZGxlclxuICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFdmVudExpc3RlbmVyKGhhbmRsZXIsIGludGVybWVkaWF0ZUhhbmRsZXIsIHRhcmdldEVsZW1lbnQpIHtcbiAgaWYgKHR5cGVvZiBpbnRlcm1lZGlhdGVIYW5kbGVyID09PSAnb2JqZWN0Jykge1xuICAgIGNvbnN0IG9iamVjdCA9IGludGVybWVkaWF0ZUhhbmRsZXI7ICAvLy9cblxuICAgIGludGVybWVkaWF0ZUhhbmRsZXIgPSBjcmVhdGVCaW5kaW5nSW50ZXJtZWRpYXRlSGFuZGxlcihvYmplY3QpOyAvLy9cbiAgfVxuXG4gIGNvbnN0IGV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCkge1xuICAgIGNvbnN0IHByZXZlbnREZWZhdWx0ID0gKGludGVybWVkaWF0ZUhhbmRsZXIgIT09IHVuZGVmaW5lZCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJtZWRpYXRlSGFuZGxlcihoYW5kbGVyLCBldmVudCwgdGFyZ2V0RWxlbWVudCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyKGV2ZW50LCB0YXJnZXRFbGVtZW50KTtcblxuICAgIGlmIChwcmV2ZW50RGVmYXVsdCA9PT0gdHJ1ZSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfTtcblxuICBPYmplY3QuYXNzaWduKGV2ZW50TGlzdGVuZXIsIHtcbiAgICBoYW5kbGVyOiBoYW5kbGVyXG4gIH0pO1xuXG4gIHJldHVybiBldmVudExpc3RlbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCaW5kaW5nSW50ZXJtZWRpYXRlSGFuZGxlcihvYmplY3QpIHtcbiAgY29uc3QgYmluZGluZ0ludGVybWVkaWF0ZUhhbmRsZXIgPSBmdW5jdGlvbihoYW5kbGVyLCBldmVudCwgdGFyZ2V0RWxlbWVudCkge1xuICAgIGNvbnN0IHByZXZlbnREZWZhdWx0ID0gaGFuZGxlci5jYWxsKG9iamVjdCwgZXZlbnQsIHRhcmdldEVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIHByZXZlbnREZWZhdWx0O1xuICB9O1xuXG4gIHJldHVybiBiaW5kaW5nSW50ZXJtZWRpYXRlSGFuZGxlcjtcbn1cblxuZnVuY3Rpb24gaW5kZXhPZkV2ZW50TGlzdGVuZXIoZXZlbnRMaXN0ZW5lcnMsIGhhbmRsZXIpIHtcbiAgbGV0IGZvdW5kSW5kZXggPSB1bmRlZmluZWQ7IC8vL1xuXG4gIGV2ZW50TGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24oZXZlbnRMaXN0ZW5lciwgaW5kZXgpIHtcbiAgICBpZiAoZXZlbnRMaXN0ZW5lci5oYW5kbGVyID09PSBoYW5kbGVyKSB7ICAvLy9cbiAgICAgIGZvdW5kSW5kZXggPSBpbmRleDtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGluZGV4ID0gZm91bmRJbmRleDsgLy8vXG5cbiAgcmV0dXJuIGluZGV4O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBUZXh0RWxlbWVudCA9IHJlcXVpcmUoJy4uL3RleHRFbGVtZW50Jyk7XG5cbmZ1bmN0aW9uIGFkZFRvKHBhcmVudEVsZW1lbnQpIHtcbiAgdXBkYXRlUGFyZW50Q29udGV4dCh0aGlzLCBwYXJlbnRFbGVtZW50KTtcblxuICBwYXJlbnRFbGVtZW50LmFkZCh0aGlzKTtcbn1cblxuZnVuY3Rpb24gYXBwZW5kVG8ocGFyZW50RWxlbWVudCkge1xuICB1cGRhdGVQYXJlbnRDb250ZXh0KHRoaXMsIHBhcmVudEVsZW1lbnQpO1xuXG4gIHBhcmVudEVsZW1lbnQuYXBwZW5kKHRoaXMpO1xufVxuXG5mdW5jdGlvbiBwcmVwZW5kVG8ocGFyZW50RWxlbWVudCkge1xuICB1cGRhdGVQYXJlbnRDb250ZXh0KHRoaXMsIHBhcmVudEVsZW1lbnQpO1xuXG4gIHBhcmVudEVsZW1lbnQucHJlcGVuZCh0aGlzKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRnJvbShwYXJlbnRFbGVtZW50KSB7XG4gIHBhcmVudEVsZW1lbnQucmVtb3ZlKHRoaXMpO1xufVxuXG5mdW5jdGlvbiBhc3NpZ25Db250ZXh0KG5hbWVzID0gT2JqZWN0LmtleXModGhpcy5jb250ZXh0KSwgdGhlbkRlbGV0ZSA9IHRydWUpIHtcbiAgbmFtZXMuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmNvbnRleHRbbmFtZV0sXG4gICAgICAgICAgZGVzY3JpcHRvciA9IHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICAgIH07XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgbmFtZSwgZGVzY3JpcHRvcik7XG5cbiAgICBpZiAodGhlbkRlbGV0ZSkge1xuICAgICAgZGVsZXRlIHRoaXMuY29udGV4dFtuYW1lXTtcbiAgICB9XG4gIH0uYmluZCh0aGlzKSk7XG4gIFxuICBpZiAodGhlbkRlbGV0ZSkge1xuICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXModGhpcy5jb250ZXh0KSxcbiAgICAgICAgICBuYW1lc0xlbmd0aCA9IG5hbWVzLmxlbmd0aDsgLy8vXG4gICAgXG4gICAgaWYgKG5hbWVzTGVuZ3RoID09PSAwKSB7XG4gICAgICBkZWxldGUgdGhpcy5jb250ZXh0O1xuICAgIH0gXG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlQcm9wZXJ0aWVzKHByb3BlcnRpZXMgPSB7fSwgZGVmYXVsdFByb3BlcnRpZXMsIGlnbm9yZWRQcm9wZXJ0aWVzKSB7XG4gIGFzc2lnbihwcm9wZXJ0aWVzLCBkZWZhdWx0UHJvcGVydGllcyk7XG5cbiAgY29uc3QgY2hpbGRFbGVtZW50cyA9IGNoaWxkRWxlbWVudHNGcm9tRWxlbWVudEFuZFByb3BlcnRpZXModGhpcywgcHJvcGVydGllcyk7XG5cbiAgdW5hc3NpZ24ocHJvcGVydGllcywgaWdub3JlZFByb3BlcnRpZXMpO1xuXG4gIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMocHJvcGVydGllcyk7XG5cbiAgbmFtZXMuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgY29uc3QgdmFsdWUgPSBwcm9wZXJ0aWVzW25hbWVdO1xuXG4gICAgaWYgKGZhbHNlKSB7XG5cbiAgICB9IGVsc2UgaWYgKGlzSGFuZGxlck5hbWUobmFtZSkpIHtcbiAgICAgIGFkZEhhbmRsZXIodGhpcywgbmFtZSwgdmFsdWUpO1xuICAgIH0gZWxzZSBpZiAoaXNBdHRyaWJ1dGVOYW1lKG5hbWUpKSB7XG4gICAgICBhZGRBdHRyaWJ1dGUodGhpcywgbmFtZSwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXRoaXMuaGFzT3duUHJvcGVydHkoJ3Byb3BlcnRpZXMnKSkge1xuICAgICAgICBjb25zdCBwcm9wZXJ0aWVzID0ge307XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7XG4gICAgICAgICAgcHJvcGVydGllczogcHJvcGVydGllc1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5wcm9wZXJ0aWVzW25hbWVdID0gdmFsdWU7XG4gICAgfVxuICB9LmJpbmQodGhpcykpO1xuXG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICBjaGlsZEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oY2hpbGRFbGVtZW50KSB7XG4gICAgY2hpbGRFbGVtZW50LmFkZFRvKHBhcmVudEVsZW1lbnQpO1xuICB9LmJpbmQodGhpcykpO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9wZXJ0aWVzKCkge1xuICByZXR1cm4gdGhpcy5wcm9wZXJ0aWVzO1xufVxuXG5mdW5jdGlvbiBnZXRDb250ZXh0KCkge1xuICByZXR1cm4gdGhpcy5jb250ZXh0O1xufVxuXG5mdW5jdGlvbiBnZXRTdGF0ZSgpIHtcbiAgcmV0dXJuIHRoaXMuc3RhdGU7XG59XG5cbmZ1bmN0aW9uIHNldFN0YXRlKHN0YXRlKSB7XG4gIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbn1cblxuZnVuY3Rpb24gZnJvbVN0YXRlKG5hbWUpIHtcbiAgY29uc3QgdmFsdWUgPSB0aGlzLnN0YXRlW25hbWVdO1xuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlU3RhdGUodXBkYXRlKSB7XG4gIE9iamVjdC5hc3NpZ24odGhpcy5zdGF0ZSwgdXBkYXRlKTtcbn1cblxuY29uc3QganN4TWl4aW4gPSB7XG4gIGFkZFRvOiBhZGRUbyxcbiAgYXBwZW5kVG86IGFwcGVuZFRvLFxuICBwcmVwZW5kVG86IHByZXBlbmRUbyxcbiAgcmVtb3ZlRnJvbTogcmVtb3ZlRnJvbSxcbiAgYXNzaWduQ29udGV4dDogYXNzaWduQ29udGV4dCxcbiAgYXBwbHlQcm9wZXJ0aWVzOiBhcHBseVByb3BlcnRpZXMsXG4gIGdldFByb3BlcnRpZXM6IGdldFByb3BlcnRpZXMsXG4gIGdldENvbnRleHQ6IGdldENvbnRleHQsXG4gIGdldFN0YXRlOiBnZXRTdGF0ZSxcbiAgc2V0U3RhdGU6IHNldFN0YXRlLFxuICBmcm9tU3RhdGU6IGZyb21TdGF0ZSxcbiAgdXBkYXRlU3RhdGU6IHVwZGF0ZVN0YXRlXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGpzeE1peGluO1xuXG5mdW5jdGlvbiBjaGlsZEVsZW1lbnRzRnJvbUVsZW1lbnRBbmRQcm9wZXJ0aWVzKGVsZW1lbnQsIHByb3BlcnRpZXMpIHtcbiAgbGV0IGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LmNoaWxkRWxlbWVudHMgP1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllcy5jaGlsZEVsZW1lbnRzO1xuXG4gIGNoaWxkRWxlbWVudHMgPSAoY2hpbGRFbGVtZW50cyAhPT0gdW5kZWZpbmVkKSA/XG4gICAgICAgICAgICAgICAgICAgKChjaGlsZEVsZW1lbnRzIGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRFbGVtZW50cyA6XG4gICAgICAgICAgICAgICAgICAgICAgICBbY2hpbGRFbGVtZW50c10pIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW107XG5cbiAgY2hpbGRFbGVtZW50cyA9IGNoaWxkRWxlbWVudHMubWFwKGZ1bmN0aW9uKGNoaWxkRWxlbWVudCkge1xuICAgIGlmICh0eXBlb2YgY2hpbGRFbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc3QgdGV4dCA9IGNoaWxkRWxlbWVudCwgIC8vL1xuICAgICAgICAgICAgdGV4dEVsZW1lbnQgPSBuZXcgVGV4dEVsZW1lbnQodGV4dCk7XG5cbiAgICAgIGNoaWxkRWxlbWVudCA9IHRleHRFbGVtZW50OyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGRFbGVtZW50O1xuICB9KTtcblxuICByZXR1cm4gY2hpbGRFbGVtZW50cztcbn1cblxuZnVuY3Rpb24gdW5hc3NpZ24ocHJvcGVydGllcywgaWdub3JlZFByb3BlcnRpZXMgPSBbXSkge1xuICBjb25zdCBpZ25vcmVkUHJvcGVydHlOYW1lcyA9IGlnbm9yZWRQcm9wZXJ0aWVzOyAvLy9cblxuICBpZ25vcmVkUHJvcGVydHlOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKGlnbm9yZWRQcm9wZXJ0eU5hbWUpIHtcbiAgICBpZiAocHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShpZ25vcmVkUHJvcGVydHlOYW1lKSkge1xuICAgICAgZGVsZXRlIHByb3BlcnRpZXNbaWdub3JlZFByb3BlcnR5TmFtZV07XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYXNzaWduKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzID0ge30pIHtcbiAgY29uc3QgZGVmYXVsdFByb3BlcnR5TmFtZXMgPSBPYmplY3Qua2V5cyhkZWZhdWx0UHJvcGVydGllcyk7XG5cbiAgZGVmYXVsdFByb3BlcnR5TmFtZXMuZm9yRWFjaChmdW5jdGlvbihkZWZhdWx0UHJvcGVydHlOYW1lKSB7XG4gICAgaWYgKCFwcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KGRlZmF1bHRQcm9wZXJ0eU5hbWUpKSB7XG4gICAgICBjb25zdCBkZWZhdWx0UHJvcGVydHlWYWx1ZSA9IGRlZmF1bHRQcm9wZXJ0aWVzW2RlZmF1bHRQcm9wZXJ0eU5hbWVdO1xuXG4gICAgICBwcm9wZXJ0aWVzW2RlZmF1bHRQcm9wZXJ0eU5hbWVdID0gZGVmYXVsdFByb3BlcnR5VmFsdWU7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkSGFuZGxlcihlbGVtZW50LCBuYW1lLCB2YWx1ZSkge1xuICBjb25zdCBldmVudFR5cGUgPSBuYW1lLnN1YnN0cigyKS50b0xvd2VyQ2FzZSgpLCAvLy9cbiAgICAgICAgaGFuZGxlciA9IHZhbHVlOyAgLy8vXG5cbiAgZWxlbWVudC5vbihldmVudFR5cGUsIGhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRyaWJ1dGUoZWxlbWVudCwgbmFtZSwgdmFsdWUpIHtcbiAgaWYgKG5hbWUgPT09ICdjbGFzc05hbWUnKSB7XG4gICAgbmFtZSA9ICdjbGFzcyc7XG4gIH1cblxuICBpZiAobmFtZSA9PT0gJ2h0bWxGb3InKSB7XG4gICAgbmFtZSA9ICdmb3InO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuXG4gICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGVsZW1lbnQuZG9tRWxlbWVudFtuYW1lXVtrZXldID0gdmFsdWVba2V5XTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB2YWx1ZSA9IG5hbWU7IC8vL1xuXG4gICAgICBlbGVtZW50LmFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQuYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVQYXJlbnRDb250ZXh0KGVsZW1lbnQsIHBhcmVudEVsZW1lbnQpIHtcbiAgY29uc3QgcGFyZW50Q29udGV4dCA9IGVsZW1lbnQucGFyZW50Q29udGV4dCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucGFyZW50Q29udGV4dCgpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNvbnRleHQ7XG5cbiAgaWYgKHBhcmVudENvbnRleHQgIT09IHVuZGVmaW5lZCkge1xuICAgIGlmICghcGFyZW50RWxlbWVudC5oYXNPd25Qcm9wZXJ0eSgnY29udGV4dCcpKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0ge307XG5cbiAgICAgIE9iamVjdC5hc3NpZ24ocGFyZW50RWxlbWVudCwge1xuICAgICAgICBjb250ZXh0OiBjb250ZXh0XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBwYXJlbnRFbGVtZW50LmNvbnRleHQgPSBPYmplY3QuYXNzaWduKHBhcmVudEVsZW1lbnQuY29udGV4dCwgcGFyZW50Q29udGV4dCk7XG4gIH1cblxuICBjb25zdCBwcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZWxlbWVudCksXG4gICAgICAgIHByb3RvdHlwZUNvbnN0cnVjdG9yID0gcHJvdG90eXBlLmNvbnN0cnVjdG9yLCAvLy9cbiAgICAgICAgcHJvdG90eXBlQ29uc3RydWN0b3JOYW1lID0gcHJvdG90eXBlQ29uc3RydWN0b3IubmFtZTsgLy8vXG5cbiAgaWYgKHByb3RvdHlwZUNvbnN0cnVjdG9yTmFtZSA9PT0gJ0VsZW1lbnQnKSB7XG4gICAgZGVsZXRlIGVsZW1lbnQuY29udGV4dDtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0hhbmRsZXJOYW1lKG5hbWUpIHtcbiAgcmV0dXJuIG5hbWUubWF0Y2goL15vbi8pO1xufVxuXG5mdW5jdGlvbiBpc0F0dHJpYnV0ZU5hbWUobmFtZSkge1xuICByZXR1cm4gYXR0cmlidXRlTmFtZXMuaW5jbHVkZXMobmFtZSk7XG59XG5cbmNvbnN0IGF0dHJpYnV0ZU5hbWVzID0gW1xuICAnYWNjZXB0JywgJ2FjY2VwdENoYXJzZXQnLCAnYWNjZXNzS2V5JywgJ2FjdGlvbicsICdhbGxvd0Z1bGxTY3JlZW4nLCAnYWxsb3dUcmFuc3BhcmVuY3knLCAnYWx0JywgJ2FzeW5jJywgJ2F1dG9Db21wbGV0ZScsICdhdXRvRm9jdXMnLCAnYXV0b1BsYXknLFxuICAnY2FwdHVyZScsICdjZWxsUGFkZGluZycsICdjZWxsU3BhY2luZycsICdjaGFsbGVuZ2UnLCAnY2hhclNldCcsICdjaGVja2VkJywgJ2NpdGUnLCAnY2xhc3NJRCcsICdjbGFzc05hbWUnLCAnY29sU3BhbicsICdjb2xzJywgJ2NvbnRlbnQnLCAnY29udGVudEVkaXRhYmxlJywgJ2NvbnRleHRNZW51JywgJ2NvbnRyb2xzJywgJ2Nvb3JkcycsICdjcm9zc09yaWdpbicsXG4gICdkYXRhJywgJ2RhdGVUaW1lJywgJ2RlZmF1bHQnLCAnZGVmZXInLCAnZGlyJywgJ2Rpc2FibGVkJywgJ2Rvd25sb2FkJywgJ2RyYWdnYWJsZScsXG4gICdlbmNUeXBlJyxcbiAgJ2Zvcm0nLCAnZm9ybUFjdGlvbicsICdmb3JtRW5jVHlwZScsICdmb3JtTWV0aG9kJywgJ2Zvcm1Ob1ZhbGlkYXRlJywgJ2Zvcm1UYXJnZXQnLCAnZnJhbWVCb3JkZXInLFxuICAnaGVhZGVycycsICdoZWlnaHQnLCAnaGlkZGVuJywgJ2hpZ2gnLCAnaHJlZicsICdocmVmTGFuZycsICdodG1sRm9yJywgJ2h0dHBFcXVpdicsXG4gICdpY29uJywgJ2lkJywgJ2lucHV0TW9kZScsICdpbnRlZ3JpdHknLCAnaXMnLFxuICAna2V5UGFyYW1zJywgJ2tleVR5cGUnLCAna2luZCcsXG4gICdsYWJlbCcsICdsYW5nJywgJ2xpc3QnLCAnbG9vcCcsICdsb3cnLFxuICAnbWFuaWZlc3QnLCAnbWFyZ2luSGVpZ2h0JywgJ21hcmdpbldpZHRoJywgJ21heCcsICdtYXhMZW5ndGgnLCAnbWVkaWEnLCAnbWVkaWFHcm91cCcsICdtZXRob2QnLCAnbWluJywgJ21pbkxlbmd0aCcsICdtdWx0aXBsZScsICdtdXRlZCcsXG4gICduYW1lJywgJ25vVmFsaWRhdGUnLCAnbm9uY2UnLFxuICAnb3BlbicsICdvcHRpbXVtJyxcbiAgJ3BhdHRlcm4nLCAncGxhY2Vob2xkZXInLCAncG9zdGVyJywgJ3ByZWxvYWQnLCAncHJvZmlsZScsXG4gICdyYWRpb0dyb3VwJywgJ3JlYWRPbmx5JywgJ3JlbCcsICdyZXF1aXJlZCcsICdyZXZlcnNlZCcsICdyb2xlJywgJ3Jvd1NwYW4nLCAncm93cycsXG4gICdzYW5kYm94JywgJ3Njb3BlJywgJ3Njb3BlZCcsICdzY3JvbGxpbmcnLCAnc2VhbWxlc3MnLCAnc2VsZWN0ZWQnLCAnc2hhcGUnLCAnc2l6ZScsICdzaXplcycsICdzcGFuJywgJ3NwZWxsQ2hlY2snLCAnc3JjJywgJ3NyY0RvYycsICdzcmNMYW5nJywgJ3NyY1NldCcsICdzdGFydCcsICdzdGVwJywgJ3N0eWxlJywgJ3N1bW1hcnknLFxuICAndGFiSW5kZXgnLCAndGFyZ2V0JywgJ3RpdGxlJywgJ3R5cGUnLFxuICAndXNlTWFwJyxcbiAgJ3ZhbHVlJyxcbiAgJ3dpZHRoJyxcbiAgJ3dtb2RlJyxcbiAgJ3dyYXAnXG5dO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBvbktleVVwKGhhbmRsZXIsIGludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlSGFuZGxlcikge1xuICB0aGlzLm9uKCdrZXl1cCcsIGhhbmRsZXIsIGludGVybWVkaWF0ZUhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvbktleURvd24oaGFuZGxlciwgaW50ZXJtZWRpYXRlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVIYW5kbGVyKSB7XG4gIHRoaXMub24oJ2tleWRvd24nLCBoYW5kbGVyLCBpbnRlcm1lZGlhdGVIYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gb2ZmS2V5VXAoaGFuZGxlcikgeyB0aGlzLm9mZigna2V5dXAnLCBoYW5kbGVyKTsgfVxuXG5mdW5jdGlvbiBvZmZLZXlEb3duKGhhbmRsZXIpIHsgdGhpcy5vZmYoJ2tleWRvd24nLCBoYW5kbGVyKTsgfVxuXG5jb25zdCBrZXlNaXhpbiA9IHtcbiAgb25LZXlVcDogb25LZXlVcCxcbiAgb25LZXlEb3duOiBvbktleURvd24sXG4gIG9mZktleVVwOiBvZmZLZXlVcCxcbiAgb2ZmS2V5RG93bjogb2ZmS2V5RG93blxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBrZXlNaXhpbjtcblxuZnVuY3Rpb24gZGVmYXVsdEludGVybWVkaWF0ZUhhbmRsZXIoaGFuZGxlciwgZXZlbnQsIHRhcmdldEVsZW1lbnQpIHtcbiAgY29uc3Qga2V5Q29kZSA9IGV2ZW50LmtleUNvZGUsXG4gICAgICAgIHByZXZlbnREZWZhdWx0ID0gaGFuZGxlcihrZXlDb2RlLCB0YXJnZXRFbGVtZW50KTtcblxuICByZXR1cm4gcHJldmVudERlZmF1bHQ7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIG9uTW91c2VVcChoYW5kbGVyLCBpbnRlcm1lZGlhdGVIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUhhbmRsZXIpIHtcbiAgdGhpcy5vbignbW91c2V1cCcsIGhhbmRsZXIsIGludGVybWVkaWF0ZUhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvbk1vdXNlRG93bihoYW5kbGVyLCBpbnRlcm1lZGlhdGVIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUhhbmRsZXIpIHtcbiAgdGhpcy5vbignbW91c2Vkb3duJywgaGFuZGxlciwgaW50ZXJtZWRpYXRlSGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIG9uTW91c2VPdmVyKGhhbmRsZXIsIGludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlSGFuZGxlcikge1xuICB0aGlzLm9uKCdtb3VzZW92ZXInLCBoYW5kbGVyLCBpbnRlcm1lZGlhdGVIYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gb25Nb3VzZU91dChoYW5kbGVyLCBpbnRlcm1lZGlhdGVIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUhhbmRsZXIpIHtcbiAgdGhpcy5vbignbW91c2VvdXQnLCBoYW5kbGVyLCBpbnRlcm1lZGlhdGVIYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gb25Nb3VzZU1vdmUoaGFuZGxlciwgaW50ZXJtZWRpYXRlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVIYW5kbGVyKSB7XG4gIHRoaXMub24oJ21vdXNlbW92ZScsIGhhbmRsZXIsIGludGVybWVkaWF0ZUhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvZmZNb3VzZVVwKGhhbmRsZXIpIHsgdGhpcy5vZmYoJ21vdXNldXAnLCBoYW5kbGVyKTsgfVxuXG5mdW5jdGlvbiBvZmZNb3VzZURvd24oaGFuZGxlcikgeyB0aGlzLm9mZignbW91c2Vkb3duJywgaGFuZGxlcik7IH1cblxuZnVuY3Rpb24gb2ZmTW91c2VPdmVyKGhhbmRsZXIpIHsgdGhpcy5vZmYoJ21vdXNlb3ZlcicsIGhhbmRsZXIpOyB9XG5cbmZ1bmN0aW9uIG9mZk1vdXNlT3V0KGhhbmRsZXIpIHsgdGhpcy5vZmYoJ21vdXNlb3V0JywgaGFuZGxlcik7IH1cblxuZnVuY3Rpb24gb2ZmTW91c2VNb3ZlKGhhbmRsZXIpIHsgdGhpcy5vZmYoJ21vdXNlbW92ZScsIGhhbmRsZXIpOyB9XG5cbmNvbnN0IG1vdXNlTWl4aW4gPSB7XG4gIG9uTW91c2VVcDogb25Nb3VzZVVwLFxuICBvbk1vdXNlRG93bjogb25Nb3VzZURvd24sXG4gIG9uTW91c2VPdmVyOiBvbk1vdXNlT3ZlcixcbiAgb25Nb3VzZU91dDogb25Nb3VzZU91dCxcbiAgb25Nb3VzZU1vdmU6IG9uTW91c2VNb3ZlLFxuICBvZmZNb3VzZVVwOiBvZmZNb3VzZVVwLFxuICBvZmZNb3VzZURvd246IG9mZk1vdXNlRG93bixcbiAgb2ZmTW91c2VPdmVyOiBvZmZNb3VzZU92ZXIsXG4gIG9mZk1vdXNlT3V0OiBvZmZNb3VzZU91dCxcbiAgb2ZmTW91c2VNb3ZlOiBvZmZNb3VzZU1vdmVcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbW91c2VNaXhpbjtcblxuZnVuY3Rpb24gZGVmYXVsdEludGVybWVkaWF0ZUhhbmRsZXIoaGFuZGxlciwgZXZlbnQsIHRhcmdldEVsZW1lbnQpIHtcbiAgY29uc3QgbW91c2VUb3AgPSBldmVudC5wYWdlWSwgIC8vL1xuICAgICAgICBtb3VzZUxlZnQgPSBldmVudC5wYWdlWCwgLy8vXG4gICAgICAgIG1vdXNlQnV0dG9uID0gZXZlbnQuYnV0dG9uLCAvLy9cbiAgICAgICAgcHJldmVudERlZmF1bHQgPSBoYW5kbGVyKG1vdXNlVG9wLCBtb3VzZUxlZnQsIG1vdXNlQnV0dG9uLCB0YXJnZXRFbGVtZW50KTtcblxuICByZXR1cm4gcHJldmVudERlZmF1bHQ7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIG9uUmVzaXplKGhhbmRsZXIpIHtcbiAgY29uc3QgZXZlbnRUeXBlID0gJ3Jlc2l6ZScsXG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXIgPSB0aGlzLm9uKGV2ZW50VHlwZSwgaGFuZGxlcik7XG5cbiAgaWYgKGFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICBhcHBlbmRSZXNpemVPYmplY3QodGhpcyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gb2ZmUmVzaXplKGhhbmRsZXIpIHtcbiAgY29uc3QgZXZlbnRUeXBlID0gJ3Jlc2l6ZScsXG4gICAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIgPSB0aGlzLm9mZihldmVudFR5cGUsIGhhbmRsZXIpO1xuXG4gIGlmIChyZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgcmVtb3ZlUmVzaXplT2JqZWN0KHRoaXMpO1xuICB9XG59XG5cbmNvbnN0IHJlc2l6ZU1peGluID0ge1xuICBvblJlc2l6ZTogb25SZXNpemUsXG4gIG9mZlJlc2l6ZTogb2ZmUmVzaXplXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlc2l6ZU1peGluO1xuXG5mdW5jdGlvbiBhcHBlbmRSZXNpemVPYmplY3QoZWxlbWVudCkge1xuICBjb25zdCByZXNpemVPYmplY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvYmplY3QnKSxcbiAgICAgICAgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudCxcbiAgICAgICAgc3R5bGUgPSBgZGlzcGxheTogYmxvY2s7IFxuICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgICAgICAgICAgICAgICB0b3A6IDA7IFxuICAgICAgICAgICAgICAgICBsZWZ0OiAwOyBcbiAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlOyBcbiAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7IFxuICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuOyBcbiAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IFxuICAgICAgICAgICAgICAgICB6LWluZGV4OiAtMTtgO1xuXG4gIHJlc2l6ZU9iamVjdC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgc3R5bGUpO1xuICByZXNpemVPYmplY3QuZGF0YSA9ICdhYm91dDpibGFuayc7XG4gIHJlc2l6ZU9iamVjdC50eXBlID0gJ3RleHQvaHRtbCc7XG5cbiAgZWxlbWVudC5fX3Jlc2l6ZU9iamVjdF9fID0gcmVzaXplT2JqZWN0O1xuXG4gIHJlc2l6ZU9iamVjdC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICByZXNpemVPYmplY3RMb2FkSGFuZGxlcihlbGVtZW50KVxuICB9O1xuXG4gIGRvbUVsZW1lbnQuYXBwZW5kQ2hpbGQocmVzaXplT2JqZWN0KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUmVzaXplT2JqZWN0KGVsZW1lbnQpIHtcbiAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudCxcbiAgICAgICAgcmVzaXplT2JqZWN0ID0gZWxlbWVudC5fX3Jlc2l6ZU9iamVjdF9fLFxuICAgICAgICBvYmplY3RXaW5kb3cgPSByZXNpemVPYmplY3QuY29udGVudERvY3VtZW50LmRlZmF1bHRWaWV3OyAgLy8vXG5cbiAgb2JqZWN0V2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUxpc3RlbmVyKTtcblxuICBkb21FbGVtZW50LnJlbW92ZUNoaWxkKHJlc2l6ZU9iamVjdCk7XG59XG5cbmZ1bmN0aW9uIHJlc2l6ZU9iamVjdExvYWRIYW5kbGVyKGVsZW1lbnQpIHtcbiAgY29uc3QgcmVzaXplT2JqZWN0ID0gZWxlbWVudC5fX3Jlc2l6ZU9iamVjdF9fLFxuICAgICAgICByZXNpemVPYmplY3RXaW5kb3cgPSByZXNpemVPYmplY3QuY29udGVudERvY3VtZW50LmRlZmF1bHRWaWV3OyAgLy8vXG5cbiAgcmVzaXplT2JqZWN0V2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xuICAgIGV2ZW50TGlzdGVuZXIoZWxlbWVudCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBldmVudExpc3RlbmVyKGVsZW1lbnQpIHtcbiAgY29uc3Qgd2lkdGggPSBlbGVtZW50LmdldFdpZHRoKCksXG4gICAgICAgIGhlaWdodCA9IGVsZW1lbnQuZ2V0SGVpZ2h0KCksXG4gICAgICAgIHRhcmdldEVsZW1lbnQgPSBlbGVtZW50LCAvLy9cbiAgICAgICAgaGFuZGxlcnMgPSBlbGVtZW50LmhhbmRsZXJzTWFwWydyZXNpemUnXTtcblxuICBoYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uKGhhbmRsZXIpe1xuICAgIGhhbmRsZXIod2lkdGgsIGhlaWdodCwgdGFyZ2V0RWxlbWVudCk7XG4gIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBvblNjcm9sbChoYW5kbGVyLCBpbnRlcm1lZGlhdGVIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUhhbmRsZXIpIHtcbiAgdGhpcy5vbignc2Nyb2xsJywgaGFuZGxlciwgaW50ZXJtZWRpYXRlSGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIG9mZlNjcm9sbChoYW5kbGVyKSB7IHRoaXMub2ZmKCdzY3JvbGwnLCBoYW5kbGVyKTsgfVxuXG5mdW5jdGlvbiBnZXRTY3JvbGxUb3AoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuc2Nyb2xsVG9wOyB9XG5cbmZ1bmN0aW9uIGdldFNjcm9sbExlZnQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuc2Nyb2xsTGVmdDsgfVxuXG5mdW5jdGlvbiBzZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKSB7IHRoaXMuZG9tRWxlbWVudC5zY3JvbGxUb3AgPSBzY3JvbGxUb3A7IH1cblxuZnVuY3Rpb24gc2V0U2Nyb2xsTGVmdChzY3JvbGxMZWZ0KSB7IHRoaXMuZG9tRWxlbWVudC5zY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdDsgfVxuXG5jb25zdCBzY3JvbGxNaXhpbiA9IHtcbiAgb25TY3JvbGw6IG9uU2Nyb2xsLFxuICBvZmZTY3JvbGw6IG9mZlNjcm9sbCxcbiAgZ2V0U2Nyb2xsVG9wOiBnZXRTY3JvbGxUb3AsXG4gIGdldFNjcm9sbExlZnQ6IGdldFNjcm9sbExlZnQsXG4gIHNldFNjcm9sbFRvcDogc2V0U2Nyb2xsVG9wLFxuICBzZXRTY3JvbGxMZWZ0OiBzZXRTY3JvbGxMZWZ0XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNjcm9sbE1peGluO1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlSGFuZGxlcihoYW5kbGVyLCBldmVudCwgdGFyZ2V0RWxlbWVudCkge1xuICBjb25zdCBzY3JvbGxUb3AgPSB0YXJnZXRFbGVtZW50LmdldFNjcm9sbFRvcCgpLFxuICAgICAgICBzY3JvbGxMZWZ0ID0gdGFyZ2V0RWxlbWVudC5nZXRTY3JvbGxMZWZ0KCksXG4gICAgICAgIHByZXZlbnREZWZhdWx0ID0gaGFuZGxlcihzY3JvbGxUb3AsIHNjcm9sbExlZnQsIHRhcmdldEVsZW1lbnQpO1xuXG4gIHJldHVybiBwcmV2ZW50RGVmYXVsdDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpLFxuICAgICAgVGV4dEVsZW1lbnQgPSByZXF1aXJlKCcuL3RleHRFbGVtZW50Jyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZmlyc3RBcmd1bWVudCwgcHJvcGVydGllcywgLi4uY2hpbGRBcmd1bWVudHMpIHtcbiAgbGV0IGVsZW1lbnQgPSBudWxsO1xuXG4gIGlmIChmaXJzdEFyZ3VtZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gY2hpbGRFbGVtZW50c0Zyb21DaGlsZEFyZ3VtZW50cyhjaGlsZEFyZ3VtZW50cyk7XG5cbiAgICBwcm9wZXJ0aWVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjaGlsZEVsZW1lbnRzOiBjaGlsZEVsZW1lbnRzXG4gICAgfSwgcHJvcGVydGllcyk7XG5cbiAgICBpZiAoZmFsc2UpIHtcblxuICAgIH0gZWxzZSBpZiAoaXNTdWJjbGFzc09mKGZpcnN0QXJndW1lbnQsIEVsZW1lbnQpKSB7XG4gICAgICBjb25zdCBDbGFzcyA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgICAgZWxlbWVudCA9IENsYXNzLmZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnRGdW5jdGlvbiA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgICAgZWxlbWVudCA9IGVsZW1lbnRGdW5jdGlvbihwcm9wZXJ0aWVzKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc3QgdGFnTmFtZSA9IGZpcnN0QXJndW1lbnQsICAvLy9cbiAgICAgICAgICAgIGh0bWwgPSBgPCR7dGFnTmFtZX0gLz5gO1xuXG4gICAgICBlbGVtZW50ID0gRWxlbWVudC5mcm9tSFRNTChFbGVtZW50LCBodG1sKTtcblxuICAgICAgZWxlbWVudC5hcHBseVByb3BlcnRpZXMocHJvcGVydGllcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmNvbnN0IFJlYWN0ID0ge1xuICBjcmVhdGVFbGVtZW50OiBjcmVhdGVFbGVtZW50XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5mdW5jdGlvbiBjaGlsZEVsZW1lbnRzRnJvbUNoaWxkQXJndW1lbnRzKGNoaWxkQXJndW1lbnRzKSB7XG4gIGNoaWxkQXJndW1lbnRzID0gY2hpbGRBcmd1bWVudHMucmVkdWNlKGZ1bmN0aW9uKGNoaWxkQXJndW1lbnRzLCBjaGlsZEFyZ3VtZW50KSB7XG4gICAgY2hpbGRBcmd1bWVudHMgPSBjaGlsZEFyZ3VtZW50cy5jb25jYXQoY2hpbGRBcmd1bWVudCk7XG5cbiAgICByZXR1cm4gY2hpbGRBcmd1bWVudHM7XG4gIH0sIFtdKTtcblxuICBjb25zdCBjaGlsZEVsZW1lbnRzID0gY2hpbGRBcmd1bWVudHMubWFwKGZ1bmN0aW9uKGNoaWxkQXJndW1lbnQpIHtcbiAgICBsZXQgY2hpbGRFbGVtZW50O1xuICAgIFxuICAgIGlmICh0eXBlb2YgY2hpbGRBcmd1bWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnN0IHRleHQgPSBjaGlsZEFyZ3VtZW50LCAvLy9cbiAgICAgICAgICAgIHRleHRFbGVtZW50ID0gbmV3IFRleHRFbGVtZW50KHRleHQpO1xuXG4gICAgICBjaGlsZEVsZW1lbnQgPSB0ZXh0RWxlbWVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hpbGRFbGVtZW50ID0gY2hpbGRBcmd1bWVudDsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZEVsZW1lbnQ7XG4gIH0pO1xuXG4gIHJldHVybiBjaGlsZEVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKSB7XG4gIGxldCB0eXBlT2YgPSBmYWxzZTtcblxuICBpZiAoYXJndW1lbnQubmFtZSA9PT0gQ2xhc3MubmFtZSkgeyAvLy9cbiAgICB0eXBlT2YgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGFyZ3VtZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGFyZ3VtZW50KTsgLy8vXG5cbiAgICBpZiAoYXJndW1lbnQpIHtcbiAgICAgIHR5cGVPZiA9IGlzU3ViY2xhc3NPZihhcmd1bWVudCwgQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0eXBlT2Y7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IE9mZnNldCA9IHJlcXVpcmUoJy4vbWlzYy9vZmZzZXQnKSxcbiAgICAgIEJvdW5kcyA9IHJlcXVpcmUoJy4vbWlzYy9ib3VuZHMnKTtcblxuY2xhc3MgVGV4dEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0ZXh0KSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCk7IC8vL1xuXG4gICAgdGhpcy5kb21FbGVtZW50Ll9fZWxlbWVudF9fID0gdGhpcztcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gVGV4dEVsZW1lbnQuY2xvbmUodGhpcyk7IH1cblxuICBnZXRUZXh0KCkge1xuICAgIGNvbnN0IG5vZGVWYWx1ZSA9IHRoaXMuZG9tRWxlbWVudC5ub2RlVmFsdWUsXG4gICAgICAgICAgdGV4dCA9IG5vZGVWYWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuXG4gIHNldFRleHQodGV4dCkge1xuICAgIGNvbnN0IG5vZGVWYWx1ZSA9IHRleHQ7IC8vL1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lm5vZGVWYWx1ZSA9IG5vZGVWYWx1ZTtcbiAgfVxuXG4gIGdldE9mZnNldCgpIHtcbiAgICBjb25zdCB0b3AgPSB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0VG9wLCAgLy8vXG4gICAgICAgICAgbGVmdCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRMZWZ0LCAgLy8vXG4gICAgICAgICAgb2Zmc2V0ID0gbmV3IE9mZnNldCh0b3AsIGxlZnQpO1xuXG4gICAgcmV0dXJuIG9mZnNldDtcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICBjb25zdCBib3VuZGluZ0NsaWVudFJlY3QgPSB0aGlzLmRvbUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgYm91bmRzID0gQm91bmRzLmZyb21Cb3VuZGluZ0NsaWVudFJlY3QoYm91bmRpbmdDbGllbnRSZWN0KTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH1cblxuICBnZXRXaWR0aCgpIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuZG9tRWxlbWVudC5jbGllbnRXaWR0aDtcblxuICAgIHJldHVybiB3aWR0aDtcbiAgfVxuXG4gIGdldEhlaWdodCgpIHtcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmRvbUVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXG4gICAgcmV0dXJuIGhlaWdodDtcbiAgfVxuXG4gIHByZXBlbmRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQucHJlcGVuZCh0aGlzKTsgfVxuXG4gIGFwcGVuZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5hcHBlbmQodGhpcyk7IH1cblxuICBhZGRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQuYWRkKHRoaXMpOyB9XG5cbiAgcmVtb3ZlRnJvbShwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQucmVtb3ZlKHRoaXMpOyB9XG5cbiAgaW5zZXJ0QmVmb3JlKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSxcbiAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KTtcbiAgfVxuXG4gIGluc2VydEFmdGVyKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSxcbiAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50Lm5leHRTaWJsaW5nKTsgIC8vL1xuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmUoKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHRFbGVtZW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBldmVudE1peGluID0gcmVxdWlyZSgnLi9taXhpbi9ldmVudCcpLFxuICAgICAgY2xpY2tNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vY2xpY2snKSxcbiAgICAgIG1vdXNlTWl4aW4gPSByZXF1aXJlKCcuL21peGluL21vdXNlJyksXG4gICAgICBrZXlNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4va2V5Jyk7XG5cbmNsYXNzIFdpbmRvdyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IHdpbmRvdztcbiAgfVxuXG4gIGFzc2lnbiguLi5zb3VyY2VzKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5kb21FbGVtZW50OyAvLy9cblxuICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCAuLi5zb3VyY2VzKTtcbiAgfVxuICBcbiAgZ2V0V2lkdGgoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaW5uZXJXaWR0aDsgfSAvLy9cbiAgXG4gIGdldEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5pbm5lckhlaWdodDsgfSAvLy9cblxuICBnZXRTY3JvbGxUb3AoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQucGFnZVlPZmZzZXQ7IH0gIC8vL1xuXG4gIGdldFNjcm9sbExlZnQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQucGFnZVhPZmZzZXQ7IH0gLy8vXG5cbiAgb25SZXNpemUoaGFuZGxlcikge1xuICAgIGlmIChoYW5kbGVyLmludGVybWVkaWF0ZUhhbmRsZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFuZGxlci5pbnRlcm1lZGlhdGVIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZVJlc2l6ZUhhbmRsZXI7XG4gICAgfVxuXG4gICAgY29uc3QgZXZlbnRUeXBlID0gJ3Jlc2l6ZSc7XG4gICAgXG4gICAgdGhpcy5vbihldmVudFR5cGUsIGhhbmRsZXIpO1xuICB9XG5cbiAgb2ZmUmVzaXplKGhhbmRsZXIpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSAncmVzaXplJztcblxuICAgIHRoaXMub2ZmKGV2ZW50VHlwZSwgaGFuZGxlcik7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCBldmVudE1peGluKTtcbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwgY2xpY2tNaXhpbik7XG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIG1vdXNlTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCBrZXlNaXhpbik7XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFdpbmRvdygpOyAgLy8vXG5cbmZ1bmN0aW9uIGRlZmF1bHRJbnRlcm1lZGlhdGVSZXNpemVIYW5kbGVyKGhhbmRsZXIsIGV2ZW50LCB0YXJnZXRFbGVtZW50KSB7XG4gIGNvbnN0IHdpbmRvdyA9IHRhcmdldEVsZW1lbnQsIC8vL1xuICAgICAgICB3aWR0aCA9IHdpbmRvdy5nZXRXaWR0aCgpLFxuICAgICAgICBoZWlnaHQgPSB0YXJnZXRFbGVtZW50LmdldEhlaWdodCgpLFxuICAgICAgICBwcmV2ZW50RGVmYXVsdCA9IGhhbmRsZXIod2lkdGgsIGhlaWdodCwgdGFyZ2V0RWxlbWVudCk7XG5cbiAgcmV0dXJuIHByZXZlbnREZWZhdWx0O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbGV4ZXJzID0ge1xuICAnTGluZSc6IHJlcXVpcmUoJy4vbGliL2NvbW1vbi9saW5lJyksXG4gICdCTkZMZXhlcic6IHJlcXVpcmUoJy4vbGliL2JuZi9sZXhlcicpLFxuICAnQmFzaWNMZXhlcic6IHJlcXVpcmUoJy4vbGliL2Jhc2ljL2xleGVyJyksXG4gICdGbG9yZW5jZUxleGVyJzogcmVxdWlyZSgnLi9saWIvZmxvcmVuY2UvbGV4ZXInKSxcbiAgJ1ByaW1pdGl2ZUxleGVyJzogcmVxdWlyZSgnLi9saWIvcHJpbWl0aXZlL2xleGVyJyksXG4gICdTaWduaWZpY2FudFRva2VuJzogcmVxdWlyZSgnLi9saWIvY29tbW9uL3Rva2VuL3NpZ25pZmljYW50JyksXG4gICdTdHJpbmdUb2tlbic6IHJlcXVpcmUoJy4vbGliL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9zdHJpbmcnKSxcbiAgJ0VuZE9mTGluZVRva2VuJzogcmVxdWlyZSgnLi9saWIvY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L2VuZE9mTGluZScpLFxuICAnV2hpdGVzcGFjZVRva2VuJzogcmVxdWlyZSgnLi9saWIvY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L3doaXRlc3BhY2UnKSxcbiAgJ05vblNpZ25pZmljYW50VG9rZW4nOiByZXF1aXJlKCcuL2xpYi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQnKSxcbiAgJ3NwZWNpYWxTeW1ib2xzJzogcmVxdWlyZSgnLi9saWIvc3BlY2lhbFN5bWJvbHMnKVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBsZXhlcnM7XG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBMaW5lID0gcmVxdWlyZSgnLi9saW5lJyksXHJcbiAgICAgIFJ1bGVzID0gcmVxdWlyZSgnLi4vY29tbW9uL3J1bGVzJyksXHJcbiAgICAgIENvbW1vbkxleGVyID0gcmVxdWlyZSgnLi4vY29tbW9uL2xleGVyJyksXHJcbiAgICAgIFdoaXRlc3BhY2VUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC93aGl0ZXNwYWNlJyk7XHJcblxyXG5jbGFzcyBCYXNpY0xleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xyXG4gIHN0YXRpYyBzaWduaWZpY2FudFRva2VuVHlwZXMoKSB7XHJcbiAgICBjb25zdCBncmFtbWFyID0gQmFzaWNMZXhlci5ncmFtbWFyLFxyXG4gICAgICAgICAgZ3JhbW1hclNpZ25pZmljYW50VG9rZW5UeXBlcyA9IENvbW1vbkxleGVyLnNpZ25pZmljYW50VG9rZW5UeXBlc0Zyb21HcmFtbWFyKGdyYW1tYXIpLFxyXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVzID0gZ3JhbW1hclNpZ25pZmljYW50VG9rZW5UeXBlcy5jb25jYXQoW1xyXG4gICAgICAgICAgICBXaGl0ZXNwYWNlVG9rZW4udHlwZVxyXG4gICAgICAgICAgXSk7XHJcblxyXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW5UeXBlcztcclxuICB9XHJcblxyXG5cclxuICBzdGF0aWMgZnJvbUdyYW1tYXIoZ3JhbW1hcikge1xyXG4gICAgY29uc3QgcnVsZXMgPSBSdWxlcy5mcm9tR3JhbW1hcihncmFtbWFyKSxcclxuICAgICAgICAgIGJhc2ljTGV4ZXIgPSBuZXcgQmFzaWNMZXhlcihydWxlcywgTGluZSk7XHJcblxyXG4gICAgcmV0dXJuIGJhc2ljTGV4ZXI7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XHJcbiAgICBjb25zdCBncmFtbWFyID0gQmFzaWNMZXhlci5ncmFtbWFyLFxyXG4gICAgICAgICAgYmFzaWNMZXhlciA9IEJhc2ljTGV4ZXIuZnJvbUdyYW1tYXIoZ3JhbW1hcik7XHJcblxyXG4gICAgcmV0dXJuIGJhc2ljTGV4ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2ljTGV4ZXI7XHJcblxyXG5CYXNpY0xleGVyLmdyYW1tYXIgPSBbXHJcblxyXG4gIHsgXCJ0ZXJtaW5hbFwiICAgIDogXCJcXFxcK3xcXFxcLXxcXFxcKnxcXFxcL3xcXFxcKHxcXFxcKXxcXFxcZCtcIiB9XHJcblxyXG5dO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBDb21tb25MaW5lID0gcmVxdWlyZSgnLi4vY29tbW9uL2xpbmUnKSxcclxuICAgICAgQ29tbWVudFRva2VucyA9IHJlcXVpcmUoJy4vdG9rZW5zL2NvbW1lbnQnKSxcclxuICAgICAgU3RyaW5nVG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMvc3RyaW5nJyksXHJcbiAgICAgIFdoaXRlc3BhY2VUb2tlbnMgPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW5zL3doaXRlc3BhY2UnKTtcclxuXHJcbmNsYXNzIExpbmUgZXh0ZW5kcyBDb21tb25MaW5lIHtcclxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCwgY29udGV4dCwgcnVsZXMpIHsgcmV0dXJuIHN1cGVyLmZyb21Db250ZW50KExpbmUsIGNvbnRlbnQsIGNvbnRleHQsIHJ1bGVzLCBDb21tZW50VG9rZW5zLCBTdHJpbmdUb2tlbnMsIFdoaXRlc3BhY2VUb2tlbnMpOyB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTGluZTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgQ29tbWVudFRva2VucyB7XHJcbiAgc3RhdGljIHBhc3ModG9rZW5zT3JSZW1haW5pbmdDb250ZW50LCBsaW5lLCBjb250ZXh0KSB7XHJcbiAgICBjb25zdCBpbkNvbW1lbnQgPSBmYWxzZTsgIC8vL1xyXG5cclxuICAgIHJldHVybiBpbkNvbW1lbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1lbnRUb2tlbnM7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIFN0cmluZ1Rva2VucyB7XHJcbiAgc3RhdGljIHBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSkgeyBcclxuXHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFN0cmluZ1Rva2VucztcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgTGluZSA9IHJlcXVpcmUoJy4vbGluZScpLFxyXG4gICAgICBSdWxlcyA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ydWxlcycpLFxyXG4gICAgICBDb21tb25MZXhlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9sZXhlcicpLFxyXG4gICAgICBTdHJpbmdUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9zdHJpbmcnKSxcclxuICAgICAgV2hpdGVzcGFjZVRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L3doaXRlc3BhY2UnKTtcclxuXHJcbmNsYXNzIEJORkxleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xyXG4gIGxpbmVzRnJvbUdyYW1tYXIoZ3JhbW1hcikge1xyXG4gICAgY29uc3QgY29udGVudCA9IGdyYW1tYXIsICAvLy9cclxuICAgICAgICAgIGxpbmVzID0gc3VwZXIubGluZXNGcm9tQ29udGVudChjb250ZW50KTtcclxuXHJcbiAgICByZXR1cm4gbGluZXM7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc2lnbmlmaWNhbnRUb2tlblR5cGVzKCkge1xyXG4gICAgY29uc3QgZ3JhbW1hciA9IEJORkxleGVyLmdyYW1tYXIsXHJcbiAgICAgICAgICBncmFtbWFyU2lnbmlmaWNhbnRUb2tlblR5cGVzID0gQ29tbW9uTGV4ZXIuc2lnbmlmaWNhbnRUb2tlblR5cGVzRnJvbUdyYW1tYXIoZ3JhbW1hciksXHJcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZXMgPSBncmFtbWFyU2lnbmlmaWNhbnRUb2tlblR5cGVzLmNvbmNhdChbXHJcbiAgICAgICAgICAgIFN0cmluZ1Rva2VuLnR5cGUsXHJcbiAgICAgICAgICAgIFdoaXRlc3BhY2VUb2tlbi50eXBlXHJcbiAgICAgICAgICBdKTtcclxuXHJcbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlblR5cGVzO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21HcmFtbWFyKGdyYW1tYXIpIHtcclxuICAgIGNvbnN0IHJ1bGVzID0gUnVsZXMuZnJvbUdyYW1tYXIoZ3JhbW1hciksXHJcbiAgICAgICAgICBiYXNpY0xleGVyID0gbmV3IEJORkxleGVyKHJ1bGVzLCBMaW5lKTtcclxuXHJcbiAgICByZXR1cm4gYmFzaWNMZXhlcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcclxuICAgIGNvbnN0IGdyYW1tYXIgPSBCTkZMZXhlci5ncmFtbWFyLFxyXG4gICAgICAgICAgYmFzaWNMZXhlciA9IEJORkxleGVyLmZyb21HcmFtbWFyKGdyYW1tYXIpO1xyXG5cclxuICAgIHJldHVybiBiYXNpY0xleGVyO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBCTkZMZXhlcjtcclxuXHJcbkJORkxleGVyLmdyYW1tYXIgPSBbXHJcblxyXG4gIHsgXCJyZWd1bGFyRXhwcmVzc2lvblwiOiBcIlxcXFwvW14vXStcXFxcL1wiIH0sXHJcblxyXG4gIHsgXCJzcGVjaWFsXCI6IFwiOjo9fDxOT19XSElURVNQQUNFPnw8RU5EX09GX0xJTkU+fCF8JnxcXFxcfHxcXFxcKHxcXFxcKXxcXFxcP3xcXFxcKnxcXFxcK1wiIH0sXHJcblxyXG4gIHsgXCJ0eXBlXCI6IFwiXFxcXFtbXi9dK1xcXFxdXCIgfSxcclxuXHJcbiAgeyBcIm5hbWVcIjogXCJcXFxcdytcIiB9XHJcbiAgICBcclxuXVxyXG47XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IENvbW1vbkxpbmUgPSByZXF1aXJlKCcuLi9jb21tb24vbGluZScpLFxyXG4gICAgICBDb21tZW50VG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMvY29tbWVudCcpLFxyXG4gICAgICBTdHJpbmdUb2tlbnMgPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW5zL3N0cmluZycpLFxyXG4gICAgICBXaGl0ZXNwYWNlVG9rZW5zID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2Vucy93aGl0ZXNwYWNlJyksXHJcbiAgICAgIEVuZE9mTGluZVRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L2VuZE9mTGluZScpO1xyXG5cclxuY2xhc3MgTGluZSBleHRlbmRzIENvbW1vbkxpbmUge1xyXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50LCBjb250ZXh0LCBydWxlcykgeyBcclxuICAgIGNvbnN0IGxpbmUgPSBzdXBlci5mcm9tQ29udGVudChMaW5lLCBjb250ZW50LCBjb250ZXh0LCBydWxlcywgQ29tbWVudFRva2VucywgU3RyaW5nVG9rZW5zLCBXaGl0ZXNwYWNlVG9rZW5zKSxcclxuICAgICAgICAgIGVuZE9mTGluZVRva2VuID0gRW5kT2ZMaW5lVG9rZW4uZnJvbUxpbmUobGluZSk7XHJcblxyXG4gICAgbGluZS5wdXNoVG9rZW4oZW5kT2ZMaW5lVG9rZW4pO1xyXG4gICAgXHJcbiAgICByZXR1cm4gbGluZTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTGluZTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgQ29tbWVudFRva2VucyB7XHJcbiAgc3RhdGljIHBhc3ModG9rZW5zT3JSZW1haW5pbmdDb250ZW50LCBsaW5lLCBjb250ZXh0KSB7XHJcbiAgICBjb25zdCBpbkNvbW1lbnQgPSBmYWxzZTsgIC8vL1xyXG5cclxuICAgIHJldHVybiBpbkNvbW1lbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1lbnRUb2tlbnM7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIENvbnRleHQge1xyXG4gIGNvbnN0cnVjdG9yKG1pbmltdW1MaW5lc0xlbmd0aCA9IEluZmluaXR5LCBwcmV2aW91c0xpbmVJbkNvbW1lbnQgPSBudWxsLCBmb2xsb3dpbmdMaW5lSW5Db21tZW50ID0gbnVsbCkge1xyXG4gICAgdGhpcy5taW5pbXVtTGluZXNMZW5ndGggPSBtaW5pbXVtTGluZXNMZW5ndGg7XHJcbiAgICB0aGlzLnByZXZpb3VzTGluZUluQ29tbWVudCA9IHByZXZpb3VzTGluZUluQ29tbWVudDtcclxuICAgIHRoaXMuZm9sbG93aW5nTGluZUluQ29tbWVudCA9IGZvbGxvd2luZ0xpbmVJbkNvbW1lbnQ7XHJcbiAgfVxyXG5cclxuICBnZXRNaW5pbXVtTGluZXNMZW5ndGgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5taW5pbXVtTGluZXNMZW5ndGg7XHJcbiAgfVxyXG5cclxuICBpc1ByZXZpb3VzTGluZUluQ29tbWVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLnByZXZpb3VzTGluZUluQ29tbWVudDtcclxuICB9XHJcblxyXG4gIGlzRm9sbG93aW5nTGluZUluQ29tbWVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLmZvbGxvd2luZ0xpbmVJbkNvbW1lbnQ7XHJcbiAgfVxyXG5cclxuICBzZXRQcmV2aW91c0xpbmVJbkNvbW1lbnQocHJldmlvdXNMaW5lSW5Db21tZW50KSB7XHJcbiAgICB0aGlzLnByZXZpb3VzTGluZUluQ29tbWVudCA9IHByZXZpb3VzTGluZUluQ29tbWVudDtcclxuICB9XHJcblxyXG4gIHNob3VsZFRlcm1pbmF0ZShsZW5ndGgpIHtcclxuICAgIGxldCB0ZXJtaW5hdGUgPSBmYWxzZTtcclxuXHJcbiAgICBpZiAobGVuZ3RoID49IHRoaXMubWluaW11bUxpbmVzTGVuZ3RoKSB7XHJcbiAgICAgIGlmICh0aGlzLmZvbGxvd2luZ0xpbmVJbkNvbW1lbnQgPT09IG51bGwpIHtcclxuICAgICAgICB0ZXJtaW5hdGUgPSB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5wcmV2aW91c0xpbmVJbkNvbW1lbnQgPT09IHRoaXMuZm9sbG93aW5nTGluZUluQ29tbWVudCkge1xyXG4gICAgICAgIHRlcm1pbmF0ZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGVybWluYXRlO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb250ZXh0O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBMaW5lID0gcmVxdWlyZSgnLi9saW5lJyksXHJcbiAgICAgIFJ1bGVzID0gcmVxdWlyZSgnLi9ydWxlcycpLFxyXG4gICAgICBDb250ZXh0ID0gcmVxdWlyZSgnLi9jb250ZXh0Jyk7XHJcblxyXG5jbGFzcyBDb21tb25MZXhlciB7XHJcbiAgY29uc3RydWN0b3IocnVsZXMsIExpbmUpIHtcclxuICAgIHRoaXMucnVsZXMgPSBydWxlcztcclxuICAgIHRoaXMuTGluZSA9IExpbmU7XHJcbiAgfVxyXG5cclxuICBsaW5lc0Zyb21Db250ZW50KGNvbnRlbnQsIGZpcnN0TGluZUluZGV4ID0gMCwgY29udGV4dCA9IG5ldyBDb250ZXh0KCkpIHtcclxuICAgIGNvbnN0IGNvbnRlbnRzID0gY29udGVudC5zcGxpdCgvXFxuLyksXHJcbiAgICAgICAgICBsaW5lcyA9IHRoaXMubGluZXNGcm9tQ29udGVudHMoY29udGVudHMsIGZpcnN0TGluZUluZGV4LCBjb250ZXh0KTtcclxuXHJcbiAgICByZXR1cm4gbGluZXM7XHJcbiAgfVxyXG5cclxuICBsaW5lc0Zyb21Db250ZW50cyhjb250ZW50cywgZmlyc3RMaW5lSW5kZXgsIGNvbnRleHQpIHtcclxuICAgIGNvbnN0IGxpbmVzID0gW107XHJcbiAgICBcclxuICAgIGxldCBpbmRleCA9IGZpcnN0TGluZUluZGV4LCAgICBcclxuICAgICAgICBjb250ZW50ID0gY29udGVudHNbaW5kZXhdO1xyXG5cclxuICAgIHdoaWxlIChjb250ZW50ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgY29uc3QgbGVuZ3RoID0gaW5kZXggLSBmaXJzdExpbmVJbmRleCxcclxuICAgICAgICAgICAgdGVybWluYXRlID0gY29udGV4dC5zaG91bGRUZXJtaW5hdGUobGVuZ3RoKTtcclxuXHJcbiAgICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgbGluZSA9IHRoaXMuTGluZS5mcm9tQ29udGVudChjb250ZW50LCBjb250ZXh0LCB0aGlzLnJ1bGVzKTtcclxuXHJcbiAgICAgIGxpbmVzLnB1c2gobGluZSk7XHJcblxyXG4gICAgICBjb250ZW50ID0gY29udGVudHNbKytpbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGxpbmVzO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHJ1bGVzRnJvbUdyYW1tYXIoZ3JhbW1hcikgeyByZXR1cm4gUnVsZXMuZnJvbUdyYW1tYXIoZ3JhbW1hcik7IH1cclxuXHJcbiAgc3RhdGljIHNpZ25pZmljYW50VG9rZW5UeXBlc0Zyb21HcmFtbWFyKGdyYW1tYXIpIHsgcmV0dXJuIFJ1bGVzLnNpZ25pZmljYW50VG9rZW5UeXBlc0Zyb21HcmFtbWFyKGdyYW1tYXIpOyB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ29tbW9uTGV4ZXI7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IHV0aWwgPSByZXF1aXJlKCcuLi91dGlsJyksXHJcbiAgICAgIFNpZ25pZmljYW50VG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMvc2lnbmlmaWNhbnQnKTtcclxuXHJcbmNsYXNzIExpbmUge1xyXG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQpIHtcclxuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XHJcblxyXG4gICAgdGhpcy50b2tlbnMgPSB1bmRlZmluZWQ7XHJcbiAgICBcclxuICAgIHRoaXMuaW5Db21tZW50ID0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29udGVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBnZXRUb2tlbnMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XHJcbiAgfVxyXG5cclxuICBpc0luQ29tbWVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLmluQ29tbWVudDtcclxuICB9XHJcblxyXG4gIGdldEhUTUwoKSB7XHJcbiAgICBsZXQgaHRtbCA9IHRoaXMudG9rZW5zLnJlZHVjZShmdW5jdGlvbihodG1sLCB0b2tlbikge1xyXG4gICAgICAgICAgY29uc3QgdG9rZW5IVE1MID0gdG9rZW4uZ2V0SFRNTCgpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBodG1sICs9IHRva2VuSFRNTDtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgcmV0dXJuIGh0bWw7XHJcbiAgICAgICAgfSwgJycpO1xyXG4gICAgXHJcbiAgICBodG1sICs9ICdcXG4nOyAvLy9cclxuICAgIFxyXG4gICAgcmV0dXJuIGh0bWw7XHJcbiAgfVxyXG5cclxuICBzZXRUb2tlbnModG9rZW5zKSB7XHJcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcclxuICB9XHJcblxyXG4gIHNldEluQ29tbWVudChpbkNvbW1lbnQpIHtcclxuICAgIHRoaXMuaW5Db21tZW50ID0gaW5Db21tZW50O1xyXG4gIH1cclxuXHJcbiAgcHVzaFRva2VuKHRva2VuKSB7XHJcbiAgICB0aGlzLnRva2Vucy5wdXNoKHRva2VuKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tQ29udGVudChMaW5lLCBjb250ZW50LCBjb250ZXh0LCBydWxlcywgQ29tbWVudFRva2VucywgU3RyaW5nVG9rZW5zLCBXaGl0ZXNwYWNlVG9rZW5zKSB7XHJcbiAgICBjb25zdCBsaW5lID0gbmV3IExpbmUoY29udGVudCksXHJcbiAgICAgICAgICB0b2tlbnNPckNvbnRlbnRzID0gW2NvbnRlbnRdLFxyXG4gICAgICAgICAgaW5Db21tZW50ID0gQ29tbWVudFRva2Vucy5wYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUsIGNvbnRleHQpO1xyXG5cclxuICAgIFN0cmluZ1Rva2Vucy5wYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUpO1xyXG4gICAgXHJcbiAgICBXaGl0ZXNwYWNlVG9rZW5zLnBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSk7XHJcblxyXG4gICAgY29uc3QgdG9rZW5zID0gU2lnbmlmaWNhbnRUb2tlbnMucGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lLCBydWxlcyk7XHJcblxyXG4gICAgbGluZS5zZXRUb2tlbnModG9rZW5zKTtcclxuXHJcbiAgICBsaW5lLnNldEluQ29tbWVudChpbkNvbW1lbnQpO1xyXG5cclxuICAgIHJldHVybiBsaW5lO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBMaW5lO1xyXG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFNpZ25pZmljYW50VG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQnKTtcblxuY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKHNpZ25pZmljYW50VG9rZW5UeXBlLCByZWd1bGFyRXhwcmVzc2lvbikge1xuICAgIHRoaXMuc2lnbmlmaWNhbnRUb2tlblR5cGUgPSBzaWduaWZpY2FudFRva2VuVHlwZTtcbiAgICB0aGlzLnJlZ3VsYXJFeHByZXNzaW9uID0gcmVndWxhckV4cHJlc3Npb247XG4gIH1cbiAgXG4gIGdldFNpZ25pZmljYW50VG9rZW5UeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnNpZ25pZmljYW50VG9rZW5UeXBlO1xuICB9XG4gIFxuICBnZXRSZWd1bGFyRXhwcmVzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yZWd1bGFyRXhwcmVzc2lvbjtcbiAgfVxuICBcbiAgc2lnbmlmaWNhbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudChjb250ZW50KSB7XG4gICAgbGV0IHNpZ25pZmljYW50VG9rZW5Qb3NpdGlvbiA9IC0xO1xuICAgIFxuICAgIGNvbnN0IG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKHRoaXMucmVndWxhckV4cHJlc3Npb24pO1xuICAgIFxuICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyk7XG4gICAgICBcbiAgICAgIGlmIChmaXJzdE1hdGNoICE9PSAnJykge1xuICAgICAgICBzaWduaWZpY2FudFRva2VuUG9zaXRpb24gPSBtYXRjaGVzLmluZGV4OyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlblBvc2l0aW9uO1xuICB9XG5cbiAgc2lnbmlmaWNhbnRUb2tlbkZyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lKSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2godGhpcy5yZWd1bGFyRXhwcmVzc2lvbiksXG4gICAgICAgICAgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpO1xuXG4gICAgY29udGVudCA9IGZpcnN0TWF0Y2g7IC8vL1xuXG4gICAgY29uc3QgdHlwZSA9IHRoaXMuc2lnbmlmaWNhbnRUb2tlblR5cGUsIC8vL1xuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBTaWduaWZpY2FudFRva2VuLmZyb21Db250ZW50TGluZUFuZFR5cGUoY29udGVudCwgbGluZSwgdHlwZSk7XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU2lnbmlmaWNhbnRUb2tlblR5cGVBbmRSZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4oc2lnbmlmaWNhbnRUb2tlblR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybikge1xuICAgIGNvbnN0IHVuaWNvZGUgPSBpc1VuaWNvZGUocmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKSxcbiAgICAgICAgICBmbGFncyA9IHVuaWNvZGUgPyAndScgOiAnJyxcbiAgICAgICAgICByZWdFeHAgPSBuZXcgUmVnRXhwKHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiwgZmxhZ3MpLFxuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uID0gcmVnRXhwLCAvLy9cbiAgICAgICAgICBydWxlID0gbmV3IFJ1bGUoc2lnbmlmaWNhbnRUb2tlblR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZTtcblxuZnVuY3Rpb24gaXNVbmljb2RlKHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybikge1xuICBjb25zdCBtYXRjaGVzID0gcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuLm1hdGNoKC91XFx7LyksXG4gICAgICAgIHVuaWNvZGUgPSAobWF0Y2hlcyAhPT0gbnVsbCk7XG5cbiAgcmV0dXJuIHVuaWNvZGU7XG59XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi9ydWxlJyksXG4gICAgICB1dGlsID0gcmVxdWlyZSgnLi4vdXRpbCcpO1xuXG5jbGFzcyBSdWxlcyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG4gIFxuICByZWR1Y2UoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkgeyByZXR1cm4gdGhpcy5hcnJheS5yZWR1Y2UoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSk7IH1cblxuICBnZXRSdWxlKGRlcHRoKSB7XG4gICAgY29uc3QgcnVsZSA9ICh0aGlzLmFycmF5W2RlcHRoXSB8fCBudWxsKTsgLy8vXG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21HcmFtbWFyKGdyYW1tYXIpIHtcbiAgICBjb25zdCBzaWduaWZpY2FudFRva2VuVHlwZXMgPSBSdWxlcy5zaWduaWZpY2FudFRva2VuVHlwZXNGcm9tR3JhbW1hcihncmFtbWFyKSxcbiAgICAgICAgICBhcnJheSA9IHNpZ25pZmljYW50VG9rZW5UeXBlcy5tYXAoZnVuY3Rpb24oc2lnbmlmaWNhbnRUb2tlblR5cGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiA9IFJ1bGVzLmZpbmRSZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4oc2lnbmlmaWNhbnRUb2tlblR5cGUsIGdyYW1tYXIpLFxuICAgICAgICAgICAgICAgICAgcnVsZSA9IFJ1bGUuZnJvbVNpZ25pZmljYW50VG9rZW5UeXBlQW5kUmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKHNpZ25pZmljYW50VG9rZW5UeXBlLCByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4pO1xuICAgICAgXG4gICAgICAgICAgICByZXR1cm4gcnVsZTsgICAgICBcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBydWxlcyA9IG5ldyBSdWxlcyhhcnJheSk7XG4gICAgXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgc3RhdGljIGZpbmRSZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4oc2lnbmlmaWNhbnRUb2tlblR5cGUsIGdyYW1tYXIpIHtcbiAgICBjb25zdCByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4gPSBncmFtbWFyLnJlZHVjZShmdW5jdGlvbihyZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4sIGVudHJ5KSB7XG4gICAgICAgICAgICBpZiAocmVndWxhckV4cHJlc3Npb25QYXR0ZXJuID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGVudHJ5S2V5cyA9IE9iamVjdC5rZXlzKGVudHJ5KSxcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RFbnRyeUtleSA9IGZpcnN0KGVudHJ5S2V5cyksXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5U2lnbmlmaWNhbnRUb2tlblR5cGUgPSBmaXJzdEVudHJ5S2V5OyAgLy8vXG5cbiAgICAgICAgICAgICAgaWYgKGVudHJ5U2lnbmlmaWNhbnRUb2tlblR5cGUgPT09IHNpZ25pZmljYW50VG9rZW5UeXBlKSB7XG4gICAgICAgICAgICAgICAgcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuID0gZW50cnlbc2lnbmlmaWNhbnRUb2tlblR5cGVdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm47XG4gICAgICAgICAgfSwgbnVsbCk7XG5cbiAgICByZXR1cm4gcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuO1xuICB9XG5cbiAgc3RhdGljIHNpZ25pZmljYW50VG9rZW5UeXBlc0Zyb21HcmFtbWFyKGdyYW1tYXIpIHtcbiAgICBjb25zdCBzaWduaWZpY2FudFRva2VuVHlwZXMgPSBncmFtbWFyLm1hcChmdW5jdGlvbihlbnRyeSkge1xuICAgICAgICAgICAgY29uc3QgZW50cnlLZXlzID0gT2JqZWN0LmtleXMoZW50cnkpLFxuICAgICAgICAgICAgICAgICAgZmlyc3RFbnRyeUtleSA9IGZpcnN0KGVudHJ5S2V5cyksXG4gICAgICAgICAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZSA9IGZpcnN0RW50cnlLZXk7IC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlblR5cGU7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlblR5cGVzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZXM7XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfSIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdXRpbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWwnKTtcblxuY2xhc3MgTm9uU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQsIGxpbmUsIGh0bWwpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgdGhpcy5odG1sID0gaHRtbDtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgfVxuICBcbiAgZ2V0TGluZSgpIHtcbiAgICByZXR1cm4gdGhpcy5saW5lO1xuICB9XG5cbiAgZ2V0SFRNTCgpIHtcbiAgICByZXR1cm4gdGhpcy5odG1sO1xuICB9XG4gIFxuICBnZXRMZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudC5sZW5ndGg7IC8vL1xuICB9XG4gIFxuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gTm9uU2lnbmlmaWNhbnRUb2tlbi5jbG9uZSh0aGlzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgTm9uU2lnbmlmaWNhbnRUb2tlbik7IH1cblxuICBzdGF0aWMgY2xvbmUodG9rZW4sIHN0YXJ0UG9zaXRpb24gPSAwLCBlbmRQb3NpdGlvbiA9IHRva2VuLmdldExlbmd0aCgpLCBDbGFzcyA9IE5vblNpZ25pZmljYW50VG9rZW4pIHtcbiAgICBsZXQgY2xvbmVkTm9uU2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgICBpZiAoc3RhcnRQb3NpdGlvbiAhPT0gZW5kUG9zaXRpb24pIHtcbiAgICAgIGNvbnN0IGxpbmUgPSB0b2tlbi5nZXRMaW5lKCk7XG5cbiAgICAgIGxldCBjb250ZW50ID0gdG9rZW4uZ2V0Q29udGVudCgpO1xuICAgICAgXG4gICAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pO1xuXG4gICAgICBjbG9uZWROb25TaWduaWZpY2FudFRva2VuID0gQ2xhc3MuZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIENsYXNzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2xvbmVkTm9uU2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBDbGFzcyA9IE5vblNpZ25pZmljYW50VG9rZW4pIHtcbiAgICBjb25zdCBodG1sID0gQ2xhc3MuaHRtbEZyb21Db250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIHRva2VuID0gbmV3IENsYXNzKGNvbnRlbnQsIGxpbmUsIGh0bWwpO1xuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgc3RhdGljIGh0bWxGcm9tQ29udGVudChjb250ZW50KSB7XG4gICAgY29uc3Qgc2FuaXRpc2VkQ29udGVudCA9IHV0aWwuc2FuaXRpc2VDb250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIGh0bWwgPSBzYW5pdGlzZWRDb250ZW50O1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb25TaWduaWZpY2FudFRva2VuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB1dGlsID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbCcpLFxuICAgICAgTm9uU2lnbmlmaWNhbnRUb2tlbiA9IHJlcXVpcmUoJy4uL25vblNpZ25pZmljYW50Jyk7XG5cbmNsYXNzIENvbW1lbnRUb2tlbiBleHRlbmRzIE5vblNpZ25pZmljYW50VG9rZW4ge1xuICBtZXJnZShjb21tZW50VG9rZW4pIHtcbiAgICBsZXQgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpO1xuICAgIFxuICAgIGNvbnN0IGxpbmUgPSB0aGlzLmdldExpbmUoKSxcbiAgICAgICAgICBjb21tZW50VG9rZW5Db250ZW50ID0gY29tbWVudFRva2VuLmdldENvbnRlbnQoKTtcblxuICAgIGNvbnRlbnQgKz0gY29tbWVudFRva2VuQ29udGVudDtcblxuICAgIGNvbW1lbnRUb2tlbiA9IENvbW1lbnRUb2tlbi5mcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSk7ICAvLy9cblxuICAgIHJldHVybiBjb21tZW50VG9rZW47XG4gIH1cblxuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gQ29tbWVudFRva2VuLmNsb25lKHRoaXMsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCBDb21tZW50VG9rZW4pOyB9XG5cbiAgc3RhdGljIGNsb25lKHRva2VuLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgQ2xhc3MgPSBDb21tZW50VG9rZW4pIHsgcmV0dXJuIE5vblNpZ25pZmljYW50VG9rZW4uY2xvbmUodG9rZW4sIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCBDbGFzcykgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSwgQ2xhc3MgPSBDb21tZW50VG9rZW4pIHsgcmV0dXJuIE5vblNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIENsYXNzKTsgfVxuXG4gIHN0YXRpYyBodG1sRnJvbUNvbnRlbnQoY29udGVudCkge1xuICAgIGNvbnN0IHNhbml0aXNlZENvbnRlbnQgPSB1dGlsLnNhbml0aXNlQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICBpbm5lckhUTUwgPSBzYW5pdGlzZWRDb250ZW50LCAvLy9cbiAgICAgICAgICBodG1sID0gYDxzcGFuIGNsYXNzPVwiY29tbWVudFwiPiR7aW5uZXJIVE1MfTwvc3Bhbj5gO1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21tZW50VG9rZW47XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1lbnQnKTtcblxuY2xhc3MgRW5kT2ZDb21tZW50VG9rZW4gZXh0ZW5kcyBDb21tZW50VG9rZW4ge1xuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gQ29tbWVudFRva2VuLmNsb25lKHRoaXMsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCBFbmRPZkNvbW1lbnRUb2tlbik7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpIHsgcmV0dXJuIENvbW1lbnRUb2tlbi5mcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSwgRW5kT2ZDb21tZW50VG9rZW4pOyB9XG5cbiAgc3RhdGljIGZyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lKSB7XG4gICAgbGV0IGVuZE9mQ29tbWVudFRva2VuID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBtYXRjaGVzID0gY29udGVudC5tYXRjaCgvXlxcKlxcLy8pO1xuXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKTtcblxuICAgICAgY29udGVudCA9IGZpcnN0TWF0Y2g7IC8vL1xuXG4gICAgICBlbmRPZkNvbW1lbnRUb2tlbiA9IEVuZE9mQ29tbWVudFRva2VuLmZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZW5kT2ZDb21tZW50VG9rZW47XG4gIH1cblxuICBzdGF0aWMgcG9zaXRpb25XaXRoaW5Db250ZW50KGNvbnRlbnQpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IGNvbnRlbnQuc2VhcmNoKC9cXCpcXC8vKTtcblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVuZE9mQ29tbWVudFRva2VuO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi4vY29tbWVudCcpO1xuXG5jbGFzcyBNaWRkbGVPZkNvbW1lbnRUb2tlbiBleHRlbmRzIENvbW1lbnRUb2tlbiB7XG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBDb21tZW50VG9rZW4uY2xvbmUodGhpcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24sIE1pZGRsZU9mQ29tbWVudFRva2VuKTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSwgbGVuZ3RoKSB7XG4gICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyKDAsIGxlbmd0aCk7ICAvLy9cblxuICAgIGNvbnN0IG1pZGRsZU9mQ29tbWVudFRva2VuID0gQ29tbWVudFRva2VuLmZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBNaWRkbGVPZkNvbW1lbnRUb2tlbik7XG5cbiAgICByZXR1cm4gbWlkZGxlT2ZDb21tZW50VG9rZW47XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNaWRkbGVPZkNvbW1lbnRUb2tlbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi4vY29tbWVudCcpO1xuXG5jbGFzcyBTdGFydE9mQ29tbWVudFRva2VuIGV4dGVuZHMgQ29tbWVudFRva2VuIHtcbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIENvbW1lbnRUb2tlbi5jbG9uZSh0aGlzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgU3RhcnRPZkNvbW1lbnRUb2tlbik7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpIHsgcmV0dXJuIENvbW1lbnRUb2tlbi5mcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSwgU3RhcnRPZkNvbW1lbnRUb2tlbik7IH1cblxuICBzdGF0aWMgZnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpIHtcbiAgICBsZXQgc3RhcnRPZkNvbW1lbnRUb2tlbiA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2goL15cXC9cXCovKTtcblxuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICBjb25zdCBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyk7XG5cbiAgICAgIGNvbnRlbnQgPSBmaXJzdE1hdGNoOyAvLy9cblxuICAgICAgc3RhcnRPZkNvbW1lbnRUb2tlbiA9IFN0YXJ0T2ZDb21tZW50VG9rZW4uZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gc3RhcnRPZkNvbW1lbnRUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBwb3NpdGlvbldpdGhpbkNvbnRlbnQoY29udGVudCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gY29udGVudC5zZWFyY2goL1xcL1xcKi8pO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU3RhcnRPZkNvbW1lbnRUb2tlbjtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHV0aWwgPSByZXF1aXJlKCcuLi8uLi91dGlsJyk7XG5cbmNsYXNzIFNpZ25pZmljYW50VG9rZW4ge1xuICBjb25zdHJ1Y3Rvcihjb250ZW50LCBsaW5lLCB0eXBlLCBpbm5lckhUTUwpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmlubmVySFRNTCA9IGlubmVySFRNTDtcblxuICAgIHRoaXMuZXJyb3IgPSB1bmRlZmluZWQ7IC8vL1xuICB9XG4gIFxuICBnZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gIH1cbiAgXG4gIGdldExpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMubGluZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldElubmVySFRNTCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbm5lckhUTUw7XG4gIH1cblxuICBnZXRFcnJvcigpIHtcbiAgICByZXR1cm4gdGhpcy5lcnJvcjtcbiAgfVxuXG4gIGdldEhUTUwoKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gKHRoaXMuZXJyb3IgPT09IHRydWUpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICdlcnJvcicgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnR5cGUsXG4gICAgICAgICAgaHRtbCA9IGA8c3BhbiBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiPiR7dGhpcy5pbm5lckhUTUx9PC9zcGFuPmA7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGdldExlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50Lmxlbmd0aDsgLy8vXG4gIH1cblxuICBzZXRFcnJvcihlcnJvcikge1xuICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcbiAgfVxuXG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBTaWduaWZpY2FudFRva2VuLmNsb25lKHRoaXMsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCBTaWduaWZpY2FudFRva2VuKSB9XG5cbiAgc3RhdGljIGNsb25lKHRva2VuLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgQ2xhc3MgPSBTaWduaWZpY2FudFRva2VuKSB7XG4gICAgbGV0IGNsb25lZFNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gICAgaWYgKHN0YXJ0UG9zaXRpb24gIT09IGVuZFBvc2l0aW9uKSB7XG4gICAgICBsZXQgY29udGVudCA9IHRva2VuLmdldENvbnRlbnQoKTtcblxuICAgICAgY29uc3QgbGluZSA9IHRva2VuLmdldExpbmUoKSxcbiAgICAgICAgICAgIHR5cGUgPSB0b2tlbi5nZXRUeXBlKCksXG4gICAgICAgICAgICBlcnJvciA9IHRva2VuLmdldEVycm9yKCk7XG5cbiAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7XG5cbiAgICAgIGNsb25lZFNpZ25pZmljYW50VG9rZW4gPSBDbGFzcy5mcm9tQ29udGVudExpbmVBbmRUeXBlKGNvbnRlbnQsIGxpbmUsIHR5cGUpO1xuXG4gICAgICBjbG9uZWRTaWduaWZpY2FudFRva2VuLnNldEVycm9yKGVycm9yKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2xvbmVkU2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudExpbmVBbmRUeXBlKGNvbnRlbnQsIGxpbmUsIHR5cGUsIENsYXNzID0gU2lnbmlmaWNhbnRUb2tlbikge1xuICAgIGNvbnN0IGlubmVySFRNTCA9IENsYXNzLmlubmVySFRNTEZyb21Db250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBuZXcgQ2xhc3MoY29udGVudCwgbGluZSwgdHlwZSwgaW5uZXJIVE1MKTtcblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgc3RhdGljIGlubmVySFRNTEZyb21Db250ZW50KGNvbnRlbnQpIHtcbiAgICBjb25zdCBzYW5pdGlzZWRDb250ZW50ID0gdXRpbC5zYW5pdGlzZUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgaW5uZXJIVE1MID0gc2FuaXRpc2VkQ29udGVudDsgLy8vXG5cbiAgICByZXR1cm4gaW5uZXJIVE1MO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2lnbmlmaWNhbnRUb2tlbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgU2lnbmlmaWNhbnRUb2tlbiA9IHJlcXVpcmUoJy4uL3NpZ25pZmljYW50Jyk7XG5cbmNsYXNzIEVuZE9mTGluZVRva2VuIGV4dGVuZHMgU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBTaWduaWZpY2FudFRva2VuLmNsb25lKHRoaXMsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCBFbmRPZkxpbmVUb2tlbik7IH1cbiAgXG4gIHN0YXRpYyBmcm9tQ29udGVudExpbmVBbmRUeXBlKGNvbnRlbnQsIGxpbmUsIHR5cGUpIHsgcmV0dXJuIFNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnRMaW5lQW5kVHlwZShjb250ZW50LCBsaW5lLCB0eXBlLCBFbmRPZkxpbmVUb2tlbik7IH1cbiAgXG4gIGdldEhUTUwoKSB7XG4gICAgY29uc3QgaHRtbCA9ICcnO1xuICAgIFxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgc3RhdGljIGZyb21MaW5lKGxpbmUpIHtcbiAgICBjb25zdCBjb250ZW50ID0gJycsXG4gICAgICAgICAgdHlwZSA9IEVuZE9mTGluZVRva2VuLnR5cGUsXG4gICAgICAgICAgZW5kT2ZMaW5lVG9rZW4gPSBFbmRPZkxpbmVUb2tlbi5mcm9tQ29udGVudExpbmVBbmRUeXBlKGNvbnRlbnQsIGxpbmUsIHR5cGUpO1xuICAgIFxuICAgIHJldHVybiBlbmRPZkxpbmVUb2tlbjtcbiAgfVxufVxuXG5FbmRPZkxpbmVUb2tlbi50eXBlID0gJ2VuZE9mTGluZSc7XG5cbm1vZHVsZS5leHBvcnRzID0gRW5kT2ZMaW5lVG9rZW47XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFNpZ25pZmljYW50VG9rZW4gPSByZXF1aXJlKCcuLi9zaWduaWZpY2FudCcpO1xuXG5jbGFzcyBTdHJpbmdUb2tlbiBleHRlbmRzIFNpZ25pZmljYW50VG9rZW4ge1xuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5jbG9uZSh0aGlzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgU3RyaW5nVG9rZW4pOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50TGluZUFuZFR5cGUoY29udGVudCwgbGluZSwgdHlwZSkgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5mcm9tQ29udGVudExpbmVBbmRUeXBlKGNvbnRlbnQsIGxpbmUsIHR5cGUsIFN0cmluZ1Rva2VuKTsgfVxuXG4gIHN0YXRpYyBmcm9tV2l0aGluQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSkge1xuICAgIGxldCBzdHJpbmdUb2tlbiA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2goLyhcIlteXCJdKlwiKS8pO1xuXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKTtcbiAgICAgIFxuICAgICAgY29udGVudCA9IGZpcnN0TWF0Y2g7IC8vL1xuICAgICAgXG4gICAgICBjb25zdCB0eXBlID0gU3RyaW5nVG9rZW4udHlwZTtcblxuICAgICAgc3RyaW5nVG9rZW4gPSBTdHJpbmdUb2tlbi5mcm9tQ29udGVudExpbmVBbmRUeXBlKGNvbnRlbnQsIGxpbmUsIHR5cGUpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gc3RyaW5nVG9rZW47XG4gIH1cblxuICBzdGF0aWMgcG9zaXRpb25XaXRoaW5Db250ZW50KGNvbnRlbnQpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IGNvbnRlbnQuc2VhcmNoKC9cIlteXCJdKlwiLyk7XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTdHJpbmdUb2tlbjtcblxuU3RyaW5nVG9rZW4udHlwZSA9ICdzdHJpbmcnO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgU2lnbmlmaWNhbnRUb2tlbiA9IHJlcXVpcmUoJy4uL3NpZ25pZmljYW50Jyk7XG5cbmNsYXNzIFdoaXRlc3BhY2VUb2tlbiBleHRlbmRzIFNpZ25pZmljYW50VG9rZW4ge1xuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5jbG9uZSh0aGlzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgV2hpdGVzcGFjZVRva2VuKTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudExpbmVBbmRUeXBlKGNvbnRlbnQsIGxpbmUsIHR5cGUpIHsgcmV0dXJuIFNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnRMaW5lQW5kVHlwZShjb250ZW50LCBsaW5lLCB0eXBlLCBXaGl0ZXNwYWNlVG9rZW4pOyB9XG5cbiAgc3RhdGljIGZyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lKSB7XG4gICAgbGV0IHdoaXRlc3BhY2VUb2tlbiA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2goLyhbXFx0IF0rKS8pO1xuXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKTtcbiAgICAgIFxuICAgICAgY29udGVudCA9IGZpcnN0TWF0Y2g7IC8vL1xuICAgICAgXG4gICAgICBjb25zdCB0eXBlID0gV2hpdGVzcGFjZVRva2VuLnR5cGU7XG5cbiAgICAgIHdoaXRlc3BhY2VUb2tlbiA9IFdoaXRlc3BhY2VUb2tlbi5mcm9tQ29udGVudExpbmVBbmRUeXBlKGNvbnRlbnQsIGxpbmUsIHR5cGUpO1xuICAgIH1cblxuICAgIHJldHVybiB3aGl0ZXNwYWNlVG9rZW47XG4gIH1cblxuICBzdGF0aWMgcG9zaXRpb25XaXRoaW5Db250ZW50KGNvbnRlbnQpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IGNvbnRlbnQuc2VhcmNoKC9bXFx0IF0rLyk7XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBXaGl0ZXNwYWNlVG9rZW47XG5cbldoaXRlc3BhY2VUb2tlbi50eXBlID0gJ3doaXRlc3BhY2UnOyBcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCB1dGlsID0gcmVxdWlyZSgnLi4vdXRpbCcpO1xyXG5cclxuY2xhc3MgVG9rZW5zIHtcclxuICBzdGF0aWMgcGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lLCBUb2tlbikge1xyXG4gICAgbGV0IG9mZnNldCA9IDA7XHJcbiAgICBcclxuICAgIGNvbnN0IHRva2Vuc09yQ29udGVudHNMZW5ndGggPSB0b2tlbnNPckNvbnRlbnRzLmxlbmd0aDtcclxuXHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdG9rZW5zT3JDb250ZW50c0xlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBjb25zdCBvZmZzZXRJbmRleCA9IGluZGV4ICsgb2Zmc2V0LFxyXG4gICAgICAgICAgdG9rZW5PckNvbnRlbnQgPSB0b2tlbnNPckNvbnRlbnRzW29mZnNldEluZGV4XTtcclxuXHJcbiAgICAgIGlmICh0eXBlb2YgdG9rZW5PckNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgY29uc3QgY29udGVudCA9IHRva2VuT3JDb250ZW50LCAgLy8vXHJcbiAgICAgICAgICAgIHRva2Vuc09yUmVtYWluaW5nQ29udGVudCA9IHRva2Vuc09yUmVtYWluaW5nQ29udGVudEZyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBUb2tlbiksXHJcbiAgICAgICAgICAgIHRva2Vuc09yUmVtYWluaW5nQ29udGVudExlbmd0aCA9IHRva2Vuc09yUmVtYWluaW5nQ29udGVudC5sZW5ndGgsXHJcbiAgICAgICAgICAgIHN0YXJ0ID0gb2Zmc2V0SW5kZXg7XHJcblxyXG4gICAgICAgIHV0aWwuc3BsaWNlQXJyYXkodG9rZW5zT3JDb250ZW50cywgc3RhcnQsIDEsIHRva2Vuc09yUmVtYWluaW5nQ29udGVudCk7XHJcblxyXG4gICAgICAgIG9mZnNldCArPSB0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnRMZW5ndGggLSAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFRva2VucztcclxuXHJcbmZ1bmN0aW9uIHRva2Vuc09yUmVtYWluaW5nQ29udGVudEZyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBUb2tlbikge1xyXG4gIGxldCByZW1haW5pbmdDb250ZW50LFxyXG4gICAgICB0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnQgPSBbXSwgICAgICAgXHJcbiAgICAgIHRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ID0gVG9rZW4ucG9zaXRpb25XaXRoaW5Db250ZW50KGNvbnRlbnQpO1xyXG4gIFxyXG4gIHdoaWxlICh0b2tlblBvc2l0aW9uV2l0aGluQ29udGVudCAhPT0gLTEpIHtcclxuICAgIGlmICh0b2tlblBvc2l0aW9uV2l0aGluQ29udGVudCA+IDApIHtcclxuICAgICAgcmVtYWluaW5nQ29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKDAsIHRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50KTtcclxuXHJcbiAgICAgIHRva2Vuc09yUmVtYWluaW5nQ29udGVudC5wdXNoKHJlbWFpbmluZ0NvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRva2VuID0gVG9rZW4uZnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpLFxyXG4gICAgICAgICAgdG9rZW5MZW5ndGggPSB0b2tlbi5nZXRMZW5ndGgoKSxcclxuICAgICAgICAgIHRva2VuT2Zmc2V0ID0gdG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQgKyB0b2tlbkxlbmd0aDtcclxuICAgIFxyXG4gICAgdG9rZW5zT3JSZW1haW5pbmdDb250ZW50LnB1c2godG9rZW4pO1xyXG4gICAgXHJcbiAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcodG9rZW5PZmZzZXQpO1xyXG5cclxuICAgIHRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ID0gVG9rZW4ucG9zaXRpb25XaXRoaW5Db250ZW50KGNvbnRlbnQpO1xyXG4gIH1cclxuICBcclxuICBpZiAoY29udGVudCAhPT0gJycpIHtcclxuICAgIHJlbWFpbmluZ0NvbnRlbnQgPSBjb250ZW50O1xyXG5cclxuICAgIHRva2Vuc09yUmVtYWluaW5nQ29udGVudC5wdXNoKHJlbWFpbmluZ0NvbnRlbnQpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRva2Vuc09yUmVtYWluaW5nQ29udGVudDtcclxufVxyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCB1dGlsID0gcmVxdWlyZSgnLi4vLi4vdXRpbCcpLFxyXG4gICAgICBFbmRPZkNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvZW5kT2YnKSxcclxuICAgICAgU3RhcnRPZkNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvc3RhcnRPZicpLFxyXG4gICAgICBNaWRkbGVPZkNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvbWlkZGxlT2YnKTtcclxuXHJcbmNsYXNzIENvbW1lbnRUb2tlbnMge1xyXG4gIHN0YXRpYyBwYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUsIGNvbnRleHQpIHtcclxuICAgIGxldCBjb250ZW50ID0gdG9rZW5zT3JDb250ZW50cy5wb3AoKSxcclxuICAgICAgICBjb21tZW50VG9rZW4sXHJcbiAgICAgICAgY29tbWVudFRva2VuTGVuZ3RoLFxyXG4gICAgICAgIHByZXZpb3VzTGluZUluQ29tbWVudCA9IGNvbnRleHQuaXNQcmV2aW91c0xpbmVJbkNvbW1lbnQoKSxcclxuICAgICAgICBpbkNvbW1lbnQgPSAocHJldmlvdXNMaW5lSW5Db21tZW50ID09PSB0cnVlKTtcclxuXHJcbiAgICB3aGlsZSAoY29udGVudCAhPT0gJycpIHtcclxuICAgICAgbGV0IGNvbnRlbnRMZW5ndGggPSBjb250ZW50Lmxlbmd0aDtcclxuXHJcbiAgICAgIGlmIChpbkNvbW1lbnQpIHtcclxuICAgICAgICBjb25zdCBlbmRPZkNvbW1lbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudCA9IEVuZE9mQ29tbWVudFRva2VuLnBvc2l0aW9uV2l0aGluQ29udGVudChjb250ZW50KTtcclxuXHJcbiAgICAgICAgaWYgKGVuZE9mQ29tbWVudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ID09PSAwKSB7XHJcbiAgICAgICAgICBpbkNvbW1lbnQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICBjb21tZW50VG9rZW4gPSBFbmRPZkNvbW1lbnRUb2tlbi5mcm9tV2l0aGluQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSk7XHJcblxyXG4gICAgICAgICAgY29tbWVudFRva2VuTGVuZ3RoID0gY29tbWVudFRva2VuLmdldExlbmd0aCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCBtaWRkbGVPZkNvbW1lbnRUb2tlbkxlbmd0aCA9IHV0aWwubWluaW11bUJhck1pbnVzT25lKGVuZE9mQ29tbWVudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50LCBjb250ZW50TGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICBjb21tZW50VG9rZW4gPSBNaWRkbGVPZkNvbW1lbnRUb2tlbi5mcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSwgbWlkZGxlT2ZDb21tZW50VG9rZW5MZW5ndGgpO1xyXG5cclxuICAgICAgICAgIGNvbW1lbnRUb2tlbkxlbmd0aCA9IG1pZGRsZU9mQ29tbWVudFRva2VuTGVuZ3RoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcHJldmlvdXNDb21tZW50VG9rZW4gPSB0b2tlbnNPckNvbnRlbnRzLnBvcCgpO1xyXG5cclxuICAgICAgICBjb21tZW50VG9rZW4gPSAocHJldmlvdXNDb21tZW50VG9rZW4gPT09IHVuZGVmaW5lZCkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRUb2tlbiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91c0NvbW1lbnRUb2tlbi5tZXJnZShjb21tZW50VG9rZW4pO1xyXG5cclxuICAgICAgICB0b2tlbnNPckNvbnRlbnRzLnB1c2goY29tbWVudFRva2VuKTtcclxuXHJcbiAgICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKGNvbW1lbnRUb2tlbkxlbmd0aCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3Qgc3RhcnRPZkNvbW1lbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudCA9IFN0YXJ0T2ZDb21tZW50VG9rZW4ucG9zaXRpb25XaXRoaW5Db250ZW50KGNvbnRlbnQpO1xyXG5cclxuICAgICAgICBpZiAoc3RhcnRPZkNvbW1lbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudCA9PT0gMCkge1xyXG4gICAgICAgICAgaW5Db21tZW50ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICBjb21tZW50VG9rZW4gPSBTdGFydE9mQ29tbWVudFRva2VuLmZyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lKTtcclxuXHJcbiAgICAgICAgICBjb21tZW50VG9rZW5MZW5ndGggPSBjb21tZW50VG9rZW4uZ2V0TGVuZ3RoKCk7XHJcblxyXG4gICAgICAgICAgdG9rZW5zT3JDb250ZW50cy5wdXNoKGNvbW1lbnRUb2tlbik7XHJcblxyXG4gICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKGNvbW1lbnRUb2tlbkxlbmd0aCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnRlbnRMZW5ndGggPSB1dGlsLm1pbmltdW1CYXJNaW51c09uZShzdGFydE9mQ29tbWVudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50LCBjb250ZW50TGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICBjb25zdCByZW1haW5pbmdDb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoY29udGVudExlbmd0aCk7XHJcblxyXG4gICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKDAsIGNvbnRlbnRMZW5ndGgpO1xyXG5cclxuICAgICAgICAgIHRva2Vuc09yQ29udGVudHMucHVzaChjb250ZW50KTtcclxuXHJcbiAgICAgICAgICBjb250ZW50ID0gcmVtYWluaW5nQ29udGVudDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcmV2aW91c0xpbmVJbkNvbW1lbnQgPSBpbkNvbW1lbnQ7ICAvLy9cclxuXHJcbiAgICBjb250ZXh0LnNldFByZXZpb3VzTGluZUluQ29tbWVudChwcmV2aW91c0xpbmVJbkNvbW1lbnQpO1xyXG5cclxuICAgIHJldHVybiBpbkNvbW1lbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1lbnRUb2tlbnM7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIFNpZ25pZmljYW50VG9rZW5zIHtcclxuICBzdGF0aWMgcGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lLCBydWxlcykge1xyXG4gICAgY29uc3QgdG9rZW5zID0gdG9rZW5zT3JDb250ZW50cy5yZWR1Y2UoZnVuY3Rpb24odG9rZW5zLCB0b2tlbk9yUmVtYWluaW5nQ29udGVudCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuT3JSZW1haW5pbmdDb250ZW50ID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0b2tlbk9yUmVtYWluaW5nQ29udGVudCwgIC8vL1xyXG4gICAgICAgICAgICAgICAgICAgIGRlcHRoID0gMCxcclxuICAgICAgICAgICAgICAgICAgICBzaWduaWZpY2FudFRva2VucyA9IHNpZ25pZmljYW50VG9rZW5zRnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIHJ1bGVzLCBkZXB0aCk7XHJcbiAgICAgIFxyXG4gICAgICAgICAgICAgIHRva2VucyA9IHRva2Vucy5jb25jYXQoc2lnbmlmaWNhbnRUb2tlbnMpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGNvbnN0IG5vblNpZ25pZmljYW50VG9rZW4gPSB0b2tlbk9yUmVtYWluaW5nQ29udGVudDsgIC8vL1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHRva2Vucy5wdXNoKG5vblNpZ25pZmljYW50VG9rZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zO1xyXG4gICAgICAgICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiB0b2tlbnM7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFNpZ25pZmljYW50VG9rZW5zO1xyXG5cclxuZnVuY3Rpb24gc2lnbmlmaWNhbnRUb2tlbnNGcm9tV2l0aGluQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSwgcnVsZXMsIGRlcHRoKSB7XHJcbiAgbGV0IHNpZ25pZmljYW50VG9rZW5zID0gW107XHJcblxyXG4gIGlmIChjb250ZW50ICE9PSAnJykge1xyXG4gICAgY29uc3QgcnVsZSA9IHJ1bGVzLmdldFJ1bGUoZGVwdGgpO1xyXG5cclxuICAgIGlmIChydWxlICE9PSBudWxsKSB7XHJcbiAgICAgIGNvbnN0IG5leHREZXB0aCA9IGRlcHRoICsgMSxcclxuICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudCA9IHJ1bGUuc2lnbmlmaWNhbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudChjb250ZW50KTtcclxuXHJcbiAgICAgIGlmIChzaWduaWZpY2FudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ID09PSAtMSkge1xyXG4gICAgICAgIHNpZ25pZmljYW50VG9rZW5zID0gc2lnbmlmaWNhbnRUb2tlbnNGcm9tV2l0aGluQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSwgcnVsZXMsIG5leHREZXB0aCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IHJ1bGUuc2lnbmlmaWNhbnRUb2tlbkZyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lKSxcclxuICAgICAgICAgICAgICBzaWduaWZpY2FudFRva2VuTGVuZ3RoID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRMZW5ndGgoKSxcclxuICAgICAgICAgICAgICBsZWZ0ID0gc2lnbmlmaWNhbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudCwgIC8vL1xyXG4gICAgICAgICAgICAgIHJpZ2h0ID0gc2lnbmlmaWNhbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudCArIHNpZ25pZmljYW50VG9rZW5MZW5ndGgsICAvLy9cclxuICAgICAgICAgICAgICBsZWZ0Q29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKDAsIGxlZnQpLFxyXG4gICAgICAgICAgICAgIHJpZ2h0Q29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHJpZ2h0KSxcclxuICAgICAgICAgICAgICBsZWZ0U2lnbmlmaWNhbnRUb2tlbnMgPSBzaWduaWZpY2FudFRva2Vuc0Zyb21XaXRoaW5Db250ZW50QW5kTGluZShsZWZ0Q29udGVudCwgbGluZSwgcnVsZXMsIG5leHREZXB0aCksXHJcbiAgICAgICAgICAgICAgcmlnaHRTaWduaWZpY2FudFRva2VucyA9IHNpZ25pZmljYW50VG9rZW5zRnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKHJpZ2h0Q29udGVudCwgbGluZSwgcnVsZXMsIGRlcHRoKTtcclxuXHJcbiAgICAgICAgc2lnbmlmaWNhbnRUb2tlbnMgPSBbXS5jb25jYXQobGVmdFNpZ25pZmljYW50VG9rZW5zKS5jb25jYXQoc2lnbmlmaWNhbnRUb2tlbikuY29uY2F0KHJpZ2h0U2lnbmlmaWNhbnRUb2tlbnMpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZXJlIGlzIG5vIHJ1bGUgdG8gcGFyc2UgdGhlIGNvbnRlbnQgJyR7Y29udGVudH0nIG9uIGxpbmUgJHtsaW5lfWApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW5zO1xyXG59XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IFRva2VucyA9IHJlcXVpcmUoJy4uL3Rva2VucycpLFxyXG4gICAgICBTdHJpbmdUb2tlbiA9IHJlcXVpcmUoJy4uL3Rva2VuL3NpZ25pZmljYW50L3N0cmluZycpO1xyXG5cclxuY2xhc3MgU3RyaW5nVG9rZW5zIHtcclxuICBzdGF0aWMgcGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lKSB7IFRva2Vucy5wYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUsIFN0cmluZ1Rva2VuKTsgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFN0cmluZ1Rva2VucztcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgVG9rZW5zID0gcmVxdWlyZSgnLi4vdG9rZW5zJyksXHJcbiAgICAgIFdoaXRlc3BhY2VUb2tlbiA9IHJlcXVpcmUoJy4uL3Rva2VuL3NpZ25pZmljYW50L3doaXRlc3BhY2UnKTtcclxuXHJcbmNsYXNzIFdoaXRlc3BhY2VUb2tlbnMge1xyXG4gIHN0YXRpYyBwYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUpIHsgcmV0dXJuIFRva2Vucy5wYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUsIFdoaXRlc3BhY2VUb2tlbik7IH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBXaGl0ZXNwYWNlVG9rZW5zO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBMaW5lID0gcmVxdWlyZSgnLi9saW5lJyksXHJcbiAgICAgIENvbnRleHQgPSByZXF1aXJlKCcuLi9jb21tb24vY29udGV4dCcpLFxyXG4gICAgICBDb21tb25MZXhlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9sZXhlcicpLFxyXG4gICAgICBTdHJpbmdUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9zdHJpbmcnKSxcclxuICAgICAgRW5kT2ZMaW5lVG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvZW5kT2ZMaW5lJyksXHJcbiAgICAgIFdoaXRlc3BhY2VUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC93aGl0ZXNwYWNlJyk7XHJcblxyXG5jbGFzcyBGbG9yZW5jZUxleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xyXG4gIGxpbmVzRnJvbUNvbnRlbnQoY29udGVudCwgZmlyc3RMaW5lSW5kZXgsIG1pbmltdW1MaW5lc0xlbmd0aCwgcHJldmlvdXNMaW5lSW5Db21tZW50LCBmb2xsb3dpbmdMaW5lSW5Db21tZW50KSB7XHJcbiAgICBjb25zdCBjb250ZXh0ID0gbmV3IENvbnRleHQobWluaW11bUxpbmVzTGVuZ3RoLCBwcmV2aW91c0xpbmVJbkNvbW1lbnQsIGZvbGxvd2luZ0xpbmVJbkNvbW1lbnQpLFxyXG4gICAgICAgICAgbGluZXMgPSBzdXBlci5saW5lc0Zyb21Db250ZW50KGNvbnRlbnQsIGZpcnN0TGluZUluZGV4LCBjb250ZXh0KTtcclxuXHJcbiAgICByZXR1cm4gbGluZXM7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc2lnbmlmaWNhbnRUb2tlblR5cGVzKCkge1xyXG4gICAgY29uc3QgZ3JhbW1hciA9IEZsb3JlbmNlTGV4ZXIuZ3JhbW1hcixcclxuICAgICAgICAgIGdyYW1tYXJTaWduaWZpY2FudFRva2VuVHlwZXMgPSBDb21tb25MZXhlci5zaWduaWZpY2FudFRva2VuVHlwZXNGcm9tR3JhbW1hcihncmFtbWFyKSxcclxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlcyA9IGdyYW1tYXJTaWduaWZpY2FudFRva2VuVHlwZXMuY29uY2F0KFtcclxuICAgICAgICAgICAgU3RyaW5nVG9rZW4udHlwZSxcclxuICAgICAgICAgICAgV2hpdGVzcGFjZVRva2VuLnR5cGUsXHJcbiAgICAgICAgICAgIEVuZE9mTGluZVRva2VuLnR5cGVcclxuICAgICAgICAgIF0pO1xyXG5cclxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuVHlwZXM7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbUdyYW1tYXIoZ3JhbW1hcikge1xyXG4gICAgY29uc3QgcnVsZXMgPSBDb21tb25MZXhlci5ydWxlc0Zyb21HcmFtbWFyKGdyYW1tYXIpLFxyXG4gICAgICAgICAgZmxvcmVuY2VMZXhlciA9IG5ldyBGbG9yZW5jZUxleGVyKHJ1bGVzLCBMaW5lKTtcclxuXHJcbiAgICByZXR1cm4gZmxvcmVuY2VMZXhlcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcclxuICAgIGNvbnN0IGdyYW1tYXIgPSBGbG9yZW5jZUxleGVyLmdyYW1tYXIsXHJcbiAgICAgICAgICBmbG9yZW5jZUxleGVyID0gRmxvcmVuY2VMZXhlci5mcm9tR3JhbW1hcihncmFtbWFyKTtcclxuXHJcbiAgICByZXR1cm4gZmxvcmVuY2VMZXhlcjtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VMZXhlcjtcclxuXHJcbkZsb3JlbmNlTGV4ZXIuZ3JhbW1hciA9IFtcclxuXHJcbiAgeyBcInNwZWNpYWxcIiAgICA6IFwiLHw7fFxcXFx7fFxcXFx9fD18Ojp8OnxcXFxcKHxcXFxcKXxcXFxcLlxcXFwuXFxcXC58XFxcXC5cXFxcLlwiIH0sXHJcblxyXG4gIHsgXCJpbmNsdWRlXCIgICAgOiBcIl5pbmNsdWRlJFwiIH0sXHJcblxyXG4gIHsgXCJrZXl3b3JkXCIgICAgOiBcIl4oPzpSdWxlfEF4aW9tfFRoZW9yZW18TGVtbWF8UHJlbWlzZXN8UHJlbWlzZXxDb25jbHVzaW9ufFByb29mfFRoZXJlZm9yZXxTdXBwb3NlfFRoZW58SGVuY2V8VmFyaWFibGVzfFZhcmlhYmxlfE1ldGF2YXJpYWJsZXN8TWV0YXZhcmlhYmxlfENvbnN0cnVjdG9yc3xDb25zdHJ1Y3RvcnxUeXBlfE9iamVjdHxEZWZpbml0aW9ufGZyb218Ynl8bGV0fGlzfG5vdHxpbnxmcmVlfGRlZmluZWR8dW5kZWZpbmVkKSRcIiB9LFxyXG5cclxuICB7IFwidW5hc3NpZ25lZFwiIDogXCJeW1xcXFx1ezIxfS1cXFxcdXs3RX1cXFxcdXtBMX0tXFxcXHV7RkZ9XFxcXHV7MjIwMH0tXFxcXHV7MjJGRn1cXFxcdXsyQTAwfS1cXFxcdXsyQUZGfVxcXFx1ezIzMDB9LVxcXFx1ezIzZmZ9XFxcXHV7MUQ0MDB9LVxcXFx1ezFEN0ZGfV0rJFwiIH1cclxuXHJcbl07XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IENvbW1vbkxpbmUgPSByZXF1aXJlKCcuLi9jb21tb24vbGluZScpLFxyXG4gICAgICBDb21tZW50VG9rZW5zID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2Vucy9jb21tZW50JyksXHJcbiAgICAgIFN0cmluZ1Rva2VucyA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbnMvc3RyaW5nJyksXHJcbiAgICAgIFdoaXRlc3BhY2VUb2tlbnMgPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW5zL3doaXRlc3BhY2UnKSxcclxuICAgICAgRW5kT2ZMaW5lVG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvZW5kT2ZMaW5lJyk7XHJcblxyXG5jbGFzcyBMaW5lIGV4dGVuZHMgQ29tbW9uTGluZSB7XHJcbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQsIGNvbnRleHQsIHJ1bGVzKSB7XHJcbiAgICBjb25zdCBsaW5lID0gc3VwZXIuZnJvbUNvbnRlbnQoTGluZSwgY29udGVudCwgY29udGV4dCwgcnVsZXMsIENvbW1lbnRUb2tlbnMsIFN0cmluZ1Rva2VucywgV2hpdGVzcGFjZVRva2VucyksXHJcbiAgICAgICAgICBsaW5lSW5Db21tZW50ID0gbGluZS5pc0luQ29tbWVudCgpO1xyXG5cclxuICAgIGlmICghbGluZUluQ29tbWVudCkge1xyXG4gICAgICBjb25zdCBlbmRPZkxpbmVUb2tlbiA9IEVuZE9mTGluZVRva2VuLmZyb21MaW5lKGxpbmUpO1xyXG5cclxuICAgICAgbGluZS5wdXNoVG9rZW4oZW5kT2ZMaW5lVG9rZW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBsaW5lO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBMaW5lO1xyXG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IExpbmUgPSByZXF1aXJlKCcuL2xpbmUnKTtcblxuY2xhc3MgUHJpbWl0aXZlTGV4ZXIge1xuICBzdGF0aWMgbGluZXNGcm9tR3JhbW1hcihncmFtbWFyKSB7XG4gICAgY29uc3QgY29udGVudHMgPSBjb250ZW50c0Zyb21HcmFtbWFyKGdyYW1tYXIpLFxuICAgICAgICAgIGxpbmVzID0gY29udGVudHMubWFwKGZ1bmN0aW9uKGNvbnRlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBMaW5lLmZyb21Db250ZW50KGNvbnRlbnQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gbGluZTtcbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBsaW5lcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByaW1pdGl2ZUxleGVyO1xuXG5mdW5jdGlvbiBjb250ZW50c0Zyb21HcmFtbWFyKGdyYW1tYXIpIHtcbiAgY29uc3QgY29udGVudHMgPSBncmFtbWFyLnNwbGl0KCdcXG4nKS5yZWR1Y2UoZnVuY3Rpb24gKGNvbnRlbnRzLCBjb250ZW50KSB7XG4gICAgbGV0IG1hdGNoZXM7XG5cbiAgICBtYXRjaGVzID0gY29udGVudC5tYXRjaChMaW5lLm5hbWVFeHByZXNzaW9uUmVnRXhwKTtcblxuICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICBjb250ZW50cy5wdXNoKGNvbnRlbnQpO1xuXG4gICAgICByZXR1cm4gY29udGVudHM7XG4gICAgfVxuXG4gICAgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2goTGluZS5jb250aW51ZWRFeHByZXNzaW9uUmVnRXhwKTtcblxuICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwcmV2aW91c0NvbnRlbnQgPSBjb250ZW50cy5wb3AoKSxcbiAgICAgICAgICAgIGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKSxcbiAgICAgICAgICAgIGNvbnRpbnVlZEV4cHJlc3Npb24gPSBmaXJzdE1hdGNoLCAvLy9cbiAgICAgICAgICAgIGNvbnRpbnVpbmdDb250ZW50ID0gJyAnICsgY29udGludWVkRXhwcmVzc2lvbjtcblxuICAgICAgY29udGVudCA9IHByZXZpb3VzQ29udGVudCArIGNvbnRpbnVpbmdDb250ZW50O1xuXG4gICAgICBjb250ZW50cy5wdXNoKGNvbnRlbnQpO1xuXG4gICAgICByZXR1cm4gY29udGVudHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRlbnRzO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIGNvbnRlbnRzO1xufVxuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgU3ltYm9sU2VxdWVuY2UgPSByZXF1aXJlKCcuL3N5bWJvbFNlcXVlbmNlJyk7XG5cbmNsYXNzIExpbmUge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBzeW1ib2xTZXF1ZW5jZXMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuc3ltYm9sU2VxdWVuY2VzID0gc3ltYm9sU2VxdWVuY2VzO1xuICB9XG4gIFxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cbiAgXG4gIG1hcFN5bWJvbFNlcXVlbmNlcyhjYWxsYmFjaykge1xuICAgIHJldHVybiB0aGlzLnN5bWJvbFNlcXVlbmNlcy5tYXAoY2FsbGJhY2spO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCkge1xuICAgIGNvbnN0IG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKExpbmUubmFtZUV4cHJlc3Npb25SZWdFeHApLFxuICAgICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICAgIHRoaXJkTWF0Y2ggPSB0aGlyZChtYXRjaGVzKSxcbiAgICAgICAgICBuYW1lID0gc2Vjb25kTWF0Y2gsIC8vL1xuICAgICAgICAgIGV4cHJlc3Npb24gPSB0aGlyZE1hdGNoLCAvLy9cbiAgICAgICAgICBjaG9pY2VzID0gZXhwcmVzc2lvbi5zcGxpdChMaW5lLmNob2ljZURlbGltaXRlclJlZ0V4cCksXG4gICAgICAgICAgc3ltYm9sU2VxdWVuY2VzID0gY2hvaWNlcy5tYXAoZnVuY3Rpb24oY2hvaWNlKSB7XG4gICAgICAgICAgICBjb25zdCBzeW1ib2xTZXF1ZW5jZSA9IFN5bWJvbFNlcXVlbmNlLmZyb21DaG9pY2UoY2hvaWNlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHN5bWJvbFNlcXVlbmNlO1xuICAgICAgICAgIH0pO1xuICAgIFxuICAgIGNvbnN0IGxpbmUgPSBuZXcgTGluZShuYW1lLCBzeW1ib2xTZXF1ZW5jZXMpO1xuICAgIFxuICAgIHJldHVybiBsaW5lO1xuICB9XG59XG5cbkxpbmUuY2hvaWNlRGVsaW1pdGVyUmVnRXhwID0gL1xccytcXHxcXHMrLztcbkxpbmUubmFtZUV4cHJlc3Npb25SZWdFeHAgPSAvXlxccyooLio/KVxccys6Oj1cXHMrKC4qPylcXHMqJC87XG5MaW5lLmNvbnRpbnVlZEV4cHJlc3Npb25SZWdFeHAgPSAvXlxccyooXFx8XFxzKy4qPylcXHMqJC87XG5cbm1vZHVsZS5leHBvcnRzID0gTGluZTtcblxuZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuZnVuY3Rpb24gdGhpcmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzJdOyB9XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHNwZWNpYWxTeW1ib2xzID0gcmVxdWlyZSgnLi4vc3BlY2lhbFN5bWJvbHMnKTtcblxuY2xhc3MgU3ltYm9sU2VxdWVuY2Uge1xuICBjb25zdHJ1Y3RvcihzeW1ib2xzKSB7XG4gICAgdGhpcy5zeW1ib2xzID0gc3ltYm9scztcbiAgfVxuXG4gIG1hcFN5bWJvbHMoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5zeW1ib2xzLm1hcChjYWxsYmFjayk7XG4gIH1cbiAgXG4gIHJlZHVjZVN5bWJvbHMoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICAgIHJldHVybiB0aGlzLnN5bWJvbHMucmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUNob2ljZShjaG9pY2UpIHtcbiAgICBjb25zdCBzeW1ib2xzID0gY2hvaWNlLnNwbGl0KHN5bWJvbERlbGltaXRlclJlZ0V4cCkucmVkdWNlKGZ1bmN0aW9uKHN5bWJvbHMsIHN5bWJvbCkge1xuICAgICAgICAgICAgaWYgKCAgKHN5bWJvbCA9PT0gJycpXG4gICAgICAgICAgICAgICB8fCAoc3ltYm9sID09PSB1bmRlZmluZWQpICApIHtcbiAgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzeW1ib2xzLnB1c2goc3ltYm9sKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gc3ltYm9scztcbiAgICAgICAgICB9LCBbXSksXG4gICAgICAgICAgZXhwcmVzc2lvbiA9IG5ldyBTeW1ib2xTZXF1ZW5jZShzeW1ib2xzKTtcbiAgICBcbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxufVxuXG5jb25zdCBzeW1ib2xEZWxpbWl0ZXJSZWdFeHAgPSBuZXcgUmVnRXhwKGBcXFxccyt8KCR7c3BlY2lhbFN5bWJvbHMuRU5EX09GX0xJTkV9KD86XFxcXD98XFxcXCt8XFxcXCopKXwoJHtzcGVjaWFsU3ltYm9scy5OT19XSElURVNQQUNFfSlgKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTeW1ib2xTZXF1ZW5jZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3Qgc3BlY2lhbFN5bWJvbHMgPSB7XG4gIEVORF9PRl9MSU5FIDogJzxFTkRfT0ZfTElORT4nLFxuICBOT19XSElURVNQQUNFIDogJzxOT19XSElURVNQQUNFPicgIFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBzcGVjaWFsU3ltYm9scztcbiIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgdXRpbCB7XG4gIHN0YXRpYyBtaW5pbXVtQmFyTWludXNPbmUoKSB7XG4gICAgY29uc3QgdmFsdWVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSxcbiAgICAgICAgICBtaW5pbXVtQmFyTWludXNPbmUgPSB2YWx1ZXMucmVkdWNlKGZ1bmN0aW9uKG1pbmltdW1CYXJNaW51c09uZSwgdmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA+IC0xKSB7XG4gICAgICAgICAgICAgIG1pbmltdW1CYXJNaW51c09uZSA9IChtaW5pbXVtQmFyTWludXNPbmUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5taW4obWluaW11bUJhck1pbnVzT25lLCB2YWx1ZSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlO1xuICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgIHJldHVybiBtaW5pbXVtQmFyTWludXNPbmU7XG4gICAgICAgICAgfSwgbnVsbCk7XG5cbiAgICByZXR1cm4gbWluaW11bUJhck1pbnVzT25lO1xuICB9XG5cbiAgc3RhdGljIHNwbGljZUFycmF5KGFycmF5LCBzdGFydCwgZGVsZXRlQ291bnQsIGl0ZW1zQXJyYXkpIHtcbiAgICBjb25zdCBhcmdzID0gW3N0YXJ0LCBkZWxldGVDb3VudF0uY29uY2F0KGl0ZW1zQXJyYXkpO1xuICBcbiAgICBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmFwcGx5KGFycmF5LCBhcmdzKTtcbiAgfVxuXG4gIHN0YXRpYyBzYW5pdGlzZUNvbnRlbnQoY29udGVudCkge1xuICAgIGNvbnN0IHNhbml0aXNlZENvbnRlbnQgPSBjb250ZW50LnJlcGxhY2UoLyYvLCcmYW1wOycpLnJlcGxhY2UoLzwvLCAnJmx0OycpLnJlcGxhY2UoLz4vLCAnJmd0OycpO1xuXG4gICAgcmV0dXJuIHNhbml0aXNlZENvbnRlbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB1dGlsO1xuIl19
