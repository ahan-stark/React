import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="text-orange-500 text-2xl font-bold text-center mt-4">
        Contact us
      </h1>
      <div className="">
        <form
        className="mt-4 flex flex-col ml-[40%]"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            className="border border-orange-300 m-4 mr-4 w-[15em] h-[3em] text-center"
            placeholder="mail"
          ></input>
          <input
            className="border border-orange-300 m-4 mr-4 w-[15em] h-[7em] text-center"
            placeholder="concerns"
          ></input>
          <button className="border bg-orange-400 rounded-lg h-9 text-white w-[5em] ml-[6.3em] mt-4">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
