// Simulated client data
const clients = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Alex Johnson" },
];

// Function to search for a client by ID
function searchClient() {
  const clientId = document.getElementById("clientIdInput").value;
  const resultContainer = document.getElementById("resultContainer");

  const client = clients.find((c) => c.id === parseInt(clientId));

  if (client) {
    resultContainer.innerText = "Client found: " + client.name;
  } else {
    resultContainer.innerText = "Client not found";
  }
}

// Attach click event listener to the search button
document.getElementById("searchButton").addEventListener("click", searchClient);
