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
    var firstLine = nonTerminalNode.getFirstLine(),
        lastLine = nonTerminalNode.getLastLine();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vcGFyc2VUcmVlL3J1bGVOYW1lLmpzIl0sIm5hbWVzIjpbIlZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwicmVxdWlyZSIsIlJ1bGVOYW1lUGFyc2VUcmVlIiwibm9uVGVybWluYWxOb2RlIiwibGluZXMiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwibGluZU51bWJlcnMiLCJsaW5lTnVtYmVyc0Zyb21Ob25UZXJtaW5hbE5vZGVBbmRMaW5lcyIsInN0cmluZyIsInN0cmluZ0xlbmd0aCIsImxlbmd0aCIsInZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGgiLCJ2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsImZyb21XaWR0aCIsInZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJnZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwicnVsZU5hbWVQYXJzZVRyZWUiLCJmcm9tU3RyaW5nQW5kVmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImFwcGVuZFRvVG9wIiwibW9kdWxlIiwiZXhwb3J0cyIsIm5vblRlcm1pbmFsTm9kZU51bGxpZmllZCIsImlzTnVsbGlmaWVkIiwiZmlyc3RMaW5lIiwiZ2V0Rmlyc3RMaW5lIiwibGFzdExpbmUiLCJnZXRMYXN0TGluZSIsImxpbmUiLCJsaW5lSW5kZXgiLCJpbmRleE9mIiwibGluZU51bWJlciIsImZpcnN0TGluZUluZGV4IiwibGFzdExpbmVJbmRleCIsImZpcnN0TGluZU51bWJlciIsImxhc3RMaW5lTnVtYmVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLDBCQUEwQkMsUUFBUSxrQkFBUixDQUFoQzs7SUFFTUMsaUI7Ozs7Ozs7Ozs7O2dEQUMrQkMsZSxFQUFpQkMsSyxFQUFPO0FBQ3pELFVBQU1DLFdBQVdGLGdCQUFnQkcsV0FBaEIsRUFBakI7QUFBQSxVQUNNQyxjQUFjQyx1Q0FBdUNMLGVBQXZDLEVBQXdEQyxLQUF4RCxDQURwQjtBQUFBLFVBRU1LLGNBQVlKLFFBQVosR0FBdUJFLFdBRjdCO0FBQUEsVUFHTUcsZUFBZUQsT0FBT0UsTUFINUI7QUFBQSxVQUlNQywrQkFBK0JGLFlBSnJDO0FBQUEsVUFJbUQ7QUFDN0NHLGdDQUEwQmIsd0JBQXdCYyxTQUF4QixDQUFrQ0YsNEJBQWxDLENBTGhDO0FBQUEsVUFNTUcseUJBQXlCRix3QkFBd0JHLHlCQUF4QixFQU4vQjtBQUFBLFVBT01DLG9CQUFvQmpCLHdCQUF3QmtCLG1DQUF4QixDQUE0RGhCLGlCQUE1RCxFQUErRU8sTUFBL0UsRUFBdUZNLHNCQUF2RixDQVAxQjs7QUFTQUUsd0JBQWtCRSxXQUFsQixDQUE4Qk4sdUJBQTlCOztBQUVBLGFBQU9JLGlCQUFQO0FBQ0Q7Ozs7RUFkNkJqQix1Qjs7QUFpQmhDb0IsT0FBT0MsT0FBUCxHQUFpQm5CLGlCQUFqQjs7QUFFQSxTQUFTTSxzQ0FBVCxDQUFnREwsZUFBaEQsRUFBaUVDLEtBQWpFLEVBQXdFO0FBQ3RFLE1BQUlHLG9CQUFKOztBQUVBLE1BQU1lLDJCQUEyQm5CLGdCQUFnQm9CLFdBQWhCLEVBQWpDOztBQUVBLE1BQUlELHdCQUFKLEVBQThCO0FBQzVCZixrQkFBYyxFQUFkO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsUUFBTWlCLFlBQVlyQixnQkFBZ0JzQixZQUFoQixFQUFsQjtBQUFBLFFBQ01DLFdBQVd2QixnQkFBZ0J3QixXQUFoQixFQURqQjs7QUFHQSxRQUFJSCxjQUFjRSxRQUFsQixFQUE0QjtBQUMxQixVQUFNRSxPQUFPSixTQUFiO0FBQUEsVUFBd0I7QUFDbEJLLGtCQUFZekIsTUFBTTBCLE9BQU4sQ0FBY0YsSUFBZCxDQURsQjtBQUFBLFVBRU1HLGFBQWFGLFlBQVksQ0FGL0I7O0FBSUF0QiwwQkFBa0J3QixVQUFsQjtBQUNELEtBTkQsTUFNTztBQUNMLFVBQU1DLGlCQUFpQjVCLE1BQU0wQixPQUFOLENBQWNOLFNBQWQsQ0FBdkI7QUFBQSxVQUNNUyxnQkFBZ0I3QixNQUFNMEIsT0FBTixDQUFjSixRQUFkLENBRHRCO0FBQUEsVUFFTVEsa0JBQWtCRixpQkFBaUIsQ0FGekM7QUFBQSxVQUdNRyxpQkFBaUJGLGdCQUFnQixDQUh2Qzs7QUFLQTFCLDBCQUFrQjJCLGVBQWxCLFNBQXFDQyxjQUFyQztBQUNEO0FBQ0Y7O0FBRUQsU0FBTzVCLFdBQVA7QUFDRCIsImZpbGUiOiJydWxlTmFtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSByZXF1aXJlKCcuL3ZlcnRpY2FsQnJhbmNoJyk7XG5cbmNsYXNzIFJ1bGVOYW1lUGFyc2VUcmVlIGV4dGVuZHMgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUge1xuICBzdGF0aWMgZnJvbU5vblRlcm1pbmFsTm9kZUFuZExpbmVzKG5vblRlcm1pbmFsTm9kZSwgbGluZXMpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIGxpbmVOdW1iZXJzID0gbGluZU51bWJlcnNGcm9tTm9uVGVybWluYWxOb2RlQW5kTGluZXMobm9uVGVybWluYWxOb2RlLCBsaW5lcyksXG4gICAgICAgICAgc3RyaW5nID0gYCR7cnVsZU5hbWV9JHtsaW5lTnVtYmVyc31gLFxuICAgICAgICAgIHN0cmluZ0xlbmd0aCA9IHN0cmluZy5sZW5ndGgsXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWVXaWR0aCA9IHN0cmluZ0xlbmd0aCwgLy8vXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tV2lkdGgodmVydGljYWxCcmFuY2hQYXJzZVRyZWVXaWR0aCksXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKSxcbiAgICAgICAgICBydWxlTmFtZVBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21TdHJpbmdBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKFJ1bGVOYW1lUGFyc2VUcmVlLCBzdHJpbmcsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pO1xuXG4gICAgcnVsZU5hbWVQYXJzZVRyZWUuYXBwZW5kVG9Ub3AodmVydGljYWxCcmFuY2hQYXJzZVRyZWUpO1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lUGFyc2VUcmVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZU5hbWVQYXJzZVRyZWU7XG5cbmZ1bmN0aW9uIGxpbmVOdW1iZXJzRnJvbU5vblRlcm1pbmFsTm9kZUFuZExpbmVzKG5vblRlcm1pbmFsTm9kZSwgbGluZXMpIHtcbiAgbGV0IGxpbmVOdW1iZXJzO1xuXG4gIGNvbnN0IG5vblRlcm1pbmFsTm9kZU51bGxpZmllZCA9IG5vblRlcm1pbmFsTm9kZS5pc051bGxpZmllZCgpO1xuXG4gIGlmIChub25UZXJtaW5hbE5vZGVOdWxsaWZpZWQpIHtcbiAgICBsaW5lTnVtYmVycyA9ICcnO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGZpcnN0TGluZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRGaXJzdExpbmUoKSxcbiAgICAgICAgICBsYXN0TGluZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRMYXN0TGluZSgpO1xuXG4gICAgaWYgKGZpcnN0TGluZSA9PT0gbGFzdExpbmUpIHtcbiAgICAgIGNvbnN0IGxpbmUgPSBmaXJzdExpbmUsIC8vL1xuICAgICAgICAgICAgbGluZUluZGV4ID0gbGluZXMuaW5kZXhPZihsaW5lKSxcbiAgICAgICAgICAgIGxpbmVOdW1iZXIgPSBsaW5lSW5kZXggKyAxO1xuXG4gICAgICBsaW5lTnVtYmVycyA9IGAoJHtsaW5lTnVtYmVyfSlgO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBmaXJzdExpbmVJbmRleCA9IGxpbmVzLmluZGV4T2YoZmlyc3RMaW5lKSxcbiAgICAgICAgICAgIGxhc3RMaW5lSW5kZXggPSBsaW5lcy5pbmRleE9mKGxhc3RMaW5lKSxcbiAgICAgICAgICAgIGZpcnN0TGluZU51bWJlciA9IGZpcnN0TGluZUluZGV4ICsgMSxcbiAgICAgICAgICAgIGxhc3RMaW5lTnVtYmVyID0gbGFzdExpbmVJbmRleCArIDE7XG5cbiAgICAgIGxpbmVOdW1iZXJzID0gYCgke2ZpcnN0TGluZU51bWJlcn0tJHtsYXN0TGluZU51bWJlcn0pYDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbGluZU51bWJlcnM7XG59XG4iXX0=