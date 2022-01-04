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

1, strictBindCallApply: đảm bảo bind, call và apply được gọi đúng args
2, strictFunctionTypes: đảm bảo đúng dữ liệu cho parameters của function (ko áp dụngcho method)
3 strictPropertyInitializer: đảm bảo thuộc tính của class phải được khởi tạo
4 noImplicitThis: đảm bảo là this không mang kiểu dữ liệu any
5 useUnknownInCatchVariables: đẩm bảo là biến trong catch là kiểu unknown

Primitive: number, boolean, string, number, undefined, symbol
Reference: array, object, function

Khuyên dùng sử dụng interface sau đó mới ưu tiên type: https://drive.google.com/file/d/1LNrtSnD7nJRjvYSj_Zgu0vBYi16m7_0p/view
Dùng as để ép kiểu dữ liệu

Generic : kiểu dữ liệu mà có nhận tham số và trả về kiểu dữ liệu tương ứng
