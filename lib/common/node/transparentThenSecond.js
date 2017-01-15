'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtil = require('../arrayUtil');

var TransparentThenSecondNode = function () {
  function TransparentThenSecondNode() {
    _classCallCheck(this, TransparentThenSecondNode);
  }

  _createClass(TransparentThenSecondNode, null, [{
    key: 'fromNodes',
    value: function fromNodes(nodes, productionName) {
      nodes = arrayUtil.keepSecond(nodes);

      return nodes;
    }
  }]);

  return TransparentThenSecondNode;
}();

module.exports = TransparentThenSecondNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS90cmFuc3BhcmVudFRoZW5TZWNvbmQuanMiXSwibmFtZXMiOlsiYXJyYXlVdGlsIiwicmVxdWlyZSIsIlRyYW5zcGFyZW50VGhlblNlY29uZE5vZGUiLCJub2RlcyIsInByb2R1Y3Rpb25OYW1lIiwia2VlcFNlY29uZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxZQUFZQyxRQUFRLGNBQVIsQ0FBaEI7O0lBRU1DLHlCOzs7Ozs7OzhCQUNhQyxLLEVBQU9DLGMsRUFBZ0I7QUFDdENELGNBQVFILFVBQVVLLFVBQVYsQ0FBcUJGLEtBQXJCLENBQVI7O0FBRUEsYUFBT0EsS0FBUDtBQUNEOzs7Ozs7QUFHSEcsT0FBT0MsT0FBUCxHQUFpQkwseUJBQWpCIiwiZmlsZSI6InRyYW5zcGFyZW50VGhlblNlY29uZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGFycmF5VXRpbCA9IHJlcXVpcmUoJy4uL2FycmF5VXRpbCcpO1xuXG5jbGFzcyBUcmFuc3BhcmVudFRoZW5TZWNvbmROb2RlIHtcbiAgc3RhdGljIGZyb21Ob2Rlcyhub2RlcywgcHJvZHVjdGlvbk5hbWUpIHtcbiAgICBub2RlcyA9IGFycmF5VXRpbC5rZWVwU2Vjb25kKG5vZGVzKTtcblxuICAgIHJldHVybiBub2RlcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRyYW5zcGFyZW50VGhlblNlY29uZE5vZGU7XG4iXX0=