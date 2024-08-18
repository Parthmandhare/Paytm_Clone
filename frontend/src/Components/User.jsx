import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const User = () => {

  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);

  const submitHandler = async (e) => {
    e.preventDefault();

    const res = await axios.get(
      `http://localhost:5000/api/v1/FindUser?Filter=${query}`,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    console.log(res.data);
    setUsers(res.data);
  };

  return (
    <>
      <div className="flex flex-col gap-2 justify-start mt-10 ml-3 ">
        <div className="flex flex-row justify-start">
          <p className="text-md font-bold">Users</p>
        </div>

        <div className="flex flex-col">
          <form
            class="flex flex-row w-full items-center mx-auto"
            onSubmit={submitHandler}
          >
            <label for="simple-search" class="sr-only">
              Search
            </label>
            <div class="relative w-full">
              <input
                type="text"
                id="simple-search"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search User Here..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
                required
              />
            </div>

            <button
              type="submit"
              class="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span class="sr-only">Search</span>
            </button>
          </form>
        </div>

        <div className="flex flex-col justify-between">

          <div className="flex flex-col gap-1 justify-between">

            {users.map((user) => {
              return (
                <div className="flex flex-row gap-10  justify-between">
                    
                    <div className="flex gap-2">
                        <div className="flex justify-center text-center">
                        <div className="bg-slate-300 rounded-full flex flex-col h-12 w-12 justify-center">
                        {user.FirstName.charAt(0) + user.LastName.charAt(0)}
                        </div>
                        </div>

                        <div className="flex flex-col justify-center">
                            {user.FirstName + " " + user.LastName}
                        </div>
                    </div>

                    <div className="flex">
                        <button className="text-white bg-blue-700 border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 px-3 py-2 rounded-lg text-sm" onClick={(e) => {navigate("/send?id=" + user._id+ "&name=" + user.FirstName)}}>
                        Send Money
                        </button>
                    </div>

                </div>
              );
            })}

          </div>

        </div>
      </div>
    </>
  );
};

export default User;
