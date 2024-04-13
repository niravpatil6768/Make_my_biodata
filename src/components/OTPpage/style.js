const styles = {
  container: {
    height: "100vh",
  },

  gridWrapper: {
    position: "relative",
  },

  grid1: {
    backgroundColor: "#FFD2EB",
    backdropFilter: "blur(20px)",
    // display: { sm: "none", xs: "none" },
  },

  image1: {
    width: "250px",
    height: "130px",
    display: "flex",
    marginLeft: -10,
    marginTop: -15,
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
        ? "132vh"
        : window.innerWidth > 1020 && window.innerWidth < 1275
        ? window.innerHeight == 1366
          ? "94vh"
          : "98vh"
        : window.innerWidth > 1279
        ? "107vh"
        : "94vh",
    // backgroundColor: "red",
    background:
      window.innerWidth > 730
        ? "linear-gradient(to bottom,  transparent, transparent,  white)"
        : 0,
    zIndex: 10,
  },

  grid2: {
    alignItems: "start",
    justifyContent: "start",
    flexDirection: "column",
    marginTop: 70,
    display: "flex",
    padding: window.innerWidth >= 860 ? 125 : window.innerWidth < 370 ? 10 : 50,
  },

  form: {
    textAlign: "left",
    height: "325px",
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
    marginTop: 20,
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
    marginTop: 10,
  },
};

export default styles;
