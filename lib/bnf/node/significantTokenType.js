"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _nonTerminal = _interopRequireDefault(require("../../common/node/nonTerminal"));
var _significantTokenType = _interopRequireDefault(require("../part/terminal/significantTokenType"));
var _array = require("../../utilities/array");
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
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
var SignificantTokenTypeNode = function(NonTerminalNode) {
    _inherits(SignificantTokenTypeNode, NonTerminalNode);
    function SignificantTokenTypeNode() {
        _classCallCheck(this, SignificantTokenTypeNode);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(SignificantTokenTypeNode).apply(this, arguments));
        _defineProperty(_assertThisInitialized(_this), "regularExpression", /^\[([^\]]+)]$/);
        return _this;
    }
    _createClass(SignificantTokenTypeNode, [
        {
            key: "generatePart",
            value: function generatePart(lookAhead) {
                var significantTokenType = this.getSignificantTokenType(), significantTokenTypePart = new _significantTokenType.default(significantTokenType);
                return significantTokenTypePart;
            }
        },
        {
            key: "getSignificantTokenType",
            value: function getSignificantTokenType() {
                var childNodes = this.getChildNodes(), firstChildNode = (0, _array).first(childNodes), terminalNode = firstChildNode, terminalNodeContent = terminalNode.getContent(), matches = terminalNodeContent.match(this.regularExpression), secondMatch = (0, _array).second(matches), significantTokenType = secondMatch; ///
                return significantTokenType;
            }
        }
    ], [
        {
            key: "fromRuleNameAndChildNodes",
            value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
                return _nonTerminal.default.fromRuleNameAndChildNodes(SignificantTokenTypeNode, ruleName, childNodes);
            }
        }
    ]);
    return SignificantTokenTypeNode;
}(_nonTerminal.default);
exports.default = SignificantTokenTypeNode;
module.exports = SignificantTokenTypeNode;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvbm9kZS9zaWduaWZpY2FudFRva2VuVHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWxcIjtcbmltcG9ydCBTaWduaWZpY2FudFRva2VuVHlwZVBhcnQgZnJvbSBcIi4uL3BhcnQvdGVybWluYWwvc2lnbmlmaWNhbnRUb2tlblR5cGVcIjtcblxuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lnbmlmaWNhbnRUb2tlblR5cGVOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgcmVndWxhckV4cHJlc3Npb24gPSAvXlxcWyhbXlxcXV0rKV0kLztcblxuICBnZW5lcmF0ZVBhcnQobG9va0FoZWFkKSB7XG4gICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlblR5cGUgPSB0aGlzLmdldFNpZ25pZmljYW50VG9rZW5UeXBlKCksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0ID0gbmV3IFNpZ25pZmljYW50VG9rZW5UeXBlUGFydChzaWduaWZpY2FudFRva2VuVHlwZSk7XG5cbiAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0O1xuICB9XG5cbiAgZ2V0U2lnbmlmaWNhbnRUb2tlblR5cGUoKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgdGVybWluYWxOb2RlID0gZmlyc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICB0ZXJtaW5hbE5vZGVDb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBtYXRjaGVzID0gdGVybWluYWxOb2RlQ29udGVudC5tYXRjaCh0aGlzLnJlZ3VsYXJFeHByZXNzaW9uKSxcbiAgICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZSA9IHNlY29uZE1hdGNoOyAvLy9cblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuVHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhTaWduaWZpY2FudFRva2VuVHlwZU5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNpZ25pZmljYW50VG9rZW5UeXBlTm9kZTtcblxuXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFZ0IsWUFBK0I7SUFDdEIscUJBQXVDO0lBRTlDLE1BQXVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWhDLHdCQUF3QjtjQUF4Qix3QkFBd0I7YUFBeEIsd0JBQXdCOzhCQUF4Qix3QkFBd0I7O2lFQUF4Qix3QkFBd0I7d0RBQzNDLGlCQUFpQjs7O2lCQURFLHdCQUF3Qjs7WUFHM0MsR0FBWSxHQUFaLFlBQVk7NEJBQVosWUFBWSxDQUFDLFNBQVM7b0JBQ2Qsb0JBQW9CLFFBQVEsdUJBQXVCLElBQ25ELHdCQUF3QixPQVRHLHFCQUF1QyxTQVNWLG9CQUFvQjt1QkFFM0Usd0JBQXdCOzs7O1lBR2pDLEdBQXVCLEdBQXZCLHVCQUF1Qjs0QkFBdkIsdUJBQXVCO29CQUNmLFVBQVUsUUFBUSxhQUFhLElBQy9CLGNBQWMsT0FkTSxNQUF1QixRQWNwQixVQUFVLEdBQ2pDLFlBQVksR0FBRyxjQUFjLEVBQzdCLG1CQUFtQixHQUFHLFlBQVksQ0FBQyxVQUFVLElBQzdDLE9BQU8sR0FBRyxtQkFBbUIsQ0FBQyxLQUFLLE1BQU0saUJBQWlCLEdBQzFELFdBQVcsT0FsQlMsTUFBdUIsU0FrQnRCLE9BQU8sR0FDNUIsb0JBQW9CLEdBQUcsV0FBVyxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRzt1QkFFdEMsb0JBQW9COzs7OztZQUd0QixHQUF5QixHQUF6Qix5QkFBeUI7NEJBQXpCLHlCQUF5QixDQUFDLFFBQVEsRUFBRSxVQUFVO3VCQTNCM0IsWUFBK0IsU0EyQnVCLHlCQUF5QixDQUFDLHdCQUF3QixFQUFFLFFBQVEsRUFBRSxVQUFVOzs7O1dBdEJySSx3QkFBd0I7RUFMakIsWUFBK0I7a0JBS3RDLHdCQUF3QjtBQXlCN0MsTUFBTSxDQUFDLE9BQU8sR0FBRyx3QkFBd0IifQ==