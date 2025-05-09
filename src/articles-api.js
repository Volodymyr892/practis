import axios  from "axios";
axios.defaults.baseURL="PFRLR3wWc0xcLDv87Nq4715YHS60xzEHicnxBnzam7M";
export const fetchArticlesWithTopic = async topic => {
    const response = await axios.get(`/search${topic}`)
    return response.data;
  
}