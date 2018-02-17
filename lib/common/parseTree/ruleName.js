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
    key: 'fromNonTerminalNodeAndLines',
    value: function fromNonTerminalNodeAndLines(nonTerminalNode, lines) {
      var ruleName = nonTerminalNode.getRuleName(),
          lineNumbers = lineNumbersFromNonTerminalNodeAndLines(nonTerminalNode, lines),
          string = '' + ruleName + lineNumbers,
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

function lineNumbersFromNonTerminalNodeAndLines(nonTerminalNode, lines) {
  var lineNumbers = void 0;

  var nonTerminalNodeNullified = nonTerminalNode.isNullified();

  if (nonTerminalNodeNullified) {
    lineNumbers = '';
  } else {
    var firstSignificantToken = nonTerminalNode.getFirstSignificantToken(),
        lastSignificantToken = nonTerminalNode.getLastSignificantToken(),
        firstSignificantTokenLine = firstSignificantToken.getLine(),
        lastSignificantTokenLine = lastSignificantToken.getLine(),
        firstLine = firstSignificantTokenLine,
        ///
    lastLine = lastSignificantTokenLine; ///

    if (firstLine === lastLine) {
      var line = firstLine,
          ///
      lineIndex = lines.indexOf(line),
          lineNumber = lineIndex + 1;

      lineNumbers = '(' + lineNumber + ')';
    } else {
      var firstLineIndex = lines.indexOf(firstLine),
          lastLineIndex = lines.indexOf(lastLine),
          firstLineNumber = firstLineIndex + 1,
          lastLineNumber = lastLineIndex + 1;

      lineNumbers = '(' + firstLineNumber + '-' + lastLineNumber + ')';
    }
  }

  return lineNumbers;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vcGFyc2VUcmVlL3J1bGVOYW1lLmpzIl0sIm5hbWVzIjpbIlZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwicmVxdWlyZSIsIlJ1bGVOYW1lUGFyc2VUcmVlIiwibm9uVGVybWluYWxOb2RlIiwibGluZXMiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwibGluZU51bWJlcnMiLCJsaW5lTnVtYmVyc0Zyb21Ob25UZXJtaW5hbE5vZGVBbmRMaW5lcyIsInN0cmluZyIsInN0cmluZ0xlbmd0aCIsImxlbmd0aCIsInZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGgiLCJ2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsImZyb21XaWR0aCIsInZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJnZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwicnVsZU5hbWVQYXJzZVRyZWUiLCJmcm9tU3RyaW5nQW5kVmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImFwcGVuZFRvVG9wIiwibW9kdWxlIiwiZXhwb3J0cyIsIm5vblRlcm1pbmFsTm9kZU51bGxpZmllZCIsImlzTnVsbGlmaWVkIiwiZmlyc3RTaWduaWZpY2FudFRva2VuIiwiZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuIiwibGFzdFNpZ25pZmljYW50VG9rZW4iLCJnZXRMYXN0U2lnbmlmaWNhbnRUb2tlbiIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbkxpbmUiLCJnZXRMaW5lIiwibGFzdFNpZ25pZmljYW50VG9rZW5MaW5lIiwiZmlyc3RMaW5lIiwibGFzdExpbmUiLCJsaW5lIiwibGluZUluZGV4IiwiaW5kZXhPZiIsImxpbmVOdW1iZXIiLCJmaXJzdExpbmVJbmRleCIsImxhc3RMaW5lSW5kZXgiLCJmaXJzdExpbmVOdW1iZXIiLCJsYXN0TGluZU51bWJlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSwwQkFBMEJDLFFBQVEsa0JBQVIsQ0FBaEM7O0lBRU1DLGlCOzs7Ozs7Ozs7OztnREFDK0JDLGUsRUFBaUJDLEssRUFBTztBQUN6RCxVQUFNQyxXQUFXRixnQkFBZ0JHLFdBQWhCLEVBQWpCO0FBQUEsVUFDTUMsY0FBY0MsdUNBQXVDTCxlQUF2QyxFQUF3REMsS0FBeEQsQ0FEcEI7QUFBQSxVQUVNSyxjQUFZSixRQUFaLEdBQXVCRSxXQUY3QjtBQUFBLFVBR01HLGVBQWVELE9BQU9FLE1BSDVCO0FBQUEsVUFJTUMsK0JBQStCRixZQUpyQztBQUFBLFVBSW1EO0FBQzdDRyxnQ0FBMEJiLHdCQUF3QmMsU0FBeEIsQ0FBa0NGLDRCQUFsQyxDQUxoQztBQUFBLFVBTU1HLHlCQUF5QkYsd0JBQXdCRyx5QkFBeEIsRUFOL0I7QUFBQSxVQU9NQyxvQkFBb0JqQix3QkFBd0JrQixtQ0FBeEIsQ0FBNERoQixpQkFBNUQsRUFBK0VPLE1BQS9FLEVBQXVGTSxzQkFBdkYsQ0FQMUI7O0FBU0FFLHdCQUFrQkUsV0FBbEIsQ0FBOEJOLHVCQUE5Qjs7QUFFQSxhQUFPSSxpQkFBUDtBQUNEOzs7O0VBZDZCakIsdUI7O0FBaUJoQ29CLE9BQU9DLE9BQVAsR0FBaUJuQixpQkFBakI7O0FBRUEsU0FBU00sc0NBQVQsQ0FBZ0RMLGVBQWhELEVBQWlFQyxLQUFqRSxFQUF3RTtBQUN0RSxNQUFJRyxvQkFBSjs7QUFFQSxNQUFNZSwyQkFBMkJuQixnQkFBZ0JvQixXQUFoQixFQUFqQzs7QUFFQSxNQUFJRCx3QkFBSixFQUE4QjtBQUM1QmYsa0JBQWMsRUFBZDtBQUNELEdBRkQsTUFFTztBQUNMLFFBQU1pQix3QkFBd0JyQixnQkFBZ0JzQix3QkFBaEIsRUFBOUI7QUFBQSxRQUNNQyx1QkFBdUJ2QixnQkFBZ0J3Qix1QkFBaEIsRUFEN0I7QUFBQSxRQUVNQyw0QkFBNEJKLHNCQUFzQkssT0FBdEIsRUFGbEM7QUFBQSxRQUdNQywyQkFBMkJKLHFCQUFxQkcsT0FBckIsRUFIakM7QUFBQSxRQUlNRSxZQUFZSCx5QkFKbEI7QUFBQSxRQUk4QztBQUN4Q0ksZUFBV0Ysd0JBTGpCLENBREssQ0FNdUM7O0FBRTVDLFFBQUlDLGNBQWNDLFFBQWxCLEVBQTRCO0FBQzFCLFVBQU1DLE9BQU9GLFNBQWI7QUFBQSxVQUF3QjtBQUNsQkcsa0JBQVk5QixNQUFNK0IsT0FBTixDQUFjRixJQUFkLENBRGxCO0FBQUEsVUFFTUcsYUFBYUYsWUFBWSxDQUYvQjs7QUFJQTNCLDBCQUFrQjZCLFVBQWxCO0FBQ0QsS0FORCxNQU1PO0FBQ0wsVUFBTUMsaUJBQWlCakMsTUFBTStCLE9BQU4sQ0FBY0osU0FBZCxDQUF2QjtBQUFBLFVBQ01PLGdCQUFnQmxDLE1BQU0rQixPQUFOLENBQWNILFFBQWQsQ0FEdEI7QUFBQSxVQUVNTyxrQkFBa0JGLGlCQUFpQixDQUZ6QztBQUFBLFVBR01HLGlCQUFpQkYsZ0JBQWdCLENBSHZDOztBQUtBL0IsMEJBQWtCZ0MsZUFBbEIsU0FBcUNDLGNBQXJDO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPakMsV0FBUDtBQUNEIiwiZmlsZSI6InJ1bGVOYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IHJlcXVpcmUoJy4vdmVydGljYWxCcmFuY2gnKTtcblxuY2xhc3MgUnVsZU5hbWVQYXJzZVRyZWUgZXh0ZW5kcyBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSB7XG4gIHN0YXRpYyBmcm9tTm9uVGVybWluYWxOb2RlQW5kTGluZXMobm9uVGVybWluYWxOb2RlLCBsaW5lcykge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgbGluZU51bWJlcnMgPSBsaW5lTnVtYmVyc0Zyb21Ob25UZXJtaW5hbE5vZGVBbmRMaW5lcyhub25UZXJtaW5hbE5vZGUsIGxpbmVzKSxcbiAgICAgICAgICBzdHJpbmcgPSBgJHtydWxlTmFtZX0ke2xpbmVOdW1iZXJzfWAsXG4gICAgICAgICAgc3RyaW5nTGVuZ3RoID0gc3RyaW5nLmxlbmd0aCxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoID0gc3RyaW5nTGVuZ3RoLCAvLy9cbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21XaWR0aCh2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoKSxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpLFxuICAgICAgICAgIHJ1bGVOYW1lUGFyc2VUcmVlID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZnJvbVN0cmluZ0FuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oUnVsZU5hbWVQYXJzZVRyZWUsIHN0cmluZywgdmVydGljYWxCcmFuY2hQb3NpdGlvbik7XG5cbiAgICBydWxlTmFtZVBhcnNlVHJlZS5hcHBlbmRUb1RvcCh2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSk7XG5cbiAgICByZXR1cm4gcnVsZU5hbWVQYXJzZVRyZWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlTmFtZVBhcnNlVHJlZTtcblxuZnVuY3Rpb24gbGluZU51bWJlcnNGcm9tTm9uVGVybWluYWxOb2RlQW5kTGluZXMobm9uVGVybWluYWxOb2RlLCBsaW5lcykge1xuICBsZXQgbGluZU51bWJlcnM7XG5cbiAgY29uc3Qgbm9uVGVybWluYWxOb2RlTnVsbGlmaWVkID0gbm9uVGVybWluYWxOb2RlLmlzTnVsbGlmaWVkKCk7XG5cbiAgaWYgKG5vblRlcm1pbmFsTm9kZU51bGxpZmllZCkge1xuICAgIGxpbmVOdW1iZXJzID0gJyc7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZmlyc3RTaWduaWZpY2FudFRva2VuID0gbm9uVGVybWluYWxOb2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICAgIGxhc3RTaWduaWZpY2FudFRva2VuID0gbm9uVGVybWluYWxOb2RlLmdldExhc3RTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuTGluZSA9IGZpcnN0U2lnbmlmaWNhbnRUb2tlbi5nZXRMaW5lKCksXG4gICAgICAgICAgbGFzdFNpZ25pZmljYW50VG9rZW5MaW5lID0gbGFzdFNpZ25pZmljYW50VG9rZW4uZ2V0TGluZSgpLFxuICAgICAgICAgIGZpcnN0TGluZSA9IGZpcnN0U2lnbmlmaWNhbnRUb2tlbkxpbmUsICAvLy9cbiAgICAgICAgICBsYXN0TGluZSA9IGxhc3RTaWduaWZpY2FudFRva2VuTGluZTsgIC8vL1xuXG4gICAgaWYgKGZpcnN0TGluZSA9PT0gbGFzdExpbmUpIHtcbiAgICAgIGNvbnN0IGxpbmUgPSBmaXJzdExpbmUsIC8vL1xuICAgICAgICAgICAgbGluZUluZGV4ID0gbGluZXMuaW5kZXhPZihsaW5lKSxcbiAgICAgICAgICAgIGxpbmVOdW1iZXIgPSBsaW5lSW5kZXggKyAxO1xuXG4gICAgICBsaW5lTnVtYmVycyA9IGAoJHtsaW5lTnVtYmVyfSlgO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBmaXJzdExpbmVJbmRleCA9IGxpbmVzLmluZGV4T2YoZmlyc3RMaW5lKSxcbiAgICAgICAgICAgIGxhc3RMaW5lSW5kZXggPSBsaW5lcy5pbmRleE9mKGxhc3RMaW5lKSxcbiAgICAgICAgICAgIGZpcnN0TGluZU51bWJlciA9IGZpcnN0TGluZUluZGV4ICsgMSxcbiAgICAgICAgICAgIGxhc3RMaW5lTnVtYmVyID0gbGFzdExpbmVJbmRleCArIDE7XG5cbiAgICAgIGxpbmVOdW1iZXJzID0gYCgke2ZpcnN0TGluZU51bWJlcn0tJHtsYXN0TGluZU51bWJlcn0pYDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbGluZU51bWJlcnM7XG59XG4iXX0=