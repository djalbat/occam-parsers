'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NonTerminalNode = function () {
  function NonTerminalNode(childNodes, productionName) {
    _classCallCheck(this, NonTerminalNode);

    this.childNodes = childNodes;
    this.productionName = productionName;
  }

  _createClass(NonTerminalNode, [{
    key: 'getStrArray',
    value: function getStrArray() {
      var strArray = [],
          str = this.productionName + '~',
          strLength = str.length,
          width = strLength,
          ///
      depth = this.getDepth();

      this.childNodes.forEach(function (childNode) {
        var childNodeStrArray = childNode.getStrArray(),
            index = 0;

        childNodeStrArray.forEach(function (str) {
          if (strArray[index] === undefined) {
            strArray[index] = '';
          }

          strArray[index++] += str;
        });

        var lastIndex = index,
            lastChildNodeStr = last(childNodeStrArray),
            lastChildNodeStrLength = lastChildNodeStr.length,
            size = lastChildNodeStrLength,
            ///
        marginStr = marginStrFromSize(size, ',');

        for (index = lastIndex; index < depth; index++) {
          if (strArray[index] === undefined) {
            strArray[index] = '';
          }

          strArray[index] = marginStr + strArray[index];
        }
      });

      var childNodesWidth = strArray.reduce(function (childNodesWidth, str) {
        var strLength = str.length;

        childNodesWidth = Math.max(childNodesWidth, strLength);

        return childNodesWidth;
      }, 0);

      var differenceInWidths = width - childNodesWidth,
          size = Math.abs(differenceInWidths),
          marginStr = marginStrFromSize(size);

      if (differenceInWidths > 0) {
        strArray.forEach(function (str, index) {
          strArray[index] = marginStr + strArray[index];
        });
      }

      strArray.unshift(str);

      if (differenceInWidths < 0) {
        strArray[0] = marginStr + strArray[0];
      }

      return strArray;
    }
  }, {
    key: 'getDepth',
    value: function getDepth() {
      var childNodesDepth = this.childNodes.reduce(function (childNodesDepth, childNode) {
        var childNodeDepth = childNode.getDepth();

        childNodesDepth = Math.max(childNodesDepth, childNodeDepth);

        return childNodesDepth;
      }, 0),
          depth = childNodesDepth + 1;

      return depth;
    }
  }], [{
    key: 'fromNodes',
    value: function fromNodes(nodes, productionName) {
      var childNodes = nodes,
          ///
      nonTerminalNode = new NonTerminalNode(childNodes, productionName);

      nodes = [nonTerminalNode]; ///

      return nodes;
    }
  }]);

  return NonTerminalNode;
}();

module.exports = NonTerminalNode;

function last(array) {
  return array[array.length - 1];
}

function marginStrFromSize(size, spaceCharacter) {
  var marginStr = '';

  spaceCharacter = spaceCharacter || ' ';

  for (var count = 0; count < size; count++) {
    marginStr += spaceCharacter;
  }

  return marginStr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ub2RlL25vblRlcm1pbmFsLmpzIl0sIm5hbWVzIjpbIk5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJwcm9kdWN0aW9uTmFtZSIsInN0ckFycmF5Iiwic3RyIiwic3RyTGVuZ3RoIiwibGVuZ3RoIiwid2lkdGgiLCJkZXB0aCIsImdldERlcHRoIiwiZm9yRWFjaCIsImNoaWxkTm9kZSIsImNoaWxkTm9kZVN0ckFycmF5IiwiZ2V0U3RyQXJyYXkiLCJpbmRleCIsInVuZGVmaW5lZCIsImxhc3RJbmRleCIsImxhc3RDaGlsZE5vZGVTdHIiLCJsYXN0IiwibGFzdENoaWxkTm9kZVN0ckxlbmd0aCIsInNpemUiLCJtYXJnaW5TdHIiLCJtYXJnaW5TdHJGcm9tU2l6ZSIsImNoaWxkTm9kZXNXaWR0aCIsInJlZHVjZSIsIk1hdGgiLCJtYXgiLCJkaWZmZXJlbmNlSW5XaWR0aHMiLCJhYnMiLCJ1bnNoaWZ0IiwiY2hpbGROb2Rlc0RlcHRoIiwiY2hpbGROb2RlRGVwdGgiLCJub2RlcyIsIm5vblRlcm1pbmFsTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcnJheSIsInNwYWNlQ2hhcmFjdGVyIiwiY291bnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsZTtBQUNKLDJCQUFZQyxVQUFaLEVBQXdCQyxjQUF4QixFQUF3QztBQUFBOztBQUN0QyxTQUFLRCxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFNBQUtDLGNBQUwsR0FBc0JBLGNBQXRCO0FBQ0Q7Ozs7a0NBRWE7QUFDWixVQUFJQyxXQUFXLEVBQWY7QUFBQSxVQUNJQyxNQUFNLEtBQUtGLGNBQUwsR0FBc0IsR0FEaEM7QUFBQSxVQUVJRyxZQUFZRCxJQUFJRSxNQUZwQjtBQUFBLFVBR0lDLFFBQVFGLFNBSFo7QUFBQSxVQUd3QjtBQUNwQkcsY0FBUSxLQUFLQyxRQUFMLEVBSlo7O0FBTUEsV0FBS1IsVUFBTCxDQUFnQlMsT0FBaEIsQ0FBd0IsVUFBU0MsU0FBVCxFQUFvQjtBQUMxQyxZQUFJQyxvQkFBb0JELFVBQVVFLFdBQVYsRUFBeEI7QUFBQSxZQUNJQyxRQUFRLENBRFo7O0FBR0FGLDBCQUFrQkYsT0FBbEIsQ0FBMEIsVUFBU04sR0FBVCxFQUFjO0FBQ3RDLGNBQUlELFNBQVNXLEtBQVQsTUFBb0JDLFNBQXhCLEVBQW1DO0FBQ2pDWixxQkFBU1csS0FBVCxJQUFrQixFQUFsQjtBQUNEOztBQUVEWCxtQkFBU1csT0FBVCxLQUFxQlYsR0FBckI7QUFDRCxTQU5EOztBQVFBLFlBQUlZLFlBQVlGLEtBQWhCO0FBQUEsWUFDSUcsbUJBQW1CQyxLQUFLTixpQkFBTCxDQUR2QjtBQUFBLFlBRUlPLHlCQUF5QkYsaUJBQWlCWCxNQUY5QztBQUFBLFlBR0ljLE9BQU9ELHNCQUhYO0FBQUEsWUFHb0M7QUFDaENFLG9CQUFZQyxrQkFBa0JGLElBQWxCLEVBQXdCLEdBQXhCLENBSmhCOztBQU1BLGFBQUtOLFFBQVFFLFNBQWIsRUFBd0JGLFFBQVFOLEtBQWhDLEVBQXVDTSxPQUF2QyxFQUFnRDtBQUM5QyxjQUFJWCxTQUFTVyxLQUFULE1BQW9CQyxTQUF4QixFQUFtQztBQUNqQ1oscUJBQVNXLEtBQVQsSUFBa0IsRUFBbEI7QUFDRDs7QUFFRFgsbUJBQVNXLEtBQVQsSUFBa0JPLFlBQVlsQixTQUFTVyxLQUFULENBQTlCO0FBQ0Q7QUFDRixPQXpCRDs7QUEyQkEsVUFBSVMsa0JBQWtCcEIsU0FBU3FCLE1BQVQsQ0FBZ0IsVUFBU0QsZUFBVCxFQUEwQm5CLEdBQTFCLEVBQStCO0FBQy9ELFlBQUlDLFlBQVlELElBQUlFLE1BQXBCOztBQUVBaUIsMEJBQWtCRSxLQUFLQyxHQUFMLENBQVNILGVBQVQsRUFBMEJsQixTQUExQixDQUFsQjs7QUFFQSxlQUFPa0IsZUFBUDtBQUNELE9BTmlCLEVBTWYsQ0FOZSxDQUF0Qjs7QUFRQSxVQUFJSSxxQkFBcUJwQixRQUFRZ0IsZUFBakM7QUFBQSxVQUNJSCxPQUFPSyxLQUFLRyxHQUFMLENBQVNELGtCQUFULENBRFg7QUFBQSxVQUVJTixZQUFZQyxrQkFBa0JGLElBQWxCLENBRmhCOztBQUlBLFVBQUlPLHFCQUFxQixDQUF6QixFQUE0QjtBQUMxQnhCLGlCQUFTTyxPQUFULENBQWlCLFVBQVNOLEdBQVQsRUFBY1UsS0FBZCxFQUFxQjtBQUNwQ1gsbUJBQVNXLEtBQVQsSUFBa0JPLFlBQVlsQixTQUFTVyxLQUFULENBQTlCO0FBQ0QsU0FGRDtBQUdEOztBQUVEWCxlQUFTMEIsT0FBVCxDQUFpQnpCLEdBQWpCOztBQUVBLFVBQUl1QixxQkFBcUIsQ0FBekIsRUFBNEI7QUFDMUJ4QixpQkFBUyxDQUFULElBQWNrQixZQUFZbEIsU0FBUyxDQUFULENBQTFCO0FBQ0Q7O0FBRUQsYUFBT0EsUUFBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFJMkIsa0JBQWtCLEtBQUs3QixVQUFMLENBQWdCdUIsTUFBaEIsQ0FBdUIsVUFBU00sZUFBVCxFQUEwQm5CLFNBQTFCLEVBQXFDO0FBQzVFLFlBQUlvQixpQkFBaUJwQixVQUFVRixRQUFWLEVBQXJCOztBQUVBcUIsMEJBQWtCTCxLQUFLQyxHQUFMLENBQVNJLGVBQVQsRUFBMEJDLGNBQTFCLENBQWxCOztBQUVBLGVBQU9ELGVBQVA7QUFDRCxPQU5pQixFQU1mLENBTmUsQ0FBdEI7QUFBQSxVQU9JdEIsUUFBUXNCLGtCQUFrQixDQVA5Qjs7QUFTQSxhQUFPdEIsS0FBUDtBQUNEOzs7OEJBRWdCd0IsSyxFQUFPOUIsYyxFQUFnQjtBQUN0QyxVQUFJRCxhQUFhK0IsS0FBakI7QUFBQSxVQUF3QjtBQUNwQkMsd0JBQWtCLElBQUlqQyxlQUFKLENBQW9CQyxVQUFwQixFQUFnQ0MsY0FBaEMsQ0FEdEI7O0FBR0E4QixjQUFRLENBQUNDLGVBQUQsQ0FBUixDQUpzQyxDQUlYOztBQUUzQixhQUFPRCxLQUFQO0FBQ0Q7Ozs7OztBQUdIRSxPQUFPQyxPQUFQLEdBQWlCbkMsZUFBakI7O0FBRUEsU0FBU2tCLElBQVQsQ0FBY2tCLEtBQWQsRUFBcUI7QUFBRSxTQUFPQSxNQUFNQSxNQUFNOUIsTUFBTixHQUFlLENBQXJCLENBQVA7QUFBaUM7O0FBRXhELFNBQVNnQixpQkFBVCxDQUEyQkYsSUFBM0IsRUFBaUNpQixjQUFqQyxFQUFpRDtBQUMvQyxNQUFJaEIsWUFBWSxFQUFoQjs7QUFFQWdCLG1CQUFpQkEsa0JBQWtCLEdBQW5DOztBQUVBLE9BQUssSUFBSUMsUUFBUSxDQUFqQixFQUFvQkEsUUFBUWxCLElBQTVCLEVBQWtDa0IsT0FBbEMsRUFBMkM7QUFDekNqQixpQkFBYWdCLGNBQWI7QUFDRDs7QUFFRCxTQUFPaEIsU0FBUDtBQUNEIiwiZmlsZSI6Im5vblRlcm1pbmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBOb25UZXJtaW5hbE5vZGUge1xuICBjb25zdHJ1Y3RvcihjaGlsZE5vZGVzLCBwcm9kdWN0aW9uTmFtZSkge1xuICAgIHRoaXMuY2hpbGROb2RlcyA9IGNoaWxkTm9kZXM7XG4gICAgdGhpcy5wcm9kdWN0aW9uTmFtZSA9IHByb2R1Y3Rpb25OYW1lO1xuICB9XG4gIFxuICBnZXRTdHJBcnJheSgpIHtcbiAgICB2YXIgc3RyQXJyYXkgPSBbXSxcbiAgICAgICAgc3RyID0gdGhpcy5wcm9kdWN0aW9uTmFtZSArICd+JyxcbiAgICAgICAgc3RyTGVuZ3RoID0gc3RyLmxlbmd0aCxcbiAgICAgICAgd2lkdGggPSBzdHJMZW5ndGgsICAvLy9cbiAgICAgICAgZGVwdGggPSB0aGlzLmdldERlcHRoKCk7XG5cbiAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbihjaGlsZE5vZGUpIHtcbiAgICAgIHZhciBjaGlsZE5vZGVTdHJBcnJheSA9IGNoaWxkTm9kZS5nZXRTdHJBcnJheSgpLFxuICAgICAgICAgIGluZGV4ID0gMDtcblxuICAgICAgY2hpbGROb2RlU3RyQXJyYXkuZm9yRWFjaChmdW5jdGlvbihzdHIpIHtcbiAgICAgICAgaWYgKHN0ckFycmF5W2luZGV4XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgc3RyQXJyYXlbaW5kZXhdID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHN0ckFycmF5W2luZGV4KytdICs9IHN0cjtcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgbGFzdEluZGV4ID0gaW5kZXgsXG4gICAgICAgICAgbGFzdENoaWxkTm9kZVN0ciA9IGxhc3QoY2hpbGROb2RlU3RyQXJyYXkpLFxuICAgICAgICAgIGxhc3RDaGlsZE5vZGVTdHJMZW5ndGggPSBsYXN0Q2hpbGROb2RlU3RyLmxlbmd0aCxcbiAgICAgICAgICBzaXplID0gbGFzdENoaWxkTm9kZVN0ckxlbmd0aCwgIC8vL1xuICAgICAgICAgIG1hcmdpblN0ciA9IG1hcmdpblN0ckZyb21TaXplKHNpemUsICcsJyk7XG5cbiAgICAgIGZvciAoaW5kZXggPSBsYXN0SW5kZXg7IGluZGV4IDwgZGVwdGg7IGluZGV4KyspIHtcbiAgICAgICAgaWYgKHN0ckFycmF5W2luZGV4XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgc3RyQXJyYXlbaW5kZXhdID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBzdHJBcnJheVtpbmRleF0gPSBtYXJnaW5TdHIgKyBzdHJBcnJheVtpbmRleF07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgY2hpbGROb2Rlc1dpZHRoID0gc3RyQXJyYXkucmVkdWNlKGZ1bmN0aW9uKGNoaWxkTm9kZXNXaWR0aCwgc3RyKSB7XG4gICAgICAgICAgdmFyIHN0ckxlbmd0aCA9IHN0ci5sZW5ndGg7XG5cbiAgICAgICAgICBjaGlsZE5vZGVzV2lkdGggPSBNYXRoLm1heChjaGlsZE5vZGVzV2lkdGgsIHN0ckxlbmd0aCk7XG5cbiAgICAgICAgICByZXR1cm4gY2hpbGROb2Rlc1dpZHRoO1xuICAgICAgICB9LCAwKTtcblxuICAgIHZhciBkaWZmZXJlbmNlSW5XaWR0aHMgPSB3aWR0aCAtIGNoaWxkTm9kZXNXaWR0aCxcbiAgICAgICAgc2l6ZSA9IE1hdGguYWJzKGRpZmZlcmVuY2VJbldpZHRocyksXG4gICAgICAgIG1hcmdpblN0ciA9IG1hcmdpblN0ckZyb21TaXplKHNpemUpO1xuXG4gICAgaWYgKGRpZmZlcmVuY2VJbldpZHRocyA+IDApIHtcbiAgICAgIHN0ckFycmF5LmZvckVhY2goZnVuY3Rpb24oc3RyLCBpbmRleCkge1xuICAgICAgICBzdHJBcnJheVtpbmRleF0gPSBtYXJnaW5TdHIgKyBzdHJBcnJheVtpbmRleF07XG4gICAgICB9KVxuICAgIH1cblxuICAgIHN0ckFycmF5LnVuc2hpZnQoc3RyKTtcblxuICAgIGlmIChkaWZmZXJlbmNlSW5XaWR0aHMgPCAwKSB7XG4gICAgICBzdHJBcnJheVswXSA9IG1hcmdpblN0ciArIHN0ckFycmF5WzBdO1xuICAgIH1cblxuICAgIHJldHVybiBzdHJBcnJheTtcbiAgfVxuXG4gIGdldERlcHRoKCkge1xuICAgIHZhciBjaGlsZE5vZGVzRGVwdGggPSB0aGlzLmNoaWxkTm9kZXMucmVkdWNlKGZ1bmN0aW9uKGNoaWxkTm9kZXNEZXB0aCwgY2hpbGROb2RlKSB7XG4gICAgICAgICAgdmFyIGNoaWxkTm9kZURlcHRoID0gY2hpbGROb2RlLmdldERlcHRoKCk7XG5cbiAgICAgICAgICBjaGlsZE5vZGVzRGVwdGggPSBNYXRoLm1heChjaGlsZE5vZGVzRGVwdGgsIGNoaWxkTm9kZURlcHRoKTtcblxuICAgICAgICAgIHJldHVybiBjaGlsZE5vZGVzRGVwdGg7XG4gICAgICAgIH0sIDApLFxuICAgICAgICBkZXB0aCA9IGNoaWxkTm9kZXNEZXB0aCArIDE7XG5cbiAgICByZXR1cm4gZGVwdGg7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVzKG5vZGVzLCBwcm9kdWN0aW9uTmFtZSkge1xuICAgIHZhciBjaGlsZE5vZGVzID0gbm9kZXMsIC8vL1xuICAgICAgICBub25UZXJtaW5hbE5vZGUgPSBuZXcgTm9uVGVybWluYWxOb2RlKGNoaWxkTm9kZXMsIHByb2R1Y3Rpb25OYW1lKTtcblxuICAgIG5vZGVzID0gW25vblRlcm1pbmFsTm9kZV07IC8vL1xuICAgIFxuICAgIHJldHVybiBub2RlcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vblRlcm1pbmFsTm9kZTtcblxuZnVuY3Rpb24gbGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07IH1cblxuZnVuY3Rpb24gbWFyZ2luU3RyRnJvbVNpemUoc2l6ZSwgc3BhY2VDaGFyYWN0ZXIpIHtcbiAgdmFyIG1hcmdpblN0ciA9ICcnO1xuXG4gIHNwYWNlQ2hhcmFjdGVyID0gc3BhY2VDaGFyYWN0ZXIgfHwgJyAnO1xuXG4gIGZvciAodmFyIGNvdW50ID0gMDsgY291bnQgPCBzaXplOyBjb3VudCsrKSB7XG4gICAgbWFyZ2luU3RyICs9IHNwYWNlQ2hhcmFjdGVyO1xuICB9XG5cbiAgcmV0dXJuIG1hcmdpblN0cjtcbn1cbiJdfQ==