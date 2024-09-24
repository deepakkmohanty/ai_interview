import { Button } from "@/components/ui/button";
import Link from "next/link";
import Header from "./dashboard/_component/Header";
import Hero from "./dashboard/_component/Hero";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      {/* <Link href={"/dashboard"}>
        <Button>Get Started</Button>
      </Link> */}
    </div>
  );
};

export default Home;
