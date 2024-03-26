import PropTypes from "prop-types";
import { FaRegStar } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
const Book = ({ book }) => {
  const { bookId, bookName, author, image, rating, tags, category } = book;

  return (
    <div>
      <NavLink to={`/${bookId}`}>
        <div className=" border-[#13131326] border-[1px] p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
          <div className="bg-[#F3F3F3] flex justify-center items-center rounded-md border-none outline-none">
            <img
              src={image}
              alt=""
              className="object-cover object-center  rounded-md h-72 dark:bg-gray-500"
            />
          </div>
          <div className="mt-6 mb-2">
            {/* tags */}

            <ul className="flex items-center gap-3 min-h-[80px] flex-wrap mb-4 mt-6">
              {tags.map((tag, idx) => (
                <li
                  className="px-4 py-2 rounded-full text-[#23BE0A] font-medium text-sm  whitespace-nowrap  bg-[#F3F3F3]"
                  key={idx}
                >
                  {tag}
                </li>
              ))}
            </ul>
            {/* book name */}
            <h2 className="text-2xl font-bold min-h-[65px] tracking-wide">
              {bookName}
            </h2>
            {/* author name */}
            <p className="mt-3 pb-5 border-b-[1px] border-dashed border-[#13131326] text-[#131313] text-opacity-60 font-semibold work-sans-font text-base">
              By : {author}
            </p>

            {/* rating */}
            <div className="mt-5 text-[#131313] text-opacity-60 font-semibold work-sans-font text-base flex items-center justify-between">
              <div>{category}</div>
              <div className="flex  gap-2">
                {rating}
                <FaRegStar className="text-xl self-start"></FaRegStar>
              </div>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};
Book.propTypes = {
  book: PropTypes.object.isRequired,
};

export default Book;
