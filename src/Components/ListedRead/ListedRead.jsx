//import { useLoaderData } from "react-router-dom";
import { getIdFromLS } from "../../Utilities/LocalStorageitem";
import ListedReadbook from "../../ListedReadbook/ListedReadbook";
import { useEffect, useState } from "react";

const ListedRead = () => {
  const [books, setbooks] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setbooks(data));
  }, []);

  const savedBooksId = getIdFromLS("readlist");
  const bookSavedInls = books.filter((book) =>
    savedBooksId.includes(book.bookId)
  );

  return (
    <div>
      <div className="flex flex-col text-black  space-y-4 ">
        <ul className="flex flex-col gap-5 ">
          {bookSavedInls.map((savedbook, idx) => (
            <ListedReadbook key={idx} savedbook={savedbook}></ListedReadbook>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListedRead;
