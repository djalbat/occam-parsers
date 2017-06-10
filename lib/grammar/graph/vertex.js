'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vertex = function () {
  function Vertex(name, index, stacked, visited, lowestIndex, successorVertices) {
    _classCallCheck(this, Vertex);

    this.name = name;
    this.index = index;
    this.stacked = stacked;
    this.visited = visited;
    this.lowestIndex = lowestIndex;
    this.successorVertices = successorVertices;
  }

  _createClass(Vertex, [{
    key: 'getName',
    value: function getName() {
      return this.name;
    }
  }, {
    key: 'getIndex',
    value: function getIndex() {
      return this.index;
    }
  }, {
    key: 'isStacked',
    value: function isStacked() {
      return this.stacked;
    }
  }, {
    key: 'isVisited',
    value: function isVisited() {
      return this.visited;
    }
  }, {
    key: 'getLowestIndex',
    value: function getLowestIndex() {
      return this.lowestIndex;
    }
  }, {
    key: 'getSuccessorVertices',
    value: function getSuccessorVertices() {
      return this.successorVertices;
    }
  }, {
    key: 'isUnindexed',
    value: function isUnindexed() {
      var unindexed = this.index < 0; ///

      return unindexed;
    }
  }, {
    key: 'isLowest',
    value: function isLowest() {
      var lowest = this.index === this.lowestIndex; ///

      return lowest;
    }
  }, {
    key: 'setIndex',
    value: function setIndex(index) {
      this.index = index;
    }
  }, {
    key: 'setStacked',
    value: function setStacked(stacked) {
      this.stacked = stacked;
    }
  }, {
    key: 'setVisited',
    value: function setVisited(visited) {
      this.visited = visited;
    }
  }, {
    key: 'setLowestIndex',
    value: function setLowestIndex(lowestIndex) {
      this.lowestIndex = lowestIndex;
    }
  }, {
    key: 'setSuccessorVertices',
    value: function setSuccessorVertices(successorVertices) {
      this.successorVertices = successorVertices;
    }
  }, {
    key: 'updateLowestIndex',
    value: function updateLowestIndex(lowestIndex) {
      if (lowestIndex < this.lowestIndex) {
        this.lowestIndex = lowestIndex;
      }
    }
  }], [{
    key: 'fromName',
    value: function fromName(name) {
      var index = -1,
          stacked = false,
          visited = false,
          lowestIndex = -1,
          successorVertices = [],
          vertex = new Vertex(name, index, stacked, visited, lowestIndex, successorVertices);

      return vertex;
    }
  }]);

  return Vertex;
}();

module.exports = Vertex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ncmFtbWFyL2dyYXBoL3ZlcnRleC5qcyJdLCJuYW1lcyI6WyJWZXJ0ZXgiLCJuYW1lIiwiaW5kZXgiLCJzdGFja2VkIiwidmlzaXRlZCIsImxvd2VzdEluZGV4Iiwic3VjY2Vzc29yVmVydGljZXMiLCJ1bmluZGV4ZWQiLCJsb3dlc3QiLCJ2ZXJ0ZXgiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLE07QUFDSixrQkFBWUMsSUFBWixFQUFrQkMsS0FBbEIsRUFBeUJDLE9BQXpCLEVBQWtDQyxPQUFsQyxFQUEyQ0MsV0FBM0MsRUFBd0RDLGlCQUF4RCxFQUEyRTtBQUFBOztBQUN6RSxTQUFLTCxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxXQUFMLEdBQW1CQSxXQUFuQjtBQUNBLFNBQUtDLGlCQUFMLEdBQXlCQSxpQkFBekI7QUFDRDs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0wsSUFBWjtBQUNEOzs7K0JBRVU7QUFDVCxhQUFPLEtBQUtDLEtBQVo7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLQyxPQUFaO0FBQ0Q7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0MsT0FBWjtBQUNEOzs7cUNBRWdCO0FBQ2YsYUFBTyxLQUFLQyxXQUFaO0FBQ0Q7OzsyQ0FFc0I7QUFDckIsYUFBTyxLQUFLQyxpQkFBWjtBQUNEOzs7a0NBRWE7QUFDWixVQUFNQyxZQUFhLEtBQUtMLEtBQUwsR0FBYSxDQUFoQyxDQURZLENBQ3dCOztBQUVwQyxhQUFPSyxTQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1DLFNBQVUsS0FBS04sS0FBTCxLQUFlLEtBQUtHLFdBQXBDLENBRFMsQ0FDeUM7O0FBRWxELGFBQU9HLE1BQVA7QUFDRDs7OzZCQUVRTixLLEVBQU87QUFDZCxXQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OytCQUVVQyxPLEVBQVM7QUFDbEIsV0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0Q7OzsrQkFFVUMsTyxFQUFTO0FBQ2xCLFdBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNEOzs7bUNBRWNDLFcsRUFBYTtBQUMxQixXQUFLQSxXQUFMLEdBQW1CQSxXQUFuQjtBQUNEOzs7eUNBRW9CQyxpQixFQUFtQjtBQUN0QyxXQUFLQSxpQkFBTCxHQUEwQkEsaUJBQTFCO0FBQ0Q7OztzQ0FFaUJELFcsRUFBYTtBQUM3QixVQUFJQSxjQUFjLEtBQUtBLFdBQXZCLEVBQW9DO0FBQ2xDLGFBQUtBLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0Q7QUFDRjs7OzZCQUVlSixJLEVBQU07QUFDcEIsVUFBTUMsUUFBUSxDQUFDLENBQWY7QUFBQSxVQUNNQyxVQUFVLEtBRGhCO0FBQUEsVUFFTUMsVUFBVSxLQUZoQjtBQUFBLFVBR01DLGNBQWMsQ0FBQyxDQUhyQjtBQUFBLFVBSU1DLG9CQUFvQixFQUoxQjtBQUFBLFVBS01HLFNBQVMsSUFBSVQsTUFBSixDQUFXQyxJQUFYLEVBQWlCQyxLQUFqQixFQUF3QkMsT0FBeEIsRUFBaUNDLE9BQWpDLEVBQTBDQyxXQUExQyxFQUF1REMsaUJBQXZELENBTGY7O0FBT0EsYUFBT0csTUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQlgsTUFBakIiLCJmaWxlIjoidmVydGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBWZXJ0ZXgge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBpbmRleCwgc3RhY2tlZCwgdmlzaXRlZCwgbG93ZXN0SW5kZXgsIHN1Y2Nlc3NvclZlcnRpY2VzKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgdGhpcy5zdGFja2VkID0gc3RhY2tlZDtcbiAgICB0aGlzLnZpc2l0ZWQgPSB2aXNpdGVkO1xuICAgIHRoaXMubG93ZXN0SW5kZXggPSBsb3dlc3RJbmRleDtcbiAgICB0aGlzLnN1Y2Nlc3NvclZlcnRpY2VzID0gc3VjY2Vzc29yVmVydGljZXM7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbmRleDtcbiAgfVxuXG4gIGlzU3RhY2tlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFja2VkO1xuICB9XG5cbiAgaXNWaXNpdGVkKCkge1xuICAgIHJldHVybiB0aGlzLnZpc2l0ZWQ7XG4gIH1cblxuICBnZXRMb3dlc3RJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5sb3dlc3RJbmRleDtcbiAgfVxuXG4gIGdldFN1Y2Nlc3NvclZlcnRpY2VzKCkge1xuICAgIHJldHVybiB0aGlzLnN1Y2Nlc3NvclZlcnRpY2VzO1xuICB9XG4gIFxuICBpc1VuaW5kZXhlZCgpIHtcbiAgICBjb25zdCB1bmluZGV4ZWQgPSAodGhpcy5pbmRleCA8IDApOyAvLy9cbiAgICBcbiAgICByZXR1cm4gdW5pbmRleGVkO1xuICB9XG4gIFxuICBpc0xvd2VzdCgpIHtcbiAgICBjb25zdCBsb3dlc3QgPSAodGhpcy5pbmRleCA9PT0gdGhpcy5sb3dlc3RJbmRleCk7IC8vL1xuICAgIFxuICAgIHJldHVybiBsb3dlc3Q7XG4gIH1cblxuICBzZXRJbmRleChpbmRleCkge1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgfVxuXG4gIHNldFN0YWNrZWQoc3RhY2tlZCkge1xuICAgIHRoaXMuc3RhY2tlZCA9IHN0YWNrZWQ7XG4gIH1cblxuICBzZXRWaXNpdGVkKHZpc2l0ZWQpIHtcbiAgICB0aGlzLnZpc2l0ZWQgPSB2aXNpdGVkO1xuICB9XG4gIFxuICBzZXRMb3dlc3RJbmRleChsb3dlc3RJbmRleCkge1xuICAgIHRoaXMubG93ZXN0SW5kZXggPSBsb3dlc3RJbmRleDtcbiAgfVxuXG4gIHNldFN1Y2Nlc3NvclZlcnRpY2VzKHN1Y2Nlc3NvclZlcnRpY2VzKSB7XG4gICAgdGhpcy5zdWNjZXNzb3JWZXJ0aWNlcyA9ICBzdWNjZXNzb3JWZXJ0aWNlcztcbiAgfVxuICBcbiAgdXBkYXRlTG93ZXN0SW5kZXgobG93ZXN0SW5kZXgpIHtcbiAgICBpZiAobG93ZXN0SW5kZXggPCB0aGlzLmxvd2VzdEluZGV4KSB7XG4gICAgICB0aGlzLmxvd2VzdEluZGV4ID0gbG93ZXN0SW5kZXg7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lKG5hbWUpIHtcbiAgICBjb25zdCBpbmRleCA9IC0xLFxuICAgICAgICAgIHN0YWNrZWQgPSBmYWxzZSxcbiAgICAgICAgICB2aXNpdGVkID0gZmFsc2UsXG4gICAgICAgICAgbG93ZXN0SW5kZXggPSAtMSxcbiAgICAgICAgICBzdWNjZXNzb3JWZXJ0aWNlcyA9IFtdLFxuICAgICAgICAgIHZlcnRleCA9IG5ldyBWZXJ0ZXgobmFtZSwgaW5kZXgsIHN0YWNrZWQsIHZpc2l0ZWQsIGxvd2VzdEluZGV4LCBzdWNjZXNzb3JWZXJ0aWNlcyk7XG5cbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVmVydGV4O1xuIl19