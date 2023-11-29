"use client";

import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { FormEventHandler, useEffect, useState } from "react";
import { addPost } from "@/api";
import { useRouter } from "next/navigation";

const AddPost = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newPostValue, setNewPostValue] = useState<string>("");
  const [newTitleValue, setNewTitleValue] = useState<string>("");
  const [newImageUrlValue, setNewImageUrlValue] = useState<string>("");
  const [user, setUser] = useState()
  useEffect(() => {
    const userFromStorage = localStorage.getItem('user');
    if (userFromStorage) {
      const user = JSON.parse(userFromStorage);
      setUser(user);
    }
  }, []);

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addPost({
      id: 1,
      description: newPostValue,
      imageurl: newImageUrlValue,
      title: newTitleValue,
    });
    setNewPostValue("");
    setNewTitleValue("");
    setNewImageUrlValue("");
    setModalOpen(false);
    router.refresh();
  };

  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className='btn btn-primary w-full'
      >
        Add new Post <AiOutlinePlus className='ml-2' size={18} />
      </button>

      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewTodo}>
          <h3 className='font-bold text-lg ml-3'>Add new Post</h3>
          <div className='modal-action flex flex-col justify-center text-center pr-3'>
            <input
              value={newPostValue}
              onChange={(e) => setNewPostValue(e.target.value)}
              type='text'
              placeholder='Description'
              className='input input-bordered w-full m-2'
            />
            <input
                value={newImageUrlValue}
                onChange={(e) => setNewImageUrlValue(e.target.value)}
                type='text'
                placeholder='Image URL'
                className='input input-bordered w-full m-2'
              />
              <input
                value={newTitleValue}
                onChange={(e) => setNewTitleValue(e.target.value)}
                type='text'
                placeholder='Title'
                className='input input-bordered w-full m-2'
              />
            <button type='submit' className='btn bg-green-900 w-full mt-2'>
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddPost;
