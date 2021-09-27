    function check() {

        var a=0;

        var o1=document.quiz.otazka1.value;
        var o2=document.quiz.otazka2.value;
        var o3=document.quiz.otazka3.value;
        var o4=document.quiz.otazka4.value;
        var o5=document.quiz.otazka5.value;
        var o6=document.quiz.otazka6.value;
        var o7=document.quiz.otazka7.value;
        var o8=document.quiz.otazka8.value;
        var o9=document.quiz.otazka9.value;
        var o10=document.quiz.otazka10.value;

        var vysledek=document.getElementById('vysledek');
        var quiz=document.getElementById("quiz");
        
        if (o1=="116 let") {a=100}
        if (o2=="ABS") {a=a+1000}
        if (o3=="šátek") {a=a=a+5000}
        if (o4=="1855") {a=a=a=a+10000}
        if (o5=="1,3 mil") {a=a=a=a=a+30000}
        if (o6=="Egypťané") {a=a=a=a=a=a+50000}
        if (o7=="abdikuje") {a=a=a=a=a=a=a+100000}
        if (o8=="v pascalech") {a=a=a=a=a=a=a=a+150000}
        if (o9=="hudební nástroj") {a=a=a=a=a=a=a=a=a+200000}
        if (o10=="Francie") {a=a=a=a=a=a=a=a=a=a+453900}

        quiz.style.display="none";
        vysledek.textContent=`${a=a=a=a=a=a=a=a=a=a+" KČ"}`; 
        
        
         
    }