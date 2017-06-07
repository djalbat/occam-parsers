'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vertex = function () {
  function Vertex(name, successorVertices) {
    _classCallCheck(this, Vertex);

    this.name = name;
    this.successorVertices = successorVertices;

    this.index = undefined;
    this.lowestIndex = undefined;
    this.onStack = undefined;
    this.visited = undefined;

    this.reset(); ///
  }

  _createClass(Vertex, [{
    key: 'getName',
    value: function getName() {
      return this.name;
    }
  }, {
    key: 'getSuccessorVertices',
    value: function getSuccessorVertices() {
      return this.successorVertices;
    }
  }, {
    key: 'getIndex',
    value: function getIndex() {
      return this.index;
    }
  }, {
    key: 'getLowestIndex',
    value: function getLowestIndex() {
      return this.lowestIndex;
    }
  }, {
    key: 'isOnStack',
    value: function isOnStack() {
      return this.onStack;
    }
  }, {
    key: 'isVisited',
    value: function isVisited() {
      return this.visited;
    }
  }, {
    key: 'setSuccessorVertices',
    value: function setSuccessorVertices(successorVertices) {
      this.successorVertices = successorVertices;
    }
  }, {
    key: 'setIndex',
    value: function setIndex(index) {
      this.index = index;
    }
  }, {
    key: 'setLowestIndex',
    value: function setLowestIndex(lowestIndex) {
      this.lowestIndex = lowestIndex;
    }
  }, {
    key: 'setOnStack',
    value: function setOnStack(onStack) {
      this.onStack = onStack;
    }
  }, {
    key: 'setVisited',
    value: function setVisited(visited) {
      this.visited = visited;
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.index = -1;
      this.lowestIndex = -1;
      this.onStack = false;
      this.visited = false;
    }
  }], [{
    key: 'fromName',
    value: function fromName(name) {
      var successorVertices = [],
          vertex = new Vertex(name, successorVertices);

      return vertex;
    }
  }]);

  return Vertex;
}();

module.exports = Vertex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ncmFwaC92ZXJ0ZXguanMiXSwibmFtZXMiOlsiVmVydGV4IiwibmFtZSIsInN1Y2Nlc3NvclZlcnRpY2VzIiwiaW5kZXgiLCJ1bmRlZmluZWQiLCJsb3dlc3RJbmRleCIsIm9uU3RhY2siLCJ2aXNpdGVkIiwicmVzZXQiLCJ2ZXJ0ZXgiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLE07QUFDSixrQkFBWUMsSUFBWixFQUFrQkMsaUJBQWxCLEVBQXFDO0FBQUE7O0FBQ25DLFNBQUtELElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLGlCQUFMLEdBQXlCQSxpQkFBekI7O0FBRUEsU0FBS0MsS0FBTCxHQUFhQyxTQUFiO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQkQsU0FBbkI7QUFDQSxTQUFLRSxPQUFMLEdBQWVGLFNBQWY7QUFDQSxTQUFLRyxPQUFMLEdBQWVILFNBQWY7O0FBRUEsU0FBS0ksS0FBTCxHQVRtQyxDQVNyQjtBQUNmOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLUCxJQUFaO0FBQ0Q7OzsyQ0FFc0I7QUFDckIsYUFBTyxLQUFLQyxpQkFBWjtBQUNEOzs7K0JBRVU7QUFDVCxhQUFPLEtBQUtDLEtBQVo7QUFDRDs7O3FDQUVnQjtBQUNmLGFBQU8sS0FBS0UsV0FBWjtBQUNEOzs7Z0NBRVc7QUFDVixhQUFPLEtBQUtDLE9BQVo7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLQyxPQUFaO0FBQ0Q7Ozt5Q0FFb0JMLGlCLEVBQW1CO0FBQ3RDLFdBQUtBLGlCQUFMLEdBQTBCQSxpQkFBMUI7QUFDRDs7OzZCQUVRQyxLLEVBQU87QUFDZCxXQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7O21DQUVjRSxXLEVBQWE7QUFDMUIsV0FBS0EsV0FBTCxHQUFtQkEsV0FBbkI7QUFDRDs7OytCQUVVQyxPLEVBQVM7QUFDbEIsV0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0Q7OzsrQkFFVUMsTyxFQUFTO0FBQ2xCLFdBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNEOzs7NEJBRU87QUFDTixXQUFLSixLQUFMLEdBQWEsQ0FBQyxDQUFkO0FBQ0EsV0FBS0UsV0FBTCxHQUFtQixDQUFDLENBQXBCO0FBQ0EsV0FBS0MsT0FBTCxHQUFlLEtBQWY7QUFDQSxXQUFLQyxPQUFMLEdBQWUsS0FBZjtBQUNEOzs7NkJBRWVOLEksRUFBTTtBQUNwQixVQUFNQyxvQkFBb0IsRUFBMUI7QUFBQSxVQUNNTyxTQUFTLElBQUlULE1BQUosQ0FBV0MsSUFBWCxFQUFpQkMsaUJBQWpCLENBRGY7O0FBR0EsYUFBT08sTUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQlgsTUFBakIiLCJmaWxlIjoidmVydGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBWZXJ0ZXgge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBzdWNjZXNzb3JWZXJ0aWNlcykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5zdWNjZXNzb3JWZXJ0aWNlcyA9IHN1Y2Nlc3NvclZlcnRpY2VzO1xuXG4gICAgdGhpcy5pbmRleCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxvd2VzdEluZGV4ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMub25TdGFjayA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnZpc2l0ZWQgPSB1bmRlZmluZWQ7XG5cbiAgICB0aGlzLnJlc2V0KCk7IC8vL1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0U3VjY2Vzc29yVmVydGljZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VjY2Vzc29yVmVydGljZXM7XG4gIH1cblxuICBnZXRJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbmRleDtcbiAgfVxuXG4gIGdldExvd2VzdEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLmxvd2VzdEluZGV4O1xuICB9XG5cbiAgaXNPblN0YWNrKCkge1xuICAgIHJldHVybiB0aGlzLm9uU3RhY2s7XG4gIH1cblxuICBpc1Zpc2l0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMudmlzaXRlZDtcbiAgfVxuXG4gIHNldFN1Y2Nlc3NvclZlcnRpY2VzKHN1Y2Nlc3NvclZlcnRpY2VzKSB7XG4gICAgdGhpcy5zdWNjZXNzb3JWZXJ0aWNlcyA9ICBzdWNjZXNzb3JWZXJ0aWNlcztcbiAgfVxuXG4gIHNldEluZGV4KGluZGV4KSB7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICB9XG5cbiAgc2V0TG93ZXN0SW5kZXgobG93ZXN0SW5kZXgpIHtcbiAgICB0aGlzLmxvd2VzdEluZGV4ID0gbG93ZXN0SW5kZXg7XG4gIH1cblxuICBzZXRPblN0YWNrKG9uU3RhY2spIHtcbiAgICB0aGlzLm9uU3RhY2sgPSBvblN0YWNrO1xuICB9XG5cbiAgc2V0VmlzaXRlZCh2aXNpdGVkKSB7XG4gICAgdGhpcy52aXNpdGVkID0gdmlzaXRlZDtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuaW5kZXggPSAtMTtcbiAgICB0aGlzLmxvd2VzdEluZGV4ID0gLTE7XG4gICAgdGhpcy5vblN0YWNrID0gZmFsc2U7XG4gICAgdGhpcy52aXNpdGVkID0gZmFsc2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWUobmFtZSkge1xuICAgIGNvbnN0IHN1Y2Nlc3NvclZlcnRpY2VzID0gW10sXG4gICAgICAgICAgdmVydGV4ID0gbmV3IFZlcnRleChuYW1lLCBzdWNjZXNzb3JWZXJ0aWNlcyk7XG5cbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVmVydGV4OyJdfQ==