"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
var _collectionOfParts = _interopRequireDefault(require("./collectionOfParts"));
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
var asterisk = _occamLexers.specialSymbols.asterisk;
var ZeroOrMorePartsPart = /*#__PURE__*/ function(CollectionOfPartsPart) {
    _inherits(ZeroOrMorePartsPart, CollectionOfPartsPart);
    var _super = _createSuper(ZeroOrMorePartsPart);
    function ZeroOrMorePartsPart(part) {
        _classCallCheck(this, ZeroOrMorePartsPart);
        var type = _partTypes.ZeroOrMorePartsPartType; ///
        return _super.call(this, type, part);
    }
    _createClass(ZeroOrMorePartsPart, [
        {
            key: "parse",
            value: function parse(nodes, state, callback) {
                var parsed;
                var part = this.getPart();
                parsePart(part, nodes, state, callback);
                parsed = true;
                return parsed;
            }
        },
        {
            key: "asString",
            value: function asString() {
                var operatorString = asterisk, string = _get(_getPrototypeOf(ZeroOrMorePartsPart.prototype), "asString", this).call(this, operatorString);
                return string;
            }
        },
        {
            key: "clone",
            value: function clone() {
                return _get(_getPrototypeOf(ZeroOrMorePartsPart.prototype), "clone", this).call(this, ZeroOrMorePartsPart);
            }
        }
    ]);
    return ZeroOrMorePartsPart;
}(_collectionOfParts.default);
exports.default = ZeroOrMorePartsPart;
function parsePart(part, nodes, state, callback) {
    var parsed;
    if (callback !== null) {
        parsed = callback();
        if (!parsed) {
            part.parse(nodes, state, function() {
                return parsePart(part, nodes, state, callback);
            });
        }
    } else {
        parsed = part.parse(nodes, state, callback);
        if (parsed) {
            parsePart(part, nodes, state, callback);
        }
    }
    return parsed;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ibmYvcGFydC9ub25UZXJtaW5hbC96ZXJvT3JNb3JlUGFydHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgQ29sbGVjdGlvbk9mUGFydHNQYXJ0IGZyb20gXCIuL2NvbGxlY3Rpb25PZlBhcnRzXCI7XG5cbmltcG9ydCB7IFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlIH0gZnJvbSBcIi4uLy4uL3BhcnRUeXBlc1wiO1xuXG5jb25zdCB7IGFzdGVyaXNrIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWmVyb09yTW9yZVBhcnRzUGFydCBleHRlbmRzIENvbGxlY3Rpb25PZlBhcnRzUGFydCB7XG4gIGNvbnN0cnVjdG9yKHBhcnQpIHtcbiAgICBjb25zdCB0eXBlID0gWmVyb09yTW9yZVBhcnRzUGFydFR5cGU7IC8vL1xuXG4gICAgc3VwZXIodHlwZSwgcGFydCk7XG4gIH1cblxuICBwYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIGNvbnN0IHBhcnQgPSB0aGlzLmdldFBhcnQoKTtcblxuICAgIHBhcnNlUGFydChwYXJ0LCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrKTtcblxuICAgIHBhcnNlZCA9IHRydWU7XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3Qgb3BlcmF0b3JTdHJpbmcgPSBhc3RlcmlzaywgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHN1cGVyLmFzU3RyaW5nKG9wZXJhdG9yU3RyaW5nKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKFplcm9Pck1vcmVQYXJ0c1BhcnQpOyB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFydChwYXJ0LCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrKSB7XG4gIGxldCBwYXJzZWQ7XG5cbiAgaWYgKGNhbGxiYWNrICE9PSBudWxsKSB7XG4gICAgcGFyc2VkID0gY2FsbGJhY2soKTtcblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBwYXJ0LnBhcnNlKG5vZGVzLCBzdGF0ZSwgKCkgPT4gcGFyc2VQYXJ0KHBhcnQsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcGFyc2VkID0gcGFydC5wYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrKTtcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIHBhcnNlUGFydChwYXJ0LCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFyc2VkO1xufVxuIl0sIm5hbWVzIjpbImFzdGVyaXNrIiwic3BlY2lhbFN5bWJvbHMiLCJaZXJvT3JNb3JlUGFydHNQYXJ0IiwicGFydCIsInR5cGUiLCJaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZSIsInBhcnNlIiwibm9kZXMiLCJzdGF0ZSIsImNhbGxiYWNrIiwicGFyc2VkIiwiZ2V0UGFydCIsInBhcnNlUGFydCIsImFzU3RyaW5nIiwib3BlcmF0b3JTdHJpbmciLCJzdHJpbmciLCJjbG9uZSIsIkNvbGxlY3Rpb25PZlBhcnRzUGFydCJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFbUIsR0FBYyxDQUFkLFlBQWM7QUFFWCxHQUFxQixDQUFyQixrQkFBcUI7QUFFZixHQUFpQixDQUFqQixVQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpELEdBQUssQ0FBR0EsUUFBUSxHQUFLQyxZQUFjLGdCQUEzQkQsUUFBUTtJQUVLRSxtQkFBbUIsaUJBQXpCLFFBQVE7OzthQUFGQSxtQkFBbUIsQ0FDMUJDLElBQUk7O1FBQ2QsR0FBSyxDQUFDQyxJQUFJLEdBQUdDLFVBQXVCLHlCQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztpQ0FFbkNELElBQUksRUFBRUQsSUFBSTs7OztZQUdsQkcsR0FBSyxFQUFMQSxDQUFLO21CQUFMQSxRQUFRLENBQVJBLEtBQUssQ0FBQ0MsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRSxDQUFDO2dCQUM3QixHQUFHLENBQUNDLE1BQU07Z0JBRVYsR0FBSyxDQUFDUCxJQUFJLEdBQUcsSUFBSSxDQUFDUSxPQUFPO2dCQUV6QkMsU0FBUyxDQUFDVCxJQUFJLEVBQUVJLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRO2dCQUV0Q0MsTUFBTSxHQUFHLElBQUk7Z0JBRWIsTUFBTSxDQUFDQSxNQUFNO1lBQ2YsQ0FBQzs7O1lBRURHLEdBQVEsRUFBUkEsQ0FBUTttQkFBUkEsUUFBUSxDQUFSQSxRQUFRLEdBQUcsQ0FBQztnQkFDVixHQUFLLENBQUNDLGNBQWMsR0FBR2QsUUFBUSxFQUN6QmUsTUFBTSx3QkFyQktiLG1CQUFtQixhQXFCZlcsQ0FBUSxXQUFkLElBQUssYUFBVUMsY0FBYztnQkFFNUMsTUFBTSxDQUFDQyxNQUFNO1lBQ2YsQ0FBQzs7O1lBRURDLEdBQUssRUFBTEEsQ0FBSzttQkFBTEEsUUFBUSxDQUFSQSxLQUFLLEdBQUcsQ0FBQztnQkFBQyxNQUFNLHNCQTFCR2QsbUJBQW1CLGFBMEJmYyxDQUFLLFFBQVgsSUFBSyxhQUFPZCxtQkFBbUI7WUFBRyxDQUFDOzs7O0VBMUJMZSxrQkFBcUI7a0JBQWpEZixtQkFBbUI7U0E2Qi9CVSxTQUFTLENBQUNULElBQUksRUFBRUksS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRSxDQUFDO0lBQ2hELEdBQUcsQ0FBQ0MsTUFBTTtJQUVWLEVBQUUsRUFBRUQsUUFBUSxLQUFLLElBQUksRUFBRSxDQUFDO1FBQ3RCQyxNQUFNLEdBQUdELFFBQVE7UUFFakIsRUFBRSxHQUFHQyxNQUFNLEVBQUUsQ0FBQztZQUNaUCxJQUFJLENBQUNHLEtBQUssQ0FBQ0MsS0FBSyxFQUFFQyxLQUFLLEVBQUUsUUFBUTtnQkFBRkksTUFBTSxDQUFOQSxTQUFTLENBQUNULElBQUksRUFBRUksS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVE7O1FBQ3ZFLENBQUM7SUFDSCxDQUFDLE1BQU0sQ0FBQztRQUNOQyxNQUFNLEdBQUdQLElBQUksQ0FBQ0csS0FBSyxDQUFDQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUTtRQUUxQyxFQUFFLEVBQUVDLE1BQU0sRUFBRSxDQUFDO1lBQ1hFLFNBQVMsQ0FBQ1QsSUFBSSxFQUFFSSxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUTtRQUN4QyxDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU0sQ0FBQ0MsTUFBTTtBQUNmLENBQUMifQ==