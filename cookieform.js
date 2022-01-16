function calculateTotals(){
    let total = 0;
    document.querySelector('input.cookie').forEach(cookie => {
        const boxes = parseInt(cookie.value, 10);
        if(cookie.name === 'Toffeetastic' || cookie.name === 'Girl Scout Smores'){
            total = boxes * 6 + total;
        } else {
            total = boxes * 5 + total;
        }
    })
    document.getElementById('Total').value = total;
}
document.querySelector('input.cookie').forEach(input => {
    input.addEventListener('change', calculateTotals);
});