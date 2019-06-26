# MOOC Angular + React
## Module 8
### 8.4 p2p exercise - SOLVED WITH STYLES

# 1. Movements count
I've added to the state the property "movements" to count the number of movements.
I've created a new component "Footer" to render the movement count
The app.jsx updates the counter whenever a move is don

# 2. Reset button
I added a reset button to the footer. I binded the _handling function in the constructor and it calls the parent's _handler
On App.jsx we have the final _handling function (resetClick) that updates the state to the initial value.

# 3. Winner
I've added to the state the property "winner" that is initialized with "none". Whenever one or another player makes a winner move, it's updated with the name of the winner.
To check if there's a winner I've created a function evaluateWinnerMovement() on App.jsx. This function checks the "values" after the last move. In case it finds a winner movement it returns true. Otherwise it returns false.

When a movement is done, it implements the movement on the temporary valuesCopy variable. It sends this argument to be evaluated and, in case there's a winner, updates the state with the name of the winner. On eighter case, it increases the number of movements and updates the state values with the temporary valuesCopy.

# Extra: CSS
I've added some CSS.
First, I added some static CSS to make the app look a bit better. It's wrapped in three containers with same width and appearance (round borders, centered...).
After that, I added some more CSS to be rendered depending on several conditions.
## CSS to represent turn
The green colour is assigned to "player x" and orange to "player 0". A square background changes depending on it's value.
The header changes colour depending on next player's turn, using the same colour code
## CSS to represent end of game
In case a winner is found or the maximum number of movements is reached, both header and footer turns red.
