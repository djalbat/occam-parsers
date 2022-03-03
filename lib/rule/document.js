"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _rule = _interopRequireDefault(require("../rule"));
var _document = _interopRequireDefault(require("../node/bnf/document"));
var _document1 = _interopRequireDefault(require("../definition/document"));
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
var DocumentRule = /*#__PURE__*/ function(Rule) {
    _inherits(DocumentRule, Rule);
    var _super = _createSuper(DocumentRule);
    function DocumentRule() {
        _classCallCheck(this, DocumentRule);
        var documentDefinition = new _document1.default(), name = _ruleNames.DocumentRuleName, definitions = [
            documentDefinition
        ], Node = _document.default;
        return _super.call(this, name, definitions, Node);
    }
    return DocumentRule;
}(_rule.default);
exports.default = DocumentRule;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL2RvY3VtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vcnVsZVwiO1xuaW1wb3J0IERvY3VtZW50Qk5GTm9kZSBmcm9tIFwiLi4vbm9kZS9ibmYvZG9jdW1lbnRcIjtcbmltcG9ydCBEb2N1bWVudERlZmluaXRpb24gZnJvbSBcIi4uL2RlZmluaXRpb24vZG9jdW1lbnRcIjtcblxuaW1wb3J0IHsgRG9jdW1lbnRSdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9jdW1lbnRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IGRvY3VtZW50RGVmaW5pdGlvbiA9IG5ldyBEb2N1bWVudERlZmluaXRpb24oKSxcbiAgICAgICAgICBuYW1lID0gRG9jdW1lbnRSdWxlTmFtZSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgIGRvY3VtZW50RGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IERvY3VtZW50Qk5GTm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkRvY3VtZW50UnVsZSIsImRvY3VtZW50RGVmaW5pdGlvbiIsIkRvY3VtZW50RGVmaW5pdGlvbiIsIm5hbWUiLCJEb2N1bWVudFJ1bGVOYW1lIiwiZGVmaW5pdGlvbnMiLCJOb2RlIiwiRG9jdW1lbnRCTkZOb2RlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWSxXQUFBLENBQUM7OztFO3dCO0FBRUksR0FBUyxDQUFULEtBQVM7QUFDRSxHQUFzQixDQUF0QixTQUFzQjtBQUNuQixHQUF3QixDQUF4QixVQUF3QjtBQUV0QixHQUFjLENBQWQsVUFBYzs7Ozs7Ozs7Ozs7Ozs7O0s7Ozs7Ozs7Ozs7Ozs7TTt5RDs7Ozs7Ozs7Ozs7Ozs7O3VCOztLOzs7OzJCOzs7Ozs7OztxRjs7Ozs7Ozs7Ozs7O21FOztpRDs7Ozs7SUFFMUJBLFlBQVksaUJBQWxCLFFBQVE7aUM7O2FBQUZBLFlBQVk7MkM7UUFFN0IsR0FBSyxDQUFDQyxrQkFBa0IsR0FBRyxHQUFHLENBQUNDLFVBQWtCLFlBQzNDQyxJQUFJLEdBQUdDLFVBQWdCLG1CQUN2QkMsV0FBVyxHQUFHLENBQUM7WUFDYkosa0JBQWtCO1FBQ3BCLENBQUMsRUFDREssSUFBSSxHQUFHQyxTQUFlO2lDQUV0QkosSUFBSSxFQUFFRSxXQUFXLEVBQUVDLElBQUk7OztFQVRTRSxLQUFJO2tCQUF6QlIsWUFBWSxBIn0=