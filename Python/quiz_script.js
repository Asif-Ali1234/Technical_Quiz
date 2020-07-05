var bool = true,
    sec = 40,
    c = 0,
    str = "",
    count = 0,
    description = "",
    shareseconds=10,
    question_position=0;
var q_original = [
    '<p><b>What will be the output of the following code : </b>' + '<br>' +
    'print type(type(int))</b></p>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="A" value="A" class="custom-control-input"><label class="custom-control-label" for="A">type "int"</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="B" value="B" class="custom-control-input"><label class="custom-control-label" for="B">Error</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="C" class="custom-control-input"><label class="custom-control-label" for="correct">type "type"</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="D" value="D" class="custom-control-input"><label class="custom-control-label" for="D">0</label></div>',
    '<p><b>What is the output of the following code : </b>' + '<br>' +
    '	L = ["a","b","c","d"]<br>print "".join(L)</b></p>' +
    '<div class="custom-control custom-radio custom-control-inline">' +
    '<input type="radio" name="n" id="A" value="A" class="custom-control-input"><label class="custom-control-label" for="A">Error</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="B" value="B" class="custom-control-input"><label class="custom-control-label" for="B">None</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="C" class="custom-control-input"><label class="custom-control-label" for="correct">abcd</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="D" value="D" class="custom-control-input"><label class="custom-control-label" for="D">[‘a’,’b’,’c’,’d’]</label></div>',
    '<p><b>What is the output of the following segment : <br>	chr(ord("A"))</b></p>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="A" value="A" class="custom-control-input"><label class="custom-control-label" for="A">B</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="B" class="custom-control-input"><label class="custom-control-label" for="correct">A</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="C" value="C" class="custom-control-input"><label class="custom-control-label" for="C">a</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="D" value="D" class="custom-control-input"><label class="custom-control-label" for="D">Error</label></div>',
    '<p><b>What is the output of the following program :<br>' +
    '<pre>y = 8<br>z = lambda x : x * y<br>print z(6)</pre></b></p>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="A" value="A" class="custom-control-input"><label class="custom-control-label" for="A">14</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="B" class="custom-control-input"><label class="custom-control-label" for="correct">48</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="C" value="C" class="custom-control-input"><label class="custom-control-label" for="C">64</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="D" value="D" class="custom-control-input"><label class="custom-control-label" for="D">None of the above</label></div>',
    '<p><b>What is called when a function is defined inside a class?</b></p>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="A" class="custom-control-input"><label class="custom-control-label" for="correct">Method</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="B" value="B" class="custom-control-input"><label class="custom-control-label" for="B">Another function</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="C" value="C" class="custom-control-input"><label class="custom-control-label" for="C">Module</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="D" value="D" class="custom-control-input"><label class="custom-control-label" for="D">Class</label></div>',
    '<p><b>Which of the following is the use of id() function in python?</b></p>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="A" value="A" class="custom-control-input"><label class="custom-control-label" for="A">Every object doesn’t have a unique id</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="B" class="custom-control-input"><label class="custom-control-label" for="correct">Id returns the identity of the object</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="C" value="C" class="custom-control-input"><label class="custom-control-label" for="C">All of the mentioned</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="D" value="D" class="custom-control-input"><label class="custom-control-label" for="D">None of the mentioned</label></div>',
    '<p><b>What is the output of the following program : <br>' +
    '<pre>import re<br>' +
    'sentence = "horses are fast"<br>' +
    'regex = re.compile("(?P<animal>w+) (?P<verb>w+) (?P<adjective>w+)")<br>' +
    'matched = re.search(regex, sentence)<br>' +
    'print(matched.groupdict())</pre></b></p>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="A" value="A" class="custom-control-input"><label class="custom-control-label" for="A">(‘horses’, ‘are’, ‘fast’)</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="B" class="custom-control-input"><label class="custom-control-label" for="correct">{‘animal’: ‘horses’, ‘verb’: ‘are’, ‘adjective’: ‘fast’}</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="C" value="C" class="custom-control-input"><label class="custom-control-label" for="C">‘horses are fast’</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="D" value="D" class="custom-control-input"><label class="custom-control-label" for="D">"are"</label></div>',
    '<p><b>Suppose list1 is [3, 4, 5, 20, 5, 25, 1, 3], what is list1 after list1.pop(1)?</b></p>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="A" value="A" class="custom-control-input"><label class="custom-control-label" for="A">[3, 4, 5, 20, 5, 25, 1, 3]</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="B" value="B" class="custom-control-input"><label class="custom-control-label" for="B">[1, 3, 3, 4, 5, 5, 20, 25]</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="C" class="custom-control-input"><label class="custom-control-label" for="correct">[3, 5, 20, 5, 25, 1, 3]</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="D" value="D" class="custom-control-input"><label class="custom-control-label" for="D">[1, 3, 4, 5, 20, 5, 25]</label></div>',
    '<p><b>time.time() returns ________</b></p>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="A" value="A" class="custom-control-input"><label class="custom-control-label" for="A">the current time</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="B" class="custom-control-input"><label class="custom-control-label" for="correct">the current time in milliseconds since midnight, January 1, 1970 GMT (the Unix time)</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="C" value="C" class="custom-control-input"><label class="custom-control-label" for="C">the current time in milliseconds</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="D" value="D" class="custom-control-input"><label class="custom-control-label" for="D">the current time in milliseconds since midnight, January 1, 1970</label></div>',
    '<p><b>Which of these is not a core data type?</b></p>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="A" value="A" class="custom-control-input"><label class="custom-control-label" for="A">Lists</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="B" value="B" class="custom-control-input"><label class="custom-control-label" for="B">Dictionary</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="C" class="custom-control-input"><label class="custom-control-label" for="correct">Class</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="D" value="D" class="custom-control-input"><label class="custom-control-label" for="D">Tuples</label></div>',
    '<p><b>What data type is the object below ?<br>L = [1, 23, ‘hello’, 1]</b></p>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="A" class="custom-control-input"><label class="custom-control-label" for="correct">List</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="B" value="B" class="custom-control-input"><label class="custom-control-label" for="B">Dictionary</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="C" value="C" class="custom-control-input"><label class="custom-control-label" for="C">Tuple</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="D" value="D" class="custom-control-input"><label class="custom-control-label" for="D">Array</label></div>',
    '<p><b>Which of the following function convert a string to a float in python?</b></p>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="A" value="A" class="custom-control-input"><label class="custom-control-label" for="A">int(x [,base])</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="B" value="B" class="custom-control-input"><label class="custom-control-label" for="B">long(x [,base] )</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="C" value="C" class="custom-control-input"><label class="custom-control-label" for="C">str(x)</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="D" class="custom-control-input"><label class="custom-control-label" for="correct">float(x)</label></div>',
    '<p><b>Which of the following statement(s) is TRUE?<br>   1 A hash function takes a message of arbitrary length and generates a fixed length code.<br>   2 A hash function takes a message of fixed length and generates a code of variable length.<br>   3 A hash function may give the same hash value for distinct messages.</b></p>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="A" value="A" class="custom-control-input"><label class="custom-control-label" for="A">I only</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="B" value="B" class="custom-control-input"><label class="custom-control-label" for="B">II and III only</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="C" class="custom-control-input"><label class="custom-control-label" for="correct">I and III only</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="D" value="D" class="custom-control-input"><label class="custom-control-label" for="D">II only</label></div>',
    '<p><b>Given a function that does not return any value, what value is shown when executed at the shell?</b></p>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="A" value="A" class="custom-control-input"><label class="custom-control-label" for="A">int</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="B" value="B" class="custom-control-input"><label class="custom-control-label" for="B">bool</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="C" class="custom-control-input"><label class="custom-control-label" for="correct">None</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="D" value="D" class="custom-control-input"><label class="custom-control-label" for="D">void</label></div>',
    '<p><b>Which module in Python supports regular expressions?</b></p>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="A" value="A" class="custom-control-input"><label class="custom-control-label" for="A">pyre</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="B" value="B" class="custom-control-input"><label class="custom-control-label" for="B">regex</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="C" value="C" class="custom-control-input"><label class="custom-control-label" for="C">pyregex</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="D" class="custom-control-input"><label class="custom-control-label" for="correct">re</label></div>',
    '<p><b>Which of the following is not a complex number in Python?</b></p>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="A" class="custom-control-input"><label class="custom-control-label" for="correct">k = 2 + 3l</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="B" value="B" class="custom-control-input"><label class="custom-control-label" for="B">k = 2 + 3j</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="C" value="C" class="custom-control-input"><label class="custom-control-label" for="C">k = complex(2, 3)</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="D" value="D" class="custom-control-input"><label class="custom-control-label" for="D">k = 2 + 3J</label></div>',
    '<p><b>What does ~~~~~~5 evaluate to?</b></p>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="A" value="A" class="custom-control-input"><label class="custom-control-label" for="A">-11</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="B" class="custom-control-input"><label class="custom-control-label" for="correct">+5</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="C" value="C" class="custom-control-input"><label class="custom-control-label" for="C">+1</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="D" value="D" class="custom-control-input"><label class="custom-control-label" for="D">-5</label></div>',
    '<p><b>Given a string s = “Welcome”, which of the following code is incorrect?</b></p>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="A" value="A" class="custom-control-input"><label class="custom-control-label" for="A">print s[0]</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="B" class="custom-control-input"><label class="custom-control-label" for="correct">s[1] = ‘r’</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="C" value="C" class="custom-control-input"><label class="custom-control-label" for="C">print s.strip()</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="D" value="D" class="custom-control-input"><label class="custom-control-label" for="D">print s.lower()</label></div>',
    '<p><b>________ is a simple but incomplete version of a function.</b></p>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="A" class="custom-control-input"><label class="custom-control-label" for="correct">Stub</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="B" value="B" class="custom-control-input"><label class="custom-control-label" for="B">Function</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="C" value="C" class="custom-control-input"><label class="custom-control-label" for="C">A function developed using bottom-up approach</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="D" value="D" class="custom-control-input"><label class="custom-control-label" for="D">A function developed using top-down approach</label></div>',
    '<p><b>To start Python from the command prompt, use the command ______</b></p>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="A" value="A" class="custom-control-input"><label class="custom-control-label" for="A">execute python</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="B" class="custom-control-input"><label class="custom-control-label" for="correct">python</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="C" value="C" class="custom-control-input"><label class="custom-control-label" for="C">go python</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="D" value="D" class="custom-control-input"><label class="custom-control-label" for="D">run python</label></div>',
    '<p><b>Which of the following is correct about Python?</b></p>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="A" value="A" class="custom-control-input"><label class="custom-control-label" for="A">It can be easily integrated with C, C++, COM, ActiveX, CORBA, and Java</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="B" value="B" class="custom-control-input"><label class="custom-control-label" for="B">It supports automatic garbage collection.</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="C" class="custom-control-input"><label class="custom-control-label" for="correct">Both</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="D" value="D" class="custom-control-input"><label class="custom-control-label" for="D">None of the above</label></div>',


    '<p><b>What is the output of the following program : <br>' +

    '<pre>def myfunc(a):<br>' +
    '   a = a + 2 <br>' +
    '       a = a * 2 <br>' +
    '   return a <br>' +
    'print myfunc(2)</pre></b></p>' +

    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="A" value="A" class="custom-control-input"><label class="custom-control-label" for="A">8</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="B" value="B" class="custom-control-input"><label class="custom-control-label" for="B">16</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="C" class="custom-control-input"><label class="custom-control-label" for="correct">Indentation Error</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="D" value="D" class="custom-control-input"><label class="custom-control-label" for="D">Runtime Error</label></div>',
    '<p><b>What is the output of the expression : 3*1**3</b></p>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="A" value="A" class="custom-control-input"><label class="custom-control-label" for="A">27</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="B" class="custom-control-input"><label class="custom-control-label" for="correct">3</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="C" value="C" class="custom-control-input"><label class="custom-control-label" for="C">9</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="D" value="D" class="custom-control-input"><label class="custom-control-label" for="D">1</label></div>',
    '<p><b>What is the output of the following program : <br>	print "{0:.2}".format(1.0 / 3)</b></p>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="A" value="A" class="custom-control-input"><label class="custom-control-label" for="A">0.333333</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="B" class="custom-control-input"><label class="custom-control-label" for="correct">0.33</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="C" value="C" class="custom-control-input"><label class="custom-control-label" for="C">0.333333:-2</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="D" value="D" class="custom-control-input"><label class="custom-control-label" for="D">Error</label></div>',
    '<p><b>What is the output of the following program : <br>	print "{0:-2%}".format(1.0 / 3)</b></p>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="A" value="A" class="custom-control-input"><label class="custom-control-label" for="A">0.33</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="B" value="B" class="custom-control-input"><label class="custom-control-label" for="B">0.33%</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="C" class="custom-control-input"><label class="custom-control-label" for="correct">33.33%</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="D" value="D" class="custom-control-input"><label class="custom-control-label" for="D">33%</label></div>',
    '<p><b>What is the output of the following program : <br>' +

    '<pre>i = 0 <br>' +
    'while i < 3: <br>' +
    '   print i <br>' +
    '   i += 1 <br>' +
    'else: <br>' +
    '   print 0</pre></b></p>' +

    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="A" value="A" class="custom-control-input"><label class="custom-control-label" for="A">0 1 2 3 0</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="B" value="B" class="custom-control-input"><label class="custom-control-label" for="B">0 1 2</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="C" class="custom-control-input"><label class="custom-control-label" for="correct">0 1 2 0</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="D" value="D" class="custom-control-input"><label class="custom-control-label" for="D">Error</label></div>',
    '<p><b>What is the output of the following program : <br>' +

    '<pre>i = 0<br>' +
    'while i < 5:<br>' +
    '   print(i)<br>' +
    '   i += 1<br>' +
    '   if i == 3:<br>' +
    '       break<br>' +
    '   else:<br>' +
    '       print(0)</pre></b></p>' +

    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="A" value="A" class="custom-control-input"><label class="custom-control-label" for="A">0 1 2 0</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="B" class="custom-control-input"><label class="custom-control-label" for="correct">0 1 2</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="C" value="C" class="custom-control-input"><label class="custom-control-label" for="C">Error</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="D" value="D" class="custom-control-input"><label class="custom-control-label" for="D">None of the above</label></div>',
    '<p><b>What is the output of the following program : <br>	print "cd".partition("cd")</b></p>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="A" value="A" class="custom-control-input"><label class="custom-control-label" for="A">(‘cd’)</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="B" value="B" class="custom-control-input"><label class="custom-control-label" for="B">(”)</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="C" value="C" class="custom-control-input"><label class="custom-control-label" for="C">(‘cd’, ”, ”)</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="D" class="custom-control-input"><label class="custom-control-label" for="correct">(”, ‘cd’, ”)</label></div>',
    '<p><b>What is the output of the following program :<br> 	print "abef".partition("cd")</b></p>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="A" value="A" class="custom-control-input"><label class="custom-control-label" for="A">(‘abef’)</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="B" value="B" class="custom-control-input"><label class="custom-control-label" for="B">(‘abef’, ‘cd’, ”)</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="C" class="custom-control-input"><label class="custom-control-label" for="correct">(‘abef’, ”, ”)</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="D" value="D" class="custom-control-input"><label class="custom-control-label" for="D">Error</label></div>',
    '<p><b>What is the output of the following program : <br>	print "abcefd".replace("cd", "12")</b></p>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="A" value="A" class="custom-control-input"><label class="custom-control-label" for="A">ab1ef2</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="B" class="custom-control-input"><label class="custom-control-label" for="correct">abcefd</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="C" value="C" class="custom-control-input"><label class="custom-control-label" for="C">ab1efd</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="D" value="D" class="custom-control-input"><label class="custom-control-label" for="D">ab12ed2</label></div>',
    '<p><b>What will be displayed by the following code? <br>' +

    '<pre>def f(value, values): <br>' +
    '     v = 1 <br>' +
    '     values[0] = 44 <br>' +
    't = 3 <br>' +
    'v = [1, 2, 3] <br>' +
    'f(t, v) <br>' +
    'print(t, v[0])</pre></b></p>' +

    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="A" value="A" class="custom-control-input"><label class="custom-control-label" for="A">1 1</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="B" value="B" class="custom-control-input"><label class="custom-control-label" for="B">1 44</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="C" class="custom-control-input"><label class="custom-control-label" for="correct">3 44</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="D" value="D" class="custom-control-input"><label class="custom-control-label" for="D">3 1</label></div>',
    '<p><b>What is the output of the following code?<br> Consider Python 2.7. 	print tuple[1:3] if tuple == ( "abcd", 786 , 2.23, "john", 70.2 ) else tuple()</b></p>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="A" value="A" class="custom-control-input"><label class="custom-control-label" for="A">( "abcd", 786 , 2.23, "john", 70.2 )</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="B" value="B" class="custom-control-input"><label class="custom-control-label" for="B">abcd</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="C" value="C" class="custom-control-input"><label class="custom-control-label" for="C">(786, 2.23)</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="D" class="custom-control-input"><label class="custom-control-label" for="correct">None of the above</label></div>',
    '<p><b>What is the output of the following code : 	print 9//2</b></p>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="A" value="A" class="custom-control-input"><label class="custom-control-label" for="A">4.5</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="B" value="B" class="custom-control-input"><label class="custom-control-label" for="B">4.0</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="C" class="custom-control-input"><label class="custom-control-label" for="correct">4</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="D" value="D" class="custom-control-input"><label class="custom-control-label" for="D">Error</label></div>',
    '<p><b>Which function overloads the >> operator?</b></p>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="A" value="A" class="custom-control-input"><label class="custom-control-label" for="A">ge( )</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="B" value="B" class="custom-control-input"><label class="custom-control-label" for="B">gt( )</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="C" value="C" class="custom-control-input"><label class="custom-control-label" for="C">more( )</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="D" class="custom-control-input"><label class="custom-control-label" for="correct">None of the above</label></div>',
    '<p><b>Which operator is overloaded by the or() function?</b></p>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="A" value="A" class="custom-control-input"><label class="custom-control-label" for="A">| |</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="B" class="custom-control-input"><label class="custom-control-label" for="correct">|</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="C" value="C" class="custom-control-input"><label class="custom-control-label" for="C">//</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="D" value="D" class="custom-control-input"><label class="custom-control-label" for="D">/</label></div>',
    '<p><b>What is the output of the following program :' +

    '<pre>i = 0 <br>' +
    'while i < 3: <br>' +
    '    print i <br>' +
    '    i++ <br>' +
    '    print i+1</pre></b></p>' +

    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="A" value="A" class="custom-control-input"><label class="custom-control-label" for="A">0 2 1 3 2 4</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="B" value="B" class="custom-control-input"><label class="custom-control-label" for="B">0 1 2 3 4 5</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="C" value="C" class="custom-control-input"><label class="custom-control-label" for="C">1 0 2 4 3 5</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="D" class="custom-control-input"><label class="custom-control-label" for="correct">Error</label></div>',
    '<p><b>What is the output of the following program : <br>	print "Hello World"[::-1]</b></p>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="A" value="A" class="custom-control-input"><label class="custom-control-label" for="A">Hello Worl</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="B" class="custom-control-input"><label class="custom-control-label" for="correct">dlroW olleH</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="C" value="C" class="custom-control-input"><label class="custom-control-label" for="C">d</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="D" value="D" class="custom-control-input"><label class="custom-control-label" for="D">Error</label></div>',
    '<p><b>What is the output of the following program : <br>	print 0.1 + 0.2 == 0.3</b></p>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="A" value="A" class="custom-control-input"><label class="custom-control-label" for="A">True</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="B" class="custom-control-input"><label class="custom-control-label" for="correct">False</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="C" value="C" class="custom-control-input"><label class="custom-control-label" for="C">Machine dependent</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="D" value="D" class="custom-control-input"><label class="custom-control-label" for="D">Error</label></div>',
];

descriptionlist = [
    'The type() function returns the class of the argument the object belongs to.Thus, type(int) returns which is of the type ‘type’ object',
    '“” depicts a null string and the join function combines the elements of the list into a string.',
    'ord() function converts a character into its ASCII notation and chr() converts the ASCII to character.',
    'lambdas are concise functions and thus, result = 6 * 8',
    'No Description',
    'Each object in Python has a unique id. The id() function returns the object’s id.',
    'This function returns a dictionary that contains all the matches.',
    'pop(i) removes the ith index element from the list',
    'No Description',
    'Class is a user defined data type',
    '[ ] defines a list',
    'float(x) − Converts x to a floating-point number',
    'Hash function is defined as any function that can be used to map data of arbitrary size of data to a fixed size data.. The values returned by a hash function are called hash values, hash codes, digests, or simply hashes:  Statement 1 is correct Yes, it is possible that a Hash Function maps a value to a same location in the memmory that' + "'" + 's why collision occurs and we ' + 'have different technique to handle  this problem : Statement 3 is coorect.eg : we have hash function, h(x) = x mod 3 Acc to Statement 1, no matter what the value of ' + "'x'" + ' is h(x) results in a fixed mapping location.Acc. to Statement 3, h(x) can result in same mapping mapping location for ' + 'different value of ' + "'x'" + ' e.g. if x = 4 or x = 7 , h(x) = 1 in both the cases, although collision occurs.',
    'Python explicitly defines the None object that is returned if no value is specified.',
    're is a part of the standard library and can be imported using: import re.',
    'l (or L) stands for long.',
    '~x is equivalent to -(x+1).',
    'strings are immutable in Python',
    'No Description',
    'No Description',
    'No Description',
    'Python creates blocks of code based on the indentation of the code.Thus, new indent defines a new scope.',
    'Precedence of ** is higher than that of 3, thus first 1**3 will be executed and the result will be multiplied by 3.',
    '.2 defines the precision of the floating point number.',
    'The % converts the 0.33 to percentage with respect to 1.0',
    'The else part is executed when the condition in the while statement is false.',
    'The else part is not executed if control breaks out of the loop.',
    'The entire string has been passed as the separator hence the first and the last item of the tuple returned are null strings.',
    'The separator is not present in the string hence the second and the third elements of the tuple are null strings.',
    'The first substring is not present in the given string and hence nothing is replaced.',
    'The value of t=3 is passed in funcion f(value,values) ,v [list] is passed as values in the same function. The v is stored in values and values[0]=44 , changes the value at index[‘0’] in the list hence v=[44,2,3].',
    'No Description',
    'The ‘//’ operator in Python returns the integer part of the floating number.',
    'rshift() overloads the >> operator',
    'or() function overloads the bitwise OR operator',
    'There is no operator ++ in Python',
    '[::] depicts extended slicing in Python and [::-1] returns the reverse of the string.',
    'Neither of 0.1, 0.2 and 0.3 can be represented accurately in binary.The round off errors from 0.1 and 0.2 accumulate and hence there is a difference of 5.5511e-17 between (0.1 + 0.2) and 0.3.',
]
//var q_dup = q_original
//var d_dup=descriptionlist
var questions = []
var descriptions = []
function onloadfunction() {


    for (var i = 1; i <= 20; i++) {
        var num = Math.floor(Math.random() * q_original.length)
        questions.push(q_original[num])
        descriptions.push(descriptionlist[num])
        q_original.splice(num, 1)
        descriptionlist.splice(num, 1)
    }
    var tr;
    if (questions.length == 0) {
        var qnum = document.getElementById('qnumbers')
        qnum.innerHTML = "No Questions Added To display"
        qnum.style.textAlign = "center"
        qnum.style.fontSize = "18px"

    }
    /*else {
        for (var i = 1; i <= questions.length; i++) {
            var anchor = document.createElement("a")
            var text = document.createTextNode(i)
            anchor.appendChild(text)
            anchor.href = "javascript:question(" + i + ")"
            anchor.id = "q" + i
            var td = document.createElement("td")
            td.appendChild(anchor)
            if (i == 1) {
                var tr = document.createElement("tr")
                tr.appendChild(td)
            }
            else if (i % 10 == 0) {
                tr.append(td)
                document.getElementById("qtable").appendChild(tr)
                var tr = document.createElement("tr")
            }
            else {
                tr.appendChild(td)
            }
        }
        var completed = parseInt((questions.length) / 10) * 10
        if (completed < questions.length) {
            var tr = document.createElement("tr")
            for (var i = (completed + 1); i <= questions.length; i++) {
                var td = document.createElement("td")

                var anchor = document.createElement("a")

                anchor.href = "javascript:question(" + i + ")"
                anchor.id = "q" + i
                var text = document.createTextNode(i)
                anchor.appendChild(text)
                td.appendChild(anchor)
                tr.appendChild(td)
            }
            document.getElementById('qtable').appendChild(tr)
        }
    }*/
}
function question(a) {
    /*for (var i = 0; i <= turn.length; i++) {
        if (turn[i] == true) {
            document.getElementById("marks" + (i + 1) + "").innerHTML = count[i];
            var mar = document.getElementById("marks" + (i + 1) + "").style;
            mar.fontSize = "50px";
            mar.lineHeight = "200%";
            break;
        }
    }*/
    if(questions.length==1){
        document.getElementById('submitbtn').innerHTML="Submit All Questions"
    }
    var qdisplay = document.getElementById("questiondisplay")
    qdisplay.style.background = "none";
    qdisplay.style.border = "1px solid black";
    qdisplay.style.padding = "10px";
    var e = document.getElementsByName("n");
    for (var i = 0; i < e.length; i++) {
        e[i].disabled = false;
    }
    document.getElementById("submitbtn").disabled = false;
    if (bool == true) {
        var num = Math.floor(Math.random() * questions.length)
        document.getElementById("questiondisplay").innerHTML = questions[num];
        description = descriptions[num];
        questions.splice(num, 1)
        descriptions.splice(num, 1)
        document.getElementById("q" + a + "").innerHTML='<i class="fas fa-spinner"></i>'
        $('.fa-spinner').tooltip({title:"Waiting for the answer",animation:true,delay: {show: 400, hide :400}})
        question_position=a
        str = document.getElementById("correct").value;
        bool = false;
        sec = 40;
        timer();
    }
}
document.oncontextmenu=document.body.oncontextmenu=function(){return false}
function timer() {
    var time = document.getElementById("timer")
    time.innerHTML = sec;
    if (sec == 0) {
        document.getElementById("msgdisplay").innerHTML =
            "Oops!!!! Your time up. Be Fast Next Time!!!!";
        time.innerHTML = "TIME UP";
        time.style.fontSize = "22px"
        bool = true;
        var d = document.getElementsByName("n");
        for (var i = 0; i < d.length; i++) {
            d[i].disabled = true;
        }
        document.getElementById("submitbtn").disabled = true;
        revealanswer(false)
        document.getElementById("q" + question_position + "").innerHTML='<i class="far fa-clock"></i>'
        $('.fa-clock').tooltip({title:"Time Up",animation:true,delay: {show: 400 , hide: 400}})
        clearTimeout(c);
        getresults()
    } else {
        sec = sec - 1;
        c = setTimeout(timer, 1000);
    }
}
function radiocheck(ch) {
    //document.getElementById("questiondisplay").innerHTML = "";
    document.getElementById("msgdisplay").style.display = "block";
    bool = true;
    sec = 40;
    clearTimeout(c);
    var a = document.getElementById("questiondisplay").style;
    a.backgroundRepeat = "no-repeat";
    a.backgroundSize = "400px 400px";
    a.backgroundPosition = "50% 65%";
    switch (ch) {
        case "+":
            count = count + 10;
            break;
        case "-":
            count = count - 5;
            break;
        default:
            count = 0;
            break;
    }
    document.getElementById("marks").innerHTML = count;
}
function checking() {
    var a = document.getElementById("questiondisplay");
    if(questions.length==0){
        showsharescreen()
    }
    if (document.getElementById("correct").checked) {
        radiocheck("+");
        a.innerHTML += "<br><img src='correctsmiley.gif'/>"; //"url('correctsmiley.gif')";
        var m1 = (document.getElementById("msgdisplay").innerHTML =
            "CONGRATS!!!!Your Answer is Correct!!!!!");
        if (description != "No Description") {
            a.innerHTML += '<br><span class="btn btn-link" data-toggle="collapse" data-target="#questiondescription">See Description >></span>'
            a.innerHTML += '<div id="questiondescription" class="collapse">' + description + '</div>'
        }
        revealanswer(false)
        var cp=document.getElementById("q" + question_position + "")
        cp.innerHTML='<i class="far fa-check-circle"></i>'
        $('.fa-check-circle').tooltip({title: "Correct !!!",animation:true, delay: {show: 400, hide: 400}});
        getresults()
    } else {
        radiocheck("-");
        a.innerHTML += "<br><img src='confusionsmiley.gif'/>"; //"url('confusionsmiley.gif')";
        document.getElementById("msgdisplay").innerHTML =
            "Oops!!!  Your Answer Is Wrong.Better luck next time";
        if (description != "No Description") {
            a.innerHTML += '<br><span class="btn btn-link" data-toggle="collapse" data-target="#questiondescription">See Description >></span>'
            a.innerHTML += '<div id="questiondescription" class="collapse">' + description + '</div>'
        }
        revealanswer(false)
        var wp=document.getElementById("q" + question_position + "")
        wp.innerHTML='<i class="far fa-times-circle"></i>'
        $('.fa-times-circle').tooltip({title: "Wrong Answer",animation:true, delay: {show: 400, hide: 400}});
        getresults() 
    }
}

function revealanswer(res_bool) {
    var msgdisplay = document.getElementById('msgdisplay')
    msgdisplay.innerHTML = 'Correct Answer is: ' + str;
    var wp=document.getElementById("q" + question_position + "")
        wp.innerHTML='<i class="far fa-question-circle"></i>'
        $('.fa-question-circle').tooltip({title: "Correct Answer Requested",animation:true, delay: {show: 400, hide: 400}});
    var crctoption = document.getElementById('correct')
    crctoption.checked = true
    var submitbtn = document.getElementById('submitbtn')
    submitbtn.disabled = true
    var d = document.getElementsByName("n");
    for (var i = 0; i < d.length; i++) {
        d[i].disabled = true;
    }
    var timer = document.getElementById('timer')
    clearTimeout(c)
    bool = true
    if(res_bool==true){
        getresults()
    }
}


function getresults(){
    if(questions.length==0){
        var crct=document.getElementsByClassName('fa-check-circle')
        var wrng=document.getElementsByClassName('fa-times-circle')
        var timeup=document.getElementsByClassName('fa-clock')
        var ar=document.getElementsByClassName('fa-question-circle')
        var totalmarks=document.getElementById('marks').innerHTML

        var hidingelements=document.getElementsByClassName('hideatresults')
        for(var i=0;i<hidingelements.length;i++){
            hidingelements[i].style.display="none"
        }
        document.getElementById('resultsdisplay').style.display="block"

        document.getElementById('total_questions').innerHTML+=20
        document.getElementById('crct_questions').innerHTML+=crct.length
        document.getElementById('wrng_questions').innerHTML+=wrng.length
        document.getElementById('na').innerHTML+=timeup.length+ar.length
        document.getElementById('answrreqstd').innerHTML+=ar.length
        document.getElementById('timeup').innerHTML+=timeup.length
        document.getElementById('finalmarks').innerHTML+=totalmarks
        if(totalmarks>=160){
            document.getElementById('finalnote').innerHTML="Hurray You have achieved greater than 80% marks in Python Quiz"
            document.getElementById('msgdisplay').innerHTML="You rocked the Python Quiz. Kindly practice other subjects and remember to share this to your friends"
        }
        else if(totalmarks>=140 && totalmarks<160){
            document.getElementById('finalnote').innerHTML="Congrats You have achieved greater than 70% marks in Python Quiz "
            document.getElementById('msgdisplay').innerHTML="You Completed the Python Quiz. Kindly practice other subjects and remember to share this to your friends"
        }
        else if(totalmarks>=100 && totalmarks<140){
            document.getElementById('finalnote').innerHTML="You have achieved greater than 50% marks in Python Quiz"
            document.getElementById('msgdisplay').innerHTML="You completed the Python Quiz. Kindly practice other subjects and remember to share this to your friends"
        }
        else{
            document.getElementById('finalnote').innerHTML="You have achieved less than 50% marks in python But dont worry prepare weel and try again coz practice only makes man perfect"
            document.getElementById('msgdisplay').innerHTML="You completed the Python Quiz. Kindly practice other subjects and remember to share this to your friends"
        }
    }
}

function showsharescreen(){
    document.getElementById('sharesec').innerHTML=shareseconds+' S';
    if(shareseconds==0){
        document.getElementById('secondcontainer').style.display="none"
        document.getElementById('maincontainer').style.display="block"
    }
    else{
        document.getElementById('maincontainer').style.display="none"
        document.getElementById('secondcontainer').style.display="flex"
        shareseconds=shareseconds-1
        setTimeout(showsharescreen,1000)
    }
}