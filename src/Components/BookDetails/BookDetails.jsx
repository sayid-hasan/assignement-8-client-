import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const { userId } = useParams();
  const books = useLoaderData();
  const book = books.find((book) => book.bookId === parseInt(userId));
  console.log(book);

  return (
    <div>
      <h2>Details oF id : </h2>
    </div>
  );
};

export default BookDetails;
