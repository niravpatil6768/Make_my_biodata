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
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "50%",
    // backgroundColor: "inherit",
    backgroundColor: "rgba(655, 255, 255, 0.2)",
    zIndex: 1,
  },

  grid2: {
    alignItems: "center",
    justifyContent: "end",
    display: "flex",
    padding: window.innerWidth >= 860 ? 125 : 50,
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
    height: "50px",
    fontSize: 14,
  },
};

export default styles;
