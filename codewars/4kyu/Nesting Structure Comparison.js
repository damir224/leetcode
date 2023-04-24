Array.prototype.sameStructureAs = function (other) {
  if(other.length !== this.length) {
    return false
  }
  for(let i = 0; i < other.length; i++ ){
    const curOther = other[i]
    const curThis = this[i]
        
    if(isArray(curOther) && isArray(curThis)) {
        if(curThis.sameStructureAs(curOther)) {
          continue
        } else {
          return false
        }
    }
    if(isArray(curThis) === isArray(curOther)) {
      continue;
    }
    return false
  }
  return true
};
