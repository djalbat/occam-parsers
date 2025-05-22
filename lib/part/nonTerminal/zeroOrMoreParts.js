"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get default () {
        return ZeroOrMorePartsPart;
    },
    get parseZeroOrMorePartsPart () {
        return parseZeroOrMorePartsPart;
    }
});
var _occamlexers = require("occam-lexers");
var _nonTerminal = /*#__PURE__*/ _interop_require_default(require("../../part/nonTerminal"));
var _partTypes = require("../../partTypes");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var asterisk = _occamlexers.specialSymbols.asterisk;
var ZeroOrMorePartsPart = /*#__PURE__*/ function(NonTerminalPart) {
    _inherits(ZeroOrMorePartsPart, NonTerminalPart);
    function ZeroOrMorePartsPart(type, callAhead, part) {
        _class_call_check(this, ZeroOrMorePartsPart);
        var _this;
        _this = _call_super(this, ZeroOrMorePartsPart, [
            type,
            callAhead
        ]);
        _this.part = part;
        return _this;
    }
    _create_class(ZeroOrMorePartsPart, [
        {
            key: "getPart",
            value: function getPart() {
                return this.part;
            }
        },
        {
            key: "parse",
            value: function parse(nodes, state, callback, callAhead) {
                var parsed;
                var savedIndex = state.getSavedIndex(), nodesLength = nodes.length;
                parsed = parseZeroOrMorePartsPart(this.part, nodes, state, callback, callAhead);
                if (!parsed) {
                    var start = nodesLength; ///
                    nodes.splice(start);
                    state.backtrack(savedIndex);
                }
                return parsed;
            }
        },
        {
            key: "asString",
            value: function asString() {
                var partString = this.part.asString(), string = "".concat(partString).concat(asterisk);
                return string;
            }
        }
    ], [
        {
            key: "fromPart",
            value: function fromPart(part) {
                var type = _partTypes.ZeroOrMorePartsPartType, callAhead = false, zeroOrMorePartsPart = new ZeroOrMorePartsPart(type, callAhead, part);
                return zeroOrMorePartsPart;
            }
        }
    ]);
    return ZeroOrMorePartsPart;
}(_nonTerminal.default);
function parseZeroOrMorePartsPart(part, nodes, state, callback, callAhead) {
    var parsed;
    if (callAhead === null) {
        parsed = part.parse(nodes, state, callback, callAhead);
        if (parsed) {
            parseZeroOrMorePartsPart(part, nodes, state, callback, callAhead);
        }
        parsed = true;
    } else {
        parsed = callAhead();
        if (!parsed) {
            parsed = part.parse(nodes, state, callback, function() {
                var parsed;
                parsed = parseZeroOrMorePartsPart(part, nodes, state, callback, callAhead);
                return parsed;
            });
        }
    }
    return parsed;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L25vblRlcm1pbmFsL3plcm9Pck1vcmVQYXJ0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvbm9uVGVybWluYWxcIjtcblxuaW1wb3J0IHsgWmVyb09yTW9yZVBhcnRzUGFydFR5cGUgfSBmcm9tIFwiLi4vLi4vcGFydFR5cGVzXCI7XG5cblxuY29uc3QgeyBhc3RlcmlzayB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFplcm9Pck1vcmVQYXJ0c1BhcnQgZXh0ZW5kcyBOb25UZXJtaW5hbFBhcnQge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBjYWxsQWhlYWQsIHBhcnQpIHtcbiAgICBzdXBlcih0eXBlLCBjYWxsQWhlYWQpO1xuXG4gICAgdGhpcy5wYXJ0ID0gcGFydDtcbiAgfVxuXG4gIGdldFBhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFydDtcbiAgfVxuXG4gIHBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCkge1xuICAgIGxldCBwYXJzZWQ7XG5cbiAgICBjb25zdCBzYXZlZEluZGV4ID0gc3RhdGUuZ2V0U2F2ZWRJbmRleCgpLFxuICAgICAgICAgIG5vZGVzTGVuZ3RoID0gbm9kZXMubGVuZ3RoO1xuXG4gICAgcGFyc2VkID0gcGFyc2VaZXJvT3JNb3JlUGFydHNQYXJ0KHRoaXMucGFydCwgbm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKTtcblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IG5vZGVzTGVuZ3RoOyAgLy8vXG5cbiAgICAgIG5vZGVzLnNwbGljZShzdGFydCk7XG5cbiAgICAgIHN0YXRlLmJhY2t0cmFjayhzYXZlZEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcGFydFN0cmluZyA9IHRoaXMucGFydC5hc1N0cmluZygpLFxuICAgICAgICAgIHN0cmluZyA9IGAke3BhcnRTdHJpbmd9JHthc3Rlcmlza31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGFydChwYXJ0KSB7XG4gICAgY29uc3QgdHlwZSA9IFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlLFxuICAgICAgICAgIGNhbGxBaGVhZCA9IGZhbHNlLFxuICAgICAgICAgIHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBuZXcgWmVyb09yTW9yZVBhcnRzUGFydCh0eXBlLCBjYWxsQWhlYWQsIHBhcnQpO1xuXG4gICAgcmV0dXJuIHplcm9Pck1vcmVQYXJ0c1BhcnQ7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlWmVyb09yTW9yZVBhcnRzUGFydChwYXJ0LCBub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpIHtcbiAgbGV0IHBhcnNlZDtcblxuICBpZiAoY2FsbEFoZWFkID09PSBudWxsKSB7XG4gICAgcGFyc2VkID0gcGFydC5wYXJzZShub2Rlcywgc3RhdGUsIGNhbGxiYWNrLCBjYWxsQWhlYWQpO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgcGFyc2VaZXJvT3JNb3JlUGFydHNQYXJ0KHBhcnQsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssIGNhbGxBaGVhZCk7XG4gICAgfVxuXG4gICAgcGFyc2VkID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBwYXJzZWQgPSBjYWxsQWhlYWQoKTtcblxuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICBwYXJzZWQgPSBwYXJ0LnBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2ssICgpID0+IHtcbiAgICAgICAgbGV0IHBhcnNlZDtcblxuICAgICAgICBwYXJzZWQgPSBwYXJzZVplcm9Pck1vcmVQYXJ0c1BhcnQocGFydCwgbm9kZXMsIHN0YXRlLCBjYWxsYmFjaywgY2FsbEFoZWFkKTtcblxuICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn1cbiJdLCJuYW1lcyI6WyJaZXJvT3JNb3JlUGFydHNQYXJ0IiwicGFyc2VaZXJvT3JNb3JlUGFydHNQYXJ0IiwiYXN0ZXJpc2siLCJzcGVjaWFsU3ltYm9scyIsInR5cGUiLCJjYWxsQWhlYWQiLCJwYXJ0IiwiZ2V0UGFydCIsInBhcnNlIiwibm9kZXMiLCJzdGF0ZSIsImNhbGxiYWNrIiwicGFyc2VkIiwic2F2ZWRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJub2Rlc0xlbmd0aCIsImxlbmd0aCIsInN0YXJ0Iiwic3BsaWNlIiwiYmFja3RyYWNrIiwiYXNTdHJpbmciLCJwYXJ0U3RyaW5nIiwic3RyaW5nIiwiZnJvbVBhcnQiLCJaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZSIsInplcm9Pck1vcmVQYXJ0c1BhcnQiLCJOb25UZXJtaW5hbFBhcnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7ZUFXcUJBOztRQThDTEM7ZUFBQUE7OzsyQkF2RGU7a0VBRUg7eUJBRVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHeEMsSUFBTSxBQUFFQyxXQUFhQywyQkFBYyxDQUEzQkQ7QUFFTyxJQUFBLEFBQU1GLG9DQUFOO2NBQU1BO2FBQUFBLG9CQUNQSSxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsSUFBSTtnQ0FEZE47O2dCQUVqQixrQkFGaUJBO1lBRVhJO1lBQU1DOztRQUVaLE1BQUtDLElBQUksR0FBR0E7OztrQkFKS047O1lBT25CTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELElBQUk7WUFDbEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRU4sU0FBUztnQkFDckMsSUFBSU87Z0JBRUosSUFBTUMsYUFBYUgsTUFBTUksYUFBYSxJQUNoQ0MsY0FBY04sTUFBTU8sTUFBTTtnQkFFaENKLFNBQVNYLHlCQUF5QixJQUFJLENBQUNLLElBQUksRUFBRUcsT0FBT0MsT0FBT0MsVUFBVU47Z0JBRXJFLElBQUksQ0FBQ08sUUFBUTtvQkFDWCxJQUFNSyxRQUFRRixhQUFjLEdBQUc7b0JBRS9CTixNQUFNUyxNQUFNLENBQUNEO29CQUViUCxNQUFNUyxTQUFTLENBQUNOO2dCQUNsQjtnQkFFQSxPQUFPRDtZQUNUOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGFBQWEsSUFBSSxDQUFDZixJQUFJLENBQUNjLFFBQVEsSUFDL0JFLFNBQVMsQUFBQyxHQUFlcEIsT0FBYm1CLFlBQXNCLE9BQVRuQjtnQkFFL0IsT0FBT29CO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU2pCLElBQUk7Z0JBQ2xCLElBQU1GLE9BQU9vQixrQ0FBdUIsRUFDOUJuQixZQUFZLE9BQ1pvQixzQkFBc0IsSUF4Q1h6QixvQkF3Q21DSSxNQUFNQyxXQUFXQztnQkFFckUsT0FBT21CO1lBQ1Q7OztXQTNDbUJ6QjtFQUE0QjBCLG9CQUFlO0FBOEN6RCxTQUFTekIseUJBQXlCSyxJQUFJLEVBQUVHLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVOLFNBQVM7SUFDOUUsSUFBSU87SUFFSixJQUFJUCxjQUFjLE1BQU07UUFDdEJPLFNBQVNOLEtBQUtFLEtBQUssQ0FBQ0MsT0FBT0MsT0FBT0MsVUFBVU47UUFFNUMsSUFBSU8sUUFBUTtZQUNWWCx5QkFBeUJLLE1BQU1HLE9BQU9DLE9BQU9DLFVBQVVOO1FBQ3pEO1FBRUFPLFNBQVM7SUFDWCxPQUFPO1FBQ0xBLFNBQVNQO1FBRVQsSUFBSSxDQUFDTyxRQUFRO1lBQ1hBLFNBQVNOLEtBQUtFLEtBQUssQ0FBQ0MsT0FBT0MsT0FBT0MsVUFBVTtnQkFDMUMsSUFBSUM7Z0JBRUpBLFNBQVNYLHlCQUF5QkssTUFBTUcsT0FBT0MsT0FBT0MsVUFBVU47Z0JBRWhFLE9BQU9PO1lBQ1Q7UUFDRjtJQUNGO0lBRUEsT0FBT0E7QUFDVCJ9