const searchInput = document.querySelector('#shearch__input')

searchInput.addEventListener('keydown', function (event) {
  if (event.code === 'Enter') {
    search()
  }
})

function search() {
  const input = searchInput.value

  window.location.href =
    'https://www.google.com/search?q=' +
    input +
    '&hl=pt-BR&sxsrf=ALiCzsYAZMBAimAwR8lh4tt5mBF_HmALiA%3A1654011953849&source=hp&ei=MTiWYqX7MbmR1sQPo5i7kAo&iflsig=AJiK0e8AAAAAYpZGQWK1lTug1-rZyk7Xbg8RYmUkGnfS&gs_ssp=eJzj4tVP1zc0TCupKDPOyjUwYPRiS82rTM9NBABUjQdD&oq=' +
    input +
    '&gs_lcp=Cgdnd3Mtd2l6EAMYADILCC4QgAQQsQMQgwEyCwgAEIAEELEDEIMBMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQguEIAEMgUIABCABDIFCC4QgAQ6DQguEMcBEKMCEOoCECc6BwgjEOoCECc6CgguEMcBEKMCECc6BAgjECc6BAgAEEM6CAguELEDEIMBOggIABCxAxCDAToOCC4QsQMQgwEQxwEQowI6DQguEMcBEKMCENQCEEM6BwguELEDEEM6CAguEIAEELEDUIcnWJ5CYI9NaAJwAHgAgAGhAYgBpguSAQQwLjEwmAEAoAEBsAEK&sclient=gws-wiz'
}
