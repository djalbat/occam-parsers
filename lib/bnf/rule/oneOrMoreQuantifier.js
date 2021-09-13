"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
var _rule = _interopRequireDefault(require("../rule"));
var _definition = _interopRequireDefault(require("../node/definition"));
var _quantifierRule = _interopRequireDefault(require("../definition/quantifierRule"));
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
var plus = _occamLexers.specialSymbols.plus;
var OneOrMoreQuantifierRule = /*#__PURE__*/ function(Rule) {
    _inherits(OneOrMoreQuantifierRule, Rule);
    function OneOrMoreQuantifierRule() {
        _classCallCheck(this, OneOrMoreQuantifierRule);
        var name = _ruleNames.OneOrMoreQuantifierRuleName, oneOrMoreQuantifierTerminalSymbolContent = plus, oneOrMoreQuantifierRuleDefinition = new _quantifierRule.default(oneOrMoreQuantifierTerminalSymbolContent), definitions = [
            oneOrMoreQuantifierRuleDefinition
        ], Node = _definition.default;
        return _possibleConstructorReturn(this, _getPrototypeOf(OneOrMoreQuantifierRule).call(this, name, definitions, Node));
    }
    return OneOrMoreQuantifierRule;
}(_rule.default);
exports.default = OneOrMoreQuantifierRule;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvcnVsZS9vbmVPck1vcmVRdWFudGlmaWVyLmpzIl0sIm5hbWVzIjpbInNwZWNpYWxTeW1ib2xzIiwiUnVsZSIsIkRlZmluaXRpb25Ob2RlIiwiUXVhbnRpZmllclJ1bGVEZWZpbml0aW9uIiwiT25lT3JNb3JlUXVhbnRpZmllclJ1bGVOYW1lIiwicGx1cyIsIk9uZU9yTW9yZVF1YW50aWZpZXJSdWxlIiwiY29uc3RydWN0b3IiLCJuYW1lIiwib25lT3JNb3JlUXVhbnRpZmllclRlcm1pbmFsU3ltYm9sQ29udGVudCIsIm9uZU9yTW9yZVF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbiIsImRlZmluaXRpb25zIiwiTm9kZSJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFbUIsR0FBYyxDQUFkLFlBQWM7QUFFNUIsR0FBUyxDQUFULEtBQVM7QUFDQyxHQUFvQixDQUFwQixXQUFvQjtBQUNWLEdBQThCLENBQTlCLGVBQThCO0FBRXZCLEdBQWMsQ0FBZCxVQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFELEdBQUssQ0FBRyxJQUFJLEdBUm1CLFlBQWMsZ0JBUXJDLElBQUk7SUFFUyx1QkFBdUIsaUJBQTdCLFFBQVE7Y0FBRix1QkFBdUI7YUFBdkIsdUJBQXVCOzhCQUF2Qix1QkFBdUI7UUFFeEMsR0FBSyxDQUFDLElBQUksR0FOOEIsVUFBYyw4QkFPaEQsd0NBQXdDLEdBQUcsSUFBSSxFQUMvQyxpQ0FBaUMsR0FBRyxHQUFHLENBVlosZUFBOEIsU0FVUSx3Q0FBd0MsR0FDekcsV0FBVyxHQUFHLENBQUM7WUFDYixpQ0FBaUM7UUFDbkMsQ0FBQyxFQUNELElBQUksR0FmYSxXQUFvQjtnRUFPMUIsdUJBQXVCLGFBVWxDLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSTs7V0FWWix1QkFBdUI7RUFSM0IsS0FBUztrQkFRTCx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi9ydWxlXCI7XG5pbXBvcnQgRGVmaW5pdGlvbk5vZGUgZnJvbSBcIi4uL25vZGUvZGVmaW5pdGlvblwiO1xuaW1wb3J0IFF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvbi9xdWFudGlmaWVyUnVsZVwiO1xuXG5pbXBvcnQgeyBPbmVPck1vcmVRdWFudGlmaWVyUnVsZU5hbWUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHsgcGx1cyB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9uZU9yTW9yZVF1YW50aWZpZXJSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IG5hbWUgPSBPbmVPck1vcmVRdWFudGlmaWVyUnVsZU5hbWUsXG4gICAgICAgICAgb25lT3JNb3JlUXVhbnRpZmllclRlcm1pbmFsU3ltYm9sQ29udGVudCA9IHBsdXMsIC8vL1xuICAgICAgICAgIG9uZU9yTW9yZVF1YW50aWZpZXJSdWxlRGVmaW5pdGlvbiA9IG5ldyBRdWFudGlmaWVyUnVsZURlZmluaXRpb24ob25lT3JNb3JlUXVhbnRpZmllclRlcm1pbmFsU3ltYm9sQ29udGVudCksXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICBvbmVPck1vcmVRdWFudGlmaWVyUnVsZURlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBEZWZpbml0aW9uTm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuIl19