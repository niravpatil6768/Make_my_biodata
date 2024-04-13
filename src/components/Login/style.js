import { width } from "@mui/system";

const styles = {
  container: {
    height: "100vh",
  },

  // gredientblur: {
  //   background:
  //     "linear-gradient(to bottom, Transparente 0%,Transparente 50%,red 50%,red 100%)",
  // },

  gridWrapper: {
    position: "relative",
  },

  grid1: {
    backgroundColor: "#FFD2EB",
    // backdropFilter: "blur(20px)",
  },

  image1: {
    width: "250px",
    height: "130px",
    display: "flex",
    marginLeft: -10,
    marginTop: -15,
  },

  grid12: {
    alignItems: "end",
    justifyContent: "flex-end",
    display: "flex",
  },

  image2: {
    position: "absolute",
    height: "560px",
    marginRight: window.innerWidth > 1030 ? "240px" : "120px",
  },

  image3: {
    height: "410px",
    position: "relative",
    marginRight: window.innerWidth > 1030 ? "120px" : "60px",
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
        ? "142vh"
        : window.innerWidth > 1020 && window.innerWidth < 1285
        ? window.innerHeight == 1366
          ? "94vh"
          : "108vh"
        : window.innerWidth > 1282
        ? "142vh"
        : "94vh",
    // backgroundColor: "red",
    background:
      window.innerWidth > 730
        ? "linear-gradient(to bottom,  transparent, transparent,  white)"
        : 0,
    zIndex: 10,
  },

  grid2: {
    alignItems: "center",
    justifyContent: "end",
    display: "flex",
    padding: window.innerWidth >= 860 ? 140 : window.innerWidth < 300 ? 15 : 50,
    paddingTop: window.innerWidth < 300 ? 80 : 164,
  },

  form: {
    textAlign: "left",
    height: "425px",
    width: 500,
  },

  linkDiv: {
    display: "flex",
    justifyContent: "right",
    height: "50px",
    fontSize: 14,
  },

  link: {
    color: "grey",
    border: "none",
    textDecoration: "none",
    height: "40%",
  },

  Button: {
    height: 45,
    borderRadius: 5,
    background: "linear-gradient(to right,  #f35491, #fe5356,  #ee7724)",
    textDecoration: "none",
    boxShadow: "none",
    textTransform: "NONE",
    marginBottom: 22,
  },

  link1: {
    color: "#1E232C",
    border: "none",
    textDecoration: "none",
    display: "flex",
    justifyContent: "center",
    height: "50px",
    fontSize: 14,
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
};

export default styles;
