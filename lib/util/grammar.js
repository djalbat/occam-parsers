'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BNFParser = require('../bnf/parser'),
    cycles = require('../grammar/cycles'),
    leftRecursion = require('../grammar/leftRecursion');

var grammarUtil = function () {
  function grammarUtil() {
    _classCallCheck(this, grammarUtil);
  }

  _createClass(grammarUtil, null, [{
    key: 'productionsFromGrammar',
    value: function productionsFromGrammar(grammar, bnfLexer, bnfParser) {
      var productions = void 0;

      var lines = bnfLexer.linesFromGrammar(grammar),
          node = bnfParser.nodeFromLines(lines);

      productions = BNFParser.generateProductions(node);

      productions = cycles.eliminate(productions); ///

      productions = leftRecursion.eliminate(productions); ///

      return productions;
    }
  }]);

  return grammarUtil;
}();

module.exports = grammarUtil;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsL2dyYW1tYXIuanMiXSwibmFtZXMiOlsiQk5GUGFyc2VyIiwicmVxdWlyZSIsImN5Y2xlcyIsImxlZnRSZWN1cnNpb24iLCJncmFtbWFyVXRpbCIsImdyYW1tYXIiLCJibmZMZXhlciIsImJuZlBhcnNlciIsInByb2R1Y3Rpb25zIiwibGluZXMiLCJsaW5lc0Zyb21HcmFtbWFyIiwibm9kZSIsIm5vZGVGcm9tTGluZXMiLCJnZW5lcmF0ZVByb2R1Y3Rpb25zIiwiZWxpbWluYXRlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsZUFBUixDQUFsQjtBQUFBLElBQ01DLFNBQVNELFFBQVEsbUJBQVIsQ0FEZjtBQUFBLElBRU1FLGdCQUFnQkYsUUFBUSwwQkFBUixDQUZ0Qjs7SUFJTUcsVzs7Ozs7OzsyQ0FDMEJDLE8sRUFBU0MsUSxFQUFVQyxTLEVBQVc7QUFDMUQsVUFBSUMsb0JBQUo7O0FBRUEsVUFBTUMsUUFBUUgsU0FBU0ksZ0JBQVQsQ0FBMEJMLE9BQTFCLENBQWQ7QUFBQSxVQUNNTSxPQUFPSixVQUFVSyxhQUFWLENBQXdCSCxLQUF4QixDQURiOztBQUdBRCxvQkFBY1IsVUFBVWEsbUJBQVYsQ0FBOEJGLElBQTlCLENBQWQ7O0FBRUFILG9CQUFjTixPQUFPWSxTQUFQLENBQWlCTixXQUFqQixDQUFkLENBUjBELENBUVo7O0FBRTlDQSxvQkFBY0wsY0FBY1csU0FBZCxDQUF3Qk4sV0FBeEIsQ0FBZCxDQVYwRCxDQVVMOztBQUVyRCxhQUFPQSxXQUFQO0FBQ0Q7Ozs7OztBQUdITyxPQUFPQyxPQUFQLEdBQWlCWixXQUFqQiIsImZpbGUiOiJncmFtbWFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBCTkZQYXJzZXIgPSByZXF1aXJlKCcuLi9ibmYvcGFyc2VyJyksXG4gICAgICBjeWNsZXMgPSByZXF1aXJlKCcuLi9ncmFtbWFyL2N5Y2xlcycpLFxuICAgICAgbGVmdFJlY3Vyc2lvbiA9IHJlcXVpcmUoJy4uL2dyYW1tYXIvbGVmdFJlY3Vyc2lvbicpO1xuXG5jbGFzcyBncmFtbWFyVXRpbCB7XG4gIHN0YXRpYyBwcm9kdWN0aW9uc0Zyb21HcmFtbWFyKGdyYW1tYXIsIGJuZkxleGVyLCBibmZQYXJzZXIpIHtcbiAgICBsZXQgcHJvZHVjdGlvbnM7XG4gICAgXG4gICAgY29uc3QgbGluZXMgPSBibmZMZXhlci5saW5lc0Zyb21HcmFtbWFyKGdyYW1tYXIpLFxuICAgICAgICAgIG5vZGUgPSBibmZQYXJzZXIubm9kZUZyb21MaW5lcyhsaW5lcyk7XG4gICAgXG4gICAgcHJvZHVjdGlvbnMgPSBCTkZQYXJzZXIuZ2VuZXJhdGVQcm9kdWN0aW9ucyhub2RlKTtcblxuICAgIHByb2R1Y3Rpb25zID0gY3ljbGVzLmVsaW1pbmF0ZShwcm9kdWN0aW9ucyk7ICAvLy9cblxuICAgIHByb2R1Y3Rpb25zID0gbGVmdFJlY3Vyc2lvbi5lbGltaW5hdGUocHJvZHVjdGlvbnMpOyAgLy8vXG5cbiAgICByZXR1cm4gcHJvZHVjdGlvbnM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBncmFtbWFyVXRpbDtcbiJdfQ==