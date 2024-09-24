"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

function Hero() {
  const router = useRouter();
  return (
    <>
      <section className="bg-gray-50 w-full h-[100%]">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Master Your Interview Skills
              <strong className="font-extrabold text-primary sm:block">
                {" "}
                Land Your Dream Job{" "}
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              Practice with AI-powered mock interviews. Gain confidence and
              improve your chances of success!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                onClick={() => router.replace("/dashboard")}
                className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                href="#"
              >
                Start Interview
              </a>

              <a
                className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
