$(document).ready(function(){

    $('#adicionar').click(function(e) {
        e.preventDefault();
        const tarefa = $('#tarefas').focus().val();
        if(tarefa){        
            $('#tarefas').val('');
            $('<li>')
                .text(tarefa)
                .appendTo('#lista')
                .click(() => $(event.target).toggleClass('riscado'));
        }
    })
    })