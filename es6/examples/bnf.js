'use strict';

const easy = require('easy'),
      lexers = require('occam-lexers');

const Example = require('../example'),
      grammar = require('../bnf/grammar'),
      BNFParser = require('../bnf/parser');

const { Textarea } = easy,
      { BNFLexer } = lexers;

const lexicalGrammarTextareaSelector = 'textarea#lexicalGrammar',
      adjustedBNFGrammarTextareaSelector = 'textarea#adjustedBNFGrammar',
      lexicalGrammar = BNFLexer.grammar;

let lexicalGrammarTextarea,
    adjustedBNFGrammarTextarea,
    bnfLexer = null,
    bnfParser = null;

class BNFExample {
  static run() {
    lexicalGrammarTextarea = new Textarea(lexicalGrammarTextareaSelector);
    adjustedBNFGrammarTextarea = new Textarea(adjustedBNFGrammarTextareaSelector);

    const lexicalGrammarTextareaValue = JSON.stringify(lexicalGrammar, null, '  '), ///
          bnfGrammarTextareaValue = grammar, ///
          contentTextareaValue = `

     document                                                      ::=   header? verticalSpace? body?



     header                                                        ::=   includeDirective+

     verticalSpace                                                 ::=   <END_OF_LINE>+

     body                                                          ::=   part+



     rule                                                          ::=   "Rule" labels? <END_OF_LINE> premiseOrPremises? conclusion proof?

     axiom                                                         ::=   "Axiom" labels? <END_OF_LINE> standaloneStatement

     lemma                                                         ::=   "Lemma" labels? <END_OF_LINE> standaloneStatement proof?

     theorem                                                       ::=   "Theorem" labels? <END_OF_LINE> standaloneStatement proof?



     typeDeclaration                                               ::=   "Type" type

     typesDeclaration                                              ::=   "Types" types

     dependentTypeDeclaration                                      ::=   "DependentType" dependentType

     dependentTypesDeclaration                                     ::=   "DependentTypes" dependentTypes 

     constructorDeclaration                                        ::=   "Constructor" constructor

     constructorsDeclaration                                       ::=   "Constructors" constructors

     variableDeclaration                                           ::=   "Variable" variable

     variablesDeclaration                                          ::=   "Variables" variables

     metaVariableDeclaration                                       ::=   "MetaVariable" metaVariable

     metaVariablesDeclaration                                      ::=   "MetaVariables" metaVariables

     qualifiedMetaVariableDeclaration                              ::=   "QualifiedMetaVariable" qualifiedMetaVariable

     qualifiedMetaVariablesDeclaration                             ::=   "QualifiedMetaVariables" qualifiedMetaVariables



     part                                                          ::=   verticalSpace

                                                                     |   rule
                                                                
                                                                     |   axiom
                                                                
                                                                     |   lemma
                                                                
                                                                     |   theorem
                                                                
                                                                     |   typeDeclaration
                                                                
                                                                     |   typesDeclaration
                                                                
                                                                     |   dependentTypeDeclaration
                                                                
                                                                     |   dependentTypesDeclaration
                                                                
                                                                     |   constructorDeclaration
                                                                
                                                                     |   constructorsDeclaration
                                                                
                                                                     |   variableDeclaration
                                                                
                                                                     |   variablesDeclaration
                                                                
                                                                     |   metavariableDeclaration
                                                                
                                                                     |   metavariablesDeclaration
                                                                
                                                                     |   qualifiedMetavariableDeclaration
                                                                
                                                                     |   qualifiedMetavariablesDeclaration
                                                                     
                                                                     
                                                                     
  includeDirective                                                 ::=   "include"<NO_WHITESPACE>"("<NO_WHITESPACE>[string]<NO_WHITESPACE>")" <END_OF_LINE>



   premiseOrPremises                                               ::=   premise | premises



   type                                                            ::=   typeName
   
   types                                                           ::=   type(<NO_WHITESPACE>","<NO_WHITESPACE>type)*

   dependentType                                                   ::=   dependentTypeName<NO_WHITESPACE>"("<NO_WHITESPACE>typeName<NO_WHITESPACE>")"
   
   dependentTypes                                                  ::=   dependentType(<NO_WHITESPACE>","<NO_WHITESPACE>dependentType)*
   
   constructor                                                     ::=   constructorName<NO_WHITESPACE>"("<NO_WHITESPACE>types<NO_WHITESPACE>")"
   
   constructors                                                    ::=   constructor(<NO_WHITESPACE>","<NO_WHITESPACE>constructor)*
   
   variable                                                        ::=   variableName(<NO_WHITESPACE>":"type)?
   
   variables                                                       ::=   variable(<NO_WHITESPACE>","<NO_WHITESPACE>variable)*
   
   metaVariable                                                    ::=   metaVariableName

   metaVariables                                                   ::=   metaVariable(<NO_WHITESPACE>","<NO_WHITESPACE>metaVariable)*
   
   qualifiedMetaVariable                                           ::=   qualifiedMetaVariableName
   
   qualifiedMetaVariables                                          ::=   qualifiedMetaVariable(<NO_WHITESPACE>","<NO_WHITESPACE>qualifiedMetaVariable)*
   
   
   
   label                                                           ::=   labelName(<NO_WHITESPACE>"("<NO_WHITESPACE>terms<NO_WHITESPACE>")")?



   typeName                                                        ::=   name

   dependentTypeName                                               ::=   name

   constructorName                                                 ::=   name

   variableName                                                    ::=   name

   metaVariableName                                                ::=   name

   qualifiedMetaVariableName                                       ::=   name
   
   labelName                                                       ::=   name

   name                                                            ::=   /\\w+/
   

    
`; ///

    /*

































     premise(s)                                                    ::=   premise | premises

     premise                                                       ::=   "Premise" <END_OF_LINE> unjustifiedStatementOrUnknown

     premises                                                      ::=   "Premises" <END_OF_LINE> unjustifiedStatementOrUnknown unjustifiedStatementOrUnknown+

     conclusion                                                    ::=   "Conclusion" <END_OF_LINE> (un)justifiedStatementOrUnknown



     proof                                                         ::=   "Proof" <END_OF_LINE> (abridged)ProofDerivation

     (abridged)ProofDerivation                                     ::=   proofDerivation | abridgedProofDerivation

     abridgedProofDerivation                                       ::=   (un)justifiedStatementOrUnknown

     proofDerivation                                               ::=   derivation therefore

     derivation                                                    ::=   subDerivation+

     therefore                                                     ::=   "Therefore" <END_OF_LINE> (un)justifiedStatementOrUnknown

     subDerivation                                                 ::=   subLemma | (un)justifiedStatementOrUnknown



     subLemma                                                      ::=   suppose then? hence unjustifiedStatementOrUnknown? verticalSpace?

     suppose                                                       ::=   "Suppose" <END_OF_LINE> unjustifiedStatementOrUnknown+

     then                                                          ::=   "Then" <END_OF_LINE> derivation

     hence                                                         ::=   "Hence" <END_OF_LINE> (un)justifiedStatementOrUnknown



     (un)justifiedStatementOrUnknown                               ::=   justifiedStatement | unjustifiedStatement | unknown

     unjustifiedStatementOrUnknown                                 ::=   unjustifiedStatement | unknown

     unjustifiedStatement                                          ::=   statement <END_OF_LINE>

     justifiedStatement                                            ::=   statement justification <END_OF_LINE>

     justification                                                 ::=   byOrFrom reference

     byOrFrom                                                      ::=   "by" | "from"

     reference                                                     ::=   referenceName<NO_WHITESPACE>parenthesisedTermList?

     referenceName                                                 ::=   name



     statement                                                     ::=   proofAssertion | typeAssertion | equality | expression



     proofAssertion                                                ::=   (qualified)Metavariable "::" (qualified)Metavariable

     typeAssertion                                                 ::=   expression ":" type

     equality                                                      ::=   expression "=" expression

     expression                                                    ::=   term | (qualified)Metavariable



     term                                                          ::=   compoundTerm | variableName

     compoundTerm                                                  ::=   constructorName<NO_WHITESPACE>parenthesisedTermList?



     parenthesisedTermList                                         ::=   "("<NO_WHITESPACE>termList<NO_WHITESPACE>")"

     termList                                                      ::=   term<NO_WHITESPACE>commaThenTerm*

     commaThenTerm                                                 ::=   ","<NO_WHITESPACE>term



     name                                                          ::=   /\\w+/



     unknown                                                       ::=   specialUnassignedOrMinorKeywords+ <END_OF_LINE>

     specialUnassignedOrMinorKeywords                              ::=   [special] | [unassigned] | "by" | "from"





     error                                                         ::=   *

     */

    lexicalGrammarTextarea.setValue(lexicalGrammarTextareaValue);

    Example.setBNFGrammarTextareaValue(bnfGrammarTextareaValue);

    Example.setContentTextareaValue(contentTextareaValue);

    Example.onBNFGrammarTextareaKeyUp(update);

    Example.onContentTextareaKeyUp(update);

    lexicalGrammarTextarea.onKeyUp(update);

    update();
  }
}

function update() {
  updateBNFLexer();

  updateBNFParser();

  updateAdjustedBNFGrammar();

  if (bnfLexer !== null) {
    const production = null,
          node = Example.updateParseTreeTextarea(bnfLexer, bnfParser, production),
          productionsNode = node; ///

    BNFParser.generateProductions(productionsNode);
  } else {
    Example.clearParseTreeTextarea();
  }
}

module.exports = BNFExample;

function updateBNFLexer() {
  const lexicalGrammarTextareaValue = lexicalGrammarTextarea.getValue();

  let lexicalGrammar = null;

  try {
    lexicalGrammar = JSON.parse(lexicalGrammarTextareaValue);
  } catch (error) {}

  const lexicalGrammarValid = (lexicalGrammar !== null);

  if (lexicalGrammarValid) {
    bnfLexer = BNFLexer.fromGrammar(lexicalGrammar);

    lexicalGrammarTextarea.removeClass('error');
  } else {
    lexicalGrammarTextarea.addClass('error');

    bnfLexer = null;
  }
}

function updateBNFParser() {
  bnfParser = BNFParser.fromNothing();
}

function updateAdjustedBNFGrammar() {
  const productions = bnfParser.getProductions(),
        maximumProductionNameLength = productions.reduce(function(maximumProductionNameLength, production) {
          const productionName = production.getName(),
                productionNameLength = productionName.length;
  
          maximumProductionNameLength = Math.max(maximumProductionNameLength, productionNameLength);
  
          return maximumProductionNameLength;
        }, 0),
        adjustedBNFGrammarTextareaValue = productions.reduce(function(adjustedBNFGrammarTextarea, production) {
          const productionString = production.toString(maximumProductionNameLength);
  
          adjustedBNFGrammarTextarea += productionString;
  
          return adjustedBNFGrammarTextarea;
        }, []);

  adjustedBNFGrammarTextarea.setValue(adjustedBNFGrammarTextareaValue);
}
