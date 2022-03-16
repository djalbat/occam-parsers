"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _wildcard = _interopRequireDefault(require("../../part/terminal/wildcard"));
var _nonTerminal = _interopRequireDefault(require("../../node/nonTerminal"));
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
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
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
var WildcardBNFNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(WildcardBNFNode, NonTerminalNode);
    var _super = _createSuper(WildcardBNFNode);
    function WildcardBNFNode() {
        _classCallCheck(this, WildcardBNFNode);
        return _super.apply(this, arguments);
    }
    _createClass(WildcardBNFNode, [
        {
            key: "generatePart",
            value: function generatePart(lookAhead) {
                var wildcardPart = new _wildcard.default();
                return wildcardPart;
            }
        }
    ], [
        {
            key: "fromRuleNameAndChildNodes",
            value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
                return _nonTerminal.default.fromRuleNameAndChildNodes(WildcardBNFNode, ruleName, childNodes);
            }
        }
    ]);
    return WildcardBNFNode;
}(_nonTerminal.default);
exports.default = WildcardBNFNode;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2JuZi93aWxkY2FyZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFdpbGRjYXJkUGFydCBmcm9tIFwiLi4vLi4vcGFydC90ZXJtaW5hbC93aWxkY2FyZFwiO1xuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9ub25UZXJtaW5hbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaWxkY2FyZEJORk5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZVBhcnQobG9va0FoZWFkKSB7XG4gICAgY29uc3Qgd2lsZGNhcmRQYXJ0ID0gbmV3IFdpbGRjYXJkUGFydCgpO1xuXG4gICAgcmV0dXJuIHdpbGRjYXJkUGFydDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhXaWxkY2FyZEJORk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTsgfVxufVxuIl0sIm5hbWVzIjpbIldpbGRjYXJkQk5GTm9kZSIsImdlbmVyYXRlUGFydCIsImxvb2tBaGVhZCIsIndpbGRjYXJkUGFydCIsIldpbGRjYXJkUGFydCIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJOb25UZXJtaW5hbE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVksV0FBQSxDQUFDOzs7RUFBYjt3QkFBQTtBQUV5QixHQUE4QixDQUE5QixTQUE4QjtBQUMzQixHQUF3QixDQUF4QixZQUF3Qjs7Ozs7Ozs7Ozs7Ozs7OzhEQUhwRDtzQ0FBQTs2REFBQTtpRUFBQTs7Ozt3RUFBQTtnRUFBQTs7Ozs7O0tBQUE7Ozs7Ozs7Ozs7Ozs7TUFBQTt5REFBQTs7Ozs7Ozs7Ozs7Ozs7O3VCQUFBOztLQUFBOzs7OzJCQUFBOzs7Ozs7OztxRkFBQTs7Ozs7Ozs7Ozs7O21FQUFBOztpREFBQTs7Ozs7QUFLZSxHQUFLLENBQUNBLGVBQWUsaUJBQXJCLFFBQVE7K0NBTHZCOzthQUtxQkEsZUFBZTs4Q0FMcEM7Ozs7O1lBTUVDLEdBQVksRUFBWkEsQ0FBWTttQkFBWkEsUUFBUSxDQUFSQSxZQUFZLENBQUNDLFNBQVMsRUFBRSxDQUFDO2dCQUN2QixHQUFLLENBQUNDLFlBQVksR0FBRyxHQUFHLENBQUNDLFNBQVk7Z0JBRXJDLE1BQU0sQ0FBQ0QsWUFBWTtZQUNyQixDQUFDOzs7O1lBRU1FLEdBQXlCLEVBQXpCQSxDQUF5QjttQkFBaEMsUUFBUSxDQUFEQSx5QkFBeUIsQ0FBQ0MsUUFBUSxFQUFFQyxVQUFVLEVBQUUsQ0FBQztnQkFBQyxNQUFNLENBQUNDLFlBQWUsU0FBQ0gseUJBQXlCLENBQUNMLGVBQWUsRUFBRU0sUUFBUSxFQUFFQyxVQUFVO1lBQUcsQ0FBQzs7TUFacko7O0VBSzZDQyxZQUFlO2tCQUF2Q1IsZUFBZSxBQUxwQyJ9