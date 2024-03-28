import {} from "react";
import { getIdFromLS } from "../Utilities/LocalStorageitem";
import PropTypes from "prop-types";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useLoaderData } from "react-router-dom";

const PagestoRead = () => {
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
  const readListBookId = getIdFromLS("readlist");

  const books = useLoaderData();
  const readListBooks = [...books].filter((book) =>
    readListBookId.includes(book.bookId)
  );

  // // // barcharts info
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
  Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  // sample obj

  return (
    <div>
      <div className="flex justify-center items-center">
        <BarChart
          width={1100}
          height={500}
          data={readListBooks}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bookName" />
          <YAxis dataKey="totalPages" />
          <Tooltip></Tooltip>
          <Legend></Legend>

          <Bar
            dataKey="totalPages"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            <Bar
              dataKey="totalPages"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            ></Bar>
            {readListBooks.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </div>
    </div>
  );
};

PagestoRead.propTypes = {
  fill: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default PagestoRead;
