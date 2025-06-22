// Функция для получения первой буквы строки
function getFirstLetter(text) {
  const trimmed = text.trim()
  return trimmed.length > 0 ? trimmed[0] : '—'
}

document.addEventListener('DOMContentLoaded', () => {
  // Получаем ссылки на элементы интерфейса
  const analyzeButton = document.getElementById('analyzeButton') // анализ
  const clearTableButton = document.getElementById('clearTableButton') // очистка
  const textarea = document.getElementById('analyze-title') // поле для ввода текста
  const userText = document.getElementById('userText') // отображение введённого текста

  // Ячейки таблицы с результатами анализа
  const answer1 = document.getElementById('answer1') // Words count
  const answer2 = document.getElementById('answer2') // Number of characters
  const answer3 = document.getElementById('answer3') // Max length word
  const answer4 = document.getElementById('answer4') // Reverse word
  const answer5 = document.getElementById('answer5') // First character
  const answer6 = document.getElementById('answer6') // Sentences count
  const answer7 = document.getElementById('answer7') // Unique word count
  const answer8 = document.getElementById('answer8') // Words in alphabetical order

  // Обработчик кнопки "Analyze"
  analyzeButton.addEventListener('click', (event) => {
    event.preventDefault() // Предотвращаем отправку формы

    const rawText = textarea.value
    const trimmedText = rawText.trim()

    // Отображаем введённый текст
    userText.textContent = rawText
    userText.style.display = 'block'

    // Разбиваем текст на слова
    const words = trimmedText.split(/\s+/).filter(Boolean)
    const wordCount = words.length
    const charCount = trimmedText.replace(/\s/g, '').length
    const reversedText = [...trimmedText].reverse().join('')
    const firstChar = getFirstLetter(trimmedText)
    const sentenceCount = trimmedText.split(/[.!?]+/).filter(Boolean).length

    // Находим самое длинное слово (без пунктуации)
    const longestWord = words.reduce((longest, current) => {
      const cleanLongest = longest.replace(/[^\p{L}\p{N}]/gu, '')
      const cleanCurrent = current.replace(/[^\p{L}\p{N}]/gu, '')
      return cleanCurrent.length > cleanLongest.length ? cleanCurrent : cleanLongest
    }, '—')

    // Уникальные слова
    const uniqueWordsSet = new Set(
      words.map((word) => word.toLowerCase().replace(/[^\p{L}\p{N}]/gu, '')).filter(Boolean)
    )
    const uniqueWordCount = uniqueWordsSet.size

    // Сортировка слов по алфавиту
    const sortedWords =
      uniqueWordCount > 0
        ? Array.from(uniqueWordsSet)
            .sort((a, b) => a.localeCompare(b, 'ru'))
            .join(', ')
        : '—'

    // Записываем результаты в таблицу
    answer1.textContent = wordCount
    answer2.textContent = charCount
    answer3.textContent = longestWord
    answer4.textContent = reversedText
    answer5.textContent = firstChar
    answer6.textContent = sentenceCount
    answer7.textContent = uniqueWordCount
    answer8.textContent = sortedWords
  })

  // Обработчик кнопки "Clear table"
  clearTableButton.addEventListener('click', (event) => {
    event.preventDefault() // Предотвращаем поведение кнопки

    // Сброс всех ячеек таблицы к дефису
    answer1.textContent =
      answer2.textContent =
      answer3.textContent =
      answer4.textContent =
      answer5.textContent =
      answer6.textContent =
      answer7.textContent =
      answer8.textContent =
        '—'

    // Скрываем текст пользователя
    userText.textContent = ''
    userText.style.display = 'none'

    // Очищаем поле ввода
    textarea.value = ''
  })
})
