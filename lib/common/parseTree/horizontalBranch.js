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
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var HorizontalBranchParseTree = /*#__PURE__*/ function(ParseTree) {
    _inherits(HorizontalBranchParseTree, ParseTree);
    function HorizontalBranchParseTree() {
        _classCallCheck(this, HorizontalBranchParseTree);
        return _possibleConstructorReturn(this, _getPrototypeOf(HorizontalBranchParseTree).apply(this, arguments));
    }
    _createClass(HorizontalBranchParseTree, null, [
        {
            key: "fromWidth",
            value: function fromWidth(width) {
                var string = stringFromCharactersWidth(width, "-"), line = string, lines = [
                    line
                ], horizontalBranchParseTree = new HorizontalBranchParseTree(lines);
                return horizontalBranchParseTree;
            }
        }
    ]);
    return HorizontalBranchParseTree;
}(_parseTree.default);
exports.default = HorizontalBranchParseTree;
function stringFromCharactersWidth(charactersWidth, character) {
    var string = "";
    for(var index = 0; index < charactersWidth; index++){
        string += character;
    }
    return string;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tb24vcGFyc2VUcmVlL2hvcml6b250YWxCcmFuY2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQYXJzZVRyZWUgZnJvbSBcIi4uL3BhcnNlVHJlZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlIGV4dGVuZHMgUGFyc2VUcmVlIHtcbiAgc3RhdGljIGZyb21XaWR0aCh3aWR0aCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHN0cmluZ0Zyb21DaGFyYWN0ZXJzV2lkdGgod2lkdGgsIFwiLVwiKSxcbiAgICAgICAgICBsaW5lID0gc3RyaW5nLCAvLy9cbiAgICAgICAgICBsaW5lcyA9IFtsaW5lXSxcbiAgICAgICAgICBob3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlID0gbmV3IEhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUobGluZXMpO1xuXG4gICAgcmV0dXJuIGhvcml6b250YWxCcmFuY2hQYXJzZVRyZWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbUNoYXJhY3RlcnNXaWR0aChjaGFyYWN0ZXJzV2lkdGgsIGNoYXJhY3Rlcikge1xuICBsZXQgc3RyaW5nID0gXCJcIjtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY2hhcmFjdGVyc1dpZHRoOyBpbmRleCsrKSB7XG4gICAgc3RyaW5nICs9IGNoYXJhY3RlcjtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFVSxHQUFjLENBQWQsVUFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWYseUJBQXlCO2NBQXpCLHlCQUF5QjthQUF6Qix5QkFBeUI7OEJBQXpCLHlCQUF5QjtnRUFBekIseUJBQXlCOztpQkFBekIseUJBQXlCOztZQUNyQyxHQUFTLEdBQVQsU0FBUzs0QkFBVCxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ3ZCLEdBQUssQ0FBQyxNQUFNLEdBQUcseUJBQXlCLENBQUMsS0FBSyxHQUFFLENBQUcsSUFDN0MsSUFBSSxHQUFHLE1BQU0sRUFDYixLQUFLO29CQUFJLElBQUk7bUJBQ2IseUJBQXlCLEdBQUcsR0FBRyxDQUFDLHlCQUF5QixDQUFDLEtBQUs7dUJBRTlELHlCQUF5QjtZQUNsQyxDQUFDOzs7V0FSa0IseUJBQXlCO0VBRnhCLFVBQWM7a0JBRWYseUJBQXlCO1NBV3JDLHlCQUF5QixDQUFDLGVBQWUsRUFBRSxTQUFTLEVBQUUsQ0FBQztJQUM5RCxHQUFHLENBQUMsTUFBTTtRQUVMLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxlQUFlLEVBQUUsS0FBSyxHQUFJLENBQUM7UUFDckQsTUFBTSxJQUFJLFNBQVM7SUFDckIsQ0FBQztXQUVNLE1BQU07QUFDZixDQUFDIn0=