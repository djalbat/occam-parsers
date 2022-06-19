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
var NO_WHITESPACE = _occamLexers.specialSymbols.NO_WHITESPACE;
var NoWhitespaceNodeParseTree = /*#__PURE__*/ function(VerticalBranchParseTree) {
    _inherits(NoWhitespaceNodeParseTree, VerticalBranchParseTree);
    var _super = _createSuper(NoWhitespaceNodeParseTree);
    function NoWhitespaceNodeParseTree() {
        _classCallCheck(this, NoWhitespaceNodeParseTree);
        return _super.apply(this, arguments);
    }
    _createClass(NoWhitespaceNodeParseTree, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var string = NO_WHITESPACE, stringLength = string.length, verticalBranchParseTreeWidth = stringLength, verticalBranchParseTree = _verticalBranch.default.fromWidth(verticalBranchParseTreeWidth), verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(), terminalNodeParseTree = _verticalBranch.default.fromStringAndVerticalBranchPosition(NoWhitespaceNodeParseTree, string, verticalBranchPosition);
                terminalNodeParseTree.appendToTop(verticalBranchParseTree);
                var noWhitespaceNodeParseTree = terminalNodeParseTree; ///
                return noWhitespaceNodeParseTree;
            }
        }
    ]);
    return NoWhitespaceNodeParseTree;
}(_verticalBranch.default);
exports.default = NoWhitespaceNodeParseTree;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZVRyZWUvbm9XaGl0ZXNwYWNlTm9kZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSBmcm9tIFwiLi92ZXJ0aWNhbEJyYW5jaFwiO1xuXG5jb25zdCB7IE5PX1dISVRFU1BBQ0UgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb1doaXRlc3BhY2VOb2RlUGFyc2VUcmVlIGV4dGVuZHMgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gTk9fV0hJVEVTUEFDRSwgLy8vXG4gICAgICAgICAgc3RyaW5nTGVuZ3RoID0gc3RyaW5nLmxlbmd0aCxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoID0gc3RyaW5nTGVuZ3RoLCAvLy9cbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21XaWR0aCh2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoKSxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpLFxuICAgICAgICAgIHRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21TdHJpbmdBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKE5vV2hpdGVzcGFjZU5vZGVQYXJzZVRyZWUsIHN0cmluZywgdmVydGljYWxCcmFuY2hQb3NpdGlvbik7XG5cbiAgICB0ZXJtaW5hbE5vZGVQYXJzZVRyZWUuYXBwZW5kVG9Ub3AodmVydGljYWxCcmFuY2hQYXJzZVRyZWUpO1xuXG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlTm9kZVBhcnNlVHJlZSA9IHRlcm1pbmFsTm9kZVBhcnNlVHJlZTsgLy8vXG5cbiAgICByZXR1cm4gbm9XaGl0ZXNwYWNlTm9kZVBhcnNlVHJlZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJOT19XSElURVNQQUNFIiwic3BlY2lhbFN5bWJvbHMiLCJOb1doaXRlc3BhY2VOb2RlUGFyc2VUcmVlIiwiZnJvbU5vdGhpbmciLCJzdHJpbmciLCJzdHJpbmdMZW5ndGgiLCJsZW5ndGgiLCJ2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoIiwidmVydGljYWxCcmFuY2hQYXJzZVRyZWUiLCJWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsImZyb21XaWR0aCIsInZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJnZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwidGVybWluYWxOb2RlUGFyc2VUcmVlIiwiZnJvbVN0cmluZ0FuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJhcHBlbmRUb1RvcCIsIm5vV2hpdGVzcGFjZU5vZGVQYXJzZVRyZWUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFa0IsSUFBQSxZQUFjLFdBQWQsY0FBYyxDQUFBO0FBRVQsSUFBQSxlQUFrQixrQ0FBbEIsa0JBQWtCLEVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEQsSUFBTSxBQUFFQSxhQUFhLEdBQUtDLFlBQWMsZUFBQSxDQUFoQ0QsYUFBYSxBQUFtQixBQUFDO0FBRTFCLElBQUEsQUFBTUUseUJBQXlCLGlCQUEvQjs7O2FBQU1BLHlCQUF5Qjs7Ozs7O1lBQ3JDQyxHQUFXLEVBQVhBLGFBQVc7bUJBQWxCLFNBQU9BLFdBQVcsR0FBRztnQkFDbkIsSUFBTUMsTUFBTSxHQUFHSixhQUFhLEVBQ3RCSyxZQUFZLEdBQUdELE1BQU0sQ0FBQ0UsTUFBTSxFQUM1QkMsNEJBQTRCLEdBQUdGLFlBQVksRUFDM0NHLHVCQUF1QixHQUFHQyxlQUF1QixRQUFBLENBQUNDLFNBQVMsQ0FBQ0gsNEJBQTRCLENBQUMsRUFDekZJLHNCQUFzQixHQUFHSCx1QkFBdUIsQ0FBQ0kseUJBQXlCLEVBQUUsRUFDNUVDLHFCQUFxQixHQUFHSixlQUF1QixRQUFBLENBQUNLLG1DQUFtQyxDQUFDWix5QkFBeUIsRUFBRUUsTUFBTSxFQUFFTyxzQkFBc0IsQ0FBQyxBQUFDO2dCQUVySkUscUJBQXFCLENBQUNFLFdBQVcsQ0FBQ1AsdUJBQXVCLENBQUMsQ0FBQztnQkFFM0QsSUFBTVEseUJBQXlCLEdBQUdILHFCQUFxQixBQUFDLEVBQUMsR0FBRztnQkFFNUQsT0FBT0cseUJBQXlCLENBQUM7YUFDbEM7Ozs7Q0FDRixDQWZzRFAsZUFBdUIsUUFBQSxDQWU3RTtrQkFmb0JQLHlCQUF5QiJ9