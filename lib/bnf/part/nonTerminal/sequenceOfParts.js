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
                    var index = 0, partsLength = this.parts.length;
                    var parseParts = (function(nodes, index) {
                        var parsed;
                        if (index === partsLength) {
                            parsed = callback();
                        } else {
                            var part = this.parts[index++];
                            parsed = parsePart(part, nodes, index);
                        }
                        return parsed;
                    }).bind(this);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ibmYvcGFydC9ub25UZXJtaW5hbC9zZXF1ZW5jZU9mUGFydHMuanMiXSwibmFtZXMiOlsiTm9uVGVybWluYWxQYXJ0IiwicHVzaCIsImFsbEJ1dEZpcnN0QW5kTGFzdCIsIlNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlIiwiU2VxdWVuY2VPZlBhcnRzUGFydCIsImNvbnN0cnVjdG9yIiwicGFydHMiLCJ0eXBlIiwiZ2V0UGFydHMiLCJwYXJzZSIsIm5vZGVzIiwiY29udGV4dCIsImNhbGxiYWNrIiwicGFyc2VkIiwic2F2ZWRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJwYXJ0c05vZGVzIiwiaW5kZXgiLCJwYXJ0c0xlbmd0aCIsImxlbmd0aCIsInBhcnNlUGFydHMiLCJwYXJ0IiwicGFyc2VQYXJ0IiwiZXZlcnkiLCJiYWNrdHJhY2siLCJhc1N0cmluZyIsInBhcnRzU3RyaW5nIiwicmVkdWNlIiwicGFydFN0cmluZyIsInN0cmluZyIsImNsb25lIiwiZnJvbU5vZGVzIiwiYWxsQnV0Rmlyc3RBbmRMYXN0Tm9kZXMiLCJsb29rQWhlYWQiLCJtYXAiLCJub2RlIiwiZ2VuZXJhdGVQYXJ0Iiwic2VxdWVuY2VPZlBhcnRzUGFydCJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFZ0IsR0FBd0IsQ0FBeEIsWUFBd0I7QUFFL0IsR0FBMEIsQ0FBMUIsTUFBMEI7QUFFUCxHQUFpQixDQUFqQixVQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcEMsbUJBQW1CLGlCQUF6QixRQUFRO2NBQUYsbUJBQW1CO2FBQW5CLG1CQUFtQixDQUMxQixLQUFLOzhCQURFLG1CQUFtQjs7UUFFcEMsR0FBSyxDQUFDLElBQUksR0FKMEIsVUFBaUIseUJBSWYsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2lFQUZ4QixtQkFBbUIs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QUFXLE1BQXFCLE1BQVUsQ0FBekIsV0FBVyxHQUFDLENBQUMsR0FBYSxNQUFBLENBQVgsVUFBVTtvQkFDNUMsQ0FBQztvQkFFRCxNQUFNLENBQUMsV0FBVztnQkFDcEIsQ0FBQyxFQUFFLElBQUksR0FDUCxNQUFNLElBQUksRUFBRSxFQUFjLE1BQUUsQ0FBZCxXQUFXLEdBQUMsRUFBRTtnQkFFbEMsTUFBTSxDQUFDLE1BQU07WUFDZixDQUFDOzs7WUFFRCxHQUFLLEdBQUwsS0FBSzttQkFBTCxRQUFRLENBQVIsS0FBSyxHQUFHLENBQUM7Z0JBQUMsTUFBTSxzQkExRkcsbUJBQW1CLGNBMEZmLEtBQUssR0FBWCxJQUFLLGFBQU8sbUJBQW1CLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFBRyxDQUFDOzs7O1lBRXpELEdBQVMsR0FBVCxTQUFTO21CQUFoQixRQUFRLENBQUQsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUN2QixHQUFLLENBQUMsdUJBQXVCLE9BakdaLE1BQTBCLHFCQWlHUSxLQUFLO2dCQUV4RCxLQUFLLEdBQUcsdUJBQXVCLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUVyQyxHQUFLLENBQUMsU0FBUyxHQUFHLEtBQUssRUFDakIsS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFQLElBQUksRUFBSyxDQUFDO29CQUMzQixHQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUztvQkFFeEMsTUFBTSxDQUFDLElBQUk7Z0JBQ2IsQ0FBQyxHQUNELG1CQUFtQixHQUFHLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLO2dCQUV6RCxNQUFNLENBQUMsbUJBQW1CO1lBQzVCLENBQUM7OztXQTFHa0IsbUJBQW1CO0VBTlosWUFBd0I7a0JBTS9CLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxQYXJ0IGZyb20gXCIuLi8uLi9wYXJ0L25vblRlcm1pbmFsXCI7XG5cbmltcG9ydCB7IHB1c2ggfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBhbGxCdXRGaXJzdEFuZExhc3QgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZSB9IGZyb20gXCIuLi8uLi9wYXJ0VHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VxdWVuY2VPZlBhcnRzUGFydCBleHRlbmRzIE5vblRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzKSB7XG4gICAgY29uc3QgdHlwZSA9IFNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlOyAvLy9cblxuICAgIHN1cGVyKHR5cGUpO1xuXG4gICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xuICB9XG5cbiAgZ2V0UGFydHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFydHM7XG4gIH1cblxuICBwYXJzZShub2RlcywgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgY29uc3Qgc2F2ZWRJbmRleCA9IGNvbnRleHQuZ2V0U2F2ZWRJbmRleCgpLFxuICAgICAgICAgIHBhcnRzTm9kZXMgPSBbXTtcblxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgY29uc3QgaW5kZXggPSAwLFxuICAgICAgICAgICAgcGFydHNMZW5ndGggPSB0aGlzLnBhcnRzLmxlbmd0aDtcblxuICAgICAgY29uc3QgcGFyc2VQYXJ0cyA9IChub2RlcywgaW5kZXgpID0+IHtcbiAgICAgICAgbGV0IHBhcnNlZDtcblxuICAgICAgICBpZiAoaW5kZXggPT09IHBhcnRzTGVuZ3RoKSB7XG4gICAgICAgICAgcGFyc2VkID0gY2FsbGJhY2soKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBwYXJ0ID0gdGhpcy5wYXJ0c1tpbmRleCsrXTtcblxuICAgICAgICAgIHBhcnNlZCA9IHBhcnNlUGFydChwYXJ0LCBub2RlcywgaW5kZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFyc2VQYXJ0ID0gKHBhcnQsIG5vZGVzLCBpbmRleCkgPT4ge1xuICAgICAgICBsZXQgcGFyc2VkO1xuXG4gICAgICAgIGNvbnN0IHBhcnRzTm9kZXMgPSBbXTtcblxuICAgICAgICBwYXJzZWQgPSBwYXJ0LnBhcnNlKG5vZGVzLCBjb250ZXh0LCAoKSA9PiBwYXJzZVBhcnRzKHBhcnRzTm9kZXMsIGluZGV4KSk7XG5cbiAgICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICAgIHB1c2gobm9kZXMsIHBhcnRzTm9kZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICAgIH1cblxuICAgICAgcGFyc2VkID0gcGFyc2VQYXJ0cyhwYXJ0c05vZGVzLCBpbmRleCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGFydHMuZXZlcnkoKHBhcnQpID0+IHtcbiAgICAgICAgcGFyc2VkID0gcGFydC5wYXJzZShwYXJ0c05vZGVzLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIHB1c2gobm9kZXMsIHBhcnRzTm9kZXMpO1xuICAgIH1cblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBjb250ZXh0LmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcGFydHNTdHJpbmcgPSB0aGlzLnBhcnRzLnJlZHVjZSgocGFydHNTdHJpbmcsIHBhcnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnRTdHJpbmcgPSBwYXJ0LmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGlmIChwYXJ0c1N0cmluZyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICBwYXJ0c1N0cmluZyA9IHBhcnRTdHJpbmc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwYXJ0c1N0cmluZyA9IGAke3BhcnRzU3RyaW5nfSAke3BhcnRTdHJpbmd9YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHBhcnRzU3RyaW5nO1xuICAgICAgICAgIH0sIG51bGwpLFxuICAgICAgICAgIHN0cmluZyA9IGAoICR7cGFydHNTdHJpbmd9IClgO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUoU2VxdWVuY2VPZlBhcnRzUGFydCwgdGhpcy5wYXJ0cyk7IH1cblxuICBzdGF0aWMgZnJvbU5vZGVzKG5vZGVzKSB7XG4gICAgY29uc3QgYWxsQnV0Rmlyc3RBbmRMYXN0Tm9kZXMgPSBhbGxCdXRGaXJzdEFuZExhc3Qobm9kZXMpO1xuXG4gICAgbm9kZXMgPSBhbGxCdXRGaXJzdEFuZExhc3ROb2RlczsgIC8vL1xuXG4gICAgY29uc3QgbG9va0FoZWFkID0gZmFsc2UsXG4gICAgICAgICAgcGFydHMgPSBub2Rlcy5tYXAoKG5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnQgPSBub2RlLmdlbmVyYXRlUGFydChsb29rQWhlYWQpO1xuXG4gICAgICAgICAgICByZXR1cm4gcGFydDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gbmV3IFNlcXVlbmNlT2ZQYXJ0c1BhcnQocGFydHMpO1xuXG4gICAgcmV0dXJuIHNlcXVlbmNlT2ZQYXJ0c1BhcnQ7XG4gIH1cbn1cbiJdfQ==