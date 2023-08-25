// components/VideoPlayer.js
function VideoPlayer({ src }) {
  console.log('%cVideoPlayer.js line:3 src', 'color: #007acc;', src);
  return (
    <div className="bg-black rounded-lg ">
    <iframe
      src={src}
      width="500"
      height="300"
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
  );
}

export default VideoPlayer;

