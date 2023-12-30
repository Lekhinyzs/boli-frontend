import { useSelector } from "react-redux";
import { useRef, useState, useEffect } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
} from "../redux/user/userSlice";
import { toast } from "react-toastify";
import Header from "../component/Header";
import { useTheme } from "../contextapi/themeContext";

export default function Profile() {
  const dispatch = useDispatch();
  const fileRef = useRef(null);
  const [image, setImage] = useState(undefined);
  const [imagePercent, setImagePercent] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);

  const { currentUser, loading, error } = useSelector((state) => state.user);
  useEffect(() => {
    if (image) {
      handleFileUpload(image);
    }
  }, [image]);
  const handleFileUpload = async (image) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImagePercent(Math.round(progress));
      },
      (error) => {
        setImageError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, profilePicture: downloadURL })
        );
      }
    );
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/server/user/update/${currentUser._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserFailure(data));
        toast.error(data.message);
        return;
      }
      dispatch(updateUserSuccess(data));
      toast.success("User is updated successfully");
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(updateUserFailure(error));
    }
  };

  const handleDeleteAccount = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await fetch(`/server/user/delete/${currentUser._id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data));
        toast.error(data.message);
        return;
      }
      dispatch(deleteUserSuccess(data));
      toast.success("Account is deleted successfully");
    } catch (error) {
      dispatch(deleteUserFailure(error));
    }
  };

  // const handleSignOut = async () => {
  //   try {
  //     await fetch("/api/auth/signout");
  //     dispatch(signOut());
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const { darkMode } = useTheme();
  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="dark:bg-gray-900 bg-white">
        <Header />
        <div className="p-3 max-w-lg mx-auto pt-24 w-[100%] h-screen">
          <h1 className="text-3xl font-semibold text-center my-7 dark:text-white">
            Profile
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="file"
              ref={fileRef}
              hidden
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
            <img
              src={formData.profilePicture || currentUser.profilePicture}
              alt="profile"
              className="h-24 w-24 self-center cursor-pointer rounded-full object-cover mt-2"
              onClick={() => fileRef.current.click()}
            />
            <p className="text-sm self-center">
              {imageError ? (
                <span className="text-red-700">
                  Error uploading image (file size must be less than 2 MB)
                </span>
              ) : imagePercent > 0 && imagePercent < 100 ? (
                <span className="text-slate-700">{`Uploading: ${imagePercent} %`}</span>
              ) : imagePercent === 100 ? (
                <span className="text-green-700">
                  Image uploaded successfully
                </span>
              ) : (
                ""
              )}
            </p>
            <input
              defaultValue={currentUser.firstName}
              type="text"
              id="firstName"
              placeholder="First Name"
              className="bg-slate-100 rounded-lg p-3"
              onChange={handleChange}
            />
            <input
              defaultValue={currentUser.lastName}
              type="text"
              id="lastName"
              placeholder="Last Name"
              className="bg-slate-100 rounded-lg p-3"
              onChange={handleChange}
            />

            <input
              defaultValue={currentUser.email}
              type="email"
              id="email"
              placeholder="Email"
              className="bg-slate-100 rounded-lg p-3"
              onChange={handleChange}
            />
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="bg-slate-100 rounded-lg p-3"
              onChange={handleChange}
            />
            <button className="bg-cyan-700 text-white p-3 font-semibold rounded-lg uppercase hover:opacity-80 disabled:opacity-80">
              {loading ? "Loading..." : "Update"}
            </button>
          </form>
          <button className="p-3 bg-red-500 w-[100%] mt-5 rounded-lg hover:opacity-80 uppercase font-semibold ">
            <span
              onClick={handleDeleteAccount}
              className="text-white cursor-pointer"
            >
              Deactivate Account
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
