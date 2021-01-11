"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _nonTerminal = _interopRequireDefault(require("../../common/node/nonTerminal"));

var _array = require("../../utilities/array");

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

var DefinitionsNode = /*#__PURE__*/function (_NonTerminalNode) {
  _inherits(DefinitionsNode, _NonTerminalNode);

  var _super = _createSuper(DefinitionsNode);

  function DefinitionsNode() {
    _classCallCheck(this, DefinitionsNode);

    return _super.apply(this, arguments);
  }

  _createClass(DefinitionsNode, [{
    key: "generateDefinitions",
    value: function generateDefinitions() {
      var childNodes = this.getChildNodes(),
          evenChildNodes = (0, _array.even)(childNodes),
          ///
      definitionNodes = evenChildNodes,
          ///
      definitions = definitionNodes.map(function (definitionNode) {
        var definition = definitionNode.generateDefinition();
        return definition;
      });
      return definitions;
    }
  }], [{
    key: "fromRuleNameAndChildNodes",
    value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
      return _nonTerminal["default"].fromRuleNameAndChildNodes(DefinitionsNode, ruleName, childNodes);
    }
  }]);

  return DefinitionsNode;
}(_nonTerminal["default"]);

exports["default"] = DefinitionsNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZmluaXRpb25zLmpzIl0sIm5hbWVzIjpbIkRlZmluaXRpb25zTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZXZlbkNoaWxkTm9kZXMiLCJkZWZpbml0aW9uTm9kZXMiLCJkZWZpbml0aW9ucyIsIm1hcCIsImRlZmluaXRpb25Ob2RlIiwiZGVmaW5pdGlvbiIsImdlbmVyYXRlRGVmaW5pdGlvbiIsInJ1bGVOYW1lIiwiTm9uVGVybWluYWxOb2RlIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGU7Ozs7Ozs7Ozs7Ozs7MENBQ0c7QUFDcEIsVUFBTUMsVUFBVSxHQUFHLEtBQUtDLGFBQUwsRUFBbkI7QUFBQSxVQUNNQyxjQUFjLEdBQUcsaUJBQUtGLFVBQUwsQ0FEdkI7QUFBQSxVQUMwQztBQUNwQ0csTUFBQUEsZUFBZSxHQUFHRCxjQUZ4QjtBQUFBLFVBRXdDO0FBQ2xDRSxNQUFBQSxXQUFXLEdBQUdELGVBQWUsQ0FBQ0UsR0FBaEIsQ0FBb0IsVUFBQ0MsY0FBRCxFQUFvQjtBQUNwRCxZQUFNQyxVQUFVLEdBQUdELGNBQWMsQ0FBQ0Usa0JBQWYsRUFBbkI7QUFFQSxlQUFPRCxVQUFQO0FBQ0QsT0FKYSxDQUhwQjtBQVNBLGFBQU9ILFdBQVA7QUFDRDs7OzhDQUVnQ0ssUSxFQUFVVCxVLEVBQVk7QUFBRSxhQUFPVSx3QkFBZ0JDLHlCQUFoQixDQUEwQ1osZUFBMUMsRUFBMkRVLFFBQTNELEVBQXFFVCxVQUFyRSxDQUFQO0FBQTBGOzs7O0VBZHhHVSx1QiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlIGZyb20gXCIuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBldmVuIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWZpbml0aW9uc05vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZURlZmluaXRpb25zKCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBldmVuQ2hpbGROb2RlcyA9IGV2ZW4oY2hpbGROb2RlcyksICAvLy9cbiAgICAgICAgICBkZWZpbml0aW9uTm9kZXMgPSBldmVuQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9uTm9kZXMubWFwKChkZWZpbml0aW9uTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IGRlZmluaXRpb25Ob2RlLmdlbmVyYXRlRGVmaW5pdGlvbigpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gZGVmaW5pdGlvbjtcbiAgICAgICAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gZGVmaW5pdGlvbnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcykgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoRGVmaW5pdGlvbnNOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcyk7IH1cbn1cbiJdfQ==