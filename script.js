let increment= document.querySelector('.increment');
        let decrement= document.querySelector('.decrement');
        let counterValue= document.querySelector('.counter');

        let count=7;

        increment.addEventListener("click", ()=>{
            if (count <50) {
                count++;
                counterValue.innerHTML = count;
            }
        });
        decrement.addEventListener("click", ()=>{
            if (count > 0) {
                count--;
                counterValue.innerHTML = count;
            }
        });