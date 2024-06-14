# Promise wait | Good for development.

<!-- One **straight** *forward* ***function*** ~~that~~ <mark>returns</mark> <sup>a</sup> <sub>random</sub> `number` between **min** and **max** numbers 😍 -->
One **straight** *forward* ***function*** ~~that~~ `waits` | Good for <mark>development</mark> purposes 😍

## Install
```shell
npm i -D @ssts/wait
```
## Import
```js
import seniorWAIT from "@ssts/wait";
```
## Use
```ts
async function handleSomething(): Promise<void> {
  await seniorWAIT(1000);   // in milliseconds
}
```

## Arguments
> Returns Promise\<void\>

| Order | Parameter |   Type   |  Default  |
| :---: | :-------: | :------: | :-------: |
|   1   | duration  |  number  | 5000 (ms) |

## Example

```ts
import seniorWAIT from "@ssts/wait";

const handleSomething = async (): Promise<void> => {
  try {
    console.log("waiting started");
    await seniorWAIT(2000);   // in milliseconds
    console.log("waiting done");
    
    await doSomething();

  } catch (error) {
    console.log(error);
  }
}
```

___
---
---
---
***
>   Made With Chocolate By Senior Sedo 😎
>>  Be Chocolateful 💙😍
>>
>>  **ssts** stands for **s**enior-**s**edo-**t**ype**s**cript 💙
>>
>>  So instead of ~~@senior-sedo-typescript/promise-wait~~
>>> `@ssts/wait` for simplicity sake 😍
***
---
---
---
___