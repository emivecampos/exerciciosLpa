let invoice = {
    name: "Neymar",
    age: 34,
    golsPorTime: {
        0: ["PSG" , 102],
        1: ["Barcelona" , 105],
        2: ["Santos" , 270],
        3: ["Seleção Brasileira" , 77]
    },
    
}

generateInvoice(invoice)

function generateInvoice(invoice) {
    console.log("Nome: " + invoice.name);
    console.log("Idade: " + invoice.age);
    console.log("Gols por time:");
    for (let time in invoice.golsPorTime) {
        console.log("- " + invoice.golsPorTime[time][0] + ": " + invoice.golsPorTime[time][1] + " gols");
    }
}
