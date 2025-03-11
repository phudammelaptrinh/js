// // // // // // // 


// // // // // // const people = {
// // // // // //   ten: "Nguyen Van B",
// // // // // //   tuoi: 20,
// // // // // //   gioiTinh: "Nam",
// // // // // //   diaChi: "Sai Gon"
// // // // // // }
// // // // // // //hien thi data from object 

// // // // // // document.getElementById("demo3").innerHTML = 'Day la thong tin gioi thieu ve mot nguoi co ten ' + people.ten + ' ' + people.tuoi + ' ' + people.gioiTinh + ' ' + people.diaChi; 


// // // // // const person = new Object();
// // // // // person.firstName = "John";
// // // // // person.lastName = "Doe";
// // // // // person.age = 50;
// // // // // person.eyeColor = "blue";


// // // // // //hien thi object content 
// // // // // document.getElementById("demo3").innerHTML = person.firstName + " is " + person.age + " " + person.eyeColor ;

// // // // //create an object 
// // // // const person = new Object();
// // // // person.firstName = "Phu";
// // // // person.lastName = "Ho";
// // // // person.age = 50;
// // // // person.eyeColor = "brown";


// // // // //xoa 
// // // // delete person.age;
// // // // //hien thi object content
// // // // document.getElementById("demo3").innerHTML = person.firstName + " is " + person.age + " years old.";

// // // const myObj ={ 
// // //   name : "John",
// // //   age : 30,
// // //   myCars : {
// // //     car1 : "Ford",
// // //     car2 : "BMW",
// // //     car3 : "Fiat"
// // //   }
// // // }

// // // //hien thi 
// // // document.getElementById("demo3").innerHTML =myObj.myCars.car3

// // const toi = {
// //   ten : "Phu",
// //   age : 30,
// //   xe :{
// //     xe1: "honda future",
// //     xe2 : "yamaha exciter",
// //     xe3 : "yamaha jupiter"
// //   }
// // }

// // document.getElementById("demo3").innerHTML = "Toi ten la :" + toi.ten + " voi" + toi.age +  " tuoi " + " va so thich la di xe " + toi.xe.xe1 + " va " + toi.xe.xe2 + " va " + toi.xe.xe3;

// let xe1 = "honda future";
// let xe2 = "yamaha exciter";

// document.getElementById("demo3").innerHTML = xe1 + " " + xe2;
const books = [
  {
    id: 1,
    tieude: "Trang Quynh",
    "tac gia": "Nguyen Nhat Anh",
  },
  {
    id: 2,
    tieude: "Tay du ky",
    "tac gia": "Ngo Thua An",
  },
  {
    id: 3,
    tieude: "Tam quoc dien nghia",
    "tac gia": "La Quan Trung",
  },
];

const sachMoi = {
  id: 5, 
  tieude: "Trang quynh",
  "tac gia": "Nguyen Nhat Anh",
}

const dsSachKhiMoiThem = [...books, sachMoi];
console.log(dsSachKhiMoiThem);

//delete book object from array 

const dsSachKhiMoiXoa = dsSachKhiMoiThem.filter(book => book.id !==2);

console.log(dsSachKhiMoiXoa);

//update book object from array
const dsSachKhiMoiCapNhap =  dsSachKhiMoiXoa.map(book => book.id === 1  ? {...book,page : 1300} : book);

console.log(dsSachKhiMoiCapNhap);

//trong js co it nhat 10 loai du lieu bao gom co ban va mo rong.Nhung chung quy thi co 2 dac tinh la co the thay doi duoc ( mutable) va khong the thay doi duoc (immutable).

let phu = ["phu", "ho", "22"];

let bangai_phu = [...phu, "john", "doe", "22"];

