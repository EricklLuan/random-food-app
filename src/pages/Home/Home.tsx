import { RecipesConteiner } from "../../components/RecipesConteiner/RecipesConteiner";
import { RandomRecipeGetter } from "../../components/RandomRecipeGetter/RandomRecipeGetter";
import "./home.scss"
import { useState } from "react";
import { useRecipeData } from "../../hooks/useRecipeData";

export function Home() {

  const recipesData = useRecipeData();
  const [recipe, setRecipe] = useState<Number>(Math.floor(Math.random() * recipesData.length) + 1)

  return(
    <div id="Home" className="flex flex-direction-column">
      <main id="content" className="flex flex-direction-column">
        <RandomRecipeGetter recipe={[recipe, setRecipe]}/>
        <RecipesConteiner recipe={[recipe]}/>
      </main>
    </div>
  );
}