"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _parseTree = _interopRequireDefault(require("../parseTree"));
var _constants = require("../../constants");
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
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var VerticalBranchParseTree = /*#__PURE__*/ function(ParseTree) {
    _inherits(VerticalBranchParseTree, ParseTree);
    function VerticalBranchParseTree(lines, verticalBranchPosition) {
        _classCallCheck(this, VerticalBranchParseTree);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(VerticalBranchParseTree).call(this, lines));
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
                var string = _constants.BAR, verticalBranchPosition = 0, verticalBranchParseTree = VerticalBranchParseTree.fromStringAndVerticalBranchPosition(VerticalBranchParseTree, string, verticalBranchPosition), leftMarginWidth = Math.floor(width / 2), rightMarginWidth = width - leftMarginWidth - 1;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tb24vcGFyc2VUcmVlL3ZlcnRpY2FsQnJhbmNoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUGFyc2VUcmVlIGZyb20gXCIuLi9wYXJzZVRyZWVcIjtcblxuaW1wb3J0IHsgQkFSLCBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIGV4dGVuZHMgUGFyc2VUcmVlIHtcbiAgY29uc3RydWN0b3IobGluZXMsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pIHtcbiAgICBzdXBlcihsaW5lcyk7XG4gICAgXG4gICAgdGhpcy52ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gdmVydGljYWxCcmFuY2hQb3NpdGlvbjtcbiAgfVxuICBcbiAgZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uO1xuICB9XG5cbiAgYWRkTGVmdE1hcmdpbihsZWZ0TWFyZ2luV2lkdGgpIHtcbiAgICBzdXBlci5hZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCk7XG5cbiAgICB0aGlzLnZlcnRpY2FsQnJhbmNoUG9zaXRpb24gKz0gbGVmdE1hcmdpbldpZHRoOyAvLy9cbiAgfVxuXG4gIHN0YXRpYyBmcm9tV2lkdGgod2lkdGgpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBCQVIsXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IDAsXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tU3RyaW5nQW5kVmVydGljYWxCcmFuY2hQb3NpdGlvbihWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSwgc3RyaW5nLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKSxcbiAgICAgICAgICBsZWZ0TWFyZ2luV2lkdGggPSBNYXRoLmZsb29yKHdpZHRoLzIpLFxuICAgICAgICAgIHJpZ2h0TWFyZ2luV2lkdGggPSB3aWR0aCAtIGxlZnRNYXJnaW5XaWR0aCAtIDE7XG5cbiAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5hZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCk7XG4gICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCk7XG5cbiAgICByZXR1cm4gdmVydGljYWxCcmFuY2hQYXJzZVRyZWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbURlcHRoQW5kVmVydGljYWxCcmFuY2hQb3NpdGlvbihDbGFzcywgZGVwdGgsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pIHtcbiAgICBjb25zdCBsaW5lcyA9IGxpbmVzRnJvbURlcHRoKGRlcHRoKSxcbiAgICAgICAgICBhcmdzID0gW251bGwsIGxpbmVzLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uXSxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoQ2xhc3MsIGFyZ3MpKTsgIC8vL1xuXG4gICAgcmV0dXJuIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdHJpbmdBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKENsYXNzLCBzdHJpbmcsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pIHtcbiAgICBpZiAodmVydGljYWxCcmFuY2hQb3NpdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gc3RyaW5nOyAgLy8vXG4gICAgICBzdHJpbmcgPSBDbGFzczsgLy8vXG4gICAgICBDbGFzcyA9IFBhcnNlVHJlZTsgIC8vL1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBsaW5lID0gc3RyaW5nLCAvLy9cbiAgICAgICAgICBsaW5lcyA9IFtsaW5lXSxcbiAgICAgICAgICBhcmdzID0gW251bGwsIGxpbmVzLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uXSxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoQ2xhc3MsIGFyZ3MpKTsgIC8vL1xuXG4gICAgcmV0dXJuIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxpbmVzRnJvbURlcHRoKGRlcHRoKSB7XG4gIGNvbnN0IGxpbmVzID0gW107XG5cbiAgbGV0IGluZGV4ID0gMDtcblxuICB3aGlsZSAoaW5kZXggPCBkZXB0aCkge1xuICAgIGxpbmVzW2luZGV4KytdID0gRU1QVFlfU1RSSU5HO1xuICB9XG5cbiAgcmV0dXJuIGxpbmVzO1xufVxuIl0sIm5hbWVzIjpbIlZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwibGluZXMiLCJ2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImFkZExlZnRNYXJnaW4iLCJsZWZ0TWFyZ2luV2lkdGgiLCJmcm9tV2lkdGgiLCJ3aWR0aCIsInN0cmluZyIsInZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwiZnJvbVN0cmluZ0FuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJNYXRoIiwiZmxvb3IiLCJyaWdodE1hcmdpbldpZHRoIiwiYWRkUmlnaHRNYXJnaW4iLCJmcm9tRGVwdGhBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiQ2xhc3MiLCJkZXB0aCIsImxpbmVzRnJvbURlcHRoIiwiYXJncyIsIkZ1bmN0aW9uIiwicHJvdG90eXBlIiwiYmluZCIsImFwcGx5IiwidW5kZWZpbmVkIiwibGluZSIsImluZGV4Il0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVVLEdBQWMsQ0FBZCxVQUFjO0FBRUYsR0FBaUIsQ0FBakIsVUFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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