const getID = id => document.getElementById(id);



getID('addLocation').addEventListener('click', () => {

    const myHTML = `<div id="locationBox">
    <div class="form-group">
        <select class="form-control" id="exampleFormControlSelect1" style="border: none; border-bottom: 2px solid;">
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
      
      <input type="text" class="form-control" placeholder="Location Name" style = "margin-top:30px; border: none; border-bottom: 2px solid;" required>

      <div class="form-group">
          <textarea class="form-control" id="exampleFormControlTextarea1" style = "margin-top:30px; border: none; border-bottom: 2px solid;" placeholder="Address" rows="3" required></textarea>
      </div>

      <input type="number" class="form-control" placeholder="Post Code" style = "margin-top:30px; border: none; border-bottom: 2px solid;" required>

      <div class="form-group">
          <textarea class="form-control" id="exampleFormControlTextarea1" style = "margin-top:30px; border: none; border-bottom: 2px solid;" placeholder="Additional Notes" rows="3" required></textarea>
      </div>

      <button type="button" class="btn btn-primary" id="addLocation" style="background-color : #27b8d4; float: right; margin : 10px;">Add Location</button>


</div>`

    var divC = getID('locationBox');
    divC.insertAdjacentHTML("beforeend", myHTML);
    console.log("hello")
})