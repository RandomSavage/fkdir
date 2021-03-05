speaks = [
  {
    "name": "Alex",
    "lang": "en-US"
  },
  {
    "name": "Alice",
    "lang": "it-IT"
  },
  {
    "name": "Alva",
    "lang": "sv-SE"
  },
  {
    "name": "Amelie",
    "lang": "fr-CA"
  },
  {
    "name": "Anna",
    "lang": "de-DE"
  },
  {
    "name": "Carmit",
    "lang": "he-IL"
  },
  {
    "name": "Damayanti",
    "lang": "id-ID"
  },
  {
    "name": "Daniel",
    "lang": "en-GB"
  },
  {
    "name": "Diego",
    "lang": "es-AR"
  },
  {
    "name": "Ellen",
    "lang": "nl-BE"
  },
  {
    "name": "Fiona",
    "lang": "en"
  },
  {
    "name": "Fred",
    "lang": "en-US"
  },
  {
    "name": "Ioana",
    "lang": "ro-RO"
  },
  {
    "name": "Joana",
    "lang": "pt-PT"
  },
  {
    "name": "Jorge",
    "lang": "es-ES"
  },
  {
    "name": "Juan",
    "lang": "es-MX"
  },
  {
    "name": "Kanya",
    "lang": "th-TH"
  },
  {
    "name": "Karen",
    "lang": "en-AU"
  },
  {
    "name": "Kyoko",
    "lang": "ja-JP"
  },
  {
    "name": "Laura",
    "lang": "sk-SK"
  },
  {
    "name": "Lekha",
    "lang": "hi-IN"
  },
  {
    "name": "Luca",
    "lang": "it-IT"
  },
  {
    "name": "Luciana",
    "lang": "pt-BR"
  },
  {
    "name": "Maged",
    "lang": "ar-SA"
  },
  {
    "name": "Mariska",
    "lang": "hu-HU"
  },
  {
    "name": "Mei-Jia",
    "lang": "zh-TW"
  },
  {
    "name": "Melina",
    "lang": "el-GR"
  },
  {
    "name": "Milena",
    "lang": "ru-RU"
  },
  {
    "name": "Moira",
    "lang": "en-IE"
  },
  {
    "name": "Monica",
    "lang": "es-ES"
  },
  {
    "name": "Nora",
    "lang": "nb-NO"
  },
  {
    "name": "Paulina",
    "lang": "es-MX"
  },
  {
    "name": "Samantha",
    "lang": "en-US"
  },
  {
    "name": "Sara",
    "lang": "da-DK"
  },
  {
    "name": "Satu",
    "lang": "fi-FI"
  },
  {
    "name": "Sin-ji",
    "lang": "zh-HK"
  },
  {
    "name": "Tessa",
    "lang": "en-ZA"
  },
  {
    "name": "Thomas",
    "lang": "fr-FR"
  },
  {
    "name": "Ting-Ting",
    "lang": "zh-CN"
  },
  {
    "name": "Veena",
    "lang": "en-IN"
  },
  {
    "name": "Victoria",
    "lang": "en-US"
  },
  {
    "name": "Xander",
    "lang": "nl-NL"
  },
  {
    "name": "Yelda",
    "lang": "tr-TR"
  },
  {
    "name": "Yuna",
    "lang": "ko-KR"
  },
  {
    "name": "Yuri",
    "lang": "ru-RU"
  },
  {
    "name": "Zosia",
    "lang": "pl-PL"
  },
  {
    "name": "Zuzana",
    "lang": "cs-CZ"
  }
];

let tape;
let speaker = document.querySelector('#speaker');




const msg = new SpeechSynthesisUtterance();
msg.volume = 1; // 0 to 1
msg.rate = 1; // 0.1 to 10
msg.pitch = 2; // 0 to 2
// msg.text  = tape;


const voice = speaks[16]; //47
console.log(`Voice: ${voice.name} and Lang: ${voice.lang}`);
msg.voiceURI = voice.name;
msg.lang = voice.lang;
console.log(voice.name);

let voiceTrigger = document.getElementById('voiceTrigger');
voiceTrigger.addEventListener('click', () => {
  speechSynthesis.speak(msg);
})

fetchText()
.then(response => {
  console.log('Success!');
})
.catch(error => {
  console.log('error!');
  console.error(error);
})


async function fetchText() {
  let response = await fetch('voiceBox.txt');
  let data = await response.text();
  speaker.innerHTML = data;
  msg.text = data;
  console.log(data);
}