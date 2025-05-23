import React from "react";
import { useNavigate } from "react-router-dom";
import './userprofile.css';
import { Link } from "react-router-dom";

function UserProfile() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2 className="title">User Profile</h2>

      <div className="form-box">
        <input name="name" className="input" placeholder="Name" disabled />
        <input name="email" className="input" placeholder="Email" disabled />

        <div className="signin-box">
          <input type="password" name="password" className="input" placeholder="Password" disabled />
          <input type="password" name="confirmPassword" className="input" placeholder="Confirm Password" disabled />
        </div>

        <div className="row">
          <input name="age" className="input" placeholder="Age" disabled />
          <input name="gender" className="input" placeholder="Gender" disabled />
          <input name="height" className="input" placeholder="Height (cm)" disabled />
          <input name="weight" className="input" placeholder="Weight (kg)" disabled />
        </div>

        <select name="activityLevel" className="input" disabled>
          <option>Select Activity Level</option>
          <option>Light</option>
          <option>Moderate</option>
          <option>Active</option>
        </select>

        <div>
          <label className="label">Dietary Preferences:</label>
          <label className="checkbox-label">
            <input type="checkbox" className="checkbox" disabled />
            Vegetarian
          </label>
          <label className="checkbox-label">
            <input type="checkbox" className="checkbox" disabled />
            Non-Vegetarian
          </label>
          <label className="checkbox-label">
            <input type="checkbox" className="checkbox" disabled />
            Both
          </label>
        </div>

        <input name="allergies" className="input" placeholder="Allergies" disabled />

        <select name="healthGoal" className="input" disabled>
          <option>Select Health Goal</option>
          <option>Weight Loss</option>
          <option>Muscle Gain</option>
          <option>Maintain Weight</option>
        </select>

        <div className="buttons">
          {/* <button className="button-signup" onClick={() => navigate("/edit-profile")}>Edit</button> */}
          <button className="button-signup" ><Link to="/edit-profile">Edit</Link></button>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
