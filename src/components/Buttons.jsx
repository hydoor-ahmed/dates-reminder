

const Buttons = ({showDates, removeDates}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center text-white mt-4">
      <button
        onClick={removeDates}
        className="bg-slate-700 border-b-2 border-black rounded py-2 px-6 md:px-3 text-sm mb-2 md:mb-0"
      >
        مسح الكل
      </button>
      <button
        onClick={showDates}
        className="bg-slate-700 border-b-2 border-black rounded py-2 px-3 text-sm"
      >
        عرض المواعيد
      </button>
    </div>
  );
};

export default Buttons;
