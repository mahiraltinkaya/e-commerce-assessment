const useTruncute = () => {
  const truncate = (text) => {
    if (text.length > 40) {
      return `${text.substring(0, 40)} ...`;
    }
    return text;
  };

  return truncate;
};

export default useTruncute;
