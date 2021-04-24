let form = document.querySelector('#locationBox');

let myBtn = document.querySelector('#addLocation');


const myHTML = `<div style="padding-top:40px; padding-left: 1px; border : 0.5px solid;">
<div class="form-group" >
    <select class="form-control" id="exampleFormControlSelect1" style="border: none; border-bottom: 2px solid #617ebd;">
    <option >Please Select Medical Record Type</option>  
    <option>GP Records</option>
      <option>Hospital Records</option>
      <option>X-rays</option>
      <option>Physiotherapy Records</option>
      <option>Walk in Records</option>
      <option>Dental Records</option>
      <option>Counselling Records</option>
      <option>Employment Records</option>
      <option>Miscellaneous Records</option>
    </select>
  </div>
  
  <input type="text" class="form-control" placeholder="Location Name" style = "margin-top:30px; border: none; border-bottom: 2px solid #617ebd;" required>

  <div class="form-group">
      <textarea class="form-control" id="exampleFormControlTextarea1" style = "margin-top:30px; border: none; border-bottom: 2px solid #617ebd;" placeholder="Address" rows="3" required></textarea>
  </div>

  <input type="number" class="form-control" placeholder="Post Code" style = "margin-top:30px; border: none; border-bottom: 2px solid #617ebd;" required>

  <div class="form-group">
      <textarea class="form-control" id="exampleFormControlTextarea1" style = "margin-top:30px; border: none; border-bottom: 2px solid #617ebd;" placeholder="Additional Notes" rows="3" required></textarea>
  </div>



</div>`;

const clicked = console.log(2)

const addBtn = myBtn.addEventListener('click', () => {
  console.log(Array.from(myBtn).length);
  console.log('working');
  form.insertAdjacentHTML("beforeend", myHTML);

})



// getID('addLocation').addEventListener('click', () => {




//     var divC = getID('locationBox');
//     divC.insertAdjacentHTML("beforeend", myHTML);
//     console.log("hello")
// })

