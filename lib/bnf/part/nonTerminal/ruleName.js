"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
var _nonTerminal = _interopRequireDefault(require("../../part/nonTerminal"));
var _constants = require("../../../constants");
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
var exclamationMark = _occamLexers.specialSymbols.exclamationMark;
var RuleNamePart = /*#__PURE__*/ function(NonTerminalPart) {
    _inherits(RuleNamePart, NonTerminalPart);
    var _super = _createSuper(RuleNamePart);
    function RuleNamePart(ruleName) {
        var lookAhead = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        _classCallCheck(this, RuleNamePart);
        var _this;
        var type = _partTypes.RuleNamePartType; ///
        _this = _super.call(this, type);
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
            value: function findRule(state) {
                var ruleMap = state.getRuleMap(), rule = ruleMap[this.ruleName] || null; ///
                return rule;
            }
        },
        {
            key: "parse",
            value: function parse(nodes, state, callback) {
                var parsed;
                var rule = this.findRule(state);
                if (rule === null) {
                    parsed = false;
                } else {
                    var ruleNode = rule.parse(state, callback);
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
                var lookAheadString = this.lookAhead ? exclamationMark : _constants.EMPTY_STRING, string = "".concat(this.ruleName).concat(lookAheadString);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ibmYvcGFydC9ub25UZXJtaW5hbC9ydWxlTmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvbm9uVGVybWluYWxcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgUnVsZU5hbWVQYXJ0VHlwZSB9IGZyb20gXCIuLi8uLi9wYXJ0VHlwZXNcIjtcblxuY29uc3QgeyBleGNsYW1hdGlvbk1hcmsgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlTmFtZVBhcnQgZXh0ZW5kcyBOb25UZXJtaW5hbFBhcnQge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZSwgbG9va0FoZWFkID0gZmFsc2UpIHtcbiAgICBjb25zdCB0eXBlID0gUnVsZU5hbWVQYXJ0VHlwZTsgLy8vXG5cbiAgICBzdXBlcih0eXBlKTtcblxuICAgIHRoaXMucnVsZU5hbWUgPSBydWxlTmFtZTtcblxuICAgIHRoaXMubG9va0FoZWFkID0gbG9va0FoZWFkO1xuICB9XG4gIFxuICBnZXRSdWxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlTmFtZTtcbiAgfVxuXG4gIGlzTG9va0FoZWFkKCkge1xuICAgIHJldHVybiB0aGlzLmxvb2tBaGVhZDtcbiAgfVxuXG4gIGlzUnVsZU5hbWVQYXJ0KCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lUGFydCA9IHRydWU7XG5cbiAgICByZXR1cm4gcnVsZU5hbWVQYXJ0O1xuICB9XG5cbiAgc2V0TG9va0FoZWFkKGxvb2tBaGVhZCkge1xuICAgIHRoaXMubG9va0FoZWFkID0gbG9va0FoZWFkO1xuICB9XG5cbiAgZmluZFJ1bGUoc3RhdGUpIHtcbiAgICBjb25zdCBydWxlTWFwID0gc3RhdGUuZ2V0UnVsZU1hcCgpLFxuICAgICAgICAgIHJ1bGUgPSBydWxlTWFwW3RoaXMucnVsZU5hbWVdIHx8IG51bGw7ICAvLy9cblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgcGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjaykge1xuICAgIGxldCBwYXJzZWQ7XG5cbiAgICBjb25zdCBydWxlID0gdGhpcy5maW5kUnVsZShzdGF0ZSk7XG5cbiAgICBpZiAocnVsZSA9PT0gbnVsbCkge1xuICAgICAgcGFyc2VkID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJ1bGVOb2RlID0gcnVsZS5wYXJzZShzdGF0ZSwgY2FsbGJhY2spO1xuXG4gICAgICBwYXJzZWQgPSAocnVsZU5vZGUgIT09IG51bGwpO1xuXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIG5vZGVzLnB1c2gocnVsZU5vZGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBsb29rQWhlYWRTdHJpbmcgPSB0aGlzLmxvb2tBaGVhZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGNsYW1hdGlvbk1hcmsgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgc3RyaW5nID0gYCR7dGhpcy5ydWxlTmFtZX0ke2xvb2tBaGVhZFN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUoUnVsZU5hbWVQYXJ0LCB0aGlzLnJ1bGVOYW1lLCB0aGlzLmxvb2tBaGVhZCk7IH1cbn1cbiJdLCJuYW1lcyI6WyJleGNsYW1hdGlvbk1hcmsiLCJzcGVjaWFsU3ltYm9scyIsIlJ1bGVOYW1lUGFydCIsInJ1bGVOYW1lIiwibG9va0FoZWFkIiwidHlwZSIsIlJ1bGVOYW1lUGFydFR5cGUiLCJnZXRSdWxlTmFtZSIsImlzTG9va0FoZWFkIiwiaXNSdWxlTmFtZVBhcnQiLCJydWxlTmFtZVBhcnQiLCJzZXRMb29rQWhlYWQiLCJmaW5kUnVsZSIsInN0YXRlIiwicnVsZU1hcCIsImdldFJ1bGVNYXAiLCJydWxlIiwicGFyc2UiLCJub2RlcyIsImNhbGxiYWNrIiwicGFyc2VkIiwicnVsZU5vZGUiLCJwdXNoIiwiYXNTdHJpbmciLCJsb29rQWhlYWRTdHJpbmciLCJFTVBUWV9TVFJJTkciLCJzdHJpbmciLCJjbG9uZSIsIk5vblRlcm1pbmFsUGFydCJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFbUIsR0FBYyxDQUFkLFlBQWM7QUFFakIsR0FBd0IsQ0FBeEIsWUFBd0I7QUFFdkIsR0FBb0IsQ0FBcEIsVUFBb0I7QUFDaEIsR0FBaUIsQ0FBakIsVUFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRCxHQUFLLENBQUdBLGVBQWUsR0FBS0MsWUFBYyxnQkFBbENELGVBQWU7SUFFRkUsWUFBWSxpQkFBbEIsUUFBUTs7O2FBQUZBLFlBQVksQ0FDbkJDLFFBQVE7WUFBRUMsU0FBUyxvRUFBRyxLQUFLOzs7UUFDckMsR0FBSyxDQUFDQyxJQUFJLEdBQUdDLFVBQWdCLGtCQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztrQ0FFNUJELElBQUk7Y0FFTEYsUUFBUSxHQUFHQSxRQUFRO2NBRW5CQyxTQUFTLEdBQUdBLFNBQVM7Ozs7O1lBRzVCRyxHQUFXLEVBQVhBLENBQVc7bUJBQVhBLFFBQVEsQ0FBUkEsV0FBVyxHQUFHLENBQUM7Z0JBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQ0osUUFBUTtZQUN0QixDQUFDOzs7WUFFREssR0FBVyxFQUFYQSxDQUFXO21CQUFYQSxRQUFRLENBQVJBLFdBQVcsR0FBRyxDQUFDO2dCQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUNKLFNBQVM7WUFDdkIsQ0FBQzs7O1lBRURLLEdBQWMsRUFBZEEsQ0FBYzttQkFBZEEsUUFBUSxDQUFSQSxjQUFjLEdBQUcsQ0FBQztnQkFDaEIsR0FBSyxDQUFDQyxZQUFZLEdBQUcsSUFBSTtnQkFFekIsTUFBTSxDQUFDQSxZQUFZO1lBQ3JCLENBQUM7OztZQUVEQyxHQUFZLEVBQVpBLENBQVk7bUJBQVpBLFFBQVEsQ0FBUkEsWUFBWSxDQUFDUCxTQUFTLEVBQUUsQ0FBQztnQkFDdkIsSUFBSSxDQUFDQSxTQUFTLEdBQUdBLFNBQVM7WUFDNUIsQ0FBQzs7O1lBRURRLEdBQVEsRUFBUkEsQ0FBUTttQkFBUkEsUUFBUSxDQUFSQSxRQUFRLENBQUNDLEtBQUssRUFBRSxDQUFDO2dCQUNmLEdBQUssQ0FBQ0MsT0FBTyxHQUFHRCxLQUFLLENBQUNFLFVBQVUsSUFDMUJDLElBQUksR0FBR0YsT0FBTyxDQUFDLElBQUksQ0FBQ1gsUUFBUSxLQUFLLElBQUksQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRWpELE1BQU0sQ0FBQ2EsSUFBSTtZQUNiLENBQUM7OztZQUVEQyxHQUFLLEVBQUxBLENBQUs7bUJBQUxBLFFBQVEsQ0FBUkEsS0FBSyxDQUFDQyxLQUFLLEVBQUVMLEtBQUssRUFBRU0sUUFBUSxFQUFFLENBQUM7Z0JBQzdCLEdBQUcsQ0FBQ0MsTUFBTTtnQkFFVixHQUFLLENBQUNKLElBQUksR0FBRyxJQUFJLENBQUNKLFFBQVEsQ0FBQ0MsS0FBSztnQkFFaEMsRUFBRSxFQUFFRyxJQUFJLEtBQUssSUFBSSxFQUFFLENBQUM7b0JBQ2xCSSxNQUFNLEdBQUcsS0FBSztnQkFDaEIsQ0FBQyxNQUFNLENBQUM7b0JBQ04sR0FBSyxDQUFDQyxRQUFRLEdBQUdMLElBQUksQ0FBQ0MsS0FBSyxDQUFDSixLQUFLLEVBQUVNLFFBQVE7b0JBRTNDQyxNQUFNLEdBQUlDLFFBQVEsS0FBSyxJQUFJO29CQUUzQixFQUFFLEVBQUVELE1BQU0sRUFBRSxDQUFDO3dCQUNYRixLQUFLLENBQUNJLElBQUksQ0FBQ0QsUUFBUTtvQkFDckIsQ0FBQztnQkFDSCxDQUFDO2dCQUVELE1BQU0sQ0FBQ0QsTUFBTTtZQUNmLENBQUM7OztZQUVERyxHQUFRLEVBQVJBLENBQVE7bUJBQVJBLFFBQVEsQ0FBUkEsUUFBUSxHQUFHLENBQUM7Z0JBQ1YsR0FBSyxDQUFDQyxlQUFlLEdBQUcsSUFBSSxDQUFDcEIsU0FBUyxHQUNaSixlQUFlLEdBQ2J5QixVQUFZLGVBQ2xDQyxNQUFNLEdBQUksQ0FBQSxFQUFrQkYsTUFBZSxDQUEvQixJQUFJLENBQUNyQixRQUFRLEVBQW1CLE1BQUEsQ0FBaEJxQixlQUFlO2dCQUVqRCxNQUFNLENBQUNFLE1BQU07WUFDZixDQUFDOzs7WUFFREMsR0FBSyxFQUFMQSxDQUFLO21CQUFMQSxRQUFRLENBQVJBLEtBQUssR0FBRyxDQUFDO2dCQUFDLE1BQU0sc0JBakVHekIsWUFBWSxhQWlFUnlCLENBQUssUUFBWCxJQUFLLGFBQU96QixZQUFZLEVBQUUsSUFBSSxDQUFDQyxRQUFRLEVBQUUsSUFBSSxDQUFDQyxTQUFTO1lBQUcsQ0FBQzs7OztFQWpFcEN3QixZQUFlO2tCQUFwQzFCLFlBQVkifQ==