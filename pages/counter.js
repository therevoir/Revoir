// JavaScript code to increment the counter
    let counterValue = parseInt(localStorage.getItem('counter')) || 200000;
    document.getElementById('counter').innerText = counterValue.toLocaleString();

    function incrementCounter() {
      counterValue += 19;
      document.getElementById('counter').innerText = counterValue.toLocaleString();
      localStorage.setItem('counter', counterValue);
    }

    // Increment the counter on page load
    incrementCounter();