function winningTicket(tickets) {
    let countOfTickets = tickets.split(', ')
    countOfTickets.forEach(ticket => {
        ticket = ticket.trim();
        if (ticket.length != 20) return console.log(`invalid ticket`)

        let winningTicketPattern = /(?<symbols>[@#$^]+)/gm

        let matchTicket = ticket.match(winningTicketPattern)

        if (!matchTicket) return console.log(`ticket "${ticket}" - no match`);

        let byTheLessSymbols = 0
        if (matchTicket[0].length > 10) byTheLessSymbols = matchTicket[0].length / 2
        else byTheLessSymbols = matchTicket[0].length

        let symbol = ''
        for (let i = 0; i < matchTicket.length; i++) {
            symbol = matchTicket[0][0]


            if (byTheLessSymbols > matchTicket[i].length) byTheLessSymbols = matchTicket[i].length;
        }
        if (byTheLessSymbols < 6) return console.log('invalid ticket')

        if (byTheLessSymbols === 10) return console.log(`ticket "${ticket}" - ${byTheLessSymbols}${matchTicket[0][0]} Jackpot!`)
        else {
            return console.log(`ticket "${ticket}" - ${byTheLessSymbols}${matchTicket[0][0]}`)
        }
    });
}
winningTicket('$$$$$$$$$$$$$$$$$$$$   , aabb,     th@@@@@@#eem@@@@@#ey'
)

winningTicket('validticketnomatch:)')