import "../styles/Register.css";

const Register = () => {
  return (
    <div id="register">
      <form>
        <label>
          <div>
            Type:
            <select>
              <option>Basic</option>
              <option>Boosted</option>
              <option>Boujee</option>
            </select>
          </div>
          <div className="form-text">
            Riot ID:
            <textarea />
          </div>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Register;
