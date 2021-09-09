"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
var _collectionOfParts = _interopRequireDefault(require("./collectionOfParts"));
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
var plus = _occamLexers.specialSymbols.plus;
var OneOrMorePartsPart = /*#__PURE__*/ function(CollectionOfPartsPart) {
    _inherits(OneOrMorePartsPart, CollectionOfPartsPart);
    function OneOrMorePartsPart(part) {
        _classCallCheck(this, OneOrMorePartsPart);
        var type = _partTypes.OneOrMorePartsPartType; ///
        return _possibleConstructorReturn(this, _getPrototypeOf(OneOrMorePartsPart).call(this, type, part));
    }
    _createClass(OneOrMorePartsPart, [
        {
            key: "parse",
            value: function parse(nodes, context, callback) {
                var parsed;
                var part = this.getPart(), savedIndex = context.getSavedIndex(), partsNodes = [];
                var count = 0;
                if (callback) {
                    var parsePart = function() {
                        var parsed = part.parse(partsNodes, context, function() {
                            var parsed = callback();
                            if (!parsed) {
                                parsed = parsePart();
                            }
                            return parsed;
                        });
                        if (parsed) {
                            count++;
                        }
                        return parsed;
                    };
                    parsePart();
                } else {
                    for(;;){
                        var parsed = part.parse(partsNodes, context);
                        if (!parsed) {
                            break;
                        }
                        count++;
                    }
                }
                parsed = count !== 0;
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
                var operatorString = plus, string = _get(_getPrototypeOf(OneOrMorePartsPart.prototype), "asString", this).call(this, operatorString);
                return string;
            }
        },
        {
            key: "clone",
            value: function clone() {
                return _get(_getPrototypeOf(OneOrMorePartsPart.prototype), "clone", this).call(this, OneOrMorePartsPart);
            }
        }
    ]);
    return OneOrMorePartsPart;
}(_collectionOfParts.default);
exports.default = OneOrMorePartsPart;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ibmYvcGFydC9ub25UZXJtaW5hbC9vbmVPck1vcmVQYXJ0cy5qcyJdLCJuYW1lcyI6WyJzcGVjaWFsU3ltYm9scyIsIkNvbGxlY3Rpb25PZlBhcnRzUGFydCIsInB1c2giLCJPbmVPck1vcmVQYXJ0c1BhcnRUeXBlIiwicGx1cyIsIk9uZU9yTW9yZVBhcnRzUGFydCIsImNvbnN0cnVjdG9yIiwicGFydCIsInR5cGUiLCJwYXJzZSIsIm5vZGVzIiwiY29udGV4dCIsImNhbGxiYWNrIiwicGFyc2VkIiwiZ2V0UGFydCIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4IiwicGFydHNOb2RlcyIsImNvdW50IiwicGFyc2VQYXJ0IiwiYmFja3RyYWNrIiwiYXNTdHJpbmciLCJvcGVyYXRvclN0cmluZyIsInN0cmluZyIsImNsb25lIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVtQixHQUFjLENBQWQsWUFBYztBQUVYLEdBQXFCLENBQXJCLGtCQUFxQjtBQUVsQyxHQUEwQixDQUExQixNQUEwQjtBQUNSLEdBQWlCLENBQWpCLFVBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4RCxHQUFLLENBQUcsSUFBSSxHQVBtQixZQUFjLGdCQU9yQyxJQUFJO0lBRVMsa0JBQWtCLGlCQUF4QixRQUFRO2NBQUYsa0JBQWtCO2FBQWxCLGtCQUFrQixDQUN6QixJQUFJOzhCQURHLGtCQUFrQjtRQUVuQyxHQUFLLENBQUMsSUFBSSxHQU55QixVQUFpQix3QkFNZixDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0VBRnZCLGtCQUFrQixhQUk3QixJQUFJLEVBQUUsSUFBSTs7aUJBSkMsa0JBQWtCOztZQU9yQyxHQUFLLEdBQUwsS0FBSzttQkFBTCxRQUFRLENBQVIsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUM7Z0JBQy9CLEdBQUcsQ0FBQyxNQUFNO2dCQUVWLEdBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFDbkIsVUFBVSxHQUFHLE9BQU8sQ0FBQyxhQUFhLElBQ2xDLFVBQVUsR0FBRyxDQUFDLENBQUM7Z0JBRXJCLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQztnQkFFYixFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUM7b0JBQ2IsR0FBSyxDQUFDLFNBQVMsR0FBRyxRQUN4QixHQUQ4QixDQUFDO3dCQUN2QixHQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxRQUN2RCxHQUQ2RCxDQUFDOzRCQUNwRCxHQUFHLENBQUMsTUFBTSxHQUFHLFFBQVE7NEJBRXJCLEVBQUUsR0FBRyxNQUFNLEVBQUUsQ0FBQztnQ0FDWixNQUFNLEdBQUcsU0FBUzs0QkFDcEIsQ0FBQzs0QkFFRCxNQUFNLENBQUMsTUFBTTt3QkFDZixDQUFDO3dCQUVELEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQzs0QkFDWCxLQUFLO3dCQUNQLENBQUM7d0JBRUQsTUFBTSxDQUFDLE1BQU07b0JBQ2YsQ0FBQztvQkFFRCxTQUFTO2dCQUNYLENBQUMsTUFBTSxDQUFDO29CQUNOLEdBQUcsSUFBTSxDQUFDO3dCQUNSLEdBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsT0FBTzt3QkFFN0MsRUFBRSxHQUFHLE1BQU0sRUFBRSxDQUFDOzRCQUNaLEtBQUs7d0JBQ1AsQ0FBQzt3QkFFRCxLQUFLO29CQUNQLENBQUM7Z0JBQ0gsQ0FBQztnQkFFRCxNQUFNLEdBQUksS0FBSyxLQUFLLENBQUM7Z0JBRXJCLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQzt3QkF2REksTUFBMEIsT0F3RHBDLEtBQUssRUFBRSxVQUFVO2dCQUN4QixDQUFDO2dCQUVELEVBQUUsR0FBRyxNQUFNLEVBQUUsQ0FBQztvQkFDWixPQUFPLENBQUMsU0FBUyxDQUFDLFVBQVU7Z0JBQzlCLENBQUM7Z0JBRUQsTUFBTSxDQUFDLE1BQU07WUFDZixDQUFDOzs7WUFFRCxHQUFRLEdBQVIsUUFBUTttQkFBUixRQUFRLENBQVIsUUFBUSxHQUFHLENBQUM7Z0JBQ1YsR0FBSyxDQUFDLGNBQWMsR0FBRyxJQUFJLEVBQ3JCLE1BQU0sd0JBL0RLLGtCQUFrQixjQStEZCxRQUFRLEdBQWQsSUFBSyxhQUFVLGNBQWM7Z0JBRTVDLE1BQU0sQ0FBQyxNQUFNO1lBQ2YsQ0FBQzs7O1lBRUQsR0FBSyxHQUFMLEtBQUs7bUJBQUwsUUFBUSxDQUFSLEtBQUssR0FBRyxDQUFDO2dCQUFDLE1BQU0sc0JBcEVHLGtCQUFrQixjQW9FZCxLQUFLLEdBQVgsSUFBSyxhQUFPLGtCQUFrQjtZQUFHLENBQUM7OztXQXBFaEMsa0JBQWtCO0VBUEwsa0JBQXFCO2tCQU9sQyxrQkFBa0IifQ==