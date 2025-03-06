import isPropValid from "@emotion/is-prop-valid";

export const shouldForwardProp = (propName: string, target: any) => {
  return typeof target === "string" ? isPropValid(propName) : true;
};