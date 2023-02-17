import parse from "html-react-parser";

const TipTapPreview = ({ content }) => {
  return (
    <>
      <div className="ProseMirror">{parse(content)}</div>
    </>
  );
};

export default TipTapPreview;