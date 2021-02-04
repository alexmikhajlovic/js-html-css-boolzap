var app = new Vue({
    el: ('#app'),
    data: {
        counter: -1,
        searchInput: '',
        chatInput: '',
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
                isTyping: false,
                messages: [
                    {
                        date: '03:00 AM',
                        text: "Starship SN9 High-Altitude Flight Test coming soon!",
                        status: 'received'
                    },
                    {
                        date: '03:01 AM',
                        text: "Thanks for making the software.",
                        status: 'received'
                    },
                    {
                        date: '04:20 AM',
                        text: "It was an honor to work with you!",
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Steve Jobs',
                avatar: 'img/steve-jobs-jps.jpg',
                visible: true,
                isTyping: false,
                messages: [
                    {
                        date: '09:41 AM',
                        text: "Apple is great, but it's just not the same without me...",
                        status: 'received'
                    },
                    {
                        date: '09:41 AM',
                        text: "I know...",
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Jeff Bezos',
                avatar: 'img/jeff-bezos.jpg',
                visible: true,
                isTyping: false,
                messages: [
                    {
                        date: '10:10 AM',
                        text: "You've become Amazon's new CTO!",
                        status: 'received'
                    },
                    {
                        date: '10:20 AM',
                        text: "Are you sure you haven't got the wrong chat?",
                        status: 'sent'
                    },
                    {
                        date: '16:15 PM',
                        text: "Yes.",
                        status: 'received'
                    },
                    {
                        date: '10:30 AM',
                        text: "Thanks, I'll do my best.",
                        status: 'sent'
                    },
                ],
            },
            {
                name: 'Boolean',
                avatar: 'img/boolean.png',
                visible: true,
                isTyping: false,
                messages: [
                    {
                        date: '15:30 PM',
                        text: "Change your life with a click!",
                        status: 'received'
                    },
                    {
                        date: '15:50 PM',
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
        searchContacts(){
            this.contacts.forEach(element => {
                (element.name.toLowerCase().includes(this.searchInput.toLowerCase())) ? element.visible = true : element.visible = false;
            });
        },
        sendMessage(){
            this.contacts[this.counter].messages.push( {date: moment().format('LT'), text: this.chatInput, status: 'sent'} );
            this.chatInput = '';
            setTimeout(this.receiveMessage,1000);
            this.contacts[this.counter].isTyping = true;
        },
        receiveMessage(){
            this.contacts[this.counter].messages.push( {date: moment().format('LT'), text: 'Ok', status: 'received'} );
            this.contacts[this.counter].isTyping = false;
        }
    },
});