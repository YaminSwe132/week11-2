var new_task = document.getElementById('new-task');
var new_task_date = document.getElementById('new-task-date');

var addBtn = document.getElementById('addbtn');

var upcoming_task = document.getElementById('upcoming-tasks');
var due_task = document.getElementById('due-tasks');
var priorites_task = document.getElementById('priorites-tasks');


addBtn.onclick = addItem;


function addItem(){
    var new_taskValue = new_task.value;
    var new_task_dateValue = new_task_date.value;
    if(new_taskValue.length>0 && new_task_dateValue.length>0){
        var checkbox = document.createElement('input');
        checkbox.type= "checkbox";

       // checkbox.onchange = change ;
        var li = document.createElement('li');

        var label1 = document.createElement('label');
        label1.setAttribute('id','label1');
        label1.innerHTML = new_taskValue;
        var label2 = document.createElement('label');
        label2.setAttribute('id','label2');
        label2.innerHTML = new_task_dateValue;

        var textbox1 = document.createElement('input');
        textbox1.type="text";
        textbox1.setAttribute('id','textbox1');
        var textbox2 = document.createElement('input');
        textbox2.type = "text";
        textbox2.setAttribute('id','textbox2');

        li.appendChild(checkbox);
        li.appendChild(label1);
        li.appendChild(label2);
        li.appendChild(textbox1);
        li.appendChild(textbox2);

        //var editBtn = document.createElement('button');
         var deleteBtn = document.createElement('button');
         //editBtn.innerText ="Edit";
         deleteBtn.innerText ="Delete";

         //editBtn.classList.add('edit');
         deleteBtn.classList.add('delete');

         //editBtn.onclick = editTask;
         deleteBtn.onclick = deleteTask;


         //li.appendChild(editBtn);
         li.appendChild(deleteBtn);

        //upcoming_task.appendChild(li);
       

        var today = new Date();
        var date = new Date(new_task_dateValue);
        //console.log(date);
       
        console.log(date.getTime());
        console.log(today.getTime());

        if(date.getTime()<today.getTime() ){
            console.log('due');
            var p = document.createElement('p');
            dueDate = (today.getTime()-date.getTime())/(24*60*60*1000);
            p.innerHTML = "You ast "+Math.floor(dueDate)+" days";
            li.appendChild(p);
            console.log((today.getTime()-date.getTime())/(24*60*60*1000));
            due_task.appendChild(li);
        }else{
            var p = document.createElement('p');
            dueDate = (today.getTime()-date.getTime())/(24*60*60*1000);
            p.innerHTML = " You have to "+Math.floor(Math.abs(dueDate))+" days";
            li.appendChild(p);
            upcoming_task.appendChild(li);
            checkbox.onchange = change ;
        }

        
        new_task.value = "";
        new_task_date.value = "";
    }


    
    function deleteTask(){
        var ul = this.parentNode.parentNode;
        var li = this.parentNode;
        ul.removeChild(li);
    }

    function change(){
        if(this.checked){
            console.log("Checked");
            priorites_task.appendChild(li);
        }else{
             console.log("Unchecked");
            
        }
    
}
}