"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _terminal = _interopRequireDefault(require("../../part/terminal"));
var _terminal1 = _interopRequireDefault(require("../../node/terminal"));
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
var RegularExpressionPart = /*#__PURE__*/ function(TerminalPart) {
    _inherits(RegularExpressionPart, TerminalPart);
    var _super = _createSuper(RegularExpressionPart);
    function RegularExpressionPart(regularExpression) {
        _classCallCheck(this, RegularExpressionPart);
        var _this;
        _this = _super.call(this);
        _this.regularExpression = regularExpression;
        return _this;
    }
    _createClass(RegularExpressionPart, [
        {
            key: "parse",
            value: function parse(nodes, state, callback) {
                var parsed;
                var terminalNode = null;
                var savedIndex = state.getSavedIndex(), nextSignificantToken = state.getNextSignificantToken(), significantToken = nextSignificantToken; ///
                if (significantToken !== null) {
                    var content = significantToken.getContent(), matches = content.match(this.regularExpression);
                    if (matches !== null) {
                        var firstMatch = (0, _array).first(matches);
                        if (firstMatch === content) {
                            terminalNode = _terminal1.default.fromSignificantToken(significantToken);
                        }
                    }
                }
                parsed = terminalNode !== null;
                if (parsed) {
                    nodes.push(terminalNode);
                    if (callback !== null) {
                        parsed = callback();
                        if (!parsed) {
                            nodes.pop();
                        }
                    }
                }
                if (!parsed) {
                    state.backtrack(savedIndex);
                }
                return parsed;
            }
        },
        {
            key: "asString",
            value: function asString() {
                var regularExpressionString = this.regularExpression.toString(), string = regularExpressionString; ///
                return string;
            }
        },
        {
            key: "clone",
            value: function clone() {
                return _get(_getPrototypeOf(RegularExpressionPart.prototype), "clone", this).call(this, RegularExpressionPart, this.regularExpression);
            }
        }
    ]);
    return RegularExpressionPart;
}(_terminal.default);
exports.default = RegularExpressionPart;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L3Rlcm1pbmFsL3JlZ3VsYXJFeHByZXNzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGVybWluYWxQYXJ0IGZyb20gXCIuLi8uLi9wYXJ0L3Rlcm1pbmFsXCI7XG5pbXBvcnQgVGVybWluYWxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL3Rlcm1pbmFsXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWd1bGFyRXhwcmVzc2lvblBhcnQgZXh0ZW5kcyBUZXJtaW5hbFBhcnQge1xuICBjb25zdHJ1Y3RvcihyZWd1bGFyRXhwcmVzc2lvbikge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnJlZ3VsYXJFeHByZXNzaW9uID0gcmVndWxhckV4cHJlc3Npb247XG4gIH1cblxuICBwYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIGxldCB0ZXJtaW5hbE5vZGUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBzdGF0ZS5nZXRTYXZlZEluZGV4KCksXG5cdFx0ICAgICAgbmV4dFNpZ25pZmljYW50VG9rZW4gPSBzdGF0ZS5nZXROZXh0U2lnbmlmaWNhbnRUb2tlbigpLFxuXHRcdFx0XHRcdHNpZ25pZmljYW50VG9rZW4gPSBuZXh0U2lnbmlmaWNhbnRUb2tlbjsgLy8vXG5cbiAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29udGVudCA9IHNpZ25pZmljYW50VG9rZW4uZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2godGhpcy5yZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKTtcblxuICAgICAgICBpZiAoZmlyc3RNYXRjaCA9PT0gY29udGVudCkge1xuICAgICAgICAgIHRlcm1pbmFsTm9kZSA9IFRlcm1pbmFsTm9kZS5mcm9tU2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHBhcnNlZCA9ICh0ZXJtaW5hbE5vZGUgIT09IG51bGwpO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgbm9kZXMucHVzaCh0ZXJtaW5hbE5vZGUpO1xuXG4gICAgICBpZiAoY2FsbGJhY2sgIT09IG51bGwpIHtcbiAgICAgICAgcGFyc2VkID0gY2FsbGJhY2soKTtcblxuICAgICAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgICAgIG5vZGVzLnBvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIHN0YXRlLmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcmVndWxhckV4cHJlc3Npb25TdHJpbmcgPSB0aGlzLnJlZ3VsYXJFeHByZXNzaW9uLnRvU3RyaW5nKCksXG5cdFx0ICAgICAgc3RyaW5nID0gcmVndWxhckV4cHJlc3Npb25TdHJpbmc7IC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUoUmVndWxhckV4cHJlc3Npb25QYXJ0LCB0aGlzLnJlZ3VsYXJFeHByZXNzaW9uKTsgfVxufVxuIl0sIm5hbWVzIjpbIlJlZ3VsYXJFeHByZXNzaW9uUGFydCIsInJlZ3VsYXJFeHByZXNzaW9uIiwicGFyc2UiLCJub2RlcyIsInN0YXRlIiwiY2FsbGJhY2siLCJwYXJzZWQiLCJ0ZXJtaW5hbE5vZGUiLCJzYXZlZEluZGV4IiwiZ2V0U2F2ZWRJbmRleCIsIm5leHRTaWduaWZpY2FudFRva2VuIiwiZ2V0TmV4dFNpZ25pZmljYW50VG9rZW4iLCJzaWduaWZpY2FudFRva2VuIiwiY29udGVudCIsImdldENvbnRlbnQiLCJtYXRjaGVzIiwibWF0Y2giLCJmaXJzdE1hdGNoIiwiZmlyc3QiLCJUZXJtaW5hbE5vZGUiLCJmcm9tU2lnbmlmaWNhbnRUb2tlbiIsInB1c2giLCJwb3AiLCJiYWNrdHJhY2siLCJhc1N0cmluZyIsInJlZ3VsYXJFeHByZXNzaW9uU3RyaW5nIiwidG9TdHJpbmciLCJzdHJpbmciLCJjbG9uZSIsIlRlcm1pbmFsUGFydCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7RUFBYjt3QkFBQTtBQUV5QixJQUFBLFNBQXFCLGtDQUFyQixxQkFBcUIsRUFBQTtBQUNyQixJQUFBLFVBQXFCLGtDQUFyQixxQkFBcUIsRUFBQTtBQUV4QixJQUFBLE1BQXVCLFdBQXZCLHVCQUF1QixDQUFBOzs7Ozs7Ozs7Ozs7Ozs7OERBTDdDO3NDQUFBOzZEQUFBO2lFQUFBOzs7O3dFQUFBO2dFQUFBOzs7OzswQkFBQTs7Ozs7Ozs7OztTQUFBOzs7Ozs7O0tBQUE7Ozs7Ozs7Ozs7Ozs7TUFBQTt5REFBQTs7Ozs7Ozs7Ozs7Ozs7O3VCQUFBOztLQUFBOzs7Ozt3Q0FBQTs7Ozs7OzJCQUFBOzs7Ozs7OztxRkFBQTs7Ozs7Ozs7Ozs7O21FQUFBOztpREFBQTs7Ozs7QUFPZSxJQUFBLEFBQU1BLHFCQUFxQixpQkNQdkMsQURPWTtrREFQZjs7YUFPcUJBLHFCQUFxQixDQUM1QkMsaUJBQWlCO29EQVIvQjs7aUNFQUEsQ0ZTWTtRQUVSLE1BQUtBLGlCQUFpQixHQUFHQSxpQkFBaUIsQ0FBQzs7Ozs7WUFHN0NDLEdBQUssRUFBTEEsT0FBSztZRWRQLE9GY0VBLFNBQUFBLEtBQUssQ0FBQ0MsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRTtnQkFDNUIsSUFBSUMsTUFBTSxBQUFDO2dCQUVYLElBQUlDLFlBQVksR0FBRyxJQUFJLEFBQUM7Z0JBRXhCLElBQU1DLFVBQVUsR0FBR0osS0FBSyxDQUFDSyxhQUFhLEVBQUUsRUFDcENDLG9CQUFvQixHQUFHTixLQUFLLENBQUNPLHVCQUF1QixFQUFFLEVBQ3pEQyxnQkFBZ0IsR0FBR0Ysb0JBQW9CLEFBQUMsRUFBQyxHQUFHO2dCQUU3QyxJQUFJRSxnQkFBZ0IsS0FBSyxJQUFJLEVBQUU7b0JBQzdCLElBQU1DLE9BQU8sR0FBR0QsZ0JBQWdCLENBQUNFLFVBQVUsRUFBRSxFQUN2Q0MsT0FBTyxHQUFHRixPQUFPLENBQUNHLEtBQUssQ0FBQyxJQUFJLENBQUNmLGlCQUFpQixDQUFDLEFBQUM7b0JBRXRELElBQUljLE9BQU8sS0FBSyxJQUFJLEVBQUU7d0JBQ3BCLElBQU1FLFVBQVUsR0FBR0MsQ0FBQUEsR0FBQUEsTUFBSyxBQUFTLENBQUEsT0FBUkgsT0FBTyxDQUFDLEFBQUM7d0JBRWxDLElBQUlFLFVBQVUsS0FBS0osT0FBTyxFQUFFOzRCQUMxQk4sWUFBWSxHQUFHWSxVQUFZLFNBQUNDLG9CQUFvQixDQUFDUixnQkFBZ0IsQ0FBQyxDQUFDO3lCQUNwRTtxQkFDRjtpQkFDRjtnQkFFRE4sTUFBTSxHQUFJQyxZQUFZLEtBQUssSUFBSSxBQUFDLENBQUM7Z0JBRWpDLElBQUlELE1BQU0sRUFBRTtvQkFDVkgsS0FBSyxDQUFDa0IsSUFBSSxDQUFDZCxZQUFZLENBQUMsQ0FBQztvQkFFekIsSUFBSUYsUUFBUSxLQUFLLElBQUksRUFBRTt3QkFDckJDLE1BQU0sR0FBR0QsUUFBUSxFQUFFLENBQUM7d0JBRXBCLElBQUksQ0FBQ0MsTUFBTSxFQUFFOzRCQUNYSCxLQUFLLENBQUNtQixHQUFHLEVBQUUsQ0FBQzt5QkFDYjtxQkFDRjtpQkFDRjtnQkFFRCxJQUFJLENBQUNoQixNQUFNLEVBQUU7b0JBQ1hGLEtBQUssQ0FBQ21CLFNBQVMsQ0FBQ2YsVUFBVSxDQUFDLENBQUM7aUJBQzdCO2dCQUVELE9BQU9GLE1BQU0sQ0FBQzthQUNmOzs7WUFFRGtCLEdBQVEsRUFBUkEsVUFBUTtZRXpEVixPRnlERUEsU0FBQUEsUUFBUSxHQUFHO2dCQUNULElBQU1DLHVCQUF1QixHQUFHLElBQUksQ0FBQ3hCLGlCQUFpQixDQUFDeUIsUUFBUSxFQUFFLEVBQzdEQyxNQUFNLEdBQUdGLHVCQUF1QixBQUFDLEVBQUMsR0FBRztnQkFFekMsT0FBT0UsTUFBTSxDQUFDO2FBQ2Y7OztZQUVEQyxHQUFLLEVBQUxBLE9BQUs7WUVoRVAsT0ZnRUVBLFNBQUFBLEtBQUssR0FBRztnQkFBRSxPQUFPLHFCQXpERTVCLHFCQUFxQixhQXlEakI0QixPQUFLLEVBQVgsSUFBSyxDQUFBLFlBQU81QixxQkFBcUIsRUFBRSxJQUFJLENBQUNDLGlCQUFpQixFQUFFO2FBQUU7O01BaEVoRjs7Q0FpRUMsQ0ExRGtENEIsU0FBWSxTQTBEOUQ7a0JBMURvQjdCLHFCQUFxQixBQVAxQyJ9