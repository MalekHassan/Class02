'use strict'
var name = prompt('what is your name?')
console.log('You are welcome ' + name)
alert('You are welcome ' + name)
var Bacholr = prompt('Do you have a Bacholr degree')
while (Bacholr.toLocaleLowerCase() !== "yes" && Bacholr.toLocaleLowerCase() !== "no") {
    Bacholr = prompt("please, you have a Bachlor degree answer with yes if you do not answer no")
}
if (Bacholr.toLocaleLowerCase() == "yes") {
    alert('Nice ' + name + ', Me too!!')
}
if (Bacholr.toLocaleLowerCase() == 'no') {
    alert('I advise you ' + name + ' to get one you will gain a good expereince')
}
console.log('for the The Education quaistion your answer was ' + Bacholr)
alert('for the The Education quaistion your answer was ' + Bacholr)

var job = prompt('Do you have a Job??')
while (job.toLocaleLowerCase() !== "yes" && job.toLocaleLowerCase() !== "no") {
    job = prompt("please, if you have a job answer with yes if you do not have one answer no")
}
if (job.toLocaleLowerCase() == "yes") {
    alert('Nice ' + name + ', Keep it up and work hard!!')
}
if (job.toLocaleLowerCase() == 'no') {
    alert('Search for one ' + name + ' !!')
}
console.log("your answer for the job quaistion was " + job)
alert('your answer for the job quaistion was ' + job)

var like = prompt('Do like your Job??')
while (like.toLocaleLowerCase() !== "yes" && like.toLocaleLowerCase() !== "no") {
    like = prompt("please, if you like your job answer with yes if you do not answer whith no")
}
if (like.toLocaleLowerCase() == "yes") {
    alert('Nice!! ' + name)
}
if (like.toLocaleLowerCase() == 'no') {
    alert('No one does' + name + ' !!')
}
console.log('your answer for liking your job was ' + like)
alert('your answer for liking your job was ' + like)

var live = prompt('Do you live in Jordan??')
while (live.toLocaleLowerCase() !== "yes" && live.toLocaleLowerCase() !== "no") {
    live = prompt("please, if you live in Jordan answer with yes if you do not answer whith no")
}
if (live.toLocaleLowerCase() == "yes") {
    alert('Nice!!, ' + name + ', Jordan is a Great country')
}
if (live.toLocaleLowerCase() == 'no') {
    alert('You should visit Jordan ' + name + '!!, It is a great country')
}
console.log('your answer for living in Jordan was ' + live)
alert('your answer for living in Jordan was ' + live)
