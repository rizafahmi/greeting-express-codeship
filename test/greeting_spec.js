import {expect} from 'chai'
import greeting from '../greeting'

describe('check for time', () => {
  it('should say "Selamat pagi" at 4am', () => {
    let fourAm = new Date()
    fourAm.setHours(4)
    expect(greeting(fourAm)).to.equal("Selamat pagi")
  })

  it('should say "Selamat siang" at 12pm', () => {
    let twelvePM = new Date()
    twelvePM.setHours(12)
    expect(greeting(twelvePM)).to.equal("Selamat siang")
  })

  it('should say "Selamat sore" at 4pm', () => {
    let fourPm = new Date()
    fourPm.setHours(16)
    expect(greeting(fourPm)).to.equal("Selamat sore")
  })

  it('should say "Selamat malam" at 8pm', () => {
    let eightPm = new Date()
    eightPm.setHours(20)
    expect(greeting(eightPm)).to.equal("Selamat malam")
  })
})
