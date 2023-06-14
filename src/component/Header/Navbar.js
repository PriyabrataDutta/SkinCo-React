import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useEffect, useState } from "react";
import navList from "../Pages/Services/ServiceJsonData/Services.json";
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import {BsTelephoneForward} from "react-icons/bs"
import { FaFacebook } from "react-icons/fa";
import FormModal from "../UI/Modal/FormModal";
import SidenavWidget from "../../SideNavButton/Index";
import { click } from "@testing-library/user-event/dist/click";

const Navbar = (props) => {
  const [navBar, setNavBar] = useState(false);

  const [modal, setModal] = useState(false);

  const contactButtonhandler = (event) => {
    event.preventDefault();
    setModal(true);
  };
  const scrolltoTop = () => {
    window.scrollTo(0, 0);
  };
  const changeBackGround = () => {
    if (window.scrollY > 60) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };
  // const [active , setActive ] =useState()

  // const getPosition =() => {
  //   console.log(window.location.href)
  // }

  // document.addEventListener('click' , getPosition)

  window.addEventListener("scroll", changeBackGround);
  return (
    <>
      {modal && (
        <FormModal
          onClick={() => {
            setModal(false);
          }}
        />
      )}
      <div onClick={scrolltoTop}>
        {navBar && <button className={styles.goToTop}>up</button>}
        {props.navvisible ? (
          <nav  className={navBar ? styles.NavBar : styles.NavBar2}>
            <div className="mobilemenuclose">
              {window.innerWidth <= 600 && (
                <AiOutlineClose
                  size={30}
                  style={{
                    position: "fixed",
                    color: "black",
                    left: "85%",
                    top: "95px",
                    zIndex: 99,
                    // paddingLeft: "80%",
                    // paddingTop: "10%",
                  }}
                  onClick={props.onClose}
                />
              )}
            </div>
            <div >
              <div
              
                className={navBar ? styles.socialMedia : styles.socialMedia2}
              >
                <div
                  style={{
                    // backgroundColor: "white",
                    color:"blue",
                    width: "40px",
                    height: "40px",
                    borderRadius: "40px",
                    // backgroundImage:
                    //   "linear-gradient(to right, #3a6ecf, #307bd9, #2588e2, #1b94eb, #15a1f2)",
                  }}
                >
                  <a
                    href="https://www.facebook.com/profile.php?id=100070148478872&mibextid=ZbWKwL"
                    target="blank"
                  >
                    <FaFacebook
                      style={{ color: "#134A1B", margin: "5px" }}
                      size={29}
                    />
                  </a>
                </div>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "40px",
                    marginLeft: "5px",
                    // background: "rgb(2,0,36)",
                    // background:
                    //   "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(245,169,2,1) 0%, rgba(245,2,182,0.7791491596638656) 59%)",
                  }}
                >
                  <a href ='https://instagram.com/drsoumyadermatologist?igshid=Yzg5MTU1MDY='>
                  <AiFillInstagram
                    style={{ color: "#134A1B", margin: "5px" }}
                    size={30}
                  />
                  </a>
                </div>
                <div
                  style={{
                    // backgroundColor: "white",
                    width: "40px",
                    height: "40px",
                    borderRadius: "40px",
                    marginLeft: "5px",
                    // backgroundImage:
                    //   "linear-gradient(to right, #50abf1, #67bdf0, #85cdee, #a6dbee, #c9e9f0)",
                  }}
                >
                  {/* <AiFillTwitterCircle
                    style={{ color: "#134A1B", margin: "5px" }}
                    size={30}
                  /> */}
                </div>
              </div>
              <div className={styles.mobileemail}>
                {/* <div className={styles.mobno}>
                <a href="tel:9535181799">
                <button>
                <AiFillPhone size={20} />&nbsp;&nbsp;&nbsp;
                +91 9535181799
                </button>
                </a>
              </div> */}
                <div className={styles.email}>
                  <button>
                    <BsTelephoneForward size={20} />
                    &nbsp;{" "}
                    <a
                      href="tel:+9591154574"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      +91 9591154574
                    </a>
                  </button>
                  <button>
                    <AiOutlineMail size={20} />
                    &nbsp;thehealthyskinco1@gmail.com
                  </button>
                </div>
              </div>
              <div className={styles.logo}>
                <img
                  width="18%"
                  src="https://ik.imagekit.io/0rsvz9vomoe/skin-co/test_purpose/New_Folder/website-logo_QBUomsGTSY.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671166874309"
                />
                {/* <h1>Healthyskinco</h1> */}
              </div>
              <ul className={navBar ? styles.NavItems  : styles.navItemscolor }>
                <li  onClick={props.onClose}>
                  <Link to="/">Home</Link>
                </li>
                <li onClick={props.onClose} className={styles.visible}>
                  <Link to="/about">About</Link>
                </li>
                <li  className={styles.visible}>
                  Services &nbsp;
                  <i className={`${styles.arrow} ${styles.down}`}></i>
                  <ul onClick={props.onClose} className={styles.submenu}>
                    <div>
                    {/* {console.log(navList.slice(4,9))} */}
                      {navList.slice(0,6).map((list, index) => (
                        
                        <li style={{color:"white"}} key={index}>
                         
                          <Link style={{color:"white"}} to={`/servicedata/${list.link}/${index + 1}`}>
                            {list.navtitle}
                          </Link>{" "}
                        </li>
                      ))}

                      {/* <li>
                        <Link to="/servicedata">dermal fillers</Link>
                      </li>
                      <li>
                        <Link to="/servicedata">Dermaroller</Link>
                      </li> */}
                    </div>
                    <div>
                    {/* {console.log(navList.slice(4,9) ,'fff')} */}
                    {navList.slice(6,11).map((list, index) => (
                        
                        <li style={{color:"white"}} key={index}>
                         
                          <Link style={{color:"white"}} to={`/servicedata/${list.link}/${index + 7}`}>
                            {list.navtitle}
                          </Link>{" "}
                        </li>
                      ))}
                      
                    </div>
                  </ul>
                </li>
                {/* <li onClick={props.onClose}>
                  <Link to="/blogs">Blog</Link>
                </li> */}
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                {/* <li>
                  <Link to="/carrier">Career</Link>
                </li> */}
                {/* <div>
                <button className={styles.navButton} onClick={contactButtonhandler}>book an apointment</button>
              </div> */}
              </ul>
            </div>
            <SidenavWidget onClick={contactButtonhandler} />
          </nav>
        ) : (
          <nav className={styles.mobileNavBar}>
            {/* <h1
              style={{
                position: "fixed",
                color: "#5cdb95",
                fontSize: "35px",
                marginTop: "15px",
                zIndex: "1",
              }}
            >
              Healthyskinco
            </h1> */}
            <img
              width="35%"
              src="https://ik.imagekit.io/0rsvz9vomoe/skin-co/test_purpose/New_Folder/website-logo_QBUomsGTSY.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671166874309"
            />
            <div className={styles.menu_btn} onClick={props.onOpen}>
              <div className={styles.btn_line}></div>
              <div className={styles.btn_line}></div>
              <div className={styles.btn_line}></div>
            </div>
          </nav>
        )}
      </div>
    </>
  );
};

export default Navbar;
