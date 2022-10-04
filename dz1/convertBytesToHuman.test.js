/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from './convertBytesToHuman';

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman('ffsfsfs')).toBe(false);
});

test('Не возвращает целое число информаци для отрицательных чисел', () => {
  expect(convertBytesToHuman(-1)).not.toBe('1 B');
})

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(123123123)).toBe('117.42 MB');
});

test('Возвращает целое число единиц информации', () => {
  expect(convertBytesToHuman(1024)).toBe('1 KB');
});

test('Возвращает целое число единиц информации', () => {
  expect(convertBytesToHuman(1048576)).toBe('1 MB');
});

test('Возвращает false для отрицательных чисел', () => {
  expect(convertBytesToHuman(-1)).toBe(false);
});
// другая группа проверок
