'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalNodeParseTree = require('../parseTree/terminalNode');

var TerminalNode = function () {
  function TerminalNode(content, significantToken) {
    _classCallCheck(this, TerminalNode);

    this.content = content;
    this.significantToken = significantToken;
  }

  _createClass(TerminalNode, [{
    key: 'getContent',
    value: function getContent() {
      var content = this.content;

      if (this.significantToken !== null) {
        var significantTokenType = this.significantToken.getType();

        content = content + '[' + significantTokenType + ']'; ///
      }

      return content;
    }
  }, {
    key: 'getSignificantToken',
    value: function getSignificantToken() {
      return this.significantToken;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvbm9kZS90ZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJUZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJyZXF1aXJlIiwiVGVybWluYWxOb2RlIiwiY29udGVudCIsInNpZ25pZmljYW50VG9rZW4iLCJzaWduaWZpY2FudFRva2VuVHlwZSIsImdldFR5cGUiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJmcm9tVGVybWluYWxOb2RlIiwicGFyc2VUcmVlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLHdCQUF3QkMsUUFBUSwyQkFBUixDQUE1Qjs7SUFFTUMsWTtBQUNKLHdCQUFZQyxPQUFaLEVBQXFCQyxnQkFBckIsRUFBdUM7QUFBQTs7QUFDckMsU0FBS0QsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0MsZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQUNEOzs7O2lDQUVZO0FBQ1gsVUFBSUQsVUFBVSxLQUFLQSxPQUFuQjs7QUFFQSxVQUFJLEtBQUtDLGdCQUFMLEtBQTBCLElBQTlCLEVBQW9DO0FBQ2xDLFlBQUlDLHVCQUF1QixLQUFLRCxnQkFBTCxDQUFzQkUsT0FBdEIsRUFBM0I7O0FBRUFILGtCQUFhQSxPQUFiLFNBQXdCRSxvQkFBeEIsT0FIa0MsQ0FHZTtBQUNsRDs7QUFFRCxhQUFPRixPQUFQO0FBQ0Q7OzswQ0FFcUI7QUFDcEIsYUFBTyxLQUFLQyxnQkFBWjtBQUNEOzs7bUNBRWM7QUFDYixVQUFJRyxlQUFlLElBQW5CO0FBQUEsVUFBMEI7QUFDdEJDLDhCQUF3QlIsc0JBQXNCUyxnQkFBdEIsQ0FBdUNGLFlBQXZDLENBRDVCO0FBQUEsVUFFSUcsWUFBWUYscUJBRmhCLENBRGEsQ0FHMkI7O0FBRXhDLGFBQU9FLFNBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJWLFlBQWpCIiwiZmlsZSI6InRlcm1pbmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVGVybWluYWxOb2RlUGFyc2VUcmVlID0gcmVxdWlyZSgnLi4vcGFyc2VUcmVlL3Rlcm1pbmFsTm9kZScpO1xuXG5jbGFzcyBUZXJtaW5hbE5vZGUge1xuICBjb25zdHJ1Y3Rvcihjb250ZW50LCBzaWduaWZpY2FudFRva2VuKSB7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICB0aGlzLnNpZ25pZmljYW50VG9rZW4gPSBzaWduaWZpY2FudFRva2VuO1xuICB9XG4gIFxuICBnZXRDb250ZW50KCkge1xuICAgIHZhciBjb250ZW50ID0gdGhpcy5jb250ZW50O1xuXG4gICAgaWYgKHRoaXMuc2lnbmlmaWNhbnRUb2tlbiAhPT0gbnVsbCkge1xuICAgICAgdmFyIHNpZ25pZmljYW50VG9rZW5UeXBlID0gdGhpcy5zaWduaWZpY2FudFRva2VuLmdldFR5cGUoKTtcblxuICAgICAgY29udGVudCA9IGAke2NvbnRlbnR9WyR7c2lnbmlmaWNhbnRUb2tlblR5cGV9XWA7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgZ2V0U2lnbmlmaWNhbnRUb2tlbigpIHtcbiAgICByZXR1cm4gdGhpcy5zaWduaWZpY2FudFRva2VuO1xuICB9XG4gIFxuICBnZXRQYXJzZVRyZWUoKSB7XG4gICAgdmFyIHRlcm1pbmFsTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgdGVybWluYWxOb2RlUGFyc2VUcmVlID0gVGVybWluYWxOb2RlUGFyc2VUcmVlLmZyb21UZXJtaW5hbE5vZGUodGVybWluYWxOb2RlKSxcbiAgICAgICAgcGFyc2VUcmVlID0gdGVybWluYWxOb2RlUGFyc2VUcmVlOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGVybWluYWxOb2RlO1xuIl19