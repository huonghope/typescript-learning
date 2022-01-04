interface DrawMethod {
	(target: Node): void;
	(target: number, options?: Object): void;
}

// sẽ delecation từ hàm đầu tiền định nghĩa của interface draw
let method: DrawMethod = function(target: any) { };

// delecatiion từ hàm thứ 2 của interface draw
let anotherMethod: DrawMethod = function(target: any, options?: Object) { };