"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DefinitionDefinition;
    }
});
var _definition = /*#__PURE__*/ _interopRequireDefault(require("../definition"));
var _ruleName = /*#__PURE__*/ _interopRequireDefault(require("../part/nonTerminal/ruleName"));
var _oneOrMoreParts = /*#__PURE__*/ _interopRequireDefault(require("../part/nonTerminal/oneOrMoreParts"));
var _ruleNames = require("../ruleNames");
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
var DefinitionDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(DefinitionDefinition, Definition);
    var _super = _createSuper(DefinitionDefinition);
    function DefinitionDefinition() {
        _classCallCheck(this, DefinitionDefinition);
        var partRuleNamePart = new _ruleName.default(_ruleNames.partRuleName), oneOrMoreRuleNamePartsPart = new _oneOrMoreParts.default(partRuleNamePart), parts = [
            oneOrMoreRuleNamePartsPart
        ];
        return _super.call(this, parts);
    }
    return DefinitionDefinition;
}(_definition.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL2RlZmluaXRpb24uanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uXCI7XG5pbXBvcnQgUnVsZU5hbWVQYXJ0IGZyb20gXCIuLi9wYXJ0L25vblRlcm1pbmFsL3J1bGVOYW1lXCI7XG5pbXBvcnQgT25lT3JNb3JlUGFydHNQYXJ0IGZyb20gXCIuLi9wYXJ0L25vblRlcm1pbmFsL29uZU9yTW9yZVBhcnRzXCI7XG5cbmltcG9ydCB7IHBhcnRSdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVmaW5pdGlvbkRlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgcGFydFJ1bGVOYW1lUGFydCA9IG5ldyBSdWxlTmFtZVBhcnQocGFydFJ1bGVOYW1lKSxcbiAgICAgICAgICBvbmVPck1vcmVSdWxlTmFtZVBhcnRzUGFydCA9IG5ldyBPbmVPck1vcmVQYXJ0c1BhcnQocGFydFJ1bGVOYW1lUGFydCksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBvbmVPck1vcmVSdWxlTmFtZVBhcnRzUGFydFxuICAgICAgICAgIF07XG5cbiAgICBzdXBlcihwYXJ0cylcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJEZWZpbml0aW9uRGVmaW5pdGlvbiIsInBhcnRSdWxlTmFtZVBhcnQiLCJSdWxlTmFtZVBhcnQiLCJwYXJ0UnVsZU5hbWUiLCJvbmVPck1vcmVSdWxlTmFtZVBhcnRzUGFydCIsIk9uZU9yTW9yZVBhcnRzUGFydCIsInBhcnRzIiwiRGVmaW5pdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7O2VBUVFBLG9CQUFvQjs7OytEQU5sQixlQUFlOzZEQUNiLDhCQUE4QjttRUFDeEIsb0NBQW9DO3lCQUV0QyxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1QixJQUFBLEFBQU1BLG9CQUFvQixpQkFBMUI7OzthQUFNQSxvQkFBb0I7O1FBRXJDLElBQU1DLGdCQUFnQixHQUFHLElBQUlDLFNBQVksUUFBQSxDQUFDQyxVQUFZLGFBQUEsQ0FBQyxFQUNqREMsMEJBQTBCLEdBQUcsSUFBSUMsZUFBa0IsUUFBQSxDQUFDSixnQkFBZ0IsQ0FBQyxFQUNyRUssS0FBSyxHQUFHO1lBQ05GLDBCQUEwQjtTQUMzQixBQUFDO2lDQUVGRSxLQUFLOzs7Q0FFZCxDQVZpREMsV0FBVSxRQUFBLENBVTNEIn0=