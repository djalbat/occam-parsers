'use strict';

var grammar = `

  sentence                            ::=   assumption
  
                                        |   definition
                          
                                        |   inductive
                          
                                        |   fixpoint
                          
                                        |   assertion proof
                            
                            
                            
  assumption                          ::=   assumption_keyword assums .
  
  assumption_keyword                  ::=   Axiom | Conjecture
  
                                        |   Parameter | Parameters
                          
                                        |   Variable | Variables
                          
                                        |   Hypothesis | Hypotheses
                            
                            
                            
  assums                              ::=   assum
  
                                        |   assumInBrackets+

  assum                               ::=   ident+ : term

  assumInBrackets                     ::=   ( assum )
                            
                            
                            
  definition                          ::=   Local? Definition ident binders? colonThenTerm? := term .
  
                                        |   Let ident binders? colonThenTerm? := term .
                            
                            
                            
  inductive                           ::=   Inductive ind_body withThenInd_body+ .
                          
                                        |   CoInductive ind_body withThenInd_body+ .
                          
  withThenInd_body                    ::=   with ind_body

  ind_body                            ::=   ident binders? : term := ind_body'?
  
  ind_body'                           ::=   |? identThenBindersThenColonThenTerm |ThenInd_body''+
  
  |ThenInd_body''                     ::=   | identThenBindersThenColonThenTerm
  
  identThenBindersThenColonThenTerm   ::=   ident binders? colonThenTerm?
                            
                            
                            
  fixpoint                            ::=   Fixpoint fix_body withThenfix_body+ .
  
                                        |   CoFixpoint cofix_body withThenCofix_body+ .
                          
  withThenfix_body                    ::=   with fix_body
  
  withThenCofix_body                  ::=   with cofix_body
                            
                            
                            
  assertion                           ::=   assertion_keyword ident binders? : term .

  assertion_keyword                   ::=   Theorem | Lemma
  
                                        |   Remark | Fact
                          
                                        |   Corollary | Proposition
                          
                                        |   Definition | Example
                            
                            
                            
  proof                               ::=   Proof . … Qed .
  
                                        |   Proof . … Defined .
                          
                                        |   Proof . … Admitted .
                          
                          
                          
                          
                          
                          
                          
                          
                          
                          
                          
                          
  term                                ::=   forall binders , term term'
  
                                        |   fun binders => term term'
  
                                        |   fix fix_bodies term'
  
                                        |   cofix cofix_bodies term'
  
                                        |   let let_body term'
  
                                        |   if term dep_ret_type? then term else term term'
  
                                        |   @ qualid terms? term'
  
                                        |   match match_items return_type? with orEquations? end term'

                                        |   qualid term'

                                        |   sort term'

                                        |   num term'

                                        |   _ term'

                                        |   ( term ) term'
                          
                          
                          
  term'                               ::=   : term term'
  
                                        |   <: term term'
  
                                        |   :> term'
  
                                        |   -> term term'
  
                                        |   arg+ term'
  
                                        |   % ident term'
  
                                        |   ε
                          
                          
                          
  let_body                            ::=   ident binders? colonThenTerm? := term in term
  
                                        |   fix fix_body in term
  
                                        |   cofix cofix_body in term
  
                                        |   ( names ) dep_ret_type? := term in term
  
                                        |   ' pattern inTerm? := term return_type? in term
                          
                          
                          
  inTerm                              ::=   in term
  
  terms                               ::=   term+

  match_items                         ::=   match_item commaThenMatchItem*

  commaThenMatchItem                  ::=   , match_item

  orEquations                         ::=   |? equation orEquation*

  orEquation                          ::=   | equation
                          
                          
                          
  arg                                 ::=   term

                                        |   ( ident := term )
                          
                          
                          
  binders                             ::=   binder+
                          
                          
                          
  binder                              ::=   name

                                        |   ( name+ : term )

                                        |   ( name colonThenTerm? := term )
                          
                          
                          
  name                                ::=   ident

                                        |   _
                          
                          
                          
  qualid                              ::=   ident<NO_WHITESPACE>access_ident*
                          
                          
                          
  sort                                ::=   Prop | Set | Type
                          
                          
                          
                          
                          
                          
                          
                          
                          
                          
                          
                          
  fix_bodies                          ::=   fix_body
  
                                        |   fix_body withFix_body+ for ident
                          
  withFix_body                        ::=   with fix_body                     

  cofix_bodies                        ::=   cofix_body
  
                                        |   cofix_body withCofix_body+ for ident
                          
  withCofix_body                      ::=   with cofix_body
                       
                       
                       
  fix_body                            ::=   ident binders annotation? colonThenTerm? := term

  cofix_body                          ::=   ident binders? colonThenTerm? := term
                       
                       
                       
  colonThenTerm                       ::=   : term
                       
                       
                       
  annotation                          ::=   { struct ident }
                       
                       
                       
  match_item                          ::=   term asName? inQualidPatterns?

  inQualidPatterns                    ::=   in qualid patterns?

  patterns                            ::=   pattern+
  
  dep_ret_type                        ::=   asName? return_type

  asName                              ::=   as name
                       
                       
                       
  return_type                         ::=   return term
                       
                       
                       
  equation                            ::=   mult_pattern |ThenMult_pattern* => term

  |ThenMult_pattern                   ::=   | mult_pattern
                       
                       
                       
  mult_pattern                        ::=   pattern commaThenPattern*
                       
                       
                       
  pattern                             ::=   @? qualid patterns pattern'
  
                                        |   qualid pattern'
  
                                        |   _ pattern'
  
                                        |   num pattern'
  
                                        |   ( or_patterns ) pattern'

  pattern'                            ::=   as ident pattern' 
  
                                        |   % ident pattern' 
  
                                        |   ε

  commaThenPattern                    ::=   , pattern

  or_patterns                         ::=   or_pattern commaThenOrPattern*

  commaThenOrPattern                  ::=   , or_pattern
                       
                       
                       
  or_pattern                          ::=   pattern |ThenPattern*

  |ThenPattern                        ::=   | pattern
  
`;

module.exports = grammar;



