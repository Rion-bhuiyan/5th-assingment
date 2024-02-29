var mySeats = {};
var totalSeatPrice = 0;


var seatRest1st = document.querySelector('.seatRest1st');


document.addEventListener('click', function (event) {
    if (event.target.classList.contains('seat-btn') && !seatLimit(event.target.id)) {
        // 1. Return which id is clicked
        var myCid = event.target.id;

        // 2. No one can click more than twice an id and total id clicked not more than 4
        if (mySeats[myCid] === undefined) {
            mySeats[myCid] = 1;
        } else {
            mySeats[myCid]++;
        }

      
        event.target.style.backgroundColor = 'green';

       

        var htmlContent = `
        <div class="flex flex-row justify-between">
            <div>
                <p class="font-semibold p-3 rounded-lg">${myCid}</p>
            </div>
            <div>
                <p class="font-semibold p-3 rounded-lg">Economic</p>
            </div>
            <div>
                <p class="font-semibold p-3 rounded-lg">550</p>
            </div>
        </div>
    `;

        const sectionDress= document.createElement('div');
        sectionDress.innerHTML= htmlContent;
        const parent = document.getElementById("selecteconemy");
        parent.appendChild(sectionDress);

    

 

       
        totalSeatPrice += 550;

   

        seatRest1st.textContent = parseInt(seatRest1st.textContent) - 1;
        


         document.getElementById("total-result").innerText = totalSeatPrice;
        
         document.getElementById("grandTotal").innerText = totalSeatPrice;
        
    
    
    }
});

function seatLimit(seatId) {
    return Object.values(mySeats).reduce((myAcc, myScount) => myAcc + myScount, 0) >= 4 || mySeats[seatId] >= 2;
}