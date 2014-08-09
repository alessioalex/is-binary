"use strict";

module.exports = function(content) {
  var encoding = 'utf8';

  // Detect encoding
  for (var i = 0; i < 24; i++) {
    var charCode = content.charCodeAt(i);
    // 65533 is the unknown char
    // 8 and below are control chars (e.g. backspace, null, eof, etc)
    if (charCode === 65533 || charCode <= 8) {
      encoding = 'binary';
      break;
    }
  }

  return (encoding === 'binary');
};
