"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _necessary = require("necessary");
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tb24vcGFyc2VUcmVlL3ZlcnRpY2FsQnJhbmNoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjaGFyYWN0ZXJzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgUGFyc2VUcmVlIGZyb20gXCIuLi9wYXJzZVRyZWVcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IEJBUl9DSEFSQUNURVIgfSA9IGNoYXJhY3RlcnM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIGV4dGVuZHMgUGFyc2VUcmVlIHtcbiAgY29uc3RydWN0b3IobGluZXMsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pIHtcbiAgICBzdXBlcihsaW5lcyk7XG4gICAgXG4gICAgdGhpcy52ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gdmVydGljYWxCcmFuY2hQb3NpdGlvbjtcbiAgfVxuICBcbiAgZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uO1xuICB9XG5cbiAgYWRkTGVmdE1hcmdpbihsZWZ0TWFyZ2luV2lkdGgpIHtcbiAgICBzdXBlci5hZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCk7XG5cbiAgICB0aGlzLnZlcnRpY2FsQnJhbmNoUG9zaXRpb24gKz0gbGVmdE1hcmdpbldpZHRoOyAvLy9cbiAgfVxuXG4gIHN0YXRpYyBmcm9tV2lkdGgod2lkdGgpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBCQVJfQ0hBUkFDVEVSLFxuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSAwLFxuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZnJvbVN0cmluZ0FuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oVmVydGljYWxCcmFuY2hQYXJzZVRyZWUsIHN0cmluZywgdmVydGljYWxCcmFuY2hQb3NpdGlvbiksXG4gICAgICAgICAgbGVmdE1hcmdpbldpZHRoID0gTWF0aC5mbG9vcih3aWR0aC8yKSxcbiAgICAgICAgICByaWdodE1hcmdpbldpZHRoID0gd2lkdGggLSBsZWZ0TWFyZ2luV2lkdGggLSAxO1xuXG4gICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuYWRkTGVmdE1hcmdpbihsZWZ0TWFyZ2luV2lkdGgpO1xuICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmFkZFJpZ2h0TWFyZ2luKHJpZ2h0TWFyZ2luV2lkdGgpO1xuXG4gICAgcmV0dXJuIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21EZXB0aEFuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oQ2xhc3MsIGRlcHRoLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKSB7XG4gICAgY29uc3QgbGluZXMgPSBsaW5lc0Zyb21EZXB0aChkZXB0aCksXG4gICAgICAgICAgYXJncyA9IFtudWxsLCBsaW5lcywgdmVydGljYWxCcmFuY2hQb3NpdGlvbl0sXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KENsYXNzLCBhcmdzKSk7ICAvLy9cblxuICAgIHJldHVybiB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RyaW5nQW5kVmVydGljYWxCcmFuY2hQb3NpdGlvbihDbGFzcywgc3RyaW5nLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKSB7XG4gICAgaWYgKHZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IHN0cmluZzsgIC8vL1xuICAgICAgc3RyaW5nID0gQ2xhc3M7IC8vL1xuICAgICAgQ2xhc3MgPSBQYXJzZVRyZWU7ICAvLy9cbiAgICB9XG4gICAgXG4gICAgY29uc3QgbGluZSA9IHN0cmluZywgLy8vXG4gICAgICAgICAgbGluZXMgPSBbbGluZV0sXG4gICAgICAgICAgYXJncyA9IFtudWxsLCBsaW5lcywgdmVydGljYWxCcmFuY2hQb3NpdGlvbl0sXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KENsYXNzLCBhcmdzKSk7ICAvLy9cblxuICAgIHJldHVybiB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsaW5lc0Zyb21EZXB0aChkZXB0aCkge1xuICBjb25zdCBsaW5lcyA9IFtdO1xuXG4gIGxldCBpbmRleCA9IDA7XG5cbiAgd2hpbGUgKGluZGV4IDwgZGVwdGgpIHtcbiAgICBsaW5lc1tpbmRleCsrXSA9IEVNUFRZX1NUUklORztcbiAgfVxuXG4gIHJldHVybiBsaW5lcztcbn1cbiJdLCJuYW1lcyI6WyJCQVJfQ0hBUkFDVEVSIiwiVmVydGljYWxCcmFuY2hQYXJzZVRyZWUiLCJsaW5lcyIsInZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJnZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiYWRkTGVmdE1hcmdpbiIsImxlZnRNYXJnaW5XaWR0aCIsImZyb21XaWR0aCIsIndpZHRoIiwic3RyaW5nIiwidmVydGljYWxCcmFuY2hQYXJzZVRyZWUiLCJmcm9tU3RyaW5nQW5kVmVydGljYWxCcmFuY2hQb3NpdGlvbiIsIk1hdGgiLCJmbG9vciIsInJpZ2h0TWFyZ2luV2lkdGgiLCJhZGRSaWdodE1hcmdpbiIsImZyb21EZXB0aEFuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJDbGFzcyIsImRlcHRoIiwibGluZXNGcm9tRGVwdGgiLCJhcmdzIiwiRnVuY3Rpb24iLCJwcm90b3R5cGUiLCJiaW5kIiwiYXBwbHkiLCJ1bmRlZmluZWQiLCJsaW5lIiwiaW5kZXgiXSwi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