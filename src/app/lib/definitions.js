const User = {
  id: "",
  name: "",
  email: "",
  password: "",
};

const Customer = {
  id: "",
  name: "",
  email: "",
  image_url: "",
};

export const Invoice = {
  id: "",
  customer_id: "",
  amount: 0,
  date: "",
  status: ""
};

const Revenue = {
  month: "",
  revenue: 0,
};

const LatestInvoice = {
  id: "",
  name: "",
  image_url: "",
  email: "",
  amount: "",
};


const LatestInvoiceRaw = {
  id: "",
  name: "",
  image_url: "",
  email: "",
  amount: 0,
};

const InvoicesTable = {
  id: "",
  customer_id: "",
  name: "",
  email: "",
  image_url: "",
  date: "",
  amount: 0,
  status: "",
};

const CustomersTable = {
  id: "",
  name: "",
  email: "",
  image_url: "",
  total_invoices: 0,
  total_pending: 0,
  total_paid: 0,
};

const FormattedCustomersTable = {
  id: "",
  name: "",
  email: "",
  image_url: "",
  total_invoices: 0,
  total_pending: "",
  total_paid: "",
};

const CustomerField = {
  id: "",
  name: "",
};

const InvoiceForm = {
  id: "",
  customer_id: "",
  amount: 0,
  status: "", 
};
