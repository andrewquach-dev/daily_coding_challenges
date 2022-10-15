//https://www.codewars.com/kata/571b6a4a7beb0a8ade0007a8/train/javascript

function bloodAlcoholContent(d, w, s, t) {
  return +(
    ((d.ounces * d.abv * 5.14) / w) * (s === "male" ? 0.73 : 0.66) -
    0.015 * t
  ).toFixed(4);
}
