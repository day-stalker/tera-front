import { redirect } from "next/navigation";
import { IPost } from "./types/posts";
import axios from "axios";

const baseUrl = 'http://localhost:3001';

export const getAllPosts = async (): Promise<IPost[]> => {
  const res = await fetch(`${baseUrl}/posts`, { cache: 'no-store' });
  const posts = await res.json();
  return posts;
}

export const addPost = async (post: IPost): Promise<IPost> => {
  const res = await fetch(`${baseUrl}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  })
  const newPost = await res.json();
  return newPost;
}

export const editPost = async (post: IPost): Promise<IPost> => {
  const res = await fetch(`${baseUrl}/posts/${post.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  })
  const updatedPost = await res.json();
  return updatedPost;
}

export const deletePost = async (id: number): Promise<void> => {
  await fetch(`${baseUrl}/posts/${id}`, {
    method: 'DELETE',
  })
}
interface RegisterProps {
  password: string;
  confirmPassword: string;
  email: string;
  username: string;
}

export const handleRegister = async ({ password, confirmPassword, email, username }: RegisterProps): Promise<void> => {
  try {
    if (password === confirmPassword && password.length > 6 && email && username) {
      const response = await axios.post('http://localhost:3001/auth/register', {
        email,
        password,
        username,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 201) {
        const user = response.data;
        localStorage.setItem('user', JSON.stringify(user));
        redirect('/posts');
      } else {
        const errorMessage = response.data;
        console.error('Registration failed with error:', errorMessage);
        alert('Registration failed. Please try again.');
      }
    } else {
      alert('Password is too short, at least 6 characters or passwords don\'t match');
    }
  } catch (error) {
    console.error('Error during registration:', error);
    alert('An error occurred during registration. Please try again.');
  }
};

interface LoginProps  {
  email: string;
  password: string;
}

export const handleLogin = async ({ email, password }: LoginProps): Promise<void> => {
  try {
    const response = await fetch('http://localhost:3001/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const user = await response.json();
      localStorage.setItem('user', JSON.stringify(user));
      redirect('/posts');
    } else {
      alert('Incorrect email or password. Please try again.');
      console.error('Login failed');
    }
  } catch (error) {
    console.error('Error during login:', error);
  }
};