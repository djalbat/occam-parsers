"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var lexers = require("occam-lexers");

var VerticalBranchParseTree = require("./verticalBranch");

var specialSymbols = lexers.specialSymbols,
    END_OF_LINE = specialSymbols.END_OF_LINE;

var EndOfLineNodeParseTree = /*#__PURE__*/function (_VerticalBranchParseT) {
  _inherits(EndOfLineNodeParseTree, _VerticalBranchParseT);

  function EndOfLineNodeParseTree() {
    _classCallCheck(this, EndOfLineNodeParseTree);

    return _possibleConstructorReturn(this, _getPrototypeOf(EndOfLineNodeParseTree).apply(this, arguments));
  }

  _createClass(EndOfLineNodeParseTree, null, [{
    key: "fromNothing",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZE9mTGluZU5vZGUuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIlZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwic3BlY2lhbFN5bWJvbHMiLCJFTkRfT0ZfTElORSIsIkVuZE9mTGluZU5vZGVQYXJzZVRyZWUiLCJzdHJpbmciLCJzdHJpbmdMZW5ndGgiLCJsZW5ndGgiLCJ2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoIiwidmVydGljYWxCcmFuY2hQYXJzZVRyZWUiLCJmcm9tV2lkdGgiLCJ2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbiIsInRlcm1pbmFsTm9kZVBhcnNlVHJlZSIsImZyb21TdHJpbmdBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiYXBwZW5kVG9Ub3AiLCJlcHNpbG9uTm9kZVBhcnNlVHJlZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBR0MsT0FBTyxDQUFDLGNBQUQsQ0FBdEI7O0FBRUEsSUFBTUMsdUJBQXVCLEdBQUdELE9BQU8sQ0FBQyxrQkFBRCxDQUF2Qzs7QUFFTSxJQUFFRSxjQUFGLEdBQXFCSCxNQUFyQixDQUFFRyxjQUFGO0FBQUEsSUFDRUMsV0FERixHQUNrQkQsY0FEbEIsQ0FDRUMsV0FERjs7SUFHQUMsc0I7Ozs7Ozs7Ozs7O2tDQUNpQjtBQUNuQixVQUFNQyxNQUFNLEdBQUdGLFdBQWY7QUFBQSxVQUE0QjtBQUN0QkcsTUFBQUEsWUFBWSxHQUFHRCxNQUFNLENBQUNFLE1BRDVCO0FBQUEsVUFFTUMsNEJBQTRCLEdBQUdGLFlBRnJDO0FBQUEsVUFFbUQ7QUFDN0NHLE1BQUFBLHVCQUF1QixHQUFHUix1QkFBdUIsQ0FBQ1MsU0FBeEIsQ0FBa0NGLDRCQUFsQyxDQUhoQztBQUFBLFVBSU1HLHNCQUFzQixHQUFHRix1QkFBdUIsQ0FBQ0cseUJBQXhCLEVBSi9CO0FBQUEsVUFLTUMscUJBQXFCLEdBQUdaLHVCQUF1QixDQUFDYSxtQ0FBeEIsQ0FBNERWLHNCQUE1RCxFQUFvRkMsTUFBcEYsRUFBNEZNLHNCQUE1RixDQUw5QjtBQU9BRSxNQUFBQSxxQkFBcUIsQ0FBQ0UsV0FBdEIsQ0FBa0NOLHVCQUFsQztBQUVBLFVBQU1PLG9CQUFvQixHQUFHSCxxQkFBN0IsQ0FWbUIsQ0FVaUM7O0FBRXBELGFBQU9HLG9CQUFQO0FBQ0Q7Ozs7RUFka0NmLHVCOztBQWlCckNnQixNQUFNLENBQUNDLE9BQVAsR0FBaUJkLHNCQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBsZXhlcnMgPSByZXF1aXJlKFwib2NjYW0tbGV4ZXJzXCIpO1xuXG5jb25zdCBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IHJlcXVpcmUoXCIuL3ZlcnRpY2FsQnJhbmNoXCIpO1xuXG5jb25zdCB7IHNwZWNpYWxTeW1ib2xzIH0gPSBsZXhlcnMsXG4gICAgICB7IEVORF9PRl9MSU5FIH0gPSBzcGVjaWFsU3ltYm9scztcblxuY2xhc3MgRW5kT2ZMaW5lTm9kZVBhcnNlVHJlZSBleHRlbmRzIFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IEVORF9PRl9MSU5FLCAvLy9cbiAgICAgICAgICBzdHJpbmdMZW5ndGggPSBzdHJpbmcubGVuZ3RoLFxuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGggPSBzdHJpbmdMZW5ndGgsIC8vL1xuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZnJvbVdpZHRoKHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGgpLFxuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5nZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCksXG4gICAgICAgICAgdGVybWluYWxOb2RlUGFyc2VUcmVlID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZnJvbVN0cmluZ0FuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oRW5kT2ZMaW5lTm9kZVBhcnNlVHJlZSwgc3RyaW5nLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKTtcblxuICAgIHRlcm1pbmFsTm9kZVBhcnNlVHJlZS5hcHBlbmRUb1RvcCh2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSk7XG5cbiAgICBjb25zdCBlcHNpbG9uTm9kZVBhcnNlVHJlZSA9IHRlcm1pbmFsTm9kZVBhcnNlVHJlZTsgLy8vXG5cbiAgICByZXR1cm4gZXBzaWxvbk5vZGVQYXJzZVRyZWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFbmRPZkxpbmVOb2RlUGFyc2VUcmVlO1xuIl19