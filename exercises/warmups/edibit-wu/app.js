// const uniqueSort = arr => [...new Set(arr)].sort((a, b) => a > b)


function keysAndValues(obj) {
    var keys = Object.keys(obj);
    return [keys, keys.map( key => obj[key] )];
  }
