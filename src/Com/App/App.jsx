import {  useState } from "react";
import ArticleList from "../ArticleList/ArticleList";
import {fetchArticlesWithTopic} from "../../articles-api";
import Form from "../Form/Form";

export default function App(){
  
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false)

    const handleSearch = async (newTopic) => {
        try {
          setArticles([]);
          setError(false);
          setLoading(true);
          const data = await fetchArticlesWithTopic(newTopic);
          setArticles(data);
          setLoading(false)
        } catch (error) {
          setError(true);
        } finally {
          setLoading(false);
        }
      };
    return(
        <>
            <h1>Latest articles</h1>
            <Form onSearch={handleSearch}/>
       {loading && <p style={{ fontSize: 20 }}>Loading data, please wait...</p>}
       {error && (
         <p>Whoops, something went wrong! Please try reloading this page!</p>
       )}
       {articles.length > 0 && <ArticleList items={articles} />}
        </>
    );
}