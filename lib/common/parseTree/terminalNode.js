"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _verticalBranch = _interopRequireDefault(require("./verticalBranch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var TerminalNodeParseTree = /*#__PURE__*/function (_VerticalBranchParseT) {
  _inherits(TerminalNodeParseTree, _VerticalBranchParseT);

  var _super = _createSuper(TerminalNodeParseTree);

  function TerminalNodeParseTree() {
    _classCallCheck(this, TerminalNodeParseTree);

    return _super.apply(this, arguments);
  }

  _createClass(TerminalNodeParseTree, null, [{
    key: "fromTerminalNodeAndTokens",
    value: function fromTerminalNodeAndTokens(terminalNode, tokens) {
      var significantToken = terminalNode.getSignificantToken(),
          content = terminalNode.getContent(),
          type = significantToken.getType(),
          tokenIndex = significantToken.ofIndex(tokens),
          string = "".concat(content, "[").concat(type, "](").concat(tokenIndex, ")"),
          stringLength = string.length,
          verticalBranchParseTreeWidth = stringLength,
          ///
      verticalBranchParseTree = _verticalBranch["default"].fromWidth(verticalBranchParseTreeWidth),
          verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(),
          terminalNodeParseTree = _verticalBranch["default"].fromStringAndVerticalBranchPosition(TerminalNodeParseTree, string, verticalBranchPosition);

      terminalNodeParseTree.appendToTop(verticalBranchParseTree);
      return terminalNodeParseTree;
    }
  }]);

  return TerminalNodeParseTree;
}(_verticalBranch["default"]);

exports["default"] = TerminalNodeParseTree;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlcm1pbmFsTm9kZS5qcyJdLCJuYW1lcyI6WyJUZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJ0ZXJtaW5hbE5vZGUiLCJ0b2tlbnMiLCJzaWduaWZpY2FudFRva2VuIiwiZ2V0U2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidHlwZSIsImdldFR5cGUiLCJ0b2tlbkluZGV4Iiwib2ZJbmRleCIsInN0cmluZyIsInN0cmluZ0xlbmd0aCIsImxlbmd0aCIsInZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGgiLCJ2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsIlZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwiZnJvbVdpZHRoIiwidmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJ0ZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJmcm9tU3RyaW5nQW5kVmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImFwcGVuZFRvVG9wIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEscUI7Ozs7Ozs7Ozs7Ozs7OENBQ2NDLFksRUFBY0MsTSxFQUFRO0FBQ3JELFVBQU1DLGdCQUFnQixHQUFHRixZQUFZLENBQUNHLG1CQUFiLEVBQXpCO0FBQUEsVUFDTUMsT0FBTyxHQUFHSixZQUFZLENBQUNLLFVBQWIsRUFEaEI7QUFBQSxVQUVNQyxJQUFJLEdBQUdKLGdCQUFnQixDQUFDSyxPQUFqQixFQUZiO0FBQUEsVUFHTUMsVUFBVSxHQUFHTixnQkFBZ0IsQ0FBQ08sT0FBakIsQ0FBeUJSLE1BQXpCLENBSG5CO0FBQUEsVUFJTVMsTUFBTSxhQUFNTixPQUFOLGNBQWlCRSxJQUFqQixlQUEwQkUsVUFBMUIsTUFKWjtBQUFBLFVBS01HLFlBQVksR0FBR0QsTUFBTSxDQUFDRSxNQUw1QjtBQUFBLFVBTU1DLDRCQUE0QixHQUFHRixZQU5yQztBQUFBLFVBTW1EO0FBQzdDRyxNQUFBQSx1QkFBdUIsR0FBR0MsMkJBQXdCQyxTQUF4QixDQUFrQ0gsNEJBQWxDLENBUGhDO0FBQUEsVUFRTUksc0JBQXNCLEdBQUdILHVCQUF1QixDQUFDSSx5QkFBeEIsRUFSL0I7QUFBQSxVQVNNQyxxQkFBcUIsR0FBR0osMkJBQXdCSyxtQ0FBeEIsQ0FBNERyQixxQkFBNUQsRUFBbUZXLE1BQW5GLEVBQTJGTyxzQkFBM0YsQ0FUOUI7O0FBV0FFLE1BQUFBLHFCQUFxQixDQUFDRSxXQUF0QixDQUFrQ1AsdUJBQWxDO0FBRUEsYUFBT0sscUJBQVA7QUFDRDs7OztFQWhCZ0RKLDBCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSBmcm9tIFwiLi92ZXJ0aWNhbEJyYW5jaFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXJtaW5hbE5vZGVQYXJzZVRyZWUgZXh0ZW5kcyBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSB7XG4gIHN0YXRpYyBmcm9tVGVybWluYWxOb2RlQW5kVG9rZW5zKHRlcm1pbmFsTm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IHRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgICAgY29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgdHlwZSA9IHNpZ25pZmljYW50VG9rZW4uZ2V0VHlwZSgpLFxuICAgICAgICAgIHRva2VuSW5kZXggPSBzaWduaWZpY2FudFRva2VuLm9mSW5kZXgodG9rZW5zKSxcbiAgICAgICAgICBzdHJpbmcgPSBgJHtjb250ZW50fVske3R5cGV9XSgke3Rva2VuSW5kZXh9KWAsXG4gICAgICAgICAgc3RyaW5nTGVuZ3RoID0gc3RyaW5nLmxlbmd0aCxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoID0gc3RyaW5nTGVuZ3RoLCAvLy9cbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21XaWR0aCh2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoKSxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpLFxuICAgICAgICAgIHRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21TdHJpbmdBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKFRlcm1pbmFsTm9kZVBhcnNlVHJlZSwgc3RyaW5nLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKTtcblxuICAgIHRlcm1pbmFsTm9kZVBhcnNlVHJlZS5hcHBlbmRUb1RvcCh2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSk7XG5cbiAgICByZXR1cm4gdGVybWluYWxOb2RlUGFyc2VUcmVlO1xuICB9XG59XG4iXX0=