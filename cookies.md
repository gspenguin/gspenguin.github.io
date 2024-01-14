---
title: COOKIES!!!!!!
layout: default
---

# Do you want cookies?

<form action="https://formspree.io/f/mpzbqdjq" method="POST">
<div>
<label for="Name">Your Name</label>
<input type="text" id="Name" name="Name" required="required"/>
</div>
<div>
<label for="Last Name">Your Last Name</label>
<input type="text" id="Last Name" last name="Last Name" required="required" />
</div>
<div>
<label for="Email">Your Email</label>
<input type="email" id="Email" name="Email" required="required" />
</div>
<div>
<label for="Phone">Your Phone</label>
<input type="tel" id="Phone" name="Phone" required="required" />
</div>

{% assign cookies = "Thin Mints,Carmel Delites,Adventurefuls,Peanut Butter Patties,Trefoils,Peanut Butter Sandwiches,Toast-Yays,Carmel-Choclate Chip,Lemonades" | split: "," %}
{% for cookie in cookies %}
<div>
<label for="{{cookie}}">{{cookie}}</label>
<input type="number" min="0" id="{{cookie}}" name="{{cookie}}" class="cookie"/>
</div>
{% endfor %}
<div>
<label for="Total">Total</label>
<input type="number" min="0" id="Total" name="Total" readonly="true" />
</div>
<input type="submit" value="Order Cookies" />
</form>
