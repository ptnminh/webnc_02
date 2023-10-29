export const Input = (props) => {
  return (
    <div
      style={{
        padding: 10,
        position: "relative",
        // top: 0,
        // right: 0,
      }}
    >
      <input
        type="text"
        placeholder="Tìm kiếm"
        onChange={props.onChange}
        style={{
          width: "98%",
          height: 50,
          paddingLeft: 20,
          outline: "none",
          borderRadius: 10,
          boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
          borderColor: "#e0e0e0",
        }}
      ></input>
      <button
        onClick={props.onClick}
        style={{
          position: "absolute",
          right: 30,
          top: 20,
          width: 100,
          height: 30,
          borderRadius: 10,
          backgroundColor: "#b3e5fc",
          outline: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        Tìm kiếm
      </button>
    </div>
  );
};
