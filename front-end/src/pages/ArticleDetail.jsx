import { useParams } from "react-router-dom"
import articles from "./articleList";

function ArticleDetail() {
    const {name}  = useParams();
    const article = articles.find(a => a.name === name);
    if (article) {
        return (
            <>
            <h1>{article.title}</h1>
            {article.content.map(p => <p key={p}>{p} </p> )}
            </>
    
        )
    } else {
        return(
            <>
            <h1>No article</h1>
            </>
        )
    }
   
}

export default ArticleDetail