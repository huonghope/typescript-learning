import { Drawable } from './2.interface';

// 1 trong 2 kiểu dữ liệu sẽ được gắn vào id
let id: number | string;

interface Rectangle extends Drawable {
	width: number;
	height: number;
}