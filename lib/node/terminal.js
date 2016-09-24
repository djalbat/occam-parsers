'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ParseTree = require('../parseTree');

var TerminalNode = function () {
  function TerminalNode(str) {
    _classCallCheck(this, TerminalNode);

    this.str = str;
  }

  _createClass(TerminalNode, [{
    key: 'getParseTree',
    value: function getParseTree() {
      var parseTree = ParseTree.fromString(this.str);

      return parseTree;
    }
  }]);

  return TerminalNode;
}();

module.exports = TerminalNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ub2RlL3Rlcm1pbmFsLmpzIl0sIm5hbWVzIjpbIlBhcnNlVHJlZSIsInJlcXVpcmUiLCJUZXJtaW5hbE5vZGUiLCJzdHIiLCJwYXJzZVRyZWUiLCJmcm9tU3RyaW5nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLFlBQVlDLFFBQVEsY0FBUixDQUFoQjs7SUFFTUMsWTtBQUNKLHdCQUFZQyxHQUFaLEVBQWlCO0FBQUE7O0FBQ2YsU0FBS0EsR0FBTCxHQUFXQSxHQUFYO0FBQ0Q7Ozs7bUNBRWM7QUFDYixVQUFJQyxZQUFZSixVQUFVSyxVQUFWLENBQXFCLEtBQUtGLEdBQTFCLENBQWhCOztBQUVBLGFBQU9DLFNBQVA7QUFDRDs7Ozs7O0FBR0hFLE9BQU9DLE9BQVAsR0FBaUJMLFlBQWpCIiwiZmlsZSI6InRlcm1pbmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUGFyc2VUcmVlID0gcmVxdWlyZSgnLi4vcGFyc2VUcmVlJyk7XG5cbmNsYXNzIFRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHN0cikge1xuICAgIHRoaXMuc3RyID0gc3RyO1xuICB9XG5cbiAgZ2V0UGFyc2VUcmVlKCkge1xuICAgIHZhciBwYXJzZVRyZWUgPSBQYXJzZVRyZWUuZnJvbVN0cmluZyh0aGlzLnN0cik7XG4gICAgXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRlcm1pbmFsTm9kZTtcbiJdfQ==