'use client'
import { useRouter } from 'next/navigation';
import { LoginLink , LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import {useKindeBrowserClient} from "@kinde-oss/kinde-auth-nextjs";


const Admin:React.FC = () => {
  const {isAuthenticated} = useKindeBrowserClient();

  const router = useRouter();

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      {!isAuthenticated ? (
        // <div className="p-6 bg-white rounded shadow-md">
        //   <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
        //   <input
        //     type="text"
        //     placeholder="Username"
        //     className="border p-2 w-full mb-2"
        //     value={username}
        //     onChange={(e) => setUsername(e.target.value)}
        //   />
        //   <input
        //     type="password"
        //     placeholder="Password"
        //     className="border p-2 w-full mb-4"
        //     value={password}
        //     onChange={(e) => setPassword(e.target.value)}
        //   />
        //   {error && <p className="text-red-500">{error}</p>}
        //   <button
        //     onClick={handleLogin}
        //     className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        //   >
        //     Login
        //   </button>
        // </div>
        <div className='p-6 bg-white rounded shadow-md'>
          <h2 className="text-2xl font-bold mb-4"><LoginLink>Admin login</LoginLink></h2>
          
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
          <button
            onClick={() => router.push('/admin/upload')}
            className="bg-green-500 text-white px-6 py-3 rounded mb-4 mr-4"
          >
            Upload a New Blog
          </button>
          <button
            onClick={() => router.push('/admin/edit')}
            className="bg-yellow-500 text-white px-6 py-3 rounded"
          >
            Edit an Existing Blog
          </button>
          <div>
          <button
            className="bg-red-500 text-white px-6 py-3 rounded"
          >
            <LogoutLink>logout</LogoutLink>
          </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
