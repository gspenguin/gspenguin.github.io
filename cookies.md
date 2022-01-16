---
title: COOKIES!!!!!!
layout: default
---

<form>
Do you want cookies?
{% assign cookies = "Thin Mints,Samoas,Adventurefuls,Tagalongs,Trefoils,Do-Si-Dos,Girl Scout Smores,Toffeetastic" | split: "," %}
{% for cookie in cookies %}
<label for="{{cookie}}">{{cookie}}</label>
<input type="num" id="{{cookie}}" name="{{cookie}}">
{% endfor %}
<input type="submit">
</form>
