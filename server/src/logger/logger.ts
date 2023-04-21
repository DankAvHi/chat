import clc from "cli-color";

export const logger = (message: string | number) => {
  const date = new Date();
  console.log(
    `${clc.yellow(
      `[${date.toLocaleTimeString()} ${date.toLocaleDateString()}]`,
    )} ${message}`,
  );
};
