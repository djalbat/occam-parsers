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
var plus = _occamLexers.specialSymbols.plus;
var OneOrMorePartsPart = /*#__PURE__*/ function(CollectionOfPartsPart) {
    _inherits(OneOrMorePartsPart, CollectionOfPartsPart);
    var _super = _createSuper(OneOrMorePartsPart);
    function OneOrMorePartsPart(part) {
        _classCallCheck(this, OneOrMorePartsPart);
        var type = _partTypes.OneOrMorePartsPartType; ///
        return _super.call(this, type, part);
    }
    _createClass(OneOrMorePartsPart, [
        {
            key: "parse",
            value: function parse(nodes, context, callback) {
                var parsed2;
                var part = this.getPart(), savedIndex = context.getSavedIndex(), partsNodes = [];
                var count = 0;
                if (callback) {
                    var parsePart = function() {
                        var parsed3 = part.parse(partsNodes, context, function() {
                            var parsed = callback();
                            if (!parsed) {
                                parsed = parsePart();
                            }
                            return parsed;
                        });
                        if (parsed3) {
                            count++;
                        }
                        return parsed3;
                    };
                    parsePart();
                } else {
                    for(;;){
                        var parsed1 = part.parse(partsNodes, context);
                        if (!parsed1) {
                            break;
                        }
                        count++;
                    }
                }
                parsed2 = count !== 0;
                if (parsed2) {
                    (0, _array).push(nodes, partsNodes);
                }
                if (!parsed2) {
                    context.backtrack(savedIndex);
                }
                return parsed2;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ibmYvcGFydC9ub25UZXJtaW5hbC9vbmVPck1vcmVQYXJ0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBDb2xsZWN0aW9uT2ZQYXJ0c1BhcnQgZnJvbSBcIi4vY29sbGVjdGlvbk9mUGFydHNcIjtcblxuaW1wb3J0IHsgcHVzaCB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IE9uZU9yTW9yZVBhcnRzUGFydFR5cGUgfSBmcm9tIFwiLi4vLi4vcGFydFR5cGVzXCI7XG5cbmNvbnN0IHsgcGx1cyB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9uZU9yTW9yZVBhcnRzUGFydCBleHRlbmRzIENvbGxlY3Rpb25PZlBhcnRzUGFydCB7XG4gIGNvbnN0cnVjdG9yKHBhcnQpIHtcbiAgICBjb25zdCB0eXBlID0gT25lT3JNb3JlUGFydHNQYXJ0VHlwZTsgLy8vXG5cbiAgICBzdXBlcih0eXBlLCBwYXJ0KTtcbiAgfVxuXG4gIHBhcnNlKG5vZGVzLCBjb250ZXh0LCBjYWxsYmFjaykge1xuICAgIGxldCBwYXJzZWQ7XG5cbiAgICBjb25zdCBwYXJ0ID0gdGhpcy5nZXRQYXJ0KCksXG4gICAgICAgICAgc2F2ZWRJbmRleCA9IGNvbnRleHQuZ2V0U2F2ZWRJbmRleCgpLFxuICAgICAgICAgIHBhcnRzTm9kZXMgPSBbXTtcblxuICAgIGxldCBjb3VudCA9IDA7XG5cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNvbnN0IHBhcnNlUGFydCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gcGFydC5wYXJzZShwYXJ0c05vZGVzLCBjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgbGV0IHBhcnNlZCA9IGNhbGxiYWNrKCk7XG5cbiAgICAgICAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgICAgICAgcGFyc2VkID0gcGFyc2VQYXJ0KCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgfVxuXG4gICAgICBwYXJzZVBhcnQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yICg7Oykge1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBwYXJ0LnBhcnNlKHBhcnRzTm9kZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmICghcGFyc2VkKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjb3VudCsrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHBhcnNlZCA9IChjb3VudCAhPT0gMCk7XG5cbiAgICBpZiAocGFyc2VkKSB7XG4gICAgICBwdXNoKG5vZGVzLCBwYXJ0c05vZGVzKTtcbiAgICB9XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgY29udGV4dC5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IG9wZXJhdG9yU3RyaW5nID0gcGx1cywgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHN1cGVyLmFzU3RyaW5nKG9wZXJhdG9yU3RyaW5nKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKE9uZU9yTW9yZVBhcnRzUGFydCk7IH1cbn1cbiJdLCJuYW1lcyI6WyJwbHVzIiwic3BlY2lhbFN5bWJvbHMiLCJPbmVPck1vcmVQYXJ0c1BhcnQiLCJwYXJ0IiwidHlwZSIsIk9uZU9yTW9yZVBhcnRzUGFydFR5cGUiLCJwYXJzZSIsIm5vZGVzIiwiY29udGV4dCIsImNhbGxiYWNrIiwicGFyc2VkIiwiZ2V0UGFydCIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4IiwicGFydHNOb2RlcyIsImNvdW50IiwicGFyc2VQYXJ0IiwicHVzaCIsImJhY2t0cmFjayIsImFzU3RyaW5nIiwib3BlcmF0b3JTdHJpbmciLCJzdHJpbmciLCJjbG9uZSIsIkNvbGxlY3Rpb25PZlBhcnRzUGFydCJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFbUIsR0FBYyxDQUFkLFlBQWM7QUFFWCxHQUFxQixDQUFyQixrQkFBcUI7QUFFbEMsR0FBMEIsQ0FBMUIsTUFBMEI7QUFDUixHQUFpQixDQUFqQixVQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhELEdBQUssQ0FBR0EsSUFBSSxHQUFLQyxZQUFjLGdCQUF2QkQsSUFBSTtJQUVTRSxrQkFBa0IsaUJBQXhCLFFBQVE7OzthQUFGQSxrQkFBa0IsQ0FDekJDLElBQUk7O1FBQ2QsR0FBSyxDQUFDQyxJQUFJLEdBQUdDLFVBQXNCLHdCQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztpQ0FFbENELElBQUksRUFBRUQsSUFBSTs7OztZQUdsQkcsR0FBSyxFQUFMQSxDQUFLO21CQUFMQSxRQUFRLENBQVJBLEtBQUssQ0FBQ0MsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLFFBQVEsRUFBRSxDQUFDO2dCQUMvQixHQUFHLENBQUNDLE9BQU07Z0JBRVYsR0FBSyxDQUFDUCxJQUFJLEdBQUcsSUFBSSxDQUFDUSxPQUFPLElBQ25CQyxVQUFVLEdBQUdKLE9BQU8sQ0FBQ0ssYUFBYSxJQUNsQ0MsVUFBVSxHQUFHLENBQUMsQ0FBQztnQkFFckIsR0FBRyxDQUFDQyxLQUFLLEdBQUcsQ0FBQztnQkFFYixFQUFFLEVBQUVOLFFBQVEsRUFBRSxDQUFDO29CQUNiLEdBQUssQ0FBQ08sU0FBUyxHQUFHLFFBQ3hCLEdBRDhCLENBQUM7d0JBQ3ZCLEdBQUssQ0FBQ04sT0FBTSxHQUFHUCxJQUFJLENBQUNHLEtBQUssQ0FBQ1EsVUFBVSxFQUFFTixPQUFPLEVBQUUsUUFDdkQsR0FENkQsQ0FBQzs0QkFDcEQsR0FBRyxDQUFDRSxNQUFNLEdBQUdELFFBQVE7NEJBRXJCLEVBQUUsR0FBR0MsTUFBTSxFQUFFLENBQUM7Z0NBQ1pBLE1BQU0sR0FBR00sU0FBUzs0QkFDcEIsQ0FBQzs0QkFFRCxNQUFNLENBQUNOLE1BQU07d0JBQ2YsQ0FBQzt3QkFFRCxFQUFFLEVBQUVBLE9BQU0sRUFBRSxDQUFDOzRCQUNYSyxLQUFLO3dCQUNQLENBQUM7d0JBRUQsTUFBTSxDQUFDTCxPQUFNO29CQUNmLENBQUM7b0JBRURNLFNBQVM7Z0JBQ1gsQ0FBQyxNQUFNLENBQUM7b0JBQ04sR0FBRyxJQUFNLENBQUM7d0JBQ1IsR0FBSyxDQUFDTixPQUFNLEdBQUdQLElBQUksQ0FBQ0csS0FBSyxDQUFDUSxVQUFVLEVBQUVOLE9BQU87d0JBRTdDLEVBQUUsR0FBR0UsT0FBTSxFQUFFLENBQUM7NEJBQ1osS0FBSzt3QkFDUCxDQUFDO3dCQUVESyxLQUFLO29CQUNQLENBQUM7Z0JBQ0gsQ0FBQztnQkFFREwsT0FBTSxHQUFJSyxLQUFLLEtBQUssQ0FBQztnQkFFckIsRUFBRSxFQUFFTCxPQUFNLEVBQUUsQ0FBQzt3QkFDWE8sTUFBSSxPQUFDVixLQUFLLEVBQUVPLFVBQVU7Z0JBQ3hCLENBQUM7Z0JBRUQsRUFBRSxHQUFHSixPQUFNLEVBQUUsQ0FBQztvQkFDWkYsT0FBTyxDQUFDVSxTQUFTLENBQUNOLFVBQVU7Z0JBQzlCLENBQUM7Z0JBRUQsTUFBTSxDQUFDRixPQUFNO1lBQ2YsQ0FBQzs7O1lBRURTLEdBQVEsRUFBUkEsQ0FBUTttQkFBUkEsUUFBUSxDQUFSQSxRQUFRLEdBQUcsQ0FBQztnQkFDVixHQUFLLENBQUNDLGNBQWMsR0FBR3BCLElBQUksRUFDckJxQixNQUFNLHdCQS9ES25CLGtCQUFrQixhQStEZGlCLENBQVEsV0FBZCxJQUFLLGFBQVVDLGNBQWM7Z0JBRTVDLE1BQU0sQ0FBQ0MsTUFBTTtZQUNmLENBQUM7OztZQUVEQyxHQUFLLEVBQUxBLENBQUs7bUJBQUxBLFFBQVEsQ0FBUkEsS0FBSyxHQUFHLENBQUM7Z0JBQUMsTUFBTSxzQkFwRUdwQixrQkFBa0IsYUFvRWRvQixDQUFLLFFBQVgsSUFBSyxhQUFPcEIsa0JBQWtCO1lBQUcsQ0FBQzs7OztFQXBFTHFCLGtCQUFxQjtrQkFBaERyQixrQkFBa0IifQ==