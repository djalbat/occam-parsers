"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SequenceOfPartsPart;
    }
});
var _nonTerminal = /*#__PURE__*/ _interop_require_default(require("../../part/nonTerminal"));
var _array = require("../../utilities/array");
var _lookAhead = require("../../utilities/lookAhead");
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
var SequenceOfPartsPart = /*#__PURE__*/ function(NonTerminalPart) {
    _inherits(SequenceOfPartsPart, NonTerminalPart);
    var _super = _create_super(SequenceOfPartsPart);
    function SequenceOfPartsPart(parts) {
        _class_call_check(this, SequenceOfPartsPart);
        var _this;
        var type = _partTypes.SequenceOfPartsPartType; ///
        _this = _super.call(this, type);
        _this.parts = parts;
        return _this;
    }
    _create_class(SequenceOfPartsPart, [
        {
            key: "getParts",
            value: function getParts() {
                return this.parts;
            }
        },
        {
            key: "parse",
            value: function parse(nodes, state, callback) {
                var parsed;
                var savedIndex = state.getSavedIndex(), partsNodes = [], index = 0;
                parsed = (0, _lookAhead.parseParts)(this.parts, partsNodes, index, state, callback);
                if (parsed) {
                    (0, _array.push)(nodes, partsNodes);
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
                var partsString = this.parts.reduce(function(partsString, part) {
                    var partString = part.asString();
                    if (partsString === null) {
                        partsString = partString;
                    } else {
                        partsString = "".concat(partsString, " ").concat(partString);
                    }
                    return partsString;
                }, null), string = "( ".concat(partsString, " )");
                return string;
            }
        },
        {
            key: "clone",
            value: function clone() {
                var parts = this.parts.map(function(part) {
                    return part.clone();
                }), sequenceOfPartsPart = new SequenceOfPartsPart(parts);
                return sequenceOfPartsPart;
            }
        }
    ], [
        {
            key: "fromNodes",
            value: function fromNodes(nodes) {
                var allButFirstAndLastNodes = (0, _array.allButFirstAndLast)(nodes);
                nodes = allButFirstAndLastNodes; ///
                var lookAhead = false, parts = nodes.map(function(node) {
                    var part = node.generatePart(lookAhead);
                    return part;
                }), sequenceOfPartsPart = new SequenceOfPartsPart(parts);
                return sequenceOfPartsPart;
            }
        }
    ]);
    return SequenceOfPartsPart;
}(_nonTerminal.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L25vblRlcm1pbmFsL3NlcXVlbmNlT2ZQYXJ0cy5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsUGFydCBmcm9tIFwiLi4vLi4vcGFydC9ub25UZXJtaW5hbFwiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgcGFyc2VQYXJ0cyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbG9va0FoZWFkXCI7XG5pbXBvcnQgeyBhbGxCdXRGaXJzdEFuZExhc3QgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBTZXF1ZW5jZU9mUGFydHNQYXJ0VHlwZSB9IGZyb20gXCIuLi8uLi9wYXJ0VHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VxdWVuY2VPZlBhcnRzUGFydCBleHRlbmRzIE5vblRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzKSB7XG4gICAgY29uc3QgdHlwZSA9IFNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlOyAvLy9cblxuICAgIHN1cGVyKHR5cGUpO1xuXG4gICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xuICB9XG5cbiAgZ2V0UGFydHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFydHM7XG4gIH1cblxuICBwYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrKSB7XG4gICAgbGV0IHBhcnNlZDtcblxuICAgIGNvbnN0IHNhdmVkSW5kZXggPSBzdGF0ZS5nZXRTYXZlZEluZGV4KCksXG4gICAgICAgICAgcGFydHNOb2RlcyA9IFtdLFxuICAgICAgICAgIGluZGV4ID0gMDtcblxuICAgIHBhcnNlZCA9IHBhcnNlUGFydHModGhpcy5wYXJ0cywgcGFydHNOb2RlcywgaW5kZXgsIHN0YXRlLCBjYWxsYmFjayk7XG5cbiAgICBpZiAocGFyc2VkKSB7XG4gICAgICBwdXNoKG5vZGVzLCBwYXJ0c05vZGVzKTtcbiAgICB9XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgc3RhdGUuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBwYXJ0c1N0cmluZyA9IHRoaXMucGFydHMucmVkdWNlKChwYXJ0c1N0cmluZywgcGFydCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFydFN0cmluZyA9IHBhcnQuYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgaWYgKHBhcnRzU3RyaW5nID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gcGFydFN0cmluZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gYCR7cGFydHNTdHJpbmd9ICR7cGFydFN0cmluZ31gO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcGFydHNTdHJpbmc7XG4gICAgICAgICAgfSwgbnVsbCksXG4gICAgICAgICAgc3RyaW5nID0gYCggJHtwYXJ0c1N0cmluZ30gKWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgcGFydHMgPSB0aGlzLnBhcnRzLm1hcCgocGFydCkgPT4gcGFydC5jbG9uZSgpKSxcbiAgICAgICAgICBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gbmV3IFNlcXVlbmNlT2ZQYXJ0c1BhcnQocGFydHMpO1xuXG4gICAgcmV0dXJuIHNlcXVlbmNlT2ZQYXJ0c1BhcnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVzKG5vZGVzKSB7XG4gICAgY29uc3QgYWxsQnV0Rmlyc3RBbmRMYXN0Tm9kZXMgPSBhbGxCdXRGaXJzdEFuZExhc3Qobm9kZXMpO1xuXG4gICAgbm9kZXMgPSBhbGxCdXRGaXJzdEFuZExhc3ROb2RlczsgIC8vL1xuXG4gICAgY29uc3QgbG9va0FoZWFkID0gZmFsc2UsXG4gICAgICAgICAgcGFydHMgPSBub2Rlcy5tYXAoKG5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnQgPSBub2RlLmdlbmVyYXRlUGFydChsb29rQWhlYWQpO1xuXG4gICAgICAgICAgICByZXR1cm4gcGFydDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gbmV3IFNlcXVlbmNlT2ZQYXJ0c1BhcnQocGFydHMpO1xuXG4gICAgcmV0dXJuIHNlcXVlbmNlT2ZQYXJ0c1BhcnQ7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiU2VxdWVuY2VPZlBhcnRzUGFydCIsInBhcnRzIiwidHlwZSIsIlNlcXVlbmNlT2ZQYXJ0c1BhcnRUeXBlIiwiZ2V0UGFydHMiLCJwYXJzZSIsIm5vZGVzIiwic3RhdGUiLCJjYWxsYmFjayIsInBhcnNlZCIsInNhdmVkSW5kZXgiLCJnZXRTYXZlZEluZGV4IiwicGFydHNOb2RlcyIsImluZGV4IiwicGFyc2VQYXJ0cyIsInB1c2giLCJiYWNrdHJhY2siLCJhc1N0cmluZyIsInBhcnRzU3RyaW5nIiwicmVkdWNlIiwicGFydCIsInBhcnRTdHJpbmciLCJzdHJpbmciLCJjbG9uZSIsIm1hcCIsInNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJmcm9tTm9kZXMiLCJhbGxCdXRGaXJzdEFuZExhc3ROb2RlcyIsImFsbEJ1dEZpcnN0QW5kTGFzdCIsImxvb2tBaGVhZCIsIm5vZGUiLCJnZW5lcmF0ZVBhcnQiLCJOb25UZXJtaW5hbFBhcnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7O2tFQVBPO3FCQUVQO3lCQUNNO3lCQUVhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpCLElBQUEsQUFBTUEsb0NBQU47Y0FBTUE7K0JBQUFBO2FBQUFBLG9CQUNQQyxLQUFLO2dDQURFRDs7UUFFakIsSUFBTUUsT0FBT0Msa0NBQXVCLEVBQUUsR0FBRztrQ0FFbkNEO1FBRU4sTUFBS0QsS0FBSyxHQUFHQTs7O2tCQU5JRDs7WUFTbkJJLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXO2dCQUNULE9BQU8sSUFBSSxDQUFDSCxLQUFLO1lBQ25COzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUU7Z0JBQzVCLElBQUlDO2dCQUVKLElBQU1DLGFBQWFILE1BQU1JLGFBQWEsSUFDaENDLGFBQWEsRUFBRSxFQUNmQyxRQUFRO2dCQUVkSixTQUFTSyxJQUFBQSxxQkFBVSxFQUFDLElBQUksQ0FBQ2IsS0FBSyxFQUFFVyxZQUFZQyxPQUFPTixPQUFPQztnQkFFMUQsSUFBSUMsUUFBUTtvQkFDVk0sSUFBQUEsV0FBSSxFQUFDVCxPQUFPTTtnQkFDZCxDQUFDO2dCQUVELElBQUksQ0FBQ0gsUUFBUTtvQkFDWEYsTUFBTVMsU0FBUyxDQUFDTjtnQkFDbEIsQ0FBQztnQkFFRCxPQUFPRDtZQUNUOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVc7Z0JBQ1QsSUFBTUMsY0FBYyxJQUFJLENBQUNqQixLQUFLLENBQUNrQixNQUFNLENBQUMsU0FBQ0QsYUFBYUUsTUFBUztvQkFDckQsSUFBTUMsYUFBYUQsS0FBS0gsUUFBUTtvQkFFaEMsSUFBSUMsZ0JBQWdCLElBQUksRUFBRTt3QkFDeEJBLGNBQWNHO29CQUNoQixPQUFPO3dCQUNMSCxjQUFjLEFBQUMsR0FBaUJHLE9BQWZILGFBQVksS0FBYyxPQUFYRztvQkFDbEMsQ0FBQztvQkFFRCxPQUFPSDtnQkFDVCxHQUFHLElBQUksR0FDUEksU0FBUyxBQUFDLEtBQWdCLE9BQVpKLGFBQVk7Z0JBRWhDLE9BQU9JO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUTtnQkFDTixJQUFNdEIsUUFBUSxJQUFJLENBQUNBLEtBQUssQ0FBQ3VCLEdBQUcsQ0FBQyxTQUFDSjsyQkFBU0EsS0FBS0csS0FBSztvQkFDM0NFLHNCQUFzQixJQXBEWHpCLG9CQW9EbUNDO2dCQUVwRCxPQUFPd0I7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxVQUFVcEIsS0FBSyxFQUFFO2dCQUN0QixJQUFNcUIsMEJBQTBCQyxJQUFBQSx5QkFBa0IsRUFBQ3RCO2dCQUVuREEsUUFBUXFCLHlCQUEwQixHQUFHO2dCQUVyQyxJQUFNRSxZQUFZLEtBQUssRUFDakI1QixRQUFRSyxNQUFNa0IsR0FBRyxDQUFDLFNBQUNNLE1BQVM7b0JBQzFCLElBQU1WLE9BQU9VLEtBQUtDLFlBQVksQ0FBQ0Y7b0JBRS9CLE9BQU9UO2dCQUNULElBQ0FLLHNCQUFzQixJQXBFWHpCLG9CQW9FbUNDO2dCQUVwRCxPQUFPd0I7WUFDVDs7O1dBdkVtQnpCO0VBQTRCZ0Msb0JBQWUifQ==