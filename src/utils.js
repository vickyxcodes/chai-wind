export function addUnit(value, unit = "px") {
  if (isNaN(value)) return value;
  return value + unit;
}