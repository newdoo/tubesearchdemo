export default ({ id, allowFullScreen, query }) => {
    return (
      <div
        className="video"
        style={{
          position: "relative",
          paddingBottom: "56.25%" /* 16:9 */,
          paddingTop: 25,
          height: 0
        }}
      >
        <iframe
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
          src={`https://player.vimeo.com/video/${id}${query}`}
          frameBorder="0"
          allowFullScreen={allowFullScreen}
        />
      </div>
    );
  };