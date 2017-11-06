//Access object library and print if book has been read by checking readingStatus
function displayInformation() {
     // var library is defined, use it to print the information
    for (var num in library){
        if (library[num].readingStatus === true){
            console.log('Already read \'' + library[num].title + '\'' + ' by ' + library[num].author + '.');
        }else if (library[num].readingStatus === false){
            console.log('You still need to read \'' + library[num].title +'\' by ' + library[num].author +'.');
        }
    }
} 

// tail starts here
var library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
];

displayInformation();
