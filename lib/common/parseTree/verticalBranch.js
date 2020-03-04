'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ParseTree = require('../parseTree');

var VerticalBranchParseTree = /*#__PURE__*/function (_ParseTree) {
  _inherits(VerticalBranchParseTree, _ParseTree);

  function VerticalBranchParseTree(lines, verticalBranchPosition) {
    var _this;

    _classCallCheck(this, VerticalBranchParseTree);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(VerticalBranchParseTree).call(this, lines));
    _this.verticalBranchPosition = verticalBranchPosition;
    return _this;
  }

  _createClass(VerticalBranchParseTree, [{
    key: "getVerticalBranchPosition",
    value: function getVerticalBranchPosition() {
      return this.verticalBranchPosition;
    }
  }, {
    key: "addLeftMargin",
    value: function addLeftMargin(leftMarginWidth) {
      _get(_getPrototypeOf(VerticalBranchParseTree.prototype), "addLeftMargin", this).call(this, leftMarginWidth);

      this.verticalBranchPosition += leftMarginWidth; ///
    }
  }], [{
    key: "fromWidth",
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
    key: "fromDepthAndVerticalBranchPosition",
    value: function fromDepthAndVerticalBranchPosition(Class, depth, verticalBranchPosition) {
      var lines = linesFromDepth(depth),
          args = [null, lines, verticalBranchPosition],
          verticalBranchParseTree = new (Function.prototype.bind.apply(Class, args))(); ///

      return verticalBranchParseTree;
    }
  }, {
    key: "fromStringAndVerticalBranchPosition",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcnRpY2FsQnJhbmNoLmpzIl0sIm5hbWVzIjpbIlBhcnNlVHJlZSIsInJlcXVpcmUiLCJWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsImxpbmVzIiwidmVydGljYWxCcmFuY2hQb3NpdGlvbiIsImxlZnRNYXJnaW5XaWR0aCIsIndpZHRoIiwic3RyaW5nIiwidmVydGljYWxCcmFuY2hQYXJzZVRyZWUiLCJmcm9tU3RyaW5nQW5kVmVydGljYWxCcmFuY2hQb3NpdGlvbiIsIk1hdGgiLCJmbG9vciIsInJpZ2h0TWFyZ2luV2lkdGgiLCJhZGRMZWZ0TWFyZ2luIiwiYWRkUmlnaHRNYXJnaW4iLCJDbGFzcyIsImRlcHRoIiwibGluZXNGcm9tRGVwdGgiLCJhcmdzIiwiRnVuY3Rpb24iLCJwcm90b3R5cGUiLCJiaW5kIiwiYXBwbHkiLCJ1bmRlZmluZWQiLCJsaW5lIiwibW9kdWxlIiwiZXhwb3J0cyIsImluZGV4Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxPQUFPLENBQUMsY0FBRCxDQUF6Qjs7SUFFTUMsdUI7OztBQUNKLG1DQUFZQyxLQUFaLEVBQW1CQyxzQkFBbkIsRUFBMkM7QUFBQTs7QUFBQTs7QUFDekMsaUdBQU1ELEtBQU47QUFFQSxVQUFLQyxzQkFBTCxHQUE4QkEsc0JBQTlCO0FBSHlDO0FBSTFDOzs7O2dEQUUyQjtBQUMxQixhQUFPLEtBQUtBLHNCQUFaO0FBQ0Q7OztrQ0FFYUMsZSxFQUFpQjtBQUM3QixpR0FBb0JBLGVBQXBCOztBQUVBLFdBQUtELHNCQUFMLElBQStCQyxlQUEvQixDQUg2QixDQUdtQjtBQUNqRDs7OzhCQUVnQkMsSyxFQUFPO0FBQ3RCLFVBQU1DLE1BQU0sR0FBRyxHQUFmO0FBQUEsVUFDTUgsc0JBQXNCLEdBQUcsQ0FEL0I7QUFBQSxVQUVNSSx1QkFBdUIsR0FBR04sdUJBQXVCLENBQUNPLG1DQUF4QixDQUE0RFAsdUJBQTVELEVBQXFGSyxNQUFyRixFQUE2Rkgsc0JBQTdGLENBRmhDO0FBQUEsVUFHTUMsZUFBZSxHQUFHSyxJQUFJLENBQUNDLEtBQUwsQ0FBV0wsS0FBSyxHQUFDLENBQWpCLENBSHhCO0FBQUEsVUFJTU0sZ0JBQWdCLEdBQUdOLEtBQUssR0FBR0QsZUFBUixHQUEwQixDQUpuRDtBQU1BRyxNQUFBQSx1QkFBdUIsQ0FBQ0ssYUFBeEIsQ0FBc0NSLGVBQXRDO0FBQ0FHLE1BQUFBLHVCQUF1QixDQUFDTSxjQUF4QixDQUF1Q0YsZ0JBQXZDO0FBRUEsYUFBT0osdUJBQVA7QUFDRDs7O3VEQUV5Q08sSyxFQUFPQyxLLEVBQU9aLHNCLEVBQXdCO0FBQzlFLFVBQU1ELEtBQUssR0FBR2MsY0FBYyxDQUFDRCxLQUFELENBQTVCO0FBQUEsVUFDTUUsSUFBSSxHQUFHLENBQUMsSUFBRCxFQUFPZixLQUFQLEVBQWNDLHNCQUFkLENBRGI7QUFBQSxVQUVNSSx1QkFBdUIsR0FBRyxLQUFLVyxRQUFRLENBQUNDLFNBQVQsQ0FBbUJDLElBQW5CLENBQXdCQyxLQUF4QixDQUE4QlAsS0FBOUIsRUFBcUNHLElBQXJDLENBQUwsR0FGaEMsQ0FEOEUsQ0FHSzs7QUFFbkYsYUFBT1YsdUJBQVA7QUFDRDs7O3dEQUUwQ08sSyxFQUFPUixNLEVBQVFILHNCLEVBQXdCO0FBQ2hGLFVBQUlBLHNCQUFzQixLQUFLbUIsU0FBL0IsRUFBMEM7QUFDeENuQixRQUFBQSxzQkFBc0IsR0FBR0csTUFBekI7QUFDQUEsUUFBQUEsTUFBTSxHQUFHUSxLQUFUO0FBQ0FBLFFBQUFBLEtBQUssR0FBR2YsU0FBUjtBQUNEOztBQUVELFVBQU13QixJQUFJLEdBQUdqQixNQUFiO0FBQUEsVUFBcUI7QUFDZkosTUFBQUEsS0FBSyxHQUFHLENBQUNxQixJQUFELENBRGQ7QUFBQSxVQUVNTixJQUFJLEdBQUcsQ0FBQyxJQUFELEVBQU9mLEtBQVAsRUFBY0Msc0JBQWQsQ0FGYjtBQUFBLFVBR01JLHVCQUF1QixHQUFHLEtBQUtXLFFBQVEsQ0FBQ0MsU0FBVCxDQUFtQkMsSUFBbkIsQ0FBd0JDLEtBQXhCLENBQThCUCxLQUE5QixFQUFxQ0csSUFBckMsQ0FBTCxHQUhoQyxDQVBnRixDQVVHOztBQUVuRixhQUFPVix1QkFBUDtBQUNEOzs7O0VBbkRtQ1IsUzs7QUFzRHRDeUIsTUFBTSxDQUFDQyxPQUFQLEdBQWlCeEIsdUJBQWpCOztBQUVBLFNBQVNlLGNBQVQsQ0FBd0JELEtBQXhCLEVBQStCO0FBQzdCLE1BQU1iLEtBQUssR0FBRyxFQUFkO0FBRUEsTUFBSXdCLEtBQUssR0FBRyxDQUFaOztBQUVBLFNBQU9BLEtBQUssR0FBR1gsS0FBZixFQUFzQjtBQUNwQmIsSUFBQUEsS0FBSyxDQUFDd0IsS0FBSyxFQUFOLENBQUwsR0FBaUIsRUFBakI7QUFDRDs7QUFFRCxTQUFPeEIsS0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBQYXJzZVRyZWUgPSByZXF1aXJlKCcuLi9wYXJzZVRyZWUnKTtcblxuY2xhc3MgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUgZXh0ZW5kcyBQYXJzZVRyZWUge1xuICBjb25zdHJ1Y3RvcihsaW5lcywgdmVydGljYWxCcmFuY2hQb3NpdGlvbikge1xuICAgIHN1cGVyKGxpbmVzKTtcbiAgICBcbiAgICB0aGlzLnZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uO1xuICB9XG4gIFxuICBnZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRpY2FsQnJhbmNoUG9zaXRpb247XG4gIH1cblxuICBhZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCkge1xuICAgIHN1cGVyLmFkZExlZnRNYXJnaW4obGVmdE1hcmdpbldpZHRoKTtcblxuICAgIHRoaXMudmVydGljYWxCcmFuY2hQb3NpdGlvbiArPSBsZWZ0TWFyZ2luV2lkdGg7IC8vL1xuICB9XG5cbiAgc3RhdGljIGZyb21XaWR0aCh3aWR0aCkge1xuICAgIGNvbnN0IHN0cmluZyA9ICd8JyxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID0gMCxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21TdHJpbmdBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLCBzdHJpbmcsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pLFxuICAgICAgICAgIGxlZnRNYXJnaW5XaWR0aCA9IE1hdGguZmxvb3Iod2lkdGgvMiksXG4gICAgICAgICAgcmlnaHRNYXJnaW5XaWR0aCA9IHdpZHRoIC0gbGVmdE1hcmdpbldpZHRoIC0gMTtcblxuICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmFkZExlZnRNYXJnaW4obGVmdE1hcmdpbldpZHRoKTtcbiAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5hZGRSaWdodE1hcmdpbihyaWdodE1hcmdpbldpZHRoKTtcblxuICAgIHJldHVybiB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGVwdGhBbmRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKENsYXNzLCBkZXB0aCwgdmVydGljYWxCcmFuY2hQb3NpdGlvbikge1xuICAgIGNvbnN0IGxpbmVzID0gbGluZXNGcm9tRGVwdGgoZGVwdGgpLFxuICAgICAgICAgIGFyZ3MgPSBbbnVsbCwgbGluZXMsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb25dLFxuICAgICAgICAgIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlID0gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShDbGFzcywgYXJncykpOyAgLy8vXG5cbiAgICByZXR1cm4gdmVydGljYWxCcmFuY2hQYXJzZVRyZWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0cmluZ0FuZFZlcnRpY2FsQnJhbmNoUG9zaXRpb24oQ2xhc3MsIHN0cmluZywgdmVydGljYWxCcmFuY2hQb3NpdGlvbikge1xuICAgIGlmICh2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSBzdHJpbmc7XG4gICAgICBzdHJpbmcgPSBDbGFzcztcbiAgICAgIENsYXNzID0gUGFyc2VUcmVlO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBsaW5lID0gc3RyaW5nLCAvLy9cbiAgICAgICAgICBsaW5lcyA9IFtsaW5lXSxcbiAgICAgICAgICBhcmdzID0gW251bGwsIGxpbmVzLCB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uXSxcbiAgICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoQ2xhc3MsIGFyZ3MpKTsgIC8vL1xuXG4gICAgcmV0dXJuIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWU7XG5cbmZ1bmN0aW9uIGxpbmVzRnJvbURlcHRoKGRlcHRoKSB7XG4gIGNvbnN0IGxpbmVzID0gW107XG5cbiAgbGV0IGluZGV4ID0gMDtcblxuICB3aGlsZSAoaW5kZXggPCBkZXB0aCkge1xuICAgIGxpbmVzW2luZGV4KytdID0gJyc7XG4gIH1cblxuICByZXR1cm4gbGluZXM7XG59XG4iXX0=