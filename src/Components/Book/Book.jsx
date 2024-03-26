import PropTypes from "prop-types";

const Book = ({ book }) => {
  const { bookName, author, image, rating, tags, category } = book;

  return (
    <div>
      <div className=" p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
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
          <h2 className="text-2xl font-bold tracking-wide">{bookName}</h2>
        </div>
        <p className="dark:text-gray-800">
          Mauris et lorem at elit tristique dignissim et ullamcorper elit. In
          sed feugiat mi. Etiam ut lacinia dui.
        </p>
      </div>
    </div>
  );
};
Book.propTypes = {
  book: PropTypes.object.isRequired,
};

export default Book;
