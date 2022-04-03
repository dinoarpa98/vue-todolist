var app = new Vue({
    el: '#root',

    data: {
        newTodo: '',
        todos: [{
                text: 'text',
                done: false
            },
            {
                text: 'text',
                done: false
            },
            {
                text: 'text',
                done: false
            },
        ],

    },

   
    methods: {
        removeTodo: function (todoIndex) {
            this.todos.splice(todoIndex, 1);
        },

        addTodo: function () {
            let objTodo = {
                text: this.newTodo,
                done: false,
            }

            if (!this.newTodo == '') {
                this.todos.push(objTodo);
                this.newTodo = '';
            }

        },

        done: function (element) {

            if (element.done == true) {
                element.done = false
            } else {
                element.done = true
            }
        }

    }
});