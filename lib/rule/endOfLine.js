"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
var _rule = _interopRequireDefault(require("../rule"));
var _endOfLine = _interopRequireDefault(require("../node/bnf/endOfLine"));
var _terminalSymbol = _interopRequireDefault(require("../definition/terminalSymbol"));
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
function _getPrototypeOf(o1) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o1);
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
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
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
var END_OF_LINE = _occamLexers.specialSymbols.END_OF_LINE;
var EndOfLineRule = /*#__PURE__*/ function(Rule) {
    _inherits(EndOfLineRule, Rule);
    var _super = _createSuper(EndOfLineRule);
    function EndOfLineRule() {
        _classCallCheck(this, EndOfLineRule);
        var endOfLineTerminalSymbolContent = END_OF_LINE, endOfLineTerminalSymbolDefinition = new _terminalSymbol.default(endOfLineTerminalSymbolContent), name = _ruleNames.EndOfLineRuleName, ambiguous = false, definitions = [
            endOfLineTerminalSymbolDefinition
        ], Node = _endOfLine.default;
        return _super.call(this, name, ambiguous, definitions, Node);
    }
    return EndOfLineRule;
}(_rule.default);
exports.default = EndOfLineRule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL2VuZE9mTGluZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi9ydWxlXCI7XG5pbXBvcnQgRW5kT2ZMaW5lQk5GTm9kZSBmcm9tIFwiLi4vbm9kZS9ibmYvZW5kT2ZMaW5lXCI7XG5pbXBvcnQgVGVybWluYWxTeW1ib2xEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uL3Rlcm1pbmFsU3ltYm9sXCI7XG5cbmltcG9ydCB7IEVuZE9mTGluZVJ1bGVOYW1lIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCB7IEVORF9PRl9MSU5FIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5kT2ZMaW5lUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBlbmRPZkxpbmVUZXJtaW5hbFN5bWJvbENvbnRlbnQgPSBFTkRfT0ZfTElORSxcbiAgICAgICAgICBlbmRPZkxpbmVUZXJtaW5hbFN5bWJvbERlZmluaXRpb24gPSBuZXcgVGVybWluYWxTeW1ib2xEZWZpbml0aW9uKGVuZE9mTGluZVRlcm1pbmFsU3ltYm9sQ29udGVudCksXG4gICAgICAgICAgbmFtZSA9IEVuZE9mTGluZVJ1bGVOYW1lLFxuICAgICAgICAgIGFtYmlndW91cyA9IGZhbHNlLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgZW5kT2ZMaW5lVGVybWluYWxTeW1ib2xEZWZpbml0aW9uXG4gICAgICAgICAgXSxcbiAgICAgICAgICBOb2RlID0gRW5kT2ZMaW5lQk5GTm9kZTtcblxuICAgIHN1cGVyKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vZGUpXG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiRU5EX09GX0xJTkUiLCJzcGVjaWFsU3ltYm9scyIsIkVuZE9mTGluZVJ1bGUiLCJlbmRPZkxpbmVUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJlbmRPZkxpbmVUZXJtaW5hbFN5bWJvbERlZmluaXRpb24iLCJUZXJtaW5hbFN5bWJvbERlZmluaXRpb24iLCJuYW1lIiwiRW5kT2ZMaW5lUnVsZU5hbWUiLCJhbWJpZ3VvdXMiLCJkZWZpbml0aW9ucyIsIk5vZGUiLCJFbmRPZkxpbmVCTkZOb2RlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVrQixJQUFBLFlBQWMsV0FBZCxjQUFjLENBQUE7QUFFNUIsSUFBQSxLQUFTLGtDQUFULFNBQVMsRUFBQTtBQUNHLElBQUEsVUFBdUIsa0NBQXZCLHVCQUF1QixFQUFBO0FBQ2YsSUFBQSxlQUE4QixrQ0FBOUIsOEJBQThCLEVBQUE7QUFFakMsSUFBQSxVQUFjLFdBQWQsY0FBYyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRCxJQUFNLEFBQUVBLFdBQVcsR0FBS0MsWUFBYyxlQUFBLENBQTlCRCxXQUFXLEFBQW1CLEFBQUM7QUFFeEIsSUFBQSxBQUFNRSxhQUFhLGlCQ1ovQixBRFlZOzs7YUFBTUEsYUFBYTs7UUFFOUIsSUFBTUMsOEJBQThCLEdBQUdILFdBQVcsRUFDNUNJLGlDQUFpQyxHQUFHLElBQUlDLGVBQXdCLFFBQUEsQ0FBQ0YsOEJBQThCLENBQUMsRUFDaEdHLElBQUksR0FBR0MsVUFBaUIsa0JBQUEsRUFDeEJDLFNBQVMsR0FBRyxLQUFLLEVBQ2pCQyxXQUFXLEdBQUc7WUFDWkwsaUNBQWlDO1NBQ2xDLEVBQ0RNLElBQUksR0FBR0MsVUFBZ0IsUUFBQSxBQUFDO2lDQUV4QkwsSUFBSSxFQUFFRSxTQUFTLEVBQUVDLFdBQVcsRUFBRUMsSUFBSTs7O0NBRTNDLENBYjBDRSxLQUFJLFFBQUEsQ0FhOUM7a0JBYm9CVixhQUFhIn0=