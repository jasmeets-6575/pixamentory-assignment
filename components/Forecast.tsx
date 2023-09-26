import FormComponent from "./FormComponent";

const Forecast = () => {
  return (
    <section className="mt-10 p-6 md:p-8 bg-[#393e46] h-auto rounded-xl text-gray-200">
      <h1 className="text-3xl mb-5 font-semibold">
        Select Coordinates or City
      </h1>
      <FormComponent />
    </section>
  );
};
export default Forecast;
