const wrap = function(s, col = 0) {
  const breakLine = function(pos, gap) {
    return `${s.substring(0, pos)}\n${wrap(s.substring(pos + gap), col)}`;
  };

  if (s.length <= col) {
    return s;
  }
  const space = s.substring(0, col).lastIndexOf(' ');
  if (space !== -1) {
    return breakLine(space, 1);
  } else if (s.charAt(col) === ' ') {
    return breakLine(col, 1);
  }
  return breakLine(col, 0);
};

module.exports = wrap;

