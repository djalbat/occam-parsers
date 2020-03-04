'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var arrayUtilities = require('../../utilities/array'),
    NonTerminalNode = require('../../common/node/nonTerminal'),
    RegularExpressionPart = require('../part/terminal/regularExpression');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ3VsYXJFeHByZXNzaW9uLmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbGl0aWVzIiwicmVxdWlyZSIsIk5vblRlcm1pbmFsTm9kZSIsIlJlZ3VsYXJFeHByZXNzaW9uUGFydCIsImZpcnN0Iiwic2Vjb25kIiwiUmVndWxhckV4cHJlc3Npb25Ob2RlIiwibG9va0FoZWFkIiwicmVndWxhckV4cHJlc3Npb24iLCJnZXRSZWd1bGFyRXhwcmVzc2lvbiIsInJlZ3VsYXJFeHByZXNzaW9uUGFydCIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZmlyc3RDaGlsZE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsIm1hdGNoZXMiLCJtYXRjaCIsInNlY29uZE1hdGNoIiwicGF0dGVybiIsIlJlZ0V4cCIsInJ1bGVOYW1lIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGNBQWMsR0FBR0MsT0FBTyxDQUFDLHVCQUFELENBQTlCO0FBQUEsSUFDTUMsZUFBZSxHQUFHRCxPQUFPLENBQUMsK0JBQUQsQ0FEL0I7QUFBQSxJQUVNRSxxQkFBcUIsR0FBR0YsT0FBTyxDQUFDLG9DQUFELENBRnJDOztJQUlRRyxLLEdBQWtCSixjLENBQWxCSSxLO0lBQU9DLE0sR0FBV0wsYyxDQUFYSyxNOztJQUVUQyxxQjs7Ozs7Ozs7Ozs7aUNBQ1NDLFMsRUFBVztBQUN0QixVQUFNQyxpQkFBaUIsR0FBRyxLQUFLQyxvQkFBTCxFQUExQjtBQUFBLFVBQ01DLHFCQUFxQixHQUFHLElBQUlQLHFCQUFKLENBQTBCSyxpQkFBMUIsQ0FEOUI7QUFHQSxhQUFPRSxxQkFBUDtBQUNEOzs7MkNBRXNCO0FBQ3JCLFVBQU1DLFVBQVUsR0FBRyxLQUFLQyxhQUFMLEVBQW5CO0FBQUEsVUFDTUMsY0FBYyxHQUFHVCxLQUFLLENBQUNPLFVBQUQsQ0FENUI7QUFBQSxVQUVNRyxZQUFZLEdBQUdELGNBRnJCO0FBQUEsVUFFc0M7QUFDaENFLE1BQUFBLG1CQUFtQixHQUFHRCxZQUFZLENBQUNFLFVBQWIsRUFINUI7QUFBQSxVQUlNQyxPQUFPLEdBQUdGLG1CQUFtQixDQUFDRyxLQUFwQixDQUEwQloscUJBQXFCLENBQUNFLGlCQUFoRCxDQUpoQjtBQUFBLFVBS01XLFdBQVcsR0FBR2QsTUFBTSxDQUFDWSxPQUFELENBTDFCO0FBQUEsVUFNTUcsT0FBTyxHQUFHRCxXQU5oQjtBQUFBLFVBTTZCO0FBQ3ZCWCxNQUFBQSxpQkFBaUIsR0FBRyxJQUFJYSxNQUFKLENBQVdELE9BQVgsQ0FQMUIsQ0FEcUIsQ0FRMkI7O0FBRWhELGFBQU9aLGlCQUFQO0FBQ0Q7Ozs4Q0FFZ0NjLFEsRUFBVVgsVSxFQUFZO0FBQUUsYUFBT1QsZUFBZSxDQUFDcUIseUJBQWhCLENBQTBDakIscUJBQTFDLEVBQWlFZ0IsUUFBakUsRUFBMkVYLFVBQTNFLENBQVA7QUFBZ0c7Ozs7RUFyQnZIVCxlOztBQXdCcENzQixNQUFNLENBQUNDLE9BQVAsR0FBaUJuQixxQkFBakI7QUFFQUEscUJBQXFCLENBQUNFLGlCQUF0QixHQUEwQyx3QkFBMUMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICBOb25UZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbCcpLFxuICAgICAgUmVndWxhckV4cHJlc3Npb25QYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC90ZXJtaW5hbC9yZWd1bGFyRXhwcmVzc2lvbicpO1xuXG5jb25zdCB7IGZpcnN0LCBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBSZWd1bGFyRXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZVBhcnQobG9va0FoZWFkKSB7XG4gICAgY29uc3QgcmVndWxhckV4cHJlc3Npb24gPSB0aGlzLmdldFJlZ3VsYXJFeHByZXNzaW9uKCksXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb25QYXJ0ID0gbmV3IFJlZ3VsYXJFeHByZXNzaW9uUGFydChyZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICByZXR1cm4gcmVndWxhckV4cHJlc3Npb25QYXJ0O1xuICB9XG5cbiAgZ2V0UmVndWxhckV4cHJlc3Npb24oKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgdGVybWluYWxOb2RlID0gZmlyc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICB0ZXJtaW5hbE5vZGVDb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBtYXRjaGVzID0gdGVybWluYWxOb2RlQ29udGVudC5tYXRjaChSZWd1bGFyRXhwcmVzc2lvbk5vZGUucmVndWxhckV4cHJlc3Npb24pLFxuICAgICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICAgIHBhdHRlcm4gPSBzZWNvbmRNYXRjaCwgLy8vXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb24gPSBuZXcgUmVnRXhwKHBhdHRlcm4pOyAgLy8vXG5cbiAgICByZXR1cm4gcmVndWxhckV4cHJlc3Npb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcykgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoUmVndWxhckV4cHJlc3Npb25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWd1bGFyRXhwcmVzc2lvbk5vZGU7XG5cblJlZ3VsYXJFeHByZXNzaW9uTm9kZS5yZWd1bGFyRXhwcmVzc2lvbiA9IC9eXFwvKCg/OlxcXFwufFteXFwvXSkqKVxcLyQvO1xuIl19