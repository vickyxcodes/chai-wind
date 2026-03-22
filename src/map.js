export const styleMap = {
  // 🎨 COLORS
  c: { property: "color" },
  bg: { property: "background-color" },

  // 📦 SPACING
  p: { property: "padding", unit: "px" },
  m: { property: "margin", unit: "px" },

  px: {
    properties: ["padding-left", "padding-right"],
    unit: "px"
  },
  py: {
    properties: ["padding-top", "padding-bottom"],
    unit: "px"
  },

  // 📏 SIZE
  w: { property: "width" },
  h: { property: "height" },
  minw: { property: "min-width" },
  maxw: { property: "max-width" },
  minh: { property: "min-height" },
  maxh: { property: "max-height" },

  // 🔤 TYPOGRAPHY
  fs: { property: "font-size", unit: "px" },
  fw: { property: "font-weight" },
  lh: { property: "line-height" },
  ls: { property: "letter-spacing" },

  text: {
    center: { property: "text-align", value: "center" },
    left: { property: "text-align", value: "left" },
    right: { property: "text-align", value: "right" }
  },

  // 📐 LAYOUT
  d: { property: "display" },

  justify: { property: "justify-content" },
  align: { property: "align-items" },

  flex: {
    row: { property: "flex-direction", value: "row" },
    col: { property: "flex-direction", value: "column" }
  },

  gap: { property: "gap", unit: "px" },

  // 🎯 POSITIONING
  pos: { property: "position" },
  top: { property: "top", unit: "px" },
  left: { property: "left", unit: "px" },
  right: { property: "right", unit: "px" },
  bottom: { property: "bottom", unit: "px" },
  z: { property: "z-index" },

  // 🧱 BORDER
  rounded: { property: "border-radius", unit: "px" },
  border: { property: "border-width", unit: "px" },

  // 🪟 OVERFLOW
  overflow: { property: "overflow" },

  // 🎨 BACKGROUND
  bgc: { property: "background-color" },

  // 🌟 EXTRA VISUALS
  opacity: { property: "opacity" },
  shadow: { property: "box-shadow" },

  // 🔥 CUSTOM COMPONENTS (NO parser change needed)

  title: {
    property: "font-size",
    value: "32px",
    extra: [
      { property: "font-weight", value: "bold" },
      { property: "margin-bottom", value: "10px" }
    ]
  },

  description: {
    property: "color",
    value: "gray",
    extra: [
      { property: "font-size", value: "16px" }
    ]
  },

  "btn-primary": {
    property: "background-color",
    value: "#2563eb",
    extra: [
      { property: "color", value: "white" },
      { property: "padding", value: "10px 20px" },
      { property: "border", value: "none" },
      { property: "border-radius", value: "5px" },
      { property: "cursor", value: "pointer" }
    ]
  },

  card: {
    property: "padding",
    value: "20px",
    extra: [
      { property: "border", value: "1px solid #ddd" },
      { property: "border-radius", value: "10px" },
      { property: "margin", value: "10px 0" }
    ]
  },

  "card-title": {
    property: "font-size",
    value: "20px",
    extra: [
      { property: "font-weight", value: "bold" }
    ]
  }
};