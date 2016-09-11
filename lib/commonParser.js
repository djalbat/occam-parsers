'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CommonParser = function () {
  function CommonParser(productions) {
    _classCallCheck(this, CommonParser);

    this.productions = productions;
  }

  _createClass(CommonParser, [{
    key: 'parse',
    value: function parse(input) {
      var index = 0,
          context = {
        index: index
      };

      var productions = this.productions,
          firstProduction = first(productions),
          parsed = firstProduction.parse(input, context, productions);

      if (parsed) {
        var parsedInput = input.slice(0, context.index);

        return parsedInput;
      } else {
        return null;
      }
    }
  }]);

  return CommonParser;
}();

module.exports = CommonParser;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jb21tb25QYXJzZXIuanMiXSwibmFtZXMiOlsiQ29tbW9uUGFyc2VyIiwicHJvZHVjdGlvbnMiLCJpbnB1dCIsImluZGV4IiwiY29udGV4dCIsImZpcnN0UHJvZHVjdGlvbiIsImZpcnN0IiwicGFyc2VkIiwicGFyc2UiLCJwYXJzZWRJbnB1dCIsInNsaWNlIiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLFk7QUFDSix3QkFBWUMsV0FBWixFQUF5QjtBQUFBOztBQUN2QixTQUFLQSxXQUFMLEdBQW1CQSxXQUFuQjtBQUNEOzs7OzBCQUVLQyxLLEVBQU87QUFDWCxVQUFJQyxRQUFRLENBQVo7QUFBQSxVQUNJQyxVQUFVO0FBQ1JELGVBQU9BO0FBREMsT0FEZDs7QUFLQSxVQUFJRixjQUFjLEtBQUtBLFdBQXZCO0FBQUEsVUFDSUksa0JBQWtCQyxNQUFNTCxXQUFOLENBRHRCO0FBQUEsVUFFSU0sU0FBU0YsZ0JBQWdCRyxLQUFoQixDQUFzQk4sS0FBdEIsRUFBNkJFLE9BQTdCLEVBQXNDSCxXQUF0QyxDQUZiOztBQUlBLFVBQUlNLE1BQUosRUFBWTtBQUNWLFlBQUlFLGNBQWNQLE1BQU1RLEtBQU4sQ0FBWSxDQUFaLEVBQWVOLFFBQVFELEtBQXZCLENBQWxCOztBQUVBLGVBQU9NLFdBQVA7QUFDRCxPQUpELE1BSU87QUFDTCxlQUFPLElBQVA7QUFDRDtBQUNGOzs7Ozs7QUFHSEUsT0FBT0MsT0FBUCxHQUFpQlosWUFBakI7O0FBRUEsU0FBU00sS0FBVCxDQUFlTyxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoiY29tbW9uUGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBDb21tb25QYXJzZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9kdWN0aW9ucykge1xuICAgIHRoaXMucHJvZHVjdGlvbnMgPSBwcm9kdWN0aW9ucztcbiAgfVxuICBcbiAgcGFyc2UoaW5wdXQpIHtcbiAgICB2YXIgaW5kZXggPSAwLFxuICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgIGluZGV4OiBpbmRleFxuICAgICAgICB9O1xuXG4gICAgdmFyIHByb2R1Y3Rpb25zID0gdGhpcy5wcm9kdWN0aW9ucyxcbiAgICAgICAgZmlyc3RQcm9kdWN0aW9uID0gZmlyc3QocHJvZHVjdGlvbnMpLFxuICAgICAgICBwYXJzZWQgPSBmaXJzdFByb2R1Y3Rpb24ucGFyc2UoaW5wdXQsIGNvbnRleHQsIHByb2R1Y3Rpb25zKTtcbiAgICBcbiAgICBpZiAocGFyc2VkKSB7XG4gICAgICB2YXIgcGFyc2VkSW5wdXQgPSBpbnB1dC5zbGljZSgwLCBjb250ZXh0LmluZGV4KTtcblxuICAgICAgcmV0dXJuIHBhcnNlZElucHV0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21tb25QYXJzZXI7XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIl19