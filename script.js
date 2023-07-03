function formatIPInput(input) {
  var value = input.value;
  var formattedValue = '';

  if (value.length <= 3) {
    formattedValue = value.replace(/[^0-9]/g, '');
    if (formattedValue > 255) formattedValue = '255';
  } else if (value.length <= 6) {
    var segment1 = value.replace(/[^0-9]/g, '').substring(0, 3);
    var segment2 = value.replace(/[^0-9]/g, '').substring(3);
    segment2 = Math.min(segment2, 255);
    formattedValue = segment1 + '.' + segment2;
  } else if (value.length <= 9) {
    var segment1 = value.replace(/[^0-9]/g, '').substring(0, 3);
    var segment2 = value.replace(/[^0-9]/g, '').substring(3, 6);
    var segment3 = value.replace(/[^0-9]/g, '').substring(6);
    segment2 = Math.min(segment2, 255);
    segment3 = Math.min(segment3, 255);
    formattedValue = segment1 + '.' + segment2 + '.' + segment3;
  } else if (value.length <= 12) {
    var segment1 = value.replace(/[^0-9]/g, '').substring(0, 3);
    var segment2 = value.replace(/[^0-9]/g, '').substring(3, 6);
    var segment3 = value.replace(/[^0-9]/g, '').substring(6, 9);
    var segment4 = value.replace(/[^0-9]/g, '').substring(9);
    segment2 = Math.min(segment2, 255);
    segment3 = Math.min(segment3, 255);
    segment4 = Math.min(segment4, 255);
    formattedValue = segment1 + '.' + segment2 + '.' + segment3 + '.' + segment4;
  } else {
    var segment1 = value.replace(/[^0-9]/g, '').substring(0, 3);
    var segment2 = value.replace(/[^0-9]/g, '').substring(3, 6);
    var segment3 = value.replace(/[^0-9]/g, '').substring(6, 9);
    var segment4 = value.replace(/[^0-9]/g, '').substring(9, 12);
    var segment5 = value.replace(/[^0-9]/g, '').substring(12, 14);
    segment2 = Math.min(segment2, 255);
    segment3 = Math.min(segment3, 255);
    segment4 = Math.min(segment4, 255);
    segment5 = Math.min(segment5, 32);
    formattedValue = segment1 + '.' + segment2 + '.' + segment3 + '.' + segment4 + '/' + segment5;
  }

  input.value = formattedValue;
}

document.addEventListener('DOMContentLoaded', function() {
  var ipInput = document.getElementById('ipInput');

  ipInput.addEventListener('input', function() {
    formatIPInput(ipInput);
  });
});
