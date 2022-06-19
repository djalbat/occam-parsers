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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L3Rlcm1pbmFsL3JlZ3VsYXJFeHByZXNzaW9uLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGVybWluYWxQYXJ0IGZyb20gXCIuLi8uLi9wYXJ0L3Rlcm1pbmFsXCI7XG5pbXBvcnQgVGVybWluYWxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL3Rlcm1pbmFsXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWd1bGFyRXhwcmVzc2lvblBhcnQgZXh0ZW5kcyBUZXJtaW5hbFBhcnQge1xuICBjb25zdHJ1Y3RvcihyZWd1bGFyRXhwcmVzc2lvbikge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnJlZ3VsYXJFeHByZXNzaW9uID0gcmVndWxhckV4cHJlc3Npb247XG4gIH1cblxuICBwYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIGxldCB0ZXJtaW5hbE5vZGUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBzdGF0ZS5nZXRTYXZlZEluZGV4KCksXG5cdFx0ICAgICAgbmV4dFNpZ25pZmljYW50VG9rZW4gPSBzdGF0ZS5nZXROZXh0U2lnbmlmaWNhbnRUb2tlbigpLFxuXHRcdFx0XHRcdHNpZ25pZmljYW50VG9rZW4gPSBuZXh0U2lnbmlmaWNhbnRUb2tlbjsgLy8vXG5cbiAgICBpZiAoc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29udGVudCA9IHNpZ25pZmljYW50VG9rZW4uZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgbWF0Y2hlcyA9IGNvbnRlbnQubWF0Y2godGhpcy5yZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0TWF0Y2ggPSBmaXJzdChtYXRjaGVzKTtcblxuICAgICAgICBpZiAoZmlyc3RNYXRjaCA9PT0gY29udGVudCkge1xuICAgICAgICAgIHRlcm1pbmFsTm9kZSA9IFRlcm1pbmFsTm9kZS5mcm9tU2lnbmlmaWNhbnRUb2tlbihzaWduaWZpY2FudFRva2VuKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHBhcnNlZCA9ICh0ZXJtaW5hbE5vZGUgIT09IG51bGwpO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgbm9kZXMucHVzaCh0ZXJtaW5hbE5vZGUpO1xuXG4gICAgICBpZiAoY2FsbGJhY2sgIT09IG51bGwpIHtcbiAgICAgICAgcGFyc2VkID0gY2FsbGJhY2soKTtcblxuICAgICAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgICAgIG5vZGVzLnBvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIHN0YXRlLmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcmVndWxhckV4cHJlc3Npb25TdHJpbmcgPSB0aGlzLnJlZ3VsYXJFeHByZXNzaW9uLnRvU3RyaW5nKCksXG5cdFx0ICAgICAgc3RyaW5nID0gcmVndWxhckV4cHJlc3Npb25TdHJpbmc7IC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUoUmVndWxhckV4cHJlc3Npb25QYXJ0LCB0aGlzLnJlZ3VsYXJFeHByZXNzaW9uKTsgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJSZWd1bGFyRXhwcmVzc2lvblBhcnQiLCJyZWd1bGFyRXhwcmVzc2lvbiIsInBhcnNlIiwibm9kZXMiLCJzdGF0ZSIsImNhbGxiYWNrIiwicGFyc2VkIiwidGVybWluYWxOb2RlIiwic2F2ZWRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJuZXh0U2lnbmlmaWNhbnRUb2tlbiIsImdldE5leHRTaWduaWZpY2FudFRva2VuIiwic2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwibWF0Y2hlcyIsIm1hdGNoIiwiZmlyc3RNYXRjaCIsImZpcnN0IiwiVGVybWluYWxOb2RlIiwiZnJvbVNpZ25pZmljYW50VG9rZW4iLCJwdXNoIiwicG9wIiwiYmFja3RyYWNrIiwiYXNTdHJpbmciLCJyZWd1bGFyRXhwcmVzc2lvblN0cmluZyIsInRvU3RyaW5nIiwic3RyaW5nIiwiY2xvbmUiLCJUZXJtaW5hbFBhcnQiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFWSxJQUFBLFNBQXFCLGtDQUFyQixxQkFBcUIsRUFBQTtBQUNyQixJQUFBLFVBQXFCLGtDQUFyQixxQkFBcUIsRUFBQTtBQUV4QixJQUFBLE1BQXVCLFdBQXZCLHVCQUF1QixDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUIsSUFBQSxBQUFNQSxxQkFBcUIsaUJBQTNCOzs7YUFBTUEscUJBQXFCLENBQzVCQyxpQkFBaUI7OztrQ0FDbkI7UUFFUixNQUFLQSxpQkFBaUIsR0FBR0EsaUJBQWlCLENBQUM7Ozs7O1lBRzdDQyxHQUFLLEVBQUxBLE9BQUs7bUJBQUxBLFNBQUFBLEtBQUssQ0FBQ0MsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRTtnQkFDNUIsSUFBSUMsTUFBTSxBQUFDO2dCQUVYLElBQUlDLFlBQVksR0FBRyxJQUFJLEFBQUM7Z0JBRXhCLElBQU1DLFVBQVUsR0FBR0osS0FBSyxDQUFDSyxhQUFhLEVBQUUsRUFDcENDLG9CQUFvQixHQUFHTixLQUFLLENBQUNPLHVCQUF1QixFQUFFLEVBQ3pEQyxnQkFBZ0IsR0FBR0Ysb0JBQW9CLEFBQUMsRUFBQyxHQUFHO2dCQUU3QyxJQUFJRSxnQkFBZ0IsS0FBSyxJQUFJLEVBQUU7b0JBQzdCLElBQU1DLE9BQU8sR0FBR0QsZ0JBQWdCLENBQUNFLFVBQVUsRUFBRSxFQUN2Q0MsT0FBTyxHQUFHRixPQUFPLENBQUNHLEtBQUssQ0FBQyxJQUFJLENBQUNmLGlCQUFpQixDQUFDLEFBQUM7b0JBRXRELElBQUljLE9BQU8sS0FBSyxJQUFJLEVBQUU7d0JBQ3BCLElBQU1FLFVBQVUsR0FBR0MsQ0FBQUEsR0FBQUEsTUFBSyxBQUFTLENBQUEsTUFBVCxDQUFDSCxPQUFPLENBQUMsQUFBQzt3QkFFbEMsSUFBSUUsVUFBVSxLQUFLSixPQUFPLEVBQUU7NEJBQzFCTixZQUFZLEdBQUdZLFVBQVksUUFBQSxDQUFDQyxvQkFBb0IsQ0FBQ1IsZ0JBQWdCLENBQUMsQ0FBQzt5QkFDcEU7cUJBQ0Y7aUJBQ0Y7Z0JBRUROLE1BQU0sR0FBSUMsWUFBWSxLQUFLLElBQUksQUFBQyxDQUFDO2dCQUVqQyxJQUFJRCxNQUFNLEVBQUU7b0JBQ1ZILEtBQUssQ0FBQ2tCLElBQUksQ0FBQ2QsWUFBWSxDQUFDLENBQUM7b0JBRXpCLElBQUlGLFFBQVEsS0FBSyxJQUFJLEVBQUU7d0JBQ3JCQyxNQUFNLEdBQUdELFFBQVEsRUFBRSxDQUFDO3dCQUVwQixJQUFJLENBQUNDLE1BQU0sRUFBRTs0QkFDWEgsS0FBSyxDQUFDbUIsR0FBRyxFQUFFLENBQUM7eUJBQ2I7cUJBQ0Y7aUJBQ0Y7Z0JBRUQsSUFBSSxDQUFDaEIsTUFBTSxFQUFFO29CQUNYRixLQUFLLENBQUNtQixTQUFTLENBQUNmLFVBQVUsQ0FBQyxDQUFDO2lCQUM3QjtnQkFFRCxPQUFPRixNQUFNLENBQUM7YUFDZjs7O1lBRURrQixHQUFRLEVBQVJBLFVBQVE7bUJBQVJBLFNBQUFBLFFBQVEsR0FBRztnQkFDVCxJQUFNQyx1QkFBdUIsR0FBRyxJQUFJLENBQUN4QixpQkFBaUIsQ0FBQ3lCLFFBQVEsRUFBRSxFQUM3REMsTUFBTSxHQUFHRix1QkFBdUIsQUFBQyxFQUFDLEdBQUc7Z0JBRXpDLE9BQU9FLE1BQU0sQ0FBQzthQUNmOzs7WUFFREMsR0FBSyxFQUFMQSxPQUFLO21CQUFMQSxTQUFBQSxLQUFLLEdBQUc7Z0JBQUUsT0FBTyxxQkF6REU1QixxQkFBcUIsYUF5RGpCNEIsT0FBSyxFQUFYLElBQUssQ0FBQSxZQUFPNUIscUJBQXFCLEVBQUUsSUFBSSxDQUFDQyxpQkFBaUIsRUFBRTthQUFFOzs7O0NBQy9FLENBMURrRDRCLFNBQVksUUFBQSxDQTBEOUQ7a0JBMURvQjdCLHFCQUFxQiJ9