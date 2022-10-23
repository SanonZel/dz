const input = document.getElementById('inp')
const btn= document.getElementById('btn')

const array = []

btn.onclick = () => {
  if (input.value.trim() === '') {
    return
  } else {array.push(input.value.trim())}
  input.value = ''
  console.log(array)
}
