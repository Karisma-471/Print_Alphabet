function printAlphabet(begin, end) {
    const arr = [];
    for (let i = begin; i <= end; i++) {
      const letter = String.fromCharCode(i);
      arr.push(letter);
    }
    return arr;
  }
  const showAlphabet = printAlphabet(97, 122)
  console.log(showAlphabet);