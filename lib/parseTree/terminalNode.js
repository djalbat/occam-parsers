"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TerminalNodeParseTree;
    }
});
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
var TerminalNodeParseTree = /*#__PURE__*/ function(VerticalBranchParseTree) {
    _inherits(TerminalNodeParseTree, VerticalBranchParseTree);
    function TerminalNodeParseTree() {
        _class_call_check(this, TerminalNodeParseTree);
        return _call_super(this, TerminalNodeParseTree, arguments);
    }
    _create_class(TerminalNodeParseTree, null, [
        {
            key: "fromTerminalNodeAndTokens",
            value: function fromTerminalNodeAndTokens(terminalNode, tokens) {
                var type = terminalNode.getType(), content = terminalNode.getContent(), significantTokenIndex = terminalNode.getSignificantTokenIndex(tokens), lineIndex = (0, _tokens.lineIndexFromTokenIndexAndTokens)(significantTokenIndex, tokens);
                var lineIndexes;
                if (lineIndex === null) {
                    lineIndexes = _constants.EMPTY_STRING;
                } else {
                    lineIndexes = " [".concat(lineIndex, "]");
                }
                var string = '"'.concat(content, '"[').concat(type, "]").concat(lineIndexes), stringLength = string.length, verticalBranchParseTreeWidth = stringLength, verticalBranchParseTree = _verticalBranch.default.fromWidth(verticalBranchParseTreeWidth), verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(), terminalNodeParseTree = _verticalBranch.default.fromStringAndVerticalBranchPosition(TerminalNodeParseTree, string, verticalBranchPosition);
                terminalNodeParseTree.appendToTop(verticalBranchParseTree);
                return terminalNodeParseTree;
            }
        }
    ]);
    return TerminalNodeParseTree;
}(_verticalBranch.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZVRyZWUvdGVybWluYWxOb2RlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUgZnJvbSBcIi4vdmVydGljYWxCcmFuY2hcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgbGluZUluZGV4RnJvbVRva2VuSW5kZXhBbmRUb2tlbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Rva2Vuc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXJtaW5hbE5vZGVQYXJzZVRyZWUgZXh0ZW5kcyBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSB7XG4gIHN0YXRpYyBmcm9tVGVybWluYWxOb2RlQW5kVG9rZW5zKHRlcm1pbmFsTm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgdHlwZSA9IHRlcm1pbmFsTm9kZS5nZXRUeXBlKCksXG4gICAgICAgICAgY29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gdGVybWluYWxOb2RlLmdldFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpLFxuICAgICAgICAgIGxpbmVJbmRleCA9IGxpbmVJbmRleEZyb21Ub2tlbkluZGV4QW5kVG9rZW5zKHNpZ25pZmljYW50VG9rZW5JbmRleCwgdG9rZW5zKTtcblxuICAgIGxldCBsaW5lSW5kZXhlcztcblxuICAgIGlmIChsaW5lSW5kZXggPT09IG51bGwpIHtcbiAgICAgIGxpbmVJbmRleGVzID0gRU1QVFlfU1RSSU5HO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaW5lSW5kZXhlcyA9IGAgWyR7bGluZUluZGV4fV1gO1xuICAgIH1cblxuICAgIGNvbnN0IHN0cmluZyA9IGBcIiR7Y29udGVudH1cIlske3R5cGV9XSR7bGluZUluZGV4ZXN9YCxcbiAgICAgICAgICBzdHJpbmdMZW5ndGggPSBzdHJpbmcubGVuZ3RoLFxuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGggPSBzdHJpbmdMZW5ndGgsIC8vL1xuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZnJvbVdpZHRoKHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGgpLFxuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5nZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCksXG4gICAgICAgICAgdGVybWluYWxOb2RlUGFyc2VUcmVlID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZnJvbVN0cmluZ0FuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oVGVybWluYWxOb2RlUGFyc2VUcmVlLCBzdHJpbmcsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pO1xuXG4gICAgdGVybWluYWxOb2RlUGFyc2VUcmVlLmFwcGVuZFRvVG9wKHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlKTtcblxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGVQYXJzZVRyZWU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJUZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJmcm9tVGVybWluYWxOb2RlQW5kVG9rZW5zIiwidGVybWluYWxOb2RlIiwidG9rZW5zIiwidHlwZSIsImdldFR5cGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInNpZ25pZmljYW50VG9rZW5JbmRleCIsImdldFNpZ25pZmljYW50VG9rZW5JbmRleCIsImxpbmVJbmRleCIsImxpbmVJbmRleEZyb21Ub2tlbkluZGV4QW5kVG9rZW5zIiwibGluZUluZGV4ZXMiLCJFTVBUWV9TVFJJTkciLCJzdHJpbmciLCJzdHJpbmdMZW5ndGgiLCJsZW5ndGgiLCJ2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoIiwidmVydGljYWxCcmFuY2hQYXJzZVRyZWUiLCJWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsImZyb21XaWR0aCIsInZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJnZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwidGVybWluYWxOb2RlUGFyc2VUcmVlIiwiZnJvbVN0cmluZ0FuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJhcHBlbmRUb1RvcCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7cUVBTGU7eUJBRVA7c0JBQ29COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxDLElBQUEsQUFBTUEsc0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDWkMsS0FBQUE7bUJBQVAsU0FBT0EsMEJBQTBCQyxZQUFZLEVBQUVDLE1BQU07Z0JBQ25ELElBQU1DLE9BQU9GLGFBQWFHLE9BQU8sSUFDM0JDLFVBQVVKLGFBQWFLLFVBQVUsSUFDakNDLHdCQUF3Qk4sYUFBYU8sd0JBQXdCLENBQUNOLFNBQzlETyxZQUFZQyxJQUFBQSx3Q0FBZ0MsRUFBQ0gsdUJBQXVCTDtnQkFFMUUsSUFBSVM7Z0JBRUosSUFBSUYsY0FBYyxNQUFNO29CQUN0QkUsY0FBY0MsdUJBQVk7Z0JBQzVCLE9BQU87b0JBQ0xELGNBQWMsQUFBQyxLQUFjLE9BQVZGLFdBQVU7Z0JBQy9CO2dCQUVBLElBQU1JLFNBQVMsQUFBQyxJQUFlVixPQUFaRSxTQUFRLE1BQVlNLE9BQVJSLE1BQUssS0FBZSxPQUFaUSxjQUNqQ0csZUFBZUQsT0FBT0UsTUFBTSxFQUM1QkMsK0JBQStCRixjQUMvQkcsMEJBQTBCQyx1QkFBdUIsQ0FBQ0MsU0FBUyxDQUFDSCwrQkFDNURJLHlCQUF5Qkgsd0JBQXdCSSx5QkFBeUIsSUFDMUVDLHdCQUF3QkosdUJBQXVCLENBQUNLLG1DQUFtQyxDQXBCeEV4Qix1QkFvQmdHYyxRQUFRTztnQkFFekhFLHNCQUFzQkUsV0FBVyxDQUFDUDtnQkFFbEMsT0FBT0s7WUFDVDs7O1dBekJtQnZCO0VBQThCbUIsdUJBQXVCIn0=