"use strict";

var _configuration = _interopRequireDefault(require("./configuration"));

var _array = require("../utilities/array");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
          var firstRule = (0, _array.first)(this.rules);
          rule = firstRule; ///
        }
      }

      if (rule !== null) {
        var configuration = _configuration["default"].fromTokensAndRules(tokens, this.rules);

        node = rule.parse(configuration);
      }

      return node;
    }
  }]);

  return CommonParser;
}();

module.exports = CommonParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlci5qcyJdLCJuYW1lcyI6WyJDb21tb25QYXJzZXIiLCJydWxlcyIsInRva2VucyIsInJ1bGUiLCJub2RlIiwicnVsZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdFJ1bGUiLCJjb25maWd1cmF0aW9uIiwiQ29uZmlndXJhdGlvbiIsImZyb21Ub2tlbnNBbmRSdWxlcyIsInBhcnNlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7SUFFTUEsWTtBQUNKLHdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQSxLQUFaO0FBQ0Q7OzswQkFFS0MsTSxFQUFxQjtBQUFBLFVBQWJDLElBQWEsdUVBQU4sSUFBTTtBQUN6QixVQUFJQyxJQUFJLEdBQUcsSUFBWDs7QUFFQSxVQUFJRCxJQUFJLEtBQUssSUFBYixFQUFtQjtBQUNqQixZQUFNRSxXQUFXLEdBQUcsS0FBS0osS0FBTCxDQUFXSyxNQUEvQjs7QUFFQSxZQUFJRCxXQUFXLEdBQUcsQ0FBbEIsRUFBcUI7QUFDbkIsY0FBTUUsU0FBUyxHQUFHLGtCQUFNLEtBQUtOLEtBQVgsQ0FBbEI7QUFFQUUsVUFBQUEsSUFBSSxHQUFHSSxTQUFQLENBSG1CLENBR0Q7QUFDbkI7QUFDRjs7QUFFRCxVQUFJSixJQUFJLEtBQUssSUFBYixFQUFtQjtBQUNqQixZQUFNSyxhQUFhLEdBQUdDLDBCQUFjQyxrQkFBZCxDQUFpQ1IsTUFBakMsRUFBeUMsS0FBS0QsS0FBOUMsQ0FBdEI7O0FBRUFHLFFBQUFBLElBQUksR0FBR0QsSUFBSSxDQUFDUSxLQUFMLENBQVdILGFBQVgsQ0FBUDtBQUNEOztBQUVELGFBQU9KLElBQVA7QUFDRDs7Ozs7O0FBR0hRLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmIsWUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbmZpZ3VyYXRpb24gZnJvbSBcIi4vY29uZmlndXJhdGlvblwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuY2xhc3MgQ29tbW9uUGFyc2VyIHtcbiAgY29uc3RydWN0b3IocnVsZXMpIHtcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gIH1cblxuICBnZXRSdWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlcztcbiAgfVxuXG4gIHBhcnNlKHRva2VucywgcnVsZSA9IG51bGwpIHtcbiAgICBsZXQgbm9kZSA9IG51bGw7XG5cbiAgICBpZiAocnVsZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgcnVsZXNMZW5ndGggPSB0aGlzLnJ1bGVzLmxlbmd0aDtcblxuICAgICAgaWYgKHJ1bGVzTGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBmaXJzdFJ1bGUgPSBmaXJzdCh0aGlzLnJ1bGVzKTtcblxuICAgICAgICBydWxlID0gZmlyc3RSdWxlOyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocnVsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29uZmlndXJhdGlvbiA9IENvbmZpZ3VyYXRpb24uZnJvbVRva2Vuc0FuZFJ1bGVzKHRva2VucywgdGhpcy5ydWxlcyk7XG5cbiAgICAgIG5vZGUgPSBydWxlLnBhcnNlKGNvbmZpZ3VyYXRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tbW9uUGFyc2VyO1xuIl19