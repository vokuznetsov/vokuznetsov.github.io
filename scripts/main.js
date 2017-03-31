var myImage = document.querySelector('img');

myImage.onclick = function () {
    var myScr = myImage.getAttribute('src');

    if (myScr === 'images/bmwx6m.jpg') {
        myImage.setAttribute('src', 'images/bmwx6m_front.jpg');
    } else if (myScr === 'images/bmwx6m_front.jpg') {
        myImage.setAttribute('src', 'images/bmwx6m_back.jpg');
    } else {
        myImage.setAttribute('src', 'images/bmwx6m.jpg');
    }
};

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');

function setUserName() {
    var myName = prompt('Please enter your name');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'BMW X6M is cool. (c)' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'MW X6M is cool. (c)' + storedName;
}

myButton.onclick = function () {
    setUserName();
};