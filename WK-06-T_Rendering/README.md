# Render Functions

![https://media.giphy.com/media/3hetVnNSl0IBa/giphy.gif](https://media.giphy.com/media/3hetVnNSl0IBa/giphy.gif)

Rendering is all about printing to the screen.

### Agenda

1. Questions & Review: Event Handlers and Form Data
2. Demo: Render Functions and Form Data
    1. Splunkin Donuts Ordering Redux
3. Rendering Exercises: [https://github.com/adamszaruga/rendering](https://github.com/adamszaruga/rendering)
4. ~~Discuss Homework - Building a Todo List Ap~~p  - **MOVED TO THURSDAY**

### Other Business

---

### Announcements

1. April 3rd is a class holiday ← **That's Saturday**

---

### Class Notes

1. Solution to the first exercise (RenderRectangle):

    ```jsx
    function renderRectangle(rectangle) {
        return `
            <div style=“width: ${rectangle.width}px;height: ${rectangle.height}px; background-color: ${rectangle.color}“>
            </div>
        `
    }
    ```

2. Other Hints:
    1. Centering horizontally: 

    ```css
    <selector> {
    	width: x px;
      margin: auto;
    }
    ```

3. The solutions are in the `solutions` [branch](https://github.com/adamszaruga/rendering/tree/solutions).

---

### References

1. [DOM 101](https://learn.digitalcrafts.com/flex/lessons/handling-user-input/dom-101/) in the Learning Portal
2. [Handling Browser Events](https://learn.digitalcrafts.com/flex/lessons/handling-user-input/handling-browser-events/) in the Learning Portal
3. [~~Form Data in JavaScript~~](https://www.valentinog.com/blog/form-data/)

---

### Homework

1. **~~TODO List App~~**

    ~~Your job is to make a todo list add with the following features:~~

    - ~~Form input that accepts a task name, category (see the model) and checkbox~~
    - ~~A render function that takes the list of tasks and outputs a list~~
    - ~~Styling is optional (we'll be learning about better styling techniques on Thursday)~~
    - ~~Tips:~~
        - ~~Use `map`, `map` is your friend for looping over items~~
        - ~~Use template strings(backticks) to make your rendering easy~~
        - ~~Don't forget to `preventDefault`~~
2. ~~Read about [Flexbox](https://learn.digitalcrafts.com/flex/lessons/front-end-foundations/flexbox/#learning-objectives) in the Learning Portal~~
3. Complete ***at least 3*** additional  [Rendering Exercises](https://github.com/adamszaruga/rendering)
4. Catch up on the Learning Portal Chapters mentioned above in the References.
5. Read about [Form Validation](https://learn.digitalcrafts.com/flex/lessons/handling-user-input/form-validation/) in the Learning Portal.
6. Complete the [Week 6 Sprint Retrospective](https://hackmd.io/OoWk-5x3Qh21pIff87AUOQ)
