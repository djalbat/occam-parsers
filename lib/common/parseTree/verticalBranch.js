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