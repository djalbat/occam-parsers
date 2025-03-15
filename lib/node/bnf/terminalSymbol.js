"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TerminalSymbolBNFNode;
    }
});
var _necessary = require("necessary");
var _nonTerminal = /*#__PURE__*/ _interop_require_default(require("../../node/nonTerminal"));
var _terminalSymbol = /*#__PURE__*/ _interop_require_default(require("../../part/terminal/terminalSymbol"));
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
var first = _necessary.arrayUtilities.first, second = _necessary.arrayUtilities.second;
var TerminalSymbolBNFNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(TerminalSymbolBNFNode, NonTerminalNode);
    function TerminalSymbolBNFNode() {
        _class_call_check(this, TerminalSymbolBNFNode);
        var _this;
        _this = _call_super(this, TerminalSymbolBNFNode, arguments), _define_property(_this, "regularExpression", /^"((?:\\.|[^"\\])*)"$/);
        return _this;
    }
    _create_class(TerminalSymbolBNFNode, [
        {
            key: "generatePart",
            value: function generatePart(callAhead) {
                var content = this.getContent(), terminalSymbolPart = _terminalSymbol.default.fromContent(content);
                return terminalSymbolPart;
            }
        },
        {
            key: "getContent",
            value: function getContent() {
                var content;
                var childNodes = this.getChildNodes(), firstChildNode = first(childNodes), terminalNode = firstChildNode, terminalNodeContent = terminalNode.getContent(), matches = terminalNodeContent.match(this.regularExpression), secondMatch = second(matches);
                content = secondMatch; ///
                content = sanitiseContent(content);
                return content;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _nonTerminal.default.fromRuleNameChildNodesAndOpacity(TerminalSymbolBNFNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return TerminalSymbolBNFNode;
}(_nonTerminal.default);
function sanitiseContent(content) {
    content = content.replace(/\\\\/g, _constants.ESCAPED_BACKSLASH).replace(/\\"/g, _constants.ESCAPED_DOUBLE_QUOTE);
    return content;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2JuZi90ZXJtaW5hbFN5bWJvbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbE5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbm9uVGVybWluYWxcIjtcbmltcG9ydCBUZXJtaW5hbFN5bWJvbFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvdGVybWluYWwvdGVybWluYWxTeW1ib2xcIjtcblxuaW1wb3J0IHsgRVNDQVBFRF9CQUNLU0xBU0gsIEVTQ0FQRURfRE9VQkxFX1FVT1RFIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IGZpcnN0LCBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXJtaW5hbFN5bWJvbEJORk5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICByZWd1bGFyRXhwcmVzc2lvbiA9IC9eXCIoKD86XFxcXC58W15cIlxcXFxdKSopXCIkLztcblxuICBnZW5lcmF0ZVBhcnQoY2FsbEFoZWFkKSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUGFydCA9IFRlcm1pbmFsU3ltYm9sUGFydC5mcm9tQ29udGVudChjb250ZW50KTtcblxuICAgIHJldHVybiB0ZXJtaW5hbFN5bWJvbFBhcnQ7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIGxldCBjb250ZW50O1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIHRlcm1pbmFsTm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgdGVybWluYWxOb2RlQ29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgbWF0Y2hlcyA9IHRlcm1pbmFsTm9kZUNvbnRlbnQubWF0Y2godGhpcy5yZWd1bGFyRXhwcmVzc2lvbiksXG4gICAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBjb250ZW50ID0gc2Vjb25kTWF0Y2g7ICAvLy9cblxuICAgIGNvbnRlbnQgPSBzYW5pdGlzZUNvbnRlbnQoY29udGVudCk7XG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KFRlcm1pbmFsU3ltYm9sQk5GTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpOyB9XG59XG5cbmZ1bmN0aW9uIHNhbml0aXNlQ29udGVudChjb250ZW50KSB7XG4gIGNvbnRlbnQgPSBjb250ZW50XG4gICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcXFxcXC9nLCBFU0NBUEVEX0JBQ0tTTEFTSClcbiAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFxcIi9nLCBFU0NBUEVEX0RPVUJMRV9RVU9URSk7XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG4iXSwibmFtZXMiOlsiVGVybWluYWxTeW1ib2xCTkZOb2RlIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsInNlY29uZCIsInJlZ3VsYXJFeHByZXNzaW9uIiwiZ2VuZXJhdGVQYXJ0IiwiY2FsbEFoZWFkIiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0ZXJtaW5hbFN5bWJvbFBhcnQiLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJmcm9tQ29udGVudCIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZmlyc3RDaGlsZE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVDb250ZW50IiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJzYW5pdGlzZUNvbnRlbnQiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsInJ1bGVOYW1lIiwib3BhY2l0eSIsIk5vblRlcm1pbmFsTm9kZSIsInJlcGxhY2UiLCJFU0NBUEVEX0JBQ0tTTEFTSCIsIkVTQ0FQRURfRE9VQkxFX1FVT1RFIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVdxQkE7Ozt5QkFUVTtrRUFFSDtxRUFDRzt5QkFFeUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhELElBQVFDLFFBQWtCQyx5QkFBYyxDQUFoQ0QsT0FBT0UsU0FBV0QseUJBQWMsQ0FBekJDO0FBRUEsSUFBQSxBQUFNSCxzQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7O2dCQUFOLGtCQUFNQSxtQ0FDbkJJLHdCQUFBQSxxQkFBb0I7OztrQkFEREo7O1lBR25CSyxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYUMsU0FBUztnQkFDcEIsSUFBTUMsVUFBVSxJQUFJLENBQUNDLFVBQVUsSUFDekJDLHFCQUFxQkMsdUJBQWtCLENBQUNDLFdBQVcsQ0FBQ0o7Z0JBRTFELE9BQU9FO1lBQ1Q7OztZQUVBRCxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUQ7Z0JBQ0osSUFBTUssYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLGlCQUFpQmIsTUFBTVcsYUFDdkJHLGVBQWVELGdCQUNmRSxzQkFBc0JELGFBQWFQLFVBQVUsSUFDN0NTLFVBQVVELG9CQUFvQkUsS0FBSyxDQUFDLElBQUksQ0FBQ2QsaUJBQWlCLEdBQzFEZSxjQUFjaEIsT0FBT2M7Z0JBRTNCVixVQUFVWSxhQUFjLEdBQUc7Z0JBRTNCWixVQUFVYSxnQkFBZ0JiO2dCQUUxQixPQUFPQTtZQUNUOzs7O1lBRU9jLEtBQUFBO21CQUFQLFNBQU9BLGlDQUFpQ0MsUUFBUSxFQUFFVixVQUFVLEVBQUVXLE9BQU87Z0JBQUksT0FBT0Msb0JBQWUsQ0FBQ0gsZ0NBQWdDLENBMUI3R3JCLHVCQTBCcUlzQixVQUFVVixZQUFZVztZQUFVOzs7V0ExQnJLdkI7RUFBOEJ3QixvQkFBZTtBQTZCbEUsU0FBU0osZ0JBQWdCYixPQUFPO0lBQzlCQSxVQUFVQSxRQUNHa0IsT0FBTyxDQUFDLFNBQVNDLDRCQUFpQixFQUNsQ0QsT0FBTyxDQUFDLFFBQVFFLCtCQUFvQjtJQUVqRCxPQUFPcEI7QUFDVCJ9