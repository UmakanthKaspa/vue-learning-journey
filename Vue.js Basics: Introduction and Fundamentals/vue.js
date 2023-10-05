const app = Vue.createApp({
    data() {
        return {
            apptitle: "My Learning Journey",
            description: "For the past few months, I've been telling myself I'll start learning Vue.js 'tomorrow.' Well, 'tomorrow' finally came, and I'm excited to embark on this Vue-tiful journey! 🚀" ,
            title: "My Dynamic Title",
            number: 0,
            showMessage: true,
            tasks: [],
            x:0  ,y:0,
            productImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            productAlt: "Product Image",
            productName: "Awesome Product",
            productDescription: "This is the most awesome product you've ever seen!",
            productPrice: "$99.99",
            isOutOfStock: true,
            buyButtonText: "Buy Now",
            message: "Click the button to toggle classes!",
            isActive: true,
            isError: false,
            firstName: 'John',
            lastName: 'Doe',
            userMessage: ''

        };
    },
    mounted() {
        setTimeout(() => {
            this.description = "From 'tomorrow' to today, I'm officially on my Vue-tiful journey! 😄";
        }, 2000); 
    },
     methods: {
        changeTitle(newTitle) {
            this.title = newTitle;
        },
        increaseNumber() {
            this.number++;
        },
        decreaseNumber() {
            if (this.number > 0) {
                this.number--;
            }
        },
        toggleMessage() {
            this.showMessage = !this.showMessage;
        },
        addTask() {
            const taskInput = this.$refs.taskInput;

            if (taskInput.value.trim() !== "") {
                this.tasks.push(taskInput.value);
                taskInput.value = ""; 
            }
        },

        removeTask(index) {
            this.tasks.splice(index, 1);
        },
        handleEvents(e, data){
            console.log(e)
            console.log(e.type)
            console.log(data)
            if (e.type === "mouseover") {
                alert("Mouse entered the box!");
            }
            if (e.type === "mouseleave") {
                alert("Mouse left the box!");
            }
            if (e.type === "dblclick") {
                alert("Double-clicked the box!");
            }
        },
        handleMousemove(e){
        this.x=e.offsetX
        this.y=e.offsetY
        },
        toggleClasses() {
            this.isActive = !this.isActive;
            this.isError = !this.isError;
        }
    },
    computed: {
        fullName() {
            return `${this.firstName} ${this.lastName}`;
        }
    }
});

app.mount('#app');
