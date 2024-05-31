document.addEventListener("DOMContentLoaded", () => {
  let counter = 0;
  const updateCounterDisplay = () => {
    document.getElementById("counter").innerText = counter;
  };

  // Function to update counter and display
  const updateCounter = (value) => {
    counter += value;
    updateCounterDisplay();
  };

  // Add event listener for subtract button
  document.getElementById("buttonSubtract").addEventListener("click", () => {
    updateCounter(-1);
    // Push new state to history
    history.pushState({ counter }, "", `?counter=${counter}`);
  });

  document.getElementById("buttonAdd").addEventListener("click", () => {
    updateCounter(1);
    history.pushState({ counter }, "", `?counter=${counter}`);
  });

  updateCounterDisplay();
});
