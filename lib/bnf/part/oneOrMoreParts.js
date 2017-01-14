'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ErrorNode = require('../node/error'),
    SequenceOfPartsPart = require('./sequenceOfParts'),
    ZeroOrMorePartsPart = require('./zeroOrMoreParts');

var OneOrMorePartsPart = function (_SequenceOfPartsPart) {
  _inherits(OneOrMorePartsPart, _SequenceOfPartsPart);

  function OneOrMorePartsPart() {
    _classCallCheck(this, OneOrMorePartsPart);

    return _possibleConstructorReturn(this, (OneOrMorePartsPart.__proto__ || Object.getPrototypeOf(OneOrMorePartsPart)).apply(this, arguments));
  }

  _createClass(OneOrMorePartsPart, [{
    key: 'parse',
    value: function parse(context, productions, noWhitespace) {
      noWhitespace = this.getNoWhitespace(); ///

      var nodes = null,
          errorNode,
          terminalPartOrProduction = this.terminalPartOrProduction(productions);

      if (terminalPartOrProduction !== null) {
        var terminalPartOrProductionNodes = terminalPartOrProduction.parse(context, productions, noWhitespace),
            terminalPartOrProductionParsed = terminalPartOrProductionNodes !== null;

        if (terminalPartOrProductionParsed) {
          if (terminalPartOrProductionNodes !== undefined) {
            var firstTerminalPartOrProductionNode = first(terminalPartOrProductionNodes);

            if (firstTerminalPartOrProductionNode instanceof ErrorNode) {
              errorNode = firstTerminalPartOrProductionNode;

              nodes = [errorNode];

              return nodes;
            }
          }

          nodes = terminalPartOrProductionNodes;

          var zeroOrMorePartsPart = ZeroOrMorePartsPart.fromOneOrMorePartsPart(this),
              ///
          zeroOrMorePartsPartNodes = zeroOrMorePartsPart.parse(context, productions, noWhitespace),
              zeroOrMorePartsPartNodesParsed = zeroOrMorePartsPartNodes !== null;

          if (zeroOrMorePartsPartNodesParsed) {
            if (zeroOrMorePartsPartNodes !== undefined) {
              var firstZeroOrMorePartsPartNode = first(zeroOrMorePartsPartNodes);

              if (firstZeroOrMorePartsPartNode instanceof ErrorNode) {
                errorNode = firstZeroOrMorePartsPartNode;

                nodes = [errorNode];

                return nodes;
              }
            }

            nodes = nodes.concat(zeroOrMorePartsPartNodes);
          }
        }
      }

      return nodes;
    }
  }], [{
    key: 'fromSymbol',
    value: function fromSymbol(symbol, terminalSymbolsRegExp, significantTokenTypes, noWhitespace) {
      var regExp = /([^*]+)\+$/,
          Class = OneOrMorePartsPart,
          oneOrMorePartsPart = _get(OneOrMorePartsPart.__proto__ || Object.getPrototypeOf(OneOrMorePartsPart), 'fromSymbol', this).call(this, symbol, terminalSymbolsRegExp, significantTokenTypes, noWhitespace, regExp, Class);

      return oneOrMorePartsPart;
    }
  }]);

  return OneOrMorePartsPart;
}(SequenceOfPartsPart);

module.exports = OneOrMorePartsPart;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFydC9vbmVPck1vcmVQYXJ0cy5qcyJdLCJuYW1lcyI6WyJFcnJvck5vZGUiLCJyZXF1aXJlIiwiU2VxdWVuY2VPZlBhcnRzUGFydCIsIlplcm9Pck1vcmVQYXJ0c1BhcnQiLCJPbmVPck1vcmVQYXJ0c1BhcnQiLCJjb250ZXh0IiwicHJvZHVjdGlvbnMiLCJub1doaXRlc3BhY2UiLCJnZXROb1doaXRlc3BhY2UiLCJub2RlcyIsImVycm9yTm9kZSIsInRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbiIsInRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbk5vZGVzIiwicGFyc2UiLCJ0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb25QYXJzZWQiLCJ1bmRlZmluZWQiLCJmaXJzdFRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbk5vZGUiLCJmaXJzdCIsInplcm9Pck1vcmVQYXJ0c1BhcnQiLCJmcm9tT25lT3JNb3JlUGFydHNQYXJ0IiwiemVyb09yTW9yZVBhcnRzUGFydE5vZGVzIiwiemVyb09yTW9yZVBhcnRzUGFydE5vZGVzUGFyc2VkIiwiZmlyc3RaZXJvT3JNb3JlUGFydHNQYXJ0Tm9kZSIsImNvbmNhdCIsInN5bWJvbCIsInRlcm1pbmFsU3ltYm9sc1JlZ0V4cCIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsInJlZ0V4cCIsIkNsYXNzIiwib25lT3JNb3JlUGFydHNQYXJ0IiwibW9kdWxlIiwiZXhwb3J0cyIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsWUFBWUMsUUFBUSxlQUFSLENBQWhCO0FBQUEsSUFDSUMsc0JBQXNCRCxRQUFRLG1CQUFSLENBRDFCO0FBQUEsSUFFSUUsc0JBQXNCRixRQUFRLG1CQUFSLENBRjFCOztJQUlNRyxrQjs7Ozs7Ozs7Ozs7MEJBQ0VDLE8sRUFBU0MsVyxFQUFhQyxZLEVBQWM7QUFDeENBLHFCQUFlLEtBQUtDLGVBQUwsRUFBZixDQUR3QyxDQUNBOztBQUV4QyxVQUFJQyxRQUFRLElBQVo7QUFBQSxVQUNJQyxTQURKO0FBQUEsVUFFSUMsMkJBQTJCLEtBQUtBLHdCQUFMLENBQThCTCxXQUE5QixDQUYvQjs7QUFJQSxVQUFJSyw2QkFBNkIsSUFBakMsRUFBdUM7QUFDckMsWUFBSUMsZ0NBQWdDRCx5QkFBeUJFLEtBQXpCLENBQStCUixPQUEvQixFQUF3Q0MsV0FBeEMsRUFBcURDLFlBQXJELENBQXBDO0FBQUEsWUFDSU8saUNBQWtDRixrQ0FBa0MsSUFEeEU7O0FBR0EsWUFBSUUsOEJBQUosRUFBb0M7QUFDbEMsY0FBSUYsa0NBQWtDRyxTQUF0QyxFQUFpRDtBQUMvQyxnQkFBSUMsb0NBQW9DQyxNQUFNTCw2QkFBTixDQUF4Qzs7QUFFQSxnQkFBSUksNkNBQTZDaEIsU0FBakQsRUFBNEQ7QUFDMURVLDBCQUFZTSxpQ0FBWjs7QUFFQVAsc0JBQVEsQ0FBQ0MsU0FBRCxDQUFSOztBQUVBLHFCQUFPRCxLQUFQO0FBQ0Q7QUFDRjs7QUFFREEsa0JBQVFHLDZCQUFSOztBQUVBLGNBQUlNLHNCQUFzQmYsb0JBQW9CZ0Isc0JBQXBCLENBQTJDLElBQTNDLENBQTFCO0FBQUEsY0FBNEU7QUFDeEVDLHFDQUEyQkYsb0JBQW9CTCxLQUFwQixDQUEwQlIsT0FBMUIsRUFBbUNDLFdBQW5DLEVBQWdEQyxZQUFoRCxDQUQvQjtBQUFBLGNBRUljLGlDQUFrQ0QsNkJBQTZCLElBRm5FOztBQUlBLGNBQUlDLDhCQUFKLEVBQW9DO0FBQ2xDLGdCQUFJRCw2QkFBNkJMLFNBQWpDLEVBQTRDO0FBQzFDLGtCQUFJTywrQkFBK0JMLE1BQU1HLHdCQUFOLENBQW5DOztBQUVBLGtCQUFJRSx3Q0FBd0N0QixTQUE1QyxFQUF1RDtBQUNyRFUsNEJBQVlZLDRCQUFaOztBQUVBYix3QkFBUSxDQUFDQyxTQUFELENBQVI7O0FBRUEsdUJBQU9ELEtBQVA7QUFDRDtBQUNGOztBQUVEQSxvQkFBUUEsTUFBTWMsTUFBTixDQUFhSCx3QkFBYixDQUFSO0FBQ0Q7QUFDRjtBQUNGOztBQUVELGFBQU9YLEtBQVA7QUFDRDs7OytCQUVpQmUsTSxFQUFRQyxxQixFQUF1QkMscUIsRUFBdUJuQixZLEVBQWM7QUFDcEYsVUFBSW9CLFNBQVMsWUFBYjtBQUFBLFVBQ0lDLFFBQVF4QixrQkFEWjtBQUFBLFVBRUl5QixvSUFBc0NMLE1BQXRDLEVBQThDQyxxQkFBOUMsRUFBcUVDLHFCQUFyRSxFQUE0Rm5CLFlBQTVGLEVBQTBHb0IsTUFBMUcsRUFBa0hDLEtBQWxILENBRko7O0FBSUEsYUFBT0Msa0JBQVA7QUFDRDs7OztFQTFEOEIzQixtQjs7QUE2RGpDNEIsT0FBT0MsT0FBUCxHQUFpQjNCLGtCQUFqQjs7QUFFQSxTQUFTYSxLQUFULENBQWVlLEtBQWYsRUFBc0I7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJvbmVPck1vcmVQYXJ0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIEVycm9yTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvZXJyb3InKSxcbiAgICBTZXF1ZW5jZU9mUGFydHNQYXJ0ID0gcmVxdWlyZSgnLi9zZXF1ZW5jZU9mUGFydHMnKSxcbiAgICBaZXJvT3JNb3JlUGFydHNQYXJ0ID0gcmVxdWlyZSgnLi96ZXJvT3JNb3JlUGFydHMnKTtcblxuY2xhc3MgT25lT3JNb3JlUGFydHNQYXJ0IGV4dGVuZHMgU2VxdWVuY2VPZlBhcnRzUGFydCB7XG4gIHBhcnNlKGNvbnRleHQsIHByb2R1Y3Rpb25zLCBub1doaXRlc3BhY2UpIHtcbiAgICBub1doaXRlc3BhY2UgPSB0aGlzLmdldE5vV2hpdGVzcGFjZSgpOyAgLy8vXG4gICAgXG4gICAgdmFyIG5vZGVzID0gbnVsbCxcbiAgICAgICAgZXJyb3JOb2RlLFxuICAgICAgICB0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24gPSB0aGlzLnRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbihwcm9kdWN0aW9ucyk7XG5cbiAgICBpZiAodGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uICE9PSBudWxsKSB7XG4gICAgICB2YXIgdGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uTm9kZXMgPSB0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb24ucGFyc2UoY29udGV4dCwgcHJvZHVjdGlvbnMsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgdGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uUGFyc2VkID0gKHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbk5vZGVzICE9PSBudWxsKTtcblxuICAgICAgaWYgKHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvblBhcnNlZCkge1xuICAgICAgICBpZiAodGVybWluYWxQYXJ0T3JQcm9kdWN0aW9uTm9kZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHZhciBmaXJzdFRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbk5vZGUgPSBmaXJzdCh0ZXJtaW5hbFBhcnRPclByb2R1Y3Rpb25Ob2Rlcyk7XG5cbiAgICAgICAgICBpZiAoZmlyc3RUZXJtaW5hbFBhcnRPclByb2R1Y3Rpb25Ob2RlIGluc3RhbmNlb2YgRXJyb3JOb2RlKSB7XG4gICAgICAgICAgICBlcnJvck5vZGUgPSBmaXJzdFRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbk5vZGU7XG5cbiAgICAgICAgICAgIG5vZGVzID0gW2Vycm9yTm9kZV07XG5cbiAgICAgICAgICAgIHJldHVybiBub2RlcztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBub2RlcyA9IHRlcm1pbmFsUGFydE9yUHJvZHVjdGlvbk5vZGVzO1xuXG4gICAgICAgIHZhciB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gWmVyb09yTW9yZVBhcnRzUGFydC5mcm9tT25lT3JNb3JlUGFydHNQYXJ0KHRoaXMpLCAvLy9cbiAgICAgICAgICAgIHplcm9Pck1vcmVQYXJ0c1BhcnROb2RlcyA9IHplcm9Pck1vcmVQYXJ0c1BhcnQucGFyc2UoY29udGV4dCwgcHJvZHVjdGlvbnMsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgICB6ZXJvT3JNb3JlUGFydHNQYXJ0Tm9kZXNQYXJzZWQgPSAoemVyb09yTW9yZVBhcnRzUGFydE5vZGVzICE9PSBudWxsKTtcblxuICAgICAgICBpZiAoemVyb09yTW9yZVBhcnRzUGFydE5vZGVzUGFyc2VkKSB7XG4gICAgICAgICAgaWYgKHplcm9Pck1vcmVQYXJ0c1BhcnROb2RlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB2YXIgZmlyc3RaZXJvT3JNb3JlUGFydHNQYXJ0Tm9kZSA9IGZpcnN0KHplcm9Pck1vcmVQYXJ0c1BhcnROb2Rlcyk7XG5cbiAgICAgICAgICAgIGlmIChmaXJzdFplcm9Pck1vcmVQYXJ0c1BhcnROb2RlIGluc3RhbmNlb2YgRXJyb3JOb2RlKSB7XG4gICAgICAgICAgICAgIGVycm9yTm9kZSA9IGZpcnN0WmVyb09yTW9yZVBhcnRzUGFydE5vZGU7XG5cbiAgICAgICAgICAgICAgbm9kZXMgPSBbZXJyb3JOb2RlXTtcblxuICAgICAgICAgICAgICByZXR1cm4gbm9kZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbm9kZXMgPSBub2Rlcy5jb25jYXQoemVyb09yTW9yZVBhcnRzUGFydE5vZGVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ltYm9sKHN5bWJvbCwgdGVybWluYWxTeW1ib2xzUmVnRXhwLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSkge1xuICAgIHZhciByZWdFeHAgPSAvKFteKl0rKVxcKyQvLFxuICAgICAgICBDbGFzcyA9IE9uZU9yTW9yZVBhcnRzUGFydCxcbiAgICAgICAgb25lT3JNb3JlUGFydHNQYXJ0ID0gc3VwZXIuZnJvbVN5bWJvbChzeW1ib2wsIHRlcm1pbmFsU3ltYm9sc1JlZ0V4cCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UsIHJlZ0V4cCwgQ2xhc3MpO1xuXG4gICAgcmV0dXJuIG9uZU9yTW9yZVBhcnRzUGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9uZU9yTW9yZVBhcnRzUGFydDtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iXX0=