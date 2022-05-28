import { RecipesConteiner } from "../../components/RecipesConteiner/RecipesConteiner";
import "./home.scss"

export function Home() {
  return(
    <div id="Home" className="fill-page">
      <RecipesConteiner />
    </div>
  );
}