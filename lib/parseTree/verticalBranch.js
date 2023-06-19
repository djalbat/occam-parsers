"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return VerticalBranchParseTree;
    }
});
var _necessary = require("necessary");
var _parseTree = /*#__PURE__*/ _interop_require_default(require("../parseTree"));
var _constants = require("../constants");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var BAR_CHARACTER = _necessary.characters.BAR_CHARACTER;
var VerticalBranchParseTree = /*#__PURE__*/ function(ParseTree) {
    _inherits(VerticalBranchParseTree, ParseTree);
    var _super = _create_super(VerticalBranchParseTree);
    function VerticalBranchParseTree(lines, verticalBranchPosition) {
        _class_call_check(this, VerticalBranchParseTree);
        var _this;
        _this = _super.call(this, lines);
        _this.verticalBranchPosition = verticalBranchPosition;
        return _this;
    }
    _create_class(VerticalBranchParseTree, [
        {
            key: "getVerticalBranchPosition",
            value: function getVerticalBranchPosition() {
                return this.verticalBranchPosition;
            }
        },
        {
            key: "addLeftMargin",
            value: function addLeftMargin(leftMarginWidth) {
                _get(_get_prototype_of(VerticalBranchParseTree.prototype), "addLeftMargin", this).call(this, leftMarginWidth);
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
                var lines = linesFromDepth(depth), verticalBranchParseTree = new Class(lines, verticalBranchPosition);
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
                ], verticalBranchParseTree = new Class(lines, verticalBranchPosition);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZVRyZWUvdmVydGljYWxCcmFuY2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNoYXJhY3RlcnMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBQYXJzZVRyZWUgZnJvbSBcIi4uL3BhcnNlVHJlZVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgQkFSX0NIQVJBQ1RFUiB9ID0gY2hhcmFjdGVycztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUgZXh0ZW5kcyBQYXJzZVRyZWUge1xuICBjb25zdHJ1Y3RvcihsaW5lcywgdmVydGljYWxCcmFuY2hQb3NpdGlvbikge1xuICAgIHN1cGVyKGxpbmVzKTtcbiAgICBcbiAgICB0aGlzLnZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uO1xuICB9XG4gIFxuICBnZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRpY2FsQnJhbmNoUG9zaXRpb247XG4gIH1cblxuICBhZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCkge1xuICAgIHN1cGVyLmFkZExlZnRNYXJnaW4obGVmdE1hcmdpbldpZHRoKTtcblxuICAgIHRoaXMudmVydGljYWxCcmFuY2hQb3NpdGlvbiArPSBsZWZ0TWFyZ2luV2lkdGg7IC8vL1xuICB9XG5cbiAgc3RhdGljIGZyb21XaWR0aCh3aWR0aCkge1xuICAgIGNvbnN0IHN0cmluZyA9IEJBUl9DSEFSQUNURVIsXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IDAsXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tU3RyaW5nQW5kVmVydGljYWxCcmFuY2hQb3NpdGlvbihWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSwgc3RyaW5nLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKSxcbiAgICAgICAgICBsZWZ0TWFyZ2luV2lkdGggPSBNYXRoLmZsb29yKHdpZHRoLzIpLFxuICAgICAgICAgIHJpZ2h0TWFyZ2luV2lkdGggPSB3aWR0aCAtIGxlZnRNYXJnaW5XaWR0aCAtIDE7XG5cbiAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5hZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCk7XG4gICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCk7XG5cbiAgICByZXR1cm4gdmVydGljYWxCcmFuY2hQYXJzZVRyZWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbURlcHRoQW5kVmVydGljYWxCcmFuY2hQb3NpdGlvbihDbGFzcywgZGVwdGgsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pIHtcbiAgICBjb25zdCBsaW5lcyA9IGxpbmVzRnJvbURlcHRoKGRlcHRoKSxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IG5ldyBDbGFzcyhsaW5lcywgdmVydGljYWxCcmFuY2hQb3NpdGlvbik7XG5cbiAgICByZXR1cm4gdmVydGljYWxCcmFuY2hQYXJzZVRyZWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0cmluZ0FuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oQ2xhc3MsIHN0cmluZywgdmVydGljYWxCcmFuY2hQb3NpdGlvbikge1xuICAgIGlmICh2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSBzdHJpbmc7ICAvLy9cblxuICAgICAgc3RyaW5nID0gQ2xhc3M7IC8vL1xuXG4gICAgICBDbGFzcyA9IFBhcnNlVHJlZTsgIC8vL1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBsaW5lID0gc3RyaW5nLCAvLy9cbiAgICAgICAgICBsaW5lcyA9IFtcbiAgICAgICAgICAgIGxpbmVcbiAgICAgICAgICBdLFxuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gbmV3IENsYXNzKGxpbmVzLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKTtcblxuICAgIHJldHVybiB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsaW5lc0Zyb21EZXB0aChkZXB0aCkge1xuICBjb25zdCBsaW5lcyA9IFtdO1xuXG4gIGxldCBpbmRleCA9IDA7XG5cbiAgd2hpbGUgKGluZGV4IDwgZGVwdGgpIHtcbiAgICBsaW5lc1tpbmRleCsrXSA9IEVNUFRZX1NUUklORztcbiAgfVxuXG4gIHJldHVybiBsaW5lcztcbn1cbiJdLCJuYW1lcyI6WyJWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsIkJBUl9DSEFSQUNURVIiLCJjaGFyYWN0ZXJzIiwibGluZXMiLCJ2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImFkZExlZnRNYXJnaW4iLCJsZWZ0TWFyZ2luV2lkdGgiLCJmcm9tV2lkdGgiLCJ3aWR0aCIsInN0cmluZyIsInZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwiZnJvbVN0cmluZ0FuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24iLCJNYXRoIiwiZmxvb3IiLCJyaWdodE1hcmdpbldpZHRoIiwiYWRkUmlnaHRNYXJnaW4iLCJmcm9tRGVwdGhBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwiQ2xhc3MiLCJkZXB0aCIsImxpbmVzRnJvbURlcHRoIiwidW5kZWZpbmVkIiwiUGFyc2VUcmVlIiwibGluZSIsImluZGV4IiwiRU1QVFlfU1RSSU5HIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7Ozt5QkFSTTtnRUFFTDt5QkFFTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdCLElBQU0sQUFBRUMsZ0JBQWtCQyxzQkFBbEJEO0FBRU8sSUFBQSxBQUFNRCx3Q0F3RGxCLEFBeERZO2NBQU1BOytCQUFBQTthQUFBQSx3QkFDUEcsS0FBSyxFQUFFQyxzQkFBc0I7Z0NBRHRCSjs7a0NBRVhHO1FBRU4sTUFBS0MseUJBQXlCQTs7O2tCQUpiSjs7WUFPbkJLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0Q7WUFDZDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjQyxlQUFlO2dCQUMzQix1QkFaaUJQLG9DQVlYTSxpQkFBTixJQUFLLGFBQWVDO2dCQUVwQixJQUFJLENBQUNILDBCQUEwQkcsaUJBQWlCLEdBQUc7WUFDckQ7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsVUFBVUMsS0FBSztnQkFDcEIsSUFBTUMsU0FBU1QsZUFDVEcseUJBQXlCLEdBQ3pCTywwQkFBMEJYLEFBcEJmQSx3QkFvQnVDWSxvQ0FwQnZDWix5QkFvQm9HVSxRQUFRTix5QkFDdkhHLGtCQUFrQk0sS0FBS0MsTUFBTUwsUUFBTSxJQUNuQ00sbUJBQW1CTixRQUFRRixrQkFBa0I7Z0JBRW5ESSx3QkFBd0JMLGNBQWNDO2dCQUN0Q0ksd0JBQXdCSyxlQUFlRDtnQkFFdkMsT0FBT0o7WUFDVDs7O1lBRU9NLEtBQUFBO21CQUFQLFNBQU9BLG1DQUFtQ0MsS0FBSyxFQUFFQyxLQUFLLEVBQUVmLHNCQUFzQjtnQkFDNUUsSUFBTUQsUUFBUWlCLGVBQWVELFFBQ3ZCUiwwQkFBMEIsSUFBSU8sTUFBTWYsT0FBT0M7Z0JBRWpELE9BQU9PO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxvQ0FBb0NNLEtBQUssRUFBRVIsTUFBTSxFQUFFTixzQkFBc0I7Z0JBQzlFLElBQUlBLDJCQUEyQmlCLFdBQVc7b0JBQ3hDakIseUJBQXlCTSxRQUFTLEdBQUc7b0JBRXJDQSxTQUFTUSxPQUFPLEdBQUc7b0JBRW5CQSxRQUFRSSxvQkFBWSxHQUFHO2dCQUN6QjtnQkFFQSxJQUFNQyxPQUFPYixRQUNQUCxRQUFRO29CQUNOb0I7aUJBQ0QsRUFDRFosMEJBQTBCLElBQUlPLE1BQU1mLE9BQU9DO2dCQUVqRCxPQUFPTztZQUNUOzs7V0FyRG1CWDtFQUFnQ3NCO0FBd0RyRCxTQUFTRixlQUFlRCxLQUFLO0lBQzNCLElBQU1oQixRQUFRLEVBQUU7SUFFaEIsSUFBSXFCLFFBQVE7SUFFWixNQUFPQSxRQUFRTCxNQUFPO1FBQ3BCaEIsS0FBSyxDQUFDcUIsUUFBUSxHQUFHQztJQUNuQjtJQUVBLE9BQU90QjtBQUNUIn0=