"use strict";

const vocabulary = new Map();
vocabulary.set("cat", "кот");
vocabulary.set("dog", "собака");
vocabulary.set("table", "стол");
vocabulary.set("structure", "структура");
vocabulary.set("count", "считать");
vocabulary.set("kernel", "ядро");

const userInput = "Cat dog Set kernel structure count";

const translate = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => (vocabulary.has(word) ? vocabulary.get(word) : word))
    .join(" ");
};
const user1 = {
  id: 1,
  name: "John",
  age: 24,
};
const user2 = {
  id: 2,
  name: "Jane",
  age: 20,
};

const jM = ["aaaaaa", "bbbbbbbb", "zzzzzzzzzz"];
const jaM = ["saaaaaa", "sbbbbbb", "szzzzzzzzzz"];

const msgToouser = new Map();
msgToouser.set(user1, jM);
msgToouser.set(user2, jaM);

const getUserMsg = (u) => msgToouser.get(u);

const engWordsArray = []; //1
for (const item of vocabulary.keys()) {
  engWordsArray.push(item);
}

const rusWordsArray = []; //2
for (const item of vocabulary.values()) {
  rusWordsArray.push(item);
}

const engWords = [...vocabulary.keys()]; //Лучший вариант 1
const rusWords = [...vocabulary.values()]; //Лучший вариант 2

// mz.set("test", "sett");
// mz.set("love", "evol");
// mz.set("Mom", "Omo");
// mz.set("bed", "bedbed");
//Функция на сравнение двух строк - ключа и значения

const createVocabulary = (str) => {
  const mapToString = new Map();

  for (const letter of str) {
    if (mapToString.has(letter)) {
      const letterCount = mapToString.get(letter);
      mapToString.set(letter, letterCount + 1);
      continue; // Переходим на следущую интерацию
    }
    mapToString.set(letter, 1); // Первый раз, когда встретили букву
  }
  return mapToString;
};

const compare = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  const mapToString1 = createVocabulary(str1);
  const mapToString2 = createVocabulary(str2);
  

  if (mapToString1.size !== mapToString2.size) {
    return false;
  }

  for (const key of mapToString1.keys()) {
    if (mapToString1.get(key) != mapToString2.get(key)) {
      return false;
    }
  }
  return true;
};
