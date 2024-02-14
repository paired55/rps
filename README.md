# RPS

## A game of Rock, Paper, Scissors made in Javascript

The computer's input gets generated randomly at the start of each round using this function:

```javascript
function generateNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
```

And the result gets compared to the player's input -- first to 5 rounds wins!
