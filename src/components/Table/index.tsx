import Header from "./TableHeader";
import Body from "./TableBody";
import { StudentsProps } from "./table.type";
import "./table.css";

export default function Table({ students }: StudentsProps) {
  return (
    <section className="h-full w-full">
      <table className="table table-pin-rows w-[150rem]">
        <Header />
        <Body students={students} />
      </table>
    </section>
  );
}
