# bootcomplete.js
Lightweight AJAX autocomplete for Bootstrap 3

<h2>Requires</h2>
<ul>
  <li>jquery.js</li>
  <li>bootstrap.css</li>
</ul>

<h3>Basic Usage</h3>
<code>$('#input').bootcomplete({url:'/search.php'});</code>

<h3>JSON Response Object</h3>
<code>
  [
    {
      id : someId,
      label : "some label name"
    }
  ]
</code>

<h3>Options<h3>

<p><b>url:</b><br>The url to submit query</p>

<p><b>method:</b><br>Request method (get, post)</p>


