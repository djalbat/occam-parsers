'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lexers = require('occam-lexers');

var Parts = require('./parts'),
    arrayUtil = require('../util/array'),
    ProductionNamePart = require('./part/productionName'),
    BNFProductionNamePart = require('../bnf/part/productionName');

var specialSymbols = lexers.specialSymbols;

var Definition = function () {
  function Definition(parts) {
    _classCallCheck(this, Definition);

    this.parts = parts;
  }

  _createClass(Definition, [{
    key: 'getParts',
    value: function getParts() {
      return this.parts;
    }
  }, {
    key: 'getFirstPart',
    value: function getFirstPart() {
      var firstPart = arrayUtil.first(this.parts);

      return firstPart;
    }
  }, {
    key: 'getPartsLength',
    value: function getPartsLength() {
      var partsLength = this.parts.length;

      return partsLength;
    }
  }, {
    key: 'getAllButFirstParts',
    value: function getAllButFirstParts() {
      var allButFirstParts = this.parts.slice(1);

      return allButFirstParts;
    }
  }, {
    key: 'isFirstPartProductionNamePart',
    value: function isFirstPartProductionNamePart() {
      var firstPart = this.getFirstPart(),
          firstPartProductionNamePart = firstPart instanceof ProductionNamePart || firstPart instanceof BNFProductionNamePart; ///

      return firstPartProductionNamePart;
    }
  }, {
    key: 'parse',
    value: function parse(context, noWhitespace) {
      var nodes = [];

      var savedIndex = context.savedIndex(),
          everyPartParsed = this.parts.every(function (part) {
        var partNodeOrNodes = part.parse(context, noWhitespace),
            partParsed = partNodeOrNodes !== null;

        if (partParsed) {
          nodes = nodes.concat(partNodeOrNodes);

          noWhitespace = false;
        }

        return partParsed;
      });

      if (!everyPartParsed) {
        context.backtrack(savedIndex);

        nodes = null;
      }

      return nodes;
    }
  }, {
    key: 'toString',
    value: function toString() {
      var partsString = this.parts.reduce(function (partsString, part) {
        var partString = part.toString();

        if (partsString === null) {
          partsString = partString;
        } else {
          partsString = partsString + ' ' + partString;
        }

        return partsString;
      }, null),
          string = partsString; ///

      return string;
    }
  }], [{
    key: 'fromSymbolSequence',
    value: function fromSymbolSequence(symbolSequence, significantTokenTypes) {
      var noWhitespace = false;

      var parts = symbolSequence.reduceSymbols(function (parts, symbol) {
        if (symbol === specialSymbols.NO_WHITESPACE) {
          noWhitespace = true;
        } else {
          var part = partFromSymbol(symbol, significantTokenTypes, noWhitespace);

          parts.push(part);

          noWhitespace = false;
        }

        return parts;
      }, []),
          definition = new Definition(parts);

      return definition;
    }
  }]);

  return Definition;
}();

module.exports = Definition;

function partFromSymbol(symbol, significantTokenTypes, noWhitespace) {
  var part = undefined; ///

  Parts.some(function (Part) {
    part = Part.fromSymbol(symbol, significantTokenTypes, noWhitespace);

    var parsed = part !== null;

    return parsed;
  });

  return part;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vZGVmaW5pdGlvbi5qcyJdLCJuYW1lcyI6WyJsZXhlcnMiLCJyZXF1aXJlIiwiUGFydHMiLCJhcnJheVV0aWwiLCJQcm9kdWN0aW9uTmFtZVBhcnQiLCJCTkZQcm9kdWN0aW9uTmFtZVBhcnQiLCJzcGVjaWFsU3ltYm9scyIsIkRlZmluaXRpb24iLCJwYXJ0cyIsImZpcnN0UGFydCIsImZpcnN0IiwicGFydHNMZW5ndGgiLCJsZW5ndGgiLCJhbGxCdXRGaXJzdFBhcnRzIiwic2xpY2UiLCJnZXRGaXJzdFBhcnQiLCJmaXJzdFBhcnRQcm9kdWN0aW9uTmFtZVBhcnQiLCJjb250ZXh0Iiwibm9XaGl0ZXNwYWNlIiwibm9kZXMiLCJzYXZlZEluZGV4IiwiZXZlcnlQYXJ0UGFyc2VkIiwiZXZlcnkiLCJwYXJ0IiwicGFydE5vZGVPck5vZGVzIiwicGFyc2UiLCJwYXJ0UGFyc2VkIiwiY29uY2F0IiwiYmFja3RyYWNrIiwicGFydHNTdHJpbmciLCJyZWR1Y2UiLCJwYXJ0U3RyaW5nIiwidG9TdHJpbmciLCJzdHJpbmciLCJzeW1ib2xTZXF1ZW5jZSIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsInJlZHVjZVN5bWJvbHMiLCJzeW1ib2wiLCJOT19XSElURVNQQUNFIiwicGFydEZyb21TeW1ib2wiLCJwdXNoIiwiZGVmaW5pdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJ1bmRlZmluZWQiLCJzb21lIiwiUGFydCIsImZyb21TeW1ib2wiLCJwYXJzZWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGNBQVIsQ0FBZjs7QUFFQSxJQUFNQyxRQUFRRCxRQUFRLFNBQVIsQ0FBZDtBQUFBLElBQ01FLFlBQVlGLFFBQVEsZUFBUixDQURsQjtBQUFBLElBRU1HLHFCQUFxQkgsUUFBUSx1QkFBUixDQUYzQjtBQUFBLElBR01JLHdCQUF3QkosUUFBUSw0QkFBUixDQUg5Qjs7SUFLUUssYyxHQUFtQk4sTSxDQUFu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SyxPQUFPcUIsU0FBWCxDQURtRSxDQUM3Qzs7QUFFdEIxQyxRQUFNMkMsSUFBTixDQUFXLFVBQVNDLElBQVQsRUFBZTtBQUN4QnZCLFdBQU91QixLQUFLQyxVQUFMLENBQWdCVixNQUFoQixFQUF3QkYscUJBQXhCLEVBQStDakIsWUFBL0MsQ0FBUDs7QUFFQSxRQUFNOEIsU0FBVXpCLFNBQVMsSUFBekI7O0FBRUEsV0FBT3lCLE1BQVA7QUFDRCxHQU5EOztBQVFBLFNBQU96QixJQUFQO0FBQ0QiLCJmaWxlIjoiZGVmaW5pdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IFBhcnRzID0gcmVxdWlyZSgnLi9wYXJ0cycpLFxuICAgICAgYXJyYXlVdGlsID0gcmVxdWlyZSgnLi4vdXRpbC9hcnJheScpLFxuICAgICAgUHJvZHVjdGlvbk5hbWVQYXJ0ID0gcmVxdWlyZSgnLi9wYXJ0L3Byb2R1Y3Rpb25OYW1lJyksXG4gICAgICBCTkZQcm9kdWN0aW9uTmFtZVBhcnQgPSByZXF1aXJlKCcuLi9ibmYvcGFydC9wcm9kdWN0aW9uTmFtZScpO1xuXG5jb25zdCB7IHNwZWNpYWxTeW1ib2xzIH0gPSBsZXhlcnM7XG5cbmNsYXNzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcihwYXJ0cykge1xuICAgIHRoaXMucGFydHMgPSBwYXJ0cztcbiAgfVxuXG4gIGdldFBhcnRzKCkge1xuICAgIHJldHVybiB0aGlzLnBhcnRzO1xuICB9XG4gIFxuICBnZXRGaXJzdFBhcnQoKSB7XG4gICAgY29uc3QgZmlyc3RQYXJ0ID0gYXJyYXlVdGlsLmZpcnN0KHRoaXMucGFydHMpO1xuXG4gICAgcmV0dXJuIGZpcnN0UGFydDtcbiAgfVxuXG4gIGdldFBhcnRzTGVuZ3RoKCkge1xuICAgIGNvbnN0IHBhcnRzTGVuZ3RoID0gdGhpcy5wYXJ0cy5sZW5ndGg7XG5cbiAgICByZXR1cm4gcGFydHNMZW5ndGg7XG4gIH1cblxuICBnZXRBbGxCdXRGaXJzdFBhcnRzKCkge1xuICAgIGNvbnN0IGFsbEJ1dEZpcnN0UGFydHMgPSB0aGlzLnBhcnRzLnNsaWNlKDEpO1xuXG4gICAgcmV0dXJuIGFsbEJ1dEZpcnN0UGFydHM7XG4gIH1cbiAgXG4gIGlzRmlyc3RQYXJ0UHJvZHVjdGlvbk5hbWVQYXJ0KCkge1xuICAgIGNvbnN0IGZpcnN0UGFydCA9IHRoaXMuZ2V0Rmlyc3RQYXJ0KCksXG4gICAgICAgICAgZmlyc3RQYXJ0UHJvZHVjdGlvbk5hbWVQYXJ0ID0gKGZpcnN0UGFydCBpbnN0YW5jZW9mIFByb2R1Y3Rpb25OYW1lUGFydCkgfHwgKGZpcnN0UGFydCBpbnN0YW5jZW9mIEJORlByb2R1Y3Rpb25OYW1lUGFydCk7ICAvLy9cbiAgICBcbiAgICByZXR1cm4gZmlyc3RQYXJ0UHJvZHVjdGlvbk5hbWVQYXJ0O1xuICB9XG4gIFxuICBwYXJzZShjb250ZXh0LCBub1doaXRlc3BhY2UpIHtcbiAgICBsZXQgbm9kZXMgPSBbXTtcbiAgICBcbiAgICBjb25zdCBzYXZlZEluZGV4ID0gY29udGV4dC5zYXZlZEluZGV4KCksXG4gICAgICAgICAgZXZlcnlQYXJ0UGFyc2VkID0gdGhpcy5wYXJ0cy5ldmVyeShmdW5jdGlvbihwYXJ0KSB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0Tm9kZU9yTm9kZXMgPSBwYXJ0LnBhcnNlKGNvbnRleHQsIG5vV2hpdGVzcGFjZSksXG4gICAgICAgICAgICAgICAgICBwYXJ0UGFyc2VkID0gKHBhcnROb2RlT3JOb2RlcyAhPT0gbnVsbCk7XG4gIFxuICAgICAgICAgICAgaWYgKHBhcnRQYXJzZWQpIHtcbiAgICAgICAgICAgICAgbm9kZXMgPSBub2Rlcy5jb25jYXQocGFydE5vZGVPck5vZGVzKTtcbiAgXG4gICAgICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgIHJldHVybiBwYXJ0UGFyc2VkO1xuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKCFldmVyeVBhcnRQYXJzZWQpIHtcbiAgICAgIGNvbnRleHQuYmFja3RyYWNrKHNhdmVkSW5kZXgpO1xuXG4gICAgICBub2RlcyA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgY29uc3QgcGFydHNTdHJpbmcgPSB0aGlzLnBhcnRzLnJlZHVjZShmdW5jdGlvbihwYXJ0c1N0cmluZywgcGFydCkge1xuICAgICAgICAgIGNvbnN0IHBhcnRTdHJpbmcgPSBwYXJ0LnRvU3RyaW5nKCk7XG5cbiAgICAgICAgICBpZiAocGFydHNTdHJpbmcgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHBhcnRzU3RyaW5nID0gcGFydFN0cmluZztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBgJHtwYXJ0c1N0cmluZ30gJHtwYXJ0U3RyaW5nfWA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHBhcnRzU3RyaW5nO1xuICAgICAgICB9LCBudWxsKSxcbiAgICAgICAgc3RyaW5nID0gcGFydHNTdHJpbmc7IC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ltYm9sU2VxdWVuY2Uoc3ltYm9sU2VxdWVuY2UsIHNpZ25pZmljYW50VG9rZW5UeXBlcykge1xuICAgIGxldCBub1doaXRlc3BhY2UgPSBmYWxzZTtcbiAgICBcbiAgICBjb25zdCBwYXJ0cyA9IHN5bWJvbFNlcXVlbmNlLnJlZHVjZVN5bWJvbHMoZnVuY3Rpb24ocGFydHMsIHN5bWJvbCkge1xuICAgICAgICAgICAgaWYgKHN5bWJvbCA9PT0gc3BlY2lhbFN5bWJvbHMuTk9fV0hJVEVTUEFDRSkge1xuICAgICAgICAgICAgICBub1doaXRlc3BhY2UgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3QgcGFydCA9IHBhcnRGcm9tU3ltYm9sKHN5bWJvbCwgc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBub1doaXRlc3BhY2UpO1xuICBcbiAgICAgICAgICAgICAgcGFydHMucHVzaChwYXJ0KTtcbiAgXG4gICAgICAgICAgICAgIG5vV2hpdGVzcGFjZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgIHJldHVybiBwYXJ0cztcbiAgICAgICAgICB9LCBbXSksXG4gICAgICAgICAgZGVmaW5pdGlvbiA9IG5ldyBEZWZpbml0aW9uKHBhcnRzKTtcblxuICAgIHJldHVybiBkZWZpbml0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGVmaW5pdGlvbjtcblxuZnVuY3Rpb24gcGFydEZyb21TeW1ib2woc3ltYm9sLCBzaWduaWZpY2FudFRva2VuVHlwZXMsIG5vV2hpdGVzcGFjZSkge1xuICBsZXQgcGFydCA9IHVuZGVmaW5lZDsgLy8vXG5cbiAgUGFydHMuc29tZShmdW5jdGlvbihQYXJ0KSB7XG4gICAgcGFydCA9IFBhcnQuZnJvbVN5bWJvbChzeW1ib2wsIHNpZ25pZmljYW50VG9rZW5UeXBlcywgbm9XaGl0ZXNwYWNlKTtcblxuICAgIGNvbnN0IHBhcnNlZCA9IChwYXJ0ICE9PSBudWxsKTtcblxuICAgIHJldHVybiBwYXJzZWQ7XG4gIH0pO1xuXG4gIHJldHVybiBwYXJ0O1xufVxuIl19