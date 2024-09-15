import { useContext, useState } from "react";
import { LuSearch } from "react-icons/lu"; // اطمینان حاصل کنید که آیکون درست ایمپورت شده
import { InfoContext } from "../context/inputvlaue-context/inputvlauecontext";

const TableHeader = () => {
  const [ValueInput, setValueInput] = useState("");

  const { setInfo } = useContext(InfoContext);

  const ChangeInputHandler = (value) => {
    setValueInput(value);
    setInfo(ValueInput); // فقط هنگام تغییر ورودی فراخوانی شود
  };

  return (
    <div className="lg:flex md:flex justify-between items-center text-center space-y-3 lg:space-y-0">
      <div>
        <span className="text-SlateGray font-bold">Found 234 countries</span>
      </div>
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Search by Name, Region"
          className="bg-zinc-700 placeholder:text-SlateGray w-full text-white px-10 py-2 outline-none rounded-md pl-10"
          onInput={(e) => ChangeInputHandler(e.target.value)}
        />
        <LuSearch className="absolute left-3 text-SlateGray" />{" "}
        {/* تنظیم مکان آیکون */}
      </div>
    </div>
  );
};

export default TableHeader;
