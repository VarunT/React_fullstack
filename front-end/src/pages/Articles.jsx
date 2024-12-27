import { Link } from "react-router-dom"
import articles from "./articleList";

function Articles() {
    const articlList = articles

    return (
        <>
        <h1>About Articles Page</h1>
        {articlList.map(a =>  <Link to={a.name}>
            <h2>{a.title}</h2>
            </Link> )}
      
        </>
    )
}

export default Articles