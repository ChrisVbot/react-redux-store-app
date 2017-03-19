What is Redux? 

-"Predictable state container for JavaScript apps."
-In other words, it's a way to control application 
data-flow
-Redux maintains the state in an immutable object
called the state tree. When there's change, a new
object is returned.
-NOT a part of React. There are bindings available
for other frameworks like Angular, Vue.js, Meteor

Three Principles of Redux:

1) The state is the single source of truth

	-Whole state of the app will be represented as
	a single(!!!) JavaScript object
	-This is called the state tree 
	-The single state tree makes debugging easier
	and development faster

2) State is read only

	-Views will never directly write to the state - 
	instead, they express intent to transform the state
	-Only way to change the state is to emit an action
	-Actions are plain JavaScript objects
	-All changes are centralized and can happen in a 
	strict order

3) Changes are made with pure functions

	-Reducers are used to specify how the state tree
	is transformed by actions
	-Reducers are pure functions that take the previous
	state and action, and return the next state. In other
	words, when something changes, a new object is returned








