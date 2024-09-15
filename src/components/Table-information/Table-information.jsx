import TableHeader from "../Table-Header/TableHeader";
import TableBody from "../Table-Body/TableBody";
import DataProvider from "../context/region-context/regioncontext";

const Tableinformation = () => {
  return (
    <div className="bg-EerieBlack lg:w-[95%] lg:px-8 px-4 py-4 lg:rounded-lg lg:border-[1.5px] border-zinc-700 mx-auto relative lg:bottom-[5rem] h-auto">
      <TableHeader />
      <DataProvider>
        <TableBody />
      </DataProvider>
    </div>
  );
};

export default Tableinformation;
