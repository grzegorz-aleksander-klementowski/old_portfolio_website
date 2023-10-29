

function coutdown()
{
    var today = new Date();
                
    var hour = today.getHours();        if (hour<10) hour = "0"+hour;
    var minutes = today.getMinutes();   if(minutes<10) minutes = "0"+minutes;
    var seconds = today.getSeconds();   if(seconds<10) seconds = "0"+seconds;
    
    document.getElementById("watch").innerHTML = hour+" : "+minutes+" : "+seconds;
    
    setTimeout("coutdown()", 1000);
}


function changeText()
{
    document.getElementById("text").innerHTML="<b>Ogólnie</b></br></br>Jeśli szukasz produktów IT dla swojego biznesu to trafiłeś idealnie.Chcesz rozwinąć firmę, dostać o niej precyzyjne dane? Wystarczy, że domnie napiszesz.Możesz zamówić profesjonalną stronę internetową w <u>dobrej cenie</u>oraz  otrzymać wykresy prawdopodobnych zysków lub strat na przyszły miesiąc. Przyjmuję także zamówienia na modele imitujące ekonomię  biznesu i sprawdzeniewpływu choćby najmniejszych zmian na twoją firmę. <b>Wystarczy, że do mnie napiszesz!</b>";
}
window.onload=changeText;