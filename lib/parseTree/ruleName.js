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
                var ruleName = nonTerminalNode.getRuleName(), firstSignificantToken = nonTerminalNode.getFirstSignificantToken(), lastSignificantToken = nonTerminalNode.getLastSignificantToken(), firstSignificantTokenIndex = tokens.indexOf(firstSignificantToken), lastSignificantTokenIndex = tokens.indexOf(lastSignificantToken), tokenIndexes = firstSignificantTokenIndex !== lastSignificantTokenIndex ? "".concat(firstSignificantTokenIndex, "-").concat(lastSignificantTokenIndex) : "".concat(firstSignificantTokenIndex);
                var string = "".concat(ruleName, " {").concat(tokenIndexes, "}");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZVRyZWUvcnVsZU5hbWUuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNoYXJhY3RlcnN9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIGZyb20gXCIuL3ZlcnRpY2FsQnJhbmNoXCI7XG5cbmNvbnN0IHsgU1BBQ0VfQ0hBUkFDVEVSIH0gPSBjaGFyYWN0ZXJzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlTmFtZVBhcnNlVHJlZSBleHRlbmRzIFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIHtcbiAgc3RhdGljIGZyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnMobm9uVGVybWluYWxOb2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIGZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IG5vblRlcm1pbmFsTm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgICBsYXN0U2lnbmlmaWNhbnRUb2tlbiA9IG5vblRlcm1pbmFsTm9kZS5nZXRMYXN0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICAgIGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gdG9rZW5zLmluZGV4T2YoZmlyc3RTaWduaWZpY2FudFRva2VuKSxcbiAgICAgICAgICBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gdG9rZW5zLmluZGV4T2YobGFzdFNpZ25pZmljYW50VG9rZW4pLFxuICAgICAgICAgIHRva2VuSW5kZXhlcyA9IChmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCAhPT0gbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleH0tJHtsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4fWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2ZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4fWA7XG5cbiAgICBsZXQgc3RyaW5nID0gYCR7cnVsZU5hbWV9IHske3Rva2VuSW5kZXhlc319YDtcblxuICAgIGxldCBwcmVjZWRlbmNlID0gbm9uVGVybWluYWxOb2RlLmdldFByZWNlZGVuY2UoKTtcblxuICAgIGlmIChwcmVjZWRlbmNlICE9PSBudWxsKSB7XG4gICAgICBpZiAocHJlY2VkZW5jZSA9PT0gSW5maW5pdHkpIHtcbiAgICAgICAgcHJlY2VkZW5jZSA9IFNQQUNFX0NIQVJBQ1RFUjtcbiAgICAgIH1cblxuICAgICAgc3RyaW5nID0gYCR7c3RyaW5nfSAoJHtwcmVjZWRlbmNlfSlgO1xuICAgIH1cblxuICAgIGNvbnN0IHN0cmluZ0xlbmd0aCA9IHN0cmluZy5sZW5ndGgsXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWVXaWR0aCA9IHN0cmluZ0xlbmd0aCwgLy8vXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tV2lkdGgodmVydGljYWxCcmFuY2hQYXJzZVRyZWVXaWR0aCksXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKSxcbiAgICAgICAgICBydWxlTmFtZVBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21TdHJpbmdBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKFJ1bGVOYW1lUGFyc2VUcmVlLCBzdHJpbmcsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pO1xuXG4gICAgcnVsZU5hbWVQYXJzZVRyZWUuYXBwZW5kVG9Ub3AodmVydGljYWxCcmFuY2hQYXJzZVRyZWUpO1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lUGFyc2VUcmVlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlJ1bGVOYW1lUGFyc2VUcmVlIiwiU1BBQ0VfQ0hBUkFDVEVSIiwiY2hhcmFjdGVycyIsImZyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnMiLCJub25UZXJtaW5hbE5vZGUiLCJ0b2tlbnMiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiZmlyc3RTaWduaWZpY2FudFRva2VuIiwiZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuIiwibGFzdFNpZ25pZmljYW50VG9rZW4iLCJnZXRMYXN0U2lnbmlmaWNhbnRUb2tlbiIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiaW5kZXhPZiIsImxhc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJ0b2tlbkluZGV4ZXMiLCJzdHJpbmciLCJwcmVjZWRlbmNlIiwiZ2V0UHJlY2VkZW5jZSIsIkluZmluaXR5Iiwic3RyaW5nTGVuZ3RoIiwibGVuZ3RoIiwidmVydGljYWxCcmFuY2hQYXJzZVRyZWVXaWR0aCIsInZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwiVmVydGljYWxCcmFuY2hQYXJzZVRyZWUiLCJmcm9tV2lkdGgiLCJ2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbiIsInJ1bGVOYW1lUGFyc2VUcmVlIiwiZnJvbVN0cmluZ0FuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJhcHBlbmRUb1RvcCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7eUJBTks7cUVBRVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEMsSUFBTSxBQUFFQyxrQkFBb0JDLHFCQUFVLENBQTlCRDtBQUVPLElBQUEsQUFBTUQsa0NBQU47Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDWkcsS0FBQUE7bUJBQVAsU0FBT0EsNkJBQTZCQyxlQUFlLEVBQUVDLE1BQU07Z0JBQ3pELElBQU1DLFdBQVdGLGdCQUFnQkcsV0FBVyxJQUN0Q0Msd0JBQXdCSixnQkFBZ0JLLHdCQUF3QixJQUNoRUMsdUJBQXVCTixnQkFBZ0JPLHVCQUF1QixJQUM5REMsNkJBQTZCUCxPQUFPUSxPQUFPLENBQUNMLHdCQUM1Q00sNEJBQTRCVCxPQUFPUSxPQUFPLENBQUNILHVCQUMzQ0ssZUFBZSxBQUFDSCwrQkFBK0JFLDRCQUMvQixBQUFDLEdBQWdDQSxPQUE5QkYsNEJBQTJCLEtBQTZCLE9BQTFCRSw2QkFDL0IsQUFBQyxHQUE2QixPQUEzQkY7Z0JBRTNCLElBQUlJLFNBQVMsQUFBQyxHQUFlRCxPQUFiVCxVQUFTLE1BQWlCLE9BQWJTLGNBQWE7Z0JBRTFDLElBQUlFLGFBQWFiLGdCQUFnQmMsYUFBYTtnQkFFOUMsSUFBSUQsZUFBZSxNQUFNO29CQUN2QixJQUFJQSxlQUFlRSxVQUFVO3dCQUMzQkYsYUFBYWhCO29CQUNmO29CQUVBZSxTQUFTLEFBQUMsR0FBYUMsT0FBWEQsUUFBTyxNQUFlLE9BQVhDLFlBQVc7Z0JBQ3BDO2dCQUVBLElBQU1HLGVBQWVKLE9BQU9LLE1BQU0sRUFDNUJDLCtCQUErQkYsY0FDL0JHLDBCQUEwQkMsdUJBQXVCLENBQUNDLFNBQVMsQ0FBQ0gsK0JBQzVESSx5QkFBeUJILHdCQUF3QkkseUJBQXlCLElBQzFFQyxvQkFBb0JKLHVCQUF1QixDQUFDSyxtQ0FBbUMsQ0EzQnBFN0IsbUJBMkJ3RmdCLFFBQVFVO2dCQUVqSEUsa0JBQWtCRSxXQUFXLENBQUNQO2dCQUU5QixPQUFPSztZQUNUOzs7V0FoQ21CNUI7RUFBMEJ3Qix1QkFBdUIifQ==