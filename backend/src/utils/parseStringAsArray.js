module.exports = parseStringAsArray = (string) => {
    return string.split(',').map(item => item.trim());
}