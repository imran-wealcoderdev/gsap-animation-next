"use client";
import { useGSAP } from "@gsap/react";
import has3DCarousel from "@/lib/animation/has3dCarousel";

const Carousel3D = () => {
  useGSAP(() => {
    has3DCarousel();
  });

  return (
    <main className="bg-black h-[100vh]">
      <div className="demoWrapper w-[680px] h-[400px] my-[50px] mx-auto mb-[200px]">
        <div className="card box creative-pro max-w-[288px]  ">
          <img className="card-img-top" src="" alt="" />
          <div className="card-body p-6">
            Conception
            <small className="card-clr d-block mb-3">
              <br />
              Curabitur dictum odio id sapien placerat lacinia. In volutpat a
              elit et luctus.{" "}
            </small>
          </div>
        </div>

        <div className="card box creative-pro max-w-[288px]     ">
          <img className="card-img-top" src="" alt="" />
          <div className="card-body p-6">
            Sketch Up
            <small className="card-clr d-block mb-3">
              <br />
              Sed nec tincidunt erat. Duis nunc mi, dictum nec ligula quis,
              mollis condimentum odio. Mauris in orci id libero ultrices
              vestibulum.{" "}
            </small>
          </div>
        </div>

        <div className="card box creative-pro max-w-[288px]  ">
          <img className="card-img-top" src="" alt="" />
          <div className="card-body p-6">
            Discuss
            <small className="card-clr d-block mb-3">
              <br />
              Sed nec tincidunt erat. Duis nunc mi, dictum nec ligula quis,
              mollis condimentum odio. Mauris in orci id libero ultrices
              vestibulum.{" "}
            </small>
          </div>
        </div>

        <div className="card box creative-pro ">
          <img className="card-img-top" src="" alt="" />
          <div className="card-body p-6">
            Revise
            <small className="card-clr d-block mb-3">
              <br />
              Curabitur dictum odio id sapien placerat lacinia. In volutpat a
              elit et luctus.{" "}
            </small>
          </div>
        </div>

        <div className="card box creative-pro rounded-md overflow-hidden w-md-50 w-lg-25 ">
          <img className="card-img-top" src="" alt="" />
          <div className="card-body p-6">
            Approve
            <small className="card-clr d-block mb-3">
              <br />
              Curabitur dictum odio id sapien placerat lacinia. In volutpat a
              elit et luctus.{" "}
            </small>
          </div>
        </div>

        <div className="card box creative-pro rounded-md overflow-hidden w-md-50 w-lg-25 ">
          <img className="card-img-top" src="" alt="" />
          <div className="card-body p-6">
            Launch
            <small className="card-clr d-block mb-3">
              <br />
              Curabitur dictum odio id sapien placerat lacinia. In volutpat a
              elit et luctus. Proin eu pulvinar augue.{" "}
            </small>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Carousel3D;
