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
var _constants = require("../constants");
var _tokens = require("../utilities/tokens");
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
var SPACE_CHARACTER = _necessary.characters.SPACE_CHARACTER;
var RuleNameParseTree = /*#__PURE__*/ function(VerticalBranchParseTree) {
    _inherits(RuleNameParseTree, VerticalBranchParseTree);
    function RuleNameParseTree() {
        _class_call_check(this, RuleNameParseTree);
        return _call_super(this, RuleNameParseTree, arguments);
    }
    _create_class(RuleNameParseTree, null, [
        {
            key: "fromNonTerminalNodeAndTokens",
            value: function fromNonTerminalNodeAndTokens(nonTerminalNode, tokens) {
                var ruleName = nonTerminalNode.getRuleName(), opacity = nonTerminalNode.getOpacity(), firstSignificantTokenIndex = nonTerminalNode.getFirstSignificantTokenIndex(tokens), lastSignificantTokenIndex = nonTerminalNode.getLastSignificantTokenIndex(tokens), firstLineIndex = (0, _tokens.lineIndexFromTokenIndexAndTokens)(firstSignificantTokenIndex, tokens), lastLineIndex = (0, _tokens.lineIndexFromTokenIndexAndTokens)(lastSignificantTokenIndex, tokens);
                var lineIndexes;
                if (firstLineIndex === lastLineIndex) {
                    var lineIndex = firstLineIndex; ///
                    if (lineIndex === null) {
                        lineIndexes = _constants.EMPTY_STRING;
                    } else {
                        lineIndexes = " [".concat(lineIndex, "]");
                    }
                } else {
                    if (false) {
                    ///
                    } else if (firstLineIndex === null) {
                        lineIndexes = " [".concat(lastLineIndex, "]");
                    } else if (lastLineIndex === null) {
                        lineIndexes = " [".concat(firstLineIndex, "]");
                    } else {
                        lineIndexes = " [".concat(firstLineIndex, "-").concat(lastLineIndex, "]");
                    }
                }
                var string = "".concat(ruleName);
                if (opacity !== null) {
                    string = "".concat(string).concat(opacity);
                }
                string = "".concat(string).concat(lineIndexes);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZVRyZWUvcnVsZU5hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNoYXJhY3RlcnN9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIGZyb20gXCIuL3ZlcnRpY2FsQnJhbmNoXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGxpbmVJbmRleEZyb21Ub2tlbkluZGV4QW5kVG9rZW5zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy90b2tlbnNcIjtcblxuY29uc3QgeyBTUEFDRV9DSEFSQUNURVIgfSA9IGNoYXJhY3RlcnM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVOYW1lUGFyc2VUcmVlIGV4dGVuZHMgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUge1xuICBzdGF0aWMgZnJvbU5vblRlcm1pbmFsTm9kZUFuZFRva2Vucyhub25UZXJtaW5hbE5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgb3BhY2l0eSA9IG5vblRlcm1pbmFsTm9kZS5nZXRPcGFjaXR5KCksXG4gICAgICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSBub25UZXJtaW5hbE5vZGUuZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKSxcbiAgICAgICAgICBsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9uVGVybWluYWxOb2RlLmdldExhc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKSxcbiAgICAgICAgICBmaXJzdExpbmVJbmRleCA9IGxpbmVJbmRleEZyb21Ub2tlbkluZGV4QW5kVG9rZW5zKGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4LCB0b2tlbnMpLFxuICAgICAgICAgIGxhc3RMaW5lSW5kZXggPSBsaW5lSW5kZXhGcm9tVG9rZW5JbmRleEFuZFRva2VucyhsYXN0U2lnbmlmaWNhbnRUb2tlbkluZGV4LCB0b2tlbnMpO1xuXG4gICAgbGV0IGxpbmVJbmRleGVzO1xuXG4gICAgaWYgKGZpcnN0TGluZUluZGV4ID09PSBsYXN0TGluZUluZGV4KSB7XG4gICAgICBjb25zdCBsaW5lSW5kZXggPSBmaXJzdExpbmVJbmRleDsgLy8vXG5cbiAgICAgIGlmIChsaW5lSW5kZXggPT09IG51bGwpIHtcbiAgICAgICAgbGluZUluZGV4ZXMgPSBFTVBUWV9TVFJJTkc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaW5lSW5kZXhlcyA9IGAgWyR7bGluZUluZGV4fV1gO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZmFsc2UpIHtcbiAgICAgICAgLy8vXG4gICAgICB9IGVsc2UgaWYgKGZpcnN0TGluZUluZGV4ID09PSBudWxsKSB7XG4gICAgICAgIGxpbmVJbmRleGVzID0gYCBbJHtsYXN0TGluZUluZGV4fV1gO1xuICAgICAgfSBlbHNlIGlmIChsYXN0TGluZUluZGV4ID09PSBudWxsKSB7XG4gICAgICAgIGxpbmVJbmRleGVzID0gYCBbJHtmaXJzdExpbmVJbmRleH1dYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpbmVJbmRleGVzID0gYCBbJHtmaXJzdExpbmVJbmRleH0tJHtsYXN0TGluZUluZGV4fV1gXG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHN0cmluZyA9IGAke3J1bGVOYW1lfWA7XG5cbiAgICBpZiAob3BhY2l0eSAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gYCR7c3RyaW5nfSR7b3BhY2l0eX1gO1xuICAgIH1cblxuICAgIHN0cmluZyA9IGAke3N0cmluZ30ke2xpbmVJbmRleGVzfWA7XG5cbiAgICBsZXQgcHJlY2VkZW5jZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRQcmVjZWRlbmNlKCk7XG5cbiAgICBpZiAocHJlY2VkZW5jZSAhPT0gbnVsbCkge1xuICAgICAgaWYgKHByZWNlZGVuY2UgPT09IEluZmluaXR5KSB7XG4gICAgICAgIHByZWNlZGVuY2UgPSBTUEFDRV9DSEFSQUNURVI7XG4gICAgICB9XG5cbiAgICAgIHN0cmluZyA9IGAke3N0cmluZ30gKCR7cHJlY2VkZW5jZX0pYDtcbiAgICB9XG5cbiAgICBjb25zdCBzdHJpbmdMZW5ndGggPSBzdHJpbmcubGVuZ3RoLFxuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGggPSBzdHJpbmdMZW5ndGgsIC8vL1xuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZnJvbVdpZHRoKHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGgpLFxuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5nZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCksXG4gICAgICAgICAgcnVsZU5hbWVQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tU3RyaW5nQW5kVmVydGljYWxCcmFuY2hQb3NpdGlvbihSdWxlTmFtZVBhcnNlVHJlZSwgc3RyaW5nLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKTtcblxuICAgIHJ1bGVOYW1lUGFyc2VUcmVlLmFwcGVuZFRvVG9wKHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlKTtcblxuICAgIHJldHVybiBydWxlTmFtZVBhcnNlVHJlZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlJ1bGVOYW1lUGFyc2VUcmVlIiwiU1BBQ0VfQ0hBUkFDVEVSIiwiY2hhcmFjdGVycyIsImZyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnMiLCJub25UZXJtaW5hbE5vZGUiLCJ0b2tlbnMiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwib3BhY2l0eSIsImdldE9wYWNpdHkiLCJmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwibGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImdldExhc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJmaXJzdExpbmVJbmRleCIsImxpbmVJbmRleEZyb21Ub2tlbkluZGV4QW5kVG9rZW5zIiwibGFzdExpbmVJbmRleCIsImxpbmVJbmRleGVzIiwibGluZUluZGV4IiwiRU1QVFlfU1RSSU5HIiwic3RyaW5nIiwicHJlY2VkZW5jZSIsImdldFByZWNlZGVuY2UiLCJJbmZpbml0eSIsInN0cmluZ0xlbmd0aCIsImxlbmd0aCIsInZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGgiLCJ2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsIlZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwiZnJvbVdpZHRoIiwidmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJydWxlTmFtZVBhcnNlVHJlZSIsImZyb21TdHJpbmdBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiYXBwZW5kVG9Ub3AiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBV3FCQTs7O3lCQVRLO3FFQUVVO3lCQUVQO3NCQUNvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqRCxJQUFNLEFBQUVDLGtCQUFvQkMscUJBQVUsQ0FBOUJEO0FBRU8sSUFBQSxBQUFNRCxrQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNaRyxLQUFBQTttQkFBUCxTQUFPQSw2QkFBNkJDLGVBQWUsRUFBRUMsTUFBTTtnQkFDekQsSUFBTUMsV0FBV0YsZ0JBQWdCRyxXQUFXLElBQ3RDQyxVQUFVSixnQkFBZ0JLLFVBQVUsSUFDcENDLDZCQUE2Qk4sZ0JBQWdCTyw2QkFBNkIsQ0FBQ04sU0FDM0VPLDRCQUE0QlIsZ0JBQWdCUyw0QkFBNEIsQ0FBQ1IsU0FDekVTLGlCQUFpQkMsSUFBQUEsd0NBQWdDLEVBQUNMLDRCQUE0QkwsU0FDOUVXLGdCQUFnQkQsSUFBQUEsd0NBQWdDLEVBQUNILDJCQUEyQlA7Z0JBRWxGLElBQUlZO2dCQUVKLElBQUlILG1CQUFtQkUsZUFBZTtvQkFDcEMsSUFBTUUsWUFBWUosZ0JBQWdCLEdBQUc7b0JBRXJDLElBQUlJLGNBQWMsTUFBTTt3QkFDdEJELGNBQWNFLHVCQUFZO29CQUM1QixPQUFPO3dCQUNMRixjQUFjLEFBQUMsS0FBYyxPQUFWQyxXQUFVO29CQUMvQjtnQkFDRixPQUFPO29CQUNMLElBQUksT0FBTztvQkFDVCxHQUFHO29CQUNMLE9BQU8sSUFBSUosbUJBQW1CLE1BQU07d0JBQ2xDRyxjQUFjLEFBQUMsS0FBa0IsT0FBZEQsZUFBYztvQkFDbkMsT0FBTyxJQUFJQSxrQkFBa0IsTUFBTTt3QkFDakNDLGNBQWMsQUFBQyxLQUFtQixPQUFmSCxnQkFBZTtvQkFDcEMsT0FBTzt3QkFDTEcsY0FBYyxBQUFDLEtBQXNCRCxPQUFsQkYsZ0JBQWUsS0FBaUIsT0FBZEUsZUFBYztvQkFDckQ7Z0JBQ0Y7Z0JBRUEsSUFBSUksU0FBUyxBQUFDLEdBQVcsT0FBVGQ7Z0JBRWhCLElBQUlFLFlBQVksTUFBTTtvQkFDcEJZLFNBQVMsQUFBQyxHQUFXWixPQUFUWSxRQUFpQixPQUFSWjtnQkFDdkI7Z0JBRUFZLFNBQVMsQUFBQyxHQUFXSCxPQUFURyxRQUFxQixPQUFaSDtnQkFFckIsSUFBSUksYUFBYWpCLGdCQUFnQmtCLGFBQWE7Z0JBRTlDLElBQUlELGVBQWUsTUFBTTtvQkFDdkIsSUFBSUEsZUFBZUUsVUFBVTt3QkFDM0JGLGFBQWFwQjtvQkFDZjtvQkFFQW1CLFNBQVMsQUFBQyxHQUFhQyxPQUFYRCxRQUFPLE1BQWUsT0FBWEMsWUFBVztnQkFDcEM7Z0JBRUEsSUFBTUcsZUFBZUosT0FBT0ssTUFBTSxFQUM1QkMsK0JBQStCRixjQUMvQkcsMEJBQTBCQyx1QkFBdUIsQ0FBQ0MsU0FBUyxDQUFDSCwrQkFDNURJLHlCQUF5Qkgsd0JBQXdCSSx5QkFBeUIsSUFDMUVDLG9CQUFvQkosdUJBQXVCLENBQUNLLG1DQUFtQyxDQXJEcEVqQyxtQkFxRHdGb0IsUUFBUVU7Z0JBRWpIRSxrQkFBa0JFLFdBQVcsQ0FBQ1A7Z0JBRTlCLE9BQU9LO1lBQ1Q7OztXQTFEbUJoQztFQUEwQjRCLHVCQUF1QiJ9