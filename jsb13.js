// find . filter

const array = [
    {
        id: "1",
        diem: 9,
        name: "AAAAAAA"
    },
    {
        id: "2",
        diem: 9,
        name: "BBBBBB"
    },
    {
        id: "3",
        diem: 5,
        name: "CCCCCC"
    },
    {
        id: "4",
        diem: 6,
        name: "DDDDD"
    },
    {
        id: "5",
        diem: 7,
        name: "EEEEEEEEE"
    },
    {
        id: "6",
        diem: 4,
        name: "FFFFFF"
    }
]
// Tìm các name có điểm ==9  => filter // trả về các giá trị thỏa mãn  diem === 9
// tìm phần tử đầu tiên ( 1 phần tử ) có điểm === 9 => find // chỉ trả về phần tử đầu tiên === 9
// tìm các object có điểm > 5
// abczd tự đặt theo ý mình
const resultNames = array.filter(abczd => abczd.diem === 9);
console.log(resultNames)
// filter là nhiều phần tử thì sẽ trả về mảng gồm nhiều item với điểu kiện lấy item thỏa mãn
// cú pháp của filter => teenarray.filter(item => dieu kien de lay item)

// bh lấy name hiển thị ra với điều kiện điểm bằng 9 là :
// i =0 là vị trí đầu tiên trong mảng
// i < resultNames.length điểm dừng vòng for  (resultNames.length độ dài của mảng)
// i++ bước nhẩy để tăng phần tử ( tăng vị của resultNames)
for (i = 0; i < resultNames.length; i++) {
    // resultNames[i] lấy từng phẩn tử trong resultNames
    // resultNames[0] lấy phần tử đầu  tiên
    console.log(resultNames[i].name)
}
// find trả ra 1 phần từ . mà các item của array là object =>>> find trả về object
// const array1 = [1,2,3,4,5,6];
// console.log(array1.find(item => item === 2))
// item không cần chấm bởi vì item trong array1 là số 
// chấm khi item là object . 
const resultName = array.find(item => item.diem === 9);
console.log(resultName.name)


// tìm các object có điểm > 5

const resultName5 = array.filter(abczd => abczd.diem > 5);
for (i = 0; i < resultName5.length; i++) {
    // resultNames[i] lấy từng phẩn tử trong resultNames
    // resultNames[0] lấy phần tử đầu  tiên
    console.log(resultName5[i].name)
}

// map và reduce

// sử dụng map
// if điểm > 7 thêm 1 key value nữa là  hocluc: "kha"
// < 7 thêm 1 key value nữa là  hocluc: "trungbinh"

// tại vì sao lại phải sử dụng map

// map được sử dụng khi mà thay đổi các giá trị trong mảng theo 1 điều kiện nào đó và sẽ tạo mảng mới
// không ảnh hưởng tới mảng cũ

// nếu object item chưa có key .  Muốn khởi tạo key thì cú pháp là item.key = value
 const dataNew = array.map(item => {
    if (item.diem > 7) {
        item.hocluc = "kha"
    } else {
        item.hocluc = "trungbinh"
    }
    // console.log(item)
    // return để item mới thêm key push vào dataNew
    // return 10;
    return item
})

// tại vì t
const dataNew1 = array.map(item => {
    if (item.diem > 7) {
        item.diem =5
    } else {
        item.diem =6
    }
    // console.log(item)
    // return để item mới thêm key push vào dataNew
    // return 10;
    return item
})
console.log(dataNew1)
console.log(array)
// sử dụng map khi thay đổi giá trị object trong mảng or thêm giá trị và key object trong mảng 
// reducer
// initialValue là giá trị khởi tạo cho accumulator 
// currentValue là giá trị trong array1
//accumulator =  accumulator + currentValue (  accumulator cũ  + value duyetj tưng phan tu trong array1)
// const sumWithInitial = array1.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     initialValue
//   );
  // tính tổng điểm của array và gán điểm ban đầu là 
  // là thực hiện trong thực tế là mua sản phẩm . initialValue giá trị khởi tạo là tiền vận chuyển + tiền phải trả
  const array1 = [
    {
        name : "AO khoác",
        sl : 1,
        tien :50000
    },
    {
        name : "quan",
        sl : 2,
        tien :30000
    }
  ]
  // neu van chuyen o HN thi là 20000D
  // neu van chuyenr o HCM phi 30000
   
  let donhang = "HN"
  let initialValue =0 
  if(donhang === "HN"){
    initialValue = 20000
  }else if(donhang==="HCM") {
    initialValue =30000
  }
  

  const tongtienphaitra = array1.reduce(
    (tongtien, item) => tongtien + item.sl*item.tien,
    initialValue
  );
  console.log(tongtienphaitra)
  // tongtien ban dau = tongtien =initialValue khi chua co vị tri nào
  // gan tongtienbd = initialValue
 // tongtie ve trai vi tri thu 3 === tongtien(vi tri 1 +2) + (item.sl*item.tien vi tri so 3)