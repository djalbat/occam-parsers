'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Configuration = require('./configuration'),
    arrayUtilities = require('../utilities/array');

var first = arrayUtilities.first;

var CommonParser = /*#__PURE__*/function () {
  function CommonParser(rules) {
    _classCallCheck(this, CommonParser);

    this.rules = rules;
  }

  _createClass(CommonParser, [{
    key: "getRules",
    value: function getRules() {
      return this.rules;
    }
  }, {
    key: "parse",
    value: function parse(tokens) {
      var rule = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var node = null;

      if (rule === null) {
        var rulesLength = this.rules.length;

        if (rulesLength > 0) {
          var firstRule = first(this.rules);
          rule = firstRule; ///
        }
      }

      if (rule !== null) {
        var configuration = Configuration.fromTokensAndRules(tokens, this.rules);
        node = rule.parse(configuration);
      }

      return node;
    }
  }]);

  return CommonParser;
}();

module.exports = CommonParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlci5qcyJdLCJuYW1lcyI6WyJDb25maWd1cmF0aW9uIiwicmVxdWlyZSIsImFycmF5VXRpbGl0aWVzIiwiZmlyc3QiLCJDb21tb25QYXJzZXIiLCJydWxlcyIsInRva2VucyIsInJ1bGUiLCJub2RlIiwicnVsZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdFJ1bGUiLCJjb25maWd1cmF0aW9uIiwiZnJvbVRva2Vuc0FuZFJ1bGVzIiwicGFyc2UiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLE9BQU8sQ0FBQyxpQkFBRCxDQUE3QjtBQUFBLElBQ01DLGNBQWMsR0FBR0QsT0FBTyxDQUFDLG9CQUFELENBRDlCOztJQUdRRSxLLEdBQVVELGMsQ0FBVkMsSzs7SUFFRkMsWTtBQUNKLHdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQSxLQUFaO0FBQ0Q7OzswQkFFS0MsTSxFQUFxQjtBQUFBLFVBQWJDLElBQWEsdUVBQU4sSUFBTTtBQUN6QixVQUFJQyxJQUFJLEdBQUcsSUFBWDs7QUFFQSxVQUFJRCxJQUFJLEtBQUssSUFBYixFQUFtQjtBQUNqQixZQUFNRSxXQUFXLEdBQUcsS0FBS0osS0FBTCxDQUFXSyxNQUEvQjs7QUFFQSxZQUFJRCxXQUFXLEdBQUcsQ0FBbEIsRUFBcUI7QUFDbkIsY0FBTUUsU0FBUyxHQUFHUixLQUFLLENBQUMsS0FBS0UsS0FBTixDQUF2QjtBQUVBRSxVQUFBQSxJQUFJLEdBQUdJLFNBQVAsQ0FIbUIsQ0FHRDtBQUNuQjtBQUNGOztBQUVELFVBQUlKLElBQUksS0FBSyxJQUFiLEVBQW1CO0FBQ2pCLFlBQU1LLGFBQWEsR0FBR1osYUFBYSxDQUFDYSxrQkFBZCxDQUFpQ1AsTUFBakMsRUFBeUMsS0FBS0QsS0FBOUMsQ0FBdEI7QUFFQUcsUUFBQUEsSUFBSSxHQUFHRCxJQUFJLENBQUNPLEtBQUwsQ0FBV0YsYUFBWCxDQUFQO0FBQ0Q7O0FBRUQsYUFBT0osSUFBUDtBQUNEOzs7Ozs7QUFHSE8sTUFBTSxDQUFDQyxPQUFQLEdBQWlCWixZQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ29uZmlndXJhdGlvbiA9IHJlcXVpcmUoJy4vY29uZmlndXJhdGlvbicpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKTtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIENvbW1vblBhcnNlciB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVzKSB7XG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xuICB9XG5cbiAgZ2V0UnVsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZXM7XG4gIH1cblxuICBwYXJzZSh0b2tlbnMsIHJ1bGUgPSBudWxsKSB7XG4gICAgbGV0IG5vZGUgPSBudWxsO1xuXG4gICAgaWYgKHJ1bGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJ1bGVzTGVuZ3RoID0gdGhpcy5ydWxlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChydWxlc0xlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgZmlyc3RSdWxlID0gZmlyc3QodGhpcy5ydWxlcyk7XG5cbiAgICAgICAgcnVsZSA9IGZpcnN0UnVsZTsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJ1bGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNvbmZpZ3VyYXRpb24gPSBDb25maWd1cmF0aW9uLmZyb21Ub2tlbnNBbmRSdWxlcyh0b2tlbnMsIHRoaXMucnVsZXMpO1xuXG4gICAgICBub2RlID0gcnVsZS5wYXJzZShjb25maWd1cmF0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1vblBhcnNlcjtcbiJdfQ==