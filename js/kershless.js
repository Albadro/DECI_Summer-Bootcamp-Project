let allowed = false;
const device = document.getElementById("kershless");
device.addEventListener("click", openIt);

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
