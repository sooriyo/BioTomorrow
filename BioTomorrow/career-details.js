// career-details
const careerDetails = {
    'Physician': {
        title: 'Physician',
        shortDescription: 'The physician is commonly known as a medical doctor.',
        longDescription: 'A physician is commonly known as a medical doctor who diagnoses and provides treatment for diseases and injuries. They are responsible for examining patients, prescribing medications, maintaining the medical histories of patients and disease control and prevention. Physicians can also specialize in different fields of medicine including psychiatry, pediatrics, dermatology, cardiology, and anesthesiology.',
        payRange: '$106,543 - $355,368',
        workingHours: '50 Working Hours Per Week',
        videoUrl: 'https://youtu.be/aZ01ApQj4RU'

    },
    'Microbiologist': {
        title: 'Microbiologist',
        shortDescription: 'A Microbiologist is a scientist studying microscopic organisms.',
        longDescription: 'Microbiologists focus on studying microorganisms including bacteria, viruses, fungi, algae, archaea, and protozoa with the aim of addressing a wide range of issues related to health, environment, food, and climate. They are involved in the development of new medicinal drugs, vaccines, hormones, vitamins, enzymes, and pharmaceuticals. According to the Bureau of Labor Statistics (BLS), the job outlook for microbiologists is expected to grow by 5% from 2022-2032.',
        payRange: '$48,030 - $106,490',
        workingHours: '40 Working Hours Per Week',
        videoUrl: 'https://youtu.be/pNHa0eqkzdU'
    },
    'forensic-Scientist': {
        title: 'Forensic Scientist',
        shortDescription: 'A Forensic Scientist investigates crimes using scientific methods.',
        longDescription: 'Forensic scientists examine and analyze evidence from crime scenes. They use scientific tests to analyze materials such as body hairs, nails, pieces of clothing, tyre marks, blood, and other body fluids. Forensic scientists typically specialize in a specific area of forensics. Such subspecialties include forensic pathology, forensic toxicology, cyber forensics, and forensic psychology. As stated by the Bureau of Labor Statistics (BLS) the field of forensic science is expected to grow by 14% by 2028.',
        payRange: '$49,085 - $103,613',
        workingHours: '39 Working Hours Per Week',
        videoUrl: 'https://youtu.be/n8Dj6c_IuXU'
    },
    'marine-biologist': {
        title: 'Marine Biologist',
        shortDescription: 'A Marine Biologist studies ocean life and works to conserve marine ecosystems.',
        longDescription: 'Marine biologists focus on studying marine life including organisms and ecosystems found in oceans. They investigate the behavioral patterns and physiology of marine organisms, examine the conditions of marine habitats, and assess the impact of human activities on marine life. heir research often includes conducting species inventories, monitoring and testing sea creatures exposed to pollutants, collecting and analyzing ocean samples, preserving specimens of unknown species and diseases, and movements of marine populations. ',
        payRange: '$55,487 - $111,000',
        workingHours: '35 Working Hours Per Week',
        videoUrl: 'https://youtu.be/qqgwuL07JtI'
    },
    'bioinformatics-scientist': {
        title: 'Bioinformatics Scientist',
        shortDescription: 'A Bioinformatics Scientist uses computational tools to analyze biological data.',
        longDescription: 'Bioinformatics is an interdisciplinary field that combines biology, computer science, mathematics, and statistics in order to analyze large biological data. Bioinformatics scientists are responsible for developing computational tools and software to analyze and organize genomic, proteomic, pharmacological, and other types of data produced by researchers, making this information easily accessible globally. According to the Bureau of Labor Statistics (BLS), the job outlook for bioinformatics scientists is expected to grow by 22% by 2030. ',
        payRange: '$52,000 - $108,160',
        workingHours: '40 Working Hours Per Week',
        videoUrl: 'https://youtu.be/pE18UYEfrnA'
    },
    'biomedical-engineer': {
        title: 'Biomedical Engineer',
        shortDescription: 'A Biomedical Engineer designs and creates medical devices and equipment.',
        longDescription: 'Biomedical engineering focuses on providing solutions to medical and biological problems by applying engineering principles and techniques. Biomedical engineers are responsible for developing biocompatible prostheses, artificial hearts, micro-implants, and medical devices such as X-ray, MRI, and CT scans. These technologies contribute to improving treatment procedures in healthcare. According to the Bureau of Labor Statistics (BLS), the job outlook for bioinformatics scientists is expected to grow by 5% by 2032. ',
        payRange: '$58,852 - $136,349',
        workingHours: '40 Working Hours Per Week',
        videoUrl: 'https://youtu.be/QlnZpv713V4'
    },
    'pharmacologist': {
        title: 'Pharmacologist',
        shortDescription: 'A Pharmacologist studies the effects of drugs on biological systems.',
        longDescription: 'Pharmacologists are the scientists involved in developing new medications to tackle diseases. They examine the effects of different drugs and chemicals on living organisms in order to ensure their effectiveness and safety. According to the Bureau of Labor Statistics (BLS), the job outlook for pharmacologists is expected to grow by 6% from 2019 to 2029. ',
        payRange: '$108,952 - $182,975',
        workingHours: '40 Working Hours Per Week',
        videoUrl: 'https://youtu.be/_92HfQCrY00'
    },
    'nanotechnologist': {
        title: 'Nanotechnologist',
        shortDescription: 'A Nanotechnologist manipulates matter on an atomic or molecular scale to create new materials and devices.',
        longDescription: 'A nanotechnologist is a scientist or engineer who works with materials and devices on an extremely small scale, typically at the level of atoms and molecules (nanometers, which are one billionth of a meter). Their work involves manipulating matter at the nanoscale to create new materials, devices, and technologies with unique properties and functions. Nanotechnologists can specialize in various areas, including nanomaterials, nanomedicine, nanosensors, nanofabrication, and nanoelectronics. According to the Bureau of Labor Statistics (BLS), the job outlook for nanotechnologists is expected to increase by 10% from 2021 to 2031. ',
        payRange: '$66,831 - $217,059',
        workingHours: '37 to 40 Working Hours Per Week',
        videoUrl: 'https://youtu.be/OLa8DQkKlyU'
    },
    'food-scientist': {
        title: 'Food Scientist',
        shortDescription: 'A Food Scientist researches and develops new food products and processes.',
        longDescription: 'Agricultural or food scientists specialize in research to develop methods to improve food production, safety, and quality. They focus on various aspects of agriculture and food systems to enhance crop yields, develop better farming practices, and ensure the safety and nutritional quality of food products. According to the Bureau of Labor Statistics (BLS), the job outlook for nanotechnologists is expected to grow by 10% in the next 10 years. ',
        payRange: '$40,520 - $125,280',
        workingHours: '40 Working Hours Per Week',
        videoUrl: 'https://youtu.be/8pdcTuuLEfQ'
    },
};

function loadCareerDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const career = urlParams.get('career');
    const details = careerDetails[career];

    if (details) {
        document.title = details.title;
        document.querySelector('.carer-card .thumb img').src = `assets/images/careers/cover/${career}.jpg`;
        document.querySelector('.carer-card h4').textContent = details.title;
        document.querySelector('.carer-card .down-content p:not(.description)').textContent = details.shortDescription;
        document.querySelector('.carer-card .description a:first-of-type').textContent = details.longDescription;
        document.querySelector('.carer-card .hours p:first-of-type').textContent = details.payRange;
        document.querySelector('.carer-card .hours p:last-of-type').textContent = details.workingHours;

        const customText = getCustomClickHereText(career);
        const videoLinkContainer = document.querySelector('.carer-card .description');
        const videoLink = videoLinkContainer.querySelector('a:last-of-type');
        videoLink.href = details.videoUrl;

        const linkedText = customText.replace(/click here/i, `<a href="${details.videoUrl}" target="_blank">click here</a>`);
        videoLinkContainer.innerHTML += `<br><br>${linkedText}`;
    } else {
        document.querySelector('.carer-card').innerHTML = '<p>Career details not found.</p>';
    }
}

function getCustomClickHereText(career) {
    const customTexts = {
        'physician': 'Click here to discover why becoming a doctor is still a dream worth chasing!',
        'microbiologist': 'Click here to uncover the fascinating life of a microbiologist!',
        'forensic-scientist': 'Dreaming of solving mysteries? Dive into the world of forensic science by clicking here!',
        'bioinformatics-scientist': 'Click here to uncover the fascinating life of a bioinformatics Scientist!',
        'biomedical-engineer': 'Click here to explore the exciting world of a biomedical engineer!',
        'marine-biologist': 'Dreaming of diving into the depths of marine science? Click here to uncover the fascinating life of a marine biologist!',
        'pharmacologist': 'Click here to explore the exciting world of a pharmacologist!',
        'nanotechnologist': 'Click here to explore more about the fascinating world of nanotechnology!',
        'food-scientist': 'Click here to uncover the fascinating life of a food scientist!'
    };

    return customTexts[career] || 'Click here to watch a video about this career.';
}
window.onload = loadCareerDetails;