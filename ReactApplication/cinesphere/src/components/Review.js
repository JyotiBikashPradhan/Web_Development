import React, { useContext, useEffect, useState } from "react";
import ReactStars from "react-stars";
import { reviewRef, db } from "../firebase/firebase";
import {
  addDoc,
  doc,
  updateDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { TailSpin, ThreeDots } from "react-loader-spinner";
import swal from "sweetalert";
import { AppState } from "../App";
import { useNavigate } from "react-router-dom";

const Review = ({ id, prevRating, userRated }) => {
  const [rating, setRating] = useState(0);
  const useAppstate = useContext(AppState);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [reviewsLoading, setReviewsLoading] = useState(false);
  const [form, setForm] = useState("");
  const [data, setData] = useState([]);
  const [newComment, setNewComment]=useState(0);

  const sendReview = async () => {
    setLoading(true);
    try {
      if (useAppstate.login) {
        await addDoc(reviewRef, {
          movieid: id,
          name: useAppstate.userName,
          rating: rating,
          thought: form,
          timestamp: new Date().getTime(),
        });

        const ref = doc(db, "movies", id);
        await updateDoc(ref, {
          rating: prevRating + rating,
          rated: userRated + 1,
        });

        setRating(0);
        setForm("");
        setNewComment(newComment+1)

        swal({
          title: "review sent",
          icon: "success",
          buttons: false,
          timer: 1000,
        });
      }
      else {
        navigate('/login')

      }
    }
    catch (error) {
      swal({
        title: "something goes wrong",
        icon: "error",
        buttons: false,
        timer: 1000,
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    async function getData() {
      setReviewsLoading(true);
      setData([]);
      let quer = query(reviewRef, where("movieid", "==", id));
      const queryExecute = await getDocs(quer);
      queryExecute.forEach((doc) => {
        setData((prev) => [...prev, doc.data()]);
      });

      setReviewsLoading(false);
    }
    getData();
  }, [newComment]);

  return (
    <div className="mt-4 border-t-2 border-gray-700 w-full">
      <ReactStars
        size={25}
        value={rating}
        half={true}
        onChange={(rate) => setRating(rate)}
      />
      <input
        value={form}
        onChange={(e) => setForm(e.target.value)}
        placeholder="Share your thought...."
        className="w-full p-2 outline-none bg-zinc-900"
      />
      <button
        onClick={sendReview}
        className="w-full bg-green-600 flex justify-center p-1.5 mt-2"
      >
        {loading ? <TailSpin height={24} color="white" /> : "Share"}
      </button>

      {reviewsLoading ? (
        <div className="mt-6 flex justify-center">
          {" "}
          <ThreeDots height={10} color="white" />{" "}
        </div>
      ) : (
        <div className="mt-4">
          {data.map((e, i) => {
            return (
              <div className="bg-zinc-900 w-full border-b border-gray-600 p-2 mt-2" key={i}>
                <div className="flex items-center">
                  <p className="text-blue-500">{e.name}</p>
                  <p className="ml-3 text-sm">
                    {new Date(e.timestamp).toLocaleString()}
                  </p>
                </div>
                <ReactStars
                  size={15}
                  value={e.rating}
                  half={true}
                  edit={false}
 
                />
                <p>{e.thought}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Review;
