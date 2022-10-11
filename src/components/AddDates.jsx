import { dates } from "../data";

const AddDates = ({ setDatesList }) => {
  let name = null;
  let time = null;
  const addDate = () => {
    if (time && name !== null) {
      dates.push({ id: dates.length + 1, name: name, time: time });

      setDatesList([]);
      setTimeout(() => {
        setDatesList(dates);
      }, 2);
    }
  };
  return (
    <div className="w-full md:w-[70%] text-center pt-4 flex flex-col sm:flex-row justify-center items-center">
      <div className="flex flex-col md:flex-row w-full sm:w-fit">
        <input
          onChange={(e) => (name = e.target.value.trim())}
          className="outline-none rounded shadow ml-2 py-2 px-2 w-full mb-2 md:mb-0"
          type="text"
          placeholder="اسم الموعد"
        />
        <input
          onChange={(e) => (time = e.target.value)}
          className="outline-none rounded shadow ml-3 py-2 px-2 cursor-pointer w-full md:w-[220px]"
          type="time"
        />
      </div>

      <button
        onClick={addDate}
        className="bg-slate-700 text-white rounded py-2 px-2 mt-2 sm:mt-0 w-full sm:w-fit sm:mr-2"
      >
        اضافة
      </button>
    </div>
  );
};

export default AddDates;
