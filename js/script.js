let dark = false;

window.onload = function() {
    value = localStorage.getItem("darkMode",this.dark);
    this.dark = (value === 'true');
    if (document.getElementById('darkmode') != null) {
        document.getElementById('darkmode').checked = this.dark;
    }
    darkMode();
 }


function darkMode() {
    const collection = document.getElementsByClassName('box');
    if (document.getElementById('darkmode') != null) {
        checked = document.getElementById('darkmode').checked;
    }
    else {
        checked = this.dark;
    }
        
    if (checked) {
        this.dark = true;
        for (let i = 0; i < collection.length; i++) {
            collection[i].style.backgroundColor = '#444';
        }
    }
    else {
        this.dark = false;
        for (let i = 0; i < collection.length; i++) {
            collection[i].style.backgroundColor = 'lightyellow';
        }
    }

    if (document.getElementById('fellowshipImage') != null) {
        if (this.dark) {
            document.getElementById('fellowshipImage').src = 'img/fellowship-gray.png';
            document.getElementById('title').style.color = '#bfbfbf';
        }
        else {
            document.getElementById('fellowshipImage').src = 'img/fellowship.png';
            document.getElementById('title').style.color = 'black';
        }
    }
    localStorage.setItem('darkMode', this.dark);
}


