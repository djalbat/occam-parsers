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
    RegularExpressionPart = require("../part/terminal/regularExpression");

var first = arrayUtilities.first,
    second = arrayUtilities.second;

var RegularExpressionNode = /*#__PURE__*/function (_NonTerminalNode) {
  _inherits(RegularExpressionNode, _NonTerminalNode);

  function RegularExpressionNode() {
    _classCallCheck(this, RegularExpressionNode);

    return _possibleConstructorReturn(this, _getPrototypeOf(RegularExpressionNode).apply(this, arguments));
  }

  _createClass(RegularExpressionNode, [{
    key: "generatePart",
    value: function generatePart(lookAhead) {
      var regularExpression = this.getRegularExpression(),
          regularExpressionPart = new RegularExpressionPart(regularExpression);
      return regularExpressionPart;
    }
  }, {
    key: "getRegularExpression",
    value: function getRegularExpression() {
      var childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          terminalNode = firstChildNode,
          ///
      terminalNodeContent = terminalNode.getContent(),
          matches = terminalNodeContent.match(RegularExpressionNode.regularExpression),
          secondMatch = second(matches),
          pattern = secondMatch,
          ///
      regularExpression = new RegExp(pattern); ///

      return regularExpression;
    }
  }], [{
    key: "fromRuleNameAndChildNodes",
    value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
      return NonTerminalNode.fromRuleNameAndChildNodes(RegularExpressionNode, ruleName, childNodes);
    }
  }]);

  return RegularExpressionNode;
}(NonTerminalNode);

module.exports = RegularExpressionNode;
RegularExpressionNode.regularExpression = /^\/((?:\\.|[^\/])*)\/$/;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ3VsYXJFeHByZXNzaW9uLmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbGl0aWVzIiwicmVxdWlyZSIsIk5vblRlcm1pbmFsTm9kZSIsIlJlZ3VsYXJFeHByZXNzaW9uUGFydCIsImZpcnN0Iiwic2Vjb25kIiwiUmVndWxhckV4cHJlc3Npb25Ob2RlIiwibG9va0FoZWFkIiwicmVndWxhckV4cHJlc3Npb24iLCJnZXRSZWd1bGFyRXhwcmVzc2lvbiIsInJlZ3VsYXJFeHByZXNzaW9uUGFydCIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZmlyc3RDaGlsZE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsIm1hdGNoZXMiLCJtYXRjaCIsInNlY29uZE1hdGNoIiwicGF0dGVybiIsIlJlZ0V4cCIsInJ1bGVOYW1lIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGNBQWMsR0FBR0MsT0FBTyxDQUFDLHVCQUFELENBQTlCO0FBQUEsSUFDTUMsZUFBZSxHQUFHRCxPQUFPLENBQUMsK0JBQUQsQ0FEL0I7QUFBQSxJQUVNRSxxQkFBcUIsR0FBR0YsT0FBTyxDQUFDLG9DQUFELENBRnJDOztJQUlRRyxLLEdBQWtCSixjLENBQWxCSSxLO0lBQU9DLE0sR0FBV0wsYyxDQUFYSyxNOztJQUVUQyxxQjs7Ozs7Ozs7Ozs7aUNBQ1NDLFMsRUFBVztBQUN0QixVQUFNQyxpQkFBaUIsR0FBRyxLQUFLQyxvQkFBTCxFQUExQjtBQUFBLFVBQ01DLHFCQUFxQixHQUFHLElBQUlQLHFCQUFKLENBQTBCSyxpQkFBMUIsQ0FEOUI7QUFHQSxhQUFPRSxxQkFBUDtBQUNEOzs7MkNBRXNCO0FBQ3JCLFVBQU1DLFVBQVUsR0FBRyxLQUFLQyxhQUFMLEVBQW5CO0FBQUEsVUFDTUMsY0FBYyxHQUFHVCxLQUFLLENBQUNPLFVBQUQsQ0FENUI7QUFBQSxVQUVNRyxZQUFZLEdBQUdELGNBRnJCO0FBQUEsVUFFc0M7QUFDaENFLE1BQUFBLG1CQUFtQixHQUFHRCxZQUFZLENBQUNFLFVBQWIsRUFINUI7QUFBQSxVQUlNQyxPQUFPLEdBQUdGLG1CQUFtQixDQUFDRyxLQUFwQixDQUEwQloscUJBQXFCLENBQUNFLGlCQUFoRCxDQUpoQjtBQUFBLFVBS01XLFdBQVcsR0FBR2QsTUFBTSxDQUFDWSxPQUFELENBTDFCO0FBQUEsVUFNTUcsT0FBTyxHQUFHRCxXQU5oQjtBQUFBLFVBTTZCO0FBQ3ZCWCxNQUFBQSxpQkFBaUIsR0FBRyxJQUFJYSxNQUFKLENBQVdELE9BQVgsQ0FQMUIsQ0FEcUIsQ0FRMkI7O0FBRWhELGFBQU9aLGlCQUFQO0FBQ0Q7Ozs4Q0FFZ0NjLFEsRUFBVVgsVSxFQUFZO0FBQUUsYUFBT1QsZUFBZSxDQUFDcUIseUJBQWhCLENBQTBDakIscUJBQTFDLEVBQWlFZ0IsUUFBakUsRUFBMkVYLFVBQTNFLENBQVA7QUFBZ0c7Ozs7RUFyQnZIVCxlOztBQXdCcENzQixNQUFNLENBQUNDLE9BQVAsR0FBaUJuQixxQkFBakI7QUFFQUEscUJBQXFCLENBQUNFLGlCQUF0QixHQUEwQyx3QkFBMUMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCIpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZShcIi4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsXCIpLFxuICAgICAgUmVndWxhckV4cHJlc3Npb25QYXJ0ID0gcmVxdWlyZShcIi4uL3BhcnQvdGVybWluYWwvcmVndWxhckV4cHJlc3Npb25cIik7XG5cbmNvbnN0IHsgZmlyc3QsIHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIFJlZ3VsYXJFeHByZXNzaW9uTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUGFydChsb29rQWhlYWQpIHtcbiAgICBjb25zdCByZWd1bGFyRXhwcmVzc2lvbiA9IHRoaXMuZ2V0UmVndWxhckV4cHJlc3Npb24oKSxcbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblBhcnQgPSBuZXcgUmVndWxhckV4cHJlc3Npb25QYXJ0KHJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIHJldHVybiByZWd1bGFyRXhwcmVzc2lvblBhcnQ7XG4gIH1cblxuICBnZXRSZWd1bGFyRXhwcmVzc2lvbigpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICB0ZXJtaW5hbE5vZGUgPSBmaXJzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgIHRlcm1pbmFsTm9kZUNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIG1hdGNoZXMgPSB0ZXJtaW5hbE5vZGVDb250ZW50Lm1hdGNoKFJlZ3VsYXJFeHByZXNzaW9uTm9kZS5yZWd1bGFyRXhwcmVzc2lvbiksXG4gICAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgICAgcGF0dGVybiA9IHNlY29uZE1hdGNoLCAvLy9cbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvbiA9IG5ldyBSZWdFeHAocGF0dGVybik7ICAvLy9cblxuICAgIHJldHVybiByZWd1bGFyRXhwcmVzc2lvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhSZWd1bGFyRXhwcmVzc2lvbk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlZ3VsYXJFeHByZXNzaW9uTm9kZTtcblxuUmVndWxhckV4cHJlc3Npb25Ob2RlLnJlZ3VsYXJFeHByZXNzaW9uID0gL15cXC8oKD86XFxcXC58W15cXC9dKSopXFwvJC87XG4iXX0=