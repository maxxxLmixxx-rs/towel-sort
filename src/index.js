module.exports = function towelSort(matrix) {
    return matrix ? matrix.map((arr, ix) =>
      ix % 2 === 0 ? arr : arr.reverse()
    ).flat() : [];
};
