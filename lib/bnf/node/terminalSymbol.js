"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var arrayUtilities = require("../../utilities/array"),
    NonTerminalNode = require("../../common/node/nonTerminal"),
    TerminalSymbolPart = require("../part/terminal/terminalSymbol");

var first = arrayUtilities.first,
    second = arrayUtilities.second;

var TerminalSymbolNode = /*#__PURE__*/function (_NonTerminalNode) {
  _inherits(TerminalSymbolNode, _NonTerminalNode);

  function TerminalSymbolNode() {
    _classCallCheck(this, TerminalSymbolNode);

    return _possibleConstructorReturn(this, _getPrototypeOf(TerminalSymbolNode).apply(this, arguments));
  }

  _createClass(TerminalSymbolNode, [{
    key: "generatePart",
    value: function generatePart(lookAhead) {
      var content = this.getContent(),
          terminalSymbolPart = new TerminalSymbolPart(content);
      return terminalSymbolPart;
    }
  }, {
    key: "getContent",
    value: function getContent() {
      var childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          terminalNode = firstChildNode,
          ///
      terminalNodeContent = terminalNode.getContent(),
          matches = terminalNodeContent.match(TerminalSymbolNode.regularExpression),
          secondMatch = second(matches),
          content = secondMatch.replace(/\\"/g, ""); ///

      return content;
    }
  }], [{
    key: "fromRuleNameAndChildNodes",
    value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
      return NonTerminalNode.fromRuleNameAndChildNodes(TerminalSymbolNode, ruleName, childNodes);
    }
  }]);

  return TerminalSymbolNode;
}(NonTerminalNode);

module.exports = TerminalSymbolNode;
TerminalSymbolNode.regularExpression = /^"((?:\\.|[^"])*)"$/;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlcm1pbmFsU3ltYm9sLmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbGl0aWVzIiwicmVxdWlyZSIsIk5vblRlcm1pbmFsTm9kZSIsIlRlcm1pbmFsU3ltYm9sUGFydCIsImZpcnN0Iiwic2Vjb25kIiwiVGVybWluYWxTeW1ib2xOb2RlIiwibG9va0FoZWFkIiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0ZXJtaW5hbFN5bWJvbFBhcnQiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImZpcnN0Q2hpbGROb2RlIiwidGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlQ29udGVudCIsIm1hdGNoZXMiLCJtYXRjaCIsInJlZ3VsYXJFeHByZXNzaW9uIiwic2Vjb25kTWF0Y2giLCJyZXBsYWNlIiwicnVsZU5hbWUiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsY0FBYyxHQUFHQyxPQUFPLENBQUMsdUJBQUQsQ0FBOUI7QUFBQSxJQUNNQyxlQUFlLEdBQUdELE9BQU8sQ0FBQywrQkFBRCxDQUQvQjtBQUFBLElBRU1FLGtCQUFrQixHQUFHRixPQUFPLENBQUMsaUNBQUQsQ0FGbEM7O0lBSVFHLEssR0FBa0JKLGMsQ0FBbEJJLEs7SUFBT0MsTSxHQUFXTCxjLENBQVhLLE07O0lBRVRDLGtCOzs7Ozs7Ozs7OztpQ0FDU0MsUyxFQUFXO0FBQ3RCLFVBQU1DLE9BQU8sR0FBRyxLQUFLQyxVQUFMLEVBQWhCO0FBQUEsVUFDTUMsa0JBQWtCLEdBQUcsSUFBSVAsa0JBQUosQ0FBdUJLLE9BQXZCLENBRDNCO0FBR0EsYUFBT0Usa0JBQVA7QUFDRDs7O2lDQUVZO0FBQ1gsVUFBTUMsVUFBVSxHQUFHLEtBQUtDLGFBQUwsRUFBbkI7QUFBQSxVQUNNQyxjQUFjLEdBQUdULEtBQUssQ0FBQ08sVUFBRCxDQUQ1QjtBQUFBLFVBRU1HLFlBQVksR0FBR0QsY0FGckI7QUFBQSxVQUVzQztBQUNoQ0UsTUFBQUEsbUJBQW1CLEdBQUdELFlBQVksQ0FBQ0wsVUFBYixFQUg1QjtBQUFBLFVBSU1PLE9BQU8sR0FBR0QsbUJBQW1CLENBQUNFLEtBQXBCLENBQTBCWCxrQkFBa0IsQ0FBQ1ksaUJBQTdDLENBSmhCO0FBQUEsVUFLTUMsV0FBVyxHQUFHZCxNQUFNLENBQUNXLE9BQUQsQ0FMMUI7QUFBQSxVQU1NUixPQUFPLEdBQUdXLFdBQVcsQ0FBQ0MsT0FBWixDQUFvQixNQUFwQixFQUEyQixFQUEzQixDQU5oQixDQURXLENBT3FDOztBQUVoRCxhQUFPWixPQUFQO0FBQ0Q7Ozs4Q0FFZ0NhLFEsRUFBVVYsVSxFQUFZO0FBQUUsYUFBT1QsZUFBZSxDQUFDb0IseUJBQWhCLENBQTBDaEIsa0JBQTFDLEVBQThEZSxRQUE5RCxFQUF3RVYsVUFBeEUsQ0FBUDtBQUE2Rjs7OztFQXBCdkhULGU7O0FBdUJqQ3FCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmxCLGtCQUFqQjtBQUVBQSxrQkFBa0IsQ0FBQ1ksaUJBQW5CLEdBQXVDLHFCQUF2QyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIiksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKFwiLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWxcIiksXG4gICAgICBUZXJtaW5hbFN5bWJvbFBhcnQgPSByZXF1aXJlKFwiLi4vcGFydC90ZXJtaW5hbC90ZXJtaW5hbFN5bWJvbFwiKTtcblxuY29uc3QgeyBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgVGVybWluYWxTeW1ib2xOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVQYXJ0KGxvb2tBaGVhZCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KGNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsU3ltYm9sUGFydDtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgdGVybWluYWxOb2RlID0gZmlyc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICB0ZXJtaW5hbE5vZGVDb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBtYXRjaGVzID0gdGVybWluYWxOb2RlQ29udGVudC5tYXRjaChUZXJtaW5hbFN5bWJvbE5vZGUucmVndWxhckV4cHJlc3Npb24pLFxuICAgICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICAgIGNvbnRlbnQgPSBzZWNvbmRNYXRjaC5yZXBsYWNlKC9cXFxcXCIvZyxcIlwiKTsgLy8vXG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhUZXJtaW5hbFN5bWJvbE5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRlcm1pbmFsU3ltYm9sTm9kZTtcblxuVGVybWluYWxTeW1ib2xOb2RlLnJlZ3VsYXJFeHByZXNzaW9uID0gL15cIigoPzpcXFxcLnxbXlwiXSkqKVwiJC87XG4iXX0=