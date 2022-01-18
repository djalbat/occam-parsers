"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _nonTerminal = _interopRequireDefault(require("../../common/node/nonTerminal"));
var _array = require("../../utilities/array");
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
var DefinitionsNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(DefinitionsNode, NonTerminalNode);
    var _super = _createSuper(DefinitionsNode);
    function DefinitionsNode() {
        _classCallCheck(this, DefinitionsNode);
        return _super.apply(this, arguments);
    }
    _createClass(DefinitionsNode, [
        {
            key: "generateDefinitions",
            value: function generateDefinitions() {
                var childNodes = this.getChildNodes(), evenChildNodes = (0, _array).even(childNodes), definitionNodes = evenChildNodes, definitions = definitionNodes.map(function(definitionNode) {
                    var definition = definitionNode.generateDefinition();
                    return definition;
                });
                return definitions;
            }
        }
    ], [
        {
            key: "fromRuleNameAndChildNodes",
            value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
                return _nonTerminal.default.fromRuleNameAndChildNodes(DefinitionsNode, ruleName, childNodes);
            }
        }
    ]);
    return DefinitionsNode;
}(_nonTerminal.default);
exports.default = DefinitionsNode;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvbm9kZS9kZWZpbml0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWxcIjtcblxuaW1wb3J0IHsgZXZlbiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVmaW5pdGlvbnNOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVEZWZpbml0aW9ucygpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgZXZlbkNoaWxkTm9kZXMgPSBldmVuKGNoaWxkTm9kZXMpLCAgLy8vXG4gICAgICAgICAgZGVmaW5pdGlvbk5vZGVzID0gZXZlbkNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgIGRlZmluaXRpb25zID0gZGVmaW5pdGlvbk5vZGVzLm1hcCgoZGVmaW5pdGlvbk5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb24gPSBkZWZpbml0aW9uTm9kZS5nZW5lcmF0ZURlZmluaXRpb24oKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGRlZmluaXRpb247XG4gICAgICAgICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIGRlZmluaXRpb25zO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGNoaWxkTm9kZXMpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKERlZmluaXRpb25zTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMpOyB9XG59XG4iXSwibmFtZXMiOlsiRGVmaW5pdGlvbnNOb2RlIiwiZ2VuZXJhdGVEZWZpbml0aW9ucyIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZXZlbkNoaWxkTm9kZXMiLCJkZWZpbml0aW9uTm9kZXMiLCJkZWZpbml0aW9ucyIsIm1hcCIsImRlZmluaXRpb25Ob2RlIiwiZGVmaW5pdGlvbiIsImdlbmVyYXRlRGVmaW5pdGlvbiIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJydWxlTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFZ0IsR0FBK0IsQ0FBL0IsWUFBK0I7QUFFdEMsR0FBdUIsQ0FBdkIsTUFBdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFdkJBLGVBQWUsaUJBQXJCLFFBQVE7Y0FBRkEsZUFBZTs4QkFBZkEsZUFBZTthQUFmQSxlQUFlOzhCQUFmQSxlQUFlOzs7aUJBQWZBLGVBQWU7O1lBQ2xDQyxHQUFtQixFQUFuQkEsQ0FBbUI7bUJBQW5CQSxRQUFRLENBQVJBLG1CQUFtQixHQUFHLENBQUM7Z0JBQ3JCLEdBQUssQ0FBQ0MsVUFBVSxHQUFHLElBQUksQ0FBQ0MsYUFBYSxJQUMvQkMsY0FBYyxPQUxILE1BQXVCLE9BS1pGLFVBQVUsR0FDaENHLGVBQWUsR0FBR0QsY0FBYyxFQUNoQ0UsV0FBVyxHQUFHRCxlQUFlLENBQUNFLEdBQUcsQ0FBQyxRQUFRLENBQVBDLGNBQWMsRUFBSyxDQUFDO29CQUNyRCxHQUFLLENBQUNDLFVBQVUsR0FBR0QsY0FBYyxDQUFDRSxrQkFBa0I7b0JBRXBELE1BQU0sQ0FBQ0QsVUFBVTtnQkFDbkIsQ0FBQztnQkFFUCxNQUFNLENBQUNILFdBQVc7WUFDcEIsQ0FBQzs7OztZQUVNSyxHQUF5QixFQUF6QkEsQ0FBeUI7bUJBQWhDLFFBQVEsQ0FBREEseUJBQXlCLENBQUNDLFFBQVEsRUFBRVYsVUFBVSxFQUFFLENBQUM7Z0JBQUMsTUFBTSxDQWxCckMsWUFBK0IsU0FrQnVCUyx5QkFBeUIsQ0FBQ1gsZUFBZSxFQUFFWSxRQUFRLEVBQUVWLFVBQVU7WUFBRyxDQUFDOzs7V0FkaElGLGVBQWU7RUFKUixZQUErQjtrQkFJdENBLGVBQWUifQ==