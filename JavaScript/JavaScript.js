'use strict';
var sum=0;
function q1 () {
  var name = prompt('what is your name?');
  console.log('You are welcome ' + name);
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
  console.log('user score is '+ sum);
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
  console.log('for the job quaistion was the user answer was ' + job);
  alert('your answer for the job quaistion was ' + job);
  console.log('user score is '+ sum);
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
  console.log('The answer for liking my job was ' + like);
  alert('your answer for liking my job was ' + like);
  console.log('user score is '+ sum);
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
  console.log('the answer for living in Jordan quastion was ' + live);
  alert('your answer for living in Jordan was ' + live);
  console.log('user score is '+ sum);
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
  console.log('user score is '+ sum);
}

function q7 (){

  for (var i = 0; i < 4; i++) {
    var rank = prompt('what is Liverpool team ranked globally ??');
    console.log('the user guess number was' + rank);

    if (rank < 6) {
      alert('Too high rank, they are not that good!! Guess a lower rank, let us try again!! ');
      console.log('High rank answer');
    }
    else if (rank > 6) {
      alert('Too low rank, they are not that bad!! Guess a heighr rank, let us try again!! ');
      console.log('Low rank answer');
    }
    else if (rank === 6) {
      alert('You are right, let us check the ranks for some football clubs togather !!');
      console.log('Correct answer');
      sum++;
      break;
    }
    if (i === 4) {
      alert('There rank is 6th on the world');
    }
  }
  console.log('user score is '+ sum);
}
function q8 (){

  var sponsarray = ['Jeep', 'KIA', 'Ford', 'Mitsubeshi', 'Toyota','Audi'];
  for (var y = 0; y < 6; y++) {
    var spons = prompt('What is the official sponsor of Juventus club (Please choose one of those brands ' + sponsarray + ' )');
    if (spons.toLocaleLowerCase() === sponsarray[0].toLocaleLowerCase() || spons.toLocaleLowerCase() === sponsarray[1].toLocaleLowerCase()) {
      alert('Jeep or Kia are both correct');
      console.log('the user answer was '+spons+' and it was corrent !!');
      sum++;
      break;
    }
    if (spons.toLocaleLowerCase() !== sponsarray[0].toLocaleLowerCase() || spons.toLocaleLowerCase() !== sponsarray[1].toLocaleLowerCase()) {
      console.log('the user answer was '+spons+' and it was wrong !!');
      alert('No it is not ' + spons);
    }
  }
  if (spons.toLocaleLowerCase() !== sponsarray[0].toLocaleLowerCase() || spons.toLocaleLowerCase() !== sponsarray[1].toLocaleLowerCase()) {
    console.log('the user did not choose the right asnwer so I have to inform him with it');
    alert('The right answer was '+sponsarray[0]+ ' and '+sponsarray[1]);

  }
  console.log('user score is '+ sum);
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
