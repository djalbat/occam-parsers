'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var SequenceOfPartsDefinition = require('../definition/sequenceOfParts');

var ExtendedBNFLexer = lexers.ExtendedBNFLexer,
    specialSymbols = ExtendedBNFLexer.specialSymbols,
    plus = specialSymbols.plus;

var OneOrMorePartsDefinition = function (_SequenceOfPartsDefin) {
  _inherits(OneOrMorePartsDefinition, _SequenceOfPartsDefin);

  function OneOrMorePartsDefinition() {
    _classCallCheck(this, OneOrMorePartsDefinition);

    var plusTerminalSymbolContent = plus;

    return _possibleConstructorReturn(this, (OneOrMorePartsDefinition.__proto__ || Object.getPrototypeOf(OneOrMorePartsDefinition)).call(this, plusTerminalSymbolContent));
  }

  return OneOrMorePartsDefinition;
}(SequenceOfPartsDefinition);

module.exports = OneOrMorePartsDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9kZWZpbml0aW9uL29uZU9yTW9yZVBhcnRzLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJTZXF1ZW5jZU9mUGFydHNEZWZpbml0aW9uIiwiRXh0ZW5kZWRCTkZMZXhlciIsInNwZWNpYWxTeW1ib2xzIiwicGx1cyIsIk9uZU9yTW9yZVBhcnRzRGVmaW5pdGlvbiIsInBsdXNUZXJtaW5hbFN5bWJvbENvbnRlbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyw0QkFBNEJELFFBQVEsK0JBQVIsQ0FBbEM7O0FBRU0sSUFBRUUsZ0JBQUYsR0FBdUJILE1BQXZCLENBQUVHLGdCQUFGO0FBQUEsSUFDRUMsY0FERixHQUNxQkQsZ0JBRHJCLENBQ0VDLGNBREY7QUFBQSxJQUVFQyxJQUZGLEdBRVdELGNBRlgsQ0FFRUMsSUFGRjs7SUFJQUMsd0I7OztBQUNKLHNDQUFjO0FBQUE7O0FBQ1osUUFBTUMsNEJBQTRCRixJQUFsQzs7QUFEWSwrSUFHTkUseUJBSE07QUFJYjs7O0VBTG9DTCx5Qjs7QUFRdkNNLE9BQU9DLE9BQVAsR0FBaUJILHdCQUFqQiIsImZpbGUiOiJvbmVPck1vcmVQYXJ0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IFNlcXVlbmNlT2ZQYXJ0c0RlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL3NlcXVlbmNlT2ZQYXJ0cycpO1xuXG5jb25zdCB7IEV4dGVuZGVkQk5GTGV4ZXIgfSA9IGxleGVycyxcbiAgICAgIHsgc3BlY2lhbFN5bWJvbHMgfSA9IEV4dGVuZGVkQk5GTGV4ZXIsXG4gICAgICB7IHBsdXMgfSA9IHNwZWNpYWxTeW1ib2xzO1xuXG5jbGFzcyBPbmVPck1vcmVQYXJ0c0RlZmluaXRpb24gZXh0ZW5kcyBTZXF1ZW5jZU9mUGFydHNEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgcGx1c1Rlcm1pbmFsU3ltYm9sQ29udGVudCA9IHBsdXM7XG5cbiAgICBzdXBlcihwbHVzVGVybWluYWxTeW1ib2xDb250ZW50KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9uZU9yTW9yZVBhcnRzRGVmaW5pdGlvbjtcbiJdfQ==