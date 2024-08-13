const chatbot = document.getElementById('chatbot');
const conversation = document.getElementById('conversation');
const inputForm = document.getElementById('input-form');
const inputField = document.getElementById('input-field');

// Add event listener to input form
inputForm.addEventListener('submit', function(event) {
  // Prevent form submission
  event.preventDefault();

  // Get user input
  const input = inputField.value;

  // Clear input field
  inputField.value = '';
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });

  // Add user input to conversation
  let message = document.createElement('div');
  message.classList.add('chatbot-message', 'user-message');
  message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${input}</p>`;
  conversation.appendChild(message);

  // Generate chatbot response
  const response = generateResponse(input);

  // Add chatbot response to conversation
  message = document.createElement('div');
  message.classList.add('chatbot-message','chatbot');
  message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${response}</p>`;
  conversation.appendChild(message);
  message.scrollIntoView({behavior: "smooth"});
});

// Generate chatbot response function
function generateResponse(input) {
    // Add chatbot logic here
    const responses = [
      "Hello, how can I help you today? 😊",
      "Financing is the process of providing funds for business activities, making purchases, or investing. Financial institutions, such as banks, are in the business of providing capital to businesses, consumers, and investors to help them achieve their goals.",
      "As of my last knowledge update in January 2022, various government schemes for farmers have been implemented in India to support agricultural activities, improve farmers' income, and enhance rural development. Keep in mind that government programs and schemes may evolve, and new initiatives might have been introduced since my last update. Here are some notable schemes:Pradhan Mantri Kisan Samman Nidhi (PM-KISAN),Kisan Credit Card (KCC) Scheme,PM Fasal Bima Yojana (PMFBY),Pradhan Mantri Krishi Sinchayee Yojana (PMKSY)",
      "The Pradhan Mantri Fasal Bima Yojana (PMFBY) is a crop insurance scheme in India aimed at safeguarding farmers against financial losses due to crop failure. Launched to provide affordable insurance, it covers pre-sowing to post-harvest risks, including natural calamities and pests. Farmers pay a nominal premium, while the government and farmers share the burden of the premium cost. The scheme ensures timely compensation in the event of crop loss, promoting financial stability and encouraging risk-taking in agricultural practices. PMFBY plays a crucial role in supporting the livelihoods of farmers and fostering resilience in the face of uncertainties."
    ];
    
    // Return a random response
    return responses[Math.floor(Math.random() * responses.length)];
  }