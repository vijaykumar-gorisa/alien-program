document.addEventListener("DOMContentLoaded", () => {
    const alienForm = document.getElementById("alienForm") as HTMLFormElement;
    const translateButton = document.getElementById("translateButton") as HTMLButtonElement | null;
    const dancePartyButton = document.getElementById("danceParty") as HTMLButtonElement | null;
    const mysteryScene = document.getElementById("mysteryScene") as HTMLDivElement | null;
    const fakeCrash = document.getElementById("fakeCrash") as HTMLDivElement | null;
    const alienLaugh = document.getElementById("alienLaugh") as HTMLAudioElement | null;
    const instaCitizenshipButton = document.getElementById("instaCitizenship") as HTMLButtonElement | null;
    const djVideoContainer = document.getElementById("djVideoContainer") as HTMLDivElement | null;
    const djVideo = document.getElementById("djVideo") as HTMLIFrameElement | null;

    alienForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const alienName = (document.getElementById("alienName") as HTMLInputElement).value;
        const alienAge = parseInt((document.getElementById("alienAge") as HTMLSelectElement).value, 10);
        const reason = (document.getElementById("reason") as HTMLTextAreaElement).value.trim();
        const captcha = (document.getElementById("captcha") as HTMLInputElement).value;

        const selectedSpecies = document.querySelector("input[name='Species']:checked") as HTMLInputElement | null;
        const selectedRelation = document.querySelector("input[name='Relationship']:checked") as HTMLInputElement | null;
        const selectedGummyStatus = document.querySelector("input[name='gummyStatus']:checked") as HTMLInputElement | null;
        const selectedPowers = document.querySelectorAll("input[name='Powers']:checked");

        if (alienName.length < 5) {
            alert("Alien name is too Human! Try a longer Alien Name!");
            return;
        }

        if (alienAge < 50) {
            alert("Sorry! Only mature aliens (50+ Zog years) can apply!");
            return;
        }

        if (selectedPowers.length < 2) {
            alert("Even weak aliens need at least 2 Powers");
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

        if (reason.length === 0) {
            alert("Please enter a reason for applying!");
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

    translateButton?.addEventListener("click", () => {
        alert("Alien Translator Activated! Beep Boop!");
    });

    instaCitizenshipButton?.addEventListener("click", () => {
        alert("Ha! Ha! Nice Try Earthian? You think Insta Citizenship is that Easy??");
    });

    dancePartyButton?.addEventListener("click", () => {
        alert("Alien DJ Mode On...! It's time for an Alien Party!!");
        if (djVideoContainer && djVideo) {
            djVideoContainer.style.display = "block";
            djVideo.src = "https://www.youtube.com/embed/FzG4uDgje3M?autoplay=1&enablejsapi=1";
        }
    });

    document.querySelectorAll("input[name='Relationship']").forEach((radio) => {
        radio.addEventListener("change", () => {
            const selectedRelations = document.querySelectorAll("input[name='Relationship']:checked");
            if (selectedRelations.length > 2) {
                mysteryScene?.classList.remove("hidden");
            } else {
                mysteryScene?.classList.add("hidden");
            }
        });
    });

    alienForm.addEventListener("mouseover", () => {
        if (Math.random() > 0.95 && fakeCrash) {
            fakeCrash.classList.remove("hidden");
            setTimeout(() => {
                fakeCrash.classList.add("hidden");
            }, 3000);
        }
    });
});
