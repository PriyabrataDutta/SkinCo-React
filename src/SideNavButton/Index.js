import React, { useRef } from "react";
import "./sidenav.css";
import { IoCallSharp } from "react-icons/io5";
import { AiFillCalendar } from "react-icons/ai";
export default function Index(props) {
  let ref = useRef();
  console.log(ref);
  return (
    <>
      <div id="mysidenav">
        <div id="sidenavappiontment" ref={ref}>
          <a href="https://click4appointment.com/book-appointment-guest/408954/3081"  target="_blank">
            <AiFillCalendar />
            Book an appointment
          </a>
        </div>
        <div id="sidenavphone">
          <a href="tel:+919591154574" target="_blank">
            <IoCallSharp />
            Call Us
          </a>
        </div>
      </div>
    </>
  );
}