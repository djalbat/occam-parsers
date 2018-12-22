'use strict';

var metastatementDefaultCustomGrammarBNF = '\n\n\n     proofAssertion                       ::=   context "\u22A2" judgement ;\n     \n     contextDefinition                    ::=   context "=" ( judgement | context ) ( "," ( judgement | context ) )* ;\n\n     judgement                            ::=   reference "::" metastatement ;\n\n     subproof                             ::=   supposition "..." metastatement ;\n\n     supposition                          ::=   "[" metastatement "]" ;\n\n\n\n     metastatement                        ::=   proofAssertion \n           \n                                            |   contextDefinition \n           \n                                            |   subproof \n                                            \n                                            |   metavariable \n\n                                            |   nonsense \n\n                                            ;\n\n      \n';

module.exports = metastatementDefaultCustomGrammarBNF;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9mbG9yZW5jZS9kZWZhdWx0Q3VzdG9tR3JhbW1hckJORi9tZXRhc3RhdGVtZW50LmpzIl0sIm5hbWVzIjpbIm1ldGFzdGF0ZW1lbnREZWZhdWx0Q3VzdG9tR3JhbW1hckJORiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLElBQU1BLG03QkFBTjs7QUE4QkFDLE9BQU9DLE9BQVAsR0FBaUJGLG9DQUFqQiIsImZpbGUiOiJtZXRhc3RhdGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBtZXRhc3RhdGVtZW50RGVmYXVsdEN1c3RvbUdyYW1tYXJCTkYgPSBgXG5cblxuICAgICBwcm9vZkFzc2VydGlvbiAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgY29udGV4dCBcIuKKolwiIGp1ZGdlbWVudCA7XG4gICAgIFxuICAgICBjb250ZXh0RGVmaW5pdGlvbiAgICAgICAgICAgICAgICAgICAgOjo9ICAgY29udGV4dCBcIj1cIiAoIGp1ZGdlbWVudCB8IGNvbnRleHQgKSAoIFwiLFwiICgganVkZ2VtZW50IHwgY29udGV4dCApICkqIDtcblxuICAgICBqdWRnZW1lbnQgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgcmVmZXJlbmNlIFwiOjpcIiBtZXRhc3RhdGVtZW50IDtcblxuICAgICBzdWJwcm9vZiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgc3VwcG9zaXRpb24gXCIuLi5cIiBtZXRhc3RhdGVtZW50IDtcblxuICAgICBzdXBwb3NpdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCJbXCIgbWV0YXN0YXRlbWVudCBcIl1cIiA7XG5cblxuXG4gICAgIG1ldGFzdGF0ZW1lbnQgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBwcm9vZkFzc2VydGlvbiBcbiAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBjb250ZXh0RGVmaW5pdGlvbiBcbiAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBzdWJwcm9vZiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBtZXRhdmFyaWFibGUgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIG5vbnNlbnNlIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICAgICAgXG5gO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1ldGFzdGF0ZW1lbnREZWZhdWx0Q3VzdG9tR3JhbW1hckJORjtcbiJdfQ==