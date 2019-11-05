import chroma from 'chroma-js';

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function generatePalette(startingPalette) {
    let newPalette = {
        paletteName: startingPalette.paletteName,
        id: startingPalette.id,
        emoji: startingPalette.emoji,
        colors: {}
    }

    for (let level of levels) {
        newPalette.colors[level] = [];
    }

    for (let colour of startingPalette.colors) {
        let scale = generateScale(colour.color, 10).reverse();

        for (let i in scale) {
            newPalette.colors[levels[i]].push({
                name: `${ colour.name } ${levels[i]}`,               /* append level to base name */
                id: colour.name.toLowerCase().replace(/ /g, "-"),   /* convert name to dash-separated */
                hex: scale[i],
                rgb: chroma(scale[i]).css(),
                rgba: chroma(scale[i]).css("rgba")
            })
        }
    }

    return newPalette;
}

function getRange(hexColour) {
    const end = "#fff";     /* white */

    /* A range of a darkened input colour -> input colour -> white */
    /* Using black as start colour generates too many dark colours */
    return [
        chroma(hexColour).darken(1.4).hex(),
        hexColour,
        end
    ];
}

function generateScale(hexColour, numberOfColours) {
    return chroma.scale(getRange(hexColour)).mode("lab").colors(numberOfColours);
}

export { generatePalette };