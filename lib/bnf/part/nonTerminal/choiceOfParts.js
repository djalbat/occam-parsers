"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _nonTerminal = _interopRequireDefault(require("../../part/nonTerminal"));
var _partTypes = require("../../partTypes");
var _array = require("../../../utilities/array");
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
var ChoiceOfPartsPart = /*#__PURE__*/ function(NonTerminalPart) {
    _inherits(ChoiceOfPartsPart, NonTerminalPart);
    function ChoiceOfPartsPart(parts) {
        _classCallCheck(this, ChoiceOfPartsPart);
        var _this;
        var type = _partTypes.ChoiceOfPartsPartType; ///
        _this = _possibleConstructorReturn(this, _getPrototypeOf(ChoiceOfPartsPart).call(this, type));
        _this.parts = parts;
        return _this;
    }
    _createClass(ChoiceOfPartsPart, [
        {
            key: "getParts",
            value: function getParts() {
                return this.parts;
            }
        },
        {
            key: "parse",
            value: function parse(nodes, context, callback) {
                var parsed;
                this.parts.some(function(part) {
                    parsed = part.parse(nodes, context, callback);
                    if (parsed) {
                        return true;
                    }
                });
                return parsed;
            }
        },
        {
            key: "asString",
            value: function asString() {
                var partsString = this.parts.reduce(function(partsString, part) {
                    var partString = part.asString();
                    if (partsString === null) {
                        partsString = partString;
                    } else {
                        partsString = "".concat(partsString, " | ").concat(partString);
                    }
                    return partsString;
                }, null), string = "( ".concat(partsString, " )");
                return string;
            }
        },
        {
            key: "clone",
            value: function clone() {
                return _get(_getPrototypeOf(ChoiceOfPartsPart.prototype), "clone", this).call(this, ChoiceOfPartsPart, this.parts);
            }
        }
    ], [
        {
            key: "fromNodes",
            value: function fromNodes(nodes) {
                var allButFirstAndLastNodes = (0, _array).allButFirstAndLast(nodes);
                nodes = allButFirstAndLastNodes; ///
                var evenNodes = (0, _array).even(nodes);
                nodes = evenNodes; ///
                var lookAhead = false, parts = nodes.map(function(node) {
                    var part = node.generatePart(lookAhead);
                    return part;
                }), choiceOfPartsPart = new ChoiceOfPartsPart(parts);
                return choiceOfPartsPart;
            }
        }
    ]);
    return ChoiceOfPartsPart;
}(_nonTerminal.default);
exports.default = ChoiceOfPartsPart;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ibmYvcGFydC9ub25UZXJtaW5hbC9jaG9pY2VPZlBhcnRzLmpzIl0sIm5hbWVzIjpbIk5vblRlcm1pbmFsUGFydCIsIkNob2ljZU9mUGFydHNQYXJ0VHlwZSIsImV2ZW4iLCJhbGxCdXRGaXJzdEFuZExhc3QiLCJDaG9pY2VPZlBhcnRzUGFydCIsImNvbnN0cnVjdG9yIiwicGFydHMiLCJ0eXBlIiwiZ2V0UGFydHMiLCJwYXJzZSIsIm5vZGVzIiwiY29udGV4dCIsImNhbGxiYWNrIiwicGFyc2VkIiwic29tZSIsInBhcnQiLCJhc1N0cmluZyIsInBhcnRzU3RyaW5nIiwicmVkdWNlIiwicGFydFN0cmluZyIsInN0cmluZyIsImNsb25lIiwiZnJvbU5vZGVzIiwiYWxsQnV0Rmlyc3RBbmRMYXN0Tm9kZXMiLCJldmVuTm9kZXMiLCJsb29rQWhlYWQiLCJtYXAiLCJub2RlIiwiZ2VuZXJhdGVQYXJ0IiwiY2hvaWNlT2ZQYXJ0c1BhcnQiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRWdCLEdBQXdCLENBQXhCLFlBQXdCO0FBRWQsR0FBaUIsQ0FBakIsVUFBaUI7QUFDZCxHQUEwQixDQUExQixNQUEwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFOUMsaUJBQWlCLGlCQUF2QixRQUFRO2NBQUYsaUJBQWlCO2FBQWpCLGlCQUFpQixDQUN4QixLQUFLOzhCQURFLGlCQUFpQjs7UUFFbEMsR0FBSyxDQUFDLElBQUksR0FMd0IsVUFBaUIsdUJBS2YsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2lFQUZ0QixpQkFBaUIsYUFJNUIsSUFBSTtjQUVMLEtBQUssR0FBRyxLQUFLOzs7aUJBTkQsaUJBQWlCOztZQVNwQyxHQUFRLEVBQVIsQ0FBUTttQkFBUixRQUFRLENBQVIsUUFBUSxHQUFHLENBQUM7Z0JBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQ25CLENBQUM7OztZQUVELEdBQUssRUFBTCxDQUFLO21CQUFMLFFBQVEsQ0FBUixLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQztnQkFDL0IsR0FBRyxDQUFDLE1BQU07Z0JBRVYsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFQLElBQUksRUFBSyxDQUFDO29CQUN6QixNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFFBQVE7b0JBRTVDLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQzt3QkFDWCxNQUFNLENBQUMsSUFBSTtvQkFDYixDQUFDO2dCQUNILENBQUM7Z0JBRUQsTUFBTSxDQUFDLE1BQU07WUFDZixDQUFDOzs7WUFFRCxHQUFRLEVBQVIsQ0FBUTttQkFBUixRQUFRLENBQVIsUUFBUSxHQUFHLENBQUM7Z0JBQ1YsR0FBSyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQVAsV0FBVyxFQUFFLElBQUksRUFBSyxDQUFDO29CQUN0RCxHQUFLLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRO29CQUVoQyxFQUFFLEVBQUUsV0FBVyxLQUFLLElBQUksRUFBRSxDQUFDO3dCQUN6QixXQUFXLEdBQUcsVUFBVTtvQkFDMUIsQ0FBQyxNQUFNLENBQUM7d0JBQ04sV0FBVyxHQUFJLENBQUEsRUFBbUIsTUFBVSxDQUEzQixXQUFXLEVBQUMsQ0FBRyxNQUFhLE1BQUEsQ0FBWCxVQUFVO29CQUM5QyxDQUFDO29CQUVELE1BQU0sQ0FBQyxXQUFXO2dCQUNwQixDQUFDLEVBQUUsSUFBSSxHQUNQLE1BQU0sR0FBSSxDQUFFLElBQWMsTUFBRSxDQUFkLFdBQVcsRUFBQyxDQUFFO2dCQUVsQyxNQUFNLENBQUMsTUFBTTtZQUNmLENBQUM7OztZQUVELEdBQUssRUFBTCxDQUFLO21CQUFMLFFBQVEsQ0FBUixLQUFLLEdBQUcsQ0FBQztnQkFBQyxNQUFNLHNCQTVDRyxpQkFBaUIsYUE0Q2IsQ0FBSyxRQUFYLElBQUssYUFBTyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsS0FBSztZQUFHLENBQUM7Ozs7WUFFdkQsR0FBUyxFQUFULENBQVM7bUJBQWhCLFFBQVEsQ0FBRCxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ3ZCLEdBQUssQ0FBQyx1QkFBdUIsT0FqRFEsTUFBMEIscUJBaURaLEtBQUs7Z0JBRXhELEtBQUssR0FBRyx1QkFBdUIsQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRXJDLEdBQUssQ0FBQyxTQUFTLE9BckRzQixNQUEwQixPQXFEeEMsS0FBSztnQkFFNUIsS0FBSyxHQUFHLFNBQVMsQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRXZCLEdBQUssQ0FBQyxTQUFTLEdBQUcsS0FBSyxFQUNqQixLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQVAsSUFBSSxFQUFLLENBQUM7b0JBQzNCLEdBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTO29CQUV4QyxNQUFNLENBQUMsSUFBSTtnQkFDYixDQUFDLEdBQ0QsaUJBQWlCLEdBQUcsR0FBRyxDQUFDLGlCQUFpQixDQUFDLEtBQUs7Z0JBRXJELE1BQU0sQ0FBQyxpQkFBaUI7WUFDMUIsQ0FBQzs7O1dBaEVrQixpQkFBaUI7RUFMVixZQUF3QjtrQkFLL0IsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvbm9uVGVybWluYWxcIjtcblxuaW1wb3J0IHsgQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlIH0gZnJvbSBcIi4uLy4uL3BhcnRUeXBlc1wiO1xuaW1wb3J0IHsgZXZlbiwgYWxsQnV0Rmlyc3RBbmRMYXN0IH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaG9pY2VPZlBhcnRzUGFydCBleHRlbmRzIE5vblRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzKSB7XG4gICAgY29uc3QgdHlwZSA9IENob2ljZU9mUGFydHNQYXJ0VHlwZTsgLy8vXG5cbiAgICBzdXBlcih0eXBlKTtcbiAgICBcbiAgICB0aGlzLnBhcnRzID0gcGFydHM7XG4gIH1cbiAgXG4gIGdldFBhcnRzKCkge1xuICAgIHJldHVybiB0aGlzLnBhcnRzO1xuICB9XG5cbiAgcGFyc2Uobm9kZXMsIGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIHRoaXMucGFydHMuc29tZSgocGFydCkgPT4ge1xuICAgICAgcGFyc2VkID0gcGFydC5wYXJzZShub2RlcywgY29udGV4dCwgY2FsbGJhY2spO1xuXG4gICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHBhcnRzU3RyaW5nID0gdGhpcy5wYXJ0cy5yZWR1Y2UoKHBhcnRzU3RyaW5nLCBwYXJ0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0U3RyaW5nID0gcGFydC5hc1N0cmluZygpO1xuICAgIFxuICAgICAgICAgICAgaWYgKHBhcnRzU3RyaW5nID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gcGFydFN0cmluZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gYCR7cGFydHNTdHJpbmd9IHwgJHtwYXJ0U3RyaW5nfWA7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICByZXR1cm4gcGFydHNTdHJpbmc7XG4gICAgICAgICAgfSwgbnVsbCksXG4gICAgICAgICAgc3RyaW5nID0gYCggJHtwYXJ0c1N0cmluZ30gKWA7XG4gICAgXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUoQ2hvaWNlT2ZQYXJ0c1BhcnQsIHRoaXMucGFydHMpOyB9XG5cbiAgc3RhdGljIGZyb21Ob2Rlcyhub2Rlcykge1xuICAgIGNvbnN0IGFsbEJ1dEZpcnN0QW5kTGFzdE5vZGVzID0gYWxsQnV0Rmlyc3RBbmRMYXN0KG5vZGVzKTtcblxuICAgIG5vZGVzID0gYWxsQnV0Rmlyc3RBbmRMYXN0Tm9kZXM7ICAvLy9cbiAgICBcbiAgICBjb25zdCBldmVuTm9kZXMgPSBldmVuKG5vZGVzKTtcblxuICAgIG5vZGVzID0gZXZlbk5vZGVzOyAgLy8vXG5cbiAgICBjb25zdCBsb29rQWhlYWQgPSBmYWxzZSxcbiAgICAgICAgICBwYXJ0cyA9IG5vZGVzLm1hcCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFydCA9IG5vZGUuZ2VuZXJhdGVQYXJ0KGxvb2tBaGVhZCk7XG5cbiAgICAgICAgICAgIHJldHVybiBwYXJ0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNob2ljZU9mUGFydHNQYXJ0ID0gbmV3IENob2ljZU9mUGFydHNQYXJ0KHBhcnRzKTtcblxuICAgIHJldHVybiBjaG9pY2VPZlBhcnRzUGFydDtcbiAgfVxufVxuIl19