import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';
import { withStyles } from '@material-ui/styles';

const styles = {
    Swatch: {
        width: "20%",
        height: props => props.showFullPalette ? "25%" : "50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-4px",        /* Reduce adjoining borders */
        "& :hover button": {
            opacity: 1,
            transition: "0.5s",
            cursor: "inherit"        
        }    
    },
    copyText: {
        color: props =>
            chroma(props.background).luminance() >= 0.8 ? "black" : "white"
    },
    colourName: {
        color: props =>
            chroma(props.background).luminance() <= 0.08 ? "white" : "black"
    },
    showMore: {
        color: props =>
            chroma(props.background).luminance() >= 0.8 ? "black" : "white",
        background: "rgba(255, 255, 255, 0.3)",
        position: "absolute",
        border: "none",
        right: "0px",
        bottom: "0px",
        width: "60px",
        height: "30px",
        fontSize: "1rem",
        textAlign: "center",
        lineHeight: "30px",          /* line takes up whole height */
        textTransform: "uppercase"
    },
    copyButton: {
        color: props =>
            chroma(props.background).luminance() >= 0.8 ? "black" : "white",
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
        textDecoration: "none",
        opacity: 0
    },
    content: {
        position: "absolute",
        width: "100%",
        left: "0px",
        bottom: "0px",
        padding: "8px",
        color: "black",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px"    
    },
    copyOverlay: {
        opacity: 0,
        zIndex: 0,
        width: "100%",
        height: "100%",
        transition: "transform 0.6s ease-in-out"    
    },
    showOverlay: {
        opacity: 1,
        transform: "scale(50)",
        zIndex: 10,
        position: "absolute"
    },
    copyMsg: {
        position: "fixed",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        fontSize: "4rem",
        transform: "scale(0.1)",
        opacity: 0,
        color: "white",
        "& h1": {
            fontWeight: 400,
            textShadow: "1px 2px black",
            background: "rgba(255, 255, 255, 0.2)",
            width: "100%",
            textAlign: "center",
            marginBottom: 0,
            padding: "1rem",
            textTransform: "uppercase"
        },
        "& p": {
            fontSize: "2rem",
            fontWeight: 100        
        }
    },
    showMsg: {
        opacity: 1,
        transform: "scale(1)",
        zIndex: 25,
        transition: "all 0.4s ease-in-out",
        transitionDelay: "0.2s"
    }
}

class Swatch extends Component {
    state = { copied: false };

    changeCopyState = () => {
        this.setState({ copied: true }, () => {
            setTimeout(() => this.setState({ copied: false }), 1800)
        });
    }

    render() {
        const { classes, name, background, moreUrl, showFullPalette } = this.props;
        const { copied } = this.state;

        return (
            /* Click anywhere on swatch to copy background colour to clipboard */
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div className={ classes.Swatch } style={{ backgroundColor: background }}>
                    <div className={`${ classes.copyOverlay } ${copied && classes.showOverlay}`}
                        style={{ backgroundColor: background }}
                    />
                    <div className={`${ classes.copyMsg } ${copied && classes.showMsg}`}>
                        <h1>Copied</h1>
                        <p className={ classes.copyText }>{background}</p>
                    </div>
                    <div>
                        <div className={ classes.content }>
                            <span className={ classes.colourName }>{name}</span>
                        </div>
                        <button className={ classes.copyButton }>Copy</button>
                    </div>
                    { /* Conditionally display MORE link */}
                    {showFullPalette && (
                        /* Prevent click propagation triggering copy functionality in parent */
                        <Link to={moreUrl} onClick={e => e.stopPropagation()}>
                            <span className={ classes.showMore }>More</span>
                        </Link>
                    )}
                </div>
            </CopyToClipboard>
        );
    }
}

export default withStyles(styles)(Swatch);