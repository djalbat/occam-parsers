"use strict";

var _configuration = _interopRequireDefault(require("./configuration"));

var _array = _interopRequireDefault(require("../utilities/array"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var first = _array["default"].first;

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
        var configuration = _configuration["default"].fromTokensAndRules(tokens, this.rules);

        node = rule.parse(configuration);
      }

      return node;
    }
  }]);

  return CommonParser;
}();

module.exports = CommonParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlci5qcyJdLCJuYW1lcyI6WyJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiQ29tbW9uUGFyc2VyIiwicnVsZXMiLCJ0b2tlbnMiLCJydWxlIiwibm9kZSIsInJ1bGVzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RSdWxlIiwiY29uZmlndXJhdGlvbiIsIkNvbmZpZ3VyYXRpb24iLCJmcm9tVG9rZW5zQW5kUnVsZXMiLCJwYXJzZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUNBOzs7Ozs7Ozs7O0lBRVFBLEssR0FBVUMsaUIsQ0FBVkQsSzs7SUFFRkUsWTtBQUNKLHdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQSxLQUFaO0FBQ0Q7OzswQkFFS0MsTSxFQUFxQjtBQUFBLFVBQWJDLElBQWEsdUVBQU4sSUFBTTtBQUN6QixVQUFJQyxJQUFJLEdBQUcsSUFBWDs7QUFFQSxVQUFJRCxJQUFJLEtBQUssSUFBYixFQUFtQjtBQUNqQixZQUFNRSxXQUFXLEdBQUcsS0FBS0osS0FBTCxDQUFXSyxNQUEvQjs7QUFFQSxZQUFJRCxXQUFXLEdBQUcsQ0FBbEIsRUFBcUI7QUFDbkIsY0FBTUUsU0FBUyxHQUFHVCxLQUFLLENBQUMsS0FBS0csS0FBTixDQUF2QjtBQUVBRSxVQUFBQSxJQUFJLEdBQUdJLFNBQVAsQ0FIbUIsQ0FHRDtBQUNuQjtBQUNGOztBQUVELFVBQUlKLElBQUksS0FBSyxJQUFiLEVBQW1CO0FBQ2pCLFlBQU1LLGFBQWEsR0FBR0MsMEJBQWNDLGtCQUFkLENBQWlDUixNQUFqQyxFQUF5QyxLQUFLRCxLQUE5QyxDQUF0Qjs7QUFFQUcsUUFBQUEsSUFBSSxHQUFHRCxJQUFJLENBQUNRLEtBQUwsQ0FBV0gsYUFBWCxDQUFQO0FBQ0Q7O0FBRUQsYUFBT0osSUFBUDtBQUNEOzs7Ozs7QUFHSFEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCYixZQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ29uZmlndXJhdGlvbiBmcm9tIFwiLi9jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQgYXJyYXlVdGlsaXRpZXMgZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgQ29tbW9uUGFyc2VyIHtcbiAgY29uc3RydWN0b3IocnVsZXMpIHtcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gIH1cblxuICBnZXRSdWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlcztcbiAgfVxuXG4gIHBhcnNlKHRva2VucywgcnVsZSA9IG51bGwpIHtcbiAgICBsZXQgbm9kZSA9IG51bGw7XG5cbiAgICBpZiAocnVsZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgcnVsZXNMZW5ndGggPSB0aGlzLnJ1bGVzLmxlbmd0aDtcblxuICAgICAgaWYgKHJ1bGVzTGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBmaXJzdFJ1bGUgPSBmaXJzdCh0aGlzLnJ1bGVzKTtcblxuICAgICAgICBydWxlID0gZmlyc3RSdWxlOyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocnVsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29uZmlndXJhdGlvbiA9IENvbmZpZ3VyYXRpb24uZnJvbVRva2Vuc0FuZFJ1bGVzKHRva2VucywgdGhpcy5ydWxlcyk7XG5cbiAgICAgIG5vZGUgPSBydWxlLnBhcnNlKGNvbmZpZ3VyYXRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tbW9uUGFyc2VyO1xuIl19