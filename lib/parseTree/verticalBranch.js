"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _necessary = require("necessary");
var _parseTree = _interopRequireDefault(require("../parseTree"));
var _constants = require("../constants");
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
function _get(target, property, receiver) {
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
    return _get(target, property, receiver || target);
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
var BAR_CHARACTER = _necessary.characters.BAR_CHARACTER;
var VerticalBranchParseTree = /*#__PURE__*/ function(ParseTree) {
    _inherits(VerticalBranchParseTree, ParseTree);
    var _super = _createSuper(VerticalBranchParseTree);
    function VerticalBranchParseTree(lines, verticalBranchPosition) {
        _classCallCheck(this, VerticalBranchParseTree);
        var _this;
        _this = _super.call(this, lines);
        _this.verticalBranchPosition = verticalBranchPosition;
        return _this;
    }
    _createClass(VerticalBranchParseTree, [
        {
            key: "getVerticalBranchPosition",
            value: function getVerticalBranchPosition() {
                return this.verticalBranchPosition;
            }
        },
        {
            key: "addLeftMargin",
            value: function addLeftMargin(leftMarginWidth) {
                _get(_getPrototypeOf(VerticalBranchParseTree.prototype), "addLeftMargin", this).call(this, leftMarginWidth);
                this.verticalBranchPosition += leftMarginWidth; ///
            }
        }
    ], [
        {
            key: "fromWidth",
            value: function fromWidth(width) {
                var string = BAR_CHARACTER, verticalBranchPosition = 0, verticalBranchParseTree = VerticalBranchParseTree.fromStringAndVerticalBranchPosition(VerticalBranchParseTree, string, verticalBranchPosition), leftMarginWidth = Math.floor(width / 2), rightMarginWidth = width - leftMarginWidth - 1;
                verticalBranchParseTree.addLeftMargin(leftMarginWidth);
                verticalBranchParseTree.addRightMargin(rightMarginWidth);
                return verticalBranchParseTree;
            }
        },
        {
            key: "fromDepthAndVerticalBranchPosition",
            value: function fromDepthAndVerticalBranchPosition(Class, depth, verticalBranchPosition) {
                var lines = linesFromDepth(depth), args = [
                    null,
                    lines,
                    verticalBranchPosition
                ], verticalBranchParseTree = new (Function.prototype.bind.apply(Class, args)); ///
                return verticalBranchParseTree;
            }
        },
        {
            key: "fromStringAndVerticalBranchPosition",
            value: function fromStringAndVerticalBranchPosition(Class, string, verticalBranchPosition) {
                if (verticalBranchPosition === undefined) {
                    verticalBranchPosition = string; ///
                    string = Class; ///
                    Class = _parseTree.default; ///
                }
                var line = string, lines = [
                    line
                ], args = [
                    null,
                    lines,
                    verticalBranchPosition
                ], verticalBranchParseTree = new (Function.prototype.bind.apply(Class, args)); ///
                return verticalBranchParseTree;
            }
        }
    ]);
    return VerticalBranchParseTree;
}(_parseTree.default);
function linesFromDepth(depth) {
    var lines = [];
    var index = 0;
    while(index < depth){
        lines[index++] = _constants.EMPTY_STRING;
    }
    return lines;
}
exports.default = VerticalBranchParseTree;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZVRyZWUvdmVydGljYWxCcmFuY2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNoYXJhY3RlcnMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBQYXJzZVRyZWUgZnJvbSBcIi4uL3BhcnNlVHJlZVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgQkFSX0NIQVJBQ1RFUiB9ID0gY2hhcmFjdGVycztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUgZXh0ZW5kcyBQYXJzZVRyZWUge1xuICBjb25zdHJ1Y3RvcihsaW5lcywgdmVydGljYWxCcmFuY2hQb3NpdGlvbikge1xuICAgIHN1cGVyKGxpbmVzKTtcbiAgICBcbiAgICB0aGlzLnZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uO1xuICB9XG4gIFxuICBnZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRpY2FsQnJhbmNoUG9zaXRpb247XG4gIH1cblxuICBhZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCkge1xuICAgIHN1cGVyLmFkZExlZnRNYXJnaW4obGVmdE1hcmdpbldpZHRoKTtcblxuICAgIHRoaXMudmVydGljYWxCcmFuY2hQb3NpdGlvbiArPSBsZWZ0TWFyZ2luV2lkdGg7IC8vL1xuICB9XG5cbiAgc3RhdGljIGZyb21XaWR0aCh3aWR0aCkge1xuICAgIGNvbnN0IHN0cmluZyA9IEJBUl9DSEFSQUNURVIsXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IDAsXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tU3RyaW5nQW5kVmVydGljYWxCcmFuY2hQb3NpdGlvbihWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSwgc3RyaW5nLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKSxcbiAgICAgICAgICBsZWZ0TWFyZ2luV2lkdGggPSBNYXRoLmZsb29yKHdpZHRoLzIpLFxuICAgICAgICAgIHJpZ2h0TWFyZ2luV2lkdGggPSB3aWR0aCAtIGxlZnRNYXJnaW5XaWR0aCAtIDE7XG5cbiAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5hZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCk7XG4gICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCk7XG5cbiAgICByZXR1cm4gdmVydGljYWxCcmFuY2hQYXJzZVRyZWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbURlcHRoQW5kVmVydGljYWxCcmFuY2hQb3NpdGlvbihDbGFzcywgZGVwdGgsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pIHtcbiAgICBjb25zdCBsaW5lcyA9IGxpbmVzRnJvbURlcHRoKGRlcHRoKSxcbiAgICAgICAgICBhcmdzID0gWyBudWxsLCBsaW5lcywgdmVydGljYWxCcmFuY2hQb3NpdGlvbiBdLFxuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShDbGFzcywgYXJncykpOyAgLy8vXG5cbiAgICByZXR1cm4gdmVydGljYWxCcmFuY2hQYXJzZVRyZWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0cmluZ0FuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oQ2xhc3MsIHN0cmluZywgdmVydGljYWxCcmFuY2hQb3NpdGlvbikge1xuICAgIGlmICh2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSBzdHJpbmc7ICAvLy9cbiAgICAgIHN0cmluZyA9IENsYXNzOyAvLy9cbiAgICAgIENsYXNzID0gUGFyc2VUcmVlOyAgLy8vXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGxpbmUgPSBzdHJpbmcsIC8vL1xuICAgICAgICAgIGxpbmVzID0gW2xpbmVdLFxuICAgICAgICAgIGFyZ3MgPSBbIG51bGwsIGxpbmVzLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIF0sXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KENsYXNzLCBhcmdzKSk7ICAvLy9cblxuICAgIHJldHVybiB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsaW5lc0Zyb21EZXB0aChkZXB0aCkge1xuICBjb25zdCBsaW5lcyA9IFtdO1xuXG4gIGxldCBpbmRleCA9IDA7XG5cbiAgd2hpbGUgKGluZGV4IDwgZGVwdGgpIHtcbiAgICBsaW5lc1tpbmRleCsrXSA9IEVNUFRZX1NUUklORztcbiAgfVxuXG4gIHJldHVybiBsaW5lcztcbn1cbiJdLCJuYW1lcyI6WyJCQVJfQ0hBUkFDVEVSIiwiY2hhcmFjdGVycyIsIlZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwibGluZXMiLCJ2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImFkZExlZnRNYXJnaW4iLCJsZWZ0TWFyZ2luV2lkdGgiLCJmcm9tV2lkdGgiLCJ3aWR0aCIsInN0cmluZyIsInZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwiZnJvbVN0cmluZ0FuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJNYXRoIiwiZmxvb3IiLCJyaWdodE1hcmdpbldpZHRoIiwiYWRkUmlnaHRNYXJnaW4iLCJmcm9tRGVwdGhBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiQ2xhc3MiLCJkZXB0aCIsImxpbmVzRnJvbURlcHRoIiwiYXJncyIsIkZ1bmN0aW9uIiwicHJvdG90eXBlIiwiYmluZCIsImFwcGx5IiwidW5kZWZpbmVkIiwiUGFyc2VUcmVlIiwi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