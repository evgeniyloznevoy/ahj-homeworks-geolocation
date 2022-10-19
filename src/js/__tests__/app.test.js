import Modal from './Modal.js';

test('valid form', () => {
  const modal = new Modal();
  const received = modal.checkValidity('51.50851, -0.1257');
  expect(received).toEqual(['51.50851, -0.1257']);
});
test('empty form', () => {
  const modal = new Modal();
  const received = modal.checkValidity('');
  expect(received).toBe(null);
});
test('not valid with number', () => {
  const modal = new Modal();
  const received = modal.checkValidity('7777777,888888888');
  expect(received).toBe(null);
});
test('not valid with not a number', () => {
  const modal = new Modal();
  const received = modal.checkValidity('ndjjdjjdj, -0.1257');
  expect(received).toBe(null);
});