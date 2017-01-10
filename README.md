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

## Options

* **url:** The url to submit query

* **method:** Request method (get, post)
 
* **wrapperClass:** CSS Class used for the element wrapper

* **menuClass:** CSS Class used for the suggestions menu

* **idField:** Include hidden input field for selected option id (true,false) Default: true
  
* **idFieldName:** Hidden input field name. Default: elementName_id

* **minLength:** Minimum string length before sending query request

* **dataParams:** Send additional data parameters with request. Usage: ```dataParams: {keyName : value}```

* **formParams:** Send chained form parameters with request. Usage: ```formParams: {keyName : $('#formElement')}```

