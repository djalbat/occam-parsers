"use strict";

import { specialSymbols } from "occam-lexers";

import Definition from "../definition";
import TerminalSymbolPart from "../part/terminal/terminalSymbol";

const { startOfContent } = specialSymbols;

export default class StartOfContentPartDefinition extends Definition {
  static fromNothing() {
    const content = startOfContent,  ///
          terminalSymbolPart = TerminalSymbolPart.fromContent(content),
          parts = [
            terminalSymbolPart
          ],
          precedence = null,
          startOfContentPartDefinition = new StartOfContentPartDefinition(parts, precedence);

    return startOfContentPartDefinition;
  }
}
