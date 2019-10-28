'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var VerticalBranchParseTree = require('./verticalBranch');

var specialSymbols = lexers.specialSymbols,
    END_OF_LINE = specialSymbols.END_OF_LINE;

var EndOfLineNodeParseTree = function (_VerticalBranchParseT) {
      _inherits(EndOfLineNodeParseTree, _VerticalBranchParseT);

      function EndOfLineNodeParseTree() {
            _classCallCheck(this, EndOfLineNodeParseTree);

            return _possibleConstructorReturn(this, (EndOfLineNodeParseTree.__proto__ || Object.getPrototypeOf(EndOfLineNodeParseTree)).apply(this, arguments));
      }

      _createClass(EndOfLineNodeParseTree, null, [{
            key: 'fromNothing',
            value: function fromNothing() {
                  var string = END_OF_LINE,
                      ///
                  stringLength = string.length,
                      verticalBranchParseTreeWidth = stringLength,
                      ///
                  verticalBranchParseTree = VerticalBranchParseTree.fromWidth(verticalBranchParseTreeWidth),
                      verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(),
                      terminalNodeParseTree = VerticalBranchParseTree.fromStringAndVerticalBranchPosition(EndOfLineNodeParseTree, string, verticalBranchPosition);

                  terminalNodeParseTree.appendToTop(verticalBranchParseTree);

                  var epsilonNodeParseTree = terminalNodeParseTree; ///

                  return epsilonNodeParseTree;
            }
      }]);

      return EndOfLineNodeParseTree;
}(VerticalBranchParseTree);

module.exports = EndOfLineNodeParseTree;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vcGFyc2VUcmVlL2VuZE9mTGluZU5vZGUuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIlZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwic3BlY2lhbFN5bWJvbHMiLCJFTkRfT0ZfTElORSIsIkVuZE9mTGluZU5vZGVQYXJzZVRyZWUiLCJzdHJpbmciLCJzdHJpbmdMZW5ndGgiLCJsZW5ndGgiLCJ2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoIiwidmVydGljYWxCcmFuY2hQYXJzZVRyZWUiLCJmcm9tV2lkdGgiLCJ2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbiIsInRlcm1pbmFsTm9kZVBhcnNlVHJlZSIsImZyb21TdHJpbmdBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiYXBwZW5kVG9Ub3AiLCJlcHNpbG9uTm9kZVBhcnNlVHJlZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxjQUFSLENBQWY7O0FBRUEsSUFBTUMsMEJBQTBCRCxRQUFRLGtCQUFSLENBQWhDOztBQUVNLElBQUVFLGNBQUYsR0FBcUJILE1BQXJCLENBQUVHLGNBQUY7QUFBQSxJQUNFQyxXQURGLEdBQ2tCRCxjQURsQixDQUNFQyxXQURGOztJQUdBQyxzQjs7Ozs7Ozs7Ozs7MENBQ2lCO0FBQ25CLHNCQUFNQyxTQUFTRixXQUFmO0FBQUEsc0JBQTRCO0FBQ3RCRyxpQ0FBZUQsT0FBT0UsTUFENUI7QUFBQSxzQkFFTUMsK0JBQStCRixZQUZyQztBQUFBLHNCQUVtRDtBQUM3Q0csNENBQTBCUix3QkFBd0JTLFNBQXhCLENBQWtDRiw0QkFBbEMsQ0FIaEM7QUFBQSxzQkFJTUcseUJBQXlCRix3QkFBd0JHLHlCQUF4QixFQUovQjtBQUFBLHNCQUtNQyx3QkFBd0JaLHdCQUF3QmEsbUNBQXhCLENBQTREVixzQkFBNUQsRUFBb0ZDLE1BQXBGLEVBQTRGTSxzQkFBNUYsQ0FMOUI7O0FBT0FFLHdDQUFzQkUsV0FBdEIsQ0FBa0NOLHVCQUFsQzs7QUFFQSxzQkFBTU8sdUJBQXVCSCxxQkFBN0IsQ0FWbUIsQ0FVaUM7O0FBRXBELHlCQUFPRyxvQkFBUDtBQUNEOzs7O0VBZGtDZix1Qjs7QUFpQnJDZ0IsT0FBT0MsT0FBUCxHQUFpQmQsc0JBQWpCIiwiZmlsZSI6ImVuZE9mTGluZU5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IHJlcXVpcmUoJy4vdmVydGljYWxCcmFuY2gnKTtcblxuY29uc3QgeyBzcGVjaWFsU3ltYm9scyB9ID0gbGV4ZXJzLFxuICAgICAgeyBFTkRfT0ZfTElORSB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmNsYXNzIEVuZE9mTGluZU5vZGVQYXJzZVRyZWUgZXh0ZW5kcyBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBFTkRfT0ZfTElORSwgLy8vXG4gICAgICAgICAgc3RyaW5nTGVuZ3RoID0gc3RyaW5nLmxlbmd0aCxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoID0gc3RyaW5nTGVuZ3RoLCAvLy9cbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21XaWR0aCh2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoKSxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpLFxuICAgICAgICAgIHRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21TdHJpbmdBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKEVuZE9mTGluZU5vZGVQYXJzZVRyZWUsIHN0cmluZywgdmVydGljYWxCcmFuY2hQb3NpdGlvbik7XG5cbiAgICB0ZXJtaW5hbE5vZGVQYXJzZVRyZWUuYXBwZW5kVG9Ub3AodmVydGljYWxCcmFuY2hQYXJzZVRyZWUpO1xuXG4gICAgY29uc3QgZXBzaWxvbk5vZGVQYXJzZVRyZWUgPSB0ZXJtaW5hbE5vZGVQYXJzZVRyZWU7IC8vL1xuXG4gICAgcmV0dXJuIGVwc2lsb25Ob2RlUGFyc2VUcmVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRW5kT2ZMaW5lTm9kZVBhcnNlVHJlZTtcbiJdfQ==