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

var VerticalBranchParseTree = require('./verticalBranch');

var RuleNameParseTree = /*#__PURE__*/function (_VerticalBranchParseT) {
  _inherits(RuleNameParseTree, _VerticalBranchParseT);

  function RuleNameParseTree() {
    _classCallCheck(this, RuleNameParseTree);

    return _possibleConstructorReturn(this, _getPrototypeOf(RuleNameParseTree).apply(this, arguments));
  }

  _createClass(RuleNameParseTree, null, [{
    key: "fromNonTerminalNodeAndTokens",
    value: function fromNonTerminalNodeAndTokens(nonTerminalNode, tokens) {
      var ruleName = nonTerminalNode.getRuleName(),
          tokenIndexes = tokenIndexesFromNonTerminalNodeAndTokens(nonTerminalNode, tokens),
          string = "".concat(ruleName).concat(tokenIndexes),
          stringLength = string.length,
          verticalBranchParseTreeWidth = stringLength,
          ///
      verticalBranchParseTree = VerticalBranchParseTree.fromWidth(verticalBranchParseTreeWidth),
          verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(),
          ruleNameParseTree = VerticalBranchParseTree.fromStringAndVerticalBranchPosition(RuleNameParseTree, string, verticalBranchPosition);
      ruleNameParseTree.appendToTop(verticalBranchParseTree);
      return ruleNameParseTree;
    }
  }]);

  return RuleNameParseTree;
}(VerticalBranchParseTree);

module.exports = RuleNameParseTree;

function tokenIndexesFromNonTerminalNodeAndTokens(nonTerminalNode, tokens) {
  var firstSignificantToken = nonTerminalNode.getFirstSignificantToken(),
      lastSignificantToken = nonTerminalNode.getLastSignificantToken(),
      firstSignificantTokenIndex = tokens.indexOf(firstSignificantToken),
      lastSignificantTokenIndex = tokens.indexOf(lastSignificantToken),
      tokenIndexes = firstSignificantTokenIndex !== lastSignificantTokenIndex ? "(".concat(firstSignificantTokenIndex, "-").concat(lastSignificantTokenIndex, ")") : "(".concat(firstSignificantTokenIndex, ")");
  return tokenIndexes;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVOYW1lLmpzIl0sIm5hbWVzIjpbIlZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwicmVxdWlyZSIsIlJ1bGVOYW1lUGFyc2VUcmVlIiwibm9uVGVybWluYWxOb2RlIiwidG9rZW5zIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInRva2VuSW5kZXhlcyIsInRva2VuSW5kZXhlc0Zyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnMiLCJzdHJpbmciLCJzdHJpbmdMZW5ndGgiLCJsZW5ndGgiLCJ2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoIiwidmVydGljYWxCcmFuY2hQYXJzZVRyZWUiLCJmcm9tV2lkdGgiLCJ2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbiIsInJ1bGVOYW1lUGFyc2VUcmVlIiwiZnJvbVN0cmluZ0FuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJhcHBlbmRUb1RvcCIsIm1vZHVsZSIsImV4cG9ydHMiLCJmaXJzdFNpZ25pZmljYW50VG9rZW4iLCJnZXRGaXJzdFNpZ25pZmljYW50VG9rZW4iLCJsYXN0U2lnbmlmaWNhbnRUb2tlbiIsImdldExhc3RTaWduaWZpY2FudFRva2VuIiwiZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJpbmRleE9mIiwibGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsdUJBQXVCLEdBQUdDLE9BQU8sQ0FBQyxrQkFBRCxDQUF2Qzs7SUFFTUMsaUI7Ozs7Ozs7Ozs7O2lEQUNnQ0MsZSxFQUFpQkMsTSxFQUFRO0FBQzNELFVBQU1DLFFBQVEsR0FBR0YsZUFBZSxDQUFDRyxXQUFoQixFQUFqQjtBQUFBLFVBQ01DLFlBQVksR0FBR0Msd0NBQXdDLENBQUNMLGVBQUQsRUFBa0JDLE1BQWxCLENBRDdEO0FBQUEsVUFFTUssTUFBTSxhQUFNSixRQUFOLFNBQWlCRSxZQUFqQixDQUZaO0FBQUEsVUFHTUcsWUFBWSxHQUFHRCxNQUFNLENBQUNFLE1BSDVCO0FBQUEsVUFJTUMsNEJBQTRCLEdBQUdGLFlBSnJDO0FBQUEsVUFJbUQ7QUFDN0NHLE1BQUFBLHVCQUF1QixHQUFHYix1QkFBdUIsQ0FBQ2MsU0FBeEIsQ0FBa0NGLDRCQUFsQyxDQUxoQztBQUFBLFVBTU1HLHNCQUFzQixHQUFHRix1QkFBdUIsQ0FBQ0cseUJBQXhCLEVBTi9CO0FBQUEsVUFPTUMsaUJBQWlCLEdBQUdqQix1QkFBdUIsQ0FBQ2tCLG1DQUF4QixDQUE0RGhCLGlCQUE1RCxFQUErRU8sTUFBL0UsRUFBdUZNLHNCQUF2RixDQVAxQjtBQVNBRSxNQUFBQSxpQkFBaUIsQ0FBQ0UsV0FBbEIsQ0FBOEJOLHVCQUE5QjtBQUVBLGFBQU9JLGlCQUFQO0FBQ0Q7Ozs7RUFkNkJqQix1Qjs7QUFpQmhDb0IsTUFBTSxDQUFDQyxPQUFQLEdBQWlCbkIsaUJBQWpCOztBQUVBLFNBQVNNLHdDQUFULENBQWtETCxlQUFsRCxFQUFtRUMsTUFBbkUsRUFBMkU7QUFDekUsTUFBTWtCLHFCQUFxQixHQUFHbkIsZUFBZSxDQUFDb0Isd0JBQWhCLEVBQTlCO0FBQUEsTUFDTUMsb0JBQW9CLEdBQUdyQixlQUFlLENBQUNzQix1QkFBaEIsRUFEN0I7QUFBQSxNQUVNQywwQkFBMEIsR0FBR3RCLE1BQU0sQ0FBQ3VCLE9BQVAsQ0FBZUwscUJBQWYsQ0FGbkM7QUFBQSxNQUdNTSx5QkFBeUIsR0FBR3hCLE1BQU0sQ0FBQ3VCLE9BQVAsQ0FBZUgsb0JBQWYsQ0FIbEM7QUFBQSxNQUlNakIsWUFBWSxHQUFJbUIsMEJBQTBCLEtBQUtFLHlCQUFoQyxjQUNLRiwwQkFETCxjQUNtQ0UseUJBRG5DLG9CQUVPRiwwQkFGUCxNQUpyQjtBQVFBLFNBQU9uQixZQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gcmVxdWlyZSgnLi92ZXJ0aWNhbEJyYW5jaCcpO1xuXG5jbGFzcyBSdWxlTmFtZVBhcnNlVHJlZSBleHRlbmRzIFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIHtcbiAgc3RhdGljIGZyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnMobm9uVGVybWluYWxOb2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHRva2VuSW5kZXhlcyA9IHRva2VuSW5kZXhlc0Zyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnMobm9uVGVybWluYWxOb2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHN0cmluZyA9IGAke3J1bGVOYW1lfSR7dG9rZW5JbmRleGVzfWAsXG4gICAgICAgICAgc3RyaW5nTGVuZ3RoID0gc3RyaW5nLmxlbmd0aCxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoID0gc3RyaW5nTGVuZ3RoLCAvLy9cbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21XaWR0aCh2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoKSxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpLFxuICAgICAgICAgIHJ1bGVOYW1lUGFyc2VUcmVlID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZnJvbVN0cmluZ0FuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oUnVsZU5hbWVQYXJzZVRyZWUsIHN0cmluZywgdmVydGljYWxCcmFuY2hQb3NpdGlvbik7XG5cbiAgICBydWxlTmFtZVBhcnNlVHJlZS5hcHBlbmRUb1RvcCh2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSk7XG5cbiAgICByZXR1cm4gcnVsZU5hbWVQYXJzZVRyZWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlTmFtZVBhcnNlVHJlZTtcblxuZnVuY3Rpb24gdG9rZW5JbmRleGVzRnJvbU5vblRlcm1pbmFsTm9kZUFuZFRva2Vucyhub25UZXJtaW5hbE5vZGUsIHRva2Vucykge1xuICBjb25zdCBmaXJzdFNpZ25pZmljYW50VG9rZW4gPSBub25UZXJtaW5hbE5vZGUuZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgIGxhc3RTaWduaWZpY2FudFRva2VuID0gbm9uVGVybWluYWxOb2RlLmdldExhc3RTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgIGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gdG9rZW5zLmluZGV4T2YoZmlyc3RTaWduaWZpY2FudFRva2VuKSxcbiAgICAgICAgbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IHRva2Vucy5pbmRleE9mKGxhc3RTaWduaWZpY2FudFRva2VuKSxcbiAgICAgICAgdG9rZW5JbmRleGVzID0gKGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ICE9PSBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KSA/XG4gICAgICAgICAgICAgICAgICAgICAgICBgKCR7Zmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXh9LSR7bGFzdFNpZ25pZmljYW50VG9rZW5JbmRleH0pYCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGAoJHtmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleH0pYDtcblxuICByZXR1cm4gdG9rZW5JbmRleGVzO1xufVxuIl19