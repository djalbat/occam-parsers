'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var cycles = require('../grammar/cycles'),
    leftRecursion = require('../grammar/leftRecursion'),
    ExtendedBNFParser = require('../extendedBNF/parser');

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

      productions = ExtendedBNFParser.generateProductions(node);

      productions = cycles.eliminate(productions); ///

      productions = leftRecursion.eliminate(productions); ///

      return productions;
    }
  }]);

  return grammarUtil;
}();

module.exports = grammarUtil;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsL2dyYW1tYXIuanMiXSwibmFtZXMiOlsiY3ljbGVzIiwicmVxdWlyZSIsImxlZnRSZWN1cnNpb24iLCJFeHRlbmRlZEJORlBhcnNlciIsImdyYW1tYXJVdGlsIiwiZ3JhbW1hciIsImJuZkxleGVyIiwiYm5mUGFyc2VyIiwicHJvZHVjdGlvbnMiLCJsaW5lcyIsImxpbmVzRnJvbUdyYW1tYXIiLCJub2RlIiwibm9kZUZyb21MaW5lcyIsImdlbmVyYXRlUHJvZHVjdGlvbnMiLCJlbGltaW5hdGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxtQkFBUixDQUFmO0FBQUEsSUFDTUMsZ0JBQWdCRCxRQUFRLDBCQUFSLENBRHRCO0FBQUEsSUFFTUUsb0JBQW9CRixRQUFRLHVCQUFSLENBRjFCOztJQUlNRyxXOzs7Ozs7OzJDQUMwQkMsTyxFQUFTQyxRLEVBQVVDLFMsRUFBVztBQUMxRCxVQUFJQyxvQkFBSjs7QUFFQSxVQUFNQyxRQUFRSCxTQUFTSSxnQkFBVCxDQUEwQkwsT0FBMUIsQ0FBZDtBQUFBLFVBQ01NLE9BQU9KLFVBQVVLLGFBQVYsQ0FBd0JILEtBQXhCLENBRGI7O0FBR0FELG9CQUFjTCxrQkFBa0JVLG1CQUFsQixDQUFzQ0YsSUFBdEMsQ0FBZDs7QUFFQUgsb0JBQWNSLE9BQU9jLFNBQVAsQ0FBaUJOLFdBQWpCLENBQWQsQ0FSMEQsQ0FRWjs7QUFFOUNBLG9CQUFjTixjQUFjWSxTQUFkLENBQXdCTixXQUF4QixDQUFkLENBVjBELENBVUw7O0FBRXJELGFBQU9BLFdBQVA7QUFDRDs7Ozs7O0FBR0hPLE9BQU9DLE9BQVAsR0FBaUJaLFdBQWpCIiwiZmlsZSI6ImdyYW1tYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGN5Y2xlcyA9IHJlcXVpcmUoJy4uL2dyYW1tYXIvY3ljbGVzJyksXG4gICAgICBsZWZ0UmVjdXJzaW9uID0gcmVxdWlyZSgnLi4vZ3JhbW1hci9sZWZ0UmVjdXJzaW9uJyksXG4gICAgICBFeHRlbmRlZEJORlBhcnNlciA9IHJlcXVpcmUoJy4uL2V4dGVuZGVkQk5GL3BhcnNlcicpO1xuXG5jbGFzcyBncmFtbWFyVXRpbCB7XG4gIHN0YXRpYyBwcm9kdWN0aW9uc0Zyb21HcmFtbWFyKGdyYW1tYXIsIGJuZkxleGVyLCBibmZQYXJzZXIpIHtcbiAgICBsZXQgcHJvZHVjdGlvbnM7XG4gICAgXG4gICAgY29uc3QgbGluZXMgPSBibmZMZXhlci5saW5lc0Zyb21HcmFtbWFyKGdyYW1tYXIpLFxuICAgICAgICAgIG5vZGUgPSBibmZQYXJzZXIubm9kZUZyb21MaW5lcyhsaW5lcyk7XG4gICAgXG4gICAgcHJvZHVjdGlvbnMgPSBFeHRlbmRlZEJORlBhcnNlci5nZW5lcmF0ZVByb2R1Y3Rpb25zKG5vZGUpO1xuXG4gICAgcHJvZHVjdGlvbnMgPSBjeWNsZXMuZWxpbWluYXRlKHByb2R1Y3Rpb25zKTsgIC8vL1xuXG4gICAgcHJvZHVjdGlvbnMgPSBsZWZ0UmVjdXJzaW9uLmVsaW1pbmF0ZShwcm9kdWN0aW9ucyk7ICAvLy9cblxuICAgIHJldHVybiBwcm9kdWN0aW9ucztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdyYW1tYXJVdGlsO1xuIl19