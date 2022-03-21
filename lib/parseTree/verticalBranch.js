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
exports.default = VerticalBranchParseTree;
function linesFromDepth(depth) {
    var lines = [];
    var index = 0;
    while(index < depth){
        lines[index++] = _constants.EMPTY_STRING;
    }
    return lines;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZVRyZWUvdmVydGljYWxCcmFuY2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNoYXJhY3RlcnMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBQYXJzZVRyZWUgZnJvbSBcIi4uL3BhcnNlVHJlZVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgQkFSX0NIQVJBQ1RFUiB9ID0gY2hhcmFjdGVycztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUgZXh0ZW5kcyBQYXJzZVRyZWUge1xuICBjb25zdHJ1Y3RvcihsaW5lcywgdmVydGljYWxCcmFuY2hQb3NpdGlvbikge1xuICAgIHN1cGVyKGxpbmVzKTtcbiAgICBcbiAgICB0aGlzLnZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uO1xuICB9XG4gIFxuICBnZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRpY2FsQnJhbmNoUG9zaXRpb247XG4gIH1cblxuICBhZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCkge1xuICAgIHN1cGVyLmFkZExlZnRNYXJnaW4obGVmdE1hcmdpbldpZHRoKTtcblxuICAgIHRoaXMudmVydGljYWxCcmFuY2hQb3NpdGlvbiArPSBsZWZ0TWFyZ2luV2lkdGg7IC8vL1xuICB9XG5cbiAgc3RhdGljIGZyb21XaWR0aCh3aWR0aCkge1xuICAgIGNvbnN0IHN0cmluZyA9IEJBUl9DSEFSQUNURVIsXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IDAsXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tU3RyaW5nQW5kVmVydGljYWxCcmFuY2hQb3NpdGlvbihWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSwgc3RyaW5nLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKSxcbiAgICAgICAgICBsZWZ0TWFyZ2luV2lkdGggPSBNYXRoLmZsb29yKHdpZHRoLzIpLFxuICAgICAgICAgIHJpZ2h0TWFyZ2luV2lkdGggPSB3aWR0aCAtIGxlZnRNYXJnaW5XaWR0aCAtIDE7XG5cbiAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5hZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCk7XG4gICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCk7XG5cbiAgICByZXR1cm4gdmVydGljYWxCcmFuY2hQYXJzZVRyZWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbURlcHRoQW5kVmVydGljYWxCcmFuY2hQb3NpdGlvbihDbGFzcywgZGVwdGgsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pIHtcbiAgICBjb25zdCBsaW5lcyA9IGxpbmVzRnJvbURlcHRoKGRlcHRoKSxcbiAgICAgICAgICBhcmdzID0gW251bGwsIGxpbmVzLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uXSxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoQ2xhc3MsIGFyZ3MpKTsgIC8vL1xuXG4gICAgcmV0dXJuIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdHJpbmdBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKENsYXNzLCBzdHJpbmcsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pIHtcbiAgICBpZiAodmVydGljYWxCcmFuY2hQb3NpdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gc3RyaW5nOyAgLy8vXG4gICAgICBzdHJpbmcgPSBDbGFzczsgLy8vXG4gICAgICBDbGFzcyA9IFBhcnNlVHJlZTsgIC8vL1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBsaW5lID0gc3RyaW5nLCAvLy9cbiAgICAgICAgICBsaW5lcyA9IFtsaW5lXSxcbiAgICAgICAgICBhcmdzID0gW251bGwsIGxpbmVzLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uXSxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoQ2xhc3MsIGFyZ3MpKTsgIC8vL1xuXG4gICAgcmV0dXJuIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxpbmVzRnJvbURlcHRoKGRlcHRoKSB7XG4gIGNvbnN0IGxpbmVzID0gW107XG5cbiAgbGV0IGluZGV4ID0gMDtcblxuICB3aGlsZSAoaW5kZXggPCBkZXB0aCkge1xuICAgIGxpbmVzW2luZGV4KytdID0gRU1QVFlfU1RSSU5HO1xuICB9XG5cbiAgcmV0dXJuIGxpbmVzO1xufVxuIl0sIm5hbWVzIjpbIkJBUl9DSEFSQUNURVIiLCJjaGFyYWN0ZXJzIiwiVmVydGljYWxCcmFuY2hQYXJzZVRyZWUiLCJsaW5lcyIsInZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJnZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiYWRkTGVmdE1hcmdpbiIsImxlZnRNYXJnaW5XaWR0aCIsImZyb21XaWR0aCIsIndpZHRoIiwic3RyaW5nIiwidmVydGljYWxCcmFuY2hQYXJzZVRyZWUiLCJmcm9tU3RyaW5nQW5kVmVydGljYWxCcmFuY2hQb3NpdGlvbiIsIk1hdGgiLCJmbG9vciIsInJpZ2h0TWFyZ2luV2lkdGgiLCJhZGRSaWdodE1hcmdpbiIsImZyb21EZXB0aEFuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJDbGFzcyIsImRlcHRoIiwibGluZXNGcm9tRGVwdGgiLCJhcmdzIiwiRnVuY3Rpb24iLCJwcm90b3R5cGUiLCJiaW5kIiwiYXBwbHkiLCJ1bmRlZmluZWQiLCJQYXJzZVRyZWUiLCJsaW5l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