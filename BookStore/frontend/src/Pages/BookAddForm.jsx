import { useForm } from "react-hook-form";
import Api from "../Api/Api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function Form() {
  const { register, handleSubmit, reset } = useForm();

  const { id } = useParams();
  const redirect = useNavigate();

  async function singleBook() {
    const res = await Api.get(`/api/book/${id}`);
    reset(res.data.book);
    console.log(res);
  }

  async function add(data) {
    if (id) {
      await Api.put(`/api/book/${id}`, data);
      redirect("/");
    } else {
      await Api.post("/api/book", data);
      redirect("/");
    }

    reset({
      title: "",
      author: "",
      price: "",
      category: "",
      description: "",
    });
  }

  useEffect(() => {
    singleBook();
  }, [id]);
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-7 col-lg-6">
          <div className="card shadow-sm">
            <div className="card-header bg-light text-center">
              <h4 className="mb-0">
                {id == null ? "Create Book" : "Update Book"}
              </h4>
            </div>

            <div className="card-body">
              <form method="post" onSubmit={handleSubmit(add)}>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Title</label>
                  <input
                    {...register("title")}
                    type="text"
                    className="form-control"
                    placeholder="Enter book title"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Author</label>
                  <input
                    {...register("author")}
                    type="text"
                    className="form-control"
                    placeholder="Enter author name"
                  />
                </div>

                <div className=" mb-3">
                  <label className="form-label fw-semibold">Price</label>
                  <input
                    {...register("price")}
                    type="number"
                    className="form-control"
                    placeholder="Enter price"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Category</label>
                  <input
                    {...register("category")}
                    type="text"
                    className="form-control"
                    placeholder="Enter category"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Description</label>
                  <textarea
                    {...register("description")}
                    className="form-control"
                    rows="3"
                    maxLength="50"
                    placeholder="Enter description"
                  />
                </div>

                <div className="d-grid mt-4">
                  {id == null ? (
                    <button type="submit" className="btn btn-success">
                      Submit
                    </button>
                  ) : (
                    <button type="submit" className="btn btn-warning">
                      Update
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
