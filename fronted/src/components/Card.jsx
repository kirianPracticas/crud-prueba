import { useState } from "react";

function Card({
  IdDelete,
  title: propTitle,
  status: propStatus,
  description: propDescription,
  _id,
  editinProduct,
}) {
  const [title, setTitle] = useState(propTitle);
  const [status, setStatus] = useState(propStatus);
  const [description, setDescription] = useState(propDescription);
  const [editing, setEditing] = useState(false);

  const handleProductDelete = () => {
    IdDelete(_id);
  };

  const handleProductEdit = () => {
    setEditing(true);
  };

  const handleProductSaveEdition = () => {
    setEditing(false);
    const editedProduct = {
      id: _id,
      title: title,
      description: description,
      status: status,
    };
    editinProduct(editedProduct);
  };

  return (
    <>
      <div className="bg-orange-200 h-fit w-fit rounded-md flex flex-col items-center justify-center max-w-28 min-w-60  ">
        {editing ? (
          <>
            <input
              className="bg-white bg-opacity-50 rounded-md m-2"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              className="bg-white bg-opacity-50 rounded-md m-2"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              className="bg-white bg-opacity-50 rounded-md m-2"
              type="text"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
            <div className="w-full flex justify-end ">
              <button className="size-8" onClick={handleProductSaveEdition}>
                <img
                  className=""
                  src="public/icons/save-add-svgrepo-com.svg"
                  alt="save"
                />
              </button>
            </div>
          </>
        ) : (
          <>
            <h1>{title}</h1>
            <p className="m-2">{description}</p>
            <p>{status}</p>
            <div className="w-full flex justify-between">
              <button className="size-8" onClick={handleProductDelete}>
                <img src="public/icons/delete-svgrepo-com.svg" alt="delete" />
              </button>
              <button className="size-8" onClick={handleProductEdit}>
                <img src="public/icons/edit-3-svgrepo-com.svg" alt="edit" />
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
export default Card;
