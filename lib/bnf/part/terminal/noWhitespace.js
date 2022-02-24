"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
var _terminal = _interopRequireDefault(require("../../part/terminal"));
var _noWhitespace = _interopRequireDefault(require("../../../common/node/terminal/noWhitespace"));
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ibmYvcGFydC90ZXJtaW5hbC9ub1doaXRlc3BhY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgVGVybWluYWxQYXJ0IGZyb20gXCIuLi8uLi9wYXJ0L3Rlcm1pbmFsXCI7XG5pbXBvcnQgTm9XaGl0ZXNwYWNlTm9kZSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL25vZGUvdGVybWluYWwvbm9XaGl0ZXNwYWNlXCI7XG5cbmNvbnN0IHsgTk9fV0hJVEVTUEFDRSB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vV2hpdGVzcGFjZVBhcnQgZXh0ZW5kcyBUZXJtaW5hbFBhcnQge1xuICBpc05vV2hpdGVzcGFjZVBhcnQoKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlUGFydCA9IHRydWU7XG5cbiAgICByZXR1cm4gbm9XaGl0ZXNwYWNlUGFydDtcbiAgfVxuXG4gIHBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgbGV0IG5vV2hpdGVzcGFjZU5vZGUgPSBudWxsO1xuXG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IHN0YXRlLmdldFNhdmVkSW5kZXgoKSxcbiAgICAgICAgICBuZXh0VG9rZW5XaGl0ZXNwYWNlVG9rZW4gPSBzdGF0ZS5pc05leHRUb2tlbldoaXRlc3BhY2VUb2tlbigpO1xuXG4gICAgaWYgKCFuZXh0VG9rZW5XaGl0ZXNwYWNlVG9rZW4pIHtcbiAgICAgIG5vV2hpdGVzcGFjZU5vZGUgPSBOb1doaXRlc3BhY2VOb2RlLmZyb21Ob3RoaW5nKCk7XG4gICAgfVxuXG4gICAgcGFyc2VkID0gKG5vV2hpdGVzcGFjZU5vZGUgIT09IG51bGwpXG5cbiAgICBpZiAocGFyc2VkKSB7XG4gICAgICBub2Rlcy5wdXNoKG5vV2hpdGVzcGFjZU5vZGUpO1xuXG4gICAgICBpZiAoY2FsbGJhY2sgIT09IG51bGwpIHtcbiAgICAgICAgcGFyc2VkID0gY2FsbGJhY2soKTtcblxuICAgICAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgICAgIG5vZGVzLnBvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIHN0YXRlLmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gTk9fV0hJVEVTUEFDRTsgLy8vXG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZShOb1doaXRlc3BhY2VQYXJ0KTsgfVxufVxuIl0sIm5hbWVzIjpbIk5PX1dISVRFU1BBQ0UiLCJzcGVjaWFsU3ltYm9scyIsIk5vV2hpdGVzcGFjZVBhcnQiLCJpc05vV2hpdGVzcGFjZVBhcnQiLCJub1doaXRlc3BhY2VQYXJ0IiwicGFyc2UiLCJub2RlcyIsInN0YXRlIiwiY2FsbGJhY2siLCJwYXJzZWQiLCJub1doaXRlc3BhY2VOb2RlIiwic2F2ZWRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJuZXh0VG9rZW5XaGl0ZXNwYWNlVG9rZW4iLCJpc05leHRUb2tlbldoaXRlc3BhY2VUb2tlbiIsIk5vV2hpdGVzcGFjZU5vZGUiLCJmcm9tTm90aGluZyIsInB1c2giLCJwb3AiLCJiYWNrdHJhY2siLCJhc1N0cmluZyIsInN0cmluZyIsImNsb25lIiwiVGVybWluYWxQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVtQixHQUFjLENBQWQsWUFBYztBQUVwQixHQUFxQixDQUFyQixTQUFxQjtBQUNqQixHQUE0QyxDQUE1QyxhQUE0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpFLEdBQUssQ0FBR0EsYUFBYSxHQUFLQyxZQUFjLGdCQUFoQ0QsYUFBYTtJQUVBRSxnQkFBZ0IsaUJBQXRCLFFBQVE7OzthQUFGQSxnQkFBZ0I7Ozs7OztZQUNuQ0MsR0FBa0IsRUFBbEJBLENBQWtCO21CQUFsQkEsUUFBUSxDQUFSQSxrQkFBa0IsR0FBRyxDQUFDO2dCQUNwQixHQUFLLENBQUNDLGdCQUFnQixHQUFHLElBQUk7Z0JBRTdCLE1BQU0sQ0FBQ0EsZ0JBQWdCO1lBQ3pCLENBQUM7OztZQUVEQyxHQUFLLEVBQUxBLENBQUs7bUJBQUxBLFFBQVEsQ0FBUkEsS0FBSyxDQUFDQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFLENBQUM7Z0JBQzdCLEdBQUcsQ0FBQ0MsTUFBTTtnQkFFVixHQUFHLENBQUNDLGdCQUFnQixHQUFHLElBQUk7Z0JBRTNCLEdBQUssQ0FBQ0MsVUFBVSxHQUFHSixLQUFLLENBQUNLLGFBQWEsSUFDaENDLHdCQUF3QixHQUFHTixLQUFLLENBQUNPLDBCQUEwQjtnQkFFakUsRUFBRSxHQUFHRCx3QkFBd0IsRUFBRSxDQUFDO29CQUM5QkgsZ0JBQWdCLEdBQUdLLGFBQWdCLFNBQUNDLFdBQVc7Z0JBQ2pELENBQUM7Z0JBRURQLE1BQU0sR0FBSUMsZ0JBQWdCLEtBQUssSUFBSTtnQkFFbkMsRUFBRSxFQUFFRCxNQUFNLEVBQUUsQ0FBQztvQkFDWEgsS0FBSyxDQUFDVyxJQUFJLENBQUNQLGdCQUFnQjtvQkFFM0IsRUFBRSxFQUFFRixRQUFRLEtBQUssSUFBSSxFQUFFLENBQUM7d0JBQ3RCQyxNQUFNLEdBQUdELFFBQVE7d0JBRWpCLEVBQUUsR0FBR0MsTUFBTSxFQUFFLENBQUM7NEJBQ1pILEtBQUssQ0FBQ1ksR0FBRzt3QkFDWCxDQUFDO29CQUNILENBQUM7Z0JBQ0gsQ0FBQztnQkFFRCxFQUFFLEdBQUdULE1BQU0sRUFBRSxDQUFDO29CQUNaRixLQUFLLENBQUNZLFNBQVMsQ0FBQ1IsVUFBVTtnQkFDNUIsQ0FBQztnQkFFRCxNQUFNLENBQUNGLE1BQU07WUFDZixDQUFDOzs7WUFFRFcsR0FBUSxFQUFSQSxDQUFRO21CQUFSQSxRQUFRLENBQVJBLFFBQVEsR0FBRyxDQUFDO2dCQUNWLEdBQUssQ0FBQ0MsTUFBTSxHQUFHckIsYUFBYSxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFakMsTUFBTSxDQUFDcUIsTUFBTTtZQUNmLENBQUM7OztZQUVEQyxHQUFLLEVBQUxBLENBQUs7bUJBQUxBLFFBQVEsQ0FBUkEsS0FBSyxHQUFHLENBQUM7Z0JBQUMsTUFBTSxzQkE5Q0dwQixnQkFBZ0IsYUE4Q1pvQixDQUFLLFFBQVgsSUFBSyxhQUFPcEIsZ0JBQWdCO1lBQUcsQ0FBQzs7OztFQTlDTHFCLFNBQVk7a0JBQXJDckIsZ0JBQWdCIn0=