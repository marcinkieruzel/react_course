# Hooks #

1. There is a component in `pages/usestate` file. Use the state to add color to button styles and then add button event. Event suppose to change color of the button to random.
2. There is a small set of questions in the component (`pages/useeffect`). Reset the info of correct/wrong answer each time the user goes to next question. Add your own state with that would count correct and wrong answers.
3. In `pages/useref` file we have a tiny component. Create a small animation of red div. Move it to the right (300px) and to the bottom (300px). Change the color of the div to blue. Use jQuery animate function to do that (https://api.jquery.com/animate/). Of course you'll need reference as well.
4. In `pages/usememo` file we have a component with two funcionalities. This changes the color of the element and counts factorial of given number. Factorial is an expensive computation. Make sure we calculate it only when needed (only when input value changes).
5. Take a look at `pages/callback`. There is a small performance problem right here. Callback function is recreated and run on each second. Try to prevent that. 
6. Examine the code in `pages/usereducer`. Try to prevent errors in the equations. Add typescript to the example.
7. In `pages/forwardref` use button at parent to focus the input on children.
