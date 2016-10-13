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
      var str = '|',
          verticalBranchPosition = 0,
          verticalBranchParseTree = VerticalBranchParseTree.fromString(str, VerticalBranchParseTree, verticalBranchPosition),
          leftMarginWidth = Math.floor(width / 2),
          rightMarginWidth = width - leftMarginWidth - 1;

      verticalBranchParseTree.addLeftMargin(leftMarginWidth);
      verticalBranchParseTree.addRightMargin(rightMarginWidth);

      return verticalBranchParseTree;
    }
  }, {
    key: 'fromString',
    value: function fromString(str, Class, verticalBranchPosition) {
      Class = Class || ParseTree;

      var line = str,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wYXJzZVRyZWUvdmVydGljYWxCcmFuY2guanMiXSwibmFtZXMiOlsiUGFyc2VUcmVlIiwicmVxdWlyZSIsIlZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlIiwibGluZXMiLCJ2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uIiwibGVmdE1hcmdpbldpZHRoIiwid2lkdGgiLCJzdHIiLCJ2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSIsImZyb21TdHJpbmciLCJNYXRoIiwiZmxvb3IiLCJyaWdodE1hcmdpbldpZHRoIiwiYWRkTGVmdE1hcmdpbiIsImFkZFJpZ2h0TWFyZ2luIiwiQ2xhc3MiLCJsaW5lIiwiYXJncyIsIkZ1bmN0aW9uIiwicHJvdG90eXBlIiwiYmluZCIsImFwcGx5IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLFlBQVlDLFFBQVEsY0FBUixDQUFoQjs7SUFFTUMsdUI7OztBQUNKLG1DQUFZQyxLQUFaLEVBQW1CQyxzQkFBbkIsRUFBMkM7QUFBQTs7QUFBQSxrSkFDbkNELEtBRG1DOztBQUd6QyxVQUFLQyxzQkFBTCxHQUE4QkEsc0JBQTlCO0FBSHlDO0FBSTFDOzs7O2dEQUUyQjtBQUMxQixhQUFPLEtBQUtBLHNCQUFaO0FBQ0Q7OztrQ0FFYUMsZSxFQUFpQjtBQUM3QixzSkFBb0JBLGVBQXBCOztBQUVBLFdBQUtELHNCQUFMLElBQStCQyxlQUEvQixDQUg2QixDQUdtQjtBQUNqRDs7OzhCQUVnQkMsSyxFQUFPO0FBQ3RCLFVBQUlDLE1BQU0sR0FBVjtBQUFBLFVBQ0lILHlCQUF5QixDQUQ3QjtBQUFBLFVBRUlJLDBCQUEwQk4sd0JBQXdCTyxVQUF4QixDQUFtQ0YsR0FBbkMsRUFBd0NMLHVCQUF4QyxFQUFpRUUsc0JBQWpFLENBRjlCO0FBQUEsVUFHSUMsa0JBQWtCSyxLQUFLQyxLQUFMLENBQVdMLFFBQU0sQ0FBakIsQ0FIdEI7QUFBQSxVQUlJTSxtQkFBbUJOLFFBQVFELGVBQVIsR0FBMEIsQ0FKakQ7O0FBTUFHLDhCQUF3QkssYUFBeEIsQ0FBc0NSLGVBQXRDO0FBQ0FHLDhCQUF3Qk0sY0FBeEIsQ0FBdUNGLGdCQUF2Qzs7QUFFQSxhQUFPSix1QkFBUDtBQUNEOzs7K0JBRWlCRCxHLEVBQUtRLEssRUFBT1gsc0IsRUFBd0I7QUFDcERXLGNBQVFBLFNBQVNmLFNBQWpCOztBQUVBLFVBQUlnQixPQUFPVCxHQUFYO0FBQUEsVUFBZ0I7QUFDWkosY0FBUSxDQUFDYSxJQUFELENBRFo7QUFBQSxVQUVJQyxPQUFPLENBQUMsSUFBRCxFQUFPZCxLQUFQLEVBQWNDLHNCQUFkLENBRlg7QUFBQSxVQUdJSSwwQkFBMEIsS0FBS1UsU0FBU0MsU0FBVCxDQUFtQkMsSUFBbkIsQ0FBd0JDLEtBQXhCLENBQThCTixLQUE5QixFQUFxQ0UsSUFBckMsQ0FBTCxHQUg5QixDQUhvRCxDQU02Qjs7QUFFakYsYUFBT1QsdUJBQVA7QUFDRDs7OztFQXZDbUNSLFM7O0FBMEN0Q3NCLE9BQU9DLE9BQVAsR0FBaUJyQix1QkFBakIiLCJmaWxlIjoidmVydGljYWxCcmFuY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBQYXJzZVRyZWUgPSByZXF1aXJlKCcuLi9wYXJzZVRyZWUnKTtcblxuY2xhc3MgVmVydGljYWxCcmFuY2hQYXJzZVRyZWUgZXh0ZW5kcyBQYXJzZVRyZWUge1xuICBjb25zdHJ1Y3RvcihsaW5lcywgdmVydGljYWxCcmFuY2hQb3NpdGlvbikge1xuICAgIHN1cGVyKGxpbmVzKTtcbiAgICBcbiAgICB0aGlzLnZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSB2ZXJ0aWNhbEJyYW5jaFBvc2l0aW9uO1xuICB9XG4gIFxuICBnZXRWZXJ0aWNhbEJyYW5jaFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRpY2FsQnJhbmNoUG9zaXRpb247XG4gIH1cblxuICBhZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCkge1xuICAgIHN1cGVyLmFkZExlZnRNYXJnaW4obGVmdE1hcmdpbldpZHRoKTtcblxuICAgIHRoaXMudmVydGljYWxCcmFuY2hQb3NpdGlvbiArPSBsZWZ0TWFyZ2luV2lkdGg7IC8vL1xuICB9XG5cbiAgc3RhdGljIGZyb21XaWR0aCh3aWR0aCkge1xuICAgIHZhciBzdHIgPSAnfCcsXG4gICAgICAgIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24gPSAwLFxuICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IFZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlLmZyb21TdHJpbmcoc3RyLCBWZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSwgdmVydGljYWxCcmFuY2hQb3NpdGlvbiksXG4gICAgICAgIGxlZnRNYXJnaW5XaWR0aCA9IE1hdGguZmxvb3Iod2lkdGgvMiksXG4gICAgICAgIHJpZ2h0TWFyZ2luV2lkdGggPSB3aWR0aCAtIGxlZnRNYXJnaW5XaWR0aCAtIDE7XG5cbiAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZS5hZGRMZWZ0TWFyZ2luKGxlZnRNYXJnaW5XaWR0aCk7XG4gICAgdmVydGljYWxCcmFuY2hQYXJzZVRyZWUuYWRkUmlnaHRNYXJnaW4ocmlnaHRNYXJnaW5XaWR0aCk7XG5cbiAgICByZXR1cm4gdmVydGljYWxCcmFuY2hQYXJzZVRyZWU7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tU3RyaW5nKHN0ciwgQ2xhc3MsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb24pIHtcbiAgICBDbGFzcyA9IENsYXNzIHx8IFBhcnNlVHJlZTtcblxuICAgIHZhciBsaW5lID0gc3RyLCAvLy9cbiAgICAgICAgbGluZXMgPSBbbGluZV0sXG4gICAgICAgIGFyZ3MgPSBbbnVsbCwgbGluZXMsIHZlcnRpY2FsQnJhbmNoUG9zaXRpb25dLFxuICAgICAgICB2ZXJ0aWNhbEJyYW5jaFBhcnNlVHJlZSA9IG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoQ2xhc3MsIGFyZ3MpKTsgIC8vL1xuXG4gICAgcmV0dXJuIHZlcnRpY2FsQnJhbmNoUGFyc2VUcmVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVmVydGljYWxCcmFuY2hQYXJzZVRyZWU7XG4iXX0=