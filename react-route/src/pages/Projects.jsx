import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";
function Projects() {
  return (
    <>
    <div>
      <h1 className="text-3xl mb-6">Projects</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div key={p.id} className="bg-gray-800 p-4 rounded">
            <h2 className="text-xl text-blue-400">{p.title}</h2>
            <p className="text-gray-400">{p.desc}</p>

            <Link
              to={`/projects/${p.id}`}
              className="text-blue-400 mt-2 inline-block">
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>

<br></br>

{/* Using caurosel */}
      <div className="max-w-6xl mx-auto px-6">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 3000 }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((p) => (
            <SwiperSlide key={p.id}>
              
              {/* Card */}
              <div className="bg-gray-800 p-4 rounded-xl shadow-lg hover:scale-105 transition duration-300">
                
                <h2 className="text-xl text-blue-400 font-bold">
                  {p.title}
                </h2>

                <p className="text-gray-400 mt-2">
                  {p.desc}
                </p>

                <Link
                  to={`/projects/${p.id}`}
                  className="text-blue-400 mt-4 inline-block"
                >
                  View Details →
                </Link>

              </div>

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      </>
  );
}

export default Projects;