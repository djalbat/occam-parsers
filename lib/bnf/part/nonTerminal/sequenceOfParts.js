"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _nonTerminal = _interopRequireDefault(require("../../part/nonTerminal"));
var _array = require("../../../utilities/array");
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
var SequenceOfPartsPart = /*#__PURE__*/ function(NonTerminalPart) {
    _inherits(SequenceOfPartsPart, NonTerminalPart);
    function SequenceOfPartsPart(parts) {
        _classCallCheck(this, SequenceOfPartsPart);
        var _this;
        var type = _partTypes.SequenceOfPartsPartType; ///
        _this = _possibleConstructorReturn(this, _getPrototypeOf(SequenceOfPartsPart).call(this, type));
        _this.parts = parts;
        return _this;
    }
    _createClass(SequenceOfPartsPart, [
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
                var savedIndex = context.getSavedIndex(), partsNodes = [];
                if (callback) {
                    var _this = this;
                    var index = 0, partsLength = this.parts.length;
                    var parseParts = function(nodes, index) {
                        var parsed1;
                        if (index === partsLength) {
                            parsed1 = callback();
                        } else {
                            var part = _this.parts[index++];
                            parsed1 = parsePart(part, nodes, index);
                        }
                        return parsed1;
                    };
                    var parsePart = function(part, nodes, index) {
                        var parsed1;
                        var partsNodes = [];
                        parsed1 = part.parse(nodes, context, function() {
                            return parseParts(partsNodes, index);
                        });
                        if (parsed1) {
                            (0, _array).push(nodes, partsNodes);
                        }
                        return parsed1;
                    };
                    parsed = parseParts(partsNodes, index);
                } else {
                    this.parts.every(function(part) {
                        parsed = part.parse(partsNodes, context);
                        if (parsed) {
                            return true;
                        }
                    });
                }
                if (parsed) {
                    (0, _array).push(nodes, partsNodes);
                }
                if (!parsed) {
                    context.backtrack(savedIndex);
                }
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
                        partsString = "".concat(partsString, " ").concat(partString);
                    }
                    return partsString;
                }, null), string = "( ".concat(partsString, " )");
                return string;
            }
        },
        {
            key: "clone",
            value: function clone() {
                return _get(_getPrototypeOf(SequenceOfPartsPart.prototype), "clone", this).call(this, SequenceOfPartsPart, this.parts);
            }
        }
    ], [
        {
            key: "fromNodes",
            value: function fromNodes(nodes) {
                var allButFirstAndLastNodes = (0, _array).allButFirstAndLast(nodes);
                nodes = allButFirstAndLastNodes; ///
                var lookAhead = false, parts = nodes.map(function(node) {
                    var part = node.generatePart(lookAhead);
                    return part;
                }), sequenceOfPartsPart = new SequenceOfPartsPart(parts);
                return sequenceOfPartsPart;
            }
        }
    ]);
    return SequenceOfPartsPart;
}(_nonTerminal.default);
exports.default = SequenceOfPartsPart;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ibmYvcGFydC9ub25UZXJtaW5hbC9zZXF1ZW5jZU9mUGFydHMuanMiXSwibmFtZXMiOlsiTm9uVGVybWluYWxQYXJ0IiwicHVzaCIsImFsbEJ1dEZpcnN0QW5kTGFzdCIsIlNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlIiwiU2VxdWVuY2VPZlBhcnRzUGFydCIsImNvbnN0cnVjdG9yIiwicGFydHMiLCJ0eXBlIiwiZ2V0UGFydHMiLCJwYXJzZSIsIm5vZGVzIiwiY29udGV4dCIsImNhbGxiYWNrIiwicGFyc2VkIiwic2F2ZWRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJwYXJ0c05vZGVzIiwiaW5kZXgiLCJwYXJ0c0xlbmd0aCIsImxlbmd0aCIsInBhcnNlUGFydHMiLCJwYXJ0IiwicGFyc2VQYXJ0IiwiZXZlcnkiLCJiYWNrdHJhY2siLCJhc1N0cmluZyIsInBhcnRzU3RyaW5nIiwicmVkdWNlIiwicGFydFN0cmluZyIsInN0cmluZyIsImNsb25lIiwiZnJvbU5vZGVzIiwiYWxsQnV0Rmlyc3RBbmRMYXN0Tm9kZXMiLCJsb29rQWhlYWQiLCJtYXAiLCJub2RlIiwiZ2VuZXJhdGVQYXJ0Iiwic2VxdWVuY2VPZlBhcnRzUGFydCJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFZ0IsR0FBd0IsQ0FBeEIsWUFBd0I7QUFFL0IsR0FBMEIsQ0FBMUIsTUFBMEI7QUFFUCxHQUFpQixDQUFqQixVQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcEMsbUJBQW1CLGlCQUF6QixRQUFRO2NBQUYsbUJBQW1CO2FBQW5CLG1CQUFtQixDQUMxQixLQUFLOzhCQURFLG1CQUFtQjs7UUFFcEMsR0FBSyxDQUFDLElBQUksR0FKMEIsVUFBaUIseUJBSWYsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2lFQUZ4QixtQkFBbUIs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Q0FBQSxFQUFpQixNQUFVLENBQXpCLFdBQVcsRUFBQyxDQUFDLElBQWEsTUFBQSxDQUFYLFVBQVU7b0JBQzVDLENBQUM7b0JBRUQsTUFBTSxDQUFDLFdBQVc7Z0JBQ3BCLENBQUMsRUFBRSxJQUFJLEdBQ1AsTUFBTSxHQUFJLENBQUUsSUFBYyxNQUFFLENBQWQsV0FBVyxFQUFDLENBQUU7Z0JBRWxDLE1BQU0sQ0FBQyxNQUFNO1lBQ2YsQ0FBQzs7O1lBRUQsR0FBSyxFQUFMLENBQUs7bUJBQUwsUUFBUSxDQUFSLEtBQUssR0FBRyxDQUFDO2dCQUFDLE1BQU0sc0JBMUZHLG1CQUFtQixhQTBGZixDQUFLLFFBQVgsSUFBSyxhQUFPLG1CQUFtQixFQUFFLElBQUksQ0FBQyxLQUFLO1lBQUcsQ0FBQzs7OztZQUV6RCxHQUFTLEVBQVQsQ0FBUzttQkFBaEIsUUFBUSxDQUFELFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDdkIsR0FBSyxDQUFDLHVCQUF1QixPQWpHWixNQUEwQixxQkFpR1EsS0FBSztnQkFFeEQsS0FBSyxHQUFHLHVCQUF1QixDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFckMsR0FBSyxDQUFDLFNBQVMsR0FBRyxLQUFLLEVBQ2pCLEtBQUssR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBUCxJQUFJLEVBQUssQ0FBQztvQkFDM0IsR0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7b0JBRXhDLE1BQU0sQ0FBQyxJQUFJO2dCQUNiLENBQUMsR0FDRCxtQkFBbUIsR0FBRyxHQUFHLENBQUMsbUJBQW1CLENBQUMsS0FBSztnQkFFekQsTUFBTSxDQUFDLG1CQUFtQjtZQUM1QixDQUFDOzs7V0ExR2tCLG1CQUFtQjtFQU5aLFlBQXdCO2tCQU0vQixtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsUGFydCBmcm9tIFwiLi4vLi4vcGFydC9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgYWxsQnV0Rmlyc3RBbmRMYXN0IH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgU2VxdWVuY2VPZlBhcnRzUGFydFR5cGUgfSBmcm9tIFwiLi4vLi4vcGFydFR5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlcXVlbmNlT2ZQYXJ0c1BhcnQgZXh0ZW5kcyBOb25UZXJtaW5hbFBhcnQge1xuICBjb25zdHJ1Y3RvcihwYXJ0cykge1xuICAgIGNvbnN0IHR5cGUgPSBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZTsgLy8vXG5cbiAgICBzdXBlcih0eXBlKTtcblxuICAgIHRoaXMucGFydHMgPSBwYXJ0cztcbiAgfVxuXG4gIGdldFBhcnRzKCkge1xuICAgIHJldHVybiB0aGlzLnBhcnRzO1xuICB9XG5cbiAgcGFyc2Uobm9kZXMsIGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBjb250ZXh0LmdldFNhdmVkSW5kZXgoKSxcbiAgICAgICAgICBwYXJ0c05vZGVzID0gW107XG5cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gMCxcbiAgICAgICAgICAgIHBhcnRzTGVuZ3RoID0gdGhpcy5wYXJ0cy5sZW5ndGg7XG5cbiAgICAgIGNvbnN0IHBhcnNlUGFydHMgPSAobm9kZXMsIGluZGV4KSA9PiB7XG4gICAgICAgIGxldCBwYXJzZWQ7XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSBwYXJ0c0xlbmd0aCkge1xuICAgICAgICAgIHBhcnNlZCA9IGNhbGxiYWNrKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgcGFydCA9IHRoaXMucGFydHNbaW5kZXgrK107XG5cbiAgICAgICAgICBwYXJzZWQgPSBwYXJzZVBhcnQocGFydCwgbm9kZXMsIGluZGV4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcnNlUGFydCA9IChwYXJ0LCBub2RlcywgaW5kZXgpID0+IHtcbiAgICAgICAgbGV0IHBhcnNlZDtcblxuICAgICAgICBjb25zdCBwYXJ0c05vZGVzID0gW107XG5cbiAgICAgICAgcGFyc2VkID0gcGFydC5wYXJzZShub2RlcywgY29udGV4dCwgKCkgPT4gcGFyc2VQYXJ0cyhwYXJ0c05vZGVzLCBpbmRleCkpO1xuXG4gICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICBwdXNoKG5vZGVzLCBwYXJ0c05vZGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgICB9XG5cbiAgICAgIHBhcnNlZCA9IHBhcnNlUGFydHMocGFydHNOb2RlcywgaW5kZXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBhcnRzLmV2ZXJ5KChwYXJ0KSA9PiB7XG4gICAgICAgIHBhcnNlZCA9IHBhcnQucGFyc2UocGFydHNOb2RlcywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocGFyc2VkKSB7XG4gICAgICBwdXNoKG5vZGVzLCBwYXJ0c05vZGVzKTtcbiAgICB9XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgY29udGV4dC5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHBhcnRzU3RyaW5nID0gdGhpcy5wYXJ0cy5yZWR1Y2UoKHBhcnRzU3RyaW5nLCBwYXJ0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0U3RyaW5nID0gcGFydC5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICBpZiAocGFydHNTdHJpbmcgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBwYXJ0U3RyaW5nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBgJHtwYXJ0c1N0cmluZ30gJHtwYXJ0U3RyaW5nfWA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBwYXJ0c1N0cmluZztcbiAgICAgICAgICB9LCBudWxsKSxcbiAgICAgICAgICBzdHJpbmcgPSBgKCAke3BhcnRzU3RyaW5nfSApYDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKFNlcXVlbmNlT2ZQYXJ0c1BhcnQsIHRoaXMucGFydHMpOyB9XG5cbiAgc3RhdGljIGZyb21Ob2Rlcyhub2Rlcykge1xuICAgIGNvbnN0IGFsbEJ1dEZpcnN0QW5kTGFzdE5vZGVzID0gYWxsQnV0Rmlyc3RBbmRMYXN0KG5vZGVzKTtcblxuICAgIG5vZGVzID0gYWxsQnV0Rmlyc3RBbmRMYXN0Tm9kZXM7ICAvLy9cblxuICAgIGNvbnN0IGxvb2tBaGVhZCA9IGZhbHNlLFxuICAgICAgICAgIHBhcnRzID0gbm9kZXMubWFwKChub2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0ID0gbm9kZS5nZW5lcmF0ZVBhcnQobG9va0FoZWFkKTtcblxuICAgICAgICAgICAgcmV0dXJuIHBhcnQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgc2VxdWVuY2VPZlBhcnRzUGFydCA9IG5ldyBTZXF1ZW5jZU9mUGFydHNQYXJ0KHBhcnRzKTtcblxuICAgIHJldHVybiBzZXF1ZW5jZU9mUGFydHNQYXJ0O1xuICB9XG59XG4iXX0=