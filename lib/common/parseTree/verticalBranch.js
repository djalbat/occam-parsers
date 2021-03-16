"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _parseTree = _interopRequireDefault(require("../parseTree"));
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
var VerticalBranchParseTree = function(ParseTree) {
    _inherits(VerticalBranchParseTree, _parseTree.default);
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
                var string = "|", verticalBranchPosition = 0, verticalBranchParseTree = VerticalBranchParseTree.fromStringAndVerticalBranchPosition(VerticalBranchParseTree, string, verticalBranchPosition), leftMarginWidth = Math.floor(width / 2), rightMarginWidth = width - leftMarginWidth - 1;
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
                    verticalBranchPosition = string;
                    string = Class;
                    Class = _parseTree.default;
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
        lines[index++] = "";
    }
    return lines;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tb24vcGFyc2VUcmVlL3ZlcnRpY2FsQnJhbmNoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUGFyc2VUcmVlIGZyb20gXCIuLi9wYXJzZVRyZWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUgZXh0ZW5kcyBQYXJzZVRyZWUge1xuICBjb25zdHJ1Y3RvcihsaW5lcywgdmVydGljYWxCcmFuY2hQb3NpdGlvbikge1xuICAgIHN1cGVyKGxpbmVzKTtcbiAgICBcbiAgICB0aGlzLnZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uO1xuICB9XG4gIFxuICBnZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRpY2FsQnJhbmNoUG9zaXRpb247XG4gIH1cblxuICBhZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCkge1xuICAgIHN1cGVyLmFkZExlZnRNYXJnaW4obGVmdE1hcmdpbldpZHRoKTtcblxuICAgIHRoaXMudmVydGljYWxCcmFuY2hQb3NpdGlvbiArPSBsZWZ0TWFyZ2luV2lkdGg7IC8vL1xuICB9XG5cbiAgc3RhdGljIGZyb21XaWR0aCh3aWR0aCkge1xuICAgIGNvbnN0IHN0cmluZyA9IFwifFwiLFxuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSAwLFxuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZnJvbVN0cmluZ0FuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oVmVydGljYWxCcmFuY2hQYXJzZVRyZWUsIHN0cmluZywgdmVydGljYWxCcmFuY2hQb3NpdGlvbiksXG4gICAgICAgICAgbGVmdE1hcmdpbldpZHRoID0gTWF0aC5mbG9vcih3aWR0aC8yKSxcbiAgICAgICAgICByaWdodE1hcmdpbldpZHRoID0gd2lkdGggLSBsZWZ0TWFyZ2luV2lkdGggLSAxO1xuXG4gICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuYWRkTGVmdE1hcmdpbihsZWZ0TWFyZ2luV2lkdGgpO1xuICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmFkZFJpZ2h0TWFyZ2luKHJpZ2h0TWFyZ2luV2lkdGgpO1xuXG4gICAgcmV0dXJuIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21EZXB0aEFuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oQ2xhc3MsIGRlcHRoLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKSB7XG4gICAgY29uc3QgbGluZXMgPSBsaW5lc0Zyb21EZXB0aChkZXB0aCksXG4gICAgICAgICAgYXJncyA9IFtudWxsLCBsaW5lcywgdmVydGljYWxCcmFuY2hQb3NpdGlvbl0sXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KENsYXNzLCBhcmdzKSk7ICAvLy9cblxuICAgIHJldHVybiB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RyaW5nQW5kVmVydGljYWxCcmFuY2hQb3NpdGlvbihDbGFzcywgc3RyaW5nLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKSB7XG4gICAgaWYgKHZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IHN0cmluZztcbiAgICAgIHN0cmluZyA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBQYXJzZVRyZWU7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGxpbmUgPSBzdHJpbmcsIC8vL1xuICAgICAgICAgIGxpbmVzID0gW2xpbmVdLFxuICAgICAgICAgIGFyZ3MgPSBbbnVsbCwgbGluZXMsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb25dLFxuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShDbGFzcywgYXJncykpOyAgLy8vXG5cbiAgICByZXR1cm4gdmVydGljYWxCcmFuY2hQYXJzZVRyZWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gbGluZXNGcm9tRGVwdGgoZGVwdGgpIHtcbiAgY29uc3QgbGluZXMgPSBbXTtcblxuICBsZXQgaW5kZXggPSAwO1xuXG4gIHdoaWxlIChpbmRleCA8IGRlcHRoKSB7XG4gICAgbGluZXNbaW5kZXgrK10gPSBcIlwiO1xuICB9XG5cbiAgcmV0dXJuIGxpbmVzO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQUE7Ozs7O0lBRUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFQSx1QkFBQSxZQUFBLFNBQUE7Y0FBQSx1QkFBQSxFQUZBLFVBQUE7YUFFQSx1QkFBQSxDQUNBLEtBQUEsRUFBQSxzQkFBQTs4QkFEQSx1QkFBQTs7aUVBQUEsdUJBQUEsYUFFQSxLQUFBO2NBRUEsc0JBQUEsR0FBQSxzQkFBQTs7O2lCQUpBLHVCQUFBOztBQU9BLGVBQUEsR0FBQSx5QkFBQTs0QkFBQSx5QkFBQTs0QkFDQSxzQkFBQTs7OztBQUdBLGVBQUEsR0FBQSxhQUFBOzRCQUFBLGFBQUEsQ0FBQSxlQUFBO3FDQVhBLHVCQUFBLGNBWUEsYUFBQSxvQkFBQSxlQUFBO3FCQUVBLHNCQUFBLElBQUEsZUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBOzs7OztBQUdBLGVBQUEsR0FBQSxTQUFBOzRCQUFBLFNBQUEsQ0FBQSxLQUFBO29CQUNBLE1BQUEsSUFBQSxDQUFBLEdBQ0Esc0JBQUEsR0FBQSxDQUFBLEVBQ0EsdUJBQUEsR0FBQSx1QkFBQSxDQUFBLG1DQUFBLENBQUEsdUJBQUEsRUFBQSxNQUFBLEVBQUEsc0JBQUEsR0FDQSxlQUFBLEdBQUEsSUFBQSxDQUFBLEtBQUEsQ0FBQSxLQUFBLEdBQUEsQ0FBQSxHQUNBLGdCQUFBLEdBQUEsS0FBQSxHQUFBLGVBQUEsR0FBQSxDQUFBO0FBRUEsdUNBQUEsQ0FBQSxhQUFBLENBQUEsZUFBQTtBQUNBLHVDQUFBLENBQUEsY0FBQSxDQUFBLGdCQUFBO3VCQUVBLHVCQUFBOzs7O0FBR0EsZUFBQSxHQUFBLGtDQUFBOzRCQUFBLGtDQUFBLENBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQSxzQkFBQTtvQkFDQSxLQUFBLEdBQUEsY0FBQSxDQUFBLEtBQUEsR0FDQSxJQUFBO0FBQUEsd0JBQUE7QUFBQSx5QkFBQTtBQUFBLDBDQUFBO21CQUNBLHVCQUFBLFFBQUEsUUFBQSxDQUFBLFNBQUEsQ0FBQSxJQUFBLENBQUEsS0FBQSxDQUFBLEtBQUEsRUFBQSxJQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUE7dUJBRUEsdUJBQUE7Ozs7QUFHQSxlQUFBLEdBQUEsbUNBQUE7NEJBQUEsbUNBQUEsQ0FBQSxLQUFBLEVBQUEsTUFBQSxFQUFBLHNCQUFBO29CQUNBLHNCQUFBLEtBQUEsU0FBQTtBQUNBLDBDQUFBLEdBQUEsTUFBQTtBQUNBLDBCQUFBLEdBQUEsS0FBQTtBQUNBLHlCQUFBLEdBNUNBLFVBQUE7O29CQStDQSxJQUFBLEdBQUEsTUFBQSxFQUNBLEtBQUE7QUFBQSx3QkFBQTttQkFDQSxJQUFBO0FBQUEsd0JBQUE7QUFBQSx5QkFBQTtBQUFBLDBDQUFBO21CQUNBLHVCQUFBLFFBQUEsUUFBQSxDQUFBLFNBQUEsQ0FBQSxJQUFBLENBQUEsS0FBQSxDQUFBLEtBQUEsRUFBQSxJQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUE7dUJBRUEsdUJBQUE7Ozs7V0FsREEsdUJBQUE7RUFGQSxVQUFBO2tCQUVBLHVCQUFBO1NBc0RBLGNBQUEsQ0FBQSxLQUFBO1FBQ0EsS0FBQTtRQUVBLEtBQUEsR0FBQSxDQUFBO1VBRUEsS0FBQSxHQUFBLEtBQUE7QUFDQSxhQUFBLENBQUEsS0FBQTs7V0FHQSxLQUFBIn0=