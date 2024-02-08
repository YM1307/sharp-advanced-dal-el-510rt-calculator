var firstnum=0, secondnum=0, result,operations,ans =0;
var M = 0;
var R=0;
var Function_set =1;

var screen = document.getElementById("Screen");

//The basic functions
    //Numbers 0 - 9

    function setNumber(number) {
        var screen = document.getElementById("Screen");
        screen.value += number;
    }

        function one() {setNumber("1");}
        function two() {setNumber("2");}
        function three() {setNumber("3");}
        function four() {setNumber("4");}
        function five() {setNumber("5");}
        function six() {setNumber("6");}
        function seven() {setNumber("7");}
        function eight() {setNumber("8");}
        function nine() {setNumber("9");}
        function zero() {setNumber("0");}

    //First Function Operators
    function opperations(opp){
        var screen = document.getElementById("Screen");
        if (opp == "+"){ firstnum = parseInt(screen.value) + firstnum;}
        else if (opp=="x") firstnum = parseFloat(screen.value);
        else if (opp=="-") firstnum = firstnum - parseInt(screen.value);
        else if (opp=="/") firstnum = firstnum / parseInt(screen.value);
        else if (opp=="x^y") firstnum = Math.pow(parseFloat(firstnum), parseInt(screen.value));
       
        screen.value = "";
        operations = opp;
    }

        function Plus(){opperations("+");}
        function Multiply(){opperations("x");}
        function Divide(){opperations("/");}
        function Minus(){opperations("-");}
        function y_pow_x(){opperations("x^y");}
        {
            var screen = document.getElementById("Screen");
            firstnum = screen.value;
            screen.value = "";
            operations = "x^y";
        }

function Decimal()
    {
        var screen = document.getElementById("Screen");
        firstnum = screen.value;
        screen.value = screen.value + ".";
    }

function Plus_Minus()
    {
        var screen = document.getElementById("Screen");
        screen.value = screen.value * -1;
    }



//Advanced functions

    //Parentheses
    function Left_parentheses()
        {
            var screen = document.getElementById("Screen");
            screen.value = screen.value + "(";
        }

    function Right_parentheses()
        {
            var screen = document.getElementById("Screen");
            screen.value = screen.value + ")";
        }

        //First row of functions
    function Delete()
        {
            var screen = document.getElementById("Screen");
            var l = String(screen.value);
            l = l.slice(0,-1); //The zero is the first index of the string desired, the -1 is starting from the last index; how characters are deleated 
            screen.value = l;
        }
    
    function ON_Clear()
        {
            var screen = document.getElementById("Screen");
            firstnum.value="";
            secondnum.value=" ";
            screen.value="";
        }

        //Second row of functions
    function sin()
        {
            if (Function_set/2 == Math.floor(Function_set/2))
                {
                    var screen = document.getElementById("Screen");
                    screen.value = Math.asin(screen.value);
                    Function_set = Function_set + 1;
                }
            else 
                {
                    var screen = document.getElementById("Screen");
                    screen.value = Math.sin(screen.value);
                }
        }

    function cos()
        {
            var screen = document.getElementById("Screen");
            screen.value = Math.cos(screen.value);
        }

    function tan()
        {
            var screen = document.getElementById("Screen");
            screen.value = Math.tan(screen.value);
        }

    function PI()
        {
            if (Function_set/2 == Math.floor(Function_set/2))
                {
                    var screen = document.getElementById("Screen");
                    screen.value = Math.sqrt(screen.value);
                }
            
            var screen = document.getElementById("Screen");
            screen.value = screen.value + Math.PI;
        }

    

//Second Function
    function SecondF()
        {
            var snd = document.getElementById("SecondFunction");
            Function_set = Function_set + 1;

            if (Function_set/2 == Math.floor(Function_set/2))
                {
                    snd.value =  "2nd " + Function_set;
                }

            else 
                {
                    snd.value = " ";
                }
        }


function Equals()
    {
        var screen = document.getElementById("Screen");
        secondnum = screen.value;

        if (operations =="+")
            {
                result = parseFloat(firstnum) + parseFloat(secondnum);
                screen.value = result;
            }

        else if (operations =="-")
        {
            result = parseFloat(firstnum) - parseFloat(secondnum);
            screen.value = result;
        }

        else if (operations =="x")
        {
            result = parseFloat(firstnum) * parseFloat(secondnum);
            screen.value = result;
        }

        else if (operations =="/")
            {
                result = parseFloat(firstnum) / parseFloat(secondnum);
                screen.value = result;
            }

        else if (operations == "x^y")
            {
                result = Math.pow(parseFloat(firstnum),parseFloat(secondnum));
                screen.value = result;
            }

            alert(firstnum + " " + operations + " " + secondnum + " = " + result);

            result = 0;
            secondnum = 0;
    }