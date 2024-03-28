import { useLoaderData, useParams } from "react-router-dom";
import { getIdFromLS, saveItemLS } from "../../Utilities/LocalStorageitem";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookDetails = () => {
  const { userId } = useParams();
  const idInt = parseInt(userId);
  const books = useLoaderData();
  const book = [...books].find((book) => book.bookId === idInt);

  const handleRead = () => {
    console.log("read", idInt);

    let readListArr = getIdFromLS("readlist");
    if (readListArr.includes(idInt)) {
      toast.warn("Books Already exist in readList !");
    } else {
      toast.success("Books  Added in list !");
    }

    saveItemLS(idInt, "readlist");
  };

  const handleWishlist = () => {
    console.log("wishlist", idInt);
    const readListArr = getIdFromLS("readlist");
    if (!readListArr.includes(idInt)) {
      let wishlistArr = getIdFromLS("wishlist");
      if (wishlistArr.includes(idInt)) {
        toast.warn("Books Already exist in wishlist !");
      } else {
        toast.success("Books  Added in list !");
      }

      saveItemLS(idInt, "wishlist");
    } else {
      toast.error("You have already read this book");
    }
  };

  return (
    <div>
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col items-center justify-center py-6 mx-auto  lg:flex-row lg:justify-center gap-12">
          {/* Image */}
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 lg:h-[740px] sm:h-80  xl:h-112 2xl:h-128 bg-[#1313130D] lg:w-[575px] rounded-2xl">
            <img
              src={book.image}
              alt=""
              className="w-[425px] rounded-2xl h-[565px]"
            />
          </div>

          {/* text */}
          <div className="flex flex-col   text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-3xl md:text-[40px] font-bold">
              {book.bookName}
            </h1>

            {/* author name */}
            <p className="mt-5 pb-5 border-b-[1px] border-dashed border-[#13131326] text-[#131313] text-opacity-60 font-semibold work-sans-font text-lg">
              By : {book.author}
            </p>

            {/* category */}
            <div className="py-5 border-b-[1px] border-dashed border-[#13131326] text-[#131313] text-opacity-60 font-semibold work-sans-font text-lg mb-6">
              {book.category}
            </div>

            {/* Review */}

            <div className="mb-12">
              <span className="font-bold work-sans-font text-base">
                Review :
              </span>
              <p className="inline text-[#131313B3] font-medium work-sans-font text-base leading-[26px] ">
                {book.review}
              </p>
            </div>

            {/* Tag */}

            <div className="flex  gap-7 pb-7 border-b-[1px] border-dashed border-[#13131326]">
              <h3 className="font-bold work-sans-font text-base self-center">
                Tag
              </h3>
              <ul className=" flex items-center gap-3 flex-wrap md:flex-nowrap ">
                {book.tags.map((tag, idx) => (
                  <li
                    className="px-4 py-2 rounded-full text-[#23BE0A] font-medium text-sm  whitespace-nowrap  bg-[#F3F3F3]"
                    key={idx}
                  >
                    #{tag}
                  </li>
                ))}
              </ul>
            </div>

            {/* Details */}
            <div className="space-y-3 mt-6">
              <div className="grid grid-cols-2 gap-16">
                <h2 className="text-[#131313] text-opacity-60 font-semibold work-sans-font">
                  Number of Pages:
                </h2>
                <p className="font-bold">{book.totalPages}</p>
              </div>
              {/* 2 */}
              <div className="grid grid-cols-2 gap-16">
                <h2 className="text-[#131313] text-opacity-60 font-semibold work-sans-font">
                  Publisher:
                </h2>
                <p className="font-bold">{book.publisher}</p>
              </div>
              {/* 3*/}
              <div className="grid grid-cols-2 gap-16">
                <h2 className="text-[#131313] text-opacity-60 font-semibold work-sans-font">
                  Year of Publishing:
                </h2>
                <p className="font-bold">{book.yearOfPublishing}</p>
              </div>
              {/* 4*/}
              <div className="grid grid-cols-2 gap-16">
                <h2 className="text-[#131313] text-opacity-60 font-semibold work-sans-font">
                  Rating:
                </h2>
                <p className="font-bold">{book.rating}</p>
              </div>
            </div>
            {/* buttons */}
            <div className="flex flex-col space-y-4 mt-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start text-lg font-bold">
              <a
                onClick={handleRead}
                className="px-8 py-3 text-black border-[1px] solid border-[#1313134D] text-lg font-bold   h-auto        btn rounded-md"
              >
                Read
              </a>
              <a
                onClick={handleWishlist}
                className="px-8 py-3 text-lg font-bold h-auto btn bg-[#50B1C9] text-white rounded-md"
              >
                Wishlist
              </a>
            </div>
            <ToastContainer></ToastContainer>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookDetails;
