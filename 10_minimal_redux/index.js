import { combineReducers, createStore } from "redux";

//3. Create Reducer, decide what should happen when some action is dispatched
const reducer = combineReducers({
  bank: (state = 0, action) => {
    if (action.type === "DEPOSIT") {
      return state + parseInt(action.amount);
    }

    if (action.type === "WITHDRAW") {
      return state - parseInt(action.amount);
    }

    return state;
  },
  clinets: (state = [], action) => {
    if (action.type === "DEPOSIT") {
      const copy = [...state];

      const user = copy.find((client) => client.name === action.id);

      user.deposit += parseInt(action.amount);

      return copy;
    }

    if (action.type === "WITHDRAW") {
      const copy = [...state];

      const user = copy.find((client) => client.name === action.id);

      user.loan += parseInt(action.amount);

      return copy;
    }

    if (action.type === "ADD_CLIENT") {
      return [...state, action.client];
    }

    return state;
  },
});

//1. Create Store
const store = createStore(reducer);

//2. Subscribe to store changes
store.subscribe(() => {
  console.log("store changed", store.getState());

  const clients = store.getState().clinets;

  generatClients(clients);

  document.querySelector("#balance").innerText = store.getState().bank;
});

function addClient(client) {
  store.dispatch({ type: "ADD_CLIENT", client: client });
}

const form = document.querySelector("#client_form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = e.target.querySelector("#name").value;

  addClient({ name: name, loan: 0, deposit: 0 });
});

function generatClients(clients) {
  document.querySelector("#clientsWrapper");

  let html = ``;

  clients.forEach((client) => {
    html += `<div class="card" style="width: 18rem">
        <div class="card-body clientCard" id="${client.name}">
          <h5 class="card-title">${client.name}</h5>
          <h4>Current balance: ${client.deposit - client.loan}</h4>

          <form class="deposit" data-id="${client.name}">
            <div class="mb-3">
              <input type="number" name="deposit" class="form-control" />
            </div>
            <button class="btn btn-secondary">Deposit money</button>
          </form>
          <hr />
          <form class="withdraw" data-id="${client.name}">
            <div class="mb-3">
              <input type="number" name="withdraw" class="form-control" />
            </div>
            <button class="btn btn-secondary">Withdraw money</button>
          </form>
        </div>
      </div>`;

    document.querySelector("#clientsWrapper").innerHTML = html;

    const depositForm = document.querySelectorAll(".clientCard .deposit");
    const withdrawForm = document.querySelectorAll(".clientCard .withdraw");

    depositForm.forEach((form) => {
      form.addEventListener("submit", (e) => {
        e.preventDefault();

        const amount = e.target.querySelector("input").value;

        const id = e.currentTarget.getAttribute("data-id");

        store.dispatch({ type: "DEPOSIT", amount: amount, id: id });
      });
    });

    withdrawForm.forEach((form) => {
      form.addEventListener("submit", (e) => {
        e.preventDefault();

        const amount = e.target.querySelector("input").value;

        const id = e.currentTarget.getAttribute("data-id");

        // 4. Dispatch action
        store.dispatch({ type: "WITHDRAW", amount: amount, id: id });
      });
    });
  });
}
