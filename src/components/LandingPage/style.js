const styles = {
  container: {
    height: "100vh",
  },

  gridWrapper: {
    position: "relative",
  },

  grid1: {
    backgroundColor: "#FFD2EB",
    // display: { sm: "none", xs: "none" },
    // backgroundImage: "linear-gradient(to bottom(#FFD2EB, transparent)",
    // marginTop: -180,
    zIndex: 1,
    // height: "45vh",
    display: "flex",
    justifyContent: "center",
  },

  gridMobile1: {
    // backgroundColor: "#FFD2EB",
    // display: { sm: "none", xs: "none" },
    // backgroundImage: "linear-gradient(to bottom(#FFD2EB, transparent)",
    // marginTop: -180,
    zIndex: 1,
    height: "50vh",
    display: "flex",
    // marginLeft: window.innerWidth < 330 ? 40 : 0,
    justifyContent: "center",
  },

  image1: {
    width: "250px",
    height: "130px",
    display: "flex",
    marginLeft: -10,
    marginTop: -15,
  },

  imageMobile1: {
    width: "200px",
    height: "110px",
    display: "flex",
  },

  grid12: {
    alignItems: "end",
    justifyContent: "center",
    display: "flex",
    // backgroundColor: "pink",
  },

  grid11: {
    alignItems: "end",
    justifyContent: "center",
    display: "flex",
  },

  image2: {
    height: "540px",
    position: "relative",
  },

  imageMobile2: {
    height: window.innerHeight > 800 ? "430px" : "330px",
    position: "relative",
  },

  image3: {
    height: window.innerHeight > 800 ? "330px" : "250px",
    position: "relative",
    // marginRight: window.innerWidth > 1030 ? "120px" : "60px",
    marginLeft: -80,
  },

  blurOverlay: {
    position: "absolute",
    display: "flex",
    // bottom: 0,
    // left: 0,
    top: window.innerWidth > 1200 ? -55 : 80,
    width:
      window.innerWidth < 550 ? 0 : window.innerWidth > 860 ? "50%" : "54.5%",
    // height:  window.innerWidth > 1290 ? "425px" : "108%",
    height:
      window.innerWidth == 1280 && window.innerHeight == 551
        ? "130vh"
        : window.innerWidth > 1020 && window.innerWidth < 1275
        ? window.innerHeight == 1366
          ? "94vh"
          : "96vh"
        : window.innerWidth > 1279
        ? "107vh"
        : "94vh",
    // backgroundColor: "red",
    background:
      window.innerWidth > 730
        ? "linear-gradient(to bottom,  transparent, transparent, transparent, white)"
        : 0,
    zIndex: 10,
  },

  blurOverlay1: {
    position: "absolute",
    display: "flex",
    // bottom: 0,
    // left: 0,
    top: window.innerWidth > 1200 ? -55 : 80,
    width:
      window.innerWidth < 550 ? 0 : window.innerWidth > 860 ? "50%" : "54.5%",
    // height:  window.innerWidth > 1290 ? "425px" : "108%",
    height:
      window.innerWidth == 1280 && window.innerHeight == 551
        ? "130vh"
        : window.innerWidth > 1020 && window.innerWidth < 1275
        ? window.innerHeight == 1366
          ? "94vh"
          : "96vh"
        : window.innerWidth > 1279
        ? "107vh"
        : "94vh",
    // backgroundColor: "red",
    background:
      window.innerWidth > 730
        ? "linear-gradient(to bottom,  transparent, transparent, white,  white, transparent)"
        : 0,
    // backdropFilter: "blur(1px)",
    // zIndex: 10,
  },

  blurOverlay2: {
    position: "absolute",
    display: "flex",
    // bottom: 0,
    // left: 0,
    // top: Window.innerHeight > 800 ? -20 : -54,
    width: Window.innerHeight > 800 ? 472 : 372,
    height: 475,
    background:
      "linear-gradient(to bottom,  transparent, transparent, rgba(255, 255, 255, 0.5),  white)",

    zIndex: 10,
  },

  overlayText: {
    position: "absolute",
    top: "65%",
    left: window.innerWidth > 860 ? "45%" : "50%",
    transform: "translate(-50%, -50%)",
    fontSize: 50,
    width: window.innerWidth > 860 ? 350 : 320,
    // color: "white",
    textAlign: "left",
    zIndex: 10,

    // backgroundColor: "red",
  },

  grid2: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    // padding: window.innerWidth >= 860 ? 125 : window.innerWidth < 300 ? 15 : 50,
    // backgroundColor: "red",
  },

  form: {
    textAlign: "left",
    height: "425px",
    width: 500,
    marginTop: -100,
  },

  link1: {
    color: "grey",
    border: "none",
    textDecoration: "none",
    display: "flex",
    justifyContent: "right",
    height: "50px",
    fontSize: 14,
  },

  button: {
    height: 45,
    borderRadius: 5,
    background: "linear-gradient(to right,  #f35491, #fe5356,  #ee7724)",
    textDecoration: "none",
    boxShadow: "none",
    textTransform: "NONE",
    marginBottom: 15,
  },

  link2: {
    color: "#1E232C",
    border: "none",
    textDecoration: "none",
    display: "flex",
    justifyContent: "center",
    height: "35%",
    fontSize: 14,
  },

  link2div: {
    display: "flex",
    justifyContent: "center",
    height: "50px",
  },

  Button1: {
    height: 43,
    borderRadius: 8,
    background: "linear-gradient(to right,  #f35491, #fe5356,  #ee7724)",
    textDecoration: "none",
    boxShadow: "none",
    textTransform: "NONE",
    marginBottom: -5,
  },

  ButtonMobile1: {
    height: 43,
    borderRadius: 8,
    background: "linear-gradient(to right,  #f35491, #fe5356,  #ee7724)",
    textDecoration: "none",
    boxShadow: "none",
    textTransform: "NONE",
    marginBottom: 15,
    width: 340,
  },

  Button2: {
    height: 43,
    borderRadius: 8,
    background: "linear-gradient(to left,  #f35491, #fe5356,  #ee7724)",
    textDecoration: "none",
    boxShadow: "none",
    textTransform: "NONE",
    // marginBottom: 5,
  },

  ButtonMobile2: {
    height: 43,
    borderRadius: 8,
    background: "linear-gradient(to left,  #f35491, #fe5356,  #ee7724)",
    textDecoration: "none",
    boxShadow: "none",
    textTransform: "NONE",
    marginBottom: 5,
    width: 340,
  },
};

export default styles;
