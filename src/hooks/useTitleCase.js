const useTitleCase = () => {
  const titleCase = (value) => {
    value = value.toLowerCase();
    value =
      value.substring(0, 1).toUpperCase() + value.substring(1, value.length);

    return value;
  };

  return titleCase;
};

export default useTitleCase;
