'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easy = require('easy'),
    lexers = require('occam-lexers');

var Example = require('../example'),
    FlorenceParser = require('../florence/parser'),
    grammar = require('../florence/grammar'),
    mappings = require('../florence/mappings');

var Checkbox = easy.Checkbox,
    Textarea = easy.Textarea,
    FlorenceLexer = lexers.FlorenceLexer;


var mappingsCheckboxSelector = '#mappings',
    productionNameTextareaSelector = '#productionName';

var florenceLexer = FlorenceLexer.fromNothing();

var productionName = void 0,
    mappingsCheckbox = void 0,
    productionNameTextarea = void 0;

var FlorenceExample = function () {
      function FlorenceExample() {
            _classCallCheck(this, FlorenceExample);
      }

      _createClass(FlorenceExample, null, [{
            key: 'run',
            value: function run() {
                  mappingsCheckbox = new Checkbox(mappingsCheckboxSelector);
                  productionNameTextarea = new Textarea(productionNameTextareaSelector);

                  var bnfGrammarTextareaValue = grammar; ///

                  Example.setBNFGrammarTextareaValue(bnfGrammarTextareaValue);

                  mappingsCheckbox.onChange(update);

                  productionNameTextarea.onKeyUp(update);

                  Example.onBNFGrammarTextareaKeyUp(update);

                  Example.onContentTextareaKeyUp(update);

                  update();
            }
      }]);

      return FlorenceExample;
}();

function update() {
      var mappingsCheckboxChecked = mappingsCheckbox.isChecked(),
          bnfGrammarTextareaValue = Example.getBNFGrammarTextareaValue(),
          productionNameTextareaValue = productionNameTextarea.getValue(),
          adjustedMappings = mappingsCheckboxChecked ? mappings : {},
          adjustedGrammar = bnfGrammarTextareaValue,
          ///
      productionName = productionNameTextareaValue,
          ///
      florenceParser = FlorenceParser.fromGrammarAndMappings(adjustedGrammar, adjustedMappings),
          production = florenceParser.findProduction(productionName);

      Example.updateParseTreeTextarea(florenceLexer, florenceParser, production);
}

module.exports = FlorenceExample;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9mbG9yZW5jZS5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsImxleGVycyIsIkV4YW1wbGUiLCJGbG9yZW5jZVBhcnNlciIsImdyYW1tYXIiLCJtYXBwaW5ncyIsIkNoZWNrYm94IiwiVGV4dGFyZWEiLCJGbG9yZW5jZUxleGVyIiwibWFwcGluZ3NDaGVja2JveFNlbGVjdG9yIiwicHJvZHVjdGlvbk5hbWVUZXh0YXJlYVNlbGVjdG9yIiwiZmxvcmVuY2VMZXhlciIsImZyb21Ob3RoaW5nIiwicHJvZHVjdGlvbk5hbWUiLCJtYXBwaW5nc0NoZWNrYm94IiwicHJvZHVjdGlvbk5hbWVUZXh0YXJlYSIsIkZsb3JlbmNlRXhhbXBsZSIsImJuZkdyYW1tYXJUZXh0YXJlYVZhbHVlIiwic2V0Qk5GR3JhbW1hclRleHRhcmVhVmFsdWUiLCJvbkNoYW5nZSIsInVwZGF0ZSIsIm9uS2V5VXAiLCJvbkJORkdyYW1tYXJUZXh0YXJlYUtleVVwIiwib25Db250ZW50VGV4dGFyZWFLZXlVcCIsIm1hcHBpbmdzQ2hlY2tib3hDaGVja2VkIiwiaXNDaGVja2VkIiwiZ2V0Qk5GR3JhbW1hclRleHRhcmVhVmFsdWUiLCJwcm9kdWN0aW9uTmFtZVRleHRhcmVhVmFsdWUiLCJnZXRWYWx1ZSIsImFkanVzdGVkTWFwcGluZ3MiLCJhZGp1c3RlZEdyYW1tYXIiLCJmbG9yZW5jZVBhcnNlciIsImZyb21HcmFtbWFyQW5kTWFwcGluZ3MiLCJwcm9kdWN0aW9uIiwiZmluZFByb2R1Y3Rpb24iLCJ1cGRhdGVQYXJzZVRyZWVUZXh0YXJlYSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjtBQUFBLElBQ01DLFNBQVNELFFBQVEsY0FBUixDQURmOztBQUdBLElBQU1FLFVBQVVGLFFBQVEsWUFBUixDQUFoQjtBQUFBLElBQ01HLGlCQUFpQkgsUUFBUSxvQkFBUixDQUR2QjtBQUFBLElBRU1JLFVBQVVKLFFBQVEscUJBQVIsQ0FGaEI7QUFBQSxJQUdNSyxXQUFXTCxRQUFRLHNCQUFSLENBSGpCOztJQUtRTSxRLEdBQXVCUCxJLENBQXZCTyxRO0lBQVVDLFEsR0FBYVIsSSxDQUFiUSxRO0lBQ1ZDLGEsR0FBa0JQLE0sQ0FBbEJPLGE7OztBQUVSLElBQU1DLDJCQUEyQixXQUFqQztBQUFBLElBQ01DLGlDQUFpQyxpQkFEdkM7O0FBR0EsSUFBTUMsZ0JBQWdCSCxjQUFjSSxXQUFkLEVBQXRCOztBQUVBLElBQUlDLHVCQUFKO0FBQUEsSUFDSUMseUJBREo7QUFBQSxJQUVJQywrQkFGSjs7SUFJTUMsZTs7Ozs7OztrQ0FDUztBQUNYRixxQ0FBbUIsSUFBSVIsUUFBSixDQUFhRyx3QkFBYixDQUFuQjtBQUNBTSwyQ0FBeUIsSUFBSVIsUUFBSixDQUFhRyw4QkFBYixDQUF6Qjs7QUFFQSxzQkFBTU8sMEJBQTBCYixPQUFoQyxDQUpXLENBSThCOztBQUV6Q0YsMEJBQVFnQiwwQkFBUixDQUFtQ0QsdUJBQW5DOztBQUVBSCxtQ0FBaUJLLFFBQWpCLENBQTBCQyxNQUExQjs7QUFFQUwseUNBQXVCTSxPQUF2QixDQUErQkQsTUFBL0I7O0FBRUFsQiwwQkFBUW9CLHlCQUFSLENBQWtDRixNQUFsQzs7QUFFQWxCLDBCQUFRcUIsc0JBQVIsQ0FBK0JILE1BQS9COztBQUVBQTtBQUNEOzs7Ozs7QUFHSCxTQUFTQSxNQUFULEdBQWtCO0FBQ2hCLFVBQU1JLDBCQUEwQlYsaUJBQWlCVyxTQUFqQixFQUFoQztBQUFBLFVBQ01SLDBCQUEwQmYsUUFBUXdCLDBCQUFSLEVBRGhDO0FBQUEsVUFFTUMsOEJBQThCWix1QkFBdUJhLFFBQXZCLEVBRnBDO0FBQUEsVUFHTUMsbUJBQW1CTCwwQkFDRW5CLFFBREYsR0FFSSxFQUw3QjtBQUFBLFVBTU15QixrQkFBa0JiLHVCQU54QjtBQUFBLFVBTWlEO0FBQzNDSix1QkFBaUJjLDJCQVB2QjtBQUFBLFVBT29EO0FBQzlDSSx1QkFBaUI1QixlQUFlNkIsc0JBQWYsQ0FBc0NGLGVBQXRDLEVBQXVERCxnQkFBdkQsQ0FSdkI7QUFBQSxVQVNNSSxhQUFhRixlQUFlRyxjQUFmLENBQThCckIsY0FBOUIsQ0FUbkI7O0FBV0FYLGNBQVFpQyx1QkFBUixDQUFnQ3hCLGFBQWhDLEVBQStDb0IsY0FBL0MsRUFBK0RFLFVBQS9EO0FBQ0Q7O0FBRURHLE9BQU9DLE9BQVAsR0FBaUJyQixlQUFqQiIsImZpbGUiOiJmbG9yZW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKSxcbiAgICAgIGxleGVycyA9IHJlcXVpcmUoJ29jY2FtLWxleGVycycpO1xuXG5jb25zdCBFeGFtcGxlID0gcmVxdWlyZSgnLi4vZXhhbXBsZScpLFxuICAgICAgRmxvcmVuY2VQYXJzZXIgPSByZXF1aXJlKCcuLi9mbG9yZW5jZS9wYXJzZXInKSxcbiAgICAgIGdyYW1tYXIgPSByZXF1aXJlKCcuLi9mbG9yZW5jZS9ncmFtbWFyJyksXG4gICAgICBtYXBwaW5ncyA9IHJlcXVpcmUoJy4uL2Zsb3JlbmNlL21hcHBpbmdzJyk7XG5cbmNvbnN0IHsgQ2hlY2tib3gsIFRleHRhcmVhIH0gPSBlYXN5LFxuICAgICAgeyBGbG9yZW5jZUxleGVyIH0gPSBsZXhlcnM7XG5cbmNvbnN0IG1hcHBpbmdzQ2hlY2tib3hTZWxlY3RvciA9ICcjbWFwcGluZ3MnLFxuICAgICAgcHJvZHVjdGlvbk5hbWVUZXh0YXJlYVNlbGVjdG9yID0gJyNwcm9kdWN0aW9uTmFtZSc7XG5cbmNvbnN0IGZsb3JlbmNlTGV4ZXIgPSBGbG9yZW5jZUxleGVyLmZyb21Ob3RoaW5nKCk7XG5cbmxldCBwcm9kdWN0aW9uTmFtZSxcbiAgICBtYXBwaW5nc0NoZWNrYm94LFxuICAgIHByb2R1Y3Rpb25OYW1lVGV4dGFyZWE7XG5cbmNsYXNzIEZsb3JlbmNlRXhhbXBsZSB7XG4gIHN0YXRpYyBydW4oKSB7XG4gICAgbWFwcGluZ3NDaGVja2JveCA9IG5ldyBDaGVja2JveChtYXBwaW5nc0NoZWNrYm94U2VsZWN0b3IpO1xuICAgIHByb2R1Y3Rpb25OYW1lVGV4dGFyZWEgPSBuZXcgVGV4dGFyZWEocHJvZHVjdGlvbk5hbWVUZXh0YXJlYVNlbGVjdG9yKTtcblxuICAgIGNvbnN0IGJuZkdyYW1tYXJUZXh0YXJlYVZhbHVlID0gZ3JhbW1hcjsgLy8vXG5cbiAgICBFeGFtcGxlLnNldEJORkdyYW1tYXJUZXh0YXJlYVZhbHVlKGJuZkdyYW1tYXJUZXh0YXJlYVZhbHVlKTtcblxuICAgIG1hcHBpbmdzQ2hlY2tib3gub25DaGFuZ2UodXBkYXRlKTtcblxuICAgIHByb2R1Y3Rpb25OYW1lVGV4dGFyZWEub25LZXlVcCh1cGRhdGUpO1xuXG4gICAgRXhhbXBsZS5vbkJORkdyYW1tYXJUZXh0YXJlYUtleVVwKHVwZGF0ZSk7XG5cbiAgICBFeGFtcGxlLm9uQ29udGVudFRleHRhcmVhS2V5VXAodXBkYXRlKTtcblxuICAgIHVwZGF0ZSgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgY29uc3QgbWFwcGluZ3NDaGVja2JveENoZWNrZWQgPSBtYXBwaW5nc0NoZWNrYm94LmlzQ2hlY2tlZCgpLFxuICAgICAgICBibmZHcmFtbWFyVGV4dGFyZWFWYWx1ZSA9IEV4YW1wbGUuZ2V0Qk5GR3JhbW1hclRleHRhcmVhVmFsdWUoKSxcbiAgICAgICAgcHJvZHVjdGlvbk5hbWVUZXh0YXJlYVZhbHVlID0gcHJvZHVjdGlvbk5hbWVUZXh0YXJlYS5nZXRWYWx1ZSgpLFxuICAgICAgICBhZGp1c3RlZE1hcHBpbmdzID0gbWFwcGluZ3NDaGVja2JveENoZWNrZWQgPyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwcGluZ3MgOiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgYWRqdXN0ZWRHcmFtbWFyID0gYm5mR3JhbW1hclRleHRhcmVhVmFsdWUsIC8vL1xuICAgICAgICBwcm9kdWN0aW9uTmFtZSA9IHByb2R1Y3Rpb25OYW1lVGV4dGFyZWFWYWx1ZSwgLy8vXG4gICAgICAgIGZsb3JlbmNlUGFyc2VyID0gRmxvcmVuY2VQYXJzZXIuZnJvbUdyYW1tYXJBbmRNYXBwaW5ncyhhZGp1c3RlZEdyYW1tYXIsIGFkanVzdGVkTWFwcGluZ3MpLFxuICAgICAgICBwcm9kdWN0aW9uID0gZmxvcmVuY2VQYXJzZXIuZmluZFByb2R1Y3Rpb24ocHJvZHVjdGlvbk5hbWUpO1xuXG4gIEV4YW1wbGUudXBkYXRlUGFyc2VUcmVlVGV4dGFyZWEoZmxvcmVuY2VMZXhlciwgZmxvcmVuY2VQYXJzZXIsIHByb2R1Y3Rpb24pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlRXhhbXBsZTtcbiJdfQ==