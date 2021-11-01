# TypeScript

> 它可以说是js的语法糖，也可以说是es6的超集

## 安装与编译

```sh
  npm install typescript -g
  tsc helloworld.ts
```

```sh
  tsc --init // 生成一个tsconfig.json文件
  菜单  任务-运行任务 tsc:监视-tsconfig.json然后就可以自动生成代码
```

## 基础类型

> 与JS几乎相同，可以在typescript中编写ES6、ES5语法，而且扩展了JS的语法

** 尽可能地使用let来代替var

```ts
let isOver: boolean = false;      // 布尔类型
let num: number = 6;              // 数字类型
let hexNum: number = 0xf00d;
let binNum: number = 0b1010;
let name: string = 'Hello World'; // 字符串

/* es6中的小撇号（模板字符串）*/
let name: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ name }.

I'll be ${ age + 1 } years old next month.`

/* 数组 */
let arr: number[] = [1,2,3]; // 类型元素数组
let arr: Array<number> = [1,2,3];
let arr:any[] = [1,2,3]; // 类型元素数组

/* 元组Tuple */
let x: [string,number];
x = ['hello',10];

x = [10.'hello']; // error
// 当访问一个越界的元素，会使用联合类型替代：
x[3] = 'world'; // OK, 字符串可以赋值给(string | number)类型
console.log(x[5].toString()); // OK, 'string' 和 'number' 都有 toString
x[6] = true; // Error, 布尔不是(string | number)类型

/* 枚举 enum */
enum Color {Red,Green,Blue} // || enum Color {Red = 1,Green = 9,Blue}
let c: Color = Color.Red;
let colorName: string = Color[2]; // 'Green'

/* Any
 * 在对现有代码进行改写的时候，any类型是十分有用的，它允许你在编译时可选择地包含或移除类型检查。
 * 你可能认为 Object有相似的作用，就像它在其它语言中那样。 但是 Object类型的变量只是允许你给它赋任意值 -
 * 但是却不能够在它上面调用任意的方法，即便它真的有这些方法
 **/
let notSure: any = 5;
notSure = false;
notSure = 'maybe';
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let prettySure: Object = 4;
prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.

let list: any[] = [1, true, "free"];

/* Void */
// 表示方法没有返回值
function run():void {
   console.log('run')
}

/* Null & Undefined*/

var num:number | undefined;
num = 123
console.log(num);

/* Never */
// 从来都不会出现的值
var a:never;
a=(()=>{
    throw new Error('错误')
})()

/* Object */

/* 类型断言（类型转换） */

```

---

## 变量声明

---

## 接口

> 起到一种规范和限制的作用： 属性类接口，函数类型接口，可索引接口

```ts

```

---

## 函数

```ts
  var run = function():number {
    return 123;
  }
  function getInfo(name:string,age:number):string {
    return name + age;
  }

  // 方法的可选参数
  // es5中方法的实参和形参可以不一样，但是ts中必须一样，如果不一样就需要配置可选参数
  // 可选参数必须配置到参数的最后面！！！
  function getInfo(name:string,age?:number):string {
    if(age) {
      return name + age;
    } else {
      return name;
    }
  }
  alert(getInfo('lipeng'))
  // 方法的默认参数
  // es5中没法设置默认参数，es6和ts中可以设置默认参数
  function getInfo(name:string, age:number = 20):string {
    if(age) {
      return name + age;
    } else {
      return name;
    }
  }
  alert(getInfo('lipeng'))
  // 方法的剩余参数 (三点运算符)
  function sum(a:number, b:number, c:number, d:number):number {
      return a+b+c+d;
  }
  function sum1(...result:[]):number {
      var sum = 0
      result.forEach(function(num){
          sum += num
      })
      return sum;
  }
  sum1(1,2,44,5,7,8);
  // 方法的重载
  // java中方法的重载：指的是两个或者两个以上同名函数，但它们的参数不一样，这时会出现函数重载的情况
  // ts中的重载，通过为同一个函数提供多个函数类型定义来试下多种功能的目的
  function getInfo(name:string):string;
  function getInfo(age:number):number;
  function getInfo(str:any):any {
    if(typeof str === 'string') {
      return str
    } else {
      return str + 10
    }
  }
  // 箭头函数
  // 箭头函数中的this指向上下文
  setTimeout(() => {
      alert('num')
  },1000)
```

---

> 使用enum 维护常量

```ts

  // 使用 const enum 维护常量
  const enum TODO_STATUS {
    TODO = 'TODO',
    DONE = 'DONE',
    DOING = 'DOING'
  }
  function todos(status:TODO_STATUS):number[] {
      return []
  };
  todos(TODO_STATUS.TODO)

```

>使用 VS Code 有时会出现，使用 tsc 编译时产生的问题与 vs code 提示的问题不一致
找到项目右下角的 Typescript 字样，右侧显示它的版本号，可以点击选择 Use Workspace Version，它表示与项目依赖的 typescript 版本一致。
或者编辑 .vs-code/settings.json

```json
  {
    "typescript.tsdk": "node_modules/typescript/lib"
  }
```

---

### 代码检查

> 两个方案：1、TSLint 2、ESLint + typescript-eslint-parser（建议使用TSLint）

TSLint 的优点：

- 专为 TypeScript 服务，bug 比 ESLint 少
- 不受限于 ESLint 使用的语法树 ESTree
- 能直接通过 tsconfig.json 中的配置编译整个项目，使得在一个文件中的类型定义能够联动到其他文件中的代码检查

ESLint 的优点：

- 基础规则比 TSLint 多很多
- 社区繁荣，插件众多

### 一、使用TSLint

```sh
  npm install --save-dev tslint

  // 创建配置文件 tslint.jsonp
  {
    "rules": {
        // 必须使用 === 或 !==，禁止使用 == 或 !=，与 null 比较时除外
        "triple-equals": [
            true,
            "allow-null-check"
        ]
    },
    "linterOptions": {
        "exclude": [
            "**/node_modules/**"
        ]
    }
  }

  // package.json中添加tslint脚本
  {
    "scripts": {
        "tslint": "tslint --project . src/**/*.ts src/**/*.tsx",
    }
  }

  // 运行检查
  npm run tslint

```

### 二、使用ESLint
