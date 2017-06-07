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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ncmFwaC92ZXJ0ZXguanMiXSwibmFtZXMiOlsiVmVydGV4IiwibmFtZSIsImluZGV4Iiwic3RhY2tlZCIsInZpc2l0ZWQiLCJsb3dlc3RJbmRleCIsInN1Y2Nlc3NvclZlcnRpY2VzIiwidW5pbmRleGVkIiwibG93ZXN0IiwidmVydGV4IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNQSxNO0FBQ0osa0JBQVlDLElBQVosRUFBa0JDLEtBQWxCLEVBQXlCQyxPQUF6QixFQUFrQ0MsT0FBbEMsRUFBMkNDLFdBQTNDLEVBQXdEQyxpQkFBeEQsRUFBMkU7QUFBQTs7QUFDekUsU0FBS0wsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0MsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0MsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQkEsV0FBbkI7QUFDQSxTQUFLQyxpQkFBTCxHQUF5QkEsaUJBQXpCO0FBQ0Q7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUtMLElBQVo7QUFDRDs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQyxLQUFaO0FBQ0Q7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0MsT0FBWjtBQUNEOzs7Z0NBRVc7QUFDVixhQUFPLEtBQUtDLE9BQVo7QUFDRDs7O3FDQUVnQjtBQUNmLGFBQU8sS0FBS0MsV0FBWjtBQUNEOzs7MkNBRXNCO0FBQ3JCLGFBQU8sS0FBS0MsaUJBQVo7QUFDRDs7O2tDQUVhO0FBQ1osVUFBTUMsWUFBYSxLQUFLTCxLQUFMLEdBQWEsQ0FBaEMsQ0FEWSxDQUN3Qjs7QUFFcEMsYUFBT0ssU0FBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFNQyxTQUFVLEtBQUtOLEtBQUwsS0FBZSxLQUFLRyxXQUFwQyxDQURTLENBQ3lDOztBQUVsRCxhQUFPRyxNQUFQO0FBQ0Q7Ozs2QkFFUU4sSyxFQUFPO0FBQ2QsV0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7OzsrQkFFVUMsTyxFQUFTO0FBQ2xCLFdBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNEOzs7K0JBRVVDLE8sRUFBUztBQUNsQixXQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDRDs7O21DQUVjQyxXLEVBQWE7QUFDMUIsV0FBS0EsV0FBTCxHQUFtQkEsV0FBbkI7QUFDRDs7O3lDQUVvQkMsaUIsRUFBbUI7QUFDdEMsV0FBS0EsaUJBQUwsR0FBMEJBLGlCQUExQjtBQUNEOzs7c0NBRWlCRCxXLEVBQWE7QUFDN0IsVUFBSUEsY0FBYyxLQUFLQSxXQUF2QixFQUFvQztBQUNsQyxhQUFLQSxXQUFMLEdBQW1CQSxXQUFuQjtBQUNEO0FBQ0Y7Ozs2QkFFZUosSSxFQUFNO0FBQ3BCLFVBQU1DLFFBQVEsQ0FBQyxDQUFmO0FBQUEsVUFDTUMsVUFBVSxLQURoQjtBQUFBLFVBRU1DLFVBQVUsS0FGaEI7QUFBQSxVQUdNQyxjQUFjLENBQUMsQ0FIckI7QUFBQSxVQUlNQyxvQkFBb0IsRUFKMUI7QUFBQSxVQUtNRyxTQUFTLElBQUlULE1BQUosQ0FBV0MsSUFBWCxFQUFpQkMsS0FBakIsRUFBd0JDLE9BQXhCLEVBQWlDQyxPQUFqQyxFQUEwQ0MsV0FBMUMsRUFBdURDLGlCQUF2RCxDQUxmOztBQU9BLGFBQU9HLE1BQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJYLE1BQWpCIiwiZmlsZSI6InZlcnRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgVmVydGV4IHtcbiAgY29uc3RydWN0b3IobmFtZSwgaW5kZXgsIHN0YWNrZWQsIHZpc2l0ZWQsIGxvd2VzdEluZGV4LCBzdWNjZXNzb3JWZXJ0aWNlcykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgIHRoaXMuc3RhY2tlZCA9IHN0YWNrZWQ7XG4gICAgdGhpcy52aXNpdGVkID0gdmlzaXRlZDtcbiAgICB0aGlzLmxvd2VzdEluZGV4ID0gbG93ZXN0SW5kZXg7XG4gICAgdGhpcy5zdWNjZXNzb3JWZXJ0aWNlcyA9IHN1Y2Nlc3NvclZlcnRpY2VzO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0SW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5kZXg7XG4gIH1cblxuICBpc1N0YWNrZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhY2tlZDtcbiAgfVxuXG4gIGlzVmlzaXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy52aXNpdGVkO1xuICB9XG5cbiAgZ2V0TG93ZXN0SW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMubG93ZXN0SW5kZXg7XG4gIH1cblxuICBnZXRTdWNjZXNzb3JWZXJ0aWNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5zdWNjZXNzb3JWZXJ0aWNlcztcbiAgfVxuICBcbiAgaXNVbmluZGV4ZWQoKSB7XG4gICAgY29uc3QgdW5pbmRleGVkID0gKHRoaXMuaW5kZXggPCAwKTsgLy8vXG4gICAgXG4gICAgcmV0dXJuIHVuaW5kZXhlZDtcbiAgfVxuICBcbiAgaXNMb3dlc3QoKSB7XG4gICAgY29uc3QgbG93ZXN0ID0gKHRoaXMuaW5kZXggPT09IHRoaXMubG93ZXN0SW5kZXgpOyAvLy9cbiAgICBcbiAgICByZXR1cm4gbG93ZXN0O1xuICB9XG5cbiAgc2V0SW5kZXgoaW5kZXgpIHtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gIH1cblxuICBzZXRTdGFja2VkKHN0YWNrZWQpIHtcbiAgICB0aGlzLnN0YWNrZWQgPSBzdGFja2VkO1xuICB9XG5cbiAgc2V0VmlzaXRlZCh2aXNpdGVkKSB7XG4gICAgdGhpcy52aXNpdGVkID0gdmlzaXRlZDtcbiAgfVxuICBcbiAgc2V0TG93ZXN0SW5kZXgobG93ZXN0SW5kZXgpIHtcbiAgICB0aGlzLmxvd2VzdEluZGV4ID0gbG93ZXN0SW5kZXg7XG4gIH1cblxuICBzZXRTdWNjZXNzb3JWZXJ0aWNlcyhzdWNjZXNzb3JWZXJ0aWNlcykge1xuICAgIHRoaXMuc3VjY2Vzc29yVmVydGljZXMgPSAgc3VjY2Vzc29yVmVydGljZXM7XG4gIH1cbiAgXG4gIHVwZGF0ZUxvd2VzdEluZGV4KGxvd2VzdEluZGV4KSB7XG4gICAgaWYgKGxvd2VzdEluZGV4IDwgdGhpcy5sb3dlc3RJbmRleCkge1xuICAgICAgdGhpcy5sb3dlc3RJbmRleCA9IGxvd2VzdEluZGV4O1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZShuYW1lKSB7XG4gICAgY29uc3QgaW5kZXggPSAtMSxcbiAgICAgICAgICBzdGFja2VkID0gZmFsc2UsXG4gICAgICAgICAgdmlzaXRlZCA9IGZhbHNlLFxuICAgICAgICAgIGxvd2VzdEluZGV4ID0gLTEsXG4gICAgICAgICAgc3VjY2Vzc29yVmVydGljZXMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXggPSBuZXcgVmVydGV4KG5hbWUsIGluZGV4LCBzdGFja2VkLCB2aXNpdGVkLCBsb3dlc3RJbmRleCwgc3VjY2Vzc29yVmVydGljZXMpO1xuXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZlcnRleDtcbiJdfQ==