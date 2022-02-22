showTask();
let taskitem = document.getElementById("task")
let addbutton = document.getElementById("addbtn")
addbutton.addEventListener("click",function(){
    taskitemval = taskitem.value;
    if(taskitemval.trim()!=0){

        let webtask=localStorage.getItem("localtask");
        if(webtask == null){
            taskObj=[];
        }
        else{
            taskObj=JSON.parse(webtask);
        }
        taskObj.push(taskitemval)
        localStorage.setItem("localtask",JSON.stringify(taskObj));
        taskitem.value="";
    }
    showTask();
})
    // let webtask = localStorage.getItem("localtask")
    // if(webtask == null){
    //     taskObj = [];
    // }
    // else{
    //     taskObj = JSON.parse(webtask);
    // }
    // if (taskitemval.trim()!=0){
    //     taskObj.push(taskitemval);
    //     localStorage.setItem("localtask",JSON.stringify(taskObj));
    //     taskitem.value="";

    // }
    // showTask();
    // taskitem.value="";
     
// })
function showTask(){
    let webtask = localStorage.getItem("localtask")
    if(webtask == null){
        taskObj = [];
    }
    else{
        taskObj = JSON.parse(webtask);
    }

    let html =""
    let addedtaskList = document.getElementById("addedtaskList")
    taskObj.forEach((item,index) => {
        html += `<tr>
        <th scope="row">${index+1}</th>
        <td>${item}</td>
        <td><button type="button" class="text-primary" onclick="edittask(${index})"><i class="fa fa-edit"></i>Edit</button></td>
         <td><button type="button" class="text-danger" onclick="deletetask(${index})"><i class="fa fa-trash"></i>Delete</button></td>
        </tr>`;

    });
    addedtaskList.innerHTML = html;

}
//editing task
function edittask(index){
    let saveindex = document.getElementById("saveindex");
    let add = document.getElementById("addbtn");
    let update = document.getElementById("updatebtn");
    saveindex.value = index;
     let webtask = localStorage.getItem("localtask");
     let taskObj = JSON.parse(webtask);
    taskitem.value = taskObj[index];
    add.style.display="none";
    update.style.display="block";

}
let update = document.getElementById("updatebtn");
update.addEventListener("click",function(){
    let add = document.getElementById("addbtn");
    let update = document.getElementById("updatebtn");
    let webtask = localStorage.getItem("localtask")
    let taskObj = JSON.parse(webtask);
    let saveindex = document.getElementById("saveindex").value;
    taskObj[saveindex] = taskitem.value;
    localStorage.setItem("localtask",JSON.stringify(taskObj));
    taskitem.value="";
    add.style.display="block";
    update.style.display="none";
    showTask();

});
//deleting
function deletetask(index){
    let webtask = localStorage.getItem("localtask")
    let taskObj = JSON.parse(webtask);
    taskObj.splice(index,1);
    localStorage.setItem("localtask",JSON.stringify(taskObj));
    showTask();

}