"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _terminal = _interopRequireDefault(require("../terminal"));
var _endOfLineNode = _interopRequireDefault(require("../../parseTree/endOfLineNode"));
var _constants = require("../../../constants");
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
var EndOfLineNode = /*#__PURE__*/ function(TerminalNode) {
    _inherits(EndOfLineNode, TerminalNode);
    var _super = _createSuper(EndOfLineNode);
    function EndOfLineNode() {
        _classCallCheck(this, EndOfLineNode);
        return _super.apply(this, arguments);
    }
    _createClass(EndOfLineNode, [
        {
            key: "getContent",
            value: function getContent() {
                var content = _constants.EMPTY_STRING;
                return content;
            }
        },
        {
            key: "asParseTree",
            value: function asParseTree(tokens) {
                var endOfLineNodeParseTree = _endOfLineNode.default.fromNothing(), parseTree = endOfLineNodeParseTree; ///
                return parseTree;
            }
        }
    ], [
        {
            key: "fromSignificantToken",
            value: function fromSignificantToken(significantToken) {
                return _terminal.default.fromSignificantToken(EndOfLineNode, significantToken);
            }
        }
    ]);
    return EndOfLineNode;
}(_terminal.default);
exports.default = EndOfLineNode;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21tb24vbm9kZS90ZXJtaW5hbC9lbmRPZkxpbmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXJtaW5hbE5vZGUgZnJvbSBcIi4uL3Rlcm1pbmFsXCI7XG5pbXBvcnQgRW5kT2ZMaW5lTm9kZVBhcnNlVHJlZSBmcm9tIFwiLi4vLi4vcGFyc2VUcmVlL2VuZE9mTGluZU5vZGVcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmRPZkxpbmVOb2RlIGV4dGVuZHMgVGVybWluYWxOb2RlIHtcbiAgZ2V0Q29udGVudCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBhc1BhcnNlVHJlZSh0b2tlbnMpIHtcbiAgICBjb25zdCBlbmRPZkxpbmVOb2RlUGFyc2VUcmVlID0gRW5kT2ZMaW5lTm9kZVBhcnNlVHJlZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHBhcnNlVHJlZSA9IGVuZE9mTGluZU5vZGVQYXJzZVRyZWU7ICAvLy9cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVNpZ25pZmljYW50VG9rZW4oc2lnbmlmaWNhbnRUb2tlbikgeyByZXR1cm4gVGVybWluYWxOb2RlLmZyb21TaWduaWZpY2FudFRva2VuKEVuZE9mTGluZU5vZGUsIHNpZ25pZmljYW50VG9rZW4pOyB9XG59XG4iXSwibmFtZXMiOlsiRW5kT2ZMaW5lTm9kZSIsImdldENvbnRlbnQiLCJjb250ZW50IiwiYXNQYXJzZVRyZWUiLCJ0b2tlbnMiLCJlbmRPZkxpbmVOb2RlUGFyc2VUcmVlIiwiZnJvbU5vdGhpbmciLCJwYXJzZVRyZWUiLCJmcm9tU2lnbmlmaWNhbnRUb2tlbiIsInNpZ25pZmljYW50VG9rZW4iXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRWEsR0FBYSxDQUFiLFNBQWE7QUFDSCxHQUErQixDQUEvQixjQUErQjtBQUVyQyxHQUFvQixDQUFwQixVQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUU1QkEsYUFBYSxpQkFBbkIsUUFBUTtjQUFGQSxhQUFhOzhCQUFiQSxhQUFhO2FBQWJBLGFBQWE7OEJBQWJBLGFBQWE7OztpQkFBYkEsYUFBYTs7WUFDaENDLEdBQVUsRUFBVkEsQ0FBVTttQkFBVkEsUUFBUSxDQUFSQSxVQUFVLEdBQUcsQ0FBQztnQkFDWixHQUFLLENBQUNDLE9BQU8sR0FKWSxVQUFvQjtnQkFNN0MsTUFBTSxDQUFDQSxPQUFPO1lBQ2hCLENBQUM7OztZQUVEQyxHQUFXLEVBQVhBLENBQVc7bUJBQVhBLFFBQVEsQ0FBUkEsV0FBVyxDQUFDQyxNQUFNLEVBQUUsQ0FBQztnQkFDbkIsR0FBSyxDQUFDQyxzQkFBc0IsR0FaRyxjQUErQixTQVlSQyxXQUFXLElBQzNEQyxTQUFTLEdBQUdGLHNCQUFzQixDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFOUMsTUFBTSxDQUFDRSxTQUFTO1lBQ2xCLENBQUM7Ozs7WUFFTUMsR0FBb0IsRUFBcEJBLENBQW9CO21CQUEzQixRQUFRLENBQURBLG9CQUFvQixDQUFDQyxnQkFBZ0IsRUFBRSxDQUFDO2dCQUFDLE1BQU0sQ0FuQi9CLFNBQWEsU0FtQmdDRCxvQkFBb0IsQ0FBQ1IsYUFBYSxFQUFFUyxnQkFBZ0I7WUFBRyxDQUFDOzs7V0FkekdULGFBQWE7RUFMVCxTQUFhO2tCQUtqQkEsYUFBYSJ9