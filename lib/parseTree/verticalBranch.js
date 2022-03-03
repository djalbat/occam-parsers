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