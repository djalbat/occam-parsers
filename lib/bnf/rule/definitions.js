"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _rule = _interopRequireDefault(require("../rule"));
var _definitions = _interopRequireDefault(require("../node/definitions"));
var _definitions1 = _interopRequireDefault(require("../definition/definitions"));
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
var DefinitionsRule = /*#__PURE__*/ function(Rule) {
    _inherits(DefinitionsRule, Rule);
    function DefinitionsRule() {
        _classCallCheck(this, DefinitionsRule);
        var definitionsDefinition = new _definitions1.default(), name = _ruleNames.DefinitionsRuleName, definitions = [
            definitionsDefinition
        ], Node = _definitions.default;
        return _possibleConstructorReturn(this, _getPrototypeOf(DefinitionsRule).call(this, name, definitions, Node));
    }
    return DefinitionsRule;
}(_rule.default);
exports.default = DefinitionsRule;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvcnVsZS9kZWZpbml0aW9ucy5qcyJdLCJuYW1lcyI6WyJSdWxlIiwiRGVmaW5pdGlvbnNOb2RlIiwiRGVmaW5pdGlvbnNEZWZpbml0aW9uIiwiRGVmaW5pdGlvbnNSdWxlTmFtZSIsIkRlZmluaXRpb25zUnVsZSIsImNvbnN0cnVjdG9yIiwiZGVmaW5pdGlvbnNEZWZpbml0aW9uIiwibmFtZSIsImRlZmluaXRpb25zIiwiTm9kZSJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFSyxHQUFTLENBQVQsS0FBUztBQUNFLEdBQXFCLENBQXJCLFlBQXFCO0FBQ2YsR0FBMkIsQ0FBM0IsYUFBMkI7QUFFekIsR0FBYyxDQUFkLFVBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFN0IsZUFBZSxpQkFBckIsUUFBUTtjQUFGLGVBQWU7YUFBZixlQUFlOzhCQUFmLGVBQWU7UUFFaEMsR0FBSyxDQUFDLHFCQUFxQixHQUFHLEdBQUcsQ0FOSCxhQUEyQixZQU9uRCxJQUFJLEdBTHNCLFVBQWMsc0JBTXhDLFdBQVcsR0FBRyxDQUFDO1lBQ2IscUJBQXFCO1FBQ3ZCLENBQUMsRUFDRCxJQUFJLEdBWmMsWUFBcUI7Z0VBSzVCLGVBQWUsYUFTMUIsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJOztXQVRaLGVBQWU7RUFObkIsS0FBUztrQkFNTCxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi9ydWxlXCI7XG5pbXBvcnQgRGVmaW5pdGlvbnNOb2RlIGZyb20gXCIuLi9ub2RlL2RlZmluaXRpb25zXCI7XG5pbXBvcnQgRGVmaW5pdGlvbnNEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL2RlZmluaXRpb25zXCI7XG5cbmltcG9ydCB7IERlZmluaXRpb25zUnVsZU5hbWUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlZmluaXRpb25zUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uc0RlZmluaXRpb24gPSBuZXcgRGVmaW5pdGlvbnNEZWZpbml0aW9uKCksXG4gICAgICAgICAgbmFtZSA9IERlZmluaXRpb25zUnVsZU5hbWUsXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBkZWZpbml0aW9uc0RlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBEZWZpbml0aW9uc05vZGU7XG4gICAgXG4gICAgc3VwZXIobmFtZSwgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cbiJdfQ==