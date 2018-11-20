import * as Color from 'color';
var chartColors = {
    red: Color('rgba(255, 146, 139, 0.8)'),
    green: Color('rgba(87, 228, 198, 0.8)'),
    blue: Color('rgba(60, 145, 218, 0.7)')
};
var colors = Object.assign({}, chartColors, {
    array: function () {
        return Object.keys(chartColors).map(function (color) { return chartColors[color].string(); });
    }
});
export default colors;
//# sourceMappingURL=colors.js.map