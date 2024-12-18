import getHealth from '../app';

test('Health: healthy test', () => {
    const character = { name: 'Маг', health: 90 };
    const result = getHealth(character);
    expect(result).toBe('healthy');
});

test('Health: wounded test', () => {
    const character = { name: 'Маг', health: 40 };
    const result = getHealth(character);
    expect(result).toBe('wounded');
});

test('Health: critical test', () => {
    const character = { name: 'Маг', health: 10 };
    const result = getHealth(character);
    expect(result).toBe('critical');
});
