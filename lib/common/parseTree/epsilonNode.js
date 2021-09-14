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
var epsilon = _occamLexers.specialSymbols.epsilon;
var EpsilonNodeParseTree = /*#__PURE__*/ function(VerticalBranchParseTree) {
    _inherits(EpsilonNodeParseTree, VerticalBranchParseTree);
    function EpsilonNodeParseTree() {
        _classCallCheck(this, EpsilonNodeParseTree);
        return _possibleConstructorReturn(this, _getPrototypeOf(EpsilonNodeParseTree).apply(this, arguments));
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tb24vcGFyc2VUcmVlL2Vwc2lsb25Ob2RlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIGZyb20gXCIuL3ZlcnRpY2FsQnJhbmNoXCI7XG5cbmNvbnN0IHsgZXBzaWxvbiB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVwc2lsb25Ob2RlUGFyc2VUcmVlIGV4dGVuZHMgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gZXBzaWxvbiwgLy8vXG4gICAgICAgICAgc3RyaW5nTGVuZ3RoID0gc3RyaW5nLmxlbmd0aCxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoID0gc3RyaW5nTGVuZ3RoLCAvLy9cbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21XaWR0aCh2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZVdpZHRoKSxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpLFxuICAgICAgICAgIHRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21TdHJpbmdBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKEVwc2lsb25Ob2RlUGFyc2VUcmVlLCBzdHJpbmcsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pO1xuXG4gICAgdGVybWluYWxOb2RlUGFyc2VUcmVlLmFwcGVuZFRvVG9wKHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlKTtcblxuICAgIGNvbnN0IGVwc2lsb25Ob2RlUGFyc2VUcmVlID0gdGVybWluYWxOb2RlUGFyc2VUcmVlOyAvLy9cblxuICAgIHJldHVybiBlcHNpbG9uTm9kZVBhcnNlVHJlZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRW1CLEdBQWMsQ0FBZCxZQUFjO0FBRVQsR0FBa0IsQ0FBbEIsZUFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RCxHQUFLLENBQUcsT0FBTyxHQUpnQixZQUFjLGdCQUlyQyxPQUFPO0lBRU0sb0JBQW9CO2NBQXBCLG9CQUFvQjthQUFwQixvQkFBb0I7OEJBQXBCLG9CQUFvQjtnRUFBcEIsb0JBQW9COztpQkFBcEIsb0JBQW9COztZQUNoQyxHQUFXLEdBQVgsV0FBVzs0QkFBWCxXQUFXLEdBQUcsQ0FBQztnQkFDcEIsR0FBSyxDQUFDLE1BQU0sR0FBRyxPQUFPLEVBQ2hCLFlBQVksR0FBRyxNQUFNLENBQUMsTUFBTSxFQUM1Qiw0QkFBNEIsR0FBRyxZQUFZLEVBQzNDLHVCQUF1QixHQVRHLGVBQWtCLFNBU00sU0FBUyxDQUFDLDRCQUE0QixHQUN4RixzQkFBc0IsR0FBRyx1QkFBdUIsQ0FBQyx5QkFBeUIsSUFDMUUscUJBQXFCLEdBWEssZUFBa0IsU0FXSSxtQ0FBbUMsQ0FBQyxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsc0JBQXNCO2dCQUU5SSxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsdUJBQXVCO2dCQUV6RCxHQUFLLENBQUMsb0JBQW9CLEdBQUcscUJBQXFCLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO3VCQUVoRCxvQkFBb0I7WUFDN0IsQ0FBQzs7O1dBZGtCLG9CQUFvQjtFQUpMLGVBQWtCO2tCQUlqQyxvQkFBb0IifQ==