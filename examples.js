(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.examples = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var BNFParser = require('../bnf/parser'),
    CommonParser = require('../common/parser');

var BNFLexer = lexers.BNFLexer,
    BasicLexer = lexers.BasicLexer;

var BasicParser = function (_CommonParser) {
      _inherits(BasicParser, _CommonParser);

      function BasicParser() {
            _classCallCheck(this, BasicParser);

            return _possibleConstructorReturn(this, (BasicParser.__proto__ || Object.getPrototypeOf(BasicParser)).apply(this, arguments));
      }

      _createClass(BasicParser, null, [{
            key: 'fromGrammar',
            value: function fromGrammar(grammar) {
                  var lines = BNFLexer.linesFromGrammar(grammar),
                      significantTokenTypes = BasicLexer.getSignificantTokenTypes(),
                      mappings = {},
                      productions = BNFParser.parse(lines, significantTokenTypes, mappings),
                      basicParser = new BasicParser(productions);

                  return basicParser;
            }
      }]);

      return BasicParser;
}(CommonParser);

module.exports = BasicParser;

},{"../bnf/parser":3,"../common/parser":20,"occam-lexers":71}],3:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Production = require('../common/production'),
    ErrorNode = require('../common/node/nonTerminal/error');

var BNFParser = function () {
  function BNFParser() {
    _classCallCheck(this, BNFParser);
  }

  _createClass(BNFParser, null, [{
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
      } catch (exception) {
        productions = [];
      }

      return productions;
    }
  }]);

  return BNFParser;
}();

module.exports = BNFParser;

},{"../common/node/nonTerminal/error":7,"../common/production":33}],4:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers');

var SignificantToken = lexers.SignificantToken;


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
      whitespaceToken = type === SignificantToken.types.whitespace;

  return whitespaceToken;
}

},{"occam-lexers":71}],5:[function(require,module,exports){
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

},{"../parseTree/nonTerminalNode":16}],6:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayUtil = require('../../../arrayUtil'),
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

},{"../../../arrayUtil":1,"../nonTerminal":5}],7:[function(require,module,exports){
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

},{"../terminal":10}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtil = require('../../../arrayUtil');

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

},{"../../../arrayUtil":1}],10:[function(require,module,exports){
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

},{"../parseTree/terminalNode":18}],11:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TerminalNode = require('../terminal');

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
  }]);

  return EpsilonTerminalNode;
}(TerminalNode);

module.exports = EpsilonTerminalNode;

},{"../terminal":10}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
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

},{"./empty":14,"./horizontalBranch":15,"./verticalBranch":19}],14:[function(require,module,exports){
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

},{"../parseTree":12}],15:[function(require,module,exports){
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

},{"../parseTree":12}],16:[function(require,module,exports){
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

},{"./childNodes":13,"./empty":14,"./productionName":17,"./verticalBranch":19}],17:[function(require,module,exports){
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

},{"./verticalBranch":19}],18:[function(require,module,exports){
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

},{"./verticalBranch":19}],19:[function(require,module,exports){
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

},{"../parseTree":12}],20:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Context = require('./context');

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
    key: 'parse',
    value: function parse(tokens) {
      var production = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

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

},{"./context":4}],21:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers');

var specialSymbols = lexers.specialSymbols,
    SignificantToken = lexers.SignificantToken;


var TerminalNode = require('../../common/node/terminal');

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
            found = type === SignificantToken.types.endOfLine;

        if (found) {
          terminalNode = TerminalNode.fromSignificantToken(significantToken);
        }
      }

      if (terminalNode === null) {
        context.backtrack(savedIndex);
      }

      return terminalNode;
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

},{"../../common/node/terminal":10,"occam-lexers":71}],22:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EpsilonTerminalNode = require('../../common/node/terminal/epsilon');

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

},{"../../common/node/terminal/epsilon":11}],23:[function(require,module,exports){
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
          terminalPartOrProduction = this.terminalPartOrProduction(productions);

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

},{"./sequenceOfParts":27,"./zeroOrMoreParts":31}],24:[function(require,module,exports){
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
          terminalPartOrProduction = this.terminalPartOrProduction(productions);

      if (terminalPartOrProduction !== null) {
        var terminalPartOrProductionNodeOrNodes = terminalPartOrProduction.parse(context, noWhitespace),
            terminalPartOrProductionParsed = terminalPartOrProductionNodeOrNodes !== null;

        if (terminalPartOrProductionParsed) {
          nodes = terminalPartOrProductionNodeOrNodes;
        }
      }

      return nodes;
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

},{"./sequenceOfParts":27}],25:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProductionNamePart = function () {
  function ProductionNamePart(name, noWhitespace) {
    _classCallCheck(this, ProductionNamePart);

    this.name = name;
    this.noWhitespace = noWhitespace;
  }

  _createClass(ProductionNamePart, [{
    key: 'parse',
    value: function parse(context, noWhitespace) {
      noWhitespace = noWhitespace || this.noWhitespace; ///

      var nodeOrNodes = null;

      var productions = context.getProductions(),
          production = ProductionNamePart.findProduction(this.name, productions);

      if (production !== null) {
        nodeOrNodes = production.parse(context, noWhitespace);
      }

      return nodeOrNodes;
    }
  }], [{
    key: 'findProduction',
    value: function findProduction(name, productions) {
      var foundProduction = null;

      productions.some(function (production) {
        var productionNamePart = production.getName();

        if (name === productionNamePart) {
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
      var name = symbol,
          ///
      productionNamePart = new ProductionNamePart(name, noWhitespace);

      return productionNamePart;
    }
  }]);

  return ProductionNamePart;
}();

module.exports = ProductionNamePart;

},{}],26:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalNode = require('../../common/node/terminal');

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
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol, significantTokenTypes, noWhitespace) {
      var regularExpressionPart = null;

      var regularExpressionPartRegExp = /^\/([^/]+)\/$/,
          matches = symbol.match(regularExpressionPartRegExp);

      if (matches !== null) {
        var secondMatch = second(matches),
            regExpPattern = secondMatch,
            ///
        regExp = new RegExp('^' + regExpPattern + '$'); ///

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

},{"../../common/node/terminal":10}],27:[function(require,module,exports){
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
    key: 'terminalPartOrProduction',
    value: function terminalPartOrProduction(productions) {
      var production = ProductionNamePart.findProduction(this.productionName, productions),
          terminalPartOrProduction = this.terminalPart !== null ? this.terminalPart : production;

      return terminalPartOrProduction;
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

},{"./endOfLine":21,"./productionName":25,"./significantTokenType":28,"./terminalSymbol":29}],28:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalNode = require('../../common/node/terminal');

var SignificantTokenTypePart = function () {
  function SignificantTokenTypePart(type, noWhitespace) {
    _classCallCheck(this, SignificantTokenTypePart);

    this.type = type;
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
        var type = significantToken.getType(),
            parsed = type === this.type; ///

        if (parsed) {
          terminalNode = TerminalNode.fromSignificantToken(significantToken);
        }
      }

      if (terminalNode === null) {
        context.backtrack(savedIndex);
      }

      return terminalNode;
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

function second(array) {
  return array[1];
}

},{"../../common/node/terminal":10}],29:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalNode = require('../../common/node/terminal');

var TerminalSymbolPart = function () {
  function TerminalSymbolPart(symbol, noWhitespace) {
    _classCallCheck(this, TerminalSymbolPart);

    this.symbol = symbol;
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
            parsed = content === this.symbol; ///

        if (parsed) {
          terminalNode = TerminalNode.fromSignificantToken(significantToken);
        }
      }

      if (terminalNode === null) {
        context.backtrack(savedIndex);
      }

      return terminalNode;
    }
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol, significantTokenTypes, noWhitespace) {
      var terminalSymbolPart = null;

      var terminalSymbolPartRegExp = /^'([^']+)'$/,
          matches = symbol.match(terminalSymbolPartRegExp);

      if (matches !== null) {
        var secondMatch = second(matches);

        symbol = secondMatch; ///

        terminalSymbolPart = new TerminalSymbolPart(symbol, noWhitespace);
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

},{"../../common/node/terminal":10}],30:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalNode = require('../../common/node/terminal');

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

},{"../../common/node/terminal":10}],31:[function(require,module,exports){
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
    key: 'parse',
    value: function parse(context, noWhitespace) {
      noWhitespace = this.getNoWhitespace(); ///

      var nodes = [];

      var productions = context.getProductions(),
          terminalPartOrProduction = this.terminalPartOrProduction(productions);

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

},{"./sequenceOfParts":27}],32:[function(require,module,exports){
'use strict';

var EpsilonPart = require('./part/epsilon'),
    WildcardPart = require('./part/wildcard'),
    EndOfLinePart = require('./part/endOfLine'),
    OptionalPartPart = require('./part/optionalPart'),
    TerminalSymbolPart = require('./part/terminalSymbol'),
    OneOrMorePartsPart = require('./part/oneOrMoreParts'),
    ZeroOrMorePartsPart = require('./part/zeroOrMoreParts'),
    RegularExpressionPart = require('./part/regularExpression'),
    SignificantTokenTypePart = require('./part/significantTokenType'),
    ProductionNamePart = require('./part/productionName');

var Parts = [EpsilonPart, WildcardPart, EndOfLinePart, RegularExpressionPart, SignificantTokenTypePart, TerminalSymbolPart, OptionalPartPart, OneOrMorePartsPart, ZeroOrMorePartsPart, ProductionNamePart];

module.exports = Parts;

},{"./part/endOfLine":21,"./part/epsilon":22,"./part/oneOrMoreParts":23,"./part/optionalPart":24,"./part/productionName":25,"./part/regularExpression":26,"./part/significantTokenType":28,"./part/terminalSymbol":29,"./part/wildcard":30,"./part/zeroOrMoreParts":31}],33:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rule = require('./rule'),
    NonTerminalNode = require('../common/node/nonTerminal');

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

},{"../common/node/nonTerminal":5,"./rule":34}],34:[function(require,module,exports){
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

},{"./parts":32,"occam-lexers":71}],35:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easy = require('easy'),
    easylayout = require('easy-layout');

var leftColumnSelector = '#leftColumn',
    grammarTextareaSelector = 'textarea#grammar',
    contentTextareaSelector = 'textarea#content',
    parseTreeTextareaSelector = 'textarea#parseTree';

var Textarea = easy.Textarea,
    options = easylayout.options,
    SizeableElement = easylayout.SizeableElement,
    VerticalSplitter = easylayout.VerticalSplitter,
    TO_THE_RIGHT_OF = options.TO_THE_RIGHT_OF;


var leftColumn = new SizeableElement(leftColumnSelector),
    contentTextarea = new Textarea(contentTextareaSelector),
    grammarTextarea = new Textarea(grammarTextareaSelector),
    parseTreeTextarea = new Textarea(parseTreeTextareaSelector);

new VerticalSplitter('.left.vertical.splitter', TO_THE_RIGHT_OF, leftColumn);

var Example = function () {
  function Example() {
    _classCallCheck(this, Example);
  }

  _createClass(Example, null, [{
    key: 'getGrammarTextareaValue',
    value: function getGrammarTextareaValue() {
      return grammarTextarea.getValue();
    }
  }, {
    key: 'setGrammarTextareaValue',
    value: function setGrammarTextareaValue(value) {
      grammarTextarea.setValue(value);
    }
  }, {
    key: 'onContentTextareaKeyUp',
    value: function onContentTextareaKeyUp(handler) {
      contentTextarea.on('keyup', function () {
        var content = contentTextarea.getValue(); ///

        handler(content);
      });
    }
  }, {
    key: 'onGrammarTextareaChange',
    value: function onGrammarTextareaChange(handler) {
      grammarTextarea.onChange(handler);
    }
  }, {
    key: 'updateParseTree',
    value: function updateParseTree(lexer, parser) {
      try {
        var contentTextareaValue = contentTextarea.getValue(),
            content = contentTextareaValue; ///

        if (content !== '') {
          var contents = content.split(/\n/),
              lines = lexer.linesFromContents(contents),
              tokens = tokensFromLines(lines),
              documentNode = parser.parse(tokens);

          if (documentNode === null) {
            throw new Error('The document cannot be parsed for some reason.');
          }

          var parseTree = documentNode.parseTree(lines);

          parseTree.shiftLine(); //

          var parseTreeString = parseTree.toString(),
              parseTreeTextareaHTML = parseTreeString; ///

          parseTreeTextarea.html(parseTreeTextareaHTML);
        } else {
          Example.clearParseTree();
        }

        contentTextarea.removeClass('error');
      } catch (error) {
        contentTextarea.addClass('error');

        Example.clearParseTree();
      }
    }
  }, {
    key: 'clearParseTree',
    value: function clearParseTree() {
      var parseTreeTextareaHTML = '';

      parseTreeTextarea.html(parseTreeTextareaHTML);
    }
  }]);

  return Example;
}();

module.exports = Example;

function tokensFromLines(lines) {
  var tokens = lines.reduce(function (tokens, line) {
    var lineTokens = line.getTokens();

    tokens = tokens.concat(lineTokens);

    return tokens;
  }, []);

  return tokens;
}

},{"easy":48,"easy-layout":41}],36:[function(require,module,exports){
'use strict';

module.exports = {
  BasicExample: require('./examples/basic'),
  FlorenceExample: require('./examples/florence')
};

},{"./examples/basic":37,"./examples/florence":38}],37:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easy = require('easy'),
    lexers = require('occam-lexers');

var BasicParser = require('../basic/parser'),
    Example = require('../example');

var Textarea = easy.Textarea,
    BasicLexer = lexers.BasicLexer;


var terminalSymbolsRegExpPatternTextarea = void 0;

var terminalSymbolsRegExpPatternTextareaSelector = 'textarea#terminalSymbolsRegExpPattern',
    terminalSymbolsRegExpPattern = '\\+|\\-|\\*|\\/|\\(|\\)|\\d+',
    grammar = '\n  \n        expression                 ::= term operatorThenTerm*\n        \n        operatorThenTerm           ::= operator term\n        \n        operator                   ::= \'+\' | \'-\' | \'*\' | \'/\'\n        \n        term                       ::= naturalNumber | parenthesizedExpression\n        \n        naturalNumber              ::= /^\\d+$/\n        \n        parenthesizedExpression    ::= \'(\' expression \')\'\n      \n      ';

var basicLexer = null,
    basicParser = null;

var BasicExample = function () {
  function BasicExample() {
    _classCallCheck(this, BasicExample);
  }

  _createClass(BasicExample, null, [{
    key: 'run',
    value: function run() {
      terminalSymbolsRegExpPatternTextarea = new Textarea(terminalSymbolsRegExpPatternTextareaSelector);

      var grammarTextareaValue = grammar,
          ///
      terminalSymbolsRegExpPatternTextareaValue = terminalSymbolsRegExpPattern; ///

      Example.setGrammarTextareaValue(grammarTextareaValue);

      terminalSymbolsRegExpPatternTextarea.setValue(terminalSymbolsRegExpPatternTextareaValue);

      update();

      terminalSymbolsRegExpPatternTextarea.onChange(function () {
        update();
      });

      Example.onGrammarTextareaChange(function () {
        update();
      });

      Example.onContentTextareaKeyUp(function () {
        update();
      });
    }
  }]);

  return BasicExample;
}();

function update() {
  updateBasicLexer();
  updateBasicParser();

  if (basicLexer !== null) {
    Example.updateParseTree(basicLexer, basicParser);
  } else {
    Example.clearParseTree();
  }
}

module.exports = BasicExample;

function updateBasicLexer() {
  var terminalSymbolsRegExpPatternInputValue = terminalSymbolsRegExpPatternTextarea.getValue(),
      terminalSymbolsRegExpPattern = terminalSymbolsRegExpPatternInputValue,
      ///
  terminalSymbolsRegExpPatternIsValid = regExpPatternIsValid(terminalSymbolsRegExpPattern);

  if (terminalSymbolsRegExpPatternIsValid) {
    var terminalSymbolsRegExp = new RegExp(terminalSymbolsRegExpPattern),
        _grammar = [{ terminal: terminalSymbolsRegExp }];

    basicLexer = BasicLexer.fromGrammar(_grammar);

    terminalSymbolsRegExpPatternTextarea.removeClass('error');
  } else {
    terminalSymbolsRegExpPatternTextarea.addClass('error');

    basicLexer = null;
  }
}

function updateBasicParser() {
  var grammarTextareaValue = Example.getGrammarTextareaValue(),
      grammar = grammarTextareaValue; ///

  basicParser = BasicParser.fromGrammar(grammar);
}

function regExpPatternIsValid(regExpPattern) {
  var valid = true;

  try {
    new RegExp(regExpPattern);
  } catch (error) {
    valid = false;
  }

  return valid;
}

},{"../basic/parser":2,"../example":35,"easy":48,"occam-lexers":71}],38:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers');

var Example = require('../example'),
    FlorenceParser = require('../florence/parser'),
    florenceGrammar = require('../florence/grammar');

var FlorenceLexer = lexers.FlorenceLexer;


var florenceLexer = FlorenceLexer.fromNothing(),
    florenceParser = FlorenceParser.fromNothing();

var FlorenceExample = function () {
  function FlorenceExample() {
    _classCallCheck(this, FlorenceExample);
  }

  _createClass(FlorenceExample, null, [{
    key: 'run',
    value: function run() {
      var grammarTextareaValue = florenceGrammar; ///

      Example.setGrammarTextareaValue(grammarTextareaValue);

      update();

      Example.onContentTextareaKeyUp(function () {
        update();
      });
    }
  }]);

  return FlorenceExample;
}();

function update() {
  Example.updateParseTree(florenceLexer, florenceParser);
}

module.exports = FlorenceExample;

},{"../example":35,"../florence/grammar":39,"../florence/parser":40,"occam-lexers":71}],39:[function(require,module,exports){
'use strict';

var grammar = '\n\n    document                                          ::=   header? verticalSpace? body?\n                                              \n                                              \n                                              \n    header                                            ::=   includeDirective+\n    \n    includeDirective                                  ::=   \'include\'<NO_WHITESPACE>\'(\'<NO_WHITESPACE>[string]<NO_WHITESPACE>\')\' <END_OF_LINE>\n                                              \n                                              \n    body                                              ::=   part+  \n        \n    part                                              ::=   rule | axiom | theorem | lemma | verticalSpace | error\n    \n    \n    \n    rule                                              ::=   \'Rule\' parenthesisedLabels? <END_OF_LINE> premise(s)? conclusion proof?\n    \n    axiom                                             ::=   \'Axiom\' parenthesisedLabels? <END_OF_LINE> premise(s)? conclusion\n    \n    theorem                                           ::=   \'Theorem\' parenthesisedLabels? <END_OF_LINE> premise(s)? conclusion proof\n        \n    lemma                                             ::=   \'Lemma\' parenthesisedLabels? <END_OF_LINE> premise(s)? conclusion proof    \n    \n    \n    \n    parenthesisedLabels                               ::=   \'(\'<NO_WHITESPACE>labels<NO_WHITESPACE>\')\'\n    \n    labels                                            ::=   label<NO_WHITESPACE>commaThenLabel*\n    \n    commaThenLabel                                    ::=   \',\'<NO_WHITESPACE>label\n    \n    \n    \n    premise(s)                                        ::=   premise | premises\n    \n    premise                                           ::=   \'Premise\' <END_OF_LINE> (un)labelledStatement\n    \n    premises                                          ::=   \'Premises\' <END_OF_LINE> (un)labelledStatement (un)labelledStatement+\n    \n    conclusion                                        ::=   \'Conclusion\' <END_OF_LINE> (un)labelledStatement\n    \n    proof                                             ::=   \'Proof\' <END_OF_LINE> subLemmaOr(un)labelledStatementThenVerticalSpace* therefore\n    \n    therefore                                         ::=   \'Therefore\' <END_OF_LINE> (un)labelledStatement\n    \n    \n    \n    subLemmaOr(un)labelledStatementThenVerticalSpace  ::=   subLemmaOr(un)labelledStatement verticalSpace?   \n    \n    subLemmaOr(un)labelledStatement                   ::=   subLemma | (un)labelledStatement\n    \n    subLemma                                          ::=   suppose then? hence\n    \n    \n    \n    suppose                                           ::=   \'Suppose\' <END_OF_LINE> unlabelledStatement+\n    \n    then                                              ::=   \'Then\' <END_OF_LINE> subLemmaOr(un)labelledStatement+\n    \n    hence                                             ::=   \'Hence\' <END_OF_LINE> (un)labelledStatement\n    \n    \n    \n    (un)labelledStatement                             ::=   unlabelledStatement | labelledStatement\n    \n    labelledStatement                                 ::=   statement \'by\' label <END_OF_LINE>  \n    \n    unlabelledStatement                               ::=   statement <END_OF_LINE>  \n    \n    statement                                         ::=   specialOrUnassigned+ \n    \n    specialOrUnassigned                               ::=   [special] | [unassigned]\n    \n    \n    \n    label                                             ::=   [unassigned]\n     \n     \n     \n    verticalSpace                                     ::=   <END_OF_LINE>+\n    \n    \n    \n    error                                             ::=   *\n    \n';

module.exports = grammar;

},{}],40:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var grammar = require('./grammar'),
    BNFParser = require('../bnf/parser'),
    CommonParser = require('../common/parser'),
    TransparentNode = require('../common/node/nonTerminal/transparent'),
    DiscardSecondChildNode = require('../common/node/nonTerminal/discardSecondChild'),
    TransparentThenKeepSecondNode = require('../common/node/nonTerminal/transparentThenKeepSecond');

var BNFLexer = lexers.BNFLexer,
    FlorenceLexer = lexers.FlorenceLexer;

var FlorenceParser = function (_CommonParser) {
  _inherits(FlorenceParser, _CommonParser);

  function FlorenceParser() {
    _classCallCheck(this, FlorenceParser);

    return _possibleConstructorReturn(this, (FlorenceParser.__proto__ || Object.getPrototypeOf(FlorenceParser)).apply(this, arguments));
  }

  _createClass(FlorenceParser, null, [{
    key: 'fromNothing',
    value: function fromNothing(mappings) {
      var lines = BNFLexer.linesFromGrammar(grammar),
          significantTokenTypes = FlorenceLexer.getSignificantTokenTypes();

      mappings = Object.assign({
        'part': TransparentNode,
        'premise': TransparentNode,
        'premises': TransparentNode,
        'statement': TransparentNode,
        'premise(s)': DiscardSecondChildNode,
        'conclusion': DiscardSecondChildNode,
        'commaThenLabel': TransparentThenKeepSecondNode,
        'labelledStatement': DiscardSecondChildNode,
        'parenthesisedLabels': TransparentThenKeepSecondNode,
        '(un)labelledStatement': TransparentNode,
        'specialOrUnassigned': TransparentNode,
        'subLemmaOr(un)labelledStatement': TransparentNode
      }, mappings);

      var productions = BNFParser.parse(lines, significantTokenTypes, mappings),
          florenceParser = new FlorenceParser(productions);

      return florenceParser;
    }
  }]);

  return FlorenceParser;
}(CommonParser);

module.exports = FlorenceParser;

},{"../bnf/parser":3,"../common/node/nonTerminal/discardSecondChild":6,"../common/node/nonTerminal/transparent":8,"../common/node/nonTerminal/transparentThenKeepSecond":9,"../common/parser":20,"./grammar":39,"occam-lexers":71}],41:[function(require,module,exports){
'use strict';

module.exports = {
  options: require('./lib/options'),
  SizeableElement: require('./lib/sizeableElement'),
  VerticalSplitter: require('./lib/splitter/vertical'),
  HorizontalSplitter: require('./lib/splitter/horizontal')
};

},{"./lib/options":43,"./lib/sizeableElement":44,"./lib/splitter/horizontal":46,"./lib/splitter/vertical":47}],42:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easy = require('easy'),
    Body = easy.Body;

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

},{"easy":48}],43:[function(require,module,exports){
'use strict';

var ABOVE = +1,
    BELOW = -1,
    TO_THE_LEFT_OF = +1,
    TO_THE_RIGHT_OF = -1,
    options = {
  situated: {
    ABOVE: ABOVE,
    BELOW: BELOW,
    TO_THE_LEFT_OF: TO_THE_LEFT_OF,
    TO_THE_RIGHT_OF: TO_THE_RIGHT_OF
  },
  ESCAPE_KEY_STOPS_DRAGGING: 'ESCAPE_KEY_STOPS_DRAGGING'
};

module.exports = options;

},{}],44:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy'),
    Div = easy.Div;

var SizeableElement = function (_Div) {
  _inherits(SizeableElement, _Div);

  function SizeableElement() {
    _classCallCheck(this, SizeableElement);

    return _possibleConstructorReturn(this, (SizeableElement.__proto__ || Object.getPrototypeOf(SizeableElement)).apply(this, arguments));
  }

  _createClass(SizeableElement, [{
    key: 'setWidth',
    value: function setWidth(width) {
      var minimumWidth = this.getMinimumWidth(),
          maximumWidth = this.getMaximumWidth();

      if (minimumWidth !== undefined) {
        width = Math.max(width, minimumWidth);
      }
      if (maximumWidth !== undefined) {
        width = Math.min(width, maximumWidth);
      }

      _get(SizeableElement.prototype.__proto__ || Object.getPrototypeOf(SizeableElement.prototype), 'setWidth', this).call(this, width);
    }
  }, {
    key: 'setHeight',
    value: function setHeight(height) {
      var minimumHeight = this.getMinimumHeight(),
          maximumHeight = this.getMaximumHeight();

      if (minimumHeight !== undefined) {
        height = Math.max(height, minimumHeight);
      }
      if (maximumHeight !== undefined) {
        height = Math.min(height, maximumHeight);
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
      return Div.fromProperties(SizeableElement, properties);
    }
  }]);

  return SizeableElement;
}(Div);

module.exports = SizeableElement;

function inPixels(quantity) {
  var pixels = void 0;

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

},{"easy":48}],45:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy'),
    window = easy.window,
    Element = easy.Element;


var options = require('./options');

var ESCAPE_KEYCODE = 27;

var Splitter = function (_Element) {
  _inherits(Splitter, _Element);

  function Splitter(selector, situated, sizeableElement, dragHandler) {
    _classCallCheck(this, Splitter);

    var _this = _possibleConstructorReturn(this, (Splitter.__proto__ || Object.getPrototypeOf(Splitter)).call(this, selector));

    _this.situated = situated;
    _this.sizeableElement = sizeableElement;
    _this.dragHandler = dragHandler;

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
      var escapeKeyStopsDragging = this.hasOption(options.ESCAPE_KEY_STOPS_DRAGGING);

      if (escapeKeyStopsDragging) {
        window.on('keydown', this.keyDownHandler.bind(this));
      }

      this.dragging = true;
    }
  }, {
    key: 'stopDragging',
    value: function stopDragging() {
      var escapeKeyStopsDragging = this.hasOption(options.ESCAPE_KEY_STOPS_DRAGGING);

      if (escapeKeyStopsDragging) {
        window.off('keydown', this.keyDownHandler.bind(this));
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
    value: function keyDownHandler(event) {
      var keyCode = event.keyCode;

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
      var situated = properties.situated,
          sizeableElement = properties.sizeableElement,
          onDrag = properties.onDrag,
          dragHandler = onDrag; ///

      return Element.fromProperties(Class, properties, situated, sizeableElement, dragHandler);
    }
  }]);

  return Splitter;
}(Element);

Object.assign(Splitter, {
  tagName: 'div',
  ignoredAttributes: ['situated', 'sizeableElement', 'onDrag']
});

module.exports = Splitter;

},{"./options":43,"easy":48}],46:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cursor = require('../cursor'),
    Splitter = require('../splitter');

var HorizontalSplitter = function (_Splitter) {
  _inherits(HorizontalSplitter, _Splitter);

  function HorizontalSplitter(selector, situated, sizeableElement, dragHandler) {
    _classCallCheck(this, HorizontalSplitter);

    var _this = _possibleConstructorReturn(this, (HorizontalSplitter.__proto__ || Object.getPrototypeOf(HorizontalSplitter)).call(this, selector, situated, sizeableElement, dragHandler));

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
          var relativeMouseTop = mouseTop - this.mouseTop,
              height = this.sizeableElementHeight - this.situated * relativeMouseTop;

          this.sizeableElement.setHeight(height);

          var sizeableElementHeight = this.sizeableElement.getHeight();

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
        cursor.rowResize();

        this.mouseTop = mouseTop;

        this.sizeableElementHeight = this.sizeableElement.getHeight();

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

module.exports = HorizontalSplitter;

},{"../cursor":42,"../splitter":45}],47:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cursor = require('../cursor'),
    Splitter = require('../splitter');

var VerticalSplitter = function (_Splitter) {
  _inherits(VerticalSplitter, _Splitter);

  function VerticalSplitter(selector, situated, sizeableElement, dragHandler) {
    _classCallCheck(this, VerticalSplitter);

    var _this = _possibleConstructorReturn(this, (VerticalSplitter.__proto__ || Object.getPrototypeOf(VerticalSplitter)).call(this, selector, situated, sizeableElement, dragHandler));

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
          var relativeMouseLeft = mouseLeft - this.mouseLeft,
              width = this.sizeableElementWidth - this.situated * relativeMouseLeft;

          this.sizeableElement.setWidth(width);

          var sizeableElementWidth = this.sizeableElement.getWidth();

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
        cursor.columnResize();

        this.mouseLeft = mouseLeft;

        this.sizeableElementWidth = this.sizeableElement.getWidth();

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

module.exports = VerticalSplitter;

},{"../cursor":42,"../splitter":45}],48:[function(require,module,exports){
'use strict';

module.exports = {
  window: require('./lib/window'),
  document: require('./lib/document'),
  TextElement: require('./lib/textElement'),
  Div: require('./lib/element/div'),
  Span: require('./lib/element/span'),
  Body: require('./lib/element/body'),
  Element: require('./lib/element'),
  Link: require('./lib/inputElement/link'),
  Input: require('./lib/inputElement/input'),
  Select: require('./lib/inputElement/select'),
  Button: require('./lib/inputElement/button'),
  Checkbox: require('./lib/inputElement/checkbox'),
  Textarea: require('./lib/inputElement/textarea'),
  InputElement: require('./lib/inputElement'),
  Bounds: require('./lib/misc/bounds'),
  Offset: require('./lib/misc/offset'),
  React: require('./lib/react')
};

},{"./lib/document":49,"./lib/element":50,"./lib/element/body":51,"./lib/element/div":52,"./lib/element/span":53,"./lib/inputElement":54,"./lib/inputElement/button":55,"./lib/inputElement/checkbox":56,"./lib/inputElement/input":57,"./lib/inputElement/link":58,"./lib/inputElement/select":59,"./lib/inputElement/textarea":60,"./lib/misc/bounds":61,"./lib/misc/offset":62,"./lib/react":68,"./lib/textElement":69,"./lib/window":70}],49:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var eventMixin = require('./mixin/event'),
    clickMixin = require('./mixin/click'),
    mouseMixin = require('./mixin/mouse');

var Document = function Document() {
  _classCallCheck(this, Document);

  this.domElement = document;

  this.handlersMap = {};
};

Object.assign(Document.prototype, eventMixin);
Object.assign(Document.prototype, clickMixin);
Object.assign(Document.prototype, mouseMixin);

module.exports = new Document(); ///

},{"./mixin/click":63,"./mixin/event":64,"./mixin/mouse":66}],50:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Offset = require('./misc/offset'),
    Bounds = require('./misc/bounds'),
    jsxMixin = require('./mixin/jsx'),
    eventMixin = require('./mixin/event'),
    clickMixin = require('./mixin/click'),
    mouseMixin = require('./mixin/mouse'),
    resizeMixin = require('./mixin/resize');

var Element = function () {
  function Element(selector) {
    _classCallCheck(this, Element);

    this.domElement = domElementFromSelector(selector);

    this.domElement.__element__ = this;

    this.handlersMap = {};
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
      var includeBorder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var boundingClientRect = this.domElement.getBoundingClientRect(),
          bounds = Bounds.fromBoundingClientRect(boundingClientRect);

      return bounds;
    }
  }, {
    key: 'getWidth',
    value: function getWidth() {
      var includeBorder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var width = includeBorder ? this.domElement.offsetWidth : this.domElement.clientWidth;

      return width;
    }
  }, {
    key: 'setWidth',
    value: function setWidth(width) {
      this.domElement.style.width = width + 'px';
    }
  }, {
    key: 'getHeight',
    value: function getHeight() {
      var includeBorder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var height = includeBorder ? this.domElement.offsetHeight : this.domElement.clientHeight;

      return height;
    }
  }, {
    key: 'setHeight',
    value: function setHeight(height) {
      this.domElement.style.height = height + 'px';
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
    key: 'appendTo',
    value: function appendTo(parentElement) {
      var parentDOMElement = parentElement.domElement,
          firstSiblingDOMElement = parentDOMElement.firstChild; ///

      parentDOMElement.insertBefore(this.domElement, firstSiblingDOMElement);
    }
  }, {
    key: 'prependTo',
    value: function prependTo(parentElement) {
      var parentDOMElement = parentElement.domElement;

      parentDOMElement.insertBefore(this.domElement, null); ///
    }
  }, {
    key: 'removeFrom',
    value: function removeFrom(parentElement) {
      var parentDOMElement = parentElement.domElement;

      parentDOMElement.removeChild(this.domElement);
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
    key: 'html',
    value: function html(_html) {
      if (_html === undefined) {
        _html = this.domElement.innerHTML; ///

        return _html;
      } else {
        var innerHTML = _html; ///

        this.domElement.innerHTML = innerHTML;
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
          html = '<' + tagName + '></' + tagName + '>',
          element = Element.fromHTML.apply(Element, [Class, html].concat(remainingArguments));

      var ignoredProperties = Class.ignoredProperties,
          additionalProperties = Class.additionalProperties;

      element.applyProperties(properties, ignoredProperties, additionalProperties);

      return element;
    }
  }]);

  return Element;
}();

Object.assign(Element.prototype, jsxMixin);
Object.assign(Element.prototype, eventMixin);
Object.assign(Element.prototype, clickMixin);
Object.assign(Element.prototype, mouseMixin);
Object.assign(Element.prototype, resizeMixin);

Element.LEFT_MOUSE_BUTTON = 0;
Element.MIDDLE_MOUSE_BUTTON = 1;
Element.RIGHT_MOUSE_BUTTON = 2;

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
  });

  return filteredDOMNodes;
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

},{"./misc/bounds":61,"./misc/offset":62,"./mixin/click":63,"./mixin/event":64,"./mixin/jsx":65,"./mixin/mouse":66,"./mixin/resize":67}],51:[function(require,module,exports){
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
    value: function fromProperties(Class, properties) {
      if (arguments.length === 1) {
        properties = Class;
        Class = Body;
      }

      return Element.fromProperties(Class, properties);
    }
  }]);

  return Body;
}(Element);

Body.tagName = 'body';

module.exports = Body;

},{"../element":50}],52:[function(require,module,exports){
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
    value: function fromProperties(Class, properties) {
      if (arguments.length === 1) {
        properties = Class;
        Class = Div;
      }

      return Element.fromProperties(Class, properties);
    }
  }]);

  return Div;
}(Element);

Div.tagName = 'div';

module.exports = Div;

},{"../element":50}],53:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element');

var Span = function (_Element) {
  _inherits(Span, _Element);

  function Span(selector) {
    _classCallCheck(this, Span);

    return _possibleConstructorReturn(this, (Span.__proto__ || Object.getPrototypeOf(Span)).call(this, selector));
  }

  _createClass(Span, [{
    key: 'clone',
    value: function clone() {
      return Span.clone(this);
    }
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
    value: function fromProperties(Class, properties) {
      if (arguments.length === 1) {
        properties = Class;
        Class = Span;
      }

      return Element.fromProperties(Class, properties);
    }
  }]);

  return Span;
}(Element);

Span.tagName = 'span';

module.exports = Span;

},{"../element":50}],54:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('./element');

var InputElement = function (_Element) {
  _inherits(InputElement, _Element);

  function InputElement(selector) {
    _classCallCheck(this, InputElement);

    return _possibleConstructorReturn(this, (InputElement.__proto__ || Object.getPrototypeOf(InputElement)).call(this, selector));
  }

  _createClass(InputElement, [{
    key: 'hasFocus',
    value: function hasFocus() {
      var focus = document.activeElement === this.domElement; ///

      return focus;
    }
  }, {
    key: 'focus',
    value: function focus() {
      this.domElement.focus();
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
      for (var _len4 = arguments.length, remainingArguments = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
        remainingArguments[_key4 - 2] = arguments[_key4];
      }

      return Element.fromProperties.apply(Element, [Class, properties].concat(remainingArguments));
    }
  }]);

  return InputElement;
}(Element);

module.exports = InputElement;

},{"./element":50}],55:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputElement = require('../inputElement');

var Button = function (_InputElement) {
  _inherits(Button, _InputElement);

  function Button(selector, clickHandler) {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, selector));

    if (clickHandler) {
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
    value: function onClick(handler) {
      if (handler.intermediateHandler === undefined) {
        handler.intermediateHandler = defaultIntermediateClickHandler;
      }

      _get(Button.prototype.__proto__ || Object.getPrototypeOf(Button.prototype), 'onClick', this).call(this, handler);
    }
  }, {
    key: 'offClick',
    value: function offClick(handler) {
      _get(Button.prototype.__proto__ || Object.getPrototypeOf(Button.prototype), 'offClick', this).call(this, handler);
    }
  }], [{
    key: 'clone',
    value: function clone(element, clickHandler) {
      return InputElement.clone(Button, element, clickHandler);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html, clickHandler) {
      return InputElement.fromHTML(Button, html, clickHandler);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement, clickHandler) {
      return InputElement.fromDOMElement(Button, domElement, clickHandler);
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var onClick = properties.onClick,
          clickHandler = onClick; ///

      return InputElement.fromProperties(Button, properties, clickHandler);
    }
  }]);

  return Button;
}(InputElement);

Object.assign(Button, {
  tagName: 'button',
  ignoredProperties: ['onClick']
});

module.exports = Button;

function defaultIntermediateClickHandler(handler, event) {
  var mouseButton = event.button,
      preventDefault = handler(mouseButton);

  return preventDefault;
}

},{"../inputElement":54}],56:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputElement = require('../inputElement');

var Checkbox = function (_InputElement) {
  _inherits(Checkbox, _InputElement);

  function Checkbox(selector, changeHandler) {
    _classCallCheck(this, Checkbox);

    var _this = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, selector));

    if (changeHandler) {
      _this.onChange(changeHandler);
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
    value: function onChange(handler) {
      if (handler.intermediateHandler === undefined) {
        handler.intermediateHandler = defaultIntermediateChangeHandler.bind(this);
      }

      this.on('click', handler); ///
    }
  }, {
    key: 'offChange',
    value: function offChange(handler) {
      this.off('click', handler); ///
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
  }], [{
    key: 'clone',
    value: function clone(element, changeHandler) {
      return InputElement.clone(Checkbox, element, changeHandler);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html, changeHandler) {
      return InputElement.fromHTML(Checkbox, html, changeHandler);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement, changeHandler) {
      return InputElement.fromDOMElement(Checkbox, domElement, changeHandler);
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var onChange = properties.onChange,
          changeHandler = onChange; ///    

      return InputElement.fromProperties(Checkbox, properties, changeHandler);
    }
  }]);

  return Checkbox;
}(InputElement);

Object.assign(Checkbox, {
  tagName: 'input',
  ignoredProperties: ['onChange'],
  additionalProperties: {
    type: 'checkbox'
  }
});

module.exports = Checkbox;

function defaultIntermediateChangeHandler(handler, event) {
  var checked = this.isChecked(),
      preventDefault = handler(checked);

  return preventDefault;
}

},{"../inputElement":54}],57:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputElement = require('../inputElement');

var Input = function (_InputElement) {
  _inherits(Input, _InputElement);

  function Input(selector, changeHandler) {
    _classCallCheck(this, Input);

    var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, selector));

    if (changeHandler) {
      _this.onChange(changeHandler);
    }
    return _this;
  }

  _createClass(Input, [{
    key: 'clone',
    value: function clone(changeHandler) {
      return Input.clone(this, changeHandler);
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
    key: 'onChange',
    value: function onChange(handler) {
      if (handler.intermediateHandler === undefined) {
        handler.intermediateHandler = defaultIntermediateChangeHandler.bind(this);
      }

      this.on('change', handler);
    }
  }, {
    key: 'offChange',
    value: function offChange(handler) {
      this.off('change', handler);
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
      var onChange = properties.onChange,
          changeHandler = onChange; ///    

      return InputElement.fromProperties(Input, properties, changeHandler);
    }
  }]);

  return Input;
}(InputElement);

Object.assign(Input, {
  tagName: 'input',
  ignoredProperties: ['onChange']
});

module.exports = Input;

function defaultIntermediateChangeHandler(handler, event) {
  var value = this.getValue(),
      preventDefault = handler(value);

  return preventDefault;
}

},{"../inputElement":54}],58:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputElement = require('../inputElement');

var Link = function (_InputElement) {
  _inherits(Link, _InputElement);

  function Link(selector, clickHandler) {
    _classCallCheck(this, Link);

    var _this = _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).call(this, selector));

    if (clickHandler) {
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
    value: function onClick(handler) {
      if (handler.intermediateHandler === undefined) {
        handler.intermediateHandler = defaultIntermediateClickHandler.bind(this);
      }

      this.on('click', handler);
    }
  }, {
    key: 'offClick',
    value: function offClick(handler) {
      this.off('click', handler);
    }
  }], [{
    key: 'clone',
    value: function clone(element, clickHandler) {
      return InputElement.clone(Link, element, clickHandler);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html, clickHandler) {
      return InputElement.fromHTML(Link, html, clickHandler);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement, clickHandler) {
      return InputElement.fromDOMElement(Link, domElement, clickHandler);
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var onClick = properties.onClick,
          clickHandler = onClick; ///    

      return InputElement.fromProperties(Link, properties, clickHandler);
    }
  }]);

  return Link;
}(InputElement);

Object.assign(Link, {
  tagName: 'a',
  ignoredProperties: ['onClick']
});

module.exports = Link;

function defaultIntermediateClickHandler(handler, event) {
  var href = this.getAttribute('href'),
      preventDefault = handler(href);

  return preventDefault;
}

},{"../inputElement":54}],59:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputElement = require('../inputElement');

var Select = function (_InputElement) {
  _inherits(Select, _InputElement);

  function Select(selector, changeHandler) {
    _classCallCheck(this, Select);

    var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, selector));

    if (changeHandler) {
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
    key: 'getSelectedOptionValue',
    value: function getSelectedOptionValue() {
      return this.domElement.value;
    } ///

  }, {
    key: 'setSelectedOptionByValue',
    value: function setSelectedOptionByValue(value) {
      this.domElement.value = value;
    } ///

  }, {
    key: 'onChange',
    value: function onChange(handler) {
      if (handler.intermediateHandler === undefined) {
        handler.intermediateHandler = defaultIntermediateChangeHandler.bind(this);
      }

      this.on('change', handler);
    }
  }, {
    key: 'offChange',
    value: function offChange(handler) {
      this.off('change', handler);
    }
  }], [{
    key: 'clone',
    value: function clone(element, changeHandler) {
      return InputElement.clone(Select, element, changeHandler);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html, changeHandler) {
      return InputElement.fromHTML(Select, html, changeHandler);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement, changeHandler) {
      return InputElement.fromDOMElement(Select, domElement, changeHandler);
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var onChange = properties.onChange,
          changeHandler = onChange; ///    

      return InputElement.fromProperties(Select, properties, changeHandler);
    }
  }]);

  return Select;
}(InputElement);

Object.assign(Select, {
  tagName: 'select',
  ignoredProperties: ['onChange']
});

module.exports = Select;

function defaultIntermediateChangeHandler(handler, event) {
  var selectedOptionValue = this.getSelectedOptionValue(),
      preventDefault = handler(selectedOptionValue);

  return preventDefault;
}

},{"../inputElement":54}],60:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputElement = require('../inputElement');

var Textarea = function (_InputElement) {
  _inherits(Textarea, _InputElement);

  function Textarea(selector, changeHandler, scrollHandler) {
    _classCallCheck(this, Textarea);

    var _this = _possibleConstructorReturn(this, (Textarea.__proto__ || Object.getPrototypeOf(Textarea)).call(this, selector));

    if (changeHandler) {
      _this.onChange(changeHandler);
    }

    if (scrollHandler) {
      _this.onScroll(scrollHandler);
    }
    return _this;
  }

  _createClass(Textarea, [{
    key: 'clone',
    value: function clone(changeHandler) {
      return Textarea.clone(this, changeHandler);
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
    key: 'getScrollTop',
    value: function getScrollTop() {
      return this.domElement.scrollTop;
    }
  }, {
    key: 'getScrollLeft',
    value: function getScrollLeft() {
      return this.domElement.scrollLeft;
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
    key: 'setScrollTop',
    value: function setScrollTop(scrollTop) {
      this.domElement.scrollTop = scrollTop;
    }
  }, {
    key: 'setScrollLeft',
    value: function setScrollLeft(scrollLeft) {
      this.domElement.scrollLeft = scrollLeft;
    }
  }, {
    key: 'onChange',
    value: function onChange(handler) {
      if (handler.intermediateHandler === undefined) {
        handler.intermediateHandler = defaultIntermediateChangeHandler.bind(this);
      }

      this.on('change', handler);
    }
  }, {
    key: 'offChange',
    value: function offChange(handler) {
      this.off('change', handler);
    }
  }, {
    key: 'onScroll',
    value: function onScroll(handler) {
      if (handler.intermediateHandler === undefined) {
        handler.intermediateHandler = defaultIntermediateScrollHandler.bind(this);
      }

      this.on('scroll', handler);
    }
  }, {
    key: 'offScroll',
    value: function offScroll(handler) {
      this.off('scroll', handler);
    }
  }, {
    key: 'onResize',
    value: function onResize(resizeHandler) {}
  }, {
    key: 'offResize',
    value: function offResize(resizeHandler) {}
  }], [{
    key: 'clone',
    value: function clone(element, changeHandler, scrollHandler) {
      return InputElement.clone(Textarea, element, changeHandler, scrollHandler);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html, changeHandler, scrollHandler) {
      return InputElement.fromHTML(Textarea, html, changeHandler, scrollHandler);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement, changeHandler, scrollHandler) {
      return InputElement.fromDOMElement(Textarea, domElement, changeHandler, scrollHandler);
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      var onChange = properties.onChange,
          onScroll = properties.onScroll,
          changeHandler = onChange,
          scrollHandler = onScroll; ///

      return InputElement.fromProperties(Textarea, properties, changeHandler, scrollHandler);
    }
  }]);

  return Textarea;
}(InputElement);

Object.assign(Textarea, {
  tagName: 'textarea',
  ignoredProperties: ['onChange', 'onScroll']
});

module.exports = Textarea;

function defaultIntermediateChangeHandler(handler, event) {
  var value = this.getValue(),
      preventDefault = handler(value);

  return preventDefault;
}

function defaultIntermediateScrollHandler(handler, event) {
  var scrollTop = this.getScrollTop(),
      scrollLeft = this.getScrollLeft(),
      preventDefault = handler(scrollTop, scrollLeft);

  return preventDefault;
}

},{"../inputElement":54}],61:[function(require,module,exports){
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

},{}],62:[function(require,module,exports){
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

},{}],63:[function(require,module,exports){
'use strict';

function onClick(handler) {
  if (handler.intermediateHandler === undefined) {
    handler.intermediateHandler = defaultIntermediateHandler;
  }

  this.on('click', handler);
}

function offClick(handler) {
  this.off('click', handler);
}

var clickMixin = {
  onClick: onClick,
  offClick: offClick
};

module.exports = clickMixin;

function defaultIntermediateHandler(handler, event) {
  var mouseTop = event.pageY,
      ///
  mouseLeft = event.pageX,
      ///
  mouseButton = event.button,
      ///
  preventDefault = handler(mouseTop, mouseLeft, mouseButton);

  return preventDefault;
}

},{}],64:[function(require,module,exports){
'use strict';

function on(eventTypes, handler) {
  eventTypes = eventTypes.split(' '); ///

  eventTypes.forEach(function (eventType) {
    var addEventListener = this.addHandler(eventType, handler);

    if (addEventListener) {
      this.domElement.addEventListener(eventType, eventListener.bind(this));
    }
  }.bind(this));
}

function off(eventTypes, handler) {
  eventTypes = eventTypes.split(' '); ///

  eventTypes.forEach(function (eventType) {
    var removeEventListener = this.removeHandler(eventType, handler);

    if (removeEventListener) {
      this.domElement.removeEventListener(eventType, eventListener.bind(this));
    }
  }.bind(this));
}

function addHandler(eventType, handler) {
  var addEventListener = false,
      handlers = this.handlersMap[eventType];

  if (handlers === undefined) {
    handlers = [];

    this.handlersMap[eventType] = handlers;

    addEventListener = true;
  }

  handlers.push(handler);

  return addEventListener;
}

function removeHandler(eventType, handler) {
  var removeEventListener = false,
      handlers = this.handlersMap[eventType];

  if (handlers.length === 0) {
    delete this.handlersMap[eventType];

    removeEventListener = true;
  } else {
    var index = handlers.indexOf(handler);

    if (index > -1) {
      var deleteCount = 1;

      handlers.splice(index, deleteCount);
    }
  }

  return removeEventListener;
}

var eventMixin = {
  on: on,
  off: off,
  addHandler: addHandler,
  removeHandler: removeHandler
};

module.exports = eventMixin;

function eventListener(event) {
  var eventType = event.type,
      handlers = this.handlersMap[eventType];

  var preventEventDefault = false;

  handlers.forEach(function (handler) {
    if (handler.intermediateHandler !== undefined) {
      var preventDefault = handler.intermediateHandler(handler, event);

      if (preventDefault === true) {
        preventEventDefault = true;
      }
    } else {
      var _preventDefault = handler(event);

      if (_preventDefault === true) {
        preventEventDefault = true;
      }
    }
  });

  if (preventEventDefault) {
    event.preventDefault();
  }
}

},{}],65:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function applyProperties(properties, ignoredProperties, additionalProperties) {
  this.properties = {};

  properties = Object.assign({}, properties); ///

  unassign(properties, ignoredProperties);

  Object.assign(properties, additionalProperties);

  var names = Object.keys(properties);

  names.forEach(function (name) {
    if (name === 'childElements') {
      var childElements = properties['childElements'];

      childElements.forEach(function (childElement) {
        this.append(childElement);
      }.bind(this));
    } else {
      var value = properties[name];

      if (false) {} else if (isHandlerName(name)) {
        addHandler(this, name, value);
      } else if (isAttributeName(name)) {
        addAttribute(this, name, value);
      } else {
        this.properties[name] = value;
      }
    }
  }.bind(this));
}

var jsxMixin = {
  applyProperties: applyProperties
};

module.exports = jsxMixin;

function unassign(properties, ignoredProperties) {
  if (ignoredProperties !== undefined) {
    var ignoredPropertyNames = ignoredProperties; ///

    ignoredPropertyNames.forEach(function (ignoredPropertyName) {
      delete properties[ignoredPropertyName];
    });
  }
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

function isHandlerName(name) {
  return name.match(/^on/);
}

function isAttributeName(name) {
  return attributeNames.includes(name);
}

var attributeNames = ['accept', 'acceptCharset', 'accessKey', 'action', 'allowFullScreen', 'allowTransparency', 'alt', 'async', 'autoComplete', 'autoFocus', 'autoPlay', 'capture', 'cellPadding', 'cellSpacing', 'challenge', 'charSet', 'checked', 'cite', 'classID', 'className', 'colSpan', 'cols', 'content', 'contentEditable', 'contextMenu', 'controls', 'coords', 'crossOrigin', 'data', 'dateTime', 'default', 'defer', 'dir', 'disabled', 'download', 'draggable', 'encType', 'form', 'formAction', 'formEncType', 'formMethod', 'formNoValidate', 'formTarget', 'frameBorder', 'headers', 'height', 'hidden', 'high', 'href', 'hrefLang', 'htmlFor', 'httpEquiv', 'icon', 'id', 'inputMode', 'integrity', 'is', 'keyParams', 'keyType', 'kind', 'label', 'lang', 'list', 'loop', 'low', 'manifest', 'marginHeight', 'marginWidth', 'max', 'maxLength', 'media', 'mediaGroup', 'method', 'min', 'minLength', 'multiple', 'muted', 'name', 'noValidate', 'nonce', 'open', 'optimum', 'pattern', 'placeholder', 'poster', 'preload', 'profile', 'radioGroup', 'readOnly', 'rel', 'required', 'reversed', 'role', 'rowSpan', 'rows', 'sandbox', 'scope', 'scoped', 'scrolling', 'seamless', 'selected', 'shape', 'size', 'sizes', 'span', 'spellCheck', 'src', 'srcDoc', 'srcLang', 'srcSet', 'start', 'step', 'style', 'summary', 'tabIndex', 'target', 'title', 'type', 'useMap', 'value', 'width', 'wmode', 'wrap'];

},{}],66:[function(require,module,exports){
'use strict';

function onMouseUp(handler) {
  if (handler.intermediateHandler === undefined) {
    handler.intermediateHandler = defaultIntermediateHandler;
  }

  this.on('mouseup', handler);
}

function onMouseDown(handler) {
  if (handler.intermediateHandler === undefined) {
    handler.intermediateHandler = defaultIntermediateHandler;
  }

  this.on('mousedown', handler);
}

function onMouseOver(handler) {
  if (handler.intermediateHandler === undefined) {
    handler.intermediateHandler = defaultIntermediateHandler;
  }

  this.on('mouseover', handler);
}

function onMouseOut(handler) {
  if (handler.intermediateHandler === undefined) {
    handler.intermediateHandler = defaultIntermediateHandler;
  }

  this.on('mouseout', handler);
}

function onMouseMove(handler) {
  if (handler.intermediateHandler === undefined) {
    handler.intermediateHandler = defaultIntermediateHandler;
  }

  this.on('mousemove', handler);
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

function defaultIntermediateHandler(handler, event) {
  var mouseTop = event.pageY,
      ///
  mouseLeft = event.pageX,
      ///
  mouseButton = event.button,
      ///
  preventDefault = handler(mouseTop, mouseLeft, mouseButton);

  return preventDefault;
}

},{}],67:[function(require,module,exports){
'use strict';

function onResize(handler) {
  var eventType = 'resize',
      addEventListener = this.addHandler(eventType, handler);

  if (addEventListener) {
    appendResizeObject(this);
  }
}

function offResize(handler) {
  var eventType = 'resize',
      removeEventListener = this.removeHandler(eventType, handler);

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
      style = ' display: block; \n                  position: absolute; \n                  top: 0; \n                  left: 0; \n                  height: 100%; \n                  width: 100%; \n                  overflow: hidden; \n                  pointer-events: none; \n                  z-index: -1;';

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
      handlers = element.handlersMap['resize'];

  handlers.forEach(function (handler) {
    handler(width, height);
  });
}

},{}],68:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Element = require('./element'),
    TextElement = require('./textElement');

var React = function () {
  function React() {
    _classCallCheck(this, React);
  }

  _createClass(React, null, [{
    key: 'createElement',
    value: function createElement(firstArgument, properties) {
      var element = null;

      if (firstArgument !== undefined) {
        for (var _len = arguments.length, childArguments = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          childArguments[_key - 2] = arguments[_key];
        }

        var childElements = childElementsFromChildArguments(childArguments);

        properties = Object.assign({
          childElements: childElements
        }, properties);

        if (false) {} else if (isTypeOf(firstArgument, Element)) {
          var Class = firstArgument; ///

          element = Class.fromProperties(properties);
        } else if (typeof firstArgument === 'function') {
          var elementFunction = firstArgument; ///

          element = elementFunction(properties);
        } else if (typeof firstArgument === 'string') {
          var tagName = firstArgument,
              ///
          html = '<' + tagName + '></' + tagName + '>';

          element = Element.fromHTML(html);

          element.applyProperties(properties);
        }
      }

      return element;
    }
  }]);

  return React;
}();

module.exports = React;

function childElementsFromChildArguments(childArguments) {
  childArguments = childArguments.reduce(function (childArguments, childArgument) {
    childArguments = childArguments.concat(childArgument);

    return childArguments;
  }, []);

  var childElements = childArguments.map(function (childArgument) {
    var childElement = void 0;

    if (childArgument instanceof Element || childArgument instanceof TextElement) {
      childElement = childArgument; ///
    } else {
      var text = childArgument,
          ///
      textElement = new TextElement(text);

      childElement = textElement;
    }

    return childElement;
  });

  return childElements;
}

function isTypeOf(argument, Class) {
  var typeOf = false;

  if (argument === Class) {
    ///
    typeOf = true;
  } else {
    argument = Object.getPrototypeOf(argument); ///

    if (argument) {
      typeOf = isTypeOf(argument, Class);
    }
  }

  return typeOf;
}

},{"./element":50,"./textElement":69}],69:[function(require,module,exports){
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
    key: 'appendTo',
    value: function appendTo(parentElement) {
      var parentDOMElement = parentElement.domElement,
          firstSiblingDOMElement = parentDOMElement.firstChild; ///

      parentDOMElement.insertBefore(this.domElement, firstSiblingDOMElement);
    }
  }, {
    key: 'prependTo',
    value: function prependTo(parentElement) {
      var parentDOMElement = parentElement.domElement;

      parentDOMElement.insertBefore(this.domElement, null); ///
    }
  }, {
    key: 'removeFrom',
    value: function removeFrom(parentElement) {
      var parentDOMElement = parentElement.domElement;

      parentDOMElement.removeChild(this.domElement);
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.domElement.remove();
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
  }]);

  return TextElement;
}();

module.exports = TextElement;

},{"./misc/bounds":61,"./misc/offset":62}],70:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var eventMixin = require('./mixin/event'),
    clickMixin = require('./mixin/click'),
    mouseMixin = require('./mixin/mouse');

var Window = function () {
  function Window() {
    _classCallCheck(this, Window);

    this.domElement = window;

    this.handlersMap = {};
  }

  _createClass(Window, [{
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
      var type = 'resize',
          addEventListener = this.addHandler(type, handler);

      if (addEventListener) {
        this.domElement.addEventListener(type, eventListener.bind(this));
      }
    }
  }, {
    key: 'offResize',
    value: function offResize(handler) {
      var type = 'resize',
          removeEventListener = this.removeHandler(type, handler);

      if (removeEventListener) {
        this.domElement.removeEventListener(type, eventListener.bind(this));
      }
    }
  }]);

  return Window;
}();

Object.assign(Window.prototype, eventMixin);
Object.assign(Window.prototype, clickMixin);
Object.assign(Window.prototype, mouseMixin);

module.exports = new Window(); ///

function eventListener(event) {
  var type = event.type,
      handlers = this.handlersMap[type],
      width = this.getWidth(),
      height = this.getHeight();

  handlers.forEach(function (handler) {
    handler(width, height);
  });
}

},{"./mixin/click":63,"./mixin/event":64,"./mixin/mouse":66}],71:[function(require,module,exports){
'use strict';

var lexers = {
  'Line': require('./lib/common/line'),
  'BNFLexer': require('./lib/bnf/lexer'),
  'BasicLexer': require('./lib/basic/lexer'),
  'FlorenceLexer': require('./lib/florence/lexer'),
  'specialSymbols': require('./lib/specialSymbols'),
  'SignificantToken': require('./lib/common/token/significant'),
  'StringToken': require('./lib/common/token/significant/string'),
  'EndOfLineToken': require('./lib/common/token/significant/endOfLine'),
  'WhitespaceToken': require('./lib/common/token/significant/whitespace'),
  'NonSignificantToken': require('./lib/common/token/nonSignificant')
};

module.exports = lexers;

},{"./lib/basic/lexer":73,"./lib/bnf/lexer":75,"./lib/common/line":80,"./lib/common/token/nonSignificant":85,"./lib/common/token/significant":87,"./lib/common/token/significant/endOfLine":88,"./lib/common/token/significant/string":89,"./lib/common/token/significant/whitespace":90,"./lib/florence/lexer":95,"./lib/specialSymbols":100}],72:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('../util');

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

},{"../util":101}],73:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Line = require('./line'),
    Rules = require('../common/rules'),
    CommonLexer = require('../common/lexer');

var BasicLexer = function (_CommonLexer) {
  _inherits(BasicLexer, _CommonLexer);

  function BasicLexer() {
    _classCallCheck(this, BasicLexer);

    return _possibleConstructorReturn(this, (BasicLexer.__proto__ || Object.getPrototypeOf(BasicLexer)).apply(this, arguments));
  }

  _createClass(BasicLexer, null, [{
    key: 'getSignificantTokenTypes',
    value: function getSignificantTokenTypes() {
      var significantTokenTypes = []; ///

      return significantTokenTypes;
    }
  }, {
    key: 'fromGrammar',
    value: function fromGrammar(grammar) {
      var rules = Rules.fromGrammar(grammar),
          basicLexer = new BasicLexer(rules, Line);

      return basicLexer;
    }
  }]);

  return BasicLexer;
}(CommonLexer);

module.exports = BasicLexer;

},{"../common/lexer":79,"../common/rules":82,"./line":74}],74:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommentTokens = require('./commentTokens'),
    CommonLine = require('../common/line'),
    StringTokens = require('../common/stringTokens'),
    WhitespaceTokens = require('../common/whitespaceTokens');

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

},{"../common/line":80,"../common/stringTokens":84,"../common/whitespaceTokens":92,"./commentTokens":72}],75:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Line = require('./line');

var BNFLexer = function () {
  function BNFLexer() {
    _classCallCheck(this, BNFLexer);
  }

  _createClass(BNFLexer, null, [{
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

  return BNFLexer;
}();

module.exports = BNFLexer;

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

},{"./line":76}],76:[function(require,module,exports){
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

},{"./symbolSequence":77}],77:[function(require,module,exports){
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

},{"../specialSymbols":100}],78:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Context = function () {
  function Context() {
    var minimumLinesLength = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Number.POSITIVE_INFINITY;
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

},{}],79:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Line = require('./line'),
    util = require('../util'),
    Rules = require('./rules'),
    Context = require('./context'),
    SignificantToken = require('./token/significant');

var CommonLexer = function () {
  function CommonLexer(rules, Line) {
    _classCallCheck(this, CommonLexer);

    this.rules = rules;
    this.Line = Line;
  }

  _createClass(CommonLexer, [{
    key: 'linesFromContents',
    value: function linesFromContents(contents) {
      var firstLineIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Context();

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
      var significantTokenTypes = Object.keys(SignificantToken.types);

      var grammarTypes = grammar.map(function (grammarEntry) {
        var type = util.typeFromGrammarEntry(grammarEntry),
            grammarType = type; ///

        return grammarType;
      });

      significantTokenTypes = significantTokenTypes.concat(grammarTypes); ///

      return significantTokenTypes;
    }
  }]);

  return CommonLexer;
}();

module.exports = CommonLexer;

},{"../util":101,"./context":78,"./line":80,"./rules":82,"./token/significant":87}],80:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('../util'),
    SignificantTokens = require('./significantTokens');

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

      html += '\n';

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

},{"../util":101,"./significantTokens":83}],81:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SignificantToken = require('../common/token/significant');

var Rule = function () {
  function Rule(type, regExp) {
    _classCallCheck(this, Rule);

    this.type = type;
    this.regExp = regExp;
  }

  _createClass(Rule, [{
    key: 'significantTokenPositionWithinContent',
    value: function significantTokenPositionWithinContent(content) {
      var significantTokenPosition = -1;

      var matches = content.match(this.regExp);

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
      var matches = content.match(this.regExp),
          firstMatch = first(matches);

      content = firstMatch; ///

      var significantToken = SignificantToken.fromContentLineAndType(content, line, this.type);

      return significantToken;
    }
  }]);

  return Rule;
}();

module.exports = Rule;

function first(array) {
  return array[0];
}

},{"../common/token/significant":87}],82:[function(require,module,exports){
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
    key: 'getRule',
    value: function getRule(depth) {
      var rule = this.array[depth] || null; ///

      return rule;
    }
  }], [{
    key: 'fromGrammar',
    value: function fromGrammar(grammar) {
      var array = grammar.map(function (grammarEntry) {
        var type = util.typeFromGrammarEntry(grammarEntry),
            regExp = util.regExpFromGrammarEntry(grammarEntry),
            rule = new Rule(type, regExp);

        return rule;
      }),
          rules = new Rules(array);

      return rules;
    }
  }]);

  return Rules;
}();

module.exports = Rules;

},{"../util":101,"./rule":81}],83:[function(require,module,exports){
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

},{}],84:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tokens = require('./tokens'),
    StringToken = require('./token/significant/string');

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

},{"./token/significant/string":89,"./tokens":91}],85:[function(require,module,exports){
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
    key: 'fromNonSignificantToken',
    value: function fromNonSignificantToken(nonSignificantToken) {
      var Class = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : NonSignificantToken;

      var content = nonSignificantToken.getContent(),
          line = nonSignificantToken.getLine();

      nonSignificantToken = Class.fromContentAndLine(content, line, Class);

      return nonSignificantToken;
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

},{"../../util":101}],86:[function(require,module,exports){
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

},{"../../../util":101,"../nonSignificant":85}],87:[function(require,module,exports){
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
    value: function clone(token) {
      var startPosition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var endPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : token.getLength();
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
    key: 'fromSignificantToken',
    value: function fromSignificantToken(significantToken) {
      var Class = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : SignificantToken;

      var content = significantToken.getContent(),
          line = significantToken.getLine(),
          type = significantToken.getType();

      significantToken = Class.fromContentLineAndType(content, line, type);

      return significantToken;
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

SignificantToken.types = {
  string: 'string',
  endOfLine: 'endOfLine',
  whitespace: 'whitespace'
};

module.exports = SignificantToken;

},{"../../util":101}],88:[function(require,module,exports){
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
          type = SignificantToken.types.endOfLine,
          endOfLineToken = EndOfLineToken.fromContentLineAndType(content, line, type);

      return endOfLineToken;
    }
  }]);

  return EndOfLineToken;
}(SignificantToken);

module.exports = EndOfLineToken;

},{"../significant":87}],89:[function(require,module,exports){
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

        var type = SignificantToken.types.string;

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

function first(array) {
  return array[0];
}

},{"../significant":87}],90:[function(require,module,exports){
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

        var type = SignificantToken.types.whitespace;

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

function first(array) {
  return array[0];
}

},{"../significant":87}],91:[function(require,module,exports){
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

},{"../util":101}],92:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tokens = require('./tokens'),
    WhitespaceToken = require('./token/significant/whitespace');

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

},{"./token/significant/whitespace":90,"./tokens":91}],93:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('../util'),
    EndOfCommentToken = require('./token/endOfComment'),
    StartOfCommentToken = require('./token/startOfComment'),
    MiddleOfCommentToken = require('./token/middleOfComment');

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

},{"../util":101,"./token/endOfComment":97,"./token/middleOfComment":98,"./token/startOfComment":99}],94:[function(require,module,exports){
'use strict';

var basic_latin = '\\u{21}-\\u{7E}',
    latin1_supplement = '\\u{A1}-\\u{FF}',
    mathematical_operators = '\\u{2200}-\\u{22FF}',
    supplemental_mathematical_operators = '\\u{2A00}-\\u{2AFF}',
    miscellaneous_technical = '\\u{2300}-\\u{23ff}',
    mathematical_alphanumeric_symbols = '\\u{1D400}-\\u{1D7FF}',
    unicode_character = '\n' + basic_latin + '\n' + latin1_supplement + '\n' + mathematical_operators + '\n' + supplemental_mathematical_operators + '\n' + miscellaneous_technical + '\n' + mathematical_alphanumeric_symbols + '\n',
    unicode_characters = '[' + unicode_character + ']+',
    unassigned = unicode_characters; ///

var grammar = [{ special: /,|;|\{|\}|=|:|\(|\)|\.\.\.|\.\./ }, { include: /^include$/ }, { keyword: /^(?:Rule|Axiom|Theorem|Lemma|Premises|Premise|Conclusion|Proof|Therefore|Suppose|Then|Hence|Variables|Variable|Constructors|Constructor|Type|Object|Definition|from|by|let|is|not|in|free|defined|undefined)$/ }, { unassigned: new RegExp('^' + unassigned + '$', 'u') }];

module.exports = grammar;

},{}],95:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Line = require('./line'),
    grammar = require('./grammar'),
    Context = require('../common/context'),
    CommonLexer = require('../common/lexer');

var FlorenceLexer = function (_CommonLexer) {
  _inherits(FlorenceLexer, _CommonLexer);

  function FlorenceLexer() {
    _classCallCheck(this, FlorenceLexer);

    return _possibleConstructorReturn(this, (FlorenceLexer.__proto__ || Object.getPrototypeOf(FlorenceLexer)).apply(this, arguments));
  }

  _createClass(FlorenceLexer, [{
    key: 'linesFromContents',
    value: function linesFromContents(contents, firstLineIndex, minimumLinesLength, previousLineInComment, followingLineInComment) {
      var context = new Context(minimumLinesLength, previousLineInComment, followingLineInComment),
          lines = _get(FlorenceLexer.prototype.__proto__ || Object.getPrototypeOf(FlorenceLexer.prototype), 'linesFromContents', this).call(this, contents, firstLineIndex, context);

      return lines;
    }
  }], [{
    key: 'getSignificantTokenTypes',
    value: function getSignificantTokenTypes() {
      var significantTokenTypes = CommonLexer.significantTokenTypesFromGrammar(grammar);

      return significantTokenTypes;
    }
  }, {
    key: 'fromNothing',
    value: function fromNothing() {
      var rules = CommonLexer.rulesFromGrammar(grammar),
          florenceLexer = new FlorenceLexer(rules, Line);

      return florenceLexer;
    }
  }]);

  return FlorenceLexer;
}(CommonLexer);

module.exports = FlorenceLexer;

},{"../common/context":78,"../common/lexer":79,"./grammar":94,"./line":96}],96:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommentTokens = require('./commentTokens'),
    CommonLine = require('../common/line'),
    StringTokens = require('../common/stringTokens'),
    WhitespaceTokens = require('../common/whitespaceTokens'),
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

},{"../common/line":80,"../common/stringTokens":84,"../common/token/significant/endOfLine":88,"../common/whitespaceTokens":92,"./commentTokens":93}],97:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommentToken = require('../../common/token/nonSignificant/comment');

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

},{"../../common/token/nonSignificant/comment":86}],98:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommentToken = require('../../common/token/nonSignificant/comment');

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

},{"../../common/token/nonSignificant/comment":86}],99:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommentToken = require('../../common/token/nonSignificant/comment');

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

},{"../../common/token/nonSignificant/comment":86}],100:[function(require,module,exports){
'use strict';

var specialSymbols = {
  END_OF_LINE: '<END_OF_LINE>',
  NO_WHITESPACE: '<NO_WHITESPACE>'
};

module.exports = specialSymbols;

},{}],101:[function(require,module,exports){
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
    key: 'indexOf',
    value: function indexOf(array, element) {
      var index = undefined; ///

      array.some(function (arrayElement, arrayIndex) {
        if (element === arrayElement) {
          index = arrayIndex;

          return true;
        } else {
          return false;
        }
      });

      return index;
    }
  }, {
    key: 'typeFromGrammarEntry',
    value: function typeFromGrammarEntry(grammarEntry) {
      var grammarEntryKeys = Object.keys(grammarEntry),
          firstGrammarEntryKey = first(grammarEntryKeys),
          type = firstGrammarEntryKey; ///

      return type;
    }
  }, {
    key: 'regExpFromGrammarEntry',
    value: function regExpFromGrammarEntry(grammarEntry) {
      var type = util.typeFromGrammarEntry(grammarEntry),
          regExp = grammarEntry[type];

      return regExp;
    }
  }, {
    key: 'findRegExpFromType',
    value: function findRegExpFromType(grammar, type) {
      var entry = grammar.find(function (entry) {
        var grammarType = util.typeFromGrammarEntry(entry),
            found = grammarType === type;

        return found;
      }),
          regExp = util.regExpFromGrammarEntry(entry);

      return regExp;
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

function first(array) {
  return array[0];
}

},{}]},{},[36])(36)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczYvYXJyYXlVdGlsLmpzIiwiZXM2L2Jhc2ljL3BhcnNlci5qcyIsImVzNi9ibmYvcGFyc2VyLmpzIiwiZXM2L2NvbW1vbi9jb250ZXh0LmpzIiwiZXM2L2NvbW1vbi9ub2RlL25vblRlcm1pbmFsLmpzIiwiZXM2L2NvbW1vbi9ub2RlL25vblRlcm1pbmFsL2Rpc2NhcmRTZWNvbmRDaGlsZC5qcyIsImVzNi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC9lcnJvci5qcyIsImVzNi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC90cmFuc3BhcmVudC5qcyIsImVzNi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC90cmFuc3BhcmVudFRoZW5LZWVwU2Vjb25kLmpzIiwiZXM2L2NvbW1vbi9ub2RlL3Rlcm1pbmFsLmpzIiwiZXM2L2NvbW1vbi9ub2RlL3Rlcm1pbmFsL2Vwc2lsb24uanMiLCJlczYvY29tbW9uL3BhcnNlVHJlZS5qcyIsImVzNi9jb21tb24vcGFyc2VUcmVlL2NoaWxkTm9kZXMuanMiLCJlczYvY29tbW9uL3BhcnNlVHJlZS9lbXB0eS5qcyIsImVzNi9jb21tb24vcGFyc2VUcmVlL2hvcml6b250YWxCcmFuY2guanMiLCJlczYvY29tbW9uL3BhcnNlVHJlZS9ub25UZXJtaW5hbE5vZGUuanMiLCJlczYvY29tbW9uL3BhcnNlVHJlZS9wcm9kdWN0aW9uTmFtZS5qcyIsImVzNi9jb21tb24vcGFyc2VUcmVlL3Rlcm1pbmFsTm9kZS5qcyIsImVzNi9jb21tb24vcGFyc2VUcmVlL3ZlcnRpY2FsQnJhbmNoLmpzIiwiZXM2L2NvbW1vbi9wYXJzZXIuanMiLCJlczYvY29tbW9uL3BhcnQvZW5kT2ZMaW5lLmpzIiwiZXM2L2NvbW1vbi9wYXJ0L2Vwc2lsb24uanMiLCJlczYvY29tbW9uL3BhcnQvb25lT3JNb3JlUGFydHMuanMiLCJlczYvY29tbW9uL3BhcnQvb3B0aW9uYWxQYXJ0LmpzIiwiZXM2L2NvbW1vbi9wYXJ0L3Byb2R1Y3Rpb25OYW1lLmpzIiwiZXM2L2NvbW1vbi9wYXJ0L3JlZ3VsYXJFeHByZXNzaW9uLmpzIiwiZXM2L2NvbW1vbi9wYXJ0L3NlcXVlbmNlT2ZQYXJ0cy5qcyIsImVzNi9jb21tb24vcGFydC9zaWduaWZpY2FudFRva2VuVHlwZS5qcyIsImVzNi9jb21tb24vcGFydC90ZXJtaW5hbFN5bWJvbC5qcyIsImVzNi9jb21tb24vcGFydC93aWxkY2FyZC5qcyIsImVzNi9jb21tb24vcGFydC96ZXJvT3JNb3JlUGFydHMuanMiLCJlczYvY29tbW9uL3BhcnRzLmpzIiwiZXM2L2NvbW1vbi9wcm9kdWN0aW9uLmpzIiwiZXM2L2NvbW1vbi9ydWxlLmpzIiwiZXM2L2V4YW1wbGUuanMiLCJlczYvZXhhbXBsZXMuanMiLCJlczYvZXhhbXBsZXMvYmFzaWMuanMiLCJlczYvZXhhbXBsZXMvZmxvcmVuY2UuanMiLCJlczYvZmxvcmVuY2UvZ3JhbW1hci5qcyIsImVzNi9mbG9yZW5jZS9wYXJzZXIuanMiLCJub2RlX21vZHVsZXMvZWFzeS1sYXlvdXQvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZWFzeS1sYXlvdXQvZXM2L2N1cnNvci5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5LWxheW91dC9lczYvb3B0aW9ucy5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5LWxheW91dC9lczYvc2l6ZWFibGVFbGVtZW50LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3ktbGF5b3V0L2VzNi9zcGxpdHRlci5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5LWxheW91dC9lczYvc3BsaXR0ZXIvaG9yaXpvbnRhbC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5LWxheW91dC9lczYvc3BsaXR0ZXIvdmVydGljYWwuanMiLCJub2RlX21vZHVsZXMvZWFzeS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi9kb2N1bWVudC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi9lbGVtZW50LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L2VsZW1lbnQvYm9keS5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi9lbGVtZW50L2Rpdi5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi9lbGVtZW50L3NwYW4uanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvaW5wdXRFbGVtZW50LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L2lucHV0RWxlbWVudC9idXR0b24uanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvaW5wdXRFbGVtZW50L2NoZWNrYm94LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L2lucHV0RWxlbWVudC9pbnB1dC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi9pbnB1dEVsZW1lbnQvbGluay5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi9pbnB1dEVsZW1lbnQvc2VsZWN0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L2lucHV0RWxlbWVudC90ZXh0YXJlYS5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi9taXNjL2JvdW5kcy5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi9taXNjL29mZnNldC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi9taXhpbi9jbGljay5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi9taXhpbi9ldmVudC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2VzNi9taXhpbi9qc3guanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvbWl4aW4vbW91c2UuanMiLCJub2RlX21vZHVsZXMvZWFzeS9lczYvbWl4aW4vcmVzaXplLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L3JlYWN0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L3RleHRFbGVtZW50LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvZXM2L3dpbmRvdy5qcyIsIm5vZGVfbW9kdWxlcy9vY2NhbS1sZXhlcnMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvb2NjYW0tbGV4ZXJzL2VzNi9iYXNpYy9jb21tZW50VG9rZW5zLmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvYmFzaWMvbGV4ZXIuanMiLCJub2RlX21vZHVsZXMvb2NjYW0tbGV4ZXJzL2VzNi9iYXNpYy9saW5lLmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvYm5mL2xleGVyLmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvYm5mL2xpbmUuanMiLCJub2RlX21vZHVsZXMvb2NjYW0tbGV4ZXJzL2VzNi9ibmYvc3ltYm9sU2VxdWVuY2UuanMiLCJub2RlX21vZHVsZXMvb2NjYW0tbGV4ZXJzL2VzNi9jb21tb24vY29udGV4dC5qcyIsIm5vZGVfbW9kdWxlcy9vY2NhbS1sZXhlcnMvZXM2L2NvbW1vbi9sZXhlci5qcyIsIm5vZGVfbW9kdWxlcy9vY2NhbS1sZXhlcnMvZXM2L2NvbW1vbi9saW5lLmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvY29tbW9uL3J1bGUuanMiLCJub2RlX21vZHVsZXMvb2NjYW0tbGV4ZXJzL2VzNi9jb21tb24vcnVsZXMuanMiLCJub2RlX21vZHVsZXMvb2NjYW0tbGV4ZXJzL2VzNi9jb21tb24vc2lnbmlmaWNhbnRUb2tlbnMuanMiLCJub2RlX21vZHVsZXMvb2NjYW0tbGV4ZXJzL2VzNi9jb21tb24vc3RyaW5nVG9rZW5zLmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50LmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50L2NvbW1lbnQuanMiLCJub2RlX21vZHVsZXMvb2NjYW0tbGV4ZXJzL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQuanMiLCJub2RlX21vZHVsZXMvb2NjYW0tbGV4ZXJzL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvZW5kT2ZMaW5lLmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvY29tbW9uL3Rva2VuL3NpZ25pZmljYW50L3N0cmluZy5qcyIsIm5vZGVfbW9kdWxlcy9vY2NhbS1sZXhlcnMvZXM2L2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC93aGl0ZXNwYWNlLmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvY29tbW9uL3Rva2Vucy5qcyIsIm5vZGVfbW9kdWxlcy9vY2NhbS1sZXhlcnMvZXM2L2NvbW1vbi93aGl0ZXNwYWNlVG9rZW5zLmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvZmxvcmVuY2UvY29tbWVudFRva2Vucy5qcyIsIm5vZGVfbW9kdWxlcy9vY2NhbS1sZXhlcnMvZXM2L2Zsb3JlbmNlL2dyYW1tYXIuanMiLCJub2RlX21vZHVsZXMvb2NjYW0tbGV4ZXJzL2VzNi9mbG9yZW5jZS9sZXhlci5qcyIsIm5vZGVfbW9kdWxlcy9vY2NhbS1sZXhlcnMvZXM2L2Zsb3JlbmNlL2xpbmUuanMiLCJub2RlX21vZHVsZXMvb2NjYW0tbGV4ZXJzL2VzNi9mbG9yZW5jZS90b2tlbi9lbmRPZkNvbW1lbnQuanMiLCJub2RlX21vZHVsZXMvb2NjYW0tbGV4ZXJzL2VzNi9mbG9yZW5jZS90b2tlbi9taWRkbGVPZkNvbW1lbnQuanMiLCJub2RlX21vZHVsZXMvb2NjYW0tbGV4ZXJzL2VzNi9mbG9yZW5jZS90b2tlbi9zdGFydE9mQ29tbWVudC5qcyIsIm5vZGVfbW9kdWxlcy9vY2NhbS1sZXhlcnMvZXM2L3NwZWNpYWxTeW1ib2xzLmpzIiwibm9kZV9tb2R1bGVzL29jY2FtLWxleGVycy9lczYvdXRpbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOzs7Ozs7SUFFTSxTOzs7Ozs7OzhCQUNhLEssRUFBTztBQUFFLGFBQU8sUUFBUSxLQUFSLEVBQWUsQ0FBZixDQUFQO0FBQTJCOzs7K0JBRW5DLEssRUFBTztBQUFFLGFBQU8sUUFBUSxLQUFSLEVBQWUsQ0FBZixDQUFQO0FBQTJCOzs7NkJBRXRDLEssRUFBTztBQUFFLGFBQU8sUUFBUSxLQUFSLEVBQWUsQ0FBQyxDQUFo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UyxLQUFULEVBQWdCO0FBQ25DLFlBQU0sY0FBYyxLQUFLLG9CQUFMLENBQTBCLEtBQTFCLENBQXBCO0FBQUEsWUFDTSxRQUFTLGdCQUFnQixJQUQvQjs7QUFHQSxlQUFPLEtBQVA7QUFDRCxPQUxPLENBQWQ7QUFBQSxVQU1NLFNBQVMsS0FBSyxzQkFBTCxDQUE0QixLQUE1QixDQU5mOztBQVFBLGFBQU8sTUFBUDtBQUNEOzs7b0NBRXNCLE8sRUFBUztBQUM5QixVQUFNLG1CQUFtQixRQUFRLE9BQVIsQ0FBZ0IsR0FBaEIsRUFBb0IsT0FBcEIsRUFBNkIsT0FBN0IsQ0FBcUMsR0FBckMsRUFBMEMsTUFBMUMsRUFBa0QsT0FBbEQsQ0FBMEQsR0FBMUQsRUFBK0QsTUFBL0QsQ0FBekI7O0FBRUEsYUFBTyxnQkFBUDtBQUNEOzs7Ozs7QUFHSCxPQUFPLE9BQVAsR0FBaUIsSUFBakI7O0FBRUEsU0FBUyxLQUFULENBQWUsS0FBZixFQUFzQjtBQUFFLFNBQU8sTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBhcnJheVV0aWwge1xuICBzdGF0aWMga2VlcEZpcnN0KGFycmF5KSB7IHJldHVybiBrZWVwTnRoKGFycmF5LCAwKTsgfVxuXG4gIHN0YXRpYyBrZWVwU2Vjb25kKGFycmF5KSB7IHJldHVybiBrZWVwTnRoKGFycmF5LCAxKTsgfVxuXG4gIHN0YXRpYyBrZWVwTGFzdChhcnJheSkgeyByZXR1cm4ga2VlcE50aChhcnJheSwgLTEpOyB9XG5cbiAgc3RhdGljIGRpc2NhcmRGaXJzdChhcnJheSkgeyByZXR1cm4gZGlzY2FyZE50aChhcnJheSwgMCk7IH1cblxuICBzdGF0aWMgZGlzY2FyZFNlY29uZChhcnJheSkgeyByZXR1cm4gZGlzY2FyZE50aChhcnJheSwgMSk7IH1cblxuICBzdGF0aWMgZGlzY2FyZExhc3QoYXJyYXkpIHsgcmV0dXJuIGRpc2NhcmROdGgoYXJyYXksIC0xKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5VXRpbDtcblxuZnVuY3Rpb24ga2VlcE50aChhcnJheSwgbikge1xuICBhcnJheSA9IGFycmF5LnNsaWNlKCk7XG5cbiAgcmV0dXJuIGFycmF5LnNwbGljZShuLCAxKTtcbn1cblxuZnVuY3Rpb24gZGlzY2FyZE50aChhcnJheSwgbikge1xuICBhcnJheSA9IGFycmF5LnNsaWNlKCk7XG5cbiAgYXJyYXkuc3BsaWNlKG4sIDEpO1xuXG4gIHJldHVybiBhcnJheTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IEJORlBhcnNlciA9IHJlcXVpcmUoJy4uL2JuZi9wYXJzZXInKSxcbiAgICAgIENvbW1vblBhcnNlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9wYXJzZXInKTtcblxuY29uc3QgeyBCTkZMZXhlciwgQmFzaWNMZXhlciB9ID0gbGV4ZXJzO1xuXG5jbGFzcyBCYXNpY1BhcnNlciBleHRlbmRzIENvbW1vblBhcnNlciB7XG4gIHN0YXRpYyBmcm9tR3JhbW1hcihncmFtbWFyKSB7XG4gICAgY29uc3QgbGluZXMgPSBCTkZMZXhlci5saW5lc0Zyb21HcmFtbWFyKGdyYW1tYXIpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlcyA9IEJhc2ljTGV4ZXIuZ2V0U2lnbmlmaWNhbnRUb2tlblR5cGVzKCksXG4gICAgICAgICAgbWFwcGluZ3MgPSB7fSxcbiAgICAgICAgICBwcm9kdWN0aW9ucyA9IEJORlBhcnNlci5wYXJzZShsaW5lcywgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBtYXBwaW5ncyksXG4gICAgICAgICAgYmFzaWNQYXJzZXIgPSBuZXcgQmFzaWNQYXJzZXIocHJvZHVjdGlvbnMpO1xuXG4gICAgcmV0dXJuIGJhc2ljUGFyc2VyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQmFzaWNQYXJzZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi9jb21tb24vcHJvZHVjdGlvbicpLFxuICAgICAgRXJyb3JOb2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwvZXJyb3InKTtcblxuY2xhc3MgQk5GUGFyc2VyIHtcbiAgc3RhdGljIHBhcnNlKGxpbmVzLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG1hcHBpbmdzKSB7XG4gICAgbGV0IHByb2R1Y3Rpb25zO1xuXG4gICAgbWFwcGluZ3MgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICdlcnJvcic6IEVycm9yTm9kZVxuICAgIH0sIG1hcHBpbmdzKTtcblxuICAgIHRyeSB7XG4gICAgICBwcm9kdWN0aW9ucyA9IGxpbmVzLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgIGNvbnN0IHByb2R1Y3Rpb24gPSBQcm9kdWN0aW9uLmZyb21MaW5lKGxpbmUsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbWFwcGluZ3MpO1xuXG4gICAgICAgIHJldHVybiBwcm9kdWN0aW9uO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaChleGNlcHRpb24pIHtcbiAgICAgIHByb2R1Y3Rpb25zID0gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2R1Y3Rpb25zO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQk5GUGFyc2VyO1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCB7IFNpZ25pZmljYW50VG9rZW4gfSA9IGxleGVycztcblxuY29uc3QgREVGQVVMVF9NQVhJTVVNX0RFUFRIID0gOTk7XG5cbmNsYXNzIENvbnRleHQge1xuICBjb25zdHJ1Y3Rvcih0b2tlbnMsIHByb2R1Y3Rpb25zLCBtYXhpbXVtRGVwdGggPSBERUZBVUxUX01BWElNVU1fREVQVEgpIHtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcblxuICAgIHRoaXMucHJvZHVjdGlvbnMgPSBwcm9kdWN0aW9ucztcblxuICAgIHRoaXMubWF4aW11bURlcHRoID0gbWF4aW11bURlcHRoO1xuXG4gICAgdGhpcy5kZXB0aCA9IDA7XG5cbiAgICB0aGlzLmluZGV4ID0gMDtcbiAgfVxuXG4gIGdldFByb2R1Y3Rpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnByb2R1Y3Rpb25zO1xuICB9XG5cbiAgZ2V0TWF4aW11bURlcHRoKCkge1xuICAgIHJldHVybiB0aGlzLm1heGltdW1EZXB0aDtcbiAgfVxuXG4gIGdldERlcHRoKCkge1xuICAgIHJldHVybiB0aGlzLmRlcHRoO1xuICB9XG5cbiAgZ2V0SW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5kZXg7XG4gIH1cblxuICBpc1Rvb0RlZXAoKSB7XG4gICAgY29uc3QgdG9vRGVlcCA9IHRoaXMuZGVwdGggPiB0aGlzLm1heGltdW1EZXB0aDtcbiAgICBcbiAgICByZXR1cm4gdG9vRGVlcDtcbiAgfVxuXG4gIGluY3JlYXNlRGVwdGgoKSB7XG4gICAgdGhpcy5kZXB0aCsrO1xuICB9XG5cbiAgZGVjcmVhc2VEZXB0aCgpIHtcbiAgICB0aGlzLmRlcHRoLS07XG4gIH1cblxuICBzZXRJbmRleChpbmRleCkge1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgfVxuXG4gIGdldE5leHRTaWduaWZpY2FudFRva2VuKCkge1xuICAgIGxldCBuZXh0U2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgICBmb3IgKDs7KSB7XG4gICAgICBjb25zdCBuZXh0VG9rZW4gPSB0aGlzLnRva2Vuc1t0aGlzLmluZGV4KytdO1xuXG4gICAgICBpZiAobmV4dFRva2VuID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZXh0VG9rZW4gaW5zdGFuY2VvZiBTaWduaWZpY2FudFRva2VuKSB7XG4gICAgICAgIG5leHRTaWduaWZpY2FudFRva2VuID0gbmV4dFRva2VuO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXh0U2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGdldE5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbihub1doaXRlc3BhY2UpIHtcbiAgICBsZXQgbmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuID0gbnVsbCxcbiAgICAgICAgbmV4dFNpZ25pZmljYW50VG9rZW4gPSB0aGlzLmdldE5leHRTaWduaWZpY2FudFRva2VuKCk7XG5cbiAgICBpZiAobmV4dFNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICAgIGxldCBuZXh0U2lnbmlmaWNhbnRUb2tlbklzV2hpdGVzcGFjZVRva2VuO1xuXG4gICAgICBpZiAobm9XaGl0ZXNwYWNlKSB7XG4gICAgICAgIG5leHRTaWduaWZpY2FudFRva2VuSXNXaGl0ZXNwYWNlVG9rZW4gPSBzaWduaWZpY2FudFRva2VuSXNXaGl0ZXNwYWNlVG9rZW4obmV4dFNpZ25pZmljYW50VG9rZW4pO1xuXG4gICAgICAgIGlmIChuZXh0U2lnbmlmaWNhbnRUb2tlbklzV2hpdGVzcGFjZVRva2VuKSB7XG4gICAgICAgICAgbmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuID0gbnVsbFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbiA9IG5leHRTaWduaWZpY2FudFRva2VuO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKDs7KSB7XG4gICAgICAgICAgbmV4dFNpZ25pZmljYW50VG9rZW5Jc1doaXRlc3BhY2VUb2tlbiA9IHNpZ25pZmljYW50VG9rZW5Jc1doaXRlc3BhY2VUb2tlbihuZXh0U2lnbmlmaWNhbnRUb2tlbik7XG5cbiAgICAgICAgICBpZiAobmV4dFNpZ25pZmljYW50VG9rZW5Jc1doaXRlc3BhY2VUb2tlbikge1xuICAgICAgICAgICAgbmV4dFNpZ25pZmljYW50VG9rZW4gPSB0aGlzLmdldE5leHRTaWduaWZpY2FudFRva2VuKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbiA9IG5leHRTaWduaWZpY2FudFRva2VuO1xuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobmV4dFNpZ25pZmljYW50VG9rZW4gPT09IG51bGwpIHtcbiAgICAgICAgICAgIG5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbiA9IG51bGw7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBzYXZlZEluZGV4KCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRJbmRleCgpLFxuICAgICAgICAgIHNhdmVkSW5kZXggPSBpbmRleDsgLy8vXG4gICAgXG4gICAgcmV0dXJuIHNhdmVkSW5kZXg7XG4gIH1cblxuICBiYWNrdHJhY2soc2F2ZWRJbmRleCkge1xuICAgIHRoaXMuaW5kZXggPSBzYXZlZEluZGV4OyAgLy8vXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb250ZXh0O1xuXG5mdW5jdGlvbiBzaWduaWZpY2FudFRva2VuSXNXaGl0ZXNwYWNlVG9rZW4oc2lnbmlmaWNhbnRUb2tlbikge1xuICBjb25zdCB0eXBlID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRUeXBlKCksXG4gICAgICAgIHdoaXRlc3BhY2VUb2tlbiA9ICh0eXBlID09PSBTaWduaWZpY2FudFRva2VuLnR5cGVzLndoaXRlc3BhY2UpO1xuICBcbiAgcmV0dXJuIHdoaXRlc3BhY2VUb2tlbjtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlID0gcmVxdWlyZSgnLi4vcGFyc2VUcmVlL25vblRlcm1pbmFsTm9kZScpO1xuXG5jbGFzcyBOb25UZXJtaW5hbE5vZGUge1xuICBjb25zdHJ1Y3Rvcihwcm9kdWN0aW9uTmFtZSwgY2hpbGROb2RlcywgZmlyc3RMaW5lLCBsYXN0TGluZSwgZmlyc3RTaWduaWZpY2FudFRva2VuLCBsYXN0U2lnbmlmaWNhbnRUb2tlbikge1xuICAgIHRoaXMucHJvZHVjdGlvbk5hbWUgPSBwcm9kdWN0aW9uTmFtZTtcbiAgICB0aGlzLmNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzO1xuICAgIHRoaXMuZmlyc3RMaW5lID0gZmlyc3RMaW5lO1xuICAgIHRoaXMubGFzdExpbmUgPSBsYXN0TGluZTtcbiAgICB0aGlzLmZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IGZpcnN0U2lnbmlmaWNhbnRUb2tlbjtcbiAgICB0aGlzLmxhc3RTaWduaWZpY2FudFRva2VuID0gbGFzdFNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBnZXRQcm9kdWN0aW9uTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9kdWN0aW9uTmFtZTtcbiAgfVxuXG4gIGdldENoaWxkTm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2RlcztcbiAgfVxuICBcbiAgZ2V0Rmlyc3RMaW5lKCkge1xuICAgIHJldHVybiB0aGlzLmZpcnN0TGluZTtcbiAgfVxuXG4gIGdldExhc3RMaW5lKCkge1xuICAgIHJldHVybiB0aGlzLmxhc3RMaW5lO1xuICB9XG5cbiAgZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuKCkge1xuICAgIHJldHVybiB0aGlzLmZpcnN0U2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGdldExhc3RTaWduaWZpY2FudFRva2VuKCkge1xuICAgIHJldHVybiB0aGlzLmxhc3RTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgcGFyc2VUcmVlKGxpbmVzKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IE5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZS5mcm9tTm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgbGluZXMpLFxuICAgICAgICAgIHBhcnNlVHJlZSA9IG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZTsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIHNldENoaWxkTm9kZXMoY2hpbGROb2Rlcykge1xuICAgIHRoaXMuY2hpbGROb2RlcyA9IGNoaWxkTm9kZXM7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUsIENsYXNzID0gTm9uVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IG5vZGVzLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGUgPSBDbGFzcy5mcm9tUHJvZHVjdGlvbk5hbWVBbmRDaGlsZE5vZGVzKHByb2R1Y3Rpb25OYW1lLCBjaGlsZE5vZGVzLCBDbGFzcyk7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9kdWN0aW9uTmFtZUFuZENoaWxkTm9kZXMocHJvZHVjdGlvbk5hbWUsIGNoaWxkTm9kZXMsIENsYXNzID0gTm9uVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3QgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBsYXN0Q2hpbGROb2RlID0gbGFzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZUZpcnN0TGluZSA9IGZpcnN0Q2hpbGROb2RlLmdldEZpcnN0TGluZSgpLFxuICAgICAgICAgIGxhc3RDaGlsZE5vZGVGaXJzdExpbmUgPSBsYXN0Q2hpbGROb2RlLmdldExhc3RMaW5lKCksXG4gICAgICAgICAgZmlyc3RDaGlsZE5vZGVGaXJzdFNpZ25pZmljYW50VG9rZW4gPSBmaXJzdENoaWxkTm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgICBsYXN0Q2hpbGROb2RlTGFzdFNpZ25pZmljYW50VG9rZW4gPSBsYXN0Q2hpbGROb2RlLmdldExhc3RTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgICAgZmlyc3RMaW5lID0gZmlyc3RDaGlsZE5vZGVGaXJzdExpbmUsICAvLy9cbiAgICAgICAgICBsYXN0TGluZSA9IGxhc3RDaGlsZE5vZGVGaXJzdExpbmUsICAvLy9cbiAgICAgICAgICBmaXJzdFNpZ25pZmljYW50VG9rZW4gPSBmaXJzdENoaWxkTm9kZUZpcnN0U2lnbmlmaWNhbnRUb2tlbiwgLy8vXG4gICAgICAgICAgbGFzdFNpZ25pZmljYW50VG9rZW4gPSBsYXN0Q2hpbGROb2RlTGFzdFNpZ25pZmljYW50VG9rZW4sIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IG5ldyBDbGFzcyhwcm9kdWN0aW9uTmFtZSwgY2hpbGROb2RlcywgZmlyc3RMaW5lLCBsYXN0TGluZSwgZmlyc3RTaWduaWZpY2FudFRva2VuLCBsYXN0U2lnbmlmaWNhbnRUb2tlbik7XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9uVGVybWluYWxOb2RlO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbmZ1bmN0aW9uIGxhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdOyB9XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uLy4uLy4uL2FycmF5VXRpbCcpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vbm9uVGVybWluYWwnKTtcblxuY2xhc3MgRGlzY2FyZFNlY29uZENoaWxkTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gYXJyYXlVdGlsLmRpc2NhcmRTZWNvbmQobm9kZXMpLFxuICAgICAgICAgIGRpc2NhcmRTZWNvbmRDaGlsZE5vZGUgPSBOb25UZXJtaW5hbE5vZGUuZnJvbVByb2R1Y3Rpb25OYW1lQW5kQ2hpbGROb2Rlcyhwcm9kdWN0aW9uTmFtZSwgY2hpbGROb2RlcywgRGlzY2FyZFNlY29uZENoaWxkTm9kZSk7XG5cbiAgICByZXR1cm4gZGlzY2FyZFNlY29uZENoaWxkTm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERpc2NhcmRTZWNvbmRDaGlsZE5vZGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uL3Rlcm1pbmFsJyk7XG5cbmNsYXNzIEVycm9yTm9kZSBleHRlbmRzIFRlcm1pbmFsTm9kZSB7XG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRQcm9kdWN0aW9uTmFtZShub2RlcywgcHJvZHVjdGlvbk5hbWUpIHtcbiAgICBjb25zdCBmaXJzdE5vZGUgPSBmaXJzdChub2RlcyksXG4gICAgICAgICAgdGVybWluYWxOb2RlID0gZmlyc3ROb2RlLCAgLy8vXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IHRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgICAgZXJyb3JOb2RlID0gVGVybWluYWxOb2RlLmZyb21TaWduaWZpY2FudFRva2VuKHNpZ25pZmljYW50VG9rZW4sIEVycm9yTm9kZSksXG4gICAgICAgICAgZXJyb3IgPSB0cnVlO1xuXG4gICAgc2lnbmlmaWNhbnRUb2tlbi5zZXRFcnJvcihlcnJvcik7XG5cbiAgICByZXR1cm4gZXJyb3JOb2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXJyb3JOb2RlO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgVHJhbnNwYXJlbnROb2RlIHtcbiAgc3RhdGljIGZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSkge1xuICAgIHJldHVybiBub2RlcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRyYW5zcGFyZW50Tm9kZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsID0gcmVxdWlyZSgnLi4vLi4vLi4vYXJyYXlVdGlsJyk7XG5cbmNsYXNzIFRyYW5zcGFyZW50VGhlbktlZXBTZWNvbmROb2RlIHtcbiAgc3RhdGljIGZyb21Ob2Rlc0FuZFByb2R1Y3Rpb25OYW1lKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSkge1xuICAgIG5vZGVzID0gYXJyYXlVdGlsLmtlZXBTZWNvbmQobm9kZXMpO1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZE5vZGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IHJlcXVpcmUoJy4uL3BhcnNlVHJlZS90ZXJtaW5hbE5vZGUnKTtcblxuY2xhc3MgVGVybWluYWxOb2RlIHtcbiAgY29uc3RydWN0b3Ioc2lnbmlmaWNhbnRUb2tlbiwgbGluZSkge1xuICAgIHRoaXMuc2lnbmlmaWNhbnRUb2tlbiA9IHNpZ25pZmljYW50VG9rZW47XG4gICAgdGhpcy5saW5lID0gbGluZTtcbiAgfVxuXG4gIGdldFNpZ25pZmljYW50VG9rZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIGdldExpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMubGluZTtcbiAgfVxuXG4gIGdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbigpIHtcbiAgICBjb25zdCBmaXJzdFNpZ25pZmljYW50VG9rZW4gPSB0aGlzLnNpZ25pZmljYW50VG9rZW47ICAvLy9cblxuICAgIHJldHVybiBmaXJzdFNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBnZXRMYXN0U2lnbmlmaWNhbnRUb2tlbigpIHtcbiAgICBjb25zdCBsYXN0U2lnbmlmaWNhbnRUb2tlbiA9IHRoaXMuc2lnbmlmaWNhbnRUb2tlbjsgIC8vL1xuXG4gICAgcmV0dXJuIGxhc3RTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0Rmlyc3RMaW5lKCkge1xuICAgIGNvbnN0IGZpcnN0TGluZSA9IHRoaXMubGluZTsgLy8vXG5cbiAgICByZXR1cm4gZmlyc3RMaW5lO1xuICB9XG5cbiAgZ2V0TGFzdExpbmUoKSB7XG4gICAgY29uc3QgbGFzdExpbmUgPSB0aGlzLmxpbmU7ICAvLy9cblxuICAgIHJldHVybiBsYXN0TGluZTtcbiAgfVxuICBcbiAgcGFyc2VUcmVlKGxpbmVzKSB7XG4gICAgY29uc3QgdGVybWluYWxOb2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIHRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IFRlcm1pbmFsTm9kZVBhcnNlVHJlZS5mcm9tVGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZSwgbGluZXMpLFxuICAgICAgICAgIHBhcnNlVHJlZSA9IHRlcm1pbmFsTm9kZVBhcnNlVHJlZTsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuLCBDbGFzcyA9IFRlcm1pbmFsTm9kZSkge1xuICAgIGNvbnN0IGxpbmUgPSBzaWduaWZpY2FudFRva2VuLmdldExpbmUoKSxcbiAgICAgICAgICB0ZXJtaW5hbE5vZGUgPSBuZXcgQ2xhc3Moc2lnbmlmaWNhbnRUb2tlbiwgbGluZSksXG4gICAgICAgICAgZXJyb3IgPSBmYWxzZTtcbiAgICBcbiAgICBzaWduaWZpY2FudFRva2VuLnNldEVycm9yKGVycm9yKTtcblxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXJtaW5hbE5vZGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uL3Rlcm1pbmFsJyk7XG5cbmNsYXNzIEVwc2lsb25UZXJtaW5hbE5vZGUgZXh0ZW5kcyBUZXJtaW5hbE5vZGUge1xuICBnZXRDb250ZW50KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSAnzrUnO1xuICAgIFxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXBzaWxvblRlcm1pbmFsTm9kZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgUGFyc2VUcmVlIHtcbiAgY29uc3RydWN0b3IobGluZXMpIHtcbiAgICB0aGlzLmxpbmVzID0gbGluZXM7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBjb25zdCBsaW5lcyA9IHRoaXMubGluZXMuc2xpY2UoMCksICAvLy9cbiAgICAgICAgICBwYXJzZVRyZWUgPSBuZXcgUGFyc2VUcmVlKGxpbmVzKTtcblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBnZXRXaWR0aCgpIHtcbiAgICBsZXQgbGluZXNMZW5ndGggPSB0aGlzLmxpbmVzLmxlbmd0aCxcbiAgICAgICAgICB3aWR0aCA9IHVuZGVmaW5lZDtcblxuICAgIGlmIChsaW5lc0xlbmd0aCA9PT0gMCkge1xuICAgICAgd2lkdGggPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsYXN0TGluZSA9IGxhc3QodGhpcy5saW5lcyksXG4gICAgICAgICAgICBsYXN0TGluZUxlbmd0aCA9IGxhc3RMaW5lLmxlbmd0aDtcblxuICAgICAgd2lkdGggPSBsYXN0TGluZUxlbmd0aDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgZ2V0RGVwdGgoKSB7XG4gICAgY29uc3QgbGluZXNMZW5ndGggPSB0aGlzLmxpbmVzLmxlbmd0aCxcbiAgICAgICAgICBkZXB0aCA9IGxpbmVzTGVuZ3RoOyAgLy8vXG5cbiAgICByZXR1cm4gZGVwdGg7XG4gIH1cblxuICBmb3JFYWNoTGluZShjYWxsYmFjaykge1xuICAgIHRoaXMubGluZXMuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBhcHBlbmRUb1RvcChwYXJzZVRyZWUpIHtcbiAgICBwYXJzZVRyZWUuZm9yRWFjaExpbmUoZnVuY3Rpb24obGluZSkge1xuICAgICAgdGhpcy5saW5lcy51bnNoaWZ0KGxpbmUpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICBhcHBlbmRUb0xlZnQocGFyc2VUcmVlKSB7XG4gICAgcGFyc2VUcmVlLmZvckVhY2hMaW5lKGZ1bmN0aW9uKGxpbmUsIGluZGV4KSB7XG4gICAgICB0aGlzLmxpbmVzW2luZGV4XSA9IGxpbmUgKyB0aGlzLmxpbmVzW2luZGV4XTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgYXBwZW5kVG9SaWdodChwYXJzZVRyZWUpIHtcbiAgICBwYXJzZVRyZWUuZm9yRWFjaExpbmUoZnVuY3Rpb24obGluZSwgaW5kZXgpIHtcbiAgICAgIHRoaXMubGluZXNbaW5kZXhdID0gdGhpcy5saW5lc1tpbmRleF0gKyBsaW5lO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICBhcHBlbmRUb0JvdHRvbShwYXJzZVRyZWUpIHtcbiAgICBwYXJzZVRyZWUuZm9yRWFjaExpbmUoZnVuY3Rpb24obGluZSkge1xuICAgICAgdGhpcy5saW5lcy5wdXNoKGxpbmUpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICBhZGRUb3BNYXJnaW4odG9wTWFyZ2luRGVwdGgpIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICB0b3BNYXJnaW5XaWR0aCA9IHdpZHRoLCAgLy8vXG4gICAgICAgICAgdG9wTWFyZ2luU3RyaW5nID0gbWFyZ2luU3RyaW5nRnJvbU1hcmdpbldpZHRoKHRvcE1hcmdpbldpZHRoKTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0b3BNYXJnaW5EZXB0aDsgaW5kZXgrKykge1xuICAgICAgdGhpcy5saW5lcy51bnNoaWZ0KHRvcE1hcmdpblN0cmluZyk7XG4gICAgfVxuICB9XG5cbiAgYWRkTGVmdE1hcmdpbihsZWZ0TWFyZ2luV2lkdGgpIHtcbiAgICBjb25zdCBsZWZ0TWFyZ2luU3RyaW5nID0gbWFyZ2luU3RyaW5nRnJvbU1hcmdpbldpZHRoKGxlZnRNYXJnaW5XaWR0aCksXG4gICAgICAgICAgbGluZXNMZW5ndGggPSB0aGlzLmxpbmVzLmxlbmd0aDtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsaW5lc0xlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdGhpcy5saW5lc1tpbmRleF0gPSBsZWZ0TWFyZ2luU3RyaW5nICsgdGhpcy5saW5lc1tpbmRleF07XG4gICAgfVxuICB9XG5cbiAgYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCkge1xuICAgIGNvbnN0IHJpZ2h0TWFyZ2luU3RyaW5nID0gbWFyZ2luU3RyaW5nRnJvbU1hcmdpbldpZHRoKHJpZ2h0TWFyZ2luV2lkdGgpLFxuICAgICAgICAgIGxpbmVzTGVuZ3RoID0gdGhpcy5saW5lcy5sZW5ndGg7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGluZXNMZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHRoaXMubGluZXNbaW5kZXhdID0gdGhpcy5saW5lc1tpbmRleF0gKyByaWdodE1hcmdpblN0cmluZztcbiAgICB9XG4gIH1cblxuICBhZGRCb3R0b21NYXJnaW4oYm90dG9tTWFyZ2luRGVwdGgpIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBib3R0b21NYXJnaW5XaWR0aCA9IHdpZHRoLCAgLy8vXG4gICAgICAgICAgYm90dG9tTWFyZ2luU3RyaW5nID0gbWFyZ2luU3RyaW5nRnJvbU1hcmdpbldpZHRoKGJvdHRvbU1hcmdpbldpZHRoKTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBib3R0b21NYXJnaW5EZXB0aDsgaW5kZXgrKykge1xuICAgICAgdGhpcy5saW5lcy5wdXNoKGJvdHRvbU1hcmdpblN0cmluZyk7XG4gICAgfVxuICB9XG4gIFxuICBwb3BMaW5lKCkgeyByZXR1cm4gdGhpcy5saW5lcy5wb3AoKTsgfVxuICBcbiAgc2hpZnRMaW5lKCkgeyByZXR1cm4gdGhpcy5saW5lcy5zaGlmdCgpOyB9XG4gIFxuICBwdXNoTGluZShsaW5lKSB7IHRoaXMubGluZXMucHVzaChsaW5lKTsgfVxuICBcbiAgdW5zaGlmdExpbmUobGluZSkgeyB0aGlzLmxpbmVzLnVuc2hpZnQobGluZSk7IH1cblxuICB0b1N0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmxpbmVzLnJlZHVjZShmdW5jdGlvbihzdHJpbmcsIGxpbmUpIHtcbiAgICAgIHN0cmluZyArPSBsaW5lICsgJ1xcbic7XG5cbiAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgfSwgJycpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcnNlVHJlZTtcblxuZnVuY3Rpb24gbGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07IH1cblxuZnVuY3Rpb24gbWFyZ2luU3RyaW5nRnJvbU1hcmdpbldpZHRoKG1hcmdpbldpZHRoLCBzcGFjZUNoYXJhY3Rlcikge1xuICBzcGFjZUNoYXJhY3RlciA9IHNwYWNlQ2hhcmFjdGVyIHx8ICcgJztcblxuICBsZXQgbWFyZ2luU3RyaW5nID0gJyc7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG1hcmdpbldpZHRoOyBpbmRleCsrKSB7XG4gICAgbWFyZ2luU3RyaW5nICs9IHNwYWNlQ2hhcmFjdGVyO1xuICB9XG5cbiAgcmV0dXJuIG1hcmdpblN0cmluZztcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRW1wdHlQYXJzZVRyZWUgPSByZXF1aXJlKCcuL2VtcHR5JyksXG4gICAgICBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IHJlcXVpcmUoJy4vdmVydGljYWxCcmFuY2gnKSxcbiAgICAgIEhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUgPSByZXF1aXJlKCcuL2hvcml6b250YWxCcmFuY2gnKTtcblxuY2xhc3MgQ2hpbGROb2Rlc1BhcnNlVHJlZSBleHRlbmRzIFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIHtcbiAgc3RhdGljIGZyb21DaGlsZE5vZGVzKGNoaWxkTm9kZXMsIGxpbmVzKSB7XG4gICAgY29uc3QgY2hpbGROb2RlUGFyc2VUcmVlcyA9IGNoaWxkTm9kZXMubWFwKGZ1bmN0aW9uKGNoaWxkTm9kZSkge1xuICAgICAgICAgICAgY29uc3QgY2hpbGROb2RlUGFyc2VUcmVlID0gY2hpbGROb2RlLnBhcnNlVHJlZShsaW5lcyk7XG4gIFxuICAgICAgICAgICAgcmV0dXJuIGNoaWxkTm9kZVBhcnNlVHJlZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzTGVuZ3RoID0gY2hpbGROb2RlUGFyc2VUcmVlcy5sZW5ndGg7XG4gICAgXG4gICAgbGV0IGZpcnN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IHVuZGVmaW5lZCxcbiAgICAgICAgbGFzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSAwLFxuICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzV2lkdGggPSAwLFxuICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzRGVwdGggPSAwO1xuXG4gICAgY2hpbGROb2RlUGFyc2VUcmVlcy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkTm9kZVBhcnNlVHJlZSwgaW5kZXgpIHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZVBhcnNlVHJlZVdpZHRoID0gY2hpbGROb2RlUGFyc2VUcmVlLmdldFdpZHRoKCksXG4gICAgICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVEZXB0aCA9IGNoaWxkTm9kZVBhcnNlVHJlZS5nZXREZXB0aCgpO1xuXG4gICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgY29uc3QgZmlyc3RDaGlsZE5vZGVQYXJzZVRyZWUgPSBjaGlsZE5vZGVQYXJzZVRyZWUsXG4gICAgICAgICAgICBmaXJzdENoaWxkTm9kZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSBmaXJzdENoaWxkTm9kZVBhcnNlVHJlZS5nZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCk7XG5cbiAgICAgICAgZmlyc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gZmlyc3RDaGlsZE5vZGVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uO1xuICAgICAgfVxuXG4gICAgICBpZiAoaW5kZXggPT09IGNoaWxkTm9kZVBhcnNlVHJlZXNMZW5ndGggLSAxKSB7XG4gICAgICAgIGNvbnN0IGxhc3RDaGlsZE5vZGVQYXJzZVRyZWUgPSBjaGlsZE5vZGVQYXJzZVRyZWUsXG4gICAgICAgICAgICBsYXN0Q2hpbGROb2RlUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IGxhc3RDaGlsZE5vZGVQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpO1xuXG4gICAgICAgIGxhc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uICs9IGxhc3RDaGlsZE5vZGVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uO1xuICAgICAgfVxuXG4gICAgICBpZiAoaW5kZXggPCBjaGlsZE5vZGVQYXJzZVRyZWVzTGVuZ3RoIC0gMSkge1xuICAgICAgICBsYXN0VmVydGljYWxCcmFuY2hQb3NpdGlvbiArPSBjaGlsZE5vZGVQYXJzZVRyZWVXaWR0aDtcbiAgICAgICAgbGFzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24gKz0gMTtcblxuICAgICAgICBjaGlsZE5vZGVQYXJzZVRyZWVzV2lkdGggKz0gMTtcbiAgICAgIH1cblxuICAgICAgY2hpbGROb2RlUGFyc2VUcmVlc1dpZHRoICs9IGNoaWxkTm9kZVBhcnNlVHJlZVdpZHRoO1xuICAgICAgY2hpbGROb2RlUGFyc2VUcmVlc0RlcHRoID0gTWF0aC5tYXgoY2hpbGROb2RlUGFyc2VUcmVlc0RlcHRoLCBjaGlsZE5vZGVQYXJzZVRyZWVEZXB0aCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCB3aWR0aCA9IGxhc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIC0gZmlyc3RWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uICsgMSxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21XaWR0aCh3aWR0aCksXG4gICAgICAgICAgaG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZSA9IEhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUuZnJvbVdpZHRoKHdpZHRoKSxcbiAgICAgICAgICBsZWZ0TWFyZ2luV2lkdGggPSBmaXJzdFZlcnRpY2FsQnJhbmNoUG9zaXRpb24sXG4gICAgICAgICAgcmlnaHRNYXJnaW5XaWR0aCA9IGNoaWxkTm9kZVBhcnNlVHJlZXNXaWR0aCAtIHdpZHRoIC0gbGVmdE1hcmdpbldpZHRoO1xuXG4gICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuYWRkTGVmdE1hcmdpbihsZWZ0TWFyZ2luV2lkdGgpO1xuICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmFkZFJpZ2h0TWFyZ2luKHJpZ2h0TWFyZ2luV2lkdGgpO1xuICAgIGhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUuYWRkTGVmdE1hcmdpbihsZWZ0TWFyZ2luV2lkdGgpO1xuICAgIGhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUuYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCk7XG4gICAgXG4gICAgY29uc3QgdmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKSxcbiAgICAgICAgICBjaGlsZE5vZGVzUGFyc2VUcmVlID0gRW1wdHlQYXJzZVRyZWUuZnJvbURlcHRoKGNoaWxkTm9kZVBhcnNlVHJlZXNEZXB0aCwgQ2hpbGROb2Rlc1BhcnNlVHJlZSwgdmVydGljYWxCcmFuY2hQb3NpdGlvbik7XG5cbiAgICBjaGlsZE5vZGVQYXJzZVRyZWVzLmZvckVhY2goZnVuY3Rpb24oY2hpbGROb2RlUGFyc2VUcmVlLCBpbmRleCkge1xuICAgICAgY29uc3QgY2hpbGROb2RlUGFyc2VUcmVlRGVwdGggPSBjaGlsZE5vZGVQYXJzZVRyZWUuZ2V0RGVwdGgoKSxcbiAgICAgICAgICAgIGNsb25lZENoaWxkTm9kZVBhcnNlVHJlZSA9IGNoaWxkTm9kZVBhcnNlVHJlZS5jbG9uZSgpO1xuXG4gICAgICBpZiAoaW5kZXggPCBjaGlsZE5vZGVQYXJzZVRyZWVzTGVuZ3RoIC0gMSkge1xuICAgICAgICBjb25zdCByaWdodE1hcmdpbldpZHRoID0gMTtcblxuICAgICAgICBjbG9uZWRDaGlsZE5vZGVQYXJzZVRyZWUuYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGlsZE5vZGVQYXJzZVRyZWVEZXB0aCA8IGNoaWxkTm9kZVBhcnNlVHJlZXNEZXB0aCkge1xuICAgICAgICBjb25zdCBib3R0b21NYXJnaW5EZXB0aCA9IGNoaWxkTm9kZVBhcnNlVHJlZXNEZXB0aCAtIGNoaWxkTm9kZVBhcnNlVHJlZURlcHRoO1xuXG4gICAgICAgIGNsb25lZENoaWxkTm9kZVBhcnNlVHJlZS5hZGRCb3R0b21NYXJnaW4oYm90dG9tTWFyZ2luRGVwdGgpO1xuICAgICAgfVxuXG4gICAgICBjaGlsZE5vZGVzUGFyc2VUcmVlLmFwcGVuZFRvUmlnaHQoY2xvbmVkQ2hpbGROb2RlUGFyc2VUcmVlKTtcbiAgICB9KTtcblxuICAgIGNoaWxkTm9kZXNQYXJzZVRyZWUuYXBwZW5kVG9Ub3AoaG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZSk7XG4gICAgY2hpbGROb2Rlc1BhcnNlVHJlZS5hcHBlbmRUb1RvcCh2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSk7XG5cbiAgICByZXR1cm4gY2hpbGROb2Rlc1BhcnNlVHJlZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENoaWxkTm9kZXNQYXJzZVRyZWU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFBhcnNlVHJlZSA9IHJlcXVpcmUoJy4uL3BhcnNlVHJlZScpO1xuXG5jbGFzcyBFbXB0eVBhcnNlVHJlZSBleHRlbmRzIFBhcnNlVHJlZSB7XG4gIHN0YXRpYyBmcm9tRGVwdGgoZGVwdGgsIENsYXNzLCAuLi5hcmdzKSB7XG4gICAgQ2xhc3MgPSBDbGFzcyB8fCBFbXB0eVBhcnNlVHJlZTtcbiAgICBcbiAgICBjb25zdCBsaW5lcyA9IFtdO1xuICAgIFxuICAgIGxldCBpbmRleCA9IDA7XG5cbiAgICB3aGlsZSAoaW5kZXggPCBkZXB0aCkge1xuICAgICAgbGluZXNbaW5kZXgrK10gPSAnJztcbiAgICB9XG5cbiAgICBhcmdzLnVuc2hpZnQobGluZXMpO1xuICAgIGFyZ3MudW5zaGlmdChudWxsKTtcblxuICAgIGNvbnN0IGVtcHR5UGFyc2VUcmVlID0gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShDbGFzcywgYXJncykpOyAgLy8vXG5cbiAgICByZXR1cm4gZW1wdHlQYXJzZVRyZWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFbXB0eVBhcnNlVHJlZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUGFyc2VUcmVlID0gcmVxdWlyZSgnLi4vcGFyc2VUcmVlJyk7XG5cbmNsYXNzIEhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUgZXh0ZW5kcyBQYXJzZVRyZWUge1xuICBzdGF0aWMgZnJvbVdpZHRoKHdpZHRoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gc3RyaW5nRnJvbUNoYXJhY3RlcnNXaWR0aCh3aWR0aCwgJy0nKSxcbiAgICAgICAgICBsaW5lID0gc3RyaW5nLCAvLy9cbiAgICAgICAgICBsaW5lcyA9IFtsaW5lXSxcbiAgICAgICAgICBob3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlID0gbmV3IEhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUobGluZXMpO1xuXG4gICAgcmV0dXJuIGhvcml6b250YWxCcmFuY2hQYXJzZVRyZWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBIb3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlO1xuXG5mdW5jdGlvbiBzdHJpbmdGcm9tQ2hhcmFjdGVyc1dpZHRoKGNoYXJhY3RlcnNXaWR0aCwgY2hhcmFjdGVyKSB7XG4gIGxldCBzdHJpbmcgPSAnJztcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY2hhcmFjdGVyc1dpZHRoOyBpbmRleCsrKSB7XG4gICAgc3RyaW5nICs9IGNoYXJhY3RlcjtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVtcHR5UGFyc2VUcmVlID0gcmVxdWlyZSgnLi9lbXB0eScpLFxuICAgICAgQ2hpbGROb2Rlc1BhcnNlVHJlZSA9IHJlcXVpcmUoJy4vY2hpbGROb2RlcycpLFxuICAgICAgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSByZXF1aXJlKCcuL3ZlcnRpY2FsQnJhbmNoJyksXG4gICAgICBQcm9kdWN0aW9uTmFtZVBhcnNlVHJlZSA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbk5hbWUnKTtcblxuY2xhc3MgTm9uVGVybWluYWxOb2RlUGFyc2VUcmVlIGV4dGVuZHMgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUge1xuICBzdGF0aWMgZnJvbU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGUsIGxpbmVzKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICBjaGlsZE5vZGUgPSBmaXJzdENoaWxkTm9kZSxcbiAgICAgICAgICBjaGlsZE5vZGVzTGVuZ3RoID0gY2hpbGROb2Rlcy5sZW5ndGgsXG4gICAgICAgICAgY2hpbGROb2RlT3JOb2Rlc1BhcnNlVHJlZSA9IChjaGlsZE5vZGVzTGVuZ3RoID09PSAxKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGROb2RlLnBhcnNlVHJlZShsaW5lcykgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hpbGROb2Rlc1BhcnNlVHJlZS5mcm9tQ2hpbGROb2RlcyhjaGlsZE5vZGVzLCBsaW5lcyksXG4gICAgICAgICAgcHJvZHVjdGlvbk5hbWVQYXJzZVRyZWUgPSBQcm9kdWN0aW9uTmFtZVBhcnNlVHJlZS5mcm9tTm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZSwgbGluZXMpO1xuICAgIFxuICAgIGxldCBwcm9kdWN0aW9uTmFtZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSBwcm9kdWN0aW9uTmFtZVBhcnNlVHJlZS5nZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCk7XG4gICAgXG4gICAgY29uc3QgY2hpbGROb2RlT3JOb2Rlc1BhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSBjaGlsZE5vZGVPck5vZGVzUGFyc2VUcmVlLmdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKSxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uc0RpZmZlcmVuY2UgPSBwcm9kdWN0aW9uTmFtZVBhcnNlVHJlZVZlcnRpY2FsQnJhbmNoUG9zaXRpb24gLSBjaGlsZE5vZGVPck5vZGVzUGFyc2VUcmVlVmVydGljYWxCcmFuY2hQb3NpdGlvbjtcbiAgICBcbiAgICBsZXQgbGVmdE1hcmdpbldpZHRoID0gdW5kZWZpbmVkO1xuXG4gICAgaWYgKGZhbHNlKSB7XG5cbiAgICB9IGVsc2UgaWYgKHZlcnRpY2FsQnJhbmNoUG9zaXRpb25zRGlmZmVyZW5jZSA8IDApIHtcbiAgICAgIGxlZnRNYXJnaW5XaWR0aCA9IC12ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uc0RpZmZlcmVuY2U7XG5cbiAgICAgIHByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlLmFkZExlZnRNYXJnaW4obGVmdE1hcmdpbldpZHRoKTtcbiAgICB9IGVsc2UgaWYgKHZlcnRpY2FsQnJhbmNoUG9zaXRpb25zRGlmZmVyZW5jZSA+IDApIHtcbiAgICAgIGxlZnRNYXJnaW5XaWR0aCA9ICt2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uc0RpZmZlcmVuY2U7XG5cbiAgICAgIGNoaWxkTm9kZU9yTm9kZXNQYXJzZVRyZWUuYWRkTGVmdE1hcmdpbihsZWZ0TWFyZ2luV2lkdGgpO1xuICAgIH1cblxuICAgIGNvbnN0IHByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlV2lkdGggPSBwcm9kdWN0aW9uTmFtZVBhcnNlVHJlZS5nZXRXaWR0aCgpLFxuICAgICAgICAgIGNoaWxkTm9kZU9yTm9kZXNQYXJzZVRyZWVXaWR0aCA9IGNoaWxkTm9kZU9yTm9kZXNQYXJzZVRyZWUuZ2V0V2lkdGgoKSxcbiAgICAgICAgICB3aWR0aHNEaWZmZXJlbmNlID0gcHJvZHVjdGlvbk5hbWVQYXJzZVRyZWVXaWR0aCAtIGNoaWxkTm9kZU9yTm9kZXNQYXJzZVRyZWVXaWR0aDtcbiAgICBcbiAgICBsZXQgcmlnaHRNYXJnaW5XaWR0aCA9IHVuZGVmaW5lZDtcblxuICAgIGlmIChmYWxzZSkge1xuXG4gICAgfSBlbHNlIGlmICh3aWR0aHNEaWZmZXJlbmNlIDwgMCkge1xuICAgICAgcmlnaHRNYXJnaW5XaWR0aCA9IC13aWR0aHNEaWZmZXJlbmNlO1xuICAgICAgXG4gICAgICBwcm9kdWN0aW9uTmFtZVBhcnNlVHJlZS5hZGRSaWdodE1hcmdpbihyaWdodE1hcmdpbldpZHRoKTtcbiAgICB9IGVsc2UgaWYgKHdpZHRoc0RpZmZlcmVuY2UgPiAwKSB7XG4gICAgICByaWdodE1hcmdpbldpZHRoID0gK3dpZHRoc0RpZmZlcmVuY2U7XG5cbiAgICAgIGNoaWxkTm9kZU9yTm9kZXNQYXJzZVRyZWUuYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCk7XG4gICAgfVxuXG4gICAgcHJvZHVjdGlvbk5hbWVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gcHJvZHVjdGlvbk5hbWVQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpO1xuXG4gICAgY29uc3QgcHJvZHVjdGlvbk5hbWVQYXJzZVRyZWVEZXB0aCA9IHByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlLmdldERlcHRoKCksXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlUGFyc2VUcmVlRGVwdGggPSBwcm9kdWN0aW9uTmFtZVBhcnNlVHJlZURlcHRoLCAvLy9cbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gcHJvZHVjdGlvbk5hbWVQYXJzZVRyZWVWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSBFbXB0eVBhcnNlVHJlZS5mcm9tRGVwdGgobm9uVGVybWluYWxOb2RlUGFyc2VUcmVlRGVwdGgsIE5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZSwgdmVydGljYWxCcmFuY2hQb3NpdGlvbik7XG5cbiAgICBub25UZXJtaW5hbE5vZGVQYXJzZVRyZWUuYXBwZW5kVG9SaWdodChwcm9kdWN0aW9uTmFtZVBhcnNlVHJlZSk7XG4gICAgbm9uVGVybWluYWxOb2RlUGFyc2VUcmVlLmFwcGVuZFRvQm90dG9tKGNoaWxkTm9kZU9yTm9kZXNQYXJzZVRyZWUpO1xuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vblRlcm1pbmFsTm9kZVBhcnNlVHJlZTtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gcmVxdWlyZSgnLi92ZXJ0aWNhbEJyYW5jaCcpO1xuXG5jbGFzcyBQcm9kdWN0aW9uTmFtZVBhcnNlVHJlZSBleHRlbmRzIFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIHtcbiAgc3RhdGljIGZyb21Ob25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBsaW5lcykge1xuICAgIGNvbnN0IHByb2R1Y3Rpb25OYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFByb2R1Y3Rpb25OYW1lKCksXG4gICAgICAgICAgZmlyc3RMaW5lID0gbm9uVGVybWluYWxOb2RlLmdldEZpcnN0TGluZSgpLFxuICAgICAgICAgIGxhc3RMaW5lID0gbm9uVGVybWluYWxOb2RlLmdldExhc3RMaW5lKCksXG4gICAgICAgICAgZmlyc3RMaW5lSW5kZXggPSBsaW5lcy5pbmRleE9mKGZpcnN0TGluZSksXG4gICAgICAgICAgbGFzdExpbmVJbmRleCA9IGxpbmVzLmluZGV4T2YobGFzdExpbmUpLFxuICAgICAgICAgIGZpcnN0TGluZU51bWJlciA9IGZpcnN0TGluZUluZGV4ICsgMSxcbiAgICAgICAgICBsYXN0TGluZU51bWJlciA9IGxhc3RMaW5lSW5kZXggKyAxLFxuICAgICAgICAgIHN0cmluZyA9IGAke3Byb2R1Y3Rpb25OYW1lfSAoJHtmaXJzdExpbmVOdW1iZXJ9LSR7bGFzdExpbmVOdW1iZXJ9KWAsXG4gICAgICAgICAgc3RyaW5nTGVuZ3RoID0gc3RyaW5nLmxlbmd0aCxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoID0gc3RyaW5nTGVuZ3RoLCAvLy9cbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21XaWR0aCh2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoKSxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpLFxuICAgICAgICAgIHByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZnJvbVN0cmluZyhzdHJpbmcsIFByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKTtcblxuICAgIHByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlLmFwcGVuZFRvVG9wKHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlKTtcblxuICAgIHJldHVybiBwcm9kdWN0aW9uTmFtZVBhcnNlVHJlZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2R1Y3Rpb25OYW1lUGFyc2VUcmVlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IHJlcXVpcmUoJy4vdmVydGljYWxCcmFuY2gnKTtcblxuY2xhc3MgVGVybWluYWxOb2RlUGFyc2VUcmVlIGV4dGVuZHMgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUge1xuICBzdGF0aWMgZnJvbVRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGUsIGxpbmVzKSB7XG4gICAgY29uc3QgbGluZSA9IHRlcm1pbmFsTm9kZS5nZXRMaW5lKCksXG4gICAgICAgICAgbGluZUluZGV4ID0gbGluZXMuaW5kZXhPZihsaW5lKSxcbiAgICAgICAgICBsaW5lTnVtYmVyID0gbGluZUluZGV4ICsgMSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuID0gdGVybWluYWxOb2RlLmdldFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZSA9IHNpZ25pZmljYW50VG9rZW4uZ2V0VHlwZSgpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5FcnJvciA9IHNpZ25pZmljYW50VG9rZW4uZ2V0RXJyb3IoKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuQ29udGVudCA9IHNpZ25pZmljYW50VG9rZW4uZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGNvbnRlbnQgPSBzaWduaWZpY2FudFRva2VuQ29udGVudCxcbiAgICAgICAgICBkZXNjcmlwdGlvbiA9IChzaWduaWZpY2FudFRva2VuRXJyb3IgPT09IHRydWUpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Vycm9yJyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGUsXG4gICAgICAgICAgc3RyaW5nID0gYCR7Y29udGVudH1bJHtkZXNjcmlwdGlvbn1dICgke2xpbmVOdW1iZXJ9KWAsXG4gICAgICAgICAgc3RyaW5nTGVuZ3RoID0gc3RyaW5nLmxlbmd0aCxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoID0gc3RyaW5nTGVuZ3RoLCAvLy9cbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21XaWR0aCh2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoKSxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpLCBcbiAgICAgICAgICB0ZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tU3RyaW5nKHN0cmluZywgVGVybWluYWxOb2RlUGFyc2VUcmVlLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKTtcbiAgICBcbiAgICB0ZXJtaW5hbE5vZGVQYXJzZVRyZWUuYXBwZW5kVG9Ub3AodmVydGljYWxCcmFuY2hQYXJzZVRyZWUpO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZVBhcnNlVHJlZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRlcm1pbmFsTm9kZVBhcnNlVHJlZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUGFyc2VUcmVlID0gcmVxdWlyZSgnLi4vcGFyc2VUcmVlJyk7XG5cbmNsYXNzIFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIGV4dGVuZHMgUGFyc2VUcmVlIHtcbiAgY29uc3RydWN0b3IobGluZXMsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pIHtcbiAgICBzdXBlcihsaW5lcyk7XG4gICAgXG4gICAgdGhpcy52ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gdmVydGljYWxCcmFuY2hQb3NpdGlvbjtcbiAgfVxuICBcbiAgZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uO1xuICB9XG5cbiAgYWRkTGVmdE1hcmdpbihsZWZ0TWFyZ2luV2lkdGgpIHtcbiAgICBzdXBlci5hZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCk7XG5cbiAgICB0aGlzLnZlcnRpY2FsQnJhbmNoUG9zaXRpb24gKz0gbGVmdE1hcmdpbldpZHRoOyAvLy9cbiAgfVxuXG4gIHN0YXRpYyBmcm9tV2lkdGgod2lkdGgpIHtcbiAgICBjb25zdCBzdHJpbmcgPSAnfCcsXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IDAsXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tU3RyaW5nKHN0cmluZywgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pLFxuICAgICAgICAgIGxlZnRNYXJnaW5XaWR0aCA9IE1hdGguZmxvb3Iod2lkdGgvMiksXG4gICAgICAgICAgcmlnaHRNYXJnaW5XaWR0aCA9IHdpZHRoIC0gbGVmdE1hcmdpbldpZHRoIC0gMTtcblxuICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmFkZExlZnRNYXJnaW4obGVmdE1hcmdpbldpZHRoKTtcbiAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5hZGRSaWdodE1hcmdpbihyaWdodE1hcmdpbldpZHRoKTtcblxuICAgIHJldHVybiB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21TdHJpbmcoc3RyaW5nLCBDbGFzcywgdmVydGljYWxCcmFuY2hQb3NpdGlvbikge1xuICAgIENsYXNzID0gQ2xhc3MgfHwgUGFyc2VUcmVlO1xuXG4gICAgY29uc3QgbGluZSA9IHN0cmluZywgLy8vXG4gICAgICAgICAgbGluZXMgPSBbbGluZV0sXG4gICAgICAgICAgYXJncyA9IFtudWxsLCBsaW5lcywgdmVydGljYWxCcmFuY2hQb3NpdGlvbl0sXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KENsYXNzLCBhcmdzKSk7ICAvLy9cblxuICAgIHJldHVybiB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDb250ZXh0ID0gcmVxdWlyZSgnLi9jb250ZXh0Jyk7XG5cbmNsYXNzIENvbW1vblBhcnNlciB7XG4gIGNvbnN0cnVjdG9yKHByb2R1Y3Rpb25zKSB7XG4gICAgdGhpcy5wcm9kdWN0aW9ucyA9IHByb2R1Y3Rpb25zO1xuICB9XG5cbiAgZ2V0UHJvZHVjdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvZHVjdGlvbnM7XG4gIH1cblxuICBwYXJzZSh0b2tlbnMsIHByb2R1Y3Rpb24gPSBudWxsKSB7XG4gICAgbGV0IG5vZGUgPSBudWxsO1xuXG4gICAgaWYgKHByb2R1Y3Rpb24gPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHByb2R1Y3Rpb25zTGVuZ3RoID0gdGhpcy5wcm9kdWN0aW9ucy5sZW5ndGg7XG5cbiAgICAgIGlmIChwcm9kdWN0aW9uc0xlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgZmlyc3RQcm9kdWN0aW9uID0gZmlyc3QodGhpcy5wcm9kdWN0aW9ucyk7XG5cbiAgICAgICAgcHJvZHVjdGlvbiA9IGZpcnN0UHJvZHVjdGlvbjsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHByb2R1Y3Rpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBuZXcgQ29udGV4dCh0b2tlbnMsIHRoaXMucHJvZHVjdGlvbnMpLFxuICAgICAgICAgICAgbm9XaGl0ZXNwYWNlID0gZmFsc2UsXG4gICAgICAgICAgICBub2RlT3JOb2RlcyA9IHByb2R1Y3Rpb24ucGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKTtcblxuICAgICAgaWYgKG5vZGVPck5vZGVzICE9PSBudWxsKSB7XG4gICAgICAgIG5vZGUgPSAobm9kZU9yTm9kZXMgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgICAgICBmaXJzdChub2RlT3JOb2RlcykgOlxuICAgICAgICAgICAgICAgICAgIG5vZGVPck5vZGVzO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgZmluZFByb2R1Y3Rpb24ocHJvZHVjdGlvbk5hbWUpIHtcbiAgICBjb25zdCBuYW1lID0gcHJvZHVjdGlvbk5hbWUsICAvLy9cbiAgICAgICAgICBpbmRleCA9IHRoaXMuaW5kZXhPZlByb2R1Y3Rpb25CeU5hbWUobmFtZSksXG4gICAgICAgICAgcHJvZHVjdGlvbiA9IChpbmRleCAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdGlvbnNbaW5kZXhdIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgICByZXR1cm4gcHJvZHVjdGlvbjtcbiAgfVxuXG4gIGluZGV4T2ZQcm9kdWN0aW9uQnlOYW1lKG5hbWUpIHtcbiAgICBsZXQgaW5kZXgsXG4gICAgICAgIGZvdW5kSW5kZXggPSBudWxsO1xuXG4gICAgdGhpcy5wcm9kdWN0aW9ucy5zb21lKGZ1bmN0aW9uKHByb2R1Y3Rpb24sIGluZGV4KSB7XG4gICAgICBjb25zdCBwcm9kdWN0aW9uTmFtZSA9IHByb2R1Y3Rpb24uZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAocHJvZHVjdGlvbk5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgZm91bmRJbmRleCA9IGluZGV4O1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaW5kZXggPSBmb3VuZEluZGV4OyAvLy9cblxuICAgIHJldHVybiBpbmRleDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1vblBhcnNlcjtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCB7IHNwZWNpYWxTeW1ib2xzLCBTaWduaWZpY2FudFRva2VuIH0gPSBsZXhlcnM7XG5cbmNvbnN0IFRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL3Rlcm1pbmFsJyk7XG5cbmNsYXNzIEVuZE9mTGluZVBhcnQge1xuICBjb25zdHJ1Y3Rvcihub1doaXRlc3BhY2UpIHtcbiAgICB0aGlzLm5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZTtcbiAgfVxuXG4gIHBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSkge1xuICAgIG5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZSB8fCB0aGlzLm5vV2hpdGVzcGFjZTsgLy8vXG5cbiAgICBsZXQgdGVybWluYWxOb2RlID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBzYXZlZEluZGV4ID0gY29udGV4dC5zYXZlZEluZGV4KCksXG4gICAgICAgICAgbmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuID0gY29udGV4dC5nZXROZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4obm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuID0gbmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuOyAvLy9cblxuICAgIGlmIChzaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRUeXBlKCksXG4gICAgICAgICAgIGZvdW5kID0gKHR5cGUgPT09IFNpZ25pZmljYW50VG9rZW4udHlwZXMuZW5kT2ZMaW5lKTtcblxuICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgIHRlcm1pbmFsTm9kZSA9IFRlcm1pbmFsTm9kZS5mcm9tU2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaWYgKHRlcm1pbmFsTm9kZSA9PT0gbnVsbCkge1xuICAgICAgY29udGV4dC5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ltYm9sKHN5bWJvbCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpIHtcbiAgICBsZXQgZW5kT2ZMaW5lUGFydCA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgZm91bmQgPSAoc3ltYm9sID09PSBzcGVjaWFsU3ltYm9scy5FTkRfT0ZfTElORSk7XG5cbiAgICBpZiAoZm91bmQpIHtcbiAgICAgIGVuZE9mTGluZVBhcnQgPSBuZXcgRW5kT2ZMaW5lUGFydChub1doaXRlc3BhY2UpO1xuICAgIH1cblxuICAgIHJldHVybiBlbmRPZkxpbmVQYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRW5kT2ZMaW5lUGFydDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRXBzaWxvblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL3Rlcm1pbmFsL2Vwc2lsb24nKTtcblxuY2xhc3MgRXBzaWxvblBhcnQge1xuICBwYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpIHtcbiAgICBjb25zdCBlcHNpbG9uVGVybWluYWxOb2RlID0gbmV3IEVwc2lsb25UZXJtaW5hbE5vZGUoKTtcblxuICAgIHJldHVybiBlcHNpbG9uVGVybWluYWxOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSkge1xuICAgIGxldCAgZXBzaWxvblBhcnQgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IGZvdW5kID0gKHN5bWJvbCA9PT0gJ861Jyk7XG4gICAgXG4gICAgaWYgKGZvdW5kKSB7XG4gICAgICBlcHNpbG9uUGFydCA9IG5ldyBFcHNpbG9uUGFydCgpO1xuICAgIH1cblxuICAgIHJldHVybiBlcHNpbG9uUGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVwc2lsb25QYXJ0OyIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgU2VxdWVuY2VPZlBhcnRzUGFydCA9IHJlcXVpcmUoJy4vc2VxdWVuY2VPZlBhcnRzJyksXG4gICAgICBaZXJvT3JNb3JlUGFydHNQYXJ0ID0gcmVxdWlyZSgnLi96ZXJvT3JNb3JlUGFydHMnKTtcblxuY2xhc3MgT25lT3JNb3JlUGFydHNQYXJ0IGV4dGVuZHMgU2VxdWVuY2VPZlBhcnRzUGFydCB7XG4gIHBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSkge1xuICAgIG5vV2hpdGVzcGFjZSA9IHRoaXMuZ2V0Tm9XaGl0ZXNwYWNlKCk7ICAvLy9cblxuICAgIGxldCBub2RlcyA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgcHJvZHVjdGlvbnMgPSBjb250ZXh0LmdldFByb2R1Y3Rpb25zKCksXG4gICAgICAgICAgdGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uID0gdGhpcy50ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24ocHJvZHVjdGlvbnMpO1xuXG4gICAgaWYgKHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uTm9kZU9yTm9kZXMgPSB0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24ucGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICAgIHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvblBhcnNlZCA9ICh0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb25Ob2RlT3JOb2RlcyAhPT0gbnVsbCk7XG5cbiAgICAgIGlmICh0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb25QYXJzZWQpIHtcbiAgICAgICAgbm9kZXMgPSAodGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uTm9kZU9yTm9kZXMgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgICAgICAgdGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uTm9kZU9yTm9kZXMgOlxuICAgICAgICAgICAgICAgICAgICBbdGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uTm9kZU9yTm9kZXNdO1xuXG4gICAgICAgIGNvbnN0IHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBaZXJvT3JNb3JlUGFydHNQYXJ0LmZyb21PbmVPck1vcmVQYXJ0c1BhcnQodGhpcyksIC8vL1xuICAgICAgICAgICAgICB6ZXJvT3JNb3JlUGFydHNQYXJ0Tm9kZU9yTm9kZXMgPSB6ZXJvT3JNb3JlUGFydHNQYXJ0LnBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSk7XG5cbiAgICAgICAgbm9kZXMgPSBub2Rlcy5jb25jYXQoemVyb09yTW9yZVBhcnRzUGFydE5vZGVPck5vZGVzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN5bWJvbChzeW1ib2wsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlKSB7XG4gICAgY29uc3QgcmVnRXhwID0gLyhbXipdKylcXCskLyxcbiAgICAgICAgICBDbGFzcyA9IE9uZU9yTW9yZVBhcnRzUGFydCxcbiAgICAgICAgICBvbmVPck1vcmVQYXJ0c1BhcnQgPSBzdXBlci5mcm9tU3ltYm9sKHN5bWJvbCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UsIHJlZ0V4cCwgQ2xhc3MpO1xuXG4gICAgcmV0dXJuIG9uZU9yTW9yZVBhcnRzUGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9uZU9yTW9yZVBhcnRzUGFydDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgU2VxdWVuY2VPZlBhcnRzUGFydCA9IHJlcXVpcmUoJy4vc2VxdWVuY2VPZlBhcnRzJyk7XG5cbmNsYXNzIE9wdGlvbmFsUGFydFBhcnQgZXh0ZW5kcyBTZXF1ZW5jZU9mUGFydHNQYXJ0IHtcbiAgcGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbm9XaGl0ZXNwYWNlID0gdGhpcy5nZXROb1doaXRlc3BhY2UoKTsgIC8vL1xuXG4gICAgbGV0IG5vZGVzID0gW107XG4gICAgXG4gICAgY29uc3QgcHJvZHVjdGlvbnMgPSBjb250ZXh0LmdldFByb2R1Y3Rpb25zKCksXG4gICAgICAgICAgdGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uID0gdGhpcy50ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24ocHJvZHVjdGlvbnMpO1xuICAgIFxuICAgIGlmICh0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbk5vZGVPck5vZGVzID0gdGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uLnBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgdGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uUGFyc2VkID0gKHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbk5vZGVPck5vZGVzICE9PSBudWxsKTtcblxuICAgICAgaWYgKHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvblBhcnNlZCkge1xuICAgICAgICBub2RlcyA9IHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbk5vZGVPck5vZGVzO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuICBcbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSkge1xuICAgIGNvbnN0IHJlZ0V4cCA9IC8oW14qXSspXFw/JC8sXG4gICAgICAgICAgQ2xhc3MgPSBPcHRpb25hbFBhcnRQYXJ0LFxuICAgICAgICAgIG9wdGlvbmFsUGFydFBhcnQgPSBzdXBlci5mcm9tU3ltYm9sKHN5bWJvbCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UsIHJlZ0V4cCwgQ2xhc3MpO1xuXG4gICAgcmV0dXJuIG9wdGlvbmFsUGFydFBhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPcHRpb25hbFBhcnRQYXJ0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBQcm9kdWN0aW9uTmFtZVBhcnQge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBub1doaXRlc3BhY2UpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlO1xuICB9XG4gIFxuICBwYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpIHtcbiAgICBub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2UgfHwgdGhpcy5ub1doaXRlc3BhY2U7IC8vL1xuXG4gICAgbGV0IG5vZGVPck5vZGVzID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBwcm9kdWN0aW9ucyA9IGNvbnRleHQuZ2V0UHJvZHVjdGlvbnMoKSxcbiAgICAgICAgICBwcm9kdWN0aW9uID0gUHJvZHVjdGlvbk5hbWVQYXJ0LmZpbmRQcm9kdWN0aW9uKHRoaXMubmFtZSwgcHJvZHVjdGlvbnMpO1xuXG4gICAgaWYgKHByb2R1Y3Rpb24gIT09IG51bGwpIHtcbiAgICAgIG5vZGVPck5vZGVzID0gcHJvZHVjdGlvbi5wYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlT3JOb2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmaW5kUHJvZHVjdGlvbihuYW1lLCBwcm9kdWN0aW9ucykge1xuICAgIGxldCBmb3VuZFByb2R1Y3Rpb24gPSBudWxsO1xuXG4gICAgcHJvZHVjdGlvbnMuc29tZShmdW5jdGlvbihwcm9kdWN0aW9uKSB7XG4gICAgICBjb25zdCBwcm9kdWN0aW9uTmFtZVBhcnQgPSBwcm9kdWN0aW9uLmdldE5hbWUoKTtcblxuICAgICAgaWYgKG5hbWUgPT09IHByb2R1Y3Rpb25OYW1lUGFydCkge1xuICAgICAgICBmb3VuZFByb2R1Y3Rpb24gPSBwcm9kdWN0aW9uO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgcHJvZHVjdGlvbiA9IGZvdW5kUHJvZHVjdGlvbjtcblxuICAgIHJldHVybiBwcm9kdWN0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSkge1xuICAgIGNvbnN0IG5hbWUgPSBzeW1ib2wsICAvLy9cbiAgICAgICAgICBwcm9kdWN0aW9uTmFtZVBhcnQgPSBuZXcgUHJvZHVjdGlvbk5hbWVQYXJ0KG5hbWUsIG5vV2hpdGVzcGFjZSk7XG4gIFxuICAgIHJldHVybiBwcm9kdWN0aW9uTmFtZVBhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9kdWN0aW9uTmFtZVBhcnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL3Rlcm1pbmFsJyk7XG5cbmNsYXNzIFJlZ3VsYXJFeHByZXNzaW9uUGFydCB7XG4gIGNvbnN0cnVjdG9yKHJlZ0V4cCwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgdGhpcy5yZWdFeHAgPSByZWdFeHA7XG4gICAgdGhpcy5ub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2U7XG4gIH1cblxuICBwYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpIHtcbiAgICBub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2UgfHwgdGhpcy5ub1doaXRlc3BhY2U7IC8vL1xuXG4gICAgbGV0IHRlcm1pbmFsTm9kZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IGNvbnRleHQuc2F2ZWRJbmRleCgpLFxuICAgICAgICAgIG5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbiA9IGNvbnRleHQuZ2V0TmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuKG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IG5leHROb25XaGl0ZXNwYWNlU2lnbmlmaWNhbnRUb2tlbjsgLy8vXG5cbiAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29udGVudCA9IHNpZ25pZmljYW50VG9rZW4uZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2godGhpcy5yZWdFeHApO1xuXG4gICAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyksXG4gICAgICAgICAgICAgIHBhcnNlZCA9IChmaXJzdE1hdGNoID09PSBjb250ZW50KTtcblxuICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgdGVybWluYWxOb2RlID0gVGVybWluYWxOb2RlLmZyb21TaWduaWZpY2FudFRva2VuKHNpZ25pZmljYW50VG9rZW4pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGlmICh0ZXJtaW5hbE5vZGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN5bWJvbChzeW1ib2wsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbGV0IHJlZ3VsYXJFeHByZXNzaW9uUGFydCA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgcmVndWxhckV4cHJlc3Npb25QYXJ0UmVnRXhwID0gL15cXC8oW14vXSspXFwvJC8sXG4gICAgICAgICAgbWF0Y2hlcyA9IHN5bWJvbC5tYXRjaChyZWd1bGFyRXhwcmVzc2lvblBhcnRSZWdFeHApO1xuXG4gICAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICAgICAgcmVnRXhwUGF0dGVybiA9IHNlY29uZE1hdGNoLCAgLy8vXG4gICAgICAgICAgICByZWdFeHAgPSBuZXcgUmVnRXhwKGBeJHtyZWdFeHBQYXR0ZXJufSRgKTsgLy8vXG5cbiAgICAgIHJlZ3VsYXJFeHByZXNzaW9uUGFydCA9IG5ldyBSZWd1bGFyRXhwcmVzc2lvblBhcnQocmVnRXhwLCBub1doaXRlc3BhY2UpO1xuICAgIH1cblxuICAgIHJldHVybiByZWd1bGFyRXhwcmVzc2lvblBhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWd1bGFyRXhwcmVzc2lvblBhcnQ7XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbmRPZkxpbmVQYXJ0ID0gcmVxdWlyZSgnLi9lbmRPZkxpbmUnKSxcbiAgICAgIFByb2R1Y3Rpb25OYW1lUGFydCA9IHJlcXVpcmUoJy4vcHJvZHVjdGlvbk5hbWUnKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUGFydCA9IHJlcXVpcmUoJy4vdGVybWluYWxTeW1ib2wnKSxcbiAgICAgIFNpZ25pZmljYW50VG9rZW5UeXBlUGFydCA9IHJlcXVpcmUoJy4vc2lnbmlmaWNhbnRUb2tlblR5cGUnKTtcblxuY2xhc3MgU2VxdWVuY2VPZlBhcnRzUGFydCB7XG4gIGNvbnN0cnVjdG9yKHRlcm1pbmFsUGFydCwgcHJvZHVjdGlvbk5hbWUsIG5vV2hpdGVzcGFjZSkge1xuICAgIHRoaXMudGVybWluYWxQYXJ0ID0gdGVybWluYWxQYXJ0O1xuICAgIHRoaXMucHJvZHVjdGlvbk5hbWUgPSBwcm9kdWN0aW9uTmFtZTtcbiAgICB0aGlzLm5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZTtcbiAgfVxuXG4gIGdldFRlcm1pbmFsUGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtaW5hbFBhcnQ7XG4gIH1cblxuICBnZXRQcm9kdWN0aW9uTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9kdWN0aW9uTmFtZTtcbiAgfVxuICBcbiAgZ2V0Tm9XaGl0ZXNwYWNlKCkge1xuICAgIHJldHVybiB0aGlzLm5vV2hpdGVzcGFjZTtcbiAgfVxuXG4gIHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbihwcm9kdWN0aW9ucykge1xuICAgIGNvbnN0IHByb2R1Y3Rpb24gPSBQcm9kdWN0aW9uTmFtZVBhcnQuZmluZFByb2R1Y3Rpb24odGhpcy5wcm9kdWN0aW9uTmFtZSwgcHJvZHVjdGlvbnMpLFxuICAgICAgICAgIHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbiA9ICh0aGlzLnRlcm1pbmFsUGFydCAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGVybWluYWxQYXJ0IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Rpb247XG5cbiAgICByZXR1cm4gdGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSwgcmVnRXhwLCBDbGFzcykge1xuICAgIGxldCBwYXJ0ID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBtYXRjaGVzID0gc3ltYm9sLm1hdGNoKHJlZ0V4cCk7XG5cbiAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICAgIHN5bWJvbCA9IHNlY29uZE1hdGNoOyAvLy9cblxuICAgICAgY29uc3QgdGVybWluYWxQYXJ0ID0gU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0LmZyb21TeW1ib2woc3ltYm9sLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGVybWluYWxTeW1ib2xQYXJ0LmZyb21TeW1ib2woc3ltYm9sLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbmRPZkxpbmVQYXJ0LmZyb21TeW1ib2woc3ltYm9sLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgICBwcm9kdWN0aW9uTmFtZSA9IHN5bWJvbDtcblxuICAgICAgcGFydCA9IG5ldyBDbGFzcyh0ZXJtaW5hbFBhcnQsIHByb2R1Y3Rpb25OYW1lLCBub1doaXRlc3BhY2UpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2VxdWVuY2VPZlBhcnRzUGFydDtcblxuZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBUZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS90ZXJtaW5hbCcpO1xuXG5jbGFzcyBTaWduaWZpY2FudFRva2VuVHlwZVBhcnQge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBub1doaXRlc3BhY2UpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMubm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlO1xuICB9XG5cbiAgcGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbm9XaGl0ZXNwYWNlID0gbm9XaGl0ZXNwYWNlIHx8IHRoaXMubm9XaGl0ZXNwYWNlOyAvLy9cbiAgICBcbiAgICBsZXQgdGVybWluYWxOb2RlID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBzYXZlZEluZGV4ID0gY29udGV4dC5zYXZlZEluZGV4KCksXG4gICAgICAgICAgbmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuID0gY29udGV4dC5nZXROZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4obm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuID0gbmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuOyAvLy9cblxuICAgIGlmIChzaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRUeXBlKCksXG4gICAgICAgICAgICBwYXJzZWQgPSAodHlwZSA9PT0gdGhpcy50eXBlKTsgIC8vL1xuXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIHRlcm1pbmFsTm9kZSA9IFRlcm1pbmFsTm9kZS5mcm9tU2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGVybWluYWxOb2RlID09PSBudWxsKSB7XG4gICAgICBjb250ZXh0LmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybWluYWxOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSkge1xuICAgIGxldCBzaWduaWZpY2FudFRva2VuVHlwZVBhcnQgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW5UeXBlUGFydFJlZ0V4cCA9IC9eXFxbKFteL10rKVxcXSQvLFxuICAgICAgICAgIG1hdGNoZXMgPSBzeW1ib2wubWF0Y2goc2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0UmVnRXhwKTtcblxuICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICAgIHR5cGUgPSBzZWNvbmRNYXRjaCwgLy8vXG4gICAgICAgICAgICBmb3VuZFR5cGUgPSBzaWduaWZpY2FudFRva2VuVHlwZXMuZmluZChmdW5jdGlvbihzaWduaWZpY2FudFRva2VuVHlwZSkge1xuICAgICAgICAgICAgICBjb25zdCBmb3VuZCA9ICh0eXBlID09PSBzaWduaWZpY2FudFRva2VuVHlwZSk7XG4gIFxuICAgICAgICAgICAgICByZXR1cm4gZm91bmQ7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGZvdW5kID0gKGZvdW5kVHlwZSAhPT0gdW5kZWZpbmVkKTtcblxuICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlUGFydCA9IG5ldyBTaWduaWZpY2FudFRva2VuVHlwZVBhcnQodHlwZSwgbm9XaGl0ZXNwYWNlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0O1xuXG5mdW5jdGlvbiBzZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzFdOyB9XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9ub2RlL3Rlcm1pbmFsJyk7XG5cbmNsYXNzIFRlcm1pbmFsU3ltYm9sUGFydCB7XG4gIGNvbnN0cnVjdG9yKHN5bWJvbCwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgdGhpcy5zeW1ib2wgPSBzeW1ib2w7XG4gICAgdGhpcy5ub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2U7XG4gIH1cblxuICBwYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpIHtcbiAgICBub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2UgfHwgdGhpcy5ub1doaXRlc3BhY2U7IC8vL1xuXG4gICAgbGV0IHRlcm1pbmFsTm9kZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IGNvbnRleHQuc2F2ZWRJbmRleCgpLFxuICAgICAgbmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuID0gY29udGV4dC5nZXROZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4obm9XaGl0ZXNwYWNlKSxcbiAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBuZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW47IC8vL1xuXG4gICAgaWYgKHNpZ25pZmljYW50VG9rZW4gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBzaWduaWZpY2FudFRva2VuLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBwYXJzZWQgPSAoY29udGVudCA9PT0gdGhpcy5zeW1ib2wpOyAgLy8vXG5cbiAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgdGVybWluYWxOb2RlID0gVGVybWluYWxOb2RlLmZyb21TaWduaWZpY2FudFRva2VuKHNpZ25pZmljYW50VG9rZW4pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0ZXJtaW5hbE5vZGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN5bWJvbChzeW1ib2wsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbGV0IHRlcm1pbmFsU3ltYm9sUGFydCA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgdGVybWluYWxTeW1ib2xQYXJ0UmVnRXhwID0gL14nKFteJ10rKSckLyxcbiAgICAgICAgICBtYXRjaGVzID0gc3ltYm9sLm1hdGNoKHRlcm1pbmFsU3ltYm9sUGFydFJlZ0V4cCk7XG5cbiAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG4gICAgICBcbiAgICAgIHN5bWJvbCA9IHNlY29uZE1hdGNoOyAvLy9cblxuICAgICAgdGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydChzeW1ib2wsIG5vV2hpdGVzcGFjZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1pbmFsU3ltYm9sUGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRlcm1pbmFsU3ltYm9sUGFydDtcblxuZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBUZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS90ZXJtaW5hbCcpO1xuXG5jbGFzcyBXaWxkY2FyZFBhcnQge1xuICBjb25zdHJ1Y3Rvcihub1doaXRlc3BhY2UpIHtcbiAgICB0aGlzLm5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZTtcbiAgfVxuXG4gIHBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSkge1xuICAgIG5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZSB8fCB0aGlzLm5vV2hpdGVzcGFjZTsgLy8vXG5cbiAgICBsZXQgdGVybWluYWxOb2RlID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBzYXZlZEluZGV4ID0gY29udGV4dC5zYXZlZEluZGV4KCksXG4gICAgICAgICAgbmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuID0gY29udGV4dC5nZXROZXh0Tm9uV2hpdGVzcGFjZVNpZ25pZmljYW50VG9rZW4obm9XaGl0ZXNwYWNlKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuID0gbmV4dE5vbldoaXRlc3BhY2VTaWduaWZpY2FudFRva2VuOyAvLy9cblxuICAgIGlmIChzaWduaWZpY2FudFRva2VuICE9PSBudWxsKSB7XG4gICAgICB0ZXJtaW5hbE5vZGUgPSBUZXJtaW5hbE5vZGUuZnJvbVNpZ25pZmljYW50VG9rZW4oc2lnbmlmaWNhbnRUb2tlbik7XG4gICAgfVxuXG4gICAgaWYgKHRlcm1pbmFsTm9kZSA9PT0gbnVsbCkge1xuICAgICAgY29udGV4dC5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ltYm9sKHN5bWJvbCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpIHtcbiAgICBsZXQgd2lsZGNhcmRQYXJ0ID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCB3aWxkY2FyZFBhcnRSZWdFeHAgPSAvXlxcKiQvLFxuICAgICAgICAgIG1hdGNoZXMgPSBzeW1ib2wubWF0Y2god2lsZGNhcmRQYXJ0UmVnRXhwKTtcblxuICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICB3aWxkY2FyZFBhcnQgPSBuZXcgV2lsZGNhcmRQYXJ0KG5vV2hpdGVzcGFjZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdpbGRjYXJkUGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFdpbGRjYXJkUGFydDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgU2VxdWVuY2VPZlBhcnRzUGFydCA9IHJlcXVpcmUoJy4vc2VxdWVuY2VPZlBhcnRzJyk7XG5cbmNsYXNzIFplcm9Pck1vcmVQYXJ0c1BhcnQgZXh0ZW5kcyBTZXF1ZW5jZU9mUGFydHNQYXJ0IHtcbiAgcGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKSB7XG4gICAgbm9XaGl0ZXNwYWNlID0gdGhpcy5nZXROb1doaXRlc3BhY2UoKTsgIC8vL1xuXG4gICAgbGV0IG5vZGVzID0gW107XG4gICAgXG4gICAgY29uc3QgcHJvZHVjdGlvbnMgPSBjb250ZXh0LmdldFByb2R1Y3Rpb25zKCksXG4gICAgICAgICAgdGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uID0gdGhpcy50ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24ocHJvZHVjdGlvbnMpO1xuXG4gICAgaWYgKHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbiAhPT0gbnVsbCkge1xuICAgICAgZm9yKDs7KSB7XG4gICAgICAgIGNvbnN0IHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbk5vZGVPck5vZGVzID0gdGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uLnBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgICAgIHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvblBhcnNlZCA9ICh0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb25Ob2RlT3JOb2RlcyAhPT0gbnVsbCk7XG5cbiAgICAgICAgaWYgKHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvblBhcnNlZCkge1xuICAgICAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbk5vZGVPck5vZGVzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuICBcbiAgc3RhdGljIGZyb21TeW1ib2woc3ltYm9sLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSkge1xuICAgIGNvbnN0IHJlZ0V4cCA9IC8oW14qXSspXFwqJC8sXG4gICAgICAgICAgQ2xhc3MgPSBaZXJvT3JNb3JlUGFydHNQYXJ0LFxuICAgICAgICAgIHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBzdXBlci5mcm9tU3ltYm9sKHN5bWJvbCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UsIHJlZ0V4cCwgQ2xhc3MpO1xuXG4gICAgcmV0dXJuIHplcm9Pck1vcmVQYXJ0c1BhcnQ7XG4gIH1cblxuXG4gIHN0YXRpYyBmcm9tT25lT3JNb3JlUGFydHNQYXJ0KG9uZU9yTW9yZVBhcnRzUGFydCkge1xuICAgIGNvbnN0IHRlcm1pbmFsUGFydCA9IG9uZU9yTW9yZVBhcnRzUGFydC5nZXRUZXJtaW5hbFBhcnQoKSxcbiAgICAgICAgICBwcm9kdWN0aW9uTmFtZSA9IG9uZU9yTW9yZVBhcnRzUGFydC5nZXRQcm9kdWN0aW9uTmFtZSgpLFxuICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IG9uZU9yTW9yZVBhcnRzUGFydC5nZXROb1doaXRlc3BhY2UoKSxcbiAgICAgICAgICB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gbmV3IFplcm9Pck1vcmVQYXJ0c1BhcnQodGVybWluYWxQYXJ0LCBwcm9kdWN0aW9uTmFtZSwgbm9XaGl0ZXNwYWNlKTtcblxuICAgIHJldHVybiB6ZXJvT3JNb3JlUGFydHNQYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gWmVyb09yTW9yZVBhcnRzUGFydDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRXBzaWxvblBhcnQgPSByZXF1aXJlKCcuL3BhcnQvZXBzaWxvbicpLFxuICAgICAgV2lsZGNhcmRQYXJ0ID0gcmVxdWlyZSgnLi9wYXJ0L3dpbGRjYXJkJyksXG4gICAgICBFbmRPZkxpbmVQYXJ0ID0gcmVxdWlyZSgnLi9wYXJ0L2VuZE9mTGluZScpLFxuICAgICAgT3B0aW9uYWxQYXJ0UGFydCA9IHJlcXVpcmUoJy4vcGFydC9vcHRpb25hbFBhcnQnKSxcbiAgICAgIFRlcm1pbmFsU3ltYm9sUGFydCA9IHJlcXVpcmUoJy4vcGFydC90ZXJtaW5hbFN5bWJvbCcpLFxuICAgICAgT25lT3JNb3JlUGFydHNQYXJ0ID0gcmVxdWlyZSgnLi9wYXJ0L29uZU9yTW9yZVBhcnRzJyksXG4gICAgICBaZXJvT3JNb3JlUGFydHNQYXJ0ID0gcmVxdWlyZSgnLi9wYXJ0L3plcm9Pck1vcmVQYXJ0cycpLFxuICAgICAgUmVndWxhckV4cHJlc3Npb25QYXJ0ID0gcmVxdWlyZSgnLi9wYXJ0L3JlZ3VsYXJFeHByZXNzaW9uJyksXG4gICAgICBTaWduaWZpY2FudFRva2VuVHlwZVBhcnQgPSByZXF1aXJlKCcuL3BhcnQvc2lnbmlmaWNhbnRUb2tlblR5cGUnKSxcbiAgICAgIFByb2R1Y3Rpb25OYW1lUGFydCA9IHJlcXVpcmUoJy4vcGFydC9wcm9kdWN0aW9uTmFtZScpO1xuXG5jb25zdCBQYXJ0cyA9IFtcbiAgRXBzaWxvblBhcnQsXG4gIFdpbGRjYXJkUGFydCxcbiAgRW5kT2ZMaW5lUGFydCxcbiAgUmVndWxhckV4cHJlc3Npb25QYXJ0LFxuICBTaWduaWZpY2FudFRva2VuVHlwZVBhcnQsXG4gIFRlcm1pbmFsU3ltYm9sUGFydCxcbiAgT3B0aW9uYWxQYXJ0UGFydCxcbiAgT25lT3JNb3JlUGFydHNQYXJ0LFxuICBaZXJvT3JNb3JlUGFydHNQYXJ0LFxuICBQcm9kdWN0aW9uTmFtZVBhcnRcbl07XG5cbm1vZHVsZS5leHBvcnRzID0gUGFydHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJ1bGUgPSByZXF1aXJlKCcuL3J1bGUnKSxcbiAgICAgIE5vblRlcm1pbmFsTm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsJyk7XG5cbmNsYXNzIFByb2R1Y3Rpb24ge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBydWxlcywgTm9kZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xuICAgIHRoaXMuTm9kZSA9IE5vZGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBwYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpIHtcbiAgICBsZXQgbm9kZU9yTm9kZXMgPSBudWxsO1xuXG4gICAgY29udGV4dC5pbmNyZWFzZURlcHRoKCk7XG5cbiAgICBjb25zdCB0b29EZWVwID0gY29udGV4dC5pc1Rvb0RlZXAoKTtcblxuICAgIGlmICh0b29EZWVwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBwYXJzZSB0cmVlIGlzIHRvbyBkZWVwIGF0IHByb2R1Y3Rpb24gJyR7dGhpcy5uYW1lfSdgKTtcbiAgICB9XG5cbiAgICBsZXQgcnVsZU5vZGVzID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBzb21lUnVsZVBhcnNlZCA9IHRoaXMucnVsZXMuc29tZShmdW5jdGlvbihydWxlKSB7XG4gICAgICAgICAgICBydWxlTm9kZXMgPSBydWxlLnBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSk7XG4gIFxuICAgICAgICAgICAgY29uc3QgcnVsZVBhcnNlZCA9IChydWxlTm9kZXMgIT09IG51bGwpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBydWxlUGFyc2VkO1xuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKHNvbWVSdWxlUGFyc2VkKSB7XG4gICAgICBjb25zdCBydWxlTm9kZXNMZW5ndGggPSBydWxlTm9kZXMubGVuZ3RoO1xuXG4gICAgICBpZiAocnVsZU5vZGVzTGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBub2RlcyA9IHJ1bGVOb2RlcywgIC8vL1xuICAgICAgICAgICAgICBwcm9kdWN0aW9uTmFtZSA9IHRoaXMubmFtZTsgLy8vXG5cbiAgICAgICAgbm9kZU9yTm9kZXMgPSB0aGlzLk5vZGUuZnJvbU5vZGVzQW5kUHJvZHVjdGlvbk5hbWUobm9kZXMsIHByb2R1Y3Rpb25OYW1lKTsgIC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnRleHQuZGVjcmVhc2VEZXB0aCgpO1xuXG4gICAgcmV0dXJuIG5vZGVPck5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21MaW5lKGxpbmUsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbWFwcGluZ3MpIHtcbiAgICBjb25zdCBuYW1lID0gbGluZS5nZXROYW1lKCksXG4gICAgICAgICAgcnVsZXMgPSBsaW5lLm1hcFN5bWJvbFNlcXVlbmNlcyhmdW5jdGlvbihzeW1ib2xTZXF1ZW5jZSkge1xuICAgICAgICAgICAgY29uc3QgcnVsZSA9IFJ1bGUuZnJvbVN5bWJvbFNlcXVlbmNlKHN5bWJvbFNlcXVlbmNlLCBzaWduaWZpY2FudFRva2VuVHlwZXMpO1xuICBcbiAgICAgICAgICAgIHJldHVybiBydWxlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIE5vZGUgPSBtYXBwaW5ncy5oYXNPd25Qcm9wZXJ0eShuYW1lKSA/XG4gICAgICAgICAgICAgICAgICAgbWFwcGluZ3NbbmFtZV0gOlxuICAgICAgICAgICAgICAgICAgICAgTm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICBwcm9kdWN0aW9uID0gbmV3IFByb2R1Y3Rpb24obmFtZSwgcnVsZXMsIE5vZGUpO1xuXG4gICAgcmV0dXJuIHByb2R1Y3Rpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9kdWN0aW9uO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgUGFydHMgPSByZXF1aXJlKCcuL3BhcnRzJyk7XG5cbmNvbnN0IHsgc3BlY2lhbFN5bWJvbHMgfSA9IGxleGVycztcblxuY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzKSB7XG4gICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xuICB9XG5cbiAgZ2V0UGFydHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFydHM7XG4gIH1cblxuICBwYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpIHtcbiAgICBsZXQgbm9kZXMgPSBbXTtcbiAgICBcbiAgICBjb25zdCBzYXZlZEluZGV4ID0gY29udGV4dC5zYXZlZEluZGV4KCksXG4gICAgICAgICAgZXZlcnlQYXJ0UGFyc2VkID0gdGhpcy5wYXJ0cy5ldmVyeShmdW5jdGlvbihwYXJ0KSB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0Tm9kZU9yTm9kZXMgPSBwYXJ0LnBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgICAgICAgICBwYXJ0UGFyc2VkID0gKHBhcnROb2RlT3JOb2RlcyAhPT0gbnVsbCk7XG4gIFxuICAgICAgICAgICAgaWYgKHBhcnRQYXJzZWQpIHtcbiAgICAgICAgICAgICAgbm9kZXMgPSBub2Rlcy5jb25jYXQocGFydE5vZGVPck5vZGVzKTtcbiAgXG4gICAgICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgIHJldHVybiBwYXJ0UGFyc2VkO1xuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKCFldmVyeVBhcnRQYXJzZWQpIHtcbiAgICAgIGNvbnRleHQuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuXG4gICAgICBub2RlcyA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21TeW1ib2xTZXF1ZW5jZShzeW1ib2xTZXF1ZW5jZSwgc2lnbmlmaWNhbnRUb2tlblR5cGVzKSB7XG4gICAgbGV0IG5vV2hpdGVzcGFjZSA9IGZhbHNlO1xuICAgIFxuICAgIGNvbnN0IHBhcnRzID0gc3ltYm9sU2VxdWVuY2UucmVkdWNlU3ltYm9scyhmdW5jdGlvbihwYXJ0cywgc3ltYm9sKSB7XG4gICAgICAgICAgICBpZiAoc3ltYm9sID09PSBzcGVjaWFsU3ltYm9scy5OT19XSElURVNQQUNFKSB7XG4gICAgICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCBwYXJ0ID0gcGFydEZyb21TeW1ib2woc3ltYm9sLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSk7XG4gIFxuICAgICAgICAgICAgICBwYXJ0cy5wdXNoKHBhcnQpO1xuICBcbiAgICAgICAgICAgICAgbm9XaGl0ZXNwYWNlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgcmV0dXJuIHBhcnRzO1xuICAgICAgICAgIH0sIFtdKSxcbiAgICAgICAgICBydWxlID0gbmV3IFJ1bGUocGFydHMpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlO1xuXG5mdW5jdGlvbiBwYXJ0RnJvbVN5bWJvbChzeW1ib2wsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlKSB7XG4gIGxldCBwYXJ0ID0gdW5kZWZpbmVkOyAvLy9cblxuICBQYXJ0cy5zb21lKGZ1bmN0aW9uKFBhcnQpIHtcbiAgICBwYXJ0ID0gUGFydC5mcm9tU3ltYm9sKHN5bWJvbCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpO1xuXG4gICAgY29uc3QgcGFyc2VkID0gKHBhcnQgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnQ7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5JyksXG4gICAgICBlYXN5bGF5b3V0ID0gcmVxdWlyZSgnZWFzeS1sYXlvdXQnKTtcblxuY29uc3QgbGVmdENvbHVtblNlbGVjdG9yID0gJyNsZWZ0Q29sdW1uJyxcbiAgICAgIGdyYW1tYXJUZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI2dyYW1tYXInLFxuICAgICAgY29udGVudFRleHRhcmVhU2VsZWN0b3IgPSAndGV4dGFyZWEjY29udGVudCcsXG4gICAgICBwYXJzZVRyZWVUZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI3BhcnNlVHJlZSc7XG5cbmNvbnN0IHsgVGV4dGFyZWEgfSA9IGVhc3ksXG4gICAgICB7IG9wdGlvbnMsIFNpemVhYmxlRWxlbWVudCwgVmVydGljYWxTcGxpdHRlciB9ID0gZWFzeWxheW91dCxcbiAgICAgIHsgVE9fVEhFX1JJR0hUX09GIH0gPSBvcHRpb25zO1xuXG5jb25zdCBsZWZ0Q29sdW1uID0gbmV3IFNpemVhYmxlRWxlbWVudChsZWZ0Q29sdW1uU2VsZWN0b3IpLFxuICAgICAgY29udGVudFRleHRhcmVhID0gbmV3IFRleHRhcmVhKGNvbnRlbnRUZXh0YXJlYVNlbGVjdG9yKSxcbiAgICAgIGdyYW1tYXJUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYShncmFtbWFyVGV4dGFyZWFTZWxlY3RvciksXG4gICAgICBwYXJzZVRyZWVUZXh0YXJlYSA9IG5ldyBUZXh0YXJlYShwYXJzZVRyZWVUZXh0YXJlYVNlbGVjdG9yKTtcblxubmV3IFZlcnRpY2FsU3BsaXR0ZXIoJy5sZWZ0LnZlcnRpY2FsLnNwbGl0dGVyJywgVE9fVEhFX1JJR0hUX09GLCBsZWZ0Q29sdW1uKTtcblxuY2xhc3MgRXhhbXBsZSB7XG4gIHN0YXRpYyBnZXRHcmFtbWFyVGV4dGFyZWFWYWx1ZSgpIHsgcmV0dXJuIGdyYW1tYXJUZXh0YXJlYS5nZXRWYWx1ZSgpOyB9XG5cbiAgc3RhdGljIHNldEdyYW1tYXJUZXh0YXJlYVZhbHVlKHZhbHVlKSB7IGdyYW1tYXJUZXh0YXJlYS5zZXRWYWx1ZSh2YWx1ZSk7IH1cblxuICBzdGF0aWMgb25Db250ZW50VGV4dGFyZWFLZXlVcChoYW5kbGVyKSB7IGNvbnRlbnRUZXh0YXJlYS5vbigna2V5dXAnLCBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBjb250ZW50ID0gY29udGVudFRleHRhcmVhLmdldFZhbHVlKCk7IC8vL1xuXG4gICAgaGFuZGxlcihjb250ZW50KTtcbiAgfSk7IH1cblxuICBzdGF0aWMgb25HcmFtbWFyVGV4dGFyZWFDaGFuZ2UoaGFuZGxlcikgeyBncmFtbWFyVGV4dGFyZWEub25DaGFuZ2UoaGFuZGxlcik7IH1cblxuICBzdGF0aWMgdXBkYXRlUGFyc2VUcmVlKGxleGVyLCBwYXJzZXIpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY29udGVudFRleHRhcmVhVmFsdWUgPSBjb250ZW50VGV4dGFyZWEuZ2V0VmFsdWUoKSxcbiAgICAgICAgICBjb250ZW50ID0gY29udGVudFRleHRhcmVhVmFsdWU7ICAvLy9cblxuICAgICAgaWYgKGNvbnRlbnQgIT09ICcnKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRzID0gY29udGVudC5zcGxpdCgvXFxuLyksXG4gICAgICAgICAgICAgIGxpbmVzID0gbGV4ZXIubGluZXNGcm9tQ29udGVudHMoY29udGVudHMpLFxuICAgICAgICAgICAgICB0b2tlbnMgPSB0b2tlbnNGcm9tTGluZXMobGluZXMpLFxuICAgICAgICAgICAgICBkb2N1bWVudE5vZGUgPSBwYXJzZXIucGFyc2UodG9rZW5zKTtcblxuICAgICAgICBpZiAoZG9jdW1lbnROb2RlID09PSBudWxsKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgZG9jdW1lbnQgY2Fubm90IGJlIHBhcnNlZCBmb3Igc29tZSByZWFzb24uJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYXJzZVRyZWUgPSBkb2N1bWVudE5vZGUucGFyc2VUcmVlKGxpbmVzKTtcblxuICAgICAgICBwYXJzZVRyZWUuc2hpZnRMaW5lKCk7ICAvL1xuXG4gICAgICAgIGNvbnN0IHBhcnNlVHJlZVN0cmluZyA9IHBhcnNlVHJlZS50b1N0cmluZygpLFxuICAgICAgICAgICAgICBwYXJzZVRyZWVUZXh0YXJlYUhUTUwgPSBwYXJzZVRyZWVTdHJpbmc7ICAvLy9cblxuICAgICAgICBwYXJzZVRyZWVUZXh0YXJlYS5odG1sKHBhcnNlVHJlZVRleHRhcmVhSFRNTCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBFeGFtcGxlLmNsZWFyUGFyc2VUcmVlKCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnRUZXh0YXJlYS5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29udGVudFRleHRhcmVhLmFkZENsYXNzKCdlcnJvcicpO1xuICAgIFxuICAgICAgRXhhbXBsZS5jbGVhclBhcnNlVHJlZSgpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBjbGVhclBhcnNlVHJlZSgpIHtcbiAgICBjb25zdCBwYXJzZVRyZWVUZXh0YXJlYUhUTUwgPSAnJztcblxuICAgIHBhcnNlVHJlZVRleHRhcmVhLmh0bWwocGFyc2VUcmVlVGV4dGFyZWFIVE1MKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEV4YW1wbGU7XG5cbmZ1bmN0aW9uIHRva2Vuc0Zyb21MaW5lcyhsaW5lcykge1xuICBjb25zdCB0b2tlbnMgPSBsaW5lcy5yZWR1Y2UoZnVuY3Rpb24odG9rZW5zLCBsaW5lKSB7XG4gICAgICAgICAgY29uc3QgbGluZVRva2VucyA9IGxpbmUuZ2V0VG9rZW5zKCk7XG4gICAgICBcbiAgICAgICAgICB0b2tlbnMgPSB0b2tlbnMuY29uY2F0KGxpbmVUb2tlbnMpO1xuICAgICAgXG4gICAgICAgICAgcmV0dXJuIHRva2VucztcbiAgICAgICAgfSwgW10pO1xuICAgICAgXG4gIHJldHVybiB0b2tlbnM7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgQmFzaWNFeGFtcGxlOiByZXF1aXJlKCcuL2V4YW1wbGVzL2Jhc2ljJyksXG4gIEZsb3JlbmNlRXhhbXBsZTogcmVxdWlyZSgnLi9leGFtcGxlcy9mbG9yZW5jZScpXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpLFxuICAgICAgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IEJhc2ljUGFyc2VyID0gcmVxdWlyZSgnLi4vYmFzaWMvcGFyc2VyJyksXG4gICAgICBFeGFtcGxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZScpO1xuXG5jb25zdCB7IFRleHRhcmVhIH0gPSBlYXN5LFxuICAgICAgeyBCYXNpY0xleGVyIH0gPSBsZXhlcnM7XG5cbmxldCB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dGFyZWE7XG5cbmNvbnN0IHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0YXJlYVNlbGVjdG9yID0gJ3RleHRhcmVhI3Rlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm4nLFxuICAgICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybiA9IGBcXFxcK3xcXFxcLXxcXFxcKnxcXFxcL3xcXFxcKHxcXFxcKXxcXFxcZCtgLFxuICAgICAgZ3JhbW1hciA9IGBcbiAgXG4gICAgICAgIGV4cHJlc3Npb24gICAgICAgICAgICAgICAgIDo6PSB0ZXJtIG9wZXJhdG9yVGhlblRlcm0qXG4gICAgICAgIFxuICAgICAgICBvcGVyYXRvclRoZW5UZXJtICAgICAgICAgICA6Oj0gb3BlcmF0b3IgdGVybVxuICAgICAgICBcbiAgICAgICAgb3BlcmF0b3IgICAgICAgICAgICAgICAgICAgOjo9ICcrJyB8ICctJyB8ICcqJyB8ICcvJ1xuICAgICAgICBcbiAgICAgICAgdGVybSAgICAgICAgICAgICAgICAgICAgICAgOjo9IG5hdHVyYWxOdW1iZXIgfCBwYXJlbnRoZXNpemVkRXhwcmVzc2lvblxuICAgICAgICBcbiAgICAgICAgbmF0dXJhbE51bWJlciAgICAgICAgICAgICAgOjo9IC9eXFxcXGQrJC9cbiAgICAgICAgXG4gICAgICAgIHBhcmVudGhlc2l6ZWRFeHByZXNzaW9uICAgIDo6PSAnKCcgZXhwcmVzc2lvbiAnKSdcbiAgICAgIFxuICAgICAgYDtcblxubGV0IGJhc2ljTGV4ZXIgPSBudWxsLFxuICAgIGJhc2ljUGFyc2VyID0gbnVsbDtcblxuY2xhc3MgQmFzaWNFeGFtcGxlIHtcbiAgc3RhdGljIHJ1bigpIHtcbiAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuVGV4dGFyZWEgPSBuZXcgVGV4dGFyZWEodGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRhcmVhU2VsZWN0b3IpO1xuXG4gICAgY29uc3QgZ3JhbW1hclRleHRhcmVhVmFsdWUgPSBncmFtbWFyLCAvLy9cbiAgICAgICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRhcmVhVmFsdWUgPSB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuOyAvLy9cblxuICAgIEV4YW1wbGUuc2V0R3JhbW1hclRleHRhcmVhVmFsdWUoZ3JhbW1hclRleHRhcmVhVmFsdWUpO1xuXG4gICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRhcmVhLnNldFZhbHVlKHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0YXJlYVZhbHVlKTtcblxuICAgIHVwZGF0ZSgpO1xuXG4gICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRhcmVhLm9uQ2hhbmdlKGZ1bmN0aW9uKCkge1xuICAgICAgdXBkYXRlKCk7XG4gICAgfSk7XG5cbiAgICBFeGFtcGxlLm9uR3JhbW1hclRleHRhcmVhQ2hhbmdlKGZ1bmN0aW9uKCkge1xuICAgICAgdXBkYXRlKCk7XG4gICAgfSk7XG5cbiAgICBFeGFtcGxlLm9uQ29udGVudFRleHRhcmVhS2V5VXAoZnVuY3Rpb24oKSB7XG4gICAgICB1cGRhdGUoKTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGUoKSB7XG4gIHVwZGF0ZUJhc2ljTGV4ZXIoKTtcbiAgdXBkYXRlQmFzaWNQYXJzZXIoKTtcblxuICBpZiAoYmFzaWNMZXhlciAhPT0gbnVsbCkge1xuICAgIEV4YW1wbGUudXBkYXRlUGFyc2VUcmVlKGJhc2ljTGV4ZXIsIGJhc2ljUGFyc2VyKTtcbiAgfSBlbHNlIHtcbiAgICBFeGFtcGxlLmNsZWFyUGFyc2VUcmVlKCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCYXNpY0V4YW1wbGU7XG5cbmZ1bmN0aW9uIHVwZGF0ZUJhc2ljTGV4ZXIoKSB7XG4gIGNvbnN0IHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5JbnB1dFZhbHVlID0gdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRhcmVhLmdldFZhbHVlKCksXG4gICAgICB0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuID0gdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybklucHV0VmFsdWUsICAvLy9cbiAgICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5Jc1ZhbGlkID0gcmVnRXhwUGF0dGVybklzVmFsaWQodGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVybik7XG5cbiAgaWYgKHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5Jc1ZhbGlkKSB7XG4gICAgY29uc3QgdGVybWluYWxTeW1ib2xzUmVnRXhwID0gbmV3IFJlZ0V4cCh0ZXJtaW5hbFN5bWJvbHNSZWdFeHBQYXR0ZXJuKSxcbiAgICAgICAgZ3JhbW1hciA9IFtcbiAgICAgICAgICB7IHRlcm1pbmFsIDogdGVybWluYWxTeW1ib2xzUmVnRXhwIH1cbiAgICAgICAgXTtcblxuICAgIGJhc2ljTGV4ZXIgPSBCYXNpY0xleGVyLmZyb21HcmFtbWFyKGdyYW1tYXIpO1xuXG4gICAgdGVybWluYWxTeW1ib2xzUmVnRXhwUGF0dGVyblRleHRhcmVhLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuICB9IGVsc2Uge1xuICAgIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cFBhdHRlcm5UZXh0YXJlYS5hZGRDbGFzcygnZXJyb3InKTtcblxuICAgIGJhc2ljTGV4ZXIgPSBudWxsO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUJhc2ljUGFyc2VyKCkge1xuICBjb25zdCBncmFtbWFyVGV4dGFyZWFWYWx1ZSA9IEV4YW1wbGUuZ2V0R3JhbW1hclRleHRhcmVhVmFsdWUoKSxcbiAgICAgICAgZ3JhbW1hciA9IGdyYW1tYXJUZXh0YXJlYVZhbHVlOyAvLy9cblxuICBiYXNpY1BhcnNlciA9IEJhc2ljUGFyc2VyLmZyb21HcmFtbWFyKGdyYW1tYXIpO1xufVxuXG5mdW5jdGlvbiByZWdFeHBQYXR0ZXJuSXNWYWxpZChyZWdFeHBQYXR0ZXJuKSB7XG4gIGxldCB2YWxpZCA9IHRydWU7XG5cbiAgdHJ5IHtcbiAgICBuZXcgUmVnRXhwKHJlZ0V4cFBhdHRlcm4pO1xuICB9XG4gIGNhdGNoIChlcnJvcikge1xuICAgIHZhbGlkID0gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdmFsaWQ7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBFeGFtcGxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZScpLFxuICAgICAgRmxvcmVuY2VQYXJzZXIgPSByZXF1aXJlKCcuLi9mbG9yZW5jZS9wYXJzZXInKSxcbiAgICAgIGZsb3JlbmNlR3JhbW1hciA9IHJlcXVpcmUoJy4uL2Zsb3JlbmNlL2dyYW1tYXInKTtcblxuY29uc3QgeyBGbG9yZW5jZUxleGVyIH0gPSBsZXhlcnM7XG5cbmNvbnN0IGZsb3JlbmNlTGV4ZXIgPSBGbG9yZW5jZUxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBmbG9yZW5jZVBhcnNlciA9IEZsb3JlbmNlUGFyc2VyLmZyb21Ob3RoaW5nKCk7XG5cbmNsYXNzIEZsb3JlbmNlRXhhbXBsZSB7XG4gIHN0YXRpYyBydW4oKSB7XG4gICAgY29uc3QgZ3JhbW1hclRleHRhcmVhVmFsdWUgPSBmbG9yZW5jZUdyYW1tYXI7IC8vL1xuXG4gICAgRXhhbXBsZS5zZXRHcmFtbWFyVGV4dGFyZWFWYWx1ZShncmFtbWFyVGV4dGFyZWFWYWx1ZSk7XG5cbiAgICB1cGRhdGUoKTtcblxuICAgIEV4YW1wbGUub25Db250ZW50VGV4dGFyZWFLZXlVcChmdW5jdGlvbigpIHtcbiAgICAgIHVwZGF0ZSgpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgRXhhbXBsZS51cGRhdGVQYXJzZVRyZWUoZmxvcmVuY2VMZXhlciwgZmxvcmVuY2VQYXJzZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlRXhhbXBsZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZ3JhbW1hciA9IGBcblxuICAgIGRvY3VtZW50ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgaGVhZGVyPyB2ZXJ0aWNhbFNwYWNlPyBib2R5P1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIGhlYWRlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgaW5jbHVkZURpcmVjdGl2ZStcbiAgICBcbiAgICBpbmNsdWRlRGlyZWN0aXZlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgICdpbmNsdWRlJzxOT19XSElURVNQQUNFPicoJzxOT19XSElURVNQQUNFPltzdHJpbmddPE5PX1dISVRFU1BBQ0U+JyknIDxFTkRfT0ZfTElORT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICBib2R5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHBhcnQrICBcbiAgICAgICAgXG4gICAgcGFydCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBydWxlIHwgYXhpb20gfCB0aGVvcmVtIHwgbGVtbWEgfCB2ZXJ0aWNhbFNwYWNlIHwgZXJyb3JcbiAgICBcbiAgICBcbiAgICBcbiAgICBydWxlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgICdSdWxlJyBwYXJlbnRoZXNpc2VkTGFiZWxzPyA8RU5EX09GX0xJTkU+IHByZW1pc2Uocyk/IGNvbmNsdXNpb24gcHJvb2Y/XG4gICAgXG4gICAgYXhpb20gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICAnQXhpb20nIHBhcmVudGhlc2lzZWRMYWJlbHM/IDxFTkRfT0ZfTElORT4gcHJlbWlzZShzKT8gY29uY2x1c2lvblxuICAgIFxuICAgIHRoZW9yZW0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgJ1RoZW9yZW0nIHBhcmVudGhlc2lzZWRMYWJlbHM/IDxFTkRfT0ZfTElORT4gcHJlbWlzZShzKT8gY29uY2x1c2lvbiBwcm9vZlxuICAgICAgICBcbiAgICBsZW1tYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgICdMZW1tYScgcGFyZW50aGVzaXNlZExhYmVscz8gPEVORF9PRl9MSU5FPiBwcmVtaXNlKHMpPyBjb25jbHVzaW9uIHByb29mICAgIFxuICAgIFxuICAgIFxuICAgIFxuICAgIHBhcmVudGhlc2lzZWRMYWJlbHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgJygnPE5PX1dISVRFU1BBQ0U+bGFiZWxzPE5PX1dISVRFU1BBQ0U+JyknXG4gICAgXG4gICAgbGFiZWxzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBsYWJlbDxOT19XSElURVNQQUNFPmNvbW1hVGhlbkxhYmVsKlxuICAgIFxuICAgIGNvbW1hVGhlbkxhYmVsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgJywnPE5PX1dISVRFU1BBQ0U+bGFiZWxcbiAgICBcbiAgICBcbiAgICBcbiAgICBwcmVtaXNlKHMpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHByZW1pc2UgfCBwcmVtaXNlc1xuICAgIFxuICAgIHByZW1pc2UgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgJ1ByZW1pc2UnIDxFTkRfT0ZfTElORT4gKHVuKWxhYmVsbGVkU3RhdGVtZW50XG4gICAgXG4gICAgcHJlbWlzZXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICAnUHJlbWlzZXMnIDxFTkRfT0ZfTElORT4gKHVuKWxhYmVsbGVkU3RhdGVtZW50ICh1bilsYWJlbGxlZFN0YXRlbWVudCtcbiAgICBcbiAgICBjb25jbHVzaW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgICdDb25jbHVzaW9uJyA8RU5EX09GX0xJTkU+ICh1bilsYWJlbGxlZFN0YXRlbWVudFxuICAgIFxuICAgIHByb29mICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgJ1Byb29mJyA8RU5EX09GX0xJTkU+IHN1YkxlbW1hT3IodW4pbGFiZWxsZWRTdGF0ZW1lbnRUaGVuVmVydGljYWxTcGFjZSogdGhlcmVmb3JlXG4gICAgXG4gICAgdGhlcmVmb3JlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICAnVGhlcmVmb3JlJyA8RU5EX09GX0xJTkU+ICh1bilsYWJlbGxlZFN0YXRlbWVudFxuICAgIFxuICAgIFxuICAgIFxuICAgIHN1YkxlbW1hT3IodW4pbGFiZWxsZWRTdGF0ZW1lbnRUaGVuVmVydGljYWxTcGFjZSAgOjo9ICAgc3ViTGVtbWFPcih1bilsYWJlbGxlZFN0YXRlbWVudCB2ZXJ0aWNhbFNwYWNlPyAgIFxuICAgIFxuICAgIHN1YkxlbW1hT3IodW4pbGFiZWxsZWRTdGF0ZW1lbnQgICAgICAgICAgICAgICAgICAgOjo9ICAgc3ViTGVtbWEgfCAodW4pbGFiZWxsZWRTdGF0ZW1lbnRcbiAgICBcbiAgICBzdWJMZW1tYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHN1cHBvc2UgdGhlbj8gaGVuY2VcbiAgICBcbiAgICBcbiAgICBcbiAgICBzdXBwb3NlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgICdTdXBwb3NlJyA8RU5EX09GX0xJTkU+IHVubGFiZWxsZWRTdGF0ZW1lbnQrXG4gICAgXG4gICAgdGhlbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICAnVGhlbicgPEVORF9PRl9MSU5FPiBzdWJMZW1tYU9yKHVuKWxhYmVsbGVkU3RhdGVtZW50K1xuICAgIFxuICAgIGhlbmNlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgJ0hlbmNlJyA8RU5EX09GX0xJTkU+ICh1bilsYWJlbGxlZFN0YXRlbWVudFxuICAgIFxuICAgIFxuICAgIFxuICAgICh1bilsYWJlbGxlZFN0YXRlbWVudCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgdW5sYWJlbGxlZFN0YXRlbWVudCB8IGxhYmVsbGVkU3RhdGVtZW50XG4gICAgXG4gICAgbGFiZWxsZWRTdGF0ZW1lbnQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBzdGF0ZW1lbnQgJ2J5JyBsYWJlbCA8RU5EX09GX0xJTkU+ICBcbiAgICBcbiAgICB1bmxhYmVsbGVkU3RhdGVtZW50ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHN0YXRlbWVudCA8RU5EX09GX0xJTkU+ICBcbiAgICBcbiAgICBzdGF0ZW1lbnQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHNwZWNpYWxPclVuYXNzaWduZWQrIFxuICAgIFxuICAgIHNwZWNpYWxPclVuYXNzaWduZWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgW3NwZWNpYWxdIHwgW3VuYXNzaWduZWRdXG4gICAgXG4gICAgXG4gICAgXG4gICAgbGFiZWwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBbdW5hc3NpZ25lZF1cbiAgICAgXG4gICAgIFxuICAgICBcbiAgICB2ZXJ0aWNhbFNwYWNlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIDxFTkRfT0ZfTElORT4rXG4gICAgXG4gICAgXG4gICAgXG4gICAgZXJyb3IgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICAqXG4gICAgXG5gO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdyYW1tYXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBncmFtbWFyID0gcmVxdWlyZSgnLi9ncmFtbWFyJyksXG4gICAgICBCTkZQYXJzZXIgPSByZXF1aXJlKCcuLi9ibmYvcGFyc2VyJyksXG4gICAgICBDb21tb25QYXJzZXIgPSByZXF1aXJlKCcuLi9jb21tb24vcGFyc2VyJyksXG4gICAgICBUcmFuc3BhcmVudE5vZGUgPSByZXF1aXJlKCcuLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC90cmFuc3BhcmVudCcpLFxuICAgICAgRGlzY2FyZFNlY29uZENoaWxkTm9kZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsL2Rpc2NhcmRTZWNvbmRDaGlsZCcpLFxuICAgICAgVHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZE5vZGUgPSByZXF1aXJlKCcuLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC90cmFuc3BhcmVudFRoZW5LZWVwU2Vjb25kJyk7XG5cbmNvbnN0IHsgQk5GTGV4ZXIsIEZsb3JlbmNlTGV4ZXIgfSA9IGxleGVycztcblxuY2xhc3MgRmxvcmVuY2VQYXJzZXIgZXh0ZW5kcyBDb21tb25QYXJzZXIge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcobWFwcGluZ3MpIHtcbiAgICBjb25zdCBsaW5lcyA9IEJORkxleGVyLmxpbmVzRnJvbUdyYW1tYXIoZ3JhbW1hciksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVzID0gRmxvcmVuY2VMZXhlci5nZXRTaWduaWZpY2FudFRva2VuVHlwZXMoKTtcblxuICAgIG1hcHBpbmdzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAncGFydCc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICdwcmVtaXNlJzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJ3ByZW1pc2VzJzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJ3N0YXRlbWVudCc6IFRyYW5zcGFyZW50Tm9kZSxcbiAgICAgICdwcmVtaXNlKHMpJzogRGlzY2FyZFNlY29uZENoaWxkTm9kZSxcbiAgICAgICdjb25jbHVzaW9uJzogRGlzY2FyZFNlY29uZENoaWxkTm9kZSxcbiAgICAgICdjb21tYVRoZW5MYWJlbCc6IFRyYW5zcGFyZW50VGhlbktlZXBTZWNvbmROb2RlLFxuICAgICAgJ2xhYmVsbGVkU3RhdGVtZW50JzogRGlzY2FyZFNlY29uZENoaWxkTm9kZSxcbiAgICAgICdwYXJlbnRoZXNpc2VkTGFiZWxzJzogVHJhbnNwYXJlbnRUaGVuS2VlcFNlY29uZE5vZGUsXG4gICAgICAnKHVuKWxhYmVsbGVkU3RhdGVtZW50JzogVHJhbnNwYXJlbnROb2RlLFxuICAgICAgJ3NwZWNpYWxPclVuYXNzaWduZWQnOiBUcmFuc3BhcmVudE5vZGUsXG4gICAgICAnc3ViTGVtbWFPcih1bilsYWJlbGxlZFN0YXRlbWVudCc6IFRyYW5zcGFyZW50Tm9kZVxuICAgIH0sIG1hcHBpbmdzKTtcblxuICAgIGNvbnN0IHByb2R1Y3Rpb25zID0gQk5GUGFyc2VyLnBhcnNlKGxpbmVzLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG1hcHBpbmdzKSxcbiAgICAgICAgICBmbG9yZW5jZVBhcnNlciA9IG5ldyBGbG9yZW5jZVBhcnNlcihwcm9kdWN0aW9ucyk7XG5cbiAgICByZXR1cm4gZmxvcmVuY2VQYXJzZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGbG9yZW5jZVBhcnNlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG9wdGlvbnM6IHJlcXVpcmUoJy4vbGliL29wdGlvbnMnKSxcbiAgU2l6ZWFibGVFbGVtZW50OiByZXF1aXJlKCcuL2xpYi9zaXplYWJsZUVsZW1lbnQnKSxcbiAgVmVydGljYWxTcGxpdHRlcjogcmVxdWlyZSgnLi9saWIvc3BsaXR0ZXIvdmVydGljYWwnKSxcbiAgSG9yaXpvbnRhbFNwbGl0dGVyOiByZXF1aXJlKCcuL2xpYi9zcGxpdHRlci9ob3Jpem9udGFsJylcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5JyksXG4gICAgICBCb2R5ID0gZWFzeS5Cb2R5O1xuXG5jb25zdCBib2R5ID0gbmV3IEJvZHkoKTtcblxubGV0IHByZXZpb3VzQ3Vyc29yOyAgLy8vXG5cbmNsYXNzIGN1cnNvciB7XG4gIHN0YXRpYyBjb2x1bW5SZXNpemUoKSB7XG4gICAgY29uc3QgY3VycmVudEN1cnNvciA9IHRoaXMuZ2V0Q3VycmVudEN1cnNvcigpO1xuXG4gICAgaWYgKGN1cnJlbnRDdXJzb3IgIT09ICdjb2wtcmVzaXplJykge1xuICAgICAgcHJldmlvdXNDdXJzb3IgPSBjdXJyZW50Q3Vyc29yO1xuXG4gICAgICB0aGlzLnNldEN1cnNvcignY29sLXJlc2l6ZScpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyByb3dSZXNpemUoKSB7XG4gICAgY29uc3QgY3VycmVudEN1cnNvciA9IHRoaXMuZ2V0Q3VycmVudEN1cnNvcigpO1xuXG4gICAgaWYgKGN1cnJlbnRDdXJzb3IgIT09ICdyb3ctcmVzaXplJykge1xuICAgICAgcHJldmlvdXNDdXJzb3IgPSBjdXJyZW50Q3Vyc29yO1xuXG4gICAgICB0aGlzLnNldEN1cnNvcigncm93LXJlc2l6ZScpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyByZXNldCgpIHtcbiAgICB0aGlzLnNldEN1cnNvcihwcmV2aW91c0N1cnNvcik7IC8vL1xuICB9XG5cbiAgc3RhdGljIGdldEN1cnJlbnRDdXJzb3IoKSB7XG4gICAgY29uc3QgY3VycmVudEN1cnNvciA9IGJvZHkuY3NzKCdjdXJzb3InKTsgIC8vL1xuXG4gICAgcmV0dXJuIGN1cnJlbnRDdXJzb3IgfHwgJ2F1dG8nOyAvLy9cbiAgfVxuXG4gIHN0YXRpYyBzZXRDdXJzb3IoY3Vyc29yKSB7XG4gICAgY29uc3QgY3NzID0ge1xuICAgICAgY3Vyc29yOiBjdXJzb3JcbiAgICB9O1xuXG4gICAgYm9keS5jc3MoY3NzKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGN1cnNvcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQUJPVkUgPSArMSxcbiAgICAgIEJFTE9XID0gLTEsXG4gICAgICBUT19USEVfTEVGVF9PRiA9ICsxLFxuICAgICAgVE9fVEhFX1JJR0hUX09GID0gLTEsXG4gICAgICBvcHRpb25zID0ge1xuICAgICAgICBzaXR1YXRlZDoge1xuICAgICAgICAgIEFCT1ZFOiBBQk9WRSxcbiAgICAgICAgICBCRUxPVzogQkVMT1csXG4gICAgICAgICAgVE9fVEhFX0xFRlRfT0Y6IFRPX1RIRV9MRUZUX09GLFxuICAgICAgICAgIFRPX1RIRV9SSUdIVF9PRjogVE9fVEhFX1JJR0hUX09GXG4gICAgICAgIH0sXG4gICAgICAgIEVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkc6ICdFU0NBUEVfS0VZX1NUT1BTX0RSQUdHSU5HJ1xuICAgICAgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBvcHRpb25zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpLFxuICAgICAgeyBEaXYgfSA9IGVhc3k7XG5cbmNsYXNzIFNpemVhYmxlRWxlbWVudCBleHRlbmRzIERpdiB7XG4gIHNldFdpZHRoKHdpZHRoKSB7XG4gICAgY29uc3QgbWluaW11bVdpZHRoID0gdGhpcy5nZXRNaW5pbXVtV2lkdGgoKSxcbiAgICAgICAgICBtYXhpbXVtV2lkdGggPSB0aGlzLmdldE1heGltdW1XaWR0aCgpO1xuXG4gICAgaWYgKG1pbmltdW1XaWR0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB3aWR0aCA9IE1hdGgubWF4KHdpZHRoLCBtaW5pbXVtV2lkdGgpO1xuICAgIH1cbiAgICBpZiAobWF4aW11bVdpZHRoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHdpZHRoID0gTWF0aC5taW4od2lkdGgsIG1heGltdW1XaWR0aCk7XG4gICAgfVxuXG4gICAgc3VwZXIuc2V0V2lkdGgod2lkdGgpO1xuICB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodCkge1xuICAgIGNvbnN0IG1pbmltdW1IZWlnaHQgPSB0aGlzLmdldE1pbmltdW1IZWlnaHQoKSxcbiAgICAgICAgICBtYXhpbXVtSGVpZ2h0ID0gdGhpcy5nZXRNYXhpbXVtSGVpZ2h0KCk7XG5cbiAgICBpZiAobWluaW11bUhlaWdodCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoZWlnaHQgPSBNYXRoLm1heChoZWlnaHQsIG1pbmltdW1IZWlnaHQpO1xuICAgIH1cbiAgICBpZiAobWF4aW11bUhlaWdodCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoZWlnaHQgPSBNYXRoLm1pbihoZWlnaHQsIG1heGltdW1IZWlnaHQpO1xuICAgIH1cblxuICAgIHN1cGVyLnNldEhlaWdodChoZWlnaHQpO1xuICB9XG5cbiAgZ2V0TWluaW11bVdpZHRoKCkgeyBcbiAgICBjb25zdCBtaW5XaWR0aCA9IHRoaXMuY3NzKCdtaW4td2lkdGgnKSxcbiAgICAgICAgICBtaW5pbXVtV2lkdGggPSBpblBpeGVscyhtaW5XaWR0aCk7XG5cbiAgICByZXR1cm4gbWluaW11bVdpZHRoO1xuICB9XG5cbiAgZ2V0TWluaW11bUhlaWdodCgpIHtcbiAgICBjb25zdCBtaW5IZWlnaHQgPSB0aGlzLmNzcygnbWluLWhlaWdodCcpLFxuICAgICAgICAgIG1pbmltdW1IZWlnaHQgPSBpblBpeGVscyhtaW5IZWlnaHQpO1xuXG4gICAgcmV0dXJuIG1pbmltdW1IZWlnaHQ7XG4gIH1cblxuICBnZXRNYXhpbXVtV2lkdGgoKSB7XG4gICAgY29uc3QgbWF4V2lkdGggPSB0aGlzLmNzcygnbWF4LXdpZHRoJyksXG4gICAgICAgICAgbWF4aW11bVdpZHRoID0gaW5QaXhlbHMobWF4V2lkdGgpO1xuXG4gICAgcmV0dXJuIG1heGltdW1XaWR0aDtcbiAgfVxuXG4gIGdldE1heGltdW1IZWlnaHQoKSB7XG4gICAgY29uc3QgbWF4SGVpZ2h0ID0gdGhpcy5jc3MoJ21heC1oZWlnaHQnKSxcbiAgICAgICAgICBtYXhpbXVtSGVpZ2h0ID0gaW5QaXhlbHMobWF4SGVpZ2h0KTtcblxuICAgIHJldHVybiBtYXhpbXVtSGVpZ2h0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICByZXR1cm4gRGl2LmZyb21Qcm9wZXJ0aWVzKFNpemVhYmxlRWxlbWVudCwgcHJvcGVydGllcyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTaXplYWJsZUVsZW1lbnQ7XG5cbmZ1bmN0aW9uIGluUGl4ZWxzKHF1YW50aXR5KSB7XG4gIGxldCBwaXhlbHM7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHF1YW50aXR5Lm1hdGNoKC8oWzAtOV0qKXB4JC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBwaXhlbHMgPSBzZWNvbmRNYXRjaDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIHBpeGVscztcbn1cblxuZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpLFxuICAgICAgeyB3aW5kb3csIEVsZW1lbnQgfSA9IGVhc3k7XG5cbmNvbnN0IG9wdGlvbnMgPSByZXF1aXJlKCcuL29wdGlvbnMnKTtcblxuY29uc3QgRVNDQVBFX0tFWUNPREUgPSAyNztcblxuY2xhc3MgU3BsaXR0ZXIgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIHNpdHVhdGVkLCBzaXplYWJsZUVsZW1lbnQsIGRyYWdIYW5kbGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgdGhpcy5zaXR1YXRlZCA9IHNpdHVhdGVkO1xuICAgIHRoaXMuc2l6ZWFibGVFbGVtZW50ID0gc2l6ZWFibGVFbGVtZW50O1xuICAgIHRoaXMuZHJhZ0hhbmRsZXIgPSBkcmFnSGFuZGxlcjtcblxuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcblxuICAgIHdpbmRvdy5vbignbW91c2V1cCBibHVyJywgdGhpcy5tb3VzZVVwLmJpbmQodGhpcykpOyAgLy8vXG4gICAgXG4gICAgd2luZG93Lm9uTW91c2VNb3ZlKHRoaXMubW91c2VNb3ZlLmJpbmQodGhpcykpO1xuXG4gICAgdGhpcy5vbk1vdXNlRG93bih0aGlzLm1vdXNlRG93bi5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLm9uTW91c2VPdmVyKHRoaXMubW91c2VPdmVyLmJpbmQodGhpcykpO1xuICAgIHRoaXMub25Nb3VzZU91dCh0aGlzLm1vdXNlT3V0LmJpbmQodGhpcykpO1xuXG4gICAgdGhpcy5vcHRpb25zID0ge307XG4gIH1cblxuICBzZXRPcHRpb24ob3B0aW9uKSB7XG4gICAgdGhpcy5vcHRpb25zW29wdGlvbl0gPSB0cnVlO1xuICB9XG5cbiAgdW5zZXRPcHRpb24ob3B0aW9uKSB7XG4gICAgZGVsZXRlKHRoaXMub3B0aW9uc1tvcHRpb25dKTtcbiAgfVxuXG4gIGhhc09wdGlvbihvcHRpb24pIHtcbiAgICBvcHRpb24gPSAodGhpcy5vcHRpb25zW29wdGlvbl0gPT09IHRydWUpOyAvLy9cblxuICAgIHJldHVybiBvcHRpb247XG4gIH1cbiAgXG4gIGVuYWJsZSgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuICB9XG5cbiAgaXNEaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZDtcbiAgfVxuXG4gIG9uRHJhZyhkcmFnSGFuZGxlcikge1xuICAgIHRoaXMuZHJhZ0hhbmRsZXIgPSBkcmFnSGFuZGxlcjtcbiAgfVxuXG4gIHN0YXJ0RHJhZ2dpbmcoKSB7XG4gICAgY29uc3QgZXNjYXBlS2V5U3RvcHNEcmFnZ2luZyA9IHRoaXMuaGFzT3B0aW9uKG9wdGlvbnMuRVNDQVBFX0tFWV9TVE9QU19EUkFHR0lORyk7XG5cbiAgICBpZiAoZXNjYXBlS2V5U3RvcHNEcmFnZ2luZykge1xuICAgICAgd2luZG93Lm9uKCdrZXlkb3duJywgdGhpcy5rZXlEb3duSGFuZGxlci5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICB0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcbiAgfVxuXG4gIHN0b3BEcmFnZ2luZygpIHtcbiAgICBjb25zdCBlc2NhcGVLZXlTdG9wc0RyYWdnaW5nID0gdGhpcy5oYXNPcHRpb24ob3B0aW9ucy5FU0NBUEVfS0VZX1NUT1BTX0RSQUdHSU5HKTtcblxuICAgIGlmIChlc2NhcGVLZXlTdG9wc0RyYWdnaW5nKSB7XG4gICAgICB3aW5kb3cub2ZmKCdrZXlkb3duJywgdGhpcy5rZXlEb3duSGFuZGxlci5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG4gIH1cblxuICBpc0RyYWdnaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdnaW5nO1xuICB9XG5cbiAga2V5RG93bkhhbmRsZXIoZXZlbnQpIHtcbiAgICBjb25zdCBrZXlDb2RlID0gZXZlbnQua2V5Q29kZTtcblxuICAgIGlmIChrZXlDb2RlID09PSBFU0NBUEVfS0VZQ09ERSkge1xuICAgICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICAgIHRoaXMuc3RvcERyYWdnaW5nKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBzaXR1YXRlZCwgc2l6ZWFibGVFbGVtZW50LCBvbkRyYWcgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgZHJhZ0hhbmRsZXIgPSBvbkRyYWc7IC8vL1xuXG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIHNpdHVhdGVkLCBzaXplYWJsZUVsZW1lbnQsIGRyYWdIYW5kbGVyKTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFNwbGl0dGVyLCB7XG4gIHRhZ05hbWU6ICdkaXYnLFxuICBpZ25vcmVkQXR0cmlidXRlczogW1xuICAgICdzaXR1YXRlZCcsXG4gICAgJ3NpemVhYmxlRWxlbWVudCcsXG4gICAgJ29uRHJhZydcbiAgXVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU3BsaXR0ZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGN1cnNvciA9IHJlcXVpcmUoJy4uL2N1cnNvcicpLFxuICAgICAgU3BsaXR0ZXIgPSByZXF1aXJlKCcuLi9zcGxpdHRlcicpO1xuXG5jbGFzcyBIb3Jpem9udGFsU3BsaXR0ZXIgZXh0ZW5kcyBTcGxpdHRlciB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBzaXR1YXRlZCwgc2l6ZWFibGVFbGVtZW50LCBkcmFnSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yLCBzaXR1YXRlZCwgc2l6ZWFibGVFbGVtZW50LCBkcmFnSGFuZGxlcik7XG5cbiAgICB0aGlzLnNpemVhYmxlRWxlbWVudEhlaWdodCA9IG51bGw7XG5cbiAgICB0aGlzLm1vdXNlVG9wID0gbnVsbDtcbiAgfVxuXG4gIG1vdXNlVXAoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGN1cnNvci5yZXNldCgpO1xuXG4gICAgICBpZiAodGhpcy5kcmFnZ2luZykge1xuICAgICAgICB0aGlzLnN0b3BEcmFnZ2luZygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1vdXNlTW92ZShtb3VzZVRvcCwgbW91c2VMZWZ0KSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgICBjb25zdCByZWxhdGl2ZU1vdXNlVG9wID0gbW91c2VUb3AgLSB0aGlzLm1vdXNlVG9wLFxuICAgICAgICAgICAgICBoZWlnaHQgPSB0aGlzLnNpemVhYmxlRWxlbWVudEhlaWdodCAtIHRoaXMuc2l0dWF0ZWQgKiByZWxhdGl2ZU1vdXNlVG9wO1xuXG4gICAgICAgIHRoaXMuc2l6ZWFibGVFbGVtZW50LnNldEhlaWdodChoZWlnaHQpO1xuXG4gICAgICAgIGNvbnN0IHNpemVhYmxlRWxlbWVudEhlaWdodCA9IHRoaXMuc2l6ZWFibGVFbGVtZW50LmdldEhlaWdodCgpO1xuXG4gICAgICAgIGlmICh0aGlzLmRyYWdIYW5kbGVyKSB7XG4gICAgICAgICAgdGhpcy5kcmFnSGFuZGxlcihzaXplYWJsZUVsZW1lbnRIZWlnaHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbW91c2VEb3duKG1vdXNlVG9wLCBtb3VzZUxlZnQpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY3Vyc29yLnJvd1Jlc2l6ZSgpO1xuXG4gICAgICB0aGlzLm1vdXNlVG9wID0gbW91c2VUb3A7XG5cbiAgICAgIHRoaXMuc2l6ZWFibGVFbGVtZW50SGVpZ2h0ID0gdGhpcy5zaXplYWJsZUVsZW1lbnQuZ2V0SGVpZ2h0KCk7XG5cbiAgICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgICAgIGlmICghZHJhZ2dpbmcpIHtcbiAgICAgICAgdGhpcy5zdGFydERyYWdnaW5nKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbW91c2VPdmVyKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjdXJzb3Iucm93UmVzaXplKCk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VPdXQoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGN1cnNvci5yZXNldCgpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgcmV0dXJuIFNwbGl0dGVyLmZyb21Qcm9wZXJ0aWVzKEhvcml6b250YWxTcGxpdHRlciwgcHJvcGVydGllcyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBIb3Jpem9udGFsU3BsaXR0ZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGN1cnNvciA9IHJlcXVpcmUoJy4uL2N1cnNvcicpLFxuICAgICAgU3BsaXR0ZXIgPSByZXF1aXJlKCcuLi9zcGxpdHRlcicpO1xuXG5jbGFzcyBWZXJ0aWNhbFNwbGl0dGVyIGV4dGVuZHMgU3BsaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvciwgc2l0dWF0ZWQsIHNpemVhYmxlRWxlbWVudCwgZHJhZ0hhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvciwgc2l0dWF0ZWQsIHNpemVhYmxlRWxlbWVudCwgZHJhZ0hhbmRsZXIpO1xuXG4gICAgdGhpcy5zaXplYWJsZUVsZW1lbnRXaWR0aCA9IG51bGw7XG5cbiAgICB0aGlzLm1vdXNlTGVmdCA9IG51bGw7XG4gIH1cblxuICBtb3VzZVVwKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjdXJzb3IucmVzZXQoKTtcblxuICAgICAgaWYgKHRoaXMuZHJhZ2dpbmcpIHtcbiAgICAgICAgdGhpcy5zdG9wRHJhZ2dpbmcoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtb3VzZU1vdmUobW91c2VUb3AsIG1vdXNlTGVmdCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgICBpZiAoZHJhZ2dpbmcpIHtcbiAgICAgICAgY29uc3QgcmVsYXRpdmVNb3VzZUxlZnQgPSBtb3VzZUxlZnQgLSB0aGlzLm1vdXNlTGVmdCxcbiAgICAgICAgICAgICAgd2lkdGggPSB0aGlzLnNpemVhYmxlRWxlbWVudFdpZHRoIC0gdGhpcy5zaXR1YXRlZCAqIHJlbGF0aXZlTW91c2VMZWZ0O1xuXG4gICAgICAgIHRoaXMuc2l6ZWFibGVFbGVtZW50LnNldFdpZHRoKHdpZHRoKTtcblxuICAgICAgICBjb25zdCBzaXplYWJsZUVsZW1lbnRXaWR0aCA9IHRoaXMuc2l6ZWFibGVFbGVtZW50LmdldFdpZHRoKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuZHJhZ0hhbmRsZXIpIHtcbiAgICAgICAgICB0aGlzLmRyYWdIYW5kbGVyKHNpemVhYmxlRWxlbWVudFdpZHRoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1vdXNlRG93bihtb3VzZVRvcCwgbW91c2VMZWZ0KSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGN1cnNvci5jb2x1bW5SZXNpemUoKTtcblxuICAgICAgdGhpcy5tb3VzZUxlZnQgPSBtb3VzZUxlZnQ7XG5cbiAgICAgIHRoaXMuc2l6ZWFibGVFbGVtZW50V2lkdGggPSB0aGlzLnNpemVhYmxlRWxlbWVudC5nZXRXaWR0aCgpO1xuXG4gICAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgICBpZiAoIWRyYWdnaW5nKSB7XG4gICAgICAgIHRoaXMuc3RhcnREcmFnZ2luZygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1vdXNlT3ZlcigpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY3Vyc29yLmNvbHVtblJlc2l6ZSgpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlT3V0KCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjdXJzb3IucmVzZXQoKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIHJldHVybiBTcGxpdHRlci5mcm9tUHJvcGVydGllcyhWZXJ0aWNhbFNwbGl0dGVyLCBwcm9wZXJ0aWVzKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBWZXJ0aWNhbFNwbGl0dGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgd2luZG93OiByZXF1aXJlKCcuL2xpYi93aW5kb3cnKSxcbiAgZG9jdW1lbnQ6IHJlcXVpcmUoJy4vbGliL2RvY3VtZW50JyksXG4gIFRleHRFbGVtZW50OiByZXF1aXJlKCcuL2xpYi90ZXh0RWxlbWVudCcpLFxuICBEaXY6IHJlcXVpcmUoJy4vbGliL2VsZW1lbnQvZGl2JyksXG4gIFNwYW46IHJlcXVpcmUoJy4vbGliL2VsZW1lbnQvc3BhbicpLFxuICBCb2R5OiByZXF1aXJlKCcuL2xpYi9lbGVtZW50L2JvZHknKSxcbiAgRWxlbWVudDogcmVxdWlyZSgnLi9saWIvZWxlbWVudCcpLFxuICBMaW5rOiByZXF1aXJlKCcuL2xpYi9pbnB1dEVsZW1lbnQvbGluaycpLFxuICBJbnB1dDogcmVxdWlyZSgnLi9saWIvaW5wdXRFbGVtZW50L2lucHV0JyksXG4gIFNlbGVjdDogcmVxdWlyZSgnLi9saWIvaW5wdXRFbGVtZW50L3NlbGVjdCcpLFxuICBCdXR0b246IHJlcXVpcmUoJy4vbGliL2lucHV0RWxlbWVudC9idXR0b24nKSxcbiAgQ2hlY2tib3g6IHJlcXVpcmUoJy4vbGliL2lucHV0RWxlbWVudC9jaGVja2JveCcpLFxuICBUZXh0YXJlYTogcmVxdWlyZSgnLi9saWIvaW5wdXRFbGVtZW50L3RleHRhcmVhJyksXG4gIElucHV0RWxlbWVudDogcmVxdWlyZSgnLi9saWIvaW5wdXRFbGVtZW50JyksXG4gIEJvdW5kczogcmVxdWlyZSgnLi9saWIvbWlzYy9ib3VuZHMnKSxcbiAgT2Zmc2V0OiByZXF1aXJlKCcuL2xpYi9taXNjL29mZnNldCcpLFxuICBSZWFjdDogcmVxdWlyZSgnLi9saWIvcmVhY3QnKVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZXZlbnRNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vZXZlbnQnKSxcbiAgICAgIGNsaWNrTWl4aW4gPSByZXF1aXJlKCcuL21peGluL2NsaWNrJyksXG4gICAgICBtb3VzZU1peGluID0gcmVxdWlyZSgnLi9taXhpbi9tb3VzZScpO1xuXG5jbGFzcyBEb2N1bWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvY3VtZW50O1xuXG4gICAgdGhpcy5oYW5kbGVyc01hcCA9IHt9O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBldmVudE1peGluKTtcbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBjbGlja01peGluKTtcbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBtb3VzZU1peGluKTtcblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgRG9jdW1lbnQoKTsgIC8vL1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBPZmZzZXQgPSByZXF1aXJlKCcuL21pc2Mvb2Zmc2V0JyksXG4gICAgICBCb3VuZHMgPSByZXF1aXJlKCcuL21pc2MvYm91bmRzJyksXG4gICAgICBqc3hNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vanN4JyksXG4gICAgICBldmVudE1peGluID0gcmVxdWlyZSgnLi9taXhpbi9ldmVudCcpLFxuICAgICAgY2xpY2tNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vY2xpY2snKSxcbiAgICAgIG1vdXNlTWl4aW4gPSByZXF1aXJlKCcuL21peGluL21vdXNlJyksXG4gICAgICByZXNpemVNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vcmVzaXplJyk7XG5cbmNsYXNzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnRGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50Ll9fZWxlbWVudF9fID0gdGhpcztcbiAgICBcbiAgICB0aGlzLmhhbmRsZXJzTWFwID0ge307XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIEVsZW1lbnQuY2xvbmUodGhpcyk7IH1cblxuICBnZXRPZmZzZXQoKSB7XG4gICAgY29uc3QgdG9wID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldFRvcCwgIC8vL1xuICAgICAgICAgIGxlZnQgPSB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0TGVmdCwgIC8vL1xuICAgICAgICAgIG9mZnNldCA9IG5ldyBPZmZzZXQodG9wLCBsZWZ0KTtcblxuICAgIHJldHVybiBvZmZzZXQ7XG4gIH1cblxuICBnZXRCb3VuZHMoaW5jbHVkZUJvcmRlciA9IGZhbHNlKSB7XG4gICAgY29uc3QgYm91bmRpbmdDbGllbnRSZWN0ID0gdGhpcy5kb21FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgIGJvdW5kcyA9IEJvdW5kcy5mcm9tQm91bmRpbmdDbGllbnRSZWN0KGJvdW5kaW5nQ2xpZW50UmVjdCk7XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG5cbiAgZ2V0V2lkdGgoaW5jbHVkZUJvcmRlciA9IGZhbHNlKSB7XG4gICAgY29uc3Qgd2lkdGggPSBpbmNsdWRlQm9yZGVyID9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50Lm9mZnNldFdpZHRoIDpcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQuY2xpZW50V2lkdGg7XG5cbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cblxuICBzZXRXaWR0aCh3aWR0aCkgeyB0aGlzLmRvbUVsZW1lbnQuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7IH1cblxuICBnZXRIZWlnaHQoaW5jbHVkZUJvcmRlciA9IGZhbHNlKSB7XG4gICAgY29uc3QgaGVpZ2h0ID0gaW5jbHVkZUJvcmRlciA/XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0SGVpZ2h0IDpcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodDtcblxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cblxuICBzZXRIZWlnaHQoaGVpZ2h0KSB7IHRoaXMuZG9tRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgOyB9XG5cbiAgZ2V0QXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7IH1cblxuICBjbGVhckF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBhZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpOyB9XG5cbiAgcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5jbGVhckF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIHNldENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lOyB9XG5cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7IH1cblxuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgfVxuXG4gIHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpOyB9XG5cbiAgaGFzQ2xhc3MoY2xhc3NOYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7IH1cblxuICBjbGVhckNsYXNzZXMoKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSAnJzsgfVxuXG4gIHByZXBlbmQoZWxlbWVudCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQsXG4gICAgICAgICAgZmlyc3RDaGlsZERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQuZmlyc3RDaGlsZDtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgZmlyc3RDaGlsZERPTUVsZW1lbnQpO1xuICB9XG4gIFxuICBhcHBlbmQoZWxlbWVudCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIG51bGwpOyAvLy9cbiAgfVxuXG4gIGFwcGVuZFRvKHBhcmVudEVsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50RWxlbWVudC5kb21FbGVtZW50LFxuICAgICAgICAgIGZpcnN0U2libGluZ0RPTUVsZW1lbnQgPSBwYXJlbnRET01FbGVtZW50LmZpcnN0Q2hpbGQ7IC8vL1xuXG4gICAgcGFyZW50RE9NRWxlbWVudC5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBmaXJzdFNpYmxpbmdET01FbGVtZW50KTtcbiAgfVxuXG4gIHByZXBlbmRUbyhwYXJlbnRFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudEVsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTUVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgbnVsbCk7IC8vL1xuICB9XG5cbiAgcmVtb3ZlRnJvbShwYXJlbnRFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudEVsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTUVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5kb21FbGVtZW50KTtcbiAgfVxuXG4gIHJlbW92ZShlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVDaGlsZChkb21FbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGluc2VydEJlZm9yZShzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCk7XG4gIH1cblxuICBpbnNlcnRBZnRlcihzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudC5uZXh0U2libGluZyk7ICAvLy9cbiAgfVxuXG4gIHNob3coZGlzcGxheVN0eWxlID0gJ2Jsb2NrJykgeyB0aGlzLmRvbUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXlTdHlsZTsgfVxuXG4gIGhpZGUoKSB7IHRoaXMuZG9tRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyB9XG5cbiAgZW5hYmxlKCkgeyB0aGlzLmNsZWFyQXR0cmlidXRlKCdkaXNhYmxlZCcpOyB9XG5cbiAgZGlzYWJsZSgpIHsgdGhpcy5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7IH1cblxuICBodG1sKGh0bWwpIHtcbiAgICBpZiAoaHRtbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBodG1sID0gdGhpcy5kb21FbGVtZW50LmlubmVySFRNTDsgLy8vXG5cbiAgICAgIHJldHVybiBodG1sO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbm5lckhUTUwgPSBodG1sOyAvLy9cblxuICAgICAgdGhpcy5kb21FbGVtZW50LmlubmVySFRNTCA9IGlubmVySFRNTFxuICAgIH1cbiAgfVxuXG4gIGNzcyhjc3MpIHtcbiAgICBpZiAoY3NzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZG9tRWxlbWVudCksXG4gICAgICAgICAgICBjc3MgPSB7fTtcblxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvbXB1dGVkU3R5bGUubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBjb21wdXRlZFN0eWxlWzBdLCAgLy8vXG4gICAgICAgICAgICAgIHZhbHVlID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpOyAvLy9cblxuICAgICAgICBjc3NbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjc3MgPT09ICdzdHJpbmcnKSB7XG4gICAgICBsZXQgbmFtZSA9IGNzczsgLy8vXG5cbiAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZG9tRWxlbWVudCksXG4gICAgICAgICAgICB2YWx1ZSA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTsgLy8vXG5cbiAgICAgIGNzcyA9IHZhbHVlOyAgLy8vXG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMoY3NzKTsgLy8vXG5cbiAgICAgIG5hbWVzLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGNzc1tuYW1lXTtcblxuICAgICAgICB0aGlzLmRvbUVsZW1lbnQuc3R5bGVbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0RGVzY2VuZGFudEVsZW1lbnRzKHNlbGVjdG9yID0gJyonKSB7XG4gICAgY29uc3QgZG9tTm9kZSA9IHRoaXMuZG9tRWxlbWVudCwgIC8vL1xuICAgICAgICAgIGRlc2NlbmRhbnRET01Ob2RlcyA9IGRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlKGRvbU5vZGUpLFxuICAgICAgICAgIGRlc2NlbmRhbnRFbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzKGRlc2NlbmRhbnRET01Ob2Rlcywgc2VsZWN0b3IpO1xuXG4gICAgcmV0dXJuIGRlc2NlbmRhbnRFbGVtZW50cztcbiAgfVxuXG4gIGdldENoaWxkRWxlbWVudHMoc2VsZWN0b3IgPSAnKicpIHtcbiAgICBjb25zdCBjaGlsZERPTU5vZGVzID0gdGhpcy5kb21FbGVtZW50LmNoaWxkTm9kZXMsXG4gICAgICAgICAgY2hpbGRET01FbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzKGNoaWxkRE9NTm9kZXMsIHNlbGVjdG9yKSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoY2hpbGRET01FbGVtZW50cyk7XG5cbiAgICByZXR1cm4gY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIGdldFBhcmVudEVsZW1lbnQoc2VsZWN0b3IgPSAnKicpIHtcbiAgICBsZXQgcGFyZW50RWxlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cbiAgICBpZiAocGFyZW50RE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgaWYgKHBhcmVudERPTUVsZW1lbnQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgY29uc3QgcGFyZW50RE9NRWxlbWVudHMgPSBbcGFyZW50RE9NRWxlbWVudF0sXG4gICAgICAgICAgICAgIHBhcmVudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMocGFyZW50RE9NRWxlbWVudHMpLFxuICAgICAgICAgICAgICBmaXJzdFBhcmVudEVsZW1lbnQgPSBmaXJzdChwYXJlbnRFbGVtZW50cyk7XG5cbiAgICAgICAgcGFyZW50RWxlbWVudCA9IGZpcnN0UGFyZW50RWxlbWVudCB8fCBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnRFbGVtZW50O1xuICB9XG5cbiAgZ2V0QXNjZW5kYW50RWxlbWVudHMoc2VsZWN0b3IgPSAnKicpIHtcbiAgICBjb25zdCBhc2NlbmRhbnRET01FbGVtZW50cyA9IFtdLFxuICAgICAgICAgIHBhcmVudERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQucGFyZW50RWxlbWVudDtcblxuICAgIGxldCBhc2NlbmRhbnRET01FbGVtZW50ID0gcGFyZW50RE9NRWxlbWVudDsgIC8vL1xuICAgIHdoaWxlIChhc2NlbmRhbnRET01FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBpZiAoYXNjZW5kYW50RE9NRWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICBhc2NlbmRhbnRET01FbGVtZW50cy5wdXNoKGFzY2VuZGFudERPTUVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICBhc2NlbmRhbnRET01FbGVtZW50ID0gYXNjZW5kYW50RE9NRWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIH1cblxuICAgIGNvbnN0IGFzY2VuZGFudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoYXNjZW5kYW50RE9NRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGFzY2VuZGFudEVsZW1lbnRzO1xuICB9XG5cbiAgc3RhdGljIGNsb25lKENsYXNzLCBlbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBkZWVwID0gdHJ1ZSxcbiAgICAgICAgICBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50LmNsb25lTm9kZShkZWVwKTtcblxuICAgIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KGRvbUVsZW1lbnQpO1xuICAgIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KG51bGwpO1xuXG4gICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoQ2xhc3MsIHJlbWFpbmluZ0FyZ3VtZW50cykpO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKENsYXNzLCBodG1sLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBvdXRlckRPTUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIG91dGVyRE9NRWxlbWVudC5pbm5lckhUTUwgPSBodG1sOyAgLy8vXG5cbiAgICBjb25zdCBkb21FbGVtZW50ID0gb3V0ZXJET01FbGVtZW50LmZpcnN0Q2hpbGQ7XG5cbiAgICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChkb21FbGVtZW50KTtcbiAgICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChudWxsKTtcblxuICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KENsYXNzLCByZW1haW5pbmdBcmd1bWVudHMpKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChDbGFzcywgZG9tRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQoZG9tRWxlbWVudCk7XG4gICAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQobnVsbCk7XG5cbiAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShDbGFzcywgcmVtYWluaW5nQXJndW1lbnRzKSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHRhZ05hbWUgPSBDbGFzcy50YWdOYW1lLFxuICAgICAgICAgIGh0bWwgPSBgPCR7dGFnTmFtZX0+PC8ke3RhZ05hbWV9PmAsXG4gICAgICAgICAgZWxlbWVudCA9IEVsZW1lbnQuZnJvbUhUTUwoQ2xhc3MsIGh0bWwsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBjb25zdCBpZ25vcmVkUHJvcGVydGllcyA9IENsYXNzLmlnbm9yZWRQcm9wZXJ0aWVzLFxuICAgICAgICAgIGFkZGl0aW9uYWxQcm9wZXJ0aWVzID0gQ2xhc3MuYWRkaXRpb25hbFByb3BlcnRpZXM7XG5cbiAgICBlbGVtZW50LmFwcGx5UHJvcGVydGllcyhwcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcywgYWRkaXRpb25hbFByb3BlcnRpZXMpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwganN4TWl4aW4pO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgZXZlbnRNaXhpbik7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBjbGlja01peGluKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIG1vdXNlTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgcmVzaXplTWl4aW4pO1xuXG5FbGVtZW50LkxFRlRfTU9VU0VfQlVUVE9OID0gMDtcbkVsZW1lbnQuTUlERExFX01PVVNFX0JVVFRPTiA9IDE7XG5FbGVtZW50LlJJR0hUX01PVVNFX0JVVFRPTiA9IDI7XG5cbm1vZHVsZS5leHBvcnRzID0gRWxlbWVudDtcblxuZnVuY3Rpb24gZG9tRWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3Rvcikge1xuICBjb25zdCBkb21FbGVtZW50ID0gKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpID9cbiAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilbMF0gOiAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I7ICAvLy9cblxuICByZXR1cm4gZG9tRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoZG9tRWxlbWVudHMpIHtcbiAgY29uc3QgZG9tRWxlbWVudHNXaXRoRWxlbWVudHMgPSBmaWx0ZXIoZG9tRWxlbWVudHMsIGZ1bmN0aW9uKGRvbUVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gKGRvbUVsZW1lbnQuX19lbGVtZW50X18gIT09IHVuZGVmaW5lZCk7XG4gICAgICAgIH0pLFxuICAgICAgICBlbGVtZW50cyA9IGRvbUVsZW1lbnRzV2l0aEVsZW1lbnRzLm1hcChmdW5jdGlvbihkb21FbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIGRvbUVsZW1lbnQuX19lbGVtZW50X187XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZnVuY3Rpb24gZGVzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUoZG9tTm9kZSwgZGVzY2VuZGFudERPTU5vZGVzID0gW10pIHtcbiAgY29uc3QgY2hpbGRET01Ob2RlcyA9IGRvbU5vZGUuY2hpbGROb2RlczsgIC8vL1xuXG4gIGRlc2NlbmRhbnRET01Ob2Rlcy5jb25jYXQoY2hpbGRET01Ob2Rlcyk7XG5cbiAgY2hpbGRET01Ob2Rlcy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkRE9NTm9kZSkge1xuICAgIGRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlKGNoaWxkRE9NTm9kZSwgZGVzY2VuZGFudERPTU5vZGVzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRlc2NlbmRhbnRET01Ob2Rlcztcbn1cblxuZnVuY3Rpb24gZmlsdGVyRE9NTm9kZXMoZG9tTm9kZXMsIHNlbGVjdG9yKSB7XG4gIGNvbnN0IGZpbHRlcmVkRE9NTm9kZXMgPSBmaWx0ZXIoZG9tTm9kZXMsIGZ1bmN0aW9uKGRvbU5vZGUpIHtcbiAgICBjb25zdCBkb21Ob2RlVHlwZSA9IGRvbU5vZGUubm9kZVR5cGU7XG5cbiAgICBzd2l0Y2ggKGRvbU5vZGVUeXBlKSB7XG4gICAgICBjYXNlIE5vZGUuRUxFTUVOVF9OT0RFIDoge1xuICAgICAgICBjb25zdCBkb21FbGVtZW50ID0gZG9tTm9kZTsgLy8vXG5cbiAgICAgICAgcmV0dXJuIGRvbUVsZW1lbnQubWF0Y2hlcyhzZWxlY3Rvcik7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgTm9kZS5URVhUX05PREUgOiB7XG4gICAgICAgIGlmIChzZWxlY3RvciA9PT0gJyonKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xuXG4gIHJldHVybiBmaWx0ZXJlZERPTU5vZGVzO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXIoYXJyYXksIHRlc3QpIHtcbiAgY29uc3QgZmlsdGVyZWRBcnJheSA9IFtdO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHJlc3VsdCA9IHRlc3QoZWxlbWVudCk7XG5cbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICBmaWx0ZXJlZEFycmF5LnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZpbHRlcmVkQXJyYXk7XG59XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpO1xuXG5jbGFzcyBCb2R5IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yID0gJ2JvZHknKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBCb2R5LmNsb25lKHRoaXMpOyB9XG5cbiAgc3RhdGljIGNsb25lKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gRWxlbWVudC5jbG9uZShCb2R5LCBlbGVtZW50KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbUhUTUwoQm9keSwgaHRtbCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICAgIHJldHVybiBFbGVtZW50LmZyb21ET01FbGVtZW50KEJvZHksIGRvbUVsZW1lbnQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHByb3BlcnRpZXMgPSBDbGFzcztcbiAgICAgIENsYXNzID0gQm9keTtcbiAgICB9XG5cbiAgICByZXR1cm4gRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcyk7XG4gIH1cbn1cblxuQm9keS50YWdOYW1lID0gJ2JvZHknO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJvZHk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50Jyk7XG5cbmNsYXNzIERpdiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gRGl2LmNsb25lKHRoaXMpOyB9XG5cbiAgc3RhdGljIGNsb25lKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gRWxlbWVudC5jbG9uZShEaXYsIGVsZW1lbnQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwpIHtcbiAgICByZXR1cm4gRWxlbWVudC5mcm9tSFRNTChEaXYsIGh0bWwpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpIHtcbiAgICByZXR1cm4gRWxlbWVudC5mcm9tRE9NRWxlbWVudChEaXYsIGRvbUVsZW1lbnQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHByb3BlcnRpZXMgPSBDbGFzcztcbiAgICAgIENsYXNzID0gRGl2O1xuICAgIH1cblxuICAgIHJldHVybiBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzKTtcbiAgfVxufVxuXG5EaXYudGFnTmFtZSA9ICdkaXYnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERpdjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKTtcblxuY2xhc3MgU3BhbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gU3Bhbi5jbG9uZSh0aGlzKTsgfVxuXG4gIHN0YXRpYyBjbG9uZShlbGVtZW50KSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuY2xvbmUoU3BhbiwgZWxlbWVudCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCkge1xuICAgIHJldHVybiBFbGVtZW50LmZyb21IVE1MKFNwYW4sIGh0bWwpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpIHtcbiAgICByZXR1cm4gRWxlbWVudC5mcm9tRE9NRWxlbWVudChTcGFuLCBkb21FbGVtZW50KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICBwcm9wZXJ0aWVzID0gQ2xhc3M7XG4gICAgICBDbGFzcyA9IFNwYW47XG4gICAgfVxuXG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMpO1xuICB9XG59XG5cblNwYW4udGFnTmFtZSA9ICdzcGFuJztcblxubW9kdWxlLmV4cG9ydHMgPSBTcGFuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50Jyk7XG5cbmNsYXNzIElucHV0RWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcbiAgfVxuXG4gIGhhc0ZvY3VzKCkge1xuICAgIGNvbnN0IGZvY3VzID0gKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IHRoaXMuZG9tRWxlbWVudCk7ICAvLy9cblxuICAgIHJldHVybiBmb2N1cztcbiAgfVxuXG4gIGZvY3VzKCkgeyB0aGlzLmRvbUVsZW1lbnQuZm9jdXMoKTsgfVxuXG4gIHN0YXRpYyBjbG9uZShDbGFzcywgZWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuY2xvbmUoQ2xhc3MsIGVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoQ2xhc3MsIGh0bWwsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIHJldHVybiBFbGVtZW50LmZyb21IVE1MKENsYXNzLCBodG1sLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KENsYXNzLCBkb21FbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICByZXR1cm4gRWxlbWVudC5mcm9tRE9NRWxlbWVudChDbGFzcywgZG9tRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBJbnB1dEVsZW1lbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IElucHV0RWxlbWVudCA9IHJlcXVpcmUoJy4uL2lucHV0RWxlbWVudCcpO1xuXG5jbGFzcyBCdXR0b24gZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY2xpY2tIYW5kbGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgaWYgKGNsaWNrSGFuZGxlcikge1xuICAgICAgdGhpcy5vbkNsaWNrKGNsaWNrSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoY2xpY2tIYW5kbGVyKSB7IHJldHVybiBCdXR0b24uY2xvbmUodGhpcywgY2xpY2tIYW5kbGVyKTsgfVxuXG4gIG9uQ2xpY2soaGFuZGxlcikge1xuICAgIGlmIChoYW5kbGVyLmludGVybWVkaWF0ZUhhbmRsZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFuZGxlci5pbnRlcm1lZGlhdGVIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUNsaWNrSGFuZGxlcjtcbiAgICB9XG4gICAgXG4gICAgc3VwZXIub25DbGljayhoYW5kbGVyKTtcbiAgfVxuXG4gIG9mZkNsaWNrKGhhbmRsZXIpIHtcbiAgICBzdXBlci5vZmZDbGljayhoYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBjbG9uZShlbGVtZW50LCBjbGlja0hhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmNsb25lKEJ1dHRvbiwgZWxlbWVudCwgY2xpY2tIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sLCBjbGlja0hhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21IVE1MKEJ1dHRvbiwgaHRtbCwgY2xpY2tIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50LCBjbGlja0hhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21ET01FbGVtZW50KEJ1dHRvbiwgZG9tRWxlbWVudCwgY2xpY2tIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBvbkNsaWNrIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNsaWNrSGFuZGxlciA9IG9uQ2xpY2s7IC8vL1xuXG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tUHJvcGVydGllcyhCdXR0b24sIHByb3BlcnRpZXMsIGNsaWNrSGFuZGxlcik7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihCdXR0b24sIHtcbiAgdGFnTmFtZTogJ2J1dHRvbicsXG4gIGlnbm9yZWRQcm9wZXJ0aWVzOiBbXG4gICAgJ29uQ2xpY2snXG4gIF1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJ1dHRvbjtcblxuZnVuY3Rpb24gZGVmYXVsdEludGVybWVkaWF0ZUNsaWNrSGFuZGxlcihoYW5kbGVyLCBldmVudCkge1xuICBjb25zdCBtb3VzZUJ1dHRvbiA9IGV2ZW50LmJ1dHRvbixcbiAgICAgICAgcHJldmVudERlZmF1bHQgPSBoYW5kbGVyKG1vdXNlQnV0dG9uKTtcblxuICByZXR1cm4gcHJldmVudERlZmF1bHQ7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IElucHV0RWxlbWVudCA9IHJlcXVpcmUoJy4uL2lucHV0RWxlbWVudCcpO1xuXG5jbGFzcyBDaGVja2JveCBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgaWYgKGNoYW5nZUhhbmRsZXIpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoY2hhbmdlSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gQ2hlY2tib3guY2xvbmUodGhpcywgY2hhbmdlSGFuZGxlcik7IH1cblxuICBvbkNoYW5nZShoYW5kbGVyKSB7XG4gICAgaWYgKGhhbmRsZXIuaW50ZXJtZWRpYXRlSGFuZGxlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYW5kbGVyLmludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHRoaXMub24oJ2NsaWNrJywgaGFuZGxlcik7ICAvLy9cbiAgfVxuICBcbiAgb2ZmQ2hhbmdlKGhhbmRsZXIpIHtcbiAgICB0aGlzLm9mZignY2xpY2snLCBoYW5kbGVyKTsgIC8vL1xuICB9XG5cbiAgY2hlY2soY2hlY2tlZCA9IHRydWUpIHtcbiAgICBjaGVja2VkID9cbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ2NoZWNrZWQnKSA6XG4gICAgICAgIHRoaXMuY2xlYXJBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcbiAgfVxuXG4gIGlzQ2hlY2tlZCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jaGVja2VkOyB9XG5cbiAgc3RhdGljIGNsb25lKGVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmNsb25lKENoZWNrYm94LCBlbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sLCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tSFRNTChDaGVja2JveCwgaHRtbCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoQ2hlY2tib3gsIGRvbUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSBvbkNoYW5nZTsgLy8vICAgIFxuXG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tUHJvcGVydGllcyhDaGVja2JveCwgcHJvcGVydGllcywgY2hhbmdlSGFuZGxlcik7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihDaGVja2JveCwge1xuICB0YWdOYW1lOiAnaW5wdXQnLFxuICBpZ25vcmVkUHJvcGVydGllczogW1xuICAgICdvbkNoYW5nZSdcbiAgXSxcbiAgYWRkaXRpb25hbFByb3BlcnRpZXM6IHtcbiAgICB0eXBlOiAnY2hlY2tib3gnXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENoZWNrYm94O1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcihoYW5kbGVyLCBldmVudCkge1xuICBjb25zdCBjaGVja2VkID0gdGhpcy5pc0NoZWNrZWQoKSxcbiAgICAgICAgcHJldmVudERlZmF1bHQgPSBoYW5kbGVyKGNoZWNrZWQpO1xuXG4gIHJldHVybiBwcmV2ZW50RGVmYXVsdDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgSW5wdXRFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW5wdXRFbGVtZW50Jyk7XG5cbmNsYXNzIElucHV0IGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICBpZiAoY2hhbmdlSGFuZGxlcikge1xuICAgICAgdGhpcy5vbkNoYW5nZShjaGFuZ2VIYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBjbG9uZShjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBJbnB1dC5jbG9uZSh0aGlzLCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIGdldFZhbHVlKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnZhbHVlOyB9XG4gIFxuICBnZXRTZWxlY3Rpb25TdGFydCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zZWxlY3Rpb25TdGFydDsgfVxuICBcbiAgZ2V0U2VsZWN0aW9uRW5kKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnNlbGVjdGlvbkVuZDsgfVxuICBcbiAgc2V0VmFsdWUodmFsdWUpIHsgdGhpcy5kb21FbGVtZW50LnZhbHVlID0gdmFsdWU7IH1cbiAgXG4gIHNldFNlbGVjdGlvblN0YXJ0KHNlbGVjdGlvblN0YXJ0KSB7IHRoaXMuZG9tRWxlbWVudC5zZWxlY3Rpb25TdGFydCA9IHNlbGVjdGlvblN0YXJ0OyB9XG4gIFxuICBzZXRTZWxlY3Rpb25FbmQoc2VsZWN0aW9uRW5kKSB7IHRoaXMuZG9tRWxlbWVudC5zZWxlY3Rpb25FbmQgPSBzZWxlY3Rpb25FbmQ7IH1cblxuICBvbkNoYW5nZShoYW5kbGVyKSB7XG4gICAgaWYgKGhhbmRsZXIuaW50ZXJtZWRpYXRlSGFuZGxlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYW5kbGVyLmludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHRoaXMub24oJ2NoYW5nZScsIGhhbmRsZXIpO1xuICB9XG5cbiAgb2ZmQ2hhbmdlKGhhbmRsZXIpIHtcbiAgICB0aGlzLm9mZignY2hhbmdlJywgaGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgY2xvbmUoZWxlbWVudCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuY2xvbmUoSW5wdXQsIGVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21IVE1MKElucHV0LCBodG1sLCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tRE9NRWxlbWVudChJbnB1dCwgZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IG9uQ2hhbmdlOyAvLy8gICAgXG5cbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKElucHV0LCBwcm9wZXJ0aWVzLCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKElucHV0LCB7XG4gIHRhZ05hbWU6ICdpbnB1dCcsXG4gIGlnbm9yZWRQcm9wZXJ0aWVzOiBbXG4gICAgJ29uQ2hhbmdlJ1xuICBdXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnB1dDtcblxuZnVuY3Rpb24gZGVmYXVsdEludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIoaGFuZGxlciwgZXZlbnQpIHtcbiAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgIHByZXZlbnREZWZhdWx0ID0gaGFuZGxlcih2YWx1ZSk7XG5cbiAgcmV0dXJuIHByZXZlbnREZWZhdWx0O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBJbnB1dEVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnB1dEVsZW1lbnQnKTtcblxuY2xhc3MgTGluayBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjbGlja0hhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICBpZiAoY2xpY2tIYW5kbGVyKSB7XG4gICAgICB0aGlzLm9uQ2xpY2soY2xpY2tIYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBjbG9uZShjbGlja0hhbmRsZXIpIHsgcmV0dXJuIExpbmsuY2xvbmUodGhpcywgY2xpY2tIYW5kbGVyKTsgfVxuXG4gIG9uQ2xpY2soaGFuZGxlcikge1xuICAgIGlmIChoYW5kbGVyLmludGVybWVkaWF0ZUhhbmRsZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFuZGxlci5pbnRlcm1lZGlhdGVIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUNsaWNrSGFuZGxlci5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLm9uKCdjbGljaycsIGhhbmRsZXIpO1xuICB9XG4gIFxuICBvZmZDbGljayhoYW5kbGVyKSB7XG4gICAgdGhpcy5vZmYoJ2NsaWNrJywgaGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgY2xvbmUoZWxlbWVudCwgY2xpY2tIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5jbG9uZShMaW5rLCBlbGVtZW50LCBjbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwsIGNsaWNrSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbUhUTUwoTGluaywgaHRtbCwgY2xpY2tIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50LCBjbGlja0hhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21ET01FbGVtZW50KExpbmssIGRvbUVsZW1lbnQsIGNsaWNrSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgb25DbGljayB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjbGlja0hhbmRsZXIgPSBvbkNsaWNrOyAvLy8gICAgXG5cbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKExpbmssIHByb3BlcnRpZXMsIGNsaWNrSGFuZGxlcik7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihMaW5rLCB7XG4gIHRhZ05hbWU6ICdhJyxcbiAgaWdub3JlZFByb3BlcnRpZXM6IFtcbiAgICAnb25DbGljaydcbiAgXVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTGluaztcblxuZnVuY3Rpb24gZGVmYXVsdEludGVybWVkaWF0ZUNsaWNrSGFuZGxlcihoYW5kbGVyLCBldmVudCkge1xuICBjb25zdCBocmVmID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSxcbiAgICAgICAgcHJldmVudERlZmF1bHQgPSBoYW5kbGVyKGhyZWYpO1xuXG4gIHJldHVybiBwcmV2ZW50RGVmYXVsdDtcbn0iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IElucHV0RWxlbWVudCA9IHJlcXVpcmUoJy4uL2lucHV0RWxlbWVudCcpO1xuXG5jbGFzcyBTZWxlY3QgZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY2hhbmdlSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjaGFuZ2VIYW5kbGVyKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIGNsb25lKGNoYW5nZUhhbmRsZXIpIHsgcmV0dXJuIFNlbGVjdC5jbG9uZSh0aGlzLCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIGdldFNlbGVjdGVkT3B0aW9uVmFsdWUoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQudmFsdWU7IH0gLy8vXG5cbiAgc2V0U2VsZWN0ZWRPcHRpb25CeVZhbHVlKHZhbHVlKSB7IHRoaXMuZG9tRWxlbWVudC52YWx1ZSA9IHZhbHVlOyB9IC8vL1xuXG4gIG9uQ2hhbmdlKGhhbmRsZXIpIHtcbiAgICBpZiAoaGFuZGxlci5pbnRlcm1lZGlhdGVIYW5kbGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhbmRsZXIuaW50ZXJtZWRpYXRlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIFxuICAgIHRoaXMub24oJ2NoYW5nZScsIGhhbmRsZXIpO1xuICB9XG4gIFxuICBvZmZDaGFuZ2UoaGFuZGxlcikge1xuICAgIHRoaXMub2ZmKCdjaGFuZ2UnLCBoYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBjbG9uZShlbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5jbG9uZShTZWxlY3QsIGVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21IVE1MKFNlbGVjdCwgaHRtbCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoU2VsZWN0LCBkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gb25DaGFuZ2U7IC8vLyAgICBcblxuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoU2VsZWN0LCBwcm9wZXJ0aWVzLCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFNlbGVjdCwge1xuICB0YWdOYW1lOiAnc2VsZWN0JyxcbiAgaWdub3JlZFByb3BlcnRpZXM6IFtcbiAgICAnb25DaGFuZ2UnXG4gIF1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNlbGVjdDtcblxuZnVuY3Rpb24gZGVmYXVsdEludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIoaGFuZGxlciwgZXZlbnQpIHtcbiAgY29uc3Qgc2VsZWN0ZWRPcHRpb25WYWx1ZSA9IHRoaXMuZ2V0U2VsZWN0ZWRPcHRpb25WYWx1ZSgpLFxuICAgICAgICBwcmV2ZW50RGVmYXVsdCA9IGhhbmRsZXIoc2VsZWN0ZWRPcHRpb25WYWx1ZSk7XG5cbiAgcmV0dXJuIHByZXZlbnREZWZhdWx0O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBJbnB1dEVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnB1dEVsZW1lbnQnKTtcblxuY2xhc3MgVGV4dGFyZWEgZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY2hhbmdlSGFuZGxlciwgc2Nyb2xsSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjaGFuZ2VIYW5kbGVyKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIpO1xuICAgIH1cblxuICAgIGlmIChzY3JvbGxIYW5kbGVyKSB7XG4gICAgICB0aGlzLm9uU2Nyb2xsKHNjcm9sbEhhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIGNsb25lKGNoYW5nZUhhbmRsZXIpIHsgcmV0dXJuIFRleHRhcmVhLmNsb25lKHRoaXMsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgZ2V0VmFsdWUoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQudmFsdWU7IH1cbiAgXG4gIGdldFNlbGVjdGlvblN0YXJ0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnNlbGVjdGlvblN0YXJ0OyB9XG4gIFxuICBnZXRTZWxlY3Rpb25FbmQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uRW5kOyB9XG4gIFxuICBnZXRTY3JvbGxUb3AoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuc2Nyb2xsVG9wOyB9XG4gIFxuICBnZXRTY3JvbGxMZWZ0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnNjcm9sbExlZnQ7IH1cblxuICBzZXRWYWx1ZSh2YWx1ZSkgeyB0aGlzLmRvbUVsZW1lbnQudmFsdWUgPSB2YWx1ZTsgfVxuICBcbiAgc2V0U2VsZWN0aW9uU3RhcnQoc2VsZWN0aW9uU3RhcnQpIHsgdGhpcy5kb21FbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gc2VsZWN0aW9uU3RhcnQ7IH1cbiAgXG4gIHNldFNlbGVjdGlvbkVuZChzZWxlY3Rpb25FbmQpIHsgdGhpcy5kb21FbGVtZW50LnNlbGVjdGlvbkVuZCA9IHNlbGVjdGlvbkVuZDsgfVxuICBcbiAgc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCkgeyB0aGlzLmRvbUVsZW1lbnQuc2Nyb2xsVG9wID0gc2Nyb2xsVG9wOyB9XG4gIFxuICBzZXRTY3JvbGxMZWZ0KHNjcm9sbExlZnQpIHsgdGhpcy5kb21FbGVtZW50LnNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0OyB9XG5cbiAgb25DaGFuZ2UoaGFuZGxlcikge1xuICAgIGlmIChoYW5kbGVyLmludGVybWVkaWF0ZUhhbmRsZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFuZGxlci5pbnRlcm1lZGlhdGVIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5vbignY2hhbmdlJywgaGFuZGxlcik7XG4gIH1cblxuICBvZmZDaGFuZ2UoaGFuZGxlcikge1xuICAgIHRoaXMub2ZmKCdjaGFuZ2UnLCBoYW5kbGVyKTtcbiAgfVxuXG4gIG9uU2Nyb2xsKGhhbmRsZXIpIHtcbiAgICBpZiAoaGFuZGxlci5pbnRlcm1lZGlhdGVIYW5kbGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhbmRsZXIuaW50ZXJtZWRpYXRlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVTY3JvbGxIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgdGhpcy5vbignc2Nyb2xsJywgaGFuZGxlcik7XG4gIH1cblxuICBvZmZTY3JvbGwoaGFuZGxlcikge1xuICAgIHRoaXMub2ZmKCdzY3JvbGwnLCBoYW5kbGVyKTtcbiAgfVxuXG4gIG9uUmVzaXplKHJlc2l6ZUhhbmRsZXIpIHt9XG4gIFxuICBvZmZSZXNpemUocmVzaXplSGFuZGxlcikge31cblxuICBzdGF0aWMgY2xvbmUoZWxlbWVudCwgY2hhbmdlSGFuZGxlciwgc2Nyb2xsSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuY2xvbmUoVGV4dGFyZWEsIGVsZW1lbnQsIGNoYW5nZUhhbmRsZXIsIHNjcm9sbEhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwsIGNoYW5nZUhhbmRsZXIsIHNjcm9sbEhhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21IVE1MKFRleHRhcmVhLCBodG1sLCBjaGFuZ2VIYW5kbGVyLCBzY3JvbGxIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyLCBzY3JvbGxIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tRE9NRWxlbWVudChUZXh0YXJlYSwgZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlciwgc2Nyb2xsSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsICkge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UsIG9uU2Nyb2xsIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSBvbkNoYW5nZSwgLy8vXG4gICAgICAgICAgc2Nyb2xsSGFuZGxlciA9IG9uU2Nyb2xsOyAvLy9cbiAgICBcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFRleHRhcmVhLCBwcm9wZXJ0aWVzLCBjaGFuZ2VIYW5kbGVyLCBzY3JvbGxIYW5kbGVyKTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFRleHRhcmVhLCB7XG4gIHRhZ05hbWU6ICd0ZXh0YXJlYScsXG4gIGlnbm9yZWRQcm9wZXJ0aWVzOiBbXG4gICAgJ29uQ2hhbmdlJyxcbiAgICAnb25TY3JvbGwnXG4gIF1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHRhcmVhO1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcihoYW5kbGVyLCBldmVudCkge1xuICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKSxcbiAgICAgICAgcHJldmVudERlZmF1bHQgPSBoYW5kbGVyKHZhbHVlKTtcblxuICByZXR1cm4gcHJldmVudERlZmF1bHQ7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbnRlcm1lZGlhdGVTY3JvbGxIYW5kbGVyKGhhbmRsZXIsIGV2ZW50KSB7XG4gIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCksXG4gICAgICAgIHNjcm9sbExlZnQgPSB0aGlzLmdldFNjcm9sbExlZnQoKSxcbiAgICAgICAgcHJldmVudERlZmF1bHQgPSBoYW5kbGVyKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCk7XG5cbiAgcmV0dXJuIHByZXZlbnREZWZhdWx0O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBCb3VuZHMge1xuICBjb25zdHJ1Y3Rvcih0b3AsIGxlZnQsIGJvdHRvbSwgcmlnaHQpIHtcbiAgICB0aGlzLnRvcCA9IHRvcDtcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgIHRoaXMuYm90dG9tID0gYm90dG9tO1xuICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgfVxuXG4gIGdldFRvcCgpIHtcbiAgICByZXR1cm4gdGhpcy50b3A7XG4gIH1cblxuICBnZXRMZWZ0KCkge1xuICAgIHJldHVybiB0aGlzLmxlZnQ7XG4gIH1cblxuICBnZXRCb3R0b20oKSB7XG4gICAgcmV0dXJuIHRoaXMuYm90dG9tO1xuICB9XG5cbiAgZ2V0UmlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmlnaHQ7XG4gIH1cblxuICBpc092ZXJsYXBwaW5nTW91c2UobW91c2VUb3AsIG1vdXNlTGVmdCkge1xuICAgIHJldHVybiAoICAodGhpcy50b3AgPCBtb3VzZVRvcCkgJiZcbiAgICAgICAgICAgICAgKHRoaXMubGVmdCA8IG1vdXNlTGVmdCkgJiZcbiAgICAgICAgICAgICAgKHRoaXMuYm90dG9tID4gbW91c2VUb3ApICYmXG4gICAgICAgICAgICAgICh0aGlzLnJpZ2h0ID4gbW91c2VMZWZ0KSAgKTtcbiAgfVxuXG4gIGFyZU92ZXJsYXBwaW5nKGJvdW5kcykge1xuICAgIHJldHVybiAoICAodGhpcy50b3AgPCBib3VuZHMuYm90dG9tKSAmJlxuICAgICAgICAgICAgICAodGhpcy5sZWZ0IDwgYm91bmRzLnJpZ2h0KSAmJlxuICAgICAgICAgICAgICAodGhpcy5ib3R0b20gPiBib3VuZHMudG9wKSAmJlxuICAgICAgICAgICAgICAodGhpcy5yaWdodCA+IGJvdW5kcy5sZWZ0KSAgKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQm91bmRpbmdDbGllbnRSZWN0KGJvdW5kaW5nQ2xpZW50UmVjdCkge1xuICAgIGNvbnN0IHdpbmRvd1Njcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCwgLy8vXG4gICAgICAgICAgd2luZG93U2Nyb2xsTGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldCwgIC8vL1xuICAgICAgICAgIHRvcCA9IGJvdW5kaW5nQ2xpZW50UmVjdC50b3AgKyB3aW5kb3dTY3JvbGxUb3AsXG4gICAgICAgICAgbGVmdCA9IGJvdW5kaW5nQ2xpZW50UmVjdC5sZWZ0ICsgd2luZG93U2Nyb2xsTGVmdCxcbiAgICAgICAgICBib3R0b20gPSBib3VuZGluZ0NsaWVudFJlY3QuYm90dG9tICsgd2luZG93U2Nyb2xsVG9wLFxuICAgICAgICAgIHJpZ2h0ID0gYm91bmRpbmdDbGllbnRSZWN0LnJpZ2h0ICsgd2luZG93U2Nyb2xsTGVmdCxcbiAgICAgICAgICBib3VuZHMgPSBuZXcgQm91bmRzKHRvcCwgbGVmdCwgYm90dG9tLCByaWdodCk7XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQm91bmRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBPZmZzZXQge1xuICBjb25zdHJ1Y3Rvcih0b3AsIGxlZnQpIHtcbiAgICB0aGlzLnRvcCA9IHRvcDtcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICB9XG5cbiAgZ2V0VG9wKCkge1xuICAgIHJldHVybiB0aGlzLnRvcDtcbiAgfVxuXG4gIGdldExlZnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9mZnNldDtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gb25DbGljayhoYW5kbGVyKSB7XG4gIGlmIChoYW5kbGVyLmludGVybWVkaWF0ZUhhbmRsZXIgPT09IHVuZGVmaW5lZCkge1xuICAgIGhhbmRsZXIuaW50ZXJtZWRpYXRlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVIYW5kbGVyO1xuICB9XG4gIFxuICB0aGlzLm9uKCdjbGljaycsIGhhbmRsZXIpOyBcbn1cblxuZnVuY3Rpb24gb2ZmQ2xpY2soaGFuZGxlcikgeyB0aGlzLm9mZignY2xpY2snLCBoYW5kbGVyKTsgfVxuXG5jb25zdCBjbGlja01peGluID0ge1xuICBvbkNsaWNrOiBvbkNsaWNrLFxuICBvZmZDbGljazogb2ZmQ2xpY2tcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY2xpY2tNaXhpbjtcblxuZnVuY3Rpb24gZGVmYXVsdEludGVybWVkaWF0ZUhhbmRsZXIoaGFuZGxlciwgZXZlbnQpIHtcbiAgY29uc3QgbW91c2VUb3AgPSBldmVudC5wYWdlWSwgIC8vL1xuICAgICAgICBtb3VzZUxlZnQgPSBldmVudC5wYWdlWCwgLy8vXG4gICAgICAgIG1vdXNlQnV0dG9uID0gZXZlbnQuYnV0dG9uLCAvLy9cbiAgICAgICAgcHJldmVudERlZmF1bHQgPSBoYW5kbGVyKG1vdXNlVG9wLCBtb3VzZUxlZnQsIG1vdXNlQnV0dG9uKTtcblxuICByZXR1cm4gcHJldmVudERlZmF1bHQ7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIG9uKGV2ZW50VHlwZXMsIGhhbmRsZXIpIHtcbiAgZXZlbnRUeXBlcyA9IGV2ZW50VHlwZXMuc3BsaXQoJyAnKTsgLy8vXG5cbiAgZXZlbnRUeXBlcy5mb3JFYWNoKGZ1bmN0aW9uKGV2ZW50VHlwZSkge1xuICAgIGNvbnN0IGFkZEV2ZW50TGlzdGVuZXIgPSB0aGlzLmFkZEhhbmRsZXIoZXZlbnRUeXBlLCBoYW5kbGVyKTtcblxuICAgIGlmIChhZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGV2ZW50TGlzdGVuZXIuYmluZCh0aGlzKSk7XG4gICAgfVxuICB9LmJpbmQodGhpcykpO1xufVxuXG5mdW5jdGlvbiBvZmYoZXZlbnRUeXBlcywgaGFuZGxlcikge1xuICBldmVudFR5cGVzID0gZXZlbnRUeXBlcy5zcGxpdCgnICcpOyAvLy9cblxuICBldmVudFR5cGVzLmZvckVhY2goZnVuY3Rpb24oZXZlbnRUeXBlKSB7XG4gICAgY29uc3QgcmVtb3ZlRXZlbnRMaXN0ZW5lciA9IHRoaXMucmVtb3ZlSGFuZGxlcihldmVudFR5cGUsIGhhbmRsZXIpO1xuICAgIFxuICAgIGlmIChyZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGV2ZW50TGlzdGVuZXIuYmluZCh0aGlzKSk7XG4gICAgfVxuICB9LmJpbmQodGhpcykpO1xufVxuXG5mdW5jdGlvbiBhZGRIYW5kbGVyKGV2ZW50VHlwZSwgaGFuZGxlcikge1xuICBsZXQgYWRkRXZlbnRMaXN0ZW5lciA9IGZhbHNlLFxuICAgICAgaGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwW2V2ZW50VHlwZV07XG5cbiAgaWYgKGhhbmRsZXJzID09PSB1bmRlZmluZWQpIHtcbiAgICBoYW5kbGVycyA9IFtdO1xuXG4gICAgdGhpcy5oYW5kbGVyc01hcFtldmVudFR5cGVdID0gaGFuZGxlcnM7XG5cbiAgICBhZGRFdmVudExpc3RlbmVyID0gdHJ1ZTtcbiAgfVxuXG4gIGhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG5cbiAgcmV0dXJuIGFkZEV2ZW50TGlzdGVuZXI7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUhhbmRsZXIoZXZlbnRUeXBlLCBoYW5kbGVyKSB7XG4gIGxldCByZW1vdmVFdmVudExpc3RlbmVyID0gZmFsc2UsXG4gICAgICBoYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbZXZlbnRUeXBlXTtcblxuICBpZiAoaGFuZGxlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgZGVsZXRlICh0aGlzLmhhbmRsZXJzTWFwW2V2ZW50VHlwZV0pO1xuXG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lciA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgaW5kZXggPSBoYW5kbGVycy5pbmRleE9mKGhhbmRsZXIpO1xuXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIGNvbnN0IGRlbGV0ZUNvdW50ID0gMTtcblxuICAgICAgaGFuZGxlcnMuc3BsaWNlKGluZGV4LCBkZWxldGVDb3VudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlbW92ZUV2ZW50TGlzdGVuZXI7XG59XG5cbmNvbnN0IGV2ZW50TWl4aW4gPSB7XG4gIG9uOiBvbixcbiAgb2ZmOiBvZmYsXG4gIGFkZEhhbmRsZXI6IGFkZEhhbmRsZXIsXG4gIHJlbW92ZUhhbmRsZXI6IHJlbW92ZUhhbmRsZXJcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXZlbnRNaXhpbjtcblxuZnVuY3Rpb24gZXZlbnRMaXN0ZW5lcihldmVudCkge1xuICBjb25zdCBldmVudFR5cGUgPSBldmVudC50eXBlLFxuICAgICAgICBoYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbZXZlbnRUeXBlXTtcblxuICBsZXQgcHJldmVudEV2ZW50RGVmYXVsdCA9IGZhbHNlO1xuXG4gIGhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24oaGFuZGxlcikge1xuICAgIGlmIChoYW5kbGVyLmludGVybWVkaWF0ZUhhbmRsZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgcHJldmVudERlZmF1bHQgPSBoYW5kbGVyLmludGVybWVkaWF0ZUhhbmRsZXIoaGFuZGxlciwgZXZlbnQpO1xuICAgICAgXG4gICAgICBpZiAocHJldmVudERlZmF1bHQgPT09IHRydWUpIHtcbiAgICAgICAgcHJldmVudEV2ZW50RGVmYXVsdCA9IHRydWU7XG4gICAgICB9ICBcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcHJldmVudERlZmF1bHQgPSBoYW5kbGVyKGV2ZW50KTtcbiAgICAgIFxuICAgICAgaWYgKHByZXZlbnREZWZhdWx0ID09PSB0cnVlKSB7XG4gICAgICAgIHByZXZlbnRFdmVudERlZmF1bHQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIFxuICBpZiAocHJldmVudEV2ZW50RGVmYXVsdCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gYXBwbHlQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGlnbm9yZWRQcm9wZXJ0aWVzLCBhZGRpdGlvbmFsUHJvcGVydGllcykge1xuICB0aGlzLnByb3BlcnRpZXMgPSB7fTtcblxuICBwcm9wZXJ0aWVzID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvcGVydGllcyk7IC8vL1xuICBcbiAgdW5hc3NpZ24ocHJvcGVydGllcywgaWdub3JlZFByb3BlcnRpZXMpO1xuXG4gIE9iamVjdC5hc3NpZ24ocHJvcGVydGllcywgYWRkaXRpb25hbFByb3BlcnRpZXMpO1xuXG4gIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMocHJvcGVydGllcyk7XG5cbiAgbmFtZXMuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgaWYgKG5hbWUgPT09ICdjaGlsZEVsZW1lbnRzJykge1xuICAgICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHByb3BlcnRpZXNbJ2NoaWxkRWxlbWVudHMnXTtcblxuICAgICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkRWxlbWVudCkge1xuICAgICAgICB0aGlzLmFwcGVuZChjaGlsZEVsZW1lbnQpO1xuICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdmFsdWUgPSBwcm9wZXJ0aWVzW25hbWVdO1xuXG4gICAgICBpZiAoZmFsc2UpIHtcblxuICAgICAgfSBlbHNlIGlmIChpc0hhbmRsZXJOYW1lKG5hbWUpKSB7XG4gICAgICAgIGFkZEhhbmRsZXIodGhpcywgbmFtZSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChpc0F0dHJpYnV0ZU5hbWUobmFtZSkpIHtcbiAgICAgICAgYWRkQXR0cmlidXRlKHRoaXMsIG5hbWUsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucHJvcGVydGllc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfS5iaW5kKHRoaXMpKTtcbn1cblxuY29uc3QganN4TWl4aW4gPSB7XG4gIGFwcGx5UHJvcGVydGllczogYXBwbHlQcm9wZXJ0aWVzXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGpzeE1peGluO1xuXG5mdW5jdGlvbiB1bmFzc2lnbihwcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcykge1xuICBpZiAoaWdub3JlZFByb3BlcnRpZXMgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IGlnbm9yZWRQcm9wZXJ0eU5hbWVzID0gaWdub3JlZFByb3BlcnRpZXM7IC8vL1xuXG4gICAgaWdub3JlZFByb3BlcnR5TmFtZXMuZm9yRWFjaChmdW5jdGlvbihpZ25vcmVkUHJvcGVydHlOYW1lKSB7XG4gICAgICBkZWxldGUgcHJvcGVydGllc1tpZ25vcmVkUHJvcGVydHlOYW1lXTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRIYW5kbGVyKGVsZW1lbnQsIG5hbWUsIHZhbHVlKSB7XG4gIGNvbnN0IGV2ZW50VHlwZSA9IG5hbWUuc3Vic3RyKDIpLnRvTG93ZXJDYXNlKCksIC8vL1xuICAgICAgICBoYW5kbGVyID0gdmFsdWU7ICAvLy9cblxuICBlbGVtZW50Lm9uKGV2ZW50VHlwZSwgaGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJpYnV0ZShlbGVtZW50LCBuYW1lLCB2YWx1ZSkge1xuICBpZiAobmFtZSA9PT0gJ2NsYXNzTmFtZScpIHtcbiAgICBuYW1lID0gJ2NsYXNzJztcbiAgfVxuXG4gIGlmIChuYW1lID09PSAnaHRtbEZvcicpIHtcbiAgICBuYW1lID0gJ2Zvcic7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG5cbiAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgZWxlbWVudC5kb21FbGVtZW50W25hbWVdW2tleV0gPSB2YWx1ZVtrZXldO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHZhbHVlID0gbmFtZTsgLy8vXG5cbiAgICAgIGVsZW1lbnQuYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5hZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzSGFuZGxlck5hbWUobmFtZSkge1xuICByZXR1cm4gbmFtZS5tYXRjaCgvXm9uLyk7XG59XG5cbmZ1bmN0aW9uIGlzQXR0cmlidXRlTmFtZShuYW1lKSB7XG4gIHJldHVybiBhdHRyaWJ1dGVOYW1lcy5pbmNsdWRlcyhuYW1lKTtcbn1cblxuY29uc3QgYXR0cmlidXRlTmFtZXMgPSBbXG4gICdhY2NlcHQnLCAnYWNjZXB0Q2hhcnNldCcsICdhY2Nlc3NLZXknLCAnYWN0aW9uJywgJ2FsbG93RnVsbFNjcmVlbicsICdhbGxvd1RyYW5zcGFyZW5jeScsICdhbHQnLCAnYXN5bmMnLCAnYXV0b0NvbXBsZXRlJywgJ2F1dG9Gb2N1cycsICdhdXRvUGxheScsXG4gICdjYXB0dXJlJywgJ2NlbGxQYWRkaW5nJywgJ2NlbGxTcGFjaW5nJywgJ2NoYWxsZW5nZScsICdjaGFyU2V0JywgJ2NoZWNrZWQnLCAnY2l0ZScsICdjbGFzc0lEJywgJ2NsYXNzTmFtZScsICdjb2xTcGFuJywgJ2NvbHMnLCAnY29udGVudCcsICdjb250ZW50RWRpdGFibGUnLCAnY29udGV4dE1lbnUnLCAnY29udHJvbHMnLCAnY29vcmRzJywgJ2Nyb3NzT3JpZ2luJyxcbiAgJ2RhdGEnLCAnZGF0ZVRpbWUnLCAnZGVmYXVsdCcsICdkZWZlcicsICdkaXInLCAnZGlzYWJsZWQnLCAnZG93bmxvYWQnLCAnZHJhZ2dhYmxlJyxcbiAgJ2VuY1R5cGUnLFxuICAnZm9ybScsICdmb3JtQWN0aW9uJywgJ2Zvcm1FbmNUeXBlJywgJ2Zvcm1NZXRob2QnLCAnZm9ybU5vVmFsaWRhdGUnLCAnZm9ybVRhcmdldCcsICdmcmFtZUJvcmRlcicsXG4gICdoZWFkZXJzJywgJ2hlaWdodCcsICdoaWRkZW4nLCAnaGlnaCcsICdocmVmJywgJ2hyZWZMYW5nJywgJ2h0bWxGb3InLCAnaHR0cEVxdWl2JyxcbiAgJ2ljb24nLCAnaWQnLCAnaW5wdXRNb2RlJywgJ2ludGVncml0eScsICdpcycsXG4gICdrZXlQYXJhbXMnLCAna2V5VHlwZScsICdraW5kJyxcbiAgJ2xhYmVsJywgJ2xhbmcnLCAnbGlzdCcsICdsb29wJywgJ2xvdycsXG4gICdtYW5pZmVzdCcsICdtYXJnaW5IZWlnaHQnLCAnbWFyZ2luV2lkdGgnLCAnbWF4JywgJ21heExlbmd0aCcsICdtZWRpYScsICdtZWRpYUdyb3VwJywgJ21ldGhvZCcsICdtaW4nLCAnbWluTGVuZ3RoJywgJ211bHRpcGxlJywgJ211dGVkJyxcbiAgJ25hbWUnLCAnbm9WYWxpZGF0ZScsICdub25jZScsXG4gICdvcGVuJywgJ29wdGltdW0nLFxuICAncGF0dGVybicsICdwbGFjZWhvbGRlcicsICdwb3N0ZXInLCAncHJlbG9hZCcsICdwcm9maWxlJyxcbiAgJ3JhZGlvR3JvdXAnLCAncmVhZE9ubHknLCAncmVsJywgJ3JlcXVpcmVkJywgJ3JldmVyc2VkJywgJ3JvbGUnLCAncm93U3BhbicsICdyb3dzJyxcbiAgJ3NhbmRib3gnLCAnc2NvcGUnLCAnc2NvcGVkJywgJ3Njcm9sbGluZycsICdzZWFtbGVzcycsICdzZWxlY3RlZCcsICdzaGFwZScsICdzaXplJywgJ3NpemVzJywgJ3NwYW4nLCAnc3BlbGxDaGVjaycsICdzcmMnLCAnc3JjRG9jJywgJ3NyY0xhbmcnLCAnc3JjU2V0JywgJ3N0YXJ0JywgJ3N0ZXAnLCAnc3R5bGUnLCAnc3VtbWFyeScsXG4gICd0YWJJbmRleCcsICd0YXJnZXQnLCAndGl0bGUnLCAndHlwZScsXG4gICd1c2VNYXAnLFxuICAndmFsdWUnLFxuICAnd2lkdGgnLFxuICAnd21vZGUnLFxuICAnd3JhcCdcbl07XG5cbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gb25Nb3VzZVVwKGhhbmRsZXIpIHtcbiAgaWYgKGhhbmRsZXIuaW50ZXJtZWRpYXRlSGFuZGxlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgaGFuZGxlci5pbnRlcm1lZGlhdGVIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUhhbmRsZXI7XG4gIH1cbiAgXG4gIHRoaXMub24oJ21vdXNldXAnLCBoYW5kbGVyKTsgXG59XG5cbmZ1bmN0aW9uIG9uTW91c2VEb3duKGhhbmRsZXIpIHtcbiAgaWYgKGhhbmRsZXIuaW50ZXJtZWRpYXRlSGFuZGxlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgaGFuZGxlci5pbnRlcm1lZGlhdGVIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUhhbmRsZXI7XG4gIH1cblxuICB0aGlzLm9uKCdtb3VzZWRvd24nLCBoYW5kbGVyKTsgXG59XG5cbmZ1bmN0aW9uIG9uTW91c2VPdmVyKGhhbmRsZXIpIHtcbiAgaWYgKGhhbmRsZXIuaW50ZXJtZWRpYXRlSGFuZGxlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgaGFuZGxlci5pbnRlcm1lZGlhdGVIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUhhbmRsZXI7XG4gIH1cblxuICB0aGlzLm9uKCdtb3VzZW92ZXInLCBoYW5kbGVyKTsgXG59XG5cbmZ1bmN0aW9uIG9uTW91c2VPdXQoaGFuZGxlcikge1xuICBpZiAoaGFuZGxlci5pbnRlcm1lZGlhdGVIYW5kbGVyID09PSB1bmRlZmluZWQpIHtcbiAgICBoYW5kbGVyLmludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlSGFuZGxlcjtcbiAgfVxuXG4gIHRoaXMub24oJ21vdXNlb3V0JywgaGFuZGxlcik7IFxufVxuXG5mdW5jdGlvbiBvbk1vdXNlTW92ZShoYW5kbGVyKSB7XG4gIGlmIChoYW5kbGVyLmludGVybWVkaWF0ZUhhbmRsZXIgPT09IHVuZGVmaW5lZCkge1xuICAgIGhhbmRsZXIuaW50ZXJtZWRpYXRlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVIYW5kbGVyO1xuICB9XG5cbiAgdGhpcy5vbignbW91c2Vtb3ZlJywgaGFuZGxlcik7IFxufVxuXG5mdW5jdGlvbiBvZmZNb3VzZVVwKGhhbmRsZXIpIHsgdGhpcy5vZmYoJ21vdXNldXAnLCBoYW5kbGVyKTsgfVxuXG5mdW5jdGlvbiBvZmZNb3VzZURvd24oaGFuZGxlcikgeyB0aGlzLm9mZignbW91c2Vkb3duJywgaGFuZGxlcik7IH1cblxuZnVuY3Rpb24gb2ZmTW91c2VPdmVyKGhhbmRsZXIpIHsgdGhpcy5vZmYoJ21vdXNlb3ZlcicsIGhhbmRsZXIpOyB9XG5cbmZ1bmN0aW9uIG9mZk1vdXNlT3V0KGhhbmRsZXIpIHsgdGhpcy5vZmYoJ21vdXNlb3V0JywgaGFuZGxlcik7IH1cblxuZnVuY3Rpb24gb2ZmTW91c2VNb3ZlKGhhbmRsZXIpIHsgdGhpcy5vZmYoJ21vdXNlbW92ZScsIGhhbmRsZXIpOyB9XG5cbmNvbnN0IG1vdXNlTWl4aW4gPSB7XG4gIG9uTW91c2VVcDogb25Nb3VzZVVwLFxuICBvbk1vdXNlRG93bjogb25Nb3VzZURvd24sXG4gIG9uTW91c2VPdmVyOiBvbk1vdXNlT3ZlcixcbiAgb25Nb3VzZU91dDogb25Nb3VzZU91dCxcbiAgb25Nb3VzZU1vdmU6IG9uTW91c2VNb3ZlLFxuICBvZmZNb3VzZVVwOiBvZmZNb3VzZVVwLFxuICBvZmZNb3VzZURvd246IG9mZk1vdXNlRG93bixcbiAgb2ZmTW91c2VPdmVyOiBvZmZNb3VzZU92ZXIsXG4gIG9mZk1vdXNlT3V0OiBvZmZNb3VzZU91dCxcbiAgb2ZmTW91c2VNb3ZlOiBvZmZNb3VzZU1vdmVcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbW91c2VNaXhpbjtcblxuZnVuY3Rpb24gZGVmYXVsdEludGVybWVkaWF0ZUhhbmRsZXIoaGFuZGxlciwgZXZlbnQpIHtcbiAgY29uc3QgbW91c2VUb3AgPSBldmVudC5wYWdlWSwgIC8vL1xuICAgICAgICBtb3VzZUxlZnQgPSBldmVudC5wYWdlWCwgLy8vXG4gICAgICAgIG1vdXNlQnV0dG9uID0gZXZlbnQuYnV0dG9uLCAvLy9cbiAgICAgICAgcHJldmVudERlZmF1bHQgPSBoYW5kbGVyKG1vdXNlVG9wLCBtb3VzZUxlZnQsIG1vdXNlQnV0dG9uKTtcblxuICByZXR1cm4gcHJldmVudERlZmF1bHQ7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIG9uUmVzaXplKGhhbmRsZXIpIHtcbiAgY29uc3QgZXZlbnRUeXBlID0gJ3Jlc2l6ZScsXG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXIgPSB0aGlzLmFkZEhhbmRsZXIoZXZlbnRUeXBlLCBoYW5kbGVyKTtcblxuICBpZiAoYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgIGFwcGVuZFJlc2l6ZU9iamVjdCh0aGlzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvZmZSZXNpemUoaGFuZGxlcikge1xuICBjb25zdCBldmVudFR5cGUgPSAncmVzaXplJyxcbiAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lciA9IHRoaXMucmVtb3ZlSGFuZGxlcihldmVudFR5cGUsIGhhbmRsZXIpO1xuXG4gIGlmIChyZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgcmVtb3ZlUmVzaXplT2JqZWN0KHRoaXMpO1xuICB9XG59XG5cbmNvbnN0IHJlc2l6ZU1peGluID0ge1xuICBvblJlc2l6ZTogb25SZXNpemUsXG4gIG9mZlJlc2l6ZTogb2ZmUmVzaXplXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlc2l6ZU1peGluO1xuXG5mdW5jdGlvbiBhcHBlbmRSZXNpemVPYmplY3QoZWxlbWVudCkge1xuICBjb25zdCByZXNpemVPYmplY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvYmplY3QnKSxcbiAgICAgICAgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudCxcbiAgICAgICAgc3R5bGUgPSBgIGRpc3BsYXk6IGJsb2NrOyBcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgICAgICAgICAgICAgICB0b3A6IDA7IFxuICAgICAgICAgICAgICAgICAgbGVmdDogMDsgXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7IFxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7IFxuICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgXG4gICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgXG4gICAgICAgICAgICAgICAgICB6LWluZGV4OiAtMTtgO1xuXG4gIHJlc2l6ZU9iamVjdC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgc3R5bGUpO1xuICByZXNpemVPYmplY3QuZGF0YSA9ICdhYm91dDpibGFuayc7XG4gIHJlc2l6ZU9iamVjdC50eXBlID0gJ3RleHQvaHRtbCc7XG5cbiAgZWxlbWVudC5fX3Jlc2l6ZU9iamVjdF9fID0gcmVzaXplT2JqZWN0O1xuXG4gIHJlc2l6ZU9iamVjdC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICByZXNpemVPYmplY3RMb2FkSGFuZGxlcihlbGVtZW50KVxuICB9O1xuXG4gIGRvbUVsZW1lbnQuYXBwZW5kQ2hpbGQocmVzaXplT2JqZWN0KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUmVzaXplT2JqZWN0KGVsZW1lbnQpIHtcbiAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudCxcbiAgICAgICAgcmVzaXplT2JqZWN0ID0gZWxlbWVudC5fX3Jlc2l6ZU9iamVjdF9fLFxuICAgICAgICBvYmplY3RXaW5kb3cgPSByZXNpemVPYmplY3QuY29udGVudERvY3VtZW50LmRlZmF1bHRWaWV3OyAgLy8vXG5cbiAgb2JqZWN0V2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUxpc3RlbmVyKTtcblxuICBkb21FbGVtZW50LnJlbW92ZUNoaWxkKHJlc2l6ZU9iamVjdCk7XG59XG5cbmZ1bmN0aW9uIHJlc2l6ZU9iamVjdExvYWRIYW5kbGVyKGVsZW1lbnQpIHtcbiAgY29uc3QgcmVzaXplT2JqZWN0ID0gZWxlbWVudC5fX3Jlc2l6ZU9iamVjdF9fLFxuICAgICAgICByZXNpemVPYmplY3RXaW5kb3cgPSByZXNpemVPYmplY3QuY29udGVudERvY3VtZW50LmRlZmF1bHRWaWV3OyAgLy8vXG5cbiAgcmVzaXplT2JqZWN0V2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xuICAgIGV2ZW50TGlzdGVuZXIoZWxlbWVudCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBldmVudExpc3RlbmVyKGVsZW1lbnQpIHtcbiAgY29uc3Qgd2lkdGggPSBlbGVtZW50LmdldFdpZHRoKCksXG4gICAgICAgIGhlaWdodCA9IGVsZW1lbnQuZ2V0SGVpZ2h0KCksXG4gICAgICAgIGhhbmRsZXJzID0gZWxlbWVudC5oYW5kbGVyc01hcFsncmVzaXplJ107XG5cbiAgaGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbihoYW5kbGVyKXtcbiAgICBoYW5kbGVyKHdpZHRoLCBoZWlnaHQpO1xuICB9KTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpLFxuICAgICAgVGV4dEVsZW1lbnQgPSByZXF1aXJlKCcuL3RleHRFbGVtZW50Jyk7XG5cbmNsYXNzIFJlYWN0IHtcbiAgc3RhdGljIGNyZWF0ZUVsZW1lbnQoZmlyc3RBcmd1bWVudCwgcHJvcGVydGllcywgLi4uY2hpbGRBcmd1bWVudHMpIHtcbiAgICBsZXQgZWxlbWVudCA9IG51bGw7XG5cbiAgICBpZiAoZmlyc3RBcmd1bWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gY2hpbGRFbGVtZW50c0Zyb21DaGlsZEFyZ3VtZW50cyhjaGlsZEFyZ3VtZW50cyk7XG5cbiAgICAgIHByb3BlcnRpZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgY2hpbGRFbGVtZW50czogY2hpbGRFbGVtZW50c1xuICAgICAgfSwgcHJvcGVydGllcyk7XG5cbiAgICAgIGlmIChmYWxzZSkge1xuXG4gICAgICB9IGVsc2UgaWYgKGlzVHlwZU9mKGZpcnN0QXJndW1lbnQsIEVsZW1lbnQpKSB7XG4gICAgICAgIGNvbnN0IENsYXNzID0gZmlyc3RBcmd1bWVudDsgIC8vL1xuXG4gICAgICAgIGVsZW1lbnQgPSBDbGFzcy5mcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudEZ1bmN0aW9uID0gZmlyc3RBcmd1bWVudDsgIC8vL1xuXG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50RnVuY3Rpb24ocHJvcGVydGllcyk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICBjb25zdCB0YWdOYW1lID0gZmlyc3RBcmd1bWVudCwgIC8vL1xuICAgICAgICAgICAgICBodG1sID0gYDwke3RhZ05hbWV9PjwvJHt0YWdOYW1lfT5gO1xuXG4gICAgICAgIGVsZW1lbnQgPSBFbGVtZW50LmZyb21IVE1MKGh0bWwpO1xuXG4gICAgICAgIGVsZW1lbnQuYXBwbHlQcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cbmZ1bmN0aW9uIGNoaWxkRWxlbWVudHNGcm9tQ2hpbGRBcmd1bWVudHMoY2hpbGRBcmd1bWVudHMpIHtcbiAgY2hpbGRBcmd1bWVudHMgPSBjaGlsZEFyZ3VtZW50cy5yZWR1Y2UoZnVuY3Rpb24oY2hpbGRBcmd1bWVudHMsIGNoaWxkQXJndW1lbnQpIHtcbiAgICBjaGlsZEFyZ3VtZW50cyA9IGNoaWxkQXJndW1lbnRzLmNvbmNhdChjaGlsZEFyZ3VtZW50KTtcblxuICAgIHJldHVybiBjaGlsZEFyZ3VtZW50cztcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBjaGlsZEFyZ3VtZW50cy5tYXAoZnVuY3Rpb24oY2hpbGRBcmd1bWVudCkge1xuICAgIGxldCBjaGlsZEVsZW1lbnQ7XG5cbiAgICBpZiAoICAoY2hpbGRBcmd1bWVudCBpbnN0YW5jZW9mIEVsZW1lbnQpXG4gICAgICAgfHwgKGNoaWxkQXJndW1lbnQgaW5zdGFuY2VvZiBUZXh0RWxlbWVudCkgICkge1xuICAgICAgY2hpbGRFbGVtZW50ID0gY2hpbGRBcmd1bWVudDsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0ZXh0ID0gY2hpbGRBcmd1bWVudCwgLy8vXG4gICAgICAgICAgICB0ZXh0RWxlbWVudCA9IG5ldyBUZXh0RWxlbWVudCh0ZXh0KTtcblxuICAgICAgY2hpbGRFbGVtZW50ID0gdGV4dEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudDtcbiAgfSk7XG5cbiAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIGlzVHlwZU9mKGFyZ3VtZW50LCBDbGFzcykge1xuICBsZXQgdHlwZU9mID0gZmFsc2U7XG5cbiAgaWYgKGFyZ3VtZW50ID09PSBDbGFzcykgeyAvLy9cbiAgICB0eXBlT2YgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGFyZ3VtZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGFyZ3VtZW50KTsgLy8vXG5cbiAgICBpZiAoYXJndW1lbnQpIHtcbiAgICAgIHR5cGVPZiA9IGlzVHlwZU9mKGFyZ3VtZW50LCBDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHR5cGVPZjtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgT2Zmc2V0ID0gcmVxdWlyZSgnLi9taXNjL29mZnNldCcpLFxuICAgICAgQm91bmRzID0gcmVxdWlyZSgnLi9taXNjL2JvdW5kcycpO1xuXG5jbGFzcyBUZXh0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRleHQpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KTsgLy8vXG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuX19lbGVtZW50X18gPSB0aGlzO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBUZXh0RWxlbWVudC5jbG9uZSh0aGlzKTsgfVxuXG4gIGdldFRleHQoKSB7XG4gICAgY29uc3Qgbm9kZVZhbHVlID0gdGhpcy5kb21FbGVtZW50Lm5vZGVWYWx1ZSxcbiAgICAgICAgICB0ZXh0ID0gbm9kZVZhbHVlOyAvLy9cblxuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgc2V0VGV4dCh0ZXh0KSB7XG4gICAgY29uc3Qgbm9kZVZhbHVlID0gdGV4dDsgLy8vXG5cbiAgICB0aGlzLmRvbUVsZW1lbnQubm9kZVZhbHVlID0gbm9kZVZhbHVlO1xuICB9XG5cbiAgZ2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IHRvcCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRUb3AsICAvLy9cbiAgICAgICAgICBsZWZ0ID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldExlZnQsICAvLy9cbiAgICAgICAgICBvZmZzZXQgPSBuZXcgT2Zmc2V0KHRvcCwgbGVmdCk7XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIGNvbnN0IGJvdW5kaW5nQ2xpZW50UmVjdCA9IHRoaXMuZG9tRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICBib3VuZHMgPSBCb3VuZHMuZnJvbUJvdW5kaW5nQ2xpZW50UmVjdChib3VuZGluZ0NsaWVudFJlY3QpO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxuXG4gIGdldFdpZHRoKCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5kb21FbGVtZW50LmNsaWVudFdpZHRoO1xuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KCkge1xuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZG9tRWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cbiAgICByZXR1cm4gaGVpZ2h0O1xuICB9XG5cbiAgYXBwZW5kVG8ocGFyZW50RWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnRFbGVtZW50LmRvbUVsZW1lbnQsXG4gICAgICAgICAgZmlyc3RTaWJsaW5nRE9NRWxlbWVudCA9IHBhcmVudERPTUVsZW1lbnQuZmlyc3RDaGlsZDsgLy8vXG5cbiAgICBwYXJlbnRET01FbGVtZW50Lmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIGZpcnN0U2libGluZ0RPTUVsZW1lbnQpO1xuICB9XG5cbiAgcHJlcGVuZFRvKHBhcmVudEVsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50RWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NRWxlbWVudC5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBudWxsKTsgLy8vXG4gIH1cblxuICByZW1vdmVGcm9tKHBhcmVudEVsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50RWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NRWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmRvbUVsZW1lbnQpO1xuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmUoKTtcbiAgfVxuXG4gIGluc2VydEJlZm9yZShzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCk7XG4gIH1cblxuICBpbnNlcnRBZnRlcihzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudC5uZXh0U2libGluZyk7ICAvLy9cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHRFbGVtZW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBldmVudE1peGluID0gcmVxdWlyZSgnLi9taXhpbi9ldmVudCcpLFxuICAgICAgY2xpY2tNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vY2xpY2snKSxcbiAgICAgIG1vdXNlTWl4aW4gPSByZXF1aXJlKCcuL21peGluL21vdXNlJyk7XG5cbmNsYXNzIFdpbmRvdyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IHdpbmRvdztcblxuICAgIHRoaXMuaGFuZGxlcnNNYXAgPSB7fTtcbiAgfVxuICBcbiAgZ2V0V2lkdGgoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaW5uZXJXaWR0aDsgfSAvLy9cbiAgXG4gIGdldEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5pbm5lckhlaWdodDsgfSAvLy9cblxuICBnZXRTY3JvbGxUb3AoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQucGFnZVlPZmZzZXQ7IH0gIC8vL1xuXG4gIGdldFNjcm9sbExlZnQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQucGFnZVhPZmZzZXQ7IH0gLy8vXG5cbiAgb25SZXNpemUoaGFuZGxlcikge1xuICAgIGNvbnN0IHR5cGUgPSAncmVzaXplJyxcbiAgICAgICAgICBhZGRFdmVudExpc3RlbmVyID0gdGhpcy5hZGRIYW5kbGVyKHR5cGUsIGhhbmRsZXIpO1xuXG4gICAgaWYgKGFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGV2ZW50TGlzdGVuZXIuYmluZCh0aGlzKSk7XG4gICAgfVxuICB9XG5cbiAgb2ZmUmVzaXplKGhhbmRsZXIpIHtcbiAgICBjb25zdCB0eXBlID0gJ3Jlc2l6ZScsXG4gICAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lciA9IHRoaXMucmVtb3ZlSGFuZGxlcih0eXBlLCBoYW5kbGVyKTtcblxuICAgIGlmIChyZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBldmVudExpc3RlbmVyLmJpbmQodGhpcykpO1xuICAgIH1cbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIGV2ZW50TWl4aW4pO1xuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCBjbGlja01peGluKTtcbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwgbW91c2VNaXhpbik7XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFdpbmRvdygpOyAgLy8vXG5cbmZ1bmN0aW9uIGV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgY29uc3QgdHlwZSA9IGV2ZW50LnR5cGUsXG4gICAgICAgIGhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFt0eXBlXSxcbiAgICAgICAgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgIGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCk7XG5cbiAgaGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgaGFuZGxlcih3aWR0aCwgaGVpZ2h0KTtcbiAgfSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBsZXhlcnMgPSB7XG4gICdMaW5lJzogcmVxdWlyZSgnLi9saWIvY29tbW9uL2xpbmUnKSxcbiAgJ0JORkxleGVyJzogcmVxdWlyZSgnLi9saWIvYm5mL2xleGVyJyksXG4gICdCYXNpY0xleGVyJzogcmVxdWlyZSgnLi9saWIvYmFzaWMvbGV4ZXInKSxcbiAgJ0Zsb3JlbmNlTGV4ZXInOiByZXF1aXJlKCcuL2xpYi9mbG9yZW5jZS9sZXhlcicpLFxuICAnc3BlY2lhbFN5bWJvbHMnOiByZXF1aXJlKCcuL2xpYi9zcGVjaWFsU3ltYm9scycpLFxuICAnU2lnbmlmaWNhbnRUb2tlbic6IHJlcXVpcmUoJy4vbGliL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudCcpLFxuICAnU3RyaW5nVG9rZW4nOiByZXF1aXJlKCcuL2xpYi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvc3RyaW5nJyksXG4gICdFbmRPZkxpbmVUb2tlbic6IHJlcXVpcmUoJy4vbGliL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC9lbmRPZkxpbmUnKSxcbiAgJ1doaXRlc3BhY2VUb2tlbic6IHJlcXVpcmUoJy4vbGliL2NvbW1vbi90b2tlbi9zaWduaWZpY2FudC93aGl0ZXNwYWNlJyksXG4gICdOb25TaWduaWZpY2FudFRva2VuJzogcmVxdWlyZSgnLi9saWIvY29tbW9uL3Rva2VuL25vblNpZ25pZmljYW50Jylcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbGV4ZXJzO1xuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgdXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwnKTtcclxuXHJcbmNsYXNzIENvbW1lbnRUb2tlbnMge1xyXG4gIHN0YXRpYyBwYXNzKHRva2Vuc09yUmVtYWluaW5nQ29udGVudCwgbGluZSwgY29udGV4dCkge1xyXG4gICAgY29uc3QgaW5Db21tZW50ID0gZmFsc2U7ICAvLy9cclxuXHJcbiAgICByZXR1cm4gaW5Db21tZW50O1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb21tZW50VG9rZW5zO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBMaW5lID0gcmVxdWlyZSgnLi9saW5lJyksXHJcbiAgICAgIFJ1bGVzID0gcmVxdWlyZSgnLi4vY29tbW9uL3J1bGVzJyksXHJcbiAgICAgIENvbW1vbkxleGVyID0gcmVxdWlyZSgnLi4vY29tbW9uL2xleGVyJyk7XHJcblxyXG5jbGFzcyBCYXNpY0xleGVyIGV4dGVuZHMgQ29tbW9uTGV4ZXIge1xyXG4gIHN0YXRpYyBnZXRTaWduaWZpY2FudFRva2VuVHlwZXMoKSB7XHJcbiAgICBjb25zdCBzaWduaWZpY2FudFRva2VuVHlwZXMgPSBbXTsgLy8vXHJcblxyXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW5UeXBlcztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmcm9tR3JhbW1hcihncmFtbWFyKSB7XHJcbiAgICBjb25zdCBydWxlcyA9IFJ1bGVzLmZyb21HcmFtbWFyKGdyYW1tYXIpLFxyXG4gICAgICAgICAgYmFzaWNMZXhlciA9IG5ldyBCYXNpY0xleGVyKHJ1bGVzLCBMaW5lKTtcclxuXHJcbiAgICByZXR1cm4gYmFzaWNMZXhlcjtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQmFzaWNMZXhlcjtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgQ29tbWVudFRva2VucyA9IHJlcXVpcmUoJy4vY29tbWVudFRva2VucycpLFxyXG4gICAgICBDb21tb25MaW5lID0gcmVxdWlyZSgnLi4vY29tbW9uL2xpbmUnKSxcclxuICAgICAgU3RyaW5nVG9rZW5zID0gcmVxdWlyZSgnLi4vY29tbW9uL3N0cmluZ1Rva2VucycpLFxyXG4gICAgICBXaGl0ZXNwYWNlVG9rZW5zID0gcmVxdWlyZSgnLi4vY29tbW9uL3doaXRlc3BhY2VUb2tlbnMnKTtcclxuXHJcbmNsYXNzIExpbmUgZXh0ZW5kcyBDb21tb25MaW5lIHtcclxuICBzdGF0aWMgZnJvbUNvbnRlbnQoY29udGVudCwgY29udGV4dCwgcnVsZXMpIHsgcmV0dXJuIHN1cGVyLmZyb21Db250ZW50KExpbmUsIGNvbnRlbnQsIGNvbnRleHQsIHJ1bGVzLCBDb21tZW50VG9rZW5zLCBTdHJpbmdUb2tlbnMsIFdoaXRlc3BhY2VUb2tlbnMpOyB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTGluZTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBMaW5lID0gcmVxdWlyZSgnLi9saW5lJyk7XG5cbmNsYXNzIEJORkxleGVyIHtcbiAgc3RhdGljIGxpbmVzRnJvbUdyYW1tYXIoZ3JhbW1hcikge1xuICAgIGNvbnN0IGNvbnRlbnRzID0gY29udGVudHNGcm9tR3JhbW1hcihncmFtbWFyKSxcbiAgICAgICAgICBsaW5lcyA9IGNvbnRlbnRzLm1hcChmdW5jdGlvbihjb250ZW50KSB7XG4gICAgICAgICAgICBjb25zdCBsaW5lID0gTGluZS5mcm9tQ29udGVudChjb250ZW50KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGxpbmU7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gbGluZXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCTkZMZXhlcjtcblxuZnVuY3Rpb24gY29udGVudHNGcm9tR3JhbW1hcihncmFtbWFyKSB7XG4gIGNvbnN0IGNvbnRlbnRzID0gZ3JhbW1hci5zcGxpdCgnXFxuJykucmVkdWNlKGZ1bmN0aW9uIChjb250ZW50cywgY29udGVudCkge1xuICAgIGxldCBtYXRjaGVzO1xuXG4gICAgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2goTGluZS5uYW1lRXhwcmVzc2lvblJlZ0V4cCk7XG5cbiAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgY29udGVudHMucHVzaChjb250ZW50KTtcblxuICAgICAgcmV0dXJuIGNvbnRlbnRzO1xuICAgIH1cblxuICAgIG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKExpbmUuY29udGludWVkRXhwcmVzc2lvblJlZ0V4cCk7XG5cbiAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcHJldmlvdXNDb250ZW50ID0gY29udGVudHMucG9wKCksXG4gICAgICAgICAgICBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyksXG4gICAgICAgICAgICBjb250aW51ZWRFeHByZXNzaW9uID0gZmlyc3RNYXRjaCwgLy8vXG4gICAgICAgICAgICBjb250aW51aW5nQ29udGVudCA9ICcgJyArIGNvbnRpbnVlZEV4cHJlc3Npb247XG5cbiAgICAgIGNvbnRlbnQgPSBwcmV2aW91c0NvbnRlbnQgKyBjb250aW51aW5nQ29udGVudDtcblxuICAgICAgY29udGVudHMucHVzaChjb250ZW50KTtcblxuICAgICAgcmV0dXJuIGNvbnRlbnRzO1xuICAgIH1cblxuICAgIHJldHVybiBjb250ZW50cztcbiAgfSwgW10pO1xuXG4gIHJldHVybiBjb250ZW50cztcbn1cblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFN5bWJvbFNlcXVlbmNlID0gcmVxdWlyZSgnLi9zeW1ib2xTZXF1ZW5jZScpO1xuXG5jbGFzcyBMaW5lIHtcbiAgY29uc3RydWN0b3IobmFtZSwgc3ltYm9sU2VxdWVuY2VzKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnN5bWJvbFNlcXVlbmNlcyA9IHN5bWJvbFNlcXVlbmNlcztcbiAgfVxuICBcbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG4gIFxuICBtYXBTeW1ib2xTZXF1ZW5jZXMoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5zeW1ib2xTZXF1ZW5jZXMubWFwKGNhbGxiYWNrKTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gY29udGVudC5tYXRjaChMaW5lLm5hbWVFeHByZXNzaW9uUmVnRXhwKSxcbiAgICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICB0aGlyZE1hdGNoID0gdGhpcmQobWF0Y2hlcyksXG4gICAgICAgICAgbmFtZSA9IHNlY29uZE1hdGNoLCAvLy9cbiAgICAgICAgICBleHByZXNzaW9uID0gdGhpcmRNYXRjaCwgLy8vXG4gICAgICAgICAgY2hvaWNlcyA9IGV4cHJlc3Npb24uc3BsaXQoTGluZS5jaG9pY2VEZWxpbWl0ZXJSZWdFeHApLFxuICAgICAgICAgIHN5bWJvbFNlcXVlbmNlcyA9IGNob2ljZXMubWFwKGZ1bmN0aW9uKGNob2ljZSkge1xuICAgICAgICAgICAgY29uc3Qgc3ltYm9sU2VxdWVuY2UgPSBTeW1ib2xTZXF1ZW5jZS5mcm9tQ2hvaWNlKGNob2ljZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBzeW1ib2xTZXF1ZW5jZTtcbiAgICAgICAgICB9KTtcbiAgICBcbiAgICBjb25zdCBsaW5lID0gbmV3IExpbmUobmFtZSwgc3ltYm9sU2VxdWVuY2VzKTtcbiAgICBcbiAgICByZXR1cm4gbGluZTtcbiAgfVxufVxuXG5MaW5lLmNob2ljZURlbGltaXRlclJlZ0V4cCA9IC9cXHMrXFx8XFxzKy87XG5MaW5lLm5hbWVFeHByZXNzaW9uUmVnRXhwID0gL15cXHMqKC4qPylcXHMrOjo9XFxzKyguKj8pXFxzKiQvO1xuTGluZS5jb250aW51ZWRFeHByZXNzaW9uUmVnRXhwID0gL15cXHMqKFxcfFxccysuKj8pXFxzKiQvO1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpbmU7XG5cbmZ1bmN0aW9uIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cbmZ1bmN0aW9uIHRoaXJkKGFycmF5KSB7IHJldHVybiBhcnJheVsyXTsgfVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBzcGVjaWFsU3ltYm9scyA9IHJlcXVpcmUoJy4uL3NwZWNpYWxTeW1ib2xzJyk7XG5cbmNsYXNzIFN5bWJvbFNlcXVlbmNlIHtcbiAgY29uc3RydWN0b3Ioc3ltYm9scykge1xuICAgIHRoaXMuc3ltYm9scyA9IHN5bWJvbHM7XG4gIH1cblxuICBtYXBTeW1ib2xzKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuc3ltYm9scy5tYXAoY2FsbGJhY2spO1xuICB9XG4gIFxuICByZWR1Y2VTeW1ib2xzKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5zeW1ib2xzLnJlZHVjZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21DaG9pY2UoY2hvaWNlKSB7XG4gICAgY29uc3Qgc3ltYm9scyA9IGNob2ljZS5zcGxpdChzeW1ib2xEZWxpbWl0ZXJSZWdFeHApLnJlZHVjZShmdW5jdGlvbihzeW1ib2xzLCBzeW1ib2wpIHtcbiAgICAgICAgICAgIGlmICggIChzeW1ib2wgPT09ICcnKVxuICAgICAgICAgICAgICAgfHwgKHN5bWJvbCA9PT0gdW5kZWZpbmVkKSAgKSB7XG4gIFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc3ltYm9scy5wdXNoKHN5bWJvbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHN5bWJvbHM7XG4gICAgICAgICAgfSwgW10pLFxuICAgICAgICAgIGV4cHJlc3Npb24gPSBuZXcgU3ltYm9sU2VxdWVuY2Uoc3ltYm9scyk7XG4gICAgXG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cbn1cblxuY29uc3Qgc3ltYm9sRGVsaW1pdGVyUmVnRXhwID0gbmV3IFJlZ0V4cChgXFxcXHMrfCgke3NwZWNpYWxTeW1ib2xzLkVORF9PRl9MSU5FfSg/OlxcXFw/fFxcXFwrfFxcXFwqKSl8KCR7c3BlY2lhbFN5bWJvbHMuTk9fV0hJVEVTUEFDRX0pYCk7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ltYm9sU2VxdWVuY2U7XG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBDb250ZXh0IHtcclxuICBjb25zdHJ1Y3RvcihtaW5pbXVtTGluZXNMZW5ndGggPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFksIHByZXZpb3VzTGluZUluQ29tbWVudCA9IG51bGwsIGZvbGxvd2luZ0xpbmVJbkNvbW1lbnQgPSBudWxsKSB7XHJcbiAgICB0aGlzLm1pbmltdW1MaW5lc0xlbmd0aCA9IG1pbmltdW1MaW5lc0xlbmd0aDtcclxuICAgIHRoaXMucHJldmlvdXNMaW5lSW5Db21tZW50ID0gcHJldmlvdXNMaW5lSW5Db21tZW50O1xyXG4gICAgdGhpcy5mb2xsb3dpbmdMaW5lSW5Db21tZW50ID0gZm9sbG93aW5nTGluZUluQ29tbWVudDtcclxuICB9XHJcblxyXG4gIGdldE1pbmltdW1MaW5lc0xlbmd0aCgpIHtcclxuICAgIHJldHVybiB0aGlzLm1pbmltdW1MaW5lc0xlbmd0aDtcclxuICB9XHJcblxyXG4gIGlzUHJldmlvdXNMaW5lSW5Db21tZW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJldmlvdXNMaW5lSW5Db21tZW50O1xyXG4gIH1cclxuXHJcbiAgaXNGb2xsb3dpbmdMaW5lSW5Db21tZW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZm9sbG93aW5nTGluZUluQ29tbWVudDtcclxuICB9XHJcblxyXG4gIHNldFByZXZpb3VzTGluZUluQ29tbWVudChwcmV2aW91c0xpbmVJbkNvbW1lbnQpIHtcclxuICAgIHRoaXMucHJldmlvdXNMaW5lSW5Db21tZW50ID0gcHJldmlvdXNMaW5lSW5Db21tZW50O1xyXG4gIH1cclxuXHJcbiAgc2hvdWxkVGVybWluYXRlKGxlbmd0aCkge1xyXG4gICAgbGV0IHRlcm1pbmF0ZSA9IGZhbHNlO1xyXG5cclxuICAgIGlmIChsZW5ndGggPj0gdGhpcy5taW5pbXVtTGluZXNMZW5ndGgpIHtcclxuICAgICAgaWYgKHRoaXMuZm9sbG93aW5nTGluZUluQ29tbWVudCA9PT0gbnVsbCkge1xyXG4gICAgICAgIHRlcm1pbmF0ZSA9IHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLnByZXZpb3VzTGluZUluQ29tbWVudCA9PT0gdGhpcy5mb2xsb3dpbmdMaW5lSW5Db21tZW50KSB7XHJcbiAgICAgICAgdGVybWluYXRlID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0ZXJtaW5hdGU7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbnRleHQ7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IExpbmUgPSByZXF1aXJlKCcuL2xpbmUnKSxcclxuICAgICAgdXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwnKSxcclxuICAgICAgUnVsZXMgPSByZXF1aXJlKCcuL3J1bGVzJyksXHJcbiAgICAgIENvbnRleHQgPSByZXF1aXJlKCcuL2NvbnRleHQnKSxcclxuICAgICAgU2lnbmlmaWNhbnRUb2tlbiA9IHJlcXVpcmUoJy4vdG9rZW4vc2lnbmlmaWNhbnQnKTtcclxuXHJcbmNsYXNzIENvbW1vbkxleGVyIHtcclxuICBjb25zdHJ1Y3RvcihydWxlcywgTGluZSkge1xyXG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xyXG4gICAgdGhpcy5MaW5lID0gTGluZTtcclxuICB9XHJcblxyXG4gIGxpbmVzRnJvbUNvbnRlbnRzKGNvbnRlbnRzLCBmaXJzdExpbmVJbmRleCA9IDAsIGNvbnRleHQgPSBuZXcgQ29udGV4dCgpKSB7XHJcbiAgICBjb25zdCBsaW5lcyA9IFtdO1xyXG4gICAgXHJcbiAgICBsZXQgaW5kZXggPSBmaXJzdExpbmVJbmRleCwgICAgXHJcbiAgICAgICAgY29udGVudCA9IGNvbnRlbnRzW2luZGV4XTtcclxuXHJcbiAgICB3aGlsZSAoY29udGVudCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNvbnN0IGxlbmd0aCA9IGluZGV4IC0gZmlyc3RMaW5lSW5kZXgsXHJcbiAgICAgICAgICAgIHRlcm1pbmF0ZSA9IGNvbnRleHQuc2hvdWxkVGVybWluYXRlKGxlbmd0aCk7XHJcblxyXG4gICAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGxpbmUgPSB0aGlzLkxpbmUuZnJvbUNvbnRlbnQoY29udGVudCwgY29udGV4dCwgdGhpcy5ydWxlcyk7XHJcblxyXG4gICAgICBsaW5lcy5wdXNoKGxpbmUpO1xyXG5cclxuICAgICAgY29udGVudCA9IGNvbnRlbnRzWysraW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBsaW5lcztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBydWxlc0Zyb21HcmFtbWFyKGdyYW1tYXIpIHsgcmV0dXJuIFJ1bGVzLmZyb21HcmFtbWFyKGdyYW1tYXIpOyB9XHJcblxyXG4gIHN0YXRpYyBzaWduaWZpY2FudFRva2VuVHlwZXNGcm9tR3JhbW1hcihncmFtbWFyKSB7XHJcbiAgICBsZXQgIHNpZ25pZmljYW50VG9rZW5UeXBlcyA9IE9iamVjdC5rZXlzKFNpZ25pZmljYW50VG9rZW4udHlwZXMpO1xyXG4gICAgXHJcbiAgICBjb25zdCBncmFtbWFyVHlwZXMgPSBncmFtbWFyLm1hcChmdW5jdGlvbihncmFtbWFyRW50cnkpIHtcclxuICAgICAgICAgICAgY29uc3QgdHlwZSA9IHV0aWwudHlwZUZyb21HcmFtbWFyRW50cnkoZ3JhbW1hckVudHJ5KSxcclxuICAgICAgICAgICAgICAgICAgZ3JhbW1hclR5cGUgPSB0eXBlOyAgLy8vXHJcbiAgICBcclxuICAgICAgICAgICAgcmV0dXJuIGdyYW1tYXJUeXBlO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgc2lnbmlmaWNhbnRUb2tlblR5cGVzID0gc2lnbmlmaWNhbnRUb2tlblR5cGVzLmNvbmNhdChncmFtbWFyVHlwZXMpOyAvLy9cclxuXHJcbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlblR5cGVzO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb21tb25MZXhlcjtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgdXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwnKSxcclxuICAgICAgU2lnbmlmaWNhbnRUb2tlbnMgPSByZXF1aXJlKCcuL3NpZ25pZmljYW50VG9rZW5zJyk7XHJcblxyXG5jbGFzcyBMaW5lIHtcclxuICBjb25zdHJ1Y3Rvcihjb250ZW50KSB7XHJcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xyXG5cclxuICAgIHRoaXMudG9rZW5zID0gdW5kZWZpbmVkO1xyXG4gICAgXHJcbiAgICB0aGlzLmluQ29tbWVudCA9IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIGdldENvbnRlbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0VG9rZW5zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xyXG4gIH1cclxuXHJcbiAgaXNJbkNvbW1lbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbkNvbW1lbnQ7XHJcbiAgfVxyXG5cclxuICBnZXRIVE1MKCkge1xyXG4gICAgbGV0IGh0bWwgPSB0aGlzLnRva2Vucy5yZWR1Y2UoZnVuY3Rpb24oaHRtbCwgdG9rZW4pIHtcclxuICAgICAgICAgIGNvbnN0IHRva2VuSFRNTCA9IHRva2VuLmdldEhUTUwoKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgaHRtbCArPSB0b2tlbkhUTUw7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHJldHVybiBodG1sO1xyXG4gICAgICAgIH0sICcnKTtcclxuICAgIFxyXG4gICAgaHRtbCArPSAnXFxuJztcclxuICAgIFxyXG4gICAgcmV0dXJuIGh0bWw7XHJcbiAgfVxyXG5cclxuICBzZXRUb2tlbnModG9rZW5zKSB7XHJcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcclxuICB9XHJcblxyXG4gIHNldEluQ29tbWVudChpbkNvbW1lbnQpIHtcclxuICAgIHRoaXMuaW5Db21tZW50ID0gaW5Db21tZW50O1xyXG4gIH1cclxuXHJcbiAgcHVzaFRva2VuKHRva2VuKSB7XHJcbiAgICB0aGlzLnRva2Vucy5wdXNoKHRva2VuKTtcclxuICB9XHJcbiAgXHJcbiAgc3RhdGljIGZyb21Db250ZW50KExpbmUsIGNvbnRlbnQsIGNvbnRleHQsIHJ1bGVzLCBDb21tZW50VG9rZW5zLCBTdHJpbmdUb2tlbnMsIFdoaXRlc3BhY2VUb2tlbnMpIHtcclxuICAgIGNvbnN0IGxpbmUgPSBuZXcgTGluZShjb250ZW50KSxcclxuICAgICAgICAgIHRva2Vuc09yQ29udGVudHMgPSBbY29udGVudF0sXHJcbiAgICAgICAgICBpbkNvbW1lbnQgPSBDb21tZW50VG9rZW5zLnBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSwgY29udGV4dCk7XHJcblxyXG4gICAgU3RyaW5nVG9rZW5zLnBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSk7XHJcbiAgICBXaGl0ZXNwYWNlVG9rZW5zLnBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSk7XHJcblxyXG4gICAgY29uc3QgdG9rZW5zID0gU2lnbmlmaWNhbnRUb2tlbnMucGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lLCBydWxlcyk7XHJcblxyXG4gICAgbGluZS5zZXRUb2tlbnModG9rZW5zKTtcclxuXHJcbiAgICBsaW5lLnNldEluQ29tbWVudChpbkNvbW1lbnQpO1xyXG5cclxuICAgIHJldHVybiBsaW5lO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBMaW5lO1xyXG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFNpZ25pZmljYW50VG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQnKTtcblxuY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIHJlZ0V4cCkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5yZWdFeHAgPSByZWdFeHA7XG4gIH1cbiAgXG4gIHNpZ25pZmljYW50VG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQoY29udGVudCkge1xuICAgIGxldCBzaWduaWZpY2FudFRva2VuUG9zaXRpb24gPSAtMTtcbiAgICBcbiAgICBjb25zdCBtYXRjaGVzID0gY29udGVudC5tYXRjaCh0aGlzLnJlZ0V4cCk7XG4gICAgXG4gICAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKTtcbiAgICAgIFxuICAgICAgaWYgKGZpcnN0TWF0Y2ggIT09ICcnKSB7XG4gICAgICAgIHNpZ25pZmljYW50VG9rZW5Qb3NpdGlvbiA9IG1hdGNoZXMuaW5kZXg7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuUG9zaXRpb247XG4gIH1cblxuICBzaWduaWZpY2FudFRva2VuRnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gY29udGVudC5tYXRjaCh0aGlzLnJlZ0V4cCksXG4gICAgICAgICAgZmlyc3RNYXRjaCA9IGZpcnN0KG1hdGNoZXMpO1xuXG4gICAgY29udGVudCA9IGZpcnN0TWF0Y2g7IC8vL1xuXG4gICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IFNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnRMaW5lQW5kVHlwZShjb250ZW50LCBsaW5lLCB0aGlzLnR5cGUpO1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW47XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUnVsZSA9IHJlcXVpcmUoJy4vcnVsZScpLFxuICAgICAgdXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwnKTtcblxuY2xhc3MgUnVsZXMge1xuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIGdldFJ1bGUoZGVwdGgpIHtcbiAgICBjb25zdCBydWxlID0gdGhpcy5hcnJheVtkZXB0aF0gfHwgbnVsbDsgLy8vXG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21HcmFtbWFyKGdyYW1tYXIpIHtcbiAgICBjb25zdCBhcnJheSA9IGdyYW1tYXIubWFwKGZ1bmN0aW9uKGdyYW1tYXJFbnRyeSkge1xuICAgICAgICAgICAgY29uc3QgdHlwZSA9IHV0aWwudHlwZUZyb21HcmFtbWFyRW50cnkoZ3JhbW1hckVudHJ5KSxcbiAgICAgICAgICAgICAgICAgIHJlZ0V4cCA9IHV0aWwucmVnRXhwRnJvbUdyYW1tYXJFbnRyeShncmFtbWFyRW50cnkpLFxuICAgICAgICAgICAgICAgICAgcnVsZSA9IG5ldyBSdWxlKHR5cGUsIHJlZ0V4cCk7XG4gIFxuICAgICAgICAgICAgcmV0dXJuIHJ1bGU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgcnVsZXMgPSBuZXcgUnVsZXMoYXJyYXkpO1xuICAgIFxuICAgIHJldHVybiBydWxlcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGVzO1xuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgU2lnbmlmaWNhbnRUb2tlbnMge1xyXG4gIHN0YXRpYyBwYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUsIHJ1bGVzKSB7XHJcbiAgICBjb25zdCB0b2tlbnMgPSB0b2tlbnNPckNvbnRlbnRzLnJlZHVjZShmdW5jdGlvbih0b2tlbnMsIHRva2VuT3JSZW1haW5pbmdDb250ZW50KSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW5PclJlbWFpbmluZ0NvbnRlbnQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgY29udGVudCA9IHRva2VuT3JSZW1haW5pbmdDb250ZW50LCAgLy8vXHJcbiAgICAgICAgICAgICAgICAgICAgZGVwdGggPSAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5zID0gc2lnbmlmaWNhbnRUb2tlbnNGcm9tV2l0aGluQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSwgcnVsZXMsIGRlcHRoKTtcclxuICAgICAgXHJcbiAgICAgICAgICAgICAgdG9rZW5zID0gdG9rZW5zLmNvbmNhdChzaWduaWZpY2FudFRva2Vucyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgY29uc3Qgbm9uU2lnbmlmaWNhbnRUb2tlbiA9IHRva2VuT3JSZW1haW5pbmdDb250ZW50OyAgLy8vXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgdG9rZW5zLnB1c2gobm9uU2lnbmlmaWNhbnRUb2tlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnM7XHJcbiAgICAgICAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIHRva2VucztcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU2lnbmlmaWNhbnRUb2tlbnM7XHJcblxyXG5mdW5jdGlvbiBzaWduaWZpY2FudFRva2Vuc0Zyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBydWxlcywgZGVwdGgpIHtcclxuICBsZXQgc2lnbmlmaWNhbnRUb2tlbnMgPSBbXTtcclxuXHJcbiAgaWYgKGNvbnRlbnQgIT09ICcnKSB7XHJcbiAgICBjb25zdCBydWxlID0gcnVsZXMuZ2V0UnVsZShkZXB0aCk7XHJcblxyXG4gICAgaWYgKHJ1bGUgIT09IG51bGwpIHtcclxuICAgICAgY29uc3QgbmV4dERlcHRoID0gZGVwdGggKyAxLFxyXG4gICAgICAgICAgICBzaWduaWZpY2FudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ID0gcnVsZS5zaWduaWZpY2FudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50KGNvbnRlbnQpO1xyXG5cclxuICAgICAgaWYgKHNpZ25pZmljYW50VG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQgPT09IC0xKSB7XHJcbiAgICAgICAgc2lnbmlmaWNhbnRUb2tlbnMgPSBzaWduaWZpY2FudFRva2Vuc0Zyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBydWxlcywgbmV4dERlcHRoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBzaWduaWZpY2FudFRva2VuID0gcnVsZS5zaWduaWZpY2FudFRva2VuRnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpLFxyXG4gICAgICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5MZW5ndGggPSBzaWduaWZpY2FudFRva2VuLmdldExlbmd0aCgpLFxyXG4gICAgICAgICAgICAgIGxlZnQgPSBzaWduaWZpY2FudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50LCAgLy8vXHJcbiAgICAgICAgICAgICAgcmlnaHQgPSBzaWduaWZpY2FudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ICsgc2lnbmlmaWNhbnRUb2tlbkxlbmd0aCwgIC8vL1xyXG4gICAgICAgICAgICAgIGxlZnRDb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoMCwgbGVmdCksXHJcbiAgICAgICAgICAgICAgcmlnaHRDb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcocmlnaHQpLFxyXG4gICAgICAgICAgICAgIGxlZnRTaWduaWZpY2FudFRva2VucyA9IHNpZ25pZmljYW50VG9rZW5zRnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKGxlZnRDb250ZW50LCBsaW5lLCBydWxlcywgbmV4dERlcHRoKSxcclxuICAgICAgICAgICAgICByaWdodFNpZ25pZmljYW50VG9rZW5zID0gc2lnbmlmaWNhbnRUb2tlbnNGcm9tV2l0aGluQ29udGVudEFuZExpbmUocmlnaHRDb250ZW50LCBsaW5lLCBydWxlcywgZGVwdGgpO1xyXG5cclxuICAgICAgICBzaWduaWZpY2FudFRva2VucyA9IFtdLmNvbmNhdChsZWZ0U2lnbmlmaWNhbnRUb2tlbnMpLmNvbmNhdChzaWduaWZpY2FudFRva2VuKS5jb25jYXQocmlnaHRTaWduaWZpY2FudFRva2Vucyk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlcmUgaXMgbm8gcnVsZSB0byBwYXJzZSB0aGUgY29udGVudCAnJHtjb250ZW50fScgb24gbGluZSAke2xpbmV9YCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbnM7XHJcbn1cclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgVG9rZW5zID0gcmVxdWlyZSgnLi90b2tlbnMnKSxcclxuICAgICAgU3RyaW5nVG9rZW4gPSByZXF1aXJlKCcuL3Rva2VuL3NpZ25pZmljYW50L3N0cmluZycpO1xyXG5cclxuY2xhc3MgU3RyaW5nVG9rZW5zIHtcclxuICBzdGF0aWMgcGFzcyh0b2tlbnNPckNvbnRlbnRzLCBsaW5lKSB7IFRva2Vucy5wYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUsIFN0cmluZ1Rva2VuKTsgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFN0cmluZ1Rva2VucztcclxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB1dGlsID0gcmVxdWlyZSgnLi4vLi4vdXRpbCcpO1xuXG5jbGFzcyBOb25TaWduaWZpY2FudFRva2VuIHtcbiAgY29uc3RydWN0b3IoY29udGVudCwgbGluZSwgaHRtbCkge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy5saW5lID0gbGluZTtcbiAgICB0aGlzLmh0bWwgPSBodG1sO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG4gIFxuICBnZXRMaW5lKCkge1xuICAgIHJldHVybiB0aGlzLmxpbmU7XG4gIH1cblxuICBnZXRIVE1MKCkge1xuICAgIHJldHVybiB0aGlzLmh0bWw7XG4gIH1cbiAgXG4gIGdldExlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50Lmxlbmd0aDsgLy8vXG4gIH1cbiAgXG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBOb25TaWduaWZpY2FudFRva2VuLmNsb25lKHRoaXMsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uLCBOb25TaWduaWZpY2FudFRva2VuKTsgfVxuXG4gIHN0YXRpYyBjbG9uZSh0b2tlbiwgc3RhcnRQb3NpdGlvbiA9IDAsIGVuZFBvc2l0aW9uID0gdG9rZW4uZ2V0TGVuZ3RoKCksIENsYXNzID0gTm9uU2lnbmlmaWNhbnRUb2tlbikge1xuICAgIGxldCBjbG9uZWROb25TaWduaWZpY2FudFRva2VuID0gbnVsbDtcblxuICAgIGlmIChzdGFydFBvc2l0aW9uICE9PSBlbmRQb3NpdGlvbikge1xuICAgICAgY29uc3QgbGluZSA9IHRva2VuLmdldExpbmUoKTtcblxuICAgICAgbGV0IGNvbnRlbnQgPSB0b2tlbi5nZXRDb250ZW50KCk7XG4gICAgICBcbiAgICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7XG5cbiAgICAgIGNsb25lZE5vblNpZ25pZmljYW50VG9rZW4gPSBDbGFzcy5mcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSwgQ2xhc3MpO1xuICAgIH1cblxuICAgIHJldHVybiBjbG9uZWROb25TaWduaWZpY2FudFRva2VuO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbU5vblNpZ25pZmljYW50VG9rZW4obm9uU2lnbmlmaWNhbnRUb2tlbiwgQ2xhc3MgPSBOb25TaWduaWZpY2FudFRva2VuKSB7XG4gICAgY29uc3QgY29udGVudCA9IG5vblNpZ25pZmljYW50VG9rZW4uZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGxpbmUgPSBub25TaWduaWZpY2FudFRva2VuLmdldExpbmUoKTtcbiAgICBcbiAgICBub25TaWduaWZpY2FudFRva2VuID0gQ2xhc3MuZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIENsYXNzKTtcbiAgICBcbiAgICByZXR1cm4gbm9uU2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSwgQ2xhc3MgPSBOb25TaWduaWZpY2FudFRva2VuKSB7XG4gICAgY29uc3QgaHRtbCA9IENsYXNzLmh0bWxGcm9tQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICB0b2tlbiA9IG5ldyBDbGFzcyhjb250ZW50LCBsaW5lLCBodG1sKTtcblxuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBodG1sRnJvbUNvbnRlbnQoY29udGVudCkge1xuICAgIGNvbnN0IHNhbml0aXNlZENvbnRlbnQgPSB1dGlsLnNhbml0aXNlQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICBodG1sID0gc2FuaXRpc2VkQ29udGVudDtcblxuICAgIHJldHVybiBodG1sO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9uU2lnbmlmaWNhbnRUb2tlbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdXRpbCA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWwnKSxcbiAgICAgIE5vblNpZ25pZmljYW50VG9rZW4gPSByZXF1aXJlKCcuLi9ub25TaWduaWZpY2FudCcpO1xuXG5jbGFzcyBDb21tZW50VG9rZW4gZXh0ZW5kcyBOb25TaWduaWZpY2FudFRva2VuIHtcbiAgbWVyZ2UoY29tbWVudFRva2VuKSB7XG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKTtcbiAgICBcbiAgICBjb25zdCBsaW5lID0gdGhpcy5nZXRMaW5lKCksXG4gICAgICAgICAgY29tbWVudFRva2VuQ29udGVudCA9IGNvbW1lbnRUb2tlbi5nZXRDb250ZW50KCk7XG5cbiAgICBjb250ZW50ICs9IGNvbW1lbnRUb2tlbkNvbnRlbnQ7XG5cbiAgICBjb21tZW50VG9rZW4gPSBDb21tZW50VG9rZW4uZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpOyAgLy8vXG5cbiAgICByZXR1cm4gY29tbWVudFRva2VuO1xuICB9XG5cbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIENvbW1lbnRUb2tlbi5jbG9uZSh0aGlzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgQ29tbWVudFRva2VuKTsgfVxuXG4gIHN0YXRpYyBjbG9uZSh0b2tlbiwgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24sIENsYXNzID0gQ29tbWVudFRva2VuKSB7IHJldHVybiBOb25TaWduaWZpY2FudFRva2VuLmNsb25lKHRva2VuLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgQ2xhc3MpIH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIENsYXNzID0gQ29tbWVudFRva2VuKSB7IHJldHVybiBOb25TaWduaWZpY2FudFRva2VuLmZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBDbGFzcyk7IH1cblxuICBzdGF0aWMgaHRtbEZyb21Db250ZW50KGNvbnRlbnQpIHtcbiAgICBjb25zdCBzYW5pdGlzZWRDb250ZW50ID0gdXRpbC5zYW5pdGlzZUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgaW5uZXJIVE1MID0gc2FuaXRpc2VkQ29udGVudCwgLy8vXG4gICAgICAgICAgaHRtbCA9IGA8c3BhbiBjbGFzcz1cImNvbW1lbnRcIj4ke2lubmVySFRNTH08L3NwYW4+YDtcblxuICAgIHJldHVybiBodG1sO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tbWVudFRva2VuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB1dGlsID0gcmVxdWlyZSgnLi4vLi4vdXRpbCcpO1xuXG5jbGFzcyBTaWduaWZpY2FudFRva2VuIHtcbiAgY29uc3RydWN0b3IoY29udGVudCwgbGluZSwgdHlwZSwgaW5uZXJIVE1MKSB7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG5cbiAgICB0aGlzLmVycm9yID0gdW5kZWZpbmVkOyAvLy9cbiAgfVxuICBcbiAgZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG4gIFxuICBnZXRMaW5lKCkge1xuICAgIHJldHVybiB0aGlzLmxpbmU7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRJbm5lckhUTUwoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5uZXJIVE1MO1xuICB9XG5cbiAgZ2V0RXJyb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXJyb3I7XG4gIH1cblxuICBnZXRIVE1MKCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9ICh0aGlzLmVycm9yID09PSB0cnVlKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAnZXJyb3InIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50eXBlLFxuICAgICAgICAgIGh0bWwgPSBgPHNwYW4gY2xhc3M9XCIke2NsYXNzTmFtZX1cIj4ke3RoaXMuaW5uZXJIVE1MfTwvc3Bhbj5gO1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudC5sZW5ndGg7IC8vL1xuICB9XG5cbiAgc2V0RXJyb3IoZXJyb3IpIHtcbiAgICB0aGlzLmVycm9yID0gZXJyb3I7XG4gIH1cblxuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5jbG9uZSh0aGlzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgU2lnbmlmaWNhbnRUb2tlbikgfVxuXG4gIHN0YXRpYyBjbG9uZSh0b2tlbiwgc3RhcnRQb3NpdGlvbiA9IDAsIGVuZFBvc2l0aW9uID0gdG9rZW4uZ2V0TGVuZ3RoKCksIENsYXNzID0gU2lnbmlmaWNhbnRUb2tlbikge1xuICAgIGxldCBjbG9uZWRTaWduaWZpY2FudFRva2VuID0gbnVsbDtcblxuICAgIGlmIChzdGFydFBvc2l0aW9uICE9PSBlbmRQb3NpdGlvbikge1xuICAgICAgbGV0IGNvbnRlbnQgPSB0b2tlbi5nZXRDb250ZW50KCk7XG5cbiAgICAgIGNvbnN0IGxpbmUgPSB0b2tlbi5nZXRMaW5lKCksXG4gICAgICAgICAgICB0eXBlID0gdG9rZW4uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgZXJyb3IgPSB0b2tlbi5nZXRFcnJvcigpO1xuXG4gICAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pO1xuXG4gICAgICBjbG9uZWRTaWduaWZpY2FudFRva2VuID0gQ2xhc3MuZnJvbUNvbnRlbnRMaW5lQW5kVHlwZShjb250ZW50LCBsaW5lLCB0eXBlKTtcblxuICAgICAgY2xvbmVkU2lnbmlmaWNhbnRUb2tlbi5zZXRFcnJvcihlcnJvcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsb25lZFNpZ25pZmljYW50VG9rZW47XG4gIH1cblxuICBzdGF0aWMgZnJvbVNpZ25pZmljYW50VG9rZW4oc2lnbmlmaWNhbnRUb2tlbiwgQ2xhc3MgPSBTaWduaWZpY2FudFRva2VuKSB7XG4gICAgY29uc3QgY29udGVudCA9IHNpZ25pZmljYW50VG9rZW4uZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGxpbmUgPSBzaWduaWZpY2FudFRva2VuLmdldExpbmUoKSxcbiAgICAgICAgICB0eXBlID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRUeXBlKCk7XG4gICAgXG4gICAgc2lnbmlmaWNhbnRUb2tlbiA9IENsYXNzLmZyb21Db250ZW50TGluZUFuZFR5cGUoY29udGVudCwgbGluZSwgdHlwZSk7XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudExpbmVBbmRUeXBlKGNvbnRlbnQsIGxpbmUsIHR5cGUsIENsYXNzID0gU2lnbmlmaWNhbnRUb2tlbikge1xuICAgIGNvbnN0IGlubmVySFRNTCA9IENsYXNzLmlubmVySFRNTEZyb21Db250ZW50KGNvbnRlbnQpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSBuZXcgQ2xhc3MoY29udGVudCwgbGluZSwgdHlwZSwgaW5uZXJIVE1MKTtcblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgc3RhdGljIGlubmVySFRNTEZyb21Db250ZW50KGNvbnRlbnQpIHtcbiAgICBjb25zdCBzYW5pdGlzZWRDb250ZW50ID0gdXRpbC5zYW5pdGlzZUNvbnRlbnQoY29udGVudCksXG4gICAgICAgICAgaW5uZXJIVE1MID0gc2FuaXRpc2VkQ29udGVudDsgLy8vXG5cbiAgICByZXR1cm4gaW5uZXJIVE1MO1xuICB9XG59XG5cblNpZ25pZmljYW50VG9rZW4udHlwZXMgPSB7XG4gIHN0cmluZzogJ3N0cmluZycsXG4gIGVuZE9mTGluZTogJ2VuZE9mTGluZScsXG4gIHdoaXRlc3BhY2U6ICd3aGl0ZXNwYWNlJ1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaWduaWZpY2FudFRva2VuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBTaWduaWZpY2FudFRva2VuID0gcmVxdWlyZSgnLi4vc2lnbmlmaWNhbnQnKTtcblxuY2xhc3MgRW5kT2ZMaW5lVG9rZW4gZXh0ZW5kcyBTaWduaWZpY2FudFRva2VuIHtcbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIFNpZ25pZmljYW50VG9rZW4uY2xvbmUodGhpcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24sIEVuZE9mTGluZVRva2VuKTsgfVxuICBcbiAgc3RhdGljIGZyb21Db250ZW50TGluZUFuZFR5cGUoY29udGVudCwgbGluZSwgdHlwZSkgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5mcm9tQ29udGVudExpbmVBbmRUeXBlKGNvbnRlbnQsIGxpbmUsIHR5cGUsIEVuZE9mTGluZVRva2VuKTsgfVxuICBcbiAgZ2V0SFRNTCgpIHtcbiAgICBjb25zdCBodG1sID0gJyc7XG4gICAgXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxpbmUobGluZSkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSAnJyxcbiAgICAgICAgICB0eXBlID0gU2lnbmlmaWNhbnRUb2tlbi50eXBlcy5lbmRPZkxpbmUsXG4gICAgICAgICAgZW5kT2ZMaW5lVG9rZW4gPSBFbmRPZkxpbmVUb2tlbi5mcm9tQ29udGVudExpbmVBbmRUeXBlKGNvbnRlbnQsIGxpbmUsIHR5cGUpO1xuICAgIFxuICAgIHJldHVybiBlbmRPZkxpbmVUb2tlbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVuZE9mTGluZVRva2VuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBTaWduaWZpY2FudFRva2VuID0gcmVxdWlyZSgnLi4vc2lnbmlmaWNhbnQnKTtcblxuY2xhc3MgU3RyaW5nVG9rZW4gZXh0ZW5kcyBTaWduaWZpY2FudFRva2VuIHtcbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIFNpZ25pZmljYW50VG9rZW4uY2xvbmUodGhpcywgc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24sIFN0cmluZ1Rva2VuKTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudExpbmVBbmRUeXBlKGNvbnRlbnQsIGxpbmUsIHR5cGUpIHsgcmV0dXJuIFNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnRMaW5lQW5kVHlwZShjb250ZW50LCBsaW5lLCB0eXBlLCBTdHJpbmdUb2tlbik7IH1cblxuICBzdGF0aWMgZnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpIHtcbiAgICBsZXQgc3RyaW5nVG9rZW4gPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKC8oXCJbXlwiXSpcIikvKTtcblxuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICBjb25zdCBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyk7XG4gICAgICBcbiAgICAgIGNvbnRlbnQgPSBmaXJzdE1hdGNoOyAvLy9cbiAgICAgIFxuICAgICAgY29uc3QgdHlwZSA9IFNpZ25pZmljYW50VG9rZW4udHlwZXMuc3RyaW5nO1xuXG4gICAgICBzdHJpbmdUb2tlbiA9IFN0cmluZ1Rva2VuLmZyb21Db250ZW50TGluZUFuZFR5cGUoY29udGVudCwgbGluZSwgdHlwZSk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBzdHJpbmdUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBwb3NpdGlvbldpdGhpbkNvbnRlbnQoY29udGVudCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gY29udGVudC5zZWFyY2goL1wiW15cIl0qXCIvKTtcblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFN0cmluZ1Rva2VuO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgU2lnbmlmaWNhbnRUb2tlbiA9IHJlcXVpcmUoJy4uL3NpZ25pZmljYW50Jyk7XG5cbmNsYXNzIFdoaXRlc3BhY2VUb2tlbiBleHRlbmRzIFNpZ25pZmljYW50VG9rZW4ge1xuICBjbG9uZShzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gU2lnbmlmaWNhbnRUb2tlbi5jbG9uZSh0aGlzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgV2hpdGVzcGFjZVRva2VuKTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudExpbmVBbmRUeXBlKGNvbnRlbnQsIGxpbmUsIHR5cGUpIHsgcmV0dXJuIFNpZ25pZmljYW50VG9rZW4uZnJvbUNvbnRlbnRMaW5lQW5kVHlwZShjb250ZW50LCBsaW5lLCB0eXBlLCBXaGl0ZXNwYWNlVG9rZW4pOyB9XG5cbiAgc3RhdGljIGZyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lKSB7XG4gICAgbGV0IHdoaXRlc3BhY2VUb2tlbiA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2goLyhbXFx0IF0rKS8pO1xuXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKTtcbiAgICAgIFxuICAgICAgY29udGVudCA9IGZpcnN0TWF0Y2g7IC8vL1xuICAgICAgXG4gICAgICBjb25zdCB0eXBlID0gU2lnbmlmaWNhbnRUb2tlbi50eXBlcy53aGl0ZXNwYWNlO1xuXG4gICAgICB3aGl0ZXNwYWNlVG9rZW4gPSBXaGl0ZXNwYWNlVG9rZW4uZnJvbUNvbnRlbnRMaW5lQW5kVHlwZShjb250ZW50LCBsaW5lLCB0eXBlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd2hpdGVzcGFjZVRva2VuO1xuICB9XG5cbiAgc3RhdGljIHBvc2l0aW9uV2l0aGluQ29udGVudChjb250ZW50KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBjb250ZW50LnNlYXJjaCgvW1xcdCBdKy8pO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gV2hpdGVzcGFjZVRva2VuO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IHV0aWwgPSByZXF1aXJlKCcuLi91dGlsJyk7XHJcblxyXG5jbGFzcyBUb2tlbnMge1xyXG4gIHN0YXRpYyBwYXNzKHRva2Vuc09yQ29udGVudHMsIGxpbmUsIFRva2VuKSB7XHJcbiAgICBsZXQgb2Zmc2V0ID0gMDtcclxuICAgIFxyXG4gICAgY29uc3QgdG9rZW5zT3JDb250ZW50c0xlbmd0aCA9IHRva2Vuc09yQ29udGVudHMubGVuZ3RoO1xyXG5cclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0b2tlbnNPckNvbnRlbnRzTGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgIGNvbnN0IG9mZnNldEluZGV4ID0gaW5kZXggKyBvZmZzZXQsXHJcbiAgICAgICAgICB0b2tlbk9yQ29udGVudCA9IHRva2Vuc09yQ29udGVudHNbb2Zmc2V0SW5kZXhdO1xyXG5cclxuICAgICAgaWYgKHR5cGVvZiB0b2tlbk9yQ29udGVudCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gdG9rZW5PckNvbnRlbnQsICAvLy9cclxuICAgICAgICAgICAgdG9rZW5zT3JSZW1haW5pbmdDb250ZW50ID0gdG9rZW5zT3JSZW1haW5pbmdDb250ZW50RnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIFRva2VuKSxcclxuICAgICAgICAgICAgdG9rZW5zT3JSZW1haW5pbmdDb250ZW50TGVuZ3RoID0gdG9rZW5zT3JSZW1haW5pbmdDb250ZW50Lmxlbmd0aCxcclxuICAgICAgICAgICAgc3RhcnQgPSBvZmZzZXRJbmRleDtcclxuXHJcbiAgICAgICAgdXRpbC5zcGxpY2VBcnJheSh0b2tlbnNPckNvbnRlbnRzLCBzdGFydCwgMSwgdG9rZW5zT3JSZW1haW5pbmdDb250ZW50KTtcclxuXHJcbiAgICAgICAgb2Zmc2V0ICs9IHRva2Vuc09yUmVtYWluaW5nQ29udGVudExlbmd0aCAtIDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVG9rZW5zO1xyXG5cclxuZnVuY3Rpb24gdG9rZW5zT3JSZW1haW5pbmdDb250ZW50RnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIFRva2VuKSB7XHJcbiAgbGV0IHJlbWFpbmluZ0NvbnRlbnQsXHJcbiAgICAgIHRva2Vuc09yUmVtYWluaW5nQ29udGVudCA9IFtdLCAgICAgICBcclxuICAgICAgdG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQgPSBUb2tlbi5wb3NpdGlvbldpdGhpbkNvbnRlbnQoY29udGVudCk7XHJcbiAgXHJcbiAgd2hpbGUgKHRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ICE9PSAtMSkge1xyXG4gICAgaWYgKHRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ID4gMCkge1xyXG4gICAgICByZW1haW5pbmdDb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoMCwgdG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQpO1xyXG5cclxuICAgICAgdG9rZW5zT3JSZW1haW5pbmdDb250ZW50LnB1c2gocmVtYWluaW5nQ29udGVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG9rZW4gPSBUb2tlbi5mcm9tV2l0aGluQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSksXHJcbiAgICAgICAgICB0b2tlbkxlbmd0aCA9IHRva2VuLmdldExlbmd0aCgpLFxyXG4gICAgICAgICAgdG9rZW5PZmZzZXQgPSB0b2tlblBvc2l0aW9uV2l0aGluQ29udGVudCArIHRva2VuTGVuZ3RoO1xyXG4gICAgXHJcbiAgICB0b2tlbnNPclJlbWFpbmluZ0NvbnRlbnQucHVzaCh0b2tlbik7XHJcbiAgICBcclxuICAgIGNvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyh0b2tlbk9mZnNldCk7XHJcblxyXG4gICAgdG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQgPSBUb2tlbi5wb3NpdGlvbldpdGhpbkNvbnRlbnQoY29udGVudCk7XHJcbiAgfVxyXG4gIFxyXG4gIGlmIChjb250ZW50ICE9PSAnJykge1xyXG4gICAgcmVtYWluaW5nQ29udGVudCA9IGNvbnRlbnQ7XHJcblxyXG4gICAgdG9rZW5zT3JSZW1haW5pbmdDb250ZW50LnB1c2gocmVtYWluaW5nQ29udGVudCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdG9rZW5zT3JSZW1haW5pbmdDb250ZW50O1xyXG59XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IFRva2VucyA9IHJlcXVpcmUoJy4vdG9rZW5zJyksXHJcbiAgICAgIFdoaXRlc3BhY2VUb2tlbiA9IHJlcXVpcmUoJy4vdG9rZW4vc2lnbmlmaWNhbnQvd2hpdGVzcGFjZScpO1xyXG5cclxuY2xhc3MgV2hpdGVzcGFjZVRva2VucyB7XHJcbiAgc3RhdGljIHBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSkgeyByZXR1cm4gVG9rZW5zLnBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSwgV2hpdGVzcGFjZVRva2VuKTsgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFdoaXRlc3BhY2VUb2tlbnM7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IHV0aWwgPSByZXF1aXJlKCcuLi91dGlsJyksXHJcbiAgICAgIEVuZE9mQ29tbWVudFRva2VuID0gcmVxdWlyZSgnLi90b2tlbi9lbmRPZkNvbW1lbnQnKSxcclxuICAgICAgU3RhcnRPZkNvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4vdG9rZW4vc3RhcnRPZkNvbW1lbnQnKSxcclxuICAgICAgTWlkZGxlT2ZDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuL3Rva2VuL21pZGRsZU9mQ29tbWVudCcpO1xyXG5cclxuY2xhc3MgQ29tbWVudFRva2VucyB7XHJcbiAgc3RhdGljIHBhc3ModG9rZW5zT3JDb250ZW50cywgbGluZSwgY29udGV4dCkge1xyXG4gICAgbGV0IGNvbnRlbnQgPSB0b2tlbnNPckNvbnRlbnRzLnBvcCgpLFxyXG4gICAgICAgIGNvbW1lbnRUb2tlbixcclxuICAgICAgICBjb21tZW50VG9rZW5MZW5ndGgsXHJcbiAgICAgICAgcHJldmlvdXNMaW5lSW5Db21tZW50ID0gY29udGV4dC5pc1ByZXZpb3VzTGluZUluQ29tbWVudCgpLFxyXG4gICAgICAgIGluQ29tbWVudCA9IChwcmV2aW91c0xpbmVJbkNvbW1lbnQgPT09IHRydWUpO1xyXG5cclxuICAgIHdoaWxlIChjb250ZW50ICE9PSAnJykge1xyXG4gICAgICBsZXQgY29udGVudExlbmd0aCA9IGNvbnRlbnQubGVuZ3RoO1xyXG5cclxuICAgICAgaWYgKGluQ29tbWVudCkge1xyXG4gICAgICAgIGNvbnN0IGVuZE9mQ29tbWVudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ID0gRW5kT2ZDb21tZW50VG9rZW4ucG9zaXRpb25XaXRoaW5Db250ZW50KGNvbnRlbnQpO1xyXG5cclxuICAgICAgICBpZiAoZW5kT2ZDb21tZW50VG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQgPT09IDApIHtcclxuICAgICAgICAgIGluQ29tbWVudCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgIGNvbW1lbnRUb2tlbiA9IEVuZE9mQ29tbWVudFRva2VuLmZyb21XaXRoaW5Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lKTtcclxuXHJcbiAgICAgICAgICBjb21tZW50VG9rZW5MZW5ndGggPSBjb21tZW50VG9rZW4uZ2V0TGVuZ3RoKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IG1pZGRsZU9mQ29tbWVudFRva2VuTGVuZ3RoID0gdXRpbC5taW5pbXVtQmFyTWludXNPbmUoZW5kT2ZDb21tZW50VG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQsIGNvbnRlbnRMZW5ndGgpO1xyXG5cclxuICAgICAgICAgIGNvbW1lbnRUb2tlbiA9IE1pZGRsZU9mQ29tbWVudFRva2VuLmZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBtaWRkbGVPZkNvbW1lbnRUb2tlbkxlbmd0aCk7XHJcblxyXG4gICAgICAgICAgY29tbWVudFRva2VuTGVuZ3RoID0gbWlkZGxlT2ZDb21tZW50VG9rZW5MZW5ndGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwcmV2aW91c0NvbW1lbnRUb2tlbiA9IHRva2Vuc09yQ29udGVudHMucG9wKCk7XHJcblxyXG4gICAgICAgIGNvbW1lbnRUb2tlbiA9IChwcmV2aW91c0NvbW1lbnRUb2tlbiA9PT0gdW5kZWZpbmVkKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudFRva2VuIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzQ29tbWVudFRva2VuLm1lcmdlKGNvbW1lbnRUb2tlbik7XHJcblxyXG4gICAgICAgIHRva2Vuc09yQ29udGVudHMucHVzaChjb21tZW50VG9rZW4pO1xyXG5cclxuICAgICAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoY29tbWVudFRva2VuTGVuZ3RoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBzdGFydE9mQ29tbWVudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ID0gU3RhcnRPZkNvbW1lbnRUb2tlbi5wb3NpdGlvbldpdGhpbkNvbnRlbnQoY29udGVudCk7XHJcblxyXG4gICAgICAgIGlmIChzdGFydE9mQ29tbWVudFRva2VuUG9zaXRpb25XaXRoaW5Db250ZW50ID09PSAwKSB7XHJcbiAgICAgICAgICBpbkNvbW1lbnQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgIGNvbW1lbnRUb2tlbiA9IFN0YXJ0T2ZDb21tZW50VG9rZW4uZnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpO1xyXG5cclxuICAgICAgICAgIGNvbW1lbnRUb2tlbkxlbmd0aCA9IGNvbW1lbnRUb2tlbi5nZXRMZW5ndGgoKTtcclxuXHJcbiAgICAgICAgICB0b2tlbnNPckNvbnRlbnRzLnB1c2goY29tbWVudFRva2VuKTtcclxuXHJcbiAgICAgICAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoY29tbWVudFRva2VuTGVuZ3RoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29udGVudExlbmd0aCA9IHV0aWwubWluaW11bUJhck1pbnVzT25lKHN0YXJ0T2ZDb21tZW50VG9rZW5Qb3NpdGlvbldpdGhpbkNvbnRlbnQsIGNvbnRlbnRMZW5ndGgpO1xyXG5cclxuICAgICAgICAgIGNvbnN0IHJlbWFpbmluZ0NvbnRlbnQgPSBjb250ZW50LnN1YnN0cmluZyhjb250ZW50TGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoMCwgY29udGVudExlbmd0aCk7XHJcblxyXG4gICAgICAgICAgdG9rZW5zT3JDb250ZW50cy5wdXNoKGNvbnRlbnQpO1xyXG5cclxuICAgICAgICAgIGNvbnRlbnQgPSByZW1haW5pbmdDb250ZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByZXZpb3VzTGluZUluQ29tbWVudCA9IGluQ29tbWVudDsgIC8vL1xyXG5cclxuICAgIGNvbnRleHQuc2V0UHJldmlvdXNMaW5lSW5Db21tZW50KHByZXZpb3VzTGluZUluQ29tbWVudCk7XHJcblxyXG4gICAgcmV0dXJuIGluQ29tbWVudDtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ29tbWVudFRva2VucztcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgYmFzaWNfbGF0aW4gPSBgXFxcXHV7MjF9LVxcXFx1ezdFfWAsXHJcbiAgICAgIGxhdGluMV9zdXBwbGVtZW50ID0gYFxcXFx1e0ExfS1cXFxcdXtGRn1gLFxyXG4gICAgICBtYXRoZW1hdGljYWxfb3BlcmF0b3JzID0gYFxcXFx1ezIyMDB9LVxcXFx1ezIyRkZ9YCxcclxuICAgICAgc3VwcGxlbWVudGFsX21hdGhlbWF0aWNhbF9vcGVyYXRvcnMgPSBgXFxcXHV7MkEwMH0tXFxcXHV7MkFGRn1gLFxyXG4gICAgICBtaXNjZWxsYW5lb3VzX3RlY2huaWNhbCA9IGBcXFxcdXsyMzAwfS1cXFxcdXsyM2ZmfWAsXHJcbiAgICAgIG1hdGhlbWF0aWNhbF9hbHBoYW51bWVyaWNfc3ltYm9scyA9IGBcXFxcdXsxRDQwMH0tXFxcXHV7MUQ3RkZ9YCxcclxuICAgICAgdW5pY29kZV9jaGFyYWN0ZXIgPVxyXG5cclxuYFxyXG4ke2Jhc2ljX2xhdGlufVxyXG4ke2xhdGluMV9zdXBwbGVtZW50fVxyXG4ke21hdGhlbWF0aWNhbF9vcGVyYXRvcnN9XHJcbiR7c3VwcGxlbWVudGFsX21hdGhlbWF0aWNhbF9vcGVyYXRvcnN9XHJcbiR7bWlzY2VsbGFuZW91c190ZWNobmljYWx9XHJcbiR7bWF0aGVtYXRpY2FsX2FscGhhbnVtZXJpY19zeW1ib2xzfVxyXG5gLFxyXG5cclxuICAgIHVuaWNvZGVfY2hhcmFjdGVycyA9IGBbJHt1bmljb2RlX2NoYXJhY3Rlcn1dK2AsXHJcbiAgICB1bmFzc2lnbmVkID0gdW5pY29kZV9jaGFyYWN0ZXJzOyAgLy8vXHJcblxyXG5jb25zdCBncmFtbWFyID0gW1xyXG4gIFxyXG4gIHsgc3BlY2lhbCAgICA6IC8sfDt8XFx7fFxcfXw9fDp8XFwofFxcKXxcXC5cXC5cXC58XFwuXFwuLyB9LFxyXG4gIFxyXG4gIHsgaW5jbHVkZSAgICA6IC9eaW5jbHVkZSQvIH0sXHJcbiAgXHJcbiAgeyBrZXl3b3JkICAgIDogL14oPzpSdWxlfEF4aW9tfFRoZW9yZW18TGVtbWF8UHJlbWlzZXN8UHJlbWlzZXxDb25jbHVzaW9ufFByb29mfFRoZXJlZm9yZXxTdXBwb3NlfFRoZW58SGVuY2V8VmFyaWFibGVzfFZhcmlhYmxlfENvbnN0cnVjdG9yc3xDb25zdHJ1Y3RvcnxUeXBlfE9iamVjdHxEZWZpbml0aW9ufGZyb218Ynl8bGV0fGlzfG5vdHxpbnxmcmVlfGRlZmluZWR8dW5kZWZpbmVkKSQvIH0sXHJcbiAgXHJcbiAgeyB1bmFzc2lnbmVkIDogbmV3IFJlZ0V4cChgXiR7dW5hc3NpZ25lZH0kYCwgJ3UnKSB9XHJcbiAgICBcclxuXTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZ3JhbW1hcjtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgTGluZSA9IHJlcXVpcmUoJy4vbGluZScpLFxyXG4gICAgICBncmFtbWFyID0gcmVxdWlyZSgnLi9ncmFtbWFyJyksXHJcbiAgICAgIENvbnRleHQgPSByZXF1aXJlKCcuLi9jb21tb24vY29udGV4dCcpLFxyXG4gICAgICBDb21tb25MZXhlciA9IHJlcXVpcmUoJy4uL2NvbW1vbi9sZXhlcicpO1xyXG5cclxuY2xhc3MgRmxvcmVuY2VMZXhlciBleHRlbmRzIENvbW1vbkxleGVyIHtcclxuICBsaW5lc0Zyb21Db250ZW50cyhjb250ZW50cywgZmlyc3RMaW5lSW5kZXgsIG1pbmltdW1MaW5lc0xlbmd0aCwgcHJldmlvdXNMaW5lSW5Db21tZW50LCBmb2xsb3dpbmdMaW5lSW5Db21tZW50KSB7XHJcbiAgICBjb25zdCBjb250ZXh0ID0gbmV3IENvbnRleHQobWluaW11bUxpbmVzTGVuZ3RoLCBwcmV2aW91c0xpbmVJbkNvbW1lbnQsIGZvbGxvd2luZ0xpbmVJbkNvbW1lbnQpLFxyXG4gICAgICAgICAgbGluZXMgPSBzdXBlci5saW5lc0Zyb21Db250ZW50cyhjb250ZW50cywgZmlyc3RMaW5lSW5kZXgsIGNvbnRleHQpO1xyXG5cclxuICAgIHJldHVybiBsaW5lcztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRTaWduaWZpY2FudFRva2VuVHlwZXMoKSB7XHJcbiAgICBjb25zdCBzaWduaWZpY2FudFRva2VuVHlwZXMgPSBDb21tb25MZXhlci5zaWduaWZpY2FudFRva2VuVHlwZXNGcm9tR3JhbW1hcihncmFtbWFyKTtcclxuXHJcbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlblR5cGVzO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xyXG4gICAgY29uc3QgcnVsZXMgPSBDb21tb25MZXhlci5ydWxlc0Zyb21HcmFtbWFyKGdyYW1tYXIpLFxyXG4gICAgICAgICAgZmxvcmVuY2VMZXhlciA9IG5ldyBGbG9yZW5jZUxleGVyKHJ1bGVzLCBMaW5lKTtcclxuXHJcbiAgICByZXR1cm4gZmxvcmVuY2VMZXhlcjtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VMZXhlcjtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgQ29tbWVudFRva2VucyA9IHJlcXVpcmUoJy4vY29tbWVudFRva2VucycpLFxyXG4gICAgICBDb21tb25MaW5lID0gcmVxdWlyZSgnLi4vY29tbW9uL2xpbmUnKSxcclxuICAgICAgU3RyaW5nVG9rZW5zID0gcmVxdWlyZSgnLi4vY29tbW9uL3N0cmluZ1Rva2VucycpLFxyXG4gICAgICBXaGl0ZXNwYWNlVG9rZW5zID0gcmVxdWlyZSgnLi4vY29tbW9uL3doaXRlc3BhY2VUb2tlbnMnKSxcclxuICAgICAgRW5kT2ZMaW5lVG9rZW4gPSByZXF1aXJlKCcuLi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQvZW5kT2ZMaW5lJyk7XHJcblxyXG5jbGFzcyBMaW5lIGV4dGVuZHMgQ29tbW9uTGluZSB7XHJcbiAgc3RhdGljIGZyb21Db250ZW50KGNvbnRlbnQsIGNvbnRleHQsIHJ1bGVzKSB7XHJcbiAgICBjb25zdCBsaW5lID0gc3VwZXIuZnJvbUNvbnRlbnQoTGluZSwgY29udGVudCwgY29udGV4dCwgcnVsZXMsIENvbW1lbnRUb2tlbnMsIFN0cmluZ1Rva2VucywgV2hpdGVzcGFjZVRva2VucyksXHJcbiAgICAgICAgICBsaW5lSW5Db21tZW50ID0gbGluZS5pc0luQ29tbWVudCgpO1xyXG5cclxuICAgIGlmICghbGluZUluQ29tbWVudCkge1xyXG4gICAgICBjb25zdCBlbmRPZkxpbmVUb2tlbiA9IEVuZE9mTGluZVRva2VuLmZyb21MaW5lKGxpbmUpO1xyXG5cclxuICAgICAgbGluZS5wdXNoVG9rZW4oZW5kT2ZMaW5lVG9rZW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBsaW5lO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBMaW5lO1xyXG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50Jyk7XG5cbmNsYXNzIEVuZE9mQ29tbWVudFRva2VuIGV4dGVuZHMgQ29tbWVudFRva2VuIHtcbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIENvbW1lbnRUb2tlbi5jbG9uZSh0aGlzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgRW5kT2ZDb21tZW50VG9rZW4pOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lKSB7IHJldHVybiBDb21tZW50VG9rZW4uZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIEVuZE9mQ29tbWVudFRva2VuKTsgfVxuXG4gIHN0YXRpYyBmcm9tV2l0aGluQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSkge1xuICAgIGxldCBlbmRPZkNvbW1lbnRUb2tlbiA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2goL15cXCpcXC8vKTtcblxuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICBjb25zdCBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyk7XG5cbiAgICAgIGNvbnRlbnQgPSBmaXJzdE1hdGNoOyAvLy9cblxuICAgICAgZW5kT2ZDb21tZW50VG9rZW4gPSBFbmRPZkNvbW1lbnRUb2tlbi5mcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVuZE9mQ29tbWVudFRva2VuO1xuICB9XG5cbiAgc3RhdGljIHBvc2l0aW9uV2l0aGluQ29udGVudChjb250ZW50KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBjb250ZW50LnNlYXJjaCgvXFwqXFwvLyk7XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFbmRPZkNvbW1lbnRUb2tlbjtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENvbW1lbnRUb2tlbiA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi90b2tlbi9ub25TaWduaWZpY2FudC9jb21tZW50Jyk7XG5cbmNsYXNzIE1pZGRsZU9mQ29tbWVudFRva2VuIGV4dGVuZHMgQ29tbWVudFRva2VuIHtcbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIENvbW1lbnRUb2tlbi5jbG9uZSh0aGlzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgTWlkZGxlT2ZDb21tZW50VG9rZW4pOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50QW5kTGluZShjb250ZW50LCBsaW5lLCBsZW5ndGgpIHtcbiAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHIoMCwgbGVuZ3RoKTsgIC8vL1xuXG4gICAgY29uc3QgbWlkZGxlT2ZDb21tZW50VG9rZW4gPSBDb21tZW50VG9rZW4uZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUsIE1pZGRsZU9mQ29tbWVudFRva2VuKTtcblxuICAgIHJldHVybiBtaWRkbGVPZkNvbW1lbnRUb2tlbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1pZGRsZU9mQ29tbWVudFRva2VuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDb21tZW50VG9rZW4gPSByZXF1aXJlKCcuLi8uLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudCcpO1xuXG5jbGFzcyBTdGFydE9mQ29tbWVudFRva2VuIGV4dGVuZHMgQ29tbWVudFRva2VuIHtcbiAgY2xvbmUoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pIHsgcmV0dXJuIENvbW1lbnRUb2tlbi5jbG9uZSh0aGlzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbiwgU3RhcnRPZkNvbW1lbnRUb2tlbik7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpIHsgcmV0dXJuIENvbW1lbnRUb2tlbi5mcm9tQ29udGVudEFuZExpbmUoY29udGVudCwgbGluZSwgU3RhcnRPZkNvbW1lbnRUb2tlbik7IH1cblxuICBzdGF0aWMgZnJvbVdpdGhpbkNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpIHtcbiAgICBsZXQgc3RhcnRPZkNvbW1lbnRUb2tlbiA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2goL15cXC9cXCovKTtcblxuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICBjb25zdCBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyk7XG5cbiAgICAgIGNvbnRlbnQgPSBmaXJzdE1hdGNoOyAvLy9cblxuICAgICAgc3RhcnRPZkNvbW1lbnRUb2tlbiA9IFN0YXJ0T2ZDb21tZW50VG9rZW4uZnJvbUNvbnRlbnRBbmRMaW5lKGNvbnRlbnQsIGxpbmUpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gc3RhcnRPZkNvbW1lbnRUb2tlbjtcbiAgfVxuXG4gIHN0YXRpYyBwb3NpdGlvbldpdGhpbkNvbnRlbnQoY29udGVudCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gY29udGVudC5zZWFyY2goL1xcL1xcKi8pO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU3RhcnRPZkNvbW1lbnRUb2tlbjtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHNwZWNpYWxTeW1ib2xzID0ge1xuICBFTkRfT0ZfTElORSA6ICc8RU5EX09GX0xJTkU+JyxcbiAgTk9fV0hJVEVTUEFDRSA6ICc8Tk9fV0hJVEVTUEFDRT4nICBcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc3BlY2lhbFN5bWJvbHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIHV0aWwge1xuICBzdGF0aWMgbWluaW11bUJhck1pbnVzT25lKCkge1xuICAgIGNvbnN0IHZhbHVlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyksXG4gICAgICAgICAgbWluaW11bUJhck1pbnVzT25lID0gdmFsdWVzLnJlZHVjZShmdW5jdGlvbihtaW5pbXVtQmFyTWludXNPbmUsIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPiAtMSkge1xuICAgICAgICAgICAgICBtaW5pbXVtQmFyTWludXNPbmUgPSAobWluaW11bUJhck1pbnVzT25lICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgubWluKG1pbmltdW1CYXJNaW51c09uZSwgdmFsdWUpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICByZXR1cm4gbWluaW11bUJhck1pbnVzT25lO1xuICAgICAgICAgIH0sIG51bGwpO1xuXG4gICAgcmV0dXJuIG1pbmltdW1CYXJNaW51c09uZTtcbiAgfVxuXG4gIHN0YXRpYyBzcGxpY2VBcnJheShhcnJheSwgc3RhcnQsIGRlbGV0ZUNvdW50LCBpdGVtc0FycmF5KSB7XG4gICAgY29uc3QgYXJncyA9IFtzdGFydCwgZGVsZXRlQ291bnRdLmNvbmNhdChpdGVtc0FycmF5KTtcbiAgXG4gICAgQXJyYXkucHJvdG90eXBlLnNwbGljZS5hcHBseShhcnJheSwgYXJncyk7XG4gIH1cblxuICBzdGF0aWMgaW5kZXhPZihhcnJheSwgZWxlbWVudCkge1xuICAgIGxldCBpbmRleCA9IHVuZGVmaW5lZDsgIC8vL1xuXG4gICAgYXJyYXkuc29tZShmdW5jdGlvbihhcnJheUVsZW1lbnQsIGFycmF5SW5kZXgpIHtcbiAgICAgIGlmIChlbGVtZW50ID09PSBhcnJheUVsZW1lbnQpIHtcbiAgICAgICAgaW5kZXggPSBhcnJheUluZGV4O1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG5cbiAgc3RhdGljIHR5cGVGcm9tR3JhbW1hckVudHJ5KGdyYW1tYXJFbnRyeSkge1xuICAgIGNvbnN0IGdyYW1tYXJFbnRyeUtleXMgPSBPYmplY3Qua2V5cyhncmFtbWFyRW50cnkpLFxuICAgICAgICAgIGZpcnN0R3JhbW1hckVudHJ5S2V5ID0gZmlyc3QoZ3JhbW1hckVudHJ5S2V5cyksXG4gICAgICAgICAgdHlwZSA9IGZpcnN0R3JhbW1hckVudHJ5S2V5OyAgLy8vXG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfTtcblxuICBzdGF0aWMgcmVnRXhwRnJvbUdyYW1tYXJFbnRyeShncmFtbWFyRW50cnkpIHtcbiAgICBjb25zdCB0eXBlID0gdXRpbC50eXBlRnJvbUdyYW1tYXJFbnRyeShncmFtbWFyRW50cnkpLFxuICAgICAgICAgIHJlZ0V4cCA9IGdyYW1tYXJFbnRyeVt0eXBlXTtcblxuICAgIHJldHVybiByZWdFeHA7XG4gIH07XG5cbiAgc3RhdGljIGZpbmRSZWdFeHBGcm9tVHlwZShncmFtbWFyLCB0eXBlKSB7XG4gICAgY29uc3QgZW50cnkgPSBncmFtbWFyLmZpbmQoZnVuY3Rpb24oZW50cnkpIHtcbiAgICAgICAgICAgIGNvbnN0IGdyYW1tYXJUeXBlID0gdXRpbC50eXBlRnJvbUdyYW1tYXJFbnRyeShlbnRyeSksXG4gICAgICAgICAgICAgICAgICBmb3VuZCA9IChncmFtbWFyVHlwZSA9PT0gdHlwZSk7XG4gIFxuICAgICAgICAgICAgcmV0dXJuIGZvdW5kO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHJlZ0V4cCA9IHV0aWwucmVnRXhwRnJvbUdyYW1tYXJFbnRyeShlbnRyeSk7XG5cbiAgICByZXR1cm4gcmVnRXhwO1xuICB9O1xuXG4gIHN0YXRpYyBzYW5pdGlzZUNvbnRlbnQoY29udGVudCkge1xuICAgIGNvbnN0IHNhbml0aXNlZENvbnRlbnQgPSBjb250ZW50LnJlcGxhY2UoLyYvLCcmYW1wOycpLnJlcGxhY2UoLzwvLCAnJmx0OycpLnJlcGxhY2UoLz4vLCAnJmd0OycpO1xuXG4gICAgcmV0dXJuIHNhbml0aXNlZENvbnRlbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB1dGlsO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiJdfQ==
