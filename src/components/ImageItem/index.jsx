import "./index.css";

const ImageItem = (props) => {
  const { imageDetails } = props;
  const { id, imageUrl } = imageDetails;
  return (
    <>
      <li className="project-item-container">
        <img className="item-image" src={imageUrl} alt={`image-item ${id}}`} />
        <div className="project-item-details-container">
          <img src={imageUrl} className="project-item-title" alt="img" />
        </div>
      </li>
    </>
  );
};
export default ImageItem;
