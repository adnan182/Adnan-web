// Sample study backgrounds
const studyBackgrounds = [
    "Analysis of Deep Learning Models in Medical Imaging",
    "Survey of Explainable AI Techniques",
    "Comparative Study on NLP Transformers",
    "Robustness Evaluation of Adversarial ML Methods"
];

// Sample projects
const projects = [
    {
        name: "MedAI Suite",
        description: "A toolkit for automating medical image analysis using deep learning.",
        link: "https://github.com/yourusername/medai-suite"
    },
    {
        name: "XAI Visualizer",
        description: "A web app to visualize and interpret black-box AI models.",
        link: "https://github.com/yourusername/xai-visualizer"
    },
    {
        name: "NLP Toolkit",
        description: "A Python library for efficient NLP processing and transformer integration.",
        link: "https://github.com/yourusername/nlp-toolkit"
    }
];

// Sample publication data
const publications = [
    {
        title: "Explainable AI for Medical Diagnosis",
        authors: "Jane Doe, John Smith",
        venue: "Nature Medicine, 2024",
        link: "https://example.com/paper1"
    },
    {
        title: "Robust Deep Learning under Adversarial Attacks",
        authors: "Jane Doe, Alex Lee",
        venue: "ICML, 2023",
        link: "https://example.com/paper2"
    },
    {
        title: "Efficient Transformers for NLP Tasks",
        authors: "Jane Doe, Maria Garcia",
        venue: "ACL, 2022",
        link: "https://example.com/paper3"
    }
];

// Render Study Background
function renderStudyBackground() {
    const sbList = document.getElementById('study-background-list');
    if (!sbList) return;
    sbList.innerHTML = '';
    studyBackgrounds.forEach(study => {
        const li = document.createElement('li');
        li.textContent = study;
        sbList.appendChild(li);
    });
}

// Render Projects
function renderProjects() {
    const projectsList = document.getElementById('projects-list');
    if (!projectsList) return;
    projectsList.innerHTML = '';
    projects.forEach(proj => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <h3>${proj.name}</h3>
            <p>${proj.description}</p>
            <a href="${proj.link}" target="_blank">View Project</a>
        `;
        projectsList.appendChild(card);
    });
}

// Render publications
function renderPublications() {
    const pubList = document.getElementById('pub-list');
    pubList.innerHTML = '';
    publications.forEach(pub => {
        const card = document.createElement('div');
        card.className = 'publication-card';
        card.innerHTML = `
            <strong>${pub.title}</strong><br>
            <span>${pub.authors}</span><br>
            <em>${pub.venue}</em><br>
            <a href="${pub.link}" target="_blank">Read more</a>
        `;
        pubList.appendChild(card);
    });
}

// Handle contact form
document.addEventListener('DOMContentLoaded', () => {
    renderStudyBackground();
    renderProjects();
    renderPublications();
    const form = document.getElementById('contact-form');
    const msg = document.getElementById('form-msg');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        msg.textContent = "Thank you for your message!";
        form.reset();
        setTimeout(() => msg.textContent = '', 4000);
    });
});