import { useEffect, useState } from "react";
import { getIdFromLS } from "../../Utilities/LocalStorageitem";
import ListedReadbook from "../../ListedReadbook/ListedReadbook";
import { useOutletContext } from "react-router-dom";

const ListedWishlist = () => {
  const [sortedData, setSortedData] = useState([]);
  const [books, setbooks] = useState([]);
  const [savedbooks, setsavedbooks] = useState([]);
  const { propertyType } = useOutletContext();
  //console.log(propertyType);
  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => setbooks(data));
  }, []);

  useEffect(() => {
    const savedBooksId = getIdFromLS("wishlist");
    const bookSavedInls = books.filter((book) =>
      savedBooksId.includes(book.bookId)
    );
    setsavedbooks([...bookSavedInls]);
  }, [books]);

  // SORTBY FUNCTION
  useEffect(() => {
    const sortArray = (propertyType) => {
      const sortProperty = propertyType;
      const sorted = [...savedbooks].sort(
        (a, b) => b[sortProperty] - a[sortProperty]
      );
      setSortedData(sorted);
    };

    sortArray(propertyType);
  }, [propertyType]);

  return (
    <div>
      <div className="flex flex-col text-black  space-y-4 ">
        <ul className="flex flex-col gap-5 ">
          {(propertyType ? sortedData : savedbooks).map((savedbook, idx) => (
            <ListedReadbook key={idx} savedbook={savedbook}></ListedReadbook>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListedWishlist;
