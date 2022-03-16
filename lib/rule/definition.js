"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _rule = _interopRequireDefault(require("../rule"));
var _definition = _interopRequireDefault(require("../node/bnf/definition"));
var _definition1 = _interopRequireDefault(require("../definition/definition"));
var _ruleNames = require("../ruleNames");
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var DefinitionRule = /*#__PURE__*/ function(Rule) {
    _inherits(DefinitionRule, Rule);
    var _super = _createSuper(DefinitionRule);
    function DefinitionRule() {
        _classCallCheck(this, DefinitionRule);
        var name = _ruleNames.DefinitionRuleName, definitionDefinition = new _definition1.default(), definitions = [
            definitionDefinition
        ], Node = _definition.default;
        return _super.call(this, name, definitions, Node);
    }
    return DefinitionRule;
}(_rule.default);
exports.default = DefinitionRule;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL2RlZmluaXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi9ydWxlXCI7XG5pbXBvcnQgRGVmaW5pdGlvbkJORk5vZGUgZnJvbSBcIi4uL25vZGUvYm5mL2RlZmluaXRpb25cIjtcbmltcG9ydCBEZWZpbml0aW9uRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvbi9kZWZpbml0aW9uXCI7XG5cbmltcG9ydCB7IERlZmluaXRpb25SdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVmaW5pdGlvblJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgbmFtZSA9IERlZmluaXRpb25SdWxlTmFtZSxcbiAgICAgICAgICBkZWZpbml0aW9uRGVmaW5pdGlvbiA9IG5ldyBEZWZpbml0aW9uRGVmaW5pdGlvbigpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgZGVmaW5pdGlvbkRlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBEZWZpbml0aW9uQk5GTm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkRlZmluaXRpb25SdWxlIiwibmFtZSIsIkRlZmluaXRpb25SdWxlTmFtZSIsImRlZmluaXRpb25EZWZpbml0aW9uIiwiRGVmaW5pdGlvbkRlZmluaXRpb24iLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJEZWZpbml0aW9uQk5GTm9kZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVksV0FBQSxDQUFDOzs7RUFBYjt3QkFBQTtBQUVpQixHQUFTLENBQVQsS0FBUztBQUNJLEdBQXdCLENBQXhCLFdBQXdCO0FBQ3JCLEdBQTBCLENBQTFCLFlBQTBCO0FBRXhCLEdBQWMsQ0FBZCxVQUFjOzs7Ozs7Ozs7Ozs7Ozs7S0FOakQ7Ozs7Ozs7Ozs7Ozs7TUFBQTt5REFBQTs7Ozs7Ozs7Ozs7Ozs7O3VCQUFBOztLQUFBOzs7OzJCQUFBOzs7Ozs7OztxRkFBQTs7Ozs7Ozs7Ozs7O21FQUFBOztpREFBQTs7Ozs7QUFRZSxHQUFLLENBQUNBLGNBQWMsaUJBQXBCLFFBQVE7bUNBUnZCOzthQVFxQkEsY0FBYzs2Q0FSbkM7UUFVSSxHQUFLLENBQUNDLElBQUksR0FBR0MsVUFBa0IscUJBQ3pCQyxvQkFBb0IsR0FBRyxHQUFHLENBQUNDLFlBQW9CLFlBQy9DQyxXQUFXLEdBQUcsQ0FBQztZQUNiRixvQkFBb0I7UUFDdEIsQ0FBQyxFQUNERyxJQUFJLEdBQUdDLFdBQWlCO2lDQUV4Qk4sSUFBSSxFQUFFSSxXQUFXLEVBQUVDLElBQUk7OztFQVRXRSxLQUFJO2tCQUEzQlIsY0FBYyxBQVJuQyJ9