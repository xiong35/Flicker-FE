import MarkdownIt from "markdown-it";

import MarkdownItCheckbox from "@gerhobbelt/markdown-it-checkbox";

import MarkdownItKatex from "markdown-it-texmath";
import MarkdownItKatexEngin from "katex";
import MarkdownItLazyLoad from "markdown-it-image-lazysizes";

import MarkdownItHL from "markdown-it-highlightjs";

import MdXss from "markdown-it-xss";

export const md = new MarkdownIt({ html: true })
  .use(MarkdownItCheckbox)
  .use(MarkdownItLazyLoad)
  .use(MarkdownItKatex, {
    engine: MarkdownItKatexEngin,
  })
  .use(MarkdownItHL, {
    auto: false,
  })
  .use(MdXss, {
    xss: function (xss) {
      // xss = require('xss')
      return {
        whiteList: Object.assign({}, xss.getDefaultWhiteList(), {
          img: ["src"],
        }),
        css: {
          whiteList: Object.assign({}, xss.getDefaultCSSWhiteList(), {}),
        },
        escapeHtml(html) {
          return html;
        },
      };
    },
  });
