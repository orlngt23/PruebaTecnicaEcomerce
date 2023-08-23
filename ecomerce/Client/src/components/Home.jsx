import React from "react";
import { NavLink } from "react-router-dom";
import Products from "./Products";

export default function home() {
  return (
    <div classNameName="hero">
      <div className="card text-bg-dark border-0">
        <img
          src="/assets/BaPixelArt.png"
          className="card-img"
          alt="Logo-pixel-art"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center p-5">
          <div classNameName="container">
            <h5 className="card-title display-5 fw-semibold mb-0">
              Emprendimiento de la Semana
            </h5>
            <br />
            <p className="card-text ">
              <h5 className="card-text-emprendimiento display-6 fw-semibold mb-0">
                Pixel Art
              </h5>
              <p className="card-text lead fs-2">
                <br />

                This is a wider card with supporting 
                <br/>
                text below as a natural
                <br />
                lead-in to additional content.
              </p>
            </p>
            <a href="https://www.instagram.com/pixelart.sv/" class="btn btn-outline-light me-4">
            Visitar
          </a>
          </div>
        </div>
      </div>
      <Products/>
    </div>
  );
}
