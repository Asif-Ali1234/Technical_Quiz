var bool = true,
    sec = 30,
    c = 0,
    str = "",
    count = 0,
    description = "",
    shareseconds=10,
    question_position=0;
var q_original = [
    "<p><b>What is the full form of HTML?</b></p>" +
    '<div class="custom-control custom-radio custom-control-inline"> <input type="radio" name="n" id="correct" value="A" class="custom-control-input"><label class="custom-control-label" for="correct">    A .  Hyper Text Markup Language</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="b" class="custom-control-input"><label class="custom-control-label" for="b">    B. Hyperce Textual Language</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="c" class="custom-control-input"><label class="custom-control-label" for="c">    C. Hypertest Marking Language</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="d" class="custom-control-input"><label class="custom-control-label" for="d">    D. Object Oriented Language</label></div>',
    "<p><b>Inside which HTML element tag do we put the JavaScript?</b></p>" +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="a" class="custom-control-input"><label class="custom-control-label" for="a">    A.&lt; Html &gt;</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="b" class="custom-control-input"><label class="custom-control-label" for="b">    B. &lt; Javascript &gt;</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="C" class="custom-control-input"><label class="custom-control-label" for="correct">    C. &lt; script &gt;</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="d" class="custom-control-input"><label class="custom-control-label" for="d">    D.&lt; Body &gt;</label></div>',
    "<p><b>What is the correct JavaScript syntax to change the content of the HTML element below?" +
    " &lt; p id='demo' &gt; This is a demonstration. &lt; /p &gt; ?</b></p>" +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="a" class="custom-control-input"><label class="custom-control-label" for="a">    A. document.getElementById("p").innerHTML="Hello World"</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="b" class="custom-control-input"><label class="custom-control-label" for="b">    B. #demo.innerHTML="HELLO WORLD"</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="c" class="custom-control-input"><label class="custom-control-label" for="c">    C. document.getElement("p").innerHTML="Hello World"</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="D"  class="custom-control-input"><label class="custom-control-label" for="correct">   D. document.getElementById("demo").innerHTML="Hello World"</label></div>',
    "<p><b>Where is the correct place to insert a JavaScript?</b></p>" +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="a" class="custom-control-input"><label class="custom-control-label" for="a">   A. Head Section</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="B"  class="custom-control-input"><label class="custom-control-label" for="correct">   B. Both Head And Body Section</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="c" class="custom-control-input"><label class="custom-control-label" for="c">   C. Body Section</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="d" class="custom-control-input"><label class="custom-control-label" for="d">   D. None of the above</label></div>',
    '<p><b>What is the correct syntax for referring to an external script called "xxx.js"?</b></p>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="A" class="custom-control-input"><label class="custom-control-label" for="correct">    A.  &lt; script src="xxx.js" &gt;</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="b" class="custom-control-input"><label class="custom-control-label" for="b">   B. &lt; script href="xxx.js" &gt;</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="c" class="custom-control-input"><label class="custom-control-label" for="c">   C. lt; script name="xxx.js" &gt;</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="d" class="custom-control-input"><label class="custom-control-label" for="d">   D. &lt; script rel="xxx.js" &gt;</label></div>',
    "<p><b>The external JavaScript file must contain the &lt; script &gt; tag.</b></p>" +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="a" class="custom-control-input"><label class="custom-control-label" for="a">   A.  True</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="B"  class="custom-control-input"><label class="custom-control-label" for="correct">   B. False</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="c" class="custom-control-input"><label class="custom-control-label" for="c">   C. May or Maynot</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="d" class="custom-control-input"><label class="custom-control-label" for="d">   D. Cannot say</label></div>',
    "<p><b>Where in an HTML document is the correct place to refer to an external style sheet?</b></p>" +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="A"  class="custom-control-input"><label class="custom-control-label" for="correct">   A.  In the HEAD section</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="b" class="custom-control-input"><label class="custom-control-label" for="b">   B.In the Body Section</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="c" class="custom-control-input"><label class="custom-control-label" for="c">   C. At the End of Document</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="d" class="custom-control-input"><label class="custom-control-label" for="d">   D. Either in head or Body</label></div>',
    "<p><b>We can apply align attribute to HTML elements in external style sheet using HTML5</b></p>" +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="a" class="custom-control-input"><label class="custom-control-label" for="a">   A.  Neither True Nor False</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="b" class="custom-control-input"><label class="custom-control-label" for="b">   B. True</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="C"  class="custom-control-input"><label class="custom-control-label" for="correct">   C. False</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="d" class="custom-control-input"><label class="custom-control-label" for="d">   D. Cannot say</label></div>',
    "<p><b>Which HTML tag is used to define an internal style sheet?</b></p>" +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="a" class="custom-control-input"><label class="custom-control-label" for="a">   A.  &lt; script &gt;</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="B"  class="custom-control-input"><label class="custom-control-label" for="correct">   B. &lt; style &gt;</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="c" class="custom-control-input"><label class="custom-control-label" for="c">   C. &lt; css &gt;</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="d" class="custom-control-input"><label class="custom-control-label" for="d">   D. None Of Them</label></div>',
    "<p><b>Which HTML attribute is used to define inline styles?</b></p>" +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="a" class="custom-control-input"><label class="custom-control-label" for="a">   A.  styles</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="B"  class="custom-control-input"><label class="custom-control-label" for="correct">   B. style</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="c" class="custom-control-input"><label class="custom-control-label" for="c">   C. font</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="d" class="custom-control-input"><label class="custom-control-label" for="d">   D. class</label></div>',
    "<p><b>Which property is used to change the background color?</b></p>" +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="a" class="custom-control-input"><label class="custom-control-label" for="a">   A. bgcolor</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="b" class="custom-control-input"><label class="custom-control-label" for="b">   B. color</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="C"  class="custom-control-input"><label class="custom-control-label" for="correct">   C. Background-color</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="d" class="custom-control-input"><label class="custom-control-label" for="d">   D. None of the above</label></div>',
    "<p><b>How do you add a background color for all &lt;h1&gt; elements?</b></p>" +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="a" class="custom-control-input"><label class="custom-control-label" for="a">   A. h1{background-color:#ffff}.all</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="b" class="custom-control-input"><label class="custom-control-label" for="b">   B. all h1{background-color:#ffff}</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="c" class="custom-control-input"><label class="custom-control-label" for="c">   C. all.h1{background-color:#ffff}</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="D"  class="custom-control-input"><label class="custom-control-label" for="correct">   D. h1{background-color:#ffff}</label></div>',
    "<p><b>How do you round the number 7.25, to the nearest integer?</b></p>" +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="a" class="custom-control-input"><label class="custom-control-label" for="a">   A.  round(7.25)</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="B"  class="custom-control-input"><label class="custom-control-label" for="correct">   B. Math.round(7.25)</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="c" class="custom-control-input"><label class="custom-control-label" for="c">   C. rnd(7.25)</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="d" class="custom-control-input"><label class="custom-control-label" for="d">   D. Math.Round(7.25)</label></div>',
    "<p><b>How do you find the number with the highest value of x and y?</b></p>" +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="A"  class="custom-control-input"><label class="custom-control-label" for="correct">   A.  Math.max(x,y);</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="b" class="custom-control-input"><label class="custom-control-label" for="b">   B. max(x,y);</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="c" class="custom-control-input"><label class="custom-control-label" for="c">   C. ceil(x,y);</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="d" class="custom-control-input"><label class="custom-control-label" for="d">   D. Math.ceil(x,y);</label></div>',
    '<p><b>What is the correct JavaScript syntax for opening a new window called "w2" ?</b></p>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="a" class="custom-control-input"><label class="custom-control-label" for="a">   A.  w2=WINDOW.open("http://www.Technicalquiz.com");</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="b" class="custom-control-input"><label class="custom-control-label" for="b">   B. w2=window.create("http://www.Technicalquiz.com");</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="c" class="custom-control-input"><label class="custom-control-label" for="c">   C. w3=window.new("http://www.Technicalquiz.com");</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="D"  class="custom-control-input"><label class="custom-control-label" for="correct">   D. w2=window.open("http://www.Technicalquiz.com");</label></div>',
    "<p><b>JavaScript is the same as Java?</b></p>" +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="a" class="custom-control-input"><label class="custom-control-label" for="a">   A.  Yes</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="B"  class="custom-control-input"><label class="custom-control-label" for="correct">   B. No</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="c" class="custom-control-input"><label class="custom-control-label" for="c">   C. Cannot Say</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="d" class="custom-control-input"><label class="custom-control-label" for="d">   D. Neither Yes Nor No</label></div>',
    "<p><b>How can you detect the client's browser name?</b></p>" +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value=" A"  class="custom-control-input"><label class="custom-control-label" for="correct">  A.  navigator.appName</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="b" class="custom-control-input"><label class="custom-control-label" for="b">   B. browser.name</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="c" class="custom-control-input"><label class="custom-control-label" for="c">   C. client.navName</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="d" class="custom-control-input"><label class="custom-control-label" for="d">   D. None Of The Above</label></div>',
    "<p><b>Which event occurs when the user clicks on an HTML element?</b></p>" +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="a" class="custom-control-input"><label class="custom-control-label" for="a">   A. Onload</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="b" class="custom-control-input"><label class="custom-control-label" for="b">   B. onchange</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="C"  class="custom-control-input"><label class="custom-control-label" for="correct">   C. onclick</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="d" class="custom-control-input"><label class="custom-control-label" for="d">   D. onmouseover</label></div>',
    "<p><b>Who is making the Web standards?</b></p>" +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="a" class="custom-control-input"><label class="custom-control-label" for="a">   A.  Google</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="b" class="custom-control-input"><label class="custom-control-label" for="b">   B. Microsoft</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="c" class="custom-control-input"><label class="custom-control-label" for="c">   C. Mozilla</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="D"  class="custom-control-input"><label class="custom-control-label" for="correct">   D. The World Wide Web Consortium</label></div>',
    "<p><b>What is the correct HTML for adding a background color?</b></p>" +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="A"  class="custom-control-input"><label class="custom-control-label" for="correct">   A.  &lt; body style="background-color:yellow" &gt;</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="b" class="custom-control-input"><label class="custom-control-label" for="b">   B. &lt; body color="yellow" &gt; </label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="c" class="custom-control-input"><label class="custom-control-label" for="c">   C. &lt; background &gt; yellow &lt; background &gt;</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="d" class="custom-control-input"><label class="custom-control-label" for="d">   D. &lt; body bg="yellow" &gt;</label></div>',
    "<p><b>What will the following code return: Boolean(10 > 9)?</b></p>" +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="A"  class="custom-control-input"><label class="custom-control-label" for="correct">   A.  True</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="b" class="custom-control-input"><label class="custom-control-label" for="b">   B. False</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="c" class="custom-control-input"><label class="custom-control-label" for="c">   C. NaN</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="d" class="custom-control-input"><label class="custom-control-label" for="d">   D. null</label></div>',
    "<p><b>How do you declare a JavaScript variable?</b></p>" +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="a" class="custom-control-input"><label class="custom-control-label" for="a">   A.  v r</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="b" class="custom-control-input"><label class="custom-control-label" for="b">   B. va r</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="c" class="custom-control-input"><label class="custom-control-label" for="c">   C. Variable r</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="D"  class="custom-control-input"><label class="custom-control-label" for="correct">   D.var r;</label></div>',
    '<p><b>How do you write "Hello World" in an alert box?</b></p>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="A"  class="custom-control-input"><label class="custom-control-label" for="correct">   A. alert("Hello World");</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="b" class="custom-control-input"><label class="custom-control-label" for="b">   B. msgBox("Hello World");</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="c" class="custom-control-input"><label class="custom-control-label" for="c">   C. msg("hello world");</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="d" class="custom-control-input"><label class="custom-control-label" for="d">   D. alertbox("Hello World");</label></div>',
    "<p><b>How do you create a function in JavaScript?</b></p>" +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="a" class="custom-control-input"><label class="custom-control-label" for="a">   A.  function = myfunction()</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="b" class="custom-control-input"><label class="custom-control-label" for="b">   B. myfunction()</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="c" class="custom-control-input"><label class="custom-control-label" for="c">   C. def myfunction()</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="D"  class="custom-control-input"><label class="custom-control-label" for="correct">   D. function myfunction()</label></div>',
    "<p><b>Choose the correct HTML element to define important text</b></p>" +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="a" class="custom-control-input"><label class="custom-control-label" for="a">   A. &lt; Important &gt;</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="b" class="custom-control-input"><label class="custom-control-label" for="b">   B. &lt; b &t;</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="c" class="custom-control-input"><label class="custom-control-label" for="c">   C. &lt; i &gt;</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="D"  class="custom-control-input"><label class="custom-control-label" for="correct">   D. &lt strong &gt;</label></div>',
    "<p><b>Which character is used to indicate an end tag?</b></p>" +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="a" class="custom-control-input"><label class="custom-control-label" for="a">   A. &lt; </label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="b" class="custom-control-input"><label class="custom-control-label" for="b">   B. ?</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="C"  class="custom-control-input"><label class="custom-control-label" for="correct">   C. /</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="d" class="custom-control-input"><label class="custom-control-label" for="d">   D. *</label></div>',
    '<p><b>How do you call a function named "myFunction"?</b></p>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="a" class="custom-control-input"><label class="custom-control-label" for="a">   A.  call myFunction</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="b" class="custom-control-input"><label class="custom-control-label" for="b">   B. myFunction</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="C"  class="custom-control-input"><label class="custom-control-label" for="correct">   C. myFunction()</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="d" class="custom-control-input"><label class="custom-control-label" for="d">   D. calling myFunction</label></div>',
    "<p><b>How to write an IF statement in JavaScript?</b></p>" +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="a" class="custom-control-input"><label class="custom-control-label" for="a">   A.  if(i==5):</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="b" class="custom-control-input"><label class="custom-control-label" for="b">   B. if(i==5) then</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="c" class="custom-control-input"><label class="custom-control-label" for="c">   C. if i==5 then</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="D"  class="custom-control-input"><label class="custom-control-label" for="correct">   D. if(i==5)</label></div>',
    "<p><b>How can you add a comment in a JavaScript?</b></p>" +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="a" class="custom-control-input"><label class="custom-control-label" for="a">   A. &lt; !--This is a comment-- &gt;</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="b" class="custom-control-input"><label class="custom-control-label" for="b">   B. --This ia comment</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="C"  class="custom-control-input"><label class="custom-control-label" for="correct">   C. //This is a comment</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="d" class="custom-control-input"><label class="custom-control-label" for="d">   D. &lt; comment &gt; This is a comment &lt; comment &gt;</label></div>',
    "<p><b>What is the correct way to write a JavaScript array?</b></p>" +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="correct" value="A"  class="custom-control-input"><label class="custom-control-label" for="correct">   A.  var colors=["red","blue","green"]</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="b" class="custom-control-input"><label class="custom-control-label" for="b">   B. var colors=("red","blue","green")</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="c" class="custom-control-input"><label class="custom-control-label" for="c">   C. var colors="1.red,2.blue,3.green"</label></div>' +
    '<div class="custom-control custom-radio custom-control-inline"><input type="radio" name="n" id="d" class="custom-control-input"><label class="custom-control-label" for="d">   D. var colors="red","blue","green"</label></div>',
];

descriptionlist = [
    'No Description',
    'No Description',
    'No Description',
    'No Description',
    'No Description',
    'No Description',
    'No Description',
    'No Description',
    'No Description',
    'No Description',
    'No Description',
    'No Description',
    'No Description',
    'No Description',
    'No Description',
    'No Description',
    'No Description',
    'No Description',
    'No Description',
    'No Description',
    'No Description',
    'No Description',
    'No Description',
    'No Description',
    'No Description',
    'No Description',
    'No Description',
    'No Description',
    'No Description',
    'No Description'
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
        sec = 30;
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
    sec = 30;
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
            document.getElementById('finalnote').innerHTML="Hurray You have achieved greater than 80% marks in Javascript Quiz"
            document.getElementById('msgdisplay').innerHTML="You rocked the Javascript Quiz. Kindly practice other subjects and remember to share this to your friends"
        }
        else if(totalmarks>=140 && totalmarks<160){
            document.getElementById('finalnote').innerHTML="Congrats You have achieved greater than 70% marks in Javascript Quiz "
            document.getElementById('msgdisplay').innerHTML="You Completed the Javascript Quiz. Kindly practice other subjects and remember to share this to your friends"
        }
        else if(totalmarks>=100 && totalmarks<140){
            document.getElementById('finalnote').innerHTML="You have achieved greater than 50% marks in Javascript Quiz"
            document.getElementById('msgdisplay').innerHTML="You completed the Javascript Quiz. Kindly practice other subjects and remember to share this to your friends"
        }
        else{
            document.getElementById('finalnote').innerHTML="You have achieved less than 50% marks in Javascript But dont worry prepare weel and try again coz practice only makes man perfect"
            document.getElementById('msgdisplay').innerHTML="You completed the Javascript Quiz. Kindly practice other subjects and remember to share this to your friends"
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