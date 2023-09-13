import catPhoto from "./assets/cat1.png";

export default function DonationCard({ children }) {
  return (
    <>
      <div className="container w-[90%] md:w-[616px] grid justify-content-center h-96 py-8">
        <div className="card bg-base-100 shadow-xl ">
          <figure>
            <img
              src={catPhoto}
              alt="A black cat looking straight into the camera. A cat tree is out of focus in the background"
            />
          </figure>
          <div className="card-body">{children}</div>
        </div>
      </div>
    </>
  );
}
