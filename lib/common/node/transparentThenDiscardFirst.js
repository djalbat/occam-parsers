'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtil = require('../../arrayUtil');

var TransparentThenDiscardFirstNode = function () {
  function TransparentThenDiscardFirstNode() {
    _classCallCheck(this, TransparentThenDiscardFirstNode);
  }

  _createClass(TransparentThenDiscardFirstNode, null, [{
    key: 'fromNodes',
    value: function fromNodes(nodes, productionName) {
      nodes = arrayUtil.discardFirst(nodes);

      return nodes;
    }
  }]);

  return TransparentThenDiscardFirstNode;
}();

module.exports = TransparentThenDiscardFirstNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS90cmFuc3BhcmVudFRoZW5EaXNjYXJkRmlyc3QuanMiXSwibmFtZXMiOlsiYXJyYXlVdGlsIiwicmVxdWlyZSIsIlRyYW5zcGFyZW50VGhlbkRpc2NhcmRGaXJzdE5vZGUiLCJub2RlcyIsInByb2R1Y3Rpb25OYW1lIiwiZGlzY2FyZEZpcnN0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLFlBQVlDLFFBQVEsaUJBQVIsQ0FBaEI7O0lBRU1DLCtCOzs7Ozs7OzhCQUNhQyxLLEVBQU9DLGMsRUFBZ0I7QUFDdENELGNBQVFILFVBQVVLLFlBQVYsQ0FBdUJGLEtBQXZCLENBQVI7O0FBRUEsYUFBT0EsS0FBUDtBQUNEOzs7Ozs7QUFHSEcsT0FBT0MsT0FBUCxHQUFpQkwsK0JBQWpCIiwiZmlsZSI6InRyYW5zcGFyZW50VGhlbkRpc2NhcmRGaXJzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uLy4uL2FycmF5VXRpbCcpO1xuXG5jbGFzcyBUcmFuc3BhcmVudFRoZW5EaXNjYXJkRmlyc3ROb2RlIHtcbiAgc3RhdGljIGZyb21Ob2Rlcyhub2RlcywgcHJvZHVjdGlvbk5hbWUpIHtcbiAgICBub2RlcyA9IGFycmF5VXRpbC5kaXNjYXJkRmlyc3Qobm9kZXMpO1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHJhbnNwYXJlbnRUaGVuRGlzY2FyZEZpcnN0Tm9kZTtcbiJdfQ==