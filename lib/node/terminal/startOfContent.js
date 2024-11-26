"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return StartOfContentNode;
    }
});
var _terminal = /*#__PURE__*/ _interop_require_default(require("../terminal"));
var _startOfContentNode = /*#__PURE__*/ _interop_require_default(require("../../parseTree/startOfContentNode"));
var _constants = require("../../constants");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var StartOfContentNode = /*#__PURE__*/ function(TerminalNode) {
    _inherits(StartOfContentNode, TerminalNode);
    function StartOfContentNode() {
        _class_call_check(this, StartOfContentNode);
        return _call_super(this, StartOfContentNode, arguments);
    }
    _create_class(StartOfContentNode, [
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
                var content = _constants.EMPTY_STRING;
                return content;
            }
        },
        {
            key: "isStartOfContentNode",
            value: function isStartOfContentNode() {
                var startOfContentNode = true;
                return startOfContentNode;
            }
        },
        {
            key: "asParseTree",
            value: function asParseTree(tokens) {
                var startOfContentNodeParseTree = _startOfContentNode.default.fromNothing(), parseTree = startOfContentNodeParseTree; ///
                return parseTree;
            }
        },
        {
            key: "match",
            value: function match(node, depth) {
                var matches = false;
                var nodeTerminalNode = node.isTerminalNode();
                if (nodeTerminalNode) {
                    var terminalNode = node, terminalNodeStartOfContentNode = terminalNode.isStartOfContentNode();
                    if (terminalNodeStartOfContentNode) {
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
                return _terminal.default.fromNothing(StartOfContentNode);
            }
        }
    ]);
    return StartOfContentNode;
}(_terminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL3Rlcm1pbmFsL3N0YXJ0T2ZDb250ZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGVybWluYWxOb2RlIGZyb20gXCIuLi90ZXJtaW5hbFwiO1xuaW1wb3J0IFN0YXJ0T2ZDb250ZW50Tm9kZVBhcnNlVHJlZSBmcm9tIFwiLi4vLi4vcGFyc2VUcmVlL3N0YXJ0T2ZDb250ZW50Tm9kZVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXJ0T2ZDb250ZW50Tm9kZSBleHRlbmRzIFRlcm1pbmFsTm9kZSB7XG4gIGdldFR5cGUoKSB7XG4gICAgY29uc3QgdHlwZSA9IG51bGw7ICAvLy9cblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpc1N0YXJ0T2ZDb250ZW50Tm9kZSgpIHtcbiAgICBjb25zdCBzdGFydE9mQ29udGVudE5vZGUgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHN0YXJ0T2ZDb250ZW50Tm9kZTtcbiAgfVxuXG4gIGFzUGFyc2VUcmVlKHRva2Vucykge1xuICAgIGNvbnN0IHN0YXJ0T2ZDb250ZW50Tm9kZVBhcnNlVHJlZSA9IFN0YXJ0T2ZDb250ZW50Tm9kZVBhcnNlVHJlZS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHBhcnNlVHJlZSA9IHN0YXJ0T2ZDb250ZW50Tm9kZVBhcnNlVHJlZTsgIC8vL1xuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIG1hdGNoKG5vZGUsIGRlcHRoKSB7XG4gICAgbGV0IG1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgICAgdGVybWluYWxOb2RlU3RhcnRPZkNvbnRlbnROb2RlID0gdGVybWluYWxOb2RlLmlzU3RhcnRPZkNvbnRlbnROb2RlKCk7XG5cbiAgICAgIGlmICh0ZXJtaW5hbE5vZGVTdGFydE9mQ29udGVudE5vZGUpIHtcbiAgICAgICAgbWF0Y2hlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBUZXJtaW5hbE5vZGUuZnJvbU5vdGhpbmcoU3RhcnRPZkNvbnRlbnROb2RlKTsgfVxufVxuIl0sIm5hbWVzIjpbIlN0YXJ0T2ZDb250ZW50Tm9kZSIsImdldFR5cGUiLCJ0eXBlIiwiZ2V0Q29udGVudCIsImNvbnRlbnQiLCJFTVBUWV9TVFJJTkciLCJpc1N0YXJ0T2ZDb250ZW50Tm9kZSIsInN0YXJ0T2ZDb250ZW50Tm9kZSIsImFzUGFyc2VUcmVlIiwidG9rZW5zIiwic3RhcnRPZkNvbnRlbnROb2RlUGFyc2VUcmVlIiwiU3RhcnRPZkNvbnRlbnROb2RlUGFyc2VUcmVlIiwiZnJvbU5vdGhpbmciLCJwYXJzZVRyZWUiLCJtYXRjaCIsIm5vZGUiLCJkZXB0aCIsIm1hdGNoZXMiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVTdGFydE9mQ29udGVudE5vZGUiLCJUZXJtaW5hbE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7OytEQUxJO3lFQUNlO3lCQUVYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWQsSUFBQSxBQUFNQSxtQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxPQUFPLE1BQU8sR0FBRztnQkFFdkIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxVQUFVQyx1QkFBWTtnQkFFNUIsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxxQkFBcUI7Z0JBRTNCLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWUMsTUFBTTtnQkFDaEIsSUFBTUMsOEJBQThCQywyQkFBMkIsQ0FBQ0MsV0FBVyxJQUNyRUMsWUFBWUgsNkJBQThCLEdBQUc7Z0JBRW5ELE9BQU9HO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsSUFBSSxFQUFFQyxLQUFLO2dCQUNmLElBQUlDLFVBQVU7Z0JBRWQsSUFBTUMsbUJBQW1CSCxLQUFLSSxjQUFjO2dCQUU1QyxJQUFJRCxrQkFBa0I7b0JBQ3BCLElBQU1FLGVBQWVMLE1BQ2ZNLGlDQUFpQ0QsYUFBYWQsb0JBQW9CO29CQUV4RSxJQUFJZSxnQ0FBZ0M7d0JBQ2xDSixVQUFVO29CQUNaO2dCQUNGO2dCQUVBLE9BQU9BO1lBQ1Q7Ozs7WUFFT0wsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQWdCLE9BQU9VLGlCQUFZLENBQUNWLFdBQVcsQ0EzQ25DWjtZQTJDeUQ7OztXQTNDekRBO0VBQTJCc0IsaUJBQVkifQ==