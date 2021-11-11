"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
var _terminal = _interopRequireDefault(require("../terminal"));
var _epsilonNode = _interopRequireDefault(require("../../parseTree/epsilonNode"));
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
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
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
var EpsilonNode = /*#__PURE__*/ function(TerminalNode) {
    _inherits(EpsilonNode, TerminalNode);
    var _super = _createSuper(EpsilonNode);
    function EpsilonNode() {
        _classCallCheck(this, EpsilonNode);
        return _super.apply(this, arguments);
    }
    _createClass(EpsilonNode, [
        {
            key: "getContent",
            value: function getContent() {
                var content = epsilon; ///
                return content;
            }
        },
        {
            key: "isEpsilonNode",
            value: function isEpsilonNode() {
                var epsilonNode = true;
                return epsilonNode;
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
                var significantToken = null, epsilonNode = _terminal.default.fromSignificantToken(EpsilonNode, significantToken);
                return epsilonNode;
            }
        }
    ]);
    return EpsilonNode;
}(_terminal.default);
exports.default = EpsilonNode;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21tb24vbm9kZS90ZXJtaW5hbC9lcHNpbG9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IFRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vdGVybWluYWxcIjtcbmltcG9ydCBFcHNpbG9uTm9kZVBhcnNlVHJlZSBmcm9tIFwiLi4vLi4vcGFyc2VUcmVlL2Vwc2lsb25Ob2RlXCI7XG5cbmNvbnN0IHsgZXBzaWxvbiB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVwc2lsb25Ob2RlIGV4dGVuZHMgVGVybWluYWxOb2RlIHtcbiAgZ2V0Q29udGVudCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZXBzaWxvbjsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpc0Vwc2lsb25Ob2RlKCkge1xuICAgIGNvbnN0IGVwc2lsb25Ob2RlID0gdHJ1ZTtcbiAgICBcbiAgICByZXR1cm4gZXBzaWxvbk5vZGU7XG4gIH1cblxuICBhc1BhcnNlVHJlZSh0b2tlbnMpIHtcbiAgICBjb25zdCBlcHNpbG9uTm9kZVBhcnNlVHJlZSA9IEVwc2lsb25Ob2RlUGFyc2VUcmVlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcGFyc2VUcmVlID0gZXBzaWxvbk5vZGVQYXJzZVRyZWU7ICAvLy9cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IG51bGwsXG4gICAgICAgICAgZXBzaWxvbk5vZGUgPSBUZXJtaW5hbE5vZGUuZnJvbVNpZ25pZmljYW50VG9rZW4oRXBzaWxvbk5vZGUsIHNpZ25pZmljYW50VG9rZW4pO1xuXG4gICAgcmV0dXJuIGVwc2lsb25Ob2RlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiZXBzaWxvbiIsIkVwc2lsb25Ob2RlIiwiZ2V0Q29udGVudCIsImNvbnRlbnQiLCJpc0Vwc2lsb25Ob2RlIiwiZXBzaWxvbk5vZGUiLCJhc1BhcnNlVHJlZSIsInRva2VucyIsImVwc2lsb25Ob2RlUGFyc2VUcmVlIiwiZnJvbU5vdGhpbmciLCJwYXJzZVRyZWUiLCJzaWduaWZpY2FudFRva2VuIiwiZnJvbVNpZ25pZmljYW50VG9rZW4iXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRW1CLEdBQWMsQ0FBZCxZQUFjO0FBRXBCLEdBQWEsQ0FBYixTQUFhO0FBQ0wsR0FBNkIsQ0FBN0IsWUFBNkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUQsR0FBSyxDQUFHQSxPQUFPLEdBTGdCLFlBQWMsZ0JBS3JDQSxPQUFPO0lBRU1DLFdBQVcsaUJBQWpCLFFBQVE7Y0FBRkEsV0FBVzs4QkFBWEEsV0FBVzthQUFYQSxXQUFXOzhCQUFYQSxXQUFXOzs7aUJBQVhBLFdBQVc7O1lBQzlCQyxHQUFVLEVBQVZBLENBQVU7bUJBQVZBLFFBQVEsQ0FBUkEsVUFBVSxHQUFHLENBQUM7Z0JBQ1osR0FBSyxDQUFDQyxPQUFPLEdBQUdILE9BQU8sQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRTdCLE1BQU0sQ0FBQ0csT0FBTztZQUNoQixDQUFDOzs7WUFFREMsR0FBYSxFQUFiQSxDQUFhO21CQUFiQSxRQUFRLENBQVJBLGFBQWEsR0FBRyxDQUFDO2dCQUNmLEdBQUssQ0FBQ0MsV0FBVyxHQUFHLElBQUk7Z0JBRXhCLE1BQU0sQ0FBQ0EsV0FBVztZQUNwQixDQUFDOzs7WUFFREMsR0FBVyxFQUFYQSxDQUFXO21CQUFYQSxRQUFRLENBQVJBLFdBQVcsQ0FBQ0MsTUFBTSxFQUFFLENBQUM7Z0JBQ25CLEdBQUssQ0FBQ0Msb0JBQW9CLEdBbEJHLFlBQTZCLFNBa0JSQyxXQUFXLElBQ3ZEQyxTQUFTLEdBQUdGLG9CQUFvQixDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFNUMsTUFBTSxDQUFDRSxTQUFTO1lBQ2xCLENBQUM7Ozs7WUFFTUQsR0FBVyxFQUFYQSxDQUFXO21CQUFsQixRQUFRLENBQURBLFdBQVcsR0FBRyxDQUFDO2dCQUNwQixHQUFLLENBQUNFLGdCQUFnQixHQUFHLElBQUksRUFDdkJOLFdBQVcsR0EzQkksU0FBYSxTQTJCRE8sb0JBQW9CLENBQUNYLFdBQVcsRUFBRVUsZ0JBQWdCO2dCQUVuRixNQUFNLENBQUNOLFdBQVc7WUFDcEIsQ0FBQzs7O1dBekJrQkosV0FBVztFQUxQLFNBQWE7a0JBS2pCQSxXQUFXIn0=