const form = document.querySelector('form')
//const weight = parseInt(document.querySelector('#weight').value) 
//*this line usefull for give empty value.

form.addEventListener('submit', function(e){
    e.preventDefault()

    const name = document.querySelector('#name').value
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result');
    const glucose = parseInt(document.querySelector('#glucose').value)
    const result2 = document.querySelector('#result2')

    if(height === '' || height < 0 || isNaN(height) ||
       weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please ${name} give valid height/weight ${height}`;
    // } else if (weight === '' || weight < 0 || isNaN(weight)){
    //     result.innerHTML = `Please ${name} give valid weight ${weight}`
    }else if (name === ''){
        result.innerHTML = `Please give correct name`;
    }
     else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if(bmi <= 18.6 ){
            result.innerHTML = `<span>${name}, You are under-weight (BMI: ${bmi})</span>`;
        }else if(bmi >18.6 || bmi <= 24.9){
            result.innerHTML = `<span>${name}, Your BMI is normal-range (BMI: ${bmi})</span>`;
        }if (bmi > 24.9){
            result.innerHTML = `<span>${name}, You are over-weight (BMI: ${bmi})`;
        } 
    }
    if (glucose === '' || isNaN(glucose) || glucose < 0) {
        result2.innerHTML = `Please ${name} give valid range ${glucose}`;
    }else if (name === ''){
        result2.innerHTML = `Please give a valid name ${name}`;
    }else {
        const hbA1c = ((glucose +46.7) / 28.7).toFixed(2);
        if (hbA1c < 5.7) {
            result2.innerHTML = `<span>And you are Non-diabetic (HbA1c(%): ${hbA1c})</span>`;
        }else if (hbA1c => 5.7 || hbA1c < 6.4) {
            result2.innerHTML = `<span>And you are at High-risk group (HbA1c(%): ${hbA1c})</span>`;
        }else if (hbA1c > 6.4){
            result.innerHTML = `<span>And you are Diabetic (Hba1c(%): ${hbA1c})`
        } 
    }
})