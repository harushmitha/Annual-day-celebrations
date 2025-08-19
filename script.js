// Function to show different sections of the page
function showTechnical() {
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('technical-page').style.display = 'block';
    document.getElementById('non-technical-page').style.display = 'none';
    document.getElementById('guests-page').style.display = 'none';
}

function showNonTechnical() {
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('technical-page').style.display = 'none';
    document.getElementById('non-technical-page').style.display = 'block';
    document.getElementById('guests-page').style.display = 'none';
}

function showGuests() {
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('technical-page').style.display = 'none';
    document.getElementById('non-technical-page').style.display = 'none';
    document.getElementById('guests-page').style.display = 'block';
}

// Function to show registration page when clicking on a card
function showRegistration(eventName) {
    document.getElementById('technical-page').style.display = 'none';
    document.getElementById('non-technical-page').style.display = 'none';
    document.getElementById('guests-page').style.display = 'none';
    document.getElementById('registration-page').style.display = 'block';
    
    // Set event name in registration form
    document.getElementById('event-name').textContent = eventName;
    document.getElementById('registration-form').reset(); // Reset form for new event
}

// Function to submit the form
function submitForm() {
    alert('Registration Successful!');
    document.getElementById('registration-page').style.display = 'none';
    document.getElementById('home-page').style.display = 'block';
}
