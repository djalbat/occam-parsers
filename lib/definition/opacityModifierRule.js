"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return OpacityModifierRuleDefinition;
    }
});
var _occamlexers = require("occam-lexers");
var _definition = /*#__PURE__*/ _interop_require_default(require("../definition"));
var _partChoice = /*#__PURE__*/ _interop_require_default(require("../partChoice"));
var _noWhitespace = /*#__PURE__*/ _interop_require_default(require("../part/terminal/noWhitespace"));
var _choiceOfParts = /*#__PURE__*/ _interop_require_default(require("../part/nonTerminal/choiceOfParts"));
var _stringLiteral = /*#__PURE__*/ _interop_require_default(require("../part/terminal/stringLiteral"));
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
var opaque = _occamlexers.specialSymbols.opaque, semiOpaque = _occamlexers.specialSymbols.semiOpaque;
var OpacityModifierRuleDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(OpacityModifierRuleDefinition, Definition);
    function OpacityModifierRuleDefinition() {
        _class_call_check(this, OpacityModifierRuleDefinition);
        return _call_super(this, OpacityModifierRuleDefinition, arguments);
    }
    _create_class(OpacityModifierRuleDefinition, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var content;
                content = opaque; ///
                var opaqueStringLiteralPart = _stringLiteral.default.fromContent(content);
                content = semiOpaque; ///
                var semiOpaqueStringLiteralPart = _stringLiteral.default.fromContent(content);
                var opaqueStringLiteralPartChoice = _partChoice.default.fromPart(opaqueStringLiteralPart), semiOpaqueStringLiteralPartChoice = _partChoice.default.fromPart(semiOpaqueStringLiteralPart), partChoices = [
                    opaqueStringLiteralPartChoice,
                    semiOpaqueStringLiteralPartChoice
                ], choiceOfOpaqueStringLiteralAndSemiOpaqueStringLiteralPartsPart = _choiceOfParts.default.fromPartChoices(partChoices), noWhitespacePart = _noWhitespace.default.fromNothing(), parts = [
                    noWhitespacePart,
                    choiceOfOpaqueStringLiteralAndSemiOpaqueStringLiteralPartsPart
                ], precedence = null, opacityModifierRuleDefinition = new OpacityModifierRuleDefinition(parts, precedence);
                return opacityModifierRuleDefinition;
            }
        }
    ]);
    return OpacityModifierRuleDefinition;
}(_definition.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL29wYWNpdHlNb2RpZmllclJ1bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvblwiO1xuaW1wb3J0IFBhcnRDaG9pY2UgZnJvbSBcIi4uL3BhcnRDaG9pY2VcIjtcbmltcG9ydCBOb1doaXRlc3BhY2VQYXJ0IGZyb20gXCIuLi9wYXJ0L3Rlcm1pbmFsL25vV2hpdGVzcGFjZVwiO1xuaW1wb3J0IENob2ljZU9mUGFydHNQYXJ0IGZyb20gXCIuLi9wYXJ0L25vblRlcm1pbmFsL2Nob2ljZU9mUGFydHNcIjtcbmltcG9ydCBTdHJpbmdMaXRlcmFsUGFydCBmcm9tIFwiLi4vcGFydC90ZXJtaW5hbC9zdHJpbmdMaXRlcmFsXCI7XG5cbmNvbnN0IHsgb3BhcXVlLCBzZW1pT3BhcXVlIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3BhY2l0eU1vZGlmaWVyUnVsZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGxldCBjb250ZW50O1xuXG4gICAgY29udGVudCA9IG9wYXF1ZTsgLy8vXG5cbiAgICBjb25zdCBvcGFxdWVTdHJpbmdMaXRlcmFsUGFydCA9IFN0cmluZ0xpdGVyYWxQYXJ0LmZyb21Db250ZW50KGNvbnRlbnQpO1xuXG4gICAgY29udGVudCA9IHNlbWlPcGFxdWU7IC8vL1xuXG4gICAgY29uc3Qgc2VtaU9wYXF1ZVN0cmluZ0xpdGVyYWxQYXJ0ID0gU3RyaW5nTGl0ZXJhbFBhcnQuZnJvbUNvbnRlbnQoY29udGVudCk7XG5cbiAgICBjb25zdCBvcGFxdWVTdHJpbmdMaXRlcmFsUGFydENob2ljZSA9IFBhcnRDaG9pY2UuZnJvbVBhcnQob3BhcXVlU3RyaW5nTGl0ZXJhbFBhcnQpLFxuICAgICAgICAgIHNlbWlPcGFxdWVTdHJpbmdMaXRlcmFsUGFydENob2ljZSA9IFBhcnRDaG9pY2UuZnJvbVBhcnQoc2VtaU9wYXF1ZVN0cmluZ0xpdGVyYWxQYXJ0KSxcbiAgICAgICAgICBwYXJ0Q2hvaWNlcyA9IFtcbiAgICAgICAgICAgIG9wYXF1ZVN0cmluZ0xpdGVyYWxQYXJ0Q2hvaWNlLFxuICAgICAgICAgICAgc2VtaU9wYXF1ZVN0cmluZ0xpdGVyYWxQYXJ0Q2hvaWNlXG4gICAgICAgICAgXSxcbiAgICAgICAgICBjaG9pY2VPZk9wYXF1ZVN0cmluZ0xpdGVyYWxBbmRTZW1pT3BhcXVlU3RyaW5nTGl0ZXJhbFBhcnRzUGFydCA9IENob2ljZU9mUGFydHNQYXJ0LmZyb21QYXJ0Q2hvaWNlcyhwYXJ0Q2hvaWNlcyksXG4gICAgICAgICAgbm9XaGl0ZXNwYWNlUGFydCA9IE5vV2hpdGVzcGFjZVBhcnQuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgIG5vV2hpdGVzcGFjZVBhcnQsXG4gICAgICAgICAgICBjaG9pY2VPZk9wYXF1ZVN0cmluZ0xpdGVyYWxBbmRTZW1pT3BhcXVlU3RyaW5nTGl0ZXJhbFBhcnRzUGFydFxuICAgICAgICAgIF0sXG4gICAgICAgICAgcHJlY2VkZW5jZSA9IG51bGwsXG4gICAgICAgICAgb3BhY2l0eU1vZGlmaWVyUnVsZURlZmluaXRpb24gPSBuZXcgT3BhY2l0eU1vZGlmaWVyUnVsZURlZmluaXRpb24ocGFydHMsIHByZWNlZGVuY2UpO1xuXG4gICAgcmV0dXJuIG9wYWNpdHlNb2RpZmllclJ1bGVEZWZpbml0aW9uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiT3BhY2l0eU1vZGlmaWVyUnVsZURlZmluaXRpb24iLCJvcGFxdWUiLCJzcGVjaWFsU3ltYm9scyIsInNlbWlPcGFxdWUiLCJmcm9tTm90aGluZyIsImNvbnRlbnQiLCJvcGFxdWVTdHJpbmdMaXRlcmFsUGFydCIsIlN0cmluZ0xpdGVyYWxQYXJ0IiwiZnJvbUNvbnRlbnQiLCJzZW1pT3BhcXVlU3RyaW5nTGl0ZXJhbFBhcnQiLCJvcGFxdWVTdHJpbmdMaXRlcmFsUGFydENob2ljZSIsIlBhcnRDaG9pY2UiLCJmcm9tUGFydCIsInNlbWlPcGFxdWVTdHJpbmdMaXRlcmFsUGFydENob2ljZSIsInBhcnRDaG9pY2VzIiwiY2hvaWNlT2ZPcGFxdWVTdHJpbmdMaXRlcmFsQW5kU2VtaU9wYXF1ZVN0cmluZ0xpdGVyYWxQYXJ0c1BhcnQiLCJDaG9pY2VPZlBhcnRzUGFydCIsImZyb21QYXJ0Q2hvaWNlcyIsIm5vV2hpdGVzcGFjZVBhcnQiLCJOb1doaXRlc3BhY2VQYXJ0IiwicGFydHMiLCJwcmVjZWRlbmNlIiwib3BhY2l0eU1vZGlmaWVyUnVsZURlZmluaXRpb24iLCJEZWZpbml0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVlxQkE7OzsyQkFWVTtpRUFFUjtpRUFDQTttRUFDTTtvRUFDQztvRUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5QixJQUFRQyxTQUF1QkMsMkJBQWMsQ0FBckNELFFBQVFFLGFBQWVELDJCQUFjLENBQTdCQztBQUVELElBQUEsQUFBTUgsOENBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDWkksS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBSUM7Z0JBRUpBLFVBQVVKLFFBQVEsR0FBRztnQkFFckIsSUFBTUssMEJBQTBCQyxzQkFBaUIsQ0FBQ0MsV0FBVyxDQUFDSDtnQkFFOURBLFVBQVVGLFlBQVksR0FBRztnQkFFekIsSUFBTU0sOEJBQThCRixzQkFBaUIsQ0FBQ0MsV0FBVyxDQUFDSDtnQkFFbEUsSUFBTUssZ0NBQWdDQyxtQkFBVSxDQUFDQyxRQUFRLENBQUNOLDBCQUNwRE8sb0NBQW9DRixtQkFBVSxDQUFDQyxRQUFRLENBQUNILDhCQUN4REssY0FBYztvQkFDWko7b0JBQ0FHO2lCQUNELEVBQ0RFLGlFQUFpRUMsc0JBQWlCLENBQUNDLGVBQWUsQ0FBQ0gsY0FDbkdJLG1CQUFtQkMscUJBQWdCLENBQUNmLFdBQVcsSUFDL0NnQixRQUFRO29CQUNORjtvQkFDQUg7aUJBQ0QsRUFDRE0sYUFBYSxNQUNiQyxnQ0FBZ0MsSUF6QnJCdEIsOEJBeUJ1RG9CLE9BQU9DO2dCQUUvRSxPQUFPQztZQUNUOzs7V0E1Qm1CdEI7RUFBc0N1QixtQkFBVSJ9