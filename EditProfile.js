import React from "react";
import './userprofile.css';

function EditProfile() {
  return (
    <div className="container">
      <h2 className="title">Edit Profile</h2>

      <div className="form-box">
        <input name="name" className="input" placeholder="Name" />
        <input name="email" className="input" placeholder="Email" />

        <div className="signin-box">
          <input type="password" name="password" className="input" placeholder="Password" />
          <input type="password" name="confirmPassword" className="input" placeholder="Confirm Password" />
        </div>

        <div className="row">
          <input name="age" className="input" placeholder="Age" />
          <input name="gender" className="input" placeholder="Gender" />
          <input name="height" className="input" placeholder="Height (cm)" />
          <input name="weight" className="input" placeholder="Weight (kg)" />
        </div>

        <select name="activityLevel" className="input">
          <option>Select Activity Level</option>
          <option>Light</option>
          <option>Moderate</option>
          <option>Active</option>
        </select>

        <div>
          <label className="label">Dietary Preferences:</label>
          <label className="checkbox-label">
            <input type="checkbox" className="checkbox" />
            Vegetarian
          </label>
          <label className="checkbox-label">
            <input type="checkbox" className="checkbox" />
            Non-Vegetarian
          </label>
          <label className="checkbox-label">
            <input type="checkbox" className="checkbox" />
            Both
          </label>
        </div>

        <input name="allergies" className="input" placeholder="Allergies" />

        <select name="healthGoal" className="input">
          <option>Select Health Goal</option>
          <option>Weight Loss</option>
          <option>Muscle Gain</option>
          <option>Maintain Weight</option>
        </select>

        <div className="buttons">
          <button className="button-signup">Save</button>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
