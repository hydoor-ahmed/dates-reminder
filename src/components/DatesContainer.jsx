import marioFace from "../assets/imgs/marioFace.png";

const DatesContainer = ({ datesList }) => {
  return (
    <div className=" min-h-[520px] shadow-md mt-3 w-full h-full py-2 rounded-xl">
      {datesList.length > 0 ? (
        datesList.map((date) => {
          return (
            <div
              key={date.id}
              className="flex mx-auto w-[90%] shadow mb-2 rounded-md px-2 py-2"
            >
              <img width="50" src={marioFace} alt="img" />
              <div className="mr-4">
                <h1>{date.name}</h1>
                <span className="text-xs">{date.time}</span>
              </div>
            </div>
          );
        })
      ) : (
        <h1 className="mr-3 mt-2">لاتوجد مواعيد</h1>
      )}
    </div>
  );
};

export default DatesContainer;
