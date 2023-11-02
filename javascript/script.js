

function coutdown()
{
    var today = new Date();
                
    var hour = today.getHours();        if (hour<10) hour = "0"+hour;
    var minutes = today.getMinutes();   if(minutes<10) minutes = "0"+minutes;
    var seconds = today.getSeconds();   if(seconds<10) seconds = "0"+seconds;
    
    document.getElementById("watch").innerHTML = hour+" : "+minutes+" : "+seconds;
    
    setTimeout("coutdown()", 1000);
}


function appearElements() {
    document.querySelector('header').classList.add('animate');
    document.querySelector('footer').classList.add('animate');
};


/*
var tileElement = document.querySelector('.tile');
tileElement.addEventListener('click', function(event) {

    event.preventDefault();    
     var textElement = document.querySelector('.text p');    
     textElement.innerHTML = "<b>Tworzenie stron WWW</b><br><br>Poszukujesz profesjonalnej strony internetowej, która nie tylko prezentuje Twoją markę, ale także przyciąga i angażuje Twoich klientów? Oferuję kompleksowe usługi projektowania stron internetowych, które łączą estetykę z funkcjonalnością, pozwalając Twojemu biznesowi wybić się w wirtualnym świecie. Każdy projekt jest starannie opracowywany, aby odzwierciedlał Twoją unikalną markę i spełniał Twoje indywidualne potrzeby. Moja oferta obejmuje responsywne strony internetowe, optymalizację SEO oraz spersonalizowane rozwiązania e-commerce, które pomagają przekształcić odwiedzających w lojalnych klientów. Niezależnie od tego, czy zaczynasz od podstaw, czy potrzebujesz odświeżenia swojej obecnej strony, jestem tu, aby pomóc Ci osiągnąć sukces w środowisku online.";    
});
*/

document.addEventListener("DOMContentLoaded", function() {
    var tiles = document.querySelectorAll('.tiles .tile');
    var textElement = document.querySelector('.text p');
    
    tiles.forEach(function(tile, index) {
        tile.addEventListener('click', function(event) {
            event.preventDefault();
            switch(index) {
                case 0:
                    textElement.innerHTML = '<b>Microsoft Office</b><br><br>Czy praca z arkuszami kalkulacyjnymi staje się czasochłonna i skomplikowana? Oferuję specjalistyczne usługi programowania makr, które przekształcą Twój proces pracy w pakiecie Microsoft Office, szczególnie w Excelu, w gładkie i zautomatyzowane doświadczenie. Moje rozwiązania są skrojone na miarę, aby spełniać Twoje konkretne potrzeby, usprawniając codzienne zadania i pomagając Ci skoncentrować się na tym, co naprawdę ważne. Automatyzacja Excela pozwoli Ci zaoszczędzić czas, zminimalizować błędy i uzyskać lepszą kontrolę nad Twoimi danymi. Niezależnie od skomplikowania Twoich arkuszy kalkulacyjnych, mam doświadczenie i umiejętności, aby zrealizować Twoje cele i przekształcić sposób, w jaki zarządzasz swoimi danymi. Zainwestuj w automatyzację, która naprawdę się opłaca, i pozwól sobie na osiągnięcie wyższego poziomu wydajności i dokładności w swojej codziennej pracy z danymi.';
                    break;
                case 1:
                    textElement.innerHTML = '<b>Tworzenie stron WWW</b><br><br>Poszukujesz profesjonalnej strony internetowej, która nie tylko prezentuje Twoją markę, ale także przyciąga i angażuje Twoich klientów? Oferuję kompleksowe usługi projektowania stron internetowych, które łączą estetykę z funkcjonalnością, pozwalając Twojemu biznesowi wybić się w wirtualnym świecie. Każdy projekt jest starannie opracowywany, aby odzwierciedlał Twoją unikalną markę i spełniał Twoje indywidualne potrzeby. Moja oferta obejmuje responsywne strony internetowe, optymalizację SEO oraz spersonalizowane rozwiązania e-commerce, które pomagają przekształcić odwiedzających w lojalnych klientów. Niezależnie od tego, czy zaczynasz od podstaw, czy potrzebujesz odświeżenia swojej obecnej strony, jestem tu, aby pomóc Ci osiągnąć sukces w środowisku online';
                    break;
                case 2:
                    textElement.innerHTML = '<b>Bazy Danych</b><br><br>Poszukujesz eksperta od baz danych, który nie tylko zrozumie Twoje potrzeby, ale także zrealizuje Twoją wizję z najwyższą precyzją? Mam dla Ciebie rozwiązanie. Specjalizuję się w projektowaniu i implementacji zaawansowanych baz danych w SQL, które stanowią solidne fundamenty dla Twojego biznesu. Moje umiejętności obejmują programowanie logowań, profesjonalne "Error Handling", tworzenie skomplikowanych tabel z wykorzystaniem różnorodnych modeli oraz opracowywanie przejrzystych diagramów, które pomagają zrozumieć strukturę i przepływ danych. Oferuję spersonalizowane rozwiązania, które zapewniają niezawodność, wydajność i skalowalność, umożliwiając Twojemu biznesowi szybkie dostosowanie się do zmieniających się wymagań. Z moją pomocą, Twoje dane będą zorganizowane, bezpieczne i łatwo dostępne, co pozwoli Ci skoncentrować się na tym, co najważniejsze - rozwoju Twojego przedsiębiorstwa. Skontaktuj się ze mną, a wspólnie opracujemy bazę danych, która spełni wszystkie Twoje oczekiwania.';
                    break;
                case 3:
                    textElement.innerHTML = '<b>Księgowość i statystyka</b><br><br>Rozwiązania księgowe są sercem każdej firmy, a ich właściwa konfiguracja jest kluczem do zrozumienia finansów i podejmowania świadomych decyzji biznesowych. Specjalizuję się w tworzeniu i modyfikowaniu programów do księgowości za pomocą makr w Excelu, dostosowując je precyzyjnie do Twoich unikalnych potrzeb. Moja głęboka znajomość księgowości, połączona z zaawansowanymi umiejętnościami programistycznymi, umożliwia mi oferowanie rozwiązań, które są nie tylko funkcjonalne, ale także intuicyjne i łatwe w obsłudze. Co więcej, zastosowanie odpowiednich narzędzi statystycznych pozwoli Ci na głęboką analizę Twojej firmy, zasobów, sprzedaży oraz na stworzenie przewidywań na przyszłe lata. Oferuję rozwiązania, które nie tylko zautomatyzują i usprawnią Twoje procesy księgowe, ale także dostarczą wartościowych wskazówek, umożliwiając Ci skoncentrowanie się na strategicznym rozwoju Twojego biznesu. Skontaktuj się ze mną, aby razem opracować narzędzia księgowe, które zapewnią Ci przewagę konkurencyjną i przyczynią się do sukcesu Twojego przedsiębiorstwa.';
                    break;
                case 4:
                    textElement.innerHTML = '<b>Modelowanie biznesowe</b><br><br>Sukces w biznesie jest wynikiem dobrze zorganizowanych, efektywnych procesów, które są dobrze zrozumiane i zoptymalizowane. Jako ekspert w dziedzinie modelowania procesów biznesowych (BPM), oferuję usługi w zakresie opracowywania precyzyjnych modeli Twoich operacji biznesowych, które pomogą Ci lepiej zrozumieć, jak działa Twoja firma na poziomie operacyjnym. Moje modele biznesowe są skonstruowane w sposób klarowny i zrozumiały, umożliwiając Ci identyfikację obszarów do poprawy, zminimalizowanie marnotrawstwa i maksymalizację efektywności. Korzystając z zaawansowanych narzędzi BPM, jestem w stanie przedstawić procesy Twojej firmy w sposób wizualny, co ułatwia analizę, udoskonalenie i komunikację między zespołami. Moje podejście obejmuje również opracowywanie rekomendacji dotyczących optymalizacji procesów, co może prowadzić do znaczących oszczędności kosztów i poprawy ogólnej wydajności Twojego przedsiębiorstwa. Skontaktuj się ze mną, aby dowiedzieć się, jak profesjonalne modelowanie procesów biznesowych może przyczynić się do osiągnięcia Twoich celów biznesowych i zbudowania silniejszej, bardziej zrównoważonej organizacji.';
                    break;
            }
        });
    });
});





function initializeCustomCursor() {
    var cursorElement = document.getElementById('cursor');

    document.addEventListener('mousemove', function(event) {
        var x = event.clientX;
        var y = event.clientY;

        cursorElement.style.left = x + 'px';
        cursorElement.style.top = y + 'px';
    });
}



function onLoadWindows() {
    coutdown();
    appearElements();
    initializeCustomCursor();
}


window.onload =  onLoadWindows;