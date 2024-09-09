// Function to open the popup form
function openSkillForm() {
    document.getElementById('popupForm').style.display = 'flex';
}

// Function to close the popup form and clear the form
function closeSkillForm() {
    document.getElementById('skillForm').reset();  // Clear the form
    document.getElementById('popupForm').style.display = 'none';  // Close the form
}

// Handle form submission
document.getElementById('skillForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get the form values
    const domain = document.getElementById('domain').value;
    const techs = document.querySelectorAll('.tech-column input');
    const profs = document.querySelectorAll('.prof-column input');

    // Validation
    if (!domain.trim() || techs.length === 0 || profs.length === 0) {
        alert('Please fill out all fields.');
        return;
    }

    // Create a new skill card dynamically
    const skillCard = document.createElement('div');
    skillCard.className = 'skill-card';

    // Add content to the skill card
    let techContent = '';
    let firstTechProvided = false;

    for (let i = 0; i < techs.length; i++) {
        const techValue = techs[i].value.trim();
        const proficiency = profs[i].value.trim();

        // Check if the tech input is provided
        if (techValue) {
            // Enforce proficiency input for all techs except the first
            if (firstTechProvided && !proficiency) {
                alert(`Please specify proficiency for the skill: ${techValue}`);
                profs[i].focus();  // Return cursor to the corresponding proficiency input
                return;  // Stop processing further
            }

            // Mark that the first tech has been provided
            firstTechProvided = true;

            // Add tech and proficiency to content if both are provided
            techContent += `
                <p>${techValue} - ${proficiency}%</p>
                <div class="progress-bar">
                    <div class="progress" style="width: ${proficiency}%;"></div>
                </div>
            `;
        }
    }

    // Ensure there's at least one valid technology entry
    if (!techContent) {
        alert('Please add at least one technology.');
        return;
    }

    // Append content to the skill card
    skillCard.innerHTML = `
        <h3>${domain}</h3>
        ${techContent}
    `;

    // Append the new skill card to the skills grid
    document.querySelector('.skills-grid').appendChild(skillCard);

    // Reset the form but do not close the form
    document.getElementById('skillForm').reset();
});

// Handle cancel button click to clear the form and close the popup
document.getElementById('cancelButton').addEventListener('click', function() {
    closeSkillForm();  // Clear and close the form
});
