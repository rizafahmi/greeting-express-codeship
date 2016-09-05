module.exports = function(time) {

  var hours = time.getHours()
  if (hours < 4 || hours > 18) {
    return "Selamat malam"
  } else if (hours < 12) {
    return "Selamat pagi"
  } else if (hours < 15) {
    return "Selamat siang"
  }
}
