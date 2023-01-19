const useTruncate = () => {
  const truncate = (text, size = 40) => {
    if (text.length > size) {
      return `${text.substring(0, size)} ...`;
    }
    return text;
  };

  return truncate;
};

export default useTruncate;
