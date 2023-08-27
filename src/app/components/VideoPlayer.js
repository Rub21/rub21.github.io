function VideoPlayer({ src }) {
  return (
    <iframe
    className="w-full h-full object-contain rounded-lg"
      src={src}
      width="500"
      height="200"
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}

export default VideoPlayer;

