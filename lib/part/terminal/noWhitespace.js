"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
var _terminal = _interopRequireDefault(require("../../part/terminal"));
var _noWhitespace = _interopRequireDefault(require("../../node/terminal/noWhitespace"));
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
var NO_WHITESPACE = _occamLexers.specialSymbols.NO_WHITESPACE;
var NoWhitespacePart = /*#__PURE__*/ function(TerminalPart) {
    _inherits(NoWhitespacePart, TerminalPart);
    var _super = _createSuper(NoWhitespacePart);
    function NoWhitespacePart() {
        _classCallCheck(this, NoWhitespacePart);
        return _super.apply(this, arguments);
    }
    _createClass(NoWhitespacePart, [
        {
            key: "isNoWhitespacePart",
            value: function isNoWhitespacePart() {
                var noWhitespacePart = true;
                return noWhitespacePart;
            }
        },
        {
            key: "parse",
            value: function parse(nodes, state, callback) {
                var parsed;
                var noWhitespaceNode = null;
                var savedIndex = state.getSavedIndex(), nextTokenWhitespaceToken = state.isNextTokenWhitespaceToken();
                if (!nextTokenWhitespaceToken) {
                    noWhitespaceNode = _noWhitespace.default.fromNothing();
                }
                parsed = noWhitespaceNode !== null;
                if (parsed) {
                    nodes.push(noWhitespaceNode);
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
                var string = NO_WHITESPACE; ///
                return string;
            }
        },
        {
            key: "clone",
            value: function clone() {
                return _get(_getPrototypeOf(NoWhitespacePart.prototype), "clone", this).call(this, NoWhitespacePart);
            }
        }
    ]);
    return NoWhitespacePart;
}(_terminal.default);
exports.default = NoWhitespacePart;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L3Rlcm1pbmFsL25vV2hpdGVzcGFjZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBUZXJtaW5hbFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvdGVybWluYWxcIjtcbmltcG9ydCBOb1doaXRlc3BhY2VOb2RlIGZyb20gXCIuLi8uLi9ub2RlL3Rlcm1pbmFsL25vV2hpdGVzcGFjZVwiO1xuXG5jb25zdCB7IE5PX1dISVRFU1BBQ0UgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb1doaXRlc3BhY2VQYXJ0IGV4dGVuZHMgVGVybWluYWxQYXJ0IHtcbiAgaXNOb1doaXRlc3BhY2VQYXJ0KCkge1xuICAgIGNvbnN0IG5vV2hpdGVzcGFjZVBhcnQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIG5vV2hpdGVzcGFjZVBhcnQ7XG4gIH1cblxuICBwYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIGxldCBub1doaXRlc3BhY2VOb2RlID0gbnVsbDtcblxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBzdGF0ZS5nZXRTYXZlZEluZGV4KCksXG4gICAgICAgICAgbmV4dFRva2VuV2hpdGVzcGFjZVRva2VuID0gc3RhdGUuaXNOZXh0VG9rZW5XaGl0ZXNwYWNlVG9rZW4oKTtcblxuICAgIGlmICghbmV4dFRva2VuV2hpdGVzcGFjZVRva2VuKSB7XG4gICAgICBub1doaXRlc3BhY2VOb2RlID0gTm9XaGl0ZXNwYWNlTm9kZS5mcm9tTm90aGluZygpO1xuICAgIH1cblxuICAgIHBhcnNlZCA9IChub1doaXRlc3BhY2VOb2RlICE9PSBudWxsKVxuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgbm9kZXMucHVzaChub1doaXRlc3BhY2VOb2RlKTtcblxuICAgICAgaWYgKGNhbGxiYWNrICE9PSBudWxsKSB7XG4gICAgICAgIHBhcnNlZCA9IGNhbGxiYWNrKCk7XG5cbiAgICAgICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgICAgICBub2Rlcy5wb3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBzdGF0ZS5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IE5PX1dISVRFU1BBQ0U7IC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUoTm9XaGl0ZXNwYWNlUGFydCk7IH1cbn1cbiJdLCJuYW1lcyI6WyJOT19XSElURVNQQUNFIiwic3BlY2lhbFN5bWJvbHMiLCJOb1doaXRlc3BhY2VQYXJ0IiwiaXNOb1doaXRlc3BhY2VQYXJ0Iiwibm9XaGl0ZXNwYWNlUGFydCIsInBhcnNlIiwibm9kZXMiLCJzdGF0ZSIsImNhbGxiYWNrIiwicGFyc2VkIiwibm9XaGl0ZXNwYWNlTm9kZSIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4IiwibmV4dFRva2VuV2hpdGVzcGFjZVRva2VuIiwiaXNOZXh0VG9rZW5XaGl0ZXNwYWNlVG9rZW4iLCJOb1doaXRlc3BhY2VOb2RlIiwiZnJvbU5vdGhpbmciLCJwdXNoIiwicG9wIiwiYmFja3RyYWNrIiwiYXNTdHJpbmciLCJzdHJpbmciLCJjbG9uZSIsIlRlcm1pbmFsUGFydCJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWSxXQUFBLENBQUM7OztFQUFiO3dCQUFBO0FBRStCLEdBQWMsQ0FBZCxZQUFjO0FBRXBCLEdBQXFCLENBQXJCLFNBQXFCO0FBQ2pCLEdBQWtDLENBQWxDLGFBQWtDOzs7Ozs7Ozs7Ozs7Ozs7OERBTC9EO3NDQUFBOzZEQUFBO2lFQUFBOzs7O3dFQUFBO2dFQUFBOzs7OzswQkFBQTs7Ozs7Ozs7OztTQUFBOzs7Ozs7O0tBQUE7Ozs7Ozs7Ozs7Ozs7TUFBQTt5REFBQTs7Ozs7Ozs7Ozs7Ozs7O3VCQUFBOztLQUFBOzs7Ozt3Q0FBQTs7Ozs7OzJCQUFBOzs7Ozs7OztxRkFBQTs7Ozs7Ozs7Ozs7O21FQUFBOztpREFBQTs7Ozs7QUFPQSxHQUFLLENBQUdBLGFBQWEsR0FBS0MsWUFBYyxnQkFBaENELGFBQWE7QUFFTixHQUFLLENBQUNFLGdCQUFnQixpQkFBdEIsUUFBUTs2Q0FUdkI7O2FBU3FCQSxnQkFBZ0I7K0NBVHJDOzs7OztZQVVFQyxHQUFrQixFQUFsQkEsQ0FBa0I7bUJBQWxCQSxRQUFRLENBQVJBLGtCQUFrQixHQUFHLENBQUM7Z0JBQ3BCLEdBQUssQ0FBQ0MsZ0JBQWdCLEdBQUcsSUFBSTtnQkFFN0IsTUFBTSxDQUFDQSxnQkFBZ0I7WUFDekIsQ0FBQzs7O1lBRURDLEdBQUssRUFBTEEsQ0FBSzttQkFBTEEsUUFBUSxDQUFSQSxLQUFLLENBQUNDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUUsQ0FBQztnQkFDN0IsR0FBRyxDQUFDQyxNQUFNO2dCQUVWLEdBQUcsQ0FBQ0MsZ0JBQWdCLEdBQUcsSUFBSTtnQkFFM0IsR0FBSyxDQUFDQyxVQUFVLEdBQUdKLEtBQUssQ0FBQ0ssYUFBYSxJQUNoQ0Msd0JBQXdCLEdBQUdOLEtBQUssQ0FBQ08sMEJBQTBCO2dCQUVqRSxFQUFFLEdBQUdELHdCQUF3QixFQUFFLENBQUM7b0JBQzlCSCxnQkFBZ0IsR0FBR0ssYUFBZ0IsU0FBQ0MsV0FBVyxFQUFFLENBQUM7Z0JBQ3BELENBQUM7Z0JBRURQLE1BQU0sR0FBSUMsZ0JBQWdCLEtBQUssSUFBSSxBQTVCdkM7Z0JBOEJJLEVBQUUsRUFBRUQsTUFBTSxFQUFFLENBQUM7b0JBQ1hILEtBQUssQ0FBQ1csSUFBSSxDQUFDUCxnQkFBZ0IsQ0FBQyxDQUFDO29CQUU3QixFQUFFLEVBQUVGLFFBQVEsS0FBSyxJQUFJLEVBQUUsQ0FBQzt3QkFDdEJDLE1BQU0sR0FBR0QsUUFBUSxFQUFFLENBQUM7d0JBRXBCLEVBQUUsR0FBR0MsTUFBTSxFQUFFLENBQUM7NEJBQ1pILEtBQUssQ0FBQ1ksR0FBRyxFQUFFLENBQUM7d0JBQ2QsQ0FBQztvQkFDSCxDQUFDO2dCQUNILENBQUM7Z0JBRUQsRUFBRSxHQUFHVCxNQUFNLEVBQUUsQ0FBQztvQkFDWkYsS0FBSyxDQUFDWSxTQUFTLENBQUNSLFVBQVUsQ0FBQyxDQUFDO2dCQUM5QixDQUFDO2dCQUVELE1BQU0sQ0FBQ0YsTUFBTTtZQUNmLENBQUM7OztZQUVEVyxHQUFRLEVBQVJBLENBQVE7bUJBQVJBLFFBQVEsQ0FBUkEsUUFBUSxHQUFHLENBQUM7Z0JBQ1YsR0FBSyxDQUFDQyxNQUFNLEdBQUdyQixhQUFhLEVBQUUsRUFBRyxBQUFILENBQUc7Z0JBRWpDLE1BQU0sQ0FBQ3FCLE1BQU07WUFDZixDQUFDOzs7WUFFREMsR0FBSyxFQUFMQSxDQUFLO21CQUFMQSxRQUFRLENBQVJBLEtBQUssR0FBRyxDQUFDO2dCQUFDLE1BQU0sc0JBOUNHcEIsZ0JBQWdCLGFBOENab0IsQ0FBSyxRQUFYLElBQUssYUFBT3BCLGdCQUFnQjtZQUFHLENBQUM7O01BdkRuRDs7RUFTOENxQixTQUFZO2tCQUFyQ3JCLGdCQUFnQixBQVRyQyJ9