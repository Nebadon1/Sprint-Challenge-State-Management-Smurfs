1. What problem does the context API help solve?

Allows react to have global state access via useContext Hook. Prevent or help with Props drilling. 

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

 - Actions - are methods/functions which causes the state to change
   - Reducers - They hold the initial state. The initial state always exist as well as newly updated state when actions are invoked. Helps with code simplification, DRY. 
   - Store - Is where the reducers can live and allow its functionalities to operate. In respect of Context API, Store behave as such by being global state management.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

 - Application state is the primary and global state for the app. While components depend on Application state, it may have its own state in order to perform asynchronous actions. In such, you may have to build async actions for your reducers, so the global state can change without causing the typical side-effects to break the app.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

-Redux-Thunk make possible Async actions. It changes our action-creators as we need to perform side effects such as API request and send the respective paylod to make state changes and in return make sure renderer doesn't break.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

  I like Redux better, for the simply reason that I hear a lot bad things a bout it and I took extra time to learn it better. is a bit more verbose, but comunication between parents is something i like. 