import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24">
      <h1 className="px-8 my-5 font-thin from-slate-300">Show me the date</h1>
      <h2 className="px-8 my-5 font-thin from-slate-300">Work in Progres</h2>
      <h4 className="px-8 my-5 font-thin from-slate-300">
        Contact
        <Link href={"https://swarajpanigrahi.in"}> swarajpanigrahi.in </Link>
      </h4>
    </main>
  );
}
