import { sum } from './sum';

it('1 + 2 should be 3', () => {
    const c = sum(1, 2);
    expect(c).toBe(3);
});