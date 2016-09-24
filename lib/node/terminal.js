'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TerminalNode = function () {
  function TerminalNode(str) {
    _classCallCheck(this, TerminalNode);

    this.str = str;
  }

  _createClass(TerminalNode, [{
    key: 'getStrArray',
    value: function getStrArray() {
      var str = this.str + '~',
          strArray = [str];

      return strArray;
    }
  }, {
    key: 'getDepth',
    value: function getDepth() {
      var depth = 0;

      return depth;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ub2RlL3Rlcm1pbmFsLmpzIl0sIm5hbWVzIjpbIlRlcm1pbmFsTm9kZSIsInN0ciIsInN0ckFycmF5IiwiZGVwdGgiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLFk7QUFDSix3QkFBWUMsR0FBWixFQUFpQjtBQUFBOztBQUNmLFNBQUtBLEdBQUwsR0FBV0EsR0FBWDtBQUNEOzs7O2tDQUVhO0FBQ1osVUFBSUEsTUFBTSxLQUFLQSxHQUFMLEdBQVcsR0FBckI7QUFBQSxVQUNJQyxXQUFXLENBQUNELEdBQUQsQ0FEZjs7QUFHQSxhQUFPQyxRQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQUlDLFFBQVEsQ0FBWjs7QUFFQSxhQUFPQSxLQUFQO0FBQ0Q7Ozs2QkFFUTtBQUNQLGFBQU8sS0FBS0YsR0FBWjtBQUNEOzs7Ozs7QUFHSEcsT0FBT0MsT0FBUCxHQUFpQkwsWUFBakIiLCJmaWxlIjoidGVybWluYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFRlcm1pbmFsTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHN0cikge1xuICAgIHRoaXMuc3RyID0gc3RyO1xuICB9XG5cbiAgZ2V0U3RyQXJyYXkoKSB7XG4gICAgdmFyIHN0ciA9IHRoaXMuc3RyICsgJ34nLFxuICAgICAgICBzdHJBcnJheSA9IFtzdHJdO1xuICAgIFxuICAgIHJldHVybiBzdHJBcnJheTtcbiAgfVxuICBcbiAgZ2V0RGVwdGgoKSB7XG4gICAgdmFyIGRlcHRoID0gMDtcbiAgICBcbiAgICByZXR1cm4gZGVwdGg7XG4gIH1cblxuICBnZXRTdHIoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGVybWluYWxOb2RlO1xuIl19