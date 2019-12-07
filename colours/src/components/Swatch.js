import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';

import styles from 'styles/SwatchStyles';

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