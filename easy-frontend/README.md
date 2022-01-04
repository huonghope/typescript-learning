https://kulshekhar.github.io/ts-jest/docs/getting-started/installation
https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html
https://www.typescriptlang.org/tsconfig


```javascript
tsc // compile typescript to javascript
yarn add --dev jest typescript ts-jest @types/jest
yarn ts-jest config:init // create jet.config.js
tsc --init // create tsconfig.json
noEmitOnError // option compile, if file have error 
```
### Note
- strictBindCallApply: đảm bảo bind, call và apply được gọi đúng args
- strictFunctionTypes: đảm bảo đúng dữ liệu cho parameters của function (ko áp dụngcho method)
- strictPropertyInitializer: đảm bảo thuộc tính của class phải được khởi tạo
- noImplicitThis: đảm bảo là this không mang kiểu dữ liệu any
- useUnknownInCatchVariables: đẩm bảo là biến trong catch là kiểu unknown

- Primitive: number, boolean, string, number, undefined, symbol
- Reference: array, object, function

- Khuyên dùng sử dụng interface sau đó mới ưu tiên type: https://drive.google.com/file/d/1LNrtSnD7nJRjvYSj_Zgu0vBYi16m7_0p/view
- Dùng as để ép kiểu dữ liệu

- Generic : kiểu dữ liệu mà có nhận tham số và trả về kiểu dữ liệu tương ứng
```

Một số Utility Types phổ biến
#Name  - #Desc
1, Partial : Set all props of Type to optional : Thường dùng để update dữ liệu trước đó
2, Required: Setll all props Type to Required : Dùng để chuyển option 1 interface thành required (Bắt buốc phải truyền dữ liệu)
3, Readonly : Set all props of Type to Readonly : Chỉ đọc
4, Record <Keys, Type> : A type with key from Keys and has value of Types : tạo dữ liệu (Phần Key và phần type sẽ được tạo trước và truyền vào)
5, Pick<Type, Keys> : A type by picking a set ò Keys from Type : Cắt bỏ các key cần thiết, chọn lọc
6, Omit<Type, Keys> : A type by omitting a set ò Keys from Type : Ngược với pick, sẽ loại trừ key không cần thiết và lấy hết những key còn lại
7, ReturnType : The return type ò fuction type: trả về kiểu return của function
```

