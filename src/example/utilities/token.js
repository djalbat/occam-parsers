"use strict";

export function tokenAsHTML(token) {
  const type = token.getType(),
        content = token.getContent(),
        className = type, ///
        html = `<span class="${className}">${content}</span>`;

    return html;
}
