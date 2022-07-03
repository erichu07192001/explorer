// Functions used in search to interpret data and make it presentable for users

// Recieves a boolean determining if the activity has opened yet
// and returns a text that a user could understand
function isClosed(is_closed){
    if (is_closed){ // Activity is currently open
        return(
            <Text style = {{color: 'red'}}>CLOSED</Text>
        )
    }
    else{
        return( // Activity is currently closed
            <Text style = {{color: 'green'}}>OPEN</Text>
        )
    }
} 