import React from 'react';

import './PaletteFooter.css';

const PaletteFooter = function (props) {
    const { paletteName, emoji } = props;

    return (
        <footer className="Palette-footer">
            { paletteName }
            <span className="emoji">{ emoji }</span>
        </footer>
    );
}

export default PaletteFooter;