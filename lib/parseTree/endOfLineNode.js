"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
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
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
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
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
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
var END_OF_LINE = _occamLexers.specialSymbols.END_OF_LINE;
var EndOfLineNodeParseTree = /*#__PURE__*/ function(VerticalBranchParseTree) {
    _inherits(EndOfLineNodeParseTree, VerticalBranchParseTree);
    var _super = _createSuper(EndOfLineNodeParseTree);
    function EndOfLineNodeParseTree() {
        _classCallCheck(this, EndOfLineNodeParseTree);
        return _super.apply(this, arguments);
    }
    _createClass(EndOfLineNodeParseTree, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var string = END_OF_LINE, stringLength = string.length, verticalBranchParseTreeWidth = stringLength, verticalBranchParseTree = _verticalBranch.default.fromWidth(verticalBranchParseTreeWidth), verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(), terminalNodeParseTree = _verticalBranch.default.fromStringAndVerticalBranchPosition(EndOfLineNodeParseTree, string, verticalBranchPosition);
                terminalNodeParseTree.appendToTop(verticalBranchParseTree);
                var endOfLineNodeParseTree = terminalNodeParseTree; ///
                return endOfLineNodeParseTree;
            }
        }
    ]);
    return EndOfLineNodeParseTree;
}(_verticalBranch.default);
exports.default = EndOfLineNodeParseTree;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZVRyZWUvZW5kT2ZMaW5lTm9kZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSBmcm9tIFwiLi92ZXJ0aWNhbEJyYW5jaFwiO1xuXG5jb25zdCB7IEVORF9PRl9MSU5FIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5kT2ZMaW5lTm9kZVBhcnNlVHJlZSBleHRlbmRzIFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IEVORF9PRl9MSU5FLCAvLy9cbiAgICAgICAgICBzdHJpbmdMZW5ndGggPSBzdHJpbmcubGVuZ3RoLFxuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGggPSBzdHJpbmdMZW5ndGgsIC8vL1xuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZnJvbVdpZHRoKHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGgpLFxuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5nZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCksXG4gICAgICAgICAgdGVybWluYWxOb2RlUGFyc2VUcmVlID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZnJvbVN0cmluZ0FuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oRW5kT2ZMaW5lTm9kZVBhcnNlVHJlZSwgc3RyaW5nLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKTtcblxuICAgIHRlcm1pbmFsTm9kZVBhcnNlVHJlZS5hcHBlbmRUb1RvcCh2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSk7XG5cbiAgICBjb25zdCBlbmRPZkxpbmVOb2RlUGFyc2VUcmVlID0gdGVybWluYWxOb2RlUGFyc2VUcmVlOyAvLy9cblxuICAgIHJldHVybiBlbmRPZkxpbmVOb2RlUGFyc2VUcmVlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkVORF9PRl9MSU5FIiwic3BlY2lhbFN5bWJvbHMiLCJFbmRPZkxpbmVOb2RlUGFyc2VUcmVlIiwiZnJvbU5vdGhpbmciLCJzdHJpbmciLCJzdHJpbmdMZW5ndGgiLCJsZW5ndGgiLCJ2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoIiwidmVydGljYWxCcmFuY2hQYXJzZVRyZWUiLCJWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsImZyb21XaWR0aCIsInZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJnZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwidGVybWluYWxOb2RlUGFyc2VUcmVlIiwiZnJvbVN0cmluZ0FuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJhcHBlbmRUb1RvcCIsImVuZE9mTGluZU5vZGVQYXJzZVRyZWUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFa0IsSUFBQSxZQUFjLFdBQWQsY0FBYyxDQUFBO0FBRVQsSUFBQSxlQUFrQixrQ0FBbEIsa0JBQWtCLEVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEQsSUFBTSxBQUFFQSxXQUFXLEdBQUtDLFlBQWMsZUFBQSxDQUE5QkQsV0FBVyxBQUFtQixBQUFDO0FBRXhCLElBQUEsQUFBTUUsc0JBQXNCLGlCQUE1Qjs7O2FBQU1BLHNCQUFzQjs7Ozs7O1lBQ2xDQyxHQUFXLEVBQVhBLGFBQVc7bUJBQWxCLFNBQU9BLFdBQVcsR0FBRztnQkFDbkIsSUFBTUMsTUFBTSxHQUFHSixXQUFXLEVBQ3BCSyxZQUFZLEdBQUdELE1BQU0sQ0FBQ0UsTUFBTSxFQUM1QkMsNEJBQTRCLEdBQUdGLFlBQVksRUFDM0NHLHVCQUF1QixHQUFHQyxlQUF1QixRQUFBLENBQUNDLFNBQVMsQ0FBQ0gsNEJBQTRCLENBQUMsRUFDekZJLHNCQUFzQixHQUFHSCx1QkFBdUIsQ0FBQ0kseUJBQXlCLEVBQUUsRUFDNUVDLHFCQUFxQixHQUFHSixlQUF1QixRQUFBLENBQUNLLG1DQUFtQyxDQUFDWixzQkFBc0IsRUFBRUUsTUFBTSxFQUFFTyxzQkFBc0IsQ0FBQyxBQUFDO2dCQUVsSkUscUJBQXFCLENBQUNFLFdBQVcsQ0FBQ1AsdUJBQXVCLENBQUMsQ0FBQztnQkFFM0QsSUFBTVEsc0JBQXNCLEdBQUdILHFCQUFxQixBQUFDLEVBQUMsR0FBRztnQkFFekQsT0FBT0csc0JBQXNCLENBQUM7YUFDL0I7Ozs7Q0FDRixDQWZtRFAsZUFBdUIsUUFBQSxDQWUxRTtrQkFmb0JQLHNCQUFzQiJ9