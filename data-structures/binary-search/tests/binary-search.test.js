const { findFirstOccurrence, findLastOccurrence } = require('./binary-search');

const target = 9;
const a1 = [1,2,3,9,9,9,10,66];
const a2 = [1,2,3,9,9,9];
const a3 = [9,9,9,10,66];
const a4 = [1,2,3,9];
const a5 = [1,2,3];
const a6 = [9,9,9];
const a7 = [9];
const a8 = [5];
const a9 = [];

describe('findFirstOccurrence', () => {
    test('a1: [1,2,3,9,9,9,10,66] -> index 3', () => {
        expect(findFirstOccurrence(a1, target)).toBe(3);
    });

    test('a2: [1,2,3,9,9,9] -> index 3', () => {
        expect(findFirstOccurrence(a2, target)).toBe(3);
    });

    test('a3: [9,9,9,10,66] -> index 0', () => {
        expect(findFirstOccurrence(a3, target)).toBe(0);
    });

    test('a4: [1,2,3,9] -> index 3', () => {
        expect(findFirstOccurrence(a4, target)).toBe(3);
    });

    test('a5: [1,2,3] -> -1 (not found)', () => {
        expect(findFirstOccurrence(a5, target)).toBe(-1);
    });

    test('a6: [9,9,9] -> index 0', () => {
        expect(findFirstOccurrence(a6, target)).toBe(0);
    });

    test('a7: [9] -> index 0', () => {
        expect(findFirstOccurrence(a7, target)).toBe(0);
    });

    test('a8: [5] -> -1 (not found)', () => {
        expect(findFirstOccurrence(a8, target)).toBe(-1);
    });

    test('a9: [] -> -1 (empty array)', () => {
        expect(findFirstOccurrence(a9, target)).toBe(-1);
    });
});

describe('findLastOccurrence', () => {
    test('a1: [1,2,3,9,9,9,10,66] -> index 5', () => {
        expect(findLastOccurrence(a1, target)).toBe(5);
    });

    test('a2: [1,2,3,9,9,9] -> index 5', () => {
        expect(findLastOccurrence(a2, target)).toBe(5);
    });

    test('a3: [9,9,9,10,66] -> index 2', () => {
        expect(findLastOccurrence(a3, target)).toBe(2);
    });

    test('a4: [1,2,3,9] -> index 3', () => {
        expect(findLastOccurrence(a4, target)).toBe(3);
    });

    test('a5: [1,2,3] -> -1 (not found)', () => {
        expect(findLastOccurrence(a5, target)).toBe(-1);
    });

    test('a6: [9,9,9] -> index 2', () => {
        expect(findLastOccurrence(a6, target)).toBe(2);
    });

    test('a7: [9] -> index 0', () => {
        expect(findLastOccurrence(a7, target)).toBe(0);
    });

    test('a8: [5] -> -1 (not found)', () => {
        expect(findLastOccurrence(a8, target)).toBe(-1);
    });

    test('a9: [] -> -1 (empty array)', () => {
        expect(findLastOccurrence(a9, target)).toBe(-1);
    });
});