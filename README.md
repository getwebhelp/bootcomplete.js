# bootcomplete.js
Lightweight AJAX autocomplete for Bootstrap

* Easy to use alternative to Typeahead/Bloodhound
* Returns the ID and value (label) of selected
* Results can be chained/filtered by other form values

## Demo

[Click here](http://getwebhelp.com/bootcomplete/) to see the examples in action.

## Requirements

* [jQuery](https://jquery.com/download/)
* [Bootstrap 3](http://getbootstrap.com/)
* [Bootstrap 4](http://getbootstrap.com/)

## Usage

```javascript
$('#input').bootcomplete({url:'/search.php',options});
```

### JSON Response Object
```javascript
  [
    {
      "id" : "someId",
      "label" : "some label name"
    }
  ]
```

### Custom Dropdown
You can set a custom format for each option of the dropdown with dropdownFormat option:

```javascript
var options = { 
				url: 'someURL',
	            dropdownFormat: function( j ){
	                return '<a href="#" class="list-group-item" data-id="' + j.id + '"> <img src="'+ j.logo +'" width="50px" height="50px"/> ' +  j.label +'</a>'
	            }
         	  }

$('input[name=autocomplete]').bootcomplete(options)
```

#### Serverside JSON Response Object
```php
[
  { 
    "id": "1",
    "label": "My Custom Option",
    "logo": "http:\/\/url\/web\/uploads\/avatars\/avatar-custom.png"
  }
]
```

## Options
<table>
<tr>
<th>Option</th>
<th>Type</th>
<th>Default</th>
<th>Description</th>
</tr>
<tr>
<td>url</td>
<td>string</td>
<td>null</td>
<td>The url to submit query</td>
</tr>
<tr>
<td>method</td>
<td>string</td>
<td>GET</td>
<td>Request method (get, post)</td>
</tr>
<tr>
<td>wrapperClass</td>
<td>string</td>
<td>null</td>
<td>CSS Class used for the element wrapper</td>
</tr>
<tr>
<td>menuClass</td>
<td>string</td>
<td>null</td>
<td>CSS Class used for the suggestions menu</td>
</tr>
<tr>
<td>idField</td>
<td>string</td>
<td>null</td>
<td>Include hidden input field for selected option id (true,false) Default: true</td>
</tr>
<tr>
<td>idFieldName</td>
<td>string</td>
<td>null</td>
<td>Hidden input field name. Default: elementName_id</td>
</tr>
<tr>
<td>minLength</td>
<td>int</td>
<td>null</td>
<td>Minimum string length before sending query request</td>
</tr>
<tr>
<td>dataParams</td>
<td>json</td>
<td>null</td>
<td>Send additional data parameters with request. Usage: <pre>dataParams: {keyName : value}</pre></td>
</tr>
<tr>
<td>formParams</td>
<td>jQuery Object</td>
<td>null</td>
<td>Send chained form parameters with request. Usage: <pre>formParams: {keyName : $('#formElement')}</pre></td>
</tr>
<tr>
<td>beforeSelect</td>
<td>function</td>
<td>null</td>
<td>Callback, triggers before the population of dropdown list. Usage: <pre>beforeSelect: function(){ alert('try me') }</pre></td>
</tr>
<tr>
<td>afterSelect</td>
<td>function</td>
<td>null</td>
<td>Callback, triggers after select an option from the dropdown list. Usage: <pre>afterSelect: function(id, value) { alert('try me after') }</pre></td>
</tr>
<tr>
<td>dropdownFormat</td>
<td>Function</td>
<td>null</td>
<td>Callback, returns a custom format for the dropdown list. Usage: <pre>afterSelect: function( j ) { return '<a data-id="'+ j.id +'" class="my-custom-option">'+ j.label + ' - ' + j.someExtraTextFromTheServerJSON +'</a>' }</td>
</tr>
</table>
