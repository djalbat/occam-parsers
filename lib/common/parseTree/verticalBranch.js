"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _parseTree = _interopRequireDefault(require("../parseTree"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var VerticalBranchParseTree = /*#__PURE__*/function (_ParseTree) {
  _inherits(VerticalBranchParseTree, _ParseTree);

  function VerticalBranchParseTree(lines, verticalBranchPosition) {
    var _this;

    _classCallCheck(this, VerticalBranchParseTree);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(VerticalBranchParseTree).call(this, lines));
    _this.verticalBranchPosition = verticalBranchPosition;
    return _this;
  }

  _createClass(VerticalBranchParseTree, [{
    key: "getVerticalBranchPosition",
    value: function getVerticalBranchPosition() {
      return this.verticalBranchPosition;
    }
  }, {
    key: "addLeftMargin",
    value: function addLeftMargin(leftMarginWidth) {
      _get(_getPrototypeOf(VerticalBranchParseTree.prototype), "addLeftMargin", this).call(this, leftMarginWidth);

      this.verticalBranchPosition += leftMarginWidth; ///
    }
  }], [{
    key: "fromWidth",
    value: function fromWidth(width) {
      var string = "|",
          verticalBranchPosition = 0,
          verticalBranchParseTree = VerticalBranchParseTree.fromStringAndVerticalBranchPosition(VerticalBranchParseTree, string, verticalBranchPosition),
          leftMarginWidth = Math.floor(width / 2),
          rightMarginWidth = width - leftMarginWidth - 1;
      verticalBranchParseTree.addLeftMargin(leftMarginWidth);
      verticalBranchParseTree.addRightMargin(rightMarginWidth);
      return verticalBranchParseTree;
    }
  }, {
    key: "fromDepthAndVerticalBranchPosition",
    value: function fromDepthAndVerticalBranchPosition(Class, depth, verticalBranchPosition) {
      var lines = linesFromDepth(depth),
          args = [null, lines, verticalBranchPosition],
          verticalBranchParseTree = new (Function.prototype.bind.apply(Class, args))(); ///

      return verticalBranchParseTree;
    }
  }, {
    key: "fromStringAndVerticalBranchPosition",
    value: function fromStringAndVerticalBranchPosition(Class, string, verticalBranchPosition) {
      if (verticalBranchPosition === undefined) {
        verticalBranchPosition = string;
        string = Class;
        Class = _parseTree["default"];
      }

      var line = string,
          ///
      lines = [line],
          args = [null, lines, verticalBranchPosition],
          verticalBranchParseTree = new (Function.prototype.bind.apply(Class, args))(); ///

      return verticalBranchParseTree;
    }
  }]);

  return VerticalBranchParseTree;
}(_parseTree["default"]);

exports["default"] = VerticalBranchParseTree;

function linesFromDepth(depth) {
  var lines = [];
  var index = 0;

  while (index < depth) {
    lines[index++] = "";
  }

  return lines;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcnRpY2FsQnJhbmNoLmpzIl0sIm5hbWVzIjpbIlZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwibGluZXMiLCJ2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwibGVmdE1hcmdpbldpZHRoIiwid2lkdGgiLCJzdHJpbmciLCJ2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsImZyb21TdHJpbmdBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiTWF0aCIsImZsb29yIiwicmlnaHRNYXJnaW5XaWR0aCIsImFkZExlZnRNYXJnaW4iLCJhZGRSaWdodE1hcmdpbiIsIkNsYXNzIiwiZGVwdGgiLCJsaW5lc0Zyb21EZXB0aCIsImFyZ3MiLCJGdW5jdGlvbiIsInByb3RvdHlwZSIsImJpbmQiLCJhcHBseSIsInVuZGVmaW5lZCIsIlBhcnNlVHJlZSIsImxpbmUiLCJpbmRleCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLHVCOzs7QUFDbkIsbUNBQVlDLEtBQVosRUFBbUJDLHNCQUFuQixFQUEyQztBQUFBOztBQUFBOztBQUN6QyxpR0FBTUQsS0FBTjtBQUVBLFVBQUtDLHNCQUFMLEdBQThCQSxzQkFBOUI7QUFIeUM7QUFJMUM7Ozs7Z0RBRTJCO0FBQzFCLGFBQU8sS0FBS0Esc0JBQVo7QUFDRDs7O2tDQUVhQyxlLEVBQWlCO0FBQzdCLGlHQUFvQkEsZUFBcEI7O0FBRUEsV0FBS0Qsc0JBQUwsSUFBK0JDLGVBQS9CLENBSDZCLENBR21CO0FBQ2pEOzs7OEJBRWdCQyxLLEVBQU87QUFDdEIsVUFBTUMsTUFBTSxHQUFHLEdBQWY7QUFBQSxVQUNNSCxzQkFBc0IsR0FBRyxDQUQvQjtBQUFBLFVBRU1JLHVCQUF1QixHQUFHTix1QkFBdUIsQ0FBQ08sbUNBQXhCLENBQTREUCx1QkFBNUQsRUFBcUZLLE1BQXJGLEVBQTZGSCxzQkFBN0YsQ0FGaEM7QUFBQSxVQUdNQyxlQUFlLEdBQUdLLElBQUksQ0FBQ0MsS0FBTCxDQUFXTCxLQUFLLEdBQUMsQ0FBakIsQ0FIeEI7QUFBQSxVQUlNTSxnQkFBZ0IsR0FBR04sS0FBSyxHQUFHRCxlQUFSLEdBQTBCLENBSm5EO0FBTUFHLE1BQUFBLHVCQUF1QixDQUFDSyxhQUF4QixDQUFzQ1IsZUFBdEM7QUFDQUcsTUFBQUEsdUJBQXVCLENBQUNNLGNBQXhCLENBQXVDRixnQkFBdkM7QUFFQSxhQUFPSix1QkFBUDtBQUNEOzs7dURBRXlDTyxLLEVBQU9DLEssRUFBT1osc0IsRUFBd0I7QUFDOUUsVUFBTUQsS0FBSyxHQUFHYyxjQUFjLENBQUNELEtBQUQsQ0FBNUI7QUFBQSxVQUNNRSxJQUFJLEdBQUcsQ0FBQyxJQUFELEVBQU9mLEtBQVAsRUFBY0Msc0JBQWQsQ0FEYjtBQUFBLFVBRU1JLHVCQUF1QixHQUFHLEtBQUtXLFFBQVEsQ0FBQ0MsU0FBVCxDQUFtQkMsSUFBbkIsQ0FBd0JDLEtBQXhCLENBQThCUCxLQUE5QixFQUFxQ0csSUFBckMsQ0FBTCxHQUZoQyxDQUQ4RSxDQUdLOztBQUVuRixhQUFPVix1QkFBUDtBQUNEOzs7d0RBRTBDTyxLLEVBQU9SLE0sRUFBUUgsc0IsRUFBd0I7QUFDaEYsVUFBSUEsc0JBQXNCLEtBQUttQixTQUEvQixFQUEwQztBQUN4Q25CLFFBQUFBLHNCQUFzQixHQUFHRyxNQUF6QjtBQUNBQSxRQUFBQSxNQUFNLEdBQUdRLEtBQVQ7QUFDQUEsUUFBQUEsS0FBSyxHQUFHUyxxQkFBUjtBQUNEOztBQUVELFVBQU1DLElBQUksR0FBR2xCLE1BQWI7QUFBQSxVQUFxQjtBQUNmSixNQUFBQSxLQUFLLEdBQUcsQ0FBQ3NCLElBQUQsQ0FEZDtBQUFBLFVBRU1QLElBQUksR0FBRyxDQUFDLElBQUQsRUFBT2YsS0FBUCxFQUFjQyxzQkFBZCxDQUZiO0FBQUEsVUFHTUksdUJBQXVCLEdBQUcsS0FBS1csUUFBUSxDQUFDQyxTQUFULENBQW1CQyxJQUFuQixDQUF3QkMsS0FBeEIsQ0FBOEJQLEtBQTlCLEVBQXFDRyxJQUFyQyxDQUFMLEdBSGhDLENBUGdGLENBVUc7O0FBRW5GLGFBQU9WLHVCQUFQO0FBQ0Q7Ozs7RUFuRGtEZ0IscUI7Ozs7QUFzRHJELFNBQVNQLGNBQVQsQ0FBd0JELEtBQXhCLEVBQStCO0FBQzdCLE1BQU1iLEtBQUssR0FBRyxFQUFkO0FBRUEsTUFBSXVCLEtBQUssR0FBRyxDQUFaOztBQUVBLFNBQU9BLEtBQUssR0FBR1YsS0FBZixFQUFzQjtBQUNwQmIsSUFBQUEsS0FBSyxDQUFDdUIsS0FBSyxFQUFOLENBQUwsR0FBaUIsRUFBakI7QUFDRDs7QUFFRCxTQUFPdkIsS0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQYXJzZVRyZWUgZnJvbSBcIi4uL3BhcnNlVHJlZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSBleHRlbmRzIFBhcnNlVHJlZSB7XG4gIGNvbnN0cnVjdG9yKGxpbmVzLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKSB7XG4gICAgc3VwZXIobGluZXMpO1xuICAgIFxuICAgIHRoaXMudmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IHZlcnRpY2FsQnJhbmNoUG9zaXRpb247XG4gIH1cbiAgXG4gIGdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGljYWxCcmFuY2hQb3NpdGlvbjtcbiAgfVxuXG4gIGFkZExlZnRNYXJnaW4obGVmdE1hcmdpbldpZHRoKSB7XG4gICAgc3VwZXIuYWRkTGVmdE1hcmdpbihsZWZ0TWFyZ2luV2lkdGgpO1xuXG4gICAgdGhpcy52ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uICs9IGxlZnRNYXJnaW5XaWR0aDsgLy8vXG4gIH1cblxuICBzdGF0aWMgZnJvbVdpZHRoKHdpZHRoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gXCJ8XCIsXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IDAsXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tU3RyaW5nQW5kVmVydGljYWxCcmFuY2hQb3NpdGlvbihWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSwgc3RyaW5nLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKSxcbiAgICAgICAgICBsZWZ0TWFyZ2luV2lkdGggPSBNYXRoLmZsb29yKHdpZHRoLzIpLFxuICAgICAgICAgIHJpZ2h0TWFyZ2luV2lkdGggPSB3aWR0aCAtIGxlZnRNYXJnaW5XaWR0aCAtIDE7XG5cbiAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5hZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCk7XG4gICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCk7XG5cbiAgICByZXR1cm4gdmVydGljYWxCcmFuY2hQYXJzZVRyZWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbURlcHRoQW5kVmVydGljYWxCcmFuY2hQb3NpdGlvbihDbGFzcywgZGVwdGgsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pIHtcbiAgICBjb25zdCBsaW5lcyA9IGxpbmVzRnJvbURlcHRoKGRlcHRoKSxcbiAgICAgICAgICBhcmdzID0gW251bGwsIGxpbmVzLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uXSxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoQ2xhc3MsIGFyZ3MpKTsgIC8vL1xuXG4gICAgcmV0dXJuIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdHJpbmdBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKENsYXNzLCBzdHJpbmcsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pIHtcbiAgICBpZiAodmVydGljYWxCcmFuY2hQb3NpdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gc3RyaW5nO1xuICAgICAgc3RyaW5nID0gQ2xhc3M7XG4gICAgICBDbGFzcyA9IFBhcnNlVHJlZTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgbGluZSA9IHN0cmluZywgLy8vXG4gICAgICAgICAgbGluZXMgPSBbbGluZV0sXG4gICAgICAgICAgYXJncyA9IFtudWxsLCBsaW5lcywgdmVydGljYWxCcmFuY2hQb3NpdGlvbl0sXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KENsYXNzLCBhcmdzKSk7ICAvLy9cblxuICAgIHJldHVybiB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsaW5lc0Zyb21EZXB0aChkZXB0aCkge1xuICBjb25zdCBsaW5lcyA9IFtdO1xuXG4gIGxldCBpbmRleCA9IDA7XG5cbiAgd2hpbGUgKGluZGV4IDwgZGVwdGgpIHtcbiAgICBsaW5lc1tpbmRleCsrXSA9IFwiXCI7XG4gIH1cblxuICByZXR1cm4gbGluZXM7XG59XG4iXX0=