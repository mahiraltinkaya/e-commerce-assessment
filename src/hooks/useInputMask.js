const formatters = {
  "#": "[0-9]",
  a: "[A-Za-z]",
  "*": "[A-Za-z0-9]",
};
const useInputMask = () => {
  const inputMasked = (mask, text, seperator = " ") => {
    mask = mask.replace(/:/gim, "Q");
    mask = mask.replace(/\//gim, "T");
    mask = mask.replace(/-/gim, "S");
    mask = mask.replace(/\(/gim, "L");
    mask = mask.replace(/\)/gim, "R");
    text = text
      .replace(/ /gim, "")
      .replace(/\//gim, "")
      .replace(/-/gim, "")
      .replace(/:/gim, "");

    let splitMask = mask.split("");
    let splitText = text.split("");
    let newText = [];

    for (let index = 0; index < splitMask.length; index++) {
      const element = splitMask[index];
      if (!splitText[index]) {
        splitText[index] = "";
      } else if (element === seperator) {
        splitText.splice(index, 0, seperator);
        newText.push(seperator);
      } else if (element === "*") {
        if (splitText[index].match(formatters["*"]))
          newText.push(splitText[index]);
      } else if (element === "#") {
        if (splitText[index].match(formatters["#"]))
          newText.push(splitText[index]);
      } else if (element === "a") {
        if (splitText[index].match(formatters["a"]))
          newText.push(splitText[index]);
      } else if (element === "L") {
        splitText.splice(index, 0, "(");
        newText.push("(");
      } else if (element === "R") {
        splitText.splice(index, 0, ")");
        newText.push(")");
      } else if (element === "S") {
        splitText.splice(index, 0, "-");
        newText.push("-");
      } else if (element === "T") {
        splitText.splice(index, 0, "/");
        newText.push("/");
      } else if (element === "Q") {
        splitText.splice(index, 0, ":");
        newText.push(":");
      }
    }

    return newText.join().replace(/,/gim, "").trim();
  };

  return inputMasked;
};

export default useInputMask;
