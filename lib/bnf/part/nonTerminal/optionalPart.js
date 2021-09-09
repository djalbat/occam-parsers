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
var questionMark = _occamLexers.specialSymbols.questionMark;
var OptionalPartPart = /*#__PURE__*/ function(NonTerminalPart) {
    _inherits(OptionalPartPart, NonTerminalPart);
    function OptionalPartPart(part) {
        _classCallCheck(this, OptionalPartPart);
        var _this;
        var type = _partTypes.OptionalPartPartType; ///
        _this = _possibleConstructorReturn(this, _getPrototypeOf(OptionalPartPart).call(this, type));
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
            value: function parse(nodes, context, callback) {
                var parsed;
                var part = this.getPart();
                if (callback) {
                    parsed = callback();
                    if (!parsed) {
                        parsed = part.parse(nodes, context, callback);
                    }
                } else {
                    parsed = part.parse(nodes, context);
                    parsed = true;
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
exports.default = OptionalPartPart;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ibmYvcGFydC9ub25UZXJtaW5hbC9vcHRpb25hbFBhcnQuanMiXSwibmFtZXMiOlsic3BlY2lhbFN5bWJvbHMiLCJOb25UZXJtaW5hbFBhcnQiLCJPcHRpb25hbFBhcnRQYXJ0VHlwZSIsInF1ZXN0aW9uTWFyayIsIk9wdGlvbmFsUGFydFBhcnQiLCJjb25zdHJ1Y3RvciIsInBhcnQiLCJ0eXBlIiwiZ2V0UGFydCIsInBhcnNlIiwibm9kZXMiLCJjb250ZXh0IiwiY2FsbGJhY2siLCJwYXJzZWQiLCJhc1N0cmluZyIsIm9wZXJhdG9yU3RyaW5nIiwicGFydFN0cmluZyIsInN0cmluZyIsImNsb25lIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVtQixHQUFjLENBQWQsWUFBYztBQUVqQixHQUF3QixDQUF4QixZQUF3QjtBQUVmLEdBQWlCLENBQWpCLFVBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RCxHQUFLLENBQUcsWUFBWSxHQU5XLFlBQWMsZ0JBTXJDLFlBQVk7SUFFQyxnQkFBZ0IsaUJBQXRCLFFBQVE7Y0FBRixnQkFBZ0I7YUFBaEIsZ0JBQWdCLENBQ3ZCLElBQUk7OEJBREcsZ0JBQWdCOztRQUVqQyxHQUFLLENBQUMsSUFBSSxHQU51QixVQUFpQixzQkFNZixDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7aUVBRnJCLGdCQUFnQixhQUkzQixJQUFJO2NBRUwsSUFBSSxHQUFHLElBQUk7OztpQkFOQyxnQkFBZ0I7O1lBU25DLEdBQU8sR0FBUCxPQUFPO21CQUFQLFFBQVEsQ0FBUixPQUFPLEdBQUcsQ0FBQztnQkFDVCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7WUFDbEIsQ0FBQzs7O1lBRUQsR0FBSyxHQUFMLEtBQUs7bUJBQUwsUUFBUSxDQUFSLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDO2dCQUMvQixHQUFHLENBQUMsTUFBTTtnQkFFVixHQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPO2dCQUV6QixFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUM7b0JBQ2IsTUFBTSxHQUFHLFFBQVE7b0JBRWpCLEVBQUUsR0FBRyxNQUFNLEVBQUUsQ0FBQzt3QkFDWixNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFFBQVE7b0JBQzlDLENBQUM7Z0JBQ0gsQ0FBQyxNQUFNLENBQUM7b0JBQ04sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU87b0JBRWxDLE1BQU0sR0FBRyxJQUFJO2dCQUNmLENBQUM7Z0JBRUQsTUFBTSxDQUFDLE1BQU07WUFDZixDQUFDOzs7WUFFRCxHQUFRLEdBQVIsUUFBUTttQkFBUixRQUFRLENBQVIsUUFBUSxHQUFHLENBQUM7Z0JBQ1YsR0FBSyxDQUFDLGNBQWMsR0FBRyxZQUFZLEVBQzdCLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFDL0IsTUFBTSxNQUFtQixNQUFjLENBQTNCLFVBQVUsRUFBa0IsTUFBQSxDQUFmLGNBQWM7Z0JBRTdDLE1BQU0sQ0FBQyxNQUFNO1lBQ2YsQ0FBQzs7O1lBRUQsR0FBSyxHQUFMLEtBQUs7bUJBQUwsUUFBUSxDQUFSLEtBQUssR0FBRyxDQUFDO2dCQUFDLE1BQU0sc0JBekNHLGdCQUFnQixjQXlDWixLQUFLLEdBQVgsSUFBSyxhQUFPLGdCQUFnQixFQUFFLElBQUksQ0FBQyxJQUFJO1lBQUcsQ0FBQzs7O1dBekN6QyxnQkFBZ0I7RUFOVCxZQUF3QjtrQkFNL0IsZ0JBQWdCIn0=