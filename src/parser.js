import { styleMap } from "./map.js";
import { addUnit } from "./utils.js";

export function parseClass(cls) {
  const parts = cls.split("-");

  const type = parts[1];
  const sub = parts[2];
  const value = parts[3] || parts[2];

  const config = styleMap[type] || styleMap[`${type}-${sub}`];

  if (!config) return null;

  // 🔥 custom component (title, btn, card)
  if (config.extra) {
    return [
      { property: config.property, value: config.value },
      ...config.extra
    ];
  }

  // 🔥 grouped (text-center)
  if (config[sub]) {
    return [config[sub]];
  }

  // 🔥 multi-property (px, py)
  if (config.properties) {
    return config.properties.map((prop) => ({
      property: prop,
      value: addUnit(value)
    }));
  }

  // 🔥 normal
  if (config.property) {
    return [
      {
        property: config.property,
        value: config.unit ? addUnit(value, config.unit) : value
      }
    ];
  }

  return null;
}