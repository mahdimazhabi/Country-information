import { useContext, useState } from "react";
import { DataContext } from "../context/region-context/regioncontext";

function TableBodyTools() {
  const regions = [
    { id: 1, name: "Americas" },
    { id: 2, name: "Antarctic" },
    { id: 3, name: "Africa" },
    { id: 4, name: "Asia" },
    { id: 5, name: "Europe" },
    { id: 6, name: "Oceania" },
  ];

  const [SelectRegion, setSelectRegion] = useState([]);

  const { setsharedata } = useContext(DataContext);

  const SelectRegionHandler = (region) => {
    setSelectRegion((prev) => {
      if (!prev.includes(region)) {
        return [...prev, region];
      } else {
        return prev.filter((r) => r !== region);
      }
    });
    setsharedata(region);
  };

  return (
    <div className="mt-5">
      <div className="mb-2">
        <span className="text-SlateGray font-bold">Sort by </span>
        <select
          name="Population"
          id="Population"
          className="mt-2 w-[18rem] py-2 rounded-lg bg-EerieBlack border-[3.5px] border-Charcoal outline-none text-coustomwithe text-left"
        >
          <option
            disabled
            selected
            value=""
            className="text-coustomwithe font-bold"
          >
            Population
          </option>
        </select>
      </div>
      <div className="mt-10">
        <span className="text-SlateGray font-bold">Region</span>
        <div className="flex flex-wrap gap-5 mt-2">
          {regions.map((region) => (
            <button
              onClick={() => SelectRegionHandler(region.name)}
              key={region.id}
              className={`py-2 w-[45%] rounded-full font-bold transition-colors focus:bg-MidGray focus:outline-none ${
                SelectRegion.includes(region.name)
                  ? "backdrop-blur-xl text-coustomwithe bg-white/10"
                  : "text-SlateGray bg-DarkGray"
              }`}
            >
              {region.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TableBodyTools;
