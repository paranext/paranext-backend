// Many tests must use null
/* eslint-disable no-null/no-null */
import { VerseRef, ScrVers } from '@sillsdev/scripture';
import { serialize, deserialize } from './serialization';

describe('serialize', () => {
  it('should convert undefined properties to null in JSON string', () => {
    const obj = { a: 1, b: undefined, c: null };
    const result = serialize(obj);
    expect(result).toBe('{"a":1,"b":null,"c":null}');
  });

  it('should use the replacer function if provided', () => {
    const obj = { a: 1, b: 2 };
    const replacer = (key: string, value: unknown) => (key === 'b' ? undefined : value);
    const result = serialize(obj, replacer);
    expect(result).toBe('{"a":1,"b":null}');
  });

  it('should add indentation if space parameter is provided', () => {
    const obj = { a: 1, b: 2 };
    const result = serialize(obj, undefined, 2);
    expect(result).toBe('{\n  "a": 1,\n  "b": 2\n}');
  });
});

describe('deserialize', () => {
  it('should convert null properties to undefined in JavaScript object', () => {
    const json = '{"a":1,"b":null,"c":null}';
    const result = deserialize(json);
    expect(result).toEqual({ a: 1, b: undefined, c: undefined });
  });

  it('should use the reviver function if provided', () => {
    const json = '{"a":1,"b":2}';
    const reviver = (key: string, value: unknown) => (key === 'b' ? undefined : value);
    const result = deserialize(json, reviver);
    expect(result).toEqual({ a: 1, b: undefined });
  });

  it('should handle nested objects correctly', () => {
    const json = '{"a":1,"b":{"c":null}}';
    const result = deserialize(json);
    expect(result).toEqual({ a: 1, b: { c: undefined } });
  });

  it('should convert SerializedVerseRef to VerseRef', () => {
    const json = '{"book":"GEN","chapterNum":1,"verseNum":1}';
    const result = deserialize(json);
    expect(result).toEqual(new VerseRef('GEN', '1', '1'));
  });

  it('should handle SerializedVerseRef with versification', () => {
    const json = '{"book":"GEN","chapterNum":1,"verseNum":1,"versificationStr":"English"}';
    const result = deserialize(json);
    expect(result).toEqual(new VerseRef('GEN', '1', '1', new ScrVers('English')));
  });

  it('should handle nested SerializedVerseRef objects', () => {
    const json = '{"a":1,"b":{"book":"GEN","chapterNum":1,"verseNum":1}}';
    const result = deserialize(json);
    expect(result).toEqual({ a: 1, b: new VerseRef('GEN', '1', '1') });
  });
});
