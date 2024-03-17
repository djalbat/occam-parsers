"use strict";

import { specialSymbols } from "occam-lexers";

import Definition from "../definition";
import PartChoice from "../partChoice";
import NoWhitespacePart from "../part/terminal/noWhitespace";
import ChoiceOfPartsPart from "../part/nonTerminal/choiceOfParts";
import TerminalSymbolPart from "../part/terminal/terminalSymbol";

const { opaque, semiOpaque } = specialSymbols;

export default class OpacityModifierRuleDefinition extends Definition {
  static fromNothing() {
    let content;

    content = opaque; ///

    const opaqueTerminalSymbolPart = TerminalSymbolPart.fromContent(content);

    content = semiOpaque; ///

    const semiOpaqueTerminalSymbolPart = TerminalSymbolPart.fromContent(content);

    const opaqueTerminalSymbolPartChoice = PartChoice.fromPart(opaqueTerminalSymbolPart),
          semiOpaqueTerminalSymbolPartChoice = PartChoice.fromPart(semiOpaqueTerminalSymbolPart),
          partChoices = [
            opaqueTerminalSymbolPartChoice,
            semiOpaqueTerminalSymbolPartChoice
          ],
          choiceOfOpaqueTerminalSymbolAndSemiOpaqueTerminalSymbolPartsPart = ChoiceOfPartsPart.fromPartChoices(partChoices),
          noWhitespacePart = NoWhitespacePart.fromNothing(),
          parts = [
            noWhitespacePart,
            choiceOfOpaqueTerminalSymbolAndSemiOpaqueTerminalSymbolPartsPart
          ],
          precedence = null,
          opacityModifierRuleDefinition = new OpacityModifierRuleDefinition(parts, precedence);

    return opacityModifierRuleDefinition;
  }
}
