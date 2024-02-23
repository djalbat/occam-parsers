"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RuleNameParseTree;
    }
});
var _necessary = require("necessary");
var _verticalBranch = /*#__PURE__*/ _interop_require_default(require("./verticalBranch"));
var _tokens = require("../utilities/tokens");
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
var SPACE_CHARACTER = _necessary.characters.SPACE_CHARACTER;
var RuleNameParseTree = /*#__PURE__*/ function(VerticalBranchParseTree) {
    _inherits(RuleNameParseTree, VerticalBranchParseTree);
    var _super = _create_super(RuleNameParseTree);
    function RuleNameParseTree() {
        _class_call_check(this, RuleNameParseTree);
        return _super.apply(this, arguments);
    }
    _create_class(RuleNameParseTree, null, [
        {
            key: "fromNonTerminalNodeAndTokens",
            value: function fromNonTerminalNodeAndTokens(nonTerminalNode, tokens) {
                var ruleName = nonTerminalNode.getRuleName(), ambiguous = nonTerminalNode.isAmbiguous(), firstSignificantToken = nonTerminalNode.getFirstSignificantToken(), lastSignificantToken = nonTerminalNode.getLastSignificantToken(), firstSignificantTokenLineIndex = (0, _tokens.tokenLineIndexFromTokenAndTokens)(firstSignificantToken, tokens), lastSignificantTokenLineIndex = (0, _tokens.tokenLineIndexFromTokenAndTokens)(lastSignificantToken, tokens), tokenLineIndexes = firstSignificantTokenLineIndex !== lastSignificantTokenLineIndex ? "".concat(firstSignificantTokenLineIndex, "-").concat(lastSignificantTokenLineIndex) : "".concat(firstSignificantTokenLineIndex);
                var string = "".concat(ruleName);
                if (ambiguous) {
                    string = "".concat(string, "!");
                }
                string = "".concat(string, " [").concat(tokenLineIndexes, "]");
                var precedence = nonTerminalNode.getPrecedence();
                if (precedence !== null) {
                    if (precedence === Infinity) {
                        precedence = SPACE_CHARACTER;
                    }
                    string = "".concat(string, " (").concat(precedence, ")");
                }
                var stringLength = string.length, verticalBranchParseTreeWidth = stringLength, verticalBranchParseTree = _verticalBranch.default.fromWidth(verticalBranchParseTreeWidth), verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(), ruleNameParseTree = _verticalBranch.default.fromStringAndVerticalBranchPosition(RuleNameParseTree, string, verticalBranchPosition);
                ruleNameParseTree.appendToTop(verticalBranchParseTree);
                return ruleNameParseTree;
            }
        }
    ]);
    return RuleNameParseTree;
}(_verticalBranch.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZVRyZWUvcnVsZU5hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNoYXJhY3RlcnN9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIGZyb20gXCIuL3ZlcnRpY2FsQnJhbmNoXCI7XG5cbmltcG9ydCB7IHRva2VuTGluZUluZGV4RnJvbVRva2VuQW5kVG9rZW5zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy90b2tlbnNcIjtcblxuY29uc3QgeyBTUEFDRV9DSEFSQUNURVIgfSA9IGNoYXJhY3RlcnM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVOYW1lUGFyc2VUcmVlIGV4dGVuZHMgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUge1xuICBzdGF0aWMgZnJvbU5vblRlcm1pbmFsTm9kZUFuZFRva2Vucyhub25UZXJtaW5hbE5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgYW1iaWd1b3VzID0gbm9uVGVybWluYWxOb2RlLmlzQW1iaWd1b3VzKCksXG4gICAgICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuID0gbm9uVGVybWluYWxOb2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICAgIGxhc3RTaWduaWZpY2FudFRva2VuID0gbm9uVGVybWluYWxOb2RlLmdldExhc3RTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuTGluZUluZGV4ID0gdG9rZW5MaW5lSW5kZXhGcm9tVG9rZW5BbmRUb2tlbnMoZmlyc3RTaWduaWZpY2FudFRva2VuLCB0b2tlbnMpLFxuICAgICAgICAgIGxhc3RTaWduaWZpY2FudFRva2VuTGluZUluZGV4ID0gdG9rZW5MaW5lSW5kZXhGcm9tVG9rZW5BbmRUb2tlbnMobGFzdFNpZ25pZmljYW50VG9rZW4sIHRva2VucyksXG4gICAgICAgICAgdG9rZW5MaW5lSW5kZXhlcyA9IChmaXJzdFNpZ25pZmljYW50VG9rZW5MaW5lSW5kZXggIT09IGxhc3RTaWduaWZpY2FudFRva2VuTGluZUluZGV4KSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtmaXJzdFNpZ25pZmljYW50VG9rZW5MaW5lSW5kZXh9LSR7bGFzdFNpZ25pZmljYW50VG9rZW5MaW5lSW5kZXh9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2ZpcnN0U2lnbmlmaWNhbnRUb2tlbkxpbmVJbmRleH1gO1xuXG4gICAgbGV0IHN0cmluZyA9IGAke3J1bGVOYW1lfWA7XG5cbiAgICBpZiAoYW1iaWd1b3VzKSB7XG4gICAgICBzdHJpbmcgPSBgJHtzdHJpbmd9IWA7XG4gICAgfVxuXG4gICAgc3RyaW5nID0gYCR7c3RyaW5nfSBbJHt0b2tlbkxpbmVJbmRleGVzfV1gO1xuXG4gICAgbGV0IHByZWNlZGVuY2UgPSBub25UZXJtaW5hbE5vZGUuZ2V0UHJlY2VkZW5jZSgpO1xuXG4gICAgaWYgKHByZWNlZGVuY2UgIT09IG51bGwpIHtcbiAgICAgIGlmIChwcmVjZWRlbmNlID09PSBJbmZpbml0eSkge1xuICAgICAgICBwcmVjZWRlbmNlID0gU1BBQ0VfQ0hBUkFDVEVSO1xuICAgICAgfVxuXG4gICAgICBzdHJpbmcgPSBgJHtzdHJpbmd9ICgke3ByZWNlZGVuY2V9KWA7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RyaW5nTGVuZ3RoID0gc3RyaW5nLmxlbmd0aCxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoID0gc3RyaW5nTGVuZ3RoLCAvLy9cbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21XaWR0aCh2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoKSxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpLFxuICAgICAgICAgIHJ1bGVOYW1lUGFyc2VUcmVlID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZnJvbVN0cmluZ0FuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oUnVsZU5hbWVQYXJzZVRyZWUsIHN0cmluZywgdmVydGljYWxCcmFuY2hQb3NpdGlvbik7XG5cbiAgICBydWxlTmFtZVBhcnNlVHJlZS5hcHBlbmRUb1RvcCh2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSk7XG5cbiAgICByZXR1cm4gcnVsZU5hbWVQYXJzZVRyZWU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJSdWxlTmFtZVBhcnNlVHJlZSIsIlNQQUNFX0NIQVJBQ1RFUiIsImNoYXJhY3RlcnMiLCJmcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zIiwibm9uVGVybWluYWxOb2RlIiwidG9rZW5zIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsImFtYmlndW91cyIsImlzQW1iaWd1b3VzIiwiZmlyc3RTaWduaWZpY2FudFRva2VuIiwiZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuIiwibGFzdFNpZ25pZmljYW50VG9rZW4iLCJnZXRMYXN0U2lnbmlmaWNhbnRUb2tlbiIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbkxpbmVJbmRleCIsInRva2VuTGluZUluZGV4RnJvbVRva2VuQW5kVG9rZW5zIiwibGFzdFNpZ25pZmljYW50VG9rZW5MaW5lSW5kZXgiLCJ0b2tlbkxpbmVJbmRleGVzIiwic3RyaW5nIiwicHJlY2VkZW5jZSIsImdldFByZWNlZGVuY2UiLCJJbmZpbml0eSIsInN0cmluZ0xlbmd0aCIsImxlbmd0aCIsInZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGgiLCJ2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsIlZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwiZnJvbVdpZHRoIiwidmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJydWxlTmFtZVBhcnNlVHJlZSIsImZyb21TdHJpbmdBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiYXBwZW5kVG9Ub3AiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7O3lCQVJLO3FFQUVVO3NCQUVhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpELElBQU0sQUFBRUMsa0JBQW9CQyxxQkFBVSxDQUE5QkQ7QUFFTyxJQUFBLEFBQU1ELGtDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDWkcsS0FBQUE7bUJBQVAsU0FBT0EsNkJBQTZCQyxlQUFlLEVBQUVDLE1BQU07Z0JBQ3pELElBQU1DLFdBQVdGLGdCQUFnQkcsV0FBVyxJQUN0Q0MsWUFBWUosZ0JBQWdCSyxXQUFXLElBQ3ZDQyx3QkFBd0JOLGdCQUFnQk8sd0JBQXdCLElBQ2hFQyx1QkFBdUJSLGdCQUFnQlMsdUJBQXVCLElBQzlEQyxpQ0FBaUNDLElBQUFBLHdDQUFnQyxFQUFDTCx1QkFBdUJMLFNBQ3pGVyxnQ0FBZ0NELElBQUFBLHdDQUFnQyxFQUFDSCxzQkFBc0JQLFNBQ3ZGWSxtQkFBbUIsQUFBQ0gsbUNBQW1DRSxnQ0FDbkMsQUFBQyxHQUFvQ0EsT0FBbENGLGdDQUErQixLQUFpQyxPQUE5QkUsaUNBQ25DLEFBQUMsR0FBaUMsT0FBL0JGO2dCQUUvQixJQUFJSSxTQUFTLEFBQUMsR0FBVyxPQUFUWjtnQkFFaEIsSUFBSUUsV0FBVztvQkFDYlUsU0FBUyxBQUFDLEdBQVMsT0FBUEEsUUFBTztnQkFDckI7Z0JBRUFBLFNBQVMsQUFBQyxHQUFhRCxPQUFYQyxRQUFPLE1BQXFCLE9BQWpCRCxrQkFBaUI7Z0JBRXhDLElBQUlFLGFBQWFmLGdCQUFnQmdCLGFBQWE7Z0JBRTlDLElBQUlELGVBQWUsTUFBTTtvQkFDdkIsSUFBSUEsZUFBZUUsVUFBVTt3QkFDM0JGLGFBQWFsQjtvQkFDZjtvQkFFQWlCLFNBQVMsQUFBQyxHQUFhQyxPQUFYRCxRQUFPLE1BQWUsT0FBWEMsWUFBVztnQkFDcEM7Z0JBRUEsSUFBTUcsZUFBZUosT0FBT0ssTUFBTSxFQUM1QkMsK0JBQStCRixjQUMvQkcsMEJBQTBCQyx1QkFBdUIsQ0FBQ0MsU0FBUyxDQUFDSCwrQkFDNURJLHlCQUF5Qkgsd0JBQXdCSSx5QkFBeUIsSUFDMUVDLG9CQUFvQkosdUJBQXVCLENBQUNLLG1DQUFtQyxDQWxDcEUvQixtQkFrQ3dGa0IsUUFBUVU7Z0JBRWpIRSxrQkFBa0JFLFdBQVcsQ0FBQ1A7Z0JBRTlCLE9BQU9LO1lBQ1Q7OztXQXZDbUI5QjtFQUEwQjBCLHVCQUF1QiJ9