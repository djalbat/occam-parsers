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
    key: 'fromToken',
    value: function fromToken(token) {
      return TerminalNode.fromToken(EndOfLineNode, token);
    }
  }]);

  return EndOfLineNode;
}(TerminalNode);

module.exports = EndOfLineNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS90ZXJtaW5hbC9lbmRPZkxpbmUuanMiXSwibmFtZXMiOlsiVGVybWluYWxOb2RlIiwicmVxdWlyZSIsIkVuZE9mTGluZU5vZGUiLCJjb250ZW50IiwidG9rZW4iLCJmcm9tVG9rZW4iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGVBQWVDLFFBQVEsYUFBUixDQUFyQjs7SUFFTUMsYTs7Ozs7Ozs7Ozs7aUNBQ1M7QUFDWCxVQUFNQyxVQUFVLEVBQWhCLENBRFcsQ0FDVTs7QUFFckIsYUFBT0EsT0FBUDtBQUNEOzs7OEJBRWdCQyxLLEVBQU87QUFBRSxhQUFPSixhQUFhSyxTQUFiLENBQXVCSCxhQUF2QixFQUFzQ0UsS0FBdEMsQ0FBUDtBQUFzRDs7OztFQVB0REosWTs7QUFVNUJNLE9BQU9DLE9BQVAsR0FBaUJMLGFBQWpCIiwiZmlsZSI6ImVuZE9mTGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vdGVybWluYWwnKTtcblxuY2xhc3MgRW5kT2ZMaW5lTm9kZSBleHRlbmRzIFRlcm1pbmFsTm9kZSB7XG4gIGdldENvbnRlbnQoKSB7XG4gICAgY29uc3QgY29udGVudCA9ICcnOyAgLy8vXG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVG9rZW4odG9rZW4pIHsgcmV0dXJuIFRlcm1pbmFsTm9kZS5mcm9tVG9rZW4oRW5kT2ZMaW5lTm9kZSwgdG9rZW4pOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRW5kT2ZMaW5lTm9kZTtcbiJdfQ==