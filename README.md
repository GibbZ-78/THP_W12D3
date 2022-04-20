## THP W12D3 - Developer track - Javascript: sorting & algorithms' complexity... I'm loving it!

### :one: Content :scroll:

After (re)learning the different sorting algorithms (bubble, select, insert, quick), here is another one : **the merge or fusion sort!**
In addition to this additional sorting exercise, you'll find a few others based on 2 subjects:

- **Subject #1:**  
  Given a list of integers (in an Array format) and a number "k", create a boolean-returning method that test whether two numbers in this list have "k" as the result of their sum.  
  For example, if we give you the list [10, 15, 3, 7] and k = 17, the function should return "true" because 10 + 7 = 17. If we give you the list [1, 8, 10, 21] and k = 19, the function should return false because no two numbers have 19 as the result of their addition.

- **Subject #2:**  
  We are going to give you a list (in an Array format) containing the height (in floors) of all buildings belonging to a given street, from East to West. A real estate agent would like you to write an algorithm that returns how many buildings on this particular street have at least one apartment with a view on the setting sun (i.e. to the West), in order to properly assess the value of the appartments a,d buildings on this street.  
  For example, given [3, 7, 8, 3, 6, 1], your function should return "3" (as an Integer), since the highest floor of buildings with sizes 8, 6, and 1 all have a view to the West. Given the list [1, 4, 5, 8], the same function should return "1" (as an Integer) since only the last building has at least one apartment/floor with a clear view to the west.

Here below are the related questions:

- **Exercise 1:**  
  Solve topic 1 with an algorithmic complexity of O(n²), i.e. your program will have to compare each element with each other using 2 nested loops.
- **Exercise 2:**  
  Solve topic 2 with an algorithmic complexity of O(n²), i.e. your program will have to compare each element with each other using 2 nested loops.
- **Exercise 3:**
  Solve topic 1 with an algorithmic complexity of O(n), i.e. your program will be able to iterate over each element of the array multiple times (but no nested loop!).
- **Exercise 4:**
  Solve topic 2 with an algorithmic complexity of O(n), i.e. your program will be able to iterate over each element of the array multiple times (but no nested loop!).
- **Exercise 5:**
  Solve topic 1 by making only one passage on your list.  
  If you succeed in this exercise, know that it has been asked for an interview by Google. You can apply to Google. Class, right?
- **Exercise 6:**  
  Solve topic 2 by making only one passage on your list.  
  If you succeed in this exercise, know that it was asked in interview by Mailchimp. You can apply to Mailchimp. Class, right?

### :two: How to :bulb:

1. Create an empty directory on your :computer:
2. Clone the current :octocat: repository to the latter via `git clone .`
3. If in a "change mood", replace the content of "numbers.txt" with a random list of - positive and negative - numbers of your choice
4. Launch the "mergesort.js" file thanks to a `node mergesort.js numbers.txt` command.
5. Run the "algoexo.js" file via `node algoexo*.js list*.txt` (where \* is the reference number of the given exercise)

### :three: Missing features / Possible evolution :rocket:

- Optimize all sorting algorithms by taking into account the numbers' distribution, etc.
- Make the "building" exercise more graphical / fun
- ...

### :four: Credits :closed_lock_with_key:

&copy; 2022 - Jean-Baptiste VIDAL ([Github repo](https://github.com/GibbZ-78)) for THP Developer track

Enjoy, _wanderer_ :wink: !
