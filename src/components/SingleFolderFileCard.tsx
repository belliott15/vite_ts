type SingleFolderFileCardProps = {
  type: "image" | "audio" | "video";
  name: string;
  id: number;
  url: string;
};

const SingleFolderFileCard = ({
  id,
  name,
  type,
  url,
}: SingleFolderFileCardProps) => {
  return (
    <div className="w-full ">
      <div>
        {type === "image" ? (
          <img src={url} alt={name} className="" />
        ) : type === "video" ? (
          <video src={url} />
        ) : type === "audio" ? (
          <audio src={url} />
        ) : (
          <div>
            <p>Unknown file format</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleFolderFileCard;
