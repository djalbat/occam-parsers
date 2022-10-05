"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EpsilonNode;
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
var EpsilonNode = /*#__PURE__*/ function(TerminalNode) {
    _inherits(EpsilonNode, TerminalNode);
    var _super = _createSuper(EpsilonNode);
    function EpsilonNode() {
        _classCallCheck(this, EpsilonNode);
        return _super.apply(this, arguments);
    }
    _createClass(EpsilonNode, [
        {
            key: "isEpsilonNode",
            value: function isEpsilonNode() {
                var epsilonNode = true;
                return epsilonNode;
            }
        },
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
        },
        {
            key: "match",
            value: function match(node) {
                var matches = false;
                var nodeTerminalNode = node.isTerminalNode();
                if (nodeTerminalNode) {
                    var terminalNode = node, terminalNodeEpsilonNode = terminalNode.isEpsilonNode();
                    if (terminalNodeEpsilonNode) {
                        matches = true;
                    }
                }
                return matches;
            }
        },
        {
            key: "clone",
            value: function clone() {
                var epsilonNode = EpsilonNode.fromNothing();
                return epsilonNode;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL3Rlcm1pbmFsL2Vwc2lsb24uanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgVGVybWluYWxOb2RlIGZyb20gXCIuLi90ZXJtaW5hbFwiO1xuaW1wb3J0IEVwc2lsb25Ob2RlUGFyc2VUcmVlIGZyb20gXCIuLi8uLi9wYXJzZVRyZWUvZXBzaWxvbk5vZGVcIjtcblxuY29uc3QgeyBlcHNpbG9uIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXBzaWxvbk5vZGUgZXh0ZW5kcyBUZXJtaW5hbE5vZGUge1xuICBpc0Vwc2lsb25Ob2RlKCkge1xuICAgIGNvbnN0IGVwc2lsb25Ob2RlID0gdHJ1ZTtcblxuICAgIHJldHVybiBlcHNpbG9uTm9kZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgY29uc3QgdHlwZSA9IG51bGw7ICAvLy9cblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZXBzaWxvbjsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBhc1BhcnNlVHJlZSh0b2tlbnMpIHtcbiAgICBjb25zdCBlcHNpbG9uTm9kZVBhcnNlVHJlZSA9IEVwc2lsb25Ob2RlUGFyc2VUcmVlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcGFyc2VUcmVlID0gZXBzaWxvbk5vZGVQYXJzZVRyZWU7ICAvLy9cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBtYXRjaChub2RlKSB7XG4gICAgbGV0IG1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgICAgdGVybWluYWxOb2RlRXBzaWxvbk5vZGUgPSB0ZXJtaW5hbE5vZGUuaXNFcHNpbG9uTm9kZSgpO1xuXG4gICAgICBpZiAodGVybWluYWxOb2RlRXBzaWxvbk5vZGUpIHtcbiAgICAgICAgbWF0Y2hlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBjb25zdCBlcHNpbG9uTm9kZSA9IEVwc2lsb25Ob2RlLmZyb21Ob3RoaW5nKCk7XG5cbiAgICByZXR1cm4gZXBzaWxvbk5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IG51bGwsXG4gICAgICAgICAgZXBzaWxvbk5vZGUgPSBUZXJtaW5hbE5vZGUuZnJvbVNpZ25pZmljYW50VG9rZW4oRXBzaWxvbk5vZGUsIHNpZ25pZmljYW50VG9rZW4pO1xuXG4gICAgcmV0dXJuIGVwc2lsb25Ob2RlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkVwc2lsb25Ob2RlIiwiZXBzaWxvbiIsInNwZWNpYWxTeW1ib2xzIiwiaXNFcHNpbG9uTm9kZSIsImVwc2lsb25Ob2RlIiwiZ2V0VHlwZSIsInR5cGUiLCJnZXRDb250ZW50IiwiY29udGVudCIsImFzUGFyc2VUcmVlIiwidG9rZW5zIiwiZXBzaWxvbk5vZGVQYXJzZVRyZWUiLCJFcHNpbG9uTm9kZVBhcnNlVHJlZSIsImZyb21Ob3RoaW5nIiwicGFyc2VUcmVlIiwibWF0Y2giLCJub2RlIiwibWF0Y2hlcyIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZUVwc2lsb25Ob2RlIiwiY2xvbmUiLCJzaWduaWZpY2FudFRva2VuIiwiVGVybWluYWxOb2RlIiwiZnJvbVNpZ25pZmljYW50VG9rZW4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7OzJCQVBVOzZEQUVOO2dFQUNROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpDLElBQU0sQUFBRUMsVUFBWUMsMkJBQWMsQ0FBMUJEO0FBRU8sSUFBQSxBQUFNRCw0QkFBTjtjQUFNQTs4QkFBQUE7YUFBQUE7OEJBQUFBOzs7aUJBQUFBOztZQUNuQkcsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQjtnQkFDZCxJQUFNQyxjQUFjLElBQUk7Z0JBRXhCLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVTtnQkFDUixJQUFNQyxPQUFPLElBQUksRUFBRyxHQUFHO2dCQUV2QixPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWE7Z0JBQ1gsSUFBTUMsVUFBVVAsU0FBVSxHQUFHO2dCQUU3QixPQUFPTztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFlBQVlDLE1BQU0sRUFBRTtnQkFDbEIsSUFBTUMsdUJBQXVCQyxvQkFBb0IsQ0FBQ0MsV0FBVyxJQUN2REMsWUFBWUgsc0JBQXVCLEdBQUc7Z0JBRTVDLE9BQU9HO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsSUFBSSxFQUFFO2dCQUNWLElBQUlDLFVBQVUsS0FBSztnQkFFbkIsSUFBTUMsbUJBQW1CRixLQUFLRyxjQUFjO2dCQUU1QyxJQUFJRCxrQkFBa0I7b0JBQ3BCLElBQU1FLGVBQWVKLE1BQ2ZLLDBCQUEwQkQsYUFBYWpCLGFBQWE7b0JBRTFELElBQUlrQix5QkFBeUI7d0JBQzNCSixVQUFVLElBQUk7b0JBQ2hCLENBQUM7Z0JBQ0gsQ0FBQztnQkFFRCxPQUFPQTtZQUNUOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVE7Z0JBQ04sSUFBTWxCLGNBQWNKLEFBNUNIQSxZQTRDZWEsV0FBVztnQkFFM0MsT0FBT1Q7WUFDVDs7OztZQUVPUyxLQUFBQTttQkFBUCxTQUFPQSxjQUFjO2dCQUNuQixJQUFNVSxtQkFBbUIsSUFBSSxFQUN2Qm5CLGNBQWNvQixpQkFBWSxDQUFDQyxvQkFBb0IsQ0FuRHBDekIsYUFtRGtEdUI7Z0JBRW5FLE9BQU9uQjtZQUNUOzs7V0F0RG1CSjtFQUFvQndCLGlCQUFZIn0=