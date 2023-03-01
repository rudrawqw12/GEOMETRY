function triangle(elementId){
    const triangleField =document.getElementById(elementId);
    const triangleFieldString =triangleField.value;
    const triangleFieldValue =parseFloat(triangleFieldString);
    return triangleFieldValue;

}





function textValue(result){
    const calculationResult =document.getElementById('calculation-text');
    calculationResult.innerText = result;
    
    return result;
}


document.getElementById('btn-triangle').addEventListener('click',function(){
   
    const B= triangle('triangleB-field');
    const H=triangle('triangleH-field');

    const multiplication =0.5*B*H;

    textValue(multiplication);





})
document.getElementById('btn-calculate').addEventListener('click',function(){



const calculationValue =document.getElementById('calculation-text');
const calculationValueString =calculationValue.innerText;
const calculationValueTotal =parseFloat(calculationValueString);
const previousCalculationValue =calculationValueTotal/100;
calculationValue.innerText=previousCalculationValue;
})
