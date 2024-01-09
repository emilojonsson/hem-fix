"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/tasks");
  }, []);

  return <></>;
}

export default Home;
