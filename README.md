# JavaScript - Document Object Model

Document Object Model (DOM) is an programming interface for web document. 

When a web page is loaded, the browser creates a Document Object Model of the page.

The HTML DOM model is constructed as a **tree** of **Objects**. 

So that JavaScript can get access to change all the elements of the document.

Document will have methods and properties.
* `methods` are actions performed on document.
* `properties` are values of document that can be set or change.

## Selectors

* `document.querySelector()`
    ```javascript
    const paragraph = document.querySelector('p'); // html tag
    const paragraph = document.querySelector('.class-name'); // class 
    const paragraph = document.querySelector('#id-name'); // id
    ```
    * select the element based on the type of input given to the function.
    * have to use CSS selector as input that includes html tags, class selectors or id selectors.
    * in above example, html `<p>` tag will be selected and returns the it. 

* `document.querySelectorAll()`
    ```javascript
    const paragraph = document.querySelectorAll('p'); // html tag
    const paragraph = document.querySelectorAll('.class-name'); // class 
    const paragraph = document.querySelectorAll('#id-name'); // id
    ```
    * select all the elements based on the type of input given to the function.
    * have to use CSS selector as input that includes html tags, class selectors or id selectors.
    * in above example, all the html `<p>` tag will be selected and returns them as `NodeList`.
    * we can easily traverse all the elements of the `NodeList` using any loop.

* `document.getElementById()`
    ```javascript
    const paragraph = document.getElementById('para');
    ```
    * select the element based on the name of the id.
    * in above example, `para` id will be selected and returns the it. 

* `document.getElementsByClassName()`
    ```javascript
    const paragraph = document.getElementsByClassName('para');
    ```
    * select the element based on the name of the class.
    * in above example, all the `para` classes will be selected and returns them as `HTMLCollection`.
    * `HTMLCollection` is a array but we cannot loop it through `for-each` loop.
    * can be accessed through indexes.

* `documetn.getElementsByTagName()`
    ```javascript
    const paragraph = document.getElementsByTagName('p');
    ```
    * select the element based on the name of the html tag.
    * in above example, all the html `p` tags will be selected and returns them as `HTMLCollection`.
    * `HTMLCollection` is a array but we cannot loop it through `for-each` loop.
    * can be accessed through indexes.

## Properties

* `innerHTML`
    * used to set or return the whole element with html tags.
* `innerText`
    * used to set or return the text inside element.
    * it return all its children except CSS hidden text spacing and tags.
* `textContent`
    * used to set or return the text inside element.
    * it return all its children including CSS hidden text spacing and tags.

    ```javascript
    const element = `<p>Html block added by the innerHTML property</p>`
    const text = `sample text`
    
    paragraph.innerHTML += element;
    paragraph.innerText += text;
    paragraph.textContent += text;
    ```

## Attributes

* `getAttribute` - used to get the value of element's attribute.
* `setAttribute` - used to set the value of element's attribute.
* `hasAttribute` - used to check the element has particular attribute.
* `hasAttributes` - used to check the element has attributes.
* `removeAttribute` - used to remove the particular attribute.
* `createAttribute` - used to create a new attribute.