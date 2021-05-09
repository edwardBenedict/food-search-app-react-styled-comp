import { useHistory } from "react-router-dom";
import { RecipeCard, RecipeImage, Button, RecipeHeader } from "./style";
import defaultImg from "../../assets/default-image.jpg";

const RecipeCardComp = ({ recipe }) => {
  let history = useHistory();

  const moreClick = () => {
    history.push({
      pathname: "/details",
      recipe: recipe,
    });
  };

  return (
    <RecipeCard>
      <RecipeHeader>{recipe.label}</RecipeHeader>
      <RecipeImage src={recipe.image || defaultImg} alt="" />
      <Button onClick={moreClick}>View More</Button>
    </RecipeCard>
  );
};

export default RecipeCardComp;
