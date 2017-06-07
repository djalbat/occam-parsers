'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vertex = function () {
  function Vertex(name, successorVertices) {
    _classCallCheck(this, Vertex);

    this.name = name;
    this.successorVertices = successorVertices;

    this.index = undefined;
    this.lowLink = undefined;
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
    key: 'getLowLink',
    value: function getLowLink() {
      return this.lowLink;
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
    key: 'setLowLink',
    value: function setLowLink(lowLink) {
      this.lowLink = lowLink;
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
      this.lowLink = -1;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ncmFwaC92ZXJ0ZXguanMiXSwibmFtZXMiOlsiVmVydGV4IiwibmFtZSIsInN1Y2Nlc3NvclZlcnRpY2VzIiwiaW5kZXgiLCJ1bmRlZmluZWQiLCJsb3dMaW5rIiwib25TdGFjayIsInZpc2l0ZWQiLCJyZXNldCIsInZlcnRleCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsTTtBQUNKLGtCQUFZQyxJQUFaLEVBQWtCQyxpQkFBbEIsRUFBcUM7QUFBQTs7QUFDbkMsU0FBS0QsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsaUJBQUwsR0FBeUJBLGlCQUF6Qjs7QUFFQSxTQUFLQyxLQUFMLEdBQWFDLFNBQWI7QUFDQSxTQUFLQyxPQUFMLEdBQWVELFNBQWY7QUFDQSxTQUFLRSxPQUFMLEdBQWVGLFNBQWY7QUFDQSxTQUFLRyxPQUFMLEdBQWVILFNBQWY7O0FBRUEsU0FBS0ksS0FBTCxHQVRtQyxDQVNyQjtBQUNmOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLUCxJQUFaO0FBQ0Q7OzsyQ0FFc0I7QUFDckIsYUFBTyxLQUFLQyxpQkFBWjtBQUNEOzs7K0JBRVU7QUFDVCxhQUFPLEtBQUtDLEtBQVo7QUFDRDs7O2lDQUVZO0FBQ1gsYUFBTyxLQUFLRSxPQUFaO0FBQ0Q7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0MsT0FBWjtBQUNEOzs7Z0NBRVc7QUFDVixhQUFPLEtBQUtDLE9BQVo7QUFDRDs7O3lDQUVvQkwsaUIsRUFBbUI7QUFDdEMsV0FBS0EsaUJBQUwsR0FBMEJBLGlCQUExQjtBQUNEOzs7NkJBRVFDLEssRUFBTztBQUNkLFdBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7K0JBRVVFLE8sRUFBUztBQUNsQixXQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDRDs7OytCQUVVQyxPLEVBQVM7QUFDbEIsV0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0Q7OzsrQkFFVUMsTyxFQUFTO0FBQ2xCLFdBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNEOzs7NEJBRU87QUFDTixXQUFLSixLQUFMLEdBQWEsQ0FBQyxDQUFkO0FBQ0EsV0FBS0UsT0FBTCxHQUFlLENBQUMsQ0FBaEI7QUFDQSxXQUFLQyxPQUFMLEdBQWUsS0FBZjtBQUNBLFdBQUtDLE9BQUwsR0FBZSxLQUFmO0FBQ0Q7Ozs2QkFFZU4sSSxFQUFNO0FBQ3BCLFVBQU1DLG9CQUFvQixFQUExQjtBQUFBLFVBQ01PLFNBQVMsSUFBSVQsTUFBSixDQUFXQyxJQUFYLEVBQWlCQyxpQkFBakIsQ0FEZjs7QUFHQSxhQUFPTyxNQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCWCxNQUFqQiIsImZpbGUiOiJ2ZXJ0ZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFZlcnRleCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHN1Y2Nlc3NvclZlcnRpY2VzKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnN1Y2Nlc3NvclZlcnRpY2VzID0gc3VjY2Vzc29yVmVydGljZXM7XG5cbiAgICB0aGlzLmluZGV4ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubG93TGluayA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm9uU3RhY2sgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy52aXNpdGVkID0gdW5kZWZpbmVkO1xuXG4gICAgdGhpcy5yZXNldCgpOyAvLy9cbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFN1Y2Nlc3NvclZlcnRpY2VzKCkge1xuICAgIHJldHVybiB0aGlzLnN1Y2Nlc3NvclZlcnRpY2VzO1xuICB9XG5cbiAgZ2V0SW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5kZXg7XG4gIH1cblxuICBnZXRMb3dMaW5rKCkge1xuICAgIHJldHVybiB0aGlzLmxvd0xpbms7XG4gIH1cblxuICBpc09uU3RhY2soKSB7XG4gICAgcmV0dXJuIHRoaXMub25TdGFjaztcbiAgfVxuXG4gIGlzVmlzaXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy52aXNpdGVkO1xuICB9XG5cbiAgc2V0U3VjY2Vzc29yVmVydGljZXMoc3VjY2Vzc29yVmVydGljZXMpIHtcbiAgICB0aGlzLnN1Y2Nlc3NvclZlcnRpY2VzID0gIHN1Y2Nlc3NvclZlcnRpY2VzO1xuICB9XG5cbiAgc2V0SW5kZXgoaW5kZXgpIHtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gIH1cblxuICBzZXRMb3dMaW5rKGxvd0xpbmspIHtcbiAgICB0aGlzLmxvd0xpbmsgPSBsb3dMaW5rO1xuICB9XG5cbiAgc2V0T25TdGFjayhvblN0YWNrKSB7XG4gICAgdGhpcy5vblN0YWNrID0gb25TdGFjaztcbiAgfVxuXG4gIHNldFZpc2l0ZWQodmlzaXRlZCkge1xuICAgIHRoaXMudmlzaXRlZCA9IHZpc2l0ZWQ7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmluZGV4ID0gLTE7XG4gICAgdGhpcy5sb3dMaW5rID0gLTE7XG4gICAgdGhpcy5vblN0YWNrID0gZmFsc2U7XG4gICAgdGhpcy52aXNpdGVkID0gZmFsc2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWUobmFtZSkge1xuICAgIGNvbnN0IHN1Y2Nlc3NvclZlcnRpY2VzID0gW10sXG4gICAgICAgICAgdmVydGV4ID0gbmV3IFZlcnRleChuYW1lLCBzdWNjZXNzb3JWZXJ0aWNlcyk7XG5cbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVmVydGV4OyJdfQ==