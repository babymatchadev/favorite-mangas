import "./App.css"
import { MangaTile } from "./MangaTile"
import { favoriteMangas } from "./mangasData"
function App() {
	const listOfMangas = favoriteMangas.map((props) => <MangaTile {...props} />)
	return <div className="layout">{listOfMangas}</div>
}

export default App
