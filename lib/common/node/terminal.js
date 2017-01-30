'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalNodeParseTree = require('../../bnf/parseTree/terminalNode');

var TerminalNode = function () {
  function TerminalNode(significantToken, productionName) {
    _classCallCheck(this, TerminalNode);

    this.significantToken = significantToken;
    this.productionName = productionName;
  }

  _createClass(TerminalNode, [{
    key: 'getChildNodes',
    value: function getChildNodes() {
      var childNodes = []; ///

      return childNodes;
    }
  }, {
    key: 'getProductionName',
    value: function getProductionName() {
      return this.productionName;
    }
  }, {
    key: 'getLine',
    value: function getLine() {
      return this.significantToken.getLine();
    }
  }, {
    key: 'getStartLine',
    value: function getStartLine() {
      var line = this.getLine(),
          startLine = line; ///

      return startLine;
    }
  }, {
    key: 'getEndLine',
    value: function getEndLine() {
      var line = this.getLine(),
          endLine = line; ///

      return endLine;
    }
  }, {
    key: 'getContent',
    value: function getContent() {
      var significantTokenType = this.significantToken.getType(),
          significantTokenContent = this.significantToken.getContent(),
          line = this.getLine(),
          lineNumber = line.getNumber(),
          content = significantTokenContent + '[' + significantTokenType + '] (' + lineNumber + ')';

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
  }], [{
    key: 'fromSignificantTokenAndProductionName',
    value: function fromSignificantTokenAndProductionName(significantToken, productionName) {
      var Class = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : TerminalNode;

      var terminalNode = new Class(significantToken, productionName);

      return terminalNode;
    }
  }]);

  return TerminalNode;
}();

module.exports = TerminalNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS90ZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJUZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJyZXF1aXJlIiwiVGVybWluYWxOb2RlIiwic2lnbmlmaWNhbnRUb2tlbiIsInByb2R1Y3Rpb25OYW1lIiwiY2hpbGROb2RlcyIsImdldExpbmUiLCJsaW5lIiwic3RhcnRMaW5lIiwiZW5kTGluZSIsInNpZ25pZmljYW50VG9rZW5UeXBlIiwiZ2V0VHlwZSIsInNpZ25pZmljYW50VG9rZW5Db250ZW50IiwiZ2V0Q29udGVudCIsImxpbmVOdW1iZXIiLCJnZXROdW1iZXIiLCJjb250ZW50IiwidGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlUGFyc2VUcmVlIiwiZnJvbVRlcm1pbmFsTm9kZSIsInBhcnNlVHJlZSIsIkNsYXNzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLHdCQUF3QkMsUUFBUSxrQ0FBUixDQUE1Qjs7SUFFTUMsWTtBQUNKLHdCQUFZQyxnQkFBWixFQUE4QkMsY0FBOUIsRUFBOEM7QUFBQTs7QUFDNUMsU0FBS0QsZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQUNBLFNBQUtDLGNBQUwsR0FBc0JBLGNBQXRCO0FBQ0Q7Ozs7b0NBRWU7QUFDZCxVQUFJQyxhQUFhLEVBQWpCLENBRGMsQ0FDUTs7QUFFdEIsYUFBT0EsVUFBUDtBQUNEOzs7d0NBRW1CO0FBQ2xCLGFBQU8sS0FBS0QsY0FBWjtBQUNEOzs7OEJBRVM7QUFBRSxhQUFPLEtBQUtELGdCQUFMLENBQXNCRyxPQUF0QixFQUFQO0FBQXdDOzs7bUNBRXJDO0FBQ2IsVUFBSUMsT0FBTyxLQUFLRCxPQUFMLEVBQVg7QUFBQSxVQUNJRSxZQUFZRCxJQURoQixDQURhLENBRVM7O0FBRXRCLGFBQU9DLFNBQVA7QUFDRDs7O2lDQUVZO0FBQ1gsVUFBSUQsT0FBTyxLQUFLRCxPQUFMLEVBQVg7QUFBQSxVQUNJRyxVQUFVRixJQURkLENBRFcsQ0FFUzs7QUFFcEIsYUFBT0UsT0FBUDtBQUNEOzs7aUNBRVk7QUFDWCxVQUFJQyx1QkFBdUIsS0FBS1AsZ0JBQUwsQ0FBc0JRLE9BQXRCLEVBQTNCO0FBQUEsVUFDSUMsMEJBQTBCLEtBQUtULGdCQUFMLENBQXNCVSxVQUF0QixFQUQ5QjtBQUFBLFVBRUlOLE9BQU8sS0FBS0QsT0FBTCxFQUZYO0FBQUEsVUFHSVEsYUFBYVAsS0FBS1EsU0FBTCxFQUhqQjtBQUFBLFVBSUlDLFVBQWFKLHVCQUFiLFNBQXdDRixvQkFBeEMsV0FBa0VJLFVBQWxFLE1BSko7O0FBTUEsYUFBT0UsT0FBUDtBQUNEOzs7MENBRXFCO0FBQ3BCLGFBQU8sS0FBS2IsZ0JBQVo7QUFDRDs7O21DQUVjO0FBQ2IsVUFBSWMsZUFBZSxJQUFuQjtBQUFBLFVBQTBCO0FBQ3RCQyw4QkFBd0JsQixzQkFBc0JtQixnQkFBdEIsQ0FBdUNGLFlBQXZDLENBRDVCO0FBQUEsVUFFSUcsWUFBWUYscUJBRmhCLENBRGEsQ0FHMkI7O0FBRXhDLGFBQU9FLFNBQVA7QUFDRDs7OzBEQUU0Q2pCLGdCLEVBQWtCQyxjLEVBQXNDO0FBQUEsVUFBdEJpQixLQUFzQix1RUFBZG5CLFlBQWM7O0FBQ25HLFVBQUllLGVBQWUsSUFBSUksS0FBSixDQUFVbEIsZ0JBQVYsRUFBNEJDLGNBQTVCLENBQW5COztBQUVBLGFBQU9hLFlBQVA7QUFDRDs7Ozs7O0FBR0hLLE9BQU9DLE9BQVAsR0FBaUJyQixZQUFqQiIsImZpbGUiOiJ0ZXJtaW5hbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IHJlcXVpcmUoJy4uLy4uL2JuZi9wYXJzZVRyZWUvdGVybWluYWxOb2RlJyk7XG5cbmNsYXNzIFRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHNpZ25pZmljYW50VG9rZW4sIHByb2R1Y3Rpb25OYW1lKSB7XG4gICAgdGhpcy5zaWduaWZpY2FudFRva2VuID0gc2lnbmlmaWNhbnRUb2tlbjtcbiAgICB0aGlzLnByb2R1Y3Rpb25OYW1lID0gcHJvZHVjdGlvbk5hbWU7XG4gIH1cbiAgXG4gIGdldENoaWxkTm9kZXMoKSB7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBbXTsgIC8vL1xuICAgIFxuICAgIHJldHVybiBjaGlsZE5vZGVzO1xuICB9XG4gIFxuICBnZXRQcm9kdWN0aW9uTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9kdWN0aW9uTmFtZTtcbiAgfVxuXG4gIGdldExpbmUoKSB7IHJldHVybiB0aGlzLnNpZ25pZmljYW50VG9rZW4uZ2V0TGluZSgpIH07XG5cbiAgZ2V0U3RhcnRMaW5lKCkge1xuICAgIHZhciBsaW5lID0gdGhpcy5nZXRMaW5lKCksXG4gICAgICAgIHN0YXJ0TGluZSA9IGxpbmU7IC8vL1xuXG4gICAgcmV0dXJuIHN0YXJ0TGluZTtcbiAgfVxuXG4gIGdldEVuZExpbmUoKSB7XG4gICAgdmFyIGxpbmUgPSB0aGlzLmdldExpbmUoKSxcbiAgICAgICAgZW5kTGluZSA9IGxpbmU7IC8vL1xuXG4gICAgcmV0dXJuIGVuZExpbmU7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIHZhciBzaWduaWZpY2FudFRva2VuVHlwZSA9IHRoaXMuc2lnbmlmaWNhbnRUb2tlbi5nZXRUeXBlKCksXG4gICAgICAgIHNpZ25pZmljYW50VG9rZW5Db250ZW50ID0gdGhpcy5zaWduaWZpY2FudFRva2VuLmdldENvbnRlbnQoKSxcbiAgICAgICAgbGluZSA9IHRoaXMuZ2V0TGluZSgpLFxuICAgICAgICBsaW5lTnVtYmVyID0gbGluZS5nZXROdW1iZXIoKSxcbiAgICAgICAgY29udGVudCA9IGAke3NpZ25pZmljYW50VG9rZW5Db250ZW50fVske3NpZ25pZmljYW50VG9rZW5UeXBlfV0gKCR7bGluZU51bWJlcn0pYDtcblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgZ2V0U2lnbmlmaWNhbnRUb2tlbigpIHtcbiAgICByZXR1cm4gdGhpcy5zaWduaWZpY2FudFRva2VuO1xuICB9XG4gIFxuICBnZXRQYXJzZVRyZWUoKSB7XG4gICAgdmFyIHRlcm1pbmFsTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgdGVybWluYWxOb2RlUGFyc2VUcmVlID0gVGVybWluYWxOb2RlUGFyc2VUcmVlLmZyb21UZXJtaW5hbE5vZGUodGVybWluYWxOb2RlKSxcbiAgICAgICAgcGFyc2VUcmVlID0gdGVybWluYWxOb2RlUGFyc2VUcmVlOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TaWduaWZpY2FudFRva2VuQW5kUHJvZHVjdGlvbk5hbWUoc2lnbmlmaWNhbnRUb2tlbiwgcHJvZHVjdGlvbk5hbWUsIENsYXNzID0gVGVybWluYWxOb2RlKSB7XG4gICAgdmFyIHRlcm1pbmFsTm9kZSA9IG5ldyBDbGFzcyhzaWduaWZpY2FudFRva2VuLCBwcm9kdWN0aW9uTmFtZSk7XG5cbiAgICByZXR1cm4gdGVybWluYWxOb2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGVybWluYWxOb2RlO1xuIl19