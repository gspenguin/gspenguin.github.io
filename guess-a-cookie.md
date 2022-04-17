---
title: Guess a Cookie
layout: default
---

<select id="guess"></select>
<button id="do">Guess</button>


<script>
    // list of cookies
    const cookies = ['Thin Mints','Samoas','Adventurefuls','Tagalongs','Trefoils','Do-Si-Dos','Girl Scout Smores','Toffeetastic','Lemon-ups'];
    document.getElementById('guess').innerHTML = '<option value="">Select a Cookie</option>'+cookies.map(c=>`<option>${c}</option>`).join('\n');

    // get a random number between 0 and the length of the list of cookies
    let num = Math.round(Math.random(0, cookies.length) * 10)
    while(num > (cookies.length - 1)){
        num = Math.round(Math.random(0, cookies.length) * 10)
    }

    const button = document.getElementById('do');
    button.addEventListener('click',()=> {
        const guess = document.getElementById('guess').value;
        if (cookies[num] === guess) {
            alert('HOORAY!!!!!');
            window.location.reload();
        } else {
            alert('Bummer!')
        }
    });
    
</script>
