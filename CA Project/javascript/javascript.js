const imageArray = ["https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjW45a3nPn7AhWOZ8AKHc87AuYQqa4BegQIGRAA&url=https%3A%2F%2Fwww.facebook.com%2Finstaladies%2F&usg=AOvVaw1lJQARZsa3CpXKp2l8MTlY",
  "https://www.google.com/imgres?imgurl=https%3A%2F%2Fs3.eu-west-1.amazonaws.com%2Ftheclubapp-photos-production%2Fclubs%2Flogos%2F000%2F002%2F687%2Fthumb%2Fnckuaan1_400x400.jpg%3F1592990430&imgrefurl=https%3A%2F%2Floretohockeyclub.clubzap.com%2F&tbnid=eTT82DgsT7jzeM&vet=12ahUKEwij5pbJnPn7AhU6TEEAHaDaCWEQMygKegUIARDSAQ..i&docid=FKC6dpj1b-tYyM&w=186&h=186&q=loreto%20hockey%20club&ved=2ahUKEwij5pbJnPn7AhU6TEEAHaDaCWEQMygKegUIARDSAQ",
  "https://www.google.com/search?sxsrf=ALiCzsZQ5SLdkkNDnKQBWnBf5Xr8kZV7bQ:1671024890085&q=UCD+Ladies%27+Hockey+Club&si=AC1wQDApU_L7mEr08NL2tyPAiwbkKXiOQMzKp1cMwbGxhXrbjMAbDKsa6tg337UoyWN4MhHbBcnlN5uTB9iDb33xq-l8ld-lvp0hH33zFDZbMSdS9ZV_iI8HDoFfF2DYhanLORK-5lXuOo0_kMFdq8U9JtCXQKIYMQHFV-CVcOKAEjAljfJ4nNEL5Ngg7MBbyrpR6G8V5nZw&sa=X&ved=2ahUKEwiyz-_nnPn7AhUjQUEAHdyoBPwQ6RN6BAg_EAE",
  "https://www.google.com/imgres?imgurl=http%3A%2F%2Foldalexhc.ie%2Fwp-content%2Fuploads%2F2015%2F08%2Fcropped-13757_909482762430553_2949816610866820182_n-copy-copy3-1.jpg&imgrefurl=http%3A%2F%2Foldalexhc.ie%2F&tbnid=QxN9XSqG6lj_kM&vet=12ahUKEwjcoOb2nPn7AhURTUEAHX1gBFoQMygFegUIARDAAQ..i&docid=zEPTaUDHIR5_8M&w=512&h=512&q=old%20alex%20hockey&ved=2ahUKEwjcoOb2nPn7AhURTUEAHX1gBFoQMygFegUIARDAAQ",
  "https://www.google.com/imgres?imgurl=https%3A%2F%2Fpembrokewanderers.ie%2Fwp-content%2Fuploads%2FPWHC-logo-512.png&imgrefurl=https%3A%2F%2Fpembrokewanderers.ie%2F&tbnid=DcksCV2qUzwuVM&vet=12ahUKEwjPhPSInfn7AhW_SEEAHTJODZQQMygAegUIARDNAQ..i&docid=LNTiPlcIbGX0hM&w=512&h=512&q=pembroke%20hockey&ved=2ahUKEwjPhPSInfn7AhW_SEEAHTJODZQQMygAegUIARDNAQ",
  "https://www.google.com/search?q=pegasus+hockey+club&sxsrf=ALiCzsZY4H6sW6lwAHf9kJ4c1jFm0M0hsg:1671024994444&tbm=isch&source=iu&ictx=1&vet=1&fir=eDkyX7QNX_yglM%252CoKNJJ0DfRfjtoM%252C%252Fm%252F0276q38%253BItFRs5Sg7aQLZM%252CeO6X8sZrqpCC5M%252C_%253BjCdj8isNS0yOlM%252ClHtFOahxwC64HM%252C_%253BYJzMypiB49jWDM%252C3FUEY1xp68RumM%252C_%253BcCUNvwn50KSlxM%252ClHtFOahxwC64HM%252C_%253Bd7JVaVJO7iyfuM%252C7Gm2Qv0YzVlraM%252C_%253BoDpQtnhv99N-MM%252CjUxeligIl49tXM%252C_&usg=AI4_-kRRFIDqjEUKbcSRbY50OEN1A87wEg&sa=X&ved=2ahUKEwjkotGZnfn7AhVOT8AKHcZVAl0Q_B16BAhVEAE&biw=1280&bih=601&dpr=1.5#imgrc=eDkyX7QNX_yglM",
  "https://www.google.com/search?q=monkstown+hockey+club&sxsrf=ALiCzsZ1MvRhGlpDYRlgfv18KvoKA3mjvw:1671025011293&tbm=isch&source=iu&ictx=1&vet=1&fir=pFf0PU2EzuPSDM%252CiODCX3QqAUA-1M%252C%252Fm%252F0tkjzny&usg=AI4_-kQy8P8bzf_dsrS0c2B0J9y2OxuEAA&sa=X&ved=2ahUKEwi90tWhnfn7AhWTQUEAHTLAD0MQ_B16BAhIEAI&biw=1280&bih=601&dpr=1.5#imgrc=pFf0PU2EzuPSDM",
  "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjQvb6onfn7AhWIZMAKHSmZDl4Qqa4BegQIFRAA&url=https%3A%2F%2Fwww.pitchero.com%2Fclubs%2Frailwayunionhockeyclub&usg=AOvVaw0h_5_aPFcWp5JgBeJasuYx",
  "https://www.google.com/imgres?imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D100057072326690&imgrefurl=https%3A%2F%2Fwww.facebook.com%2FArdsHockey%2F&tbnid=XOvuS_W1tLHypM&vet=12ahUKEwj75feznfn7AhXCEsAKHQNxDHAQMygAegUIARCgAQ..i&docid=smzhW3gsvuSU_M&w=1080&h=1091&q=ards%20hockey%20club%20website&ved=2ahUKEwj75feznfn7AhXCEsAKHQNxDHAQMygAegUIARCgAQ",
  "https://www.facebook.com/photo/?fbid=814387796387532&set=a.814387769720868&__tn__=%3C"];

const image = document.querySelector("img");
const button = document.querySelector("button");

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array) {
  let randomNum = Math.floor(Math.random() * array.length);
  image.setAttribute("src", array[randomNum]);
}

const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const textArray = ["Web Developer", "Web Designer", "Tutor", "Learner..."];

let textArrayIndex = 0;
let charIndex = 0;

const erase = () => {
  if (charIndex > 0) {
    cursor.classList.remove('blink');
    typedText.textContent = textArray[textArrayIndex].slice(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 80);
  } else {
    cursor.classList.add('blink');
    textArrayIndex++;
    if (textArrayIndex > textArray.length - 1) {
      textArrayIndex = 0;
    }
    setTimeout(type, 1000);
  }
}

const type = () => {
  if (charIndex <= textArray[textArrayIndex].length - 1) {
    cursor.classList.remove('blink');
    typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 120);
  } else {
    cursor.classList.add('blink');
    setTimeout(erase, 1000);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();
})

linePage();
cycleText();

function linePage() {

  var splitMe = $('.sentence');

  splitMe.each(function (index) {

    var text = $(this).html();
    var output = '';

    //split all letters into spans
    for (var i = 0, len = text.length; i < len; i++) {

      output += '<span data-index="' + i + '">' + text[i] + '</span>';

    }

    //put it in the html
    $(this).html(output);

    //check the offset of each letter to figure out where the line breaks
    var prev = 0;
    var parts = [];
    $(this).find('span').each(function (i) {
      if ($(this).offset().top > prev) {
        parts.push(i);
        prev = $(this).offset().top;
      }
    })

    parts.push(text.length);

    //create final 
    var finalOutput = ''

    parts.forEach(function (endPoint, i) {
      if (endPoint > 0) {
        finalOutput += '<span data-line="' + i + '" class="line-wrap"><span class="line-inner">' + text.substring(parts[i - 1], parts[i]) + '</span></span>';
      }
    })

    $(this).html(finalOutput);
    $(this).addClass("lined");

  })

}

$(document).ready(function () {
  $(".pull-me").click(function () {
    $(".panel").slideToggle("slow")
  });

});

function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

function validateForm() {
  let x = document.forms["myForm"]["lname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

function validateForm() {
  let x = document.forms["myForm"]["subject"].value;
  if (x == "") {
    alert("Field must be filled out");
    return false;
  }
}

var typeWriterElement = document.getElementById('typewriter');

var textarray = ["Welcome to Our Website"];
function delWriter(text, i, cb) {
  if (i >= 0) {
    typeWriterElement.innerHTML = text.substring(0, i--);
    var rndBack = 10 + Math.random() * 100;
    setTimeout(function () {
      delWriter(text, i, cb);
    }, rndBack);
  } else if (typeof cb == 'function') {
    setTimeout(cb, 1000);
  }
};

function typeWriter(text, i, cb) {
  if (i < text.length + 1) {
    typeWriterElement.innerHTML = text.substring(0, i++);
    var rndTyping = 250 - Math.random() * 100;
    setTimeout(function () {
      typeWriter(text, i++, cb)
    }, rndTyping);
  } else if (i === text.length + 1) {
    setTimeout(function () {
      delWriter(text, i, cb)
    }, 1000);
  }
};

function StartWriter(i) {
  if (typeof textArray[i] == "undefined") {
    setTimeout(function () {
      StartWriter(0)
    }, 1000);
  } else if (i < textArray[i].length + 1) {
    typeWriter(textArray[i], 0, function () {
      StartWriter(i + 1);
    });
  }
};
// wait one second then start the typewriter
setTimeout(function () {
  StartWriter(0);
}, 1000);
