'use strict';

let telephoneBook = {
  'William A. Lathan': '405-709-1865',
  'John K. Miller': '402-247-8568',
  'Hortensia E. Foster': '606-481-6467',
  'Amanda D. Newland': '319-243-5613',
  'Brooke P. Askew': '307-687-2982',
};

//John K. Miller
console.log(telephoneBook['John K. Miller']);

//307-687-2982
console.log(`${telephoneBook['307-687-2982']}`);

//Chris E. Myers - boolean
if (telephoneBook['Chris E. Myers'] === undefined) {
  console.log('404 number not found.');
} else {
  console.log('Yep, we have his number.');
}
