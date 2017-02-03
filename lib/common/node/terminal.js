'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalNodeParseTree = require('../../bnf/parseTree/terminalNode');

var TerminalNode = function () {
  function TerminalNode(productionName, significantToken, line) {
    _classCallCheck(this, TerminalNode);

    this.productionName = productionName;
    this.significantToken = significantToken;
    this.line = line;
  }

  _createClass(TerminalNode, [{
    key: 'getProductionName',
    value: function getProductionName() {
      return this.productionName;
    }
  }, {
    key: 'getSignificantToken',
    value: function getSignificantToken() {
      return this.significantToken;
    }
  }, {
    key: 'getLine',
    value: function getLine() {
      return this.line;
    }
  }, {
    key: 'getChildNodes',
    value: function getChildNodes() {
      var childNodes = []; ///

      return childNodes;
    }
  }, {
    key: 'getStartLine',
    value: function getStartLine() {
      var startLine = this.line; ///

      return startLine;
    }
  }, {
    key: 'getEndLine',
    value: function getEndLine() {
      var endLine = this.line; ///

      return endLine;
    }
  }, {
    key: 'setChildNodes',
    value: function setChildNodes(childNodes) {
      ///
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
    key: 'fromProductionNameAndSignificantToken',
    value: function fromProductionNameAndSignificantToken(productionName, significantToken) {
      var Class = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : TerminalNode;

      var line = significantToken.getLine(),
          terminalNode = new Class(productionName, significantToken, line);

      return terminalNode;
    }
  }]);

  return TerminalNode;
}();

module.exports = TerminalNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS90ZXJtaW5hbC5qcyJdLCJuYW1lcyI6WyJUZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJyZXF1aXJlIiwiVGVybWluYWxOb2RlIiwicHJvZHVjdGlvbk5hbWUiLCJzaWduaWZpY2FudFRva2VuIiwibGluZSIsImNoaWxkTm9kZXMiLCJzdGFydExpbmUiLCJlbmRMaW5lIiwidGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlUGFyc2VUcmVlIiwiZnJvbVRlcm1pbmFsTm9kZSIsInBhcnNlVHJlZSIsIkNsYXNzIiwiZ2V0TGluZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSx3QkFBd0JDLFFBQVEsa0NBQVIsQ0FBNUI7O0lBRU1DLFk7QUFDSix3QkFBWUMsY0FBWixFQUE0QkMsZ0JBQTVCLEVBQThDQyxJQUE5QyxFQUFvRDtBQUFBOztBQUNsRCxTQUFLRixjQUFMLEdBQXNCQSxjQUF0QjtBQUNBLFNBQUtDLGdCQUFMLEdBQXdCQSxnQkFBeEI7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDRDs7Ozt3Q0FFbUI7QUFDbEIsYUFBTyxLQUFLRixjQUFaO0FBQ0Q7OzswQ0FFcUI7QUFDcEIsYUFBTyxLQUFLQyxnQkFBWjtBQUNEOzs7OEJBRVM7QUFDUixhQUFPLEtBQUtDLElBQVo7QUFDRDs7O29DQUVlO0FBQ2QsVUFBSUMsYUFBYSxFQUFqQixDQURjLENBQ1E7O0FBRXRCLGFBQU9BLFVBQVA7QUFDRDs7O21DQUVjO0FBQ2IsVUFBSUMsWUFBWSxLQUFLRixJQUFyQixDQURhLENBQ2M7O0FBRTNCLGFBQU9FLFNBQVA7QUFDRDs7O2lDQUVZO0FBQ1gsVUFBSUMsVUFBVSxLQUFLSCxJQUFuQixDQURXLENBQ2M7O0FBRXpCLGFBQU9HLE9BQVA7QUFDRDs7O2tDQUVhRixVLEVBQVk7QUFDeEI7QUFDRDs7O21DQUVjO0FBQ2IsVUFBSUcsZUFBZSxJQUFuQjtBQUFBLFVBQTBCO0FBQ3RCQyw4QkFBd0JWLHNCQUFzQlcsZ0JBQXRCLENBQXVDRixZQUF2QyxDQUQ1QjtBQUFBLFVBRUlHLFlBQVlGLHFCQUZoQixDQURhLENBRzJCOztBQUV4QyxhQUFPRSxTQUFQO0FBQ0Q7OzswREFFNENULGMsRUFBZ0JDLGdCLEVBQXdDO0FBQUEsVUFBdEJTLEtBQXNCLHVFQUFkWCxZQUFjOztBQUNuRyxVQUFJRyxPQUFPRCxpQkFBaUJVLE9BQWpCLEVBQVg7QUFBQSxVQUNJTCxlQUFlLElBQUlJLEtBQUosQ0FBVVYsY0FBVixFQUEwQkMsZ0JBQTFCLEVBQTRDQyxJQUE1QyxDQURuQjs7QUFHQSxhQUFPSSxZQUFQO0FBQ0Q7Ozs7OztBQUdITSxPQUFPQyxPQUFQLEdBQWlCZCxZQUFqQiIsImZpbGUiOiJ0ZXJtaW5hbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IHJlcXVpcmUoJy4uLy4uL2JuZi9wYXJzZVRyZWUvdGVybWluYWxOb2RlJyk7XG5cbmNsYXNzIFRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHByb2R1Y3Rpb25OYW1lLCBzaWduaWZpY2FudFRva2VuLCBsaW5lKSB7XG4gICAgdGhpcy5wcm9kdWN0aW9uTmFtZSA9IHByb2R1Y3Rpb25OYW1lO1xuICAgIHRoaXMuc2lnbmlmaWNhbnRUb2tlbiA9IHNpZ25pZmljYW50VG9rZW47XG4gICAgdGhpcy5saW5lID0gbGluZTtcbiAgfVxuXG4gIGdldFByb2R1Y3Rpb25OYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnByb2R1Y3Rpb25OYW1lO1xuICB9XG5cbiAgZ2V0U2lnbmlmaWNhbnRUb2tlbigpIHtcbiAgICByZXR1cm4gdGhpcy5zaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgZ2V0TGluZSgpIHtcbiAgICByZXR1cm4gdGhpcy5saW5lO1xuICB9XG5cbiAgZ2V0Q2hpbGROb2RlcygpIHtcbiAgICB2YXIgY2hpbGROb2RlcyA9IFtdOyAgLy8vXG4gICAgXG4gICAgcmV0dXJuIGNoaWxkTm9kZXM7XG4gIH1cbiAgXG4gIGdldFN0YXJ0TGluZSgpIHtcbiAgICB2YXIgc3RhcnRMaW5lID0gdGhpcy5saW5lOyAvLy9cblxuICAgIHJldHVybiBzdGFydExpbmU7XG4gIH1cblxuICBnZXRFbmRMaW5lKCkge1xuICAgIHZhciBlbmRMaW5lID0gdGhpcy5saW5lOyAvLy9cblxuICAgIHJldHVybiBlbmRMaW5lO1xuICB9XG5cbiAgc2V0Q2hpbGROb2RlcyhjaGlsZE5vZGVzKSB7XG4gICAgLy8vXG4gIH1cblxuICBnZXRQYXJzZVRyZWUoKSB7XG4gICAgdmFyIHRlcm1pbmFsTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgdGVybWluYWxOb2RlUGFyc2VUcmVlID0gVGVybWluYWxOb2RlUGFyc2VUcmVlLmZyb21UZXJtaW5hbE5vZGUodGVybWluYWxOb2RlKSxcbiAgICAgICAgcGFyc2VUcmVlID0gdGVybWluYWxOb2RlUGFyc2VUcmVlOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9kdWN0aW9uTmFtZUFuZFNpZ25pZmljYW50VG9rZW4ocHJvZHVjdGlvbk5hbWUsIHNpZ25pZmljYW50VG9rZW4sIENsYXNzID0gVGVybWluYWxOb2RlKSB7XG4gICAgdmFyIGxpbmUgPSBzaWduaWZpY2FudFRva2VuLmdldExpbmUoKSxcbiAgICAgICAgdGVybWluYWxOb2RlID0gbmV3IENsYXNzKHByb2R1Y3Rpb25OYW1lLCBzaWduaWZpY2FudFRva2VuLCBsaW5lKTtcblxuICAgIHJldHVybiB0ZXJtaW5hbE5vZGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXJtaW5hbE5vZGU7XG4iXX0=