'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalNodeParseTree = require('../parseTree/terminalNode');

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
      terminalNodeParseTree = TerminalNodeParseTree.fromTerminalNode(terminalNode),
          parseTree = terminalNodeParseTree; ///

      return parseTree;
    }
  }]);

  return TerminalNode;
}();

module.exports = TerminalNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ub2RlL3Rlcm1pbmFsLmpzIl0sIm5hbWVzIjpbIlRlcm1pbmFsTm9kZVBhcnNlVHJlZSIsInJlcXVpcmUiLCJUZXJtaW5hbE5vZGUiLCJzdHIiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVQYXJzZVRyZWUiLCJmcm9tVGVybWluYWxOb2RlIiwicGFyc2VUcmVlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLHdCQUF3QkMsUUFBUSwyQkFBUixDQUE1Qjs7SUFFTUMsWTtBQUNKLHdCQUFZQyxHQUFaLEVBQWlCO0FBQUE7O0FBQ2YsU0FBS0EsR0FBTCxHQUFXQSxHQUFYO0FBQ0Q7Ozs7Z0NBRVc7QUFDVixhQUFPLEtBQUtBLEdBQVo7QUFDRDs7O21DQUVjO0FBQ2IsVUFBSUMsZUFBZSxJQUFuQjtBQUFBLFVBQTBCO0FBQ3RCQyw4QkFBd0JMLHNCQUFzQk0sZ0JBQXRCLENBQXVDRixZQUF2QyxDQUQ1QjtBQUFBLFVBRUlHLFlBQVlGLHFCQUZoQixDQURhLENBRzJCOztBQUV4QyxhQUFPRSxTQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCUCxZQUFqQiIsImZpbGUiOiJ0ZXJtaW5hbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFRlcm1pbmFsTm9kZVBhcnNlVHJlZSA9IHJlcXVpcmUoJy4uL3BhcnNlVHJlZS90ZXJtaW5hbE5vZGUnKTtcblxuY2xhc3MgVGVybWluYWxOb2RlIHtcbiAgY29uc3RydWN0b3Ioc3RyKSB7XG4gICAgdGhpcy5zdHIgPSBzdHI7XG4gIH1cbiAgXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHI7XG4gIH1cbiAgXG4gIGdldFBhcnNlVHJlZSgpIHtcbiAgICB2YXIgdGVybWluYWxOb2RlID0gdGhpcywgIC8vL1xuICAgICAgICB0ZXJtaW5hbE5vZGVQYXJzZVRyZWUgPSBUZXJtaW5hbE5vZGVQYXJzZVRyZWUuZnJvbVRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGUpLFxuICAgICAgICBwYXJzZVRyZWUgPSB0ZXJtaW5hbE5vZGVQYXJzZVRyZWU7ICAvLy9cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXJtaW5hbE5vZGU7XG4iXX0=