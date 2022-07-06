function shortestSubstring(str, letters) {
  const lettersHashMap = {};
  let windowStart = 0;
  let windowEnd = 0;
  let counter = 0;
  let shortestSubstring = str;

  // fill hashmap
  for (const letter of letters) {
    lettersHashMap[letter] = { inCandidate: true, indexArray: [] };
    counter += letter.charCodeAt();
  }

  // skip s[i] which not in letters
  while (lettersHashMap[str[windowEnd]] === undefined) {
    windowStart += 1;
    windowEnd += 1;
  }

  // iterate til the end
  while (windowEnd < str.length) {
    const currentLetterInStr = lettersHashMap[str[windowEnd]];
    // if letter from str exist in hashmap && last index in indexArray is different (prevent add the same index to array twice)
    if (
      currentLetterInStr !== undefined &&
      currentLetterInStr.indexArray[
        currentLetterInStr.indexArray.length - 1
      ] !== windowEnd
    ) {
      // if letter exist in current window, then change to false, add index to indexArray and decrease count, overwise just add index to arr
      if (currentLetterInStr.inCandidate) {
        currentLetterInStr.inCandidate = false;
        currentLetterInStr.indexArray.push(windowEnd);
        counter -= str[windowEnd].charCodeAt();
      } else {
        currentLetterInStr.indexArray.push(windowEnd);
      }
    }

    // if counter is 0, that means that all letters in candidate
    if (counter === 0) {
      const candidate = str.substring(windowStart, windowEnd + 1);
      if (candidate.length < shortestSubstring.length) {
        shortestSubstring = candidate;
      }

      // delete index from indexArray
      lettersHashMap[str[windowStart]].indexArray.shift();
      const isIndexArrayEmpty =
        lettersHashMap[str[windowStart]].indexArray.length === 0;
      if (isIndexArrayEmpty) {
        lettersHashMap[str[windowStart]].inCandidate = true;
        counter += str[windowStart].charCodeAt();
      }
      windowStart += 1;
      while (lettersHashMap[str[windowStart]] === undefined) {
        windowStart += 1;
      }
      if (!isIndexArrayEmpty) {
        continue;
      }
    }

    windowEnd += 1;
  }

  return shortestSubstring;
}

console.log(shortestSubstring('addbecodebanc', 'abc')); // banc

// function shortestSubstring(str, letters) {
//   const lettersHashMap = {};
//   let windowStart = 0;
//   let windowEnd = 0;
//   let shortestSubstring = str;
//   let counter = 0;

//   for (const letter of letters) {
//     lettersHashMap[letter] = { inCandidate: true, indexArray: [] };
//     counter += letter.charCodeAt();
//   }

//   while (windowEnd < str.length) {
//     if (
//       lettersHashMap[str[windowEnd]] !== undefined &&
//       lettersHashMap[str[windowEnd]].indexArray[
//         lettersHashMap[str[windowEnd]].indexArray.length - 1
//       ] !== windowEnd
//     ) {
//       if (lettersHashMap[str[windowEnd]].inCandidate) {
//         lettersHashMap[str[windowEnd]].inCandidate = false;
//         lettersHashMap[str[windowEnd]].indexArray.push(windowEnd);
//         counter -= str[windowEnd].charCodeAt();
//       } else {
//         lettersHashMap[str[windowEnd]].indexArray.push(windowEnd);
//       }
//     }
//     if (counter === 0) {
//       const candidate = str.substring(windowStart, windowEnd + 1);
//       if (candidate.length < shortestSubstring.length) {
//         shortestSubstring = candidate;
//       }

//       lettersHashMap[str[windowStart]].indexArray.shift();
//       const isIndexArrayEmpty =
//         lettersHashMap[str[windowStart]].indexArray.length === 0;
//       if (isIndexArrayEmpty) {
//         lettersHashMap[str[windowStart]].inCandidate = true;
//       }
//       windowStart += 1;
//       while (lettersHashMap[str[windowStart]] === undefined) {
//         windowStart += 1;
//       }
//       if (!isIndexArrayEmpty) {
//         continue;
//       } else {
//         counter += str[windowStart].charCodeAt();
//       }
//     }

//     windowEnd += 1;
//   }

//   return shortestSubstring;
// }

// console.log(shortestSubstring('addbecodebanc', 'abc')); // banc

// function shortestSubstring(str, letters) {
//   const lettersHashMap = {};
//   let windowStart = 0;
//   let windowEnd = 0;
//   let shortestSubstring = str;
//   let counter = 0;

//   for (const letter of letters) {
//     lettersHashMap[letter] = true;
//     counter += letter.charCodeAt();
//   };
// console.log('lettersHashMap', lettersHashMap)
// console.log('counter', counter)

//   while (lettersHashMap[str[windowEnd]] === undefined) {
//     windowStart += 1;
//     windowEnd += 1;
//   }

//   while (windowEnd < str.length) {

//     if (lettersHashMap[str[windowEnd]]) {
//       lettersHashMap[str[windowEnd]] = false;
//       counter -= str[windowEnd].charCodeAt();
//     }

//     if (counter === 0) {
//       const candidate = str.substring(windowStart, windowEnd + 1);
//       if (candidate.length < shortestSubstring.length) {
//         shortestSubstring = candidate;
//       }

//       lettersHashMap[str[windowStart]] = true;
//       counter += str[windowStart].charCodeAt()
//       windowStart += 1;

//       while (lettersHashMap[str[windowStart]] === undefined) {
//         windowStart += 1;
//       }
//     }

//     windowEnd += 1;
//   }

//   return shortestSubstring;
// }

// console.log(shortestSubstring('addbecodebanc', 'abc')); // banc
