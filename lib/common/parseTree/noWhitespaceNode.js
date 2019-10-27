'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var VerticalBranchParseTree = require('./verticalBranch');

var specialSymbols = lexers.specialSymbols,
    NO_WHITESPACE = specialSymbols.NO_WHITESPACE;

var NoWhitespaceNodeParseTree = function (_VerticalBranchParseT) {
      _inherits(NoWhitespaceNodeParseTree, _VerticalBranchParseT);

      function NoWhitespaceNodeParseTree() {
            _classCallCheck(this, NoWhitespaceNodeParseTree);

            return _possibleConstructorReturn(this, (NoWhitespaceNodeParseTree.__proto__ || Object.getPrototypeOf(NoWhitespaceNodeParseTree)).apply(this, arguments));
      }

      _createClass(NoWhitespaceNodeParseTree, null, [{
            key: 'fromNothing',
            value: function fromNothing() {
                  var string = NO_WHITESPACE,
                      ///
                  stringLength = string.length,
                      verticalBranchParseTreeWidth = stringLength,
                      ///
                  verticalBranchParseTree = VerticalBranchParseTree.fromWidth(verticalBranchParseTreeWidth),
                      verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(),
                      terminalNodeParseTree = VerticalBranchParseTree.fromStringAndVerticalBranchPosition(NoWhitespaceNodeParseTree, string, verticalBranchPosition);

                  terminalNodeParseTree.appendToTop(verticalBranchParseTree);

                  var epsilonNodeParseTree = terminalNodeParseTree; ///

                  return epsilonNodeParseTree;
            }
      }]);

      return NoWhitespaceNodeParseTree;
}(VerticalBranchParseTree);

module.exports = NoWhitespaceNodeParseTree;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vcGFyc2VUcmVlL25vV2hpdGVzcGFjZU5vZGUuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIlZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwic3BlY2lhbFN5bWJvbHMiLCJOT19XSElURVNQQUNFIiwiTm9XaGl0ZXNwYWNlTm9kZVBhcnNlVHJlZSIsInN0cmluZyIsInN0cmluZ0xlbmd0aCIsImxlbmd0aCIsInZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGgiLCJ2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsImZyb21XaWR0aCIsInZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJnZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwidGVybWluYWxOb2RlUGFyc2VUcmVlIiwiZnJvbVN0cmluZ0FuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJhcHBlbmRUb1RvcCIsImVwc2lsb25Ob2RlUGFyc2VUcmVlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQywwQkFBMEJELFFBQVEsa0JBQVIsQ0FBaEM7O0FBRU0sSUFBRUUsY0FBRixHQUFxQkgsTUFBckIsQ0FBRUcsY0FBRjtBQUFBLElBQ0VDLGFBREYsR0FDb0JELGNBRHBCLENBQ0VDLGFBREY7O0lBR0FDLHlCOzs7Ozs7Ozs7OzswQ0FDaUI7QUFDbkIsc0JBQU1DLFNBQVNGLGFBQWY7QUFBQSxzQkFBOEI7QUFDeEJHLGlDQUFlRCxPQUFPRSxNQUQ1QjtBQUFBLHNCQUVNQywrQkFBK0JGLFlBRnJDO0FBQUEsc0JBRW1EO0FBQzdDRyw0Q0FBMEJSLHdCQUF3QlMsU0FBeEIsQ0FBa0NGLDRCQUFsQyxDQUhoQztBQUFBLHNCQUlNRyx5QkFBeUJGLHdCQUF3QkcseUJBQXhCLEVBSi9CO0FBQUEsc0JBS01DLHdCQUF3Qlosd0JBQXdCYSxtQ0FBeEIsQ0FBNERWLHlCQUE1RCxFQUF1RkMsTUFBdkYsRUFBK0ZNLHNCQUEvRixDQUw5Qjs7QUFPQUUsd0NBQXNCRSxXQUF0QixDQUFrQ04sdUJBQWxDOztBQUVBLHNCQUFNTyx1QkFBdUJILHFCQUE3QixDQVZtQixDQVVpQzs7QUFFcEQseUJBQU9HLG9CQUFQO0FBQ0Q7Ozs7RUFkcUNmLHVCOztBQWlCeENnQixPQUFPQyxPQUFQLEdBQWlCZCx5QkFBakIiLCJmaWxlIjoibm9XaGl0ZXNwYWNlTm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gcmVxdWlyZSgnLi92ZXJ0aWNhbEJyYW5jaCcpO1xuXG5jb25zdCB7IHNwZWNpYWxTeW1ib2xzIH0gPSBsZXhlcnMsXG4gICAgICB7IE5PX1dISVRFU1BBQ0UgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5jbGFzcyBOb1doaXRlc3BhY2VOb2RlUGFyc2VUcmVlIGV4dGVuZHMgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gTk9fV0hJVEVTUEFDRSwgLy8vXG4gICAgICAgICAgc3RyaW5nTGVuZ3RoID0gc3RyaW5nLmxlbmd0aCxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoID0gc3RyaW5nTGVuZ3RoLCAvLy9cbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21XaWR0aCh2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoKSxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpLFxuICAgICAgICAgIHRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21TdHJpbmdBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKE5vV2hpdGVzcGFjZU5vZGVQYXJzZVRyZWUsIHN0cmluZywgdmVydGljYWxCcmFuY2hQb3NpdGlvbik7XG5cbiAgICB0ZXJtaW5hbE5vZGVQYXJzZVRyZWUuYXBwZW5kVG9Ub3AodmVydGljYWxCcmFuY2hQYXJzZVRyZWUpO1xuXG4gICAgY29uc3QgZXBzaWxvbk5vZGVQYXJzZVRyZWUgPSB0ZXJtaW5hbE5vZGVQYXJzZVRyZWU7IC8vL1xuXG4gICAgcmV0dXJuIGVwc2lsb25Ob2RlUGFyc2VUcmVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9XaGl0ZXNwYWNlTm9kZVBhcnNlVHJlZTtcbiJdfQ==