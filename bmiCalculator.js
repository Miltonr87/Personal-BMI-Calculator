function verify() {
  const data = new Date();
  const birth = data.getFullYear(); // 4 digits
  const year = document.getElementById("birth"); // Year provided by user
  const res = document.querySelector("div#res"); // Result of All Operations

  const weight = document.getElementById("weight");
  const height = document.getElementById("height");

  if (year.value.length == 0 || Number(year.value) > birth) {
    window.alert("[ERR] Check the data and try again!");
  } else {
    let sex = document.getElementsByName("radsex");
    let age = birth - Number(year.value);
    let gender = "";
    const img = document.createElement("img");
    img.setAttribute("id", "photo");

    if (sex[0].checked) {
      // Male checked
      gender = "Male";
      if (age >= 0 && age <= 15) {
        // child
        img.setAttribute("src", "./images/boy.png");
      } else if (age < 34) {
        // young
        img.setAttribute("src", "./images/youngMan.png");
      } else if (age < 50) {
        // adult
        img.setAttribute("src", "./images/man.png");
      } else {
        // old
        img.setAttribute("src", "./images/oldMan.png");
      }
    } else if (sex[1].checked) {
      // Female checked
      gender = "Female";
      if (age >= 0 && age <= 15) {
        // child
        img.setAttribute("src", "./images/girl.png");
      } else if (age < 34) {
        // young
        img.setAttribute("src", "./images/youngWoman.png");
      } else if (age < 50) {
        // adult
        img.setAttribute("src", "./images/woman.png");
      } else {
        // old
        img.setAttribute("src", "./images/oldWoman.png");
      }
    }

    // BMI Caculator (Brazilian Reference)
    const w1 = Number.parseInt(weight.value); // Weight from user turned into a number
    const h2 = Number.parseFloat(height.value); // Height from user turned into a number

    const result = w1 / (h2 * h2); // BMI calculation with result

    if (result == 0) {
      window.alert("[ERR] Check the data and try again!");
    }
    if (result < 17) {
      /* var para = document.createElement("P"); */
      var t = document.createTextNode("VERY UNDERWEIGHT");
    }
    if (result >= 17) {
      var t = document.createTextNode("UNDERWEIGHT");
    }
    if (result >= 18.5) {
      var t = document.createTextNode("NORMAL WEIGHT");
    }
    if (result >= 25) {
      var t = document.createTextNode("OVERWEIGHT");
    }
    if (result >= 30) {
      var t = document.createTextNode("OBESITY I");
    }
    if (result >= 35) {
      var t = document.createTextNode("OBESITY II (SEVERE)");
    }
    if (result >= 40) {
      var t = document.createTextNode("OBESITY III (MORBIDY)");
    }

    res2.innerHTML = `BMI detected <strong> ${result.toFixed(
      2
    )} </strong> for <strong> ${age} </strong> years old: `;
    res.appendChild(img);
    res3.appendChild(t);
  }
}
