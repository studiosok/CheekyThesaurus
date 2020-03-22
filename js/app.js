$(() => {

$('#search').submit((e) => {
  e.preventDefault()
  console.log("I've been clicked")

  const query = $('#query').val()
  console.log(query)

  urbanCall(query)
})


function displayResults (outputs) {
    console.log(outputs)
    outputs.forEach((output) => {
      $('#results-table tbody').append(
        `<tr>
          <td>${output.word}</td>
          <td>${output.definition}</td>
        </tr>`
      )
    })
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
  // $('#testing').text()
  // Need to make list[] index random
} catch(error) {
  console.log(error)
}

}




})
