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
    key: 'fromNonTerminalNodeAndTokens',
    value: function fromNonTerminalNodeAndTokens(nonTerminalNode, tokens) {
      var ruleName = nonTerminalNode.getRuleName(),
          tokenIndexes = tokenIndexesFromNonTerminalNodeAndTokens(nonTerminalNode, tokens),
          string = '' + ruleName + tokenIndexes,
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
      tokenIndexes = firstSignificantTokenIndex !== lastSignificantTokenIndex ? '(' + firstSignificantTokenIndex + '-' + lastSignificantTokenIndex + ')' : '(' + firstSignificantTokenIndex + ')';

  return tokenIndexes;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vcGFyc2VUcmVlL3J1bGVOYW1lLmpzIl0sIm5hbWVzIjpbIlZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwicmVxdWlyZSIsIlJ1bGVOYW1lUGFyc2VUcmVlIiwibm9uVGVybWluYWxOb2RlIiwidG9rZW5zIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInRva2VuSW5kZXhlcyIsInRva2VuSW5kZXhlc0Zyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnMiLCJzdHJpbmciLCJzdHJpbmdMZW5ndGgiLCJsZW5ndGgiLCJ2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoIiwidmVydGljYWxCcmFuY2hQYXJzZVRyZWUiLCJmcm9tV2lkdGgiLCJ2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbiIsInJ1bGVOYW1lUGFyc2VUcmVlIiwiZnJvbVN0cmluZ0FuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJhcHBlbmRUb1RvcCIsIm1vZHVsZSIsImV4cG9ydHMiLCJmaXJzdFNpZ25pZmljYW50VG9rZW4iLCJnZXRGaXJzdFNpZ25pZmljYW50VG9rZW4iLCJsYXN0U2lnbmlmaWNhbnRUb2tlbiIsImdldExhc3RTaWduaWZpY2FudFRva2VuIiwiZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJpbmRleE9mIiwibGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSwwQkFBMEJDLFFBQVEsa0JBQVIsQ0FBaEM7O0lBRU1DLGlCOzs7Ozs7Ozs7OztpREFDZ0NDLGUsRUFBaUJDLE0sRUFBUTtBQUMzRCxVQUFNQyxXQUFXRixnQkFBZ0JHLFdBQWhCLEVBQWpCO0FBQUEsVUFDTUMsZUFBZUMseUNBQXlDTCxlQUF6QyxFQUEwREMsTUFBMUQsQ0FEckI7QUFBQSxVQUVNSyxjQUFZSixRQUFaLEdBQXVCRSxZQUY3QjtBQUFBLFVBR01HLGVBQWVELE9BQU9FLE1BSDVCO0FBQUEsVUFJTUMsK0JBQStCRixZQUpyQztBQUFBLFVBSW1EO0FBQzdDRyxnQ0FBMEJiLHdCQUF3QmMsU0FBeEIsQ0FBa0NGLDRCQUFsQyxDQUxoQztBQUFBLFVBTU1HLHlCQUF5QkYsd0JBQXdCRyx5QkFBeEIsRUFOL0I7QUFBQSxVQU9NQyxvQkFBb0JqQix3QkFBd0JrQixtQ0FBeEIsQ0FBNERoQixpQkFBNUQsRUFBK0VPLE1BQS9FLEVBQXVGTSxzQkFBdkYsQ0FQMUI7O0FBU0FFLHdCQUFrQkUsV0FBbEIsQ0FBOEJOLHVCQUE5Qjs7QUFFQSxhQUFPSSxpQkFBUDtBQUNEOzs7O0VBZDZCakIsdUI7O0FBaUJoQ29CLE9BQU9DLE9BQVAsR0FBaUJuQixpQkFBakI7O0FBRUEsU0FBU00sd0NBQVQsQ0FBa0RMLGVBQWxELEVBQW1FQyxNQUFuRSxFQUEyRTtBQUN6RSxNQUFNa0Isd0JBQXdCbkIsZ0JBQWdCb0Isd0JBQWhCLEVBQTlCO0FBQUEsTUFDTUMsdUJBQXVCckIsZ0JBQWdCc0IsdUJBQWhCLEVBRDdCO0FBQUEsTUFFTUMsNkJBQTZCdEIsT0FBT3VCLE9BQVAsQ0FBZUwscUJBQWYsQ0FGbkM7QUFBQSxNQUdNTSw0QkFBNEJ4QixPQUFPdUIsT0FBUCxDQUFlSCxvQkFBZixDQUhsQztBQUFBLE1BSU1qQixlQUFnQm1CLCtCQUErQkUseUJBQWhDLFNBQ0tGLDBCQURMLFNBQ21DRSx5QkFEbkMsZUFFT0YsMEJBRlAsTUFKckI7O0FBUUEsU0FBT25CLFlBQVA7QUFDRCIsImZpbGUiOiJydWxlTmFtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSByZXF1aXJlKCcuL3ZlcnRpY2FsQnJhbmNoJyk7XG5cbmNsYXNzIFJ1bGVOYW1lUGFyc2VUcmVlIGV4dGVuZHMgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUge1xuICBzdGF0aWMgZnJvbU5vblRlcm1pbmFsTm9kZUFuZFRva2Vucyhub25UZXJtaW5hbE5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgdG9rZW5JbmRleGVzID0gdG9rZW5JbmRleGVzRnJvbU5vblRlcm1pbmFsTm9kZUFuZFRva2Vucyhub25UZXJtaW5hbE5vZGUsIHRva2VucyksXG4gICAgICAgICAgc3RyaW5nID0gYCR7cnVsZU5hbWV9JHt0b2tlbkluZGV4ZXN9YCxcbiAgICAgICAgICBzdHJpbmdMZW5ndGggPSBzdHJpbmcubGVuZ3RoLFxuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGggPSBzdHJpbmdMZW5ndGgsIC8vL1xuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZnJvbVdpZHRoKHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGgpLFxuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5nZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCksXG4gICAgICAgICAgcnVsZU5hbWVQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tU3RyaW5nQW5kVmVydGljYWxCcmFuY2hQb3NpdGlvbihSdWxlTmFtZVBhcnNlVHJlZSwgc3RyaW5nLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKTtcblxuICAgIHJ1bGVOYW1lUGFyc2VUcmVlLmFwcGVuZFRvVG9wKHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlKTtcblxuICAgIHJldHVybiBydWxlTmFtZVBhcnNlVHJlZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGVOYW1lUGFyc2VUcmVlO1xuXG5mdW5jdGlvbiB0b2tlbkluZGV4ZXNGcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IGZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IG5vblRlcm1pbmFsTm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgbGFzdFNpZ25pZmljYW50VG9rZW4gPSBub25UZXJtaW5hbE5vZGUuZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSB0b2tlbnMuaW5kZXhPZihmaXJzdFNpZ25pZmljYW50VG9rZW4pLFxuICAgICAgICBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gdG9rZW5zLmluZGV4T2YobGFzdFNpZ25pZmljYW50VG9rZW4pLFxuICAgICAgICB0b2tlbkluZGV4ZXMgPSAoZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggIT09IGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXgpID9cbiAgICAgICAgICAgICAgICAgICAgICAgIGAoJHtmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleH0tJHtsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4fSlgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYCgke2ZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4fSlgO1xuXG4gIHJldHVybiB0b2tlbkluZGV4ZXM7XG59XG4iXX0=