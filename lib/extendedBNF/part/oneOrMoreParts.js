'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lexers = require('occam-lexers');

var SequenceOfPartsPart = require('./sequenceOfParts'),
    ZeroOrMorePartsPart = require('./zeroOrMoreParts');

var ExtendedBNFLexer = lexers.ExtendedBNFLexer,
    specialSymbols = ExtendedBNFLexer.specialSymbols,
    plus = specialSymbols.plus;

var OneOrMorePartsPart = function (_SequenceOfPartsPart) {
      _inherits(OneOrMorePartsPart, _SequenceOfPartsPart);

      function OneOrMorePartsPart() {
            _classCallCheck(this, OneOrMorePartsPart);

            return _possibleConstructorReturn(this, (OneOrMorePartsPart.__proto__ || Object.getPrototypeOf(OneOrMorePartsPart)).apply(this, arguments));
      }

      _createClass(OneOrMorePartsPart, [{
            key: 'parse',
            value: function parse(context, noWhitespace) {
                  noWhitespace = false; ///

                  var nodes = null;

                  var part = this.getPart(),
                      partNodeOrNodes = part.parse(context, noWhitespace),
                      partParsed = partNodeOrNodes !== null;

                  if (partParsed) {
                        nodes = partNodeOrNodes instanceof Array ? partNodeOrNodes : [partNodeOrNodes];

                        var zeroOrMorePartsPart = ZeroOrMorePartsPart.fromOneOrMorePartsPart(this),
                            ///
                        zeroOrMorePartsPartNodeOrNodes = zeroOrMorePartsPart.parse(context, noWhitespace);

                        nodes = nodes.concat(zeroOrMorePartsPartNodeOrNodes);
                  }

                  return nodes;
            }
      }, {
            key: 'toString',
            value: function toString() {
                  var operatorString = plus,
                      ///
                  string = _get(OneOrMorePartsPart.prototype.__proto__ || Object.getPrototypeOf(OneOrMorePartsPart.prototype), 'toString', this).call(this, operatorString);

                  return string;
            }
      }]);

      return OneOrMorePartsPart;
}(SequenceOfPartsPart);

module.exports = OneOrMorePartsPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leHRlbmRlZEJORi9wYXJ0L29uZU9yTW9yZVBhcnRzLmpzIl0sIm5hbWVzIjpbImxleGVycyIsInJlcXVpcmUiLCJTZXF1ZW5jZU9mUGFydHNQYXJ0IiwiWmVyb09yTW9yZVBhcnRzUGFydCIsIkV4dGVuZGVkQk5GTGV4ZXIiLCJzcGVjaWFsU3ltYm9scyIsInBsdXMiLCJPbmVPck1vcmVQYXJ0c1BhcnQiLCJjb250ZXh0Iiwibm9XaGl0ZXNwYWNlIiwibm9kZXMiLCJwYXJ0IiwiZ2V0UGFydCIsInBhcnROb2RlT3JOb2RlcyIsInBhcnNlIiwicGFydFBhcnNlZCIsIkFycmF5IiwiemVyb09yTW9yZVBhcnRzUGFydCIsImZyb21PbmVPck1vcmVQYXJ0c1BhcnQiLCJ6ZXJvT3JNb3JlUGFydHNQYXJ0Tm9kZU9yTm9kZXMiLCJjb25jYXQiLCJvcGVyYXRvclN0cmluZyIsInN0cmluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxzQkFBc0JELFFBQVEsbUJBQVIsQ0FBNUI7QUFBQSxJQUNNRSxzQkFBc0JGLFFBQVEsbUJBQVIsQ0FENUI7O0FBR00sSUFBRUcsZ0JBQUYsR0FBdUJKLE1BQXZCLENBQUVJLGdCQUFGO0FBQUEsSUFDRUMsY0FERixHQUNxQkQsZ0JBRHJCLENBQ0VDLGNBREY7QUFBQSxJQUVFQyxJQUZGLEdBRVdELGNBRlgsQ0FFRUMsSUFGRjs7SUFJQUMsa0I7Ozs7Ozs7Ozs7O2tDQUNFQyxPLEVBQVNDLFksRUFBYztBQUMzQkEsaUNBQWUsS0FBZixDQUQyQixDQUNMOztBQUV0QixzQkFBSUMsUUFBUSxJQUFaOztBQUVBLHNCQUFNQyxPQUFPLEtBQUtDLE9BQUwsRUFBYjtBQUFBLHNCQUNNQyxrQkFBa0JGLEtBQUtHLEtBQUwsQ0FBV04sT0FBWCxFQUFvQkMsWUFBcEIsQ0FEeEI7QUFBQSxzQkFFTU0sYUFBY0Ysb0JBQW9CLElBRnhDOztBQUlBLHNCQUFJRSxVQUFKLEVBQWdCO0FBQ2RMLGdDQUFTRywyQkFBMkJHLEtBQTVCLEdBQ0VILGVBREYsR0FFSSxDQUFDQSxlQUFELENBRlo7O0FBSUEsNEJBQU1JLHNCQUFzQmQsb0JBQW9CZSxzQkFBcEIsQ0FBMkMsSUFBM0MsQ0FBNUI7QUFBQSw0QkFBOEU7QUFDeEVDLHlEQUFpQ0Ysb0JBQW9CSCxLQUFwQixDQUEwQk4sT0FBMUIsRUFBbUNDLFlBQW5DLENBRHZDOztBQUdBQyxnQ0FBUUEsTUFBTVUsTUFBTixDQUFhRCw4QkFBYixDQUFSO0FBQ0Q7O0FBRUQseUJBQU9ULEtBQVA7QUFDRDs7O3VDQUVVO0FBQ1Qsc0JBQU1XLGlCQUFpQmYsSUFBdkI7QUFBQSxzQkFBOEI7QUFDeEJnQiw0SkFBd0JELGNBQXhCLENBRE47O0FBR0EseUJBQU9DLE1BQVA7QUFDRDs7OztFQTdCOEJwQixtQjs7QUFnQ2pDcUIsT0FBT0MsT0FBUCxHQUFpQmpCLGtCQUFqQiIsImZpbGUiOiJvbmVPck1vcmVQYXJ0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IFNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSByZXF1aXJlKCcuL3NlcXVlbmNlT2ZQYXJ0cycpLFxuICAgICAgWmVyb09yTW9yZVBhcnRzUGFydCA9IHJlcXVpcmUoJy4vemVyb09yTW9yZVBhcnRzJyk7XG5cbmNvbnN0IHsgRXh0ZW5kZWRCTkZMZXhlciB9ID0gbGV4ZXJzLFxuICAgICAgeyBzcGVjaWFsU3ltYm9scyB9ID0gRXh0ZW5kZWRCTkZMZXhlcixcbiAgICAgIHsgcGx1cyB9ID0gc3BlY2lhbFN5bWJvbHM7XG5cbmNsYXNzIE9uZU9yTW9yZVBhcnRzUGFydCBleHRlbmRzIFNlcXVlbmNlT2ZQYXJ0c1BhcnQge1xuICBwYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpIHtcbiAgICBub1doaXRlc3BhY2UgPSBmYWxzZTsgLy8vXG5cbiAgICBsZXQgbm9kZXMgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IHBhcnQgPSB0aGlzLmdldFBhcnQoKSxcbiAgICAgICAgICBwYXJ0Tm9kZU9yTm9kZXMgPSBwYXJ0LnBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcGFydFBhcnNlZCA9IChwYXJ0Tm9kZU9yTm9kZXMgIT09IG51bGwpO1xuXG4gICAgaWYgKHBhcnRQYXJzZWQpIHtcbiAgICAgIG5vZGVzID0gKHBhcnROb2RlT3JOb2RlcyBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICAgICAgcGFydE5vZGVPck5vZGVzIDpcbiAgICAgICAgICAgICAgICAgIFtwYXJ0Tm9kZU9yTm9kZXNdO1xuXG4gICAgICBjb25zdCB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gWmVyb09yTW9yZVBhcnRzUGFydC5mcm9tT25lT3JNb3JlUGFydHNQYXJ0KHRoaXMpLCAvLy9cbiAgICAgICAgICAgIHplcm9Pck1vcmVQYXJ0c1BhcnROb2RlT3JOb2RlcyA9IHplcm9Pck1vcmVQYXJ0c1BhcnQucGFyc2UoY29udGV4dCwgbm9XaGl0ZXNwYWNlKTtcblxuICAgICAgbm9kZXMgPSBub2Rlcy5jb25jYXQoemVyb09yTW9yZVBhcnRzUGFydE5vZGVPck5vZGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICBjb25zdCBvcGVyYXRvclN0cmluZyA9IHBsdXMsICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBzdXBlci50b1N0cmluZyhvcGVyYXRvclN0cmluZyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT25lT3JNb3JlUGFydHNQYXJ0O1xuIl19