//import { useLoaderData } from "react-router-dom";
import { getIdFromLS } from "../../Utilities/LocalStorageitem";
import ListedReadbook from "../../ListedReadbook/ListedReadbook";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

const ListedRead = () => {
  const [books, setbooks] = useState([]);
  const [sortedData, setSortedData] = useState([]);

  const { propertyType } = useOutletContext();

  // console.log(propertyType);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setbooks(data));
  }, []);

  const savedBooksId = getIdFromLS("readlist");
  const bookSavedInls = books.filter((book) =>
    savedBooksId.includes(book.bookId)
  );

  // SORTBY FUNCTION
  useEffect(() => {
    const sortArray = (propertyType) => {
      const sortProperty = propertyType;
      const sorted = [...bookSavedInls].sort(
        (a, b) => b[sortProperty] - a[sortProperty]
      );
      setSortedData(sorted);
    };

    sortArray(propertyType);
  }, [propertyType]);

  //console.log(sortedData);

  return (
    <div>
      <div className="flex flex-col text-black  space-y-4 ">
        <ul className="flex flex-col gap-5 ">
          {(propertyType ? sortedData : bookSavedInls).map((savedbook, idx) => (
            <ListedReadbook key={idx} savedbook={savedbook}></ListedReadbook>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListedRead;
