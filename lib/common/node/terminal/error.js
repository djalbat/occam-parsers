'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var necessary = require('necessary');

var TerminalNode = require('../terminal');

var array = necessary.array,
    first = array.first;

var ErrorNode = function (_TerminalNode) {
      _inherits(ErrorNode, _TerminalNode);

      function ErrorNode() {
            _classCallCheck(this, ErrorNode);

            return _possibleConstructorReturn(this, (ErrorNode.__proto__ || Object.getPrototypeOf(ErrorNode)).apply(this, arguments));
      }

      _createClass(ErrorNode, null, [{
            key: 'fromNodesAndRuleName',
            value: function fromNodesAndRuleName(nodes, ruleName) {
                  var firstNode = first(nodes),
                      terminalNode = firstNode,
                      ///
                  significantToken = terminalNode.getSignificantToken(),
                      errorNode = TerminalNode.fromSignificantToken(ErrorNode, significantToken),
                      error = true;

                  significantToken.setError(error);

                  return errorNode;
            }
      }]);

      return ErrorNode;
}(TerminalNode);

module.exports = ErrorNode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9jb21tb24vbm9kZS90ZXJtaW5hbC9lcnJvci5qcyJdLCJuYW1lcyI6WyJuZWNlc3NhcnkiLCJyZXF1aXJlIiwiVGVybWluYWxOb2RlIiwiYXJyYXkiLCJmaXJzdCIsIkVycm9yTm9kZSIsIm5vZGVzIiwicnVsZU5hbWUiLCJmaXJzdE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJzaWduaWZpY2FudFRva2VuIiwiZ2V0U2lnbmlmaWNhbnRUb2tlbiIsImVycm9yTm9kZSIsImZyb21TaWduaWZpY2FudFRva2VuIiwiZXJyb3IiLCJzZXRFcnJvciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxXQUFSLENBQWxCOztBQUVBLElBQU1DLGVBQWVELFFBQVEsYUFBUixDQUFyQjs7QUFFTSxJQUFFRSxLQUFGLEdBQVlILFNBQVosQ0FBRUcsS0FBRjtBQUFBLElBQ0VDLEtBREYsR0FDWUQsS0FEWixDQUNFQyxLQURGOztJQUdBQyxTOzs7Ozs7Ozs7OztpREFDd0JDLEssRUFBT0MsUSxFQUFVO0FBQzNDLHNCQUFNQyxZQUFZSixNQUFNRSxLQUFOLENBQWxCO0FBQUEsc0JBQ01HLGVBQWVELFNBRHJCO0FBQUEsc0JBQ2lDO0FBQzNCRSxxQ0FBbUJELGFBQWFFLG1CQUFiLEVBRnpCO0FBQUEsc0JBR01DLFlBQVlWLGFBQWFXLG9CQUFiLENBQWtDUixTQUFsQyxFQUE2Q0ssZ0JBQTdDLENBSGxCO0FBQUEsc0JBSU1JLFFBQVEsSUFKZDs7QUFNQUosbUNBQWlCSyxRQUFqQixDQUEwQkQsS0FBMUI7O0FBRUEseUJBQU9GLFNBQVA7QUFDRDs7OztFQVhxQlYsWTs7QUFjeEJjLE9BQU9DLE9BQVAsR0FBaUJaLFNBQWpCIiwiZmlsZSI6ImVycm9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgVGVybWluYWxOb2RlID0gcmVxdWlyZSgnLi4vdGVybWluYWwnKTtcblxuY29uc3QgeyBhcnJheSB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBmaXJzdCB9ID0gYXJyYXk7XG5cbmNsYXNzIEVycm9yTm9kZSBleHRlbmRzIFRlcm1pbmFsTm9kZSB7XG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRSdWxlTmFtZShub2RlcywgcnVsZU5hbWUpIHtcbiAgICBjb25zdCBmaXJzdE5vZGUgPSBmaXJzdChub2RlcyksXG4gICAgICAgICAgdGVybWluYWxOb2RlID0gZmlyc3ROb2RlLCAgLy8vXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbiA9IHRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgICAgZXJyb3JOb2RlID0gVGVybWluYWxOb2RlLmZyb21TaWduaWZpY2FudFRva2VuKEVycm9yTm9kZSwgc2lnbmlmaWNhbnRUb2tlbiksXG4gICAgICAgICAgZXJyb3IgPSB0cnVlO1xuXG4gICAgc2lnbmlmaWNhbnRUb2tlbi5zZXRFcnJvcihlcnJvcik7XG5cbiAgICByZXR1cm4gZXJyb3JOb2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXJyb3JOb2RlO1xuIl19