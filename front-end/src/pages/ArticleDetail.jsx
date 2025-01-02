import { useParams, useLoaderData } from "react-router-dom"
import axios  from "axios";
import articles from "./articleList";

function ArticleDetail() {
    const {name}  = useParams();
    const {upvotes } = useLoaderData();
    const article = articles.find(a => a.name === name);
    if (article) {
        return (
            <>
            <h1>{article.title}</h1>
            <p>This article has + {upvotes} upvotes!</p>
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


export async function loader({ params }){
    const response = await axios.get('/api/articles/'+ params.name);
    console.log(response.data); 
    const {upvotes, comments} = response.data;
    return {upvotes, comments};
   
}