"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _definition = _interopRequireDefault(require("../definition"));
var _wildcard = _interopRequireDefault(require("../part/terminal/wildcard"));
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
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var ErrorDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(ErrorDefinition, Definition);
    function ErrorDefinition() {
        _classCallCheck(this, ErrorDefinition);
        var wildcardPart = new _wildcard.default(), parts = [
            wildcardPart
        ];
        return _possibleConstructorReturn(this, _getPrototypeOf(ErrorDefinition).call(this, parts));
    }
    return ErrorDefinition;
}(_definition.default);
exports.default = ErrorDefinition;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvZGVmaW5pdGlvbi9lcnJvci5qcyJdLCJuYW1lcyI6WyJEZWZpbml0aW9uIiwiV2lsZGNhcmRQYXJ0IiwiRXJyb3JEZWZpbml0aW9uIiwiY29uc3RydWN0b3IiLCJ3aWxkY2FyZFBhcnQiLCJwYXJ0cyJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFVyxHQUFlLENBQWYsV0FBZTtBQUNiLEdBQTJCLENBQTNCLFNBQTJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRS9CLGVBQWUsaUJBQXJCLFFBQVE7Y0FBRixlQUFlO2FBQWYsZUFBZTs4QkFBZixlQUFlO1FBRWhDLEdBQUssQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUpILFNBQTJCLFlBSzFDLEtBQUssR0FBRyxDQUFDO1lBQ1AsWUFBWTtRQUNkLENBQUM7Z0VBTFUsZUFBZSxhQU8xQixLQUFLOztXQVBNLGVBQWU7RUFIYixXQUFlO2tCQUdqQixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZWZpbml0aW9uIGZyb20gXCIuLi9kZWZpbml0aW9uXCI7XG5pbXBvcnQgV2lsZGNhcmRQYXJ0IGZyb20gXCIuLi9wYXJ0L3Rlcm1pbmFsL3dpbGRjYXJkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9yRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCB3aWxkY2FyZFBhcnQgPSBuZXcgV2lsZGNhcmRQYXJ0KCksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICB3aWxkY2FyZFBhcnRcbiAgICAgICAgICBdO1xuXG4gICAgc3VwZXIocGFydHMpXG4gIH1cbn1cbiJdfQ==