const useTruncute = () => {
  const truncate = (text) => {
    if (text.length > 50) {
      return `${text.substring(0, 50)} ...`;
    }
    return text;
  };

  return truncate;
};

export default useTruncute;
