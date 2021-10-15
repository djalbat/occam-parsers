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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tb24vcGFyc2VUcmVlL3ZlcnRpY2FsQnJhbmNoLmpzIl0sIm5hbWVzIjpbIlBhcnNlVHJlZSIsIkJBUiIsIkVNUFRZX1NUUklORyIsIlZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwiY29uc3RydWN0b3IiLCJsaW5lcyIsInZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJnZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiYWRkTGVmdE1hcmdpbiIsImxlZnRNYXJnaW5XaWR0aCIsImZyb21XaWR0aCIsIndpZHRoIiwic3RyaW5nIiwidmVydGljYWxCcmFuY2hQYXJzZVRyZWUiLCJmcm9tU3RyaW5nQW5kVmVydGljYWxCcmFuY2hQb3NpdGlvbiIsIk1hdGgiLCJmbG9vciIsInJpZ2h0TWFyZ2luV2lkdGgiLCJhZGRSaWdodE1hcmdpbiIsImZyb21EZXB0aEFuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJDbGFzcyIsImRlcHRoIiwibGluZXNGcm9tRGVwdGgiLCJhcmdzIiwiRnVuY3Rpb24iLCJwcm90b3R5cGUiLCJiaW5kIiwiYXBwbHkiLCJ1bmRlZmluZWQiLCJsaW5lIiwiaW5kZXgiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRVUsR0FBYyxDQUFkLFVBQWM7QUFFRixHQUFpQixDQUFqQixVQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFOUIsdUJBQXVCLGlCQUE3QixRQUFRO2NBQUYsdUJBQXVCO2FBQXZCLHVCQUF1QixDQUM5QixLQUFLLEVBQUUsc0JBQXNCOzhCQUR0Qix1QkFBdUI7O2lFQUF2Qix1QkFBdUIsYUFFbEMsS0FBSztjQUVOLHNCQUFzQixHQUFHLHNCQUFzQjs7O2lCQUpuQyx1QkFBdUI7O1lBTzFDLEdBQXlCLEVBQXpCLENBQXlCO21CQUF6QixRQUFRLENBQVIseUJBQXlCLEdB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QUMsS0FBSztBQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFBhcnNlVHJlZSBmcm9tIFwiLi4vcGFyc2VUcmVlXCI7XG5cbmltcG9ydCB7IEJBUiwgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSBleHRlbmRzIFBhcnNlVHJlZSB7XG4gIGNvbnN0cnVjdG9yKGxpbmVzLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKSB7XG4gICAgc3VwZXIobGluZXMpO1xuICAgIFxuICAgIHRoaXMudmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IHZlcnRpY2FsQnJhbmNoUG9zaXRpb247XG4gIH1cbiAgXG4gIGdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGljYWxCcmFuY2hQb3NpdGlvbjtcbiAgfVxuXG4gIGFkZExlZnRNYXJnaW4obGVmdE1hcmdpbldpZHRoKSB7XG4gICAgc3VwZXIuYWRkTGVmdE1hcmdpbihsZWZ0TWFyZ2luV2lkdGgpO1xuXG4gICAgdGhpcy52ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uICs9IGxlZnRNYXJnaW5XaWR0aDsgLy8vXG4gIH1cblxuICBzdGF0aWMgZnJvbVdpZHRoKHdpZHRoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gQkFSLFxuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSAwLFxuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZnJvbVN0cmluZ0FuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oVmVydGljYWxCcmFuY2hQYXJzZVRyZWUsIHN0cmluZywgdmVydGljYWxCcmFuY2hQb3NpdGlvbiksXG4gICAgICAgICAgbGVmdE1hcmdpbldpZHRoID0gTWF0aC5mbG9vcih3aWR0aC8yKSxcbiAgICAgICAgICByaWdodE1hcmdpbldpZHRoID0gd2lkdGggLSBsZWZ0TWFyZ2luV2lkdGggLSAxO1xuXG4gICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuYWRkTGVmdE1hcmdpbihsZWZ0TWFyZ2luV2lkdGgpO1xuICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmFkZFJpZ2h0TWFyZ2luKHJpZ2h0TWFyZ2luV2lkdGgpO1xuXG4gICAgcmV0dXJuIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21EZXB0aEFuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oQ2xhc3MsIGRlcHRoLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKSB7XG4gICAgY29uc3QgbGluZXMgPSBsaW5lc0Zyb21EZXB0aChkZXB0aCksXG4gICAgICAgICAgYXJncyA9IFtudWxsLCBsaW5lcywgdmVydGljYWxCcmFuY2hQb3NpdGlvbl0sXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KENsYXNzLCBhcmdzKSk7ICAvLy9cblxuICAgIHJldHVybiB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RyaW5nQW5kVmVydGljYWxCcmFuY2hQb3NpdGlvbihDbGFzcywgc3RyaW5nLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKSB7XG4gICAgaWYgKHZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IHN0cmluZzsgIC8vL1xuICAgICAgc3RyaW5nID0gQ2xhc3M7IC8vL1xuICAgICAgQ2xhc3MgPSBQYXJzZVRyZWU7ICAvLy9cbiAgICB9XG4gICAgXG4gICAgY29uc3QgbGluZSA9IHN0cmluZywgLy8vXG4gICAgICAgICAgbGluZXMgPSBbbGluZV0sXG4gICAgICAgICAgYXJncyA9IFtudWxsLCBsaW5lcywgdmVydGljYWxCcmFuY2hQb3NpdGlvbl0sXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KENsYXNzLCBhcmdzKSk7ICAvLy9cblxuICAgIHJldHVybiB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsaW5lc0Zyb21EZXB0aChkZXB0aCkge1xuICBjb25zdCBsaW5lcyA9IFtdO1xuXG4gIGxldCBpbmRleCA9IDA7XG5cbiAgd2hpbGUgKGluZGV4IDwgZGVwdGgpIHtcbiAgICBsaW5lc1tpbmRleCsrXSA9IEVNUFRZX1NUUklORztcbiAgfVxuXG4gIHJldHVybiBsaW5lcztcbn1cbiJdfQ==