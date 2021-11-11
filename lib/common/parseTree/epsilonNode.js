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
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
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
var epsilon = _occamLexers.specialSymbols.epsilon;
var EpsilonNodeParseTree = /*#__PURE__*/ function(VerticalBranchParseTree) {
    _inherits(EpsilonNodeParseTree, VerticalBranchParseTree);
    var _super = _createSuper(EpsilonNodeParseTree);
    function EpsilonNodeParseTree() {
        _classCallCheck(this, EpsilonNodeParseTree);
        return _super.apply(this, arguments);
    }
    _createClass(EpsilonNodeParseTree, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var string = epsilon, stringLength = string.length, verticalBranchParseTreeWidth = stringLength, verticalBranchParseTree = _verticalBranch.default.fromWidth(verticalBranchParseTreeWidth), verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(), terminalNodeParseTree = _verticalBranch.default.fromStringAndVerticalBranchPosition(EpsilonNodeParseTree, string, verticalBranchPosition);
                terminalNodeParseTree.appendToTop(verticalBranchParseTree);
                var epsilonNodeParseTree = terminalNodeParseTree; ///
                return epsilonNodeParseTree;
            }
        }
    ]);
    return EpsilonNodeParseTree;
}(_verticalBranch.default);
exports.default = EpsilonNodeParseTree;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tb24vcGFyc2VUcmVlL2Vwc2lsb25Ob2RlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIGZyb20gXCIuL3ZlcnRpY2FsQnJhbmNoXCI7XG5cbmNvbnN0IHsgZXBzaWxvbiB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVwc2lsb25Ob2RlUGFyc2VUcmVlIGV4dGVuZHMgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gZXBzaWxvbiwgLy8vXG4gICAgICAgICAgc3RyaW5nTGVuZ3RoID0gc3RyaW5nLmxlbmd0aCxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoID0gc3RyaW5nTGVuZ3RoLCAvLy9cbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21XaWR0aCh2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoKSxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpLFxuICAgICAgICAgIHRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21TdHJpbmdBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKEVwc2lsb25Ob2RlUGFyc2VUcmVlLCBzdHJpbmcsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pO1xuXG4gICAgdGVybWluYWxOb2RlUGFyc2VUcmVlLmFwcGVuZFRvVG9wKHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlKTtcblxuICAgIGNvbnN0IGVwc2lsb25Ob2RlUGFyc2VUcmVlID0gdGVybWluYWxOb2RlUGFyc2VUcmVlOyAvLy9cblxuICAgIHJldHVybiBlcHNpbG9uTm9kZVBhcnNlVHJlZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImVwc2lsb24iLCJFcHNpbG9uTm9kZVBhcnNlVHJlZSIsImZyb21Ob3RoaW5nIiwic3RyaW5nIiwic3RyaW5nTGVuZ3RoIiwibGVuZ3RoIiwidmVydGljYWxCcmFuY2hQYXJzZVRyZWVXaWR0aCIsInZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwiZnJvbVdpZHRoIiwidmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJ0ZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJmcm9tU3RyaW5nQW5kVmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImFwcGVuZFRvVG9wIiwiZXBzaWxvbk5vZGVQYXJzZVRyZWUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRW1CLEdBQWMsQ0FBZCxZQUFjO0FBRVQsR0FBa0IsQ0FBbEIsZUFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEQsR0FBSyxDQUFHQSxPQUFPLEdBSmdCLFlBQWMsZ0JBSXJDQSxPQUFPO0lBRU1DLG9CQUFvQixpQkFBMUIsUUFBUTtjQUFGQSxvQkFBb0I7OEJBQXBCQSxvQkFBb0I7YUFBcEJBLG9CQUFvQjs4QkFBcEJBLG9CQUFvQjs7O2lCQUFwQkEsb0JBQW9COztZQUNoQ0MsR0FBVyxFQUFYQSxDQUFXO21CQUFsQixRQUFRLENBQURBLFdBQVcsR0FBRyxDQUFDO2dCQUNwQixHQUFLLENBQUNDLE1BQU0sR0FBR0gsT0FBTyxFQUNoQkksWUFBWSxHQUFHRCxNQUFNLENBQUNFLE1BQU0sRUFDNUJDLDRCQUE0QixHQUFHRixZQUFZLEVBQzNDRyx1QkFBdUIsR0FURyxlQUFrQixTQVNNQyxTQUFTLENBQUNGLDRCQUE0QixHQUN4Rkcsc0JBQXNCLEdBQUdGLHVCQUF1QixDQUFDRyx5QkFBeUIsSUFDMUVDLHFCQUFxQixHQVhLLGVBQWtCLFNBV0lDLG1DQUFtQyxDQUFDWCxvQkFBb0IsRUFBRUUsTUFBTSxFQUFFTSxzQkFBc0I7Z0JBRTlJRSxxQkFBcUIsQ0FBQ0UsV0FBVyxDQUFDTix1QkFBdUI7Z0JBRXpELEdBQUssQ0FBQ08sb0JBQW9CLEdBQUdILHFCQUFxQixDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFdkQsTUFBTSxDQUFDRyxvQkFBb0I7WUFDN0IsQ0FBQzs7O1dBZGtCYixvQkFBb0I7RUFKTCxlQUFrQjtrQkFJakNBLG9CQUFvQiJ9