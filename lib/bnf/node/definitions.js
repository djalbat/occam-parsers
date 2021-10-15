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
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var DefinitionsNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(DefinitionsNode, NonTerminalNode);
    function DefinitionsNode() {
        _classCallCheck(this, DefinitionsNode);
        return _possibleConstructorReturn(this, _getPrototypeOf(DefinitionsNode).apply(this, arguments));
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvbm9kZS9kZWZpbml0aW9ucy5qcyJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbE5vZGUiLCJldmVuIiwiRGVmaW5pdGlvbnNOb2RlIiwiZ2VuZXJhdGVEZWZpbml0aW9ucyIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiZXZlbkNoaWxkTm9kZXMiLCJkZWZpbml0aW9uTm9kZXMiLCJkZWZpbml0aW9ucyIsIm1hcCIsImRlZmluaXRpb25Ob2RlIiwiZGVmaW5pdGlvbiIsImdlbmVyYXRlRGVmaW5pdGlvbiIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJydWxlTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFZ0IsR0FBK0IsQ0FBL0IsWUFBK0I7QUFFdEMsR0FBdUIsQ0FBdkIsTUFBdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV2QixlQUFlLGlCQUFyQixRQUFRO2NBQUYsZUFBZTthQUFmLGVBQWU7OEJBQWYsZUFBZTtnRUFBZixlQUFlOztpQkFBZixlQUFlOztZQUNsQyxHQUFtQixFQUFuQixDQUFtQjttQkFBbkIsUUFBUSxDQUFSLG1CQUFtQixHQUFHLENBQUM7Z0JBQ3JCLEdBQUssQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsSUFDL0IsY0FBYyxPQUxILE1BQXVCLE9BS1osVUFBVSxHQUNoQyxlQUFlLEdBQUcsY0FBYyxFQUNoQyxXQUFXLEdBQUcsZUFBZSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQVAsY0FBYyxFQUFLLENBQUM7b0JBQ3JELEdBQUssQ0FBQyxVQUFVLEdBQUcsY0FBYyxDQUFDLGtCQUFrQjtvQkFFcEQsTUFBTSxDQUFDLFVBQVU7Z0JBQ25CLENBQUM7Z0JBRVAsTUFBTSxDQUFDLFdBQVc7WUFDcEIsQ0FBQzs7OztZQUVNLEdBQXlCLEVBQXpCLENBQXlCO21CQUFoQyxRQUFRLENBQUQseUJBQXlCLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxDQUFDO2dCQUFDLE1BQU0sQ0FsQnJDLFlBQStCLFNBa0J1Qix5QkFBeUIsQ0FBQyxlQUFlLEVBQUUsUUFBUSxFQUFFLFVBQVU7WUFBRyxDQUFDOzs7V0FkaEksZUFBZTtFQUpSLFlBQStCO2tCQUl0QyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbE5vZGUgZnJvbSBcIi4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsXCI7XG5cbmltcG9ydCB7IGV2ZW4gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlZmluaXRpb25zTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlRGVmaW5pdGlvbnMoKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGV2ZW5DaGlsZE5vZGVzID0gZXZlbihjaGlsZE5vZGVzKSwgIC8vL1xuICAgICAgICAgIGRlZmluaXRpb25Ob2RlcyA9IGV2ZW5DaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICBkZWZpbml0aW9ucyA9IGRlZmluaXRpb25Ob2Rlcy5tYXAoKGRlZmluaXRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uID0gZGVmaW5pdGlvbk5vZGUuZ2VuZXJhdGVEZWZpbml0aW9uKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBkZWZpbml0aW9uO1xuICAgICAgICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBkZWZpbml0aW9ucztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhEZWZpbml0aW9uc05vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTsgfVxufVxuIl19