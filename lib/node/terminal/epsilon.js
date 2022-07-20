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
var _terminal = /*#__PURE__*/ _interopRequireDefault(require("../terminal"));
var _epsilonNode = /*#__PURE__*/ _interopRequireDefault(require("../../parseTree/epsilonNode"));
var _constants = require("../../constants");
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
var EpsilonBNFNode = /*#__PURE__*/ function(TerminalNode) {
    _inherits(EpsilonBNFNode, TerminalNode);
    var _super = _createSuper(EpsilonBNFNode);
    function EpsilonBNFNode() {
        _classCallCheck(this, EpsilonBNFNode);
        return _super.apply(this, arguments);
    }
    _createClass(EpsilonBNFNode, [
        {
            key: "getContent",
            value: function getContent() {
                var content = _constants.EPSILON;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL3Rlcm1pbmFsL2Vwc2lsb24uanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXJtaW5hbE5vZGUgZnJvbSBcIi4uL3Rlcm1pbmFsXCI7XG5pbXBvcnQgRXBzaWxvbk5vZGVQYXJzZVRyZWUgZnJvbSBcIi4uLy4uL3BhcnNlVHJlZS9lcHNpbG9uTm9kZVwiO1xuXG5pbXBvcnQgeyBFUFNJTE9OIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcHNpbG9uQk5GTm9kZSBleHRlbmRzIFRlcm1pbmFsTm9kZSB7XG4gIGdldENvbnRlbnQoKSB7XG4gICAgY29uc3QgY29udGVudCA9IEVQU0lMT047XG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGFzUGFyc2VUcmVlKHRva2Vucykge1xuICAgIGNvbnN0IGVwc2lsb25Ob2RlUGFyc2VUcmVlID0gRXBzaWxvbk5vZGVQYXJzZVRyZWUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgcGFyc2VUcmVlID0gZXBzaWxvbk5vZGVQYXJzZVRyZWU7ICAvLy9cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IG51bGwsXG4gICAgICAgICAgZXBzaWxvbkJORk5vZGUgPSBUZXJtaW5hbE5vZGUuZnJvbVNpZ25pZmljYW50VG9rZW4oRXBzaWxvbkJORk5vZGUsIHNpZ25pZmljYW50VG9rZW4pO1xuXG4gICAgcmV0dXJuIGVwc2lsb25CTkZOb2RlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkVwc2lsb25CTkZOb2RlIiwiZ2V0Q29udGVudCIsImNvbnRlbnQiLCJFUFNJTE9OIiwiYXNQYXJzZVRyZWUiLCJ0b2tlbnMiLCJlcHNpbG9uTm9kZVBhcnNlVHJlZSIsIkVwc2lsb25Ob2RlUGFyc2VUcmVlIiwiZnJvbU5vdGhpbmciLCJwYXJzZVRyZWUiLCJzaWduaWZpY2FudFRva2VuIiwiZXBzaWxvbkJORk5vZGUiLCJUZXJtaW5hbE5vZGUiLCJmcm9tU2lnbmlmaWNhbnRUb2tlbiJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7O2VBT1FBLGNBQWM7Ozs2REFMVixhQUFhO2dFQUNMLDZCQUE2Qjt5QkFFdEMsaUJBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQUEsQUFBTUEsY0FBYyxpQkFBcEI7OzthQUFNQSxjQUFjOzs7Ozs7WUFDakNDLEdBQVUsRUFBVkEsWUFBVTttQkFBVkEsU0FBQUEsVUFBVSxHQUFHO2dCQUNYLElBQU1DLE9BQU8sR0FBR0MsVUFBTyxRQUFBLEFBQUM7Z0JBRXhCLE9BQU9ELE9BQU8sQ0FBQzthQUNoQjs7O1lBRURFLEdBQVcsRUFBWEEsYUFBVzttQkFBWEEsU0FBQUEsV0FBVyxDQUFDQyxNQUFNLEVBQUU7Z0JBQ2xCLElBQU1DLG9CQUFvQixHQUFHQyxZQUFvQixRQUFBLENBQUNDLFdBQVcsRUFBRSxFQUMzREMsU0FBUyxHQUFHSCxvQkFBb0IsQUFBQyxFQUFFLEdBQUc7Z0JBRTFDLE9BQU9HLFNBQVMsQ0FBQzthQUNsQjs7OztZQUVNRCxHQUFXLEVBQVhBLGFBQVc7bUJBQWxCLFNBQU9BLFdBQVcsR0FBRztnQkFDbkIsSUFBTUUsZ0JBQWdCLEdBQUcsSUFBSSxFQUN2QkMsY0FBYyxHQUFHQyxTQUFZLFFBQUEsQ0FBQ0Msb0JBQW9CLENBQUNiLGNBQWMsRUFBRVUsZ0JBQWdCLENBQUMsQUFBQztnQkFFM0YsT0FBT0MsY0FBYyxDQUFDO2FBQ3ZCOzs7O0NBQ0YsQ0FwQjJDQyxTQUFZLFFBQUEsQ0FvQnZEIn0=