1.//Create your own resume data in JSON Format
let data={
    "name": "Lingaarasu",
    "email": "lingaarasubca2020@gmail.com",
    "phone": "7358496088",
    "address": "Royapuram, Chennai",
    "summary": "Ambitious and adaptable graduate with a Bachelor's degree in [BCA]. Possessing strong interpersonal skills and a passion for [Industry], I am eager to kickstart my career and contribute positively to a forward-thinking organization.",
    "education": [
      {
        "degree": "BCA",
        "institution": "Madras University",
        "year": "2023",
        "location": "Chennai"
      }
    ],

    "skills": [
      "Natural Language Processing",
      "Text Generation",
      "Deep Learning"
    ],
    "languages": [
      "JavaScript",
      "Python",
      "Java"
    ],
    "Hobbies":[
        "community involvement, writing, blogging, learning languages, photography, traveling, doing sports, reading, and art."
    ],
    "certifications": [
      "certified in Fullstack Devlopement"
    ],
    "linkedin": "https://www.linkedin.com/in/",
    "github": "https://github.com/Lingesh-Lingaarasu"
  }
  
  //2.For the above JSON, iterate over all for loops(for,for in, for of, foreach
  //For
  for(let i=1; i<=10; i++){
    console.log(i);
}

//For in loop
var array = [1, 2, 3, 4, 5];
 
for (var element of array) {
  console.log(element);
}

//For of
var array = [1, 2, 3, 4, 5];
 
for (var item of array) {
  console.log(item);
}

//For Each
function func() {
 
  var items = [12, 24, 36];
  var copy = [];
  items.forEach(function (item) {
    copy.push(item + item + 2);
  });
  console.log(copy);
}
func();
  