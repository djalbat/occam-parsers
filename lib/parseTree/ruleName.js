"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _verticalBranch = _interopRequireDefault(require("./verticalBranch"));
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
function _getPrototypeOf(o1) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o1);
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
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
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
var RuleNameParseTree = /*#__PURE__*/ function(VerticalBranchParseTree) {
    _inherits(RuleNameParseTree, VerticalBranchParseTree);
    var _super = _createSuper(RuleNameParseTree);
    function RuleNameParseTree() {
        _classCallCheck(this, RuleNameParseTree);
        return _super.apply(this, arguments);
    }
    _createClass(RuleNameParseTree, null, [
        {
            key: "fromNonTerminalNodeTokensAndAbridged",
            value: function fromNonTerminalNodeTokensAndAbridged(nonTerminalNode, tokens, abridged) {
                var ruleName = nonTerminalNode.getRuleName(), firstSignificantToken = nonTerminalNode.getFirstSignificantToken(), lastSignificantToken = nonTerminalNode.getLastSignificantToken(), firstSignificantTokenIndex = tokens.indexOf(firstSignificantToken), lastSignificantTokenIndex = tokens.indexOf(lastSignificantToken), tokenIndexes = firstSignificantTokenIndex !== lastSignificantTokenIndex ? "".concat(firstSignificantTokenIndex, "-").concat(lastSignificantTokenIndex) : "".concat(firstSignificantTokenIndex), string = abridged ? "".concat(ruleName) : "".concat(ruleName, "(").concat(tokenIndexes, ")"), stringLength = string.length, verticalBranchParseTreeWidth = stringLength, verticalBranchParseTree = _verticalBranch.default.fromWidth(verticalBranchParseTreeWidth), verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(), ruleNameParseTree = _verticalBranch.default.fromStringAndVerticalBranchPosition(RuleNameParseTree, string, verticalBranchPosition);
                ruleNameParseTree.appendToTop(verticalBranchParseTree);
                return ruleNameParseTree;
            }
        }
    ]);
    return RuleNameParseTree;
}(_verticalBranch.default);
exports.default = RuleNameParseTree;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZVRyZWUvcnVsZU5hbWUuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSBmcm9tIFwiLi92ZXJ0aWNhbEJyYW5jaFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlTmFtZVBhcnNlVHJlZSBleHRlbmRzIFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIHtcbiAgc3RhdGljIGZyb21Ob25UZXJtaW5hbE5vZGVUb2tlbnNBbmRBYnJpZGdlZChub25UZXJtaW5hbE5vZGUsIHRva2VucywgYWJyaWRnZWQpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIGZpcnN0U2lnbmlmaWNhbnRUb2tlbiA9IG5vblRlcm1pbmFsTm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgICBsYXN0U2lnbmlmaWNhbnRUb2tlbiA9IG5vblRlcm1pbmFsTm9kZS5nZXRMYXN0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICAgIGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gdG9rZW5zLmluZGV4T2YoZmlyc3RTaWduaWZpY2FudFRva2VuKSxcbiAgICAgICAgICBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gdG9rZW5zLmluZGV4T2YobGFzdFNpZ25pZmljYW50VG9rZW4pLFxuICAgICAgICAgIHRva2VuSW5kZXhlcyA9IChmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCAhPT0gbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7Zmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXh9LSR7bGFzdFNpZ25pZmljYW50VG9rZW5JbmRleH1gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7Zmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXh9YCxcbiAgICAgICAgICBzdHJpbmcgPSBhYnJpZGdlZCA/XG4gICAgICAgICAgICAgICAgICAgICBgJHtydWxlTmFtZX1gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgYCR7cnVsZU5hbWV9KCR7dG9rZW5JbmRleGVzfSlgLFxuICAgICAgICAgIHN0cmluZ0xlbmd0aCA9IHN0cmluZy5sZW5ndGgsXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWVXaWR0aCA9IHN0cmluZ0xlbmd0aCwgLy8vXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tV2lkdGgodmVydGljYWxCcmFuY2hQYXJzZVRyZWVXaWR0aCksXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKSxcbiAgICAgICAgICBydWxlTmFtZVBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21TdHJpbmdBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKFJ1bGVOYW1lUGFyc2VUcmVlLCBzdHJpbmcsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pO1xuXG4gICAgcnVsZU5hbWVQYXJzZVRyZWUuYXBwZW5kVG9Ub3AodmVydGljYWxCcmFuY2hQYXJzZVRyZWUpO1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lUGFyc2VUcmVlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlJ1bGVOYW1lUGFyc2VUcmVlIiwiZnJvbU5vblRlcm1pbmFsTm9kZVRva2Vuc0FuZEFicmlkZ2VkIiwibm9uVGVybWluYWxOb2RlIiwidG9rZW5zIiwiYWJyaWRnZWQiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiZmlyc3RTaWduaWZpY2FudFRva2VuIiwiZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuIiwibGFzdFNpZ25pZmljYW50VG9rZW4iLCJnZXRMYXN0U2lnbmlmaWNhbnRUb2tlbiIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiaW5kZXhPZiIsImxhc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJ0b2tlbkluZGV4ZXMiLCJzdHJpbmciLCJzdHJpbmdMZW5ndGgiLCJsZW5ndGgiLCJ2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoIiwidmVydGljYWxCcmFuY2hQYXJzZVRyZWUiLCJWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsImZyb21XaWR0aCIsInZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJnZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwicnVsZU5hbWVQYXJzZVRyZWUiLCJmcm9tU3RyaW5nQW5kVmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImFwcGVuZFRvVG9wIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRXVCLElBQUEsZUFBa0Isa0NBQWxCLGtCQUFrQixFQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZDLElBQUEsQUFBTUEsaUJBQWlCLGlCQ0puQyxBRElZOzs7YUFBTUEsaUJBQWlCOzs7Ozs7WUFDN0JDLEdBQW9DLEVBQXBDQSxzQ0FBb0M7bUJBQTNDLFNBQU9BLG9DQUFvQyxDQUFDQyxlQUFlLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFO2dCQUM3RSxJQUFNQyxRQUFRLEdBQUdILGVBQWUsQ0FBQ0ksV0FBVyxFQUFFLEVBQ3hDQyxxQkFBcUIsR0FBR0wsZUFBZSxDQUFDTSx3QkFBd0IsRUFBRSxFQUNsRUMsb0JBQW9CLEdBQUdQLGVBQWUsQ0FBQ1EsdUJBQXVCLEVBQUUsRUFDaEVDLDBCQUEwQixHQUFHUixNQUFNLENBQUNTLE9BQU8sQ0FBQ0wscUJBQXFCLENBQUMsRUFDbEVNLHlCQUF5QixHQUFHVixNQUFNLENBQUNTLE9BQU8sQ0FBQ0gsb0JBQW9CLENBQUMsRUFDaEVLLFlBQVksR0FBRyxBQUFDSCwwQkFBMEIsS0FBS0UseUJBQXlCLEdBQ3ZELEFBQUMsRUFBQSxDQUFnQ0EsTUFBeUIsQ0FBdkRGLDBCQUEwQixFQUFDLEdBQUMsQ0FBNEIsQ0FBQSxNQUFBLENBQTFCRSx5QkFBeUIsQ0FBRSxHQUMxRCxBQUFDLEVBQUEsQ0FBNkIsTUFBQSxDQUEzQkYsMEJBQTBCLENBQUUsRUFDbERJLE1BQU0sR0FBR1gsUUFBUSxHQUNOLEFBQUMsRUFBQSxDQUFXLE1BQUEsQ0FBVEMsUUFBUSxDQUFFLEdBQ1gsQUFBQyxFQUFBLENBQWNTLE1BQVksQ0FBeEJULFFBQVEsRUFBQyxHQUFDLENBQWUsQ0FBQSxNQUFDLENBQWRTLFlBQVksRUFBQyxHQUFDLENBQUMsRUFDM0NFLFlBQVksR0FBR0QsTUFBTSxDQUFDRSxNQUFNLEVBQzVCQyw0QkFBNEIsR0FBR0YsWUFBWSxFQUMzQ0csdUJBQXVCLEdBQUdDLGVBQXVCLFFBQUEsQ0FBQ0MsU0FBUyxDQUFDSCw0QkFBNEIsQ0FBQyxFQUN6Rkksc0JBQXNCLEdBQUdILHVCQUF1QixDQUFDSSx5QkFBeUIsRUFBRSxFQUM1RUMsaUJBQWlCLEdBQUdKLGVBQXVCLFFBQUEsQ0FBQ0ssbUNBQW1DLENBQUN6QixpQkFBaUIsRUFBRWUsTUFBTSxFQUFFTyxzQkFBc0IsQ0FBQyxBQUFDO2dCQUV6SUUsaUJBQWlCLENBQUNFLFdBQVcsQ0FBQ1AsdUJBQXVCLENBQUMsQ0FBQztnQkFFdkQsT0FBT0ssaUJBQWlCLENBQUM7YUFDMUI7Ozs7Q0FDRixDQXZCOENKLGVBQXVCLFFBQUEsQ0F1QnJFO2tCQXZCb0JwQixpQkFBaUIifQ==