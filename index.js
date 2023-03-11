var names = ""
var birtday = ""

function getName() {
    names = document.getElementById("name").value
}


function getBirtDay() {
    birtday = document.getElementById("birtday").value
}


function saveData() {
    const dataLocalStorage = JSON.parse(localStorage.getItem("dattuyy")) || [];
    const objectInfomationOnChange = {
        names,
        birtday
    }
    dataLocalStorage.push(objectInfomationOnChange)
    localStorage.setItem("dattuyy", JSON.stringify(dataLocalStorage))
}

function showData() {
    const dataLocalStorage = JSON.parse(localStorage.getItem("dattuyy")) || [];
    const ul = document.createElement("ul")
    const getHTMLIDlistvuanhap = document.getElementsByTagName("ul");
    // get thẻ ul
    if(getHTMLIDlistvuanhap.length > 0){
        // nếu có ul thì thực hiện xóa  (có ul thì length > 0)
        getHTMLIDlistvuanhap[0].remove();
        // xóa ul đầu tiên
    }


    // tao thẻ html ul
    for (let i = 0; i < dataLocalStorage.length; i++) {
        const li = document.createElement("li")
        // tao thẻ html li
        const dataLiButton = `
         <p class="cssdemo"> ${dataLocalStorage[i].names} - ${dataLocalStorage[i].birtday} 
         <button onclick="xoaData(${i})"> Xóa </button>
         <button> Sửa </button>
         </p>
        `
        //``  đây là sử dụng cho biến
        li.innerHTML = dataLiButton
        
        // gán giá trị của thẻ li
        ul.appendChild(li)
        // thêm the li vào ul
    }
    document.getElementById("listvuanhap").appendChild(ul)
    // thêm ul vào thẻ div có id listvuanhap để hiển thị ra giao diện
}

function xoaData(i){
    const dataLocalStorage = JSON.parse(localStorage.getItem("dattuyy"));
   const deleteDataI = dataLocalStorage.filter((item ,index) => index !== i);
   localStorage.setItem("dattuyy", JSON.stringify(deleteDataI))
   // // filter gồm tiem là object = { names , birtday} 
   // index là vị trí của object
   const ul = document.createElement("ul")
    const getHTMLIDlistvuanhap = document.getElementsByTagName("ul");
    if(getHTMLIDlistvuanhap.length > 0){
        getHTMLIDlistvuanhap[0].remove();
    }
   for (let i = 0; i < deleteDataI.length; i++) {
    const li = document.createElement("li")
    // tao thẻ html li
    const dataLiButton = `
     <p class="cssdemo"> ${deleteDataI[i].names} - ${deleteDataI[i].birtday} 
     <button onclick="xoaData(${i})"> Xóa </button>
     <button> Sửa </button>
     </p>
    `
    //``  đây là sử dụng cho biến
    li.innerHTML = dataLiButton
    
    // gán giá trị của thẻ li
    ul.appendChild(li)
    // thêm the li vào ul
}
document.getElementById("listvuanhap").appendChild(ul)
  
}
// sử dụng filter để xóa 1 phần tử trong mảng
// item là từng giá trị trong mảng
// item !==7 là lấy các giá trị khác 7
// const array = [1,2,4,5,6,7,8,10];
// const deleteSo7 = array.filter(item => item !== 7);
// console.log(deleteSo7)

const arrayObject = [{name:"A" , value:"1"} , {name:"A" , value:"2"} , {name:"B" , value:"3"}]
const deleteNameA = arrayObject.filter(item=>item.name !== "A");
console.log(deleteNameA);

// innerText

// console.log(document.getElementById("innerTextDemi").textContent)