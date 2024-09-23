(function () {
  "use strict";
  document.getElementById("convert").addEventListener("submit", function (e) {
    e.preventDefault();

    var distance = document.getElementById("distance").value;
    distance = parseFloat(distance);
    let answer = document.getElementById("answer");
    if (distance) {
      let conversion = (distance * 1.689344).toFixed(3);

      answer.innerHTML = `<h2>${distance} miles converted to ${conversion} kilo metres</h2>`;
      // alert(roundedConversion);

      //display
    } else {
      answer.innerHTML = `<h2>please provide a number</h2>`;
    }
  });
})();
