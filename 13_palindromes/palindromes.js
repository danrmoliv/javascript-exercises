const palindromes = function (stringValue) {
  let stringValueLower = stringValue.toLowerCase()

  stringValueLower = stringValueLower.replaceAll(',','').replaceAll(' ','').replaceAll('!','').replaceAll('.','')

  tamanhoString = stringValueLower.length

  let stringContrario = ''

  for(i=tamanhoString-1; i>=0; i--) {
    stringContrario+=stringValueLower[i]
  }

  if (stringValueLower === stringContrario) {
    return true;
  } else {
    return false;
  }

};

// Do not edit below this line
module.exports = palindromes;
