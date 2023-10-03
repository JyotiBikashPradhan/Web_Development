const addbtn = document.querySelector("#addbtn")
const main = document.querySelector("#main")


const saveNotes = () =>   {
    const notes =document.querySelectorAll(".note textarea");
    const data=[];
    notes.forEach(
        (note) => {
            data.push(note.value)
        }
    )
    // console.log(data)
     if(data.length===0){
        localStorage.removeItem("notes")
     }
     else{ 
         localStorage.setItem("notes", JSON.stringify(data))
     }

}

addbtn.addEventListener(
    "click",
    function () {
        addNote()
    }
)

{/* <div class="note">
    <div class="tool">
        <i class="fa-solid fa-trash"></i>
        <i class="fa-solid fa-floppy-disk"></i>  
    </div>
    <textarea></textarea>
</div> --> */}

const addNote = (text ="") => {
    const note = document.createElement("div")
    note.classList.add("note")
    note.innerHTML = ` 
    <div class="tool">
        <i class=" trash bi bi-trash-fill"></i>
        <i class=" save bi bi-save-fill"></i>
    </div>
    <textarea>${text}</textarea>
    
    `;

    note. querySelector(".trash").addEventListener (
        "click", 
        function() {
            note.remove()
            saveNotes()
        }
    )
    note. querySelector(".save").addEventListener (
        "click", 
        function() {
            saveNotes()
        }
    )
    note.querySelector("textarea" ).addEventListener(
        "focusout",
        function(){
            saveNotes()
        }
    )
    main.appendChild(note);
    saveNotes()
}

(
    function()  {
        const lsNotes = JSON.parse(localStorage.getItem("notes"));
        if (lsNotes===null){
            addNote()
        }
        else{
            lsNotes.forEach(
                (lsNote) => {
                    addNote(lsNote)
                }
            )

        }
    }
)()

function changeColor(e) {
    // let bg = document.querySelector('.bg');
    let selectColor = e.value;
    document.getElementsByTagName('BODY')
    [0].style.backgroundColor = selectColor;
}


