"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _rule = _interopRequireDefault(require("../rule"));
var _sequenceOfParts = _interopRequireDefault(require("../node/sequenceOfParts"));
var _sequenceOfParts1 = _interopRequireDefault(require("../definition/sequenceOfParts"));
var _ruleNames = require("../ruleNames");
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
var SequenceOfPartsRule = function(Rule) {
    _inherits(SequenceOfPartsRule, _rule.default);
    function SequenceOfPartsRule() {
        _classCallCheck(this, SequenceOfPartsRule);
        var name = _ruleNames.SequenceOfPartsRuleName, sequenceOfPartsDefinition = new _sequenceOfParts1.default(), definitions = [
            sequenceOfPartsDefinition
        ], Node1 = _sequenceOfParts.default;
        return _possibleConstructorReturn(this, _getPrototypeOf(SequenceOfPartsRule).call(this, name, definitions, Node1));
    }
    return SequenceOfPartsRule;
}(_rule.default);
exports.default = SequenceOfPartsRule;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvcnVsZS9zZXF1ZW5jZU9mUGFydHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi9ydWxlXCI7XG5pbXBvcnQgU2VxdWVuY2VPZlBhcnRzTm9kZSBmcm9tIFwiLi4vbm9kZS9zZXF1ZW5jZU9mUGFydHNcIjtcbmltcG9ydCBTZXF1ZW5jZU9mUGFydHNEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3NlcXVlbmNlT2ZQYXJ0c1wiO1xuXG5pbXBvcnQgeyBTZXF1ZW5jZU9mUGFydHNSdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VxdWVuY2VPZlBhcnRzUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBuYW1lID0gU2VxdWVuY2VPZlBhcnRzUnVsZU5hbWUsXG4gICAgICAgICAgc2VxdWVuY2VPZlBhcnRzRGVmaW5pdGlvbiA9IG5ldyBTZXF1ZW5jZU9mUGFydHNEZWZpbml0aW9uKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBzZXF1ZW5jZU9mUGFydHNEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gU2VxdWVuY2VPZlBhcnRzTm9kZTtcblxuICAgIHN1cGVyKG5hbWUsIGRlZmluaXRpb25zLCBOb2RlKVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBQTs7Ozs7SUFFQSxLQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtJQUVBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFQSxtQkFBQSxZQUFBLElBQUE7Y0FBQSxtQkFBQSxFQU5BLEtBQUE7YUFNQSxtQkFBQTs4QkFBQSxtQkFBQTtZQUVBLElBQUEsR0FKQSxVQUFBLDBCQUtBLHlCQUFBLE9BUEEsaUJBQUEsWUFRQSxXQUFBO0FBQ0EscUNBQUE7V0FFQSxLQUFBLEdBWkEsZ0JBQUE7Z0VBS0EsbUJBQUEsYUFTQSxJQUFBLEVBQUEsV0FBQSxFQUFBLEtBQUE7O1dBVEEsbUJBQUE7RUFOQSxLQUFBO2tCQU1BLG1CQUFBIn0=