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
    key: 'getString',
    value: function getString() {
      return this.str;
    }
  }, {
    key: 'getParseTree',
    value: function getParseTree() {
      var terminalNode = this,
          ///
      parseTree = ParseTree.fromTerminalNode(terminalNode);

      return parseTree;
    }
  }]);

  return TerminalNode;
}();

module.exports = TerminalNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ub2RlL3Rlcm1pbmFsLmpzIl0sIm5hbWVzIjpbIlBhcnNlVHJlZSIsInJlcXVpcmUiLCJUZXJtaW5hbE5vZGUiLCJzdHIiLCJ0ZXJtaW5hbE5vZGUiLCJwYXJzZVRyZWUiLCJmcm9tVGVybWluYWxOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLFlBQVlDLFFBQVEsY0FBUixDQUFoQjs7SUFFTUMsWTtBQUNKLHdCQUFZQyxHQUFaLEVBQWlCO0FBQUE7O0FBQ2YsU0FBS0EsR0FBTCxHQUFXQSxHQUFYO0FBQ0Q7Ozs7Z0NBRVc7QUFDVixhQUFPLEtBQUtBLEdBQVo7QUFDRDs7O21DQUVjO0FBQ2IsVUFBSUMsZUFBZSxJQUFuQjtBQUFBLFVBQTBCO0FBQ3RCQyxrQkFBWUwsVUFBVU0sZ0JBQVYsQ0FBMkJGLFlBQTNCLENBRGhCOztBQUdBLGFBQU9DLFNBQVA7QUFDRDs7Ozs7O0FBR0hFLE9BQU9DLE9BQVAsR0FBaUJOLFlBQWpCIiwiZmlsZSI6InRlcm1pbmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUGFyc2VUcmVlID0gcmVxdWlyZSgnLi4vcGFyc2VUcmVlJyk7XG5cbmNsYXNzIFRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHN0cikge1xuICAgIHRoaXMuc3RyID0gc3RyO1xuICB9XG4gIFxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyO1xuICB9XG5cbiAgZ2V0UGFyc2VUcmVlKCkge1xuICAgIHZhciB0ZXJtaW5hbE5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgIHBhcnNlVHJlZSA9IFBhcnNlVHJlZS5mcm9tVGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZSk7XG4gICAgXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRlcm1pbmFsTm9kZTtcbiJdfQ==