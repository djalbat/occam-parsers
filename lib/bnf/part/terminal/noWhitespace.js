"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
var _terminal = _interopRequireDefault(require("../../part/terminal"));
var _noWhitespace = _interopRequireDefault(require("../../../common/node/terminal/noWhitespace"));
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
var NO_WHITESPACE = _occamLexers.specialSymbols.NO_WHITESPACE;
var NoWhitespacePart = function(TerminalPart) {
    _inherits(NoWhitespacePart, _terminal.default);
    function NoWhitespacePart() {
        _classCallCheck(this, NoWhitespacePart);
        return _possibleConstructorReturn(this, _getPrototypeOf(NoWhitespacePart).apply(this, arguments));
    }
    _createClass(NoWhitespacePart, [
        {
            key: "isNoWhitespacePart",
            value: function isNoWhitespacePart() {
                var noWhitespacePart = true;
                return noWhitespacePart;
            }
        },
        {
            key: "parse",
            value: function parse(nodes, context, callback) {
                var parsed;
                var noWhitespaceNode = null;
                var savedIndex = context.getSavedIndex(), nextTokenWhitespaceToken = context.isNextTokenWhitespaceToken();
                if (!nextTokenWhitespaceToken) {
                    noWhitespaceNode = _noWhitespace.default.fromNothing();
                }
                parsed = noWhitespaceNode !== null;
                if (parsed) {
                    nodes.push(noWhitespaceNode);
                    if (callback) {
                        parsed = callback();
                        if (!parsed) {
                            nodes.pop();
                        }
                    }
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
                var string = NO_WHITESPACE; ///
                return string;
            }
        },
        {
            key: "clone",
            value: function clone() {
                return _get(_getPrototypeOf(NoWhitespacePart.prototype), "clone", this).call(this, NoWhitespacePart);
            }
        }
    ]);
    return NoWhitespacePart;
}(_terminal.default);
exports.default = NoWhitespacePart;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ibmYvcGFydC90ZXJtaW5hbC9ub1doaXRlc3BhY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgVGVybWluYWxQYXJ0IGZyb20gXCIuLi8uLi9wYXJ0L3Rlcm1pbmFsXCI7XG5pbXBvcnQgTm9XaGl0ZXNwYWNlTm9kZSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL25vZGUvdGVybWluYWwvbm9XaGl0ZXNwYWNlXCI7XG5cbmNvbnN0IHsgTk9fV0hJVEVTUEFDRSB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vV2hpdGVzcGFjZVBhcnQgZXh0ZW5kcyBUZXJtaW5hbFBhcnQge1xuICBpc05vV2hpdGVzcGFjZVBhcnQoKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlUGFydCA9IHRydWU7XG5cbiAgICByZXR1cm4gbm9XaGl0ZXNwYWNlUGFydDtcbiAgfVxuXG4gIHBhcnNlKG5vZGVzLCBjb250ZXh0LCBjYWxsYmFjaykge1xuICAgIGxldCBwYXJzZWQ7XG5cbiAgICBsZXQgbm9XaGl0ZXNwYWNlTm9kZSA9IG51bGw7XG5cbiAgICBjb25zdCBzYXZlZEluZGV4ID0gY29udGV4dC5nZXRTYXZlZEluZGV4KCksXG4gICAgICAgICAgbmV4dFRva2VuV2hpdGVzcGFjZVRva2VuID0gY29udGV4dC5pc05leHRUb2tlbldoaXRlc3BhY2VUb2tlbigpO1xuXG4gICAgaWYgKCFuZXh0VG9rZW5XaGl0ZXNwYWNlVG9rZW4pIHtcbiAgICAgIG5vV2hpdGVzcGFjZU5vZGUgPSBOb1doaXRlc3BhY2VOb2RlLmZyb21Ob3RoaW5nKCk7XG4gICAgfVxuXG4gICAgcGFyc2VkID0gKG5vV2hpdGVzcGFjZU5vZGUgIT09IG51bGwpXG5cbiAgICBpZiAocGFyc2VkKSB7XG4gICAgICBub2Rlcy5wdXNoKG5vV2hpdGVzcGFjZU5vZGUpO1xuXG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgcGFyc2VkID0gY2FsbGJhY2soKTtcblxuICAgICAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgICAgIG5vZGVzLnBvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIGNvbnRleHQuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBOT19XSElURVNQQUNFOyAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKE5vV2hpdGVzcGFjZVBhcnQpOyB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBQTs7Ozs7SUFFQSxZQUFBO0lBRUEsU0FBQTtJQUNBLGFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRUEsYUFBQSxHQUxBLFlBQUEsZ0JBS0EsYUFBQTtJQUVBLGdCQUFBLFlBQUEsWUFBQTtjQUFBLGdCQUFBLEVBTEEsU0FBQTthQUtBLGdCQUFBOzhCQUFBLGdCQUFBO2dFQUFBLGdCQUFBOztpQkFBQSxnQkFBQTs7QUFDQSxlQUFBLEdBQUEsa0JBQUE7NEJBQUEsa0JBQUE7b0JBQ0EsZ0JBQUEsR0FBQSxJQUFBO3VCQUVBLGdCQUFBOzs7O0FBR0EsZUFBQSxHQUFBLEtBQUE7NEJBQUEsS0FBQSxDQUFBLEtBQUEsRUFBQSxPQUFBLEVBQUEsUUFBQTtvQkFDQSxNQUFBO29CQUVBLGdCQUFBLEdBQUEsSUFBQTtvQkFFQSxVQUFBLEdBQUEsT0FBQSxDQUFBLGFBQUEsSUFDQSx3QkFBQSxHQUFBLE9BQUEsQ0FBQSwwQkFBQTtxQkFFQSx3QkFBQTtBQUNBLG9DQUFBLEdBcEJBLGFBQUEsU0FvQkEsV0FBQTs7QUFHQSxzQkFBQSxHQUFBLGdCQUFBLEtBQUEsSUFBQTtvQkFFQSxNQUFBO0FBQ0EseUJBQUEsQ0FBQSxJQUFBLENBQUEsZ0JBQUE7d0JBRUEsUUFBQTtBQUNBLDhCQUFBLEdBQUEsUUFBQTs2QkFFQSxNQUFBO0FBQ0EsaUNBQUEsQ0FBQSxHQUFBOzs7O3FCQUtBLE1BQUE7QUFDQSwyQkFBQSxDQUFBLFNBQUEsQ0FBQSxVQUFBOzt1QkFHQSxNQUFBOzs7O0FBR0EsZUFBQSxHQUFBLFFBQUE7NEJBQUEsUUFBQTtvQkFDQSxNQUFBLEdBQUEsYUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBO3VCQUVBLE1BQUE7Ozs7QUFHQSxlQUFBLEdBQUEsS0FBQTs0QkFBQSxLQUFBOzRDQTlDQSxnQkFBQSxjQThDQSxLQUFBLG9CQUFBLGdCQUFBOzs7O1dBOUNBLGdCQUFBO0VBTEEsU0FBQTtrQkFLQSxnQkFBQSJ9