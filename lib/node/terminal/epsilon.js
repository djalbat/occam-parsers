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
var _occamlexers = require("occam-lexers");
var _terminal = /*#__PURE__*/ _interop_require_default(require("../terminal"));
var _epsilonNode = /*#__PURE__*/ _interop_require_default(require("../../parseTree/epsilonNode"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var epsilon = _occamlexers.specialSymbols.epsilon;
var EpsilonNode = /*#__PURE__*/ function(TerminalNode) {
    _inherits(EpsilonNode, TerminalNode);
    var _super = _create_super(EpsilonNode);
    function EpsilonNode() {
        _class_call_check(this, EpsilonNode);
        return _super.apply(this, arguments);
    }
    _create_class(EpsilonNode, [
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
            value: function match(node, depth) {
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
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _terminal.default.fromNothing(EpsilonNode);
            }
        }
    ]);
    return EpsilonNode;
}(_terminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL3Rlcm1pbmFsL2Vwc2lsb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgVGVybWluYWxOb2RlIGZyb20gXCIuLi90ZXJtaW5hbFwiO1xuaW1wb3J0IEVwc2lsb25Ob2RlUGFyc2VUcmVlIGZyb20gXCIuLi8uLi9wYXJzZVRyZWUvZXBzaWxvbk5vZGVcIjtcblxuY29uc3QgeyBlcHNpbG9uIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXBzaWxvbk5vZGUgZXh0ZW5kcyBUZXJtaW5hbE5vZGUge1xuICBpc0Vwc2lsb25Ob2RlKCkge1xuICAgIGNvbnN0IGVwc2lsb25Ob2RlID0gdHJ1ZTtcblxuICAgIHJldHVybiBlcHNpbG9uTm9kZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgY29uc3QgdHlwZSA9IG51bGw7ICAvLy9cblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZXBzaWxvbjsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBhc1BhcnNlVHJlZSh0b2tlbnMpIHtcbiAgICBjb25zdCBlcHNpbG9uTm9kZVBhcnNlVHJlZSA9IEVwc2lsb25Ob2RlUGFyc2VUcmVlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcGFyc2VUcmVlID0gZXBzaWxvbk5vZGVQYXJzZVRyZWU7ICAvLy9cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBtYXRjaChub2RlLCBkZXB0aCkge1xuICAgIGxldCBtYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICAgIHRlcm1pbmFsTm9kZUVwc2lsb25Ob2RlID0gdGVybWluYWxOb2RlLmlzRXBzaWxvbk5vZGUoKTtcblxuICAgICAgaWYgKHRlcm1pbmFsTm9kZUVwc2lsb25Ob2RlKSB7XG4gICAgICAgIG1hdGNoZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gVGVybWluYWxOb2RlLmZyb21Ob3RoaW5nKEVwc2lsb25Ob2RlKTsgfVxufVxuIl0sIm5hbWVzIjpbIkVwc2lsb25Ob2RlIiwiZXBzaWxvbiIsInNwZWNpYWxTeW1ib2xzIiwiaXNFcHNpbG9uTm9kZSIsImVwc2lsb25Ob2RlIiwiZ2V0VHlwZSIsInR5cGUiLCJnZXRDb250ZW50IiwiY29udGVudCIsImFzUGFyc2VUcmVlIiwidG9rZW5zIiwiZXBzaWxvbk5vZGVQYXJzZVRyZWUiLCJFcHNpbG9uTm9kZVBhcnNlVHJlZSIsImZyb21Ob3RoaW5nIiwicGFyc2VUcmVlIiwibWF0Y2giLCJub2RlIiwiZGVwdGgiLCJtYXRjaGVzIiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlRXBzaWxvbk5vZGUiLCJUZXJtaW5hbE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7OzJCQVBVOytEQUVOO2tFQUNROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpDLElBQU0sQUFBRUMsVUFBWUMsMkJBQWMsQ0FBMUJEO0FBRU8sSUFBQSxBQUFNRCw0QkFBTjtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGNBQWM7Z0JBRXBCLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsT0FBTyxNQUFPLEdBQUc7Z0JBRXZCLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsVUFBVVAsU0FBVSxHQUFHO2dCQUU3QixPQUFPTztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFlBQVlDLE1BQU07Z0JBQ2hCLElBQU1DLHVCQUF1QkMsb0JBQW9CLENBQUNDLFdBQVcsSUFDdkRDLFlBQVlILHNCQUF1QixHQUFHO2dCQUU1QyxPQUFPRztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLElBQUksRUFBRUMsS0FBSztnQkFDZixJQUFJQyxVQUFVO2dCQUVkLElBQU1DLG1CQUFtQkgsS0FBS0ksY0FBYztnQkFFNUMsSUFBSUQsa0JBQWtCO29CQUNwQixJQUFNRSxlQUFlTCxNQUNmTSwwQkFBMEJELGFBQWFsQixhQUFhO29CQUUxRCxJQUFJbUIseUJBQXlCO3dCQUMzQkosVUFBVTtvQkFDWjtnQkFDRjtnQkFFQSxPQUFPQTtZQUNUOzs7O1lBRU9MLEtBQUFBO21CQUFQLFNBQU9BO2dCQUFnQixPQUFPVSxpQkFBWSxDQUFDVixXQUFXLENBM0NuQ2I7WUEyQ2tEOzs7V0EzQ2xEQTtFQUFvQnVCLGlCQUFZIn0=