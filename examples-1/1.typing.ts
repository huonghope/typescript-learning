import { Drawable } from './2.interface';

// khai báo 1 biến dữ liệu tĩnh kiểu Color (3 màu tương đương với 1,2,3)
enum Color { Red, Green, Blue }

let check = true;

const defaultColor: Color = Color.Red;

// chuyền vào các parameter
function draw(target: Node, ...items: Drawable[]): void { 
  console.log("draw function")
}