import Counter from "@/components/Counter/Counter";
import Link from "next/link";

const Page = () => {
  // throw new Error();
  return (
    <div>
      <Link href="/about"><button className="btn btn-accent">About</button></Link>
      <Link href="/contact"><button className="btn ml-2 btn-accent">Contact</button></Link>
      <br />
      Home Page
      <Counter/>
    </div>
  );
};

export default Page;