'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtil = require('../../util/array');

var SequenceOfPartsPart = function () {
  function SequenceOfPartsPart(part) {
    _classCallCheck(this, SequenceOfPartsPart);

    this.part = part;
  }

  _createClass(SequenceOfPartsPart, [{
    key: 'getPart',
    value: function getPart() {
      return this.part;
    }
  }, {
    key: 'toString',
    value: function toString(operatorString) {
      var partString = this.part.toString(),
          string = '' + partString + operatorString;

      return string;
    }
  }], [{
    key: 'fromPartAndQuantifier',
    value: function fromPartAndQuantifier(part, quantifier, Parts) {
      var sequenceOfPartsPart = void 0;

      switch (quantifier) {
        case '?':
          var OptionalPartPart = Parts['OptionalPartPart'],
              optionalPartPart = new OptionalPartPart(part);

          sequenceOfPartsPart = optionalPartPart;
          break;

        case '*':
          var ZeroOrMorePartsPart = Parts['ZeroOrMorePartsPart'],
              zeroOrMorePartsPart = new ZeroOrMorePartsPart(part);

          sequenceOfPartsPart = zeroOrMorePartsPart;
          break;

        case '+':
          var OneOrMorePartsPart = Parts['OneOrMorePartsPart'],
              oneOrMorePartsPart = new OneOrMorePartsPart(part);

          sequenceOfPartsPart = oneOrMorePartsPart;
          break;
      }

      return sequenceOfPartsPart;
    }
  }, {
    key: 'fromPartAndQuantifiers',
    value: function fromPartAndQuantifiers(part, quantifiers, Parts) {
      var quantifier = quantifiers.shift(),
          quantifiersLength = quantifiers.length;

      var sequenceOfPartsPart = SequenceOfPartsPart.fromPartAndQuantifier(part, quantifier, Parts);

      if (quantifiersLength > 0) {
        part = sequenceOfPartsPart; ///

        sequenceOfPartsPart = SequenceOfPartsPart.fromPartAndQuantifiers(part, quantifiers, Parts);
      }

      return sequenceOfPartsPart;
    }
  }, {
    key: 'fromNodeAndQuantifiersNode',
    value: function fromNodeAndQuantifiersNode(node, quantifiersNode, Parts, noWhitespace) {
      var part = node.generatePart(Parts, noWhitespace),
          quantifiers = quantifiersFromQuantifiersNode(quantifiersNode),
          sequenceOfPartsPart = SequenceOfPartsPart.fromPartAndQuantifiers(part, quantifiers, Parts);

      return sequenceOfPartsPart;
    }
  }]);

  return SequenceOfPartsPart;
}();

module.exports = SequenceOfPartsPart;

function quantifiersFromQuantifiersNode(quantifiersNode) {
  var quantifiers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var quantifier = quantifierFromQuantifiersNode(quantifiersNode);

  quantifiers.push(quantifier);

  var quantifiersNodeChildNodes = quantifiersNode.getChildNodes(),
      quantifiersNodeChildNodesLength = quantifiersNodeChildNodes.length;

  if (quantifiersNodeChildNodesLength === 2) {
    var secondQuantifiersNodeChildNode = arrayUtil.second(quantifiersNodeChildNodes);

    quantifiersNode = secondQuantifiersNodeChildNode; ///

    quantifiers = quantifiersFromQuantifiersNode(quantifiersNode, quantifiers);
  }

  return quantifiers;
}

function quantifierFromQuantifiersNode(quantifiersNode) {
  var quantifiersNodeChildNodes = quantifiersNode.getChildNodes(),
      firstQuantifiersNodeChildNode = arrayUtil.first(quantifiersNodeChildNodes),
      firstQuantifiersNodeChildNodeContent = firstQuantifiersNodeChildNode.getContent(),
      quantifier = firstQuantifiersNodeChildNodeContent;

  return quantifier;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvcGFydC9zZXF1ZW5jZU9mUGFydHMuanMiXSwibmFtZXMiOlsiYXJyYXlVdGlsIiwicmVxdWlyZSIsIlNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJwYXJ0Iiwib3BlcmF0b3JTdHJpbmciLCJwYXJ0U3RyaW5nIiwidG9TdHJpbmciLCJzdHJpbmciLCJxdWFudGlmaWVyIiwiUGFydHMiLCJzZXF1ZW5jZU9mUGFydHNQYXJ0IiwiT3B0aW9uYWxQYXJ0UGFydCIsIm9wdGlvbmFsUGFydFBhcnQiLCJaZXJvT3JNb3JlUGFydHNQYXJ0IiwiemVyb09yTW9yZVBhcnRzUGFydCIsIk9uZU9yTW9yZVBhcnRzUGFydCIsIm9uZU9yTW9yZVBhcnRzUGFydCIsInF1YW50aWZpZXJzIiwic2hpZnQiLCJxdWFudGlmaWVyc0xlbmd0aCIsImxlbmd0aCIsImZyb21QYXJ0QW5kUXVhbnRpZmllciIsImZyb21QYXJ0QW5kUXVhbnRpZmllcnMiLCJub2RlIiwicXVhbnRpZmllcnNOb2RlIiwibm9XaGl0ZXNwYWNlIiwiZ2VuZXJhdGVQYXJ0IiwicXVhbnRpZmllcnNGcm9tUXVhbnRpZmllcnNOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyIsInF1YW50aWZpZXJGcm9tUXVhbnRpZmllcnNOb2RlIiwicHVzaCIsInF1YW50aWZpZXJzTm9kZUNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwicXVhbnRpZmllcnNOb2RlQ2hpbGROb2Rlc0xlbmd0aCIsInNlY29uZFF1YW50aWZpZXJzTm9kZUNoaWxkTm9kZSIsInNlY29uZCIsImZpcnN0UXVhbnRpZmllcnNOb2RlQ2hpbGROb2RlIiwiZmlyc3QiLCJmaXJzdFF1YW50aWZpZXJzTm9kZUNoaWxkTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxrQkFBUixDQUFsQjs7SUFFTUMsbUI7QUFDSiwrQkFBWUMsSUFBWixFQUFrQjtBQUFBOztB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Q3JDLFVBQVVzQyxLQUFWLENBQWdCTix5QkFBaEIsQ0FEdEM7QUFBQSxNQUVNTyx1Q0FBdUNGLDhCQUE4QkcsVUFBOUIsRUFGN0M7QUFBQSxNQUdNaEMsYUFBYStCLG9DQUhuQjs7QUFLQSxTQUFPL0IsVUFBUDtBQUNEIiwiZmlsZSI6InNlcXVlbmNlT2ZQYXJ0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsID0gcmVxdWlyZSgnLi4vLi4vdXRpbC9hcnJheScpO1xuXG5jbGFzcyBTZXF1ZW5jZU9mUGFydHNQYXJ0IHtcbiAgY29uc3RydWN0b3IocGFydCkge1xuICAgIHRoaXMucGFydCA9IHBhcnQ7XG4gIH1cblxuICBnZXRQYXJ0KCkge1xuICAgIHJldHVybiB0aGlzLnBhcnQ7XG4gIH1cbiAgXG4gIHRvU3RyaW5nKG9wZXJhdG9yU3RyaW5nKSB7XG4gICAgY29uc3QgcGFydFN0cmluZyA9IHRoaXMucGFydC50b1N0cmluZygpLFxuICAgICAgICAgIHN0cmluZyA9IGAke3BhcnRTdHJpbmd9JHtvcGVyYXRvclN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGFydEFuZFF1YW50aWZpZXIocGFydCwgcXVhbnRpZmllciwgUGFydHMpIHtcbiAgICBsZXQgc2VxdWVuY2VPZlBhcnRzUGFydDtcbiAgXG4gICAgc3dpdGNoIChxdWFudGlmaWVyKSB7XG4gICAgICBjYXNlICc/JzpcbiAgICAgICAgY29uc3QgT3B0aW9uYWxQYXJ0UGFydCA9IFBhcnRzWydPcHRpb25hbFBhcnRQYXJ0J10sXG4gICAgICAgICAgICAgIG9wdGlvbmFsUGFydFBhcnQgPSBuZXcgT3B0aW9uYWxQYXJ0UGFydChwYXJ0KTtcbiAgXG4gICAgICAgIHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBvcHRpb25hbFBhcnRQYXJ0O1xuICAgICAgICBicmVhaztcbiAgXG4gICAgICBjYXNlICcqJzpcbiAgICAgICAgY29uc3QgWmVyb09yTW9yZVBhcnRzUGFydCA9IFBhcnRzWydaZXJvT3JNb3JlUGFydHNQYXJ0J10sXG4gICAgICAgICAgICAgIHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBuZXcgWmVyb09yTW9yZVBhcnRzUGFydChwYXJ0KTtcbiAgXG4gICAgICAgIHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSB6ZXJvT3JNb3JlUGFydHNQYXJ0O1xuICAgICAgICBicmVhaztcbiAgXG4gICAgICBjYXNlICcrJzpcbiAgICAgICAgY29uc3QgT25lT3JNb3JlUGFydHNQYXJ0ID0gUGFydHNbJ09uZU9yTW9yZVBhcnRzUGFydCddLFxuICAgICAgICAgICAgICBvbmVPck1vcmVQYXJ0c1BhcnQgPSBuZXcgT25lT3JNb3JlUGFydHNQYXJ0KHBhcnQpO1xuICBcbiAgICAgICAgc2VxdWVuY2VPZlBhcnRzUGFydCA9IG9uZU9yTW9yZVBhcnRzUGFydDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICBcbiAgICByZXR1cm4gc2VxdWVuY2VPZlBhcnRzUGFydDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGFydEFuZFF1YW50aWZpZXJzKHBhcnQsIHF1YW50aWZpZXJzLCBQYXJ0cykge1xuICAgIGNvbnN0IHF1YW50aWZpZXIgPSBxdWFudGlmaWVycy5zaGlmdCgpLFxuICAgICAgICAgIHF1YW50aWZpZXJzTGVuZ3RoID0gcXVhbnRpZmllcnMubGVuZ3RoO1xuXG4gICAgbGV0IHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBTZXF1ZW5jZU9mUGFydHNQYXJ0LmZyb21QYXJ0QW5kUXVhbnRpZmllcihwYXJ0LCBxdWFudGlmaWVyLCBQYXJ0cyk7XG5cbiAgICBpZiAocXVhbnRpZmllcnNMZW5ndGggPiAwKSB7XG4gICAgICBwYXJ0ID0gc2VxdWVuY2VPZlBhcnRzUGFydDsgLy8vXG5cbiAgICAgIHNlcXVlbmNlT2ZQYXJ0c1BhcnQgPSBTZXF1ZW5jZU9mUGFydHNQYXJ0LmZyb21QYXJ0QW5kUXVhbnRpZmllcnMocGFydCwgcXVhbnRpZmllcnMsIFBhcnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VxdWVuY2VPZlBhcnRzUGFydDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFF1YW50aWZpZXJzTm9kZShub2RlLCBxdWFudGlmaWVyc05vZGUsIFBhcnRzLCBub1doaXRlc3BhY2UpIHtcbiAgICBjb25zdCBwYXJ0ID0gbm9kZS5nZW5lcmF0ZVBhcnQoUGFydHMsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgcXVhbnRpZmllcnMgPSBxdWFudGlmaWVyc0Zyb21RdWFudGlmaWVyc05vZGUocXVhbnRpZmllcnNOb2RlKSxcbiAgICAgICAgICBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gU2VxdWVuY2VPZlBhcnRzUGFydC5mcm9tUGFydEFuZFF1YW50aWZpZXJzKHBhcnQsIHF1YW50aWZpZXJzLCBQYXJ0cyk7XG5cbiAgICByZXR1cm4gc2VxdWVuY2VPZlBhcnRzUGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNlcXVlbmNlT2ZQYXJ0c1BhcnQ7XG5cbmZ1bmN0aW9uIHF1YW50aWZpZXJzRnJvbVF1YW50aWZpZXJzTm9kZShxdWFudGlmaWVyc05vZGUsIHF1YW50aWZpZXJzID0gW10pIHtcbiAgY29uc3QgcXVhbnRpZmllciA9IHF1YW50aWZpZXJGcm9tUXVhbnRpZmllcnNOb2RlKHF1YW50aWZpZXJzTm9kZSk7XG5cbiAgcXVhbnRpZmllcnMucHVzaChxdWFudGlmaWVyKTtcblxuICBjb25zdCBxdWFudGlmaWVyc05vZGVDaGlsZE5vZGVzID0gcXVhbnRpZmllcnNOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgcXVhbnRpZmllcnNOb2RlQ2hpbGROb2Rlc0xlbmd0aCA9ICBxdWFudGlmaWVyc05vZGVDaGlsZE5vZGVzLmxlbmd0aDtcblxuICBpZiAocXVhbnRpZmllcnNOb2RlQ2hpbGROb2Rlc0xlbmd0aCA9PT0gMikge1xuICAgIGNvbnN0IHNlY29uZFF1YW50aWZpZXJzTm9kZUNoaWxkTm9kZSA9IGFycmF5VXRpbC5zZWNvbmQocXVhbnRpZmllcnNOb2RlQ2hpbGROb2Rlcyk7XG5cbiAgICBxdWFudGlmaWVyc05vZGUgPSBzZWNvbmRRdWFudGlmaWVyc05vZGVDaGlsZE5vZGU7IC8vL1xuXG4gICAgcXVhbnRpZmllcnMgPSBxdWFudGlmaWVyc0Zyb21RdWFudGlmaWVyc05vZGUocXVhbnRpZmllcnNOb2RlLCBxdWFudGlmaWVycyk7XG4gIH1cblxuICByZXR1cm4gcXVhbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIHF1YW50aWZpZXJGcm9tUXVhbnRpZmllcnNOb2RlKHF1YW50aWZpZXJzTm9kZSkge1xuICBjb25zdCBxdWFudGlmaWVyc05vZGVDaGlsZE5vZGVzID0gcXVhbnRpZmllcnNOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgZmlyc3RRdWFudGlmaWVyc05vZGVDaGlsZE5vZGUgPSBhcnJheVV0aWwuZmlyc3QocXVhbnRpZmllcnNOb2RlQ2hpbGROb2RlcyksXG4gICAgICAgIGZpcnN0UXVhbnRpZmllcnNOb2RlQ2hpbGROb2RlQ29udGVudCA9IGZpcnN0UXVhbnRpZmllcnNOb2RlQ2hpbGROb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgcXVhbnRpZmllciA9IGZpcnN0UXVhbnRpZmllcnNOb2RlQ2hpbGROb2RlQ29udGVudDtcblxuICByZXR1cm4gcXVhbnRpZmllcjtcbn1cbiJdfQ==