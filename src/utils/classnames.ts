/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/prefer-default-export */

export const classNames = (classes: any) => {
  if (Array.isArray(classes)) {
    return classes.filter((e) => !!e).join(' ');
  }

  return classes;
};
