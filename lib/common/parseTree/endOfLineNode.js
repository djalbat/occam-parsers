"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamLexers = require("occam-lexers");

var _verticalBranch = _interopRequireDefault(require("./verticalBranch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var END_OF_LINE = _occamLexers.specialSymbols.END_OF_LINE;

var EndOfLineNodeParseTree = /*#__PURE__*/function (_VerticalBranchParseT) {
  _inherits(EndOfLineNodeParseTree, _VerticalBranchParseT);

  var _super = _createSuper(EndOfLineNodeParseTree);

  function EndOfLineNodeParseTree() {
    _classCallCheck(this, EndOfLineNodeParseTree);

    return _super.apply(this, arguments);
  }

  _createClass(EndOfLineNodeParseTree, null, [{
    key: "fromNothing",
    value: function fromNothing() {
      var string = END_OF_LINE,
          ///
      stringLength = string.length,
          verticalBranchParseTreeWidth = stringLength,
          ///
      verticalBranchParseTree = _verticalBranch["default"].fromWidth(verticalBranchParseTreeWidth),
          verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(),
          terminalNodeParseTree = _verticalBranch["default"].fromStringAndVerticalBranchPosition(EndOfLineNodeParseTree, string, verticalBranchPosition);

      terminalNodeParseTree.appendToTop(verticalBranchParseTree);
      var epsilonNodeParseTree = terminalNodeParseTree; ///

      return epsilonNodeParseTree;
    }
  }]);

  return EndOfLineNodeParseTree;
}(_verticalBranch["default"]);

exports["default"] = EndOfLineNodeParseTree;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZE9mTGluZU5vZGUuanMiXSwibmFtZXMiOlsiRU5EX09GX0xJTkUiLCJzcGVjaWFsU3ltYm9scyIsIkVuZE9mTGluZU5vZGVQYXJzZVRyZWUiLCJzdHJpbmciLCJzdHJpbmdMZW5ndGgiLCJsZW5ndGgiLCJ2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoIiwidmVydGljYWxCcmFuY2hQYXJzZVRyZWUiLCJWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsImZyb21XaWR0aCIsInZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJnZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwidGVybWluYWxOb2RlUGFyc2VUcmVlIiwiZnJvbVN0cmluZ0FuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJhcHBlbmRUb1RvcCIsImVwc2lsb25Ob2RlUGFyc2VUcmVlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVRQSxXLEdBQWdCQywyQixDQUFoQkQsVzs7SUFFYUUsc0I7Ozs7Ozs7Ozs7Ozs7a0NBQ0U7QUFDbkIsVUFBTUMsTUFBTSxHQUFHSCxXQUFmO0FBQUEsVUFBNEI7QUFDdEJJLE1BQUFBLFlBQVksR0FBR0QsTUFBTSxDQUFDRSxNQUQ1QjtBQUFBLFVBRU1DLDRCQUE0QixHQUFHRixZQUZyQztBQUFBLFVBRW1EO0FBQzdDRyxNQUFBQSx1QkFBdUIsR0FBR0MsMkJBQXdCQyxTQUF4QixDQUFrQ0gsNEJBQWxDLENBSGhDO0FBQUEsVUFJTUksc0JBQXNCLEdBQUdILHVCQUF1QixDQUFDSSx5QkFBeEIsRUFKL0I7QUFBQSxVQUtNQyxxQkFBcUIsR0FBR0osMkJBQXdCSyxtQ0FBeEIsQ0FBNERYLHNCQUE1RCxFQUFvRkMsTUFBcEYsRUFBNEZPLHNCQUE1RixDQUw5Qjs7QUFPQUUsTUFBQUEscUJBQXFCLENBQUNFLFdBQXRCLENBQWtDUCx1QkFBbEM7QUFFQSxVQUFNUSxvQkFBb0IsR0FBR0gscUJBQTdCLENBVm1CLENBVWlDOztBQUVwRCxhQUFPRyxvQkFBUDtBQUNEOzs7O0VBZGlEUCwwQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIGZyb20gXCIuL3ZlcnRpY2FsQnJhbmNoXCI7XG5cbmNvbnN0IHsgRU5EX09GX0xJTkUgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmRPZkxpbmVOb2RlUGFyc2VUcmVlIGV4dGVuZHMgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gRU5EX09GX0xJTkUsIC8vL1xuICAgICAgICAgIHN0cmluZ0xlbmd0aCA9IHN0cmluZy5sZW5ndGgsXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWVXaWR0aCA9IHN0cmluZ0xlbmd0aCwgLy8vXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tV2lkdGgodmVydGljYWxCcmFuY2hQYXJzZVRyZWVXaWR0aCksXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKSxcbiAgICAgICAgICB0ZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tU3RyaW5nQW5kVmVydGljYWxCcmFuY2hQb3NpdGlvbihFbmRPZkxpbmVOb2RlUGFyc2VUcmVlLCBzdHJpbmcsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pO1xuXG4gICAgdGVybWluYWxOb2RlUGFyc2VUcmVlLmFwcGVuZFRvVG9wKHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlKTtcblxuICAgIGNvbnN0IGVwc2lsb25Ob2RlUGFyc2VUcmVlID0gdGVybWluYWxOb2RlUGFyc2VUcmVlOyAvLy9cblxuICAgIHJldHVybiBlcHNpbG9uTm9kZVBhcnNlVHJlZTtcbiAgfVxufVxuIl19