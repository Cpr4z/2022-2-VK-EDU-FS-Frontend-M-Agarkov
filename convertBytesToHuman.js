/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */
export default function convertBytesToHuman(bytes) {
  // your solution goes here
  if (!Number.isInteger(bytes) || bytes < 0){
    return false
    }
  let entire_part = 0 //счетчик единиц измерения информации
  let sizes = ['KB','MB','GB','TB']
  //если у нас целое число байт
  if (bytes < 1024) return String(bytes) + ' ' + 'B'
  else{
    while (bytes >= 1024) {
       bytes /= 1024// делим на 1024 и проверяем какой размерности у нас иформация 
       entire_part += 1
      }
  }
  console.log(bytes)
  if (bytes % 1 == 0){
    return bytes + ' ' + sizes[entire_part - 1]
  }
  else{
    return String(bytes.toFixed(2)) + ' ' + sizes[entire_part - 1]
  }
}
