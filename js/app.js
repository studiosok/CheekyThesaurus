$(() => {

  $('.search').submit((e) => {
    e.preventDefault()

    const query = $('#query').val()
    console.log(query)

    urbanCall(query)
    afterClick()
  })

  function afterClick () {
    $('#beforeClick').toggle()
    $('#afterClick').toggle()
    $('#afterClicks').toggle()
    $('.onReset').toggle()
    $('#showBox').text(query)
  }

  function displayResults (outputs) {
      console.log(outputs)
      outputs.forEach((output) => {
        $('#showDefinition').append(
            `${output.definition}`
          )
      })
    }

    function displaySearchedWord (output) {
            $('#showBox').text(
              `${output.word}`)
      }

  async function urbanCall(searchTerm) {

  const url = 'https://api.urbandictionary.com/v0/define'
    try {
    const response = await axios.get(url, {
      params: {
        term: searchTerm
      }
    })
    // console.log(response.data.list[0].definition)
    displayResults(response.data.list)
    displaySearchedWord(response.data.list[0])
    // $('#testing').text()
    // Need to make list[] index random
  } catch(error) {
    console.log(error)
  }

  }

  $('.reset').click(() => {
    reset()
  })

  function reset() {
    $('#beforeClick').toggle()
    $('#afterClick').toggle()
    $('#afterClicks').toggle()
    $('.onReset').toggle()
    $('#query').val("")
  }


})

/*for just one definition - remove forEach() and change output to outputs. add index [] to data.list*/
