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
var DASH_CHARACTER = _necessary.characters.DASH_CHARACTER;
var HorizontalBranchParseTree = /*#__PURE__*/ function(ParseTree) {
    _inherits(HorizontalBranchParseTree, ParseTree);
    var _super = _createSuper(HorizontalBranchParseTree);
    function HorizontalBranchParseTree() {
        _classCallCheck(this, HorizontalBranchParseTree);
        return _super.apply(this, arguments);
    }
    _createClass(HorizontalBranchParseTree, null, [
        {
            key: "fromWidth",
            value: function fromWidth(width) {
                var string = stringFromCharactersWidth(width, DASH_CHARACTER), line = string, lines = [
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
    var string = _constants.EMPTY_STRING;
    for(var index = 0; index < charactersWidth; index++){
        string += character;
    }
    return string;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tb24vcGFyc2VUcmVlL2hvcml6b250YWxCcmFuY2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNoYXJhY3RlcnMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBQYXJzZVRyZWUgZnJvbSBcIi4uL3BhcnNlVHJlZVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgREFTSF9DSEFSQUNURVIgfSA9IGNoYXJhY3RlcnM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUgZXh0ZW5kcyBQYXJzZVRyZWUge1xuICBzdGF0aWMgZnJvbVdpZHRoKHdpZHRoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gc3RyaW5nRnJvbUNoYXJhY3RlcnNXaWR0aCh3aWR0aCwgREFTSF9DSEFSQUNURVIpLFxuICAgICAgICAgIGxpbmUgPSBzdHJpbmcsIC8vL1xuICAgICAgICAgIGxpbmVzID0gW2xpbmVdLFxuICAgICAgICAgIGhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUgPSBuZXcgSG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZShsaW5lcyk7XG5cbiAgICByZXR1cm4gaG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tQ2hhcmFjdGVyc1dpZHRoKGNoYXJhY3RlcnNXaWR0aCwgY2hhcmFjdGVyKSB7XG4gIGxldCBzdHJpbmcgPSBFTVBUWV9TVFJJTkc7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNoYXJhY3RlcnNXaWR0aDsgaW5kZXgrKykge1xuICAgIHN0cmluZyArPSBjaGFyYWN0ZXI7XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbIkRBU0hfQ0hBUkFDVEVSIiwiY2hhcmFjdGVycyIsIkhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUiLCJmcm9tV2lkdGgiLCJ3aWR0aCIsInN0cmluZyIsInN0cmluZ0Zyb21DaGFyYWN0ZXJzV2lkdGgiLCJsaW5lIiwibGluZXMiLCJob3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlIiwiUGFyc2VUcmVlIiwiY2hhcmFjdGVyc1dpZHRoIiwiY2hhcmFjdGVyIiwiRU1QVFlfU1RSSU5HIiwiaW5kZXgiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRWUsR0FBVyxDQUFYLFVBQVc7QUFFaEIsR0FBYyxDQUFkLFVBQWM7QUFFUCxHQUFpQixDQUFqQixVQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5QyxHQUFLLENBQUdBLGNBQWMsR0FBS0MsVUFBVSxZQUE3QkQsY0FBYztJQUVERSx5QkFBeUIsaUJBQS9CLFFBQVE7OzthQUFGQSx5QkFBeUI7Ozs7OztZQUNyQ0MsR0FBUyxFQUFUQSxDQUFTO21CQUFoQixRQUFRLENBQURBLFNBQVMsQ0FBQ0MsS0FBSyxFQUFFLENBQUM7Z0JBQ3ZCLEdBQUssQ0FBQ0MsTUFBTSxHQUFHQyx5QkFBeUIsQ0FBQ0YsS0FBSyxFQUFFSixjQUFjLEdBQ3hETyxJQUFJLEdBQUdGLE1BQU0sRUFDYkcsS0FBSyxHQUFHLENBQUNEO29CQUFBQSxJQUFJO2dCQUFBLENBQUMsRUFDZEUseUJBQXlCLEdBQUcsR0FBRyxDQUFDUCx5QkFBeUIsQ0FBQ00sS0FBSztnQkFFckUsTUFBTSxDQUFDQyx5QkFBeUI7WUFDbEMsQ0FBQzs7OztFQVJvREMsVUFBUztrQkFBM0NSLHlCQUF5QjtTQVdyQ0kseUJBQXlCLENBQUNLLGVBQWUsRUFBRUMsU0FBUyxFQUFFLENBQUM7SUFDOUQsR0FBRyxDQUFDUCxNQUFNLEdBQUdRLFVBQVk7SUFFekIsR0FBRyxDQUFFLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHLENBQUMsRUFBRUEsS0FBSyxHQUFHSCxlQUFlLEVBQUVHLEtBQUssR0FBSSxDQUFDO1FBQ3JEVCxNQUFNLElBQUlPLFNBQVM7SUFDckIsQ0FBQztJQUVELE1BQU0sQ0FBQ1AsTUFBTTtBQUNmLENBQUMifQ==