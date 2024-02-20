const Heading = ({ text, wUnderline, punderline }) => {
  return (
    <span
      style={{
        display: "flex",
        width: "max-content",
        flexDirection: "column",
        alignItems: punderline,
      }}
    >
      <h4
        style={{
          fontSize: "2rem",
          marginBottom: ".5rem",
          color: "grey",
          textTransform: "uppercase",
        }}
      >
        {text}
      </h4>
      <div
        style={{
          width: wUnderline,
          backgroundColor: "rgb(146, 109, 8)",
          height: "2px",
        }}
        className="underline"
      ></div>
    </span>
  );
};

export default Heading;
