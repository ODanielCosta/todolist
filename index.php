<?php
    include_once 'header.php';
?>
    <body>
        <br>

        <main>
            <button class="clear-all" onclick="clearItems()">Limpar tarefas</button>
        
            <br>

            <div class="semana">

                <div class="box segunda">
                    <p class="weekday-title">Segunda</p>
                    <input type="text" class="taskInput" id="taskInput1" placeholder="Insira a sua tarefa" style="display:none">
                    <ul class="taskList" id="taskList1"></ul>
                </div>

                <div class="box terca">
                    <p class="weekday-title">Terça</p>
                    <input type="text" class="taskInput" id="taskInput2" placeholder="Insira a sua tarefa" style="display:none">
                    <ul class="taskList" id="taskList2"></ul>
                </div>

                <div class="box quarta">
                    <p class="weekday-title">Quarta</p>
                    <input type="text" class="taskInput" id="taskInput3" placeholder="Insira a sua tarefa" style="display:none">
                    <ul class="taskList" id="taskList3"></ul>
                </div>

                <div class="box quinta">
                    <p class="weekday-title">Quinta</p>
                    <input type="text" class="taskInput" id="taskInput4" placeholder="Insira a sua tarefa" style="display:none">
                    <ul class="taskList" id="taskList4"></ul>
                </div>

                <div class="box sexta">
                    <p class="weekday-title">Sexta</p>
                    <input type="text" class="taskInput" id="taskInput5" placeholder="Insira a sua tarefa" style="display:none">
                    <ul class="taskList" id="taskList5"></ul>
                </div>

                <div class="box sabado">
                    <p class="weekday-title">Sabado</p>
                    <input type="text" class="taskInput" id="taskInput6" placeholder="Insira a sua tarefa" style="display:none">
                    <ul class="taskList" id="taskList6"></ul>
                </div>

                <div class="box domingo">
                    <p class="weekday-title">Domingo</p>
                    <input type="text" class="taskInput" id="taskInput7" placeholder="Insira a sua tarefa" style="display:none">
                    <ul class="taskList" id="taskList7"></ul>
                </div>

            </div>

            <hr style="margin:60px 20px">

            <div class="achivements">
                <p class="achiev-title">Progresso</p>
            </div>


        </main>
    </body>
    

<?php
    include_once 'footer.php';
?>