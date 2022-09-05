let dark = false;

darkMode();

function darkMode() {
    const collection = document.getElementsByClassName('box');
    if (document.getElementById('darkmode') != null)
        checked = document.getElementById('darkmode').checked;
    else
        checked = this.dark;
        
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
}



