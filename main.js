const hours = [ 6, 9, 7, 8, 6, 6, 8, 5, 9, 8, 7, 6, 7, 7, 8, 6, 9 ]
const grumpyHours = []
const happyHours = []


for (const hour of hours) {
    if(hour <= 6) {
        grumpyHours.push(hour)
    }
else {
        happyHours.push(hour)
    }
}

const grumpyDays = grumpyHours.length
const happyDays = happyHours.length

console.log(`I was grumpy on ${grumpyDays} days. I was happy on ${happyDays} days`)

//answer

/*
I was grumpy on 6 days.
I was happy on 11 days.
*/