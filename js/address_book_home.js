window.addEventListener("DOMContentLoaded", (event) => {
    document.querySelector(".contact-count").textContent = contactList.length;
    createInnerHtml();
  });
  
  const createInnerHtml = () => {
    if (contactList.length == 0) {
      return;
    }
    const headerHtml = `<tr>
      <th>Full Name</th>
      <th>Address</th>
      <th>City</th>
      <th>State</th>
      <th>Zip Code</th>
      <th>Phone Number</th>
      </tr>`;
    let innerHtml = `${headerHtml}`;
    for (let contact of contactList) {
      innerHtml = `${innerHtml} 
          <tr>
          <td>${contact._name}</td>
          <td>${contact._address}</td>
          <td>${contact._city}</td>
          <td>${contact._state}</td>
          <td>${contact._zip}</td>
          <td>${contact._phoneNumber}</td>
          <td>
              <img src="../assets/icons/delete.svg" alt="delete" id="${contact._id}" onclick="remove(this)">
              <img src="../assets/icons/edit.svg" alt="update" id="${contact._id}" onclick="update(this)">
          </td>
          </tr>`;
    }
    document.querySelector("#table-display").innerHTML = innerHtml;
  };
  
  let contactList = [
    {
      _id: 1,
      _name: "Kunal",
      _phoneNumber: "91 9555425146",
      _address: "farrukhabad",
      _city: "fatehgarh",
      _state: "Uttar Pradesh",
      _zip: "209601",
    },
    {
      _id: 2,
      _name: "Nikhil",
      _phoneNumber: "91 9756678676",
      _address: "Noida",
      _city: "Noida",
      _state: "Uttar Pradesh",
      _zip: "457684",
    },
  ];