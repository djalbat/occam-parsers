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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZVRyZWUvdmVydGljYWxCcmFuY2guanMiLCIuLi9zcmMvY29uc3RhbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjaGFyYWN0ZXJzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgUGFyc2VUcmVlIGZyb20gXCIuLi9wYXJzZVRyZWVcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IEJBUl9DSEFSQUNURVIgfSA9IGNoYXJhY3RlcnM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIGV4dGVuZHMgUGFyc2VUcmVlIHtcbiAgY29uc3RydWN0b3IobGluZXMsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pIHtcbiAgICBzdXBlcihsaW5lcyk7XG4gICAgXG4gICAgdGhpcy52ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gdmVydGljYWxCcmFuY2hQb3NpdGlvbjtcbiAgfVxuICBcbiAgZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uO1xuICB9XG5cbiAgYWRkTGVmdE1hcmdpbihsZWZ0TWFyZ2luV2lkdGgpIHtcbiAgICBzdXBlci5hZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCk7XG5cbiAgICB0aGlzLnZlcnRpY2FsQnJhbmNoUG9zaXRpb24gKz0gbGVmdE1hcmdpbldpZHRoOyAvLy9cbiAgfVxuXG4gIHN0YXRpYyBmcm9tV2lkdGgod2lkdGgpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBCQVJfQ0hBUkFDVEVSLFxuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSAwLFxuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWUuZnJvbVN0cmluZ0FuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oVmVydGljYWxCcmFuY2hQYXJzZVRyZWUsIHN0cmluZywgdmVydGljYWxCcmFuY2hQb3NpdGlvbiksXG4gICAgICAgICAgbGVmdE1hcmdpbldpZHRoID0gTWF0aC5mbG9vcih3aWR0aC8yKSxcbiAgICAgICAgICByaWdodE1hcmdpbldpZHRoID0gd2lkdGggLSBsZWZ0TWFyZ2luV2lkdGggLSAxO1xuXG4gICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuYWRkTGVmdE1hcmdpbihsZWZ0TWFyZ2luV2lkdGgpO1xuICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmFkZFJpZ2h0TWFyZ2luKHJpZ2h0TWFyZ2luV2lkdGgpO1xuXG4gICAgcmV0dXJuIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21EZXB0aEFuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oQ2xhc3MsIGRlcHRoLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKSB7XG4gICAgY29uc3QgbGluZXMgPSBsaW5lc0Zyb21EZXB0aChkZXB0aCksXG4gICAgICAgICAgYXJncyA9IFsgbnVsbCwgbGluZXMsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24gXSxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoQ2xhc3MsIGFyZ3MpKTsgIC8vL1xuXG4gICAgcmV0dXJuIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdHJpbmdBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKENsYXNzLCBzdHJpbmcsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pIHtcbiAgICBpZiAodmVydGljYWxCcmFuY2hQb3NpdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gc3RyaW5nOyAgLy8vXG4gICAgICBzdHJpbmcgPSBDbGFzczsgLy8vXG4gICAgICBDbGFzcyA9IFBhcnNlVHJlZTsgIC8vL1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBsaW5lID0gc3RyaW5nLCAvLy9cbiAgICAgICAgICBsaW5lcyA9IFtsaW5lXSxcbiAgICAgICAgICBhcmdzID0gWyBudWxsLCBsaW5lcywgdmVydGljYWxCcmFuY2hQb3NpdGlvbiBdLFxuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShDbGFzcywgYXJncykpOyAgLy8vXG5cbiAgICByZXR1cm4gdmVydGljYWxCcmFuY2hQYXJzZVRyZWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gbGluZXNGcm9tRGVwdGgoZGVwdGgpIHtcbiAgY29uc3QgbGluZXMgPSBbXTtcblxuICBsZXQgaW5kZXggPSAwO1xuXG4gIHdoaWxlIChpbmRleCA8IGRlcHRoKSB7XG4gICAgbGluZXNbaW5kZXgrK10gPSBFTVBUWV9TVFJJTkc7XG4gIH1cblxuICByZXR1cm4gbGluZXM7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IEVNUFRZX1NUUklORyA9IFwiXCI7XG4iXSwibmFtZXMiOlsiQkFSX0NIQVJBQ1RFUiIsImNoYXJhY3RlcnMiLCJWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsImxpbmVzIiwidmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImdldFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJhZGRMZWZ0TWFyZ2luIiwibGVmdE1hcmdpbldpZHRoIiwiZnJvbVdpZHRoIiwid2lkdGgiLCJzdHJpbmciLCJ2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsImZyb21TdHJpbmdBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiTWF0aCIsImZsb29yIiwicmlnaHRNYXJnaW5XaWR0aCIsImFkZFJpZ2h0TWFyZ2luIiwiZnJvbURlcHRoQW5kVmVydGljYWxCcmFuY2hQb3NpdGlvbiIsIkNsYXNzIiwiZGVwdGgiLCJsaW5lc0Zyb21EZXB0aCIsImFyZ3MiLCJGdW5jdGlvbiIsInByb3RvdHlwZSIsImJpbmQiLCJhcHBseSIsInVuZGVmaW5lZCIsIlBhcnNlVHJlZSIsImxpbmUiLCJpbmRleCIsIkVNUFRZX1NUUklORyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVjLElBQUEsVUFBVyxXQUFYLFdBQVcsQ0FBQTtBQUVoQixJQUFBLFVBQWMsa0NBQWQsY0FBYyxFQUFBO0FBRVAsSUFBQSxVQUFjLFdBQWQsY0FBYyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0MsSUFBTSxBQUFFQSxhQUFhLEdBQUtDLFVBQVUsV0FBQSxDQUE1QkQsYUFBYSxBQUFlLEFBQUM7QUFFdEIsSUFBQSxBQUFNRSx1QkFBdUIsaUJBc0R6QyxBQXREWTs7O2FBQU1BLHVCQUF1QixDQUM5QkMsS0FBSyxFQUFFQyxzQkFBc0I7OztrQ0FDakNELEtBQUssQ0NaZixDRFlpQjtRQUViLE1BQUtDLHNCQUFzQixHQUFHQSxzQkFBc0IsQ0FBQzs7Ozs7WUFHdkRDLEdBQXlCLEVBQXpCQSwyQkFBeUI7bUJBQXpCQSxTQUFBQSx5QkFBeUIsR0FBRztnQkFDMUIsT0FBTyxJQUFJLENBQUNELHNCQUFzQixDQUFDO2FBQ3BDOzs7WUFFREUsR0FBYSxFQUFiQSxlQUFhO21CQUFiQSxTQUFBQSxhQUFhLENBQUNDLGVBQWUsRUFBRTtnQkFDN0IscUJBWmlCTCx1QkFBdUIsYUFZbENJLGVBQWEsRUFBbkIsSUFBSyxDQUFBLFlBQWVDLGVBQWUsQ0N0QnZDLENEc0J5QztnQkFFckMsSUFBSSxDQUFDSCxzQkFBc0IsSUFBSUcsZUFBZSxDQUFDLENBQUMsR0FBRzthQUNwRDs7OztZQUVNQyxHQUFTLEVBQVRBLFdBQVM7bUJBQWhCLFNBQU9BLFNBQVMsQ0FBQ0MsS0FBSyxFQUFFO2dCQUN0QixJ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