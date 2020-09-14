import { fizzBuzzDetermination } from '../src/fizzBuzz'


describe('fizzBuzzDetermination', (): void => {
  test('3の倍数でFizzを返す', (): void => {
    const result = fizzBuzzDetermination(3)
    expect(result).toBe('Fizz')
  })

  test('5の倍数でBuzzを返す', (): void => {
    const result = fizzBuzzDetermination(5)
    expect(result).toBe('Buzz')
  })

  test('15の倍数でFizzBuzzを返す', (): void => {
    const result = fizzBuzzDetermination(15)
    expect(result).toBe('FizzBuzz')
  })

  test('3,5,15のいずれの倍数でもない場合は、数字をそのまま返す', (): void => {
    const result = fizzBuzzDetermination(2)
    expect(result).toBe(2)
  })
})
