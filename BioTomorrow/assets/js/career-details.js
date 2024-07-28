// career-details.js
const careerDetails = {
    'Physician': {
        title: 'Physician',
        description: 'The physician is commonly known as a medical doctor.',
        longDescription: 'Physicians diagnose and treat illnesses, prescribe medications, and often work in hospitals or private practices. They may specialize in various fields such as pediatrics, surgery, or internal medicine.',
        skills: ['Medical knowledge', 'Patient care', 'Problem-solving', 'Communication'],
        education: 'Medical Degree (MD) or Doctor of Osteopathic Medicine (DO)',
        salary: '$208,000 per year on average'
    },
    'Microbiologist': {
        title: 'Microbiologist',
        description: 'A Microbiologist is a scientist studying microscopic organisms.',
        longDescription: 'Microbiologists study microorganisms like bacteria, viruses, algae, and fungi. They conduct research to understand how these organisms live, grow, and interact with their environments.',
        skills: ['Laboratory techniques', 'Data analysis', 'Critical thinking', 'Attention to detail'],
        education: 'Bachelors or Masters degree in Microbiology',
        salary: '$75,650 per year on average'
    },
    // Add details for other careers here...
};

function loadCareerDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const career = urlParams.get('career');
    const details = careerDetails[career];

    if (details) {
        document.getElementById('career-title').textContent = details.title;
        document.getElementById('career-description').textContent = details.longDescription;
        document.getElementById('career-skills').innerHTML = details.skills.map(skill => `<li>${skill}</li>`).join('');
        document.getElementById('career-education').textContent = details.education;
        document.getElementById('career-salary').textContent = details.salary;
    } else {
        document.getElementById('career-details').innerHTML = '<p>Career details not found.</p>';
    }
}

window.onload = loadCareerDetails;