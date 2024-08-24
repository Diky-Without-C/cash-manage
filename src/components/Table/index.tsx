import Header from "./TableHeader";
import Body from "./TableBody";
import { StudentsProps } from "./table.type";

export default function Table({ students }: StudentsProps) {
  const dateAmount = 20;

  return (
    <section className="h-full w-full">
      <table className="table table-zebra w-[150rem]">
        <Header {...{ dateAmount }} />
        <Body {...{ students, dateAmount }} />
      </table>
    </section>
  );
}
