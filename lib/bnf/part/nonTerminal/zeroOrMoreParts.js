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
                var parsed1;
                var part = this.getPart();
                if (callback) {
                    parsed1 = callback();
                    if (!parsed1) {
                        var parsePart = function() {
                            var parsed2 = part.parse(nodes, context, function() {
                                var parsed = callback();
                                if (!parsed) {
                                    parsed = parsePart();
                                }
                                return parsed;
                            });
                            return parsed2;
                        };
                        parsed1 = parsePart();
                    }
                } else {
                    for(;;){
                        parsed1 = part.parse(nodes, context);
                        if (!parsed1) {
                            break;
                        }
                    }
                    parsed1 = true;
                }
                return parsed1;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ibmYvcGFydC9ub25UZXJtaW5hbC96ZXJvT3JNb3JlUGFydHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgQ29sbGVjdGlvbk9mUGFydHNQYXJ0IGZyb20gXCIuL2NvbGxlY3Rpb25PZlBhcnRzXCI7XG5cbmltcG9ydCB7IFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlIH0gZnJvbSBcIi4uLy4uL3BhcnRUeXBlc1wiO1xuXG5jb25zdCB7IGFzdGVyaXNrIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWmVyb09yTW9yZVBhcnRzUGFydCBleHRlbmRzIENvbGxlY3Rpb25PZlBhcnRzUGFydCB7XG4gIGNvbnN0cnVjdG9yKHBhcnQpIHtcbiAgICBjb25zdCB0eXBlID0gWmVyb09yTW9yZVBhcnRzUGFydFR5cGU7IC8vL1xuXG4gICAgc3VwZXIodHlwZSwgcGFydCk7XG4gIH1cblxuICBwYXJzZShub2RlcywgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgICBsZXQgcGFyc2VkO1xuXG4gICAgY29uc3QgcGFydCA9IHRoaXMuZ2V0UGFydCgpO1xuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBwYXJzZWQgPSBjYWxsYmFjaygpO1xuXG4gICAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgICBjb25zdCBwYXJzZVBhcnQgPSAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgcGFyc2VkID0gcGFydC5wYXJzZShub2RlcywgY29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHBhcnNlZCA9IGNhbGxiYWNrKCk7XG5cbiAgICAgICAgICAgIGlmICghcGFyc2VkKSB7XG4gICAgICAgICAgICAgIHBhcnNlZCA9IHBhcnNlUGFydCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VkO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcnNlZCA9IHBhcnNlUGFydCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKDs7KSB7XG4gICAgICAgIHBhcnNlZCA9IHBhcnQucGFyc2Uobm9kZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmICghcGFyc2VkKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcGFyc2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3Qgb3BlcmF0b3JTdHJpbmcgPSBhc3RlcmlzaywgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHN1cGVyLmFzU3RyaW5nKG9wZXJhdG9yU3RyaW5nKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKFplcm9Pck1vcmVQYXJ0c1BhcnQpOyB9XG59XG4iXSwibmFtZXMiOlsiYXN0ZXJpc2siLCJaZXJvT3JNb3JlUGFydHNQYXJ0IiwicGFydCIsInR5cGUiLCJwYXJzZSIsIm5vZGVzIiwiY29udGV4dCIsImNhbGxiYWNrIiwicGFyc2VkIiwiZ2V0UGFydCIsInBhcnNlUGFydCIsImFzU3RyaW5nIiwib3BlcmF0b3JTdHJpbmciLCJzdHJpbmciLCJjbG9uZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFbUIsR0FBYyxDQUFkLFlBQWM7QUFFWCxHQUFxQixDQUFyQixrQkFBcUI7QUFFZixHQUFpQixDQUFqQixVQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekQsR0FBSyxDQUFHQSxRQUFRLEdBTmUsWUFBYyxnQkFNckNBLFFBQVE7SUFFS0MsbUJBQW1CLGlCQUF6QixRQUFRO2NBQUZBLG1CQUFtQjthQUFuQkEsbUJBQW1CLENBQzFCQyxJQUFJOzhCQURHRCxtQkFBbUI7UUFFcEMsR0FBSyxDQUFDRSxJQUFJLEdBTjBCLFVBQWlCLHlCQU1mLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnRUFGeEJGLG1CQUFtQixhQUk5QkUsSUFBSSxFQUFFRCxJQUFJOztpQkFKQ0QsbUJBQW1COztZQU90Q0csR0FBSyxFQUFMQSxDQUFLO21CQUFMQSxRQUFRLENBQVJBLEtBQUssQ0FBQ0MsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLFFBQVEsRUFBRSxDQUFDO2dCQUMvQixHQUFHLENBQUNDLE9BQU07Z0JBRVYsR0FBSyxDQUFDTixJQUFJLEdBQUcsSUFBSSxDQUFDTyxPQUFPO2dCQUV6QixFQUFFLEVBQUVGLFFBQVEsRUFBRSxDQUFDO29CQUNiQyxPQUFNLEdBQUdELFFBQVE7b0JBRWpCLEVBQUUsR0FBR0MsT0FBTSxFQUFFLENBQUM7d0JBQ1osR0FBSyxDQUFDRSxTQUFTLEdBQUcsUUFDMUIsR0FEZ0MsQ0FBQzs0QkFDdkIsR0FBSyxDQUFDRixPQUFNLEdBQUdOLElBQUksQ0FBQ0UsS0FBSyxDQUFDQyxLQUFLLEVBQUVDLE9BQU8sRUFBRSxRQUNwRCxHQUQwRCxDQUFDO2dDQUMvQyxHQUFHLENBQUNFLE1BQU0sR0FBR0QsUUFBUTtnQ0FFckIsRUFBRSxHQUFHQyxNQUFNLEVBQUUsQ0FBQztvQ0FDWkEsTUFBTSxHQUFHRSxTQUFTO2dDQUNwQixDQUFDO2dDQUVELE1BQU0sQ0FBQ0YsTUFBTTs0QkFDZixDQUFDOzRCQUVELE1BQU0sQ0FBQ0EsT0FBTTt3QkFDZixDQUFDO3dCQUVEQSxPQUFNLEdBQUdFLFNBQVM7b0JBQ3BCLENBQUM7Z0JBQ0gsQ0FBQyxNQUFNLENBQUM7b0JBQ04sR0FBRyxJQUFNLENBQUM7d0JBQ1JGLE9BQU0sR0FBR04sSUFBSSxDQUFDRSxLQUFLLENBQUNDLEtBQUssRUFBRUMsT0FBTzt3QkFFbEMsRUFBRSxHQUFHRSxPQUFNLEVBQUUsQ0FBQzs0QkFDWixLQUFLO3dCQUNQLENBQUM7b0JBQ0gsQ0FBQztvQkFFREEsT0FBTSxHQUFHLElBQUk7Z0JBQ2YsQ0FBQztnQkFFRCxNQUFNLENBQUNBLE9BQU07WUFDZixDQUFDOzs7WUFFREcsR0FBUSxFQUFSQSxDQUFRO21CQUFSQSxRQUFRLENBQVJBLFFBQVEsR0FBRyxDQUFDO2dCQUNWLEdBQUssQ0FBQ0MsY0FBYyxHQUFHWixRQUFRLEVBQ3pCYSxNQUFNLHdCQWpES1osbUJBQW1CLGFBaURmVSxDQUFRLFdBQWQsSUFBSyxhQUFVQyxjQUFjO2dCQUU1QyxNQUFNLENBQUNDLE1BQU07WUFDZixDQUFDOzs7WUFFREMsR0FBSyxFQUFMQSxDQUFLO21CQUFMQSxRQUFRLENBQVJBLEtBQUssR0FBRyxDQUFDO2dCQUFDLE1BQU0sc0JBdERHYixtQkFBbUIsYUFzRGZhLENBQUssUUFBWCxJQUFLLGFBQU9iLG1CQUFtQjtZQUFHLENBQUM7OztXQXREakNBLG1CQUFtQjtFQU5OLGtCQUFxQjtrQkFNbENBLG1CQUFtQiJ9