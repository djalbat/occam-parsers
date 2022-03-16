"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
var _collectionOfParts = _interopRequireDefault(require("./collectionOfParts"));
var _array = require("../../utilities/array");
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
var asterisk = _occamLexers.specialSymbols.asterisk;
var ZeroOrMorePartsPart = /*#__PURE__*/ function(CollectionOfPartsPart) {
    _inherits(ZeroOrMorePartsPart, CollectionOfPartsPart);
    var _super = _createSuper(ZeroOrMorePartsPart);
    function ZeroOrMorePartsPart(part) {
        _classCallCheck(this, ZeroOrMorePartsPart);
        var type = _partTypes.ZeroOrMorePartsPartType; ///
        return _super.call(this, type, part);
    }
    _createClass(ZeroOrMorePartsPart, [
        {
            key: "parse",
            value: function parse(nodes, state, callback) {
                var parsed;
                var part = this.getPart(), partNodes = [], savedIndex = state.getSavedIndex();
                parsed = parsePart(part, partNodes, state, callback);
                if (parsed) {
                    (0, _array).push(nodes, partNodes);
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
                var operatorString = asterisk, string = _get(_getPrototypeOf(ZeroOrMorePartsPart.prototype), "asString", this).call(this, operatorString);
                return string;
            }
        },
        {
            key: "clone",
            value: function clone() {
                return _get(_getPrototypeOf(ZeroOrMorePartsPart.prototype), "clone", this).call(this, ZeroOrMorePartsPart);
            }
        }
    ]);
    return ZeroOrMorePartsPart;
}(_collectionOfParts.default);
exports.default = ZeroOrMorePartsPart;
function parsePart(part, nodes, state, callback) {
    var parsed;
    if (callback !== null) {
        parsed = callback();
        if (!parsed) {
            parsed = part.parse(nodes, state, function() {
                return parsePart(part, nodes, state, callback);
            });
        }
    } else {
        parsed = part.parse(nodes, state, callback);
        if (parsed) {
            parsePart(part, nodes, state, callback);
        }
        parsed = true;
    }
    return parsed;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L25vblRlcm1pbmFsL3plcm9Pck1vcmVQYXJ0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBDb2xsZWN0aW9uT2ZQYXJ0c1BhcnQgZnJvbSBcIi4vY29sbGVjdGlvbk9mUGFydHNcIjtcblxuaW1wb3J0IHsgcHVzaCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlIH0gZnJvbSBcIi4uLy4uL3BhcnRUeXBlc1wiO1xuXG5jb25zdCB7IGFzdGVyaXNrIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWmVyb09yTW9yZVBhcnRzUGFydCBleHRlbmRzIENvbGxlY3Rpb25PZlBhcnRzUGFydCB7XG4gIGNvbnN0cnVjdG9yKHBhcnQpIHtcbiAgICBjb25zdCB0eXBlID0gWmVyb09yTW9yZVBhcnRzUGFydFR5cGU7IC8vL1xuXG4gICAgc3VwZXIodHlwZSwgcGFydCk7XG4gIH1cblxuICBwYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIGNvbnN0IHBhcnQgPSB0aGlzLmdldFBhcnQoKSxcbiAgICAgICAgICBwYXJ0Tm9kZXMgPSBbXSxcbiAgICAgICAgICBzYXZlZEluZGV4ID0gc3RhdGUuZ2V0U2F2ZWRJbmRleCgpO1xuXG4gICAgcGFyc2VkID0gcGFyc2VQYXJ0KHBhcnQsIHBhcnROb2Rlcywgc3RhdGUsIGNhbGxiYWNrKTtcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIHB1c2gobm9kZXMsIHBhcnROb2Rlcyk7XG4gICAgfVxuXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIHN0YXRlLmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3Qgb3BlcmF0b3JTdHJpbmcgPSBhc3RlcmlzaywgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHN1cGVyLmFzU3RyaW5nKG9wZXJhdG9yU3RyaW5nKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKFplcm9Pck1vcmVQYXJ0c1BhcnQpOyB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFydChwYXJ0LCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrKSB7XG4gIGxldCBwYXJzZWQ7XG5cbiAgaWYgKGNhbGxiYWNrICE9PSBudWxsKSB7XG4gICAgcGFyc2VkID0gY2FsbGJhY2soKTtcblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBwYXJzZWQgPSBwYXJ0LnBhcnNlKG5vZGVzLCBzdGF0ZSwgKCkgPT4gcGFyc2VQYXJ0KHBhcnQsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcGFyc2VkID0gcGFydC5wYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrKTtcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIHBhcnNlUGFydChwYXJ0LCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBwYXJzZWQgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn1cbiJdLCJuYW1lcyI6WyJhc3RlcmlzayIsInNwZWNpYWxTeW1ib2xzIiwiWmVyb09yTW9yZVBhcnRzUGFydCIsInBhcnQiLCJ0eXBlIiwiWmVyb09yTW9yZVBhcnRzUGFydFR5cGUiLCJwYXJzZSIsIm5vZGVzIiwic3RhdGUiLCJjYWxsYmFjayIsInBhcnNlZCIsImdldFBhcnQiLCJwYXJ0Tm9kZXMiLCJzYXZlZEluZGV4IiwiZ2V0U2F2ZWRJbmRleCIsInBhcnNlUGFydCIsInB1c2giLCJiYWNrdHJhY2siLCJhc1N0cmluZyIsIm9wZXJhdG9yU3RyaW5nIiwic3RyaW5nIiwiY2xvbmUiLCJDb2xsZWN0aW9uT2ZQYXJ0c1BhcnQiXSwibWFwcGluZ3MiOiJBQUFBLENBQVksV0FBQSxDQUFDOzs7RUFBYjt3QkFBQTtBQUUrQixHQUFjLENBQWQsWUFBYztBQUVYLEdBQXFCLENBQXJCLGtCQUFxQjtBQUVsQyxHQUF1QixDQUF2QixNQUF1QjtBQUNKLEdBQWlCLENBQWpCLFVBQWlCOzs7Ozs7Ozs7Ozs7Ozs7OERBUHpEO3NDQUFBOzZEQUFBO2lFQUFBOzs7O3dFQUFBO2dFQUFBOzs7OzswQkFBQTs7Ozs7Ozs7OztTQUFBOzs7Ozs7O0tBQUE7Ozs7Ozs7Ozs7Ozs7TUFBQTt5REFBQTs7Ozs7Ozs7Ozs7Ozs7O3VCQUFBOztLQUFBOzs7Ozt3Q0FBQTs7Ozs7OzJCQUFBOzs7Ozs7OztxRkFBQTs7Ozs7Ozs7Ozs7O21FQUFBOztpREFBQTs7Ozs7QUFTQSxHQUFLLENBQUdBLFFBQVEsR0FBS0MsWUFBYyxnQkFBM0JELFFBQVE7QUFFRCxHQUFLLENBQUNFLG1CQUFtQixpQkFBekIsUUFBUTt5REFYdkI7O2FBV3FCQSxtQkFBbUIsQ0FDMUJDLElBQUk7a0RBWmxCO1FBYUksR0FBSyxDQUFDQyxJQUFJLEdBQUdDLFVBQXVCLDBCQUFFLEVBQUcsQUFBSCxDQUFHO2lDQUVuQ0QsSUFBSSxFQUFFRCxJQUFJOzs7O1lBR2xCRyxHQUFLLEVBQUxBLENBQUs7bUJBQUxBLFFBQVEsQ0FBUkEsS0FBSyxDQUFDQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFLENBQUM7Z0JBQzdCLEdBQUcsQ0FBQ0MsTUFBTTtnQkFFVixHQUFLLENBQUNQLElBQUksR0FBRyxJQUFJLENBQUNRLE9BQU8sSUFDbkJDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFDZEMsVUFBVSxHQUFHTCxLQUFLLENBQUNNLGFBQWE7Z0JBRXRDSixNQUFNLEdBQUdLLFNBQVMsQ0FBQ1osSUFBSSxFQUFFUyxTQUFTLEVBQUVKLEtBQUssRUFBRUMsUUFBUSxDQUFDLENBQUM7Z0JBRXJELEVBQUUsRUFBRUMsTUFBTSxFQUFFLENBQUM7d0JBQ1hNLE1BQUksT0FBQ1QsS0FBSyxFQUFFSyxTQUFTLENBQUMsQ0FBQztnQkFDekIsQ0FBQztnQkFFRCxFQUFFLEdBQUdGLE1BQU0sRUFBRSxDQUFDO29CQUNaRixLQUFLLENBQUNTLFNBQVMsQ0FBQ0osVUFBVSxDQUFDLENBQUM7Z0JBQzlCLENBQUM7Z0JBRUQsTUFBTSxDQUFDSCxNQUFNO1lBQ2YsQ0FBQzs7O1lBRURRLEdBQVEsRUFBUkEsQ0FBUTttQkFBUkEsUUFBUSxDQUFSQSxRQUFRLEdBQUcsQ0FBQztnQkFDVixHQUFLLENBQUNDLGNBQWMsR0FBR25CLFFBQVEsRUFDekJvQixNQUFNLHdCQTdCS2xCLG1CQUFtQixhQTZCZmdCLENBQVEsV0FBZCxJQUFLLGFBQVVDLGNBQWM7Z0JBRTVDLE1BQU0sQ0FBQ0MsTUFBTTtZQUNmLENBQUM7OztZQUVEQyxHQUFLLEVBQUxBLENBQUs7bUJBQUxBLFFBQVEsQ0FBUkEsS0FBSyxHQUFHLENBQUM7Z0JBQUMsTUFBTSxzQkFsQ0duQixtQkFBbUIsYUFrQ2ZtQixDQUFLLFFBQVgsSUFBSyxhQUFPbkIsbUJBQW1CO1lBQUcsQ0FBQzs7TUE3Q3REOztFQVdpRG9CLGtCQUFxQjtrQkFBakRwQixtQkFBbUIsQUFYeEM7U0FnRFNhLFNBQVMsQ0FBQ1osSUFBSSxFQUFFSSxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFLENBQUM7SUFDaEQsR0FBRyxDQUFDQyxNQUFNO0lBRVYsRUFBRSxFQUFFRCxRQUFRLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDdEJDLE1BQU0sR0FBR0QsUUFBUSxFQUFFLENBQUM7UUFFcEIsRUFBRSxHQUFHQyxNQUFNLEVBQUUsQ0FBQztZQUNaQSxNQUFNLEdBQUdQLElBQUksQ0FBQ0csS0FBSyxDQUFDQyxLQUFLLEVBQUVDLEtBQUssRUFBRSxRQUFRO3VCQUFGTyxTQUFTLENBQUNaLElBQUksRUFBRUksS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVE7Y0FBRSxDQUFDO1FBQ25GLENBQUM7SUFDSCxDQUFDLE1BQU0sQ0FBQztRQUNOQyxNQUFNLEdBQUdQLElBQUksQ0FBQ0csS0FBSyxDQUFDQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxDQUFDLENBQUM7UUFFNUMsRUFBRSxFQUFFQyxNQUFNLEVBQUUsQ0FBQztZQUNYSyxTQUFTLENBQUNaLElBQUksRUFBRUksS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxDQUFDO1FBQzFDLENBQUM7UUFFREMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsTUFBTSxDQUFDQSxNQUFNO0FBQ2YsQ0FBQyJ9