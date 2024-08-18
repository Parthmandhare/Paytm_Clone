import axios from "axios";
import React, { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const Send = () => {
  const [searchparams] = useSearchParams();
  const name = searchparams.get("name");

  const id = searchparams.get("id");
 
  console.log(name);

  const [amount, setAmount] = useState("");

  const submitHandler = async (e) => {

    e.preventDefault();

    const res = await axios.put("http://localhost:5000/api/v1/account/transfer", 
      {
        "to": id,
        "amount": amount
      },
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    
  )
  console.log(res);
  }
  

  return (
    <div className="flex justify-center">
      <div className="flex flex-col bg-white p-10 rounded-sm shadow-md w-1/2">
        <div className="flex justify-center text-center">
          <p className="text-2xl font-bold ">Send Money</p>
        </div>

        <div className="flex flex-col mt-5">
          <div className="flex gap-2">
            <div className="flex flex-col rounded-full bg-slate-300 h-10 w-10 text-center justify-center font-bold">
              {name.charAt(0)}
            </div>
            <div className="font-bold flex flex-col justify-center">
              {name}
            </div>
          </div>

          <div className="flex flex-col mt-4">
            <form action="" className="flex flex-col gap-5" onSubmit={submitHandler}>
              <label htmlFor="amount" className="flex justify-start font-bold">
                Amount (in Rs)
              </label>
              <input
                type="number"
                placeholder="Enter amount"
                id="amount"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full  p-2   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={amount}
                onChange={(e) => {setAmount(e.target.value)}}
              />

              <button type="submit" className="text-white bg-blue-700 border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 px-3 py-2 rounded-lg text-sm">
                Send Money
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Send;
