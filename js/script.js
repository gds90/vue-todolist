const { createApp } = Vue;

createApp({
    data(){
        return{
            text_todo: '',
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
        //  FUNZIONE PER RIMUOVERE UN TASK
        removeTodo(index){
            this.todo_list.splice(index,1)
        },
        // FUNZIONE PER AGGIUNGERE UN TASK
        addTodo(){
            let obj = {
                text: this.text_todo,
                done: false
            }
            
            this.todo_list.push(obj);
            this.text_todo='';
        }
    }
}).mount('#app');

