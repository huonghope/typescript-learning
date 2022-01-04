// Định nghĩa 1 kiểu enum
export enum Phylum { Chordata }

// Định nghĩa 1 làm return ra any kiểu dữ liệu
interface Loyalty {
	beLoyal(): any;
}

// Định nghĩa 1 class
// có 1 hàm constructor và 1 hàm gettype Đơn giản
export default class Animal {
	private _type: Phylum;

	get type() { return this._type; }

	constructor(type: Phylum) { this._type = type; }
}

export class Dog extends Animal implements Loyalty {
	private _name: string;

	constructor(name: string) {
		super(Phylum.Chordata);
		this._name = name;
	}

	beLoyal() { }
}