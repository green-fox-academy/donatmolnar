'use strict';

function numberConverter(input) {
let singles = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
let teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
let tenners = ['0', 'ten', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

// 1 234 567 - one MILLION two HUNDRED AND thirty-four THOUSAND five HUNDRED AND sixty-seven.

output = singles[input];

return output;
}

module.exports = numberConverter;