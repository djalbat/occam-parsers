"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
var _nonTerminal = _interopRequireDefault(require("../../part/nonTerminal"));
var _partTypes = require("../../partTypes");
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function _get(target, property, receiver) {
            var base = _superPropBase(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var exclamationMark = _occamLexers.specialSymbols.exclamationMark;
var RuleNamePart = /*#__PURE__*/ function(NonTerminalPart) {
    _inherits(RuleNamePart, NonTerminalPart);
    function RuleNamePart(ruleName, param) {
        var lookAhead = param === void 0 ? false : param;
        _classCallCheck(this, RuleNamePart);
        var _this;
        var type = _partTypes.RuleNamePartType; ///
        _this = _possibleConstructorReturn(this, _getPrototypeOf(RuleNamePart).call(this, type));
        _this.ruleName = ruleName;
        _this.lookAhead = lookAhead;
        return _this;
    }
    _createClass(RuleNamePart, [
        {
            key: "getRuleName",
            value: function getRuleName() {
                return this.ruleName;
            }
        },
        {
            key: "isLookAhead",
            value: function isLookAhead() {
                return this.lookAhead;
            }
        },
        {
            key: "isRuleNamePart",
            value: function isRuleNamePart() {
                var ruleNamePart = true;
                return ruleNamePart;
            }
        },
        {
            key: "setLookAhead",
            value: function setLookAhead(lookAhead) {
                this.lookAhead = lookAhead;
            }
        },
        {
            key: "findRule",
            value: function findRule(context) {
                var ruleMap = context.getRuleMap(), rule = ruleMap[this.ruleName] || null; ///
                return rule;
            }
        },
        {
            key: "parse",
            value: function parse(nodes, context, callback) {
                var parsed;
                var rule = this.findRule(context);
                if (rule === null) {
                    parsed = false;
                } else {
                    var ruleNode = rule.parse(context, callback);
                    parsed = ruleNode !== null;
                    if (parsed) {
                        nodes.push(ruleNode);
                    }
                }
                return parsed;
            }
        },
        {
            key: "asString",
            value: function asString() {
                var lookAheadString = this.lookAhead ? exclamationMark : "", string = "".concat(this.ruleName).concat(lookAheadString);
                return string;
            }
        },
        {
            key: "clone",
            value: function clone() {
                return _get(_getPrototypeOf(RuleNamePart.prototype), "clone", this).call(this, RuleNamePart, this.ruleName, this.lookAhead);
            }
        }
    ]);
    return RuleNamePart;
}(_nonTerminal.default);
exports.default = RuleNamePart;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ibmYvcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvbm9uVGVybWluYWxcIjtcblxuaW1wb3J0IHsgUnVsZU5hbWVQYXJ0VHlwZSB9IGZyb20gXCIuLi8uLi9wYXJ0VHlwZXNcIjtcblxuY29uc3QgeyBleGNsYW1hdGlvbk1hcmsgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlTmFtZVBhcnQgZXh0ZW5kcyBOb25UZXJtaW5hbFBhcnQge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZSwgbG9va0FoZWFkID0gZmFsc2UpIHtcbiAgICBjb25zdCB0eXBlID0gUnVsZU5hbWVQYXJ0VHlwZTsgLy8vXG5cbiAgICBzdXBlcih0eXBlKTtcblxuICAgIHRoaXMucnVsZU5hbWUgPSBydWxlTmFtZTtcblxuICAgIHRoaXMubG9va0FoZWFkID0gbG9va0FoZWFkO1xuICB9XG4gIFxuICBnZXRSdWxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlTmFtZTtcbiAgfVxuXG4gIGlzTG9va0FoZWFkKCkge1xuICAgIHJldHVybiB0aGlzLmxvb2tBaGVhZDtcbiAgfVxuXG4gIGlzUnVsZU5hbWVQYXJ0KCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lUGFydCA9IHRydWU7XG5cbiAgICByZXR1cm4gcnVsZU5hbWVQYXJ0O1xuICB9XG5cbiAgc2V0TG9va0FoZWFkKGxvb2tBaGVhZCkge1xuICAgIHRoaXMubG9va0FoZWFkID0gbG9va0FoZWFkO1xuICB9XG5cbiAgZmluZFJ1bGUoY29udGV4dCkge1xuICAgIGNvbnN0IHJ1bGVNYXAgPSBjb250ZXh0LmdldFJ1bGVNYXAoKSxcbiAgICAgICAgICBydWxlID0gcnVsZU1hcFt0aGlzLnJ1bGVOYW1lXSB8fCBudWxsOyAgLy8vXG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuXG4gIHBhcnNlKG5vZGVzLCBjb250ZXh0LCBjYWxsYmFjaykge1xuICAgIGxldCBwYXJzZWQ7XG5cbiAgICBjb25zdCBydWxlID0gdGhpcy5maW5kUnVsZShjb250ZXh0KTtcblxuICAgIGlmIChydWxlID09PSBudWxsKSB7XG4gICAgICBwYXJzZWQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcnVsZU5vZGUgPSBydWxlLnBhcnNlKGNvbnRleHQsIGNhbGxiYWNrKTtcblxuICAgICAgcGFyc2VkID0gKHJ1bGVOb2RlICE9PSBudWxsKTtcblxuICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICBub2Rlcy5wdXNoKHJ1bGVOb2RlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgbG9va0FoZWFkU3RyaW5nID0gdGhpcy5sb29rQWhlYWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhjbGFtYXRpb25NYXJrIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIixcbiAgICAgICAgICBzdHJpbmcgPSBgJHt0aGlzLnJ1bGVOYW1lfSR7bG9va0FoZWFkU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZShSdWxlTmFtZVBhcnQsIHRoaXMucnVsZU5hbWUsIHRoaXMubG9va0FoZWFkKTsgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRW1CLEdBQWMsQ0FBZCxZQUFjO0FBRWpCLEdBQXdCLENBQXhCLFlBQXdCO0FBRW5CLEdBQWlCLENBQWpCLFVBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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