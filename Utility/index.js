export const ObjectMap = (obj, functionToApply) => {
    return Object.keys(obj).reduce(function(previous, current) {
        previous[current] = functionToApply(obj[current])
        return previous
      }, {})
}