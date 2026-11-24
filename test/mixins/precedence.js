"use strict";

const { queryUtilities } = require("occam-query");

const { testUtilities } = require("../../lib"); ///

const { nodeQuery, nodesQuery } = queryUtilities,
      { compareParseTreeStrings, nodeFromBNFAndTokens, tokensFromEntriesAndContent } = testUtilities;

describe("Precedence mixins", () => {
  const entries = [
          {
            "unassigned": "^[^\\s]"
          }
        ],
        bnf = `
        
          S   ::= ( A ... "." ) ;
            
          A   ::= T ( ) ;
            
          T   ::= A1 "∧" A1 (-9)
    
                | V
    
                ;
    
          A1 ::= T1 ( ) ;
    
          T1  ::= A2 "∧" A2 (-9)
    
                | V
    
                ;
    
          A2 ::= T2 ( ) ;
    
          T2  ::= V
    
                ;
    
          V ::= /[A-Z]/ ;
          
        `,
        content = "P ∧ Q ∧ R.";

  let node,
      tokens;

  before(() => {
    tokens = tokensFromEntriesAndContent(entries, content);

    node = nodeFromBNFAndTokens(bnf, tokens);
  });

  let S;

  before(() => {
    S = node; ///
  });

  describe.only("isSingle", () => {
    describe("a terminal node", () => {
      describe("with no parent", () => {
        ///
      });

      describe("with a parent", () => {
        describe("and no siblings", () => {
          it("returns true", () => {
            const A1NodeQuery = nodeQuery("/S/A/T[0]/*[0]"),
                  terminalNode = A1NodeQuery(S),
                  single = terminalNode.isSingle();

            assert.isTrue(single);
          });
        });

        describe("and siblings", () => {
          it("returns false", () => {
            const terminalNode = nodeQuery("/A/T/@unassigned"),
                  single = terminalNode.isSingle();

            assert.isFalse(single);
          });
        });
      });
    });
  });

  describe("isSingular", () => {

  });

  describe("isIntervening", () => {

  });

  describe("isRewritable", () => {

  });

  describe("isRelevant", () => {

  });

  describe("isIrrelevant", () => {

  });

  describe("retrieveEffectiveAscendantNode", () => {

  });

  describe("retrieveEffectiveAscendantNode", () => {

  });

  describe("retrieveEffectiveAscendantNode", () => {

  });

  describe("retrieveEffectiveDescendantNode", () => {

  });

  describe("retrieveIrrelevantAscendantNode", () => {

  });

  describe("retrieveIrrelevantDescendantNode", () => {

  });

  describe("tiltLeft", () => {

    it("tilts the node ot the left", () => {
      A.tiltLeft();

      const AParseTree = A.asParseTree(tokens),
            AParseTreeString = AParseTree.asString();

      assert.isTrue(compareParseTreeStrings(AParseTreeString, `
                                                                
                                                                   |                                       
                                                               A [0] ( )                                   
                                                                   |                                       
                                                              T [0] (-9)                                   
                                                                   |                                       
                                     -------------------------------------------------------------         
                                     |                                       |                   |         
                                A1 [0] ( )                          "∧"[unassigned] [0]     A1 [0] ( )     
                                     |                                                           |         
                                T1 [0] (-9)                                                   T1 [0]       
                                     |                                                           |         
                 -----------------------------------------                                     V [0]       
                 |                   |                   |                                       |         
            A2 [0] ( )      "∧"[unassigned] [0]     A2 [0] ( )                          "R"[unassigned] [0]
                 |                                       |                                                 
              T2 [0]                                  T2 [0]                                               
                 |                                       |                                                 
               V [0]                                   V [0]                                               
                 |                                       |                                                 
        "P"[unassigned] [0]                     "Q"[unassigned] [0]                                        

     `));
    });
  });
});
