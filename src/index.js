module.exports = function multiply(first, second) {
    var result = BigInt(first) * BigInt(second);
    return result.toString();
}
