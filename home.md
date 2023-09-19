---
layout: base.njk
title: Home

---
<style>
  img { max-width: 100% }
</style>

# Lorem Ipsum Page

## About Us
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel libero euismod, consectetur libero nec, lacinia odio.


### Our Services
- Service 1
- Service 2
- Service 3

{% icon 'fa-duotone fa-lighthouse' %}

<div class="split">

<div class="split-75 btn">

## Contact Us
If you have any questions, please [email us](mailto:contact@example.com).
Hello from mars <i class="fa-duotone fa-lighthouse"></i>

</div>
<div class="split-25">

[more](/){.btn .btn-outline}

</div>

</div>



I would never use a pattern to create an icon -- it's actually more typing. But this example just shows how it can be done -- in either front matter, or using assign
{% assign icon = "fa-duotone fa-lighthouse" %}
{% include 'patterns/icons.njk'  %}

