const { createApp } = Vue;

createApp({
    data(){
        return{
            todo_list: [
                {
                    text: 'Comprare latte',
                    done: false
                },
                {
                    text: 'Annullare abbonamento Premium di Spotify',
                    done: false
                },
                {
                    text: 'Pulire acquario',
                    done: false
                },
                {
                    text: 'Chiamare Consuelo',
                    done: false
                },
                {
                    text: 'Portare fuori il cane',
                    done: false
                }
            ]
        }
    },
    methods: {
        
    }
}).mount('#app');

