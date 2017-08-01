'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ParseTree = require('../parseTree');

var VerticalBranchParseTree = function (_ParseTree) {
  _inherits(VerticalBranchParseTree, _ParseTree);

  function VerticalBranchParseTree(lines, verticalBranchPosition) {
    _classCallCheck(this, VerticalBranchParseTree);

    var _this = _possibleConstructorReturn(this, (VerticalBranchParseTree.__proto__ || Object.getPrototypeOf(VerticalBranchParseTree)).call(this, lines));

    _this.verticalBranchPosition = verticalBranchPosition;
    return _this;
  }

  _createClass(VerticalBranchParseTree, [{
    key: 'getVerticalBranchPosition',
    value: function getVerticalBranchPosition() {
      return this.verticalBranchPosition;
    }
  }, {
    key: 'addLeftMargin',
    value: function addLeftMargin(leftMarginWidth) {
      _get(VerticalBranchParseTree.prototype.__proto__ || Object.getPrototypeOf(VerticalBranchParseTree.prototype), 'addLeftMargin', this).call(this, leftMarginWidth);

      this.verticalBranchPosition += leftMarginWidth; ///
    }
  }], [{
    key: 'fromWidth',
    value: function fromWidth(width) {
      var string = '|',
          verticalBranchPosition = 0,
          verticalBranchParseTree = VerticalBranchParseTree.fromStringAndVerticalBranchPosition(VerticalBranchParseTree, string, verticalBranchPosition),
          leftMarginWidth = Math.floor(width / 2),
          rightMarginWidth = width - leftMarginWidth - 1;

      verticalBranchParseTree.addLeftMargin(leftMarginWidth);
      verticalBranchParseTree.addRightMargin(rightMarginWidth);

      return verticalBranchParseTree;
    }
  }, {
    key: 'fromDepthAndVerticalBranchPosition',
    value: function fromDepthAndVerticalBranchPosition(Class, depth, verticalBranchPosition) {
      var lines = linesFromDepth(depth),
          args = [null, lines, verticalBranchPosition],
          verticalBranchParseTree = new (Function.prototype.bind.apply(Class, args))(); ///

      return verticalBranchParseTree;
    }
  }, {
    key: 'fromStringAndVerticalBranchPosition',
    value: function fromStringAndVerticalBranchPosition(Class, string, verticalBranchPosition) {
      if (verticalBranchPosition === undefined) {
        verticalBranchPosition = string;
        string = Class;
        Class = ParseTree;
      }

      var line = string,
          ///
      lines = [line],
          args = [null, lines, verticalBranchPosition],
          verticalBranchParseTree = new (Function.prototype.bind.apply(Class, args))(); ///

      return verticalBranchParseTree;
    }
  }]);

  return VerticalBranchParseTree;
}(ParseTree);

module.exports = VerticalBranchParseTree;

function linesFromDepth(depth) {
  var lines = [];

  var index = 0;

  while (index < depth) {
    lines[index++] = '';
  }

  return lines;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vcGFyc2VUcmVlL3ZlcnRpY2FsQnJhbmNoLmpzIl0sIm5hbWVzIjpbIlBhcnNlVHJlZSIsInJlcXVpcmUiLCJWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsImxpbmVzIiwidmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImxlZnRNYXJnaW5XaWR0aCIsIndpZHRoIiwic3RyaW5nIiwidmVydGljYWxCcmFuY2hQYXJzZVRyZWUiLCJmcm9tU3RyaW5nQW5kVmVydGljYWxCcmFuY2hQb3NpdGlvbiIsIk1hdGgiLCJmbG9vciIsInJpZ2h0TWFyZ2luV2lkdGgiLCJhZGRMZWZ0TWFyZ2luIiwiYWRkUmlnaHRNYXJnaW4iLCJDbGFzcyIsImRlcHRoIiwibGluZXNGcm9tRGVwdGgiLCJhcmdzIiwiRnVuY3Rpb24iLCJwcm90b3R5cGUiLCJiaW5kIiwiYXBwbHkiLCJ1bmRlZmluZWQiLCJsaW5lIiwibW9kdWxlIiwiZXhwb3J0cyIsImluZGV4Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxjQUFSLENBQWxCOztJQUVNQyx1Qjs7O0FBQ0osbUNBQVlDLEtBQVosRUFBbUJDLHNCQUFuQixFQUEyQztBQUFBOztBQUFBLGtKQUNuQ0QsS0FEbUM7O0FBR3pDLFVBQUtDLHNCQUFMLEdBQThCQSxzQkFBOUI7QUFIeUM7QUFJMUM7Ozs7Z0RBRTJCO0FBQzFCLGFBQU8sS0FBS0Esc0JBQVo7QUFDRDs7O2tDQUVhQyxlLEVBQWlCO0FBQzdCLHNKQUFvQkEsZUFBcEI7O0FBRUEsV0FBS0Qsc0JBQUwsSUFBK0JDLGVBQS9CLENBSDZCLENBR21CO0FBQ2pEOzs7OEJBRWdCQyxLLEVBQU87QUFDdEIsVUFBTUMsU0FBUyxHQUFmO0FBQUEsVUFDTUgseUJBQXlCLENBRC9CO0FBQUEsVUFFTUksMEJBQTBCTix3QkFBd0JPLG1DQUF4QixDQUE0RFAsdUJBQTVELEVBQXFGSyxNQUFyRixFQUE2Rkgsc0JBQTdGLENBRmhDO0FBQUEsVUFHTUMsa0JBQWtCSyxLQUFLQyxLQUFMLENBQVdMLFFBQU0sQ0FBakIsQ0FIeEI7QUFBQSxVQUlNTSxtQkFBbUJOLFFBQVFELGVBQVIsR0FBMEIsQ0FKbkQ7O0FBTUFHLDhCQUF3QkssYUFBeEIsQ0FBc0NSLGVBQXRDO0FBQ0FHLDhCQUF3Qk0sY0FBeEIsQ0FBdUNGLGdCQUF2Qzs7QUFFQSxhQUFPSix1QkFBUDtBQUNEOzs7dURBRXlDTyxLLEVBQU9DLEssRUFBT1osc0IsRUFBd0I7QUFDOUUsVUFBTUQsUUFBUWMsZUFBZUQsS0FBZixDQUFkO0FBQUEsVUFDTUUsT0FBTyxDQUFDLElBQUQsRUFBT2YsS0FBUCxFQUFjQyxzQkFBZCxDQURiO0FBQUEsVUFFTUksMEJBQTBCLEtBQUtXLFNBQVNDLFNBQVQsQ0FBbUJDLElBQW5CLENBQXdCQyxLQUF4QixDQUE4QlAsS0FBOUIsRUFBcUNHLElBQXJDLENBQUwsR0FGaEMsQ0FEOEUsQ0FHSzs7QUFFbkYsYUFBT1YsdUJBQVA7QUFDRDs7O3dEQUUwQ08sSyxFQUFPUixNLEVBQVFILHNCLEVBQXdCO0FBQ2hGLFVBQUlBLDJCQUEyQm1CLFNBQS9CLEVBQTBDO0FBQ3hDbkIsaUNBQXlCRyxNQUF6QjtBQUNBQSxpQkFBU1EsS0FBVDtBQUNBQSxnQkFBUWYsU0FBUjtBQUNEOztBQUVELFVBQU13QixPQUFPakIsTUFBYjtBQUFBLFVBQXFCO0FBQ2ZKLGNBQVEsQ0FBQ3FCLElBQUQsQ0FEZDtBQUFBLFVBRU1OLE9BQU8sQ0FBQyxJQUFELEVBQU9mLEtBQVAsRUFBY0Msc0JBQWQsQ0FGYjtBQUFBLFVBR01JLDBCQUEwQixLQUFLVyxTQUFTQyxTQUFULENBQW1CQyxJQUFuQixDQUF3QkMsS0FBeEIsQ0FBOEJQLEtBQTlCLEVBQXFDRyxJQUFyQyxDQUFMLEdBSGhDLENBUGdGLENBVUc7O0FBRW5GLGFBQU9WLHVCQUFQO0FBQ0Q7Ozs7RUFuRG1DUixTOztBQXNEdEN5QixPQUFPQyxPQUFQLEdBQWlCeEIsdUJBQWpCOztBQUVBLFNBQVNlLGNBQVQsQ0FBd0JELEtBQXhCLEVBQStCO0FBQzdCLE1BQU1iLFFBQVEsRUFBZDs7QUFFQSxNQUFJd0IsUUFBUSxDQUFaOztBQUVBLFNBQU9BLFFBQVFYLEtBQWYsRUFBc0I7QUFDcEJiLFVBQU13QixPQUFOLElBQWlCLEVBQWpCO0FBQ0Q7O0FBRUQsU0FBT3hCLEtBQVA7QUFDRCIsImZpbGUiOiJ2ZXJ0aWNhbEJyYW5jaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUGFyc2VUcmVlID0gcmVxdWlyZSgnLi4vcGFyc2VUcmVlJyk7XG5cbmNsYXNzIFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIGV4dGVuZHMgUGFyc2VUcmVlIHtcbiAgY29uc3RydWN0b3IobGluZXMsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pIHtcbiAgICBzdXBlcihsaW5lcyk7XG4gICAgXG4gICAgdGhpcy52ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gdmVydGljYWxCcmFuY2hQb3NpdGlvbjtcbiAgfVxuICBcbiAgZ2V0VmVydGljYWxCcmFuY2hQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uO1xuICB9XG5cbiAgYWRkTGVmdE1hcmdpbihsZWZ0TWFyZ2luV2lkdGgpIHtcbiAgICBzdXBlci5hZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCk7XG5cbiAgICB0aGlzLnZlcnRpY2FsQnJhbmNoUG9zaXRpb24gKz0gbGVmdE1hcmdpbldpZHRoOyAvLy9cbiAgfVxuXG4gIHN0YXRpYyBmcm9tV2lkdGgod2lkdGgpIHtcbiAgICBjb25zdCBzdHJpbmcgPSAnfCcsXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQb3NpdGlvbiA9IDAsXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5mcm9tU3RyaW5nQW5kVmVydGljYWxCcmFuY2hQb3NpdGlvbihWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSwgc3RyaW5nLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKSxcbiAgICAgICAgICBsZWZ0TWFyZ2luV2lkdGggPSBNYXRoLmZsb29yKHdpZHRoLzIpLFxuICAgICAgICAgIHJpZ2h0TWFyZ2luV2lkdGggPSB3aWR0aCAtIGxlZnRNYXJnaW5XaWR0aCAtIDE7XG5cbiAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5hZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCk7XG4gICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCk7XG5cbiAgICByZXR1cm4gdmVydGljYWxCcmFuY2hQYXJzZVRyZWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbURlcHRoQW5kVmVydGljYWxCcmFuY2hQb3NpdGlvbihDbGFzcywgZGVwdGgsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pIHtcbiAgICBjb25zdCBsaW5lcyA9IGxpbmVzRnJvbURlcHRoKGRlcHRoKSxcbiAgICAgICAgICBhcmdzID0gW251bGwsIGxpbmVzLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uXSxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoQ2xhc3MsIGFyZ3MpKTsgIC8vL1xuXG4gICAgcmV0dXJuIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdHJpbmdBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKENsYXNzLCBzdHJpbmcsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pIHtcbiAgICBpZiAodmVydGljYWxCcmFuY2hQb3NpdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gc3RyaW5nO1xuICAgICAgc3RyaW5nID0gQ2xhc3M7XG4gICAgICBDbGFzcyA9IFBhcnNlVHJlZTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgbGluZSA9IHN0cmluZywgLy8vXG4gICAgICAgICAgbGluZXMgPSBbbGluZV0sXG4gICAgICAgICAgYXJncyA9IFtudWxsLCBsaW5lcywgdmVydGljYWxCcmFuY2hQb3NpdGlvbl0sXG4gICAgICAgICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUgPSBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KENsYXNzLCBhcmdzKSk7ICAvLy9cblxuICAgIHJldHVybiB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlO1xuXG5mdW5jdGlvbiBsaW5lc0Zyb21EZXB0aChkZXB0aCkge1xuICBjb25zdCBsaW5lcyA9IFtdO1xuXG4gIGxldCBpbmRleCA9IDA7XG5cbiAgd2hpbGUgKGluZGV4IDwgZGVwdGgpIHtcbiAgICBsaW5lc1tpbmRleCsrXSA9ICcnO1xuICB9XG5cbiAgcmV0dXJuIGxpbmVzO1xufVxuIl19