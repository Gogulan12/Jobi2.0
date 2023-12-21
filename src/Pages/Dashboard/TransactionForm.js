import { useState, useEffect } from "react";
import { useFirestore } from "../../hooks/useFirestore";

export default function TransactionForm({ uid }) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [link, setLink] = useState("");
  const { addDocument, response } = useFirestore("wishlist");

  const handleSubmit = (e) => {
    e.preventDefault();
    addDocument({
      uid,
      name,
      company,
      link,
    });
  };

  // reset the form fields
  useEffect(() => {
    if (response.success) {
      setName("");
      setCompany("");
      setLink("");
    }
  }, [response.success]);

  return (
    <>
      <h3>Add a Job Posting</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Job Title:</span>
          <input
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>Company Name:</span>
          <input
            type="text"
            required
            onChange={(e) => setCompany(e.target.value)}
            value={company}
          />
        </label>
        <label>
          <span>Link to Apply:</span>
          <input
            type="text"
            required
            onChange={(e) => setLink(e.target.value)}
            value={link}
          />
        </label>
        <button>Add Transaction</button>
      </form>
    </>
  );
}
