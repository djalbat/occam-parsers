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
            value: function parse(nodes, state, callback) {
                var parsed2;
                var part = this.getPart(), savedIndex = state.getSavedIndex(), partsNodes = [];
                var count = 0;
                if (callback !== null) {
                    var parsePart = function() {
                        var parsed3 = part.parse(partsNodes, state, function() {
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
                    var callback1 = null;
                    for(;;){
                        var parsed1 = part.parse(partsNodes, state, callback1);
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
                    state.backtrack(savedIndex);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ibmYvcGFydC9ub25UZXJtaW5hbC9vbmVPck1vcmVQYXJ0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBDb2xsZWN0aW9uT2ZQYXJ0c1BhcnQgZnJvbSBcIi4vY29sbGVjdGlvbk9mUGFydHNcIjtcblxuaW1wb3J0IHsgcHVzaCB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IE9uZU9yTW9yZVBhcnRzUGFydFR5cGUgfSBmcm9tIFwiLi4vLi4vcGFydFR5cGVzXCI7XG5cbmNvbnN0IHsgcGx1cyB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9uZU9yTW9yZVBhcnRzUGFydCBleHRlbmRzIENvbGxlY3Rpb25PZlBhcnRzUGFydCB7XG4gIGNvbnN0cnVjdG9yKHBhcnQpIHtcbiAgICBjb25zdCB0eXBlID0gT25lT3JNb3JlUGFydHNQYXJ0VHlwZTsgLy8vXG5cbiAgICBzdXBlcih0eXBlLCBwYXJ0KTtcbiAgfVxuXG4gIHBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgY29uc3QgcGFydCA9IHRoaXMuZ2V0UGFydCgpLFxuICAgICAgICAgIHNhdmVkSW5kZXggPSBzdGF0ZS5nZXRTYXZlZEluZGV4KCksXG4gICAgICAgICAgcGFydHNOb2RlcyA9IFtdO1xuXG4gICAgbGV0IGNvdW50ID0gMDtcblxuICAgIGlmIChjYWxsYmFjayAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcGFyc2VQYXJ0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBwYXJ0LnBhcnNlKHBhcnRzTm9kZXMsIHN0YXRlLCAoKSA9PiB7XG4gICAgICAgICAgbGV0IHBhcnNlZCA9IGNhbGxiYWNrKCk7XG5cbiAgICAgICAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgICAgICAgcGFyc2VkID0gcGFyc2VQYXJ0KCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgfVxuXG4gICAgICBwYXJzZVBhcnQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBudWxsO1xuXG4gICAgICBmb3IgKDs7KSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHBhcnQucGFyc2UocGFydHNOb2Rlcywgc3RhdGUsIGNhbGxiYWNrKTtcblxuICAgICAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY291bnQrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwYXJzZWQgPSAoY291bnQgIT09IDApO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgcHVzaChub2RlcywgcGFydHNOb2Rlcyk7XG4gICAgfVxuXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIHN0YXRlLmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3Qgb3BlcmF0b3JTdHJpbmcgPSBwbHVzLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gc3VwZXIuYXNTdHJpbmcob3BlcmF0b3JTdHJpbmcpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUoT25lT3JNb3JlUGFydHNQYXJ0KTsgfVxufVxuIl0sIm5hbWVzIjpbInBsdXMiLCJzcGVjaWFsU3ltYm9scyIsIk9uZU9yTW9yZVBhcnRzUGFydCIsInBhcnQiLCJ0eXBlIiwiT25lT3JNb3JlUGFydHNQYXJ0VHlwZSIsInBhcnNlIiwibm9kZXMiLCJzdGF0ZSIsImNhbGxiYWNrIiwicGFyc2VkIiwiZ2V0UGFydCIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4IiwicGFydHNOb2RlcyIsImNvdW50IiwicGFyc2VQYXJ0IiwicHVzaCIsImJhY2t0cmFjayIsImFzU3RyaW5nIiwib3BlcmF0b3JTdHJpbmciLCJzdHJpbmciLCJjbG9uZSIsIkNvbGxlY3Rpb25PZlBhcnRzUGFydCJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFbUIsR0FBYyxDQUFkLFlBQWM7QUFFWCxHQUFxQixDQUFyQixrQkFBcUI7QUFFbEMsR0FBMEIsQ0FBMUIsTUFBMEI7QUFDUixHQUFpQixDQUFqQixVQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhELEdBQUssQ0FBR0EsSUFBSSxHQUFLQyxZQUFjLGdCQUF2QkQsSUFBSTtJQUVTRSxrQkFBa0IsaUJBQXhCLFFBQVE7OzthQUFGQSxrQkFBa0IsQ0FDekJDLElBQUk7O1FBQ2QsR0FBSyxDQUFDQyxJQUFJLEdBQUdDLFVBQXNCLHdCQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztpQ0FFbENELElBQUksRUFBRUQsSUFBSTs7OztZQUdsQkcsR0FBSyxFQUFMQSxDQUFLO21CQUFMQSxRQUFRLENBQVJBLEtBQUssQ0FBQ0MsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRSxDQUFDO2dCQUM3QixHQUFHLENBQUNDLE9BQU07Z0JBRVYsR0FBSyxDQUFDUCxJQUFJLEdBQUcsSUFBSSxDQUFDUSxPQUFPLElBQ25CQyxVQUFVLEdBQUdKLEtBQUssQ0FBQ0ssYUFBYSxJQUNoQ0MsVUFBVSxHQUFHLENBQUMsQ0FBQztnQkFFckIsR0FBRyxDQUFDQyxLQUFLLEdBQUcsQ0FBQztnQkFFYixFQUFFLEVBQUVOLFFBQVEsS0FBSyxJQUFJLEVBQUUsQ0FBQztvQkFDdEIsR0FBSyxDQUFDTyxTQUFTLEdBQUcsUUFDeEIsR0FEOEIsQ0FBQzt3QkFDdkIsR0FBSyxDQUFDTixPQUFNLEdBQUdQLElBQUksQ0FBQ0csS0FBSyxDQUFDUSxVQUFVLEVBQUVOLEtBQUssRUFBRSxRQUNyRCxHQUQyRCxDQUFDOzRCQUNsRCxHQUFHLENBQUNFLE1BQU0sR0FBR0QsUUFBUTs0QkFFckIsRUFBRSxHQUFHQyxNQUFNLEVBQUUsQ0FBQztnQ0FDWkEsTUFBTSxHQUFHTSxTQUFTOzRCQUNwQixDQUFDOzRCQUVELE1BQU0sQ0FBQ04sTUFBTTt3QkFDZixDQUFDO3dCQUVELEVBQUUsRUFBRUEsT0FBTSxFQUFFLENBQUM7NEJBQ1hLLEtBQUs7d0JBQ1AsQ0FBQzt3QkFFRCxNQUFNLENBQUNMLE9BQU07b0JBQ2YsQ0FBQztvQkFFRE0sU0FBUztnQkFDWCxDQUFDLE1BQU0sQ0FBQztvQkFDTixHQUFLLENBQUNQLFNBQVEsR0FBRyxJQUFJO29CQUVyQixHQUFHLElBQU0sQ0FBQzt3QkFDUixHQUFLLENBQUNDLE9BQU0sR0FBR1AsSUFBSSxDQUFDRyxLQUFLLENBQUNRLFVBQVUsRUFBRU4sS0FBSyxFQUFFQyxTQUFRO3dCQUVyRCxFQUFFLEdBQUdDLE9BQU0sRUFBRSxDQUFDOzRCQUNaLEtBQUs7d0JBQ1AsQ0FBQzt3QkFFREssS0FBSztvQkFDUCxDQUFDO2dCQUNILENBQUM7Z0JBRURMLE9BQU0sR0FBSUssS0FBSyxLQUFLLENBQUM7Z0JBRXJCLEVBQUUsRUFBRUwsT0FBTSxFQUFFLENBQUM7d0JBQ1hPLE1BQUksT0FBQ1YsS0FBSyxFQUFFTyxVQUFVO2dCQUN4QixDQUFDO2dCQUVELEVBQUUsR0FBR0osT0FBTSxFQUFFLENBQUM7b0JBQ1pGLEtBQUssQ0FBQ1UsU0FBUyxDQUFDTixVQUFVO2dCQUM1QixDQUFDO2dCQUVELE1BQU0sQ0FBQ0YsT0FBTTtZQUNmLENBQUM7OztZQUVEUyxHQUFRLEVBQVJBLENBQVE7bUJBQVJBLFFBQVEsQ0FBUkEsUUFBUSxHQUFHLENBQUM7Z0JBQ1YsR0FBSyxDQUFDQyxjQUFjLEdBQUdwQixJQUFJLEVBQ3JCcUIsTUFBTSx3QkFqRUtuQixrQkFBa0IsYUFpRWRpQixDQUFRLFdBQWQsSUFBSyxhQUFVQyxjQUFjO2dCQUU1QyxNQUFNLENBQUNDLE1BQU07WUFDZixDQUFDOzs7WUFFREMsR0FBSyxFQUFMQSxDQUFLO21CQUFMQSxRQUFRLENBQVJBLEtBQUssR0FBRyxDQUFDO2dCQUFDLE1BQU0sc0JBdEVHcEIsa0JBQWtCLGFBc0Vkb0IsQ0FBSyxRQUFYLElBQUssYUFBT3BCLGtCQUFrQjtZQUFHLENBQUM7Ozs7RUF0RUxxQixrQkFBcUI7a0JBQWhEckIsa0JBQWtCIn0=