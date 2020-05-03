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
    epsilon = specialSymbols.epsilon;

var EpsilonNodeParseTree = /*#__PURE__*/function (_VerticalBranchParseT) {
  _inherits(EpsilonNodeParseTree, _VerticalBranchParseT);

  function EpsilonNodeParseTree() {
    _classCallCheck(this, EpsilonNodeParseTree);

    return _possibleConstructorReturn(this, _getPrototypeOf(EpsilonNodeParseTree).apply(this, arguments));
  }

  _createClass(EpsilonNodeParseTree, null, [{
    key: "fromNothing",
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
      var epsilonNodeParseTree = terminalNodeParseTree; ///

      return epsilonNodeParseTree;
    }
  }]);

  return EpsilonNodeParseTree;
}(VerticalBranchParseTree);

module.exports = EpsilonNodeParseTree;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVwc2lsb25Ob2RlLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsInNwZWNpYWxTeW1ib2xzIiwiZXBzaWxvbiIsIkVwc2lsb25Ob2RlUGFyc2VUcmVlIiwic3RyaW5nIiwic3RyaW5nTGVuZ3RoIiwibGVuZ3RoIiwidmVydGljYWxCcmFuY2hQYXJzZVRyZWVXaWR0aCIsInZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwiZnJvbVdpZHRoIiwidmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJ0ZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJmcm9tU3RyaW5nQW5kVmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImFwcGVuZFRvVG9wIiwiZXBzaWxvbk5vZGVQYXJzZVRyZWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLE9BQU8sQ0FBQyxjQUFELENBQXRCOztBQUVBLElBQU1DLHVCQUF1QixHQUFHRCxPQUFPLENBQUMsa0JBQUQsQ0FBdkM7O0FBRU0sSUFBRUUsY0FBRixHQUFxQkgsTUFBckIsQ0FBRUcsY0FBRjtBQUFBLElBQ0VDLE9BREYsR0FDY0QsY0FEZCxDQUNFQyxPQURGOztJQUdBQyxvQjs7Ozs7Ozs7Ozs7a0NBQ2lCO0FBQ25CLFVBQU1DLE1BQU0sR0FBR0YsT0FBZjtBQUFBLFVBQXdCO0FBQ2xCRyxNQUFBQSxZQUFZLEdBQUdELE1BQU0sQ0FBQ0UsTUFENUI7QUFBQSxVQUVNQyw0QkFBNEIsR0FBR0YsWUFGckM7QUFBQSxVQUVtRDtBQUM3Q0csTUFBQUEsdUJBQXVCLEdBQUdSLHVCQUF1QixDQUFDUyxTQUF4QixDQUFrQ0YsNEJBQWxDLENBSGhDO0FBQUEsVUFJTUcsc0JBQXNCLEdBQUdGLHVCQUF1QixDQUFDRyx5QkFBeEIsRUFKL0I7QUFBQSxVQUtNQyxxQkFBcUIsR0FBR1osdUJBQXVCLENBQUNhLG1DQUF4QixDQUE0RFYsb0JBQTVELEVBQWtGQyxNQUFsRixFQUEwRk0sc0JBQTFGLENBTDlCO0FBT0FFLE1BQUFBLHFCQUFxQixDQUFDRSxXQUF0QixDQUFrQ04sdUJBQWxDO0FBRUEsVUFBTU8sb0JBQW9CLEdBQUdILHFCQUE3QixDQVZtQixDQVVpQzs7QUFFcEQsYUFBT0csb0JBQVA7QUFDRDs7OztFQWRnQ2YsdUI7O0FBaUJuQ2dCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmQsb0JBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoXCJvY2NhbS1sZXhlcnNcIik7XG5cbmNvbnN0IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gcmVxdWlyZShcIi4vdmVydGljYWxCcmFuY2hcIik7XG5cbmNvbnN0IHsgc3BlY2lhbFN5bWJvbHMgfSA9IGxleGVycyxcbiAgICAgIHsgZXBzaWxvbiB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmNsYXNzIEVwc2lsb25Ob2RlUGFyc2VUcmVlIGV4dGVuZHMgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gZXBzaWxvbiwgLy8vXG4gICAgICAgICAgc3RyaW5nTGVuZ3RoID0gc3RyaW5nLmxlbmd0aCxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoID0gc3RyaW5nTGVuZ3RoLCAvLy9cbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21XaWR0aCh2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoKSxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpLFxuICAgICAgICAgIHRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21TdHJpbmdBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKEVwc2lsb25Ob2RlUGFyc2VUcmVlLCBzdHJpbmcsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pO1xuXG4gICAgdGVybWluYWxOb2RlUGFyc2VUcmVlLmFwcGVuZFRvVG9wKHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlKTtcblxuICAgIGNvbnN0IGVwc2lsb25Ob2RlUGFyc2VUcmVlID0gdGVybWluYWxOb2RlUGFyc2VUcmVlOyAvLy9cblxuICAgIHJldHVybiBlcHNpbG9uTm9kZVBhcnNlVHJlZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVwc2lsb25Ob2RlUGFyc2VUcmVlO1xuIl19