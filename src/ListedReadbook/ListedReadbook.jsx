import PropTypes from "prop-types";
const ListedReadbook = ({ savedbook }) => {
  return (
    <>
      <li className="flex border-[1px] border-[#13131326] rounded-2xl flex-col py-6 sm:flex-row sm:justify-between">
        <div className="flex w-full gap-6 ">
          {/* img */}
          <div className="flex justify-center items-center w-[230px] aspect-square rounded-lg bg-[#1313130D]">
            <img
              className="w-[130px] h-[170px]"
              src={savedbook.image}
              alt="Polaroid camera"
            />
          </div>
          <div className="flex flex-col justify-between w-full pb-4">
            <div className="">
              <div className="space-y-1">
                <h3 className="text-2xl font-bold ">{savedbook.bookName}</h3>
                {/* author */}
                <p
                  className="text-base mt-4 text-[#131313] text-opacity-60 font-bold mb-5
                "
                >
                  By : {savedbook.author}{" "}
                </p>

                {/* tags and year */}
                <div className="pb-7 border-b-[1px] border-dashed border-[#13131326]">
                  <div className="flex items-center">
                    {/* tags */}
                    <div className="flex  gap-7 ">
                      <h3 className="font-bold work-sans-font text-base self-center">
                        Tag
                      </h3>
                      <ul className=" flex items-center gap-3 ">
                        {savedbook.tags.map((tag, idx) => (
                          <li
                            className="px-4 py-2 rounded-full text-[#23BE0A] font-medium text-sm  whitespace-nowrap  bg-[#F3F3F3]"
                            key={idx}
                          >
                            #{tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* year of publishing */}

                    <div className=" flex text-[#131313] text-opacity-60 font-bold work-sans-font ">
                      <h2 className="">Year of Publishing : </h2>
                      <p className="">{savedbook.yearOfPublishing}</p>
                    </div>
                  </div>
                  {/* Details */}
                  <div className="mt-6 flex items-center">
                    {/* 1 */}
                    <div className=" flex text-[#131313] text-opacity-60 font-bold work-sans-font ">
                      <h2 className=""> Publisher : </h2>
                      <p className="">{savedbook.publisher}</p>
                    </div>
                    {/* 2 */}
                    <div className=" flex text-[#131313] text-opacity-60 font-bold work-sans-font ">
                      <h2 className="">Pages : </h2>
                      <p className="">{savedbook.totalPages}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

ListedReadbook.propTypes = {
  savedbook: PropTypes.object.isRequired,
};

export default ListedReadbook;

// <div className="grid grid-cols-2 gap-16">
//   <h2 className="text-[#131313] text-opacity-60 font-semibold work-sans-font">
//     Rating:
//   </h2>
//   <p className="font-bold">{savedbook.rating}</p>
// </div>
