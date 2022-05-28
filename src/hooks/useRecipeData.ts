import * as JsonData from "../data/recipe-db/db-recipes.json"

export function useRecipeData() {
  
  const Data = Object.keys(JsonData).map((i) => {
    return (JsonData as any)[i];
  }) 

  return Data;
}