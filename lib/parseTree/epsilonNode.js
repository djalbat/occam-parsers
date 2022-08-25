"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _occamLexers = require("occam-lexers");
var _verticalBranch = /*#__PURE__*/ _interopRequireDefault(require("../parseTree/verticalBranch"));
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
module.exports = EpsilonNodeParseTree;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZVRyZWUvZXBzaWxvbk5vZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUgZnJvbSBcIi4uL3BhcnNlVHJlZS92ZXJ0aWNhbEJyYW5jaFwiO1xuXG5jb25zdCB7IGVwc2lsb24gfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5jbGFzcyBFcHNpbG9uTm9kZVBhcnNlVHJlZSBleHRlbmRzIFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IGVwc2lsb24sIC8vL1xuICAgICAgICAgIHN0cmluZ0xlbmd0aCA9IHN0cmluZy5sZW5ndGgsXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWVXaWR0aCA9IHN0cmluZ0xlbmd0aCwgLy8vXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tV2lkdGgodmVydGljYWxCcmFuY2hQYXJzZVRyZWVXaWR0aCksXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKSxcbiAgICAgICAgICB0ZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tU3RyaW5nQW5kVmVydGljYWxCcmFuY2hQb3NpdGlvbihFcHNpbG9uTm9kZVBhcnNlVHJlZSwgc3RyaW5nLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKTtcblxuICAgIHRlcm1pbmFsTm9kZVBhcnNlVHJlZS5hcHBlbmRUb1RvcCh2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSk7XG5cbiAgICBjb25zdCBlcHNpbG9uTm9kZVBhcnNlVHJlZSA9IHRlcm1pbmFsTm9kZVBhcnNlVHJlZTsgLy8vXG5cbiAgICByZXR1cm4gZXBzaWxvbk5vZGVQYXJzZVRyZWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFcHNpbG9uTm9kZVBhcnNlVHJlZTsiXSwibmFtZXMiOlsiZXBzaWxvbiIsInNwZWNpYWxTeW1ib2xzIiwiRXBzaWxvbk5vZGVQYXJzZVRyZWUiLCJmcm9tTm90aGluZyIsInN0cmluZyIsInN0cmluZ0xlbmd0aCIsImxlbmd0aCIsInZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlV2lkdGgiLCJ2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsIlZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwiZnJvbVdpZHRoIiwidmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJ0ZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJmcm9tU3RyaW5nQW5kVmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImFwcGVuZFRvVG9wIiwiZXBzaWxvbk5vZGVQYXJzZVRyZWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7MkJBRWtCLGNBQWM7bUVBRVQsNkJBQTZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpFLElBQU0sQUFBRUEsT0FBTyxHQUFLQyxZQUFjLGVBQUEsQ0FBMUJELE9BQU8sQUFBbUIsQUFBQztBQUVuQyxJQUFBLEFBQU1FLG9CQUFvQixpQkFpQnZCLEFBakJIO2NBQU1BLG9CQUFvQjs4QkFBcEJBLG9CQUFvQjthQUFwQkEsb0JBQW9COzhCQUFwQkEsb0JBQW9COzs7aUJBQXBCQSxvQkFBb0I7O1lBQ2pCQyxHQUFXLEVBQVhBLGFBQVc7bUJBQWxCLFNBQU9BLFdBQVcsR0FBRztnQkFDbkIsSUFBTUMsTUFBTSxHQUFHSixPQUFPLEVBQ2hCSyxZQUFZLEdBQUdELE1BQU0sQ0FBQ0UsTUFBTSxFQUM1QkMsNEJBQTRCLEdBQUdGLFlBQVksRUFDM0NHLHVCQUF1QixHQUFHQyxlQUF1QixRQUFBLENBQUNDLFNBQVMsQ0FBQ0gsNEJBQTRCLENBQUMsRUFDekZJLHNCQUFzQixHQUFHSCx1QkFBdUIsQ0FBQ0kseUJBQXlCLEVBQUUsRUFDNUVDLHFCQUFxQixHQUFHSixlQUF1QixRQUFBLENBQUNLLG1DQUFtQyxDQVB2Rlosb0JBQW9CLEVBTzBGRSxNQUFNLEVBQUVPLHNCQUFzQixDQUFDLEFBQUM7Z0JBRWhKRSxxQkFBcUIsQ0FBQ0UsV0FBVyxDQUFDUCx1QkFBdUIsQ0FBQyxDQUFDO2dCQUUzRCxJQUFNUSxvQkFBb0IsR0FBR0gscUJBQXFCLEFBQUMsRUFBQyxHQUFHO2dCQUV2RCxPQUFPRyxvQkFBb0IsQ0FBQztZQUM5QixDQUFDOzs7V0FkR2Qsb0JBQW9CO0NBZXpCLENBZmtDTyxlQUF1QixRQUFBLENBZXpEO0FBRURRLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHaEIsb0JBQW9CLENBQUMifQ==