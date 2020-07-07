# Class03

# New Feature

I added new type of questions to the guessing game.

Now You have a 6th and 7th Question.

**6th Question**
This question accepts a numeric input and the user have 4 attemps to guess the right answer.

see the code

```javascript
for (var i = 0; i < 4; i++) {
    var rank = prompt("what is Liverpool team ranked globally ??");
    console.log('the user guess number was' + rank)

    if (rank < 6) {
        alert('Too high rank, they are not that good!! Guess a lower rank, let us try again!! ')
        console.log('High rank answer')
    }
    else if (rank > 6) {
        alert('Too low rank, they are not that bad!! Guess a heighr rank, let us try again!! ')
        console.log('Low rank answer')
    }
    else if (rank == 6) {
        alert('You are right, let us check the ranks for some football clubs togather !!')
        console.log('Correct answer')
        sum++
        break;
    }
    if (i == 4) {
        alert('There rank is 6th on the world')
    }
}
console.log("user score is "+ sum)
```


**7th Question**
This question is about guessing a the correct answer from a multiple correct answers and the user have 6 attemps to get the correct answer and inform the user with his score in guessing game.

```javascript
var sponsarray = ["Jeep", "KIA", "Ford", "Mitsubeshi", "Toyota","Audi"];
for (var y = 0; y < 6; y++) {
    var spons = prompt('What is the official sponsor of Juventus club (Please choose one of those brands ' + sponsarray + ' )')
    if (spons.toLocaleLowerCase() === sponsarray[0].toLocaleLowerCase() || spons.toLocaleLowerCase() === sponsarray[1].toLocaleLowerCase()) {
        alert("Jeep or Kia are both correct")
        console.log('the user answer was '+spons+' and it was corrent !!')
        sum++
        break;
    }
    if (spons.toLocaleLowerCase() !== sponsarray[0].toLocaleLowerCase() || spons.toLocaleLowerCase() !== sponsarray[1].toLocaleLowerCase()) {
        console.log("the user answer was "+spons+" and it was wrong !!")
        alert("No it is not " + spons)
    }
}
if (spons.toLocaleLowerCase() !== sponsarray[0].toLocaleLowerCase() || spons.toLocaleLowerCase() !== sponsarray[1].toLocaleLowerCase()) {
    console.log('the user did not choose the right asnwer so I have to inform him with it')
    alert("The right answer was "+sponsarray[0]+ " and "+sponsarray[1])

}
console.log("user score is "+ sum)
alert("Your score is " + sum)
```


