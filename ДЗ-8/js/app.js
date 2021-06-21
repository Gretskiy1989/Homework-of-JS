let year = prompt('В каком году Вы родились?');
let age;
let city;
let sport;
let refusedToInsert = 'Жаль, что Вы не захотели ввести свой ';
let likeChampion = 'Круто! Хочешь стать, как ';

switch(year) {
  case null:
    age = refusedToInsert + 'год рождения';
    alert(age);
    break;
  default:
    if (!isFinite(year)) {
      age = refusedToInsert + 'год рождения';
      alert(age);
    } else {
      age = 2021 - year;
      city = prompt('В каком городе Вы живете?', '');
}
    
switch(city) {
  case null:
    city = refusedToInsert + 'город';
    alert(city);
    break;
    case 'Киев':
      city = 'Ты живешь в столице Украины';
      break;
    case "Москва":
      city = 'Ты живешь в столице России';
      break;
    case "Минск":
      city = 'Ты живешь в столице Беларуси';
      break;
      default:
    city = 'Ты живешь в городе ' + city;
}
    
sport = prompt('Какой Ваш любимый вид спорта?', '')
  switch(sport) {
    case null:
      sport = refusedToInsert + 'любимый вид спорта';
      alert(sport);
      break;
    case 'футбол':
      sport = likeChampion + 'Криштиану Роналду?';
      break;
    case 'бокс':
      sport = likeChampion + 'Майк Тайсон?';
      break;
    case 'формула 1':
      sport = likeChampion + 'Михаэль Шумахер?';
      break;
      default:
      sport = 'Твой любимый вид спорта ' + sport;
    }
  alert('Тебе ' + age + ' лет' + '\n' + city + '\n' + sport);
}
