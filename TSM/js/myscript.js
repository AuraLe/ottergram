window.onload = function() {
    // Retrieve the "a" element, which is href link.
    var list = document.getElementsByTagName('a'); 

    // Assign order number to the attribute "id".
    for (let i = 0; i < list.length; i++) {
        list[i].setAttribute("id", 'c' + (i + 1))
    }

    // Add event listener which controls what will happen on click.
    for (let i = 1; i <= 5; i++) {
        document.getElementById('c' + i).addEventListener('click', function () {
            myFunction('profile' + i);
            event.preventDefault();
        })
    }
}

// Function myFunction will change the display attribute of the div with numbered id from "none" to "block" upon clicking on the "link" (a).
function myFunction(id) {
    var show = document.getElementById(id);
    console.log(id);
    
// When the link is clicked, if the profile div has 'display: none', it will be changed into 'display: block' and vice versa. This is to ensure that there is only one player profile being shown at all time.    
    for (var i = 1; i <= 5; i++) {
        var profile = 'profile' + i;
        if (profile === id) {
            if (show.style.display == 'block') {
                show.style.display = 'none';
            }
            else {
                show.style.display = 'block';
            }
        }

// This part is used to hide the other profiles that aren't being called upon.        
        else {
            var hide = document.getElementById(profile);
            hide.style.display = 'none';
        }
    }
}