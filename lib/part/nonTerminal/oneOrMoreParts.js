"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
var _collectionOfParts = _interopRequireDefault(require("./collectionOfParts"));
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
function parsePart(part, nodes, state, callback) {
    var parsed1;
    if (callback !== null) {
        parsed1 = part.parse(nodes, state, function() {
            var parsed = callback();
            if (!parsed) {
                parsed = parsePart(part, nodes, state, callback);
            }
            return parsed;
        });
    } else {
        parsed1 = part.parse(nodes, state, callback);
        if (parsed1) {
            parsePart(part, nodes, state, callback);
        }
    }
    return parsed1;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L25vblRlcm1pbmFsL29uZU9yTW9yZVBhcnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IENvbGxlY3Rpb25PZlBhcnRzUGFydCBmcm9tIFwiLi9jb2xsZWN0aW9uT2ZQYXJ0c1wiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgT25lT3JNb3JlUGFydHNQYXJ0VHlwZSB9IGZyb20gXCIuLi8uLi9wYXJ0VHlwZXNcIjtcblxuY29uc3QgeyBwbHVzIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT25lT3JNb3JlUGFydHNQYXJ0IGV4dGVuZHMgQ29sbGVjdGlvbk9mUGFydHNQYXJ0IHtcbiAgY29uc3RydWN0b3IocGFydCkge1xuICAgIGNvbnN0IHR5cGUgPSBPbmVPck1vcmVQYXJ0c1BhcnRUeXBlOyAvLy9cblxuICAgIHN1cGVyKHR5cGUsIHBhcnQpO1xuICB9XG5cbiAgcGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjaykge1xuICAgIGxldCBwYXJzZWQ7XG5cbiAgICBjb25zdCBwYXJ0ID0gdGhpcy5nZXRQYXJ0KCksXG4gICAgICAgICAgcGFydE5vZGVzID0gW10sXG4gICAgICAgICAgc2F2ZWRJbmRleCA9IHN0YXRlLmdldFNhdmVkSW5kZXgoKTtcblxuICAgIHBhcnNlZCA9IHBhcnNlUGFydChwYXJ0LCBwYXJ0Tm9kZXMsIHN0YXRlLCBjYWxsYmFjayk7XG5cbiAgICBpZiAocGFyc2VkKSB7XG4gICAgICBwdXNoKG5vZGVzLCBwYXJ0Tm9kZXMpO1xuICAgIH1cblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBzdGF0ZS5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IG9wZXJhdG9yU3RyaW5nID0gcGx1cywgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHN1cGVyLmFzU3RyaW5nKG9wZXJhdG9yU3RyaW5nKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKE9uZU9yTW9yZVBhcnRzUGFydCk7IH1cbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJ0KHBhcnQsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spIHtcbiAgbGV0IHBhcnNlZDtcblxuICBpZiAoY2FsbGJhY2sgIT09IG51bGwpIHtcbiAgICBwYXJzZWQgPSBwYXJ0LnBhcnNlKG5vZGVzLCBzdGF0ZSwgKCkgPT4ge1xuICAgICAgbGV0IHBhcnNlZCA9IGNhbGxiYWNrKCk7XG5cbiAgICAgIGlmICghcGFyc2VkKSB7XG4gICAgICAgIHBhcnNlZCA9IHBhcnNlUGFydChwYXJ0LCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBwYXJzZWQgPSBwYXJ0LnBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgcGFyc2VQYXJ0KHBhcnQsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn1cbiJdLCJuYW1lcyI6WyJwbHVzIiwic3BlY2lhbFN5bWJvbHMiLCJPbmVPck1vcmVQYXJ0c1BhcnQiLCJwYXJ0IiwidHlwZSIsIk9uZU9yTW9yZVBhcnRzUGFydFR5cGUiLCJwYXJzZSIsIm5vZGVzIiwic3RhdGUiLCJjYWxsYmFjayIsInBhcnNlZCIsImdldFBhcnQiLCJwYXJ0Tm9kZXMiLCJzYXZlZEluZGV4IiwiZ2V0U2F2ZWRJbmRleCIsInBhcnNlUGFydCIsInB1c2giLCJiYWNrdHJhY2siLCJhc1N0cmluZyIsIm9wZXJhdG9yU3RyaW5nIiwic3RyaW5nIiwiY2xvbmUiLCJDb2xsZWN0aW9uT2ZQYXJ0c1BhcnQiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFa0IsSUFBQSxZQUFjLFdBQWQsY0FBYyxDQUFBO0FBRVgsSUFBQSxrQkFBcUIsa0NBQXJCLHFCQUFxQixFQUFBO0FBRWxDLElBQUEsTUFBdUIsV0FBdkIsdUJBQXVCLENBQUE7QUFDTCxJQUFBLFVBQWlCLFdBQWpCLGlCQUFpQixDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEQsSUFBTSxBQUFFQSxJQUFJLEdBQUtDLFlBQWMsZUFBQSxDQUF2QkQsSUFBSSxBQUFtQixBQUFDO0FBRWpCLElBQUEsQUFBTUUsa0JBQWtCLGlCQXFDcEMsQUFyQ1k7OzthQUFNQSxrQkFBa0IsQ0FDekJDLElBQUk7O1FBQ2QsSUFBTUMsSUFBSSxHQUFHQyxVQUFzQix1QkFBQSxBQUFDLEVBQUMsR0FBRztpQ0FFbENELElBQUksRUFBRUQsSUFBSTs7OztZQUdsQkcsR0FBSyxFQUFMQSxPQUFLO21CQUFMQSxTQUFBQSxLQUFLLENBQUNDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUU7Z0JBQzVCLElBQUlDLE1BQU0sQUFBQztnQkFFWCxJQUFNUCxJQUFJLEdBQUcsSUFBSSxDQUFDUSxPQUFPLEVBQUUsRUFDckJDLFNBQVMsR0FBRyxFQUFFLEVBQ2RDLFVBQVUsR0FBR0wsS0FBSyxDQUFDTSxhQUFhLEVBQUUsQUFBQztnQkFFekNKLE1BQU0sR0FBR0ssU0FBUyxDQUFDWixJQUFJLEVBQUVTLFNBQVMsRUFBRUosS0FBSyxFQUFFQyxRQUFRLENBQUMsQ0FBQztnQkFFckQsSUFBSUMsTUFBTSxFQUFFO29CQUNWTSxDQUFBQSxHQUFBQSxNQUFJLEFBQWtCLENBQUEsS0FBbEIsQ0FBQ1QsS0FBSyxFQUFFSyxTQUFTLENBQUMsQ0FBQztpQkFDeEI7Z0JBRUQsSUFBSSxDQUFDRixNQUFNLEVBQUU7b0JBQ1hGLEtBQUssQ0FBQ1MsU0FBUyxDQUFDSixVQUFVLENBQUMsQ0FBQztpQkFDN0I7Z0JBRUQsT0FBT0gsTUFBTSxDQUFDO2FBQ2Y7OztZQUVEUSxHQUFRLEVBQVJBLFVBQVE7bUJBQVJBLFNBQUFBLFFBQVEsR0FBRztnQkFDVCxJQUFNQyxjQUFjLEdBQUduQixJQUFJLEVBQ3JCb0IsTUFBTSxHQUFHLHFCQTdCRWxCLGtCQUFrQixhQTZCZGdCLFVBQVEsRUFBZCxJQUFLLENBQUEsWUFBVUMsY0FBYyxDQUFDLEFBQUM7Z0JBRTlDLE9BQU9DLE1BQU0sQ0FBQzthQUNmOzs7WUFFREMsR0FBSyxFQUFMQSxPQUFLO21CQUFMQSxTQUFBQSxLQUFLLEdBQUc7Z0JBQUUsT0FBTyxxQkFsQ0VuQixrQkFBa0IsYUFrQ2RtQixPQUFLLEVBQVgsSUFBSyxDQUFBLFlBQU9uQixrQkFBa0IsRUFBRTthQUFFOzs7O0NBQ3BELENBbkMrQ29CLGtCQUFxQixRQUFBLENBbUNwRTtrQkFuQ29CcEIsa0JBQWtCO0FBcUN2QyxTQUFTYSxTQUFTLENBQUNaLElBQUksRUFBRUksS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRTtJQUMvQyxJQUFJQyxPQUFNLEFBQUM7SUFFWCxJQUFJRCxRQUFRLEtBQUssSUFBSSxFQUFFO1FBQ3JCQyxPQUFNLEdBQUdQLElBQUksQ0FBQ0csS0FBSyxDQUFDQyxLQUFLLEVBQUVDLEtBQUssRUFBRSxXQUFNO1lBQ3RDLElBQUlFLE1BQU0sR0FBR0QsUUFBUSxFQUFFLEFBQUM7WUFFeEIsSUFBSSxDQUFDQyxNQUFNLEVBQUU7Z0JBQ1hBLE1BQU0sR0FBR0ssU0FBUyxDQUFDWixJQUFJLEVBQUVJLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRLENBQUMsQ0FBQzthQUNsRDtZQUVELE9BQU9DLE1BQU0sQ0FBQztTQUNmLENBQUMsQ0FBQztLQUNKLE1BQU07UUFDTEEsT0FBTSxHQUFHUCxJQUFJLENBQUNHLEtBQUssQ0FBQ0MsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxDQUFDO1FBRTVDLElBQUlDLE9BQU0sRUFBRTtZQUNWSyxTQUFTLENBQUNaLElBQUksRUFBRUksS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsQ0FBQztTQUN4QztLQUNGO0lBRUQsT0FBT0MsT0FBTSxDQUFDO0NBQ2YifQ==