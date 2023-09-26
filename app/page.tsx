import Forecast from "@/components/Forecast";
import MainHeader from "@/components/MainHeader";

export default function Home() {
  return (
    <section className=" bg-[#eeeeee] pt-12 md:pt-0 w-full min-h-screen ">
      <div className="mx-8 md:mt-12 ">
        <MainHeader />
        <Forecast />
      </div>
    </section>
  );
}
