const BASE_URL = 'http://localhost:8000'; // Replace with your backend URL

const api = {
  async getCustomers() {
    const response = await fetch(`${BASE_URL}/api/customers/`);
    const data = await response.json();
    return data;
  },

  async createCustomer(customer) {
    const response = await fetch(`${BASE_URL}/api/customers/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(customer)
    });
    const data = await response.json();
    return data;
  },

  async updateCustomer(customer) {
    const response = await fetch(`${BASE_URL}/api/customers/${customer.id}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(customer)
    });
    const data = await response.json();
    return data;
  },

  async deleteCustomer(customerId) {
    const response = await fetch(`${BASE_URL}/api/customers/${customerId}/`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  }
};

export default api;
