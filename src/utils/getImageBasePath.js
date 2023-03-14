export const getImageBasePath = (image) => {
  return (
    window.location.protocol + "//" + window.location.host + "/images/" + image
  );
};
