// Set the target date for the sale
const targetDate = new Date("March 1, 2025 00:00:00").getTime();

// Function to update the countdown every second
const countdownFunction = setInterval(function() {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  if (timeLeft > 0) {
    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Update the countdown display
    document.getElementById("countdown").innerHTML = 
      `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
  } else {
    // When countdown ends
    clearInterval(countdownFunction);
    document.getElementById("countdown").innerHTML = "SALE STARTED!";
  }
}, 1000);
