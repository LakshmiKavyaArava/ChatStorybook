import PropTypes from "prop-types";

function Button({ label, backgroundColor = "red", size = "md", type = "primary", handleClick }) {
  let scale = 1;
  if (size === "sm") scale = 0.75;
  if (size === "lg") scale = 1.5;

  const style = {
    backgroundColor: type === "primary" ? backgroundColor : "transparent",
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: type === "secondary" ? `2px solid ${backgroundColor}` : "none",
    color: type === "secondary" ? backgroundColor : "#fff",
    cursor: "pointer",
  };

  return (
    <button onClick={handleClick} style={style}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  type: PropTypes.oneOf(["primary", "secondary"]),
  handleClick: PropTypes.func,
};

export default Button;
