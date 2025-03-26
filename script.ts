document.addEventListener("DOMContentLoaded", () => {
    const alienForm = document.getElementById("alienForm") as HTMLFormElement;
    const translateButton = document.getElementById("translateButton") as HTMLButtonElement;
    const dancePartyButton = document.getElementById("danceParty") as HTMLButtonElement;
    const mysteryScene = document.getElementById("mysteryScene") as HTMLDivElement;
    const fakeCrash = document.getElementById("fakeCrash") as HTMLDivElement;
    const alienLaugh = document.getElementById("alienLaugh") as HTMLAudioElement;

    alienForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const alienName = (document.getElementById("alienName") as HTMLInputElement).value;
        const reason = (document.getElementById("reason") as HTMLTextAreaElement).value;
        const captcha = (document.getElementById("captcha") as HTMLInputElement).value;

        // Get selected species
        const selectedSpecies = document.querySelector("input[name='species']:checked") as HTMLInputElement;
        const selectedRelation = document.querySelector("input[name='Relationship']:checked") as HTMLInputElement;
        const selectedGummyStatus = document.querySelector("input[name='gummyStatus']:checked") as HTMLInputElement;

        // Get selected powers
        const selectedPowers = Array.from(document.querySelectorAll("input[name='Powers']:checked")) as HTMLInputElement[];

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
            } else {
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
