import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';

import './Swatch.css'

class Swatch extends Component {
    state = { copied: false };

    changeCopyState = () => {
        this.setState({ copied: true }, () => {
            setTimeout(() => this.setState({ copied: false }), 1800)
        });
    }

    render() {
        const { name, background, moreUrl, showMore } = this.props;
        const { copied } = this.state;

        return (
            /* Click anywhere on swatch to copy background colour to clipboard */
            <CopyToClipboard text={ background } onCopy={ this.changeCopyState }>
                <div className="Swatch" style={{ backgroundColor: background }}>
                    <div className={ `copy-overlay ${ copied && "show" }` } 
                         style={{ backgroundColor: background }}
                    />
                    <div className={ `copy-msg ${ copied && "show" }` }>
                        <h1>Copied</h1>
                        <p>{ background }</p>
                    </div>
                    <div className="copy-container">
                        <div className="content">
                            { name }
                        </div>
                        <button className="copy-button">Copy</button>
                    </div>
                    { /* Conditionally display MORE link */ }
                    { showMore && (
                        /* Prevent click propagation triggering copy functionality in parent */
                        <Link to={ moreUrl } onClick={ e => e.stopPropagation() }>
                            <span className="show-more">More</span>
                        </Link>
                    )}
                </div>
            </CopyToClipboard>
        );
    }
}

export default Swatch;