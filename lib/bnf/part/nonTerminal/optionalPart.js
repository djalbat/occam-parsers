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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ibmYvcGFydC9ub25UZXJtaW5hbC9vcHRpb25hbFBhcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxQYXJ0IGZyb20gXCIuLi8uLi9wYXJ0L25vblRlcm1pbmFsXCI7XG5cbmltcG9ydCB7IE9wdGlvbmFsUGFydFBhcnRUeXBlIH0gZnJvbSBcIi4uLy4uL3BhcnRUeXBlc1wiO1xuXG5jb25zdCB7IHF1ZXN0aW9uTWFyayB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wdGlvbmFsUGFydFBhcnQgZXh0ZW5kcyBOb25UZXJtaW5hbFBhcnQge1xuICBjb25zdHJ1Y3RvcihwYXJ0KSB7XG4gICAgY29uc3QgdHlwZSA9IE9wdGlvbmFsUGFydFBhcnRUeXBlOyAvLy9cblxuICAgIHN1cGVyKHR5cGUpO1xuXG4gICAgdGhpcy5wYXJ0ID0gcGFydDtcbiAgfVxuXG4gIGdldFBhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFydDtcbiAgfVxuXG4gIHBhcnNlKG5vZGVzLCBjb250ZXh0LCBjYWxsYmFjaykge1xuICAgIGxldCBwYXJzZWQ7XG5cbiAgICBjb25zdCBwYXJ0ID0gdGhpcy5nZXRQYXJ0KCk7XG5cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIHBhcnNlZCA9IGNhbGxiYWNrKCk7XG5cbiAgICAgIGlmICghcGFyc2VkKSB7XG4gICAgICAgIHBhcnNlZCA9IHBhcnQucGFyc2Uobm9kZXMsIGNvbnRleHQsIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGFyc2VkID0gcGFydC5wYXJzZShub2RlcywgY29udGV4dCk7XG5cbiAgICAgIHBhcnNlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IG9wZXJhdG9yU3RyaW5nID0gcXVlc3Rpb25NYXJrLCAgLy8vXG4gICAgICAgICAgcGFydFN0cmluZyA9IHRoaXMucGFydC5hc1N0cmluZygpLFxuICAgICAgICAgIHN0cmluZyA9IGAke3BhcnRTdHJpbmd9JHtvcGVyYXRvclN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUoT3B0aW9uYWxQYXJ0UGFydCwgdGhpcy5wYXJ0KTsgfVxufVxuIl0sIm5hbWVzIjpbInF1ZXN0aW9uTWFyayIsIk9wdGlvbmFsUGFydFBhcnQiLCJwYXJ0IiwidHlwZSIsImdldFBhcnQiLCJwYXJzZSIsIm5vZGVzIiwiY29udGV4dCIsImNhbGxiYWNrIiwicGFyc2VkIiwiYXNTdHJpbmciLCJvcGVyYXRvclN0cmluZyIsInBhcnRTdHJpbmciLCJzdHJpbmciLCJjbG9uZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFbUIsR0FBYyxDQUFkLFlBQWM7QUFFakIsR0FBd0IsQ0FBeEIsWUFBd0I7QUFFZixHQUFpQixDQUFqQixVQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEQsR0FBSyxDQUFHQSxZQUFZLEdBTlcsWUFBYyxnQkFNckNBLFlBQVk7SUFFQ0MsZ0JBQWdCLGlCQUF0QixRQUFRO2NBQUZBLGdCQUFnQjthQUFoQkEsZ0JBQWdCLENBQ3ZCQyxJQUFJOzhCQURHRCxnQkFBZ0I7O1FBRWpDLEdBQUssQ0FBQ0UsSUFBSSxHQU51QixVQUFpQixzQkFNZixDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7aUVBRnJCRixnQkFBZ0IsYUFJM0JFLElBQUk7Y0FFTEQsSUFBSSxHQUFHQSxJQUFJOzs7aUJBTkNELGdCQUFnQjs7WUFTbkNHLEdBQU8sRUFBUEEsQ0FBTzttQkFBUEEsUUFBUSxDQUFSQSxPQUFPLEdBQUcsQ0FBQztnQkFDVCxNQUFNLENBQUMsSUFBSSxDQUFDRixJQUFJO1lBQ2xCLENBQUM7OztZQUVERyxHQUFLLEVBQUxBLENBQUs7bUJBQUxBLFFBQVEsQ0FBUkEsS0FBSyxDQUFDQyxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsUUFBUSxFQUFFLENBQUM7Z0JBQy9CLEdBQUcsQ0FBQ0MsTUFBTTtnQkFFVixHQUFLLENBQUNQLElBQUksR0FBRyxJQUFJLENBQUNFLE9BQU87Z0JBRXpCLEVBQUUsRUFBRUksUUFBUSxFQUFFLENBQUM7b0JBQ2JDLE1BQU0sR0FBR0QsUUFBUTtvQkFFakIsRUFBRSxHQUFHQyxNQUFNLEVBQUUsQ0FBQzt3QkFDWkEsTUFBTSxHQUFHUCxJQUFJLENBQUNHLEtBQUssQ0FBQ0MsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLFFBQVE7b0JBQzlDLENBQUM7Z0JBQ0gsQ0FBQyxNQUFNLENBQUM7b0JBQ05DLE1BQU0sR0FBR1AsSUFBSSxDQUFDRyxLQUFLLENBQUNDLEtBQUssRUFBRUMsT0FBTztvQkFFbENFLE1BQU0sR0FBRyxJQUFJO2dCQUNmLENBQUM7Z0JBRUQsTUFBTSxDQUFDQSxNQUFNO1lBQ2YsQ0FBQzs7O1lBRURDLEdBQVEsRUFBUkEsQ0FBUTttQkFBUkEsUUFBUSxDQUFSQSxRQUFRLEdBQUcsQ0FBQztnQkFDVixHQUFLLENBQUNDLGNBQWMsR0FBR1gsWUFBWSxFQUM3QlksVUFBVSxHQUFHLElBQUksQ0FBQ1YsSUFBSSxDQUFDUSxRQUFRLElBQy9CRyxNQUFNLEdBQUksQ0FBQSxFQUFlRixNQUFjLENBQTNCQyxVQUFVLEVBQWtCLE1BQUEsQ0FBZkQsY0FBYztnQkFFN0MsTUFBTSxDQUFDRSxNQUFNO1lBQ2YsQ0FBQzs7O1lBRURDLEdBQUssRUFBTEEsQ0FBSzttQkFBTEEsUUFBUSxDQUFSQSxLQUFLLEdBQUcsQ0FBQztnQkFBQyxNQUFNLHNCQXpDR2IsZ0JBQWdCLGFBeUNaYSxDQUFLLFFBQVgsSUFBSyxhQUFPYixnQkFBZ0IsRUFBRSxJQUFJLENBQUNDLElBQUk7WUFBRyxDQUFDOzs7V0F6Q3pDRCxnQkFBZ0I7RUFOVCxZQUF3QjtrQkFNL0JBLGdCQUFnQiJ9