const input = document.querySelector('input[type="range"]');
const handle = document.querySelector(".handle");
// //


function handleUpdate() {
    var suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(
        `--${this.name}`,
        this.value + suffix
    );
    checkFlipAngle(this.value);
}

input.addEventListener("mousemove", handleUpdate);
function init() {
    document.documentElement.style.setProperty("--rotation-angle", "180deg");
    checkFlipAngle(
        parseInt(
            document.documentElement.style.getPropertyValue("--rotation-angle")
        )
    );
}

function checkFlipAngle(value) {
    if (value > 90) {
        handle.classList.add("hidden");
    } else {
        handle.classList.remove("hidden");
    }
}
init();

document.addEventListener("DOMContentLoaded", (event) => {
    const form = document.getElementById("meal-form");
    const breakfastInput = document.getElementById("breakfast-time");
    const lunchInput = document.getElementById("lunch-time");
    const dinnerInput = document.getElementById("dinner-time");
    const submitButton = form.querySelector('button[type="submit"]');

    let breakfastTime, lunchTime, dinnerTime;

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the form from submitting normally

        // Get the times from the form inputs
        breakfastTime = breakfastInput.value;
        lunchTime = lunchInput.value;
        dinnerTime = dinnerInput.value;

        console.log("Meal times set:");
        console.log("Breakfast:", breakfastTime);
        console.log("Lunch:", lunchTime);
        console.log("Dinner:", dinnerTime);

        // Disable inputs and submit button
        breakfastInput.disabled = true;
        lunchInput.disabled = true;
        dinnerInput.disabled = true;
        submitButton.disabled = true;

        // Start checking the time every minute
        setInterval(checkTime, 2000);
    });

    function checkTime() {
        const now = new Date();
        const currentTime = now.toTimeString().slice(0, 5);

        if (currentTime === breakfastTime) {
            removeLockers();
        } else if (currentTime === lunchTime) {
            removeLockers();
        } else if (currentTime === dinnerTime) {
            removeLockers();
        }
    }

    // //
    function removeLockers() {
        allowed = true;
        device.classList.add("allowed");
    }
});

// //

function openIt() {
    if (allowed) {
        device.classList.toggle("open");
    }
}
