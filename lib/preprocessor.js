'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('./occam-lexers'),
    IncludeDirectiveToken = lexers.IncludeDirectiveToken;

var PreProcessor = function () {
  function PreProcessor() {
    _classCallCheck(this, PreProcessor);
  }

  _createClass(PreProcessor, [{
    key: 'parse',
    value: function parse(tokens) {
      var preprocessedTokens = tokens.reduce(function (preprocessedTokens, token) {
        if (token instanceof IncludeDirectiveToken) {
          ///
        } else {
          var preprocessedToken = token;

          preprocessedTokens.push(preprocessedToken);
        }

        return preprocessedTokens;
      }, []);

      return preprocessedTokens;
    }
  }]);

  return PreProcessor;
}();

module.exports = PreProcessor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wcmVwcm9jZXNzb3IuanMiXSwibmFtZXMiOlsibGV4ZXJzIiwicmVxdWlyZSIsIkluY2x1ZGVEaXJlY3RpdmVUb2tlbiIsIlByZVByb2Nlc3NvciIsInRva2VucyIsInByZXByb2Nlc3NlZFRva2VucyIsInJlZHVjZSIsInRva2VuIiwicHJlcHJvY2Vzc2VkVG9rZW4iLCJwdXNoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLFNBQVNDLFFBQVEsZ0JBQVIsQ0FBYjtBQUFBLElBQ0lDLHdCQUF3QkYsT0FBT0UscUJBRG5DOztJQUdNQyxZOzs7Ozs7OzBCQUNFQyxNLEVBQVE7QUFDWixVQUFJQyxxQkFBcUJELE9BQU9FLE1BQVAsQ0FBYyxVQUFTRCxrQkFBVCxFQUE2QkUsS0FBN0IsRUFBb0M7QUFDekUsWUFBSUEsaUJBQWlCTCxxQkFBckIsRUFBNEM7QUFDMUM7QUFDRCxTQUZELE1BRU87QUFDTCxjQUFJTSxvQkFBb0JELEtBQXhCOztBQUVBRiw2QkFBbUJJLElBQW5CLENBQXdCRCxpQkFBeEI7QUFDRDs7QUFFRCxlQUFPSCxrQkFBUDtBQUNELE9BVndCLEVBVXRCLEVBVnNCLENBQXpCOztBQVlBLGFBQU9BLGtCQUFQO0FBQ0Q7Ozs7OztBQUdISyxPQUFPQyxPQUFQLEdBQWlCUixZQUFqQiIsImZpbGUiOiJwcmVwcm9jZXNzb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBsZXhlcnMgPSByZXF1aXJlKCcuL29jY2FtLWxleGVycycpLFxuICAgIEluY2x1ZGVEaXJlY3RpdmVUb2tlbiA9IGxleGVycy5JbmNsdWRlRGlyZWN0aXZlVG9rZW47XG5cbmNsYXNzIFByZVByb2Nlc3NvciB7XG4gIHBhcnNlKHRva2Vucykge1xuICAgIHZhciBwcmVwcm9jZXNzZWRUb2tlbnMgPSB0b2tlbnMucmVkdWNlKGZ1bmN0aW9uKHByZXByb2Nlc3NlZFRva2VucywgdG9rZW4pIHtcbiAgICAgIGlmICh0b2tlbiBpbnN0YW5jZW9mIEluY2x1ZGVEaXJlY3RpdmVUb2tlbikge1xuICAgICAgICAvLy9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBwcmVwcm9jZXNzZWRUb2tlbiA9IHRva2VuO1xuXG4gICAgICAgIHByZXByb2Nlc3NlZFRva2Vucy5wdXNoKHByZXByb2Nlc3NlZFRva2VuKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXByb2Nlc3NlZFRva2VucztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gcHJlcHJvY2Vzc2VkVG9rZW5zO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJlUHJvY2Vzc29yO1xuIl19