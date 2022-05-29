import { useRecipeData } from "../../hooks/useRecipeData";

import "./random-recipe-getter.scss"

type RandomRecipeGetterProps = {
  recipe: [ 
    recipe: Number, 
    setRecipe: (value: Number) => void 
  ]
}

export function RandomRecipeGetter(props: RandomRecipeGetterProps) {

  const recipesData = useRecipeData();

  return(
    <section id="Random-Recipe-Getter">
      <main className="flex flex-centralized-both flex-direction-column">
        <h1>Random Food App</h1>
        <p>Click in the button to get a random recipe!</p>
        <button onClick={() => props.recipe[1](Math.floor(Math.random() * recipesData.length) + 1)}>Get Food &#x1f356;</button>
      </main>
    </section>
  )
}