"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
var _nonTerminal = _interopRequireDefault(require("../../part/nonTerminal"));
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
function _get(target1, property1, receiver1) {
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
    return _get(target1, property1, receiver1 || target1);
}
function _getPrototypeOf(o1) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o1);
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
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
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
var questionMark = _occamLexers.specialSymbols.questionMark;
var OptionalPartPart = /*#__PURE__*/ function(NonTerminalPart) {
    _inherits(OptionalPartPart, NonTerminalPart);
    var _super = _createSuper(OptionalPartPart);
    function OptionalPartPart(part) {
        _classCallCheck(this, OptionalPartPart);
        var _this;
        var type = _partTypes.OptionalPartPartType; ///
        _this = _super.call(this, type);
        _this.part = part;
        return _this;
    }
    _createClass(OptionalPartPart, [
        {
            key: "getPart",
            value: function getPart() {
                return this.part;
            }
        },
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
                var operatorString = questionMark, partString = this.part.asString(), string = "".concat(partString).concat(operatorString);
                return string;
            }
        },
        {
            key: "clone",
            value: function clone() {
                return _get(_getPrototypeOf(OptionalPartPart.prototype), "clone", this).call(this, OptionalPartPart, this.part);
            }
        }
    ]);
    return OptionalPartPart;
}(_nonTerminal.default);
function parsePart(part, nodes, state, callback) {
    var parsed;
    if (callback !== null) {
        parsed = callback();
        if (!parsed) {
            parsed = part.parse(nodes, state, callback);
        }
    } else {
        part.parse(nodes, state, callback);
        parsed = true;
    }
    return parsed;
}
exports.default = OptionalPartPart;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJ0L25vblRlcm1pbmFsL29wdGlvbmFsUGFydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbFBhcnQgZnJvbSBcIi4uLy4uL3BhcnQvbm9uVGVybWluYWxcIjtcblxuaW1wb3J0IHsgcHVzaCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IE9wdGlvbmFsUGFydFBhcnRUeXBlIH0gZnJvbSBcIi4uLy4uL3BhcnRUeXBlc1wiO1xuXG5jb25zdCB7IHF1ZXN0aW9uTWFyayB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wdGlvbmFsUGFydFBhcnQgZXh0ZW5kcyBOb25UZXJtaW5hbFBhcnQge1xuICBjb25zdHJ1Y3RvcihwYXJ0KSB7XG4gICAgY29uc3QgdHlwZSA9IE9wdGlvbmFsUGFydFBhcnRUeXBlOyAvLy9cblxuICAgIHN1cGVyKHR5cGUpO1xuXG4gICAgdGhpcy5wYXJ0ID0gcGFydDtcbiAgfVxuXG4gIGdldFBhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFydDtcbiAgfVxuXG4gIHBhcnNlKG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgY29uc3QgcGFydCA9IHRoaXMuZ2V0UGFydCgpLFxuICAgICAgICAgIHBhcnROb2RlcyA9IFtdLFxuICAgICAgICAgIHNhdmVkSW5kZXggPSBzdGF0ZS5nZXRTYXZlZEluZGV4KCk7XG5cbiAgICBwYXJzZWQgPSBwYXJzZVBhcnQocGFydCwgcGFydE5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgcHVzaChub2RlcywgcGFydE5vZGVzKTtcbiAgICB9XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgc3RhdGUuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBvcGVyYXRvclN0cmluZyA9IHF1ZXN0aW9uTWFyaywgIC8vL1xuICAgICAgICAgIHBhcnRTdHJpbmcgPSB0aGlzLnBhcnQuYXNTdHJpbmcoKSxcbiAgICAgICAgICBzdHJpbmcgPSBgJHtwYXJ0U3RyaW5nfSR7b3BlcmF0b3JTdHJpbmd9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKE9wdGlvbmFsUGFydFBhcnQsIHRoaXMucGFydCk7IH1cbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJ0KHBhcnQsIG5vZGVzLCBzdGF0ZSwgY2FsbGJhY2spIHtcbiAgbGV0IHBhcnNlZDtcblxuICBpZiAoY2FsbGJhY2sgIT09IG51bGwpIHtcbiAgICBwYXJzZWQgPSBjYWxsYmFjaygpO1xuXG4gICAgaWYgKCFwYXJzZWQpIHtcbiAgICAgIHBhcnNlZCA9IHBhcnQucGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjayk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHBhcnQucGFyc2Uobm9kZXMsIHN0YXRlLCBjYWxsYmFjayk7XG5cbiAgICBwYXJzZWQgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn1cbiJdLCJuYW1lcyI6WyJxdWVzdGlvbk1hcmsiLCJzcGVjaWFsU3ltYm9scyIsIk9wdGlvbmFsUGFydFBhcnQiLCJwYXJ0IiwidHlwZSIsIk9wdGlvbmFsUGFydFBhcnRUeXBlIiwiZ2V0UGFydCIsInBhcnNlIiwibm9kZXMiLCJzdGF0ZSIsImNhbGxiYWNrIiwicGFyc2VkIiwicGFydE5vZGVzIiwic2F2ZWRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJwYXJzZVBhcnQiLCJwdXNoIiwiYmFja3RyYWNrIiwiYXNTdHJpbmciLCJvcGVyYXRvclN0cmlu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