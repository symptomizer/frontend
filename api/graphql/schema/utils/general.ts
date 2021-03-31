export const prepare = (str) => (str ? str.trim() : "");
export const nullable = (str) => prepare(str) || undefined;
export const listify = (thing) => thing || [];
export const removeNulls = (things) =>
  things.map(nullable).filter((thing) => thing);

export const snakeCase = (str) =>
  prepare(str).toLowerCase().replaceAll(" ", "-");
