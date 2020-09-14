export const fizzBuzzDetermination = (val:number): string|number => {
    const fizzBuzzStr = (val % 3 ? '' : 'Fizz') + (val % 5 ? '' : 'Buzz')
    return fizzBuzzStr || val
  }

const fizzBuzzPrinter = (arrayList: number[]) => {
  arrayList.forEach(
    val => console.log(fizzBuzzDetermination(val))
  )
}

const arrayLength = 100
const arrayList = [...Array(arrayLength).keys()].map(i => ++i)
fizzBuzzPrinter(arrayList)
