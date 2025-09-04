const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');


const activePage = () => {
    const header = document.querySelector('header');
    const barsBox = document.querySelector('.bars-box');

    header.classList.remove('active');
    setTimeout(() => {
        header.classList.add('active');
    }, 1100);


    navLinks.forEach(link => {
      link.classList.remove('active');
    });

    barsBox.classList.remove('active');
    setTimeout(() => {
        barsBox.classList.add('active');
    }, 1100);

    sections.forEach(sections => {
      sections.classList.remove('active');
    });
}

navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activePage();

            link.classList.add('active');

            setTimeout(() => {
                sections[idx].classList.add('active');
            }, 1100);
        }
    });
});

logoLink.addEventListener('click', () => {
    if (!navLinks[0].classList.contains('active')) {
       activePage();
       
       navLinks[0].classList.add('active');

        setTimeout(() => {
                sections[0].classList.add('active');
            }, 1100);

    }
});

const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-detail');

        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');


         resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');
    });
});


const form = document.querySelector('form'); 

function sendEmail() {
    
    const fullName = document.querySelector('input[placeholder="Full Name"]').value;
    const email = document.querySelector('input[placeholder="Email Address"]').value;
    const phone = document.querySelector('input[placeholder="Phone Number"]').value;
    const message = document.querySelector('textarea[placeholder="Your message"]').value;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "barisoeddominic@gmail.com",
        Password: "8B97718FCB21D41FFEBB789276587BA290B5",
        To: 'barisoeddominic@gmail.com',
        From: email, 
        Subject: `New Contact Form Message from ${fullName}`,
        Body: `
            Name: ${fullName}
            Email: ${email}
            Phone: ${phone}
            
            Message:
            ${message}
        `
    }).then(
        message => {
            alert('Message sent successfully!');
            form.reset(); 
        }
    ).catch(
        error => {
            alert('Failed to send message. Please try again.');
            console.error('Email error:', error);
        }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    
    const fullName = document.querySelector('input[placeholder="Full Name"]').value.trim();
    const email = document.querySelector('input[placeholder="Email Address"]').value.trim();
    const phone = document.querySelector('input[placeholder="Phone Number"]').value.trim();
    const message = document.querySelector('textarea[placeholder="Your message"]').value.trim();

    if (!fullName || !email || !phone || !message) {
        alert('Please fill in all fields.');
        return;
    }

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    sendEmail();
});