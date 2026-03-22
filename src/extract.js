import { parseClass } from "./parser.js";

export function initChaiCSS() {
  const elements = document.body.querySelectorAll("*");

  elements.forEach((el) => {
    const styleObj = {};

    el.classList.forEach((cls) => {
      if (!cls.startsWith("chai-")) return;

      const results = parseClass(cls);
      if (!results) return;

      results.forEach(({ property, value }) => {
        styleObj[property] = value;
      });

      // 🧹 remove processed class
      el.classList.remove(cls);
    });

    const styleString = Object.entries(styleObj)
      .map(([prop, val]) => `${prop}: ${val};`)
      .join(" ");

    if (styleString) {
      el.setAttribute("style", styleString);
    }
  });
}