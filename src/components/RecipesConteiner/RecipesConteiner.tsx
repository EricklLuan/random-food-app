import { useRecipeData } from '../../hooks/useRecipeData'

import './recipes-conteiner.scss'

export function RecipesConteiner() {

  const recipesData = useRecipeData();
  const recipeNumber = Math.floor(Math.random() * recipesData.length) + 1

  return(
    <section id="Recipes-Conteiner" className="fill-parent flex flex-direction-column flex-centralized-items">
      <main>
        <h1>{recipesData[recipeNumber].name}</h1>
        <span>{recipesData[recipeNumber].source}</span>
        <section id="recipes-ingredients">
          <p>Ingredients:</p>
          <ul>
            {recipesData[recipeNumber].ingredients.map((value: string) => {
              return( <li>{value}</li> )
            })}
          </ul>
        </section>
        <section id="recipes-intructions">
          <p>Instructions:</p>
          <p id="instruction" style={{whiteSpace: "pre-line"}}>{recipesData[recipeNumber].instructions}</p>
        </section>
      </main>
    </section>
  );
}