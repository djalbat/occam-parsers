"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findRuleByName = findRuleByName;

function findRuleByName(name, rules) {
  var rule = rules.find(function (rule) {
    var ruleName = rule.getName();

    if (ruleName === name) {
      return true;
    }
  }) || null; ///

  return rule;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGUuanMiXSwibmFtZXMiOlsiZmluZFJ1bGVCeU5hbWUiLCJuYW1lIiwicnVsZXMiLCJydWxlIiwiZmluZCIsInJ1bGVOYW1lIiwiZ2V0TmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFTyxTQUFTQSxjQUFULENBQXdCQyxJQUF4QixFQUE4QkMsS0FBOUIsRUFBcUM7QUFDMUMsTUFBTUMsSUFBSSxHQUFHRCxLQUFLLENBQUNFLElBQU4sQ0FBVyxVQUFTRCxJQUFULEVBQWU7QUFDckMsUUFBTUUsUUFBUSxHQUFHRixJQUFJLENBQUNHLE9BQUwsRUFBakI7O0FBRUEsUUFBSUQsUUFBUSxLQUFLSixJQUFqQixFQUF1QjtBQUNyQixhQUFPLElBQVA7QUFDRDtBQUNGLEdBTlksS0FNUCxJQU5OLENBRDBDLENBTzlCOztBQUVaLFNBQU9FLElBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZmluZFJ1bGVCeU5hbWUobmFtZSwgcnVsZXMpIHtcbiAgY29uc3QgcnVsZSA9IHJ1bGVzLmZpbmQoZnVuY3Rpb24ocnVsZSkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCk7XG5cbiAgICBpZiAocnVsZU5hbWUgPT09IG5hbWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSkgfHwgbnVsbDsgLy8vXG4gIFxuICByZXR1cm4gcnVsZTtcbn1cbiJdfQ==