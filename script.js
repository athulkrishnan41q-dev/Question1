function Add(){
    const task={
        no:taskno.value,
        title:titl.value,
        description:desc.value,
    }


    if(task.no in sessionStorage){
        alert("Task already exist")
    }
    else{
        sessionStorage.setItem(task.no,JSON.stringify(task))
        alert("Task added successfully")
        taskno.value=""
        titl.value=""
        desc.value=""
    }
}


function View(){

    const no=viewno.value;
    const task=JSON.parse(sessionStorage.getItem(no))
    result.innerHTML=`
    <div class="card">
  <div class="card-body">
    <h5 class="card-title">Tasks</h5>
    <h6>title:${task.title}</h6>
    <p>description:${task.description}</p>

   <button onclick="update(this)" type="button" class="btn btn-info" data-mdb-ripple-init>Update</button>
   <button onclick="deleted(this)" type="button" class="btn btn-danger" data-mdb-ripple-init>Delete</button>
  </div>
</div>
`;
viewno.value="";
}



function update(button){
    let all = button.parentNode;
    let head = all.querySelector("h6");
    let para = all.querySelector("p");
    // console.log(head);
    let currenttext1 = head.textContent;
    let currenttext2 = para.textContent;
    let newText1 = prompt("Enter title",currenttext1);
    let newText2 = prompt("Enter description",currenttext2);

    if(newText1 !==null && newText1.trim() !== ""){
        head.textContent = newText1;
    }
    if(newText2 !==null && newText2.trim() !== ""){
        para.textContent = newText2;
    }
    
}


function deleted(button){
    let all = button.closest("div")
    all.remove()
}