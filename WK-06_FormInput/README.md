# Form Input from the DOM

![https://media.giphy.com/media/5xtDarztR1rCyfIpMDS/giphy.gif](https://media.giphy.com/media/5xtDarztR1rCyfIpMDS/giphy.gif)

What is this?!

### Agenda

1. Review: Render Function Exercises
2. Demo: Form Data Input
    1. Splunkin Donuts Ordering Redux - Hooking up the Form
3. In class exercises: TODO list app (see below)

### Other Business

---

### Announcements

1. April 3rd is a class holiday ← **That's Saturday**

---

### Class Notes

1. **TODO List App Exercise**

Your job is to make a todo list add with the following features:

- Form input that accepts a task name, category (see the model below) and checkbox
    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a5efbd81-6676-4105-9ac9-8ded77e27bc1/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a5efbd81-6676-4105-9ac9-8ded77e27bc1/Untitled.png)
- A render function that takes the list of tasks and outputs a list
- Styling is optional (we'll be learning about better styling techniques on Thursday)
- Tips:
    - Use `map`, `map` is your friend for looping over items
    - Use template strings(backticks) to make your rendering easy
    - Don't forget to `preventDefault`
    - Turning form data into JavaScript Objects:

    ```jsx
    // `event` is the submit event
    // `event.target` is the html element that caused the event (i.e. the form)
    const formdata = new FormData(event.target);
    const entries = formdata.entries();
    const data = Object.fromEntries(entries);     // `data` is a JS object
    ```

---

### References

1. [Form Data in JavaScript](https://www.valentinog.com/blog/form-data/)
2. [Form Validation](https://learn.digitalcrafts.com/flex/lessons/handling-user-input/form-validation/) in the Learning Portal.

---

### Homework

1. **TODO List App Exercise** 
2. Complete the [Week 6 Sprint Retrospective](https://hackmd.io/OoWk-5x3Qh21pIff87AUOQ)
3. Read about [Flexbox](https://learn.digitalcrafts.com/flex/lessons/front-end-foundations/flexbox/#learning-objectives) in the Learning Portal
4. Read about [Bootstrap](https://learn.digitalcrafts.com/flex/lessons/front-end-foundations/bootstrap/#learning-objectives) in the Learning Portal
5. On Your Own Time: Finish [Rendering Exercises](https://github.com/adamszaruga/rendering)
6. Optional Exercise in Debugging: [Skware-Cash](https://github.com/aubreyrhodes/skware-cash)
