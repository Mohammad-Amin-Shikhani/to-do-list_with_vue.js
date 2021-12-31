var app = new Vue({
    el : "#app",
    data : {
        tasks : [],
        new_task : ''
    },
    methods : {
        add_task : function() {
            if (this.new_task == '') {
                return false;
            } else {
                this.tasks.push({description : this.new_task, finished : false});
                this.new_task = ''
            }
        },
        remove_task : function(index) {
            this.tasks.splice(index, 1)
        },
        finish_task : function(index) {
            this.tasks[index].finished = this.tasks[index].finished ? false : true;
        }
    },
    computed : {
        completed_tasks (){
            return this.tasks.filter(el =>  el.finished)
        },
        uncompleted_tasks (){
            return this.tasks.filter(el =>  !el.finished)
        }
    }
})