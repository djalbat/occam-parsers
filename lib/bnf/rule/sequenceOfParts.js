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
var SequenceOfPartsRule = /*#__PURE__*/ function(Rule) {
    _inherits(SequenceOfPartsRule, Rule);
    function SequenceOfPartsRule() {
        _classCallCheck(this, SequenceOfPartsRule);
        var name = _ruleNames.SequenceOfPartsRuleName, sequenceOfPartsDefinition = new _sequenceOfParts1.default(), definitions = [
            sequenceOfPartsDefinition
        ], Node = _sequenceOfParts.default;
        return _possibleConstructorReturn(this, _getPrototypeOf(SequenceOfPartsRule).call(this, name, definitions, Node));
    }
    return SequenceOfPartsRule;
}(_rule.default);
exports.default = SequenceOfPartsRule;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvcnVsZS9zZXF1ZW5jZU9mUGFydHMuanMiXSwibmFtZXMiOlsiUnVsZSIsIlNlcXVlbmNlT2ZQYXJ0c05vZGUiLCJTZXF1ZW5jZU9mUGFydHNEZWZpbml0aW9uIiwiU2VxdWVuY2VPZlBhcnRzUnVsZU5hbWUiLCJTZXF1ZW5jZU9mUGFydHNSdWxlIiwiY29uc3RydWN0b3IiLCJuYW1lIiwic2VxdWVuY2VPZlBhcnRzRGVmaW5pdGlvbiIsImRlZmluaXRpb25zIiwiTm9kZSJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFSyxHQUFTLENBQVQsS0FBUztBQUNNLEdBQXlCLENBQXpCLGdCQUF5QjtBQUNuQixHQUErQixDQUEvQixpQkFBK0I7QUFFN0IsR0FBYyxDQUFkLFVBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFakMsbUJBQW1CLGlCQUF6QixRQUFRO2NBQUYsbUJBQW1CO2FBQW5CLG1CQUFtQjs4QkFBbkIsbUJBQW1CO1FBRXBDLEdBQUssQ0FBQyxJQUFJLEdBSjBCLFVBQWMsMEJBSzVDLHlCQUF5QixHQUFHLEdBQUcsQ0FQSCxpQkFBK0IsWUFRM0QsV0FBVyxHQUFHLENBQUM7WUFDYix5QkFBeUI7UUFDM0IsQ0FBQyxFQUNELElBQUksR0Faa0IsZ0JBQXlCO2dFQUtwQyxtQkFBbUIsYUFTOUIsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJOztXQVRaLG1CQUFtQjtFQU52QixLQUFTO2tCQU1MLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vcnVsZVwiO1xuaW1wb3J0IFNlcXVlbmNlT2ZQYXJ0c05vZGUgZnJvbSBcIi4uL25vZGUvc2VxdWVuY2VPZlBhcnRzXCI7XG5pbXBvcnQgU2VxdWVuY2VPZlBhcnRzRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvbi9zZXF1ZW5jZU9mUGFydHNcIjtcblxuaW1wb3J0IHsgU2VxdWVuY2VPZlBhcnRzUnVsZU5hbWUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlcXVlbmNlT2ZQYXJ0c1J1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgbmFtZSA9IFNlcXVlbmNlT2ZQYXJ0c1J1bGVOYW1lLFxuICAgICAgICAgIHNlcXVlbmNlT2ZQYXJ0c0RlZmluaXRpb24gPSBuZXcgU2VxdWVuY2VPZlBhcnRzRGVmaW5pdGlvbigpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgc2VxdWVuY2VPZlBhcnRzRGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IFNlcXVlbmNlT2ZQYXJ0c05vZGU7XG5cbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuIl19