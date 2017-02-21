const wrap = require('./wrap');

describe('word wrapper', () => {
  it('wraps empty string', () => {
    expect(wrap('')).toEqual('');
  });

  it('does not wrap string shorter than col', () => {
    expect(wrap('this', 10)).toEqual('this');
  });

  it('splits one word if it is longer than col', () => {
    expect(wrap('this', 2)).toEqual('th\nis');
  });

  it('warps one word many times', () => {
    expect(wrap('abcdefghij', 3)).toEqual('abc\ndef\nghi\nj');
  });

  it('wraps two words after space', () => {
    expect(wrap('word word', 6)).toEqual('word\nword');
  });

  it('wraps well before word boundary', () => {
    expect(wrap('word word', 3)).toEqual('wor\nd\nwor\nd');
  });

  it('wraps just before word boundary', () => {
    expect(wrap('word word', 4)).toEqual('word\nword');
  });

  it('wraps two words well just before word boundary', () => {
    expect(wrap('word word word', 9)).toEqual('word word\nword');
  });
});

