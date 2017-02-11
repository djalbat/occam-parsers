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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFyc2VUcmVlL3Rlcm1pbmFsTm9kZS5qcyJdLCJuYW1lcyI6WyJWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsInJlcXVpcmUiLCJUZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJ0ZXJtaW5hbE5vZGUiLCJsaW5lIiwiZ2V0TGluZSIsImxpbmVOdW1iZXIiLCJnZXROdW1iZXIiLCJzaWduaWZpY2FudFRva2VuIiwiZ2V0U2lnbmlmaWNhbnRUb2tlbiIsInNpZ25pZmljYW50VG9rZW5UeXBlIiwiZ2V0VHlwZSIsInNpZ25pZmljYW50VG9rZW5Db250ZW50IiwiZ2V0Q29udGVudCIsInN0cmluZyIsInN0cmluZ0xlbmd0aCIsImxlbmd0aCIsInZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGgiLCJ2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsImZyb21XaWR0aCIsInZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJnZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwidGVybWluYWxOb2RlUGFyc2VUcmVlIiwiZnJvbVN0cmluZyIsImFwcGVuZFRvVG9wIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSwwQkFBMEJDLFFBQVEsNkJBQVIsQ0FBOUI7O0lBRU1DLHFCOzs7Ozs7Ozs7OztxQ0FDb0JDLFksRUFBYztBQUNwQyxVQUFJQyxPQUFPRCxhQUFhRSxPQUFiLEVBQVg7QUFBQSxVQUNJQyxhQUFhRixLQUFLRyxTQUFMLEVBRGpCO0FBQUEsVUFFSUMsbUJBQW1CTCxhQUFhTSxtQkFBYixFQUZ2QjtBQUFBLFVBR0lDLHVCQUF1QkYsaUJBQWlCRyxPQUFqQixFQUgzQjtBQUFBLFVBSUlDLDBCQUEwQkosaUJBQWlCSyxVQUFqQixFQUo5QjtBQUFBLFVBS0lDLFNBQVlGLHVCQUFaLFNBQXVDRixvQkFBdkMsV0FBaUVKLFVBQWpFLE1BTEo7QUFBQSxVQU1JUyxlQUFlRCxPQUFPRSxNQU4xQjtBQUFBLFVBT0lDLCtCQUErQkYsWUFQbkM7QUFBQSxVQU9pRDtBQUM3Q0csZ0NBQTBCbEIsd0JBQXdCbUIsU0FBeEIsQ0FBa0NGLDRCQUFsQyxDQVI5QjtBQUFBLFVBU0lHLHlCQUF5QkYsd0JBQXdCRyx5QkFBeEIsRUFUN0I7QUFBQSxVQVVJQyx3QkFBd0J0Qix3QkFBd0J1QixVQUF4QixDQUFtQ1QsTUFBbkMsRUFBMkNaLHFCQUEzQyxFQUFrRWtCLHNCQUFsRSxDQVY1Qjs7QUFZQUUsNEJBQXNCRSxXQUF0QixDQUFrQ04sdUJBQWxDOztBQUVBLGFBQU9JLHFCQUFQO0FBQ0Q7Ozs7RUFqQmlDdEIsdUI7O0FBb0JwQ3lCLE9BQU9DLE9BQVAsR0FBaUJ4QixxQkFBakIiLCJmaWxlIjoidGVybWluYWxOb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSByZXF1aXJlKCcuLi9wYXJzZVRyZWUvdmVydGljYWxCcmFuY2gnKTtcblxuY2xhc3MgVGVybWluYWxOb2RlUGFyc2VUcmVlIGV4dGVuZHMgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUge1xuICBzdGF0aWMgZnJvbVRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGUpIHtcbiAgICB2YXIgbGluZSA9IHRlcm1pbmFsTm9kZS5nZXRMaW5lKCksXG4gICAgICAgIGxpbmVOdW1iZXIgPSBsaW5lLmdldE51bWJlcigpLFxuICAgICAgICBzaWduaWZpY2FudFRva2VuID0gdGVybWluYWxOb2RlLmdldFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGUgPSBzaWduaWZpY2FudFRva2VuLmdldFR5cGUoKSxcbiAgICAgICAgc2lnbmlmaWNhbnRUb2tlbkNvbnRlbnQgPSBzaWduaWZpY2FudFRva2VuLmdldENvbnRlbnQoKSxcbiAgICAgICAgc3RyaW5nID0gYCR7c2lnbmlmaWNhbnRUb2tlbkNvbnRlbnR9WyR7c2lnbmlmaWNhbnRUb2tlblR5cGV9XSAoJHtsaW5lTnVtYmVyfSlgLFxuICAgICAgICBzdHJpbmdMZW5ndGggPSBzdHJpbmcubGVuZ3RoLFxuICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoID0gc3RyaW5nTGVuZ3RoLCAvLy9cbiAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tV2lkdGgodmVydGljYWxCcmFuY2hQYXJzZVRyZWVXaWR0aCksXG4gICAgICAgIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5nZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCksIFxuICAgICAgICB0ZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tU3RyaW5nKHN0cmluZywgVGVybWluYWxOb2RlUGFyc2VUcmVlLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKTtcbiAgICBcbiAgICB0ZXJtaW5hbE5vZGVQYXJzZVRyZWUuYXBwZW5kVG9Ub3AodmVydGljYWxCcmFuY2hQYXJzZVRyZWUpO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsTm9kZVBhcnNlVHJlZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRlcm1pbmFsTm9kZVBhcnNlVHJlZTtcbiJdfQ==