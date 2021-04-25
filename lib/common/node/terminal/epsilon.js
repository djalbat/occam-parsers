"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
var _terminal = _interopRequireDefault(require("../terminal"));
var _epsilonNode = _interopRequireDefault(require("../../parseTree/epsilonNode"));
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
var EpsilonNode = function(TerminalNode) {
    _inherits(EpsilonNode, TerminalNode);
    function EpsilonNode() {
        _classCallCheck(this, EpsilonNode);
        return _possibleConstructorReturn(this, _getPrototypeOf(EpsilonNode).apply(this, arguments));
    }
    _createClass(EpsilonNode, [
        {
            key: "getContent",
            value: function getContent() {
                var content = epsilon; ///
                return content;
            }
        },
        {
            key: "isEpsilonNode",
            value: function isEpsilonNode() {
                var epsilonNode = true;
                return epsilonNode;
            }
        },
        {
            key: "asParseTree",
            value: function asParseTree(tokens) {
                var epsilonNodeParseTree = _epsilonNode.default.fromNothing(), parseTree = epsilonNodeParseTree; ///
                return parseTree;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var significantToken = null, epsilonNode = _terminal.default.fromSignificantToken(EpsilonNode, significantToken);
                return epsilonNode;
            }
        }
    ]);
    return EpsilonNode;
}(_terminal.default);
exports.default = EpsilonNode;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21tb24vbm9kZS90ZXJtaW5hbC9lcHNpbG9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IFRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vdGVybWluYWxcIjtcbmltcG9ydCBFcHNpbG9uTm9kZVBhcnNlVHJlZSBmcm9tIFwiLi4vLi4vcGFyc2VUcmVlL2Vwc2lsb25Ob2RlXCI7XG5cbmNvbnN0IHsgZXBzaWxvbiB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVwc2lsb25Ob2RlIGV4dGVuZHMgVGVybWluYWxOb2RlIHtcbiAgZ2V0Q29udGVudCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZXBzaWxvbjsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpc0Vwc2lsb25Ob2RlKCkge1xuICAgIGNvbnN0IGVwc2lsb25Ob2RlID0gdHJ1ZTtcbiAgICBcbiAgICByZXR1cm4gZXBzaWxvbk5vZGU7XG4gIH1cblxuICBhc1BhcnNlVHJlZSh0b2tlbnMpIHtcbiAgICBjb25zdCBlcHNpbG9uTm9kZVBhcnNlVHJlZSA9IEVwc2lsb25Ob2RlUGFyc2VUcmVlLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcGFyc2VUcmVlID0gZXBzaWxvbk5vZGVQYXJzZVRyZWU7ICAvLy9cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IG51bGwsXG4gICAgICAgICAgZXBzaWxvbk5vZGUgPSBUZXJtaW5hbE5vZGUuZnJvbVNpZ25pZmljYW50VG9rZW4oRXBzaWxvbk5vZGUsIHNpZ25pZmljYW50VG9rZW4pO1xuXG4gICAgcmV0dXJuIGVwc2lsb25Ob2RlO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFbUIsWUFBYztJQUVwQixTQUFhO0lBQ0wsWUFBNkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV0RCxPQUFPLEdBTGdCLFlBQWMsZ0JBS3JDLE9BQU87SUFFTSxXQUFXO2NBQVgsV0FBVzthQUFYLFdBQVc7OEJBQVgsV0FBVztnRUFBWCxXQUFXOztpQkFBWCxXQUFXOztZQUM5QixHQUFVLEdBQVYsVUFBVTs0QkFBVixVQUFVO29CQUNGLE9BQU8sR0FBRyxPQUFPLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO3VCQUV0QixPQUFPOzs7O1lBR2hCLEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWE7b0JBQ0wsV0FBVyxHQUFHLElBQUk7dUJBRWpCLFdBQVc7Ozs7WUFHcEIsR0FBVyxHQUFYLFdBQVc7NEJBQVgsV0FBVyxDQUFDLE1BQU07b0JBQ1Ysb0JBQW9CLEdBbEJHLFlBQTZCLFNBa0JSLFdBQVcsSUFDdkQsU0FBUyxHQUFHLG9CQUFvQixDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRzt1QkFFckMsU0FBUzs7Ozs7WUFHWCxHQUFXLEdBQVgsV0FBVzs0QkFBWCxXQUFXO29CQUNWLGdCQUFnQixHQUFHLElBQUksRUFDdkIsV0FBVyxHQTNCSSxTQUFhLFNBMkJELG9CQUFvQixDQUFDLFdBQVcsRUFBRSxnQkFBZ0I7dUJBRTVFLFdBQVc7Ozs7V0F4QkQsV0FBVztFQUxQLFNBQWE7a0JBS2pCLFdBQVcifQ==