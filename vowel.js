const onlyVowelsOf = word => {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    const charArr = word.split('')

    const result = charArr.filter(
        char => vowels.includes(char)
    ).join('')

    console.log(result)
}

onlyVowelsOf("legion commander")
onlyVowelsOf("mirana")
onlyVowelsOf("monkey king")