import parse from "html-react-parser";

const TipTapPreview = ({ description }) => {
  return (
    <>
      <div className="ProseMirror">{parse(description)}</div>
    </>
  );
};

export default TipTapPreview;