## [read a file](https://learn.digitalcrafts.com/flex/lessons/back-end-foundations/node-101/#medium)

Write a program that prompts the user to enter a file name, and reads in the contents of the file, convert the text to all caps, and prints it out.

Assuming the file file1.txt contains the text: "Hello, I am file 1."

Example output:

$ node read_file.js
filename: file1.txt
HELLO, I AM FILE 1.
Trigger an error condition by running the program on a non-existent file. Your program should display the error message, and it should display something like:

$ node read_file.js
filename: blah.txt
ENOENT: no such file or directory, open 'blah.txt'

Note: Error NO ENTry (or Error NO ENTity)

can actually be used for more than files/directories. It's abbreviated because C compilers at the dawn of time didn't support more than 8 characters in symbols