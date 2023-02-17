import "../styles/Teammate.css";

const Teammate = (props) => {
  return (
    <div id="teammate">
      <div className="teammate-pic">
        <img src={props.pic} alt="pic"></img>
      </div>
      <div className="teammate-name">{props.name}</div>
      <div className="teammate-role">{props.role}</div>
    </div>
  );
};

export default Teammate;
