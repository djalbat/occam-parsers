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
var _verticalBranch = /*#__PURE__*/ _interop_require_default(require("./verticalBranch"));
var _constants = require("../constants");
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
                var ruleName = nonTerminalNode.getRuleName(), firstSignificantToken = nonTerminalNode.getFirstSignificantToken(), lastSignificantToken = nonTerminalNode.getLastSignificantToken(), firstSignificantTokenIndex = tokens.indexOf(firstSignificantToken), lastSignificantTokenIndex = tokens.indexOf(lastSignificantToken), tokenIndexes = firstSignificantTokenIndex !== lastSignificantTokenIndex ? "".concat(firstSignificantTokenIndex, "-").concat(lastSignificantTokenIndex) : "".concat(firstSignificantTokenIndex);
                var string = "".concat(ruleName, " {").concat(tokenIndexes, "}");
                var precedence = nonTerminalNode.getPrecedence();
                if (precedence !== null) {
                    if (precedence === Infinity) {
                        precedence = _constants.EMPTY_STRING;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZVRyZWUvcnVsZU5hbWUuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSBmcm9tIFwiLi92ZXJ0aWNhbEJyYW5jaFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVOYW1lUGFyc2VUcmVlIGV4dGVuZHMgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUge1xuICBzdGF0aWMgZnJvbU5vblRlcm1pbmFsTm9kZUFuZFRva2Vucyhub25UZXJtaW5hbE5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuID0gbm9uVGVybWluYWxOb2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICAgIGxhc3RTaWduaWZpY2FudFRva2VuID0gbm9uVGVybWluYWxOb2RlLmdldExhc3RTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSB0b2tlbnMuaW5kZXhPZihmaXJzdFNpZ25pZmljYW50VG9rZW4pLFxuICAgICAgICAgIGxhc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSB0b2tlbnMuaW5kZXhPZihsYXN0U2lnbmlmaWNhbnRUb2tlbiksXG4gICAgICAgICAgdG9rZW5JbmRleGVzID0gKGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ICE9PSBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGAke2ZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4fS0ke2xhc3RTaWduaWZpY2FudFRva2VuSW5kZXh9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7Zmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXh9YDtcblxuICAgIGxldCBzdHJpbmcgPSBgJHtydWxlTmFtZX0geyR7dG9rZW5JbmRleGVzfX1gO1xuXG4gICAgbGV0IHByZWNlZGVuY2UgPSBub25UZXJtaW5hbE5vZGUuZ2V0UHJlY2VkZW5jZSgpO1xuXG4gICAgaWYgKHByZWNlZGVuY2UgIT09IG51bGwpIHtcbiAgICAgIGlmIChwcmVjZWRlbmNlID09PSBJbmZpbml0eSkge1xuICAgICAgICBwcmVjZWRlbmNlID0gRU1QVFlfU1RSSU5HO1xuICAgICAgfVxuXG4gICAgICBzdHJpbmcgPSBgJHtzdHJpbmd9ICgke3ByZWNlZGVuY2V9KWA7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RyaW5nTGVuZ3RoID0gc3RyaW5nLmxlbmd0aCxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoID0gc3RyaW5nTGVuZ3RoLCAvLy9cbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21XaWR0aCh2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoKSxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpLFxuICAgICAgICAgIHJ1bGVOYW1lUGFyc2VUcmVlID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZnJvbVN0cmluZ0FuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oUnVsZU5hbWVQYXJzZVRyZWUsIHN0cmluZywgdmVydGljYWxCcmFuY2hQb3NpdGlvbik7XG5cbiAgICBydWxlTmFtZVBhcnNlVHJlZS5hcHBlbmRUb1RvcCh2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSk7XG5cbiAgICByZXR1cm4gcnVsZU5hbWVQYXJzZVRyZWU7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiUnVsZU5hbWVQYXJzZVRyZWUiLCJmcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zIiwibm9uVGVybWluYWxOb2RlIiwidG9rZW5zIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImxhc3RTaWduaWZpY2FudFRva2VuIiwiZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4iLCJmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImluZGV4T2YiLCJsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwidG9rZW5JbmRleGVzIiwic3RyaW5nIiwicHJlY2VkZW5jZSIsImdldFByZWNlZGVuY2UiLCJJbmZpbml0eSIsIkVNUFRZX1NUUklORyIsInN0cmluZ0xlbmd0aCIsImxlbmd0aCIsInZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGgiLCJ2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsIlZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwiZnJvbVdpZHRoIiwidmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJydWxlTmFtZVBhcnNlVHJlZSIsImZyb21TdHJpbmdBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiYXBwZW5kVG9Ub3AiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O3FFQUplO3lCQUVQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWQsSUFBQSxBQUFNQSxrQ0FBTjtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNaQyxLQUFBQTttQkFBUCxTQUFPQSw2QkFBNkJDLGVBQWUsRUFBRUMsTUFBTTtnQkFDekQsSUFBTUMsV0FBV0YsZ0JBQWdCRyxXQUFXLElBQ3RDQyx3QkFBd0JKLGdCQUFnQkssd0JBQXdCLElBQ2hFQyx1QkFBdUJOLGdCQUFnQk8sdUJBQXVCLElBQzlEQyw2QkFBNkJQLE9BQU9RLE9BQU8sQ0FBQ0wsd0JBQzVDTSw0QkFBNEJULE9BQU9RLE9BQU8sQ0FBQ0gsdUJBQzNDSyxlQUFlLEFBQUNILCtCQUErQkUsNEJBQy9CLEFBQUMsR0FBZ0NBLE9BQTlCRiw0QkFBMkIsS0FBNkIsT0FBMUJFLDZCQUMvQixBQUFDLEdBQTZCLE9BQTNCRjtnQkFFM0IsSUFBSUksU0FBUyxBQUFDLEdBQWVELE9BQWJULFVBQVMsTUFBaUIsT0FBYlMsY0FBYTtnQkFFMUMsSUFBSUUsYUFBYWIsZ0JBQWdCYyxhQUFhO2dCQUU5QyxJQUFJRCxlQUFlLE1BQU07b0JBQ3ZCLElBQUlBLGVBQWVFLFVBQVU7d0JBQzNCRixhQUFhRyx1QkFBWTtvQkFDM0I7b0JBRUFKLFNBQVMsQUFBQyxHQUFhQyxPQUFYRCxRQUFPLE1BQWUsT0FBWEMsWUFBVztnQkFDcEM7Z0JBRUEsSUFBTUksZUFBZUwsT0FBT00sTUFBTSxFQUM1QkMsK0JBQStCRixjQUMvQkcsMEJBQTBCQyx1QkFBdUIsQ0FBQ0MsU0FBUyxDQUFDSCwrQkFDNURJLHlCQUF5Qkgsd0JBQXdCSSx5QkFBeUIsSUFDMUVDLG9CQUFvQkosdUJBQXVCLENBQUNLLG1DQUFtQyxDQTNCcEU1QixtQkEyQndGYyxRQUFRVztnQkFFakhFLGtCQUFrQkUsV0FBVyxDQUFDUDtnQkFFOUIsT0FBT0s7WUFDVDs7O1dBaENtQjNCO0VBQTBCdUIsdUJBQXVCIn0=