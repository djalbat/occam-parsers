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
var DASH_CHARACTER = _necessary.characters.DASH_CHARACTER;
var HorizontalBranchParseTree = /*#__PURE__*/ function(ParseTree) {
    _inherits(HorizontalBranchParseTree, ParseTree);
    var _super = _create_super(HorizontalBranchParseTree);
    function HorizontalBranchParseTree() {
        _class_call_check(this, HorizontalBranchParseTree);
        return _super.apply(this, arguments);
    }
    _create_class(HorizontalBranchParseTree, null, [
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZVRyZWUvaG9yaXpvbnRhbEJyYW5jaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY2hhcmFjdGVycyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFBhcnNlVHJlZSBmcm9tIFwiLi4vcGFyc2VUcmVlXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBEQVNIX0NIQVJBQ1RFUiB9ID0gY2hhcmFjdGVycztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZSBleHRlbmRzIFBhcnNlVHJlZSB7XG4gIHN0YXRpYyBmcm9tV2lkdGgod2lkdGgpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBzdHJpbmdGcm9tQ2hhcmFjdGVyc1dpZHRoKHdpZHRoLCBEQVNIX0NIQVJBQ1RFUiksXG4gICAgICAgICAgbGluZSA9IHN0cmluZywgLy8vXG4gICAgICAgICAgbGluZXMgPSBbXG4gICAgICAgICAgICBsaW5lXG4gICAgICAgICAgXSxcbiAgICAgICAgICBob3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlID0gbmV3IEhvcml6b250YWxCcmFuY2hQYXJzZVRyZWUobGluZXMpO1xuXG4gICAgcmV0dXJuIGhvcml6b250YWxCcmFuY2hQYXJzZVRyZWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbUNoYXJhY3RlcnNXaWR0aChjaGFyYWN0ZXJzV2lkdGgsIGNoYXJhY3Rlcikge1xuICBsZXQgc3RyaW5nID0gRU1QVFlfU1RSSU5HO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjaGFyYWN0ZXJzV2lkdGg7IGluZGV4KyspIHtcbiAgICBzdHJpbmcgKz0gY2hhcmFjdGVyO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJIb3Jpem9udGFsQnJhbmNoUGFyc2VUcmVlIiwiREFTSF9DSEFSQUNURVIiLCJjaGFyYWN0ZXJzIiwiZnJvbVdpZHRoIiwid2lkdGgiLCJzdHJpbmciLCJzdHJpbmdGcm9tQ2hhcmFjdGVyc1dpZHRoIiwibGluZSIsImxpbmVzIiwiaG9yaXpvbnRhbEJyYW5jaFBhcnNlVHJlZSIsIlBhcnNlVHJlZSIsImNoYXJhY3RlcnNXaWR0aCIsImNoYXJhY3RlciIsIkVNUFRZX1NUUklORyIsImluZGV4Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7Ozt5QkFSTTtnRUFFTDt5QkFFTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFNLEFBQUVDLGlCQUFtQkMsc0JBQW5CRDtBQUVPLElBQUEsQUFBTUQsMENBYWxCLEFBYlk7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDWkcsS0FBQUE7bUJBQVAsU0FBT0EsVUFBVUMsS0FBSztnQkFDcEIsSUFBTUMsU0FBU0MsMEJBQTBCRixPQUFPSCxpQkFDMUNNLE9BQU9GLFFBQ1BHLFFBQVE7b0JBQ05EO2lCQUNELEVBQ0RFLDRCQUE0QixJQVBqQlQsMEJBTytDUTtnQkFFaEUsT0FBT0M7WUFDVDs7O1dBVm1CVDtFQUFrQ1U7QUFhdkQsU0FBU0osMEJBQTBCSyxlQUFlLEVBQUVDLFNBQVM7SUFDM0QsSUFBSVAsU0FBU1E7SUFFYixJQUFLLElBQUlDLFFBQVEsR0FBR0EsUUFBUUgsaUJBQWlCRyxRQUFTO1FBQ3BEVCxVQUFVTztJQUNaO0lBRUEsT0FBT1A7QUFDVCJ9