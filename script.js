// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Display a welcome alert when the page loads
window.onload = function() {
    alert('Welcome to Poojitha Pabbala\'s Portfolio!');
};

// Example of a function to handle form submission (if you have a contact form in the future)
function handleFormSubmit(event) {
    event.preventDefault();
    alert('Form submitted!');
    // You can add further processing here, such as sending the data to a server
}

// Example: Adding the form submission handler to a form (uncomment if you have a form)
// document.getElementById('contact-form').addEventListener('submit', handleFormSubmit);

// Example of a dynamic skill update (you can extend this to make skills editable)
document.querySelectorAll('.skill').forEach(skill => {
    skill.addEventListener('click', function () {
        let newSkillLevel = prompt('Enter new skill level for ' + this.querySelector('p').innerText.split(' ')[0]);
        if (newSkillLevel !== null) {
            this.querySelector('.progress-bar').style.width = newSkillLevel + '%';
            this.querySelector('p').innerText = this.querySelector('p').innerText.split(' ')[0] + ' ' + newSkillLevel + '%';
        }
    });
});
