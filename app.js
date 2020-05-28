function hexaColorToRgbColor( color ) {
    if(color[0]==='#' && color.length === 7){
        const red = color[1]+color[2];
        const green = color[3]+color[4];
        const blue = color[5]+color[6];

        const r = parseInt(red,16);
        const g = parseInt(green,16);
        const b = parseInt(blue,16);
        const rgbColor = `rgb(${r},${g},${b})`

        return rgbColor;

    }
    return 'This is not an hex color';
}
