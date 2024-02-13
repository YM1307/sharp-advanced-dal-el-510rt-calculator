    var expression = "";

    // Displays the buttons' values on the screen
    function add_to_equation(next_in_expression) { // TODO: fix error with +/- "3**2*(-1) should equal "3^(2*-1)" not "(3^2) * -1"
        var screen = document.getElementById("Screen");

        if (next_in_expression == "+/-"){
            next_in_expression = "(-1)*";
        }

        expression += next_in_expression;

        switch (next_in_expression) {
            case "Math.cos":
                screen.value += "cos";
                screen.value += "(";
                expression += "(";
                break;

            case "Math.sin":
                screen.value += "cos";
                screen.value += "(";
                expression += "(";
                break;

            case "Math.tan":
                screen.value += "tan";
                screen.value += "(";
                expression += "(";
                break;

            case "Math.PI":
                screen.value += "π";
                break;

            case "**":
                screen.value += "^";
                break;

            case "/":
                screen.value += "÷";
                break;
                
            case "*":
                screen.value += "x";
                break;

            case "(-1)*":
                screen.value += "-";
                break;

            default:
                screen.value += next_in_expression;
                break;
        }
    }
    

    function Left_parentheses(){
        add_to_equation("(");
    }
    
    function Right_parentheses(){
        add_to_equation(")");
    }

    function Equals(){
        var screen = document.getElementById("Screen");
        var equation =[];
        equation.push(expression);
        
        var str = "";
        for (var i = 0; i < equation.length; i++){
            str += equation[i];
        }
        
        var result = (eval(str)); // performs the mathematic equation of the expression written on the screen
        for (var i = 0; i < equation.length; i++){
            equation.pop();
        }

        equation.pop(); 
        screen.value = result;
        
    }

    function ON_Clear(){
        var screen = document.getElementById("Screen");
        screen.value = "";
        expression ="";
    }

    function Delete(){
        var screen = document.getElementById("Screen");
        screen.value = (screen.value).substring(0, screen.value.length - 1);
        expression = expression.substring(0, expression.length - 1);
    }
