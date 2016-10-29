'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ErrorNodeParseTree = require('../parseTree/errorNode');

var ErrorNode = function () {
  function ErrorNode(str, message) {
    _classCallCheck(this, ErrorNode);

    this.str = str;
    this.message = message;
  }

  _createClass(ErrorNode, [{
    key: 'getString',
    value: function getString() {
      return this.str;
    }
  }, {
    key: 'getMessage',
    value: function getMessage() {
      return this.message;
    }
  }, {
    key: 'getParseTree',
    value: function getParseTree() {
      var errorNode = this,
          ///
      errorNodeParseTree = ErrorNodeParseTree.fromErrorNode(errorNode),
          parseTree = errorNodeParseTree; ///

      return parseTree;
    }
  }]);

  return ErrorNode;
}();

module.exports = ErrorNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ub2RlL2Vycm9yLmpzIl0sIm5hbWVzIjpbIkVycm9yTm9kZVBhcnNlVHJlZSIsInJlcXVpcmUiLCJFcnJvck5vZGUiLCJzdHIiLCJtZXNzYWdlIiwiZXJyb3JOb2RlIiwiZXJyb3JOb2RlUGFyc2VUcmVlIiwiZnJvbUVycm9yTm9kZSIsInBhcnNlVHJlZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxxQkFBcUJDLFFBQVEsd0JBQVIsQ0FBekI7O0lBRU1DLFM7QUFDSixxQkFBWUMsR0FBWixFQUFpQkMsT0FBakIsRUFBMEI7QUFBQTs7QUFDeEIsU0FBS0QsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsT0FBTCxHQUFlQSxPQUFmO0FBQ0Q7Ozs7Z0NBR1c7QUFDVixhQUFPLEtBQUtELEdBQVo7QUFDRDs7O2lDQUVZO0FBQ1gsYUFBTyxLQUFLQyxPQUFaO0FBQ0Q7OzttQ0FFYztBQUNiLFVBQUlDLFlBQVksSUFBaEI7QUFBQSxVQUF1QjtBQUNuQkMsMkJBQXFCTixtQkFBbUJPLGFBQW5CLENBQWlDRixTQUFqQyxDQUR6QjtBQUFBLFVBRUlHLFlBQVlGLGtCQUZoQixDQURhLENBR3dCOztBQUVyQyxhQUFPRSxTQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCUixTQUFqQiIsImZpbGUiOiJlcnJvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIEVycm9yTm9kZVBhcnNlVHJlZSA9IHJlcXVpcmUoJy4uL3BhcnNlVHJlZS9lcnJvck5vZGUnKTtcblxuY2xhc3MgRXJyb3JOb2RlIHtcbiAgY29uc3RydWN0b3Ioc3RyLCBtZXNzYWdlKSB7XG4gICAgdGhpcy5zdHIgPSBzdHI7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgfVxuXG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cjtcbiAgfVxuXG4gIGdldE1lc3NhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMubWVzc2FnZTtcbiAgfVxuXG4gIGdldFBhcnNlVHJlZSgpIHtcbiAgICB2YXIgZXJyb3JOb2RlID0gdGhpcywgIC8vL1xuICAgICAgICBlcnJvck5vZGVQYXJzZVRyZWUgPSBFcnJvck5vZGVQYXJzZVRyZWUuZnJvbUVycm9yTm9kZShlcnJvck5vZGUpLFxuICAgICAgICBwYXJzZVRyZWUgPSBlcnJvck5vZGVQYXJzZVRyZWU7ICAvLy9cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFcnJvck5vZGU7XG4iXX0=