## [templating](https://learn.digitalcrafts.com/flex/lessons/back-end-foundations/express-template-engine/#creating-a-partial)

In this lesson, you learned how to install and configure an Express Template Engine. You created static templates, and used res.render() to send the HTML from the templates in a Response.

By using ${} as variable placholders in your templates and adding a locals Object to your res.render(), you sent dynamic data in your HTML Responses. Using the combination of .map() and .join(), you iterated over Arrays in your tempates.

Lastly, you learned how to create and use partials - snippets of HTML that could be shared by different templates. You put static markup and dynamic placeholders in your partial.

Though we used the es6-express-template-engine in this lesson, the patterns are the same no matter what Template Engine you use. In fact, templating is a key part of every major backend framework, even in languages other than JavaScript.




- detail friend req.params.handle
https://learn.digitalcrafts.com/flex/lessons/back-end-foundations/express-101/#showing-a-friend-s-details

### In this lesson, you learned how to install and use Express to write an HTTP server. Using its .get() function, you registered handler functions for different route paths. Inside your handler functions, you used Express' res.send() to send the HTTP Response back to the browser, letting it set the HTTP Status Code and 'Content-Type' header automatically.

- You created a Node module with an Array of Objects and used module.exports to make that Array available in other JavaScript files. You used a for-of loop to iterate through your Array. Using route parameters, you created a single Express route that could handle any number of values.

- Using the Array's .find() method, you located a single item in the Array to .send() back in the HTTP Response, setting the .status() if no match was found.

#