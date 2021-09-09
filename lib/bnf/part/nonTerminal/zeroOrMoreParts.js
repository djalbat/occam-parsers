"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamLexers = require("occam-lexers");
var _collectionOfParts = _interopRequireDefault(require("./collectionOfParts"));
var _partTypes = require("../../partTypes");
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
var asterisk = _occamLexers.specialSymbols.asterisk;
var ZeroOrMorePartsPart = /*#__PURE__*/ function(CollectionOfPartsPart) {
    _inherits(ZeroOrMorePartsPart, CollectionOfPartsPart);
    function ZeroOrMorePartsPart(part) {
        _classCallCheck(this, ZeroOrMorePartsPart);
        var type = _partTypes.ZeroOrMorePartsPartType; ///
        return _possibleConstructorReturn(this, _getPrototypeOf(ZeroOrMorePartsPart).call(this, type, part));
    }
    _createClass(ZeroOrMorePartsPart, [
        {
            key: "parse",
            value: function parse(nodes, context, callback) {
                var parsed;
                var part = this.getPart();
                if (callback) {
                    parsed = callback();
                    if (!parsed) {
                        var parsePart = function() {
                            var parsed = part.parse(nodes, context, function() {
                                var parsed = callback();
                                if (!parsed) {
                                    parsed = parsePart();
                                }
                                return parsed;
                            });
                            return parsed;
                        };
                        parsed = parsePart();
                    }
                } else {
                    for(;;){
                        parsed = part.parse(nodes, context);
                        if (!parsed) {
                            break;
                        }
                    }
                    parsed = true;
                }
                return parsed;
            }
        },
        {
            key: "asString",
            value: function asString() {
                var operatorString = asterisk, string = _get(_getPrototypeOf(ZeroOrMorePartsPart.prototype), "asString", this).call(this, operatorString);
                return string;
            }
        },
        {
            key: "clone",
            value: function clone() {
                return _get(_getPrototypeOf(ZeroOrMorePartsPart.prototype), "clone", this).call(this, ZeroOrMorePartsPart);
            }
        }
    ]);
    return ZeroOrMorePartsPart;
}(_collectionOfParts.default);
exports.default = ZeroOrMorePartsPart;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ibmYvcGFydC9ub25UZXJtaW5hbC96ZXJvT3JNb3JlUGFydHMuanMiXSwibmFtZXMiOlsic3BlY2lhbFN5bWJvbHMiLCJDb2xsZWN0aW9uT2ZQYXJ0c1BhcnQiLCJaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZSIsImFzdGVyaXNrIiwiWmVyb09yTW9yZVBhcnRzUGFydCIsImNvbnN0cnVjdG9yIiwicGFydCIsInR5cGUiLCJwYXJzZSIsIm5vZGVzIiwiY29udGV4dCIsImNhbGxiYWNrIiwicGFyc2VkIiwiZ2V0UGFydCIsInBhcnNlUGFydCIsImFzU3RyaW5nIiwib3BlcmF0b3JTdHJpbmciLCJzdHJpbmciLCJjbG9uZSJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFbUIsR0FBYyxDQUFkLFlBQWM7QUFFWCxHQUFxQixDQUFyQixrQkFBcUI7QUFFZixHQUFpQixDQUFqQixVQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekQsR0FBSyxDQUFHLFFBQVEsR0FOZSxZQUFjLGdCQU1yQyxRQUFRO0lBRUssbUJBQW1CLGlCQUF6QixRQUFRO2NBQUYsbUJBQW1CO2FBQW5CLG1CQUFtQixDQUMxQixJQUFJOzhCQURHLG1CQUFtQjtRQUVwQyxHQUFLLENBQUMsSUFBSSxHQU4wQixVQUFpQix5QkFNZixDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0VBRnhCLG1CQUFtQixhQUk5QixJQUFJLEVBQUUsSUFBSTs7aUJBSkMsbUJBQW1COztZQU90QyxHQUFLLEdBQUwsS0FBSzttQkFBTCxRQUFRLENBQVIsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUM7Z0JBQy9CLEdBQUcsQ0FBQyxNQUFNO2dCQUVWLEdBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU87Z0JBRXpCLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQztvQkFDYixNQUFNLEdBQUcsUUFBUTtvQkFFakIsRUFBRSxHQUFHLE1BQU0sRUFBRSxDQUFDO3dCQUNaLEdBQUssQ0FBQyxTQUFTLEdBQUcsUUFDMUIsR0FEZ0MsQ0FBQzs0QkFDdkIsR0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFDcEQsR0FEMEQsQ0FBQztnQ0FDL0MsR0FBRyxDQUFDLE1BQU0sR0FBRyxRQUFRO2dDQUVyQixFQUFFLEdBQUcsTUFBTSxFQUFFLENBQUM7b0NBQ1osTUFBTSxHQUFHLFNBQVM7Z0NBQ3BCLENBQUM7Z0NBRUQsTUFBTSxDQUFDLE1BQU07NEJBQ2YsQ0FBQzs0QkFFRCxNQUFNLENBQUMsTUFBTTt3QkFDZixDQUFDO3dCQUVELE1BQU0sR0FBRyxTQUFTO29CQUNwQixDQUFDO2dCQUNILENBQUMsTUFBTSxDQUFDO29CQUNOLEdBQUcsSUFBTSxDQUFDO3dCQUNSLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPO3dCQUVsQyxFQUFFLEdBQUcsTUFBTSxFQUFFLENBQUM7NEJBQ1osS0FBSzt3QkFDUCxDQUFDO29CQUNILENBQUM7b0JBRUQsTUFBTSxHQUFHLElBQUk7Z0JBQ2YsQ0FBQztnQkFFRCxNQUFNLENBQUMsTUFBTTtZQUNmLENBQUM7OztZQUVELEdBQVEsR0FBUixRQUFRO21CQUFSLFFBQVEsQ0FBUixRQUFRLEdBQUcsQ0FBQztnQkFDVixHQUFLLENBQUMsY0FBYyxHQUFHLFFBQVEsRUFDekIsTUFBTSx3QkFqREssbUJBQW1CLGNBaURmLFFBQVEsR0FBZCxJQUFLLGFBQVUsY0FBYztnQkFFNUMsTUFBTSxDQUFDLE1BQU07WUFDZixDQUFDOzs7WUFFRCxHQUFLLEdBQUwsS0FBSzttQkFBTCxRQUFRLENBQVIsS0FBSyxHQUFHLENBQUM7Z0JBQUMsTUFBTSxzQkF0REcsbUJBQW1CLGNBc0RmLEtBQUssR0FBWCxJQUFLLGFBQU8sbUJBQW1CO1lBQUcsQ0FBQzs7O1dBdERqQyxtQkFBbUI7RUFOTixrQkFBcUI7a0JBTWxDLG1CQUFtQiJ9