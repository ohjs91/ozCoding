
const p = document.querySelector('.hello');
console.log(p.classList); //출력 ['hello', 'greet', 'good', value: 'hello greet good']

/*
classList method
- add
- remove
- item
- toggle
- contains
- replace
*/


document.querySelector('.add').addEventListener('click', function(){
    document.querySelector('.add').classList.add('add2');
})
document.querySelector('.remove').addEventListener('click', function(){
    document.querySelector('.remove').classList.remove('remove');
})
document.querySelector('.item').addEventListener('click', function(){
    document.querySelector('.item').classList.item(0);
    alert(document.querySelector('.item').classList.item(0))
})
document.querySelector('.toggle').addEventListener('click', function(){
    document.querySelector('.toggle').classList.toggle('toggle2');
})
document.querySelector('.contains').addEventListener('click', function(){
    document.querySelector('.contains').classList.contains('contains');
    alert(document.querySelector('.contains').classList.contains('contains'))
})
document.querySelector('.replace').addEventListener('click', function(){
    document.querySelector('.replace').classList.replace('replace' , 'replace2');
})