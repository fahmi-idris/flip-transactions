/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const shortId = (length: number) => {
  return `_${Math.random().toString(length).substr(2, 9)}`;
};
