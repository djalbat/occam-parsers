"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EpsilonBNFNode;
    }
});
var _occamLexers = require("occam-lexers");
var _terminal = /*#__PURE__*/ _interopRequireDefault(require("../terminal"));
var _epsilonNode = /*#__PURE__*/ _interopRequireDefault(require("../../parseTree/epsilonNode"));
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
var epsilon = _occamLexers.specialSymbols.epsilon;
var EpsilonBNFNode = /*#__PURE__*/ function(TerminalNode) {
    _inherits(EpsilonBNFNode, TerminalNode);
    var _super = _createSuper(EpsilonBNFNode);
    function EpsilonBNFNode() {
        _classCallCheck(this, EpsilonBNFNode);
        return _super.apply(this, arguments);
    }
    _createClass(EpsilonBNFNode, [
        {
            key: "getType",
            value: function getType() {
                var type = null; ///
                return type;
            }
        },
        {
            key: "getContent",
            value: function getContent() {
                var content = epsilon; ///
                return content;
            }
        },
        {
            key: "asParseTree",
            value: function asParseTree(tokens) {
                var epsilonNodeParseTree = _epsilonNode.default.fromNothing(), parseTree = epsilonNodeParseTree; ///
                return parseTree;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var significantToken = null, epsilonBNFNode = _terminal.default.fromSignificantToken(EpsilonBNFNode, significantToken);
                return epsilonBNFNode;
            }
        }
    ]);
    return EpsilonBNFNode;
}(_terminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL3Rlcm1pbmFsL2Vwc2lsb24uanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgVGVybWluYWxOb2RlIGZyb20gXCIuLi90ZXJtaW5hbFwiO1xuaW1wb3J0IEVwc2lsb25Ob2RlUGFyc2VUcmVlIGZyb20gXCIuLi8uLi9wYXJzZVRyZWUvZXBzaWxvbk5vZGVcIjtcblxuY29uc3QgeyBlcHNpbG9uIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXBzaWxvbkJORk5vZGUgZXh0ZW5kcyBUZXJtaW5hbE5vZGUge1xuICBnZXRUeXBlKCkge1xuICAgIGNvbnN0IHR5cGUgPSBudWxsOyAgLy8vXG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGVwc2lsb247ICAvLy9cblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgYXNQYXJzZVRyZWUodG9rZW5zKSB7XG4gICAgY29uc3QgZXBzaWxvbk5vZGVQYXJzZVRyZWUgPSBFcHNpbG9uTm9kZVBhcnNlVHJlZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHBhcnNlVHJlZSA9IGVwc2lsb25Ob2RlUGFyc2VUcmVlOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW4gPSBudWxsLFxuICAgICAgICAgIGVwc2lsb25CTkZOb2RlID0gVGVybWluYWxOb2RlLmZyb21TaWduaWZpY2FudFRva2VuKEVwc2lsb25CTkZOb2RlLCBzaWduaWZpY2FudFRva2VuKTtcblxuICAgIHJldHVybiBlcHNpbG9uQk5GTm9kZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJFcHNpbG9uQk5GTm9kZSIsImVwc2lsb24iLCJzcGVjaWFsU3ltYm9scyIsImdldFR5cGUiLCJ0eXBlIiwiZ2V0Q29udGVudCIsImNvbnRlbnQiLCJhc1BhcnNlVHJlZSIsInRva2VucyIsImVwc2lsb25Ob2RlUGFyc2VUcmVlIiwiRXBzaWxvbk5vZGVQYXJzZVRyZWUiLCJmcm9tTm90aGluZyIsInBhcnNlVHJlZSIsInNpZ25pZmljYW50VG9rZW4iLCJlcHNpbG9uQk5GTm9kZSIsIlRlcm1pbmFsTm9kZSIsImZyb21TaWduaWZpY2FudFRva2VuIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFTUUEsY0FBYzs7OzJCQVBKLGNBQWM7NkRBRXBCLGFBQWE7Z0VBQ0wsNkJBQTZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlELElBQU0sQUFBRUMsT0FBTyxHQUFLQyxZQUFjLGVBQUEsQ0FBMUJELE9BQU8sQUFBbUIsQUFBQztBQUVwQixJQUFBLEFBQU1ELGNBQWMsaUJBQXBCO2NBQU1BLGNBQWM7OEJBQWRBLGNBQWM7YUFBZEEsY0FBYzs4QkFBZEEsY0FBYzs7O2lCQUFkQSxjQUFjOztZQUNqQ0csR0FBTyxFQUFQQSxTQUFPO21CQUFQQSxTQUFBQSxPQUFPLEdBQUc7Z0JBQ1IsSUFBTUMsSUFBSSxHQUFHLElBQUksQUFBQyxFQUFFLEdBQUc7Z0JBRXZCLE9BQU9BLElBQUksQ0FBQztZQUNkLENBQUM7OztZQUVEQyxHQUFVLEVBQVZBLFlBQVU7bUJBQVZBLFNBQUFBLFVBQVUsR0FBRztnQkFDWCxJQUFNQyxPQUFPLEdBQUdMLE9BQU8sQUFBQyxFQUFFLEdBQUc7Z0JBRTdCLE9BQU9LLE9BQU8sQ0FBQztZQUNqQixDQUFDOzs7WUFFREMsR0FBVyxFQUFYQSxhQUFXO21CQUFYQSxTQUFBQSxXQUFXLENBQUNDLE1BQU0sRUFBRTtnQkFDbEIsSUFBTUMsb0JBQW9CLEdBQUdDLFlBQW9CLFFBQUEsQ0FBQ0MsV0FBVyxFQUFFLEVBQ3pEQyxTQUFTLEdBQUdILG9CQUFvQixBQUFDLEVBQUUsR0FBRztnQkFFNUMsT0FBT0csU0FBUyxDQUFDO1lBQ25CLENBQUM7Ozs7WUFFTUQsR0FBVyxFQUFYQSxhQUFXO21CQUFsQixTQUFPQSxXQUFXLEdBQUc7Z0JBQ25CLElBQU1FLGdCQUFnQixHQUFHLElBQUksRUFDdkJDLGNBQWMsR0FBR0MsU0FBWSxRQUFBLENBQUNDLG9CQUFvQixDQXRCdkNoQixjQUFjLEVBc0IwQ2EsZ0JBQWdCLENBQUMsQUFBQztnQkFFM0YsT0FBT0MsY0FBYyxDQUFDO1lBQ3hCLENBQUM7OztXQXpCa0JkLGNBQWM7Q0EwQmxDLENBMUIyQ2UsU0FBWSxRQUFBLENBMEJ2RCJ9