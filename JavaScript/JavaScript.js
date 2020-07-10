'use strict';
var sum=0;
function q1 () {
  var name = prompt('what is your name?');
  alert('You are welcome ' + name);}
function q2() {
  var Bacholr = prompt('Do I have a Bacholr degree');
  while (Bacholr.toLocaleLowerCase() !== 'yes' && Bacholr.toLocaleLowerCase() !== 'no') {
    Bacholr = prompt('please, if I have a Bachlor degree answer with yes if I do not answer no');
  }
  if (Bacholr.toLocaleLowerCase() === 'yes') {
    alert('Nice ' + name + ', you are correct!!');
    sum++;
  }
  if (Bacholr.toLocaleLowerCase() === 'no') {
    alert('Wrong answer ' + name + ' I have one!!');
  }
  console.log('for the The Education quaistion the user answer was ' + Bacholr);
  alert('for the The Education quaistion your answer was ' + Bacholr);
}
function q3() {
  var job = prompt('Do I have a Job??');
  while (job.toLocaleLowerCase() !== 'yes' && job.toLocaleLowerCase() !== 'no') {
    job = prompt('please, if you have a job answer with yes if you do not have one answer no');
  }
  if (job.toLocaleLowerCase() === 'yes') {
    alert('True ' + name + ', I have one!!');
    sum++;
  }
  if (job.toLocaleLowerCase() === 'no') {
    alert('No I do not ' + name + ' !!');
  }
  alert('your answer for the job quaistion was ' + job);
}

function q4(){
  var like = prompt('Do I like my Job??');
  while (like.toLocaleLowerCase() !== 'yes' && like.toLocaleLowerCase() !== 'no') {
    like = prompt('please, if you like your job answer with yes if you do not answer whith no');
  }
  if (like.toLocaleLowerCase() === 'yes') {
    alert('yes ' + name+ 'I like my Job');
    sum++;
  }
  if (like.toLocaleLowerCase() === 'no') {
    alert('No ' + name + ' I like it !!');
  }
  alert('your answer for liking my job was ' + like);
}
function q5 (){
  var live = prompt('Do I live in Jordan??');
  while (live.toLocaleLowerCase() !== 'yes' && live.toLocaleLowerCase() !== 'no') {
    live = prompt('please, if you live in Jordan answer with yes if you do not answer whith no');
  }
  if (live.toLocaleLowerCase() === 'yes') {
    alert('Yes, ' + name + ', Jordan is a Great country');
    sum++;
  }
  if (live.toLocaleLowerCase() === 'no') {
    alert('No I live Jordan ' + name + '!!, It is a great country');
  }
  alert('your answer for living in Jordan was ' + live);
}
function q6 (){

  var ball = prompt('Do I wach football??');
  while (ball.toLocaleLowerCase() !== 'yes' && ball.toLocaleLowerCase() !== 'no') {
    ball = prompt('please, if you wach football answer with yes if you do not answer whith no');
  }
  if (ball.toLocaleLowerCase() === 'yes') {
    alert('Yes ' + name+' I like football' );
    sum++;

  }
  if (ball.toLocaleLowerCase() === 'no') {
    alert('No!! I watch football' + name);
  }
  console.log('The answer for watching football was ' + ball);
  alert('your answer for watching football quastion was ' + ball);
}

function q7 (){
  var correct=0;
  for (var i = 0; i < 4; i++) {
    var rank = prompt('what is Liverpool team ranked globally ??');
    if (rank < 6 ) {
      alert('Too high rank, they are not that good!! Guess a lower rank, let us try again!! ');
    }
    if (rank > 6 ) {
      alert('Too low rank, they are not that bad!! Guess a heighr rank, let us try again!! ');
    }
    if (rank === 6) {
      alert('You are right, let us check the ranks for some football clubs togather !!');
      sum++;
      correct++;
      break;
    }
  }
  if (correct !==1){
    alert ( 'you have finished your attempts and the true answer is 6');
  }
}
function q8 (){

  var sponsarray = ['Jeep', 'KIA', 'Ford', 'Mitsubeshi', 'Toyota','Audi'];
  for (var y = 0; y < 6; y++) {
    var spons = prompt('What is the official sponsor of Juventus club (Please choose one of those brands ' + sponsarray + ' )');
    if (spons.toLocaleLowerCase() === sponsarray[0].toLocaleLowerCase() || spons.toLocaleLowerCase() === sponsarray[1].toLocaleLowerCase()) {
      alert('Jeep or Kia are both correct');
      sum++;
      break;
    }
    if (spons.toLocaleLowerCase() !== sponsarray[0].toLocaleLowerCase() || spons.toLocaleLowerCase() !== sponsarray[1].toLocaleLowerCase()) {
      alert('No it is not ' + spons);
    }
  }
  if (spons.toLocaleLowerCase() !== sponsarray[0].toLocaleLowerCase() || spons.toLocaleLowerCase() !== sponsarray[1].toLocaleLowerCase()) {
    alert('The right answer was '+sponsarray[0]+ ' and '+sponsarray[1]);

  }
}
q1();
q2();
q3();
q4();
q5();
q6();
q7();
q8();
alert('Your score is ' + sum);
