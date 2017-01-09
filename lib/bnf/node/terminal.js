'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalNodeParseTree = require('../parseTree/terminalNode');

var TerminalNode = function () {
  function TerminalNode(string, type) {
    _classCallCheck(this, TerminalNode);

    this.string = string;
    this.type = type;
  }

  _createClass(TerminalNode, [{
    key: 'getString',
    value: function getString() {
      var string = this.type === null ? this.string : this.string + '[' + this.type + ']'; ///

      return string;
    }
  }, {
    key: 'getParseTree',
    value: function getParseTree() {
      var terminalNode = this,
          ///
      terminalNodeParseTree = TerminalNodeParseTree.fromTerminalNode(terminalNode),
          parseTree = terminalNodeParseTree; ///

      return parseTree;
    }
  }]);

  return TerminalNode;
}();

module.exports = TerminalNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS90ZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJUZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJyZXF1aXJlIiwiVGVybWluYWxOb2RlIiwic3RyaW5nIiwidHlwZSIsInRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZVBhcnNlVHJlZSIsImZyb21UZXJtaW5hbE5vZGUiLCJwYXJzZVRyZWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSUEsd0JBQXdCQyxRQUFRLDJCQUFSLENBQTVCOztJQUVNQyxZO0FBQ0osd0JBQVlDLE1BQVosRUFBb0JDLElBQXBCLEVBQTBCO0FBQUE7O0FBQ3hCLFNBQUtELE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNEOzs7O2dDQUVXO0FBQ1YsVUFBSUQsU0FBVSxLQUFLQyxJQUFMLEtBQWMsSUFBZixHQUNHLEtBQUtELE1BRFIsR0FFSyxLQUFLQSxNQUZWLFNBRW9CLEtBQUtDLElBRnpCLE1BQWIsQ0FEVSxDQUdxQzs7QUFFL0MsYUFBT0QsTUFBUDtBQUNEOzs7bUNBRWM7QUFDYixVQUFJRSxlQUFlLElBQW5CO0FBQUEsVUFBMEI7QUFDdEJDLDhCQUF3Qk4sc0JBQXNCTyxnQkFBdEIsQ0FBdUNGLFlBQXZDLENBRDVCO0FBQUEsVUFFSUcsWUFBWUYscUJBRmhCLENBRGEsQ0FHMkI7O0FBRXhDLGFBQU9FLFNBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJSLFlBQWpCIiwiZmlsZSI6InRlcm1pbmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVGVybWluYWxOb2RlUGFyc2VUcmVlID0gcmVxdWlyZSgnLi4vcGFyc2VUcmVlL3Rlcm1pbmFsTm9kZScpO1xuXG5jbGFzcyBUZXJtaW5hbE5vZGUge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHR5cGUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG4gIFxuICBnZXRTdHJpbmcoKSB7XG4gICAgdmFyIHN0cmluZyA9ICh0aGlzLnR5cGUgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdHJpbmcgOlxuICAgICAgICAgICAgICAgICAgIGAke3RoaXMuc3RyaW5nfVske3RoaXMudHlwZX1dYDsgLy8vXG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG4gIFxuICBnZXRQYXJzZVRyZWUoKSB7XG4gICAgdmFyIHRlcm1pbmFsTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgdGVybWluYWxOb2RlUGFyc2VUcmVlID0gVGVybWluYWxOb2RlUGFyc2VUcmVlLmZyb21UZXJtaW5hbE5vZGUodGVybWluYWxOb2RlKSxcbiAgICAgICAgcGFyc2VUcmVlID0gdGVybWluYWxOb2RlUGFyc2VUcmVlOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGVybWluYWxOb2RlO1xuIl19