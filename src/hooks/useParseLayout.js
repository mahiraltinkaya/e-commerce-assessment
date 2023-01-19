const useParseLayout = () => {
  const floatParse = (number) => {
    return parseFloat(number).toFixed(2);
  };

  return floatParse;
};

export default useParseLayout;
