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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L3Rlcm1pbmFsL25vV2hpdGVzcGFjZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBUZXJtaW5hbFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvdGVybWluYWxcIjtcbmltcG9ydCBOb1doaXRlc3BhY2VOb2RlIGZyb20gXCIuLi8uLi9ub2RlL3Rlcm1pbmFsL25vV2hpdGVzcGFjZVwiO1xuXG5jb25zdCB7IE5PX1dISVRFU1BBQ0UgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb1doaXRlc3BhY2VQYXJ0IGV4dGVuZHMgVGVybWluYWxQYXJ0IHtcbiAgaXNOb1doaXRlc3BhY2VQYXJ0KCkge1xuICAgIGNvbnN0IG5vV2hpdGVzcGFjZVBhcnQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIG5vV2hpdGVzcGFjZVBhcnQ7XG4gIH1cblxuICBwYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIGxldCBub1doaXRlc3BhY2VOb2RlID0gbnVsbDtcblxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBzdGF0ZS5nZXRTYXZlZEluZGV4KCksXG4gICAgICAgICAgbmV4dFRva2VuV2hpdGVzcGFjZVRva2VuID0gc3RhdGUuaXNOZXh0VG9rZW5XaGl0ZXNwYWNlVG9rZW4oKTtcblxuICAgIGlmICghbmV4dFRva2VuV2hpdGVzcGFjZVRva2VuKSB7XG4gICAgICBub1doaXRlc3BhY2VOb2RlID0gTm9XaGl0ZXNwYWNlTm9kZS5mcm9tTm90aGluZygpO1xuICAgIH1cblxuICAgIHBhcnNlZCA9IChub1doaXRlc3BhY2VOb2RlICE9PSBudWxsKVxuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgbm9kZXMucHVzaChub1doaXRlc3BhY2VOb2RlKTtcblxuICAgICAgaWYgKGNhbGxiYWNrICE9PSBudWxsKSB7XG4gICAgICAgIHBhcnNlZCA9IGNhbGxiYWNrKCk7XG5cbiAgICAgICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgICAgICBub2Rlcy5wb3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBzdGF0ZS5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IE5PX1dISVRFU1BBQ0U7IC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUoTm9XaGl0ZXNwYWNlUGFydCk7IH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiTk9fV0hJVEVTUEFDRSIsInNwZWNpYWxTeW1ib2xzIiwiTm9XaGl0ZXNwYWNlUGFydCIsImlzTm9XaGl0ZXNwYWNlUGFydCIsIm5vV2hpdGVzcGFjZVBhcnQiLCJwYXJzZSIsIm5vZGVzIiwic3RhdGUiLCJjYWxsYmFjayIsInBhcnNlZCIsIm5vV2hpdGVzcGFjZU5vZGUiLCJzYXZlZEluZGV4IiwiZ2V0U2F2ZWRJbmRleCIsIm5leHRUb2tlbldoaXRlc3BhY2VUb2tlbiIsImlzTmV4dFRva2VuV2hpdGVzcGFjZVRva2VuIiwiTm9XaGl0ZXNwYWNlTm9kZSIsImZyb21Ob3RoaW5nIiwicHVzaCIsInBvcCIsImJhY2t0cmFjayIsImFzU3RyaW5nIiwic3RyaW5nIiwiY2xvbmUiLCJUZXJtaW5hbFBhcnQiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFa0IsSUFBQSxZQUFjLFdBQWQsY0FBYyxDQUFBO0FBRXBCLElBQUEsU0FBcUIsa0NBQXJCLHFCQUFxQixFQUFBO0FBQ2pCLElBQUEsYUFBa0Msa0NBQWxDLGtDQUFrQyxFQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0QsSUFBTSxBQUFFQSxhQUFhLEdBQUtDLFlBQWMsZUFBQSxDQUFoQ0QsYUFBYSxBQUFtQixBQUFDO0FBRTFCLElBQUEsQUFBTUUsZ0JBQWdCLGlCQUF0Qjs7O2FBQU1BLGdCQUFnQjs7Ozs7O1lBQ25DQyxHQUFrQixFQUFsQkEsb0JBQWtCO21CQUFsQkEsU0FBQUEsa0JBQWtCLEdBQUc7Z0JBQ25CLElBQU1DLGdCQUFnQixHQUFHLElBQUksQUFBQztnQkFFOUIsT0FBT0EsZ0JBQWdCLENBQUM7YUFDekI7OztZQUVEQyxHQUFLLEVBQUxBLE9BQUs7bUJBQUxBLFNBQUFBLEtBQUssQ0FBQ0MsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRTtnQkFDNUIsSUFBSUMsTUFBTSxBQUFDO2dCQUVYLElBQUlDLGdCQUFnQixHQUFHLElBQUksQUFBQztnQkFFNUIsSUFBTUMsVUFBVSxHQUFHSixLQUFLLENBQUNLLGFBQWEsRUFBRSxFQUNsQ0Msd0JBQXdCLEdBQUdOLEtBQUssQ0FBQ08sMEJBQTBCLEVBQUUsQUFBQztnQkFFcEUsSUFBSSxDQUFDRCx3QkFBd0IsRUFBRTtvQkFDN0JILGdCQUFnQixHQUFHSyxhQUFnQixRQUFBLENBQUNDLFdBQVcsRUFBRSxDQUFDO2lCQUNuRDtnQkFFRFAsTUFBTSxHQUFJQyxnQkFBZ0IsS0FBSyxJQUFJLEFBQUM7Z0JBRXBDLElBQUlELE1BQU0sRUFBRTtvQkFDVkgsS0FBSyxDQUFDVyxJQUFJLENBQUNQLGdCQUFnQixDQUFDLENBQUM7b0JBRTdCLElBQUlGLFFBQVEsS0FBSyxJQUFJLEVBQUU7d0JBQ3JCQyxNQUFNLEdBQUdELFFBQVEsRUFBRSxDQUFDO3dCQUVwQixJQUFJLENBQUNDLE1BQU0sRUFBRTs0QkFDWEgsS0FBSyxDQUFDWSxHQUFHLEVBQUUsQ0FBQzt5QkFDYjtxQkFDRjtpQkFDRjtnQkFFRCxJQUFJLENBQUNULE1BQU0sRUFBRTtvQkFDWEYsS0FBSyxDQUFDWSxTQUFTLENBQUNSLFVBQVUsQ0FBQyxDQUFDO2lCQUM3QjtnQkFFRCxPQUFPRixNQUFNLENBQUM7YUFDZjs7O1lBRURXLEdBQVEsRUFBUkEsVUFBUTttQkFBUkEsU0FBQUEsUUFBUSxHQUFHO2dCQUNULElBQU1DLE1BQU0sR0FBR3JCLGFBQWEsQUFBQyxFQUFDLEdBQUc7Z0JBRWpDLE9BQU9xQixNQUFNLENBQUM7YUFDZjs7O1lBRURDLEdBQUssRUFBTEEsT0FBSzttQkFBTEEsU0FBQUEsS0FBSyxHQUFHO2dCQUFFLE9BQU8scUJBOUNFcEIsZ0JBQWdCLGFBOENab0IsT0FBSyxFQUFYLElBQUssQ0FBQSxZQUFPcEIsZ0JBQWdCLEVBQUU7YUFBRTs7OztDQUNsRCxDQS9DNkNxQixTQUFZLFFBQUEsQ0ErQ3pEO2tCQS9Db0JyQixnQkFBZ0IifQ==