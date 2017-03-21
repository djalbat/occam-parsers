'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Production = require('../common/production'),
    ErrorNode = require('../common/node/nonTerminal/error');

var BNFParser = function () {
  function BNFParser() {
    _classCallCheck(this, BNFParser);
  }

  _createClass(BNFParser, null, [{
    key: 'parse',
    value: function parse(lines, significantTokenTypes, mappings) {
      var productions = void 0;

      mappings = Object.assign({
        'error': ErrorNode
      }, mappings);

      try {
        productions = lines.map(function (line) {
          var production = Production.fromLine(line, significantTokenTypes, mappings);

          return production;
        });
      } catch (exception) {
        productions = [];
      }

      return productions;
    }
  }]);

  return BNFParser;
}();

module.exports = BNFParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvcGFyc2VyLmpzIl0sIm5hbWVzIjpbIlByb2R1Y3Rpb24iLCJyZXF1aXJlIiwiRXJyb3JOb2RlIiwiQk5GUGFyc2VyIiwibGluZXMiLCJzaWduaWZpY2FudFRva2VuVHlwZXMiLCJtYXBwaW5ncyIsInByb2R1Y3Rpb25zIiwiT2JqZWN0IiwiYXNzaWduIiwibWFwIiwibGluZSIsInByb2R1Y3Rpb24iLCJmcm9tTGluZSIsImV4Y2VwdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLHNCQUFSLENBQW5CO0FBQUEsSUFDTUMsWUFBWUQsUUFBUSxrQ0FBUixDQURsQjs7SUFHTUUsUzs7Ozs7OzswQkFDU0MsSyxFQUFPQyxxQixFQUF1QkMsUSxFQUFVO0FBQ25ELFVBQUlDLG9CQUFKOztBQUVBRCxpQkFBV0UsT0FBT0MsTUFBUCxDQUFjO0FBQ3ZCLGlCQUFTUDtBQURjLE9BQWQsRUFFUkksUUFGUSxDQUFYOztBQUlBLFVBQUk7QUFDRkMsc0JBQWNILE1BQU1NLEdBQU4sQ0FBVSxVQUFTQyxJQUFULEVBQWU7QUFDckMsY0FBTUMsYUFBYVosV0FBV2EsUUFBWCxDQUFvQkYsSUFBcEIsRUFBMEJOLHFCQUExQixFQUFpREMsUUFBakQsQ0FBbkI7O0FBRUEsaUJBQU9NLFVBQVA7QUFDRCxTQUphLENBQWQ7QUFLRCxPQU5ELENBTUUsT0FBTUUsU0FBTixFQUFpQjtBQUNqQlAsc0JBQWMsRUFBZDtBQUNEOztBQUVELGFBQU9BLFdBQVA7QUFDRDs7Ozs7O0FBR0hRLE9BQU9DLE9BQVAsR0FBaUJiLFNBQWpCIiwiZmlsZSI6InBhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4uL2NvbW1vbi9wcm9kdWN0aW9uJyksXG4gICAgICBFcnJvck5vZGUgPSByZXF1aXJlKCcuLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbC9lcnJvcicpO1xuXG5jbGFzcyBCTkZQYXJzZXIge1xuICBzdGF0aWMgcGFyc2UobGluZXMsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbWFwcGluZ3MpIHtcbiAgICBsZXQgcHJvZHVjdGlvbnM7XG5cbiAgICBtYXBwaW5ncyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgJ2Vycm9yJzogRXJyb3JOb2RlXG4gICAgfSwgbWFwcGluZ3MpO1xuXG4gICAgdHJ5IHtcbiAgICAgIHByb2R1Y3Rpb25zID0gbGluZXMubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgY29uc3QgcHJvZHVjdGlvbiA9IFByb2R1Y3Rpb24uZnJvbUxpbmUobGluZSwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBtYXBwaW5ncyk7XG5cbiAgICAgICAgcmV0dXJuIHByb2R1Y3Rpb247XG4gICAgICB9KTtcbiAgICB9IGNhdGNoKGV4Y2VwdGlvbikge1xuICAgICAgcHJvZHVjdGlvbnMgPSBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvZHVjdGlvbnM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCTkZQYXJzZXI7XG5cbiJdfQ==