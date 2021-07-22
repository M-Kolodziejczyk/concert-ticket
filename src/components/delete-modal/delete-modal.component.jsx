import React from "react";
import { useDispatch } from "react-redux";

import "./delete-modal.styles.scss";

const DeleteModal = ({
  title,
  deleteBtn,
  deleteConfirm,
  id,
  callback,
  successMessage,
  errorMessage,
}) => {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(callback(id));
    console.log("1");
  };

  return (
    <div className="delete-modal">
      <button
        type="button"
        className="btn btn-danger"
        data-bs-toggle="modal"
        data-bs-target="#deleteModal"
      >
        {deleteBtn || "Delete"}
      </button>

      <div
        className="modal fade"
        id="deleteModal"
        tabIndex="-1"
        aria-labelledby="deleteModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="deleteModalLabel">
                {title}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="modal-buttons">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleSubmit}
                  data-bs-dismiss="modal"
                >
                  {deleteConfirm || "Delete"}
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
              <div className="messages">
                {successMessage && <p className="success">{successMessage}</p>}
                {errorMessage && <p className="error">{errorMessage}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
