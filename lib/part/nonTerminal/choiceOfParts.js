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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L25vblRlcm1pbmFsL2Nob2ljZU9mUGFydHMuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvbm9uVGVybWluYWxcIjtcblxuaW1wb3J0IHsgcGFyc2VQYXJ0IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9wYXJzZVwiO1xuaW1wb3J0IHsgQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlIH0gZnJvbSBcIi4uLy4uL3BhcnRUeXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaG9pY2VPZlBhcnRzUGFydCBleHRlbmRzIE5vblRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIGxvb2tBaGVhZCwgcGFydENob2ljZXMpIHtcbiAgICBzdXBlcih0eXBlLCBsb29rQWhlYWQpO1xuICAgIFxuICAgIHRoaXMucGFydENob2ljZXMgPSBwYXJ0Q2hvaWNlcztcbiAgfVxuICBcbiAgZ2V0UGFydENob2ljZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFydENob2ljZXM7XG4gIH1cblxuICBwYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgcGFyc2VkID0gdGhpcy5wYXJ0Q2hvaWNlcy5zb21lKChwYXJ0Q2hvaWNlKSA9PiB7XG4gICAgICBsZXQgcGFyc2VkO1xuXG4gICAgICBjb25zdCBwYXJ0ID0gcGFydENob2ljZS5nZXRQYXJ0KCksXG4gICAgICAgICAgICBzYXZlZEluZGV4ID0gc3RhdGUuZ2V0U2F2ZWRJbmRleCgpLFxuICAgICAgICAgICAgcHJlY2VkZW5jZSA9IHBhcnRDaG9pY2UuZ2V0UHJlY2VkZW5jZSgpLFxuICAgICAgICAgICAgbm9kZXNMZW5ndGggPSBub2Rlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChwcmVjZWRlbmNlICE9PSBudWxsKSB7XG4gICAgICAgIHN0YXRlLnNldFByZWNlZGVuY2UocHJlY2VkZW5jZSk7XG4gICAgICB9XG5cbiAgICAgIGNhbGxiYWNrID0gKGNhbGxBaGVhZCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICBudWxsIDpcbiAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXJzZWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZCA9IGNhbGxBaGVhZCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgIHBhcnNlZCA9IHBhcnNlUGFydChwYXJ0LCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpO1xuXG4gICAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgICBjb25zdCBzdGFydCA9IG5vZGVzTGVuZ3RoOyAgLy8vXG5cbiAgICAgICAgbm9kZXMuc3BsaWNlKHN0YXJ0KTtcblxuICAgICAgICBzdGF0ZS5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcGFydENob2ljZXNTdHJpbmcgPSB0aGlzLnBhcnRDaG9pY2VzLnJlZHVjZSgocGFydENob2ljZXNTdHJpbmcsIHBhcnRDaG9pY2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnRDaG9pY2VTdHJpbmcgPSBwYXJ0Q2hvaWNlLmFzU3RyaW5nKCk7XG4gICAgXG4gICAgICAgICAgICBpZiAocGFydENob2ljZXNTdHJpbmcgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgcGFydENob2ljZXNTdHJpbmcgPSBwYXJ0Q2hvaWNlU3RyaW5nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGFydENob2ljZXNTdHJpbmcgPSBgJHtwYXJ0Q2hvaWNlc1N0cmluZ30gfCAke3BhcnRDaG9pY2VTdHJpbmd9YDtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIHJldHVybiBwYXJ0Q2hvaWNlc1N0cmluZztcbiAgICAgICAgICB9LCBudWxsKSxcbiAgICAgICAgICBzdHJpbmcgPSBgKCAke3BhcnRDaG9pY2VzU3RyaW5nfSApYDtcbiAgICBcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYXJ0Q2hvaWNlcyhwYXJ0Q2hvaWNlcykge1xuICAgIGNvbnN0IHR5cGUgPSBDaG9pY2VPZlBhcnRzUGFydFR5cGUsXG4gICAgICAgICAgbG9va0FoZWFkID0gZmFsc2UsXG4gICAgICAgICAgY2hvaWNlT2ZQYXJ0c1BhcnQgPSBuZXcgQ2hvaWNlT2ZQYXJ0c1BhcnQodHlwZSwgbG9va0FoZWFkLCBwYXJ0Q2hvaWNlcyk7XG5cbiAgICByZXR1cm4gY2hvaWNlT2ZQYXJ0c1BhcnQ7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiQ2hvaWNlT2ZQYXJ0c1BhcnQiLCJ0eXBlIiwibG9va0FoZWFkIiwicGFydENob2ljZXMiLCJnZXRQYXJ0Q2hvaWNlcyIsInBhcnNlIiwibm9kZXMiLCJzdGF0ZSIsImNhbGxiYWNrIiwiY2FsbEFoZWFkIiwicGFyc2VkIiwic29tZSIsInBhcnRDaG9pY2UiLCJwYXJ0IiwiZ2V0UGFydCIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4IiwicHJlY2VkZW5jZSIsImdldFByZWNlZGVuY2UiLCJub2Rlc0xlbmd0aCIsImxlbmd0aCIsInNldFByZWNlZGVuY2UiLCJwYXJzZVBhcnQiLCJzdGFydCIsInNwbGljZSIsImJhY2t0cmFjayIsImFzU3RyaW5nIiwicGFydENob2ljZXNTdHJpbmciLCJyZWR1Y2UiLCJwYXJ0Q2hvaWNlU3RyaW5nIiwic3RyaW5nIiwiZnJvbVBhcnRDaG9pY2VzIiwiQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlIiwiY2hvaWNlT2ZQYXJ0c1BhcnQiLCJOb25UZXJtaW5hbFBhcnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7O2tFQUxPO3FCQUVGO3lCQUNZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZCLElBQUEsQUFBTUEsa0NBQU47Y0FBTUE7K0JBQUFBO2FBQUFBLGtCQUNQQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsV0FBVztnQ0FEckJIOztrQ0FFWEMsTUFBTUM7UUFFWixNQUFLQyxXQUFXLEdBQUdBOzs7a0JBSkZIOztZQU9uQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxXQUFXO1lBQ3pCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLFNBQVM7Z0JBQ3JDLElBQUlDO2dCQUVKQSxTQUFTLElBQUksQ0FBQ1AsV0FBVyxDQUFDUSxJQUFJLENBQUMsU0FBQ0M7b0JBQzlCLElBQUlGO29CQUVKLElBQU1HLE9BQU9ELFdBQVdFLE9BQU8sSUFDekJDLGFBQWFSLE1BQU1TLGFBQWEsSUFDaENDLGFBQWFMLFdBQVdNLGFBQWEsSUFDckNDLGNBQWNiLE1BQU1jLE1BQU07b0JBRWhDLElBQUlILGVBQWUsTUFBTTt3QkFDdkJWLE1BQU1jLGFBQWEsQ0FBQ0o7b0JBQ3RCO29CQUVBVCxXQUFXLEFBQUNDLGNBQWMsT0FDWixPQUNFO3dCQUNFLElBQUlDO3dCQUVKQSxTQUFTRDt3QkFFVCxPQUFPQztvQkFDVDtvQkFFaEJBLFNBQVNZLElBQUFBLGdCQUFTLEVBQUNULE1BQU1QLE9BQU9DLE9BQU9DLFVBQVVDO29CQUVqRCxJQUFJLENBQUNDLFFBQVE7d0JBQ1gsSUFBTWEsUUFBUUosYUFBYyxHQUFHO3dCQUUvQmIsTUFBTWtCLE1BQU0sQ0FBQ0Q7d0JBRWJoQixNQUFNa0IsU0FBUyxDQUFDVjtvQkFDbEI7b0JBRUEsT0FBT0w7Z0JBQ1Q7Z0JBRUEsT0FBT0E7WUFDVDs7O1lBRUFnQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsb0JBQW9CLElBQUksQ0FBQ3hCLFdBQVcsQ0FBQ3lCLE1BQU0sQ0FBQyxTQUFDRCxtQkFBbUJmO29CQUM5RCxJQUFNaUIsbUJBQW1CakIsV0FBV2MsUUFBUTtvQkFFNUMsSUFBSUMsc0JBQXNCLE1BQU07d0JBQzlCQSxvQkFBb0JFO29CQUN0QixPQUFPO3dCQUNMRixvQkFBb0IsQUFBQyxHQUF5QkUsT0FBdkJGLG1CQUFrQixPQUFzQixPQUFqQkU7b0JBQ2hEO29CQUVBLE9BQU9GO2dCQUNULEdBQUcsT0FDSEcsU0FBUyxBQUFDLEtBQXNCLE9BQWxCSCxtQkFBa0I7Z0JBRXRDLE9BQU9HO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsZ0JBQWdCNUIsV0FBVztnQkFDaEMsSUFBTUYsT0FBTytCLGdDQUFxQixFQUM1QjlCLFlBQVksT0FDWitCLG9CQUFvQixJQXhFVGpDLGtCQXdFK0JDLE1BQU1DLFdBQVdDO2dCQUVqRSxPQUFPOEI7WUFDVDs7O1dBM0VtQmpDO0VBQTBCa0Msb0JBQWUifQ==