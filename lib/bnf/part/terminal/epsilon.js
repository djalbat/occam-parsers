"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
var _epsilon = _interopRequireDefault(require("../../../common/node/terminal/epsilon"));
var _terminal = _interopRequireDefault(require("../../part/terminal"));
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
var epsilon = _occamLexers.specialSymbols.epsilon;
var EpsilonPart = function(TerminalPart) {
    _inherits(EpsilonPart, TerminalPart);
    function EpsilonPart() {
        _classCallCheck(this, EpsilonPart);
        return _possibleConstructorReturn(this, _getPrototypeOf(EpsilonPart).apply(this, arguments));
    }
    _createClass(EpsilonPart, [
        {
            key: "parse",
            value: function parse(nodes, context, callback) {
                var parsed;
                var epsilonNode = _epsilon.default.fromNothing();
                parsed = epsilonNode !== null;
                if (parsed) {
                    nodes.push(epsilonNode);
                    if (callback) {
                        parsed = callback();
                        if (!parsed) {
                            nodes.pop();
                        }
                    }
                }
                return parsed;
            }
        },
        {
            key: "isEpsilonPart",
            value: function isEpsilonPart() {
                var epsilonPart = true;
                return epsilonPart;
            }
        },
        {
            key: "asString",
            value: function asString() {
                var string = epsilon; ///
                return string;
            }
        },
        {
            key: "clone",
            value: function clone() {
                return _get(_getPrototypeOf(EpsilonPart.prototype), "clone", this).call(this, EpsilonPart);
            }
        }
    ]);
    return EpsilonPart;
}(_terminal.default);
exports.default = EpsilonPart;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ibmYvcGFydC90ZXJtaW5hbC9lcHNpbG9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzcGVjaWFsU3ltYm9scyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IEVwc2lsb25Ob2RlIGZyb20gXCIuLi8uLi8uLi9jb21tb24vbm9kZS90ZXJtaW5hbC9lcHNpbG9uXCI7XG5pbXBvcnQgVGVybWluYWxQYXJ0IGZyb20gXCIuLi8uLi9wYXJ0L3Rlcm1pbmFsXCI7XG5cbmNvbnN0IHsgZXBzaWxvbiB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVwc2lsb25QYXJ0IGV4dGVuZHMgVGVybWluYWxQYXJ0IHtcbiAgcGFyc2Uobm9kZXMsIGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIGNvbnN0IGVwc2lsb25Ob2RlID0gRXBzaWxvbk5vZGUuZnJvbU5vdGhpbmcoKTtcblxuICAgIHBhcnNlZCA9IChlcHNpbG9uTm9kZSAhPT0gbnVsbCk7XG5cbiAgICBpZiAocGFyc2VkKSB7XG4gICAgICBub2Rlcy5wdXNoKGVwc2lsb25Ob2RlKTtcblxuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIHBhcnNlZCA9IGNhbGxiYWNrKCk7XG5cbiAgICAgICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgICAgICBub2Rlcy5wb3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBpc0Vwc2lsb25QYXJ0KCkge1xuICAgIGNvbnN0IGVwc2lsb25QYXJ0ID0gdHJ1ZTtcblxuICAgIHJldHVybiBlcHNpbG9uUGFydDtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IGVwc2lsb247IC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUoRXBzaWxvblBhcnQpOyB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFbUIsWUFBYztJQUVyQixRQUF1QztJQUN0QyxTQUFxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFdEMsT0FBTyxHQUxnQixZQUFjLGdCQUtyQyxPQUFPO0lBRU0sV0FBVztjQUFYLFdBQVc7YUFBWCxXQUFXOzhCQUFYLFdBQVc7Z0VBQVgsV0FBVzs7aUJBQVgsV0FBVzs7WUFDOUIsR0FBSyxHQUFMLEtBQUs7NEJBQUwsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUTtvQkFDeEIsTUFBTTtvQkFFSixXQUFXLEdBVEcsUUFBdUMsU0FTM0IsV0FBVztnQkFFM0MsTUFBTSxHQUFJLFdBQVcsS0FBSyxJQUFJO29CQUUxQixNQUFNO29CQUNSLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVzt3QkFFbEIsUUFBUTt3QkFDVixNQUFNLEdBQUcsUUFBUTs2QkFFWixNQUFNOzRCQUNULEtBQUssQ0FBQyxHQUFHOzs7O3VCQUtSLE1BQU07Ozs7WUFHZixHQUFhLEdBQWIsYUFBYTs0QkFBYixhQUFhO29CQUNMLFdBQVcsR0FBRyxJQUFJO3VCQUVqQixXQUFXOzs7O1lBR3BCLEdBQVEsR0FBUixRQUFROzRCQUFSLFFBQVE7b0JBQ0EsTUFBTSxHQUFHLE9BQU8sQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7dUJBRXBCLE1BQU07Ozs7WUFHZixHQUFLLEdBQUwsS0FBSzs0QkFBTCxLQUFLOzRDQW5DYyxXQUFXLGNBbUNQLEtBQUssb0JBQUMsV0FBVzs7OztXQW5DckIsV0FBVztFQUpQLFNBQXFCO2tCQUl6QixXQUFXIn0=