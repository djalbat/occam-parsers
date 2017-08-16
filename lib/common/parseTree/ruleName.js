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

  var firstLine = nonTerminalNode.getFirstLine(),
      lastLine = nonTerminalNode.getLastLine();

  if (firstLine === lastLine) {
    var line = firstLine,
        ///
    lineIndex = lines.indexOf(line),
        lineNumber = lineIndex + 1;

    lineNumbers = lineNumber !== 0 ? '(' + lineNumber + ')' : '';
  } else {
    var firstLineIndex = lines.indexOf(firstLine),
        lastLineIndex = lines.indexOf(lastLine),
        firstLineNumber = firstLineIndex + 1,
        lastLineNumber = lastLineIndex + 1;

    lineNumbers = '(' + firstLineNumber + '-' + lastLineNumber + ')';
  }

  return lineNumbers;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vcGFyc2VUcmVlL3J1bGVOYW1lLmpzIl0sIm5hbWVzIjpbIlZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwicmVxdWlyZSIsIlJ1bGVOYW1lUGFyc2VUcmVlIiwibm9uVGVybWluYWxOb2RlIiwibGluZXMiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwibGluZU51bWJlcnMiLCJsaW5lTnVtYmVyc0Zyb21Ob25UZXJtaW5hbE5vZGVBbmRMaW5lcyIsInN0cmluZyIsInN0cmluZ0xlbmd0aCIsImxlbmd0aCIsInZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGgiLCJ2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsImZyb21XaWR0aCIsInZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJnZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwicnVsZU5hbWVQYXJzZVRyZWUiLCJmcm9tU3RyaW5nQW5kVmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImFwcGVuZFRvVG9wIiwibW9kdWxlIiwiZXhwb3J0cyIsImZpcnN0TGluZSIsImdldEZpcnN0TGluZSIsImxhc3RMaW5lIiwiZ2V0TGFzdExpbmUiLCJsaW5lIiwibGluZUluZGV4IiwiaW5kZXhPZiIsImxpbmVOdW1iZXIiLCJmaXJzdExpbmVJbmRleCIsImxhc3RMaW5lSW5kZXgiLCJmaXJzdExpbmVOdW1iZXIiLCJsYXN0TGluZU51bWJlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSwwQkFBMEJDLFFBQVEsa0JBQVIsQ0FBaEM7O0lBRU1DLGlCOzs7Ozs7Ozs7OztnREFDK0JDLGUsRUFBaUJDLEssRUFBTztBQUN6RCxVQUFNQyxXQUFXRixnQkFBZ0JHLFdBQWhCLEVBQWpCO0FBQUEsVUFDTUMsY0FBY0MsdUNBQXVDTCxlQUF2QyxFQUF3REMsS0FBeEQsQ0FEcEI7QUFBQSxVQUVNSyxjQUFZSixRQUFaLEdBQXVCRSxXQUY3QjtBQUFBLFVBR01HLGVBQWVELE9BQU9FLE1BSDVCO0FBQUEsVUFJTUMsK0JBQStCRixZQUpyQztBQUFBLFVBSW1EO0FBQzdDRyxnQ0FBMEJiLHdCQUF3QmMsU0FBeEIsQ0FBa0NGLDRCQUFsQyxDQUxoQztBQUFBLFVBTU1HLHlCQUF5QkYsd0JBQXdCRyx5QkFBeEIsRUFOL0I7QUFBQSxVQU9NQyxvQkFBb0JqQix3QkFBd0JrQixtQ0FBeEIsQ0FBNERoQixpQkFBNUQsRUFBK0VPLE1BQS9FLEVBQXVGTSxzQkFBdkYsQ0FQMUI7O0FBU0FFLHdCQUFrQkUsV0FBbEIsQ0FBOEJOLHVCQUE5Qjs7QUFFQSxhQUFPSSxpQkFBUDtBQUNEOzs7O0VBZDZCakIsdUI7O0FBaUJoQ29CLE9BQU9DLE9BQVAsR0FBaUJuQixpQkFBakI7O0FBRUEsU0FBU00sc0NBQVQsQ0FBZ0RMLGVBQWhELEVBQWlFQyxLQUFqRSxFQUF3RTtBQUN0RSxNQUFJRyxvQkFBSjs7QUFFQSxNQUFNZSxZQUFZbkIsZ0JBQWdCb0IsWUFBaEIsRUFBbEI7QUFBQSxNQUNNQyxXQUFXckIsZ0JBQWdCc0IsV0FBaEIsRUFEakI7O0FBR0EsTUFBSUgsY0FBY0UsUUFBbEIsRUFBNEI7QUFDMUIsUUFBTUUsT0FBT0osU0FBYjtBQUFBLFFBQXdCO0FBQ2xCSyxnQkFBWXZCLE1BQU13QixPQUFOLENBQWNGLElBQWQsQ0FEbEI7QUFBQSxRQUVNRyxhQUFhRixZQUFZLENBRi9COztBQUlBcEIsa0JBQWVzQixlQUFlLENBQWhCLFNBQ01BLFVBRE4sU0FFSSxFQUZsQjtBQUdELEdBUkQsTUFRTztBQUNMLFFBQU1DLGlCQUFpQjFCLE1BQU13QixPQUFOLENBQWNOLFNBQWQsQ0FBdkI7QUFBQSxRQUNNUyxnQkFBZ0IzQixNQUFNd0IsT0FBTixDQUFjSixRQUFkLENBRHRCO0FBQUEsUUFFTVEsa0JBQWtCRixpQkFBaUIsQ0FGekM7QUFBQSxRQUdNRyxpQkFBaUJGLGdCQUFnQixDQUh2Qzs7QUFLQXhCLHdCQUFrQnlCLGVBQWxCLFNBQXFDQyxjQUFyQztBQUNEOztBQUVELFNBQU8xQixXQUFQO0FBQ0QiLCJmaWxlIjoicnVsZU5hbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gcmVxdWlyZSgnLi92ZXJ0aWNhbEJyYW5jaCcpO1xuXG5jbGFzcyBSdWxlTmFtZVBhcnNlVHJlZSBleHRlbmRzIFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIHtcbiAgc3RhdGljIGZyb21Ob25UZXJtaW5hbE5vZGVBbmRMaW5lcyhub25UZXJtaW5hbE5vZGUsIGxpbmVzKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBsaW5lTnVtYmVycyA9IGxpbmVOdW1iZXJzRnJvbU5vblRlcm1pbmFsTm9kZUFuZExpbmVzKG5vblRlcm1pbmFsTm9kZSwgbGluZXMpLFxuICAgICAgICAgIHN0cmluZyA9IGAke3J1bGVOYW1lfSR7bGluZU51bWJlcnN9YCxcbiAgICAgICAgICBzdHJpbmdMZW5ndGggPSBzdHJpbmcubGVuZ3RoLFxuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGggPSBzdHJpbmdMZW5ndGgsIC8vL1xuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZnJvbVdpZHRoKHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGgpLFxuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5nZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCksXG4gICAgICAgICAgcnVsZU5hbWVQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tU3RyaW5nQW5kVmVydGljYWxCcmFuY2hQb3NpdGlvbihSdWxlTmFtZVBhcnNlVHJlZSwgc3RyaW5nLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKTtcblxuICAgIHJ1bGVOYW1lUGFyc2VUcmVlLmFwcGVuZFRvVG9wKHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlKTtcblxuICAgIHJldHVybiBydWxlTmFtZVBhcnNlVHJlZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGVOYW1lUGFyc2VUcmVlO1xuXG5mdW5jdGlvbiBsaW5lTnVtYmVyc0Zyb21Ob25UZXJtaW5hbE5vZGVBbmRMaW5lcyhub25UZXJtaW5hbE5vZGUsIGxpbmVzKSB7XG4gIGxldCBsaW5lTnVtYmVycztcblxuICBjb25zdCBmaXJzdExpbmUgPSBub25UZXJtaW5hbE5vZGUuZ2V0Rmlyc3RMaW5lKCksXG4gICAgICAgIGxhc3RMaW5lID0gbm9uVGVybWluYWxOb2RlLmdldExhc3RMaW5lKCk7XG5cbiAgaWYgKGZpcnN0TGluZSA9PT0gbGFzdExpbmUpIHtcbiAgICBjb25zdCBsaW5lID0gZmlyc3RMaW5lLCAvLy9cbiAgICAgICAgICBsaW5lSW5kZXggPSBsaW5lcy5pbmRleE9mKGxpbmUpLFxuICAgICAgICAgIGxpbmVOdW1iZXIgPSBsaW5lSW5kZXggKyAxO1xuXG4gICAgbGluZU51bWJlcnMgPSAobGluZU51bWJlciAhPT0gMCkgP1xuICAgICAgICAgICAgICAgICAgICBgKCR7bGluZU51bWJlcn0pYCA6XG4gICAgICAgICAgICAgICAgICAgICAgJyc7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZmlyc3RMaW5lSW5kZXggPSBsaW5lcy5pbmRleE9mKGZpcnN0TGluZSksXG4gICAgICAgICAgbGFzdExpbmVJbmRleCA9IGxpbmVzLmluZGV4T2YobGFzdExpbmUpLFxuICAgICAgICAgIGZpcnN0TGluZU51bWJlciA9IGZpcnN0TGluZUluZGV4ICsgMSxcbiAgICAgICAgICBsYXN0TGluZU51bWJlciA9IGxhc3RMaW5lSW5kZXggKyAxO1xuXG4gICAgbGluZU51bWJlcnMgPSBgKCR7Zmlyc3RMaW5lTnVtYmVyfS0ke2xhc3RMaW5lTnVtYmVyfSlgO1xuICB9XG5cbiAgcmV0dXJuIGxpbmVOdW1iZXJzO1xufVxuIl19