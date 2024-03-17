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
                var ruleName = nonTerminalNode.getRuleName(), opacity = nonTerminalNode.getOpacity(), firstSignificantToken = nonTerminalNode.getFirstSignificantToken(), lastSignificantToken = nonTerminalNode.getLastSignificantToken(), firstSignificantTokenLineIndex = (0, _tokens.tokenLineIndexFromTokenAndTokens)(firstSignificantToken, tokens), lastSignificantTokenLineIndex = (0, _tokens.tokenLineIndexFromTokenAndTokens)(lastSignificantToken, tokens), tokenLineIndexes = firstSignificantTokenLineIndex !== lastSignificantTokenLineIndex ? "".concat(firstSignificantTokenLineIndex, "-").concat(lastSignificantTokenLineIndex) : "".concat(firstSignificantTokenLineIndex);
                var string = "".concat(ruleName);
                if (opacity !== null) {
                    string = "".concat(string).concat(opacity);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZVRyZWUvcnVsZU5hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNoYXJhY3RlcnN9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIGZyb20gXCIuL3ZlcnRpY2FsQnJhbmNoXCI7XG5cbmltcG9ydCB7IHRva2VuTGluZUluZGV4RnJvbVRva2VuQW5kVG9rZW5zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy90b2tlbnNcIjtcblxuY29uc3QgeyBTUEFDRV9DSEFSQUNURVIgfSA9IGNoYXJhY3RlcnM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVOYW1lUGFyc2VUcmVlIGV4dGVuZHMgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUge1xuICBzdGF0aWMgZnJvbU5vblRlcm1pbmFsTm9kZUFuZFRva2Vucyhub25UZXJtaW5hbE5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgb3BhY2l0eSA9IG5vblRlcm1pbmFsTm9kZS5nZXRPcGFjaXR5KCksXG4gICAgICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuID0gbm9uVGVybWluYWxOb2RlLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICAgIGxhc3RTaWduaWZpY2FudFRva2VuID0gbm9uVGVybWluYWxOb2RlLmdldExhc3RTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuTGluZUluZGV4ID0gdG9rZW5MaW5lSW5kZXhGcm9tVG9rZW5BbmRUb2tlbnMoZmlyc3RTaWduaWZpY2FudFRva2VuLCB0b2tlbnMpLFxuICAgICAgICAgIGxhc3RTaWduaWZpY2FudFRva2VuTGluZUluZGV4ID0gdG9rZW5MaW5lSW5kZXhGcm9tVG9rZW5BbmRUb2tlbnMobGFzdFNpZ25pZmljYW50VG9rZW4sIHRva2VucyksXG4gICAgICAgICAgdG9rZW5MaW5lSW5kZXhlcyA9IChmaXJzdFNpZ25pZmljYW50VG9rZW5MaW5lSW5kZXggIT09IGxhc3RTaWduaWZpY2FudFRva2VuTGluZUluZGV4KSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtmaXJzdFNpZ25pZmljYW50VG9rZW5MaW5lSW5kZXh9LSR7bGFzdFNpZ25pZmljYW50VG9rZW5MaW5lSW5kZXh9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2ZpcnN0U2lnbmlmaWNhbnRUb2tlbkxpbmVJbmRleH1gO1xuXG4gICAgbGV0IHN0cmluZyA9IGAke3J1bGVOYW1lfWA7XG5cbiAgICBpZiAob3BhY2l0eSAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gYCR7c3RyaW5nfSR7b3BhY2l0eX1gO1xuICAgIH1cblxuICAgIHN0cmluZyA9IGAke3N0cmluZ30gWyR7dG9rZW5MaW5lSW5kZXhlc31dYDtcblxuICAgIGxldCBwcmVjZWRlbmNlID0gbm9uVGVybWluYWxOb2RlLmdldFByZWNlZGVuY2UoKTtcblxuICAgIGlmIChwcmVjZWRlbmNlICE9PSBudWxsKSB7XG4gICAgICBpZiAocHJlY2VkZW5jZSA9PT0gSW5maW5pdHkpIHtcbiAgICAgICAgcHJlY2VkZW5jZSA9IFNQQUNFX0NIQVJBQ1RFUjtcbiAgICAgIH1cblxuICAgICAgc3RyaW5nID0gYCR7c3RyaW5nfSAoJHtwcmVjZWRlbmNlfSlgO1xuICAgIH1cblxuICAgIGNvbnN0IHN0cmluZ0xlbmd0aCA9IHN0cmluZy5sZW5ndGgsXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWVXaWR0aCA9IHN0cmluZ0xlbmd0aCwgLy8vXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tV2lkdGgodmVydGljYWxCcmFuY2hQYXJzZVRyZWVXaWR0aCksXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKSxcbiAgICAgICAgICBydWxlTmFtZVBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21TdHJpbmdBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKFJ1bGVOYW1lUGFyc2VUcmVlLCBzdHJpbmcsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pO1xuXG4gICAgcnVsZU5hbWVQYXJzZVRyZWUuYXBwZW5kVG9Ub3AodmVydGljYWxCcmFuY2hQYXJzZVRyZWUpO1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lUGFyc2VUcmVlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUnVsZU5hbWVQYXJzZVRyZWUiLCJTUEFDRV9DSEFSQUNURVIiLCJjaGFyYWN0ZXJzIiwiZnJvbU5vblRlcm1pbmFsTm9kZUFuZFRva2VucyIsIm5vblRlcm1pbmFsTm9kZSIsInRva2VucyIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJvcGFjaXR5IiwiZ2V0T3BhY2l0eSIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbiIsImxhc3RTaWduaWZpY2FudFRva2VuIiwiZ2V0TGFzdFNpZ25pZmljYW50VG9rZW4iLCJmaXJzdFNpZ25pZmljYW50VG9rZW5MaW5lSW5kZXgiLCJ0b2tlbkxpbmVJbmRleEZyb21Ub2tlbkFuZFRva2VucyIsImxhc3RTaWduaWZpY2FudFRva2VuTGluZUluZGV4IiwidG9rZW5MaW5lSW5kZXhlcyIsInN0cmluZyIsInByZWNlZGVuY2UiLCJnZXRQcmVjZWRlbmNlIiwiSW5maW5pdHkiLCJzdHJpbmdMZW5ndGgiLCJsZW5ndGgiLCJ2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoIiwidmVydGljYWxCcmFuY2hQYXJzZVRyZWUiLCJWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsImZyb21XaWR0aCIsInZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJnZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwicnVsZU5hbWVQYXJzZVRyZWUiLCJmcm9tU3RyaW5nQW5kVmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImFwcGVuZFRvVG9wIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7Ozt5QkFSSztxRUFFVTtzQkFFYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqRCxJQUFNLEFBQUVDLGtCQUFvQkMscUJBQVUsQ0FBOUJEO0FBRU8sSUFBQSxBQUFNRCxrQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ1pHLEtBQUFBO21CQUFQLFNBQU9BLDZCQUE2QkMsZUFBZSxFQUFFQyxNQUFNO2dCQUN6RCxJQUFNQyxXQUFXRixnQkFBZ0JHLFdBQVcsSUFDdENDLFVBQVVKLGdCQUFnQkssVUFBVSxJQUNwQ0Msd0JBQXdCTixnQkFBZ0JPLHdCQUF3QixJQUNoRUMsdUJBQXVCUixnQkFBZ0JTLHVCQUF1QixJQUM5REMsaUNBQWlDQyxJQUFBQSx3Q0FBZ0MsRUFBQ0wsdUJBQXVCTCxTQUN6RlcsZ0NBQWdDRCxJQUFBQSx3Q0FBZ0MsRUFBQ0gsc0JBQXNCUCxTQUN2RlksbUJBQW1CLEFBQUNILG1DQUFtQ0UsZ0NBQ25DLEFBQUMsR0FBb0NBLE9BQWxDRixnQ0FBK0IsS0FBaUMsT0FBOUJFLGlDQUNuQyxBQUFDLEdBQWlDLE9BQS9CRjtnQkFFL0IsSUFBSUksU0FBUyxBQUFDLEdBQVcsT0FBVFo7Z0JBRWhCLElBQUlFLFlBQVksTUFBTTtvQkFDcEJVLFNBQVMsQUFBQyxHQUFXVixPQUFUVSxRQUFpQixPQUFSVjtnQkFDdkI7Z0JBRUFVLFNBQVMsQUFBQyxHQUFhRCxPQUFYQyxRQUFPLE1BQXFCLE9BQWpCRCxrQkFBaUI7Z0JBRXhDLElBQUlFLGFBQWFmLGdCQUFnQmdCLGFBQWE7Z0JBRTlDLElBQUlELGVBQWUsTUFBTTtvQkFDdkIsSUFBSUEsZUFBZUUsVUFBVTt3QkFDM0JGLGFBQWFsQjtvQkFDZjtvQkFFQWlCLFNBQVMsQUFBQyxHQUFhQyxPQUFYRCxRQUFPLE1BQWUsT0FBWEMsWUFBVztnQkFDcEM7Z0JBRUEsSUFBTUcsZUFBZUosT0FBT0ssTUFBTSxFQUM1QkMsK0JBQStCRixjQUMvQkcsMEJBQTBCQyx1QkFBdUIsQ0FBQ0MsU0FBUyxDQUFDSCwrQkFDNURJLHlCQUF5Qkgsd0JBQXdCSSx5QkFBeUIsSUFDMUVDLG9CQUFvQkosdUJBQXVCLENBQUNLLG1DQUFtQyxDQWxDcEUvQixtQkFrQ3dGa0IsUUFBUVU7Z0JBRWpIRSxrQkFBa0JFLFdBQVcsQ0FBQ1A7Z0JBRTlCLE9BQU9LO1lBQ1Q7OztXQXZDbUI5QjtFQUEwQjBCLHVCQUF1QiJ9