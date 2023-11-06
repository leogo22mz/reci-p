import { Button, Input } from 'antd';
import Toolbar from "../../components/toolbar/toolbar";
import { useNavigate } from "react-router-dom";
import './Profile.css';

function SignUp() {
  const navigate = useNavigate();

  return (
    <div className="profile-container">
      <h1>Sign Up</h1>
      <div className="form-container">
        <Input placeholder="Username" />
        <Input placeholder="Password" type="password" />
        <Input placeholder="Repeat Password" type="password" />
        <Input placeholder="Email" />
        <Input placeholder="Repeat Email" />
        <div>
          <Button className="sign-button" onClick={() => navigate('/profile')}>Sign Up</Button>
          <Button className="log-button" onClick={() => navigate('/login')}>Log In</Button>
        </div>
      </div>
      <Toolbar />
    </div>
  );
}

export default SignUp;
