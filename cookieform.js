function calculateTotals(){
    let total = 0;
    document.querySelectorAll('input.cookie').forEach(cookie => {
        if(cookie.value){
            const boxes = parseInt(cookie.value, 10);
                total = boxes * 6 + total;
            }
        }
    });
    document.getElementById('Total').value = total;
}
document.querySelectorAll('input.cookie').forEach(input => {
    input.addEventListener('change', calculateTotals);
});
