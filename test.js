const findDuplicates = (arr) => {
  let sorted = arr.slice().sort();
  let results = [];
  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i + 1] == sorted[i]) {
      results.push(sorted[i]);
    }
  }
  return results;
};

let duplikasiAngka = [5, 7, 7, 9, 10, 4, 5, 10, 6, 5];

//   let output = findDuplicates(duplikasiAngka).filter(x => x === 2)

//   let a = output.filter(x => x === 2).length

console.log(
  `duplikasi angka  ${duplikasiAngka} adalah ${findDuplicates(duplikasiAngka)}`
);

//   console.log([output]);

var CheckSpecialCaracter = "Saat meng*ecat tembok, Agung dib_antu oleh Raihan";
var allFoundSpecialCharacters = CheckSpecialCaracter.match(
  /[@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g
);
console.log(allFoundSpecialCharacters.length);
