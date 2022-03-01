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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ibmYvcGFydC9ub25UZXJtaW5hbC9vbmVPck1vcmVQYXJ0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBDb2xsZWN0aW9uT2ZQYXJ0c1BhcnQgZnJvbSBcIi4vY29sbGVjdGlvbk9mUGFydHNcIjtcblxuaW1wb3J0IHsgcHVzaCB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IE9uZU9yTW9yZVBhcnRzUGFydFR5cGUgfSBmcm9tIFwiLi4vLi4vcGFydFR5cGVzXCI7XG5cbmNvbnN0IHsgcGx1cyB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9uZU9yTW9yZVBhcnRzUGFydCBleHRlbmRzIENvbGxlY3Rpb25PZlBhcnRzUGFydCB7XG4gIGNvbnN0cnVjdG9yKHBhcnQpIHtcbiAgICBjb25zdCB0eXBlID0gT25lT3JNb3JlUGFydHNQYXJ0VHlwZTsgLy8vXG5cbiAgICBzdXBlcih0eXBlLCBwYXJ0KTtcbiAgfVxuXG4gIHBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgY29uc3QgcGFydCA9IHRoaXMuZ2V0UGFydCgpLFxuICAgICAgICAgIHBhcnROb2RlcyA9IFtdLFxuICAgICAgICAgIHNhdmVkSW5kZXggPSBzdGF0ZS5nZXRTYXZlZEluZGV4KCk7XG5cbiAgICBwYXJzZWQgPSBwYXJzZVBhcnQocGFydCwgcGFydE5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgcHVzaChub2RlcywgcGFydE5vZGVzKTtcbiAgICB9XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgc3RhdGUuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBvcGVyYXRvclN0cmluZyA9IHBsdXMsICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBzdXBlci5hc1N0cmluZyhvcGVyYXRvclN0cmluZyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZShPbmVPck1vcmVQYXJ0c1BhcnQpOyB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFydChwYXJ0LCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrKSB7XG4gIGxldCBwYXJzZWQ7XG5cbiAgaWYgKGNhbGxiYWNrICE9PSBudWxsKSB7XG4gICAgcGFyc2VkID0gcGFydC5wYXJzZShub2Rlcywgc3RhdGUsICgpID0+IHtcbiAgICAgIGxldCBwYXJzZWQgPSBjYWxsYmFjaygpO1xuXG4gICAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgICBwYXJzZWQgPSBwYXJzZVBhcnQocGFydCwgbm9kZXMsIHN0YXRlLCBjYWxsYmFjayk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICBwYXJzZWQgPSBwYXJ0LnBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgcGFyc2VQYXJ0KHBhcnQsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn1cbiJdLCJuYW1lcyI6WyJwbHVzIiwic3BlY2lhbFN5bWJvbHMiLCJPbmVPck1vcmVQYXJ0c1BhcnQiLCJwYXJ0IiwidHlwZSIsIk9uZU9yTW9yZVBhcnRzUGFydFR5cGUiLCJwYXJzZSIsIm5vZGVzIiwic3RhdGUiLCJjYWxsYmFjayIsInBhcnNlZCIsImdldFBhcnQiLCJwYXJ0Tm9kZXMiLCJzYXZlZEluZGV4IiwiZ2V0U2F2ZWRJbmRleCIsInBhcnNlUGFydCIsInB1c2giLCJiYWNrdHJhY2siLCJhc1N0cmluZyIsIm9wZXJhdG9yU3RyaW5nIiwic3RyaW5nIiwiY2xvbmUiLCJDb2xsZWN0aW9uT2ZQYXJ0c1BhcnQiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRW1CLEdBQWMsQ0FBZCxZQUFjO0FBRVgsR0FBcUIsQ0FBckIsa0JBQXFCO0FBRWxDLEdBQTBCLENBQTFCLE1BQTBCO0FBQ1IsR0FBaUIsQ0FBakIsVUFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4RCxHQUFLLENBQUdBLElBQUksR0FBS0MsWUFBYyxnQkFBdkJELElBQUk7SUFFU0Usa0JBQWtCLGlCQUF4QixRQUFROzs7YUFBRkEsa0JBQWtCLENBQ3pCQyxJQUFJOztRQUNkLEdBQUssQ0FBQ0MsSUFBSSxHQUFHQyxVQUFzQix3QkFBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7aUNBRWxDRCxJQUFJLEVBQUVELElBQUk7Ozs7WUFHbEJHLEdBQUssRUFBTEEsQ0FBSzttQkFBTEEsUUFBUSxDQUFSQSxLQUFLLENBQUNDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUUsQ0FBQztnQkFDN0IsR0FBRyxDQUFDQyxNQUFNO2dCQUVWLEdBQUssQ0FBQ1AsSUFBSSxHQUFHLElBQUksQ0FBQ1EsT0FBTyxJQUNuQkMsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUNkQyxVQUFVLEdBQUdMLEtBQUssQ0FBQ00sYUFBYTtnQkFFdENKLE1BQU0sR0FBR0ssU0FBUyxDQUFDWixJQUFJLEVBQUVTLFNBQVMsRUFBRUosS0FBSyxFQUFFQyxRQUFRO2dCQUVuRCxFQUFFLEVBQUVDLE1BQU0sRUFBRSxDQUFDO3dCQUNYTSxNQUFJLE9BQUNULEtBQUssRUFBRUssU0FBUztnQkFDdkIsQ0FBQztnQkFFRCxFQUFFLEdBQUdGLE1BQU0sRUFBRSxDQUFDO29CQUNaRixLQUFLLENBQUNTLFNBQVMsQ0FBQ0osVUFBVTtnQkFDNUIsQ0FBQztnQkFFRCxNQUFNLENBQUNILE1BQU07WUFDZixDQUFDOzs7WUFFRFEsR0FBUSxFQUFSQSxDQUFRO21CQUFSQSxRQUFRLENBQVJBLFFBQVEsR0FBRyxDQUFDO2dCQUNWLEdBQUssQ0FBQ0MsY0FBYyxHQUFHbkIsSUFBSSxFQUNyQm9CLE1BQU0sd0JBN0JLbEIsa0JBQWtCLGFBNkJkZ0IsQ0FBUSxXQUFkLElBQUssYUFBVUMsY0FBYztnQkFFNUMsTUFBTSxDQUFDQyxNQUFNO1lBQ2YsQ0FBQzs7O1lBRURDLEdBQUssRUFBTEEsQ0FBSzttQkFBTEEsUUFBUSxDQUFSQSxLQUFLLEdBQUcsQ0FBQztnQkFBQyxNQUFNLHNCQWxDR25CLGtCQUFrQixhQWtDZG1CLENBQUssUUFBWCxJQUFLLGFBQU9uQixrQkFBa0I7WUFBRyxDQUFDOzs7O0VBbENMb0Isa0JBQXFCO2tCQUFoRHBCLGtCQUFrQjtTQXFDOUJhLFNBQVMsQ0FBQ1osSUFBSSxFQUFFSSxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFLENBQUM7SUFDaEQsR0FBRyxDQUFDQyxPQUFNO0lBRVYsRUFBRSxFQUFFRCxRQUFRLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDdEJDLE9BQU0sR0FBR1AsSUFBSSxDQUFDRyxLQUFLLENBQUNDLEtBQUssRUFBRUMsS0FBSyxFQUFFLFFBQ3RDLEdBRDRDLENBQUM7WUFDdkMsR0FBRyxDQUFDRSxNQUFNLEdBQUdELFFBQVE7WUFFckIsRUFBRSxHQUFHQyxNQUFNLEVBQUUsQ0FBQztnQkFDWkEsTUFBTSxHQUFHSyxTQUFTLENBQUNaLElBQUksRUFBRUksS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVE7WUFDakQsQ0FBQztZQUVELE1BQU0sQ0FBQ0MsTUFBTTtRQUNmLENBQUM7SUFDSCxDQUFDLE1BQU0sQ0FBQztRQUNOQSxPQUFNLEdBQUdQLElBQUksQ0FBQ0csS0FBSyxDQUFDQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUTtRQUUxQyxFQUFFLEVBQUVDLE9BQU0sRUFBRSxDQUFDO1lBQ1hLLFNBQVMsQ0FBQ1osSUFBSSxFQUFFSSxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUTtRQUN4QyxDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU0sQ0FBQ0MsT0FBTTtBQUNmLENBQUMifQ==