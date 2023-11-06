import Toolbar from "../../components/toolbar/toolbar";
import Recipe from "../../components/recipe/recipe";
import "./RecipeList.css";
import { Input } from 'antd';

const App: React.FC = () => <Input placeholder="Basic usage" />;
function RecipeList() {

    return (
      
        <div className="recipe-list-background">
          <h1>My Recipes</h1>

          <div className="recipe-list">
          <Input placeholder="Search recipes" />
          <br/>
          <Recipe />
          <Recipe />
          <Recipe />
          <Recipe />
          <Recipe /><Recipe />
          <Recipe />
          </div>
          <Toolbar />

        </div>
      );

}

export default RecipeList;