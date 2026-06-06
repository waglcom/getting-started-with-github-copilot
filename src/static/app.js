document.addEventListener("DOMContentLoaded", () => {
  const activitiesList = document.getElementById("activities-list");
  const activitySelect = document.getElementById("activity");
  const signupForm = document.getElementById("signup-form");
  const messageDiv = document.getElementById("message");

  // Fetch activities from the API and render the page.
  async function fetchActivities() {
    try {
      const response = await fetch("/activities");
      const activities = await response.json();

      // Clear the loading message.
      activitiesList.innerHTML = "";

      // Populate the activity cards.
      Object.entries(activities).forEach(([name, details]) => {
        const activityCard = document.createElement("div");
        activityCard.className = "activity-card";

        const spotsLeft = details.max_participants - details.participants.length;

        activityCard.innerHTML = `
          <h4>${name}</h4>
          <p>${details.description}</p>
          <p><strong>일정:</strong> ${details.schedule}</p>
          <p><strong>남은 자리:</strong> ${spotsLeft}명</p>
        `;

        activitiesList.appendChild(activityCard);

        // Add the activity to the select dropdown.
        const option = document.createElement("option");
        option.value = name;
        option.textContent = name;
        activitySelect.appendChild(option);
      });
    } catch (error) {
      activitiesList.innerHTML = "<p>활동을 불러오지 못했습니다. 잠시 후 다시 시도하세요.</p>";
      console.error("Error fetching activities:", error);
    }
  }

  // Handle form submission.
  signupForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const activity = document.getElementById("activity").value;

    try {
      const response = await fetch(
        `/activities/${encodeURIComponent(activity)}/signup?email=${encodeURIComponent(email)}`,
        {
          method: "POST",
        }
      );

      const result = await response.json();

      if (response.ok) {
        messageDiv.textContent = result.message;
        messageDiv.className = "success";
        signupForm.reset();
      } else {
        messageDiv.textContent = result.detail || "오류가 발생했습니다.";
        messageDiv.className = "error";
      }

      messageDiv.classList.remove("hidden");

      // Hide the message after 5 seconds.
      setTimeout(() => {
        messageDiv.classList.add("hidden");
      }, 5000);
    } catch (error) {
      messageDiv.textContent = "신청하지 못했습니다. 다시 시도하세요.";
      messageDiv.className = "error";
      messageDiv.classList.remove("hidden");
      console.error("Error signing up:", error);
    }
  });

  // Initialize the app.
  fetchActivities();
});
