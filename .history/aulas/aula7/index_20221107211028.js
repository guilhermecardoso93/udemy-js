const divParagrafos = document.querySelector('.paragrafos')
const ps = document.querySelectorAll('p')
ps.style.padding = '10px'
const bg =getComputedStyle(document.body)
const colorBody = bg.backgroundColor

for ( let p of ps ) {
  p.style.backgroundColor = colorBody
  p.style.color = "#fff"
  
}