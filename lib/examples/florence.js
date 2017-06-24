'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easy = require('easy'),
    lexers = require('occam-lexers');

var Example = require('../example'),
    grammar = require('../florence/grammar'),
    mappings = require('../florence/mappings'),
    FlorenceParser = require('../florence/parser');

var Checkbox = easy.Checkbox,
    Input = easy.Input,
    FlorenceLexer = lexers.FlorenceLexer;


var mappingsCheckboxSelector = '#mappings',
    productionNameInputSelector = '#productionName';

var productionName = void 0,
    mappingsCheckbox = void 0,
    productionNameInput = void 0;

var defaultMappings = mappings; ///

var FlorenceExample = function () {
      function FlorenceExample() {
            _classCallCheck(this, FlorenceExample);
      }

      _createClass(FlorenceExample, null, [{
            key: 'run',
            value: function run() {
                  mappingsCheckbox = new Checkbox(mappingsCheckboxSelector);
                  productionNameInput = new Input(productionNameInputSelector);

                  var lexicalGrammar = FlorenceLexer.grammar,
                      lexicalGrammarTextareaValue = JSON.stringify(lexicalGrammar, null, '  '),
                      ///
                  bnfGrammarTextareaValue = grammar,
                      ///
                  contentTextareaValue = ''; ///

                  Example.setContentTextareaValue(contentTextareaValue);

                  Example.setLexicalGrammarTextareaValue(lexicalGrammarTextareaValue);

                  Example.setExtendedBNFGrammarTextareaValue(bnfGrammarTextareaValue);

                  mappingsCheckbox.onChange(update);

                  productionNameInput.onKeyUp(update);

                  Example.onContentTextareaKeyUp(update);

                  Example.onLexicalGrammarTextareaKeyUp(update);

                  Example.onExtendedBNFGrammarTextareaKeyUp(update);

                  update();
            }
      }]);

      return FlorenceExample;
}();

module.exports = FlorenceExample;

function update() {
      var productionNameInputValue = productionNameInput.getValue(),
          productionName = productionNameInputValue;

      Example.updateLexer(FlorenceLexer);

      Example.updateParser(function (grammar) {
            var mappingsCheckboxChecked = mappingsCheckbox.isChecked(),
                mappings = mappingsCheckboxChecked ? defaultMappings : {},
                florenceParser = FlorenceParser.fromGrammarAndMappings(grammar, mappings),
                parser = florenceParser; ///

            return parser;
      });

      Example.updateParseTree(productionName);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9mbG9yZW5jZS5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsImxleGVycyIsIkV4YW1wbGUiLCJncmFtbWFyIiwibWFwcGluZ3MiLCJGbG9yZW5jZVBhcnNlciIsIkNoZWNrYm94IiwiSW5wdXQiLCJGbG9yZW5jZUxleGVyIiwibWFwcGluZ3NDaGVja2JveFNlbGVjdG9yIiwicHJvZHVjdGlvbk5hbWVJbnB1dFNlbGVjdG9yIiwicHJvZHVjdGlvbk5hbWUiLCJtYXBwaW5nc0NoZWNrYm94IiwicHJvZHVjdGlvbk5hbWVJbnB1dCIsImRlZmF1bHRNYXBwaW5ncyIsIkZsb3JlbmNlRXhhbXBsZSIsImxleGljYWxHcmFtbWFyIiwibGV4aWNhbEdyYW1tYXJUZXh0YXJlYVZhbHVlIiwiSlNPTiIsInN0cmluZ2lmeSIsImJuZkdyYW1tYXJUZXh0YXJlYVZhbHVlIiwiY29udGVudFRleHRhcmVhVmFsdWUiLCJzZXRDb250ZW50VGV4dGFyZWFWYWx1ZSIsInNldExleGljYWxHcmFtbWFyVGV4dGFyZWFWYWx1ZSIsInNldEV4dGVuZGVkQk5GR3JhbW1hclRleHRhcmVhVmFsdWUiLCJvbkNoYW5nZSIsInVwZGF0ZSIsIm9uS2V5VXAiLCJvbkNvbnRlbnRUZXh0YXJlYUtleVVwIiwib25MZXhpY2FsR3JhbW1hclRleHRhcmVhS2V5VXAiLCJvbkV4dGVuZGVkQk5GR3JhbW1hclRleHRhcmVhS2V5VXAiLCJtb2R1bGUiLCJleHBvcnRzIiwicHJvZHVjdGlvbk5hbWVJbnB1dFZhbHVlIiwiZ2V0VmFsdWUiLCJ1cGRhdGVMZXhlciIsInVwZGF0ZVBhcnNlciIsIm1hcHBpbmdzQ2hlY2tib3hDaGVja2VkIiwiaXNDaGVja2VkIiwiZmxvcmVuY2VQYXJzZXIiLCJmcm9tR3JhbW1hckFuZE1hcHBpbmdzIiwicGFyc2VyIiwidXBkYXRlUGFyc2VUcmVlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7QUFBQSxJQUNNQyxTQUFTRCxRQUFRLGNBQVIsQ0FEZjs7QUFHQSxJQUFNRSxVQUFVRixRQUFRLFlBQVIsQ0FBaEI7QUFBQSxJQUNNRyxVQUFVSCxRQUFRLHFCQUFSLENBRGhCO0FBQUEsSUFFTUksV0FBV0osUUFBUSxzQkFBUixDQUZqQjtBQUFBLElBR01LLGlCQUFpQkwsUUFBUSxvQkFBUixDQUh2Qjs7SUFLUU0sUSxHQUFvQlAsSSxDQUFwQk8sUTtJQUFVQyxLLEdBQVVSLEksQ0FBVlEsSztJQUNWQyxhLEdBQWtCUCxNLENBQWxCTyxhOzs7QUFFUixJQUFNQywyQkFBMkIsV0FBakM7QUFBQSxJQUNNQyw4QkFBOEIsaUJBRHBDOztBQUdBLElBQUlDLHVCQUFKO0FBQUEsSUFDSUMseUJBREo7QUFBQSxJQUVJQyw0QkFGSjs7QUFJQSxJQUFNQyxrQkFBa0JWLFFBQXhCLEMsQ0FBa0M7O0lBRTVCVyxlOzs7Ozs7O2tDQUNTO0FBQ1hILHFDQUFtQixJQUFJTixRQUFKLENBQWFHLHdCQUFiLENBQW5CO0FBQ0FJLHdDQUFzQixJQUFJTixLQUFKLENBQVVHLDJCQUFWLENBQXRCOztBQUVBLHNCQUFNTSxpQkFBaUJSLGNBQWNMLE9BQXJDO0FBQUEsc0JBQ01jLDhCQUE4QkMsS0FBS0MsU0FBTCxDQUFlSCxjQUFmLEVBQStCLElBQS9CLEVBQXFDLElBQXJDLENBRHBDO0FBQUEsc0JBQ2dGO0FBQzFFSSw0Q0FBMEJqQixPQUZoQztBQUFBLHNCQUUwQztBQUNwQ2tCLHlDQUF1QixFQUg3QixDQUpXLENBT3NCOztBQUVqQ25CLDBCQUFRb0IsdUJBQVIsQ0FBZ0NELG9CQUFoQzs7QUFFQW5CLDBCQUFRcUIsOEJBQVIsQ0FBdUNOLDJCQUF2Qzs7QUFFQWYsMEJBQVFzQixrQ0FBUixDQUEyQ0osdUJBQTNDOztBQUVBUixtQ0FBaUJhLFFBQWpCLENBQTBCQyxNQUExQjs7QUFFQWIsc0NBQW9CYyxPQUFwQixDQUE0QkQsTUFBNUI7O0FBRUF4QiwwQkFBUTBCLHNCQUFSLENBQStCRixNQUEvQjs7QUFFQXhCLDBCQUFRMkIsNkJBQVIsQ0FBc0NILE1BQXRDOztBQUVBeEIsMEJBQVE0QixpQ0FBUixDQUEwQ0osTUFBMUM7O0FBRUFBO0FBQ0Q7Ozs7OztBQUdISyxPQUFPQyxPQUFQLEdBQWlCakIsZUFBakI7O0FBRUEsU0FBU1csTUFBVCxHQUFrQjtBQUNoQixVQUFNTywyQkFBMkJwQixvQkFBb0JxQixRQUFwQixFQUFqQztBQUFBLFVBQ012QixpQkFBaUJzQix3QkFEdkI7O0FBR0EvQixjQUFRaUMsV0FBUixDQUFvQjNCLGFBQXBCOztBQUVBTixjQUFRa0MsWUFBUixDQUFxQixVQUFTakMsT0FBVCxFQUFrQjtBQUNyQyxnQkFBTWtDLDBCQUEwQnpCLGlCQUFpQjBCLFNBQWpCLEVBQWhDO0FBQUEsZ0JBQ01sQyxXQUFXaUMsMEJBQ0N2QixlQURELEdBRUcsRUFIcEI7QUFBQSxnQkFJTXlCLGlCQUFpQmxDLGVBQWVtQyxzQkFBZixDQUFzQ3JDLE9BQXRDLEVBQStDQyxRQUEvQyxDQUp2QjtBQUFBLGdCQUtNcUMsU0FBU0YsY0FMZixDQURxQyxDQU1MOztBQUVoQyxtQkFBT0UsTUFBUDtBQUNELE9BVEQ7O0FBV0F2QyxjQUFRd0MsZUFBUixDQUF3Qi9CLGNBQXhCO0FBQ0QiLCJmaWxlIjoiZmxvcmVuY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5JyksXG4gICAgICBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKTtcblxuY29uc3QgRXhhbXBsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGUnKSxcbiAgICAgIGdyYW1tYXIgPSByZXF1aXJlKCcuLi9mbG9yZW5jZS9ncmFtbWFyJyksXG4gICAgICBtYXBwaW5ncyA9IHJlcXVpcmUoJy4uL2Zsb3JlbmNlL21hcHBpbmdzJyksXG4gICAgICBGbG9yZW5jZVBhcnNlciA9IHJlcXVpcmUoJy4uL2Zsb3JlbmNlL3BhcnNlcicpO1xuXG5jb25zdCB7IENoZWNrYm94LCBJbnB1dCB9ID0gZWFzeSxcbiAgICAgIHsgRmxvcmVuY2VMZXhlciB9ID0gbGV4ZXJzO1xuXG5jb25zdCBtYXBwaW5nc0NoZWNrYm94U2VsZWN0b3IgPSAnI21hcHBpbmdzJyxcbiAgICAgIHByb2R1Y3Rpb25OYW1lSW5wdXRTZWxlY3RvciA9ICcjcHJvZHVjdGlvbk5hbWUnO1xuXG5sZXQgcHJvZHVjdGlvbk5hbWUsXG4gICAgbWFwcGluZ3NDaGVja2JveCxcbiAgICBwcm9kdWN0aW9uTmFtZUlucHV0O1xuXG5jb25zdCBkZWZhdWx0TWFwcGluZ3MgPSBtYXBwaW5nczsgLy8vXG5cbmNsYXNzIEZsb3JlbmNlRXhhbXBsZSB7XG4gIHN0YXRpYyBydW4oKSB7XG4gICAgbWFwcGluZ3NDaGVja2JveCA9IG5ldyBDaGVja2JveChtYXBwaW5nc0NoZWNrYm94U2VsZWN0b3IpO1xuICAgIHByb2R1Y3Rpb25OYW1lSW5wdXQgPSBuZXcgSW5wdXQocHJvZHVjdGlvbk5hbWVJbnB1dFNlbGVjdG9yKTtcblxuICAgIGNvbnN0IGxleGljYWxHcmFtbWFyID0gRmxvcmVuY2VMZXhlci5ncmFtbWFyLFxuICAgICAgICAgIGxleGljYWxHcmFtbWFyVGV4dGFyZWFWYWx1ZSA9IEpTT04uc3RyaW5naWZ5KGxleGljYWxHcmFtbWFyLCBudWxsLCAnICAnKSwgLy8vXG4gICAgICAgICAgYm5mR3JhbW1hclRleHRhcmVhVmFsdWUgPSBncmFtbWFyLCAgLy8vXG4gICAgICAgICAgY29udGVudFRleHRhcmVhVmFsdWUgPSAnJzsgLy8vXG5cbiAgICBFeGFtcGxlLnNldENvbnRlbnRUZXh0YXJlYVZhbHVlKGNvbnRlbnRUZXh0YXJlYVZhbHVlKTtcblxuICAgIEV4YW1wbGUuc2V0TGV4aWNhbEdyYW1tYXJUZXh0YXJlYVZhbHVlKGxleGljYWxHcmFtbWFyVGV4dGFyZWFWYWx1ZSk7XG5cbiAgICBFeGFtcGxlLnNldEV4dGVuZGVkQk5GR3JhbW1hclRleHRhcmVhVmFsdWUoYm5mR3JhbW1hclRleHRhcmVhVmFsdWUpO1xuXG4gICAgbWFwcGluZ3NDaGVja2JveC5vbkNoYW5nZSh1cGRhdGUpO1xuXG4gICAgcHJvZHVjdGlvbk5hbWVJbnB1dC5vbktleVVwKHVwZGF0ZSk7XG5cbiAgICBFeGFtcGxlLm9uQ29udGVudFRleHRhcmVhS2V5VXAodXBkYXRlKTtcblxuICAgIEV4YW1wbGUub25MZXhpY2FsR3JhbW1hclRleHRhcmVhS2V5VXAodXBkYXRlKTtcblxuICAgIEV4YW1wbGUub25FeHRlbmRlZEJORkdyYW1tYXJUZXh0YXJlYUtleVVwKHVwZGF0ZSk7XG5cbiAgICB1cGRhdGUoKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZsb3JlbmNlRXhhbXBsZTtcblxuZnVuY3Rpb24gdXBkYXRlKCkge1xuICBjb25zdCBwcm9kdWN0aW9uTmFtZUlucHV0VmFsdWUgPSBwcm9kdWN0aW9uTmFtZUlucHV0LmdldFZhbHVlKCksXG4gICAgICAgIHByb2R1Y3Rpb25OYW1lID0gcHJvZHVjdGlvbk5hbWVJbnB1dFZhbHVlO1xuXG4gIEV4YW1wbGUudXBkYXRlTGV4ZXIoRmxvcmVuY2VMZXhlcik7XG5cbiAgRXhhbXBsZS51cGRhdGVQYXJzZXIoZnVuY3Rpb24oZ3JhbW1hcikge1xuICAgIGNvbnN0IG1hcHBpbmdzQ2hlY2tib3hDaGVja2VkID0gbWFwcGluZ3NDaGVja2JveC5pc0NoZWNrZWQoKSxcbiAgICAgICAgICBtYXBwaW5ncyA9IG1hcHBpbmdzQ2hlY2tib3hDaGVja2VkID9cbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TWFwcGluZ3MgOlxuICAgICAgICAgICAgICAgICAgICAgICAge30sXG4gICAgICAgICAgZmxvcmVuY2VQYXJzZXIgPSBGbG9yZW5jZVBhcnNlci5mcm9tR3JhbW1hckFuZE1hcHBpbmdzKGdyYW1tYXIsIG1hcHBpbmdzKSwgICAgXG4gICAgICAgICAgcGFyc2VyID0gZmxvcmVuY2VQYXJzZXI7ICAvLy9cbiAgICBcbiAgICByZXR1cm4gcGFyc2VyO1xuICB9KTtcblxuICBFeGFtcGxlLnVwZGF0ZVBhcnNlVHJlZShwcm9kdWN0aW9uTmFtZSk7XG59XG4iXX0=