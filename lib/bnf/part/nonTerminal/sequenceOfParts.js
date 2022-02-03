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
var SequenceOfPartsPart = /*#__PURE__*/ function(NonTerminalPart) {
    _inherits(SequenceOfPartsPart, NonTerminalPart);
    var _super = _createSuper(SequenceOfPartsPart);
    function SequenceOfPartsPart(parts) {
        _classCallCheck(this, SequenceOfPartsPart);
        var _this;
        var type = _partTypes.SequenceOfPartsPartType; ///
        _this = _super.call(this, type);
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
            value: function parse(nodes1, context, callback) {
                var parsed1;
                var savedIndex = context.getSavedIndex(), partsNodes1 = [];
                if (callback) {
                    var _this = this;
                    var index1 = 0, partsLength = this.parts.length;
                    var parseParts = function(nodes, index) {
                        var parsed;
                        if (index === partsLength) {
                            parsed = callback();
                        } else {
                            var part = _this.parts[index++];
                            parsed = parsePart(part, nodes, index);
                        }
                        return parsed;
                    };
                    var parsePart = function(part, nodes, index) {
                        var parsed;
                        var partsNodes = [];
                        parsed = part.parse(nodes, context, function() {
                            return parseParts(partsNodes, index);
                        });
                        if (parsed) {
                            (0, _array).push(nodes, partsNodes);
                        }
                        return parsed;
                    };
                    parsed1 = parseParts(partsNodes1, index1);
                } else {
                    this.parts.every(function(part) {
                        parsed1 = part.parse(partsNodes1, context);
                        if (parsed1) {
                            return true;
                        }
                    });
                }
                if (parsed1) {
                    (0, _array).push(nodes1, partsNodes1);
                }
                if (!parsed1) {
                    context.backtrack(savedIndex);
                }
                return parsed1;
            }
        },
        {
            key: "asString",
            value: function asString() {
                var partsString1 = this.parts.reduce(function(partsString, part) {
                    var partString = part.asString();
                    if (partsString === null) {
                        partsString = partString;
                    } else {
                        partsString = "".concat(partsString, " ").concat(partString);
                    }
                    return partsString;
                }, null), string = "( ".concat(partsString1, " )");
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ibmYvcGFydC9ub25UZXJtaW5hbC9zZXF1ZW5jZU9mUGFydHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvbm9uVGVybWluYWxcIjtcblxuaW1wb3J0IHsgcHVzaCB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGFsbEJ1dEZpcnN0QW5kTGFzdCB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IFNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlIH0gZnJvbSBcIi4uLy4uL3BhcnRUeXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXF1ZW5jZU9mUGFydHNQYXJ0IGV4dGVuZHMgTm9uVGVybWluYWxQYXJ0IHtcbiAgY29uc3RydWN0b3IocGFydHMpIHtcbiAgICBjb25zdCB0eXBlID0gU2VxdWVuY2VPZlBhcnRzUGFydFR5cGU7IC8vL1xuXG4gICAgc3VwZXIodHlwZSk7XG5cbiAgICB0aGlzLnBhcnRzID0gcGFydHM7XG4gIH1cblxuICBnZXRQYXJ0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0cztcbiAgfVxuXG4gIHBhcnNlKG5vZGVzLCBjb250ZXh0LCBjYWxsYmFjaykge1xuICAgIGxldCBwYXJzZWQ7XG5cbiAgICBjb25zdCBzYXZlZEluZGV4ID0gY29udGV4dC5nZXRTYXZlZEluZGV4KCksXG4gICAgICAgICAgcGFydHNOb2RlcyA9IFtdO1xuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjb25zdCBpbmRleCA9IDAsXG4gICAgICAgICAgICBwYXJ0c0xlbmd0aCA9IHRoaXMucGFydHMubGVuZ3RoO1xuXG4gICAgICBjb25zdCBwYXJzZVBhcnRzID0gKG5vZGVzLCBpbmRleCkgPT4ge1xuICAgICAgICBsZXQgcGFyc2VkO1xuXG4gICAgICAgIGlmIChpbmRleCA9PT0gcGFydHNMZW5ndGgpIHtcbiAgICAgICAgICBwYXJzZWQgPSBjYWxsYmFjaygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHBhcnQgPSB0aGlzLnBhcnRzW2luZGV4KytdO1xuXG4gICAgICAgICAgcGFyc2VkID0gcGFyc2VQYXJ0KHBhcnQsIG5vZGVzLCBpbmRleCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJzZVBhcnQgPSAocGFydCwgbm9kZXMsIGluZGV4KSA9PiB7XG4gICAgICAgIGxldCBwYXJzZWQ7XG5cbiAgICAgICAgY29uc3QgcGFydHNOb2RlcyA9IFtdO1xuXG4gICAgICAgIHBhcnNlZCA9IHBhcnQucGFyc2Uobm9kZXMsIGNvbnRleHQsICgpID0+IHBhcnNlUGFydHMocGFydHNOb2RlcywgaW5kZXgpKTtcblxuICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgcHVzaChub2RlcywgcGFydHNOb2Rlcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgfVxuXG4gICAgICBwYXJzZWQgPSBwYXJzZVBhcnRzKHBhcnRzTm9kZXMsIGluZGV4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wYXJ0cy5ldmVyeSgocGFydCkgPT4ge1xuICAgICAgICBwYXJzZWQgPSBwYXJ0LnBhcnNlKHBhcnRzTm9kZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgcHVzaChub2RlcywgcGFydHNOb2Rlcyk7XG4gICAgfVxuXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIGNvbnRleHQuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBwYXJ0c1N0cmluZyA9IHRoaXMucGFydHMucmVkdWNlKChwYXJ0c1N0cmluZywgcGFydCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFydFN0cmluZyA9IHBhcnQuYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgaWYgKHBhcnRzU3RyaW5nID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gcGFydFN0cmluZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gYCR7cGFydHNTdHJpbmd9ICR7cGFydFN0cmluZ31gO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcGFydHNTdHJpbmc7XG4gICAgICAgICAgfSwgbnVsbCksXG4gICAgICAgICAgc3RyaW5nID0gYCggJHtwYXJ0c1N0cmluZ30gKWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZShTZXF1ZW5jZU9mUGFydHNQYXJ0LCB0aGlzLnBhcnRzKTsgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXMobm9kZXMpIHtcbiAgICBjb25zdCBhbGxCdXRGaXJzdEFuZExhc3ROb2RlcyA9IGFsbEJ1dEZpcnN0QW5kTGFzdChub2Rlcyk7XG5cbiAgICBub2RlcyA9IGFsbEJ1dEZpcnN0QW5kTGFzdE5vZGVzOyAgLy8vXG5cbiAgICBjb25zdCBsb29rQWhlYWQgPSBmYWxzZSxcbiAgICAgICAgICBwYXJ0cyA9IG5vZGVzLm1hcCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFydCA9IG5vZGUuZ2VuZXJhdGVQYXJ0KGxvb2tBaGVhZCk7XG5cbiAgICAgICAgICAgIHJldHVybiBwYXJ0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBuZXcgU2VxdWVuY2VPZlBhcnRzUGFydChwYXJ0cyk7XG5cbiAgICByZXR1cm4gc2VxdWVuY2VPZlBhcnRzUGFydDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJwYXJ0cyIsInR5cGUiLCJTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZSIsImdldFBhcnRzIiwicGFyc2UiLCJub2RlcyIsImNvbnRleHQiLCJjYWxsYmFjayIsInBhcnNlZCIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4IiwicGFydHNOb2RlcyIsImluZGV4IiwicGFydHNMZW5ndGgiLCJsZW5ndGgiLCJwYXJzZVBhcnRzIiwicGFydCIsInBhcnNlUGFydCIsInB1c2giLCJldmVyeSIsImJhY2t0cmFjayIsImFzU3RyaW5nIiwicGFydHNTdHJpbmciLCJyZWR1Y2UiLCJwYXJ0U3RyaW5nIiwic3RyaW5nIiwiY2xvbmUiLCJmcm9tTm9kZXMiLCJhbGxCdXRGaXJzdEFuZExhc3ROb2RlcyIsImFsbEJ1dEZpcnN0QW5kTGFzdCIsImxvb2tBaGVhZCIsIm1hcCIsIm5vZGUiLCJnZW5lcmF0ZVBhcnQiLCJzZXF1ZW5jZU9mUGFydHNQYXJ0IiwiTm9uVGVybWluYWxQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVnQixHQUF3QixDQUF4QixZQUF3QjtBQUUvQixHQUEwQixDQUExQixNQUEwQjtBQUVQLEdBQWlCLENBQWpCLFVBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcENBLG1CQUFtQixpQkFBekIsUUFBUTs7O2FBQUZBLG1CQUFtQixDQUMxQkMsS0FBSzs7O1FBQ2YsR0FBSyxDQUFDQyxJQUFJLEdBQUdDLFVBQXVCLHlCQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztrQ0FFbkNELElBQUk7Y0FFTEQsS0FBSyxHQUFHQSxLQUFLOzs7OztZQUdwQkcsR0FBUSxFQUFSQSxDQUFRO21CQUFSQSxRQUFRLENBQVJBLFFBQVEsR0FBRyxDQUFDO2dCQUNWLE1BQU0sQ0FBQyxJQUFJLENBQUNILEtBQUs7WUFDbkIsQ0FBQzs7O1lBRURJLEdBQUssRUFBTEEsQ0FBSzttQkFBTEEsUUFBUSxDQUFSQSxLQUFLLENBQUNDLE1BQUssRUFBRUMsT0FBTyxFQUFFQyxRQUFRLEVBQUUsQ0FBQztnQkFDL0IsR0FBRyxDQUFDQyxPQUFNO2dCQUVWLEdBQUssQ0FBQ0MsVUFBVSxHQUFHSCxPQUFPLENBQUNJLGFBQWEsSUFDbENDLFdBQVUsR0FBRyxDQUFDLENBQUM7Z0JBRXJCLEVBQUUsRUFBRUosUUFBUSxFQUFFLENBQUM7O29CQUNiLEdBQUssQ0FBQ0ssTUFBSyxHQUFHLENBQUMsRUFDVEMsV0FBVyxHQUFHLElBQUksQ0FBQ2IsS0FBSyxDQUFDYyxNQUFNO29CQUVyQyxHQUFLLENBQUNDLFVBQVUsR0FBRyxRQUFRSCxDQUFQUCxLQUFLLEVBQUVPLEtBQUssRUFBSyxDQUFDO3dCQUNwQyxHQUFHLENBQUNKLE1BQU07d0JBRVYsRUFBRSxFQUFFSSxLQUFLLEtBQUtDLFdBQVcsRUFBRSxDQUFDOzRCQUMxQkwsTUFBTSxHQUFHRCxRQUFRO3dCQUNuQixDQUFDLE1BQU0sQ0FBQzs0QkFDTixHQUFLLENBQUNTLElBQUksU0FBUWhCLEtBQUssQ0FBQ1ksS0FBSzs0QkFFN0JKLE1BQU0sR0FBR1MsU0FBUyxDQUFDRCxJQUFJLEVBQUVYLEtBQUssRUFBRU8sS0FBSzt3QkFDdkMsQ0FBQzt3QkFFRCxNQUFNLENBQUNKLE1BQU07b0JBQ2YsQ0FBQztvQkFFRCxHQUFLLENBQUNTLFNBQVMsR0FBRyxRQUFRLENBQVBELElBQUksRUFBRVgsS0FBSyxFQUFFTyxLQUFLLEVBQUssQ0FBQzt3QkFDekMsR0FBRyxDQUFDSixNQUFNO3dCQUVWLEdBQUssQ0FBQ0csVUFBVSxHQUFHLENBQUMsQ0FBQzt3QkFFckJILE1BQU0sR0FBR1EsSUFBSSxDQUFDWixLQUFLLENBQUNDLEtBQUssRUFBRUMsT0FBTyxFQUFFLFFBQVE7NEJBQUZTLE1BQU0sQ0FBTkEsVUFBVSxDQUFDSixVQUFVLEVBQUVDLEtBQUs7O3dCQUV0RSxFQUFFLEVBQUVKLE1BQU0sRUFBRSxDQUFDO2dDQUNYVSxNQUFJLE9BQUNiLEtBQUssRUFBRU0sVUFBVTt3QkFDeEIsQ0FBQzt3QkFFRCxNQUFNLENBQUNILE1BQU07b0JBQ2YsQ0FBQztvQkFFREEsT0FBTSxHQUFHTyxVQUFVLENBQUNKLFdBQVUsRUFBRUMsTUFBSztnQkFDdkMsQ0FBQyxNQUFNLENBQUM7b0JBQ04sSUFBSSxDQUFDWixLQUFLLENBQUNtQixLQUFLLENBQUMsUUFBUSxDQUFQSCxJQUFJLEVBQUssQ0FBQzt3QkFDMUJSLE9BQU0sR0FBR1EsSUFBSSxDQUFDWixLQUFLLENBQUNPLFdBQVUsRUFBRUwsT0FBTzt3QkFFdkMsRUFBRSxFQUFFRSxPQUFNLEVBQUUsQ0FBQzs0QkFDWCxNQUFNLENBQUMsSUFBSTt3QkFDYixDQUFDO29CQUNILENBQUM7Z0JBQ0gsQ0FBQztnQkFFRCxFQUFFLEVBQUVBLE9BQU0sRUFBRSxDQUFDO3dCQUNYVSxNQUFJLE9BQUNiLE1BQUssRUFBRU0sV0FBVTtnQkFDeEIsQ0FBQztnQkFFRCxFQUFFLEdBQUdILE9BQU0sRUFBRSxDQUFDO29CQUNaRixPQUFPLENBQUNjLFNBQVMsQ0FBQ1gsVUFBVTtnQkFDOUIsQ0FBQztnQkFFRCxNQUFNLENBQUNELE9BQU07WUFDZixDQUFDOzs7WUFFRGEsR0FBUSxFQUFSQSxDQUFRO21CQUFSQSxRQUFRLENBQVJBLFFBQVEsR0FBRyxDQUFDO2dCQUNWLEdBQUssQ0FBQ0MsWUFBVyxHQUFHLElBQUksQ0FBQ3RCLEtBQUssQ0FBQ3VCLE1BQU0sQ0FBQyxRQUFRLENBQVBELFdBQVcsRUFBRU4sSUFBSSxFQUFLLENBQUM7b0JBQ3RELEdBQUssQ0FBQ1EsVUFBVSxHQUFHUixJQUFJLENBQUNLLFFBQVE7b0JBRWhDLEVBQUUsRUFBRUMsV0FBVyxLQUFLLElBQUksRUFBRSxDQUFDO3dCQUN6QkEsV0FBVyxHQUFHRSxVQUFVO29CQUMxQixDQUFDLE1BQU0sQ0FBQzt3QkFDTkYsV0FBVyxHQUFJLENBQUEsRUFBaUJFLE1BQVUsQ0FBekJGLFdBQVcsRUFBQyxDQUFDLElBQWEsTUFBQSxDQUFYRSxVQUFVO29CQUM1QyxDQUFDO29CQUVELE1BQU0sQ0FBQ0YsV0FBVztnQkFDcEIsQ0FBQyxFQUFFLElBQUksR0FDUEcsTUFBTSxHQUFJLENBQUUsSUFBYyxNQUFFLENBQWRILFlBQVcsRUFBQyxDQUFFO2dCQUVsQyxNQUFNLENBQUNHLE1BQU07WUFDZixDQUFDOzs7WUFFREMsR0FBSyxFQUFMQSxDQUFLO21CQUFMQSxRQUFRLENBQVJBLEtBQUssR0FBRyxDQUFDO2dCQUFDLE1BQU0sc0JBMUZHM0IsbUJBQW1CLGFBMEZmMkIsQ0FBSyxRQUFYLElBQUssYUFBTzNCLG1CQUFtQixFQUFFLElBQUksQ0FBQ0MsS0FBSztZQUFHLENBQUM7Ozs7WUFFekQyQixHQUFTLEVBQVRBLENBQVM7bUJBQWhCLFFBQVEsQ0FBREEsU0FBUyxDQUFDdEIsS0FBSyxFQUFFLENBQUM7Z0JBQ3ZCLEdBQUssQ0FBQ3VCLHVCQUF1QixPQUFHQyxNQUFrQixxQkFBQ3hCLEtBQUs7Z0JBRXhEQSxLQUFLLEdBQUd1Qix1QkFBdUIsQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRXJDLEdBQUssQ0FBQ0UsU0FBUyxHQUFHLEtBQUssRUFDakI5QixLQUFLLEdBQUdLLEtBQUssQ0FBQzBCLEdBQUcsQ0FBQyxRQUFRLENBQVBDLElBQUksRUFBSyxDQUFDO29CQUMzQixHQUFLLENBQUNoQixJQUFJLEdBQUdnQixJQUFJLENBQUNDLFlBQVksQ0FBQ0gsU0FBUztvQkFFeEMsTUFBTSxDQUFDZCxJQUFJO2dCQUNiLENBQUMsR0FDRGtCLG1CQUFtQixHQUFHLEdBQUcsQ0FBQ25DLG1CQUFtQixDQUFDQyxLQUFLO2dCQUV6RCxNQUFNLENBQUNrQyxtQkFBbUI7WUFDNUIsQ0FBQzs7OztFQTFHOENDLFlBQWU7a0JBQTNDcEMsbUJBQW1CIn0=