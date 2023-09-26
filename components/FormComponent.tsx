"use client";

import { DataType } from "@/utils/data";
import { ChangeEvent, FormEvent, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const baseUrl = `https://api.open-meteo.com/v1/`;

const FormComponent = () => {
  const [data, setData] = useState({ latitude: "", longitude: "" });
  const [requiredData, setRequiredData] = useState<DataType | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchData();
  };

  const fetchData = async () => {
    try {
      const resp = await fetch(
        `${baseUrl}forecast?latitude=${data.latitude}&longitude=${data.longitude}&hourly=temperature_2m`
      );
      const newData = await resp.json();
      setRequiredData(newData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className=" md:flex md:space-x-4">
          <div className="mb-4 py-2 px-5 border border-gray-200 rounded-lg">
            <h3 className="mb-1  tracking-wide font-medium">Latitude</h3>
            <input
              type="number"
              name="latitude"
              value={data.latitude}
              onChange={handleChange}
              className="bg-[#393e46] outline-none text-gray-200 w-full"
            />
          </div>

          <div className=" mb-4 py-2 px-4 border border-gray-200 rounded-lg">
            <h3 className="mb-1 tracking-wide font-medium">Longitude</h3>
            <input
              type="number"
              name="longitude"
              value={data.longitude}
              onChange={handleChange}
              className="bg-[#393e46] outline-none text-gray-200 w-full "
            />
          </div>

          <button
            type="submit"
            className="mb-4 py-2 px-4 border border-gray-200 rounded-lg flex items-center space-x-2 hover:bg-gray-500 cursor-pointer"
          >
            <AiOutlineSearch className="text-lg" />
            <h2 className="tracking-wide font-medium ">Search for Locations</h2>
          </button>
        </div>
      </form>

      {requiredData ? (
        <div>
          <h2>Your latitude - {requiredData.latitude}</h2>
          <h2>Your Longitude - {requiredData.longitude}</h2>
          <h3>
            Temperature - {requiredData.hourly.temperature_2m[0]}
            {requiredData.hourly_units.temperature_2m}
          </h3>
        </div>
      ) : null}
    </>
  );
};
export default FormComponent;
