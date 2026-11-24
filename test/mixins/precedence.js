"use strict";

const { queryUtilities } = require("occam-query");

const { testUtilities } = require("../../lib"); ///

const { nodeQuery } = queryUtilities,
      { compareParseTreeStrings, nodeFromBNFAndTokens, tokensFromEntriesAndContent } = testUtilities;

describe("Precedence methods and mixins", () => {
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

  let S,
      node,
      tokens;

  before(() => {
    tokens = tokensFromEntriesAndContent(entries, content);

    node = nodeFromBNFAndTokens(bnf, tokens);

    S = node; ///
  });

  it("creates the requisite parse tree", () => {
    const parseTree = node.asParseTree(tokens),
          parseTreeString = parseTree.asString();

    assert.isTrue(compareParseTreeStrings(parseTreeString, `
                                                                      
                                                                                          |                                  
                                                                                        S [0]                                
                                                                                          |                                  
                                                                 ---------------------------------------------------         
                                                                 |                                                 |         
                                                             A [0] ( )                                    "."[unassigned] [0]
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

  describe("isSingle", () => {
    describe("a terminal node", () => {
      describe("with no parent", () => {
        it("returns true", () => {
          const terminalNodeQuery = nodeQuery("/S/A/T/A1/T1/V/@unassigned"),
                terminalNode = terminalNodeQuery(S).clone(),  ///
                single = terminalNode.isSingle();

          assert.isTrue(single);
        });
      });

      describe("with a parent", () => {
        describe("and no siblings", () => {
          it("returns true", () => {
            const terminalNodeQuery = nodeQuery("/S/A/T/A1/T1/V/@unassigned"),
                  terminalNode = terminalNodeQuery(S),
                  single = terminalNode.isSingle();

            assert.isTrue(single);
          });
        });

        describe("and siblings", () => {
          it("returns false", () => {
            const terminalNodeQuery = nodeQuery("/S/A/T/@unassigned"),
                  terminalNode = terminalNodeQuery(S),
                  single = terminalNode.isSingle();

            assert.isFalse(single);
          });
        });
      });
    });

    describe("a non-terminal node", () => {
      describe("with no parent", () => {
        it("returns true", () => {
          const nonTerminalNodeQuery = nodeQuery("/S/A/T/A1/T1/V"),
                nonTerminalNode = nonTerminalNodeQuery(S).clone(),  ///
                single = nonTerminalNode.isSingle();

          assert.isTrue(single);
        });
      });

      describe("with a parent", () => {
        describe("and no siblings", () => {
          it("returns true", () => {
            const nonTerminalNodeQuery = nodeQuery("/S/A/T/A1/T1/V"),
                  nonTerminalNode = nonTerminalNodeQuery(S),
                  single = nonTerminalNode.isSingle();

            assert.isTrue(single);
          });
        });

        describe("and siblings", () => {
          it("returns false", () => {
            const nonTerminalNodeQuery = nodeQuery("/S/A/T/A1[0]"),
                  nonTerminalNode = nonTerminalNodeQuery(S),
                  single = nonTerminalNode.isSingle();

            assert.isFalse(single);
          });
        });
      });
    });
  });

  describe("isSingular", () => {
    describe("a terminal node", () => {
      it("returns false", () => {
        const terminalNodeQuery = nodeQuery("/S/A/T/A1/T1/V/@unassigned"),
              terminalNode = terminalNodeQuery(S),
              singular = terminalNode.isSingular();

        assert.isFalse(singular);
      });
    });

    describe("a non-terminal node", () => {
      describe("with one child", () => {
        it("returns true", () => {
          const nonTerminalNodeQuery = nodeQuery("/S/A/T/A1/T1/V"),
                nonTerminalNode = nonTerminalNodeQuery(S),
                singular = nonTerminalNode.isSingular();

          assert.isTrue(singular);
        });
      });

      describe("with more than one child", () => {
        it("returns false", () => {
          const nonTerminalNodeQuery = nodeQuery("/S/A/T"),
                nonTerminalNode = nonTerminalNodeQuery(S),
                singular = nonTerminalNode.isSingular();

          assert.isFalse(singular);
        });
      });
    });
  });

  describe("isIntervening", () => {
    describe("a terminal node", () => {
      it("returns false", () => {
        const terminalNodeQuery = nodeQuery("/S/A/T/A1/T1/V/@unassigned"),
              terminalNode = terminalNodeQuery(S),
              intervening = terminalNode.isIntervening();

        assert.isFalse(intervening);
      });
    });

    describe("a non-terminal node", () => {
      describe("with null precedence", () => {
        it("returns false", () => {
          const nonTerminalNodeQuery = nodeQuery("/S/A/T/A1/T1/V"),
                nonTerminalNode = nonTerminalNodeQuery(S),
                intervening = nonTerminalNode.isIntervening();

          assert.isFalse(intervening);
        });
      });

      describe("with an intervening precedence", () => {
        it("returns true", () => {
          const nonTerminalNodeQuery = nodeQuery("/S/A/T/A1[0]"),
                nonTerminalNode = nonTerminalNodeQuery(S),
                intervening = nonTerminalNode.isIntervening();

          assert.isTrue(intervening);
        });
      });

      describe("with an non-intervening precedence", () => {
        it("returns false", () => {
          const nonTerminalNodeQuery = nodeQuery("/S/A/T/A1/T1[0]"),
                nonTerminalNode = nonTerminalNodeQuery(S),
                intervening = nonTerminalNode.isIntervening();

          assert.isFalse(intervening);
        });
      });
    });
  });

  describe("isRewritable", () => {
    describe("a terminal node", () => {
      it("returns false", () => {
        const terminalNodeQuery = nodeQuery("/S/A/T/A1/T1/V/@unassigned"),
              terminalNode = terminalNodeQuery(S),
              rewritable = terminalNode.isRewritable();

        assert.isFalse(rewritable);
      });
    });

    describe("a non-terminal node", () => {
      describe("with null precedence", () => {
        it("returns false", () => {
          const nonTerminalNodeQuery = nodeQuery("/S/A/T/A1/T1/V"),
                nonTerminalNode = nonTerminalNodeQuery(S),
                rewritable = nonTerminalNode.isRewritable();

          assert.isFalse(rewritable);
        });
      });

      describe("with a non-null precedence", () => {
        it("returns true", () => {
          const nonTerminalNodeQuery = nodeQuery("/S/A/T/A1[0]"),
                nonTerminalNode = nonTerminalNodeQuery(S),
                rewritable = nonTerminalNode.isRewritable();

          assert.isTrue(rewritable);
        });
      });
    });
  });

  describe("isIrrelevant", () => {
    describe("a terminal node", () => {
      describe("with a parent", () => {
        it("returns false", () => {
          const terminalNodeQuery = nodeQuery("/S/A/T/@unassigned"),
                terminalNode = terminalNodeQuery(S),
                irrelevant = terminalNode.isIrrelevant();

          assert.isFalse(irrelevant);
        });
      });
    });

    describe("a non-terminal node", () => {
      describe("with no parent", () => {
        it("returns false", () => {
          const nonTerminalNodeQuery = nodeQuery("/S"),
                nonTerminalNode = nonTerminalNodeQuery(S),
                irrelevant = nonTerminalNode.isIrrelevant();

          assert.isFalse(irrelevant);
        });
      });

      describe("singular, not single and with intervening precedence", () => {
        it("returns false", () => {
          const nonTerminalNodeQuery = nodeQuery("/S/A"),
                nonTerminalNode = nonTerminalNodeQuery(S),
                irrelevant = nonTerminalNode.isIrrelevant();

          assert.isFalse(irrelevant);
        });
      });

      describe("single, not singluar and with non-intervening precedence", () => {
        it("returns false", () => {
          const nonTerminalNodeQuery = nodeQuery("/S/A/T"),
                nonTerminalNode = nonTerminalNodeQuery(S),
                irrelevant = nonTerminalNode.isIrrelevant();

          assert.isFalse(irrelevant);
        });
      });
    });
  });

  describe("isRelevant", () => {
    describe("a terminal node", () => {
      describe("with a parent", () => {
        it("returns true", () => {
          const terminalNodeQuery = nodeQuery("/S/A/T/@unassigned"),
                terminalNode = terminalNodeQuery(S),
                relevant = terminalNode.isRelevant();

          assert.isTrue(relevant);
        });
      });
    });

    describe("a non-terminal node", () => {
      describe("with no parent", () => {
        it("returns true", () => {
          const nonTerminalNodeQuery = nodeQuery("/S"),
                nonTerminalNode = nonTerminalNodeQuery(S),
                relevant = nonTerminalNode.isRelevant();

          assert.isTrue(relevant);
        });
      });

      describe("singular, not single and with intervening precedence", () => {
        it("returns true", () => {
          const nonTerminalNodeQuery = nodeQuery("/S/A"),
                nonTerminalNode = nonTerminalNodeQuery(S),
                relevant = nonTerminalNode.isRelevant();

          assert.isTrue(relevant);
        });
      });

      describe("single, not singluar and with non-intervening precedence", () => {
        it("returns true", () => {
          const nonTerminalNodeQuery = nodeQuery("/S/A/T"),
                nonTerminalNode = nonTerminalNodeQuery(S),
                relevant = nonTerminalNode.isRelevant();

          assert.isTrue(relevant);
        });
      });
    });
  });

  describe("retrieveIrrelevantDescendantNode", () => {
    describe("a node", () => {
      describe("with no single child node", () => {
        it("returns null", () => {
          const nonTerminalNodeQuery = nodeQuery("/S"),
                nonTerminalNode = nonTerminalNodeQuery(S),
                irrelevantDescendantNode = nonTerminalNode.retrieveIrrelevantDescendantNode();

          assert.isNull(irrelevantDescendantNode);
        });
      });

      describe("with a single relevant parent node", () => {
        it("returns null", () => {
          const nonTerminalNodeQuery = nodeQuery("/S/A"),
                nonTerminalNode = nonTerminalNodeQuery(S),
                irrelevantDescendantNode = nonTerminalNode.retrieveIrrelevantDescendantNode();

          assert.isNull(irrelevantDescendantNode);
        });
      });
    });
  });

  describe("retrieveIrrelevantAscendantNode", () => {
    describe("a node", () => {
      describe("with no parent", () => {
        it("returns null", () => {
          const nonTerminalNodeQuery = nodeQuery("/S"),
                nonTerminalNode = nonTerminalNodeQuery(S),
                irrelevantAscendantNode = nonTerminalNode.retrieveIrrelevantAscendantNode();

          assert.isNull(irrelevantAscendantNode);
        });
      });

      describe("with a relevant parent node", () => {
        it("returns null", () => {
          const nonTerminalNodeQuery = nodeQuery("/S/A"),
                nonTerminalNode = nonTerminalNodeQuery(S),
                irrelevantAscendantNode = nonTerminalNode.retrieveIrrelevantAscendantNode();

          assert.isNull(irrelevantAscendantNode);
        });
      });
    });
  });

  describe("retrieveEffectiveDescendantNode", () => {

  });

  describe("retrieveEffectiveAscendantNode", () => {

  });
});
