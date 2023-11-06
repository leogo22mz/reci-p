import { Button } from 'antd';
import Toolbar from "../../components/toolbar/toolbar";
import { useNavigate } from "react-router-dom";
import './Profile.css';

function Profile() {
  const navigate = useNavigate();

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <div className="form-container">
        <div className="avatar-placeholder"></div>
        <p>Username:</p>
        <Button className="change-button">Change</Button>
        <p>Password:</p>
        <Button className="change-button">Change</Button>
        <Button className="log-button" onClick={() => navigate('/login')}>Log Out</Button>
      </div>
      <Toolbar />
    </div>
  );
}

export default Profile;
