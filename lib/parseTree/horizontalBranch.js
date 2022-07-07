"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return HorizontalBranchParseTree;
    }
});
var _necessary = require("necessary");
var _parseTree = /*#__PURE__*/ _interopRequireDefault(require("../parseTree"));
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
function stringFromCharactersWidth(charactersWidth, character) {
    var string = _constants.EMPTY_STRING;
    for(var index = 0; index < charactersWidth; index++){
        string += character;
    }
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZVRyZWUvaG9yaXpvbnRhbEJyYW5jaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY2hhcmFjdGVycyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFBhcnNlVHJlZSBmcm9tIFwiLi4vcGFyc2VUcmVlXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBEQVNIX0NIQVJBQ1RFUiB9ID0gY2hhcmFjdGVycztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZSBleHRlbmRzIFBhcnNlVHJlZSB7XG4gIHN0YXRpYyBmcm9tV2lkdGgod2lkdGgpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBzdHJpbmdGcm9tQ2hhcmFjdGVyc1dpZHRoKHdpZHRoLCBEQVNIX0NIQVJBQ1RFUiksXG4gICAgICAgICAgbGluZSA9IHN0cmluZywgLy8vXG4gICAgICAgICAgbGluZXMgPSBbbGluZV0sXG4gICAgICAgICAgaG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZSA9IG5ldyBIb3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlKGxpbmVzKTtcblxuICAgIHJldHVybiBob3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21DaGFyYWN0ZXJzV2lkdGgoY2hhcmFjdGVyc1dpZHRoLCBjaGFyYWN0ZXIpIHtcbiAgbGV0IHN0cmluZyA9IEVNUFRZX1NUUklORztcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY2hhcmFjdGVyc1dpZHRoOyBpbmRleCsrKSB7XG4gICAgc3RyaW5nICs9IGNoYXJhY3RlcjtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiSG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZSIsIkRBU0hfQ0hBUkFDVEVSIiwiY2hhcmFjdGVycyIsImZyb21XaWR0aCIsIndpZHRoIiwic3RyaW5nIiwic3RyaW5nRnJvbUNoYXJhY3RlcnNXaWR0aCIsImxpbmUiLCJsaW5lcyIsImhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUiLCJQYXJzZVRyZWUiLCJjaGFyYWN0ZXJzV2lkdGgiLCJjaGFyYWN0ZXIiLCJFTVBUWV9TVFJJTkciLCJpbmRleCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7O2VBVVFBLHlCQUF5Qjs7O3lCQVJuQixXQUFXOzhEQUVoQixjQUFjO3lCQUVQLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0MsSUFBTSxBQUFFQyxjQUFjLEdBQUtDLFVBQVUsV0FBQSxDQUE3QkQsY0FBYyxBQUFlLEFBQUM7QUFFdkIsSUFBQSxBQUFNRCx5QkFBeUIsaUJBVzNDLEFBWFk7OzthQUFNQSx5QkFBeUI7Ozs7OztZQUNyQ0csR0FBUyxFQUFUQSxXQUFTO21CQUFoQixTQUFPQSxTQUFTLENBQUNDLEtBQUssRUFBRTtnQkFDdEIsSUFBTUMsTUFBTSxHQUFHQyx5QkFBeUIsQ0FBQ0YsS0FBSyxFQUFFSCxjQUFjLENBQUMsRUFDekRNLElBQUksR0FBR0YsTUFBTSxFQUNiRyxLQUFLLEdBQUc7b0JBQUNELElBQUk7aUJBQUMsRUFDZEUseUJBQXlCLEdBQUcsSUFBSVQseUJBQXlCLENBQUNRLEtBQUssQ0FBQyxBQUFDO2dCQUV2RSxPQUFPQyx5QkFBeUIsQ0FBQzthQUNsQzs7OztDQUNGLENBVHNEQyxVQUFTLFFBQUEsQ0FTL0Q7QUFFRCxTQUFTSix5QkFBeUIsQ0FBQ0ssZUFBZSxFQUFFQyxTQUFTLEVBQUU7SUFDN0QsSUFBSVAsTUFBTSxHQUFHUSxVQUFZLGFBQUEsQUFBQztJQUUxQixJQUFLLElBQUlDLEtBQUssR0FBRyxDQUFDLEVBQUVBLEtBQUssR0FBR0gsZUFBZSxFQUFFRyxLQUFLLEVBQUUsQ0FBRTtRQUNwRFQsTUFBTSxJQUFJTyxTQUFTLENBQUM7S0FDckI7SUFFRCxPQUFPUCxNQUFNLENBQUM7Q0FDZiJ9