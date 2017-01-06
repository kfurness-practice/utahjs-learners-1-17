import { sum, difference } from './sum'

test ('adds 1 and 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test ('subtracts 1 from 3 to equal 2', () => {
  expect(difference(1, 3)).toBe(2)
})
