export const Image = ({ data }) => {
  return data.extraImageUrl.map((url, index) => (
    <>
      <img key={index} className="img" alt="" src={url} />
    </>
  ));
};
