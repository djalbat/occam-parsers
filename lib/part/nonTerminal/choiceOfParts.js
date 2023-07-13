"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ChoiceOfPartsPart;
    }
});
var _nonTerminal = /*#__PURE__*/ _interop_require_default(require("../../part/nonTerminal"));
var _parse = require("../../utilities/parse");
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
var ChoiceOfPartsPart = /*#__PURE__*/ function(NonTerminalPart) {
    _inherits(ChoiceOfPartsPart, NonTerminalPart);
    var _super = _create_super(ChoiceOfPartsPart);
    function ChoiceOfPartsPart(type, lookAhead, partChoices) {
        _class_call_check(this, ChoiceOfPartsPart);
        var _this;
        _this = _super.call(this, type, lookAhead);
        _this.partChoices = partChoices;
        return _this;
    }
    _create_class(ChoiceOfPartsPart, [
        {
            key: "getPartChoices",
            value: function getPartChoices() {
                return this.partChoices;
            }
        },
        {
            key: "getParts",
            value: function getParts() {
                var parts = this.partChoices.map(function(partChoice) {
                    var part = partChoice.getPart();
                    return part;
                });
                return parts;
            }
        },
        {
            key: "parse",
            value: function parse(nodes, state, callback, callAhead) {
                var parsed;
                parsed = this.partChoices.some(function(partChoice) {
                    var parsed;
                    var part = partChoice.getPart(), savedIndex = state.getSavedIndex(), precedence = partChoice.getPrecedence(), nodesLength = nodes.length;
                    if (precedence !== null) {
                        state.setPrecedence(precedence);
                    }
                    callback = callAhead === null ? null : function() {
                        var parsed;
                        parsed = callAhead();
                        return parsed;
                    };
                    parsed = (0, _parse.parsePart)(part, nodes, state, callback, callAhead);
                    if (!parsed) {
                        var start = nodesLength; ///
                        nodes.splice(start);
                        state.backtrack(savedIndex);
                    }
                    return parsed;
                });
                return parsed;
            }
        },
        {
            key: "asString",
            value: function asString() {
                var partChoicesString = this.partChoices.reduce(function(partChoicesString, partChoice) {
                    var partChoiceString = partChoice.asString();
                    if (partChoicesString === null) {
                        partChoicesString = partChoiceString;
                    } else {
                        partChoicesString = "".concat(partChoicesString, " | ").concat(partChoiceString);
                    }
                    return partChoicesString;
                }, null), string = "( ".concat(partChoicesString, " )");
                return string;
            }
        }
    ], [
        {
            key: "fromPartChoices",
            value: function fromPartChoices(partChoices) {
                var type = _partTypes.ChoiceOfPartsPartType, lookAhead = false, choiceOfPartsPart = new ChoiceOfPartsPart(type, lookAhead, partChoices);
                return choiceOfPartsPart;
            }
        }
    ]);
    return ChoiceOfPartsPart;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L25vblRlcm1pbmFsL2Nob2ljZU9mUGFydHMuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvbm9uVGVybWluYWxcIjtcblxuaW1wb3J0IHsgcGFyc2VQYXJ0IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9wYXJzZVwiO1xuaW1wb3J0IHsgQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlIH0gZnJvbSBcIi4uLy4uL3BhcnRUeXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaG9pY2VPZlBhcnRzUGFydCBleHRlbmRzIE5vblRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIGxvb2tBaGVhZCwgcGFydENob2ljZXMpIHtcbiAgICBzdXBlcih0eXBlLCBsb29rQWhlYWQpO1xuICAgIFxuICAgIHRoaXMucGFydENob2ljZXMgPSBwYXJ0Q2hvaWNlcztcbiAgfVxuICBcbiAgZ2V0UGFydENob2ljZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFydENob2ljZXM7XG4gIH1cblxuICBnZXRQYXJ0cygpIHtcbiAgICBjb25zdCBwYXJ0cyA9IHRoaXMucGFydENob2ljZXMubWFwKChwYXJ0Q2hvaWNlKSA9PiB7XG4gICAgICBjb25zdCBwYXJ0ID0gcGFydENob2ljZS5nZXRQYXJ0KCk7XG5cbiAgICAgIHJldHVybiBwYXJ0O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHBhcnRzO1xuICB9XG5cbiAgcGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIHBhcnNlZCA9IHRoaXMucGFydENob2ljZXMuc29tZSgocGFydENob2ljZSkgPT4ge1xuICAgICAgbGV0IHBhcnNlZDtcblxuICAgICAgY29uc3QgcGFydCA9IHBhcnRDaG9pY2UuZ2V0UGFydCgpLFxuICAgICAgICAgICAgc2F2ZWRJbmRleCA9IHN0YXRlLmdldFNhdmVkSW5kZXgoKSxcbiAgICAgICAgICAgIHByZWNlZGVuY2UgPSBwYXJ0Q2hvaWNlLmdldFByZWNlZGVuY2UoKSxcbiAgICAgICAgICAgIG5vZGVzTGVuZ3RoID0gbm9kZXMubGVuZ3RoO1xuXG4gICAgICBpZiAocHJlY2VkZW5jZSAhPT0gbnVsbCkge1xuICAgICAgICBzdGF0ZS5zZXRQcmVjZWRlbmNlKHByZWNlZGVuY2UpO1xuICAgICAgfVxuXG4gICAgICBjYWxsYmFjayA9IChjYWxsQWhlYWQgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgbnVsbCA6XG4gICAgICAgICAgICAgICAgICAgICAgKCkgPT4geyAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGFyc2VkO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWQgPSBjYWxsQWhlYWQoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICBwYXJzZWQgPSBwYXJzZVBhcnQocGFydCwgbm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKTtcblxuICAgICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBub2Rlc0xlbmd0aDsgIC8vL1xuXG4gICAgICAgIG5vZGVzLnNwbGljZShzdGFydCk7XG5cbiAgICAgICAgc3RhdGUuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGFyc2VkO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHBhcnNlZDtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHBhcnRDaG9pY2VzU3RyaW5nID0gdGhpcy5wYXJ0Q2hvaWNlcy5yZWR1Y2UoKHBhcnRDaG9pY2VzU3RyaW5nLCBwYXJ0Q2hvaWNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0Q2hvaWNlU3RyaW5nID0gcGFydENob2ljZS5hc1N0cmluZygpO1xuICAgIFxuICAgICAgICAgICAgaWYgKHBhcnRDaG9pY2VzU3RyaW5nID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIHBhcnRDaG9pY2VzU3RyaW5nID0gcGFydENob2ljZVN0cmluZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBhcnRDaG9pY2VzU3RyaW5nID0gYCR7cGFydENob2ljZXNTdHJpbmd9IHwgJHtwYXJ0Q2hvaWNlU3RyaW5nfWA7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICByZXR1cm4gcGFydENob2ljZXNTdHJpbmc7XG4gICAgICAgICAgfSwgbnVsbCksXG4gICAgICAgICAgc3RyaW5nID0gYCggJHtwYXJ0Q2hvaWNlc1N0cmluZ30gKWA7XG4gICAgXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGFydENob2ljZXMocGFydENob2ljZXMpIHtcbiAgICBjb25zdCB0eXBlID0gQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlLFxuICAgICAgICAgIGxvb2tBaGVhZCA9IGZhbHNlLFxuICAgICAgICAgIGNob2ljZU9mUGFydHNQYXJ0ID0gbmV3IENob2ljZU9mUGFydHNQYXJ0KHR5cGUsIGxvb2tBaGVhZCwgcGFydENob2ljZXMpO1xuXG4gICAgcmV0dXJuIGNob2ljZU9mUGFydHNQYXJ0O1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkNob2ljZU9mUGFydHNQYXJ0IiwidHlwZSIsImxvb2tBaGVhZCIsInBhcnRDaG9pY2VzIiwiZ2V0UGFydENob2ljZXMiLCJnZXRQYXJ0cyIsInBhcnRzIiwibWFwIiwicGFydENob2ljZSIsInBhcnQiLCJnZXRQYXJ0IiwicGFyc2UiLCJub2RlcyIsInN0YXRlIiwiY2FsbGJhY2siLCJjYWxsQWhlYWQiLCJwYXJzZWQiLCJzb21lIiwic2F2ZWRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJwcmVjZWRlbmNlIiwiZ2V0UHJlY2VkZW5jZSIsIm5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwic2V0UHJlY2VkZW5jZSIsInBhcnNlUGFydCIsInN0YXJ0Iiwic3BsaWNlIiwiYmFja3RyYWNrIiwiYXNTdHJpbmciLCJwYXJ0Q2hvaWNlc1N0cmluZyIsInJlZHVjZSIsInBhcnRDaG9pY2VTdHJpbmciLCJzdHJpbmciLCJmcm9tUGFydENob2ljZXMiLCJDaG9pY2VPZlBhcnRzUGFydFR5cGUiLCJjaG9pY2VPZlBhcnRzUGFydCIsIk5vblRlcm1pbmFsUGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7a0VBTE87cUJBRUY7eUJBQ1k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkIsSUFBQSxBQUFNQSxrQ0FBTjtjQUFNQTsrQkFBQUE7YUFBQUEsa0JBQ1BDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxXQUFXO2dDQURyQkg7O2tDQUVYQyxNQUFNQztRQUVaLE1BQUtDLFdBQVcsR0FBR0E7OztrQkFKRkg7O1lBT25CSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELFdBQVc7WUFDekI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsUUFBUSxJQUFJLENBQUNILFdBQVcsQ0FBQ0ksR0FBRyxDQUFDLFNBQUNDO29CQUNsQyxJQUFNQyxPQUFPRCxXQUFXRSxPQUFPO29CQUUvQixPQUFPRDtnQkFDVDtnQkFFQSxPQUFPSDtZQUNUOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLFNBQVM7Z0JBQ3JDLElBQUlDO2dCQUVKQSxTQUFTLElBQUksQ0FBQ2IsV0FBVyxDQUFDYyxJQUFJLENBQUMsU0FBQ1Q7b0JBQzlCLElBQUlRO29CQUVKLElBQU1QLE9BQU9ELFdBQVdFLE9BQU8sSUFDekJRLGFBQWFMLE1BQU1NLGFBQWEsSUFDaENDLGFBQWFaLFdBQVdhLGFBQWEsSUFDckNDLGNBQWNWLE1BQU1XLE1BQU07b0JBRWhDLElBQUlILGVBQWUsTUFBTTt3QkFDdkJQLE1BQU1XLGFBQWEsQ0FBQ0o7b0JBQ3RCO29CQUVBTixXQUFXLEFBQUNDLGNBQWMsT0FDWixPQUNFO3dCQUNFLElBQUlDO3dCQUVKQSxTQUFTRDt3QkFFVCxPQUFPQztvQkFDVDtvQkFFaEJBLFNBQVNTLElBQUFBLGdCQUFTLEVBQUNoQixNQUFNRyxPQUFPQyxPQUFPQyxVQUFVQztvQkFFakQsSUFBSSxDQUFDQyxRQUFRO3dCQUNYLElBQU1VLFFBQVFKLGFBQWMsR0FBRzt3QkFFL0JWLE1BQU1lLE1BQU0sQ0FBQ0Q7d0JBRWJiLE1BQU1lLFNBQVMsQ0FBQ1Y7b0JBQ2xCO29CQUVBLE9BQU9GO2dCQUNUO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBYSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsb0JBQW9CLElBQUksQ0FBQzNCLFdBQVcsQ0FBQzRCLE1BQU0sQ0FBQyxTQUFDRCxtQkFBbUJ0QjtvQkFDOUQsSUFBTXdCLG1CQUFtQnhCLFdBQVdxQixRQUFRO29CQUU1QyxJQUFJQyxzQkFBc0IsTUFBTTt3QkFDOUJBLG9CQUFvQkU7b0JBQ3RCLE9BQU87d0JBQ0xGLG9CQUFvQixBQUFDLEdBQXlCRSxPQUF2QkYsbUJBQWtCLE9BQXNCLE9BQWpCRTtvQkFDaEQ7b0JBRUEsT0FBT0Y7Z0JBQ1QsR0FBRyxPQUNIRyxTQUFTLEFBQUMsS0FBc0IsT0FBbEJILG1CQUFrQjtnQkFFdEMsT0FBT0c7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxnQkFBZ0IvQixXQUFXO2dCQUNoQyxJQUFNRixPQUFPa0MsZ0NBQXFCLEVBQzVCakMsWUFBWSxPQUNaa0Msb0JBQW9CLElBbEZUcEMsa0JBa0YrQkMsTUFBTUMsV0FBV0M7Z0JBRWpFLE9BQU9pQztZQUNUOzs7V0FyRm1CcEM7RUFBMEJxQyxvQkFBZSJ9