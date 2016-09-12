'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Production = require('./bnfParser/production');

var BNFParser = function () {
  function BNFParser() {
    _classCallCheck(this, BNFParser);
  }

  _createClass(BNFParser, null, [{
    key: 'parse',
    value: function parse(lines, Parts, mappings) {
      var productions = lines.map(function (line) {
        var production = Production.fromLine(line, Parts, mappings);

        return production;
      });

      return productions;
    }
  }]);

  return BNFParser;
}();

module.exports = BNFParser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9ibmZQYXJzZXIuanMiXSwibmFtZXMiOlsiUHJvZHVjdGlvbiIsInJlcXVpcmUiLCJCTkZQYXJzZXIiLCJsaW5lcyIsIlBhcnRzIiwibWFwcGluZ3MiLCJwcm9kdWN0aW9ucyIsIm1hcCIsImxpbmUiLCJwcm9kdWN0aW9uIiwiZnJvbUxpbmUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsYUFBYUMsUUFBUSx3QkFBUixDQUFqQjs7SUFFTUMsUzs7Ozs7OzswQkFDU0MsSyxFQUFPQyxLLEVBQU9DLFEsRUFBVTtBQUNuQyxVQUFJQyxjQUFjSCxNQUFNSSxHQUFOLENBQVUsVUFBU0MsSUFBVCxFQUFlO0FBQ3JDLFlBQUlDLGFBQWFULFdBQVdVLFFBQVgsQ0FBb0JGLElBQXBCLEVBQTBCSixLQUExQixFQUFpQ0MsUUFBakMsQ0FBakI7O0FBRUEsZUFBT0ksVUFBUDtBQUNELE9BSmEsQ0FBbEI7O0FBTUEsYUFBT0gsV0FBUDtBQUNEOzs7Ozs7QUFHSEssT0FBT0MsT0FBUCxHQUFpQlYsU0FBakIiLCJmaWxlIjoiYm5mUGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vYm5mUGFyc2VyL3Byb2R1Y3Rpb24nKTtcblxuY2xhc3MgQk5GUGFyc2VyIHtcbiAgc3RhdGljIHBhcnNlKGxpbmVzLCBQYXJ0cywgbWFwcGluZ3MpIHtcbiAgICB2YXIgcHJvZHVjdGlvbnMgPSBsaW5lcy5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgIHZhciBwcm9kdWN0aW9uID0gUHJvZHVjdGlvbi5mcm9tTGluZShsaW5lLCBQYXJ0cywgbWFwcGluZ3MpO1xuXG4gICAgICAgICAgcmV0dXJuIHByb2R1Y3Rpb247XG4gICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb2R1Y3Rpb25zO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQk5GUGFyc2VyO1xuXG4iXX0=