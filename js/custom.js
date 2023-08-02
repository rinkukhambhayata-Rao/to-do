$(document).on('click','#addTask',function(){
    var taskInput = $('#taskInput').val();
    if(taskInput != ''){
        var total_tasks = $('#toDoList').find('label').length;
        var next_task = total_tasks + 1;
        if(total_tasks > 0){
            $('#toDoList').append('<div class="form-check my-task"><input type="checkbox" class="form-check-input task" id="taskInpt_'+next_task+'" data-current-task="'+next_task+'" name="task_'+next_task+'"><label for="taskInput_'+next_task+'" class="form-check-label" id="taskName_'+next_task+'">'+taskInput+'</label><div>');
        }else{
            $('#toDoList').html('<div class="form-check my-task"><input type="checkbox" class="form-check-input task" id="taskInpt_'+next_task+'" data-current-task="'+next_task+'" name="task_'+next_task+'"><label for="taskInput_'+next_task+'" class="form-check-label" id="taskName_'+next_task+'">'+taskInput+'</label></div>');
        }
        $('#taskInput').val('');
    }else{
        alert("Please add some input to proceed");
    }
});

$(document).on('click','.task',function(){
    var isChecked = $(this).is(':checked');
    var current_task = $(this).data('current-task');
    var taskName = $('#taskName_'+current_task).text();
    if(isChecked){
        $('#taskName_'+current_task).html('<strike>'+taskName+'</strike>');
    }else{
        $('#taskName_'+current_task).html(taskName);
    }
});