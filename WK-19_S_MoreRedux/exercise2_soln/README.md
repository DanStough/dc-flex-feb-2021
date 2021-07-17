# Overview

In each subfolder you'll find a simple Redux application, each with a fully implemented render method. You might find these render methods familiar; they're the same examples from your prior rendering exercises. You'll be writing the Redux data-layer for each of these examples. 

As you write your reducers, keep this in mind: Redux requires you to write a pure reducer. That means your reducers can't mutate the state object that gets passed in!

## Bad Reducer

```js
const initialState = { value: 0 };

const reducer = (state = initialState, action) => {
    const { type } = action;
    if (type === "INCREMENT") {
        state.value++;
        return state;
    }
    return state;
}
```

## Good Reducer

```js
const initialState = { value: 0 };

const reducer = (state = initialState, action) => {
    const { type } = action;
    if (type === "INCREMENT") {
        return {
            value: state.value + 1
        };
    }
    return state;
}
```
