import axios from "axios";
import { useQuery } from "react-query";

const ReactQueryComponent = () => {
  const fetchBooksApi = () => {
    return axios.get("http://localhost:4000/books");
  };
  const { isLoading, data } = useQuery("books", fetchBooksApi);

  if (isLoading) {
    return <h5>Loading....</h5>;
  }
  return (
    <div>
      {data?.data?.map((books) => {
        return <h5 key={books.id}>{books.name}</h5>;
      })}
    </div>
  );
};

export default ReactQueryComponent;
