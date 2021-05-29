- steps to implement doctest:
1. import testmod from doctest module to test my function
2. Define our test function
3. Provide a suitable docstring containing desired output on certain inputs
4. Define the logic
5. Call the testmod function with the name of the function to test and set verbose True as arguments.

********** OR ****************

** A short cut: in your terminal (run test in verbose mode)

> python -m doctest -v rock_paper_scissors.py

    - This runs entire test written inside of the rock_paper_scissors.py
    (https://docs.python.org/3/library/doctest.html)