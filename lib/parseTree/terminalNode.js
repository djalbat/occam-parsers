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
var NEW_LINE_CHARACTER = _necessary.characters.NEW_LINE_CHARACTER, CARRIAGE_RETURN_CHARACTER = _necessary.characters.CARRIAGE_RETURN_CHARACTER;
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
                var content;
                content = terminalNode.getContent();
                content = content.replace(/[\r\n]/g, function(match) {
                    switch(match){
                        case CARRIAGE_RETURN_CHARACTER:
                            return "\\r";
                        case NEW_LINE_CHARACTER:
                            return "\\n";
                        default:
                            return match;
                    }
                });
                var type = terminalNode.getType(), significantTokenIndex = terminalNode.getSignificantTokenIndex(tokens), lineIndex = (0, _tokens.lineIndexFromTokenIndexAndTokens)(significantTokenIndex, tokens);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZVRyZWUvdGVybWluYWxOb2RlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjaGFyYWN0ZXJzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUgZnJvbSBcIi4vdmVydGljYWxCcmFuY2hcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgbGluZUluZGV4RnJvbVRva2VuSW5kZXhBbmRUb2tlbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Rva2Vuc1wiO1xuXG5jb25zdCB7IE5FV19MSU5FX0NIQVJBQ1RFUiwgQ0FSUklBR0VfUkVUVVJOX0NIQVJBQ1RFUiB9ID0gY2hhcmFjdGVycztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVybWluYWxOb2RlUGFyc2VUcmVlIGV4dGVuZHMgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUge1xuICBzdGF0aWMgZnJvbVRlcm1pbmFsTm9kZUFuZFRva2Vucyh0ZXJtaW5hbE5vZGUsIHRva2Vucykge1xuICAgIGxldCBjb250ZW50O1xuXG4gICAgY29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKC9bXFxyXFxuXS9nLCAobWF0Y2gpID0+IHtcbiAgICAgIHN3aXRjaCAobWF0Y2gpIHtcbiAgICAgICAgY2FzZSBDQVJSSUFHRV9SRVRVUk5fQ0hBUkFDVEVSOlxuICAgICAgICAgIHJldHVybiBcIlxcXFxyXCI7XG5cbiAgICAgICAgY2FzZSBORVdfTElORV9DSEFSQUNURVI6XG4gICAgICAgICAgcmV0dXJuIFwiXFxcXG5cIjtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHR5cGUgPSB0ZXJtaW5hbE5vZGUuZ2V0VHlwZSgpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5JbmRleCA9IHRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKSxcbiAgICAgICAgICBsaW5lSW5kZXggPSBsaW5lSW5kZXhGcm9tVG9rZW5JbmRleEFuZFRva2VucyhzaWduaWZpY2FudFRva2VuSW5kZXgsIHRva2Vucyk7XG5cbiAgICBsZXQgbGluZUluZGV4ZXM7XG5cbiAgICBpZiAobGluZUluZGV4ID09PSBudWxsKSB7XG4gICAgICBsaW5lSW5kZXhlcyA9IEVNUFRZX1NUUklORztcbiAgICB9IGVsc2Uge1xuICAgICAgbGluZUluZGV4ZXMgPSBgIFske2xpbmVJbmRleH1dYDtcbiAgICB9XG5cbiAgICBjb25zdCBzdHJpbmcgPSBgXCIke2NvbnRlbnR9XCJbJHt0eXBlfV0ke2xpbmVJbmRleGVzfWAsXG4gICAgICAgICAgc3RyaW5nTGVuZ3RoID0gc3RyaW5nLmxlbmd0aCxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoID0gc3RyaW5nTGVuZ3RoLCAvLy9cbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21XaWR0aCh2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoKSxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpLFxuICAgICAgICAgIHRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21TdHJpbmdBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKFRlcm1pbmFsTm9kZVBhcnNlVHJlZSwgc3RyaW5nLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKTtcblxuICAgIHRlcm1pbmFsTm9kZVBhcnNlVHJlZS5hcHBlbmRUb1RvcCh2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSk7XG5cbiAgICByZXR1cm4gdGVybWluYWxOb2RlUGFyc2VUcmVlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiVGVybWluYWxOb2RlUGFyc2VUcmVlIiwiTkVXX0xJTkVfQ0hBUkFDVEVSIiwiY2hhcmFjdGVycyIsIkNBUlJJQUdFX1JFVFVSTl9DSEFSQUNURVIiLCJmcm9tVGVybWluYWxOb2RlQW5kVG9rZW5zIiwidGVybWluYWxOb2RlIiwidG9rZW5zIiwiY29udGVudCIsImdldENvbnRlbnQiLCJyZXBsYWNlIiwibWF0Y2giLCJ0eXBlIiwiZ2V0VHlwZSIsInNpZ25pZmljYW50VG9rZW5JbmRleCIsImdldFNpZ25pZmljYW50VG9rZW5JbmRleCIsImxpbmVJbmRleCIsImxpbmVJbmRleEZyb21Ub2tlbkluZGV4QW5kVG9rZW5zIiwibGluZUluZGV4ZXMiLCJFTVBUWV9TVFJJTkciLCJzdHJpbmciLCJzdHJpbmdMZW5ndGgiLCJsZW5ndGgiLCJ2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoIiwidmVydGljYWxCcmFuY2hQYXJzZVRyZWUiLCJWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsImZyb21XaWR0aCIsInZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJnZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwidGVybWluYWxOb2RlUGFyc2VUcmVlIiwiZnJvbVN0cmluZ0FuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJhcHBlbmRUb1RvcCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFXcUJBOzs7eUJBVE07cUVBRVM7eUJBRVA7c0JBQ29COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpELElBQVFDLHFCQUFrREMscUJBQVUsQ0FBNURELG9CQUFvQkUsNEJBQThCRCxxQkFBVSxDQUF4Q0M7QUFFYixJQUFBLEFBQU1ILHNDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ1pJLEtBQUFBO21CQUFQLFNBQU9BLDBCQUEwQkMsWUFBWSxFQUFFQyxNQUFNO2dCQUNuRCxJQUFJQztnQkFFSkEsVUFBVUYsYUFBYUcsVUFBVTtnQkFFakNELFVBQVVBLFFBQVFFLE9BQU8sQ0FBQyxXQUFXLFNBQUNDO29CQUNwQyxPQUFRQTt3QkFDTixLQUFLUDs0QkFDSCxPQUFPO3dCQUVULEtBQUtGOzRCQUNILE9BQU87d0JBRVQ7NEJBQ0UsT0FBT1M7b0JBQ1g7Z0JBQ0Y7Z0JBRUEsSUFBTUMsT0FBT04sYUFBYU8sT0FBTyxJQUMzQkMsd0JBQXdCUixhQUFhUyx3QkFBd0IsQ0FBQ1IsU0FDOURTLFlBQVlDLElBQUFBLHdDQUFnQyxFQUFDSCx1QkFBdUJQO2dCQUUxRSxJQUFJVztnQkFFSixJQUFJRixjQUFjLE1BQU07b0JBQ3RCRSxjQUFjQyx1QkFBWTtnQkFDNUIsT0FBTztvQkFDTEQsY0FBYyxBQUFDLEtBQWMsT0FBVkYsV0FBVTtnQkFDL0I7Z0JBRUEsSUFBTUksU0FBUyxBQUFDLElBQWVSLE9BQVpKLFNBQVEsTUFBWVUsT0FBUk4sTUFBSyxLQUFlLE9BQVpNLGNBQ2pDRyxlQUFlRCxPQUFPRSxNQUFNLEVBQzVCQywrQkFBK0JGLGNBQy9CRywwQkFBMEJDLHVCQUF1QixDQUFDQyxTQUFTLENBQUNILCtCQUM1REkseUJBQXlCSCx3QkFBd0JJLHlCQUF5QixJQUMxRUMsd0JBQXdCSix1QkFBdUIsQ0FBQ0ssbUNBQW1DLENBcEN4RTdCLHVCQW9DZ0dtQixRQUFRTztnQkFFekhFLHNCQUFzQkUsV0FBVyxDQUFDUDtnQkFFbEMsT0FBT0s7WUFDVDs7O1dBekNtQjVCO0VBQThCd0IsdUJBQXVCIn0=