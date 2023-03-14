//Method pada array

// let arr=["dani", "juhaeni", 20 ,2 ];
// conlose.log(arr);

//join= Merubah isi array menjadi string
//console.log(arr.join("-"));

//push & pop = menambah dan menghapus eleman array pada akhir array

// arr.push("daendra", 10);
// arr.pop();
// arr.pop();
// console.log(arr.join("-"));

//unshift & shift = menambah dan menghapus elemen array pada awal array
// arr.unshift("louayy");
// // arr.shift();
// console.log(arr);
//arr.shift();
//console.log(arr.join("-"));

//splice = menyambung array 
//splice (indexAwal , mauDihapusberapa, elemenbaru,elemenbaru2,.....)

// arr.splice(2,2,"saddam", "nicolas");
// console.log(arr);

// slice = mengiris array
//slice(awal,akhir)
// console.log(arr)
// var arr2 = arr.slice(0,3);
// console.log(arr2)
// console.log(arr.join("-"));
// console.log(arr2.join("-"));

// let a= [1,2,3,4,"a", "b", "c", "d"];
// let a2 = a.slice(3,7);
// console.log(a);
// console.log(a2);



//method filter()
//method filter() berfungsi untuk menyaring data di array 
//parameter yang harus diberikan pada method filter() sama seperti method foreach()
//,yaitu fungsi sebagai fungsi callback
//     const angka = [1,2,3,4,5,6,7,8,9];


// const filterArr = angka.filter((item) => {
//     return item % 2== 0


// })
// console.log(filterArr);

// const users = [{
//     nama:"faiz",
//     umur:50,
//     gender: 'male',
// },
// {
//     nama:"haikal",
//     umur:20,
//     gender: 'female',
// },
// {
//     nama:"udin",
//     umur:100,
//     gender: 'male',
// },
// {
//     nama:"roro",
//     umur:19,
//     gender: 'female',
// },
// {
//     nama:"mitha",
//     umur:30,
//     gender: 'female',
// },
// ];
// const userMale= users.filter((users)=> users.umur === 100);
// // === untukk melihat value dan tipe data

// console.log(userMale)

let mobil = [
    {
    namaMobil:"livina",
    brand:"nissan",
tahun:200,
},
    {
    namaMobil:"pajero ",
    brand:"mitsubisi",
tahun:300,
},

    {
    namaMobil:'march',
    brand:'nissan',
tahun:400,
},
];

 let hasil= prompt("masukan nama mobil");

let data= mobil.filter((mobil) => mobil.namaMobil ===  hasil);

console.log(data);


