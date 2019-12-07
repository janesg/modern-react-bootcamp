export default {
    Palette: {
        height: "100vh",
        overflow: "hidden",       /* Prevents scrollbars from momentarily appearing */
        "& Swatch": {
            height: "50%"
        }
    },
    paletteColours: {
        height: "89vh"           /* 100vh - NavBar (6vh) - Footer (5vh) */
    },    
    goBack: {
        width: "20%",
        height: "50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-4px",        /* Reduce adjoining borders */
        opacity: 1,
        backgroundColor: "black",
        "& a": {
            color: "white",
            width: "100px",
            height: "30px",
            position: "absolute",
            display: "inline-block",
            top: "50%",
            left: "50%",
            marginLeft: "-50px",         /* Offset by half of width */
            marginTop: "-15px",          /* Offset by half of height */
            border: "none",
            textAlign: "center",
            outline: "none",
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            fontSize: "1rem",
            lineHeight: "30px",
            textTransform: "uppercase",
            textDecoration: "none"
        }
    }
}
