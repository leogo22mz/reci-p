import { useNavigate } from "react-router-dom";
import "./toolbar.css";
import { HomeFilled, CompassFilled, UpCircleFilled, SmileFilled } from '@ant-design/icons'

function Toolbar() {
  
  const navigate = useNavigate();
  const goToList = () => {
    navigate('/');
  };
  const goToExplore = () => {
    navigate('/Explore');
  };
  const goToUpload = () => {
    navigate('/Upload');
  };
  const goToProfile = () => {
    navigate('/Profile');
  };

    return (
        <div className="toolbar">
           <button className="listButton" onClick={goToList} ><HomeFilled className="buttonIcon"/></button>
          <button className="exploreButton" onClick={goToExplore}><CompassFilled className="buttonIcon"/></button>
          <button className="uploadButton" onClick={goToUpload}><UpCircleFilled className="buttonIcon"/></button>
          <button className="profileButton" onClick={goToProfile}><SmileFilled className="buttonIcon"/></button>
        </div>
      );
}

export default Toolbar;
