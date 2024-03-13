import React, { useEffect, useRef, useState } from "react";
import { useSpring, animated, useTrail, useInView } from "@react-spring/web";
import meeting from "../../images/meeting.png";
import secondLogo from "../../images/terms.png";
import Image from "next/image";
import { a } from "@react-spring/web";
import Link from "next/link";
import { MainNavbar } from "@/components/navbar";
import { MobileResponsiveNav } from "@/components/navbar";

// import { useGlobalState } from "@/context/globalContext";
// const row1 = [
//     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/7ae42bac3b34999c0db3.png",
//     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/b2bd91d7b87b2181ca45.png",
//     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6591cdc0702b32310306.png",
//     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3b7d9f4b073deb6a9b74.png",
//     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png",
//     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png",
// ];
// const row2 = [
//     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
//     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/9dd55e54b5a28658bf4e.png",
//     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/0384060dcbf73b6a707c.png",
//     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/35e044b3354aaa0caed5.png",
//     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/f50ae7cbf6cc805bdadc.png",
//     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
// ];
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
        <a.div key={index} className="trailsText" style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

export default function LandingPart() {
  const [open, set] = useState(true);
  const [openTrail, setTrail] = useState(false);
  const [ref, inView] = useInView();
  const [isVisible, setIsVisible] = useState(false);
  // const { state, dispatch } = useGlobalState();
  useEffect(() => {
    if (inView) {
      setIsVisible(true);
      setTrail(true);
    }
  }, [inView]);

  // const handleIncrement = () => {
  //     dispatch({ type: 'INCREMENT' });
  // };
  // const handleDecrement = () => {
  //     dispatch({ type: 'DECREMENT' });
  // };
  const springs = useSpring({
    from: { transform: "translateY(-100%)", opacity: 0 },
    to: { transform: "translateY(0%)", opacity: 1 },
    config: { tension: 40, friction: 8 },
  });
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
  const services: any = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0px)" : "translateY(20px)",
    config: { duration: 400 },
  });
  return (
    <div>
      {/* <div>
                <p>Count: {state.count}</p>
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleDecrement}>Decrement</button>
            </div> */}
      <MobileResponsiveNav />
      <MainNavbar />
      <animated.div
        style={mainHeadline}
        className="flex font-sans justify-center mt-14 md:mt-32 text-4xl font-bold"
      >
        Prep{" "}
        <span className="ml-2" style={{ color: "#6e64ff" }}>
          Hub
        </span>
      </animated.div>
      <animated.div
        style={secondHeadline}
        className="flex font-sans text-lg justify-center mt-4 md:mt-4 mb-6 md:text-4xl font-bold"
      >
        Your Ultimate Companion for Exam Preparation
      </animated.div>
      <div className="mt-14">
        <button className="mainButton font-sans text-xl font-semibold flex justify-center">
          Take a quick test
        </button>
      </div>
      <animated.div
        style={animation}
        className="flex justify-center mt-14 md:mt-4 w-full"
      >
        <div className="md:w-3/5 mx-auto">
          <Image src={meeting} alt="mainLogo" />
        </div>
      </animated.div>
      <div className="flex justify-center mt-20 md:mt-20 font-sans text-2xl font-bold md:md:text-4xl">
        Explore our Services
      </div>
      <div className="text-center mt-8 mx-3 mb-14 md:mb-16 md:mt-8 font-sans text-gray-600 text-lg">
        We strive to provide top-notch services tailored to meet your needs and
        exceed your expectations.
      </div>
      <div className="grid md:grid-cols-2 gap-4 w-4/6 mx-auto font-sans text-lg font-medium ">
        <div
          ref={ref}
          className="grid mid:grid-cols-4 gap-4 w-full md:w-4/6 md:h-4/6 md:mx-auto my-2 md:my-12"
        >
          <Trail open={openTrail}>
            <Link href="/pyq">
              <div className="serviceButton bg-gradient-to-r from-blue-50 to-purple-50 p-4 m-1.5 flex justify-center items-center rounded-xl">
                Previous Year UPSC Questions
              </div>
            </Link>
            <div className="serviceButton bg-gradient-to-r from-blue-50 to-purple-50 p-4 m-1.5 flex justify-center rounded-xl items-center">
              Mock Prelims Test
            </div>
            <div className="serviceButton bg-gradient-to-r from-blue-50 to-purple-50 p-4 m-1.5 flex justify-center rounded-xl items-center">
              Daily Practice
            </div>
            <div className="serviceButton  bg-gradient-to-r from-blue-50 to-purple-50 p-4 m-1.5 flex justify-center rounded-xl items-center">
              Current Affairs
            </div>
          </Trail>
        </div>
        <animated.div
          style={services}
          className="flex justify-center item-center"
        >
          <Image src={secondLogo} alt="mainLogo" className="w-full md:w-full" />
        </animated.div>
      </div>
      <div className="slider h-2/3 mx-auto  w-full mt-6 md:mt-11">
        <div className="before-after">
          <div className="slide-track">
            <div className="h-20 w-64 md:h-20 md:w-64 flex justify-center">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
                className="h-16 w-40 md:h-16 md:w-40 roun ed-lg border rounded-lg  "
                style={{ borderColor: "#6e64ff" }}
                alt=""
              />
            </div>
            <div className="h-20 w-64 md:h-20 md:w-64 flex justify-center ">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
                className="h-16 w-40 md:h-16 md:w-40 roun ed-lg border rounded-lg  "
                style={{ borderColor: "#6e64ff" }}
                alt=""
              />
            </div>
            <div className="h-20 w-64 md:h-20 md:w-64 flex justify-center ">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
                className="h-16 w-40 md:h-16 md:w-40 roun ed-lg border rounded-lg  "
                style={{ borderColor: "#6e64ff" }}
                alt=""
              />
            </div>
            <div className="h-20 w-64 md:h-20 md:w-64 flex justify-center ">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
                className="h-16 w-40 md:h-16 md:w-40 roun ed-lg border rounded-lg  "
                style={{ borderColor: "#6e64ff" }}
                alt=""
              />
            </div>
            <div className="h-20 w-64 md:h-20 md:w-64 flex justify-center ">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
                className="h-16 w-40 md:h-16 md:w-40 rounded-lg border rounded-lg  "
                style={{ borderColor: "#6e64ff" }}
                alt=""
              />
            </div>
            <div className="h-20 w-64 md:h-20 md:w-64 flex justify-center ">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
                className="h-16 w-40 md:h-16 md:w-40 rounded-lg border rounded-lg  "
                style={{ borderColor: "#6e64ff" }}
                alt=""
              />
            </div>
            <div className="h-20 w-64 md:h-20 md:w-64 flex justify-center ">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
                className="h-16 w-40 md:h-16 md:w-40 rounded-lg border rounded-lg  "
                style={{ borderColor: "#6e64ff" }}
                alt=""
              />
            </div>
            <div className="h-20 w-64 md:h-20 md:w-64 flex justify-center ">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
                className="h-16 w-40 md:h-16 md:w-40 rounded-lg border rounded-lg  "
                style={{ borderColor: "#6e64ff" }}
                alt=""
              />
            </div>
            <div className="h-20 w-64 md:h-20 md:w-64 flex justify-center ">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
                className="h-16 w-40 md:h-16 md:w-40 rounded-lg border rounded-lg  "
                style={{ borderColor: "#6e64ff" }}
                alt=""
              />
            </div>
            <div className="h-20 w-64 md:h-20 md:w-64 flex justify-center ">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
                className="h-16 w-40 md:h-16 md:w-40 rounded-lg border rounded-lg  "
                style={{ borderColor: "#6e64ff" }}
                alt=""
              />
            </div>
            <div className="h-20 w-64 md:h-20 md:w-64 flex justify-center ">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
                className="h-16 w-40 md:h-16 md:w-40 rounded-lg border rounded-lg  "
                style={{ borderColor: "#6e64ff" }}
                alt=""
              />
            </div>
            <div className="h-20 w-64 md:h-20 md:w-64 flex justify-center ">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
                className="h-16 w-40 md:h-16 md:w-40 rounded-lg border rounded-lg  "
                style={{ borderColor: "#6e64ff" }}
                alt=""
              />
            </div>
            <div className="h-20 w-64 md:h-20 md:w-64 flex justify-center ">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
                className="h-16 w-40 md:h-16 md:w-40 rounded-lg border rounded-lg  "
                style={{ borderColor: "#6e64ff" }}
                alt=""
              />
            </div>
            <div className="h-20 w-64 md:h-20 md:w-64 flex justify-center ">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
                className="h-16 w-40 md:h-16 md:w-40 rounded-lg border rounded-lg  "
                style={{ borderColor: "#6e64ff" }}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="sliderBack h-1/3 mx-auto  w-full">
        <div className="before-after">
          <div className="slide-trackBack flex">
            <div className="h-20 w-64 md:h-20 md:w-64">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
                className="h-16 w-40 md:h-16 md:w-40 rounded-lg border rounded-lg  "
                style={{ borderColor: "#6e64ff" }}
                alt=""
              />
            </div>
            <div className="h-20 w-64 md:h-20 md:w-64">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
                className="h-16 w-40 md:h-16 md:w-40 rounded-lg border rounded-lg  "
                style={{ borderColor: "#6e64ff" }}
                alt=""
              />
            </div>
            <div className="h-20 w-64 md:h-20 md:w-64">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
                className="h-16 w-40 md:h-16 md:w-40 rounded-lg border rounded-lg  "
                style={{ borderColor: "#6e64ff" }}
                alt=""
              />
            </div>
            <div className="h-20 w-64 md:h-20 md:w-64">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
                className="h-16 w-40 md:h-16 md:w-40 rounded-lg border rounded-lg  "
                style={{ borderColor: "#6e64ff" }}
                alt=""
              />
            </div>
            <div className="h-20 w-64 md:h-20 md:w-64">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
                className="h-16 w-40 md:h-16 md:w-40 rounded-lg border rounded-lg  "
                style={{ borderColor: "#6e64ff" }}
                alt=""
              />
            </div>
            <div className="h-20 w-64 md:h-20 md:w-64">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
                className="h-16 w-40 md:h-16 md:w-40 rounded-lg border rounded-lg  "
                style={{ borderColor: "#6e64ff" }}
                alt=""
              />
            </div>
            <div className="h-20 w-64 md:h-20 md:w-64">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
                className="h-16 w-40 md:h-16 md:w-40 rounded-lg border rounded-lg  "
                style={{ borderColor: "#6e64ff" }}
                alt=""
              />
            </div>
            <div className="h-20 w-64 md:h-20 md:w-64">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
                className="h-16 w-40 md:h-16 md:w-40 rounded-lg border rounded-lg  "
                style={{ borderColor: "#6e64ff" }}
                alt=""
              />
            </div>
            <div className="h-20 w-64 md:h-20 md:w-64">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
                className="h-16 w-40 md:h-16 md:w-40 rounded-lg border rounded-lg  "
                style={{ borderColor: "#6e64ff" }}
                alt=""
              />
            </div>
            <div className="h-20 w-64 md:h-20 md:w-64">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
                className="h-16 w-40 md:h-16 md:w-40 rounded-lg border rounded-lg  "
                style={{ borderColor: "#6e64ff" }}
                alt=""
              />
            </div>
            <div className="h-20 w-64 md:h-20 md:w-64">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
                className="h-16 w-40 md:h-16 md:w-40 rounded-lg border rounded-lg  "
                style={{ borderColor: "#6e64ff" }}
                alt=""
              />
            </div>
            <div className="h-20 w-64 md:h-20 md:w-64">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
                className="h-16 w-40 md:h-16 md:w-40 rounded-lg border rounded-lg  "
                style={{ borderColor: "#6e64ff" }}
                alt=""
              />
            </div>
            <div className="h-20 w-64 md:h-20 md:w-64">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
                className="h-16 w-40 md:h-16 md:w-40 rounded-lg border rounded-lg  "
                style={{ borderColor: "#6e64ff" }}
                alt=""
              />
            </div>
            <div className="h-20 w-64 md:h-20 md:w-64">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
                className="h-16 w-40 md:h-16 md:w-40 rounded-lg border rounded-lg  "
                style={{ borderColor: "#6e64ff" }}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
