# The Shoppies

## The Challenge

In this challenge, Shopify has branched out into movie award shows and needs an application to manage movie nominations for the upcoming Shoppies

### MVP

- The user will be able to searcht the OMDB API for the movies they want to nominate.
- Once the API has run the search the closest matching results will be displayed and the user will be able to nominate the movie
- The user will have access to a list of films they have nominated
- Once the user has selected 5 movies they will be alerted to being done
- The user will be able to remove a nominee from the nomination list

### Requirements

- Search results should come from OMDB's API (free API key: http://www.omdbapi.com/apikey.aspx).
- Each search result should list at least its title, year of release and a button to nominate that film.
- Updates to the search terms should update the result list
- Movies in search results can be added and removed from the nomination list.
- If a search result has already been nominated, disable its nominate button.
- Display a banner when the user has 5 nominations.

### Application
Application demo can be found at https://gocoog.github.io/shoppies/