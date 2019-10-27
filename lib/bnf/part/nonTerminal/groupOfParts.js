'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var partTypes = require('../../partTypes'),
    arrayUtilities = require('../../../utilities/array'),
    NonTerminalPart = require('../../part/nonTerminal');

var allButFirstAndLast = arrayUtilities.allButFirstAndLast,
    GroupOfPartsPartType = partTypes.GroupOfPartsPartType;

var GroupOfPartsPart = function (_NonTerminalPart) {
  _inherits(GroupOfPartsPart, _NonTerminalPart);

  function GroupOfPartsPart(parts) {
    _classCallCheck(this, GroupOfPartsPart);

    var type = GroupOfPartsPartType; ///

    var _this = _possibleConstructorReturn(this, (GroupOfPartsPart.__proto__ || Object.getPrototypeOf(GroupOfPartsPart)).call(this, type));

    _this.parts = parts;
    return _this;
  }

  _createClass(GroupOfPartsPart, [{
    key: 'getParts',
    value: function getParts() {
      return this.parts;
    }
  }, {
    key: 'parse',
    value: function parse(configuration) {
      var nodes = [];

      var savedIndex = configuration.getSavedIndex(),
          parsed = this.parts.every(function (part) {
        var partNodeOrNodes = part.parse(configuration);

        if (partNodeOrNodes !== null) {
          nodes = nodes.concat(partNodeOrNodes);

          return true;
        }
      });

      if (!parsed) {
        configuration.backtrack(savedIndex);

        nodes = null;
      }

      return nodes;
    }
  }, {
    key: 'asString',
    value: function asString() {
      var partsString = this.parts.reduce(function (partsString, part) {
        var partString = part.asString();

        if (partsString === null) {
          partsString = partString;
        } else {
          partsString = partsString + ' ' + partString;
        }

        return partsString;
      }, null),
          string = '( ' + partsString + ' )';

      return string;
    }
  }, {
    key: 'clone',
    value: function clone() {
      return _get(GroupOfPartsPart.prototype.__proto__ || Object.getPrototypeOf(GroupOfPartsPart.prototype), 'clone', this).call(this, GroupOfPartsPart, this.parts);
    }
  }], [{
    key: 'fromNodes',
    value: function fromNodes(nodes) {
      var allButFirstAndLastNodes = allButFirstAndLast(nodes);

      nodes = allButFirstAndLastNodes; ///

      var nonWhitespace = false,
          lookAhead = false,
          parts = nodes.map(function (node) {
        var part = node.generatePart(nonWhitespace, lookAhead);

        return part;
      }),
          groupOfPartsPart = new GroupOfPartsPart(parts);

      return groupOfPartsPart;
    }
  }]);

  return GroupOfPartsPart;
}(NonTerminalPart);

module.exports = GroupOfPartsPart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9ibmYvcGFydC9ub25UZXJtaW5hbC9ncm91cE9mUGFydHMuanMiXSwibmFtZXMiOlsicGFydFR5cGVzIiwicmVxdWlyZSIsImFycmF5VXRpbGl0aWVzIiwiTm9uVGVybWluYWxQYXJ0IiwiYWxsQnV0Rmlyc3RBbmRMYXN0IiwiR3JvdXBPZlBhcnRzUGFydFR5cGUiLCJHcm91cE9mUGFydHNQYXJ0IiwicGFydHMiLCJ0eXBlIiwiY29uZmlndXJhdGlvbiIsIm5vZGVzIiwic2F2ZWRJbmRleCIsImdldFNhdmVkSW5kZXgiLCJwYXJzZWQiLCJldmVyeSIsInBhcnQiLCJwYXJ0Tm9kZU9yTm9kZXMiLCJwYXJzZSIsImNvbmNhdCIsImJhY2t0cmFjayIsInBhcnRzU3RyaW5nIiwicmVkdWNlIiwicGFydFN0cmluZyIsImFzU3RyaW5nIiwic3RyaW5nIiwiYWxsQnV0Rmlyc3RBbmRMYXN0Tm9kZXMiLCJub25XaGl0ZXNwYWNlIiwibG9va0FoZWFkIiwibWFwIiwibm9kZSIsImdlbmVyYXRlUGFydCIsImdyb3VwT2ZQYXJ0c1BhcnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxpQkFBUixDQUFsQjtBQUFBLElBQ01DLGlCQUFpQkQsUUFBUSwwQkFBUixDQUR2QjtBQUFBLElBRU1FLGtCQUFrQkYsUUFBUSx3QkFBUixDQUZ4Qjs7QUFJTSxJQUFFRyxrQkFBRixHQUF5QkYsY0FBekIsQ0FBRUUsa0JBQUY7QUFBQSxJQUNFQyxvQkFERixHQUMyQkwsU0FEM0IsQ0FDRUssb0JBREY7O0lBR0FDLGdCOzs7QUFDSiw0QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixRQUFNQyxPQUFPSCxvQkFBYixDQURpQixDQUNrQjs7QUFEbEIsb0lBR1hHLElBSFc7O0FBS2pCLFVBQUtELEtBQUwsR0FBYUEsS0FBYjtBQUxpQjtBQU1sQjs7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0EsS0FBWjtBQUNEOzs7MEJBRUtFLGEsRUFBZTtBQUNuQixVQUFJQyxRQUFRLEVBQVo7O0FBRUEsVUFBTUMsYUFBYUYsY0FBY0csYUFBZCxFQUFuQjtBQUFBLFVBQ01DLFNBQVMsS0FBS04sS0FBTCxDQUFXTyxLQUFYLENBQWlCLFVBQVNDLElBQVQsRUFBZTtBQUN2QyxZQUFNQyxrQkFBa0JELEtBQUtFLEtBQUwsQ0FBV1IsYUFBWCxDQUF4Qjs7QUFFQSxZQUFJTyxvQkFBb0IsSUFBeEIsRUFBOEI7QUFDNUJOLGtCQUFRQSxNQUFNUSxNQUFOLENBQWFGLGVBQWIsQ0FBUjs7QUFFQSxpQkFBTyxJQUFQO0FBQ0Q7QUFDRixPQVJRLENBRGY7O0FBV0EsVUFBSSxDQUFDSCxNQUFMLEVBQWE7QUFDWEosc0JBQWNVLFNBQWQsQ0FBd0JSLFVBQXhCOztBQUVBRCxnQkFBUSxJQUFSO0FBQ0Q7O0FBRUQsYUFBT0EsS0FBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFNVSxjQUFjLEtBQUtiLEtBQUwsQ0FBV2MsTUFBWCxDQUFrQixVQUFTRCxXQUFULEVBQXNCTCxJQUF0QixFQUE0QjtBQUMxRCxZQUFNTyxhQUFhUCxLQUFLUSxRQUFMLEVBQW5COztBQUVBLFlBQUlILGdCQUFnQixJQUFwQixFQUEwQjtBQUN4QkEsd0JBQWNFLFVBQWQ7QUFDRCxTQUZELE1BRU87QUFDTEYsd0JBQWlCQSxXQUFqQixTQUFnQ0UsVUFBaEM7QUFDRDs7QUFFRCxlQUFPRixXQUFQO0FBQ0QsT0FWYSxFQVVYLElBVlcsQ0FBcEI7QUFBQSxVQVdNSSxnQkFBY0osV0FBZCxPQVhOOztBQWFBLGFBQU9JLE1BQVA7QUFDRDs7OzRCQUVPO0FBQUUsdUlBQW1CbEIsZ0JBQW5CLEVBQXFDLEtBQUtDLEtBQTFDO0FBQW1EOzs7OEJBRTVDRyxLLEVBQU87QUFDdEIsVUFBTWUsMEJBQTBCckIsbUJBQW1CTSxLQUFuQixDQUFoQzs7QUFFQUEsY0FBUWUsdUJBQVIsQ0FIc0IsQ0FHWTs7QUFFbEMsVUFBTUMsZ0JBQWdCLEtBQXRCO0FBQUEsVUFDTUMsWUFBWSxLQURsQjtBQUFBLFVBRU1wQixRQUFRRyxNQUFNa0IsR0FBTixDQUFVLFVBQVNDLElBQVQsRUFBZTtBQUMvQixZQUFNZCxPQUFPYyxLQUFLQyxZQUFMLENBQWtCSixhQUFsQixFQUFpQ0MsU0FBakMsQ0FBYjs7QUFFQSxlQUFPWixJQUFQO0FBQ0QsT0FKTyxDQUZkO0FBQUEsVUFPTWdCLG1CQUFtQixJQUFJekIsZ0JBQUosQ0FBcUJDLEtBQXJCLENBUHpCOztBQVNBLGFBQU93QixnQkFBUDtBQUNEOzs7O0VBdEU0QjVCLGU7O0FBeUUvQjZCLE9BQU9DLE9BQVAsR0FBaUIzQixnQkFBakIiLCJmaWxlIjoiZ3JvdXBPZlBhcnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXJ0VHlwZXMgPSByZXF1aXJlKCcuLi8uLi9wYXJ0VHlwZXMnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICBOb25UZXJtaW5hbFBhcnQgPSByZXF1aXJlKCcuLi8uLi9wYXJ0L25vblRlcm1pbmFsJyk7XG5cbmNvbnN0IHsgYWxsQnV0Rmlyc3RBbmRMYXN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgR3JvdXBPZlBhcnRzUGFydFR5cGUgfSA9IHBhcnRUeXBlcztcblxuY2xhc3MgR3JvdXBPZlBhcnRzUGFydCBleHRlbmRzIE5vblRlcm1pbmFsUGFydCB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzKSB7XG4gICAgY29uc3QgdHlwZSA9IEdyb3VwT2ZQYXJ0c1BhcnRUeXBlOyAvLy9cblxuICAgIHN1cGVyKHR5cGUpO1xuXG4gICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xuICB9XG5cbiAgZ2V0UGFydHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFydHM7XG4gIH1cblxuICBwYXJzZShjb25maWd1cmF0aW9uKSB7XG4gICAgbGV0IG5vZGVzID0gW107XG5cbiAgICBjb25zdCBzYXZlZEluZGV4ID0gY29uZmlndXJhdGlvbi5nZXRTYXZlZEluZGV4KCksXG4gICAgICAgICAgcGFyc2VkID0gdGhpcy5wYXJ0cy5ldmVyeShmdW5jdGlvbihwYXJ0KSB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0Tm9kZU9yTm9kZXMgPSBwYXJ0LnBhcnNlKGNvbmZpZ3VyYXRpb24pO1xuXG4gICAgICAgICAgICBpZiAocGFydE5vZGVPck5vZGVzICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KHBhcnROb2RlT3JOb2Rlcyk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoIXBhcnNlZCkge1xuICAgICAgY29uZmlndXJhdGlvbi5iYWNrdHJhY2soc2F2ZWRJbmRleCk7XG5cbiAgICAgIG5vZGVzID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBwYXJ0c1N0cmluZyA9IHRoaXMucGFydHMucmVkdWNlKGZ1bmN0aW9uKHBhcnRzU3RyaW5nLCBwYXJ0KSB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0U3RyaW5nID0gcGFydC5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICBpZiAocGFydHNTdHJpbmcgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBwYXJ0U3RyaW5nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGFydHNTdHJpbmcgPSBgJHtwYXJ0c1N0cmluZ30gJHtwYXJ0U3RyaW5nfWA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBwYXJ0c1N0cmluZztcbiAgICAgICAgICB9LCBudWxsKSxcbiAgICAgICAgICBzdHJpbmcgPSBgKCAke3BhcnRzU3RyaW5nfSApYDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKEdyb3VwT2ZQYXJ0c1BhcnQsIHRoaXMucGFydHMpOyB9XG5cbiAgc3RhdGljIGZyb21Ob2Rlcyhub2Rlcykge1xuICAgIGNvbnN0IGFsbEJ1dEZpcnN0QW5kTGFzdE5vZGVzID0gYWxsQnV0Rmlyc3RBbmRMYXN0KG5vZGVzKTtcblxuICAgIG5vZGVzID0gYWxsQnV0Rmlyc3RBbmRMYXN0Tm9kZXM7ICAvLy9cblxuICAgIGNvbnN0IG5vbldoaXRlc3BhY2UgPSBmYWxzZSxcbiAgICAgICAgICBsb29rQWhlYWQgPSBmYWxzZSxcbiAgICAgICAgICBwYXJ0cyA9IG5vZGVzLm1hcChmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0ID0gbm9kZS5nZW5lcmF0ZVBhcnQobm9uV2hpdGVzcGFjZSwgbG9va0FoZWFkKTtcblxuICAgICAgICAgICAgcmV0dXJuIHBhcnQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZ3JvdXBPZlBhcnRzUGFydCA9IG5ldyBHcm91cE9mUGFydHNQYXJ0KHBhcnRzKTtcblxuICAgIHJldHVybiBncm91cE9mUGFydHNQYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR3JvdXBPZlBhcnRzUGFydDtcbiJdfQ==