"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamLexers = require("occam-lexers");

var _collectionOfParts = _interopRequireDefault(require("./collectionOfParts"));

var _partTypes = require("../../partTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var asterisk = _occamLexers.specialSymbols.asterisk;

var ZeroOrMorePartsPart = /*#__PURE__*/function (_CollectionOfPartsPar) {
  _inherits(ZeroOrMorePartsPart, _CollectionOfPartsPar);

  var _super = _createSuper(ZeroOrMorePartsPart);

  function ZeroOrMorePartsPart(part) {
    _classCallCheck(this, ZeroOrMorePartsPart);

    var type = _partTypes.ZeroOrMorePartsPartType; ///

    return _super.call(this, type, part);
  }

  _createClass(ZeroOrMorePartsPart, [{
    key: "parse",
    value: function parse(nodes, context, callback) {
      var part = this.getPart();

      if (callback) {
        var partNodes = callback(nodes);

        if (partNodes !== null) {
          nodes = partNodes; ///
        } else {
          var parsePart = function parsePart(nodes, callback) {
            var partNodes = part.parse(nodes, context, function (nodes) {
              var partNodes = callback(nodes);

              if (partNodes !== null) {
                nodes = partNodes; ///
              } else {
                nodes = parsePart(nodes, callback);
              }

              return nodes;
            });
            return partNodes;
          };

          var _partNodes = parsePart(nodes, callback);

          if (_partNodes !== null) {
            nodes = _partNodes; ///
          }
        }
      } else {
        for (;;) {
          var _partNodes2 = part.parse(nodes, context);

          if (_partNodes2 === null) {
            break;
          }

          nodes = _partNodes2; ///
        }
      }

      return nodes;
    }
  }, {
    key: "asString",
    value: function asString() {
      var operatorString = asterisk,
          ///
      string = _get(_getPrototypeOf(ZeroOrMorePartsPart.prototype), "asString", this).call(this, operatorString);

      return string;
    }
  }, {
    key: "clone",
    value: function clone() {
      return _get(_getPrototypeOf(ZeroOrMorePartsPart.prototype), "clone", this).call(this, ZeroOrMorePartsPart);
    }
  }]);

  return ZeroOrMorePartsPart;
}(_collectionOfParts["default"]);

exports["default"] = ZeroOrMorePartsPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInplcm9Pck1vcmVQYXJ0cy5qcyJdLCJuYW1lcyI6WyJhc3RlcmlzayIsInNwZWNpYWxTeW1ib2xzIiwiWmVyb09yTW9yZVBhcnRzUGFydCIsInBhcnQiLCJ0eXBlIiwiWmVyb09yTW9yZVBhcnRzUGFydFR5cGUiLCJub2RlcyIsImNvbnRleHQiLCJjYWxsYmFjayIsImdldFBhcnQiLCJwYXJ0Tm9kZXMiLCJwYXJzZVBhcnQiLCJwYXJzZSIsIm9wZXJhdG9yU3RyaW5nIiwic3RyaW5nIiwiQ29sbGVjdGlvbk9mUGFydHNQYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFUUEsUSxHQUFhQywyQixDQUFiRCxROztJQUVhRSxtQjs7Ozs7QUFDbkIsK0JBQVlDLElBQVosRUFBa0I7QUFBQTs7QUFDaEIsUUFBTUMsSUFBSSxHQUFHQyxrQ0FBYixDQURnQixDQUNzQjs7QUFEdEIsNkJBR1ZELElBSFUsRUFHSkQsSUFISTtBQUlqQjs7OzswQkFFS0csSyxFQUFPQyxPLEVBQVNDLFEsRUFBVTtBQUM5QixVQUFNTCxJQUFJLEdBQUcsS0FBS00sT0FBTCxFQUFiOztBQUVBLFVBQUlELFFBQUosRUFBYztBQUNaLFlBQU1FLFNBQVMsR0FBR0YsUUFBUSxDQUFDRixLQUFELENBQTFCOztBQUVBLFlBQUlJLFNBQVMsS0FBSyxJQUFsQixFQUF3QjtBQUN0QkosVUFBQUEsS0FBSyxHQUFHSSxTQUFSLENBRHNCLENBQ0Y7QUFDckIsU0FGRCxNQUVPO0FBQUEsY0FPSUMsU0FQSixHQU9MLFNBQVNBLFNBQVQsQ0FBbUJMLEtBQW5CLEVBQTBCRSxRQUExQixFQUFvQztBQUNsQyxnQkFBTUUsU0FBUyxHQUFHUCxJQUFJLENBQUNTLEtBQUwsQ0FBV04sS0FBWCxFQUFrQkMsT0FBbEIsRUFBMkIsVUFBQ0QsS0FBRCxFQUFXO0FBQ3RELGtCQUFNSSxTQUFTLEdBQUdGLFFBQVEsQ0FBQ0YsS0FBRCxDQUExQjs7QUFFQSxrQkFBSUksU0FBUyxLQUFLLElBQWxCLEVBQXdCO0FBQ3RCSixnQkFBQUEsS0FBSyxHQUFHSSxTQUFSLENBRHNCLENBQ0Y7QUFDckIsZUFGRCxNQUVPO0FBQ0xKLGdCQUFBQSxLQUFLLEdBQUdLLFNBQVMsQ0FBQ0wsS0FBRCxFQUFRRSxRQUFSLENBQWpCO0FBQ0Q7O0FBRUQscUJBQU9GLEtBQVA7QUFDRCxhQVZpQixDQUFsQjtBQVlBLG1CQUFPSSxTQUFQO0FBQ0QsV0FyQkk7O0FBQ0wsY0FBTUEsVUFBUyxHQUFHQyxTQUFTLENBQUNMLEtBQUQsRUFBUUUsUUFBUixDQUEzQjs7QUFFQSxjQUFJRSxVQUFTLEtBQUssSUFBbEIsRUFBd0I7QUFDdEJKLFlBQUFBLEtBQUssR0FBR0ksVUFBUixDQURzQixDQUNGO0FBQ3JCO0FBaUJGO0FBQ0YsT0E1QkQsTUE0Qk87QUFDTCxpQkFBUztBQUNQLGNBQU1BLFdBQVMsR0FBR1AsSUFBSSxDQUFDUyxLQUFMLENBQVdOLEtBQVgsRUFBa0JDLE9BQWxCLENBQWxCOztBQUVBLGNBQUlHLFdBQVMsS0FBSyxJQUFsQixFQUF3QjtBQUN0QjtBQUNEOztBQUVESixVQUFBQSxLQUFLLEdBQUdJLFdBQVIsQ0FQTyxDQU9hO0FBQ3JCO0FBQ0Y7O0FBRUQsYUFBT0osS0FBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFNTyxjQUFjLEdBQUdiLFFBQXZCO0FBQUEsVUFBa0M7QUFDNUJjLE1BQUFBLE1BQU0scUZBQWtCRCxjQUFsQixDQURaOztBQUdBLGFBQU9DLE1BQVA7QUFDRDs7OzRCQUVPO0FBQUUsNEZBQW1CWixtQkFBbkI7QUFBMEM7Ozs7RUE1RExhLDZCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgQ29sbGVjdGlvbk9mUGFydHNQYXJ0IGZyb20gXCIuL2NvbGxlY3Rpb25PZlBhcnRzXCI7XG5cbmltcG9ydCB7IFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlIH0gZnJvbSBcIi4uLy4uL3BhcnRUeXBlc1wiO1xuXG5jb25zdCB7IGFzdGVyaXNrIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWmVyb09yTW9yZVBhcnRzUGFydCBleHRlbmRzIENvbGxlY3Rpb25PZlBhcnRzUGFydCB7XG4gIGNvbnN0cnVjdG9yKHBhcnQpIHtcbiAgICBjb25zdCB0eXBlID0gWmVyb09yTW9yZVBhcnRzUGFydFR5cGU7IC8vL1xuXG4gICAgc3VwZXIodHlwZSwgcGFydCk7XG4gIH1cblxuICBwYXJzZShub2RlcywgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBwYXJ0ID0gdGhpcy5nZXRQYXJ0KCk7XG5cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNvbnN0IHBhcnROb2RlcyA9IGNhbGxiYWNrKG5vZGVzKTtcblxuICAgICAgaWYgKHBhcnROb2RlcyAhPT0gbnVsbCkge1xuICAgICAgICBub2RlcyA9IHBhcnROb2RlczsgIC8vL1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcGFydE5vZGVzID0gcGFyc2VQYXJ0KG5vZGVzLCBjYWxsYmFjayk7XG5cbiAgICAgICAgaWYgKHBhcnROb2RlcyAhPT0gbnVsbCkge1xuICAgICAgICAgIG5vZGVzID0gcGFydE5vZGVzOyAgLy8vXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBwYXJzZVBhcnQobm9kZXMsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgY29uc3QgcGFydE5vZGVzID0gcGFydC5wYXJzZShub2RlcywgY29udGV4dCwgKG5vZGVzKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0Tm9kZXMgPSBjYWxsYmFjayhub2Rlcyk7XG5cbiAgICAgICAgICAgIGlmIChwYXJ0Tm9kZXMgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgbm9kZXMgPSBwYXJ0Tm9kZXM7ICAvLy9cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG5vZGVzID0gcGFyc2VQYXJ0KG5vZGVzLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBub2RlcztcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHJldHVybiBwYXJ0Tm9kZXM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yICg7Oykge1xuICAgICAgICBjb25zdCBwYXJ0Tm9kZXMgPSBwYXJ0LnBhcnNlKG5vZGVzLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAocGFydE5vZGVzID09PSBudWxsKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBub2RlcyA9IHBhcnROb2RlczsgIC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IG9wZXJhdG9yU3RyaW5nID0gYXN0ZXJpc2ssICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBzdXBlci5hc1N0cmluZyhvcGVyYXRvclN0cmluZyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZShaZXJvT3JNb3JlUGFydHNQYXJ0KTsgfVxufVxuIl19