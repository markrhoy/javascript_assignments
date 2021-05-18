const isPalindrome = word => {
    const lowerCaseWord = word.toLowerCase()
    const isOddLength = lowerCaseWord.length % 2

    if( isOddLength ){
        const charArr = lowerCaseWord.split('')
        const middleIndex = Math.floor(charArr.length / 2);

        const firstPart = charArr.slice(0, middleIndex)
        const secondPart = charArr.slice(middleIndex + 1)
        
        const isEqual = firstPart.join('') === secondPart.reverse().join('')

        return isEqual
    }

    return false
}

console.log(isPalindrome("RaceCar"))
console.log(isPalindrome("Mum"))
console.log(isPalindrome("HakDog"))