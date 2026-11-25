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
  ];

  describe("a directly recursive grammar", () => {
    const bnf = `
          
     S  ::= ( T1 ... ". ) ;
      
     T1 ::= T2 "+" T2 (-10)
      
          | T2 "^" T2  (20)
      
          | /[a-z0-9]/
          
          ;
            
     T2 ::= T3 "+" T3 (-10)
      
          | T3 "^" T3  (20)
      
          | /[a-z0-9]/
          
          ;
            
     T3 ::= /[a-z0-9]/
          
          ;
            
          `,
          content = "x ^ y + z.";

    let node,
        tokens;

    before(() => {
      tokens = tokensFromEntriesAndContent(entries, content);

      node = nodeFromBNFAndTokens(bnf, tokens);
    });

    it("creates the requisite parse tree", () => {
      const parseTree = node.asParseTree(tokens),
            parseTreeString = parseTree.asString();

      assert.isTrue(compareParseTreeStrings(parseTreeString, `
                                                                                
                                                                   |                                       
                                                             T1 [0] (-10)                                  
                                                                   |                                       
                                     -------------------------------------------------------------         
                                     |                                       |                   |         
                                T2 [0] (20)                         "+"[unassigned] [0]       T2 [0]       
                                     |                                                           |         
                 -----------------------------------------                              "z"[unassigned] [0]
                 |                   |                   |                                                 
              T3 [0]        "^"[unassigned] [0]       T3 [0]                                               
                 |                                       |                                                 
        "x"[unassigned] [0]                     "y"[unassigned] [0]                                        
  
     `));
    });

    let T1,
        T2,
        T3;

    before(() => {
      const T2Query = nodeQuery("/T1/T2[0]"),
            T3Query = nodeQuery("/T1/T2[0]/T3[0]");

      T1 = node;  ///

      T2 = T2Query(T1);

      T3 = T3Query(T1);
    });

    describe("isLeftLeaning", () => {
      describe("the topmost node", () => {
        it("returns true", () => {
          const leftLeaning = T1.isLeftLeaning();

          assert.isTrue(leftLeaning);
        });
      });
    });
  });

  describe("an indirectly recursive grammar", () => {
    const bnf = `
          
            S   ::= ( R ... "." ) ;
              
            R   ::= A ;
              
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

    it("creates the requisite parse tree", () => {
      const parseTree = node.asParseTree(tokens),
            parseTreeString = parseTree.asString();

      assert.isTrue(compareParseTreeStrings(parseTreeString, `
                                                                        
                                                                                            |                                  
                                                                                          S [0]                                
                                                                                            |                                  
                                                                   ---------------------------------------------------         
                                                                   |                                                 |         
                                                                 R [0]                                      "."[unassigned] [0]
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

    let S,
        R,
        A,
        T,
        A1,
        T1,
        V;

    before(() => {
      const RQuery = nodeQuery("/S/R"),
            AQuery = nodeQuery("/S/R/A"),
            TQuery = nodeQuery("/S/R/A/T"),
            A1Query = nodeQuery("/S/R/A/T/A1[1]"),
            T1Query = nodeQuery("/S/R/A/T/A1[1]/T1"),
            VQuery = nodeQuery("/S/R/A/T/A1[1]/T1/V");

      S = node; ///

      R = RQuery(S);

      A = AQuery(S);

      T = TQuery(S);

      A1 = A1Query(S);

      T1 = T1Query(S);

      V = VQuery(S);
    });

    describe("isSingle", () => {
      describe("a terminal node", () => {
        describe("with no parent", () => {
          it("returns true", () => {
            const terminalNodeQuery = nodeQuery("/S/R/A/T/A1/T1/V/@unassigned"),
                  terminalNode = terminalNodeQuery(S).clone(),  ///
                  single = terminalNode.isSingle();

            assert.isTrue(single);
          });
        });

        describe("with a parent", () => {
          describe("and no siblings", () => {
            it("returns true", () => {
              const terminalNodeQuery = nodeQuery("/S/R/A/T/A1/T1/V/@unassigned"),
                    terminalNode = terminalNodeQuery(S),
                    single = terminalNode.isSingle();

              assert.isTrue(single);
            });
          });

          describe("and siblings", () => {
            it("returns false", () => {
              const terminalNodeQuery = nodeQuery("/S/R/A/T/@unassigned"),
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
            const VV = V.clone(),  ///
                  single = VV.isSingle();

            assert.isTrue(single);
          });
        });

        describe("with a parent", () => {
          describe("and no siblings", () => {
            it("returns true", () => {
              const single = V.isSingle();

              assert.isTrue(single);
            });
          });

          describe("and siblings", () => {
            it("returns false", () => {
              const single = A1.isSingle();

              assert.isFalse(single);
            });
          });
        });
      });
    });

    describe("isSingular", () => {
      describe("a terminal node", () => {
        it("returns false", () => {
          const terminalNodeQuery = nodeQuery("/S/R/A/T/A1/T1/V/@unassigned"),
                terminalNode = terminalNodeQuery(S),
                singular = terminalNode.isSingular();

          assert.isFalse(singular);
        });
      });

      describe("a non-terminal node", () => {
        describe("with one child", () => {
          it("returns true", () => {
            const singular = V.isSingular();

            assert.isTrue(singular);
          });
        });

        describe("with more than one child", () => {
          it("returns false", () => {
            const singular = T.isSingular();

            assert.isFalse(singular);
          });
        });
      });
    });

    describe("isIntervening", () => {
      describe("a terminal node", () => {
        it("returns false", () => {
          const terminalNodeQuery = nodeQuery("/S/R/A/T/A1/T1/V/@unassigned"),
                terminalNode = terminalNodeQuery(S),
                intervening = terminalNode.isIntervening();

          assert.isFalse(intervening);
        });
      });

      describe("a non-terminal node", () => {
        describe("with null precedence", () => {
          it("returns false", () => {
            const intervening = V.isIntervening();

            assert.isFalse(intervening);
          });
        });

        describe("with an intervening precedence", () => {
          it("returns true", () => {
            const intervening = A1.isIntervening();

            assert.isTrue(intervening);
          });
        });

        describe("with an non-intervening precedence", () => {
          it("returns false", () => {
            const intervening = T1.isIntervening();

            assert.isFalse(intervening);
          });
        });
      });
    });

    describe("isRewritable", () => {
      describe("a terminal node", () => {
        it("returns false", () => {
          const terminalNodeQuery = nodeQuery("/S/R/A/T/A1/T1/V/@unassigned"),
                terminalNode = terminalNodeQuery(S),
                rewritable = terminalNode.isRewritable();

          assert.isFalse(rewritable);
        });
      });

      describe("a non-terminal node", () => {
        describe("with null precedence", () => {
          it("returns false", () => {
            const rewritable = V.isRewritable();

            assert.isFalse(rewritable);
          });
        });

        describe("with a non-null precedence", () => {
          it("returns true", () => {
            const rewritable = A1.isRewritable();

            assert.isTrue(rewritable);
          });
        });
      });
    });

    describe("isIrrelevant", () => {
      describe("a terminal node", () => {
        describe("with a parent", () => {
          it("returns false", () => {
            const terminalNodeQuery = nodeQuery("/S/R/A/T/@unassigned"),
                  terminalNode = terminalNodeQuery(S),
                  irrelevant = terminalNode.isIrrelevant();

            assert.isFalse(irrelevant);
          });
        });
      });

      describe("a non-terminal node", () => {
        describe("with no parent", () => {
          it("returns false", () => {
            const irrelevant = S.isIrrelevant();

            assert.isFalse(irrelevant);
          });
        });

        describe("single, singular and with intervening precedence", () => {
          it("returns true", () => {
            const irrelevant = A.isIrrelevant();

            assert.isTrue(irrelevant);
          });
        });

        describe("single, non-singluar and with non-intervening precedence", () => {
          it("returns false", () => {
            const irrelevant = T.isIrrelevant();

            assert.isFalse(irrelevant);
          });
        });
      });
    });

    describe("isRelevant", () => {
      describe("a terminal node", () => {
        describe("with a parent", () => {
          it("returns true", () => {
            const terminalNodeQuery = nodeQuery("/S/R/A/T/@unassigned"),
                  terminalNode = terminalNodeQuery(S),
                  relevant = terminalNode.isRelevant();

            assert.isTrue(relevant);
          });
        });
      });

      describe("a non-terminal node", () => {
        describe("with no parent", () => {
          it("returns true", () => {
            const relevant = S.isRelevant();

            assert.isTrue(relevant);
          });
        });

        describe("single, singular and with intervening precedence", () => {
          it("returns false", () => {
            const relevant = A.isRelevant();

            assert.isFalse(relevant);
          });
        });

        describe("single, non-singluar and with non-intervening precedence", () => {
          it("returns true", () => {
            const relevant = T.isRelevant();

            assert.isTrue(relevant);
          });
        });
      });
    });

    describe("retrieveIrrelevantDescendantNode", () => {
      describe("a node with no single child node", () => {
        it("returns null", () => {
          const irrelevantDescendantNode = S.retrieveIrrelevantDescendantNode();

          assert.isNull(irrelevantDescendantNode);
        });
      });

      describe("a node with a single relevant parent node", () => {
        it("returns null", () => {
          const irrelevantDescendantNode = A.retrieveIrrelevantDescendantNode();

          assert.isNull(irrelevantDescendantNode);
        });
      });
    });

    describe("retrieveIrrelevantAscendantNode", () => {
      describe("a node with no parent", () => {
        it("returns null", () => {
          const irrelevantAscendantNode = S.retrieveIrrelevantAscendantNode();

          assert.isNull(irrelevantAscendantNode);
        });
      });

      describe("a node with a relevant parent node", () => {
        it("returns null", () => {
          const irrelevantAscendantNode = A.retrieveIrrelevantAscendantNode();

          assert.isNull(irrelevantAscendantNode);
        });
      });
    });

    describe("retrieveExtremalDescendantNode", () => {
      describe("a non-singular node", () => {
        it("returns the node itself", () => {
          const extremalDescendantNode = S.retrieveExtremalDescendantNode();

          assert.equal(extremalDescendantNode, S);
        });
      });

      describe("a singular node with a releavnt child", () => {
        it("returns its child", () => {
          const extremalDescendantNode = A.retrieveExtremalDescendantNode();

          assert.equal(extremalDescendantNode, T);
        });
      });

      describe("a singular node with an irreleavnt child", () => {
        it("returns its grandchild", () => {
          const extremalDescendantNode = R.retrieveExtremalDescendantNode();

          assert.equal(extremalDescendantNode, T);
        });
      });

      describe("a singular node with a terminal child", () => {
        it("returns the terminal node", () => {
          const extremalDescendantNode = V.retrieveExtremalDescendantNode(),
                terminalNodeQuery = nodeQuery("/V/@unassigned"),
                terminalNode = terminalNodeQuery(V);

          assert.equal(extremalDescendantNode, terminalNode);
        });
      });
    });

    describe("retrieveExtremalAscendantNode", () => {
      describe("a node with no parent", () => {
        it("returns the node itself", () => {
          const extremalAscendantNode = S.retrieveExtremalAscendantNode();

          assert.equal(extremalAscendantNode, S);
        });
      });

      describe("a single, relevant node with a releavnt parent", () => {
        it("returns its parent", () => {
          const extremalAscendantNode = V.retrieveExtremalAscendantNode();

          assert.equal(extremalAscendantNode, T1);
        });
      });

      describe("a relevant node with an irreleavnt parent", () => {
        it("returns its grandparent", () => {
          const extremalAscendantNode = T.retrieveExtremalAscendantNode();

          assert.equal(extremalAscendantNode, R);
        });
      });

      describe("n irreleavnt node with a relevant parent", () => {
        it("returns its grandparent", () => {
          const extremalAscendantNode = A.retrieveExtremalAscendantNode();

          assert.equal(extremalAscendantNode, R);
        });
      });
    });

    describe("findRightLeaningNode", () => {
      describe("an extremal ascendant node ", () => {
        it("returns the right extremal descendant node", () => {
          const rightLeaningNode = R.findRightLeaningNode();

          assert.equal(rightLeaningNode, T1);
        });
      });

      describe("an irrelevant node ", () => {
        it("returns the right extremal descendant node", () => {
          const rightLeaningNode = A.findRightLeaningNode();

          assert.equal(rightLeaningNode, T1);
        });
      });

      describe("an extremal descendant node ", () => {
        it("returns the right extremal descendant node", () => {
          const rightLeaningNode = T.findRightLeaningNode();

          assert.equal(rightLeaningNode, T1);
        });
      });
    });

    describe("findLeftLeaningNode", () => {
      let T1;

      before(() => {
        const T1Query = nodeQuery("/S/R/A/T/A1[0]/T1");

        T1 = T1Query(S);
      });

      describe("an extremal ascendant node ", () => {
        it("returns the left extremal descendant node", () => {
          const leftLeaningNode = R.findLeftLeaningNode();

          assert.equal(leftLeaningNode, T1);
        });
      });

      describe("an irrelevant node ", () => {
        it("returns the left extremal descendant node", () => {
          const leftLeaningNode = A.findLeftLeaningNode();

          assert.equal(leftLeaningNode, T1);
        });
      });

      describe("an extremal descendant node ", () => {
        it("returns the left extremal descendant node", () => {
          const leftLeaningNode = T.findLeftLeaningNode();

          assert.equal(leftLeaningNode, T1);
        });
      });
    });
  });
});
