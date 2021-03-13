function checker(array) {
  if (!array || array.join('').length === 0) {
    return false;
  } else {
    return true;
  }
}



exports.min = function min (array) {
  checker(array)  
  if (checker(array)) {
    let min = array[0];
  
    array.forEach((item) => {
      if (item < min) {
        min = item;
      }
    })
    return min
  } else {
    return 0;
  }
}

exports.max = function max (array) {
  checker(array)  
  if (checker(array)) {
  let max = array[0];
  
  array.forEach((item) => {
    if (item > max) {
      max = item;
    }
  })
  return max
} else {
  return 0;
  }
}


exports.avg = function avg (array) {
  checker(array)  
  if (checker(array)) {
  let avg = 0;
  array.forEach((item) => {
    avg += item
  })
  return avg / array.length
} else {
  return 0;
  }
}

