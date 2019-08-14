



// scale:
// Used to map numbers x in the range [a,b] to numbers y in [c,d]
// logic:  y = (x−a) * (d−c) / (b−a) + c
/**
 * 
 * @param {*} num 
 * @param {*} in_min 
 * @param {*} in_max 
 * @param {*} out_min 
 * @param {*} out_max 
 */
export function scale (num, in_min, in_max, out_min, out_max) {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}