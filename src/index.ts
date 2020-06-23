import Calculator from "./Calculator";

/**
 * global hello implementation
 */
global.print20Plus6 = () => {
  const calculator = new Calculator();
  Logger.log("20 + 6 = " + calculator.sum(20, 6));
};

/**
 * global getAuthor function implementation
 */
global.getAuthor = () => {
  return "Killua Zoldyck";
};
