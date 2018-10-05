'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TerminalNode = require('../terminal');

var EndOfLineNode = function (_TerminalNode) {
  _inherits(EndOfLineNode, _TerminalNode);

  function EndOfLineNode() {
    _classCallCheck(this, EndOfLineNode);

    return _possibleConstructorReturn(this, (EndOfLineNode.__proto__ || Object.getPrototypeOf(EndOfLineNode)).apply(this, arguments));
  }

  _createClass(EndOfLineNode, [{
    key: 'getContent',
    value: function getContent() {
      var content = ''; ///

      return content;
    }
  }], [{
    key: 'fromSignificantToken',
    value: function fromSignificantToken(significantToken) {
      return TerminalNode.fromSignificantToken(EndOfLineNode, significantToken);
    }
  }]);

  return EndOfLineNode;
}(TerminalNode);

module.exports = EndOfLineNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS90ZXJtaW5hbC9lbmRPZkxpbmUuanMiXSwibmFtZXMiOlsiVGVybWluYWxOb2RlIiwicmVxdWlyZSIsIkVuZE9mTGluZU5vZGUiLCJjb250ZW50Iiwic2lnbmlmaWNhbnRUb2tlbiIsImZyb21TaWduaWZpY2FudFRva2VuIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxlQUFlQyxRQUFRLGFBQVIsQ0FBckI7O0lBRU1DLGE7Ozs7Ozs7Ozs7O2lDQUNTO0FBQ1gsVUFBTUMsVUFBVSxFQUFoQixDQURXLENBQ1U7O0FBRXJCLGFBQU9BLE9BQVA7QUFDRDs7O3lDQUUyQkMsZ0IsRUFBa0I7QUFBRSxhQUFPSixhQUFhSyxvQkFBYixDQUFrQ0gsYUFBbEMsRUFBaURFLGdCQUFqRCxDQUFQO0FBQTRFOzs7O0VBUGxHSixZOztBQVU1Qk0sT0FBT0MsT0FBUCxHQUFpQkwsYUFBakIiLCJmaWxlIjoiZW5kT2ZMaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBUZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi90ZXJtaW5hbCcpO1xuXG5jbGFzcyBFbmRPZkxpbmVOb2RlIGV4dGVuZHMgVGVybWluYWxOb2RlIHtcbiAgZ2V0Q29udGVudCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gJyc7ICAvLy9cblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21TaWduaWZpY2FudFRva2VuKHNpZ25pZmljYW50VG9rZW4pIHsgcmV0dXJuIFRlcm1pbmFsTm9kZS5mcm9tU2lnbmlmaWNhbnRUb2tlbihFbmRPZkxpbmVOb2RlLCBzaWduaWZpY2FudFRva2VuKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVuZE9mTGluZU5vZGU7XG4iXX0=