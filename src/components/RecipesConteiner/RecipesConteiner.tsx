import { useRecipeData } from '../../hooks/useRecipeData'

import './recipes-conteiner.scss'

type RecipesConteinerProps = {
  recipe: [ 
    recipe: any, 
  ]
}

export function RecipesConteiner(props: RecipesConteinerProps) {

  const recipesData = useRecipeData();

  return(
    <section id="Recipes-Conteiner">
      <main className="flex flex-direction-column">
        <h2>{recipesData[props.recipe[0]].name}</h2>
        <p>{recipesData[props.recipe[0]].source}</p>
        <section id="recipes-ingredients">
          <p className="paragraph-section">Ingredients:</p>
          <ul>
            {recipesData[props.recipe[0]].ingredients.map((value: string) => {
              return( <li>{value}</li> )
            })}
          </ul>
        </section>
        <section id="recipes-intructions">
          <p className="paragraph-section">Instructions:</p>
          <p id="instruction" style={{whiteSpace: "pre-line"}}>{recipesData[props.recipe[0]].instructions}</p>
        </section>
      </main>
    </section>
  );
}