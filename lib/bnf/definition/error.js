'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Definition = require('../definition'),
    WildcardPart = require('../part/terminal/wildcard');

var ErrorDefinition = /*#__PURE__*/function (_Definition) {
  _inherits(ErrorDefinition, _Definition);

  function ErrorDefinition() {
    _classCallCheck(this, ErrorDefinition);

    var wildcardPart = new WildcardPart(),
        parts = [wildcardPart];
    return _possibleConstructorReturn(this, _getPrototypeOf(ErrorDefinition).call(this, parts));
  }

  return ErrorDefinition;
}(Definition);

module.exports = ErrorDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yLmpzIl0sIm5hbWVzIjpbIkRlZmluaXRpb24iLCJyZXF1aXJlIiwiV2lsZGNhcmRQYXJ0IiwiRXJyb3JEZWZpbml0aW9uIiwid2lsZGNhcmRQYXJ0IiwicGFydHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVUsR0FBR0MsT0FBTyxDQUFDLGVBQUQsQ0FBMUI7QUFBQSxJQUNNQyxZQUFZLEdBQUdELE9BQU8sQ0FBQywyQkFBRCxDQUQ1Qjs7SUFHTUUsZTs7O0FBQ0osNkJBQWM7QUFBQTs7QUFDWixRQUFNQyxZQUFZLEdBQUcsSUFBSUYsWUFBSixFQUFyQjtBQUFBLFFBQ01HLEtBQUssR0FBRyxDQUNORCxZQURNLENBRGQ7QUFEWSx3RkFNTkMsS0FOTTtBQU9iOzs7RUFSMkJMLFU7O0FBVzlCTSxNQUFNLENBQUNDLE9BQVAsR0FBaUJKLGVBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBEZWZpbml0aW9uID0gcmVxdWlyZSgnLi4vZGVmaW5pdGlvbicpLFxuICAgICAgV2lsZGNhcmRQYXJ0ID0gcmVxdWlyZSgnLi4vcGFydC90ZXJtaW5hbC93aWxkY2FyZCcpO1xuXG5jbGFzcyBFcnJvckRlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3Qgd2lsZGNhcmRQYXJ0ID0gbmV3IFdpbGRjYXJkUGFydCgpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgd2lsZGNhcmRQYXJ0XG4gICAgICAgICAgXTtcblxuICAgIHN1cGVyKHBhcnRzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXJyb3JEZWZpbml0aW9uO1xuIl19