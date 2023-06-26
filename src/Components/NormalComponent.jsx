import axios from "axios";
import { useEffect, useState } from "react";

const NormalComponent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/books").then((res) => setData(res.data));
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <h5>Loading....</h5>;
  }
  return (
    <div>
      {data.map((books) => {
        return <h5 key={books.id}>{books.name}</h5>;
      })}
    </div>
  );
};

export default NormalComponent;
