'use strict';

const Rule = require('../../../bnf/rule'),
      QualificationNode = require('../node/qualification'),
      RuleNamePart = require('../../../bnf/part/nonTerminal/ruleName'),
      OptionalPartPart = require('../../../bnf/part/nonTerminal/optionalPart'),
      ChoiceOfPartsPart = require('../../../bnf/part/nonTerminal/choiceOfParts'),
      TerminalSymbolPart = require('../../../bnf/part/terminal/terminalSymbol');

class QualificationRule extends Rule {
  constructor() {
    const byTerminalSymbolContent = 'by',
          fromTerminalSymbolContent = 'from',
          referenceRuleName = 'reference',
          referenceRuleNamePart = new RuleNamePart(referenceRuleName),
          byTerminalSymbolPart = new TerminalSymbolPart(byTerminalSymbolContent),
          fromTerminalSymbolPart = new TerminalSymbolPart(fromTerminalSymbolContent),
          byOfFromChoiceOfPartsPartParts = [
            byTerminalSymbolPart,
            fromTerminalSymbolPart
          ],
          byOfFromChoiceOfPartsPart = new ChoiceOfPartsPart(byOfFromChoiceOfPartsPartParts),
          optionalReferenceRuleNamePart = new OptionalPartPart(referenceRuleNamePart),
          parts = [
            byOfFromChoiceOfPartsPart,
            optionalReferenceRuleNamePart
          ],
          definition = new Definition(parts),
          name = QualificationRule.ruleName,  ///
          definitions = [
            definition
          ],
          Node = QualificationNode;

    super(name, definitions, Node)
  }
}

QualificationRule.ruleName = 'qualification';

module.exports = QualificationRule;
