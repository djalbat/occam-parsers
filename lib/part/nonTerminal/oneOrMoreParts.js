"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return OneOrMorePartsPart;
    }
});
var _necessary = require("necessary");
var _occamlexers = require("occam-lexers");
var _nonTerminal = /*#__PURE__*/ _interop_require_default(require("../../part/nonTerminal"));
var _partTypes = require("../../partTypes");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var push = _necessary.arrayUtilities.push, plus = _occamlexers.specialSymbols.plus;
var OneOrMorePartsPart = /*#__PURE__*/ function(NonTerminalPart) {
    _inherits(OneOrMorePartsPart, NonTerminalPart);
    var _super = _create_super(OneOrMorePartsPart);
    function OneOrMorePartsPart(type, part) {
        _class_call_check(this, OneOrMorePartsPart);
        var _this;
        _this = _super.call(this, type);
        _this.part = part;
        return _this;
    }
    _create_class(OneOrMorePartsPart, [
        {
            key: "getPart",
            value: function getPart() {
                return this.part;
            }
        },
        {
            key: "asString",
            value: function asString() {
                var partString = this.part.asString(), string = "".concat(partString).concat(plus);
                return string;
            }
        },
        {
            key: "parse",
            value: function parse(nodes, state, callback) {
                var parsed;
                var part = this.getPart(), partNodes = [], savedIndex = state.getSavedIndex();
                parsed = parsePart(part, partNodes, state, callback);
                if (parsed) {
                    push(nodes, partNodes);
                }
                if (!parsed) {
                    state.backtrack(savedIndex);
                }
                return parsed;
            }
        }
    ], [
        {
            key: "fromPart",
            value: function fromPart(part) {
                var type = _partTypes.OneOrMorePartsPartType, oneOrMorePartsPart = new OneOrMorePartsPart(type, part);
                return oneOrMorePartsPart;
            }
        }
    ]);
    return OneOrMorePartsPart;
}(_nonTerminal.default);
function parsePart(part, nodes, state, callback) {
    var parsed;
    if (callback !== null) {
        var oneOrMorePartsPartCallback = function() {
            var parsed = callback();
            if (!parsed) {
                parsed = parsePart(part, nodes, state, callback);
            }
            return parsed;
        };
        Object.assign(oneOrMorePartsPartCallback, {
            callback: callback,
            part: part
        });
        state.callbacks.push(oneOrMorePartsPartCallback);
        parsed = part.parse(nodes, state, oneOrMorePartsPartCallback);
        state.callbacks.pop();
    } else {
        parsed = part.parse(nodes, state, callback);
        if (parsed) {
            parsePart(part, nodes, state, callback);
        }
    }
    return parsed;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L25vblRlcm1pbmFsL29uZU9yTW9yZVBhcnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxQYXJ0IGZyb20gXCIuLi8uLi9wYXJ0L25vblRlcm1pbmFsXCI7XG5cbmltcG9ydCB7IE9uZU9yTW9yZVBhcnRzUGFydFR5cGUgfSBmcm9tIFwiLi4vLi4vcGFydFR5cGVzXCI7XG5cbmNvbnN0IHsgcHVzaCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IHBsdXMgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPbmVPck1vcmVQYXJ0c1BhcnQgZXh0ZW5kcyBOb25UZXJtaW5hbFBhcnQge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBwYXJ0KSB7XG4gICAgc3VwZXIodHlwZSk7XG5cbiAgICB0aGlzLnBhcnQgPSBwYXJ0O1xuICB9XG5cbiAgZ2V0UGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0O1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcGFydFN0cmluZyA9IHRoaXMucGFydC5hc1N0cmluZygpLFxuICAgICAgICAgIHN0cmluZyA9IGAke3BhcnRTdHJpbmd9JHtwbHVzfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgcGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjaykge1xuICAgIGxldCBwYXJzZWQ7XG5cbiAgICBjb25zdCBwYXJ0ID0gdGhpcy5nZXRQYXJ0KCksXG4gICAgICAgICAgcGFydE5vZGVzID0gW10sXG4gICAgICAgICAgc2F2ZWRJbmRleCA9IHN0YXRlLmdldFNhdmVkSW5kZXgoKTtcblxuICAgIHBhcnNlZCA9IHBhcnNlUGFydChwYXJ0LCBwYXJ0Tm9kZXMsIHN0YXRlLCBjYWxsYmFjayk7XG5cbiAgICBpZiAocGFyc2VkKSB7XG4gICAgICBwdXNoKG5vZGVzLCBwYXJ0Tm9kZXMpO1xuICAgIH1cblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBzdGF0ZS5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGFydChwYXJ0KSB7XG4gICAgY29uc3QgdHlwZSA9IE9uZU9yTW9yZVBhcnRzUGFydFR5cGUsXG4gICAgICAgICAgb25lT3JNb3JlUGFydHNQYXJ0ID0gbmV3IE9uZU9yTW9yZVBhcnRzUGFydCh0eXBlLCBwYXJ0KTtcblxuICAgIHJldHVybiBvbmVPck1vcmVQYXJ0c1BhcnQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJ0KHBhcnQsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spIHtcbiAgbGV0IHBhcnNlZDtcblxuICBpZiAoY2FsbGJhY2sgIT09IG51bGwpIHtcbiAgICBjb25zdCBvbmVPck1vcmVQYXJ0c1BhcnRDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgIGxldCBwYXJzZWQgPSBjYWxsYmFjaygpO1xuXG4gICAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgICBwYXJzZWQgPSBwYXJzZVBhcnQocGFydCwgbm9kZXMsIHN0YXRlLCBjYWxsYmFjayk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgfTtcblxuICAgIE9iamVjdC5hc3NpZ24ob25lT3JNb3JlUGFydHNQYXJ0Q2FsbGJhY2ssIHtcbiAgICAgIGNhbGxiYWNrLFxuICAgICAgcGFydFxuICAgIH0pO1xuXG4gICAgc3RhdGUuY2FsbGJhY2tzLnB1c2gob25lT3JNb3JlUGFydHNQYXJ0Q2FsbGJhY2spO1xuXG4gICAgcGFyc2VkID0gcGFydC5wYXJzZShub2Rlcywgc3RhdGUsIG9uZU9yTW9yZVBhcnRzUGFydENhbGxiYWNrKTtcblxuICAgIHN0YXRlLmNhbGxiYWNrcy5wb3AoKTtcblxuICB9IGVsc2Uge1xuICAgIHBhcnNlZCA9IHBhcnQucGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjayk7XG5cbiAgICBpZiAocGFyc2VkKSB7XG4gICAgICBwYXJzZVBhcnQocGFydCwgbm9kZXMsIHN0YXRlLCBjYWxsYmFjaylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFyc2VkO1xufVxuIl0sIm5hbWVzIjpbIk9uZU9yTW9yZVBhcnRzUGFydCIsInB1c2giLCJhcnJheVV0aWxpdGllcyIsInBsdXMiLCJzcGVjaWFsU3ltYm9scyIsInR5cGUiLCJwYXJ0IiwiZ2V0UGFydCIsImFzU3RyaW5nIiwicGFydFN0cmluZyIsInN0cmluZyIsInBhcnNlIiwibm9kZXMiLCJzdGF0ZSIsImNhbGxiYWNrIiwicGFyc2VkIiwicGFydE5vZGVzIiwic2F2ZWRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJwYXJzZVBhcnQiLCJiYWNrdHJhY2siLCJmcm9tUGFydCIsIk9uZU9yTW9yZVBhcnRzUGFydFR5cGUiLCJvbmVPck1vcmVQYXJ0c1BhcnQiLCJOb25UZXJtaW5hbFBhcnQiLCJvbmVPck1vcmVQYXJ0c1BhcnRDYWxsYmFjayIsIk9iamVjdCIsImFzc2lnbiIsImNhbGxiYWNrcyIsInBvcCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFZcUJBOzs7eUJBVlU7MkJBQ0E7a0VBRUg7eUJBRVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkMsSUFBTSxBQUFFQyxPQUFTQywwQkFBVEQsTUFDRixBQUFFRSxPQUFTQyw0QkFBVEQ7QUFFTyxJQUFBLEFBQU1ILG1DQThDbEIsQUE5Q1k7Y0FBTUE7K0JBQUFBO2FBQUFBLG1CQUNQSyxJQUFJLEVBQUVDLElBQUk7Z0NBREhOOztrQ0FFWEs7UUFFTixNQUFLQyxPQUFPQTs7O2tCQUpLTjs7WUFPbkJPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0Q7WUFDZDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxhQUFhLElBQUksQ0FBQ0gsS0FBS0UsWUFDdkJFLFNBQVMsQUFBQyxHQUFlUCxPQUFiTSxZQUFrQixPQUFMTjtnQkFFL0IsT0FBT087WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUTtnQkFDMUIsSUFBSUM7Z0JBRUosSUFBTVQsT0FBTyxJQUFJLENBQUNDLFdBQ1pTLFlBQVksRUFBRSxFQUNkQyxhQUFhSixNQUFNSztnQkFFekJILFNBQVNJLFVBQVViLE1BQU1VLFdBQVdILE9BQU9DO2dCQUUzQyxJQUFJQyxRQUFRO29CQUNWZCxLQUFLVyxPQUFPSTtnQkFDZDtnQkFFQSxJQUFJLENBQUNELFFBQVE7b0JBQ1hGLE1BQU1PLFVBQVVIO2dCQUNsQjtnQkFFQSxPQUFPRjtZQUNUOzs7O1lBRU9NLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNmLElBQUk7Z0JBQ2xCLElBQU1ELE9BQU9pQixtQ0FDUEMscUJBQXFCLElBeENWdkIsbUJBd0NpQ0ssTUFBTUM7Z0JBRXhELE9BQU9pQjtZQUNUOzs7V0EzQ21CdkI7RUFBMkJ3QjtBQThDaEQsU0FBU0wsVUFBVWIsSUFBSSxFQUFFTSxLQUFLLEVBQUVDLEtBQUssRUFBRUMsUUFBUTtJQUM3QyxJQUFJQztJQUVKLElBQUlELGFBQWEsTUFBTTtRQUNyQixJQUFNVyw2QkFBNkI7WUFDakMsSUFBSVYsU0FBU0Q7WUFFYixJQUFJLENBQUNDLFFBQVE7Z0JBQ1hBLFNBQVNJLFVBQVViLE1BQU1NLE9BQU9DLE9BQU9DO1lBQ3pDO1lBRUEsT0FBT0M7UUFDVDtRQUVBVyxPQUFPQyxPQUFPRiw0QkFBNEI7WUFDeENYLFVBQUFBO1lBQ0FSLE1BQUFBO1FBQ0Y7UUFFQU8sTUFBTWUsVUFBVTNCLEtBQUt3QjtRQUVyQlYsU0FBU1QsS0FBS0ssTUFBTUMsT0FBT0MsT0FBT1k7UUFFbENaLE1BQU1lLFVBQVVDO0lBRWxCLE9BQU87UUFDTGQsU0FBU1QsS0FBS0ssTUFBTUMsT0FBT0MsT0FBT0M7UUFFbEMsSUFBSUMsUUFBUTtZQUNWSSxVQUFVYixNQUFNTSxPQUFPQyxPQUFPQztRQUNoQztJQUNGO0lBRUEsT0FBT0M7QUFDVCJ9