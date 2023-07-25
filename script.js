// Seu web app Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI3rtJI3lJ6B3VC7Mren0X3PypZnUBOrs",
  authDomain: "pedeve-bd523.firebaseapp.com",
  projectId: "pedeve-bd523",
  storageBucket: "pedeve-bd523.appspot.com",
  messagingSenderId: "610962852482",
  appId: "1:610962852482:web:c4ee23b53228457d01029b",
  measurementId: "G-WXLS7HSH2L"
};

// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);

// Obtenha uma referência para o banco de dados do Firebase
const database = firebase.database();

// Função para pesquisar um cliente pelo ID
function searchClient() {
  const clientId = document.getElementById("clientIdInput").value;
  const resultContainer = document.getElementById("resultContainer");

  // Use o banco de dados do Firebase para obter os dados do cliente
  database.ref("clients/" + clientId).once("value")
    .then((snapshot) => {
      const client = snapshot.val();
      if (client) {
        resultContainer.innerText = "Cliente encontrado: " + client.name;
      } else {
        resultContainer.innerText = "Cliente não encontrado";
      }
    })
    .catch((error) => {
      console.error("Erro ao buscar dados:", error);
    });
}

// Adicione um evento de clique ao botão de pesquisa
document.getElementById("searchButton").addEventListener("click", searchClient);
