'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Production = require('../production'),
    OneOrMorePartsNode = require('../node/oneOrMoreParts'),
    OneOrMorePartsDefinition = require('../definition/oneOrMoreParts');

var OneOrMorePartsProduction = function (_Production) {
  _inherits(OneOrMorePartsProduction, _Production);

  function OneOrMorePartsProduction() {
    _classCallCheck(this, OneOrMorePartsProduction);

    var oneOrMorePartsDefinition = new OneOrMorePartsDefinition(),
        name = 'oneOrMoreParts',
        oneOrMoreParts = [oneOrMorePartsDefinition],
        Node = OneOrMorePartsNode;

    return _possibleConstructorReturn(this, (OneOrMorePartsProduction.__proto__ || Object.getPrototypeOf(OneOrMorePartsProduction)).call(this, name, oneOrMoreParts, Node));
  }

  return OneOrMorePartsProduction;
}(Production);

module.exports = OneOrMorePartsProduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcHJvZHVjdGlvbi9vbmVPck1vcmVQYXJ0cy5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0aW9uIiwicmVxdWlyZSIsIk9uZU9yTW9yZVBhcnRzTm9kZSIsIk9uZU9yTW9yZVBhcnRzRGVmaW5pdGlvbiIsIk9uZU9yTW9yZVBhcnRzUHJvZHVjdGlvbiIsIm9uZU9yTW9yZVBhcnRzRGVmaW5pdGlvbiIsIm5hbWUiLCJvbmVPck1vcmVQYXJ0cyIsIk5vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNQyxxQkFBcUJELFFBQVEsd0JBQVIsQ0FEM0I7QUFBQSxJQUVNRSwyQkFBMkJGLFFBQVEsOEJBQVIsQ0FGakM7O0lBSU1HLHdCOzs7QUFDSixzQ0FBYztBQUFBOztBQUNaLFFBQU1DLDJCQUEyQixJQUFJRix3QkFBSixFQUFqQztBQUFBLFFBQ01HLE9BQU8sZ0JBRGI7QUFBQSxRQUVNQyxpQkFBaUIsQ0FDZkYsd0JBRGUsQ0FGdkI7QUFBQSxRQUtNRyxPQUFPTixrQkFMYjs7QUFEWSwrSUFRTkksSUFSTSxFQVFBQyxjQVJBLEVBUWdCQyxJQVJoQjtBQVNiOzs7RUFWb0NSLFU7O0FBYXZDUyxPQUFPQyxPQUFQLEdBQWlCTix3QkFBakIiLCJmaWxlIjoib25lT3JNb3JlUGFydHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFByb2R1Y3Rpb24gPSByZXF1aXJlKCcuLi9wcm9kdWN0aW9uJyksXG4gICAgICBPbmVPck1vcmVQYXJ0c05vZGUgPSByZXF1aXJlKCcuLi9ub2RlL29uZU9yTW9yZVBhcnRzJyksXG4gICAgICBPbmVPck1vcmVQYXJ0c0RlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL29uZU9yTW9yZVBhcnRzJyk7XG5cbmNsYXNzIE9uZU9yTW9yZVBhcnRzUHJvZHVjdGlvbiBleHRlbmRzIFByb2R1Y3Rpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBvbmVPck1vcmVQYXJ0c0RlZmluaXRpb24gPSBuZXcgT25lT3JNb3JlUGFydHNEZWZpbml0aW9uKCksXG4gICAgICAgICAgbmFtZSA9ICdvbmVPck1vcmVQYXJ0cycsXG4gICAgICAgICAgb25lT3JNb3JlUGFydHMgPSBbXG4gICAgICAgICAgICBvbmVPck1vcmVQYXJ0c0RlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBPbmVPck1vcmVQYXJ0c05vZGU7XG5cbiAgICBzdXBlcihuYW1lLCBvbmVPck1vcmVQYXJ0cywgTm9kZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9uZU9yTW9yZVBhcnRzUHJvZHVjdGlvbjtcbiJdfQ==