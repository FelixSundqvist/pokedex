export const getIDFromURL = (url) => url.match(/\d{1,3}\/$/)[0].split("/")[0];
export const checkLetter = str => str.toUpperCase().replace(/É/, "E")
export const roundNum = (height, round) => Number.parseFloat(height * round).toFixed(2)
export const createArr = (arr, newItem) => {
    return [...arr, newItem]
}