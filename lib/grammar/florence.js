'use strict';

var grammar = '\n\n    \n    assertion                       ::=   rule | theorem | lemma\n    \n    \n    \n    theorem                         ::=   theoremDeclaration premise(s)? conclusion proof\n    \n    theoremDeclaration              ::=   Theorem parenthesisedLabel? <END_OF_LINE>+\n    \n    \n    \n    lemma                           ::=   lemmaDeclaration premise(s)? conclusion proof\n    \n    lemmaDeclaration                ::=   Lemma parenthesisedLabel? <END_OF_LINE>+\n    \n    \n    \n    rule                            ::=   ruleDeclaration premise(s) conclusion proof?\n    \n    ruleDeclaration                 ::=   Rule parenthesisedLabel? <END_OF_LINE>+\n    \n    \n    \n    premise(s)                      ::=   premise | premises\n    \n    premise                         ::=   premiseDeclaration (labelled)statement\n    \n    premises                        ::=   premisesDeclaration (labelled)statement (labelled)statement+\n    \n    premiseDeclaration              ::=   Premise <END_OF_LINE>+\n    \n    premisesDeclaration             ::=   Premises <END_OF_LINE>+\n    \n    \n\n    conclusion                      ::=   conclusionDeclaration statement\n    \n    conclusionDeclaration           ::=   Conclusion <END_OF_LINE>+\n    \n    \n\n    proof                           ::=   proofDeclaration subLemmaOr(labelled)statement* hence\n    \n    proofDeclaration                ::=   Proof <END_OF_LINE>+\n    \n    \n\n    subLemmaOr(labelled)statement   ::=   subLemma | (labelled)statement\n\n    subLemma                        ::=   suppose then? hence\n    \n    suppose                         ::=   supposeDeclaration statement\n    \n    supposeDeclaration              ::=   Suppose <END_OF_LINE>+\n    \n    then                            ::=   thenDeclaration (labelled)statement+\n    \n    thenDeclaration                 ::=   Then <END_OF_LINE>+\n    \n    hence                           ::=   henceDeclaration statement\n    \n    henceDeclaration                ::=   Hence <END_OF_LINE>+\n    \n    \n    \n    parenthesisedLabel              ::=   (<NO_WHITESPACE>label<NO_WHITESPACE>)\n\n    (labelled)statement             ::=   labelledStatement | statement\n    \n    labelledStatement               ::=   unassigned+ by label <END_OF_LINE>+\n    \n    statement                       ::=   unassigned+ <END_OF_LINE>+\n    \n    label                           ::=   unassigned\n    \n';

module.exports = grammar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ncmFtbWFyL2Zsb3JlbmNlLmpzIl0sIm5hbWVzIjpbImdyYW1tYXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxJQUFJQSxzNUVBQUo7O0FBK0VBQyxPQUFPQyxPQUFQLEdBQWlCRixPQUFqQiIsImZpbGUiOiJmbG9yZW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGdyYW1tYXIgPSBgXG5cbiAgICBcbiAgICBhc3NlcnRpb24gICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHJ1bGUgfCB0aGVvcmVtIHwgbGVtbWFcbiAgICBcbiAgICBcbiAgICBcbiAgICB0aGVvcmVtICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHRoZW9yZW1EZWNsYXJhdGlvbiBwcmVtaXNlKHMpPyBjb25jbHVzaW9uIHByb29mXG4gICAgXG4gICAgdGhlb3JlbURlY2xhcmF0aW9uICAgICAgICAgICAgICA6Oj0gICBUaGVvcmVtIHBhcmVudGhlc2lzZWRMYWJlbD8gPEVORF9PRl9MSU5FPitcbiAgICBcbiAgICBcbiAgICBcbiAgICBsZW1tYSAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIGxlbW1hRGVjbGFyYXRpb24gcHJlbWlzZShzKT8gY29uY2x1c2lvbiBwcm9vZlxuICAgIFxuICAgIGxlbW1hRGVjbGFyYXRpb24gICAgICAgICAgICAgICAgOjo9ICAgTGVtbWEgcGFyZW50aGVzaXNlZExhYmVsPyA8RU5EX09GX0xJTkU+K1xuICAgIFxuICAgIFxuICAgIFxuICAgIHJ1bGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgcnVsZURlY2xhcmF0aW9uIHByZW1pc2UocykgY29uY2x1c2lvbiBwcm9vZj9cbiAgICBcbiAgICBydWxlRGVjbGFyYXRpb24gICAgICAgICAgICAgICAgIDo6PSAgIFJ1bGUgcGFyZW50aGVzaXNlZExhYmVsPyA8RU5EX09GX0xJTkU+K1xuICAgIFxuICAgIFxuICAgIFxuICAgIHByZW1pc2UocykgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgcHJlbWlzZSB8IHByZW1pc2VzXG4gICAgXG4gICAgcHJlbWlzZSAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBwcmVtaXNlRGVjbGFyYXRpb24gKGxhYmVsbGVkKXN0YXRlbWVudFxuICAgIFxuICAgIHByZW1pc2VzICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgcHJlbWlzZXNEZWNsYXJhdGlvbiAobGFiZWxsZWQpc3RhdGVtZW50IChsYWJlbGxlZClzdGF0ZW1lbnQrXG4gICAgXG4gICAgcHJlbWlzZURlY2xhcmF0aW9uICAgICAgICAgICAgICA6Oj0gICBQcmVtaXNlIDxFTkRfT0ZfTElORT4rXG4gICAgXG4gICAgcHJlbWlzZXNEZWNsYXJhdGlvbiAgICAgICAgICAgICA6Oj0gICBQcmVtaXNlcyA8RU5EX09GX0xJTkU+K1xuICAgIFxuICAgIFxuXG4gICAgY29uY2x1c2lvbiAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBjb25jbHVzaW9uRGVjbGFyYXRpb24gc3RhdGVtZW50XG4gICAgXG4gICAgY29uY2x1c2lvbkRlY2xhcmF0aW9uICAgICAgICAgICA6Oj0gICBDb25jbHVzaW9uIDxFTkRfT0ZfTElORT4rXG4gICAgXG4gICAgXG5cbiAgICBwcm9vZiAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHByb29mRGVjbGFyYXRpb24gc3ViTGVtbWFPcihsYWJlbGxlZClzdGF0ZW1lbnQqIGhlbmNlXG4gICAgXG4gICAgcHJvb2ZEZWNsYXJhdGlvbiAgICAgICAgICAgICAgICA6Oj0gICBQcm9vZiA8RU5EX09GX0xJTkU+K1xuICAgIFxuICAgIFxuXG4gICAgc3ViTGVtbWFPcihsYWJlbGxlZClzdGF0ZW1lbnQgICA6Oj0gICBzdWJMZW1tYSB8IChsYWJlbGxlZClzdGF0ZW1lbnRcblxuICAgIHN1YkxlbW1hICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgc3VwcG9zZSB0aGVuPyBoZW5jZVxuICAgIFxuICAgIHN1cHBvc2UgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgc3VwcG9zZURlY2xhcmF0aW9uIHN0YXRlbWVudFxuICAgIFxuICAgIHN1cHBvc2VEZWNsYXJhdGlvbiAgICAgICAgICAgICAgOjo9ICAgU3VwcG9zZSA8RU5EX09GX0xJTkU+K1xuICAgIFxuICAgIHRoZW4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgdGhlbkRlY2xhcmF0aW9uIChsYWJlbGxlZClzdGF0ZW1lbnQrXG4gICAgXG4gICAgdGhlbkRlY2xhcmF0aW9uICAgICAgICAgICAgICAgICA6Oj0gICBUaGVuIDxFTkRfT0ZfTElORT4rXG4gICAgXG4gICAgaGVuY2UgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBoZW5jZURlY2xhcmF0aW9uIHN0YXRlbWVudFxuICAgIFxuICAgIGhlbmNlRGVjbGFyYXRpb24gICAgICAgICAgICAgICAgOjo9ICAgSGVuY2UgPEVORF9PRl9MSU5FPitcbiAgICBcbiAgICBcbiAgICBcbiAgICBwYXJlbnRoZXNpc2VkTGFiZWwgICAgICAgICAgICAgIDo6PSAgICg8Tk9fV0hJVEVTUEFDRT5sYWJlbDxOT19XSElURVNQQUNFPilcblxuICAgIChsYWJlbGxlZClzdGF0ZW1lbnQgICAgICAgICAgICAgOjo9ICAgbGFiZWxsZWRTdGF0ZW1lbnQgfCBzdGF0ZW1lbnRcbiAgICBcbiAgICBsYWJlbGxlZFN0YXRlbWVudCAgICAgICAgICAgICAgIDo6PSAgIHVuYXNzaWduZWQrIGJ5IGxhYmVsIDxFTkRfT0ZfTElORT4rXG4gICAgXG4gICAgc3RhdGVtZW50ICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICB1bmFzc2lnbmVkKyA8RU5EX09GX0xJTkU+K1xuICAgIFxuICAgIGxhYmVsICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgdW5hc3NpZ25lZFxuICAgIFxuYDtcblxubW9kdWxlLmV4cG9ydHMgPSBncmFtbWFyO1xuIl19