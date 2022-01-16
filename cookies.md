---
title: COOKIES!!!!!!
layout: default
---

<form action="https://formspree.io/f/mpzbqdjq" method="POST">
Do you want cookies?
{% assign cookies = "Thin Mints,Samoas,Adventurefuls,Tagalongs,Trefoils,Do-Si-Dos,Girl Scout Smores,Toffeetastic,Lemon-ups" | split: "," %}
{% for cookie in cookies %}
<div>
<label for="{{cookie}}">{{cookie}}</label>
<input type="number" min="0" id="{{cookie}}" name="{{cookie}}">
</div>
{% endfor %}
<input type="submit">
</form>