import { useState } from "react";
import { Link } from "react-router-dom";
import { useTransition, animated } from "@react-spring/web";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import avisenseLOGO from "../../assets/logo/avisenseLOGO.png";
import ApelieISOLOGOWHITE from "../../assets/logo/avisenseISOLOGOWHITE.png";

const MobileNavBar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const clickToggler = () => setMenuToggle(!menuToggle);

  const menuTransition = useTransition(menuToggle, {
    from: { transform: "translateX(-100%)" },
    enter: { transform: "translateX(0%)" },
    leave: { transform: "translateX(-100%)" },
  });

  const maskTransition = useTransition(menuToggle, {
    from: { opacity: 0 },
    enter: { opacity: 0.65 },
    leave: { opacity: 0 },
  });

  return (
    <nav className="mobileNav">
      <button
        onClick={clickToggler}
        className="mobileMenu__Button mobileMenu__Button--Open"
      >
        <AiOutlineMenu />
      </button>
      <Link to="/" className="mobileNav__Logo">
        <img src={avisenseLOGO} alt="Logo"></img>
      </Link>
      {menuTransition(
        (style, item) =>
          item && (
            <animated.div style={style} className="mobileMenu">
              <div className="mobileMenu__LinkContainer">
                <button
                  onClick={clickToggler}
                  className="mobileMenu__Button mobileMenu__Button--Close"
                >
                  <AiOutlineClose />
                </button>

                <Link
                  to="/us"
                  className="mobileMenu__Link"
                  onClick={clickToggler}
                >
                  Team
                </Link>
                <Link
                  to="/contact"
                  className="mobileMenu__Link"
                  onClick={clickToggler}
                >
                  Contact
                </Link>
              </div>
              <div className="mobileMenu__Bottom">
                <span className="mobileMenu__BottomText">
                  Córdoba - Av La Voz del Interior 7000 Ciudad Empresarial,
                  X5000 Córdoba
                </span>
                <img
                  src={ApelieISOLOGOWHITE}
                  alt="Logo"
                  className="mobileMenu__BottomLogo"
                ></img>
              </div>
            </animated.div>
          )
      )}
      {maskTransition(
        (style, item) =>
          item && (
            <animated.div
              style={style}
              className="menuMask"
              onClick={clickToggler}
            />
          )
      )}
    </nav>
  );
};

export default MobileNavBar;