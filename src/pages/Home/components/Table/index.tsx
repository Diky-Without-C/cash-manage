import Header from "./TableHeader";
import Body from "./TableBody";
import "./table.css";

export default function Table() {
  return (
    <section className="h-full w-full">
      <table className="table table-pin-rows w-[150rem]">
        <Header />
        <Body />
      </table>
    </section>
  );
}
