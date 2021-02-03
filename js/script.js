var app = new Vue({
    el: ('#app'),
    data: {
        search: '',
        counter: 0,
        user: {
            name: 'Alex',
            avatar: 'img/alex.jpg',
            visible: true,
        },
        contacts: [

            {
                name: 'Elon Musk',
                avatar: 'img/elon-musk.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: "Starship SN9 High-Altitude Flight Test coming soon!",
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: "Thanks for making the software.",
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: "It was an honor to work with you!",
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Steve Jobs',
                avatar: 'img/steve-jobs-jps.jpg',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:55',
                        text: "Apple is great, but it's just not the same without me...",
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: "I know...",
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Jeff Bezos',
                avatar: 'img/jeff-bezos.jpg',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: "You've become Amazon's new CTO!",
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: "Are you sure you haven't got the wrong chat?",
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: "Yes.",
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:30:10',
                        text: "Thanks, I'll do my best.",
                        status: 'sent'
                    },
                ],
            },
            {
                name: 'Boolean',
                avatar: 'img/boolean.png',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: "Change your life with a click!",
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: "Already done!",
                        status: 'sent'
                    }
                ],
            },

        ],
    },

    methods: {
        viewChat(index) {
            this.counter = index;
        },
    },
});