import React, { useState, useEffect } from "react";
import Header from "./Includes/Header";
import Footer from "./Includes/Footer";
import { toast } from "react-toastify";

const AdminMessage = () => {
  const [editedMessage, setEditedMessage] = useState({
    id: "",
    name: "",
    email: "",
    subject: "",
    message: "",
    date: "",
    response: "",
  });

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        setEditedMessage({
          id: 8,
          name: "Emma Anderson",
          email: "emma.anderson@example.com",
          subject: "Product inquiry",
          message:
            "I am interested in purchasing one of your products but would like more details about its features. Can you provide additional information?",
          date: "24-03-2024",
          response:
            "Certainly! Please refer to our product page for detailed information about the features and specifications.",
        });
      } catch (error) {
        console.error("Error fetching Messages:", error);
      }
    };

    fetchMessage();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedMessage((prevMessage) => ({
      ...prevMessage,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  function handleUpdate() {
    toast.success("Message Updated !", {
      position: "top-right",
    });
  }

  return (
    <>
      <Header />
      <div className="container mt-4">
        <h1 className="text-center text-purple mainheading">Modify Message</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={editedMessage.name}
              readOnly
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              value={editedMessage.email}
              readOnly
            />
          </div>
          <div className="mb-3">
            <label htmlFor="subject" className="form-label">
              Subject:
            </label>
            <input
              type="text"
              className="form-control"
              id="subject"
              name="subject"
              value={editedMessage.subject}
              readOnly
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message:
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              value={editedMessage.message}
              readOnly
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="date" className="form-label">
              Date:
            </label>
            <input
              type="text"
              className="form-control"
              id="date"
              name="date"
              value={editedMessage.date}
              readOnly
            />
          </div>
          <div className="mb-3">
            <label htmlFor="response" className="form-label">
              Response:
            </label>
            <textarea
              className="form-control"
              id="response"
              name="response"
              value={editedMessage.response}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <button
                type="submit"
                className="btn btn-purple"
                onClick={handleUpdate}
              >
                Save Response
              </button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default AdminMessage;
