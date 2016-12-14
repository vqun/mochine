# mochine
Mock engine: a generator for simulating data. mochine could help simulate the data you describe.

# Install
## in npm
> npm install mochine
## in browser
```html
<script type="text/javascript" src="./build/mochine.min.js"></script>
```

# Usage
## Usage 1: Using [[DESCRIPTOR]]
```javascript
import Mochine from 'mochine'; // npm usage; Mochine is defined on window if using in browser
const Mock = Mochine([[DESCRIPTOR]]);
// Then, see Demo below
```
### [[DESCRIPTOR]]
```javascript
[[DESCRIPTOR]] = [[DESC]] || ArrayOf([[DESC]]);
```

### [[DESC]]
```javascript
[[DESC]] = {
  name: [[DESCRIPTION]]
};
```

### [[DESCRIPTION]]
#### Generate an integer
```javascript
[[DESCRIPTION]] = "int([[MIN]], [[MAX]])"

[[MIN]]: minimal integer, default 0
[[MAX]]: maximal integer, default 100
```

#### Generate a number(decimal or integer)
```javascript
[[DESCRIPTION]] = "int([[MIN]], [[MAX]])"

[[MIN]]: minimal number, default 0
[[MAX]]: maximal number, default 100
```

#### Generate a string
```javascript
[[DESCRIPTION]] = "string([[MIN]], [[MAX]])"

[[MIN]]: minimal length of the generated string, default 0
[[MAX]]: maximal length of the generated string, default 12
```

#### Generate a boolean
```javascript
[[DESCRIPTION]] = "bool()"
```

#### Generate a enumeration
```javascript
[[DESCRIPTION]] = "enum([e1, e2, ..., en])" || "enum(e1, e2, ..., en)"

e1 ~ en: Mochine will pick one from them when mocking, util now, en only support number or string
```

#### Generate a date
```javascript
[[DESCRIPTION]] = "date([[FORMAT]], [[START]], [[END]])"

[[FORMAT]]: string('' or "" is unneeded), default 'YYYY-MM-DD', use tokens Y, M, D, H, I, S
to represent year, month, day, hour, minute, second. YYYY will get a full year,
YYY will only get last three (2016 will return 016), and so on and so it is with
others.

[[START]]: minimal date, default new Date(), formated string, such as "2016/10/01 10:20:30"
[[END]]: maximal date, default new Date() + 30, formated string, such as "2016/10/10 10:20:30"

Mochine will pick one date between [[START]] and [[END]] when mocking.
```

#### Generate an array
```javascript
[[DESCRIPTION]] = "array([[LENGTH]], [[GEN]])"

[[LENGTH]]: length of the generated array, default 10,
but randomed (between 0 and 10) if [[LENGTH]] is a `function`
(and [[LENGTH]] will be change to be [[GEN]]).

[[GEN]]: array elements' [[DESCRIPTION]], any one of [[DESCRIPTION]] introduced above.
default 'string()'
```

#### Generate self-defined data
***Cooming next***

## Usage 2: Using Typegines
```javascript
import Mochine, { Typegines } from 'mochine'; // npm usage; Mochine is defined on window if using in browser
const Mock = Mochine({
  name: Typegines.string(3, 10),
  age: Typegines.int(0, 150),
  birthday: Typegines.date("YYYY/MM/DD", "1949/10/01", "2016/01/01")
  // ...
});
// Then, see Demo below
```
`Typegines` has all type methods corresponding to `[[DESCRIPTION]]` above with same arguments.

# Demo
```javascript
const Mock = Mochine({
  name: "string(3, 10)",
  age: "int(0, 150)", // number is similar with int, no demo here.
  birthday: "date(YYYY/MM/DD, 1949/10/01, 2016/01/01)"
  isBoy: "bool()",
  firends: "array(5, string(3, 10))",
  city: "enum([北京, 上海, 广州, 深圳, 杭州])", // square brackets are unneeded, but recomened
  location: ["number(0, 90)", "number(0, 180)"]
});

const Me = Mock();
const MyClassmate = Mock();

// [[!!IMPORTANT!!]] also, you can mock just the sub-data

const name = Mock.name();
const birthday = Mock.birthday();
const location = Mock.location();
const lat = Mock.location[0]();
```