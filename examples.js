(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.examples = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var grammar = '\n\n  S ::= X \'b\' | Y \n  \n  Y ::= X | \'a\'\n  \n  X ::= Y | \'c\'\n\n';

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

},{"../common/parser":47,"../primitive/parser":79,"./grammar":1,"occam-lexers":114}],3:[function(require,module,exports){
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

},{"occam-lexers":114}],31:[function(require,module,exports){
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

},{"../../../util/array":80,"../nonTerminal":31}],33:[function(require,module,exports){
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

},{"../../../util/array":80}],36:[function(require,module,exports){
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

    productions = parserUtil.eliminateCycles(productions); ///

    productions = parserUtil.eliminateLeftRecursion(productions); ///

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
      var name = productionName,
          ///
      index = this.indexOfProductionByName(name),
          production = index !== null ? this.productions[index] : null;

      return production;
    }
  }, {
    key: 'indexOfProductionByName',
    value: function indexOfProductionByName(name) {
      var index = void 0,
          foundIndex = null;

      this.productions.some(function (production, index) {
        var productionName = production.getName();

        if (productionName === name) {
          foundIndex = index;

          return true;
        } else {
          return false;
        }
      });

      index = foundIndex; ///

      return index;
    }
  }]);

  return CommonParser;
}();

module.exports = CommonParser;

function first(array) {
  return array[0];
}

},{"../util/parser":81,"./context":30}],48:[function(require,module,exports){
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

},{"../node/terminal":36,"occam-lexers":114}],49:[function(require,module,exports){
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
          production = ProductionNamePart.findProduction(this.productionName, productions);

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
    key: 'findProduction',
    value: function findProduction(productionName, productions) {
      var name = productionName; ///

      var foundProduction = null;

      productions.some(function (production) {
        var productionName = production.getName();

        if (name === productionName) {
          foundProduction = production;

          return true;
        } else {
          return false;
        }
      });

      var production = foundProduction;

      return production;
    }
  }, {
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

},{}],53:[function(require,module,exports){
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
    ProductionNamePart = require('./productionName'),
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
      var production = ProductionNamePart.findProduction(this.productionName, productions),
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

},{"./endOfLine":48,"./productionName":52,"./significantTokenType":55,"./terminalSymbol":56}],55:[function(require,module,exports){
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

},{"./node/nonTerminal":31,"./rule":65}],61:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    Production = require('../production');

var CyclicProduction = function (_Production) {
  _inherits(CyclicProduction, _Production);

  function CyclicProduction() {
    _classCallCheck(this, CyclicProduction);

    return _possibleConstructorReturn(this, (CyclicProduction.__proto__ || Object.getPrototypeOf(CyclicProduction)).apply(this, arguments));
  }

  _createClass(CyclicProduction, [{
    key: 'getRulesProductionNames',
    value: function getRulesProductionNames() {
      var rules = this.getRules(),
          rulesProductionNames = rules.map(function (rule) {
        var ruleParts = rule.getParts(),
            ruleFirstPart = first(ruleParts),
            ruleFirstProductionNamePart = ruleFirstPart,
            ///
        ruleFirstProductionNamePartProductionName = ruleFirstProductionNamePart.getProductionName(),
            ruleProductionName = ruleFirstProductionNamePartProductionName; ///

        return ruleProductionName;
      });

      return rulesProductionNames;
    }
  }], [{
    key: 'fromProduction',
    value: function fromProduction(production) {
      var cyclicProduction = null;

      var rules = rulesFromProduction(production);

      if (rules !== null) {
        var productionName = production.getName(),
            productionNode = production.getNode(),
            name = productionName,
            ///
        Node = productionNode;

        cyclicProduction = new CyclicProduction(name, rules, Node);
      }

      return cyclicProduction;
    }
  }]);

  return CyclicProduction;
}(Production);

module.exports = CyclicProduction;

function rulesFromProduction(production) {
  var rules = null;

  var productionRules = production.getRules(),
      cyclicRules = productionRules.reduce(function (cyclicRules, productionRule) {
    var productionRuleFirstProductionNamePart = productionRule.getFirstProductionNamePart();

    if (productionRuleFirstProductionNamePart !== null) {
      var cyclicPart = productionRuleFirstProductionNamePart,
          cyclicParts = [cyclicPart],
          cyclicRule = new Rule(cyclicParts);

      cyclicRules.push(cyclicRule);
    }

    return cyclicRules;
  }, []),
      cyclicRulesLength = cyclicRules.length;

  if (cyclicRulesLength > 0) {
    rules = cyclicRules;
  }

  return rules;
}

function first(array) {
  return array[0];
}

},{"../production":60,"../rule":65}],62:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    Production = require('../production');

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

},{"../production":60,"../rule":65}],63:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    Production = require('../production'),
    RightRecursiveProduction = require('./rightRecursive');

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

},{"../production":60,"../rule":65,"./rightRecursive":64}],64:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rule = require('../rule'),
    Production = require('../production'),
    EpsilonPart = require('../part/epsilon'),
    NonTerminalNode = require('../node/nonTerminal'),
    ProductionNamePart = require('../part/productionName');

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

},{"../node/nonTerminal":31,"../part/epsilon":49,"../part/productionName":52,"../production":60,"../rule":65}],65:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers');

var Parts = require('./parts'),
    ProductionNamePart = require('./part/productionName');

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
    key: 'getAllButFirstParts',
    value: function getAllButFirstParts() {
      var allButFirstParts = this.parts.slice(1);

      return allButFirstParts;
    }
  }, {
    key: 'getFirstProductionNamePart',
    value: function getFirstProductionNamePart() {
      var firstProductionNamePart = null;

      var firstPart = first(this.parts);

      if (firstPart instanceof ProductionNamePart) {
        firstProductionNamePart = firstPart; ///
      }

      return firstProductionNamePart;
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

},{"./part/productionName":52,"./parts":59,"occam-lexers":114}],66:[function(require,module,exports){
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

},{"easy":89,"easy-layout":82}],67:[function(require,module,exports){
'use strict';

module.exports = {
  BNFExample: require('./examples/bnf'),
  BasicExample: require('./examples/basic'),
  FlorenceExample: require('./examples/florence')
};

},{"./examples/basic":68,"./examples/bnf":69,"./examples/florence":70}],68:[function(require,module,exports){
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

},{"../basic/grammar":1,"../basic/parser":2,"../example":66,"easy":89,"occam-lexers":114}],69:[function(require,module,exports){
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

},{"../bnf/grammar":3,"../bnf/parser":4,"../example":66,"easy":89,"occam-lexers":114}],70:[function(require,module,exports){
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

},{"../example":66,"../florence/grammar":71,"../florence/mappings":72,"../florence/parser":73,"easy":89,"occam-lexers":114}],71:[function(require,module,exports){
'use strict';

var grammar = '\n\n\n    document                                                      ::=   header? verticalSpace? body?   \n                                              \n                                              \n                                              \n    header                                                        ::=   includeDirective+\n    \n    includeDirective                                              ::=   "include"<NO_WHITESPACE>"("<NO_WHITESPACE>[string]<NO_WHITESPACE>")" <END_OF_LINE>\n                                              \n        \n                                              \n    body                                                          ::=   part+  \n        \n    part                                                          ::=   type(s)Declaration\n    \n                                                                    |   typedConstructor(s)Declaration \n                                                        \n                                                                    |   (typed)Variable(s)Declaration\n                                                        \n                                                                    |   (qualified)Metavariable(s)Declaration\n\n                                                                    |   rule \n                                                        \n                                                                    |   axiom\n                                                         \n                                                                    |   theorem \n                                                        \n                                                                    |   lemma \n                                                        \n                                                                    |   verticalSpace \n                                                        \n                                                                    |   error\n                                                        \n                                                        \n                                                        \n    type(s)Declaration                                            ::=   typesDeclaration | typeDeclaration \n    \n    typedConstructor(s)Declaration                                ::=   typedConstructorsDeclaration | typedConstructorDeclaration \n    \n    (typed)Variable(s)Declaration                                 ::=   (typed)VariableDeclaration | (typed)VariablesDeclaration\n    \n    (qualified)Metavariable(s)Declaration                         ::=   (qualified)MetavariablesDeclaration | (qualified)MetavariableDeclaration\n\n    rule                                                          ::=   "Rule" parenthesisedLabelList? <END_OF_LINE> premise(s)? conclusion proof?\n    \n    axiom                                                         ::=   "Axiom" parenthesisedLabelList? <END_OF_LINE> premise(s)? conclusion\n    \n    theorem                                                       ::=   "Theorem" parenthesisedLabelList? <END_OF_LINE> premise(s)? conclusion proof?\n        \n    lemma                                                         ::=   "Lemma" parenthesisedLabelList? <END_OF_LINE> premise(s)? conclusion proof?\n\n\n\n    typesDeclaration                                              ::=   "Types" typeList\n    \n    typeDeclaration                                               ::=   "Type" type\n    \n    typeList                                                      ::=   type<NO_WHITESPACE>commaThenType*\n    \n    commaThenType                                                 ::=   ","<NO_WHITESPACE>type\n    \n    type                                                          ::=   typeName\n\n    typeName                                                      ::=   name\n\n    \n    \n    typedConstructorsDeclaration                                  ::=   "Constructors" typedConstructorList\n    \n    typedConstructorDeclaration                                   ::=   "Constructor" typedConstructor\n\n    typedConstructorList                                          ::=   typedConstructor<NO_WHITESPACE>commaThenTypedConstructor*\n    \n    commaThenTypedConstructor                                     ::=   ","<NO_WHITESPACE>typedConstructor\n    \n    typedConstructor                                              ::=   constructor<NO_WHITESPACE>":"<NO_WHITESPACE>type\n    \n    constructor                                                   ::=   constructorName<NO_WHITESPACE>parenthesisedTypeList?\n    \n    parenthesisedTypeList                                         ::=   "("<NO_WHITESPACE>typeList<NO_WHITESPACE>")"\n\n    constructorName                                               ::=   name\n\n\n\n    (typed)VariablesDeclaration                                   ::=   "Variables" (typed)VariableList\n    \n    (typed)VariableDeclaration                                    ::=   "Variable" (typed)Variable\n\n    (typed)VariableList                                           ::=   (typed)Variable<NO_WHITESPACE>commaThen(typed)Variable*\n    \n    commaThen(typed)Variable                                      ::=   ","<NO_WHITESPACE>(typed)Variable\n    \n    (typed)Variable                                               ::=   typedVariable | variable\n    \n    typedVariable                                                 ::=   variable<NO_WHITESPACE>":"<NO_WHITESPACE>type\n    \n    variable                                                      ::=   variableName\n    \n    variableName                                                  ::=   name\n    \n    \n    \n    (qualified)MetavariablesDeclaration                           ::=   "Metavariables" (qualified)MetavariableList\n    \n    (qualified)MetavariableDeclaration                            ::=   "Metavariable" (qualified)Metavariable\n    \n    (qualified)MetavariableList                                   ::=   (qualified)Metavariable<NO_WHITESPACE>commaThen(qualified)Metavariable+\n\n    commaThen(qualified)Metavariable                              ::=   ","<NO_WHITESPACE>(qualified)Metavariable\n\n    (qualified)Metavariable                                       ::=   qualifiedMetavariable | metavariable\n    \n    qualifiedMetavariable                                         ::=   metavariable<NO_WHITESPACE>parenthesisedTypeOrTerm\n\n    metavariable                                                  ::=   metavariableName\n\n    parenthesisedTypeOrTerm                                       ::=   "("<NO_WHITESPACE>typeOrTerm<NO_WHITESPACE>")"\n    \n    typeOrTerm                                                    ::=   type | term\n    \n    metavariableName                                              ::=   name\n    \n    \n\n    parenthesisedLabelList                                        ::=   "("<NO_WHITESPACE>labelList<NO_WHITESPACE>")"\n    \n    labelList                                                     ::=   label<NO_WHITESPACE>commaThenLabel*\n    \n    commaThenLabel                                                ::=   ","<NO_WHITESPACE>label\n    \n    label                                                         ::=   labelName<NO_WHITESPACE>parenthesisedTermList?\n    \n    labelName                                                     ::=   name\n\n    \n    \n    premise(s)                                                    ::=   premise | premises\n    \n    premise                                                       ::=   "Premise" <END_OF_LINE> unjustifiedStatementOrUnknown\n    \n    premises                                                      ::=   "Premises" <END_OF_LINE> unjustifiedStatementOrUnknown unjustifiedStatementOrUnknown+\n    \n    conclusion                                                    ::=   "Conclusion" <END_OF_LINE> (un)justifiedStatementOrUnknown\n    \n\n\n    proof                                                         ::=   "Proof" <END_OF_LINE> (abridged)ProofDerivation\n    \n    (abridged)ProofDerivation                                     ::=   proofDerivation | abridgedProofDerivation\n    \n    abridgedProofDerivation                                       ::=   (un)justifiedStatementOrUnknown\n    \n    proofDerivation                                               ::=   derivation therefore\n    \n    derivation                                                    ::=   subDerivation+    \n    \n    therefore                                                     ::=   "Therefore" <END_OF_LINE> (un)justifiedStatementOrUnknown\n    \n    subDerivation                                                 ::=   subLemma | (un)justifiedStatementOrUnknown\n    \n    \n    \n    subLemma                                                      ::=   suppose then? hence unjustifiedStatementOrUnknown? verticalSpace?    \n    \n    suppose                                                       ::=   "Suppose" <END_OF_LINE> unjustifiedStatementOrUnknown+\n    \n    then                                                          ::=   "Then" <END_OF_LINE> derivation\n    \n    hence                                                         ::=   "Hence" <END_OF_LINE> (un)justifiedStatementOrUnknown\n    \n    \n    \n    (un)justifiedStatementOrUnknown                               ::=   justifiedStatement | unjustifiedStatement | unknown\n    \n    unjustifiedStatementOrUnknown                                 ::=   unjustifiedStatement | unknown\n    \n    unjustifiedStatement                                          ::=   statement <END_OF_LINE>\n    \n    justifiedStatement                                            ::=   statement justification <END_OF_LINE>\n      \n    justification                                                 ::=   byOrFrom reference\n     \n    byOrFrom                                                      ::=   "by" | "from"\n     \n    reference                                                     ::=   referenceName<NO_WHITESPACE>parenthesisedTermList?\n\n    referenceName                                                 ::=   name\n\n    \n\n    statement                                                     ::=   proofAssertion | typeAssertion | equality | expression     \n    \n    \n    \n    proofAssertion                                                ::=   (qualified)Metavariable "::" (qualified)Metavariable\n\n    typeAssertion                                                 ::=   expression ":" type\n    \n    equality                                                      ::=   expression "=" expression    \n    \n    expression                                                    ::=   term | (qualified)Metavariable\n    \n    \n\n    term                                                          ::=   compoundTerm | variableName\n    \n    compoundTerm                                                  ::=   constructorName<NO_WHITESPACE>parenthesisedTermList?\n    \n    \n\n    parenthesisedTermList                                         ::=   "("<NO_WHITESPACE>termList<NO_WHITESPACE>")"\n\n    termList                                                      ::=   term<NO_WHITESPACE>commaThenTerm*\n    \n    commaThenTerm                                                 ::=   ","<NO_WHITESPACE>term\n    \n\n\n    name                                                          ::=   /\\w+/\n    \n    \n\n    unknown                                                       ::=   specialUnassignedOrMinorKeywords+ <END_OF_LINE>\n\n    specialUnassignedOrMinorKeywords                              ::=   [special] | [unassigned] | "by" | "from"\n\n\n\n    verticalSpace                                                 ::=   <END_OF_LINE>+\n    \n    \n    \n    error                                                         ::=   *\n    \n';

module.exports = grammar;

},{}],72:[function(require,module,exports){
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

},{"../common/node/nonTerminal/discardSecondChild":32,"../common/node/nonTerminal/transparent":34,"../common/node/nonTerminal/transparentThenKeepSecond":35}],73:[function(require,module,exports){
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

},{"../common/parser":47,"../primitive/parser":79,"./grammar":71,"./mappings":72,"occam-lexers":114}],74:[function(require,module,exports){
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
  }]);

  return Graph;
}();

module.exports = Graph;

},{"./graph/component":75,"./graph/cycle":76,"./graph/stack":77,"./graph/vertex":78}],75:[function(require,module,exports){
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
    key: 'isCyclic',
    value: function isCyclic() {
      var verticesLength = this.vertices.length,
          cyclic = verticesLength > 1; ///

      return cyclic;
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

},{}],76:[function(require,module,exports){
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

},{}],77:[function(require,module,exports){
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

},{}],78:[function(require,module,exports){
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

},{}],79:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Production = require('../common/production'),
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

      return productions;
    }
  }]);

  return PrimitiveParser;
}();

module.exports = PrimitiveParser;

},{"../common/node/nonTerminal/error":33,"../common/production":60}],80:[function(require,module,exports){
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

},{}],81:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Graph = require('../graph'),
    CyclicProduction = require('../common/production/cyclic'),
    RightRecursiveProduction = require('../common/production/rightRecursive'),
    NonLeftRecursiveProduction = require('../common/production/nonLeftRecursive'),
    NonImplicitlyLeftRecursiveProduction = require('../common/production/nonImplicitlyLeftRecursive');

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
    key: 'eliminateCycles',
    value: function eliminateCycles(productions) {
      var cyclicProductions = cyclicProductionsFromProductions(productions),
          graph = graphFromCyclicProductions(cyclicProductions),
          cycles = graph.getCycles();

      return productions;
    }
  }, {
    key: 'eliminateLeftRecursion',
    value: function eliminateLeftRecursion(productions) {
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

  return parserUtil;
}();

module.exports = parserUtil;

function cyclicProductionsFromProductions(productions) {
  var cyclicProductions = productions.reduce(function (cyclicProductions, production) {
    var cyclicProduction = CyclicProduction.fromProduction(production);

    if (cyclicProduction !== null) {
      cyclicProductions.push(cyclicProduction);
    }

    return cyclicProductions;
  }, []);

  return cyclicProductions;
}

function graphFromCyclicProductions(cyclicProductions) {
  var graph = new Graph();

  cyclicProductions.forEach(function (cyclicProduction) {
    var cyclicProductionName = cyclicProduction.getName(),
        cyclicProductionRulesProductionNames = cyclicProduction.getRulesProductionNames(),
        vertexName = cyclicProductionName,
        ///
    descendantVertexNames = cyclicProductionRulesProductionNames; ///

    graph.addVertex(vertexName, descendantVertexNames);
  });

  return graph;
}

},{"../common/production/cyclic":61,"../common/production/nonImplicitlyLeftRecursive":62,"../common/production/nonLeftRecursive":63,"../common/production/rightRecursive":64,"../graph":74}],82:[function(require,module,exports){
'use strict';

module.exports = {
  options: require('./lib/options'),
  SizeableElement: require('./lib/sizeableElement'),
  VerticalSplitter: require('./lib/splitter/vertical'),
  HorizontalSplitter: require('./lib/splitter/horizontal')
};

},{"./lib/options":84,"./lib/sizeableElement":85,"./lib/splitter/horizontal":87,"./lib/splitter/vertical":88}],83:[function(require,module,exports){
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

},{"easy":89}],84:[function(require,module,exports){
'use strict';

var options = {
        ESCAPE_KEY_STOPS_DRAGGING: 'ESCAPE_KEY_STOPS_DRAGGING'
};

module.exports = options;

},{}],85:[function(require,module,exports){
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

},{"easy":89}],86:[function(require,module,exports){
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

},{"./options":84,"easy":89}],87:[function(require,module,exports){
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

},{"../cursor":83,"../splitter":86}],88:[function(require,module,exports){
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

},{"../cursor":83,"../splitter":86}],89:[function(require,module,exports){
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

},{"./lib/document":90,"./lib/element":91,"./lib/element/body":92,"./lib/element/button":93,"./lib/element/checkbox":94,"./lib/element/div":95,"./lib/element/link":96,"./lib/element/select":97,"./lib/element/span":98,"./lib/inputElement":99,"./lib/inputElement/input":100,"./lib/inputElement/textarea":101,"./lib/misc/bounds":102,"./lib/misc/offset":103,"./lib/react":111,"./lib/textElement":112,"./lib/window":113}],90:[function(require,module,exports){
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

},{"./mixin/click":104,"./mixin/event":105,"./mixin/key":107,"./mixin/mouse":108}],91:[function(require,module,exports){
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

},{"./misc/bounds":102,"./misc/offset":103,"./mixin/click":104,"./mixin/event":105,"./mixin/jsx":106,"./mixin/key":107,"./mixin/mouse":108,"./mixin/resize":109,"./mixin/scroll":110}],92:[function(require,module,exports){
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

},{"../element":91}],93:[function(require,module,exports){
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

},{"../element":91}],94:[function(require,module,exports){
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

},{"../element":91}],95:[function(require,module,exports){
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

},{"../element":91}],96:[function(require,module,exports){
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

},{"../element":91}],97:[function(require,module,exports){
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

},{"../element":91}],98:[function(require,module,exports){
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

},{"../element":91}],99:[function(require,module,exports){
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

},{"./element":91}],100:[function(require,module,exports){
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

},{"../inputElement":99}],101:[function(require,module,exports){
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

},{"../inputElement":99}],102:[function(require,module,exports){
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

},{}],103:[function(require,module,exports){
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

},{}],104:[function(require,module,exports){
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

},{}],105:[function(require,module,exports){
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

},{}],106:[function(require,module,exports){
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

},{"../textElement":112}],107:[function(require,module,exports){
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

},{}],108:[function(require,module,exports){
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

},{}],109:[function(require,module,exports){
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

},{}],110:[function(require,module,exports){
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

},{}],111:[function(require,module,exports){
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

},{"./element":91,"./textElement":112}],112:[function(require,module,exports){
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

},{"./misc/bounds":102,"./misc/offset":103}],113:[function(require,module,exports){
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

},{"./mixin/click":104,"./mixin/event":105,"./mixin/key":107,"./mixin/mouse":108}],114:[function(require,module,exports){
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

},{"./lib/basic/lexer":115,"./lib/bnf/lexer":119,"./lib/common/line":124,"./lib/common/token/nonSignificant":127,"./lib/common/token/significant":132,"./lib/common/token/significant/endOfLine":133,"./lib/common/token/significant/string":134,"./lib/common/token/significant/whitespace":135,"./lib/florence/lexer":141,"./lib/primitive/lexer":143,"./lib/specialSymbols":146}],115:[function(require,module,exports){
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

},{"../common/lexer":123,"../common/rules":126,"../common/token/significant/whitespace":135,"./line":116}],116:[function(require,module,exports){
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

},{"../common/line":124,"../common/tokens/whitespace":140,"./tokens/comment":117,"./tokens/string":118}],117:[function(require,module,exports){
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

},{}],118:[function(require,module,exports){
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

},{}],119:[function(require,module,exports){
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

},{"../common/lexer":123,"../common/rules":126,"../common/token/significant/string":134,"../common/token/significant/whitespace":135,"./line":120}],120:[function(require,module,exports){
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

},{"../common/line":124,"../common/token/significant/endOfLine":133,"../common/tokens/string":139,"../common/tokens/whitespace":140,"./tokens/comment":121}],121:[function(require,module,exports){
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

},{}],122:[function(require,module,exports){
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

},{}],123:[function(require,module,exports){
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

},{"./context":122,"./line":124,"./rules":126}],124:[function(require,module,exports){
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

},{"../util":147,"./tokens/significant":138}],125:[function(require,module,exports){
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

},{"../common/token/significant":132}],126:[function(require,module,exports){
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

},{"../util":147,"./rule":125}],127:[function(require,module,exports){
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

},{"../../util":147}],128:[function(require,module,exports){
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

},{"../../../util":147,"../nonSignificant":127}],129:[function(require,module,exports){
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

},{"../comment":128}],130:[function(require,module,exports){
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

},{"../comment":128}],131:[function(require,module,exports){
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

},{"../comment":128}],132:[function(require,module,exports){
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

},{"../../util":147}],133:[function(require,module,exports){
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

},{"../significant":132}],134:[function(require,module,exports){
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

},{"../significant":132}],135:[function(require,module,exports){
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

},{"../significant":132}],136:[function(require,module,exports){
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

},{"../util":147}],137:[function(require,module,exports){
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

},{"../../util":147,"../token/nonSignificant/comment/endOf":129,"../token/nonSignificant/comment/middleOf":130,"../token/nonSignificant/comment/startOf":131}],138:[function(require,module,exports){
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

},{}],139:[function(require,module,exports){
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

},{"../token/significant/string":134,"../tokens":136}],140:[function(require,module,exports){
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

},{"../token/significant/whitespace":135,"../tokens":136}],141:[function(require,module,exports){
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

},{"../common/context":122,"../common/lexer":123,"../common/token/significant/endOfLine":133,"../common/token/significant/string":134,"../common/token/significant/whitespace":135,"./line":142}],142:[function(require,module,exports){
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

},{"../common/line":124,"../common/token/significant/endOfLine":133,"../common/tokens/comment":137,"../common/tokens/string":139,"../common/tokens/whitespace":140}],143:[function(require,module,exports){
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

},{"./line":144}],144:[function(require,module,exports){
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

},{"./symbolSequence":145}],145:[function(require,module,exports){
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

},{"../specialSymbols":146}],146:[function(require,module,exports){
'use strict';

var specialSymbols = {
  END_OF_LINE: '<END_OF_LINE>',
  NO_WHITESPACE: '<NO_WHITESPACE>'
};

module.exports = specialSymbols;

},{}],147:[function(require,module,exports){
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

},{}]},{},[67])(67)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczYvYmFzaWMvZ3JhbW1hci5qcyIsImVzNi9iYXNpYy9wYXJzZXIuanMiLCJlczYvYm5mL2dyYW1tYXIuanMiLCJlczYvYm5mL3BhcnNlci5qcyIsImVzNi9ibmYvcHJvZHVjdGlvbi5qcyIsImVzNi9ibmYvcHJvZHVjdGlvbi9lbmRPZkxpbmUuanMiLCJlczYvYm5mL3Byb2R1Y3Rpb24vZ3JvdXAuanMiLCJlczYvYm5mL3Byb2R1Y3Rpb24vbm9XaGl0ZXNwYWNlLmpzIiwiZXM2L2JuZi9wcm9kdWN0aW9uL29wdGlvbmFsUGFydC5qcyIsImVzNi9ibmYvcHJvZHVjdGlvbi9wYXJ0LmpzIiwiZXM2L2JuZi9wcm9kdWN0aW9uL3Byb2R1Y3Rpb24uanMiLCJlczYvYm5mL3Byb2R1Y3Rpb24vcHJvZHVjdGlvbk5hbWUuanMiLCJlczYvYm5mL3Byb2R1Y3Rpb24vcHJvZHVjdGlvbnMuanMiLCJlczYvYm5mL3Byb2R1Y3Rpb24vcmVndWxhckV4cHJlc3Npb24uanMiLCJlczYvYm5mL3Byb2R1Y3Rpb24vcnVsZS5qcyIsImVzNi9ibmYvcHJvZHVjdGlvbi9ydWxlcy5qcyIsImVzNi9ibmYvcHJvZHVjdGlvbi9zaWduaWZpY2FudFRva2VuVHlwZS5qcyIsImVzNi9ibmYvcHJvZHVjdGlvbi90ZXJtaW5hbFN5bWJvbC5qcyIsImVzNi9ibmYvcnVsZS5qcyIsImVzNi9ibmYvcnVsZS9lbmRPZkxpbmUuanMiLCJlczYvYm5mL3J1bGUvZ3JvdXAuanMiLCJlczYvYm5mL3J1bGUvbm9XaGl0ZXNwYWNlLmpzIiwiZXM2L2JuZi9ydWxlL29wdGlvbmFsUGFydC5qcyIsImVzNi9ibmYvcnVsZS9wcm9kdWN0aW9uLmpzIiwiZXM2L2JuZi9ydWxlL3Byb2R1Y3Rpb25OYW1lLmpzIiwiZXM2L2JuZi9ydWxlL3Byb2R1Y3Rpb25zLmpzIiwiZXM2L2JuZi9ydWxlL3J1bGUuanMiLCJlczYvYm5mL3J1bGUvcnVsZXMuanMiLCJlczYvYm5mL3J1bGUvc2lnbmlmaWNhbnRUb2tlblR5cGUuanMiLCJlczYvY29tbW9uL2NvbnRleHQuanMiLCJlczYvY29tbW9uL25vZGUvbm9uVGVybWluYWwuanMiLCJlczYvY29tbW9uL25vZGUvbm9uVGVybWluYWwvZGlzY2FyZFNlY29uZENoaWxkLmpzIiwiZXM2L2NvbW1vbi9ub2RlL25vblRlcm1pbmFsL2Vycm9yLmpzIiwiZXM2L2NvbW1vbi9ub2RlL25vblRlcm1pbmFsL3RyYW5zcGFyZW50LmpzIiwiZXM2L2NvbW1vbi9ub2RlL25vblRlcm1pbmFsL3RyYW5zcGFyZW50VGhlbktlZXBTZWNvbmQuanMiLCJlczYvY29tbW9uL25vZGUvdGVybWluYWwuanMiLCJlczYvY29tbW9uL25vZGUvdGVybWluYWwvZXBzaWxvbi5qcyIsImVzNi9jb21tb24vcGFyc2VUcmVlLmpzIiwiZXM2L2NvbW1vbi9wYXJzZVRyZWUvY2hpbGROb2Rlcy5qcyIsImVzNi9jb21tb24vcGFyc2VUcmVlL2VtcHR5LmpzIiwiZXM2L2NvbW1vbi9wYXJzZVRyZWUvaG9yaXpvbnRhbEJyYW5jaC5qcyIsImVzNi9jb21tb24vcGFyc2VUcmVlL25vblRlcm1pbmFsTm9kZS5qcyIsImVzNi9jb21tb24vcGFyc2VUcmVlL3Byb2R1Y3Rpb25OYW1lLmpzIiwiZXM2L2NvbW1vbi9wYXJzZVRyZWUvdGVybWluYWxOb2RlLmpzIiwiZXM2L2NvbW1vbi9wYXJzZVRyZWUvdGVybWluYWxOb2RlL2Vwc2lsb24uanMiLCJlczYvY29tbW9uL3BhcnNlVHJlZS92ZXJ0aWNhbEJyYW5jaC5qcyIsImVzNi9jb21tb24vcGFyc2VyLmpzIiwiZXM2L2NvbW1vbi9wYXJ0L2VuZE9mTGluZS5qcyIsImVzNi9jb21tb24vcGFydC9lcHNpbG9uLmpzIiwiZXM2L2NvbW1vbi9wYXJ0L29uZU9yTW9yZVBhcnRzLmpzIiwiZXM2L2NvbW1vbi9wYXJ0L29wdGlvbmFsUGFydC5qcyIsImVzNi9jb21tb24vcGFydC9wcm9kdWN0aW9uTmFtZS5qcyIsImVzNi9jb21tb24vcGFydC9yZWd1bGFyRXhwcmVzc2lvbi5qcyIsImVzNi9jb21tb24vcGFydC9zZXF1ZW5jZU9mUGFydHMuanMiLCJlczYvY29tbW9uL3BhcnQvc2lnbmlmaWNhbnRUb2tlblR5cGUuanMiLCJlczYvY29tbW9uL3BhcnQvdGVybWluYWxTeW1ib2wuanMiLCJlczYvY29tbW9uL3BhcnQvd2lsZGNhcmQuanMiLCJlczYvY29tbW9uL3BhcnQvemVyb09yTW9yZVBhcnRzLmpzIiwiZXM2L2NvbW1vbi9wYXJ0cy5qcyIsImVzNi9jb21tb24vcHJvZHVjdGlvbi5qcyIsImVzNi9jb21tb24vcHJvZHVjdGlvbi9jeWNsaWMuanMiLCJlczYvY29tbW9uL3Byb2R1Y3Rpb24vbm9uSW1wbGljaXRseUxlZnRSZWN1cnNpdmUuanMiLCJlczYvY29tbW9uL3Byb2R1Y3Rpb24vbm9uTGVmdFJlY3Vyc2l2ZS5qcyIsImVzNi9jb21tb24vcHJvZHVjdGlvbi9yaWdodFJlY3Vyc2l2ZS5qcyIsImVzNi9jb21tb24vcnVsZS5qcyIsImVzNi9leGFtcGxlLmpzIiwiZXM2L2V4YW1wbGVzLmpzIiwiZXM2L2V4YW1wbGVzL2Jhc2ljLmpzIiwiZXM2L2V4YW1wbGVzL2JuZi5qcyIsImVzNi9leGFtcGxlcy9mbG9yZW5jZS5qcyIsImVzNi9mbG9yZW5jZS9ncmFtbWFyLmpzIiwiZXM2L2Zsb3JlbmNlL21hcHBpbmdzLmpzIiwiZXM2L2Zsb3JlbmNlL3BhcnNlci5qcyIsImVzNi9ncmFwaC5qcyIsImVzNi9ncmFwaC9jb21wb25lbnQuanMiLCJlczYvZ3JhcGgvY3ljbGUuanMiLCJlczYvZ3JhcGgvc3RhY2suanMiLCJlczYvZ3JhcGgvdmVydGV4LmpzIiwiZXM2L3ByaW1pdGl2ZS9wYXJzZXIuanMiLCJlczYvdXRpbC9hcnJheS5qcyIsImVzNi91dGlsL3BhcnNlci5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5LWxheW91dC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5LWxheW91dC9lczYvY3Vyc29yLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3ktbGF5b3V0L2VzNi9vcHRpb25zLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3ktbGF5b3V0L2VzNi9zaXplYWJsZUVsZW1lbnQuanMiLCJub2RlX21vZHVsZXMvZWFzeS1sYXlvdXQvZXM2L3NwbGl0dGVyLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3ktbGF5b3V0L2VzNi9zcGxpdHRlci9ob3Jpem9udGFsLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3ktbGF5b3V0L2VzNi9zcGxpdHRlci92ZXJ0aWNhbC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L2RvY3VtZW50LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L2VsZW1lbnQuanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvZWxlbWVudC9ib2R5LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L2VsZW1lbnQvYnV0dG9uLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L2VsZW1lbnQvY2hlY2tib3guanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvZWxlbWVudC9kaXYuanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvZWxlbWVudC9saW5rLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L2VsZW1lbnQvc2VsZWN0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L2VsZW1lbnQvc3Bhbi5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi9pbnB1dEVsZW1lbnQuanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvaW5wdXRFbGVtZW50L2lucHV0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L2lucHV0RWxlbWVudC90ZXh0YXJlYS5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi9taXNjL2JvdW5kcy5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi9taXNjL29mZnNldC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi9taXhpbi9jbGljay5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi9taXhpbi9ldmVudC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi9taXhpbi9qc3guanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvbWl4aW4va2V5LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L21peGluL21vdXNlLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L21peGluL3Jlc2l6ZS5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi9taXhpbi9zY3JvbGwuanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvcmVhY3QuanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvdGV4dEVsZW1lbnQuanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvd2luZG93LmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9vY2NhbS1sZXhlcnMvZXM2L2Jhc2ljL2xleGVyLmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvYmFzaWMvbGluZS5qcyIsIm5vZGVfbW9kdWxlcy9vY2NhbS1sZXhlcnMvZXM2L2Jhc2ljL3Rva2Vucy9jb21tZW50LmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvYmFzaWMvdG9rZW5zL3N0cmluZy5qcyIsIm5vZGVfbW9kdWxlcy9vY2NhbS1sZXhlcnMvZXM2L2JuZi9sZXhlci5qcyIsIm5vZGVfbW9kdWxlcy9vY2NhbS1sZXhlcnMvZXM2L2JuZi9saW5lLmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvYm5mL3Rva2Vucy9jb21tZW50LmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvY29tbW9uL2NvbnRleHQuanMiLCJub2RlX21vZHVsZXMvb2NjYW0tbGV4ZXJzL2VzNi9jb21tb24vbGV4ZXIuanMiLCJub2RlX21vZHVsZXMvb2NjYW0tbGV4ZXJzL2VzNi9jb21tb24vbGluZS5qcyIsIm5vZGVfbW9kdWxlcy9vY2NhbS1sZXhlcnMvZXM2L2NvbW1vbi9ydWxlLmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvY29tbW9uL3J1bGVzLmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50LmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQuanMiLCJub2RlX21vZHVsZXMvb2NjYW0tbGV4ZXJzL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9lbmRPZi5qcyIsIm5vZGVfbW9kdWxlcy9vY2NhbS1sZXhlcnMvZXM2L2NvbW1vbi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50L21pZGRsZU9mLmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvc3RhcnRPZi5qcyIsIm5vZGVfbW9kdWxlcy9vY2NhbS1sZXhlcnMvZXM2L2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC5qcyIsIm5vZGVfbW9kdWxlcy9vY2NhbS1sZXhlcnMvZXM2L2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9lbmRPZkxpbmUuanMiLCJub2RlX21vZHVsZXMvb2NjYW0tbGV4ZXJzL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvc3RyaW5nLmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L3doaXRlc3BhY2UuanMiLCJub2RlX21vZHVsZXMvb2NjYW0tbGV4ZXJzL2VzNi9jb21tb24vdG9rZW5zLmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvY29tbW9uL3Rva2Vucy9jb21tZW50LmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvY29tbW9uL3Rva2Vucy9zaWduaWZpY2FudC5qcyIsIm5vZGVfbW9kdWxlcy9vY2NhbS1sZXhlcnMvZXM2L2NvbW1vbi90b2tlbnMvc3RyaW5nLmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvY29tbW9uL3Rva2Vucy93aGl0ZXNwYWNlLmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvZmxvcmVuY2UvbGV4ZXIuanMiLCJub2RlX21vZHVsZXMvb2NjYW0tbGV4ZXJzL2VzNi9mbG9yZW5jZS9saW5lLmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvcHJpbWl0aXZlL2xleGVyLmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvcHJpbWl0aXZlL2xpbmUuanMiLCJub2RlX21vZHVsZXMvb2NjYW0tbGV4ZXJzL2VzNi9wcmltaXRpdmUvc3ltYm9sU2VxdWVuY2UuanMiLCJub2RlX21vZHVsZXMvb2NjYW0tbGV4ZXJzL2VzNi9zcGVjaWFsU3ltYm9scy5qcyIsIm5vZGVfbW9kdWxlcy9vY2NhbS1sZXhlcnMvZXM2L3V0aWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUFFQSxJQUFNLHNGQUFOOztBQVVBLE9BQU8sT0FBUCxHQUFpQixPQUFqQjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7Ozs7Ozs7Ozs7QUFFQSxJQUFNLFNBQVMsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTSxVQUFVLFFBQVEsV0FBUixDQUFoQjtBQUFBLElBQ00sZUFBZSxRQUFRLGtCQUFSLENBRHJCO0FBQUEsSUFFTSxrQkFBa0IsUUFBUSxxQkFBUixDQUZ4Qjs7SUFJUSxjLEdBQStCLE0sQ0FBL0IsYztJQUFnQixVLEdBQWUsTSxDQUFmLFU7O0lBRWxCLFc7Ozs7Ozs7Ozs7O2tDQUNpQjtBQUNuQixVQUFNLGNBQWMsWUFBWSxXQUFaLENBQXdCLE9BQXhCLENBQXBCOztBQUVBLGFBQU8sV0FBUDtBQUNEOzs7Z0NBRWtCLE8sRUFBUztBQUMxQixVQUFNLFFBQVEsZUFBZSxnQkFBZixDQUFnQyxPQUFoQyxDQUFkO0FBQUEsVUFDTSx3QkFBd0IsV0FBVyxxQkFBWCxF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WTtBQUN4RCxVQUFNLE9BQU8sQ0FBQyxLQUFELEVBQVEsV0FBUixFQUFxQixNQUFyQixDQUE0QixVQUE1QixDQUFiOztBQUVBLFlBQU0sU0FBTixDQUFnQixNQUFoQixDQUF1QixLQUF2QixDQUE2QixLQUE3QixFQUFvQyxJQUFwQztBQUNEOzs7b0NBRXNCLE8sRUFBUztBQUM5QixVQUFNLG1CQUFtQixRQUFRLE9BQVIsQ0FBZ0IsR0FBaEIsRUFBb0IsT0FBcEIsRUFBNkIsT0FBN0IsQ0FBcUMsR0FBckMsRUFBMEMsTUFBMUMsRUFBa0QsT0FBbEQsQ0FBMEQsR0FBMUQsRUFBK0QsTUFBL0QsQ0FBekI7O0FBRUEsYUFBTyxnQkFBUDtBQUNEOzs7Ozs7QUFHSCxPQUFPLE9BQVAsR0FBaUIsSUFBakIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBncmFtbWFyID0gYFxuXG4gIFMgOjo9IFggJ2InIHwgWSBcbiAgXG4gIFkgOjo9IFggfCAnYSdcbiAgXG4gIFggOjo9IFkgfCAnYydcblxuYDtcblxubW9kdWxlLmV4cG9ydHMgPSBncmFtbWFyO1xuXG4vKlxuXG5cbiBBMSA6Oj0gQTIgJ2EnIHwgJ2InXG5cbiBBMiA6Oj0gQTEgJ2MnIHwgJ2QnXG5cbiBleHByZXNzaW9uICAgICAgICAgICAgICAgOjo9ICBleHByZXNzaW9uICcrJyB0ZXJtIHwgdGVybVxuXG4gdGVybSAgICAgICAgICAgICAgICAgICAgIDo6PSAgbmF0dXJhbE51bWJlclxuXG4gbmF0dXJhbE51bWJlciAgICAgICAgICAgIDo6PSAgL1xcXFxkKy9cblxuXG5cblxuXG5cbiBleHByZXNzaW9uICAgICAgICAgICAgICAgOjo9ICB0ZXJtIG9wZXJhdG9yVGhlblRlcm0qXG4gIFxuICBvcGVyYXRvclRoZW5UZXJtICAgICAgICAgOjo9ICBvcGVyYXRvciB0ZXJtXG4gIFxuICBvcGVyYXRvciAgICAgICAgICAgICAgICAgOjo9ICAnKycgfCAnLScgfCAnKicgfCAnLydcbiAgXG4gIHRlcm0gICAgICAgICAgICAgICAgICAgICA6Oj0gIG5hdHVyYWxOdW1iZXIgfCBwYXJlbnRoZXNpemVkRXhwcmVzc2lvblxuICBcbiAgbmF0dXJhbE51bWJlciAgICAgICAgICAgIDo6PSAgL1xcXFxkKy9cbiAgXG4gIHBhcmVudGhlc2l6ZWRFeHByZXNzaW9uICA6Oj0gICcoJyBleHByZXNzaW9uICcpJ1xuXG4qL1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgZ3JhbW1hciA9IHJlcXVpcmUoJy4vZ3JhbW1hcicpLFxuICAgICAgQ29tbW9uUGFyc2VyID0gcmVxdWlyZSgnLi4vY29tbW9uL3BhcnNlcicpLFxuICAgICAgUHJpbWl0aXZlUGFyc2VyID0gcmVxdWlyZSgnLi4vcHJpbWl0aXZlL3BhcnNlcicpO1xuXG5jb25zdCB7IFByaW1pdGl2ZUxleGVyLCBCYXNpY0xleGVyIH0gPSBsZXhlcnM7XG5cbmNsYXNzIEJhc2ljUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGJhc2ljUGFyc2VyID0gQmFzaWNQYXJzZXIuZnJvbUdyYW1tYXIoZ3JhbW1hcik7XG4gICAgXG4gICAgcmV0dXJuIGJhc2ljUGFyc2VyO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUdyYW1tYXIoZ3JhbW1hcikge1xuICAgIGNvbnN0IGxpbmVzID0gUHJpbWl0aXZlTGV4ZXIubGluZXNGcm9tR3JhbW1hcihncmFtbWFyKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZXMgPSBCYXNpY0xleGVyLnNpZ25pZmljYW50VG9rZW5UeXBlcygpLFxuICAgICAgICAgIG1hcHBpbmdzID0ge30sXG4gICAgICAgICAgcHJvZHVjdGlvbnMgPSBQcmltaXRpdmVQYXJzZXIucGFyc2UobGluZXMsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbWFwcGluZ3MpLFxuICAgICAgICAgIGJhc2ljUGFyc2VyID0gbmV3IEJhc2ljUGFyc2VyKHByb2R1Y3Rpb25zKTtcblxuICAgIHJldHVybiBiYXNpY1BhcnNlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2ljUGFyc2VyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBncmFtbWFyID0gYFxuXG4gIHByb2R1Y3Rpb25zICAgICAgICAgICA6Oj0gIHByb2R1Y3Rpb24rXG4gIFxuICBwcm9kdWN0aW9uICAgICAgICAgICAgOjo9ICBwcm9kdWN0aW9uTmFtZSBcIjo6PVwiIHJ1bGVzIFtlbmRPZkxpbmVdXG4gIFxuICBydWxlcyAgICAgICAgICAgICAgICAgOjo9ICBydWxlXG4gIFxuICBydWxlICAgICAgICAgICAgICAgICAgOjo9ICBwYXJ0K1xuICBcbiAgcGFydCAgICAgICAgICAgICAgICAgIDo6PSAgZ3JvdXAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBvcHRpb25hbFBhcnQgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBwcm9kdWN0aW9uTmFtZSAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHJlZ3VsYXJFeHByZXNzaW9uIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBzaWduaWZpY2FudFRva2VuVHlwZSBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB0ZXJtaW5hbFN5bWJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHwgIG5vV2hpdGVzcGFjZSBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgZW5kT2ZMaW5lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgZ3JvdXAgICAgICAgICAgICAgICAgIDo6PSAgXCIoXCIgcnVsZXMgXCIpXCJcbiAgXG4gIG9wdGlvbmFsUGFydCAgICAgICAgICA6Oj0gIHBhcnQ8Tk9fV0hJVEVTUEFDRT5cIj9cIlxuXG4gIHByb2R1Y3Rpb25OYW1lICAgICAgICA6Oj0gIFtuYW1lXVxuXG4gIHJlZ3VsYXJFeHByZXNzaW9uICAgICA6Oj0gIFtyZWd1bGFyRXhwcmVzc2lvbl1cbiAgXG4gIHNpZ25pZmljYW50VG9rZW5UeXBlICA6Oj0gIFt0eXBlXVxuXG4gIHRlcm1pbmFsU3ltYm9sICAgICAgICA6Oj0gIFtzdHJpbmddXG4gIFxuICBub1doaXRlc3BhY2UgICAgICAgICAgOjo9ICBcIjxOT19XSElURVNQQUNFPlwiXG4gIFxuICBlbmRPZkxpbmUgICAgICAgICAgICAgOjo9ICBcIjxFTkRfT0ZfTElORT5cIlxuXG5gO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdyYW1tYXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENvbW1vblBhcnNlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9wYXJzZXInKSxcbiAgICAgIFBhcnRQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3BhcnQnKSxcbiAgICAgIFJ1bGVQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3J1bGUnKSxcbiAgICAgIFJ1bGVzUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9ydWxlcycpLFxuICAgICAgR3JvdXBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL2dyb3VwJyksXG4gICAgICBFbmRPZkxpbmVQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL2VuZE9mTGluZScpLFxuICAgICAgUHJvZHVjdGlvblByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vcHJvZHVjdGlvbicpLFxuICAgICAgUHJvZHVjdGlvbnNQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3Byb2R1Y3Rpb25zJyksXG4gICAgICBPcHRpb25hbFBhcnRQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL29wdGlvbmFsUGFydCcpLFxuICAgICAgTm9XaGl0ZXNwYWNlUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9ub1doaXRlc3BhY2UnKSxcbiAgICAgIFByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9wcm9kdWN0aW9uTmFtZScpLFxuICAgICAgVGVybWluYWxTeW1ib2xQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9wcm9kdWN0aW9uL3Rlcm1pbmFsU3ltYm9sJyksXG4gICAgICBSZWd1bGFyRXhwcmVzc2lvblByb2R1Y3Rpb24gPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb24vcmVndWxhckV4cHJlc3Npb24nKSxcbiAgICAgIFNpZ25pZmljYW50VG9rZW5UeXBlUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbi9zaWduaWZpY2FudFRva2VuVHlwZScpO1xuXG5jbGFzcyBCTkZQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgcGFydFByb2R1Y3Rpb24gPSBuZXcgUGFydFByb2R1Y3Rpb24oKSxcbiAgICAgICAgICBydWxlUHJvZHVjdGlvbiA9IG5ldyBSdWxlUHJvZHVjdGlvbigpLFxuICAgICAgICAgIHJ1bGVzUHJvZHVjdGlvbiA9IG5ldyBSdWxlc1Byb2R1Y3Rpb24oKSxcbiAgICAgICAgICBncm91cFByb2R1Y3Rpb24gPSBuZXcgR3JvdXBQcm9kdWN0aW9uKCksXG4gICAgICAgICAgZW5kT2ZMaW5lUHJvZHVjdGlvbiA9IG5ldyBFbmRPZkxpbmVQcm9kdWN0aW9uKCksXG4gICAgICAgICAgcHJvZHVjdGlvblByb2R1Y3Rpb24gPSBuZXcgUHJvZHVjdGlvblByb2R1Y3Rpb24oKSxcbiAgICAgICAgICBwcm9kdWN0aW9uc1Byb2R1Y3Rpb24gPSBuZXcgUHJvZHVjdGlvbnNQcm9kdWN0aW9uKCksXG4gICAgICAgICAgb3B0aW9uYWxQYXJ0UHJvZHVjdGlvbiA9IG5ldyBPcHRpb25hbFBhcnRQcm9kdWN0aW9uKCksXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlUHJvZHVjdGlvbiA9IG5ldyBOb1doaXRlc3BhY2VQcm9kdWN0aW9uKCksXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uID0gbmV3IFByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbigpLFxuICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUHJvZHVjdGlvbiA9IG5ldyBUZXJtaW5hbFN5bWJvbFByb2R1Y3Rpb24oKSxcbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblByb2R1Y3Rpb24gPSBuZXcgUmVndWxhckV4cHJlc3Npb25Qcm9kdWN0aW9uKCksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVQcm9kdWN0aW9uID0gbmV3IFNpZ25pZmljYW50VG9rZW5UeXBlUHJvZHVjdGlvbigpLFxuICAgICAgICAgIHByb2R1Y3Rpb25zID0gW1xuICAgICAgICAgICAgcHJvZHVjdGlvbnNQcm9kdWN0aW9uLFxuICAgICAgICAgICAgcHJvZHVjdGlvblByb2R1Y3Rpb24sXG4gICAgICAgICAgICBydWxlc1Byb2R1Y3Rpb24sXG4gICAgICAgICAgICBydWxlUHJvZHVjdGlvbixcbiAgICAgICAgICAgIHBhcnRQcm9kdWN0aW9uLFxuICAgICAgICAgICAgZ3JvdXBQcm9kdWN0aW9uLFxuICAgICAgICAgICAgb3B0aW9uYWxQYXJ0UHJvZHVjdGlvbixcbiAgICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbixcbiAgICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUHJvZHVjdGlvbixcbiAgICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUHJvZHVjdGlvbixcbiAgICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUHJvZHVjdGlvbixcbiAgICAgICAgICAgIG5vV2hpdGVzcGFjZVByb2R1Y3Rpb24sXG4gICAgICAgICAgICBlbmRPZkxpbmVQcm9kdWN0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBibmZQYXJzZXIgPSBuZXcgQk5GUGFyc2VyKHByb2R1Y3Rpb25zKTtcbiAgICBcbiAgICByZXR1cm4gYm5mUGFyc2VyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQk5GUGFyc2VyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBQcm9kdWN0aW9uIHtcbiAgY29uc3RydWN0b3IobmFtZSwgcnVsZXMsIE5vZGUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgICB0aGlzLk5vZGUgPSBOb2RlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgcGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbGV0IG5vZGVPck5vZGVzID0gbnVsbDtcblxuICAgIGNvbnRleHQuaW5jcmVhc2VEZXB0aCgpO1xuXG4gICAgY29uc3QgdG9vRGVlcCA9IGNvbnRleHQuaXNUb29EZWVwKCk7XG5cbiAgICBpZiAodG9vRGVlcCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgcGFyc2UgdHJlZSBpcyB0b28gZGVlcCBhdCBwcm9kdWN0aW9uICcke3RoaXMubmFtZX0nYCk7XG4gICAgfVxuXG4gICAgbGV0IHJ1bGVOb2RlcyA9IG51bGw7XG4gICAgXG4gICAgY29uc3Qgc29tZVJ1bGVQYXJzZWQgPSB0aGlzLnJ1bGVzLnNvbWUoZnVuY3Rpb24ocnVsZSkge1xuICAgICAgICAgICAgcnVsZU5vZGVzID0gcnVsZS5wYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpO1xuICBcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVQYXJzZWQgPSAocnVsZU5vZGVzICE9PSBudWxsKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gcnVsZVBhcnNlZDtcbiAgICAgICAgICB9KTtcblxuICAgIGlmIChzb21lUnVsZVBhcnNlZCkge1xuICAgICAgY29uc3QgcnVsZU5vZGVzTGVuZ3RoID0gcnVsZU5vZGVzLmxlbmd0aDtcblxuICAgICAgaWYgKHJ1bGVOb2Rlc0xlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3Qgbm9kZXMgPSBydWxlTm9kZXMsICAvLy9cbiAgICAgICAgICAgICAgcHJvZHVjdGlvbk5hbWUgPSB0aGlzLm5hbWU7IC8vL1xuXG4gICAgICAgIG5vZGVPck5vZGVzID0gdGhpcy5Ob2RlLmZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSk7ICAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb250ZXh0LmRlY3JlYXNlRGVwdGgoKTtcblxuICAgIHJldHVybiBub2RlT3JOb2RlcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2R1Y3Rpb247XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi9wcm9kdWN0aW9uJyksXG4gICAgICBFbmRPZkxpbmVSdWxlID0gcmVxdWlyZSgnLi4vcnVsZS9lbmRPZkxpbmUnKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIEVuZE9mTGluZVByb2R1Y3Rpb24gZXh0ZW5kcyBQcm9kdWN0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgZW5kT2ZMaW5lUnVsZSA9IG5ldyBFbmRPZkxpbmVSdWxlKCksXG4gICAgICAgICAgbmFtZSA9ICdlbmRPZkxpbmUnLFxuICAgICAgICAgIHJ1bGVzID0gW1xuICAgICAgICAgICAgZW5kT2ZMaW5lUnVsZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IE5vblRlcm1pbmFsTm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBydWxlcywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVuZE9mTGluZVByb2R1Y3Rpb247XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi9wcm9kdWN0aW9uJyksXG4gICAgICBHcm91cFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlL2dyb3VwJyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBHcm91cFByb2R1Y3Rpb24gZXh0ZW5kcyBQcm9kdWN0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgcHJvZHVjdGlvblJ1bGUgPSBuZXcgR3JvdXBSdWxlKCksXG4gICAgICAgICAgbmFtZSA9ICdncm91cCcsXG4gICAgICAgICAgcnVsZXMgPSBbXG4gICAgICAgICAgICBwcm9kdWN0aW9uUnVsZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IE5vblRlcm1pbmFsTm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBydWxlcywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdyb3VwUHJvZHVjdGlvbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uL3Byb2R1Y3Rpb24nKSxcbiAgICAgIE5vV2hpdGVzcGFjZVJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlL25vV2hpdGVzcGFjZScpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3MgTm9XaGl0ZXNwYWNlUHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2VSdWxlID0gbmV3IE5vV2hpdGVzcGFjZVJ1bGUoKSxcbiAgICAgICAgICBuYW1lID0gJ25vV2hpdGVzcGFjZScsXG4gICAgICAgICAgcnVsZXMgPSBbXG4gICAgICAgICAgICBub1doaXRlc3BhY2VSdWxlXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuXG4gICAgc3VwZXIobmFtZSwgcnVsZXMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb1doaXRlc3BhY2VQcm9kdWN0aW9uO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vcHJvZHVjdGlvbicpLFxuICAgICAgT3B0aW9uYWxQYXJ0UnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUvb3B0aW9uYWxQYXJ0JyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBPcHRpb25hbFBhcnRQcm9kdWN0aW9uIGV4dGVuZHMgUHJvZHVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG9wdGlvbmFsUGFydFJ1bGUgPSBuZXcgT3B0aW9uYWxQYXJ0UnVsZSgpLFxuICAgICAgICAgIG5hbWUgPSAnb3B0aW9uYWxQYXJ0JyxcbiAgICAgICAgICBydWxlcyA9IFtcbiAgICAgICAgICAgIG9wdGlvbmFsUGFydFJ1bGVcbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBOb25UZXJtaW5hbE5vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgcnVsZXMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPcHRpb25hbFBhcnRQcm9kdWN0aW9uO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vcHJvZHVjdGlvbicpLFxuICAgICAgUHJvZHVjdGlvbk5hbWVSdWxlID0gcmVxdWlyZSgnLi4vcnVsZS9wcm9kdWN0aW9uTmFtZScpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3MgUGFydFByb2R1Y3Rpb24gZXh0ZW5kcyBQcm9kdWN0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgZ3JvdXBQcm9kdWN0aW9uTmFtZSA9ICdncm91cCcsXG4gICAgICAgICAgZW5kT2ZMaW5lUHJvZHVjdGlvbk5hbWUgPSAnZW5kT2ZMaW5lJyxcbiAgICAgICAgICBvcHRpb25hbFBhcnRQcm9kdWN0aW9uTmFtZSA9ICdvcHRpb25hbFBhcnQnLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZVByb2R1Y3Rpb25OYW1lID0gJ25vV2hpdGVzcGFjZScsXG4gICAgICAgICAgdGVybWluYWxTeW1ib2xQcm9kdWN0aW9uTmFtZSA9ICd0ZXJtaW5hbFN5bWJvbCcsXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uTmFtZSA9ICdwcm9kdWN0aW9uTmFtZScsXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb25Qcm9kdWN0aW9uTmFtZSA9ICdyZWd1bGFyRXhwcmVzc2lvbicsXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVQcm9kdWN0aW9uTmFtZSA9ICdzaWduaWZpY2FudFRva2VuVHlwZScsXG4gICAgICAgICAgZ3JvdXBQcm9kdWN0aW9uTmFtZVJ1bGUgPSBuZXcgUHJvZHVjdGlvbk5hbWVSdWxlKGdyb3VwUHJvZHVjdGlvbk5hbWUpLFxuICAgICAgICAgIGVuZE9mTGluZVByb2R1Y3Rpb25OYW1lUnVsZSA9IG5ldyBQcm9kdWN0aW9uTmFtZVJ1bGUoZW5kT2ZMaW5lUHJvZHVjdGlvbk5hbWUpLFxuICAgICAgICAgIG9wdGlvbmFsUGFydFByb2R1Y3Rpb25OYW1lUnVsZSA9IG5ldyBQcm9kdWN0aW9uTmFtZVJ1bGUob3B0aW9uYWxQYXJ0UHJvZHVjdGlvbk5hbWUpLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZVByb2R1Y3Rpb25OYW1lUnVsZSA9IG5ldyBQcm9kdWN0aW9uTmFtZVJ1bGUobm9XaGl0ZXNwYWNlUHJvZHVjdGlvbk5hbWUpLFxuICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUHJvZHVjdGlvbk5hbWVSdWxlID0gbmV3IFByb2R1Y3Rpb25OYW1lUnVsZSh0ZXJtaW5hbFN5bWJvbFByb2R1Y3Rpb25OYW1lKSxcbiAgICAgICAgICBwcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb25OYW1lUnVsZSA9IG5ldyBQcm9kdWN0aW9uTmFtZVJ1bGUocHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uTmFtZSksXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb25Qcm9kdWN0aW9uTmFtZVJ1bGUgPSBuZXcgUHJvZHVjdGlvbk5hbWVSdWxlKHJlZ3VsYXJFeHByZXNzaW9uUHJvZHVjdGlvbk5hbWUpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUHJvZHVjdGlvbk5hbWVSdWxlID0gbmV3IFByb2R1Y3Rpb25OYW1lUnVsZShzaWduaWZpY2FudFRva2VuVHlwZVByb2R1Y3Rpb25OYW1lKSxcbiAgICAgICAgICBuYW1lID0gJ3BhcnQnLFxuICAgICAgICAgIHJ1bGVzID0gW1xuICAgICAgICAgICAgZ3JvdXBQcm9kdWN0aW9uTmFtZVJ1bGUsXG4gICAgICAgICAgICBvcHRpb25hbFBhcnRQcm9kdWN0aW9uTmFtZVJ1bGUsXG4gICAgICAgICAgICBwcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb25OYW1lUnVsZSxcbiAgICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUHJvZHVjdGlvbk5hbWVSdWxlLFxuICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVQcm9kdWN0aW9uTmFtZVJ1bGUsXG4gICAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFByb2R1Y3Rpb25OYW1lUnVsZSxcbiAgICAgICAgICAgIG5vV2hpdGVzcGFjZVByb2R1Y3Rpb25OYW1lUnVsZSxcbiAgICAgICAgICAgIGVuZE9mTGluZVByb2R1Y3Rpb25OYW1lUnVsZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IE5vblRlcm1pbmFsTm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBydWxlcywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcnRQcm9kdWN0aW9uO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vcHJvZHVjdGlvbicpLFxuICAgICAgUHJvZHVjdGlvblJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlL3Byb2R1Y3Rpb24nKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIFByb2R1Y3Rpb25Qcm9kdWN0aW9uIGV4dGVuZHMgUHJvZHVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHByb2R1Y3Rpb25SdWxlID0gbmV3IFByb2R1Y3Rpb25SdWxlKCksXG4gICAgICAgICAgbmFtZSA9ICdwcm9kdWN0aW9uJyxcbiAgICAgICAgICBydWxlcyA9IFtcbiAgICAgICAgICAgIHByb2R1Y3Rpb25SdWxlXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIHJ1bGVzLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvZHVjdGlvblByb2R1Y3Rpb247XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi9wcm9kdWN0aW9uJyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpLFxuICAgICAgU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlID0gcmVxdWlyZSgnLi4vcnVsZS9zaWduaWZpY2FudFRva2VuVHlwZScpO1xuXG5jbGFzcyBQcm9kdWN0aW9uTmFtZVByb2R1Y3Rpb24gZXh0ZW5kcyBQcm9kdWN0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgbmFtZVNpZ25pZmljYW50VG9rZW5UeXBlID0gJ25hbWUnLFxuICAgICAgICAgIG5hbWVTaWduaWZpY2FudFRva2VuVHlwZVJ1bGUgPSBuZXcgU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlKG5hbWVTaWduaWZpY2FudFRva2VuVHlwZSksXG4gICAgICAgICAgbmFtZSA9ICdwcm9kdWN0aW9uTmFtZScsXG4gICAgICAgICAgcnVsZXMgPSBbXG4gICAgICAgICAgICBuYW1lU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gTm9uVGVybWluYWxOb2RlO1xuICAgIFxuICAgIHN1cGVyKG5hbWUsIHJ1bGVzLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vcHJvZHVjdGlvbicpLFxuICAgICAgUHJvZHVjdGlvbnNSdWxlID0gcmVxdWlyZSgnLi4vcnVsZS9wcm9kdWN0aW9ucycpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3MgUHJvZHVjdGlvbnNQcm9kdWN0aW9uIGV4dGVuZHMgUHJvZHVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHByb2R1Y3Rpb25zUnVsZSA9IG5ldyBQcm9kdWN0aW9uc1J1bGUoKSxcbiAgICAgICAgICBuYW1lID0gJ3Byb2R1Y3Rpb25zJyxcbiAgICAgICAgICBydWxlcyA9IFtcbiAgICAgICAgICAgIHByb2R1Y3Rpb25zUnVsZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IE5vblRlcm1pbmFsTm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBydWxlcywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2R1Y3Rpb25zUHJvZHVjdGlvbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uL3Byb2R1Y3Rpb24nKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyksXG4gICAgICBTaWduaWZpY2FudFRva2VuVHlwZVJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlL3NpZ25pZmljYW50VG9rZW5UeXBlJyk7XG5cbmNsYXNzIFJlZ3VsYXJFeHByZXNzaW9uUHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCByZWd1bGFyRXhwcmVzc2lvblNpZ25pZmljYW50VG9rZW5UeXBlID0gJ3JlZ3VsYXJFeHByZXNzaW9uJyxcbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSA9IG5ldyBTaWduaWZpY2FudFRva2VuVHlwZVJ1bGUocmVndWxhckV4cHJlc3Npb25TaWduaWZpY2FudFRva2VuVHlwZSksXG4gICAgICAgICAgbmFtZSA9ICdyZWd1bGFyRXhwcmVzc2lvbicsXG4gICAgICAgICAgcnVsZXMgPSBbXG4gICAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblNpZ25pZmljYW50VG9rZW5UeXBlUnVsZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IE5vblRlcm1pbmFsTm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBydWxlcywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlZ3VsYXJFeHByZXNzaW9uUHJvZHVjdGlvbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uL3Byb2R1Y3Rpb24nKSxcbiAgICAgIFJ1bGVSdWxlID0gcmVxdWlyZSgnLi4vcnVsZS9ydWxlJyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBSdWxlUHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBuYW1lID0gJ3J1bGUnLFxuICAgICAgICAgIHJ1bGVSdWxlID0gbmV3IFJ1bGVSdWxlKCksXG4gICAgICAgICAgcnVsZXMgPSBbXG4gICAgICAgICAgICBydWxlUnVsZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IE5vblRlcm1pbmFsTm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBydWxlcywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGVQcm9kdWN0aW9uO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vcHJvZHVjdGlvbicpLFxuICAgICAgUnVsZXNSdWxlID0gcmVxdWlyZSgnLi4vcnVsZS9ydWxlcycpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKTtcblxuY2xhc3MgUnVsZXNQcm9kdWN0aW9uIGV4dGVuZHMgUHJvZHVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHJ1bGVzUnVsZSA9IG5ldyBSdWxlc1J1bGUoKSxcbiAgICAgICAgICBuYW1lID0gJ3J1bGVzJyxcbiAgICAgICAgICBydWxlcyA9IFtcbiAgICAgICAgICAgIHJ1bGVzUnVsZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IE5vblRlcm1pbmFsTm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBydWxlcywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGVzUHJvZHVjdGlvbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uL3Byb2R1Y3Rpb24nKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyksXG4gICAgICBTaWduaWZpY2FudFRva2VuVHlwZVJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlL3NpZ25pZmljYW50VG9rZW5UeXBlJyk7XG5cbmNsYXNzIFNpZ25pZmljYW50VG9rZW5UeXBlUHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCB0eXBlU2lnbmlmaWNhbnRUb2tlblR5cGUgPSAndHlwZScsXG4gICAgICAgICAgdHlwZVNpZ25pZmljYW50VG9rZW5UeXBlUnVsZSA9IG5ldyBTaWduaWZpY2FudFRva2VuVHlwZVJ1bGUodHlwZVNpZ25pZmljYW50VG9rZW5UeXBlKSxcbiAgICAgICAgICBuYW1lID0gJ3NpZ25pZmljYW50VG9rZW5UeXBlJyxcbiAgICAgICAgICBydWxlcyA9IFtcbiAgICAgICAgICAgIHR5cGVTaWduaWZpY2FudFRva2VuVHlwZVJ1bGVcbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBOb25UZXJtaW5hbE5vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgcnVsZXMsIE5vZGUpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTaWduaWZpY2FudFRva2VuVHlwZVByb2R1Y3Rpb247XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi9wcm9kdWN0aW9uJyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpLFxuICAgICAgU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlID0gcmVxdWlyZSgnLi4vcnVsZS9zaWduaWZpY2FudFRva2VuVHlwZScpO1xuXG5jbGFzcyBUZXJtaW5hbFN5bWJvbFByb2R1Y3Rpb24gZXh0ZW5kcyBQcm9kdWN0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3Qgc3RyaW5nU2lnbmlmaWNhbnRUb2tlblR5cGUgPSAnc3RyaW5nJyxcbiAgICAgICAgICBzdHJpbmdTaWduaWZpY2FudFRva2VuVHlwZVJ1bGUgPSBuZXcgU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlKHN0cmluZ1NpZ25pZmljYW50VG9rZW5UeXBlKSxcbiAgICAgICAgICBuYW1lID0gJ3Rlcm1pbmFsU3ltYm9sJyxcbiAgICAgICAgICBydWxlcyA9IFtcbiAgICAgICAgICAgIHN0cmluZ1NpZ25pZmljYW50VG9rZW5UeXBlUnVsZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IE5vblRlcm1pbmFsTm9kZTtcblxuICAgIHN1cGVyKG5hbWUsIHJ1bGVzLCBOb2RlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGVybWluYWxTeW1ib2xQcm9kdWN0aW9uO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBSdWxlIHtcbiAgY29uc3RydWN0b3IocGFydHMpIHtcbiAgICB0aGlzLnBhcnRzID0gcGFydHM7XG4gIH1cblxuICBnZXRQYXJ0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0cztcbiAgfVxuXG4gIHBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSkge1xuICAgIGxldCBub2RlcyA9IFtdO1xuICAgIFxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBjb250ZXh0LnNhdmVkSW5kZXgoKSxcbiAgICAgICAgICBldmVyeVBhcnRQYXJzZWQgPSB0aGlzLnBhcnRzLmV2ZXJ5KGZ1bmN0aW9uKHBhcnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnROb2RlT3JOb2RlcyA9IHBhcnQucGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICAgICAgICAgIHBhcnRQYXJzZWQgPSAocGFydE5vZGVPck5vZGVzICE9PSBudWxsKTtcbiAgXG4gICAgICAgICAgICBpZiAocGFydFBhcnNlZCkge1xuICAgICAgICAgICAgICBub2RlcyA9IG5vZGVzLmNvbmNhdChwYXJ0Tm9kZU9yTm9kZXMpO1xuICBcbiAgICAgICAgICAgICAgbm9XaGl0ZXNwYWNlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgcmV0dXJuIHBhcnRQYXJzZWQ7XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoIWV2ZXJ5UGFydFBhcnNlZCkge1xuICAgICAgY29udGV4dC5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG5cbiAgICAgIG5vZGVzID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vcnVsZScpLFxuICAgICAgVGVybWluYWxTeW1ib2xQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3BhcnQvdGVybWluYWxTeW1ib2wnKTtcblxuY2xhc3MgRW5kT2ZMaW5lUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2UgPSBmYWxzZSxcbiAgICAgICAgICBlbmRPZkxpbmVUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSAnPEVORF9PRl9MSU5FPicsXG4gICAgICAgICAgZW5kT2ZMaW5lVGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydChlbmRPZkxpbmVUZXJtaW5hbFN5bWJvbENvbnRlbnQsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBlbmRPZkxpbmVUZXJtaW5hbFN5bWJvbFBhcnRcbiAgICAgICAgICBdO1xuXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFbmRPZkxpbmVSdWxlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vcnVsZScpLFxuICAgICAgVGVybWluYWxTeW1ib2xQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3BhcnQvdGVybWluYWxTeW1ib2wnKSxcbiAgICAgIFByb2R1Y3Rpb25OYW1lUGFydCA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9wYXJ0L3Byb2R1Y3Rpb25OYW1lJyk7XG5cbmNsYXNzIEdyb3VwUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2UgPSBmYWxzZSxcbiAgICAgICAgICBvcGVuQnJhY2tldFRlcm1pbmFsU3ltYm9sQ29udGVudCA9ICcoJyxcbiAgICAgICAgICBydWxlc1Byb2R1Y3Rpb25OYW1lID0gJ3J1bGVzJyxcbiAgICAgICAgICBjbG9zZUJyYWNrZXRUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSAnKScsXG4gICAgICAgICAgb3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KG9wZW5CcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50LCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHJ1bGVzUHJvZHVjdGlvbk5hbWVQYXJ0ID0gbmV3IFByb2R1Y3Rpb25OYW1lUGFydChydWxlc1Byb2R1Y3Rpb25OYW1lLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIGNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQoY2xvc2VCcmFja2V0VGVybWluYWxTeW1ib2xDb250ZW50LCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgb3BlbkJyYWNrZXRUZXJtaW5hbFN5bWJvbFBhcnQsXG4gICAgICAgICAgICBydWxlc1Byb2R1Y3Rpb25OYW1lUGFydCxcbiAgICAgICAgICAgIGNsb3NlQnJhY2tldFRlcm1pbmFsU3ltYm9sUGFydFxuICAgICAgICAgIF07XG4gICAgXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHcm91cFJ1bGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlJyksXG4gICAgICBUZXJtaW5hbFN5bWJvbFBhcnQgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vcGFydC90ZXJtaW5hbFN5bWJvbCcpO1xuXG5jbGFzcyBOb1doaXRlc3BhY2VSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5vV2hpdGVzcGFjZSA9IGZhbHNlLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZVRlcm1pbmFsU3ltYm9sQ29udGVudCA9ICc8Tk9fV0hJVEVTUEFDRT4nLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZVRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQobm9XaGl0ZXNwYWNlVGVybWluYWxTeW1ib2xDb250ZW50LCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgbm9XaGl0ZXNwYWNlVGVybWluYWxTeW1ib2xQYXJ0XG4gICAgICAgICAgXTtcblxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9XaGl0ZXNwYWNlUnVsZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUnKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUGFydCA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9wYXJ0L3Rlcm1pbmFsU3ltYm9sJyksXG4gICAgICBQcm9kdWN0aW9uTmFtZVBhcnQgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vcGFydC9wcm9kdWN0aW9uTmFtZScpO1xuXG5jbGFzcyBPcHRpb25hbFBhcnRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5vV2hpdGVzcGFjZSA9IHRydWUsXG4gICAgICAgICAgcGFydFByb2R1Y3Rpb25OYW1lID0gJ3BhcnQnLFxuICAgICAgICAgIHF1ZXN0aW9uTWFya1Rlcm1pbmFsU3ltYm9sQ29udGVudCA9ICc/JyxcbiAgICAgICAgICBwYXJ0UHJvZHVjdGlvbk5hbWVQYXJ0ID0gbmV3IFByb2R1Y3Rpb25OYW1lUGFydChwYXJ0UHJvZHVjdGlvbk5hbWUsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcXVlc3Rpb25NYXJrVGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydChxdWVzdGlvbk1hcmtUZXJtaW5hbFN5bWJvbENvbnRlbnQsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBwYXJ0UHJvZHVjdGlvbk5hbWVQYXJ0LFxuICAgICAgICAgICAgcXVlc3Rpb25NYXJrVGVybWluYWxTeW1ib2xQYXJ0XG4gICAgICAgICAgXTtcbiAgICBcbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9wdGlvbmFsUGFydFJ1bGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlJyksXG4gICAgICBUZXJtaW5hbFN5bWJvbFBhcnQgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vcGFydC90ZXJtaW5hbFN5bWJvbCcpLFxuICAgICAgUHJvZHVjdGlvbk5hbWVQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3BhcnQvcHJvZHVjdGlvbk5hbWUnKSxcbiAgICAgIFNpZ25pZmljYW50VG9rZW5UeXBlUGFydCA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9wYXJ0L3NpZ25pZmljYW50VG9rZW5UeXBlJyk7XG5cbmNsYXNzIFByb2R1Y3Rpb25SdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5vV2hpdGVzcGFjZSA9IGZhbHNlLFxuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbk5hbWUgPSAncHJvZHVjdGlvbk5hbWUnLFxuICAgICAgICAgIHNlcGFyYXRvclRlcm1pbmFsU3ltYm9sQ29udGVudCA9ICc6Oj0nLFxuICAgICAgICAgIHJ1bGVzUHJvZHVjdGlvbk5hbWUgPSAncnVsZXMnLFxuICAgICAgICAgIGVuZE9mTGluZVNpZ25pZmljYW50VG9rZW5UeXBlID0gJ2VuZE9mTGluZScsXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWVQcm9kdWN0aW9uTmFtZVBhcnQgPSBuZXcgUHJvZHVjdGlvbk5hbWVQYXJ0KHByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbk5hbWUsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgc2VwYXJhdG9yVGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydChzZXBhcmF0b3JUZXJtaW5hbFN5bWJvbENvbnRlbnQsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcnVsZXNQcm9kdWN0aW9uTmFtZVBhcnQgPSBuZXcgUHJvZHVjdGlvbk5hbWVQYXJ0KHJ1bGVzUHJvZHVjdGlvbk5hbWUsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgZW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0ID0gbmV3IFNpZ25pZmljYW50VG9rZW5UeXBlUGFydChlbmRPZkxpbmVTaWduaWZpY2FudFRva2VuVHlwZSwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUHJvZHVjdGlvbk5hbWVQYXJ0LFxuICAgICAgICAgICAgc2VwYXJhdG9yVGVybWluYWxTeW1ib2xQYXJ0LFxuICAgICAgICAgICAgcnVsZXNQcm9kdWN0aW9uTmFtZVBhcnQsXG4gICAgICAgICAgICBlbmRPZkxpbmVTaWduaWZpY2FudFRva2VuVHlwZVBhcnRcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvZHVjdGlvblJ1bGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlJyksXG4gICAgICBQcm9kdWN0aW9uTmFtZVBhcnQgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vcGFydC9wcm9kdWN0aW9uTmFtZScpO1xuXG5jbGFzcyBQcm9kdWN0aW9uTmFtZVJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IocHJvZHVjdGlvbk5hbWUpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2UgPSBmYWxzZSxcbiAgICAgICAgICBwcm9kdWN0aW9uTmFtZVBhcnQgPSBuZXcgUHJvZHVjdGlvbk5hbWVQYXJ0KHByb2R1Y3Rpb25OYW1lLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgcHJvZHVjdGlvbk5hbWVQYXJ0XG4gICAgICAgICAgXTtcbiAgICBcbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2R1Y3Rpb25OYW1lUnVsZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUnKSxcbiAgICAgIE9uZU9yTW9yZVBhcnRzUGFydCA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9wYXJ0L29uZU9yTW9yZVBhcnRzJyk7XG5cbmNsYXNzIFByb2R1Y3Rpb25zUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCB0ZXJtaW5hbFBhcnQgPSBudWxsLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IGZhbHNlLCBcbiAgICAgICAgICBwcm9kdWN0aW9uUHJvZHVjdGlvbk5hbWUgPSAncHJvZHVjdGlvbicsXG4gICAgICAgICAgb25lT3JNb3JlUHJvZHVjdGlvblByb2R1Y3Rpb25OYW1lUGFydHNQYXJ0ID0gbmV3IE9uZU9yTW9yZVBhcnRzUGFydCh0ZXJtaW5hbFBhcnQsIHByb2R1Y3Rpb25Qcm9kdWN0aW9uTmFtZSwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIG9uZU9yTW9yZVByb2R1Y3Rpb25Qcm9kdWN0aW9uTmFtZVBhcnRzUGFydFxuICAgICAgICAgIF07XG4gICAgXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9kdWN0aW9uc1J1bGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlJyksXG4gICAgICBPbmVPck1vcmVQYXJ0c1BhcnQgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vcGFydC9vbmVPck1vcmVQYXJ0cycpO1xuXG5jbGFzcyBSdWxlUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCB0ZXJtaW5hbFBhcnQgPSBudWxsLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IGZhbHNlLFxuICAgICAgICAgIHBhcnRQcm9kdWN0aW9uTmFtZSA9ICdwYXJ0JyxcbiAgICAgICAgICBvbmVPck1vcmVQYXJ0UHJvZHVjdGlvbk5hbWVQYXJ0c1BhcnQgPSBuZXcgT25lT3JNb3JlUGFydHNQYXJ0KHRlcm1pbmFsUGFydCwgcGFydFByb2R1Y3Rpb25OYW1lLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgb25lT3JNb3JlUGFydFByb2R1Y3Rpb25OYW1lUGFydHNQYXJ0XG4gICAgICAgICAgXTtcblxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZVJ1bGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlJyksXG4gICAgICBQcm9kdWN0aW9uTmFtZVBhcnQgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vcGFydC9wcm9kdWN0aW9uTmFtZScpO1xuXG5jbGFzcyBSdWxlc1J1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlID0gZmFsc2UsXG4gICAgICAgICAgcnVsZVByb2R1Y3Rpb25OYW1lID0gJ3J1bGUnLFxuICAgICAgICAgIHJ1bGVQcm9kdWN0aW9uTmFtZVBhcnQgPSBuZXcgUHJvZHVjdGlvbk5hbWVQYXJ0KHJ1bGVQcm9kdWN0aW9uTmFtZSwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIHJ1bGVQcm9kdWN0aW9uTmFtZVBhcnRcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZXNSdWxlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vcnVsZScpLFxuICAgICAgU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0ID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3BhcnQvc2lnbmlmaWNhbnRUb2tlblR5cGUnKTtcblxuY2xhc3MgU2lnbmlmaWNhbnRUb2tlblR5cGVSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKHNpZ25pZmljYW50VG9rZW5UeXBlKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlID0gZmFsc2UsXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0ID0gbmV3IFNpZ25pZmljYW50VG9rZW5UeXBlUGFydChzaWduaWZpY2FudFRva2VuVHlwZSwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUGFydFxuICAgICAgICAgIF07XG4gICAgXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTaWduaWZpY2FudFRva2VuVHlwZVJ1bGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCB7IFNpZ25pZmljYW50VG9rZW4sIFdoaXRlc3BhY2VUb2tlbiB9ID0gbGV4ZXJzO1xuXG5jb25zdCBERUZBVUxUX01BWElNVU1fREVQVEggPSA5OTtcblxuY2xhc3MgQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKHRva2VucywgcHJvZHVjdGlvbnMsIG1heGltdW1EZXB0aCA9IERFRkFVTFRfTUFYSU1VTV9ERVBUSCkge1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuXG4gICAgdGhpcy5wcm9kdWN0aW9ucyA9IHByb2R1Y3Rpb25zO1xuXG4gICAgdGhpcy5tYXhpbXVtRGVwdGggPSBtYXhpbXVtRGVwdGg7XG5cbiAgICB0aGlzLmRlcHRoID0gMDtcblxuICAgIHRoaXMuaW5kZXggPSAwO1xuICB9XG5cbiAgZ2V0UHJvZHVjdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvZHVjdGlvbnM7XG4gIH1cblxuICBnZXRNYXhpbXVtRGVwdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMubWF4aW11bURlcHRoO1xuICB9XG5cbiAgZ2V0RGVwdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVwdGg7XG4gIH1cblxuICBnZXRJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbmRleDtcbiAgfVxuXG4gIGlzVG9vRGVlcCgpIHtcbiAgICBjb25zdCB0b29EZWVwID0gdGhpcy5kZXB0aCA+IHRoaXMubWF4aW11bURlcHRoO1xuICAgIFxuICAgIHJldHVybiB0b29EZWVwO1xuICB9XG5cbiAgaW5jcmVhc2VEZXB0aCgpIHtcbiAgICB0aGlzLmRlcHRoKys7XG4gIH1cblxuICBkZWNyZWFzZURlcHRoKCkge1xuICAgIHRoaXMuZGVwdGgtLTtcbiAgfVxuXG4gIHNldEluZGV4KGluZGV4KSB7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICB9XG5cbiAgZ2V0TmV4dFNpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgbGV0IG5leHRTaWduaWZpY2FudFRva2VuID0gbnVsbDtcblxuICAgIGZvciAoOzspIHtcbiAgICAgIGNvbnN0IG5leHRUb2tlbiA9IHRoaXMudG9rZW5zW3RoaXMuaW5kZXgrK107XG5cbiAgICAgIGlmIChuZXh0VG9rZW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKG5leHRUb2tlbiBpbnN0YW5jZW9mIFNpZ25pZmljYW50VG9rZW4pIHtcbiAgICAgICAgbmV4dFNpZ25pZmljYW50VG9rZW4gPSBuZXh0VG9rZW47XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHRTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0TmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuKG5vV2hpdGVzcGFjZSkge1xuICAgIGxldCBuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4gPSBudWxsLFxuICAgICAgICBuZXh0U2lnbmlmaWNhbnRUb2tlbiA9IHRoaXMuZ2V0TmV4dFNpZ25pZmljYW50VG9rZW4oKTtcblxuICAgIGlmIChuZXh0U2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgbGV0IG5leHRTaWduaWZpY2FudFRva2VuSXNXaGl0ZXNwYWNlVG9rZW47XG5cbiAgICAgIGlmIChub1doaXRlc3BhY2UpIHtcbiAgICAgICAgbmV4dFNpZ25pZmljYW50VG9rZW5Jc1doaXRlc3BhY2VUb2tlbiA9IHNpZ25pZmljYW50VG9rZW5Jc1doaXRlc3BhY2VUb2tlbihuZXh0U2lnbmlmaWNhbnRUb2tlbik7XG5cbiAgICAgICAgaWYgKG5leHRTaWduaWZpY2FudFRva2VuSXNXaGl0ZXNwYWNlVG9rZW4pIHtcbiAgICAgICAgICBuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4gPSBudWxsXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuID0gbmV4dFNpZ25pZmljYW50VG9rZW47XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAoOzspIHtcbiAgICAgICAgICBuZXh0U2lnbmlmaWNhbnRUb2tlbklzV2hpdGVzcGFjZVRva2VuID0gc2lnbmlmaWNhbnRUb2tlbklzV2hpdGVzcGFjZVRva2VuKG5leHRTaWduaWZpY2FudFRva2VuKTtcblxuICAgICAgICAgIGlmIChuZXh0U2lnbmlmaWNhbnRUb2tlbklzV2hpdGVzcGFjZVRva2VuKSB7XG4gICAgICAgICAgICBuZXh0U2lnbmlmaWNhbnRUb2tlbiA9IHRoaXMuZ2V0TmV4dFNpZ25pZmljYW50VG9rZW4oKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuID0gbmV4dFNpZ25pZmljYW50VG9rZW47XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChuZXh0U2lnbmlmaWNhbnRUb2tlbiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgbmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuID0gbnVsbDtcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIHNhdmVkSW5kZXgoKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmdldEluZGV4KCksXG4gICAgICAgICAgc2F2ZWRJbmRleCA9IGluZGV4OyAvLy9cbiAgICBcbiAgICByZXR1cm4gc2F2ZWRJbmRleDtcbiAgfVxuXG4gIGJhY2t0cmFjayhzYXZlZEluZGV4KSB7XG4gICAgdGhpcy5pbmRleCA9IHNhdmVkSW5kZXg7ICAvLy9cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbnRleHQ7XG5cbmZ1bmN0aW9uIHNpZ25pZmljYW50VG9rZW5Jc1doaXRlc3BhY2VUb2tlbihzaWduaWZpY2FudFRva2VuKSB7XG4gIGNvbnN0IHR5cGUgPSBzaWduaWZpY2FudFRva2VuLmdldFR5cGUoKSxcbiAgICAgICAgd2hpdGVzcGFjZVRva2VuID0gKHR5cGUgPT09IFdoaXRlc3BhY2VUb2tlbi50eXBlKTtcbiAgXG4gIHJldHVybiB3aGl0ZXNwYWNlVG9rZW47XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IE5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IHJlcXVpcmUoJy4uL3BhcnNlVHJlZS9ub25UZXJtaW5hbE5vZGUnKTtcblxuY2xhc3MgTm9uVGVybWluYWxOb2RlIHtcbiAgY29uc3RydWN0b3IocHJvZHVjdGlvbk5hbWUsIGNoaWxkTm9kZXMsIGZpcnN0TGluZSwgbGFzdExpbmUsIGZpcnN0U2lnbmlmaWNhbnRUb2tlbiwgbGFzdFNpZ25pZmljYW50VG9rZW4pIHtcbiAgICB0aGlzLnByb2R1Y3Rpb25OYW1lID0gcHJvZHVjdGlvbk5hbWU7XG4gICAgdGhpcy5jaGlsZE5vZGVzID0gY2hpbGROb2RlcztcbiAgICB0aGlzLmZpcnN0TGluZSA9IGZpcnN0TGluZTtcbiAgICB0aGlzLmxhc3RMaW5lID0gbGFzdExpbmU7XG4gICAgdGhpcy5maXJzdFNpZ25pZmljYW50VG9rZW4gPSBmaXJzdFNpZ25pZmljYW50VG9rZW47XG4gICAgdGhpcy5sYXN0U2lnbmlmaWNhbnRUb2tlbiA9IGxhc3RTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0UHJvZHVjdGlvbk5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvZHVjdGlvbk5hbWU7XG4gIH1cblxuICBnZXRDaGlsZE5vZGVzKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXM7XG4gIH1cbiAgXG4gIGdldEZpcnN0TGluZSgpIHtcbiAgICByZXR1cm4gdGhpcy5maXJzdExpbmU7XG4gIH1cblxuICBnZXRMYXN0TGluZSgpIHtcbiAgICByZXR1cm4gdGhpcy5sYXN0TGluZTtcbiAgfVxuXG4gIGdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbigpIHtcbiAgICByZXR1cm4gdGhpcy5maXJzdFNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBnZXRMYXN0U2lnbmlmaWNhbnRUb2tlbigpIHtcbiAgICByZXR1cm4gdGhpcy5sYXN0U2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIHBhcnNlVHJlZShsaW5lcykge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSBOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUuZnJvbU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIGxpbmVzKSxcbiAgICAgICAgICBwYXJzZVRyZWUgPSBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWU7ICAvLy9cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBzZXRDaGlsZE5vZGVzKGNoaWxkTm9kZXMpIHtcbiAgICB0aGlzLmNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbU5vZGVzQW5kUHJvZHVjdGlvbk5hbWUobm9kZXMsIHByb2R1Y3Rpb25OYW1lLCBDbGFzcyA9IE5vblRlcm1pbmFsTm9kZSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBub2RlcywgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlID0gQ2xhc3MuZnJvbVByb2R1Y3Rpb25OYW1lQW5kQ2hpbGROb2Rlcyhwcm9kdWN0aW9uTmFtZSwgY2hpbGROb2RlcywgQ2xhc3MpO1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvZHVjdGlvbk5hbWVBbmRDaGlsZE5vZGVzKHByb2R1Y3Rpb25OYW1lLCBjaGlsZE5vZGVzLCBDbGFzcyA9IE5vblRlcm1pbmFsTm9kZSkge1xuICAgIGNvbnN0IGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgbGFzdENoaWxkTm9kZSA9IGxhc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgZmlyc3RDaGlsZE5vZGVGaXJzdExpbmUgPSBmaXJzdENoaWxkTm9kZS5nZXRGaXJzdExpbmUoKSxcbiAgICAgICAgICBsYXN0Q2hpbGROb2RlRmlyc3RMaW5lID0gbGFzdENoaWxkTm9kZS5nZXRMYXN0TGluZSgpLFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlRmlyc3RTaWduaWZpY2FudFRva2VuID0gZmlyc3RDaGlsZE5vZGUuZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgICAgbGFzdENoaWxkTm9kZUxhc3RTaWduaWZpY2FudFRva2VuID0gbGFzdENoaWxkTm9kZS5nZXRMYXN0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICAgIGZpcnN0TGluZSA9IGZpcnN0Q2hpbGROb2RlRmlyc3RMaW5lLCAgLy8vXG4gICAgICAgICAgbGFzdExpbmUgPSBsYXN0Q2hpbGROb2RlRmlyc3RMaW5lLCAgLy8vXG4gICAgICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuID0gZmlyc3RDaGlsZE5vZGVGaXJzdFNpZ25pZmljYW50VG9rZW4sIC8vL1xuICAgICAgICAgIGxhc3RTaWduaWZpY2FudFRva2VuID0gbGFzdENoaWxkTm9kZUxhc3RTaWduaWZpY2FudFRva2VuLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGUgPSBuZXcgQ2xhc3MocHJvZHVjdGlvbk5hbWUsIGNoaWxkTm9kZXMsIGZpcnN0TGluZSwgbGFzdExpbmUsIGZpcnN0U2lnbmlmaWNhbnRUb2tlbiwgbGFzdFNpZ25pZmljYW50VG9rZW4pO1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vblRlcm1pbmFsTm9kZTtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG5mdW5jdGlvbiBsYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTsgfVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWwgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsL2FycmF5JyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi9ub25UZXJtaW5hbCcpO1xuXG5jbGFzcyBEaXNjYXJkU2Vjb25kQ2hpbGROb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgc3RhdGljIGZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBhcnJheVV0aWwuZGlzY2FyZFNlY29uZChub2RlcyksXG4gICAgICAgICAgZGlzY2FyZFNlY29uZENoaWxkTm9kZSA9IE5vblRlcm1pbmFsTm9kZS5mcm9tUHJvZHVjdGlvbk5hbWVBbmRDaGlsZE5vZGVzKHByb2R1Y3Rpb25OYW1lLCBjaGlsZE5vZGVzLCBEaXNjYXJkU2Vjb25kQ2hpbGROb2RlKTtcblxuICAgIHJldHVybiBkaXNjYXJkU2Vjb25kQ2hpbGROb2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGlzY2FyZFNlY29uZENoaWxkTm9kZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vdGVybWluYWwnKTtcblxuY2xhc3MgRXJyb3JOb2RlIGV4dGVuZHMgVGVybWluYWxOb2RlIHtcbiAgc3RhdGljIGZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSkge1xuICAgIGNvbnN0IGZpcnN0Tm9kZSA9IGZpcnN0KG5vZGVzKSxcbiAgICAgICAgICB0ZXJtaW5hbE5vZGUgPSBmaXJzdE5vZGUsICAvLy9cbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuID0gdGVybWluYWxOb2RlLmdldFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgICBlcnJvck5vZGUgPSBUZXJtaW5hbE5vZGUuZnJvbVNpZ25pZmljYW50VG9rZW4oc2lnbmlmaWNhbnRUb2tlbiwgRXJyb3JOb2RlKSxcbiAgICAgICAgICBlcnJvciA9IHRydWU7XG5cbiAgICBzaWduaWZpY2FudFRva2VuLnNldEVycm9yKGVycm9yKTtcblxuICAgIHJldHVybiBlcnJvck5vZGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFcnJvck5vZGU7XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBUcmFuc3BhcmVudE5vZGUge1xuICBzdGF0aWMgZnJvbU5vZGVzQW5kUHJvZHVjdGlvbk5hbWUobm9kZXMsIHByb2R1Y3Rpb25OYW1lKSB7XG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHJhbnNwYXJlbnROb2RlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWwgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsL2FycmF5Jyk7XG5cbmNsYXNzIFRyYW5zcGFyZW50VGhlbktlZXBTZWNvbmROb2RlIHtcbiAgc3RhdGljIGZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSkge1xuICAgIG5vZGVzID0gYXJyYXlVdGlsLmtlZXBTZWNvbmQobm9kZXMpO1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZE5vZGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IHJlcXVpcmUoJy4uL3BhcnNlVHJlZS90ZXJtaW5hbE5vZGUnKTtcblxuY2xhc3MgVGVybWluYWxOb2RlIHtcbiAgY29uc3RydWN0b3Ioc2lnbmlmaWNhbnRUb2tlbiwgbGluZSkge1xuICAgIHRoaXMuc2lnbmlmaWNhbnRUb2tlbiA9IHNpZ25pZmljYW50VG9rZW47XG4gICAgdGhpcy5saW5lID0gbGluZTtcbiAgfVxuXG4gIGdldFNpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGdldExpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMubGluZTtcbiAgfVxuXG4gIGdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbigpIHtcbiAgICBjb25zdCBmaXJzdFNpZ25pZmljYW50VG9rZW4gPSB0aGlzLnNpZ25pZmljYW50VG9rZW47ICAvLy9cblxuICAgIHJldHVybiBmaXJzdFNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBnZXRMYXN0U2lnbmlmaWNhbnRUb2tlbigpIHtcbiAgICBjb25zdCBsYXN0U2lnbmlmaWNhbnRUb2tlbiA9IHRoaXMuc2lnbmlmaWNhbnRUb2tlbjsgIC8vL1xuXG4gICAgcmV0dXJuIGxhc3RTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0Rmlyc3RMaW5lKCkge1xuICAgIGNvbnN0IGZpcnN0TGluZSA9IHRoaXMubGluZTsgLy8vXG5cbiAgICByZXR1cm4gZmlyc3RMaW5lO1xuICB9XG5cbiAgZ2V0TGFzdExpbmUoKSB7XG4gICAgY29uc3QgbGFzdExpbmUgPSB0aGlzLmxpbmU7ICAvLy9cblxuICAgIHJldHVybiBsYXN0TGluZTtcbiAgfVxuICBcbiAgcGFyc2VUcmVlKGxpbmVzKSB7XG4gICAgY29uc3QgdGVybWluYWxOb2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIHRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IFRlcm1pbmFsTm9kZVBhcnNlVHJlZS5mcm9tVGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZSwgbGluZXMpLFxuICAgICAgICAgIHBhcnNlVHJlZSA9IHRlcm1pbmFsTm9kZVBhcnNlVHJlZTsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuLCBDbGFzcyA9IFRlcm1pbmFsTm9kZSkge1xuICAgIGNvbnN0IGxpbmUgPSBzaWduaWZpY2FudFRva2VuLmdldExpbmUoKSxcbiAgICAgICAgICB0ZXJtaW5hbE5vZGUgPSBuZXcgQ2xhc3Moc2lnbmlmaWNhbnRUb2tlbiwgbGluZSksXG4gICAgICAgICAgZXJyb3IgPSBmYWxzZTtcbiAgICBcbiAgICBzaWduaWZpY2FudFRva2VuLnNldEVycm9yKGVycm9yKTtcblxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXJtaW5hbE5vZGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uL3Rlcm1pbmFsJyksXG4gICAgICBFcHNpbG9uVGVybWluYWxOb2RlUGFyc2VUcmVlID0gcmVxdWlyZSgnLi4vLi4vcGFyc2VUcmVlL3Rlcm1pbmFsTm9kZS9lcHNpbG9uJyk7XG5cbmNsYXNzIEVwc2lsb25UZXJtaW5hbE5vZGUgZXh0ZW5kcyBUZXJtaW5hbE5vZGUge1xuICBnZXRDb250ZW50KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSAnzrUnO1xuICAgIFxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgcGFyc2VUcmVlKGxpbmVzKSB7XG4gICAgY29uc3QgZXBzaWxvblRlcm1pbmFsTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBlcHNpbG9uVGVybWluYWxOb2RlUGFyc2VUcmVlID0gRXBzaWxvblRlcm1pbmFsTm9kZVBhcnNlVHJlZS5mcm9tRXBzaWxvblRlcm1pbmFsTm9kZShlcHNpbG9uVGVybWluYWxOb2RlLCBsaW5lcyksXG4gICAgICAgICAgcGFyc2VUcmVlID0gZXBzaWxvblRlcm1pbmFsTm9kZVBhcnNlVHJlZTsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVwc2lsb25UZXJtaW5hbE5vZGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFBhcnNlVHJlZSB7XG4gIGNvbnN0cnVjdG9yKGxpbmVzKSB7XG4gICAgdGhpcy5saW5lcyA9IGxpbmVzO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgbGluZXMgPSB0aGlzLmxpbmVzLnNsaWNlKDApLCAgLy8vXG4gICAgICAgICAgcGFyc2VUcmVlID0gbmV3IFBhcnNlVHJlZShsaW5lcyk7XG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgZ2V0V2lkdGgoKSB7XG4gICAgbGV0IGxpbmVzTGVuZ3RoID0gdGhpcy5saW5lcy5sZW5ndGgsXG4gICAgICAgICAgd2lkdGggPSB1bmRlZmluZWQ7XG5cbiAgICBpZiAobGluZXNMZW5ndGggPT09IDApIHtcbiAgICAgIHdpZHRoID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbGFzdExpbmUgPSBsYXN0KHRoaXMubGluZXMpLFxuICAgICAgICAgICAgbGFzdExpbmVMZW5ndGggPSBsYXN0TGluZS5sZW5ndGg7XG5cbiAgICAgIHdpZHRoID0gbGFzdExpbmVMZW5ndGg7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiB3aWR0aDtcbiAgfVxuXG4gIGdldERlcHRoKCkge1xuICAgIGNvbnN0IGxpbmVzTGVuZ3RoID0gdGhpcy5saW5lcy5sZW5ndGgsXG4gICAgICAgICAgZGVwdGggPSBsaW5lc0xlbmd0aDsgIC8vL1xuXG4gICAgcmV0dXJuIGRlcHRoO1xuICB9XG5cbiAgZm9yRWFjaExpbmUoY2FsbGJhY2spIHtcbiAgICB0aGlzLmxpbmVzLmZvckVhY2goY2FsbGJhY2spO1xuICB9XG5cbiAgYXBwZW5kVG9Ub3AocGFyc2VUcmVlKSB7XG4gICAgcGFyc2VUcmVlLmZvckVhY2hMaW5lKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgIHRoaXMubGluZXMudW5zaGlmdChsaW5lKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgYXBwZW5kVG9MZWZ0KHBhcnNlVHJlZSkge1xuICAgIHBhcnNlVHJlZS5mb3JFYWNoTGluZShmdW5jdGlvbihsaW5lLCBpbmRleCkge1xuICAgICAgdGhpcy5saW5lc1tpbmRleF0gPSBsaW5lICsgdGhpcy5saW5lc1tpbmRleF07XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGFwcGVuZFRvUmlnaHQocGFyc2VUcmVlKSB7XG4gICAgcGFyc2VUcmVlLmZvckVhY2hMaW5lKGZ1bmN0aW9uKGxpbmUsIGluZGV4KSB7XG4gICAgICB0aGlzLmxpbmVzW2luZGV4XSA9IHRoaXMubGluZXNbaW5kZXhdICsgbGluZTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgYXBwZW5kVG9Cb3R0b20ocGFyc2VUcmVlKSB7XG4gICAgcGFyc2VUcmVlLmZvckVhY2hMaW5lKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgIHRoaXMubGluZXMucHVzaChsaW5lKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgYWRkVG9wTWFyZ2luKHRvcE1hcmdpbkRlcHRoKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgICAgdG9wTWFyZ2luV2lkdGggPSB3aWR0aCwgIC8vL1xuICAgICAgICAgIHRvcE1hcmdpblN0cmluZyA9IG1hcmdpblN0cmluZ0Zyb21NYXJnaW5XaWR0aCh0b3BNYXJnaW5XaWR0aCk7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdG9wTWFyZ2luRGVwdGg7IGluZGV4KyspIHtcbiAgICAgIHRoaXMubGluZXMudW5zaGlmdCh0b3BNYXJnaW5TdHJpbmcpO1xuICAgIH1cbiAgfVxuXG4gIGFkZExlZnRNYXJnaW4obGVmdE1hcmdpbldpZHRoKSB7XG4gICAgY29uc3QgbGVmdE1hcmdpblN0cmluZyA9IG1hcmdpblN0cmluZ0Zyb21NYXJnaW5XaWR0aChsZWZ0TWFyZ2luV2lkdGgpLFxuICAgICAgICAgIGxpbmVzTGVuZ3RoID0gdGhpcy5saW5lcy5sZW5ndGg7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGluZXNMZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHRoaXMubGluZXNbaW5kZXhdID0gbGVmdE1hcmdpblN0cmluZyArIHRoaXMubGluZXNbaW5kZXhdO1xuICAgIH1cbiAgfVxuXG4gIGFkZFJpZ2h0TWFyZ2luKHJpZ2h0TWFyZ2luV2lkdGgpIHtcbiAgICBjb25zdCByaWdodE1hcmdpblN0cmluZyA9IG1hcmdpblN0cmluZ0Zyb21NYXJnaW5XaWR0aChyaWdodE1hcmdpbldpZHRoKSxcbiAgICAgICAgICBsaW5lc0xlbmd0aCA9IHRoaXMubGluZXMubGVuZ3RoO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxpbmVzTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLmxpbmVzW2luZGV4XSA9IHRoaXMubGluZXNbaW5kZXhdICsgcmlnaHRNYXJnaW5TdHJpbmc7XG4gICAgfVxuICB9XG5cbiAgYWRkQm90dG9tTWFyZ2luKGJvdHRvbU1hcmdpbkRlcHRoKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgICAgYm90dG9tTWFyZ2luV2lkdGggPSB3aWR0aCwgIC8vL1xuICAgICAgICAgIGJvdHRvbU1hcmdpblN0cmluZyA9IG1hcmdpblN0cmluZ0Zyb21NYXJnaW5XaWR0aChib3R0b21NYXJnaW5XaWR0aCk7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYm90dG9tTWFyZ2luRGVwdGg7IGluZGV4KyspIHtcbiAgICAgIHRoaXMubGluZXMucHVzaChib3R0b21NYXJnaW5TdHJpbmcpO1xuICAgIH1cbiAgfVxuICBcbiAgcG9wTGluZSgpIHsgcmV0dXJuIHRoaXMubGluZXMucG9wKCk7IH1cbiAgXG4gIHNoaWZ0TGluZSgpIHsgcmV0dXJuIHRoaXMubGluZXMuc2hpZnQoKTsgfVxuICBcbiAgcHVzaExpbmUobGluZSkgeyB0aGlzLmxpbmVzLnB1c2gobGluZSk7IH1cbiAgXG4gIHVuc2hpZnRMaW5lKGxpbmUpIHsgdGhpcy5saW5lcy51bnNoaWZ0KGxpbmUpOyB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5saW5lcy5yZWR1Y2UoZnVuY3Rpb24oc3RyaW5nLCBsaW5lKSB7XG4gICAgICBzdHJpbmcgKz0gbGluZSArICdcXG4nO1xuXG4gICAgICByZXR1cm4gc3RyaW5nO1xuICAgIH0sICcnKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQYXJzZVRyZWU7XG5cbmZ1bmN0aW9uIGxhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdOyB9XG5cbmZ1bmN0aW9uIG1hcmdpblN0cmluZ0Zyb21NYXJnaW5XaWR0aChtYXJnaW5XaWR0aCwgc3BhY2VDaGFyYWN0ZXIpIHtcbiAgc3BhY2VDaGFyYWN0ZXIgPSBzcGFjZUNoYXJhY3RlciB8fCAnICc7XG5cbiAgbGV0IG1hcmdpblN0cmluZyA9ICcnO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBtYXJnaW5XaWR0aDsgaW5kZXgrKykge1xuICAgIG1hcmdpblN0cmluZyArPSBzcGFjZUNoYXJhY3RlcjtcbiAgfVxuXG4gIHJldHVybiBtYXJnaW5TdHJpbmc7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVtcHR5UGFyc2VUcmVlID0gcmVxdWlyZSgnLi9lbXB0eScpLFxuICAgICAgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSByZXF1aXJlKCcuL3ZlcnRpY2FsQnJhbmNoJyksXG4gICAgICBIb3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlID0gcmVxdWlyZSgnLi9ob3Jpem9udGFsQnJhbmNoJyk7XG5cbmNsYXNzIENoaWxkTm9kZXNQYXJzZVRyZWUgZXh0ZW5kcyBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSB7XG4gIHN0YXRpYyBmcm9tQ2hpbGROb2RlcyhjaGlsZE5vZGVzLCBsaW5lcykge1xuICAgIGNvbnN0IGNoaWxkTm9kZVBhcnNlVHJlZXMgPSBjaGlsZE5vZGVzLm1hcChmdW5jdGlvbihjaGlsZE5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZVBhcnNlVHJlZSA9IGNoaWxkTm9kZS5wYXJzZVRyZWUobGluZXMpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBjaGlsZE5vZGVQYXJzZVRyZWU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlc0xlbmd0aCA9IGNoaWxkTm9kZVBhcnNlVHJlZXMubGVuZ3RoO1xuICAgIFxuICAgIGxldCBmaXJzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSB1bmRlZmluZWQsXG4gICAgICAgIGxhc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gMCxcbiAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlc1dpZHRoID0gMCxcbiAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlc0RlcHRoID0gMDtcblxuICAgIGNoaWxkTm9kZVBhcnNlVHJlZXMuZm9yRWFjaChmdW5jdGlvbihjaGlsZE5vZGVQYXJzZVRyZWUsIGluZGV4KSB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVQYXJzZVRyZWVXaWR0aCA9IGNoaWxkTm9kZVBhcnNlVHJlZS5nZXRXaWR0aCgpLFxuICAgICAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlRGVwdGggPSBjaGlsZE5vZGVQYXJzZVRyZWUuZ2V0RGVwdGgoKTtcblxuICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0Q2hpbGROb2RlUGFyc2VUcmVlID0gY2hpbGROb2RlUGFyc2VUcmVlLFxuICAgICAgICAgICAgZmlyc3RDaGlsZE5vZGVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gZmlyc3RDaGlsZE5vZGVQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpO1xuXG4gICAgICAgIGZpcnN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IGZpcnN0Q2hpbGROb2RlUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbjtcbiAgICAgIH1cblxuICAgICAgaWYgKGluZGV4ID09PSBjaGlsZE5vZGVQYXJzZVRyZWVzTGVuZ3RoIC0gMSkge1xuICAgICAgICBjb25zdCBsYXN0Q2hpbGROb2RlUGFyc2VUcmVlID0gY2hpbGROb2RlUGFyc2VUcmVlLFxuICAgICAgICAgICAgbGFzdENoaWxkTm9kZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSBsYXN0Q2hpbGROb2RlUGFyc2VUcmVlLmdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKTtcblxuICAgICAgICBsYXN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiArPSBsYXN0Q2hpbGROb2RlUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbjtcbiAgICAgIH1cblxuICAgICAgaWYgKGluZGV4IDwgY2hpbGROb2RlUGFyc2VUcmVlc0xlbmd0aCAtIDEpIHtcbiAgICAgICAgbGFzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24gKz0gY2hpbGROb2RlUGFyc2VUcmVlV2lkdGg7XG4gICAgICAgIGxhc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uICs9IDE7XG5cbiAgICAgICAgY2hpbGROb2RlUGFyc2VUcmVlc1dpZHRoICs9IDE7XG4gICAgICB9XG5cbiAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZXNXaWR0aCArPSBjaGlsZE5vZGVQYXJzZVRyZWVXaWR0aDtcbiAgICAgIGNoaWxkTm9kZVBhcnNlVHJlZXNEZXB0aCA9IE1hdGgubWF4KGNoaWxkTm9kZVBhcnNlVHJlZXNEZXB0aCwgY2hpbGROb2RlUGFyc2VUcmVlRGVwdGgpO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgd2lkdGggPSBsYXN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiAtIGZpcnN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiArIDEsXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tV2lkdGgod2lkdGgpLFxuICAgICAgICAgIGhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUgPSBIb3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlLmZyb21XaWR0aCh3aWR0aCksXG4gICAgICAgICAgbGVmdE1hcmdpbldpZHRoID0gZmlyc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uLFxuICAgICAgICAgIHJpZ2h0TWFyZ2luV2lkdGggPSBjaGlsZE5vZGVQYXJzZVRyZWVzV2lkdGggLSB3aWR0aCAtIGxlZnRNYXJnaW5XaWR0aDtcblxuICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmFkZExlZnRNYXJnaW4obGVmdE1hcmdpbldpZHRoKTtcbiAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5hZGRSaWdodE1hcmdpbihyaWdodE1hcmdpbldpZHRoKTtcbiAgICBob3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlLmFkZExlZnRNYXJnaW4obGVmdE1hcmdpbldpZHRoKTtcbiAgICBob3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlLmFkZFJpZ2h0TWFyZ2luKHJpZ2h0TWFyZ2luV2lkdGgpO1xuICAgIFxuICAgIGNvbnN0IHZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5nZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCksXG4gICAgICAgICAgY2hpbGROb2Rlc1BhcnNlVHJlZSA9IEVtcHR5UGFyc2VUcmVlLmZyb21EZXB0aChjaGlsZE5vZGVQYXJzZVRyZWVzRGVwdGgsIENoaWxkTm9kZXNQYXJzZVRyZWUsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pO1xuXG4gICAgY2hpbGROb2RlUGFyc2VUcmVlcy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkTm9kZVBhcnNlVHJlZSwgaW5kZXgpIHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZVBhcnNlVHJlZURlcHRoID0gY2hpbGROb2RlUGFyc2VUcmVlLmdldERlcHRoKCksXG4gICAgICAgICAgICBjbG9uZWRDaGlsZE5vZGVQYXJzZVRyZWUgPSBjaGlsZE5vZGVQYXJzZVRyZWUuY2xvbmUoKTtcblxuICAgICAgaWYgKGluZGV4IDwgY2hpbGROb2RlUGFyc2VUcmVlc0xlbmd0aCAtIDEpIHtcbiAgICAgICAgY29uc3QgcmlnaHRNYXJnaW5XaWR0aCA9IDE7XG5cbiAgICAgICAgY2xvbmVkQ2hpbGROb2RlUGFyc2VUcmVlLmFkZFJpZ2h0TWFyZ2luKHJpZ2h0TWFyZ2luV2lkdGgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2hpbGROb2RlUGFyc2VUcmVlRGVwdGggPCBjaGlsZE5vZGVQYXJzZVRyZWVzRGVwdGgpIHtcbiAgICAgICAgY29uc3QgYm90dG9tTWFyZ2luRGVwdGggPSBjaGlsZE5vZGVQYXJzZVRyZWVzRGVwdGggLSBjaGlsZE5vZGVQYXJzZVRyZWVEZXB0aDtcblxuICAgICAgICBjbG9uZWRDaGlsZE5vZGVQYXJzZVRyZWUuYWRkQm90dG9tTWFyZ2luKGJvdHRvbU1hcmdpbkRlcHRoKTtcbiAgICAgIH1cblxuICAgICAgY2hpbGROb2Rlc1BhcnNlVHJlZS5hcHBlbmRUb1JpZ2h0KGNsb25lZENoaWxkTm9kZVBhcnNlVHJlZSk7XG4gICAgfSk7XG5cbiAgICBjaGlsZE5vZGVzUGFyc2VUcmVlLmFwcGVuZFRvVG9wKGhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUpO1xuICAgIGNoaWxkTm9kZXNQYXJzZVRyZWUuYXBwZW5kVG9Ub3AodmVydGljYWxCcmFuY2hQYXJzZVRyZWUpO1xuXG4gICAgcmV0dXJuIGNoaWxkTm9kZXNQYXJzZVRyZWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDaGlsZE5vZGVzUGFyc2VUcmVlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBQYXJzZVRyZWUgPSByZXF1aXJlKCcuLi9wYXJzZVRyZWUnKTtcblxuY2xhc3MgRW1wdHlQYXJzZVRyZWUgZXh0ZW5kcyBQYXJzZVRyZWUge1xuICBzdGF0aWMgZnJvbURlcHRoKGRlcHRoLCBDbGFzcywgLi4uYXJncykge1xuICAgIENsYXNzID0gQ2xhc3MgfHwgRW1wdHlQYXJzZVRyZWU7XG4gICAgXG4gICAgY29uc3QgbGluZXMgPSBbXTtcbiAgICBcbiAgICBsZXQgaW5kZXggPSAwO1xuXG4gICAgd2hpbGUgKGluZGV4IDwgZGVwdGgpIHtcbiAgICAgIGxpbmVzW2luZGV4KytdID0gJyc7XG4gICAgfVxuXG4gICAgYXJncy51bnNoaWZ0KGxpbmVzKTtcbiAgICBhcmdzLnVuc2hpZnQobnVsbCk7XG5cbiAgICBjb25zdCBlbXB0eVBhcnNlVHJlZSA9IG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoQ2xhc3MsIGFyZ3MpKTsgIC8vL1xuXG4gICAgcmV0dXJuIGVtcHR5UGFyc2VUcmVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRW1wdHlQYXJzZVRyZWU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFBhcnNlVHJlZSA9IHJlcXVpcmUoJy4uL3BhcnNlVHJlZScpO1xuXG5jbGFzcyBIb3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlIGV4dGVuZHMgUGFyc2VUcmVlIHtcbiAgc3RhdGljIGZyb21XaWR0aCh3aWR0aCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHN0cmluZ0Zyb21DaGFyYWN0ZXJzV2lkdGgod2lkdGgsICctJyksXG4gICAgICAgICAgbGluZSA9IHN0cmluZywgLy8vXG4gICAgICAgICAgbGluZXMgPSBbbGluZV0sXG4gICAgICAgICAgaG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZSA9IG5ldyBIb3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlKGxpbmVzKTtcblxuICAgIHJldHVybiBob3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZTtcblxuZnVuY3Rpb24gc3RyaW5nRnJvbUNoYXJhY3RlcnNXaWR0aChjaGFyYWN0ZXJzV2lkdGgsIGNoYXJhY3Rlcikge1xuICBsZXQgc3RyaW5nID0gJyc7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNoYXJhY3RlcnNXaWR0aDsgaW5kZXgrKykge1xuICAgIHN0cmluZyArPSBjaGFyYWN0ZXI7XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbXB0eVBhcnNlVHJlZSA9IHJlcXVpcmUoJy4vZW1wdHknKSxcbiAgICAgIENoaWxkTm9kZXNQYXJzZVRyZWUgPSByZXF1aXJlKCcuL2NoaWxkTm9kZXMnKSxcbiAgICAgIFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gcmVxdWlyZSgnLi92ZXJ0aWNhbEJyYW5jaCcpLFxuICAgICAgUHJvZHVjdGlvbk5hbWVQYXJzZVRyZWUgPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb25OYW1lJyk7XG5cbmNsYXNzIE5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSBleHRlbmRzIFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIHtcbiAgc3RhdGljIGZyb21Ob25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBsaW5lcykge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgY2hpbGROb2RlID0gZmlyc3RDaGlsZE5vZGUsXG4gICAgICAgICAgY2hpbGROb2Rlc0xlbmd0aCA9IGNoaWxkTm9kZXMubGVuZ3RoLFxuICAgICAgICAgIGNoaWxkTm9kZU9yTm9kZXNQYXJzZVRyZWUgPSAoY2hpbGROb2Rlc0xlbmd0aCA9PT0gMSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkTm9kZS5wYXJzZVRyZWUobGluZXMpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENoaWxkTm9kZXNQYXJzZVRyZWUuZnJvbUNoaWxkTm9kZXMoY2hpbGROb2RlcywgbGluZXMpLFxuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlID0gUHJvZHVjdGlvbk5hbWVQYXJzZVRyZWUuZnJvbU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIGxpbmVzKTtcbiAgICBcbiAgICBsZXQgcHJvZHVjdGlvbk5hbWVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gcHJvZHVjdGlvbk5hbWVQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpO1xuICAgIFxuICAgIGNvbnN0IGNoaWxkTm9kZU9yTm9kZXNQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gY2hpbGROb2RlT3JOb2Rlc1BhcnNlVHJlZS5nZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCksXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQb3NpdGlvbnNEaWZmZXJlbmNlID0gcHJvZHVjdGlvbk5hbWVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIC0gY2hpbGROb2RlT3JOb2Rlc1BhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb247XG4gICAgXG4gICAgbGV0IGxlZnRNYXJnaW5XaWR0aCA9IHVuZGVmaW5lZDtcblxuICAgIGlmIChmYWxzZSkge1xuXG4gICAgfSBlbHNlIGlmICh2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uc0RpZmZlcmVuY2UgPCAwKSB7XG4gICAgICBsZWZ0TWFyZ2luV2lkdGggPSAtdmVydGljYWxCcmFuY2hQb3NpdGlvbnNEaWZmZXJlbmNlO1xuXG4gICAgICBwcm9kdWN0aW9uTmFtZVBhcnNlVHJlZS5hZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCk7XG4gICAgfSBlbHNlIGlmICh2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uc0RpZmZlcmVuY2UgPiAwKSB7XG4gICAgICBsZWZ0TWFyZ2luV2lkdGggPSArdmVydGljYWxCcmFuY2hQb3NpdGlvbnNEaWZmZXJlbmNlO1xuXG4gICAgICBjaGlsZE5vZGVPck5vZGVzUGFyc2VUcmVlLmFkZExlZnRNYXJnaW4obGVmdE1hcmdpbldpZHRoKTtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9kdWN0aW9uTmFtZVBhcnNlVHJlZVdpZHRoID0gcHJvZHVjdGlvbk5hbWVQYXJzZVRyZWUuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBjaGlsZE5vZGVPck5vZGVzUGFyc2VUcmVlV2lkdGggPSBjaGlsZE5vZGVPck5vZGVzUGFyc2VUcmVlLmdldFdpZHRoKCksXG4gICAgICAgICAgd2lkdGhzRGlmZmVyZW5jZSA9IHByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlV2lkdGggLSBjaGlsZE5vZGVPck5vZGVzUGFyc2VUcmVlV2lkdGg7XG4gICAgXG4gICAgbGV0IHJpZ2h0TWFyZ2luV2lkdGggPSB1bmRlZmluZWQ7XG5cbiAgICBpZiAoZmFsc2UpIHtcblxuICAgIH0gZWxzZSBpZiAod2lkdGhzRGlmZmVyZW5jZSA8IDApIHtcbiAgICAgIHJpZ2h0TWFyZ2luV2lkdGggPSAtd2lkdGhzRGlmZmVyZW5jZTtcbiAgICAgIFxuICAgICAgcHJvZHVjdGlvbk5hbWVQYXJzZVRyZWUuYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCk7XG4gICAgfSBlbHNlIGlmICh3aWR0aHNEaWZmZXJlbmNlID4gMCkge1xuICAgICAgcmlnaHRNYXJnaW5XaWR0aCA9ICt3aWR0aHNEaWZmZXJlbmNlO1xuXG4gICAgICBjaGlsZE5vZGVPck5vZGVzUGFyc2VUcmVlLmFkZFJpZ2h0TWFyZ2luKHJpZ2h0TWFyZ2luV2lkdGgpO1xuICAgIH1cblxuICAgIHByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IHByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlLmdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKTtcblxuICAgIGNvbnN0IHByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlRGVwdGggPSBwcm9kdWN0aW9uTmFtZVBhcnNlVHJlZS5nZXREZXB0aCgpLFxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZURlcHRoID0gcHJvZHVjdGlvbk5hbWVQYXJzZVRyZWVEZXB0aCwgLy8vXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IHByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbiwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlUGFyc2VUcmVlID0gRW1wdHlQYXJzZVRyZWUuZnJvbURlcHRoKG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZURlcHRoLCBOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWUsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pO1xuXG4gICAgbm9uVGVybWluYWxOb2RlUGFyc2VUcmVlLmFwcGVuZFRvUmlnaHQocHJvZHVjdGlvbk5hbWVQYXJzZVRyZWUpO1xuICAgIG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZS5hcHBlbmRUb0JvdHRvbShjaGlsZE5vZGVPck5vZGVzUGFyc2VUcmVlKTtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb25UZXJtaW5hbE5vZGVQYXJzZVRyZWU7XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IHJlcXVpcmUoJy4vdmVydGljYWxCcmFuY2gnKTtcblxuY2xhc3MgUHJvZHVjdGlvbk5hbWVQYXJzZVRyZWUgZXh0ZW5kcyBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSB7XG4gIHN0YXRpYyBmcm9tTm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgbGluZXMpIHtcbiAgICBjb25zdCBwcm9kdWN0aW9uTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRQcm9kdWN0aW9uTmFtZSgpLFxuICAgICAgICAgIGZpcnN0TGluZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRGaXJzdExpbmUoKSxcbiAgICAgICAgICBsYXN0TGluZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRMYXN0TGluZSgpLFxuICAgICAgICAgIGZpcnN0TGluZUluZGV4ID0gbGluZXMuaW5kZXhPZihmaXJzdExpbmUpLFxuICAgICAgICAgIGxhc3RMaW5lSW5kZXggPSBsaW5lcy5pbmRleE9mKGxhc3RMaW5lKSxcbiAgICAgICAgICBmaXJzdExpbmVOdW1iZXIgPSBmaXJzdExpbmVJbmRleCArIDEsXG4gICAgICAgICAgbGFzdExpbmVOdW1iZXIgPSBsYXN0TGluZUluZGV4ICsgMSxcbiAgICAgICAgICBzdHJpbmcgPSBgJHtwcm9kdWN0aW9uTmFtZX0gKCR7Zmlyc3RMaW5lTnVtYmVyfS0ke2xhc3RMaW5lTnVtYmVyfSlgLFxuICAgICAgICAgIHN0cmluZ0xlbmd0aCA9IHN0cmluZy5sZW5ndGgsXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWVXaWR0aCA9IHN0cmluZ0xlbmd0aCwgLy8vXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tV2lkdGgodmVydGljYWxCcmFuY2hQYXJzZVRyZWVXaWR0aCksXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKSxcbiAgICAgICAgICBwcm9kdWN0aW9uTmFtZVBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21TdHJpbmcoc3RyaW5nLCBQcm9kdWN0aW9uTmFtZVBhcnNlVHJlZSwgdmVydGljYWxCcmFuY2hQb3NpdGlvbik7XG5cbiAgICBwcm9kdWN0aW9uTmFtZVBhcnNlVHJlZS5hcHBlbmRUb1RvcCh2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSk7XG5cbiAgICByZXR1cm4gcHJvZHVjdGlvbk5hbWVQYXJzZVRyZWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9kdWN0aW9uTmFtZVBhcnNlVHJlZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSByZXF1aXJlKCcuL3ZlcnRpY2FsQnJhbmNoJyk7XG5cbmNsYXNzIFRlcm1pbmFsTm9kZVBhcnNlVHJlZSBleHRlbmRzIFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIHtcbiAgc3RhdGljIGZyb21UZXJtaW5hbE5vZGUodGVybWluYWxOb2RlLCBsaW5lcykge1xuICAgIGNvbnN0IGxpbmUgPSB0ZXJtaW5hbE5vZGUuZ2V0TGluZSgpLFxuICAgICAgICAgIGxpbmVJbmRleCA9IGxpbmVzLmluZGV4T2YobGluZSksXG4gICAgICAgICAgbGluZU51bWJlciA9IGxpbmVJbmRleCArIDEsXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IHRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGUgPSBzaWduaWZpY2FudFRva2VuLmdldFR5cGUoKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuRXJyb3IgPSBzaWduaWZpY2FudFRva2VuLmdldEVycm9yKCksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbkNvbnRlbnQgPSBzaWduaWZpY2FudFRva2VuLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBjb250ZW50ID0gc2lnbmlmaWNhbnRUb2tlbkNvbnRlbnQsXG4gICAgICAgICAgZGVzY3JpcHRpb24gPSAoc2lnbmlmaWNhbnRUb2tlbkVycm9yID09PSB0cnVlKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICdlcnJvcicgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlLFxuICAgICAgICAgIHN0cmluZyA9IGAke2NvbnRlbnR9WyR7ZGVzY3JpcHRpb259XSAoJHtsaW5lTnVtYmVyfSlgLFxuICAgICAgICAgIHN0cmluZ0xlbmd0aCA9IHN0cmluZy5sZW5ndGgsXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWVXaWR0aCA9IHN0cmluZ0xlbmd0aCwgLy8vXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tV2lkdGgodmVydGljYWxCcmFuY2hQYXJzZVRyZWVXaWR0aCksXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKSwgXG4gICAgICAgICAgdGVybWluYWxOb2RlUGFyc2VUcmVlID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZnJvbVN0cmluZyhzdHJpbmcsIFRlcm1pbmFsTm9kZVBhcnNlVHJlZSwgdmVydGljYWxCcmFuY2hQb3NpdGlvbik7XG4gICAgXG4gICAgdGVybWluYWxOb2RlUGFyc2VUcmVlLmFwcGVuZFRvVG9wKHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlKTtcblxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGVQYXJzZVRyZWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXJtaW5hbE5vZGVQYXJzZVRyZWU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gcmVxdWlyZSgnLi4vdmVydGljYWxCcmFuY2gnKTtcblxuY2xhc3MgRXBzaWxvblRlcm1pbmFsTm9kZVBhcnNlVHJlZSBleHRlbmRzIFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIHtcbiAgc3RhdGljIGZyb21FcHNpbG9uVGVybWluYWxOb2RlKGVwc2lsb25UZXJtaW5hbE5vZGUsIGxpbmVzKSB7XG4gICAgY29uc3QgY29udGVudCA9IGVwc2lsb25UZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHN0cmluZyA9IGAke2NvbnRlbnR9YCxcbiAgICAgICAgICBzdHJpbmdMZW5ndGggPSBzdHJpbmcubGVuZ3RoLFxuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGggPSBzdHJpbmdMZW5ndGgsIC8vL1xuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZnJvbVdpZHRoKHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGgpLFxuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5nZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCksIFxuICAgICAgICAgIHRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21TdHJpbmcoc3RyaW5nLCBFcHNpbG9uVGVybWluYWxOb2RlUGFyc2VUcmVlLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKTtcbiAgICBcbiAgICB0ZXJtaW5hbE5vZGVQYXJzZVRyZWUuYXBwZW5kVG9Ub3AodmVydGljYWxCcmFuY2hQYXJzZVRyZWUpO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZVBhcnNlVHJlZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVwc2lsb25UZXJtaW5hbE5vZGVQYXJzZVRyZWU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFBhcnNlVHJlZSA9IHJlcXVpcmUoJy4uL3BhcnNlVHJlZScpO1xuXG5jbGFzcyBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSBleHRlbmRzIFBhcnNlVHJlZSB7XG4gIGNvbnN0cnVjdG9yKGxpbmVzLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKSB7XG4gICAgc3VwZXIobGluZXMpO1xuICAgIFxuICAgIHRoaXMudmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IHZlcnRpY2FsQnJhbmNoUG9zaXRpb247XG4gIH1cbiAgXG4gIGdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGljYWxCcmFuY2hQb3NpdGlvbjtcbiAgfVxuXG4gIGFkZExlZnRNYXJnaW4obGVmdE1hcmdpbldpZHRoKSB7XG4gICAgc3VwZXIuYWRkTGVmdE1hcmdpbihsZWZ0TWFyZ2luV2lkdGgpO1xuXG4gICAgdGhpcy52ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uICs9IGxlZnRNYXJnaW5XaWR0aDsgLy8vXG4gIH1cblxuICBzdGF0aWMgZnJvbVdpZHRoKHdpZHRoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gJ3wnLFxuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSAwLFxuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZnJvbVN0cmluZyhzdHJpbmcsIFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKSxcbiAgICAgICAgICBsZWZ0TWFyZ2luV2lkdGggPSBNYXRoLmZsb29yKHdpZHRoLzIpLFxuICAgICAgICAgIHJpZ2h0TWFyZ2luV2lkdGggPSB3aWR0aCAtIGxlZnRNYXJnaW5XaWR0aCAtIDE7XG5cbiAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5hZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCk7XG4gICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCk7XG5cbiAgICByZXR1cm4gdmVydGljYWxCcmFuY2hQYXJzZVRyZWU7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tU3RyaW5nKHN0cmluZywgQ2xhc3MsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pIHtcbiAgICBDbGFzcyA9IENsYXNzIHx8IFBhcnNlVHJlZTtcblxuICAgIGNvbnN0IGxpbmUgPSBzdHJpbmcsIC8vL1xuICAgICAgICAgIGxpbmVzID0gW2xpbmVdLFxuICAgICAgICAgIGFyZ3MgPSBbbnVsbCwgbGluZXMsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb25dLFxuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShDbGFzcywgYXJncykpOyAgLy8vXG5cbiAgICByZXR1cm4gdmVydGljYWxCcmFuY2hQYXJzZVRyZWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ29udGV4dCA9IHJlcXVpcmUoJy4vY29udGV4dCcpLFxuICAgICAgcGFyc2VyVXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwvcGFyc2VyJyk7XG5cbmNsYXNzIENvbW1vblBhcnNlciB7XG4gIGNvbnN0cnVjdG9yKHByb2R1Y3Rpb25zKSB7XG4gICAgcHJvZHVjdGlvbnMgPSBwYXJzZXJVdGlsLmVsaW1pbmF0ZUN5Y2xlcyhwcm9kdWN0aW9ucyk7IC8vL1xuXG4gICAgcHJvZHVjdGlvbnMgPSBwYXJzZXJVdGlsLmVsaW1pbmF0ZUxlZnRSZWN1cnNpb24ocHJvZHVjdGlvbnMpOyAvLy9cblxuICAgIHRoaXMucHJvZHVjdGlvbnMgPSBwcm9kdWN0aW9ucztcbiAgfVxuXG4gIGdldFByb2R1Y3Rpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnByb2R1Y3Rpb25zO1xuICB9XG4gIFxuICBub2RlRnJvbUxpbmVzKGxpbmVzLCBwcm9kdWN0aW9uID0gbnVsbCkge1xuICAgIGNvbnN0IHRva2VucyA9IHBhcnNlclV0aWwudG9rZW5zRnJvbUxpbmVzKGxpbmVzKSxcbiAgICAgICAgICBub2RlID0gdGhpcy5wYXJzZSh0b2tlbnMsIHByb2R1Y3Rpb24pO1xuICAgIFxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgcGFyc2UodG9rZW5zLCBwcm9kdWN0aW9uKSB7XG4gICAgbGV0IG5vZGUgPSBudWxsO1xuXG4gICAgaWYgKHByb2R1Y3Rpb24gPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHByb2R1Y3Rpb25zTGVuZ3RoID0gdGhpcy5wcm9kdWN0aW9ucy5sZW5ndGg7XG5cbiAgICAgIGlmIChwcm9kdWN0aW9uc0xlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgZmlyc3RQcm9kdWN0aW9uID0gZmlyc3QodGhpcy5wcm9kdWN0aW9ucyk7XG5cbiAgICAgICAgcHJvZHVjdGlvbiA9IGZpcnN0UHJvZHVjdGlvbjsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHByb2R1Y3Rpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBuZXcgQ29udGV4dCh0b2tlbnMsIHRoaXMucHJvZHVjdGlvbnMpLFxuICAgICAgICAgICAgbm9XaGl0ZXNwYWNlID0gZmFsc2UsXG4gICAgICAgICAgICBub2RlT3JOb2RlcyA9IHByb2R1Y3Rpb24ucGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKTtcblxuICAgICAgaWYgKG5vZGVPck5vZGVzICE9PSBudWxsKSB7XG4gICAgICAgIG5vZGUgPSAobm9kZU9yTm9kZXMgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgICAgICBmaXJzdChub2RlT3JOb2RlcykgOlxuICAgICAgICAgICAgICAgICAgIG5vZGVPck5vZGVzO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgZmluZFByb2R1Y3Rpb24ocHJvZHVjdGlvbk5hbWUpIHtcbiAgICBjb25zdCBuYW1lID0gcHJvZHVjdGlvbk5hbWUsICAvLy9cbiAgICAgICAgICBpbmRleCA9IHRoaXMuaW5kZXhPZlByb2R1Y3Rpb25CeU5hbWUobmFtZSksXG4gICAgICAgICAgcHJvZHVjdGlvbiA9IChpbmRleCAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdGlvbnNbaW5kZXhdIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgICByZXR1cm4gcHJvZHVjdGlvbjtcbiAgfVxuXG4gIGluZGV4T2ZQcm9kdWN0aW9uQnlOYW1lKG5hbWUpIHtcbiAgICBsZXQgaW5kZXgsXG4gICAgICAgIGZvdW5kSW5kZXggPSBudWxsO1xuXG4gICAgdGhpcy5wcm9kdWN0aW9ucy5zb21lKGZ1bmN0aW9uKHByb2R1Y3Rpb24sIGluZGV4KSB7XG4gICAgICBjb25zdCBwcm9kdWN0aW9uTmFtZSA9IHByb2R1Y3Rpb24uZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAocHJvZHVjdGlvbk5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgZm91bmRJbmRleCA9IGluZGV4O1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaW5kZXggPSBmb3VuZEluZGV4OyAvLy9cblxuICAgIHJldHVybiBpbmRleDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1vblBhcnNlcjtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCB7IHNwZWNpYWxTeW1ib2xzLCBFbmRPZkxpbmVUb2tlbiB9ID0gbGV4ZXJzO1xuXG5jb25zdCBUZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi9ub2RlL3Rlcm1pbmFsJyk7XG5cbmNsYXNzIEVuZE9mTGluZVBhcnQge1xuICBjb25zdHJ1Y3Rvcihub1doaXRlc3BhY2UpIHtcbiAgICB0aGlzLm5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZTtcbiAgfVxuICBcbiAgcGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlIHx8IHRoaXMubm9XaGl0ZXNwYWNlOyAvLy9cblxuICAgIGxldCB0ZXJtaW5hbE5vZGUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBjb250ZXh0LnNhdmVkSW5kZXgoKSxcbiAgICAgICAgICBuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4gPSBjb250ZXh0LmdldE5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbihub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW47IC8vL1xuXG4gICAgaWYgKHNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHR5cGUgPSBzaWduaWZpY2FudFRva2VuLmdldFR5cGUoKSxcbiAgICAgICAgICAgIGZvdW5kID0gKHR5cGUgPT09IEVuZE9mTGluZVRva2VuLnR5cGUpO1xuXG4gICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgdGVybWluYWxOb2RlID0gVGVybWluYWxOb2RlLmZyb21TaWduaWZpY2FudFRva2VuKHNpZ25pZmljYW50VG9rZW4pO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBpZiAodGVybWluYWxOb2RlID09PSBudWxsKSB7XG4gICAgICBjb250ZXh0LmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybWluYWxOb2RlO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gJzxFTkRfT0ZfTElORT4nO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ltYm9sKHN5bWJvbCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpIHtcbiAgICBsZXQgZW5kT2ZMaW5lUGFydCA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgZm91bmQgPSAoc3ltYm9sID09PSBzcGVjaWFsU3ltYm9scy5FTkRfT0ZfTElORSk7XG5cbiAgICBpZiAoZm91bmQpIHtcbiAgICAgIGVuZE9mTGluZVBhcnQgPSBuZXcgRW5kT2ZMaW5lUGFydChub1doaXRlc3BhY2UpO1xuICAgIH1cblxuICAgIHJldHVybiBlbmRPZkxpbmVQYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRW5kT2ZMaW5lUGFydDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRXBzaWxvblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvdGVybWluYWwvZXBzaWxvbicpO1xuXG5jbGFzcyBFcHNpbG9uUGFydCB7XG4gIHBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSkge1xuICAgIGNvbnN0IGVwc2lsb25UZXJtaW5hbE5vZGUgPSBuZXcgRXBzaWxvblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgcmV0dXJuIGVwc2lsb25UZXJtaW5hbE5vZGU7XG4gIH1cbiAgXG4gIHRvU3RyaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9ICfOtSc7XG4gICAgXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ltYm9sKHN5bWJvbCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpIHtcbiAgICBsZXQgIGVwc2lsb25QYXJ0ID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBmb3VuZCA9IChzeW1ib2wgPT09ICfOtScpO1xuICAgIFxuICAgIGlmIChmb3VuZCkge1xuICAgICAgZXBzaWxvblBhcnQgPSBuZXcgRXBzaWxvblBhcnQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXBzaWxvblBhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFcHNpbG9uUGFydDsiLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSByZXF1aXJlKCcuL3NlcXVlbmNlT2ZQYXJ0cycpLFxuICAgICAgWmVyb09yTW9yZVBhcnRzUGFydCA9IHJlcXVpcmUoJy4vemVyb09yTW9yZVBhcnRzJyk7XG5cbmNsYXNzIE9uZU9yTW9yZVBhcnRzUGFydCBleHRlbmRzIFNlcXVlbmNlT2ZQYXJ0c1BhcnQge1xuICBwYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpIHtcbiAgICBub1doaXRlc3BhY2UgPSB0aGlzLmdldE5vV2hpdGVzcGFjZSgpOyAgLy8vXG5cbiAgICBsZXQgbm9kZXMgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHByb2R1Y3Rpb25zID0gY29udGV4dC5nZXRQcm9kdWN0aW9ucygpLFxuICAgICAgICAgIHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbiA9IHRoaXMuZ2V0VGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uKHByb2R1Y3Rpb25zKTtcblxuICAgIGlmICh0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbk5vZGVPck5vZGVzID0gdGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uLnBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgICB0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb25QYXJzZWQgPSAodGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uTm9kZU9yTm9kZXMgIT09IG51bGwpO1xuXG4gICAgICBpZiAodGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uUGFyc2VkKSB7XG4gICAgICAgIG5vZGVzID0gKHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbk5vZGVPck5vZGVzIGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgICAgICAgIHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbk5vZGVPck5vZGVzIDpcbiAgICAgICAgICAgICAgICAgICAgW3Rlcm1pbmFsUGFydE9yUHJvZHVjdGlvbk5vZGVPck5vZGVzXTtcblxuICAgICAgICBjb25zdCB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gWmVyb09yTW9yZVBhcnRzUGFydC5mcm9tT25lT3JNb3JlUGFydHNQYXJ0KHRoaXMpLCAvLy9cbiAgICAgICAgICAgICAgemVyb09yTW9yZVBhcnRzUGFydE5vZGVPck5vZGVzID0gemVyb09yTW9yZVBhcnRzUGFydC5wYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpO1xuXG4gICAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KHplcm9Pck1vcmVQYXJ0c1BhcnROb2RlT3JOb2Rlcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgY29uc3Qgb3BlcmF0b3JTdHJpbmcgPSAnKycsXG4gICAgICAgICAgc3RyaW5nID0gc3VwZXIudG9TdHJpbmcob3BlcmF0b3JTdHJpbmcpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ltYm9sKHN5bWJvbCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpIHtcbiAgICBjb25zdCByZWdFeHAgPSAvKFteKl0rKVxcKyQvLFxuICAgICAgICAgIENsYXNzID0gT25lT3JNb3JlUGFydHNQYXJ0LFxuICAgICAgICAgIG9uZU9yTW9yZVBhcnRzUGFydCA9IHN1cGVyLmZyb21TeW1ib2woc3ltYm9sLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSwgcmVnRXhwLCBDbGFzcyk7XG5cbiAgICByZXR1cm4gb25lT3JNb3JlUGFydHNQYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT25lT3JNb3JlUGFydHNQYXJ0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBTZXF1ZW5jZU9mUGFydHNQYXJ0ID0gcmVxdWlyZSgnLi9zZXF1ZW5jZU9mUGFydHMnKTtcblxuY2xhc3MgT3B0aW9uYWxQYXJ0UGFydCBleHRlbmRzIFNlcXVlbmNlT2ZQYXJ0c1BhcnQge1xuICBwYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpIHtcbiAgICBub1doaXRlc3BhY2UgPSB0aGlzLmdldE5vV2hpdGVzcGFjZSgpOyAgLy8vXG5cbiAgICBsZXQgbm9kZXMgPSBbXTtcbiAgICBcbiAgICBjb25zdCBwcm9kdWN0aW9ucyA9IGNvbnRleHQuZ2V0UHJvZHVjdGlvbnMoKSxcbiAgICAgICAgICB0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24gPSB0aGlzLmdldFRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbihwcm9kdWN0aW9ucyk7XG4gICAgXG4gICAgaWYgKHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uTm9kZU9yTm9kZXMgPSB0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24ucGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICAgIHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvblBhcnNlZCA9ICh0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb25Ob2RlT3JOb2RlcyAhPT0gbnVsbCk7XG5cbiAgICAgIGlmICh0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb25QYXJzZWQpIHtcbiAgICAgICAgbm9kZXMgPSB0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb25Ob2RlT3JOb2RlcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICBjb25zdCBvcGVyYXRvclN0cmluZyA9ICc/JyxcbiAgICAgICAgICBzdHJpbmcgPSBzdXBlci50b1N0cmluZyhvcGVyYXRvclN0cmluZyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSkge1xuICAgIGNvbnN0IHJlZ0V4cCA9IC8oW14qXSspXFw/JC8sXG4gICAgICAgICAgQ2xhc3MgPSBPcHRpb25hbFBhcnRQYXJ0LFxuICAgICAgICAgIG9wdGlvbmFsUGFydFBhcnQgPSBzdXBlci5mcm9tU3ltYm9sKHN5bWJvbCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UsIHJlZ0V4cCwgQ2xhc3MpO1xuXG4gICAgcmV0dXJuIG9wdGlvbmFsUGFydFBhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPcHRpb25hbFBhcnRQYXJ0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBQcm9kdWN0aW9uTmFtZVBhcnQge1xuICBjb25zdHJ1Y3Rvcihwcm9kdWN0aW9uTmFtZSwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgdGhpcy5wcm9kdWN0aW9uTmFtZSA9IHByb2R1Y3Rpb25OYW1lO1xuICAgIHRoaXMubm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlO1xuICB9XG4gIFxuICBnZXRQcm9kdWN0aW9uTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9kdWN0aW9uTmFtZTtcbiAgfVxuICBcbiAgaXNMZWZ0UmVjdXJzaXZlKHByb2R1Y3Rpb25OYW1lKSB7XG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZSA9ICh0aGlzLnByb2R1Y3Rpb25OYW1lID09PSBwcm9kdWN0aW9uTmFtZSk7XG4gICAgXG4gICAgcmV0dXJuIGxlZnRSZWN1cnNpdmU7XG4gIH1cbiAgXG4gIHBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSkge1xuICAgIG5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZSB8fCB0aGlzLm5vV2hpdGVzcGFjZTsgLy8vXG5cbiAgICBsZXQgbm9kZU9yTm9kZXMgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHByb2R1Y3Rpb25zID0gY29udGV4dC5nZXRQcm9kdWN0aW9ucygpLFxuICAgICAgICAgIHByb2R1Y3Rpb24gPSBQcm9kdWN0aW9uTmFtZVBhcnQuZmluZFByb2R1Y3Rpb24odGhpcy5wcm9kdWN0aW9uTmFtZSwgcHJvZHVjdGlvbnMpO1xuXG4gICAgaWYgKHByb2R1Y3Rpb24gIT09IG51bGwpIHtcbiAgICAgIG5vZGVPck5vZGVzID0gcHJvZHVjdGlvbi5wYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlT3JOb2RlcztcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMucHJvZHVjdGlvbk5hbWU7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZpbmRQcm9kdWN0aW9uKHByb2R1Y3Rpb25OYW1lLCBwcm9kdWN0aW9ucykge1xuICAgIGNvbnN0IG5hbWUgPSBwcm9kdWN0aW9uTmFtZTsgIC8vL1xuICAgIFxuICAgIGxldCBmb3VuZFByb2R1Y3Rpb24gPSBudWxsO1xuXG4gICAgcHJvZHVjdGlvbnMuc29tZShmdW5jdGlvbihwcm9kdWN0aW9uKSB7XG4gICAgICBjb25zdCBwcm9kdWN0aW9uTmFtZSA9IHByb2R1Y3Rpb24uZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAobmFtZSA9PT0gcHJvZHVjdGlvbk5hbWUpIHtcbiAgICAgICAgZm91bmRQcm9kdWN0aW9uID0gcHJvZHVjdGlvbjtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHByb2R1Y3Rpb24gPSBmb3VuZFByb2R1Y3Rpb247XG5cbiAgICByZXR1cm4gcHJvZHVjdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ltYm9sKHN5bWJvbCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpIHtcbiAgICBjb25zdCBwcm9kdWN0aW9uTmFtZSA9IHN5bWJvbCwgIC8vL1xuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUGFydCA9IG5ldyBQcm9kdWN0aW9uTmFtZVBhcnQocHJvZHVjdGlvbk5hbWUsIG5vV2hpdGVzcGFjZSk7XG4gIFxuICAgIHJldHVybiBwcm9kdWN0aW9uTmFtZVBhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9kdWN0aW9uTmFtZVBhcnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy9ub2RlL3Rlcm1pbmFsJyk7XG5cbmNsYXNzIFJlZ3VsYXJFeHByZXNzaW9uUGFydCB7XG4gIGNvbnN0cnVjdG9yKHJlZ0V4cCwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgdGhpcy5yZWdFeHAgPSByZWdFeHA7XG4gICAgdGhpcy5ub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2U7XG4gIH1cbiAgXG4gIHBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSkge1xuICAgIG5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZSB8fCB0aGlzLm5vV2hpdGVzcGFjZTsgLy8vXG5cbiAgICBsZXQgdGVybWluYWxOb2RlID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBzYXZlZEluZGV4ID0gY29udGV4dC5zYXZlZEluZGV4KCksXG4gICAgICAgICAgbmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuID0gY29udGV4dC5nZXROZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4obm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuID0gbmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuOyAvLy9cblxuICAgIGlmIChzaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRDb250ZW50KCksXG4gICAgICAgICAgICBtYXRjaGVzID0gY29udGVudC5tYXRjaCh0aGlzLnJlZ0V4cCk7XG5cbiAgICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKSxcbiAgICAgICAgICAgICAgcGFyc2VkID0gKGZpcnN0TWF0Y2ggPT09IGNvbnRlbnQpO1xuXG4gICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICB0ZXJtaW5hbE5vZGUgPSBUZXJtaW5hbE5vZGUuZnJvbVNpZ25pZmljYW50VG9rZW4oc2lnbmlmaWNhbnRUb2tlbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaWYgKHRlcm1pbmFsTm9kZSA9PT0gbnVsbCkge1xuICAgICAgY29udGV4dC5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIGNvbnN0IHJlZ0V4cFN0cmluZyA9IHRoaXMucmVnRXhwLnRvU3RyaW5nKCksXG4gICAgICAgICAgc3RyaW5nID0gcmVnRXhwU3RyaW5nOyAgLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN5bWJvbChzeW1ib2wsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbGV0IHJlZ3VsYXJFeHByZXNzaW9uUGFydCA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgcmVndWxhckV4cHJlc3Npb25QYXJ0UmVnRXhwID0gL15cXC8oW14vXSspXFwvJC8sXG4gICAgICAgICAgbWF0Y2hlcyA9IHN5bWJvbC5tYXRjaChyZWd1bGFyRXhwcmVzc2lvblBhcnRSZWdFeHApO1xuXG4gICAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICAgICAgcGF0dGVybiA9IHNlY29uZE1hdGNoLCAgLy8vXG4gICAgICAgICAgICByZWdFeHAgPSBuZXcgUmVnRXhwKHBhdHRlcm4pO1xuXG4gICAgICByZWd1bGFyRXhwcmVzc2lvblBhcnQgPSBuZXcgUmVndWxhckV4cHJlc3Npb25QYXJ0KHJlZ0V4cCwgbm9XaGl0ZXNwYWNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVndWxhckV4cHJlc3Npb25QYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVndWxhckV4cHJlc3Npb25QYXJ0O1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbmZ1bmN0aW9uIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRW5kT2ZMaW5lUGFydCA9IHJlcXVpcmUoJy4vZW5kT2ZMaW5lJyksXG4gICAgICBQcm9kdWN0aW9uTmFtZVBhcnQgPSByZXF1aXJlKCcuL3Byb2R1Y3Rpb25OYW1lJyksXG4gICAgICBUZXJtaW5hbFN5bWJvbFBhcnQgPSByZXF1aXJlKCcuL3Rlcm1pbmFsU3ltYm9sJyksXG4gICAgICBTaWduaWZpY2FudFRva2VuVHlwZVBhcnQgPSByZXF1aXJlKCcuL3NpZ25pZmljYW50VG9rZW5UeXBlJyk7XG5cbmNsYXNzIFNlcXVlbmNlT2ZQYXJ0c1BhcnQge1xuICBjb25zdHJ1Y3Rvcih0ZXJtaW5hbFBhcnQsIHByb2R1Y3Rpb25OYW1lLCBub1doaXRlc3BhY2UpIHtcbiAgICB0aGlzLnRlcm1pbmFsUGFydCA9IHRlcm1pbmFsUGFydDtcbiAgICB0aGlzLnByb2R1Y3Rpb25OYW1lID0gcHJvZHVjdGlvbk5hbWU7XG4gICAgdGhpcy5ub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2U7XG4gIH1cblxuICBnZXRUZXJtaW5hbFBhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybWluYWxQYXJ0O1xuICB9XG5cbiAgZ2V0UHJvZHVjdGlvbk5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvZHVjdGlvbk5hbWU7XG4gIH1cbiAgXG4gIGdldE5vV2hpdGVzcGFjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub1doaXRlc3BhY2U7XG4gIH1cblxuICBnZXRUZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24ocHJvZHVjdGlvbnMpIHtcbiAgICBjb25zdCBwcm9kdWN0aW9uID0gUHJvZHVjdGlvbk5hbWVQYXJ0LmZpbmRQcm9kdWN0aW9uKHRoaXMucHJvZHVjdGlvbk5hbWUsIHByb2R1Y3Rpb25zKSxcbiAgICAgICAgICB0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24gPSAodGhpcy50ZXJtaW5hbFBhcnQgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRlcm1pbmFsUGFydCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0aW9uO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbjtcbiAgfVxuXG4gIHRvU3RyaW5nKG9wZXJhdG9yU3RyaW5nKSB7XG4gICAgbGV0IHN0cmluZztcblxuICAgIGNvbnN0IHByb2R1Y3Rpb25OYW1lID0gdGhpcy5nZXRQcm9kdWN0aW9uTmFtZSgpO1xuXG4gICAgaWYgKHByb2R1Y3Rpb25OYW1lICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBgJHtwcm9kdWN0aW9uTmFtZX0ke29wZXJhdG9yU3RyaW5nfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsUGFydCA9IHRoaXMuZ2V0VGVybWluYWxQYXJ0KCksXG4gICAgICAgICAgdGVybWluYWxQYXJ0U3RyaW5nID0gdGVybWluYWxQYXJ0LnRvU3RyaW5nKCk7XG5cbiAgICAgIHN0cmluZyA9IGAke3Rlcm1pbmFsUGFydFN0cmluZ30ke29wZXJhdG9yU3RyaW5nfWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ltYm9sKHN5bWJvbCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UsIHJlZ0V4cCwgQ2xhc3MpIHtcbiAgICBsZXQgcGFydCA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgbWF0Y2hlcyA9IHN5bWJvbC5tYXRjaChyZWdFeHApO1xuXG4gICAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgICBzeW1ib2wgPSBzZWNvbmRNYXRjaDsgLy8vXG5cbiAgICAgIGNvbnN0IHRlcm1pbmFsUGFydCA9IFNpZ25pZmljYW50VG9rZW5UeXBlUGFydC5mcm9tU3ltYm9sKHN5bWJvbCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRlcm1pbmFsU3ltYm9sUGFydC5mcm9tU3ltYm9sKHN5bWJvbCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW5kT2ZMaW5lUGFydC5mcm9tU3ltYm9sKHN5bWJvbCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpLFxuICAgICAgICAgICAgcHJvZHVjdGlvbk5hbWUgPSBzeW1ib2w7XG5cbiAgICAgIHBhcnQgPSBuZXcgQ2xhc3ModGVybWluYWxQYXJ0LCBwcm9kdWN0aW9uTmFtZSwgbm9XaGl0ZXNwYWNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNlcXVlbmNlT2ZQYXJ0c1BhcnQ7XG5cbmZ1bmN0aW9uIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vbm9kZS90ZXJtaW5hbCcpO1xuXG5jbGFzcyBTaWduaWZpY2FudFRva2VuVHlwZVBhcnQge1xuICBjb25zdHJ1Y3RvcihzaWduaWZpY2FudFRva2VuVHlwZSwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgdGhpcy5zaWduaWZpY2FudFRva2VuVHlwZSA9IHNpZ25pZmljYW50VG9rZW5UeXBlO1xuICAgIHRoaXMubm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlO1xuICB9XG4gIFxuICBwYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpIHtcbiAgICBub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2UgfHwgdGhpcy5ub1doaXRlc3BhY2U7IC8vL1xuICAgIFxuICAgIGxldCB0ZXJtaW5hbE5vZGUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBjb250ZXh0LnNhdmVkSW5kZXgoKSxcbiAgICAgICAgICBuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4gPSBjb250ZXh0LmdldE5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbihub1doaXRlc3BhY2UpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW47IC8vL1xuXG4gICAgaWYgKHNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW5UeXBlID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRUeXBlKCksXG4gICAgICAgICAgICBwYXJzZWQgPSAoc2lnbmlmaWNhbnRUb2tlblR5cGUgPT09IHRoaXMuc2lnbmlmaWNhbnRUb2tlblR5cGUpOyAgLy8vXG5cbiAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgdGVybWluYWxOb2RlID0gVGVybWluYWxOb2RlLmZyb21TaWduaWZpY2FudFRva2VuKHNpZ25pZmljYW50VG9rZW4pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0ZXJtaW5hbE5vZGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGU7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBgWyR7dGhpcy5zaWduaWZpY2FudFRva2VuVHlwZX1dYDtcbiAgICBcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSkge1xuICAgIGxldCBzaWduaWZpY2FudFRva2VuVHlwZVBhcnQgPSBudWxsO1xuXG4gICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0UmVnRXhwID0gL15cXFsoW14vXSspXFxdJC8sXG4gICAgICAgIG1hdGNoZXMgPSBzeW1ib2wubWF0Y2goc2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0UmVnRXhwKTtcblxuICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICAgIHR5cGUgPSBzZWNvbmRNYXRjaCwgLy8vXG4gICAgICAgICAgICBmb3VuZFR5cGUgPSBzaWduaWZpY2FudFRva2VuVHlwZXMuZmluZChmdW5jdGlvbihzaWduaWZpY2FudFRva2VuVHlwZSkge1xuICAgICAgICAgICAgICBjb25zdCBmb3VuZCA9ICh0eXBlID09PSBzaWduaWZpY2FudFRva2VuVHlwZSk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGZvdW5kO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBmb3VuZCA9IChmb3VuZFR5cGUgIT09IHVuZGVmaW5lZCk7XG5cbiAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZVBhcnQgPSBuZXcgU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0KHR5cGUsIG5vV2hpdGVzcGFjZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW5UeXBlUGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNpZ25pZmljYW50VG9rZW5UeXBlUGFydDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vbm9kZS90ZXJtaW5hbCcpO1xuXG5jbGFzcyBUZXJtaW5hbFN5bWJvbFBhcnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZW50LCBub1doaXRlc3BhY2UpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgIHRoaXMubm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlO1xuICB9XG5cbiAgcGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlIHx8IHRoaXMubm9XaGl0ZXNwYWNlOyAvLy9cblxuICAgIGxldCB0ZXJtaW5hbE5vZGUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBjb250ZXh0LnNhdmVkSW5kZXgoKSxcbiAgICAgICAgbmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuID0gY29udGV4dC5nZXROZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4obm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IG5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbjsgLy8vXG5cbiAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29udGVudCA9IHNpZ25pZmljYW50VG9rZW4uZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgcGFyc2VkID0gKGNvbnRlbnQgPT09IHRoaXMuY29udGVudCk7XG5cbiAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgdGVybWluYWxOb2RlID0gVGVybWluYWxOb2RlLmZyb21TaWduaWZpY2FudFRva2VuKHNpZ25pZmljYW50VG9rZW4pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0ZXJtaW5hbE5vZGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGU7XG4gIH1cbiAgXG4gIHRvU3RyaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IGAnJHt0aGlzLmNvbnRlbnR9J2A7XG4gICAgXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ltYm9sKHN5bWJvbCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpIHtcbiAgICBsZXQgdGVybWluYWxTeW1ib2xQYXJ0ID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCB0ZXJtaW5hbFN5bWJvbFBhcnRSZWdFeHAgPSAvXicoW14nXSspJyQvLFxuICAgICAgICAgIG1hdGNoZXMgPSBzeW1ib2wubWF0Y2godGVybWluYWxTeW1ib2xQYXJ0UmVnRXhwKTtcblxuICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSwgICAgICBcbiAgICAgICAgICAgIGNvbnRlbnQgPSBzZWNvbmRNYXRjaDsgLy8vXG5cbiAgICAgIHRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQoY29udGVudCwgbm9XaGl0ZXNwYWNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybWluYWxTeW1ib2xQYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGVybWluYWxTeW1ib2xQYXJ0O1xuXG5mdW5jdGlvbiBzZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzFdOyB9XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvdGVybWluYWwnKTtcblxuY2xhc3MgV2lsZGNhcmRQYXJ0IHtcbiAgY29uc3RydWN0b3Iobm9XaGl0ZXNwYWNlKSB7XG4gICAgdGhpcy5ub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2U7XG4gIH1cblxuICBwYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpIHtcbiAgICBub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2UgfHwgdGhpcy5ub1doaXRlc3BhY2U7IC8vL1xuXG4gICAgbGV0IHRlcm1pbmFsTm9kZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IGNvbnRleHQuc2F2ZWRJbmRleCgpLFxuICAgICAgICAgIG5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbiA9IGNvbnRleHQuZ2V0TmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuKG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IG5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbjsgLy8vXG5cbiAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgdGVybWluYWxOb2RlID0gVGVybWluYWxOb2RlLmZyb21TaWduaWZpY2FudFRva2VuKHNpZ25pZmljYW50VG9rZW4pO1xuICAgIH1cblxuICAgIGlmICh0ZXJtaW5hbE5vZGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN5bWJvbChzeW1ib2wsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbGV0IHdpbGRjYXJkUGFydCA9IG51bGw7XG4gICAgXG4gICAgY29uc3Qgd2lsZGNhcmRQYXJ0UmVnRXhwID0gL15cXCokLyxcbiAgICAgICAgICBtYXRjaGVzID0gc3ltYm9sLm1hdGNoKHdpbGRjYXJkUGFydFJlZ0V4cCk7XG5cbiAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgd2lsZGNhcmRQYXJ0ID0gbmV3IFdpbGRjYXJkUGFydChub1doaXRlc3BhY2UpO1xuICAgIH1cblxuICAgIHJldHVybiB3aWxkY2FyZFBhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBXaWxkY2FyZFBhcnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSByZXF1aXJlKCcuL3NlcXVlbmNlT2ZQYXJ0cycpO1xuXG5jbGFzcyBaZXJvT3JNb3JlUGFydHNQYXJ0IGV4dGVuZHMgU2VxdWVuY2VPZlBhcnRzUGFydCB7XG4gIHRvU3RyaW5nKCkge1xuICAgIGNvbnN0IG9wZXJhdG9yU3RyaW5nID0gJyonLFxuICAgICAgICAgIHN0cmluZyA9IHN1cGVyLnRvU3RyaW5nKG9wZXJhdG9yU3RyaW5nKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBwYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpIHtcbiAgICBub1doaXRlc3BhY2UgPSB0aGlzLmdldE5vV2hpdGVzcGFjZSgpOyAgLy8vXG5cbiAgICBsZXQgbm9kZXMgPSBbXTtcbiAgICBcbiAgICBjb25zdCBwcm9kdWN0aW9ucyA9IGNvbnRleHQuZ2V0UHJvZHVjdGlvbnMoKSxcbiAgICAgICAgICB0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24gPSB0aGlzLmdldFRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbihwcm9kdWN0aW9ucyk7XG5cbiAgICBpZiAodGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uICE9PSBudWxsKSB7XG4gICAgICBmb3IoOzspIHtcbiAgICAgICAgY29uc3QgdGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uTm9kZU9yTm9kZXMgPSB0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24ucGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICAgICAgdGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uUGFyc2VkID0gKHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbk5vZGVPck5vZGVzICE9PSBudWxsKTtcblxuICAgICAgICBpZiAodGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uUGFyc2VkKSB7XG4gICAgICAgICAgbm9kZXMgPSBub2Rlcy5jb25jYXQodGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uTm9kZU9yTm9kZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVN5bWJvbChzeW1ib2wsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlKSB7XG4gICAgY29uc3QgcmVnRXhwID0gLyhbXipdKylcXCokLyxcbiAgICAgICAgICBDbGFzcyA9IFplcm9Pck1vcmVQYXJ0c1BhcnQsXG4gICAgICAgICAgemVyb09yTW9yZVBhcnRzUGFydCA9IHN1cGVyLmZyb21TeW1ib2woc3ltYm9sLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSwgcmVnRXhwLCBDbGFzcyk7XG5cbiAgICByZXR1cm4gemVyb09yTW9yZVBhcnRzUGFydDtcbiAgfVxuXG5cbiAgc3RhdGljIGZyb21PbmVPck1vcmVQYXJ0c1BhcnQob25lT3JNb3JlUGFydHNQYXJ0KSB7XG4gICAgY29uc3QgdGVybWluYWxQYXJ0ID0gb25lT3JNb3JlUGFydHNQYXJ0LmdldFRlcm1pbmFsUGFydCgpLFxuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lID0gb25lT3JNb3JlUGFydHNQYXJ0LmdldFByb2R1Y3Rpb25OYW1lKCksXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlID0gb25lT3JNb3JlUGFydHNQYXJ0LmdldE5vV2hpdGVzcGFjZSgpLFxuICAgICAgICAgIHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBuZXcgWmVyb09yTW9yZVBhcnRzUGFydCh0ZXJtaW5hbFBhcnQsIHByb2R1Y3Rpb25OYW1lLCBub1doaXRlc3BhY2UpO1xuXG4gICAgcmV0dXJuIHplcm9Pck1vcmVQYXJ0c1BhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBaZXJvT3JNb3JlUGFydHNQYXJ0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFcHNpbG9uUGFydCA9IHJlcXVpcmUoJy4vcGFydC9lcHNpbG9uJyksXG4gICAgICBXaWxkY2FyZFBhcnQgPSByZXF1aXJlKCcuL3BhcnQvd2lsZGNhcmQnKSxcbiAgICAgIEVuZE9mTGluZVBhcnQgPSByZXF1aXJlKCcuL3BhcnQvZW5kT2ZMaW5lJyksXG4gICAgICBPcHRpb25hbFBhcnRQYXJ0ID0gcmVxdWlyZSgnLi9wYXJ0L29wdGlvbmFsUGFydCcpLFxuICAgICAgUHJvZHVjdGlvbk5hbWVQYXJ0ID0gcmVxdWlyZSgnLi9wYXJ0L3Byb2R1Y3Rpb25OYW1lJyksXG4gICAgICBUZXJtaW5hbFN5bWJvbFBhcnQgPSByZXF1aXJlKCcuL3BhcnQvdGVybWluYWxTeW1ib2wnKSxcbiAgICAgIE9uZU9yTW9yZVBhcnRzUGFydCA9IHJlcXVpcmUoJy4vcGFydC9vbmVPck1vcmVQYXJ0cycpLFxuICAgICAgWmVyb09yTW9yZVBhcnRzUGFydCA9IHJlcXVpcmUoJy4vcGFydC96ZXJvT3JNb3JlUGFydHMnKSxcbiAgICAgIFJlZ3VsYXJFeHByZXNzaW9uUGFydCA9IHJlcXVpcmUoJy4vcGFydC9yZWd1bGFyRXhwcmVzc2lvbicpLFxuICAgICAgU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0ID0gcmVxdWlyZSgnLi9wYXJ0L3NpZ25pZmljYW50VG9rZW5UeXBlJyk7XG5cbmNvbnN0IFBhcnRzID0gW1xuICBFcHNpbG9uUGFydCxcbiAgV2lsZGNhcmRQYXJ0LFxuICBFbmRPZkxpbmVQYXJ0LFxuICBSZWd1bGFyRXhwcmVzc2lvblBhcnQsXG4gIFNpZ25pZmljYW50VG9rZW5UeXBlUGFydCxcbiAgVGVybWluYWxTeW1ib2xQYXJ0LFxuICBPcHRpb25hbFBhcnRQYXJ0LFxuICBPbmVPck1vcmVQYXJ0c1BhcnQsXG4gIFplcm9Pck1vcmVQYXJ0c1BhcnQsXG4gIFByb2R1Y3Rpb25OYW1lUGFydFxuXTtcblxubW9kdWxlLmV4cG9ydHMgPSBQYXJ0cztcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4vcnVsZScpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIFByb2R1Y3Rpb24ge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBydWxlcywgTm9kZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xuICAgIHRoaXMuTm9kZSA9IE5vZGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cbiAgXG4gIGdldFJ1bGVzKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVzO1xuICB9XG4gIFxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLk5vZGU7XG4gIH1cbiAgXG4gIGlzTGVmdFJlY3Vyc2l2ZSgpIHtcbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZXMgPSB0aGlzLmdldExlZnRSZWN1cnNpdmVSdWxlcygpLFxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlc0xlbmd0aCA9IGxlZnRSZWN1cnNpdmVSdWxlcy5sZW5ndGgsXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZSA9IChsZWZ0UmVjdXJzaXZlUnVsZXNMZW5ndGggPiAwKTtcbiAgICBcbiAgICByZXR1cm4gbGVmdFJlY3Vyc2l2ZTtcbiAgfVxuICBcbiAgaXNJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZShwcmV2aW91c1Byb2R1Y3Rpb25zKSB7XG4gICAgY29uc3QgaW1wbGljaXRseUxlZnRSZWN1cnNpdmUgPSB0aGlzLnJ1bGVzLnNvbWUoZnVuY3Rpb24ocnVsZSkge1xuICAgICAgY29uc3QgaW1wbGljaXRseUxlZnRSZWN1cnNpdmUgPSBydWxlLmlzSW1wbGljaXRseUxlZnRSZWN1cnNpdmUocHJldmlvdXNQcm9kdWN0aW9ucyk7XG4gICAgICBcbiAgICAgIHJldHVybiBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZTtcbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gaW1wbGljaXRseUxlZnRSZWN1cnNpdmU7XG4gIH1cbiAgXG4gIGdldExlZnRSZWN1cnNpdmVSdWxlcygpIHtcbiAgICBjb25zdCBwcm9kdWN0aW9uTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVzID0gdGhpcy5ydWxlcy5maWx0ZXIoZnVuY3Rpb24ocnVsZSkge1xuICAgICAgICAgICAgY29uc3QgcnVsZUxlZnRSZWN1cnNpdmUgPSBydWxlLmlzTGVmdFJlY3Vyc2l2ZShwcm9kdWN0aW9uTmFtZSk7XG4gICAgICBcbiAgICAgICAgICAgIHJldHVybiBydWxlTGVmdFJlY3Vyc2l2ZTtcbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBsZWZ0UmVjdXJzaXZlUnVsZXM7XG4gIH1cblxuICBnZXROb25MZWZ0UmVjdXJzaXZlUnVsZXMoKSB7XG4gICAgY29uc3QgcHJvZHVjdGlvbk5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIGxlZnROb25SZWN1cnNpdmVSdWxlcyA9IHRoaXMucnVsZXMuZmlsdGVyKGZ1bmN0aW9uKHJ1bGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVMZWZ0UmVjdXJzaXZlID0gcnVsZS5pc0xlZnRSZWN1cnNpdmUocHJvZHVjdGlvbk5hbWUpLFxuICAgICAgICAgICAgICAgICAgcnVsZU5vbkxlZnRSZWN1cnNpdmUgPSAhcnVsZUxlZnRSZWN1cnNpdmU7XG4gIFxuICAgICAgICAgICAgcmV0dXJuIHJ1bGVOb25MZWZ0UmVjdXJzaXZlO1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGxlZnROb25SZWN1cnNpdmVSdWxlcztcbiAgfVxuICBcbiAgdG9TdHJpbmcobWF4aW11bVByb2R1Y3Rpb25OYW1lTGVuZ3RoKSB7XG4gICAgY29uc3QgcnVsZXNTdHJpbmcgPSB0aGlzLnJ1bGVzLnJlZHVjZShmdW5jdGlvbihydWxlc1N0cmluZywgcnVsZSkge1xuICAgICAgICAgICAgY29uc3QgcnVsZVN0cmluZyA9IHJ1bGUudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHJ1bGVzU3RyaW5nID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIHJ1bGVzU3RyaW5nID0gcnVsZVN0cmluZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJ1bGVzU3RyaW5nID0gYCR7cnVsZXNTdHJpbmd9IHwgJHtydWxlU3RyaW5nfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBydWxlc1N0cmluZztcbiAgICAgICAgICB9LCBudWxsKSxcbiAgICAgICAgICBwcm9kdWN0aW9uTmFtZUxlbmd0aCA9IHRoaXMubmFtZS5sZW5ndGgsICAvLy9cbiAgICAgICAgICBwYWRkaW5nTGVuZ3RoID0gbWF4aW11bVByb2R1Y3Rpb25OYW1lTGVuZ3RoIC0gcHJvZHVjdGlvbk5hbWVMZW5ndGgsXG4gICAgICAgICAgcGFkZGluZyA9IHBhZGRpbmdGcm9tUGFkZGluZ0xlbmd0aChwYWRkaW5nTGVuZ3RoKSxcbiAgICAgICAgICBzdHJpbmcgPSBgXFxuICAke3RoaXMubmFtZX0ke3BhZGRpbmd9IDo6PSAke3J1bGVzU3RyaW5nfVxcbmA7XG4gICAgXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuICBcbiAgcGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbGV0IG5vZGVPck5vZGVzID0gbnVsbDtcblxuICAgIGNvbnRleHQuaW5jcmVhc2VEZXB0aCgpO1xuXG4gICAgY29uc3QgdG9vRGVlcCA9IGNvbnRleHQuaXNUb29EZWVwKCk7XG5cbiAgICBpZiAodG9vRGVlcCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgcGFyc2UgdHJlZSBpcyB0b28gZGVlcCBhdCBwcm9kdWN0aW9uICcke3RoaXMubmFtZX0nYCk7XG4gICAgfVxuXG4gICAgbGV0IHJ1bGVOb2RlcyA9IG51bGw7XG4gICAgXG4gICAgY29uc3Qgc29tZVJ1bGVQYXJzZWQgPSB0aGlzLnJ1bGVzLnNvbWUoZnVuY3Rpb24ocnVsZSkge1xuICAgICAgICAgICAgcnVsZU5vZGVzID0gcnVsZS5wYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpO1xuICBcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVQYXJzZWQgPSAocnVsZU5vZGVzICE9PSBudWxsKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gcnVsZVBhcnNlZDtcbiAgICAgICAgICB9KTtcblxuICAgIGlmIChzb21lUnVsZVBhcnNlZCkge1xuICAgICAgY29uc3QgcnVsZU5vZGVzTGVuZ3RoID0gcnVsZU5vZGVzLmxlbmd0aDtcblxuICAgICAgaWYgKHJ1bGVOb2Rlc0xlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3Qgbm9kZXMgPSBydWxlTm9kZXMsICAvLy9cbiAgICAgICAgICAgICAgcHJvZHVjdGlvbk5hbWUgPSB0aGlzLm5hbWU7IC8vL1xuXG4gICAgICAgIG5vZGVPck5vZGVzID0gdGhpcy5Ob2RlLmZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSk7ICAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb250ZXh0LmRlY3JlYXNlRGVwdGgoKTtcblxuICAgIHJldHVybiBub2RlT3JOb2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGluZShsaW5lLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG1hcHBpbmdzKSB7XG4gICAgY29uc3QgbmFtZSA9IGxpbmUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHJ1bGVzID0gbGluZS5tYXBTeW1ib2xTZXF1ZW5jZXMoZnVuY3Rpb24oc3ltYm9sU2VxdWVuY2UpIHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGUgPSBSdWxlLmZyb21TeW1ib2xTZXF1ZW5jZShzeW1ib2xTZXF1ZW5jZSwgc2lnbmlmaWNhbnRUb2tlblR5cGVzKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4gcnVsZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBOb2RlID0gbWFwcGluZ3MuaGFzT3duUHJvcGVydHkobmFtZSkgP1xuICAgICAgICAgICAgICAgICAgIG1hcHBpbmdzW25hbWVdIDpcbiAgICAgICAgICAgICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgcHJvZHVjdGlvbiA9IG5ldyBQcm9kdWN0aW9uKG5hbWUsIHJ1bGVzLCBOb2RlKTtcblxuICAgIHJldHVybiBwcm9kdWN0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvZHVjdGlvbjtcblxuZnVuY3Rpb24gcGFkZGluZ0Zyb21QYWRkaW5nTGVuZ3RoKHBhZGRpbmdMZW5ndGgpIHtcbiAgbGV0IHBhZGRpbmcgPSAnJztcbiAgXG4gIGZvciAodmFyIHBvc2l0aW9uID0gMDsgcG9zaXRpb24gPCBwYWRkaW5nTGVuZ3RoOyBwb3NpdGlvbisrKSB7XG4gICAgcGFkZGluZyArPSAnICc7XG4gIH1cbiAgXG4gIHJldHVybiBwYWRkaW5nO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi4vcnVsZScpLFxuICAgICAgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uL3Byb2R1Y3Rpb24nKTtcblxuY2xhc3MgQ3ljbGljUHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBnZXRSdWxlc1Byb2R1Y3Rpb25OYW1lcygpIHtcbiAgICBjb25zdCBydWxlcyA9IHRoaXMuZ2V0UnVsZXMoKSxcbiAgICAgICAgICBydWxlc1Byb2R1Y3Rpb25OYW1lcyA9IHJ1bGVzLm1hcChmdW5jdGlvbihydWxlKSB7XG4gICAgICAgICAgICBjb25zdCBydWxlUGFydHMgPSBydWxlLmdldFBhcnRzKCksXG4gICAgICAgICAgICAgICAgICBydWxlRmlyc3RQYXJ0ID0gZmlyc3QocnVsZVBhcnRzKSxcbiAgICAgICAgICAgICAgICAgIHJ1bGVGaXJzdFByb2R1Y3Rpb25OYW1lUGFydCA9IHJ1bGVGaXJzdFBhcnQsICAvLy9cbiAgICAgICAgICAgICAgICAgIHJ1bGVGaXJzdFByb2R1Y3Rpb25OYW1lUGFydFByb2R1Y3Rpb25OYW1lID0gcnVsZUZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0LmdldFByb2R1Y3Rpb25OYW1lKCksXG4gICAgICAgICAgICAgICAgICBydWxlUHJvZHVjdGlvbk5hbWUgPSBydWxlRmlyc3RQcm9kdWN0aW9uTmFtZVBhcnRQcm9kdWN0aW9uTmFtZTsgLy8vXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBydWxlUHJvZHVjdGlvbk5hbWU7XG4gICAgICAgICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIHJ1bGVzUHJvZHVjdGlvbk5hbWVzO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVByb2R1Y3Rpb24ocHJvZHVjdGlvbikge1xuICAgIGxldCBjeWNsaWNQcm9kdWN0aW9uID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBydWxlcyA9IHJ1bGVzRnJvbVByb2R1Y3Rpb24ocHJvZHVjdGlvbik7XG4gICAgXG4gICAgaWYgKHJ1bGVzICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwcm9kdWN0aW9uTmFtZSA9IHByb2R1Y3Rpb24uZ2V0TmFtZSgpLFxuICAgICAgICAgICAgcHJvZHVjdGlvbk5vZGUgPSBwcm9kdWN0aW9uLmdldE5vZGUoKSxcbiAgICAgICAgICAgIG5hbWUgPSBwcm9kdWN0aW9uTmFtZSwgLy8vXG4gICAgICAgICAgICBOb2RlID0gcHJvZHVjdGlvbk5vZGU7XG5cbiAgICAgIGN5Y2xpY1Byb2R1Y3Rpb24gPSBuZXcgQ3ljbGljUHJvZHVjdGlvbihuYW1lLCBydWxlcywgTm9kZSk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBjeWNsaWNQcm9kdWN0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ3ljbGljUHJvZHVjdGlvbjtcblxuZnVuY3Rpb24gcnVsZXNGcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uKSB7XG4gIGxldCBydWxlcyA9IG51bGw7XG4gIFxuICBjb25zdCBwcm9kdWN0aW9uUnVsZXMgPSBwcm9kdWN0aW9uLmdldFJ1bGVzKCksXG4gICAgICAgIGN5Y2xpY1J1bGVzID0gcHJvZHVjdGlvblJ1bGVzLnJlZHVjZShmdW5jdGlvbihjeWNsaWNSdWxlcywgcHJvZHVjdGlvblJ1bGUpIHtcbiAgICAgICAgICBjb25zdCBwcm9kdWN0aW9uUnVsZUZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0ID0gcHJvZHVjdGlvblJ1bGUuZ2V0Rmlyc3RQcm9kdWN0aW9uTmFtZVBhcnQoKTtcbiAgICAgICAgICBcbiAgICAgICAgICBpZiAocHJvZHVjdGlvblJ1bGVGaXJzdFByb2R1Y3Rpb25OYW1lUGFydCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgY3ljbGljUGFydCA9IHByb2R1Y3Rpb25SdWxlRmlyc3RQcm9kdWN0aW9uTmFtZVBhcnQsXG4gICAgICAgICAgICAgICAgICBjeWNsaWNQYXJ0cyA9IFtcbiAgICAgICAgICAgICAgICAgICAgY3ljbGljUGFydFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIGN5Y2xpY1J1bGUgPSBuZXcgUnVsZShjeWNsaWNQYXJ0cyk7XG5cbiAgICAgICAgICAgIGN5Y2xpY1J1bGVzLnB1c2goY3ljbGljUnVsZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiBjeWNsaWNSdWxlcztcbiAgICAgICAgfSwgW10pLFxuICAgICAgICBjeWNsaWNSdWxlc0xlbmd0aCA9IGN5Y2xpY1J1bGVzLmxlbmd0aDtcbiAgXG4gIGlmIChjeWNsaWNSdWxlc0xlbmd0aCA+IDApIHtcbiAgICBydWxlcyA9IGN5Y2xpY1J1bGVzO1xuICB9XG5cbiAgcmV0dXJuIHJ1bGVzO1xufVxuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUnKSxcbiAgICAgIFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi9wcm9kdWN0aW9uJyk7XG5cbmNsYXNzIE5vbkltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBzdGF0aWMgZnJvbVByb2R1Y3Rpb25BbmRQcmV2aW91c1Byb2R1Y3Rpb25zKHByb2R1Y3Rpb24sIHByZXZpb3VzUHJvZHVjdGlvbnMpIHtcbiAgICBjb25zdCBwcm9kdWN0aW9uTmFtZSA9IHByb2R1Y3Rpb24uZ2V0TmFtZSgpLFxuICAgICAgICAgIHByb2R1Y3Rpb25Ob2RlID0gcHJvZHVjdGlvbi5nZXROb2RlKCksXG4gICAgICAgICAgbmFtZSA9IHByb2R1Y3Rpb25OYW1lLCAgLy8vXG4gICAgICAgICAgcnVsZXMgPSBydWxlc0Zyb21Qcm9kdWN0aW9uQW5kUHJldmlvdXNQcm9kdWN0aW9ucyhwcm9kdWN0aW9uLCBwcmV2aW91c1Byb2R1Y3Rpb25zKSxcbiAgICAgICAgICBOb2RlID0gcHJvZHVjdGlvbk5vZGUsICAvLy9cbiAgICAgICAgICBub25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24gPSBuZXcgTm9uSW1wbGljaXRseUxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uKG5hbWUsIHJ1bGVzLCBOb2RlKTtcblxuICAgIHJldHVybiBub25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb247XG5cbmZ1bmN0aW9uIHJ1bGVzRnJvbVByb2R1Y3Rpb25BbmRQcmV2aW91c1Byb2R1Y3Rpb25zKHByb2R1Y3Rpb24sIHByZXZpb3VzUHJvZHVjdGlvbnMpIHtcbiAgY29uc3QgcHJvZHVjdGlvblJ1bGVzID0gcHJvZHVjdGlvbi5nZXRSdWxlcygpLFxuICAgICAgICBydWxlcyA9IHByb2R1Y3Rpb25SdWxlcy5yZWR1Y2UoZnVuY3Rpb24ocnVsZXMsIHByb2R1Y3Rpb25SdWxlKSB7XG4gICAgICAgICAgY29uc3QgcHJvZHVjdGlvblJ1bGVJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVByZXZpb3VzUHJvZHVjdGlvbiA9IHByb2R1Y3Rpb25SdWxlLmltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUHJldmlvdXNQcm9kdWN0aW9uKHByZXZpb3VzUHJvZHVjdGlvbnMpO1xuXG4gICAgICAgICAgaWYgKHByb2R1Y3Rpb25SdWxlSW1wbGljaXRseUxlZnRSZWN1cnNpdmVQcmV2aW91c1Byb2R1Y3Rpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzUHJvZHVjdGlvbiA9IHByb2R1Y3Rpb25SdWxlSW1wbGljaXRseUxlZnRSZWN1cnNpdmVQcmV2aW91c1Byb2R1Y3Rpb24sIC8vL1xuICAgICAgICAgICAgICAgICAgcnVsZXNXaXRoUHJldmlvdXNQcm9kdWN0aW9uSW5saW5lRnJvbVByb2R1Y3Rpb25JbmxpbmUgPSBydWxlc1dpdGhQcmV2aW91c1Byb2R1Y3Rpb25JbmxpbmVGcm9tUHJvZHVjdGlvblJ1bGVBbmRQcmV2aW91c1Byb2R1Y3Rpb24ocHJvZHVjdGlvblJ1bGUsIHByZXZpb3VzUHJvZHVjdGlvbik7XG5cbiAgICAgICAgICAgIHJ1bGVzID0gcnVsZXMuY29uY2F0KHJ1bGVzV2l0aFByZXZpb3VzUHJvZHVjdGlvbklubGluZUZyb21Qcm9kdWN0aW9uSW5saW5lKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcnVsZSA9IHByb2R1Y3Rpb25SdWxlO1xuXG4gICAgICAgICAgICBydWxlcy5wdXNoKHJ1bGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBydWxlcztcbiAgICAgICAgfSwgW10pO1xuXG4gIHJldHVybiBydWxlcztcbn1cblxuZnVuY3Rpb24gcnVsZXNXaXRoUHJldmlvdXNQcm9kdWN0aW9uSW5saW5lRnJvbVByb2R1Y3Rpb25SdWxlQW5kUHJldmlvdXNQcm9kdWN0aW9uKHByb2R1Y3Rpb25SdWxlLCBwcmV2aW91c1Byb2R1Y3Rpb24pIHtcbiAgY29uc3QgcHJldmlvdXNQcm9kdWN0aW9uUnVsZXMgPSBwcmV2aW91c1Byb2R1Y3Rpb24uZ2V0UnVsZXMoKSxcbiAgICAgICAgcnVsZXNXaXRoUHJldmlvdXNQcm9kdWN0aW9uSW5saW5lID0gcHJldmlvdXNQcm9kdWN0aW9uUnVsZXMubWFwKGZ1bmN0aW9uKHByZXZpb3VzUHJvZHVjdGlvblJ1bGUpIHtcbiAgICAgICAgICBjb25zdCBwcmV2aW91c1Byb2R1Y3Rpb25SdWxlUGFydHMgPSBwcmV2aW91c1Byb2R1Y3Rpb25SdWxlLmdldFBhcnRzKCksXG4gICAgICAgICAgICAgICAgcHJvZHVjdGlvblJ1bGVBbGxCdXRGaXJzdFBhcnRzID0gcHJvZHVjdGlvblJ1bGUuZ2V0QWxsQnV0Rmlyc3RQYXJ0cygpLFxuICAgICAgICAgICAgICAgIHJ1bGVXaXRoUHJldmlvdXNQcm9kdWN0aW9uSW5saW5lUGFydHMgPSBbXS5jb25jYXQocHJldmlvdXNQcm9kdWN0aW9uUnVsZVBhcnRzKS5jb25jYXQocHJvZHVjdGlvblJ1bGVBbGxCdXRGaXJzdFBhcnRzKSxcbiAgICAgICAgICAgICAgICBydWxlV2l0aFByZXZpb3VzUHJvZHVjdGlvbklubGluZSA9IG5ldyBSdWxlKHJ1bGVXaXRoUHJldmlvdXNQcm9kdWN0aW9uSW5saW5lUGFydHMpO1xuXG4gICAgICAgICAgcmV0dXJuIHJ1bGVXaXRoUHJldmlvdXNQcm9kdWN0aW9uSW5saW5lO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gcnVsZXNXaXRoUHJldmlvdXNQcm9kdWN0aW9uSW5saW5lO1xufVxuXG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuLi9ydWxlJyksXG4gICAgICBQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vcHJvZHVjdGlvbicpLFxuICAgICAgUmlnaHRSZWN1cnNpdmVQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi9yaWdodFJlY3Vyc2l2ZScpO1xuXG5jbGFzcyBOb25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBzdGF0aWMgZnJvbVByb2R1Y3Rpb24ocHJvZHVjdGlvbikge1xuICAgIGNvbnN0IHByb2R1Y3Rpb25OYW1lID0gcHJvZHVjdGlvbi5nZXROYW1lKCksXG4gICAgICAgICAgcHJvZHVjdGlvbk5vZGUgPSBwcm9kdWN0aW9uLmdldE5vZGUoKSxcbiAgICAgICAgICBuYW1lID0gcHJvZHVjdGlvbk5hbWUsICAvLy9cbiAgICAgICAgICBydWxlcyA9IHJ1bGVzRnJvbVByb2R1Y3Rpb24ocHJvZHVjdGlvbiksXG4gICAgICAgICAgTm9kZSA9IHByb2R1Y3Rpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgbm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24gPSBuZXcgUHJvZHVjdGlvbihuYW1lLCBydWxlcywgTm9kZSk7XG4gICAgXG4gICAgcmV0dXJuIG5vbkxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb247XG5cbmZ1bmN0aW9uIHJ1bGVzRnJvbVByb2R1Y3Rpb24ocHJvZHVjdGlvbikge1xuICBjb25zdCBwcm9kdWN0aW9uTm9uTGVmdFJlY3Vyc2l2ZVJ1bGVzID0gcHJvZHVjdGlvbi5nZXROb25MZWZ0UmVjdXJzaXZlUnVsZXMoKSxcbiAgICAgICAgcnVsZXMgPSBwcm9kdWN0aW9uTm9uTGVmdFJlY3Vyc2l2ZVJ1bGVzLm1hcChmdW5jdGlvbihwcm9kdWN0aW9uTm9uTGVmdFJlY3Vyc2l2ZVJ1bGUpIHtcbiAgICAgICAgICBjb25zdCBwcm9kdWN0aW9uTm9uTGVmdFJlY3Vyc2l2ZVJ1bGVQYXJ0cyA9IHByb2R1Y3Rpb25Ob25MZWZ0UmVjdXJzaXZlUnVsZS5nZXRQYXJ0cygpLFxuICAgICAgICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUGFydCA9IFJpZ2h0UmVjdXJzaXZlUHJvZHVjdGlvbi5wcm9kdWN0aW9uTmFtZVBhcnRGcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uKSxcbiAgICAgICAgICAgICAgICBwYXJ0cyA9IFtdLmNvbmNhdChwcm9kdWN0aW9uTm9uTGVmdFJlY3Vyc2l2ZVJ1bGVQYXJ0cykuY29uY2F0KHByb2R1Y3Rpb25OYW1lUGFydCksXG4gICAgICAgICAgICAgICAgcnVsZSA9IG5ldyBSdWxlKHBhcnRzKTtcbiAgXG4gICAgICAgICAgcmV0dXJuIHJ1bGU7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBydWxlcztcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4uL3J1bGUnKSxcbiAgICAgIFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi9wcm9kdWN0aW9uJyksXG4gICAgICBFcHNpbG9uUGFydCA9IHJlcXVpcmUoJy4uL3BhcnQvZXBzaWxvbicpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vbm9kZS9ub25UZXJtaW5hbCcpLFxuICAgICAgUHJvZHVjdGlvbk5hbWVQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC9wcm9kdWN0aW9uTmFtZScpO1xuXG5jbGFzcyBSaWdodFJlY3Vyc2l2ZVByb2R1Y3Rpb24gZXh0ZW5kcyBQcm9kdWN0aW9uIHtcbiAgc3RhdGljIHByb2R1Y3Rpb25OYW1lUGFydEZyb21Qcm9kdWN0aW9uKHByb2R1Y3Rpb24pIHtcbiAgICBjb25zdCBwcm9kdWN0aW9uTmFtZSA9IHByb2R1Y3Rpb24uZ2V0TmFtZSgpLFxuICAgICAgICAgIG5hbWUgPSBwcm9kdWN0aW9uTmFtZSwgLy8vXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlID0gZmFsc2UsIC8vL1xuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUGFydCA9IG5ldyBQcm9kdWN0aW9uTmFtZVBhcnQobmFtZSwgbm9XaGl0ZXNwYWNlKTtcbiAgICBcbiAgICByZXR1cm4gcHJvZHVjdGlvbk5hbWVQYXJ0O1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVByb2R1Y3Rpb24ocHJvZHVjdGlvbikge1xuICAgIGNvbnN0IHByb2R1Y3Rpb25OYW1lID0gcHJvZHVjdGlvbi5nZXROYW1lKCksXG4gICAgICAgICAgbmFtZSA9IHByb2R1Y3Rpb25OYW1lLCAvLy9cbiAgICAgICAgICBydWxlcyA9IHJ1bGVzRnJvbVByb2R1Y3Rpb24ocHJvZHVjdGlvbiksXG4gICAgICAgICAgTm9kZSA9IE5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgcmlnaHRSZWN1cnNpdmVQcm9kdWN0aW9uID0gbmV3IFByb2R1Y3Rpb24obmFtZSwgcnVsZXMsIE5vZGUpO1xuICAgIFxuICAgIHJldHVybiByaWdodFJlY3Vyc2l2ZVByb2R1Y3Rpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSaWdodFJlY3Vyc2l2ZVByb2R1Y3Rpb247XG5cbmZ1bmN0aW9uIHJ1bGVzRnJvbVByb2R1Y3Rpb24ocHJvZHVjdGlvbikge1xuICBjb25zdCByaWdodFJlY3Vyc2l2ZVJ1bGVzID0gcmlnaHRSZWN1cnNpdmVSdWxlc0Zyb21Qcm9kdWN0aW9uKHByb2R1Y3Rpb24pLFxuICAgICAgICBlcHNpbG9uUGFydCA9IG5ldyBFcHNpbG9uUGFydCgpLFxuICAgICAgICBlcHNpbG9uUGFydHMgPSBbXG4gICAgICAgICAgZXBzaWxvblBhcnRcbiAgICAgICAgXSxcbiAgICAgICAgZXBzaWxvblBhcnRSdWxlID0gbmV3IFJ1bGUoZXBzaWxvblBhcnRzKSxcbiAgICAgICAgcnVsZXMgPSBbXS5jb25jYXQocmlnaHRSZWN1cnNpdmVSdWxlcykuY29uY2F0KGVwc2lsb25QYXJ0UnVsZSk7XG5cbiAgcmV0dXJuIHJ1bGVzO1xufVxuXG5mdW5jdGlvbiByaWdodFJlY3Vyc2l2ZVJ1bGVzRnJvbVByb2R1Y3Rpb24ocHJvZHVjdGlvbikge1xuICBjb25zdCBwcm9kdWN0aW9uTGVmdFJlY3Vyc2l2ZVJ1bGVzID0gcHJvZHVjdGlvbi5nZXRMZWZ0UmVjdXJzaXZlUnVsZXMoKSxcbiAgICAgICAgcmlnaHRSZWN1cnNpdmVSdWxlcyA9IHByb2R1Y3Rpb25MZWZ0UmVjdXJzaXZlUnVsZXMubWFwKGZ1bmN0aW9uKHByb2R1Y3Rpb25MZWZ0UmVjdXJzaXZlUnVsZSkge1xuICAgICAgICAgIGNvbnN0IHByb2R1Y3Rpb25MZWZ0UmVjdXJzaXZlUnVsZUFsbEJ1dEZpcnN0UGFydHMgPSBwcm9kdWN0aW9uTGVmdFJlY3Vyc2l2ZVJ1bGUuZ2V0QWxsQnV0Rmlyc3RQYXJ0cygpLFxuICAgICAgICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUGFydCA9IFJpZ2h0UmVjdXJzaXZlUHJvZHVjdGlvbi5wcm9kdWN0aW9uTmFtZVBhcnRGcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uKSxcbiAgICAgICAgICAgICAgICByaWdodFJlY3Vyc2l2ZVJ1bGVQYXJ0cyA9IFtdLmNvbmNhdChwcm9kdWN0aW9uTGVmdFJlY3Vyc2l2ZVJ1bGVBbGxCdXRGaXJzdFBhcnRzKS5jb25jYXQocHJvZHVjdGlvbk5hbWVQYXJ0KSxcbiAgICAgICAgICAgICAgICByaWdodFJlY3Vyc2l2ZVJ1bGUgPSBuZXcgUnVsZShyaWdodFJlY3Vyc2l2ZVJ1bGVQYXJ0cyk7XG5cbiAgICAgICAgICByZXR1cm4gcmlnaHRSZWN1cnNpdmVSdWxlO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gcmlnaHRSZWN1cnNpdmVSdWxlcztcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IFBhcnRzID0gcmVxdWlyZSgnLi9wYXJ0cycpLFxuICAgICAgUHJvZHVjdGlvbk5hbWVQYXJ0ID0gcmVxdWlyZSgnLi9wYXJ0L3Byb2R1Y3Rpb25OYW1lJyk7XG5cbmNvbnN0IHsgc3BlY2lhbFN5bWJvbHMgfSA9IGxleGVycztcblxuY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzKSB7XG4gICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xuICB9XG5cbiAgZ2V0UGFydHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFydHM7XG4gIH1cbiAgXG4gIGdldEFsbEJ1dEZpcnN0UGFydHMoKSB7XG4gICAgY29uc3QgYWxsQnV0Rmlyc3RQYXJ0cyA9IHRoaXMucGFydHMuc2xpY2UoMSk7XG5cbiAgICByZXR1cm4gYWxsQnV0Rmlyc3RQYXJ0cztcbiAgfVxuICBcbiAgZ2V0Rmlyc3RQcm9kdWN0aW9uTmFtZVBhcnQoKSB7XG4gICAgbGV0IGZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0ID0gbnVsbDtcblxuICAgIGNvbnN0IGZpcnN0UGFydCA9IGZpcnN0KHRoaXMucGFydHMpO1xuXG4gICAgaWYgKGZpcnN0UGFydCBpbnN0YW5jZW9mIFByb2R1Y3Rpb25OYW1lUGFydCkge1xuICAgICAgZmlyc3RQcm9kdWN0aW9uTmFtZVBhcnQgPSBmaXJzdFBhcnQ7IC8vL1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gZmlyc3RQcm9kdWN0aW9uTmFtZVBhcnQ7XG4gIH1cblxuICBpc0xlZnRSZWN1cnNpdmUocHJvZHVjdGlvbk5hbWUpIHtcbiAgICBsZXQgbGVmdFJlY3Vyc2l2ZSA9IGZhbHNlO1xuICAgIFxuICAgIGNvbnN0IGZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0ID0gdGhpcy5nZXRGaXJzdFByb2R1Y3Rpb25OYW1lUGFydCgpOyAgICBcbiAgICBcbiAgICBpZiAoZmlyc3RQcm9kdWN0aW9uTmFtZVBhcnQgIT09IG51bGwpIHtcbiAgICAgIGxlZnRSZWN1cnNpdmUgPSBmaXJzdFByb2R1Y3Rpb25OYW1lUGFydC5pc0xlZnRSZWN1cnNpdmUocHJvZHVjdGlvbk5hbWUpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gbGVmdFJlY3Vyc2l2ZTtcbiAgfVxuXG4gIGlzSW1wbGljaXRseUxlZnRSZWN1cnNpdmUocHJldmlvdXNQcm9kdWN0aW9ucykge1xuICAgIGNvbnN0IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlUHJldmlvdXNQcm9kdWN0aW9uID0gdGhpcy5pbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVByZXZpb3VzUHJvZHVjdGlvbihwcmV2aW91c1Byb2R1Y3Rpb25zKSxcbiAgICAgICAgICBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZSA9IChpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVByZXZpb3VzUHJvZHVjdGlvbiAhPT0gbnVsbCk7XG4gICAgXG4gICAgcmV0dXJuIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlO1xuICB9XG5cbiAgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVQcmV2aW91c1Byb2R1Y3Rpb24ocHJldmlvdXNQcm9kdWN0aW9ucykge1xuICAgIGxldCBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVByZXZpb3VzUHJvZHVjdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBmaXJzdFByb2R1Y3Rpb25OYW1lUGFydCA9IHRoaXMuZ2V0Rmlyc3RQcm9kdWN0aW9uTmFtZVBhcnQoKTtcblxuICAgIGlmIChmaXJzdFByb2R1Y3Rpb25OYW1lUGFydCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZmlyc3RQcm9kdWN0aW9uTmFtZVBhcnRQcm9kdWN0aW9uTmFtZSA9IGZpcnN0UHJvZHVjdGlvbk5hbWVQYXJ0LmdldFByb2R1Y3Rpb25OYW1lKCksXG4gICAgICAgICAgICBmaXJzdFByb2R1Y3Rpb25OYW1lID0gZmlyc3RQcm9kdWN0aW9uTmFtZVBhcnRQcm9kdWN0aW9uTmFtZTsgIC8vL1xuXG4gICAgICBwcmV2aW91c1Byb2R1Y3Rpb25zLnNvbWUoZnVuY3Rpb24ocHJldmlvdXNQcm9kdWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzUHJvZHVjdGlvbk5hbWUgPSBwcmV2aW91c1Byb2R1Y3Rpb24uZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICBwcmV2aW91c1Byb2R1Y3Rpb25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZSA9IChwcmV2aW91c1Byb2R1Y3Rpb25OYW1lID09PSBmaXJzdFByb2R1Y3Rpb25OYW1lKTtcblxuICAgICAgICBpZiAocHJldmlvdXNQcm9kdWN0aW9uSW1wbGljaXRseUxlZnRSZWN1cnNpdmUpIHtcbiAgICAgICAgICBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVByZXZpb3VzUHJvZHVjdGlvbiA9IHByZXZpb3VzUHJvZHVjdGlvbjtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW1wbGljaXRseUxlZnRSZWN1cnNpdmVQcmV2aW91c1Byb2R1Y3Rpb247XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICBjb25zdCBwYXJ0c1N0cmluZyA9IHRoaXMucGFydHMucmVkdWNlKGZ1bmN0aW9uKHBhcnRzU3RyaW5nLCBwYXJ0KSB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0U3RyaW5nID0gcGFydC50b1N0cmluZygpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAocGFydHNTdHJpbmcgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBwYXJ0U3RyaW5nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBgJHtwYXJ0c1N0cmluZ30gJHtwYXJ0U3RyaW5nfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBwYXJ0c1N0cmluZztcbiAgICAgICAgICB9LCBudWxsKSxcbiAgICAgICAgICBzdHJpbmcgPSBwYXJ0c1N0cmluZzsgLy8vXG4gICAgXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSkge1xuICAgIGxldCBub2RlcyA9IFtdO1xuICAgIFxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBjb250ZXh0LnNhdmVkSW5kZXgoKSxcbiAgICAgICAgICBldmVyeVBhcnRQYXJzZWQgPSB0aGlzLnBhcnRzLmV2ZXJ5KGZ1bmN0aW9uKHBhcnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnROb2RlT3JOb2RlcyA9IHBhcnQucGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICAgICAgICAgIHBhcnRQYXJzZWQgPSAocGFydE5vZGVPck5vZGVzICE9PSBudWxsKTtcbiAgXG4gICAgICAgICAgICBpZiAocGFydFBhcnNlZCkge1xuICAgICAgICAgICAgICBub2RlcyA9IG5vZGVzLmNvbmNhdChwYXJ0Tm9kZU9yTm9kZXMpO1xuICBcbiAgICAgICAgICAgICAgbm9XaGl0ZXNwYWNlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgcmV0dXJuIHBhcnRQYXJzZWQ7XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoIWV2ZXJ5UGFydFBhcnNlZCkge1xuICAgICAgY29udGV4dC5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG5cbiAgICAgIG5vZGVzID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN5bWJvbFNlcXVlbmNlKHN5bWJvbFNlcXVlbmNlLCBzaWduaWZpY2FudFRva2VuVHlwZXMpIHtcbiAgICBsZXQgbm9XaGl0ZXNwYWNlID0gZmFsc2U7XG4gICAgXG4gICAgY29uc3QgcGFydHMgPSBzeW1ib2xTZXF1ZW5jZS5yZWR1Y2VTeW1ib2xzKGZ1bmN0aW9uKHBhcnRzLCBzeW1ib2wpIHtcbiAgICAgICAgICAgIGlmIChzeW1ib2wgPT09IHNwZWNpYWxTeW1ib2xzLk5PX1dISVRFU1BBQ0UpIHtcbiAgICAgICAgICAgICAgbm9XaGl0ZXNwYWNlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IHBhcnQgPSBwYXJ0RnJvbVN5bWJvbChzeW1ib2wsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlKTtcbiAgXG4gICAgICAgICAgICAgIHBhcnRzLnB1c2gocGFydCk7XG4gIFxuICAgICAgICAgICAgICBub1doaXRlc3BhY2UgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICByZXR1cm4gcGFydHM7XG4gICAgICAgICAgfSwgW10pLFxuICAgICAgICAgIHJ1bGUgPSBuZXcgUnVsZShwYXJ0cyk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGU7XG5cbmZ1bmN0aW9uIHBhcnRGcm9tU3ltYm9sKHN5bWJvbCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpIHtcbiAgbGV0IHBhcnQgPSB1bmRlZmluZWQ7IC8vL1xuXG4gIFBhcnRzLnNvbWUoZnVuY3Rpb24oUGFydCkge1xuICAgIHBhcnQgPSBQYXJ0LmZyb21TeW1ib2woc3ltYm9sLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSk7XG5cbiAgICBjb25zdCBwYXJzZWQgPSAocGFydCAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9KTtcblxuICByZXR1cm4gcGFydDtcbn1cblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5JyksXG4gICAgICBlYXN5bGF5b3V0ID0gcmVxdWlyZSgnZWFzeS1sYXlvdXQnKTtcblxuY29uc3QgeyBUZXh0YXJlYSB9ID0gZWFzeSxcbiAgICAgIHsgU2l6ZWFibGVFbGVtZW50LCBWZXJ0aWNhbFNwbGl0dGVyIH0gPSBlYXN5bGF5b3V0O1xuXG5jb25zdCBjb250ZW50VGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0YXJlYSNjb250ZW50JyxcbiAgICAgIHBhcnNlVHJlZVRleHRhcmVhU2VsZWN0b3IgPSAndGV4dGFyZWEjcGFyc2VUcmVlJyxcbiAgICAgIGJuZkdyYW1tYXJUZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI2JuZkdyYW1tYXInLFxuICAgICAgc2l6ZWFibGVFbGVtZW50U2VsZWN0b3IgPSAnI3NpemVhYmxlRWxlbWVudCcsXG4gICAgICB2ZXJ0aWNhbFNwbGl0dGVyU2VsZWN0b3IgPSAnI3ZlcnRpY2FsU3BsaXR0ZXInLFxuICAgICAgY29udGVudFRleHRhcmVhID0gbmV3IFRleHRhcmVhKGNvbnRlbnRUZXh0YXJlYVNlbGVjdG9yKSxcbiAgICAgIHBhcnNlVHJlZVRleHRhcmVhID0gbmV3IFRleHRhcmVhKHBhcnNlVHJlZVRleHRhcmVhU2VsZWN0b3IpLFxuICAgICAgYm5mR3JhbW1hclRleHRhcmVhID0gbmV3IFRleHRhcmVhKGJuZkdyYW1tYXJUZXh0YXJlYVNlbGVjdG9yKSxcbiAgICAgIHNpemVhYmxlRWxlbWVudCA9IG5ldyBTaXplYWJsZUVsZW1lbnQoc2l6ZWFibGVFbGVtZW50U2VsZWN0b3IpLFxuICAgICAgYmVmb3JlU2l6ZWFibGVFbGVtZW50ID0gZmFsc2UsXG4gICAgICBhZnRlclNpemVhYmxlRWxlbWVudCA9IHRydWU7XG5cbm5ldyBWZXJ0aWNhbFNwbGl0dGVyKHZlcnRpY2FsU3BsaXR0ZXJTZWxlY3RvciwgYmVmb3JlU2l6ZWFibGVFbGVtZW50LCBhZnRlclNpemVhYmxlRWxlbWVudCk7XG5cbmNsYXNzIEV4YW1wbGUge1xuICBzdGF0aWMgZ2V0Qk5GR3JhbW1hclRleHRhcmVhVmFsdWUoKSB7IHJldHVybiBibmZHcmFtbWFyVGV4dGFyZWEuZ2V0VmFsdWUoKTsgfVxuXG4gIHN0YXRpYyBzZXRCTkZHcmFtbWFyVGV4dGFyZWFWYWx1ZSh2YWx1ZSkgeyBibmZHcmFtbWFyVGV4dGFyZWEuc2V0VmFsdWUodmFsdWUpOyB9XG5cbiAgc3RhdGljIHNldENvbnRlbnRUZXh0YXJlYVZhbHVlKHZhbHVlKSB7IGNvbnRlbnRUZXh0YXJlYS5zZXRWYWx1ZSh2YWx1ZSk7IH1cblxuICBzdGF0aWMgb25CTkZHcmFtbWFyVGV4dGFyZWFLZXlVcChoYW5kbGVyKSB7IGJuZkdyYW1tYXJUZXh0YXJlYS5vbktleVVwKGhhbmRsZXIpOyB9XG5cbiAgc3RhdGljIG9uQ29udGVudFRleHRhcmVhS2V5VXAoaGFuZGxlcikgeyBjb250ZW50VGV4dGFyZWEub25LZXlVcChoYW5kbGVyKTsgfVxuXG4gIHN0YXRpYyB1cGRhdGVQYXJzZVRyZWVUZXh0YXJlYShsZXhlciwgcGFyc2VyLCBwcm9kdWN0aW9uKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNvbnRlbnRUZXh0YXJlYVZhbHVlID0gY29udGVudFRleHRhcmVhLmdldFZhbHVlKCksXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudFRleHRhcmVhVmFsdWUsIC8vL1xuICAgICAgICAgICAgbGluZXMgPSBsZXhlci5saW5lc0Zyb21Db250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgICAgbm9kZSA9IHBhcnNlci5ub2RlRnJvbUxpbmVzKGxpbmVzLCBwcm9kdWN0aW9uKSxcbiAgICAgICAgICAgIGRvY3VtZW50Tm9kZSA9IG5vZGU7ICAvLy9cblxuICAgICAgaWYgKGRvY3VtZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBkb2N1bWVudCBjYW5ub3QgYmUgcGFyc2VkIGZvciBzb21lIHJlYXNvbi4nKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFyc2VUcmVlID0gZG9jdW1lbnROb2RlLnBhcnNlVHJlZShsaW5lcyk7XG5cbiAgICAgIHBhcnNlVHJlZS5zaGlmdExpbmUoKTsgIC8vXG5cbiAgICAgIGNvbnN0IHBhcnNlVHJlZVN0cmluZyA9IHBhcnNlVHJlZS50b1N0cmluZygpLFxuICAgICAgICAgICAgcGFyc2VUcmVlVGV4dGFyZWFIVE1MID0gcGFyc2VUcmVlU3RyaW5nOyAgLy8vXG5cbiAgICAgIHBhcnNlVHJlZVRleHRhcmVhLmh0bWwocGFyc2VUcmVlVGV4dGFyZWFIVE1MKTtcblxuICAgICAgY29udGVudFRleHRhcmVhLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb250ZW50VGV4dGFyZWEuYWRkQ2xhc3MoJ2Vycm9yJyk7XG5cbiAgICAgIEV4YW1wbGUuY2xlYXJQYXJzZVRyZWVUZXh0YXJlYSgpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBjbGVhclBhcnNlVHJlZVRleHRhcmVhKCkge1xuICAgIGNvbnN0IHBhcnNlVHJlZVRleHRhcmVhSFRNTCA9ICcnO1xuXG4gICAgcGFyc2VUcmVlVGV4dGFyZWEuaHRtbChwYXJzZVRyZWVUZXh0YXJlYUhUTUwpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXhhbXBsZTtcblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgQk5GRXhhbXBsZTogcmVxdWlyZSgnLi9leGFtcGxlcy9ibmYnKSxcbiAgQmFzaWNFeGFtcGxlOiByZXF1aXJlKCcuL2V4YW1wbGVzL2Jhc2ljJyksXG4gIEZsb3JlbmNlRXhhbXBsZTogcmVxdWlyZSgnLi9leGFtcGxlcy9mbG9yZW5jZScpXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpLFxuICAgICAgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IEV4YW1wbGUgPSByZXF1aXJlKCcuLi9leGFtcGxlJyksXG4gICAgICBncmFtbWFyID0gcmVxdWlyZSgnLi4vYmFzaWMvZ3JhbW1hcicpLFxuICAgICAgQmFzaWNQYXJzZXIgPSByZXF1aXJlKCcuLi9iYXNpYy9wYXJzZXInKTtcblxuY29uc3QgeyBUZXh0YXJlYSB9ID0gZWFzeSxcbiAgICAgIHsgQmFzaWNMZXhlciB9ID0gbGV4ZXJzO1xuXG5jb25zdCBsZXhpY2FsR3JhbW1hclRleHRhcmVhU2VsZWN0b3IgPSAndGV4dGFyZWEjbGV4aWNhbEdyYW1tYXInLFxuICAgICAgYWRqdXN0ZWRCTkZHcmFtbWFyVGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0YXJlYSNhZGp1c3RlZEJORkdyYW1tYXInLFxuICAgICAgbGV4aWNhbEdyYW1tYXIgPSBCYXNpY0xleGVyLmdyYW1tYXI7XG5cbmxldCBsZXhpY2FsR3JhbW1hclRleHRhcmVhLFxuICAgIGFkanVzdGVkQk5GR3JhbW1hclRleHRhcmVhLFxuICAgIGJhc2ljTGV4ZXIgPSBudWxsLFxuICAgIGJhc2ljUGFyc2VyID0gbnVsbDtcblxuY2xhc3MgQmFzaWNFeGFtcGxlIHtcbiAgc3RhdGljIHJ1bigpIHtcbiAgICBsZXhpY2FsR3JhbW1hclRleHRhcmVhID0gbmV3IFRleHRhcmVhKGxleGljYWxHcmFtbWFyVGV4dGFyZWFTZWxlY3Rvcik7XG4gICAgYWRqdXN0ZWRCTkZHcmFtbWFyVGV4dGFyZWEgPSBuZXcgVGV4dGFyZWEoYWRqdXN0ZWRCTkZHcmFtbWFyVGV4dGFyZWFTZWxlY3Rvcik7XG5cbiAgICBjb25zdCBibmZHcmFtbWFyVGV4dGFyZWFWYWx1ZSA9IGdyYW1tYXIsIC8vL1xuICAgICAgICAgIGxleGljYWxHcmFtbWFyVGV4dGFyZWFWYWx1ZSA9IEpTT04uc3RyaW5naWZ5KGxleGljYWxHcmFtbWFyLCBudWxsLCAnICAnKTsgLy8vXG5cbiAgICBsZXhpY2FsR3JhbW1hclRleHRhcmVhLnNldFZhbHVlKGxleGljYWxHcmFtbWFyVGV4dGFyZWFWYWx1ZSk7XG5cbiAgICBFeGFtcGxlLnNldEJORkdyYW1tYXJUZXh0YXJlYVZhbHVlKGJuZkdyYW1tYXJUZXh0YXJlYVZhbHVlKTtcblxuICAgIEV4YW1wbGUub25CTkZHcmFtbWFyVGV4dGFyZWFLZXlVcCh1cGRhdGUpO1xuXG4gICAgRXhhbXBsZS5vbkNvbnRlbnRUZXh0YXJlYUtleVVwKHVwZGF0ZSk7XG5cbiAgICBsZXhpY2FsR3JhbW1hclRleHRhcmVhLm9uS2V5VXAodXBkYXRlKTtcblxuICAgIHVwZGF0ZSgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgdXBkYXRlQmFzaWNMZXhlcigpO1xuXG4gIHVwZGF0ZUJhc2ljUGFyc2VyKCk7XG5cbiAgdXBkYXRlQWRqdXN0ZWRCTkZHcmFtbWFyKCk7XG5cbiAgaWYgKGJhc2ljTGV4ZXIgIT09IG51bGwpIHtcbiAgICBjb25zdCBwcm9kdWN0aW9uID0gbnVsbDsgIC8vL1xuXG4gICAgRXhhbXBsZS51cGRhdGVQYXJzZVRyZWVUZXh0YXJlYShiYXNpY0xleGVyLCBiYXNpY1BhcnNlciwgcHJvZHVjdGlvbik7XG4gIH0gZWxzZSB7XG4gICAgRXhhbXBsZS5jbGVhclBhcnNlVHJlZVRleHRhcmVhKCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCYXNpY0V4YW1wbGU7XG5cbmZ1bmN0aW9uIHVwZGF0ZUJhc2ljTGV4ZXIoKSB7XG4gIGNvbnN0IGxleGljYWxHcmFtbWFyVGV4dGFyZWFWYWx1ZSA9IGxleGljYWxHcmFtbWFyVGV4dGFyZWEuZ2V0VmFsdWUoKTtcblxuICBsZXQgbGV4aWNhbEdyYW1tYXIgPSBudWxsO1xuXG4gIHRyeSB7XG4gICAgbGV4aWNhbEdyYW1tYXIgPSBKU09OLnBhcnNlKGxleGljYWxHcmFtbWFyVGV4dGFyZWFWYWx1ZSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7fVxuXG4gIGNvbnN0IGxleGljYWxHcmFtbWFyVmFsaWQgPSAobGV4aWNhbEdyYW1tYXIgIT09IG51bGwpO1xuXG4gIGlmIChsZXhpY2FsR3JhbW1hclZhbGlkKSB7XG4gICAgYmFzaWNMZXhlciA9IEJhc2ljTGV4ZXIuZnJvbUdyYW1tYXIobGV4aWNhbEdyYW1tYXIpO1xuXG4gICAgbGV4aWNhbEdyYW1tYXJUZXh0YXJlYS5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgfSBlbHNlIHtcbiAgICBsZXhpY2FsR3JhbW1hclRleHRhcmVhLmFkZENsYXNzKCdlcnJvcicpO1xuXG4gICAgYmFzaWNMZXhlciA9IG51bGw7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlQmFzaWNQYXJzZXIoKSB7XG4gIGNvbnN0IGJuZkdyYW1tYXJUZXh0YXJlYVZhbHVlID0gRXhhbXBsZS5nZXRCTkZHcmFtbWFyVGV4dGFyZWFWYWx1ZSgpLFxuICAgICAgICBncmFtbWFyID0gYm5mR3JhbW1hclRleHRhcmVhVmFsdWU7IC8vL1xuXG4gIGJhc2ljUGFyc2VyID0gQmFzaWNQYXJzZXIuZnJvbUdyYW1tYXIoZ3JhbW1hcik7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUFkanVzdGVkQk5GR3JhbW1hcigpIHtcbiAgY29uc3QgcHJvZHVjdGlvbnMgPSBiYXNpY1BhcnNlci5nZXRQcm9kdWN0aW9ucygpLFxuICAgICAgICBtYXhpbXVtUHJvZHVjdGlvbk5hbWVMZW5ndGggPSBwcm9kdWN0aW9ucy5yZWR1Y2UoZnVuY3Rpb24obWF4aW11bVByb2R1Y3Rpb25OYW1lTGVuZ3RoLCBwcm9kdWN0aW9uKSB7XG4gICAgICAgICAgY29uc3QgcHJvZHVjdGlvbk5hbWUgPSBwcm9kdWN0aW9uLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICBwcm9kdWN0aW9uTmFtZUxlbmd0aCA9IHByb2R1Y3Rpb25OYW1lLmxlbmd0aDtcblxuICAgICAgICAgIG1heGltdW1Qcm9kdWN0aW9uTmFtZUxlbmd0aCA9IE1hdGgubWF4KG1heGltdW1Qcm9kdWN0aW9uTmFtZUxlbmd0aCwgcHJvZHVjdGlvbk5hbWVMZW5ndGgpO1xuXG4gICAgICAgICAgcmV0dXJuIG1heGltdW1Qcm9kdWN0aW9uTmFtZUxlbmd0aDtcbiAgICAgICAgfSwgMCksXG4gICAgICAgIGFkanVzdGVkQk5GR3JhbW1hclRleHRhcmVhVmFsdWUgPSBwcm9kdWN0aW9ucy5yZWR1Y2UoZnVuY3Rpb24oYWRqdXN0ZWRCTkZHcmFtbWFyVGV4dGFyZWEsIHByb2R1Y3Rpb24pIHtcbiAgICAgICAgICBjb25zdCBwcm9kdWN0aW9uU3RyaW5nID0gcHJvZHVjdGlvbi50b1N0cmluZyhtYXhpbXVtUHJvZHVjdGlvbk5hbWVMZW5ndGgpO1xuICAgICAgICAgIFxuICAgICAgICAgIGFkanVzdGVkQk5GR3JhbW1hclRleHRhcmVhICs9IHByb2R1Y3Rpb25TdHJpbmc7XG5cbiAgICAgICAgICByZXR1cm4gYWRqdXN0ZWRCTkZHcmFtbWFyVGV4dGFyZWE7XG4gICAgICAgIH0sIFtdKTtcblxuICBhZGp1c3RlZEJORkdyYW1tYXJUZXh0YXJlYS5zZXRWYWx1ZShhZGp1c3RlZEJORkdyYW1tYXJUZXh0YXJlYVZhbHVlKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKSxcbiAgICAgIGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBFeGFtcGxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZScpLFxuICAgICAgZ3JhbW1hciA9IHJlcXVpcmUoJy4uL2JuZi9ncmFtbWFyJyksXG4gICAgICBCTkZQYXJzZXIgPSByZXF1aXJlKCcuLi9ibmYvcGFyc2VyJyk7XG5cbmNvbnN0IHsgVGV4dGFyZWEgfSA9IGVhc3ksXG4gICAgICB7IEJORkxleGVyIH0gPSBsZXhlcnM7XG5cbmNvbnN0IGxleGljYWxHcmFtbWFyVGV4dGFyZWFTZWxlY3RvciA9ICd0ZXh0YXJlYSNsZXhpY2FsR3JhbW1hcicsXG4gICAgICBsZXhpY2FsR3JhbW1hciA9IEJORkxleGVyLmdyYW1tYXI7XG5cbmxldCBsZXhpY2FsR3JhbW1hclRleHRhcmVhLFxuICAgIGJuZkxleGVyID0gbnVsbCxcbiAgICBibmZQYXJzZXIgPSBudWxsO1xuXG5jbGFzcyBCTkZFeGFtcGxlIHtcbiAgc3RhdGljIHJ1bigpIHtcbiAgICBsZXhpY2FsR3JhbW1hclRleHRhcmVhID0gbmV3IFRleHRhcmVhKGxleGljYWxHcmFtbWFyVGV4dGFyZWFTZWxlY3Rvcik7XG5cbiAgICBjb25zdCBsZXhpY2FsR3JhbW1hclRleHRhcmVhVmFsdWUgPSBKU09OLnN0cmluZ2lmeShsZXhpY2FsR3JhbW1hciwgbnVsbCwgJyAgJyksIC8vL1xuICAgICAgICAgIGJuZkdyYW1tYXJUZXh0YXJlYVZhbHVlID0gZ3JhbW1hciwgLy8vXG4gICAgICAgICAgY29udGVudFRleHRhcmVhVmFsdWUgPSBgXG5cbiAgICBuYXR1cmFsTnVtYmVyICAgICAgICAgICAgOjo9ICAvXFxkKy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmA7XG5cbiAgICBsZXhpY2FsR3JhbW1hclRleHRhcmVhLnNldFZhbHVlKGxleGljYWxHcmFtbWFyVGV4dGFyZWFWYWx1ZSk7XG5cbiAgICBFeGFtcGxlLnNldEJORkdyYW1tYXJUZXh0YXJlYVZhbHVlKGJuZkdyYW1tYXJUZXh0YXJlYVZhbHVlKTtcblxuICAgIEV4YW1wbGUuc2V0Q29udGVudFRleHRhcmVhVmFsdWUoY29udGVudFRleHRhcmVhVmFsdWUpO1xuXG4gICAgRXhhbXBsZS5vbkJORkdyYW1tYXJUZXh0YXJlYUtleVVwKHVwZGF0ZSk7XG5cbiAgICBFeGFtcGxlLm9uQ29udGVudFRleHRhcmVhS2V5VXAodXBkYXRlKTtcblxuICAgIGxleGljYWxHcmFtbWFyVGV4dGFyZWEub25LZXlVcCh1cGRhdGUpO1xuXG4gICAgdXBkYXRlKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlKCkge1xuICB1cGRhdGVCTkZMZXhlcigpO1xuXG4gIHVwZGF0ZUJORlBhcnNlcigpO1xuXG4gIGlmIChibmZMZXhlciAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHByb2R1Y3Rpb24gPSBudWxsOyAgLy8vXG5cbiAgICBFeGFtcGxlLnVwZGF0ZVBhcnNlVHJlZVRleHRhcmVhKGJuZkxleGVyLCBibmZQYXJzZXIsIHByb2R1Y3Rpb24pO1xuICB9IGVsc2Uge1xuICAgIEV4YW1wbGUuY2xlYXJQYXJzZVRyZWVUZXh0YXJlYSgpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQk5GRXhhbXBsZTtcblxuZnVuY3Rpb24gdXBkYXRlQk5GTGV4ZXIoKSB7XG4gIGNvbnN0IGxleGljYWxHcmFtbWFyVGV4dGFyZWFWYWx1ZSA9IGxleGljYWxHcmFtbWFyVGV4dGFyZWEuZ2V0VmFsdWUoKTtcblxuICBsZXQgbGV4aWNhbEdyYW1tYXIgPSBudWxsO1xuXG4gIHRyeSB7XG4gICAgbGV4aWNhbEdyYW1tYXIgPSBKU09OLnBhcnNlKGxleGljYWxHcmFtbWFyVGV4dGFyZWFWYWx1ZSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7fVxuXG4gIGNvbnN0IGxleGljYWxHcmFtbWFyVmFsaWQgPSAobGV4aWNhbEdyYW1tYXIgIT09IG51bGwpO1xuXG4gIGlmIChsZXhpY2FsR3JhbW1hclZhbGlkKSB7XG4gICAgYm5mTGV4ZXIgPSBCTkZMZXhlci5mcm9tR3JhbW1hcihsZXhpY2FsR3JhbW1hcik7XG5cbiAgICBsZXhpY2FsR3JhbW1hclRleHRhcmVhLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuICB9IGVsc2Uge1xuICAgIGxleGljYWxHcmFtbWFyVGV4dGFyZWEuYWRkQ2xhc3MoJ2Vycm9yJyk7XG5cbiAgICBibmZMZXhlciA9IG51bGw7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlQk5GUGFyc2VyKCkge1xuICBibmZQYXJzZXIgPSBCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKSxcbiAgICAgIGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBFeGFtcGxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZScpLFxuICAgICAgZ3JhbW1hciA9IHJlcXVpcmUoJy4uL2Zsb3JlbmNlL2dyYW1tYXInKSxcbiAgICAgIG1hcHBpbmdzID0gcmVxdWlyZSgnLi4vZmxvcmVuY2UvbWFwcGluZ3MnKSxcbiAgICAgIEZsb3JlbmNlUGFyc2VyID0gcmVxdWlyZSgnLi4vZmxvcmVuY2UvcGFyc2VyJyk7XG5cbmNvbnN0IHsgQ2hlY2tib3gsIFRleHRhcmVhIH0gPSBlYXN5LFxuICAgICAgeyBGbG9yZW5jZUxleGVyIH0gPSBsZXhlcnM7XG5cbmNvbnN0IG1hcHBpbmdzQ2hlY2tib3hTZWxlY3RvciA9ICcjbWFwcGluZ3MnLFxuICAgICAgcHJvZHVjdGlvbk5hbWVUZXh0YXJlYVNlbGVjdG9yID0gJyNwcm9kdWN0aW9uTmFtZSc7XG5cbmNvbnN0IGZsb3JlbmNlTGV4ZXIgPSBGbG9yZW5jZUxleGVyLmZyb21Ob3RoaW5nKCk7XG5cbmxldCBwcm9kdWN0aW9uTmFtZSxcbiAgICBtYXBwaW5nc0NoZWNrYm94LFxuICAgIHByb2R1Y3Rpb25OYW1lVGV4dGFyZWE7XG5cbmNsYXNzIEZsb3JlbmNlRXhhbXBsZSB7XG4gIHN0YXRpYyBydW4oKSB7XG4gICAgbWFwcGluZ3NDaGVja2JveCA9IG5ldyBDaGVja2JveChtYXBwaW5nc0NoZWNrYm94U2VsZWN0b3IpO1xuICAgIHByb2R1Y3Rpb25OYW1lVGV4dGFyZWEgPSBuZXcgVGV4dGFyZWEocHJvZHVjdGlvbk5hbWVUZXh0YXJlYVNlbGVjdG9yKTtcblxuICAgIGNvbnN0IGJuZkdyYW1tYXJUZXh0YXJlYVZhbHVlID0gZ3JhbW1hcjsgLy8vXG5cbiAgICBFeGFtcGxlLnNldEJORkdyYW1tYXJUZXh0YXJlYVZhbHVlKGJuZkdyYW1tYXJUZXh0YXJlYVZhbHVlKTtcblxuICAgIG1hcHBpbmdzQ2hlY2tib3gub25DaGFuZ2UodXBkYXRlKTtcblxuICAgIHByb2R1Y3Rpb25OYW1lVGV4dGFyZWEub25LZXlVcCh1cGRhdGUpO1xuXG4gICAgRXhhbXBsZS5vbkJORkdyYW1tYXJUZXh0YXJlYUtleVVwKHVwZGF0ZSk7XG5cbiAgICBFeGFtcGxlLm9uQ29udGVudFRleHRhcmVhS2V5VXAodXBkYXRlKTtcblxuICAgIHVwZGF0ZSgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgY29uc3QgbWFwcGluZ3NDaGVja2JveENoZWNrZWQgPSBtYXBwaW5nc0NoZWNrYm94LmlzQ2hlY2tlZCgpLFxuICAgICAgICBibmZHcmFtbWFyVGV4dGFyZWFWYWx1ZSA9IEV4YW1wbGUuZ2V0Qk5GR3JhbW1hclRleHRhcmVhVmFsdWUoKSxcbiAgICAgICAgcHJvZHVjdGlvbk5hbWVUZXh0YXJlYVZhbHVlID0gcHJvZHVjdGlvbk5hbWVUZXh0YXJlYS5nZXRWYWx1ZSgpLFxuICAgICAgICBhZGp1c3RlZE1hcHBpbmdzID0gbWFwcGluZ3NDaGVja2JveENoZWNrZWQgPyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwcGluZ3MgOiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgYWRqdXN0ZWRHcmFtbWFyID0gYm5mR3JhbW1hclRleHRhcmVhVmFsdWUsIC8vL1xuICAgICAgICBwcm9kdWN0aW9uTmFtZSA9IHByb2R1Y3Rpb25OYW1lVGV4dGFyZWFWYWx1ZSwgLy8vXG4gICAgICAgIGZsb3JlbmNlUGFyc2VyID0gRmxvcmVuY2VQYXJzZXIuZnJvbUdyYW1tYXJBbmRNYXBwaW5ncyhhZGp1c3RlZEdyYW1tYXIsIGFkanVzdGVkTWFwcGluZ3MpLFxuICAgICAgICBwcm9kdWN0aW9uID0gZmxvcmVuY2VQYXJzZXIuZmluZFByb2R1Y3Rpb24ocHJvZHVjdGlvbk5hbWUpO1xuXG4gIEV4YW1wbGUudXBkYXRlUGFyc2VUcmVlVGV4dGFyZWEoZmxvcmVuY2VMZXhlciwgZmxvcmVuY2VQYXJzZXIsIHByb2R1Y3Rpb24pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlRXhhbXBsZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZ3JhbW1hciA9IGBcblxuXG4gICAgZG9jdW1lbnQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBoZWFkZXI/IHZlcnRpY2FsU3BhY2U/IGJvZHk/ICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgaGVhZGVyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBpbmNsdWRlRGlyZWN0aXZlK1xuICAgIFxuICAgIGluY2x1ZGVEaXJlY3RpdmUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCJpbmNsdWRlXCI8Tk9fV0hJVEVTUEFDRT5cIihcIjxOT19XSElURVNQQUNFPltzdHJpbmddPE5PX1dISVRFU1BBQ0U+XCIpXCIgPEVORF9PRl9MSU5FPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICBib2R5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHBhcnQrICBcbiAgICAgICAgXG4gICAgcGFydCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICB0eXBlKHMpRGVjbGFyYXRpb25cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIHR5cGVkQ29uc3RydWN0b3IocylEZWNsYXJhdGlvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAodHlwZWQpVmFyaWFibGUocylEZWNsYXJhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIChxdWFsaWZpZWQpTWV0YXZhcmlhYmxlKHMpRGVjbGFyYXRpb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgcnVsZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBheGlvbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICB0aGVvcmVtIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIGxlbW1hIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIHZlcnRpY2FsU3BhY2UgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICB0eXBlKHMpRGVjbGFyYXRpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHR5cGVzRGVjbGFyYXRpb24gfCB0eXBlRGVjbGFyYXRpb24gXG4gICAgXG4gICAgdHlwZWRDb25zdHJ1Y3RvcihzKURlY2xhcmF0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICB0eXBlZENvbnN0cnVjdG9yc0RlY2xhcmF0aW9uIHwgdHlwZWRDb25zdHJ1Y3RvckRlY2xhcmF0aW9uIFxuICAgIFxuICAgICh0eXBlZClWYXJpYWJsZShzKURlY2xhcmF0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgKHR5cGVkKVZhcmlhYmxlRGVjbGFyYXRpb24gfCAodHlwZWQpVmFyaWFibGVzRGVjbGFyYXRpb25cbiAgICBcbiAgICAocXVhbGlmaWVkKU1ldGF2YXJpYWJsZShzKURlY2xhcmF0aW9uICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIChxdWFsaWZpZWQpTWV0YXZhcmlhYmxlc0RlY2xhcmF0aW9uIHwgKHF1YWxpZmllZClNZXRhdmFyaWFibGVEZWNsYXJhdGlvblxuXG4gICAgcnVsZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIlJ1bGVcIiBwYXJlbnRoZXNpc2VkTGFiZWxMaXN0PyA8RU5EX09GX0xJTkU+IHByZW1pc2Uocyk/IGNvbmNsdXNpb24gcHJvb2Y/XG4gICAgXG4gICAgYXhpb20gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIkF4aW9tXCIgcGFyZW50aGVzaXNlZExhYmVsTGlzdD8gPEVORF9PRl9MSU5FPiBwcmVtaXNlKHMpPyBjb25jbHVzaW9uXG4gICAgXG4gICAgdGhlb3JlbSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIlRoZW9yZW1cIiBwYXJlbnRoZXNpc2VkTGFiZWxMaXN0PyA8RU5EX09GX0xJTkU+IHByZW1pc2Uocyk/IGNvbmNsdXNpb24gcHJvb2Y/XG4gICAgICAgIFxuICAgIGxlbW1hICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCJMZW1tYVwiIHBhcmVudGhlc2lzZWRMYWJlbExpc3Q/IDxFTkRfT0ZfTElORT4gcHJlbWlzZShzKT8gY29uY2x1c2lvbiBwcm9vZj9cblxuXG5cbiAgICB0eXBlc0RlY2xhcmF0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIFwiVHlwZXNcIiB0eXBlTGlzdFxuICAgIFxuICAgIHR5cGVEZWNsYXJhdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCJUeXBlXCIgdHlwZVxuICAgIFxuICAgIHR5cGVMaXN0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgdHlwZTxOT19XSElURVNQQUNFPmNvbW1hVGhlblR5cGUqXG4gICAgXG4gICAgY29tbWFUaGVuVHlwZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIixcIjxOT19XSElURVNQQUNFPnR5cGVcbiAgICBcbiAgICB0eXBlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHR5cGVOYW1lXG5cbiAgICB0eXBlTmFtZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIG5hbWVcblxuICAgIFxuICAgIFxuICAgIHR5cGVkQ29uc3RydWN0b3JzRGVjbGFyYXRpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCJDb25zdHJ1Y3RvcnNcIiB0eXBlZENvbnN0cnVjdG9yTGlzdFxuICAgIFxuICAgIHR5cGVkQ29uc3RydWN0b3JEZWNsYXJhdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCJDb25zdHJ1Y3RvclwiIHR5cGVkQ29uc3RydWN0b3JcblxuICAgIHR5cGVkQ29uc3RydWN0b3JMaXN0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgdHlwZWRDb25zdHJ1Y3RvcjxOT19XSElURVNQQUNFPmNvbW1hVGhlblR5cGVkQ29uc3RydWN0b3IqXG4gICAgXG4gICAgY29tbWFUaGVuVHlwZWRDb25zdHJ1Y3RvciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIixcIjxOT19XSElURVNQQUNFPnR5cGVkQ29uc3RydWN0b3JcbiAgICBcbiAgICB0eXBlZENvbnN0cnVjdG9yICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIGNvbnN0cnVjdG9yPE5PX1dISVRFU1BBQ0U+XCI6XCI8Tk9fV0hJVEVTUEFDRT50eXBlXG4gICAgXG4gICAgY29uc3RydWN0b3IgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBjb25zdHJ1Y3Rvck5hbWU8Tk9fV0hJVEVTUEFDRT5wYXJlbnRoZXNpc2VkVHlwZUxpc3Q/XG4gICAgXG4gICAgcGFyZW50aGVzaXNlZFR5cGVMaXN0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIihcIjxOT19XSElURVNQQUNFPnR5cGVMaXN0PE5PX1dISVRFU1BBQ0U+XCIpXCJcblxuICAgIGNvbnN0cnVjdG9yTmFtZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgbmFtZVxuXG5cblxuICAgICh0eXBlZClWYXJpYWJsZXNEZWNsYXJhdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCJWYXJpYWJsZXNcIiAodHlwZWQpVmFyaWFibGVMaXN0XG4gICAgXG4gICAgKHR5cGVkKVZhcmlhYmxlRGVjbGFyYXRpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIlZhcmlhYmxlXCIgKHR5cGVkKVZhcmlhYmxlXG5cbiAgICAodHlwZWQpVmFyaWFibGVMaXN0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgICh0eXBlZClWYXJpYWJsZTxOT19XSElURVNQQUNFPmNvbW1hVGhlbih0eXBlZClWYXJpYWJsZSpcbiAgICBcbiAgICBjb21tYVRoZW4odHlwZWQpVmFyaWFibGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIFwiLFwiPE5PX1dISVRFU1BBQ0U+KHR5cGVkKVZhcmlhYmxlXG4gICAgXG4gICAgKHR5cGVkKVZhcmlhYmxlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICB0eXBlZFZhcmlhYmxlIHwgdmFyaWFibGVcbiAgICBcbiAgICB0eXBlZFZhcmlhYmxlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHZhcmlhYmxlPE5PX1dISVRFU1BBQ0U+XCI6XCI8Tk9fV0hJVEVTUEFDRT50eXBlXG4gICAgXG4gICAgdmFyaWFibGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICB2YXJpYWJsZU5hbWVcbiAgICBcbiAgICB2YXJpYWJsZU5hbWUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIG5hbWVcbiAgICBcbiAgICBcbiAgICBcbiAgICAocXVhbGlmaWVkKU1ldGF2YXJpYWJsZXNEZWNsYXJhdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIFwiTWV0YXZhcmlhYmxlc1wiIChxdWFsaWZpZWQpTWV0YXZhcmlhYmxlTGlzdFxuICAgIFxuICAgIChxdWFsaWZpZWQpTWV0YXZhcmlhYmxlRGVjbGFyYXRpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCJNZXRhdmFyaWFibGVcIiAocXVhbGlmaWVkKU1ldGF2YXJpYWJsZVxuICAgIFxuICAgIChxdWFsaWZpZWQpTWV0YXZhcmlhYmxlTGlzdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgKHF1YWxpZmllZClNZXRhdmFyaWFibGU8Tk9fV0hJVEVTUEFDRT5jb21tYVRoZW4ocXVhbGlmaWVkKU1ldGF2YXJpYWJsZStcblxuICAgIGNvbW1hVGhlbihxdWFsaWZpZWQpTWV0YXZhcmlhYmxlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCIsXCI8Tk9fV0hJVEVTUEFDRT4ocXVhbGlmaWVkKU1ldGF2YXJpYWJsZVxuXG4gICAgKHF1YWxpZmllZClNZXRhdmFyaWFibGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBxdWFsaWZpZWRNZXRhdmFyaWFibGUgfCBtZXRhdmFyaWFibGVcbiAgICBcbiAgICBxdWFsaWZpZWRNZXRhdmFyaWFibGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIG1ldGF2YXJpYWJsZTxOT19XSElURVNQQUNFPnBhcmVudGhlc2lzZWRUeXBlT3JUZXJtXG5cbiAgICBtZXRhdmFyaWFibGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIG1ldGF2YXJpYWJsZU5hbWVcblxuICAgIHBhcmVudGhlc2lzZWRUeXBlT3JUZXJtICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCIoXCI8Tk9fV0hJVEVTUEFDRT50eXBlT3JUZXJtPE5PX1dISVRFU1BBQ0U+XCIpXCJcbiAgICBcbiAgICB0eXBlT3JUZXJtICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHR5cGUgfCB0ZXJtXG4gICAgXG4gICAgbWV0YXZhcmlhYmxlTmFtZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBuYW1lXG4gICAgXG4gICAgXG5cbiAgICBwYXJlbnRoZXNpc2VkTGFiZWxMaXN0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIFwiKFwiPE5PX1dISVRFU1BBQ0U+bGFiZWxMaXN0PE5PX1dISVRFU1BBQ0U+XCIpXCJcbiAgICBcbiAgICBsYWJlbExpc3QgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIGxhYmVsPE5PX1dISVRFU1BBQ0U+Y29tbWFUaGVuTGFiZWwqXG4gICAgXG4gICAgY29tbWFUaGVuTGFiZWwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIixcIjxOT19XSElURVNQQUNFPmxhYmVsXG4gICAgXG4gICAgbGFiZWwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBsYWJlbE5hbWU8Tk9fV0hJVEVTUEFDRT5wYXJlbnRoZXNpc2VkVGVybUxpc3Q/XG4gICAgXG4gICAgbGFiZWxOYW1lICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBuYW1lXG5cbiAgICBcbiAgICBcbiAgICBwcmVtaXNlKHMpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHByZW1pc2UgfCBwcmVtaXNlc1xuICAgIFxuICAgIHByZW1pc2UgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCJQcmVtaXNlXCIgPEVORF9PRl9MSU5FPiB1bmp1c3RpZmllZFN0YXRlbWVudE9yVW5rbm93blxuICAgIFxuICAgIHByZW1pc2VzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCJQcmVtaXNlc1wiIDxFTkRfT0ZfTElORT4gdW5qdXN0aWZpZWRTdGF0ZW1lbnRPclVua25vd24gdW5qdXN0aWZpZWRTdGF0ZW1lbnRPclVua25vd24rXG4gICAgXG4gICAgY29uY2x1c2lvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIkNvbmNsdXNpb25cIiA8RU5EX09GX0xJTkU+ICh1bilqdXN0aWZpZWRTdGF0ZW1lbnRPclVua25vd25cbiAgICBcblxuXG4gICAgcHJvb2YgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIlByb29mXCIgPEVORF9PRl9MSU5FPiAoYWJyaWRnZWQpUHJvb2ZEZXJpdmF0aW9uXG4gICAgXG4gICAgKGFicmlkZ2VkKVByb29mRGVyaXZhdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBwcm9vZkRlcml2YXRpb24gfCBhYnJpZGdlZFByb29mRGVyaXZhdGlvblxuICAgIFxuICAgIGFicmlkZ2VkUHJvb2ZEZXJpdmF0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgKHVuKWp1c3RpZmllZFN0YXRlbWVudE9yVW5rbm93blxuICAgIFxuICAgIHByb29mRGVyaXZhdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgZGVyaXZhdGlvbiB0aGVyZWZvcmVcbiAgICBcbiAgICBkZXJpdmF0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHN1YkRlcml2YXRpb24rICAgIFxuICAgIFxuICAgIHRoZXJlZm9yZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCJUaGVyZWZvcmVcIiA8RU5EX09GX0xJTkU+ICh1bilqdXN0aWZpZWRTdGF0ZW1lbnRPclVua25vd25cbiAgICBcbiAgICBzdWJEZXJpdmF0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHN1YkxlbW1hIHwgKHVuKWp1c3RpZmllZFN0YXRlbWVudE9yVW5rbm93blxuICAgIFxuICAgIFxuICAgIFxuICAgIHN1YkxlbW1hICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgc3VwcG9zZSB0aGVuPyBoZW5jZSB1bmp1c3RpZmllZFN0YXRlbWVudE9yVW5rbm93bj8gdmVydGljYWxTcGFjZT8gICAgXG4gICAgXG4gICAgc3VwcG9zZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIlN1cHBvc2VcIiA8RU5EX09GX0xJTkU+IHVuanVzdGlmaWVkU3RhdGVtZW50T3JVbmtub3duK1xuICAgIFxuICAgIHRoZW4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCJUaGVuXCIgPEVORF9PRl9MSU5FPiBkZXJpdmF0aW9uXG4gICAgXG4gICAgaGVuY2UgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIkhlbmNlXCIgPEVORF9PRl9MSU5FPiAodW4panVzdGlmaWVkU3RhdGVtZW50T3JVbmtub3duXG4gICAgXG4gICAgXG4gICAgXG4gICAgKHVuKWp1c3RpZmllZFN0YXRlbWVudE9yVW5rbm93biAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBqdXN0aWZpZWRTdGF0ZW1lbnQgfCB1bmp1c3RpZmllZFN0YXRlbWVudCB8IHVua25vd25cbiAgICBcbiAgICB1bmp1c3RpZmllZFN0YXRlbWVudE9yVW5rbm93biAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHVuanVzdGlmaWVkU3RhdGVtZW50IHwgdW5rbm93blxuICAgIFxuICAgIHVuanVzdGlmaWVkU3RhdGVtZW50ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgc3RhdGVtZW50IDxFTkRfT0ZfTElORT5cbiAgICBcbiAgICBqdXN0aWZpZWRTdGF0ZW1lbnQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHN0YXRlbWVudCBqdXN0aWZpY2F0aW9uIDxFTkRfT0ZfTElORT5cbiAgICAgIFxuICAgIGp1c3RpZmljYXRpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgYnlPckZyb20gcmVmZXJlbmNlXG4gICAgIFxuICAgIGJ5T3JGcm9tICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCJieVwiIHwgXCJmcm9tXCJcbiAgICAgXG4gICAgcmVmZXJlbmNlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICByZWZlcmVuY2VOYW1lPE5PX1dISVRFU1BBQ0U+cGFyZW50aGVzaXNlZFRlcm1MaXN0P1xuXG4gICAgcmVmZXJlbmNlTmFtZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBuYW1lXG5cbiAgICBcblxuICAgIHN0YXRlbWVudCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgcHJvb2ZBc3NlcnRpb24gfCB0eXBlQXNzZXJ0aW9uIHwgZXF1YWxpdHkgfCBleHByZXNzaW9uICAgICBcbiAgICBcbiAgICBcbiAgICBcbiAgICBwcm9vZkFzc2VydGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIChxdWFsaWZpZWQpTWV0YXZhcmlhYmxlIFwiOjpcIiAocXVhbGlmaWVkKU1ldGF2YXJpYWJsZVxuXG4gICAgdHlwZUFzc2VydGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBleHByZXNzaW9uIFwiOlwiIHR5cGVcbiAgICBcbiAgICBlcXVhbGl0eSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIGV4cHJlc3Npb24gXCI9XCIgZXhwcmVzc2lvbiAgICBcbiAgICBcbiAgICBleHByZXNzaW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHRlcm0gfCAocXVhbGlmaWVkKU1ldGF2YXJpYWJsZVxuICAgIFxuICAgIFxuXG4gICAgdGVybSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBjb21wb3VuZFRlcm0gfCB2YXJpYWJsZU5hbWVcbiAgICBcbiAgICBjb21wb3VuZFRlcm0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIGNvbnN0cnVjdG9yTmFtZTxOT19XSElURVNQQUNFPnBhcmVudGhlc2lzZWRUZXJtTGlzdD9cbiAgICBcbiAgICBcblxuICAgIHBhcmVudGhlc2lzZWRUZXJtTGlzdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCIoXCI8Tk9fV0hJVEVTUEFDRT50ZXJtTGlzdDxOT19XSElURVNQQUNFPlwiKVwiXG5cbiAgICB0ZXJtTGlzdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHRlcm08Tk9fV0hJVEVTUEFDRT5jb21tYVRoZW5UZXJtKlxuICAgIFxuICAgIGNvbW1hVGhlblRlcm0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCIsXCI8Tk9fV0hJVEVTUEFDRT50ZXJtXG4gICAgXG5cblxuICAgIG5hbWUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgL1xcXFx3Ky9cbiAgICBcbiAgICBcblxuICAgIHVua25vd24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgc3BlY2lhbFVuYXNzaWduZWRPck1pbm9yS2V5d29yZHMrIDxFTkRfT0ZfTElORT5cblxuICAgIHNwZWNpYWxVbmFzc2lnbmVkT3JNaW5vcktleXdvcmRzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgW3NwZWNpYWxdIHwgW3VuYXNzaWduZWRdIHwgXCJieVwiIHwgXCJmcm9tXCJcblxuXG5cbiAgICB2ZXJ0aWNhbFNwYWNlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIDxFTkRfT0ZfTElORT4rXG4gICAgXG4gICAgXG4gICAgXG4gICAgZXJyb3IgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICAqXG4gICAgXG5gO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdyYW1tYXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFRyYW5zcGFyZW50Tm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsL3RyYW5zcGFyZW50JyksXG4gICAgICBEaXNjYXJkU2Vjb25kQ2hpbGROb2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwvZGlzY2FyZFNlY29uZENoaWxkJyksXG4gICAgICBUcmFuc3BhcmVudFRoZW5LZWVwU2Vjb25kTm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsL3RyYW5zcGFyZW50VGhlbktlZXBTZWNvbmQnKTtcblxuY29uc3QgbWFwcGluZ3MgPSB7XG5cbiAgJ25hbWUnOiBUcmFuc3BhcmVudE5vZGUsXG4gICdwYXJ0JzogVHJhbnNwYXJlbnROb2RlLFxuICAnc3RhdGVtZW50JzogVHJhbnNwYXJlbnROb2RlLFxuICAnc3ViRGVyaXZhdGlvbic6IFRyYW5zcGFyZW50Tm9kZSxcbiAgJ3Byb29mRGVyaXZhdGlvbic6IFRyYW5zcGFyZW50Tm9kZSxcbiAgJ3BhcmVudGhlc2lzZWRUeXBlJzogVHJhbnNwYXJlbnROb2RlLFxuICAnYWJyaWRnZWRQcm9vZkRlcml2YXRpb24nOiBUcmFuc3BhcmVudE5vZGUsXG5cbiAgJ3R5cGVOYW1lJzogVHJhbnNwYXJlbnROb2RlLFxuICAnbGFiZWxOYW1lJzogVHJhbnNwYXJlbnROb2RlLFxuICAndmFyaWFibGVOYW1lJzogVHJhbnNwYXJlbnROb2RlLFxuICAncmVmZXJlbmNlTmFtZSc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgJ2NvbnN0cnVjdG9yTmFtZSc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgJ21ldGF2YXJpYWJsZU5hbWUnOiBUcmFuc3BhcmVudE5vZGUsXG5cbiAgJ3ByZW1pc2UocyknOiBUcmFuc3BhcmVudE5vZGUsXG4gICd0eXBlKHMpRGVjbGFyYXRpb24nOiBUcmFuc3BhcmVudE5vZGUsXG4gICcodHlwZWQpVmFyaWFibGUocylEZWNsYXJhdGlvbic6IFRyYW5zcGFyZW50Tm9kZSxcbiAgJ3R5cGVkQ29uc3RydWN0b3IocylEZWNsYXJhdGlvbic6IFRyYW5zcGFyZW50Tm9kZSxcbiAgJyhxdWFsaWZpZWQpTWV0YXZhcmlhYmxlKHMpRGVjbGFyYXRpb24nOiBUcmFuc3BhcmVudE5vZGUsXG5cbiAgJyh0eXBlZClWYXJpYWJsZSc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgJyhxdWFsaWZpZWQpTWV0YXZhcmlhYmxlJzogVHJhbnNwYXJlbnROb2RlLFxuICAnKGFicmlkZ2VkKVByb29mRGVyaXZhdGlvbic6IFRyYW5zcGFyZW50Tm9kZSxcblxuICAnYnlPckZyb20nOiBUcmFuc3BhcmVudE5vZGUsXG4gICd0eXBlT3JUZXJtJzogVHJhbnNwYXJlbnROb2RlLFxuICAndW5qdXN0aWZpZWRTdGF0ZW1lbnRPclVua25vd24nOiBUcmFuc3BhcmVudE5vZGUsXG4gICcodW4panVzdGlmaWVkU3RhdGVtZW50T3JVbmtub3duJzogVHJhbnNwYXJlbnROb2RlLFxuICAnc3BlY2lhbFVuYXNzaWduZWRPck1pbm9yS2V5d29yZHMnOiBUcmFuc3BhcmVudE5vZGUsXG5cbiAgJ2NvbW1hVGhlblRlcm0nOiBUcmFuc3BhcmVudFRoZW5LZWVwU2Vjb25kTm9kZSxcbiAgJ2NvbW1hVGhlblR5cGUnOiBUcmFuc3BhcmVudFRoZW5LZWVwU2Vjb25kTm9kZSxcbiAgJ2NvbW1hVGhlbkxhYmVsJzogVHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZE5vZGUsXG4gICdjb21tYVRoZW5NZXRhdmFyaWFibGUnOiBUcmFuc3BhcmVudFRoZW5LZWVwU2Vjb25kTm9kZSxcbiAgJ2NvbW1hVGhlbih0eXBlZClWYXJpYWJsZSc6IFRyYW5zcGFyZW50VGhlbktlZXBTZWNvbmROb2RlLFxuICAnY29tbWFUaGVuVHlwZWRDb25zdHJ1Y3Rvcic6IFRyYW5zcGFyZW50VGhlbktlZXBTZWNvbmROb2RlLFxuICAnY29tbWFUaGVuKHF1YWxpZmllZClNZXRhdmFyaWFibGUnOiBUcmFuc3BhcmVudFRoZW5LZWVwU2Vjb25kTm9kZSxcblxuICAncGFyZW50aGVzaXNlZFRlcm1MaXN0JzogVHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZE5vZGUsXG4gICdwYXJlbnRoZXNpc2VkVHlwZUxpc3QnOiBUcmFuc3BhcmVudFRoZW5LZWVwU2Vjb25kTm9kZSxcbiAgJ3BhcmVudGhlc2lzZWRMYWJlbExpc3QnOiBUcmFuc3BhcmVudFRoZW5LZWVwU2Vjb25kTm9kZSxcblxuICAnY29uY2x1c2lvbic6IERpc2NhcmRTZWNvbmRDaGlsZE5vZGUsXG4gICd0eXBlZFZhcmlhYmxlJzogRGlzY2FyZFNlY29uZENoaWxkTm9kZSxcbiAgJ3R5cGVkQ29uc3RydWN0b3InOiBEaXNjYXJkU2Vjb25kQ2hpbGROb2RlXG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwcGluZ3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBncmFtbWFyID0gcmVxdWlyZSgnLi9ncmFtbWFyJyksXG4gICAgICBtYXBwaW5ncyA9IHJlcXVpcmUoJy4vbWFwcGluZ3MnKSxcbiAgICAgIENvbW1vblBhcnNlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9wYXJzZXInKSxcbiAgICAgIFByaW1pdGl2ZVBhcnNlciA9IHJlcXVpcmUoJy4uL3ByaW1pdGl2ZS9wYXJzZXInKTtcblxuY29uc3QgeyBQcmltaXRpdmVMZXhlciwgRmxvcmVuY2VMZXhlciB9ID0gbGV4ZXJzO1xuXG5jb25zdCBzaWduaWZpY2FudFRva2VuVHlwZXMgPSBGbG9yZW5jZUxleGVyLnNpZ25pZmljYW50VG9rZW5UeXBlcygpO1xuXG5jbGFzcyBGbG9yZW5jZVBhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBmcm9tQWRkaXRpb25hbE1hcHBpbmdzKGFkZGl0aW9uYWxNYXBwaW5ncykge1xuICAgIGNvbnN0IGZsb3JlbmNlUGFyc2VyID0gRmxvcmVuY2VQYXJzZXIuZnJvbUdyYW1tYXJBbmRNYXBwaW5ncyhncmFtbWFyLCBPYmplY3QuYXNzaWduKG1hcHBpbmdzLCBhZGRpdGlvbmFsTWFwcGluZ3MpKTsgLy8vXG5cbiAgICByZXR1cm4gZmxvcmVuY2VQYXJzZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbUdyYW1tYXJBbmRNYXBwaW5ncyhncmFtbWFyLCBtYXBwaW5ncykge1xuICAgIGNvbnN0IGxpbmVzID0gUHJpbWl0aXZlTGV4ZXIubGluZXNGcm9tR3JhbW1hcihncmFtbWFyKSxcbiAgICAgICAgICBwcm9kdWN0aW9ucyA9IFByaW1pdGl2ZVBhcnNlci5wYXJzZShsaW5lcywgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBtYXBwaW5ncyksXG4gICAgICAgICAgZmxvcmVuY2VQYXJzZXIgPSBuZXcgRmxvcmVuY2VQYXJzZXIocHJvZHVjdGlvbnMpO1xuXG4gICAgcmV0dXJuIGZsb3JlbmNlUGFyc2VyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VQYXJzZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEN5Y2xlID0gcmVxdWlyZSgnLi9ncmFwaC9jeWNsZScpLFxuICAgICAgU3RhY2sgPSByZXF1aXJlKCcuL2dyYXBoL3N0YWNrJyksXG4gICAgICBWZXJ0ZXggPSByZXF1aXJlKCcuL2dyYXBoL3ZlcnRleCcpLFxuICAgICAgQ29tcG9uZW50ID0gcmVxdWlyZSgnLi9ncmFwaC9jb21wb25lbnQnKTtcblxuY2xhc3MgR3JhcGgge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy52ZXJ0ZXhtYXAgPSB7fTtcbiAgfVxuICBcbiAgZ2V0Q3ljbGVzKCkge1xuICAgIGNvbnN0IGNvbXBvbmVudHMgPSB0aGlzLmdldENvbXBvbmVudHMoKSxcbiAgICAgICAgICBjeWNsZXMgPSBjb21wb25lbnRzLnJlZHVjZShmdW5jdGlvbihjeWNsZXMsIGNvbXBvbmVudCkge1xuICAgICAgICAgICAgY29uc3QgY29tcG9uZW50Q3ljbGljID0gY29tcG9uZW50LmlzQ3ljbGljKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChjb21wb25lbnRDeWNsaWMpIHtcbiAgICAgICAgICAgICAgY29uc3QgY3ljbGUgPSBDeWNsZS5mcm9tQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBjeWNsZXMucHVzaChjeWNsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBjeWNsZXM7XG4gICAgICAgICAgfSwgW10pO1xuICAgIFxuICAgIHJldHVybiBjeWNsZXM7XG4gIH1cbiAgXG4gIGdldFZlcnRpY2VzKCkge1xuICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXModGhpcy52ZXJ0ZXhtYXApLFxuICAgICAgICAgIHZlcnRpY2VzID0gbmFtZXMubWFwKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHZlcnRleCA9IHRoaXMudmVydGV4bWFwW25hbWVdO1xuICBcbiAgICAgICAgICAgIHJldHVybiB2ZXJ0ZXg7XG4gICAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICBcbiAgICByZXR1cm4gdmVydGljZXM7ICAgICAgICBcbiAgfVxuXG4gIGdldENvbXBvbmVudHMoKSB7XG4gICAgY29uc3Qgc3RhY2sgPSBuZXcgU3RhY2soKSxcbiAgICAgICAgICB2ZXJ0aWNlcyA9IHRoaXMuZ2V0VmVydGljZXMoKSxcbiAgICAgICAgICBjb21wb25lbnRzID0gW107XG5cbiAgICBsZXQgaW5kZXggPSAwO1xuXG4gICAgZnVuY3Rpb24gc3Ryb25nbHlDb25uZWN0VmVydGV4KHZlcnRleCkge1xuICAgICAgY29uc3QgbG93ZXN0SW5kZXggPSBpbmRleDsgIC8vL1xuXG4gICAgICB2ZXJ0ZXguc2V0SW5kZXgoaW5kZXgpO1xuXG4gICAgICB2ZXJ0ZXguc2V0TG93ZXN0SW5kZXgobG93ZXN0SW5kZXgpO1xuXG4gICAgICBpbmRleCsrO1xuXG4gICAgICBzdGFjay5wdXNoKHZlcnRleCk7XG5cbiAgICAgIGNvbnN0IHN1Y2Nlc3NvclZlcnRpY2VzID0gdmVydGV4LmdldFN1Y2Nlc3NvclZlcnRpY2VzKCk7XG5cbiAgICAgIHN1Y2Nlc3NvclZlcnRpY2VzLmZvckVhY2goZnVuY3Rpb24oc3VjY2Vzc29yVmVydGV4KSB7XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3NvclZlcnRleFVuaW5kZXhlZCA9IHN1Y2Nlc3NvclZlcnRleC5pc1VuaW5kZXhlZCgpLFxuICAgICAgICAgICAgICBzdWNjZXNzb3JWZXJ0ZXhOb3RTdHJvbmdseUNvbm5lY3RlZCA9IHN1Y2Nlc3NvclZlcnRleFVuaW5kZXhlZDsgIC8vL1xuXG4gICAgICAgIGlmIChzdWNjZXNzb3JWZXJ0ZXhOb3RTdHJvbmdseUNvbm5lY3RlZCkge1xuICAgICAgICAgIHN0cm9uZ2x5Q29ubmVjdFZlcnRleChzdWNjZXNzb3JWZXJ0ZXgpO1xuXG4gICAgICAgICAgY29uc3Qgc3VjY2Vzc29yVmVydGV4TG93ZXN0SW5kZXggPSBzdWNjZXNzb3JWZXJ0ZXguZ2V0TG93ZXN0SW5kZXgoKTtcblxuICAgICAgICAgIHZlcnRleC51cGRhdGVMb3dlc3RJbmRleChzdWNjZXNzb3JWZXJ0ZXhMb3dlc3RJbmRleCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3Qgc3VjY2Vzc29yVmVydGV4U3RhY2tlZCA9IHN1Y2Nlc3NvclZlcnRleC5pc1N0YWNrZWQoKTtcblxuICAgICAgICAgIGlmIChzdWNjZXNzb3JWZXJ0ZXhTdGFja2VkKSB7XG4gICAgICAgICAgICBjb25zdCBzdWNjZXNzb3JWZXJ0ZXhJbmRleCA9IHN1Y2Nlc3NvclZlcnRleC5nZXRJbmRleCgpO1xuXG4gICAgICAgICAgICB2ZXJ0ZXgudXBkYXRlTG93ZXN0SW5kZXgoc3VjY2Vzc29yVmVydGV4SW5kZXgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHZlcnRleExvd2VzdCA9IHZlcnRleC5pc0xvd2VzdCgpO1xuXG4gICAgICBpZiAodmVydGV4TG93ZXN0KSB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IENvbXBvbmVudC5mcm9tU3RhY2tBbmRWZXJ0ZXgoc3RhY2ssIHZlcnRleCk7XG5cbiAgICAgICAgY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmVydGljZXMuZm9yRWFjaChmdW5jdGlvbih2ZXJ0ZXgpIHtcbiAgICAgIGNvbnN0IHZlcnRleFVuaW5kZXhlZCA9IHZlcnRleC5pc1VuaW5kZXhlZCgpO1xuXG4gICAgICBpZiAodmVydGV4VW5pbmRleGVkKSB7XG4gICAgICAgIHN0cm9uZ2x5Q29ubmVjdFZlcnRleCh2ZXJ0ZXgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gIH1cblxuICBhZGRWZXJ0ZXgobmFtZSwgZGVzY2VuZGFudFZlcnRleE5hbWVzKSB7XG4gICAgbGV0IHN1Y2Nlc3NvclZlcnRpY2VzID0gZGVzY2VuZGFudFZlcnRleE5hbWVzLm1hcChmdW5jdGlvbihkZXNjZW5kYW50VmVydGV4TmFtZSkge1xuICAgICAgY29uc3Qgc3VjY2Vzc29yVmVydGV4TmFtZSA9IGRlc2NlbmRhbnRWZXJ0ZXhOYW1lOyAgLy8vXG5cbiAgICAgIGxldCBzdWNjZXNzb3JWZXJ0ZXggPSB0aGlzLnZlcnRleG1hcFtzdWNjZXNzb3JWZXJ0ZXhOYW1lXTtcblxuICAgICAgaWYgKHN1Y2Nlc3NvclZlcnRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHN1Y2Nlc3NvclZlcnRleCA9IFZlcnRleC5mcm9tTmFtZShzdWNjZXNzb3JWZXJ0ZXhOYW1lKTtcblxuICAgICAgICB0aGlzLnZlcnRleG1hcFtzdWNjZXNzb3JWZXJ0ZXhOYW1lXSA9IHN1Y2Nlc3NvclZlcnRleDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN1Y2Nlc3NvclZlcnRleDtcbiAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgbGV0IHZlcnRleCA9IHRoaXMudmVydGV4bWFwW25hbWVdO1xuXG4gICAgaWYgKHZlcnRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB2ZXJ0ZXggPSBWZXJ0ZXguZnJvbU5hbWUobmFtZSk7XG5cbiAgICAgIHRoaXMudmVydGV4bWFwW25hbWVdID0gdmVydGV4O1xuICAgIH1cblxuICAgIHN1Y2Nlc3NvclZlcnRpY2VzID0gc3VjY2Vzc29yVmVydGljZXMuY29uY2F0KFtdKS5yZXZlcnNlKCk7IC8vL1xuXG4gICAgdmVydGV4LnNldFN1Y2Nlc3NvclZlcnRpY2VzKHN1Y2Nlc3NvclZlcnRpY2VzKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdyYXBoO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcykge1xuICAgIHRoaXMudmVydGljZXMgPSB2ZXJ0aWNlcztcbiAgfVxuICBcbiAgZ2V0VmVydGljZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGljZXM7XG4gIH1cbiAgXG4gIGlzQ3ljbGljKCkge1xuICAgIGNvbnN0IHZlcnRpY2VzTGVuZ3RoID0gdGhpcy52ZXJ0aWNlcy5sZW5ndGgsXG4gICAgICAgICAgY3ljbGljID0gKHZlcnRpY2VzTGVuZ3RoID4gMSk7ICAvLy9cbiAgICBcbiAgICByZXR1cm4gY3ljbGljO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVN0YWNrQW5kVmVydGV4KHN0YWNrLCB2ZXJ0ZXgpIHtcbiAgICBjb25zdCBzdGFja1ZlcnRpY2VzID0gW107XG4gICAgXG4gICAgbGV0IHN0YWNrVmVydGV4O1xuXG4gICAgZG8ge1xuICAgICAgc3RhY2tWZXJ0ZXggPSBzdGFjay5wb3AoKTtcblxuICAgICAgc3RhY2tWZXJ0aWNlcy5wdXNoKHN0YWNrVmVydGV4KVxuICAgIH0gd2hpbGUgKHN0YWNrVmVydGV4ICE9PSB2ZXJ0ZXgpO1xuICAgIFxuICAgIGNvbnN0IHZlcnRpY2VzID0gc3RhY2tWZXJ0aWNlcywgLy8vIFxuICAgICAgICAgIGNvbXBvbmVudCA9IG5ldyBDb21wb25lbnQodmVydGljZXMpO1xuXG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgQ3ljbGUge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcykge1xuICAgIHRoaXMudmVydGljZXMgPSB2ZXJ0aWNlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgIGNvbnN0IHZlcnRpY2VzID0gY29tcG9uZW50LmdldFZlcnRpY2VzKCksXG4gICAgICAgICAgY3ljbGUgPSBuZXcgQ3ljbGUodmVydGljZXMpO1xuICAgIFxuICAgIHJldHVybiBjeWNsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEN5Y2xlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBTdGFjayB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudmVydGljZXMgPSBbXTtcbiAgfVxuICBcbiAgcG9wKCkge1xuICAgIGNvbnN0IHZlcnRleCA9IHRoaXMudmVydGljZXMucG9wKCksXG4gICAgICAgICAgc3RhY2tlZCA9IGZhbHNlO1xuICAgIFxuICAgIHZlcnRleC5zZXRTdGFja2VkKHN0YWNrZWQpO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cbiAgXG4gIHB1c2godmVydGV4KSB7XG4gICAgY29uc3Qgc3RhY2tlZCA9IHRydWU7XG4gICAgXG4gICAgdmVydGV4LnNldFN0YWNrZWQoc3RhY2tlZCk7XG4gICAgXG4gICAgdGhpcy52ZXJ0aWNlcy5wdXNoKHZlcnRleCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTdGFjaztcbiIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgVmVydGV4IHtcbiAgY29uc3RydWN0b3IobmFtZSwgaW5kZXgsIHN0YWNrZWQsIHZpc2l0ZWQsIGxvd2VzdEluZGV4LCBzdWNjZXNzb3JWZXJ0aWNlcykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgIHRoaXMuc3RhY2tlZCA9IHN0YWNrZWQ7XG4gICAgdGhpcy52aXNpdGVkID0gdmlzaXRlZDtcbiAgICB0aGlzLmxvd2VzdEluZGV4ID0gbG93ZXN0SW5kZXg7XG4gICAgdGhpcy5zdWNjZXNzb3JWZXJ0aWNlcyA9IHN1Y2Nlc3NvclZlcnRpY2VzO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0SW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5kZXg7XG4gIH1cblxuICBpc1N0YWNrZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhY2tlZDtcbiAgfVxuXG4gIGlzVmlzaXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy52aXNpdGVkO1xuICB9XG5cbiAgZ2V0TG93ZXN0SW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMubG93ZXN0SW5kZXg7XG4gIH1cblxuICBnZXRTdWNjZXNzb3JWZXJ0aWNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5zdWNjZXNzb3JWZXJ0aWNlcztcbiAgfVxuICBcbiAgaXNVbmluZGV4ZWQoKSB7XG4gICAgY29uc3QgdW5pbmRleGVkID0gKHRoaXMuaW5kZXggPCAwKTsgLy8vXG4gICAgXG4gICAgcmV0dXJuIHVuaW5kZXhlZDtcbiAgfVxuICBcbiAgaXNMb3dlc3QoKSB7XG4gICAgY29uc3QgbG93ZXN0ID0gKHRoaXMuaW5kZXggPT09IHRoaXMubG93ZXN0SW5kZXgpOyAvLy9cbiAgICBcbiAgICByZXR1cm4gbG93ZXN0O1xuICB9XG5cbiAgc2V0SW5kZXgoaW5kZXgpIHtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gIH1cblxuICBzZXRTdGFja2VkKHN0YWNrZWQpIHtcbiAgICB0aGlzLnN0YWNrZWQgPSBzdGFja2VkO1xuICB9XG5cbiAgc2V0VmlzaXRlZCh2aXNpdGVkKSB7XG4gICAgdGhpcy52aXNpdGVkID0gdmlzaXRlZDtcbiAgfVxuICBcbiAgc2V0TG93ZXN0SW5kZXgobG93ZXN0SW5kZXgpIHtcbiAgICB0aGlzLmxvd2VzdEluZGV4ID0gbG93ZXN0SW5kZXg7XG4gIH1cblxuICBzZXRTdWNjZXNzb3JWZXJ0aWNlcyhzdWNjZXNzb3JWZXJ0aWNlcykge1xuICAgIHRoaXMuc3VjY2Vzc29yVmVydGljZXMgPSAgc3VjY2Vzc29yVmVydGljZXM7XG4gIH1cbiAgXG4gIHVwZGF0ZUxvd2VzdEluZGV4KGxvd2VzdEluZGV4KSB7XG4gICAgaWYgKGxvd2VzdEluZGV4IDwgdGhpcy5sb3dlc3RJbmRleCkge1xuICAgICAgdGhpcy5sb3dlc3RJbmRleCA9IGxvd2VzdEluZGV4O1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZShuYW1lKSB7XG4gICAgY29uc3QgaW5kZXggPSAtMSxcbiAgICAgICAgICBzdGFja2VkID0gZmFsc2UsXG4gICAgICAgICAgdmlzaXRlZCA9IGZhbHNlLFxuICAgICAgICAgIGxvd2VzdEluZGV4ID0gLTEsXG4gICAgICAgICAgc3VjY2Vzc29yVmVydGljZXMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXggPSBuZXcgVmVydGV4KG5hbWUsIGluZGV4LCBzdGFja2VkLCB2aXNpdGVkLCBsb3dlc3RJbmRleCwgc3VjY2Vzc29yVmVydGljZXMpO1xuXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZlcnRleDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi9wcm9kdWN0aW9uJyksXG4gICAgICBFcnJvck5vZGUgPSByZXF1aXJlKCcuLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC9lcnJvcicpO1xuXG5jbGFzcyBQcmltaXRpdmVQYXJzZXIge1xuICBzdGF0aWMgcGFyc2UobGluZXMsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbWFwcGluZ3MpIHtcbiAgICBsZXQgcHJvZHVjdGlvbnM7XG5cbiAgICBtYXBwaW5ncyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgJ2Vycm9yJzogRXJyb3JOb2RlXG4gICAgfSwgbWFwcGluZ3MpO1xuXG4gICAgdHJ5IHtcbiAgICAgIHByb2R1Y3Rpb25zID0gbGluZXMubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgY29uc3QgcHJvZHVjdGlvbiA9IFByb2R1Y3Rpb24uZnJvbUxpbmUobGluZSwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBtYXBwaW5ncyk7XG5cbiAgICAgICAgcmV0dXJuIHByb2R1Y3Rpb247XG4gICAgICB9KTtcbiAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICBwcm9kdWN0aW9ucyA9IFtdO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9kdWN0aW9ucztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByaW1pdGl2ZVBhcnNlcjtcblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBhcnJheVV0aWwge1xuICBzdGF0aWMga2VlcEZpcnN0KGFycmF5KSB7IHJldHVybiBrZWVwTnRoKGFycmF5LCAwKTsgfVxuXG4gIHN0YXRpYyBrZWVwU2Vjb25kKGFycmF5KSB7IHJldHVybiBrZWVwTnRoKGFycmF5LCAxKTsgfVxuXG4gIHN0YXRpYyBrZWVwTGFzdChhcnJheSkgeyByZXR1cm4ga2VlcE50aChhcnJheSwgLTEpOyB9XG5cbiAgc3RhdGljIGRpc2NhcmRGaXJzdChhcnJheSkgeyByZXR1cm4gZGlzY2FyZE50aChhcnJheSwgMCk7IH1cblxuICBzdGF0aWMgZGlzY2FyZFNlY29uZChhcnJheSkgeyByZXR1cm4gZGlzY2FyZE50aChhcnJheSwgMSk7IH1cblxuICBzdGF0aWMgZGlzY2FyZExhc3QoYXJyYXkpIHsgcmV0dXJuIGRpc2NhcmROdGgoYXJyYXksIC0xKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5VXRpbDtcblxuZnVuY3Rpb24ga2VlcE50aChhcnJheSwgbikge1xuICBhcnJheSA9IGFycmF5LnNsaWNlKCk7XG5cbiAgcmV0dXJuIGFycmF5LnNwbGljZShuLCAxKTtcbn1cblxuZnVuY3Rpb24gZGlzY2FyZE50aChhcnJheSwgbikge1xuICBhcnJheSA9IGFycmF5LnNsaWNlKCk7XG5cbiAgYXJyYXkuc3BsaWNlKG4sIDEpO1xuXG4gIHJldHVybiBhcnJheTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgR3JhcGggPSByZXF1aXJlKCcuLi9ncmFwaCcpLFxuICAgICAgQ3ljbGljUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi9wcm9kdWN0aW9uL2N5Y2xpYycpLFxuICAgICAgUmlnaHRSZWN1cnNpdmVQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vY29tbW9uL3Byb2R1Y3Rpb24vcmlnaHRSZWN1cnNpdmUnKSxcbiAgICAgIE5vbkxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vY29tbW9uL3Byb2R1Y3Rpb24vbm9uTGVmdFJlY3Vyc2l2ZScpLFxuICAgICAgTm9uSW1wbGljaXRseUxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uID0gcmVxdWlyZSgnLi4vY29tbW9uL3Byb2R1Y3Rpb24vbm9uSW1wbGljaXRseUxlZnRSZWN1cnNpdmUnKTtcblxuY2xhc3MgcGFyc2VyVXRpbCB7XG4gIHN0YXRpYyB0b2tlbnNGcm9tTGluZXMobGluZXMpIHtcbiAgICBjb25zdCB0b2tlbnMgPSBsaW5lcy5yZWR1Y2UoZnVuY3Rpb24odG9rZW5zLCBsaW5lKSB7XG4gICAgICBjb25zdCBsaW5lVG9rZW5zID0gbGluZS5nZXRUb2tlbnMoKTtcblxuICAgICAgdG9rZW5zID0gdG9rZW5zLmNvbmNhdChsaW5lVG9rZW5zKTtcblxuICAgICAgcmV0dXJuIHRva2VucztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG5cbiAgc3RhdGljIGVsaW1pbmF0ZUN5Y2xlcyhwcm9kdWN0aW9ucykge1xuICAgIGNvbnN0IGN5Y2xpY1Byb2R1Y3Rpb25zID0gY3ljbGljUHJvZHVjdGlvbnNGcm9tUHJvZHVjdGlvbnMocHJvZHVjdGlvbnMpLFxuICAgICAgICAgIGdyYXBoID0gZ3JhcGhGcm9tQ3ljbGljUHJvZHVjdGlvbnMoY3ljbGljUHJvZHVjdGlvbnMpLFxuICAgICAgICAgIGN5Y2xlcyA9IGdyYXBoLmdldEN5Y2xlcygpO1xuXG4gICAgcmV0dXJuIHByb2R1Y3Rpb25zO1xuICB9XG5cbiAgc3RhdGljIGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24ocHJvZHVjdGlvbnMpIHtcbiAgICBjb25zdCBub25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbnMgPSBbXSxcbiAgICAgICAgICByaWdodFJlY3Vyc2l2ZVByb2R1Y3Rpb25zID0gW107XG5cbiAgICBwcm9kdWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKHByb2R1Y3Rpb24sIGluZGV4KSB7XG4gICAgICBjb25zdCBiZWdpbiA9IDAsXG4gICAgICAgICAgICBlbmQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgcHJldmlvdXNOb25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbnMgPSBub25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbnMuc2xpY2UoYmVnaW4sIGVuZCksXG4gICAgICAgICAgICBwcmV2aW91c1Byb2R1Y3Rpb25zID0gcHJldmlvdXNOb25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbnMsICAvLy9cbiAgICAgICAgICAgIHByb2R1Y3Rpb25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZSA9IHByb2R1Y3Rpb24uaXNJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZShwcmV2aW91c1Byb2R1Y3Rpb25zKTtcblxuICAgICAgaWYgKHByb2R1Y3Rpb25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZSkge1xuICAgICAgICBjb25zdCBub25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24gPSBOb25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24uZnJvbVByb2R1Y3Rpb25BbmRQcmV2aW91c1Byb2R1Y3Rpb25zKHByb2R1Y3Rpb24sIHByZXZpb3VzUHJvZHVjdGlvbnMpO1xuXG4gICAgICAgIHByb2R1Y3Rpb24gPSBub25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb247ICAvLy9cbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvZHVjdGlvbkxlZnRSZWN1cnNpdmUgPSBwcm9kdWN0aW9uLmlzTGVmdFJlY3Vyc2l2ZSgpO1xuXG4gICAgICBpZiAocHJvZHVjdGlvbkxlZnRSZWN1cnNpdmUpIHtcbiAgICAgICAgY29uc3Qgbm9uTGVmdFJlY3Vyc2l2ZVByb2R1Y3Rpb24gPSBOb25MZWZ0UmVjdXJzaXZlUHJvZHVjdGlvbi5mcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uKSxcbiAgICAgICAgICAgICAgcmlnaHRSZWN1cnNpdmVQcm9kdWN0aW9uID0gUmlnaHRSZWN1cnNpdmVQcm9kdWN0aW9uLmZyb21Qcm9kdWN0aW9uKHByb2R1Y3Rpb24pO1xuXG4gICAgICAgIG5vbkxlZnRSZWN1cnNpdmVQcm9kdWN0aW9ucy5wdXNoKG5vbkxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uKTtcblxuICAgICAgICByaWdodFJlY3Vyc2l2ZVByb2R1Y3Rpb25zLnB1c2gocmlnaHRSZWN1cnNpdmVQcm9kdWN0aW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5vbkxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uID0gcHJvZHVjdGlvbjsgIC8vL1xuXG4gICAgICAgIG5vbkxlZnRSZWN1cnNpdmVQcm9kdWN0aW9ucy5wdXNoKG5vbkxlZnRSZWN1cnNpdmVQcm9kdWN0aW9uKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHByb2R1Y3Rpb25zID0gW10uY29uY2F0KG5vbkxlZnRSZWN1cnNpdmVQcm9kdWN0aW9ucykuY29uY2F0KHJpZ2h0UmVjdXJzaXZlUHJvZHVjdGlvbnMpO1xuXG4gICAgcmV0dXJuIHByb2R1Y3Rpb25zO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyc2VyVXRpbDtcblxuZnVuY3Rpb24gY3ljbGljUHJvZHVjdGlvbnNGcm9tUHJvZHVjdGlvbnMocHJvZHVjdGlvbnMpIHtcbiAgY29uc3QgY3ljbGljUHJvZHVjdGlvbnMgPSBwcm9kdWN0aW9ucy5yZWR1Y2UoZnVuY3Rpb24oY3ljbGljUHJvZHVjdGlvbnMsIHByb2R1Y3Rpb24pIHtcbiAgICBjb25zdCBjeWNsaWNQcm9kdWN0aW9uID0gQ3ljbGljUHJvZHVjdGlvbi5mcm9tUHJvZHVjdGlvbihwcm9kdWN0aW9uKTtcblxuICAgIGlmIChjeWNsaWNQcm9kdWN0aW9uICE9PSBudWxsKSB7XG4gICAgICBjeWNsaWNQcm9kdWN0aW9ucy5wdXNoKGN5Y2xpY1Byb2R1Y3Rpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBjeWNsaWNQcm9kdWN0aW9ucztcbiAgfSwgW10pO1xuXG4gIHJldHVybiBjeWNsaWNQcm9kdWN0aW9ucztcbn1cblxuZnVuY3Rpb24gZ3JhcGhGcm9tQ3ljbGljUHJvZHVjdGlvbnMoY3ljbGljUHJvZHVjdGlvbnMpIHtcbiAgY29uc3QgZ3JhcGggPSBuZXcgR3JhcGgoKTtcblxuICBjeWNsaWNQcm9kdWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKGN5Y2xpY1Byb2R1Y3Rpb24pIHtcbiAgICBjb25zdCBjeWNsaWNQcm9kdWN0aW9uTmFtZSA9IGN5Y2xpY1Byb2R1Y3Rpb24uZ2V0TmFtZSgpLFxuICAgICAgICAgIGN5Y2xpY1Byb2R1Y3Rpb25SdWxlc1Byb2R1Y3Rpb25OYW1lcyA9IGN5Y2xpY1Byb2R1Y3Rpb24uZ2V0UnVsZXNQcm9kdWN0aW9uTmFtZXMoKSxcbiAgICAgICAgICB2ZXJ0ZXhOYW1lID0gY3ljbGljUHJvZHVjdGlvbk5hbWUsICAvLy9cbiAgICAgICAgICBkZXNjZW5kYW50VmVydGV4TmFtZXMgPSBjeWNsaWNQcm9kdWN0aW9uUnVsZXNQcm9kdWN0aW9uTmFtZXM7IC8vL1xuXG4gICAgZ3JhcGguYWRkVmVydGV4KHZlcnRleE5hbWUsIGRlc2NlbmRhbnRWZXJ0ZXhOYW1lcyk7XG4gIH0pO1xuXG4gIHJldHVybiBncmFwaDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG9wdGlvbnM6IHJlcXVpcmUoJy4vbGliL29wdGlvbnMnKSxcbiAgU2l6ZWFibGVFbGVtZW50OiByZXF1aXJlKCcuL2xpYi9zaXplYWJsZUVsZW1lbnQnKSxcbiAgVmVydGljYWxTcGxpdHRlcjogcmVxdWlyZSgnLi9saWIvc3BsaXR0ZXIvdmVydGljYWwnKSxcbiAgSG9yaXpvbnRhbFNwbGl0dGVyOiByZXF1aXJlKCcuL2xpYi9zcGxpdHRlci9ob3Jpem9udGFsJylcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5Jyk7XG5cbmNvbnN0IHsgQm9keSB9ID0gZWFzeTtcblxuY29uc3QgYm9keSA9IG5ldyBCb2R5KCk7XG5cbmxldCBwcmV2aW91c0N1cnNvcjsgIC8vL1xuXG5jbGFzcyBjdXJzb3Ige1xuICBzdGF0aWMgY29sdW1uUmVzaXplKCkge1xuICAgIGNvbnN0IGN1cnJlbnRDdXJzb3IgPSB0aGlzLmdldEN1cnJlbnRDdXJzb3IoKTtcblxuICAgIGlmIChjdXJyZW50Q3Vyc29yICE9PSAnY29sLXJlc2l6ZScpIHtcbiAgICAgIHByZXZpb3VzQ3Vyc29yID0gY3VycmVudEN1cnNvcjtcblxuICAgICAgdGhpcy5zZXRDdXJzb3IoJ2NvbC1yZXNpemUnKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgcm93UmVzaXplKCkge1xuICAgIGNvbnN0IGN1cnJlbnRDdXJzb3IgPSB0aGlzLmdldEN1cnJlbnRDdXJzb3IoKTtcblxuICAgIGlmIChjdXJyZW50Q3Vyc29yICE9PSAncm93LXJlc2l6ZScpIHtcbiAgICAgIHByZXZpb3VzQ3Vyc29yID0gY3VycmVudEN1cnNvcjtcblxuICAgICAgdGhpcy5zZXRDdXJzb3IoJ3Jvdy1yZXNpemUnKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgcmVzZXQoKSB7XG4gICAgdGhpcy5zZXRDdXJzb3IocHJldmlvdXNDdXJzb3IpOyAvLy9cbiAgfVxuXG4gIHN0YXRpYyBnZXRDdXJyZW50Q3Vyc29yKCkge1xuICAgIGNvbnN0IGN1cnJlbnRDdXJzb3IgPSBib2R5LmNzcygnY3Vyc29yJyk7ICAvLy9cblxuICAgIHJldHVybiBjdXJyZW50Q3Vyc29yIHx8ICdhdXRvJzsgLy8vXG4gIH1cblxuICBzdGF0aWMgc2V0Q3Vyc29yKGN1cnNvcikge1xuICAgIGNvbnN0IGNzcyA9IHtcbiAgICAgIGN1cnNvcjogY3Vyc29yXG4gICAgfTtcblxuICAgIGJvZHkuY3NzKGNzcyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjdXJzb3I7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIEVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkc6ICdFU0NBUEVfS0VZX1NUT1BTX0RSQUdHSU5HJ1xuICAgICAgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBvcHRpb25zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpO1xuXG5jb25zdCB7IEVsZW1lbnQgfSA9IGVhc3k7XG5cbmNsYXNzIFNpemVhYmxlRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBzZXRXaWR0aCh3aWR0aCkge1xuICAgIGNvbnN0IHdpZHRoTnVtYmVyID0gKHR5cGVvZiB3aWR0aCA9PT0gJ251bWJlcicpO1xuXG4gICAgaWYgKHdpZHRoTnVtYmVyKSB7XG4gICAgICBjb25zdCBtaW5pbXVtV2lkdGggPSB0aGlzLmdldE1pbmltdW1XaWR0aCgpLFxuICAgICAgICAgICAgbWF4aW11bVdpZHRoID0gdGhpcy5nZXRNYXhpbXVtV2lkdGgoKTtcblxuICAgICAgaWYgKG1pbmltdW1XaWR0aCAhPT0gbnVsbCkge1xuICAgICAgICB3aWR0aCA9IE1hdGgubWF4KHdpZHRoLCBtaW5pbXVtV2lkdGgpO1xuICAgICAgfVxuICAgICAgaWYgKG1heGltdW1XaWR0aCAhPT0gbnVsbCkge1xuICAgICAgICB3aWR0aCA9IE1hdGgubWluKHdpZHRoLCBtYXhpbXVtV2lkdGgpO1xuICAgICAgfVxuXG4gICAgICB3aWR0aCA9IGAke3dpZHRofXB4YDsgLy8vXG4gICAgfVxuXG4gICAgc3VwZXIuc2V0V2lkdGgod2lkdGgpO1xuICB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodCkge1xuICAgIGNvbnN0IGhlaWdodE51bWJlciA9ICh0eXBlb2YgaGVpZ2h0ID09PSAnbnVtYmVyJyk7XG5cbiAgICBpZiAoaGVpZ2h0TnVtYmVyKSB7XG4gICAgICBjb25zdCBtaW5pbXVtSGVpZ2h0ID0gdGhpcy5nZXRNaW5pbXVtSGVpZ2h0KCksXG4gICAgICAgICAgICBtYXhpbXVtSGVpZ2h0ID0gdGhpcy5nZXRNYXhpbXVtSGVpZ2h0KCk7XG5cbiAgICAgIGlmIChtaW5pbXVtSGVpZ2h0ICE9PSBudWxsKSB7XG4gICAgICAgIGhlaWdodCA9IE1hdGgubWF4KGhlaWdodCwgbWluaW11bUhlaWdodCk7XG4gICAgICB9XG4gICAgICBpZiAobWF4aW11bUhlaWdodCAhPT0gbnVsbCkge1xuICAgICAgICBoZWlnaHQgPSBNYXRoLm1pbihoZWlnaHQsIG1heGltdW1IZWlnaHQpO1xuICAgICAgfVxuXG4gICAgICBoZWlnaHQgPSBgJHtoZWlnaHR9cHhgOyAvLy9cbiAgICB9XG5cbiAgICBzdXBlci5zZXRIZWlnaHQoaGVpZ2h0KTtcbiAgfVxuXG4gIGdldE1pbmltdW1XaWR0aCgpIHsgXG4gICAgY29uc3QgbWluV2lkdGggPSB0aGlzLmNzcygnbWluLXdpZHRoJyksXG4gICAgICAgICAgbWluaW11bVdpZHRoID0gaW5QaXhlbHMobWluV2lkdGgpO1xuXG4gICAgcmV0dXJuIG1pbmltdW1XaWR0aDtcbiAgfVxuXG4gIGdldE1pbmltdW1IZWlnaHQoKSB7XG4gICAgY29uc3QgbWluSGVpZ2h0ID0gdGhpcy5jc3MoJ21pbi1oZWlnaHQnKSxcbiAgICAgICAgICBtaW5pbXVtSGVpZ2h0ID0gaW5QaXhlbHMobWluSGVpZ2h0KTtcblxuICAgIHJldHVybiBtaW5pbXVtSGVpZ2h0O1xuICB9XG5cbiAgZ2V0TWF4aW11bVdpZHRoKCkge1xuICAgIGNvbnN0IG1heFdpZHRoID0gdGhpcy5jc3MoJ21heC13aWR0aCcpLFxuICAgICAgICAgIG1heGltdW1XaWR0aCA9IGluUGl4ZWxzKG1heFdpZHRoKTtcblxuICAgIHJldHVybiBtYXhpbXVtV2lkdGg7XG4gIH1cblxuICBnZXRNYXhpbXVtSGVpZ2h0KCkge1xuICAgIGNvbnN0IG1heEhlaWdodCA9IHRoaXMuY3NzKCdtYXgtaGVpZ2h0JyksXG4gICAgICAgICAgbWF4aW11bUhlaWdodCA9IGluUGl4ZWxzKG1heEhlaWdodCk7XG5cbiAgICByZXR1cm4gbWF4aW11bUhlaWdodDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoU2l6ZWFibGVFbGVtZW50LCBwcm9wZXJ0aWVzKTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFNpemVhYmxlRWxlbWVudCwge1xuICB0YWdOYW1lOiAnZGl2JyxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICdzaXplYWJsZSdcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2l6ZWFibGVFbGVtZW50O1xuXG5mdW5jdGlvbiBpblBpeGVscyhxdWFudGl0eSkge1xuICBsZXQgcGl4ZWxzID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcXVhbnRpdHkubWF0Y2goLyhbMC05XSopcHgkLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIHBpeGVscyA9IHNlY29uZE1hdGNoOyAgLy8vXG4gIH1cblxuICByZXR1cm4gcGl4ZWxzO1xufVxuXG5mdW5jdGlvbiBzZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzFdOyB9XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5Jyk7XG5cbmNvbnN0IG9wdGlvbnMgPSByZXF1aXJlKCcuL29wdGlvbnMnKTtcblxuY29uc3QgRVNDQVBFX0tFWUNPREUgPSAyNztcblxuY29uc3QgeyBFU0NBUEVfS0VZX1NUT1BTX0RSQUdHSU5HIH0gPSBvcHRpb25zLFxuICAgICAgeyB3aW5kb3csIEVsZW1lbnQgfSA9IGVhc3k7XG5cbmNsYXNzIFNwbGl0dGVyIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBiZWZvcmVTaXplYWJsZUVsZW1lbnQsIGFmdGVyU2l6ZWFibGVFbGVtZW50LCBkcmFnSGFuZGxlciwgb3B0aW9ucykge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIHRoaXMuYmVmb3JlU2l6ZWFibGVFbGVtZW50ID0gYmVmb3JlU2l6ZWFibGVFbGVtZW50O1xuICAgIHRoaXMuYWZ0ZXJTaXplYWJsZUVsZW1lbnQgPSBhZnRlclNpemVhYmxlRWxlbWVudDtcblxuICAgIGlmIChkcmFnSGFuZGxlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm9uRHJhZyhkcmFnSGFuZGxlcik7IFxuICAgIH1cbiAgICBcbiAgICBpZiAob3B0aW9ucyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnNldE9wdGlvbnMob3B0aW9ucyk7XG4gICAgfVxuICBcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gIFxuICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcbiAgXG4gICAgd2luZG93Lm9uKCdtb3VzZXVwIGJsdXInLCB0aGlzLm1vdXNlVXAuYmluZCh0aGlzKSk7ICAvLy9cbiAgIFxuICAgIHdpbmRvdy5vbk1vdXNlTW92ZSh0aGlzLm1vdXNlTW92ZS5iaW5kKHRoaXMpKTtcbiAgXG4gICAgdGhpcy5vbk1vdXNlRG93bih0aGlzLm1vdXNlRG93bi5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLm9uTW91c2VPdmVyKHRoaXMubW91c2VPdmVyLmJpbmQodGhpcykpO1xuICAgIHRoaXMub25Nb3VzZU91dCh0aGlzLm1vdXNlT3V0LmJpbmQodGhpcykpO1xuICBcbiAgICB0aGlzLm9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlzQmVmb3JlU2l6ZWFibGVFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmJlZm9yZVNpemVhYmxlRWxlbWVudDtcbiAgfVxuXG4gIGlzQWZ0ZXJTaXplYWJsZUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWZ0ZXJTaXplYWJsZUVsZW1lbnQ7XG4gIH1cblxuICBnZXREaXJlY3Rpb24oKSB7XG4gICAgbGV0IGRpcmVjdGlvbiA9IHVuZGVmaW5lZDsgIC8vL1xuXG4gICAgaWYgKHRoaXMuYmVmb3JlU2l6ZWFibGVFbGVtZW50KSB7XG4gICAgICBkaXJlY3Rpb24gPSArMTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hZnRlclNpemVhYmxlRWxlbWVudCkge1xuICAgICAgZGlyZWN0aW9uID0gLTE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGlvbjtcbiAgfVxuXG4gIGdldFNpemVhYmxlRWxlbWVudCgpIHtcbiAgICBsZXQgc2l6ZWFibGVFbGVtZW50ID0gdW5kZWZpbmVkOyAgLy8vXG5cbiAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLmdldERpcmVjdGlvbigpO1xuXG4gICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgIGNhc2UgLTE6XG4gICAgICAgIHNpemVhYmxlRWxlbWVudCA9IHRoaXMuZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudCgpOyAvLy9cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgKzE6XG4gICAgICAgIHNpemVhYmxlRWxlbWVudCA9IHRoaXMuZ2V0TmV4dFNpYmxpbmdFbGVtZW50KCk7IC8vL1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gc2l6ZWFibGVFbGVtZW50O1xuICB9XG4gIFxuICBzZXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG5cbiAgc2V0T3B0aW9uKG9wdGlvbikge1xuICAgIHRoaXMub3B0aW9uc1tvcHRpb25dID0gdHJ1ZTtcbiAgfVxuXG4gIHVuc2V0T3B0aW9uKG9wdGlvbikge1xuICAgIGRlbGV0ZSh0aGlzLm9wdGlvbnNbb3B0aW9uXSk7XG4gIH1cblxuICBoYXNPcHRpb24ob3B0aW9uKSB7XG4gICAgb3B0aW9uID0gKHRoaXMub3B0aW9uc1tvcHRpb25dID09PSB0cnVlKTsgLy8vXG5cbiAgICByZXR1cm4gb3B0aW9uO1xuICB9XG4gIFxuICBlbmFibGUoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICB9XG5cbiAgZGlzYWJsZSgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGlzRGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQ7XG4gIH1cblxuICBvbkRyYWcoZHJhZ0hhbmRsZXIpIHtcbiAgICB0aGlzLmRyYWdIYW5kbGVyID0gZHJhZ0hhbmRsZXI7XG4gIH1cblxuICBzdGFydERyYWdnaW5nKCkge1xuICAgIGNvbnN0IGVzY2FwZUtleVN0b3BzRHJhZ2dpbmcgPSB0aGlzLmhhc09wdGlvbihFU0NBUEVfS0VZX1NUT1BTX0RSQUdHSU5HKTtcblxuICAgIGlmIChlc2NhcGVLZXlTdG9wc0RyYWdnaW5nKSB7XG4gICAgICB3aW5kb3cub25LZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgdGhpcy5kcmFnZ2luZyA9IHRydWU7XG4gIH1cblxuICBzdG9wRHJhZ2dpbmcoKSB7XG4gICAgY29uc3QgZXNjYXBlS2V5U3RvcHNEcmFnZ2luZyA9IHRoaXMuaGFzT3B0aW9uKEVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkcpO1xuXG4gICAgaWYgKGVzY2FwZUtleVN0b3BzRHJhZ2dpbmcpIHtcbiAgICAgIHdpbmRvdy5vZmZLZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuICB9XG5cbiAgaXNEcmFnZ2luZygpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2luZztcbiAgfVxuXG4gIGtleURvd25IYW5kbGVyKGtleUNvZGUpIHtcbiAgICBpZiAoa2V5Q29kZSA9PT0gRVNDQVBFX0tFWUNPREUpIHtcbiAgICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgICB0aGlzLnN0b3BEcmFnZ2luZygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgYmVmb3JlU2l6ZWFibGVFbGVtZW50LCBhZnRlclNpemVhYmxlRWxlbWVudCwgb25EcmFnLCBvcHRpb25zIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGRyYWdIYW5kbGVyID0gb25EcmFnOyAvLy9cblxuICAgIHJldHVybiBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBiZWZvcmVTaXplYWJsZUVsZW1lbnQsIGFmdGVyU2l6ZWFibGVFbGVtZW50LCBkcmFnSGFuZGxlciwgb3B0aW9ucyk7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihTcGxpdHRlciwge1xuICB0YWdOYW1lOiAnZGl2JyxcbiAgaWdub3JlZFByb3BlcnRpZXM6IFtcbiAgICAnYmVmb3JlU2l6ZWFibGVFbGVtZW50JyxcbiAgICAnYWZ0ZXJTaXplYWJsZUVsZW1lbnQnLFxuICAgICdvbkRyYWcnLFxuICAgICdvcHRpb25zJ1xuICBdXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBTcGxpdHRlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY3Vyc29yID0gcmVxdWlyZSgnLi4vY3Vyc29yJyksXG4gICAgICBTcGxpdHRlciA9IHJlcXVpcmUoJy4uL3NwbGl0dGVyJyk7XG5cbmNsYXNzIEhvcml6b250YWxTcGxpdHRlciBleHRlbmRzIFNwbGl0dGVyIHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGJlZm9yZVNpemVhYmxlRWxlbWVudCwgYWZ0ZXJTaXplYWJsZUVsZW1lbnQsIGRyYWdIYW5kbGVyLCBvcHRpb25zKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IsIGJlZm9yZVNpemVhYmxlRWxlbWVudCwgYWZ0ZXJTaXplYWJsZUVsZW1lbnQsIGRyYWdIYW5kbGVyLCBvcHRpb25zKTtcblxuICAgIHRoaXMuc2l6ZWFibGVFbGVtZW50SGVpZ2h0ID0gbnVsbDtcblxuICAgIHRoaXMubW91c2VUb3AgPSBudWxsO1xuICB9XG5cbiAgbW91c2VVcCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY3Vyc29yLnJlc2V0KCk7XG5cbiAgICAgIGlmICh0aGlzLmRyYWdnaW5nKSB7XG4gICAgICAgIHRoaXMuc3RvcERyYWdnaW5nKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbW91c2VNb3ZlKG1vdXNlVG9wLCBtb3VzZUxlZnQpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuZ2V0RGlyZWN0aW9uKCksXG4gICAgICAgICAgICAgIHNpemVhYmxlRWxlbWVudCA9IHRoaXMuZ2V0U2l6ZWFibGVFbGVtZW50KCksXG4gICAgICAgICAgICAgIHJlbGF0aXZlTW91c2VUb3AgPSBtb3VzZVRvcCAtIHRoaXMubW91c2VUb3AsXG4gICAgICAgICAgICAgIGhlaWdodCA9IHRoaXMuc2l6ZWFibGVFbGVtZW50SGVpZ2h0IC0gZGlyZWN0aW9uICogcmVsYXRpdmVNb3VzZVRvcDtcblxuICAgICAgICBzaXplYWJsZUVsZW1lbnQuc2V0SGVpZ2h0KGhlaWdodCk7XG5cbiAgICAgICAgY29uc3Qgc2l6ZWFibGVFbGVtZW50SGVpZ2h0ID0gc2l6ZWFibGVFbGVtZW50LmdldEhlaWdodCgpO1xuXG4gICAgICAgIGlmICh0aGlzLmRyYWdIYW5kbGVyKSB7XG4gICAgICAgICAgdGhpcy5kcmFnSGFuZGxlcihzaXplYWJsZUVsZW1lbnRIZWlnaHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbW91c2VEb3duKG1vdXNlVG9wLCBtb3VzZUxlZnQpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY29uc3Qgc2l6ZWFibGVFbGVtZW50ID0gdGhpcy5nZXRTaXplYWJsZUVsZW1lbnQoKTtcbiAgICAgICAgICBcbiAgICAgIGN1cnNvci5yb3dSZXNpemUoKTtcblxuICAgICAgdGhpcy5tb3VzZVRvcCA9IG1vdXNlVG9wO1xuXG4gICAgICB0aGlzLnNpemVhYmxlRWxlbWVudEhlaWdodCA9IHNpemVhYmxlRWxlbWVudC5nZXRIZWlnaHQoKTtcblxuICAgICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgICAgaWYgKCFkcmFnZ2luZykge1xuICAgICAgICB0aGlzLnN0YXJ0RHJhZ2dpbmcoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtb3VzZU92ZXIoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGN1cnNvci5yb3dSZXNpemUoKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZU91dCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY3Vyc29yLnJlc2V0KCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICByZXR1cm4gU3BsaXR0ZXIuZnJvbVByb3BlcnRpZXMoSG9yaXpvbnRhbFNwbGl0dGVyLCBwcm9wZXJ0aWVzKTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKEhvcml6b250YWxTcGxpdHRlciwge1xuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ2hvcml6b250YWwgc3BsaXR0ZXInXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhvcml6b250YWxTcGxpdHRlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY3Vyc29yID0gcmVxdWlyZSgnLi4vY3Vyc29yJyksXG4gICAgICBTcGxpdHRlciA9IHJlcXVpcmUoJy4uL3NwbGl0dGVyJyk7XG5cbmNsYXNzIFZlcnRpY2FsU3BsaXR0ZXIgZXh0ZW5kcyBTcGxpdHRlciB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBiZWZvcmVTaXplYWJsZUVsZW1lbnQsIGFmdGVyU2l6ZWFibGVFbGVtZW50LCBkcmFnSGFuZGxlciwgb3B0aW9ucykge1xuICAgIHN1cGVyKHNlbGVjdG9yLCBiZWZvcmVTaXplYWJsZUVsZW1lbnQsIGFmdGVyU2l6ZWFibGVFbGVtZW50LCBkcmFnSGFuZGxlciwgb3B0aW9ucyk7XG5cbiAgICB0aGlzLnNpemVhYmxlRWxlbWVudFdpZHRoID0gbnVsbDtcblxuICAgIHRoaXMubW91c2VMZWZ0ID0gbnVsbDtcbiAgfVxuXG4gIG1vdXNlVXAoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGN1cnNvci5yZXNldCgpO1xuXG4gICAgICBpZiAodGhpcy5kcmFnZ2luZykge1xuICAgICAgICB0aGlzLnN0b3BEcmFnZ2luZygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1vdXNlTW92ZShtb3VzZVRvcCwgbW91c2VMZWZ0KSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLmdldERpcmVjdGlvbigpLFxuICAgICAgICAgICAgICBzaXplYWJsZUVsZW1lbnQgPSB0aGlzLmdldFNpemVhYmxlRWxlbWVudCgpLFxuICAgICAgICAgICAgICByZWxhdGl2ZU1vdXNlTGVmdCA9IG1vdXNlTGVmdCAtIHRoaXMubW91c2VMZWZ0LFxuICAgICAgICAgICAgICB3aWR0aCA9IHRoaXMuc2l6ZWFibGVFbGVtZW50V2lkdGggLSBkaXJlY3Rpb24gKiByZWxhdGl2ZU1vdXNlTGVmdDtcblxuICAgICAgICBzaXplYWJsZUVsZW1lbnQuc2V0V2lkdGgod2lkdGgpO1xuXG4gICAgICAgIGNvbnN0IHNpemVhYmxlRWxlbWVudFdpZHRoID0gc2l6ZWFibGVFbGVtZW50LmdldFdpZHRoKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuZHJhZ0hhbmRsZXIpIHtcbiAgICAgICAgICB0aGlzLmRyYWdIYW5kbGVyKHNpemVhYmxlRWxlbWVudFdpZHRoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1vdXNlRG93bihtb3VzZVRvcCwgbW91c2VMZWZ0KSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IHNpemVhYmxlRWxlbWVudCA9IHRoaXMuZ2V0U2l6ZWFibGVFbGVtZW50KCk7XG5cbiAgICAgIGN1cnNvci5jb2x1bW5SZXNpemUoKTtcblxuICAgICAgdGhpcy5tb3VzZUxlZnQgPSBtb3VzZUxlZnQ7XG5cbiAgICAgIHRoaXMuc2l6ZWFibGVFbGVtZW50V2lkdGggPSBzaXplYWJsZUVsZW1lbnQuZ2V0V2lkdGgoKTtcblxuICAgICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgICAgaWYgKCFkcmFnZ2luZykge1xuICAgICAgICB0aGlzLnN0YXJ0RHJhZ2dpbmcoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtb3VzZU92ZXIoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGN1cnNvci5jb2x1bW5SZXNpemUoKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZU91dCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY3Vyc29yLnJlc2V0KCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICByZXR1cm4gU3BsaXR0ZXIuZnJvbVByb3BlcnRpZXMoVmVydGljYWxTcGxpdHRlciwgcHJvcGVydGllcyk7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihWZXJ0aWNhbFNwbGl0dGVyLCB7XG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAndmVydGljYWwgc3BsaXR0ZXInXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZlcnRpY2FsU3BsaXR0ZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICB3aW5kb3c6IHJlcXVpcmUoJy4vbGliL3dpbmRvdycpLFxuICBkb2N1bWVudDogcmVxdWlyZSgnLi9saWIvZG9jdW1lbnQnKSxcbiAgRGl2OiByZXF1aXJlKCcuL2xpYi9lbGVtZW50L2RpdicpLFxuICBTcGFuOiByZXF1aXJlKCcuL2xpYi9lbGVtZW50L3NwYW4nKSxcbiAgQm9keTogcmVxdWlyZSgnLi9saWIvZWxlbWVudC9ib2R5JyksXG4gIExpbms6IHJlcXVpcmUoJy4vbGliL2VsZW1lbnQvbGluaycpLFxuICBTZWxlY3Q6IHJlcXVpcmUoJy4vbGliL2VsZW1lbnQvc2VsZWN0JyksXG4gIEJ1dHRvbjogcmVxdWlyZSgnLi9saWIvZWxlbWVudC9idXR0b24nKSxcbiAgQ2hlY2tib3g6IHJlcXVpcmUoJy4vbGliL2VsZW1lbnQvY2hlY2tib3gnKSxcbiAgRWxlbWVudDogcmVxdWlyZSgnLi9saWIvZWxlbWVudCcpLFxuICBUZXh0RWxlbWVudDogcmVxdWlyZSgnLi9saWIvdGV4dEVsZW1lbnQnKSxcbiAgSW5wdXQ6IHJlcXVpcmUoJy4vbGliL2lucHV0RWxlbWVudC9pbnB1dCcpLFxuICBUZXh0YXJlYTogcmVxdWlyZSgnLi9saWIvaW5wdXRFbGVtZW50L3RleHRhcmVhJyksXG4gIElucHV0RWxlbWVudDogcmVxdWlyZSgnLi9saWIvaW5wdXRFbGVtZW50JyksXG4gIEJvdW5kczogcmVxdWlyZSgnLi9saWIvbWlzYy9ib3VuZHMnKSxcbiAgT2Zmc2V0OiByZXF1aXJlKCcuL2xpYi9taXNjL29mZnNldCcpLFxuICBSZWFjdDogcmVxdWlyZSgnLi9saWIvcmVhY3QnKVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZXZlbnRNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vZXZlbnQnKSxcbiAgICAgIGNsaWNrTWl4aW4gPSByZXF1aXJlKCcuL21peGluL2NsaWNrJyksXG4gICAgICBtb3VzZU1peGluID0gcmVxdWlyZSgnLi9taXhpbi9tb3VzZScpLFxuICAgICAga2V5TWl4aW4gPSByZXF1aXJlKCcuL21peGluL2tleScpO1xuXG5jbGFzcyBEb2N1bWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvY3VtZW50O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBldmVudE1peGluKTtcbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBjbGlja01peGluKTtcbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBtb3VzZU1peGluKTtcbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBrZXlNaXhpbik7XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IERvY3VtZW50KCk7ICAvLy9cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgT2Zmc2V0ID0gcmVxdWlyZSgnLi9taXNjL29mZnNldCcpLFxuICAgICAgQm91bmRzID0gcmVxdWlyZSgnLi9taXNjL2JvdW5kcycpLFxuICAgICAganN4TWl4aW4gPSByZXF1aXJlKCcuL21peGluL2pzeCcpLFxuICAgICAgZXZlbnRNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vZXZlbnQnKSxcbiAgICAgIGNsaWNrTWl4aW4gPSByZXF1aXJlKCcuL21peGluL2NsaWNrJyksXG4gICAgICBzY3JvbGxNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vc2Nyb2xsJyksXG4gICAgICByZXNpemVNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vcmVzaXplJyksXG4gICAgICBtb3VzZU1peGluID0gcmVxdWlyZSgnLi9taXhpbi9tb3VzZScpLFxuICAgICAga2V5TWl4aW4gPSByZXF1aXJlKCcuL21peGluL2tleScpO1xuXG5jbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50RnJvbVNlbGVjdG9yKHNlbGVjdG9yKTtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5fX2VsZW1lbnRfXyA9IHRoaXM7IC8vL1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBFbGVtZW50LmNsb25lKHRoaXMpOyB9XG5cbiAgZ2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IHRvcCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRUb3AsICAvLy9cbiAgICAgICAgICBsZWZ0ID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldExlZnQsICAvLy9cbiAgICAgICAgICBvZmZzZXQgPSBuZXcgT2Zmc2V0KHRvcCwgbGVmdCk7XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIGNvbnN0IGJvdW5kaW5nQ2xpZW50UmVjdCA9IHRoaXMuZG9tRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICBib3VuZHMgPSBCb3VuZHMuZnJvbUJvdW5kaW5nQ2xpZW50UmVjdChib3VuZGluZ0NsaWVudFJlY3QpO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxuXG4gIGdldFdpZHRoKGluY2x1ZGVCb3JkZXIgPSB0cnVlKSB7XG4gICAgY29uc3Qgd2lkdGggPSBpbmNsdWRlQm9yZGVyID9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50Lm9mZnNldFdpZHRoIDpcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQuY2xpZW50V2lkdGg7XG5cbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cblxuICBzZXRXaWR0aCh3aWR0aCkgeyB0aGlzLmRvbUVsZW1lbnQuc3R5bGUud2lkdGggPSB3aWR0aDsgfVxuXG4gIGdldEhlaWdodChpbmNsdWRlQm9yZGVyID0gdHJ1ZSkge1xuICAgIGNvbnN0IGhlaWdodCA9IGluY2x1ZGVCb3JkZXIgP1xuICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50Lm9mZnNldEhlaWdodCA6XG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cbiAgICByZXR1cm4gaGVpZ2h0O1xuICB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodCkgeyB0aGlzLmRvbUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0OyB9XG5cbiAgaGFzQXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5oYXNBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBnZXRBdHRyaWJ1dGUobmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIHNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkgeyB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTsgfVxuXG4gIGNsZWFyQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5kb21FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIGFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkgeyB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7IH1cblxuICByZW1vdmVBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLmNsZWFyQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgc2V0Q2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWU7IH1cblxuICBhZGRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTsgfVxuXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpOyB9XG5cbiAgdG9nZ2xlQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZSk7IH1cblxuICBoYXNDbGFzcyhjbGFzc05hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTsgfVxuXG4gIGNsZWFyQ2xhc3NlcygpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9ICcnOyB9XG5cbiAgcHJlcGVuZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5wcmVwZW5kKHRoaXMpOyB9XG5cbiAgYXBwZW5kVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LmFwcGVuZCh0aGlzKTsgfVxuXG4gIGFkZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5hZGQodGhpcyk7IH1cblxuICByZW1vdmVGcm9tKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5yZW1vdmUodGhpcyk7IH1cblxuICBpbnNlcnRCZWZvcmUoc2libGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTU5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpO1xuICB9XG5cbiAgaW5zZXJ0QWZ0ZXIoc2libGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTU5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQubmV4dFNpYmxpbmcpOyAgLy8vXG4gIH1cblxuICBwcmVwZW5kKGVsZW1lbnQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50LFxuICAgICAgICAgIGZpcnN0Q2hpbGRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LmZpcnN0Q2hpbGQ7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIGZpcnN0Q2hpbGRET01FbGVtZW50KTtcbiAgfVxuXG4gIGFwcGVuZChlbGVtZW50KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgbnVsbCk7IC8vL1xuICB9XG5cbiAgYWRkKGVsZW1lbnQpIHsgdGhpcy5hcHBlbmQoZWxlbWVudCk7IH1cblxuICByZW1vdmUoZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQ2hpbGQoZG9tRWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmUoKTtcbiAgICB9XG4gIH1cblxuICBzaG93KGRpc3BsYXlTdHlsZSA9ICdibG9jaycpIHsgdGhpcy5kb21FbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5U3R5bGU7IH1cblxuICBoaWRlKCkgeyB0aGlzLmRvbUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgfVxuXG4gIGVuYWJsZSgpIHsgdGhpcy5jbGVhckF0dHJpYnV0ZSgnZGlzYWJsZWQnKTsgfVxuXG4gIGRpc2FibGUoKSB7IHRoaXMuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpOyB9XG5cbiAgaXNFbmFibGVkKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCksXG4gICAgICAgICAgZW5hYmxlZCA9ICFkaXNhYmxlZDtcblxuICAgIHJldHVybiBlbmFibGVkO1xuICB9XG5cbiAgaXNEaXNhYmxlZCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuXG4gICAgcmV0dXJuIGRpc2FibGVkO1xuICB9XG5cbiAgaHRtbChodG1sKSB7XG4gICAgaWYgKGh0bWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgaW5uZXJIVE1MID0gdGhpcy5kb21FbGVtZW50LmlubmVySFRNTDtcblxuICAgICAgaHRtbCA9IGlubmVySFRNTDsgLy8vXG5cbiAgICAgIHJldHVybiBodG1sO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbm5lckhUTUwgPSBodG1sOyAvLy9cblxuICAgICAgdGhpcy5kb21FbGVtZW50LmlubmVySFRNTCA9IGlubmVySFRNTFxuICAgIH1cbiAgfVxuXG4gIGNzcyhjc3MpIHtcbiAgICBpZiAoY3NzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZG9tRWxlbWVudCksXG4gICAgICAgICAgICBjc3MgPSB7fTtcblxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvbXB1dGVkU3R5bGUubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBjb21wdXRlZFN0eWxlWzBdLCAgLy8vXG4gICAgICAgICAgICAgIHZhbHVlID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpOyAvLy9cblxuICAgICAgICBjc3NbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjc3MgPT09ICdzdHJpbmcnKSB7XG4gICAgICBsZXQgbmFtZSA9IGNzczsgLy8vXG5cbiAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZG9tRWxlbWVudCksXG4gICAgICAgICAgICB2YWx1ZSA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTsgLy8vXG5cbiAgICAgIGNzcyA9IHZhbHVlOyAgLy8vXG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMoY3NzKTsgLy8vXG5cbiAgICAgIG5hbWVzLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGNzc1tuYW1lXTtcblxuICAgICAgICB0aGlzLmRvbUVsZW1lbnQuc3R5bGVbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfVxuICB9XG5cbiAgYmx1cigpIHsgdGhpcy5kb21FbGVtZW50LmJsdXIoKTsgfVxuXG4gIGZvY3VzKCkgeyB0aGlzLmRvbUVsZW1lbnQuZm9jdXMoKTsgfVxuXG4gIGhhc0ZvY3VzKCkge1xuICAgIGNvbnN0IGZvY3VzID0gKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IHRoaXMuZG9tRWxlbWVudCk7ICAvLy9cblxuICAgIHJldHVybiBmb2N1cztcbiAgfVxuXG4gIGdldERlc2NlbmRhbnRFbGVtZW50cyhzZWxlY3RvciA9ICcqJykge1xuICAgIGNvbnN0IGRvbU5vZGUgPSB0aGlzLmRvbUVsZW1lbnQsICAvLy9cbiAgICAgICAgICBkZXNjZW5kYW50RE9NTm9kZXMgPSBkZXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShkb21Ob2RlKSxcbiAgICAgICAgICBkZXNjZW5kYW50RWxlbWVudHMgPSBmaWx0ZXJET01Ob2RlcyhkZXNjZW5kYW50RE9NTm9kZXMsIHNlbGVjdG9yKTtcblxuICAgIHJldHVybiBkZXNjZW5kYW50RWxlbWVudHM7XG4gIH1cblxuICBnZXRDaGlsZEVsZW1lbnRzKHNlbGVjdG9yID0gJyonKSB7XG4gICAgY29uc3QgY2hpbGRET01Ob2RlcyA9IHRoaXMuZG9tRWxlbWVudC5jaGlsZE5vZGVzLFxuICAgICAgICAgIGNoaWxkRE9NRWxlbWVudHMgPSBmaWx0ZXJET01Ob2RlcyhjaGlsZERPTU5vZGVzLCBzZWxlY3RvciksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGNoaWxkRE9NRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBnZXRQYXJlbnRFbGVtZW50KHNlbGVjdG9yID0gJyonKSB7XG4gICAgbGV0IHBhcmVudEVsZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXG4gICAgaWYgKHBhcmVudERPTUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGlmIChwYXJlbnRET01FbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnRzID0gW3BhcmVudERPTUVsZW1lbnRdLFxuICAgICAgICAgICAgICBwYXJlbnRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKHBhcmVudERPTUVsZW1lbnRzKSxcbiAgICAgICAgICAgICAgZmlyc3RQYXJlbnRFbGVtZW50ID0gZmlyc3QocGFyZW50RWxlbWVudHMpO1xuXG4gICAgICAgIHBhcmVudEVsZW1lbnQgPSBmaXJzdFBhcmVudEVsZW1lbnQgfHwgbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50RWxlbWVudDtcbiAgfVxuXG4gIGdldEFzY2VuZGFudEVsZW1lbnRzKHNlbGVjdG9yID0gJyonKSB7XG4gICAgY29uc3QgYXNjZW5kYW50RE9NRWxlbWVudHMgPSBbXSxcbiAgICAgICAgICBwYXJlbnRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cbiAgICBsZXQgYXNjZW5kYW50RE9NRWxlbWVudCA9IHBhcmVudERPTUVsZW1lbnQ7ICAvLy9cbiAgICB3aGlsZSAoYXNjZW5kYW50RE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgaWYgKGFzY2VuZGFudERPTUVsZW1lbnQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgYXNjZW5kYW50RE9NRWxlbWVudHMucHVzaChhc2NlbmRhbnRET01FbGVtZW50KTtcbiAgICAgIH1cblxuICAgICAgYXNjZW5kYW50RE9NRWxlbWVudCA9IGFzY2VuZGFudERPTUVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICB9XG5cbiAgICBjb25zdCBhc2NlbmRhbnRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGFzY2VuZGFudERPTUVsZW1lbnRzKTtcblxuICAgIHJldHVybiBhc2NlbmRhbnRFbGVtZW50cztcbiAgfVxuXG4gIGdldFByZXZpb3VzU2libGluZ0VsZW1lbnQoc2VsZWN0b3IgPSAnKicpIHtcbiAgICBsZXQgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBwcmV2aW91c1NpYmxpbmdET01Ob2RlID0gdGhpcy5kb21FbGVtZW50LnByZXZpb3VzU2libGluZzsgIC8vL1xuXG4gICAgaWYgKChwcmV2aW91c1NpYmxpbmdET01Ob2RlICE9PSBudWxsKSAmJiBkb21Ob2RlTWF0Y2hlc1NlbGVjdG9yKHByZXZpb3VzU2libGluZ0RPTU5vZGUsIHNlbGVjdG9yKSkge1xuICAgICAgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IHByZXZpb3VzU2libGluZ0RPTU5vZGUuX19lbGVtZW50X18gfHwgbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJldmlvdXNTaWJsaW5nRWxlbWVudDtcbiAgfVxuXG4gIGdldE5leHRTaWJsaW5nRWxlbWVudChzZWxlY3RvciA9ICcqJykge1xuICAgIGxldCBuZXh0U2libGluZ0VsZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QgbmV4dFNpYmxpbmdET01Ob2RlID0gdGhpcy5kb21FbGVtZW50Lm5leHRTaWJsaW5nO1xuXG4gICAgaWYgKChuZXh0U2libGluZ0RPTU5vZGUgIT09IG51bGwpICYmIGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IobmV4dFNpYmxpbmdET01Ob2RlLCBzZWxlY3RvcikpIHtcbiAgICAgIG5leHRTaWJsaW5nRWxlbWVudCA9IG5leHRTaWJsaW5nRE9NTm9kZS5fX2VsZW1lbnRfXyB8fCBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0U2libGluZ0VsZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgY2xvbmUoQ2xhc3MsIGVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IGRlZXAgPSB0cnVlLFxuICAgICAgICAgIGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQuY2xvbmVOb2RlKGRlZXApO1xuXG4gICAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQoZG9tRWxlbWVudCk7XG4gICAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQobnVsbCk7XG5cbiAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShDbGFzcywgcmVtYWluaW5nQXJndW1lbnRzKSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoQ2xhc3MsIGh0bWwsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IG91dGVyRE9NRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgb3V0ZXJET01FbGVtZW50LmlubmVySFRNTCA9IGh0bWw7ICAvLy9cblxuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBvdXRlckRPTUVsZW1lbnQuZmlyc3RDaGlsZDtcblxuICAgIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KGRvbUVsZW1lbnQpO1xuICAgIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KG51bGwpO1xuXG4gICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoQ2xhc3MsIHJlbWFpbmluZ0FyZ3VtZW50cykpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KENsYXNzLCBkb21FbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChkb21FbGVtZW50KTtcbiAgICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChudWxsKTtcblxuICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KENsYXNzLCByZW1haW5pbmdBcmd1bWVudHMpKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgdGFnTmFtZSA9IENsYXNzLnRhZ05hbWUsXG4gICAgICAgICAgaHRtbCA9IGA8JHt0YWdOYW1lfSAvPmAsXG4gICAgICAgICAgZWxlbWVudCA9IEVsZW1lbnQuZnJvbUhUTUwoQ2xhc3MsIGh0bWwsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBjb25zdCBkZWZhdWx0UHJvcGVydGllcyA9IENsYXNzLmRlZmF1bHRQcm9wZXJ0aWVzLFxuICAgICAgICAgIGlnbm9yZWRQcm9wZXJ0aWVzID0gQ2xhc3MuaWdub3JlZFByb3BlcnRpZXM7XG5cbiAgICBlbGVtZW50LmFwcGx5UHJvcGVydGllcyhwcm9wZXJ0aWVzLCBkZWZhdWx0UHJvcGVydGllcywgaWdub3JlZFByb3BlcnRpZXMpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwganN4TWl4aW4pO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgZXZlbnRNaXhpbik7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBjbGlja01peGluKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIHNjcm9sbE1peGluKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIHJlc2l6ZU1peGluKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIG1vdXNlTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwga2V5TWl4aW4pO1xuXG5PYmplY3QuYXNzaWduKEVsZW1lbnQsIHtcbiAgTEVGVF9NT1VTRV9CVVRUT046IDAsXG4gIE1JRERMRV9NT1VTRV9CVVRUT046IDEsXG4gIFJJR0hUX01PVVNFX0JVVFRPTjogMlxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRWxlbWVudDtcblxuZnVuY3Rpb24gZG9tRWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3Rvcikge1xuICBjb25zdCBkb21FbGVtZW50ID0gKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpID9cbiAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilbMF0gOiAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I7ICAvLy9cblxuICByZXR1cm4gZG9tRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoZG9tRWxlbWVudHMpIHtcbiAgY29uc3QgZG9tRWxlbWVudHNXaXRoRWxlbWVudHMgPSBmaWx0ZXIoZG9tRWxlbWVudHMsIGZ1bmN0aW9uKGRvbUVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gKGRvbUVsZW1lbnQuX19lbGVtZW50X18gIT09IHVuZGVmaW5lZCk7XG4gICAgICAgIH0pLFxuICAgICAgICBlbGVtZW50cyA9IGRvbUVsZW1lbnRzV2l0aEVsZW1lbnRzLm1hcChmdW5jdGlvbihkb21FbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIGRvbUVsZW1lbnQuX19lbGVtZW50X187XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZnVuY3Rpb24gZGVzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUoZG9tTm9kZSwgZGVzY2VuZGFudERPTU5vZGVzID0gW10pIHtcbiAgY29uc3QgY2hpbGRET01Ob2RlcyA9IGRvbU5vZGUuY2hpbGROb2RlczsgIC8vL1xuXG4gIGRlc2NlbmRhbnRET01Ob2Rlcy5jb25jYXQoY2hpbGRET01Ob2Rlcyk7XG5cbiAgY2hpbGRET01Ob2Rlcy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkRE9NTm9kZSkge1xuICAgIGRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlKGNoaWxkRE9NTm9kZSwgZGVzY2VuZGFudERPTU5vZGVzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRlc2NlbmRhbnRET01Ob2Rlcztcbn1cblxuZnVuY3Rpb24gZmlsdGVyRE9NTm9kZXMoZG9tTm9kZXMsIHNlbGVjdG9yKSB7XG4gIGNvbnN0IGZpbHRlcmVkRE9NTm9kZXMgPSBmaWx0ZXIoZG9tTm9kZXMsIGZ1bmN0aW9uKGRvbU5vZGUpIHtcbiAgICByZXR1cm4gZG9tTm9kZU1hdGNoZXNTZWxlY3Rvcihkb21Ob2RlLCBzZWxlY3Rvcik7XG4gIH0pO1xuXG4gIHJldHVybiBmaWx0ZXJlZERPTU5vZGVzO1xufVxuXG5mdW5jdGlvbiBkb21Ob2RlTWF0Y2hlc1NlbGVjdG9yKGRvbU5vZGUsIHNlbGVjdG9yKSB7XG4gIGNvbnN0IGRvbU5vZGVUeXBlID0gZG9tTm9kZS5ub2RlVHlwZTtcblxuICBzd2l0Y2ggKGRvbU5vZGVUeXBlKSB7XG4gICAgY2FzZSBOb2RlLkVMRU1FTlRfTk9ERSA6IHtcbiAgICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb21Ob2RlOyAvLy9cblxuICAgICAgcmV0dXJuIGRvbUVsZW1lbnQubWF0Y2hlcyhzZWxlY3Rvcik7XG4gICAgfVxuXG4gICAgY2FzZSBOb2RlLlRFWFRfTk9ERSA6IHtcbiAgICAgIGlmIChzZWxlY3RvciA9PT0gJyonKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZmlsdGVyKGFycmF5LCB0ZXN0KSB7XG4gIGNvbnN0IGZpbHRlcmVkQXJyYXkgPSBbXTtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICByZXN1bHQgPSB0ZXN0KGVsZW1lbnQpO1xuXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgZmlsdGVyZWRBcnJheS5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmaWx0ZXJlZEFycmF5O1xufVxuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKTtcblxuY2xhc3MgQm9keSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciA9ICdib2R5Jykge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gQm9keS5jbG9uZSh0aGlzKTsgfVxuXG4gIHN0YXRpYyBjbG9uZShlbGVtZW50KSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuY2xvbmUoQm9keSwgZWxlbWVudCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCkge1xuICAgIHJldHVybiBFbGVtZW50LmZyb21IVE1MKEJvZHksIGh0bWwpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpIHtcbiAgICByZXR1cm4gRWxlbWVudC5mcm9tRE9NRWxlbWVudChCb2R5LCBkb21FbGVtZW50KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQm9keSwgcHJvcGVydGllcyk7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihCb2R5LCB7XG4gIHRhZ05hbWU6ICdib2R5J1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQm9keTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKTtcblxuY2xhc3MgQnV0dG9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjbGlja0hhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICBpZiAoY2xpY2tIYW5kbGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub25DbGljayhjbGlja0hhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIGNsb25lKGNsaWNrSGFuZGxlcikgeyByZXR1cm4gQnV0dG9uLmNsb25lKHRoaXMsIGNsaWNrSGFuZGxlcik7IH1cblxuICBvbkNsaWNrKGNsaWNrSGFuZGxlciwgaW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUNsaWNrSGFuZGxlcikge1xuICAgIHN1cGVyLm9uQ2xpY2soY2xpY2tIYW5kbGVyLCBpbnRlcm1lZGlhdGVDbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgb2ZmQ2xpY2soY2xpY2tIYW5kbGVyKSB7XG4gICAgc3VwZXIub2ZmQ2xpY2soY2xpY2tIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBjbG9uZShlbGVtZW50LCBjbGlja0hhbmRsZXIpIHtcbiAgICByZXR1cm4gRWxlbWVudC5jbG9uZShCdXR0b24sIGVsZW1lbnQsIGNsaWNrSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCwgY2xpY2tIYW5kbGVyKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbUhUTUwoQnV0dG9uLCBodG1sLCBjbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQsIGNsaWNrSGFuZGxlcikge1xuICAgIHJldHVybiBFbGVtZW50LmZyb21ET01FbGVtZW50KEJ1dHRvbiwgZG9tRWxlbWVudCwgY2xpY2tIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBvbkNsaWNrIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNsaWNrSGFuZGxlciA9IG9uQ2xpY2s7IC8vL1xuXG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQnV0dG9uLCBwcm9wZXJ0aWVzLCBjbGlja0hhbmRsZXIpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oQnV0dG9uLCB7XG4gIHRhZ05hbWU6ICdidXR0b24nLFxuICBpZ25vcmVkUHJvcGVydGllczogW1xuICAgICdvbkNsaWNrJ1xuICBdXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBCdXR0b247XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbnRlcm1lZGlhdGVDbGlja0hhbmRsZXIoY2xpY2tIYW5kbGVyLCBldmVudCwgdGFyZ2V0RWxlbWVudCkge1xuICBjb25zdCBtb3VzZUJ1dHRvbiA9IGV2ZW50LmJ1dHRvbixcbiAgICAgICAgcHJldmVudERlZmF1bHQgPSBjbGlja0hhbmRsZXIobW91c2VCdXR0b24sIHRhcmdldEVsZW1lbnQpO1xuXG4gIHJldHVybiBwcmV2ZW50RGVmYXVsdDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKTtcblxuY2xhc3MgQ2hlY2tib3ggZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNoYW5nZUhhbmRsZXIsIGNoZWNrZWQpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICBpZiAoY2hhbmdlSGFuZGxlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIpO1xuICAgIH1cbiAgICBcbiAgICBpZiAoY2hlY2tlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmNoZWNrKGNoZWNrZWQpO1xuICAgIH1cbiAgfVxuXG4gIGNsb25lKGNoYW5nZUhhbmRsZXIpIHsgcmV0dXJuIENoZWNrYm94LmNsb25lKHRoaXMsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgb25DaGFuZ2UoY2hhbmdlSGFuZGxlciwgaW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyKSB7XG4gICAgdGhpcy5vbignY2xpY2snLCBjaGFuZ2VIYW5kbGVyLCBpbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyKTsgIC8vL1xuICB9XG4gIFxuICBvZmZDaGFuZ2UoY2hhbmdlSGFuZGxlcikge1xuICAgIHRoaXMub2ZmKCdjbGljaycsIGNoYW5nZUhhbmRsZXIpOyAgLy8vXG4gIH1cblxuICBjaGVjayhjaGVja2VkID0gdHJ1ZSkge1xuICAgIGNoZWNrZWQgP1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpIDpcbiAgICAgICAgdGhpcy5jbGVhckF0dHJpYnV0ZSgnY2hlY2tlZCcpO1xuICB9XG5cbiAgaXNDaGVja2VkKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNoZWNrZWQ7IH1cblxuICBvblJlc2l6ZSgpIHt9XG5cbiAgb2ZmUmVzaXplKCkge31cblxuICBzdGF0aWMgY2xvbmUoZWxlbWVudCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBFbGVtZW50LmNsb25lKENoZWNrYm94LCBlbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sLCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbUhUTUwoQ2hlY2tib3gsIGh0bWwsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICByZXR1cm4gRWxlbWVudC5mcm9tRE9NRWxlbWVudChDaGVja2JveCwgZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UsIGNoZWNrZWQgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IG9uQ2hhbmdlOyAvLy8gICAgXG5cbiAgICByZXR1cm4gRWxlbWVudC5mcm9tUHJvcGVydGllcyhDaGVja2JveCwgcHJvcGVydGllcywgY2hhbmdlSGFuZGxlciwgY2hlY2tlZCk7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihDaGVja2JveCwge1xuICB0YWdOYW1lOiAnaW5wdXQnLFxuICBpZ25vcmVkUHJvcGVydGllczogW1xuICAgICdvbkNoYW5nZScsXG4gICAgJ2NoZWNrZWQnXG4gIF0sXG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgdHlwZTogJ2NoZWNrYm94J1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBDaGVja2JveDtcblxuZnVuY3Rpb24gZGVmYXVsdEludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIoY2hhbmdlSGFuZGxlciwgZXZlbnQsIHRhcmdldEVsZW1lbnQpIHtcbiAgY29uc3QgY2hlY2tib3ggPSB0YXJnZXRFbGVtZW50LCAvLy9cbiAgICAgICAgY2hlY2tlZCA9IGNoZWNrYm94LmlzQ2hlY2tlZCgpLFxuICAgICAgICBwcmV2ZW50RGVmYXVsdCA9IGNoYW5nZUhhbmRsZXIoY2hlY2tlZCwgdGFyZ2V0RWxlbWVudCk7XG5cbiAgcmV0dXJuIHByZXZlbnREZWZhdWx0O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpO1xuXG5jbGFzcyBEaXYgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIERpdi5jbG9uZSh0aGlzKTsgfVxuXG4gIHN0YXRpYyBjbG9uZShlbGVtZW50KSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuY2xvbmUoRGl2LCBlbGVtZW50KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbUhUTUwoRGl2LCBodG1sKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50KSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoRGl2LCBkb21FbGVtZW50KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoRGl2LCBwcm9wZXJ0aWVzKTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKERpdiwge1xuICB0YWdOYW1lOiAnZGl2J1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGl2O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpO1xuXG5jbGFzcyBMaW5rIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjbGlja0hhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICBpZiAoY2xpY2tIYW5kbGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub25DbGljayhjbGlja0hhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIGNsb25lKGNsaWNrSGFuZGxlcikgeyByZXR1cm4gTGluay5jbG9uZSh0aGlzLCBjbGlja0hhbmRsZXIpOyB9XG5cbiAgb25DbGljayhjbGlja0hhbmRsZXIsIGludGVybWVkaWF0ZUNsaWNrSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVDbGlja0hhbmRsZXIpIHtcbiAgICB0aGlzLm9uKCdjbGljaycsIGNsaWNrSGFuZGxlciwgaW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyKTtcbiAgfVxuICBcbiAgb2ZmQ2xpY2soY2xpY2tIYW5kbGVyKSB7XG4gICAgdGhpcy5vZmYoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBjbG9uZShlbGVtZW50LCBjbGlja0hhbmRsZXIpIHtcbiAgICByZXR1cm4gRWxlbWVudC5jbG9uZShMaW5rLCBlbGVtZW50LCBjbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwsIGNsaWNrSGFuZGxlcikge1xuICAgIHJldHVybiBFbGVtZW50LmZyb21IVE1MKExpbmssIGh0bWwsIGNsaWNrSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCwgY2xpY2tIYW5kbGVyKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoTGluaywgZG9tRWxlbWVudCwgY2xpY2tIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBvbkNsaWNrIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNsaWNrSGFuZGxlciA9IG9uQ2xpY2s7IC8vLyAgICBcblxuICAgIHJldHVybiBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKExpbmssIHByb3BlcnRpZXMsIGNsaWNrSGFuZGxlcik7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihMaW5rLCB7XG4gIHRhZ05hbWU6ICdhJyxcbiAgaWdub3JlZFByb3BlcnRpZXM6IFtcbiAgICAnb25DbGljaydcbiAgXVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTGluaztcblxuZnVuY3Rpb24gZGVmYXVsdEludGVybWVkaWF0ZUNsaWNrSGFuZGxlcihjbGlja0hhbmRsZXIsIGV2ZW50LCB0YXJnZXRFbGVtZW50KSB7XG4gIGNvbnN0IGxpbmsgPSB0YXJnZXRFbGVtZW50LCAvLy9cbiAgICAgICAgaHJlZiA9IGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJyksXG4gICAgICAgIHByZXZlbnREZWZhdWx0ID0gY2xpY2tIYW5kbGVyKGhyZWYsIHRhcmdldEVsZW1lbnQpO1xuXG4gIHJldHVybiBwcmV2ZW50RGVmYXVsdDtcbn0iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50Jyk7XG5cbmNsYXNzIFNlbGVjdCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY2hhbmdlSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjaGFuZ2VIYW5kbGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoY2hhbmdlSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gU2VsZWN0LmNsb25lKHRoaXMsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgb25DaGFuZ2UoY2hhbmdlSGFuZGxlciwgaW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyKSB7XG4gICAgdGhpcy5vbignY2hhbmdlJywgY2hhbmdlSGFuZGxlciwgaW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBvZmZDaGFuZ2UoY2hhbmdlSGFuZGxlcikge1xuICAgIHRoaXMub2ZmKCdjaGFuZ2UnLCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIGdldFNlbGVjdGVkT3B0aW9uVmFsdWUoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRPcHRpb25WYWx1ZSA9IHRoaXMuZG9tRWxlbWVudC52YWx1ZTsgIC8vL1xuICAgIFxuICAgIHJldHVybiBzZWxlY3RlZE9wdGlvblZhbHVlO1xuICB9XG5cbiAgc2V0U2VsZWN0ZWRPcHRpb25CeVZhbHVlKHNlbGVjdGVkT3B0aW9uVmFsdWUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHNlbGVjdGVkT3B0aW9uVmFsdWU7ICAvLy9cbiAgICBcbiAgICB0aGlzLmRvbUVsZW1lbnQudmFsdWUgPSB2YWx1ZTsgXG4gIH1cblxuICBzdGF0aWMgY2xvbmUoZWxlbWVudCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBFbGVtZW50LmNsb25lKFNlbGVjdCwgZWxlbWVudCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBFbGVtZW50LmZyb21IVE1MKFNlbGVjdCwgaHRtbCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBFbGVtZW50LmZyb21ET01FbGVtZW50KFNlbGVjdCwgZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IG9uQ2hhbmdlOyAvLy8gICAgXG5cbiAgICByZXR1cm4gRWxlbWVudC5mcm9tUHJvcGVydGllcyhTZWxlY3QsIHByb3BlcnRpZXMsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oU2VsZWN0LCB7XG4gIHRhZ05hbWU6ICdzZWxlY3QnLFxuICBpZ25vcmVkUHJvcGVydGllczogW1xuICAgICdvbkNoYW5nZSdcbiAgXVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2VsZWN0O1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcihjaGFuZ2VIYW5kbGVyLCBldmVudCwgdGFyZ2V0RWxlbWVudCkge1xuICBjb25zdCBzZWxlY3QgPSB0YXJnZXRFbGVtZW50LCAvLy9cbiAgICAgICAgc2VsZWN0ZWRPcHRpb25WYWx1ZSA9IHNlbGVjdC5nZXRTZWxlY3RlZE9wdGlvblZhbHVlKCksXG4gICAgICAgIHByZXZlbnREZWZhdWx0ID0gY2hhbmdlSGFuZGxlcihzZWxlY3RlZE9wdGlvblZhbHVlLCB0YXJnZXRFbGVtZW50KTtcblxuICByZXR1cm4gcHJldmVudERlZmF1bHQ7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50Jyk7XG5cbmNsYXNzIFNwYW4gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY2xvbmUoKSB7IHJldHVybiBTcGFuLmNsb25lKHRoaXMpOyB9XG5cbiAgb25SZXNpemUoKSB7fVxuXG4gIG9mZlJlc2l6ZSgpIHt9XG5cbiAgc3RhdGljIGNsb25lKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gRWxlbWVudC5jbG9uZShTcGFuLCBlbGVtZW50KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbUhUTUwoU3BhbiwgaHRtbCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICAgIHJldHVybiBFbGVtZW50LmZyb21ET01FbGVtZW50KFNwYW4sIGRvbUVsZW1lbnQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICByZXR1cm4gRWxlbWVudC5mcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFNwYW4sIHtcbiAgdGFnTmFtZTogJ3NwYW4nXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBTcGFuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50Jyk7XG5cbmNsYXNzIElucHV0RWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY2hhbmdlSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjaGFuZ2VIYW5kbGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoY2hhbmdlSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgb25SZXNpemUoKSB7fVxuXG4gIG9mZlJlc2l6ZSgpIHt9XG5cbiAgb25DaGFuZ2UoY2hhbmdlSGFuZGxlciwgaW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyKSB7XG4gICAgdGhpcy5vbignY2hhbmdlJywgY2hhbmdlSGFuZGxlciwgaW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBvZmZDaGFuZ2UoY2hhbmdlSGFuZGxlcikge1xuICAgIHRoaXMub2ZmKCdjaGFuZ2UnLCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIGdldFZhbHVlKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnZhbHVlOyB9XG5cbiAgZ2V0U2VsZWN0aW9uU3RhcnQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQ7IH1cblxuICBnZXRTZWxlY3Rpb25FbmQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uRW5kOyB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHsgdGhpcy5kb21FbGVtZW50LnZhbHVlID0gdmFsdWU7IH1cblxuICBzZXRTZWxlY3Rpb25TdGFydChzZWxlY3Rpb25TdGFydCkgeyB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgPSBzZWxlY3Rpb25TdGFydDsgfVxuXG4gIHNldFNlbGVjdGlvbkVuZChzZWxlY3Rpb25FbmQpIHsgdGhpcy5kb21FbGVtZW50LnNlbGVjdGlvbkVuZCA9IHNlbGVjdGlvbkVuZDsgfVxuXG4gIHNlbGVjdCgpIHsgdGhpcy5kb21FbGVtZW50LnNlbGVjdCgpOyB9XG5cbiAgc3RhdGljIGNsb25lKENsYXNzLCBlbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICByZXR1cm4gRWxlbWVudC5jbG9uZShDbGFzcywgZWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21IVE1MKENsYXNzLCBodG1sLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICByZXR1cm4gRWxlbWVudC5mcm9tSFRNTChDbGFzcywgaHRtbCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChDbGFzcywgZG9tRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoQ2xhc3MsIGRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IG9uQ2hhbmdlOyAvLy9cblxuICAgIHJldHVybiBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBjaGFuZ2VIYW5kbGVyLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oSW5wdXRFbGVtZW50LCB7XG4gIGlnbm9yZWRQcm9wZXJ0aWVzOiBbXG4gICAgJ29uQ2hhbmdlJ1xuICBdXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnB1dEVsZW1lbnQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyKGNoYW5nZUhhbmRsZXIsIGV2ZW50LCB0YXJnZXRFbGVtZW50KSB7XG4gIGNvbnN0IGlucHV0RWxlbWVudCA9IHRhcmdldEVsZW1lbnQsIC8vL1xuICAgICAgICB2YWx1ZSA9IGlucHV0RWxlbWVudC5nZXRWYWx1ZSgpLFxuICAgICAgICBwcmV2ZW50RGVmYXVsdCA9IGNoYW5nZUhhbmRsZXIodmFsdWUsIHRhcmdldEVsZW1lbnQpO1xuXG4gIHJldHVybiBwcmV2ZW50RGVmYXVsdDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgSW5wdXRFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW5wdXRFbGVtZW50Jyk7XG5cbmNsYXNzIElucHV0IGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgY2xvbmUoY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gSW5wdXQuY2xvbmUodGhpcywgY2hhbmdlSGFuZGxlcik7IH1cblxuICBzdGF0aWMgY2xvbmUoZWxlbWVudCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuY2xvbmUoSW5wdXQsIGVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21IVE1MKElucHV0LCBodG1sLCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tRE9NRWxlbWVudChJbnB1dCwgZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoSW5wdXQsIHByb3BlcnRpZXMpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oSW5wdXQsIHtcbiAgdGFnTmFtZTogJ2lucHV0J1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gSW5wdXQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IElucHV0RWxlbWVudCA9IHJlcXVpcmUoJy4uL2lucHV0RWxlbWVudCcpO1xuXG5jbGFzcyBUZXh0YXJlYSBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIGNsb25lKGNoYW5nZUhhbmRsZXIpIHsgcmV0dXJuIFRleHRhcmVhLmNsb25lKHRoaXMsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgc3RhdGljIGNsb25lKGVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmNsb25lKFRleHRhcmVhLCBlbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sLCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tSFRNTChUZXh0YXJlYSwgaHRtbCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoVGV4dGFyZWEsIGRvbUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFRleHRhcmVhLCBwcm9wZXJ0aWVzKTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFRleHRhcmVhLCB7XG4gIHRhZ05hbWU6ICd0ZXh0YXJlYSdcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHRhcmVhO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBCb3VuZHMge1xuICBjb25zdHJ1Y3Rvcih0b3AsIGxlZnQsIGJvdHRvbSwgcmlnaHQpIHtcbiAgICB0aGlzLnRvcCA9IHRvcDtcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgIHRoaXMuYm90dG9tID0gYm90dG9tO1xuICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgfVxuXG4gIGdldFRvcCgpIHtcbiAgICByZXR1cm4gdGhpcy50b3A7XG4gIH1cblxuICBnZXRMZWZ0KCkge1xuICAgIHJldHVybiB0aGlzLmxlZnQ7XG4gIH1cblxuICBnZXRCb3R0b20oKSB7XG4gICAgcmV0dXJuIHRoaXMuYm90dG9tO1xuICB9XG5cbiAgZ2V0UmlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmlnaHQ7XG4gIH1cblxuICBpc092ZXJsYXBwaW5nTW91c2UobW91c2VUb3AsIG1vdXNlTGVmdCkge1xuICAgIHJldHVybiAoICAodGhpcy50b3AgPCBtb3VzZVRvcCkgJiZcbiAgICAgICAgICAgICAgKHRoaXMubGVmdCA8IG1vdXNlTGVmdCkgJiZcbiAgICAgICAgICAgICAgKHRoaXMuYm90dG9tID4gbW91c2VUb3ApICYmXG4gICAgICAgICAgICAgICh0aGlzLnJpZ2h0ID4gbW91c2VMZWZ0KSAgKTtcbiAgfVxuXG4gIGFyZU92ZXJsYXBwaW5nKGJvdW5kcykge1xuICAgIHJldHVybiAoICAodGhpcy50b3AgPCBib3VuZHMuYm90dG9tKSAmJlxuICAgICAgICAgICAgICAodGhpcy5sZWZ0IDwgYm91bmRzLnJpZ2h0KSAmJlxuICAgICAgICAgICAgICAodGhpcy5ib3R0b20gPiBib3VuZHMudG9wKSAmJlxuICAgICAgICAgICAgICAodGhpcy5yaWdodCA+IGJvdW5kcy5sZWZ0KSAgKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQm91bmRpbmdDbGllbnRSZWN0KGJvdW5kaW5nQ2xpZW50UmVjdCkge1xuICAgIGNvbnN0IHdpbmRvd1Njcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCwgLy8vXG4gICAgICAgICAgd2luZG93U2Nyb2xsTGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldCwgIC8vL1xuICAgICAgICAgIHRvcCA9IGJvdW5kaW5nQ2xpZW50UmVjdC50b3AgKyB3aW5kb3dTY3JvbGxUb3AsXG4gICAgICAgICAgbGVmdCA9IGJvdW5kaW5nQ2xpZW50UmVjdC5sZWZ0ICsgd2luZG93U2Nyb2xsTGVmdCxcbiAgICAgICAgICBib3R0b20gPSBib3VuZGluZ0NsaWVudFJlY3QuYm90dG9tICsgd2luZG93U2Nyb2xsVG9wLFxuICAgICAgICAgIHJpZ2h0ID0gYm91bmRpbmdDbGllbnRSZWN0LnJpZ2h0ICsgd2luZG93U2Nyb2xsTGVmdCxcbiAgICAgICAgICBib3VuZHMgPSBuZXcgQm91bmRzKHRvcCwgbGVmdCwgYm90dG9tLCByaWdodCk7XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQm91bmRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBPZmZzZXQge1xuICBjb25zdHJ1Y3Rvcih0b3AsIGxlZnQpIHtcbiAgICB0aGlzLnRvcCA9IHRvcDtcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICB9XG5cbiAgZ2V0VG9wKCkge1xuICAgIHJldHVybiB0aGlzLnRvcDtcbiAgfVxuXG4gIGdldExlZnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9mZnNldDtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gb25DbGljayhoYW5kbGVyLCBpbnRlcm1lZGlhdGVIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUhhbmRsZXIpIHtcbiAgdGhpcy5vbignY2xpY2snLCBoYW5kbGVyLCBpbnRlcm1lZGlhdGVIYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gb2ZmQ2xpY2soaGFuZGxlcikgeyB0aGlzLm9mZignY2xpY2snLCBoYW5kbGVyKTsgfVxuXG5jb25zdCBjbGlja01peGluID0ge1xuICBvbkNsaWNrOiBvbkNsaWNrLFxuICBvZmZDbGljazogb2ZmQ2xpY2tcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY2xpY2tNaXhpbjtcblxuZnVuY3Rpb24gZGVmYXVsdEludGVybWVkaWF0ZUhhbmRsZXIoaGFuZGxlciwgZXZlbnQsIHRhcmdldEVsZW1lbnQpIHtcbiAgY29uc3QgbW91c2VUb3AgPSBldmVudC5wYWdlWSwgIC8vL1xuICAgICAgICBtb3VzZUxlZnQgPSBldmVudC5wYWdlWCwgLy8vXG4gICAgICAgIG1vdXNlQnV0dG9uID0gZXZlbnQuYnV0dG9uLCAvLy9cbiAgICAgICAgcHJldmVudERlZmF1bHQgPSBoYW5kbGVyKG1vdXNlVG9wLCBtb3VzZUxlZnQsIG1vdXNlQnV0dG9uLCB0YXJnZXRFbGVtZW50KTtcblxuICByZXR1cm4gcHJldmVudERlZmF1bHQ7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIG9uKGV2ZW50VHlwZXMsIGhhbmRsZXIsIGludGVybWVkaWF0ZUhhbmRsZXIpIHtcbiAgZXZlbnRUeXBlcyA9IGV2ZW50VHlwZXMuc3BsaXQoJyAnKTsgLy8vXG5cbiAgZXZlbnRUeXBlcy5mb3JFYWNoKGZ1bmN0aW9uKGV2ZW50VHlwZSkge1xuICAgIG9uRXZlbnQodGhpcywgZXZlbnRUeXBlLCBoYW5kbGVyLCBpbnRlcm1lZGlhdGVIYW5kbGVyKTtcbiAgfS5iaW5kKHRoaXMpKTtcbn1cblxuZnVuY3Rpb24gb2ZmKGV2ZW50VHlwZXMsIGhhbmRsZXIpIHtcbiAgZXZlbnRUeXBlcyA9IGV2ZW50VHlwZXMuc3BsaXQoJyAnKTsgLy8vXG5cbiAgZXZlbnRUeXBlcy5mb3JFYWNoKGZ1bmN0aW9uKGV2ZW50VHlwZSkge1xuICAgIG9mZkV2ZW50KHRoaXMsIGV2ZW50VHlwZSwgaGFuZGxlcik7XG4gIH0uYmluZCh0aGlzKSk7XG59XG5cbmNvbnN0IGV2ZW50TWl4aW4gPSB7XG4gIG9uOiBvbixcbiAgb2ZmOiBvZmZcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXZlbnRNaXhpbjtcblxuZnVuY3Rpb24gb25FdmVudChlbGVtZW50LCBldmVudFR5cGUsIGhhbmRsZXIsIGludGVybWVkaWF0ZUhhbmRsZXIpIHtcbiAgaWYgKCFlbGVtZW50Lmhhc093blByb3BlcnR5KCdldmVudE9iamVjdE1hcCcpKSB7XG4gICAgY29uc3QgZXZlbnRPYmplY3RNYXAgPSB7fTtcblxuICAgIE9iamVjdC5hc3NpZ24oZWxlbWVudCwge1xuICAgICAgZXZlbnRPYmplY3RNYXA6IGV2ZW50T2JqZWN0TWFwXG4gICAgfSk7XG4gIH1cblxuICBsZXQgZXZlbnRPYmplY3QgPSBlbGVtZW50LmV2ZW50T2JqZWN0TWFwW2V2ZW50VHlwZV07XG5cbiAgaWYgKCFldmVudE9iamVjdCkge1xuICAgIGV2ZW50T2JqZWN0ID0gY3JlYXRlRXZlbnRPYmplY3QoKTtcblxuICAgIGVsZW1lbnQuZXZlbnRPYmplY3RNYXBbZXZlbnRUeXBlXSA9IGV2ZW50T2JqZWN0O1xuICB9XG5cbiAgZXZlbnRPYmplY3QuYWRkSGFuZGxlcihlbGVtZW50LCBldmVudFR5cGUsIGhhbmRsZXIsIGludGVybWVkaWF0ZUhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvZmZFdmVudChlbGVtZW50LCBldmVudFR5cGUsIGhhbmRsZXIpIHtcbiAgY29uc3QgZXZlbnRPYmplY3QgPSBlbGVtZW50LmV2ZW50T2JqZWN0TWFwW2V2ZW50VHlwZV0sXG4gICAgICAgIG5vbmVSZW1haW5pbmcgPSBldmVudE9iamVjdC5yZW1vdmVIYW5kbGVyKGVsZW1lbnQsIGV2ZW50VHlwZSwgaGFuZGxlcik7XG5cbiAgaWYgKG5vbmVSZW1haW5pbmcpIHtcbiAgICBkZWxldGUgZWxlbWVudC5ldmVudE9iamVjdE1hcFtldmVudFR5cGVdO1xuICB9XG5cbiAgY29uc3QgZXZlbnRUeXBlcyA9IE9iamVjdC5rZXlzKGVsZW1lbnQuZXZlbnRPYmplY3RNYXApO1xuXG4gIGlmIChldmVudFR5cGVzLmxlbmd0aCA9PT0gMCkge1xuICAgIGRlbGV0ZSBlbGVtZW50LmV2ZW50T2JqZWN0TWFwO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUV2ZW50T2JqZWN0KCkge1xuICBjb25zdCBldmVudExpc3RlbmVycyA9IFtdO1xuXG4gIGZ1bmN0aW9uIGFkZEhhbmRsZXIoZWxlbWVudCwgZXZlbnRUeXBlLCBoYW5kbGVyLCBpbnRlcm1lZGlhdGVIYW5kbGVyKSB7XG4gICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGVsZW1lbnQsICAvLy9cbiAgICAgICAgICBldmVudExpc3RlbmVyID0gY3JlYXRlRXZlbnRMaXN0ZW5lcihoYW5kbGVyLCBpbnRlcm1lZGlhdGVIYW5kbGVyLCB0YXJnZXRFbGVtZW50KTtcblxuICAgIGVsZW1lbnQuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgZXZlbnRMaXN0ZW5lcik7XG5cbiAgICBldmVudExpc3RlbmVycy5wdXNoKGV2ZW50TGlzdGVuZXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlSGFuZGxlcihlbGVtZW50LCBldmVudFR5cGUsIGhhbmRsZXIgPSBudWxsKSB7XG4gICAgaWYgKGhhbmRsZXIgPT09IG51bGwpIHtcbiAgICAgIGV2ZW50TGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24oZXZlbnRMaXN0ZW5lcikge1xuICAgICAgICBlbGVtZW50LmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGV2ZW50TGlzdGVuZXIpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHN0YXJ0ID0gMDtcblxuICAgICAgZXZlbnRMaXN0ZW5lcnMuc3BsaWNlKHN0YXJ0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW5kZXggPSBpbmRleE9mRXZlbnRMaXN0ZW5lcihldmVudExpc3RlbmVycywgaGFuZGxlciksXG4gICAgICAgICAgICBldmVudExpc3RlbmVyID0gZXZlbnRMaXN0ZW5lcnNbaW5kZXhdO1xuXG4gICAgICBlbGVtZW50LmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGV2ZW50TGlzdGVuZXIpO1xuXG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICAgIGV2ZW50TGlzdGVuZXJzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuICAgIH1cblxuICAgIGNvbnN0IG5vbmVSZW1haW5pbmcgPSAoZXZlbnRMaXN0ZW5lcnMubGVuZ3RoID09PSAwKTsgIC8vL1xuXG4gICAgcmV0dXJuIG5vbmVSZW1haW5pbmc7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGFkZEhhbmRsZXI6IGFkZEhhbmRsZXIsXG4gICAgcmVtb3ZlSGFuZGxlcjogcmVtb3ZlSGFuZGxlclxuICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFdmVudExpc3RlbmVyKGhhbmRsZXIsIGludGVybWVkaWF0ZUhhbmRsZXIsIHRhcmdldEVsZW1lbnQpIHtcbiAgaWYgKHR5cGVvZiBpbnRlcm1lZGlhdGVIYW5kbGVyID09PSAnb2JqZWN0Jykge1xuICAgIGNvbnN0IG9iamVjdCA9IGludGVybWVkaWF0ZUhhbmRsZXI7ICAvLy9cblxuICAgIGludGVybWVkaWF0ZUhhbmRsZXIgPSBjcmVhdGVCaW5kaW5nSW50ZXJtZWRpYXRlSGFuZGxlcihvYmplY3QpOyAvLy9cbiAgfVxuXG4gIGNvbnN0IGV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCkge1xuICAgIGNvbnN0IHByZXZlbnREZWZhdWx0ID0gKGludGVybWVkaWF0ZUhhbmRsZXIgIT09IHVuZGVmaW5lZCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJtZWRpYXRlSGFuZGxlcihoYW5kbGVyLCBldmVudCwgdGFyZ2V0RWxlbWVudCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyKGV2ZW50LCB0YXJnZXRFbGVtZW50KTtcblxuICAgIGlmIChwcmV2ZW50RGVmYXVsdCA9PT0gdHJ1ZSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfTtcblxuICBPYmplY3QuYXNzaWduKGV2ZW50TGlzdGVuZXIsIHtcbiAgICBoYW5kbGVyOiBoYW5kbGVyXG4gIH0pO1xuXG4gIHJldHVybiBldmVudExpc3RlbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCaW5kaW5nSW50ZXJtZWRpYXRlSGFuZGxlcihvYmplY3QpIHtcbiAgY29uc3QgYmluZGluZ0ludGVybWVkaWF0ZUhhbmRsZXIgPSBmdW5jdGlvbihoYW5kbGVyLCBldmVudCwgdGFyZ2V0RWxlbWVudCkge1xuICAgIGNvbnN0IHByZXZlbnREZWZhdWx0ID0gaGFuZGxlci5jYWxsKG9iamVjdCwgZXZlbnQsIHRhcmdldEVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIHByZXZlbnREZWZhdWx0O1xuICB9O1xuXG4gIHJldHVybiBiaW5kaW5nSW50ZXJtZWRpYXRlSGFuZGxlcjtcbn1cblxuZnVuY3Rpb24gaW5kZXhPZkV2ZW50TGlzdGVuZXIoZXZlbnRMaXN0ZW5lcnMsIGhhbmRsZXIpIHtcbiAgbGV0IGZvdW5kSW5kZXggPSB1bmRlZmluZWQ7IC8vL1xuXG4gIGV2ZW50TGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24oZXZlbnRMaXN0ZW5lciwgaW5kZXgpIHtcbiAgICBpZiAoZXZlbnRMaXN0ZW5lci5oYW5kbGVyID09PSBoYW5kbGVyKSB7ICAvLy9cbiAgICAgIGZvdW5kSW5kZXggPSBpbmRleDtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGluZGV4ID0gZm91bmRJbmRleDsgLy8vXG5cbiAgcmV0dXJuIGluZGV4O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBUZXh0RWxlbWVudCA9IHJlcXVpcmUoJy4uL3RleHRFbGVtZW50Jyk7XG5cbmZ1bmN0aW9uIGFkZFRvKHBhcmVudEVsZW1lbnQpIHtcbiAgdXBkYXRlUGFyZW50Q29udGV4dCh0aGlzLCBwYXJlbnRFbGVtZW50KTtcblxuICBwYXJlbnRFbGVtZW50LmFkZCh0aGlzKTtcbn1cblxuZnVuY3Rpb24gYXBwZW5kVG8ocGFyZW50RWxlbWVudCkge1xuICB1cGRhdGVQYXJlbnRDb250ZXh0KHRoaXMsIHBhcmVudEVsZW1lbnQpO1xuXG4gIHBhcmVudEVsZW1lbnQuYXBwZW5kKHRoaXMpO1xufVxuXG5mdW5jdGlvbiBwcmVwZW5kVG8ocGFyZW50RWxlbWVudCkge1xuICB1cGRhdGVQYXJlbnRDb250ZXh0KHRoaXMsIHBhcmVudEVsZW1lbnQpO1xuXG4gIHBhcmVudEVsZW1lbnQucHJlcGVuZCh0aGlzKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRnJvbShwYXJlbnRFbGVtZW50KSB7XG4gIHBhcmVudEVsZW1lbnQucmVtb3ZlKHRoaXMpO1xufVxuXG5mdW5jdGlvbiBhc3NpZ25Db250ZXh0KG5hbWVzID0gT2JqZWN0LmtleXModGhpcy5jb250ZXh0KSwgdGhlbkRlbGV0ZSA9IHRydWUpIHtcbiAgbmFtZXMuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmNvbnRleHRbbmFtZV0sXG4gICAgICAgICAgZGVzY3JpcHRvciA9IHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICAgIH07XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgbmFtZSwgZGVzY3JpcHRvcik7XG5cbiAgICBpZiAodGhlbkRlbGV0ZSkge1xuICAgICAgZGVsZXRlIHRoaXMuY29udGV4dFtuYW1lXTtcbiAgICB9XG4gIH0uYmluZCh0aGlzKSk7XG4gIFxuICBpZiAodGhlbkRlbGV0ZSkge1xuICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXModGhpcy5jb250ZXh0KSxcbiAgICAgICAgICBuYW1lc0xlbmd0aCA9IG5hbWVzLmxlbmd0aDsgLy8vXG4gICAgXG4gICAgaWYgKG5hbWVzTGVuZ3RoID09PSAwKSB7XG4gICAgICBkZWxldGUgdGhpcy5jb250ZXh0O1xuICAgIH0gXG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlQcm9wZXJ0aWVzKHByb3BlcnRpZXMgPSB7fSwgZGVmYXVsdFByb3BlcnRpZXMsIGlnbm9yZWRQcm9wZXJ0aWVzKSB7XG4gIGFzc2lnbihwcm9wZXJ0aWVzLCBkZWZhdWx0UHJvcGVydGllcyk7XG5cbiAgY29uc3QgY2hpbGRFbGVtZW50cyA9IGNoaWxkRWxlbWVudHNGcm9tRWxlbWVudEFuZFByb3BlcnRpZXModGhpcywgcHJvcGVydGllcyk7XG5cbiAgdW5hc3NpZ24ocHJvcGVydGllcywgaWdub3JlZFByb3BlcnRpZXMpO1xuXG4gIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMocHJvcGVydGllcyk7XG5cbiAgbmFtZXMuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgY29uc3QgdmFsdWUgPSBwcm9wZXJ0aWVzW25hbWVdO1xuXG4gICAgaWYgKGZhbHNlKSB7XG5cbiAgICB9IGVsc2UgaWYgKGlzSGFuZGxlck5hbWUobmFtZSkpIHtcbiAgICAgIGFkZEhhbmRsZXIodGhpcywgbmFtZSwgdmFsdWUpO1xuICAgIH0gZWxzZSBpZiAoaXNBdHRyaWJ1dGVOYW1lKG5hbWUpKSB7XG4gICAgICBhZGRBdHRyaWJ1dGUodGhpcywgbmFtZSwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXRoaXMuaGFzT3duUHJvcGVydHkoJ3Byb3BlcnRpZXMnKSkge1xuICAgICAgICBjb25zdCBwcm9wZXJ0aWVzID0ge307XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7XG4gICAgICAgICAgcHJvcGVydGllczogcHJvcGVydGllc1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5wcm9wZXJ0aWVzW25hbWVdID0gdmFsdWU7XG4gICAgfVxuICB9LmJpbmQodGhpcykpO1xuXG4gIGNvbnN0IHBhcmVudEVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICBjaGlsZEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oY2hpbGRFbGVtZW50KSB7XG4gICAgY2hpbGRFbGVtZW50LmFkZFRvKHBhcmVudEVsZW1lbnQpO1xuICB9LmJpbmQodGhpcykpO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9wZXJ0aWVzKCkge1xuICByZXR1cm4gdGhpcy5wcm9wZXJ0aWVzO1xufVxuXG5mdW5jdGlvbiBnZXRDb250ZXh0KCkge1xuICByZXR1cm4gdGhpcy5jb250ZXh0O1xufVxuXG5mdW5jdGlvbiBnZXRTdGF0ZSgpIHtcbiAgcmV0dXJuIHRoaXMuc3RhdGU7XG59XG5cbmZ1bmN0aW9uIHNldFN0YXRlKHN0YXRlKSB7XG4gIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbn1cblxuZnVuY3Rpb24gZnJvbVN0YXRlKG5hbWUpIHtcbiAgY29uc3QgdmFsdWUgPSB0aGlzLnN0YXRlW25hbWVdO1xuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlU3RhdGUodXBkYXRlKSB7XG4gIE9iamVjdC5hc3NpZ24odGhpcy5zdGF0ZSwgdXBkYXRlKTtcbn1cblxuY29uc3QganN4TWl4aW4gPSB7XG4gIGFkZFRvOiBhZGRUbyxcbiAgYXBwZW5kVG86IGFwcGVuZFRvLFxuICBwcmVwZW5kVG86IHByZXBlbmRUbyxcbiAgcmVtb3ZlRnJvbTogcmVtb3ZlRnJvbSxcbiAgYXNzaWduQ29udGV4dDogYXNzaWduQ29udGV4dCxcbiAgYXBwbHlQcm9wZXJ0aWVzOiBhcHBseVByb3BlcnRpZXMsXG4gIGdldFByb3BlcnRpZXM6IGdldFByb3BlcnRpZXMsXG4gIGdldENvbnRleHQ6IGdldENvbnRleHQsXG4gIGdldFN0YXRlOiBnZXRTdGF0ZSxcbiAgc2V0U3RhdGU6IHNldFN0YXRlLFxuICBmcm9tU3RhdGU6IGZyb21TdGF0ZSxcbiAgdXBkYXRlU3RhdGU6IHVwZGF0ZVN0YXRlXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGpzeE1peGluO1xuXG5mdW5jdGlvbiBjaGlsZEVsZW1lbnRzRnJvbUVsZW1lbnRBbmRQcm9wZXJ0aWVzKGVsZW1lbnQsIHByb3BlcnRpZXMpIHtcbiAgbGV0IGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LmNoaWxkRWxlbWVudHMgP1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllcy5jaGlsZEVsZW1lbnRzO1xuXG4gIGNoaWxkRWxlbWVudHMgPSAoY2hpbGRFbGVtZW50cyAhPT0gdW5kZWZpbmVkKSA/XG4gICAgICAgICAgICAgICAgICAgKChjaGlsZEVsZW1lbnRzIGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRFbGVtZW50cyA6XG4gICAgICAgICAgICAgICAgICAgICAgICBbY2hpbGRFbGVtZW50c10pIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW107XG5cbiAgY2hpbGRFbGVtZW50cyA9IGNoaWxkRWxlbWVudHMubWFwKGZ1bmN0aW9uKGNoaWxkRWxlbWVudCkge1xuICAgIGlmICh0eXBlb2YgY2hpbGRFbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc3QgdGV4dCA9IGNoaWxkRWxlbWVudCwgIC8vL1xuICAgICAgICAgICAgdGV4dEVsZW1lbnQgPSBuZXcgVGV4dEVsZW1lbnQodGV4dCk7XG5cbiAgICAgIGNoaWxkRWxlbWVudCA9IHRleHRFbGVtZW50OyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGRFbGVtZW50O1xuICB9KTtcblxuICByZXR1cm4gY2hpbGRFbGVtZW50cztcbn1cblxuZnVuY3Rpb24gdW5hc3NpZ24ocHJvcGVydGllcywgaWdub3JlZFByb3BlcnRpZXMgPSBbXSkge1xuICBjb25zdCBpZ25vcmVkUHJvcGVydHlOYW1lcyA9IGlnbm9yZWRQcm9wZXJ0aWVzOyAvLy9cblxuICBpZ25vcmVkUHJvcGVydHlOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKGlnbm9yZWRQcm9wZXJ0eU5hbWUpIHtcbiAgICBpZiAocHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShpZ25vcmVkUHJvcGVydHlOYW1lKSkge1xuICAgICAgZGVsZXRlIHByb3BlcnRpZXNbaWdub3JlZFByb3BlcnR5TmFtZV07XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYXNzaWduKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzID0ge30pIHtcbiAgY29uc3QgZGVmYXVsdFByb3BlcnR5TmFtZXMgPSBPYmplY3Qua2V5cyhkZWZhdWx0UHJvcGVydGllcyk7XG5cbiAgZGVmYXVsdFByb3BlcnR5TmFtZXMuZm9yRWFjaChmdW5jdGlvbihkZWZhdWx0UHJvcGVydHlOYW1lKSB7XG4gICAgaWYgKCFwcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KGRlZmF1bHRQcm9wZXJ0eU5hbWUpKSB7XG4gICAgICBjb25zdCBkZWZhdWx0UHJvcGVydHlWYWx1ZSA9IGRlZmF1bHRQcm9wZXJ0aWVzW2RlZmF1bHRQcm9wZXJ0eU5hbWVdO1xuXG4gICAgICBwcm9wZXJ0aWVzW2RlZmF1bHRQcm9wZXJ0eU5hbWVdID0gZGVmYXVsdFByb3BlcnR5VmFsdWU7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkSGFuZGxlcihlbGVtZW50LCBuYW1lLCB2YWx1ZSkge1xuICBjb25zdCBldmVudFR5cGUgPSBuYW1lLnN1YnN0cigyKS50b0xvd2VyQ2FzZSgpLCAvLy9cbiAgICAgICAgaGFuZGxlciA9IHZhbHVlOyAgLy8vXG5cbiAgZWxlbWVudC5vbihldmVudFR5cGUsIGhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRyaWJ1dGUoZWxlbWVudCwgbmFtZSwgdmFsdWUpIHtcbiAgaWYgKG5hbWUgPT09ICdjbGFzc05hbWUnKSB7XG4gICAgbmFtZSA9ICdjbGFzcyc7XG4gIH1cblxuICBpZiAobmFtZSA9PT0gJ2h0bWxGb3InKSB7XG4gICAgbmFtZSA9ICdmb3InO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuXG4gICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGVsZW1lbnQuZG9tRWxlbWVudFtuYW1lXVtrZXldID0gdmFsdWVba2V5XTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB2YWx1ZSA9IG5hbWU7IC8vL1xuXG4gICAgICBlbGVtZW50LmFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQuYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVQYXJlbnRDb250ZXh0KGVsZW1lbnQsIHBhcmVudEVsZW1lbnQpIHtcbiAgY29uc3QgcGFyZW50Q29udGV4dCA9IGVsZW1lbnQucGFyZW50Q29udGV4dCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucGFyZW50Q29udGV4dCgpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNvbnRleHQ7XG5cbiAgaWYgKHBhcmVudENvbnRleHQgIT09IHVuZGVmaW5lZCkge1xuICAgIGlmICghcGFyZW50RWxlbWVudC5oYXNPd25Qcm9wZXJ0eSgnY29udGV4dCcpKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0ge307XG5cbiAgICAgIE9iamVjdC5hc3NpZ24ocGFyZW50RWxlbWVudCwge1xuICAgICAgICBjb250ZXh0OiBjb250ZXh0XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBwYXJlbnRFbGVtZW50LmNvbnRleHQgPSBPYmplY3QuYXNzaWduKHBhcmVudEVsZW1lbnQuY29udGV4dCwgcGFyZW50Q29udGV4dCk7XG4gIH1cblxuICBjb25zdCBwcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZWxlbWVudCksXG4gICAgICAgIHByb3RvdHlwZUNvbnN0cnVjdG9yID0gcHJvdG90eXBlLmNvbnN0cnVjdG9yLCAvLy9cbiAgICAgICAgcHJvdG90eXBlQ29uc3RydWN0b3JOYW1lID0gcHJvdG90eXBlQ29uc3RydWN0b3IubmFtZTsgLy8vXG5cbiAgaWYgKHByb3RvdHlwZUNvbnN0cnVjdG9yTmFtZSA9PT0gJ0VsZW1lbnQnKSB7XG4gICAgZGVsZXRlIGVsZW1lbnQuY29udGV4dDtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0hhbmRsZXJOYW1lKG5hbWUpIHtcbiAgcmV0dXJuIG5hbWUubWF0Y2goL15vbi8pO1xufVxuXG5mdW5jdGlvbiBpc0F0dHJpYnV0ZU5hbWUobmFtZSkge1xuICByZXR1cm4gYXR0cmlidXRlTmFtZXMuaW5jbHVkZXMobmFtZSk7XG59XG5cbmNvbnN0IGF0dHJpYnV0ZU5hbWVzID0gW1xuICAnYWNjZXB0JywgJ2FjY2VwdENoYXJzZXQnLCAnYWNjZXNzS2V5JywgJ2FjdGlvbicsICdhbGxvd0Z1bGxTY3JlZW4nLCAnYWxsb3dUcmFuc3BhcmVuY3knLCAnYWx0JywgJ2FzeW5jJywgJ2F1dG9Db21wbGV0ZScsICdhdXRvRm9jdXMnLCAnYXV0b1BsYXknLFxuICAnY2FwdHVyZScsICdjZWxsUGFkZGluZycsICdjZWxsU3BhY2luZycsICdjaGFsbGVuZ2UnLCAnY2hhclNldCcsICdjaGVja2VkJywgJ2NpdGUnLCAnY2xhc3NJRCcsICdjbGFzc05hbWUnLCAnY29sU3BhbicsICdjb2xzJywgJ2NvbnRlbnQnLCAnY29udGVudEVkaXRhYmxlJywgJ2NvbnRleHRNZW51JywgJ2NvbnRyb2xzJywgJ2Nvb3JkcycsICdjcm9zc09yaWdpbicsXG4gICdkYXRhJywgJ2RhdGVUaW1lJywgJ2RlZmF1bHQnLCAnZGVmZXInLCAnZGlyJywgJ2Rpc2FibGVkJywgJ2Rvd25sb2FkJywgJ2RyYWdnYWJsZScsXG4gICdlbmNUeXBlJyxcbiAgJ2Zvcm0nLCAnZm9ybUFjdGlvbicsICdmb3JtRW5jVHlwZScsICdmb3JtTWV0aG9kJywgJ2Zvcm1Ob1ZhbGlkYXRlJywgJ2Zvcm1UYXJnZXQnLCAnZnJhbWVCb3JkZXInLFxuICAnaGVhZGVycycsICdoZWlnaHQnLCAnaGlkZGVuJywgJ2hpZ2gnLCAnaHJlZicsICdocmVmTGFuZycsICdodG1sRm9yJywgJ2h0dHBFcXVpdicsXG4gICdpY29uJywgJ2lkJywgJ2lucHV0TW9kZScsICdpbnRlZ3JpdHknLCAnaXMnLFxuICAna2V5UGFyYW1zJywgJ2tleVR5cGUnLCAna2luZCcsXG4gICdsYWJlbCcsICdsYW5nJywgJ2xpc3QnLCAnbG9vcCcsICdsb3cnLFxuICAnbWFuaWZlc3QnLCAnbWFyZ2luSGVpZ2h0JywgJ21hcmdpbldpZHRoJywgJ21heCcsICdtYXhMZW5ndGgnLCAnbWVkaWEnLCAnbWVkaWFHcm91cCcsICdtZXRob2QnLCAnbWluJywgJ21pbkxlbmd0aCcsICdtdWx0aXBsZScsICdtdXRlZCcsXG4gICduYW1lJywgJ25vVmFsaWRhdGUnLCAnbm9uY2UnLFxuICAnb3BlbicsICdvcHRpbXVtJyxcbiAgJ3BhdHRlcm4nLCAncGxhY2Vob2xkZXInLCAncG9zdGVyJywgJ3ByZWxvYWQnLCAncHJvZmlsZScsXG4gICdyYWRpb0dyb3VwJywgJ3JlYWRPbmx5JywgJ3JlbCcsICdyZXF1aXJlZCcsICdyZXZlcnNlZCcsICdyb2xlJywgJ3Jvd1NwYW4nLCAncm93cycsXG4gICdzYW5kYm94JywgJ3Njb3BlJywgJ3Njb3BlZCcsICdzY3JvbGxpbmcnLCAnc2VhbWxlc3MnLCAnc2VsZWN0ZWQnLCAnc2hhcGUnLCAnc2l6ZScsICdzaXplcycsICdzcGFuJywgJ3NwZWxsQ2hlY2snLCAnc3JjJywgJ3NyY0RvYycsICdzcmNMYW5nJywgJ3NyY1NldCcsICdzdGFydCcsICdzdGVwJywgJ3N0eWxlJywgJ3N1bW1hcnknLFxuICAndGFiSW5kZXgnLCAndGFyZ2V0JywgJ3RpdGxlJywgJ3R5cGUnLFxuICAndXNlTWFwJyxcbiAgJ3ZhbHVlJyxcbiAgJ3dpZHRoJyxcbiAgJ3dtb2RlJyxcbiAgJ3dyYXAnXG5dO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBvbktleVVwKGhhbmRsZXIsIGludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlSGFuZGxlcikge1xuICB0aGlzLm9uKCdrZXl1cCcsIGhhbmRsZXIsIGludGVybWVkaWF0ZUhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvbktleURvd24oaGFuZGxlciwgaW50ZXJtZWRpYXRlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVIYW5kbGVyKSB7XG4gIHRoaXMub24oJ2tleWRvd24nLCBoYW5kbGVyLCBpbnRlcm1lZGlhdGVIYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gb2ZmS2V5VXAoaGFuZGxlcikgeyB0aGlzLm9mZigna2V5dXAnLCBoYW5kbGVyKTsgfVxuXG5mdW5jdGlvbiBvZmZLZXlEb3duKGhhbmRsZXIpIHsgdGhpcy5vZmYoJ2tleWRvd24nLCBoYW5kbGVyKTsgfVxuXG5jb25zdCBrZXlNaXhpbiA9IHtcbiAgb25LZXlVcDogb25LZXlVcCxcbiAgb25LZXlEb3duOiBvbktleURvd24sXG4gIG9mZktleVVwOiBvZmZLZXlVcCxcbiAgb2ZmS2V5RG93bjogb2ZmS2V5RG93blxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBrZXlNaXhpbjtcblxuZnVuY3Rpb24gZGVmYXVsdEludGVybWVkaWF0ZUhhbmRsZXIoaGFuZGxlciwgZXZlbnQsIHRhcmdldEVsZW1lbnQpIHtcbiAgY29uc3Qga2V5Q29kZSA9IGV2ZW50LmtleUNvZGUsXG4gICAgICAgIHByZXZlbnREZWZhdWx0ID0gaGFuZGxlcihrZXlDb2RlLCB0YXJnZXRFbGVtZW50KTtcblxuICByZXR1cm4gcHJldmVudERlZmF1bHQ7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIG9uTW91c2VVcChoYW5kbGVyLCBpbnRlcm1lZGlhdGVIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUhhbmRsZXIpIHtcbiAgdGhpcy5vbignbW91c2V1cCcsIGhhbmRsZXIsIGludGVybWVkaWF0ZUhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvbk1vdXNlRG93bihoYW5kbGVyLCBpbnRlcm1lZGlhdGVIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUhhbmRsZXIpIHtcbiAgdGhpcy5vbignbW91c2Vkb3duJywgaGFuZGxlciwgaW50ZXJtZWRpYXRlSGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIG9uTW91c2VPdmVyKGhhbmRsZXIsIGludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlSGFuZGxlcikge1xuICB0aGlzLm9uKCdtb3VzZW92ZXInLCBoYW5kbGVyLCBpbnRlcm1lZGlhdGVIYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gb25Nb3VzZU91dChoYW5kbGVyLCBpbnRlcm1lZGlhdGVIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUhhbmRsZXIpIHtcbiAgdGhpcy5vbignbW91c2VvdXQnLCBoYW5kbGVyLCBpbnRlcm1lZGlhdGVIYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gb25Nb3VzZU1vdmUoaGFuZGxlciwgaW50ZXJtZWRpYXRlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVIYW5kbGVyKSB7XG4gIHRoaXMub24oJ21vdXNlbW92ZScsIGhhbmRsZXIsIGludGVybWVkaWF0ZUhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvZmZNb3VzZVVwKGhhbmRsZXIpIHsgdGhpcy5vZmYoJ21vdXNldXAnLCBoYW5kbGVyKTsgfVxuXG5mdW5jdGlvbiBvZmZNb3VzZURvd24oaGFuZGxlcikgeyB0aGlzLm9mZignbW91c2Vkb3duJywgaGFuZGxlcik7IH1cblxuZnVuY3Rpb24gb2ZmTW91c2VPdmVyKGhhbmRsZXIpIHsgdGhpcy5vZmYoJ21vdXNlb3ZlcicsIGhhbmRsZXIpOyB9XG5cbmZ1bmN0aW9uIG9mZk1vdXNlT3V0KGhhbmRsZXIpIHsgdGhpcy5vZmYoJ21vdXNlb3V0JywgaGFuZGxlcik7IH1cblxuZnVuY3Rpb24gb2ZmTW91c2VNb3ZlKGhhbmRsZXIpIHsgdGhpcy5vZmYoJ21vdXNlbW92ZScsIGhhbmRsZXIpOyB9XG5cbmNvbnN0IG1vdXNlTWl4aW4gPSB7XG4gIG9uTW91c2VVcDogb25Nb3VzZVVwLFxuICBvbk1vdXNlRG93bjogb25Nb3VzZURvd24sXG4gIG9uTW91c2VPdmVyOiBvbk1vdXNlT3ZlcixcbiAgb25Nb3VzZU91dDogb25Nb3VzZU91dCxcbiAgb25Nb3VzZU1vdmU6IG9uTW91c2VNb3ZlLFxuICBvZmZNb3VzZVVwOiBvZmZNb3VzZVVwLFxuICBvZmZNb3VzZURvd246IG9mZk1vdXNlRG93bixcbiAgb2ZmTW91c2VPdmVyOiBvZmZNb3VzZU92ZXIsXG4gIG9mZk1vdXNlT3V0OiBvZmZNb3VzZU91dCxcbiAgb2ZmTW91c2VNb3ZlOiBvZmZNb3VzZU1vdmVcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbW91c2VNaXhpbjtcblxuZnVuY3Rpb24gZGVmYXVsdEludGVybWVkaWF0ZUhhbmRsZXIoaGFuZGxlciwgZXZlbnQsIHRhcmdldEVsZW1lbnQpIHtcbiAgY29uc3QgbW91c2VUb3AgPSBldmVudC5wYWdlWSwgIC8vL1xuICAgICAgICBtb3VzZUxlZnQgPSBldmVudC5wYWdlWCwgLy8vXG4gICAgICAgIG1vdXNlQnV0dG9uID0gZXZlbnQuYnV0dG9uLCAvLy9cbiAgICAgICAgcHJldmVudERlZmF1bHQgPSBoYW5kbGVyKG1vdXNlVG9wLCBtb3VzZUxlZnQsIG1vdXNlQnV0dG9uLCB0YXJnZXRFbGVtZW50KTtcblxuICByZXR1cm4gcHJldmVudERlZmF1bHQ7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIG9uUmVzaXplKGhhbmRsZXIpIHtcbiAgY29uc3QgZXZlbnRUeXBlID0gJ3Jlc2l6ZScsXG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXIgPSB0aGlzLm9uKGV2ZW50VHlwZSwgaGFuZGxlcik7XG5cbiAgaWYgKGFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICBhcHBlbmRSZXNpemVPYmplY3QodGhpcyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gb2ZmUmVzaXplKGhhbmRsZXIpIHtcbiAgY29uc3QgZXZlbnRUeXBlID0gJ3Jlc2l6ZScsXG4gICAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIgPSB0aGlzLm9mZihldmVudFR5cGUsIGhhbmRsZXIpO1xuXG4gIGlmIChyZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgcmVtb3ZlUmVzaXplT2JqZWN0KHRoaXMpO1xuICB9XG59XG5cbmNvbnN0IHJlc2l6ZU1peGluID0ge1xuICBvblJlc2l6ZTogb25SZXNpemUsXG4gIG9mZlJlc2l6ZTogb2ZmUmVzaXplXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlc2l6ZU1peGluO1xuXG5mdW5jdGlvbiBhcHBlbmRSZXNpemVPYmplY3QoZWxlbWVudCkge1xuICBjb25zdCByZXNpemVPYmplY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvYmplY3QnKSxcbiAgICAgICAgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudCxcbiAgICAgICAgc3R5bGUgPSBgZGlzcGxheTogYmxvY2s7IFxuICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgICAgICAgICAgICAgICB0b3A6IDA7IFxuICAgICAgICAgICAgICAgICBsZWZ0OiAwOyBcbiAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlOyBcbiAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7IFxuICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuOyBcbiAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IFxuICAgICAgICAgICAgICAgICB6LWluZGV4OiAtMTtgO1xuXG4gIHJlc2l6ZU9iamVjdC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgc3R5bGUpO1xuICByZXNpemVPYmplY3QuZGF0YSA9ICdhYm91dDpibGFuayc7XG4gIHJlc2l6ZU9iamVjdC50eXBlID0gJ3RleHQvaHRtbCc7XG5cbiAgZWxlbWVudC5fX3Jlc2l6ZU9iamVjdF9fID0gcmVzaXplT2JqZWN0O1xuXG4gIHJlc2l6ZU9iamVjdC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICByZXNpemVPYmplY3RMb2FkSGFuZGxlcihlbGVtZW50KVxuICB9O1xuXG4gIGRvbUVsZW1lbnQuYXBwZW5kQ2hpbGQocmVzaXplT2JqZWN0KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUmVzaXplT2JqZWN0KGVsZW1lbnQpIHtcbiAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudCxcbiAgICAgICAgcmVzaXplT2JqZWN0ID0gZWxlbWVudC5fX3Jlc2l6ZU9iamVjdF9fLFxuICAgICAgICBvYmplY3RXaW5kb3cgPSByZXNpemVPYmplY3QuY29udGVudERvY3VtZW50LmRlZmF1bHRWaWV3OyAgLy8vXG5cbiAgb2JqZWN0V2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUxpc3RlbmVyKTtcblxuICBkb21FbGVtZW50LnJlbW92ZUNoaWxkKHJlc2l6ZU9iamVjdCk7XG59XG5cbmZ1bmN0aW9uIHJlc2l6ZU9iamVjdExvYWRIYW5kbGVyKGVsZW1lbnQpIHtcbiAgY29uc3QgcmVzaXplT2JqZWN0ID0gZWxlbWVudC5fX3Jlc2l6ZU9iamVjdF9fLFxuICAgICAgICByZXNpemVPYmplY3RXaW5kb3cgPSByZXNpemVPYmplY3QuY29udGVudERvY3VtZW50LmRlZmF1bHRWaWV3OyAgLy8vXG5cbiAgcmVzaXplT2JqZWN0V2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xuICAgIGV2ZW50TGlzdGVuZXIoZWxlbWVudCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBldmVudExpc3RlbmVyKGVsZW1lbnQpIHtcbiAgY29uc3Qgd2lkdGggPSBlbGVtZW50LmdldFdpZHRoKCksXG4gICAgICAgIGhlaWdodCA9IGVsZW1lbnQuZ2V0SGVpZ2h0KCksXG4gICAgICAgIHRhcmdldEVsZW1lbnQgPSBlbGVtZW50LCAvLy9cbiAgICAgICAgaGFuZGxlcnMgPSBlbGVtZW50LmhhbmRsZXJzTWFwWydyZXNpemUnXTtcblxuICBoYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uKGhhbmRsZXIpe1xuICAgIGhhbmRsZXIod2lkdGgsIGhlaWdodCwgdGFyZ2V0RWxlbWVudCk7XG4gIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBvblNjcm9sbChoYW5kbGVyLCBpbnRlcm1lZGlhdGVIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUhhbmRsZXIpIHtcbiAgdGhpcy5vbignc2Nyb2xsJywgaGFuZGxlciwgaW50ZXJtZWRpYXRlSGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIG9mZlNjcm9sbChoYW5kbGVyKSB7IHRoaXMub2ZmKCdzY3JvbGwnLCBoYW5kbGVyKTsgfVxuXG5mdW5jdGlvbiBnZXRTY3JvbGxUb3AoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuc2Nyb2xsVG9wOyB9XG5cbmZ1bmN0aW9uIGdldFNjcm9sbExlZnQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuc2Nyb2xsTGVmdDsgfVxuXG5mdW5jdGlvbiBzZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKSB7IHRoaXMuZG9tRWxlbWVudC5zY3JvbGxUb3AgPSBzY3JvbGxUb3A7IH1cblxuZnVuY3Rpb24gc2V0U2Nyb2xsTGVmdChzY3JvbGxMZWZ0KSB7IHRoaXMuZG9tRWxlbWVudC5zY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdDsgfVxuXG5jb25zdCBzY3JvbGxNaXhpbiA9IHtcbiAgb25TY3JvbGw6IG9uU2Nyb2xsLFxuICBvZmZTY3JvbGw6IG9mZlNjcm9sbCxcbiAgZ2V0U2Nyb2xsVG9wOiBnZXRTY3JvbGxUb3AsXG4gIGdldFNjcm9sbExlZnQ6IGdldFNjcm9sbExlZnQsXG4gIHNldFNjcm9sbFRvcDogc2V0U2Nyb2xsVG9wLFxuICBzZXRTY3JvbGxMZWZ0OiBzZXRTY3JvbGxMZWZ0XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNjcm9sbE1peGluO1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlSGFuZGxlcihoYW5kbGVyLCBldmVudCwgdGFyZ2V0RWxlbWVudCkge1xuICBjb25zdCBzY3JvbGxUb3AgPSB0YXJnZXRFbGVtZW50LmdldFNjcm9sbFRvcCgpLFxuICAgICAgICBzY3JvbGxMZWZ0ID0gdGFyZ2V0RWxlbWVudC5nZXRTY3JvbGxMZWZ0KCksXG4gICAgICAgIHByZXZlbnREZWZhdWx0ID0gaGFuZGxlcihzY3JvbGxUb3AsIHNjcm9sbExlZnQsIHRhcmdldEVsZW1lbnQpO1xuXG4gIHJldHVybiBwcmV2ZW50RGVmYXVsdDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpLFxuICAgICAgVGV4dEVsZW1lbnQgPSByZXF1aXJlKCcuL3RleHRFbGVtZW50Jyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZmlyc3RBcmd1bWVudCwgcHJvcGVydGllcywgLi4uY2hpbGRBcmd1bWVudHMpIHtcbiAgbGV0IGVsZW1lbnQgPSBudWxsO1xuXG4gIGlmIChmaXJzdEFyZ3VtZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gY2hpbGRFbGVtZW50c0Zyb21DaGlsZEFyZ3VtZW50cyhjaGlsZEFyZ3VtZW50cyk7XG5cbiAgICBwcm9wZXJ0aWVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjaGlsZEVsZW1lbnRzOiBjaGlsZEVsZW1lbnRzXG4gICAgfSwgcHJvcGVydGllcyk7XG5cbiAgICBpZiAoZmFsc2UpIHtcblxuICAgIH0gZWxzZSBpZiAoaXNTdWJjbGFzc09mKGZpcnN0QXJndW1lbnQsIEVsZW1lbnQpKSB7XG4gICAgICBjb25zdCBDbGFzcyA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgICAgZWxlbWVudCA9IENsYXNzLmZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnRGdW5jdGlvbiA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgICAgZWxlbWVudCA9IGVsZW1lbnRGdW5jdGlvbihwcm9wZXJ0aWVzKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc3QgdGFnTmFtZSA9IGZpcnN0QXJndW1lbnQsICAvLy9cbiAgICAgICAgICAgIGh0bWwgPSBgPCR7dGFnTmFtZX0gLz5gO1xuXG4gICAgICBlbGVtZW50ID0gRWxlbWVudC5mcm9tSFRNTChFbGVtZW50LCBodG1sKTtcblxuICAgICAgZWxlbWVudC5hcHBseVByb3BlcnRpZXMocHJvcGVydGllcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmNvbnN0IFJlYWN0ID0ge1xuICBjcmVhdGVFbGVtZW50OiBjcmVhdGVFbGVtZW50XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5mdW5jdGlvbiBjaGlsZEVsZW1lbnRzRnJvbUNoaWxkQXJndW1lbnRzKGNoaWxkQXJndW1lbnRzKSB7XG4gIGNoaWxkQXJndW1lbnRzID0gY2hpbGRBcmd1bWVudHMucmVkdWNlKGZ1bmN0aW9uKGNoaWxkQXJndW1lbnRzLCBjaGlsZEFyZ3VtZW50KSB7XG4gICAgY2hpbGRBcmd1bWVudHMgPSBjaGlsZEFyZ3VtZW50cy5jb25jYXQoY2hpbGRBcmd1bWVudCk7XG5cbiAgICByZXR1cm4gY2hpbGRBcmd1bWVudHM7XG4gIH0sIFtdKTtcblxuICBjb25zdCBjaGlsZEVsZW1lbnRzID0gY2hpbGRBcmd1bWVudHMubWFwKGZ1bmN0aW9uKGNoaWxkQXJndW1lbnQpIHtcbiAgICBsZXQgY2hpbGRFbGVtZW50O1xuICAgIFxuICAgIGlmICh0eXBlb2YgY2hpbGRBcmd1bWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnN0IHRleHQgPSBjaGlsZEFyZ3VtZW50LCAvLy9cbiAgICAgICAgICAgIHRleHRFbGVtZW50ID0gbmV3IFRleHRFbGVtZW50KHRleHQpO1xuXG4gICAgICBjaGlsZEVsZW1lbnQgPSB0ZXh0RWxlbWVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hpbGRFbGVtZW50ID0gY2hpbGRBcmd1bWVudDsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZEVsZW1lbnQ7XG4gIH0pO1xuXG4gIHJldHVybiBjaGlsZEVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKSB7XG4gIGxldCB0eXBlT2YgPSBmYWxzZTtcblxuICBpZiAoYXJndW1lbnQubmFtZSA9PT0gQ2xhc3MubmFtZSkgeyAvLy9cbiAgICB0eXBlT2YgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGFyZ3VtZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGFyZ3VtZW50KTsgLy8vXG5cbiAgICBpZiAoYXJndW1lbnQpIHtcbiAgICAgIHR5cGVPZiA9IGlzU3ViY2xhc3NPZihhcmd1bWVudCwgQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0eXBlT2Y7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IE9mZnNldCA9IHJlcXVpcmUoJy4vbWlzYy9vZmZzZXQnKSxcbiAgICAgIEJvdW5kcyA9IHJlcXVpcmUoJy4vbWlzYy9ib3VuZHMnKTtcblxuY2xhc3MgVGV4dEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0ZXh0KSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCk7IC8vL1xuXG4gICAgdGhpcy5kb21FbGVtZW50Ll9fZWxlbWVudF9fID0gdGhpcztcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gVGV4dEVsZW1lbnQuY2xvbmUodGhpcyk7IH1cblxuICBnZXRUZXh0KCkge1xuICAgIGNvbnN0IG5vZGVWYWx1ZSA9IHRoaXMuZG9tRWxlbWVudC5ub2RlVmFsdWUsXG4gICAgICAgICAgdGV4dCA9IG5vZGVWYWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuXG4gIHNldFRleHQodGV4dCkge1xuICAgIGNvbnN0IG5vZGVWYWx1ZSA9IHRleHQ7IC8vL1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lm5vZGVWYWx1ZSA9IG5vZGVWYWx1ZTtcbiAgfVxuXG4gIGdldE9mZnNldCgpIHtcbiAgICBjb25zdCB0b3AgPSB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0VG9wLCAgLy8vXG4gICAgICAgICAgbGVmdCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRMZWZ0LCAgLy8vXG4gICAgICAgICAgb2Zmc2V0ID0gbmV3IE9mZnNldCh0b3AsIGxlZnQpO1xuXG4gICAgcmV0dXJuIG9mZnNldDtcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICBjb25zdCBib3VuZGluZ0NsaWVudFJlY3QgPSB0aGlzLmRvbUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgYm91bmRzID0gQm91bmRzLmZyb21Cb3VuZGluZ0NsaWVudFJlY3QoYm91bmRpbmdDbGllbnRSZWN0KTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH1cblxuICBnZXRXaWR0aCgpIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuZG9tRWxlbWVudC5jbGllbnRXaWR0aDtcblxuICAgIHJldHVybiB3aWR0aDtcbiAgfVxuXG4gIGdldEhlaWdodCgpIHtcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmRvbUVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXG4gICAgcmV0dXJuIGhlaWdodDtcbiAgfVxuXG4gIHByZXBlbmRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQucHJlcGVuZCh0aGlzKTsgfVxuXG4gIGFwcGVuZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5hcHBlbmQodGhpcyk7IH1cblxuICBhZGRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQuYWRkKHRoaXMpOyB9XG5cbiAgcmVtb3ZlRnJvbShwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQucmVtb3ZlKHRoaXMpOyB9XG5cbiAgaW5zZXJ0QmVmb3JlKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSxcbiAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KTtcbiAgfVxuXG4gIGluc2VydEFmdGVyKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSxcbiAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50Lm5leHRTaWJsaW5nKTsgIC8vL1xuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmUoKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHRFbGVtZW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBldmVudE1peGluID0gcmVxdWlyZSgnLi9taXhpbi9ldmVudCcpLFxuICAgICAgY2xpY2tNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vY2xpY2snKSxcbiAgICAgIG1vdXNlTWl4aW4gPSByZXF1aXJlKCcuL21peGluL21vdXNlJyksXG4gICAgICBrZXlNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4va2V5Jyk7XG5cbmNsYXNzIFdpbmRvdyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IHdpbmRvdztcbiAgfVxuXG4gIGFzc2lnbiguLi5zb3VyY2VzKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5kb21FbGVtZW50OyAvLy9cblxuICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCAuLi5zb3VyY2VzKTtcbiAgfVxuICBcbiAgZ2V0V2lkdGgoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaW5uZXJXaWR0aDsgfSAvLy9cbiAgXG4gIGdldEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5pbm5lckhlaWdodDsgfSAvLy9cblxuICBnZXRTY3JvbGxUb3AoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQucGFnZVlPZmZzZXQ7IH0gIC8vL1xuXG4gIGdldFNjcm9sbExlZnQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQucGFnZVhPZmZzZXQ7IH0gLy8vXG5cbiAgb25SZXNpemUoaGFuZGxlcikge1xuICAgIGlmIChoYW5kbGVyLmludGVybWVkaWF0ZUhhbmRsZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFuZGxlci5pbnRlcm1lZGlhdGVIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZVJlc2l6ZUhhbmRsZXI7XG4gICAgfVxuXG4gICAgY29uc3QgZXZlbnRUeXBlID0gJ3Jlc2l6ZSc7XG4gICAgXG4gICAgdGhpcy5vbihldmVudFR5cGUsIGhhbmRsZXIpO1xuICB9XG5cbiAgb2ZmUmVzaXplKGhhbmRsZXIpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSAncmVzaXplJztcblxuICAgIHRoaXMub2ZmKGV2ZW50VHlwZSwgaGFuZGxlcik7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCBldmVudE1peGluKTtcbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwgY2xpY2tNaXhpbik7XG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIG1vdXNlTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCBrZXlNaXhpbik7XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFdpbmRvdygpOyAgLy8vXG5cbmZ1bmN0aW9uIGRlZmF1bHRJbnRlcm1lZGlhdGVSZXNpemVIYW5kbGVyKGhhbmRsZXIsIGV2ZW50LCB0YXJnZXRFbGVtZW50KSB7XG4gIGNvbnN0IHdpbmRvdyA9IHRhcmdldEVsZW1lbnQsIC8vL1xuICAgICAgICB3aWR0aCA9IHdpbmRvdy5nZXRXaWR0aCgpLFxuICAgICAgICBoZWlnaHQgPSB0YXJnZXRFbGVtZW50LmdldEhlaWdodCgpLFxuICAgICAgICBwcmV2ZW50RGVmYXVsdCA9IGhhbmRsZXIod2lkdGgsIGhlaWdodCwgdGFyZ2V0RWxlbWVudCk7XG5cbiAgcmV0dXJuIHByZXZlbnREZWZhdWx0O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbGV4ZXJzID0ge1xuICAnTGluZSc6IHJlcXVpcmUoJy4vbGliL2NvbW1vbi9saW5lJyksXG4gICdCTkZMZXhlcic6IHJlcXVpcmUoJy4vbGliL2JuZi9sZXhlcicpLFxuICAnQmFzaWNMZXhlcic6IHJlcXVpcmUoJy4vbGliL2Jhc2ljL2xleGVyJyksXG4gICdGbG9yZW5jZUxleGVyJzogcmVxdWlyZSgnLi9saWIvZmxvcmVuY2UvbGV4ZXInKSxcbiAgJ1ByaW1pdGl2ZUxleGVyJzogcmVxdWlyZSgnLi9saWIvcHJpbWl0aXZlL2xleGVyJyksXG4gICdTaWduaWZpY2FudFRva2VuJzogcmVxdWlyZSgnLi9saWIvY29tbW9uL3Rva2VuL3NpZ25pZmljYW50JyksXG4gICdTdHJpbmdUb2tlbic6IHJlcXVpcmUoJy4vbGliL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9zdHJpbmcnKSxcbiAgJ0VuZE9mTGluZVRva2VuJzogcmVxdWlyZSgnLi9saWIvY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L2VuZE9mTGluZScpLFxuICAnV2hpdGVzcGFjZVRva2VuJzogcmVxdWlyZSgnLi9saWIvY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L3doaXRlc3BhY2UnKSxcbiAgJ05vblNpZ25pZmljYW50VG9rZW4nOiByZXF1aXJlKCcuL2xpYi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQnKSxcbiAgJ3NwZWNpYWxTeW1ib2xzJzogcmVxdWlyZSgnLi9saWIvc3BlY2lhbFN5bWJvbHMnKVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBsZXhlcnM7XG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBMaW5lID0gcmVxdWlyZSgnLi9saW5lJyksXHJcbiAgICAgIFJ1bGVzID0gcmVxdWlyZSgnLi4vY29tbW9uL3J1bGVzJyksXHJcbiAgICAgIENvbW1vbkxleGVyID0gcmVxdWlyZSgnLi4vY29tbW9uL2xleGVyJyksXHJcbiAgICAgIFdoaXRlc3BhY2VUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC93aGl0ZXNwYWNlJyk7XHJcblxyXG5jbGFzcyBCYXNpY0xleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xyXG4gIHN0YXRpYyBzaWduaWZpY2FudFRva2VuVHlwZXMoKSB7XHJcbiAgICBjb25zdCBncmFtbWFyID0gQmFzaWNMZXhlci5ncmFtbWFyLFxyXG4gICAgICAgICAgZ3JhbW1hclNpZ25pZmljYW50VG9rZW5UeXBlcyA9IENvbW1vbkxleGVyLnNpZ25pZmljYW50VG9rZW5UeXBlc0Zyb21HcmFtbWFyKGdyYW1tYXIpLFxyXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVzID0gZ3JhbW1hclNpZ25pZmljYW50VG9rZW5UeXBlcy5jb25jYXQoW1xyXG4gICAgICAgICAgICBXaGl0ZXNwYWNlVG9rZW4udHlwZVxyXG4gICAgICAgICAgXSk7XHJcblxyXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW5UeXBlcztcclxuICB9XHJcblxyXG5cclxuICBzdGF0aWMgZnJvbUdyYW1tYXIoZ3JhbW1hcikge1xyXG4gICAgY29uc3QgcnVsZXMgPSBSdWxlcy5mcm9tR3JhbW1hcihncmFtbWFyKSxcclxuICAgICAgICAgIGJhc2ljTGV4ZXIgPSBuZXcgQmFzaWNMZXhlcihydWxlcywgTGluZSk7XHJcblxyXG4gICAgcmV0dXJuIGJhc2ljTGV4ZXI7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XHJcbiAgICBjb25zdCBncmFtbWFyID0gQmFzaWNMZXhlci5ncmFtbWFyLFxyXG4gICAgICAgICAgYmFzaWNMZXhlciA9IEJhc2ljTGV4ZXIuZnJvbUdyYW1tYXIoZ3JhbW1hcik7XHJcblxyXG4gICAgcmV0dXJuIGJhc2ljTGV4ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2ljTGV4ZXI7XHJcblxyXG5CYXNpY0xleGVyLmdyYW1tYXIgPSBbXHJcblxyXG4gIHsgXCJ0ZXJtaW5hbFwiICAgIDogXCJcXFxcK3xcXFxcLXxcXFxcKnxcXFxcL3xcXFxcKHxcXFxcKXxcXFxcZCtcIiB9XHJcblxyXG5dO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBDb21tb25MaW5lID0gcmVxdWlyZSgnLi4vY29tbW9uL2xpbmUnKSxcclxuICAgICAgQ29tbWVudFRva2VucyA9IHJlcXVpcmUoJy4vdG9rZW5zL2NvbW1lbnQnKSxcclxuICAgICAgU3RyaW5nVG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMvc3RyaW5nJyksXHJcbiAgICAgIFdoaXRlc3BhY2VUb2tlbnMgPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW5zL3doaXRlc3BhY2UnKTtcclxuXHJcbmNsYXNzIExpbmUgZXh0ZW5kcyBDb21tb25MaW5lIHtcclxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCwgY29udGV4dCwgcnVsZXMpIHsgcmV0dXJuIHN1cGVyLmZyb21Db250ZW50KExpbmUsIGNvbnRlbnQsIGNvbnRleHQsIHJ1bGVzLCBDb21tZW50VG9rZW5zLCBTdHJpbmdUb2tlbnMsIFdoaXRlc3BhY2VUb2tlbnMpOyB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTGluZTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgQ29tbWVudFRva2VucyB7XHJcbiAgc3RhdGljIHBhc3ModG9rZW5zT3JSZW1haW5pbmdDb250ZW50LCBsaW5lLCBjb250ZXh0KSB7XHJcbiAgICBjb25zdCBpbkNvbW1lbnQgPSBmYWxzZTsgIC8vL1xyXG5cclxuICAgIHJldHVybiBpbkNvbW1lbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1lbnRUb2tlbnM7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIFN0cmluZ1Rva2VucyB7XHJcbiAgc3RhdGljIHBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSkgeyBcclxuXHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFN0cmluZ1Rva2VucztcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgTGluZSA9IHJlcXVpcmUoJy4vbGluZScpLFxyXG4gICAgICBSdWxlcyA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ydWxlcycpLFxyXG4gICAgICBDb21tb25MZXhlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9sZXhlcicpLFxyXG4gICAgICBTdHJpbmdUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9zdHJpbmcnKSxcclxuICAgICAgV2hpdGVzcGFjZVRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L3doaXRlc3BhY2UnKTtcclxuXHJcbmNsYXNzIEJORkxleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xyXG4gIGxpbmVzRnJvbUdyYW1tYXIoZ3JhbW1hcikge1xyXG4gICAgY29uc3QgY29udGVudCA9IGdyYW1tYXIsICAvLy9cclxuICAgICAgICAgIGxpbmVzID0gc3VwZXIubGluZXNGcm9tQ29udGVudChjb250ZW50KTtcclxuXHJcbiAgICByZXR1cm4gbGluZXM7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc2lnbmlmaWNhbnRUb2tlblR5cGVzKCkge1xyXG4gICAgY29uc3QgZ3JhbW1hciA9IEJORkxleGVyLmdyYW1tYXIsXHJcbiAgICAgICAgICBncmFtbWFyU2lnbmlmaWNhbnRUb2tlblR5cGVzID0gQ29tbW9uTGV4ZXIuc2lnbmlmaWNhbnRUb2tlblR5cGVzRnJvbUdyYW1tYXIoZ3JhbW1hciksXHJcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZXMgPSBncmFtbWFyU2lnbmlmaWNhbnRUb2tlblR5cGVzLmNvbmNhdChbXHJcbiAgICAgICAgICAgIFN0cmluZ1Rva2VuLnR5cGUsXHJcbiAgICAgICAgICAgIFdoaXRlc3BhY2VUb2tlbi50eXBlXHJcbiAgICAgICAgICBdKTtcclxuXHJcbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlblR5cGVzO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21HcmFtbWFyKGdyYW1tYXIpIHtcclxuICAgIGNvbnN0IHJ1bGVzID0gUnVsZXMuZnJvbUdyYW1tYXIoZ3JhbW1hciksXHJcbiAgICAgICAgICBiYXNpY0xleGVyID0gbmV3IEJORkxleGVyKHJ1bGVzLCBMaW5lKTtcclxuXHJcbiAgICByZXR1cm4gYmFzaWNMZXhlcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcclxuICAgIGNvbnN0IGdyYW1tYXIgPSBCTkZMZXhlci5ncmFtbWFyLFxyXG4gICAgICAgICAgYmFzaWNMZXhlciA9IEJORkxleGVyLmZyb21HcmFtbWFyKGdyYW1tYXIpO1xyXG5cclxuICAgIHJldHVybiBiYXNpY0xleGVyO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBCTkZMZXhlcjtcclxuXHJcbkJORkxleGVyLmdyYW1tYXIgPSBbXHJcblxyXG4gIHsgXCJyZWd1bGFyRXhwcmVzc2lvblwiOiBcIlxcXFwvW14vXStcXFxcL1wiIH0sXHJcblxyXG4gIHsgXCJzcGVjaWFsXCI6IFwiOjo9fDxOT19XSElURVNQQUNFPnw8RU5EX09GX0xJTkU+fCF8JnxcXFxcfHxcXFxcKHxcXFxcKXxcXFxcP3xcXFxcKnxcXFxcK1wiIH0sXHJcblxyXG4gIHsgXCJ0eXBlXCI6IFwiXFxcXFtbXi9dK1xcXFxdXCIgfSxcclxuXHJcbiAgeyBcIm5hbWVcIjogXCJcXFxcdytcIiB9XHJcbiAgICBcclxuXVxyXG47XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IENvbW1vbkxpbmUgPSByZXF1aXJlKCcuLi9jb21tb24vbGluZScpLFxyXG4gICAgICBDb21tZW50VG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMvY29tbWVudCcpLFxyXG4gICAgICBTdHJpbmdUb2tlbnMgPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW5zL3N0cmluZycpLFxyXG4gICAgICBXaGl0ZXNwYWNlVG9rZW5zID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2Vucy93aGl0ZXNwYWNlJyksXHJcbiAgICAgIEVuZE9mTGluZVRva2VuID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L2VuZE9mTGluZScpO1xyXG5cclxuY2xhc3MgTGluZSBleHRlbmRzIENvbW1vbkxpbmUge1xyXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50LCBjb250ZXh0LCBydWxlcykgeyBcclxuICAgIGNvbnN0IGxpbmUgPSBzdXBlci5mcm9tQ29udGVudChMaW5lLCBjb250ZW50LCBjb250ZXh0LCBydWxlcywgQ29tbWVudFRva2VucywgU3RyaW5nVG9rZW5zLCBXaGl0ZXNwYWNlVG9rZW5zKSxcclxuICAgICAgICAgIGVuZE9mTGluZVRva2VuID0gRW5kT2ZMaW5lVG9rZW4uZnJvbUxpbmUobGluZSk7XHJcblxyXG4gICAgbGluZS5wdXNoVG9rZW4oZW5kT2ZMaW5lVG9rZW4pO1xyXG4gICAgXHJcbiAgICByZXR1cm4gbGluZTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTGluZTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgQ29tbWVudFRva2VucyB7XHJcbiAgc3RhdGljIHBhc3ModG9rZW5zT3JSZW1haW5pbmdDb250ZW50LCBsaW5lLCBjb250ZXh0KSB7XHJcbiAgICBjb25zdCBpbkNvbW1lbnQgPSBmYWxzZTsgIC8vL1xyXG5cclxuICAgIHJldHVybiBpbkNvbW1lbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1lbnRUb2tlbnM7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIENvbnRleHQge1xyXG4gIGNvbnN0cnVjdG9yKG1pbmltdW1MaW5lc0xlbmd0aCA9IEluZmluaXR5LCBwcmV2aW91c0xpbmVJbkNvbW1lbnQgPSBudWxsLCBmb2xsb3dpbmdMaW5lSW5Db21tZW50ID0gbnVsbCkge1xyXG4gICAgdGhpcy5taW5pbXVtTGluZXNMZW5ndGggPSBtaW5pbXVtTGluZXNMZW5ndGg7XHJcbiAgICB0aGlzLnByZXZpb3VzTGluZUluQ29tbWVudCA9IHByZXZpb3VzTGluZUluQ29tbWVudDtcclxuICAgIHRoaXMuZm9sbG93aW5nTGluZUluQ29tbWVudCA9IGZvbGxvd2luZ0xpbmVJbkNvbW1lbnQ7XHJcbiAgfVxyXG5cclxuICBnZXRNaW5pbXVtTGluZXNMZW5ndGgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5taW5pbXVtTGluZXNMZW5ndGg7XHJcbiAgfVxyXG5cclxuICBpc1ByZXZpb3VzTGluZUluQ29tbWVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLnByZXZpb3VzTGluZUluQ29tbWVudDtcclxuICB9XHJcblxyXG4gIGlzRm9sbG93aW5nTGluZUluQ29tbWVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLmZvbGxvd2luZ0xpbmVJbkNvbW1lbnQ7XHJcbiAgfVxyXG5cclxuICBzZXRQcmV2aW91c0xpbmVJbkNvbW1lbnQocHJldmlvdXNMaW5lSW5Db21tZW50KSB7XHJcbiAgICB0aGlzLnByZXZpb3VzTGluZUluQ29tbWVudCA9IHByZXZpb3VzTGluZUluQ29tbWVudDtcclxuICB9XHJcblxyXG4gIHNob3VsZFRlcm1pbmF0ZShsZW5ndGgpIHtcclxuICAgIGxldCB0ZXJtaW5hdGUgPSBmYWxzZTtcclxuXHJcbiAgICBpZiAobGVuZ3RoID49IHRoaXMubWluaW11bUxpbmVzTGVuZ3RoKSB7XHJcbiAgICAgIGlmICh0aGlzLmZvbGxvd2luZ0xpbmVJbkNvbW1lbnQgPT09IG51bGwpIHtcclxuICAgICAgICB0ZXJtaW5hdGUgPSB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5wcmV2aW91c0xpbmVJbkNvbW1lbnQgPT09IHRoaXMuZm9sbG93aW5nTGluZUluQ29tbWVudCkge1xyXG4gICAgICAgIHRlcm1pbmF0ZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGVybWluYXRlO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb250ZXh0O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBMaW5lID0gcmVxdWlyZSgnLi9saW5lJyksXHJcbiAgICAgIFJ1bGVzID0gcmVxdWlyZSgnLi9ydWxlcycpLFxyXG4gICAgICBDb250ZXh0ID0gcmVxdWlyZSgnLi9jb250ZXh0Jyk7XHJcblxyXG5jbGFzcyBDb21tb25MZXhlciB7XHJcbiAgY29uc3RydWN0b3IocnVsZXMsIExpbmUpIHtcclxuICAgIHRoaXMucnVsZXMgPSBydWxlcztcclxuICAgIHRoaXMuTGluZSA9IExpbmU7XHJcbiAgfVxyXG5cclxuICBsaW5lc0Zyb21Db250ZW50KGNvbnRlbnQsIGZpcnN0TGluZUluZGV4ID0gMCwgY29udGV4dCA9IG5ldyBDb250ZXh0KCkpIHtcclxuICAgIGNvbnN0IGNvbnRlbnRzID0gY29udGVudC5zcGxpdCgvXFxuLyksXHJcbiAgICAgICAgICBsaW5lcyA9IHRoaXMubGluZXNGcm9tQ29udGVudHMoY29udGVudHMsIGZpcnN0TGluZUluZGV4LCBjb250ZXh0KTtcclxuXHJcbiAgICByZXR1cm4gbGluZXM7XHJcbiAgfVxyXG5cclxuICBsaW5lc0Zyb21Db250ZW50cyhjb250ZW50cywgZmlyc3RMaW5lSW5kZXgsIGNvbnRleHQpIHtcclxuICAgIGNvbnN0IGxpbmVzID0gW107XHJcbiAgICBcclxuICAgIGxldCBpbmRleCA9IGZpcnN0TGluZUluZGV4LCAgICBcclxuICAgICAgICBjb250ZW50ID0gY29udGVudHNbaW5kZXhdO1xyXG5cclxuICAgIHdoaWxlIChjb250ZW50ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgY29uc3QgbGVuZ3RoID0gaW5kZXggLSBmaXJzdExpbmVJbmRleCxcclxuICAgICAgICAgICAgdGVybWluYXRlID0gY29udGV4dC5zaG91bGRUZXJtaW5hdGUobGVuZ3RoKTtcclxuXHJcbiAgICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgbGluZSA9IHRoaXMuTGluZS5mcm9tQ29udGVudChjb250ZW50LCBjb250ZXh0LCB0aGlzLnJ1bGVzKTtcclxuXHJcbiAgICAgIGxpbmVzLnB1c2gobGluZSk7XHJcblxyXG4gICAgICBjb250ZW50ID0gY29udGVudHNbKytpbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGxpbmVzO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHJ1bGVzRnJvbUdyYW1tYXIoZ3JhbW1hcikgeyByZXR1cm4gUnVsZXMuZnJvbUdyYW1tYXIoZ3JhbW1hcik7IH1cclxuXHJcbiAgc3RhdGljIHNpZ25pZmljYW50VG9rZW5UeXBlc0Zyb21HcmFtbWFyKGdyYW1tYXIpIHsgcmV0dXJuIFJ1bGVzLnNpZ25pZmljYW50VG9rZW5UeXBlc0Zyb21HcmFtbWFyKGdyYW1tYXIpOyB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ29tbW9uTGV4ZXI7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IHV0aWwgPSByZXF1aXJlKCcuLi91dGlsJyksXHJcbiAgICAgIFNpZ25pZmljYW50VG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMvc2lnbmlmaWNhbnQnKTtcclxuXHJcbmNsYXNzIExpbmUge1xyXG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQpIHtcclxuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XHJcblxyXG4gICAgdGhpcy50b2tlbnMgPSB1bmRlZmluZWQ7XHJcbiAgICBcclxuICAgIHRoaXMuaW5Db21tZW50ID0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29udGVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBnZXRUb2tlbnMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XHJcbiAgfVxyXG5cclxuICBpc0luQ29tbWVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLmluQ29tbWVudDtcclxuICB9XHJcblxyXG4gIGdldEhUTUwoKSB7XHJcbiAgICBsZXQgaHRtbCA9IHRoaXMudG9rZW5zLnJlZHVjZShmdW5jdGlvbihodG1sLCB0b2tlbikge1xyXG4gICAgICAgICAgY29uc3QgdG9rZW5IVE1MID0gdG9rZW4uZ2V0SFRNTCgpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBodG1sICs9IHRva2VuSFRNTDtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgcmV0dXJuIGh0bWw7XHJcbiAgICAgICAgfSwgJycpO1xyXG4gICAgXHJcbiAgICBodG1sICs9ICdcXG4nOyAvLy9cclxuICAgIFxyXG4gICAgcmV0dXJuIGh0bWw7XHJcbiAgfVxyXG5cclxuICBzZXRUb2tlbnModG9rZW5zKSB7XHJcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcclxuICB9XHJcblxyXG4gIHNldEluQ29tbWVudChpbkNvbW1lbnQpIHtcclxuICAgIHRoaXMuaW5Db21tZW50ID0gaW5Db21tZW50O1xyXG4gIH1cclxuXHJcbiAgcHVzaFRva2VuKHRva2VuKSB7XHJcbiAgICB0aGlzLnRva2Vucy5wdXNoKHRva2VuKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tQ29udGVudChMaW5lLCBjb250ZW50LCBjb250ZXh0LCBydWxlcywgQ29tbWVudFRva2VucywgU3RyaW5nVG9rZW5zLCBXaGl0ZXNwYWNlVG9rZW5zKSB7XHJcbiAgICBjb25zdCBsaW5lID0gbmV3IExpbmUoY29udGVudCksXHJcbiAgICAgICAgICB0b2tlbnNPckNvbnRlbnRzID0gW2NvbnRlbnRdLFxyXG4gICAgICAgICAgaW5Db21tZW50ID0gQ29tbWVudFRva2Vucy5wYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUsIGNvbnRleHQpO1xyXG5cclxuICAgIFN0cmluZ1Rva2Vucy5wYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUpO1xyXG4gICAgXHJcbiAgICBXaGl0ZXNwYWNlVG9rZW5zLnBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSk7XHJcblxyXG4gICAgY29uc3QgdG9rZW5zID0gU2lnbmlmaWNhbnRUb2tlbnMucGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lLCBydWxlcyk7XHJcblxyXG4gICAgbGluZS5zZXRUb2tlbnModG9rZW5zKTtcclxuXHJcbiAgICBsaW5lLnNldEluQ29tbWVudChpbkNvbW1lbnQpO1xyXG5cclxuICAgIHJldHVybiBsaW5lO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBMaW5lO1xyXG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFNpZ25pZmljYW50VG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQnKTtcblxuY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKHNpZ25pZmljYW50VG9rZW5UeXBlLCByZWd1bGFyRXhwcmVzc2lvbikge1xuICAgIHRoaXMuc2lnbmlmaWNhbnRUb2tlblR5cGUgPSBzaWduaWZpY2FudFRva2VuVHlwZTtcbiAgICB0aGlzLnJlZ3VsYXJFeHByZXNzaW9uID0gcmVndWxhckV4cHJlc3Npb247XG4gIH1cbiAgXG4gIGdldFNpZ25pZmljYW50VG9rZW5UeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnNpZ25pZmljYW50VG9rZW5UeXBlO1xuICB9XG4gIFxuICBnZXRSZWd1bGFyRXhwcmVzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yZWd1bGFyRXhwcmVzc2lvbjtcbiAgfVxuICBcbiAgc2lnbmlmaWNhbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudChjb250ZW50KSB7XG4gICAgbGV0IHNpZ25pZmljYW50VG9rZW5Qb3NpdGlvbiA9IC0xO1xuICAgIFxuICAgIGNvbnN0IG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKHRoaXMucmVndWxhckV4cHJlc3Npb24pO1xuICAgIFxuICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyk7XG4gICAgICBcbiAgICAgIGlmIChmaXJzdE1hdGNoICE9PSAnJykge1xuICAgICAgICBzaWduaWZpY2FudFRva2VuUG9zaXRpb24gPSBtYXRjaGVzLmluZGV4OyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlblBvc2l0aW9uO1xuICB9XG5cbiAgc2lnbmlmaWNhbnRUb2tlbkZyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lKSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2godGhpcy5yZWd1bGFyRXhwcmVzc2lvbiksXG4gICAgICAgICAgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpO1xuXG4gICAgY29udGVudCA9IGZpcnN0TWF0Y2g7IC8vL1xuXG4gICAgY29uc3QgdHlwZSA9IHRoaXMuc2lnbmlmaWNhbnRUb2tlblR5cGUsIC8vL1xuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBTaWduaWZpY2FudFRva2VuLmZyb21Db250ZW50TGluZUFuZFR5cGUoY29udGVudCwgbGluZSwgdHlwZSk7XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU2lnbmlmaWNhbnRUb2tlblR5cGVBbmRSZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4oc2lnbmlmaWNhbnRUb2tlblR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybikge1xuICAgIGNvbnN0IHVuaWNvZGUgPSBpc1VuaWNvZGUocmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKSxcbiAgICAgICAgICBmbGFncyA9IHVuaWNvZGUgPyAndScgOiAnJyxcbiAgICAgICAgICByZWdFeHAgPSBuZXcgUmVnRXhwKHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiwgZmxhZ3MpLFxuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uID0gcmVnRXhwLCAvLy9cbiAgICAgICAgICBydWxlID0gbmV3IFJ1bGUoc2lnbmlmaWNhbnRUb2tlblR5cGUsIHJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZTtcblxuZnVuY3Rpb24gaXNVbmljb2RlKHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybikge1xuICBjb25zdCBtYXRjaGVzID0gcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuLm1hdGNoKC91XFx7LyksXG4gICAgICAgIHVuaWNvZGUgPSAobWF0Y2hlcyAhPT0gbnVsbCk7XG5cbiAgcmV0dXJuIHVuaWNvZGU7XG59XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSdWxlID0gcmVxdWlyZSgnLi9ydWxlJyksXG4gICAgICB1dGlsID0gcmVxdWlyZSgnLi4vdXRpbCcpO1xuXG5jbGFzcyBSdWxlcyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG4gIFxuICByZWR1Y2UoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkgeyByZXR1cm4gdGhpcy5hcnJheS5yZWR1Y2UoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSk7IH1cblxuICBnZXRSdWxlKGRlcHRoKSB7XG4gICAgY29uc3QgcnVsZSA9ICh0aGlzLmFycmF5W2RlcHRoXSB8fCBudWxsKTsgLy8vXG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21HcmFtbWFyKGdyYW1tYXIpIHtcbiAgICBjb25zdCBzaWduaWZpY2FudFRva2VuVHlwZXMgPSBSdWxlcy5zaWduaWZpY2FudFRva2VuVHlwZXNGcm9tR3JhbW1hcihncmFtbWFyKSxcbiAgICAgICAgICBhcnJheSA9IHNpZ25pZmljYW50VG9rZW5UeXBlcy5tYXAoZnVuY3Rpb24oc2lnbmlmaWNhbnRUb2tlblR5cGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlZ3VsYXJFeHByZXNzaW9uUGF0dGVybiA9IFJ1bGVzLmZpbmRSZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4oc2lnbmlmaWNhbnRUb2tlblR5cGUsIGdyYW1tYXIpLFxuICAgICAgICAgICAgICAgICAgcnVsZSA9IFJ1bGUuZnJvbVNpZ25pZmljYW50VG9rZW5UeXBlQW5kUmVndWxhckV4cHJlc3Npb25QYXR0ZXJuKHNpZ25pZmljYW50VG9rZW5UeXBlLCByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4pO1xuICAgICAgXG4gICAgICAgICAgICByZXR1cm4gcnVsZTsgICAgICBcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBydWxlcyA9IG5ldyBSdWxlcyhhcnJheSk7XG4gICAgXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgc3RhdGljIGZpbmRSZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4oc2lnbmlmaWNhbnRUb2tlblR5cGUsIGdyYW1tYXIpIHtcbiAgICBjb25zdCByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4gPSBncmFtbWFyLnJlZHVjZShmdW5jdGlvbihyZWd1bGFyRXhwcmVzc2lvblBhdHRlcm4sIGVudHJ5KSB7XG4gICAgICAgICAgICBpZiAocmVndWxhckV4cHJlc3Npb25QYXR0ZXJuID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGVudHJ5S2V5cyA9IE9iamVjdC5rZXlzKGVudHJ5KSxcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RFbnRyeUtleSA9IGZpcnN0KGVudHJ5S2V5cyksXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5U2lnbmlmaWNhbnRUb2tlblR5cGUgPSBmaXJzdEVudHJ5S2V5OyAgLy8vXG5cbiAgICAgICAgICAgICAgaWYgKGVudHJ5U2lnbmlmaWNhbnRUb2tlblR5cGUgPT09IHNpZ25pZmljYW50VG9rZW5UeXBlKSB7XG4gICAgICAgICAgICAgICAgcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuID0gZW50cnlbc2lnbmlmaWNhbnRUb2tlblR5cGVdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZWd1bGFyRXhwcmVzc2lvblBhdHRlcm47XG4gICAgICAgICAgfSwgbnVsbCk7XG5cbiAgICByZXR1cm4gcmVndWxhckV4cHJlc3Npb25QYXR0ZXJuO1xuICB9XG5cbiAgc3RhdGljIHNpZ25pZmljYW50VG9rZW5UeXBlc0Zyb21HcmFtbWFyKGdyYW1tYXIpIHtcbiAgICBjb25zdCBzaWduaWZpY2FudFRva2VuVHlwZXMgPSBncmFtbWFyLm1hcChmdW5jdGlvbihlbnRyeSkge1xuICAgICAgICAgICAgY29uc3QgZW50cnlLZXlzID0gT2JqZWN0LmtleXMoZW50cnkpLFxuICAgICAgICAgICAgICAgICAgZmlyc3RFbnRyeUtleSA9IGZpcnN0KGVudHJ5S2V5cyksXG4gICAgICAgICAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZSA9IGZpcnN0RW50cnlLZXk7IC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlblR5cGU7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlblR5cGVzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZXM7XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfSIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdXRpbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWwnKTtcblxuY2xhc3MgTm9uU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQsIGxpbmUsIGh0bWwpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgdGhpcy5odG1sID0gaHRtbDtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgfVxuICBcbiAgZ2V0TGluZSgpIHtcbiAgICByZXR1cm4gdGhpcy5saW5lO1xuICB9XG5cbiAgZ2V0SFRNTCgpIHtcbiAgICByZXR1cm4gdGhpcy5odG1sO1xuICB9XG4gIFxuICBnZXRMZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudC5sZW5ndGg7IC8vL1xuICB9XG4gIFxuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gTm9uU2lnbmlmaWNhbnRUb2tlbi5jbG9uZSh0aGlzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgTm9uU2lnbmlmaWNhbnRUb2tlbik7IH1cblxuICBzdGF0aWMgY2xvbmUodG9rZW4sIHN0YXJ0UG9zaXRpb24gPSAwLCBlbmRQb3NpdGlvbiA9IHRva2VuLmdldExlbmd0aCgpLCBDbGFzcyA9IE5vblNpZ25pZmljYW50VG9rZW4pIHtcbiAgICBsZXQgY2xvbmVkTm9uU2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgICBpZiAoc3RhcnRQb3NpdGlvbiAhPT0gZW5kUG9zaXRpb24pIHtcbiAgICAgIGNvbnN0IGxpbmUgPSB0b2tlbi5nZXRMaW5lKCk7XG5cbiAgICAgIGxldCBjb250ZW50ID0gdG9rZW4uZ2V0Q29udGVudCgpO1xuICAgICAgXG4gICAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pO1xuXG4gICAgICBjbG9uZWROb25TaWduaWZpY2FudFRva2VuID0gQ2xhc3MuZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIENsYXNzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2xvbmVkTm9uU2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBDbGFzcyA9IE5vblNpZ25pZmljYW50VG9rZW4pIHtcbiAgICBjb25zdCBodG1sID0gQ2xhc3MuaHRtbEZyb21Db250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIHRva2VuID0gbmV3IENsYXNzKGNvbnRlbnQsIGxpbmUsIGh0bWwpO1xuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgc3RhdGljIGh0bWxGcm9tQ29udGVudChjb250ZW50KSB7XG4gICAgY29uc3Qgc2FuaXRpc2VkQ29udGVudCA9IHV0aWwuc2FuaXRpc2VDb250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIGh0bWwgPSBzYW5pdGlzZWRDb250ZW50O1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb25TaWduaWZpY2FudFRva2VuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB1dGlsID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbCcpLFxuICAgICAgTm9uU2lnbmlmaWNhbnRUb2tlbiA9IHJlcXVpcmUoJy4uL25vblNpZ25pZmljYW50Jyk7XG5cbmNsYXNzIENvbW1lbnRUb2tlbiBleHRlbmRzIE5vblNpZ25pZmljYW50VG9rZW4ge1xuICBtZXJnZShjb21tZW50VG9rZW4pIHtcbiAgICBsZXQgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpO1xuICAgIFxuICAgIGNvbnN0IGxpbmUgPSB0aGlzLmdldExpbmUoKSxcbiAgICAgICAgICBjb21tZW50VG9rZW5Db250ZW50ID0gY29tbWVudFRva2VuLmdldENvbnRlbnQoKTtcblxuICAgIGNvbnRlbnQgKz0gY29tbWVudFRva2VuQ29udGVudDtcblxuICAgIGNvbW1lbnRUb2tlbiA9IENvbW1lbnRUb2tlbi5mcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSk7ICAvLy9cblxuICAgIHJldHVybiBjb21tZW50VG9rZW47XG4gIH1cblxuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gQ29tbWVudFRva2VuLmNsb25lKHRoaXMsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCBDb21tZW50VG9rZW4pOyB9XG5cbiAgc3RhdGljIGNsb25lKHRva2VuLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgQ2xhc3MgPSBDb21tZW50VG9rZW4pIHsgcmV0dXJuIE5vblNpZ25pZmljYW50VG9rZW4uY2xvbmUodG9rZW4sIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCBDbGFzcykgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSwgQ2xhc3MgPSBDb21tZW50VG9rZW4pIHsgcmV0dXJuIE5vblNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIENsYXNzKTsgfVxuXG4gIHN0YXRpYyBodG1sRnJvbUNvbnRlbnQoY29udGVudCkge1xuICAgIGNvbnN0IHNhbml0aXNlZENvbnRlbnQgPSB1dGlsLnNhbml0aXNlQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICBpbm5lckhUTUwgPSBzYW5pdGlzZWRDb250ZW50LCAvLy9cbiAgICAgICAgICBodG1sID0gYDxzcGFuIGNsYXNzPVwiY29tbWVudFwiPiR7aW5uZXJIVE1MfTwvc3Bhbj5gO1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21tZW50VG9rZW47XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1lbnQnKTtcblxuY2xhc3MgRW5kT2ZDb21tZW50VG9rZW4gZXh0ZW5kcyBDb21tZW50VG9rZW4ge1xuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gQ29tbWVudFRva2VuLmNsb25lKHRoaXMsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCBFbmRPZkNvbW1lbnRUb2tlbik7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpIHsgcmV0dXJuIENvbW1lbnRUb2tlbi5mcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSwgRW5kT2ZDb21tZW50VG9rZW4pOyB9XG5cbiAgc3RhdGljIGZyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lKSB7XG4gICAgbGV0IGVuZE9mQ29tbWVudFRva2VuID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBtYXRjaGVzID0gY29udGVudC5tYXRjaCgvXlxcKlxcLy8pO1xuXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKTtcblxuICAgICAgY29udGVudCA9IGZpcnN0TWF0Y2g7IC8vL1xuXG4gICAgICBlbmRPZkNvbW1lbnRUb2tlbiA9IEVuZE9mQ29tbWVudFRva2VuLmZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZW5kT2ZDb21tZW50VG9rZW47XG4gIH1cblxuICBzdGF0aWMgcG9zaXRpb25XaXRoaW5Db250ZW50KGNvbnRlbnQpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IGNvbnRlbnQuc2VhcmNoKC9cXCpcXC8vKTtcblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVuZE9mQ29tbWVudFRva2VuO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi4vY29tbWVudCcpO1xuXG5jbGFzcyBNaWRkbGVPZkNvbW1lbnRUb2tlbiBleHRlbmRzIENvbW1lbnRUb2tlbiB7XG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBDb21tZW50VG9rZW4uY2xvbmUodGhpcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24sIE1pZGRsZU9mQ29tbWVudFRva2VuKTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSwgbGVuZ3RoKSB7XG4gICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyKDAsIGxlbmd0aCk7ICAvLy9cblxuICAgIGNvbnN0IG1pZGRsZU9mQ29tbWVudFRva2VuID0gQ29tbWVudFRva2VuLmZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBNaWRkbGVPZkNvbW1lbnRUb2tlbik7XG5cbiAgICByZXR1cm4gbWlkZGxlT2ZDb21tZW50VG9rZW47XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNaWRkbGVPZkNvbW1lbnRUb2tlbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi4vY29tbWVudCcpO1xuXG5jbGFzcyBTdGFydE9mQ29tbWVudFRva2VuIGV4dGVuZHMgQ29tbWVudFRva2VuIHtcbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIENvbW1lbnRUb2tlbi5jbG9uZSh0aGlzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgU3RhcnRPZkNvbW1lbnRUb2tlbik7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpIHsgcmV0dXJuIENvbW1lbnRUb2tlbi5mcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSwgU3RhcnRPZkNvbW1lbnRUb2tlbik7IH1cblxuICBzdGF0aWMgZnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpIHtcbiAgICBsZXQgc3RhcnRPZkNvbW1lbnRUb2tlbiA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2goL15cXC9cXCovKTtcblxuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICBjb25zdCBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyk7XG5cbiAgICAgIGNvbnRlbnQgPSBmaXJzdE1hdGNoOyAvLy9cblxuICAgICAgc3RhcnRPZkNvbW1lbnRUb2tlbiA9IFN0YXJ0T2ZDb21tZW50VG9rZW4uZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gc3RhcnRPZkNvbW1lbnRUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBwb3NpdGlvbldpdGhpbkNvbnRlbnQoY29udGVudCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gY29udGVudC5zZWFyY2goL1xcL1xcKi8pO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU3RhcnRPZkNvbW1lbnRUb2tlbjtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHV0aWwgPSByZXF1aXJlKCcuLi8uLi91dGlsJyk7XG5cbmNsYXNzIFNpZ25pZmljYW50VG9rZW4ge1xuICBjb25zdHJ1Y3Rvcihjb250ZW50LCBsaW5lLCB0eXBlLCBpbm5lckhUTUwpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmlubmVySFRNTCA9IGlubmVySFRNTDtcblxuICAgIHRoaXMuZXJyb3IgPSB1bmRlZmluZWQ7IC8vL1xuICB9XG4gIFxuICBnZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gIH1cbiAgXG4gIGdldExpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMubGluZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldElubmVySFRNTCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbm5lckhUTUw7XG4gIH1cblxuICBnZXRFcnJvcigpIHtcbiAgICByZXR1cm4gdGhpcy5lcnJvcjtcbiAgfVxuXG4gIGdldEhUTUwoKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gKHRoaXMuZXJyb3IgPT09IHRydWUpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICdlcnJvcicgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnR5cGUsXG4gICAgICAgICAgaHRtbCA9IGA8c3BhbiBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiPiR7dGhpcy5pbm5lckhUTUx9PC9zcGFuPmA7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGdldExlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50Lmxlbmd0aDsgLy8vXG4gIH1cblxuICBzZXRFcnJvcihlcnJvcikge1xuICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcbiAgfVxuXG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBTaWduaWZpY2FudFRva2VuLmNsb25lKHRoaXMsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCBTaWduaWZpY2FudFRva2VuKSB9XG5cbiAgc3RhdGljIGNsb25lKHRva2VuLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgQ2xhc3MgPSBTaWduaWZpY2FudFRva2VuKSB7XG4gICAgbGV0IGNsb25lZFNpZ25pZmljYW50VG9rZW4gPSBudWxsO1xuXG4gICAgaWYgKHN0YXJ0UG9zaXRpb24gIT09IGVuZFBvc2l0aW9uKSB7XG4gICAgICBsZXQgY29udGVudCA9IHRva2VuLmdldENvbnRlbnQoKTtcblxuICAgICAgY29uc3QgbGluZSA9IHRva2VuLmdldExpbmUoKSxcbiAgICAgICAgICAgIHR5cGUgPSB0b2tlbi5nZXRUeXBlKCksXG4gICAgICAgICAgICBlcnJvciA9IHRva2VuLmdldEVycm9yKCk7XG5cbiAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7XG5cbiAgICAgIGNsb25lZFNpZ25pZmljYW50VG9rZW4gPSBDbGFzcy5mcm9tQ29udGVudExpbmVBbmRUeXBlKGNvbnRlbnQsIGxpbmUsIHR5cGUpO1xuXG4gICAgICBjbG9uZWRTaWduaWZpY2FudFRva2VuLnNldEVycm9yKGVycm9yKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2xvbmVkU2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudExpbmVBbmRUeXBlKGNvbnRlbnQsIGxpbmUsIHR5cGUsIENsYXNzID0gU2lnbmlmaWNhbnRUb2tlbikge1xuICAgIGNvbnN0IGlubmVySFRNTCA9IENsYXNzLmlubmVySFRNTEZyb21Db250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBuZXcgQ2xhc3MoY29udGVudCwgbGluZSwgdHlwZSwgaW5uZXJIVE1MKTtcblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgc3RhdGljIGlubmVySFRNTEZyb21Db250ZW50KGNvbnRlbnQpIHtcbiAgICBjb25zdCBzYW5pdGlzZWRDb250ZW50ID0gdXRpbC5zYW5pdGlzZUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgaW5uZXJIVE1MID0gc2FuaXRpc2VkQ29udGVudDsgLy8vXG5cbiAgICByZXR1cm4gaW5uZXJIVE1MO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2lnbmlmaWNhbnRUb2tlbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgU2lnbmlmaWNhbnRUb2tlbiA9IHJlcXVpcmUoJy4uL3NpZ25pZmljYW50Jyk7XG5cbmNsYXNzIEVuZE9mTGluZVRva2VuIGV4dGVuZHMgU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBTaWduaWZpY2FudFRva2VuLmNsb25lKHRoaXMsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCBFbmRPZkxpbmVUb2tlbik7IH1cbiAgXG4gIHN0YXRpYyBmcm9tQ29udGVudExpbmVBbmRUeXBlKGNvbnRlbnQsIGxpbmUsIHR5cGUpIHsgcmV0dXJuIFNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnRMaW5lQW5kVHlwZShjb250ZW50LCBsaW5lLCB0eXBlLCBFbmRPZkxpbmVUb2tlbik7IH1cbiAgXG4gIGdldEhUTUwoKSB7XG4gICAgY29uc3QgaHRtbCA9ICcnO1xuICAgIFxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgc3RhdGljIGZyb21MaW5lKGxpbmUpIHtcbiAgICBjb25zdCBjb250ZW50ID0gJycsXG4gICAgICAgICAgdHlwZSA9IEVuZE9mTGluZVRva2VuLnR5cGUsXG4gICAgICAgICAgZW5kT2ZMaW5lVG9rZW4gPSBFbmRPZkxpbmVUb2tlbi5mcm9tQ29udGVudExpbmVBbmRUeXBlKGNvbnRlbnQsIGxpbmUsIHR5cGUpO1xuICAgIFxuICAgIHJldHVybiBlbmRPZkxpbmVUb2tlbjtcbiAgfVxufVxuXG5FbmRPZkxpbmVUb2tlbi50eXBlID0gJ2VuZE9mTGluZSc7XG5cbm1vZHVsZS5leHBvcnRzID0gRW5kT2ZMaW5lVG9rZW47XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFNpZ25pZmljYW50VG9rZW4gPSByZXF1aXJlKCcuLi9zaWduaWZpY2FudCcpO1xuXG5jbGFzcyBTdHJpbmdUb2tlbiBleHRlbmRzIFNpZ25pZmljYW50VG9rZW4ge1xuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5jbG9uZSh0aGlzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgU3RyaW5nVG9rZW4pOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50TGluZUFuZFR5cGUoY29udGVudCwgbGluZSwgdHlwZSkgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5mcm9tQ29udGVudExpbmVBbmRUeXBlKGNvbnRlbnQsIGxpbmUsIHR5cGUsIFN0cmluZ1Rva2VuKTsgfVxuXG4gIHN0YXRpYyBmcm9tV2l0aGluQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSkge1xuICAgIGxldCBzdHJpbmdUb2tlbiA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2goLyhcIlteXCJdKlwiKS8pO1xuXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKTtcbiAgICAgIFxuICAgICAgY29udGVudCA9IGZpcnN0TWF0Y2g7IC8vL1xuICAgICAgXG4gICAgICBjb25zdCB0eXBlID0gU3RyaW5nVG9rZW4udHlwZTtcblxuICAgICAgc3RyaW5nVG9rZW4gPSBTdHJpbmdUb2tlbi5mcm9tQ29udGVudExpbmVBbmRUeXBlKGNvbnRlbnQsIGxpbmUsIHR5cGUpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gc3RyaW5nVG9rZW47XG4gIH1cblxuICBzdGF0aWMgcG9zaXRpb25XaXRoaW5Db250ZW50KGNvbnRlbnQpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IGNvbnRlbnQuc2VhcmNoKC9cIlteXCJdKlwiLyk7XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTdHJpbmdUb2tlbjtcblxuU3RyaW5nVG9rZW4udHlwZSA9ICdzdHJpbmcnO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgU2lnbmlmaWNhbnRUb2tlbiA9IHJlcXVpcmUoJy4uL3NpZ25pZmljYW50Jyk7XG5cbmNsYXNzIFdoaXRlc3BhY2VUb2tlbiBleHRlbmRzIFNpZ25pZmljYW50VG9rZW4ge1xuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5jbG9uZSh0aGlzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgV2hpdGVzcGFjZVRva2VuKTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudExpbmVBbmRUeXBlKGNvbnRlbnQsIGxpbmUsIHR5cGUpIHsgcmV0dXJuIFNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnRMaW5lQW5kVHlwZShjb250ZW50LCBsaW5lLCB0eXBlLCBXaGl0ZXNwYWNlVG9rZW4pOyB9XG5cbiAgc3RhdGljIGZyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lKSB7XG4gICAgbGV0IHdoaXRlc3BhY2VUb2tlbiA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2goLyhbXFx0IF0rKS8pO1xuXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKTtcbiAgICAgIFxuICAgICAgY29udGVudCA9IGZpcnN0TWF0Y2g7IC8vL1xuICAgICAgXG4gICAgICBjb25zdCB0eXBlID0gV2hpdGVzcGFjZVRva2VuLnR5cGU7XG5cbiAgICAgIHdoaXRlc3BhY2VUb2tlbiA9IFdoaXRlc3BhY2VUb2tlbi5mcm9tQ29udGVudExpbmVBbmRUeXBlKGNvbnRlbnQsIGxpbmUsIHR5cGUpO1xuICAgIH1cblxuICAgIHJldHVybiB3aGl0ZXNwYWNlVG9rZW47XG4gIH1cblxuICBzdGF0aWMgcG9zaXRpb25XaXRoaW5Db250ZW50KGNvbnRlbnQpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IGNvbnRlbnQuc2VhcmNoKC9bXFx0IF0rLyk7XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBXaGl0ZXNwYWNlVG9rZW47XG5cbldoaXRlc3BhY2VUb2tlbi50eXBlID0gJ3doaXRlc3BhY2UnOyBcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCB1dGlsID0gcmVxdWlyZSgnLi4vdXRpbCcpO1xyXG5cclxuY2xhc3MgVG9rZW5zIHtcclxuICBzdGF0aWMgcGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lLCBUb2tlbikge1xyXG4gICAgbGV0IG9mZnNldCA9IDA7XHJcbiAgICBcclxuICAgIGNvbnN0IHRva2Vuc09yQ29udGVudHNMZW5ndGggPSB0b2tlbnNPckNvbnRlbnRzLmxlbmd0aDtcclxuXHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdG9rZW5zT3JDb250ZW50c0xlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBjb25zdCBvZmZzZXRJbmRleCA9IGluZGV4ICsgb2Zmc2V0LFxyXG4gICAgICAgICAgdG9rZW5PckNvbnRlbnQgPSB0b2tlbnNPckNvbnRlbnRzW29mZnNldEluZGV4XTtcclxuXHJcbiAgICAgIGlmICh0eXBlb2YgdG9rZW5PckNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgY29uc3QgY29udGVudCA9IHRva2VuT3JDb250ZW50LCAgLy8vXHJcbiAgICAgICAgICAgIHRva2Vuc09yUmVtYWluaW5nQ29udGVudCA9IHRva2Vuc09yUmVtYWluaW5nQ29udGVudEZyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBUb2tlbiksXHJcbiAgICAgICAgICAgIHRva2Vuc09yUmVtYWluaW5nQ29udGVudExlbmd0aCA9IHRva2Vuc09yUmVtYWluaW5nQ29udGVudC5sZW5ndGgsXHJcbiAgICAgICAgICAgIHN0YXJ0ID0gb2Zmc2V0SW5kZXg7XHJcblxyXG4gICAgICAgIHV0aWwuc3BsaWNlQXJyYXkodG9rZW5zT3JDb250ZW50cywgc3RhcnQsIDEsIHRva2Vuc09yUmVtYWluaW5nQ29udGVudCk7XHJcblxyXG4gICAgICAgIG9mZnNldCArPSB0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnRMZW5ndGggLSAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFRva2VucztcclxuXHJcbmZ1bmN0aW9uIHRva2Vuc09yUmVtYWluaW5nQ29udGVudEZyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBUb2tlbikge1xyXG4gIGxldCByZW1haW5pbmdDb250ZW50LFxyXG4gICAgICB0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnQgPSBbXSwgICAgICAgXHJcbiAgICAgIHRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ID0gVG9rZW4ucG9zaXRpb25XaXRoaW5Db250ZW50KGNvbnRlbnQpO1xyXG4gIFxyXG4gIHdoaWxlICh0b2tlblBvc2l0aW9uV2l0aGluQ29udGVudCAhPT0gLTEpIHtcclxuICAgIGlmICh0b2tlblBvc2l0aW9uV2l0aGluQ29udGVudCA+IDApIHtcclxuICAgICAgcmVtYWluaW5nQ29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKDAsIHRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50KTtcclxuXHJcbiAgICAgIHRva2Vuc09yUmVtYWluaW5nQ29udGVudC5wdXNoKHJlbWFpbmluZ0NvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRva2VuID0gVG9rZW4uZnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpLFxyXG4gICAgICAgICAgdG9rZW5MZW5ndGggPSB0b2tlbi5nZXRMZW5ndGgoKSxcclxuICAgICAgICAgIHRva2VuT2Zmc2V0ID0gdG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQgKyB0b2tlbkxlbmd0aDtcclxuICAgIFxyXG4gICAgdG9rZW5zT3JSZW1haW5pbmdDb250ZW50LnB1c2godG9rZW4pO1xyXG4gICAgXHJcbiAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcodG9rZW5PZmZzZXQpO1xyXG5cclxuICAgIHRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ID0gVG9rZW4ucG9zaXRpb25XaXRoaW5Db250ZW50KGNvbnRlbnQpO1xyXG4gIH1cclxuICBcclxuICBpZiAoY29udGVudCAhPT0gJycpIHtcclxuICAgIHJlbWFpbmluZ0NvbnRlbnQgPSBjb250ZW50O1xyXG5cclxuICAgIHRva2Vuc09yUmVtYWluaW5nQ29udGVudC5wdXNoKHJlbWFpbmluZ0NvbnRlbnQpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRva2Vuc09yUmVtYWluaW5nQ29udGVudDtcclxufVxyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCB1dGlsID0gcmVxdWlyZSgnLi4vLi4vdXRpbCcpLFxyXG4gICAgICBFbmRPZkNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvZW5kT2YnKSxcclxuICAgICAgU3RhcnRPZkNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvc3RhcnRPZicpLFxyXG4gICAgICBNaWRkbGVPZkNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQvbWlkZGxlT2YnKTtcclxuXHJcbmNsYXNzIENvbW1lbnRUb2tlbnMge1xyXG4gIHN0YXRpYyBwYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUsIGNvbnRleHQpIHtcclxuICAgIGxldCBjb250ZW50ID0gdG9rZW5zT3JDb250ZW50cy5wb3AoKSxcclxuICAgICAgICBjb21tZW50VG9rZW4sXHJcbiAgICAgICAgY29tbWVudFRva2VuTGVuZ3RoLFxyXG4gICAgICAgIHByZXZpb3VzTGluZUluQ29tbWVudCA9IGNvbnRleHQuaXNQcmV2aW91c0xpbmVJbkNvbW1lbnQoKSxcclxuICAgICAgICBpbkNvbW1lbnQgPSAocHJldmlvdXNMaW5lSW5Db21tZW50ID09PSB0cnVlKTtcclxuXHJcbiAgICB3aGlsZSAoY29udGVudCAhPT0gJycpIHtcclxuICAgICAgbGV0IGNvbnRlbnRMZW5ndGggPSBjb250ZW50Lmxlbmd0aDtcclxuXHJcbiAgICAgIGlmIChpbkNvbW1lbnQpIHtcclxuICAgICAgICBjb25zdCBlbmRPZkNvbW1lbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudCA9IEVuZE9mQ29tbWVudFRva2VuLnBvc2l0aW9uV2l0aGluQ29udGVudChjb250ZW50KTtcclxuXHJcbiAgICAgICAgaWYgKGVuZE9mQ29tbWVudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ID09PSAwKSB7XHJcbiAgICAgICAgICBpbkNvbW1lbnQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICBjb21tZW50VG9rZW4gPSBFbmRPZkNvbW1lbnRUb2tlbi5mcm9tV2l0aGluQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSk7XHJcblxyXG4gICAgICAgICAgY29tbWVudFRva2VuTGVuZ3RoID0gY29tbWVudFRva2VuLmdldExlbmd0aCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCBtaWRkbGVPZkNvbW1lbnRUb2tlbkxlbmd0aCA9IHV0aWwubWluaW11bUJhck1pbnVzT25lKGVuZE9mQ29tbWVudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50LCBjb250ZW50TGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICBjb21tZW50VG9rZW4gPSBNaWRkbGVPZkNvbW1lbnRUb2tlbi5mcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSwgbWlkZGxlT2ZDb21tZW50VG9rZW5MZW5ndGgpO1xyXG5cclxuICAgICAgICAgIGNvbW1lbnRUb2tlbkxlbmd0aCA9IG1pZGRsZU9mQ29tbWVudFRva2VuTGVuZ3RoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcHJldmlvdXNDb21tZW50VG9rZW4gPSB0b2tlbnNPckNvbnRlbnRzLnBvcCgpO1xyXG5cclxuICAgICAgICBjb21tZW50VG9rZW4gPSAocHJldmlvdXNDb21tZW50VG9rZW4gPT09IHVuZGVmaW5lZCkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRUb2tlbiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91c0NvbW1lbnRUb2tlbi5tZXJnZShjb21tZW50VG9rZW4pO1xyXG5cclxuICAgICAgICB0b2tlbnNPckNvbnRlbnRzLnB1c2goY29tbWVudFRva2VuKTtcclxuXHJcbiAgICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKGNvbW1lbnRUb2tlbkxlbmd0aCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3Qgc3RhcnRPZkNvbW1lbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudCA9IFN0YXJ0T2ZDb21tZW50VG9rZW4ucG9zaXRpb25XaXRoaW5Db250ZW50KGNvbnRlbnQpO1xyXG5cclxuICAgICAgICBpZiAoc3RhcnRPZkNvbW1lbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudCA9PT0gMCkge1xyXG4gICAgICAgICAgaW5Db21tZW50ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICBjb21tZW50VG9rZW4gPSBTdGFydE9mQ29tbWVudFRva2VuLmZyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lKTtcclxuXHJcbiAgICAgICAgICBjb21tZW50VG9rZW5MZW5ndGggPSBjb21tZW50VG9rZW4uZ2V0TGVuZ3RoKCk7XHJcblxyXG4gICAgICAgICAgdG9rZW5zT3JDb250ZW50cy5wdXNoKGNvbW1lbnRUb2tlbik7XHJcblxyXG4gICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKGNvbW1lbnRUb2tlbkxlbmd0aCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnRlbnRMZW5ndGggPSB1dGlsLm1pbmltdW1CYXJNaW51c09uZShzdGFydE9mQ29tbWVudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50LCBjb250ZW50TGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICBjb25zdCByZW1haW5pbmdDb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoY29udGVudExlbmd0aCk7XHJcblxyXG4gICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKDAsIGNvbnRlbnRMZW5ndGgpO1xyXG5cclxuICAgICAgICAgIHRva2Vuc09yQ29udGVudHMucHVzaChjb250ZW50KTtcclxuXHJcbiAgICAgICAgICBjb250ZW50ID0gcmVtYWluaW5nQ29udGVudDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcmV2aW91c0xpbmVJbkNvbW1lbnQgPSBpbkNvbW1lbnQ7ICAvLy9cclxuXHJcbiAgICBjb250ZXh0LnNldFByZXZpb3VzTGluZUluQ29tbWVudChwcmV2aW91c0xpbmVJbkNvbW1lbnQpO1xyXG5cclxuICAgIHJldHVybiBpbkNvbW1lbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1lbnRUb2tlbnM7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIFNpZ25pZmljYW50VG9rZW5zIHtcclxuICBzdGF0aWMgcGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lLCBydWxlcykge1xyXG4gICAgY29uc3QgdG9rZW5zID0gdG9rZW5zT3JDb250ZW50cy5yZWR1Y2UoZnVuY3Rpb24odG9rZW5zLCB0b2tlbk9yUmVtYWluaW5nQ29udGVudCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuT3JSZW1haW5pbmdDb250ZW50ID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0b2tlbk9yUmVtYWluaW5nQ29udGVudCwgIC8vL1xyXG4gICAgICAgICAgICAgICAgICAgIGRlcHRoID0gMCxcclxuICAgICAgICAgICAgICAgICAgICBzaWduaWZpY2FudFRva2VucyA9IHNpZ25pZmljYW50VG9rZW5zRnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIHJ1bGVzLCBkZXB0aCk7XHJcbiAgICAgIFxyXG4gICAgICAgICAgICAgIHRva2VucyA9IHRva2Vucy5jb25jYXQoc2lnbmlmaWNhbnRUb2tlbnMpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGNvbnN0IG5vblNpZ25pZmljYW50VG9rZW4gPSB0b2tlbk9yUmVtYWluaW5nQ29udGVudDsgIC8vL1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHRva2Vucy5wdXNoKG5vblNpZ25pZmljYW50VG9rZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zO1xyXG4gICAgICAgICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiB0b2tlbnM7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFNpZ25pZmljYW50VG9rZW5zO1xyXG5cclxuZnVuY3Rpb24gc2lnbmlmaWNhbnRUb2tlbnNGcm9tV2l0aGluQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSwgcnVsZXMsIGRlcHRoKSB7XHJcbiAgbGV0IHNpZ25pZmljYW50VG9rZW5zID0gW107XHJcblxyXG4gIGlmIChjb250ZW50ICE9PSAnJykge1xyXG4gICAgY29uc3QgcnVsZSA9IHJ1bGVzLmdldFJ1bGUoZGVwdGgpO1xyXG5cclxuICAgIGlmIChydWxlICE9PSBudWxsKSB7XHJcbiAgICAgIGNvbnN0IG5leHREZXB0aCA9IGRlcHRoICsgMSxcclxuICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudCA9IHJ1bGUuc2lnbmlmaWNhbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudChjb250ZW50KTtcclxuXHJcbiAgICAgIGlmIChzaWduaWZpY2FudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ID09PSAtMSkge1xyXG4gICAgICAgIHNpZ25pZmljYW50VG9rZW5zID0gc2lnbmlmaWNhbnRUb2tlbnNGcm9tV2l0aGluQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSwgcnVsZXMsIG5leHREZXB0aCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IHJ1bGUuc2lnbmlmaWNhbnRUb2tlbkZyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lKSxcclxuICAgICAgICAgICAgICBzaWduaWZpY2FudFRva2VuTGVuZ3RoID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRMZW5ndGgoKSxcclxuICAgICAgICAgICAgICBsZWZ0ID0gc2lnbmlmaWNhbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudCwgIC8vL1xyXG4gICAgICAgICAgICAgIHJpZ2h0ID0gc2lnbmlmaWNhbnRUb2tlblBvc2l0aW9uV2l0aGluQ29udGVudCArIHNpZ25pZmljYW50VG9rZW5MZW5ndGgsICAvLy9cclxuICAgICAgICAgICAgICBsZWZ0Q29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKDAsIGxlZnQpLFxyXG4gICAgICAgICAgICAgIHJpZ2h0Q29udGVudCA9IGNvbnRlbnQuc3Vic3RyaW5nKHJpZ2h0KSxcclxuICAgICAgICAgICAgICBsZWZ0U2lnbmlmaWNhbnRUb2tlbnMgPSBzaWduaWZpY2FudFRva2Vuc0Zyb21XaXRoaW5Db250ZW50QW5kTGluZShsZWZ0Q29udGVudCwgbGluZSwgcnVsZXMsIG5leHREZXB0aCksXHJcbiAgICAgICAgICAgICAgcmlnaHRTaWduaWZpY2FudFRva2VucyA9IHNpZ25pZmljYW50VG9rZW5zRnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKHJpZ2h0Q29udGVudCwgbGluZSwgcnVsZXMsIGRlcHRoKTtcclxuXHJcbiAgICAgICAgc2lnbmlmaWNhbnRUb2tlbnMgPSBbXS5jb25jYXQobGVmdFNpZ25pZmljYW50VG9rZW5zKS5jb25jYXQoc2lnbmlmaWNhbnRUb2tlbikuY29uY2F0KHJpZ2h0U2lnbmlmaWNhbnRUb2tlbnMpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZXJlIGlzIG5vIHJ1bGUgdG8gcGFyc2UgdGhlIGNvbnRlbnQgJyR7Y29udGVudH0nIG9uIGxpbmUgJHtsaW5lfWApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW5zO1xyXG59XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IFRva2VucyA9IHJlcXVpcmUoJy4uL3Rva2VucycpLFxyXG4gICAgICBTdHJpbmdUb2tlbiA9IHJlcXVpcmUoJy4uL3Rva2VuL3NpZ25pZmljYW50L3N0cmluZycpO1xyXG5cclxuY2xhc3MgU3RyaW5nVG9rZW5zIHtcclxuICBzdGF0aWMgcGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lKSB7IFRva2Vucy5wYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUsIFN0cmluZ1Rva2VuKTsgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFN0cmluZ1Rva2VucztcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgVG9rZW5zID0gcmVxdWlyZSgnLi4vdG9rZW5zJyksXHJcbiAgICAgIFdoaXRlc3BhY2VUb2tlbiA9IHJlcXVpcmUoJy4uL3Rva2VuL3NpZ25pZmljYW50L3doaXRlc3BhY2UnKTtcclxuXHJcbmNsYXNzIFdoaXRlc3BhY2VUb2tlbnMge1xyXG4gIHN0YXRpYyBwYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUpIHsgcmV0dXJuIFRva2Vucy5wYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUsIFdoaXRlc3BhY2VUb2tlbik7IH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBXaGl0ZXNwYWNlVG9rZW5zO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBMaW5lID0gcmVxdWlyZSgnLi9saW5lJyksXHJcbiAgICAgIENvbnRleHQgPSByZXF1aXJlKCcuLi9jb21tb24vY29udGV4dCcpLFxyXG4gICAgICBDb21tb25MZXhlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9sZXhlcicpLFxyXG4gICAgICBTdHJpbmdUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9zdHJpbmcnKSxcclxuICAgICAgRW5kT2ZMaW5lVG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvZW5kT2ZMaW5lJyksXHJcbiAgICAgIFdoaXRlc3BhY2VUb2tlbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC93aGl0ZXNwYWNlJyk7XHJcblxyXG5jbGFzcyBGbG9yZW5jZUxleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xyXG4gIGxpbmVzRnJvbUNvbnRlbnQoY29udGVudCwgZmlyc3RMaW5lSW5kZXgsIG1pbmltdW1MaW5lc0xlbmd0aCwgcHJldmlvdXNMaW5lSW5Db21tZW50LCBmb2xsb3dpbmdMaW5lSW5Db21tZW50KSB7XHJcbiAgICBjb25zdCBjb250ZXh0ID0gbmV3IENvbnRleHQobWluaW11bUxpbmVzTGVuZ3RoLCBwcmV2aW91c0xpbmVJbkNvbW1lbnQsIGZvbGxvd2luZ0xpbmVJbkNvbW1lbnQpLFxyXG4gICAgICAgICAgbGluZXMgPSBzdXBlci5saW5lc0Zyb21Db250ZW50KGNvbnRlbnQsIGZpcnN0TGluZUluZGV4LCBjb250ZXh0KTtcclxuXHJcbiAgICByZXR1cm4gbGluZXM7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc2lnbmlmaWNhbnRUb2tlblR5cGVzKCkge1xyXG4gICAgY29uc3QgZ3JhbW1hciA9IEZsb3JlbmNlTGV4ZXIuZ3JhbW1hcixcclxuICAgICAgICAgIGdyYW1tYXJTaWduaWZpY2FudFRva2VuVHlwZXMgPSBDb21tb25MZXhlci5zaWduaWZpY2FudFRva2VuVHlwZXNGcm9tR3JhbW1hcihncmFtbWFyKSxcclxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlcyA9IGdyYW1tYXJTaWduaWZpY2FudFRva2VuVHlwZXMuY29uY2F0KFtcclxuICAgICAgICAgICAgU3RyaW5nVG9rZW4udHlwZSxcclxuICAgICAgICAgICAgV2hpdGVzcGFjZVRva2VuLnR5cGUsXHJcbiAgICAgICAgICAgIEVuZE9mTGluZVRva2VuLnR5cGVcclxuICAgICAgICAgIF0pO1xyXG5cclxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuVHlwZXM7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbUdyYW1tYXIoZ3JhbW1hcikge1xyXG4gICAgY29uc3QgcnVsZXMgPSBDb21tb25MZXhlci5ydWxlc0Zyb21HcmFtbWFyKGdyYW1tYXIpLFxyXG4gICAgICAgICAgZmxvcmVuY2VMZXhlciA9IG5ldyBGbG9yZW5jZUxleGVyKHJ1bGVzLCBMaW5lKTtcclxuXHJcbiAgICByZXR1cm4gZmxvcmVuY2VMZXhlcjtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcclxuICAgIGNvbnN0IGdyYW1tYXIgPSBGbG9yZW5jZUxleGVyLmdyYW1tYXIsXHJcbiAgICAgICAgICBmbG9yZW5jZUxleGVyID0gRmxvcmVuY2VMZXhlci5mcm9tR3JhbW1hcihncmFtbWFyKTtcclxuXHJcbiAgICByZXR1cm4gZmxvcmVuY2VMZXhlcjtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VMZXhlcjtcclxuXHJcbkZsb3JlbmNlTGV4ZXIuZ3JhbW1hciA9IFtcclxuXHJcbiAgeyBcInNwZWNpYWxcIiAgICA6IFwiLHw7fFxcXFx7fFxcXFx9fD18Ojp8OnxcXFxcKHxcXFxcKXxcXFxcLlxcXFwuXFxcXC58XFxcXC5cXFxcLlwiIH0sXHJcblxyXG4gIHsgXCJpbmNsdWRlXCIgICAgOiBcIl5pbmNsdWRlJFwiIH0sXHJcblxyXG4gIHsgXCJrZXl3b3JkXCIgICAgOiBcIl4oPzpSdWxlfEF4aW9tfFRoZW9yZW18TGVtbWF8UHJlbWlzZXN8UHJlbWlzZXxDb25jbHVzaW9ufFByb29mfFRoZXJlZm9yZXxTdXBwb3NlfFRoZW58SGVuY2V8VmFyaWFibGVzfFZhcmlhYmxlfE1ldGF2YXJpYWJsZXN8TWV0YXZhcmlhYmxlfENvbnN0cnVjdG9yc3xDb25zdHJ1Y3RvcnxUeXBlfE9iamVjdHxEZWZpbml0aW9ufGZyb218Ynl8bGV0fGlzfG5vdHxpbnxmcmVlfGRlZmluZWR8dW5kZWZpbmVkKSRcIiB9LFxyXG5cclxuICB7IFwidW5hc3NpZ25lZFwiIDogXCJeW1xcXFx1ezIxfS1cXFxcdXs3RX1cXFxcdXtBMX0tXFxcXHV7RkZ9XFxcXHV7MjIwMH0tXFxcXHV7MjJGRn1cXFxcdXsyQTAwfS1cXFxcdXsyQUZGfVxcXFx1ezIzMDB9LVxcXFx1ezIzZmZ9XFxcXHV7MUQ0MDB9LVxcXFx1ezFEN0ZGfV0rJFwiIH1cclxuXHJcbl07XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IENvbW1vbkxpbmUgPSByZXF1aXJlKCcuLi9jb21tb24vbGluZScpLFxyXG4gICAgICBDb21tZW50VG9rZW5zID0gcmVxdWlyZSgnLi4vY29tbW9uL3Rva2Vucy9jb21tZW50JyksXHJcbiAgICAgIFN0cmluZ1Rva2VucyA9IHJlcXVpcmUoJy4uL2NvbW1vbi90b2tlbnMvc3RyaW5nJyksXHJcbiAgICAgIFdoaXRlc3BhY2VUb2tlbnMgPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW5zL3doaXRlc3BhY2UnKSxcclxuICAgICAgRW5kT2ZMaW5lVG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvZW5kT2ZMaW5lJyk7XHJcblxyXG5jbGFzcyBMaW5lIGV4dGVuZHMgQ29tbW9uTGluZSB7XHJcbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQsIGNvbnRleHQsIHJ1bGVzKSB7XHJcbiAgICBjb25zdCBsaW5lID0gc3VwZXIuZnJvbUNvbnRlbnQoTGluZSwgY29udGVudCwgY29udGV4dCwgcnVsZXMsIENvbW1lbnRUb2tlbnMsIFN0cmluZ1Rva2VucywgV2hpdGVzcGFjZVRva2VucyksXHJcbiAgICAgICAgICBsaW5lSW5Db21tZW50ID0gbGluZS5pc0luQ29tbWVudCgpO1xyXG5cclxuICAgIGlmICghbGluZUluQ29tbWVudCkge1xyXG4gICAgICBjb25zdCBlbmRPZkxpbmVUb2tlbiA9IEVuZE9mTGluZVRva2VuLmZyb21MaW5lKGxpbmUpO1xyXG5cclxuICAgICAgbGluZS5wdXNoVG9rZW4oZW5kT2ZMaW5lVG9rZW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBsaW5lO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBMaW5lO1xyXG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IExpbmUgPSByZXF1aXJlKCcuL2xpbmUnKTtcblxuY2xhc3MgUHJpbWl0aXZlTGV4ZXIge1xuICBzdGF0aWMgbGluZXNGcm9tR3JhbW1hcihncmFtbWFyKSB7XG4gICAgY29uc3QgY29udGVudHMgPSBjb250ZW50c0Zyb21HcmFtbWFyKGdyYW1tYXIpLFxuICAgICAgICAgIGxpbmVzID0gY29udGVudHMubWFwKGZ1bmN0aW9uKGNvbnRlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBMaW5lLmZyb21Db250ZW50KGNvbnRlbnQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gbGluZTtcbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBsaW5lcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByaW1pdGl2ZUxleGVyO1xuXG5mdW5jdGlvbiBjb250ZW50c0Zyb21HcmFtbWFyKGdyYW1tYXIpIHtcbiAgY29uc3QgY29udGVudHMgPSBncmFtbWFyLnNwbGl0KCdcXG4nKS5yZWR1Y2UoZnVuY3Rpb24gKGNvbnRlbnRzLCBjb250ZW50KSB7XG4gICAgbGV0IG1hdGNoZXM7XG5cbiAgICBtYXRjaGVzID0gY29udGVudC5tYXRjaChMaW5lLm5hbWVFeHByZXNzaW9uUmVnRXhwKTtcblxuICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICBjb250ZW50cy5wdXNoKGNvbnRlbnQpO1xuXG4gICAgICByZXR1cm4gY29udGVudHM7XG4gICAgfVxuXG4gICAgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2goTGluZS5jb250aW51ZWRFeHByZXNzaW9uUmVnRXhwKTtcblxuICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwcmV2aW91c0NvbnRlbnQgPSBjb250ZW50cy5wb3AoKSxcbiAgICAgICAgICAgIGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKSxcbiAgICAgICAgICAgIGNvbnRpbnVlZEV4cHJlc3Npb24gPSBmaXJzdE1hdGNoLCAvLy9cbiAgICAgICAgICAgIGNvbnRpbnVpbmdDb250ZW50ID0gJyAnICsgY29udGludWVkRXhwcmVzc2lvbjtcblxuICAgICAgY29udGVudCA9IHByZXZpb3VzQ29udGVudCArIGNvbnRpbnVpbmdDb250ZW50O1xuXG4gICAgICBjb250ZW50cy5wdXNoKGNvbnRlbnQpO1xuXG4gICAgICByZXR1cm4gY29udGVudHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRlbnRzO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIGNvbnRlbnRzO1xufVxuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgU3ltYm9sU2VxdWVuY2UgPSByZXF1aXJlKCcuL3N5bWJvbFNlcXVlbmNlJyk7XG5cbmNsYXNzIExpbmUge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBzeW1ib2xTZXF1ZW5jZXMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuc3ltYm9sU2VxdWVuY2VzID0gc3ltYm9sU2VxdWVuY2VzO1xuICB9XG4gIFxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cbiAgXG4gIG1hcFN5bWJvbFNlcXVlbmNlcyhjYWxsYmFjaykge1xuICAgIHJldHVybiB0aGlzLnN5bWJvbFNlcXVlbmNlcy5tYXAoY2FsbGJhY2spO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCkge1xuICAgIGNvbnN0IG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKExpbmUubmFtZUV4cHJlc3Npb25SZWdFeHApLFxuICAgICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICAgIHRoaXJkTWF0Y2ggPSB0aGlyZChtYXRjaGVzKSxcbiAgICAgICAgICBuYW1lID0gc2Vjb25kTWF0Y2gsIC8vL1xuICAgICAgICAgIGV4cHJlc3Npb24gPSB0aGlyZE1hdGNoLCAvLy9cbiAgICAgICAgICBjaG9pY2VzID0gZXhwcmVzc2lvbi5zcGxpdChMaW5lLmNob2ljZURlbGltaXRlclJlZ0V4cCksXG4gICAgICAgICAgc3ltYm9sU2VxdWVuY2VzID0gY2hvaWNlcy5tYXAoZnVuY3Rpb24oY2hvaWNlKSB7XG4gICAgICAgICAgICBjb25zdCBzeW1ib2xTZXF1ZW5jZSA9IFN5bWJvbFNlcXVlbmNlLmZyb21DaG9pY2UoY2hvaWNlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHN5bWJvbFNlcXVlbmNlO1xuICAgICAgICAgIH0pO1xuICAgIFxuICAgIGNvbnN0IGxpbmUgPSBuZXcgTGluZShuYW1lLCBzeW1ib2xTZXF1ZW5jZXMpO1xuICAgIFxuICAgIHJldHVybiBsaW5lO1xuICB9XG59XG5cbkxpbmUuY2hvaWNlRGVsaW1pdGVyUmVnRXhwID0gL1xccytcXHxcXHMrLztcbkxpbmUubmFtZUV4cHJlc3Npb25SZWdFeHAgPSAvXlxccyooLio/KVxccys6Oj1cXHMrKC4qPylcXHMqJC87XG5MaW5lLmNvbnRpbnVlZEV4cHJlc3Npb25SZWdFeHAgPSAvXlxccyooXFx8XFxzKy4qPylcXHMqJC87XG5cbm1vZHVsZS5leHBvcnRzID0gTGluZTtcblxuZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuZnVuY3Rpb24gdGhpcmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzJdOyB9XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHNwZWNpYWxTeW1ib2xzID0gcmVxdWlyZSgnLi4vc3BlY2lhbFN5bWJvbHMnKTtcblxuY2xhc3MgU3ltYm9sU2VxdWVuY2Uge1xuICBjb25zdHJ1Y3RvcihzeW1ib2xzKSB7XG4gICAgdGhpcy5zeW1ib2xzID0gc3ltYm9scztcbiAgfVxuXG4gIG1hcFN5bWJvbHMoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5zeW1ib2xzLm1hcChjYWxsYmFjayk7XG4gIH1cbiAgXG4gIHJlZHVjZVN5bWJvbHMoY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICAgIHJldHVybiB0aGlzLnN5bWJvbHMucmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUNob2ljZShjaG9pY2UpIHtcbiAgICBjb25zdCBzeW1ib2xzID0gY2hvaWNlLnNwbGl0KHN5bWJvbERlbGltaXRlclJlZ0V4cCkucmVkdWNlKGZ1bmN0aW9uKHN5bWJvbHMsIHN5bWJvbCkge1xuICAgICAgICAgICAgaWYgKCAgKHN5bWJvbCA9PT0gJycpXG4gICAgICAgICAgICAgICB8fCAoc3ltYm9sID09PSB1bmRlZmluZWQpICApIHtcbiAgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzeW1ib2xzLnB1c2goc3ltYm9sKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gc3ltYm9scztcbiAgICAgICAgICB9LCBbXSksXG4gICAgICAgICAgZXhwcmVzc2lvbiA9IG5ldyBTeW1ib2xTZXF1ZW5jZShzeW1ib2xzKTtcbiAgICBcbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxufVxuXG5jb25zdCBzeW1ib2xEZWxpbWl0ZXJSZWdFeHAgPSBuZXcgUmVnRXhwKGBcXFxccyt8KCR7c3BlY2lhbFN5bWJvbHMuRU5EX09GX0xJTkV9KD86XFxcXD98XFxcXCt8XFxcXCopKXwoJHtzcGVjaWFsU3ltYm9scy5OT19XSElURVNQQUNFfSlgKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTeW1ib2xTZXF1ZW5jZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3Qgc3BlY2lhbFN5bWJvbHMgPSB7XG4gIEVORF9PRl9MSU5FIDogJzxFTkRfT0ZfTElORT4nLFxuICBOT19XSElURVNQQUNFIDogJzxOT19XSElURVNQQUNFPicgIFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBzcGVjaWFsU3ltYm9scztcbiIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgdXRpbCB7XG4gIHN0YXRpYyBtaW5pbXVtQmFyTWludXNPbmUoKSB7XG4gICAgY29uc3QgdmFsdWVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSxcbiAgICAgICAgICBtaW5pbXVtQmFyTWludXNPbmUgPSB2YWx1ZXMucmVkdWNlKGZ1bmN0aW9uKG1pbmltdW1CYXJNaW51c09uZSwgdmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA+IC0xKSB7XG4gICAgICAgICAgICAgIG1pbmltdW1CYXJNaW51c09uZSA9IChtaW5pbXVtQmFyTWludXNPbmUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5taW4obWluaW11bUJhck1pbnVzT25lLCB2YWx1ZSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlO1xuICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgIHJldHVybiBtaW5pbXVtQmFyTWludXNPbmU7XG4gICAgICAgICAgfSwgbnVsbCk7XG5cbiAgICByZXR1cm4gbWluaW11bUJhck1pbnVzT25lO1xuICB9XG5cbiAgc3RhdGljIHNwbGljZUFycmF5KGFycmF5LCBzdGFydCwgZGVsZXRlQ291bnQsIGl0ZW1zQXJyYXkpIHtcbiAgICBjb25zdCBhcmdzID0gW3N0YXJ0LCBkZWxldGVDb3VudF0uY29uY2F0KGl0ZW1zQXJyYXkpO1xuICBcbiAgICBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmFwcGx5KGFycmF5LCBhcmdzKTtcbiAgfVxuXG4gIHN0YXRpYyBzYW5pdGlzZUNvbnRlbnQoY29udGVudCkge1xuICAgIGNvbnN0IHNhbml0aXNlZENvbnRlbnQgPSBjb250ZW50LnJlcGxhY2UoLyYvLCcmYW1wOycpLnJlcGxhY2UoLzwvLCAnJmx0OycpLnJlcGxhY2UoLz4vLCAnJmd0OycpO1xuXG4gICAgcmV0dXJuIHNhbml0aXNlZENvbnRlbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB1dGlsO1xuIl19
