'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TerminalNode = require('../terminal');

var EndOfLineTerminalNode = function (_TerminalNode) {
  _inherits(EndOfLineTerminalNode, _TerminalNode);

  function EndOfLineTerminalNode() {
    _classCallCheck(this, EndOfLineTerminalNode);

    return _possibleConstructorReturn(this, (EndOfLineTerminalNode.__proto__ || Object.getPrototypeOf(EndOfLineTerminalNode)).apply(this, arguments));
  }

  _createClass(EndOfLineTerminalNode, [{
    key: 'getContent',
    value: function getContent() {
      var content = '';

      return content;
    }
  }]);

  return EndOfLineTerminalNode;
}(TerminalNode);

module.exports = EndOfLineTerminalNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvbm9kZS90ZXJtaW5hbC9lbmRPZkxpbmUuanMiXSwibmFtZXMiOlsiVGVybWluYWxOb2RlIiwicmVxdWlyZSIsIkVuZE9mTGluZVRlcm1pbmFsTm9kZSIsImNvbnRlbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLGVBQWVDLFFBQVEsYUFBUixDQUFuQjs7SUFFTUMscUI7Ozs7Ozs7Ozs7O2lDQUNTO0FBQ1gsVUFBSUMsVUFBVSxFQUFkOztBQUVBLGFBQU9BLE9BQVA7QUFDRDs7OztFQUxpQ0gsWTs7QUFRcENJLE9BQU9DLE9BQVAsR0FBaUJILHFCQUFqQiIsImZpbGUiOiJlbmRPZkxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBUZXJtaW5hbE5vZGUgPSByZXF1aXJlKCcuLi90ZXJtaW5hbCcpO1xuXG5jbGFzcyBFbmRPZkxpbmVUZXJtaW5hbE5vZGUgZXh0ZW5kcyBUZXJtaW5hbE5vZGUge1xuICBnZXRDb250ZW50KCkge1xuICAgIHZhciBjb250ZW50ID0gJyc7XG4gICAgXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFbmRPZkxpbmVUZXJtaW5hbE5vZGU7XG4iXX0=