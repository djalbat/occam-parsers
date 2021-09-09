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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tb24vcGFyc2VUcmVlL3ZlcnRpY2FsQnJhbmNoLmpzIl0sIm5hbWVzIjpbIlBhcnNlVHJlZSIsIkJBUiIsIkVNUFRZX1NUUklORyIsIlZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwiY29uc3RydWN0b3IiLCJsaW5lcyIsInZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJnZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiYWRkTGVmdE1hcmdpbiIsImxlZnRNYXJnaW5XaWR0aCIsImZyb21XaWR0aCIsIndpZHRoIiwic3RyaW5nIiwidmVydGljYWxCcmFuY2hQYXJzZVRyZWUiLCJmcm9tU3RyaW5nQW5kVmVydGljYWxCcmFuY2hQb3NpdGlvbiIsIk1hdGgiLCJmbG9vciIsInJpZ2h0TWFyZ2luV2lkdGgiLCJhZGRSaWdodE1hcmdpbiIsImZyb21EZXB0aEFuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJDbGFzcyIsImRlcHRoIiwibGluZXNGcm9tRGVwdGgiLCJhcmdzIiwiRnVuY3Rpb24iLCJwcm90b3R5cGUiLCJiaW5kIiwiYXBwbHkiLCJ1bmRlZmluZWQiLCJsaW5lIiwiaW5kZXgiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRVUsR0FBYyxDQUFkLFVBQWM7QUFFRixHQUFpQixDQUFqQixVQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFOUIsdUJBQXVCLGlCQUE3QixRQUFRO2NBQUYsdUJBQXVCO2FBQXZCLHVCQUF1QixDQUM5QixLQUFLLEVBQUUsc0JBQXNCOzhCQUR0Qix1QkFBdUI7O2lFQUF2Qix1QkFBdUIsYUFFbEMsS0FBSztjQUVOLHNCQUFzQixHQUFHLHNCQUFzQjs7O2lCQUpuQyx1QkFBdUI7O1lBTzFDLEdBQXlCLEdBQXpCLHlCQUF5QjttQkFBekIsUUFBUSxDQUFSLHlCQUF5QixH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