
// interface sẽ định nghĩa 2 kiểu dữ liệu và 1 hàm
export interface Drawable {
  id: number;
  name?: string;
  draw: (target: Node) => void;
}

// class nhận kế thừa từ interface draw
class React implements Drawable {
  id: number;
  draw: (target: Node) => void;
}

// khai báo 1 biến cơ bản có kiểu dữ liệu là draw
class things: Drawable = {
  id: 0;
  draw: (target: Node) => void;
}
