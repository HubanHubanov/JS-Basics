function movieProfit(input) {
    let name = input[0];
    let days = Number(input[1]);
    let ticketsPerDay = Number(input[2]);
    let ticketPrice = Number(input[3]);
    let percentCinema = Number(input[4]);

    let income = days * ticketsPerDay * ticketPrice;



console.log(income);
}

movieProfit(["The programmer", "20", "500", "7.50", "7"]);

//1.	Име на филм - текст
//2.	Брой дни - цяло число в диапазона [1… 90]
//3.	Брой билети  - цяло число в диапазона [100… 100000]
//4.	Цена на билет - реално число в диапазона [5.0… 25.0]
//5.	Процент за киното - цяло число в диапазона [5... 35]