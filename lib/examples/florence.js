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
    Textarea = easy.Textarea,
    FlorenceLexer = lexers.FlorenceLexer;


var mappingsCheckboxSelector = '#mappings',
    productionNameTextareaSelector = '#productionName';

var florenceLexer = FlorenceLexer.fromNothing();

var productionName = void 0,
    mappingsCheckbox = void 0,
    productionNameTextarea = void 0;

var defaultMappings = mappings; ///

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

module.exports = FlorenceExample;

function update() {
      var mappingsCheckboxChecked = mappingsCheckbox.isChecked(),
          mappings = mappingsCheckboxChecked ? defaultMappings : {},
          florenceParser = FlorenceParser.fromGrammarAndMappings(grammar, mappings),
          productionNameTextareaValue = productionNameTextarea.getValue(),
          productionName = productionNameTextareaValue,
          ///
      production = florenceParser.findProduction(productionName);

      Example.updateParseTreeTextarea(florenceLexer, florenceParser, production);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9mbG9yZW5jZS5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsImxleGVycyIsIkV4YW1wbGUiLCJncmFtbWFyIiwibWFwcGluZ3MiLCJGbG9yZW5jZVBhcnNlciIsIkNoZWNrYm94IiwiVGV4dGFyZWEiLCJGbG9yZW5jZUxleGVyIiwibWFwcGluZ3NDaGVja2JveFNlbGVjdG9yIiwicHJvZHVjdGlvbk5hbWVUZXh0YXJlYVNlbGVjdG9yIiwiZmxvcmVuY2VMZXhlciIsImZyb21Ob3RoaW5nIiwicHJvZHVjdGlvbk5hbWUiLCJtYXBwaW5nc0NoZWNrYm94IiwicHJvZHVjdGlvbk5hbWVUZXh0YXJlYSIsImRlZmF1bHRNYXBwaW5ncyIsIkZsb3JlbmNlRXhhbXBsZSIsImJuZkdyYW1tYXJUZXh0YXJlYVZhbHVlIiwic2V0Qk5GR3JhbW1hclRleHRhcmVhVmFsdWUiLCJvbkNoYW5nZSIsInVwZGF0ZSIsIm9uS2V5VXAiLCJvbkJORkdyYW1tYXJUZXh0YXJlYUtleVVwIiwib25Db250ZW50VGV4dGFyZWFLZXlVcCIsIm1vZHVsZSIsImV4cG9ydHMiLCJtYXBwaW5nc0NoZWNrYm94Q2hlY2tlZCIsImlzQ2hlY2tlZCIsImZsb3JlbmNlUGFyc2VyIiwiZnJvbUdyYW1tYXJBbmRNYXBwaW5ncyIsInByb2R1Y3Rpb25OYW1lVGV4dGFyZWFWYWx1ZSIsImdldFZhbHVlIiwicHJvZHVjdGlvbiIsImZpbmRQcm9kdWN0aW9uIiwidXBkYXRlUGFyc2VUcmVlVGV4dGFyZWEiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjtBQUFBLElBQ01DLFNBQVNELFFBQVEsY0FBUixDQURmOztBQUdBLElBQU1FLFVBQVVGLFFBQVEsWUFBUixDQUFoQjtBQUFBLElBQ01HLFVBQVVILFFBQVEscUJBQVIsQ0FEaEI7QUFBQSxJQUVNSSxXQUFXSixRQUFRLHNCQUFSLENBRmpCO0FBQUEsSUFHTUssaUJBQWlCTCxRQUFRLG9CQUFSLENBSHZCOztJQUtRTSxRLEdBQXVCUCxJLENBQXZCTyxRO0lBQVVDLFEsR0FBYVIsSSxDQUFiUSxRO0lBQ1ZDLGEsR0FBa0JQLE0sQ0FBbEJPLGE7OztBQUVSLElBQU1DLDJCQUEyQixXQUFqQztBQUFBLElBQ01DLGlDQUFpQyxpQkFEdkM7O0FBR0EsSUFBTUMsZ0JBQWdCSCxjQUFjSSxXQUFkLEVBQXRCOztBQUVBLElBQUlDLHVCQUFKO0FBQUEsSUFDSUMseUJBREo7QUFBQSxJQUVJQywrQkFGSjs7QUFJQSxJQUFNQyxrQkFBa0JaLFFBQXhCLEMsQ0FBa0M7O0lBRTVCYSxlOzs7Ozs7O2tDQUNTO0FBQ1hILHFDQUFtQixJQUFJUixRQUFKLENBQWFHLHdCQUFiLENBQW5CO0FBQ0FNLDJDQUF5QixJQUFJUixRQUFKLENBQWFHLDhCQUFiLENBQXpCOztBQUVBLHNCQUFNUSwwQkFBMEJmLE9BQWhDLENBSlcsQ0FJK0I7O0FBRTFDRCwwQkFBUWlCLDBCQUFSLENBQW1DRCx1QkFBbkM7O0FBRUFKLG1DQUFpQk0sUUFBakIsQ0FBMEJDLE1BQTFCOztBQUVBTix5Q0FBdUJPLE9BQXZCLENBQStCRCxNQUEvQjs7QUFFQW5CLDBCQUFRcUIseUJBQVIsQ0FBa0NGLE1BQWxDOztBQUVBbkIsMEJBQVFzQixzQkFBUixDQUErQkgsTUFBL0I7O0FBRUFBO0FBQ0Q7Ozs7OztBQUdISSxPQUFPQyxPQUFQLEdBQWlCVCxlQUFqQjs7QUFFQSxTQUFTSSxNQUFULEdBQWtCO0FBQ2hCLFVBQU1NLDBCQUEwQmIsaUJBQWlCYyxTQUFqQixFQUFoQztBQUFBLFVBQ014QixXQUFXdUIsMEJBQ1RYLGVBRFMsR0FFUCxFQUhWO0FBQUEsVUFJTWEsaUJBQWlCeEIsZUFBZXlCLHNCQUFmLENBQXNDM0IsT0FBdEMsRUFBK0NDLFFBQS9DLENBSnZCO0FBQUEsVUFLTTJCLDhCQUE4QmhCLHVCQUF1QmlCLFFBQXZCLEVBTHBDO0FBQUEsVUFNTW5CLGlCQUFpQmtCLDJCQU52QjtBQUFBLFVBTW9EO0FBQzlDRSxtQkFBYUosZUFBZUssY0FBZixDQUE4QnJCLGNBQTlCLENBUG5COztBQVNBWCxjQUFRaUMsdUJBQVIsQ0FBZ0N4QixhQUFoQyxFQUErQ2tCLGNBQS9DLEVBQStESSxVQUEvRDtBQUNEIiwiZmlsZSI6ImZsb3JlbmNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpLFxuICAgICAgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyk7XG5cbmNvbnN0IEV4YW1wbGUgPSByZXF1aXJlKCcuLi9leGFtcGxlJyksXG4gICAgICBncmFtbWFyID0gcmVxdWlyZSgnLi4vZmxvcmVuY2UvZ3JhbW1hcicpLFxuICAgICAgbWFwcGluZ3MgPSByZXF1aXJlKCcuLi9mbG9yZW5jZS9tYXBwaW5ncycpLFxuICAgICAgRmxvcmVuY2VQYXJzZXIgPSByZXF1aXJlKCcuLi9mbG9yZW5jZS9wYXJzZXInKTtcblxuY29uc3QgeyBDaGVja2JveCwgVGV4dGFyZWEgfSA9IGVhc3ksXG4gICAgICB7IEZsb3JlbmNlTGV4ZXIgfSA9IGxleGVycztcblxuY29uc3QgbWFwcGluZ3NDaGVja2JveFNlbGVjdG9yID0gJyNtYXBwaW5ncycsXG4gICAgICBwcm9kdWN0aW9uTmFtZVRleHRhcmVhU2VsZWN0b3IgPSAnI3Byb2R1Y3Rpb25OYW1lJztcblxuY29uc3QgZmxvcmVuY2VMZXhlciA9IEZsb3JlbmNlTGV4ZXIuZnJvbU5vdGhpbmcoKTtcblxubGV0IHByb2R1Y3Rpb25OYW1lLFxuICAgIG1hcHBpbmdzQ2hlY2tib3gsXG4gICAgcHJvZHVjdGlvbk5hbWVUZXh0YXJlYTtcblxuY29uc3QgZGVmYXVsdE1hcHBpbmdzID0gbWFwcGluZ3M7IC8vL1xuXG5jbGFzcyBGbG9yZW5jZUV4YW1wbGUge1xuICBzdGF0aWMgcnVuKCkge1xuICAgIG1hcHBpbmdzQ2hlY2tib3ggPSBuZXcgQ2hlY2tib3gobWFwcGluZ3NDaGVja2JveFNlbGVjdG9yKTtcbiAgICBwcm9kdWN0aW9uTmFtZVRleHRhcmVhID0gbmV3IFRleHRhcmVhKHByb2R1Y3Rpb25OYW1lVGV4dGFyZWFTZWxlY3Rvcik7XG5cbiAgICBjb25zdCBibmZHcmFtbWFyVGV4dGFyZWFWYWx1ZSA9IGdyYW1tYXI7ICAvLy9cblxuICAgIEV4YW1wbGUuc2V0Qk5GR3JhbW1hclRleHRhcmVhVmFsdWUoYm5mR3JhbW1hclRleHRhcmVhVmFsdWUpO1xuXG4gICAgbWFwcGluZ3NDaGVja2JveC5vbkNoYW5nZSh1cGRhdGUpO1xuXG4gICAgcHJvZHVjdGlvbk5hbWVUZXh0YXJlYS5vbktleVVwKHVwZGF0ZSk7XG5cbiAgICBFeGFtcGxlLm9uQk5GR3JhbW1hclRleHRhcmVhS2V5VXAodXBkYXRlKTtcblxuICAgIEV4YW1wbGUub25Db250ZW50VGV4dGFyZWFLZXlVcCh1cGRhdGUpO1xuXG4gICAgdXBkYXRlKCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGbG9yZW5jZUV4YW1wbGU7XG5cbmZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgY29uc3QgbWFwcGluZ3NDaGVja2JveENoZWNrZWQgPSBtYXBwaW5nc0NoZWNrYm94LmlzQ2hlY2tlZCgpLFxuICAgICAgICBtYXBwaW5ncyA9IG1hcHBpbmdzQ2hlY2tib3hDaGVja2VkID9cbiAgICAgICAgICBkZWZhdWx0TWFwcGluZ3MgOlxuICAgICAgICAgICAge30sXG4gICAgICAgIGZsb3JlbmNlUGFyc2VyID0gRmxvcmVuY2VQYXJzZXIuZnJvbUdyYW1tYXJBbmRNYXBwaW5ncyhncmFtbWFyLCBtYXBwaW5ncyksXG4gICAgICAgIHByb2R1Y3Rpb25OYW1lVGV4dGFyZWFWYWx1ZSA9IHByb2R1Y3Rpb25OYW1lVGV4dGFyZWEuZ2V0VmFsdWUoKSxcbiAgICAgICAgcHJvZHVjdGlvbk5hbWUgPSBwcm9kdWN0aW9uTmFtZVRleHRhcmVhVmFsdWUsIC8vL1xuICAgICAgICBwcm9kdWN0aW9uID0gZmxvcmVuY2VQYXJzZXIuZmluZFByb2R1Y3Rpb24ocHJvZHVjdGlvbk5hbWUpO1xuXG4gIEV4YW1wbGUudXBkYXRlUGFyc2VUcmVlVGV4dGFyZWEoZmxvcmVuY2VMZXhlciwgZmxvcmVuY2VQYXJzZXIsIHByb2R1Y3Rpb24pO1xufVxuIl19