"use client";

import { IPost } from "@/types/posts";
import { FormEventHandler, useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { deletePost, editPost } from "@/api";
import Image from "next/image";

interface PostProps {
  post: IPost;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalDeleted, setOpenModalDeleted] = useState<boolean>(false);
  const [textToEdit, setTextToEdit] = useState<string>(post.description);
  const [titleToEdit, setTittle] = useState<string>(post.title);
  const [imageUrlToEdit, setImageUrl] = useState<string>(post.imageurl);

  const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await editPost({
      id: post.id,
      description: textToEdit,
      title: titleToEdit,
      imageurl: imageUrlToEdit
    });
    setOpenModalEdit(false);
    router.refresh();
  };

  const handleDeleteTask = async (id: number) => {
    await deletePost(id);
    setOpenModalDeleted(false);
    router.refresh();
  };

  return (
    <tr key={post.id} className="">
      <td className='w-1/5 '>{post.id}</td>
      <td className='w-1/5 '>{post.imageurl}</td>
      <td className='w-1/5 '>{post.title}</td>
      <td className='w-1/5 '>{post.description}</td>
      <td className='flex gap-5 '>
        <FiEdit
          onClick={() => setOpenModalEdit(true)}
          cursor='pointer'
          className='text-blue-500'
          size={25}
        />
        <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
          <form onSubmit={handleSubmitEditTodo}>
            <h3 className='font-bold text-lg ml-3'>Edit post</h3>
            <div className='modal-action flex flex-col justify-center text-center pr-3'>
              <input
                value={textToEdit}
                onChange={(e) => setTextToEdit(e.target.value)}
                type='text'
                placeholder='Description'
                className='input input-bordered w-full m-2'
              />
              <input
                value={titleToEdit}
                onChange={(e) => setTittle(e.target.value)}
                type='text'
                placeholder='Title'
                className='input input-bordered w-full m-2'
              />
              <input
                value={imageUrlToEdit}
                onChange={(e) => setImageUrl(e.target.value)}
                type='text'
                placeholder='Image Url'
                className='input input-bordered w-full m-2'
              />
              <button type='submit' className='btn bg-green-900 m-2 w-full'>
                Submit
              </button>
            </div>
          </form>
        </Modal>
        <FiTrash2
          onClick={() => setOpenModalDeleted(true)}
          cursor='pointer'
          className='text-red-500'
          size={25}
        />
        <Modal modalOpen={openModalDeleted} setModalOpen={setOpenModalDeleted}>
          <h3 className='text-lg'>
            Are you sure, you want to delete this Post?
          </h3>
          <div className='modal-action'>
            <button onClick={() => handleDeleteTask(post.id)} className='btn bg-red-900'>
              Yes
            </button>
          </div>
        </Modal>
      </td>
    </tr>
  );
};

export default Post;
