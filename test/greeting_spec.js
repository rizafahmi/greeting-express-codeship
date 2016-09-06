import {expect} from 'chai'
import greeting from '../greeting'

describe('check for time', () => {
  it('should say "Good morning" at 4am', () => {
    let fourAm = new Date()
    fourAm.setHours(4)
    expect(greeting(fourAm)).to.equal("Good morning")
  })

  it('should say "Good afternoon" at 12pm', () => {
    let twelvePM = new Date()
    twelvePM.setHours(12)
    expect(greeting(twelvePM)).to.equal("Good afternoon")
  })

  it('should say "Good evening" at 4pm', () => {
    let fourPm = new Date()
    fourPm.setHours(16)
    expect(greeting(fourPm)).to.equal("Good evening")
  })

  it('should say "Good night" at 8pm', () => {
    let eightPm = new Date()
    eightPm.setHours(20)
    expect(greeting(eightPm)).to.equal("Good night")
  })
})
