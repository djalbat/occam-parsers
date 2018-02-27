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
  var tokenIndexes = void 0;

  var nonTerminalNodeNullified = nonTerminalNode.isNullified();

  if (nonTerminalNodeNullified) {
    tokenIndexes = '';
  } else {
    var firstSignificantToken = nonTerminalNode.getFirstSignificantToken(),
        lastSignificantToken = nonTerminalNode.getLastSignificantToken(),
        firstSignificantTokenIndex = tokens.indexOf(firstSignificantToken),
        lastSignificantTokenIndex = tokens.indexOf(lastSignificantToken);

    tokenIndexes = firstSignificantTokenIndex !== lastSignificantTokenIndex ? '(' + firstSignificantTokenIndex + '-' + lastSignificantTokenIndex + ')' : '(' + firstSignificantTokenIndex + ')';
  }

  return tokenIndexes;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vcGFyc2VUcmVlL3J1bGVOYW1lLmpzIl0sIm5hbWVzIjpbIlZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwicmVxdWlyZSIsIlJ1bGVOYW1lUGFyc2VUcmVlIiwibm9uVGVybWluYWxOb2RlIiwidG9rZW5zIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInRva2VuSW5kZXhlcyIsInRva2VuSW5kZXhlc0Zyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnMiLCJzdHJpbmciLCJzdHJpbmdMZW5ndGgiLCJsZW5ndGgiLCJ2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoIiwidmVydGljYWxCcmFuY2hQYXJzZVRyZWUiLCJmcm9tV2lkdGgiLCJ2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbiIsInJ1bGVOYW1lUGFyc2VUcmVlIiwiZnJvbVN0cmluZ0FuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJhcHBlbmRUb1RvcCIsIm1vZHVsZSIsImV4cG9ydHMiLCJub25UZXJtaW5hbE5vZGVOdWxsaWZpZWQiLCJpc051bGxpZmllZCIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImxhc3RTaWduaWZpY2FudFRva2VuIiwiZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4iLCJmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImluZGV4T2YiLCJsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLDBCQUEwQkMsUUFBUSxrQkFBUixDQUFoQzs7SUFFTUMsaUI7Ozs7Ozs7Ozs7O2lEQUNnQ0MsZSxFQUFpQkMsTSxFQUFRO0FBQzNELFVBQU1DLFdBQVdGLGdCQUFnQkcsV0FBaEIsRUFBakI7QUFBQSxVQUNNQyxlQUFlQyx5Q0FBeUNMLGVBQXpDLEVBQTBEQyxNQUExRCxDQURyQjtBQUFBLFVBRU1LLGNBQVlKLFFBQVosR0FBdUJFLFlBRjdCO0FBQUEsVUFHTUcsZUFBZUQsT0FBT0UsTUFINUI7QUFBQSxVQUlNQywrQkFBK0JGLFlBSnJDO0FBQUEsVUFJbUQ7QUFDN0NHLGdDQUEwQmIsd0JBQXdCYyxTQUF4QixDQUFrQ0YsNEJBQWxDLENBTGhDO0FBQUEsVUFNTUcseUJBQXlCRix3QkFBd0JHLHlCQUF4QixFQU4vQjtBQUFBLFVBT01DLG9CQUFvQmpCLHdCQUF3QmtCLG1DQUF4QixDQUE0RGhCLGlCQUE1RCxFQUErRU8sTUFBL0UsRUFBdUZNLHNCQUF2RixDQVAxQjs7QUFTQUUsd0JBQWtCRSxXQUFsQixDQUE4Qk4sdUJBQTlCOztBQUVBLGFBQU9JLGlCQUFQO0FBQ0Q7Ozs7RUFkNkJqQix1Qjs7QUFpQmhDb0IsT0FBT0MsT0FBUCxHQUFpQm5CLGlCQUFqQjs7QUFFQSxTQUFTTSx3Q0FBVCxDQUFrREwsZUFBbEQsRUFBbUVDLE1BQW5FLEVBQTJFO0FBQ3pFLE1BQUlHLHFCQUFKOztBQUVBLE1BQU1lLDJCQUEyQm5CLGdCQUFnQm9CLFdBQWhCLEVBQWpDOztBQUVBLE1BQUlELHdCQUFKLEVBQThCO0FBQzVCZixtQkFBZSxFQUFmO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsUUFBTWlCLHdCQUF3QnJCLGdCQUFnQnNCLHdCQUFoQixFQUE5QjtBQUFBLFFBQ01DLHVCQUF1QnZCLGdCQUFnQndCLHVCQUFoQixFQUQ3QjtBQUFBLFFBRU1DLDZCQUE2QnhCLE9BQU95QixPQUFQLENBQWVMLHFCQUFmLENBRm5DO0FBQUEsUUFHTU0sNEJBQTRCMUIsT0FBT3lCLE9BQVAsQ0FBZUgsb0JBQWYsQ0FIbEM7O0FBS0FuQixtQkFBZ0JxQiwrQkFBK0JFLHlCQUFoQyxTQUNPRiwwQkFEUCxTQUNxQ0UseUJBRHJDLGVBRVNGLDBCQUZULE1BQWY7QUFHRDs7QUFFRCxTQUFPckIsWUFBUDtBQUNEIiwiZmlsZSI6InJ1bGVOYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IHJlcXVpcmUoJy4vdmVydGljYWxCcmFuY2gnKTtcblxuY2xhc3MgUnVsZU5hbWVQYXJzZVRyZWUgZXh0ZW5kcyBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSB7XG4gIHN0YXRpYyBmcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICB0b2tlbkluZGV4ZXMgPSB0b2tlbkluZGV4ZXNGcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBzdHJpbmcgPSBgJHtydWxlTmFtZX0ke3Rva2VuSW5kZXhlc31gLFxuICAgICAgICAgIHN0cmluZ0xlbmd0aCA9IHN0cmluZy5sZW5ndGgsXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWVXaWR0aCA9IHN0cmluZ0xlbmd0aCwgLy8vXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tV2lkdGgodmVydGljYWxCcmFuY2hQYXJzZVRyZWVXaWR0aCksXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKSxcbiAgICAgICAgICBydWxlTmFtZVBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21TdHJpbmdBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKFJ1bGVOYW1lUGFyc2VUcmVlLCBzdHJpbmcsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pO1xuXG4gICAgcnVsZU5hbWVQYXJzZVRyZWUuYXBwZW5kVG9Ub3AodmVydGljYWxCcmFuY2hQYXJzZVRyZWUpO1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lUGFyc2VUcmVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZU5hbWVQYXJzZVRyZWU7XG5cbmZ1bmN0aW9uIHRva2VuSW5kZXhlc0Zyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnMobm9uVGVybWluYWxOb2RlLCB0b2tlbnMpIHtcbiAgbGV0IHRva2VuSW5kZXhlcztcblxuICBjb25zdCBub25UZXJtaW5hbE5vZGVOdWxsaWZpZWQgPSBub25UZXJtaW5hbE5vZGUuaXNOdWxsaWZpZWQoKTtcblxuICBpZiAobm9uVGVybWluYWxOb2RlTnVsbGlmaWVkKSB7XG4gICAgdG9rZW5JbmRleGVzID0gJyc7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZmlyc3RTaWduaWZpY2FudFRva2VuID0gbm9uVGVybWluYWxOb2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICAgIGxhc3RTaWduaWZpY2FudFRva2VuID0gbm9uVGVybWluYWxOb2RlLmdldExhc3RTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSB0b2tlbnMuaW5kZXhPZihmaXJzdFNpZ25pZmljYW50VG9rZW4pLFxuICAgICAgICAgIGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSB0b2tlbnMuaW5kZXhPZihsYXN0U2lnbmlmaWNhbnRUb2tlbik7XG5cbiAgICB0b2tlbkluZGV4ZXMgPSAoZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggIT09IGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXgpID9cbiAgICAgICAgICAgICAgICAgICAgICBgKCR7Zmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXh9LSR7bGFzdFNpZ25pZmljYW50VG9rZW5JbmRleH0pYCA6XG4gICAgICAgICAgICAgICAgICAgICAgICBgKCR7Zmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXh9KWA7XG4gIH1cblxuICByZXR1cm4gdG9rZW5JbmRleGVzO1xufVxuIl19