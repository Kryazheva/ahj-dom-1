/* eslint-disable import/extensions */
// eslint-disable-next-line no-unused-vars
import Goblin from '../Goblin';

test('проверяем свойства объекта', () => {
  const Game = new Goblin(document);
  expect(Game.headGoblin).toContain('game-col-goblin');
  expect(Game.colls).toBeTruthy();
});
