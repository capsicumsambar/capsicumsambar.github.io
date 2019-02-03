"use strict";
    var result = 0;
    var curr = 0;
    var currentClickVal;    
    var clickArr = [];
    var operArr = [];
    var oper = 0;
    var resultAtFirstEqual;
    var equalsCount = 0;
    var numArr = [];
    var operAtFirstEqual;

    $(".number").click(function(){           
      if(isNaN(clickArr[clickArr.length - 1]))$('input:text').val("");//checks if last click is oper or number              
      if(clickArr[clickArr.length - 1] == ".") currentClickVal = $(this).text();
      else currentClickVal = $(this).text()*1;
      
      $('input:text').val(function(){
            return $(this).val()+currentClickVal;//text area populated with number clicks      
                                    });
      
      if(operArr[operArr.length - 1] == "=" || operArr[operArr.length - 1] == "C") result = $('input:text').val()*1;        
      
      clickArr.push($('input:text').val()*1); //enters current number clicks to clickArr
      numArr.push($('input:text').val()*1); //enters current number clicks to numArr
      oper = 0;
      equalsCount = 0;                      
                                });

    $(".operButton").click(function(){
        clickArr.push($(this).text());//enters current oper click to clickArr
        operArr.push($(this).text());
        curr = $('input:text').val()*1; // value of text box at the moment oper is clicked
        
        if(operArr.length == 1) result = curr; // updates result after first operator click, subsequent operator clicks updated in respective oper sections
        
        if(operArr[operArr.length - 2] == "+" && oper == 0 && !isNaN(clickArr[clickArr.length - 2])) { //operation when '+' is clicked          
            result = result + curr;
            $('input:text').val(result);
            oper++;
            equalsCount == 0
                                                            };

        if(operArr[operArr.length - 2] == "-" && oper == 0 && !isNaN(clickArr[clickArr.length - 2])){ //operation when '-' is clicked           
            if(operArr[operArr.length - 3] == "C") result = result - curr;
            else if(result == 0 && numArr[numArr.length - 2] == 0) result = result - curr;   
            else if(result == 0) result = curr;
            else result = result - curr;
            $('input:text').val(result);
            oper++;
            equalsCount == 0
                                                            };

        if(operArr[operArr.length - 2] ==  "/" && oper == 0 && !isNaN(clickArr[clickArr.length - 2])){ //operation when '/' is clicked         
            if(operArr[operArr.length - 3] == "C") result = result / curr;
            else if(result == 0 && numArr[numArr.length - 2] == 0) result = result / curr;
            else if(result == 0) result = curr;
            else result = result / curr;
            $('input:text').val(result);
            oper++;
            equalsCount == 0
                                                            };

        if(operArr[operArr.length - 2] == "*" && oper == 0 && !isNaN(clickArr[clickArr.length - 2])){ //operation when '*' is clicked           
            if(operArr[operArr.length - 3] == "C") result = result * curr;
            else if(result == 0 && numArr[numArr.length - 2] == 0) result = result * curr;
            else if(result == 0) result = curr;
            else result = result * curr;
            $('input:text').val(result);
            oper++;
            equalsCount == 0
                                                            };

        if(operArr[operArr.length - 2] == "=" && operArr[operArr.length - 1] == "="){ //operation when '=' is clicked
        if(equalsCount == 0) { //records values only for first equals sign, not subsequent equals clicks
            resultAtFirstEqual = numArr[numArr.length - 1];
            operAtFirstEqual = operArr[operArr.length - 3];
            equalsCount++;
                             };

        if(operAtFirstEqual == "+") result = result + resultAtFirstEqual;
        if(operAtFirstEqual == "-") result = result - resultAtFirstEqual;
        if(operAtFirstEqual == "/") result = result / resultAtFirstEqual;
        if(operAtFirstEqual == "*") result = result * resultAtFirstEqual;
        $('input:text').val(result);
                                                                                     };

        if($(this).text() == "C") {
            result = 0;
            $('input:text').val("");
                                  };

                                    });

  
