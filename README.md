# RestyV2
Recreating my Resty App for practice


### Update: 

- I now have test suites and testing all my front end display elements.
- We can either the pokemon Api or the star wars API will list a set of characters if the path set is action: GET and the proper api route:
  - POKEAPI: https://pokeapi.co/api/v2/pokemon  (this nets you 20 pokemon)
  - Star Wars API: https://swapi.dev/api/people/ (this nets you the first 10 start wars characters)
  
  Im using https://jsonplaceholder.typicode.com/ to test my POST, PUT, DELETE paths.
  
  - To post i use: 
  
  https://jsonplaceholder.typicode.com/posts and POST and we get a console log with the new post created.
  
  - To update or delete i use:
  
  https://jsonplaceholder.typicode.com/posts/1 as it mocks the post targeted on the api testing service and it can 'delete' or 'update' the target and we get a console log. 
  

### UML




As shown in the uml: everything lives in index.js, and everything is being called in to the index js after being created. In a way every component is being nested inside. 

![UML](https://github.com/401Repo/RESTy/blob/main/phonto.JPG?raw=true)

## Attributions for the project:

- sloth logo image from vectizy: greenladybug997


- backgrounds from: https://www.svgbackgrounds.com/#colorful-stingrays



### Testing:

- making sure all my headings are rendering
- making sure my list is displaying

 PASS  src/__test__/footer.test.js
 PASS  src/__test__/form.test.js
 PASS  src/__test__/header.test.js

Test Suites: 3 passed, 3 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        1.894 s, estimated 2 s
