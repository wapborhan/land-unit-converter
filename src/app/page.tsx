"use client";
import useConversion from "../hooks/useConversion";

const Main: React.FC = () => {
  const { inputValues, types, handleInputChange, handleSelectChange } =
    useConversion();
  return (
    <main className="bg-transparent grow w-full flex flex-col justify-center">
      <section className="flex flex-col md:w-2/3 lg:w-2/5 mx-auto justify-center gap-5 lg:py-8 py-3 md:py-10 px-3 md:px-10 -mt-10">
        {/* Input Section */}
        <div className="flex-grow-2 bg-white/30 backdrop-blur-sm lg:p-10 p-4 rounded-lg">
          <div className="flex lg:gap-8 gap-2 items-center lg:mb-6 mb-3">
            <select
              name="from"
              id="from"
              className="border border-gray-100 rounded-lg px-6 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer"
              onChange={handleSelectChange}
            >
              <option value="">নির্বাচন করুন</option>
              <option value="base">বর্গফুট</option>
              <option value="shotok">শতক</option>
              <option value="acre">একর</option>
              <option value="katha">কাঠা</option>
              <option value="bigha">বিঘা</option>
              <option value="kani">কানি</option>
              <option value="gonda">গন্ডা</option>
              <option value="kora">কড়া</option>
              <option value="kranti">ক্রান্তি</option>
              <option value="til">তিল</option>
            </select>
            <i className="fa-solid fa-arrow-right-arrow-left"></i>
            <select
              name="to"
              id="to"
              className="border border-gray-100 rounded-lg px-6 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer"
              onChange={handleSelectChange}
            >
              <option value="">নির্বাচন করুন</option>
              <option value="base">বর্গফুট</option>
              <option value="shotok">শতক</option>
              <option value="acre">একর</option>
              <option value="katha">কাঠা</option>
              <option value="bigha">বিঘা</option>
              <option value="kani">কানি</option>
              <option value="gonda">গন্ডা</option>
              <option value="kora">কড়া</option>
              <option value="kranti">ক্রান্তি</option>
              <option value="til">তিল</option>
            </select>
          </div>

          <div className="flex lg:gap-8 gap-2 items-center">
            <input
              type="number"
              name="fromValue"
              value={inputValues.fromValue}
              onChange={handleInputChange}
              placeholder="লিখুন..."
              className="border border-gray-100 bg-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none w-full"
              disabled={types.from !== "" && types.to !== "" ? false : true}
            />
            <i className="fa-solid fa-arrow-right-arrow-left"></i>
            <input
              type="number"
              name="toValue"
              value={inputValues.toValue}
              onChange={handleInputChange}
              placeholder="লিখুন..."
              className="border border-gray-100 bg-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none w-full"
              disabled={types.from !== "" && types.to !== "" ? false : true}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
