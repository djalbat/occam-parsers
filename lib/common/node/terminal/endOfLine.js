"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _terminal = _interopRequireDefault(require("../terminal"));
var _endOfLineNode = _interopRequireDefault(require("../../parseTree/endOfLineNode"));
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
var EndOfLineNode = function(TerminalNode) {
    _inherits(EndOfLineNode, _terminal.default);
    function EndOfLineNode() {
        _classCallCheck(this, EndOfLineNode);
        return _possibleConstructorReturn(this, _getPrototypeOf(EndOfLineNode).apply(this, arguments));
    }
    _createClass(EndOfLineNode, [
        {
            key: "getContent",
            value: function getContent() {
                var content = ""; ///
                return content;
            }
        },
        {
            key: "asParseTree",
            value: function asParseTree(tokens) {
                var endOfLineNodeParseTree = _endOfLineNode.default.fromNothing(), parseTree = endOfLineNodeParseTree; ///
                return parseTree;
            }
        }
    ], [
        {
            key: "fromSignificantToken",
            value: function fromSignificantToken(significantToken) {
                return _terminal.default.fromSignificantToken(EndOfLineNode, significantToken);
            }
        }
    ]);
    return EndOfLineNode;
}(_terminal.default);
exports.default = EndOfLineNode;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21tb24vbm9kZS90ZXJtaW5hbC9lbmRPZkxpbmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXJtaW5hbE5vZGUgZnJvbSBcIi4uL3Rlcm1pbmFsXCI7XG5pbXBvcnQgRW5kT2ZMaW5lTm9kZVBhcnNlVHJlZSBmcm9tIFwiLi4vLi4vcGFyc2VUcmVlL2VuZE9mTGluZU5vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5kT2ZMaW5lTm9kZSBleHRlbmRzIFRlcm1pbmFsTm9kZSB7XG4gIGdldENvbnRlbnQoKSB7XG4gICAgY29uc3QgY29udGVudCA9IFwiXCI7ICAvLy9cblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgYXNQYXJzZVRyZWUodG9rZW5zKSB7XG4gICAgY29uc3QgZW5kT2ZMaW5lTm9kZVBhcnNlVHJlZSA9IEVuZE9mTGluZU5vZGVQYXJzZVRyZWUuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBwYXJzZVRyZWUgPSBlbmRPZkxpbmVOb2RlUGFyc2VUcmVlOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TaWduaWZpY2FudFRva2VuKHNpZ25pZmljYW50VG9rZW4pIHsgcmV0dXJuIFRlcm1pbmFsTm9kZS5mcm9tU2lnbmlmaWNhbnRUb2tlbihFbmRPZkxpbmVOb2RlLCBzaWduaWZpY2FudFRva2VuKTsgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQUE7Ozs7O0lBRUEsU0FBQTtJQUNBLGNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVBLGFBQUEsWUFBQSxZQUFBO2NBQUEsYUFBQSxFQUhBLFNBQUE7YUFHQSxhQUFBOzhCQUFBLGFBQUE7Z0VBQUEsYUFBQTs7aUJBQUEsYUFBQTs7QUFDQSxlQUFBLEdBQUEsVUFBQTs0QkFBQSxVQUFBO29CQUNBLE9BQUEsTUFBQSxDQUFBLEVBQUEsQ0FBQTt1QkFFQSxPQUFBOzs7O0FBR0EsZUFBQSxHQUFBLFdBQUE7NEJBQUEsV0FBQSxDQUFBLE1BQUE7b0JBQ0Esc0JBQUEsR0FWQSxjQUFBLFNBVUEsV0FBQSxJQUNBLFNBQUEsR0FBQSxzQkFBQSxDQUFBLENBQUEsRUFBQSxDQUFBO3VCQUVBLFNBQUE7Ozs7O0FBR0EsZUFBQSxHQUFBLG9CQUFBOzRCQUFBLG9CQUFBLENBQUEsZ0JBQUE7dUJBakJBLFNBQUEsU0FpQkEsb0JBQUEsQ0FBQSxhQUFBLEVBQUEsZ0JBQUE7Ozs7V0FkQSxhQUFBO0VBSEEsU0FBQTtrQkFHQSxhQUFBIn0=