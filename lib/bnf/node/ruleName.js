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

var RuleNamePart = require('../part/nonTerminal/ruleName'),
    arrayUtilities = require('../../utilities/array'),
    NonTerminalNode = require('../../common/node/nonTerminal');

var first = arrayUtilities.first;

var RuleNameNode = /*#__PURE__*/function (_NonTerminalNode) {
  _inherits(RuleNameNode, _NonTerminalNode);

  function RuleNameNode() {
    _classCallCheck(this, RuleNameNode);

    return _possibleConstructorReturn(this, _getPrototypeOf(RuleNameNode).apply(this, arguments));
  }

  _createClass(RuleNameNode, [{
    key: "generatePart",
    value: function generatePart(lookAhead) {
      var ruleName = this.getRuleName(),
          ruleNamePart = new RuleNamePart(ruleName, lookAhead);
      return ruleNamePart;
    }
  }, {
    key: "getRuleName",
    value: function getRuleName() {
      var childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          terminalNode = firstChildNode,
          ///
      terminalNodeContent = terminalNode.getContent(),
          ruleName = terminalNodeContent; ///

      return ruleName;
    }
  }], [{
    key: "fromRuleNameAndChildNodes",
    value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
      return NonTerminalNode.fromRuleNameAndChildNodes(RuleNameNode, ruleName, childNodes);
    }
  }]);

  return RuleNameNode;
}(NonTerminalNode);

module.exports = RuleNameNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVOYW1lLmpzIl0sIm5hbWVzIjpbIlJ1bGVOYW1lUGFydCIsInJlcXVpcmUiLCJhcnJheVV0aWxpdGllcyIsIk5vblRlcm1pbmFsTm9kZSIsImZpcnN0IiwiUnVsZU5hbWVOb2RlIiwibG9va0FoZWFkIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInJ1bGVOYW1lUGFydCIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZmlyc3RDaGlsZE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZLEdBQUdDLE9BQU8sQ0FBQyw4QkFBRCxDQUE1QjtBQUFBLElBQ01DLGNBQWMsR0FBR0QsT0FBTyxDQUFDLHVCQUFELENBRDlCO0FBQUEsSUFFTUUsZUFBZSxHQUFHRixPQUFPLENBQUMsK0JBQUQsQ0FGL0I7O0lBSVFHLEssR0FBVUYsYyxDQUFWRSxLOztJQUVGQyxZOzs7Ozs7Ozs7OztpQ0FDU0MsUyxFQUFXO0FBQ3RCLFVBQU1DLFFBQVEsR0FBRyxLQUFLQyxXQUFMLEVBQWpCO0FBQUEsVUFDTUMsWUFBWSxHQUFHLElBQUlULFlBQUosQ0FBaUJPLFFBQWpCLEVBQTJCRCxTQUEzQixDQURyQjtBQUdBLGFBQU9HLFlBQVA7QUFDRDs7O2tDQUVhO0FBQ1osVUFBTUMsVUFBVSxHQUFHLEtBQUtDLGFBQUwsRUFBbkI7QUFBQSxVQUNNQyxjQUFjLEdBQUdSLEtBQUssQ0FBQ00sVUFBRCxDQUQ1QjtBQUFBLFVBRU1HLFlBQVksR0FBR0QsY0FGckI7QUFBQSxVQUVzQztBQUNoQ0UsTUFBQUEsbUJBQW1CLEdBQUdELFlBQVksQ0FBQ0UsVUFBYixFQUg1QjtBQUFBLFVBSU1SLFFBQVEsR0FBR08sbUJBSmpCLENBRFksQ0FLMEI7O0FBRXRDLGFBQU9QLFFBQVA7QUFDRDs7OzhDQUVnQ0EsUSxFQUFVRyxVLEVBQVk7QUFBRSxhQUFPUCxlQUFlLENBQUNhLHlCQUFoQixDQUEwQ1gsWUFBMUMsRUFBd0RFLFFBQXhELEVBQWtFRyxVQUFsRSxDQUFQO0FBQXVGOzs7O0VBbEJ2SFAsZTs7QUFxQjNCYyxNQUFNLENBQUNDLE9BQVAsR0FBaUJiLFlBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSdWxlTmFtZVBhcnQgPSByZXF1aXJlKCcuLi9wYXJ0L25vblRlcm1pbmFsL3J1bGVOYW1lJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgTm9uVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWwnKTtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIFJ1bGVOYW1lTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUGFydChsb29rQWhlYWQpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBydWxlTmFtZVBhcnQgPSBuZXcgUnVsZU5hbWVQYXJ0KHJ1bGVOYW1lLCBsb29rQWhlYWQpO1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lUGFydDtcbiAgfVxuXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIHRlcm1pbmFsTm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgdGVybWluYWxOb2RlQ29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgcnVsZU5hbWUgPSB0ZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cbiAgICBcbiAgICByZXR1cm4gcnVsZU5hbWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcykgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoUnVsZU5hbWVOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlTmFtZU5vZGU7XG4iXX0=