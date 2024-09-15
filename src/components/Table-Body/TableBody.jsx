import TableBodyCountry from "../Table-Body-Country/TableBodyCountry";
import TableBodyTools from "../Table-Body-Tools/TableBodyTools";

const TableBody = () => {
  return (
    <section>
      <div className="lg:flex justify-between lg:space-x-[rem] relative  mt-[3rem]">
        <TableBodyTools />
        <TableBodyCountry />
      </div>
    </section>
  );
};

export default TableBody;
