/*
*Jot©
*from
*Dannysnotepad
*/

const form= document.getElementById('form')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  
  const authorName = document.getElementById('authorName')
  const titleBox = document.getElementById('titleBox')
  const noteBox = document.getElementById('noteBox')
  
  //Dealing with inputs
  if(authorName.value == '' || titleBox.value == '' || noteBox.value== ''){
    alert('Please fill all fields')
  } else{
    alert('Note saved')
  }
  
})
