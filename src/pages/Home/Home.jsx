import Header from "../../components/Header/Header";
import Tableinformation from "../../components/Table-information/Table-information";
import InfoProvider from "../../components/context/inputvlaue-context/inputvlauecontext";

const Home = () => {
  return (
    <div className="bg-EerieBlack min-h-screen">
      <Header />
      <InfoProvider>
        <Tableinformation />
      </InfoProvider>
    </div>
  );
};

export default Home;
