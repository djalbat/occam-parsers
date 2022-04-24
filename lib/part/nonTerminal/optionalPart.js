"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
var _nonTerminal = _interopRequireDefault(require("../../part/nonTerminal"));
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
var questionMark = _occamLexers.specialSymbols.questionMark;
var OptionalPartPart = /*#__PURE__*/ function(NonTerminalPart) {
    _inherits(OptionalPartPart, NonTerminalPart);
    var _super = _createSuper(OptionalPartPart);
    function OptionalPartPart(part) {
        _classCallCheck(this, OptionalPartPart);
        var _this;
        var type = _partTypes.OptionalPartPartType; ///
        _this = _super.call(this, type);
        _this.part = part;
        return _this;
    }
    _createClass(OptionalPartPart, [
        {
            key: "getPart",
            value: function getPart() {
                return this.part;
            }
        },
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
                var operatorString = questionMark, partString = this.part.asString(), string = "".concat(partString).concat(operatorString);
                return string;
            }
        },
        {
            key: "clone",
            value: function clone() {
                return _get(_getPrototypeOf(OptionalPartPart.prototype), "clone", this).call(this, OptionalPartPart, this.part);
            }
        }
    ]);
    return OptionalPartPart;
}(_nonTerminal.default);
function parsePart(part, nodes, state, callback) {
    var parsed;
    if (callback !== null) {
        parsed = callback();
        if (!parsed) {
            parsed = part.parse(nodes, state, callback);
        }
    } else {
        part.parse(nodes, state, callback);
        parsed = true;
    }
    return parsed;
}
exports.default = OptionalPartPart;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L25vblRlcm1pbmFsL29wdGlvbmFsUGFydC5qcyIsIi4uL3NyYy9jb25zdGFudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxQYXJ0IGZyb20gXCIuLi8uLi9wYXJ0L25vblRlcm1pbmFsXCI7XG5cbmltcG9ydCB7IHB1c2ggfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBPcHRpb25hbFBhcnRQYXJ0VHlwZSB9IGZyb20gXCIuLi8uLi9wYXJ0VHlwZXNcIjtcblxuY29uc3QgeyBxdWVzdGlvbk1hcmsgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcHRpb25hbFBhcnRQYXJ0IGV4dGVuZHMgTm9uVGVybWluYWxQYXJ0IHtcbiAgY29uc3RydWN0b3IocGFydCkge1xuICAgIGNvbnN0IHR5cGUgPSBPcHRpb25hbFBhcnRQYXJ0VHlwZTsgLy8vXG5cbiAgICBzdXBlcih0eXBlKTtcblxuICAgIHRoaXMucGFydCA9IHBhcnQ7XG4gIH1cblxuICBnZXRQYXJ0KCkge1xuICAgIHJldHVybiB0aGlzLnBhcnQ7XG4gIH1cblxuICBwYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIGNvbnN0IHBhcnQgPSB0aGlzLmdldFBhcnQoKSxcbiAgICAgICAgICBwYXJ0Tm9kZXMgPSBbXSxcbiAgICAgICAgICBzYXZlZEluZGV4ID0gc3RhdGUuZ2V0U2F2ZWRJbmRleCgpO1xuXG4gICAgcGFyc2VkID0gcGFyc2VQYXJ0KHBhcnQsIHBhcnROb2Rlcywgc3RhdGUsIGNhbGxiYWNrKTtcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIHB1c2gobm9kZXMsIHBhcnROb2Rlcyk7XG4gICAgfVxuXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIHN0YXRlLmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3Qgb3BlcmF0b3JTdHJpbmcgPSBxdWVzdGlvbk1hcmssICAvLy9cbiAgICAgICAgICBwYXJ0U3RyaW5nID0gdGhpcy5wYXJ0LmFzU3RyaW5nKCksXG4gICAgICAgICAgc3RyaW5nID0gYCR7cGFydFN0cmluZ30ke29wZXJhdG9yU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZShPcHRpb25hbFBhcnRQYXJ0LCB0aGlzLnBhcnQpOyB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFydChwYXJ0LCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrKSB7XG4gIGxldCBwYXJzZWQ7XG5cbiAgaWYgKGNhbGxiYWNrICE9PSBudWxsKSB7XG4gICAgcGFyc2VkID0gY2FsbGJhY2soKTtcblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBwYXJzZWQgPSBwYXJ0LnBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBwYXJ0LnBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spO1xuXG4gICAgcGFyc2VkID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZWQ7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IEVNUFRZX1NUUklORyA9IFwiXCI7XG4iXSwibmFtZXMiOlsicXVlc3Rpb25NYXJrIiwic3BlY2lhbFN5bWJvbHMiLCJPcHRpb25hbFBhcnRQYXJ0IiwicGFydCIsInR5cGUiLCJPcHRpb25hbFBhcnRQYXJ0VHlwZSIsImdldFBhcnQiLCJwYXJzZSIsIm5vZGVzIiwic3RhdGUiLCJjYWxsYmFjayIsInBhcnNlZCIsInBhcnROb2RlcyIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4IiwicGFyc2VQYXJ0IiwicHVzaCIsImJhY2t0cmFjayIsImFzU3RyaW5nIiwib3BlcmF0b3JTdHJpbmciLCJwYXJ0U3RyaW5nIiwic3RyaW5nIiwiY2xvbmUiLCJOb25UZXJtaW5hbFBhcnQiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFa0IsSUFBQSxZQUFjLFdBQWQsY0FBYyxDQUFBO0FBRWpCLElBQUEsWUFBd0Isa0NBQXhCLHdCQUF3QixFQUFBO0FBRS9CLElBQUEsTUFBdUIsV0FBdkIsdUJBQXVCLENBQUE7QUFDUCxJQUFBLFVBQWlCLFdBQWpCLGlCQUFpQixDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEQsSUFBTSxBQUFFQSxZQUFZLEdBQUtDLFlBQWMsZUFBQSxDQUEvQkQsWUFBWSxBQUFtQixBQUFDO0FBRXpCLElBQUEsQUFBTUUsZ0JBQWdCLGlCQTRDbEMsQUE1Q1k7OzthQUFNQSxnQkFBZ0IsQ0FDdkJDLElBQUk7OztRQUNkLElBQU1DLElBQUksR0FBR0MsVUFBb0IscUJBQUEsQUFBQyxFQUFDLEdBQUc7a0NBRWhDRCxJQUFJLENDZmQsQ0RlZ0I7UUFFWixNQUFLRCxJQUFJLEdBQUdBLElBQUksQ0FBQzs7Ozs7WUFHbkJHLEdBQU8sRUFBUEEsU0FBTzttQkFBUEEsU0FBQUEsT0FBTyxHQUFHO2dCQUNSLE9BQU8sSUFBSSxDQUFDSCxJQUFJLENBQUM7YUFDbEI7OztZQUVESSxHQUFLLEVBQUxBLE9BQUs7bUJBQUxBLFNBQUFBLEtBQUssQ0FBQ0MsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRTtnQkFDNUIsSUFBSUMsTUFBTSxBQUFDO2dCQUVYLElBQU1SLElBQUksR0FBRyxJQUFJLENBQUNHLE9BQU8sRUFBRSxFQUNyQk0sU0FBUyxHQUFHLEVBQUUsRUFDZEMsVUFBVSxHQUFHSixLQUFLLENBQUNLLGFBQWEsRUFBRSxBQUFDO2dCQUV6Q0gsTUFBTSxHQUFHSSxTQUFTLENBQUNaLElBQUksRUFBRVMsU0FBUyxFQUFFSCxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxDQUFDO2dCQUVyRCxJQUFJQyxNQUFNLEVBQUU7b0JBQ1ZLLENBQUFBLEdBQUFBLE1BQUksQUFBa0IsQ0FBQSxLQUFsQixDQUFDUixLQUFLLEVBQUVJLFNBQVMsQ0FBQyxDQUFDO2lCQUN4QjtnQkFFRCxJQUFJLENBQUNELE1BQU0sRUFBRTtvQkFDWEYsS0FBSyxDQUFDUSxTQUFTLENBQUNKLFVBQVUsQ0FBQyxDQUFDO2lCQUM3QjtnQkFFRCxPQUFPRixNQUFNLENBQUM7YUFDZjs7O1lBRURPLEdBQVEsRUFBUkEsVUFBUTttQkFBUkEsU0FBQUEsUUFBUSxHQUFHO2dCQUNULElBQU1DLGNBQWMsR0FBR25CLFlBQVksRUFDN0JvQixVQUFVLEdBQUcsSUFBSSxDQUFDakIsSUFBSSxDQUFDZSxRQUFRLEVBQUUsRUFDakNHLE1BQU0sR0FBRyxBQUFDLEVBQUEsQ0FBZUYsTUFBYyxDQUEzQkMsVUFBVSxDQUFrQixDQUFBLE1BQUEsQ0FBZkQsY0FBYyxDQUFFLEFBQUM7Z0JBRWhELE9BQU9FLE1BQU0sQ0FBQzthQUNmOzs7WUFFREMsR0FBSyxFQUFMQSxPQUFLO21CQUFMQSxTQUFBQSxLQUFLLEdBQUc7Z0JBQUUsT0FBTyxxQkF6Q0VwQixnQkFBZ0IsYUF5Q1pvQixPQUFLLEVBQVgsSUFBSyxDQUFBLFlBQU9wQixnQkFBZ0IsRUFBRSxJQUFJLENBQUNDLElBQUksRUFBRTthQUFFOzs7O0NBQzdELENBMUM2Q29CLFlBQWUsUUFBQSxDQTBDNUQ7QUFFRCxTQUFTUixTQUFTLENBQUNaLElBQUksRUFBRUssS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRTtJQUMvQyxJQUFJQyxNQUFNLEFBQUM7SUFFWCxJQUFJRCxRQUFRLEtBQUssSUFBSSxFQUFFO1FBQ3JCQyxNQUFNLEdBQUdELFFBQVEsRUFBRSxDQUFDO1FBRXBCLElBQUksQ0FBQ0MsTUFBTSxFQUFFO1lBQ1hBLE1BQU0sR0FBR1IsSUFBSSxDQUFDSSxLQUFLLENBQUNDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRLENBQUMsQ0FBQztTQUM3QztLQUNGLE1BQU07UUFDTFAsSUFBSSxDQUFDSSxLQUFLLENBQUNDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRLENBQUMsQ0FBQztRQUVuQ0MsTUFBTSxHQUFHLElBQUksQ0FBQztLQUNmO0lBRUQsT0FBT0EsTUFBTSxDQUFDO0NBQ2Y7a0JBNURvQlQsZ0JBQWdCIn0=