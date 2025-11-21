import React, { useState } from "react";
import gift from "../assets/gift.png";

const MiddlePartFormArea = () => {
  const [detail, setDetail] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setDetail({ ...detail, [e.target.name]: e.target.value });
  };
  const submit = (e) => {
    e.preventDefault();
    console.log(
      "detail of user is :",
      "username : ",
      detail.name,
      "email : ",
      detail.email
    );
    setDetail({ name: "", email: "" });
  };
  return (
    <div className="border text-white flex justify-between m-20 p-10 bg-gradient-to-b from-black to-orange-500 rounded-2xl ">
      <div>
        <h1 className="text-6xl font-bold">
          Hol dir dein <br /> Geschenk ab!
        </h1>
        <p className="text-2xl pt-6">
          Wir Haben din ein kleines Geshenk auf GrieferGames vorberite. <br />
          Gib dafur enfach deine Email und deinen Minicraft-Namen an.
        </p>
        <div className="flex gap-2 items-center">
          <button className="border bg-red-600 p-4 rounded-3xl border-red-600 text-white text-xl">
            JETZT JOINEN
          </button>
          <img src={gift} alt="" className="w-40 h-40" />
        </div>
      </div>
      <div>
        <form
          className="border flex flex-col px-4 py-2 h-100 w-100"
          onSubmit={submit}
        >
          <label htmlFor="name" className="text-xl font-sans py-2">
            Microsoft Name
          </label>
          <input
            type="text"
            name="name"
            value={detail.name}
            onChange={(e) => handleChange(e)}
            className="border px-2 rounded-md py-2 my-2"
            placeholder="Enter Your name"
          />
          <label htmlFor="email" className="text-xl font-sans py-2">
            E-MAIL
          </label>
          <input
            type="text"
            name="email"
            value={detail.email}
            onChange={(e) => handleChange(e)}
            placeholder="Enter Your Email"
            className="border px-2 rounded-md py-2 my-2"
          />
          <button
            className="border bg-red-600 p-4 mt-10 rounded-3xl border-red-600 text-white text-xl "
            type="submit"
          >
            JETZT JOINEN
          </button>
        </form>
      </div>
    </div>
  );
};

export default MiddlePartFormArea;
