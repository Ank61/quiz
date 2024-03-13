import React, { useEffect, useRef, useState } from "react";
import { useSpring, animated, useTrail, useInView } from "@react-spring/web";
import { MobileResponsiveNav } from "@/components/navbar";
import { MainNavbar } from "@/components/navbar";
import { a } from "@react-spring/web";
import Link from "next/link";

export default function PreviousYearPaper() {
  const [ref, inView] = useInView();
  const [openTrail, setTrail] = useState(false);

  useEffect(() => {
    if (inView) {
      setTrail(true);
    }
  }, [inView]);

  const mainHeadline = useSpring({
    from: { transform: "translateY(30%)", opacity: 0 },
    to: { transform: "translateY(-30%)", opacity: 1 },
    config: { tension: 70, friction: 5 },
  });
  const secondHeadline = useSpring({
    from: { transform: "translateY(30%)", opacity: 0 },
    to: { transform: "translateY(-31%)", opacity: 1 },
    config: { tension: 50, friction: 5 },
  });
  const animation: any = useSpring({
    from: { opacity: 0.2, y: "2%" },
    to: { opacity: 1, y: "0%" },
    config: { duration: 400 },
  });
  //   const services: any = useSpring({
  //     opacity: isVisible ? 1 : 0,
  //     transform: isVisible ? "translateY(0px)" : "translateY(20px)",
  //     config: { duration: 400 },
  //   });

  const Trail: React.FC<{ open: any }> = ({ open, children }: any) => {
    const items = React.Children.toArray(children);
    const trail = useTrail(items.length, {
      config: { mass: 5, tension: 140, friction: 25 },
      opacity: open ? 1 : 0,
      x: open ? 0 : 20,
      height: open ? 110 : 0,
      from: { opacity: 0, x: 20, height: 0 },
    });
    return (
      <div>
        {trail.map(({ height, ...style }, index) => (
          <a.div key={index} className="" style={style}>
            <a.div style={{ height }}>{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <MobileResponsiveNav />
      <MainNavbar />
      <animated.div
        style={mainHeadline}
        className="flex font-sans justify-center mt-20 md:mt-14 md:mt-32 text-3xl font-bold"
      >
        Previous Year{" "}
        <span className="ml-2 mr-2" style={{ color: "#6e64ff" }}>
          UPSC
        </span>
        Paper
      </animated.div>
      <div ref={ref} className="w-5/6 md:h-4/6 mx-auto my-8 md:my-12">
        <Trail open={openTrail}>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4 mt-4">
            <Link href="/pyq/year/2011">
              <div className="serviceButton bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-8 m-1.5 font-sans text-2xl font-medium flex justify-center items-center rounded-xl">
                2011
              </div>
            </Link>
            <Link href="/pyq/year/2012">
              <div className="serviceButton bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-8 m-1.5 flex font-sans text-2xl font-medium justify-center rounded-xl items-center">
                2012
              </div>
            </Link>
            <Link href="/pyq/year/2013">
              <div className="serviceButton bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-8 m-1.5 flex font-sans text-2xl font-medium justify-center rounded-xl items-center">
                2013
              </div>
            </Link>
            <Link href="/pyq/year/2014">
              <div className="serviceButton bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-8 m-1.5 flex font-sans text-2xl font-medium justify-center rounded-xl items-center">
                2014
              </div>
            </Link>
            <Link href="/pyq/year/2015">
              <div className="serviceButton bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-8 m-1.5 flex font-sans text-2xl font-medium justify-center rounded-xl items-center">
                2015
              </div>
            </Link>
            <Link href="/pyq/year/2016">
              <div className="serviceButton bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-8 m-1.5 flex font-sans text-2xl font-medium justify-center rounded-xl items-center">
                2016
              </div>
            </Link>
            <Link href="/pyq/year/2017">
              <div className="serviceButton bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-8 m-1.5 flex font-sans text-2xl font-medium justify-center rounded-xl items-center">
                2017
              </div>
            </Link>
            <Link href="/pyq/year/2018">
              <div className="serviceButton bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-8 m-1.5 flex font-sans text-2xl font-medium justify-center rounded-xl items-center">
                2018
              </div>
            </Link>
            <Link href="/pyq/year/2019">
              <div className="serviceButton bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-8 m-1.5 flex font-sans text-2xl font-medium justify-center rounded-xl items-center">
                2019
              </div>
            </Link>
            <Link href="/pyq/year/2020">
              <div className="serviceButton bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-8 m-1.5 flex font-sans text-2xl font-medium justify-center rounded-xl items-center">
                2020
              </div>
            </Link>
            <Link href="/pyq/year/2021">
              <div className="serviceButton bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-8 m-1.5 flex font-sans text-2xl font-medium justify-center rounded-xl items-center">
                2021
              </div>
            </Link>
            <Link href="/pyq/year/2022">
              <div className="serviceButton bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-8 m-1.5 flex font-sans text-2xl font-medium justify-center rounded-xl items-center">
                2022
              </div>
            </Link>
            <Link href="/pyq/year/2023">
              <div className="serviceButton bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-8 m-1.5 flex font-sans text-2xl font-medium justify-center rounded-xl items-center">
                2023
              </div>
            </Link>
          </div>
        </Trail>
      </div>
    </div>
  );
}
