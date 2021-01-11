"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _textarea = _interopRequireDefault(require("../textarea"));

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BNFTextarea = /*#__PURE__*/function (_Textarea) {
  _inherits(BNFTextarea, _Textarea);

  var _super = _createSuper(BNFTextarea);

  function BNFTextarea() {
    _classCallCheck(this, BNFTextarea);

    return _super.apply(this, arguments);
  }

  _createClass(BNFTextarea, [{
    key: "getBNF",
    value: function getBNF() {
      var value = this.getValue(),
          bnf = value; ///

      return bnf;
    }
  }, {
    key: "setBNF",
    value: function setBNF(bnf) {
      var value = bnf;
      this.setValue(value);
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      var getBNF = this.getBNF.bind(this),
          setBNF = this.setBNF.bind(this);
      return {
        getBNF: getBNF,
        setBNF: setBNF
      };
    }
  }]);

  return BNFTextarea;
}(_textarea["default"]);

exports["default"] = BNFTextarea;

_defineProperty(BNFTextarea, "defaultProperties", {
  className: "bnf",
  spellCheck: "false"
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJuZi5qcyJdLCJuYW1lcyI6WyJCTkZUZXh0YXJlYSIsInZhbHVlIiwiZ2V0VmFsdWUiLCJibmYiLCJzZXRWYWx1ZSIsImdldEJORiIsImJpbmQiLCJzZXRCTkYiLCJUZXh0YXJlYSIsImNsYXNzTmFtZSIsInNwZWxsQ2hlY2siXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFc7Ozs7Ozs7Ozs7Ozs7NkJBQ1Y7QUFDUCxVQUFNQyxLQUFLLEdBQUcsS0FBS0MsUUFBTCxFQUFkO0FBQUEsVUFDTUMsR0FBRyxHQUFHRixLQURaLENBRE8sQ0FFWTs7QUFFbkIsYUFBT0UsR0FBUDtBQUNEOzs7MkJBRU1BLEcsRUFBSztBQUNWLFVBQU1GLEtBQUssR0FBR0UsR0FBZDtBQUVBLFdBQUtDLFFBQUwsQ0FBY0gsS0FBZDtBQUNEOzs7b0NBRWU7QUFDZCxVQUFNSSxNQUFNLEdBQUcsS0FBS0EsTUFBTCxDQUFZQyxJQUFaLENBQWlCLElBQWpCLENBQWY7QUFBQSxVQUNNQyxNQUFNLEdBQUcsS0FBS0EsTUFBTCxDQUFZRCxJQUFaLENBQWlCLElBQWpCLENBRGY7QUFHQSxhQUFRO0FBQ05ELFFBQUFBLE1BQU0sRUFBTkEsTUFETTtBQUVORSxRQUFBQSxNQUFNLEVBQU5BO0FBRk0sT0FBUjtBQUlEOzs7O0VBdEJzQ0Msb0I7Ozs7Z0JBQXBCUixXLHVCQXdCUTtBQUN6QlMsRUFBQUEsU0FBUyxFQUFFLEtBRGM7QUFFekJDLEVBQUFBLFVBQVUsRUFBRTtBQUZhLEMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHRhcmVhIGZyb20gXCIuLi90ZXh0YXJlYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCTkZUZXh0YXJlYSBleHRlbmRzIFRleHRhcmVhIHtcbiAgZ2V0Qk5GKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIGJuZiA9IHZhbHVlOyAvLy9cblxuICAgIHJldHVybiBibmY7XG4gIH1cblxuICBzZXRCTkYoYm5mKSB7XG4gICAgY29uc3QgdmFsdWUgPSBibmY7XG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0Qk5GID0gdGhpcy5nZXRCTkYuYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXRCTkYgPSB0aGlzLnNldEJORi5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRCTkYsXG4gICAgICBzZXRCTkZcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiYm5mXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiXG4gIH07XG59XG4iXX0=