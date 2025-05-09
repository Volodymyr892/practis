export default function ArticleList({items}){
    if (!items || items.length === 0) {
        return <p>No articles to display.</p>;
      }
    return (<ul>
    {items.map(({ objectID, url, title }) => (
      <li key={objectID}>
        <a href={url} target="_blank" rel="noreferrer noopener">
          {title}
        </a>
      </li>
    ))}
  </ul>)
}
