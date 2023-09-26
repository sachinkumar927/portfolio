const tablinks=document.getElementsByClassName('tab-links');
const tabcontents=document.getElementsByClassName('tab-contents');
const seemoreBtn = document.querySelector('.seemore');
const hiddenBlocks = document.querySelectorAll('.work.hidden');
const closeBtn=document.getElementById('closebtn');

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}

// -----QR code view--
const showImageButton = document.getElementById('show-image-button');
const imageContainer = document.getElementById('image-container');
const displayedImage = document.getElementById('displayed-image');

if(showImageButton){
showImageButton.addEventListener('click', function () {
    displayedImage.src = 'qrcode.jpg';
    if(showImageButton.innerHTML=='Close'){
        imageContainer.style.display = 'none';
        showImageButton.innerHTML = 'Click here for QR Code';
    }else{
        showImageButton.innerHTML = 'Close';
        imageContainer.style.display = 'block';
    }
})};


// -------see more section------
var isHidden = true;
seemoreBtn.addEventListener('click', function () {
    hiddenBlocks.forEach(function (block) {
        if (isHidden) {
            block.style.display = 'block';
        } else {
            block.style.display = 'none';
        }
    });

    if (isHidden) {
        seemoreBtn.textContent = 'See Less';
    } else {
        seemoreBtn.textContent = 'See More';
    }
    isHidden = !isHidden;
});

// ------side menu bar------
var sideMenu = document.getElementById("sidemenu");

function openMenu() {
    sideMenu.style.right = "0";
}
function closeMenu() {
    sideMenu.style.right = "-200px";
}


// ------ function to send email----
function sendMail() {
    const flashmsg1 = document.querySelector('.flashmsg1');
    const flashmsg2 = document.querySelector('.flashmsg2');
    
    Email.send({
                    Host : "smtp.elasticemail.com",
                    Username : "sachinhebri927@gmail.com",
                    Password : "37CB29D73F7366778675AFBFBB107A47C1EA",
                    To : 'sachinhebri927@gmail.com',
                    From : "sachinhebri927@gmail.com",
                    Subject : "New Enquiry From Portfolio",
                    Body : "Name: "+ document.getElementById('name').value +
                           "<br> Email: "+ document.getElementById("email").value +
                           "<br> Phone: "+ document.getElementById("phone").value +
                           "<br> Message: "+ document.getElementById("message").value
                }).then(
        message => {
            flashmsg1.innerHTML = "Email Sent Successfully";
            flashmsg1.style.display = "inline-block";
            flashmsg1.style.color= "rgb(30, 245, 30)";
            flashmsg1.style.boxShadow = "0 0 1.2rem rgb(8, 248, 60);"
            setTimeout(function() {
                flashmsg1.style.display = "none";
            }, 3000);
        }
    ).catch(
        error => {
        flashmsg2.innerHTML = "Email Not Sent";
        flashmsg2.style.display = "inline-block";
        flashmsg2.style.color= "rgb(243, 61, 16)";
        flashmsg2.style.boxShadow = "0 0 1.2rem rgb(243, 61, 16);"
        setTimeout(function() {
            flashmsg2.style.display = "none";
        }, 3000);
    });
}

// Reset the form after submission
function reset() {
    document.getElementById('contact-form').reset();
}


//Close button for QRCode display
closeBtn.addEventListener('click', function () {
    imageContainer.style.display = 'none';
    closeBtn.style.display = 'none'
});

