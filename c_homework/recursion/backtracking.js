function binaryNum(size) {
  let numString = '';
  while (size) {
    numString += 0;
    size--;
  }

  return _binaryNum(numString, numString.length - 1);
}

function _binaryNum(num, currentIndex) {
  if (currentIndex < 0) {
    console.log(num);
    return;
  }

  function changeIthChar(char) {
    return (
      num.substring(0, currentIndex) + char + num.substring(currentIndex + 1)
    );
  }

  _binaryNum(changeIthChar('0'), currentIndex - 1);
  _binaryNum(changeIthChar('1'), currentIndex - 1);
}

binaryNum(3);
