document.addEventListener("DOMContentLoaded", () => {
    const alienForm = document.getElementById("alienForm");
    const translateButton = document.getElementById("translateButton");
    const dancePartyButton = document.getElementById("danceParty");
    const mysteryScene = document.getElementById("mysteryScene");
    const fakeCrash = document.getElementById("fakeCrash");
    const alienLaugh = document.getElementById("alienLaugh");
    alienForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const alienName = document.getElementById("alienName").value;
        const reason = document.getElementById("reason").value;
        const captcha = document.getElementById("captcha").value;
        // Get selected species
        const selectedSpecies = document.querySelector("input[name='species']:checked");
        const selectedRelation = document.querySelector("input[name='Relationship']:checked");
        const selectedGummyStatus = document.querySelector("input[name='gummyStatus']:checked");
        // Get selected powers
        const selectedPowers = Array.from(document.querySelectorAll("input[name='Powers']:checked"));
        if (alienName.length < 5) {
            alert("Alien name must be at least 5 characters long!");
            return;
        }
        if (!selectedSpecies) {
            alert("Please select your species!");
            return;
        }
        if (!selectedRelation) {
            alert("Please select your relationship status!");
            return;
        }
        if (!selectedGummyStatus) {
            alert("Please select your gummy status!");
            return;
        }
        if (selectedPowers.length < 2) {
            alert("Please select at least 2 powers!");
            return;
        }
        if (reason.length > 200) {
            alert("Your reason must be 200 characters or less!");
            return;
        }
        if (captcha.trim() !== "10") {
            alert("Wrong answer to Alien Math!");
            return;
        }
        alert("Application Submitted Successfully! Welcome to ZipttyZog World!!");
    });
    translateButton.addEventListener("click", () => {
        alert("Alien Translator Activated! Beep Boop!");
    });
    dancePartyButton.addEventListener("click", () => {
        alert("Alien DJ Mode On...! It's time to Alien Party!!");
        alienLaugh.play();
    });
    document.querySelectorAll("input[name='Relationship']").forEach((radio) => {
        radio.addEventListener("change", () => {
            const selectedRelations = document.querySelectorAll("input[name='Relationship']:checked");
            if (selectedRelations.length > 2) {
                mysteryScene.classList.remove("hidden");
            }
            else {
                mysteryScene.classList.add("hidden");
            }
        });
    });
    alienForm.addEventListener("mouseover", () => {
        if (Math.random() > 0.95) {
            fakeCrash.classList.remove("hidden");
            setTimeout(() => {
                fakeCrash.classList.add("hidden");
            }, 3000);
        }
    });
});
