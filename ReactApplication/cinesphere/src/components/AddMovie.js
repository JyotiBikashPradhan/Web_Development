import React, { useContext, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { addDoc } from "firebase/firestore";
import { movieRef } from "../firebase/firebase";
import swal from "sweetalert";
import { AppState } from "../App";
import { useNavigate } from "react-router-dom";

const AddMovie = () => {
  const [form, setForm] = useState({
    title: "",
    year: "",
    description: "",
    image: "",
    rated: 0,
    rating: 0,
    director: "",
    genre: [],
  });
  const useAppstate = useContext(AppState);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const addMovie = async () => {
    setLoading(true);
    try {
      if (useAppstate.login) {

        
        const genreArray = form.genre.map((genre) => genre.trim());

        
        setForm({ ...form, genre: genreArray });

        await addDoc(movieRef, form);
        swal({
          title: "Successfully Added",
          icon: "success",
          buttons: false,
          timer: 3000,
        });
        setForm({
          title: "",
          year: "",
          description: "",
          image: "",
          director: "",
          genre: [],
        });
      }
      else {
        navigate('/login')
      }
    }
    catch (err) {
      swal({
        title: "Something went wrong",
        icon: "error",
        buttons: false,
        timer: 3000,
      });
    }
    setLoading(false);
  };

  return (
    <div className="bg-black min-h-screen flex items-center justify-center ">
      <section className="text-white body-font w-full sm:w-4/5 md:w-3/5 lg:w-2/5">
        <div className="container px-5 py-8 mx-auto">

          <div className="p-6 bg-gray-800 rounded-lg shadow-md">
            <div className="flex flex-col text-center w-full mb-4  border-b-2">
              <h1 className="text-3xl font-medium title-font mb-4">Add Movie</h1>
            </div>
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full md:w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-white">
                    Title
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.title}
                    onChange={(e) =>
                      setForm({ ...form, title: e.target.value })
                    }
                    className="w-full text-black bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-full md:w-1/2">
                <div class="relative">
                  <label for="email" class="leading-7 text-sm text-white">
                    Year
                  </label>
                  <input
                    type="year"
                    id="year"
                    name="year"
                    value={form.year}
                    onChange={(e) => setForm({ ...form, year: e.target.value })}
                    class="w-full text-black bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="image" class="leading-7 text-sm text-white">
                    Image
                  </label>
                  <input
                    id="image"
                    name="image"
                    value={form.image}
                    onChange={(e) =>
                      setForm({ ...form, image: e.target.value })
                    }
                    class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              <div class="p-2 w-full md:w-1/2">
                <div class="relative">
                  <label for="director" class="leading-7 text-sm text-white">
                    Director Name
                  </label>
                  <input
                    type="text"
                    id="director"
                    name="director"
                    value={form.director}
                    onChange={(e) => setForm({ ...form, director: e.target.value })}
                    class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-full md:w-1/2">
                <div class="relative">
                  <label for="genre" class="leading-7 text-sm text-white">
                    Genre (Comma-Separated)
                  </label>
                  <input
                    type="text"
                    id="genre"
                    name="genre"
                    value={form.genre.join(", ")}
                    onChange={(e) =>
                      setForm({ ...form, genre: e.target.value.split(", ") })
                    }
                    class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>


              <div class="p-2 w-full">
                <div class="relative">
                  <label for="Description" class="leading-7 text-sm text-white">
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={form.description}
                    onChange={(e) =>
                      setForm({ ...form, description: e.target.value })
                    }
                    class="w-full bg-white  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>

              <div className="pt-4 w-full">
                <button
                  onClick={addMovie}
                  className="flex mx-auto text-white w-full justify-center  bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-800 rounded text-lg"
                >
                  {loading ? <TailSpin height={25} color="white" /> : "Submit"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddMovie;

