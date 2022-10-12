import { useEffect ,useState } from "react";
import AddDates from "./components/AddDates";
import Buttons from "./components/Buttons";
import DatesContainer from "./components/DatesContainer";
import { dates } from "./data";

const App = () => {
  const [datesList, setDatesList] = useState(dates);

  const removeDates = () => {
    setDatesList([]);
  };
  const showDates = () => {
    setDatesList(dates);
  };

  useEffect(() => {
    setDatesList(dates.splice(0, 1));
  }, []);

  return (
    <div className="container flex flex-col items-center px-2 mx-auto">
      <AddDates datesList={datesList} setDatesList={setDatesList} />
      <div className="w-full md:w-[70%] h-full pt-4">
        <h1 className="mr-7 md:mr-0">لديك {datesList.length} مواعيد</h1>

        <DatesContainer datesList={datesList} />
        <Buttons showDates={showDates} removeDates={removeDates} />
      </div>
    </div>
  );
};

export default App;
