"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

var RuleNameParseTree = /*#__PURE__*/function (_VerticalBranchParseT) {
  _inherits(RuleNameParseTree, _VerticalBranchParseT);

  var _super = _createSuper(RuleNameParseTree);

  function RuleNameParseTree() {
    _classCallCheck(this, RuleNameParseTree);

    return _super.apply(this, arguments);
  }

  _createClass(RuleNameParseTree, null, [{
    key: "fromNonTerminalNodeAndTokens",
    value: function fromNonTerminalNodeAndTokens(nonTerminalNode, tokens) {
      var ruleName = nonTerminalNode.getRuleName(),
          tokenIndexes = tokenIndexesFromNonTerminalNodeAndTokens(nonTerminalNode, tokens),
          string = "".concat(ruleName).concat(tokenIndexes),
          stringLength = string.length,
          verticalBranchParseTreeWidth = stringLength,
          ///
      verticalBranchParseTree = _verticalBranch["default"].fromWidth(verticalBranchParseTreeWidth),
          verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(),
          ruleNameParseTree = _verticalBranch["default"].fromStringAndVerticalBranchPosition(RuleNameParseTree, string, verticalBranchPosition);

      ruleNameParseTree.appendToTop(verticalBranchParseTree);
      return ruleNameParseTree;
    }
  }]);

  return RuleNameParseTree;
}(_verticalBranch["default"]);

exports["default"] = RuleNameParseTree;

function tokenIndexesFromNonTerminalNodeAndTokens(nonTerminalNode, tokens) {
  var firstSignificantToken = nonTerminalNode.getFirstSignificantToken(),
      lastSignificantToken = nonTerminalNode.getLastSignificantToken(),
      firstSignificantTokenIndex = tokens.indexOf(firstSignificantToken),
      lastSignificantTokenIndex = tokens.indexOf(lastSignificantToken),
      tokenIndexes = firstSignificantTokenIndex !== lastSignificantTokenIndex ? "(".concat(firstSignificantTokenIndex, "-").concat(lastSignificantTokenIndex, ")") : "(".concat(firstSignificantTokenIndex, ")");
  return tokenIndexes;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVOYW1lLmpzIl0sIm5hbWVzIjpbIlJ1bGVOYW1lUGFyc2VUcmVlIiwibm9uVGVybWluYWxOb2RlIiwidG9rZW5zIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInRva2VuSW5kZXhlcyIsInRva2VuSW5kZXhlc0Zyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnMiLCJzdHJpbmciLCJzdHJpbmdMZW5ndGgiLCJsZW5ndGgiLCJ2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoIiwidmVydGljYWxCcmFuY2hQYXJzZVRyZWUiLCJWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsImZyb21XaWR0aCIsInZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJnZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwicnVsZU5hbWVQYXJzZVRyZWUiLCJmcm9tU3RyaW5nQW5kVmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImFwcGVuZFRvVG9wIiwiZmlyc3RTaWduaWZpY2FudFRva2VuIiwiZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuIiwibGFzdFNpZ25pZmljYW50VG9rZW4iLCJnZXRMYXN0U2lnbmlmaWNhbnRUb2tlbiIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiaW5kZXhPZiIsImxhc3RTaWduaWZpY2FudFRva2VuSW5kZXgiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxpQjs7Ozs7Ozs7Ozs7OztpREFDaUJDLGUsRUFBaUJDLE0sRUFBUTtBQUMzRCxVQUFNQyxRQUFRLEdBQUdGLGVBQWUsQ0FBQ0csV0FBaEIsRUFBakI7QUFBQSxVQUNNQyxZQUFZLEdBQUdDLHdDQUF3QyxDQUFDTCxlQUFELEVBQWtCQyxNQUFsQixDQUQ3RDtBQUFBLFVBRU1LLE1BQU0sYUFBTUosUUFBTixTQUFpQkUsWUFBakIsQ0FGWjtBQUFBLFVBR01HLFlBQVksR0FBR0QsTUFBTSxDQUFDRSxNQUg1QjtBQUFBLFVBSU1DLDRCQUE0QixHQUFHRixZQUpyQztBQUFBLFVBSW1EO0FBQzdDRyxNQUFBQSx1QkFBdUIsR0FBR0MsMkJBQXdCQyxTQUF4QixDQUFrQ0gsNEJBQWxDLENBTGhDO0FBQUEsVUFNTUksc0JBQXNCLEdBQUdILHVCQUF1QixDQUFDSSx5QkFBeEIsRUFOL0I7QUFBQSxVQU9NQyxpQkFBaUIsR0FBR0osMkJBQXdCSyxtQ0FBeEIsQ0FBNERqQixpQkFBNUQsRUFBK0VPLE1BQS9FLEVBQXVGTyxzQkFBdkYsQ0FQMUI7O0FBU0FFLE1BQUFBLGlCQUFpQixDQUFDRSxXQUFsQixDQUE4QlAsdUJBQTlCO0FBRUEsYUFBT0ssaUJBQVA7QUFDRDs7OztFQWQ0Q0osMEI7Ozs7QUFpQi9DLFNBQVNOLHdDQUFULENBQWtETCxlQUFsRCxFQUFtRUMsTUFBbkUsRUFBMkU7QUFDekUsTUFBTWlCLHFCQUFxQixHQUFHbEIsZUFBZSxDQUFDbUIsd0JBQWhCLEVBQTlCO0FBQUEsTUFDTUMsb0JBQW9CLEdBQUdwQixlQUFlLENBQUNxQix1QkFBaEIsRUFEN0I7QUFBQSxNQUVNQywwQkFBMEIsR0FBR3JCLE1BQU0sQ0FBQ3NCLE9BQVAsQ0FBZUwscUJBQWYsQ0FGbkM7QUFBQSxNQUdNTSx5QkFBeUIsR0FBR3ZCLE1BQU0sQ0FBQ3NCLE9BQVAsQ0FBZUgsb0JBQWYsQ0FIbEM7QUFBQSxNQUlNaEIsWUFBWSxHQUFJa0IsMEJBQTBCLEtBQUtFLHlCQUFoQyxjQUNLRiwwQkFETCxjQUNtQ0UseUJBRG5DLG9CQUVPRiwwQkFGUCxNQUpyQjtBQVFBLFNBQU9sQixZQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIGZyb20gXCIuL3ZlcnRpY2FsQnJhbmNoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVOYW1lUGFyc2VUcmVlIGV4dGVuZHMgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUge1xuICBzdGF0aWMgZnJvbU5vblRlcm1pbmFsTm9kZUFuZFRva2Vucyhub25UZXJtaW5hbE5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgdG9rZW5JbmRleGVzID0gdG9rZW5JbmRleGVzRnJvbU5vblRlcm1pbmFsTm9kZUFuZFRva2Vucyhub25UZXJtaW5hbE5vZGUsIHRva2VucyksXG4gICAgICAgICAgc3RyaW5nID0gYCR7cnVsZU5hbWV9JHt0b2tlbkluZGV4ZXN9YCxcbiAgICAgICAgICBzdHJpbmdMZW5ndGggPSBzdHJpbmcubGVuZ3RoLFxuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGggPSBzdHJpbmdMZW5ndGgsIC8vL1xuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZnJvbVdpZHRoKHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGgpLFxuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5nZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCksXG4gICAgICAgICAgcnVsZU5hbWVQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tU3RyaW5nQW5kVmVydGljYWxCcmFuY2hQb3NpdGlvbihSdWxlTmFtZVBhcnNlVHJlZSwgc3RyaW5nLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKTtcblxuICAgIHJ1bGVOYW1lUGFyc2VUcmVlLmFwcGVuZFRvVG9wKHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlKTtcblxuICAgIHJldHVybiBydWxlTmFtZVBhcnNlVHJlZTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0b2tlbkluZGV4ZXNGcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IGZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IG5vblRlcm1pbmFsTm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgbGFzdFNpZ25pZmljYW50VG9rZW4gPSBub25UZXJtaW5hbE5vZGUuZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSB0b2tlbnMuaW5kZXhPZihmaXJzdFNpZ25pZmljYW50VG9rZW4pLFxuICAgICAgICBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gdG9rZW5zLmluZGV4T2YobGFzdFNpZ25pZmljYW50VG9rZW4pLFxuICAgICAgICB0b2tlbkluZGV4ZXMgPSAoZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggIT09IGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXgpID9cbiAgICAgICAgICAgICAgICAgICAgICAgIGAoJHtmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleH0tJHtsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4fSlgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYCgke2ZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4fSlgO1xuXG4gIHJldHVybiB0b2tlbkluZGV4ZXM7XG59XG4iXX0=