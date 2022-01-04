const channelName: string = "Easy Frontend";
console.log("Hello", channelName);

const num : number = 123;
let studentName : string = "Huong";
let isActive: boolean = false;
let numberLst : number[] = [1, 2, 3, 4, 5, 6, 7, 8];


const studentA = { id : 1, name : "Student"};
const studentB = studentB;
studentA === studentB;

interface Student {
  id : number;
  name : string;
  age : number;
  gender : string;
}

const studentJack : Student = { id : 1, name : "Jack", age : 12, gender : "Man"};

function sayHello(){
  console.log("Hello");
}

function sum(a: number, b: number){
  return a + b;
}
function sumNumber(a: number, b: number): number{
  return a + b;
}

// add question mask ? to tell ty this an optional parameter
function getLength(numberList?: number[]){
  return Array.isArray(numberList) ? numberList.length : 0;
}

// default paramater
function getLengthHaveDefault(numberList: number[] = []){
  return numberList.length : 0;
}

// Enum type
https://drive.google.com/file/d/1GT4SNNZxe329lO7uwWrBj3MDn-AoaGIo/view
// Dùng với các static data, không lên dùng cho data linh động

// Generics
interface Student {
  id: number;
  name: string;
}

// K : key
// V : Value
// T : type
// Thường dùng để định nghĩa nhanh 1 kiểu dữ liệu, có thể khó hiểu với nembie
interface List<T>{
  length: number;
  // Truy xuất những phần tử theo index number,
  [index: number]: T, //xuất ra 1 kiểu dữ liệu là T, không biết là kiểu gì
  // [index: number]: T | string, //xuất ra 1 kiểu dữ liệu là T, không biết là kiểu gì
  // [index: string]: T | number: sẽ hiểu đây là 1 dạng object, truyền vào key và nhận lại key
  // Phải convert được kiểu dữ liệu có các key khác nữa
}


// định nghĩ các phần tử có kiểu là number
const myNumberList: List<number> = [1, 2, 3];
const myNumberListString: List<string> = ['hello', 'hi'];
console.log(myNumberListString[1]) // input length of array
console.log(myNumberListString.length) // input length of array

const numberList: Array<number> = [1, 2, 3];
const wordList: Array<string> = ['hello', 'hi', 'bye'];
const studentList: Array<Student> = [{id: 1, name: "My"}, {id: 2, name: "Jack"}];
const listStudent: List<Student> = [{id: 1, name: "My"}, {id: 2, name: "Jack"}];

// keyof operator - input key of interface
// list of key of everything datatypes
type StudentKeys = keyof Student;
const keys : StudentKeys = 'age';

console.log(typeof 123);
console.log(typeof window !== 'undefined'); // check server and client


// Map types
interface Student { 
  id: number;
  name : string;
}

// deceleration key
type MappedTypes = { 
  [Key in keyof Student]: boolean;
}

// Ví dụ gọi API, dữ liệu trả về
export interface PaginationParams {
  _limit: number;
  _page: number;
  _totalRows: number;
}

export interface ListResponse<T>{
  data: [];
  pagination: PaginationParams;
}

export interface ListParams {
  _page?: number;
  _limit?: number;
  _sort?: string;
  _order: 'asc' | 'desc';

  [key: string] : any;
}

//call API Example
getAll(): Promise<ListResponse<Student>> {
  const url = '/cities';
  return axiosClient.get(url, { params: { _page: 1, _limit: 10}})
}