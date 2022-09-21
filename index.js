
// first test
//gives cutomer a free sample if ride is less than or equal to 400ft
//logs : 'This one is on me '

function scuberGreetingForFeet(value) {
  if (value <= 400) {
    return 'This one is on me!';
  } else if (value >= 400 && value <= 2000) {
    return 'That will be twenty bucks.';
  } else if (value >= 2001 && value <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else {
    return 'No can do.';
  }
}

function ternaryCheckCity(city) {
  // Write your code here!
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'
}


function switchOnCharmFromTip(amt) {
  // Write your code here!
  switch (amt) {
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'
  }
}