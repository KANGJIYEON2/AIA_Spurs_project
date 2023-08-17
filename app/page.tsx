"use client";

export default function Home() {
  return (
    <div className="container hero">
      <div className="content">
        <span>discover</span>
        <h1>
          Sweet Donut <br></br> Heaven
        </h1>
        <hr />
        <p>
          Our Donut Collection Offers a Mouthwatering Array of Flavors,
          Toppings, and Shapes for Every Craving and Occasion.
        </p>
        <a href="#" className="btn">
          download app
        </a>
      </div>

      <div className="content-img">
        <img
          src="https://plus.unsplash.com/premium_photo-1663840175440-793153f1f0a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
          alt="bg image"
        />
      </div>
    </div>
  );
}
