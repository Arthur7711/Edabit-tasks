// Create a function that concatenates n input arrays, where n is variable.
function concatFN(...elems) {
  let result = [];
  [...elems].forEach((el) => {
    if (Array.isArray(el)) {
      result.push(...el);
    }
    if (Number(el) === el) {
      result.push(el);
    }
  });
  return result;
}

concatFN([1, 2, 3], [4, 5], [6, 7]);
