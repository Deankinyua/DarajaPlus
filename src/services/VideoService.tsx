type VideoTypes = {
  videoName: string;
};

const VideoService = ({ videoName }: VideoTypes) => {
  return (
    <div className="videoMain">
      <video src={videoName} autoPlay loop muted />
    </div>
  );
};

export default VideoService;
