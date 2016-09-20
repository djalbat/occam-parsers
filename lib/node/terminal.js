'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalNode = function () {
  function TerminalNode(str) {
    _classCallCheck(this, TerminalNode);

    this.str = str;
  }

  _createClass(TerminalNode, [{
    key: 'toString',
    value: function toString() {
      return this.getStr();
    }
  }, {
    key: 'getStr',
    value: function getStr() {
      return this.str;
    }
  }]);

  return TerminalNode;
}();

module.exports = TerminalNode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ub2RlL3Rlcm1pbmFsLmpzIl0sIm5hbWVzIjpbIlRlcm1pbmFsTm9kZSIsInN0ciIsImdldFN0ciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsWTtBQUNKLHdCQUFZQyxHQUFaLEVBQWlCO0FBQUE7O0FBQ2YsU0FBS0EsR0FBTCxHQUFXQSxHQUFYO0FBQ0Q7Ozs7K0JBRVU7QUFDVCxhQUFPLEtBQUtDLE1BQUwsRUFBUDtBQUNEOzs7NkJBRVE7QUFDUCxhQUFPLEtBQUtELEdBQVo7QUFDRDs7Ozs7O0FBR0hFLE9BQU9DLE9BQVAsR0FBaUJKLFlBQWpCIiwiZmlsZSI6InRlcm1pbmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBUZXJtaW5hbE5vZGUge1xuICBjb25zdHJ1Y3RvcihzdHIpIHtcbiAgICB0aGlzLnN0ciA9IHN0cjtcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cigpO1xuICB9XG5cbiAgZ2V0U3RyKCkge1xuICAgIHJldHVybiB0aGlzLnN0cjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRlcm1pbmFsTm9kZTtcbiJdfQ==