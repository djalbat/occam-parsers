'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var VerticalBranchParseTree = require('./verticalBranch');

var BNFLexer = lexers.BNFLexer,
    specialSymbols = BNFLexer.specialSymbols,
    epsilon = specialSymbols.epsilon;

var EpsilonNodeParseTree = function (_VerticalBranchParseT) {
      _inherits(EpsilonNodeParseTree, _VerticalBranchParseT);

      function EpsilonNodeParseTree() {
            _classCallCheck(this, EpsilonNodeParseTree);

            return _possibleConstructorReturn(this, (EpsilonNodeParseTree.__proto__ || Object.getPrototypeOf(EpsilonNodeParseTree)).apply(this, arguments));
      }

      _createClass(EpsilonNodeParseTree, null, [{
            key: 'fromNothing',
            value: function fromNothing() {
                  var string = epsilon,
                      ///
                  stringLength = string.length,
                      verticalBranchParseTreeWidth = stringLength,
                      ///
                  verticalBranchParseTree = VerticalBranchParseTree.fromWidth(verticalBranchParseTreeWidth),
                      verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(),
                      terminalNodeParseTree = VerticalBranchParseTree.fromStringAndVerticalBranchPosition(EpsilonNodeParseTree, string, verticalBranchPosition);

                  terminalNodeParseTree.appendToTop(verticalBranchParseTree);

                  return terminalNodeParseTree;
            }
      }]);

      return EpsilonNodeParseTree;
}(VerticalBranchParseTree);

module.exports = EpsilonNodeParseTree;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vcGFyc2VUcmVlL3Rlcm1pbmFsTm9kZS5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiVmVydGljYWxCcmFuY2hQYXJzZVRyZWUiLCJCTkZMZXhlciIsInNwZWNpYWxTeW1ib2xzIiwiZXBzaWxvbiIsIkVwc2lsb25Ob2RlUGFyc2VUcmVlIiwic3RyaW5nIiwic3RyaW5nTGVuZ3RoIiwibGVuZ3RoIiwidmVydGljYWxCcmFuY2hQYXJzZVRyZWVXaWR0aCIsInZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwiZnJvbVdpZHRoIiwidmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJ0ZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJmcm9tU3RyaW5nQW5kVmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImFwcGVuZFRvVG9wIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQywwQkFBMEJELFFBQVEsa0JBQVIsQ0FBaEM7O0FBRU0sSUFBRUUsUUFBRixHQUFlSCxNQUFmLENBQUVHLFFBQUY7QUFBQSxJQUNFQyxjQURGLEdBQ3FCRCxRQURyQixDQUNFQyxjQURGO0FBQUEsSUFFRUMsT0FGRixHQUVjRCxjQUZkLENBRUVDLE9BRkY7O0lBSUFDLG9COzs7Ozs7Ozs7OzswQ0FDaUI7QUFDbkIsc0JBQU1DLFNBQVNGLE9BQWY7QUFBQSxzQkFBd0I7QUFDbEJHLGlDQUFlRCxPQUFPRSxNQUQ1QjtBQUFBLHNCQUVNQywrQkFBK0JGLFlBRnJDO0FBQUEsc0JBRW1EO0FBQzdDRyw0Q0FBMEJULHdCQUF3QlUsU0FBeEIsQ0FBa0NGLDRCQUFsQyxDQUhoQztBQUFBLHNCQUlNRyx5QkFBeUJGLHdCQUF3QkcseUJBQXhCLEVBSi9CO0FBQUEsc0JBS01DLHdCQUF3QmIsd0JBQXdCYyxtQ0FBeEIsQ0FBNERWLG9CQUE1RCxFQUFrRkMsTUFBbEYsRUFBMEZNLHNCQUExRixDQUw5Qjs7QUFPQUUsd0NBQXNCRSxXQUF0QixDQUFrQ04sdUJBQWxDOztBQUVBLHlCQUFPSSxxQkFBUDtBQUNEOzs7O0VBWmdDYix1Qjs7QUFlbkNnQixPQUFPQyxPQUFQLEdBQWlCYixvQkFBakIiLCJmaWxlIjoidGVybWluYWxOb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSByZXF1aXJlKCcuL3ZlcnRpY2FsQnJhbmNoJyk7XG5cbmNvbnN0IHsgQk5GTGV4ZXIgfSA9IGxleGVycyxcbiAgICAgIHsgc3BlY2lhbFN5bWJvbHMgfSA9IEJORkxleGVyLFxuICAgICAgeyBlcHNpbG9uIH0gPSBzcGVjaWFsU3ltYm9scztcblxuY2xhc3MgRXBzaWxvbk5vZGVQYXJzZVRyZWUgZXh0ZW5kcyBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBlcHNpbG9uLCAvLy9cbiAgICAgICAgICBzdHJpbmdMZW5ndGggPSBzdHJpbmcubGVuZ3RoLFxuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGggPSBzdHJpbmdMZW5ndGgsIC8vL1xuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZnJvbVdpZHRoKHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGgpLFxuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5nZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCksIFxuICAgICAgICAgIHRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21TdHJpbmdBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKEVwc2lsb25Ob2RlUGFyc2VUcmVlLCBzdHJpbmcsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pO1xuICAgIFxuICAgIHRlcm1pbmFsTm9kZVBhcnNlVHJlZS5hcHBlbmRUb1RvcCh2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSk7XG5cbiAgICByZXR1cm4gdGVybWluYWxOb2RlUGFyc2VUcmVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXBzaWxvbk5vZGVQYXJzZVRyZWU7XG4iXX0=