var input = document.querySelector('input')
var button = document.querySelector('button') 
var form = document.querySelector('form')
var todos = document.querySelector('.todo')

form.addEventListener('submit',function(event){
	event.preventDefault() // để k bị reload lại trang
	let val = input.value.trim() // để xóa khoảng trắng 2 bên
	if (val) { // nếu có nội dung thì thực thi hàm dưới
		addTodos(val) // hàm gọi để thêm val vào
	}
	input.value = '' // xong thì xóa input trở về như ban đầu
})

function addTodos(x){
	var li = document.createElement('li') // tạo ra 1 thẻ li trong dom
	li.innerHTML = ` 
					<span>${x}</span>
					<i class='bx bxs-trash-alt'></i>
					`// cho thẻ li nội dung và truyền đối số x vào , x là tham số hình thức

	li.addEventListener('click',function(){
		this.classList.toggle('completed')
	})
	li.querySelector('i').addEventListener('click',function(){
		this.parentElement.remove()
	})
	todos.appendChild(li) // thêm thẻ li vào cuối thẻ có class là todos
}