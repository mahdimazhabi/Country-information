import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { DataContext } from "../context/region-context/regioncontext";
import { InfoContext } from "../context/inputvlaue-context/inputvlauecontext";

const TableBodyCountry = () => {
  const [DataCountry, setDataCountry] = useState([]);
  const { sharedata } = useContext(DataContext);
  const { info } = useContext(InfoContext);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => {
        let filteredData = res.data;

        // فیلتر بر اساس region (sharedata)
        if (sharedata && sharedata !== "") {
          filteredData = filteredData.filter(
            (country) => country.region === sharedata
          );
        }

        // فیلتر بر اساس جستجو (info)
        if (info && info !== "") {
          filteredData = filteredData.filter((country) =>
            country.name.common.toLowerCase().includes(info.toLowerCase())
          );
        }

        setDataCountry(filteredData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [sharedata, info]); // اضافه کردن sharedata و info به وابستگی‌ها

  return (
    <div className="w-full lg:p-4 rounded-lg">
      <table className="w-full lg:text-left text-gray-300">
        <thead>
          <tr className="flex items-center text-sm lg:text-base text-SlateGray lg:font-bold h-12">
            <th className="lg:w-2/12 text-center">Flag</th>
            <th className="lg:w-4/12 text-left mr-[20px]">Name</th>
            <th className="lg:w-3/12">Population</th>
            <th className="lg:w-2/12">Area (km²)</th>
            <th className="lg:w-2/12">Region</th>
          </tr>
        </thead>
        <hr className="mb-3 border-2 border-Charcoal" />
        <tbody className="lg:font-bold text-sm lg:text-base text-coustomwithe">
          {DataCountry.length > 0 ? (
            DataCountry.map((item, index) => (
              <tr
                key={index}
                className="flex justify-between items-center h-12 rounded-md mb-2"
              >
                <td className="w-2/12 text-center">
                  <img
                    src={item.flags.png} // Correct flag URL from the API
                    className="w-[40px] h-auto mx-auto object-contain"
                    alt={`${item.name.common} Flag`} // Adjusted alt text
                  />
                </td>
                <td className="w-4/12 text-left mr-[20px]">
                  {item.name.common}
                </td>
                <td className="w-3/12">{item.population.toLocaleString()}</td>
                <td className="w-2/12">
                  {item.area ? item.area.toLocaleString() : "N/A"}
                </td>
                <td className="w-2/12">{item.region}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableBodyCountry;
