'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers');

var parserUtil = require('../../util/parser');

var BNFLexer = lexers.BNFLexer,
    specialSymbols = BNFLexer.specialSymbols,
    NO_WHITESPACE = specialSymbols.NO_WHITESPACE;

var RuleNamePart = function () {
  function RuleNamePart(ruleName) {
    var noWhitespace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    _classCallCheck(this, RuleNamePart);

    this.ruleName = ruleName;
    this.noWhitespace = noWhitespace;
  }

  _createClass(RuleNamePart, [{
    key: 'getRuleName',
    value: function getRuleName() {
      return this.ruleName;
    }
  }, {
    key: 'isLeftRecursive',
    value: function isLeftRecursive(ruleName) {
      var leftRecursive = this.ruleName === ruleName;

      return leftRecursive;
    }
  }, {
    key: 'parse',
    value: function parse(context, noWhitespace) {
      noWhitespace = noWhitespace || this.noWhitespace; ///

      var nodeOrNodes = null;

      var rules = context.getRules(),
          rule = parserUtil.findRule(this.ruleName, rules);

      if (rule !== null) {
        nodeOrNodes = rule.parse(context, noWhitespace);
      }

      return nodeOrNodes;
    }
  }, {
    key: 'toString',
    value: function toString() {
      var noWhitespaceString = this.noWhitespace ? NO_WHITESPACE : '',
          string = '' + noWhitespaceString + this.ruleName;

      return string;
    }
  }]);

  return RuleNamePart;
}();

module.exports = RuleNamePart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFydC9ydWxlTmFtZS5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwicGFyc2VyVXRpbCIsIkJORkxleGVyIiwic3BlY2lhbFN5bWJvbHMiLCJOT19XSElURVNQQUNFIiwiUnVsZU5hbWVQYXJ0IiwicnVsZU5hbWUiLCJub1doaXRlc3BhY2UiLCJsZWZ0UmVjdXJzaXZlIiwiY29udGV4dCIsIm5vZGVPck5vZGVzIiwicnVsZXMiLCJnZXRSdWxlcyIsInJ1bGUiLCJmaW5kUnVsZSIsInBhcnNlIiwibm9XaGl0ZXNwYWNlU3RyaW5nIiwic3RyaW5nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsY0FBUixDQUFmOztBQUVBLElBQU1DLGFBQWFELFFBQVEsbUJBQVIsQ0FBbkI7O0FBRU0sSUFBRUUsUUFBRixHQUFlSCxNQUFmLENBQUVHLFFBQUY7QUFBQSxJQUNFQyxjQURGLEdBQ3FCRCxRQURyQixDQUNFQyxjQURGO0FBQUEsSUFFRUMsYUFGRixHQUVvQkQsY0FGcEIsQ0FFRUMsYUFGRjs7SUFJQUMsWTtBQUNKLHdCQUFZQyxRQUFaLEVBQTRDO0FBQUEsUUFBdEJDLFlBQXNCLHVFQUFQLEtBQU87O0FBQUE7O0FBQzFDLFNBQUtELFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQkEsWUFBcEI7QUFDRDs7OztrQ0FFYTtBQUNaLGFBQU8sS0FBS0QsUUFBWjtBQUNEOzs7b0NBRWVBLFEsRUFBVTtBQUN4QixVQUFNRSxnQkFBaUIsS0FBS0YsUUFBTCxLQUFrQkEsUUFBekM7O0FBRUEsYUFBT0UsYUFBUDtBQUNEOzs7MEJBRUtDLE8sRUFBU0YsWSxFQUFjO0FBQzNCQSxxQkFBZUEsZ0JBQWdCLEtBQUtBLFlBQXBDLENBRDJCLENBQ3VCOztBQUVsRCxVQUFJRyxjQUFjLElBQWxCOztBQUVBLFVBQU1DLFFBQVFGLFFBQVFHLFFBQVIsRUFBZDtBQUFBLFVBQ01DLE9BQU9aLFdBQVdhLFFBQVgsQ0FBb0IsS0FBS1IsUUFBekIsRUFBbUNLLEtBQW5DLENBRGI7O0FBR0EsVUFBSUUsU0FBUyxJQUFiLEVBQW1CO0FBQ2pCSCxzQkFBY0csS0FBS0UsS0FBTCxDQUFXTixPQUFYLEVBQW9CRixZQUFwQixDQUFkO0FBQ0Q7O0FBRUQsYUFBT0csV0FBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFNTSxxQkFBcUIsS0FBS1QsWUFBTCxHQUNFSCxhQURGLEdBRUksRUFGL0I7QUFBQSxVQUdNYSxjQUFZRCxrQkFBWixHQUFpQyxLQUFLVixRQUg1Qzs7QUFLQSxhQUFPVyxNQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCZCxZQUFqQiIsImZpbGUiOiJydWxlTmFtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IHBhcnNlclV0aWwgPSByZXF1aXJlKCcuLi8uLi91dGlsL3BhcnNlcicpO1xuXG5jb25zdCB7IEJORkxleGVyIH0gPSBsZXhlcnMsXG4gICAgICB7IHNwZWNpYWxTeW1ib2xzIH0gPSBCTkZMZXhlcixcbiAgICAgIHsgTk9fV0hJVEVTUEFDRSB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmNsYXNzIFJ1bGVOYW1lUGFydCB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBub1doaXRlc3BhY2UgPSBmYWxzZSkge1xuICAgIHRoaXMucnVsZU5hbWUgPSBydWxlTmFtZTtcbiAgICB0aGlzLm5vV2hpdGVzcGFjZSA9IG5vV2hpdGVzcGFjZTtcbiAgfVxuICBcbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZU5hbWU7XG4gIH1cbiAgXG4gIGlzTGVmdFJlY3Vyc2l2ZShydWxlTmFtZSkge1xuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmUgPSAodGhpcy5ydWxlTmFtZSA9PT0gcnVsZU5hbWUpO1xuICAgIFxuICAgIHJldHVybiBsZWZ0UmVjdXJzaXZlO1xuICB9XG4gIFxuICBwYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpIHtcbiAgICBub1doaXRlc3BhY2UgPSBub1doaXRlc3BhY2UgfHwgdGhpcy5ub1doaXRlc3BhY2U7IC8vL1xuXG4gICAgbGV0IG5vZGVPck5vZGVzID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBydWxlcyA9IGNvbnRleHQuZ2V0UnVsZXMoKSxcbiAgICAgICAgICBydWxlID0gcGFyc2VyVXRpbC5maW5kUnVsZSh0aGlzLnJ1bGVOYW1lLCBydWxlcyk7XG5cbiAgICBpZiAocnVsZSAhPT0gbnVsbCkge1xuICAgICAgbm9kZU9yTm9kZXMgPSBydWxlLnBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVPck5vZGVzO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgY29uc3Qgbm9XaGl0ZXNwYWNlU3RyaW5nID0gdGhpcy5ub1doaXRlc3BhY2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTk9fV0hJVEVTUEFDRSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnLFxuICAgICAgICAgIHN0cmluZyA9IGAke25vV2hpdGVzcGFjZVN0cmluZ30ke3RoaXMucnVsZU5hbWV9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlTmFtZVBhcnQ7XG4iXX0=