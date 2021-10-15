"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _rule = _interopRequireDefault(require("../rule"));
var _document = _interopRequireDefault(require("../node/document"));
var _document1 = _interopRequireDefault(require("../definition/document"));
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
var DocumentRule = /*#__PURE__*/ function(Rule) {
    _inherits(DocumentRule, Rule);
    function DocumentRule() {
        _classCallCheck(this, DocumentRule);
        var documentDefinition = new _document1.default(), name = _ruleNames.DocumentRuleName, definitions = [
            documentDefinition
        ], Node = _document.default;
        return _possibleConstructorReturn(this, _getPrototypeOf(DocumentRule).call(this, name, definitions, Node));
    }
    return DocumentRule;
}(_rule.default);
exports.default = DocumentRule;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvcnVsZS9kb2N1bWVudC5qcyJdLCJuYW1lcyI6WyJSdWxlIiwiRG9jdW1lbnROb2RlIiwiRG9jdW1lbnREZWZpbml0aW9uIiwiRG9jdW1lbnRSdWxlTmFtZSIsIkRvY3VtZW50UnVsZSIsImNvbnN0cnVjdG9yIiwiZG9jdW1lbnREZWZpbml0aW9uIiwibmFtZSIsImRlZmluaXRpb25zIiwiTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFSyxHQUFTLENBQVQsS0FBUztBQUNELEdBQWtCLENBQWxCLFNBQWtCO0FBQ1osR0FBd0IsQ0FBeEIsVUFBd0I7QUFFdEIsR0FBYyxDQUFkLFVBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFMUIsWUFBWSxpQkFBbEIsUUFBUTtjQUFGLFlBQVk7YUFBWixZQUFZOzhCQUFaLFlBQVk7UUFFN0IsR0FBSyxDQUFDLGtCQUFrQixHQUFHLEdBQUcsQ0FOSCxVQUF3QixZQU83QyxJQUFJLEdBTG1CLFVBQWMsbUJBTXJDLFdBQVcsR0FBRyxDQUFDO1lBQ2Isa0JBQWtCO1FBQ3BCLENBQUMsRUFDRCxJQUFJLEdBWlcsU0FBa0I7Z0VBS3RCLFlBQVksYUFTdkIsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJOztXQVRaLFlBQVk7RUFOaEIsS0FBUztrQkFNTCxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi9ydWxlXCI7XG5pbXBvcnQgRG9jdW1lbnROb2RlIGZyb20gXCIuLi9ub2RlL2RvY3VtZW50XCI7XG5pbXBvcnQgRG9jdW1lbnREZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL2RvY3VtZW50XCI7XG5cbmltcG9ydCB7IERvY3VtZW50UnVsZU5hbWUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvY3VtZW50UnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBkb2N1bWVudERlZmluaXRpb24gPSBuZXcgRG9jdW1lbnREZWZpbml0aW9uKCksXG4gICAgICAgICAgbmFtZSA9IERvY3VtZW50UnVsZU5hbWUsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBkb2N1bWVudERlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBEb2N1bWVudE5vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cbiJdfQ==