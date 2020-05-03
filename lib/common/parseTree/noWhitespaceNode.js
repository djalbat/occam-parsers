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
    NO_WHITESPACE = specialSymbols.NO_WHITESPACE;

var NoWhitespaceNodeParseTree = /*#__PURE__*/function (_VerticalBranchParseT) {
  _inherits(NoWhitespaceNodeParseTree, _VerticalBranchParseT);

  function NoWhitespaceNodeParseTree() {
    _classCallCheck(this, NoWhitespaceNodeParseTree);

    return _possibleConstructorReturn(this, _getPrototypeOf(NoWhitespaceNodeParseTree).apply(this, arguments));
  }

  _createClass(NoWhitespaceNodeParseTree, null, [{
    key: "fromNothing",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vV2hpdGVzcGFjZU5vZGUuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIlZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwic3BlY2lhbFN5bWJvbHMiLCJOT19XSElURVNQQUNFIiwiTm9XaGl0ZXNwYWNlTm9kZVBhcnNlVHJlZSIsInN0cmluZyIsInN0cmluZ0xlbmd0aCIsImxlbmd0aCIsInZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGgiLCJ2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsImZyb21XaWR0aCIsInZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJnZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwidGVybWluYWxOb2RlUGFyc2VUcmVlIiwiZnJvbVN0cmluZ0FuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJhcHBlbmRUb1RvcCIsImVwc2lsb25Ob2RlUGFyc2VUcmVlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxPQUFPLENBQUMsY0FBRCxDQUF0Qjs7QUFFQSxJQUFNQyx1QkFBdUIsR0FBR0QsT0FBTyxDQUFDLGtCQUFELENBQXZDOztBQUVNLElBQUVFLGNBQUYsR0FBcUJILE1BQXJCLENBQUVHLGNBQUY7QUFBQSxJQUNFQyxhQURGLEdBQ29CRCxjQURwQixDQUNFQyxhQURGOztJQUdBQyx5Qjs7Ozs7Ozs7Ozs7a0NBQ2lCO0FBQ25CLFVBQU1DLE1BQU0sR0FBR0YsYUFBZjtBQUFBLFVBQThCO0FBQ3hCRyxNQUFBQSxZQUFZLEdBQUdELE1BQU0sQ0FBQ0UsTUFENUI7QUFBQSxVQUVNQyw0QkFBNEIsR0FBR0YsWUFGckM7QUFBQSxVQUVtRDtBQUM3Q0csTUFBQUEsdUJBQXVCLEdBQUdSLHVCQUF1QixDQUFDUyxTQUF4QixDQUFrQ0YsNEJBQWxDLENBSGhDO0FBQUEsVUFJTUcsc0JBQXNCLEdBQUdGLHVCQUF1QixDQUFDRyx5QkFBeEIsRUFKL0I7QUFBQSxVQUtNQyxxQkFBcUIsR0FBR1osdUJBQXVCLENBQUNhLG1DQUF4QixDQUE0RFYseUJBQTVELEVBQXVGQyxNQUF2RixFQUErRk0sc0JBQS9GLENBTDlCO0FBT0FFLE1BQUFBLHFCQUFxQixDQUFDRSxXQUF0QixDQUFrQ04sdUJBQWxDO0FBRUEsVUFBTU8sb0JBQW9CLEdBQUdILHFCQUE3QixDQVZtQixDQVVpQzs7QUFFcEQsYUFBT0csb0JBQVA7QUFDRDs7OztFQWRxQ2YsdUI7O0FBaUJ4Q2dCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmQseUJBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoXCJvY2NhbS1sZXhlcnNcIik7XG5cbmNvbnN0IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gcmVxdWlyZShcIi4vdmVydGljYWxCcmFuY2hcIik7XG5cbmNvbnN0IHsgc3BlY2lhbFN5bWJvbHMgfSA9IGxleGVycyxcbiAgICAgIHsgTk9fV0hJVEVTUEFDRSB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmNsYXNzIE5vV2hpdGVzcGFjZU5vZGVQYXJzZVRyZWUgZXh0ZW5kcyBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBOT19XSElURVNQQUNFLCAvLy9cbiAgICAgICAgICBzdHJpbmdMZW5ndGggPSBzdHJpbmcubGVuZ3RoLFxuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGggPSBzdHJpbmdMZW5ndGgsIC8vL1xuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZnJvbVdpZHRoKHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGgpLFxuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5nZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCksXG4gICAgICAgICAgdGVybWluYWxOb2RlUGFyc2VUcmVlID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZnJvbVN0cmluZ0FuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oTm9XaGl0ZXNwYWNlTm9kZVBhcnNlVHJlZSwgc3RyaW5nLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKTtcblxuICAgIHRlcm1pbmFsTm9kZVBhcnNlVHJlZS5hcHBlbmRUb1RvcCh2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSk7XG5cbiAgICBjb25zdCBlcHNpbG9uTm9kZVBhcnNlVHJlZSA9IHRlcm1pbmFsTm9kZVBhcnNlVHJlZTsgLy8vXG5cbiAgICByZXR1cm4gZXBzaWxvbk5vZGVQYXJzZVRyZWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb1doaXRlc3BhY2VOb2RlUGFyc2VUcmVlO1xuIl19