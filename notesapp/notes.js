
   let addnotecontainer = document.getElementById("addNoteContainer");
   function showall(){

    addnotecontainer.style.display = "none";

   let allnotes;

   let notes = localStorage.getItem("notes");

     if(notes === null){
      allnotes = [];
     }
     else{
       allnotes = JSON.parse(notes);
     }

       let noteContainer = document.getElementById("notes");
        noteContainer.innerHTML = '';
      allnotes.forEach((note,index) => {
           
          notesshown = `<div class="card" style="width: 18rem;">
          <div class="card-body">
              <h5 class="card-title">${note.title}</h5>
              <p class="card-text">${note.descp}</p>
              <button class="btn btn-warning card_btns" onclick="deleteNote(${index})"><img src="./delete.svg" alt="" class="delete_btn"></button>
              <button class="btn btn-warning card_btns" onclick="editNote(${index})"><img src="./edit.svg" alt="" class="edit_btn"></button>
          </div>
      </div>
          `

          noteContainer.innerHTML = noteContainer.innerHTML + notesshown ;
      });

      

   }

   showall();

   let addbtn = document.getElementById('addNote');

    addbtn.addEventListener("click",add);

      function add(){
         console.log("click");
      

        let allnotes;

        let notes = localStorage.getItem("notes");
     
          if(notes === null){
           allnotes = [];
          }
          else{
            allnotes = JSON.parse(notes);
          }

          let title = document.getElementById("title");
          let disc = document.getElementById("descp");

          let newobj = {
            title : title.value,
            descp : disc.value
          }

         
    if(addbtn.innerText === "Update Note"){
      let editCard = document.querySelector('.card')
      let editIndex = editCard.getAttribute('editIndex') 
      allnotes[editIndex] = newobj
  }else{
      allnotes.push(newobj);
  }

           localStorage.setItem("notes",JSON.stringify(allnotes));

           title.value = ''
          disc.value = ''
          showall();
           
      }

      let navAddNoteBtn = document.getElementById('navAddNote')
navAddNoteBtn.addEventListener('click', function (){
  addnotecontainer.style.display = 'block';
    addbtn.innerText = 'Save'
})


  function deleteNote(indexhai){

    let allnotes;

    let notes = localStorage.getItem("notes");

    allnotes = JSON.parse(notes);

     allnotes.splice(indexhai,1);

     localStorage.setItem("notes",JSON.stringify(allnotes));

     showall();
      
  }

  let search = document.getElementById('search')
search.addEventListener('input', ()=> {
    let inputValue = search.value.toLowerCase()
    let allCards = document.getElementsByClassName('card');

    Array.from(allCards).forEach((ele)=>{
        let cardText = ele.getElementsByTagName('p')[0].innerText

        if(cardText.toLowerCase().includes(inputValue)){
            ele.style.display = 'block';
        }
        else{
            ele.style.display ='none';
        }
    })
})


function editNote(indexhai){
  let allNotes = JSON.parse(localStorage.getItem('notes'));
  addnotecontainer.style.display = 'block';
  addbtn.innerText = 'Update Note'

  let title = document.getElementById('title')
  let descp = document.getElementById('descp');

  title.value = allNotes[indexhai].title
  descp.value = allNotes[indexhai].descp

  let editCard = document.querySelector('.card')
  editCard.setAttribute('editIndex', `${indexhai}`)
  console.log(editCard);
}


   
 


   
  
   


   

   