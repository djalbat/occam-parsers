'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VerticalBranchParseTree = require('../parseTree/verticalBranch');

var TerminalNodeParseTree = function (_VerticalBranchParseT) {
  _inherits(TerminalNodeParseTree, _VerticalBranchParseT);

  function TerminalNodeParseTree() {
    _classCallCheck(this, TerminalNodeParseTree);

    return _possibleConstructorReturn(this, (TerminalNodeParseTree.__proto__ || Object.getPrototypeOf(TerminalNodeParseTree)).apply(this, arguments));
  }

  _createClass(TerminalNodeParseTree, null, [{
    key: 'fromTerminalNode',
    value: function fromTerminalNode(terminalNode) {
      var line = terminalNode.getLine(),
          lineNumber = line.getNumber(),
          significantToken = terminalNode.getSignificantToken(),
          significantTokenType = significantToken.getType(),
          significantTokenContent = significantToken.getContent(),
          string = significantTokenContent + '[' + significantTokenType + '] (' + lineNumber + ')',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vcGFyc2VUcmVlL3Rlcm1pbmFsTm9kZS5qcyJdLCJuYW1lcyI6WyJWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsInJlcXVpcmUiLCJUZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJ0ZXJtaW5hbE5vZGUiLCJsaW5lIiwiZ2V0TGluZSIsImxpbmVOdW1iZXIiLCJnZXROdW1iZXIiLCJzaWduaWZpY2FudFRva2VuIiwiZ2V0U2lnbmlmaWNhbnRUb2tlbiIsInNpZ25pZmljYW50VG9rZW5UeXBlIiwiZ2V0VHlwZSIsInNpZ25pZmljYW50VG9rZW5Db250ZW50IiwiZ2V0Q29udGVudCIsInN0cmluZyIsInN0cmluZ0xlbmd0aCIsImxlbmd0aCIsInZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGgiLCJ2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsImZyb21XaWR0aCIsInZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJnZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwidGVybWluYWxOb2RlUGFyc2VUcmVlIiwiZnJvbVN0cmluZyIsImFwcGVuZFRvVG9wIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSwwQkFBMEJDLFFBQVEsNkJBQVIsQ0FBaEM7O0lBRU1DLHFCOzs7Ozs7Ozs7OztxQ0FDb0JDLFksRUFBYztBQUNwQyxVQUFNQyxPQUFPRCxhQUFhRSxPQUFiLEVBQWI7QUFBQSxVQUNNQyxhQUFhRixLQUFLRyxTQUFMLEVBRG5CO0FBQUEsVUFFTUMsbUJBQW1CTCxhQUFhTSxtQkFBYixFQUZ6QjtBQUFBLFVBR01DLHVCQUF1QkYsaUJBQWlCRyxPQUFqQixFQUg3QjtBQUFBLFVBSU1DLDBCQUEwQkosaUJBQWlCSyxVQUFqQixFQUpoQztBQUFBLFVBS01DLFNBQVlGLHVCQUFaLFNBQXVDRixvQkFBdkMsV0FBaUVKLFVBQWpFLE1BTE47QUFBQSxVQU1NUyxlQUFlRCxPQUFPRSxNQU41QjtBQUFBLFVBT01DLCtCQUErQkYsWUFQckM7QUFBQSxVQU9tRDtBQUM3Q0csZ0NBQTBCbEIsd0JBQXdCbUIsU0FBeEIsQ0FBa0NGLDRCQUFsQyxDQVJoQztBQUFBLFVBU01HLHlCQUF5QkYsd0JBQXdCRyx5QkFBeEIsRUFUL0I7QUFBQSxVQVVNQyx3QkFBd0J0Qix3QkFBd0J1QixVQUF4QixDQUFtQ1QsTUFBbkMsRUFBMkNaLHFCQUEzQyxFQUFrRWtCLHNCQUFsRSxDQVY5Qjs7QUFZQUUsNEJBQXNCRSxXQUF0QixDQUFrQ04sdUJBQWxDOztBQUVBLGFBQU9JLHFCQUFQO0FBQ0Q7Ozs7RUFqQmlDdEIsdUI7O0FBb0JwQ3lCLE9BQU9DLE9BQVAsR0FBaUJ4QixxQkFBakIiLCJmaWxlIjoidGVybWluYWxOb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IHJlcXVpcmUoJy4uL3BhcnNlVHJlZS92ZXJ0aWNhbEJyYW5jaCcpO1xuXG5jbGFzcyBUZXJtaW5hbE5vZGVQYXJzZVRyZWUgZXh0ZW5kcyBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSB7XG4gIHN0YXRpYyBmcm9tVGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZSkge1xuICAgIGNvbnN0IGxpbmUgPSB0ZXJtaW5hbE5vZGUuZ2V0TGluZSgpLFxuICAgICAgICAgIGxpbmVOdW1iZXIgPSBsaW5lLmdldE51bWJlcigpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW4gPSB0ZXJtaW5hbE5vZGUuZ2V0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRUeXBlKCksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbkNvbnRlbnQgPSBzaWduaWZpY2FudFRva2VuLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBzdHJpbmcgPSBgJHtzaWduaWZpY2FudFRva2VuQ29udGVudH1bJHtzaWduaWZpY2FudFRva2VuVHlwZX1dICgke2xpbmVOdW1iZXJ9KWAsXG4gICAgICAgICAgc3RyaW5nTGVuZ3RoID0gc3RyaW5nLmxlbmd0aCxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoID0gc3RyaW5nTGVuZ3RoLCAvLy9cbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21XaWR0aCh2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoKSxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpLCBcbiAgICAgICAgICB0ZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tU3RyaW5nKHN0cmluZywgVGVybWluYWxOb2RlUGFyc2VUcmVlLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKTtcbiAgICBcbiAgICB0ZXJtaW5hbE5vZGVQYXJzZVRyZWUuYXBwZW5kVG9Ub3AodmVydGljYWxCcmFuY2hQYXJzZVRyZWUpO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZVBhcnNlVHJlZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRlcm1pbmFsTm9kZVBhcnNlVHJlZTtcbiJdfQ==