/**
 * @jest-environment jsdom
 */

import {
  analyzeText,
  findLongestWord,
  countSentences,
  countUniqueWords,
  displaySortedWords,
  clearTable,
  clearText
} from "../src/js/index";

// Создаем фиктивный HTML для тестирования
// function renderHTML() {
//     document.body.innerHTML = `
//     <main class="container">
//       <form id="analyse-list-form">
//         <div class="left">
//           <label class="label" for="analyze-title">Enter your text</label>
//           <textarea rows="3" class="input" required id="analyze-title"></textarea>

//           <label class="label" for="">Your text</label>
//           <p id="userText"></p>
//         </div>

//         <div class="right">
//           <button id="analyzeButton" class="btn btn-accent">Analyze</button>
//           <button id="clearButton" class="btn btn-default">Clear table</button>
//         </div>
//       </form>
//       <table class="table" border="1">
//         <thead>
//           <tr>
//             <th width="200px">Variation</th>
//             <th>Result</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>First character</td>
//             <td id="answer5"></td>
//           </tr>
//           <tr>
//             <td>Words count</td>
//             <td id="answer1"></td>
//           </tr>
//           <tr>
//             <td>Number of characters</td>
//             <td id="answer2"></td>
//           </tr>
//           <tr>
//             <td>Max length word</td>
//             <td id="answer3"></td>
//           </tr>
//           <tr>
//             <td>Reverse word</td>
//             <td id="answer4"></td>
//           </tr>
//           <tr>
//             <td>Sentences count</td>
//             <td id="answer6"></td>
//           </tr>
//           <tr>
//             <td>Unique word count</td>
//             <td id="answer7"></td>
//           </tr>
//           <tr>
//             <td>Words in alphabetical order</td>
//             <td id="answer8"></td>
//           </tr>
//         </tbody>
//       </table>
//     </main>
//   `;
//   }

// Функция для добавления слушателей событий
// function addEventListeners() {
//     const analyzeButton = document.getElementById("analyzeButton");

//     analyzeButton.addEventListener("click", function (event) {
//       event.preventDefault();
//       analyzeText();
//     });

//     const clearButton = document.getElementById("clearButton");

//     clearButton.addEventListener("click", function (event) {
//       event.preventDefault();
//       clearText();
//       clearTable();
//     });
//   }

// Вызываем функцию добавления слушателей перед каждым тестом

// beforeEach(() => {
//   renderHTML();
//   addEventListeners();
// });

describe("Анализ текста", () => {
  // Тест на анализ текста
  // test("Анализировать текст", () => {
  //   const analyzeTitle = document.getElementById("analyze-title");
  //   const answer1 = document.getElementById("answer1");
  //   const answer2 = document.getElementById("answer2");
  //   const answer3 = document.getElementById("answer3");
  //   const answer4 = document.getElementById("answer4");
  //   const answer5 = document.getElementById("answer5");
  //   const answer6 = document.getElementById("answer6");
  //   const answer7 = document.getElementById("answer7");
  //   const answer8 = document.getElementById("answer8");
  //   const userText = document.getElementById("userText");

  //   // Вводим текст для анализа
  //   analyzeTitle.value = "This is a test sentence. Another test sentence!";

  //   // Вызываем функцию анализа
  //   analyzeText();

  //   // Проверяем результаты анализа
  //   expect(answer1.textContent).toBe("10");
  //   expect(answer2.textContent).toBe("49");
  //   expect(answer3.textContent).toBe("sentence");
  //   expect(answer4.textContent).toBe("!ecnetnes tset rehtona tsuJ");
  //   expect(answer5.textContent).toBe("T");
  //   expect(answer6.textContent).toBe("2");
  //   expect(answer7.textContent).toBe("10");
  //   expect(answer8.textContent).toBe(
  //     "Another, This, a, is, sentence, test, tsuJ"
  //   );

  //   // Проверяем очистку текстового поля
  //   expect(analyzeTitle.value).toBe("");

  //   // Проверяем текст, который был помещен в <p> элемент
  //   expect(userText.textContent).toBe(
  //     "This is a test sentence. Another test sentence!"
  //   );
  // });

  // Тест на поиск самого длинного слова
  test("Поиск самого длинного слова", () => {
    const words = ["This", "is", "a", "test", "sentence"];
    const longestWord = findLongestWord(words);
    expect(longestWord).toBe("sentence");
  });

  // Тест на подсчет предложений в тексте
  test("Подсчет предложений в тексте", () => {
    const text = "This is a test sentence. Another test sentence!";
    const sentenceCount = countSentences(text);
    expect(sentenceCount).toBe(2);
  });

  // Тест на подсчет количества уникальных слов в массиве слов
  test("Подсчет уникальных слов", () => {
    const words = ["This", "is", "a", "test", "sentence", "test"];
    const uniqueWordCount = countUniqueWords(words);
    expect(uniqueWordCount).toBe(5);
  });

  // Тест на вывод слов массива в алфавитном порядке
  test("Вывод слов в алфавитном порядке", () => {
    const words = ["this", "is", "a", "test", "sentence"];
    const sortedWords = displaySortedWords(words);
    expect(sortedWords).toBe("a, is, sentence, test, this");
  });

  // Тест на очистку таблицы с результатами
  // test("Очистка таблицы с результатами", () => {
  //     const answer1 = document.getElementById("answer1");
  //     const answer2 = document.getElementById("answer2");
  //     const answer3 = document.getElementById("answer3");
  //     const answer4 = document.getElementById("answer4");
  //     const answer5 = document.getElementById("answer5");
  //     const answer6 = document.getElementById("answer6");
  //     const answer7 = document.getElementById("answer7");
  //     const answer8 = document.getElementById("answer8");

  //     // Заполним некоторые значения, чтобы убедиться, что они будут очищены
  //     answer1.textContent = "10";
  //     answer2.textContent = "49";
  //     answer3.textContent = "sentence";
  //     answer4.textContent = "!ecnetnes tset rehtona tsuJ";
  //     answer5.textContent = "T";
  //     answer6.textContent = "2";
  //     answer7.textContent = "10";
  //     answer8.textContent = "Another, This, a, is, sentence, test, tsuJ";

  //     // Вызываем функцию очистки таблицы
  //     clearTable();

  //     // Проверяем, что значения таблицы были очищены
  //     expect(answer1.textContent).toBe("");
  //     expect(answer2.textContent).toBe("");
  //     expect(answer3.textContent).toBe("");
  //     expect(answer4.textContent).toBe("");
  //     expect(answer5.textContent).toBe("");
  //     expect(answer6.textContent).toBe("");
  //     expect(answer7.textContent).toBe("");
  //     expect(answer8.textContent).toBe("");
  //   });

  // Тест на очистку текстового поля
  // test("Очистка текстового поля", () => {
  //   const analyzeTitle = document.getElementById("analyze-title");

  //   // Заполним поле текстом, чтобы убедиться, что оно будет очищено
  //   analyzeTitle.value = "This is a test sentence. Another test sentence!";

  //   // Вызываем функцию очистки текстового поля
  //   clearText();

  //   // Проверяем, что поле было очищено
  //   expect(analyzeTitle.value).toBe("");
  // });
});
