let form = document.querySelector('#locationBox');

let myBtn = document.querySelector('#addLocation');


<<<<<<< HEAD
const myHTML = `<div style="padding-top:40px; ">
<div class="form-group" >
    <select class="form-control" id="exampleFormControlSelect1" style="border: none; border-bottom: 2px solid #00b1ff; font-size: 20px; opacity: 0.8;">
=======
const myHTML = `<div style="padding-top:40px; padding-left: 1px; border : 0.5px solid;">
<div class="form-group" >
    <select class="form-control" id="exampleFormControlSelect1" style="border: none; border-bottom: 2px solid #617ebd;">
>>>>>>> 95c7f41dd890b78dc228ba2dfc834bda2ee32666
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
  
<<<<<<< HEAD
  <input type="text" class="form-control" placeholder="Location Name" style = "margin-top:30px; border: none; border-bottom: 2px solid #00b1ff; opacity: 0.6;" required>

  <div class="form-group">
      <textarea class="form-control" id="exampleFormControlTextarea1" style = "margin-top:30px; border: none; border-bottom: 2px solid #00b1ff; opacity: 0.6;" placeholder="Address" rows="3" required></textarea>
  </div>

  <div class="row">
            <div class="col-md-6">
              <p> </p>
            </div>
          <div class="col-md-6">
            <div style="margin-right: px;">
              <input type="number" class="form-control" placeholder="Postcode" style = "margin-top:30px; border: none; border-bottom: 2px solid #00b1ff; margin-right: 30px; opacity: 0.6;" required>
            </div>
         
          </div>
        </div>

  <div class="form-group">
      <textarea class="form-control" id="exampleFormControlTextarea1" style = "margin-top:30px; border: none; border-bottom: 2px solid #00b1ff; opacity: 0.6;" placeholder="Additional Notes" rows="3" required></textarea>
  </div>
  
  <div class="form-group">
  <button class="btn btn-info" style= "background-color: #00b1ff;" >Delete</button>
  </div>


</div>`;

const clicked = console.log(2)

=======
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

>>>>>>> 95c7f41dd890b78dc228ba2dfc834bda2ee32666
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

