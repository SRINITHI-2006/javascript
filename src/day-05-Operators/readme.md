| Operator | Meaning             | Example       |
| -------- | ------------------- | ------------- |
| `+`      | Addition            | `10 + 5 = 15` |
| `-`      | Subtraction         | `10 - 5 = 5`  |
| `*`      | Multiplication      | `10 * 5 = 50` |
| `/`      | Division            | `10 / 5 = 2`  |
| `%`      | Modulus (Remainder) | `10 % 3 = 1`  |
| `**`     | Exponent (Power)    | `2 ** 3 = 8`  |

| Operator | Example  | Same As      |
| -------- | -------- | ------------ |
| `=`      | `x = 5`  | Assign value |
| `+=`     | `x += 3` | `x = x + 3`  |
| `-=`     | `x -= 3` | `x = x - 3`  |
| `*=`     | `x *= 3` | `x = x * 3`  |
| `/=`     | `x /= 3` | `x = x / 3`  |
| `%=`     | `x %= 3` | `x = x % 3`  |



example:

    const result = 2 ** 3 ** 2;
    console.log(result); // 512
    

//First, JavaScript evaluates 3 ** 2, which equals 9, then, it evaluates 2 ** 9, which equals 512
