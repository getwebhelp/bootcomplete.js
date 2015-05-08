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

&nbsp;&nbsp;&nbsp;&nbsp;<p><b>url:</b><br>The url to submit query</p>

&nbsp;&nbsp;&nbsp;&nbsp;<p><b>method:</b><br>Request method (get, post)</p>
 
&nbsp;&nbsp;&nbsp;&nbsp;<p><b>wrapperClass:</b><br>CSS Class used for the element wrapper</p>

&nbsp;&nbsp;&nbsp;&nbsp;<p><b>menuClass:</b><br>CSS Class used for the suggestions menu</p>

&nbsp;&nbsp;&nbsp;&nbsp;<p><b>idField:</b><br>Include hidden input field for selected option id (true,false) Default: true</p>
  
&nbsp;&nbsp;&nbsp;&nbsp;<p><b>idFieldName:</b><br>Hidden input field name. Default: elementName_id</p>

&nbsp;&nbsp;&nbsp;&nbsp;<p><b>minLength:</b><br>Minimum string length before sending query request</p>

&nbsp;&nbsp;&nbsp;&nbsp;<p><b>dataParams:</b><br>Send additional data parameters with request. Usage: <code>dataParams: {keyName : value}</code></p>

&nbsp;&nbsp;&nbsp;&nbsp;<p><b>formParams:</b><br>Send chained form parameters with request. Usage: <code>formParams: {keyName : $('#formElement')}</code></p>


<h3>Demo</h3>
<p>Coming soon</p>





