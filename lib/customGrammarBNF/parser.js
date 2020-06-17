"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _parser = _interopRequireDefault(require("../bnf/parser"));

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

var CustomGrammarBNFParser = /*#__PURE__*/function (_BNFParser) {
  _inherits(CustomGrammarBNFParser, _BNFParser);

  var _super = _createSuper(CustomGrammarBNFParser);

  function CustomGrammarBNFParser() {
    _classCallCheck(this, CustomGrammarBNFParser);

    return _super.apply(this, arguments);
  }

  _createClass(CustomGrammarBNFParser, null, [{
    key: "fromRules",
    value: function fromRules(rules) {
      return _parser["default"].fromRules(CustomGrammarBNFParser, rules);
    }
  }, {
    key: "fromNothing",
    value: function fromNothing() {
      var bnfParser = _parser["default"].fromNothing(),
          rules = bnfParser.getRules(),
          customGrammarBNFParser = CustomGrammarBNFParser.fromRules(rules);

      return customGrammarBNFParser;
    }
  }]);

  return CustomGrammarBNFParser;
}(_parser["default"]);

exports["default"] = CustomGrammarBNFParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlci5qcyJdLCJuYW1lcyI6WyJDdXN0b21HcmFtbWFyQk5GUGFyc2VyIiwicnVsZXMiLCJCTkZQYXJzZXIiLCJmcm9tUnVsZXMiLCJibmZQYXJzZXIiLCJmcm9tTm90aGluZyIsImdldFJ1bGVzIiwiY3VzdG9tR3JhbW1hckJORlBhcnNlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLHNCOzs7Ozs7Ozs7Ozs7OzhCQUNGQyxLLEVBQU87QUFBRSxhQUFPQyxtQkFBVUMsU0FBVixDQUFvQkgsc0JBQXBCLEVBQTRDQyxLQUE1QyxDQUFQO0FBQTREOzs7a0NBRWpFO0FBQ25CLFVBQU1HLFNBQVMsR0FBR0YsbUJBQVVHLFdBQVYsRUFBbEI7QUFBQSxVQUNNSixLQUFLLEdBQUdHLFNBQVMsQ0FBQ0UsUUFBVixFQURkO0FBQUEsVUFFTUMsc0JBQXNCLEdBQUdQLHNCQUFzQixDQUFDRyxTQUF2QixDQUFpQ0YsS0FBakMsQ0FGL0I7O0FBSUEsYUFBT00sc0JBQVA7QUFDRDs7OztFQVRpREwsa0IiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEJORlBhcnNlciBmcm9tIFwiLi4vYm5mL3BhcnNlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21HcmFtbWFyQk5GUGFyc2VyIGV4dGVuZHMgQk5GUGFyc2VyIHtcbiAgc3RhdGljIGZyb21SdWxlcyhydWxlcykgeyByZXR1cm4gQk5GUGFyc2VyLmZyb21SdWxlcyhDdXN0b21HcmFtbWFyQk5GUGFyc2VyLCBydWxlcyk7IH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgYm5mUGFyc2VyID0gQk5GUGFyc2VyLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcnVsZXMgPSBibmZQYXJzZXIuZ2V0UnVsZXMoKSxcbiAgICAgICAgICBjdXN0b21HcmFtbWFyQk5GUGFyc2VyID0gQ3VzdG9tR3JhbW1hckJORlBhcnNlci5mcm9tUnVsZXMocnVsZXMpO1xuXG4gICAgcmV0dXJuIGN1c3RvbUdyYW1tYXJCTkZQYXJzZXI7XG4gIH1cbn1cbiJdfQ==